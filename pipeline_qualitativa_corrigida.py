"""
Camada qualitativa corrigida para o projeto Swift Analytics.

Esta rotina preserva o NPS oficial calculado pela nota do cliente e cria
indicadores complementares para leitura textual, risco e priorizacao.
"""

from __future__ import annotations

import json
import math
from pathlib import Path

import numpy as np
import pandas as pd


BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"
DASHBOARD_JS_DIR = BASE_DIR / "dashboard" / "js"

LIMIAR_BAIXA_CONFIANCA = 0.45
LIMIAR_COMENTARIO_LONGO = 35

AREAS_OFICIAIS = {
    "abastecimento": "abastecimento",
    "entrega_logistica": "abastecimento",
    "atendimento": "atendimento",
    "loja_fisica": "limpeza",
    "promocoes_fidelidade": "cultura de produtos",
    "produto": "produto",
    "outros": "produto",
}

PESO_AREA = {
    "abastecimento": 1.00,
    "atendimento": 0.85,
    "produto": 0.80,
    "limpeza": 0.70,
    "cultura de produtos": 0.55,
}

TIPO_TEXTUAL = {
    "positivo": "promotor",
    "neutro": "neutro",
    "negativo": "detrator",
}


def normalizar_flag(valor: str) -> str:
    return str(valor).strip().upper()


def nps_from_series(tipo: pd.Series, peso: pd.Series | None = None) -> float:
    if peso is None:
        peso = pd.Series(1.0, index=tipo.index)
    total = float(peso.sum())
    if total == 0:
        return np.nan
    promotores = float(peso[tipo.eq("promotor")].sum())
    detratores = float(peso[tipo.eq("detrator")].sum())
    return ((promotores - detratores) / total) * 100


def diagnosticar_linha(row: pd.Series) -> str:
    nota = row["tipo_cliente_nota"]
    texto = row["tipo_cliente_textual"]
    sentimento = row["sentimento"]

    if not row["tem_comentario"]:
        return "sem_comentario"

    if row["baixa_confianca"] and nota != texto:
        return "baixa_confianca_mantem_nota"

    if nota == "promotor" and sentimento == "positivo":
        return "consistente_positivo"
    if nota == "promotor" and sentimento == "negativo":
        return "promotor_em_risco"
    if nota == "promotor" and sentimento == "neutro":
        return "promotor_com_ressalva"

    if nota == "neutro" and sentimento == "positivo":
        return "neutro_positivo"
    if nota == "neutro" and sentimento == "negativo":
        return "neutro_negativo"
    if nota == "neutro" and sentimento == "neutro":
        return "consistente_neutro"

    if nota == "detrator" and sentimento == "negativo":
        return "consistente_negativo"
    if nota == "detrator" and sentimento == "positivo":
        return "detrator_recuperavel"
    if nota == "detrator" and sentimento == "neutro":
        return "detrator_em_observacao"

    return "diagnostico_indefinido"


def classificar_hibrido(row: pd.Series) -> str:
    if (not row["tem_comentario"]) or row["baixa_confianca"]:
        return row["tipo_cliente_nota"]
    return row["tipo_cliente_textual"]


def faixa_nps(nps: float) -> str:
    if pd.isna(nps):
        return "sem_dados"
    if nps >= 75:
        return "excelente"
    if nps >= 50:
        return "zona_qualidade"
    if nps >= 0:
        return "aperfeicoamento"
    return "critico"


def minmax(series: pd.Series) -> pd.Series:
    series = series.astype(float)
    minimo = series.min()
    maximo = series.max()
    if pd.isna(minimo) or pd.isna(maximo) or math.isclose(maximo, minimo):
        return pd.Series(0.0, index=series.index)
    return (series - minimo) / (maximo - minimo)


