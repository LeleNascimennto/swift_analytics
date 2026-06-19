// ═══ SWIFT ANALYTICS — Dados (NPS Ajustado: metodologia do notebook) ═══
// Base oficial atual | 227 lojas (169 REGULAR, 58 TOCADORA) | 116.605 comentários | 4 UFs | Período: 2025-01 a 2026-05
// NPS Ajustado = reclassificação conservadora (Promotor+TextoNeg→Neutro | Detrator+TextoPos→Neutro); demais mantêm a nota

const DATA = {
  "kpis": {
    "nps_tradicional": 87.6,
    "nps_ajustado": 87.2,
    "pct_positivo": 73.2,
    "pct_neutro": 14.4,
    "pct_negativo": 12.4,
    "total_lojas": 227,
    "lojas_alerta": 0,
    "total_comentarios": 116605
  },
  "compilado": {
    "fortalezas": [
      {
        "cat": "Promocoes Fidelidade",
        "pct": 21,
        "exemplo": "\"Fazer mas promoções, combos ,com antigamente\""
      },
      {
        "cat": "Atendimento",
        "pct": 20,
        "exemplo": "\"Parabéns loja top, uma excelência!!!\""
      },
      {
        "cat": "Loja Fisica",
        "pct": 20,
        "exemplo": "\"Produtos com muita qualidade e preços justos com bom atendimento\""
      }
    ],
    "atencao": [
      {
        "cat": "Abastecimento",
        "pct": 45,
        "exemplo": "\"Colocar mais promoções, fazia tempo q não ia. E achei mto mais caro do q outros lugares q compro\""
      },
      {
        "cat": "Atendimento",
        "pct": 15,
        "exemplo": "\"Músicas de fundo não adequada para todos os gostos \nPoucos funcionários para atendimento s\""
      },
      {
        "cat": "Entrega Logistica",
        "pct": 15,
        "exemplo": "\"Comprei uma carne seca desfiad as que est  as estragada\""
      }
    ],
    "regioes": [
      {
        "nome": "Capital",
        "tipo": "negative",
        "stat": "NPS Ajust: 85.3 | 71% pos | 14% neg"
      },
      {
        "nome": "DF",
        "tipo": "positive",
        "stat": "NPS Ajust: 87.4 | 72% pos | 11% neg"
      },
      {
        "nome": "GO",
        "tipo": "negative",
        "stat": "NPS Ajust: 85.6 | 72% pos | 17% neg"
      },
      {
        "nome": "Interior",
        "tipo": "positive",
        "stat": "NPS Ajust: 89.7 | 75% pos | 11% neg"
      },
      {
        "nome": "Litoral",
        "tipo": "positive",
        "stat": "NPS Ajust: 89.2 | 77% pos | 10% neg"
      },
      {
        "nome": "RJ",
        "tipo": "positive",
        "stat": "NPS Ajust: 87.9 | 73% pos | 11% neg"
      },
      {
        "nome": "RMSP",
        "tipo": "positive",
        "stat": "NPS Ajust: 87.4 | 75% pos | 12% neg"
      }
    ],
    "insight": "52 lojas (23% da rede) mudam de faixa de NPS quando o comentário é incorporado ao cálculo. A maior queda individual é de 13.6 pontos (L5015-Barão Itapura): NPS 59 pela nota → 45 pelo texto. Isso revela que a nota numérica mascara insatisfação real em quase 1 em cada 4 unidades."
  },
  "temporal": {
    "meses": [
      "2025-01",
      "2025-02",
      "2025-03",
      "2025-04",
      "2025-05",
      "2025-06",
      "2025-07",
      "2025-08",
      "2025-09",
      "2025-10",
      "2025-11",
      "2025-12",
      "2026-01",
      "2026-02",
      "2026-03",
      "2026-04",
      "2026-05"
    ],
    "positivo": [
      72.1,
      71.0,
      70.4,
      72.0,
      73.6,
      75.8,
      75.2,
      75.4,
      73.2,
      72.6,
      73.3,
      76.3,
      70.8,
      72.8,
      73.2,
      72.3,
      72.2
    ],
    "neutro": [
      13.5,
      15.3,
      15.5,
      14.7,
      14.6,
      13.7,
      14.1,
      13.4,
      15.2,
      15.6,
      14.5,
      12.3,
      15.6,
      14.8,
      14.1,
      14.6,
      15.1
    ],
    "negativo": [
      14.5,
      13.7,
      14.1,
      13.3,
      11.9,
      10.5,
      10.7,
      11.2,
      11.6,
      11.9,
      12.2,
      11.3,
      13.5,
      12.4,
      12.7,
      13.1,
      12.6
    ]
  },
  "problemas": {
    "categorias": [
      "Abastecimento",
      "Atendimento",
      "Entrega Logistica",
      "Promocoes Fidelidade",
      "Loja Fisica",
      "Produto"
    ],
    "contagens": [
      6049,
      2059,
      1970,
      1662,
      978,
      860
    ],
    "exemplos": {
      "Abastecimento": [
        "\"Atendentes nada simpaticos, não sorriem. Parece que voce esta atrapalhando eles. Sabe aquele atendimento automatico? Isso quando não estao arrumando a\"",
        "\"Tempo de entrega é longo\"",
        "\"Terem produtos em estoque\""
      ],
      "Atendimento": [
        "\"Achei a loja desabastecida não dando muitas opções.\"",
        "\"Alguns atendentes não valorizam os clientes, que merecem prioridade, pedem pra esperar e vai fazer suas coisas, depois de algum tempo voltam p atender\"",
        "\"Produtos prospectados em email e propagandas, nem sempre é encontrado nas gôndolas\""
      ],
      "Entrega Logistica": [
        "\"A carne moída que comprei está semana está com gosto de carne estragada,ou seja não mais comprarei.\"",
        "\"O  bife de alcatra, está péssimo. Não estou comprando mais.\nO sassami de peito de frango, também não está de boa qualidade.\"",
        "\"Boa noite! Aceita o cartão ticket restaurante\""
      ],
      "Promocoes Fidelidade": [
        "\"baixando os preços, em comparativo com os mercados locais estão acima do valor médio,\nAtendentes ficam no caixa, mesmo vazio, poderiam , pelo menos um\"",
        "\"Não reduzir volume/peso das embalagens.\"",
        "\".melhores preços e mais promocoes\""
      ],
      "Loja Fisica": [
        "\"colocando mais mercadoria nas gondolas\"",
        "\"A Swift caiu a qualidade dos produtos e  pouca variedade nas lojas que vem fechando. Triste.\"",
        "\"Qualidade do produto\""
      ],
      "Produto": [
        "\"Precisa melhor os cortes das carnes que estão vindo com capa branca e cortes muito pequenos\"",
        "\"Cobraram a mais\"",
        "\"Pouco colaborador para dar um suporte na busca de produto.\""
      ]
    }
  },
  "elogios": {
    "categorias": [
      "Promocoes Fidelidade",
      "Atendimento",
      "Loja Fisica",
      "Produto",
      "Abastecimento",
      "Entrega Logistica"
    ],
    "contagens": [
      14543,
      13866,
      13617,
      10456,
      9159,
      6568
    ],
    "exemplos": {
      "Promocoes Fidelidade": [
        "\"Continuem assim e inovando\"",
        "\"Acredito que os preços poderiam ser melhores emgrandw parte dos produtos.\"",
        "\"Diminuindo os preços.\""
      ],
      "Atendimento": [
        "\"Fui mt bem atendida pelo servidor da manhã Douglas (acho que é este seu nome) de segunda-feira,  dia 27/10 me orientando sobre produtos e as suas loca\"",
        "\"Bom dia minha experiência foi ótima e voltarei a comprar novamente\"",
        "\"Kauan caixa atendimento nota 10\""
      ],
      "Loja Fisica": [
        "\"Entregar a domicílio seria ótimo\n\"",
        "\"Todas as atendentes são educadíssimas, prestativas e comunicativas. Adoro ir na unidade Barão Geraldo.\"",
        "\"Se conseguirem manter essa qualidade e gentileza de seus colaboradores estará bom demais\""
      ],
      "Produto": [
        "\"O preço tá bom .mas podia por mais promoção em carnes\"",
        "\"Sinceramente eu não vejo nada que possa melhorar , está excelente.\"",
        "\"Nada a melhorar, tudo ótimo!\""
      ],
      "Abastecimento": [
        "\"Tempero para Cordeiro não pode faltar se é carne comercializada por vcs\"",
        "\"Não mais encontro bifes de picanha na loja da Avenida Nova Granada, em Osasco\n\"",
        "\"Do deveria baixar um pouco o preço os produtos são maravilhosos,  exceto alguns produtos que não recomendo para ninguém por exp os pasteizinhos, que j\""
      ],
      "Entrega Logistica": [
        "\"P mim é sta tudo ótimo .\"",
        "\"Para mim do jeito que tá, tá ótimo\"",
        "\"ainda não tenho sugestões\""
      ]
    }
  },
  "evolucao_problemas": {
    "meses": [
      "2025-01",
      "2025-02",
      "2025-03",
      "2025-04",
      "2025-05",
      "2025-06",
      "2025-07",
      "2025-08",
      "2025-09",
      "2025-10",
      "2025-11",
      "2025-12",
      "2026-01",
      "2026-02",
      "2026-03",
      "2026-04",
      "2026-05"
    ],
    "abastecimento": [
      393,
      270,
      352,
      321,
      336,
      314,
      289,
      313,
      416,
      438,
      338,
      403,
      461,
      383,
      417,
      363,
      242
    ],
    "atendimento": [
      116,
      93,
      106,
      122,
      120,
      114,
      96,
      112,
      136,
      131,
      105,
      160,
      125,
      139,
      146,
      148,
      90
    ],
    "entrega logistica": [
      153,
      113,
      122,
      106,
      134,
      129,
      79,
      100,
      91,
      116,
      108,
      119,
      145,
      109,
      157,
      127,
      62
    ],
    "promocoes fidelidade": [
      136,
      92,
      100,
      109,
      114,
      107,
      88,
      88,
      102,
      101,
      95,
      88,
      107,
      88,
      97,
      84,
      66
    ],
    "loja fisica": [
      80,
      56,
      43,
      56,
      52,
      63,
      47,
      56,
      68,
      57,
      47,
      63,
      70,
      53,
      62,
      70,
      35
    ]
  },
  "gestao": {
    "regular": {
      "nps_tradicional": 88.3,
      "nps_ajustado": 88.0,
      "pct_positivo": 74.3,
      "pct_neutro": 14.0,
      "pct_negativo": 11.7,
      "total_lojas": 169,
      "lojas_alerta": 0,
      "total_comentarios": 89638,
      "top_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento",
        "Promocoes Fidelidade",
        "Loja Fisica"
      ],
      "top_problemas_pct": [
        47,
        16,
        16,
        14,
        8
      ]
    },
    "tocadora": {
      "nps_tradicional": 84.8,
      "nps_ajustado": 84.4,
      "pct_positivo": 69.4,
      "pct_neutro": 15.8,
      "pct_negativo": 14.8,
      "total_lojas": 58,
      "lojas_alerta": 0,
      "total_comentarios": 26967,
      "top_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica",
        "Promocoes Fidelidade",
        "Loja Fisica"
      ],
      "top_problemas_pct": [
        50,
        18,
        14,
        11,
        7
      ]
    },
    "significativo": true,
    "p_value": 7.7e-11
  },
  "divergencias": {
    "total_pct": 13.3,
    "promotor_negativo": 2674,
    "detrator_positivo": 975,
    "divergente_parcial": 11826,
    "exemplos": {
      "Promotor com texto negativo": [
        {
          "nota": "Promotor → negativo",
          "texto": "\"nao recebi nota fiscal\""
        },
        {
          "nota": "Promotor → negativo",
          "texto": "\"A loja de vcs é no mesmo terreno do lugar onde trabalho, e as maquinas de vcs devido a alguma instalação indevida estão fazendo um barulho altíssimo, \""
        },
        {
          "nota": "Promotor → negativo",
          "texto": "\"Atendente (homem) começou o meu atendimento e interrompeu para atender uma cliente e me deixou esperando. Desisti da compra de um item\""
        }
      ],
      "Detrator com texto positivo": [
        {
          "nota": "Detrator → positivo",
          "texto": "\"Preços mais acessíveis\""
        },
        {
          "nota": "Detrator → positivo",
          "texto": "\"Faltou um produto....\""
        },
        {
          "nota": "Detrator → positivo",
          "texto": "\"Melhorar os. Preço \n\""
        }
      ]
    }
  },
  "impacto_nps": {
    "total_divergentes_pct": 13.3,
    "lojas_mudaram_faixa": 0,
    "total_lojas": 227,
    "formula": "Reclassificação conservadora: Promotor+TextoNegativo→Neutro | Detrator+TextoPositivo→Neutro (demais casos mantêm a nota). NPS recalculado ponderado por nº de clientes.",
    "casos_extremos": [
      {
        "nome": "L5290-SAO LOURENCO",
        "nps_trad": 90.8,
        "nps_ajust": 89.6,
        "delta": -1.2,
        "faixa_antes": "Excelente",
        "faixa_depois": "Excelente"
      },
      {
        "nome": "L5145-TAMBORE",
        "nps_trad": 87.5,
        "nps_ajust": 86.5,
        "delta": -1.0,
        "faixa_antes": "Excelente",
        "faixa_depois": "Excelente"
      },
      {
        "nome": "L5007-KLABIN (0496)",
        "nps_trad": 76.3,
        "nps_ajust": 75.3,
        "delta": -1.0,
        "faixa_antes": "Excelente",
        "faixa_depois": "Excelente"
      },
      {
        "nome": "L5082-VILA ANDRADE (1346)",
        "nps_trad": 79.2,
        "nps_ajust": 78.3,
        "delta": -0.9,
        "faixa_antes": "Excelente",
        "faixa_depois": "Excelente"
      },
      {
        "nome": "L5037-VILA ROMANA (0880)",
        "nps_trad": 81.4,
        "nps_ajust": 80.5,
        "delta": -0.8,
        "faixa_antes": "Excelente",
        "faixa_depois": "Excelente"
      }
    ],
    "analise_critica": "Com a metodologia ponderada por cliente sobre a base completa, o NPS Ajustado praticamente coincide com o tradicional (Δ médio −0,3 pt) e nenhuma das 227 lojas muda de faixa — todas permanecem 'Excelente'. O ajuste por sentimento atua só nos comentários divergentes, que são fração pequena frente ao volume total de avaliações (a maioria sem comentário). O indicador é robusto, porém pouco sensível nesta base: o sinal de risco mais útil está na evolução temporal do sentimento, não no delta de NPS."
  },
  "lojas": [
    {
      "nome": "L5001-RIBEIRAO PRETO (0217)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 88.1,
      "nps_ajust": 87.9,
      "delta": -0.2,
      "sent_medio": 0.56,
      "pct_pos": 70,
      "pct_neg": 14,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Produto",
        "Promocoes Fidelidade",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"FRANGO CAIPIRA NÃO TINHA QUANTIDADE NA GOLDOLA APENAS UMA\"",
        "\"Swift segue sendo maravilhosa\"",
        "\"Não tem como,  vcs são incríveis.\"",
        "\"equipe interna com mais disponibilidade p orientar.\"",
        "\"Equipe sensacional. Prestativos, atenciosos, sorridentes e gentis!\nSempre prontos e dispostos a ajudar!\nMais promoções s\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 72.5,
          "neg": 5.9
        },
        {
          "m": "2025-02",
          "pos": 64.5,
          "neg": 16.1
        },
        {
          "m": "2025-03",
          "pos": 77.3,
          "neg": 9.1
        },
        {
          "m": "2025-04",
          "pos": 75.6,
          "neg": 14.6
        },
        {
          "m": "2025-05",
          "pos": 58.8,
          "neg": 14.7
        },
        {
          "m": "2025-06",
          "pos": 75.0,
          "neg": 15.6
        },
        {
          "m": "2025-07",
          "pos": 66.7,
          "neg": 9.5
        },
        {
          "m": "2025-08",
          "pos": 75.0,
          "neg": 7.1
        },
        {
          "m": "2025-09",
          "pos": 51.6,
          "neg": 32.3
        },
        {
          "m": "2025-10",
          "pos": 78.3,
          "neg": 8.7
        },
        {
          "m": "2025-11",
          "pos": 76.2,
          "neg": 4.8
        },
        {
          "m": "2025-12",
          "pos": 55.6,
          "neg": 25.0
        },
        {
          "m": "2026-01",
          "pos": 65.9,
          "neg": 19.5
        },
        {
          "m": "2026-02",
          "pos": 74.5,
          "neg": 12.8
        },
        {
          "m": "2026-03",
          "pos": 80.0,
          "neg": 8.6
        },
        {
          "m": "2026-04",
          "pos": 79.2,
          "neg": 11.3
        },
        {
          "m": "2026-05",
          "pos": 65.8,
          "neg": 15.8
        }
      ]
    },
    {
      "nome": "L5002-ALPHAVILLE (0290)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 86.2,
      "nps_ajust": 85.7,
      "delta": -0.5,
      "sent_medio": 0.5,
      "pct_pos": 65,
      "pct_neg": 15,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Loja Fisica",
        "Abastecimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Parabéns para o atendimento, me deixou muito a vontade e foi resolvido o problema! Gratidão aos envolvidos!\"",
        "\"Mudar a embalagem da Chipa. Vem toda quebrada.\"",
        "\"Tudo foi Okay, porém, a entregadora precisa passar por uma reciclagem interna de atendimento e encantamento ao cliente!\n\"",
        "\"1. Mais espaço para circular com carrinho;\n2. Luz interna branca dentro do freezer bem em cima da etiqueta com nome e pr\"",
        "\"Produtos e entrega OK\nMensagens demais !!! WhatsApp, SMS, e-mail !!\nNão precisa encher a paciência\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 66.7,
          "neg": 17.4
        },
        {
          "m": "2025-02",
          "pos": 58.6,
          "neg": 20.7
        },
        {
          "m": "2025-03",
          "pos": 68.1,
          "neg": 8.5
        },
        {
          "m": "2025-04",
          "pos": 60.9,
          "neg": 17.4
        },
        {
          "m": "2025-05",
          "pos": 77.8,
          "neg": 5.6
        },
        {
          "m": "2025-06",
          "pos": 75.9,
          "neg": 6.9
        },
        {
          "m": "2025-07",
          "pos": 55.9,
          "neg": 8.8
        },
        {
          "m": "2025-08",
          "pos": 83.3,
          "neg": 7.1
        },
        {
          "m": "2025-09",
          "pos": 69.0,
          "neg": 14.3
        },
        {
          "m": "2025-10",
          "pos": 55.6,
          "neg": 22.2
        },
        {
          "m": "2025-11",
          "pos": 60.0,
          "neg": 18.0
        },
        {
          "m": "2025-12",
          "pos": 60.4,
          "neg": 22.9
        },
        {
          "m": "2026-01",
          "pos": 66.0,
          "neg": 11.3
        },
        {
          "m": "2026-02",
          "pos": 79.4,
          "neg": 11.8
        },
        {
          "m": "2026-03",
          "pos": 54.5,
          "neg": 20.5
        },
        {
          "m": "2026-04",
          "pos": 72.9,
          "neg": 6.2
        },
        {
          "m": "2026-05",
          "pos": 47.1,
          "neg": 32.4
        }
      ]
    },
    {
      "nome": "L5003-LINS (0340)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 89.0,
      "nps_ajust": 88.9,
      "delta": -0.1,
      "sent_medio": 0.73,
      "pct_pos": 80,
      "pct_neg": 7,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Todos os produtos com etiquetas e placas na loja com localização de produtos....setorização.\"",
        "\"Não encontrei casquinha de siri e pernil suíno sem tempero.\"",
        "\"Fiz coco no banheiro e não tinha cheirinho pra usar, não consegui disfarçar. Por favor comprar com a fragrância de lavan\"",
        "\"Atendimento da operadora pessimo\"",
        "\"Parando de tomar meu tempo com pesquisas.\nDeixem um campo para reclamações e em caso positivo as alternativas e parem de\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 66.7,
          "neg": 15.2
        },
        {
          "m": "2025-02",
          "pos": 66.7,
          "neg": 8.3
        },
        {
          "m": "2025-03",
          "pos": 85.7,
          "neg": 7.1
        },
        {
          "m": "2025-04",
          "pos": 89.5,
          "neg": 5.3
        },
        {
          "m": "2025-05",
          "pos": 85.2,
          "neg": 3.7
        },
        {
          "m": "2025-06",
          "pos": 85.2,
          "neg": 0.0
        },
        {
          "m": "2025-07",
          "pos": 81.0,
          "neg": 9.5
        },
        {
          "m": "2025-08",
          "pos": 89.5,
          "neg": 5.3
        },
        {
          "m": "2025-09",
          "pos": 90.0,
          "neg": 6.7
        },
        {
          "m": "2025-10",
          "pos": 77.8,
          "neg": 0.0
        },
        {
          "m": "2025-11",
          "pos": 85.0,
          "neg": 5.0
        },
        {
          "m": "2025-12",
          "pos": 69.2,
          "neg": 11.5
        },
        {
          "m": "2026-01",
          "pos": 80.0,
          "neg": 5.0
        },
        {
          "m": "2026-02",
          "pos": 78.3,
          "neg": 8.7
        },
        {
          "m": "2026-03",
          "pos": 73.3,
          "neg": 10.0
        },
        {
          "m": "2026-04",
          "pos": 88.2,
          "neg": 0.0
        },
        {
          "m": "2026-05",
          "pos": 63.6,
          "neg": 18.2
        }
      ]
    },
    {
      "nome": "L5004-CAMPO BELO (0448)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 84.8,
      "nps_ajust": 84.4,
      "delta": -0.3,
      "sent_medio": 0.56,
      "pct_pos": 71,
      "pct_neg": 15,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Loja Fisica"
      ],
      "top3_elogios": [
        "Atendimento",
        "Loja Fisica",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Atendimento ótimo da Jaqueline. \nParabéns Andréia pela equipe!!!! \nSucesso\"",
        "\"Valor do frete é altíssimo.\"",
        "\"loja arruma\nequipe prestativa e Eficaz.\nLay-out novo.\ndificuldade de encontrar produtos.\"",
        "\"Continuem assim que está muito bom\"",
        "\"Comprei bife de filé mignon porque o Medalhão está num preço abusivo . E a carne não parece nem um pouco com filé mignon\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 70.0,
          "neg": 13.3
        },
        {
          "m": "2025-02",
          "pos": 67.7,
          "neg": 19.4
        },
        {
          "m": "2025-03",
          "pos": 66.7,
          "neg": 11.1
        },
        {
          "m": "2025-04",
          "pos": 86.4,
          "neg": 4.5
        },
        {
          "m": "2025-05",
          "pos": 70.8,
          "neg": 20.8
        },
        {
          "m": "2025-06",
          "pos": 65.5,
          "neg": 24.1
        },
        {
          "m": "2025-07",
          "pos": 77.8,
          "neg": 5.6
        },
        {
          "m": "2025-08",
          "pos": 72.2,
          "neg": 16.7
        },
        {
          "m": "2025-09",
          "pos": 71.4,
          "neg": 11.9
        },
        {
          "m": "2025-10",
          "pos": 83.3,
          "neg": 13.9
        },
        {
          "m": "2025-11",
          "pos": 63.6,
          "neg": 12.1
        },
        {
          "m": "2025-12",
          "pos": 81.2,
          "neg": 9.4
        },
        {
          "m": "2026-01",
          "pos": 76.0,
          "neg": 14.0
        },
        {
          "m": "2026-02",
          "pos": 71.2,
          "neg": 10.2
        },
        {
          "m": "2026-03",
          "pos": 54.1,
          "neg": 18.9
        },
        {
          "m": "2026-04",
          "pos": 56.5,
          "neg": 39.1
        },
        {
          "m": "2026-05",
          "pos": 83.3,
          "neg": 16.7
        }
      ]
    },
    {
      "nome": "L5005-BROOKLIN (0475)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 83.3,
      "nps_ajust": 82.6,
      "delta": -0.6,
      "sent_medio": 0.53,
      "pct_pos": 69,
      "pct_neg": 16,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Evitar problemas com alguns cartões de pagamento. No último sábado não consegui pagar com um Cartão Alimentação e ningué\"",
        "\"Difícil pois a qualidade dos produtos e atendimento é acima dos concorrentes.\"",
        "\"Não encontrei hambúrgueres e não vi seção com embutidos, como salsichas de diferentes tipos, mas pode ser que esses prod\"",
        "\"Preços super acessíveis e loja bem organizada. Amei.\"",
        "\"Achei o serviço e custo beneficio otimos, só gostaria de ser avisada quando a entrega estivesse a caminho, se fosse poss\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 61.9,
          "neg": 14.3
        },
        {
          "m": "2025-02",
          "pos": 43.5,
          "neg": 34.8
        },
        {
          "m": "2025-03",
          "pos": 52.6,
          "neg": 21.1
        },
        {
          "m": "2025-04",
          "pos": 63.6,
          "neg": 13.6
        },
        {
          "m": "2025-05",
          "pos": 61.9,
          "neg": 19.0
        },
        {
          "m": "2025-06",
          "pos": 46.7,
          "neg": 26.7
        },
        {
          "m": "2025-07",
          "pos": 68.8,
          "neg": 18.8
        },
        {
          "m": "2025-08",
          "pos": 75.0,
          "neg": 10.0
        },
        {
          "m": "2025-09",
          "pos": 62.5,
          "neg": 25.0
        },
        {
          "m": "2025-10",
          "pos": 64.0,
          "neg": 8.0
        },
        {
          "m": "2025-11",
          "pos": 57.7,
          "neg": 26.9
        },
        {
          "m": "2025-12",
          "pos": 89.2,
          "neg": 7.2
        },
        {
          "m": "2026-01",
          "pos": 75.0,
          "neg": 15.9
        },
        {
          "m": "2026-02",
          "pos": 71.4,
          "neg": 9.5
        },
        {
          "m": "2026-03",
          "pos": 72.2,
          "neg": 13.9
        },
        {
          "m": "2026-04",
          "pos": 63.4,
          "neg": 19.5
        },
        {
          "m": "2026-05",
          "pos": 72.2,
          "neg": 11.1
        }
      ]
    },
    {
      "nome": "L5006-MARAJOARA (0487)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 82.7,
      "nps_ajust": 82.4,
      "delta": -0.3,
      "sent_medio": 0.52,
      "pct_pos": 68,
      "pct_neg": 16,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Loja Fisica"
      ],
      "top3_elogios": [
        "Atendimento",
        "Promocoes Fidelidade",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Melhorar qualidade de Carne moida. Menos água congelada nos produtos. Peso líquido descongelado muito menor do que conge\"",
        "\"Recebi um cupom de desconto e frete grátis para compras acima de 299 para o meu aniversário mas não consegui fazer uma c\"",
        "\"Melhorar  o precinho dos produtos\"",
        "\"Voltar a ter qualidade nos produtos.\"",
        "\"Não havia percebido, foi minha esposa que percebeu, mas adquiri um produto (frango sassami temperado) ontem na loja que \""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 74.2,
          "neg": 12.9
        },
        {
          "m": "2025-02",
          "pos": 62.5,
          "neg": 18.8
        },
        {
          "m": "2025-03",
          "pos": 65.7,
          "neg": 20.0
        },
        {
          "m": "2025-04",
          "pos": 58.0,
          "neg": 18.0
        },
        {
          "m": "2025-05",
          "pos": 71.1,
          "neg": 15.6
        },
        {
          "m": "2025-06",
          "pos": 87.5,
          "neg": 10.0
        },
        {
          "m": "2025-07",
          "pos": 76.9,
          "neg": 7.7
        },
        {
          "m": "2025-08",
          "pos": 78.4,
          "neg": 8.1
        },
        {
          "m": "2025-09",
          "pos": 85.2,
          "neg": 0.0
        },
        {
          "m": "2025-10",
          "pos": 71.4,
          "neg": 14.3
        },
        {
          "m": "2025-11",
          "pos": 60.0,
          "neg": 25.0
        },
        {
          "m": "2025-12",
          "pos": 48.6,
          "neg": 28.6
        },
        {
          "m": "2026-01",
          "pos": 48.3,
          "neg": 31.0
        },
        {
          "m": "2026-02",
          "pos": 71.0,
          "neg": 12.9
        },
        {
          "m": "2026-03",
          "pos": 55.6,
          "neg": 18.5
        },
        {
          "m": "2026-04",
          "pos": 72.0,
          "neg": 20.0
        },
        {
          "m": "2026-05",
          "pos": 61.9,
          "neg": 23.8
        }
      ]
    },
    {
      "nome": "L5007-KLABIN (0496)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 76.3,
      "nps_ajust": 75.3,
      "delta": -1.0,
      "sent_medio": 0.46,
      "pct_pos": 65,
      "pct_neg": 19,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Atendimento",
        "Loja Fisica",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"No 1 contato na swift on line a pessoa que me atendeu me informou que não faziam mais entrega no endereço que solicitei.\"",
        "\"Gosto bastante dessa loja e dos funcionários\"",
        "\"Reembolsando o que não de foi entregue, dando retorno, pois até o momento nada de responderem, comprei 405,00 de carne e\"",
        "\"Melhorar o site, pois parece que trava as vezes. \nQuanto a entrega efetuada faltando itens, que foram repostos em seguid\"",
        "\"Nada a melhorar, o atendente que me atendeu foi super prestativo, os produtos são muito bons e os preços muito acessívei\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 52.2,
          "neg": 30.4
        },
        {
          "m": "2025-02",
          "pos": 70.0,
          "neg": 20.0
        },
        {
          "m": "2025-03",
          "pos": 40.0,
          "neg": 40.0
        },
        {
          "m": "2025-04",
          "pos": 66.7,
          "neg": 8.3
        },
        {
          "m": "2025-05",
          "pos": 34.6,
          "neg": 38.5
        },
        {
          "m": "2025-06",
          "pos": 72.2,
          "neg": 11.1
        },
        {
          "m": "2025-07",
          "pos": 65.2,
          "neg": 17.4
        },
        {
          "m": "2025-08",
          "pos": 66.7,
          "neg": 16.7
        },
        {
          "m": "2025-09",
          "pos": 50.0,
          "neg": 25.0
        },
        {
          "m": "2025-10",
          "pos": 64.0,
          "neg": 24.0
        },
        {
          "m": "2025-11",
          "pos": 61.9,
          "neg": 23.8
        },
        {
          "m": "2025-12",
          "pos": 65.3,
          "neg": 14.3
        },
        {
          "m": "2026-01",
          "pos": 37.5,
          "neg": 33.3
        },
        {
          "m": "2026-02",
          "pos": 85.5,
          "neg": 5.5
        },
        {
          "m": "2026-03",
          "pos": 82.4,
          "neg": 10.3
        },
        {
          "m": "2026-04",
          "pos": 69.2,
          "neg": 20.5
        },
        {
          "m": "2026-05",
          "pos": 69.6,
          "neg": 13.0
        }
      ]
    },
    {
      "nome": "L5008-SCS MAUA (0500)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 86.9,
      "nps_ajust": 86.2,
      "delta": -0.6,
      "sent_medio": 0.63,
      "pct_pos": 74,
      "pct_neg": 11,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Atendimento",
        "Promocoes Fidelidade",
        "Abastecimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Produtos vieram a 4 dias da validade.\"",
        "\"Agendar sempre o horário de entrega pq espwerina manha e tarde todas, mas tive que dair por uma hora e as carnes chegara\"",
        "\"Feliz 2025 !! Este novo ano estaremos juntos conto com voces sempre , excelente atendimento limpeza preços razoáveis, es\"",
        "\"Pra mim está ótimo o serviço de vcs. Atende a minha necessidade.\"",
        "\"Parabéns, equipe maravilhosa.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 69.4,
          "neg": 16.3
        },
        {
          "m": "2025-02",
          "pos": 69.6,
          "neg": 13.0
        },
        {
          "m": "2025-03",
          "pos": 75.0,
          "neg": 6.2
        },
        {
          "m": "2025-04",
          "pos": 77.5,
          "neg": 7.5
        },
        {
          "m": "2025-05",
          "pos": 86.1,
          "neg": 8.3
        },
        {
          "m": "2025-06",
          "pos": 52.9,
          "neg": 11.8
        },
        {
          "m": "2025-07",
          "pos": 74.1,
          "neg": 11.1
        },
        {
          "m": "2025-08",
          "pos": 78.6,
          "neg": 7.1
        },
        {
          "m": "2025-09",
          "pos": 67.6,
          "neg": 5.4
        },
        {
          "m": "2025-10",
          "pos": 83.3,
          "neg": 11.9
        },
        {
          "m": "2025-11",
          "pos": 66.7,
          "neg": 15.4
        },
        {
          "m": "2025-12",
          "pos": 80.6,
          "neg": 11.1
        },
        {
          "m": "2026-01",
          "pos": 63.2,
          "neg": 5.3
        },
        {
          "m": "2026-02",
          "pos": 75.0,
          "neg": 16.7
        },
        {
          "m": "2026-03",
          "pos": 72.4,
          "neg": 17.2
        },
        {
          "m": "2026-04",
          "pos": 77.8,
          "neg": 16.7
        },
        {
          "m": "2026-05",
          "pos": 68.2,
          "neg": 13.6
        }
      ]
    },
    {
      "nome": "L5009-PIRITUBA (0508)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 86.6,
      "nps_ajust": 86.3,
      "delta": -0.3,
      "sent_medio": 0.61,
      "pct_pos": 72,
      "pct_neg": 11,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Promocoes Fidelidade",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Melhorar os precos\"",
        "\"O atendente foi bem atencioso, porém coloquei o dislike pq eu vi no site a promoção do contra filé combo por 41.90 já se\"",
        "\"O site precisa melhorar uma hora diz que não tenho cobertura em minha área e no outro dia volta normal ,poxa são mais de\"",
        "\"Ótimo produtos, e atendimento!!!\"",
        "\"O pedido atrasou muito, se eu não tivesse ligado no Sac não seria entregue, eu paguei a taxa de frete para entregar no h\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 70.8,
          "neg": 8.3
        },
        {
          "m": "2025-02",
          "pos": 82.4,
          "neg": 5.9
        },
        {
          "m": "2025-03",
          "pos": 53.3,
          "neg": 26.7
        },
        {
          "m": "2025-04",
          "pos": 64.3,
          "neg": 10.7
        },
        {
          "m": "2025-05",
          "pos": 73.8,
          "neg": 9.5
        },
        {
          "m": "2025-06",
          "pos": 83.0,
          "neg": 13.2
        },
        {
          "m": "2025-07",
          "pos": 80.0,
          "neg": 8.0
        },
        {
          "m": "2025-08",
          "pos": 76.7,
          "neg": 6.7
        },
        {
          "m": "2025-09",
          "pos": 77.3,
          "neg": 9.1
        },
        {
          "m": "2025-10",
          "pos": 63.3,
          "neg": 6.7
        },
        {
          "m": "2025-11",
          "pos": 60.9,
          "neg": 17.4
        },
        {
          "m": "2025-12",
          "pos": 79.6,
          "neg": 14.8
        },
        {
          "m": "2026-01",
          "pos": 64.5,
          "neg": 12.9
        },
        {
          "m": "2026-02",
          "pos": 65.5,
          "neg": 24.1
        },
        {
          "m": "2026-03",
          "pos": 77.1,
          "neg": 5.7
        },
        {
          "m": "2026-04",
          "pos": 75.8,
          "neg": 0.0
        },
        {
          "m": "2026-05",
          "pos": 71.4,
          "neg": 7.1
        }
      ]
    },
    {
      "nome": "L5012-SOROCABA (0527)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 91.4,
      "nps_ajust": 91.1,
      "delta": -0.3,
      "sent_medio": 0.66,
      "pct_pos": 76,
      "pct_neg": 10,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Produto"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Chegou tudo muito bem embalado, excelente em tudo.\"",
        "\"Parabéns pela loja bem organizada e atendimento atencioso, não troco por outra nota 10!!!\"",
        "\"sinto fata de variedade de peixes\"",
        "\"Dias passados fiz uma compra cujo valor superou e muito o que fiz desta última vez. A Atendente do CAIXA nem quis saber \"",
        "\"Gostaria de relatar que minha última compra pelo site não foi boa. Primeiro que o site ficava dando erro e informava que\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 84.2,
          "neg": 10.5
        },
        {
          "m": "2025-02",
          "pos": 75.0,
          "neg": 25.0
        },
        {
          "m": "2025-03",
          "pos": 61.1,
          "neg": 5.6
        },
        {
          "m": "2025-04",
          "pos": 93.3,
          "neg": 0.0
        },
        {
          "m": "2025-05",
          "pos": 92.9,
          "neg": 7.1
        },
        {
          "m": "2025-06",
          "pos": 75.0,
          "neg": 6.2
        },
        {
          "m": "2025-07",
          "pos": 69.2,
          "neg": 0.0
        },
        {
          "m": "2025-08",
          "pos": 70.6,
          "neg": 23.5
        },
        {
          "m": "2025-09",
          "pos": 100.0,
          "neg": 0.0
        },
        {
          "m": "2025-10",
          "pos": 72.7,
          "neg": 9.1
        },
        {
          "m": "2025-11",
          "pos": 61.5,
          "neg": 30.8
        },
        {
          "m": "2025-12",
          "pos": 78.3,
          "neg": 4.3
        },
        {
          "m": "2026-01",
          "pos": 75.0,
          "neg": 12.5
        },
        {
          "m": "2026-02",
          "pos": 80.0,
          "neg": 0.0
        },
        {
          "m": "2026-03",
          "pos": 66.7,
          "neg": 8.3
        },
        {
          "m": "2026-04",
          "pos": 76.5,
          "neg": 11.8
        },
        {
          "m": "2026-05",
          "pos": 40.0,
          "neg": 60.0
        }
      ]
    },
    {
      "nome": "L5013-GRANJA VIANA (0545)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 87.7,
      "nps_ajust": 87.3,
      "delta": -0.4,
      "sent_medio": 0.73,
      "pct_pos": 83,
      "pct_neg": 10,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Não recebi meu pedido e já abri duas reclamações e falam que vai entregar e nada é reembolso só daqui 48 horas um absurd\"",
        "\"Tendo um preço mais condizente\"",
        "\"Atendente Kamila muitos atenciosa tirou todas as dúvidas e comprei até itens que não conhecia da loja a loja tá de parab\"",
        "\"Já faz meses que não encontro picanha da linha black em nenhuma unidade que visito\"",
        "\"Faltou o tempero de salsa e cebola e alho em po\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 75.7,
          "neg": 16.2
        },
        {
          "m": "2025-02",
          "pos": 82.6,
          "neg": 17.4
        },
        {
          "m": "2025-03",
          "pos": 65.7,
          "neg": 11.4
        },
        {
          "m": "2025-04",
          "pos": 83.3,
          "neg": 9.5
        },
        {
          "m": "2025-05",
          "pos": 72.0,
          "neg": 16.0
        },
        {
          "m": "2025-06",
          "pos": 85.7,
          "neg": 5.7
        },
        {
          "m": "2025-07",
          "pos": 85.7,
          "neg": 9.5
        },
        {
          "m": "2025-08",
          "pos": 62.5,
          "neg": 18.8
        },
        {
          "m": "2025-09",
          "pos": 83.3,
          "neg": 13.3
        },
        {
          "m": "2025-10",
          "pos": 88.9,
          "neg": 11.1
        },
        {
          "m": "2025-11",
          "pos": 88.9,
          "neg": 8.9
        },
        {
          "m": "2025-12",
          "pos": 82.2,
          "neg": 13.7
        },
        {
          "m": "2026-01",
          "pos": 88.9,
          "neg": 9.7
        },
        {
          "m": "2026-02",
          "pos": 91.8,
          "neg": 6.1
        },
        {
          "m": "2026-03",
          "pos": 86.3,
          "neg": 6.8
        },
        {
          "m": "2026-04",
          "pos": 85.2,
          "neg": 7.4
        },
        {
          "m": "2026-05",
          "pos": 94.3,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5014-ROUXINOL (0567)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 80.9,
      "nps_ajust": 80.6,
      "delta": -0.4,
      "sent_medio": 0.44,
      "pct_pos": 61,
      "pct_neg": 18,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Atendimento",
        "Loja Fisica",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Nunca tem o frango temperado nessa loja\"",
        "\"Fui muito bem atendida!\nParabéns pelo atendimento!\"",
        "\"No dia da compra a loja estava bem vazia. Talvez estivessem repondo os produtos ainda.\"",
        "\"a loja da rua rouxinol nao tem nada nunca\"",
        "\"falta sempre algum produto\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 43.5,
          "neg": 34.8
        },
        {
          "m": "2025-02",
          "pos": 42.1,
          "neg": 21.1
        },
        {
          "m": "2025-03",
          "pos": 45.0,
          "neg": 20.0
        },
        {
          "m": "2025-04",
          "pos": 44.4,
          "neg": 27.8
        },
        {
          "m": "2025-05",
          "pos": 47.6,
          "neg": 33.3
        },
        {
          "m": "2025-06",
          "pos": 77.3,
          "neg": 13.6
        },
        {
          "m": "2025-07",
          "pos": 58.1,
          "neg": 19.4
        },
        {
          "m": "2025-08",
          "pos": 61.9,
          "neg": 14.3
        },
        {
          "m": "2025-09",
          "pos": 62.5,
          "neg": 20.8
        },
        {
          "m": "2025-10",
          "pos": 63.3,
          "neg": 16.7
        },
        {
          "m": "2025-11",
          "pos": 91.2,
          "neg": 8.8
        },
        {
          "m": "2025-12",
          "pos": 66.7,
          "neg": 22.2
        },
        {
          "m": "2026-01",
          "pos": 66.7,
          "neg": 13.3
        },
        {
          "m": "2026-02",
          "pos": 63.2,
          "neg": 5.3
        },
        {
          "m": "2026-03",
          "pos": 71.4,
          "neg": 4.8
        },
        {
          "m": "2026-04",
          "pos": 63.6,
          "neg": 9.1
        },
        {
          "m": "2026-05",
          "pos": 44.4,
          "neg": 22.2
        }
      ]
    },
    {
      "nome": "L5015-BARAO ITAPURA (0570)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 88.1,
      "nps_ajust": 87.6,
      "delta": -0.5,
      "sent_medio": 0.46,
      "pct_pos": 65,
      "pct_neg": 19,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"achei excelente, foi minha primeira vez, mas adorei, muito bem, variedade de produtos\"",
        "\"Melhor loja da Swift!!!!\"",
        "\"Poderia voltar as tiras de filé mignon, também seria bom pacotes de carnes com quantidade menor.\"",
        "\"Está tudo ótimo, só espero que não entrem na onda da carne Feic, isso seria terrível .\"",
        "\"Só comprarei em lojas físicas . Virtualmente o serviço não vale q dor de cabeça\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2025-02",
          "pos": 50.0,
          "neg": 20.0
        },
        {
          "m": "2025-03",
          "pos": 75.0,
          "neg": 12.5
        },
        {
          "m": "2025-04",
          "pos": 63.6,
          "neg": 36.4
        },
        {
          "m": "2025-05",
          "pos": 66.7,
          "neg": 0.0
        },
        {
          "m": "2025-06",
          "pos": 83.3,
          "neg": 11.1
        },
        {
          "m": "2025-07",
          "pos": 75.0,
          "neg": 18.8
        },
        {
          "m": "2025-08",
          "pos": 86.7,
          "neg": 13.3
        },
        {
          "m": "2025-09",
          "pos": 68.8,
          "neg": 15.6
        },
        {
          "m": "2025-10",
          "pos": 31.2,
          "neg": 31.2
        },
        {
          "m": "2025-11",
          "pos": 53.8,
          "neg": 15.4
        },
        {
          "m": "2025-12",
          "pos": 58.5,
          "neg": 24.4
        },
        {
          "m": "2026-01",
          "pos": 54.5,
          "neg": 18.2
        },
        {
          "m": "2026-02",
          "pos": 60.0,
          "neg": 20.0
        },
        {
          "m": "2026-03",
          "pos": 68.4,
          "neg": 21.1
        },
        {
          "m": "2026-04",
          "pos": 69.2,
          "neg": 23.1
        },
        {
          "m": "2026-05",
          "pos": 57.1,
          "neg": 28.6
        }
      ]
    },
    {
      "nome": "L5016-ANDRADINA (0573)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 93.5,
      "nps_ajust": 93.0,
      "delta": -0.4,
      "sent_medio": 0.79,
      "pct_pos": 86,
      "pct_neg": 7,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Aumentando o nosso limite de crédito\"",
        "\"Eu Tive 2 problemas lá, falta de informação precisa, e comprei produtos que na gôndola estavam marcado um valor, mas que\"",
        "\"so fiquei chateado porque geralmente um contra filé é uma carne super mole mas peguei esses dias uma peça muito dura par\"",
        "\"Melhorar os preços , alguns produtos preços acima do praticado no mercado\"",
        "\"Já fiz duas compras onde o pedido não foi faturado, nem separado, tive que ir pessoalmente até a loja para entender o qu\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 84.6,
          "neg": 7.7
        },
        {
          "m": "2025-02",
          "pos": 90.9,
          "neg": 0.0
        },
        {
          "m": "2025-03",
          "pos": 81.8,
          "neg": 9.1
        },
        {
          "m": "2025-04",
          "pos": 88.9,
          "neg": 11.1
        },
        {
          "m": "2025-05",
          "pos": 77.8,
          "neg": 16.7
        },
        {
          "m": "2025-06",
          "pos": 87.1,
          "neg": 6.5
        },
        {
          "m": "2025-07",
          "pos": 91.7,
          "neg": 8.3
        },
        {
          "m": "2025-08",
          "pos": 92.3,
          "neg": 0.0
        },
        {
          "m": "2025-09",
          "pos": 87.5,
          "neg": 12.5
        },
        {
          "m": "2025-10",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2025-11",
          "pos": 78.6,
          "neg": 14.3
        },
        {
          "m": "2025-12",
          "pos": 95.7,
          "neg": 0.0
        },
        {
          "m": "2026-01",
          "pos": 66.7,
          "neg": 4.2
        },
        {
          "m": "2026-02",
          "pos": 97.1,
          "neg": 2.9
        },
        {
          "m": "2026-03",
          "pos": 81.8,
          "neg": 13.6
        },
        {
          "m": "2026-04",
          "pos": 88.9,
          "neg": 5.6
        },
        {
          "m": "2026-05",
          "pos": 92.9,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5017-LEOPOLDINA (0576)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 79.0,
      "nps_ajust": 79.2,
      "delta": 0.1,
      "sent_medio": 0.42,
      "pct_pos": 62,
      "pct_neg": 20,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Abastecimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Alguns produtos na loja estavam sem a placa de preços\"",
        "\"Sería conveniente adicionar productos complementos de carnes en general\"",
        "\"O peixe Pescada com cheiro muito forte. E a moça demorou muito para entregar a sacola com produtos já pago mas precisei \"",
        "\"Achei meio complicado o Uber\"",
        "\"atrasou 4 dias do prazo disponibilizado e só foi entregue após duas reclamações.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 54.5,
          "neg": 31.8
        },
        {
          "m": "2025-02",
          "pos": 68.0,
          "neg": 16.0
        },
        {
          "m": "2025-03",
          "pos": 75.0,
          "neg": 25.0
        },
        {
          "m": "2025-04",
          "pos": 52.4,
          "neg": 19.0
        },
        {
          "m": "2025-05",
          "pos": 66.7,
          "neg": 14.3
        },
        {
          "m": "2025-06",
          "pos": 58.8,
          "neg": 20.6
        },
        {
          "m": "2025-07",
          "pos": 66.7,
          "neg": 13.3
        },
        {
          "m": "2025-08",
          "pos": 75.0,
          "neg": 10.0
        },
        {
          "m": "2025-09",
          "pos": 71.4,
          "neg": 4.8
        },
        {
          "m": "2025-10",
          "pos": 50.0,
          "neg": 19.2
        },
        {
          "m": "2025-11",
          "pos": 66.7,
          "neg": 25.0
        },
        {
          "m": "2025-12",
          "pos": 50.0,
          "neg": 35.7
        },
        {
          "m": "2026-01",
          "pos": 55.0,
          "neg": 20.0
        },
        {
          "m": "2026-02",
          "pos": 45.5,
          "neg": 39.4
        },
        {
          "m": "2026-03",
          "pos": 71.4,
          "neg": 7.1
        },
        {
          "m": "2026-04",
          "pos": 70.4,
          "neg": 11.1
        },
        {
          "m": "2026-05",
          "pos": 75.0,
          "neg": 6.2
        }
      ]
    },
    {
      "nome": "L5018-MOEMA JURUCE (0584)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 87.8,
      "nps_ajust": 87.3,
      "delta": -0.5,
      "sent_medio": 0.61,
      "pct_pos": 74,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Atendimento",
        "Loja Fisica",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Tirar os mendigos que ficam em frente à porta de entrada\"",
        "\"Rever o frango inteiro. Ele não tem peito normal como sempre foi.\"",
        "\"Oferecer mais descontos\"",
        "\"Deveria ter mais opções de comida preparada com mais proteína, mesmo que fosse um pouco mais custoso.\"",
        "\"Atendimento excelente,  nunca mudo de loja\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 58.1,
          "neg": 29.0
        },
        {
          "m": "2025-02",
          "pos": 67.6,
          "neg": 24.3
        },
        {
          "m": "2025-03",
          "pos": 69.2,
          "neg": 15.4
        },
        {
          "m": "2025-04",
          "pos": 79.5,
          "neg": 10.3
        },
        {
          "m": "2025-05",
          "pos": 65.9,
          "neg": 18.2
        },
        {
          "m": "2025-06",
          "pos": 71.7,
          "neg": 13.0
        },
        {
          "m": "2025-07",
          "pos": 74.4,
          "neg": 15.4
        },
        {
          "m": "2025-08",
          "pos": 65.6,
          "neg": 21.9
        },
        {
          "m": "2025-09",
          "pos": 66.7,
          "neg": 9.5
        },
        {
          "m": "2025-10",
          "pos": 91.8,
          "neg": 0.0
        },
        {
          "m": "2025-11",
          "pos": 80.0,
          "neg": 5.7
        },
        {
          "m": "2025-12",
          "pos": 78.3,
          "neg": 11.7
        },
        {
          "m": "2026-01",
          "pos": 64.4,
          "neg": 15.3
        },
        {
          "m": "2026-02",
          "pos": 72.0,
          "neg": 14.0
        },
        {
          "m": "2026-03",
          "pos": 87.5,
          "neg": 7.1
        },
        {
          "m": "2026-04",
          "pos": 80.4,
          "neg": 10.9
        },
        {
          "m": "2026-05",
          "pos": 80.0,
          "neg": 12.0
        }
      ]
    },
    {
      "nome": "L5019-ANGELICA (0684)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 84.7,
      "nps_ajust": 84.1,
      "delta": -0.6,
      "sent_medio": 0.55,
      "pct_pos": 69,
      "pct_neg": 14,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Atendimento",
        "Promocoes Fidelidade",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Reduzindo os preços.\"",
        "\"Atendente caixa não prestou atenção ao atender meu irmão,  que foi fazer a compra para mim, e não parcelou a compra conf\"",
        "\"Maior produtor de carne do Brasil, poderia ter um preço melhor\"",
        "\"Carne com selo grassfed\"",
        "\"O ambiente da loja da Angélica é muito ruim, não me sinto confortável com o segurança me seguindo pela loja. Vou todo mê\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 68.2,
          "neg": 16.7
        },
        {
          "m": "2025-02",
          "pos": 66.1,
          "neg": 12.5
        },
        {
          "m": "2025-03",
          "pos": 57.7,
          "neg": 20.5
        },
        {
          "m": "2025-04",
          "pos": 77.4,
          "neg": 8.1
        },
        {
          "m": "2025-05",
          "pos": 68.8,
          "neg": 12.5
        },
        {
          "m": "2025-06",
          "pos": 71.7,
          "neg": 15.1
        },
        {
          "m": "2025-07",
          "pos": 58.7,
          "neg": 8.7
        },
        {
          "m": "2025-08",
          "pos": 74.5,
          "neg": 17.6
        },
        {
          "m": "2025-09",
          "pos": 71.2,
          "neg": 7.7
        },
        {
          "m": "2025-10",
          "pos": 68.3,
          "neg": 15.0
        },
        {
          "m": "2025-11",
          "pos": 68.3,
          "neg": 19.5
        },
        {
          "m": "2025-12",
          "pos": 73.7,
          "neg": 10.5
        },
        {
          "m": "2026-01",
          "pos": 70.6,
          "neg": 13.7
        },
        {
          "m": "2026-02",
          "pos": 62.8,
          "neg": 16.3
        },
        {
          "m": "2026-03",
          "pos": 72.5,
          "neg": 11.9
        },
        {
          "m": "2026-04",
          "pos": 70.8,
          "neg": 16.9
        },
        {
          "m": "2026-05",
          "pos": 73.6,
          "neg": 9.4
        }
      ]
    },
    {
      "nome": "L5020-VILA MARIANA 2 (0779)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 78.7,
      "nps_ajust": 78.2,
      "delta": -0.5,
      "sent_medio": 0.48,
      "pct_pos": 64,
      "pct_neg": 16,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Atendimento",
        "Loja Fisica",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"fui atendida a noite pela Jenyfer e Anne, super atenciosas\"",
        "\"as carnes nao tem mais a mesma qualidade, o alcatra em cubos que antes nao tinha nervo, agora tem, alguns pacotes de car\"",
        "\"É a segunda vez num prazo curto que não recebo o pedido completo. \nA pessoa que me atendeu me avisou de um produto se se\"",
        "\"Cliente tem prioridade.  Atendente da loja DEVE parar de abastecer e dar atenção para o cliente.\nIsso não aconteceu cono\"",
        "\"Não tenho argumentos. Só elogios. Aquelas meninas admitidas para esta época, estão bem treinadas, são muito agradáveis e\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 66.7,
          "neg": 25.9
        },
        {
          "m": "2025-02",
          "pos": 33.3,
          "neg": 33.3
        },
        {
          "m": "2025-03",
          "pos": 50.0,
          "neg": 37.5
        },
        {
          "m": "2025-04",
          "pos": 46.7,
          "neg": 6.7
        },
        {
          "m": "2025-05",
          "pos": 45.8,
          "neg": 33.3
        },
        {
          "m": "2025-06",
          "pos": 62.5,
          "neg": 0.0
        },
        {
          "m": "2025-07",
          "pos": 50.0,
          "neg": 15.6
        },
        {
          "m": "2025-08",
          "pos": 52.8,
          "neg": 19.4
        },
        {
          "m": "2025-09",
          "pos": 68.9,
          "neg": 22.2
        },
        {
          "m": "2025-10",
          "pos": 66.7,
          "neg": 8.3
        },
        {
          "m": "2025-11",
          "pos": 82.1,
          "neg": 10.7
        },
        {
          "m": "2025-12",
          "pos": 48.1,
          "neg": 18.5
        },
        {
          "m": "2026-01",
          "pos": 69.2,
          "neg": 13.5
        },
        {
          "m": "2026-02",
          "pos": 69.8,
          "neg": 7.0
        },
        {
          "m": "2026-03",
          "pos": 72.0,
          "neg": 10.0
        },
        {
          "m": "2026-04",
          "pos": 70.0,
          "neg": 15.0
        },
        {
          "m": "2026-05",
          "pos": 92.3,
          "neg": 7.7
        }
      ]
    },
    {
      "nome": "L5021-VILA SAUDE (0782)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 82.8,
      "nps_ajust": 82.3,
      "delta": -0.5,
      "sent_medio": 0.48,
      "pct_pos": 62,
      "pct_neg": 15,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"mais transparência e contato com cliente\"",
        "\"A nota 9 é pelo histórico do atendimento. Neste dia específico, não encontrei o produto que buscava ( tilápia 800g ). En\"",
        "\"Senti muita dificuldade em acessar os produtos no site.\"",
        "\"No site é comum aparecer depois da lista completa\n: esses produtos não serão possíveis de serem entregues, favor retirar\"",
        "\"Os preços estão acima dos supermercados concorrentes ; precisam reavaliar.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 59.6,
          "neg": 19.3
        },
        {
          "m": "2025-02",
          "pos": 64.9,
          "neg": 10.8
        },
        {
          "m": "2025-03",
          "pos": 62.8,
          "neg": 11.6
        },
        {
          "m": "2025-04",
          "pos": 69.8,
          "neg": 14.0
        },
        {
          "m": "2025-05",
          "pos": 68.2,
          "neg": 18.2
        },
        {
          "m": "2025-06",
          "pos": 64.4,
          "neg": 11.1
        },
        {
          "m": "2025-07",
          "pos": 72.7,
          "neg": 15.2
        },
        {
          "m": "2025-08",
          "pos": 51.3,
          "neg": 17.9
        },
        {
          "m": "2025-09",
          "pos": 61.5,
          "neg": 11.5
        },
        {
          "m": "2025-10",
          "pos": 78.0,
          "neg": 7.3
        },
        {
          "m": "2025-11",
          "pos": 60.0,
          "neg": 12.0
        },
        {
          "m": "2025-12",
          "pos": 71.4,
          "neg": 14.3
        },
        {
          "m": "2026-01",
          "pos": 51.7,
          "neg": 13.8
        },
        {
          "m": "2026-02",
          "pos": 52.4,
          "neg": 23.8
        },
        {
          "m": "2026-03",
          "pos": 56.8,
          "neg": 15.9
        },
        {
          "m": "2026-04",
          "pos": 48.6,
          "neg": 21.6
        },
        {
          "m": "2026-05",
          "pos": 62.5,
          "neg": 6.2
        }
      ]
    },
    {
      "nome": "L5022-SAO CAETANO CENTRO (0811)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 87.2,
      "nps_ajust": 86.9,
      "delta": -0.3,
      "sent_medio": 0.55,
      "pct_pos": 70,
      "pct_neg": 15,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Etiqueta com promoção e no caixa nao constava a promoção, mas fizeram o desconto.\"",
        "\"Alguns itens anunciados só avisa que esta em falta na hora de pagar. Ou me encaminhou para retirar numa unidade dade sup\"",
        "\"Se vcs realmente se importam com a .inja opinião, me liguem e  eu explico. Já cansei de responder a essas pesquisas e a \"",
        "\"Manter o padrão de atendimento. Parabéns a toda a equipe.\"",
        "\"Gostaria que vcs tivessem macarrão  a Carbonara\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 75.0,
          "neg": 13.9
        },
        {
          "m": "2025-02",
          "pos": 73.7,
          "neg": 10.5
        },
        {
          "m": "2025-03",
          "pos": 67.9,
          "neg": 21.4
        },
        {
          "m": "2025-04",
          "pos": 70.4,
          "neg": 11.1
        },
        {
          "m": "2025-05",
          "pos": 70.0,
          "neg": 20.0
        },
        {
          "m": "2025-06",
          "pos": 79.4,
          "neg": 5.9
        },
        {
          "m": "2025-07",
          "pos": 85.7,
          "neg": 7.1
        },
        {
          "m": "2025-08",
          "pos": 50.0,
          "neg": 28.6
        },
        {
          "m": "2025-09",
          "pos": 65.4,
          "neg": 11.5
        },
        {
          "m": "2025-10",
          "pos": 60.0,
          "neg": 20.0
        },
        {
          "m": "2025-11",
          "pos": 56.2,
          "neg": 18.8
        },
        {
          "m": "2025-12",
          "pos": 76.0,
          "neg": 6.0
        },
        {
          "m": "2026-01",
          "pos": 75.8,
          "neg": 15.2
        },
        {
          "m": "2026-02",
          "pos": 51.7,
          "neg": 27.6
        },
        {
          "m": "2026-03",
          "pos": 64.7,
          "neg": 17.6
        },
        {
          "m": "2026-04",
          "pos": 89.7,
          "neg": 6.9
        },
        {
          "m": "2026-05",
          "pos": 63.6,
          "neg": 13.6
        }
      ]
    },
    {
      "nome": "L5023-JOSE BONIFACIO (0813)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 86.7,
      "nps_ajust": 86.8,
      "delta": 0.1,
      "sent_medio": 0.58,
      "pct_pos": 71,
      "pct_neg": 14,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"não encontrei a carne moida que queria, ainda ia chegar\"",
        "\"Tudo muito bom .\"",
        "\"Peixe Mapara em postas.\"",
        "\"Estou satisfeita com os produtos\"",
        "\"Vantagens de ser cliente toda vez pedem p me identificar porém não há vantagens de descontos, não vejo por quem motivo t\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 100.0,
          "neg": 0.0
        },
        {
          "m": "2025-02",
          "pos": 100.0,
          "neg": 0.0
        },
        {
          "m": "2025-03",
          "pos": 66.7,
          "neg": 22.2
        },
        {
          "m": "2025-04",
          "pos": 25.0,
          "neg": 50.0
        },
        {
          "m": "2025-05",
          "pos": 61.9,
          "neg": 14.3
        },
        {
          "m": "2025-06",
          "pos": 63.6,
          "neg": 0.0
        },
        {
          "m": "2025-07",
          "pos": 64.3,
          "neg": 14.3
        },
        {
          "m": "2025-08",
          "pos": 70.0,
          "neg": 15.0
        },
        {
          "m": "2025-09",
          "pos": 92.9,
          "neg": 0.0
        },
        {
          "m": "2025-10",
          "pos": 53.8,
          "neg": 30.8
        },
        {
          "m": "2025-11",
          "pos": 68.8,
          "neg": 18.8
        },
        {
          "m": "2025-12",
          "pos": 66.7,
          "neg": 25.0
        },
        {
          "m": "2026-01",
          "pos": 58.8,
          "neg": 11.8
        },
        {
          "m": "2026-02",
          "pos": 66.7,
          "neg": 13.3
        },
        {
          "m": "2026-03",
          "pos": 79.2,
          "neg": 8.3
        },
        {
          "m": "2026-04",
          "pos": 72.7,
          "neg": 9.1
        },
        {
          "m": "2026-05",
          "pos": 60.0,
          "neg": 30.0
        }
      ]
    },
    {
      "nome": "L5024-VALINHOS (0814)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 88.2,
      "nps_ajust": 88.0,
      "delta": -0.2,
      "sent_medio": 0.61,
      "pct_pos": 74,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Aceitando cartão vale refeição!\"",
        "\"Qualidade dos produtos melhor (carnes estavam com aparência de velhas e que descongelaram e congelaram varias vezes)\"",
        "\"Melhorar os valores\"",
        "\"Seria interessante algumas promoções semanais de itens de uso comum, como carne moída, cubos de carne para panela etc. C\"",
        "\"Não precisa, já está ótimo\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 72.0,
          "neg": 24.0
        },
        {
          "m": "2025-02",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2025-03",
          "pos": 84.0,
          "neg": 4.0
        },
        {
          "m": "2025-04",
          "pos": 76.2,
          "neg": 9.5
        },
        {
          "m": "2025-05",
          "pos": 69.0,
          "neg": 17.2
        },
        {
          "m": "2025-06",
          "pos": 80.0,
          "neg": 11.4
        },
        {
          "m": "2025-07",
          "pos": 75.9,
          "neg": 13.8
        },
        {
          "m": "2025-08",
          "pos": 73.8,
          "neg": 11.9
        },
        {
          "m": "2025-09",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2025-10",
          "pos": 67.7,
          "neg": 12.9
        },
        {
          "m": "2025-11",
          "pos": 88.5,
          "neg": 0.0
        },
        {
          "m": "2025-12",
          "pos": 60.6,
          "neg": 18.2
        },
        {
          "m": "2026-01",
          "pos": 55.6,
          "neg": 13.9
        },
        {
          "m": "2026-02",
          "pos": 78.3,
          "neg": 17.4
        },
        {
          "m": "2026-03",
          "pos": 70.8,
          "neg": 16.7
        },
        {
          "m": "2026-04",
          "pos": 75.0,
          "neg": 10.0
        },
        {
          "m": "2026-05",
          "pos": 89.5,
          "neg": 5.3
        }
      ]
    },
    {
      "nome": "L5025-PANAMBY (0817)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 85.1,
      "nps_ajust": 85.0,
      "delta": -0.2,
      "sent_medio": 0.56,
      "pct_pos": 70,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Promocoes Fidelidade",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Já estou a vários vezes comprando na Swift, está tudo muito bom, mas sempre tem como melhorar.\"",
        "\"Vcs me conquistaram! Loja do Morumbi(próximo ao Jardim Sul, Loja da Clodomiro Amazonas. Parabéns! Gratidão\"",
        "\"O motivo de ter nota é a praticidade da entrega, bem como o track da entrega, porque o sistema é muito ruim. Você gasta \"",
        "\"Fazendo a minha troca já mandei mensagem e ninguém responde\"",
        "\"Por favor separar o pacote de alho pois ele acaba estragando os demais legumes que preciso comprar e não acho sempre sol\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 67.9,
          "neg": 17.9
        },
        {
          "m": "2025-02",
          "pos": 58.3,
          "neg": 12.5
        },
        {
          "m": "2025-03",
          "pos": 54.9,
          "neg": 19.6
        },
        {
          "m": "2025-04",
          "pos": 65.0,
          "neg": 10.0
        },
        {
          "m": "2025-05",
          "pos": 74.4,
          "neg": 15.4
        },
        {
          "m": "2025-06",
          "pos": 72.7,
          "neg": 15.2
        },
        {
          "m": "2025-07",
          "pos": 75.0,
          "neg": 16.7
        },
        {
          "m": "2025-08",
          "pos": 68.6,
          "neg": 17.1
        },
        {
          "m": "2025-09",
          "pos": 77.4,
          "neg": 9.7
        },
        {
          "m": "2025-10",
          "pos": 66.7,
          "neg": 20.0
        },
        {
          "m": "2025-11",
          "pos": 79.2,
          "neg": 8.3
        },
        {
          "m": "2025-12",
          "pos": 64.0,
          "neg": 20.0
        },
        {
          "m": "2026-01",
          "pos": 69.6,
          "neg": 15.2
        },
        {
          "m": "2026-02",
          "pos": 65.8,
          "neg": 13.2
        },
        {
          "m": "2026-03",
          "pos": 83.0,
          "neg": 4.3
        },
        {
          "m": "2026-04",
          "pos": 76.5,
          "neg": 5.9
        },
        {
          "m": "2026-05",
          "pos": 69.0,
          "neg": 10.3
        }
      ]
    },
    {
      "nome": "L5026-VILA MARIA (0818)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 89.6,
      "nps_ajust": 89.5,
      "delta": -0.2,
      "sent_medio": 0.68,
      "pct_pos": 79,
      "pct_neg": 12,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Atendimento",
        "Promocoes Fidelidade",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Sempre compro na Swift,  mas ultimamente vi que os preços aumentaram demais. Um exemplo, pacote do filé sassami de 1kg, \"",
        "\"Faltaram 3 itens que não tinham disponibilidade na loja.\"",
        "\"NA MINHA OPINIÃO NÃO PRECISA MELHORAR. MANTER ESTE PADRÃO DE ATENDIMENTO E PRODUTOS JÁ ESTA MUITO BOM.\"",
        "\"Começa pela foto, apresenta uma carne bonita e limpa, qd chega a carne cheia de gordura e pelanca, referente ao peso cob\"",
        "\"Melhoras no estacionamento apenas\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 82.4,
          "neg": 11.8
        },
        {
          "m": "2025-02",
          "pos": 71.4,
          "neg": 23.8
        },
        {
          "m": "2025-03",
          "pos": 73.7,
          "neg": 5.3
        },
        {
          "m": "2025-04",
          "pos": 82.6,
          "neg": 13.0
        },
        {
          "m": "2025-05",
          "pos": 87.5,
          "neg": 12.5
        },
        {
          "m": "2025-06",
          "pos": 88.0,
          "neg": 8.0
        },
        {
          "m": "2025-07",
          "pos": 93.3,
          "neg": 6.7
        },
        {
          "m": "2025-08",
          "pos": 88.9,
          "neg": 3.7
        },
        {
          "m": "2025-09",
          "pos": 72.2,
          "neg": 22.2
        },
        {
          "m": "2025-10",
          "pos": 75.0,
          "neg": 10.7
        },
        {
          "m": "2025-11",
          "pos": 72.7,
          "neg": 9.1
        },
        {
          "m": "2025-12",
          "pos": 81.8,
          "neg": 13.6
        },
        {
          "m": "2026-01",
          "pos": 83.3,
          "neg": 8.3
        },
        {
          "m": "2026-02",
          "pos": 78.6,
          "neg": 0.0
        },
        {
          "m": "2026-03",
          "pos": 73.3,
          "neg": 20.0
        },
        {
          "m": "2026-04",
          "pos": 66.7,
          "neg": 13.3
        },
        {
          "m": "2026-05",
          "pos": 63.6,
          "neg": 27.3
        }
      ]
    },
    {
      "nome": "L5027-ACLIMACAO (0851)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 82.9,
      "nps_ajust": 82.5,
      "delta": -0.4,
      "sent_medio": 0.48,
      "pct_pos": 65,
      "pct_neg": 17,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Atendimento",
        "Promocoes Fidelidade",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Porque pararam de mandar o mix de cogumelos pra loja? :(\"",
        "\"Bife de alcatra pessimo\"",
        "\"Ter mais produtos que saem mais. A última compra,faltaram alguns produtos que normalmente sempre tem .\"",
        "\"Thank you for giving me opportunity to add my view, At first SWIFT is a nice shopping center and most of the product pac\"",
        "\"Houve falha em um dos pedidos realizado, quanto a troca de alguns itens. \nQuero ressaltar que o problema foi solucionado\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 76.9,
          "neg": 11.5
        },
        {
          "m": "2025-02",
          "pos": 58.1,
          "neg": 16.1
        },
        {
          "m": "2025-03",
          "pos": 71.4,
          "neg": 21.4
        },
        {
          "m": "2025-04",
          "pos": 69.2,
          "neg": 11.5
        },
        {
          "m": "2025-05",
          "pos": 68.0,
          "neg": 16.0
        },
        {
          "m": "2025-06",
          "pos": 56.0,
          "neg": 32.0
        },
        {
          "m": "2025-07",
          "pos": 55.2,
          "neg": 24.1
        },
        {
          "m": "2025-08",
          "pos": 63.2,
          "neg": 26.3
        },
        {
          "m": "2025-09",
          "pos": 67.6,
          "neg": 11.8
        },
        {
          "m": "2025-10",
          "pos": 53.1,
          "neg": 18.8
        },
        {
          "m": "2025-11",
          "pos": 73.9,
          "neg": 8.7
        },
        {
          "m": "2025-12",
          "pos": 66.7,
          "neg": 9.5
        },
        {
          "m": "2026-01",
          "pos": 60.0,
          "neg": 12.0
        },
        {
          "m": "2026-02",
          "pos": 60.0,
          "neg": 10.0
        },
        {
          "m": "2026-03",
          "pos": 64.3,
          "neg": 25.0
        },
        {
          "m": "2026-04",
          "pos": 74.4,
          "neg": 10.3
        },
        {
          "m": "2026-05",
          "pos": 71.4,
          "neg": 9.5
        }
      ]
    },
    {
      "nome": "L5028-VILA PAULICEIA (0853)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 88.6,
      "nps_ajust": 88.3,
      "delta": -0.3,
      "sent_medio": 0.61,
      "pct_pos": 73,
      "pct_neg": 12,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Caixa muito demorado.\"",
        "\"Estou bem satisfeita com o atendimento.\"",
        "\"Brindes necessaire aos clientes acima de um valor de compra\"",
        "\"Acho que poderia de um.programa de pontos para trocar por produtos ou descontos.Obrigada.\"",
        "\"Ampliar os produtos da linha Lar, como por exemplo as iscas de frango.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 61.5,
          "neg": 19.2
        },
        {
          "m": "2025-02",
          "pos": 75.0,
          "neg": 3.6
        },
        {
          "m": "2025-03",
          "pos": 78.9,
          "neg": 10.5
        },
        {
          "m": "2025-04",
          "pos": 70.6,
          "neg": 5.9
        },
        {
          "m": "2025-05",
          "pos": 87.0,
          "neg": 8.7
        },
        {
          "m": "2025-06",
          "pos": 64.7,
          "neg": 17.6
        },
        {
          "m": "2025-07",
          "pos": 78.9,
          "neg": 15.8
        },
        {
          "m": "2025-08",
          "pos": 83.3,
          "neg": 11.1
        },
        {
          "m": "2025-09",
          "pos": 75.0,
          "neg": 5.0
        },
        {
          "m": "2025-10",
          "pos": 76.5,
          "neg": 11.8
        },
        {
          "m": "2025-11",
          "pos": 50.0,
          "neg": 16.7
        },
        {
          "m": "2025-12",
          "pos": 77.8,
          "neg": 5.6
        },
        {
          "m": "2026-01",
          "pos": 72.2,
          "neg": 5.6
        },
        {
          "m": "2026-02",
          "pos": 71.4,
          "neg": 19.0
        },
        {
          "m": "2026-03",
          "pos": 54.5,
          "neg": 27.3
        },
        {
          "m": "2026-04",
          "pos": 65.4,
          "neg": 15.4
        },
        {
          "m": "2026-05",
          "pos": 81.8,
          "neg": 9.1
        }
      ]
    },
    {
      "nome": "L5030-SAUDADE (0856)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 88.7,
      "nps_ajust": 88.3,
      "delta": -0.4,
      "sent_medio": 0.61,
      "pct_pos": 74,
      "pct_neg": 12,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Abastecimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Podem melhor os preços, algumas carnes estão com valores altos pela quantidade que vem na embalagem.\"",
        "\"Vcs são perfeitos, obrigada...\"",
        "\"Cumprir o prazo e entregar corretamente os itens que foram escolhidos.\"",
        "\"Bons produtos. No meucaso, filé suíno poderia ser em peças individuais\"",
        "\"Alguns produtos que vocês me enviam por e-mail,  a sua loja nunca tem,  o frango sassami comum, muito abaixo a qualidade\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 80.4,
          "neg": 10.9
        },
        {
          "m": "2025-02",
          "pos": 72.7,
          "neg": 9.1
        },
        {
          "m": "2025-03",
          "pos": 67.7,
          "neg": 19.4
        },
        {
          "m": "2025-04",
          "pos": 76.9,
          "neg": 12.8
        },
        {
          "m": "2025-05",
          "pos": 90.3,
          "neg": 3.2
        },
        {
          "m": "2025-06",
          "pos": 74.3,
          "neg": 17.1
        },
        {
          "m": "2025-07",
          "pos": 83.3,
          "neg": 6.7
        },
        {
          "m": "2025-08",
          "pos": 59.5,
          "neg": 18.9
        },
        {
          "m": "2025-09",
          "pos": 68.0,
          "neg": 16.0
        },
        {
          "m": "2025-10",
          "pos": 68.2,
          "neg": 4.5
        },
        {
          "m": "2025-11",
          "pos": 77.4,
          "neg": 9.7
        },
        {
          "m": "2025-12",
          "pos": 83.3,
          "neg": 5.6
        },
        {
          "m": "2026-01",
          "pos": 73.7,
          "neg": 15.8
        },
        {
          "m": "2026-02",
          "pos": 62.1,
          "neg": 13.8
        },
        {
          "m": "2026-03",
          "pos": 73.0,
          "neg": 13.5
        },
        {
          "m": "2026-04",
          "pos": 62.5,
          "neg": 10.0
        },
        {
          "m": "2026-05",
          "pos": 75.9,
          "neg": 17.2
        }
      ]
    },
    {
      "nome": "L5031-PERDIZES (0860)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 83.2,
      "nps_ajust": 83.2,
      "delta": 0.0,
      "sent_medio": 0.6,
      "pct_pos": 73,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Luis muito obgda pela atenção! Bom atendimento\"",
        "\"mantendo os produtos disponíveis e melhorando os preços.\"",
        "\"Lucas - ótimo atendimento\"",
        "\"Atenção nas promoções. Na loja da Pricacuama. Tinha uma promoção na segunda unidade de um produto, na hora de passar no \"",
        "\"O ESTACIONAMENTO DA LOJA PIRACUAMA É HORRIVEL, COM TRES VAGAS APENAS, ALEM DISSO FALTAM VARIOS PRODUTOS QUE NORMALMENTE \""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 68.2,
          "neg": 22.7
        },
        {
          "m": "2025-02",
          "pos": 83.3,
          "neg": 16.7
        },
        {
          "m": "2025-03",
          "pos": 70.0,
          "neg": 10.0
        },
        {
          "m": "2025-04",
          "pos": 78.3,
          "neg": 13.0
        },
        {
          "m": "2025-05",
          "pos": 66.7,
          "neg": 4.8
        },
        {
          "m": "2025-06",
          "pos": 70.6,
          "neg": 11.8
        },
        {
          "m": "2025-07",
          "pos": 60.0,
          "neg": 20.0
        },
        {
          "m": "2025-08",
          "pos": 70.0,
          "neg": 17.5
        },
        {
          "m": "2025-09",
          "pos": 77.1,
          "neg": 11.4
        },
        {
          "m": "2025-10",
          "pos": 61.1,
          "neg": 16.7
        },
        {
          "m": "2025-11",
          "pos": 68.4,
          "neg": 21.1
        },
        {
          "m": "2025-12",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2026-01",
          "pos": 83.7,
          "neg": 9.3
        },
        {
          "m": "2026-02",
          "pos": 57.9,
          "neg": 5.3
        },
        {
          "m": "2026-03",
          "pos": 86.6,
          "neg": 6.0
        },
        {
          "m": "2026-04",
          "pos": 61.5,
          "neg": 15.4
        },
        {
          "m": "2026-05",
          "pos": 54.5,
          "neg": 9.1
        }
      ]
    },
    {
      "nome": "L5033-SANTANA (0868)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 81.6,
      "nps_ajust": 81.2,
      "delta": -0.4,
      "sent_medio": 0.44,
      "pct_pos": 64,
      "pct_neg": 21,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Atendimento",
        "Loja Fisica",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Não permitindo que uma retira seja agendada em dia em que a loja escolhida pelo cliente estará fechada.\"",
        "\"A sacola poderia ser termica, pois o produto chega descongelado se for muito longe\"",
        "\"Os clientes cadastrados poderia ter algum cashback ou desconto\"",
        "\"Loja mal sinalizada, e com atendimento péssimo. No google está dizendo que a loja fecha as 21h. E minha esposa e eu cheg\"",
        "\"Faltou 1 item,  e reembolsaram\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 59.1,
          "neg": 18.2
        },
        {
          "m": "2025-02",
          "pos": 50.0,
          "neg": 50.0
        },
        {
          "m": "2025-03",
          "pos": 44.4,
          "neg": 27.8
        },
        {
          "m": "2025-04",
          "pos": 50.0,
          "neg": 42.9
        },
        {
          "m": "2025-05",
          "pos": 27.3,
          "neg": 54.5
        },
        {
          "m": "2025-06",
          "pos": 60.0,
          "neg": 25.0
        },
        {
          "m": "2025-07",
          "pos": 46.2,
          "neg": 30.8
        },
        {
          "m": "2025-08",
          "pos": 68.4,
          "neg": 10.5
        },
        {
          "m": "2025-09",
          "pos": 61.9,
          "neg": 19.0
        },
        {
          "m": "2025-10",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2025-11",
          "pos": 75.0,
          "neg": 8.3
        },
        {
          "m": "2025-12",
          "pos": 80.6,
          "neg": 9.7
        },
        {
          "m": "2026-01",
          "pos": 62.5,
          "neg": 25.0
        },
        {
          "m": "2026-02",
          "pos": 64.7,
          "neg": 29.4
        },
        {
          "m": "2026-03",
          "pos": 87.5,
          "neg": 6.2
        },
        {
          "m": "2026-04",
          "pos": 80.0,
          "neg": 6.7
        },
        {
          "m": "2026-05",
          "pos": 71.4,
          "neg": 14.3
        }
      ]
    },
    {
      "nome": "L5034-D. PEDRO LL (0873)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 88.7,
      "nps_ajust": 88.3,
      "delta": -0.4,
      "sent_medio": 0.6,
      "pct_pos": 73,
      "pct_neg": 12,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Atendimento"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Promocoes Fidelidade",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Comprei espetos de carne com Bacon e de frango,  porém eles não estavam em ordem, muitos pedaços não estavam espetados, \"",
        "\"Promoções por unidade , preços mais caros que açougue\"",
        "\"Se melhorar, estraga kkkkkkk. Estão de parabéns ????\"",
        "\"O site ficou meio confuso e só aceitou meu pagamento via pix.\nA entrega foi feita, pelo parceiro, de bicicleta. Minha su\"",
        "\"Fui no domingo dia 04/05 ,na unidade da Swift da Av Dom Pedro II, Santo André ,  estava eu e minha filha , fazendo compr\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 84.6,
          "neg": 2.6
        },
        {
          "m": "2025-02",
          "pos": 63.2,
          "neg": 21.1
        },
        {
          "m": "2025-03",
          "pos": 70.0,
          "neg": 20.0
        },
        {
          "m": "2025-04",
          "pos": 48.3,
          "neg": 34.5
        },
        {
          "m": "2025-05",
          "pos": 65.1,
          "neg": 18.6
        },
        {
          "m": "2025-06",
          "pos": 80.8,
          "neg": 5.8
        },
        {
          "m": "2025-07",
          "pos": 57.6,
          "neg": 12.1
        },
        {
          "m": "2025-08",
          "pos": 82.4,
          "neg": 0.0
        },
        {
          "m": "2025-09",
          "pos": 73.1,
          "neg": 11.5
        },
        {
          "m": "2025-10",
          "pos": 71.8,
          "neg": 10.3
        },
        {
          "m": "2025-11",
          "pos": 72.0,
          "neg": 8.0
        },
        {
          "m": "2025-12",
          "pos": 77.6,
          "neg": 8.2
        },
        {
          "m": "2026-01",
          "pos": 82.8,
          "neg": 3.4
        },
        {
          "m": "2026-02",
          "pos": 66.7,
          "neg": 12.5
        },
        {
          "m": "2026-03",
          "pos": 69.0,
          "neg": 24.1
        },
        {
          "m": "2026-04",
          "pos": 79.3,
          "neg": 13.8
        },
        {
          "m": "2026-05",
          "pos": 86.7,
          "neg": 6.7
        }
      ]
    },
    {
      "nome": "L5035-TREMEMBE (0875)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 87.1,
      "nps_ajust": 86.6,
      "delta": -0.5,
      "sent_medio": 0.58,
      "pct_pos": 73,
      "pct_neg": 14,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"É a melhor de todas\"",
        "\"Gostaria de mais quantidade e  variedade de cogumelos!\"",
        "\"Na unidade Swift - Tremembé não tinha o filé de tilápia de 800g\"",
        "\"Os anúncios das promoções das geladeiras estavam confusos e induziam ao erro se não prestasse atenção você passaria raiv\"",
        "\"Bom dia minha experiência foi ótima e voltarei a comprar novamente\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 64.3,
          "neg": 14.3
        },
        {
          "m": "2025-02",
          "pos": 75.0,
          "neg": 20.0
        },
        {
          "m": "2025-03",
          "pos": 76.9,
          "neg": 7.7
        },
        {
          "m": "2025-04",
          "pos": 66.7,
          "neg": 13.3
        },
        {
          "m": "2025-05",
          "pos": 75.8,
          "neg": 6.1
        },
        {
          "m": "2025-06",
          "pos": 69.2,
          "neg": 11.5
        },
        {
          "m": "2025-07",
          "pos": 66.7,
          "neg": 18.5
        },
        {
          "m": "2025-08",
          "pos": 80.4,
          "neg": 10.9
        },
        {
          "m": "2025-09",
          "pos": 73.7,
          "neg": 21.1
        },
        {
          "m": "2025-10",
          "pos": 77.8,
          "neg": 16.7
        },
        {
          "m": "2025-11",
          "pos": 93.3,
          "neg": 6.7
        },
        {
          "m": "2025-12",
          "pos": 81.5,
          "neg": 7.4
        },
        {
          "m": "2026-01",
          "pos": 68.2,
          "neg": 13.6
        },
        {
          "m": "2026-02",
          "pos": 52.9,
          "neg": 29.4
        },
        {
          "m": "2026-03",
          "pos": 72.4,
          "neg": 13.8
        },
        {
          "m": "2026-04",
          "pos": 62.5,
          "neg": 18.8
        },
        {
          "m": "2026-05",
          "pos": 68.2,
          "neg": 22.7
        }
      ]
    },
    {
      "nome": "L5037-VILA ROMANA (0880)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 81.4,
      "nps_ajust": 80.5,
      "delta": -0.8,
      "sent_medio": 0.5,
      "pct_pos": 67,
      "pct_neg": 17,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Limpeza mais frequente.\"",
        "\"acho que como vcs são distribuidores diretos do frigorífico, poderiam ter preços mais acessíveis.\"",
        "\"Poderiam facilitar o pagamento. Parcelar a compra.\"",
        "\"Aceitando o cartão alelo alimentação no site!\"",
        "\"Os produtos estão as vezes não estão no mesmo lugar. Houve degustação na loja os produtos apresentados,para os clientes \""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 62.5,
          "neg": 12.5
        },
        {
          "m": "2025-02",
          "pos": 68.4,
          "neg": 21.1
        },
        {
          "m": "2025-03",
          "pos": 61.1,
          "neg": 22.2
        },
        {
          "m": "2025-04",
          "pos": 60.9,
          "neg": 26.1
        },
        {
          "m": "2025-05",
          "pos": 69.2,
          "neg": 30.8
        },
        {
          "m": "2025-06",
          "pos": 83.3,
          "neg": 0.0
        },
        {
          "m": "2025-07",
          "pos": 58.3,
          "neg": 25.0
        },
        {
          "m": "2025-08",
          "pos": 48.5,
          "neg": 39.4
        },
        {
          "m": "2025-09",
          "pos": 52.4,
          "neg": 23.8
        },
        {
          "m": "2025-10",
          "pos": 70.0,
          "neg": 16.7
        },
        {
          "m": "2025-11",
          "pos": 54.8,
          "neg": 16.1
        },
        {
          "m": "2025-12",
          "pos": 74.5,
          "neg": 13.7
        },
        {
          "m": "2026-01",
          "pos": 73.5,
          "neg": 8.8
        },
        {
          "m": "2026-02",
          "pos": 76.0,
          "neg": 8.0
        },
        {
          "m": "2026-03",
          "pos": 76.3,
          "neg": 11.9
        },
        {
          "m": "2026-04",
          "pos": 69.6,
          "neg": 15.2
        },
        {
          "m": "2026-05",
          "pos": 68.8,
          "neg": 12.5
        }
      ]
    },
    {
      "nome": "L5038-SAO JOSE DOS CAMPOS (0886)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 89.9,
      "nps_ajust": 89.4,
      "delta": -0.4,
      "sent_medio": 0.6,
      "pct_pos": 74,
      "pct_neg": 14,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Tudo perfeito,limpo,organizado,atendentes super atenciosos,nota mil,sem falr do preço acessível qualquer cabe em qualque\"",
        "\"Fazer , tipo um cartão  fidelidade, conforme o cliente vai comprando, recebe pontos p descontos na próxima  compra ??\"",
        "\"Simplesmente viciante,produtos primeira qualidade e ainda por cima passa meu cartão alimentação isso e muito bom,Swift d\"",
        "\"Ainda não consegui entender a ordenação e guarda dos produtos. Acho meio aleatório o agrupamento dos itens e fico meio p\"",
        "\"Não há mais espetinho de filet mignon?\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 84.0,
          "neg": 12.0
        },
        {
          "m": "2025-02",
          "pos": 88.2,
          "neg": 0.0
        },
        {
          "m": "2025-03",
          "pos": 80.0,
          "neg": 6.7
        },
        {
          "m": "2025-04",
          "pos": 55.6,
          "neg": 22.2
        },
        {
          "m": "2025-05",
          "pos": 64.7,
          "neg": 17.6
        },
        {
          "m": "2025-06",
          "pos": 68.0,
          "neg": 20.0
        },
        {
          "m": "2025-07",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2025-08",
          "pos": 79.2,
          "neg": 12.5
        },
        {
          "m": "2025-09",
          "pos": 68.8,
          "neg": 18.8
        },
        {
          "m": "2025-10",
          "pos": 73.7,
          "neg": 5.3
        },
        {
          "m": "2025-11",
          "pos": 69.2,
          "neg": 15.4
        },
        {
          "m": "2025-12",
          "pos": 75.0,
          "neg": 15.6
        },
        {
          "m": "2026-01",
          "pos": 81.2,
          "neg": 6.2
        },
        {
          "m": "2026-02",
          "pos": 68.0,
          "neg": 24.0
        },
        {
          "m": "2026-03",
          "pos": 73.7,
          "neg": 10.5
        },
        {
          "m": "2026-04",
          "pos": 76.2,
          "neg": 14.3
        },
        {
          "m": "2026-05",
          "pos": 60.0,
          "neg": 30.0
        }
      ]
    },
    {
      "nome": "L5039-ZELINA (1208)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 87.8,
      "nps_ajust": 87.4,
      "delta": -0.3,
      "sent_medio": 0.61,
      "pct_pos": 74,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Atendimento",
        "Promocoes Fidelidade",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"As vezes,fazer umas promoções melhor\"",
        "\"A equipe do fechamento e incrível! Fui super bem atendido! ?\"",
        "\"Uma loja na av Alberto ramos, seria ótimo\"",
        "\"melhorar a posição das etiquetas de preço, do restante loja impecável\"",
        "\"Os valores estão altos e poderia ter programa de acúmulo de pontos para trocar por descontos.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 77.5,
          "neg": 12.5
        },
        {
          "m": "2025-02",
          "pos": 60.6,
          "neg": 18.2
        },
        {
          "m": "2025-03",
          "pos": 75.0,
          "neg": 7.5
        },
        {
          "m": "2025-04",
          "pos": 73.7,
          "neg": 21.1
        },
        {
          "m": "2025-05",
          "pos": 72.7,
          "neg": 15.2
        },
        {
          "m": "2025-06",
          "pos": 72.2,
          "neg": 16.7
        },
        {
          "m": "2025-07",
          "pos": 57.9,
          "neg": 26.3
        },
        {
          "m": "2025-08",
          "pos": 78.3,
          "neg": 17.4
        },
        {
          "m": "2025-09",
          "pos": 73.5,
          "neg": 5.9
        },
        {
          "m": "2025-10",
          "pos": 82.2,
          "neg": 11.1
        },
        {
          "m": "2025-11",
          "pos": 74.4,
          "neg": 7.7
        },
        {
          "m": "2025-12",
          "pos": 87.0,
          "neg": 4.3
        },
        {
          "m": "2026-01",
          "pos": 68.8,
          "neg": 0.0
        },
        {
          "m": "2026-02",
          "pos": 73.1,
          "neg": 23.1
        },
        {
          "m": "2026-03",
          "pos": 82.4,
          "neg": 11.8
        },
        {
          "m": "2026-04",
          "pos": 73.3,
          "neg": 10.0
        },
        {
          "m": "2026-05",
          "pos": 50.0,
          "neg": 8.3
        }
      ]
    },
    {
      "nome": "L5040-GUARULHOS (1211)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 87.8,
      "nps_ajust": 87.5,
      "delta": -0.3,
      "sent_medio": 0.65,
      "pct_pos": 77,
      "pct_neg": 12,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Atendimento",
        "Loja Fisica",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Sempre que vou na loja Swift da Timóteo só bem atendida pela atendente Mariana sempre bem atenciosa e gentil.\nCom a muda\"",
        "\"Adoro a loja, atendimento rápido, loja limpa organizada, atendentes ótimos! Tem tudo o que procuro, as vezes acaba rápid\"",
        "\"A loja é agradável tem variedades de produtos e um atendimento excelente do Luciano e Mariana.\"",
        "\"Só gostaria que o carpatio, tolerasse a ser embalado com um papel no intervalo das fatias m, o meu veio todo grudado hor\"",
        "\"Atendimento sempre de primeira, gosto muito dessa loja que é muito organizada. Fui atendido pela Angélica que sempre me \""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 67.3,
          "neg": 21.2
        },
        {
          "m": "2025-02",
          "pos": 67.9,
          "neg": 14.3
        },
        {
          "m": "2025-03",
          "pos": 78.0,
          "neg": 8.5
        },
        {
          "m": "2025-04",
          "pos": 87.0,
          "neg": 4.3
        },
        {
          "m": "2025-05",
          "pos": 82.5,
          "neg": 5.0
        },
        {
          "m": "2025-06",
          "pos": 85.7,
          "neg": 3.6
        },
        {
          "m": "2025-07",
          "pos": 90.0,
          "neg": 7.5
        },
        {
          "m": "2025-08",
          "pos": 85.4,
          "neg": 14.6
        },
        {
          "m": "2025-09",
          "pos": 70.9,
          "neg": 14.5
        },
        {
          "m": "2025-10",
          "pos": 78.4,
          "neg": 13.7
        },
        {
          "m": "2025-11",
          "pos": 91.3,
          "neg": 0.0
        },
        {
          "m": "2025-12",
          "pos": 80.0,
          "neg": 14.0
        },
        {
          "m": "2026-01",
          "pos": 60.0,
          "neg": 25.7
        },
        {
          "m": "2026-02",
          "pos": 87.9,
          "neg": 9.1
        },
        {
          "m": "2026-03",
          "pos": 60.0,
          "neg": 22.5
        },
        {
          "m": "2026-04",
          "pos": 66.7,
          "neg": 22.2
        },
        {
          "m": "2026-05",
          "pos": 68.4,
          "neg": 5.3
        }
      ]
    },
    {
      "nome": "L5041-TAUBATE (1224)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 91.5,
      "nps_ajust": 90.9,
      "delta": -0.5,
      "sent_medio": 0.66,
      "pct_pos": 77,
      "pct_neg": 11,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Atendimento",
        "Promocoes Fidelidade",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Loja bacana , com produtos de qualidade , funcionários atenciosos , Simone deu atenção no ato da compra e no fechamento.\"",
        "\"Gostaria de comprar Salmão Selvagem.\"",
        "\"Muito gostoso, qualidade boa.\"",
        "\"Fomos super bem atendidos pela funcionária na qual nos tratou com muito carinho, atenção e paciência. Vocês estão de par\"",
        "\"Pontual e com ótima qualidade\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 80.0,
          "neg": 16.0
        },
        {
          "m": "2025-02",
          "pos": 66.7,
          "neg": 16.7
        },
        {
          "m": "2025-03",
          "pos": 75.0,
          "neg": 18.8
        },
        {
          "m": "2025-04",
          "pos": 73.3,
          "neg": 26.7
        },
        {
          "m": "2025-05",
          "pos": 86.4,
          "neg": 9.1
        },
        {
          "m": "2025-06",
          "pos": 66.7,
          "neg": 5.6
        },
        {
          "m": "2025-07",
          "pos": 70.0,
          "neg": 0.0
        },
        {
          "m": "2025-08",
          "pos": 86.7,
          "neg": 0.0
        },
        {
          "m": "2025-09",
          "pos": 80.0,
          "neg": 13.3
        },
        {
          "m": "2025-10",
          "pos": 80.0,
          "neg": 13.3
        },
        {
          "m": "2025-11",
          "pos": 75.0,
          "neg": 16.7
        },
        {
          "m": "2025-12",
          "pos": 73.3,
          "neg": 6.7
        },
        {
          "m": "2026-01",
          "pos": 80.0,
          "neg": 13.3
        },
        {
          "m": "2026-02",
          "pos": 78.3,
          "neg": 13.0
        },
        {
          "m": "2026-03",
          "pos": 72.2,
          "neg": 5.6
        },
        {
          "m": "2026-04",
          "pos": 84.0,
          "neg": 8.0
        },
        {
          "m": "2026-05",
          "pos": 72.7,
          "neg": 18.2
        }
      ]
    },
    {
      "nome": "L5042-IPIRANGA (1237)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 85.4,
      "nps_ajust": 84.9,
      "delta": -0.4,
      "sent_medio": 0.6,
      "pct_pos": 72,
      "pct_neg": 12,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Atendimento",
        "Promocoes Fidelidade",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Contratar mais funcionário igual Alex muito educado e sotaque da minha Bahia amo demais\"",
        "\"Está bom, ficará melhor com promoção.\"",
        "\"Abaixando os preço e continuar c a qualidade\"",
        "\"Fiz a compra de forma online pensando na agilidade em retirar, pois precisava chegar em casa o quanto antes devido a com\"",
        "\"Só não encontrei um produto, mas acabei comprando outra coisa pra substituir\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 77.1,
          "neg": 5.7
        },
        {
          "m": "2025-02",
          "pos": 75.9,
          "neg": 13.8
        },
        {
          "m": "2025-03",
          "pos": 74.1,
          "neg": 7.4
        },
        {
          "m": "2025-04",
          "pos": 73.8,
          "neg": 11.9
        },
        {
          "m": "2025-05",
          "pos": 73.9,
          "neg": 10.9
        },
        {
          "m": "2025-06",
          "pos": 76.8,
          "neg": 14.3
        },
        {
          "m": "2025-07",
          "pos": 79.1,
          "neg": 9.3
        },
        {
          "m": "2025-08",
          "pos": 77.8,
          "neg": 17.8
        },
        {
          "m": "2025-09",
          "pos": 60.0,
          "neg": 20.0
        },
        {
          "m": "2025-10",
          "pos": 75.0,
          "neg": 9.1
        },
        {
          "m": "2025-11",
          "pos": 74.5,
          "neg": 10.6
        },
        {
          "m": "2025-12",
          "pos": 66.7,
          "neg": 18.8
        },
        {
          "m": "2026-01",
          "pos": 53.7,
          "neg": 14.6
        },
        {
          "m": "2026-02",
          "pos": 64.4,
          "neg": 13.3
        },
        {
          "m": "2026-03",
          "pos": 63.8,
          "neg": 8.5
        },
        {
          "m": "2026-04",
          "pos": 78.1,
          "neg": 9.4
        },
        {
          "m": "2026-05",
          "pos": 70.4,
          "neg": 18.5
        }
      ]
    },
    {
      "nome": "L5043-PORTUGAL (1239)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 84.0,
      "nps_ajust": 83.3,
      "delta": -0.6,
      "sent_medio": 0.51,
      "pct_pos": 66,
      "pct_neg": 15,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Produto",
        "Promocoes Fidelidade",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Cuidado com os preços aplicados\"",
        "\"Melhores não seria a palavra certa, mas se vocês mantiverem sempre uma comidinha diferente na prateleira é o suficiente \"",
        "\"Lançar um app p escolha, pagamento e retirada na loja\"",
        "\"Está faltando padrão. Já comprei essa fraldinha outras vezes e não decepcionou, estava sempre macia. Desta vez estava ma\"",
        "\"O pedido não chegou dentro das 5 horas. Tive que reclamar e, só então,  o pedido foi separado, faturado e entregue.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 61.8,
          "neg": 20.6
        },
        {
          "m": "2025-02",
          "pos": 76.5,
          "neg": 17.6
        },
        {
          "m": "2025-03",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2025-04",
          "pos": 71.0,
          "neg": 9.7
        },
        {
          "m": "2025-05",
          "pos": 73.7,
          "neg": 21.1
        },
        {
          "m": "2025-06",
          "pos": 55.9,
          "neg": 23.5
        },
        {
          "m": "2025-07",
          "pos": 60.9,
          "neg": 13.0
        },
        {
          "m": "2025-08",
          "pos": 92.3,
          "neg": 3.8
        },
        {
          "m": "2025-09",
          "pos": 58.3,
          "neg": 0.0
        },
        {
          "m": "2025-10",
          "pos": 62.5,
          "neg": 18.8
        },
        {
          "m": "2025-11",
          "pos": 70.0,
          "neg": 10.0
        },
        {
          "m": "2025-12",
          "pos": 83.3,
          "neg": 5.6
        },
        {
          "m": "2026-01",
          "pos": 63.0,
          "neg": 18.5
        },
        {
          "m": "2026-02",
          "pos": 60.0,
          "neg": 25.0
        },
        {
          "m": "2026-03",
          "pos": 64.3,
          "neg": 14.3
        },
        {
          "m": "2026-04",
          "pos": 54.2,
          "neg": 20.8
        },
        {
          "m": "2026-05",
          "pos": 47.6,
          "neg": 19.0
        }
      ]
    },
    {
      "nome": "L5044-INDAIATUBA (1243)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 87.3,
      "nps_ajust": 87.4,
      "delta": 0.1,
      "sent_medio": 0.58,
      "pct_pos": 72,
      "pct_neg": 14,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Vcs podiam ter um sistema de cash back\"",
        "\"Todas as compras que fiz agendada nunca entregaram no dia, péssimo!!\"",
        "\"Nenhum especialista se ofereceu para ajudar. E no caixa ao pagar em dinheiro 450, da conta de 449,50. O vendedor me diss\"",
        "\"Continuem com a qualidade e variedade dos produtos,assim como a cordialidade dos atendentes.\"",
        "\"Comprei uma picanha que estava extremamente dura! Aliás isso ocorreu pela segunda vez... estou perdendo a confiança de t\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 72.2,
          "neg": 16.7
        },
        {
          "m": "2025-02",
          "pos": 63.2,
          "neg": 21.1
        },
        {
          "m": "2025-03",
          "pos": 66.7,
          "neg": 16.7
        },
        {
          "m": "2025-04",
          "pos": 69.2,
          "neg": 15.4
        },
        {
          "m": "2025-05",
          "pos": 93.3,
          "neg": 6.7
        },
        {
          "m": "2025-06",
          "pos": 81.0,
          "neg": 4.8
        },
        {
          "m": "2025-07",
          "pos": 84.6,
          "neg": 7.7
        },
        {
          "m": "2025-08",
          "pos": 76.0,
          "neg": 16.0
        },
        {
          "m": "2025-09",
          "pos": 62.5,
          "neg": 18.8
        },
        {
          "m": "2025-10",
          "pos": 62.5,
          "neg": 12.5
        },
        {
          "m": "2025-11",
          "pos": 78.9,
          "neg": 15.8
        },
        {
          "m": "2025-12",
          "pos": 84.2,
          "neg": 0.0
        },
        {
          "m": "2026-01",
          "pos": 53.3,
          "neg": 20.0
        },
        {
          "m": "2026-02",
          "pos": 83.3,
          "neg": 11.1
        },
        {
          "m": "2026-03",
          "pos": 63.6,
          "neg": 9.1
        },
        {
          "m": "2026-04",
          "pos": 60.0,
          "neg": 24.0
        },
        {
          "m": "2026-05",
          "pos": 70.6,
          "neg": 11.8
        }
      ]
    },
    {
      "nome": "L5045-TATUAPE (1247)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 86.0,
      "nps_ajust": 85.8,
      "delta": -0.2,
      "sent_medio": 0.59,
      "pct_pos": 72,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Mais Promoções; preços mais baixos\"",
        "\"Desde sempre acho ruim q cada vez q vamos a uma loja, os produtos foram mudados de lugar. Na minha penúltima vez, além d\"",
        "\"Está bem assim!\"",
        "\"Tinha um produto que eu não achei nas prateleiras,  mas a funcionária,  muito solícita, foi no estoque e me trouxe,  mui\"",
        "\"VOLTADO A PICANHA E BANDEJA FATIADA\nEM CASA SÓ SOY EU E MINHA ESPOSA ENTÃO UMA PEÇA E MUITA COISA\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 68.2,
          "neg": 9.1
        },
        {
          "m": "2025-02",
          "pos": 63.2,
          "neg": 15.8
        },
        {
          "m": "2025-03",
          "pos": 66.7,
          "neg": 16.7
        },
        {
          "m": "2025-04",
          "pos": 65.2,
          "neg": 21.7
        },
        {
          "m": "2025-05",
          "pos": 90.9,
          "neg": 9.1
        },
        {
          "m": "2025-06",
          "pos": 75.8,
          "neg": 9.1
        },
        {
          "m": "2025-07",
          "pos": 58.8,
          "neg": 23.5
        },
        {
          "m": "2025-08",
          "pos": 87.0,
          "neg": 8.7
        },
        {
          "m": "2025-09",
          "pos": 68.8,
          "neg": 9.4
        },
        {
          "m": "2025-10",
          "pos": 76.5,
          "neg": 11.8
        },
        {
          "m": "2025-11",
          "pos": 66.7,
          "neg": 20.0
        },
        {
          "m": "2025-12",
          "pos": 77.3,
          "neg": 13.6
        },
        {
          "m": "2026-01",
          "pos": 75.0,
          "neg": 10.0
        },
        {
          "m": "2026-02",
          "pos": 71.4,
          "neg": 9.5
        },
        {
          "m": "2026-03",
          "pos": 66.7,
          "neg": 16.7
        },
        {
          "m": "2026-04",
          "pos": 85.0,
          "neg": 10.0
        },
        {
          "m": "2026-05",
          "pos": 65.2,
          "neg": 8.7
        }
      ]
    },
    {
      "nome": "L5046-VILA CARRAO (1248)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 86.8,
      "nps_ajust": 86.5,
      "delta": -0.3,
      "sent_medio": 0.55,
      "pct_pos": 68,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Entrega Logistica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"deixar os funcionarios mais \"por dentro\" das promoções, pois na loja falaram que essa promoção de levar 2 ou mais não er\"",
        "\"Parabéns para a equipe\"",
        "\"Está ótimo não presisa melhorar nada amoooo\"",
        "\"Faltou um item\"",
        "\"Sim caldo verde\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 66.1,
          "neg": 8.1
        },
        {
          "m": "2025-02",
          "pos": 92.9,
          "neg": 3.6
        },
        {
          "m": "2025-03",
          "pos": 67.4,
          "neg": 11.6
        },
        {
          "m": "2025-04",
          "pos": 71.8,
          "neg": 7.7
        },
        {
          "m": "2025-05",
          "pos": 66.7,
          "neg": 3.7
        },
        {
          "m": "2025-06",
          "pos": 64.5,
          "neg": 16.1
        },
        {
          "m": "2025-07",
          "pos": 76.9,
          "neg": 15.4
        },
        {
          "m": "2025-08",
          "pos": 83.9,
          "neg": 9.7
        },
        {
          "m": "2025-09",
          "pos": 56.7,
          "neg": 23.3
        },
        {
          "m": "2025-10",
          "pos": 61.5,
          "neg": 20.5
        },
        {
          "m": "2025-11",
          "pos": 66.7,
          "neg": 10.0
        },
        {
          "m": "2025-12",
          "pos": 67.6,
          "neg": 14.7
        },
        {
          "m": "2026-01",
          "pos": 75.0,
          "neg": 17.9
        },
        {
          "m": "2026-02",
          "pos": 60.7,
          "neg": 25.0
        },
        {
          "m": "2026-03",
          "pos": 60.0,
          "neg": 10.0
        },
        {
          "m": "2026-04",
          "pos": 54.2,
          "neg": 20.8
        },
        {
          "m": "2026-05",
          "pos": 75.0,
          "neg": 18.8
        }
      ]
    },
    {
      "nome": "L5047-SAO BERNARDO (1255)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 86.5,
      "nps_ajust": 86.2,
      "delta": -0.3,
      "sent_medio": 0.54,
      "pct_pos": 68,
      "pct_neg": 14,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Nao sao todos mas atendimento ruim a pessoa  sem.nenhuma bontade de trabalhar\"",
        "\"É sempre muito bom comprar com vcs! Ótimos preços, variedades! Penso que está tudo ótimo! Sempre tem ofertas! Parabéns!\"",
        "\"Infelizmente pela primeira vez,um operador de loja não tinha a mínima educação no trato com o cliente\"",
        "\"As informações estavam muito confusas em relação a produto e valores. Bagunça em relação as embalagens. Antes era mais p\"",
        "\"Comprei na última semana contra filé Swift combo a Carne dura pior que carne de jaba cheia de nervo ninguém conseguiu co\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 68.0,
          "neg": 10.0
        },
        {
          "m": "2025-02",
          "pos": 68.6,
          "neg": 14.3
        },
        {
          "m": "2025-03",
          "pos": 66.7,
          "neg": 15.4
        },
        {
          "m": "2025-04",
          "pos": 59.2,
          "neg": 22.4
        },
        {
          "m": "2025-05",
          "pos": 66.7,
          "neg": 18.5
        },
        {
          "m": "2025-06",
          "pos": 66.7,
          "neg": 12.1
        },
        {
          "m": "2025-07",
          "pos": 64.0,
          "neg": 16.0
        },
        {
          "m": "2025-08",
          "pos": 76.3,
          "neg": 10.5
        },
        {
          "m": "2025-09",
          "pos": 72.7,
          "neg": 11.4
        },
        {
          "m": "2025-10",
          "pos": 64.4,
          "neg": 15.6
        },
        {
          "m": "2025-11",
          "pos": 66.7,
          "neg": 18.5
        },
        {
          "m": "2025-12",
          "pos": 69.4,
          "neg": 13.9
        },
        {
          "m": "2026-01",
          "pos": 72.0,
          "neg": 8.0
        },
        {
          "m": "2026-02",
          "pos": 62.5,
          "neg": 12.5
        },
        {
          "m": "2026-03",
          "pos": 73.3,
          "neg": 10.0
        },
        {
          "m": "2026-04",
          "pos": 68.3,
          "neg": 12.2
        },
        {
          "m": "2026-05",
          "pos": 71.4,
          "neg": 19.0
        }
      ]
    },
    {
      "nome": "L5048-SJC ANDROMEDA (1261)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 90.1,
      "nps_ajust": 89.8,
      "delta": -0.3,
      "sent_medio": 0.64,
      "pct_pos": 74,
      "pct_neg": 10,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Loja Fisica",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Não sei se os lugares dos produtos já estão definidos. Talvez estejam organizando.\nNo entanto, achei que os produtos est\"",
        "\"Está tudo ok\"",
        "\"Funcionários muito prestativos e loja muito organizada!!!\"",
        "\"Atendimento maravilhoso da equipe da Unidade Andrômeda, super atenciosos e prestativos! Com os melhores produtos, preços\"",
        "\"Eu fiz a compra pelo aplicativo e paguei o frete pra receber os produtos até 5 horas. O prazo venceu e não recebi nada. \""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 84.0,
          "neg": 4.0
        },
        {
          "m": "2025-02",
          "pos": 78.6,
          "neg": 21.4
        },
        {
          "m": "2025-03",
          "pos": 71.4,
          "neg": 7.1
        },
        {
          "m": "2025-04",
          "pos": 82.4,
          "neg": 11.8
        },
        {
          "m": "2025-05",
          "pos": 76.9,
          "neg": 7.7
        },
        {
          "m": "2025-06",
          "pos": 74.1,
          "neg": 3.7
        },
        {
          "m": "2025-07",
          "pos": 76.2,
          "neg": 4.8
        },
        {
          "m": "2025-08",
          "pos": 85.2,
          "neg": 7.4
        },
        {
          "m": "2025-09",
          "pos": 82.4,
          "neg": 5.9
        },
        {
          "m": "2025-10",
          "pos": 70.0,
          "neg": 20.0
        },
        {
          "m": "2025-11",
          "pos": 72.2,
          "neg": 11.1
        },
        {
          "m": "2025-12",
          "pos": 81.2,
          "neg": 12.5
        },
        {
          "m": "2026-01",
          "pos": 62.5,
          "neg": 8.3
        },
        {
          "m": "2026-02",
          "pos": 68.8,
          "neg": 6.2
        },
        {
          "m": "2026-03",
          "pos": 54.5,
          "neg": 9.1
        },
        {
          "m": "2026-04",
          "pos": 75.0,
          "neg": 6.2
        },
        {
          "m": "2026-05",
          "pos": 46.7,
          "neg": 33.3
        }
      ]
    },
    {
      "nome": "L5049-RIB.PRETO INDEPENDENCIA (1266)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 84.4,
      "nps_ajust": 84.4,
      "delta": 0.0,
      "sent_medio": 0.53,
      "pct_pos": 69,
      "pct_neg": 17,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Atendimento"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Promocoes Fidelidade",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Muitas carnes estão com preços muitos elevados em relação a outras casas de carnes como por exemplo o Oba que hoje vende\"",
        "\"Fui para pegar kibinho recheado (que comprei) e a isca de frango apimentada para air fryer. Como não achei nos freezers,\"",
        "\"A loja deixou de ser uma casa de carnes, virou um mercadinho.\"",
        "\"Sou cliente de vocês, sempre estou comprando na loja, recebi uma multa de transito de outro estado no dia 15/12/2024 sen\"",
        "\"A limpeza das carnes pioraram muito, principalmente no filet mignon suíno e no miolo do alcatra, está muito a desejar, a\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 77.3,
          "neg": 13.6
        },
        {
          "m": "2025-02",
          "pos": 66.7,
          "neg": 33.3
        },
        {
          "m": "2025-03",
          "pos": 81.8,
          "neg": 9.1
        },
        {
          "m": "2025-04",
          "pos": 76.0,
          "neg": 8.0
        },
        {
          "m": "2025-05",
          "pos": 68.4,
          "neg": 5.3
        },
        {
          "m": "2025-06",
          "pos": 75.0,
          "neg": 20.0
        },
        {
          "m": "2025-07",
          "pos": 75.0,
          "neg": 6.2
        },
        {
          "m": "2025-08",
          "pos": 63.6,
          "neg": 0.0
        },
        {
          "m": "2025-09",
          "pos": 54.5,
          "neg": 27.3
        },
        {
          "m": "2025-10",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2025-11",
          "pos": 90.9,
          "neg": 0.0
        },
        {
          "m": "2025-12",
          "pos": 69.6,
          "neg": 13.0
        },
        {
          "m": "2026-01",
          "pos": 75.0,
          "neg": 10.0
        },
        {
          "m": "2026-02",
          "pos": 57.7,
          "neg": 30.8
        },
        {
          "m": "2026-03",
          "pos": 66.7,
          "neg": 22.2
        },
        {
          "m": "2026-04",
          "pos": 36.4,
          "neg": 40.9
        },
        {
          "m": "2026-05",
          "pos": 66.7,
          "neg": 26.7
        }
      ]
    },
    {
      "nome": "L5050-SOROCABA W.LUIZ (1273)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 89.2,
      "nps_ajust": 88.8,
      "delta": -0.4,
      "sent_medio": 0.63,
      "pct_pos": 75,
      "pct_neg": 12,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Atendimento",
        "Loja Fisica",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Não achei mais o wrap de frango e nem o de peito de peru\"",
        "\"Na última visita faltavam muitos produtos.\"",
        "\"Fui procurar o pernil desfiado que gostei muito, e a atendente me avisou que não estão fazendo mais, foi uma decepção.\"",
        "\"falta uma loja em Votorantim SP\"",
        "\"O site poderia ser um pouco mais ágil, fica carregando muito tempo.\nTambém a maior parte das vezes vem faltando a opção \""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 84.3,
          "neg": 11.8
        },
        {
          "m": "2025-02",
          "pos": 56.2,
          "neg": 15.6
        },
        {
          "m": "2025-03",
          "pos": 76.9,
          "neg": 17.9
        },
        {
          "m": "2025-04",
          "pos": 81.8,
          "neg": 6.1
        },
        {
          "m": "2025-05",
          "pos": 76.9,
          "neg": 7.7
        },
        {
          "m": "2025-06",
          "pos": 73.7,
          "neg": 10.5
        },
        {
          "m": "2025-07",
          "pos": 73.1,
          "neg": 15.4
        },
        {
          "m": "2025-08",
          "pos": 69.4,
          "neg": 11.1
        },
        {
          "m": "2025-09",
          "pos": 71.9,
          "neg": 18.8
        },
        {
          "m": "2025-10",
          "pos": 75.8,
          "neg": 6.1
        },
        {
          "m": "2025-11",
          "pos": 72.0,
          "neg": 12.0
        },
        {
          "m": "2025-12",
          "pos": 84.4,
          "neg": 4.4
        },
        {
          "m": "2026-01",
          "pos": 84.4,
          "neg": 9.4
        },
        {
          "m": "2026-02",
          "pos": 76.7,
          "neg": 14.0
        },
        {
          "m": "2026-03",
          "pos": 63.3,
          "neg": 18.4
        },
        {
          "m": "2026-04",
          "pos": 75.8,
          "neg": 12.1
        },
        {
          "m": "2026-05",
          "pos": 70.0,
          "neg": 20.0
        }
      ]
    },
    {
      "nome": "L5051-VILA PRUDENTE (1276)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 84.8,
      "nps_ajust": 84.4,
      "delta": -0.4,
      "sent_medio": 0.56,
      "pct_pos": 68,
      "pct_neg": 12,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Atendimento",
        "Loja Fisica",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Ficar disponível comprar no aplicativo com ticket refeição e alimentação \nAtualmente só é possível com pix ou cartão de \"",
        "\"Dispondo de mais atendentes: no momento da compra tinha unicamente um funcionário na loja, o caixa.\"",
        "\"Poderia ter mais oferta para quem é cadastrado ou dar cashback.\"",
        "\"Depois de muito tempo que faço compra online com vcs essa foi a pior. Se tivesse sido a primeira repensaria em comprar. \"",
        "\"Gostaria de saber porque vocês mudaram a forma do petit gateu e aumentaram consideravelmente o preço\n\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 81.2,
          "neg": 12.5
        },
        {
          "m": "2025-02",
          "pos": 60.0,
          "neg": 20.0
        },
        {
          "m": "2025-03",
          "pos": 84.2,
          "neg": 5.3
        },
        {
          "m": "2025-04",
          "pos": 71.4,
          "neg": 14.3
        },
        {
          "m": "2025-05",
          "pos": 86.7,
          "neg": 6.7
        },
        {
          "m": "2025-06",
          "pos": 85.0,
          "neg": 5.0
        },
        {
          "m": "2025-07",
          "pos": 71.4,
          "neg": 0.0
        },
        {
          "m": "2025-08",
          "pos": 75.9,
          "neg": 0.0
        },
        {
          "m": "2025-09",
          "pos": 54.2,
          "neg": 29.2
        },
        {
          "m": "2025-10",
          "pos": 68.2,
          "neg": 13.6
        },
        {
          "m": "2025-11",
          "pos": 61.1,
          "neg": 5.6
        },
        {
          "m": "2025-12",
          "pos": 52.9,
          "neg": 29.4
        },
        {
          "m": "2026-01",
          "pos": 50.0,
          "neg": 12.5
        },
        {
          "m": "2026-02",
          "pos": 63.2,
          "neg": 10.5
        },
        {
          "m": "2026-03",
          "pos": 70.0,
          "neg": 5.0
        },
        {
          "m": "2026-04",
          "pos": 56.5,
          "neg": 17.4
        },
        {
          "m": "2026-05",
          "pos": 60.0,
          "neg": 20.0
        }
      ]
    },
    {
      "nome": "L5052-PINHEIROS (1277)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 84.4,
      "nps_ajust": 84.1,
      "delta": -0.3,
      "sent_medio": 0.6,
      "pct_pos": 73,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Produto"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Continuar suas lojas\"",
        "\"Não quero avaliar os preços\"",
        "\"Para mim o unico detalhe é o tamanho fisico da loja que é um pouco apertada. Mas isto não é de forma alguma impeditivo p\"",
        "\"Loja bem organizada e abastecida,melhorou muito e com preços certos. Só aumentou os preços infelizmente.  Excelente aten\"",
        "\"Algs produtos não tem há 2 vezes q  usco; bobo de camarao\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 72.2,
          "neg": 16.7
        },
        {
          "m": "2025-02",
          "pos": 83.3,
          "neg": 0.0
        },
        {
          "m": "2025-03",
          "pos": 76.9,
          "neg": 15.4
        },
        {
          "m": "2025-04",
          "pos": 75.0,
          "neg": 0.0
        },
        {
          "m": "2025-05",
          "pos": 53.8,
          "neg": 23.1
        },
        {
          "m": "2025-06",
          "pos": 64.5,
          "neg": 16.1
        },
        {
          "m": "2025-07",
          "pos": 75.0,
          "neg": 5.0
        },
        {
          "m": "2025-08",
          "pos": 73.7,
          "neg": 10.5
        },
        {
          "m": "2025-09",
          "pos": 89.3,
          "neg": 7.1
        },
        {
          "m": "2025-10",
          "pos": 73.9,
          "neg": 21.7
        },
        {
          "m": "2025-11",
          "pos": 47.4,
          "neg": 31.6
        },
        {
          "m": "2025-12",
          "pos": 75.0,
          "neg": 8.3
        },
        {
          "m": "2026-01",
          "pos": 52.0,
          "neg": 28.0
        },
        {
          "m": "2026-02",
          "pos": 76.2,
          "neg": 14.3
        },
        {
          "m": "2026-03",
          "pos": 85.7,
          "neg": 14.3
        },
        {
          "m": "2026-04",
          "pos": 83.3,
          "neg": 8.3
        },
        {
          "m": "2026-05",
          "pos": 78.6,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5053-MORUMBI (1278)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 85.6,
      "nps_ajust": 85.2,
      "delta": -0.4,
      "sent_medio": 0.62,
      "pct_pos": 74,
      "pct_neg": 12,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Atendimento"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Eu não sabia de um cupom de 20,00 de desconto para a primeira compra online\"",
        "\"A fafora é maravilhosa gosto das duas mais por duas vezes só tinha a apimentada ????aí desta vez não comprei .\"",
        "\"Loja organizada atendentes prestativos e sempre com novidades\"",
        "\"Não deixando faltar produtos na loja aonde eu compro\"",
        "\"Nada a melhorar, fantástico o atendimento da loja.\n\nSó vou na loja Da João Saad\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 58.6,
          "neg": 31.0
        },
        {
          "m": "2025-02",
          "pos": 73.3,
          "neg": 6.7
        },
        {
          "m": "2025-03",
          "pos": 76.9,
          "neg": 7.7
        },
        {
          "m": "2025-04",
          "pos": 76.9,
          "neg": 0.0
        },
        {
          "m": "2025-05",
          "pos": 88.2,
          "neg": 0.0
        },
        {
          "m": "2025-06",
          "pos": 77.3,
          "neg": 4.5
        },
        {
          "m": "2025-07",
          "pos": 90.0,
          "neg": 6.7
        },
        {
          "m": "2025-08",
          "pos": 70.6,
          "neg": 11.8
        },
        {
          "m": "2025-09",
          "pos": 84.2,
          "neg": 5.3
        },
        {
          "m": "2025-10",
          "pos": 82.9,
          "neg": 2.9
        },
        {
          "m": "2025-11",
          "pos": 82.6,
          "neg": 8.7
        },
        {
          "m": "2025-12",
          "pos": 75.0,
          "neg": 8.3
        },
        {
          "m": "2026-01",
          "pos": 56.5,
          "neg": 30.4
        },
        {
          "m": "2026-02",
          "pos": 68.2,
          "neg": 18.2
        },
        {
          "m": "2026-03",
          "pos": 66.7,
          "neg": 22.2
        },
        {
          "m": "2026-04",
          "pos": 56.5,
          "neg": 17.4
        },
        {
          "m": "2026-05",
          "pos": 81.2,
          "neg": 12.5
        }
      ]
    },
    {
      "nome": "L5054-PLANALTO (1279)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 83.0,
      "nps_ajust": 82.8,
      "delta": -0.2,
      "sent_medio": 0.59,
      "pct_pos": 72,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"O gosto estava diferente\"",
        "\"podem melhorar os preços e criar mais promoções\"",
        "\"No dia em que eu fui a loja estava muito bem abastecida, o Pedro me ajudou a achar todos os produtos e foi super educado\"",
        "\"Mantendo a qualidade\"",
        "\"Na porta da loja sempre com muitos pedintes solicitando para fazer uma compra pra eles e somente dois funcionários para \""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 76.0,
          "neg": 14.0
        },
        {
          "m": "2025-02",
          "pos": 87.5,
          "neg": 6.2
        },
        {
          "m": "2025-03",
          "pos": 72.2,
          "neg": 8.3
        },
        {
          "m": "2025-04",
          "pos": 83.9,
          "neg": 6.5
        },
        {
          "m": "2025-05",
          "pos": 68.8,
          "neg": 15.6
        },
        {
          "m": "2025-06",
          "pos": 55.6,
          "neg": 19.4
        },
        {
          "m": "2025-07",
          "pos": 78.4,
          "neg": 10.8
        },
        {
          "m": "2025-08",
          "pos": 61.7,
          "neg": 19.1
        },
        {
          "m": "2025-09",
          "pos": 85.2,
          "neg": 4.9
        },
        {
          "m": "2025-10",
          "pos": 68.6,
          "neg": 17.6
        },
        {
          "m": "2025-11",
          "pos": 75.6,
          "neg": 12.2
        },
        {
          "m": "2025-12",
          "pos": 71.4,
          "neg": 14.3
        },
        {
          "m": "2026-01",
          "pos": 62.1,
          "neg": 12.1
        },
        {
          "m": "2026-02",
          "pos": 69.0,
          "neg": 19.0
        },
        {
          "m": "2026-03",
          "pos": 74.0,
          "neg": 10.0
        },
        {
          "m": "2026-04",
          "pos": 78.1,
          "neg": 9.4
        },
        {
          "m": "2026-05",
          "pos": 62.5,
          "neg": 20.8
        }
      ]
    },
    {
      "nome": "L5055-CAMBUCI (1284)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 83.2,
      "nps_ajust": 82.8,
      "delta": -0.4,
      "sent_medio": 0.51,
      "pct_pos": 68,
      "pct_neg": 17,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Temperatura dentro da loja insalubre, tenho que manter um agasalho próprio para estar em ambientes extremamente gelados \"",
        "\"Vcs oferecem o produto, ai reembolsam pq nao tem, aí tem aqui pwrto, no dia seguinte já nao tem mais.. difícil, né?\"",
        "\"SE MELHORAR ESTRAGA\"",
        "\"Eu comprei uma carne , no momento esqueci o nome , mas quando cozinhei não foi o mesmo sabor que quando compro no açougu\"",
        "\"Não cobrar taxa de entrega para pedidos próximo da loja que realiza a entrega.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 81.1,
          "neg": 10.8
        },
        {
          "m": "2025-02",
          "pos": 82.6,
          "neg": 4.3
        },
        {
          "m": "2025-03",
          "pos": 63.6,
          "neg": 22.7
        },
        {
          "m": "2025-04",
          "pos": 53.8,
          "neg": 25.6
        },
        {
          "m": "2025-05",
          "pos": 72.4,
          "neg": 20.7
        },
        {
          "m": "2025-06",
          "pos": 75.0,
          "neg": 7.5
        },
        {
          "m": "2025-07",
          "pos": 63.3,
          "neg": 3.3
        },
        {
          "m": "2025-08",
          "pos": 77.1,
          "neg": 8.3
        },
        {
          "m": "2025-09",
          "pos": 72.1,
          "neg": 14.0
        },
        {
          "m": "2025-10",
          "pos": 75.4,
          "neg": 12.3
        },
        {
          "m": "2025-11",
          "pos": 68.8,
          "neg": 12.5
        },
        {
          "m": "2025-12",
          "pos": 57.6,
          "neg": 30.3
        },
        {
          "m": "2026-01",
          "pos": 63.6,
          "neg": 20.5
        },
        {
          "m": "2026-02",
          "pos": 48.3,
          "neg": 24.1
        },
        {
          "m": "2026-03",
          "pos": 67.6,
          "neg": 23.5
        },
        {
          "m": "2026-04",
          "pos": 57.1,
          "neg": 33.3
        },
        {
          "m": "2026-05",
          "pos": 57.7,
          "neg": 26.9
        }
      ]
    },
    {
      "nome": "L5056-PENHA (1285)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 87.1,
      "nps_ajust": 86.4,
      "delta": -0.7,
      "sent_medio": 0.57,
      "pct_pos": 71,
      "pct_neg": 14,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Atendimento",
        "Promocoes Fidelidade",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Esse cadastro vocês só me enviam isso, não recebo uma promoção, um cashback nada\"",
        "\"mais promoçoes de combo, tipo o que ja teve compra duas picanha e ganha a bolsa termica ou combos em geral para churrasc\"",
        "\"Pra mim está ótimo queria poder comprar sempre más coortes na medida carnê saborosa muito bom\"",
        "\"Quero parabenizar pelo atendimento excelente do especialista Isac da Swift - Penha av amador bueno. Que foi muito simpat\"",
        "\"Vou na Swift porque gosto dos produtos, mas essa unidade é a segunda vez que vou e noto que os produtos apresentam sinai\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 79.2,
          "neg": 9.1
        },
        {
          "m": "2025-02",
          "pos": 70.0,
          "neg": 10.0
        },
        {
          "m": "2025-03",
          "pos": 70.3,
          "neg": 17.2
        },
        {
          "m": "2025-04",
          "pos": 77.6,
          "neg": 12.1
        },
        {
          "m": "2025-05",
          "pos": 66.7,
          "neg": 11.1
        },
        {
          "m": "2025-06",
          "pos": 75.8,
          "neg": 13.2
        },
        {
          "m": "2025-07",
          "pos": 76.7,
          "neg": 10.0
        },
        {
          "m": "2025-08",
          "pos": 81.9,
          "neg": 6.9
        },
        {
          "m": "2025-09",
          "pos": 76.9,
          "neg": 16.9
        },
        {
          "m": "2025-10",
          "pos": 79.3,
          "neg": 6.9
        },
        {
          "m": "2025-11",
          "pos": 63.8,
          "neg": 19.1
        },
        {
          "m": "2025-12",
          "pos": 66.7,
          "neg": 18.2
        },
        {
          "m": "2026-01",
          "pos": 62.2,
          "neg": 20.0
        },
        {
          "m": "2026-02",
          "pos": 60.4,
          "neg": 12.5
        },
        {
          "m": "2026-03",
          "pos": 72.5,
          "neg": 15.7
        },
        {
          "m": "2026-04",
          "pos": 50.9,
          "neg": 30.9
        },
        {
          "m": "2026-05",
          "pos": 53.8,
          "neg": 15.4
        }
      ]
    },
    {
      "nome": "L5057-BOQUEIRAO (1289)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 89.3,
      "nps_ajust": 88.8,
      "delta": -0.5,
      "sent_medio": 0.6,
      "pct_pos": 71,
      "pct_neg": 11,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Reduzindo sua rentablidade.!\"",
        "\"Na maioria das lojas não estava encontrando galinha, depois de percorrer 4 lojas que encontrei. \nTambém gostaria de deix\"",
        "\"Continuem com o bom trabalho que entre\nregam!\"",
        "\"Faltou talvez por causa do Natal e ano novo pois tinha a maior parte temperado gosto de temperar\"",
        "\"Eu notei que tem algumas lojas que não tem tudo que as outras tem...por isso vou apenas na loja da Conselheiro Nebias em\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 72.7,
          "neg": 12.1
        },
        {
          "m": "2025-02",
          "pos": 76.5,
          "neg": 11.8
        },
        {
          "m": "2025-03",
          "pos": 60.9,
          "neg": 17.4
        },
        {
          "m": "2025-04",
          "pos": 56.5,
          "neg": 21.7
        },
        {
          "m": "2025-05",
          "pos": 73.3,
          "neg": 10.0
        },
        {
          "m": "2025-06",
          "pos": 76.5,
          "neg": 2.9
        },
        {
          "m": "2025-07",
          "pos": 83.3,
          "neg": 0.0
        },
        {
          "m": "2025-08",
          "pos": 66.7,
          "neg": 12.1
        },
        {
          "m": "2025-09",
          "pos": 75.0,
          "neg": 7.1
        },
        {
          "m": "2025-10",
          "pos": 66.7,
          "neg": 13.3
        },
        {
          "m": "2025-11",
          "pos": 77.1,
          "neg": 8.6
        },
        {
          "m": "2025-12",
          "pos": 72.1,
          "neg": 7.0
        },
        {
          "m": "2026-01",
          "pos": 70.3,
          "neg": 12.5
        },
        {
          "m": "2026-02",
          "pos": 62.1,
          "neg": 17.2
        },
        {
          "m": "2026-03",
          "pos": 78.1,
          "neg": 12.5
        },
        {
          "m": "2026-04",
          "pos": 69.2,
          "neg": 15.4
        },
        {
          "m": "2026-05",
          "pos": 70.6,
          "neg": 11.8
        }
      ]
    },
    {
      "nome": "L5058-JD. BONFIGLIOLI (1291)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 83.4,
      "nps_ajust": 82.9,
      "delta": -0.5,
      "sent_medio": 0.56,
      "pct_pos": 69,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Senti falta de ofertas.\"",
        "\"Não Mecham em nada\"",
        "\"Colocar produtos em promoções\"",
        "\"Produtos sempre em lugares diferentes, sem sinalização dos preços e muitos congeladores vazios\"",
        "\"ABAIXAR OS PREÇOS  DE ALGUNS PRODUTOS,PQ ENCONTREI ALGO QUE COMPREI MAIS BARATO NO ASSAÍ.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 61.0,
          "neg": 19.5
        },
        {
          "m": "2025-02",
          "pos": 48.5,
          "neg": 30.3
        },
        {
          "m": "2025-03",
          "pos": 65.6,
          "neg": 15.6
        },
        {
          "m": "2025-04",
          "pos": 58.1,
          "neg": 23.3
        },
        {
          "m": "2025-05",
          "pos": 52.0,
          "neg": 16.0
        },
        {
          "m": "2025-06",
          "pos": 68.3,
          "neg": 12.7
        },
        {
          "m": "2025-07",
          "pos": 62.2,
          "neg": 13.3
        },
        {
          "m": "2025-08",
          "pos": 71.1,
          "neg": 10.5
        },
        {
          "m": "2025-09",
          "pos": 62.7,
          "neg": 8.5
        },
        {
          "m": "2025-10",
          "pos": 66.7,
          "neg": 14.3
        },
        {
          "m": "2025-11",
          "pos": 66.7,
          "neg": 18.2
        },
        {
          "m": "2025-12",
          "pos": 84.8,
          "neg": 5.1
        },
        {
          "m": "2026-01",
          "pos": 79.5,
          "neg": 7.7
        },
        {
          "m": "2026-02",
          "pos": 48.6,
          "neg": 21.6
        },
        {
          "m": "2026-03",
          "pos": 79.3,
          "neg": 12.2
        },
        {
          "m": "2026-04",
          "pos": 78.8,
          "neg": 7.5
        },
        {
          "m": "2026-05",
          "pos": 74.3,
          "neg": 11.4
        }
      ]
    },
    {
      "nome": "L5059-TUTOIA (1294)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 83.2,
      "nps_ajust": 82.6,
      "delta": -0.6,
      "sent_medio": 0.49,
      "pct_pos": 64,
      "pct_neg": 16,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Atendimento",
        "Abastecimento",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Atendimento, falta de explicação das promoções, \nNa hora do desconto.\nPoucas opções de linguiças \n\"",
        "\"Promoções e preços! Atendimento no Paraíso é atencioso e amoroso… Fabi, Carol…\"",
        "\"Tive que finalizar pelo site.\nNão consegui finalizar pelo app\"",
        "\"Melhorar o Espaço da loja, porém o atendimento é muito bom. Valeu Swift.\"",
        "\"Como é um ambiente onde a pessoa leva esposa e filhos deveriam colocar música de melhor qualidade.  Como pode colocarem \""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 42.1,
          "neg": 21.1
        },
        {
          "m": "2025-02",
          "pos": 53.3,
          "neg": 20.0
        },
        {
          "m": "2025-03",
          "pos": 63.6,
          "neg": 9.1
        },
        {
          "m": "2025-04",
          "pos": 71.4,
          "neg": 17.9
        },
        {
          "m": "2025-05",
          "pos": 50.0,
          "neg": 22.7
        },
        {
          "m": "2025-06",
          "pos": 66.7,
          "neg": 5.1
        },
        {
          "m": "2025-07",
          "pos": 71.9,
          "neg": 12.5
        },
        {
          "m": "2025-08",
          "pos": 57.1,
          "neg": 14.3
        },
        {
          "m": "2025-09",
          "pos": 65.5,
          "neg": 13.8
        },
        {
          "m": "2025-10",
          "pos": 68.1,
          "neg": 17.0
        },
        {
          "m": "2025-11",
          "pos": 60.4,
          "neg": 20.8
        },
        {
          "m": "2025-12",
          "pos": 74.6,
          "neg": 11.9
        },
        {
          "m": "2026-01",
          "pos": 60.0,
          "neg": 20.0
        },
        {
          "m": "2026-02",
          "pos": 60.0,
          "neg": 16.0
        },
        {
          "m": "2026-03",
          "pos": 68.0,
          "neg": 8.0
        },
        {
          "m": "2026-04",
          "pos": 72.7,
          "neg": 18.2
        },
        {
          "m": "2026-05",
          "pos": 69.0,
          "neg": 20.7
        }
      ]
    },
    {
      "nome": "L5061-BOSQUE MAIA (1304)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 84.2,
      "nps_ajust": 84.3,
      "delta": 0.1,
      "sent_medio": 0.56,
      "pct_pos": 68,
      "pct_neg": 12,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Reconfigurem o fechamento da porta automática\nMelhorem a localização dos preços ,pois há dificuldades de entender por ca\"",
        "\"Ao meu ponto de vista a loja que eu fui está perfeita, não precisa de melhoras. Parabéns aos colaboradores da loja que s\"",
        "\"Não encontro mais o pao de alho apimentado\"",
        "\"Deixando sempre abastecido.\"",
        "\"Mande mais produtos para a loja Swift que fica no mercado X do Bom Clima em Guarulhos. Vários produtos que amo, só encon\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 72.2,
          "neg": 11.1
        },
        {
          "m": "2025-02",
          "pos": 58.3,
          "neg": 0.0
        },
        {
          "m": "2025-03",
          "pos": 70.8,
          "neg": 20.8
        },
        {
          "m": "2025-04",
          "pos": 71.4,
          "neg": 14.3
        },
        {
          "m": "2025-05",
          "pos": 61.9,
          "neg": 23.8
        },
        {
          "m": "2025-06",
          "pos": 76.0,
          "neg": 8.0
        },
        {
          "m": "2025-07",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2025-08",
          "pos": 76.3,
          "neg": 15.8
        },
        {
          "m": "2025-09",
          "pos": 42.4,
          "neg": 21.2
        },
        {
          "m": "2025-10",
          "pos": 65.2,
          "neg": 4.3
        },
        {
          "m": "2025-11",
          "pos": 76.7,
          "neg": 6.7
        },
        {
          "m": "2025-12",
          "pos": 75.0,
          "neg": 5.0
        },
        {
          "m": "2026-01",
          "pos": 59.4,
          "neg": 15.6
        },
        {
          "m": "2026-02",
          "pos": 53.8,
          "neg": 15.4
        },
        {
          "m": "2026-03",
          "pos": 78.6,
          "neg": 7.1
        },
        {
          "m": "2026-04",
          "pos": 69.2,
          "neg": 15.4
        },
        {
          "m": "2026-05",
          "pos": 66.7,
          "neg": 6.7
        }
      ]
    },
    {
      "nome": "L5062-ASSUNCAO (1310)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 84.8,
      "nps_ajust": 84.8,
      "delta": -0.1,
      "sent_medio": 0.53,
      "pct_pos": 67,
      "pct_neg": 14,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Atendente do caixa que me atendeu muito mau humorada jogava minhas compras na loja da João Firmino pretendo não comprar \"",
        "\"Tudo perfeito!!! Atendente excelente!\"",
        "\"Loja vazia e a atendente com uma ma vontade de atender...\"",
        "\"Acredito ser preço mais atrativo. Qualidade ok embalagem dos produtos ok dois ou três clientes foram embora pelo motivo \"",
        "\"Abaixando os preços\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 58.5,
          "neg": 18.9
        },
        {
          "m": "2025-02",
          "pos": 76.0,
          "neg": 8.0
        },
        {
          "m": "2025-03",
          "pos": 55.6,
          "neg": 18.5
        },
        {
          "m": "2025-04",
          "pos": 66.7,
          "neg": 10.0
        },
        {
          "m": "2025-05",
          "pos": 50.0,
          "neg": 16.7
        },
        {
          "m": "2025-06",
          "pos": 85.2,
          "neg": 3.7
        },
        {
          "m": "2025-07",
          "pos": 69.4,
          "neg": 19.4
        },
        {
          "m": "2025-08",
          "pos": 77.4,
          "neg": 16.1
        },
        {
          "m": "2025-09",
          "pos": 57.6,
          "neg": 21.2
        },
        {
          "m": "2025-10",
          "pos": 71.8,
          "neg": 12.8
        },
        {
          "m": "2025-11",
          "pos": 65.2,
          "neg": 17.4
        },
        {
          "m": "2025-12",
          "pos": 78.9,
          "neg": 10.5
        },
        {
          "m": "2026-01",
          "pos": 65.6,
          "neg": 12.5
        },
        {
          "m": "2026-02",
          "pos": 60.0,
          "neg": 13.3
        },
        {
          "m": "2026-03",
          "pos": 72.5,
          "neg": 7.5
        },
        {
          "m": "2026-04",
          "pos": 51.4,
          "neg": 17.1
        },
        {
          "m": "2026-05",
          "pos": 59.1,
          "neg": 13.6
        }
      ]
    },
    {
      "nome": "L5063-SAO CAMILO (1311)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 82.4,
      "nps_ajust": 82.3,
      "delta": -0.1,
      "sent_medio": 0.63,
      "pct_pos": 77,
      "pct_neg": 14,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"cada vez menos produtos\"",
        "\"Equipe maravilhosa, são super educados, atenciosos e dedicados para atender o cliente.\nParabéns super cliente há anos\"",
        "\"Pessoal de atendimento da loja da Av.Sao Camilo, granja Viana são ótimos! ????????????????\"",
        "\"Luana muito obrigado pelo atendimento\"",
        "\"Só entrega o cupom fiscal se o cliente solicitar.\nAcho não apropriado, deveria ser automático como nos supermercados.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 45.0,
          "neg": 40.0
        },
        {
          "m": "2025-02",
          "pos": 87.1,
          "neg": 6.5
        },
        {
          "m": "2025-03",
          "pos": 72.5,
          "neg": 20.0
        },
        {
          "m": "2025-04",
          "pos": 90.5,
          "neg": 7.1
        },
        {
          "m": "2025-05",
          "pos": 75.0,
          "neg": 10.0
        },
        {
          "m": "2025-06",
          "pos": 88.5,
          "neg": 11.5
        },
        {
          "m": "2025-07",
          "pos": 76.9,
          "neg": 15.4
        },
        {
          "m": "2025-08",
          "pos": 83.3,
          "neg": 5.6
        },
        {
          "m": "2025-09",
          "pos": 77.3,
          "neg": 4.5
        },
        {
          "m": "2025-10",
          "pos": 92.9,
          "neg": 7.1
        },
        {
          "m": "2025-11",
          "pos": 68.8,
          "neg": 25.0
        },
        {
          "m": "2025-12",
          "pos": 66.7,
          "neg": 27.8
        },
        {
          "m": "2026-01",
          "pos": 75.0,
          "neg": 8.3
        },
        {
          "m": "2026-02",
          "pos": 81.2,
          "neg": 6.2
        },
        {
          "m": "2026-03",
          "pos": 78.6,
          "neg": 21.4
        },
        {
          "m": "2026-04",
          "pos": 53.3,
          "neg": 20.0
        },
        {
          "m": "2026-05",
          "pos": 75.0,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5064-CHACARA INGLESA (1312)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 86.5,
      "nps_ajust": 86.5,
      "delta": 0.0,
      "sent_medio": 0.61,
      "pct_pos": 73,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Atendimento",
        "Promocoes Fidelidade",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"O estacionamento da unidade que fui é muito ruim. Uma das vagas que não é para idosos ou PCD tem um poste na frente, o q\"",
        "\"não chamar os clientes de \"meu amor\", mais profissional chamar por Sr ou Sra\"",
        "\"A distribuição da loja, minha opinião, era melhor antes, agora ficou feia pois aparecem os equipamentos que ficaram tipo\"",
        "\"Sem consideração a fazer.\"",
        "\"Melhorar nos preços\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 67.6,
          "neg": 20.6
        },
        {
          "m": "2025-02",
          "pos": 90.9,
          "neg": 4.5
        },
        {
          "m": "2025-03",
          "pos": 80.0,
          "neg": 10.0
        },
        {
          "m": "2025-04",
          "pos": 72.4,
          "neg": 17.2
        },
        {
          "m": "2025-05",
          "pos": 71.4,
          "neg": 23.8
        },
        {
          "m": "2025-06",
          "pos": 80.0,
          "neg": 4.0
        },
        {
          "m": "2025-07",
          "pos": 92.3,
          "neg": 0.0
        },
        {
          "m": "2025-08",
          "pos": 72.7,
          "neg": 13.6
        },
        {
          "m": "2025-09",
          "pos": 57.1,
          "neg": 17.9
        },
        {
          "m": "2025-10",
          "pos": 68.6,
          "neg": 20.0
        },
        {
          "m": "2025-11",
          "pos": 84.2,
          "neg": 0.0
        },
        {
          "m": "2025-12",
          "pos": 60.9,
          "neg": 13.0
        },
        {
          "m": "2026-01",
          "pos": 73.7,
          "neg": 10.5
        },
        {
          "m": "2026-02",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2026-03",
          "pos": 68.4,
          "neg": 21.1
        },
        {
          "m": "2026-04",
          "pos": 55.6,
          "neg": 5.6
        },
        {
          "m": "2026-05",
          "pos": 71.4,
          "neg": 14.3
        }
      ]
    },
    {
      "nome": "L5065-LINS DE VASCONCELOS (1313)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 85.0,
      "nps_ajust": 84.7,
      "delta": -0.3,
      "sent_medio": 0.63,
      "pct_pos": 75,
      "pct_neg": 11,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Atendimento",
        "Promocoes Fidelidade",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Bom dia.cimorei a Broa  de Milho com erva doce.\nVeio tida esfarelado.\nCeliba\"",
        "\"Excelente atendimento, ótimos preços\"",
        "\"A carne está vindo mto dura\"",
        "\"Atualização de disponbilidade de produtos durante escolha e não no ato da finalização da compra. Ter frete grátis acima \"",
        "\"Voces vendem como se tivesse em estoque , mas não entregam.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 83.0,
          "neg": 10.6
        },
        {
          "m": "2025-02",
          "pos": 80.6,
          "neg": 8.3
        },
        {
          "m": "2025-03",
          "pos": 76.1,
          "neg": 8.5
        },
        {
          "m": "2025-04",
          "pos": 67.6,
          "neg": 8.1
        },
        {
          "m": "2025-05",
          "pos": 78.8,
          "neg": 7.7
        },
        {
          "m": "2025-06",
          "pos": 79.5,
          "neg": 11.4
        },
        {
          "m": "2025-07",
          "pos": 61.3,
          "neg": 12.9
        },
        {
          "m": "2025-08",
          "pos": 79.3,
          "neg": 6.9
        },
        {
          "m": "2025-09",
          "pos": 73.0,
          "neg": 10.8
        },
        {
          "m": "2025-10",
          "pos": 74.0,
          "neg": 10.0
        },
        {
          "m": "2025-11",
          "pos": 82.4,
          "neg": 8.8
        },
        {
          "m": "2025-12",
          "pos": 74.3,
          "neg": 17.1
        },
        {
          "m": "2026-01",
          "pos": 68.3,
          "neg": 14.6
        },
        {
          "m": "2026-02",
          "pos": 65.5,
          "neg": 13.8
        },
        {
          "m": "2026-03",
          "pos": 61.9,
          "neg": 28.6
        },
        {
          "m": "2026-04",
          "pos": 62.5,
          "neg": 4.2
        },
        {
          "m": "2026-05",
          "pos": 68.4,
          "neg": 21.1
        }
      ]
    },
    {
      "nome": "L5066-CARAPICUIBA (1317)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 87.3,
      "nps_ajust": 86.8,
      "delta": -0.5,
      "sent_medio": 0.56,
      "pct_pos": 72,
      "pct_neg": 16,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Padronizar a embalagem de entrega para as sacolas plásticas Hermética. A caixa de papel cabem poucos produtos.\"",
        "\"Reitero minha satisfação  com o atendimento da loja da vila Dirce  Carapicuíba. As colaboradoras são  muito atenciosas e\"",
        "\"Atendimento, acho muito importante perceberem quando o cliente se encontra perdido e oferecerem ajuda!\"",
        "\"boa tarde so compro carne na swift\nque a qualidade dos produto e 10\n0 atendimento e mil\"",
        "\"Quando finalizar o pedido, já informar os ítens que não tem.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 85.2,
          "neg": 11.1
        },
        {
          "m": "2025-02",
          "pos": 41.7,
          "neg": 50.0
        },
        {
          "m": "2025-03",
          "pos": 64.3,
          "neg": 14.3
        },
        {
          "m": "2025-04",
          "pos": 70.0,
          "neg": 15.0
        },
        {
          "m": "2025-05",
          "pos": 60.0,
          "neg": 33.3
        },
        {
          "m": "2025-06",
          "pos": 68.4,
          "neg": 21.1
        },
        {
          "m": "2025-07",
          "pos": 81.8,
          "neg": 0.0
        },
        {
          "m": "2025-08",
          "pos": 81.2,
          "neg": 12.5
        },
        {
          "m": "2025-09",
          "pos": 71.4,
          "neg": 14.3
        },
        {
          "m": "2025-10",
          "pos": 64.7,
          "neg": 11.8
        },
        {
          "m": "2025-11",
          "pos": 81.2,
          "neg": 18.8
        },
        {
          "m": "2025-12",
          "pos": 70.0,
          "neg": 10.0
        },
        {
          "m": "2026-01",
          "pos": 66.7,
          "neg": 13.3
        },
        {
          "m": "2026-02",
          "pos": 73.3,
          "neg": 13.3
        },
        {
          "m": "2026-03",
          "pos": 63.6,
          "neg": 27.3
        },
        {
          "m": "2026-04",
          "pos": 87.5,
          "neg": 12.5
        },
        {
          "m": "2026-05",
          "pos": 87.5,
          "neg": 12.5
        }
      ]
    },
    {
      "nome": "L5067-CHACARA ST. ANTONIO (1318)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 82.2,
      "nps_ajust": 81.8,
      "delta": -0.4,
      "sent_medio": 0.48,
      "pct_pos": 65,
      "pct_neg": 16,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Infelizmente não tem como o ruim as vezes e apenas o entregador\"",
        "\"melhorar sistema delivery\"",
        "\"Alguns produtos não fica claro se vem temperado ou nao. Eu particularmente não gosto de produto temperado e as vezes lev\"",
        "\"Fui a loja para comprar o empanado de cheddar com bacon, mas há algum tempo que não tenho encontrado\"",
        "\"O último entregador foi extremamente mal educado e abriu a caixa do meu pedido\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 63.6,
          "neg": 27.3
        },
        {
          "m": "2025-02",
          "pos": 54.2,
          "neg": 29.2
        },
        {
          "m": "2025-03",
          "pos": 47.8,
          "neg": 21.7
        },
        {
          "m": "2025-04",
          "pos": 80.8,
          "neg": 11.5
        },
        {
          "m": "2025-05",
          "pos": 61.9,
          "neg": 23.8
        },
        {
          "m": "2025-06",
          "pos": 68.6,
          "neg": 14.3
        },
        {
          "m": "2025-07",
          "pos": 61.9,
          "neg": 14.3
        },
        {
          "m": "2025-08",
          "pos": 66.7,
          "neg": 8.3
        },
        {
          "m": "2025-09",
          "pos": 68.2,
          "neg": 18.2
        },
        {
          "m": "2025-10",
          "pos": 61.3,
          "neg": 6.5
        },
        {
          "m": "2025-11",
          "pos": 54.2,
          "neg": 25.0
        },
        {
          "m": "2025-12",
          "pos": 81.2,
          "neg": 12.5
        },
        {
          "m": "2026-01",
          "pos": 58.3,
          "neg": 8.3
        },
        {
          "m": "2026-02",
          "pos": 70.0,
          "neg": 10.0
        },
        {
          "m": "2026-03",
          "pos": 62.5,
          "neg": 6.2
        },
        {
          "m": "2026-04",
          "pos": 83.3,
          "neg": 16.7
        },
        {
          "m": "2026-05",
          "pos": 50.0,
          "neg": 28.6
        }
      ]
    },
    {
      "nome": "L5068-BOSQUE DA SAUDE (1321)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 86.1,
      "nps_ajust": 86.0,
      "delta": -0.1,
      "sent_medio": 0.65,
      "pct_pos": 74,
      "pct_neg": 9,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Atendimento",
        "Loja Fisica",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Foi comprado e retirado na Loja da Bosque da Saúde SP.  O Atendimento e os Atendente, são nota 1.0000000000000000.  Muit\"",
        "\"A loja parece uma mercearia de bairro e não uma boutique de carnes, especializada em churrasco. \nProdutos relacionados a\"",
        "\"Fazendo com que promoções que vcs ofereçam sejam claras e específicas e não com pegadinha!\"",
        "\"Não tinha Pão de Queijo Coquetel, Chicken Supreme com 2 molhos e Meio da Asa com molho barbecue\"",
        "\"Boa noite, A pessoa que me atendeu está sempre com sorriso no rosto e atende muito bem. Não é a primeira vez que me aten\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 68.6,
          "neg": 15.7
        },
        {
          "m": "2025-02",
          "pos": 75.8,
          "neg": 15.2
        },
        {
          "m": "2025-03",
          "pos": 78.1,
          "neg": 9.6
        },
        {
          "m": "2025-04",
          "pos": 80.0,
          "neg": 8.6
        },
        {
          "m": "2025-05",
          "pos": 80.0,
          "neg": 5.0
        },
        {
          "m": "2025-06",
          "pos": 81.4,
          "neg": 7.0
        },
        {
          "m": "2025-07",
          "pos": 81.5,
          "neg": 3.7
        },
        {
          "m": "2025-08",
          "pos": 75.8,
          "neg": 6.1
        },
        {
          "m": "2025-09",
          "pos": 69.2,
          "neg": 15.4
        },
        {
          "m": "2025-10",
          "pos": 66.7,
          "neg": 7.1
        },
        {
          "m": "2025-11",
          "pos": 75.6,
          "neg": 2.2
        },
        {
          "m": "2025-12",
          "pos": 76.5,
          "neg": 5.9
        },
        {
          "m": "2026-01",
          "pos": 70.8,
          "neg": 8.3
        },
        {
          "m": "2026-02",
          "pos": 65.2,
          "neg": 4.3
        },
        {
          "m": "2026-03",
          "pos": 71.4,
          "neg": 10.2
        },
        {
          "m": "2026-04",
          "pos": 85.0,
          "neg": 10.0
        },
        {
          "m": "2026-05",
          "pos": 64.5,
          "neg": 9.7
        }
      ]
    },
    {
      "nome": "L5069-AGUA RASA (1322)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 88.7,
      "nps_ajust": 88.2,
      "delta": -0.5,
      "sent_medio": 0.68,
      "pct_pos": 78,
      "pct_neg": 10,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Atendimento",
        "Loja Fisica",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Os pedaços de peito de frango estão cada vez menores, e não só o peito de frango. Parei de comprar o medalhão do filé mi\"",
        "\"não tenho nada a indicar de melhora, somente elogiar principalmente a Maria que foi super prestativa e trouxe um banquin\"",
        "\"Não há necessidade de melhoras\"",
        "\"Bom atendimento do atendente taylor\"",
        "\"Parabéns  equipe água rasa obrigado pelo atendimento que recebo de todos na loja sempre me indicando novos produtos com \""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 86.2,
          "neg": 10.8
        },
        {
          "m": "2025-02",
          "pos": 85.3,
          "neg": 2.9
        },
        {
          "m": "2025-03",
          "pos": 67.8,
          "neg": 11.9
        },
        {
          "m": "2025-04",
          "pos": 78.4,
          "neg": 9.8
        },
        {
          "m": "2025-05",
          "pos": 83.0,
          "neg": 14.9
        },
        {
          "m": "2025-06",
          "pos": 89.2,
          "neg": 8.1
        },
        {
          "m": "2025-07",
          "pos": 75.0,
          "neg": 5.0
        },
        {
          "m": "2025-08",
          "pos": 87.2,
          "neg": 4.3
        },
        {
          "m": "2025-09",
          "pos": 78.6,
          "neg": 11.9
        },
        {
          "m": "2025-10",
          "pos": 82.9,
          "neg": 8.6
        },
        {
          "m": "2025-11",
          "pos": 65.1,
          "neg": 11.6
        },
        {
          "m": "2025-12",
          "pos": 82.6,
          "neg": 10.1
        },
        {
          "m": "2026-01",
          "pos": 81.7,
          "neg": 8.3
        },
        {
          "m": "2026-02",
          "pos": 64.3,
          "neg": 7.1
        },
        {
          "m": "2026-03",
          "pos": 61.5,
          "neg": 23.1
        },
        {
          "m": "2026-04",
          "pos": 79.1,
          "neg": 4.7
        },
        {
          "m": "2026-05",
          "pos": 72.0,
          "neg": 20.0
        }
      ]
    },
    {
      "nome": "L5070-BORGES LAGOA (1323)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 80.9,
      "nps_ajust": 80.4,
      "delta": -0.6,
      "sent_medio": 0.45,
      "pct_pos": 63,
      "pct_neg": 19,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Sem ressalvas\nGostaria de adicionar um agradecimento ao funcionário de cabelo comprido, na unidade Borges Lagoa, foi mui\"",
        "\"Gosto muito da Swift, acho que poderia melhorar um pouco os preços/promoções…\nA linha combo não gosto muito, acho a qual\"",
        "\"pessoal muito prestativo, só os preço são bem salgados.\"",
        "\"Nesta semana as compras vieram ok, porém no pedidos da semana passada, as frutas congeladas vieram como um bloco único. \"",
        "\"Segunda vez que avalio e o problema piorou. Nada dos itens acima  tem importância quando você perde a confiança na ética\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 59.2,
          "neg": 28.6
        },
        {
          "m": "2025-02",
          "pos": 75.0,
          "neg": 12.5
        },
        {
          "m": "2025-03",
          "pos": 90.6,
          "neg": 3.1
        },
        {
          "m": "2025-04",
          "pos": 59.5,
          "neg": 18.9
        },
        {
          "m": "2025-05",
          "pos": 75.0,
          "neg": 8.3
        },
        {
          "m": "2025-06",
          "pos": 76.3,
          "neg": 15.8
        },
        {
          "m": "2025-07",
          "pos": 54.2,
          "neg": 20.8
        },
        {
          "m": "2025-08",
          "pos": 57.6,
          "neg": 6.1
        },
        {
          "m": "2025-09",
          "pos": 48.8,
          "neg": 26.8
        },
        {
          "m": "2025-10",
          "pos": 66.0,
          "neg": 10.0
        },
        {
          "m": "2025-11",
          "pos": 53.8,
          "neg": 19.2
        },
        {
          "m": "2025-12",
          "pos": 58.3,
          "neg": 33.3
        },
        {
          "m": "2026-01",
          "pos": 70.3,
          "neg": 18.9
        },
        {
          "m": "2026-02",
          "pos": 50.0,
          "neg": 31.8
        },
        {
          "m": "2026-03",
          "pos": 62.5,
          "neg": 25.0
        },
        {
          "m": "2026-04",
          "pos": 60.6,
          "neg": 24.2
        },
        {
          "m": "2026-05",
          "pos": 55.6,
          "neg": 11.1
        }
      ]
    },
    {
      "nome": "L5071-BELA VISTA (1326)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 84.6,
      "nps_ajust": 84.4,
      "delta": -0.2,
      "sent_medio": 0.61,
      "pct_pos": 72,
      "pct_neg": 11,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Várias vezes não havia frutas vermelhas na embalagem de 1k\"",
        "\"Só tive dor de cabeça na compra pelo site.\n\nA primeira deu certo com exceção que não consegui fazer a entrega aqui em ca\"",
        "\"Nota 8, porque em outras unidades tem churrasco para experimentar e eventos, nessa eu ainda não vi.\"",
        "\"Mais promoção dos produtos,\"",
        "\"O atendimento é excelente porém faltou alguns produtos assim como da última vez que estive na loja.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 60.0,
          "neg": 20.0
        },
        {
          "m": "2025-02",
          "pos": 63.2,
          "neg": 15.8
        },
        {
          "m": "2025-03",
          "pos": 56.5,
          "neg": 17.4
        },
        {
          "m": "2025-04",
          "pos": 69.2,
          "neg": 23.1
        },
        {
          "m": "2025-05",
          "pos": 81.1,
          "neg": 5.7
        },
        {
          "m": "2025-06",
          "pos": 88.1,
          "neg": 7.1
        },
        {
          "m": "2025-07",
          "pos": 72.7,
          "neg": 9.1
        },
        {
          "m": "2025-08",
          "pos": 71.9,
          "neg": 6.2
        },
        {
          "m": "2025-09",
          "pos": 75.7,
          "neg": 5.4
        },
        {
          "m": "2025-10",
          "pos": 61.0,
          "neg": 9.8
        },
        {
          "m": "2025-11",
          "pos": 63.3,
          "neg": 23.3
        },
        {
          "m": "2025-12",
          "pos": 88.2,
          "neg": 5.9
        },
        {
          "m": "2026-01",
          "pos": 68.8,
          "neg": 3.1
        },
        {
          "m": "2026-02",
          "pos": 74.2,
          "neg": 6.5
        },
        {
          "m": "2026-03",
          "pos": 73.5,
          "neg": 6.1
        },
        {
          "m": "2026-04",
          "pos": 66.7,
          "neg": 16.7
        },
        {
          "m": "2026-05",
          "pos": 52.4,
          "neg": 23.8
        }
      ]
    },
    {
      "nome": "L5072-SERRA DE JAPI (1330)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 86.0,
      "nps_ajust": 85.7,
      "delta": -0.3,
      "sent_medio": 0.56,
      "pct_pos": 71,
      "pct_neg": 15,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Só necessário relatar que pela primeira vez um item não nos agrada. Bife de Ancho em bifes! Carne muito borrachuda e de \"",
        "\"CUPONS DE DESCONTO\"",
        "\"Ainda acho os preços um tanto salgados, vocês poderiam fazer uma promoção semanal com preços de alguns produtos mais bar\"",
        "\"Meu pedido teve problemas não tem como quem falar. Tive que ir pessoalmente na loja\"",
        "\"A qualidade dos produtos caíram muito , o preço subiu demais , e ja faz alguns dias que a loja que compro esta quase sem\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 72.0,
          "neg": 24.0
        },
        {
          "m": "2025-02",
          "pos": 69.7,
          "neg": 9.1
        },
        {
          "m": "2025-03",
          "pos": 78.3,
          "neg": 4.3
        },
        {
          "m": "2025-04",
          "pos": 78.3,
          "neg": 8.7
        },
        {
          "m": "2025-05",
          "pos": 50.0,
          "neg": 13.3
        },
        {
          "m": "2025-06",
          "pos": 91.7,
          "neg": 5.6
        },
        {
          "m": "2025-07",
          "pos": 85.7,
          "neg": 4.8
        },
        {
          "m": "2025-08",
          "pos": 93.5,
          "neg": 0.0
        },
        {
          "m": "2025-09",
          "pos": 61.9,
          "neg": 19.0
        },
        {
          "m": "2025-10",
          "pos": 72.2,
          "neg": 16.7
        },
        {
          "m": "2025-11",
          "pos": 72.7,
          "neg": 15.2
        },
        {
          "m": "2025-12",
          "pos": 66.7,
          "neg": 20.8
        },
        {
          "m": "2026-01",
          "pos": 70.0,
          "neg": 13.3
        },
        {
          "m": "2026-02",
          "pos": 67.6,
          "neg": 23.5
        },
        {
          "m": "2026-03",
          "pos": 60.0,
          "neg": 28.6
        },
        {
          "m": "2026-04",
          "pos": 40.5,
          "neg": 27.0
        },
        {
          "m": "2026-05",
          "pos": 80.0,
          "neg": 10.0
        }
      ]
    },
    {
      "nome": "L5073-VILA GUILHERME (1331)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 86.9,
      "nps_ajust": 86.7,
      "delta": -0.2,
      "sent_medio": 0.59,
      "pct_pos": 71,
      "pct_neg": 12,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Está tudo bem!\"",
        "\"Muito ruim a qualidade da bananinha, praticamente descartado 40% do pacote\"",
        "\"O preço pode melhorar !!!\"",
        "\"Melhorar os preços\"",
        "\"Prefiro não mais responder ao questionário porque na minha última compra, fiz uma reclamação que achava importante e nin\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 73.9,
          "neg": 8.7
        },
        {
          "m": "2025-02",
          "pos": 75.0,
          "neg": 15.0
        },
        {
          "m": "2025-03",
          "pos": 57.1,
          "neg": 9.5
        },
        {
          "m": "2025-04",
          "pos": 55.2,
          "neg": 27.6
        },
        {
          "m": "2025-05",
          "pos": 68.8,
          "neg": 9.4
        },
        {
          "m": "2025-06",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2025-07",
          "pos": 57.1,
          "neg": 7.1
        },
        {
          "m": "2025-08",
          "pos": 85.0,
          "neg": 10.0
        },
        {
          "m": "2025-09",
          "pos": 70.0,
          "neg": 5.0
        },
        {
          "m": "2025-10",
          "pos": 72.2,
          "neg": 16.7
        },
        {
          "m": "2025-11",
          "pos": 76.2,
          "neg": 4.8
        },
        {
          "m": "2025-12",
          "pos": 69.0,
          "neg": 10.3
        },
        {
          "m": "2026-01",
          "pos": 73.3,
          "neg": 10.0
        },
        {
          "m": "2026-02",
          "pos": 78.9,
          "neg": 5.3
        },
        {
          "m": "2026-03",
          "pos": 74.1,
          "neg": 18.5
        },
        {
          "m": "2026-04",
          "pos": 75.0,
          "neg": 10.7
        },
        {
          "m": "2026-05",
          "pos": 66.7,
          "neg": 25.0
        }
      ]
    },
    {
      "nome": "L5074-VOLUNTARIOS DA PATRIA (1335)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 81.7,
      "nps_ajust": 81.1,
      "delta": -0.6,
      "sent_medio": 0.45,
      "pct_pos": 64,
      "pct_neg": 19,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Atendimento",
        "Loja Fisica",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Mantendo a qualidade e preço acessível.\"",
        "\"Pedido feito e não entregue, tive que solicitar cancelamento, o qual ainda não foi realizado. Péssima experiência.\"",
        "\"cumprindo o prazo que vcs mesmo estipulam para a entrega ou não fazer entregas\"",
        "\"Tudo perfeito mais mais brindes e promoções  PRINCIPALMENTE MES DAS MÃES\"",
        "\"O prazo era de 5 horas para entrega!\nChegou em 9 horas.\nCumprir o horário combinado.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 93.3,
          "neg": 6.7
        },
        {
          "m": "2025-02",
          "pos": 68.8,
          "neg": 18.8
        },
        {
          "m": "2025-03",
          "pos": 69.2,
          "neg": 30.8
        },
        {
          "m": "2025-04",
          "pos": 58.8,
          "neg": 17.6
        },
        {
          "m": "2025-05",
          "pos": 76.9,
          "neg": 0.0
        },
        {
          "m": "2025-06",
          "pos": 36.8,
          "neg": 15.8
        },
        {
          "m": "2025-07",
          "pos": 58.3,
          "neg": 13.9
        },
        {
          "m": "2025-08",
          "pos": 66.7,
          "neg": 18.2
        },
        {
          "m": "2025-09",
          "pos": 61.3,
          "neg": 12.9
        },
        {
          "m": "2025-10",
          "pos": 75.0,
          "neg": 12.5
        },
        {
          "m": "2025-11",
          "pos": 63.0,
          "neg": 14.8
        },
        {
          "m": "2025-12",
          "pos": 66.7,
          "neg": 30.6
        },
        {
          "m": "2026-01",
          "pos": 54.8,
          "neg": 25.8
        },
        {
          "m": "2026-02",
          "pos": 63.2,
          "neg": 26.3
        },
        {
          "m": "2026-03",
          "pos": 80.0,
          "neg": 15.0
        },
        {
          "m": "2026-04",
          "pos": 53.8,
          "neg": 23.1
        },
        {
          "m": "2026-05",
          "pos": 58.8,
          "neg": 29.4
        }
      ]
    },
    {
      "nome": "L5076-PIRACICABA (1337)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 86.8,
      "nps_ajust": 86.6,
      "delta": -0.3,
      "sent_medio": 0.56,
      "pct_pos": 69,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Abastecimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Melhorar o atendimento ao cliente sempre atender com um sorriso no rosto não a atendente estar com uma cara de quem não \"",
        "\"para mim está ótimo\"",
        "\"Não achei o pão de queijo\"",
        "\"Na linha de espetos, tinham acabado vários tipos!!\"",
        "\"Loja incrível, e os meninos são muito atenciosos com as carnes desde que entro até o caixa parabens!!\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 47.6,
          "neg": 33.3
        },
        {
          "m": "2025-02",
          "pos": 55.0,
          "neg": 25.0
        },
        {
          "m": "2025-03",
          "pos": 71.4,
          "neg": 17.1
        },
        {
          "m": "2025-04",
          "pos": 79.2,
          "neg": 12.5
        },
        {
          "m": "2025-05",
          "pos": 50.0,
          "neg": 35.0
        },
        {
          "m": "2025-06",
          "pos": 78.1,
          "neg": 9.4
        },
        {
          "m": "2025-07",
          "pos": 63.0,
          "neg": 11.1
        },
        {
          "m": "2025-08",
          "pos": 80.0,
          "neg": 0.0
        },
        {
          "m": "2025-09",
          "pos": 65.5,
          "neg": 6.9
        },
        {
          "m": "2025-10",
          "pos": 69.2,
          "neg": 7.7
        },
        {
          "m": "2025-11",
          "pos": 81.2,
          "neg": 6.2
        },
        {
          "m": "2025-12",
          "pos": 82.8,
          "neg": 3.4
        },
        {
          "m": "2026-01",
          "pos": 75.0,
          "neg": 10.0
        },
        {
          "m": "2026-02",
          "pos": 73.1,
          "neg": 7.7
        },
        {
          "m": "2026-03",
          "pos": 72.2,
          "neg": 16.7
        },
        {
          "m": "2026-04",
          "pos": 60.9,
          "neg": 17.4
        },
        {
          "m": "2026-05",
          "pos": 66.7,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5077-OSCAR FREIRE (1341)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 87.7,
      "nps_ajust": 87.5,
      "delta": -0.2,
      "sent_medio": 0.68,
      "pct_pos": 79,
      "pct_neg": 11,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Atendimento",
        "Loja Fisica",
        "Abastecimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"a loja da oscar freire apresenta uma grande falta de produtos\"",
        "\"Atendimento excelente da Gerente Aline ,Top????\"",
        "\"Está faltando abrir uma filial em Salvador-BA.\"",
        "\"Tive que ir até a loja, pois não consegui comprar file mignon no delivery\"",
        "\"Não precisa melhorar, é tudo de boa qualidade e o atendimento é impecável! As pessoas são muito educadas!!!!!\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 88.9,
          "neg": 5.6
        },
        {
          "m": "2025-02",
          "pos": 58.3,
          "neg": 25.0
        },
        {
          "m": "2025-03",
          "pos": 56.5,
          "neg": 30.4
        },
        {
          "m": "2025-04",
          "pos": 85.2,
          "neg": 3.7
        },
        {
          "m": "2025-05",
          "pos": 70.8,
          "neg": 8.3
        },
        {
          "m": "2025-06",
          "pos": 86.5,
          "neg": 8.1
        },
        {
          "m": "2025-07",
          "pos": 91.3,
          "neg": 0.0
        },
        {
          "m": "2025-08",
          "pos": 94.4,
          "neg": 0.0
        },
        {
          "m": "2025-09",
          "pos": 74.1,
          "neg": 18.5
        },
        {
          "m": "2025-10",
          "pos": 75.0,
          "neg": 12.5
        },
        {
          "m": "2025-11",
          "pos": 66.7,
          "neg": 26.7
        },
        {
          "m": "2025-12",
          "pos": 93.8,
          "neg": 3.1
        },
        {
          "m": "2026-01",
          "pos": 77.8,
          "neg": 5.6
        },
        {
          "m": "2026-02",
          "pos": 72.2,
          "neg": 22.2
        },
        {
          "m": "2026-03",
          "pos": 80.0,
          "neg": 20.0
        },
        {
          "m": "2026-04",
          "pos": 75.0,
          "neg": 6.2
        },
        {
          "m": "2026-05",
          "pos": 84.6,
          "neg": 7.7
        }
      ]
    },
    {
      "nome": "L5078-CAMPO BELO 2 (1342)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 80.8,
      "nps_ajust": 80.2,
      "delta": -0.7,
      "sent_medio": 0.47,
      "pct_pos": 66,
      "pct_neg": 19,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Atendimento",
        "Promocoes Fidelidade",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Fui na loja do Campo Belo segunda-feria.\nTinha um produto em promoção na plaquinha e no freezer estava outro. Questionei\"",
        "\"Loja muito bem limpa e organizada, um tempo atrás estava faltando preços em alguns produtos, mas agora está muito bem de\"",
        "\"Não encontrei pata. Talvez seria uma sugestão\"",
        "\"Produtos com desconto na prateleira não foi computado na registradora: sobremesas\"",
        "\"Quanto mais produtos com pesagem e preço facilita para o consumidor se planejar. Por exemplo 1k sashimi de peito de fran\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 59.1,
          "neg": 22.7
        },
        {
          "m": "2025-02",
          "pos": 57.1,
          "neg": 35.7
        },
        {
          "m": "2025-03",
          "pos": 58.8,
          "neg": 5.9
        },
        {
          "m": "2025-04",
          "pos": 38.5,
          "neg": 7.7
        },
        {
          "m": "2025-05",
          "pos": 69.6,
          "neg": 17.4
        },
        {
          "m": "2025-06",
          "pos": 75.0,
          "neg": 8.3
        },
        {
          "m": "2025-07",
          "pos": 65.2,
          "neg": 26.1
        },
        {
          "m": "2025-08",
          "pos": 60.0,
          "neg": 30.0
        },
        {
          "m": "2025-09",
          "pos": 72.4,
          "neg": 10.3
        },
        {
          "m": "2025-10",
          "pos": 73.1,
          "neg": 15.4
        },
        {
          "m": "2025-11",
          "pos": 68.0,
          "neg": 20.0
        },
        {
          "m": "2025-12",
          "pos": 58.8,
          "neg": 23.5
        },
        {
          "m": "2026-01",
          "pos": 57.1,
          "neg": 34.3
        },
        {
          "m": "2026-02",
          "pos": 83.9,
          "neg": 6.5
        },
        {
          "m": "2026-03",
          "pos": 69.4,
          "neg": 19.4
        },
        {
          "m": "2026-04",
          "pos": 63.2,
          "neg": 15.8
        },
        {
          "m": "2026-05",
          "pos": 64.3,
          "neg": 14.3
        }
      ]
    },
    {
      "nome": "L5081-VILA OLIMPIA (1345)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 81.3,
      "nps_ajust": 81.2,
      "delta": -0.1,
      "sent_medio": 0.43,
      "pct_pos": 62,
      "pct_neg": 19,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Os preços nem sempre são os melhores comparado ao mesmo produto em lojas vizinhas. Não encontrei o produto desejado\"",
        "\"Achei a loja muito bonita e o atendimento  da Carliana foi excelente.\"",
        "\"Ótimo atendimento da Carli\"",
        "\"O produto não estava como sempre\nMuita gordura o que dá um gosto ruim\"",
        "\"Precisam vender fígado de frango, pra os nossos pets.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 41.2,
          "neg": 23.5
        },
        {
          "m": "2025-02",
          "pos": 58.8,
          "neg": 29.4
        },
        {
          "m": "2025-03",
          "pos": 58.3,
          "neg": 8.3
        },
        {
          "m": "2025-04",
          "pos": 54.5,
          "neg": 36.4
        },
        {
          "m": "2025-05",
          "pos": 72.7,
          "neg": 18.2
        },
        {
          "m": "2025-06",
          "pos": 40.0,
          "neg": 30.0
        },
        {
          "m": "2025-07",
          "pos": 100.0,
          "neg": 0.0
        },
        {
          "m": "2025-08",
          "pos": 72.7,
          "neg": 0.0
        },
        {
          "m": "2025-09",
          "pos": 55.6,
          "neg": 22.2
        },
        {
          "m": "2025-10",
          "pos": 57.1,
          "neg": 7.1
        },
        {
          "m": "2025-11",
          "pos": 70.0,
          "neg": 20.0
        },
        {
          "m": "2025-12",
          "pos": 58.3,
          "neg": 25.0
        },
        {
          "m": "2026-01",
          "pos": 66.7,
          "neg": 13.3
        },
        {
          "m": "2026-02",
          "pos": 76.2,
          "neg": 14.3
        },
        {
          "m": "2026-03",
          "pos": 40.0,
          "neg": 40.0
        },
        {
          "m": "2026-04",
          "pos": 63.0,
          "neg": 22.2
        },
        {
          "m": "2026-05",
          "pos": 78.6,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5082-VILA ANDRADE (1346)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 79.2,
      "nps_ajust": 78.3,
      "delta": -0.9,
      "sent_medio": 0.46,
      "pct_pos": 64,
      "pct_neg": 18,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Atendimento Bom... Gostei muito.. encontrei tudo que procurava...\"",
        "\"Atendimento maravilhoso \nNota 10\"",
        "\"Comprei uma pizza de mussarela e outra de peperoni. A de mussarela estava ok, caixa normal. A de peperoni estava com tod\"",
        "\"Hamilton , muito simpático , atencioso , atendimento ótimo\"",
        "\"Sou cliente há anos e te pedido que faço tenho transtornos. Sempre paguei frete pra receber em 5 horas. E qdo vêem q o p\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 50.0,
          "neg": 26.9
        },
        {
          "m": "2025-02",
          "pos": 43.8,
          "neg": 43.8
        },
        {
          "m": "2025-03",
          "pos": 38.5,
          "neg": 34.6
        },
        {
          "m": "2025-04",
          "pos": 56.0,
          "neg": 32.0
        },
        {
          "m": "2025-05",
          "pos": 52.0,
          "neg": 32.0
        },
        {
          "m": "2025-06",
          "pos": 69.2,
          "neg": 11.5
        },
        {
          "m": "2025-07",
          "pos": 58.3,
          "neg": 16.7
        },
        {
          "m": "2025-08",
          "pos": 62.5,
          "neg": 25.0
        },
        {
          "m": "2025-09",
          "pos": 56.5,
          "neg": 17.4
        },
        {
          "m": "2025-10",
          "pos": 69.6,
          "neg": 0.0
        },
        {
          "m": "2025-11",
          "pos": 45.5,
          "neg": 24.2
        },
        {
          "m": "2025-12",
          "pos": 81.5,
          "neg": 14.8
        },
        {
          "m": "2026-01",
          "pos": 71.4,
          "neg": 10.7
        },
        {
          "m": "2026-02",
          "pos": 72.4,
          "neg": 10.3
        },
        {
          "m": "2026-03",
          "pos": 78.0,
          "neg": 12.0
        },
        {
          "m": "2026-04",
          "pos": 73.3,
          "neg": 11.1
        },
        {
          "m": "2026-05",
          "pos": 77.8,
          "neg": 11.1
        }
      ]
    },
    {
      "nome": "L5083-BARCELONA (1347)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 87.4,
      "nps_ajust": 87.2,
      "delta": -0.2,
      "sent_medio": 0.5,
      "pct_pos": 68,
      "pct_neg": 18,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Loja Fisica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Abastecimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Todos atendentes são nota 10\"",
        "\"O app não estava funcionando, mas fui atendida maravilhosamente bem pelo funcionário Guilherme que prontamente e com mui\"",
        "\"Mas promoção, para chamar mais clientes,\"",
        "\"Está tudo bem\"",
        "\"Fazer entregas rapidas\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 75.9,
          "neg": 17.2
        },
        {
          "m": "2025-02",
          "pos": 64.3,
          "neg": 7.1
        },
        {
          "m": "2025-03",
          "pos": 65.4,
          "neg": 19.2
        },
        {
          "m": "2025-04",
          "pos": 73.7,
          "neg": 10.5
        },
        {
          "m": "2025-05",
          "pos": 66.7,
          "neg": 8.3
        },
        {
          "m": "2025-06",
          "pos": 81.0,
          "neg": 14.3
        },
        {
          "m": "2025-07",
          "pos": 78.9,
          "neg": 15.8
        },
        {
          "m": "2025-08",
          "pos": 68.0,
          "neg": 20.0
        },
        {
          "m": "2025-09",
          "pos": 72.7,
          "neg": 27.3
        },
        {
          "m": "2025-10",
          "pos": 47.4,
          "neg": 36.8
        },
        {
          "m": "2025-11",
          "pos": 90.0,
          "neg": 0.0
        },
        {
          "m": "2025-12",
          "pos": 55.0,
          "neg": 25.0
        },
        {
          "m": "2026-01",
          "pos": 77.8,
          "neg": 5.6
        },
        {
          "m": "2026-02",
          "pos": 77.3,
          "neg": 13.6
        },
        {
          "m": "2026-03",
          "pos": 45.8,
          "neg": 25.0
        },
        {
          "m": "2026-04",
          "pos": 52.9,
          "neg": 23.5
        },
        {
          "m": "2026-05",
          "pos": 85.7,
          "neg": 14.3
        }
      ]
    },
    {
      "nome": "L5084-GUAIPA (1349)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 85.9,
      "nps_ajust": 85.9,
      "delta": 0.0,
      "sent_medio": 0.7,
      "pct_pos": 78,
      "pct_neg": 8,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Compro sempre o medalhão de filé mignon, e a cada compra me arrependo, vem muito retalho de carne e poucos medalhões int\"",
        "\"Lançar mais promoções\"",
        "\"Sempre comprei carne na Swift, porém o último filet mignon que comprei estava com um gosto forte parece sangue, passo ma\"",
        "\"Fazer promoções e avisar!\"",
        "\"Estão de parabéns \nMuito satisfeita\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 56.2,
          "neg": 37.5
        },
        {
          "m": "2025-02",
          "pos": 44.4,
          "neg": 22.2
        },
        {
          "m": "2025-03",
          "pos": 83.3,
          "neg": 0.0
        },
        {
          "m": "2025-04",
          "pos": 72.0,
          "neg": 4.0
        },
        {
          "m": "2025-05",
          "pos": 66.7,
          "neg": 8.3
        },
        {
          "m": "2025-06",
          "pos": 81.2,
          "neg": 0.0
        },
        {
          "m": "2025-07",
          "pos": 78.6,
          "neg": 7.1
        },
        {
          "m": "2025-08",
          "pos": 70.4,
          "neg": 3.7
        },
        {
          "m": "2025-09",
          "pos": 66.7,
          "neg": 14.3
        },
        {
          "m": "2025-10",
          "pos": 76.7,
          "neg": 13.3
        },
        {
          "m": "2025-11",
          "pos": 62.5,
          "neg": 16.7
        },
        {
          "m": "2025-12",
          "pos": 91.8,
          "neg": 6.1
        },
        {
          "m": "2026-01",
          "pos": 92.3,
          "neg": 1.9
        },
        {
          "m": "2026-02",
          "pos": 89.1,
          "neg": 3.1
        },
        {
          "m": "2026-03",
          "pos": 85.2,
          "neg": 7.4
        },
        {
          "m": "2026-04",
          "pos": 70.8,
          "neg": 16.7
        },
        {
          "m": "2026-05",
          "pos": 100.0,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5086-PORTAL DO MORUMBI (1352)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 86.9,
      "nps_ajust": 86.8,
      "delta": -0.1,
      "sent_medio": 0.74,
      "pct_pos": 82,
      "pct_neg": 8,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Atendente (homem) começou o meu atendimento e interrompeu para atender uma cliente e me deixou esperando. Desisti da com\"",
        "\"Preços mais acessíveis\"",
        "\"Diminuir um pouco a pimenta colocada na fraldinha bovina temperada. obrigado.\"",
        "\"COMPREI UMA LAZANHA QUATRO QUEIJOS E ESTA UM PORCARIA. QUATRO QUEIJOS NEM PENSAR ..\nOUTRO DETALHE, FUI ATENDIDO POR UMA \"",
        "\"Mantenha como está\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 60.9,
          "neg": 15.2
        },
        {
          "m": "2025-02",
          "pos": 56.8,
          "neg": 18.9
        },
        {
          "m": "2025-03",
          "pos": 53.1,
          "neg": 24.5
        },
        {
          "m": "2025-04",
          "pos": 69.4,
          "neg": 19.4
        },
        {
          "m": "2025-05",
          "pos": 70.8,
          "neg": 12.5
        },
        {
          "m": "2025-06",
          "pos": 81.6,
          "neg": 5.3
        },
        {
          "m": "2025-07",
          "pos": 81.2,
          "neg": 9.4
        },
        {
          "m": "2025-08",
          "pos": 80.3,
          "neg": 8.2
        },
        {
          "m": "2025-09",
          "pos": 80.6,
          "neg": 8.3
        },
        {
          "m": "2025-10",
          "pos": 79.4,
          "neg": 11.3
        },
        {
          "m": "2025-11",
          "pos": 84.6,
          "neg": 7.7
        },
        {
          "m": "2025-12",
          "pos": 88.9,
          "neg": 4.9
        },
        {
          "m": "2026-01",
          "pos": 85.0,
          "neg": 8.3
        },
        {
          "m": "2026-02",
          "pos": 85.6,
          "neg": 2.9
        },
        {
          "m": "2026-03",
          "pos": 88.2,
          "neg": 3.7
        },
        {
          "m": "2026-04",
          "pos": 87.8,
          "neg": 4.9
        },
        {
          "m": "2026-05",
          "pos": 90.7,
          "neg": 3.1
        }
      ]
    },
    {
      "nome": "L5087-ALBERTO ANDALO (1353)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 90.0,
      "nps_ajust": 89.6,
      "delta": -0.4,
      "sent_medio": 0.65,
      "pct_pos": 76,
      "pct_neg": 11,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Loja Fisica",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Nos preços, nas promoções, etc...\"",
        "\"Poucos atendentes em loja, precisa ter mais gente para ajudar.\"",
        "\"O atendente teve muita atenção e disposição para atender!\nPARABÉNS!!!!\"",
        "\"Poderiam ter Carne de carneiro em cubos .\nPicados como falamos no interior\"",
        "\"Está tudo perfeito\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 72.7,
          "neg": 13.6
        },
        {
          "m": "2025-02",
          "pos": 55.6,
          "neg": 11.1
        },
        {
          "m": "2025-03",
          "pos": 55.6,
          "neg": 0.0
        },
        {
          "m": "2025-04",
          "pos": 75.0,
          "neg": 12.5
        },
        {
          "m": "2025-05",
          "pos": 100.0,
          "neg": 0.0
        },
        {
          "m": "2025-06",
          "pos": 70.0,
          "neg": 20.0
        },
        {
          "m": "2025-07",
          "pos": 94.7,
          "neg": 0.0
        },
        {
          "m": "2025-08",
          "pos": 66.7,
          "neg": 5.6
        },
        {
          "m": "2025-09",
          "pos": 85.7,
          "neg": 0.0
        },
        {
          "m": "2025-10",
          "pos": 71.4,
          "neg": 7.1
        },
        {
          "m": "2025-11",
          "pos": 78.6,
          "neg": 21.4
        },
        {
          "m": "2025-12",
          "pos": 71.0,
          "neg": 19.4
        },
        {
          "m": "2026-01",
          "pos": 89.5,
          "neg": 0.0
        },
        {
          "m": "2026-02",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2026-03",
          "pos": 73.9,
          "neg": 13.0
        },
        {
          "m": "2026-04",
          "pos": 81.2,
          "neg": 12.5
        },
        {
          "m": "2026-05",
          "pos": 60.0,
          "neg": 13.3
        }
      ]
    },
    {
      "nome": "L5088-PONTA DA PRAIA (1363)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 87.8,
      "nps_ajust": 87.5,
      "delta": -0.3,
      "sent_medio": 0.52,
      "pct_pos": 67,
      "pct_neg": 15,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Loja Fisica",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Comprei a carne seca desfiada e dessalgada, mas veio bem salgadinha\"",
        "\"Não exagerando nos preços e fazendo mais promoções\"",
        "\"Na minha opinião  nada\"",
        "\"Não encontrei sebo bovino. Só banha suína. Preciso de sebo bovino,\"",
        "\"Comprei pela primeira vez o doce de abóbora com côco e achei muito ardido por causa do excesso de cravos... não sei se d\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 68.4,
          "neg": 15.8
        },
        {
          "m": "2025-02",
          "pos": 60.0,
          "neg": 26.7
        },
        {
          "m": "2025-03",
          "pos": 66.7,
          "neg": 20.8
        },
        {
          "m": "2025-04",
          "pos": 70.0,
          "neg": 20.0
        },
        {
          "m": "2025-05",
          "pos": 68.0,
          "neg": 16.0
        },
        {
          "m": "2025-06",
          "pos": 81.2,
          "neg": 3.1
        },
        {
          "m": "2025-07",
          "pos": 70.8,
          "neg": 16.7
        },
        {
          "m": "2025-08",
          "pos": 73.3,
          "neg": 6.7
        },
        {
          "m": "2025-09",
          "pos": 31.6,
          "neg": 15.8
        },
        {
          "m": "2025-10",
          "pos": 82.6,
          "neg": 4.3
        },
        {
          "m": "2025-11",
          "pos": 55.6,
          "neg": 18.5
        },
        {
          "m": "2025-12",
          "pos": 77.1,
          "neg": 8.6
        },
        {
          "m": "2026-01",
          "pos": 56.4,
          "neg": 25.6
        },
        {
          "m": "2026-02",
          "pos": 76.2,
          "neg": 9.5
        },
        {
          "m": "2026-03",
          "pos": 57.1,
          "neg": 14.3
        },
        {
          "m": "2026-04",
          "pos": 78.9,
          "neg": 10.5
        },
        {
          "m": "2026-05",
          "pos": 50.0,
          "neg": 14.3
        }
      ]
    },
    {
      "nome": "L5089-BOA VISTA (1364)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 87.0,
      "nps_ajust": 86.5,
      "delta": -0.5,
      "sent_medio": 0.55,
      "pct_pos": 69,
      "pct_neg": 14,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Loja Fisica",
        "Abastecimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Mais Ofertas em Todos os Setores.\nParticularmente nos Pescados.\"",
        "\"Podem melhorar um pouco no valor dos produtos , tornando mais acessiveis\"",
        "\"Comprei 1 quilo da carne moída bolonhesa, não deu para comer, muito gosto e cheiro de sebo.\"",
        "\"Só  manter está ótimo\"",
        "\"NÃO TINHA ISCA DE FÍGADO E NEM PEITO FRANGO DESFIADO\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 65.9,
          "neg": 22.7
        },
        {
          "m": "2025-02",
          "pos": 60.9,
          "neg": 26.1
        },
        {
          "m": "2025-03",
          "pos": 83.3,
          "neg": 3.3
        },
        {
          "m": "2025-04",
          "pos": 70.0,
          "neg": 10.0
        },
        {
          "m": "2025-05",
          "pos": 81.2,
          "neg": 6.2
        },
        {
          "m": "2025-06",
          "pos": 57.9,
          "neg": 26.3
        },
        {
          "m": "2025-07",
          "pos": 86.7,
          "neg": 6.7
        },
        {
          "m": "2025-08",
          "pos": 58.3,
          "neg": 20.8
        },
        {
          "m": "2025-09",
          "pos": 57.9,
          "neg": 15.8
        },
        {
          "m": "2025-10",
          "pos": 71.4,
          "neg": 9.5
        },
        {
          "m": "2025-11",
          "pos": 82.4,
          "neg": 11.8
        },
        {
          "m": "2025-12",
          "pos": 60.0,
          "neg": 12.0
        },
        {
          "m": "2026-01",
          "pos": 66.7,
          "neg": 11.1
        },
        {
          "m": "2026-02",
          "pos": 81.8,
          "neg": 9.1
        },
        {
          "m": "2026-03",
          "pos": 66.7,
          "neg": 22.2
        },
        {
          "m": "2026-04",
          "pos": 76.5,
          "neg": 5.9
        },
        {
          "m": "2026-05",
          "pos": 62.5,
          "neg": 12.5
        }
      ]
    },
    {
      "nome": "L5090-NORTE SUL (1365)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 87.1,
      "nps_ajust": 86.6,
      "delta": -0.6,
      "sent_medio": 0.62,
      "pct_pos": 76,
      "pct_neg": 14,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Funcionários alheio , fique esperando no caixa , prestarem atenção mesmo que a loja não esteja cheia o qual foi meu caso\"",
        "\"Poderiam melhorar estornando o valor dos pães que comprei e não vieram. Já abri reclamação e não obtive retorno.\"",
        "\"A qualidade das sacolas piorou, para transportar produtos pesados e congelados a sacola precisa ser de qualidade\"",
        "\"Alguns produtos estão acima do preço de outros congelados\"",
        "\"Bom dia ,somatório compras acima 1000.00 mandar bolsa termica ,isto ajuda muito\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 54.2,
          "neg": 25.0
        },
        {
          "m": "2025-02",
          "pos": 58.8,
          "neg": 29.4
        },
        {
          "m": "2025-03",
          "pos": 46.7,
          "neg": 46.7
        },
        {
          "m": "2025-04",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2025-05",
          "pos": 76.0,
          "neg": 8.0
        },
        {
          "m": "2025-06",
          "pos": 62.5,
          "neg": 12.5
        },
        {
          "m": "2025-07",
          "pos": 93.3,
          "neg": 0.0
        },
        {
          "m": "2025-08",
          "pos": 69.6,
          "neg": 26.1
        },
        {
          "m": "2025-09",
          "pos": 84.2,
          "neg": 5.3
        },
        {
          "m": "2025-10",
          "pos": 66.7,
          "neg": 13.3
        },
        {
          "m": "2025-11",
          "pos": 77.8,
          "neg": 14.8
        },
        {
          "m": "2025-12",
          "pos": 90.8,
          "neg": 4.6
        },
        {
          "m": "2026-01",
          "pos": 74.1,
          "neg": 22.2
        },
        {
          "m": "2026-02",
          "pos": 84.8,
          "neg": 6.1
        },
        {
          "m": "2026-03",
          "pos": 80.8,
          "neg": 7.7
        },
        {
          "m": "2026-04",
          "pos": 73.3,
          "neg": 16.7
        },
        {
          "m": "2026-05",
          "pos": 66.7,
          "neg": 16.7
        }
      ]
    },
    {
      "nome": "L5091-NOVA CANTAREIRA (1366)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 86.7,
      "nps_ajust": 85.9,
      "delta": -0.8,
      "sent_medio": 0.52,
      "pct_pos": 67,
      "pct_neg": 16,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Atendimento",
        "Promocoes Fidelidade",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"A loja possui funcionários incríveis, organizado e produtos de ótima qualidade!!\"",
        "\"Manter durante o ano alguns produtos que só vendem no final do ano tais.como lombo com manteiga e ervas   pernil desossa\"",
        "\"Reduzir a quantidade de sal nos produtos  temperados, principalmente  o frangos,   desfiado e filés  nas carnes tbm\"",
        "\"Abrir mais unidades na zona norte, como por exemplo na av Cel.Sezefredo Fagundes ou av Tucuruvi.\"",
        "\"Na minha opinião o serviço está otimo\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 62.1,
          "neg": 20.7
        },
        {
          "m": "2025-02",
          "pos": 66.7,
          "neg": 20.0
        },
        {
          "m": "2025-03",
          "pos": 44.1,
          "neg": 23.5
        },
        {
          "m": "2025-04",
          "pos": 73.5,
          "neg": 11.8
        },
        {
          "m": "2025-05",
          "pos": 61.8,
          "neg": 11.8
        },
        {
          "m": "2025-06",
          "pos": 69.7,
          "neg": 15.2
        },
        {
          "m": "2025-07",
          "pos": 86.4,
          "neg": 9.1
        },
        {
          "m": "2025-08",
          "pos": 58.3,
          "neg": 25.0
        },
        {
          "m": "2025-09",
          "pos": 75.0,
          "neg": 8.3
        },
        {
          "m": "2025-10",
          "pos": 55.0,
          "neg": 25.0
        },
        {
          "m": "2025-11",
          "pos": 64.3,
          "neg": 14.3
        },
        {
          "m": "2025-12",
          "pos": 73.3,
          "neg": 16.7
        },
        {
          "m": "2026-01",
          "pos": 61.8,
          "neg": 20.6
        },
        {
          "m": "2026-02",
          "pos": 78.9,
          "neg": 15.8
        },
        {
          "m": "2026-03",
          "pos": 81.8,
          "neg": 4.5
        },
        {
          "m": "2026-04",
          "pos": 68.2,
          "neg": 9.1
        },
        {
          "m": "2026-05",
          "pos": 84.6,
          "neg": 15.4
        }
      ]
    },
    {
      "nome": "L5092-VILA AUGUSTA (1374)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 83.6,
      "nps_ajust": 83.2,
      "delta": -0.4,
      "sent_medio": 0.54,
      "pct_pos": 68,
      "pct_neg": 14,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Atendimento",
        "Loja Fisica",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Compro sempre carne para churrasco com vc´s..E não foi diferente neste sábado.\nPego sempre a Picanha da mesca swift, ant\"",
        "\"referente ao atendimento, não tive. Apenas o caixa muito gentil Henrique\"",
        "\"Faltou o morango com chocolate\"",
        "\"Preço poderia abaixar um pouquinho.....mas os produtos são ótimos\"",
        "\"Sssim esta bom\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 54.2,
          "neg": 12.5
        },
        {
          "m": "2025-02",
          "pos": 61.9,
          "neg": 14.3
        },
        {
          "m": "2025-03",
          "pos": 56.5,
          "neg": 17.4
        },
        {
          "m": "2025-04",
          "pos": 58.6,
          "neg": 6.9
        },
        {
          "m": "2025-05",
          "pos": 52.9,
          "neg": 17.6
        },
        {
          "m": "2025-06",
          "pos": 80.0,
          "neg": 8.0
        },
        {
          "m": "2025-07",
          "pos": 66.7,
          "neg": 16.7
        },
        {
          "m": "2025-08",
          "pos": 80.0,
          "neg": 13.3
        },
        {
          "m": "2025-09",
          "pos": 85.7,
          "neg": 4.1
        },
        {
          "m": "2025-10",
          "pos": 89.1,
          "neg": 4.3
        },
        {
          "m": "2025-11",
          "pos": 80.0,
          "neg": 12.5
        },
        {
          "m": "2025-12",
          "pos": 55.2,
          "neg": 24.1
        },
        {
          "m": "2026-01",
          "pos": 50.0,
          "neg": 26.9
        },
        {
          "m": "2026-02",
          "pos": 73.1,
          "neg": 7.7
        },
        {
          "m": "2026-03",
          "pos": 66.7,
          "neg": 28.6
        },
        {
          "m": "2026-04",
          "pos": 32.0,
          "neg": 32.0
        },
        {
          "m": "2026-05",
          "pos": 58.8,
          "neg": 29.4
        }
      ]
    },
    {
      "nome": "L5093-PERDIZES 2 (1376)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 81.2,
      "nps_ajust": 80.9,
      "delta": -0.4,
      "sent_medio": 0.56,
      "pct_pos": 70,
      "pct_neg": 14,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Atendimento",
        "Loja Fisica",
        "Abastecimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Ótimo atendimento! Funcionários super queridos, Wadson, Bruno, Guilherme! Vamos toda semana!\"",
        "\"Entregando no prazo escolhido.\"",
        "\"Meu pedido veio incompleto e um dia depois, sendo que solicitei a entrega no mesmo dia em até 5h (pedi às 10h). O valor \"",
        "\"Preço e facilidades para melhor idade\"",
        "\"A equipe é sempre prestativa quando eu vou lá, obrigada Evelyn, Thaina, Enzo, Guilherme, Ariana, Sonia, Manuela, Isabela\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 59.1,
          "neg": 18.2
        },
        {
          "m": "2025-02",
          "pos": 66.7,
          "neg": 25.0
        },
        {
          "m": "2025-03",
          "pos": 52.9,
          "neg": 11.8
        },
        {
          "m": "2025-04",
          "pos": 60.9,
          "neg": 17.4
        },
        {
          "m": "2025-05",
          "pos": 77.1,
          "neg": 11.4
        },
        {
          "m": "2025-06",
          "pos": 87.1,
          "neg": 3.2
        },
        {
          "m": "2025-07",
          "pos": 79.2,
          "neg": 8.3
        },
        {
          "m": "2025-08",
          "pos": 85.2,
          "neg": 11.1
        },
        {
          "m": "2025-09",
          "pos": 67.6,
          "neg": 17.6
        },
        {
          "m": "2025-10",
          "pos": 61.9,
          "neg": 28.6
        },
        {
          "m": "2025-11",
          "pos": 67.6,
          "neg": 5.9
        },
        {
          "m": "2025-12",
          "pos": 73.8,
          "neg": 21.4
        },
        {
          "m": "2026-01",
          "pos": 61.1,
          "neg": 16.7
        },
        {
          "m": "2026-02",
          "pos": 54.5,
          "neg": 15.2
        },
        {
          "m": "2026-03",
          "pos": 70.5,
          "neg": 11.5
        },
        {
          "m": "2026-04",
          "pos": 78.3,
          "neg": 8.7
        },
        {
          "m": "2026-05",
          "pos": 70.0,
          "neg": 10.0
        }
      ]
    },
    {
      "nome": "L5095-VILLA LOBOS (1380)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 78.7,
      "nps_ajust": 78.1,
      "delta": -0.6,
      "sent_medio": 0.51,
      "pct_pos": 69,
      "pct_neg": 18,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Abastecimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Sempre falta produtos especialmente sassami (sem amanciante). Passei na Oscar Freire e so tinha o sassami orgânico ou te\"",
        "\"APP e SITE são confusos\"",
        "\"Precisa ter banheiros para clientes\"",
        "\"bifes de contra file seguem pessimos\"",
        "\"Sempre bem atendido pelo vitor\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 46.2,
          "neg": 30.8
        },
        {
          "m": "2025-02",
          "pos": 60.0,
          "neg": 20.0
        },
        {
          "m": "2025-03",
          "pos": 35.3,
          "neg": 52.9
        },
        {
          "m": "2025-04",
          "pos": 69.2,
          "neg": 19.2
        },
        {
          "m": "2025-05",
          "pos": 77.1,
          "neg": 8.6
        },
        {
          "m": "2025-06",
          "pos": 72.0,
          "neg": 12.0
        },
        {
          "m": "2025-07",
          "pos": 77.8,
          "neg": 22.2
        },
        {
          "m": "2025-08",
          "pos": 58.6,
          "neg": 24.1
        },
        {
          "m": "2025-09",
          "pos": 82.5,
          "neg": 6.3
        },
        {
          "m": "2025-10",
          "pos": 65.5,
          "neg": 24.1
        },
        {
          "m": "2025-11",
          "pos": 64.9,
          "neg": 18.9
        },
        {
          "m": "2025-12",
          "pos": 80.0,
          "neg": 8.6
        },
        {
          "m": "2026-01",
          "pos": 83.0,
          "neg": 11.3
        },
        {
          "m": "2026-02",
          "pos": 52.0,
          "neg": 40.0
        },
        {
          "m": "2026-03",
          "pos": 74.2,
          "neg": 16.1
        },
        {
          "m": "2026-04",
          "pos": 56.5,
          "neg": 26.1
        },
        {
          "m": "2026-05",
          "pos": 59.3,
          "neg": 25.9
        }
      ]
    },
    {
      "nome": "L5097-JUNDIAI (1404)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 83.8,
      "nps_ajust": 83.4,
      "delta": -0.4,
      "sent_medio": 0.52,
      "pct_pos": 66,
      "pct_neg": 14,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Atendimento",
        "Abastecimento",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Produto sempre em falta na loja de Jundiaí - Av. 09 de Julho\nArroz Cremoso com Camarão Swift 300g\n\"",
        "\"Poderia dizer q os produtos são fornecidos pela seara.\"",
        "\"Tivemos um pequeno inconveniente na loja de Jundiai, avenida 9 de Julho. Produtos com preços errados na gôndola, tivemos\"",
        "\"Loja está faltando muita mercadoria perguntei para um funcionário se tinha medalhão de peixe não sabia me responder\"",
        "\"Achei poucas promoções\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 52.5,
          "neg": 22.5
        },
        {
          "m": "2025-02",
          "pos": 72.7,
          "neg": 12.1
        },
        {
          "m": "2025-03",
          "pos": 53.7,
          "neg": 22.0
        },
        {
          "m": "2025-04",
          "pos": 57.6,
          "neg": 12.1
        },
        {
          "m": "2025-05",
          "pos": 72.0,
          "neg": 12.0
        },
        {
          "m": "2025-06",
          "pos": 60.0,
          "neg": 16.7
        },
        {
          "m": "2025-07",
          "pos": 57.7,
          "neg": 19.2
        },
        {
          "m": "2025-08",
          "pos": 70.8,
          "neg": 14.6
        },
        {
          "m": "2025-09",
          "pos": 82.1,
          "neg": 10.3
        },
        {
          "m": "2025-10",
          "pos": 82.1,
          "neg": 7.7
        },
        {
          "m": "2025-11",
          "pos": 65.4,
          "neg": 19.2
        },
        {
          "m": "2025-12",
          "pos": 73.3,
          "neg": 13.3
        },
        {
          "m": "2026-01",
          "pos": 58.5,
          "neg": 17.1
        },
        {
          "m": "2026-02",
          "pos": 69.7,
          "neg": 12.1
        },
        {
          "m": "2026-03",
          "pos": 68.1,
          "neg": 10.6
        },
        {
          "m": "2026-04",
          "pos": 51.1,
          "neg": 15.6
        },
        {
          "m": "2026-05",
          "pos": 77.8,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5098-AUTONOMISTAS (1405)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 88.3,
      "nps_ajust": 88.1,
      "delta": -0.2,
      "sent_medio": 0.71,
      "pct_pos": 80,
      "pct_neg": 9,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"No prazo para entregar\"",
        "\"Poderiam aplicar desconto surpresa para criar expectativas no consumidor no momento de passar no caixa. Iria ser bem leg\"",
        "\"Somos clientes da Swift já há algum tempo, mas compramos uma picanha ouro super dura e sem sabor de picanha. Foi a prime\"",
        "\"Colaborador Júnior muito cordial e acolhedor ! Excelente atendimento.\"",
        "\"Tirar os pedintes que entram na loja, é muito desagradável. Vc mal estaciona o carro eles te abordam e ficam te observan\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 67.2,
          "neg": 20.3
        },
        {
          "m": "2025-02",
          "pos": 67.4,
          "neg": 9.3
        },
        {
          "m": "2025-03",
          "pos": 80.0,
          "neg": 12.7
        },
        {
          "m": "2025-04",
          "pos": 82.2,
          "neg": 8.9
        },
        {
          "m": "2025-05",
          "pos": 66.0,
          "neg": 19.1
        },
        {
          "m": "2025-06",
          "pos": 83.3,
          "neg": 7.4
        },
        {
          "m": "2025-07",
          "pos": 76.9,
          "neg": 9.6
        },
        {
          "m": "2025-08",
          "pos": 83.3,
          "neg": 7.1
        },
        {
          "m": "2025-09",
          "pos": 75.0,
          "neg": 7.5
        },
        {
          "m": "2025-10",
          "pos": 82.6,
          "neg": 10.1
        },
        {
          "m": "2025-11",
          "pos": 93.7,
          "neg": 3.2
        },
        {
          "m": "2025-12",
          "pos": 88.8,
          "neg": 8.8
        },
        {
          "m": "2026-01",
          "pos": 82.1,
          "neg": 7.1
        },
        {
          "m": "2026-02",
          "pos": 75.9,
          "neg": 6.9
        },
        {
          "m": "2026-03",
          "pos": 76.9,
          "neg": 3.8
        },
        {
          "m": "2026-04",
          "pos": 90.9,
          "neg": 7.3
        },
        {
          "m": "2026-05",
          "pos": 75.7,
          "neg": 5.4
        }
      ]
    },
    {
      "nome": "L5099-VILA MATILDE (1421)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 85.7,
      "nps_ajust": 85.1,
      "delta": -0.6,
      "sent_medio": 0.51,
      "pct_pos": 68,
      "pct_neg": 17,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Fazendo mais ofertas para que todos possam ter a possibilidade de comprar.\"",
        "\"Amei o antendimento da Amanda cruz Ótimo\"",
        "\"Como sempre ótimo atendimento\nColaboradores pró ativos\nAtendente Elma muito sorridente,educada,bom astral,as vezes isto \"",
        "\"Sou cliente a muitos anos já esta na hora da empresa olhar para o cliente FIEL.\nNunca recebi alguma cortesia ou algo sem\"",
        "\"Alguns produtos poderiam ser vendidos em porções menores,  tipo coração de galinha.  Somos só duas pessoas em casa. \nPre\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 62.8,
          "neg": 25.6
        },
        {
          "m": "2025-02",
          "pos": 60.9,
          "neg": 13.0
        },
        {
          "m": "2025-03",
          "pos": 62.1,
          "neg": 20.7
        },
        {
          "m": "2025-04",
          "pos": 58.8,
          "neg": 17.6
        },
        {
          "m": "2025-05",
          "pos": 57.1,
          "neg": 23.8
        },
        {
          "m": "2025-06",
          "pos": 65.8,
          "neg": 15.8
        },
        {
          "m": "2025-07",
          "pos": 70.8,
          "neg": 12.5
        },
        {
          "m": "2025-08",
          "pos": 79.2,
          "neg": 8.3
        },
        {
          "m": "2025-09",
          "pos": 74.3,
          "neg": 14.3
        },
        {
          "m": "2025-10",
          "pos": 52.8,
          "neg": 27.8
        },
        {
          "m": "2025-11",
          "pos": 85.0,
          "neg": 7.5
        },
        {
          "m": "2025-12",
          "pos": 65.5,
          "neg": 16.4
        },
        {
          "m": "2026-01",
          "pos": 73.2,
          "neg": 9.8
        },
        {
          "m": "2026-02",
          "pos": 70.8,
          "neg": 15.3
        },
        {
          "m": "2026-03",
          "pos": 62.9,
          "neg": 20.0
        },
        {
          "m": "2026-04",
          "pos": 67.7,
          "neg": 22.6
        },
        {
          "m": "2026-05",
          "pos": 89.5,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5100-INTERLAGOS (1431)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 85.9,
      "nps_ajust": 85.2,
      "delta": -0.7,
      "sent_medio": 0.53,
      "pct_pos": 69,
      "pct_neg": 16,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Produto",
        "Abastecimento",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Seria bom a forma de pagamento poder ser dividido em maís vezes\"",
        "\"Trazendo novidades e nós avisando.\nEsses produtos nos ajudam bastante pois praticamente já vem prontos e assim nós mulhe\"",
        "\"Colocando mais produtos e com menor preço\"",
        "\"Está bom assim\"",
        "\"Comprei no site para retirar.  Meu marido  foi retirar. Pela segunda vez foi confundido com motoboy ( um senhor de 67 an\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 73.3,
          "neg": 15.6
        },
        {
          "m": "2025-02",
          "pos": 59.5,
          "neg": 21.6
        },
        {
          "m": "2025-03",
          "pos": 74.4,
          "neg": 15.4
        },
        {
          "m": "2025-04",
          "pos": 63.0,
          "neg": 19.6
        },
        {
          "m": "2025-05",
          "pos": 75.6,
          "neg": 12.2
        },
        {
          "m": "2025-06",
          "pos": 78.8,
          "neg": 12.1
        },
        {
          "m": "2025-07",
          "pos": 75.0,
          "neg": 10.7
        },
        {
          "m": "2025-08",
          "pos": 75.7,
          "neg": 16.2
        },
        {
          "m": "2025-09",
          "pos": 71.1,
          "neg": 13.2
        },
        {
          "m": "2025-10",
          "pos": 64.3,
          "neg": 14.3
        },
        {
          "m": "2025-11",
          "pos": 57.1,
          "neg": 21.4
        },
        {
          "m": "2025-12",
          "pos": 66.7,
          "neg": 20.8
        },
        {
          "m": "2026-01",
          "pos": 71.4,
          "neg": 19.0
        },
        {
          "m": "2026-02",
          "pos": 70.6,
          "neg": 5.9
        },
        {
          "m": "2026-03",
          "pos": 70.8,
          "neg": 16.7
        },
        {
          "m": "2026-04",
          "pos": 62.9,
          "neg": 17.1
        },
        {
          "m": "2026-05",
          "pos": 62.5,
          "neg": 16.7
        }
      ]
    },
    {
      "nome": "L5101-CIDADE SAO FRANCISCO (1432)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 86.6,
      "nps_ajust": 86.4,
      "delta": -0.2,
      "sent_medio": 0.61,
      "pct_pos": 74,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Excelente atendimento da Lilica.\"",
        "\"Tudo ótimo \nObrigado\"",
        "\"Voltar com o produto donut de creme. Faz tempo que não consigo encontrar.\"",
        "\"Ótimo atendimento do pessoal, parabéns!\"",
        "\"Excelente qualidade das carnes, bem como o atendimento dos funcionários.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 44.4,
          "neg": 22.2
        },
        {
          "m": "2025-02",
          "pos": 30.0,
          "neg": 30.0
        },
        {
          "m": "2025-03",
          "pos": 47.4,
          "neg": 15.8
        },
        {
          "m": "2025-04",
          "pos": 35.7,
          "neg": 28.6
        },
        {
          "m": "2025-05",
          "pos": 77.8,
          "neg": 22.2
        },
        {
          "m": "2025-06",
          "pos": 68.8,
          "neg": 12.5
        },
        {
          "m": "2025-07",
          "pos": 85.7,
          "neg": 7.1
        },
        {
          "m": "2025-08",
          "pos": 64.7,
          "neg": 29.4
        },
        {
          "m": "2025-09",
          "pos": 85.7,
          "neg": 0.0
        },
        {
          "m": "2025-10",
          "pos": 66.7,
          "neg": 16.7
        },
        {
          "m": "2025-11",
          "pos": 66.7,
          "neg": 19.0
        },
        {
          "m": "2025-12",
          "pos": 75.0,
          "neg": 5.0
        },
        {
          "m": "2026-01",
          "pos": 75.0,
          "neg": 12.5
        },
        {
          "m": "2026-02",
          "pos": 90.5,
          "neg": 7.1
        },
        {
          "m": "2026-03",
          "pos": 89.3,
          "neg": 7.1
        },
        {
          "m": "2026-04",
          "pos": 91.4,
          "neg": 2.9
        },
        {
          "m": "2026-05",
          "pos": 88.9,
          "neg": 7.4
        }
      ]
    },
    {
      "nome": "L5102-POMPEIA DESEMBARGADOR (1449)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 87.2,
      "nps_ajust": 86.7,
      "delta": -0.4,
      "sent_medio": 0.61,
      "pct_pos": 74,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Atendimento",
        "Loja Fisica",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Agendei a entrega para domingo, entre 11h e 13h. Além de não cumprirem o horário combinado, simplesmente decidiram entre\"",
        "\"Show ! Quero uma térmica pequena pelos elogios \nLoja show\"",
        "\"Produto de pouco qualidade comprei algumas peças de carne impossível de comer\"",
        "\"Funcionários muito educados, prestativos e eficientes.\"",
        "\"Vanessa otimo atendimento\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 76.2,
          "neg": 4.8
        },
        {
          "m": "2025-02",
          "pos": 78.9,
          "neg": 5.3
        },
        {
          "m": "2025-03",
          "pos": 65.2,
          "neg": 17.4
        },
        {
          "m": "2025-04",
          "pos": 81.8,
          "neg": 4.5
        },
        {
          "m": "2025-05",
          "pos": 81.0,
          "neg": 0.0
        },
        {
          "m": "2025-06",
          "pos": 42.9,
          "neg": 28.6
        },
        {
          "m": "2025-07",
          "pos": 80.0,
          "neg": 12.0
        },
        {
          "m": "2025-08",
          "pos": 60.7,
          "neg": 17.9
        },
        {
          "m": "2025-09",
          "pos": 69.7,
          "neg": 18.2
        },
        {
          "m": "2025-10",
          "pos": 67.7,
          "neg": 16.1
        },
        {
          "m": "2025-11",
          "pos": 60.9,
          "neg": 21.7
        },
        {
          "m": "2025-12",
          "pos": 76.6,
          "neg": 14.9
        },
        {
          "m": "2026-01",
          "pos": 80.9,
          "neg": 4.3
        },
        {
          "m": "2026-02",
          "pos": 87.0,
          "neg": 10.9
        },
        {
          "m": "2026-03",
          "pos": 82.5,
          "neg": 12.5
        },
        {
          "m": "2026-04",
          "pos": 78.4,
          "neg": 10.8
        },
        {
          "m": "2026-05",
          "pos": 70.0,
          "neg": 12.5
        }
      ]
    },
    {
      "nome": "L5103-ATIBAIA (1454)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 84.8,
      "nps_ajust": 84.2,
      "delta": -0.5,
      "sent_medio": 0.56,
      "pct_pos": 70,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Atendimento",
        "Produto",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Baixar um pouquinho os preços\"",
        "\"Abastecendo sempre é pra melhoras só falta vende ovos da pra ser?\"",
        "\"Os atendentes pouco deram atenção, perguntei sobre um produto específico e a resposta foi: se tiver, tem que estar na ge\"",
        "\"Achei um pouco difícil a compra da picanha, e uso a variação do peso.\"",
        "\"Fiquei muito satisfeito com o atendimento. O que podem melhorar é no horario de grande movimento aumentar os caixas. A f\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 64.2,
          "neg": 20.8
        },
        {
          "m": "2025-02",
          "pos": 72.3,
          "neg": 14.9
        },
        {
          "m": "2025-03",
          "pos": 77.8,
          "neg": 13.3
        },
        {
          "m": "2025-04",
          "pos": 70.2,
          "neg": 19.3
        },
        {
          "m": "2025-05",
          "pos": 74.6,
          "neg": 11.1
        },
        {
          "m": "2025-06",
          "pos": 79.3,
          "neg": 8.6
        },
        {
          "m": "2025-07",
          "pos": 81.6,
          "neg": 4.1
        },
        {
          "m": "2025-08",
          "pos": 70.4,
          "neg": 9.3
        },
        {
          "m": "2025-09",
          "pos": 81.1,
          "neg": 1.9
        },
        {
          "m": "2025-10",
          "pos": 71.6,
          "neg": 4.5
        },
        {
          "m": "2025-11",
          "pos": 62.5,
          "neg": 20.0
        },
        {
          "m": "2025-12",
          "pos": 59.4,
          "neg": 20.3
        },
        {
          "m": "2026-01",
          "pos": 57.6,
          "neg": 18.6
        },
        {
          "m": "2026-02",
          "pos": 81.6,
          "neg": 14.3
        },
        {
          "m": "2026-03",
          "pos": 54.2,
          "neg": 10.4
        },
        {
          "m": "2026-04",
          "pos": 64.4,
          "neg": 17.8
        },
        {
          "m": "2026-05",
          "pos": 61.3,
          "neg": 19.4
        }
      ]
    },
    {
      "nome": "L5105-DOM PEDRO I (1457)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 87.0,
      "nps_ajust": 86.6,
      "delta": -0.3,
      "sent_medio": 0.64,
      "pct_pos": 76,
      "pct_neg": 12,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Loja Fisica"
      ],
      "top3_elogios": [
        "Atendimento",
        "Loja Fisica",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Comprei um saco de carvão de 5 quilos e avia algumas  pedras misturada no carvão!!\"",
        "\"Compro sempre frango e carne de boi \nMoída. Não está legal .vem bolotas grudadas que não soltam .(uso muito cru ) já rec\"",
        "\"Sou cliente desde o início da loja, acho que caiu um pouco a qualidade dos pridutis, era muito melhor.\nQuanto a organiza\"",
        "\"Promoções isso ajudaria bastante.\"",
        "\"Obrigada pelos produtos,\nFazem mais sobremesas ;)\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 85.2,
          "neg": 3.7
        },
        {
          "m": "2025-02",
          "pos": 56.2,
          "neg": 31.2
        },
        {
          "m": "2025-03",
          "pos": 57.1,
          "neg": 14.3
        },
        {
          "m": "2025-04",
          "pos": 69.6,
          "neg": 17.4
        },
        {
          "m": "2025-05",
          "pos": 65.5,
          "neg": 13.8
        },
        {
          "m": "2025-06",
          "pos": 70.3,
          "neg": 10.8
        },
        {
          "m": "2025-07",
          "pos": 75.0,
          "neg": 16.7
        },
        {
          "m": "2025-08",
          "pos": 76.5,
          "neg": 23.5
        },
        {
          "m": "2025-09",
          "pos": 85.2,
          "neg": 11.1
        },
        {
          "m": "2025-10",
          "pos": 62.9,
          "neg": 25.7
        },
        {
          "m": "2025-11",
          "pos": 86.5,
          "neg": 5.4
        },
        {
          "m": "2025-12",
          "pos": 85.2,
          "neg": 6.6
        },
        {
          "m": "2026-01",
          "pos": 83.8,
          "neg": 8.1
        },
        {
          "m": "2026-02",
          "pos": 72.4,
          "neg": 13.8
        },
        {
          "m": "2026-03",
          "pos": 68.8,
          "neg": 12.5
        },
        {
          "m": "2026-04",
          "pos": 69.6,
          "neg": 8.7
        },
        {
          "m": "2026-05",
          "pos": 94.1,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5106-GUILHERMINA (1516)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 90.2,
      "nps_ajust": 89.7,
      "delta": -0.5,
      "sent_medio": 0.74,
      "pct_pos": 82,
      "pct_neg": 9,
      "top3_problemas": [
        "Atendimento",
        "Abastecimento",
        "Produto"
      ],
      "top3_elogios": [
        "Atendimento",
        "Loja Fisica",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Gostaria de couve de Bruxelas\"",
        "\"Mais promoção na parte do peixes\"",
        "\"Amo carnes da Swift, porém desta vez não  tinha cupim temperado. Mas quem sabe na próxima.\"",
        "\"Trazendo sempre promoções.\"",
        "\"PIOR CARNE QUE COMI IGUAL SOLA DE SAPATO OU MELHOR NEM CONSEGUI COMER, NEM COZIDA NA PRESSÃO!!!\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 71.4,
          "neg": 14.3
        },
        {
          "m": "2025-02",
          "pos": 76.4,
          "neg": 12.7
        },
        {
          "m": "2025-03",
          "pos": 86.4,
          "neg": 8.5
        },
        {
          "m": "2025-04",
          "pos": 78.3,
          "neg": 8.7
        },
        {
          "m": "2025-05",
          "pos": 91.3,
          "neg": 5.8
        },
        {
          "m": "2025-06",
          "pos": 84.4,
          "neg": 8.9
        },
        {
          "m": "2025-07",
          "pos": 82.8,
          "neg": 8.6
        },
        {
          "m": "2025-08",
          "pos": 85.1,
          "neg": 6.4
        },
        {
          "m": "2025-09",
          "pos": 79.1,
          "neg": 4.7
        },
        {
          "m": "2025-10",
          "pos": 94.6,
          "neg": 0.0
        },
        {
          "m": "2025-11",
          "pos": 86.8,
          "neg": 2.6
        },
        {
          "m": "2025-12",
          "pos": 86.9,
          "neg": 4.9
        },
        {
          "m": "2026-01",
          "pos": 68.9,
          "neg": 18.0
        },
        {
          "m": "2026-02",
          "pos": 86.9,
          "neg": 6.6
        },
        {
          "m": "2026-03",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2026-04",
          "pos": 80.6,
          "neg": 13.9
        },
        {
          "m": "2026-05",
          "pos": 70.8,
          "neg": 12.5
        }
      ]
    },
    {
      "nome": "L5107-MANDAQUI (1521)",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 81.2,
      "nps_ajust": 81.5,
      "delta": 0.3,
      "sent_medio": 0.46,
      "pct_pos": 64,
      "pct_neg": 17,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Abastecimento",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Carne de qualidade\"",
        "\"Melhora  os  preços\"",
        "\"Itens promocionais / semanais\"",
        "\"melhores preços e opções\"",
        "\"A loja não serve para compras cotidianas, e no dia que fui para fazer um prato em especial, não encontrei as vieiras.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 56.8,
          "neg": 27.0
        },
        {
          "m": "2025-02",
          "pos": 78.6,
          "neg": 7.1
        },
        {
          "m": "2025-03",
          "pos": 54.5,
          "neg": 13.6
        },
        {
          "m": "2025-04",
          "pos": 68.0,
          "neg": 8.0
        },
        {
          "m": "2025-05",
          "pos": 63.6,
          "neg": 22.7
        },
        {
          "m": "2025-06",
          "pos": 76.2,
          "neg": 9.5
        },
        {
          "m": "2025-07",
          "pos": 73.7,
          "neg": 10.5
        },
        {
          "m": "2025-08",
          "pos": 86.7,
          "neg": 0.0
        },
        {
          "m": "2025-09",
          "pos": 37.5,
          "neg": 25.0
        },
        {
          "m": "2025-10",
          "pos": 64.7,
          "neg": 11.8
        },
        {
          "m": "2025-11",
          "pos": 64.3,
          "neg": 21.4
        },
        {
          "m": "2025-12",
          "pos": 69.2,
          "neg": 15.4
        },
        {
          "m": "2026-01",
          "pos": 62.5,
          "neg": 25.0
        },
        {
          "m": "2026-02",
          "pos": 57.1,
          "neg": 42.9
        },
        {
          "m": "2026-03",
          "pos": 52.9,
          "neg": 29.4
        },
        {
          "m": "2026-04",
          "pos": 56.2,
          "neg": 18.8
        },
        {
          "m": "2026-05",
          "pos": 63.6,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5108-MOGI DAS CRUZES (1527)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 87.7,
      "nps_ajust": 87.1,
      "delta": -0.6,
      "sent_medio": 0.57,
      "pct_pos": 71,
      "pct_neg": 14,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Reduzir fila nos caixas\"",
        "\"Muito bom estou gostando\"",
        "\"JÁ SOU CLIENTE, SEMPRE FUI BEM ATENDIDO NA LOJA DE MOGI DAS CRUZES, RECOMENDO.\"",
        "\"Enviando pelo Wats promoções e opções, seria ótimo\"",
        "\"Compro a picanha Combo mas às vezes vem macia e outras muita dura. Já passei vergonha com meus convidados !!!\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 73.5,
          "neg": 14.7
        },
        {
          "m": "2025-02",
          "pos": 56.0,
          "neg": 16.0
        },
        {
          "m": "2025-03",
          "pos": 55.6,
          "neg": 25.9
        },
        {
          "m": "2025-04",
          "pos": 56.5,
          "neg": 21.7
        },
        {
          "m": "2025-05",
          "pos": 73.9,
          "neg": 4.3
        },
        {
          "m": "2025-06",
          "pos": 69.2,
          "neg": 15.4
        },
        {
          "m": "2025-07",
          "pos": 76.5,
          "neg": 11.8
        },
        {
          "m": "2025-08",
          "pos": 83.3,
          "neg": 8.3
        },
        {
          "m": "2025-09",
          "pos": 67.9,
          "neg": 14.3
        },
        {
          "m": "2025-10",
          "pos": 82.6,
          "neg": 8.7
        },
        {
          "m": "2025-11",
          "pos": 82.4,
          "neg": 11.8
        },
        {
          "m": "2025-12",
          "pos": 71.8,
          "neg": 10.3
        },
        {
          "m": "2026-01",
          "pos": 63.6,
          "neg": 13.6
        },
        {
          "m": "2026-02",
          "pos": 94.1,
          "neg": 5.9
        },
        {
          "m": "2026-03",
          "pos": 71.4,
          "neg": 23.8
        },
        {
          "m": "2026-04",
          "pos": 83.3,
          "neg": 5.6
        },
        {
          "m": "2026-05",
          "pos": 53.3,
          "neg": 26.7
        }
      ]
    },
    {
      "nome": "L5109-SANTOS POMPEIA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 83.5,
      "nps_ajust": 83.6,
      "delta": 0.1,
      "sent_medio": 0.59,
      "pct_pos": 71,
      "pct_neg": 12,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Loja Fisica",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Gostaria de saber por qual motivo a atendente do caixa solicita o CPF. \nPerguntei, a atendente não soube responder.\"",
        "\"Abastecimento da loja , faltavam muitos produtos. A loja da Ana Costa é mais organizada\"",
        "\"NÃO TRABALHAR COM PRODUTOS COMBO. PELA TERCEIRA VEZ TIVE QUE VOLTAR PARA DEVOLVER BANANINHA. UM VERDADEIRO PACOTE DE COI\"",
        "\"Acho que.nao deveriam varrer a loja, empurrar geladeiras , durante o horário de funcionamento. Causa  má impressão e não\"",
        "\"Muitos itens que pedi originalmente, vieram escritos depois como não disponível ou que não podiam entregar,  sendo que e\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 47.4,
          "neg": 31.6
        },
        {
          "m": "2025-02",
          "pos": 63.6,
          "neg": 15.2
        },
        {
          "m": "2025-03",
          "pos": 76.1,
          "neg": 4.3
        },
        {
          "m": "2025-04",
          "pos": 66.0,
          "neg": 5.7
        },
        {
          "m": "2025-05",
          "pos": 88.2,
          "neg": 2.0
        },
        {
          "m": "2025-06",
          "pos": 87.2,
          "neg": 8.5
        },
        {
          "m": "2025-07",
          "pos": 72.0,
          "neg": 12.0
        },
        {
          "m": "2025-08",
          "pos": 73.8,
          "neg": 7.1
        },
        {
          "m": "2025-09",
          "pos": 70.8,
          "neg": 18.8
        },
        {
          "m": "2025-10",
          "pos": 78.0,
          "neg": 7.3
        },
        {
          "m": "2025-11",
          "pos": 79.3,
          "neg": 3.4
        },
        {
          "m": "2025-12",
          "pos": 78.7,
          "neg": 8.5
        },
        {
          "m": "2026-01",
          "pos": 62.8,
          "neg": 17.0
        },
        {
          "m": "2026-02",
          "pos": 69.8,
          "neg": 9.3
        },
        {
          "m": "2026-03",
          "pos": 75.8,
          "neg": 12.1
        },
        {
          "m": "2026-04",
          "pos": 67.3,
          "neg": 11.5
        },
        {
          "m": "2026-05",
          "pos": 65.9,
          "neg": 22.0
        }
      ]
    },
    {
      "nome": "L5111-VINHEDO",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 90.8,
      "nps_ajust": 90.9,
      "delta": 0.2,
      "sent_medio": 0.71,
      "pct_pos": 80,
      "pct_neg": 9,
      "top3_problemas": [
        "Promocoes Fidelidade",
        "Produto",
        "Abastecimento"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Promocoes Fidelidade",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Ótimo lugar para comprar de tudo.\nMuitos produtos variados e o atendimento do Matheus  perfeito.\"",
        "\"Não encontrei mais, bobo de camarão, arroz marroquino e costelinha de tambaqui, falaram que parou de vender, gostaria de\"",
        "\"Tudo ótimo  desde do atendimento ate produtos.\"",
        "\"O preço é alto a quantidade e boa.\"",
        "\"Só faltou a rã.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 75.9,
          "neg": 13.8
        },
        {
          "m": "2025-02",
          "pos": 76.9,
          "neg": 23.1
        },
        {
          "m": "2025-03",
          "pos": 83.3,
          "neg": 8.3
        },
        {
          "m": "2025-04",
          "pos": 58.8,
          "neg": 23.5
        },
        {
          "m": "2025-05",
          "pos": 92.0,
          "neg": 8.0
        },
        {
          "m": "2025-06",
          "pos": 100.0,
          "neg": 0.0
        },
        {
          "m": "2025-07",
          "pos": 100.0,
          "neg": 0.0
        },
        {
          "m": "2025-08",
          "pos": 78.6,
          "neg": 14.3
        },
        {
          "m": "2025-09",
          "pos": 84.6,
          "neg": 0.0
        },
        {
          "m": "2025-10",
          "pos": 81.8,
          "neg": 0.0
        },
        {
          "m": "2025-11",
          "pos": 66.7,
          "neg": 0.0
        },
        {
          "m": "2025-12",
          "pos": 70.0,
          "neg": 15.0
        },
        {
          "m": "2026-01",
          "pos": 100.0,
          "neg": 0.0
        },
        {
          "m": "2026-02",
          "pos": 66.7,
          "neg": 9.1
        },
        {
          "m": "2026-03",
          "pos": 93.3,
          "neg": 0.0
        },
        {
          "m": "2026-04",
          "pos": 83.3,
          "neg": 8.3
        },
        {
          "m": "2026-05",
          "pos": 100.0,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5112-BAURU",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 88.5,
      "nps_ajust": 88.2,
      "delta": -0.3,
      "sent_medio": 0.6,
      "pct_pos": 73,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Abastecimento",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Mantendo o padrão está muito bom\"",
        "\"Qualidade é tudo ...\"",
        "\"Faz 21 dias que tento comprar 2 pacotes de croissant de chocolate e não consigo. Vou toda quinta-feira e pergunto se che\"",
        "\"Tentar melhorar nos preços!\"",
        "\"no momento para mim está td bom!!!\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2025-02",
          "pos": 100.0,
          "neg": 0.0
        },
        {
          "m": "2025-03",
          "pos": 84.6,
          "neg": 0.0
        },
        {
          "m": "2025-04",
          "pos": 66.7,
          "neg": 25.0
        },
        {
          "m": "2025-05",
          "pos": 65.4,
          "neg": 23.1
        },
        {
          "m": "2025-06",
          "pos": 86.4,
          "neg": 9.1
        },
        {
          "m": "2025-07",
          "pos": 66.7,
          "neg": 11.1
        },
        {
          "m": "2025-08",
          "pos": 79.2,
          "neg": 12.5
        },
        {
          "m": "2025-09",
          "pos": 72.2,
          "neg": 11.1
        },
        {
          "m": "2025-10",
          "pos": 72.7,
          "neg": 18.2
        },
        {
          "m": "2025-11",
          "pos": 84.2,
          "neg": 15.8
        },
        {
          "m": "2025-12",
          "pos": 55.6,
          "neg": 25.9
        },
        {
          "m": "2026-01",
          "pos": 68.8,
          "neg": 12.5
        },
        {
          "m": "2026-02",
          "pos": 70.0,
          "neg": 5.0
        },
        {
          "m": "2026-03",
          "pos": 88.0,
          "neg": 4.0
        },
        {
          "m": "2026-04",
          "pos": 58.1,
          "neg": 16.1
        },
        {
          "m": "2026-05",
          "pos": 66.7,
          "neg": 16.7
        }
      ]
    },
    {
      "nome": "L5113-ANASTACIO",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 83.9,
      "nps_ajust": 83.3,
      "delta": -0.5,
      "sent_medio": 0.47,
      "pct_pos": 63,
      "pct_neg": 16,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Loja Fisica",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Faz tempo que não encontro o petiscos de file mignon enrolados no bacon e também não encontrei o empanado de frango kara\"",
        "\"OBS: o espetinho de carne bovina tem vindo \"desmontado\", a carne fora e/ou caindo do espeto.\"",
        "\"A pessoa que estava no caixa não estava bem, cara fechada seco e grosso.  Fui atrás de angus e Prime ribs não achei.  te\"",
        "\"Colocando mais funcionários,o atendimento da loja da av do Anastácio era ótima,agora está péssima\"",
        "\"Não mudar tanto os produtos de lugar, sei que é o marketing de vcs para andarmos mais nas loja mas quando a loja está ch\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 62.1,
          "neg": 13.8
        },
        {
          "m": "2025-02",
          "pos": 61.9,
          "neg": 9.5
        },
        {
          "m": "2025-03",
          "pos": 76.9,
          "neg": 7.7
        },
        {
          "m": "2025-04",
          "pos": 52.4,
          "neg": 23.8
        },
        {
          "m": "2025-05",
          "pos": 65.5,
          "neg": 27.6
        },
        {
          "m": "2025-06",
          "pos": 66.7,
          "neg": 18.2
        },
        {
          "m": "2025-07",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2025-08",
          "pos": 66.7,
          "neg": 4.8
        },
        {
          "m": "2025-09",
          "pos": 75.0,
          "neg": 0.0
        },
        {
          "m": "2025-10",
          "pos": 60.0,
          "neg": 12.5
        },
        {
          "m": "2025-11",
          "pos": 77.3,
          "neg": 9.1
        },
        {
          "m": "2025-12",
          "pos": 67.4,
          "neg": 16.3
        },
        {
          "m": "2026-01",
          "pos": 47.4,
          "neg": 28.9
        },
        {
          "m": "2026-02",
          "pos": 64.3,
          "neg": 17.9
        },
        {
          "m": "2026-03",
          "pos": 56.7,
          "neg": 16.7
        },
        {
          "m": "2026-04",
          "pos": 59.3,
          "neg": 22.2
        },
        {
          "m": "2026-05",
          "pos": 42.9,
          "neg": 28.6
        }
      ]
    },
    {
      "nome": "L5114-106 ASA SUL",
      "flag": "regular",
      "uf": "DF",
      "nps_trad": 85.3,
      "nps_ajust": 84.7,
      "delta": -0.5,
      "sent_medio": 0.52,
      "pct_pos": 65,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Abastecimento",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"A melhoria pela qualidade deve ser continua.\"",
        "\"tive problemas com a entrega... veio por meio de Uber, cara estava com localização errada,...ficou nervoso...queria que \"",
        "\"Peguei uma picanha que estava no local onde o preço era bem razoável. A atendente até falou que era boa e de menor preço\"",
        "\"Diminuindo o valor dos produtos.\"",
        "\"Evitar etiquetas  de promoções  em letras  grandes,  e em letras  miúdas,  só  vale para levar mais de uma unidade.  Con\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 63.6,
          "neg": 4.5
        },
        {
          "m": "2025-02",
          "pos": 52.0,
          "neg": 20.0
        },
        {
          "m": "2025-03",
          "pos": 68.2,
          "neg": 13.6
        },
        {
          "m": "2025-04",
          "pos": 68.2,
          "neg": 13.6
        },
        {
          "m": "2025-05",
          "pos": 67.7,
          "neg": 6.5
        },
        {
          "m": "2025-06",
          "pos": 67.7,
          "neg": 6.5
        },
        {
          "m": "2025-07",
          "pos": 70.8,
          "neg": 12.5
        },
        {
          "m": "2025-08",
          "pos": 61.9,
          "neg": 19.0
        },
        {
          "m": "2025-09",
          "pos": 73.1,
          "neg": 11.5
        },
        {
          "m": "2025-10",
          "pos": 61.5,
          "neg": 7.7
        },
        {
          "m": "2025-11",
          "pos": 72.7,
          "neg": 0.0
        },
        {
          "m": "2025-12",
          "pos": 63.2,
          "neg": 21.1
        },
        {
          "m": "2026-01",
          "pos": 62.5,
          "neg": 20.8
        },
        {
          "m": "2026-02",
          "pos": 75.0,
          "neg": 12.5
        },
        {
          "m": "2026-03",
          "pos": 70.0,
          "neg": 25.0
        },
        {
          "m": "2026-04",
          "pos": 57.9,
          "neg": 21.1
        },
        {
          "m": "2026-05",
          "pos": 45.5,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5116-ENSEADA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 89.1,
      "nps_ajust": 88.7,
      "delta": -0.4,
      "sent_medio": 0.64,
      "pct_pos": 76,
      "pct_neg": 12,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"entao.. dificil responder acima pq organização nem sempre estao nos lugares corretos os produtos, valores o mesmo dos su\"",
        "\"Não confio nos JBS, não gosto de injeções de água com sabe-se lá o que,e o preço tem o truque de 400gr 600 Gr 900 gramos\"",
        "\"Só acho que a entrega é muito demorada, hoje compramos em mercado pelo iFood 30, 40 itens e em 2 horas no máximo estamos\"",
        "\"Mais opções em peixes e frutos do mar. Ex: atum\"",
        "\"Com mais promoções\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 65.1,
          "neg": 20.9
        },
        {
          "m": "2025-02",
          "pos": 63.6,
          "neg": 18.2
        },
        {
          "m": "2025-03",
          "pos": 67.9,
          "neg": 21.4
        },
        {
          "m": "2025-04",
          "pos": 92.9,
          "neg": 7.1
        },
        {
          "m": "2025-05",
          "pos": 77.4,
          "neg": 3.2
        },
        {
          "m": "2025-06",
          "pos": 65.4,
          "neg": 15.4
        },
        {
          "m": "2025-07",
          "pos": 64.3,
          "neg": 14.3
        },
        {
          "m": "2025-08",
          "pos": 90.6,
          "neg": 6.2
        },
        {
          "m": "2025-09",
          "pos": 64.0,
          "neg": 20.0
        },
        {
          "m": "2025-10",
          "pos": 86.2,
          "neg": 6.9
        },
        {
          "m": "2025-11",
          "pos": 82.1,
          "neg": 10.7
        },
        {
          "m": "2025-12",
          "pos": 75.7,
          "neg": 8.1
        },
        {
          "m": "2026-01",
          "pos": 71.9,
          "neg": 15.6
        },
        {
          "m": "2026-02",
          "pos": 87.0,
          "neg": 13.0
        },
        {
          "m": "2026-03",
          "pos": 68.0,
          "neg": 12.0
        },
        {
          "m": "2026-04",
          "pos": 83.3,
          "neg": 6.7
        },
        {
          "m": "2026-05",
          "pos": 90.5,
          "neg": 9.5
        }
      ]
    },
    {
      "nome": "L5117-NOVA GRANADA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 88.1,
      "nps_ajust": 88.0,
      "delta": -0.2,
      "sent_medio": 0.78,
      "pct_pos": 85,
      "pct_neg": 7,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"O preço  que me mandaram não  foi o que passou no caixa e desisti  da compra informaram que era só no site e não  teve u\"",
        "\"Sou Autista e não existe nas lojas atendimento para pessoas com necessidades especiais.\nRecentemente tive uma crise agua\"",
        "\"Dar mais desconto.\"",
        "\"Informar o preço no produto\"",
        "\"Aceitar pagamrntopor vale alimentação online\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 77.6,
          "neg": 16.3
        },
        {
          "m": "2025-02",
          "pos": 77.6,
          "neg": 14.3
        },
        {
          "m": "2025-03",
          "pos": 73.2,
          "neg": 9.8
        },
        {
          "m": "2025-04",
          "pos": 82.6,
          "neg": 8.7
        },
        {
          "m": "2025-05",
          "pos": 91.0,
          "neg": 4.5
        },
        {
          "m": "2025-06",
          "pos": 82.8,
          "neg": 7.1
        },
        {
          "m": "2025-07",
          "pos": 86.1,
          "neg": 8.3
        },
        {
          "m": "2025-08",
          "pos": 85.7,
          "neg": 9.5
        },
        {
          "m": "2025-09",
          "pos": 63.4,
          "neg": 14.6
        },
        {
          "m": "2025-10",
          "pos": 82.0,
          "neg": 10.1
        },
        {
          "m": "2025-11",
          "pos": 92.6,
          "neg": 1.5
        },
        {
          "m": "2025-12",
          "pos": 92.1,
          "neg": 4.7
        },
        {
          "m": "2026-01",
          "pos": 87.0,
          "neg": 7.2
        },
        {
          "m": "2026-02",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2026-03",
          "pos": 90.7,
          "neg": 7.0
        },
        {
          "m": "2026-04",
          "pos": 92.9,
          "neg": 1.2
        },
        {
          "m": "2026-05",
          "pos": 87.2,
          "neg": 4.3
        }
      ]
    },
    {
      "nome": "L5118-ARACATUBA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 91.4,
      "nps_ajust": 90.9,
      "delta": -0.4,
      "sent_medio": 0.71,
      "pct_pos": 80,
      "pct_neg": 9,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Produto"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Loja Fisica",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"não fechando lojas físicas\"",
        "\"Mantendo as promoções diversas dos produtos\"",
        "\"Preços estão muito alto.\"",
        "\"Está muito bom com a qualidade, atendimento espaco fisico\"",
        "\"Não deixando faltar produtos\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 75.0,
          "neg": 18.8
        },
        {
          "m": "2025-02",
          "pos": 88.9,
          "neg": 0.0
        },
        {
          "m": "2025-03",
          "pos": 61.5,
          "neg": 30.8
        },
        {
          "m": "2025-04",
          "pos": 71.4,
          "neg": 14.3
        },
        {
          "m": "2025-05",
          "pos": 83.3,
          "neg": 11.1
        },
        {
          "m": "2025-06",
          "pos": 85.0,
          "neg": 10.0
        },
        {
          "m": "2025-07",
          "pos": 63.6,
          "neg": 9.1
        },
        {
          "m": "2025-08",
          "pos": 81.8,
          "neg": 0.0
        },
        {
          "m": "2025-09",
          "pos": 93.8,
          "neg": 6.2
        },
        {
          "m": "2025-10",
          "pos": 83.3,
          "neg": 11.1
        },
        {
          "m": "2025-11",
          "pos": 81.8,
          "neg": 9.1
        },
        {
          "m": "2025-12",
          "pos": 85.7,
          "neg": 7.1
        },
        {
          "m": "2026-01",
          "pos": 95.2,
          "neg": 4.8
        },
        {
          "m": "2026-02",
          "pos": 75.0,
          "neg": 8.3
        },
        {
          "m": "2026-03",
          "pos": 93.3,
          "neg": 0.0
        },
        {
          "m": "2026-04",
          "pos": 53.8,
          "neg": 15.4
        },
        {
          "m": "2026-05",
          "pos": 70.0,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5119-AGUAS CLARAS (ARAUCARIAS)",
      "flag": "regular",
      "uf": "DF",
      "nps_trad": 87.6,
      "nps_ajust": 87.2,
      "delta": -0.4,
      "sent_medio": 0.55,
      "pct_pos": 69,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Abastecimento",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Mais disponibilidade de produtos mais procurados, como filé de peito de frango(o comum, sem ser a versão “Mais” e temper\"",
        "\"Aceitar vale refeição (afinal, vcs também vendem refeições prontas).\"",
        "\"Nunca recebi um promoção vinculada ao meu CPF. Em toda compra informo , tenho cadastro.  Mas mão serve para  nada\"",
        "\"É uma pena ser quase tudo muito caro. Mas as vezes gosto de comprar.\"",
        "\"Preços mais em conta, promoções mais recorrentes, etc.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 84.6,
          "neg": 2.6
        },
        {
          "m": "2025-02",
          "pos": 66.7,
          "neg": 4.2
        },
        {
          "m": "2025-03",
          "pos": 64.5,
          "neg": 12.9
        },
        {
          "m": "2025-04",
          "pos": 52.4,
          "neg": 14.3
        },
        {
          "m": "2025-05",
          "pos": 67.9,
          "neg": 17.9
        },
        {
          "m": "2025-06",
          "pos": 67.3,
          "neg": 14.5
        },
        {
          "m": "2025-07",
          "pos": 70.4,
          "neg": 3.7
        },
        {
          "m": "2025-08",
          "pos": 81.8,
          "neg": 2.3
        },
        {
          "m": "2025-09",
          "pos": 72.7,
          "neg": 9.1
        },
        {
          "m": "2025-10",
          "pos": 48.3,
          "neg": 34.5
        },
        {
          "m": "2025-11",
          "pos": 76.5,
          "neg": 11.8
        },
        {
          "m": "2025-12",
          "pos": 71.9,
          "neg": 12.5
        },
        {
          "m": "2026-01",
          "pos": 59.3,
          "neg": 22.2
        },
        {
          "m": "2026-02",
          "pos": 63.0,
          "neg": 14.8
        },
        {
          "m": "2026-03",
          "pos": 65.6,
          "neg": 15.6
        },
        {
          "m": "2026-04",
          "pos": 61.3,
          "neg": 25.8
        },
        {
          "m": "2026-05",
          "pos": 77.4,
          "neg": 9.7
        }
      ]
    },
    {
      "nome": "L5120-ITU",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 90.4,
      "nps_ajust": 90.1,
      "delta": -0.4,
      "sent_medio": 0.62,
      "pct_pos": 73,
      "pct_neg": 11,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Loja Fisica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Loja Fisica",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Foi tudo perfeito que acredito que não tem o que melhorar\"",
        "\"Falta de alguns produtos que estavam em oferta.\"",
        "\"Não consegui fazer pagamento por Pix no app\"",
        "\"Voltar a embalagens antigas  com os ótimos fechamentos.\"",
        "\"achei o frete muito caro para uma distância tao curta… de outros lugares nas proximidades custa no max 8 reais, mas com \""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 74.2,
          "neg": 12.9
        },
        {
          "m": "2025-02",
          "pos": 65.0,
          "neg": 15.0
        },
        {
          "m": "2025-03",
          "pos": 66.7,
          "neg": 12.5
        },
        {
          "m": "2025-04",
          "pos": 73.7,
          "neg": 10.5
        },
        {
          "m": "2025-05",
          "pos": 83.3,
          "neg": 6.7
        },
        {
          "m": "2025-06",
          "pos": 73.5,
          "neg": 11.8
        },
        {
          "m": "2025-07",
          "pos": 71.9,
          "neg": 12.5
        },
        {
          "m": "2025-08",
          "pos": 70.6,
          "neg": 8.8
        },
        {
          "m": "2025-09",
          "pos": 76.9,
          "neg": 7.7
        },
        {
          "m": "2025-10",
          "pos": 74.2,
          "neg": 9.7
        },
        {
          "m": "2025-11",
          "pos": 70.6,
          "neg": 5.9
        },
        {
          "m": "2025-12",
          "pos": 87.5,
          "neg": 9.4
        },
        {
          "m": "2026-01",
          "pos": 64.7,
          "neg": 14.7
        },
        {
          "m": "2026-02",
          "pos": 74.2,
          "neg": 3.2
        },
        {
          "m": "2026-03",
          "pos": 61.5,
          "neg": 23.1
        },
        {
          "m": "2026-04",
          "pos": 76.2,
          "neg": 9.5
        },
        {
          "m": "2026-05",
          "pos": 63.2,
          "neg": 10.5
        }
      ]
    },
    {
      "nome": "L5121-VILA MASCOTE",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 83.5,
      "nps_ajust": 83.1,
      "delta": -0.4,
      "sent_medio": 0.53,
      "pct_pos": 67,
      "pct_neg": 15,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Atendimento",
        "Abastecimento",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Mais ofertas e encontrar todos o produtos, já fui várias vezes, procurar coxa com sobrecoxa desossada e temperada e não \"",
        "\"Ótimo atendimento Rafaela\"",
        "\"Gosto muito de comprar na Swift tanto churrasco como frutas congeladas muito bom mesmo\"",
        "\"Preços altos, funcionarios nao sabiam explicar quais carnes sao para bife e file, e os produtos estavam desorganizados d\"",
        "\"Não tinha bastante coisa e quando tinha era 1 ou 2\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 80.5,
          "neg": 9.8
        },
        {
          "m": "2025-02",
          "pos": 78.3,
          "neg": 4.3
        },
        {
          "m": "2025-03",
          "pos": 63.0,
          "neg": 22.2
        },
        {
          "m": "2025-04",
          "pos": 71.1,
          "neg": 18.4
        },
        {
          "m": "2025-05",
          "pos": 65.1,
          "neg": 18.6
        },
        {
          "m": "2025-06",
          "pos": 58.9,
          "neg": 16.1
        },
        {
          "m": "2025-07",
          "pos": 73.7,
          "neg": 7.9
        },
        {
          "m": "2025-08",
          "pos": 63.4,
          "neg": 4.9
        },
        {
          "m": "2025-09",
          "pos": 60.5,
          "neg": 10.5
        },
        {
          "m": "2025-10",
          "pos": 57.9,
          "neg": 15.8
        },
        {
          "m": "2025-11",
          "pos": 71.1,
          "neg": 15.8
        },
        {
          "m": "2025-12",
          "pos": 76.3,
          "neg": 10.5
        },
        {
          "m": "2026-01",
          "pos": 65.2,
          "neg": 21.7
        },
        {
          "m": "2026-02",
          "pos": 59.5,
          "neg": 18.9
        },
        {
          "m": "2026-03",
          "pos": 68.6,
          "neg": 22.9
        },
        {
          "m": "2026-04",
          "pos": 70.4,
          "neg": 11.1
        },
        {
          "m": "2026-05",
          "pos": 66.7,
          "neg": 26.7
        }
      ]
    },
    {
      "nome": "L5122-PONTE RASA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 88.2,
      "nps_ajust": 87.9,
      "delta": -0.4,
      "sent_medio": 0.62,
      "pct_pos": 73,
      "pct_neg": 10,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Oferecendo cupom de desconto.\"",
        "\"Já está ótimo funcionários excelente atendimento\"",
        "\"Maior oferta de produtos\"",
        "\"Está tudo de acordo com minha satisfação.\"",
        "\"Não vejo necessidade de alterar nada. Está ótimo!\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 75.0,
          "neg": 10.0
        },
        {
          "m": "2025-02",
          "pos": 81.8,
          "neg": 9.1
        },
        {
          "m": "2025-03",
          "pos": 75.0,
          "neg": 11.4
        },
        {
          "m": "2025-04",
          "pos": 68.1,
          "neg": 4.3
        },
        {
          "m": "2025-05",
          "pos": 61.8,
          "neg": 14.7
        },
        {
          "m": "2025-06",
          "pos": 79.2,
          "neg": 7.5
        },
        {
          "m": "2025-07",
          "pos": 82.4,
          "neg": 2.9
        },
        {
          "m": "2025-08",
          "pos": 83.0,
          "neg": 4.3
        },
        {
          "m": "2025-09",
          "pos": 69.2,
          "neg": 10.3
        },
        {
          "m": "2025-10",
          "pos": 56.8,
          "neg": 25.0
        },
        {
          "m": "2025-11",
          "pos": 66.7,
          "neg": 11.9
        },
        {
          "m": "2025-12",
          "pos": 69.4,
          "neg": 10.2
        },
        {
          "m": "2026-01",
          "pos": 72.1,
          "neg": 14.0
        },
        {
          "m": "2026-02",
          "pos": 83.3,
          "neg": 2.1
        },
        {
          "m": "2026-03",
          "pos": 76.0,
          "neg": 12.0
        },
        {
          "m": "2026-04",
          "pos": 62.2,
          "neg": 15.6
        },
        {
          "m": "2026-05",
          "pos": 68.2,
          "neg": 18.2
        }
      ]
    },
    {
      "nome": "L5123-SAO VICENTE",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 88.0,
      "nps_ajust": 87.7,
      "delta": -0.3,
      "sent_medio": 0.6,
      "pct_pos": 73,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Não encontrei meia asa da Seara temperada, havia uma outra opção mas não estava aparentemente parecendo de qualidade l\"",
        "\"Referente os espetos de carne, 1° tem alguns espetos que sai prefeito porém tem outros que se desfaz todo e 2° tem algun\"",
        "\"Mais variedade de pratos prontos, tb o filé de tilapia em pacotes de 400grs.\"",
        "\"Mais facilidade na hora de escolher a entrega. A opção de entrega fica por último, deveria ser a primeira.\"",
        "\"Continuar como sempre, gentis e atencioso! E os produtos são excelentes..\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 74.6,
          "neg": 14.3
        },
        {
          "m": "2025-02",
          "pos": 76.7,
          "neg": 13.3
        },
        {
          "m": "2025-03",
          "pos": 70.8,
          "neg": 16.7
        },
        {
          "m": "2025-04",
          "pos": 56.2,
          "neg": 15.6
        },
        {
          "m": "2025-05",
          "pos": 68.0,
          "neg": 14.0
        },
        {
          "m": "2025-06",
          "pos": 78.2,
          "neg": 14.5
        },
        {
          "m": "2025-07",
          "pos": 76.9,
          "neg": 10.3
        },
        {
          "m": "2025-08",
          "pos": 68.3,
          "neg": 10.0
        },
        {
          "m": "2025-09",
          "pos": 74.0,
          "neg": 16.0
        },
        {
          "m": "2025-10",
          "pos": 73.5,
          "neg": 11.8
        },
        {
          "m": "2025-11",
          "pos": 63.3,
          "neg": 13.3
        },
        {
          "m": "2025-12",
          "pos": 79.2,
          "neg": 11.3
        },
        {
          "m": "2026-01",
          "pos": 75.3,
          "neg": 12.3
        },
        {
          "m": "2026-02",
          "pos": 76.9,
          "neg": 11.5
        },
        {
          "m": "2026-03",
          "pos": 66.7,
          "neg": 10.3
        },
        {
          "m": "2026-04",
          "pos": 70.0,
          "neg": 7.5
        },
        {
          "m": "2026-05",
          "pos": 71.9,
          "neg": 12.5
        }
      ]
    },
    {
      "nome": "L5124-BOTUCATU",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 90.5,
      "nps_ajust": 90.3,
      "delta": -0.1,
      "sent_medio": 0.67,
      "pct_pos": 78,
      "pct_neg": 11,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Loja Fisica",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Uma loja bem acessível, om estacionamento, produtos de qualidade e com uma boa variedade. Continuem assim.\"",
        "\"Não encontrei dois produtos, não deixando faltar...para não ter que ir em outro lugar, ou melhor no concorrente\"",
        "\"Como citei, com relação ao atendimento , tranquilo, porém, comprei um contra filé combo, que estava na promoção,  inform\"",
        "\"Ter mais estoque das ofertas\"",
        "\"Amo a Swift de Botucatu , atendentes muitos solícitos !\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 75.0,
          "neg": 8.3
        },
        {
          "m": "2025-02",
          "pos": 90.0,
          "neg": 10.0
        },
        {
          "m": "2025-03",
          "pos": 70.6,
          "neg": 17.6
        },
        {
          "m": "2025-04",
          "pos": 77.8,
          "neg": 0.0
        },
        {
          "m": "2025-05",
          "pos": 100.0,
          "neg": 0.0
        },
        {
          "m": "2025-06",
          "pos": 85.0,
          "neg": 5.0
        },
        {
          "m": "2025-07",
          "pos": 73.3,
          "neg": 20.0
        },
        {
          "m": "2025-08",
          "pos": 62.5,
          "neg": 16.7
        },
        {
          "m": "2025-09",
          "pos": 71.9,
          "neg": 18.8
        },
        {
          "m": "2025-10",
          "pos": 71.4,
          "neg": 21.4
        },
        {
          "m": "2025-11",
          "pos": 53.8,
          "neg": 15.4
        },
        {
          "m": "2025-12",
          "pos": 78.6,
          "neg": 14.3
        },
        {
          "m": "2026-01",
          "pos": 73.7,
          "neg": 15.8
        },
        {
          "m": "2026-02",
          "pos": 86.7,
          "neg": 0.0
        },
        {
          "m": "2026-03",
          "pos": 92.0,
          "neg": 4.0
        },
        {
          "m": "2026-04",
          "pos": 66.7,
          "neg": 16.7
        },
        {
          "m": "2026-05",
          "pos": 93.3,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5126-CELSO GARCIA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 88.9,
      "nps_ajust": 88.6,
      "delta": -0.3,
      "sent_medio": 0.63,
      "pct_pos": 75,
      "pct_neg": 12,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Bom dia o pacote de 800 gr de tilápia tinha somente 03 filés.\nOu seja peças muito grande para consumo.\nNormalmente são 0\"",
        "\"Salsicha hot dog defumada\"",
        "\"Adoro comprar na Swift, tudo é de muito boa qualidade mas acredito que poderia ter um preço um pouco melhor. Sei que são\"",
        "\"Promoções e preços , os espetos de carnes ultimamente tem se desfeito quando coloca na churraqueira\"",
        "\"Durante ano inteiro procurei FRANGO DEFUMADO e nunca encontrei\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 77.6,
          "neg": 10.4
        },
        {
          "m": "2025-02",
          "pos": 79.1,
          "neg": 9.3
        },
        {
          "m": "2025-03",
          "pos": 83.3,
          "neg": 4.8
        },
        {
          "m": "2025-04",
          "pos": 70.5,
          "neg": 15.9
        },
        {
          "m": "2025-05",
          "pos": 67.6,
          "neg": 20.6
        },
        {
          "m": "2025-06",
          "pos": 87.5,
          "neg": 7.5
        },
        {
          "m": "2025-07",
          "pos": 69.0,
          "neg": 10.3
        },
        {
          "m": "2025-08",
          "pos": 80.0,
          "neg": 12.0
        },
        {
          "m": "2025-09",
          "pos": 78.6,
          "neg": 2.4
        },
        {
          "m": "2025-10",
          "pos": 75.0,
          "neg": 15.0
        },
        {
          "m": "2025-11",
          "pos": 83.3,
          "neg": 8.3
        },
        {
          "m": "2025-12",
          "pos": 78.9,
          "neg": 13.2
        },
        {
          "m": "2026-01",
          "pos": 68.6,
          "neg": 8.6
        },
        {
          "m": "2026-02",
          "pos": 70.3,
          "neg": 18.9
        },
        {
          "m": "2026-03",
          "pos": 69.4,
          "neg": 16.7
        },
        {
          "m": "2026-04",
          "pos": 63.3,
          "neg": 14.3
        },
        {
          "m": "2026-05",
          "pos": 67.9,
          "neg": 14.3
        }
      ]
    },
    {
      "nome": "L5127-SAO ROQUE",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 91.6,
      "nps_ajust": 91.4,
      "delta": -0.2,
      "sent_medio": 0.67,
      "pct_pos": 76,
      "pct_neg": 9,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Abastecimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Preços fica uma bagunçado.\n\"",
        "\"Tudo tá ótimo\"",
        "\"Com preços menores,os produtos são bons,mas os preços estão salgados obrigada!!\"",
        "\"Se melhorar estraga!\"",
        "\"Mais ofertas nos fds\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 70.6,
          "neg": 8.8
        },
        {
          "m": "2025-02",
          "pos": 72.7,
          "neg": 9.1
        },
        {
          "m": "2025-03",
          "pos": 74.2,
          "neg": 16.1
        },
        {
          "m": "2025-04",
          "pos": 80.8,
          "neg": 7.7
        },
        {
          "m": "2025-05",
          "pos": 85.5,
          "neg": 7.3
        },
        {
          "m": "2025-06",
          "pos": 65.9,
          "neg": 7.3
        },
        {
          "m": "2025-07",
          "pos": 78.0,
          "neg": 12.2
        },
        {
          "m": "2025-08",
          "pos": 82.4,
          "neg": 8.8
        },
        {
          "m": "2025-09",
          "pos": 69.4,
          "neg": 11.1
        },
        {
          "m": "2025-10",
          "pos": 78.0,
          "neg": 4.0
        },
        {
          "m": "2025-11",
          "pos": 80.0,
          "neg": 8.6
        },
        {
          "m": "2025-12",
          "pos": 81.0,
          "neg": 3.4
        },
        {
          "m": "2026-01",
          "pos": 72.7,
          "neg": 9.1
        },
        {
          "m": "2026-02",
          "pos": 68.2,
          "neg": 11.4
        },
        {
          "m": "2026-03",
          "pos": 86.7,
          "neg": 6.7
        },
        {
          "m": "2026-04",
          "pos": 74.5,
          "neg": 17.0
        },
        {
          "m": "2026-05",
          "pos": 54.2,
          "neg": 8.3
        }
      ]
    },
    {
      "nome": "L5129-REAL PARQUE",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 89.2,
      "nps_ajust": 88.5,
      "delta": -0.7,
      "sent_medio": 0.66,
      "pct_pos": 77,
      "pct_neg": 11,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Loja limpa e organizada,  já fui em outras swift  mais a do real parque até agora foi a melhor, atendentes ótimos,  só o\"",
        "\"Que vc continuar com esse bom atendimento\"",
        "\"É a primeira vez que a entrega não foi feita no dia (sábado, entre 9h-11h dia 6 de março), queria pelo menos um aviso de\"",
        "\"Entrega incrivel, pontual e tudo da melhor qualidade!\"",
        "\"Mantenham a qualidade\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 69.2,
          "neg": 0.0
        },
        {
          "m": "2025-02",
          "pos": 66.7,
          "neg": 20.0
        },
        {
          "m": "2025-03",
          "pos": 81.8,
          "neg": 18.2
        },
        {
          "m": "2025-04",
          "pos": 66.7,
          "neg": 20.0
        },
        {
          "m": "2025-05",
          "pos": 76.0,
          "neg": 12.0
        },
        {
          "m": "2025-06",
          "pos": 78.6,
          "neg": 14.3
        },
        {
          "m": "2025-07",
          "pos": 81.0,
          "neg": 14.3
        },
        {
          "m": "2025-08",
          "pos": 81.0,
          "neg": 9.5
        },
        {
          "m": "2025-09",
          "pos": 76.0,
          "neg": 4.0
        },
        {
          "m": "2025-10",
          "pos": 75.0,
          "neg": 5.0
        },
        {
          "m": "2025-11",
          "pos": 61.1,
          "neg": 16.7
        },
        {
          "m": "2025-12",
          "pos": 100.0,
          "neg": 0.0
        },
        {
          "m": "2026-01",
          "pos": 82.8,
          "neg": 3.4
        },
        {
          "m": "2026-02",
          "pos": 78.6,
          "neg": 3.6
        },
        {
          "m": "2026-03",
          "pos": 71.9,
          "neg": 21.9
        },
        {
          "m": "2026-04",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2026-05",
          "pos": 66.7,
          "neg": 26.7
        }
      ]
    },
    {
      "nome": "L5130-TUPI",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 90.7,
      "nps_ajust": 90.7,
      "delta": -0.1,
      "sent_medio": 0.75,
      "pct_pos": 83,
      "pct_neg": 8,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Produto"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"O atendimento aqui na Swift da Tupi é ótimo e tudo que tem. Estão de parabéns ??????❤️\"",
        "\"O atendente Lucas foi muito atencioso e gentil. Gosto muito quando tem toda a linha de produtos incrível da seara linha \"",
        "\"Acredito que neste momento vcs estarão na excelência, mas sempre a o que melhorar e melhorou da minha primeira compra pa\"",
        "\"Bom atendimento é muito gentil\"",
        "\"Colocando coisas diet, como doces, bolos e sorvete\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 66.0,
          "neg": 20.0
        },
        {
          "m": "2025-02",
          "pos": 88.7,
          "neg": 6.5
        },
        {
          "m": "2025-03",
          "pos": 83.8,
          "neg": 8.1
        },
        {
          "m": "2025-04",
          "pos": 85.2,
          "neg": 9.9
        },
        {
          "m": "2025-05",
          "pos": 93.8,
          "neg": 3.1
        },
        {
          "m": "2025-06",
          "pos": 82.1,
          "neg": 12.5
        },
        {
          "m": "2025-07",
          "pos": 97.4,
          "neg": 2.6
        },
        {
          "m": "2025-08",
          "pos": 86.5,
          "neg": 5.4
        },
        {
          "m": "2025-09",
          "pos": 80.0,
          "neg": 4.4
        },
        {
          "m": "2025-10",
          "pos": 62.5,
          "neg": 15.6
        },
        {
          "m": "2025-11",
          "pos": 81.8,
          "neg": 9.1
        },
        {
          "m": "2025-12",
          "pos": 80.6,
          "neg": 6.9
        },
        {
          "m": "2026-01",
          "pos": 78.4,
          "neg": 9.8
        },
        {
          "m": "2026-02",
          "pos": 91.7,
          "neg": 0.0
        },
        {
          "m": "2026-03",
          "pos": 87.1,
          "neg": 6.5
        },
        {
          "m": "2026-04",
          "pos": 80.0,
          "neg": 11.4
        },
        {
          "m": "2026-05",
          "pos": 81.5,
          "neg": 11.1
        }
      ]
    },
    {
      "nome": "L5131-TAUBATE SAO GERALDO",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 89.8,
      "nps_ajust": 89.5,
      "delta": -0.4,
      "sent_medio": 0.67,
      "pct_pos": 77,
      "pct_neg": 10,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Atendimento e arrumação da loja, manter um padrão, cada dia os mesmos produtos estão em outro lugar\"",
        "\"Segue uma dúvida comprei 2 pacotes de bolinho com bacalhau mas dessa vez achei bem diferente do que comprei em uma outra\"",
        "\"Somente questão da entrega se tivesse essa finalidade pelo menos para quem mora próximo já ajudaria bastante no dia a di\"",
        "\"Na verdade foi apenas um produto que ao olhar a nota em casa vi que não entrou o desconto, acabei pagando 20 reais a mai\"",
        "\"Amo comprar na Swift. Para mim tudo está na medida certa. Um lugar de prazer para fazermos nossas compras. O atendimento\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 73.9,
          "neg": 13.0
        },
        {
          "m": "2025-02",
          "pos": 92.9,
          "neg": 0.0
        },
        {
          "m": "2025-03",
          "pos": 92.9,
          "neg": 7.1
        },
        {
          "m": "2025-04",
          "pos": 76.2,
          "neg": 9.5
        },
        {
          "m": "2025-05",
          "pos": 69.2,
          "neg": 7.7
        },
        {
          "m": "2025-06",
          "pos": 82.1,
          "neg": 7.1
        },
        {
          "m": "2025-07",
          "pos": 78.9,
          "neg": 10.5
        },
        {
          "m": "2025-08",
          "pos": 82.1,
          "neg": 10.7
        },
        {
          "m": "2025-09",
          "pos": 76.9,
          "neg": 11.5
        },
        {
          "m": "2025-10",
          "pos": 81.8,
          "neg": 13.6
        },
        {
          "m": "2025-11",
          "pos": 66.7,
          "neg": 20.8
        },
        {
          "m": "2025-12",
          "pos": 76.0,
          "neg": 4.0
        },
        {
          "m": "2026-01",
          "pos": 69.0,
          "neg": 6.9
        },
        {
          "m": "2026-02",
          "pos": 72.2,
          "neg": 5.6
        },
        {
          "m": "2026-03",
          "pos": 88.9,
          "neg": 5.6
        },
        {
          "m": "2026-04",
          "pos": 69.7,
          "neg": 18.2
        },
        {
          "m": "2026-05",
          "pos": 82.4,
          "neg": 17.6
        }
      ]
    },
    {
      "nome": "L5132-CANTO DO FORTE",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 91.0,
      "nps_ajust": 90.7,
      "delta": -0.3,
      "sent_medio": 0.74,
      "pct_pos": 82,
      "pct_neg": 8,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Ofertas em pacotes unitários.\"",
        "\"Todos os atendentes da loja da marechal mallet em praia grande são ótimos.\"",
        "\"Atendimento sempre espetacular! Equipe solícita e atenciosa. Os preços poderiam melhorar ;)\"",
        "\"Ótimo atendimento, atendimento de Amanda excelente e Ingrid\"",
        "\"Carne seca desfiada sempre em falta\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 86.7,
          "neg": 8.9
        },
        {
          "m": "2025-02",
          "pos": 79.4,
          "neg": 2.9
        },
        {
          "m": "2025-03",
          "pos": 82.9,
          "neg": 12.2
        },
        {
          "m": "2025-04",
          "pos": 86.8,
          "neg": 5.3
        },
        {
          "m": "2025-05",
          "pos": 75.0,
          "neg": 12.5
        },
        {
          "m": "2025-06",
          "pos": 92.5,
          "neg": 5.0
        },
        {
          "m": "2025-07",
          "pos": 72.5,
          "neg": 10.0
        },
        {
          "m": "2025-08",
          "pos": 88.2,
          "neg": 2.0
        },
        {
          "m": "2025-09",
          "pos": 88.6,
          "neg": 4.5
        },
        {
          "m": "2025-10",
          "pos": 93.3,
          "neg": 0.0
        },
        {
          "m": "2025-11",
          "pos": 86.2,
          "neg": 5.2
        },
        {
          "m": "2025-12",
          "pos": 86.7,
          "neg": 2.2
        },
        {
          "m": "2026-01",
          "pos": 75.4,
          "neg": 7.0
        },
        {
          "m": "2026-02",
          "pos": 76.6,
          "neg": 10.6
        },
        {
          "m": "2026-03",
          "pos": 73.8,
          "neg": 4.8
        },
        {
          "m": "2026-04",
          "pos": 65.9,
          "neg": 24.4
        },
        {
          "m": "2026-05",
          "pos": 75.8,
          "neg": 21.2
        }
      ]
    },
    {
      "nome": "L5134-GILBERTO SALOMAO",
      "flag": "regular",
      "uf": "DF",
      "nps_trad": 87.6,
      "nps_ajust": 87.4,
      "delta": -0.2,
      "sent_medio": 0.62,
      "pct_pos": 71,
      "pct_neg": 10,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Ter carne de búfalo,avestruz e outras diferenciadas.\"",
        "\"O pão de queijo não tem gosto de queijo\"",
        "\"Diversificar um pouco mais a oferta, bem como as promoções para quem pretende adquirir com mais frequência.\"",
        "\"faltavam alguns produtos\"",
        "\"Não tinham raquete Black Angus.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 73.9,
          "neg": 13.0
        },
        {
          "m": "2025-02",
          "pos": 70.6,
          "neg": 5.9
        },
        {
          "m": "2025-03",
          "pos": 56.0,
          "neg": 20.0
        },
        {
          "m": "2025-04",
          "pos": 63.6,
          "neg": 4.5
        },
        {
          "m": "2025-05",
          "pos": 83.3,
          "neg": 0.0
        },
        {
          "m": "2025-06",
          "pos": 73.3,
          "neg": 0.0
        },
        {
          "m": "2025-07",
          "pos": 77.3,
          "neg": 4.5
        },
        {
          "m": "2025-08",
          "pos": 72.1,
          "neg": 14.0
        },
        {
          "m": "2025-09",
          "pos": 72.0,
          "neg": 12.0
        },
        {
          "m": "2025-10",
          "pos": 84.0,
          "neg": 4.0
        },
        {
          "m": "2025-11",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2025-12",
          "pos": 66.7,
          "neg": 14.3
        },
        {
          "m": "2026-01",
          "pos": 71.4,
          "neg": 9.5
        },
        {
          "m": "2026-02",
          "pos": 68.8,
          "neg": 18.8
        },
        {
          "m": "2026-03",
          "pos": 60.9,
          "neg": 17.4
        },
        {
          "m": "2026-04",
          "pos": 66.7,
          "neg": 12.5
        },
        {
          "m": "2026-05",
          "pos": 70.0,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5135-402 ASA SUL",
      "flag": "regular",
      "uf": "DF",
      "nps_trad": 89.2,
      "nps_ajust": 88.8,
      "delta": -0.4,
      "sent_medio": 0.68,
      "pct_pos": 79,
      "pct_neg": 10,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Abastecimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Talvez aumentar um pouquinho o número de funcionários.\"",
        "\"Infelizmente a fraldinha que comprei não era de boa qualidade. Mal limpa e a perda foi grande. Esperava mais de um produ\"",
        "\"Poucos funcionários para o tamanho da loja , tive que ir até o caixa para pedir informações sobre produtos , pois era o \"",
        "\"Excelente atendimento. Staff muito prestativos e atenciosos.\"",
        "\"Sempre buscamos por qualidade com menor preço. Por isso, sugiro fazerem mais  promoções de produtos \n\n\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 87.5,
          "neg": 0.0
        },
        {
          "m": "2025-02",
          "pos": 73.3,
          "neg": 13.3
        },
        {
          "m": "2025-03",
          "pos": 90.5,
          "neg": 9.5
        },
        {
          "m": "2025-04",
          "pos": 60.0,
          "neg": 20.0
        },
        {
          "m": "2025-05",
          "pos": 76.0,
          "neg": 4.0
        },
        {
          "m": "2025-06",
          "pos": 81.8,
          "neg": 3.0
        },
        {
          "m": "2025-07",
          "pos": 73.7,
          "neg": 15.8
        },
        {
          "m": "2025-08",
          "pos": 82.4,
          "neg": 17.6
        },
        {
          "m": "2025-09",
          "pos": 83.3,
          "neg": 4.2
        },
        {
          "m": "2025-10",
          "pos": 96.0,
          "neg": 4.0
        },
        {
          "m": "2025-11",
          "pos": 92.9,
          "neg": 7.1
        },
        {
          "m": "2025-12",
          "pos": 72.7,
          "neg": 18.2
        },
        {
          "m": "2026-01",
          "pos": 56.5,
          "neg": 13.0
        },
        {
          "m": "2026-02",
          "pos": 68.4,
          "neg": 26.3
        },
        {
          "m": "2026-03",
          "pos": 75.0,
          "neg": 15.0
        },
        {
          "m": "2026-04",
          "pos": 83.3,
          "neg": 4.2
        },
        {
          "m": "2026-05",
          "pos": 78.6,
          "neg": 7.1
        }
      ]
    },
    {
      "nome": "L5136-RIB.PRETO ALTO DA BOA VISTA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 84.8,
      "nps_ajust": 84.7,
      "delta": -0.2,
      "sent_medio": 0.5,
      "pct_pos": 68,
      "pct_neg": 18,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Os preços estão muito caros. Supermercados estão melhores\"",
        "\"Fomos mal atendidos.\"",
        "\"O aplicativo não está funcionando bem. Precisei utilizar link do email , que funcionou muito bem.\"",
        "\"Só para ressaltar, que o atendimento dos profissionais da loja do Alto da Boa Vista é espetacular.  Não moro muito perto\"",
        "\"Massas frescas para preparo (não as prontas com volume micro do Spoletto).\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 81.2,
          "neg": 6.2
        },
        {
          "m": "2025-02",
          "pos": 84.6,
          "neg": 7.7
        },
        {
          "m": "2025-03",
          "pos": 69.2,
          "neg": 15.4
        },
        {
          "m": "2025-04",
          "pos": 60.0,
          "neg": 20.0
        },
        {
          "m": "2025-05",
          "pos": 52.9,
          "neg": 23.5
        },
        {
          "m": "2025-06",
          "pos": 85.7,
          "neg": 7.1
        },
        {
          "m": "2025-07",
          "pos": 61.5,
          "neg": 23.1
        },
        {
          "m": "2025-08",
          "pos": 91.7,
          "neg": 8.3
        },
        {
          "m": "2025-09",
          "pos": 78.6,
          "neg": 21.4
        },
        {
          "m": "2025-10",
          "pos": 71.4,
          "neg": 28.6
        },
        {
          "m": "2025-11",
          "pos": 66.7,
          "neg": 0.0
        },
        {
          "m": "2025-12",
          "pos": 76.9,
          "neg": 15.4
        },
        {
          "m": "2026-01",
          "pos": 56.2,
          "neg": 18.8
        },
        {
          "m": "2026-02",
          "pos": 66.7,
          "neg": 22.2
        },
        {
          "m": "2026-03",
          "pos": 47.8,
          "neg": 39.1
        },
        {
          "m": "2026-04",
          "pos": 63.6,
          "neg": 9.1
        },
        {
          "m": "2026-05",
          "pos": 66.7,
          "neg": 16.7
        }
      ]
    },
    {
      "nome": "L5138-306 ASA NORTE",
      "flag": "regular",
      "uf": "DF",
      "nps_trad": 86.1,
      "nps_ajust": 86.1,
      "delta": 0.0,
      "sent_medio": 0.61,
      "pct_pos": 72,
      "pct_neg": 11,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Abastecimento",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Gosto dos caldos e alguns sumiram como o de capeletti ?\nQuando esse caldo vai voltar ?\"",
        "\"Avisando das ofertas por email\"",
        "\"Aumentando as ofertas\"",
        "\"Aumentar a diversidade de produtos para lanche\"",
        "\"Não tinha a Kafta.... mais de 2 semanas\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 73.1,
          "neg": 7.7
        },
        {
          "m": "2025-02",
          "pos": 81.1,
          "neg": 8.1
        },
        {
          "m": "2025-03",
          "pos": 76.2,
          "neg": 14.3
        },
        {
          "m": "2025-04",
          "pos": 73.3,
          "neg": 10.0
        },
        {
          "m": "2025-05",
          "pos": 66.7,
          "neg": 13.0
        },
        {
          "m": "2025-06",
          "pos": 79.7,
          "neg": 4.7
        },
        {
          "m": "2025-07",
          "pos": 73.7,
          "neg": 12.3
        },
        {
          "m": "2025-08",
          "pos": 74.5,
          "neg": 12.8
        },
        {
          "m": "2025-09",
          "pos": 75.6,
          "neg": 8.9
        },
        {
          "m": "2025-10",
          "pos": 65.7,
          "neg": 5.7
        },
        {
          "m": "2025-11",
          "pos": 62.5,
          "neg": 17.5
        },
        {
          "m": "2025-12",
          "pos": 75.0,
          "neg": 6.2
        },
        {
          "m": "2026-01",
          "pos": 60.0,
          "neg": 15.0
        },
        {
          "m": "2026-02",
          "pos": 69.4,
          "neg": 8.3
        },
        {
          "m": "2026-03",
          "pos": 58.5,
          "neg": 19.5
        },
        {
          "m": "2026-04",
          "pos": 79.2,
          "neg": 10.4
        },
        {
          "m": "2026-05",
          "pos": 70.8,
          "neg": 12.5
        }
      ]
    },
    {
      "nome": "L5139-SBC RUDGE RAMOS",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 86.7,
      "nps_ajust": 86.3,
      "delta": -0.4,
      "sent_medio": 0.53,
      "pct_pos": 68,
      "pct_neg": 15,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Atendimento medíocre. \nAtendente nem estava ao par de preços e ofertas\"",
        "\"Clube fidelidade cliente pontual\"",
        "\"Não encontrei croissant de frango.\"",
        "\"Costumo sempre comprar produtos nesta loja mas dessa última vez que eu fui logo de manhã me deparei com várias bebidas s\"",
        "\"Queria agradecer pelo atendimento das funcionárias do período da manhã, sempre muito atenciosas e educadas!\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 69.7,
          "neg": 12.1
        },
        {
          "m": "2025-02",
          "pos": 80.0,
          "neg": 0.0
        },
        {
          "m": "2025-03",
          "pos": 82.1,
          "neg": 7.1
        },
        {
          "m": "2025-04",
          "pos": 56.0,
          "neg": 28.0
        },
        {
          "m": "2025-05",
          "pos": 60.6,
          "neg": 15.2
        },
        {
          "m": "2025-06",
          "pos": 61.8,
          "neg": 17.6
        },
        {
          "m": "2025-07",
          "pos": 78.3,
          "neg": 17.4
        },
        {
          "m": "2025-08",
          "pos": 67.7,
          "neg": 9.7
        },
        {
          "m": "2025-09",
          "pos": 66.7,
          "neg": 16.7
        },
        {
          "m": "2025-10",
          "pos": 67.6,
          "neg": 20.6
        },
        {
          "m": "2025-11",
          "pos": 84.6,
          "neg": 0.0
        },
        {
          "m": "2025-12",
          "pos": 82.4,
          "neg": 5.9
        },
        {
          "m": "2026-01",
          "pos": 61.3,
          "neg": 32.3
        },
        {
          "m": "2026-02",
          "pos": 64.7,
          "neg": 14.7
        },
        {
          "m": "2026-03",
          "pos": 50.0,
          "neg": 28.6
        },
        {
          "m": "2026-04",
          "pos": 51.9,
          "neg": 22.2
        },
        {
          "m": "2026-05",
          "pos": 71.4,
          "neg": 7.1
        }
      ]
    },
    {
      "nome": "L5140-OSASCO KM 18",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 91.6,
      "nps_ajust": 91.5,
      "delta": -0.2,
      "sent_medio": 0.78,
      "pct_pos": 84,
      "pct_neg": 6,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Melhorar os preços  pois muito caro seus produtos\"",
        "\"Colocar a disposição do cliente a salsicha de frango Perdigão ou swift\"",
        "\"Não foi nota 10 porque a loja do Km 18 é horrível para estacionar, fora isso tudo ok.\"",
        "\"Atendimento Karol otimo\"",
        "\"Quero elogiar o atendimento do Guilherme da loja KM 18 - Osasco. Muito simpático e receptivo.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 76.3,
          "neg": 13.2
        },
        {
          "m": "2025-02",
          "pos": 68.0,
          "neg": 12.0
        },
        {
          "m": "2025-03",
          "pos": 71.0,
          "neg": 6.5
        },
        {
          "m": "2025-04",
          "pos": 74.1,
          "neg": 11.1
        },
        {
          "m": "2025-05",
          "pos": 88.9,
          "neg": 5.6
        },
        {
          "m": "2025-06",
          "pos": 84.6,
          "neg": 3.8
        },
        {
          "m": "2025-07",
          "pos": 78.3,
          "neg": 8.7
        },
        {
          "m": "2025-08",
          "pos": 81.2,
          "neg": 0.0
        },
        {
          "m": "2025-09",
          "pos": 89.2,
          "neg": 0.0
        },
        {
          "m": "2025-10",
          "pos": 73.3,
          "neg": 10.0
        },
        {
          "m": "2025-11",
          "pos": 84.2,
          "neg": 7.9
        },
        {
          "m": "2025-12",
          "pos": 85.1,
          "neg": 9.1
        },
        {
          "m": "2026-01",
          "pos": 78.3,
          "neg": 13.0
        },
        {
          "m": "2026-02",
          "pos": 87.2,
          "neg": 0.0
        },
        {
          "m": "2026-03",
          "pos": 93.4,
          "neg": 1.9
        },
        {
          "m": "2026-04",
          "pos": 91.7,
          "neg": 4.8
        },
        {
          "m": "2026-05",
          "pos": 91.9,
          "neg": 2.7
        }
      ]
    },
    {
      "nome": "L5141-ALTO TAQUARAL",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 90.7,
      "nps_ajust": 90.4,
      "delta": -0.3,
      "sent_medio": 0.64,
      "pct_pos": 75,
      "pct_neg": 11,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Produto",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Não encontrei coxinha da asa apimentada\"",
        "\"Gostei muito , posso acompanhar entrega em tempo real. Excelente!\"",
        "\"Desta vez não foi bem, comprei picanha ouro 1k600g. Estava dura. Fiz propaganda que seria uma picanha nota 10 e fui mal \"",
        "\"A loja estava estranha, algumas seções vazias. Não sei se era alguma manutenção mas não tinha muita variedade.\"",
        "\"Excelente nada a  melhorar\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 85.7,
          "neg": 9.5
        },
        {
          "m": "2025-02",
          "pos": 73.9,
          "neg": 8.7
        },
        {
          "m": "2025-03",
          "pos": 59.1,
          "neg": 18.2
        },
        {
          "m": "2025-04",
          "pos": 82.1,
          "neg": 3.6
        },
        {
          "m": "2025-05",
          "pos": 74.1,
          "neg": 14.8
        },
        {
          "m": "2025-06",
          "pos": 76.0,
          "neg": 0.0
        },
        {
          "m": "2025-07",
          "pos": 88.2,
          "neg": 11.8
        },
        {
          "m": "2025-08",
          "pos": 68.8,
          "neg": 12.5
        },
        {
          "m": "2025-09",
          "pos": 95.7,
          "neg": 4.3
        },
        {
          "m": "2025-10",
          "pos": 65.4,
          "neg": 11.5
        },
        {
          "m": "2025-11",
          "pos": 81.5,
          "neg": 7.4
        },
        {
          "m": "2025-12",
          "pos": 68.8,
          "neg": 25.0
        },
        {
          "m": "2026-01",
          "pos": 76.5,
          "neg": 11.8
        },
        {
          "m": "2026-02",
          "pos": 79.2,
          "neg": 8.3
        },
        {
          "m": "2026-03",
          "pos": 50.0,
          "neg": 18.8
        },
        {
          "m": "2026-04",
          "pos": 70.0,
          "neg": 13.3
        },
        {
          "m": "2026-05",
          "pos": 44.4,
          "neg": 11.1
        }
      ]
    },
    {
      "nome": "L5142-MARILIA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 91.6,
      "nps_ajust": 91.5,
      "delta": -0.1,
      "sent_medio": 0.67,
      "pct_pos": 79,
      "pct_neg": 12,
      "top3_problemas": [
        "Entrega Logistica",
        "Abastecimento",
        "Produto"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Fazer algo de pontuação bimestral, oferecendo um mimo ao cliente que realiza compras até X valor.\"",
        "\"A Swift é ótima,os produtos de primeira\n\"",
        "\"Frango moido com gosto de velho, não compraremos novamente\"",
        "\"Excelente Loja Produtos, Impecáveis, Qualidades, por isso que Todos os Meses \nComo na Swift!!!\nPoderiam me dar desconto \"",
        "\"Erro na posição de entrega. Precisei entrar em contato para esclarecer.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 75.0,
          "neg": 16.7
        },
        {
          "m": "2025-02",
          "pos": 75.0,
          "neg": 12.5
        },
        {
          "m": "2025-03",
          "pos": 63.2,
          "neg": 15.8
        },
        {
          "m": "2025-04",
          "pos": 88.2,
          "neg": 5.9
        },
        {
          "m": "2025-05",
          "pos": 72.4,
          "neg": 10.3
        },
        {
          "m": "2025-06",
          "pos": 96.4,
          "neg": 0.0
        },
        {
          "m": "2025-07",
          "pos": 92.9,
          "neg": 7.1
        },
        {
          "m": "2025-08",
          "pos": 87.5,
          "neg": 4.2
        },
        {
          "m": "2025-09",
          "pos": 78.3,
          "neg": 17.4
        },
        {
          "m": "2025-10",
          "pos": 84.2,
          "neg": 10.5
        },
        {
          "m": "2025-11",
          "pos": 80.0,
          "neg": 13.3
        },
        {
          "m": "2025-12",
          "pos": 81.0,
          "neg": 19.0
        },
        {
          "m": "2026-01",
          "pos": 58.3,
          "neg": 16.7
        },
        {
          "m": "2026-02",
          "pos": 80.0,
          "neg": 6.7
        },
        {
          "m": "2026-03",
          "pos": 70.0,
          "neg": 25.0
        },
        {
          "m": "2026-04",
          "pos": 71.4,
          "neg": 14.3
        },
        {
          "m": "2026-05",
          "pos": 78.9,
          "neg": 5.3
        }
      ]
    },
    {
      "nome": "L5143-AQUARIUS",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 89.1,
      "nps_ajust": 88.8,
      "delta": -0.3,
      "sent_medio": 0.57,
      "pct_pos": 70,
      "pct_neg": 14,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Abastecimento",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Ter opções de combos para refeições e churrasco completo \" pães, carne, linguiça, queijos, frango e sobremesa'\"",
        "\"Fui comprar uma ponta de picanha...parte nocreate...macia...ia receber visitas  preço da porta da picanha R$99.90\nPassei\"",
        "\"O Uber quem entregou foi muito mal educado\"",
        "\"Melhorar o preço, fazer promoções liberar cupom para quem é cadastrado.\"",
        "\"Ótimo! Até breve.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 75.9,
          "neg": 17.2
        },
        {
          "m": "2025-02",
          "pos": 64.0,
          "neg": 8.0
        },
        {
          "m": "2025-03",
          "pos": 70.8,
          "neg": 4.2
        },
        {
          "m": "2025-04",
          "pos": 76.5,
          "neg": 5.9
        },
        {
          "m": "2025-05",
          "pos": 72.7,
          "neg": 22.7
        },
        {
          "m": "2025-06",
          "pos": 68.0,
          "neg": 8.0
        },
        {
          "m": "2025-07",
          "pos": 92.3,
          "neg": 7.7
        },
        {
          "m": "2025-08",
          "pos": 91.3,
          "neg": 4.3
        },
        {
          "m": "2025-09",
          "pos": 72.7,
          "neg": 18.2
        },
        {
          "m": "2025-10",
          "pos": 70.4,
          "neg": 3.7
        },
        {
          "m": "2025-11",
          "pos": 56.5,
          "neg": 26.1
        },
        {
          "m": "2025-12",
          "pos": 61.5,
          "neg": 26.9
        },
        {
          "m": "2026-01",
          "pos": 60.9,
          "neg": 13.0
        },
        {
          "m": "2026-02",
          "pos": 70.6,
          "neg": 11.8
        },
        {
          "m": "2026-03",
          "pos": 55.0,
          "neg": 30.0
        },
        {
          "m": "2026-04",
          "pos": 75.0,
          "neg": 15.0
        },
        {
          "m": "2026-05",
          "pos": 76.9,
          "neg": 7.7
        }
      ]
    },
    {
      "nome": "L5144-EMBU DAS ARTES",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 88.0,
      "nps_ajust": 87.8,
      "delta": -0.1,
      "sent_medio": 0.62,
      "pct_pos": 75,
      "pct_neg": 12,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Promocoes Fidelidade",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Realinhando os prećos ao local. Vcs tinham valores competitivos,mas foram aumentandk e está se tornando um competidor dd\"",
        "\"Quando fizer campanha de incentivo de responder a pesquisa, disponibilize ferramenta para o atendente da loja enviar a p\"",
        "\"O único defeito é não ter carne fresca, o restante tá perfeito\"",
        "\"Promoções e continuar com a qualidade de sempre.\"",
        "\"Ser mais sustentável…\nGerar mais emprego e renda… \nEstou em busca desta oportunidade de trabalho.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 84.1,
          "neg": 9.1
        },
        {
          "m": "2025-02",
          "pos": 64.3,
          "neg": 10.7
        },
        {
          "m": "2025-03",
          "pos": 80.0,
          "neg": 15.0
        },
        {
          "m": "2025-04",
          "pos": 77.3,
          "neg": 11.4
        },
        {
          "m": "2025-05",
          "pos": 71.0,
          "neg": 12.9
        },
        {
          "m": "2025-06",
          "pos": 74.4,
          "neg": 7.7
        },
        {
          "m": "2025-07",
          "pos": 77.3,
          "neg": 4.5
        },
        {
          "m": "2025-08",
          "pos": 69.2,
          "neg": 23.1
        },
        {
          "m": "2025-09",
          "pos": 68.2,
          "neg": 13.6
        },
        {
          "m": "2025-10",
          "pos": 75.0,
          "neg": 8.3
        },
        {
          "m": "2025-11",
          "pos": 76.7,
          "neg": 16.7
        },
        {
          "m": "2025-12",
          "pos": 74.3,
          "neg": 11.4
        },
        {
          "m": "2026-01",
          "pos": 73.5,
          "neg": 17.6
        },
        {
          "m": "2026-02",
          "pos": 65.6,
          "neg": 18.8
        },
        {
          "m": "2026-03",
          "pos": 80.6,
          "neg": 12.9
        },
        {
          "m": "2026-04",
          "pos": 78.6,
          "neg": 3.6
        },
        {
          "m": "2026-05",
          "pos": 75.0,
          "neg": 18.8
        }
      ]
    },
    {
      "nome": "L5145-TAMBORE",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 87.5,
      "nps_ajust": 86.5,
      "delta": -1.0,
      "sent_medio": 0.66,
      "pct_pos": 77,
      "pct_neg": 11,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Atendimento",
        "Loja Fisica",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Comprei Caixa de Bombons Lacta dentro do prazo de validade, porém embolorado. Recomendo que se não tem condições de arma\"",
        "\"Qualidade do file mignon para Strogonoff, duro\nCom carne de qualidade inferior. Não compraria de novo! Deixa muito a des\"",
        "\"Não tinha Ostrinha da Sobrecoxa (solta)\"",
        "\"Jaqueline nota 10 parabéns pelo atendimento\"",
        "\"LOJA MUITO BOA, FUI MUITO BEM ATENDIDO PELA COLABORADORA LÚCIA\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 75.0,
          "neg": 12.5
        },
        {
          "m": "2025-02",
          "pos": 85.7,
          "neg": 14.3
        },
        {
          "m": "2025-03",
          "pos": 62.5,
          "neg": 18.8
        },
        {
          "m": "2025-04",
          "pos": 81.8,
          "neg": 0.0
        },
        {
          "m": "2025-05",
          "pos": 68.8,
          "neg": 12.5
        },
        {
          "m": "2025-06",
          "pos": 83.3,
          "neg": 0.0
        },
        {
          "m": "2025-07",
          "pos": 81.8,
          "neg": 18.2
        },
        {
          "m": "2025-08",
          "pos": 80.0,
          "neg": 15.0
        },
        {
          "m": "2025-09",
          "pos": 50.0,
          "neg": 20.0
        },
        {
          "m": "2025-10",
          "pos": 100.0,
          "neg": 0.0
        },
        {
          "m": "2025-11",
          "pos": 44.4,
          "neg": 33.3
        },
        {
          "m": "2025-12",
          "pos": 100.0,
          "neg": 0.0
        },
        {
          "m": "2026-01",
          "pos": 60.0,
          "neg": 40.0
        },
        {
          "m": "2026-02",
          "pos": 75.0,
          "neg": 0.0
        },
        {
          "m": "2026-03",
          "pos": 72.0,
          "neg": 16.0
        },
        {
          "m": "2026-04",
          "pos": 71.4,
          "neg": 7.1
        },
        {
          "m": "2026-05",
          "pos": 100.0,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5146-ITATIBA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 92.3,
      "nps_ajust": 91.8,
      "delta": -0.4,
      "sent_medio": 0.7,
      "pct_pos": 78,
      "pct_neg": 9,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Talvez mais ítens veganos.\"",
        "\"Comprei uma picanha que talvez foi a mais dura que já comprei.\"",
        "\"Colocar promoções em dias ou semanas alternadas.\n\"",
        "\"Preciso conhecer a loja melhor, pra estar mais segura em responder. \nObrigada\"",
        "\"Sim  melhorar nos item de frangos\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 57.1,
          "neg": 17.9
        },
        {
          "m": "2025-02",
          "pos": 78.9,
          "neg": 10.5
        },
        {
          "m": "2025-03",
          "pos": 58.3,
          "neg": 0.0
        },
        {
          "m": "2025-04",
          "pos": 70.0,
          "neg": 20.0
        },
        {
          "m": "2025-05",
          "pos": 80.8,
          "neg": 7.7
        },
        {
          "m": "2025-06",
          "pos": 85.1,
          "neg": 8.5
        },
        {
          "m": "2025-07",
          "pos": 73.3,
          "neg": 16.7
        },
        {
          "m": "2025-08",
          "pos": 82.1,
          "neg": 0.0
        },
        {
          "m": "2025-09",
          "pos": 80.6,
          "neg": 9.7
        },
        {
          "m": "2025-10",
          "pos": 76.7,
          "neg": 6.7
        },
        {
          "m": "2025-11",
          "pos": 66.7,
          "neg": 11.1
        },
        {
          "m": "2025-12",
          "pos": 81.6,
          "neg": 7.9
        },
        {
          "m": "2026-01",
          "pos": 82.8,
          "neg": 3.4
        },
        {
          "m": "2026-02",
          "pos": 88.5,
          "neg": 7.7
        },
        {
          "m": "2026-03",
          "pos": 82.4,
          "neg": 2.9
        },
        {
          "m": "2026-04",
          "pos": 76.7,
          "neg": 13.3
        },
        {
          "m": "2026-05",
          "pos": 85.7,
          "neg": 4.8
        }
      ]
    },
    {
      "nome": "L5147-ROLAND GARROS",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 90.5,
      "nps_ajust": 90.4,
      "delta": -0.1,
      "sent_medio": 0.68,
      "pct_pos": 78,
      "pct_neg": 9,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Produto"
      ],
      "top3_elogios": [
        "Atendimento",
        "Promocoes Fidelidade",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"O site e o App não funciona!????\"",
        "\"Gostei muito da loja, fui muito bem atendido pela isabelly muito atenciosa\"",
        "\"Fiz a compra agendada para entrega em portaria 24h, consta a tentativa de entrega sem sucesso e desde então, com abertur\"",
        "\"Calor de 34 graus, você vai fazer suas compras e a loja não possui uma geladeira para venda de água gelada, espaço tem, \"",
        "\"Eu não sei o porquê mas essa loja sempre está suja e confesso que isso me incomoda, tem um cantos da loja que a sujeira \""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 64.6,
          "neg": 16.7
        },
        {
          "m": "2025-02",
          "pos": 80.0,
          "neg": 20.0
        },
        {
          "m": "2025-03",
          "pos": 64.7,
          "neg": 14.7
        },
        {
          "m": "2025-04",
          "pos": 78.8,
          "neg": 9.1
        },
        {
          "m": "2025-05",
          "pos": 77.8,
          "neg": 3.7
        },
        {
          "m": "2025-06",
          "pos": 87.5,
          "neg": 7.5
        },
        {
          "m": "2025-07",
          "pos": 90.9,
          "neg": 6.1
        },
        {
          "m": "2025-08",
          "pos": 85.7,
          "neg": 9.5
        },
        {
          "m": "2025-09",
          "pos": 76.7,
          "neg": 6.7
        },
        {
          "m": "2025-10",
          "pos": 85.7,
          "neg": 0.0
        },
        {
          "m": "2025-11",
          "pos": 84.0,
          "neg": 6.0
        },
        {
          "m": "2025-12",
          "pos": 75.0,
          "neg": 10.0
        },
        {
          "m": "2026-01",
          "pos": 75.0,
          "neg": 4.5
        },
        {
          "m": "2026-02",
          "pos": 69.2,
          "neg": 7.7
        },
        {
          "m": "2026-03",
          "pos": 71.4,
          "neg": 17.1
        },
        {
          "m": "2026-04",
          "pos": 72.2,
          "neg": 16.7
        },
        {
          "m": "2026-05",
          "pos": 75.0,
          "neg": 15.0
        }
      ]
    },
    {
      "nome": "L5148-PARQUE DO CARMO",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 87.2,
      "nps_ajust": 86.7,
      "delta": -0.4,
      "sent_medio": 0.56,
      "pct_pos": 70,
      "pct_neg": 14,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Promocoes Fidelidade",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Mais opções de promoção\"",
        "\"Manter  a reposição  de produtos em dia\"",
        "\"Manter o atendimento da equipe motivado sempre!\nA abordagem dela (equipe) a forma que o rapaz guardou todos os meus iten\"",
        "\"Por hora esta perfeito\"",
        "\"Adorei a experiência, com certeza farei novas solicitações.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 62.8,
          "neg": 20.9
        },
        {
          "m": "2025-02",
          "pos": 73.7,
          "neg": 13.2
        },
        {
          "m": "2025-03",
          "pos": 66.7,
          "neg": 20.8
        },
        {
          "m": "2025-04",
          "pos": 72.1,
          "neg": 11.6
        },
        {
          "m": "2025-05",
          "pos": 75.0,
          "neg": 13.9
        },
        {
          "m": "2025-06",
          "pos": 80.0,
          "neg": 10.0
        },
        {
          "m": "2025-07",
          "pos": 64.7,
          "neg": 11.8
        },
        {
          "m": "2025-08",
          "pos": 65.4,
          "neg": 23.1
        },
        {
          "m": "2025-09",
          "pos": 74.4,
          "neg": 15.4
        },
        {
          "m": "2025-10",
          "pos": 66.7,
          "neg": 7.4
        },
        {
          "m": "2025-11",
          "pos": 71.4,
          "neg": 3.6
        },
        {
          "m": "2025-12",
          "pos": 83.7,
          "neg": 2.3
        },
        {
          "m": "2026-01",
          "pos": 66.7,
          "neg": 28.6
        },
        {
          "m": "2026-02",
          "pos": 63.5,
          "neg": 17.3
        },
        {
          "m": "2026-03",
          "pos": 65.8,
          "neg": 23.7
        },
        {
          "m": "2026-04",
          "pos": 71.0,
          "neg": 12.9
        },
        {
          "m": "2026-05",
          "pos": 61.9,
          "neg": 4.8
        }
      ]
    },
    {
      "nome": "L5149-ALTO DA MOOCA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 84.7,
      "nps_ajust": 84.0,
      "delta": -0.7,
      "sent_medio": 0.46,
      "pct_pos": 64,
      "pct_neg": 18,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Atendimento",
        "Promocoes Fidelidade",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"A SWIFT melhorou alguns preços com várias promoções. Mas ainda tem condições de melhorar ainda mais, pois trabalha com c\"",
        "\"Parte de pescados bem vazia, geladeiras interditadas, agua no chão da loja, indicava problemas na geladeira, apenas 1 at\"",
        "\"Encontrei tudo que queria. Atendentes atenciosos.\"",
        "\"Faltava alguns produtos !!! O atendimento por parte dos funcionários é exencial para a boa escolha , rapidez , economia \"",
        "\"Poucos funcionários. Sempre que peço algo que não tem a resposta é que está no caminhão... Para voltar mais tarde\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 73.7,
          "neg": 13.2
        },
        {
          "m": "2025-02",
          "pos": 70.0,
          "neg": 16.7
        },
        {
          "m": "2025-03",
          "pos": 60.0,
          "neg": 17.1
        },
        {
          "m": "2025-04",
          "pos": 64.9,
          "neg": 27.0
        },
        {
          "m": "2025-05",
          "pos": 61.5,
          "neg": 19.2
        },
        {
          "m": "2025-06",
          "pos": 76.0,
          "neg": 14.0
        },
        {
          "m": "2025-07",
          "pos": 55.3,
          "neg": 18.4
        },
        {
          "m": "2025-08",
          "pos": 71.8,
          "neg": 12.8
        },
        {
          "m": "2025-09",
          "pos": 71.9,
          "neg": 12.5
        },
        {
          "m": "2025-10",
          "pos": 71.1,
          "neg": 8.9
        },
        {
          "m": "2025-11",
          "pos": 71.1,
          "neg": 15.8
        },
        {
          "m": "2025-12",
          "pos": 70.5,
          "neg": 13.1
        },
        {
          "m": "2026-01",
          "pos": 65.4,
          "neg": 11.5
        },
        {
          "m": "2026-02",
          "pos": 60.6,
          "neg": 18.2
        },
        {
          "m": "2026-03",
          "pos": 48.0,
          "neg": 34.0
        },
        {
          "m": "2026-04",
          "pos": 48.6,
          "neg": 25.7
        },
        {
          "m": "2026-05",
          "pos": 38.1,
          "neg": 28.6
        }
      ]
    },
    {
      "nome": "L5150-ARARAQUARA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 91.6,
      "nps_ajust": 91.5,
      "delta": -0.1,
      "sent_medio": 0.7,
      "pct_pos": 78,
      "pct_neg": 8,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Abastecimento",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Os atendentes precisam ser um pouco mais simpáticos,sempre de fisionomia de bravo\"",
        "\"Sac de atendimento é péssimo. Tive problemas nas duas compras onlines e em nenhuma das vezes tive um bom suporte\"",
        "\"Os produtos mudam muito de lugar nas prateleiras prejudicando a organização.\"",
        "\"Poderia ter um atendimento local mais fácil para realizar entregas na cidade\"",
        "\"Achei alguns produtos congelados meio caros, como o escondidinho entre outros\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 80.0,
          "neg": 5.0
        },
        {
          "m": "2025-02",
          "pos": 68.8,
          "neg": 12.5
        },
        {
          "m": "2025-03",
          "pos": 80.0,
          "neg": 5.0
        },
        {
          "m": "2025-04",
          "pos": 76.2,
          "neg": 19.0
        },
        {
          "m": "2025-05",
          "pos": 78.4,
          "neg": 5.4
        },
        {
          "m": "2025-06",
          "pos": 82.6,
          "neg": 8.7
        },
        {
          "m": "2025-07",
          "pos": 82.5,
          "neg": 7.5
        },
        {
          "m": "2025-08",
          "pos": 89.5,
          "neg": 7.9
        },
        {
          "m": "2025-09",
          "pos": 75.0,
          "neg": 2.3
        },
        {
          "m": "2025-10",
          "pos": 73.2,
          "neg": 7.3
        },
        {
          "m": "2025-11",
          "pos": 86.8,
          "neg": 7.9
        },
        {
          "m": "2025-12",
          "pos": 81.8,
          "neg": 4.5
        },
        {
          "m": "2026-01",
          "pos": 71.4,
          "neg": 5.7
        },
        {
          "m": "2026-02",
          "pos": 67.6,
          "neg": 8.1
        },
        {
          "m": "2026-03",
          "pos": 76.7,
          "neg": 10.0
        },
        {
          "m": "2026-04",
          "pos": 77.1,
          "neg": 10.4
        },
        {
          "m": "2026-05",
          "pos": 70.0,
          "neg": 16.7
        }
      ]
    },
    {
      "nome": "L5151-PINDAMONHANGABA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 93.9,
      "nps_ajust": 93.7,
      "delta": -0.2,
      "sent_medio": 0.74,
      "pct_pos": 80,
      "pct_neg": 7,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Atendimento"
      ],
      "top3_elogios": [
        "Produto",
        "Promocoes Fidelidade",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"oferecer varias alternativas de carnes temperadas e prontas para o final ´preparar para o fim de semana.\nComprei recente\"",
        "\"Os produtos congelados deveriam conter menos água\"",
        "\"Tudo muito bom... continuem com as promoções....hahaha...??\"",
        "\"Ganhei uma bolsa térmica uns meses atrás de vocês, mas ela veio rasgada internamente.\"",
        "\"Os preços das lojas e o mesmo dos mercados poderiam ser diferenciados\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 78.3,
          "neg": 8.7
        },
        {
          "m": "2025-02",
          "pos": 87.5,
          "neg": 12.5
        },
        {
          "m": "2025-03",
          "pos": 88.9,
          "neg": 0.0
        },
        {
          "m": "2025-04",
          "pos": 73.7,
          "neg": 10.5
        },
        {
          "m": "2025-05",
          "pos": 73.3,
          "neg": 13.3
        },
        {
          "m": "2025-06",
          "pos": 94.7,
          "neg": 5.3
        },
        {
          "m": "2025-07",
          "pos": 73.7,
          "neg": 5.3
        },
        {
          "m": "2025-08",
          "pos": 84.2,
          "neg": 10.5
        },
        {
          "m": "2025-09",
          "pos": 68.8,
          "neg": 6.2
        },
        {
          "m": "2025-10",
          "pos": 75.0,
          "neg": 10.7
        },
        {
          "m": "2025-11",
          "pos": 100.0,
          "neg": 0.0
        },
        {
          "m": "2025-12",
          "pos": 82.1,
          "neg": 7.1
        },
        {
          "m": "2026-01",
          "pos": 72.7,
          "neg": 13.6
        },
        {
          "m": "2026-02",
          "pos": 82.4,
          "neg": 0.0
        },
        {
          "m": "2026-03",
          "pos": 83.3,
          "neg": 6.7
        },
        {
          "m": "2026-04",
          "pos": 80.0,
          "neg": 0.0
        },
        {
          "m": "2026-05",
          "pos": 85.0,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5152-ALTO DA BOA VISTA",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 81.4,
      "nps_ajust": 80.6,
      "delta": -0.7,
      "sent_medio": 0.49,
      "pct_pos": 66,
      "pct_neg": 17,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Melhorar acessibilidade no Site e App. Ainda confuso!\"",
        "\"Está tudo otimo\"",
        "\"Estou muito satisfeita com a Swift online!\"",
        "\"Isenção de frete pra 60+ ????\"",
        "\"Melhorar a qualidade de algumas carnes e peixes.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 55.6,
          "neg": 25.9
        },
        {
          "m": "2025-02",
          "pos": 68.3,
          "neg": 14.6
        },
        {
          "m": "2025-03",
          "pos": 68.0,
          "neg": 12.0
        },
        {
          "m": "2025-04",
          "pos": 72.3,
          "neg": 16.9
        },
        {
          "m": "2025-05",
          "pos": 71.7,
          "neg": 13.3
        },
        {
          "m": "2025-06",
          "pos": 66.0,
          "neg": 9.4
        },
        {
          "m": "2025-07",
          "pos": 62.5,
          "neg": 17.9
        },
        {
          "m": "2025-08",
          "pos": 58.7,
          "neg": 15.9
        },
        {
          "m": "2025-09",
          "pos": 58.7,
          "neg": 14.3
        },
        {
          "m": "2025-10",
          "pos": 66.7,
          "neg": 17.9
        },
        {
          "m": "2025-11",
          "pos": 72.2,
          "neg": 19.0
        },
        {
          "m": "2025-12",
          "pos": 66.7,
          "neg": 20.0
        },
        {
          "m": "2026-01",
          "pos": 65.9,
          "neg": 18.2
        },
        {
          "m": "2026-02",
          "pos": 54.1,
          "neg": 27.9
        },
        {
          "m": "2026-03",
          "pos": 61.4,
          "neg": 13.6
        },
        {
          "m": "2026-04",
          "pos": 70.2,
          "neg": 17.5
        },
        {
          "m": "2026-05",
          "pos": 81.2,
          "neg": 10.4
        }
      ]
    },
    {
      "nome": "L5153-EMBARE",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 89.1,
      "nps_ajust": 88.7,
      "delta": -0.4,
      "sent_medio": 0.64,
      "pct_pos": 75,
      "pct_neg": 11,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Abastecimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Só não recomendo porque depois ficam insistindo nas pesquisas. \nUm email, ok, mas foram vários, até eu vir aqui responde\"",
        "\"Só manter o mesmo  padrão em simpatia , atenção e educação .\"",
        "\"OS  e AS atendentes são muito educados, prestativos e gentis. Nota Dez. Ambiente limpo e bastante arejado.\"",
        "\"O entregador que se atrapalhou para entregar disse que não achavavo número da minha casa\"",
        "\"Os preços estão acima do mercado.\nConfesso que fui na loja por conveniência pois, não tive tempo de ir no sábado em outr\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 70.7,
          "neg": 14.6
        },
        {
          "m": "2025-02",
          "pos": 60.0,
          "neg": 10.0
        },
        {
          "m": "2025-03",
          "pos": 75.0,
          "neg": 11.1
        },
        {
          "m": "2025-04",
          "pos": 76.0,
          "neg": 12.0
        },
        {
          "m": "2025-05",
          "pos": 81.8,
          "neg": 9.1
        },
        {
          "m": "2025-06",
          "pos": 69.6,
          "neg": 8.9
        },
        {
          "m": "2025-07",
          "pos": 73.1,
          "neg": 11.5
        },
        {
          "m": "2025-08",
          "pos": 69.2,
          "neg": 12.3
        },
        {
          "m": "2025-09",
          "pos": 77.0,
          "neg": 4.9
        },
        {
          "m": "2025-10",
          "pos": 83.6,
          "neg": 9.8
        },
        {
          "m": "2025-11",
          "pos": 78.0,
          "neg": 12.2
        },
        {
          "m": "2025-12",
          "pos": 73.1,
          "neg": 15.4
        },
        {
          "m": "2026-01",
          "pos": 78.4,
          "neg": 8.1
        },
        {
          "m": "2026-02",
          "pos": 78.7,
          "neg": 14.9
        },
        {
          "m": "2026-03",
          "pos": 68.4,
          "neg": 14.0
        },
        {
          "m": "2026-04",
          "pos": 77.4,
          "neg": 13.2
        },
        {
          "m": "2026-05",
          "pos": 78.8,
          "neg": 6.1
        }
      ]
    },
    {
      "nome": "L5154-RIO CLARO",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 93.2,
      "nps_ajust": 93.1,
      "delta": -0.2,
      "sent_medio": 0.76,
      "pct_pos": 82,
      "pct_neg": 6,
      "top3_problemas": [
        "Abastecimento",
        "Produto",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"A carne que comrei, no caso uma picanha, edtava tãodura que não conseguimos comer.\nO que mais consumimos é a linguiça me\"",
        "\"Fazendo mais promoções ??\"",
        "\"Tem alguns produtos que estão com o preço muito alto.\nExemplo: Fraldinha\"",
        "\"Mais promoções seria legal.\"",
        "\"Gostaria q tivesse filé de mignon (pronto)\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 70.8,
          "neg": 0.0
        },
        {
          "m": "2025-02",
          "pos": 83.3,
          "neg": 16.7
        },
        {
          "m": "2025-03",
          "pos": 85.7,
          "neg": 4.8
        },
        {
          "m": "2025-04",
          "pos": 78.6,
          "neg": 7.1
        },
        {
          "m": "2025-05",
          "pos": 60.0,
          "neg": 13.3
        },
        {
          "m": "2025-06",
          "pos": 88.9,
          "neg": 11.1
        },
        {
          "m": "2025-07",
          "pos": 81.0,
          "neg": 9.5
        },
        {
          "m": "2025-08",
          "pos": 85.7,
          "neg": 7.1
        },
        {
          "m": "2025-09",
          "pos": 85.0,
          "neg": 0.0
        },
        {
          "m": "2025-10",
          "pos": 76.5,
          "neg": 5.9
        },
        {
          "m": "2025-11",
          "pos": 94.1,
          "neg": 0.0
        },
        {
          "m": "2025-12",
          "pos": 84.4,
          "neg": 12.5
        },
        {
          "m": "2026-01",
          "pos": 77.8,
          "neg": 7.4
        },
        {
          "m": "2026-02",
          "pos": 80.0,
          "neg": 0.0
        },
        {
          "m": "2026-03",
          "pos": 90.0,
          "neg": 5.0
        },
        {
          "m": "2026-04",
          "pos": 83.3,
          "neg": 11.1
        },
        {
          "m": "2026-05",
          "pos": 100.0,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5155-SUZANO",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 90.5,
      "nps_ajust": 90.0,
      "delta": -0.4,
      "sent_medio": 0.62,
      "pct_pos": 74,
      "pct_neg": 11,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Abastecimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Achei estar excelente.\nSe melhorar mais estraga.\"",
        "\"Seria bom ,a parte do chocolate que fica próximo ao caixa num lugar mais fresco pois estavam derretendo\"",
        "\"Só precisa por mais funcionários no caixa, tem Só uma pessoa atendendo e demora demais pra gente passar no caixa\"",
        "\"Funcionárias brincando e conversando em voz alta, com produtos espalhados fora do freezer. Isto , de concentração de fun\"",
        "\"Melhorar nos preços, e  lançar promoção para os seus clientes.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 82.1,
          "neg": 17.9
        },
        {
          "m": "2025-02",
          "pos": 80.6,
          "neg": 11.1
        },
        {
          "m": "2025-03",
          "pos": 77.1,
          "neg": 5.7
        },
        {
          "m": "2025-04",
          "pos": 76.9,
          "neg": 11.5
        },
        {
          "m": "2025-05",
          "pos": 84.8,
          "neg": 3.0
        },
        {
          "m": "2025-06",
          "pos": 69.0,
          "neg": 14.3
        },
        {
          "m": "2025-07",
          "pos": 77.8,
          "neg": 8.3
        },
        {
          "m": "2025-08",
          "pos": 80.0,
          "neg": 7.5
        },
        {
          "m": "2025-09",
          "pos": 64.7,
          "neg": 14.7
        },
        {
          "m": "2025-10",
          "pos": 63.6,
          "neg": 12.1
        },
        {
          "m": "2025-11",
          "pos": 70.3,
          "neg": 13.5
        },
        {
          "m": "2025-12",
          "pos": 68.9,
          "neg": 14.8
        },
        {
          "m": "2026-01",
          "pos": 75.0,
          "neg": 11.1
        },
        {
          "m": "2026-02",
          "pos": 71.4,
          "neg": 7.1
        },
        {
          "m": "2026-03",
          "pos": 69.0,
          "neg": 13.8
        },
        {
          "m": "2026-04",
          "pos": 81.5,
          "neg": 7.4
        },
        {
          "m": "2026-05",
          "pos": 62.5,
          "neg": 16.7
        }
      ]
    },
    {
      "nome": "L5156-JARDIM PRUDENCIA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 83.3,
      "nps_ajust": 83.0,
      "delta": -0.2,
      "sent_medio": 0.5,
      "pct_pos": 68,
      "pct_neg": 18,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Atendimento",
        "Promocoes Fidelidade",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Procurei a costela Black e infelizmente não tinha. Deixei de fazer a compra online para comprar na loja física e levei o\"",
        "\"Se não tem a mercadoria não deveria ter no app\"",
        "\"Permanecer com boas promoções.\"",
        "\"Melhorar é impossível, voces são ótimos\"",
        "\"Cheguei no local de retirada funcionários conversando e o pedido na prancheta e ninguém separou.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 77.1,
          "neg": 11.4
        },
        {
          "m": "2025-02",
          "pos": 75.0,
          "neg": 16.7
        },
        {
          "m": "2025-03",
          "pos": 70.0,
          "neg": 20.0
        },
        {
          "m": "2025-04",
          "pos": 79.3,
          "neg": 20.7
        },
        {
          "m": "2025-05",
          "pos": 66.7,
          "neg": 25.0
        },
        {
          "m": "2025-06",
          "pos": 60.5,
          "neg": 18.4
        },
        {
          "m": "2025-07",
          "pos": 69.7,
          "neg": 18.2
        },
        {
          "m": "2025-08",
          "pos": 71.9,
          "neg": 12.5
        },
        {
          "m": "2025-09",
          "pos": 67.9,
          "neg": 17.9
        },
        {
          "m": "2025-10",
          "pos": 61.1,
          "neg": 25.0
        },
        {
          "m": "2025-11",
          "pos": 57.9,
          "neg": 21.1
        },
        {
          "m": "2025-12",
          "pos": 71.0,
          "neg": 9.7
        },
        {
          "m": "2026-01",
          "pos": 63.2,
          "neg": 18.4
        },
        {
          "m": "2026-02",
          "pos": 65.5,
          "neg": 24.1
        },
        {
          "m": "2026-03",
          "pos": 66.7,
          "neg": 14.8
        },
        {
          "m": "2026-04",
          "pos": 61.3,
          "neg": 12.9
        },
        {
          "m": "2026-05",
          "pos": 70.0,
          "neg": 10.0
        }
      ]
    },
    {
      "nome": "L5158-LEBLON",
      "flag": "regular",
      "uf": "RJ",
      "nps_trad": 88.3,
      "nps_ajust": 87.9,
      "delta": -0.4,
      "sent_medio": 0.62,
      "pct_pos": 73,
      "pct_neg": 11,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Abastecimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Realizando entregas, não ajuda muito comprar pela internet se tenho que retirar na loja.\"",
        "\"Selecionei para receber a nota fiscal por email, conferi o endereço que estava correto porém não recebi.\"",
        "\"Muito atraso na entrega do pedido, poderiam ter avisado.\"",
        "\"Só tinha um croque madame queria mais ?\"",
        "\"Voltando a fazer promoções e os produtos aumentaram muito de preço.  Compro no Pão de Açúcar mais barato que na loja\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 82.3,
          "neg": 6.5
        },
        {
          "m": "2025-02",
          "pos": 71.1,
          "neg": 15.8
        },
        {
          "m": "2025-03",
          "pos": 75.6,
          "neg": 9.8
        },
        {
          "m": "2025-04",
          "pos": 63.4,
          "neg": 9.8
        },
        {
          "m": "2025-05",
          "pos": 74.6,
          "neg": 9.0
        },
        {
          "m": "2025-06",
          "pos": 83.8,
          "neg": 2.9
        },
        {
          "m": "2025-07",
          "pos": 77.6,
          "neg": 6.9
        },
        {
          "m": "2025-08",
          "pos": 69.8,
          "neg": 18.9
        },
        {
          "m": "2025-09",
          "pos": 75.0,
          "neg": 13.2
        },
        {
          "m": "2025-10",
          "pos": 69.0,
          "neg": 17.2
        },
        {
          "m": "2025-11",
          "pos": 73.9,
          "neg": 15.2
        },
        {
          "m": "2025-12",
          "pos": 78.7,
          "neg": 6.4
        },
        {
          "m": "2026-01",
          "pos": 61.5,
          "neg": 17.3
        },
        {
          "m": "2026-02",
          "pos": 53.9,
          "neg": 18.4
        },
        {
          "m": "2026-03",
          "pos": 78.8,
          "neg": 3.8
        },
        {
          "m": "2026-04",
          "pos": 80.4,
          "neg": 8.7
        },
        {
          "m": "2026-05",
          "pos": 80.0,
          "neg": 16.7
        }
      ]
    },
    {
      "nome": "L5159-COTIA KM 39",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 83.4,
      "nps_ajust": 83.0,
      "delta": -0.5,
      "sent_medio": 0.53,
      "pct_pos": 68,
      "pct_neg": 15,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Promocoes Fidelidade",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Cheguei em um momento que havia muito movimento, as atendentes não deixaram formar fila no caixa, mas não conseguiram ti\"",
        "\"Um dos bo s prediletos era a pizza de muzzarela.\nVocês mudaram a receita e ela ficou horrível. Oleosa e indigestão.\nPor \"",
        "\"Sou cliente há anos e é uma referência, tanto em carnes para o dia a dia, quanto para um churrasco.\"",
        "\"Esta tudo otimo\"",
        "\"Site e App, precisa funcionar melhor para escolher os itens.\n\nPor isso uso o recurso do WhatsApp.\nAtendente Natália semp\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 82.5,
          "neg": 10.0
        },
        {
          "m": "2025-02",
          "pos": 79.2,
          "neg": 8.3
        },
        {
          "m": "2025-03",
          "pos": 58.3,
          "neg": 20.8
        },
        {
          "m": "2025-04",
          "pos": 75.0,
          "neg": 16.7
        },
        {
          "m": "2025-05",
          "pos": 62.1,
          "neg": 13.8
        },
        {
          "m": "2025-06",
          "pos": 75.0,
          "neg": 15.0
        },
        {
          "m": "2025-07",
          "pos": 56.2,
          "neg": 18.8
        },
        {
          "m": "2025-08",
          "pos": 68.0,
          "neg": 16.0
        },
        {
          "m": "2025-09",
          "pos": 67.9,
          "neg": 10.7
        },
        {
          "m": "2025-10",
          "pos": 59.3,
          "neg": 14.8
        },
        {
          "m": "2025-11",
          "pos": 56.5,
          "neg": 26.1
        },
        {
          "m": "2025-12",
          "pos": 56.2,
          "neg": 25.0
        },
        {
          "m": "2026-01",
          "pos": 70.8,
          "neg": 20.8
        },
        {
          "m": "2026-02",
          "pos": 75.0,
          "neg": 0.0
        },
        {
          "m": "2026-03",
          "pos": 80.0,
          "neg": 6.7
        },
        {
          "m": "2026-04",
          "pos": 56.5,
          "neg": 17.4
        },
        {
          "m": "2026-05",
          "pos": 70.0,
          "neg": 20.0
        }
      ]
    },
    {
      "nome": "L5160-GUARATINGUETA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 93.3,
      "nps_ajust": 93.2,
      "delta": -0.1,
      "sent_medio": 0.72,
      "pct_pos": 79,
      "pct_neg": 7,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Abastecimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Se possível fazer promoções\"",
        "\"não tinha ninguem para me atender no caixa.\nO seu colaborador demorou para aparecer.\n\"",
        "\"manter o que já tem\"",
        "\"Os preços ainda estão altos. Deveria ter mais promoções.\"",
        "\"O atendente foi muito simpático, porém me indicou um produto que não atendeu a minha necessidade, como havia explicado.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 73.3,
          "neg": 13.3
        },
        {
          "m": "2025-02",
          "pos": 83.3,
          "neg": 0.0
        },
        {
          "m": "2025-03",
          "pos": 73.3,
          "neg": 6.7
        },
        {
          "m": "2025-04",
          "pos": 76.5,
          "neg": 11.8
        },
        {
          "m": "2025-05",
          "pos": 81.2,
          "neg": 9.4
        },
        {
          "m": "2025-06",
          "pos": 76.2,
          "neg": 2.4
        },
        {
          "m": "2025-07",
          "pos": 80.0,
          "neg": 8.0
        },
        {
          "m": "2025-08",
          "pos": 80.5,
          "neg": 4.9
        },
        {
          "m": "2025-09",
          "pos": 70.6,
          "neg": 5.9
        },
        {
          "m": "2025-10",
          "pos": 80.8,
          "neg": 7.7
        },
        {
          "m": "2025-11",
          "pos": 85.3,
          "neg": 5.9
        },
        {
          "m": "2025-12",
          "pos": 80.0,
          "neg": 8.0
        },
        {
          "m": "2026-01",
          "pos": 71.0,
          "neg": 6.5
        },
        {
          "m": "2026-02",
          "pos": 85.3,
          "neg": 2.9
        },
        {
          "m": "2026-03",
          "pos": 87.5,
          "neg": 3.1
        },
        {
          "m": "2026-04",
          "pos": 76.9,
          "neg": 15.4
        },
        {
          "m": "2026-05",
          "pos": 86.4,
          "neg": 9.1
        }
      ]
    },
    {
      "nome": "L5161-ITANHAEM",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 89.4,
      "nps_ajust": 89.2,
      "delta": -0.2,
      "sent_medio": 0.66,
      "pct_pos": 76,
      "pct_neg": 10,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Mais caixas atendendo\"",
        "\"Otimos produtos gostei muito da qualidade dos produtos top ??\"",
        "\"oferecer más oferta\"",
        "\"Queria parabenizar a equipe de atendimento da manhã me deram uma super atendimento\"",
        "\"Somente no preço\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 63.9,
          "neg": 13.9
        },
        {
          "m": "2025-02",
          "pos": 81.8,
          "neg": 9.1
        },
        {
          "m": "2025-03",
          "pos": 76.0,
          "neg": 12.0
        },
        {
          "m": "2025-04",
          "pos": 77.8,
          "neg": 8.9
        },
        {
          "m": "2025-05",
          "pos": 70.8,
          "neg": 8.3
        },
        {
          "m": "2025-06",
          "pos": 83.1,
          "neg": 11.9
        },
        {
          "m": "2025-07",
          "pos": 80.6,
          "neg": 9.7
        },
        {
          "m": "2025-08",
          "pos": 72.4,
          "neg": 8.6
        },
        {
          "m": "2025-09",
          "pos": 78.8,
          "neg": 9.6
        },
        {
          "m": "2025-10",
          "pos": 78.4,
          "neg": 10.8
        },
        {
          "m": "2025-11",
          "pos": 82.4,
          "neg": 0.0
        },
        {
          "m": "2025-12",
          "pos": 75.0,
          "neg": 9.4
        },
        {
          "m": "2026-01",
          "pos": 77.2,
          "neg": 5.3
        },
        {
          "m": "2026-02",
          "pos": 70.0,
          "neg": 20.0
        },
        {
          "m": "2026-03",
          "pos": 66.0,
          "neg": 14.9
        },
        {
          "m": "2026-04",
          "pos": 79.4,
          "neg": 8.8
        },
        {
          "m": "2026-05",
          "pos": 92.6,
          "neg": 7.4
        }
      ]
    },
    {
      "nome": "L5163-TAQUARI",
      "flag": "regular",
      "uf": "DF",
      "nps_trad": 90.9,
      "nps_ajust": 90.5,
      "delta": -0.4,
      "sent_medio": 0.68,
      "pct_pos": 77,
      "pct_neg": 9,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Loja Fisica",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Muita carne sai do espeto. Regular a maquina ou aumentar o tamanho do espeto\"",
        "\"Trazendo cada vez mais variedade de produtos para as lojas\"",
        "\"Não havia gelo nem refrigerante GELADO.\nUma moça muito simpática me atendeu.\nAchei que os preços eram mais caros, a loja\"",
        "\"Só mesmo melhorando alguns preços. O serviço está bom, atendentes ótimos, produtos quase todos muito bem cuidados.\"",
        "\"Gostaria de deixar a insatisfação com a compra pelo site , app e canal da Swift. \nFiz 3 tentativas de compras com cartão\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 86.7,
          "neg": 6.7
        },
        {
          "m": "2025-02",
          "pos": 77.8,
          "neg": 7.4
        },
        {
          "m": "2025-03",
          "pos": 81.8,
          "neg": 4.5
        },
        {
          "m": "2025-04",
          "pos": 88.2,
          "neg": 5.9
        },
        {
          "m": "2025-05",
          "pos": 77.3,
          "neg": 0.0
        },
        {
          "m": "2025-06",
          "pos": 78.9,
          "neg": 5.3
        },
        {
          "m": "2025-07",
          "pos": 79.2,
          "neg": 12.5
        },
        {
          "m": "2025-08",
          "pos": 87.1,
          "neg": 3.2
        },
        {
          "m": "2025-09",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2025-10",
          "pos": 84.2,
          "neg": 10.5
        },
        {
          "m": "2025-11",
          "pos": 60.0,
          "neg": 0.0
        },
        {
          "m": "2025-12",
          "pos": 80.0,
          "neg": 10.0
        },
        {
          "m": "2026-01",
          "pos": 83.3,
          "neg": 5.6
        },
        {
          "m": "2026-02",
          "pos": 60.0,
          "neg": 10.0
        },
        {
          "m": "2026-03",
          "pos": 78.3,
          "neg": 13.0
        },
        {
          "m": "2026-04",
          "pos": 42.9,
          "neg": 33.3
        },
        {
          "m": "2026-05",
          "pos": 66.7,
          "neg": 11.1
        }
      ]
    },
    {
      "nome": "L5164-ITAPETININGA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 93.5,
      "nps_ajust": 93.5,
      "delta": 0.0,
      "sent_medio": 0.76,
      "pct_pos": 82,
      "pct_neg": 6,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Atendimento maravilhosa, loja perfeita, comodidade para estacionar, parabéns aos envolvidos\"",
        "\"Os produtos não tem sabor de qualidade\"",
        "\"Poderia fazer mais promoções envolvendo todos os tipos de produtos.\"",
        "\"Disponibilidade do que tem no site. O que eu procurei eu não encontrei.\"",
        "\"Sempre buscamos melhorar dia a dia,mas.o que buscar já é suficiente. \nObrigado\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 90.0,
          "neg": 5.0
        },
        {
          "m": "2025-02",
          "pos": 60.0,
          "neg": 40.0
        },
        {
          "m": "2025-03",
          "pos": 69.2,
          "neg": 15.4
        },
        {
          "m": "2025-04",
          "pos": 64.3,
          "neg": 7.1
        },
        {
          "m": "2025-05",
          "pos": 87.0,
          "neg": 0.0
        },
        {
          "m": "2025-06",
          "pos": 87.5,
          "neg": 2.5
        },
        {
          "m": "2025-07",
          "pos": 89.7,
          "neg": 3.4
        },
        {
          "m": "2025-08",
          "pos": 76.9,
          "neg": 7.7
        },
        {
          "m": "2025-09",
          "pos": 84.8,
          "neg": 9.1
        },
        {
          "m": "2025-10",
          "pos": 73.2,
          "neg": 9.8
        },
        {
          "m": "2025-11",
          "pos": 87.1,
          "neg": 6.5
        },
        {
          "m": "2025-12",
          "pos": 88.2,
          "neg": 0.0
        },
        {
          "m": "2026-01",
          "pos": 79.2,
          "neg": 8.3
        },
        {
          "m": "2026-02",
          "pos": 89.2,
          "neg": 0.0
        },
        {
          "m": "2026-03",
          "pos": 86.3,
          "neg": 3.9
        },
        {
          "m": "2026-04",
          "pos": 73.8,
          "neg": 4.8
        },
        {
          "m": "2026-05",
          "pos": 72.7,
          "neg": 13.6
        }
      ]
    },
    {
      "nome": "L5165-MOGI DAS CRUZES MOGILAR",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 89.6,
      "nps_ajust": 89.1,
      "delta": -0.5,
      "sent_medio": 0.57,
      "pct_pos": 70,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Loja Fisica",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Promoções sazonais, ou promoções semanais clássicas , exemplo \" toda segunda teremos promoção de frango \", outra sugestã\"",
        "\"Está tudo ótimo.\"",
        "\"atendimento maravilhoso , produtos maravilhosos\"",
        "\"Melhorar um pouquinho mais os preços faria com que eu fosse com mais frequência às lojas da Swift.\"",
        "\"Não tem o que melhorar,produtos excelentes, atendimento excepcional. Me recomendaram a picanha legado e estava muito boa\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2025-02",
          "pos": 46.2,
          "neg": 23.1
        },
        {
          "m": "2025-03",
          "pos": 69.2,
          "neg": 15.4
        },
        {
          "m": "2025-04",
          "pos": 70.8,
          "neg": 20.8
        },
        {
          "m": "2025-05",
          "pos": 77.8,
          "neg": 5.6
        },
        {
          "m": "2025-06",
          "pos": 78.9,
          "neg": 10.5
        },
        {
          "m": "2025-07",
          "pos": 86.4,
          "neg": 9.1
        },
        {
          "m": "2025-08",
          "pos": 71.4,
          "neg": 9.5
        },
        {
          "m": "2025-09",
          "pos": 75.0,
          "neg": 15.0
        },
        {
          "m": "2025-10",
          "pos": 57.9,
          "neg": 21.1
        },
        {
          "m": "2025-11",
          "pos": 61.1,
          "neg": 22.2
        },
        {
          "m": "2025-12",
          "pos": 58.3,
          "neg": 16.7
        },
        {
          "m": "2026-01",
          "pos": 66.7,
          "neg": 4.8
        },
        {
          "m": "2026-02",
          "pos": 76.2,
          "neg": 9.5
        },
        {
          "m": "2026-03",
          "pos": 61.9,
          "neg": 14.3
        },
        {
          "m": "2026-04",
          "pos": 68.4,
          "neg": 10.5
        },
        {
          "m": "2026-05",
          "pos": 68.8,
          "neg": 6.2
        }
      ]
    },
    {
      "nome": "L5166-MAIRIPORA",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 85.4,
      "nps_ajust": 85.1,
      "delta": -0.2,
      "sent_medio": 0.56,
      "pct_pos": 70,
      "pct_neg": 14,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Melhorar o estoque.\"",
        "\"Sugiro que tenha algum programa de desconto progressivo...isso seria bom para quem compra sempre\"",
        "\"Parcelamento de valores. Hoje o valor é de R$ 150,00. mas poderia ser de menor valor. Sugestão.\"",
        "\"A qualidade sós produtos, principalmente da picanha estão péssimas.\"",
        "\"Esta tudo ótimo, não tem o que melhorar.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 70.8,
          "neg": 25.0
        },
        {
          "m": "2025-02",
          "pos": 66.7,
          "neg": 16.7
        },
        {
          "m": "2025-03",
          "pos": 57.1,
          "neg": 26.5
        },
        {
          "m": "2025-04",
          "pos": 70.8,
          "neg": 8.3
        },
        {
          "m": "2025-05",
          "pos": 71.1,
          "neg": 7.9
        },
        {
          "m": "2025-06",
          "pos": 76.3,
          "neg": 7.9
        },
        {
          "m": "2025-07",
          "pos": 66.7,
          "neg": 14.3
        },
        {
          "m": "2025-08",
          "pos": 80.8,
          "neg": 7.7
        },
        {
          "m": "2025-09",
          "pos": 84.8,
          "neg": 6.1
        },
        {
          "m": "2025-10",
          "pos": 68.0,
          "neg": 8.0
        },
        {
          "m": "2025-11",
          "pos": 72.2,
          "neg": 16.7
        },
        {
          "m": "2025-12",
          "pos": 71.4,
          "neg": 14.3
        },
        {
          "m": "2026-01",
          "pos": 42.9,
          "neg": 33.3
        },
        {
          "m": "2026-02",
          "pos": 75.0,
          "neg": 15.0
        },
        {
          "m": "2026-03",
          "pos": 68.2,
          "neg": 13.6
        },
        {
          "m": "2026-04",
          "pos": 75.0,
          "neg": 12.5
        },
        {
          "m": "2026-05",
          "pos": 85.7,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5168-SALTO",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 91.6,
      "nps_ajust": 91.3,
      "delta": -0.3,
      "sent_medio": 0.68,
      "pct_pos": 77,
      "pct_neg": 9,
      "top3_problemas": [
        "Entrega Logistica",
        "Abastecimento",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Estou querendo novamente a beringela empanada e só achei uma vez\"",
        "\"Pedido teve uma falha n entrega,tive que ligar pra resolver\nDeu td certo\"",
        "\"Procurei isca de polaca do Alaska empanada  (acho que da Seara) e não encontrei\"",
        "\"só tinha uma atendente e nada simpática\"",
        "\"Falta um plano de fidelidade ao cliente com descontos para membros.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 70.8,
          "neg": 8.3
        },
        {
          "m": "2025-02",
          "pos": 76.9,
          "neg": 15.4
        },
        {
          "m": "2025-03",
          "pos": 83.3,
          "neg": 0.0
        },
        {
          "m": "2025-04",
          "pos": 81.2,
          "neg": 12.5
        },
        {
          "m": "2025-05",
          "pos": 79.3,
          "neg": 6.9
        },
        {
          "m": "2025-06",
          "pos": 66.7,
          "neg": 6.7
        },
        {
          "m": "2025-07",
          "pos": 83.3,
          "neg": 5.6
        },
        {
          "m": "2025-08",
          "pos": 75.9,
          "neg": 10.3
        },
        {
          "m": "2025-09",
          "pos": 80.6,
          "neg": 16.1
        },
        {
          "m": "2025-10",
          "pos": 80.0,
          "neg": 8.0
        },
        {
          "m": "2025-11",
          "pos": 75.0,
          "neg": 8.3
        },
        {
          "m": "2025-12",
          "pos": 72.7,
          "neg": 6.1
        },
        {
          "m": "2026-01",
          "pos": 74.2,
          "neg": 6.5
        },
        {
          "m": "2026-02",
          "pos": 74.2,
          "neg": 16.1
        },
        {
          "m": "2026-03",
          "pos": 85.3,
          "neg": 5.9
        },
        {
          "m": "2026-04",
          "pos": 80.0,
          "neg": 8.0
        },
        {
          "m": "2026-05",
          "pos": 78.9,
          "neg": 15.8
        }
      ]
    },
    {
      "nome": "L5169-JACAREI",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 89.7,
      "nps_ajust": 89.1,
      "delta": -0.7,
      "sent_medio": 0.59,
      "pct_pos": 72,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Loja Fisica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"A Rabada estava muito gordurosa, já havia comprado com uma melhor qualidade. Tenho ciência que a rabada e gordurosa, mas\"",
        "\"Vocês são os melhores.\"",
        "\"Continuar asdim, porque tenho certeza que vai melhorar muito.\"",
        "\"Melhorar a organização da loja, Melhorar a educação dos funcionários e cordialidade. E deixar mais fácil de encontrar os\"",
        "\"Estão de parabéns ?\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 74.3,
          "neg": 14.3
        },
        {
          "m": "2025-02",
          "pos": 80.0,
          "neg": 20.0
        },
        {
          "m": "2025-03",
          "pos": 77.8,
          "neg": 14.8
        },
        {
          "m": "2025-04",
          "pos": 57.1,
          "neg": 7.1
        },
        {
          "m": "2025-05",
          "pos": 82.8,
          "neg": 6.9
        },
        {
          "m": "2025-06",
          "pos": 81.0,
          "neg": 9.5
        },
        {
          "m": "2025-07",
          "pos": 66.7,
          "neg": 11.1
        },
        {
          "m": "2025-08",
          "pos": 66.7,
          "neg": 20.0
        },
        {
          "m": "2025-09",
          "pos": 69.2,
          "neg": 19.2
        },
        {
          "m": "2025-10",
          "pos": 55.6,
          "neg": 16.7
        },
        {
          "m": "2025-11",
          "pos": 80.0,
          "neg": 10.0
        },
        {
          "m": "2025-12",
          "pos": 76.0,
          "neg": 12.0
        },
        {
          "m": "2026-01",
          "pos": 55.2,
          "neg": 20.7
        },
        {
          "m": "2026-02",
          "pos": 81.0,
          "neg": 9.5
        },
        {
          "m": "2026-03",
          "pos": 76.5,
          "neg": 11.8
        },
        {
          "m": "2026-04",
          "pos": 53.8,
          "neg": 0.0
        },
        {
          "m": "2026-05",
          "pos": 76.9,
          "neg": 7.7
        }
      ]
    },
    {
      "nome": "L5172-PRESIDENTE PRUDENTE",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 94.0,
      "nps_ajust": 93.4,
      "delta": -0.6,
      "sent_medio": 0.72,
      "pct_pos": 81,
      "pct_neg": 9,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Loja Fisica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Abastecimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Está ótimo já.\"",
        "\"Fazendo sempre boas promoções\"",
        "\"Tenho 76 anos p mim a melhor carne é o famoso BOMBOM miolo do alcatrão sabor o melhor e macio\"",
        "\"Frete grátis para compras menores e cupons de desconto\"",
        "\"Estão perfeitos os produtos e serviços da Swift. Parabéns!!\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 76.0,
          "neg": 8.0
        },
        {
          "m": "2025-02",
          "pos": 88.9,
          "neg": 0.0
        },
        {
          "m": "2025-03",
          "pos": 80.0,
          "neg": 6.7
        },
        {
          "m": "2025-04",
          "pos": 93.3,
          "neg": 6.7
        },
        {
          "m": "2025-05",
          "pos": 81.2,
          "neg": 4.2
        },
        {
          "m": "2025-06",
          "pos": 80.5,
          "neg": 9.8
        },
        {
          "m": "2025-07",
          "pos": 78.4,
          "neg": 9.8
        },
        {
          "m": "2025-08",
          "pos": 85.7,
          "neg": 9.5
        },
        {
          "m": "2025-09",
          "pos": 90.9,
          "neg": 9.1
        },
        {
          "m": "2025-10",
          "pos": 88.4,
          "neg": 7.0
        },
        {
          "m": "2025-11",
          "pos": 76.7,
          "neg": 13.3
        },
        {
          "m": "2025-12",
          "pos": 77.8,
          "neg": 15.6
        },
        {
          "m": "2026-01",
          "pos": 80.0,
          "neg": 2.5
        },
        {
          "m": "2026-02",
          "pos": 82.8,
          "neg": 13.8
        },
        {
          "m": "2026-03",
          "pos": 81.6,
          "neg": 6.1
        },
        {
          "m": "2026-04",
          "pos": 73.2,
          "neg": 9.8
        },
        {
          "m": "2026-05",
          "pos": 75.0,
          "neg": 12.5
        }
      ]
    },
    {
      "nome": "L5173-PERUIBE",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 88.0,
      "nps_ajust": 87.7,
      "delta": -0.3,
      "sent_medio": 0.66,
      "pct_pos": 77,
      "pct_neg": 11,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Loja Fisica",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Continuando com esta qualidade!\"",
        "\"Faltou planejamento para o período. Não encontrei tudo o que precisava.\"",
        "\"Primeira vez que fui á loja. Gostei de tudo.  Se Deus quiser vou voltar lá.\"",
        "\"Ter mais lojas\"",
        "\"Estou muito satisfeito com a loja\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 72.9,
          "neg": 11.9
        },
        {
          "m": "2025-02",
          "pos": 84.4,
          "neg": 6.2
        },
        {
          "m": "2025-03",
          "pos": 71.0,
          "neg": 19.4
        },
        {
          "m": "2025-04",
          "pos": 78.8,
          "neg": 15.2
        },
        {
          "m": "2025-05",
          "pos": 87.0,
          "neg": 0.0
        },
        {
          "m": "2025-06",
          "pos": 90.3,
          "neg": 6.5
        },
        {
          "m": "2025-07",
          "pos": 73.9,
          "neg": 8.7
        },
        {
          "m": "2025-08",
          "pos": 95.0,
          "neg": 5.0
        },
        {
          "m": "2025-09",
          "pos": 76.2,
          "neg": 14.3
        },
        {
          "m": "2025-10",
          "pos": 71.0,
          "neg": 12.9
        },
        {
          "m": "2025-11",
          "pos": 69.0,
          "neg": 6.9
        },
        {
          "m": "2025-12",
          "pos": 75.0,
          "neg": 8.3
        },
        {
          "m": "2026-01",
          "pos": 70.3,
          "neg": 17.2
        },
        {
          "m": "2026-02",
          "pos": 82.6,
          "neg": 8.7
        },
        {
          "m": "2026-03",
          "pos": 86.2,
          "neg": 13.8
        },
        {
          "m": "2026-04",
          "pos": 82.4,
          "neg": 14.7
        },
        {
          "m": "2026-05",
          "pos": 62.5,
          "neg": 12.5
        }
      ]
    },
    {
      "nome": "L5174-PERI PERI",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 81.8,
      "nps_ajust": 81.0,
      "delta": -0.8,
      "sent_medio": 0.43,
      "pct_pos": 64,
      "pct_neg": 21,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Melhor atendimento da carla\"",
        "\"a loja estava sem ar condicionado, e com poucos atendentes... são super atenciosos, mas como estavam em poucos não conse\"",
        "\"No final de semana poderia ter mais funcionários pois a procura das lojas de clientes e grande\"",
        "\"Melhorando os preços!\"",
        "\"Não, vocês já estão ótimos.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 82.8,
          "neg": 13.8
        },
        {
          "m": "2025-02",
          "pos": 52.9,
          "neg": 29.4
        },
        {
          "m": "2025-03",
          "pos": 52.0,
          "neg": 36.0
        },
        {
          "m": "2025-04",
          "pos": 72.4,
          "neg": 17.2
        },
        {
          "m": "2025-05",
          "pos": 76.0,
          "neg": 12.0
        },
        {
          "m": "2025-06",
          "pos": 82.1,
          "neg": 7.1
        },
        {
          "m": "2025-07",
          "pos": 59.3,
          "neg": 37.0
        },
        {
          "m": "2025-08",
          "pos": 64.3,
          "neg": 14.3
        },
        {
          "m": "2025-09",
          "pos": 74.1,
          "neg": 18.5
        },
        {
          "m": "2025-10",
          "pos": 62.9,
          "neg": 20.0
        },
        {
          "m": "2025-11",
          "pos": 74.2,
          "neg": 19.4
        },
        {
          "m": "2025-12",
          "pos": 71.4,
          "neg": 10.7
        },
        {
          "m": "2026-01",
          "pos": 41.2,
          "neg": 38.2
        },
        {
          "m": "2026-02",
          "pos": 45.5,
          "neg": 22.7
        },
        {
          "m": "2026-03",
          "pos": 54.2,
          "neg": 20.8
        },
        {
          "m": "2026-04",
          "pos": 76.7,
          "neg": 10.0
        },
        {
          "m": "2026-05",
          "pos": 44.8,
          "neg": 24.1
        }
      ]
    },
    {
      "nome": "L5175-PARQUE SAO LUCAS",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 91.1,
      "nps_ajust": 90.8,
      "delta": -0.4,
      "sent_medio": 0.71,
      "pct_pos": 79,
      "pct_neg": 8,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Abastecimento",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Para mim está tudo bem ? boa tarde\"",
        "\"Melhorar os preços\"",
        "\"Porém tive problema a qualidade mudou muito tava com cheiro e gosto estranho parecia carne de papelão\"",
        "\"vcs poderiam aceitar ticket refeição\"",
        "\"Compro praticamente toda semana, as vezes passo em frente a loja e vejo a placa com as promoções.\nO sistema da SWIFT pod\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 77.8,
          "neg": 13.3
        },
        {
          "m": "2025-02",
          "pos": 63.6,
          "neg": 13.6
        },
        {
          "m": "2025-03",
          "pos": 72.7,
          "neg": 9.1
        },
        {
          "m": "2025-04",
          "pos": 86.7,
          "neg": 6.7
        },
        {
          "m": "2025-05",
          "pos": 76.9,
          "neg": 2.6
        },
        {
          "m": "2025-06",
          "pos": 73.6,
          "neg": 7.5
        },
        {
          "m": "2025-07",
          "pos": 89.2,
          "neg": 8.1
        },
        {
          "m": "2025-08",
          "pos": 86.8,
          "neg": 7.9
        },
        {
          "m": "2025-09",
          "pos": 89.4,
          "neg": 4.3
        },
        {
          "m": "2025-10",
          "pos": 76.9,
          "neg": 10.3
        },
        {
          "m": "2025-11",
          "pos": 80.0,
          "neg": 5.7
        },
        {
          "m": "2025-12",
          "pos": 84.6,
          "neg": 3.8
        },
        {
          "m": "2026-01",
          "pos": 66.7,
          "neg": 19.4
        },
        {
          "m": "2026-02",
          "pos": 76.0,
          "neg": 4.0
        },
        {
          "m": "2026-03",
          "pos": 77.1,
          "neg": 5.7
        },
        {
          "m": "2026-04",
          "pos": 82.4,
          "neg": 8.8
        },
        {
          "m": "2026-05",
          "pos": 70.0,
          "neg": 15.0
        }
      ]
    },
    {
      "nome": "L5176-BRAGANCA PAULISTA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 86.0,
      "nps_ajust": 85.6,
      "delta": -0.5,
      "sent_medio": 0.51,
      "pct_pos": 66,
      "pct_neg": 15,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Abastecimento",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"não encontrei os produtos que estavam em promoção e ao perguntar se iriam repor a gondola para atender os clientes, a re\"",
        "\"Tenho alguma dificuldade para encontrar os produtos que quero pois o lay out da loja muda com frequência.\"",
        "\"Me dando as pizzas de graça pois vocês me frustraram demais.\"",
        "\"Pra mim está ótimo...\"",
        "\"Colocar tabela nutricional como drop down no app ou como última foto do produto, alguns bugs como não achar loja em nenh\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 65.4,
          "neg": 19.2
        },
        {
          "m": "2025-02",
          "pos": 81.8,
          "neg": 4.5
        },
        {
          "m": "2025-03",
          "pos": 64.1,
          "neg": 10.3
        },
        {
          "m": "2025-04",
          "pos": 78.4,
          "neg": 10.8
        },
        {
          "m": "2025-05",
          "pos": 54.1,
          "neg": 16.2
        },
        {
          "m": "2025-06",
          "pos": 70.7,
          "neg": 12.2
        },
        {
          "m": "2025-07",
          "pos": 59.3,
          "neg": 22.2
        },
        {
          "m": "2025-08",
          "pos": 69.2,
          "neg": 12.8
        },
        {
          "m": "2025-09",
          "pos": 62.7,
          "neg": 11.8
        },
        {
          "m": "2025-10",
          "pos": 76.5,
          "neg": 11.8
        },
        {
          "m": "2025-11",
          "pos": 64.6,
          "neg": 8.3
        },
        {
          "m": "2025-12",
          "pos": 68.4,
          "neg": 15.8
        },
        {
          "m": "2026-01",
          "pos": 52.9,
          "neg": 20.6
        },
        {
          "m": "2026-02",
          "pos": 62.3,
          "neg": 19.7
        },
        {
          "m": "2026-03",
          "pos": 66.7,
          "neg": 17.8
        },
        {
          "m": "2026-04",
          "pos": 62.5,
          "neg": 15.6
        },
        {
          "m": "2026-05",
          "pos": 65.5,
          "neg": 17.2
        }
      ]
    },
    {
      "nome": "L5177-FREGUESIA DO O",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 84.4,
      "nps_ajust": 83.9,
      "delta": -0.5,
      "sent_medio": 0.55,
      "pct_pos": 69,
      "pct_neg": 14,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Atendimento",
        "Loja Fisica",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Comprei uma picanha super dura , provavelmente não era picanha\"",
        "\"Gabriel sempre me atende muito bem com educação e um sorriso!\"",
        "\"Atendentes sempre prestativos\"",
        "\"Pra mim está tudo ótimo. Parabéns pra vcs aí.\"",
        "\"Deveria ter mais lojas por exemplo eu me desloca de perus até a av petronio portela para adquirir produtos da Swift  for\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 59.6,
          "neg": 25.5
        },
        {
          "m": "2025-02",
          "pos": 60.0,
          "neg": 24.0
        },
        {
          "m": "2025-03",
          "pos": 52.0,
          "neg": 24.0
        },
        {
          "m": "2025-04",
          "pos": 72.1,
          "neg": 9.3
        },
        {
          "m": "2025-05",
          "pos": 74.3,
          "neg": 8.6
        },
        {
          "m": "2025-06",
          "pos": 75.0,
          "neg": 9.4
        },
        {
          "m": "2025-07",
          "pos": 64.9,
          "neg": 10.8
        },
        {
          "m": "2025-08",
          "pos": 69.4,
          "neg": 16.3
        },
        {
          "m": "2025-09",
          "pos": 57.1,
          "neg": 11.4
        },
        {
          "m": "2025-10",
          "pos": 66.7,
          "neg": 3.0
        },
        {
          "m": "2025-11",
          "pos": 53.1,
          "neg": 21.9
        },
        {
          "m": "2025-12",
          "pos": 65.5,
          "neg": 27.6
        },
        {
          "m": "2026-01",
          "pos": 82.6,
          "neg": 9.3
        },
        {
          "m": "2026-02",
          "pos": 69.4,
          "neg": 11.1
        },
        {
          "m": "2026-03",
          "pos": 75.0,
          "neg": 11.1
        },
        {
          "m": "2026-04",
          "pos": 75.0,
          "neg": 7.1
        },
        {
          "m": "2026-05",
          "pos": 68.2,
          "neg": 9.1
        }
      ]
    },
    {
      "nome": "L5178-PERIMETRAL",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 88.1,
      "nps_ajust": 87.7,
      "delta": -0.4,
      "sent_medio": 0.55,
      "pct_pos": 68,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Abastecimento",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"COMPREI UMA PICANHA QUE DE PICANHA NÃO TINHA NADA\"",
        "\"Observei que o produto Bolinhas de queijo estão com preço mais atrativo na Coop.\nFiquei surpresa e não satisfeita com is\"",
        "\"Beiby picanha dura aff\"",
        "\"Deveria te mais produtos em promoção.\"",
        "\"Permitir rastreamento do pedido, melhoria no site pois não conseguia acessar a área do pedido\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 73.9,
          "neg": 10.9
        },
        {
          "m": "2025-02",
          "pos": 64.7,
          "neg": 14.7
        },
        {
          "m": "2025-03",
          "pos": 50.0,
          "neg": 28.9
        },
        {
          "m": "2025-04",
          "pos": 72.2,
          "neg": 5.6
        },
        {
          "m": "2025-05",
          "pos": 70.0,
          "neg": 20.0
        },
        {
          "m": "2025-06",
          "pos": 62.9,
          "neg": 20.0
        },
        {
          "m": "2025-07",
          "pos": 82.1,
          "neg": 3.6
        },
        {
          "m": "2025-08",
          "pos": 63.6,
          "neg": 15.9
        },
        {
          "m": "2025-09",
          "pos": 64.2,
          "neg": 15.1
        },
        {
          "m": "2025-10",
          "pos": 74.5,
          "neg": 8.5
        },
        {
          "m": "2025-11",
          "pos": 71.4,
          "neg": 10.7
        },
        {
          "m": "2025-12",
          "pos": 65.2,
          "neg": 8.7
        },
        {
          "m": "2026-01",
          "pos": 61.1,
          "neg": 13.9
        },
        {
          "m": "2026-02",
          "pos": 66.7,
          "neg": 22.2
        },
        {
          "m": "2026-03",
          "pos": 76.7,
          "neg": 7.0
        },
        {
          "m": "2026-04",
          "pos": 71.4,
          "neg": 10.7
        },
        {
          "m": "2026-05",
          "pos": 70.0,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5179-VILA YARA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 87.9,
      "nps_ajust": 87.6,
      "delta": -0.3,
      "sent_medio": 0.72,
      "pct_pos": 81,
      "pct_neg": 10,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Fui muito bem atendido pelas funcionárias Débora e angélica\"",
        "\"Ótimo atendimento da Débora\"",
        "\"Perfeito em tudo amo produtos dá marca\nParabéns\"",
        "\"Muito bom produtos de qualidade e atendimento de 1°primeira.\"",
        "\"promoções já foram melhores\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 68.8,
          "neg": 25.0
        },
        {
          "m": "2025-02",
          "pos": 68.0,
          "neg": 12.0
        },
        {
          "m": "2025-03",
          "pos": 62.5,
          "neg": 12.5
        },
        {
          "m": "2025-04",
          "pos": 80.8,
          "neg": 15.4
        },
        {
          "m": "2025-05",
          "pos": 67.5,
          "neg": 17.5
        },
        {
          "m": "2025-06",
          "pos": 80.0,
          "neg": 8.9
        },
        {
          "m": "2025-07",
          "pos": 79.5,
          "neg": 12.8
        },
        {
          "m": "2025-08",
          "pos": 88.9,
          "neg": 9.3
        },
        {
          "m": "2025-09",
          "pos": 65.5,
          "neg": 13.8
        },
        {
          "m": "2025-10",
          "pos": 84.2,
          "neg": 10.5
        },
        {
          "m": "2025-11",
          "pos": 75.0,
          "neg": 18.8
        },
        {
          "m": "2025-12",
          "pos": 91.2,
          "neg": 3.9
        },
        {
          "m": "2026-01",
          "pos": 78.9,
          "neg": 12.3
        },
        {
          "m": "2026-02",
          "pos": 92.5,
          "neg": 5.0
        },
        {
          "m": "2026-03",
          "pos": 84.2,
          "neg": 2.6
        },
        {
          "m": "2026-04",
          "pos": 84.9,
          "neg": 6.5
        },
        {
          "m": "2026-05",
          "pos": 89.7,
          "neg": 7.7
        }
      ]
    },
    {
      "nome": "L5180-FREI CANECA",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 84.0,
      "nps_ajust": 83.5,
      "delta": -0.5,
      "sent_medio": 0.52,
      "pct_pos": 68,
      "pct_neg": 17,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Atendimento",
        "Promocoes Fidelidade",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"A Swift põe e tira produtos do mercado. Isso faz com que em muitas oportunidades  vou à loja e não encontro produtos que\"",
        "\"Impressão minha ou parece que o pãozinho está menor?\"",
        "\"O atendente foi muito simpático e prestativo, mas a carne não estava nada macia, apesar de eu ter pedido especificamente\"",
        "\"A qualidade dos produtos pré prontos é muito ruim. Sabor horrível. Já tentei várias vezes em diversos produtos sem suces\"",
        "\"O pedido foi entregue corretamente, mas houve problemas com a empresa terceirizada que maneja as entregas. Recomendaria \""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 65.1,
          "neg": 25.4
        },
        {
          "m": "2025-02",
          "pos": 75.5,
          "neg": 11.3
        },
        {
          "m": "2025-03",
          "pos": 65.8,
          "neg": 26.3
        },
        {
          "m": "2025-04",
          "pos": 55.9,
          "neg": 20.6
        },
        {
          "m": "2025-05",
          "pos": 77.1,
          "neg": 14.3
        },
        {
          "m": "2025-06",
          "pos": 60.0,
          "neg": 22.9
        },
        {
          "m": "2025-07",
          "pos": 67.9,
          "neg": 17.9
        },
        {
          "m": "2025-08",
          "pos": 82.9,
          "neg": 11.4
        },
        {
          "m": "2025-09",
          "pos": 55.2,
          "neg": 17.2
        },
        {
          "m": "2025-10",
          "pos": 68.2,
          "neg": 9.1
        },
        {
          "m": "2025-11",
          "pos": 72.7,
          "neg": 12.1
        },
        {
          "m": "2025-12",
          "pos": 84.3,
          "neg": 9.8
        },
        {
          "m": "2026-01",
          "pos": 73.2,
          "neg": 14.6
        },
        {
          "m": "2026-02",
          "pos": 79.1,
          "neg": 16.3
        },
        {
          "m": "2026-03",
          "pos": 60.0,
          "neg": 18.3
        },
        {
          "m": "2026-04",
          "pos": 58.8,
          "neg": 5.9
        },
        {
          "m": "2026-05",
          "pos": 40.9,
          "neg": 31.8
        }
      ]
    },
    {
      "nome": "L5181-RIBEIRAO PIRES",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 89.8,
      "nps_ajust": 89.5,
      "delta": -0.3,
      "sent_medio": 0.72,
      "pct_pos": 81,
      "pct_neg": 9,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Continuar com o bom atendimento dos funcionários\"",
        "\"Colocando algumas promoções que realmente chamassem a atenção\"",
        "\"So cuidar para quando tiver reunião com os funcionários,  não deixar a loja sem atendimento, ja aconteceu antes comigo!\n\"",
        "\"Preço um pouco mais acessível, para que os menos favorecidos possam comprar também !\"",
        "\"O diferencial da swift é o bom atendimento. O Franklin sempre nos atende muito bem, indica bons produtos. Um ponto de me\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 75.9,
          "neg": 8.6
        },
        {
          "m": "2025-02",
          "pos": 85.7,
          "neg": 14.3
        },
        {
          "m": "2025-03",
          "pos": 72.7,
          "neg": 18.2
        },
        {
          "m": "2025-04",
          "pos": 81.6,
          "neg": 10.5
        },
        {
          "m": "2025-05",
          "pos": 77.8,
          "neg": 8.3
        },
        {
          "m": "2025-06",
          "pos": 84.3,
          "neg": 5.9
        },
        {
          "m": "2025-07",
          "pos": 92.3,
          "neg": 5.1
        },
        {
          "m": "2025-08",
          "pos": 80.0,
          "neg": 5.7
        },
        {
          "m": "2025-09",
          "pos": 83.7,
          "neg": 4.1
        },
        {
          "m": "2025-10",
          "pos": 75.9,
          "neg": 10.3
        },
        {
          "m": "2025-11",
          "pos": 64.3,
          "neg": 25.0
        },
        {
          "m": "2025-12",
          "pos": 80.4,
          "neg": 13.7
        },
        {
          "m": "2026-01",
          "pos": 80.0,
          "neg": 12.5
        },
        {
          "m": "2026-02",
          "pos": 88.4,
          "neg": 4.7
        },
        {
          "m": "2026-03",
          "pos": 85.7,
          "neg": 5.7
        },
        {
          "m": "2026-04",
          "pos": 87.2,
          "neg": 0.0
        },
        {
          "m": "2026-05",
          "pos": 70.0,
          "neg": 25.0
        }
      ]
    },
    {
      "nome": "L5182-SAO JOSE DO RIO PRETO (DAMHA)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 88.1,
      "nps_ajust": 87.7,
      "delta": -0.4,
      "sent_medio": 0.61,
      "pct_pos": 74,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Loja Fisica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Precisava de uns cupons de desconto\"",
        "\"Todas as vezes eu preciso solicitar que coloquem meu CPF.\"",
        "\"Abastecimento,  falta de alguns produtos e contra filé  de qualidade (duro).\"",
        "\"os preços são bem altos, acredito que por ser uma loja de fábrica, os valores são extremamente elevados.\"",
        "\"Sal de parrilha defumado porque assim eu compro tudo aí mesmo outro cliente que estava na loja também queria obrigado va\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 80.0,
          "neg": 10.0
        },
        {
          "m": "2025-02",
          "pos": 90.0,
          "neg": 0.0
        },
        {
          "m": "2025-03",
          "pos": 64.7,
          "neg": 17.6
        },
        {
          "m": "2025-04",
          "pos": 80.0,
          "neg": 10.0
        },
        {
          "m": "2025-05",
          "pos": 73.3,
          "neg": 20.0
        },
        {
          "m": "2025-06",
          "pos": 64.3,
          "neg": 14.3
        },
        {
          "m": "2025-07",
          "pos": 83.3,
          "neg": 0.0
        },
        {
          "m": "2025-08",
          "pos": 60.0,
          "neg": 10.0
        },
        {
          "m": "2025-09",
          "pos": 50.0,
          "neg": 38.9
        },
        {
          "m": "2025-10",
          "pos": 81.8,
          "neg": 18.2
        },
        {
          "m": "2025-11",
          "pos": 71.4,
          "neg": 14.3
        },
        {
          "m": "2025-12",
          "pos": 87.5,
          "neg": 6.2
        },
        {
          "m": "2026-01",
          "pos": 45.5,
          "neg": 18.2
        },
        {
          "m": "2026-02",
          "pos": 78.6,
          "neg": 7.1
        },
        {
          "m": "2026-03",
          "pos": 87.0,
          "neg": 8.7
        },
        {
          "m": "2026-04",
          "pos": 82.4,
          "neg": 11.8
        },
        {
          "m": "2026-05",
          "pos": 75.0,
          "neg": 12.5
        }
      ]
    },
    {
      "nome": "L5184-PRACA VARNHAGEM",
      "flag": "regular",
      "uf": "RJ",
      "nps_trad": 87.1,
      "nps_ajust": 86.5,
      "delta": -0.6,
      "sent_medio": 0.53,
      "pct_pos": 66,
      "pct_neg": 14,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Abastecimento",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"ótimo lugar, com estacionamento, raro na tijuca. A percepção de valor é variada para cada um, contudo, ainda não conside\"",
        "\"O site/app por vezes quando vc faz alguma alteração na quantidade na cesta e diz que o produto nao se encontra disponíve\"",
        "\"Nada acrescentar. Gosto muito da Swift.\"",
        "\"Há muitos produtos adicionados com água e solução \nTem que ficar atento\"",
        "\"Acho falta de organização dos produtos \nQuase todas as secções misturadas ou seja achar produtos é uma odisseia\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 68.2,
          "neg": 13.6
        },
        {
          "m": "2025-02",
          "pos": 72.4,
          "neg": 11.8
        },
        {
          "m": "2025-03",
          "pos": 74.0,
          "neg": 8.2
        },
        {
          "m": "2025-04",
          "pos": 65.3,
          "neg": 15.8
        },
        {
          "m": "2025-05",
          "pos": 60.7,
          "neg": 13.5
        },
        {
          "m": "2025-06",
          "pos": 66.7,
          "neg": 12.4
        },
        {
          "m": "2025-07",
          "pos": 66.7,
          "neg": 8.9
        },
        {
          "m": "2025-08",
          "pos": 64.9,
          "neg": 10.8
        },
        {
          "m": "2025-09",
          "pos": 76.0,
          "neg": 7.3
        },
        {
          "m": "2025-10",
          "pos": 67.6,
          "neg": 16.2
        },
        {
          "m": "2025-11",
          "pos": 63.9,
          "neg": 16.7
        },
        {
          "m": "2025-12",
          "pos": 65.2,
          "neg": 16.9
        },
        {
          "m": "2026-01",
          "pos": 65.2,
          "neg": 10.1
        },
        {
          "m": "2026-02",
          "pos": 57.1,
          "neg": 23.8
        },
        {
          "m": "2026-03",
          "pos": 54.9,
          "neg": 25.5
        },
        {
          "m": "2026-04",
          "pos": 73.6,
          "neg": 11.3
        },
        {
          "m": "2026-05",
          "pos": 58.7,
          "neg": 10.9
        }
      ]
    },
    {
      "nome": "L5185-CLODOMIRO",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 80.7,
      "nps_ajust": 79.9,
      "delta": -0.8,
      "sent_medio": 0.53,
      "pct_pos": 70,
      "pct_neg": 17,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Loja Fisica"
      ],
      "top3_elogios": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Contratar expert p Refazer o site que não é “user friendly”\nreabastecer estoques de forma adequada. Sempre faltam produt\"",
        "\"Faltou pão rústico\"",
        "\"Loja com calçada toda esburacada. Tem que prestar muita atenção para não tropeçar e cair. Sem fila preferencial. Eu gráv\"",
        "\"O atendimento da Mari na loja foi muito bom\"",
        "\"Melhorar um pouco fdo preço  abaixar o frete para quem compra sempre acima de 300.00 reais\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 56.2,
          "neg": 25.0
        },
        {
          "m": "2025-02",
          "pos": 60.0,
          "neg": 26.7
        },
        {
          "m": "2025-03",
          "pos": 38.9,
          "neg": 27.8
        },
        {
          "m": "2025-04",
          "pos": 38.1,
          "neg": 38.1
        },
        {
          "m": "2025-05",
          "pos": 70.6,
          "neg": 11.8
        },
        {
          "m": "2025-06",
          "pos": 58.1,
          "neg": 25.8
        },
        {
          "m": "2025-07",
          "pos": 88.5,
          "neg": 3.8
        },
        {
          "m": "2025-08",
          "pos": 63.2,
          "neg": 31.6
        },
        {
          "m": "2025-09",
          "pos": 50.0,
          "neg": 38.2
        },
        {
          "m": "2025-10",
          "pos": 80.4,
          "neg": 4.3
        },
        {
          "m": "2025-11",
          "pos": 75.9,
          "neg": 13.8
        },
        {
          "m": "2025-12",
          "pos": 83.3,
          "neg": 16.7
        },
        {
          "m": "2026-01",
          "pos": 78.8,
          "neg": 3.0
        },
        {
          "m": "2026-02",
          "pos": 78.6,
          "neg": 10.7
        },
        {
          "m": "2026-03",
          "pos": 80.0,
          "neg": 8.6
        },
        {
          "m": "2026-04",
          "pos": 80.0,
          "neg": 16.7
        },
        {
          "m": "2026-05",
          "pos": 76.2,
          "neg": 9.5
        }
      ]
    },
    {
      "nome": "L5186-VILA DAS MERCES",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 84.0,
      "nps_ajust": 83.3,
      "delta": -0.7,
      "sent_medio": 0.44,
      "pct_pos": 64,
      "pct_neg": 20,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Abastecimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Vcs são insistentes com esses emails . Deveria dar descontos para quem compra aí na Swift. Não tenho nenhuma vantagem em\"",
        "\"Ainda me deram um cupom de desconto que nao é válido\"",
        "\"Ter frete grátis isso mesmo seria muito bom\"",
        "\"O sistema não calculou o desconto, gerando um pequeno transtorno. Se eu estivesse com pressa isso me causaria maiores pr\"",
        "\"A qualidade da carne moída light deve ser analisada \nGosto ,sabor e presença de pequenos nervos\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 60.6,
          "neg": 18.2
        },
        {
          "m": "2025-02",
          "pos": 50.0,
          "neg": 22.7
        },
        {
          "m": "2025-03",
          "pos": 57.7,
          "neg": 30.8
        },
        {
          "m": "2025-04",
          "pos": 68.6,
          "neg": 17.1
        },
        {
          "m": "2025-05",
          "pos": 71.4,
          "neg": 25.0
        },
        {
          "m": "2025-06",
          "pos": 58.3,
          "neg": 25.0
        },
        {
          "m": "2025-07",
          "pos": 71.4,
          "neg": 28.6
        },
        {
          "m": "2025-08",
          "pos": 73.9,
          "neg": 21.7
        },
        {
          "m": "2025-09",
          "pos": 65.0,
          "neg": 20.0
        },
        {
          "m": "2025-10",
          "pos": 69.0,
          "neg": 13.8
        },
        {
          "m": "2025-11",
          "pos": 55.0,
          "neg": 25.0
        },
        {
          "m": "2025-12",
          "pos": 77.4,
          "neg": 3.2
        },
        {
          "m": "2026-01",
          "pos": 59.3,
          "neg": 22.2
        },
        {
          "m": "2026-02",
          "pos": 61.5,
          "neg": 19.2
        },
        {
          "m": "2026-03",
          "pos": 59.5,
          "neg": 23.8
        },
        {
          "m": "2026-04",
          "pos": 68.0,
          "neg": 20.0
        },
        {
          "m": "2026-05",
          "pos": 61.1,
          "neg": 11.1
        }
      ]
    },
    {
      "nome": "L5187-MUTIRAO",
      "flag": "regular",
      "uf": "GO",
      "nps_trad": 86.4,
      "nps_ajust": 85.9,
      "delta": -0.6,
      "sent_medio": 0.54,
      "pct_pos": 72,
      "pct_neg": 17,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Abastecimento",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Atendimento exemplar, como em muitos anos eu não via. Ganharam 5 novos clientes.\"",
        "\"Comercializar apenas nas lojas swift.\"",
        "\"Eu não conseguir ter contato nenhum com entregador, mesmo a Swift colocando meu endereço errado eu não consegui comunicá\"",
        "\"Melhorar os canais de atendimento, ao consumidor.\nMeu pedido foi entregue às 20h, sendo que agendei e paguei a taxa de e\"",
        "\"Foi feita a compra do produto Costelinha suína a passarinho temperada.\n\nSabor totalmente diferente.  Ficou com gosto de \""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 78.9,
          "neg": 21.1
        },
        {
          "m": "2025-02",
          "pos": 62.5,
          "neg": 31.2
        },
        {
          "m": "2025-03",
          "pos": 86.7,
          "neg": 6.7
        },
        {
          "m": "2025-04",
          "pos": 70.0,
          "neg": 20.0
        },
        {
          "m": "2025-05",
          "pos": 72.0,
          "neg": 12.0
        },
        {
          "m": "2025-06",
          "pos": 62.9,
          "neg": 25.7
        },
        {
          "m": "2025-07",
          "pos": 85.7,
          "neg": 0.0
        },
        {
          "m": "2025-08",
          "pos": 75.0,
          "neg": 8.3
        },
        {
          "m": "2025-09",
          "pos": 74.1,
          "neg": 14.8
        },
        {
          "m": "2025-10",
          "pos": 60.9,
          "neg": 34.8
        },
        {
          "m": "2025-11",
          "pos": 75.0,
          "neg": 18.8
        },
        {
          "m": "2025-12",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2026-01",
          "pos": 74.1,
          "neg": 11.1
        },
        {
          "m": "2026-02",
          "pos": 70.0,
          "neg": 20.0
        },
        {
          "m": "2026-03",
          "pos": 66.7,
          "neg": 22.2
        },
        {
          "m": "2026-04",
          "pos": 66.7,
          "neg": 13.9
        },
        {
          "m": "2026-05",
          "pos": 73.3,
          "neg": 13.3
        }
      ]
    },
    {
      "nome": "L5188-CAJAMAR",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 89.2,
      "nps_ajust": 88.9,
      "delta": -0.3,
      "sent_medio": 0.66,
      "pct_pos": 77,
      "pct_neg": 11,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Repor asinha de frango, nesfa loja ja esta em falta há um tempo\"",
        "\"A loja tem muita qualidade nos produtos e no atendimento a moça do caixa Bruna sempre muito atenciosa, mais tem bastante\"",
        "\"Tempo de entrega poderia ser menor\"",
        "\"Porque a Bruna quem me atendeu e foi muito atenciosa.\"",
        "\"Melhorar os preços\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 85.3,
          "neg": 2.9
        },
        {
          "m": "2025-02",
          "pos": 63.0,
          "neg": 18.5
        },
        {
          "m": "2025-03",
          "pos": 76.5,
          "neg": 14.7
        },
        {
          "m": "2025-04",
          "pos": 81.5,
          "neg": 7.4
        },
        {
          "m": "2025-05",
          "pos": 76.9,
          "neg": 3.8
        },
        {
          "m": "2025-06",
          "pos": 75.0,
          "neg": 13.9
        },
        {
          "m": "2025-07",
          "pos": 83.3,
          "neg": 0.0
        },
        {
          "m": "2025-08",
          "pos": 89.3,
          "neg": 7.1
        },
        {
          "m": "2025-09",
          "pos": 86.7,
          "neg": 10.0
        },
        {
          "m": "2025-10",
          "pos": 75.0,
          "neg": 15.0
        },
        {
          "m": "2025-11",
          "pos": 61.9,
          "neg": 28.6
        },
        {
          "m": "2025-12",
          "pos": 73.9,
          "neg": 8.7
        },
        {
          "m": "2026-01",
          "pos": 81.2,
          "neg": 12.5
        },
        {
          "m": "2026-02",
          "pos": 81.0,
          "neg": 14.3
        },
        {
          "m": "2026-03",
          "pos": 70.0,
          "neg": 13.3
        },
        {
          "m": "2026-04",
          "pos": 79.2,
          "neg": 8.3
        },
        {
          "m": "2026-05",
          "pos": 57.1,
          "neg": 21.4
        }
      ]
    },
    {
      "nome": "L5192-ALPHAVILLE CONDE",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 85.1,
      "nps_ajust": 84.7,
      "delta": -0.4,
      "sent_medio": 0.63,
      "pct_pos": 76,
      "pct_neg": 14,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Atendimento",
        "Loja Fisica",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Colocando pessoas com o mínimo de sensibilidade para atendimento para pessoas com algum tipo de deficiência física que m\"",
        "\"Estou feliz que este mês já tinha mais variedades de produtos. Continue aumentando a opção de produtos a disposição.\"",
        "\"Bom atendimento da Mara, assim como da Eli! ?\"",
        "\"Atendente da loja muito atencioso\"",
        "\"Fazendo mais promoções\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 66.7,
          "neg": 9.5
        },
        {
          "m": "2025-02",
          "pos": 73.3,
          "neg": 13.3
        },
        {
          "m": "2025-03",
          "pos": 68.0,
          "neg": 20.0
        },
        {
          "m": "2025-04",
          "pos": 54.5,
          "neg": 36.4
        },
        {
          "m": "2025-05",
          "pos": 62.5,
          "neg": 25.0
        },
        {
          "m": "2025-06",
          "pos": 80.0,
          "neg": 5.0
        },
        {
          "m": "2025-07",
          "pos": 68.4,
          "neg": 15.8
        },
        {
          "m": "2025-08",
          "pos": 72.7,
          "neg": 18.2
        },
        {
          "m": "2025-09",
          "pos": 81.5,
          "neg": 7.4
        },
        {
          "m": "2025-10",
          "pos": 80.0,
          "neg": 20.0
        },
        {
          "m": "2025-11",
          "pos": 85.7,
          "neg": 14.3
        },
        {
          "m": "2025-12",
          "pos": 88.1,
          "neg": 9.5
        },
        {
          "m": "2026-01",
          "pos": 81.0,
          "neg": 9.5
        },
        {
          "m": "2026-02",
          "pos": 80.0,
          "neg": 12.5
        },
        {
          "m": "2026-03",
          "pos": 63.9,
          "neg": 22.2
        },
        {
          "m": "2026-04",
          "pos": 84.4,
          "neg": 6.2
        },
        {
          "m": "2026-05",
          "pos": 80.0,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5193-COTIA",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 85.2,
      "nps_ajust": 85.1,
      "delta": -0.1,
      "sent_medio": 0.62,
      "pct_pos": 74,
      "pct_neg": 12,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Produto"
      ],
      "top3_elogios": [
        "Atendimento",
        "Promocoes Fidelidade",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Talvez uma reposição mais rápida dos produtos, e comprei um medalhão de picanha mas no fim não era picanha por que estav\"",
        "\"Muito bom o atendimento, só poderia ter coisas que não são congeladas. Acaba com o churrasco\"",
        "\"Os preços são altos, melhorar no preço seria um diferencial.\"",
        "\"A Swift é muito boa, no entanto, sempre compro produtos e nunca consigo utilizar cupons de desconto. São todos para comp\"",
        "\"Melhorar o preço, teve um aumento considerável. Voltar com as carnes Uruguaias.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 62.5,
          "neg": 15.6
        },
        {
          "m": "2025-02",
          "pos": 71.8,
          "neg": 5.1
        },
        {
          "m": "2025-03",
          "pos": 65.4,
          "neg": 15.4
        },
        {
          "m": "2025-04",
          "pos": 82.6,
          "neg": 13.0
        },
        {
          "m": "2025-05",
          "pos": 78.6,
          "neg": 3.6
        },
        {
          "m": "2025-06",
          "pos": 77.4,
          "neg": 19.4
        },
        {
          "m": "2025-07",
          "pos": 87.5,
          "neg": 4.2
        },
        {
          "m": "2025-08",
          "pos": 70.0,
          "neg": 10.0
        },
        {
          "m": "2025-09",
          "pos": 71.4,
          "neg": 19.0
        },
        {
          "m": "2025-10",
          "pos": 78.6,
          "neg": 7.1
        },
        {
          "m": "2025-11",
          "pos": 73.1,
          "neg": 15.4
        },
        {
          "m": "2025-12",
          "pos": 85.0,
          "neg": 0.0
        },
        {
          "m": "2026-01",
          "pos": 57.1,
          "neg": 21.4
        },
        {
          "m": "2026-02",
          "pos": 57.9,
          "neg": 26.3
        },
        {
          "m": "2026-03",
          "pos": 68.2,
          "neg": 13.6
        },
        {
          "m": "2026-04",
          "pos": 75.6,
          "neg": 12.2
        },
        {
          "m": "2026-05",
          "pos": 93.8,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5195-LEME",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 94.7,
      "nps_ajust": 94.4,
      "delta": -0.3,
      "sent_medio": 0.76,
      "pct_pos": 85,
      "pct_neg": 9,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Mais promoções para clientes recorrentes.\"",
        "\"Pra mim é ótimo\"",
        "\"Fazer mais promoções, ou fidelizar os clientes\"",
        "\"As 2 picanhas que comprei estavam extremamente fibradas nem pareciam picanhas.. estragou o churrasco de domingo\"",
        "\"Pessoal do atendimento muito atencioso.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 77.3,
          "neg": 13.6
        },
        {
          "m": "2025-02",
          "pos": 71.4,
          "neg": 0.0
        },
        {
          "m": "2025-03",
          "pos": 50.0,
          "neg": 37.5
        },
        {
          "m": "2025-04",
          "pos": 96.0,
          "neg": 4.0
        },
        {
          "m": "2025-05",
          "pos": 76.9,
          "neg": 7.7
        },
        {
          "m": "2025-06",
          "pos": 82.1,
          "neg": 17.9
        },
        {
          "m": "2025-07",
          "pos": 92.9,
          "neg": 0.0
        },
        {
          "m": "2025-08",
          "pos": 93.3,
          "neg": 6.7
        },
        {
          "m": "2025-09",
          "pos": 91.7,
          "neg": 4.2
        },
        {
          "m": "2025-10",
          "pos": 93.3,
          "neg": 6.7
        },
        {
          "m": "2025-11",
          "pos": 71.4,
          "neg": 21.4
        },
        {
          "m": "2025-12",
          "pos": 91.7,
          "neg": 0.0
        },
        {
          "m": "2026-01",
          "pos": 80.0,
          "neg": 6.7
        },
        {
          "m": "2026-02",
          "pos": 83.3,
          "neg": 8.3
        },
        {
          "m": "2026-03",
          "pos": 76.2,
          "neg": 9.5
        },
        {
          "m": "2026-04",
          "pos": 91.7,
          "neg": 4.2
        },
        {
          "m": "2026-05",
          "pos": 100.0,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5197-LIMEIRA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 93.8,
      "nps_ajust": 93.6,
      "delta": -0.3,
      "sent_medio": 0.79,
      "pct_pos": 85,
      "pct_neg": 6,
      "top3_problemas": [
        "Abastecimento",
        "Loja Fisica",
        "Produto"
      ],
      "top3_elogios": [
        "Atendimento",
        "Produto",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Atendimento  excelente \nNão precisa de mudanças.\"",
        "\"Loja excelente, ambiente muito limpo e organizado . Atendentes sempre prestativos .\"",
        "\"Perfeito nao precisa mudar nada, principalmente o atendimento nota 1000\"",
        "\"Tudo perfeito só poderia ter operadora no caixa esperando o cliente.  A mesma que atende abastece e opera os caixas ache\"",
        "\"A loja pra mim é maravilhosa\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 82.6,
          "neg": 6.5
        },
        {
          "m": "2025-02",
          "pos": 84.2,
          "neg": 0.0
        },
        {
          "m": "2025-03",
          "pos": 81.0,
          "neg": 9.5
        },
        {
          "m": "2025-04",
          "pos": 88.9,
          "neg": 5.6
        },
        {
          "m": "2025-05",
          "pos": 86.5,
          "neg": 10.8
        },
        {
          "m": "2025-06",
          "pos": 93.5,
          "neg": 0.0
        },
        {
          "m": "2025-07",
          "pos": 90.5,
          "neg": 4.8
        },
        {
          "m": "2025-08",
          "pos": 92.9,
          "neg": 3.6
        },
        {
          "m": "2025-09",
          "pos": 88.0,
          "neg": 8.0
        },
        {
          "m": "2025-10",
          "pos": 73.3,
          "neg": 0.0
        },
        {
          "m": "2025-11",
          "pos": 75.0,
          "neg": 12.5
        },
        {
          "m": "2025-12",
          "pos": 88.0,
          "neg": 4.0
        },
        {
          "m": "2026-01",
          "pos": 86.7,
          "neg": 6.7
        },
        {
          "m": "2026-02",
          "pos": 88.2,
          "neg": 5.9
        },
        {
          "m": "2026-03",
          "pos": 90.5,
          "neg": 4.8
        },
        {
          "m": "2026-04",
          "pos": 71.4,
          "neg": 9.5
        },
        {
          "m": "2026-05",
          "pos": 86.7,
          "neg": 6.7
        }
      ]
    },
    {
      "nome": "L5198-VILA RESENDE",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 90.4,
      "nps_ajust": 90.1,
      "delta": -0.4,
      "sent_medio": 0.62,
      "pct_pos": 75,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Loja Fisica",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Gostaria de pratos prontos diferentes, antrs tinha mais variedade\"",
        "\"É a terceira vez que compro espetinhos e a carne vem quase toda solta na embalagem\"",
        "\"Sempre saio satisfeita\"",
        "\"Fazer promoções pra quem eh cadastrado\"",
        "\"melhorar um pouco nos preços\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 72.0,
          "neg": 8.0
        },
        {
          "m": "2025-02",
          "pos": 66.7,
          "neg": 16.7
        },
        {
          "m": "2025-03",
          "pos": 50.0,
          "neg": 22.7
        },
        {
          "m": "2025-04",
          "pos": 77.4,
          "neg": 12.9
        },
        {
          "m": "2025-05",
          "pos": 86.7,
          "neg": 6.7
        },
        {
          "m": "2025-06",
          "pos": 75.0,
          "neg": 18.8
        },
        {
          "m": "2025-07",
          "pos": 70.0,
          "neg": 30.0
        },
        {
          "m": "2025-08",
          "pos": 94.4,
          "neg": 0.0
        },
        {
          "m": "2025-09",
          "pos": 87.5,
          "neg": 6.2
        },
        {
          "m": "2025-10",
          "pos": 77.8,
          "neg": 22.2
        },
        {
          "m": "2025-11",
          "pos": 86.2,
          "neg": 6.9
        },
        {
          "m": "2025-12",
          "pos": 87.5,
          "neg": 8.3
        },
        {
          "m": "2026-01",
          "pos": 66.7,
          "neg": 16.7
        },
        {
          "m": "2026-02",
          "pos": 55.6,
          "neg": 27.8
        },
        {
          "m": "2026-03",
          "pos": 57.1,
          "neg": 14.3
        },
        {
          "m": "2026-04",
          "pos": 71.4,
          "neg": 7.1
        },
        {
          "m": "2026-05",
          "pos": 100.0,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5199-CASA VERDE",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 84.0,
      "nps_ajust": 83.4,
      "delta": -0.6,
      "sent_medio": 0.53,
      "pct_pos": 69,
      "pct_neg": 16,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Abastecimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Não tinha asa temperada swift\"",
        "\"Menos água nos produtos. Bacalhau veio com a coluna e barbatanas. Pelo menos 250g de perda. Absurdo quando se paga mais \"",
        "\"Muito bom o atendimento.\"",
        "\"A carne que comprei, picanha , estava extremamente dura, foi a primeira vez que peguei uma carne tão dura\"",
        "\"Pode sim abaixar mais os preços e colocar mais produtos\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 66.7,
          "neg": 23.8
        },
        {
          "m": "2025-02",
          "pos": 56.7,
          "neg": 16.7
        },
        {
          "m": "2025-03",
          "pos": 57.9,
          "neg": 26.3
        },
        {
          "m": "2025-04",
          "pos": 70.4,
          "neg": 14.8
        },
        {
          "m": "2025-05",
          "pos": 78.6,
          "neg": 10.7
        },
        {
          "m": "2025-06",
          "pos": 88.5,
          "neg": 3.8
        },
        {
          "m": "2025-07",
          "pos": 81.8,
          "neg": 0.0
        },
        {
          "m": "2025-08",
          "pos": 74.1,
          "neg": 14.8
        },
        {
          "m": "2025-09",
          "pos": 69.4,
          "neg": 13.9
        },
        {
          "m": "2025-10",
          "pos": 65.0,
          "neg": 22.5
        },
        {
          "m": "2025-11",
          "pos": 57.7,
          "neg": 7.7
        },
        {
          "m": "2025-12",
          "pos": 75.6,
          "neg": 13.3
        },
        {
          "m": "2026-01",
          "pos": 52.0,
          "neg": 20.0
        },
        {
          "m": "2026-02",
          "pos": 83.3,
          "neg": 10.0
        },
        {
          "m": "2026-03",
          "pos": 69.6,
          "neg": 17.4
        },
        {
          "m": "2026-04",
          "pos": 55.1,
          "neg": 30.6
        },
        {
          "m": "2026-05",
          "pos": 76.0,
          "neg": 8.0
        }
      ]
    },
    {
      "nome": "L5200-JUVENTUS",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 80.5,
      "nps_ajust": 80.2,
      "delta": -0.3,
      "sent_medio": 0.37,
      "pct_pos": 57,
      "pct_neg": 21,
      "top3_problemas": [
        "Abastecimento",
        "Loja Fisica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Loja Fisica",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Acho que está tudo muito bom e organizado.\"",
        "\"Estavam faltando vários produtos! Carvão inclusive!\"",
        "\"Comprei na penúltima compra a Picanha Ouro compro sempre fiz e ontem ao fazer o churrasco mais uma vez a carne não estav\"",
        "\"Após eu procurar um produto dentro da loja e não localizar, fui a encontro de uma colaboradora e perguntei a ela, que di\"",
        "\"Mantenham a mesma qualidade e esses funcionários muito competentes e atenciosos!\n\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 60.9,
          "neg": 17.4
        },
        {
          "m": "2025-02",
          "pos": 65.2,
          "neg": 26.1
        },
        {
          "m": "2025-03",
          "pos": 46.4,
          "neg": 21.4
        },
        {
          "m": "2025-04",
          "pos": 66.7,
          "neg": 12.5
        },
        {
          "m": "2025-05",
          "pos": 64.7,
          "neg": 17.6
        },
        {
          "m": "2025-06",
          "pos": 68.4,
          "neg": 21.1
        },
        {
          "m": "2025-07",
          "pos": 60.0,
          "neg": 20.0
        },
        {
          "m": "2025-08",
          "pos": 73.7,
          "neg": 15.8
        },
        {
          "m": "2025-09",
          "pos": 53.8,
          "neg": 46.2
        },
        {
          "m": "2025-10",
          "pos": 55.2,
          "neg": 17.2
        },
        {
          "m": "2025-11",
          "pos": 64.3,
          "neg": 28.6
        },
        {
          "m": "2025-12",
          "pos": 35.3,
          "neg": 29.4
        },
        {
          "m": "2026-01",
          "pos": 54.2,
          "neg": 16.7
        },
        {
          "m": "2026-02",
          "pos": 55.0,
          "neg": 20.0
        },
        {
          "m": "2026-03",
          "pos": 43.5,
          "neg": 34.8
        },
        {
          "m": "2026-04",
          "pos": 41.2,
          "neg": 5.9
        },
        {
          "m": "2026-05",
          "pos": 72.2,
          "neg": 11.1
        }
      ]
    },
    {
      "nome": "L5201-ANA COSTA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 89.9,
      "nps_ajust": 89.5,
      "delta": -0.3,
      "sent_medio": 0.65,
      "pct_pos": 75,
      "pct_neg": 10,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Abastecimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Ótimo atendimento. Ótimos produtos.\"",
        "\"Melhorar mais o preço, tudo muito cara. Fazer ofertas......assim vcs ganham mais clientes.\"",
        "\"Disponibilizando o Filezinho sassami tradicional sempre. \n\"",
        "\"Espetinho preparado churrasco.\nDemaisiado salgado, estava saboroso, mas a quantidade de sal extrapolou em muito o padrão\"",
        "\"Só no horário da entrega o resto vocês tão de parabéns, veio tudo maravilhoso\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 78.4,
          "neg": 11.8
        },
        {
          "m": "2025-02",
          "pos": 42.9,
          "neg": 25.0
        },
        {
          "m": "2025-03",
          "pos": 79.4,
          "neg": 2.9
        },
        {
          "m": "2025-04",
          "pos": 85.3,
          "neg": 5.9
        },
        {
          "m": "2025-05",
          "pos": 79.1,
          "neg": 7.0
        },
        {
          "m": "2025-06",
          "pos": 80.5,
          "neg": 4.9
        },
        {
          "m": "2025-07",
          "pos": 72.2,
          "neg": 5.6
        },
        {
          "m": "2025-08",
          "pos": 76.5,
          "neg": 11.8
        },
        {
          "m": "2025-09",
          "pos": 70.5,
          "neg": 13.6
        },
        {
          "m": "2025-10",
          "pos": 69.0,
          "neg": 14.3
        },
        {
          "m": "2025-11",
          "pos": 81.8,
          "neg": 4.5
        },
        {
          "m": "2025-12",
          "pos": 78.0,
          "neg": 6.0
        },
        {
          "m": "2026-01",
          "pos": 74.7,
          "neg": 13.3
        },
        {
          "m": "2026-02",
          "pos": 73.7,
          "neg": 5.3
        },
        {
          "m": "2026-03",
          "pos": 69.4,
          "neg": 11.1
        },
        {
          "m": "2026-04",
          "pos": 73.8,
          "neg": 16.7
        },
        {
          "m": "2026-05",
          "pos": 78.8,
          "neg": 9.1
        }
      ]
    },
    {
      "nome": "L5202-VILA CAICARA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 90.6,
      "nps_ajust": 90.3,
      "delta": -0.3,
      "sent_medio": 0.68,
      "pct_pos": 78,
      "pct_neg": 10,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Produto"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Abastecimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Mix \nMelhorar a política de preços\"",
        "\"Abaixando os preços\"",
        "\"Dando retorno ao cliente sobre a reclamação.\"",
        "\"Continuando fazendo o melhor!\"",
        "\"Podem melhorar um pouco no preço  para mais baixo, os produtos  são  bons, mas está  um pouco caro. Tem que ser mais ace\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 72.9,
          "neg": 8.3
        },
        {
          "m": "2025-02",
          "pos": 70.6,
          "neg": 11.8
        },
        {
          "m": "2025-03",
          "pos": 67.5,
          "neg": 20.0
        },
        {
          "m": "2025-04",
          "pos": 84.4,
          "neg": 8.9
        },
        {
          "m": "2025-05",
          "pos": 70.3,
          "neg": 8.1
        },
        {
          "m": "2025-06",
          "pos": 85.1,
          "neg": 4.3
        },
        {
          "m": "2025-07",
          "pos": 75.9,
          "neg": 10.3
        },
        {
          "m": "2025-08",
          "pos": 81.8,
          "neg": 6.1
        },
        {
          "m": "2025-09",
          "pos": 77.5,
          "neg": 7.5
        },
        {
          "m": "2025-10",
          "pos": 76.6,
          "neg": 6.4
        },
        {
          "m": "2025-11",
          "pos": 83.7,
          "neg": 9.3
        },
        {
          "m": "2025-12",
          "pos": 72.9,
          "neg": 10.4
        },
        {
          "m": "2026-01",
          "pos": 74.5,
          "neg": 14.5
        },
        {
          "m": "2026-02",
          "pos": 80.8,
          "neg": 9.6
        },
        {
          "m": "2026-03",
          "pos": 80.7,
          "neg": 10.5
        },
        {
          "m": "2026-04",
          "pos": 82.2,
          "neg": 6.7
        },
        {
          "m": "2026-05",
          "pos": 77.3,
          "neg": 9.1
        }
      ]
    },
    {
      "nome": "L5204-ITAQUA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 90.1,
      "nps_ajust": 89.7,
      "delta": -0.4,
      "sent_medio": 0.68,
      "pct_pos": 81,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Pra mim tá tudo perfeito!!!\"",
        "\"Os embaladores  têm que prestar mais  atenção  na hora de preparar os produtos! Pra não faltar  itens\"",
        "\"Melhorando os preços com promoções, com combos etc\"",
        "\"Os preços já foram mais atraentes, mas ainda assim gosto muito dos produtos e da facilidade no dia a dia. O atendimento \"",
        "\"Só não gostei que não tinha opção de entrega no meu endereço pelo aplicativo, mas eu amoooo os produtos, principalmente \""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 78.6,
          "neg": 14.3
        },
        {
          "m": "2025-02",
          "pos": 73.7,
          "neg": 5.3
        },
        {
          "m": "2025-03",
          "pos": 90.6,
          "neg": 9.4
        },
        {
          "m": "2025-04",
          "pos": 85.7,
          "neg": 9.5
        },
        {
          "m": "2025-05",
          "pos": 81.2,
          "neg": 12.5
        },
        {
          "m": "2025-06",
          "pos": 68.6,
          "neg": 20.0
        },
        {
          "m": "2025-07",
          "pos": 83.3,
          "neg": 16.7
        },
        {
          "m": "2025-08",
          "pos": 76.5,
          "neg": 17.6
        },
        {
          "m": "2025-09",
          "pos": 77.3,
          "neg": 22.7
        },
        {
          "m": "2025-10",
          "pos": 85.0,
          "neg": 5.0
        },
        {
          "m": "2025-11",
          "pos": 87.5,
          "neg": 6.2
        },
        {
          "m": "2025-12",
          "pos": 76.5,
          "neg": 5.9
        },
        {
          "m": "2026-01",
          "pos": 82.6,
          "neg": 13.0
        },
        {
          "m": "2026-02",
          "pos": 86.2,
          "neg": 13.8
        },
        {
          "m": "2026-03",
          "pos": 94.4,
          "neg": 0.0
        },
        {
          "m": "2026-04",
          "pos": 75.0,
          "neg": 21.4
        },
        {
          "m": "2026-05",
          "pos": 75.0,
          "neg": 18.8
        }
      ]
    },
    {
      "nome": "L5205-GRANJA KM 26",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 84.7,
      "nps_ajust": 84.0,
      "delta": -0.7,
      "sent_medio": 0.57,
      "pct_pos": 73,
      "pct_neg": 16,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Loja Fisica"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Mandaram o pedido por uber, o código do pedido não funcionou! Mandaram 3 vezes a entrega e só na quarta vez consegui rec\"",
        "\"Seguir fornecendo produtos de\n Qualidade com bons preços.\n\"",
        "\"Gisele Silva parabéns pelo atendimento,sempre simpática e  eu sempre encontro tudo que preciso.\"",
        "\"No varejo, há uma máxima que diz: \"calce o tamanquinho do cliente\". Então, segue aí a minha recomendação: coloquem um cl\"",
        "\"O atendimento dos rapazes é muito ruim! Zero simpatia! As meninas são muito melhores no atendimento\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 70.4,
          "neg": 25.9
        },
        {
          "m": "2025-02",
          "pos": 73.9,
          "neg": 17.4
        },
        {
          "m": "2025-03",
          "pos": 45.5,
          "neg": 27.3
        },
        {
          "m": "2025-04",
          "pos": 69.6,
          "neg": 17.4
        },
        {
          "m": "2025-05",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2025-06",
          "pos": 60.0,
          "neg": 20.0
        },
        {
          "m": "2025-07",
          "pos": 63.6,
          "neg": 18.2
        },
        {
          "m": "2025-08",
          "pos": 82.4,
          "neg": 5.9
        },
        {
          "m": "2025-09",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2025-10",
          "pos": 71.4,
          "neg": 0.0
        },
        {
          "m": "2025-11",
          "pos": 60.0,
          "neg": 30.0
        },
        {
          "m": "2025-12",
          "pos": 94.1,
          "neg": 5.9
        },
        {
          "m": "2026-01",
          "pos": 66.7,
          "neg": 0.0
        },
        {
          "m": "2026-02",
          "pos": 66.7,
          "neg": 25.0
        },
        {
          "m": "2026-03",
          "pos": 90.9,
          "neg": 4.5
        },
        {
          "m": "2026-04",
          "pos": 73.7,
          "neg": 21.1
        },
        {
          "m": "2026-05",
          "pos": 71.4,
          "neg": 28.6
        }
      ]
    },
    {
      "nome": "L5206-CACHOEIRINHA",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 83.6,
      "nps_ajust": 82.7,
      "delta": -0.8,
      "sent_medio": 0.47,
      "pct_pos": 66,
      "pct_neg": 19,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Abastecimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Com mais promoções !\"",
        "\"Está  muito bom\"",
        "\"O atendimento na loja física, alguns funcionários recebem o cliente de cara fechada ,não são pacientes.\nLoja: Cachoeirin\"",
        "\"Foi minha primeira experiência e gostei muito, desde a escolha dos produtos até a entrega.  Super recomendo.\"",
        "\"O site estava com problemas na área de pagamento por quase uma semana e isso atrapalhou bastante os planos que tinha com\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 48.6,
          "neg": 40.5
        },
        {
          "m": "2025-02",
          "pos": 73.3,
          "neg": 13.3
        },
        {
          "m": "2025-03",
          "pos": 52.9,
          "neg": 29.4
        },
        {
          "m": "2025-04",
          "pos": 60.0,
          "neg": 23.3
        },
        {
          "m": "2025-05",
          "pos": 58.7,
          "neg": 15.2
        },
        {
          "m": "2025-06",
          "pos": 75.0,
          "neg": 9.4
        },
        {
          "m": "2025-07",
          "pos": 74.1,
          "neg": 11.1
        },
        {
          "m": "2025-08",
          "pos": 73.9,
          "neg": 13.0
        },
        {
          "m": "2025-09",
          "pos": 45.9,
          "neg": 24.3
        },
        {
          "m": "2025-10",
          "pos": 75.0,
          "neg": 17.9
        },
        {
          "m": "2025-11",
          "pos": 71.4,
          "neg": 14.3
        },
        {
          "m": "2025-12",
          "pos": 81.8,
          "neg": 4.5
        },
        {
          "m": "2026-01",
          "pos": 61.5,
          "neg": 26.9
        },
        {
          "m": "2026-02",
          "pos": 57.7,
          "neg": 30.8
        },
        {
          "m": "2026-03",
          "pos": 83.3,
          "neg": 16.7
        },
        {
          "m": "2026-04",
          "pos": 79.2,
          "neg": 16.7
        },
        {
          "m": "2026-05",
          "pos": 100.0,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5207-SANTO ANDRE ORATORIO",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 90.1,
      "nps_ajust": 89.8,
      "delta": -0.3,
      "sent_medio": 0.65,
      "pct_pos": 76,
      "pct_neg": 11,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Otima loja   atendentes super simpaticas e prestativas elas sao nota mil. A loja as vezes falta alguns itens mas de rest\"",
        "\"Não encontro cação\"",
        "\"Estava tudo impecável, limpeza e organização da loja nota 10.\"",
        "\"Difícil não é se  obter uma vitória, \nO mais Difícil é manter a vitória.\"",
        "\"Continue com este mesmo padrão de Atendimento !!!!!\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 72.4,
          "neg": 13.8
        },
        {
          "m": "2025-02",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2025-03",
          "pos": 58.3,
          "neg": 29.2
        },
        {
          "m": "2025-04",
          "pos": 66.7,
          "neg": 22.2
        },
        {
          "m": "2025-05",
          "pos": 80.0,
          "neg": 12.0
        },
        {
          "m": "2025-06",
          "pos": 64.3,
          "neg": 11.9
        },
        {
          "m": "2025-07",
          "pos": 80.6,
          "neg": 3.2
        },
        {
          "m": "2025-08",
          "pos": 61.0,
          "neg": 19.5
        },
        {
          "m": "2025-09",
          "pos": 78.1,
          "neg": 6.2
        },
        {
          "m": "2025-10",
          "pos": 79.1,
          "neg": 11.6
        },
        {
          "m": "2025-11",
          "pos": 69.8,
          "neg": 14.0
        },
        {
          "m": "2025-12",
          "pos": 90.2,
          "neg": 5.9
        },
        {
          "m": "2026-01",
          "pos": 81.8,
          "neg": 9.1
        },
        {
          "m": "2026-02",
          "pos": 75.0,
          "neg": 15.0
        },
        {
          "m": "2026-03",
          "pos": 83.8,
          "neg": 8.1
        },
        {
          "m": "2026-04",
          "pos": 84.6,
          "neg": 5.1
        },
        {
          "m": "2026-05",
          "pos": 90.5,
          "neg": 4.8
        }
      ]
    },
    {
      "nome": "L5209-ITABERABA",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 87.3,
      "nps_ajust": 86.8,
      "delta": -0.5,
      "sent_medio": 0.56,
      "pct_pos": 71,
      "pct_neg": 15,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Abastecimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Estou super satisfeita com o atendimento, amo comprar com vocês!\nMuito obrigada!\"",
        "\"Nada a acrescentar\"",
        "\"Os preços andam mais altos do que nunca,  Mas as carnes tem boa qualidade.  A entrega ocorre no prazo, mas eu preferia q\"",
        "\"Preço, um pouco caro\"",
        "\"Comprei kibe, não gostei. Não parece kibe, não dá para sentir o trigo, parece que colocaram algum produto para aglutinar\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 64.1,
          "neg": 20.5
        },
        {
          "m": "2025-02",
          "pos": 67.6,
          "neg": 20.6
        },
        {
          "m": "2025-03",
          "pos": 64.1,
          "neg": 15.4
        },
        {
          "m": "2025-04",
          "pos": 61.0,
          "neg": 22.0
        },
        {
          "m": "2025-05",
          "pos": 70.4,
          "neg": 18.5
        },
        {
          "m": "2025-06",
          "pos": 75.5,
          "neg": 7.5
        },
        {
          "m": "2025-07",
          "pos": 64.5,
          "neg": 6.5
        },
        {
          "m": "2025-08",
          "pos": 63.4,
          "neg": 14.6
        },
        {
          "m": "2025-09",
          "pos": 75.4,
          "neg": 14.0
        },
        {
          "m": "2025-10",
          "pos": 82.8,
          "neg": 6.2
        },
        {
          "m": "2025-11",
          "pos": 74.3,
          "neg": 11.4
        },
        {
          "m": "2025-12",
          "pos": 78.1,
          "neg": 14.1
        },
        {
          "m": "2026-01",
          "pos": 72.9,
          "neg": 10.4
        },
        {
          "m": "2026-02",
          "pos": 66.7,
          "neg": 20.5
        },
        {
          "m": "2026-03",
          "pos": 72.0,
          "neg": 14.0
        },
        {
          "m": "2026-04",
          "pos": 71.6,
          "neg": 17.9
        },
        {
          "m": "2026-05",
          "pos": 57.6,
          "neg": 24.2
        }
      ]
    },
    {
      "nome": "L5210-CAMPANELLA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 85.8,
      "nps_ajust": 85.5,
      "delta": -0.3,
      "sent_medio": 0.52,
      "pct_pos": 68,
      "pct_neg": 16,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Eu gostaria que tivesse mais opções sem leite (leite animal) e sem lactose em alguns pratos prontos e nos doces também.\"",
        "\"Sugiro que de ao cliente a opção de optar por escolher outro tipo de produto caso o pesos das peças não seja o suficient\"",
        "\"esse meu ponto negativo é pra não deixar a fila no cx crescer tanto, tinha apenas três pessoas na minha frente e fiquei \"",
        "\"Apesar de ter apenas 2 atendentes na loja e estava movimentado os funcionários foram atenciosos e ágil, recomendo.\"",
        "\"Vocês podem fazer mais promoções para quem mora na região da loja de vocês Seria uma boa porque os moradores sempre vão \""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 74.6,
          "neg": 11.9
        },
        {
          "m": "2025-02",
          "pos": 66.0,
          "neg": 24.5
        },
        {
          "m": "2025-03",
          "pos": 72.9,
          "neg": 10.2
        },
        {
          "m": "2025-04",
          "pos": 64.9,
          "neg": 17.5
        },
        {
          "m": "2025-05",
          "pos": 69.1,
          "neg": 10.9
        },
        {
          "m": "2025-06",
          "pos": 66.2,
          "neg": 10.8
        },
        {
          "m": "2025-07",
          "pos": 61.1,
          "neg": 19.4
        },
        {
          "m": "2025-08",
          "pos": 54.5,
          "neg": 27.3
        },
        {
          "m": "2025-09",
          "pos": 63.8,
          "neg": 17.2
        },
        {
          "m": "2025-10",
          "pos": 67.3,
          "neg": 17.3
        },
        {
          "m": "2025-11",
          "pos": 82.1,
          "neg": 14.3
        },
        {
          "m": "2025-12",
          "pos": 73.3,
          "neg": 8.3
        },
        {
          "m": "2026-01",
          "pos": 57.1,
          "neg": 28.6
        },
        {
          "m": "2026-02",
          "pos": 74.3,
          "neg": 11.4
        },
        {
          "m": "2026-03",
          "pos": 66.7,
          "neg": 12.5
        },
        {
          "m": "2026-04",
          "pos": 67.4,
          "neg": 21.7
        },
        {
          "m": "2026-05",
          "pos": 65.7,
          "neg": 11.4
        }
      ]
    },
    {
      "nome": "L5213-REMEDIOS ONIX",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 89.0,
      "nps_ajust": 88.5,
      "delta": -0.4,
      "sent_medio": 0.59,
      "pct_pos": 72,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Top, muito organizado. \n\nExcelente...\"",
        "\"Está tudo ótimo\"",
        "\"Loja maravilhosa e atendimento de excelência, amei o acolhimento e a loja sempre limpa e bem arrumada\"",
        "\"Peguei o produto sem etiqueta de validade\"",
        "\"Está ótimo  loja da avenida onix Está de parabéns funcionários  atenciosos atendimento 10\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 67.9,
          "neg": 17.9
        },
        {
          "m": "2025-02",
          "pos": 87.5,
          "neg": 6.2
        },
        {
          "m": "2025-03",
          "pos": 77.3,
          "neg": 9.1
        },
        {
          "m": "2025-04",
          "pos": 73.3,
          "neg": 20.0
        },
        {
          "m": "2025-05",
          "pos": 85.2,
          "neg": 11.1
        },
        {
          "m": "2025-06",
          "pos": 86.7,
          "neg": 0.0
        },
        {
          "m": "2025-07",
          "pos": 66.7,
          "neg": 25.0
        },
        {
          "m": "2025-08",
          "pos": 78.3,
          "neg": 0.0
        },
        {
          "m": "2025-09",
          "pos": 58.3,
          "neg": 33.3
        },
        {
          "m": "2025-10",
          "pos": 61.5,
          "neg": 15.4
        },
        {
          "m": "2025-11",
          "pos": 59.1,
          "neg": 0.0
        },
        {
          "m": "2025-12",
          "pos": 69.6,
          "neg": 13.0
        },
        {
          "m": "2026-01",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2026-02",
          "pos": 75.0,
          "neg": 15.6
        },
        {
          "m": "2026-03",
          "pos": 57.1,
          "neg": 25.0
        },
        {
          "m": "2026-04",
          "pos": 64.7,
          "neg": 11.8
        },
        {
          "m": "2026-05",
          "pos": 84.2,
          "neg": 5.3
        }
      ]
    },
    {
      "nome": "L5214-SAO MIGUEL",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 89.4,
      "nps_ajust": 89.1,
      "delta": -0.3,
      "sent_medio": 0.67,
      "pct_pos": 77,
      "pct_neg": 10,
      "top3_problemas": [
        "Abastecimento",
        "Produto",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"A queda na qualidade dos produtos é notável e isso é uma pena pois há reajuste de valor e queda na qualidade, ou seja, v\"",
        "\"Comprei 3 bandejas de medalhão de picanha ,,,   Carne muito dura ... passei vergonha no meu churrasco  ...  Ali  estava \"",
        "\"Eu sempre compro com vcs, porém nunca recebo cashback, mesmo já sendo cadastrada como sócio no clube swift\"",
        "\"Aceitando o vr aleolo\"",
        "\"Atendentes maravilhosos. Obrigada\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 80.9,
          "neg": 12.8
        },
        {
          "m": "2025-02",
          "pos": 77.3,
          "neg": 13.6
        },
        {
          "m": "2025-03",
          "pos": 77.5,
          "neg": 12.5
        },
        {
          "m": "2025-04",
          "pos": 81.8,
          "neg": 12.1
        },
        {
          "m": "2025-05",
          "pos": 75.0,
          "neg": 3.1
        },
        {
          "m": "2025-06",
          "pos": 86.9,
          "neg": 6.6
        },
        {
          "m": "2025-07",
          "pos": 78.0,
          "neg": 12.2
        },
        {
          "m": "2025-08",
          "pos": 79.1,
          "neg": 9.3
        },
        {
          "m": "2025-09",
          "pos": 86.5,
          "neg": 8.1
        },
        {
          "m": "2025-10",
          "pos": 83.3,
          "neg": 2.8
        },
        {
          "m": "2025-11",
          "pos": 65.0,
          "neg": 7.5
        },
        {
          "m": "2025-12",
          "pos": 76.1,
          "neg": 10.9
        },
        {
          "m": "2026-01",
          "pos": 64.3,
          "neg": 14.3
        },
        {
          "m": "2026-02",
          "pos": 74.5,
          "neg": 17.0
        },
        {
          "m": "2026-03",
          "pos": 75.7,
          "neg": 13.5
        },
        {
          "m": "2026-04",
          "pos": 67.6,
          "neg": 10.8
        },
        {
          "m": "2026-05",
          "pos": 76.2,
          "neg": 9.5
        }
      ]
    },
    {
      "nome": "L5215-VILA EMA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 89.2,
      "nps_ajust": 88.4,
      "delta": -0.8,
      "sent_medio": 0.61,
      "pct_pos": 73,
      "pct_neg": 12,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Loja Fisica",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Amo a loja\"",
        "\"Cupom desconto clientes cadastrados\"",
        "\"Tudo muito bom!\"",
        "\"Eu gostei bastante do app e da entrega, no momento para mim não precisa melhorar, pretendo pedir mais vezes\"",
        "\"Atendes da loja, todos atenciosos!\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 77.3,
          "neg": 13.6
        },
        {
          "m": "2025-02",
          "pos": 68.4,
          "neg": 15.8
        },
        {
          "m": "2025-03",
          "pos": 81.8,
          "neg": 3.0
        },
        {
          "m": "2025-04",
          "pos": 76.7,
          "neg": 9.3
        },
        {
          "m": "2025-05",
          "pos": 74.3,
          "neg": 11.4
        },
        {
          "m": "2025-06",
          "pos": 74.2,
          "neg": 6.5
        },
        {
          "m": "2025-07",
          "pos": 66.7,
          "neg": 16.7
        },
        {
          "m": "2025-08",
          "pos": 62.5,
          "neg": 18.8
        },
        {
          "m": "2025-09",
          "pos": 65.0,
          "neg": 17.5
        },
        {
          "m": "2025-10",
          "pos": 84.8,
          "neg": 9.1
        },
        {
          "m": "2025-11",
          "pos": 67.6,
          "neg": 14.7
        },
        {
          "m": "2025-12",
          "pos": 80.5,
          "neg": 9.8
        },
        {
          "m": "2026-01",
          "pos": 69.0,
          "neg": 20.7
        },
        {
          "m": "2026-02",
          "pos": 74.1,
          "neg": 7.4
        },
        {
          "m": "2026-03",
          "pos": 74.1,
          "neg": 11.1
        },
        {
          "m": "2026-04",
          "pos": 70.3,
          "neg": 13.5
        },
        {
          "m": "2026-05",
          "pos": 72.0,
          "neg": 8.0
        }
      ]
    },
    {
      "nome": "L5216-UBATUBA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 91.3,
      "nps_ajust": 91.2,
      "delta": -0.2,
      "sent_medio": 0.69,
      "pct_pos": 78,
      "pct_neg": 10,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Produto",
        "Promocoes Fidelidade",
        "Abastecimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Sempre gosto demais dos produtos Swift...\nSaborosos, nutritivos...\nCarnes super macias... fáceis de preparar...\nAs lingu\"",
        "\"fazer umas promoções\"",
        "\"Atendimento da caixa deixou a desejar.  Estressada e antipática\"",
        "\"Devem abrir uma filial em Uberlândia, MG.\"",
        "\"melhores preços, com ofertas\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 64.9,
          "neg": 16.2
        },
        {
          "m": "2025-02",
          "pos": 66.7,
          "neg": 8.3
        },
        {
          "m": "2025-03",
          "pos": 68.8,
          "neg": 6.2
        },
        {
          "m": "2025-04",
          "pos": 87.5,
          "neg": 12.5
        },
        {
          "m": "2025-05",
          "pos": 88.0,
          "neg": 8.0
        },
        {
          "m": "2025-06",
          "pos": 93.3,
          "neg": 6.7
        },
        {
          "m": "2025-07",
          "pos": 82.6,
          "neg": 17.4
        },
        {
          "m": "2025-08",
          "pos": 72.7,
          "neg": 0.0
        },
        {
          "m": "2025-09",
          "pos": 81.0,
          "neg": 9.5
        },
        {
          "m": "2025-10",
          "pos": 77.8,
          "neg": 5.6
        },
        {
          "m": "2025-11",
          "pos": 83.3,
          "neg": 4.2
        },
        {
          "m": "2025-12",
          "pos": 81.0,
          "neg": 7.1
        },
        {
          "m": "2026-01",
          "pos": 84.4,
          "neg": 3.1
        },
        {
          "m": "2026-02",
          "pos": 81.5,
          "neg": 7.4
        },
        {
          "m": "2026-03",
          "pos": 72.7,
          "neg": 9.1
        },
        {
          "m": "2026-04",
          "pos": 70.0,
          "neg": 23.3
        },
        {
          "m": "2026-05",
          "pos": 86.7,
          "neg": 13.3
        }
      ]
    },
    {
      "nome": "L5218-PARELHEIROS",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 91.6,
      "nps_ajust": 91.2,
      "delta": -0.4,
      "sent_medio": 0.71,
      "pct_pos": 80,
      "pct_neg": 9,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Não encontrei nada vegano,sem carne, tinha hambúrguer, almôndegas, kibe, etc. Não tem mais nada\"",
        "\"Não deixando faltar produtos na loja\"",
        "\"Comprei um item da carne, no entanto achei pouco \"limpo\" na questão de grande quantidade de sebo da peça, e pouca gordur\"",
        "\"Organização de preços nas mercados\"",
        "\"Não precisa  não\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 82.5,
          "neg": 7.5
        },
        {
          "m": "2025-02",
          "pos": 74.3,
          "neg": 11.4
        },
        {
          "m": "2025-03",
          "pos": 81.8,
          "neg": 18.2
        },
        {
          "m": "2025-04",
          "pos": 76.7,
          "neg": 10.0
        },
        {
          "m": "2025-05",
          "pos": 74.4,
          "neg": 10.3
        },
        {
          "m": "2025-06",
          "pos": 81.5,
          "neg": 5.6
        },
        {
          "m": "2025-07",
          "pos": 68.8,
          "neg": 6.2
        },
        {
          "m": "2025-08",
          "pos": 80.0,
          "neg": 7.3
        },
        {
          "m": "2025-09",
          "pos": 85.7,
          "neg": 10.2
        },
        {
          "m": "2025-10",
          "pos": 77.3,
          "neg": 6.8
        },
        {
          "m": "2025-11",
          "pos": 78.0,
          "neg": 9.8
        },
        {
          "m": "2025-12",
          "pos": 76.5,
          "neg": 15.7
        },
        {
          "m": "2026-01",
          "pos": 82.1,
          "neg": 7.1
        },
        {
          "m": "2026-02",
          "pos": 89.4,
          "neg": 4.3
        },
        {
          "m": "2026-03",
          "pos": 88.0,
          "neg": 8.0
        },
        {
          "m": "2026-04",
          "pos": 83.7,
          "neg": 11.6
        },
        {
          "m": "2026-05",
          "pos": 78.3,
          "neg": 13.0
        }
      ]
    },
    {
      "nome": "L5219-AV. ITAQUERA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 87.5,
      "nps_ajust": 87.3,
      "delta": -0.2,
      "sent_medio": 0.58,
      "pct_pos": 71,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Abastecimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Revendo alguns preços de produtos\"",
        "\"A parte de repetir ultimo pedido falhou uma vez (ficando em loop eterno). E ainda está muito lenta\"",
        "\"Pq gosto do ambiente e os atendentes sempre muito gentis.\"",
        "\"O que eu queria tinha acabado\"",
        "\"A picanha swufit mais tem um custo beneficio otimo. O restante da loja não compensa comprae\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 71.2,
          "neg": 13.6
        },
        {
          "m": "2025-02",
          "pos": 71.1,
          "neg": 17.8
        },
        {
          "m": "2025-03",
          "pos": 74.4,
          "neg": 7.7
        },
        {
          "m": "2025-04",
          "pos": 68.6,
          "neg": 8.6
        },
        {
          "m": "2025-05",
          "pos": 81.6,
          "neg": 10.5
        },
        {
          "m": "2025-06",
          "pos": 61.5,
          "neg": 17.9
        },
        {
          "m": "2025-07",
          "pos": 83.3,
          "neg": 4.2
        },
        {
          "m": "2025-08",
          "pos": 70.7,
          "neg": 14.6
        },
        {
          "m": "2025-09",
          "pos": 68.4,
          "neg": 7.9
        },
        {
          "m": "2025-10",
          "pos": 62.5,
          "neg": 12.5
        },
        {
          "m": "2025-11",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2025-12",
          "pos": 74.2,
          "neg": 9.7
        },
        {
          "m": "2026-01",
          "pos": 72.4,
          "neg": 13.8
        },
        {
          "m": "2026-02",
          "pos": 78.9,
          "neg": 5.3
        },
        {
          "m": "2026-03",
          "pos": 69.2,
          "neg": 11.5
        },
        {
          "m": "2026-04",
          "pos": 66.7,
          "neg": 20.8
        },
        {
          "m": "2026-05",
          "pos": 50.0,
          "neg": 26.7
        }
      ]
    },
    {
      "nome": "L5220-PLANALTO",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 84.9,
      "nps_ajust": 84.4,
      "delta": -0.5,
      "sent_medio": 0.5,
      "pct_pos": 67,
      "pct_neg": 16,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Loja Fisica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Produtos fresquinhos, de ótima qualidade e no conforto do lar, a entrega é rápida, no horário combinado! 0bg e parabéns \"",
        "\"Foi muito tranquilo desde o acesso ao aplicativo, conversa pelo whatsapp, atendimento diferenciado e entrega ultra rápid\"",
        "\"Preço errado no produto, monitor do PDV não estava funcionando, sai lesada pois não conferi o preço só registrar.\"",
        "\"preços mais baixos\"",
        "\"Eu só tenho que elogiar a Swift, a qualidade dos produtos, o atendimento, eu agradeço toda a atenção. Ter uma Swift para\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 70.5,
          "neg": 18.2
        },
        {
          "m": "2025-02",
          "pos": 79.3,
          "neg": 13.8
        },
        {
          "m": "2025-03",
          "pos": 61.5,
          "neg": 15.4
        },
        {
          "m": "2025-04",
          "pos": 65.6,
          "neg": 15.6
        },
        {
          "m": "2025-05",
          "pos": 78.1,
          "neg": 9.4
        },
        {
          "m": "2025-06",
          "pos": 60.7,
          "neg": 14.3
        },
        {
          "m": "2025-07",
          "pos": 61.9,
          "neg": 9.5
        },
        {
          "m": "2025-08",
          "pos": 60.7,
          "neg": 28.6
        },
        {
          "m": "2025-09",
          "pos": 76.5,
          "neg": 11.8
        },
        {
          "m": "2025-10",
          "pos": 66.7,
          "neg": 20.8
        },
        {
          "m": "2025-11",
          "pos": 55.0,
          "neg": 15.0
        },
        {
          "m": "2025-12",
          "pos": 60.0,
          "neg": 17.1
        },
        {
          "m": "2026-01",
          "pos": 57.1,
          "neg": 28.6
        },
        {
          "m": "2026-02",
          "pos": 61.5,
          "neg": 15.4
        },
        {
          "m": "2026-03",
          "pos": 61.1,
          "neg": 16.7
        },
        {
          "m": "2026-04",
          "pos": 75.8,
          "neg": 12.1
        },
        {
          "m": "2026-05",
          "pos": 57.1,
          "neg": 28.6
        }
      ]
    },
    {
      "nome": "L5221-BARUERI (BETHAVILLE)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 90.5,
      "nps_ajust": 90.1,
      "delta": -0.4,
      "sent_medio": 0.68,
      "pct_pos": 79,
      "pct_neg": 11,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Atendimento",
        "Loja Fisica",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Até o momento tudo perfeito.\"",
        "\"Atendimento excelente, ótimos produtos\"",
        "\"Ótima loja povo do bem\"",
        "\"Seu atendimento atual é  muito bom. Bons produtos, lojas bem organizadas e atendimento de primeira qualidade com funcion\"",
        "\"Só Não gosto muito da marca combo\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 80.4,
          "neg": 6.5
        },
        {
          "m": "2025-02",
          "pos": 69.4,
          "neg": 19.4
        },
        {
          "m": "2025-03",
          "pos": 66.7,
          "neg": 19.0
        },
        {
          "m": "2025-04",
          "pos": 53.8,
          "neg": 23.1
        },
        {
          "m": "2025-05",
          "pos": 88.2,
          "neg": 5.9
        },
        {
          "m": "2025-06",
          "pos": 73.7,
          "neg": 15.8
        },
        {
          "m": "2025-07",
          "pos": 88.9,
          "neg": 5.6
        },
        {
          "m": "2025-08",
          "pos": 78.6,
          "neg": 7.1
        },
        {
          "m": "2025-09",
          "pos": 76.9,
          "neg": 15.4
        },
        {
          "m": "2025-10",
          "pos": 81.8,
          "neg": 9.1
        },
        {
          "m": "2025-11",
          "pos": 83.3,
          "neg": 12.5
        },
        {
          "m": "2025-12",
          "pos": 83.3,
          "neg": 8.3
        },
        {
          "m": "2026-01",
          "pos": 88.5,
          "neg": 3.8
        },
        {
          "m": "2026-02",
          "pos": 83.3,
          "neg": 11.1
        },
        {
          "m": "2026-03",
          "pos": 82.4,
          "neg": 11.8
        },
        {
          "m": "2026-04",
          "pos": 71.4,
          "neg": 7.1
        },
        {
          "m": "2026-05",
          "pos": 100.0,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5223-CAMPO LIMPO",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 86.9,
      "nps_ajust": 86.4,
      "delta": -0.5,
      "sent_medio": 0.59,
      "pct_pos": 72,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Atendimento",
        "Loja Fisica",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Agilizar o pagamento. Sempre há filas nessa loja.\"",
        "\"Quantidade e preço das linguiça para churrasco\"",
        "\"Podia ter cartão fidelidade da Swift ou cartão para exclusivo Swift e mais promoções  é  claro!!!\nObgda\"",
        "\"Melhorar nos treinamentos dos atendentes e seguranças , os caixas são muito bons !!\nMais os demais deixam a desejar\"",
        "\"Sempre bem atendido por Débora\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 61.8,
          "neg": 23.6
        },
        {
          "m": "2025-02",
          "pos": 75.3,
          "neg": 11.8
        },
        {
          "m": "2025-03",
          "pos": 66.3,
          "neg": 20.9
        },
        {
          "m": "2025-04",
          "pos": 70.1,
          "neg": 11.1
        },
        {
          "m": "2025-05",
          "pos": 70.7,
          "neg": 14.7
        },
        {
          "m": "2025-06",
          "pos": 70.8,
          "neg": 16.7
        },
        {
          "m": "2025-07",
          "pos": 72.2,
          "neg": 13.9
        },
        {
          "m": "2025-08",
          "pos": 75.0,
          "neg": 10.7
        },
        {
          "m": "2025-09",
          "pos": 72.8,
          "neg": 11.1
        },
        {
          "m": "2025-10",
          "pos": 79.8,
          "neg": 12.1
        },
        {
          "m": "2025-11",
          "pos": 74.4,
          "neg": 10.3
        },
        {
          "m": "2025-12",
          "pos": 81.6,
          "neg": 5.7
        },
        {
          "m": "2026-01",
          "pos": 71.6,
          "neg": 14.8
        },
        {
          "m": "2026-02",
          "pos": 70.3,
          "neg": 10.9
        },
        {
          "m": "2026-03",
          "pos": 67.1,
          "neg": 13.2
        },
        {
          "m": "2026-04",
          "pos": 72.2,
          "neg": 13.9
        },
        {
          "m": "2026-05",
          "pos": 73.6,
          "neg": 11.3
        }
      ]
    },
    {
      "nome": "L5225-ARUJA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 89.5,
      "nps_ajust": 89.6,
      "delta": 0.1,
      "sent_medio": 0.74,
      "pct_pos": 82,
      "pct_neg": 8,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Atendimento",
        "Promocoes Fidelidade",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"muito confuso aonde ficava o hamburguer (junto com doces), o preço estava altissimo.\"",
        "\"Quero Parabenizar a funcionária Riso é a melhor de Arujá...Excelente atendimento\"",
        "\"Fazendo o mínimo direito\"",
        "\"mais promoçoes de combos, ou baixando os preços.\"",
        "\"Abrindo no Bonsucesso Guarulhos\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 92.6,
          "neg": 7.4
        },
        {
          "m": "2025-02",
          "pos": 84.0,
          "neg": 4.0
        },
        {
          "m": "2025-03",
          "pos": 84.6,
          "neg": 0.0
        },
        {
          "m": "2025-04",
          "pos": 63.6,
          "neg": 18.2
        },
        {
          "m": "2025-05",
          "pos": 53.8,
          "neg": 38.5
        },
        {
          "m": "2025-06",
          "pos": 75.0,
          "neg": 6.2
        },
        {
          "m": "2025-07",
          "pos": 44.4,
          "neg": 22.2
        },
        {
          "m": "2025-08",
          "pos": 94.1,
          "neg": 0.0
        },
        {
          "m": "2025-09",
          "pos": 93.3,
          "neg": 0.0
        },
        {
          "m": "2025-10",
          "pos": 64.3,
          "neg": 0.0
        },
        {
          "m": "2025-11",
          "pos": 81.0,
          "neg": 14.3
        },
        {
          "m": "2025-12",
          "pos": 87.0,
          "neg": 4.3
        },
        {
          "m": "2026-01",
          "pos": 88.2,
          "neg": 11.8
        },
        {
          "m": "2026-02",
          "pos": 92.9,
          "neg": 7.1
        },
        {
          "m": "2026-03",
          "pos": 83.3,
          "neg": 0.0
        },
        {
          "m": "2026-04",
          "pos": 84.6,
          "neg": 7.7
        },
        {
          "m": "2026-05",
          "pos": 88.9,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5227-CRUZEIRO",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 93.1,
      "nps_ajust": 93.0,
      "delta": -0.1,
      "sent_medio": 0.76,
      "pct_pos": 83,
      "pct_neg": 7,
      "top3_problemas": [
        "Atendimento",
        "Abastecimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"a costela estava um pouco salgada\"",
        "\"Está ótimo assim\"",
        "\"Continuar do jeito que está já é muito bom\"",
        "\"Alguns produtos que tem.no Rio e S.Paulo.nao tem.na loja de Cruzeiro\"",
        "\"Cartão fidelidade,  desconto e promoções.  A qualidade é a melhor! Gostaria muito de conhecer e saber como são produzido\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 84.6,
          "neg": 7.7
        },
        {
          "m": "2025-02",
          "pos": 63.6,
          "neg": 18.2
        },
        {
          "m": "2025-03",
          "pos": 72.7,
          "neg": 9.1
        },
        {
          "m": "2025-04",
          "pos": 90.9,
          "neg": 9.1
        },
        {
          "m": "2025-05",
          "pos": 86.4,
          "neg": 0.0
        },
        {
          "m": "2025-06",
          "pos": 77.1,
          "neg": 2.9
        },
        {
          "m": "2025-07",
          "pos": 91.7,
          "neg": 0.0
        },
        {
          "m": "2025-08",
          "pos": 91.7,
          "neg": 4.2
        },
        {
          "m": "2025-09",
          "pos": 77.4,
          "neg": 16.1
        },
        {
          "m": "2025-10",
          "pos": 81.8,
          "neg": 4.5
        },
        {
          "m": "2025-11",
          "pos": 85.0,
          "neg": 5.0
        },
        {
          "m": "2025-12",
          "pos": 86.4,
          "neg": 0.0
        },
        {
          "m": "2026-01",
          "pos": 90.5,
          "neg": 9.5
        },
        {
          "m": "2026-02",
          "pos": 83.3,
          "neg": 8.3
        },
        {
          "m": "2026-03",
          "pos": 100.0,
          "neg": 0.0
        },
        {
          "m": "2026-04",
          "pos": 79.2,
          "neg": 12.5
        },
        {
          "m": "2026-05",
          "pos": 78.9,
          "neg": 10.5
        }
      ]
    },
    {
      "nome": "L5229-GLAUCIO GIL",
      "flag": "regular",
      "uf": "RJ",
      "nps_trad": 91.8,
      "nps_ajust": 91.5,
      "delta": -0.3,
      "sent_medio": 0.7,
      "pct_pos": 78,
      "pct_neg": 8,
      "top3_problemas": [
        "Atendimento",
        "Abastecimento",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Atendimento",
        "Promocoes Fidelidade",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Não sei como são as demais lojas da Swift, mas a do Recreio localizada na Av. Glaucio Gil é um primor de instalação e fu\"",
        "\"Falta de atendentes circulando p ajudar ao cliente\"",
        "\"A Costelinha Suína que eu comprava não encontro mais na loja.\"",
        "\"Adoro os produtos, e os atendentes Rodrigo e Carlos me ajudam demais, e são muito simpáticos e educados. Os meninos estã\"",
        "\"Entrega em casa  em tds os bairros\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 76.5,
          "neg": 11.8
        },
        {
          "m": "2025-02",
          "pos": 76.7,
          "neg": 3.3
        },
        {
          "m": "2025-03",
          "pos": 84.0,
          "neg": 8.0
        },
        {
          "m": "2025-04",
          "pos": 87.5,
          "neg": 4.2
        },
        {
          "m": "2025-05",
          "pos": 86.4,
          "neg": 9.1
        },
        {
          "m": "2025-06",
          "pos": 89.6,
          "neg": 4.5
        },
        {
          "m": "2025-07",
          "pos": 87.2,
          "neg": 2.1
        },
        {
          "m": "2025-08",
          "pos": 89.1,
          "neg": 2.2
        },
        {
          "m": "2025-09",
          "pos": 71.1,
          "neg": 10.5
        },
        {
          "m": "2025-10",
          "pos": 78.1,
          "neg": 12.5
        },
        {
          "m": "2025-11",
          "pos": 66.7,
          "neg": 0.0
        },
        {
          "m": "2025-12",
          "pos": 68.0,
          "neg": 8.0
        },
        {
          "m": "2026-01",
          "pos": 71.4,
          "neg": 7.1
        },
        {
          "m": "2026-02",
          "pos": 78.6,
          "neg": 4.8
        },
        {
          "m": "2026-03",
          "pos": 61.9,
          "neg": 14.3
        },
        {
          "m": "2026-04",
          "pos": 65.9,
          "neg": 13.6
        },
        {
          "m": "2026-05",
          "pos": 63.6,
          "neg": 31.8
        }
      ]
    },
    {
      "nome": "L5230-LARGO DO MACHADO",
      "flag": "regular",
      "uf": "RJ",
      "nps_trad": 85.2,
      "nps_ajust": 84.7,
      "delta": -0.5,
      "sent_medio": 0.57,
      "pct_pos": 69,
      "pct_neg": 12,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Abastecimento",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Ótimos atendimentos do pessoal da noite, em especial Isabella, Carol, Léo e Otávio!\"",
        "\"Estornar o valor da diferença da compra original r da entrega por falta de itens .\"",
        "\"Almôndega vegetal aumentou quase 80%\n\nNão encontrei o mix de cogumelos\"",
        "\"App super fácil de usar, prazo excelente e o atendimento na loja é ótimo, super recomendo ????\"",
        "\"Poderia melhorar o site. Não consegui realizar a compra online (não é a primeiravez que isto acontece). Fui a loja físic\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 72.4,
          "neg": 8.6
        },
        {
          "m": "2025-02",
          "pos": 70.7,
          "neg": 9.8
        },
        {
          "m": "2025-03",
          "pos": 77.4,
          "neg": 12.3
        },
        {
          "m": "2025-04",
          "pos": 64.6,
          "neg": 12.5
        },
        {
          "m": "2025-05",
          "pos": 70.3,
          "neg": 12.3
        },
        {
          "m": "2025-06",
          "pos": 77.0,
          "neg": 9.9
        },
        {
          "m": "2025-07",
          "pos": 68.6,
          "neg": 12.4
        },
        {
          "m": "2025-08",
          "pos": 72.5,
          "neg": 10.1
        },
        {
          "m": "2025-09",
          "pos": 69.4,
          "neg": 8.2
        },
        {
          "m": "2025-10",
          "pos": 67.0,
          "neg": 12.0
        },
        {
          "m": "2025-11",
          "pos": 62.9,
          "neg": 12.4
        },
        {
          "m": "2025-12",
          "pos": 68.0,
          "neg": 15.0
        },
        {
          "m": "2026-01",
          "pos": 64.3,
          "neg": 17.9
        },
        {
          "m": "2026-02",
          "pos": 66.0,
          "neg": 8.2
        },
        {
          "m": "2026-03",
          "pos": 66.7,
          "neg": 17.2
        },
        {
          "m": "2026-04",
          "pos": 65.2,
          "neg": 20.2
        },
        {
          "m": "2026-05",
          "pos": 61.1,
          "neg": 13.0
        }
      ]
    },
    {
      "nome": "L5231-SOROCABA PANNUNZIO",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 90.1,
      "nps_ajust": 89.9,
      "delta": -0.2,
      "sent_medio": 0.65,
      "pct_pos": 77,
      "pct_neg": 12,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Do jeito que vocês são não tem que alterar nada,pois o preço é justo com a quantidade dos produtos\"",
        "\"Continem a fazer promoções\"",
        "\"Acredito que uma acertada nos valores , automaticamente as compras seriam maiores, pq com preços menores,o consumidor va\"",
        "\"Continuem assim que está ótimo !\"",
        "\"Frete mais barato\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 80.0,
          "neg": 5.7
        },
        {
          "m": "2025-02",
          "pos": 55.6,
          "neg": 16.7
        },
        {
          "m": "2025-03",
          "pos": 66.7,
          "neg": 27.8
        },
        {
          "m": "2025-04",
          "pos": 90.0,
          "neg": 3.3
        },
        {
          "m": "2025-05",
          "pos": 72.2,
          "neg": 13.9
        },
        {
          "m": "2025-06",
          "pos": 81.2,
          "neg": 6.2
        },
        {
          "m": "2025-07",
          "pos": 82.8,
          "neg": 3.4
        },
        {
          "m": "2025-08",
          "pos": 78.8,
          "neg": 15.2
        },
        {
          "m": "2025-09",
          "pos": 86.2,
          "neg": 10.3
        },
        {
          "m": "2025-10",
          "pos": 91.3,
          "neg": 4.3
        },
        {
          "m": "2025-11",
          "pos": 73.1,
          "neg": 23.1
        },
        {
          "m": "2025-12",
          "pos": 82.5,
          "neg": 10.5
        },
        {
          "m": "2026-01",
          "pos": 76.0,
          "neg": 16.0
        },
        {
          "m": "2026-02",
          "pos": 72.4,
          "neg": 13.8
        },
        {
          "m": "2026-03",
          "pos": 72.4,
          "neg": 17.2
        },
        {
          "m": "2026-04",
          "pos": 65.6,
          "neg": 18.8
        },
        {
          "m": "2026-05",
          "pos": 66.7,
          "neg": 12.5
        }
      ]
    },
    {
      "nome": "L5232-PARQUE ECOLOGICO",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 88.0,
      "nps_ajust": 87.7,
      "delta": -0.3,
      "sent_medio": 0.58,
      "pct_pos": 72,
      "pct_neg": 13,
      "top3_problemas": [
        "Entrega Logistica",
        "Abastecimento",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Eu reutilizei um pedido e queria adicionar outras coisas mas não conseguia interagir. Só consegui mudar a quantidade. \nE\"",
        "\"Para novos produtos, fazer alguma dias de degustação, principalmente as sextas e sábados, que acredito ser de maior movi\"",
        "\"Loja estava em abastecimento, então estava bem bagunçada e com vários freezers em manutenção. Fora isso a experiencia fo\"",
        "\"O atendimento exemplar de Amanda (jovem nissei) e Renata são sempre o ponto alto. Independente do volume de compra sempr\"",
        "\"Orientando os colaboradores \"novatos\" quando tiver promoção na loja para divulgar aos clientes no caixa caso haja intere\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 79.2,
          "neg": 12.5
        },
        {
          "m": "2025-02",
          "pos": 88.2,
          "neg": 0.0
        },
        {
          "m": "2025-03",
          "pos": 68.2,
          "neg": 13.6
        },
        {
          "m": "2025-04",
          "pos": 77.3,
          "neg": 13.6
        },
        {
          "m": "2025-05",
          "pos": 82.8,
          "neg": 10.3
        },
        {
          "m": "2025-06",
          "pos": 65.4,
          "neg": 30.8
        },
        {
          "m": "2025-07",
          "pos": 73.0,
          "neg": 8.1
        },
        {
          "m": "2025-08",
          "pos": 69.0,
          "neg": 17.2
        },
        {
          "m": "2025-09",
          "pos": 81.8,
          "neg": 3.0
        },
        {
          "m": "2025-10",
          "pos": 56.4,
          "neg": 23.1
        },
        {
          "m": "2025-11",
          "pos": 81.8,
          "neg": 9.1
        },
        {
          "m": "2025-12",
          "pos": 67.7,
          "neg": 19.4
        },
        {
          "m": "2026-01",
          "pos": 46.7,
          "neg": 20.0
        },
        {
          "m": "2026-02",
          "pos": 63.6,
          "neg": 9.1
        },
        {
          "m": "2026-03",
          "pos": 78.6,
          "neg": 7.1
        },
        {
          "m": "2026-04",
          "pos": 75.0,
          "neg": 12.5
        },
        {
          "m": "2026-05",
          "pos": 78.9,
          "neg": 5.3
        }
      ]
    },
    {
      "nome": "L5233-MONGAGUA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 93.0,
      "nps_ajust": 92.7,
      "delta": -0.3,
      "sent_medio": 0.8,
      "pct_pos": 85,
      "pct_neg": 6,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Loja Fisica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Fazendo mais promoções!!!\"",
        "\"Comprei pãozinho e estava vencendo no dia 12\nNão vi só fui ver quando fui fã,era hoje\"",
        "\"Loja de Mongaguá maravilhosa, atendimento nota 1000. Todos os funcionários são educados prestativos e atenciosos... Amo\"",
        "\"Vcs tem um macarrão de massa verde com mussarela que vive em falta,\"",
        "\"Parabéns e excelente atendimento de todos os atendentes e a toda a equipe.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 75.0,
          "neg": 12.5
        },
        {
          "m": "2025-02",
          "pos": 82.8,
          "neg": 3.4
        },
        {
          "m": "2025-03",
          "pos": 78.0,
          "neg": 4.9
        },
        {
          "m": "2025-04",
          "pos": 84.4,
          "neg": 3.1
        },
        {
          "m": "2025-05",
          "pos": 87.2,
          "neg": 4.3
        },
        {
          "m": "2025-06",
          "pos": 86.3,
          "neg": 5.9
        },
        {
          "m": "2025-07",
          "pos": 92.3,
          "neg": 7.7
        },
        {
          "m": "2025-08",
          "pos": 88.9,
          "neg": 5.6
        },
        {
          "m": "2025-09",
          "pos": 89.7,
          "neg": 7.7
        },
        {
          "m": "2025-10",
          "pos": 85.4,
          "neg": 8.3
        },
        {
          "m": "2025-11",
          "pos": 90.9,
          "neg": 4.5
        },
        {
          "m": "2025-12",
          "pos": 81.5,
          "neg": 11.1
        },
        {
          "m": "2026-01",
          "pos": 89.8,
          "neg": 4.1
        },
        {
          "m": "2026-02",
          "pos": 81.0,
          "neg": 7.1
        },
        {
          "m": "2026-03",
          "pos": 91.7,
          "neg": 0.0
        },
        {
          "m": "2026-04",
          "pos": 87.2,
          "neg": 4.3
        },
        {
          "m": "2026-05",
          "pos": 74.1,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5235-LOUVEIRA",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 90.8,
      "nps_ajust": 90.3,
      "delta": -0.4,
      "sent_medio": 0.7,
      "pct_pos": 81,
      "pct_neg": 11,
      "top3_problemas": [
        "Entrega Logistica",
        "Abastecimento",
        "Loja Fisica"
      ],
      "top3_elogios": [
        "Atendimento",
        "Loja Fisica",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Colocando um moto boy pra entregar, aí ficaria melhor .\"",
        "\"O torresmo têm um gosto de ranço, gordura velha .\"",
        "\"Olha achei maravilhoso continue assim\"",
        "\"Já foi melhor, hoje o atendimento não é mais como antes. Os produtos teve uma queda na qualidade, muito mesmo, quando er\"",
        "\"Como vcs vendem vegetais tb , seria possível por produtos vejamos? Por exemplo: Toque, salsicha, linguiça,  presunto da \""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 92.9,
          "neg": 7.1
        },
        {
          "m": "2025-02",
          "pos": 81.8,
          "neg": 9.1
        },
        {
          "m": "2025-03",
          "pos": 78.6,
          "neg": 14.3
        },
        {
          "m": "2025-04",
          "pos": 85.0,
          "neg": 10.0
        },
        {
          "m": "2025-05",
          "pos": 90.0,
          "neg": 0.0
        },
        {
          "m": "2025-06",
          "pos": 50.0,
          "neg": 33.3
        },
        {
          "m": "2025-07",
          "pos": 90.0,
          "neg": 0.0
        },
        {
          "m": "2025-08",
          "pos": 76.9,
          "neg": 23.1
        },
        {
          "m": "2025-09",
          "pos": 80.0,
          "neg": 6.7
        },
        {
          "m": "2025-10",
          "pos": 84.2,
          "neg": 10.5
        },
        {
          "m": "2025-11",
          "pos": 91.7,
          "neg": 8.3
        },
        {
          "m": "2025-12",
          "pos": 84.2,
          "neg": 10.5
        },
        {
          "m": "2026-01",
          "pos": 70.0,
          "neg": 30.0
        },
        {
          "m": "2026-02",
          "pos": 73.7,
          "neg": 5.3
        },
        {
          "m": "2026-03",
          "pos": 68.2,
          "neg": 13.6
        },
        {
          "m": "2026-04",
          "pos": 81.2,
          "neg": 12.5
        },
        {
          "m": "2026-05",
          "pos": 91.7,
          "neg": 8.3
        }
      ]
    },
    {
      "nome": "L5236-JACAREI VILLA BRANCA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 89.3,
      "nps_ajust": 89.0,
      "delta": -0.3,
      "sent_medio": 0.6,
      "pct_pos": 74,
      "pct_neg": 14,
      "top3_problemas": [
        "Entrega Logistica",
        "Promocoes Fidelidade",
        "Abastecimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Loja Fisica",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Baixar os preços\"",
        "\"Comprei uma Picanha Argentina \" Arrebeef\"  essa semana.\nFiz um churrasco hoje, Muito dura, essa, para não jogar fora vai\"",
        "\"A carne com cheiro de velha\"",
        "\"Oferece mais combos atrativos com preços promocionais\"",
        "\"Fui comprar feijão, potinho congelado. Questionei a atendente sobre as cores. Pois eu queria sem bacon \nE falei os potes\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 83.3,
          "neg": 8.3
        },
        {
          "m": "2025-02",
          "pos": 66.7,
          "neg": 0.0
        },
        {
          "m": "2025-03",
          "pos": 55.6,
          "neg": 33.3
        },
        {
          "m": "2025-04",
          "pos": 62.5,
          "neg": 12.5
        },
        {
          "m": "2025-05",
          "pos": 91.7,
          "neg": 0.0
        },
        {
          "m": "2025-06",
          "pos": 85.7,
          "neg": 14.3
        },
        {
          "m": "2025-07",
          "pos": 66.7,
          "neg": 16.7
        },
        {
          "m": "2025-08",
          "pos": 71.4,
          "neg": 28.6
        },
        {
          "m": "2025-09",
          "pos": 83.3,
          "neg": 16.7
        },
        {
          "m": "2025-10",
          "pos": 63.6,
          "neg": 9.1
        },
        {
          "m": "2025-11",
          "pos": 40.0,
          "neg": 40.0
        },
        {
          "m": "2025-12",
          "pos": 88.2,
          "neg": 5.9
        },
        {
          "m": "2026-01",
          "pos": 75.0,
          "neg": 25.0
        },
        {
          "m": "2026-02",
          "pos": 60.0,
          "neg": 20.0
        },
        {
          "m": "2026-03",
          "pos": 83.3,
          "neg": 8.3
        },
        {
          "m": "2026-04",
          "pos": 70.0,
          "neg": 20.0
        }
      ]
    },
    {
      "nome": "L5237-PAULINIA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 84.8,
      "nps_ajust": 84.7,
      "delta": -0.1,
      "sent_medio": 0.53,
      "pct_pos": 66,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Produto comprado Camarão , não estava como dizia na embalagem...\"",
        "\"Existe a informação do CPF do cadastro para compra, porém sou cliente desde inicio da loja em PauliniaSp, porém uma suge\"",
        "\"Nao sei se dei azar, mas fui ontem e nao achei nada do q precisava. Nao tinha filé de peito de frango entre outras coisa\"",
        "\"Preços mais acessíveis\"",
        "\"Sempre é um caixa só, não sei porquê. Fica mais gente no apoio da loja, alguns carrinhos de arrumação da loja, mas caixa\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 79.2,
          "neg": 0.0
        },
        {
          "m": "2025-02",
          "pos": 66.7,
          "neg": 11.1
        },
        {
          "m": "2025-03",
          "pos": 58.3,
          "neg": 16.7
        },
        {
          "m": "2025-04",
          "pos": 57.9,
          "neg": 21.1
        },
        {
          "m": "2025-05",
          "pos": 72.7,
          "neg": 13.6
        },
        {
          "m": "2025-06",
          "pos": 68.4,
          "neg": 0.0
        },
        {
          "m": "2025-07",
          "pos": 72.2,
          "neg": 0.0
        },
        {
          "m": "2025-08",
          "pos": 80.0,
          "neg": 10.0
        },
        {
          "m": "2025-09",
          "pos": 66.7,
          "neg": 13.3
        },
        {
          "m": "2025-10",
          "pos": 52.2,
          "neg": 26.1
        },
        {
          "m": "2025-11",
          "pos": 75.0,
          "neg": 6.2
        },
        {
          "m": "2025-12",
          "pos": 76.2,
          "neg": 9.5
        },
        {
          "m": "2026-01",
          "pos": 60.9,
          "neg": 26.1
        },
        {
          "m": "2026-02",
          "pos": 44.4,
          "neg": 16.7
        },
        {
          "m": "2026-03",
          "pos": 50.0,
          "neg": 42.9
        },
        {
          "m": "2026-04",
          "pos": 61.5,
          "neg": 0.0
        },
        {
          "m": "2026-05",
          "pos": 71.4,
          "neg": 7.1
        }
      ]
    },
    {
      "nome": "L5239-CACAPAVA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 92.7,
      "nps_ajust": 92.9,
      "delta": 0.2,
      "sent_medio": 0.72,
      "pct_pos": 80,
      "pct_neg": 8,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Produto"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Loja Fisica",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Preço dos produtos, muito caro\"",
        "\"Continuar com toda a organização da loja está de parabéns é bom ter umas promoções também seria ótimo ?\"",
        "\"Comprei uma picanha, fui pelo preço e o barato saiu caro. Picanha dura, sem gordura...passei vergonha no churrasco. Na m\"",
        "\"Só o preço para melhorar o custo benefício\"",
        "\"Excelente qualidade precisamos de mais promoções ?\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 58.3,
          "neg": 25.0
        },
        {
          "m": "2025-02",
          "pos": 71.4,
          "neg": 14.3
        },
        {
          "m": "2025-03",
          "pos": 66.7,
          "neg": 11.1
        },
        {
          "m": "2025-04",
          "pos": 41.7,
          "neg": 41.7
        },
        {
          "m": "2025-05",
          "pos": 88.9,
          "neg": 0.0
        },
        {
          "m": "2025-06",
          "pos": 57.9,
          "neg": 26.3
        },
        {
          "m": "2025-07",
          "pos": 100.0,
          "neg": 0.0
        },
        {
          "m": "2025-08",
          "pos": 87.5,
          "neg": 4.2
        },
        {
          "m": "2025-09",
          "pos": 81.5,
          "neg": 3.7
        },
        {
          "m": "2025-10",
          "pos": 88.5,
          "neg": 7.7
        },
        {
          "m": "2025-11",
          "pos": 89.3,
          "neg": 0.0
        },
        {
          "m": "2025-12",
          "pos": 90.0,
          "neg": 2.5
        },
        {
          "m": "2026-01",
          "pos": 70.6,
          "neg": 17.6
        },
        {
          "m": "2026-02",
          "pos": 81.0,
          "neg": 0.0
        },
        {
          "m": "2026-03",
          "pos": 65.4,
          "neg": 7.7
        },
        {
          "m": "2026-04",
          "pos": 92.6,
          "neg": 3.7
        },
        {
          "m": "2026-05",
          "pos": 71.4,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5240-BARAO GERALDO",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 90.8,
      "nps_ajust": 90.3,
      "delta": -0.5,
      "sent_medio": 0.64,
      "pct_pos": 75,
      "pct_neg": 11,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Promocoes Fidelidade",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Não foi possível passar meu vale alimentação Sodexo para pagar minha compra e segundo a atendente já faz uma semana que \"",
        "\"Eu acho a loja e os funcionários excelentes não vejo como melhorar\"",
        "\"Por enquanto está tudo bem.\"",
        "\"Alguns preços, principalmente os produtos semi-prontos e temperados, como cupim e costela, poderiam ser melhores para o \"",
        "\"Entrega no mesmo dia para o CEP 13084405\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 78.6,
          "neg": 14.3
        },
        {
          "m": "2025-02",
          "pos": 76.7,
          "neg": 13.3
        },
        {
          "m": "2025-03",
          "pos": 76.5,
          "neg": 8.8
        },
        {
          "m": "2025-04",
          "pos": 75.9,
          "neg": 3.4
        },
        {
          "m": "2025-05",
          "pos": 78.1,
          "neg": 6.2
        },
        {
          "m": "2025-06",
          "pos": 70.0,
          "neg": 10.0
        },
        {
          "m": "2025-07",
          "pos": 82.6,
          "neg": 13.0
        },
        {
          "m": "2025-08",
          "pos": 75.0,
          "neg": 10.7
        },
        {
          "m": "2025-09",
          "pos": 75.0,
          "neg": 14.3
        },
        {
          "m": "2025-10",
          "pos": 58.8,
          "neg": 11.8
        },
        {
          "m": "2025-11",
          "pos": 81.0,
          "neg": 4.8
        },
        {
          "m": "2025-12",
          "pos": 72.7,
          "neg": 18.2
        },
        {
          "m": "2026-01",
          "pos": 59.3,
          "neg": 22.2
        },
        {
          "m": "2026-02",
          "pos": 74.2,
          "neg": 3.2
        },
        {
          "m": "2026-03",
          "pos": 68.2,
          "neg": 18.2
        },
        {
          "m": "2026-04",
          "pos": 88.5,
          "neg": 3.8
        },
        {
          "m": "2026-05",
          "pos": 71.4,
          "neg": 14.3
        }
      ]
    },
    {
      "nome": "L5241-ITAPEVI",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 91.9,
      "nps_ajust": 91.6,
      "delta": -0.3,
      "sent_medio": 0.69,
      "pct_pos": 79,
      "pct_neg": 10,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Produto"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Acho o frete mto caro!! Se conseguirem baixar…\"",
        "\"No dia não tinha picanhas Argentina e tinha o papel com valor no freezer\"",
        "\"As vezes falta os produtos.\nFui uma vez, procurei linguiça bovina, não achei.\nSó tinha suína.\nOntem, dia 11/03/26, procu\"",
        "\"Só acho o frete muito caro! E qdo coloco o cupom de desconto não desconta nada!\"",
        "\"Entrei atraves do estacionamento atras da loja, porem a porta estava fechada e foi necessário dar a volta, na hora de sa\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 89.6,
          "neg": 4.2
        },
        {
          "m": "2025-02",
          "pos": 70.7,
          "neg": 17.1
        },
        {
          "m": "2025-03",
          "pos": 79.2,
          "neg": 8.3
        },
        {
          "m": "2025-04",
          "pos": 78.8,
          "neg": 15.2
        },
        {
          "m": "2025-05",
          "pos": 81.8,
          "neg": 9.1
        },
        {
          "m": "2025-06",
          "pos": 81.6,
          "neg": 5.3
        },
        {
          "m": "2025-07",
          "pos": 84.4,
          "neg": 12.5
        },
        {
          "m": "2025-08",
          "pos": 72.4,
          "neg": 20.7
        },
        {
          "m": "2025-09",
          "pos": 77.4,
          "neg": 6.5
        },
        {
          "m": "2025-10",
          "pos": 79.2,
          "neg": 12.5
        },
        {
          "m": "2025-11",
          "pos": 87.0,
          "neg": 8.7
        },
        {
          "m": "2025-12",
          "pos": 76.5,
          "neg": 11.8
        },
        {
          "m": "2026-01",
          "pos": 80.0,
          "neg": 0.0
        },
        {
          "m": "2026-02",
          "pos": 72.7,
          "neg": 9.1
        },
        {
          "m": "2026-03",
          "pos": 74.1,
          "neg": 14.8
        },
        {
          "m": "2026-04",
          "pos": 86.4,
          "neg": 9.1
        },
        {
          "m": "2026-05",
          "pos": 61.5,
          "neg": 7.7
        }
      ]
    },
    {
      "nome": "L5242-RECREIO",
      "flag": "regular",
      "uf": "RJ",
      "nps_trad": 88.9,
      "nps_ajust": 88.6,
      "delta": -0.3,
      "sent_medio": 0.63,
      "pct_pos": 74,
      "pct_neg": 12,
      "top3_problemas": [
        "Abastecimento",
        "Produto",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Atendimento",
        "Loja Fisica",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"E só manter os produtos em estoque.\"",
        "\"Melhorar a reposição de produtos e principalmente a otimização no Pag do caixa!\"",
        "\"D loja não tenho nada a reclamar , só elogios.Qnt o estacionamento da loja do Recreio pode melhorar , muito pequeno.\"",
        "\"manter todos os itens a cima em dia. Parabens\"",
        "\"Nunca respondo pesquisas de satisfação, porém dia 19/2/25 comprei uma picanha e a mesma estava com o sabor muito ruim. A\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 76.8,
          "neg": 12.5
        },
        {
          "m": "2025-02",
          "pos": 78.3,
          "neg": 13.0
        },
        {
          "m": "2025-03",
          "pos": 69.7,
          "neg": 6.1
        },
        {
          "m": "2025-04",
          "pos": 63.0,
          "neg": 22.2
        },
        {
          "m": "2025-05",
          "pos": 81.0,
          "neg": 14.3
        },
        {
          "m": "2025-06",
          "pos": 77.4,
          "neg": 9.7
        },
        {
          "m": "2025-07",
          "pos": 70.0,
          "neg": 15.0
        },
        {
          "m": "2025-08",
          "pos": 70.6,
          "neg": 5.9
        },
        {
          "m": "2025-09",
          "pos": 88.9,
          "neg": 7.4
        },
        {
          "m": "2025-10",
          "pos": 81.5,
          "neg": 3.7
        },
        {
          "m": "2025-11",
          "pos": 63.2,
          "neg": 15.8
        },
        {
          "m": "2025-12",
          "pos": 61.5,
          "neg": 23.1
        },
        {
          "m": "2026-01",
          "pos": 78.9,
          "neg": 5.3
        },
        {
          "m": "2026-02",
          "pos": 60.9,
          "neg": 17.4
        },
        {
          "m": "2026-03",
          "pos": 86.4,
          "neg": 13.6
        },
        {
          "m": "2026-04",
          "pos": 64.3,
          "neg": 0.0
        },
        {
          "m": "2026-05",
          "pos": 91.7,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5243-MONTE CASTELO",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 86.9,
      "nps_ajust": 86.5,
      "delta": -0.4,
      "sent_medio": 0.59,
      "pct_pos": 73,
      "pct_neg": 14,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Loja Fisica",
        "Abastecimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Fiquei triste com os descontinuação linha Incrível , um dos meus filhos é vegetariano e agora não teremos maus as opções\"",
        "\"O estacionamento da loja, que fica dentro de uma rotatória, requer muito cuidado dos motoristas - nem tanto na entrada, \"",
        "\"Adoro a Swift monte castelo, ótimo atendimento, loja cheia de variedade, recomendo demais.\"",
        "\"Atendimento é às carnes nota 10\"",
        "\"Estou satisfeita com a loja , encontro tudo que preciso nela ,então no meu olhar a melhora seria ter mais vagas de estac\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 68.8,
          "neg": 6.2
        },
        {
          "m": "2025-02",
          "pos": 73.3,
          "neg": 6.7
        },
        {
          "m": "2025-03",
          "pos": 79.3,
          "neg": 13.8
        },
        {
          "m": "2025-04",
          "pos": 85.7,
          "neg": 7.1
        },
        {
          "m": "2025-05",
          "pos": 77.8,
          "neg": 16.7
        },
        {
          "m": "2025-06",
          "pos": 80.0,
          "neg": 13.3
        },
        {
          "m": "2025-07",
          "pos": 54.5,
          "neg": 36.4
        },
        {
          "m": "2025-08",
          "pos": 70.6,
          "neg": 17.6
        },
        {
          "m": "2025-09",
          "pos": 78.6,
          "neg": 7.1
        },
        {
          "m": "2025-10",
          "pos": 58.3,
          "neg": 25.0
        },
        {
          "m": "2025-11",
          "pos": 63.6,
          "neg": 9.1
        },
        {
          "m": "2025-12",
          "pos": 50.0,
          "neg": 0.0
        },
        {
          "m": "2026-01",
          "pos": 66.7,
          "neg": 22.2
        },
        {
          "m": "2026-02",
          "pos": 64.7,
          "neg": 23.5
        },
        {
          "m": "2026-03",
          "pos": 66.7,
          "neg": 8.3
        },
        {
          "m": "2026-04",
          "pos": 84.2,
          "neg": 15.8
        },
        {
          "m": "2026-05",
          "pos": 90.0,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5244-TAGUATINGA SUL",
      "flag": "regular",
      "uf": "DF",
      "nps_trad": 88.5,
      "nps_ajust": 88.1,
      "delta": -0.4,
      "sent_medio": 0.62,
      "pct_pos": 74,
      "pct_neg": 12,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Loja Fisica",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Garantir preços competitivos\"",
        "\"Acem em cubos carne fedida e pura gordura. Ja comprei algumas vezes e foi muito bom. Porém nas últimas vezes a qualidade\"",
        "\"Eu encontrei o doce de leite com café  mais gostoso  do mundo na Swift,  a praticidade  de encontrar os produtos são óti\"",
        "\"Dêem oportunidade aos consumidores de fazerem avaliações intermediárias.\nNem tudo na Swift é positivo e nem tudo é despr\"",
        "\"Se baixar um pouco os preços,  ficaria espetacular.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 84.6,
          "neg": 3.8
        },
        {
          "m": "2025-02",
          "pos": 80.0,
          "neg": 10.0
        },
        {
          "m": "2025-03",
          "pos": 72.2,
          "neg": 16.7
        },
        {
          "m": "2025-04",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2025-05",
          "pos": 82.5,
          "neg": 10.0
        },
        {
          "m": "2025-06",
          "pos": 70.6,
          "neg": 5.9
        },
        {
          "m": "2025-07",
          "pos": 65.0,
          "neg": 20.0
        },
        {
          "m": "2025-08",
          "pos": 88.0,
          "neg": 4.0
        },
        {
          "m": "2025-09",
          "pos": 71.9,
          "neg": 12.5
        },
        {
          "m": "2025-10",
          "pos": 75.0,
          "neg": 8.3
        },
        {
          "m": "2025-11",
          "pos": 82.8,
          "neg": 3.4
        },
        {
          "m": "2025-12",
          "pos": 75.7,
          "neg": 2.7
        },
        {
          "m": "2026-01",
          "pos": 69.2,
          "neg": 23.1
        },
        {
          "m": "2026-02",
          "pos": 83.3,
          "neg": 8.3
        },
        {
          "m": "2026-03",
          "pos": 42.9,
          "neg": 33.3
        },
        {
          "m": "2026-04",
          "pos": 60.9,
          "neg": 26.1
        },
        {
          "m": "2026-05",
          "pos": 66.7,
          "neg": 16.7
        }
      ]
    },
    {
      "nome": "L5245-MAUA 2",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 89.1,
      "nps_ajust": 88.7,
      "delta": -0.5,
      "sent_medio": 0.58,
      "pct_pos": 72,
      "pct_neg": 14,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Produto"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Loja Fisica",
        "Abastecimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Deveria ter um opção de carnes menos congeladas.\nNenhum especialista me abordou na loja,por isso nota baixa.\nOs preços, \"",
        "\"Continuando com o atual atendimento não há nada mais a desejar\"",
        "\"Tá td bom\"",
        "\"Olá .o ideal seria que vcs .com dois produtos em promoção compra dois e sai mais em conta.seria pegar diferentes produto\"",
        "\"Esta tudo bom…\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 67.7,
          "neg": 16.1
        },
        {
          "m": "2025-02",
          "pos": 44.4,
          "neg": 16.7
        },
        {
          "m": "2025-03",
          "pos": 66.7,
          "neg": 23.3
        },
        {
          "m": "2025-04",
          "pos": 85.7,
          "neg": 4.8
        },
        {
          "m": "2025-05",
          "pos": 70.6,
          "neg": 8.8
        },
        {
          "m": "2025-06",
          "pos": 72.1,
          "neg": 16.3
        },
        {
          "m": "2025-07",
          "pos": 70.4,
          "neg": 11.1
        },
        {
          "m": "2025-08",
          "pos": 64.1,
          "neg": 15.4
        },
        {
          "m": "2025-09",
          "pos": 67.9,
          "neg": 7.1
        },
        {
          "m": "2025-10",
          "pos": 74.2,
          "neg": 16.1
        },
        {
          "m": "2025-11",
          "pos": 75.0,
          "neg": 12.5
        },
        {
          "m": "2025-12",
          "pos": 69.7,
          "neg": 21.2
        },
        {
          "m": "2026-01",
          "pos": 83.3,
          "neg": 16.7
        },
        {
          "m": "2026-02",
          "pos": 96.2,
          "neg": 0.0
        },
        {
          "m": "2026-03",
          "pos": 77.8,
          "neg": 16.7
        },
        {
          "m": "2026-04",
          "pos": 66.7,
          "neg": 18.2
        },
        {
          "m": "2026-05",
          "pos": 78.6,
          "neg": 14.3
        }
      ]
    },
    {
      "nome": "L5246-MALL MULTI GERMINARE",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 94.2,
      "nps_ajust": 94.0,
      "delta": -0.2,
      "sent_medio": 0.8,
      "pct_pos": 84,
      "pct_neg": 5,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Produto"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Sensacional o atendimento, educação e a receptividade. Esqueci meu celular no caixa e o atendente literalmente correu at\"",
        "\"Abrir uma loja em Perus\"",
        "\"Parabéns ao atendimento , que excelência! Cordial e rápido\"",
        "\"Toda compra que faço não estou recebendo a NFe por email. No email só recebo as propagandas :-(\nNão consigo recuperar o \"",
        "\"O atendimento é muito bom, as pessoas agem rápido, porém algo não está bem internamente, este é o segundo pedido que não\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 100.0,
          "neg": 0.0
        },
        {
          "m": "2025-02",
          "pos": 93.3,
          "neg": 6.7
        },
        {
          "m": "2025-03",
          "pos": 73.3,
          "neg": 6.7
        },
        {
          "m": "2025-04",
          "pos": 100.0,
          "neg": 0.0
        },
        {
          "m": "2025-05",
          "pos": 63.2,
          "neg": 5.3
        },
        {
          "m": "2025-06",
          "pos": 66.7,
          "neg": 8.3
        },
        {
          "m": "2025-07",
          "pos": 90.9,
          "neg": 0.0
        },
        {
          "m": "2025-08",
          "pos": 66.7,
          "neg": 13.3
        },
        {
          "m": "2025-09",
          "pos": 80.0,
          "neg": 0.0
        },
        {
          "m": "2025-10",
          "pos": 62.5,
          "neg": 12.5
        },
        {
          "m": "2025-11",
          "pos": 82.6,
          "neg": 8.7
        },
        {
          "m": "2025-12",
          "pos": 90.9,
          "neg": 9.1
        },
        {
          "m": "2026-01",
          "pos": 76.5,
          "neg": 5.9
        },
        {
          "m": "2026-02",
          "pos": 93.5,
          "neg": 3.2
        },
        {
          "m": "2026-03",
          "pos": 94.4,
          "neg": 0.0
        },
        {
          "m": "2026-04",
          "pos": 100.0,
          "neg": 0.0
        },
        {
          "m": "2026-05",
          "pos": 90.0,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5248-SBC PEREIRA BARRETO",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 85.7,
      "nps_ajust": 85.6,
      "delta": -0.0,
      "sent_medio": 0.62,
      "pct_pos": 72,
      "pct_neg": 10,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Atendimento"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Abastecimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Reduzindo os preços\"",
        "\"Loja limpa, organizada e atendimento excelente do Pablo.\"",
        "\"É a primeira vez que eu vou nesta unidade da Swift e não sei, se por conta do horário, ou mera coincidência, alguns prod\"",
        "\"Açaí estava descongelado ,conferi todos na gôndola estavam descongelado\nFico com receio das carnes se em algum momento f\"",
        "\"Carne moída bolonhesa, não foi aprovada pela família.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 65.1,
          "neg": 11.6
        },
        {
          "m": "2025-02",
          "pos": 88.0,
          "neg": 8.0
        },
        {
          "m": "2025-03",
          "pos": 76.5,
          "neg": 14.7
        },
        {
          "m": "2025-04",
          "pos": 60.6,
          "neg": 18.2
        },
        {
          "m": "2025-05",
          "pos": 65.5,
          "neg": 10.3
        },
        {
          "m": "2025-06",
          "pos": 69.6,
          "neg": 13.0
        },
        {
          "m": "2025-07",
          "pos": 85.0,
          "neg": 10.0
        },
        {
          "m": "2025-08",
          "pos": 75.0,
          "neg": 4.2
        },
        {
          "m": "2025-09",
          "pos": 80.6,
          "neg": 9.7
        },
        {
          "m": "2025-10",
          "pos": 62.7,
          "neg": 17.6
        },
        {
          "m": "2025-11",
          "pos": 69.7,
          "neg": 9.1
        },
        {
          "m": "2025-12",
          "pos": 75.6,
          "neg": 4.4
        },
        {
          "m": "2026-01",
          "pos": 75.0,
          "neg": 3.1
        },
        {
          "m": "2026-02",
          "pos": 56.2,
          "neg": 15.6
        },
        {
          "m": "2026-03",
          "pos": 78.0,
          "neg": 14.0
        },
        {
          "m": "2026-04",
          "pos": 85.4,
          "neg": 4.9
        },
        {
          "m": "2026-05",
          "pos": 58.8,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5249-SANTA TERESINHA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 88.3,
      "nps_ajust": 88.3,
      "delta": -0.1,
      "sent_medio": 0.61,
      "pct_pos": 73,
      "pct_neg": 12,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Loja Fisica",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"seus preços eram melhores e outra observação as etiquetas enganam  vcs deixam o preço em destaque na segunda unidade - v\"",
        "\"Deveriam não mudar tanto os produtos de local. Teve um tempo que iamos direto na geladeira e não era o produto que queri\"",
        "\"Melhorando os preços\"",
        "\"Poderia ter preços melhores nas carnes ou promoções do tipo \"pacote de 1kg de bife de alcatra de R$ 54.90 por R$ 39,90 s\"",
        "\"Acho que o tempo deixou a swift pior, carnes menos saudaveis e cada vez mais escasso os cortes mais naturais possíveis.\n\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 77.3,
          "neg": 9.1
        },
        {
          "m": "2025-02",
          "pos": 46.7,
          "neg": 13.3
        },
        {
          "m": "2025-03",
          "pos": 80.0,
          "neg": 6.7
        },
        {
          "m": "2025-04",
          "pos": 65.5,
          "neg": 13.8
        },
        {
          "m": "2025-05",
          "pos": 64.0,
          "neg": 28.0
        },
        {
          "m": "2025-06",
          "pos": 82.4,
          "neg": 11.8
        },
        {
          "m": "2025-07",
          "pos": 77.3,
          "neg": 0.0
        },
        {
          "m": "2025-08",
          "pos": 64.0,
          "neg": 12.0
        },
        {
          "m": "2025-09",
          "pos": 83.8,
          "neg": 5.4
        },
        {
          "m": "2025-10",
          "pos": 68.6,
          "neg": 8.6
        },
        {
          "m": "2025-11",
          "pos": 67.9,
          "neg": 10.7
        },
        {
          "m": "2025-12",
          "pos": 81.8,
          "neg": 12.1
        },
        {
          "m": "2026-01",
          "pos": 60.0,
          "neg": 20.0
        },
        {
          "m": "2026-02",
          "pos": 72.4,
          "neg": 17.2
        },
        {
          "m": "2026-03",
          "pos": 70.8,
          "neg": 12.5
        },
        {
          "m": "2026-04",
          "pos": 85.7,
          "neg": 14.3
        },
        {
          "m": "2026-05",
          "pos": 80.0,
          "neg": 6.7
        }
      ]
    },
    {
      "nome": "L5250-VILA RICA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 88.0,
      "nps_ajust": 87.8,
      "delta": -0.3,
      "sent_medio": 0.59,
      "pct_pos": 74,
      "pct_neg": 15,
      "top3_problemas": [
        "Abastecimento",
        "Loja Fisica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Produto",
        "Promocoes Fidelidade",
        "Abastecimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Só poeria ter entrega no mesmo dia da compra, o resto esta exelente!\"",
        "\"Os preços subiram muito, e faltava opções.\"",
        "\"Faltou manta suína\"",
        "\"Boa noite prq é tudo maravilhoso\"",
        "\"Chegou tudo em ordem e bem embalado. Parabéns a toda equipe envolvida.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 78.9,
          "neg": 7.9
        },
        {
          "m": "2025-02",
          "pos": 79.2,
          "neg": 12.5
        },
        {
          "m": "2025-03",
          "pos": 86.7,
          "neg": 6.7
        },
        {
          "m": "2025-04",
          "pos": 85.7,
          "neg": 4.8
        },
        {
          "m": "2025-05",
          "pos": 70.0,
          "neg": 26.7
        },
        {
          "m": "2025-06",
          "pos": 71.4,
          "neg": 14.3
        },
        {
          "m": "2025-07",
          "pos": 76.2,
          "neg": 14.3
        },
        {
          "m": "2025-08",
          "pos": 95.0,
          "neg": 0.0
        },
        {
          "m": "2025-09",
          "pos": 76.0,
          "neg": 16.0
        },
        {
          "m": "2025-10",
          "pos": 91.7,
          "neg": 4.2
        },
        {
          "m": "2025-11",
          "pos": 51.0,
          "neg": 19.6
        },
        {
          "m": "2025-12",
          "pos": 67.4,
          "neg": 23.3
        },
        {
          "m": "2026-01",
          "pos": 71.0,
          "neg": 16.1
        },
        {
          "m": "2026-02",
          "pos": 67.6,
          "neg": 26.5
        },
        {
          "m": "2026-03",
          "pos": 72.4,
          "neg": 13.8
        },
        {
          "m": "2026-04",
          "pos": 69.2,
          "neg": 23.1
        },
        {
          "m": "2026-05",
          "pos": 82.4,
          "neg": 11.8
        }
      ]
    },
    {
      "nome": "L5251-JANGADEIROS",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 90.2,
      "nps_ajust": 90.0,
      "delta": -0.2,
      "sent_medio": 0.69,
      "pct_pos": 78,
      "pct_neg": 9,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Produto"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Loja Fisica",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Achei tudo muito bom,gostaria muito que tivesse uma unidade na Vila São José, São Paulo\"",
        "\"Solicitação de produtos com preços realmente com oferta né ?\"",
        "\"Atendimento ótimo loja da Av Jangadeiro Interlagos - colaborador Denis espero não ter errado o nome , muito comunicativo\"",
        "\"Colocar a opção de pagar com vale alimentação no site/app\"",
        "\"App vem dando problema, quase não consegui  fazer a compra, e em uma outra data tentei comprar pelo app e não consegui.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 84.6,
          "neg": 9.2
        },
        {
          "m": "2025-02",
          "pos": 64.7,
          "neg": 5.9
        },
        {
          "m": "2025-03",
          "pos": 82.6,
          "neg": 8.7
        },
        {
          "m": "2025-04",
          "pos": 73.0,
          "neg": 10.8
        },
        {
          "m": "2025-05",
          "pos": 79.1,
          "neg": 9.0
        },
        {
          "m": "2025-06",
          "pos": 86.6,
          "neg": 7.5
        },
        {
          "m": "2025-07",
          "pos": 86.7,
          "neg": 8.9
        },
        {
          "m": "2025-08",
          "pos": 80.0,
          "neg": 7.5
        },
        {
          "m": "2025-09",
          "pos": 75.0,
          "neg": 5.6
        },
        {
          "m": "2025-10",
          "pos": 62.2,
          "neg": 10.8
        },
        {
          "m": "2025-11",
          "pos": 77.1,
          "neg": 8.6
        },
        {
          "m": "2025-12",
          "pos": 75.0,
          "neg": 8.3
        },
        {
          "m": "2026-01",
          "pos": 72.2,
          "neg": 5.6
        },
        {
          "m": "2026-02",
          "pos": 74.1,
          "neg": 14.8
        },
        {
          "m": "2026-03",
          "pos": 67.5,
          "neg": 7.5
        },
        {
          "m": "2026-04",
          "pos": 70.0,
          "neg": 20.0
        },
        {
          "m": "2026-05",
          "pos": 94.7,
          "neg": 5.3
        }
      ]
    },
    {
      "nome": "L5252-14 DE DEZEMBRO",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 87.8,
      "nps_ajust": 87.5,
      "delta": -0.3,
      "sent_medio": 0.57,
      "pct_pos": 70,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Falta de funcionários, eles fazem de tudo para atender bem , mas estão sobrecarregados de serviço, acredito que devam me\"",
        "\"A gerente Priscila da loja da Av 14 de Dezembro de Jundiaí foi muito atenciosa e pro ativa. Muito obrigado e parabéns pa\"",
        "\"Nunca tive  queixa da Swift  mas esse canal de entrega deixou a desejar.\nNão veio a entrega com alegação que não  havia \"",
        "\"Não tinha bolinho de bacalhau\"",
        "\"Poderiam aumentar a gama de sobremesas, pois todas que experimentei estavam maravilhosas.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 69.0,
          "neg": 10.3
        },
        {
          "m": "2025-02",
          "pos": 71.0,
          "neg": 16.1
        },
        {
          "m": "2025-03",
          "pos": 77.3,
          "neg": 9.1
        },
        {
          "m": "2025-04",
          "pos": 64.0,
          "neg": 16.0
        },
        {
          "m": "2025-05",
          "pos": 61.5,
          "neg": 12.8
        },
        {
          "m": "2025-06",
          "pos": 64.7,
          "neg": 14.7
        },
        {
          "m": "2025-07",
          "pos": 71.4,
          "neg": 14.3
        },
        {
          "m": "2025-08",
          "pos": 65.6,
          "neg": 15.6
        },
        {
          "m": "2025-09",
          "pos": 73.3,
          "neg": 13.3
        },
        {
          "m": "2025-10",
          "pos": 78.3,
          "neg": 13.0
        },
        {
          "m": "2025-11",
          "pos": 86.2,
          "neg": 3.4
        },
        {
          "m": "2025-12",
          "pos": 64.8,
          "neg": 16.7
        },
        {
          "m": "2026-01",
          "pos": 78.6,
          "neg": 7.1
        },
        {
          "m": "2026-02",
          "pos": 73.8,
          "neg": 11.9
        },
        {
          "m": "2026-03",
          "pos": 57.9,
          "neg": 13.2
        },
        {
          "m": "2026-04",
          "pos": 69.2,
          "neg": 12.8
        },
        {
          "m": "2026-05",
          "pos": 71.9,
          "neg": 15.6
        }
      ]
    },
    {
      "nome": "L5253-HORTO",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 87.7,
      "nps_ajust": 87.3,
      "delta": -0.4,
      "sent_medio": 0.6,
      "pct_pos": 72,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Abastecimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Penso que poderiam colocar um \"quadro \" informativo, explicando a separação dos produtos, com numeração indicativa, faci\"",
        "\"As carne como cupim, costela de boi e costelinha estão muito ruim. O cupim só tem gordura, a costelinha só tem osso e a \"",
        "\"Voltar a oferecer o hamburguer vegetariano de cogumelos com batata, pois era maravilhoso e não tem nada parecido no merc\"",
        "\"OS PRODUTOS SÃO TODOS CONGELADOS E PODERIA TER ALGUNS ITENS SÓ RESFRIADO PARA O PREPARO MAID RÁPIDO, E OS PREÇOS DOS PRO\"",
        "\"Está tudo ótimo, continuem assim.\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 81.2,
          "neg": 9.4
        },
        {
          "m": "2025-02",
          "pos": 75.9,
          "neg": 3.4
        },
        {
          "m": "2025-03",
          "pos": 82.9,
          "neg": 11.4
        },
        {
          "m": "2025-04",
          "pos": 66.7,
          "neg": 20.0
        },
        {
          "m": "2025-05",
          "pos": 65.9,
          "neg": 11.4
        },
        {
          "m": "2025-06",
          "pos": 79.5,
          "neg": 7.7
        },
        {
          "m": "2025-07",
          "pos": 71.0,
          "neg": 12.9
        },
        {
          "m": "2025-08",
          "pos": 69.6,
          "neg": 8.7
        },
        {
          "m": "2025-09",
          "pos": 73.0,
          "neg": 13.5
        },
        {
          "m": "2025-10",
          "pos": 68.2,
          "neg": 13.6
        },
        {
          "m": "2025-11",
          "pos": 82.6,
          "neg": 8.7
        },
        {
          "m": "2025-12",
          "pos": 75.0,
          "neg": 12.5
        },
        {
          "m": "2026-01",
          "pos": 64.3,
          "neg": 17.9
        },
        {
          "m": "2026-02",
          "pos": 67.7,
          "neg": 9.7
        },
        {
          "m": "2026-03",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2026-04",
          "pos": 72.4,
          "neg": 17.2
        },
        {
          "m": "2026-05",
          "pos": 44.4,
          "neg": 27.8
        }
      ]
    },
    {
      "nome": "L5259-ALL WAYS MALL",
      "flag": "regular",
      "uf": "RJ",
      "nps_trad": 89.0,
      "nps_ajust": 88.9,
      "delta": -0.1,
      "sent_medio": 0.73,
      "pct_pos": 80,
      "pct_neg": 8,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Atendimento"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Tenho dificuldade de comprar picanha fatiada  antes eu encontrava bandejas com com 3/4\nPedaços e hoje não tenho encontra\"",
        "\"Os preços estão acessível principalmente o de aves\"",
        "\"Continuem com o mesmo padrão!\"",
        "\"Atendimento muito bom\"",
        "\"Loja maravilhosa atendimento otimo\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 86.5,
          "neg": 5.4
        },
        {
          "m": "2025-02",
          "pos": 86.0,
          "neg": 4.7
        },
        {
          "m": "2025-03",
          "pos": 90.6,
          "neg": 3.1
        },
        {
          "m": "2025-04",
          "pos": 77.3,
          "neg": 13.6
        },
        {
          "m": "2025-05",
          "pos": 87.0,
          "neg": 4.3
        },
        {
          "m": "2025-06",
          "pos": 76.1,
          "neg": 11.9
        },
        {
          "m": "2025-07",
          "pos": 85.4,
          "neg": 7.3
        },
        {
          "m": "2025-08",
          "pos": 81.4,
          "neg": 11.6
        },
        {
          "m": "2025-09",
          "pos": 85.7,
          "neg": 7.1
        },
        {
          "m": "2025-10",
          "pos": 82.2,
          "neg": 2.2
        },
        {
          "m": "2025-11",
          "pos": 75.9,
          "neg": 6.9
        },
        {
          "m": "2025-12",
          "pos": 84.6,
          "neg": 2.6
        },
        {
          "m": "2026-01",
          "pos": 78.9,
          "neg": 10.5
        },
        {
          "m": "2026-02",
          "pos": 68.0,
          "neg": 12.0
        },
        {
          "m": "2026-03",
          "pos": 75.6,
          "neg": 7.3
        },
        {
          "m": "2026-04",
          "pos": 71.4,
          "neg": 8.6
        },
        {
          "m": "2026-05",
          "pos": 70.4,
          "neg": 11.1
        }
      ]
    },
    {
      "nome": "L5261-UNIMART",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 91.1,
      "nps_ajust": 90.6,
      "delta": -0.6,
      "sent_medio": 0.66,
      "pct_pos": 77,
      "pct_neg": 11,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Esta tudo sensacional, ☺️\"",
        "\"Horrível! Comprei uma picanha Uruguaia congelada, mais dura que uma carne de segunda, paguei R$ 169,33! E se fosse pra s\"",
        "\"Tem produtos que tem no site mas não são encontrados nas lojas físicas.\"",
        "\"Boa tarde.\nSempre encontro oq preciso.\nCada loja que conheço  me surpreende  com a qualidade ,produtos,higiene, atendime\"",
        "\"Uma empresa grande e renomada deveria ter mais segurança em questão das entregas. Evitaria o golpe de extravio de pedido\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 80.5,
          "neg": 12.2
        },
        {
          "m": "2025-02",
          "pos": 80.0,
          "neg": 5.0
        },
        {
          "m": "2025-03",
          "pos": 65.5,
          "neg": 20.7
        },
        {
          "m": "2025-04",
          "pos": 82.9,
          "neg": 7.3
        },
        {
          "m": "2025-05",
          "pos": 70.0,
          "neg": 12.5
        },
        {
          "m": "2025-06",
          "pos": 67.6,
          "neg": 11.8
        },
        {
          "m": "2025-07",
          "pos": 85.2,
          "neg": 11.1
        },
        {
          "m": "2025-08",
          "pos": 91.5,
          "neg": 6.4
        },
        {
          "m": "2025-09",
          "pos": 72.2,
          "neg": 19.4
        },
        {
          "m": "2025-10",
          "pos": 71.1,
          "neg": 0.0
        },
        {
          "m": "2025-11",
          "pos": 75.8,
          "neg": 18.2
        },
        {
          "m": "2025-12",
          "pos": 82.8,
          "neg": 10.3
        },
        {
          "m": "2026-01",
          "pos": 70.6,
          "neg": 20.6
        },
        {
          "m": "2026-02",
          "pos": 84.2,
          "neg": 5.3
        },
        {
          "m": "2026-03",
          "pos": 77.4,
          "neg": 3.2
        },
        {
          "m": "2026-04",
          "pos": 76.7,
          "neg": 16.7
        },
        {
          "m": "2026-05",
          "pos": 69.2,
          "neg": 15.4
        }
      ]
    },
    {
      "nome": "L5262-URBANOVA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 87.5,
      "nps_ajust": 87.3,
      "delta": -0.2,
      "sent_medio": 0.61,
      "pct_pos": 74,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"O preço ainda é um fator determinante , em alguns casos poderia ter um preço melhor , mas com qualidade superior a linha\"",
        "\"enviar mensagem confirmando que o pedido esta pronto pra ser retirado, quando ja estiver separado na loja e faturado.\"",
        "\"OFERECER MAIS PROMOÇÕES\"",
        "\"Há produtos de 2ª linha, cujos preços não são compatíveis com a qualidade.\"",
        "\"Inserir produtos vegetarianos no portifólio\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 75.0,
          "neg": 0.0
        },
        {
          "m": "2025-02",
          "pos": 66.7,
          "neg": 33.3
        },
        {
          "m": "2025-03",
          "pos": 66.7,
          "neg": 11.1
        },
        {
          "m": "2025-04",
          "pos": 72.2,
          "neg": 11.1
        },
        {
          "m": "2025-05",
          "pos": 91.7,
          "neg": 8.3
        },
        {
          "m": "2025-06",
          "pos": 90.0,
          "neg": 10.0
        },
        {
          "m": "2025-07",
          "pos": 75.0,
          "neg": 0.0
        },
        {
          "m": "2025-08",
          "pos": 75.0,
          "neg": 12.5
        },
        {
          "m": "2025-09",
          "pos": 60.0,
          "neg": 0.0
        },
        {
          "m": "2025-10",
          "pos": 85.7,
          "neg": 14.3
        },
        {
          "m": "2025-11",
          "pos": 57.1,
          "neg": 42.9
        },
        {
          "m": "2025-12",
          "pos": 85.7,
          "neg": 0.0
        },
        {
          "m": "2026-01",
          "pos": 71.4,
          "neg": 14.3
        },
        {
          "m": "2026-02",
          "pos": 66.7,
          "neg": 33.3
        },
        {
          "m": "2026-03",
          "pos": 75.0,
          "neg": 0.0
        },
        {
          "m": "2026-04",
          "pos": 54.5,
          "neg": 27.3
        },
        {
          "m": "2026-05",
          "pos": 100.0,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5266-MATEO BEI",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 87.2,
      "nps_ajust": 86.8,
      "delta": -0.4,
      "sent_medio": 0.57,
      "pct_pos": 71,
      "pct_neg": 14,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Excelente qualidade dos produtos, entrega e comunicação da loja com o cliente, obrigada!\"",
        "\"O problema é que a maioria das vezes fica só uma pessoa no caixa.\"",
        "\"Quando se aproximamos  para entrada do estacionamento  da swift oportunista  colocam carros pra vender em frente ao esta\"",
        "\"Facilitando o pagamento parcelado num menor valor.\"",
        "\"Estou achando falta dos bifes empanados!\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 63.6,
          "neg": 27.3
        },
        {
          "m": "2025-02",
          "pos": 84.6,
          "neg": 15.4
        },
        {
          "m": "2025-03",
          "pos": 71.1,
          "neg": 7.9
        },
        {
          "m": "2025-04",
          "pos": 76.5,
          "neg": 17.6
        },
        {
          "m": "2025-05",
          "pos": 71.4,
          "neg": 16.7
        },
        {
          "m": "2025-06",
          "pos": 73.2,
          "neg": 10.7
        },
        {
          "m": "2025-07",
          "pos": 75.0,
          "neg": 9.4
        },
        {
          "m": "2025-08",
          "pos": 91.1,
          "neg": 2.2
        },
        {
          "m": "2025-09",
          "pos": 73.8,
          "neg": 4.8
        },
        {
          "m": "2025-10",
          "pos": 65.6,
          "neg": 18.8
        },
        {
          "m": "2025-11",
          "pos": 70.4,
          "neg": 7.4
        },
        {
          "m": "2025-12",
          "pos": 65.9,
          "neg": 14.6
        },
        {
          "m": "2026-01",
          "pos": 58.1,
          "neg": 12.9
        },
        {
          "m": "2026-02",
          "pos": 63.0,
          "neg": 22.2
        },
        {
          "m": "2026-03",
          "pos": 71.4,
          "neg": 10.7
        },
        {
          "m": "2026-04",
          "pos": 64.7,
          "neg": 26.5
        },
        {
          "m": "2026-05",
          "pos": 47.6,
          "neg": 28.6
        }
      ]
    },
    {
      "nome": "L5267-JAU",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 92.9,
      "nps_ajust": 93.0,
      "delta": 0.1,
      "sent_medio": 0.85,
      "pct_pos": 89,
      "pct_neg": 4,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Atendimento"
      ],
      "top3_elogios": [
        "Produto",
        "Loja Fisica",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Ótimo atendimento na loja de Jaú. Limpeza. \nMelhorar com mais promoções!\"",
        "\"Não consegui comprar pelo aplicativo com cartão. Tive que pagar no Pix.\nTentei com 2 cartões diferentes ambos com limite\"",
        "\"Dessa vez eu não gostei muito da visita, n tinha o item que eu queria, frango sassami, levei outro semelhante mas não go\"",
        "\"Ao meu ver, a loja é incrível e a variedade de produtos sempre me surpreende, é perfeita\"",
        "\"Atendimento perfeito ??? Parabéns\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 77.8,
          "neg": 0.0
        },
        {
          "m": "2025-02",
          "pos": 100.0,
          "neg": 0.0
        },
        {
          "m": "2025-03",
          "pos": 100.0,
          "neg": 0.0
        },
        {
          "m": "2025-04",
          "pos": 73.3,
          "neg": 13.3
        },
        {
          "m": "2025-05",
          "pos": 100.0,
          "neg": 0.0
        },
        {
          "m": "2025-06",
          "pos": 93.3,
          "neg": 6.7
        },
        {
          "m": "2025-07",
          "pos": 72.7,
          "neg": 9.1
        },
        {
          "m": "2025-08",
          "pos": 100.0,
          "neg": 0.0
        },
        {
          "m": "2025-09",
          "pos": 100.0,
          "neg": 0.0
        },
        {
          "m": "2025-10",
          "pos": 82.4,
          "neg": 5.9
        },
        {
          "m": "2025-11",
          "pos": 88.9,
          "neg": 5.6
        },
        {
          "m": "2025-12",
          "pos": 88.9,
          "neg": 5.6
        },
        {
          "m": "2026-01",
          "pos": 78.9,
          "neg": 5.3
        },
        {
          "m": "2026-02",
          "pos": 91.7,
          "neg": 0.0
        },
        {
          "m": "2026-03",
          "pos": 94.7,
          "neg": 0.0
        },
        {
          "m": "2026-04",
          "pos": 88.9,
          "neg": 5.6
        },
        {
          "m": "2026-05",
          "pos": 87.5,
          "neg": 12.5
        }
      ]
    },
    {
      "nome": "L5268-TIBURCIO",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 90.9,
      "nps_ajust": 90.7,
      "delta": -0.2,
      "sent_medio": 0.69,
      "pct_pos": 78,
      "pct_neg": 9,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Atendimento",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Já esta otimo\"",
        "\"Poderia ter bandejas com os produtos já fatiado tipo bife ,picanha na medida certa cortada por um profissional seria bom\"",
        "\"10 produtos de 1ª atendimento 10 organização excelente\"",
        "\"Gostei muito das promoções de frango indico para todo amigos e alunos de academia, porém gostaria de saber os dias certo\"",
        "\"Melhorando os preços\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 83.8,
          "neg": 0.0
        },
        {
          "m": "2025-02",
          "pos": 71.9,
          "neg": 18.8
        },
        {
          "m": "2025-03",
          "pos": 67.6,
          "neg": 16.2
        },
        {
          "m": "2025-04",
          "pos": 80.0,
          "neg": 4.0
        },
        {
          "m": "2025-05",
          "pos": 85.4,
          "neg": 2.4
        },
        {
          "m": "2025-06",
          "pos": 79.5,
          "neg": 9.1
        },
        {
          "m": "2025-07",
          "pos": 86.7,
          "neg": 3.3
        },
        {
          "m": "2025-08",
          "pos": 82.9,
          "neg": 9.8
        },
        {
          "m": "2025-09",
          "pos": 69.0,
          "neg": 13.8
        },
        {
          "m": "2025-10",
          "pos": 88.6,
          "neg": 2.9
        },
        {
          "m": "2025-11",
          "pos": 80.0,
          "neg": 10.0
        },
        {
          "m": "2025-12",
          "pos": 70.2,
          "neg": 6.4
        },
        {
          "m": "2026-01",
          "pos": 60.5,
          "neg": 18.6
        },
        {
          "m": "2026-02",
          "pos": 82.9,
          "neg": 7.3
        },
        {
          "m": "2026-03",
          "pos": 73.5,
          "neg": 11.8
        },
        {
          "m": "2026-04",
          "pos": 76.9,
          "neg": 7.7
        },
        {
          "m": "2026-05",
          "pos": 82.8,
          "neg": 10.3
        }
      ]
    },
    {
      "nome": "L5272-ILHABELA",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 89.3,
      "nps_ajust": 89.1,
      "delta": -0.2,
      "sent_medio": 0.72,
      "pct_pos": 80,
      "pct_neg": 7,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Atendimento",
        "Abastecimento",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Oferecendo mais variedades de peixes e frutos do mar\"",
        "\"Na minha opinião tudo ótimo\"",
        "\"Não deixando faltar os produtos que estamos acostumados a comprar!!!Volta e meia falta algum!!!Nesse momento é o lagarto\"",
        "\"Anúncios,e propagandas com os produtos promocionais as pessoas nem sabe que temos loja no município. No contesto está tu\"",
        "\"Pondo a venda uma linha de salsichas tipo alemãs e também alheiras portuguesas..\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 82.6,
          "neg": 4.3
        },
        {
          "m": "2025-02",
          "pos": 84.6,
          "neg": 7.7
        },
        {
          "m": "2025-03",
          "pos": 83.3,
          "neg": 8.3
        },
        {
          "m": "2025-04",
          "pos": 88.9,
          "neg": 0.0
        },
        {
          "m": "2025-05",
          "pos": 81.8,
          "neg": 4.5
        },
        {
          "m": "2025-06",
          "pos": 73.7,
          "neg": 5.3
        },
        {
          "m": "2025-07",
          "pos": 90.9,
          "neg": 9.1
        },
        {
          "m": "2025-08",
          "pos": 76.2,
          "neg": 9.5
        },
        {
          "m": "2025-09",
          "pos": 94.4,
          "neg": 0.0
        },
        {
          "m": "2025-10",
          "pos": 68.4,
          "neg": 5.3
        },
        {
          "m": "2025-11",
          "pos": 84.2,
          "neg": 5.3
        },
        {
          "m": "2025-12",
          "pos": 72.4,
          "neg": 10.3
        },
        {
          "m": "2026-01",
          "pos": 80.0,
          "neg": 8.0
        },
        {
          "m": "2026-02",
          "pos": 84.6,
          "neg": 7.7
        },
        {
          "m": "2026-03",
          "pos": 88.2,
          "neg": 5.9
        },
        {
          "m": "2026-04",
          "pos": 58.3,
          "neg": 8.3
        },
        {
          "m": "2026-05",
          "pos": 50.0,
          "neg": 50.0
        }
      ]
    },
    {
      "nome": "L5273-MORRO GRANDE",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 86.7,
      "nps_ajust": 86.4,
      "delta": -0.2,
      "sent_medio": 0.54,
      "pct_pos": 67,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Abastecimento",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Considero os valores alto devido a qualidade que oferecem mas colocar algumas promoções  possibilita experimentar novos \"",
        "\"Produtos de qualidade\"",
        "\"Eu efetuei a compra no dia 30/04 as 14hs. O prazo era de 5horas, porém a entrega só foi feita no dia seguinte, no feriad\"",
        "\"Com mais ofertas, as ofertas que me levou a loja e o atendimento  foi maravilhoso.\"",
        "\"Não precisa melhorar. Já está ótimo!\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 75.0,
          "neg": 6.2
        },
        {
          "m": "2025-02",
          "pos": 50.0,
          "neg": 50.0
        },
        {
          "m": "2025-03",
          "pos": 70.0,
          "neg": 10.0
        },
        {
          "m": "2025-04",
          "pos": 66.7,
          "neg": 13.3
        },
        {
          "m": "2025-05",
          "pos": 61.9,
          "neg": 23.8
        },
        {
          "m": "2025-06",
          "pos": 75.0,
          "neg": 6.2
        },
        {
          "m": "2025-07",
          "pos": 75.0,
          "neg": 8.3
        },
        {
          "m": "2025-08",
          "pos": 58.8,
          "neg": 5.9
        },
        {
          "m": "2025-09",
          "pos": 66.7,
          "neg": 16.7
        },
        {
          "m": "2025-10",
          "pos": 63.2,
          "neg": 10.5
        },
        {
          "m": "2025-11",
          "pos": 58.6,
          "neg": 24.1
        },
        {
          "m": "2025-12",
          "pos": 75.0,
          "neg": 0.0
        },
        {
          "m": "2026-01",
          "pos": 73.3,
          "neg": 13.3
        },
        {
          "m": "2026-02",
          "pos": 76.2,
          "neg": 9.5
        },
        {
          "m": "2026-03",
          "pos": 60.0,
          "neg": 15.0
        },
        {
          "m": "2026-04",
          "pos": 63.6,
          "neg": 18.2
        },
        {
          "m": "2026-05",
          "pos": 72.2,
          "neg": 5.6
        }
      ]
    },
    {
      "nome": "L5277-VILA CURUCA (NORDESTINA)",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 88.8,
      "nps_ajust": 88.7,
      "delta": -0.2,
      "sent_medio": 0.68,
      "pct_pos": 78,
      "pct_neg": 10,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Produto",
        "Entrega Logistica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Podem melhorar,mantendo todos os produtos \nInclusive os peixes\"",
        "\"Revisar os estoques, pra não deixar o cliente sem o produto. A maioria das vezes, quando vou na loja, não encontro os fi\"",
        "\"Tudo para um churrasco em família eu encontrei na loja swift\"",
        "\"Estacionar é muito complicado !\"",
        "\"Já recomendei pra várias pessoas inclusive minha filha que só compra aqui porém eu gostaria que is preços fossem um pouc\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 82.1,
          "neg": 10.7
        },
        {
          "m": "2025-02",
          "pos": 91.3,
          "neg": 0.0
        },
        {
          "m": "2025-03",
          "pos": 78.6,
          "neg": 7.1
        },
        {
          "m": "2025-04",
          "pos": 71.4,
          "neg": 19.0
        },
        {
          "m": "2025-05",
          "pos": 80.0,
          "neg": 20.0
        },
        {
          "m": "2025-06",
          "pos": 77.1,
          "neg": 5.7
        },
        {
          "m": "2025-07",
          "pos": 85.7,
          "neg": 3.6
        },
        {
          "m": "2025-08",
          "pos": 76.3,
          "neg": 13.2
        },
        {
          "m": "2025-09",
          "pos": 61.8,
          "neg": 11.8
        },
        {
          "m": "2025-10",
          "pos": 78.6,
          "neg": 7.1
        },
        {
          "m": "2025-11",
          "pos": 86.7,
          "neg": 13.3
        },
        {
          "m": "2025-12",
          "pos": 75.8,
          "neg": 0.0
        },
        {
          "m": "2026-01",
          "pos": 68.2,
          "neg": 27.3
        },
        {
          "m": "2026-02",
          "pos": 75.0,
          "neg": 20.0
        },
        {
          "m": "2026-03",
          "pos": 90.5,
          "neg": 4.8
        },
        {
          "m": "2026-04",
          "pos": 70.8,
          "neg": 8.3
        },
        {
          "m": "2026-05",
          "pos": 81.8,
          "neg": 9.1
        }
      ]
    },
    {
      "nome": "L5278-ITAPECERICA DA SERRA",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 91.7,
      "nps_ajust": 91.3,
      "delta": -0.4,
      "sent_medio": 0.79,
      "pct_pos": 85,
      "pct_neg": 7,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Bom atendimento Daniel\"",
        "\"Atendentes super atenciosos da última vez fui atendido pela Geovana. Encontrei tudo o que procurava!\"",
        "\"Limitando a compra de produtos em promoção, ontem fui até a loja para comprar um produto em promoção que recebi por e-ma\"",
        "\"Não sei como melhorar mais, só se baixar os preços!\n\"",
        "\"Enviar as promoções via watts\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 85.5,
          "neg": 9.1
        },
        {
          "m": "2025-02",
          "pos": 81.6,
          "neg": 6.1
        },
        {
          "m": "2025-03",
          "pos": 94.1,
          "neg": 2.9
        },
        {
          "m": "2025-04",
          "pos": 81.8,
          "neg": 11.4
        },
        {
          "m": "2025-05",
          "pos": 89.7,
          "neg": 8.6
        },
        {
          "m": "2025-06",
          "pos": 82.4,
          "neg": 7.8
        },
        {
          "m": "2025-07",
          "pos": 90.0,
          "neg": 5.0
        },
        {
          "m": "2025-08",
          "pos": 78.8,
          "neg": 6.1
        },
        {
          "m": "2025-09",
          "pos": 76.9,
          "neg": 5.1
        },
        {
          "m": "2025-10",
          "pos": 80.0,
          "neg": 8.0
        },
        {
          "m": "2025-11",
          "pos": 78.4,
          "neg": 10.8
        },
        {
          "m": "2025-12",
          "pos": 81.5,
          "neg": 5.6
        },
        {
          "m": "2026-01",
          "pos": 89.2,
          "neg": 6.0
        },
        {
          "m": "2026-02",
          "pos": 89.3,
          "neg": 7.1
        },
        {
          "m": "2026-03",
          "pos": 90.0,
          "neg": 6.7
        },
        {
          "m": "2026-04",
          "pos": 82.3,
          "neg": 4.8
        },
        {
          "m": "2026-05",
          "pos": 91.1,
          "neg": 4.4
        }
      ]
    },
    {
      "nome": "L5279-BOX CAIEIRAS",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 90.2,
      "nps_ajust": 89.9,
      "delta": -0.3,
      "sent_medio": 0.65,
      "pct_pos": 77,
      "pct_neg": 12,
      "top3_problemas": [
        "Abastecimento",
        "Entrega Logistica",
        "Loja Fisica"
      ],
      "top3_elogios": [
        "Atendimento",
        "Abastecimento",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Está bom ,mas poderia melhorar um pouco os preços,\"",
        "\"Não encontrei carpaccio bovino\"",
        "\"esta faltando alguns itens\"",
        "\"Atendimento sempre nota 10, parabéns.\n\nSwift Nova Caieiras\"",
        "\"Parabens equipe caieiras!!!\n\n\n\n\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 83.3,
          "neg": 8.3
        },
        {
          "m": "2025-02",
          "pos": 85.7,
          "neg": 7.1
        },
        {
          "m": "2025-03",
          "pos": 93.8,
          "neg": 0.0
        },
        {
          "m": "2025-04",
          "pos": 62.5,
          "neg": 12.5
        },
        {
          "m": "2025-05",
          "pos": 87.5,
          "neg": 0.0
        },
        {
          "m": "2025-06",
          "pos": 73.7,
          "neg": 15.8
        },
        {
          "m": "2025-07",
          "pos": 86.7,
          "neg": 0.0
        },
        {
          "m": "2025-08",
          "pos": 73.3,
          "neg": 13.3
        },
        {
          "m": "2025-09",
          "pos": 72.2,
          "neg": 22.2
        },
        {
          "m": "2025-10",
          "pos": 46.7,
          "neg": 20.0
        },
        {
          "m": "2025-11",
          "pos": 85.0,
          "neg": 15.0
        },
        {
          "m": "2025-12",
          "pos": 80.0,
          "neg": 13.3
        },
        {
          "m": "2026-01",
          "pos": 57.9,
          "neg": 31.6
        },
        {
          "m": "2026-02",
          "pos": 83.3,
          "neg": 0.0
        },
        {
          "m": "2026-03",
          "pos": 63.6,
          "neg": 9.1
        },
        {
          "m": "2026-04",
          "pos": 85.7,
          "neg": 9.5
        },
        {
          "m": "2026-05",
          "pos": 71.4,
          "neg": 14.3
        }
      ]
    },
    {
      "nome": "L5281-OLIVEIRA FREIRE",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 89.4,
      "nps_ajust": 89.7,
      "delta": 0.3,
      "sent_medio": 0.76,
      "pct_pos": 82,
      "pct_neg": 6,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Atendimento"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Loja Fisica",
        "Produto"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Quem sabe, diminuir um poucos os preços,  achei meio salgado,  pelo menos pra mim....\"",
        "\"Está ótimo dessa maneira, continuem assim !\"",
        "\"Vcs me enviaram um QRcode p facilitar na retirada, ao retirar a atendente não sabia usar a ferramenta p agilizar q liber\"",
        "\"Pão de batata\"",
        "\"De um modo geral, gosto dos produtos da Swift, só um detalhe alguns pedaços vem com muita gordura, deveria de tirar um p\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 79.3,
          "neg": 13.8
        },
        {
          "m": "2025-02",
          "pos": 81.2,
          "neg": 6.2
        },
        {
          "m": "2025-03",
          "pos": 94.4,
          "neg": 0.0
        },
        {
          "m": "2025-04",
          "pos": 77.3,
          "neg": 4.5
        },
        {
          "m": "2025-05",
          "pos": 65.2,
          "neg": 13.0
        },
        {
          "m": "2025-06",
          "pos": 76.7,
          "neg": 10.0
        },
        {
          "m": "2025-07",
          "pos": 95.0,
          "neg": 0.0
        },
        {
          "m": "2025-08",
          "pos": 75.0,
          "neg": 8.3
        },
        {
          "m": "2025-09",
          "pos": 95.0,
          "neg": 0.0
        },
        {
          "m": "2025-10",
          "pos": 75.0,
          "neg": 16.7
        },
        {
          "m": "2025-11",
          "pos": 66.7,
          "neg": 8.3
        },
        {
          "m": "2025-12",
          "pos": 84.4,
          "neg": 3.1
        },
        {
          "m": "2026-01",
          "pos": 81.0,
          "neg": 9.5
        },
        {
          "m": "2026-02",
          "pos": 81.2,
          "neg": 0.0
        },
        {
          "m": "2026-03",
          "pos": 91.7,
          "neg": 0.0
        },
        {
          "m": "2026-04",
          "pos": 88.2,
          "neg": 0.0
        },
        {
          "m": "2026-05",
          "pos": 90.9,
          "neg": 9.1
        }
      ]
    },
    {
      "nome": "L5282-PARQUE OLIMPICO",
      "flag": "regular",
      "uf": "RJ",
      "nps_trad": 88.2,
      "nps_ajust": 87.9,
      "delta": -0.3,
      "sent_medio": 0.59,
      "pct_pos": 71,
      "pct_neg": 12,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Abastecimento",
        "Loja Fisica"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"o pedido veio incompleto, precisava pro final de semana e não tive como receber, pois o atendimento não funciona final d\"",
        "\"Mantendo o churrasco todos os sábados! Estava uma delícia.\"",
        "\"Os produtos Combo tem baixa qualidade para os padrões Swift, e comparando os seus preços com marcas como Friboi Maturada\"",
        "\"Preços mais atraentes nas sobremesas\"",
        "\"Vocês são perfeitos! Acho que poderiam criar algum tipo de comunidade pra gerar valor e pertencimento de quem consome a \""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 67.6,
          "neg": 19.1
        },
        {
          "m": "2025-02",
          "pos": 56.4,
          "neg": 20.5
        },
        {
          "m": "2025-03",
          "pos": 82.9,
          "neg": 7.3
        },
        {
          "m": "2025-04",
          "pos": 61.4,
          "neg": 26.3
        },
        {
          "m": "2025-05",
          "pos": 74.1,
          "neg": 7.4
        },
        {
          "m": "2025-06",
          "pos": 79.5,
          "neg": 3.8
        },
        {
          "m": "2025-07",
          "pos": 79.5,
          "neg": 11.4
        },
        {
          "m": "2025-08",
          "pos": 75.7,
          "neg": 12.9
        },
        {
          "m": "2025-09",
          "pos": 71.0,
          "neg": 8.7
        },
        {
          "m": "2025-10",
          "pos": 70.0,
          "neg": 1.7
        },
        {
          "m": "2025-11",
          "pos": 74.1,
          "neg": 5.6
        },
        {
          "m": "2025-12",
          "pos": 81.7,
          "neg": 6.7
        },
        {
          "m": "2026-01",
          "pos": 75.0,
          "neg": 10.0
        },
        {
          "m": "2026-02",
          "pos": 65.6,
          "neg": 9.4
        },
        {
          "m": "2026-03",
          "pos": 54.3,
          "neg": 21.7
        },
        {
          "m": "2026-04",
          "pos": 57.6,
          "neg": 24.2
        },
        {
          "m": "2026-05",
          "pos": 68.8,
          "neg": 18.8
        }
      ]
    },
    {
      "nome": "L5283-ALDEIA DA SERRA",
      "flag": "tocadora",
      "uf": "SP",
      "nps_trad": 86.7,
      "nps_ajust": 86.1,
      "delta": -0.6,
      "sent_medio": 0.53,
      "pct_pos": 68,
      "pct_neg": 15,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Loja Fisica"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Atendentes sempre muito simpáticos \nMelhor idéia ter aberto aqui em Aldeia\"",
        "\"A carne moída ultimamente tem decepcionado. Tinha comprado a bolonhesa e estava horrível a carne. Com cheiro de velha, r\"",
        "\"Continuar assim mesmo\"",
        "\"Ótimos produtos , excelente atendimento.\"",
        "\"melhorar o atendimento\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 69.2,
          "neg": 11.5
        },
        {
          "m": "2025-02",
          "pos": 59.1,
          "neg": 27.3
        },
        {
          "m": "2025-03",
          "pos": 73.7,
          "neg": 15.8
        },
        {
          "m": "2025-04",
          "pos": 81.0,
          "neg": 4.8
        },
        {
          "m": "2025-05",
          "pos": 68.4,
          "neg": 10.5
        },
        {
          "m": "2025-06",
          "pos": 100.0,
          "neg": 0.0
        },
        {
          "m": "2025-07",
          "pos": 82.4,
          "neg": 11.8
        },
        {
          "m": "2025-08",
          "pos": 84.6,
          "neg": 7.7
        },
        {
          "m": "2025-09",
          "pos": 46.7,
          "neg": 33.3
        },
        {
          "m": "2025-10",
          "pos": 55.6,
          "neg": 11.1
        },
        {
          "m": "2025-11",
          "pos": 53.8,
          "neg": 23.1
        },
        {
          "m": "2025-12",
          "pos": 62.5,
          "neg": 25.0
        },
        {
          "m": "2026-01",
          "pos": 61.5,
          "neg": 23.1
        },
        {
          "m": "2026-02",
          "pos": 66.7,
          "neg": 11.1
        },
        {
          "m": "2026-03",
          "pos": 60.0,
          "neg": 20.0
        },
        {
          "m": "2026-04",
          "pos": 37.5,
          "neg": 12.5
        },
        {
          "m": "2026-05",
          "pos": 77.8,
          "neg": 0.0
        }
      ]
    },
    {
      "nome": "L5284-25 DE AGOSTO",
      "flag": "regular",
      "uf": "RJ",
      "nps_trad": 92.5,
      "nps_ajust": 92.0,
      "delta": -0.5,
      "sent_medio": 0.74,
      "pct_pos": 82,
      "pct_neg": 7,
      "top3_problemas": [
        "Abastecimento",
        "Promocoes Fidelidade",
        "Entrega Logistica"
      ],
      "top3_elogios": [
        "Promocoes Fidelidade",
        "Loja Fisica",
        "Atendimento"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Como não falar bem da Swift Caxias, os melhores funcionários e produtos.\"",
        "\"Precisa melhorar um pouco os preços! E oferecer carne retirada! Algumas carnes que vendem congeladas perdem todo o sabor\"",
        "\"Desconto ou pontuação para Desconto.\"",
        "\"A gerente dessa loja é um amor. Sempre me ajuda.\"",
        "\"Precisa de produtos vegetariano\""
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 86.0,
          "neg": 7.0
        },
        {
          "m": "2025-02",
          "pos": 82.1,
          "neg": 7.1
        },
        {
          "m": "2025-03",
          "pos": 87.0,
          "neg": 6.5
        },
        {
          "m": "2025-04",
          "pos": 80.6,
          "neg": 11.1
        },
        {
          "m": "2025-05",
          "pos": 84.1,
          "neg": 4.5
        },
        {
          "m": "2025-06",
          "pos": 85.2,
          "neg": 6.6
        },
        {
          "m": "2025-07",
          "pos": 88.1,
          "neg": 2.4
        },
        {
          "m": "2025-08",
          "pos": 82.8,
          "neg": 9.4
        },
        {
          "m": "2025-09",
          "pos": 80.4,
          "neg": 7.1
        },
        {
          "m": "2025-10",
          "pos": 86.7,
          "neg": 2.2
        },
        {
          "m": "2025-11",
          "pos": 85.3,
          "neg": 2.9
        },
        {
          "m": "2025-12",
          "pos": 69.0,
          "neg": 16.7
        },
        {
          "m": "2026-01",
          "pos": 80.0,
          "neg": 8.0
        },
        {
          "m": "2026-02",
          "pos": 71.4,
          "neg": 14.3
        },
        {
          "m": "2026-03",
          "pos": 86.5,
          "neg": 2.7
        },
        {
          "m": "2026-04",
          "pos": 69.0,
          "neg": 4.8
        },
        {
          "m": "2026-05",
          "pos": 81.0,
          "neg": 9.5
        }
      ]
    },
    {
      "nome": "L5290-SAO LOURENCO",
      "flag": "regular",
      "uf": "SP",
      "nps_trad": 90.8,
      "nps_ajust": 89.6,
      "delta": -1.2,
      "sent_medio": 0.68,
      "pct_pos": 81,
      "pct_neg": 13,
      "top3_problemas": [
        "Abastecimento",
        "Atendimento",
        "Produto"
      ],
      "top3_elogios": [
        "Loja Fisica",
        "Atendimento",
        "Promocoes Fidelidade"
      ],
      "alerta": "ESTAVEL",
      "comentarios": [
        "\"Organizar melhor a fila, que estava muito grande e entrava pela loja\"",
        "\"tudo maravilhoso muito bem atendido, fui no horario noturno, loja impecável, os funcionarios dão para bons treinadores, \"",
        "\"Mais promoção para atrair mais clientes\"",
        "\"Colocando mais funcionários para trabalhar, pois a loja cresceu e tem poucos funcionários, perdi mais tempo nas compras!\"",
        "\"Manter sempre os mesmo funcionários\""
      ],
      "temporal": [
        {
          "m": "2025-12",
          "pos": 78.8,
          "neg": 3.0
        },
        {
          "m": "2026-01",
          "pos": 81.1,
          "neg": 18.9
        },
        {
          "m": "2026-02",
          "pos": 85.4,
          "neg": 9.8
        },
        {
          "m": "2026-03",
          "pos": 80.6,
          "neg": 13.9
        },
        {
          "m": "2026-04",
          "pos": 76.6,
          "neg": 17.0
        },
        {
          "m": "2026-05",
          "pos": 87.5,
          "neg": 12.5
        }
      ]
    }
  ],
  "ufs": [
    "DF",
    "GO",
    "RJ",
    "SP"
  ],
  "breakdowns": {
    "regular": {
      "kpis": {
        "nps_tradicional": 88.3,
        "nps_ajustado": 88.0,
        "pct_positivo": 74.3,
        "pct_neutro": 14.0,
        "pct_negativo": 11.7,
        "lojas_alerta": 0,
        "total_comentarios": 89638
      },
      "temporal": {
        "meses": [
          "2025-01",
          "2025-02",
          "2025-03",
          "2025-04",
          "2025-05",
          "2025-06",
          "2025-07",
          "2025-08",
          "2025-09",
          "2025-10",
          "2025-11",
          "2025-12",
          "2026-01",
          "2026-02",
          "2026-03",
          "2026-04",
          "2026-05"
        ],
        "positivo": [
          73.9,
          72.2,
          72.3,
          73.3,
          74.6,
          76.7,
          76.2,
          77.0,
          74.4,
          73.8,
          74.8,
          76.9,
          71.8,
          73.5,
          73.5,
          73.4,
          73.4
        ],
        "neutro": [
          12.9,
          15.1,
          14.7,
          14.1,
          14.0,
          13.3,
          13.7,
          12.5,
          14.7,
          14.6,
          14.3,
          12.7,
          15.4,
          14.7,
          14.1,
          14.1,
          14.7
        ],
        "negativo": [
          13.2,
          12.8,
          13.0,
          12.6,
          11.4,
          10.1,
          10.1,
          10.5,
          11.0,
          11.6,
          11.0,
          10.4,
          12.8,
          11.7,
          12.4,
          12.5,
          11.9
        ]
      },
      "problemas": {
        "categorias": [
          "Abastecimento",
          "Entrega Logistica",
          "Atendimento",
          "Promocoes Fidelidade",
          "Loja Fisica"
        ],
        "contagens": [
          4341,
          1482,
          1458,
          1282,
          725
        ],
        "exemplos": {
          "Abastecimento": [
            "\"Nunca encontro todos os produtos que preciso.\"",
            "\"Eu agendei a entrega do meu pedido para chegar entre 9h e 11h, porém ele só foi entregue às 14h, e isso apenas porque precisei ligar no SAC para recla\"",
            "\"Minha primeira compra na empresa foi motivada principalmente pelo pão italiano. Acabei acrescentando outros itens ao pedido e, depois, solicitei a ret\""
          ],
          "Entrega Logistica": [
            "\"Todos os produtos de promoção não tinha.\nDesta forma não deveria mais estar na propaganda\"",
            "\"O item PIX DEVE SER RESSALTADO E NÃO SIMENTE CARTÃO DE CREDITO\"",
            "\"Eu comprava o “pão com requeijão”, parecido com pão de queijo, mas a qualidade ficou tão ruim que parei de comprar. Era jogar dinheiro fora. Vinha pou\""
          ],
          "Atendimento": [
            "\"Atendentes do caixa bem mal humorada\"",
            "\"Era dia de inventário na loja, prateleiras vazias e desorganização.\"",
            "\"Única coisa que eu acho desvantagem e por que pede CPF mais nao tem um programa de fidelidade e desconto na compra feita\""
          ],
          "Promocoes Fidelidade": [
            "\"Preços muitos caros\"",
            "\"Sempre comprava picanha com vocês mas elas são duras. Mesmo com capa de gordura, por que????\"",
            "\"Os preços estão bons para uma linha premium, porém não deixam de ser caro.\""
          ],
          "Loja Fisica": [
            "\"os preços subiram muito!!! e não encontro mais as tiras de filé mignon para comprar.\n\"",
            "\"Medalhão de filé mignon está horrível escuro\"",
            "\"A loja na tinha bebida gelada (refrigerante)  e a funcionária falou que improdutivos Coca Cola estava em falta.\""
          ]
        }
      },
      "elogios": {
        "categorias": [
          "Promocoes Fidelidade",
          "Atendimento",
          "Loja Fisica",
          "Produto",
          "Abastecimento"
        ],
        "contagens": [
          11555,
          10574,
          10469,
          8404,
          7022
        ],
        "exemplos": {
          "Promocoes Fidelidade": [
            "\"Produtos caros na classificaçaõ geral.\nCarne moída perdeu um pouco da qualidade no sabor.\n\"",
            "\"Oferecendo pequenos brindes aos clientes\"",
            "\"O preço um pouco caro.\""
          ],
          "Atendimento": [
            "\"O atendimento da unidade da Maria Amalia sempre foi impecável. Me auxiliam com as compras, armazenamento no meu carro, eles são muito atenciosos. Muit\"",
            "\"Adorei o atendimento e a loja, super acolhedora \n\"",
            "\"Olá boa noite\nSempre que vou na Swift de indaiatuba...nunca tem atendente de pronto...inclusive ontem tive que ir chamar ali dentro de uma porta uma p\""
          ],
          "Loja Fisica": [
            "\"Percebi o aumento em alguns produtos atendimento muito bom\"",
            "\"Melhorar o sistema pra lançar as promoções e efetuar o pagamento. Fui bem atendido pelos funcionários Bryan e Luzia.\"",
            "\"Voltar a isca de filé mignon com bacon\""
          ],
          "Produto": [
            "\"O elevador poderia ser melhor\"",
            "\"É tudo nota 10, acho que um ponto importante seria não cobrar frete.\"",
            "\"O que seria legal um programa de pontos para trocar com desconto ou produto\""
          ],
          "Abastecimento": [
            "\"Alguns itens ficam muito tempo fora se estoque/indisponível.\"",
            "\"Não  tinha na loja o Carpaccio bovino.\"",
            "\"ter pacotes menores de bife\""
          ]
        }
      },
      "compilado": {
        "fortalezas": [
          {
            "cat": "Promocoes Fidelidade",
            "pct": 24,
            "exemplo": "\"Com mais opções de preços em espetinhos, por exemplo!.\""
          },
          {
            "cat": "Atendimento",
            "pct": 22,
            "exemplo": "\"Atendendo sempre com. Respeito e educação\""
          },
          {
            "cat": "Loja Fisica",
            "pct": 22,
            "exemplo": "\"Não encontrei espetinho de coração que estava procurando também...\""
          }
        ],
        "atencao": [
          {
            "cat": "Abastecimento",
            "pct": 47,
            "exemplo": "\"Muitos produtos em falta e cada dia mais caro.\""
          },
          {
            "cat": "Entrega Logistica",
            "pct": 16,
            "exemplo": "\"Carne moída e pessima\""
          },
          {
            "cat": "Atendimento",
            "pct": 16,
            "exemplo": "\"O pessoal dessa loja não são atenciosos com os clientes,  não tem interesse em te ajudar com algumas dúvidas\""
          }
        ]
      },
      "evolucao": {
        "meses": [
          "2025-01",
          "2025-02",
          "2025-03",
          "2025-04",
          "2025-05",
          "2025-06",
          "2025-07",
          "2025-08",
          "2025-09",
          "2025-10",
          "2025-11",
          "2025-12",
          "2026-01",
          "2026-02",
          "2026-03",
          "2026-04",
          "2026-05"
        ],
        "abastecimento": [
          295,
          195,
          257,
          226,
          245,
          243,
          207,
          222,
          293,
          292,
          237,
          289,
          316,
          287,
          305,
          266,
          166
        ],
        "entrega logistica": [
          121,
          86,
          93,
          83,
          103,
          96,
          63,
          72,
          72,
          81,
          80,
          81,
          114,
          88,
          110,
          89,
          50
        ],
        "atendimento": [
          87,
          68,
          73,
          87,
          86,
          89,
          68,
          73,
          103,
          88,
          71,
          104,
          90,
          108,
          102,
          97,
          64
        ],
        "promocoes fidelidade": [
          103,
          76,
          78,
          85,
          88,
          81,
          69,
          68,
          75,
          79,
          70,
          74,
          83,
          66,
          79,
          62,
          46
        ],
        "loja fisica": [
          56,
          37,
          32,
          43,
          41,
          47,
          35,
          46,
          47,
          46,
          30,
          49,
          53,
          39,
          52,
          48,
          24
        ]
      },
      "wordcloud": [
        {
          "word": "produtos",
          "size": 5
        },
        {
          "word": "atendimento",
          "size": 4
        },
        {
          "word": "qualidade",
          "size": 2
        },
        {
          "word": "estava",
          "size": 2
        },
        {
          "word": "carne",
          "size": 2
        },
        {
          "word": "compra",
          "size": 1
        },
        {
          "word": "melhorar",
          "size": 1
        },
        {
          "word": "produto",
          "size": 1
        },
        {
          "word": "comprei",
          "size": 1
        },
        {
          "word": "comprar",
          "size": 1
        },
        {
          "word": "tinha",
          "size": 1
        },
        {
          "word": "parabéns",
          "size": 1
        },
        {
          "word": "entrega",
          "size": 1
        },
        {
          "word": "excelente",
          "size": 1
        }
      ]
    },
    "tocadora": {
      "kpis": {
        "nps_tradicional": 84.8,
        "nps_ajustado": 84.4,
        "pct_positivo": 69.4,
        "pct_neutro": 15.8,
        "pct_negativo": 14.8,
        "lojas_alerta": 0,
        "total_comentarios": 26967
      },
      "temporal": {
        "meses": [
          "2025-01",
          "2025-02",
          "2025-03",
          "2025-04",
          "2025-05",
          "2025-06",
          "2025-07",
          "2025-08",
          "2025-09",
          "2025-10",
          "2025-11",
          "2025-12",
          "2026-01",
          "2026-02",
          "2026-03",
          "2026-04",
          "2026-05"
        ],
        "positivo": [
          64.9,
          66.7,
          63.6,
          67.4,
          70.1,
          72.6,
          72.1,
          69.7,
          69.2,
          69.0,
          68.7,
          74.6,
          67.6,
          70.5,
          72.2,
          69.0,
          68.5
        ],
        "neutro": [
          15.6,
          16.3,
          18.3,
          16.7,
          16.4,
          15.2,
          15.3,
          16.5,
          17.2,
          18.4,
          15.4,
          11.2,
          16.3,
          14.9,
          14.0,
          16.0,
          16.6
        ],
        "negativo": [
          19.5,
          16.9,
          18.0,
          15.9,
          13.5,
          12.2,
          12.6,
          13.8,
          13.6,
          12.7,
          15.8,
          14.2,
          16.0,
          14.6,
          13.7,
          15.0,
          14.9
        ]
      },
      "problemas": {
        "categorias": [
          "Abastecimento",
          "Atendimento",
          "Entrega Logistica",
          "Promocoes Fidelidade",
          "Loja Fisica"
        ],
        "contagens": [
          1708,
          601,
          488,
          380,
          253
        ],
        "exemplos": {
          "Abastecimento": [
            "\"4 horas de atraso numa entrega agendada, pessimo atendimento dessa lioja Chácara Santo Antônio, mentiras contadas e desrespeito. Tratam clientes como \"",
            "\"Valores ... poucos ou quase nenhum produto acessível de baixo Valores\"",
            "\"A forma que foi entregue minha encomenda que não foi pouco foi um absurdo. Colocado dentro do porta malas, com outros objetos do entregador , sem refr\""
          ],
          "Atendimento": [
            "\"Disponibilizando maior quantidade  nos produtos que mais saem, difícil de encontrar nas lojas\"",
            "\"Que tenha alguém para auxiliar, esclarecer dúvidas sobre o cortes das carnes.\"",
            "\"a atenção dos atendentes, ficam no celular ou conversando entre eles e não dão atenção\""
          ],
          "Entrega Logistica": [
            "\"Porque uma carne in natura precisa de 15% de água (ou mais), colágeno e aromas? Não me digam que é por conta da suculência e essas desculpas.\"",
            "\"Melhorar preços, peito de frango desfiado estava com gosto  forte, parecia outra parte do frango e não o peito .\"",
            "\"Preciso mudar meu e-mail no cadastro da Swift, e não estou conseguindo. Já solicitei e não tive exito\""
          ],
          "Promocoes Fidelidade": [
            "\"Os preços subiram muito!\"",
            "\"Voltar ao peso e aos recheios originais do inicio\nHoje as coxinhas, bolinhos e burritos são só massa e recheio sem o essencial que era feito a princip\"",
            "\"Qualidades boa, falta melhorar os preços\""
          ],
          "Loja Fisica": [
            "\"A qualidade do filé mignon caiu muito, uma carne escura e com uma embalagem péssima.\"",
            "\"A loja q eu frequento, da Vila Mariana, esta um horror, já foi boa, agora tá péssima! O atendimento tá ruim, a loja está sempre bagunçada, com produto\"",
            "\"Vão melhorar muito se voltarem a fornecer a linha Incrível, vegetarianos e veganos nem entram mais nas lojas.\""
          ]
        }
      },
      "elogios": {
        "categorias": [
          "Atendimento",
          "Loja Fisica",
          "Promocoes Fidelidade",
          "Abastecimento",
          "Produto"
        ],
        "contagens": [
          3292,
          3148,
          2988,
          2137,
          2052
        ],
        "exemplos": {
          "Atendimento": [
            "\"Melhorar a disponibilidade de camisas na loja para funcionários\"",
            "\"Muito agradável realizar as compras na loja.\"",
            "\"Melhor sinalização dentro da loja\""
          ],
          "Loja Fisica": [
            "\"Ótimo atendimento feito pela Ana\"",
            "\"Nunca comi um filé mignon melhor!!!\"",
            "\"Como está , está ótimo !\""
          ],
          "Promocoes Fidelidade": [
            "\"Continue sempre assim\"",
            "\"Olá, gostaria de agradecer a atendente Vanessa, da loja swift Jd Bonfiglioli, pelo excelente atendimento e carinho.\"",
            "\"Está muito ótimo assim\""
          ],
          "Abastecimento": [
            "\"Empresa altamente confiável e competente, Parabéns!!!\"",
            "\"Não encontrei coxa e sobrecoxa temperado\"",
            "\"Faltou alguns produtos (Panelinhas) que gostaria de comprar. Mas, comprei os que tinham disponiveis no momento.\""
          ],
          "Produto": [
            "\"Continue sempre melhorando ?\"",
            "\"Estou satisfeita, não precisa mudar nada.\"",
            "\"enviar cupons de desconto para clientes cadastrados\""
          ]
        }
      },
      "compilado": {
        "fortalezas": [
          {
            "cat": "Atendimento",
            "pct": 24,
            "exemplo": "\"Destaque para a atenção e cordialidade dos atendentes da loja\""
          },
          {
            "cat": "Loja Fisica",
            "pct": 23,
            "exemplo": "\"Melhor atendimento! Loja 10 melhor funcionária Joelma! Meus parabéns.\""
          },
          {
            "cat": "Promocoes Fidelidade",
            "pct": 22,
            "exemplo": "\"Mais promoções para o clientes que compram com recorrência.\""
          }
        ],
        "atencao": [
          {
            "cat": "Abastecimento",
            "pct": 50,
            "exemplo": "\"Pessoal mal humorado!\nfaltando alguns produtos\nNao volto ,mais nesta loja de Perdizes\""
          },
          {
            "cat": "Atendimento",
            "pct": 18,
            "exemplo": "\"Não entregaram todos os produtos\""
          },
          {
            "cat": "Entrega Logistica",
            "pct": 14,
            "exemplo": "\"Olá comprei uma carne moída dia a dia nem cachorro come de tanta gordura e cebo horrível\""
          }
        ]
      },
      "evolucao": {
        "meses": [
          "2025-01",
          "2025-02",
          "2025-03",
          "2025-04",
          "2025-05",
          "2025-06",
          "2025-07",
          "2025-08",
          "2025-09",
          "2025-10",
          "2025-11",
          "2025-12",
          "2026-01",
          "2026-02",
          "2026-03",
          "2026-04",
          "2026-05"
        ],
        "abastecimento": [
          98,
          75,
          95,
          95,
          91,
          71,
          82,
          91,
          123,
          146,
          101,
          114,
          145,
          96,
          112,
          97,
          76
        ],
        "atendimento": [
          29,
          25,
          33,
          35,
          34,
          25,
          28,
          39,
          33,
          43,
          34,
          56,
          35,
          31,
          44,
          51,
          26
        ],
        "entrega logistica": [
          32,
          27,
          29,
          23,
          31,
          33,
          16,
          28,
          19,
          35,
          28,
          38,
          31,
          21,
          47,
          38,
          12
        ],
        "promocoes fidelidade": [
          33,
          16,
          22,
          24,
          26,
          26,
          19,
          20,
          27,
          22,
          25,
          14,
          24,
          22,
          18,
          22,
          20
        ],
        "loja fisica": [
          24,
          19,
          11,
          13,
          11,
          16,
          12,
          10,
          21,
          11,
          17,
          14,
          17,
          14,
          10,
          22,
          11
        ]
      },
      "wordcloud": [
        {
          "word": "produtos",
          "size": 5
        },
        {
          "word": "atendimento",
          "size": 4
        },
        {
          "word": "estava",
          "size": 2
        },
        {
          "word": "qualidade",
          "size": 2
        },
        {
          "word": "carne",
          "size": 1
        },
        {
          "word": "compra",
          "size": 1
        },
        {
          "word": "produto",
          "size": 1
        },
        {
          "word": "entrega",
          "size": 1
        },
        {
          "word": "pedido",
          "size": 1
        },
        {
          "word": "tinha",
          "size": 1
        },
        {
          "word": "comprei",
          "size": 1
        },
        {
          "word": "comprar",
          "size": 1
        },
        {
          "word": "melhorar",
          "size": 1
        },
        {
          "word": "pelo",
          "size": 1
        }
      ]
    }
  },
  "avancadas": {
    "deterioracao": {
      "lojas": [
        "L5290-SAO LOURENCO",
        "L5055-CAMBUCI (1284)",
        "L5272-ILHABELA",
        "L5092-VILA AUGUSTA (1374)"
      ],
      "meses": [
        "2025-10",
        "2025-11",
        "2025-12",
        "2026-01",
        "2026-02",
        "2026-03",
        "2026-04",
        "2026-05"
      ],
      "valores": {
        "L5290-SAO LOURENCO": [
          0,
          0,
          3.0,
          18.9,
          9.8,
          13.9,
          17.0,
          12.5
        ],
        "L5055-CAMBUCI (1284)": [
          12.3,
          12.5,
          30.3,
          20.5,
          24.1,
          23.5,
          33.3,
          26.9
        ],
        "L5272-ILHABELA": [
          5.3,
          5.3,
          10.3,
          8.0,
          7.7,
          5.9,
          8.3,
          50.0
        ],
        "L5092-VILA AUGUSTA (1374)": [
          4.3,
          12.5,
          24.1,
          26.9,
          7.7,
          28.6,
          32.0,
          29.4
        ]
      }
    },
    "melhora": {
      "lojas": [
        "L5101-CIDADE SAO FRANCISCO (1432)",
        "L5082-VILA ANDRADE (1346)",
        "L5033-SANTANA (0868)"
      ],
      "meses": [
        "2025-10",
        "2025-11",
        "2025-12",
        "2026-01",
        "2026-02",
        "2026-03",
        "2026-04",
        "2026-05"
      ],
      "valores": {
        "L5101-CIDADE SAO FRANCISCO (1432)": [
          16.7,
          19.0,
          5.0,
          12.5,
          7.1,
          7.1,
          2.9,
          7.4
        ],
        "L5082-VILA ANDRADE (1346)": [
          0.0,
          24.2,
          14.8,
          10.7,
          10.3,
          12.0,
          11.1,
          11.1
        ],
        "L5033-SANTANA (0868)": [
          11.1,
          8.3,
          9.7,
          25.0,
          29.4,
          6.2,
          6.7,
          14.3
        ]
      }
    },
    "coocorrencia": [
      {
        "par": "Abastecimento + Entrega Logistica",
        "freq": 156,
        "desc": "Problemas de supply chain: estoque vazio e entregas com defeito andam juntos."
      },
      {
        "par": "Abastecimento + Atendimento",
        "freq": 147,
        "desc": "Lojas com problemas tanto de estoque quanto de serviço — indicativo de gestão operacional deficiente."
      },
      {
        "par": "Abastecimento + Promocoes Fidelidade",
        "freq": 113,
        "desc": "Clientes reclamam de falta de produtos E de promoções — expectativa frustrada de variedade e preço."
      },
      {
        "par": "Atendimento + Entrega Logistica",
        "freq": 84,
        "desc": "Falha em resolver problemas de entrega gera dupla insatisfação: produto ruim + atendimento ruim."
      },
      {
        "par": "Entrega Logistica + Promocoes Fidelidade",
        "freq": 59,
        "desc": "Produtos entregues com problemas e promoções que não compensam — percepção de custo-benefício ruim."
      }
    ]
  },
  "nps_temas": {
    "global": [
      {
        "tema": "Abastecimento",
        "nps": 46.1,
        "pct_pos": 60.2,
        "pct_neut": 25.7,
        "pct_neg": 14.1,
        "n": 15208
      },
      {
        "tema": "Entrega Logistica",
        "nps": 65.4,
        "pct_pos": 76.9,
        "pct_neut": 11.6,
        "pct_neg": 11.5,
        "n": 8538
      },
      {
        "tema": "Atendimento",
        "nps": 82.0,
        "pct_pos": 87.1,
        "pct_neut": 7.8,
        "pct_neg": 5.1,
        "n": 15925
      },
      {
        "tema": "Promocoes Fidelidade",
        "nps": 87.8,
        "pct_pos": 89.7,
        "pct_neut": 8.4,
        "pct_neg": 1.9,
        "n": 16205
      },
      {
        "tema": "Produto",
        "nps": 89.8,
        "pct_pos": 92.4,
        "pct_neut": 5.0,
        "pct_neg": 2.6,
        "n": 11316
      },
      {
        "tema": "Loja Fisica",
        "nps": 90.6,
        "pct_pos": 93.3,
        "pct_neut": 4.0,
        "pct_neg": 2.7,
        "n": 14595
      }
    ],
    "por_gestao": {
      "regular": [
        {
          "tema": "Abastecimento",
          "nps": 48.6
        },
        {
          "tema": "Atendimento",
          "nps": 83.1
        },
        {
          "tema": "Entrega Logistica",
          "nps": 67.1
        },
        {
          "tema": "Loja Fisica",
          "nps": 91.0
        },
        {
          "tema": "Produto",
          "nps": 90.1
        },
        {
          "tema": "Promocoes Fidelidade",
          "nps": 88.3
        }
      ],
      "tocadora": [
        {
          "tema": "Abastecimento",
          "nps": 38.8
        },
        {
          "tema": "Atendimento",
          "nps": 78.6
        },
        {
          "tema": "Entrega Logistica",
          "nps": 59.5
        },
        {
          "tema": "Loja Fisica",
          "nps": 89.2
        },
        {
          "tema": "Produto",
          "nps": 88.7
        },
        {
          "tema": "Promocoes Fidelidade",
          "nps": 86.1
        }
      ]
    },
    "por_loja": {
      "Abastecimento": {
        "piores": [
          {
            "loja": "L5220-PLANALTO",
            "nps": 6.9,
            "n": 58
          },
          {
            "loja": "L5014-ROUXINOL (0567)",
            "nps": 12.1,
            "n": 58
          },
          {
            "loja": "L5027-ACLIMACAO (0851)",
            "nps": 14.3,
            "n": 77
          },
          {
            "loja": "L5070-BORGES LAGOA (1323)",
            "nps": 16.0,
            "n": 81
          },
          {
            "loja": "L5186-VILA DAS MERCES",
            "nps": 16.2,
            "n": 68
          }
        ],
        "melhores": [
          {
            "loja": "L5216-UBATUBA",
            "nps": 84.2,
            "n": 57
          },
          {
            "loja": "L5111-VINHEDO",
            "nps": 84.0,
            "n": 25
          },
          {
            "loja": "L5246-MALL MULTI GERMINARE",
            "nps": 83.8,
            "n": 37
          },
          {
            "loja": "L5267-JAU",
            "nps": 82.1,
            "n": 28
          },
          {
            "loja": "L5003-LINS (0340)",
            "nps": 79.5,
            "n": 39
          }
        ]
      },
      "Promocoes Fidelidade": {
        "piores": [
          {
            "loja": "L5014-ROUXINOL (0567)",
            "nps": 66.7,
            "n": 42
          },
          {
            "loja": "L5248-SBC PEREIRA BARRETO",
            "nps": 72.1,
            "n": 61
          },
          {
            "loja": "L5145-TAMBORE",
            "nps": 73.1,
            "n": 26
          },
          {
            "loja": "L5095-VILLA LOBOS (1380)",
            "nps": 73.7,
            "n": 38
          },
          {
            "loja": "L5033-SANTANA (0868)",
            "nps": 74.2,
            "n": 31
          }
        ],
        "melhores": [
          {
            "loja": "L5221-BARUERI (BETHAVILLE)",
            "nps": 100.0,
            "n": 48
          },
          {
            "loja": "L5220-PLANALTO",
            "nps": 100.0,
            "n": 49
          },
          {
            "loja": "L5206-CACHOEIRINHA",
            "nps": 100.0,
            "n": 47
          },
          {
            "loja": "L5016-ANDRADINA (0573)",
            "nps": 100.0,
            "n": 49
          },
          {
            "loja": "L5154-RIO CLARO",
            "nps": 98.4,
            "n": 64
          }
        ]
      },
      "Produto": {
        "piores": [
          {
            "loja": "L5052-PINHEIROS (1277)",
            "nps": 68.4,
            "n": 19
          },
          {
            "loja": "L5006-MARAJOARA (0487)",
            "nps": 72.1,
            "n": 43
          },
          {
            "loja": "L5058-JD. BONFIGLIOLI (1291)",
            "nps": 72.9,
            "n": 59
          },
          {
            "loja": "L5178-PERIMETRAL",
            "nps": 74.5,
            "n": 55
          },
          {
            "loja": "L5101-CIDADE SAO FRANCISCO (1432)",
            "nps": 76.2,
            "n": 21
          }
        ],
        "melhores": [
          {
            "loja": "L5283-ALDEIA DA SERRA",
            "nps": 100.0,
            "n": 20
          },
          {
            "loja": "L5243-MONTE CASTELO",
            "nps": 100.0,
            "n": 21
          },
          {
            "loja": "L5156-JARDIM PRUDENCIA",
            "nps": 100.0,
            "n": 35
          },
          {
            "loja": "L5145-TAMBORE",
            "nps": 100.0,
            "n": 12
          },
          {
            "loja": "L5141-ALTO TAQUARAL",
            "nps": 100.0,
            "n": 43
          }
        ]
      },
      "Entrega Logistica": {
        "piores": [
          {
            "loja": "L5082-VILA ANDRADE (1346)",
            "nps": 25.0,
            "n": 28
          },
          {
            "loja": "L5262-URBANOVA",
            "nps": 27.3,
            "n": 11
          },
          {
            "loja": "L5114-106 ASA SUL",
            "nps": 29.4,
            "n": 17
          },
          {
            "loja": "L5005-BROOKLIN (0475)",
            "nps": 30.4,
            "n": 23
          },
          {
            "loja": "L5078-CAMPO BELO 2 (1342)",
            "nps": 33.3,
            "n": 21
          }
        ],
        "melhores": [
          {
            "loja": "L5182-SAO JOSE DO RIO PRETO (DAMHA)",
            "nps": 100.0,
            "n": 14
          },
          {
            "loja": "L5233-MONGAGUA",
            "nps": 92.6,
            "n": 54
          },
          {
            "loja": "L5239-CACAPAVA",
            "nps": 92.3,
            "n": 26
          },
          {
            "loja": "L5267-JAU",
            "nps": 91.7,
            "n": 24
          },
          {
            "loja": "L5160-GUARATINGUETA",
            "nps": 91.3,
            "n": 46
          }
        ]
      },
      "Loja Fisica": {
        "piores": [
          {
            "loja": "L5200-JUVENTUS",
            "nps": 61.1,
            "n": 36
          },
          {
            "loja": "L5059-TUTOIA (1294)",
            "nps": 72.1,
            "n": 61
          },
          {
            "loja": "L5083-BARCELONA (1347)",
            "nps": 73.1,
            "n": 26
          },
          {
            "loja": "L5043-PORTUGAL (1239)",
            "nps": 75.0,
            "n": 36
          },
          {
            "loja": "L5046-VILA CARRAO (1248)",
            "nps": 75.5,
            "n": 49
          }
        ],
        "melhores": [
          {
            "loja": "L5272-ILHABELA",
            "nps": 100.0,
            "n": 22
          },
          {
            "loja": "L5267-JAU",
            "nps": 100.0,
            "n": 37
          },
          {
            "loja": "L5236-JACAREI VILLA BRANCA",
            "nps": 100.0,
            "n": 18
          },
          {
            "loja": "L5179-VILA YARA",
            "nps": 100.0,
            "n": 186
          },
          {
            "loja": "L5154-RIO CLARO",
            "nps": 100.0,
            "n": 31
          }
        ]
      },
      "Atendimento": {
        "piores": [
          {
            "loja": "L5107-MANDAQUI (1521)",
            "nps": 39.1,
            "n": 23
          },
          {
            "loja": "L5252-14 DE DEZEMBRO",
            "nps": 45.6,
            "n": 57
          },
          {
            "loja": "L5245-MAUA 2",
            "nps": 47.1,
            "n": 34
          },
          {
            "loja": "L5046-VILA CARRAO (1248)",
            "nps": 50.9,
            "n": 53
          },
          {
            "loja": "L5037-VILA ROMANA (0880)",
            "nps": 56.6,
            "n": 83
          }
        ],
        "melhores": [
          {
            "loja": "L5262-URBANOVA",
            "nps": 100.0,
            "n": 19
          },
          {
            "loja": "L5236-JACAREI VILLA BRANCA",
            "nps": 100.0,
            "n": 14
          },
          {
            "loja": "L5197-LIMEIRA",
            "nps": 100.0,
            "n": 66
          },
          {
            "loja": "L5246-MALL MULTI GERMINARE",
            "nps": 98.2,
            "n": 57
          },
          {
            "loja": "L5220-PLANALTO",
            "nps": 97.7,
            "n": 44
          }
        ]
      }
    }
  }
};
