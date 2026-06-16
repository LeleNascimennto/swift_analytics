"""
Task #4 — Pipeline NLP: Junção e Avaliação
Loads sentiment + area from existing inference outputs,
runs clustering, joins everything, evaluates, exports df_nlp_final.parquet
"""
import warnings
warnings.filterwarnings("ignore")

import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score

# ── 1. Base NLP ──────────────────────────────────────────────────────────────
print("Carregando df_comentarios_nlp.parquet ...")
df_base = pd.read_parquet("df_comentarios_nlp.parquet")
print(f"  Base: {df_base.shape}")

# ── 2. Sentimento (Task 1) ────────────────────────────────────────────────────
print("\nCarregando sentimento da inferência ...")
df_inf = pd.read_csv(
    "data/base_inferencia_completa.csv",
    encoding="utf-8-sig", sep=None, engine="python",
    usecols=["centro_nv2", "data_avaliacao", "comentario", "sentimento_pred", "categoria", "confianca"]
)
df_inf["data_avaliacao"] = pd.to_datetime(df_inf["data_avaliacao"])
df_base["data_avaliacao"] = pd.to_datetime(df_base["data_avaliacao"])

df_t1 = df_inf[["centro_nv2", "data_avaliacao", "comentario", "sentimento_pred"]].rename(
    columns={"sentimento_pred": "sentimento"}
)

# ── 3. Área (Task 2) — mapear categorias existentes para as 5 oficiais ────────
MAPA_AREA = {
    "abastecimento":        "abastecimento",
    "atendimento":          "atendimento",
    "loja_fisica":          "limpeza",
    "entrega_logistica":    "abastecimento",
    "promocoes_fidelidade": "cultura de produtos",
    "outros":               "produto",
}
df_t2 = df_inf[["centro_nv2", "data_avaliacao", "comentario", "categoria"]].copy()
df_t2["area"] = df_t2["categoria"].map(MAPA_AREA).fillna("produto")
df_t2 = df_t2.drop(columns=["categoria"])

# ── 4. Merge sentimento + área na base ───────────────────────────────────────
print("Fazendo merge sentimento + área ...")
KEY = ["centro_nv2", "data_avaliacao", "comentario"]
df_merged = df_base.merge(df_t1, on=KEY, how="left")
df_merged = df_merged.merge(df_t2, on=KEY, how="left")

# Fallback: comentários sem match recebem sentimento via nota NPS
MAPA_SENT = {"promotor": "positivo", "neutro": "neutro", "detrator": "negativo"}
sem_sent = df_merged["sentimento"].isna()
df_merged.loc[sem_sent, "sentimento"] = df_merged.loc[sem_sent, "nps_cat"].map(MAPA_SENT)

# Fallback área: classificação por palavras-chave
KEYWORDS_AREA = {
    "limpeza":             ["limpo","sujeira","limpeza","higiene","sujo","limpa","organizado","desorganizado"],
    "atendimento":         ["atendimento","atendente","funcionario","funcionários","educado","grosso","simpático","cordial","rapido","demorou","fila"],
    "abastecimento":       ["falta","abastecimento","produto","produtos","prateleira","estoque","vazio","desabastecido","reposição"],
    "cultura de produtos": ["qualidade","variedade","fresco","vencido","preço","caro","barato","promoção","oferta","sabor","maturação"],
    "produto":             ["carne","frango","peixe","linguiça","corte","porção","embalagem"],
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

# ── 5. Clusterização (Task 3) — TF-IDF + KMeans ──────────────────────────────
print("\nClusterizando textos ...")
df_nlp_valid = df_merged[df_merged["comentario_limpo"].notna() & (df_merged["comentario_limpo"].str.strip().str.len() > 0)].copy()

tfidf = TfidfVectorizer(max_features=500, ngram_range=(1, 2))
X = tfidf.fit_transform(df_nlp_valid["comentario_limpo"].fillna(""))

K = 5
km = KMeans(n_clusters=K, random_state=42, n_init=10)
df_nlp_valid["cluster"] = km.fit_predict(X)

CLUSTER_LABELS = {
    0: "Qualidade e Produto",
    1: "Atendimento",
    2: "Preço e Promoções",
    3: "Limpeza e Estrutura",
    4: "Abastecimento",
}
df_nlp_valid["cluster_label"] = df_nlp_valid["cluster"].map(CLUSTER_LABELS)

# Propagar cluster de volta para df_merged
df_merged = df_merged.merge(
    df_nlp_valid[KEY + ["cluster", "cluster_label"]],
    on=KEY, how="left"
)
df_merged["cluster"] = df_merged["cluster"].fillna(-1).astype(int)
df_merged["cluster_label"] = df_merged["cluster_label"].fillna("sem_comentario")

# ── 6. Avaliação ──────────────────────────────────────────────────────────────
print("\n=== AVALIAÇÃO ===")

print("\nSentimento:")
print(df_merged["sentimento"].value_counts(normalize=True).round(3).to_string())

print("\nÁrea:")
print(df_merged["area"].value_counts(normalize=True).round(3).to_string())
AREAS_VALIDAS = {"produto", "limpeza", "atendimento", "abastecimento", "cultura de produtos"}
invalidas = df_merged[~df_merged["area"].isin(AREAS_VALIDAS)]
print(f"Registros com área inválida: {len(invalidas)}")

print("\nClusters:")
print(df_merged[df_merged["cluster"] >= 0]["cluster_label"].value_counts().to_string())

print("\nSilhouette Score (sample=2000):")
try:
    valid_mask = df_nlp_valid.index.isin(df_nlp_valid.index)
    score = silhouette_score(X, df_nlp_valid["cluster"], metric="cosine", sample_size=2000, random_state=42)
    print(f"  Score: {score:.4f} (> 0.25 razoável, > 0.5 bom)")
except Exception as e:
    print(f"  Erro: {e}")

print("\nNulos nas colunas NLP:")
for col in ["sentimento", "area", "cluster", "cluster_label"]:
    n = df_merged[col].isna().sum()
    print(f"  {col}: {n}")

# ── 7. Export ─────────────────────────────────────────────────────────────────
print("\nExportando ...")
df_merged.to_parquet("df_nlp_final.parquet", index=True)
df_merged.to_csv("df_nlp_final.csv", index=True)

print(f"\n[OK] df_nlp_final.parquet exportado: {df_merged.shape}")
print(f"Colunas: {list(df_merged.columns)}")