def preparar_base_qualitativa() -> pd.DataFrame:
    df = pd.read_parquet(DATA_DIR / "base_final_consolidada.parquet").copy()

    df["flag"] = df["flag"].map(normalizar_flag)
    df["data_avaliacao"] = pd.to_datetime(df["data_avaliacao"])
    df["mes_ano"] = df["data_avaliacao"].dt.to_period("M").astype(str)
    df["comentario_limpo"] = df["comentario_limpo"].fillna("").astype(str)
    df["tem_comentario"] = df["comentario_limpo"].str.strip().str.len().gt(0)

    df["tipo_cliente_nota"] = df["classificacao_nota"].str.lower()
    df["sentimento"] = df["sentimento_comentario"].str.lower()
    df["tipo_cliente_textual"] = df["sentimento"].map(TIPO_TEXTUAL).fillna("neutro")

    df["categoria_original"] = df["categoria"].str.lower()
    df["area_oficial"] = df["categoria_original"].map(AREAS_OFICIAIS).fillna("produto")

    df["baixa_confianca"] = df["confianca"].fillna(0).lt(LIMIAR_BAIXA_CONFIANCA)
    df["diagnostico"] = df.apply(diagnosticar_linha, axis=1)
    df["tipo_cliente_hibrido"] = df.apply(classificar_hibrido, axis=1)
    df["comentario_longo"] = df["qtd_palavras"].fillna(0).ge(LIMIAR_COMENTARIO_LONGO)

    recorrencia = (
        df[df["sentimento"].eq("negativo")]
        .groupby(["centro_nv2", "area_oficial"])
        .size()
        .rename("recorrencia_negativa_area_loja")
        .reset_index()
    )
    df = df.merge(recorrencia, on=["centro_nv2", "area_oficial"], how="left")
    df["recorrencia_negativa_area_loja"] = df["recorrencia_negativa_area_loja"].fillna(0)

    q95_palavras = max(float(df["qtd_palavras"].quantile(0.95)), 1.0)
    q95_recorrencia = max(float(df["recorrencia_negativa_area_loja"].quantile(0.95)), 1.0)

    score_sentimento = df["sentimento"].map({"negativo": 1.0, "neutro": 0.35, "positivo": 0.0}).fillna(0)
    score_tamanho = np.log1p(df["qtd_palavras"].clip(lower=0)) / np.log1p(q95_palavras)
    score_tamanho = score_tamanho.clip(0, 1)
    score_confianca = df["confianca"].fillna(0).clip(0, 1)
    score_area = df["area_oficial"].map(PESO_AREA).fillna(0.6)
    score_recorrencia = np.log1p(df["recorrencia_negativa_area_loja"]) / np.log1p(q95_recorrencia)
    score_recorrencia = score_recorrencia.clip(0, 1)

    df["indice_severidade"] = (
        100
        * (
            0.35 * score_sentimento
            + 0.20 * score_tamanho
            + 0.20 * score_confianca
            + 0.15 * score_area
            + 0.10 * score_recorrencia
        )
    ).round(2)
    df.loc[df["sentimento"].eq("positivo"), "indice_severidade"] = (
        df.loc[df["sentimento"].eq("positivo"), "indice_severidade"] * 0.35
    ).round(2)

    return df


def carregar_volume_operacional() -> pd.DataFrame:
    aval = pd.read_csv(DATA_DIR / "base_final.csv", sep=";")
    trans = pd.read_excel(DATA_DIR / "dados_transacoes_lojas.xlsx")

    aval_loja = (
        aval.groupby("centro_nv2", as_index=False)
        .agg(
            avaliacoes_ponderadas=("qtd_clientes", "sum"),
            linhas_avaliacao=("centro_nv2", "size"),
        )
    )
    trans_loja = (
        trans.rename(columns={"CentroNv2": "centro_nv2", "Transações": "transacoes"})
        .groupby("centro_nv2", as_index=False)
        .agg(transacoes=("transacoes", "sum"))
    )
    return aval_loja.merge(trans_loja, on="centro_nv2", how="outer")


