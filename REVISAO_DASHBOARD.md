# Revisão do Dashboard — o que mudou e por quê

Branch: `feat/dashboard-revisao`. Resumo direto das alterações, da avaliação das métricas e do que ficou de fora (com o motivo).

## 1. Fim do hardcode — dados gerados das bases corrigidas

`data.js` passou a ser **100% gerado** a partir de `base_qualitativa_corrigida.csv` (116.605 comentários) e `indicadores_loja_corrigidos.csv` (227 lojas). Nenhum valor é mais digitado à mão.

Eliminados:
- `Math.random()` que inventava a **evolução do NPS** e a **sazonalidade** (agora são séries mensais reais, 17 meses).
- Fallbacks chumbados (`88/72` no NPS por região, contagens fixas de qualidade, hipóteses fixas).
- `qualitativo.js` virou no-op (tudo migrou para `data.js`).

## 2. Filtros agora valem para todas as telas

Adicionado o filtro **Região** (além de Gestão, UF, Loja), todos multi-seleção com cascata. Tudo que é por loja é **recalculado a partir das lojas filtradas** (NPS é média por respondente → agregado é a média ponderada pelo nº de comentários, exato):

- **Visão Geral, Gestão, Temas, Lojas, NPS (KPIs+variantes), Dados (qualidade+modelo+tendências)** → filtram.
- **Globais por natureza** (séries do período / modelo, não recortáveis por loja sem reprocessar a base): evolução temporal e sazonalidade do NPS, distribuição de confiança, diagnósticos, divergências, comprimento de comentário e as nuvens de palavras.

Verificado no navegador: filtrar "Germinare" → 26.967 comentários, 58 lojas, 4 regiões em todas as páginas.

## 3. Remoções pedidas (todas feitas)

Visão Geral: **Lojas em Alerta**, **Compilado Executivo** (fortalezas/atenção), **Insight Não Óbvio**.
NPS Analytics: aba **Impacto do Ajuste**, **Nota Metodológica** da sazonalidade.
Gestão: **Conclusão** removida; cores trocadas → **Externo = azul (#2563EB)**, **Germinare = pink (#EC4899)**.
Temas: **Exemplos Representativos** (problemas, elogios e divergências).
Lojas: filtro e coluna **Alerta** removidos; **Comentários Representativos** removidos do painel.
Dados: aba **Hipóteses** removida.

> "Alerta" foi removido com razão: na base corrigida **100% das lojas estão `ESTAVEL`** — a coluna não informava nada.

## 4. Revisões solicitadas

- **NPS por Tema**: usa o **NPS textual** (sentimento do texto dentro de cada categoria). Conferido e rotulado. "Piores Lojas por Tema" passou a respeitar o filtro (mín. 15 comentários/loja por tema).
- **Linguagem**: refeita. Agora são **4 nuvens** (Externo/Germinare × Positivo/Negativo), com stopwords removidas, calculadas dos comentários reais.
- **Confiança do modelo**: é a **probabilidade da classe prevista** pelo classificador de sentimento (0–1). Média **0,51**; **42,3%** dos comentários ficam abaixo do limiar (`baixa_confianca`) e, no NPS híbrido, **mantêm a nota** em vez do texto. Rótulo do gráfico ajustado para deixar isso explícito.
- **Tendências (Dados)**: eixo corrigido para **"% Comentários Negativos"** nos dois gráficos; cálculo = variação do % negativo (média dos 3 últimos meses − 3 primeiros) por loja, ordenando deterioração/melhora.

## 5. Removido por falta de dado (não por pedido)

- **Co-ocorrência de categorias**: a base classifica **uma categoria por comentário**, então não existe co-ocorrência real intra-comentário. Manter o gráfico exigiria inventar dado — removido.

## 6. As três métricas de NPS (todas na mesma base de comentários)

| Métrica | Como é | Valor global |
|---|---|---|
| NPS Tradicional | só a nota (1–10) | **66,5** |
| NPS Textual | só o sentimento do comentário | **60,8** |
| NPS Híbrido | usa o texto só quando a confiança é alta; senão mantém a nota | **64,2** |

Agora as três convivem **na mesma escala** (antes o dashboard misturava 87,6 ponderado com 64 de comentários, o que fazia o "delta" não significar nada). O híbrido é o indicador recomendado: incorpora o texto sem exagerar (o texto puro derruba ~6 pts; o híbrido, ~2).

## 7. Avaliação final

- O que **faz sentido manter como decisão**: híbrido como indicador principal; severidade/índice de prioridade e quadrante de risco na página de Lojas (úteis e reais); correlação transações×NPS ≈ −0,1 (volume não explica satisfação — vale comunicar).
- **Limite honesto**: o efeito do ajuste por texto é pequeno por natureza (comentário divergente é fração pequena da base). O valor do projeto está mais no **detalhe por loja/tema/tendência** do que num número global dramático.
