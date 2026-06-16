# Dashboard NPS Swift — Especificação Funcional Completa

## Objetivo

Construir um dashboard web em HTML com visual corporativo profissional para análise de satisfação dos clientes da Swift.

O dashboard deve permitir que executivos, gestores e analistas consigam:

* Entender rapidamente a percepção dos clientes.
* Identificar problemas recorrentes.
* Comparar desempenho entre lojas.
* Investigar causas de queda no NPS.
* Visualizar insights obtidos através de IA e NLP.
* Apoiar tomadas de decisão baseadas em dados.

---

# Diretriz Principal

O dashboard deve parecer um produto corporativo pronto para apresentação à diretoria da Swift, e não um projeto acadêmico.

Todas as decisões visuais devem priorizar:

* Legibilidade
* Clareza
* Profissionalismo
* Tomada de decisão rápida
* Navegação intuitiva

Evitar:

* Poluição visual
* Excesso de cores
* Gráficos desnecessários
* Animações exageradas

---

# Estrutura de Navegação

O dashboard deve possuir cinco páginas principais.

```text
Visão Geral
      ↓
Ranking de Lojas
      ↓
Detalhe da Loja
      ↓
Compilado Executivo
      ↓
IA & NLP
```

## Arquivos

```text
index.html       → Visão Geral
lojas.html       → Ranking de Lojas
loja.html        → Detalhe da Loja
executivo.html   → Compilado Executivo
ia.html          → IA & NLP
```

---

# Identidade Visual

## Paleta Oficial

### Azul Institucional

Utilizar para:

* Bordas da navbar
* Links
* Destaques secundários
* Gráficos comparativos

```css
#0085E6
```

### Laranja Swift

Utilizar para:

* Menu ativo
* Botões principais
* KPI de NPS Ajustado
* Destaques importantes

```css
#E95A1A
```

### Cinza Claro

Utilizar para:

* Fundo da navbar
* Containers
* Cards secundários

```css
#D9D9D9
```

### Branco

```css
#FFFFFF
```

### Texto Principal

```css
#1F1F1F
```

---

# Navbar

A navbar deve ser fixa em todas as páginas.

## Estrutura

```text
[Logo Swift]

[Visão Geral]
[Lojas]
[Executivo]
[IA & NLP]
```

## Regras

* Fundo cinza claro
* Linha superior azul
* Linha inferior azul
* Página ativa destacada em laranja
* Hover utilizando azul institucional

A navegação deve ser idêntica em todas as páginas.

---

# Página 1 — Visão Geral

## Arquivo

```text
index.html
```

## Objetivo

Apresentar uma visão consolidada da rede inteira.

---

## KPIs Gerais

Exibir:

* Total de avaliações
* % Positivas
* % Neutras
* % Negativas
* NPS Tradicional da Rede
* NPS Ajustado da Rede
* Delta entre os NPS

### Cores

| KPI              | Cor      |
| ---------------- | -------- |
| Total Avaliações | Azul     |
| Positivo         | Verde    |
| Neutro           | Cinza    |
| Negativo         | Vermelho |
| NPS Tradicional  | Azul     |
| NPS Ajustado     | Laranja  |

---

## Evolução Temporal

### Gráfico

Tipo:

```text
Linha
```

Mostrar:

* Evolução mensal do percentual negativo

Eixo X:

```text
mes_ano
```

Eixo Y:

```text
% negativo
```

---

## Indicadores de Tendência

Comparação com o mês anterior.

Exemplo:

```text
↑ Positivo +4%
↓ Negativo -2%
↑ NPS +3 pontos
```

---

## Comparativo de Bandeiras

### Gráfico

Tipo:

```text
Barras agrupadas
```

Comparar:

* REGULAR
* TOCADORA

Para:

* Positivo
* Neutro
* Negativo

### Cores

REGULAR

```css
#0085E6
```

TOCADORA

```css
#E95A1A
```

---

## Top Problemas

Tabela contendo:

* Categoria
* Quantidade
* Percentual

Mostrar Top 5 reclamações.

---

## Top Elogios

Tabela contendo:

* Categoria
* Quantidade
* Percentual

Mostrar Top 5 elogios.

---

# Página 2 — Ranking de Lojas

## Arquivo

```text
lojas.html
```

## Objetivo

Comparar desempenho entre lojas.

---

## Filtros

Disponibilizar:

* Loja
* UF
* Flag
* Faixa de NPS
* Faixa de sentimento negativo

---

## Ranking Completo

Tabela interativa contendo:

| Campo           |
| --------------- |
| Loja            |
| UF              |
| NPS Tradicional |
| NPS Ajustado    |
| Delta           |
| % Positivo      |
| % Negativo      |
| Alerta          |

---

## Semáforo de Risco

### Verde

```text
NPS >= 75
```