def agregar_lojas(df: pd.DataFrame) -> pd.DataFrame:
    volume = carregar_volume_operacional()

    base = (
        df.groupby("centro_nv2", as_index=False)
        .agg(
            flag=("flag", "first"),
            uf=("uf", "first"),
            regiao=("regiao", "first"),
            comentarios=("centro_nv2", "size"),
            comentarios_negativos=("sentimento", lambda s: int(s.eq("negativo").sum())),
            comentarios_negativos_longos=(
                "comentario_longo",
                lambda s: int((s & df.loc[s.index, "sentimento"].eq("negativo")).sum()),
            ),
            pct_negativo=("sentimento", lambda s: round(float(s.eq("negativo").mean() * 100), 2)),
            severidade_media=("indice_severidade", "mean"),
            severidade_p90=("indice_severidade", lambda s: float(s.quantile(0.90))),
            nps_tradicional=("tipo_cliente_nota", nps_from_series),
            nps_textual=("tipo_cliente_textual", nps_from_series),
            nps_hibrido=("tipo_cliente_hibrido", nps_from_series),
        )
    )

    base = base.merge(volume, on="centro_nv2", how="left")
    for col in ["transacoes", "avaliacoes_ponderadas", "linhas_avaliacao"]:
        base[col] = base[col].fillna(0)

    base["delta_textual_vs_tradicional"] = (base["nps_textual"] - base["nps_tradicional"]).round(2)
    base["delta_hibrido_vs_tradicional"] = (base["nps_hibrido"] - base["nps_tradicional"]).round(2)

    pct_neg_norm = minmax(base["pct_negativo"])
    trans_norm = minmax(np.log1p(base["transacoes"]))
    long_norm = minmax(np.log1p(base["comentarios_negativos_longos"]))
    sev_norm = minmax(base["severidade_media"])
    nps_risk = ((100 - base["nps_hibrido"].clip(upper=100)) / 100).clip(0, 1)

    base["indice_prioridade"] = (
        100
        * (
            0.30 * nps_risk
            + 0.25 * pct_neg_norm
            + 0.15 * trans_norm
            + 0.15 * long_norm
            + 0.15 * sev_norm
        )
    ).round(2)

    base["faixa_nps_tradicional"] = base["nps_tradicional"].map(faixa_nps)
    base["faixa_nps_textual"] = base["nps_textual"].map(faixa_nps)
    base["faixa_nps_hibrido"] = base["nps_hibrido"].map(faixa_nps)

    base["quadrante_risco"] = np.select(
        [
            base["nps_tradicional"].ge(85) & base["pct_negativo"].lt(15),
            base["nps_tradicional"].lt(85) & base["pct_negativo"].lt(15),
            base["nps_tradicional"].ge(85) & base["pct_negativo"].ge(15),
        ],
        ["alta_performance", "atencao_leve", "risco_oculto"],
        default="critico",
    )
    base["risco_oculto"] = base["quadrante_risco"].eq("risco_oculto")

    return base.sort_values("indice_prioridade", ascending=False)


def agregar_regiao_uf(lojas: pd.DataFrame) -> pd.DataFrame:
    rows = []
    for nivel in ["regiao", "uf"]:
        agg = (
            lojas.groupby(nivel, as_index=False)
            .agg(
                lojas=("centro_nv2", "nunique"),
                lojas_regular=("flag", lambda s: int(s.eq("REGULAR").sum())),
                lojas_tocadora=("flag", lambda s: int(s.eq("TOCADORA").sum())),
                nps_tradicional=("nps_tradicional", "mean"),
                nps_textual=("nps_textual", "mean"),
                nps_hibrido=("nps_hibrido", "mean"),
                pct_negativo=("pct_negativo", "mean"),
                severidade_media=("severidade_media", "mean"),
                transacoes=("transacoes", "sum"),
                indice_prioridade=("indice_prioridade", "mean"),
            )
        )
        agg.insert(0, "nivel", nivel)
        agg = agg.rename(columns={nivel: "valor"})
        rows.append(agg)
    return pd.concat(rows, ignore_index=True).round(2)


