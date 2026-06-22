# Refactor: Dashboard

## Comentários do 11/06:
1.  Sobre a analise, trazer também o percentual de positivo ou negativo da analise de sentimento.
2. Clusterizar lojas por região/etc etc
3. Melhorar as cores do Dash (evitar cinza)
4. colocar a analise do NPS, do sentimento, e o NPS ponderado
5. analise por loja ter o ranking do valor ajustado
6. trocar o gráfico de pizza por barras


## Comentários 17/06

### Métricas e Indicadores
- Calcular o NPS ao longo do tempo.
- Mostrar diferentes versões do NPS:
    - NPS geral.
    - NPS apenas com comentários.
    - NPS sem comentários.
    - NPS após aplicação do modelo de IA.
- Comparar quantidade de vendas e quantidade de avaliações.
- Ajustar e explicar tendências observadas nos indicadores.

### Análises Temporais
- Criar linha do tempo por categoria.
- Analisar a evolução do NPS ao longo do tempo.
- Investigar sazonalidade.
- Relacionar:
    - Estações do ano.
    - Volume de transações.
    - Sentimento dos comentários.
    - NPS.

### Análise de Sentimentos
- Implementar filtros por sentimento.
- Analisar a relação entre quantidade de palavras nos comentários e sentimento identificado.
- Comparar sentimentos ao longo do tempo.
- Verificar o impacto do sentimento nos resultados de NPS.

### Filtros e Exploração dos Dados
- Criar filtros com múltiplas seleções.
- Permitir comparações entre:
    - Categorias.
    - Períodos.
    - Regiões (se houver).
    - Sentimentos.

### Qualidade e Estado da Base
- Criar página mostrando o estado atual da base.
- Exibir:
    - Quantidade de registros.
    - Dados faltantes.
    - Comentários válidos.
    - Dados após tratamento.
    - Dados após classificação pelo modelo.

### Storytelling e Apresentação
- Criar resumo executivo em formato de documento.
- Não apresentar apenas números.
- Justificar conclusões utilizando análises e evidências.
- Explicar causas possíveis para tendências e comportamentos observados.

### Hipóteses e Insights para Investigar
- Existe relação entre tamanho do comentário e sentimento?
- Existe relação entre volume de vendas e NPS?
- Existe relação entre estação do ano e sentimento?
- Existe relação entre sazonalidade e quantidade de avaliações?
- O modelo de IA altera significativamente os resultados de NPS?
- Comentários mais longos tendem a ser mais negativos ou mais positivos?


## Comentários 19/06
- Correção das classificações de clientes por nota e por sentimento do comentário.
- Tentei ajustar a confiança do modelo e da intensidade dos comentários na análise.
- Criação de análises por região e UF;
- Separação entre NPS tradicional, NPS textual e NPS híbrido.

