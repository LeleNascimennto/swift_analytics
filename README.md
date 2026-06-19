# Swift Analytics

Análise de NPS e processamento de linguagem natural para a rede de lojas **Swift**, desenvolvida para o **Germinare**.

- **227 lojas · 169 REGULAR · 58 TOCADORA · Jan/2025 – Mai/2026** · 116.605 comentários · 4 UFs
- Comparativo entre perfis **REGULAR** e **TOCADORA** (business)
- Pipeline completa: pré-processamento → NLP → dashboard


<br>


## Estrutura do Projeto
```
swift_analytics/
├── pre_processamento_swift.ipynb     ← notebook de pré-processamento
├── EDA_NPS_Swift.ipynb               ← notebook de análise exploratória
|
├── df_avaliacoes_tratado.parquet     ← base principal limpa
├── df_nps_loja_mes.parquet           ← NPS por loja × mês
├── df_comentarios_nlp.parquet        ← comentários prontos para NLP
|
├── data/
|   ├── dados_nps_swift.xlsx          ← avaliações NPS brutas
|   ├── dados_transacoes_lojas.xlsx   ← transações por loja
|   └── base_final.csv                ← base processada consolidada
└── .backlog/
    ├── ProjetoSwift.md               ← briefing do cliente
    └── Planejamento.md               ← cronograma e fases
```


<br>


## Pipeline
```
Dados brutos (Excel)
            ▼
[ Pré-processamento ]  pre_processamento_swift.ipynb
limpeza · datas · merge · NPS · outliers · EDA
            ▼
df_comentarios_nlp.parquet <- entrada comum para NLP
            │
┌───────────|──────────────┐
▼           ▼              ▼
[T1]        [T2]           [T3]
Análise     Classificação  Clusterização
Sentimento  por Área       de Textos
└───────────┬──────────────┘
            ▼
[ T4 · Junção + Avaliação do Modelo ]
            ▼
df_nlp_final.parquet
            ▼
[ T5 · Front / Dashboard ]
```


<br>


## Cálculo do NPS
```
NPS = (Promotores − Detratores) / total_avaliações × 100
```
| Tipo     | Notas |
|----------|-------|
| Promotor | 9 - 10 |
| Neutro   | 7 - 8 |
| Detrator | 1 - 6 |


<br>


## Setup

### 1. Variáveis de ambiente
Defina antes de executar qualquer notebook:
```powershell
$env:EXCEL_CAMINHO_DADOS      = "data\dados_nps_swift.xlsx"
$env:EXCEL_CAMINHO_TRANSACOES = "data\dados_transacoes_lojas.xlsx"
```

### 2. Instalar dependências
```powershell
pip install -r requirements.txt
```

### 3. Executar o notebook
```powershell
jupyter notebook pre_processamento_swift.ipynb
```


<br>


## Dados exportados
| Arquivo | Descrição |
|---------|-----------|
| `df_avaliacoes_tratado.parquet` | Base principal limpa com flags de outlier e tipo de cliente |
| `df_nps_loja_mes.parquet`       | NPS agregado por loja e mês, separado por flag |
| `df_comentarios_nlp.parquet`    | Comentários válidos com texto limpo e métricas básicas |
| `df_nlp_final.parquet`          | Output da pipeline NLP completa (gerado na T4) |

Carregar em Python:

```python
import pandas as pd

df     = pd.read_parquet("df_avaliacoes_tratado.parquet")
df_nps = pd.read_parquet("df_nps_loja_mes.parquet")
df_nlp = pd.read_parquet("df_comentarios_nlp.parquet")

# Restaurar Period após leitura
df["mes_ano"]     = df["mes_ano"].dt.to_period("M")
df_nps["mes_ano"] = df_nps["mes_ano"].dt.to_period("M")
```


<br>


## Divisão de Tarefas — Pipeline NLP
| # | Tarefa | Coluna gerada |
|---|--------|---------------|
| 1 | Análise de sentimento            | `sentimento` |
| 2 | Classificação por área           | `area` |
| 3 | Clusterização de textos          | `cluster`, `cluster_label` |
| 4 | Junção da pipeline e avaliação   | `df_nlp_final.parquet` |
| 5 | Avaliação de visões para o front | dashboard |

> Cada responsável exporta seu resultado como `df_nlp_t<N>_<nome>.parquet`, preservando o índice original do `df_comentarios_nlp`.
