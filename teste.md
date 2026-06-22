Tenho tudo. Deixa eu montar a explicação completa com os números reais do código.

---

## Explicação Completa do Dashboard — com os dados reais

Escopo oficial do projeto: **227 lojas** (**169 REGULAR** e **58 TOCADORA**), **116.605 comentários**, período de **Jan/2025 a Mai/2026** e **4 UFs**.

O dashboard é um arquivo HTML que carrega dois arquivos JavaScript: **`data.js`** (todos os dados) e **`app.js`** (toda a lógica de renderização). O CSS em **`style.css`** cuida da aparência. Nenhuma chamada a servidor — tudo roda localmente no browser.

---

## Estrutura de Arquivos

```
dashboard/
├── index.html          → estrutura HTML (esqueleto das 5 páginas)
├── css/style.css       → paleta Swift (laranja #E24307), layout responsivo
├── js/data.js          → ~28.000 linhas com TODOS os dados reais
└── js/app.js           → ~570 linhas de lógica: filtros, gráficos, tabelas
```

---

## Como funciona tecnicamente

O `app.js` tem uma função central chamada `renderAll()` que é disparada toda vez que qualquer filtro muda. Ela chama 5 funções em sequência:

```
renderOverview() → renderGestao() → renderTemas() → renderLojas() → renderAvancadas()
```

Os **3 filtros globais** no topo (Gestão / UF / Loja) reprocessam tudo junto. Quando você seleciona uma loja específica, o dashboard automaticamente te redireciona pra aba de Lojas e abre o painel de detalhe daquela loja.

Os gráficos usam a biblioteca **Chart.js 4.4.4**, carregada via CDN.

---

## Aba 1 — Visão Geral

**6 KPI cards:**
| Card | Valor real no dashboard |
|------|------------------------|
| NPS Tradicional | **66,5** |
| NPS Ajustado | **59,3** |
| % Positivo | **73,2%** |
| % Neutro | **14,4%** |
| % Negativo | **12,4%** |
| Lojas em Alerta | **69** |

**Compilado Executivo — 3 Fortalezas:**
1. Promoções & Fidelidade — 21% dos elogios — *"Fazer mais promoções, combos como antigamente"*
2. Atendimento — 20% — *"Parabéns loja top, uma excelência!!!"*
3. Loja Física — 20% — *"Produtos com muita qualidade e preços justos com bom atendimento"*

**3 Pontos de Atenção:**
1. Abastecimento — 45% das reclamações — *"Colocar mais promoções, fazia tempo que não ia. Achei muito mais caro"*
2. Atendimento — 15% — *"Poucos funcionários para atendimento"*
3. Entrega & Logística — 15% — *"Comprei uma carne seca desfiada que estava estragada"*

**Destaques por Região** (com NPS Ajustado real):
| Região | NPS Ajust | Sentimento |
|--------|-----------|------------|
| Litoral | 65,8 | 77% pos · 10% neg ✅ |
| Interior | 62,6 | 75% pos · 11% neg ✅ |
| RMSP | 61,3 | 75% pos · 12% neg ✅ |
| RJ | 60,2 | 73% pos · 11% neg ✅ |
| DF | 59,1 | 72% pos · 11% neg ✅ |
| Capital | 55,4 | 71% pos · 14% neg ⚠️ |
| GO | 53,6 | 72% pos · 17% neg ⚠️ |

**Gráfico temporal:** 17 meses de sentimento (Jan/2025 a Mai/2026). O positivo oscila entre 70% e 76%, com o melhor momento em Jun/2025 (75,8%) e o pior em Mar/2025 (70,4%).

**Insight Não Óbvio:** *"52 lojas (23% da rede) mudam de faixa de NPS quando o comentário é incorporado ao cálculo. A maior queda individual é de 13,6 pontos — isso revela que a nota numérica mascara insatisfação real em quase 1 em cada 4 unidades."*

---

## Aba 2 — Gestão

Comparativo direto com os dados reais:

| Métrica | Regular (169 lojas) | Tocadora (58 lojas) |
|---------|--------------------|--------------------|
| NPS Tradicional | **68,1** | **61,0** |
| NPS Ajustado | **61,1** | **53,0** |
| % Positivo | 74,3% | 69,4% |
| % Neutro | 14,0% | 15,8% |
| % Negativo | 11,7% | 14,8% |
| Comentários | 89.638 | 26.967 |
| Lojas em alerta | 42 | 23 |

**Top 5 problemas — Regular:** Abastecimento · Entrega Logística · Atendimento · Promoções · Loja Física

**Top 5 problemas — Tocadora:** Abastecimento · Atendimento · Entrega Logística · Promoções · Loja Física

**Conclusão gerada automaticamente:** O teste Mann-Whitney dá p=0 — diferença estatisticamente significativa. Regular tem NPS 7,1 pontos maior e menor % negativo. Lojas Germinare têm mais menções negativas a abastecimento e atendimento; lojas externas concentram feedback sobre fidelidade/promoções.

---

## Aba 3 — Problemas & Elogios

