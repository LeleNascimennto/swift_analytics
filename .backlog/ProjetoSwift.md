# Projeto Swift
> Data de entrega do projeto: 08/06/2026

## Informações gerais
Base de janeiro de 2025 até janeiro de 2026
228 lojas -> 58 gerentes germinare

## NPS
Indicador de satisfação do cliente
Eles utilizam para ver a qualidade da gerência e a satisfação da loja.

## Tipos de clientes
* promotores: clientes que avaliam de 9-10
* Neutros: clientes que avaliam de 7-8
* Detratores: clientes que avaliam de 1-6

### Cálculo do NPS:
`(P - D)/ lx = %`
- P = promotores
- D = detratores
- lx = média de avaliações
Retorna um valor em porcentagem

### Base apresentada
* Mes Ano: data que foi realizada a avaliação
* Classificação: classificação do cliente (nota)
* Data Avaliação: Data em formato DD/MM/YY da realização da avaliação
* CentroNv2: qual a loja da swift
* qtd_clientes: quantidade de clientes que fizeram esse comentário (agrupamento)
* Comentário: (opcional) - o cliente pode fazer ou não
* Flag: REGULAR (gerentes do mercado geral) e TOCADORA (gerentes business do germinare)

## Entregas
* precisa entregar um front (dash, html) com os dados
* pode adicionar análises descritivas e óbvias também (para incrementar o trabalho)
* criar uma nlp para análise de sentimento
* categorizar os comentários por área
* clusterização de texto: a partir da leitura, categorizar os comentários
    - Observação: não esquecer de identificar outliers - eles podem pesar bastante nos modelo

## Coisas que eles querem visualizar:
Gostariam de ver uma comparação entre os gerentes regulares e os tocadores de negócios
(business) - performance, análises por loja, comentários, etc

## Áreas consideradas pelas lojas:
* produto
* limpeza
* atendimento
* abastecimento
* cultura de produtos

> **Site do bolão do Grilo**: https://bolao2026-ai.vercel.app/