### Amarelo

```text
50 <= NPS < 75
```

### Vermelho

```text
NPS < 50
```

---

## Top 10 Melhores Lojas

Ordenação:

```text
NPS Ajustado DESC
```

---

## Top 10 Lojas Críticas

Ordenação:

```text
% Negativo DESC
```

---

## Scatter Plot

Objetivo:

Identificar rapidamente lojas problemáticas.

### Eixo X

```text
NPS Ajustado
```

### Eixo Y

```text
% Negativo
```

Cada ponto representa uma loja.

---

# Página 3 — Detalhe da Loja

## Arquivo

```text
loja.html?id=LOJA
```

## Objetivo

Permitir investigação detalhada de uma loja específica.

---

## Resumo da Loja

Cards:

* NPS Tradicional
* NPS Ajustado
* Delta
* Quantidade de avaliações

---

## Distribuição dos Sentimentos

Gráfico:

```text
Barra empilhada
```

Mostrar:

* Positivo
* Neutro
* Negativo

---

## Principais Problemas

Exibir Top 3 categorias negativas.

Para cada categoria:

* Quantidade
* Percentual
* Comentários reais

---

## Principais Elogios

Exibir Top 3 categorias positivas.

Para cada categoria:

* Quantidade
* Percentual
* Comentários reais

---

## Evolução Temporal

Gráfico de linha mostrando a evolução dos sentimentos.

---

## Timeline de Comentários

Exibir comentários em ordem cronológica.

Exemplo:

```text
Mar/2025
"Entrega demorou mais que o esperado."

Abr/2025
"Atendimento excelente."
```

---

## Palavras Mais Citadas

Mostrar:

* Top 20 palavras
* Frequência

Formato:

* Word Cloud
* Gráfico de barras

---

# Página 4 — Compilado Executivo

## Arquivo

```text
executivo.html
```

## Objetivo

Apresentar conclusões para gestores e diretoria.

A linguagem deve ser simples e objetiva.

Não utilizar jargões técnicos.

---

## Resumo Executivo

Gerar texto automático contendo:

* Situação atual
* Tendência observada
* Principais riscos
* Principais oportunidades

---

## Fortalezas

Exibir 3 cards.

Cada card deve conter:

* Título
* Ícone
* Resumo
* Comentário real

---

## Pontos de Atenção

Exibir 3 cards.

Cada card deve conter:

* Problema
* Impacto
* Comentário real

---

## Recomendações

Tabela:

| Prioridade | Ação                  |
| ---------- | --------------------- |
| Alta       | Melhorar logística    |
| Média      | Revisar treinamento   |
| Baixa      | Monitorar indicadores |

---

## Insight Não Óbvio

Exibir em destaque.

Exemplo:

```text
As lojas com maior percentual de reclamações de entrega não são necessariamente aquelas com menor NPS.
```

---

## Impacto Potencial

Apresentar projeções simples.

Exemplo:

```text
Reduzir em 5% as avaliações negativas pode elevar o NPS médio em aproximadamente 3 pontos.
```

---

# Página 5 — IA & NLP

## Arquivo

```text
ia.html
```

## Objetivo

Demonstrar a inteligência aplicada ao projeto.

---

## Pipeline da Solução

```text
Comentário
      ↓
Pré-processamento
      ↓
Classificação de Sentimento
      ↓
Classificação de Categoria
      ↓
Cálculo do NPS Ajustado
      ↓
Dashboard
```

---

## Distribuição dos Sentimentos

Gráfico:

* Pizza
  ou
* Barras

---

## Distribuição das Categorias

Mostrar:

* Principais temas encontrados

---

## Confiança do Modelo

Indicadores:

* Média de confiança
* Predições de baixa confiança
* Predições de alta confiança

---

## Exemplos Classificados

Tabela:

| Comentário | Categoria | Sentimento |
| ---------- | --------- | ---------- |

---

# Arquivos de Entrada

| Arquivo                      | Finalidade                   |
| ---------------------------- | ---------------------------- |
| base_inferencia_completa.csv | Base principal               |
| nps_comparativo_lojas.csv    | Ranking de lojas             |
| analise_por_loja.csv         | Resumo por loja              |
| sentimento_por_loja.csv      | Distribuição dos sentimentos |

---

# Bibliotecas Obrigatórias

* Bootstrap 5
* Plotly
* DataTables
* Font Awesome

---

# Critério de Qualidade

O dashboard deve permitir responder rapidamente:

1. Como está a satisfação geral dos clientes?
2. Quais são os principais problemas?
3. Quais lojas precisam de atenção?
4. O NPS ajustado mudou significativamente?
5. O que a gestão deve priorizar?
6. O que a IA descobriu nos comentários?

Se essas perguntas puderem ser respondidas em poucos cliques, o dashboard pode ser considerado completo.