def resumo_global(df: pd.DataFrame, lojas: pd.DataFrame) -> dict:
    tamanho = (
        df.groupby("sentimento")["qtd_palavras"]
        .agg(["count", "mean", "median"])
        .round(2)
        .reset_index()
    )
    corr = lojas[["transacoes", "nps_tradicional", "nps_textual", "nps_hibrido"]].corr(numeric_only=True)

    gestao = (
        lojas.groupby("flag")
        .agg(
            lojas=("centro_nv2", "nunique"),
            nps_tradicional=("nps_tradicional", "mean"),
            nps_textual=("nps_textual", "mean"),
            nps_hibrido=("nps_hibrido", "mean"),
            pct_negativo=("pct_negativo", "mean"),
            severidade_media=("severidade_media", "mean"),
            transacoes=("transacoes", "mean"),
            comentarios=("comentarios", "sum"),
        )
        .round(2)
        .reset_index()
    )

    return {
        "nps_tradicional_comentarios": round(nps_from_series(df["tipo_cliente_nota"]), 2),
        "nps_textual": round(nps_from_series(df["tipo_cliente_textual"]), 2),
        "nps_hibrido": round(nps_from_series(df["tipo_cliente_hibrido"]), 2),
        "pct_baixa_confianca": round(float(df["baixa_confianca"].mean() * 100), 2),
        "comentarios": int(len(df)),
        "lojas": int(lojas["centro_nv2"].nunique()),
        "diagnosticos": df["diagnostico"].value_counts().to_dict(),
        "tamanho_comentario_por_sentimento": tamanho.to_dict(orient="records"),
        "correlacao_transacoes": {
            "nps_tradicional": round(float(corr.loc["transacoes", "nps_tradicional"]), 3),
            "nps_textual": round(float(corr.loc["transacoes", "nps_textual"]), 3),
            "nps_hibrido": round(float(corr.loc["transacoes", "nps_hibrido"]), 3),
        },
        "gestao": gestao.to_dict(orient="records"),
        "matriz_risco": lojas["quadrante_risco"].value_counts().to_dict(),
        "risco_oculto_qtd": int(lojas["risco_oculto"].sum()),
    }


def gerar_js_dashboard(resumo: dict, lojas: pd.DataFrame) -> None:
    DASHBOARD_JS_DIR.mkdir(parents=True, exist_ok=True)

    pontos = (
        lojas[
            [
                "centro_nv2",
                "flag",
                "uf",
                "regiao",
                "transacoes",
                "avaliacoes_ponderadas",
                "nps_tradicional",
                "nps_textual",
                "nps_hibrido",
                "pct_negativo",
                "severidade_media",
                "indice_prioridade",
                "quadrante_risco",
                "risco_oculto",
            ]
        ]
        .round(2)
        .to_dict(orient="records")
    )

    payload = {
        "resumo": resumo,
        "top_prioridade": lojas.head(10).round(2).to_dict(orient="records"),
        "risco_oculto": lojas[lojas["risco_oculto"]].head(10).round(2).to_dict(orient="records"),
        "scatter_transacoes": pontos,
        "metodologia": {
            "nps_tradicional": "Calculado pela nota original do cliente. A nota original nao e alterada.",
            "nps_textual": "Calculado pelo sentimento do comentario: positivo=promotor textual, neutro=neutro textual, negativo=detrator textual.",
            "nps_hibrido": "Combina nota e comentario apenas quando a confianca do modelo e suficiente; baixa confianca mantem a classificacao pela nota.",
            "baixa_confianca_limiar": LIMIAR_BAIXA_CONFIANCA,
            "comentario_longo_palavras": LIMIAR_COMENTARIO_LONGO,
        },
    }

    js = "DATA.qualitativo = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n"
    (DASHBOARD_JS_DIR / "qualitativo.js").write_text(js, encoding="utf-8")