### Sub-aba Problemas (ranking real em contagens):
| Categoria | Qtd reclamações |
|-----------|----------------|
| Abastecimento | **6.049** |
| Atendimento | 2.059 |
| Entrega & Logística | 1.970 |
| Promoções & Fidelidade | 1.662 |
| Loja Física | 978 |
| Produto | 860 |

**Abastecimento domina folgado** — quase 3x mais que o segundo colocado.

A evolução temporal mostra que abastecimento oscila forte: pico em Jan/2026 (461 reclamações) e vale em Mai/2026 (242). Sazonalidade clara.

### Sub-aba Elogios (ranking real):
| Categoria | Qtd elogios |
|-----------|------------|
| Promoções & Fidelidade | **14.543** |
| Atendimento | 13.866 |
| Loja Física | 13.617 |
| Produto | 10.456 |
| Abastecimento | 9.159 |
| Entrega & Logística | 6.568 |

Interessante: **Abastecimento é o maior vilão E também tem muitos elogios** — é o tema mais polarizador da rede.

### Sub-aba Divergências:
- **13,3%** dos comentários divergem entre nota e texto
- **2.674** promotores (nota 9–10) que escreveram reclamações
- **975** detratores (nota baixa) que elogiaram no texto

Exemplos reais de promotores com texto negativo: *"nao recebi nota fiscal"*, *"máquinas fazendo barulho altíssimo"*, *"atendente me abandonou no meio do atendimento"*

**Impacto do NPS Ajustado — 5 casos mais extremos:**
| Loja | NPS Trad | NPS Ajust | Queda |
|------|----------|-----------|-------|
| L5015-BARÃO ITAPURA | 59,1 | 45,5 | **−13,6** |
| L5083-BARCELONA | 60,5 | 48,1 | −12,4 |
| L5174-PERI PERI | 52,7 | 41,2 | −11,5 |
| L5149-ALTO DA MOOCA | 56,4 | 45,0 | −11,4 |
| L5220-PLANALTO | 59,6 | 48,2 | −11,4 |

**52 de 227 lojas mudaram de faixa** de NPS quando o texto foi incorporado.

---

## Aba 4 — Lojas

Tabela com as **227 lojas** com todas as métricas. Ao clicar em qualquer linha, abre um painel de detalhe com gráfico de evolução mensal daquela loja específica.

**Extremos reais:**
- **Melhor loja:** L5267-JAÚ — NPS Ajust 83,7 · 89% positivo · 4% negativo · delta 0
- **Pior loja:** L5200-JUVENTUS (Tocadora) — NPS Ajust 34,5 · 57% positivo · 21% negativo · delta −9,6 · alerta QUEDA

Juventus tem uma curva temporal preocupante: setembro/2025 chegou a 46% de sentimento negativo em um único mês.

---

## Aba 5 — Análises Avançadas

### NPS por Tema (score textual real):
| Tema | NPS Textual | Regular | Tocadora |
|------|-------------|---------|----------|
| Loja Física | **90,6** | 91,0 | 89,2 |
| Produto | 89,8 | 90,1 | 88,7 |
| Promoções & Fidelidade | 87,8 | 88,3 | 86,1 |
| Atendimento | 82,0 | 83,1 | 78,6 |
| Entrega & Logística | 65,4 | 67,1 | 59,5 |
| **Abastecimento** | **46,1** ⚠️ | 48,6 | 38,8 |

Abastecimento é o tema crítico em ambas as gestões, mas é muito pior nas lojas Germinare (38,8 vs 48,6).

### Tendências:
**Lojas em deterioração** (% negativo crescendo nos últimos meses):
- L5290-SÃO LOURENÇO
- L5055-CAMBUCI
- L5272-ILHABELA
- L5092-VILA AUGUSTA

**Lojas em melhora:**
- L5101-CIDADE SÃO FRANCISCO
- L5082-VILA ANDRADE
- L5033-SANTANA

### Co-ocorrência de problemas (o que aparece junto):
| Par | Frequência | O que significa |
|-----|-----------|-----------------|
| Abastecimento + Entrega | **156x** | Supply chain com problema sistêmico |
| Abastecimento + Atendimento | 147x | Gestão operacional deficiente |
| Abastecimento + Promoções | 113x | Expectativa frustrada de variedade e preço |
| Atendimento + Entrega | 84x | Produto ruim + atendimento ruim = dupla insatisfação |
| Entrega + Promoções | 59x | Custo-benefício percebido como ruim |

### Análise de Linguagem (nuvens de palavras):
- **Regular:** "produtos" (maior), "atendimento", "qualidade", "carne"
- **Tocadora:** termos similares mas com distribuição diferente de frequência

---

## Resumo do que o dashboard consegue responder

| Pergunta | Onde achar |
|----------|-----------|
| Como está a rede hoje? | Aba 1 — KPIs |
| Regular é melhor que Tocadora? | Aba 2 — Gestão |
| O que os clientes reclamam? | Aba 3 — Problemas |
| Qual loja precisa de atenção agora? | Aba 4 — Lojas / filtro Alerta Queda |
| Onde está o maior risco futuro? | Aba 5 — Tendências |
| Qual tema está destruindo o NPS? | Aba 5 — NPS por Tema (Abastecimento: 46,1) |
