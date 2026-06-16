"""
Pipeline NLP: Junção e Avaliação
Source: data/base_final_consolidada.parquet (NPS_Swift_EntregaFinal_executado.ipynb)
Adds cluster labels via KMeans, renames cols to contract, exports df_nlp_final.parquet
"""
import warnings
warnings.filterwarnings("ignore")

import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score

# ── 1. Base NLP completa ──────────────────────────────────────────────────────
print("Carregando df_comentarios_nlp.parquet ...")
df_base = pd.read_parquet("df_comentarios_nlp.parquet")
print(f"  Base completa: {df_base.shape}")

# ── 2+3. Sentimento + Área do notebook executado ──────────────────────────────
print("Carregando base_final_consolidada.parquet ...")
df_consol = pd.read_parquet("data/base_final_consolidada.parquet")
df_consol["data_avaliacao"] = pd.to_datetime(df_consol["data_avaliacao"])
df_base["data_avaliacao"] = pd.to_datetime(df_base["data_avaliacao"])

MAPA_AREA = {
    "abastecimento":        "abastecimento",
    "atendimento":          "atendimento",
    "loja_fisica":          "limpeza",
    "entrega_logistica":    "abastecimento",
    "promocoes_fidelidade": "cultura de produtos",
    "outros":               "produto",
}
df_consol["area"] = df_consol["categoria"].map(MAPA_AREA).fillna("produto")
df_consol = df_consol.rename(columns={"sentimento_comentario": "sentimento"})

KEY = ["centro_nv2", "data_avaliacao", "comentario"]
df_merged = df_base.merge(
    df_consol[KEY + ["sentimento", "area"]],
    on=KEY, how="left"
)

# Fallback sentimento via nota NPS (linhas sem comentário)
MAPA_SENT = {"promotor": "positivo", "neutro": "neutro", "detrator": "negativo"}
sem_sent = df_merged["sentimento"].isna()
df_merged.loc[sem_sent, "sentimento"] = df_merged.loc[sem_sent, "nps_cat"].map(MAPA_SENT)

# Fallback área por palavras-chave
KEYWORDS_AREA = {
    "limpeza":             ["limpo","sujeira","limpeza","higiene","sujo","organizado"],
    "atendimento":         ["atendimento","atendente","educado","grosso","cordial","fila"],
    "abastecimento":       ["falta","abastecimento","prateleira","estoque","vazio","reposição"],
    "cultura de produtos": ["qualidade","variedade","fresco","vencido","preço","caro","promoção"],
    "produto":             ["carne","frango","peixe","linguiça","corte","porção"],
}
def classify_area(text):
    if pd.isna(text) or str(text).strip() == "":
        return "produto"
    t = str(text).lower()
    for area, kws in KEYWORDS_AREA.items():
        if any(kw in t for kw in kws):
            return area
    return "produto"

sem_area = df_merged["area"].isna()
df_merged.loc[sem_area, "area"] = df_merged.loc[sem_area, "comentario_limpo"].apply(classify_area)

# ── 4. Clusterização (Task 3) — TF-IDF + KMeans ──────────────────────────────
print("Clusterizando textos ...")
mask_valid = df_merged["comentario_limpo"].notna() & (df_merged["comentario_limpo"].str.strip().str.len() > 0)
df_valid = df_merged[mask_valid].copy()

tfidf = TfidfVectorizer(max_features=500, ngram_range=(1, 2))
X = tfidf.fit_transform(df_valid["comentario_limpo"])

K = 5
km = KMeans(n_clusters=K, random_state=42, n_init=10)
df_valid["cluster"] = km.fit_predict(X)

CLUSTER_LABELS = {
    0: "Qualidade e Produto",
    1: "Atendimento",
    2: "Preço e Promoções",
    3: "Limpeza e Estrutura",
    4: "Abastecimento",
}
df_valid["cluster_label"] = df_valid["cluster"].map(CLUSTER_LABELS)

df_merged = df_merged.merge(df_valid[KEY + ["cluster", "cluster_label"]], on=KEY, how="left")
df_merged["cluster"] = df_merged["cluster"].fillna(-1).astype(int)
df_merged["cluster_label"] = df_merged["cluster_label"].fillna("sem_comentario")

# ── 5. Avaliação ──────────────────────────────────────────────────────────────
print("\n=== AVALIAÇÃO ===")
print("\nSentimento:")
print(df_merged["sentimento"].value_counts(normalize=True).round(3).to_string())

print("\nÁrea:")
print(df_merged["area"].value_counts(normalize=True).round(3).to_string())
invalidas = df_merged[~df_merged["area"].isin({"produto","limpeza","atendimento","abastecimento","cultura de produtos"})]
print(f"Registros com área inválida: {len(invalidas)}")

print("\nClusters:")
print(df_merged[df_merged["cluster"] >= 0]["cluster_label"].value_counts().to_string())

try:
    score = silhouette_score(X, df_valid["cluster"], metric="cosine", sample_size=2000, random_state=42)
    print(f"\nSilhouette Score: {score:.4f}")
except Exception as e:
    print(f"\nSilhouette Score: erro — {e}")

print("\nNulos nas colunas NLP:")
for col in ["sentimento", "area", "cluster", "cluster_label"]:
    print(f"  {col}: {df_merged[col].isna().sum()}")

# ── 6. Export ─────────────────────────────────────────────────────────────────
print("\nExportando ...")
df_merged.to_parquet("df_nlp_final.parquet", index=True)
df_merged.to_csv("df_nlp_final.csv", index=True)
print(f"[OK] df_nlp_final.parquet: {df_merged.shape}")
print(f"Colunas NLP: sentimento, area, cluster, cluster_label")
