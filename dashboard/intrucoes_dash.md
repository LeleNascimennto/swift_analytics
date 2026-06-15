# Instruções para Construção do Dashboard — NPS Swift

## Arquivos de entrada (gerados pelos notebooks)

| Arquivo | Gerado por | Conteúdo |
|---|---|---|
| `data/base_inferencia_completa.csv` | `Analises_Negocio_Swift.ipynb` | Base completa: sentimento + categoria + NPS ajustado |
| `data/nps_comparativo_lojas.csv` | `NPS_Ajustado_Swift.ipynb` | NPS trad + ajustado + delta + alerta por loja |
| `data/analise_por_loja.csv` | `Analises_Negocio_Swift.ipynb` | Tabela completa por loja: top3 problemas, elogios, % sentimento |
| `data/sentimento_por_loja.csv` | `Analise_Sentimento_Swift.ipynb` | % sentimento por loja |

---

## Estrutura sugerida do site (páginas)

### Página 1 — Visão Geral (`index.html`)
**O que mostrar:**
- KPI cards: % positivo / neutro / negativo geral
- Gráfico de linha: evolução mensal do % negativo ao longo do ano
- Comparativo REGULAR vs TOCADORA: barras lado a lado com os 3 sentimentos
- Tabela: top 5 problemas e top 5 elogios da rede

**Dados:** `base_inferencia_completa.csv` agrupado por `mes_ano` e `sentimento_pred`

---

### Página 2 — Ranking de Lojas (`lojas.html`)
**O que mostrar:**
- Tabela filtrável com todas as lojas: NPS tradicional, NPS ajustado, delta, % negativo
- Cores nas células: verde/amarelo/vermelho conforme zona de risco
- Filtros: por flag (REGULAR / TOCADORA), por UF, por faixa de NPS
- Destaque para lojas com `alerta = ALERTA_QUEDA`

**Dados:** `nps_comparativo_lojas.csv` + `analise_por_loja.csv`

---

### Página 3 — Detalhe da Loja (`loja.html?id=XXXXX`)
**O que mostrar (por loja selecionada):**
- NPS tradicional vs ajustado (com seta indicando se subiu/caiu)
- % positivo / neutro / negativo (barras empilhadas)
- Top 3 categorias de problemas (com 2-3 exemplos reais de comentários)
- Top 3 categorias de elogios (com 2-3 exemplos reais)
- Evolução mensal do sentimento (gráfico de linha)

**Dados:** `analise_por_loja.csv` + `base_inferencia_completa.csv` filtrado por loja

---

### Página 4 — Compilado Executivo (`executivo.html`)
**O que mostrar (linguagem para gestão, sem jargão técnico):**
- Resumo em texto: "X% dos clientes expressam satisfação..." 
- 3 fortalezas da rede (cards com ícone + título + exemplo de comentário)
- 3 pontos de atenção (mesma estrutura)
- Insight não óbvio em destaque (box colorido)
- Comparativo regional se disponível

**Dados:** resultado das células 3.4.2 a 3.4.5 do `Analises_Negocio_Swift.ipynb`

---

## Como gerar os gráficos interativos (Plotly → HTML)

Nos notebooks, qualquer gráfico `matplotlib` pode ser refeito com `plotly` e exportado:

```python
import plotly.express as px

# Exemplo: gráfico de linha da evolução mensal
fig = px.line(evol_neg_pct.reset_index(),
              x='mes_ano', y='negativo',
              title='Evolução do Sentimento Negativo',
              labels={'negativo': '% Negativo', 'mes_ano': 'Mês'})
fig.update_traces(line_color='#c0392b', line_width=2)
fig.write_html('dashboard/grafico_evolucao.html')  # HTML standalone interativo
```

```python
# Exemplo: tabela de lojas com cores
fig = go.Figure(data=[go.Table(
    header=dict(values=['Loja','NPS Trad','NPS Ajust','Delta','% Negativo']),
    cells=dict(values=[df_nps['centro_nv2'], df_nps['nps_tradicional'], ...])
)])
fig.write_html('dashboard/tabela_lojas.html')
```

Cada `fig.write_html()` gera um arquivo `.html` autocontido — basta abrir no navegador, não precisa de servidor Python rodando.

---

## Alternativa: Dashboard completo em um único HTML

Se quiser um único arquivo `index.html` com tudo, use o padrão de tabs:

```python
# Ao final do Analises_Negocio_Swift.ipynb, adicionar:
from plotly.subplots import make_subplots
import plotly.graph_objects as go

# Criar figura com abas usando botões de seleção
# Exportar como único HTML com todos os gráficos embutidos
fig.write_html('dashboard/swift_dashboard.html',
               include_plotlyjs='cdn',   # carrega plotly via CDN (arquivo menor)
               full_html=True)
```

---

## Colunas úteis do `base_inferencia_completa.csv` para o front

| Coluna | Uso no dashboard |
|---|---|
| `centro_nv2` | Identificador da loja |
| `mes_ano` | Eixo X dos gráficos temporais |
| `flag` | Filtro REGULAR / TOCADORA |
| `sentimento_pred` | Contagem para KPIs e gráficos |
| `categoria` | Top problemas e elogios |
| `comentario` | Exemplos reais de comentários |
| `nps_tradicional` | Card de NPS por loja |
| `nps_ajustado` | Card de NPS ajustado por loja |
| `delta` | Indicador de alerta |
| `alerta` | Flag: `ALERTA_QUEDA` / `ALERTA_MELHORA` / `ESTAVEL` |
| `flag_baixa_confianca` | Filtrar predições incertas |

---

## Ordem de execução dos notebooks (OBRIGATÓRIA)

```
1. pre_processamento_swift.ipynb      → gera base_final.csv
2. Clusterizacao_Swift.ipynb          → gera df_topicos_atribuidos.csv
3. Analise_Sentimento_Swift.ipynb     → gera df_sentimento.csv + modelo_sentimento.joblib
4. NPS_Ajustado_Swift.ipynb           → gera nps_comparativo_lojas.csv
5. Analises_Negocio_Swift.ipynb       → gera base_inferencia_completa.csv + analise_por_loja.csv
6. (opcional) Dashboard notebook      → gera os HTMLs do site
```