def gerar_insights_md(resumo: dict, lojas: pd.DataFrame, regiao_uf: pd.DataFrame) -> None:
    top = lojas.head(5)
    risco = lojas[lojas["risco_oculto"]].head(5)
    linhas = [
        "# Insights Qualitativos Corrigidos",
        "",
        "## Metodologia",
        "- O NPS tradicional permanece baseado apenas na nota original.",
        "- O NPS textual usa somente o sentimento do comentario.",
        "- O NPS hibrido usa o comentario apenas quando a confianca do modelo e suficiente; baixa confianca mantem a nota.",
        "- O indice de severidade prioriza problemas, mas nao substitui o NPS oficial.",
        "",
        "## Numeros Globais",
        f"- Comentarios analisados: {resumo['comentarios']:,}".replace(",", "."),
        f"- Lojas analisadas: {resumo['lojas']}",
        f"- NPS tradicional nos comentarios: {resumo['nps_tradicional_comentarios']}",
        f"- NPS textual: {resumo['nps_textual']}",
        f"- NPS hibrido: {resumo['nps_hibrido']}",
        f"- Comentarios de baixa confianca: {resumo['pct_baixa_confianca']}%",
        "",
        "## Tamanho do Comentario por Sentimento",
    ]
    for item in resumo["tamanho_comentario_por_sentimento"]:
        linhas.append(
            f"- {item['sentimento']}: media {item['mean']} palavras, mediana {item['median']}, n={item['count']}"
        )
    linhas += [
        "",
        "## Transacoes x NPS",
        f"- Correlacao transacoes x NPS tradicional: {resumo['correlacao_transacoes']['nps_tradicional']}",
        f"- Correlacao transacoes x NPS textual: {resumo['correlacao_transacoes']['nps_textual']}",
        f"- Correlacao transacoes x NPS hibrido: {resumo['correlacao_transacoes']['nps_hibrido']}",
        "- Leitura: volume de transacoes sozinho nao explica satisfacao; lojas grandes podem ter desempenhos bem diferentes.",
        "",
        "## Top 5 Lojas por Prioridade",
    ]
    for _, row in top.iterrows():
        linhas.append(
            f"- {row['centro_nv2']}: prioridade {row['indice_prioridade']}, NPS hibrido {row['nps_hibrido']:.1f}, negativo {row['pct_negativo']:.1f}%, transacoes {int(row['transacoes']):,}".replace(",", ".")
        )
    linhas += ["", "## Lojas com Risco Oculto"]
    if risco.empty:
        linhas.append("- Nenhuma loja no criterio atual de risco oculto.")
    else:
        for _, row in risco.iterrows():
            linhas.append(
                f"- {row['centro_nv2']}: NPS tradicional {row['nps_tradicional']:.1f}, negativo {row['pct_negativo']:.1f}%, severidade media {row['severidade_media']:.1f}"
            )

    linhas += ["", "## Visao Regional e UF", ""]
    cols = [
        "nivel",
        "valor",
        "lojas",
        "lojas_regular",
        "lojas_tocadora",
        "nps_tradicional",
        "nps_textual",
        "nps_hibrido",
        "pct_negativo",
        "severidade_media",
        "indice_prioridade",
    ]
    linhas.append("| " + " | ".join(cols) + " |")
    linhas.append("| " + " | ".join(["---"] * len(cols)) + " |")
    for _, row in regiao_uf[cols].iterrows():
        linhas.append("| " + " | ".join(str(row[col]) for col in cols) + " |")

    (BASE_DIR / "INSIGHTS_CLIENTE.md").write_text("\n".join(linhas) + "\n", encoding="utf-8")


def main() -> None:
    print("Gerando camada qualitativa corrigida...")
    df = preparar_base_qualitativa()
    lojas = agregar_lojas(df)
    regiao_uf = agregar_regiao_uf(lojas)
    resumo = resumo_global(df, lojas)

    df.to_parquet(DATA_DIR / "base_qualitativa_corrigida.parquet", index=False)
    df.to_csv(DATA_DIR / "base_qualitativa_corrigida.csv", index=False, sep=";", encoding="utf-8-sig")

    lojas.to_parquet(DATA_DIR / "indicadores_loja_corrigidos.parquet", index=False)
    lojas.to_csv(DATA_DIR / "indicadores_loja_corrigidos.csv", index=False, sep=";", encoding="utf-8-sig")

    regiao_uf.to_csv(DATA_DIR / "visao_regiao_uf_corrigida.csv", index=False, sep=";", encoding="utf-8-sig")

    gerar_js_dashboard(resumo, lojas)
    gerar_insights_md(resumo, lojas, regiao_uf)

    print("[OK] data/base_qualitativa_corrigida.parquet")
    print("[OK] data/indicadores_loja_corrigidos.parquet")
    print("[OK] data/visao_regiao_uf_corrigida.csv")
    print("[OK] dashboard/js/qualitativo.js")
    print("[OK] INSIGHTS_CLIENTE.md")
    print(json.dumps(resumo, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
