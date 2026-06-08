# Swift Analytics — Instruções para a Equipe

## Visão Geral do Projeto

Análise de NPS (Net Promoter Score) para a rede de lojas Swift, desenvolvida para o Germinare.
Cobre **228 lojas** e **58 gerentes** no período de **janeiro/2025 a janeiro/2026**.

Objetivo: gerar insights estratégicos comparando dois perfis de gerência:
- **REGULAR** — gerentes do mercado geral
- **TOCADORA** — gerentes business (perfil especializado)

**Data de entrega: 08/06/2026**

---

## Estrutura do Repositório

```
swift_analytics/
├── data/
│   ├── Dados para o Grillo.xlsx      ← avaliações NPS brutas
│   └── Transacoes Lojas.xlsx         ← transações por loja
├── analise_nps_swift_final.ipynb     ← notebook principal (pré-processamento concluído)
├── df_avaliacoes_tratado.parquet     ← base principal limpa
├── df_nps_loja_mes.parquet           ← NPS consolidado por loja × mês
├── df_comentarios_nlp.parquet        ← comentários limpos — ENTRADA PARA TODOS DE NLP
└── .backlog/
    ├── ProjetoSwift.md               ← briefing do cliente
    └── Planejamento.md               ← cronograma e fases
```

---

## Schema dos DataFrames

### `df_avaliacoes_tratado` — base principal limpa
| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `mes_ano` | Period[M] | Período da avaliação (ordenável) |
| `classificacao` | int | Nota do cliente (1–10) |
| `data_avaliacao` | datetime | Data exata da avaliação |
| `centro_nv2` | str | Identificador da loja |
| `qtd_clientes` | int | Clientes agrupados neste registro |
| `comentario` | str / NaN | Texto livre do cliente |
| `flag` | str | `REGULAR` ou `TOCADORA` |
| `tipo_cliente` | str | `Promotor` (9-10), `Neutro` (7-8), `Detrator` (1-6) |
| `nps_score` | float | Contribuição NPS ponderada por qtd_clientes |
| `outlier_iqr` | bool | Outlier por IQR em qtd_clientes |
| `outlier_zscore` | bool | Outlier por Z-Score em qtd_clientes |

### `df_nps_loja_mes` — NPS agregado
Colunas: `centro_nv2`, `mes_ano`, `flag`, `nps`, `total_avaliacoes`, `n_promotores`, `n_detratores`, `n_neutros`

### `df_comentarios_nlp` — entrada para NLP
Colunas: `centro_nv2`, `data_avaliacao`, `flag`, `tipo_cliente`, `comentario`, `comentario_limpo`, `n_palavras`, `n_chars`

> `comentario_limpo`: lowercase, sem pontuação, sem números, sem stopwords PT

---

## Cálculo do NPS

```
NPS = (Promotores − Detratores) / total_avaliações × 100
```
- **Promotores:** notas 9–10
- **Neutros:** notas 7–8 (não entram no cálculo)
- **Detratores:** notas 1–6

---

## Áreas de Avaliação das Lojas

Os comentários devem ser categorizados entre as seguintes áreas:
`produto` · `limpeza` · `atendimento` · `abastecimento` · `cultura de produtos`

---

## Pipeline NLP — Divisão de Tarefas

O pré-processamento está concluído. A entrada comum é `df_comentarios_nlp.parquet`.

| # | Tarefa | Coluna esperada no output |
|---|--------|--------------------------|
| 1 | Análise de sentimento | `sentimento` (`positivo`/`neutro`/`negativo`) |
| 2 | Classificação por área | `area` (uma das 5 áreas acima) |
| 3 | Clusterização de textos | `cluster` (int) + `cluster_label` (str) |
| 4 | Junção da pipeline e avaliação | DataFrame final enriquecido |
| 5 | Avaliação de visões para o front | definição das visualizações |

**Contrato de entrega das tarefas 1–3:**
Cada responsável deve exportar seu resultado como `df_nlp_t<N>_<nome>.parquet`, mantendo o índice original do `df_comentarios_nlp` para facilitar o merge.

---

## Convenções do Projeto

- Colunas em **snake_case**
- Datas como `pd.Period('M')` para ordenação correta em gráficos
- Texto limpo: lowercase, sem pontuação, sem números, stopwords PT removidas
- Outliers **não são removidos** — usar `outlier_iqr`/`outlier_zscore` como filtro opcional
- Exportar sempre em `.parquet` (snappy) + `.csv` como backup

---

## Playbooks

### Carregar os dados processados
```python
import pandas as pd

df = pd.read_parquet("df_avaliacoes_tratado.parquet")
df_nps = pd.read_parquet("df_nps_loja_mes.parquet")
df_nlp = pd.read_parquet("df_comentarios_nlp.parquet")

# Restaurar Period após leitura de parquet
df["mes_ano"] = df["mes_ano"].dt.to_period("M")
df_nps["mes_ano"] = df_nps["mes_ano"].dt.to_period("M")
```

### Carregar dados brutos (reprocessar do zero)
```python
import os, pandas as pd

df_aval = pd.read_excel(os.environ["EXCEL_CAMINHO_DADOS"])
df_trans = pd.read_excel(os.environ["EXCEL_CAMINHO_TRANSACOES"])
```

### Filtrar apenas comentários válidos para NLP
```python
df_nlp = pd.read_parquet("df_comentarios_nlp.parquet")
df_nlp = df_nlp[df_nlp["comentario_limpo"].str.strip().str.len() > 0]
```

### Exportar resultado NLP
```python
df_resultado.to_parquet("df_nlp_t<N>_<seu_nome>.parquet", index=True)
df_resultado.to_csv("df_nlp_t<N>_<seu_nome>.csv", index=True)
```

### Comparar REGULAR vs TOCADORA
```python
df_nps = pd.read_parquet("df_nps_loja_mes.parquet")
resumo = df_nps.groupby("flag")["nps"].agg(["mean", "median", "std"]).round(2)
print(resumo)
```
