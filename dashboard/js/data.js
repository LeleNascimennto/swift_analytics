// ═══ SWIFT ANALYTICS — Dados (gerados de base_qualitativa_corrigida + indicadores_loja_corrigidos) ═══
// 116,605 comentários | 227 lojas | 2025-01 a 2026-05 | sem valores hardcoded

const DATA = {
  "meta": {
    "lojas": 227,
    "regular": 169,
    "tocadora": 58,
    "comentarios": 116605,
    "periodo": "2025-01 a 2026-05",
    "ufs": [
      "DF",
      "GO",
      "RJ",
      "SP"
    ],
    "regioes": [
      "Capital",
      "DF",
      "GO",
      "Interior",
      "Litoral",
      "RJ",
      "RMSP"
    ]
  },
  "resumo": {
    "comentarios": 116605,
    "lojas": 227,
    "nps_tradicional": 66.5,
    "nps_textual": 60.8,
    "nps_hibrido": 64.2,
    "pct_baixa_confianca": 42.3,
    "pct_positivo": 73.2,
    "pct_neutro": 14.4,
    "pct_negativo": 12.4,
    "confianca_media": 0.51,
    "tamanho_por_sentimento": [
      {
        "sentimento": "negativo",
        "count": 14427,
        "media_palavras": 35.0,
        "mediana": 25.0
      },
      {
        "sentimento": "neutro",
        "count": 16844,
        "media_palavras": 26.9,
        "mediana": 21.0
      },
      {
        "sentimento": "positivo",
        "count": 85334,
        "media_palavras": 12.3,
        "mediana": 8.0
      }
    ],
    "diagnosticos": {
      "consistente_positivo": 80874,
      "consistente_neutro": 10294,
      "consistente_negativo": 10040,
      "baixa_confianca_mantem_nota": 7206,
      "promotor_com_ressalva": 2886,
      "neutro_positivo": 2144,
      "promotor_em_risco": 1274,
      "neutro_negativo": 895,
      "detrator_recuperavel": 588,
      "detrator_em_observacao": 404
    },
    "correlacao_transacoes": {
      "nps_tradicional": -0.097,
      "nps_textual": -0.108,
      "nps_hibrido": -0.109
    }
  },
  "lojas": [
    {
      "nome": "L5200-JUVENTUS",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 44.1,
      "nps_textual": 36.0,
      "nps_hibrido": 40.5,
      "delta_hibrido": -3.6,
      "pct_pos": 56.8,
      "pct_neu": 22.5,
      "pct_neg": 20.7,
      "severidade": 37.11,
      "transacoes": 102653,
      "indice_prioridade": 80.4,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 333,
      "avaliacoes_ponderadas": 1383.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 7
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 36
        },
        {
          "cat": "Loja Física",
          "pct": 17
        }
      ],
      "top_elogios": [
        {
          "cat": "Outros",
          "pct": 13
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 34
        },
        {
          "cat": "Entrega & Logística",
          "pct": 22
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 60.9,
          "neg": 17.4
        },
        {
          "m": "2025-02",
          "pos": 60.9,
          "neg": 30.4
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
          "pos": 58.8,
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
          "pos": 61.5,
          "neg": 38.5
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
          "pos": 29.4,
          "neg": 29.4
        },
        {
          "m": "2026-01",
          "pos": 45.8,
          "neg": 20.8
        },
        {
          "m": "2026-02",
          "pos": 60.0,
          "neg": 20.0
        },
        {
          "m": "2026-03",
          "pos": 43.5,
          "neg": 30.4
        },
        {
          "m": "2026-04",
          "pos": 47.1,
          "neg": 5.9
        },
        {
          "m": "2026-05",
          "pos": 72.2,
          "neg": 11.1
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -22.4,
          "n": 49
        },
        "Atendimento": {
          "nps": 53.3,
          "n": 30
        },
        "Entrega & Logística": {
          "nps": 81.6,
          "n": 49
        },
        "Loja Física": {
          "nps": 28.6,
          "n": 49
        },
        "Outros": {
          "nps": 73.3,
          "n": 30
        },
        "Promoções & Fidelidade": {
          "nps": 31.0,
          "n": 126
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 62,
        "Abastecimento": 37,
        "Loja Física": 23,
        "Atendimento": 9,
        "Entrega & Logística": 7,
        "Outros": 6
      },
      "elog_counts": {
        "Promoções & Fidelidade": 64,
        "Entrega & Logística": 42,
        "Loja Física": 26,
        "Outros": 24,
        "Atendimento": 21,
        "Abastecimento": 12
      }
    },
    {
      "nome": "L5174-PERI PERI",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 52.7,
      "nps_textual": 43.7,
      "nps_hibrido": 46.9,
      "delta_hibrido": -5.9,
      "pct_pos": 63.6,
      "pct_neu": 16.5,
      "pct_neg": 19.9,
      "severidade": 34.38,
      "transacoes": 97142,
      "indice_prioridade": 77.3,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 478,
      "avaliacoes_ponderadas": 1700.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 25
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 36
        },
        {
          "cat": "Abastecimento",
          "pct": 34
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 20
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 33
        },
        {
          "cat": "Loja Física",
          "pct": 15
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 79.3,
          "neg": 13.8
        },
        {
          "m": "2025-02",
          "pos": 52.9,
          "neg": 23.5
        },
        {
          "m": "2025-03",
          "pos": 56.0,
          "neg": 36.0
        },
        {
          "m": "2025-04",
          "pos": 72.4,
          "neg": 17.2
        },
        {
          "m": "2025-05",
          "pos": 80.0,
          "neg": 12.0
        },
        {
          "m": "2025-06",
          "pos": 82.1,
          "neg": 7.1
        },
        {
          "m": "2025-07",
          "pos": 55.6,
          "neg": 33.3
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
          "pos": 60.0,
          "neg": 20.0
        },
        {
          "m": "2025-11",
          "pos": 74.2,
          "neg": 19.4
        },
        {
          "m": "2025-12",
          "pos": 75.0,
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
          "pos": 52.1,
          "neg": 18.8
        },
        {
          "m": "2026-04",
          "pos": 76.7,
          "neg": 10.0
        },
        {
          "m": "2026-05",
          "pos": 44.8,
          "neg": 20.7
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -18.2,
          "n": 66
        },
        "Atendimento": {
          "nps": 83.8,
          "n": 68
        },
        "Entrega & Logística": {
          "nps": 91.8,
          "n": 61
        },
        "Loja Física": {
          "nps": 23.6,
          "n": 89
        },
        "Outros": {
          "nps": 84.0,
          "n": 25
        },
        "Promoções & Fidelidade": {
          "nps": 39.1,
          "n": 169
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 69,
        "Abastecimento": 46,
        "Loja Física": 44,
        "Atendimento": 7,
        "Entrega & Logística": 4,
        "Outros": 4
      },
      "elog_counts": {
        "Promoções & Fidelidade": 100,
        "Atendimento": 61,
        "Entrega & Logística": 57,
        "Loja Física": 45,
        "Outros": 21,
        "Abastecimento": 20
      }
    },
    {
      "nome": "L5017-LEOPOLDINA (0576)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 43.7,
      "nps_textual": 42.7,
      "nps_hibrido": 42.4,
      "delta_hibrido": -1.3,
      "pct_pos": 62.2,
      "pct_neu": 18.3,
      "pct_neg": 19.5,
      "severidade": 34.85,
      "transacoes": 85393,
      "indice_prioridade": 77.2,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 389,
      "avaliacoes_ponderadas": 1383.0,
      "top_problemas": [
        {
          "cat": "Outros",
          "pct": 5
        },
        {
          "cat": "Loja Física",
          "pct": 33
        },
        {
          "cat": "Atendimento",
          "pct": 7
        }
      ],
      "top_elogios": [
        {
          "cat": "Outros",
          "pct": 14
        },
        {
          "cat": "Atendimento",
          "pct": 22
        },
        {
          "cat": "Entrega & Logística",
          "pct": 21
        }
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
          "pos": 81.2,
          "neg": 6.2
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 0.0,
          "n": 60
        },
        "Atendimento": {
          "nps": 79.0,
          "n": 62
        },
        "Entrega & Logística": {
          "nps": 90.7,
          "n": 54
        },
        "Loja Física": {
          "nps": 4.5,
          "n": 67
        },
        "Outros": {
          "nps": 65.9,
          "n": 44
        },
        "Promoções & Fidelidade": {
          "nps": 35.3,
          "n": 102
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 45,
        "Abastecimento": 40,
        "Loja Física": 39,
        "Outros": 11,
        "Atendimento": 8,
        "Entrega & Logística": 4
      },
      "elog_counts": {
        "Promoções & Fidelidade": 57,
        "Atendimento": 54,
        "Entrega & Logística": 50,
        "Outros": 33,
        "Loja Física": 28,
        "Abastecimento": 20
      }
    },
    {
      "nome": "L5186-VILA DAS MERCES",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 51.8,
      "nps_textual": 43.8,
      "nps_hibrido": 48.2,
      "delta_hibrido": -3.6,
      "pct_pos": 64.4,
      "pct_neu": 14.9,
      "pct_neg": 20.7,
      "severidade": 34.23,
      "transacoes": 126815,
      "indice_prioridade": 76.7,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 450,
      "avaliacoes_ponderadas": 1907.0,
      "top_problemas": [
        {
          "cat": "Outros",
          "pct": 4
        },
        {
          "cat": "Loja Física",
          "pct": 19
        },
        {
          "cat": "Abastecimento",
          "pct": 37
        }
      ],
      "top_elogios": [
        {
          "cat": "Loja Física",
          "pct": 19
        },
        {
          "cat": "Abastecimento",
          "pct": 12
        },
        {
          "cat": "Outros",
          "pct": 12
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 60.6,
          "neg": 18.2
        },
        {
          "m": "2025-02",
          "pos": 54.5,
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
          "neg": 28.6
        },
        {
          "m": "2025-06",
          "pos": 58.3,
          "neg": 29.2
        },
        {
          "m": "2025-07",
          "pos": 71.4,
          "neg": 28.6
        },
        {
          "m": "2025-08",
          "pos": 73.9,
          "neg": 17.4
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
          "pos": 60.0,
          "neg": 20.0
        },
        {
          "m": "2025-12",
          "pos": 77.4,
          "neg": 6.5
        },
        {
          "m": "2026-01",
          "pos": 55.6,
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
          "neg": 16.7
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 1.2,
          "n": 80
        },
        "Atendimento": {
          "nps": 65.8,
          "n": 38
        },
        "Entrega & Logística": {
          "nps": 93.8,
          "n": 65
        },
        "Loja Física": {
          "nps": 46.2,
          "n": 80
        },
        "Outros": {
          "nps": 71.4,
          "n": 42
        },
        "Promoções & Fidelidade": {
          "nps": 29.7,
          "n": 145
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 71,
        "Abastecimento": 45,
        "Loja Física": 25,
        "Atendimento": 8,
        "Outros": 8,
        "Entrega & Logística": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 74,
        "Entrega & Logística": 62,
        "Loja Física": 55,
        "Abastecimento": 35,
        "Outros": 34,
        "Atendimento": 30
      }
    },
    {
      "nome": "L5070-BORGES LAGOA (1323)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 52.4,
      "nps_textual": 43.8,
      "nps_hibrido": 48.4,
      "delta_hibrido": -4.0,
      "pct_pos": 63.0,
      "pct_neu": 17.8,
      "pct_neg": 19.2,
      "severidade": 34.57,
      "transacoes": 88609,
      "indice_prioridade": 76.3,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 527,
      "avaliacoes_ponderadas": 1742.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 43
        },
        {
          "cat": "Atendimento",
          "pct": 5
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 27
        }
      ],
      "top_elogios": [
        {
          "cat": "Entrega & Logística",
          "pct": 25
        },
        {
          "cat": "Atendimento",
          "pct": 17
        },
        {
          "cat": "Outros",
          "pct": 10
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 57.1,
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
          "pos": 79.2,
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
          "neg": 31.7
        },
        {
          "m": "2025-10",
          "pos": 64.0,
          "neg": 12.0
        },
        {
          "m": "2025-11",
          "pos": 53.8,
          "neg": 23.1
        },
        {
          "m": "2025-12",
          "pos": 54.2,
          "neg": 29.2
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
          "neg": 21.2
        },
        {
          "m": "2026-05",
          "pos": 55.6,
          "neg": 11.1
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 3.6,
          "n": 83
        },
        "Atendimento": {
          "nps": 79.1,
          "n": 67
        },
        "Entrega & Logística": {
          "nps": 98.8,
          "n": 84
        },
        "Loja Física": {
          "nps": -3.2,
          "n": 93
        },
        "Outros": {
          "nps": 82.1,
          "n": 39
        },
        "Promoções & Fidelidade": {
          "nps": 39.1,
          "n": 161
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 71,
        "Abastecimento": 55,
        "Loja Física": 53,
        "Atendimento": 9,
        "Outros": 6,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 90,
        "Entrega & Logística": 83,
        "Atendimento": 58,
        "Loja Física": 40,
        "Outros": 33,
        "Abastecimento": 28
      }
    },
    {
      "nome": "L5007-KLABIN (0496)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 52.5,
      "nps_textual": 44.7,
      "nps_hibrido": 49.4,
      "delta_hibrido": -3.1,
      "pct_pos": 64.3,
      "pct_neu": 16.0,
      "pct_neg": 19.7,
      "severidade": 34.04,
      "transacoes": 64043,
      "indice_prioridade": 75.0,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 488,
      "avaliacoes_ponderadas": 1331.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 9
        },
        {
          "cat": "Loja Física",
          "pct": 23
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 39
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 29
        },
        {
          "cat": "Loja Física",
          "pct": 14
        },
        {
          "cat": "Outros",
          "pct": 10
        }
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
          "neg": 36.7
        },
        {
          "m": "2025-04",
          "pos": 58.3,
          "neg": 8.3
        },
        {
          "m": "2025-05",
          "pos": 34.6,
          "neg": 42.3
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
          "pos": 55.0,
          "neg": 25.0
        },
        {
          "m": "2025-10",
          "pos": 64.0,
          "neg": 24.0
        },
        {
          "m": "2025-11",
          "pos": 57.1,
          "neg": 23.8
        },
        {
          "m": "2025-12",
          "pos": 61.2,
          "neg": 18.4
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 1.6,
          "n": 62
        },
        "Atendimento": {
          "nps": 77.1,
          "n": 105
        },
        "Entrega & Logística": {
          "nps": 89.8,
          "n": 49
        },
        "Loja Física": {
          "nps": 26.8,
          "n": 82
        },
        "Outros": {
          "nps": 83.3,
          "n": 36
        },
        "Promoções & Fidelidade": {
          "nps": 26.0,
          "n": 154
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 77,
        "Loja Física": 38,
        "Abastecimento": 36,
        "Atendimento": 15,
        "Outros": 5,
        "Entrega & Logística": 3
      },
      "elog_counts": {
        "Atendimento": 90,
        "Promoções & Fidelidade": 77,
        "Entrega & Logística": 46,
        "Loja Física": 44,
        "Outros": 31,
        "Abastecimento": 26
      }
    },
    {
      "nome": "L5149-ALTO DA MOOCA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 56.4,
      "nps_textual": 45.9,
      "nps_hibrido": 50.0,
      "delta_hibrido": -6.4,
      "pct_pos": 64.2,
      "pct_neu": 17.4,
      "pct_neg": 18.3,
      "severidade": 34.23,
      "transacoes": 173701,
      "indice_prioridade": 74.1,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 660,
      "avaliacoes_ponderadas": 2815.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 7
        },
        {
          "cat": "Outros",
          "pct": 2
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 37
        }
      ],
      "top_elogios": [
        {
          "cat": "Loja Física",
          "pct": 18
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 33
        },
        {
          "cat": "Entrega & Logística",
          "pct": 23
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 76.3,
          "neg": 13.2
        },
        {
          "m": "2025-02",
          "pos": 66.7,
          "neg": 20.0
        },
        {
          "m": "2025-03",
          "pos": 62.9,
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
          "pos": 78.0,
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
          "neg": 15.4
        },
        {
          "m": "2025-09",
          "pos": 71.9,
          "neg": 12.5
        },
        {
          "m": "2025-10",
          "pos": 68.9,
          "neg": 8.9
        },
        {
          "m": "2025-11",
          "pos": 73.7,
          "neg": 15.8
        },
        {
          "m": "2025-12",
          "pos": 67.2,
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
          "neg": 28.6
        },
        {
          "m": "2026-05",
          "pos": 38.1,
          "neg": 28.6
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -11.3,
          "n": 97
        },
        "Atendimento": {
          "nps": 65.0,
          "n": 60
        },
        "Entrega & Logística": {
          "nps": 96.0,
          "n": 100
        },
        "Loja Física": {
          "nps": 48.2,
          "n": 110
        },
        "Outros": {
          "nps": 72.7,
          "n": 44
        },
        "Promoções & Fidelidade": {
          "nps": 37.8,
          "n": 249
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 110,
        "Abastecimento": 66,
        "Loja Física": 35,
        "Atendimento": 13,
        "Outros": 9,
        "Entrega & Logística": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 139,
        "Entrega & Logística": 97,
        "Loja Física": 75,
        "Atendimento": 47,
        "Outros": 35,
        "Abastecimento": 31
      }
    },
    {
      "nome": "L5152-ALTO DA BOA VISTA",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 57.0,
      "nps_textual": 49.1,
      "nps_hibrido": 54.4,
      "delta_hibrido": -2.5,
      "pct_pos": 66.1,
      "pct_neu": 16.8,
      "pct_neg": 17.0,
      "severidade": 33.57,
      "transacoes": 138715,
      "indice_prioridade": 73.7,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 1027,
      "avaliacoes_ponderadas": 3369.0,
      "top_problemas": [
        {
          "cat": "Outros",
          "pct": 3
        },
        {
          "cat": "Loja Física",
          "pct": 28
        },
        {
          "cat": "Atendimento",
          "pct": 8
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 10
        },
        {
          "cat": "Outros",
          "pct": 11
        },
        {
          "cat": "Loja Física",
          "pct": 14
        }
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
          "pos": 73.3,
          "neg": 13.3
        },
        {
          "m": "2025-06",
          "pos": 66.0,
          "neg": 9.4
        },
        {
          "m": "2025-07",
          "pos": 60.7,
          "neg": 17.9
        },
        {
          "m": "2025-08",
          "pos": 58.7,
          "neg": 15.9
        },
        {
          "m": "2025-09",
          "pos": 57.1,
          "neg": 14.3
        },
        {
          "m": "2025-10",
          "pos": 69.0,
          "neg": 17.9
        },
        {
          "m": "2025-11",
          "pos": 73.4,
          "neg": 17.7
        },
        {
          "m": "2025-12",
          "pos": 65.7,
          "neg": 21.0
        },
        {
          "m": "2026-01",
          "pos": 65.9,
          "neg": 18.2
        },
        {
          "m": "2026-02",
          "pos": 54.1,
          "neg": 26.2
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
          "pos": 83.3,
          "neg": 10.4
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 8.7,
          "n": 161
        },
        "Atendimento": {
          "nps": 73.2,
          "n": 138
        },
        "Entrega & Logística": {
          "nps": 88.5,
          "n": 139
        },
        "Loja Física": {
          "nps": 26.3,
          "n": 167
        },
        "Outros": {
          "nps": 72.8,
          "n": 92
        },
        "Promoções & Fidelidade": {
          "nps": 47.0,
          "n": 330
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 125,
        "Abastecimento": 95,
        "Loja Física": 74,
        "Atendimento": 23,
        "Outros": 19,
        "Entrega & Logística": 12
      },
      "elog_counts": {
        "Promoções & Fidelidade": 205,
        "Entrega & Logística": 127,
        "Atendimento": 115,
        "Loja Física": 93,
        "Outros": 73,
        "Abastecimento": 66
      }
    },
    {
      "nome": "L5074-VOLUNTARIOS DA PATRIA (1335)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 52.4,
      "nps_textual": 44.5,
      "nps_hibrido": 48.9,
      "delta_hibrido": -3.6,
      "pct_pos": 63.6,
      "pct_neu": 17.3,
      "pct_neg": 19.1,
      "severidade": 33.79,
      "transacoes": 86299,
      "indice_prioridade": 73.4,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 393,
      "avaliacoes_ponderadas": 1423.0,
      "top_problemas": [
        {
          "cat": "Outros",
          "pct": 5
        },
        {
          "cat": "Loja Física",
          "pct": 32
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 32
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 12
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 33
        },
        {
          "cat": "Loja Física",
          "pct": 14
        }
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
          "neg": 21.2
        },
        {
          "m": "2025-09",
          "pos": 58.1,
          "neg": 16.1
        },
        {
          "m": "2025-10",
          "pos": 75.0,
          "neg": 12.5
        },
        {
          "m": "2025-11",
          "pos": 63.0,
          "neg": 11.1
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 14.1,
          "n": 64
        },
        "Atendimento": {
          "nps": 73.8,
          "n": 42
        },
        "Entrega & Logística": {
          "nps": 94.0,
          "n": 50
        },
        "Loja Física": {
          "nps": 17.4,
          "n": 69
        },
        "Outros": {
          "nps": 53.1,
          "n": 32
        },
        "Promoções & Fidelidade": {
          "nps": 43.4,
          "n": 136
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 53,
        "Abastecimento": 34,
        "Loja Física": 33,
        "Outros": 11,
        "Atendimento": 9,
        "Entrega & Logística": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 83,
        "Entrega & Logística": 47,
        "Loja Física": 36,
        "Atendimento": 33,
        "Abastecimento": 30,
        "Outros": 21
      }
    },
    {
      "nome": "L5082-VILA ANDRADE (1346)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 52.3,
      "nps_textual": 45.5,
      "nps_hibrido": 48.8,
      "delta_hibrido": -3.5,
      "pct_pos": 64.0,
      "pct_neu": 17.5,
      "pct_neg": 18.5,
      "severidade": 33.92,
      "transacoes": 123177,
      "indice_prioridade": 73.2,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 486,
      "avaliacoes_ponderadas": 1486.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 32
        },
        {
          "cat": "Abastecimento",
          "pct": 39
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 23
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 27
        },
        {
          "cat": "Entrega & Logística",
          "pct": 23
        },
        {
          "cat": "Outros",
          "pct": 10
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 46.2,
          "neg": 30.8
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
          "pos": 52.0,
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
          "pos": 62.5,
          "neg": 12.5
        },
        {
          "m": "2025-08",
          "pos": 62.5,
          "neg": 25.0
        },
        {
          "m": "2025-09",
          "pos": 60.9,
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
          "neg": 13.8
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -18.2,
          "n": 77
        },
        "Atendimento": {
          "nps": 92.2,
          "n": 90
        },
        "Entrega & Logística": {
          "nps": 90.7,
          "n": 75
        },
        "Loja Física": {
          "nps": 4.1,
          "n": 73
        },
        "Outros": {
          "nps": 78.4,
          "n": 37
        },
        "Promoções & Fidelidade": {
          "nps": 38.8,
          "n": 134
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 61,
        "Abastecimento": 56,
        "Loja Física": 41,
        "Outros": 6,
        "Atendimento": 6,
        "Entrega & Logística": 5
      },
      "elog_counts": {
        "Atendimento": 84,
        "Promoções & Fidelidade": 73,
        "Entrega & Logística": 70,
        "Loja Física": 32,
        "Outros": 31,
        "Abastecimento": 21
      }
    },
    {
      "nome": "L5033-SANTANA (0868)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 51.4,
      "nps_textual": 44.6,
      "nps_hibrido": 47.5,
      "delta_hibrido": -4.0,
      "pct_pos": 64.9,
      "pct_neu": 14.9,
      "pct_neg": 20.3,
      "severidade": 33.22,
      "transacoes": 72344,
      "indice_prioridade": 72.8,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 276,
      "avaliacoes_ponderadas": 1030.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 23
        },
        {
          "cat": "Atendimento",
          "pct": 7
        },
        {
          "cat": "Abastecimento",
          "pct": 41
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 34
        },
        {
          "cat": "Outros",
          "pct": 11
        },
        {
          "cat": "Abastecimento",
          "pct": 9
        }
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
          "neg": 14.3
        },
        {
          "m": "2025-10",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2025-11",
          "pos": 83.3,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -14.0,
          "n": 50
        },
        "Atendimento": {
          "nps": 66.7,
          "n": 30
        },
        "Entrega & Logística": {
          "nps": 100.0,
          "n": 35
        },
        "Loja Física": {
          "nps": 25.6,
          "n": 43
        },
        "Outros": {
          "nps": 68.0,
          "n": 25
        },
        "Promoções & Fidelidade": {
          "nps": 50.5,
          "n": 93
        }
      },
      "prob_counts": {
        "Abastecimento": 34,
        "Promoções & Fidelidade": 32,
        "Loja Física": 19,
        "Atendimento": 6,
        "Outros": 6
      },
      "elog_counts": {
        "Promoções & Fidelidade": 61,
        "Entrega & Logística": 35,
        "Loja Física": 24,
        "Atendimento": 24,
        "Outros": 19,
        "Abastecimento": 16
      }
    },
    {
      "nome": "L5206-CACHOEIRINHA",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 55.4,
      "nps_textual": 46.8,
      "nps_hibrido": 53.8,
      "delta_hibrido": -1.6,
      "pct_pos": 66.0,
      "pct_neu": 14.9,
      "pct_neg": 19.1,
      "severidade": 33.13,
      "transacoes": 81414,
      "indice_prioridade": 71.6,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 444,
      "avaliacoes_ponderadas": 1802.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 33
        },
        {
          "cat": "Atendimento",
          "pct": 6
        },
        {
          "cat": "Abastecimento",
          "pct": 32
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 12
        },
        {
          "cat": "Loja Física",
          "pct": 17
        },
        {
          "cat": "Outros",
          "pct": 11
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 51.4,
          "neg": 37.8
        },
        {
          "m": "2025-02",
          "pos": 73.3,
          "neg": 13.3
        },
        {
          "m": "2025-03",
          "pos": 52.9,
          "neg": 23.5
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
          "pos": 70.4,
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
          "pos": 71.4,
          "neg": 17.9
        },
        {
          "m": "2025-11",
          "pos": 66.7,
          "neg": 19.0
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
          "pos": 61.5,
          "neg": 26.9
        },
        {
          "m": "2026-03",
          "pos": 83.3,
          "neg": 16.7
        },
        {
          "m": "2026-04",
          "pos": 79.2,
          "neg": 20.8
        },
        {
          "m": "2026-05",
          "pos": 100.0,
          "neg": 0.0
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 11.5,
          "n": 78
        },
        "Atendimento": {
          "nps": 68.2,
          "n": 44
        },
        "Entrega & Logística": {
          "nps": 98.4,
          "n": 64
        },
        "Loja Física": {
          "nps": 25.6,
          "n": 90
        },
        "Outros": {
          "nps": 89.2,
          "n": 37
        },
        "Promoções & Fidelidade": {
          "nps": 38.2,
          "n": 131
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 56,
        "Abastecimento": 42,
        "Loja Física": 39,
        "Atendimento": 9,
        "Outros": 4,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 75,
        "Entrega & Logística": 63,
        "Loja Física": 51,
        "Abastecimento": 36,
        "Atendimento": 35,
        "Outros": 33
      }
    },
    {
      "nome": "L5081-VILA OLIMPIA (1345)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 48.3,
      "nps_textual": 43.2,
      "nps_hibrido": 45.7,
      "delta_hibrido": -2.6,
      "pct_pos": 62.0,
      "pct_neu": 19.2,
      "pct_neg": 18.8,
      "severidade": 33.74,
      "transacoes": 75893,
      "indice_prioridade": 71.2,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 234,
      "avaliacoes_ponderadas": 897.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 39
        },
        {
          "cat": "Abastecimento",
          "pct": 32
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 25
        }
      ],
      "top_elogios": [
        {
          "cat": "Entrega & Logística",
          "pct": 28
        },
        {
          "cat": "Abastecimento",
          "pct": 10
        },
        {
          "cat": "Atendimento",
          "pct": 18
        }
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 2.8,
          "n": 36
        },
        "Atendimento": {
          "nps": 83.3,
          "n": 30
        },
        "Entrega & Logística": {
          "nps": 97.6,
          "n": 42
        },
        "Loja Física": {
          "nps": -4.5,
          "n": 44
        },
        "Outros": {
          "nps": 71.4,
          "n": 14
        },
        "Promoções & Fidelidade": {
          "nps": 38.2,
          "n": 68
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 31,
        "Loja Física": 29,
        "Abastecimento": 21,
        "Atendimento": 4,
        "Outros": 3,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Entrega & Logística": 41,
        "Promoções & Fidelidade": 37,
        "Atendimento": 26,
        "Loja Física": 15,
        "Abastecimento": 15,
        "Outros": 11
      }
    },
    {
      "nome": "L5014-ROUXINOL (0567)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 48.5,
      "nps_textual": 43.6,
      "nps_hibrido": 45.8,
      "delta_hibrido": -2.7,
      "pct_pos": 61.6,
      "pct_neu": 20.4,
      "pct_neg": 18.0,
      "severidade": 34.19,
      "transacoes": 107426,
      "indice_prioridade": 70.8,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 367,
      "avaliacoes_ponderadas": 1353.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 9
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 42
        },
        {
          "cat": "Abastecimento",
          "pct": 30
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 22
        },
        {
          "cat": "Outros",
          "pct": 12
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 33
        }
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
          "neg": 38.1
        },
        {
          "m": "2025-06",
          "pos": 77.3,
          "neg": 13.6
        },
        {
          "m": "2025-07",
          "pos": 61.3,
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
          "pos": 72.2,
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
          "pos": 59.1,
          "neg": 9.1
        },
        {
          "m": "2026-05",
          "pos": 44.4,
          "neg": 22.2
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -14.9,
          "n": 47
        },
        "Atendimento": {
          "nps": 72.1,
          "n": 61
        },
        "Entrega & Logística": {
          "nps": 87.0,
          "n": 46
        },
        "Loja Física": {
          "nps": 28.6,
          "n": 35
        },
        "Outros": {
          "nps": 79.4,
          "n": 34
        },
        "Promoções & Fidelidade": {
          "nps": 31.9,
          "n": 144
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 70,
        "Abastecimento": 34,
        "Loja Física": 16,
        "Atendimento": 11,
        "Outros": 6,
        "Entrega & Logística": 4
      },
      "elog_counts": {
        "Promoções & Fidelidade": 74,
        "Atendimento": 50,
        "Entrega & Logística": 42,
        "Outros": 28,
        "Loja Física": 19,
        "Abastecimento": 13
      }
    },
    {
      "nome": "L5078-CAMPO BELO 2 (1342)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 52.1,
      "nps_textual": 47.2,
      "nps_hibrido": 53.1,
      "delta_hibrido": 1.0,
      "pct_pos": 65.8,
      "pct_neu": 15.6,
      "pct_neg": 18.6,
      "severidade": 32.96,
      "transacoes": 74139,
      "indice_prioridade": 70.6,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 409,
      "avaliacoes_ponderadas": 1368.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 9
        },
        {
          "cat": "Loja Física",
          "pct": 29
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 29
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 25
        },
        {
          "cat": "Outros",
          "pct": 10
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 28
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 59.1,
          "neg": 22.7
        },
        {
          "m": "2025-02",
          "pos": 64.3,
          "neg": 28.6
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
          "neg": 17.9
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 0.0,
          "n": 63
        },
        "Atendimento": {
          "nps": 80.3,
          "n": 76
        },
        "Entrega & Logística": {
          "nps": 95.7,
          "n": 47
        },
        "Loja Física": {
          "nps": 14.5,
          "n": 62
        },
        "Outros": {
          "nps": 76.5,
          "n": 34
        },
        "Promoções & Fidelidade": {
          "nps": 40.9,
          "n": 127
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 53,
        "Abastecimento": 41,
        "Loja Física": 31,
        "Atendimento": 8,
        "Outros": 6,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 74,
        "Atendimento": 68,
        "Entrega & Logística": 46,
        "Loja Física": 31,
        "Outros": 28,
        "Abastecimento": 22
      }
    },
    {
      "nome": "L5027-ACLIMACAO (0851)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 53.6,
      "nps_textual": 48.2,
      "nps_hibrido": 50.8,
      "delta_hibrido": -2.8,
      "pct_pos": 65.0,
      "pct_neu": 18.1,
      "pct_neg": 16.9,
      "severidade": 32.78,
      "transacoes": 144210,
      "indice_prioridade": 69.8,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 463,
      "avaliacoes_ponderadas": 1837.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 31
        },
        {
          "cat": "Atendimento",
          "pct": 6
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 32
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 21
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 30
        },
        {
          "cat": "Entrega & Logística",
          "pct": 21
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 73.1,
          "neg": 15.4
        },
        {
          "m": "2025-02",
          "pos": 54.8,
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
          "pos": 58.0,
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
          "pos": 70.6,
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
          "pos": 71.4,
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
          "pos": 76.2,
          "neg": 4.8
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 3.3,
          "n": 60
        },
        "Atendimento": {
          "nps": 80.3,
          "n": 71
        },
        "Entrega & Logística": {
          "nps": 93.8,
          "n": 65
        },
        "Loja Física": {
          "nps": 21.4,
          "n": 70
        },
        "Outros": {
          "nps": 71.0,
          "n": 31
        },
        "Promoções & Fidelidade": {
          "nps": 39.8,
          "n": 166
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 75,
        "Abastecimento": 38,
        "Loja Física": 31,
        "Atendimento": 9,
        "Outros": 7,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 91,
        "Entrega & Logística": 63,
        "Atendimento": 62,
        "Loja Física": 39,
        "Outros": 24,
        "Abastecimento": 22
      }
    },
    {
      "nome": "L5095-VILLA LOBOS (1380)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 57.1,
      "nps_textual": 50.9,
      "nps_hibrido": 53.1,
      "delta_hibrido": -4.0,
      "pct_pos": 68.9,
      "pct_neu": 13.1,
      "pct_neg": 18.0,
      "severidade": 31.72,
      "transacoes": 65953,
      "indice_prioridade": 69.2,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 550,
      "avaliacoes_ponderadas": 1565.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 35
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 31
        },
        {
          "cat": "Atendimento",
          "pct": 5
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 36
        },
        {
          "cat": "Loja Física",
          "pct": 15
        },
        {
          "cat": "Outros",
          "pct": 9
        }
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
          "neg": 24.0
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
          "neg": 16.2
        },
        {
          "m": "2025-12",
          "pos": 80.0,
          "neg": 7.1
        },
        {
          "m": "2026-01",
          "pos": 83.0,
          "neg": 11.3
        },
        {
          "m": "2026-02",
          "pos": 52.0,
          "neg": 36.0
        },
        {
          "m": "2026-03",
          "pos": 71.0,
          "neg": 19.4
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -7.9,
          "n": 63
        },
        "Atendimento": {
          "nps": 91.5,
          "n": 142
        },
        "Entrega & Logística": {
          "nps": 84.7,
          "n": 59
        },
        "Loja Física": {
          "nps": 19.6,
          "n": 107
        },
        "Outros": {
          "nps": 94.6,
          "n": 37
        },
        "Promoções & Fidelidade": {
          "nps": 34.5,
          "n": 142
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 62,
        "Loja Física": 51,
        "Abastecimento": 42,
        "Entrega & Logística": 7,
        "Atendimento": 7,
        "Outros": 2
      },
      "elog_counts": {
        "Atendimento": 135,
        "Promoções & Fidelidade": 80,
        "Loja Física": 56,
        "Entrega & Logística": 52,
        "Outros": 35,
        "Abastecimento": 21
      }
    },
    {
      "nome": "L5037-VILA ROMANA (0880)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 58.3,
      "nps_textual": 49.5,
      "nps_hibrido": 54.7,
      "delta_hibrido": -3.6,
      "pct_pos": 66.5,
      "pct_neu": 16.6,
      "pct_neg": 17.0,
      "severidade": 32.61,
      "transacoes": 103921,
      "indice_prioridade": 69.1,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 477,
      "avaliacoes_ponderadas": 1438.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 11
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 38
        },
        {
          "cat": "Abastecimento",
          "pct": 37
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 29
        },
        {
          "cat": "Entrega & Logística",
          "pct": 21
        },
        {
          "cat": "Abastecimento",
          "pct": 8
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 50.0,
          "neg": 18.8
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
          "pos": 65.2,
          "neg": 21.7
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
          "neg": 13.3
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
          "pos": 72.0,
          "neg": 8.0
        },
        {
          "m": "2026-03",
          "pos": 72.9,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -7.5,
          "n": 80
        },
        "Atendimento": {
          "nps": 71.9,
          "n": 114
        },
        "Entrega & Logística": {
          "nps": 91.7,
          "n": 72
        },
        "Loja Física": {
          "nps": 53.8,
          "n": 52
        },
        "Outros": {
          "nps": 74.2,
          "n": 31
        },
        "Promoções & Fidelidade": {
          "nps": 33.6,
          "n": 128
        }
      },
      "prob_counts": {
        "Abastecimento": 56,
        "Promoções & Fidelidade": 54,
        "Atendimento": 23,
        "Loja Física": 17,
        "Outros": 6,
        "Entrega & Logística": 4
      },
      "elog_counts": {
        "Atendimento": 91,
        "Promoções & Fidelidade": 74,
        "Entrega & Logística": 68,
        "Loja Física": 35,
        "Outros": 25,
        "Abastecimento": 24
      }
    },
    {
      "nome": "L5006-MARAJOARA (0487)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 55.1,
      "nps_textual": 50.4,
      "nps_hibrido": 53.2,
      "delta_hibrido": -1.9,
      "pct_pos": 67.5,
      "pct_neu": 15.3,
      "pct_neg": 17.2,
      "severidade": 32.12,
      "transacoes": 134956,
      "indice_prioridade": 68.6,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 530,
      "avaliacoes_ponderadas": 1960.0,
      "top_problemas": [
        {
          "cat": "Entrega & Logística",
          "pct": 3
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 41
        },
        {
          "cat": "Abastecimento",
          "pct": 37
        }
      ],
      "top_elogios": [
        {
          "cat": "Outros",
          "pct": 13
        },
        {
          "cat": "Entrega & Logística",
          "pct": 22
        },
        {
          "cat": "Loja Física",
          "pct": 13
        }
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
          "pos": 60.0,
          "neg": 16.0
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
          "neg": 11.5
        },
        {
          "m": "2025-08",
          "pos": 78.4,
          "neg": 8.1
        },
        {
          "m": "2025-09",
          "pos": 81.5,
          "neg": 3.7
        },
        {
          "m": "2025-10",
          "pos": 71.4,
          "neg": 17.1
        },
        {
          "m": "2025-11",
          "pos": 60.0,
          "neg": 30.0
        },
        {
          "m": "2025-12",
          "pos": 45.7,
          "neg": 31.4
        },
        {
          "m": "2026-01",
          "pos": 48.3,
          "neg": 31.0
        },
        {
          "m": "2026-02",
          "pos": 67.7,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -12.8,
          "n": 78
        },
        "Atendimento": {
          "nps": 79.5,
          "n": 73
        },
        "Entrega & Logística": {
          "nps": 90.4,
          "n": 83
        },
        "Loja Física": {
          "nps": 53.7,
          "n": 67
        },
        "Outros": {
          "nps": 87.0,
          "n": 54
        },
        "Promoções & Fidelidade": {
          "nps": 34.9,
          "n": 175
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 77,
        "Abastecimento": 54,
        "Loja Física": 19,
        "Atendimento": 11,
        "Outros": 6,
        "Entrega & Logística": 5
      },
      "elog_counts": {
        "Promoções & Fidelidade": 98,
        "Entrega & Logística": 78,
        "Atendimento": 62,
        "Outros": 48,
        "Loja Física": 48,
        "Abastecimento": 24
      }
    },
    {
      "nome": "L5055-CAMBUCI (1284)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 56.6,
      "nps_textual": 50.7,
      "nps_hibrido": 53.6,
      "delta_hibrido": -2.9,
      "pct_pos": 67.9,
      "pct_neu": 14.9,
      "pct_neg": 17.2,
      "severidade": 31.98,
      "transacoes": 156925,
      "indice_prioridade": 68.6,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 617,
      "avaliacoes_ponderadas": 2391.0,
      "top_problemas": [
        {
          "cat": "Entrega & Logística",
          "pct": 4
        },
        {
          "cat": "Loja Física",
          "pct": 28
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 32
        }
      ],
      "top_elogios": [
        {
          "cat": "Outros",
          "pct": 11
        },
        {
          "cat": "Abastecimento",
          "pct": 9
        },
        {
          "cat": "Entrega & Logística",
          "pct": 21
        }
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
          "pos": 65.9,
          "neg": 22.7
        },
        {
          "m": "2025-04",
          "pos": 56.4,
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
          "pos": 66.7,
          "neg": 6.7
        },
        {
          "m": "2025-08",
          "pos": 75.0,
          "neg": 10.4
        },
        {
          "m": "2025-09",
          "pos": 72.1,
          "neg": 16.3
        },
        {
          "m": "2025-10",
          "pos": 76.9,
          "neg": 10.8
        },
        {
          "m": "2025-11",
          "pos": 65.6,
          "neg": 15.6
        },
        {
          "m": "2025-12",
          "pos": 57.6,
          "neg": 24.2
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
          "pos": 53.8,
          "neg": 26.9
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 7.4,
          "n": 94
        },
        "Atendimento": {
          "nps": 80.2,
          "n": 81
        },
        "Entrega & Logística": {
          "nps": 90.5,
          "n": 95
        },
        "Loja Física": {
          "nps": 26.8,
          "n": 97
        },
        "Outros": {
          "nps": 86.3,
          "n": 51
        },
        "Promoções & Fidelidade": {
          "nps": 42.7,
          "n": 199
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 80,
        "Abastecimento": 55,
        "Loja Física": 41,
        "Atendimento": 11,
        "Outros": 6,
        "Entrega & Logística": 5
      },
      "elog_counts": {
        "Promoções & Fidelidade": 119,
        "Entrega & Logística": 90,
        "Atendimento": 70,
        "Loja Física": 56,
        "Outros": 45,
        "Abastecimento": 39
      }
    },
    {
      "nome": "L5156-JARDIM PRUDENCIA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 56.3,
      "nps_textual": 52.1,
      "nps_hibrido": 54.0,
      "delta_hibrido": -2.3,
      "pct_pos": 68.8,
      "pct_neu": 14.6,
      "pct_neg": 16.7,
      "severidade": 31.37,
      "transacoes": 142708,
      "indice_prioridade": 68.1,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 474,
      "avaliacoes_ponderadas": 2002.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 10
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 49
        },
        {
          "cat": "Abastecimento",
          "pct": 28
        }
      ],
      "top_elogios": [
        {
          "cat": "Loja Física",
          "pct": 15
        },
        {
          "cat": "Atendimento",
          "pct": 18
        },
        {
          "cat": "Entrega & Logística",
          "pct": 21
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 80.0,
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
          "pos": 70.8,
          "neg": 20.8
        },
        {
          "m": "2025-06",
          "pos": 60.5,
          "neg": 18.4
        },
        {
          "m": "2025-07",
          "pos": 69.7,
          "neg": 15.2
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
          "pos": 63.9,
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
          "neg": 15.8
        },
        {
          "m": "2026-02",
          "pos": 69.0,
          "neg": 20.7
        },
        {
          "m": "2026-03",
          "pos": 66.7,
          "neg": 14.8
        },
        {
          "m": "2026-04",
          "pos": 64.5,
          "neg": 12.9
        },
        {
          "m": "2026-05",
          "pos": 70.0,
          "neg": 10.0
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 5.5,
          "n": 73
        },
        "Atendimento": {
          "nps": 73.2,
          "n": 71
        },
        "Entrega & Logística": {
          "nps": 94.4,
          "n": 72
        },
        "Loja Física": {
          "nps": 64.5,
          "n": 62
        },
        "Outros": {
          "nps": 82.4,
          "n": 34
        },
        "Promoções & Fidelidade": {
          "nps": 34.0,
          "n": 162
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 68,
        "Abastecimento": 47,
        "Loja Física": 14,
        "Atendimento": 11,
        "Outros": 5,
        "Entrega & Logística": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 94,
        "Entrega & Logística": 69,
        "Atendimento": 60,
        "Loja Física": 48,
        "Outros": 29,
        "Abastecimento": 26
      }
    },
    {
      "nome": "L5180-FREI CANECA",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 59.9,
      "nps_textual": 52.7,
      "nps_hibrido": 56.8,
      "delta_hibrido": -3.1,
      "pct_pos": 68.7,
      "pct_neu": 15.2,
      "pct_neg": 16.1,
      "severidade": 31.34,
      "transacoes": 135449,
      "indice_prioridade": 67.8,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 678,
      "avaliacoes_ponderadas": 2261.0,
      "top_problemas": [
        {
          "cat": "Entrega & Logística",
          "pct": 4
        },
        {
          "cat": "Outros",
          "pct": 4
        },
        {
          "cat": "Loja Física",
          "pct": 27
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 25
        },
        {
          "cat": "Loja Física",
          "pct": 14
        },
        {
          "cat": "Abastecimento",
          "pct": 8
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 66.7,
          "neg": 23.8
        },
        {
          "m": "2025-02",
          "pos": 75.5,
          "neg": 11.3
        },
        {
          "m": "2025-03",
          "pos": 65.8,
          "neg": 23.7
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
          "neg": 20.0
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
          "pos": 58.6,
          "neg": 17.2
        },
        {
          "m": "2025-10",
          "pos": 70.5,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 17.7,
          "n": 79
        },
        "Atendimento": {
          "nps": 92.6,
          "n": 121
        },
        "Entrega & Logística": {
          "nps": 89.6,
          "n": 96
        },
        "Loja Física": {
          "nps": 33.0,
          "n": 109
        },
        "Outros": {
          "nps": 63.3,
          "n": 60
        },
        "Promoções & Fidelidade": {
          "nps": 33.3,
          "n": 213
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 97,
        "Loja Física": 44,
        "Abastecimento": 41,
        "Outros": 18,
        "Entrega & Logística": 6,
        "Atendimento": 6
      },
      "elog_counts": {
        "Promoções & Fidelidade": 116,
        "Atendimento": 115,
        "Entrega & Logística": 90,
        "Loja Física": 65,
        "Outros": 42,
        "Abastecimento": 38
      }
    },
    {
      "nome": "L5210-CAMPANELLA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 60.3,
      "nps_textual": 52.1,
      "nps_hibrido": 55.9,
      "delta_hibrido": -4.4,
      "pct_pos": 67.8,
      "pct_neu": 16.4,
      "pct_neg": 15.8,
      "severidade": 32.0,
      "transacoes": 145713,
      "indice_prioridade": 67.4,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 818,
      "avaliacoes_ponderadas": 3521.0,
      "top_problemas": [
        {
          "cat": "Outros",
          "pct": 5
        },
        {
          "cat": "Loja Física",
          "pct": 22
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 36
        }
      ],
      "top_elogios": [
        {
          "cat": "Outros",
          "pct": 12
        },
        {
          "cat": "Abastecimento",
          "pct": 10
        },
        {
          "cat": "Entrega & Logística",
          "pct": 25
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 72.9,
          "neg": 11.9
        },
        {
          "m": "2025-02",
          "pos": 64.2,
          "neg": 24.5
        },
        {
          "m": "2025-03",
          "pos": 71.2,
          "neg": 10.2
        },
        {
          "m": "2025-04",
          "pos": 66.7,
          "neg": 19.3
        },
        {
          "m": "2025-05",
          "pos": 70.9,
          "neg": 10.9
        },
        {
          "m": "2025-06",
          "pos": 66.2,
          "neg": 12.3
        },
        {
          "m": "2025-07",
          "pos": 63.9,
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
          "neg": 19.0
        },
        {
          "m": "2025-10",
          "pos": 67.3,
          "neg": 17.3
        },
        {
          "m": "2025-11",
          "pos": 82.1,
          "neg": 10.7
        },
        {
          "m": "2025-12",
          "pos": 73.3,
          "neg": 8.3
        },
        {
          "m": "2026-01",
          "pos": 57.1,
          "neg": 21.4
        },
        {
          "m": "2026-02",
          "pos": 74.3,
          "neg": 11.4
        },
        {
          "m": "2026-03",
          "pos": 70.8,
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
          "neg": 14.3
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 14.3,
          "n": 126
        },
        "Atendimento": {
          "nps": 74.0,
          "n": 73
        },
        "Entrega & Logística": {
          "nps": 95.7,
          "n": 140
        },
        "Loja Física": {
          "nps": 39.1,
          "n": 138
        },
        "Outros": {
          "nps": 77.2,
          "n": 79
        },
        "Promoções & Fidelidade": {
          "nps": 40.1,
          "n": 262
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 111,
        "Abastecimento": 68,
        "Loja Física": 55,
        "Atendimento": 13,
        "Outros": 12,
        "Entrega & Logística": 4
      },
      "elog_counts": {
        "Promoções & Fidelidade": 151,
        "Entrega & Logística": 136,
        "Loja Física": 83,
        "Outros": 67,
        "Atendimento": 60,
        "Abastecimento": 58
      }
    },
    {
      "nome": "L5099-VILA MATILDE (1421)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 57.8,
      "nps_textual": 51.7,
      "nps_hibrido": 54.6,
      "delta_hibrido": -3.2,
      "pct_pos": 68.1,
      "pct_neu": 15.5,
      "pct_neg": 16.4,
      "severidade": 31.77,
      "transacoes": 168206,
      "indice_prioridade": 67.4,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 621,
      "avaliacoes_ponderadas": 2866.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 41
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 38
        },
        {
          "cat": "Loja Física",
          "pct": 17
        }
      ],
      "top_elogios": [
        {
          "cat": "Loja Física",
          "pct": 18
        },
        {
          "cat": "Outros",
          "pct": 11
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 31
        }
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
          "pos": 63.2,
          "neg": 13.2
        },
        {
          "m": "2025-07",
          "pos": 70.8,
          "neg": 8.3
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
          "neg": 10.0
        },
        {
          "m": "2025-12",
          "pos": 65.5,
          "neg": 16.4
        },
        {
          "m": "2026-01",
          "pos": 75.6,
          "neg": 7.3
        },
        {
          "m": "2026-02",
          "pos": 70.8,
          "neg": 16.7
        },
        {
          "m": "2026-03",
          "pos": 68.6,
          "neg": 20.0
        },
        {
          "m": "2026-04",
          "pos": 71.0,
          "neg": 22.6
        },
        {
          "m": "2026-05",
          "pos": 89.5,
          "neg": 0.0
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -8.0,
          "n": 100
        },
        "Atendimento": {
          "nps": 88.1,
          "n": 67
        },
        "Entrega & Logística": {
          "nps": 93.6,
          "n": 78
        },
        "Loja Física": {
          "nps": 55.7,
          "n": 106
        },
        "Outros": {
          "nps": 88.2,
          "n": 51
        },
        "Promoções & Fidelidade": {
          "nps": 42.5,
          "n": 219
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 87,
        "Abastecimento": 66,
        "Loja Física": 30,
        "Atendimento": 6,
        "Outros": 5,
        "Entrega & Logística": 4
      },
      "elog_counts": {
        "Promoções & Fidelidade": 132,
        "Loja Física": 76,
        "Entrega & Logística": 74,
        "Atendimento": 61,
        "Outros": 46,
        "Abastecimento": 34
      }
    },
    {
      "nome": "L5020-VILA MARIANA 2 (0779)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 54.5,
      "nps_textual": 48.1,
      "nps_hibrido": 52.9,
      "delta_hibrido": -1.7,
      "pct_pos": 63.8,
      "pct_neu": 20.4,
      "pct_neg": 15.8,
      "severidade": 33.29,
      "transacoes": 129715,
      "indice_prioridade": 67.3,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 539,
      "avaliacoes_ponderadas": 1861.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 8
        },
        {
          "cat": "Loja Física",
          "pct": 20
        },
        {
          "cat": "Abastecimento",
          "pct": 38
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 28
        },
        {
          "cat": "Outros",
          "pct": 11
        },
        {
          "cat": "Loja Física",
          "pct": 12
        }
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
          "pos": 46.9,
          "neg": 12.5
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
          "pos": 78.6,
          "neg": 10.7
        },
        {
          "m": "2025-12",
          "pos": 48.1,
          "neg": 18.5
        },
        {
          "m": "2026-01",
          "pos": 71.2,
          "neg": 11.5
        },
        {
          "m": "2026-02",
          "pos": 69.8,
          "neg": 7.0
        },
        {
          "m": "2026-03",
          "pos": 70.0,
          "neg": 12.0
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -6.1,
          "n": 82
        },
        "Atendimento": {
          "nps": 82.2,
          "n": 107
        },
        "Entrega & Logística": {
          "nps": 84.5,
          "n": 58
        },
        "Loja Física": {
          "nps": 31.7,
          "n": 82
        },
        "Outros": {
          "nps": 87.8,
          "n": 41
        },
        "Promoções & Fidelidade": {
          "nps": 38.5,
          "n": 169
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 79,
        "Abastecimento": 55,
        "Loja Física": 39,
        "Atendimento": 12,
        "Entrega & Logística": 7,
        "Outros": 3
      },
      "elog_counts": {
        "Atendimento": 95,
        "Promoções & Fidelidade": 90,
        "Entrega & Logística": 51,
        "Loja Física": 43,
        "Outros": 38,
        "Abastecimento": 27
      }
    },
    {
      "nome": "L5113-ANASTACIO",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 54.5,
      "nps_textual": 47.8,
      "nps_hibrido": 51.6,
      "delta_hibrido": -2.9,
      "pct_pos": 63.8,
      "pct_neu": 20.3,
      "pct_neg": 15.9,
      "severidade": 33.0,
      "transacoes": 132809,
      "indice_prioridade": 67.2,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 483,
      "avaliacoes_ponderadas": 2150.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 12
        },
        {
          "cat": "Outros",
          "pct": 4
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 40
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 37
        },
        {
          "cat": "Outros",
          "pct": 13
        },
        {
          "cat": "Abastecimento",
          "pct": 8
        }
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
          "pos": 69.7,
          "neg": 15.2
        },
        {
          "m": "2025-07",
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2025-08",
          "pos": 71.4,
          "neg": 4.8
        },
        {
          "m": "2025-09",
          "pos": 75.0,
          "neg": 0.0
        },
        {
          "m": "2025-10",
          "pos": 57.5,
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
          "pos": 60.0,
          "neg": 20.0
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -1.4,
          "n": 69
        },
        "Atendimento": {
          "nps": 56.9,
          "n": 58
        },
        "Entrega & Logística": {
          "nps": 94.9,
          "n": 59
        },
        "Loja Física": {
          "nps": 49.0,
          "n": 51
        },
        "Outros": {
          "nps": 85.7,
          "n": 42
        },
        "Promoções & Fidelidade": {
          "nps": 40.2,
          "n": 204
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 91,
        "Abastecimento": 45,
        "Loja Física": 17,
        "Atendimento": 16,
        "Outros": 3,
        "Entrega & Logística": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 113,
        "Entrega & Logística": 56,
        "Atendimento": 42,
        "Outros": 39,
        "Loja Física": 34,
        "Abastecimento": 24
      }
    },
    {
      "nome": "L5002-ALPHAVILLE (0290)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 58.4,
      "nps_textual": 50.7,
      "nps_hibrido": 55.5,
      "delta_hibrido": -2.9,
      "pct_pos": 65.6,
      "pct_neu": 19.5,
      "pct_neg": 14.9,
      "severidade": 32.82,
      "transacoes": 130581,
      "indice_prioridade": 66.9,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 730,
      "avaliacoes_ponderadas": 3159.0,
      "top_problemas": [
        {
          "cat": "Outros",
          "pct": 3
        },
        {
          "cat": "Loja Física",
          "pct": 21
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 36
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 13
        },
        {
          "cat": "Loja Física",
          "pct": 16
        },
        {
          "cat": "Outros",
          "pct": 10
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 66.7,
          "neg": 18.8
        },
        {
          "m": "2025-02",
          "pos": 58.6,
          "neg": 20.7
        },
        {
          "m": "2025-03",
          "pos": 70.2,
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
          "pos": 58.8,
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
          "pos": 62.0,
          "neg": 16.0
        },
        {
          "m": "2025-12",
          "pos": 60.4,
          "neg": 22.9
        },
        {
          "m": "2026-01",
          "pos": 64.2,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 18.2,
          "n": 132
        },
        "Atendimento": {
          "nps": 76.1,
          "n": 88
        },
        "Entrega & Logística": {
          "nps": 92.9,
          "n": 99
        },
        "Loja Física": {
          "nps": 47.0,
          "n": 117
        },
        "Outros": {
          "nps": 73.3,
          "n": 60
        },
        "Promoções & Fidelidade": {
          "nps": 37.6,
          "n": 234
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 107,
        "Abastecimento": 72,
        "Loja Física": 39,
        "Atendimento": 15,
        "Outros": 13,
        "Entrega & Logística": 5
      },
      "elog_counts": {
        "Promoções & Fidelidade": 127,
        "Entrega & Logística": 94,
        "Loja Física": 78,
        "Atendimento": 73,
        "Abastecimento": 60,
        "Outros": 47
      }
    },
    {
      "nome": "L5107-MANDAQUI (1521)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 49.4,
      "nps_textual": 46.9,
      "nps_hibrido": 48.1,
      "delta_hibrido": -1.2,
      "pct_pos": 64.0,
      "pct_neu": 18.9,
      "pct_neg": 17.1,
      "severidade": 33.13,
      "transacoes": 95429,
      "indice_prioridade": 66.8,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 322,
      "avaliacoes_ponderadas": 1186.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 9
        },
        {
          "cat": "Abastecimento",
          "pct": 44
        },
        {
          "cat": "Loja Física",
          "pct": 20
        }
      ],
      "top_elogios": [
        {
          "cat": "Outros",
          "pct": 13
        },
        {
          "cat": "Abastecimento",
          "pct": 11
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 34
        }
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
          "pos": 80.0,
          "neg": 6.7
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
          "pos": 71.4,
          "neg": 14.3
        },
        {
          "m": "2025-12",
          "pos": 69.2,
          "neg": 15.4
        },
        {
          "m": "2026-01",
          "pos": 68.8,
          "neg": 18.8
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -1.6,
          "n": 61
        },
        "Atendimento": {
          "nps": 50.0,
          "n": 26
        },
        "Entrega & Logística": {
          "nps": 93.5,
          "n": 46
        },
        "Loja Física": {
          "nps": 31.1,
          "n": 45
        },
        "Outros": {
          "nps": 92.9,
          "n": 28
        },
        "Promoções & Fidelidade": {
          "nps": 48.3,
          "n": 116
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 46,
        "Abastecimento": 38,
        "Loja Física": 20,
        "Atendimento": 8,
        "Entrega & Logística": 3,
        "Outros": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 70,
        "Entrega & Logística": 43,
        "Outros": 27,
        "Loja Física": 25,
        "Abastecimento": 23,
        "Atendimento": 18
      }
    },
    {
      "nome": "L5015-BARAO ITAPURA (0570)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 59.1,
      "nps_textual": 47.1,
      "nps_hibrido": 54.5,
      "delta_hibrido": -4.5,
      "pct_pos": 65.9,
      "pct_neu": 15.3,
      "pct_neg": 18.8,
      "severidade": 32.6,
      "transacoes": 73839,
      "indice_prioridade": 66.8,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 308,
      "avaliacoes_ponderadas": 1579.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 38
        },
        {
          "cat": "Abastecimento",
          "pct": 38
        },
        {
          "cat": "Loja Física",
          "pct": 17
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 15
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 32
        },
        {
          "cat": "Loja Física",
          "pct": 13
        }
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
          "pos": 65.6,
          "neg": 15.6
        },
        {
          "m": "2025-10",
          "pos": 43.8,
          "neg": 25.0
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
          "pos": 73.7,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 13.6,
          "n": 59
        },
        "Atendimento": {
          "nps": 82.9,
          "n": 35
        },
        "Entrega & Logística": {
          "nps": 84.2,
          "n": 38
        },
        "Loja Física": {
          "nps": 39.5,
          "n": 43
        },
        "Outros": {
          "nps": 76.2,
          "n": 21
        },
        "Promoções & Fidelidade": {
          "nps": 38.4,
          "n": 112
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 47,
        "Abastecimento": 29,
        "Loja Física": 16,
        "Atendimento": 5,
        "Entrega & Logística": 4,
        "Outros": 4
      },
      "elog_counts": {
        "Promoções & Fidelidade": 65,
        "Entrega & Logística": 34,
        "Abastecimento": 30,
        "Atendimento": 30,
        "Loja Física": 27,
        "Outros": 17
      }
    },
    {
      "nome": "L5059-TUTOIA (1294)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 55.1,
      "nps_textual": 49.0,
      "nps_hibrido": 51.0,
      "delta_hibrido": -4.0,
      "pct_pos": 64.5,
      "pct_neu": 20.0,
      "pct_neg": 15.5,
      "severidade": 32.82,
      "transacoes": 112454,
      "indice_prioridade": 66.8,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 574,
      "avaliacoes_ponderadas": 1884.0,
      "top_problemas": [
        {
          "cat": "Entrega & Logística",
          "pct": 3
        },
        {
          "cat": "Abastecimento",
          "pct": 39
        },
        {
          "cat": "Loja Física",
          "pct": 19
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 37
        },
        {
          "cat": "Loja Física",
          "pct": 13
        },
        {
          "cat": "Atendimento",
          "pct": 17
        }
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
          "pos": 52.3,
          "neg": 22.7
        },
        {
          "m": "2025-06",
          "pos": 64.1,
          "neg": 5.1
        },
        {
          "m": "2025-07",
          "pos": 71.9,
          "neg": 12.5
        },
        {
          "m": "2025-08",
          "pos": 59.5,
          "neg": 14.3
        },
        {
          "m": "2025-09",
          "pos": 65.5,
          "neg": 13.8
        },
        {
          "m": "2025-10",
          "pos": 66.0,
          "neg": 17.0
        },
        {
          "m": "2025-11",
          "pos": 58.3,
          "neg": 20.8
        },
        {
          "m": "2025-12",
          "pos": 76.1,
          "neg": 10.4
        },
        {
          "m": "2026-01",
          "pos": 63.3,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -5.8,
          "n": 86
        },
        "Atendimento": {
          "nps": 74.0,
          "n": 77
        },
        "Entrega & Logística": {
          "nps": 87.9,
          "n": 66
        },
        "Loja Física": {
          "nps": 43.7,
          "n": 71
        },
        "Outros": {
          "nps": 66.0,
          "n": 47
        },
        "Promoções & Fidelidade": {
          "nps": 48.0,
          "n": 227
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 91,
        "Abastecimento": 56,
        "Loja Física": 23,
        "Atendimento": 15,
        "Outros": 14,
        "Entrega & Logística": 5
      },
      "elog_counts": {
        "Promoções & Fidelidade": 136,
        "Atendimento": 62,
        "Entrega & Logística": 61,
        "Loja Física": 48,
        "Outros": 33,
        "Abastecimento": 30
      }
    },
    {
      "nome": "L5067-CHACARA ST. ANTONIO (1318)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 54.9,
      "nps_textual": 48.6,
      "nps_hibrido": 53.5,
      "delta_hibrido": -1.3,
      "pct_pos": 64.6,
      "pct_neu": 19.4,
      "pct_neg": 16.0,
      "severidade": 32.56,
      "transacoes": 105539,
      "indice_prioridade": 66.1,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 381,
      "avaliacoes_ponderadas": 1393.0,
      "top_problemas": [
        {
          "cat": "Outros",
          "pct": 5
        },
        {
          "cat": "Loja Física",
          "pct": 30
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 36
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 16
        },
        {
          "cat": "Loja Física",
          "pct": 13
        },
        {
          "cat": "Outros",
          "pct": 10
        }
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
          "neg": 7.7
        },
        {
          "m": "2025-05",
          "pos": 61.9,
          "neg": 23.8
        },
        {
          "m": "2025-06",
          "pos": 71.4,
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
          "pos": 63.6,
          "neg": 22.7
        },
        {
          "m": "2025-10",
          "pos": 61.3,
          "neg": 6.5
        },
        {
          "m": "2025-11",
          "pos": 54.2,
          "neg": 29.2
        },
        {
          "m": "2025-12",
          "pos": 81.2,
          "neg": 9.4
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
          "neg": 21.4
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 28.4,
          "n": 81
        },
        "Atendimento": {
          "nps": 79.5,
          "n": 39
        },
        "Entrega & Logística": {
          "nps": 92.3,
          "n": 52
        },
        "Loja Física": {
          "nps": 25.9,
          "n": 58
        },
        "Outros": {
          "nps": 72.4,
          "n": 29
        },
        "Promoções & Fidelidade": {
          "nps": 38.5,
          "n": 122
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 53,
        "Abastecimento": 42,
        "Loja Física": 25,
        "Atendimento": 6,
        "Outros": 5,
        "Entrega & Logística": 4
      },
      "elog_counts": {
        "Promoções & Fidelidade": 69,
        "Entrega & Logística": 48,
        "Abastecimento": 39,
        "Loja Física": 33,
        "Atendimento": 33,
        "Outros": 24
      }
    },
    {
      "nome": "L5220-PLANALTO",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 59.6,
      "nps_textual": 50.4,
      "nps_hibrido": 53.4,
      "delta_hibrido": -6.2,
      "pct_pos": 66.7,
      "pct_neu": 16.9,
      "pct_neg": 16.4,
      "severidade": 32.32,
      "transacoes": 87121,
      "indice_prioridade": 66.1,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 421,
      "avaliacoes_ponderadas": 1629.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 33
        },
        {
          "cat": "Abastecimento",
          "pct": 46
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 14
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 13
        },
        {
          "cat": "Loja Física",
          "pct": 17
        },
        {
          "cat": "Outros",
          "pct": 13
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 70.5,
          "neg": 18.2
        },
        {
          "m": "2025-02",
          "pos": 75.9,
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
          "pos": 81.2,
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
          "neg": 25.0
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
          "pos": 66.7,
          "neg": 11.1
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 4.3,
          "n": 92
        },
        "Atendimento": {
          "nps": 89.6,
          "n": 48
        },
        "Entrega & Logística": {
          "nps": 95.5,
          "n": 44
        },
        "Loja Física": {
          "nps": 28.6,
          "n": 91
        },
        "Outros": {
          "nps": 85.4,
          "n": 41
        },
        "Promoções & Fidelidade": {
          "nps": 59.0,
          "n": 105
        }
      },
      "prob_counts": {
        "Abastecimento": 56,
        "Loja Física": 42,
        "Promoções & Fidelidade": 33,
        "Outros": 4,
        "Atendimento": 3,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 72,
        "Loja Física": 49,
        "Atendimento": 45,
        "Entrega & Logística": 42,
        "Outros": 37,
        "Abastecimento": 36
      }
    },
    {
      "nome": "L5184-PRACA VARNHAGEM",
      "flag": "regular",
      "uf": "RJ",
      "regiao": "RJ",
      "nps_trad": 63.0,
      "nps_textual": 53.1,
      "nps_hibrido": 58.1,
      "delta_hibrido": -4.9,
      "pct_pos": 66.6,
      "pct_neu": 19.9,
      "pct_neg": 13.5,
      "severidade": 32.18,
      "transacoes": 136813,
      "indice_prioridade": 66.1,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 1258,
      "avaliacoes_ponderadas": 4929.0,
      "top_problemas": [
        {
          "cat": "Entrega & Logística",
          "pct": 3
        },
        {
          "cat": "Loja Física",
          "pct": 26
        },
        {
          "cat": "Outros",
          "pct": 2
        }
      ],
      "top_elogios": [
        {
          "cat": "Loja Física",
          "pct": 18
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 37
        },
        {
          "cat": "Outros",
          "pct": 11
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 67.0,
          "neg": 12.5
        },
        {
          "m": "2025-02",
          "pos": 71.1,
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
          "pos": 61.8,
          "neg": 13.5
        },
        {
          "m": "2025-06",
          "pos": 66.7,
          "neg": 11.4
        },
        {
          "m": "2025-07",
          "pos": 66.7,
          "neg": 11.1
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
          "pos": 65.3,
          "neg": 16.7
        },
        {
          "m": "2025-12",
          "pos": 66.3,
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
          "pos": 63.0,
          "neg": 10.9
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -2.4,
          "n": 165
        },
        "Atendimento": {
          "nps": 78.4,
          "n": 111
        },
        "Entrega & Logística": {
          "nps": 88.1,
          "n": 151
        },
        "Loja Física": {
          "nps": 44.8,
          "n": 230
        },
        "Outros": {
          "nps": 82.9,
          "n": 111
        },
        "Promoções & Fidelidade": {
          "nps": 52.4,
          "n": 490
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 184,
        "Abastecimento": 107,
        "Loja Física": 82,
        "Atendimento": 19,
        "Outros": 15,
        "Entrega & Logística": 13
      },
      "elog_counts": {
        "Promoções & Fidelidade": 306,
        "Loja Física": 148,
        "Entrega & Logística": 138,
        "Outros": 96,
        "Atendimento": 92,
        "Abastecimento": 58
      }
    },
    {
      "nome": "L5176-BRAGANCA PAULISTA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 57.7,
      "nps_textual": 51.2,
      "nps_hibrido": 56.1,
      "delta_hibrido": -1.6,
      "pct_pos": 65.8,
      "pct_neu": 19.6,
      "pct_neg": 14.6,
      "severidade": 32.3,
      "transacoes": 175261,
      "indice_prioridade": 65.2,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 685,
      "avaliacoes_ponderadas": 3108.0,
      "top_problemas": [
        {
          "cat": "Outros",
          "pct": 4
        },
        {
          "cat": "Atendimento",
          "pct": 8
        },
        {
          "cat": "Abastecimento",
          "pct": 38
        }
      ],
      "top_elogios": [
        {
          "cat": "Loja Física",
          "pct": 16
        },
        {
          "cat": "Outros",
          "pct": 12
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 33
        }
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
          "pos": 75.7,
          "neg": 10.8
        },
        {
          "m": "2025-05",
          "pos": 54.1,
          "neg": 16.2
        },
        {
          "m": "2025-06",
          "pos": 73.2,
          "neg": 12.2
        },
        {
          "m": "2025-07",
          "pos": 63.0,
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
          "pos": 66.7,
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
          "pos": 60.7,
          "neg": 21.3
        },
        {
          "m": "2026-03",
          "pos": 64.4,
          "neg": 15.6
        },
        {
          "m": "2026-04",
          "pos": 62.5,
          "neg": 15.6
        },
        {
          "m": "2026-05",
          "pos": 65.5,
          "neg": 13.8
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -3.1,
          "n": 98
        },
        "Atendimento": {
          "nps": 58.2,
          "n": 67
        },
        "Entrega & Logística": {
          "nps": 89.9,
          "n": 99
        },
        "Loja Física": {
          "nps": 61.2,
          "n": 98
        },
        "Outros": {
          "nps": 79.4,
          "n": 63
        },
        "Promoções & Fidelidade": {
          "nps": 44.6,
          "n": 260
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 109,
        "Abastecimento": 63,
        "Loja Física": 25,
        "Atendimento": 20,
        "Outros": 9,
        "Entrega & Logística": 8
      },
      "elog_counts": {
        "Promoções & Fidelidade": 151,
        "Entrega & Logística": 91,
        "Loja Física": 73,
        "Outros": 54,
        "Atendimento": 47,
        "Abastecimento": 35
      }
    },
    {
      "nome": "L5121-VILA MASCOTE",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 58.4,
      "nps_textual": 52.2,
      "nps_hibrido": 55.9,
      "delta_hibrido": -2.5,
      "pct_pos": 67.1,
      "pct_neu": 18.0,
      "pct_neg": 14.9,
      "severidade": 31.95,
      "transacoes": 163841,
      "indice_prioridade": 65.0,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 596,
      "avaliacoes_ponderadas": 2266.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 11
        },
        {
          "cat": "Entrega & Logística",
          "pct": 3
        },
        {
          "cat": "Abastecimento",
          "pct": 40
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 36
        },
        {
          "cat": "Entrega & Logística",
          "pct": 22
        },
        {
          "cat": "Abastecimento",
          "pct": 8
        }
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
          "neg": 21.1
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
          "pos": 61.0,
          "neg": 4.9
        },
        {
          "m": "2025-09",
          "pos": 65.8,
          "neg": 10.5
        },
        {
          "m": "2025-10",
          "pos": 55.3,
          "neg": 18.4
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
          "pos": 56.8,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -3.2,
          "n": 95
        },
        "Atendimento": {
          "nps": 59.8,
          "n": 92
        },
        "Entrega & Logística": {
          "nps": 89.2,
          "n": 93
        },
        "Loja Física": {
          "nps": 64.4,
          "n": 59
        },
        "Outros": {
          "nps": 77.4,
          "n": 31
        },
        "Promoções & Fidelidade": {
          "nps": 50.4,
          "n": 226
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 80,
        "Abastecimento": 62,
        "Atendimento": 27,
        "Loja Física": 14,
        "Entrega & Logística": 7,
        "Outros": 6
      },
      "elog_counts": {
        "Promoções & Fidelidade": 146,
        "Entrega & Logística": 86,
        "Atendimento": 65,
        "Loja Física": 45,
        "Abastecimento": 33,
        "Outros": 25
      }
    },
    {
      "nome": "L5136-RIB.PRETO ALTO DA BOA VISTA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 53.8,
      "nps_textual": 50.8,
      "nps_hibrido": 53.8,
      "delta_hibrido": 0.0,
      "pct_pos": 68.2,
      "pct_neu": 14.4,
      "pct_neg": 17.4,
      "severidade": 30.85,
      "transacoes": 78076,
      "indice_prioridade": 64.4,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 236,
      "avaliacoes_ponderadas": 1056.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 15
        },
        {
          "cat": "Abastecimento",
          "pct": 51
        },
        {
          "cat": "Loja Física",
          "pct": 17
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 11
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 34
        },
        {
          "cat": "Entrega & Logística",
          "pct": 21
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 81.2,
          "neg": 0.0
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
          "pos": 83.3,
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
          "pos": 72.7,
          "neg": 9.1
        },
        {
          "m": "2026-05",
          "pos": 66.7,
          "neg": 16.7
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -8.5,
          "n": 47
        },
        "Atendimento": {
          "nps": 55.2,
          "n": 29
        },
        "Entrega & Logística": {
          "nps": 97.1,
          "n": 35
        },
        "Loja Física": {
          "nps": 44.8,
          "n": 29
        },
        "Outros": {
          "nps": 92.9,
          "n": 14
        },
        "Promoções & Fidelidade": {
          "nps": 58.5,
          "n": 82
        }
      },
      "prob_counts": {
        "Abastecimento": 30,
        "Promoções & Fidelidade": 27,
        "Loja Física": 9,
        "Atendimento": 7,
        "Outros": 1,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 55,
        "Entrega & Logística": 34,
        "Atendimento": 22,
        "Loja Física": 20,
        "Abastecimento": 17,
        "Outros": 13
      }
    },
    {
      "nome": "L5100-INTERLAGOS (1431)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 62.5,
      "nps_textual": 53.3,
      "nps_hibrido": 61.1,
      "delta_hibrido": -1.4,
      "pct_pos": 69.4,
      "pct_neu": 14.6,
      "pct_neg": 16.0,
      "severidade": 30.89,
      "transacoes": 120734,
      "indice_prioridade": 64.3,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 555,
      "avaliacoes_ponderadas": 2166.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 28
        },
        {
          "cat": "Atendimento",
          "pct": 7
        },
        {
          "cat": "Abastecimento",
          "pct": 35
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 11
        },
        {
          "cat": "Loja Física",
          "pct": 16
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 34
        }
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
          "pos": 69.2,
          "neg": 17.9
        },
        {
          "m": "2025-04",
          "pos": 60.9,
          "neg": 19.6
        },
        {
          "m": "2025-05",
          "pos": 78.0,
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
          "pos": 78.4,
          "neg": 13.5
        },
        {
          "m": "2025-09",
          "pos": 71.1,
          "neg": 13.2
        },
        {
          "m": "2025-10",
          "pos": 64.3,
          "neg": 17.9
        },
        {
          "m": "2025-11",
          "pos": 57.1,
          "neg": 21.4
        },
        {
          "m": "2025-12",
          "pos": 66.7,
          "neg": 22.9
        },
        {
          "m": "2026-01",
          "pos": 76.2,
          "neg": 14.3
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
          "neg": 12.5
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 12.2,
          "n": 90
        },
        "Atendimento": {
          "nps": 68.2,
          "n": 44
        },
        "Entrega & Logística": {
          "nps": 95.1,
          "n": 82
        },
        "Loja Física": {
          "nps": 36.0,
          "n": 100
        },
        "Outros": {
          "nps": 76.7,
          "n": 43
        },
        "Promoções & Fidelidade": {
          "nps": 55.1,
          "n": 196
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 65,
        "Abastecimento": 48,
        "Loja Física": 39,
        "Atendimento": 8,
        "Outros": 8,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 131,
        "Entrega & Logística": 80,
        "Loja Física": 61,
        "Abastecimento": 42,
        "Atendimento": 36,
        "Outros": 35
      }
    },
    {
      "nome": "L5005-BROOKLIN (0475)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 59.5,
      "nps_textual": 53.1,
      "nps_hibrido": 56.5,
      "delta_hibrido": -3.0,
      "pct_pos": 68.7,
      "pct_neu": 15.6,
      "pct_neg": 15.6,
      "severidade": 31.13,
      "transacoes": 100102,
      "indice_prioridade": 64.3,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 467,
      "avaliacoes_ponderadas": 1481.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 30
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 34
        },
        {
          "cat": "Atendimento",
          "pct": 5
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 32
        },
        {
          "cat": "Loja Física",
          "pct": 17
        },
        {
          "cat": "Entrega & Logística",
          "pct": 17
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 61.9,
          "neg": 19.0
        },
        {
          "m": "2025-02",
          "pos": 39.1,
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
          "neg": 14.3
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
          "neg": 18.8
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
          "pos": 77.3,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 0.0,
          "n": 61
        },
        "Atendimento": {
          "nps": 87.0,
          "n": 115
        },
        "Entrega & Logística": {
          "nps": 93.1,
          "n": 58
        },
        "Loja Física": {
          "nps": 37.9,
          "n": 87
        },
        "Outros": {
          "nps": 85.2,
          "n": 27
        },
        "Promoções & Fidelidade": {
          "nps": 31.9,
          "n": 119
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 56,
        "Abastecimento": 40,
        "Loja Física": 32,
        "Atendimento": 11,
        "Entrega & Logística": 4,
        "Outros": 3
      },
      "elog_counts": {
        "Atendimento": 104,
        "Promoções & Fidelidade": 63,
        "Loja Física": 55,
        "Entrega & Logística": 54,
        "Outros": 24,
        "Abastecimento": 21
      }
    },
    {
      "nome": "L5199-CASA VERDE",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 60.0,
      "nps_textual": 53.8,
      "nps_hibrido": 57.8,
      "delta_hibrido": -2.2,
      "pct_pos": 69.6,
      "pct_neu": 14.5,
      "pct_neg": 15.8,
      "severidade": 30.81,
      "transacoes": 121834,
      "indice_prioridade": 64.2,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 543,
      "avaliacoes_ponderadas": 2086.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 45
        },
        {
          "cat": "Loja Física",
          "pct": 21
        },
        {
          "cat": "Atendimento",
          "pct": 5
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 34
        },
        {
          "cat": "Loja Física",
          "pct": 15
        },
        {
          "cat": "Outros",
          "pct": 10
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 69.0,
          "neg": 21.4
        },
        {
          "m": "2025-02",
          "pos": 56.7,
          "neg": 16.7
        },
        {
          "m": "2025-03",
          "pos": 57.9,
          "neg": 21.1
        },
        {
          "m": "2025-04",
          "pos": 70.4,
          "neg": 14.8
        },
        {
          "m": "2025-05",
          "pos": 82.1,
          "neg": 10.7
        },
        {
          "m": "2025-06",
          "pos": 88.5,
          "neg": 7.7
        },
        {
          "m": "2025-07",
          "pos": 86.4,
          "neg": 0.0
        },
        {
          "m": "2025-08",
          "pos": 74.1,
          "neg": 14.8
        },
        {
          "m": "2025-09",
          "pos": 72.2,
          "neg": 8.3
        },
        {
          "m": "2025-10",
          "pos": 65.0,
          "neg": 22.5
        },
        {
          "m": "2025-11",
          "pos": 57.7,
          "neg": 11.5
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
          "neg": 32.7
        },
        {
          "m": "2026-05",
          "pos": 76.0,
          "neg": 8.0
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -5.5,
          "n": 91
        },
        "Atendimento": {
          "nps": 81.4,
          "n": 70
        },
        "Entrega & Logística": {
          "nps": 96.7,
          "n": 61
        },
        "Loja Física": {
          "nps": 45.1,
          "n": 82
        },
        "Outros": {
          "nps": 84.1,
          "n": 44
        },
        "Promoções & Fidelidade": {
          "nps": 54.9,
          "n": 195
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 65,
        "Abastecimento": 57,
        "Loja Física": 27,
        "Atendimento": 9,
        "Outros": 5,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 130,
        "Atendimento": 61,
        "Entrega & Logística": 59,
        "Loja Física": 55,
        "Outros": 39,
        "Abastecimento": 34
      }
    },
    {
      "nome": "L5022-SAO CAETANO CENTRO (0811)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 60.6,
      "nps_textual": 54.1,
      "nps_hibrido": 58.3,
      "delta_hibrido": -2.3,
      "pct_pos": 69.5,
      "pct_neu": 15.0,
      "pct_neg": 15.4,
      "severidade": 30.77,
      "transacoes": 161810,
      "indice_prioridade": 64.2,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 525,
      "avaliacoes_ponderadas": 2304.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 10
        },
        {
          "cat": "Abastecimento",
          "pct": 40
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 35
        }
      ],
      "top_elogios": [
        {
          "cat": "Loja Física",
          "pct": 16
        },
        {
          "cat": "Entrega & Logística",
          "pct": 23
        },
        {
          "cat": "Abastecimento",
          "pct": 9
        }
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
          "neg": 10.0
        },
        {
          "m": "2026-01",
          "pos": 75.8,
          "neg": 18.2
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 2.4,
          "n": 83
        },
        "Atendimento": {
          "nps": 62.5,
          "n": 56
        },
        "Entrega & Logística": {
          "nps": 95.3,
          "n": 86
        },
        "Loja Física": {
          "nps": 62.7,
          "n": 75
        },
        "Outros": {
          "nps": 87.2,
          "n": 39
        },
        "Promoções & Fidelidade": {
          "nps": 44.9,
          "n": 185
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 74,
        "Abastecimento": 49,
        "Loja Física": 18,
        "Atendimento": 13,
        "Outros": 3,
        "Entrega & Logística": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 111,
        "Entrega & Logística": 83,
        "Loja Física": 57,
        "Atendimento": 43,
        "Outros": 36,
        "Abastecimento": 34
      }
    },
    {
      "nome": "L5185-CLODOMIRO",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 58.5,
      "nps_textual": 53.5,
      "nps_hibrido": 57.8,
      "delta_hibrido": -0.7,
      "pct_pos": 70.2,
      "pct_neu": 13.1,
      "pct_neg": 16.7,
      "severidade": 30.58,
      "transacoes": 70686,
      "indice_prioridade": 64.2,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 443,
      "avaliacoes_ponderadas": 1381.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 23
        },
        {
          "cat": "Abastecimento",
          "pct": 35
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 32
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 22
        },
        {
          "cat": "Abastecimento",
          "pct": 10
        },
        {
          "cat": "Outros",
          "pct": 11
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 56.2,
          "neg": 25.0
        },
        {
          "m": "2025-02",
          "pos": 66.7,
          "neg": 20.0
        },
        {
          "m": "2025-03",
          "pos": 38.9,
          "neg": 27.8
        },
        {
          "m": "2025-04",
          "pos": 42.9,
          "neg": 38.1
        },
        {
          "m": "2025-05",
          "pos": 64.7,
          "neg": 11.8
        },
        {
          "m": "2025-06",
          "pos": 54.8,
          "neg": 29.0
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
          "pos": 79.3,
          "neg": 10.3
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 5.4,
          "n": 74
        },
        "Atendimento": {
          "nps": 84.6,
          "n": 78
        },
        "Entrega & Logística": {
          "nps": 93.1,
          "n": 58
        },
        "Loja Física": {
          "nps": 32.4,
          "n": 71
        },
        "Outros": {
          "nps": 81.6,
          "n": 38
        },
        "Promoções & Fidelidade": {
          "nps": 47.6,
          "n": 124
        }
      },
      "prob_counts": {
        "Abastecimento": 44,
        "Promoções & Fidelidade": 41,
        "Loja Física": 31,
        "Atendimento": 9,
        "Outros": 5,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 83,
        "Atendimento": 69,
        "Entrega & Logística": 56,
        "Loja Física": 40,
        "Outros": 33,
        "Abastecimento": 30
      }
    },
    {
      "nome": "L5021-VILA SAUDE (0782)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 54.8,
      "nps_textual": 48.5,
      "nps_hibrido": 53.9,
      "delta_hibrido": -0.8,
      "pct_pos": 62.8,
      "pct_neu": 22.9,
      "pct_neg": 14.3,
      "severidade": 33.23,
      "transacoes": 144510,
      "indice_prioridade": 63.8,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 608,
      "avaliacoes_ponderadas": 2332.0,
      "top_problemas": [
        {
          "cat": "Entrega & Logística",
          "pct": 3
        },
        {
          "cat": "Loja Física",
          "pct": 28
        },
        {
          "cat": "Abastecimento",
          "pct": 37
        }
      ],
      "top_elogios": [
        {
          "cat": "Loja Física",
          "pct": 16
        },
        {
          "cat": "Outros",
          "pct": 12
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 32
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 61.4,
          "neg": 19.3
        },
        {
          "m": "2025-02",
          "pos": 64.9,
          "neg": 13.5
        },
        {
          "m": "2025-03",
          "pos": 62.8,
          "neg": 7.0
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
          "neg": 7.7
        },
        {
          "m": "2025-10",
          "pos": 80.5,
          "neg": 7.3
        },
        {
          "m": "2025-11",
          "pos": 56.0,
          "neg": 16.0
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
          "pos": 59.1,
          "neg": 13.6
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 5.1,
          "n": 98
        },
        "Atendimento": {
          "nps": 77.8,
          "n": 54
        },
        "Entrega & Logística": {
          "nps": 86.1,
          "n": 79
        },
        "Loja Física": {
          "nps": 35.1,
          "n": 111
        },
        "Outros": {
          "nps": 81.1,
          "n": 53
        },
        "Promoções & Fidelidade": {
          "nps": 46.0,
          "n": 213
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 90,
        "Abastecimento": 61,
        "Loja Física": 48,
        "Atendimento": 10,
        "Outros": 9,
        "Entrega & Logística": 8
      },
      "elog_counts": {
        "Promoções & Fidelidade": 123,
        "Entrega & Logística": 71,
        "Loja Física": 63,
        "Atendimento": 44,
        "Outros": 44,
        "Abastecimento": 37
      }
    },
    {
      "nome": "L5177-FREGUESIA DO O",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 62.4,
      "nps_textual": 54.5,
      "nps_hibrido": 59.6,
      "delta_hibrido": -2.9,
      "pct_pos": 68.6,
      "pct_neu": 17.3,
      "pct_neg": 14.1,
      "severidade": 31.27,
      "transacoes": 128001,
      "indice_prioridade": 63.7,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 695,
      "avaliacoes_ponderadas": 2459.0,
      "top_problemas": [
        {
          "cat": "Entrega & Logística",
          "pct": 4
        },
        {
          "cat": "Abastecimento",
          "pct": 44
        },
        {
          "cat": "Atendimento",
          "pct": 6
        }
      ],
      "top_elogios": [
        {
          "cat": "Outros",
          "pct": 13
        },
        {
          "cat": "Loja Física",
          "pct": 16
        },
        {
          "cat": "Entrega & Logística",
          "pct": 23
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 63.8,
          "neg": 25.5
        },
        {
          "m": "2025-02",
          "pos": 56.0,
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
          "pos": 67.6,
          "neg": 10.8
        },
        {
          "m": "2025-08",
          "pos": 69.4,
          "neg": 14.3
        },
        {
          "m": "2025-09",
          "pos": 57.1,
          "neg": 14.3
        },
        {
          "m": "2025-10",
          "pos": 66.7,
          "neg": 3.0
        },
        {
          "m": "2025-11",
          "pos": 50.0,
          "neg": 25.0
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
          "pos": 66.7,
          "neg": 11.1
        },
        {
          "m": "2026-03",
          "pos": 75.0,
          "neg": 9.7
        },
        {
          "m": "2026-04",
          "pos": 71.4,
          "neg": 7.1
        },
        {
          "m": "2026-05",
          "pos": 68.2,
          "neg": 9.1
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -12.7,
          "n": 102
        },
        "Atendimento": {
          "nps": 75.0,
          "n": 104
        },
        "Entrega & Logística": {
          "nps": 89.1,
          "n": 119
        },
        "Loja Física": {
          "nps": 54.2,
          "n": 107
        },
        "Outros": {
          "nps": 89.6,
          "n": 67
        },
        "Promoções & Fidelidade": {
          "nps": 45.9,
          "n": 196
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 80,
        "Abastecimento": 72,
        "Loja Física": 32,
        "Atendimento": 20,
        "Entrega & Logística": 9,
        "Outros": 5
      },
      "elog_counts": {
        "Promoções & Fidelidade": 116,
        "Entrega & Logística": 110,
        "Atendimento": 84,
        "Loja Física": 75,
        "Outros": 62,
        "Abastecimento": 30
      }
    },
    {
      "nome": "L5223-CAMPO LIMPO",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 66.0,
      "nps_textual": 58.1,
      "nps_hibrido": 62.3,
      "delta_hibrido": -3.7,
      "pct_pos": 71.6,
      "pct_neu": 14.8,
      "pct_neg": 13.5,
      "severidade": 30.25,
      "transacoes": 208189,
      "indice_prioridade": 63.5,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 1428,
      "avaliacoes_ponderadas": 5830.0,
      "top_problemas": [
        {
          "cat": "Entrega & Logística",
          "pct": 3
        },
        {
          "cat": "Loja Física",
          "pct": 26
        },
        {
          "cat": "Atendimento",
          "pct": 6
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 20
        },
        {
          "cat": "Abastecimento",
          "pct": 10
        },
        {
          "cat": "Entrega & Logística",
          "pct": 22
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 62.9,
          "neg": 22.5
        },
        {
          "m": "2025-02",
          "pos": 73.1,
          "neg": 12.9
        },
        {
          "m": "2025-03",
          "pos": 67.4,
          "neg": 19.8
        },
        {
          "m": "2025-04",
          "pos": 70.1,
          "neg": 11.1
        },
        {
          "m": "2025-05",
          "pos": 69.3,
          "neg": 14.7
        },
        {
          "m": "2025-06",
          "pos": 71.9,
          "neg": 15.6
        },
        {
          "m": "2025-07",
          "pos": 72.2,
          "neg": 13.9
        },
        {
          "m": "2025-08",
          "pos": 71.4,
          "neg": 11.9
        },
        {
          "m": "2025-09",
          "pos": 72.8,
          "neg": 11.1
        },
        {
          "m": "2025-10",
          "pos": 79.0,
          "neg": 12.1
        },
        {
          "m": "2025-11",
          "pos": 74.4,
          "neg": 10.3
        },
        {
          "m": "2025-12",
          "pos": 78.2,
          "neg": 5.7
        },
        {
          "m": "2026-01",
          "pos": 71.6,
          "neg": 14.8
        },
        {
          "m": "2026-02",
          "pos": 68.8,
          "neg": 10.9
        },
        {
          "m": "2026-03",
          "pos": 67.1,
          "neg": 14.5
        },
        {
          "m": "2026-04",
          "pos": 70.8,
          "neg": 15.3
        },
        {
          "m": "2026-05",
          "pos": 73.6,
          "neg": 13.2
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 12.9,
          "n": 232
        },
        "Atendimento": {
          "nps": 84.1,
          "n": 233
        },
        "Entrega & Logística": {
          "nps": 91.9,
          "n": 234
        },
        "Loja Física": {
          "nps": 34.2,
          "n": 196
        },
        "Outros": {
          "nps": 89.5,
          "n": 114
        },
        "Promoções & Fidelidade": {
          "nps": 52.5,
          "n": 419
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 147,
        "Abastecimento": 131,
        "Loja Física": 78,
        "Atendimento": 25,
        "Entrega & Logística": 13,
        "Outros": 11
      },
      "elog_counts": {
        "Promoções & Fidelidade": 272,
        "Entrega & Logística": 221,
        "Atendimento": 208,
        "Loja Física": 118,
        "Outros": 103,
        "Abastecimento": 101
      }
    },
    {
      "nome": "L5230-LARGO DO MACHADO",
      "flag": "regular",
      "uf": "RJ",
      "regiao": "RJ",
      "nps_trad": 63.8,
      "nps_textual": 57.2,
      "nps_hibrido": 62.0,
      "delta_hibrido": -1.7,
      "pct_pos": 69.4,
      "pct_neu": 18.3,
      "pct_neg": 12.2,
      "severidade": 30.88,
      "transacoes": 193018,
      "indice_prioridade": 63.5,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 1747,
      "avaliacoes_ponderadas": 5855.0,
      "top_problemas": [
        {
          "cat": "Outros",
          "pct": 6
        },
        {
          "cat": "Loja Física",
          "pct": 20
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 37
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 11
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 35
        },
        {
          "cat": "Loja Física",
          "pct": 14
        }
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
          "neg": 13.2
        },
        {
          "m": "2025-04",
          "pos": 64.6,
          "neg": 12.5
        },
        {
          "m": "2025-05",
          "pos": 71.0,
          "neg": 11.6
        },
        {
          "m": "2025-06",
          "pos": 77.6,
          "neg": 9.9
        },
        {
          "m": "2025-07",
          "pos": 68.6,
          "neg": 13.3
        },
        {
          "m": "2025-08",
          "pos": 72.5,
          "neg": 10.1
        },
        {
          "m": "2025-09",
          "pos": 70.1,
          "neg": 7.5
        },
        {
          "m": "2025-10",
          "pos": 67.0,
          "neg": 13.0
        },
        {
          "m": "2025-11",
          "pos": 63.9,
          "neg": 11.3
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
          "pos": 70.7,
          "neg": 17.2
        },
        {
          "m": "2026-04",
          "pos": 64.0,
          "neg": 21.3
        },
        {
          "m": "2026-05",
          "pos": 59.3,
          "neg": 13.0
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 26.2,
          "n": 256
        },
        "Atendimento": {
          "nps": 80.4,
          "n": 199
        },
        "Entrega & Logística": {
          "nps": 90.9,
          "n": 230
        },
        "Loja Física": {
          "nps": 48.4,
          "n": 250
        },
        "Outros": {
          "nps": 69.4,
          "n": 147
        },
        "Promoções & Fidelidade": {
          "nps": 51.1,
          "n": 665
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 246,
        "Abastecimento": 124,
        "Loja Física": 86,
        "Outros": 33,
        "Atendimento": 28,
        "Entrega & Logística": 17
      },
      "elog_counts": {
        "Promoções & Fidelidade": 419,
        "Entrega & Logística": 213,
        "Atendimento": 171,
        "Loja Física": 164,
        "Abastecimento": 132,
        "Outros": 114
      }
    },
    {
      "nome": "L5056-PENHA (1285)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 66.1,
      "nps_textual": 56.3,
      "nps_hibrido": 62.3,
      "delta_hibrido": -3.9,
      "pct_pos": 70.5,
      "pct_neu": 15.3,
      "pct_neg": 14.2,
      "severidade": 30.71,
      "transacoes": 147177,
      "indice_prioridade": 63.4,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 986,
      "avaliacoes_ponderadas": 3939.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 45
        },
        {
          "cat": "Outros",
          "pct": 2
        },
        {
          "cat": "Abastecimento",
          "pct": 32
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 10
        },
        {
          "cat": "Atendimento",
          "pct": 19
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 30
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 77.9,
          "neg": 9.1
        },
        {
          "m": "2025-02",
          "pos": 70.0,
          "neg": 10.0
        },
        {
          "m": "2025-03",
          "pos": 68.8,
          "neg": 20.3
        },
        {
          "m": "2025-04",
          "pos": 77.6,
          "neg": 12.1
        },
        {
          "m": "2025-05",
          "pos": 68.1,
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
          "pos": 79.2,
          "neg": 6.9
        },
        {
          "m": "2025-09",
          "pos": 75.4,
          "neg": 15.4
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
          "neg": 17.8
        },
        {
          "m": "2026-02",
          "pos": 62.5,
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
          "neg": 32.7
        },
        {
          "m": "2026-05",
          "pos": 53.8,
          "neg": 11.5
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 16.7,
          "n": 156
        },
        "Atendimento": {
          "nps": 87.9,
          "n": 141
        },
        "Entrega & Logística": {
          "nps": 95.9,
          "n": 145
        },
        "Loja Física": {
          "nps": 57.6,
          "n": 118
        },
        "Outros": {
          "nps": 83.3,
          "n": 60
        },
        "Promoções & Fidelidade": {
          "nps": 40.4,
          "n": 366
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 155,
        "Abastecimento": 85,
        "Loja Física": 29,
        "Atendimento": 11,
        "Outros": 7,
        "Entrega & Logística": 4
      },
      "elog_counts": {
        "Promoções & Fidelidade": 211,
        "Entrega & Logística": 141,
        "Atendimento": 130,
        "Loja Física": 89,
        "Abastecimento": 71,
        "Outros": 53
      }
    },
    {
      "nome": "L5139-SBC RUDGE RAMOS",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 59.6,
      "nps_textual": 52.9,
      "nps_hibrido": 56.8,
      "delta_hibrido": -2.8,
      "pct_pos": 68.1,
      "pct_neu": 16.8,
      "pct_neg": 15.2,
      "severidade": 31.15,
      "transacoes": 133286,
      "indice_prioridade": 63.2,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 495,
      "avaliacoes_ponderadas": 2151.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 48
        },
        {
          "cat": "Atendimento",
          "pct": 7
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 36
        }
      ],
      "top_elogios": [
        {
          "cat": "Outros",
          "pct": 14
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 35
        },
        {
          "cat": "Loja Física",
          "pct": 12
        }
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
          "pos": 52.0,
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
          "pos": 64.5,
          "neg": 9.7
        },
        {
          "m": "2025-09",
          "pos": 70.0,
          "neg": 16.7
        },
        {
          "m": "2025-10",
          "pos": 70.6,
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
          "pos": 53.6,
          "neg": 32.1
        },
        {
          "m": "2026-04",
          "pos": 51.9,
          "neg": 18.5
        },
        {
          "m": "2026-05",
          "pos": 71.4,
          "neg": 7.1
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -14.1,
          "n": 78
        },
        "Atendimento": {
          "nps": 72.9,
          "n": 59
        },
        "Entrega & Logística": {
          "nps": 96.8,
          "n": 62
        },
        "Loja Física": {
          "nps": 66.7,
          "n": 51
        },
        "Outros": {
          "nps": 84.9,
          "n": 53
        },
        "Promoções & Fidelidade": {
          "nps": 47.4,
          "n": 192
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 74,
        "Abastecimento": 53,
        "Loja Física": 12,
        "Atendimento": 11,
        "Outros": 7,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 118,
        "Entrega & Logística": 61,
        "Atendimento": 48,
        "Outros": 46,
        "Loja Física": 39,
        "Abastecimento": 25
      }
    },
    {
      "nome": "L5083-BARCELONA (1347)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 60.5,
      "nps_textual": 51.9,
      "nps_hibrido": 58.3,
      "delta_hibrido": -2.2,
      "pct_pos": 68.8,
      "pct_neu": 14.2,
      "pct_neg": 17.0,
      "severidade": 30.9,
      "transacoes": 97059,
      "indice_prioridade": 63.0,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 324,
      "avaliacoes_ponderadas": 1456.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 47
        },
        {
          "cat": "Loja Física",
          "pct": 18
        },
        {
          "cat": "Abastecimento",
          "pct": 35
        }
      ],
      "top_elogios": [
        {
          "cat": "Loja Física",
          "pct": 18
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 33
        },
        {
          "cat": "Outros",
          "pct": 11
        }
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
          "neg": 5.3
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
          "pos": 60.0,
          "neg": 25.0
        },
        {
          "m": "2026-01",
          "pos": 77.8,
          "neg": 0.0
        },
        {
          "m": "2026-02",
          "pos": 77.3,
          "neg": 13.6
        },
        {
          "m": "2026-03",
          "pos": 50.0,
          "neg": 20.8
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -3.9,
          "n": 51
        },
        "Atendimento": {
          "nps": 96.6,
          "n": 29
        },
        "Entrega & Logística": {
          "nps": 92.9,
          "n": 42
        },
        "Loja Física": {
          "nps": 58.8,
          "n": 51
        },
        "Outros": {
          "nps": 100.0,
          "n": 25
        },
        "Promoções & Fidelidade": {
          "nps": 38.1,
          "n": 126
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 52,
        "Abastecimento": 34,
        "Loja Física": 11,
        "Entrega & Logística": 3,
        "Atendimento": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 74,
        "Loja Física": 40,
        "Entrega & Logística": 39,
        "Atendimento": 28,
        "Outros": 25,
        "Abastecimento": 17
      }
    },
    {
      "nome": "L5049-RIB.PRETO INDEPENDENCIA (1266)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 54.6,
      "nps_textual": 52.8,
      "nps_hibrido": 56.1,
      "delta_hibrido": 1.5,
      "pct_pos": 69.3,
      "pct_neu": 14.1,
      "pct_neg": 16.6,
      "severidade": 30.56,
      "transacoes": 59292,
      "indice_prioridade": 62.9,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 326,
      "avaliacoes_ponderadas": 1373.0,
      "top_problemas": [
        {
          "cat": "Outros",
          "pct": 7
        },
        {
          "cat": "Abastecimento",
          "pct": 41
        },
        {
          "cat": "Loja Física",
          "pct": 17
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 10
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 32
        },
        {
          "cat": "Outros",
          "pct": 11
        }
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 0.0,
          "n": 56
        },
        "Atendimento": {
          "nps": 86.8,
          "n": 38
        },
        "Entrega & Logística": {
          "nps": 97.9,
          "n": 48
        },
        "Loja Física": {
          "nps": 36.6,
          "n": 41
        },
        "Outros": {
          "nps": 67.7,
          "n": 31
        },
        "Promoções & Fidelidade": {
          "nps": 50.0,
          "n": 112
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 39,
        "Abastecimento": 34,
        "Loja Física": 17,
        "Outros": 6,
        "Atendimento": 3,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 73,
        "Entrega & Logística": 47,
        "Atendimento": 35,
        "Outros": 25,
        "Loja Física": 24,
        "Abastecimento": 22
      }
    },
    {
      "nome": "L5019-ANGELICA (0684)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 61.7,
      "nps_textual": 56.0,
      "nps_hibrido": 59.1,
      "delta_hibrido": -2.6,
      "pct_pos": 69.5,
      "pct_neu": 16.9,
      "pct_neg": 13.6,
      "severidade": 30.94,
      "transacoes": 152771,
      "indice_prioridade": 62.8,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 1031,
      "avaliacoes_ponderadas": 3824.0,
      "top_problemas": [
        {
          "cat": "Entrega & Logística",
          "pct": 3
        },
        {
          "cat": "Outros",
          "pct": 3
        },
        {
          "cat": "Loja Física",
          "pct": 24
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 11
        },
        {
          "cat": "Atendimento",
          "pct": 19
        },
        {
          "cat": "Loja Física",
          "pct": 14
        }
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
          "neg": 9.7
        },
        {
          "m": "2025-05",
          "pos": 70.3,
          "neg": 10.9
        },
        {
          "m": "2025-06",
          "pos": 69.8,
          "neg": 13.2
        },
        {
          "m": "2025-07",
          "pos": 60.9,
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
          "pos": 70.0,
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
          "neg": 15.7
        },
        {
          "m": "2026-02",
          "pos": 65.1,
          "neg": 14.0
        },
        {
          "m": "2026-03",
          "pos": 71.6,
          "neg": 11.9
        },
        {
          "m": "2026-04",
          "pos": 70.8,
          "neg": 16.9
        },
        {
          "m": "2026-05",
          "pos": 75.5,
          "neg": 7.5
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 21.3,
          "n": 155
        },
        "Atendimento": {
          "nps": 86.1,
          "n": 151
        },
        "Entrega & Logística": {
          "nps": 91.5,
          "n": 130
        },
        "Loja Física": {
          "nps": 41.4,
          "n": 162
        },
        "Outros": {
          "nps": 75.0,
          "n": 88
        },
        "Promoções & Fidelidade": {
          "nps": 47.0,
          "n": 345
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 134,
        "Abastecimento": 78,
        "Loja Física": 62,
        "Outros": 18,
        "Atendimento": 15,
        "Entrega & Logística": 7
      },
      "elog_counts": {
        "Promoções & Fidelidade": 211,
        "Atendimento": 136,
        "Entrega & Logística": 123,
        "Loja Física": 100,
        "Abastecimento": 77,
        "Outros": 70
      }
    },
    {
      "nome": "L5058-JD. BONFIGLIOLI (1291)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 65.1,
      "nps_textual": 55.8,
      "nps_hibrido": 61.5,
      "delta_hibrido": -3.7,
      "pct_pos": 69.5,
      "pct_neu": 16.9,
      "pct_neg": 13.7,
      "severidade": 30.87,
      "transacoes": 151713,
      "indice_prioridade": 62.4,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 901,
      "avaliacoes_ponderadas": 2892.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 21
        },
        {
          "cat": "Atendimento",
          "pct": 7
        },
        {
          "cat": "Outros",
          "pct": 2
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 27
        },
        {
          "cat": "Outros",
          "pct": 10
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 27
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 56.1,
          "neg": 19.5
        },
        {
          "m": "2025-02",
          "pos": 48.5,
          "neg": 30.3
        },
        {
          "m": "2025-03",
          "pos": 68.8,
          "neg": 15.6
        },
        {
          "m": "2025-04",
          "pos": 58.1,
          "neg": 20.9
        },
        {
          "m": "2025-05",
          "pos": 52.0,
          "neg": 20.0
        },
        {
          "m": "2025-06",
          "pos": 71.4,
          "neg": 12.7
        },
        {
          "m": "2025-07",
          "pos": 62.2,
          "neg": 15.6
        },
        {
          "m": "2025-08",
          "pos": 71.1,
          "neg": 10.5
        },
        {
          "m": "2025-09",
          "pos": 64.4,
          "neg": 10.2
        },
        {
          "m": "2025-10",
          "pos": 67.9,
          "neg": 15.5
        },
        {
          "m": "2025-11",
          "pos": 68.2,
          "neg": 18.2
        },
        {
          "m": "2025-12",
          "pos": 85.9,
          "neg": 5.1
        },
        {
          "m": "2026-01",
          "pos": 76.9,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 2.8,
          "n": 109
        },
        "Atendimento": {
          "nps": 86.0,
          "n": 186
        },
        "Entrega & Logística": {
          "nps": 92.6,
          "n": 122
        },
        "Loja Física": {
          "nps": 39.3,
          "n": 117
        },
        "Outros": {
          "nps": 89.4,
          "n": 66
        },
        "Promoções & Fidelidade": {
          "nps": 40.5,
          "n": 301
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 132,
        "Abastecimento": 67,
        "Loja Física": 45,
        "Atendimento": 18,
        "Entrega & Logística": 9,
        "Outros": 4
      },
      "elog_counts": {
        "Promoções & Fidelidade": 169,
        "Atendimento": 168,
        "Entrega & Logística": 113,
        "Loja Física": 72,
        "Outros": 62,
        "Abastecimento": 42
      }
    },
    {
      "nome": "L5091-NOVA CANTAREIRA (1366)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 63.6,
      "nps_textual": 52.2,
      "nps_hibrido": 57.7,
      "delta_hibrido": -5.9,
      "pct_pos": 67.6,
      "pct_neu": 17.0,
      "pct_neg": 15.4,
      "severidade": 31.28,
      "transacoes": 115112,
      "indice_prioridade": 62.2,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 423,
      "avaliacoes_ponderadas": 1733.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 9
        },
        {
          "cat": "Loja Física",
          "pct": 23
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 40
        }
      ],
      "top_elogios": [
        {
          "cat": "Loja Física",
          "pct": 15
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 33
        },
        {
          "cat": "Abastecimento",
          "pct": 10
        }
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
          "pos": 47.1,
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
          "neg": 17.6
        },
        {
          "m": "2026-02",
          "pos": 78.9,
          "neg": 10.5
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 18.2,
          "n": 66
        },
        "Atendimento": {
          "nps": 66.7,
          "n": 45
        },
        "Entrega & Logística": {
          "nps": 93.8,
          "n": 64
        },
        "Loja Física": {
          "nps": 44.6,
          "n": 65
        },
        "Outros": {
          "nps": 78.6,
          "n": 28
        },
        "Promoções & Fidelidade": {
          "nps": 43.5,
          "n": 154
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 61,
        "Abastecimento": 38,
        "Loja Física": 21,
        "Atendimento": 9,
        "Outros": 5,
        "Entrega & Logística": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 93,
        "Entrega & Logística": 61,
        "Loja Física": 44,
        "Atendimento": 36,
        "Abastecimento": 28,
        "Outros": 23
      }
    },
    {
      "nome": "L5159-COTIA KM 39",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 59.0,
      "nps_textual": 52.8,
      "nps_hibrido": 56.8,
      "delta_hibrido": -2.2,
      "pct_pos": 67.8,
      "pct_neu": 17.2,
      "pct_neg": 15.0,
      "severidade": 30.79,
      "transacoes": 126546,
      "indice_prioridade": 61.9,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 400,
      "avaliacoes_ponderadas": 1661.0,
      "top_problemas": [
        {
          "cat": "Outros",
          "pct": 5
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 55
        },
        {
          "cat": "Loja Física",
          "pct": 17
        }
      ],
      "top_elogios": [
        {
          "cat": "Loja Física",
          "pct": 19
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 35
        },
        {
          "cat": "Abastecimento",
          "pct": 8
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 80.0,
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
          "pos": 70.0,
          "neg": 10.0
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
          "neg": 18.5
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 19.2,
          "n": 52
        },
        "Atendimento": {
          "nps": 87.5,
          "n": 40
        },
        "Entrega & Logística": {
          "nps": 93.5,
          "n": 46
        },
        "Loja Física": {
          "nps": 60.9,
          "n": 69
        },
        "Outros": {
          "nps": 62.5,
          "n": 32
        },
        "Promoções & Fidelidade": {
          "nps": 37.9,
          "n": 161
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 67,
        "Abastecimento": 29,
        "Loja Física": 17,
        "Outros": 9,
        "Atendimento": 4,
        "Entrega & Logística": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 94,
        "Loja Física": 52,
        "Entrega & Logística": 43,
        "Atendimento": 36,
        "Abastecimento": 23,
        "Outros": 23
      }
    },
    {
      "nome": "L5187-MUTIRAO",
      "flag": "regular",
      "uf": "GO",
      "regiao": "GO",
      "nps_trad": 61.7,
      "nps_textual": 54.2,
      "nps_hibrido": 58.4,
      "delta_hibrido": -3.4,
      "pct_pos": 71.2,
      "pct_neu": 11.7,
      "pct_neg": 17.0,
      "severidade": 29.77,
      "transacoes": 66046,
      "indice_prioridade": 61.7,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 358,
      "avaliacoes_ponderadas": 1621.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 21
        },
        {
          "cat": "Abastecimento",
          "pct": 38
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 34
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 14
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 38
        },
        {
          "cat": "Loja Física",
          "pct": 13
        }
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
          "pos": 60.0,
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
          "pos": 77.8,
          "neg": 14.8
        },
        {
          "m": "2025-10",
          "pos": 60.9,
          "neg": 34.8
        },
        {
          "m": "2025-11",
          "pos": 68.8,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 20.0,
          "n": 65
        },
        "Atendimento": {
          "nps": 85.2,
          "n": 27
        },
        "Entrega & Logística": {
          "nps": 95.1,
          "n": 41
        },
        "Loja Física": {
          "nps": 41.2,
          "n": 51
        },
        "Outros": {
          "nps": 72.4,
          "n": 29
        },
        "Promoções & Fidelidade": {
          "nps": 53.1,
          "n": 145
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 47,
        "Abastecimento": 29,
        "Loja Física": 17,
        "Outros": 6,
        "Atendimento": 2,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 98,
        "Entrega & Logística": 39,
        "Abastecimento": 36,
        "Loja Física": 34,
        "Atendimento": 25,
        "Outros": 23
      }
    },
    {
      "nome": "L5043-PORTUGAL (1239)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 57.9,
      "nps_textual": 49.9,
      "nps_hibrido": 55.1,
      "delta_hibrido": -2.8,
      "pct_pos": 65.6,
      "pct_neu": 18.6,
      "pct_neg": 15.8,
      "severidade": 32.03,
      "transacoes": 134811,
      "indice_prioridade": 61.6,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 425,
      "avaliacoes_ponderadas": 1734.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 7
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 40
        },
        {
          "cat": "Abastecimento",
          "pct": 37
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 39
        },
        {
          "cat": "Loja Física",
          "pct": 17
        },
        {
          "cat": "Abastecimento",
          "pct": 9
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 61.8,
          "neg": 23.5
        },
        {
          "m": "2025-02",
          "pos": 76.5,
          "neg": 17.6
        },
        {
          "m": "2025-03",
          "pos": 70.4,
          "neg": 14.8
        },
        {
          "m": "2025-04",
          "pos": 71.0,
          "neg": 12.9
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
          "pos": 62.5,
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
          "pos": 59.3,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 1.4,
          "n": 70
        },
        "Atendimento": {
          "nps": 62.5,
          "n": 40
        },
        "Entrega & Logística": {
          "nps": 86.0,
          "n": 43
        },
        "Loja Física": {
          "nps": 68.9,
          "n": 61
        },
        "Outros": {
          "nps": 82.8,
          "n": 29
        },
        "Promoções & Fidelidade": {
          "nps": 45.6,
          "n": 182
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 72,
        "Abastecimento": 44,
        "Loja Física": 13,
        "Atendimento": 10,
        "Entrega & Logística": 4,
        "Outros": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 110,
        "Loja Física": 48,
        "Entrega & Logística": 39,
        "Atendimento": 30,
        "Abastecimento": 26,
        "Outros": 26
      }
    },
    {
      "nome": "L5047-SAO BERNARDO (1255)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 59.5,
      "nps_textual": 54.0,
      "nps_hibrido": 58.0,
      "delta_hibrido": -1.5,
      "pct_pos": 68.1,
      "pct_neu": 17.9,
      "pct_neg": 14.1,
      "severidade": 31.21,
      "transacoes": 159612,
      "indice_prioridade": 61.6,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 605,
      "avaliacoes_ponderadas": 2729.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 47
        },
        {
          "cat": "Loja Física",
          "pct": 16
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 31
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 39
        },
        {
          "cat": "Loja Física",
          "pct": 14
        },
        {
          "cat": "Outros",
          "pct": 10
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 66.0,
          "neg": 12.0
        },
        {
          "m": "2025-02",
          "pos": 71.4,
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
          "pos": 63.0,
          "neg": 18.5
        },
        {
          "m": "2025-06",
          "pos": 69.7,
          "neg": 12.1
        },
        {
          "m": "2025-07",
          "pos": 64.0,
          "neg": 16.0
        },
        {
          "m": "2025-08",
          "pos": 78.9,
          "neg": 5.3
        },
        {
          "m": "2025-09",
          "pos": 75.0,
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
          "neg": 14.6
        },
        {
          "m": "2026-05",
          "pos": 71.4,
          "neg": 19.0
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -6.9,
          "n": 101
        },
        "Atendimento": {
          "nps": 76.5,
          "n": 51
        },
        "Entrega & Logística": {
          "nps": 92.8,
          "n": 83
        },
        "Loja Física": {
          "nps": 54.2,
          "n": 83
        },
        "Outros": {
          "nps": 76.0,
          "n": 50
        },
        "Promoções & Fidelidade": {
          "nps": 57.0,
          "n": 237
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 76,
        "Abastecimento": 68,
        "Loja Física": 24,
        "Atendimento": 10,
        "Outros": 10,
        "Entrega & Logística": 5
      },
      "elog_counts": {
        "Promoções & Fidelidade": 161,
        "Entrega & Logística": 78,
        "Loja Física": 59,
        "Atendimento": 41,
        "Outros": 40,
        "Abastecimento": 33
      }
    },
    {
      "nome": "L5062-ASSUNCAO (1310)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 55.2,
      "nps_textual": 53.2,
      "nps_hibrido": 56.1,
      "delta_hibrido": 0.8,
      "pct_pos": 66.9,
      "pct_neu": 19.5,
      "pct_neg": 13.6,
      "severidade": 31.18,
      "transacoes": 191231,
      "indice_prioridade": 61.4,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 601,
      "avaliacoes_ponderadas": 2679.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 40
        },
        {
          "cat": "Abastecimento",
          "pct": 40
        },
        {
          "cat": "Atendimento",
          "pct": 5
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 11
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 32
        },
        {
          "cat": "Outros",
          "pct": 11
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 56.6,
          "neg": 17.0
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
          "pos": 53.3,
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
          "pos": 80.6,
          "neg": 16.1
        },
        {
          "m": "2025-09",
          "pos": 60.6,
          "neg": 18.2
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
          "pos": 76.3,
          "neg": 10.5
        },
        {
          "m": "2026-01",
          "pos": 65.6,
          "neg": 15.6
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 10.1,
          "n": 99
        },
        "Atendimento": {
          "nps": 78.3,
          "n": 69
        },
        "Entrega & Logística": {
          "nps": 96.2,
          "n": 79
        },
        "Loja Física": {
          "nps": 58.1,
          "n": 74
        },
        "Outros": {
          "nps": 80.4,
          "n": 51
        },
        "Promoções & Fidelidade": {
          "nps": 41.9,
          "n": 229
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 100,
        "Abastecimento": 56,
        "Loja Física": 22,
        "Atendimento": 11,
        "Outros": 8,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 129,
        "Entrega & Logística": 77,
        "Atendimento": 58,
        "Loja Física": 52,
        "Outros": 43,
        "Abastecimento": 43
      }
    },
    {
      "nome": "L5103-ATIBAIA (1454)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 65.1,
      "nps_textual": 55.9,
      "nps_hibrido": 62.4,
      "delta_hibrido": -2.6,
      "pct_pos": 69.3,
      "pct_neu": 17.3,
      "pct_neg": 13.4,
      "severidade": 30.78,
      "transacoes": 211565,
      "indice_prioridade": 61.2,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 910,
      "avaliacoes_ponderadas": 3326.0,
      "top_problemas": [
        {
          "cat": "Entrega & Logística",
          "pct": 5
        },
        {
          "cat": "Atendimento",
          "pct": 7
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 40
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 10
        },
        {
          "cat": "Outros",
          "pct": 12
        },
        {
          "cat": "Entrega & Logística",
          "pct": 23
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 62.3,
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
          "pos": 57.8,
          "neg": 20.3
        },
        {
          "m": "2026-01",
          "pos": 57.6,
          "neg": 20.3
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
          "pos": 63.0,
          "neg": 17.8
        },
        {
          "m": "2026-05",
          "pos": 61.3,
          "neg": 19.4
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 10.8,
          "n": 148
        },
        "Atendimento": {
          "nps": 76.7,
          "n": 120
        },
        "Entrega & Logística": {
          "nps": 89.5,
          "n": 152
        },
        "Loja Física": {
          "nps": 65.2,
          "n": 92
        },
        "Outros": {
          "nps": 86.9,
          "n": 84
        },
        "Promoções & Fidelidade": {
          "nps": 42.0,
          "n": 314
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 133,
        "Abastecimento": 84,
        "Loja Física": 21,
        "Atendimento": 20,
        "Outros": 11,
        "Entrega & Logística": 10
      },
      "elog_counts": {
        "Promoções & Fidelidade": 181,
        "Entrega & Logística": 142,
        "Atendimento": 100,
        "Outros": 73,
        "Loja Física": 71,
        "Abastecimento": 64
      }
    },
    {
      "nome": "L5088-PONTA DA PRAIA (1363)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Litoral",
      "nps_trad": 58.9,
      "nps_textual": 52.3,
      "nps_hibrido": 57.7,
      "delta_hibrido": -1.2,
      "pct_pos": 66.7,
      "pct_neu": 19.0,
      "pct_neg": 14.4,
      "severidade": 30.91,
      "transacoes": 180774,
      "indice_prioridade": 61.2,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 411,
      "avaliacoes_ponderadas": 1861.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 56
        },
        {
          "cat": "Atendimento",
          "pct": 5
        },
        {
          "cat": "Abastecimento",
          "pct": 31
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 36
        },
        {
          "cat": "Entrega & Logística",
          "pct": 23
        },
        {
          "cat": "Abastecimento",
          "pct": 9
        }
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
          "pos": 65.0,
          "neg": 15.0
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
          "pos": 74.3,
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
          "pos": 61.9,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 10.9,
          "n": 55
        },
        "Atendimento": {
          "nps": 77.8,
          "n": 45
        },
        "Entrega & Logística": {
          "nps": 91.3,
          "n": 69
        },
        "Loja Física": {
          "nps": 61.8,
          "n": 34
        },
        "Outros": {
          "nps": 65.8,
          "n": 38
        },
        "Promoções & Fidelidade": {
          "nps": 38.2,
          "n": 170
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 72,
        "Abastecimento": 31,
        "Outros": 13,
        "Loja Física": 9,
        "Atendimento": 7,
        "Entrega & Logística": 5
      },
      "elog_counts": {
        "Promoções & Fidelidade": 98,
        "Entrega & Logística": 64,
        "Atendimento": 38,
        "Loja Física": 25,
        "Outros": 25,
        "Abastecimento": 24
      }
    },
    {
      "nome": "L5209-ITABERABA",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 64.2,
      "nps_textual": 56.7,
      "nps_hibrido": 62.1,
      "delta_hibrido": -2.1,
      "pct_pos": 71.0,
      "pct_neu": 14.7,
      "pct_neg": 14.3,
      "severidade": 30.35,
      "transacoes": 135989,
      "indice_prioridade": 60.7,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 762,
      "avaliacoes_ponderadas": 3227.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 32
        },
        {
          "cat": "Abastecimento",
          "pct": 36
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 27
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 13
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 33
        },
        {
          "cat": "Loja Física",
          "pct": 13
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 66.7,
          "neg": 17.9
        },
        {
          "m": "2025-02",
          "pos": 64.7,
          "neg": 20.6
        },
        {
          "m": "2025-03",
          "pos": 64.1,
          "neg": 12.8
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
          "pos": 77.4,
          "neg": 7.5
        },
        {
          "m": "2025-07",
          "pos": 67.7,
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
          "pos": 75.0,
          "neg": 10.4
        },
        {
          "m": "2026-02",
          "pos": 66.7,
          "neg": 20.5
        },
        {
          "m": "2026-03",
          "pos": 70.0,
          "neg": 12.0
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 20.4,
          "n": 152
        },
        "Atendimento": {
          "nps": 90.3,
          "n": 72
        },
        "Entrega & Logística": {
          "nps": 95.4,
          "n": 108
        },
        "Loja Física": {
          "nps": 30.4,
          "n": 125
        },
        "Outros": {
          "nps": 88.7,
          "n": 53
        },
        "Promoções & Fidelidade": {
          "nps": 58.7,
          "n": 252
        }
      },
      "prob_counts": {
        "Abastecimento": 82,
        "Promoções & Fidelidade": 75,
        "Loja Física": 52,
        "Atendimento": 5,
        "Outros": 4,
        "Entrega & Logística": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 177,
        "Entrega & Logística": 105,
        "Loja Física": 73,
        "Abastecimento": 70,
        "Atendimento": 67,
        "Outros": 49
      }
    },
    {
      "nome": "L5097-JUNDIAI (1404)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 59.4,
      "nps_textual": 51.2,
      "nps_hibrido": 56.4,
      "delta_hibrido": -3.0,
      "pct_pos": 65.3,
      "pct_neu": 20.6,
      "pct_neg": 14.1,
      "severidade": 32.12,
      "transacoes": 101808,
      "indice_prioridade": 60.5,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 603,
      "avaliacoes_ponderadas": 2197.0,
      "top_problemas": [
        {
          "cat": "Outros",
          "pct": 6
        },
        {
          "cat": "Abastecimento",
          "pct": 39
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 38
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 21
        },
        {
          "cat": "Loja Física",
          "pct": 15
        },
        {
          "cat": "Abastecimento",
          "pct": 9
        }
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
          "pos": 51.2,
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
          "pos": 63.3,
          "neg": 13.3
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
          "pos": 79.5,
          "neg": 7.7
        },
        {
          "m": "2025-10",
          "pos": 82.1,
          "neg": 7.7
        },
        {
          "m": "2025-11",
          "pos": 61.5,
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
          "pos": 75.8,
          "neg": 12.1
        },
        {
          "m": "2026-03",
          "pos": 68.1,
          "neg": 10.6
        },
        {
          "m": "2026-04",
          "pos": 46.7,
          "neg": 17.8
        },
        {
          "m": "2026-05",
          "pos": 74.1,
          "neg": 3.7
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 2.9,
          "n": 105
        },
        "Atendimento": {
          "nps": 80.6,
          "n": 98
        },
        "Entrega & Logística": {
          "nps": 93.4,
          "n": 61
        },
        "Loja Física": {
          "nps": 56.3,
          "n": 87
        },
        "Outros": {
          "nps": 73.5,
          "n": 49
        },
        "Promoções & Fidelidade": {
          "nps": 41.9,
          "n": 203
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 86,
        "Abastecimento": 69,
        "Loja Física": 27,
        "Atendimento": 15,
        "Outros": 8,
        "Entrega & Logística": 4
      },
      "elog_counts": {
        "Promoções & Fidelidade": 117,
        "Atendimento": 83,
        "Loja Física": 60,
        "Entrega & Logística": 57,
        "Outros": 41,
        "Abastecimento": 36
      }
    },
    {
      "nome": "L5092-VILA AUGUSTA (1374)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 59.1,
      "nps_textual": 53.2,
      "nps_hibrido": 56.9,
      "delta_hibrido": -2.2,
      "pct_pos": 67.7,
      "pct_neu": 17.9,
      "pct_neg": 14.5,
      "severidade": 31.11,
      "transacoes": 120848,
      "indice_prioridade": 60.3,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 504,
      "avaliacoes_ponderadas": 1883.0,
      "top_problemas": [
        {
          "cat": "Outros",
          "pct": 4
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 52
        },
        {
          "cat": "Abastecimento",
          "pct": 26
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 26
        },
        {
          "cat": "Outros",
          "pct": 13
        },
        {
          "cat": "Abastecimento",
          "pct": 9
        }
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
          "neg": 3.4
        },
        {
          "m": "2025-05",
          "pos": 52.9,
          "neg": 23.5
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
          "pos": 83.7,
          "neg": 4.1
        },
        {
          "m": "2025-10",
          "pos": 89.1,
          "neg": 4.3
        },
        {
          "m": "2025-11",
          "pos": 77.5,
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
          "neg": 9.6
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 16.7,
          "n": 78
        },
        "Atendimento": {
          "nps": 84.8,
          "n": 99
        },
        "Entrega & Logística": {
          "nps": 93.7,
          "n": 63
        },
        "Loja Física": {
          "nps": 51.9,
          "n": 52
        },
        "Outros": {
          "nps": 75.9,
          "n": 54
        },
        "Promoções & Fidelidade": {
          "nps": 27.8,
          "n": 158
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 76,
        "Abastecimento": 46,
        "Loja Física": 16,
        "Atendimento": 12,
        "Outros": 10,
        "Entrega & Logística": 3
      },
      "elog_counts": {
        "Atendimento": 87,
        "Promoções & Fidelidade": 82,
        "Entrega & Logística": 60,
        "Outros": 44,
        "Loja Física": 36,
        "Abastecimento": 32
      }
    },
    {
      "nome": "L5072-SERRA DE JAPI (1330)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 63.5,
      "nps_textual": 56.1,
      "nps_hibrido": 58.2,
      "delta_hibrido": -5.3,
      "pct_pos": 71.0,
      "pct_neu": 14.1,
      "pct_neg": 14.9,
      "severidade": 29.79,
      "transacoes": 115606,
      "indice_prioridade": 59.9,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 510,
      "avaliacoes_ponderadas": 2129.0,
      "top_problemas": [
        {
          "cat": "Outros",
          "pct": 4
        },
        {
          "cat": "Loja Física",
          "pct": 21
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 37
        }
      ],
      "top_elogios": [
        {
          "cat": "Entrega & Logística",
          "pct": 24
        },
        {
          "cat": "Outros",
          "pct": 11
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 32
        }
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
          "pos": 45.9,
          "neg": 27.0
        },
        {
          "m": "2026-05",
          "pos": 80.0,
          "neg": 10.0
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 8.9,
          "n": 79
        },
        "Atendimento": {
          "nps": 89.2,
          "n": 65
        },
        "Entrega & Logística": {
          "nps": 97.7,
          "n": 88
        },
        "Loja Física": {
          "nps": 23.9,
          "n": 46
        },
        "Outros": {
          "nps": 82.2,
          "n": 45
        },
        "Promoções & Fidelidade": {
          "nps": 46.5,
          "n": 187
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 72,
        "Abastecimento": 45,
        "Loja Física": 19,
        "Outros": 5,
        "Atendimento": 5,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 115,
        "Entrega & Logística": 86,
        "Atendimento": 60,
        "Outros": 40,
        "Abastecimento": 34,
        "Loja Física": 27
      }
    },
    {
      "nome": "L5001-RIBEIRAO PRETO (0217)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 61.9,
      "nps_textual": 56.1,
      "nps_hibrido": 60.5,
      "delta_hibrido": -1.4,
      "pct_pos": 69.9,
      "pct_neu": 16.2,
      "pct_neg": 13.8,
      "severidade": 30.81,
      "transacoes": 160501,
      "indice_prioridade": 59.7,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 585,
      "avaliacoes_ponderadas": 2825.0,
      "top_problemas": [
        {
          "cat": "Entrega & Logística",
          "pct": 5
        },
        {
          "cat": "Outros",
          "pct": 4
        },
        {
          "cat": "Abastecimento",
          "pct": 37
        }
      ],
      "top_elogios": [
        {
          "cat": "Outros",
          "pct": 13
        },
        {
          "cat": "Abastecimento",
          "pct": 11
        },
        {
          "cat": "Loja Física",
          "pct": 15
        }
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
          "pos": 78.0,
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
          "neg": 3.6
        },
        {
          "m": "2025-09",
          "pos": 51.6,
          "neg": 32.3
        },
        {
          "m": "2025-10",
          "pos": 73.9,
          "neg": 13.0
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
          "pos": 63.4,
          "neg": 19.5
        },
        {
          "m": "2026-02",
          "pos": 74.5,
          "neg": 12.8
        },
        {
          "m": "2026-03",
          "pos": 77.1,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 13.7,
          "n": 95
        },
        "Atendimento": {
          "nps": 83.6,
          "n": 55
        },
        "Entrega & Logística": {
          "nps": 86.4,
          "n": 88
        },
        "Loja Física": {
          "nps": 58.5,
          "n": 82
        },
        "Outros": {
          "nps": 77.8,
          "n": 63
        },
        "Promoções & Fidelidade": {
          "nps": 47.5,
          "n": 202
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 78,
        "Abastecimento": 52,
        "Loja Física": 21,
        "Outros": 11,
        "Entrega & Logística": 8,
        "Atendimento": 6
      },
      "elog_counts": {
        "Promoções & Fidelidade": 124,
        "Entrega & Logística": 80,
        "Loja Física": 61,
        "Outros": 52,
        "Atendimento": 49,
        "Abastecimento": 43
      }
    },
    {
      "nome": "L5093-PERDIZES 2 (1376)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 61.2,
      "nps_textual": 55.8,
      "nps_hibrido": 58.6,
      "delta_hibrido": -2.6,
      "pct_pos": 69.6,
      "pct_neu": 16.7,
      "pct_neg": 13.7,
      "severidade": 30.17,
      "transacoes": 107415,
      "indice_prioridade": 59.5,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 539,
      "avaliacoes_ponderadas": 1604.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 35
        },
        {
          "cat": "Abastecimento",
          "pct": 31
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 26
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 28
        },
        {
          "cat": "Entrega & Logística",
          "pct": 23
        },
        {
          "cat": "Loja Física",
          "pct": 12
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 59.1,
          "neg": 13.6
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
          "neg": 13.0
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
          "pos": 59.5,
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
          "neg": 19.0
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
          "pos": 72.1,
          "neg": 11.5
        },
        {
          "m": "2026-04",
          "pos": 78.3,
          "neg": 8.7
        },
        {
          "m": "2026-05",
          "pos": 65.0,
          "neg": 15.0
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 4.6,
          "n": 65
        },
        "Atendimento": {
          "nps": 89.4,
          "n": 113
        },
        "Entrega & Logística": {
          "nps": 94.5,
          "n": 91
        },
        "Loja Física": {
          "nps": 23.3,
          "n": 86
        },
        "Outros": {
          "nps": 72.7,
          "n": 44
        },
        "Promoções & Fidelidade": {
          "nps": 42.1,
          "n": 140
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 62,
        "Loja Física": 40,
        "Abastecimento": 39,
        "Outros": 10,
        "Atendimento": 9,
        "Entrega & Logística": 4
      },
      "elog_counts": {
        "Atendimento": 104,
        "Entrega & Logística": 87,
        "Promoções & Fidelidade": 78,
        "Loja Física": 46,
        "Outros": 34,
        "Abastecimento": 26
      }
    },
    {
      "nome": "L5252-14 DE DEZEMBRO",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 63.2,
      "nps_textual": 55.5,
      "nps_hibrido": 60.9,
      "delta_hibrido": -2.3,
      "pct_pos": 69.0,
      "pct_neu": 17.5,
      "pct_neg": 13.5,
      "severidade": 30.4,
      "transacoes": 114373,
      "indice_prioridade": 59.2,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 555,
      "avaliacoes_ponderadas": 2544.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 19
        },
        {
          "cat": "Outros",
          "pct": 4
        },
        {
          "cat": "Loja Física",
          "pct": 17
        }
      ],
      "top_elogios": [
        {
          "cat": "Loja Física",
          "pct": 16
        },
        {
          "cat": "Entrega & Logística",
          "pct": 23
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 32
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 69.0,
          "neg": 10.3
        },
        {
          "m": "2025-02",
          "pos": 67.7,
          "neg": 19.4
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
          "neg": 12.5
        },
        {
          "m": "2025-09",
          "pos": 73.3,
          "neg": 16.7
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
          "pos": 63.0,
          "neg": 16.7
        },
        {
          "m": "2026-01",
          "pos": 67.9,
          "neg": 10.7
        },
        {
          "m": "2026-02",
          "pos": 73.8,
          "neg": 11.9
        },
        {
          "m": "2026-03",
          "pos": 57.9,
          "neg": 15.8
        },
        {
          "m": "2026-04",
          "pos": 69.2,
          "neg": 12.8
        },
        {
          "m": "2026-05",
          "pos": 75.0,
          "neg": 15.6
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 13.3,
          "n": 83
        },
        "Atendimento": {
          "nps": 41.3,
          "n": 63
        },
        "Entrega & Logística": {
          "nps": 93.6,
          "n": 94
        },
        "Loja Física": {
          "nps": 58.1,
          "n": 86
        },
        "Outros": {
          "nps": 78.9,
          "n": 38
        },
        "Promoções & Fidelidade": {
          "nps": 53.9,
          "n": 191
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 70,
        "Abastecimento": 47,
        "Atendimento": 23,
        "Loja Física": 23,
        "Outros": 5,
        "Entrega & Logística": 4
      },
      "elog_counts": {
        "Promoções & Fidelidade": 121,
        "Entrega & Logística": 90,
        "Loja Física": 63,
        "Atendimento": 40,
        "Abastecimento": 36,
        "Outros": 33
      }
    },
    {
      "nome": "L5266-MATEO BEI",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 63.9,
      "nps_textual": 56.6,
      "nps_hibrido": 62.0,
      "delta_hibrido": -2.0,
      "pct_pos": 70.8,
      "pct_neu": 15.0,
      "pct_neg": 14.2,
      "severidade": 30.1,
      "transacoes": 119178,
      "indice_prioridade": 59.0,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 613,
      "avaliacoes_ponderadas": 2659.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 9
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 38
        },
        {
          "cat": "Abastecimento",
          "pct": 34
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 12
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 33
        },
        {
          "cat": "Entrega & Logística",
          "pct": 24
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 65.9,
          "neg": 27.3
        },
        {
          "m": "2025-02",
          "pos": 82.1,
          "neg": 15.4
        },
        {
          "m": "2025-03",
          "pos": 71.1,
          "neg": 5.3
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
          "pos": 61.8,
          "neg": 26.5
        },
        {
          "m": "2026-05",
          "pos": 47.6,
          "neg": 28.6
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 18.0,
          "n": 111
        },
        "Atendimento": {
          "nps": 60.0,
          "n": 60
        },
        "Entrega & Logística": {
          "nps": 94.4,
          "n": 108
        },
        "Loja Física": {
          "nps": 51.2,
          "n": 84
        },
        "Outros": {
          "nps": 92.5,
          "n": 40
        },
        "Promoções & Fidelidade": {
          "nps": 51.9,
          "n": 210
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 68,
        "Abastecimento": 61,
        "Loja Física": 26,
        "Atendimento": 16,
        "Entrega & Logística": 5,
        "Outros": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 142,
        "Entrega & Logística": 103,
        "Loja Física": 58,
        "Abastecimento": 50,
        "Atendimento": 44,
        "Outros": 37
      }
    },
    {
      "nome": "L5004-CAMPO BELO (0448)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 63.8,
      "nps_textual": 56.2,
      "nps_hibrido": 58.8,
      "delta_hibrido": -5.1,
      "pct_pos": 70.8,
      "pct_neu": 14.6,
      "pct_neg": 14.6,
      "severidade": 29.6,
      "transacoes": 108672,
      "indice_prioridade": 58.9,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 514,
      "avaliacoes_ponderadas": 1767.0,
      "top_problemas": [
        {
          "cat": "Entrega & Logística",
          "pct": 4
        },
        {
          "cat": "Outros",
          "pct": 4
        },
        {
          "cat": "Loja Física",
          "pct": 32
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 23
        },
        {
          "cat": "Abastecimento",
          "pct": 10
        },
        {
          "cat": "Outros",
          "pct": 11
        }
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
          "pos": 66.7,
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
          "pos": 74.0,
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
          "neg": 13.5
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 22.9,
          "n": 70
        },
        "Atendimento": {
          "nps": 88.9,
          "n": 90
        },
        "Entrega & Logística": {
          "nps": 88.6,
          "n": 70
        },
        "Loja Física": {
          "nps": 30.3,
          "n": 89
        },
        "Outros": {
          "nps": 80.0,
          "n": 45
        },
        "Promoções & Fidelidade": {
          "nps": 45.3,
          "n": 150
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 60,
        "Loja Física": 38,
        "Abastecimento": 33,
        "Atendimento": 8,
        "Outros": 6,
        "Entrega & Logística": 5
      },
      "elog_counts": {
        "Promoções & Fidelidade": 90,
        "Atendimento": 82,
        "Entrega & Logística": 65,
        "Loja Física": 51,
        "Outros": 39,
        "Abastecimento": 37
      }
    },
    {
      "nome": "L5178-PERIMETRAL",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 63.9,
      "nps_textual": 54.9,
      "nps_hibrido": 61.1,
      "delta_hibrido": -2.8,
      "pct_pos": 68.0,
      "pct_neu": 18.9,
      "pct_neg": 13.1,
      "severidade": 30.56,
      "transacoes": 126171,
      "indice_prioridade": 58.8,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 610,
      "avaliacoes_ponderadas": 2996.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 48
        },
        {
          "cat": "Loja Física",
          "pct": 19
        },
        {
          "cat": "Abastecimento",
          "pct": 31
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 33
        },
        {
          "cat": "Loja Física",
          "pct": 15
        },
        {
          "cat": "Abastecimento",
          "pct": 10
        }
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
          "neg": 8.3
        },
        {
          "m": "2025-05",
          "pos": 70.0,
          "neg": 20.0
        },
        {
          "m": "2025-06",
          "pos": 65.7,
          "neg": 20.0
        },
        {
          "m": "2025-07",
          "pos": 78.6,
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
          "neg": 11.1
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 16.3,
          "n": 92
        },
        "Atendimento": {
          "nps": 92.8,
          "n": 69
        },
        "Entrega & Logística": {
          "nps": 93.2,
          "n": 74
        },
        "Loja Física": {
          "nps": 52.3,
          "n": 88
        },
        "Outros": {
          "nps": 83.3,
          "n": 48
        },
        "Promoções & Fidelidade": {
          "nps": 42.3,
          "n": 239
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 100,
        "Abastecimento": 52,
        "Loja Física": 27,
        "Outros": 7,
        "Entrega & Logística": 5,
        "Atendimento": 4
      },
      "elog_counts": {
        "Promoções & Fidelidade": 139,
        "Entrega & Logística": 69,
        "Atendimento": 65,
        "Loja Física": 61,
        "Outros": 41,
        "Abastecimento": 40
      }
    },
    {
      "nome": "L5273-MORRO GRANDE",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 63.2,
      "nps_textual": 53.3,
      "nps_hibrido": 56.4,
      "delta_hibrido": -6.9,
      "pct_pos": 67.7,
      "pct_neu": 17.9,
      "pct_neg": 14.4,
      "severidade": 30.55,
      "transacoes": 99366,
      "indice_prioridade": 58.7,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 291,
      "avaliacoes_ponderadas": 1335.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 26
        },
        {
          "cat": "Atendimento",
          "pct": 7
        },
        {
          "cat": "Abastecimento",
          "pct": 40
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 13
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 31
        },
        {
          "cat": "Loja Física",
          "pct": 14
        }
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
          "pos": 66.7,
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
          "pos": 64.7,
          "neg": 5.9
        },
        {
          "m": "2025-09",
          "pos": 62.5,
          "neg": 20.8
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
          "neg": 14.3
        },
        {
          "m": "2026-03",
          "pos": 65.0,
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
          "neg": 11.1
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 13.6,
          "n": 59
        },
        "Atendimento": {
          "nps": 77.8,
          "n": 36
        },
        "Entrega & Logística": {
          "nps": 94.3,
          "n": 35
        },
        "Loja Física": {
          "nps": 40.5,
          "n": 42
        },
        "Outros": {
          "nps": 85.7,
          "n": 21
        },
        "Promoções & Fidelidade": {
          "nps": 52.0,
          "n": 98
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 36,
        "Abastecimento": 34,
        "Loja Física": 14,
        "Atendimento": 5,
        "Outros": 3,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 62,
        "Entrega & Logística": 33,
        "Atendimento": 31,
        "Loja Física": 28,
        "Abastecimento": 25,
        "Outros": 18
      }
    },
    {
      "nome": "L5046-VILA CARRAO (1248)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 61.2,
      "nps_textual": 55.5,
      "nps_hibrido": 58.6,
      "delta_hibrido": -2.6,
      "pct_pos": 68.7,
      "pct_neu": 18.1,
      "pct_neg": 13.2,
      "severidade": 30.46,
      "transacoes": 136427,
      "indice_prioridade": 58.6,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 546,
      "avaliacoes_ponderadas": 2329.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 7
        },
        {
          "cat": "Abastecimento",
          "pct": 42
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 35
        }
      ],
      "top_elogios": [
        {
          "cat": "Outros",
          "pct": 13
        },
        {
          "cat": "Abastecimento",
          "pct": 11
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 35
        }
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
          "pos": 60.0,
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
          "pos": 70.6,
          "neg": 11.8
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 10.0,
          "n": 100
        },
        "Atendimento": {
          "nps": 69.4,
          "n": 36
        },
        "Entrega & Logística": {
          "nps": 92.1,
          "n": 76
        },
        "Loja Física": {
          "nps": 65.2,
          "n": 69
        },
        "Outros": {
          "nps": 80.0,
          "n": 60
        },
        "Promoções & Fidelidade": {
          "nps": 51.2,
          "n": 205
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 75,
        "Abastecimento": 60,
        "Loja Física": 15,
        "Outros": 11,
        "Atendimento": 6,
        "Entrega & Logística": 4
      },
      "elog_counts": {
        "Promoções & Fidelidade": 130,
        "Entrega & Logística": 72,
        "Loja Física": 54,
        "Outros": 49,
        "Abastecimento": 40,
        "Atendimento": 30
      }
    },
    {
      "nome": "L5042-IPIRANGA (1237)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 62.5,
      "nps_textual": 59.0,
      "nps_hibrido": 60.7,
      "delta_hibrido": -1.8,
      "pct_pos": 71.9,
      "pct_neu": 15.2,
      "pct_neg": 12.9,
      "severidade": 29.25,
      "transacoes": 162529,
      "indice_prioridade": 58.6,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 659,
      "avaliacoes_ponderadas": 2458.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 11
        },
        {
          "cat": "Abastecimento",
          "pct": 41
        },
        {
          "cat": "Loja Física",
          "pct": 16
        }
      ],
      "top_elogios": [
        {
          "cat": "Outros",
          "pct": 12
        },
        {
          "cat": "Loja Física",
          "pct": 14
        },
        {
          "cat": "Abastecimento",
          "pct": 9
        }
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
          "pos": 70.4,
          "neg": 11.1
        },
        {
          "m": "2025-04",
          "pos": 73.8,
          "neg": 14.3
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
          "neg": 12.8
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
          "pos": 66.7,
          "neg": 15.6
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 7.5,
          "n": 106
        },
        "Atendimento": {
          "nps": 74.2,
          "n": 89
        },
        "Entrega & Logística": {
          "nps": 97.8,
          "n": 91
        },
        "Loja Física": {
          "nps": 55.7,
          "n": 97
        },
        "Outros": {
          "nps": 96.6,
          "n": 59
        },
        "Promoções & Fidelidade": {
          "nps": 53.0,
          "n": 217
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 75,
        "Abastecimento": 63,
        "Loja Física": 29,
        "Atendimento": 14,
        "Outros": 2,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 142,
        "Entrega & Logística": 89,
        "Atendimento": 75,
        "Loja Física": 68,
        "Outros": 57,
        "Abastecimento": 43
      }
    },
    {
      "nome": "L5025-PANAMBY (0817)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 61.5,
      "nps_textual": 56.8,
      "nps_hibrido": 59.4,
      "delta_hibrido": -2.1,
      "pct_pos": 70.1,
      "pct_neu": 16.5,
      "pct_neg": 13.3,
      "severidade": 29.89,
      "transacoes": 117609,
      "indice_prioridade": 58.3,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 623,
      "avaliacoes_ponderadas": 2234.0,
      "top_problemas": [
        {
          "cat": "Outros",
          "pct": 6
        },
        {
          "cat": "Loja Física",
          "pct": 24
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 35
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 24
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 28
        },
        {
          "cat": "Loja Física",
          "pct": 12
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 66.1,
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
          "neg": 12.5
        },
        {
          "m": "2025-05",
          "pos": 74.4,
          "neg": 12.8
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
          "pos": 65.7,
          "neg": 17.1
        },
        {
          "m": "2025-09",
          "pos": 77.4,
          "neg": 9.7
        },
        {
          "m": "2025-10",
          "pos": 70.0,
          "neg": 20.0
        },
        {
          "m": "2025-11",
          "pos": 75.0,
          "neg": 8.3
        },
        {
          "m": "2025-12",
          "pos": 64.0,
          "neg": 20.0
        },
        {
          "m": "2026-01",
          "pos": 73.9,
          "neg": 15.2
        },
        {
          "m": "2026-02",
          "pos": 68.4,
          "neg": 13.2
        },
        {
          "m": "2026-03",
          "pos": 83.0,
          "neg": 4.3
        },
        {
          "m": "2026-04",
          "pos": 78.4,
          "neg": 5.9
        },
        {
          "m": "2026-05",
          "pos": 69.0,
          "neg": 6.9
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 7.9,
          "n": 76
        },
        "Atendimento": {
          "nps": 89.7,
          "n": 116
        },
        "Entrega & Logística": {
          "nps": 96.4,
          "n": 84
        },
        "Loja Física": {
          "nps": 35.8,
          "n": 95
        },
        "Outros": {
          "nps": 70.0,
          "n": 50
        },
        "Promoções & Fidelidade": {
          "nps": 46.5,
          "n": 202
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 79,
        "Abastecimento": 44,
        "Loja Física": 41,
        "Outros": 10,
        "Atendimento": 9,
        "Entrega & Logística": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 123,
        "Atendimento": 107,
        "Entrega & Logística": 81,
        "Loja Física": 54,
        "Outros": 40,
        "Abastecimento": 32
      }
    },
    {
      "nome": "L5109-SANTOS POMPEIA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Litoral",
      "nps_trad": 58.4,
      "nps_textual": 59.0,
      "nps_hibrido": 60.0,
      "delta_hibrido": 1.5,
      "pct_pos": 71.2,
      "pct_neu": 16.5,
      "pct_neg": 12.3,
      "severidade": 29.64,
      "transacoes": 157166,
      "indice_prioridade": 58.3,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 782,
      "avaliacoes_ponderadas": 2739.0,
      "top_problemas": [
        {
          "cat": "Entrega & Logística",
          "pct": 5
        },
        {
          "cat": "Atendimento",
          "pct": 9
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 44
        }
      ],
      "top_elogios": [
        {
          "cat": "Entrega & Logística",
          "pct": 27
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 30
        },
        {
          "cat": "Outros",
          "pct": 10
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 47.4,
          "neg": 28.1
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
          "pos": 64.2,
          "neg": 5.7
        },
        {
          "m": "2025-05",
          "pos": 90.2,
          "neg": 2.0
        },
        {
          "m": "2025-06",
          "pos": 87.2,
          "neg": 8.5
        },
        {
          "m": "2025-07",
          "pos": 76.0,
          "neg": 12.0
        },
        {
          "m": "2025-08",
          "pos": 76.2,
          "neg": 7.1
        },
        {
          "m": "2025-09",
          "pos": 72.9,
          "neg": 18.8
        },
        {
          "m": "2025-10",
          "pos": 75.6,
          "neg": 12.2
        },
        {
          "m": "2025-11",
          "pos": 79.3,
          "neg": 3.4
        },
        {
          "m": "2025-12",
          "pos": 76.6,
          "neg": 12.8
        },
        {
          "m": "2026-01",
          "pos": 62.8,
          "neg": 17.0
        },
        {
          "m": "2026-02",
          "pos": 72.1,
          "neg": 7.0
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 10.0,
          "n": 100
        },
        "Atendimento": {
          "nps": 72.2,
          "n": 97
        },
        "Entrega & Logística": {
          "nps": 90.6,
          "n": 159
        },
        "Loja Física": {
          "nps": 70.0,
          "n": 80
        },
        "Outros": {
          "nps": 87.3,
          "n": 63
        },
        "Promoções & Fidelidade": {
          "nps": 44.5,
          "n": 283
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 115,
        "Abastecimento": 59,
        "Atendimento": 18,
        "Loja Física": 17,
        "Entrega & Logística": 10,
        "Outros": 6
      },
      "elog_counts": {
        "Promoções & Fidelidade": 168,
        "Entrega & Logística": 149,
        "Atendimento": 79,
        "Loja Física": 63,
        "Outros": 57,
        "Abastecimento": 41
      }
    },
    {
      "nome": "L5245-MAUA 2",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 67.1,
      "nps_textual": 57.6,
      "nps_hibrido": 62.9,
      "delta_hibrido": -4.2,
      "pct_pos": 72.1,
      "pct_neu": 13.5,
      "pct_neg": 14.5,
      "severidade": 29.16,
      "transacoes": 142576,
      "indice_prioridade": 58.3,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 498,
      "avaliacoes_ponderadas": 2551.0,
      "top_problemas": [
        {
          "cat": "Entrega & Logística",
          "pct": 6
        },
        {
          "cat": "Atendimento",
          "pct": 7
        },
        {
          "cat": "Abastecimento",
          "pct": 36
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 36
        },
        {
          "cat": "Abastecimento",
          "pct": 10
        },
        {
          "cat": "Entrega & Logística",
          "pct": 22
        }
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
          "pos": 63.3,
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
          "pos": 69.8,
          "neg": 14.0
        },
        {
          "m": "2025-07",
          "pos": 70.4,
          "neg": 14.8
        },
        {
          "m": "2025-08",
          "pos": 66.7,
          "neg": 15.4
        },
        {
          "m": "2025-09",
          "pos": 71.4,
          "neg": 10.7
        },
        {
          "m": "2025-10",
          "pos": 71.0,
          "neg": 16.1
        },
        {
          "m": "2025-11",
          "pos": 79.2,
          "neg": 12.5
        },
        {
          "m": "2025-12",
          "pos": 69.7,
          "neg": 21.2
        },
        {
          "m": "2026-01",
          "pos": 86.7,
          "neg": 13.3
        },
        {
          "m": "2026-02",
          "pos": 92.3,
          "neg": 0.0
        },
        {
          "m": "2026-03",
          "pos": 75.0,
          "neg": 19.4
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 11.5,
          "n": 78
        },
        "Atendimento": {
          "nps": 66.1,
          "n": 56
        },
        "Entrega & Logística": {
          "nps": 89.4,
          "n": 85
        },
        "Loja Física": {
          "nps": 50.0,
          "n": 56
        },
        "Outros": {
          "nps": 79.1,
          "n": 43
        },
        "Promoções & Fidelidade": {
          "nps": 57.2,
          "n": 180
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 52,
        "Abastecimento": 43,
        "Loja Física": 17,
        "Atendimento": 14,
        "Outros": 8,
        "Entrega & Logística": 5
      },
      "elog_counts": {
        "Promoções & Fidelidade": 128,
        "Entrega & Logística": 80,
        "Atendimento": 42,
        "Loja Física": 39,
        "Outros": 35,
        "Abastecimento": 35
      }
    },
    {
      "nome": "L5114-106 ASA SUL",
      "flag": "regular",
      "uf": "DF",
      "regiao": "DF",
      "nps_trad": 55.7,
      "nps_textual": 52.2,
      "nps_hibrido": 53.5,
      "delta_hibrido": -2.2,
      "pct_pos": 65.9,
      "pct_neu": 20.3,
      "pct_neg": 13.8,
      "severidade": 31.09,
      "transacoes": 69937,
      "indice_prioridade": 58.2,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 370,
      "avaliacoes_ponderadas": 1521.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 10
        },
        {
          "cat": "Abastecimento",
          "pct": 45
        },
        {
          "cat": "Loja Física",
          "pct": 20
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 12
        },
        {
          "cat": "Outros",
          "pct": 12
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 33
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 68.2,
          "neg": 4.5
        },
        {
          "m": "2025-02",
          "pos": 52.0,
          "neg": 16.0
        },
        {
          "m": "2025-03",
          "pos": 68.2,
          "neg": 13.6
        },
        {
          "m": "2025-04",
          "pos": 68.2,
          "neg": 18.2
        },
        {
          "m": "2025-05",
          "pos": 67.7,
          "neg": 6.5
        },
        {
          "m": "2025-06",
          "pos": 64.5,
          "neg": 6.5
        },
        {
          "m": "2025-07",
          "pos": 70.8,
          "neg": 16.7
        },
        {
          "m": "2025-08",
          "pos": 61.9,
          "neg": 19.0
        },
        {
          "m": "2025-09",
          "pos": 73.1,
          "neg": 15.4
        },
        {
          "m": "2025-10",
          "pos": 69.2,
          "neg": 7.7
        },
        {
          "m": "2025-11",
          "pos": 72.7,
          "neg": 0.0
        },
        {
          "m": "2025-12",
          "pos": 68.4,
          "neg": 21.1
        },
        {
          "m": "2026-01",
          "pos": 62.5,
          "neg": 25.0
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 10.4,
          "n": 67
        },
        "Atendimento": {
          "nps": 66.7,
          "n": 36
        },
        "Entrega & Logística": {
          "nps": 91.5,
          "n": 47
        },
        "Loja Física": {
          "nps": 42.9,
          "n": 49
        },
        "Outros": {
          "nps": 71.1,
          "n": 38
        },
        "Promoções & Fidelidade": {
          "nps": 53.4,
          "n": 133
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 52,
        "Abastecimento": 37,
        "Loja Física": 18,
        "Outros": 9,
        "Atendimento": 7,
        "Entrega & Logística": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 81,
        "Entrega & Logística": 44,
        "Loja Física": 31,
        "Abastecimento": 30,
        "Atendimento": 29,
        "Outros": 29
      }
    },
    {
      "nome": "L5044-INDAIATUBA (1243)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 58.6,
      "nps_textual": 57.4,
      "nps_hibrido": 57.1,
      "delta_hibrido": -1.5,
      "pct_pos": 71.2,
      "pct_neu": 15.0,
      "pct_neg": 13.8,
      "severidade": 29.08,
      "transacoes": 124392,
      "indice_prioridade": 58.0,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 333,
      "avaliacoes_ponderadas": 1735.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 7
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 37
        },
        {
          "cat": "Abastecimento",
          "pct": 35
        }
      ],
      "top_elogios": [
        {
          "cat": "Outros",
          "pct": 11
        },
        {
          "cat": "Entrega & Logística",
          "pct": 23
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 30
        }
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
          "pos": 70.8,
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
          "pos": 76.2,
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
          "pos": 56.2,
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
          "pos": 56.0,
          "neg": 24.0
        },
        {
          "m": "2026-05",
          "pos": 70.6,
          "neg": 11.8
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 6.1,
          "n": 49
        },
        "Atendimento": {
          "nps": 72.7,
          "n": 44
        },
        "Entrega & Logística": {
          "nps": 89.8,
          "n": 59
        },
        "Loja Física": {
          "nps": 51.2,
          "n": 41
        },
        "Outros": {
          "nps": 81.2,
          "n": 32
        },
        "Promoções & Fidelidade": {
          "nps": 51.4,
          "n": 107
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 35,
        "Abastecimento": 30,
        "Loja Física": 13,
        "Atendimento": 9,
        "Outros": 5,
        "Entrega & Logística": 4
      },
      "elog_counts": {
        "Promoções & Fidelidade": 72,
        "Entrega & Logística": 55,
        "Atendimento": 35,
        "Loja Física": 28,
        "Outros": 27,
        "Abastecimento": 19
      }
    },
    {
      "nome": "L5148-PARQUE DO CARMO",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 61.0,
      "nps_textual": 56.6,
      "nps_hibrido": 59.3,
      "delta_hibrido": -1.8,
      "pct_pos": 70.4,
      "pct_neu": 15.9,
      "pct_neg": 13.8,
      "severidade": 30.06,
      "transacoes": 124512,
      "indice_prioridade": 57.8,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 567,
      "avaliacoes_ponderadas": 2596.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 22
        },
        {
          "cat": "Abastecimento",
          "pct": 38
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 35
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 12
        },
        {
          "cat": "Loja Física",
          "pct": 15
        },
        {
          "cat": "Outros",
          "pct": 11
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 67.4,
          "neg": 18.6
        },
        {
          "m": "2025-02",
          "pos": 68.4,
          "neg": 15.8
        },
        {
          "m": "2025-03",
          "pos": 66.7,
          "neg": 16.7
        },
        {
          "m": "2025-04",
          "pos": 72.1,
          "neg": 11.6
        },
        {
          "m": "2025-05",
          "pos": 72.2,
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
          "neg": 19.2
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
          "pos": 66.7,
          "neg": 4.8
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 17.0,
          "n": 112
        },
        "Atendimento": {
          "nps": 84.8,
          "n": 46
        },
        "Entrega & Logística": {
          "nps": 94.4,
          "n": 90
        },
        "Loja Física": {
          "nps": 46.6,
          "n": 88
        },
        "Outros": {
          "nps": 91.7,
          "n": 48
        },
        "Promoções & Fidelidade": {
          "nps": 50.8,
          "n": 183
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 63,
        "Abastecimento": 63,
        "Loja Física": 30,
        "Atendimento": 5,
        "Outros": 4,
        "Entrega & Logística": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 120,
        "Entrega & Logística": 87,
        "Loja Física": 58,
        "Abastecimento": 49,
        "Outros": 44,
        "Atendimento": 41
      }
    },
    {
      "nome": "L5089-BOA VISTA (1364)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 59.5,
      "nps_textual": 55.1,
      "nps_hibrido": 58.0,
      "delta_hibrido": -1.5,
      "pct_pos": 69.6,
      "pct_neu": 15.8,
      "pct_neg": 14.6,
      "severidade": 30.18,
      "transacoes": 117336,
      "indice_prioridade": 57.7,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 336,
      "avaliacoes_ponderadas": 1549.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 6
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 37
        },
        {
          "cat": "Abastecimento",
          "pct": 37
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 11
        },
        {
          "cat": "Entrega & Logística",
          "pct": 25
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 34
        }
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
          "neg": 31.6
        },
        {
          "m": "2025-07",
          "pos": 86.7,
          "neg": 6.7
        },
        {
          "m": "2025-08",
          "pos": 62.5,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 12.7,
          "n": 55
        },
        "Atendimento": {
          "nps": 68.6,
          "n": 35
        },
        "Entrega & Logística": {
          "nps": 90.5,
          "n": 63
        },
        "Loja Física": {
          "nps": 52.5,
          "n": 40
        },
        "Outros": {
          "nps": 73.7,
          "n": 19
        },
        "Promoções & Fidelidade": {
          "nps": 50.0,
          "n": 124
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 44,
        "Abastecimento": 30,
        "Loja Física": 12,
        "Atendimento": 8,
        "Entrega & Logística": 4,
        "Outros": 4
      },
      "elog_counts": {
        "Promoções & Fidelidade": 80,
        "Entrega & Logística": 59,
        "Loja Física": 28,
        "Atendimento": 27,
        "Abastecimento": 25,
        "Outros": 15
      }
    },
    {
      "nome": "L5018-MOEMA JURUCE (0584)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 67.8,
      "nps_textual": 61.0,
      "nps_hibrido": 64.3,
      "delta_hibrido": -3.4,
      "pct_pos": 74.2,
      "pct_neu": 12.6,
      "pct_neg": 13.2,
      "severidade": 28.35,
      "transacoes": 143665,
      "indice_prioridade": 57.5,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 729,
      "avaliacoes_ponderadas": 2791.0,
      "top_problemas": [
        {
          "cat": "Entrega & Logística",
          "pct": 3
        },
        {
          "cat": "Loja Física",
          "pct": 24
        },
        {
          "cat": "Atendimento",
          "pct": 6
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 21
        },
        {
          "cat": "Outros",
          "pct": 11
        },
        {
          "cat": "Loja Física",
          "pct": 14
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 58.1,
          "neg": 29.0
        },
        {
          "m": "2025-02",
          "pos": 64.9,
          "neg": 21.6
        },
        {
          "m": "2025-03",
          "pos": 66.7,
          "neg": 15.4
        },
        {
          "m": "2025-04",
          "pos": 79.5,
          "neg": 10.3
        },
        {
          "m": "2025-05",
          "pos": 68.2,
          "neg": 18.2
        },
        {
          "m": "2025-06",
          "pos": 69.6,
          "neg": 13.0
        },
        {
          "m": "2025-07",
          "pos": 74.4,
          "neg": 15.4
        },
        {
          "m": "2025-08",
          "pos": 68.8,
          "neg": 21.9
        },
        {
          "m": "2025-09",
          "pos": 66.7,
          "neg": 9.5
        },
        {
          "m": "2025-10",
          "pos": 89.8,
          "neg": 0.0
        },
        {
          "m": "2025-11",
          "pos": 82.9,
          "neg": 5.7
        },
        {
          "m": "2025-12",
          "pos": 78.3,
          "neg": 11.7
        },
        {
          "m": "2026-01",
          "pos": 66.1,
          "neg": 18.6
        },
        {
          "m": "2026-02",
          "pos": 72.0,
          "neg": 12.0
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 11.2,
          "n": 89
        },
        "Atendimento": {
          "nps": 86.4,
          "n": 125
        },
        "Entrega & Logística": {
          "nps": 92.2,
          "n": 102
        },
        "Loja Física": {
          "nps": 45.2,
          "n": 115
        },
        "Outros": {
          "nps": 85.5,
          "n": 69
        },
        "Promoções & Fidelidade": {
          "nps": 53.3,
          "n": 229
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 77,
        "Abastecimento": 47,
        "Loja Física": 40,
        "Atendimento": 11,
        "Outros": 8,
        "Entrega & Logística": 5
      },
      "elog_counts": {
        "Promoções & Fidelidade": 152,
        "Atendimento": 114,
        "Entrega & Logística": 97,
        "Loja Física": 75,
        "Outros": 61,
        "Abastecimento": 42
      }
    },
    {
      "nome": "L5119-AGUAS CLARAS (ARAUCARIAS)",
      "flag": "regular",
      "uf": "DF",
      "regiao": "DF",
      "nps_trad": 62.8,
      "nps_textual": 55.3,
      "nps_hibrido": 58.1,
      "delta_hibrido": -4.7,
      "pct_pos": 68.4,
      "pct_neu": 18.5,
      "pct_neg": 13.1,
      "severidade": 30.57,
      "transacoes": 118152,
      "indice_prioridade": 57.4,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 573,
      "avaliacoes_ponderadas": 2602.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 40
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 37
        },
        {
          "cat": "Loja Física",
          "pct": 17
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 13
        },
        {
          "cat": "Outros",
          "pct": 13
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 37
        }
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
          "pos": 66.7,
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
          "pos": 51.7,
          "neg": 31.0
        },
        {
          "m": "2025-11",
          "pos": 73.5,
          "neg": 11.8
        },
        {
          "m": "2025-12",
          "pos": 71.9,
          "neg": 12.5
        },
        {
          "m": "2026-01",
          "pos": 55.6,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 20.6,
          "n": 107
        },
        "Atendimento": {
          "nps": 72.2,
          "n": 36
        },
        "Entrega & Logística": {
          "nps": 93.2,
          "n": 73
        },
        "Loja Física": {
          "nps": 47.4,
          "n": 78
        },
        "Outros": {
          "nps": 88.9,
          "n": 54
        },
        "Promoções & Fidelidade": {
          "nps": 51.6,
          "n": 225
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 81,
        "Abastecimento": 55,
        "Loja Física": 28,
        "Atendimento": 8,
        "Entrega & Logística": 5,
        "Outros": 4
      },
      "elog_counts": {
        "Promoções & Fidelidade": 144,
        "Entrega & Logística": 68,
        "Abastecimento": 52,
        "Outros": 50,
        "Loja Física": 50,
        "Atendimento": 28
      }
    },
    {
      "nome": "L5143-AQUARIUS",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 64.0,
      "nps_textual": 55.8,
      "nps_hibrido": 61.8,
      "delta_hibrido": -2.2,
      "pct_pos": 69.9,
      "pct_neu": 16.0,
      "pct_neg": 14.1,
      "severidade": 30.04,
      "transacoes": 111404,
      "indice_prioridade": 57.3,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 369,
      "avaliacoes_ponderadas": 1886.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 23
        },
        {
          "cat": "Abastecimento",
          "pct": 38
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 35
        }
      ],
      "top_elogios": [
        {
          "cat": "Loja Física",
          "pct": 18
        },
        {
          "cat": "Abastecimento",
          "pct": 9
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 31
        }
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
          "pos": 64.0,
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
          "pos": 52.2,
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
          "neg": 17.6
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 6.2,
          "n": 64
        },
        "Atendimento": {
          "nps": 93.0,
          "n": 43
        },
        "Entrega & Logística": {
          "nps": 90.6,
          "n": 53
        },
        "Loja Física": {
          "nps": 54.0,
          "n": 63
        },
        "Outros": {
          "nps": 90.5,
          "n": 21
        },
        "Promoções & Fidelidade": {
          "nps": 48.8,
          "n": 125
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 46,
        "Abastecimento": 40,
        "Loja Física": 17,
        "Entrega & Logística": 4,
        "Outros": 2,
        "Atendimento": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 79,
        "Entrega & Logística": 49,
        "Loja Física": 46,
        "Atendimento": 41,
        "Abastecimento": 24,
        "Outros": 19
      }
    },
    {
      "nome": "L5166-MAIRIPORA",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 61.1,
      "nps_textual": 56.3,
      "nps_hibrido": 58.1,
      "delta_hibrido": -3.0,
      "pct_pos": 70.0,
      "pct_neu": 16.2,
      "pct_neg": 13.7,
      "severidade": 29.28,
      "transacoes": 135239,
      "indice_prioridade": 57.3,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 437,
      "avaliacoes_ponderadas": 2121.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 12
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 52
        },
        {
          "cat": "Abastecimento",
          "pct": 30
        }
      ],
      "top_elogios": [
        {
          "cat": "Loja Física",
          "pct": 17
        },
        {
          "cat": "Outros",
          "pct": 13
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 35
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 70.8,
          "neg": 20.8
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
          "pos": 75.0,
          "neg": 4.2
        },
        {
          "m": "2025-05",
          "pos": 71.1,
          "neg": 7.9
        },
        {
          "m": "2025-06",
          "pos": 73.7,
          "neg": 7.9
        },
        {
          "m": "2025-07",
          "pos": 66.7,
          "neg": 14.3
        },
        {
          "m": "2025-08",
          "pos": 76.9,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 14.3,
          "n": 56
        },
        "Atendimento": {
          "nps": 48.5,
          "n": 33
        },
        "Entrega & Logística": {
          "nps": 90.5,
          "n": 63
        },
        "Loja Física": {
          "nps": 83.1,
          "n": 59
        },
        "Outros": {
          "nps": 88.6,
          "n": 44
        },
        "Promoções & Fidelidade": {
          "nps": 42.3,
          "n": 182
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 74,
        "Abastecimento": 30,
        "Atendimento": 10,
        "Loja Física": 7,
        "Entrega & Logística": 5,
        "Outros": 5
      },
      "elog_counts": {
        "Promoções & Fidelidade": 108,
        "Entrega & Logística": 58,
        "Loja Física": 52,
        "Outros": 39,
        "Abastecimento": 26,
        "Atendimento": 23
      }
    },
    {
      "nome": "L5076-PIRACICABA (1337)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 61.0,
      "nps_textual": 56.2,
      "nps_hibrido": 59.2,
      "delta_hibrido": -1.8,
      "pct_pos": 69.2,
      "pct_neu": 17.7,
      "pct_neg": 13.1,
      "severidade": 29.76,
      "transacoes": 99886,
      "indice_prioridade": 56.9,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 390,
      "avaliacoes_ponderadas": 1853.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 27
        },
        {
          "cat": "Abastecimento",
          "pct": 39
        },
        {
          "cat": "Atendimento",
          "pct": 6
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 13
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 30
        },
        {
          "cat": "Entrega & Logística",
          "pct": 22
        }
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
          "pos": 75.0,
          "neg": 12.5
        },
        {
          "m": "2025-05",
          "pos": 50.0,
          "neg": 35.0
        },
        {
          "m": "2025-06",
          "pos": 81.2,
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
          "neg": 11.5
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
          "neg": 13.0
        },
        {
          "m": "2026-05",
          "pos": 66.7,
          "neg": 0.0
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 19.7,
          "n": 71
        },
        "Atendimento": {
          "nps": 74.4,
          "n": 43
        },
        "Entrega & Logística": {
          "nps": 95.2,
          "n": 62
        },
        "Loja Física": {
          "nps": 35.2,
          "n": 54
        },
        "Outros": {
          "nps": 87.1,
          "n": 31
        },
        "Promoções & Fidelidade": {
          "nps": 52.7,
          "n": 129
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 47,
        "Abastecimento": 37,
        "Loja Física": 21,
        "Atendimento": 8,
        "Outros": 4,
        "Entrega & Logística": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 82,
        "Entrega & Logística": 59,
        "Atendimento": 35,
        "Abastecimento": 34,
        "Loja Física": 33,
        "Outros": 27
      }
    },
    {
      "nome": "L5123-SAO VICENTE",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Litoral",
      "nps_trad": 68.2,
      "nps_textual": 59.8,
      "nps_hibrido": 65.1,
      "delta_hibrido": -3.1,
      "pct_pos": 72.4,
      "pct_neu": 15.1,
      "pct_neg": 12.6,
      "severidade": 29.01,
      "transacoes": 144144,
      "indice_prioridade": 56.7,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 764,
      "avaliacoes_ponderadas": 2966.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 9
        },
        {
          "cat": "Loja Física",
          "pct": 21
        },
        {
          "cat": "Abastecimento",
          "pct": 40
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 12
        },
        {
          "cat": "Loja Física",
          "pct": 15
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 29
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 73.0,
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
          "pos": 59.4,
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
          "pos": 77.4,
          "neg": 11.3
        },
        {
          "m": "2026-01",
          "pos": 75.3,
          "neg": 11.1
        },
        {
          "m": "2026-02",
          "pos": 76.9,
          "neg": 11.5
        },
        {
          "m": "2026-03",
          "pos": 69.2,
          "neg": 12.8
        },
        {
          "m": "2026-04",
          "pos": 67.5,
          "neg": 7.5
        },
        {
          "m": "2026-05",
          "pos": 71.9,
          "neg": 12.5
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 21.5,
          "n": 135
        },
        "Atendimento": {
          "nps": 69.2,
          "n": 104
        },
        "Entrega & Logística": {
          "nps": 93.9,
          "n": 114
        },
        "Loja Física": {
          "nps": 55.1,
          "n": 118
        },
        "Outros": {
          "nps": 80.6,
          "n": 62
        },
        "Promoções & Fidelidade": {
          "nps": 58.0,
          "n": 231
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 71,
        "Abastecimento": 68,
        "Loja Física": 33,
        "Atendimento": 23,
        "Outros": 11,
        "Entrega & Logística": 5
      },
      "elog_counts": {
        "Promoções & Fidelidade": 160,
        "Entrega & Logística": 109,
        "Loja Física": 85,
        "Atendimento": 81,
        "Abastecimento": 67,
        "Outros": 51
      }
    },
    {
      "nome": "L5054-PLANALTO (1279)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 63.7,
      "nps_textual": 59.9,
      "nps_hibrido": 62.5,
      "delta_hibrido": -1.2,
      "pct_pos": 72.1,
      "pct_neu": 15.7,
      "pct_neg": 12.2,
      "severidade": 29.08,
      "transacoes": 110963,
      "indice_prioridade": 56.7,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 753,
      "avaliacoes_ponderadas": 2530.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 9
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 46
        },
        {
          "cat": "Abastecimento",
          "pct": 30
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 29
        },
        {
          "cat": "Outros",
          "pct": 12
        },
        {
          "cat": "Loja Física",
          "pct": 12
        }
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
          "neg": 17.0
        },
        {
          "m": "2025-09",
          "pos": 85.2,
          "neg": 4.9
        },
        {
          "m": "2025-10",
          "pos": 68.6,
          "neg": 15.7
        },
        {
          "m": "2025-11",
          "pos": 75.6,
          "neg": 12.2
        },
        {
          "m": "2025-12",
          "pos": 71.4,
          "neg": 13.0
        },
        {
          "m": "2026-01",
          "pos": 62.1,
          "neg": 12.1
        },
        {
          "m": "2026-02",
          "pos": 69.0,
          "neg": 15.5
        },
        {
          "m": "2026-03",
          "pos": 74.0,
          "neg": 10.0
        },
        {
          "m": "2026-04",
          "pos": 75.0,
          "neg": 6.2
        },
        {
          "m": "2026-05",
          "pos": 62.5,
          "neg": 20.8
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -1.3,
          "n": 79
        },
        "Atendimento": {
          "nps": 84.3,
          "n": 178
        },
        "Entrega & Logística": {
          "nps": 94.8,
          "n": 97
        },
        "Loja Física": {
          "nps": 59.8,
          "n": 92
        },
        "Outros": {
          "nps": 84.9,
          "n": 73
        },
        "Promoções & Fidelidade": {
          "nps": 39.7,
          "n": 234
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 99,
        "Abastecimento": 52,
        "Loja Física": 26,
        "Atendimento": 20,
        "Outros": 9,
        "Entrega & Logística": 4
      },
      "elog_counts": {
        "Atendimento": 158,
        "Promoções & Fidelidade": 135,
        "Entrega & Logística": 93,
        "Loja Física": 66,
        "Outros": 64,
        "Abastecimento": 27
      }
    },
    {
      "nome": "L5282-PARQUE OLIMPICO",
      "flag": "regular",
      "uf": "RJ",
      "regiao": "RJ",
      "nps_trad": 66.8,
      "nps_textual": 59.0,
      "nps_hibrido": 63.7,
      "delta_hibrido": -3.1,
      "pct_pos": 71.2,
      "pct_neu": 16.6,
      "pct_neg": 12.2,
      "severidade": 29.5,
      "transacoes": 121523,
      "indice_prioridade": 56.5,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 877,
      "avaliacoes_ponderadas": 3517.0,
      "top_problemas": [
        {
          "cat": "Outros",
          "pct": 4
        },
        {
          "cat": "Atendimento",
          "pct": 7
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 41
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 11
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 34
        },
        {
          "cat": "Loja Física",
          "pct": 13
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 66.2,
          "neg": 20.6
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
          "pos": 64.9,
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
          "pos": 68.3,
          "neg": 3.3
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 27.7,
          "n": 119
        },
        "Atendimento": {
          "nps": 76.1,
          "n": 113
        },
        "Entrega & Logística": {
          "nps": 91.5,
          "n": 117
        },
        "Loja Física": {
          "nps": 56.3,
          "n": 119
        },
        "Outros": {
          "nps": 78.3,
          "n": 69
        },
        "Promoções & Fidelidade": {
          "nps": 50.0,
          "n": 340
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 126,
        "Abastecimento": 51,
        "Loja Física": 38,
        "Atendimento": 19,
        "Outros": 11,
        "Entrega & Logística": 8
      },
      "elog_counts": {
        "Promoções & Fidelidade": 214,
        "Entrega & Logística": 109,
        "Atendimento": 94,
        "Loja Física": 81,
        "Abastecimento": 68,
        "Outros": 58
      }
    },
    {
      "nome": "L5061-BOSQUE MAIA (1304)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 58.3,
      "nps_textual": 55.6,
      "nps_hibrido": 55.8,
      "delta_hibrido": -2.5,
      "pct_pos": 68.1,
      "pct_neu": 19.4,
      "pct_neg": 12.5,
      "severidade": 30.24,
      "transacoes": 109842,
      "indice_prioridade": 56.4,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 448,
      "avaliacoes_ponderadas": 1857.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 46
        },
        {
          "cat": "Abastecimento",
          "pct": 38
        },
        {
          "cat": "Loja Física",
          "pct": 14
        }
      ],
      "top_elogios": [
        {
          "cat": "Loja Física",
          "pct": 16
        },
        {
          "cat": "Outros",
          "pct": 12
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 31
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 72.2,
          "neg": 13.9
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
          "pos": 45.5,
          "neg": 18.2
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
          "neg": 7.5
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
          "pos": 75.0,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 5.5,
          "n": 73
        },
        "Atendimento": {
          "nps": 86.4,
          "n": 44
        },
        "Entrega & Logística": {
          "nps": 98.4,
          "n": 63
        },
        "Loja Física": {
          "nps": 60.3,
          "n": 68
        },
        "Outros": {
          "nps": 97.3,
          "n": 37
        },
        "Promoções & Fidelidade": {
          "nps": 41.7,
          "n": 163
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 69,
        "Abastecimento": 48,
        "Loja Física": 19,
        "Atendimento": 5,
        "Outros": 1,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 94,
        "Entrega & Logística": 62,
        "Loja Física": 49,
        "Atendimento": 39,
        "Outros": 36,
        "Abastecimento": 25
      }
    },
    {
      "nome": "L5035-TREMEMBE (0875)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 65.6,
      "nps_textual": 58.8,
      "nps_hibrido": 62.3,
      "delta_hibrido": -3.3,
      "pct_pos": 72.5,
      "pct_neu": 13.7,
      "pct_neg": 13.7,
      "severidade": 28.78,
      "transacoes": 105905,
      "indice_prioridade": 56.0,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 393,
      "avaliacoes_ponderadas": 1780.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 9
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 52
        },
        {
          "cat": "Abastecimento",
          "pct": 26
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 10
        },
        {
          "cat": "Entrega & Logística",
          "pct": 23
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 31
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 67.9,
          "neg": 14.3
        },
        {
          "m": "2025-02",
          "pos": 80.0,
          "neg": 10.0
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
          "pos": 72.7,
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
          "pos": 78.3,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 27.3,
          "n": 55
        },
        "Atendimento": {
          "nps": 72.5,
          "n": 51
        },
        "Entrega & Logística": {
          "nps": 95.7,
          "n": 69
        },
        "Loja Física": {
          "nps": 64.3,
          "n": 42
        },
        "Outros": {
          "nps": 83.9,
          "n": 31
        },
        "Promoções & Fidelidade": {
          "nps": 41.4,
          "n": 145
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 57,
        "Abastecimento": 26,
        "Loja Física": 9,
        "Atendimento": 9,
        "Outros": 4,
        "Entrega & Logística": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 88,
        "Entrega & Logística": 66,
        "Atendimento": 42,
        "Loja Física": 33,
        "Abastecimento": 29,
        "Outros": 27
      }
    },
    {
      "nome": "L5232-PARQUE ECOLOGICO",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 63.2,
      "nps_textual": 59.3,
      "nps_hibrido": 63.2,
      "delta_hibrido": 0.0,
      "pct_pos": 72.7,
      "pct_neu": 13.9,
      "pct_neg": 13.4,
      "severidade": 28.46,
      "transacoes": 137999,
      "indice_prioridade": 55.8,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 454,
      "avaliacoes_ponderadas": 2263.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 8
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 41
        },
        {
          "cat": "Loja Física",
          "pct": 18
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 11
        },
        {
          "cat": "Loja Física",
          "pct": 15
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 32
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 83.3,
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
          "pos": 78.4,
          "neg": 5.4
        },
        {
          "m": "2025-08",
          "pos": 72.4,
          "neg": 20.7
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
          "pos": 50.0,
          "neg": 16.7
        },
        {
          "m": "2026-02",
          "pos": 63.6,
          "neg": 9.1
        },
        {
          "m": "2026-03",
          "pos": 78.6,
          "neg": 10.7
        },
        {
          "m": "2026-04",
          "pos": 79.2,
          "neg": 12.5
        },
        {
          "m": "2026-05",
          "pos": 73.7,
          "neg": 10.5
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 26.2,
          "n": 65
        },
        "Atendimento": {
          "nps": 66.7,
          "n": 63
        },
        "Entrega & Logística": {
          "nps": 94.1,
          "n": 68
        },
        "Loja Física": {
          "nps": 60.6,
          "n": 66
        },
        "Outros": {
          "nps": 88.9,
          "n": 27
        },
        "Promoções & Fidelidade": {
          "nps": 49.7,
          "n": 165
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 58,
        "Abastecimento": 29,
        "Atendimento": 16,
        "Loja Física": 15,
        "Entrega & Logística": 3,
        "Outros": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 107,
        "Entrega & Logística": 65,
        "Loja Física": 51,
        "Atendimento": 47,
        "Abastecimento": 36,
        "Outros": 24
      }
    },
    {
      "nome": "L5219-AV. ITAQUERA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 63.6,
      "nps_textual": 58.2,
      "nps_hibrido": 62.4,
      "delta_hibrido": -1.1,
      "pct_pos": 70.8,
      "pct_neu": 16.7,
      "pct_neg": 12.6,
      "severidade": 29.5,
      "transacoes": 119675,
      "indice_prioridade": 55.8,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 612,
      "avaliacoes_ponderadas": 2727.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 42
        },
        {
          "cat": "Atendimento",
          "pct": 6
        },
        {
          "cat": "Loja Física",
          "pct": 18
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 12
        },
        {
          "cat": "Entrega & Logística",
          "pct": 24
        },
        {
          "cat": "Loja Física",
          "pct": 15
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 71.2,
          "neg": 11.9
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
          "pos": 71.4,
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
          "pos": 68.3,
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
          "pos": 70.8,
          "neg": 20.8
        },
        {
          "m": "2026-05",
          "pos": 46.7,
          "neg": 30.0
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 18.1,
          "n": 105
        },
        "Atendimento": {
          "nps": 71.7,
          "n": 60
        },
        "Entrega & Logística": {
          "nps": 95.4,
          "n": 108
        },
        "Loja Física": {
          "nps": 53.8,
          "n": 93
        },
        "Outros": {
          "nps": 82.1,
          "n": 56
        },
        "Promoções & Fidelidade": {
          "nps": 50.0,
          "n": 190
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 71,
        "Abastecimento": 54,
        "Loja Física": 29,
        "Atendimento": 12,
        "Outros": 9,
        "Entrega & Logística": 4
      },
      "elog_counts": {
        "Promoções & Fidelidade": 119,
        "Entrega & Logística": 104,
        "Loja Física": 64,
        "Abastecimento": 51,
        "Atendimento": 48,
        "Outros": 47
      }
    },
    {
      "nome": "L5108-MOGI DAS CRUZES (1527)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 65.9,
      "nps_textual": 57.4,
      "nps_hibrido": 61.9,
      "delta_hibrido": -4.0,
      "pct_pos": 71.2,
      "pct_neu": 15.0,
      "pct_neg": 13.8,
      "severidade": 29.14,
      "transacoes": 102768,
      "indice_prioridade": 55.8,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 399,
      "avaliacoes_ponderadas": 1820.0,
      "top_problemas": [
        {
          "cat": "Outros",
          "pct": 7
        },
        {
          "cat": "Atendimento",
          "pct": 9
        },
        {
          "cat": "Abastecimento",
          "pct": 36
        }
      ],
      "top_elogios": [
        {
          "cat": "Loja Física",
          "pct": 18
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 36
        },
        {
          "cat": "Abastecimento",
          "pct": 8
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 73.5,
          "neg": 14.7
        },
        {
          "m": "2025-02",
          "pos": 52.0,
          "neg": 12.0
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
          "pos": 88.2,
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
          "pos": 60.0,
          "neg": 26.7
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 3.4,
          "n": 59
        },
        "Atendimento": {
          "nps": 68.8,
          "n": 48
        },
        "Entrega & Logística": {
          "nps": 94.2,
          "n": 52
        },
        "Loja Física": {
          "nps": 73.3,
          "n": 60
        },
        "Outros": {
          "nps": 65.4,
          "n": 26
        },
        "Promoções & Fidelidade": {
          "nps": 54.5,
          "n": 154
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 52,
        "Abastecimento": 37,
        "Atendimento": 10,
        "Loja Física": 9,
        "Outros": 5,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 102,
        "Loja Física": 51,
        "Entrega & Logística": 50,
        "Atendimento": 38,
        "Abastecimento": 22,
        "Outros": 21
      }
    },
    {
      "nome": "L5066-CARAPICUIBA (1317)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 63.2,
      "nps_textual": 56.1,
      "nps_hibrido": 61.0,
      "delta_hibrido": -2.2,
      "pct_pos": 72.1,
      "pct_neu": 11.9,
      "pct_neg": 16.0,
      "severidade": 28.92,
      "transacoes": 98738,
      "indice_prioridade": 55.6,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 269,
      "avaliacoes_ponderadas": 1238.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 33
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 28
        },
        {
          "cat": "Abastecimento",
          "pct": 28
        }
      ],
      "top_elogios": [
        {
          "cat": "Entrega & Logística",
          "pct": 30
        },
        {
          "cat": "Outros",
          "pct": 9
        },
        {
          "cat": "Atendimento",
          "pct": 16
        }
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
          "pos": 53.3,
          "neg": 40.0
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
          "pos": 73.3,
          "neg": 6.7
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 8.6,
          "n": 35
        },
        "Atendimento": {
          "nps": 82.9,
          "n": 35
        },
        "Entrega & Logística": {
          "nps": 90.3,
          "n": 62
        },
        "Loja Física": {
          "nps": 20.5,
          "n": 44
        },
        "Outros": {
          "nps": 81.0,
          "n": 21
        },
        "Promoções & Fidelidade": {
          "nps": 51.4,
          "n": 72
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 23,
        "Loja Física": 21,
        "Abastecimento": 20,
        "Atendimento": 4,
        "Entrega & Logística": 4,
        "Outros": 3
      },
      "elog_counts": {
        "Entrega & Logística": 58,
        "Promoções & Fidelidade": 49,
        "Atendimento": 31,
        "Loja Física": 23,
        "Outros": 18,
        "Abastecimento": 15
      }
    },
    {
      "nome": "L5250-VILA RICA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 64.3,
      "nps_textual": 60.1,
      "nps_hibrido": 63.9,
      "delta_hibrido": -0.4,
      "pct_pos": 74.7,
      "pct_neu": 10.6,
      "pct_neg": 14.6,
      "severidade": 27.99,
      "transacoes": 111878,
      "indice_prioridade": 55.1,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 479,
      "avaliacoes_ponderadas": 2299.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 11
        },
        {
          "cat": "Loja Física",
          "pct": 29
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 34
        }
      ],
      "top_elogios": [
        {
          "cat": "Loja Física",
          "pct": 16
        },
        {
          "cat": "Outros",
          "pct": 11
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 30
        }
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
          "pos": 90.0,
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
          "pos": 78.6,
          "neg": 10.7
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
          "pos": 52.9,
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
          "neg": 10.3
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 23.4,
          "n": 64
        },
        "Atendimento": {
          "nps": 71.9,
          "n": 64
        },
        "Entrega & Logística": {
          "nps": 97.2,
          "n": 71
        },
        "Loja Física": {
          "nps": 43.4,
          "n": 83
        },
        "Outros": {
          "nps": 86.7,
          "n": 45
        },
        "Promoções & Fidelidade": {
          "nps": 54.6,
          "n": 152
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 45,
        "Abastecimento": 33,
        "Loja Física": 27,
        "Atendimento": 10,
        "Outros": 4,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 107,
        "Entrega & Logística": 69,
        "Loja Física": 56,
        "Atendimento": 54,
        "Outros": 41,
        "Abastecimento": 31
      }
    },
    {
      "nome": "L5205-GRANJA KM 26",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 66.3,
      "nps_textual": 56.4,
      "nps_hibrido": 65.4,
      "delta_hibrido": -0.8,
      "pct_pos": 72.4,
      "pct_neu": 11.5,
      "pct_neg": 16.1,
      "severidade": 28.69,
      "transacoes": 61531,
      "indice_prioridade": 55.0,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 243,
      "avaliacoes_ponderadas": 882.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 26
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 38
        },
        {
          "cat": "Abastecimento",
          "pct": 31
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 32
        },
        {
          "cat": "Entrega & Logística",
          "pct": 25
        },
        {
          "cat": "Outros",
          "pct": 10
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 66.7,
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
          "pos": 54.5,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -7.4,
          "n": 27
        },
        "Atendimento": {
          "nps": 91.5,
          "n": 59
        },
        "Entrega & Logística": {
          "nps": 97.8,
          "n": 45
        },
        "Loja Física": {
          "nps": 21.6,
          "n": 37
        },
        "Outros": {
          "nps": 94.7,
          "n": 19
        },
        "Promoções & Fidelidade": {
          "nps": 26.8,
          "n": 56
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 26,
        "Loja Física": 19,
        "Abastecimento": 17,
        "Atendimento": 3,
        "Outros": 1,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Atendimento": 56,
        "Entrega & Logística": 44,
        "Promoções & Fidelidade": 30,
        "Loja Física": 18,
        "Outros": 18,
        "Abastecimento": 10
      }
    },
    {
      "nome": "L5112-BAURU",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 62.6,
      "nps_textual": 58.5,
      "nps_hibrido": 61.8,
      "delta_hibrido": -0.9,
      "pct_pos": 72.4,
      "pct_neu": 13.8,
      "pct_neg": 13.8,
      "severidade": 28.7,
      "transacoes": 52713,
      "indice_prioridade": 54.7,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 340,
      "avaliacoes_ponderadas": 1615.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 43
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 34
        },
        {
          "cat": "Loja Física",
          "pct": 15
        }
      ],
      "top_elogios": [
        {
          "cat": "Outros",
          "pct": 15
        },
        {
          "cat": "Abastecimento",
          "pct": 11
        },
        {
          "cat": "Entrega & Logística",
          "pct": 22
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 74.1,
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
          "pos": 69.2,
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
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2025-10",
          "pos": 63.6,
          "neg": 18.2
        },
        {
          "m": "2025-11",
          "pos": 78.9,
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
          "neg": 10.0
        },
        {
          "m": "2026-03",
          "pos": 88.0,
          "neg": 4.0
        },
        {
          "m": "2026-04",
          "pos": 54.8,
          "neg": 19.4
        },
        {
          "m": "2026-05",
          "pos": 66.7,
          "neg": 16.7
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 13.6,
          "n": 59
        },
        "Atendimento": {
          "nps": 89.7,
          "n": 29
        },
        "Entrega & Logística": {
          "nps": 89.8,
          "n": 59
        },
        "Loja Física": {
          "nps": 52.6,
          "n": 38
        },
        "Outros": {
          "nps": 90.0,
          "n": 40
        },
        "Promoções & Fidelidade": {
          "nps": 48.7,
          "n": 115
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 43,
        "Abastecimento": 31,
        "Loja Física": 11,
        "Entrega & Logística": 4,
        "Outros": 3,
        "Atendimento": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 72,
        "Entrega & Logística": 55,
        "Outros": 37,
        "Abastecimento": 28,
        "Loja Física": 27,
        "Atendimento": 27
      }
    },
    {
      "nome": "L5237-PAULINIA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 56.2,
      "nps_textual": 51.5,
      "nps_hibrido": 57.2,
      "delta_hibrido": 1.0,
      "pct_pos": 64.9,
      "pct_neu": 21.7,
      "pct_neg": 13.4,
      "severidade": 30.96,
      "transacoes": 117497,
      "indice_prioridade": 54.7,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 299,
      "avaliacoes_ponderadas": 1466.0,
      "top_problemas": [
        {
          "cat": "Outros",
          "pct": 8
        },
        {
          "cat": "Abastecimento",
          "pct": 48
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 30
        }
      ],
      "top_elogios": [
        {
          "cat": "Outros",
          "pct": 12
        },
        {
          "cat": "Entrega & Logística",
          "pct": 25
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 32
        }
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
          "pos": 52.6,
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
          "pos": 70.0,
          "neg": 10.0
        },
        {
          "m": "2025-09",
          "pos": 66.7,
          "neg": 20.0
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -6.2,
          "n": 48
        },
        "Atendimento": {
          "nps": 80.8,
          "n": 26
        },
        "Entrega & Logística": {
          "nps": 87.0,
          "n": 54
        },
        "Loja Física": {
          "nps": 56.2,
          "n": 32
        },
        "Outros": {
          "nps": 66.7,
          "n": 30
        },
        "Promoções & Fidelidade": {
          "nps": 46.8,
          "n": 109
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 46,
        "Abastecimento": 32,
        "Loja Física": 9,
        "Outros": 7,
        "Entrega & Logística": 6,
        "Atendimento": 5
      },
      "elog_counts": {
        "Promoções & Fidelidade": 63,
        "Entrega & Logística": 48,
        "Outros": 23,
        "Loja Física": 23,
        "Atendimento": 21,
        "Abastecimento": 16
      }
    },
    {
      "nome": "L5192-ALPHAVILLE CONDE",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 68.6,
      "nps_textual": 62.2,
      "nps_hibrido": 65.0,
      "delta_hibrido": -3.6,
      "pct_pos": 76.3,
      "pct_neu": 9.5,
      "pct_neg": 14.1,
      "severidade": 26.99,
      "transacoes": 125879,
      "indice_prioridade": 54.6,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 389,
      "avaliacoes_ponderadas": 1174.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 27
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 35
        },
        {
          "cat": "Abastecimento",
          "pct": 31
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 25
        },
        {
          "cat": "Outros",
          "pct": 13
        },
        {
          "cat": "Abastecimento",
          "pct": 10
        }
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
          "neg": 24.0
        },
        {
          "m": "2025-04",
          "pos": 63.6,
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
          "pos": 76.2,
          "neg": 14.3
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 21.8,
          "n": 55
        },
        "Atendimento": {
          "nps": 93.5,
          "n": 77
        },
        "Entrega & Logística": {
          "nps": 96.9,
          "n": 64
        },
        "Loja Física": {
          "nps": 32.7,
          "n": 52
        },
        "Outros": {
          "nps": 86.4,
          "n": 44
        },
        "Promoções & Fidelidade": {
          "nps": 42.3,
          "n": 97
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 37,
        "Abastecimento": 26,
        "Loja Física": 20,
        "Atendimento": 4,
        "Outros": 4,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Atendimento": 73,
        "Entrega & Logística": 63,
        "Promoções & Fidelidade": 60,
        "Outros": 40,
        "Loja Física": 32,
        "Abastecimento": 29
      }
    },
    {
      "nome": "L5045-TATUAPE (1247)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 63.5,
      "nps_textual": 59.6,
      "nps_hibrido": 61.9,
      "delta_hibrido": -1.6,
      "pct_pos": 72.5,
      "pct_neu": 14.5,
      "pct_neg": 12.9,
      "severidade": 28.33,
      "transacoes": 123851,
      "indice_prioridade": 54.6,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 386,
      "avaliacoes_ponderadas": 1623.0,
      "top_problemas": [
        {
          "cat": "Entrega & Logística",
          "pct": 6
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 50
        },
        {
          "cat": "Atendimento",
          "pct": 6
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 23
        },
        {
          "cat": "Outros",
          "pct": 10
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 29
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 68.2,
          "neg": 9.1
        },
        {
          "m": "2025-02",
          "pos": 68.4,
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
          "pos": 78.8,
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
          "pos": 62.5,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 11.5,
          "n": 52
        },
        "Atendimento": {
          "nps": 85.9,
          "n": 71
        },
        "Entrega & Logística": {
          "nps": 88.7,
          "n": 62
        },
        "Loja Física": {
          "nps": 76.5,
          "n": 34
        },
        "Outros": {
          "nps": 90.0,
          "n": 30
        },
        "Promoções & Fidelidade": {
          "nps": 40.1,
          "n": 137
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 57,
        "Abastecimento": 31,
        "Atendimento": 7,
        "Loja Física": 5,
        "Entrega & Logística": 4,
        "Outros": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 80,
        "Atendimento": 64,
        "Entrega & Logística": 58,
        "Loja Física": 29,
        "Outros": 28,
        "Abastecimento": 21
      }
    },
    {
      "nome": "L5283-ALDEIA DA SERRA",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 62.1,
      "nps_textual": 54.0,
      "nps_hibrido": 59.7,
      "delta_hibrido": -2.4,
      "pct_pos": 68.1,
      "pct_neu": 17.7,
      "pct_neg": 14.1,
      "severidade": 29.88,
      "transacoes": 77877,
      "indice_prioridade": 54.6,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 248,
      "avaliacoes_ponderadas": 1078.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 57
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 29
        },
        {
          "cat": "Loja Física",
          "pct": 9
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 32
        },
        {
          "cat": "Atendimento",
          "pct": 18
        },
        {
          "cat": "Loja Física",
          "pct": 14
        }
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
          "neg": 22.7
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
          "neg": 26.7
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -32.4,
          "n": 37
        },
        "Atendimento": {
          "nps": 82.9,
          "n": 35
        },
        "Entrega & Logística": {
          "nps": 92.3,
          "n": 39
        },
        "Loja Física": {
          "nps": 64.5,
          "n": 31
        },
        "Outros": {
          "nps": 89.5,
          "n": 19
        },
        "Promoções & Fidelidade": {
          "nps": 50.6,
          "n": 87
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 33,
        "Abastecimento": 29,
        "Loja Física": 8,
        "Atendimento": 4,
        "Entrega & Logística": 3,
        "Outros": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 54,
        "Entrega & Logística": 36,
        "Atendimento": 31,
        "Loja Física": 23,
        "Outros": 17,
        "Abastecimento": 8
      }
    },
    {
      "nome": "L5039-ZELINA (1208)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 65.5,
      "nps_textual": 60.3,
      "nps_hibrido": 64.5,
      "delta_hibrido": -1.0,
      "pct_pos": 73.4,
      "pct_neu": 13.5,
      "pct_neg": 13.1,
      "severidade": 28.12,
      "transacoes": 133782,
      "indice_prioridade": 53.7,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 504,
      "avaliacoes_ponderadas": 2229.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 9
        },
        {
          "cat": "Abastecimento",
          "pct": 42
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 35
        }
      ],
      "top_elogios": [
        {
          "cat": "Loja Física",
          "pct": 16
        },
        {
          "cat": "Atendimento",
          "pct": 20
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 28
        }
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
          "pos": 69.7,
          "neg": 18.2
        },
        {
          "m": "2025-06",
          "pos": 75.0,
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
          "pos": 77.8,
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
          "pos": 58.3,
          "neg": 8.3
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 4.4,
          "n": 68
        },
        "Atendimento": {
          "nps": 81.7,
          "n": 82
        },
        "Entrega & Logística": {
          "nps": 94.5,
          "n": 73
        },
        "Loja Física": {
          "nps": 73.9,
          "n": 69
        },
        "Outros": {
          "nps": 77.3,
          "n": 44
        },
        "Promoções & Fidelidade": {
          "nps": 47.6,
          "n": 168
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 65,
        "Abastecimento": 37,
        "Loja Física": 11,
        "Outros": 9,
        "Atendimento": 9,
        "Entrega & Logística": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 103,
        "Atendimento": 73,
        "Entrega & Logística": 70,
        "Loja Física": 58,
        "Outros": 35,
        "Abastecimento": 31
      }
    },
    {
      "nome": "L5215-VILA EMA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 71.9,
      "nps_textual": 61.3,
      "nps_hibrido": 66.1,
      "delta_hibrido": -5.8,
      "pct_pos": 73.5,
      "pct_neu": 14.3,
      "pct_neg": 12.2,
      "severidade": 28.36,
      "transacoes": 129362,
      "indice_prioridade": 53.7,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 581,
      "avaliacoes_ponderadas": 2415.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 10
        },
        {
          "cat": "Abastecimento",
          "pct": 46
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 30
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 33
        },
        {
          "cat": "Loja Física",
          "pct": 15
        },
        {
          "cat": "Entrega & Logística",
          "pct": 22
        }
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
          "pos": 84.8,
          "neg": 3.0
        },
        {
          "m": "2025-04",
          "pos": 79.1,
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
          "pos": 81.8,
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
          "neg": 24.1
        },
        {
          "m": "2026-02",
          "pos": 70.4,
          "neg": 7.4
        },
        {
          "m": "2026-03",
          "pos": 74.1,
          "neg": 11.1
        },
        {
          "m": "2026-04",
          "pos": 73.0,
          "neg": 13.5
        },
        {
          "m": "2026-05",
          "pos": 72.0,
          "neg": 8.0
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 3.9,
          "n": 102
        },
        "Atendimento": {
          "nps": 73.8,
          "n": 61
        },
        "Entrega & Logística": {
          "nps": 98.9,
          "n": 94
        },
        "Loja Física": {
          "nps": 66.7,
          "n": 81
        },
        "Outros": {
          "nps": 86.4,
          "n": 44
        },
        "Promoções & Fidelidade": {
          "nps": 61.3,
          "n": 199
        }
      },
      "prob_counts": {
        "Abastecimento": 65,
        "Promoções & Fidelidade": 56,
        "Loja Física": 18,
        "Atendimento": 9,
        "Outros": 5,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 143,
        "Entrega & Logística": 93,
        "Loja Física": 63,
        "Atendimento": 52,
        "Outros": 39,
        "Abastecimento": 37
      }
    },
    {
      "nome": "L5030-SAUDADE (0856)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 65.8,
      "nps_textual": 61.1,
      "nps_hibrido": 65.1,
      "delta_hibrido": -0.7,
      "pct_pos": 73.5,
      "pct_neu": 14.2,
      "pct_neg": 12.4,
      "severidade": 28.17,
      "transacoes": 129664,
      "indice_prioridade": 53.5,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 558,
      "avaliacoes_ponderadas": 2760.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 42
        },
        {
          "cat": "Abastecimento",
          "pct": 42
        },
        {
          "cat": "Loja Física",
          "pct": 10
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 10
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 33
        },
        {
          "cat": "Entrega & Logística",
          "pct": 24
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 82.6,
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
          "neg": 16.1
        },
        {
          "m": "2025-04",
          "pos": 74.4,
          "neg": 15.4
        },
        {
          "m": "2025-05",
          "pos": 93.5,
          "neg": 3.2
        },
        {
          "m": "2025-06",
          "pos": 71.4,
          "neg": 20.0
        },
        {
          "m": "2025-07",
          "pos": 83.3,
          "neg": 3.3
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
          "pos": 70.3,
          "neg": 16.2
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 15.3,
          "n": 85
        },
        "Atendimento": {
          "nps": 83.3,
          "n": 42
        },
        "Entrega & Logística": {
          "nps": 95.0,
          "n": 101
        },
        "Loja Física": {
          "nps": 64.9,
          "n": 77
        },
        "Outros": {
          "nps": 81.6,
          "n": 49
        },
        "Promoções & Fidelidade": {
          "nps": 52.5,
          "n": 204
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 68,
        "Abastecimento": 43,
        "Loja Física": 20,
        "Outros": 8,
        "Atendimento": 5,
        "Entrega & Logística": 4
      },
      "elog_counts": {
        "Promoções & Fidelidade": 136,
        "Entrega & Logística": 97,
        "Loja Física": 57,
        "Abastecimento": 42,
        "Outros": 41,
        "Atendimento": 37
      }
    },
    {
      "nome": "L5090-NORTE SUL (1365)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 66.4,
      "nps_textual": 61.8,
      "nps_hibrido": 63.5,
      "delta_hibrido": -2.8,
      "pct_pos": 75.6,
      "pct_neu": 10.7,
      "pct_neg": 13.7,
      "severidade": 27.39,
      "transacoes": 75692,
      "indice_prioridade": 53.5,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 422,
      "avaliacoes_ponderadas": 1556.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 47
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 34
        },
        {
          "cat": "Loja Física",
          "pct": 16
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 24
        },
        {
          "cat": "Entrega & Logística",
          "pct": 25
        },
        {
          "cat": "Abastecimento",
          "pct": 9
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 58.3,
          "neg": 20.8
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
          "pos": 81.5,
          "neg": 11.1
        },
        {
          "m": "2025-05",
          "pos": 72.0,
          "neg": 12.0
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
          "pos": 65.2,
          "neg": 21.7
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 1.5,
          "n": 65
        },
        "Atendimento": {
          "nps": 100.0,
          "n": 78
        },
        "Entrega & Logística": {
          "nps": 95.1,
          "n": 81
        },
        "Loja Física": {
          "nps": 54.5,
          "n": 44
        },
        "Outros": {
          "nps": 85.7,
          "n": 28
        },
        "Promoções & Fidelidade": {
          "nps": 45.2,
          "n": 126
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 49,
        "Abastecimento": 37,
        "Loja Física": 11,
        "Outros": 4,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Entrega & Logística": 79,
        "Atendimento": 78,
        "Promoções & Fidelidade": 77,
        "Loja Física": 33,
        "Abastecimento": 28,
        "Outros": 24
      }
    },
    {
      "nome": "L5023-JOSE BONIFACIO (0813)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 57.3,
      "nps_textual": 55.7,
      "nps_hibrido": 62.4,
      "delta_hibrido": 5.1,
      "pct_pos": 70.6,
      "pct_neu": 14.5,
      "pct_neg": 14.9,
      "severidade": 29.14,
      "transacoes": 74166,
      "indice_prioridade": 53.4,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 255,
      "avaliacoes_ponderadas": 1139.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 42
        },
        {
          "cat": "Loja Física",
          "pct": 18
        },
        {
          "cat": "Abastecimento",
          "pct": 32
        }
      ],
      "top_elogios": [
        {
          "cat": "Loja Física",
          "pct": 17
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 32
        },
        {
          "cat": "Abastecimento",
          "pct": 9
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 96.0,
          "neg": 4.0
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
          "neg": 20.0
        },
        {
          "m": "2025-09",
          "pos": 85.7,
          "neg": 7.1
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
          "pos": 70.8,
          "neg": 20.8
        },
        {
          "m": "2026-01",
          "pos": 52.9,
          "neg": 17.6
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 11.4,
          "n": 44
        },
        "Atendimento": {
          "nps": 82.6,
          "n": 23
        },
        "Entrega & Logística": {
          "nps": 90.5,
          "n": 42
        },
        "Loja Física": {
          "nps": 60.0,
          "n": 40
        },
        "Outros": {
          "nps": 82.4,
          "n": 17
        },
        "Promoções & Fidelidade": {
          "nps": 47.2,
          "n": 89
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 31,
        "Abastecimento": 27,
        "Loja Física": 9,
        "Outros": 3,
        "Atendimento": 3,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 58,
        "Entrega & Logística": 40,
        "Loja Física": 31,
        "Atendimento": 20,
        "Abastecimento": 17,
        "Outros": 14
      }
    },
    {
      "nome": "L5031-PERDIZES (0860)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 61.5,
      "nps_textual": 59.9,
      "nps_hibrido": 62.6,
      "delta_hibrido": 1.0,
      "pct_pos": 72.2,
      "pct_neu": 15.4,
      "pct_neg": 12.3,
      "severidade": 28.41,
      "transacoes": 130515,
      "indice_prioridade": 53.4,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 486,
      "avaliacoes_ponderadas": 1548.0,
      "top_problemas": [
        {
          "cat": "Entrega & Logística",
          "pct": 5
        },
        {
          "cat": "Atendimento",
          "pct": 10
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 43
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 23
        },
        {
          "cat": "Entrega & Logística",
          "pct": 24
        },
        {
          "cat": "Outros",
          "pct": 10
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 63.6,
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
          "pos": 67.5,
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
          "neg": 13.9
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
          "pos": 81.4,
          "neg": 9.3
        },
        {
          "m": "2026-02",
          "pos": 63.2,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 3.7,
          "n": 54
        },
        "Atendimento": {
          "nps": 82.2,
          "n": 90
        },
        "Entrega & Logística": {
          "nps": 90.9,
          "n": 88
        },
        "Loja Física": {
          "nps": 62.7,
          "n": 51
        },
        "Outros": {
          "nps": 80.5,
          "n": 41
        },
        "Promoções & Fidelidade": {
          "nps": 43.2,
          "n": 162
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 66,
        "Abastecimento": 32,
        "Loja Física": 15,
        "Atendimento": 10,
        "Outros": 7,
        "Entrega & Logística": 5
      },
      "elog_counts": {
        "Promoções & Fidelidade": 96,
        "Entrega & Logística": 83,
        "Atendimento": 80,
        "Loja Física": 36,
        "Outros": 34,
        "Abastecimento": 22
      }
    },
    {
      "nome": "L5024-VALINHOS (0814)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 64.6,
      "nps_textual": 60.7,
      "nps_hibrido": 65.4,
      "delta_hibrido": 0.9,
      "pct_pos": 73.4,
      "pct_neu": 13.8,
      "pct_neg": 12.7,
      "severidade": 28.23,
      "transacoes": 136626,
      "indice_prioridade": 53.2,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 463,
      "avaliacoes_ponderadas": 2074.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 41
        },
        {
          "cat": "Loja Física",
          "pct": 20
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 34
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 37
        },
        {
          "cat": "Loja Física",
          "pct": 14
        },
        {
          "cat": "Entrega & Logística",
          "pct": 22
        }
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
          "neg": 4.8
        },
        {
          "m": "2025-05",
          "pos": 69.0,
          "neg": 17.2
        },
        {
          "m": "2025-06",
          "pos": 77.1,
          "neg": 11.4
        },
        {
          "m": "2025-07",
          "pos": 75.9,
          "neg": 17.2
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
          "pos": 52.8,
          "neg": 16.7
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 4.2,
          "n": 71
        },
        "Atendimento": {
          "nps": 90.7,
          "n": 43
        },
        "Entrega & Logística": {
          "nps": 96.2,
          "n": 78
        },
        "Loja Física": {
          "nps": 57.1,
          "n": 63
        },
        "Outros": {
          "nps": 92.0,
          "n": 25
        },
        "Promoções & Fidelidade": {
          "nps": 57.4,
          "n": 183
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 58,
        "Abastecimento": 44,
        "Loja Física": 15,
        "Atendimento": 3,
        "Entrega & Logística": 2,
        "Outros": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 125,
        "Entrega & Logística": 76,
        "Loja Física": 48,
        "Atendimento": 40,
        "Abastecimento": 27,
        "Outros": 24
      }
    },
    {
      "nome": "L5158-LEBLON",
      "flag": "regular",
      "uf": "RJ",
      "regiao": "RJ",
      "nps_trad": 68.3,
      "nps_textual": 62.0,
      "nps_hibrido": 65.1,
      "delta_hibrido": -3.2,
      "pct_pos": 73.4,
      "pct_neu": 15.1,
      "pct_neg": 11.4,
      "severidade": 28.31,
      "transacoes": 102542,
      "indice_prioridade": 53.0,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 911,
      "avaliacoes_ponderadas": 3594.0,
      "top_problemas": [
        {
          "cat": "Outros",
          "pct": 3
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 43
        },
        {
          "cat": "Loja Física",
          "pct": 18
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 35
        },
        {
          "cat": "Loja Física",
          "pct": 16
        },
        {
          "cat": "Abastecimento",
          "pct": 10
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 82.3,
          "neg": 6.5
        },
        {
          "m": "2025-02",
          "pos": 68.4,
          "neg": 15.8
        },
        {
          "m": "2025-03",
          "pos": 78.0,
          "neg": 7.3
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
          "pos": 82.4,
          "neg": 2.9
        },
        {
          "m": "2025-07",
          "pos": 77.6,
          "neg": 6.9
        },
        {
          "m": "2025-08",
          "pos": 71.7,
          "neg": 15.1
        },
        {
          "m": "2025-09",
          "pos": 76.3,
          "neg": 14.5
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
          "pos": 52.6,
          "neg": 19.7
        },
        {
          "m": "2026-03",
          "pos": 80.8,
          "neg": 5.8
        },
        {
          "m": "2026-04",
          "pos": 80.4,
          "neg": 8.7
        },
        {
          "m": "2026-05",
          "pos": 83.3,
          "neg": 16.7
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 24.3,
          "n": 136
        },
        "Atendimento": {
          "nps": 85.5,
          "n": 83
        },
        "Entrega & Logística": {
          "nps": 92.3,
          "n": 130
        },
        "Loja Física": {
          "nps": 59.4,
          "n": 143
        },
        "Outros": {
          "nps": 84.2,
          "n": 76
        },
        "Promoções & Fidelidade": {
          "nps": 56.0,
          "n": 343
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 106,
        "Abastecimento": 70,
        "Loja Física": 39,
        "Atendimento": 10,
        "Outros": 9,
        "Entrega & Logística": 8
      },
      "elog_counts": {
        "Promoções & Fidelidade": 237,
        "Entrega & Logística": 122,
        "Loja Física": 104,
        "Atendimento": 73,
        "Outros": 67,
        "Abastecimento": 66
      }
    },
    {
      "nome": "L5071-BELA VISTA (1326)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 62.0,
      "nps_textual": 60.8,
      "nps_hibrido": 61.3,
      "delta_hibrido": -0.7,
      "pct_pos": 71.6,
      "pct_neu": 17.6,
      "pct_neg": 10.8,
      "severidade": 28.35,
      "transacoes": 164634,
      "indice_prioridade": 52.9,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 592,
      "avaliacoes_ponderadas": 2154.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 50
        },
        {
          "cat": "Atendimento",
          "pct": 5
        },
        {
          "cat": "Abastecimento",
          "pct": 28
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 10
        },
        {
          "cat": "Atendimento",
          "pct": 19
        },
        {
          "cat": "Loja Física",
          "pct": 13
        }
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
          "pos": 79.2,
          "neg": 5.7
        },
        {
          "m": "2025-06",
          "pos": 85.7,
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
          "neg": 8.1
        },
        {
          "m": "2025-10",
          "pos": 58.5,
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
          "pos": 71.9,
          "neg": 3.1
        },
        {
          "m": "2026-02",
          "pos": 71.0,
          "neg": 6.5
        },
        {
          "m": "2026-03",
          "pos": 73.5,
          "neg": 8.2
        },
        {
          "m": "2026-04",
          "pos": 69.4,
          "neg": 13.9
        },
        {
          "m": "2026-05",
          "pos": 52.4,
          "neg": 23.8
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 31.2,
          "n": 77
        },
        "Atendimento": {
          "nps": 89.8,
          "n": 88
        },
        "Entrega & Logística": {
          "nps": 92.1,
          "n": 89
        },
        "Loja Física": {
          "nps": 59.8,
          "n": 82
        },
        "Outros": {
          "nps": 70.5,
          "n": 44
        },
        "Promoções & Fidelidade": {
          "nps": 44.5,
          "n": 211
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 85,
        "Abastecimento": 35,
        "Loja Física": 25,
        "Outros": 11,
        "Entrega & Logística": 6,
        "Atendimento": 6
      },
      "elog_counts": {
        "Promoções & Fidelidade": 126,
        "Entrega & Logística": 83,
        "Atendimento": 82,
        "Loja Física": 57,
        "Abastecimento": 42,
        "Outros": 33
      }
    },
    {
      "nome": "L5073-VILA GUILHERME (1331)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 66.4,
      "nps_textual": 59.6,
      "nps_hibrido": 63.2,
      "delta_hibrido": -3.3,
      "pct_pos": 71.4,
      "pct_neu": 16.8,
      "pct_neg": 11.8,
      "severidade": 28.58,
      "transacoes": 128254,
      "indice_prioridade": 52.9,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 399,
      "avaliacoes_ponderadas": 1751.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 9
        },
        {
          "cat": "Abastecimento",
          "pct": 45
        },
        {
          "cat": "Loja Física",
          "pct": 17
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 35
        },
        {
          "cat": "Entrega & Logística",
          "pct": 24
        },
        {
          "cat": "Loja Física",
          "pct": 12
        }
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
          "pos": 64.3,
          "neg": 7.1
        },
        {
          "m": "2025-08",
          "pos": 80.0,
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
          "pos": 72.4,
          "neg": 6.9
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 3.3,
          "n": 61
        },
        "Atendimento": {
          "nps": 71.1,
          "n": 45
        },
        "Entrega & Logística": {
          "nps": 97.1,
          "n": 69
        },
        "Loja Física": {
          "nps": 51.9,
          "n": 52
        },
        "Outros": {
          "nps": 82.1,
          "n": 28
        },
        "Promoções & Fidelidade": {
          "nps": 60.4,
          "n": 144
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 43,
        "Abastecimento": 38,
        "Loja Física": 17,
        "Atendimento": 9,
        "Outros": 5,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 101,
        "Entrega & Logística": 67,
        "Atendimento": 36,
        "Loja Física": 35,
        "Outros": 23,
        "Abastecimento": 23
      }
    },
    {
      "nome": "L5102-POMPEIA DESEMBARGADOR (1449)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 68.0,
      "nps_textual": 61.4,
      "nps_hibrido": 64.4,
      "delta_hibrido": -3.6,
      "pct_pos": 73.8,
      "pct_neu": 13.7,
      "pct_neg": 12.4,
      "severidade": 27.82,
      "transacoes": 126547,
      "indice_prioridade": 52.9,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 531,
      "avaliacoes_ponderadas": 1931.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 9
        },
        {
          "cat": "Loja Física",
          "pct": 20
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 33
        }
      ],
      "top_elogios": [
        {
          "cat": "Outros",
          "pct": 15
        },
        {
          "cat": "Atendimento",
          "pct": 24
        },
        {
          "cat": "Entrega & Logística",
          "pct": 21
        }
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
          "pos": 69.6,
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
          "pos": 39.3,
          "neg": 32.1
        },
        {
          "m": "2025-07",
          "pos": 80.0,
          "neg": 8.0
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
          "pos": 78.7,
          "neg": 2.1
        },
        {
          "m": "2026-02",
          "pos": 87.0,
          "neg": 10.9
        },
        {
          "m": "2026-03",
          "pos": 85.0,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -8.3,
          "n": 48
        },
        "Atendimento": {
          "nps": 85.4,
          "n": 103
        },
        "Entrega & Logística": {
          "nps": 96.5,
          "n": 85
        },
        "Loja Física": {
          "nps": 44.1,
          "n": 68
        },
        "Outros": {
          "nps": 84.8,
          "n": 66
        },
        "Promoções & Fidelidade": {
          "nps": 46.0,
          "n": 161
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 65,
        "Abastecimento": 30,
        "Loja Física": 25,
        "Atendimento": 9,
        "Outros": 8,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 96,
        "Atendimento": 94,
        "Entrega & Logística": 83,
        "Outros": 58,
        "Loja Física": 43,
        "Abastecimento": 18
      }
    },
    {
      "nome": "L5213-REMEDIOS ONIX",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 70.6,
      "nps_textual": 59.3,
      "nps_hibrido": 64.1,
      "delta_hibrido": -6.5,
      "pct_pos": 72.3,
      "pct_neu": 14.7,
      "pct_neg": 13.0,
      "severidade": 28.29,
      "transacoes": 109401,
      "indice_prioridade": 52.8,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 354,
      "avaliacoes_ponderadas": 1612.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 46
        },
        {
          "cat": "Loja Física",
          "pct": 22
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 24
        }
      ],
      "top_elogios": [
        {
          "cat": "Entrega & Logística",
          "pct": 25
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 30
        },
        {
          "cat": "Abastecimento",
          "pct": 9
        }
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
          "pos": 81.8,
          "neg": 13.6
        },
        {
          "m": "2025-04",
          "pos": 66.7,
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
          "neg": 25.0
        },
        {
          "m": "2025-10",
          "pos": 61.5,
          "neg": 15.4
        },
        {
          "m": "2025-11",
          "pos": 54.5,
          "neg": 0.0
        },
        {
          "m": "2025-12",
          "pos": 73.9,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 3.3,
          "n": 61
        },
        "Atendimento": {
          "nps": 92.3,
          "n": 39
        },
        "Entrega & Logística": {
          "nps": 94.0,
          "n": 67
        },
        "Loja Física": {
          "nps": 43.8,
          "n": 48
        },
        "Outros": {
          "nps": 84.6,
          "n": 26
        },
        "Promoções & Fidelidade": {
          "nps": 58.4,
          "n": 113
        }
      },
      "prob_counts": {
        "Abastecimento": 38,
        "Promoções & Fidelidade": 36,
        "Loja Física": 17,
        "Outros": 3,
        "Atendimento": 2,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 77,
        "Entrega & Logística": 65,
        "Atendimento": 37,
        "Loja Física": 31,
        "Abastecimento": 23,
        "Outros": 23
      }
    },
    {
      "nome": "L5126-CELSO GARCIA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 67.5,
      "nps_textual": 62.9,
      "nps_hibrido": 64.4,
      "delta_hibrido": -3.2,
      "pct_pos": 74.6,
      "pct_neu": 13.7,
      "pct_neg": 11.7,
      "severidade": 27.65,
      "transacoes": 149229,
      "indice_prioridade": 52.7,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 665,
      "avaliacoes_ponderadas": 3175.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 42
        },
        {
          "cat": "Atendimento",
          "pct": 6
        },
        {
          "cat": "Loja Física",
          "pct": 18
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 35
        },
        {
          "cat": "Entrega & Logística",
          "pct": 21
        },
        {
          "cat": "Loja Física",
          "pct": 13
        }
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
          "pos": 81.0,
          "neg": 4.8
        },
        {
          "m": "2025-04",
          "pos": 70.5,
          "neg": 18.2
        },
        {
          "m": "2025-05",
          "pos": 67.6,
          "neg": 20.6
        },
        {
          "m": "2025-06",
          "pos": 85.0,
          "neg": 7.5
        },
        {
          "m": "2025-07",
          "pos": 72.4,
          "neg": 6.9
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
          "pos": 76.3,
          "neg": 13.2
        },
        {
          "m": "2026-01",
          "pos": 68.6,
          "neg": 8.6
        },
        {
          "m": "2026-02",
          "pos": 73.0,
          "neg": 18.9
        },
        {
          "m": "2026-03",
          "pos": 66.7,
          "neg": 16.7
        },
        {
          "m": "2026-04",
          "pos": 63.3,
          "neg": 16.3
        },
        {
          "m": "2026-05",
          "pos": 67.9,
          "neg": 10.7
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 19.3,
          "n": 88
        },
        "Atendimento": {
          "nps": 83.5,
          "n": 79
        },
        "Entrega & Logística": {
          "nps": 96.2,
          "n": 106
        },
        "Loja Física": {
          "nps": 55.1,
          "n": 89
        },
        "Outros": {
          "nps": 88.0,
          "n": 50
        },
        "Promoções & Fidelidade": {
          "nps": 55.3,
          "n": 253
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 80,
        "Abastecimento": 47,
        "Loja Física": 26,
        "Atendimento": 8,
        "Outros": 5,
        "Entrega & Logística": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 173,
        "Entrega & Logística": 103,
        "Atendimento": 71,
        "Loja Física": 63,
        "Outros": 45,
        "Abastecimento": 41
      }
    },
    {
      "nome": "L5253-HORTO",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 67.2,
      "nps_textual": 59.4,
      "nps_hibrido": 63.1,
      "delta_hibrido": -4.1,
      "pct_pos": 71.9,
      "pct_neu": 15.5,
      "pct_neg": 12.6,
      "severidade": 28.84,
      "transacoes": 96377,
      "indice_prioridade": 52.7,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 534,
      "avaliacoes_ponderadas": 2277.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 36
        },
        {
          "cat": "Abastecimento",
          "pct": 30
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 28
        }
      ],
      "top_elogios": [
        {
          "cat": "Loja Física",
          "pct": 18
        },
        {
          "cat": "Entrega & Logística",
          "pct": 24
        },
        {
          "cat": "Abastecimento",
          "pct": 10
        }
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
          "pos": 62.2,
          "neg": 22.2
        },
        {
          "m": "2025-05",
          "pos": 65.9,
          "neg": 11.4
        },
        {
          "m": "2025-06",
          "pos": 82.1,
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
          "pos": 70.3,
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
          "neg": 9.4
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 22.0,
          "n": 82
        },
        "Atendimento": {
          "nps": 88.1,
          "n": 42
        },
        "Entrega & Logística": {
          "nps": 97.9,
          "n": 95
        },
        "Loja Física": {
          "nps": 44.4,
          "n": 99
        },
        "Outros": {
          "nps": 80.4,
          "n": 46
        },
        "Promoções & Fidelidade": {
          "nps": 51.8,
          "n": 170
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 63,
        "Abastecimento": 44,
        "Loja Física": 31,
        "Outros": 7,
        "Atendimento": 3,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 107,
        "Entrega & Logística": 93,
        "Loja Física": 68,
        "Atendimento": 39,
        "Outros": 39,
        "Abastecimento": 38
      }
    },
    {
      "nome": "L5051-VILA PRUDENTE (1276)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 62.8,
      "nps_textual": 56.2,
      "nps_hibrido": 60.9,
      "delta_hibrido": -1.9,
      "pct_pos": 68.5,
      "pct_neu": 19.2,
      "pct_neg": 12.3,
      "severidade": 29.16,
      "transacoes": 113028,
      "indice_prioridade": 52.5,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 317,
      "avaliacoes_ponderadas": 1300.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 41
        },
        {
          "cat": "Loja Física",
          "pct": 18
        },
        {
          "cat": "Abastecimento",
          "pct": 31
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 24
        },
        {
          "cat": "Outros",
          "pct": 11
        },
        {
          "cat": "Entrega & Logística",
          "pct": 22
        }
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
          "neg": 26.7
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 13.5,
          "n": 37
        },
        "Atendimento": {
          "nps": 83.3,
          "n": 60
        },
        "Entrega & Logística": {
          "nps": 95.9,
          "n": 49
        },
        "Loja Física": {
          "nps": 48.6,
          "n": 37
        },
        "Outros": {
          "nps": 78.6,
          "n": 28
        },
        "Promoções & Fidelidade": {
          "nps": 34.0,
          "n": 106
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 54,
        "Abastecimento": 20,
        "Loja Física": 12,
        "Atendimento": 8,
        "Outros": 5,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 52,
        "Atendimento": 52,
        "Entrega & Logística": 48,
        "Loja Física": 25,
        "Outros": 23,
        "Abastecimento": 17
      }
    },
    {
      "nome": "L5153-EMBARE",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Litoral",
      "nps_trad": 70.2,
      "nps_textual": 63.5,
      "nps_hibrido": 68.1,
      "delta_hibrido": -2.1,
      "pct_pos": 74.6,
      "pct_neu": 14.4,
      "pct_neg": 11.0,
      "severidade": 27.73,
      "transacoes": 205613,
      "indice_prioridade": 52.5,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 806,
      "avaliacoes_ponderadas": 3194.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 49
        },
        {
          "cat": "Abastecimento",
          "pct": 36
        },
        {
          "cat": "Loja Física",
          "pct": 10
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 35
        },
        {
          "cat": "Entrega & Logística",
          "pct": 24
        },
        {
          "cat": "Loja Física",
          "pct": 15
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 73.2,
          "neg": 14.6
        },
        {
          "m": "2025-02",
          "pos": 60.0,
          "neg": 10.0
        },
        {
          "m": "2025-03",
          "pos": 72.2,
          "neg": 11.1
        },
        {
          "m": "2025-04",
          "pos": 74.0,
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
          "pos": 75.4,
          "neg": 4.9
        },
        {
          "m": "2025-10",
          "pos": 82.0,
          "neg": 9.8
        },
        {
          "m": "2025-11",
          "pos": 78.0,
          "neg": 12.2
        },
        {
          "m": "2025-12",
          "pos": 71.2,
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
          "neg": 12.8
        },
        {
          "m": "2026-03",
          "pos": 68.4,
          "neg": 14.0
        },
        {
          "m": "2026-04",
          "pos": 79.2,
          "neg": 13.2
        },
        {
          "m": "2026-05",
          "pos": 78.8,
          "neg": 6.1
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 18.8,
          "n": 112
        },
        "Atendimento": {
          "nps": 87.0,
          "n": 54
        },
        "Entrega & Logística": {
          "nps": 96.6,
          "n": 146
        },
        "Loja Física": {
          "nps": 75.2,
          "n": 105
        },
        "Outros": {
          "nps": 84.1,
          "n": 69
        },
        "Promoções & Fidelidade": {
          "nps": 51.9,
          "n": 320
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 110,
        "Abastecimento": 59,
        "Loja Física": 17,
        "Outros": 10,
        "Atendimento": 5,
        "Entrega & Logística": 4
      },
      "elog_counts": {
        "Promoções & Fidelidade": 210,
        "Entrega & Logística": 142,
        "Loja Física": 88,
        "Outros": 59,
        "Abastecimento": 53,
        "Atendimento": 49
      }
    },
    {
      "nome": "L5169-JACAREI",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 64.5,
      "nps_textual": 58.4,
      "nps_hibrido": 63.9,
      "delta_hibrido": -0.6,
      "pct_pos": 72.0,
      "pct_neu": 14.5,
      "pct_neg": 13.6,
      "severidade": 28.72,
      "transacoes": 110479,
      "indice_prioridade": 52.4,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 346,
      "avaliacoes_ponderadas": 1822.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 13
        },
        {
          "cat": "Abastecimento",
          "pct": 51
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 34
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 12
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 33
        },
        {
          "cat": "Loja Física",
          "pct": 15
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 74.3,
          "neg": 14.3
        },
        {
          "m": "2025-02",
          "pos": 73.3,
          "neg": 20.0
        },
        {
          "m": "2025-03",
          "pos": 77.8,
          "neg": 18.5
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
          "pos": 72.2,
          "neg": 11.1
        },
        {
          "m": "2025-08",
          "pos": 60.0,
          "neg": 26.7
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
          "pos": 58.6,
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
          "pos": 61.5,
          "neg": 0.0
        },
        {
          "m": "2026-05",
          "pos": 76.9,
          "neg": 7.7
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 8.8,
          "n": 68
        },
        "Atendimento": {
          "nps": 54.5,
          "n": 33
        },
        "Entrega & Logística": {
          "nps": 100.0,
          "n": 50
        },
        "Loja Física": {
          "nps": 94.9,
          "n": 39
        },
        "Outros": {
          "nps": 77.4,
          "n": 31
        },
        "Promoções & Fidelidade": {
          "nps": 53.6,
          "n": 125
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 42,
        "Abastecimento": 38,
        "Atendimento": 9,
        "Outros": 6,
        "Loja Física": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 83,
        "Entrega & Logística": 50,
        "Loja Física": 37,
        "Abastecimento": 30,
        "Outros": 25,
        "Atendimento": 24
      }
    },
    {
      "nome": "L5122-PONTE RASA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 67.4,
      "nps_textual": 61.3,
      "nps_hibrido": 66.6,
      "delta_hibrido": -0.8,
      "pct_pos": 71.9,
      "pct_neu": 17.4,
      "pct_neg": 10.6,
      "severidade": 28.44,
      "transacoes": 169101,
      "indice_prioridade": 52.4,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 734,
      "avaliacoes_ponderadas": 3262.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 13
        },
        {
          "cat": "Abastecimento",
          "pct": 42
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 27
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 34
        },
        {
          "cat": "Loja Física",
          "pct": 15
        },
        {
          "cat": "Abastecimento",
          "pct": 9
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 73.3,
          "neg": 10.0
        },
        {
          "m": "2025-02",
          "pos": 75.8,
          "neg": 12.1
        },
        {
          "m": "2025-03",
          "pos": 75.0,
          "neg": 11.4
        },
        {
          "m": "2025-04",
          "pos": 70.2,
          "neg": 4.3
        },
        {
          "m": "2025-05",
          "pos": 58.8,
          "neg": 17.6
        },
        {
          "m": "2025-06",
          "pos": 79.2,
          "neg": 9.4
        },
        {
          "m": "2025-07",
          "pos": 82.4,
          "neg": 2.9
        },
        {
          "m": "2025-08",
          "pos": 80.9,
          "neg": 2.1
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
          "neg": 9.5
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
          "pos": 81.2,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 14.4,
          "n": 111
        },
        "Atendimento": {
          "nps": 67.6,
          "n": 68
        },
        "Entrega & Logística": {
          "nps": 92.6,
          "n": 122
        },
        "Loja Física": {
          "nps": 65.4,
          "n": 107
        },
        "Outros": {
          "nps": 80.7,
          "n": 57
        },
        "Promoções & Fidelidade": {
          "nps": 59.1,
          "n": 269
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 89,
        "Abastecimento": 62,
        "Loja Física": 27,
        "Atendimento": 12,
        "Outros": 9,
        "Entrega & Logística": 7
      },
      "elog_counts": {
        "Promoções & Fidelidade": 180,
        "Entrega & Logística": 115,
        "Loja Física": 80,
        "Atendimento": 56,
        "Abastecimento": 49,
        "Outros": 48
      }
    },
    {
      "nome": "L5063-SAO CAMILO (1311)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 63.4,
      "nps_textual": 63.9,
      "nps_hibrido": 64.5,
      "delta_hibrido": 1.1,
      "pct_pos": 77.6,
      "pct_neu": 8.7,
      "pct_neg": 13.7,
      "severidade": 26.31,
      "transacoes": 79919,
      "indice_prioridade": 52.0,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 366,
      "avaliacoes_ponderadas": 1040.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 22
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 40
        },
        {
          "cat": "Atendimento",
          "pct": 6
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 30
        },
        {
          "cat": "Entrega & Logística",
          "pct": 27
        },
        {
          "cat": "Outros",
          "pct": 8
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 45.0,
          "neg": 35.0
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
          "pos": 83.3,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 8.1,
          "n": 37
        },
        "Atendimento": {
          "nps": 92.2,
          "n": 90
        },
        "Entrega & Logística": {
          "nps": 96.2,
          "n": 78
        },
        "Loja Física": {
          "nps": 40.5,
          "n": 42
        },
        "Outros": {
          "nps": 91.3,
          "n": 23
        },
        "Promoções & Fidelidade": {
          "nps": 36.5,
          "n": 96
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 41,
        "Abastecimento": 20,
        "Loja Física": 14,
        "Atendimento": 4,
        "Entrega & Logística": 2,
        "Outros": 1
      },
      "elog_counts": {
        "Atendimento": 86,
        "Entrega & Logística": 76,
        "Promoções & Fidelidade": 55,
        "Loja Física": 28,
        "Outros": 22,
        "Abastecimento": 17
      }
    },
    {
      "nome": "L5138-306 ASA NORTE",
      "flag": "regular",
      "uf": "DF",
      "regiao": "DF",
      "nps_trad": 62.5,
      "nps_textual": 60.9,
      "nps_hibrido": 62.3,
      "delta_hibrido": -0.1,
      "pct_pos": 71.7,
      "pct_neu": 17.5,
      "pct_neg": 10.8,
      "severidade": 28.36,
      "transacoes": 109525,
      "indice_prioridade": 52.0,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 693,
      "avaliacoes_ponderadas": 2819.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 51
        },
        {
          "cat": "Abastecimento",
          "pct": 32
        },
        {
          "cat": "Loja Física",
          "pct": 13
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 42
        },
        {
          "cat": "Outros",
          "pct": 11
        },
        {
          "cat": "Abastecimento",
          "pct": 9
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 73.1,
          "neg": 3.8
        },
        {
          "m": "2025-02",
          "pos": 78.4,
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
          "pos": 64.8,
          "neg": 14.8
        },
        {
          "m": "2025-06",
          "pos": 81.2,
          "neg": 4.7
        },
        {
          "m": "2025-07",
          "pos": 73.7,
          "neg": 14.0
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
          "pos": 72.2,
          "neg": 8.3
        },
        {
          "m": "2026-03",
          "pos": 61.0,
          "neg": 17.1
        },
        {
          "m": "2026-04",
          "pos": 77.1,
          "neg": 10.4
        },
        {
          "m": "2026-05",
          "pos": 70.8,
          "neg": 12.5
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 24.2,
          "n": 91
        },
        "Atendimento": {
          "nps": 89.1,
          "n": 46
        },
        "Entrega & Logística": {
          "nps": 88.0,
          "n": 83
        },
        "Loja Física": {
          "nps": 65.9,
          "n": 88
        },
        "Outros": {
          "nps": 88.9,
          "n": 63
        },
        "Promoções & Fidelidade": {
          "nps": 53.4,
          "n": 322
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 112,
        "Abastecimento": 45,
        "Loja Física": 20,
        "Entrega & Logística": 8,
        "Outros": 6,
        "Atendimento": 5
      },
      "elog_counts": {
        "Promoções & Fidelidade": 210,
        "Entrega & Logística": 75,
        "Loja Física": 68,
        "Outros": 57,
        "Abastecimento": 46,
        "Atendimento": 41
      }
    },
    {
      "nome": "L5053-MORUMBI (1278)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 65.5,
      "nps_textual": 61.1,
      "nps_hibrido": 63.6,
      "delta_hibrido": -1.9,
      "pct_pos": 73.6,
      "pct_neu": 13.9,
      "pct_neg": 12.5,
      "severidade": 27.52,
      "transacoes": 115415,
      "indice_prioridade": 51.9,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 368,
      "avaliacoes_ponderadas": 1279.0,
      "top_problemas": [
        {
          "cat": "Outros",
          "pct": 7
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 43
        },
        {
          "cat": "Loja Física",
          "pct": 20
        }
      ],
      "top_elogios": [
        {
          "cat": "Outros",
          "pct": 12
        },
        {
          "cat": "Atendimento",
          "pct": 19
        },
        {
          "cat": "Entrega & Logística",
          "pct": 21
        }
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
          "pos": 69.2,
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
          "pos": 70.8,
          "neg": 12.5
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 12.5,
          "n": 40
        },
        "Atendimento": {
          "nps": 86.0,
          "n": 57
        },
        "Entrega & Logística": {
          "nps": 100.0,
          "n": 58
        },
        "Loja Física": {
          "nps": 53.5,
          "n": 43
        },
        "Outros": {
          "nps": 76.9,
          "n": 39
        },
        "Promoções & Fidelidade": {
          "nps": 45.4,
          "n": 130
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 51,
        "Abastecimento": 23,
        "Loja Física": 11,
        "Atendimento": 6,
        "Outros": 6
      },
      "elog_counts": {
        "Promoções & Fidelidade": 79,
        "Entrega & Logística": 58,
        "Atendimento": 51,
        "Outros": 33,
        "Loja Física": 32,
        "Abastecimento": 17
      }
    },
    {
      "nome": "L5144-EMBU DAS ARTES",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 65.1,
      "nps_textual": 62.0,
      "nps_hibrido": 62.9,
      "delta_hibrido": -2.1,
      "pct_pos": 74.3,
      "pct_neu": 13.3,
      "pct_neg": 12.4,
      "severidade": 27.47,
      "transacoes": 117761,
      "indice_prioridade": 51.9,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 518,
      "avaliacoes_ponderadas": 2491.0,
      "top_problemas": [
        {
          "cat": "Entrega & Logística",
          "pct": 5
        },
        {
          "cat": "Loja Física",
          "pct": 30
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 34
        }
      ],
      "top_elogios": [
        {
          "cat": "Entrega & Logística",
          "pct": 25
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 30
        },
        {
          "cat": "Abastecimento",
          "pct": 9
        }
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
          "pos": 67.7,
          "neg": 16.1
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
          "neg": 8.6
        },
        {
          "m": "2026-01",
          "pos": 70.6,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 31.7,
          "n": 63
        },
        "Atendimento": {
          "nps": 90.5,
          "n": 63
        },
        "Entrega & Logística": {
          "nps": 91.3,
          "n": 103
        },
        "Loja Física": {
          "nps": 32.0,
          "n": 75
        },
        "Outros": {
          "nps": 79.5,
          "n": 39
        },
        "Promoções & Fidelidade": {
          "nps": 54.3,
          "n": 175
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 58,
        "Loja Física": 32,
        "Abastecimento": 28,
        "Outros": 6,
        "Entrega & Logística": 6,
        "Atendimento": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 117,
        "Entrega & Logística": 97,
        "Atendimento": 60,
        "Loja Física": 43,
        "Abastecimento": 35,
        "Outros": 33
      }
    },
    {
      "nome": "L5064-CHACARA INGLESA (1312)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 63.4,
      "nps_textual": 61.4,
      "nps_hibrido": 61.6,
      "delta_hibrido": -1.7,
      "pct_pos": 73.5,
      "pct_neu": 14.4,
      "pct_neg": 12.1,
      "severidade": 27.58,
      "transacoes": 131104,
      "indice_prioridade": 51.9,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 404,
      "avaliacoes_ponderadas": 1661.0,
      "top_problemas": [
        {
          "cat": "Entrega & Logística",
          "pct": 6
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 43
        },
        {
          "cat": "Abastecimento",
          "pct": 43
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 21
        },
        {
          "cat": "Outros",
          "pct": 12
        },
        {
          "cat": "Loja Física",
          "pct": 14
        }
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
          "neg": 19.0
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
          "neg": 17.1
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
          "pos": 61.1,
          "neg": 5.6
        },
        {
          "m": "2026-05",
          "pos": 71.4,
          "neg": 14.3
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -1.9,
          "n": 52
        },
        "Atendimento": {
          "nps": 95.4,
          "n": 65
        },
        "Entrega & Logística": {
          "nps": 87.3,
          "n": 63
        },
        "Loja Física": {
          "nps": 73.6,
          "n": 53
        },
        "Outros": {
          "nps": 92.3,
          "n": 39
        },
        "Promoções & Fidelidade": {
          "nps": 43.2,
          "n": 132
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 54,
        "Abastecimento": 32,
        "Loja Física": 11,
        "Entrega & Logística": 5,
        "Outros": 3,
        "Atendimento": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 78,
        "Atendimento": 63,
        "Entrega & Logística": 58,
        "Loja Física": 42,
        "Outros": 36,
        "Abastecimento": 20
      }
    },
    {
      "nome": "L5182-SAO JOSE DO RIO PRETO (DAMHA)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 65.7,
      "nps_textual": 60.1,
      "nps_hibrido": 62.9,
      "delta_hibrido": -2.8,
      "pct_pos": 73.4,
      "pct_neu": 13.3,
      "pct_neg": 13.3,
      "severidade": 27.49,
      "transacoes": 67959,
      "indice_prioridade": 51.8,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 248,
      "avaliacoes_ponderadas": 1232.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 48
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 33
        },
        {
          "cat": "Loja Física",
          "pct": 12
        }
      ],
      "top_elogios": [
        {
          "cat": "Entrega & Logística",
          "pct": 26
        },
        {
          "cat": "Abastecimento",
          "pct": 10
        },
        {
          "cat": "Loja Física",
          "pct": 15
        }
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
          "neg": 33.3
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
          "pos": 71.4,
          "neg": 10.7
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 7.7,
          "n": 39
        },
        "Atendimento": {
          "nps": 79.3,
          "n": 29
        },
        "Entrega & Logística": {
          "nps": 96.0,
          "n": 50
        },
        "Loja Física": {
          "nps": 70.6,
          "n": 34
        },
        "Outros": {
          "nps": 73.7,
          "n": 19
        },
        "Promoções & Fidelidade": {
          "nps": 48.1,
          "n": 77
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 29,
        "Abastecimento": 20,
        "Loja Física": 6,
        "Outros": 5,
        "Atendimento": 4,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 48,
        "Entrega & Logística": 48,
        "Loja Física": 28,
        "Atendimento": 25,
        "Abastecimento": 19,
        "Outros": 14
      }
    },
    {
      "nome": "L5050-SOROCABA W.LUIZ (1273)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 68.5,
      "nps_textual": 63.4,
      "nps_hibrido": 66.3,
      "delta_hibrido": -2.2,
      "pct_pos": 75.5,
      "pct_neu": 12.3,
      "pct_neg": 12.1,
      "severidade": 27.5,
      "transacoes": 100967,
      "indice_prioridade": 51.8,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 593,
      "avaliacoes_ponderadas": 2328.0,
      "top_problemas": [
        {
          "cat": "Entrega & Logística",
          "pct": 4
        },
        {
          "cat": "Abastecimento",
          "pct": 38
        },
        {
          "cat": "Loja Física",
          "pct": 18
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 24
        },
        {
          "cat": "Abastecimento",
          "pct": 9
        },
        {
          "cat": "Entrega & Logística",
          "pct": 21
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 84.3,
          "neg": 11.8
        },
        {
          "m": "2025-02",
          "pos": 59.4,
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
          "pos": 78.9,
          "neg": 7.9
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
          "pos": 65.3,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 17.2,
          "n": 87
        },
        "Atendimento": {
          "nps": 92.0,
          "n": 113
        },
        "Entrega & Logística": {
          "nps": 90.3,
          "n": 103
        },
        "Loja Física": {
          "nps": 50.8,
          "n": 65
        },
        "Outros": {
          "nps": 91.7,
          "n": 48
        },
        "Promoções & Fidelidade": {
          "nps": 48.9,
          "n": 176
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 65,
        "Abastecimento": 45,
        "Loja Física": 19,
        "Entrega & Logística": 7,
        "Atendimento": 6,
        "Outros": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 111,
        "Atendimento": 107,
        "Entrega & Logística": 96,
        "Loja Física": 46,
        "Outros": 45,
        "Abastecimento": 42
      }
    },
    {
      "nome": "L5101-CIDADE SAO FRANCISCO (1432)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 67.0,
      "nps_textual": 62.1,
      "nps_hibrido": 64.7,
      "delta_hibrido": -2.3,
      "pct_pos": 74.7,
      "pct_neu": 12.6,
      "pct_neg": 12.6,
      "severidade": 27.41,
      "transacoes": 116565,
      "indice_prioridade": 51.7,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 348,
      "avaliacoes_ponderadas": 1233.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 43
        },
        {
          "cat": "Abastecimento",
          "pct": 39
        },
        {
          "cat": "Loja Física",
          "pct": 9
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 29
        },
        {
          "cat": "Entrega & Logística",
          "pct": 25
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 25
        }
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
          "pos": 70.6,
          "neg": 23.5
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
          "neg": 10.0
        },
        {
          "m": "2026-01",
          "pos": 79.2,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 2.1,
          "n": 47
        },
        "Atendimento": {
          "nps": 91.4,
          "n": 81
        },
        "Entrega & Logística": {
          "nps": 92.5,
          "n": 67
        },
        "Loja Física": {
          "nps": 66.7,
          "n": 33
        },
        "Outros": {
          "nps": 75.0,
          "n": 16
        },
        "Promoções & Fidelidade": {
          "nps": 43.3,
          "n": 104
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 40,
        "Abastecimento": 29,
        "Loja Física": 7,
        "Atendimento": 5,
        "Outros": 4,
        "Entrega & Logística": 3
      },
      "elog_counts": {
        "Atendimento": 76,
        "Promoções & Fidelidade": 64,
        "Entrega & Logística": 64,
        "Loja Física": 26,
        "Abastecimento": 18,
        "Outros": 12
      }
    },
    {
      "nome": "L5040-GUARULHOS (1211)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 68.9,
      "nps_textual": 65.0,
      "nps_hibrido": 67.1,
      "delta_hibrido": -1.9,
      "pct_pos": 77.3,
      "pct_neu": 10.5,
      "pct_neg": 12.2,
      "severidade": 26.94,
      "transacoes": 136117,
      "indice_prioridade": 51.6,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 695,
      "avaliacoes_ponderadas": 2628.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 27
        },
        {
          "cat": "Atendimento",
          "pct": 6
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 33
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 30
        },
        {
          "cat": "Outros",
          "pct": 11
        },
        {
          "cat": "Loja Física",
          "pct": 13
        }
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
          "pos": 84.8,
          "neg": 4.3
        },
        {
          "m": "2025-05",
          "pos": 82.5,
          "neg": 5.0
        },
        {
          "m": "2025-06",
          "pos": 83.9,
          "neg": 5.4
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
          "pos": 95.7,
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
          "pos": 62.5,
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
          "neg": 0.0
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 16.3,
          "n": 86
        },
        "Atendimento": {
          "nps": 91.2,
          "n": 171
        },
        "Entrega & Logística": {
          "nps": 93.9,
          "n": 98
        },
        "Loja Física": {
          "nps": 47.5,
          "n": 101
        },
        "Outros": {
          "nps": 90.5,
          "n": 63
        },
        "Promoções & Fidelidade": {
          "nps": 48.3,
          "n": 176
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 63,
        "Abastecimento": 46,
        "Loja Física": 30,
        "Atendimento": 10,
        "Outros": 5,
        "Entrega & Logística": 4
      },
      "elog_counts": {
        "Atendimento": 161,
        "Promoções & Fidelidade": 113,
        "Entrega & Logística": 94,
        "Loja Física": 71,
        "Outros": 58,
        "Abastecimento": 40
      }
    },
    {
      "nome": "L5065-LINS DE VASCONCELOS (1313)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 67.7,
      "nps_textual": 63.2,
      "nps_hibrido": 66.2,
      "delta_hibrido": -1.5,
      "pct_pos": 74.3,
      "pct_neu": 14.6,
      "pct_neg": 11.1,
      "severidade": 27.7,
      "transacoes": 121520,
      "indice_prioridade": 51.6,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 684,
      "avaliacoes_ponderadas": 2133.0,
      "top_problemas": [
        {
          "cat": "Entrega & Logística",
          "pct": 7
        },
        {
          "cat": "Abastecimento",
          "pct": 37
        },
        {
          "cat": "Loja Física",
          "pct": 17
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 28
        },
        {
          "cat": "Outros",
          "pct": 11
        },
        {
          "cat": "Loja Física",
          "pct": 14
        }
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
          "pos": 77.5,
          "neg": 8.5
        },
        {
          "m": "2025-04",
          "pos": 67.6,
          "neg": 5.4
        },
        {
          "m": "2025-05",
          "pos": 78.8,
          "neg": 7.7
        },
        {
          "m": "2025-06",
          "pos": 72.7,
          "neg": 13.6
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
          "pos": 70.7,
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
          "pos": 58.3,
          "neg": 4.2
        },
        {
          "m": "2026-05",
          "pos": 68.4,
          "neg": 21.1
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 2.4,
          "n": 82
        },
        "Atendimento": {
          "nps": 93.2,
          "n": 147
        },
        "Entrega & Logística": {
          "nps": 88.3,
          "n": 103
        },
        "Loja Física": {
          "nps": 58.8,
          "n": 97
        },
        "Outros": {
          "nps": 85.9,
          "n": 64
        },
        "Promoções & Fidelidade": {
          "nps": 47.1,
          "n": 191
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 76,
        "Abastecimento": 52,
        "Loja Física": 27,
        "Outros": 7,
        "Atendimento": 7,
        "Entrega & Logística": 7
      },
      "elog_counts": {
        "Atendimento": 140,
        "Promoções & Fidelidade": 115,
        "Entrega & Logística": 96,
        "Loja Física": 70,
        "Outros": 57,
        "Abastecimento": 30
      }
    },
    {
      "nome": "L5243-MONTE CASTELO",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 62.2,
      "nps_textual": 59.0,
      "nps_hibrido": 61.0,
      "delta_hibrido": -1.2,
      "pct_pos": 72.5,
      "pct_neu": 13.9,
      "pct_neg": 13.6,
      "severidade": 28.11,
      "transacoes": 82595,
      "indice_prioridade": 51.6,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 251,
      "avaliacoes_ponderadas": 1033.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 41
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 35
        },
        {
          "cat": "Loja Física",
          "pct": 15
        }
      ],
      "top_elogios": [
        {
          "cat": "Loja Física",
          "pct": 20
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 32
        },
        {
          "cat": "Entrega & Logística",
          "pct": 22
        }
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 0.0,
          "n": 33
        },
        "Atendimento": {
          "nps": 82.6,
          "n": 23
        },
        "Entrega & Logística": {
          "nps": 95.2,
          "n": 42
        },
        "Loja Física": {
          "nps": 64.6,
          "n": 48
        },
        "Outros": {
          "nps": 66.7,
          "n": 18
        },
        "Promoções & Fidelidade": {
          "nps": 52.9,
          "n": 87
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 29,
        "Abastecimento": 19,
        "Loja Física": 12,
        "Outros": 5,
        "Atendimento": 2,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 58,
        "Entrega & Logística": 40,
        "Loja Física": 36,
        "Atendimento": 21,
        "Abastecimento": 14,
        "Outros": 13
      }
    },
    {
      "nome": "L5249-SANTA TERESINHA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 64.1,
      "nps_textual": 61.5,
      "nps_hibrido": 61.3,
      "delta_hibrido": -2.8,
      "pct_pos": 73.3,
      "pct_neu": 15.0,
      "pct_neg": 11.8,
      "severidade": 27.69,
      "transacoes": 131910,
      "indice_prioridade": 51.5,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 434,
      "avaliacoes_ponderadas": 1908.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 41
        },
        {
          "cat": "Abastecimento",
          "pct": 41
        },
        {
          "cat": "Atendimento",
          "pct": 6
        }
      ],
      "top_elogios": [
        {
          "cat": "Outros",
          "pct": 12
        },
        {
          "cat": "Entrega & Logística",
          "pct": 25
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 32
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 81.8,
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
          "pos": 69.0,
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
          "pos": 60.0,
          "neg": 12.0
        },
        {
          "m": "2025-09",
          "pos": 83.8,
          "neg": 5.4
        },
        {
          "m": "2025-10",
          "pos": 71.4,
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
          "neg": 9.5
        },
        {
          "m": "2026-05",
          "pos": 80.0,
          "neg": 6.7
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 0.0,
          "n": 55
        },
        "Atendimento": {
          "nps": 76.6,
          "n": 64
        },
        "Entrega & Logística": {
          "nps": 97.5,
          "n": 79
        },
        "Loja Física": {
          "nps": 57.9,
          "n": 38
        },
        "Outros": {
          "nps": 90.5,
          "n": 42
        },
        "Promoções & Fidelidade": {
          "nps": 51.6,
          "n": 155
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 54,
        "Abastecimento": 34,
        "Atendimento": 12,
        "Loja Física": 11,
        "Outros": 4,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 101,
        "Entrega & Logística": 78,
        "Atendimento": 52,
        "Outros": 38,
        "Loja Física": 27,
        "Abastecimento": 21
      }
    },
    {
      "nome": "L5165-MOGI DAS CRUZES MOGILAR",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 66.1,
      "nps_textual": 58.0,
      "nps_hibrido": 65.2,
      "delta_hibrido": -0.9,
      "pct_pos": 70.5,
      "pct_neu": 17.0,
      "pct_neg": 12.5,
      "severidade": 28.8,
      "transacoes": 107254,
      "indice_prioridade": 51.5,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 336,
      "avaliacoes_ponderadas": 1677.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 10
        },
        {
          "cat": "Abastecimento",
          "pct": 48
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 26
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 35
        },
        {
          "cat": "Entrega & Logística",
          "pct": 25
        },
        {
          "cat": "Loja Física",
          "pct": 13
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 81.5,
          "neg": 11.1
        },
        {
          "m": "2025-02",
          "pos": 46.2,
          "neg": 15.4
        },
        {
          "m": "2025-03",
          "pos": 76.9,
          "neg": 7.7
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
          "pos": 66.7,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -4.0,
          "n": 50
        },
        "Atendimento": {
          "nps": 74.4,
          "n": 39
        },
        "Entrega & Logística": {
          "nps": 90.8,
          "n": 65
        },
        "Loja Física": {
          "nps": 73.0,
          "n": 37
        },
        "Outros": {
          "nps": 56.2,
          "n": 16
        },
        "Promoções & Fidelidade": {
          "nps": 56.6,
          "n": 129
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 45,
        "Abastecimento": 32,
        "Loja Física": 6,
        "Atendimento": 6,
        "Entrega & Logística": 5,
        "Outros": 5
      },
      "elog_counts": {
        "Promoções & Fidelidade": 84,
        "Entrega & Logística": 60,
        "Atendimento": 33,
        "Loja Física": 31,
        "Abastecimento": 18,
        "Outros": 11
      }
    },
    {
      "nome": "L5009-PIRITUBA (0508)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 67.7,
      "nps_textual": 61.2,
      "nps_hibrido": 64.8,
      "delta_hibrido": -2.9,
      "pct_pos": 72.5,
      "pct_neu": 16.2,
      "pct_neg": 11.3,
      "severidade": 28.25,
      "transacoes": 143019,
      "indice_prioridade": 51.2,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 520,
      "avaliacoes_ponderadas": 2022.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 20
        },
        {
          "cat": "Abastecimento",
          "pct": 39
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 34
        }
      ],
      "top_elogios": [
        {
          "cat": "Entrega & Logística",
          "pct": 26
        },
        {
          "cat": "Loja Física",
          "pct": 14
        },
        {
          "cat": "Atendimento",
          "pct": 17
        }
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
          "neg": 14.3
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
          "neg": 13.6
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
          "pos": 80.0,
          "neg": 0.0
        },
        {
          "m": "2026-04",
          "pos": 75.8,
          "neg": 0.0
        },
        {
          "m": "2026-05",
          "pos": 64.3,
          "neg": 7.1
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 10.8,
          "n": 74
        },
        "Atendimento": {
          "nps": 86.1,
          "n": 72
        },
        "Entrega & Logística": {
          "nps": 100.0,
          "n": 97
        },
        "Loja Física": {
          "nps": 56.8,
          "n": 74
        },
        "Outros": {
          "nps": 80.0,
          "n": 45
        },
        "Promoções & Fidelidade": {
          "nps": 46.2,
          "n": 158
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 65,
        "Abastecimento": 43,
        "Loja Física": 20,
        "Outros": 8,
        "Atendimento": 7
      },
      "elog_counts": {
        "Entrega & Logística": 97,
        "Promoções & Fidelidade": 93,
        "Atendimento": 65,
        "Loja Física": 54,
        "Outros": 37,
        "Abastecimento": 31
      }
    },
    {
      "nome": "L5236-JACAREI VILLA BRANCA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 63.4,
      "nps_textual": 59.3,
      "nps_hibrido": 62.8,
      "delta_hibrido": -0.7,
      "pct_pos": 74.5,
      "pct_neu": 10.3,
      "pct_neg": 15.2,
      "severidade": 27.13,
      "transacoes": 80150,
      "indice_prioridade": 51.0,
      "quadrante": "critico",
      "risco_oculto": false,
      "comentarios": 145,
      "avaliacoes_ponderadas": 694.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 50
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 41
        }
      ],
      "top_elogios": [
        {
          "cat": "Loja Física",
          "pct": 19
        },
        {
          "cat": "Atendimento",
          "pct": 23
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 30
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 83.3,
          "neg": 16.7
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -27.3,
          "n": 22
        },
        "Atendimento": {
          "nps": 100.0,
          "n": 25
        },
        "Entrega & Logística": {
          "nps": 100.0,
          "n": 14
        },
        "Loja Física": {
          "nps": 83.3,
          "n": 24
        },
        "Outros": {
          "nps": 83.3,
          "n": 12
        },
        "Promoções & Fidelidade": {
          "nps": 47.9,
          "n": 48
        }
      },
      "prob_counts": {
        "Abastecimento": 17,
        "Promoções & Fidelidade": 16,
        "Loja Física": 3,
        "Outros": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 32,
        "Atendimento": 25,
        "Loja Física": 21,
        "Entrega & Logística": 14,
        "Outros": 11,
        "Abastecimento": 5
      }
    },
    {
      "nome": "L5188-CAJAMAR",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 69.5,
      "nps_textual": 63.9,
      "nps_hibrido": 68.8,
      "delta_hibrido": -0.7,
      "pct_pos": 76.5,
      "pct_neu": 11.0,
      "pct_neg": 12.6,
      "severidade": 26.59,
      "transacoes": 155153,
      "indice_prioridade": 50.6,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 429,
      "avaliacoes_ponderadas": 2341.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 7
        },
        {
          "cat": "Abastecimento",
          "pct": 43
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 35
        }
      ],
      "top_elogios": [
        {
          "cat": "Outros",
          "pct": 11
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 32
        },
        {
          "cat": "Loja Física",
          "pct": 14
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 82.4,
          "neg": 5.9
        },
        {
          "m": "2025-02",
          "pos": 63.0,
          "neg": 18.5
        },
        {
          "m": "2025-03",
          "pos": 76.5,
          "neg": 17.6
        },
        {
          "m": "2025-04",
          "pos": 81.5,
          "neg": 11.1
        },
        {
          "m": "2025-05",
          "pos": 73.1,
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
          "neg": 17.4
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 3.7,
          "n": 54
        },
        "Atendimento": {
          "nps": 81.8,
          "n": 55
        },
        "Entrega & Logística": {
          "nps": 97.1,
          "n": 68
        },
        "Loja Física": {
          "nps": 67.8,
          "n": 59
        },
        "Outros": {
          "nps": 83.3,
          "n": 42
        },
        "Promoções & Fidelidade": {
          "nps": 57.0,
          "n": 151
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 46,
        "Abastecimento": 29,
        "Loja Física": 13,
        "Atendimento": 6,
        "Outros": 5,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 105,
        "Entrega & Logística": 66,
        "Atendimento": 49,
        "Loja Física": 46,
        "Outros": 37,
        "Abastecimento": 25
      }
    },
    {
      "nome": "L5052-PINHEIROS (1277)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 63.2,
      "nps_textual": 59.9,
      "nps_hibrido": 62.1,
      "delta_hibrido": -1.1,
      "pct_pos": 73.3,
      "pct_neu": 13.4,
      "pct_neg": 13.4,
      "severidade": 27.79,
      "transacoes": 72088,
      "indice_prioridade": 50.5,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 359,
      "avaliacoes_ponderadas": 1294.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 54
        },
        {
          "cat": "Atendimento",
          "pct": 8
        },
        {
          "cat": "Loja Física",
          "pct": 17
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 29
        },
        {
          "cat": "Entrega & Logística",
          "pct": 23
        },
        {
          "cat": "Outros",
          "pct": 9
        }
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
          "pos": 81.0,
          "neg": 14.3
        },
        {
          "m": "2026-03",
          "pos": 82.9,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 29.0,
          "n": 31
        },
        "Atendimento": {
          "nps": 86.9,
          "n": 84
        },
        "Entrega & Logística": {
          "nps": 95.2,
          "n": 62
        },
        "Loja Física": {
          "nps": 42.4,
          "n": 33
        },
        "Outros": {
          "nps": 85.2,
          "n": 27
        },
        "Promoções & Fidelidade": {
          "nps": 30.3,
          "n": 122
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 59,
        "Abastecimento": 14,
        "Loja Física": 11,
        "Atendimento": 7,
        "Outros": 3,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Atendimento": 77,
        "Promoções & Fidelidade": 63,
        "Entrega & Logística": 60,
        "Outros": 24,
        "Loja Física": 22,
        "Abastecimento": 17
      }
    },
    {
      "nome": "L5028-VILA PAULICEIA (0853)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 64.2,
      "nps_textual": 60.7,
      "nps_hibrido": 63.2,
      "delta_hibrido": -0.9,
      "pct_pos": 72.9,
      "pct_neu": 15.0,
      "pct_neg": 12.2,
      "severidade": 27.82,
      "transacoes": 97963,
      "indice_prioridade": 50.3,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 321,
      "avaliacoes_ponderadas": 1583.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 8
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 44
        },
        {
          "cat": "Abastecimento",
          "pct": 33
        }
      ],
      "top_elogios": [
        {
          "cat": "Outros",
          "pct": 12
        },
        {
          "cat": "Abastecimento",
          "pct": 10
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 29
        }
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
          "pos": 77.8,
          "neg": 16.7
        },
        {
          "m": "2025-09",
          "pos": 75.0,
          "neg": 5.0
        },
        {
          "m": "2025-10",
          "pos": 82.4,
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
          "pos": 90.9,
          "neg": 9.1
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 19.2,
          "n": 52
        },
        "Atendimento": {
          "nps": 77.8,
          "n": 45
        },
        "Entrega & Logística": {
          "nps": 98.0,
          "n": 49
        },
        "Loja Física": {
          "nps": 58.5,
          "n": 41
        },
        "Outros": {
          "nps": 93.3,
          "n": 30
        },
        "Promoções & Fidelidade": {
          "nps": 48.1,
          "n": 104
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 37,
        "Abastecimento": 29,
        "Loja Física": 12,
        "Atendimento": 7,
        "Outros": 1,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 67,
        "Entrega & Logística": 48,
        "Atendimento": 38,
        "Outros": 29,
        "Loja Física": 29,
        "Abastecimento": 23
      }
    },
    {
      "nome": "L5116-ENSEADA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Litoral",
      "nps_trad": 69.7,
      "nps_textual": 63.9,
      "nps_hibrido": 68.4,
      "delta_hibrido": -1.3,
      "pct_pos": 76.2,
      "pct_neu": 11.6,
      "pct_neg": 12.2,
      "severidade": 26.59,
      "transacoes": 94709,
      "indice_prioridade": 50.1,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 449,
      "avaliacoes_ponderadas": 1916.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 20
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 38
        },
        {
          "cat": "Atendimento",
          "pct": 5
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 37
        },
        {
          "cat": "Loja Física",
          "pct": 16
        },
        {
          "cat": "Abastecimento",
          "pct": 8
        }
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
          "pos": 85.7,
          "neg": 7.1
        },
        {
          "m": "2025-05",
          "pos": 77.4,
          "neg": 3.2
        },
        {
          "m": "2025-06",
          "pos": 69.2,
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
          "pos": 82.6,
          "neg": 13.0
        },
        {
          "m": "2026-03",
          "pos": 72.0,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 19.4,
          "n": 62
        },
        "Atendimento": {
          "nps": 81.4,
          "n": 43
        },
        "Entrega & Logística": {
          "nps": 92.1,
          "n": 63
        },
        "Loja Física": {
          "nps": 56.4,
          "n": 78
        },
        "Outros": {
          "nps": 86.5,
          "n": 37
        },
        "Promoções & Fidelidade": {
          "nps": 63.9,
          "n": 166
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 39,
        "Abastecimento": 33,
        "Loja Física": 23,
        "Atendimento": 5,
        "Outros": 4,
        "Entrega & Logística": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 127,
        "Entrega & Logística": 60,
        "Loja Física": 55,
        "Atendimento": 38,
        "Outros": 33,
        "Abastecimento": 29
      }
    },
    {
      "nome": "L5008-SCS MAUA (0500)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 68.3,
      "nps_textual": 62.9,
      "nps_hibrido": 66.3,
      "delta_hibrido": -1.9,
      "pct_pos": 74.2,
      "pct_neu": 14.4,
      "pct_neg": 11.3,
      "severidade": 27.6,
      "transacoes": 96412,
      "indice_prioridade": 50.0,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 520,
      "avaliacoes_ponderadas": 1918.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 29
        },
        {
          "cat": "Abastecimento",
          "pct": 34
        },
        {
          "cat": "Atendimento",
          "pct": 5
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 11
        },
        {
          "cat": "Loja Física",
          "pct": 16
        },
        {
          "cat": "Atendimento",
          "pct": 20
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 69.4,
          "neg": 16.3
        },
        {
          "m": "2025-02",
          "pos": 65.2,
          "neg": 13.0
        },
        {
          "m": "2025-03",
          "pos": 75.0,
          "neg": 6.2
        },
        {
          "m": "2025-04",
          "pos": 80.0,
          "neg": 7.5
        },
        {
          "m": "2025-05",
          "pos": 80.6,
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
          "pos": 81.0,
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
          "pos": 69.2,
          "neg": 15.4
        },
        {
          "m": "2025-12",
          "pos": 83.3,
          "neg": 11.1
        },
        {
          "m": "2026-01",
          "pos": 68.4,
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
          "neg": 18.2
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 27.0,
          "n": 89
        },
        "Atendimento": {
          "nps": 89.4,
          "n": 85
        },
        "Entrega & Logística": {
          "nps": 100.0,
          "n": 80
        },
        "Loja Física": {
          "nps": 52.9,
          "n": 87
        },
        "Outros": {
          "nps": 79.5,
          "n": 44
        },
        "Promoções & Fidelidade": {
          "nps": 48.9,
          "n": 135
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 52,
        "Abastecimento": 45,
        "Loja Física": 24,
        "Outros": 7,
        "Atendimento": 6
      },
      "elog_counts": {
        "Promoções & Fidelidade": 83,
        "Entrega & Logística": 80,
        "Atendimento": 79,
        "Loja Física": 63,
        "Abastecimento": 44,
        "Outros": 37
      }
    },
    {
      "nome": "L5057-BOQUEIRAO (1289)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Litoral",
      "nps_trad": 68.1,
      "nps_textual": 60.6,
      "nps_hibrido": 64.6,
      "delta_hibrido": -3.5,
      "pct_pos": 71.3,
      "pct_neu": 18.1,
      "pct_neg": 10.6,
      "severidade": 28.17,
      "transacoes": 152075,
      "indice_prioridade": 49.9,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 508,
      "avaliacoes_ponderadas": 2380.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 57
        },
        {
          "cat": "Abastecimento",
          "pct": 30
        },
        {
          "cat": "Loja Física",
          "pct": 11
        }
      ],
      "top_elogios": [
        {
          "cat": "Loja Física",
          "pct": 17
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 33
        },
        {
          "cat": "Entrega & Logística",
          "pct": 22
        }
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
          "pos": 65.2,
          "neg": 17.4
        },
        {
          "m": "2025-04",
          "pos": 52.2,
          "neg": 21.7
        },
        {
          "m": "2025-05",
          "pos": 76.7,
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
          "pos": 63.6,
          "neg": 12.1
        },
        {
          "m": "2025-09",
          "pos": 67.9,
          "neg": 7.1
        },
        {
          "m": "2025-10",
          "pos": 70.0,
          "neg": 10.0
        },
        {
          "m": "2025-11",
          "pos": 77.1,
          "neg": 8.6
        },
        {
          "m": "2025-12",
          "pos": 74.4,
          "neg": 7.0
        },
        {
          "m": "2026-01",
          "pos": 70.3,
          "neg": 10.9
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 26.2,
          "n": 61
        },
        "Atendimento": {
          "nps": 81.1,
          "n": 53
        },
        "Entrega & Logística": {
          "nps": 98.7,
          "n": 79
        },
        "Loja Física": {
          "nps": 75.0,
          "n": 76
        },
        "Outros": {
          "nps": 81.8,
          "n": 33
        },
        "Promoções & Fidelidade": {
          "nps": 42.2,
          "n": 206
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 88,
        "Abastecimento": 29,
        "Loja Física": 13,
        "Atendimento": 9,
        "Outros": 6,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 118,
        "Entrega & Logística": 78,
        "Loja Física": 63,
        "Atendimento": 44,
        "Abastecimento": 32,
        "Outros": 27
      }
    },
    {
      "nome": "L5173-PERUIBE",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Litoral",
      "nps_trad": 69.5,
      "nps_textual": 65.9,
      "nps_hibrido": 67.4,
      "delta_hibrido": -2.1,
      "pct_pos": 77.4,
      "pct_neu": 11.1,
      "pct_neg": 11.5,
      "severidade": 26.23,
      "transacoes": 115243,
      "indice_prioridade": 49.8,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 531,
      "avaliacoes_ponderadas": 2294.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 46
        },
        {
          "cat": "Abastecimento",
          "pct": 41
        },
        {
          "cat": "Atendimento",
          "pct": 5
        }
      ],
      "top_elogios": [
        {
          "cat": "Entrega & Logística",
          "pct": 27
        },
        {
          "cat": "Loja Física",
          "pct": 15
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 29
        }
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
          "pos": 74.2,
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
          "pos": 78.3,
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
          "pos": 79.4,
          "neg": 14.7
        },
        {
          "m": "2026-05",
          "pos": 62.5,
          "neg": 12.5
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 10.8,
          "n": 74
        },
        "Atendimento": {
          "nps": 84.9,
          "n": 53
        },
        "Entrega & Logística": {
          "nps": 97.4,
          "n": 114
        },
        "Loja Física": {
          "nps": 81.2,
          "n": 69
        },
        "Outros": {
          "nps": 86.0,
          "n": 43
        },
        "Promoções & Fidelidade": {
          "nps": 52.2,
          "n": 178
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 57,
        "Abastecimento": 41,
        "Loja Física": 8,
        "Outros": 6,
        "Atendimento": 5,
        "Entrega & Logística": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 121,
        "Entrega & Logística": 111,
        "Loja Física": 61,
        "Atendimento": 48,
        "Outros": 37,
        "Abastecimento": 33
      }
    },
    {
      "nome": "L5193-COTIA",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 63.7,
      "nps_textual": 62.3,
      "nps_hibrido": 64.7,
      "delta_hibrido": 0.9,
      "pct_pos": 74.2,
      "pct_neu": 14.0,
      "pct_neg": 11.9,
      "severidade": 27.32,
      "transacoes": 119430,
      "indice_prioridade": 49.6,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 430,
      "avaliacoes_ponderadas": 1901.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 14
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 35
        },
        {
          "cat": "Abastecimento",
          "pct": 35
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 19
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 32
        },
        {
          "cat": "Outros",
          "pct": 10
        }
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
          "pos": 69.2,
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
          "neg": 7.1
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
          "neg": 15.0
        },
        {
          "m": "2025-09",
          "pos": 71.4,
          "neg": 19.0
        },
        {
          "m": "2025-10",
          "pos": 75.0,
          "neg": 7.1
        },
        {
          "m": "2025-11",
          "pos": 76.9,
          "neg": 11.5
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 8.8,
          "n": 57
        },
        "Atendimento": {
          "nps": 79.4,
          "n": 68
        },
        "Entrega & Logística": {
          "nps": 95.4,
          "n": 65
        },
        "Loja Física": {
          "nps": 60.4,
          "n": 53
        },
        "Outros": {
          "nps": 93.9,
          "n": 33
        },
        "Promoções & Fidelidade": {
          "nps": 54.5,
          "n": 154
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 52,
        "Abastecimento": 34,
        "Loja Física": 13,
        "Atendimento": 7,
        "Entrega & Logística": 3,
        "Outros": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 102,
        "Entrega & Logística": 62,
        "Atendimento": 61,
        "Loja Física": 40,
        "Outros": 31,
        "Abastecimento": 23
      }
    },
    {
      "nome": "L5038-SAO JOSE DOS CAMPOS (0886)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 68.2,
      "nps_textual": 60.4,
      "nps_hibrido": 62.9,
      "delta_hibrido": -5.3,
      "pct_pos": 73.8,
      "pct_neu": 12.8,
      "pct_neg": 13.4,
      "severidade": 27.73,
      "transacoes": 126208,
      "indice_prioridade": 49.3,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 321,
      "avaliacoes_ponderadas": 1579.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 49
        },
        {
          "cat": "Abastecimento",
          "pct": 35
        },
        {
          "cat": "Loja Física",
          "pct": 7
        }
      ],
      "top_elogios": [
        {
          "cat": "Outros",
          "pct": 14
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 35
        },
        {
          "cat": "Entrega & Logística",
          "pct": 23
        }
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
          "pos": 72.2,
          "neg": 11.1
        },
        {
          "m": "2025-08",
          "pos": 79.2,
          "neg": 8.3
        },
        {
          "m": "2025-09",
          "pos": 68.8,
          "neg": 18.8
        },
        {
          "m": "2025-10",
          "pos": 73.7,
          "neg": 0.0
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 11.1,
          "n": 45
        },
        "Atendimento": {
          "nps": 80.8,
          "n": 26
        },
        "Entrega & Logística": {
          "nps": 94.7,
          "n": 57
        },
        "Loja Física": {
          "nps": 67.7,
          "n": 31
        },
        "Outros": {
          "nps": 88.9,
          "n": 36
        },
        "Promoções & Fidelidade": {
          "nps": 48.4,
          "n": 126
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 44,
        "Abastecimento": 25,
        "Loja Física": 7,
        "Outros": 3,
        "Atendimento": 3,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 82,
        "Entrega & Logística": 55,
        "Outros": 33,
        "Loja Física": 24,
        "Atendimento": 23,
        "Abastecimento": 20
      }
    },
    {
      "nome": "L5244-TAGUATINGA SUL",
      "flag": "regular",
      "uf": "DF",
      "regiao": "DF",
      "nps_trad": 67.4,
      "nps_textual": 62.1,
      "nps_hibrido": 65.7,
      "delta_hibrido": -1.7,
      "pct_pos": 73.6,
      "pct_neu": 14.9,
      "pct_neg": 11.5,
      "severidade": 27.6,
      "transacoes": 73748,
      "indice_prioridade": 49.3,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 417,
      "avaliacoes_ponderadas": 1839.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 48
        },
        {
          "cat": "Atendimento",
          "pct": 6
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 29
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 12
        },
        {
          "cat": "Outros",
          "pct": 12
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 28
        }
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
          "pos": 80.0,
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
          "neg": 19.2
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
          "pos": 56.5,
          "neg": 26.1
        },
        {
          "m": "2026-05",
          "pos": 66.7,
          "neg": 16.7
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 18.4,
          "n": 76
        },
        "Atendimento": {
          "nps": 78.8,
          "n": 52
        },
        "Entrega & Logística": {
          "nps": 92.5,
          "n": 67
        },
        "Loja Física": {
          "nps": 61.1,
          "n": 54
        },
        "Outros": {
          "nps": 85.7,
          "n": 42
        },
        "Promoções & Fidelidade": {
          "nps": 57.9,
          "n": 126
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 39,
        "Abastecimento": 39,
        "Loja Física": 15,
        "Atendimento": 8,
        "Outros": 5,
        "Entrega & Logística": 4
      },
      "elog_counts": {
        "Promoções & Fidelidade": 87,
        "Entrega & Logística": 63,
        "Atendimento": 44,
        "Loja Física": 39,
        "Outros": 37,
        "Abastecimento": 37
      }
    },
    {
      "nome": "L5155-SUZANO",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 69.7,
      "nps_textual": 62.6,
      "nps_hibrido": 67.0,
      "delta_hibrido": -2.7,
      "pct_pos": 73.7,
      "pct_neu": 15.2,
      "pct_neg": 11.1,
      "severidade": 27.52,
      "transacoes": 114047,
      "indice_prioridade": 49.3,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 585,
      "avaliacoes_ponderadas": 2986.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 46
        },
        {
          "cat": "Atendimento",
          "pct": 6
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 34
        }
      ],
      "top_elogios": [
        {
          "cat": "Loja Física",
          "pct": 16
        },
        {
          "cat": "Outros",
          "pct": 11
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 31
        }
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
          "pos": 77.5,
          "neg": 5.0
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
          "pos": 73.0,
          "neg": 10.8
        },
        {
          "m": "2025-12",
          "pos": 68.9,
          "neg": 16.4
        },
        {
          "m": "2026-01",
          "pos": 75.0,
          "neg": 8.3
        },
        {
          "m": "2026-02",
          "pos": 71.4,
          "neg": 7.1
        },
        {
          "m": "2026-03",
          "pos": 69.0,
          "neg": 17.2
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 9.8,
          "n": 82
        },
        "Atendimento": {
          "nps": 73.8,
          "n": 61
        },
        "Entrega & Logística": {
          "nps": 93.8,
          "n": 96
        },
        "Loja Física": {
          "nps": 72.9,
          "n": 85
        },
        "Outros": {
          "nps": 94.1,
          "n": 51
        },
        "Promoções & Fidelidade": {
          "nps": 53.8,
          "n": 210
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 75,
        "Abastecimento": 44,
        "Loja Física": 15,
        "Atendimento": 12,
        "Entrega & Logística": 5,
        "Outros": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 135,
        "Entrega & Logística": 91,
        "Loja Física": 70,
        "Atendimento": 49,
        "Outros": 48,
        "Abastecimento": 38
      }
    },
    {
      "nome": "L5120-ITU",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 67.2,
      "nps_textual": 62.1,
      "nps_hibrido": 65.8,
      "delta_hibrido": -1.4,
      "pct_pos": 72.7,
      "pct_neu": 16.7,
      "pct_neg": 10.6,
      "severidade": 27.71,
      "transacoes": 94658,
      "indice_prioridade": 49.0,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 491,
      "avaliacoes_ponderadas": 2490.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 40
        },
        {
          "cat": "Abastecimento",
          "pct": 40
        },
        {
          "cat": "Loja Física",
          "pct": 13
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 36
        },
        {
          "cat": "Entrega & Logística",
          "pct": 23
        },
        {
          "cat": "Outros",
          "pct": 10
        }
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
          "pos": 67.6,
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
          "pos": 65.4,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 11.8,
          "n": 68
        },
        "Atendimento": {
          "nps": 79.2,
          "n": 48
        },
        "Entrega & Logística": {
          "nps": 96.5,
          "n": 85
        },
        "Loja Física": {
          "nps": 66.0,
          "n": 53
        },
        "Outros": {
          "nps": 85.4,
          "n": 41
        },
        "Promoções & Fidelidade": {
          "nps": 54.6,
          "n": 196
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 68,
        "Abastecimento": 39,
        "Loja Física": 11,
        "Atendimento": 8,
        "Outros": 5,
        "Entrega & Logística": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 128,
        "Entrega & Logística": 82,
        "Loja Física": 42,
        "Atendimento": 40,
        "Outros": 36,
        "Abastecimento": 29
      }
    },
    {
      "nome": "L5105-DOM PEDRO I (1457)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 69.0,
      "nps_textual": 64.7,
      "nps_hibrido": 66.8,
      "delta_hibrido": -2.2,
      "pct_pos": 76.1,
      "pct_neu": 12.5,
      "pct_neg": 11.4,
      "severidade": 26.64,
      "transacoes": 129016,
      "indice_prioridade": 49.0,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 464,
      "avaliacoes_ponderadas": 1782.0,
      "top_problemas": [
        {
          "cat": "Entrega & Logística",
          "pct": 6
        },
        {
          "cat": "Atendimento",
          "pct": 8
        },
        {
          "cat": "Abastecimento",
          "pct": 42
        }
      ],
      "top_elogios": [
        {
          "cat": "Entrega & Logística",
          "pct": 25
        },
        {
          "cat": "Atendimento",
          "pct": 20
        },
        {
          "cat": "Loja Física",
          "pct": 15
        }
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
          "pos": 61.9,
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
          "pos": 73.0,
          "neg": 10.8
        },
        {
          "m": "2025-07",
          "pos": 75.0,
          "neg": 8.3
        },
        {
          "m": "2025-08",
          "pos": 82.4,
          "neg": 17.6
        },
        {
          "m": "2025-09",
          "pos": 85.2,
          "neg": 11.1
        },
        {
          "m": "2025-10",
          "pos": 62.9,
          "neg": 22.9
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
          "pos": 62.5,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -8.9,
          "n": 56
        },
        "Atendimento": {
          "nps": 82.9,
          "n": 82
        },
        "Entrega & Logística": {
          "nps": 91.4,
          "n": 93
        },
        "Loja Física": {
          "nps": 91.2,
          "n": 57
        },
        "Outros": {
          "nps": 84.6,
          "n": 39
        },
        "Promoções & Fidelidade": {
          "nps": 48.9,
          "n": 137
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 49,
        "Abastecimento": 39,
        "Atendimento": 10,
        "Entrega & Logística": 5,
        "Loja Física": 4,
        "Outros": 4
      },
      "elog_counts": {
        "Promoções & Fidelidade": 88,
        "Entrega & Logística": 88,
        "Atendimento": 72,
        "Loja Física": 53,
        "Outros": 35,
        "Abastecimento": 17
      }
    },
    {
      "nome": "L5262-URBANOVA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 61.7,
      "nps_textual": 60.2,
      "nps_hibrido": 59.4,
      "delta_hibrido": -2.3,
      "pct_pos": 73.4,
      "pct_neu": 13.3,
      "pct_neg": 13.3,
      "severidade": 27.04,
      "transacoes": 66310,
      "indice_prioridade": 48.9,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 128,
      "avaliacoes_ponderadas": 664.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 47
        },
        {
          "cat": "Loja Física",
          "pct": 18
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 29
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 29
        },
        {
          "cat": "Abastecimento",
          "pct": 11
        },
        {
          "cat": "Entrega & Logística",
          "pct": 23
        }
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
          "pos": 83.3,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 9.5,
          "n": 21
        },
        "Atendimento": {
          "nps": 100.0,
          "n": 27
        },
        "Entrega & Logística": {
          "nps": 87.5,
          "n": 24
        },
        "Loja Física": {
          "nps": 56.2,
          "n": 16
        },
        "Outros": {
          "nps": 75.0,
          "n": 8
        },
        "Promoções & Fidelidade": {
          "nps": 37.5,
          "n": 32
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 15,
        "Abastecimento": 11,
        "Loja Física": 4,
        "Entrega & Logística": 2,
        "Outros": 2
      },
      "elog_counts": {
        "Atendimento": 27,
        "Entrega & Logística": 22,
        "Promoções & Fidelidade": 17,
        "Loja Física": 12,
        "Abastecimento": 10,
        "Outros": 6
      }
    },
    {
      "nome": "L5198-VILA RESENDE",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 67.8,
      "nps_textual": 62.5,
      "nps_hibrido": 64.1,
      "delta_hibrido": -3.6,
      "pct_pos": 75.3,
      "pct_neu": 11.8,
      "pct_neg": 12.8,
      "severidade": 26.98,
      "transacoes": 78850,
      "indice_prioridade": 48.6,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 304,
      "avaliacoes_ponderadas": 1601.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 44
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 41
        },
        {
          "cat": "Loja Física",
          "pct": 10
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 35
        },
        {
          "cat": "Entrega & Logística",
          "pct": 24
        },
        {
          "cat": "Abastecimento",
          "pct": 9
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 76.0,
          "neg": 4.0
        },
        {
          "m": "2025-02",
          "pos": 66.7,
          "neg": 16.7
        },
        {
          "m": "2025-03",
          "pos": 50.0,
          "neg": 27.3
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
          "neg": 22.2
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 8.3,
          "n": 48
        },
        "Atendimento": {
          "nps": 79.4,
          "n": 34
        },
        "Entrega & Logística": {
          "nps": 98.2,
          "n": 55
        },
        "Loja Física": {
          "nps": 63.9,
          "n": 36
        },
        "Outros": {
          "nps": 94.7,
          "n": 19
        },
        "Promoções & Fidelidade": {
          "nps": 57.1,
          "n": 112
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 32,
        "Abastecimento": 27,
        "Loja Física": 9,
        "Atendimento": 5,
        "Outros": 1,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 80,
        "Entrega & Logística": 54,
        "Atendimento": 29,
        "Loja Física": 27,
        "Abastecimento": 21,
        "Outros": 18
      }
    },
    {
      "nome": "L5207-SANTO ANDRE ORATORIO",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 72.0,
      "nps_textual": 65.2,
      "nps_hibrido": 69.0,
      "delta_hibrido": -2.9,
      "pct_pos": 76.5,
      "pct_neu": 12.3,
      "pct_neg": 11.2,
      "severidade": 26.49,
      "transacoes": 159180,
      "indice_prioridade": 48.5,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 578,
      "avaliacoes_ponderadas": 3142.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 45
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 37
        },
        {
          "cat": "Loja Física",
          "pct": 15
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 33
        },
        {
          "cat": "Outros",
          "pct": 11
        },
        {
          "cat": "Entrega & Logística",
          "pct": 23
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 72.4,
          "neg": 13.8
        },
        {
          "m": "2025-02",
          "pos": 72.2,
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
          "neg": 8.0
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
          "pos": 63.4,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 14.5,
          "n": 83
        },
        "Atendimento": {
          "nps": 85.5,
          "n": 62
        },
        "Entrega & Logística": {
          "nps": 98.1,
          "n": 103
        },
        "Loja Física": {
          "nps": 60.9,
          "n": 69
        },
        "Outros": {
          "nps": 98.0,
          "n": 50
        },
        "Promoções & Fidelidade": {
          "nps": 56.9,
          "n": 211
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 67,
        "Abastecimento": 42,
        "Loja Física": 17,
        "Atendimento": 7,
        "Entrega & Logística": 2,
        "Outros": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 144,
        "Entrega & Logística": 101,
        "Atendimento": 55,
        "Loja Física": 52,
        "Outros": 49,
        "Abastecimento": 41
      }
    },
    {
      "nome": "L5242-RECREIO",
      "flag": "regular",
      "uf": "RJ",
      "regiao": "RJ",
      "nps_trad": 69.1,
      "nps_textual": 62.6,
      "nps_hibrido": 66.4,
      "delta_hibrido": -2.6,
      "pct_pos": 74.1,
      "pct_neu": 14.4,
      "pct_neg": 11.5,
      "severidade": 27.05,
      "transacoes": 50677,
      "indice_prioridade": 48.5,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 417,
      "avaliacoes_ponderadas": 1555.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 25
        },
        {
          "cat": "Abastecimento",
          "pct": 48
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 25
        }
      ],
      "top_elogios": [
        {
          "cat": "Loja Física",
          "pct": 19
        },
        {
          "cat": "Atendimento",
          "pct": 22
        },
        {
          "cat": "Outros",
          "pct": 11
        }
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
          "pos": 85.2,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 9.7,
          "n": 62
        },
        "Atendimento": {
          "nps": 97.2,
          "n": 71
        },
        "Entrega & Logística": {
          "nps": 97.7,
          "n": 44
        },
        "Loja Física": {
          "nps": 54.8,
          "n": 84
        },
        "Outros": {
          "nps": 78.6,
          "n": 42
        },
        "Promoções & Fidelidade": {
          "nps": 56.1,
          "n": 114
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 38,
        "Abastecimento": 33,
        "Loja Física": 26,
        "Outros": 8,
        "Atendimento": 2,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 76,
        "Atendimento": 69,
        "Loja Física": 58,
        "Entrega & Logística": 43,
        "Outros": 34,
        "Abastecimento": 29
      }
    },
    {
      "nome": "L5240-BARAO GERALDO",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 69.6,
      "nps_textual": 62.4,
      "nps_hibrido": 67.8,
      "delta_hibrido": -1.8,
      "pct_pos": 74.2,
      "pct_neu": 14.0,
      "pct_neg": 11.8,
      "severidade": 27.54,
      "transacoes": 89159,
      "indice_prioridade": 48.4,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 457,
      "avaliacoes_ponderadas": 2274.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 41
        },
        {
          "cat": "Abastecimento",
          "pct": 37
        },
        {
          "cat": "Loja Física",
          "pct": 13
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 11
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 32
        },
        {
          "cat": "Entrega & Logística",
          "pct": 22
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 78.6,
          "neg": 14.3
        },
        {
          "m": "2025-02",
          "pos": 70.0,
          "neg": 16.7
        },
        {
          "m": "2025-03",
          "pos": 76.5,
          "neg": 8.8
        },
        {
          "m": "2025-04",
          "pos": 75.9,
          "neg": 6.9
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
          "neg": 17.6
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
          "pos": 71.0,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 21.3,
          "n": 75
        },
        "Atendimento": {
          "nps": 85.0,
          "n": 60
        },
        "Entrega & Logística": {
          "nps": 89.9,
          "n": 79
        },
        "Loja Física": {
          "nps": 60.4,
          "n": 53
        },
        "Outros": {
          "nps": 87.9,
          "n": 33
        },
        "Promoções & Fidelidade": {
          "nps": 54.8,
          "n": 157
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 49,
        "Abastecimento": 39,
        "Loja Física": 14,
        "Atendimento": 7,
        "Entrega & Logística": 6,
        "Outros": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 108,
        "Entrega & Logística": 73,
        "Atendimento": 53,
        "Loja Física": 39,
        "Abastecimento": 36,
        "Outros": 30
      }
    },
    {
      "nome": "L5204-ITAQUA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 70.9,
      "nps_textual": 67.5,
      "nps_hibrido": 71.4,
      "delta_hibrido": 0.5,
      "pct_pos": 80.6,
      "pct_neu": 6.3,
      "pct_neg": 13.1,
      "severidade": 25.2,
      "transacoes": 104007,
      "indice_prioridade": 48.3,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 381,
      "avaliacoes_ponderadas": 1960.0,
      "top_problemas": [
        {
          "cat": "Outros",
          "pct": 8
        },
        {
          "cat": "Atendimento",
          "pct": 14
        },
        {
          "cat": "Loja Física",
          "pct": 20
        }
      ],
      "top_elogios": [
        {
          "cat": "Outros",
          "pct": 14
        },
        {
          "cat": "Entrega & Logística",
          "pct": 24
        },
        {
          "cat": "Loja Física",
          "pct": 12
        }
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
          "pos": 81.0,
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
          "pos": 90.0,
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
          "pos": 88.9,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 13.0,
          "n": 46
        },
        "Atendimento": {
          "nps": 70.7,
          "n": 58
        },
        "Entrega & Logística": {
          "nps": 94.9,
          "n": 78
        },
        "Loja Física": {
          "nps": 56.0,
          "n": 50
        },
        "Outros": {
          "nps": 80.9,
          "n": 47
        },
        "Promoções & Fidelidade": {
          "nps": 68.6,
          "n": 102
        }
      },
      "prob_counts": {
        "Abastecimento": 24,
        "Promoções & Fidelidade": 20,
        "Loja Física": 12,
        "Atendimento": 10,
        "Outros": 5,
        "Entrega & Logística": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 82,
        "Entrega & Logística": 75,
        "Atendimento": 48,
        "Outros": 42,
        "Loja Física": 38,
        "Abastecimento": 22
      }
    },
    {
      "nome": "L5248-SBC PEREIRA BARRETO",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 65.4,
      "nps_textual": 61.8,
      "nps_hibrido": 64.1,
      "delta_hibrido": -1.2,
      "pct_pos": 72.1,
      "pct_neu": 17.6,
      "pct_neg": 10.3,
      "severidade": 28.13,
      "transacoes": 124440,
      "indice_prioridade": 48.1,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 563,
      "avaliacoes_ponderadas": 2046.0,
      "top_problemas": [
        {
          "cat": "Outros",
          "pct": 5
        },
        {
          "cat": "Abastecimento",
          "pct": 40
        },
        {
          "cat": "Loja Física",
          "pct": 19
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 22
        },
        {
          "cat": "Abastecimento",
          "pct": 10
        },
        {
          "cat": "Loja Física",
          "pct": 14
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 65.1,
          "neg": 9.3
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
          "pos": 63.6,
          "neg": 18.2
        },
        {
          "m": "2025-05",
          "pos": 65.5,
          "neg": 10.3
        },
        {
          "m": "2025-06",
          "pos": 65.2,
          "neg": 13.0
        },
        {
          "m": "2025-07",
          "pos": 85.0,
          "neg": 10.0
        },
        {
          "m": "2025-08",
          "pos": 79.2,
          "neg": 4.2
        },
        {
          "m": "2025-09",
          "pos": 80.6,
          "neg": 9.7
        },
        {
          "m": "2025-10",
          "pos": 60.8,
          "neg": 17.6
        },
        {
          "m": "2025-11",
          "pos": 69.7,
          "neg": 9.1
        },
        {
          "m": "2025-12",
          "pos": 73.3,
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
          "pos": 64.7,
          "neg": 0.0
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 22.0,
          "n": 82
        },
        "Atendimento": {
          "nps": 91.8,
          "n": 97
        },
        "Entrega & Logística": {
          "nps": 89.4,
          "n": 94
        },
        "Loja Física": {
          "nps": 57.7,
          "n": 78
        },
        "Outros": {
          "nps": 73.2,
          "n": 41
        },
        "Promoções & Fidelidade": {
          "nps": 48.0,
          "n": 171
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 70,
        "Abastecimento": 41,
        "Loja Física": 22,
        "Entrega & Logística": 9,
        "Outros": 8,
        "Atendimento": 7
      },
      "elog_counts": {
        "Promoções & Fidelidade": 101,
        "Atendimento": 90,
        "Entrega & Logística": 85,
        "Loja Física": 56,
        "Abastecimento": 41,
        "Outros": 33
      }
    },
    {
      "nome": "L5069-AGUA RASA (1322)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 74.6,
      "nps_textual": 68.4,
      "nps_hibrido": 72.2,
      "delta_hibrido": -2.4,
      "pct_pos": 78.5,
      "pct_neu": 11.4,
      "pct_neg": 10.1,
      "severidade": 25.78,
      "transacoes": 130658,
      "indice_prioridade": 47.7,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 744,
      "avaliacoes_ponderadas": 2584.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 11
        },
        {
          "cat": "Abastecimento",
          "pct": 43
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 32
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 36
        },
        {
          "cat": "Outros",
          "pct": 11
        },
        {
          "cat": "Entrega & Logística",
          "pct": 23
        }
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
          "pos": 69.5,
          "neg": 11.9
        },
        {
          "m": "2025-04",
          "pos": 78.4,
          "neg": 9.8
        },
        {
          "m": "2025-05",
          "pos": 85.1,
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
          "pos": 60.7,
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
          "neg": 2.3
        },
        {
          "m": "2026-05",
          "pos": 72.0,
          "neg": 20.0
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -3.8,
          "n": 79
        },
        "Atendimento": {
          "nps": 89.1,
          "n": 230
        },
        "Entrega & Logística": {
          "nps": 99.3,
          "n": 137
        },
        "Loja Física": {
          "nps": 56.5,
          "n": 69
        },
        "Outros": {
          "nps": 94.2,
          "n": 69
        },
        "Promoções & Fidelidade": {
          "nps": 41.9,
          "n": 160
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 69,
        "Abastecimento": 50,
        "Loja Física": 19,
        "Atendimento": 17,
        "Outros": 4,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Atendimento": 213,
        "Entrega & Logística": 136,
        "Promoções & Fidelidade": 91,
        "Outros": 65,
        "Loja Física": 50,
        "Abastecimento": 29
      }
    },
    {
      "nome": "L5201-ANA COSTA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Litoral",
      "nps_trad": 72.1,
      "nps_textual": 65.5,
      "nps_hibrido": 69.9,
      "delta_hibrido": -2.1,
      "pct_pos": 75.5,
      "pct_neu": 14.6,
      "pct_neg": 9.9,
      "severidade": 26.69,
      "transacoes": 168588,
      "indice_prioridade": 47.5,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 705,
      "avaliacoes_ponderadas": 2818.0,
      "top_problemas": [
        {
          "cat": "Entrega & Logística",
          "pct": 4
        },
        {
          "cat": "Abastecimento",
          "pct": 50
        },
        {
          "cat": "Atendimento",
          "pct": 7
        }
      ],
      "top_elogios": [
        {
          "cat": "Loja Física",
          "pct": 15
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 33
        },
        {
          "cat": "Outros",
          "pct": 11
        }
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
          "pos": 82.4,
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
          "pos": 78.0,
          "neg": 7.3
        },
        {
          "m": "2025-07",
          "pos": 75.0,
          "neg": 8.3
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
          "pos": 71.4,
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
          "pos": 76.0,
          "neg": 12.0
        },
        {
          "m": "2026-02",
          "pos": 73.7,
          "neg": 5.3
        },
        {
          "m": "2026-03",
          "pos": 69.4,
          "neg": 8.3
        },
        {
          "m": "2026-04",
          "pos": 73.8,
          "neg": 16.7
        },
        {
          "m": "2026-05",
          "pos": 81.8,
          "neg": 9.1
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 12.9,
          "n": 93
        },
        "Atendimento": {
          "nps": 70.1,
          "n": 77
        },
        "Entrega & Logística": {
          "nps": 93.4,
          "n": 122
        },
        "Loja Física": {
          "nps": 82.4,
          "n": 91
        },
        "Outros": {
          "nps": 81.8,
          "n": 66
        },
        "Promoções & Fidelidade": {
          "nps": 59.8,
          "n": 256
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 82,
        "Abastecimento": 46,
        "Atendimento": 18,
        "Loja Física": 12,
        "Outros": 10,
        "Entrega & Logística": 5
      },
      "elog_counts": {
        "Promoções & Fidelidade": 174,
        "Entrega & Logística": 117,
        "Loja Física": 79,
        "Atendimento": 59,
        "Outros": 56,
        "Abastecimento": 47
      }
    },
    {
      "nome": "L5161-ITANHAEM",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Litoral",
      "nps_trad": 69.7,
      "nps_textual": 66.4,
      "nps_hibrido": 68.3,
      "delta_hibrido": -1.4,
      "pct_pos": 76.3,
      "pct_neu": 13.8,
      "pct_neg": 9.9,
      "severidade": 26.38,
      "transacoes": 131783,
      "indice_prioridade": 47.3,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 726,
      "avaliacoes_ponderadas": 3315.0,
      "top_problemas": [
        {
          "cat": "Entrega & Logística",
          "pct": 4
        },
        {
          "cat": "Atendimento",
          "pct": 8
        },
        {
          "cat": "Abastecimento",
          "pct": 38
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 12
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 34
        },
        {
          "cat": "Entrega & Logística",
          "pct": 22
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 61.1,
          "neg": 11.1
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
          "pos": 74.1,
          "neg": 8.6
        },
        {
          "m": "2025-09",
          "pos": 78.8,
          "neg": 9.6
        },
        {
          "m": "2025-10",
          "pos": 75.7,
          "neg": 10.8
        },
        {
          "m": "2025-11",
          "pos": 85.3,
          "neg": 0.0
        },
        {
          "m": "2025-12",
          "pos": 75.0,
          "neg": 9.4
        },
        {
          "m": "2026-01",
          "pos": 75.4,
          "neg": 5.3
        },
        {
          "m": "2026-02",
          "pos": 70.0,
          "neg": 20.0
        },
        {
          "m": "2026-03",
          "pos": 70.2,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 35.4,
          "n": 113
        },
        "Atendimento": {
          "nps": 75.8,
          "n": 66
        },
        "Entrega & Logística": {
          "nps": 92.4,
          "n": 131
        },
        "Loja Física": {
          "nps": 63.9,
          "n": 83
        },
        "Outros": {
          "nps": 85.0,
          "n": 60
        },
        "Promoções & Fidelidade": {
          "nps": 61.2,
          "n": 273
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 82,
        "Abastecimento": 46,
        "Loja Física": 19,
        "Atendimento": 10,
        "Outros": 8,
        "Entrega & Logística": 7
      },
      "elog_counts": {
        "Promoções & Fidelidade": 191,
        "Entrega & Logística": 124,
        "Abastecimento": 67,
        "Loja Física": 64,
        "Atendimento": 56,
        "Outros": 52
      }
    },
    {
      "nome": "L5087-ALBERTO ANDALO (1353)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 67.8,
      "nps_textual": 62.7,
      "nps_hibrido": 66.9,
      "delta_hibrido": -1.0,
      "pct_pos": 74.5,
      "pct_neu": 13.7,
      "pct_neg": 11.8,
      "severidade": 26.75,
      "transacoes": 76416,
      "indice_prioridade": 47.2,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 314,
      "avaliacoes_ponderadas": 1555.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 46
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 43
        }
      ],
      "top_elogios": [
        {
          "cat": "Outros",
          "pct": 12
        },
        {
          "cat": "Loja Física",
          "pct": 15
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 32
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 72.7,
          "neg": 13.6
        },
        {
          "m": "2025-02",
          "pos": 44.4,
          "neg": 11.1
        },
        {
          "m": "2025-03",
          "pos": 55.6,
          "neg": 11.1
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
          "pos": 89.5,
          "neg": 5.3
        },
        {
          "m": "2025-08",
          "pos": 66.7,
          "neg": 5.6
        },
        {
          "m": "2025-09",
          "pos": 78.6,
          "neg": 7.1
        },
        {
          "m": "2025-10",
          "pos": 78.6,
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
          "pos": 84.2,
          "neg": 0.0
        },
        {
          "m": "2026-02",
          "pos": 77.8,
          "neg": 13.3
        },
        {
          "m": "2026-03",
          "pos": 69.6,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 0.0,
          "n": 46
        },
        "Atendimento": {
          "nps": 87.9,
          "n": 33
        },
        "Entrega & Logística": {
          "nps": 98.0,
          "n": 51
        },
        "Loja Física": {
          "nps": 80.0,
          "n": 40
        },
        "Outros": {
          "nps": 87.1,
          "n": 31
        },
        "Promoções & Fidelidade": {
          "nps": 52.2,
          "n": 113
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 38,
        "Abastecimento": 29,
        "Loja Física": 6,
        "Outros": 4,
        "Atendimento": 2,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 75,
        "Entrega & Logística": 50,
        "Loja Física": 34,
        "Atendimento": 31,
        "Outros": 27,
        "Abastecimento": 17
      }
    },
    {
      "nome": "L5231-SOROCABA PANNUNZIO",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 71.3,
      "nps_textual": 65.3,
      "nps_hibrido": 67.3,
      "delta_hibrido": -4.0,
      "pct_pos": 77.4,
      "pct_neu": 10.5,
      "pct_neg": 12.1,
      "severidade": 26.27,
      "transacoes": 109149,
      "indice_prioridade": 47.2,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 505,
      "avaliacoes_ponderadas": 2524.0,
      "top_problemas": [
        {
          "cat": "Entrega & Logística",
          "pct": 5
        },
        {
          "cat": "Abastecimento",
          "pct": 48
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 36
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 10
        },
        {
          "cat": "Loja Física",
          "pct": 15
        },
        {
          "cat": "Outros",
          "pct": 12
        }
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
          "pos": 86.7,
          "neg": 3.3
        },
        {
          "m": "2025-05",
          "pos": 72.2,
          "neg": 13.9
        },
        {
          "m": "2025-06",
          "pos": 84.4,
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
          "pos": 95.7,
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
          "pos": 75.9,
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
          "neg": 8.3
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 13.4,
          "n": 82
        },
        "Atendimento": {
          "nps": 90.7,
          "n": 54
        },
        "Entrega & Logística": {
          "nps": 92.0,
          "n": 87
        },
        "Loja Física": {
          "nps": 77.1,
          "n": 70
        },
        "Outros": {
          "nps": 89.8,
          "n": 49
        },
        "Promoções & Fidelidade": {
          "nps": 56.4,
          "n": 163
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 49,
        "Abastecimento": 42,
        "Loja Física": 11,
        "Entrega & Logística": 4,
        "Outros": 4,
        "Atendimento": 4
      },
      "elog_counts": {
        "Promoções & Fidelidade": 114,
        "Entrega & Logística": 83,
        "Loja Física": 59,
        "Atendimento": 50,
        "Outros": 45,
        "Abastecimento": 40
      }
    },
    {
      "nome": "L5261-UNIMART",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 74.6,
      "nps_textual": 65.5,
      "nps_hibrido": 70.4,
      "delta_hibrido": -4.2,
      "pct_pos": 76.8,
      "pct_neu": 11.8,
      "pct_neg": 11.3,
      "severidade": 26.52,
      "transacoes": 125498,
      "indice_prioridade": 46.5,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 574,
      "avaliacoes_ponderadas": 2788.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 45
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 34
        },
        {
          "cat": "Loja Física",
          "pct": 15
        }
      ],
      "top_elogios": [
        {
          "cat": "Loja Física",
          "pct": 18
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 32
        },
        {
          "cat": "Entrega & Logística",
          "pct": 22
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 80.5,
          "neg": 9.8
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
          "pos": 72.7,
          "neg": 21.2
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 12.2,
          "n": 90
        },
        "Atendimento": {
          "nps": 86.3,
          "n": 51
        },
        "Entrega & Logística": {
          "nps": 97.0,
          "n": 100
        },
        "Loja Física": {
          "nps": 70.4,
          "n": 98
        },
        "Outros": {
          "nps": 84.1,
          "n": 44
        },
        "Promoções & Fidelidade": {
          "nps": 61.8,
          "n": 191
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 51,
        "Abastecimento": 50,
        "Loja Física": 19,
        "Outros": 6,
        "Atendimento": 4,
        "Entrega & Logística": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 140,
        "Entrega & Logística": 97,
        "Loja Física": 79,
        "Atendimento": 47,
        "Abastecimento": 40,
        "Outros": 38
      }
    },
    {
      "nome": "L5141-ALTO TAQUARAL",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 71.9,
      "nps_textual": 65.2,
      "nps_hibrido": 67.8,
      "delta_hibrido": -4.1,
      "pct_pos": 75.3,
      "pct_neu": 14.7,
      "pct_neg": 10.1,
      "severidade": 26.31,
      "transacoes": 79926,
      "indice_prioridade": 45.8,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 388,
      "avaliacoes_ponderadas": 1925.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 44
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 38
        },
        {
          "cat": "Loja Física",
          "pct": 15
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 38
        },
        {
          "cat": "Loja Física",
          "pct": 16
        },
        {
          "cat": "Entrega & Logística",
          "pct": 22
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 85.7,
          "neg": 9.5
        },
        {
          "m": "2025-02",
          "pos": 69.6,
          "neg": 8.7
        },
        {
          "m": "2025-03",
          "pos": 68.2,
          "neg": 13.6
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
          "pos": 77.8,
          "neg": 7.4
        },
        {
          "m": "2025-12",
          "pos": 68.8,
          "neg": 18.8
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
          "pos": 73.3,
          "neg": 13.3
        },
        {
          "m": "2026-05",
          "pos": 44.4,
          "neg": 11.1
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 11.1,
          "n": 54
        },
        "Atendimento": {
          "nps": 85.7,
          "n": 35
        },
        "Entrega & Logística": {
          "nps": 94.2,
          "n": 69
        },
        "Loja Física": {
          "nps": 67.8,
          "n": 59
        },
        "Outros": {
          "nps": 85.0,
          "n": 20
        },
        "Promoções & Fidelidade": {
          "nps": 62.9,
          "n": 151
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 41,
        "Abastecimento": 31,
        "Loja Física": 13,
        "Entrega & Logística": 4,
        "Atendimento": 4,
        "Outros": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 110,
        "Entrega & Logística": 65,
        "Loja Física": 46,
        "Atendimento": 31,
        "Abastecimento": 23,
        "Outros": 17
      }
    },
    {
      "nome": "L5134-GILBERTO SALOMAO",
      "flag": "regular",
      "uf": "DF",
      "regiao": "DF",
      "nps_trad": 66.9,
      "nps_textual": 60.5,
      "nps_hibrido": 65.9,
      "delta_hibrido": -1.0,
      "pct_pos": 70.6,
      "pct_neu": 19.4,
      "pct_neg": 10.1,
      "severidade": 28.06,
      "transacoes": 62724,
      "indice_prioridade": 45.6,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 408,
      "avaliacoes_ponderadas": 1729.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 24
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 41
        },
        {
          "cat": "Abastecimento",
          "pct": 29
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 15
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 38
        },
        {
          "cat": "Loja Física",
          "pct": 11
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 78.3,
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
          "pos": 59.1,
          "neg": 4.5
        },
        {
          "m": "2025-05",
          "pos": 79.2,
          "neg": 4.2
        },
        {
          "m": "2025-06",
          "pos": 70.0,
          "neg": 0.0
        },
        {
          "m": "2025-07",
          "pos": 72.7,
          "neg": 9.1
        },
        {
          "m": "2025-08",
          "pos": 74.4,
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
          "neg": 9.5
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
          "pos": 56.5,
          "neg": 21.7
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 40.8,
          "n": 76
        },
        "Atendimento": {
          "nps": 100.0,
          "n": 33
        },
        "Entrega & Logística": {
          "nps": 85.5,
          "n": 55
        },
        "Loja Física": {
          "nps": 42.3,
          "n": 52
        },
        "Outros": {
          "nps": 74.2,
          "n": 31
        },
        "Promoções & Fidelidade": {
          "nps": 56.5,
          "n": 161
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 53,
        "Abastecimento": 33,
        "Loja Física": 20,
        "Outros": 8,
        "Entrega & Logística": 6
      },
      "elog_counts": {
        "Promoções & Fidelidade": 108,
        "Entrega & Logística": 49,
        "Abastecimento": 43,
        "Atendimento": 33,
        "Loja Física": 32,
        "Outros": 23
      }
    },
    {
      "nome": "L5214-SAO MIGUEL",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 70.4,
      "nps_textual": 67.0,
      "nps_hibrido": 69.4,
      "delta_hibrido": -0.9,
      "pct_pos": 77.5,
      "pct_neu": 12.0,
      "pct_neg": 10.5,
      "severidade": 25.86,
      "transacoes": 120338,
      "indice_prioridade": 45.6,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 648,
      "avaliacoes_ponderadas": 3287.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 7
        },
        {
          "cat": "Abastecimento",
          "pct": 41
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 38
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 10
        },
        {
          "cat": "Entrega & Logística",
          "pct": 24
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 32
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 80.9,
          "neg": 12.8
        },
        {
          "m": "2025-02",
          "pos": 81.8,
          "neg": 13.6
        },
        {
          "m": "2025-03",
          "pos": 77.5,
          "neg": 15.0
        },
        {
          "m": "2025-04",
          "pos": 81.8,
          "neg": 12.1
        },
        {
          "m": "2025-05",
          "pos": 75.0,
          "neg": 6.2
        },
        {
          "m": "2025-06",
          "pos": 88.5,
          "neg": 4.9
        },
        {
          "m": "2025-07",
          "pos": 78.0,
          "neg": 12.2
        },
        {
          "m": "2025-08",
          "pos": 79.1,
          "neg": 7.0
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
          "pos": 64.9,
          "neg": 13.5
        },
        {
          "m": "2026-05",
          "pos": 76.2,
          "neg": 9.5
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 23.6,
          "n": 89
        },
        "Atendimento": {
          "nps": 77.2,
          "n": 57
        },
        "Entrega & Logística": {
          "nps": 97.5,
          "n": 120
        },
        "Loja Física": {
          "nps": 72.1,
          "n": 86
        },
        "Outros": {
          "nps": 93.1,
          "n": 58
        },
        "Promoções & Fidelidade": {
          "nps": 57.1,
          "n": 238
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 76,
        "Abastecimento": 40,
        "Loja Física": 16,
        "Atendimento": 8,
        "Outros": 4,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 162,
        "Entrega & Logística": 118,
        "Loja Física": 70,
        "Outros": 54,
        "Atendimento": 49,
        "Abastecimento": 49
      }
    },
    {
      "nome": "L5179-VILA YARA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 74.2,
      "nps_textual": 71.3,
      "nps_hibrido": 73.6,
      "delta_hibrido": -0.6,
      "pct_pos": 81.5,
      "pct_neu": 8.4,
      "pct_neg": 10.1,
      "severidade": 24.58,
      "transacoes": 152237,
      "indice_prioridade": 45.5,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 799,
      "avaliacoes_ponderadas": 2493.0,
      "top_problemas": [
        {
          "cat": "Entrega & Logística",
          "pct": 4
        },
        {
          "cat": "Abastecimento",
          "pct": 43
        },
        {
          "cat": "Loja Física",
          "pct": 17
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 31
        },
        {
          "cat": "Entrega & Logística",
          "pct": 25
        },
        {
          "cat": "Outros",
          "pct": 10
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 68.8,
          "neg": 25.0
        },
        {
          "m": "2025-02",
          "pos": 72.0,
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
          "neg": 15.4
        },
        {
          "m": "2025-08",
          "pos": 88.9,
          "neg": 9.3
        },
        {
          "m": "2025-09",
          "pos": 65.5,
          "neg": 17.2
        },
        {
          "m": "2025-10",
          "pos": 81.6,
          "neg": 13.2
        },
        {
          "m": "2025-11",
          "pos": 78.1,
          "neg": 15.6
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
          "neg": 7.5
        },
        {
          "m": "2026-05",
          "pos": 89.7,
          "neg": 7.7
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -12.3,
          "n": 73
        },
        "Atendimento": {
          "nps": 95.1,
          "n": 206
        },
        "Entrega & Logística": {
          "nps": 94.7,
          "n": 170
        },
        "Loja Física": {
          "nps": 57.3,
          "n": 89
        },
        "Outros": {
          "nps": 92.5,
          "n": 67
        },
        "Promoções & Fidelidade": {
          "nps": 56.2,
          "n": 194
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 61,
        "Abastecimento": 47,
        "Loja Física": 24,
        "Atendimento": 7,
        "Entrega & Logística": 6,
        "Outros": 3
      },
      "elog_counts": {
        "Atendimento": 199,
        "Entrega & Logística": 164,
        "Promoções & Fidelidade": 133,
        "Loja Física": 65,
        "Outros": 64,
        "Abastecimento": 26
      }
    },
    {
      "nome": "L5202-VILA CAICARA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Litoral",
      "nps_trad": 73.7,
      "nps_textual": 67.9,
      "nps_hibrido": 71.9,
      "delta_hibrido": -1.8,
      "pct_pos": 77.4,
      "pct_neu": 13.0,
      "pct_neg": 9.6,
      "severidade": 25.74,
      "transacoes": 159082,
      "indice_prioridade": 45.4,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 722,
      "avaliacoes_ponderadas": 3029.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 45
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 39
        },
        {
          "cat": "Loja Física",
          "pct": 12
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 11
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 34
        },
        {
          "cat": "Outros",
          "pct": 11
        }
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
          "neg": 22.5
        },
        {
          "m": "2025-04",
          "pos": 84.4,
          "neg": 8.9
        },
        {
          "m": "2025-05",
          "pos": 73.0,
          "neg": 8.1
        },
        {
          "m": "2025-06",
          "pos": 85.1,
          "neg": 4.3
        },
        {
          "m": "2025-07",
          "pos": 72.4,
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
          "neg": 5.0
        },
        {
          "m": "2025-10",
          "pos": 76.6,
          "neg": 6.4
        },
        {
          "m": "2025-11",
          "pos": 81.4,
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
          "pos": 78.8,
          "neg": 11.5
        },
        {
          "m": "2026-03",
          "pos": 82.5,
          "neg": 8.8
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 25.0,
          "n": 116
        },
        "Atendimento": {
          "nps": 83.6,
          "n": 67
        },
        "Entrega & Logística": {
          "nps": 98.2,
          "n": 111
        },
        "Loja Física": {
          "nps": 75.3,
          "n": 97
        },
        "Outros": {
          "nps": 85.9,
          "n": 71
        },
        "Promoções & Fidelidade": {
          "nps": 62.3,
          "n": 260
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 71,
        "Abastecimento": 56,
        "Loja Física": 16,
        "Atendimento": 10,
        "Outros": 8,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 189,
        "Entrega & Logística": 109,
        "Loja Física": 81,
        "Outros": 63,
        "Abastecimento": 60,
        "Atendimento": 57
      }
    },
    {
      "nome": "L5077-OSCAR FREIRE (1341)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 71.2,
      "nps_textual": 68.5,
      "nps_hibrido": 69.3,
      "delta_hibrido": -1.9,
      "pct_pos": 79.5,
      "pct_neu": 9.6,
      "pct_neg": 11.0,
      "severidade": 24.81,
      "transacoes": 124422,
      "indice_prioridade": 45.2,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 365,
      "avaliacoes_ponderadas": 1420.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 12
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 38
        },
        {
          "cat": "Abastecimento",
          "pct": 35
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 21
        },
        {
          "cat": "Loja Física",
          "pct": 16
        },
        {
          "cat": "Abastecimento",
          "pct": 9
        }
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
          "pos": 52.2,
          "neg": 30.4
        },
        {
          "m": "2025-04",
          "pos": 88.9,
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
          "pos": 77.8,
          "neg": 14.8
        },
        {
          "m": "2025-10",
          "pos": 70.8,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 24.5,
          "n": 49
        },
        "Atendimento": {
          "nps": 80.0,
          "n": 70
        },
        "Entrega & Logística": {
          "nps": 96.4,
          "n": 56
        },
        "Loja Física": {
          "nps": 82.4,
          "n": 51
        },
        "Outros": {
          "nps": 77.8,
          "n": 27
        },
        "Promoções & Fidelidade": {
          "nps": 58.0,
          "n": 112
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 32,
        "Abastecimento": 23,
        "Atendimento": 9,
        "Outros": 5,
        "Loja Física": 5,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 80,
        "Atendimento": 61,
        "Entrega & Logística": 55,
        "Loja Física": 46,
        "Abastecimento": 26,
        "Outros": 22
      }
    },
    {
      "nome": "L5098-AUTONOMISTAS (1405)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 74.2,
      "nps_textual": 71.1,
      "nps_hibrido": 72.9,
      "delta_hibrido": -1.3,
      "pct_pos": 80.0,
      "pct_neu": 11.2,
      "pct_neg": 8.8,
      "severidade": 24.92,
      "transacoes": 153001,
      "indice_prioridade": 45.1,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 938,
      "avaliacoes_ponderadas": 3232.0,
      "top_problemas": [
        {
          "cat": "Outros",
          "pct": 4
        },
        {
          "cat": "Loja Física",
          "pct": 23
        },
        {
          "cat": "Atendimento",
          "pct": 6
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 24
        },
        {
          "cat": "Entrega & Logística",
          "pct": 24
        },
        {
          "cat": "Outros",
          "pct": 11
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 67.2,
          "neg": 18.8
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
          "pos": 77.5,
          "neg": 7.5
        },
        {
          "m": "2025-10",
          "pos": 84.1,
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
          "neg": 5.4
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
          "pos": 73.0,
          "neg": 5.4
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 15.2,
          "n": 99
        },
        "Atendimento": {
          "nps": 92.5,
          "n": 186
        },
        "Entrega & Logística": {
          "nps": 97.3,
          "n": 183
        },
        "Loja Física": {
          "nps": 57.3,
          "n": 110
        },
        "Outros": {
          "nps": 84.4,
          "n": 96
        },
        "Promoções & Fidelidade": {
          "nps": 59.8,
          "n": 264
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 80,
        "Abastecimento": 56,
        "Loja Física": 28,
        "Outros": 12,
        "Atendimento": 9,
        "Entrega & Logística": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 184,
        "Entrega & Logística": 180,
        "Atendimento": 177,
        "Outros": 84,
        "Loja Física": 82,
        "Abastecimento": 43
      }
    },
    {
      "nome": "L5129-REAL PARQUE",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 72.5,
      "nps_textual": 65.8,
      "nps_hibrido": 68.9,
      "delta_hibrido": -3.6,
      "pct_pos": 76.4,
      "pct_neu": 13.1,
      "pct_neg": 10.6,
      "severidade": 25.85,
      "transacoes": 56391,
      "indice_prioridade": 44.9,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 360,
      "avaliacoes_ponderadas": 1330.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 45
        },
        {
          "cat": "Abastecimento",
          "pct": 26
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 24
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 14
        },
        {
          "cat": "Loja Física",
          "pct": 19
        },
        {
          "cat": "Atendimento",
          "pct": 17
        }
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
          "neg": 8.0
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
          "pos": 76.2,
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
          "neg": 18.8
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 49.2,
          "n": 59
        },
        "Atendimento": {
          "nps": 97.9,
          "n": 48
        },
        "Entrega & Logística": {
          "nps": 91.7,
          "n": 48
        },
        "Loja Física": {
          "nps": 44.4,
          "n": 81
        },
        "Outros": {
          "nps": 86.2,
          "n": 29
        },
        "Promoções & Fidelidade": {
          "nps": 58.9,
          "n": 95
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 30,
        "Loja Física": 28,
        "Abastecimento": 20,
        "Outros": 4,
        "Entrega & Logística": 2,
        "Atendimento": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 65,
        "Loja Física": 53,
        "Atendimento": 47,
        "Entrega & Logística": 46,
        "Abastecimento": 39,
        "Outros": 25
      }
    },
    {
      "nome": "L5013-GRANJA VIANA (0545)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 77.1,
      "nps_textual": 73.0,
      "nps_hibrido": 75.6,
      "delta_hibrido": -1.6,
      "pct_pos": 83.1,
      "pct_neu": 6.9,
      "pct_neg": 10.0,
      "severidade": 23.77,
      "transacoes": 93179,
      "indice_prioridade": 44.6,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 708,
      "avaliacoes_ponderadas": 1808.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 34
        },
        {
          "cat": "Abastecimento",
          "pct": 41
        },
        {
          "cat": "Atendimento",
          "pct": 4
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 45
        },
        {
          "cat": "Entrega & Logística",
          "pct": 22
        },
        {
          "cat": "Loja Física",
          "pct": 9
        }
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
          "pos": 81.0,
          "neg": 9.5
        },
        {
          "m": "2025-05",
          "pos": 68.0,
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
          "pos": 85.2,
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
          "pos": 89.8,
          "neg": 8.2
        },
        {
          "m": "2026-03",
          "pos": 86.3,
          "neg": 5.5
        },
        {
          "m": "2026-04",
          "pos": 87.0,
          "neg": 5.6
        },
        {
          "m": "2026-05",
          "pos": 94.3,
          "neg": 0.0
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -7.9,
          "n": 63
        },
        "Atendimento": {
          "nps": 96.0,
          "n": 275
        },
        "Entrega & Logística": {
          "nps": 97.0,
          "n": 132
        },
        "Loja Física": {
          "nps": 34.6,
          "n": 81
        },
        "Outros": {
          "nps": 80.9,
          "n": 47
        },
        "Promoções & Fidelidade": {
          "nps": 58.2,
          "n": 110
        }
      },
      "prob_counts": {
        "Abastecimento": 39,
        "Promoções & Fidelidade": 33,
        "Loja Física": 29,
        "Atendimento": 8,
        "Outros": 8,
        "Entrega & Logística": 3
      },
      "elog_counts": {
        "Atendimento": 267,
        "Entrega & Logística": 129,
        "Promoções & Fidelidade": 77,
        "Loja Física": 52,
        "Outros": 39,
        "Abastecimento": 24
      }
    },
    {
      "nome": "L5221-BARUERI (BETHAVILLE)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 73.4,
      "nps_textual": 68.5,
      "nps_hibrido": 70.1,
      "delta_hibrido": -3.3,
      "pct_pos": 79.3,
      "pct_neu": 9.8,
      "pct_neg": 10.9,
      "severidade": 24.91,
      "transacoes": 116761,
      "indice_prioridade": 44.2,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 368,
      "avaliacoes_ponderadas": 1520.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 52
        },
        {
          "cat": "Atendimento",
          "pct": 8
        },
        {
          "cat": "Loja Física",
          "pct": 15
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 29
        },
        {
          "cat": "Entrega & Logística",
          "pct": 26
        },
        {
          "cat": "Loja Física",
          "pct": 14
        }
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
          "pos": 78.9,
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
          "neg": 0.0
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
          "pos": 80.6,
          "neg": 11.1
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": -22.2,
          "n": 45
        },
        "Atendimento": {
          "nps": 90.0,
          "n": 90
        },
        "Entrega & Logística": {
          "nps": 96.2,
          "n": 78
        },
        "Loja Física": {
          "nps": 68.0,
          "n": 50
        },
        "Outros": {
          "nps": 84.2,
          "n": 19
        },
        "Promoções & Fidelidade": {
          "nps": 65.1,
          "n": 86
        }
      },
      "prob_counts": {
        "Abastecimento": 34,
        "Promoções & Fidelidade": 21,
        "Loja Física": 10,
        "Atendimento": 6,
        "Outros": 3,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Atendimento": 84,
        "Entrega & Logística": 76,
        "Promoções & Fidelidade": 65,
        "Loja Física": 40,
        "Outros": 16,
        "Abastecimento": 11
      }
    },
    {
      "nome": "L5124-BOTUCATU",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 67.2,
      "nps_textual": 67.2,
      "nps_hibrido": 68.8,
      "delta_hibrido": 1.6,
      "pct_pos": 78.4,
      "pct_neu": 10.3,
      "pct_neg": 11.2,
      "severidade": 25.0,
      "transacoes": 85235,
      "indice_prioridade": 44.2,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 320,
      "avaliacoes_ponderadas": 1708.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 39
        },
        {
          "cat": "Abastecimento",
          "pct": 39
        },
        {
          "cat": "Loja Física",
          "pct": 17
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 33
        },
        {
          "cat": "Entrega & Logística",
          "pct": 24
        },
        {
          "cat": "Abastecimento",
          "pct": 10
        }
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
          "pos": 75.0,
          "neg": 15.6
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
          "neg": 21.1
        },
        {
          "m": "2026-02",
          "pos": 86.7,
          "neg": 6.7
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 22.7,
          "n": 44
        },
        "Atendimento": {
          "nps": 85.0,
          "n": 40
        },
        "Entrega & Logística": {
          "nps": 98.3,
          "n": 60
        },
        "Loja Física": {
          "nps": 61.0,
          "n": 41
        },
        "Outros": {
          "nps": 100.0,
          "n": 17
        },
        "Promoções & Fidelidade": {
          "nps": 59.3,
          "n": 118
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 34,
        "Abastecimento": 20,
        "Loja Física": 10,
        "Atendimento": 4,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 84,
        "Entrega & Logística": 59,
        "Atendimento": 36,
        "Loja Física": 31,
        "Abastecimento": 24,
        "Outros": 17
      }
    },
    {
      "nome": "L5142-MARILIA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 72.0,
      "nps_textual": 67.4,
      "nps_hibrido": 69.5,
      "delta_hibrido": -2.4,
      "pct_pos": 79.6,
      "pct_neu": 8.2,
      "pct_neg": 12.2,
      "severidade": 25.0,
      "transacoes": 63320,
      "indice_prioridade": 44.2,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 328,
      "avaliacoes_ponderadas": 1848.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 48
        },
        {
          "cat": "Loja Física",
          "pct": 18
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 32
        }
      ],
      "top_elogios": [
        {
          "cat": "Entrega & Logística",
          "pct": 25
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 34
        },
        {
          "cat": "Loja Física",
          "pct": 14
        }
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
          "pos": 94.1,
          "neg": 5.9
        },
        {
          "m": "2025-05",
          "pos": 72.4,
          "neg": 13.8
        },
        {
          "m": "2025-06",
          "pos": 100.0,
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
          "pos": 82.6,
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
          "pos": 66.7,
          "neg": 14.3
        },
        {
          "m": "2026-05",
          "pos": 78.9,
          "neg": 10.5
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 6.2,
          "n": 48
        },
        "Atendimento": {
          "nps": 95.7,
          "n": 23
        },
        "Entrega & Logística": {
          "nps": 100.0,
          "n": 66
        },
        "Loja Física": {
          "nps": 61.7,
          "n": 47
        },
        "Outros": {
          "nps": 89.7,
          "n": 29
        },
        "Promoções & Fidelidade": {
          "nps": 65.2,
          "n": 115
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 27,
        "Abastecimento": 26,
        "Loja Física": 11,
        "Outros": 2,
        "Atendimento": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 88,
        "Entrega & Logística": 66,
        "Loja Física": 36,
        "Outros": 27,
        "Abastecimento": 22,
        "Atendimento": 22
      }
    },
    {
      "nome": "L5068-BOSQUE DA SAUDE (1321)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 70.6,
      "nps_textual": 65.4,
      "nps_hibrido": 68.6,
      "delta_hibrido": -1.9,
      "pct_pos": 74.0,
      "pct_neu": 17.5,
      "pct_neg": 8.5,
      "severidade": 26.61,
      "transacoes": 145938,
      "indice_prioridade": 44.0,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 622,
      "avaliacoes_ponderadas": 2398.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 9
        },
        {
          "cat": "Abastecimento",
          "pct": 43
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 32
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 30
        },
        {
          "cat": "Outros",
          "pct": 12
        },
        {
          "cat": "Abastecimento",
          "pct": 9
        }
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
          "neg": 8.2
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
          "neg": 12.8
        },
        {
          "m": "2025-10",
          "pos": 69.0,
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
          "pos": 67.3,
          "neg": 10.2
        },
        {
          "m": "2026-04",
          "pos": 80.0,
          "neg": 10.0
        },
        {
          "m": "2026-05",
          "pos": 64.5,
          "neg": 9.7
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 20.9,
          "n": 86
        },
        "Atendimento": {
          "nps": 87.5,
          "n": 152
        },
        "Entrega & Logística": {
          "nps": 93.9,
          "n": 82
        },
        "Loja Física": {
          "nps": 66.7,
          "n": 63
        },
        "Outros": {
          "nps": 89.8,
          "n": 59
        },
        "Promoções & Fidelidade": {
          "nps": 46.7,
          "n": 180
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 79,
        "Abastecimento": 45,
        "Atendimento": 14,
        "Loja Física": 13,
        "Outros": 6,
        "Entrega & Logística": 5
      },
      "elog_counts": {
        "Atendimento": 138,
        "Promoções & Fidelidade": 101,
        "Entrega & Logística": 77,
        "Outros": 53,
        "Loja Física": 50,
        "Abastecimento": 41
      }
    },
    {
      "nome": "L5251-JANGADEIROS",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 74.2,
      "nps_textual": 68.4,
      "nps_hibrido": 70.3,
      "delta_hibrido": -3.9,
      "pct_pos": 77.6,
      "pct_neu": 13.2,
      "pct_neg": 9.2,
      "severidade": 25.65,
      "transacoes": 106574,
      "indice_prioridade": 43.8,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 687,
      "avaliacoes_ponderadas": 3055.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 41
        },
        {
          "cat": "Abastecimento",
          "pct": 38
        },
        {
          "cat": "Loja Física",
          "pct": 16
        }
      ],
      "top_elogios": [
        {
          "cat": "Loja Física",
          "pct": 15
        },
        {
          "cat": "Abastecimento",
          "pct": 10
        },
        {
          "cat": "Entrega & Logística",
          "pct": 22
        }
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
          "neg": 8.8
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
          "neg": 10.4
        },
        {
          "m": "2025-06",
          "pos": 86.6,
          "neg": 6.0
        },
        {
          "m": "2025-07",
          "pos": 88.9,
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
          "neg": 8.3
        },
        {
          "m": "2026-02",
          "pos": 74.1,
          "neg": 18.5
        },
        {
          "m": "2026-03",
          "pos": 65.0,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 28.7,
          "n": 101
        },
        "Atendimento": {
          "nps": 91.5,
          "n": 82
        },
        "Entrega & Logística": {
          "nps": 99.2,
          "n": 118
        },
        "Loja Física": {
          "nps": 69.6,
          "n": 102
        },
        "Outros": {
          "nps": 84.6,
          "n": 52
        },
        "Promoções & Fidelidade": {
          "nps": 57.8,
          "n": 232
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 72,
        "Abastecimento": 48,
        "Loja Física": 21,
        "Outros": 6,
        "Atendimento": 6,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 160,
        "Entrega & Logística": 117,
        "Loja Física": 81,
        "Atendimento": 76,
        "Abastecimento": 53,
        "Outros": 46
      }
    },
    {
      "nome": "L5026-VILA MARIA (0818)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 74.8,
      "nps_textual": 68.2,
      "nps_hibrido": 71.6,
      "delta_hibrido": -3.1,
      "pct_pos": 79.4,
      "pct_neu": 9.5,
      "pct_neg": 11.2,
      "severidade": 24.86,
      "transacoes": 99191,
      "indice_prioridade": 43.6,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 349,
      "avaliacoes_ponderadas": 1642.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 46
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 31
        },
        {
          "cat": "Loja Física",
          "pct": 15
        }
      ],
      "top_elogios": [
        {
          "cat": "Entrega & Logística",
          "pct": 28
        },
        {
          "cat": "Outros",
          "pct": 10
        },
        {
          "cat": "Loja Física",
          "pct": 13
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 82.4,
          "neg": 8.8
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
          "neg": 16.7
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 2.2,
          "n": 46
        },
        "Atendimento": {
          "nps": 85.7,
          "n": 49
        },
        "Entrega & Logística": {
          "nps": 100.0,
          "n": 77
        },
        "Loja Física": {
          "nps": 67.4,
          "n": 43
        },
        "Outros": {
          "nps": 86.7,
          "n": 30
        },
        "Promoções & Fidelidade": {
          "nps": 60.6,
          "n": 104
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 29,
        "Abastecimento": 27,
        "Loja Física": 8,
        "Atendimento": 5,
        "Outros": 3
      },
      "elog_counts": {
        "Entrega & Logística": 77,
        "Promoções & Fidelidade": 75,
        "Atendimento": 44,
        "Loja Física": 35,
        "Outros": 27,
        "Abastecimento": 19
      }
    },
    {
      "nome": "L5041-TAUBATE (1224)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 73.9,
      "nps_textual": 67.1,
      "nps_hibrido": 69.7,
      "delta_hibrido": -4.2,
      "pct_pos": 78.2,
      "pct_neu": 10.7,
      "pct_neg": 11.1,
      "severidade": 25.61,
      "transacoes": 79196,
      "indice_prioridade": 43.6,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 307,
      "avaliacoes_ponderadas": 1456.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 50
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 35
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 12
        },
        {
          "cat": "Entrega & Logística",
          "pct": 25
        },
        {
          "cat": "Loja Física",
          "pct": 14
        }
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
          "neg": 25.0
        },
        {
          "m": "2025-03",
          "pos": 75.0,
          "neg": 18.8
        },
        {
          "m": "2025-04",
          "pos": 80.0,
          "neg": 20.0
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
          "pos": 83.3,
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
          "pos": 82.6,
          "neg": 8.7
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 19.6,
          "n": 56
        },
        "Atendimento": {
          "nps": 91.2,
          "n": 34
        },
        "Entrega & Logística": {
          "nps": 93.7,
          "n": 63
        },
        "Loja Física": {
          "nps": 79.5,
          "n": 39
        },
        "Outros": {
          "nps": 77.3,
          "n": 22
        },
        "Promoções & Fidelidade": {
          "nps": 61.3,
          "n": 93
        }
      },
      "prob_counts": {
        "Abastecimento": 28,
        "Promoções & Fidelidade": 24,
        "Loja Física": 6,
        "Outros": 4,
        "Entrega & Logística": 3,
        "Atendimento": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 69,
        "Entrega & Logística": 60,
        "Loja Física": 33,
        "Atendimento": 32,
        "Abastecimento": 28,
        "Outros": 18
      }
    },
    {
      "nome": "L5131-TAUBATE SAO GERALDO",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 70.1,
      "nps_textual": 66.8,
      "nps_hibrido": 68.6,
      "delta_hibrido": -1.6,
      "pct_pos": 77.4,
      "pct_neu": 11.9,
      "pct_neg": 10.7,
      "severidade": 25.61,
      "transacoes": 90544,
      "indice_prioridade": 43.5,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 385,
      "avaliacoes_ponderadas": 1634.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 44
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 37
        },
        {
          "cat": "Loja Física",
          "pct": 10
        }
      ],
      "top_elogios": [
        {
          "cat": "Loja Física",
          "pct": 17
        },
        {
          "cat": "Abastecimento",
          "pct": 10
        },
        {
          "cat": "Entrega & Logística",
          "pct": 21
        }
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
          "neg": 11.5
        },
        {
          "m": "2025-06",
          "pos": 78.6,
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
          "pos": 80.0,
          "neg": 4.0
        },
        {
          "m": "2026-01",
          "pos": 72.4,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 21.3,
          "n": 61
        },
        "Atendimento": {
          "nps": 83.3,
          "n": 42
        },
        "Entrega & Logística": {
          "nps": 89.9,
          "n": 69
        },
        "Loja Física": {
          "nps": 82.5,
          "n": 57
        },
        "Outros": {
          "nps": 87.1,
          "n": 31
        },
        "Promoções & Fidelidade": {
          "nps": 58.4,
          "n": 125
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 37,
        "Abastecimento": 30,
        "Loja Física": 6,
        "Atendimento": 6,
        "Entrega & Logística": 5,
        "Outros": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 88,
        "Entrega & Logística": 64,
        "Loja Física": 51,
        "Atendimento": 36,
        "Abastecimento": 31,
        "Outros": 28
      }
    },
    {
      "nome": "L5086-PORTAL DO MORUMBI (1352)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 75.3,
      "nps_textual": 73.7,
      "nps_hibrido": 75.3,
      "delta_hibrido": 0.1,
      "pct_pos": 81.7,
      "pct_neu": 10.4,
      "pct_neg": 8.0,
      "severidade": 24.18,
      "transacoes": 182025,
      "indice_prioridade": 43.4,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 1294,
      "avaliacoes_ponderadas": 3540.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 10
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 51
        },
        {
          "cat": "Abastecimento",
          "pct": 32
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 40
        },
        {
          "cat": "Outros",
          "pct": 12
        },
        {
          "cat": "Entrega & Logística",
          "pct": 23
        }
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
          "pos": 78.1,
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
          "neg": 10.3
        },
        {
          "m": "2025-11",
          "pos": 86.2,
          "neg": 7.7
        },
        {
          "m": "2025-12",
          "pos": 88.9,
          "neg": 5.6
        },
        {
          "m": "2026-01",
          "pos": 84.2,
          "neg": 9.0
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
          "pos": 87.0,
          "neg": 4.9
        },
        {
          "m": "2026-05",
          "pos": 90.7,
          "neg": 2.1
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 5.8,
          "n": 103
        },
        "Atendimento": {
          "nps": 91.5,
          "n": 449
        },
        "Entrega & Logística": {
          "nps": 97.5,
          "n": 244
        },
        "Loja Física": {
          "nps": 81.1,
          "n": 74
        },
        "Outros": {
          "nps": 94.9,
          "n": 137
        },
        "Promoções & Fidelidade": {
          "nps": 38.0,
          "n": 287
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 125,
        "Abastecimento": 64,
        "Atendimento": 28,
        "Loja Física": 9,
        "Entrega & Logística": 6,
        "Outros": 5
      },
      "elog_counts": {
        "Atendimento": 421,
        "Entrega & Logística": 238,
        "Promoções & Fidelidade": 162,
        "Outros": 132,
        "Loja Física": 65,
        "Abastecimento": 39
      }
    },
    {
      "nome": "L5268-TIBURCIO",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 74.7,
      "nps_textual": 69.1,
      "nps_hibrido": 72.7,
      "delta_hibrido": -2.0,
      "pct_pos": 78.2,
      "pct_neu": 12.6,
      "pct_neg": 9.2,
      "severidade": 25.15,
      "transacoes": 130403,
      "indice_prioridade": 43.1,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 601,
      "avaliacoes_ponderadas": 3209.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 9
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 36
        },
        {
          "cat": "Abastecimento",
          "pct": 36
        }
      ],
      "top_elogios": [
        {
          "cat": "Loja Física",
          "pct": 16
        },
        {
          "cat": "Outros",
          "pct": 11
        },
        {
          "cat": "Abastecimento",
          "pct": 9
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 86.5,
          "neg": 0.0
        },
        {
          "m": "2025-02",
          "pos": 71.9,
          "neg": 18.8
        },
        {
          "m": "2025-03",
          "pos": 73.0,
          "neg": 16.2
        },
        {
          "m": "2025-04",
          "pos": 84.0,
          "neg": 4.0
        },
        {
          "m": "2025-05",
          "pos": 85.4,
          "neg": 2.4
        },
        {
          "m": "2025-06",
          "pos": 77.3,
          "neg": 11.4
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
          "pos": 72.3,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 30.4,
          "n": 79
        },
        "Atendimento": {
          "nps": 73.8,
          "n": 65
        },
        "Entrega & Logística": {
          "nps": 97.2,
          "n": 106
        },
        "Loja Física": {
          "nps": 71.9,
          "n": 96
        },
        "Outros": {
          "nps": 91.2,
          "n": 57
        },
        "Promoções & Fidelidade": {
          "nps": 60.1,
          "n": 198
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 59,
        "Abastecimento": 35,
        "Loja Física": 20,
        "Atendimento": 12,
        "Outros": 3,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 139,
        "Entrega & Logística": 104,
        "Loja Física": 76,
        "Outros": 54,
        "Atendimento": 53,
        "Abastecimento": 44
      }
    },
    {
      "nome": "L5147-ROLAND GARROS",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 73.1,
      "nps_textual": 69.3,
      "nps_hibrido": 71.3,
      "delta_hibrido": -1.8,
      "pct_pos": 78.6,
      "pct_neu": 12.1,
      "pct_neg": 9.3,
      "severidade": 24.95,
      "transacoes": 103251,
      "indice_prioridade": 43.1,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 602,
      "avaliacoes_ponderadas": 2760.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 50
        },
        {
          "cat": "Loja Física",
          "pct": 18
        },
        {
          "cat": "Abastecimento",
          "pct": 25
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 22
        },
        {
          "cat": "Entrega & Logística",
          "pct": 23
        },
        {
          "cat": "Outros",
          "pct": 10
        }
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
          "pos": 81.8,
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
          "pos": 88.1,
          "neg": 9.5
        },
        {
          "m": "2025-09",
          "pos": 80.0,
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
          "pos": 73.1,
          "neg": 7.7
        },
        {
          "m": "2026-03",
          "pos": 74.3,
          "neg": 17.1
        },
        {
          "m": "2026-04",
          "pos": 75.0,
          "neg": 13.9
        },
        {
          "m": "2026-05",
          "pos": 75.0,
          "neg": 15.0
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 38.6,
          "n": 70
        },
        "Atendimento": {
          "nps": 90.3,
          "n": 113
        },
        "Entrega & Logística": {
          "nps": 98.2,
          "n": 110
        },
        "Loja Física": {
          "nps": 64.6,
          "n": 65
        },
        "Outros": {
          "nps": 87.0,
          "n": 54
        },
        "Promoções & Fidelidade": {
          "nps": 47.6,
          "n": 189
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 71,
        "Abastecimento": 29,
        "Loja Física": 13,
        "Atendimento": 9,
        "Outros": 5,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 118,
        "Entrega & Logística": 108,
        "Atendimento": 104,
        "Loja Física": 52,
        "Outros": 49,
        "Abastecimento": 41
      }
    },
    {
      "nome": "L5127-SAO ROQUE",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 73.0,
      "nps_textual": 66.7,
      "nps_hibrido": 69.6,
      "delta_hibrido": -3.4,
      "pct_pos": 75.5,
      "pct_neu": 15.8,
      "pct_neg": 8.7,
      "severidade": 26.06,
      "transacoes": 152690,
      "indice_prioridade": 43.0,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 652,
      "avaliacoes_ponderadas": 3465.0,
      "top_problemas": [
        {
          "cat": "Entrega & Logística",
          "pct": 7
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 44
        },
        {
          "cat": "Atendimento",
          "pct": 7
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 37
        },
        {
          "cat": "Abastecimento",
          "pct": 10
        },
        {
          "cat": "Entrega & Logística",
          "pct": 24
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 67.6,
          "neg": 8.8
        },
        {
          "m": "2025-02",
          "pos": 72.7,
          "neg": 4.5
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
          "neg": 9.8
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
          "pos": 77.1,
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
          "pos": 76.6,
          "neg": 17.0
        },
        {
          "m": "2026-05",
          "pos": 54.2,
          "neg": 8.3
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 41.0,
          "n": 83
        },
        "Atendimento": {
          "nps": 70.2,
          "n": 57
        },
        "Entrega & Logística": {
          "nps": 91.2,
          "n": 125
        },
        "Loja Física": {
          "nps": 70.8,
          "n": 72
        },
        "Outros": {
          "nps": 84.8,
          "n": 46
        },
        "Promoções & Fidelidade": {
          "nps": 58.4,
          "n": 269
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 87,
        "Abastecimento": 32,
        "Loja Física": 15,
        "Atendimento": 13,
        "Entrega & Logística": 7,
        "Outros": 6
      },
      "elog_counts": {
        "Promoções & Fidelidade": 182,
        "Entrega & Logística": 118,
        "Loja Física": 57,
        "Abastecimento": 51,
        "Atendimento": 44,
        "Outros": 40
      }
    },
    {
      "nome": "L5277-VILA CURUCA (NORDESTINA)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 70.8,
      "nps_textual": 67.3,
      "nps_hibrido": 71.0,
      "delta_hibrido": 0.2,
      "pct_pos": 77.3,
      "pct_neu": 12.8,
      "pct_neg": 10.0,
      "severidade": 25.31,
      "transacoes": 119695,
      "indice_prioridade": 43.0,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 431,
      "avaliacoes_ponderadas": 2224.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 14
        },
        {
          "cat": "Loja Física",
          "pct": 21
        },
        {
          "cat": "Abastecimento",
          "pct": 37
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 12
        },
        {
          "cat": "Outros",
          "pct": 13
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 32
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 78.6,
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
          "pos": 76.0,
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
          "neg": 3.6
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 34.3,
          "n": 67
        },
        "Atendimento": {
          "nps": 60.0,
          "n": 50
        },
        "Entrega & Logística": {
          "nps": 90.1,
          "n": 71
        },
        "Loja Física": {
          "nps": 56.9,
          "n": 58
        },
        "Outros": {
          "nps": 95.7,
          "n": 46
        },
        "Promoções & Fidelidade": {
          "nps": 69.1,
          "n": 139
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 33,
        "Abastecimento": 28,
        "Loja Física": 16,
        "Atendimento": 14,
        "Entrega & Logística": 5,
        "Outros": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 106,
        "Entrega & Logística": 66,
        "Outros": 44,
        "Loja Física": 42,
        "Abastecimento": 39,
        "Atendimento": 36
      }
    },
    {
      "nome": "L5241-ITAPEVI",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 74.8,
      "nps_textual": 69.7,
      "nps_hibrido": 71.8,
      "delta_hibrido": -3.1,
      "pct_pos": 79.8,
      "pct_neu": 10.2,
      "pct_neg": 10.0,
      "severidade": 24.82,
      "transacoes": 130396,
      "indice_prioridade": 42.5,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 489,
      "avaliacoes_ponderadas": 2668.0,
      "top_problemas": [
        {
          "cat": "Outros",
          "pct": 6
        },
        {
          "cat": "Atendimento",
          "pct": 10
        },
        {
          "cat": "Abastecimento",
          "pct": 43
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 10
        },
        {
          "cat": "Entrega & Logística",
          "pct": 23
        },
        {
          "cat": "Loja Física",
          "pct": 14
        }
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
          "pos": 83.3,
          "neg": 8.3
        },
        {
          "m": "2025-04",
          "pos": 78.8,
          "neg": 15.2
        },
        {
          "m": "2025-05",
          "pos": 78.8,
          "neg": 9.1
        },
        {
          "m": "2025-06",
          "pos": 81.6,
          "neg": 5.3
        },
        {
          "m": "2025-07",
          "pos": 81.2,
          "neg": 12.5
        },
        {
          "m": "2025-08",
          "pos": 72.4,
          "neg": 20.7
        },
        {
          "m": "2025-09",
          "pos": 80.6,
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
          "neg": 8.8
        },
        {
          "m": "2026-01",
          "pos": 86.7,
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
          "pos": 76.9,
          "neg": 0.0
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 22.6,
          "n": 84
        },
        "Atendimento": {
          "nps": 80.4,
          "n": 56
        },
        "Entrega & Logística": {
          "nps": 98.9,
          "n": 90
        },
        "Loja Física": {
          "nps": 64.8,
          "n": 71
        },
        "Outros": {
          "nps": 84.4,
          "n": 45
        },
        "Promoções & Fidelidade": {
          "nps": 72.7,
          "n": 143
        }
      },
      "prob_counts": {
        "Abastecimento": 44,
        "Promoções & Fidelidade": 28,
        "Loja Física": 16,
        "Atendimento": 6,
        "Outros": 4,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 115,
        "Entrega & Logística": 89,
        "Loja Física": 55,
        "Atendimento": 50,
        "Outros": 41,
        "Abastecimento": 40
      }
    },
    {
      "nome": "L5279-BOX CAIEIRAS",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 71.8,
      "nps_textual": 66.8,
      "nps_hibrido": 69.1,
      "delta_hibrido": -2.7,
      "pct_pos": 77.6,
      "pct_neu": 11.6,
      "pct_neg": 10.8,
      "severidade": 24.88,
      "transacoes": 78280,
      "indice_prioridade": 42.3,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 259,
      "avaliacoes_ponderadas": 1189.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 50
        },
        {
          "cat": "Abastecimento",
          "pct": 29
        },
        {
          "cat": "Loja Física",
          "pct": 14
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 35
        },
        {
          "cat": "Abastecimento",
          "pct": 10
        },
        {
          "cat": "Atendimento",
          "pct": 17
        }
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
          "pos": 78.9,
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
          "pos": 90.0,
          "neg": 10.0
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
          "neg": 0.0
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 35.1,
          "n": 37
        },
        "Atendimento": {
          "nps": 100.0,
          "n": 34
        },
        "Entrega & Logística": {
          "nps": 95.3,
          "n": 43
        },
        "Loja Física": {
          "nps": 62.5,
          "n": 24
        },
        "Outros": {
          "nps": 76.5,
          "n": 17
        },
        "Promoções & Fidelidade": {
          "nps": 54.8,
          "n": 104
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 33,
        "Abastecimento": 16,
        "Loja Física": 5,
        "Outros": 2,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 71,
        "Entrega & Logística": 41,
        "Atendimento": 34,
        "Abastecimento": 21,
        "Loja Física": 19,
        "Outros": 15
      }
    },
    {
      "nome": "L5218-PARELHEIROS",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 77.5,
      "nps_textual": 71.3,
      "nps_hibrido": 75.5,
      "delta_hibrido": -2.0,
      "pct_pos": 80.5,
      "pct_neu": 10.3,
      "pct_neg": 9.2,
      "severidade": 24.56,
      "transacoes": 158916,
      "indice_prioridade": 42.2,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 738,
      "avaliacoes_ponderadas": 3889.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 41
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 37
        },
        {
          "cat": "Loja Física",
          "pct": 15
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 13
        },
        {
          "cat": "Loja Física",
          "pct": 14
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 30
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 82.5,
          "neg": 10.0
        },
        {
          "m": "2025-02",
          "pos": 74.3,
          "neg": 11.4
        },
        {
          "m": "2025-03",
          "pos": 84.8,
          "neg": 15.2
        },
        {
          "m": "2025-04",
          "pos": 76.7,
          "neg": 10.0
        },
        {
          "m": "2025-05",
          "pos": 76.9,
          "neg": 10.3
        },
        {
          "m": "2025-06",
          "pos": 83.3,
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
          "pos": 83.7,
          "neg": 12.2
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
          "neg": 8.7
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 39.8,
          "n": 118
        },
        "Atendimento": {
          "nps": 87.2,
          "n": 86
        },
        "Entrega & Logística": {
          "nps": 94.6,
          "n": 129
        },
        "Loja Física": {
          "nps": 73.5,
          "n": 98
        },
        "Outros": {
          "nps": 96.6,
          "n": 58
        },
        "Promoções & Fidelidade": {
          "nps": 61.8,
          "n": 249
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 70,
        "Abastecimento": 43,
        "Loja Física": 16,
        "Atendimento": 8,
        "Entrega & Logística": 5,
        "Outros": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 179,
        "Entrega & Logística": 124,
        "Loja Física": 82,
        "Atendimento": 78,
        "Abastecimento": 75,
        "Outros": 56
      }
    },
    {
      "nome": "L5012-SOROCABA (0527)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 70.2,
      "nps_textual": 66.3,
      "nps_hibrido": 69.8,
      "delta_hibrido": -0.4,
      "pct_pos": 76.6,
      "pct_neu": 13.1,
      "pct_neg": 10.3,
      "severidade": 25.41,
      "transacoes": 47602,
      "indice_prioridade": 42.0,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 252,
      "avaliacoes_ponderadas": 1194.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 42
        },
        {
          "cat": "Loja Física",
          "pct": 19
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 35
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 12
        },
        {
          "cat": "Loja Física",
          "pct": 16
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 31
        }
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
          "pos": 76.9,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 28.6,
          "n": 42
        },
        "Atendimento": {
          "nps": 82.1,
          "n": 28
        },
        "Entrega & Logística": {
          "nps": 100.0,
          "n": 37
        },
        "Loja Física": {
          "nps": 66.7,
          "n": 39
        },
        "Outros": {
          "nps": 100.0,
          "n": 18
        },
        "Promoções & Fidelidade": {
          "nps": 58.0,
          "n": 88
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 28,
        "Abastecimento": 19,
        "Loja Física": 8,
        "Atendimento": 4
      },
      "elog_counts": {
        "Promoções & Fidelidade": 60,
        "Entrega & Logística": 37,
        "Loja Física": 31,
        "Atendimento": 24,
        "Abastecimento": 23,
        "Outros": 18
      }
    },
    {
      "nome": "L5048-SJC ANDROMEDA (1261)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 73.3,
      "nps_textual": 65.0,
      "nps_hibrido": 70.4,
      "delta_hibrido": -2.9,
      "pct_pos": 74.6,
      "pct_neu": 15.8,
      "pct_neg": 9.7,
      "severidade": 25.92,
      "transacoes": 110203,
      "indice_prioridade": 41.9,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 311,
      "avaliacoes_ponderadas": 1479.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 50
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 43
        }
      ],
      "top_elogios": [
        {
          "cat": "Outros",
          "pct": 13
        },
        {
          "cat": "Loja Física",
          "pct": 16
        },
        {
          "cat": "Entrega & Logística",
          "pct": 23
        }
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
          "pos": 84.6,
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
          "pos": 66.7,
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
          "neg": 26.7
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 15.2,
          "n": 46
        },
        "Atendimento": {
          "nps": 88.5,
          "n": 26
        },
        "Entrega & Logística": {
          "nps": 96.4,
          "n": 56
        },
        "Loja Física": {
          "nps": 81.4,
          "n": 43
        },
        "Outros": {
          "nps": 91.2,
          "n": 34
        },
        "Promoções & Fidelidade": {
          "nps": 49.1,
          "n": 106
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 41,
        "Abastecimento": 24,
        "Loja Física": 6,
        "Outros": 3,
        "Atendimento": 3,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 65,
        "Entrega & Logística": 54,
        "Loja Física": 37,
        "Outros": 31,
        "Atendimento": 23,
        "Abastecimento": 22
      }
    },
    {
      "nome": "L5290-SAO LOURENCO",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Litoral",
      "nps_trad": 77.6,
      "nps_textual": 68.1,
      "nps_hibrido": 71.4,
      "delta_hibrido": -6.2,
      "pct_pos": 81.0,
      "pct_neu": 6.2,
      "pct_neg": 12.9,
      "severidade": 24.36,
      "transacoes": 31194,
      "indice_prioridade": 41.6,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 210,
      "avaliacoes_ponderadas": 676.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 11
        },
        {
          "cat": "Abastecimento",
          "pct": 48
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 26
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 29
        },
        {
          "cat": "Entrega & Logística",
          "pct": 19
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 26
        }
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 0.0,
          "n": 32
        },
        "Atendimento": {
          "nps": 88.7,
          "n": 53
        },
        "Entrega & Logística": {
          "nps": 94.1,
          "n": 34
        },
        "Loja Física": {
          "nps": 70.6,
          "n": 17
        },
        "Outros": {
          "nps": 82.4,
          "n": 17
        },
        "Promoções & Fidelidade": {
          "nps": 66.7,
          "n": 57
        }
      },
      "prob_counts": {
        "Abastecimento": 19,
        "Promoções & Fidelidade": 12,
        "Loja Física": 3,
        "Atendimento": 3,
        "Outros": 2,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Atendimento": 50,
        "Promoções & Fidelidade": 45,
        "Entrega & Logística": 33,
        "Outros": 15,
        "Loja Física": 14,
        "Abastecimento": 13
      }
    },
    {
      "nome": "L5181-RIBEIRAO PIRES",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 74.5,
      "nps_textual": 72.6,
      "nps_hibrido": 75.0,
      "delta_hibrido": 0.5,
      "pct_pos": 81.4,
      "pct_neu": 9.7,
      "pct_neg": 8.9,
      "severidade": 23.89,
      "transacoes": 101308,
      "indice_prioridade": 41.5,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 609,
      "avaliacoes_ponderadas": 2774.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 52
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 31
        },
        {
          "cat": "Loja Física",
          "pct": 11
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 9
        },
        {
          "cat": "Atendimento",
          "pct": 18
        },
        {
          "cat": "Entrega & Logística",
          "pct": 22
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 77.6,
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
          "pos": 82.4,
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
          "pos": 85.7,
          "neg": 4.1
        },
        {
          "m": "2025-10",
          "pos": 75.9,
          "neg": 10.3
        },
        {
          "m": "2025-11",
          "pos": 67.9,
          "neg": 21.4
        },
        {
          "m": "2025-12",
          "pos": 82.4,
          "neg": 13.7
        },
        {
          "m": "2026-01",
          "pos": 80.0,
          "neg": 12.5
        },
        {
          "m": "2026-02",
          "pos": 86.0,
          "neg": 7.0
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
          "neg": 20.0
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 19.6,
          "n": 92
        },
        "Atendimento": {
          "nps": 95.7,
          "n": 93
        },
        "Entrega & Logística": {
          "nps": 95.5,
          "n": 111
        },
        "Loja Física": {
          "nps": 76.6,
          "n": 77
        },
        "Outros": {
          "nps": 92.3,
          "n": 52
        },
        "Promoções & Fidelidade": {
          "nps": 66.3,
          "n": 184
        }
      },
      "prob_counts": {
        "Abastecimento": 46,
        "Promoções & Fidelidade": 45,
        "Loja Física": 12,
        "Entrega & Logística": 4,
        "Atendimento": 3,
        "Outros": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 139,
        "Entrega & Logística": 107,
        "Atendimento": 90,
        "Loja Física": 65,
        "Outros": 49,
        "Abastecimento": 46
      }
    },
    {
      "nome": "L5130-TUPI",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Litoral",
      "nps_trad": 76.2,
      "nps_textual": 75.1,
      "nps_hibrido": 76.1,
      "delta_hibrido": -0.1,
      "pct_pos": 83.4,
      "pct_neu": 8.4,
      "pct_neg": 8.2,
      "severidade": 23.18,
      "transacoes": 132440,
      "indice_prioridade": 41.1,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 824,
      "avaliacoes_ponderadas": 3013.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 43
        },
        {
          "cat": "Loja Física",
          "pct": 18
        },
        {
          "cat": "Abastecimento",
          "pct": 32
        }
      ],
      "top_elogios": [
        {
          "cat": "Entrega & Logística",
          "pct": 26
        },
        {
          "cat": "Atendimento",
          "pct": 21
        },
        {
          "cat": "Outros",
          "pct": 10
        }
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
          "neg": 4.8
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
          "pos": 89.2,
          "neg": 5.4
        },
        {
          "m": "2025-09",
          "pos": 80.0,
          "neg": 4.4
        },
        {
          "m": "2025-10",
          "pos": 65.6,
          "neg": 15.6
        },
        {
          "m": "2025-11",
          "pos": 84.8,
          "neg": 9.1
        },
        {
          "m": "2025-12",
          "pos": 79.2,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 28.0,
          "n": 82
        },
        "Atendimento": {
          "nps": 95.2,
          "n": 146
        },
        "Entrega & Logística": {
          "nps": 97.3,
          "n": 182
        },
        "Loja Física": {
          "nps": 70.1,
          "n": 107
        },
        "Outros": {
          "nps": 85.0,
          "n": 80
        },
        "Promoções & Fidelidade": {
          "nps": 60.4,
          "n": 227
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 61,
        "Abastecimento": 37,
        "Loja Física": 20,
        "Outros": 10,
        "Atendimento": 5,
        "Entrega & Logística": 4
      },
      "elog_counts": {
        "Entrega & Logística": 178,
        "Promoções & Fidelidade": 166,
        "Atendimento": 141,
        "Loja Física": 87,
        "Outros": 70,
        "Abastecimento": 45
      }
    },
    {
      "nome": "L5145-TAMBORE",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 74.7,
      "nps_textual": 65.3,
      "nps_hibrido": 72.9,
      "delta_hibrido": -1.8,
      "pct_pos": 76.4,
      "pct_neu": 12.4,
      "pct_neg": 11.1,
      "severidade": 25.62,
      "transacoes": 61078,
      "indice_prioridade": 40.9,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 225,
      "avaliacoes_ponderadas": 706.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 56
        },
        {
          "cat": "Loja Física",
          "pct": 12
        },
        {
          "cat": "Abastecimento",
          "pct": 20
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 33
        },
        {
          "cat": "Loja Física",
          "pct": 13
        },
        {
          "cat": "Entrega & Logística",
          "pct": 20
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 68.8,
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
          "pos": 75.0,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 40.9,
          "n": 22
        },
        "Atendimento": {
          "nps": 96.5,
          "n": 57
        },
        "Entrega & Logística": {
          "nps": 84.2,
          "n": 38
        },
        "Loja Física": {
          "nps": 58.8,
          "n": 34
        },
        "Outros": {
          "nps": 94.1,
          "n": 17
        },
        "Promoções & Fidelidade": {
          "nps": 26.3,
          "n": 57
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 28,
        "Loja Física": 11,
        "Abastecimento": 8,
        "Entrega & Logística": 4,
        "Atendimento": 1,
        "Outros": 1
      },
      "elog_counts": {
        "Atendimento": 56,
        "Entrega & Logística": 34,
        "Promoções & Fidelidade": 29,
        "Loja Física": 23,
        "Outros": 16,
        "Abastecimento": 14
      }
    },
    {
      "nome": "L5175-PARQUE SAO LUCAS",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 75.0,
      "nps_textual": 70.6,
      "nps_hibrido": 72.6,
      "delta_hibrido": -2.5,
      "pct_pos": 79.0,
      "pct_neu": 12.6,
      "pct_neg": 8.4,
      "severidade": 24.41,
      "transacoes": 160269,
      "indice_prioridade": 40.3,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 609,
      "avaliacoes_ponderadas": 2824.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 41
        },
        {
          "cat": "Abastecimento",
          "pct": 37
        },
        {
          "cat": "Loja Física",
          "pct": 14
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 10
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 34
        },
        {
          "cat": "Loja Física",
          "pct": 14
        }
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
          "pos": 68.2,
          "neg": 9.1
        },
        {
          "m": "2025-04",
          "pos": 86.7,
          "neg": 6.7
        },
        {
          "m": "2025-05",
          "pos": 79.5,
          "neg": 2.6
        },
        {
          "m": "2025-06",
          "pos": 75.5,
          "neg": 7.5
        },
        {
          "m": "2025-07",
          "pos": 89.2,
          "neg": 8.1
        },
        {
          "m": "2025-08",
          "pos": 84.2,
          "neg": 10.5
        },
        {
          "m": "2025-09",
          "pos": 87.2,
          "neg": 2.1
        },
        {
          "m": "2025-10",
          "pos": 74.4,
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
          "neg": 16.7
        },
        {
          "m": "2026-02",
          "pos": 76.0,
          "neg": 8.0
        },
        {
          "m": "2026-03",
          "pos": 77.1,
          "neg": 5.7
        },
        {
          "m": "2026-04",
          "pos": 85.3,
          "neg": 8.8
        },
        {
          "m": "2026-05",
          "pos": 70.0,
          "neg": 20.0
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 36.9,
          "n": 84
        },
        "Atendimento": {
          "nps": 91.0,
          "n": 67
        },
        "Entrega & Logística": {
          "nps": 93.9,
          "n": 98
        },
        "Loja Física": {
          "nps": 71.6,
          "n": 81
        },
        "Outros": {
          "nps": 88.2,
          "n": 51
        },
        "Promoções & Fidelidade": {
          "nps": 62.7,
          "n": 228
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 64,
        "Abastecimento": 34,
        "Loja Física": 16,
        "Outros": 6,
        "Entrega & Logística": 4,
        "Atendimento": 4
      },
      "elog_counts": {
        "Promoções & Fidelidade": 164,
        "Entrega & Logística": 94,
        "Loja Física": 65,
        "Atendimento": 63,
        "Abastecimento": 50,
        "Outros": 45
      }
    },
    {
      "nome": "L5146-ITATIBA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 77.7,
      "nps_textual": 69.1,
      "nps_hibrido": 72.5,
      "delta_hibrido": -5.2,
      "pct_pos": 77.9,
      "pct_neu": 13.3,
      "pct_neg": 8.8,
      "severidade": 24.88,
      "transacoes": 84236,
      "indice_prioridade": 40.2,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 502,
      "avaliacoes_ponderadas": 2572.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 7
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 39
        },
        {
          "cat": "Abastecimento",
          "pct": 36
        }
      ],
      "top_elogios": [
        {
          "cat": "Entrega & Logística",
          "pct": 25
        },
        {
          "cat": "Abastecimento",
          "pct": 10
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 30
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 53.6,
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
          "neg": 8.3
        },
        {
          "m": "2025-04",
          "pos": 70.0,
          "neg": 20.0
        },
        {
          "m": "2025-05",
          "pos": 76.9,
          "neg": 7.7
        },
        {
          "m": "2025-06",
          "pos": 85.1,
          "neg": 6.4
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
          "pos": 79.4,
          "neg": 2.9
        },
        {
          "m": "2026-04",
          "pos": 80.0,
          "neg": 13.3
        },
        {
          "m": "2026-05",
          "pos": 81.0,
          "neg": 4.8
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 34.3,
          "n": 67
        },
        "Atendimento": {
          "nps": 83.6,
          "n": 55
        },
        "Entrega & Logística": {
          "nps": 95.1,
          "n": 102
        },
        "Loja Física": {
          "nps": 68.8,
          "n": 64
        },
        "Outros": {
          "nps": 92.5,
          "n": 40
        },
        "Promoções & Fidelidade": {
          "nps": 57.5,
          "n": 174
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 57,
        "Abastecimento": 28,
        "Loja Física": 12,
        "Atendimento": 6,
        "Entrega & Logística": 5,
        "Outros": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 117,
        "Entrega & Logística": 97,
        "Loja Física": 52,
        "Atendimento": 49,
        "Abastecimento": 39,
        "Outros": 37
      }
    },
    {
      "nome": "L5106-GUILHERMINA (1516)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Litoral",
      "nps_trad": 79.0,
      "nps_textual": 73.7,
      "nps_hibrido": 76.5,
      "delta_hibrido": -2.6,
      "pct_pos": 82.1,
      "pct_neu": 9.5,
      "pct_neg": 8.4,
      "severidade": 23.69,
      "transacoes": 129860,
      "indice_prioridade": 40.2,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 820,
      "avaliacoes_ponderadas": 2839.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 12
        },
        {
          "cat": "Loja Física",
          "pct": 20
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 39
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 24
        },
        {
          "cat": "Outros",
          "pct": 12
        },
        {
          "cat": "Entrega & Logística",
          "pct": 21
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 71.4,
          "neg": 11.4
        },
        {
          "m": "2025-02",
          "pos": 76.4,
          "neg": 12.7
        },
        {
          "m": "2025-03",
          "pos": 86.4,
          "neg": 10.2
        },
        {
          "m": "2025-04",
          "pos": 76.1,
          "neg": 8.7
        },
        {
          "m": "2025-05",
          "pos": 92.8,
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
          "pos": 85.2,
          "neg": 4.9
        },
        {
          "m": "2026-01",
          "pos": 68.9,
          "neg": 14.8
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 29.8,
          "n": 94
        },
        "Atendimento": {
          "nps": 89.5,
          "n": 172
        },
        "Entrega & Logística": {
          "nps": 97.9,
          "n": 140
        },
        "Loja Física": {
          "nps": 58.9,
          "n": 95
        },
        "Outros": {
          "nps": 96.3,
          "n": 81
        },
        "Promoções & Fidelidade": {
          "nps": 63.4,
          "n": 238
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 60,
        "Abastecimento": 47,
        "Loja Física": 25,
        "Atendimento": 10,
        "Outros": 3,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 178,
        "Atendimento": 162,
        "Entrega & Logística": 138,
        "Outros": 78,
        "Loja Física": 70,
        "Abastecimento": 47
      }
    },
    {
      "nome": "L5135-402 ASA SUL",
      "flag": "regular",
      "uf": "DF",
      "regiao": "DF",
      "nps_trad": 76.9,
      "nps_textual": 69.1,
      "nps_hibrido": 73.7,
      "delta_hibrido": -3.2,
      "pct_pos": 78.9,
      "pct_neu": 11.3,
      "pct_neg": 9.8,
      "severidade": 24.28,
      "transacoes": 54598,
      "indice_prioridade": 39.8,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 346,
      "avaliacoes_ponderadas": 1243.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 35
        },
        {
          "cat": "Abastecimento",
          "pct": 32
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 21
        }
      ],
      "top_elogios": [
        {
          "cat": "Outros",
          "pct": 15
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 30
        },
        {
          "cat": "Entrega & Logística",
          "pct": 20
        }
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
          "neg": 10.5
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
          "pos": 60.9,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 22.2,
          "n": 36
        },
        "Atendimento": {
          "nps": 93.6,
          "n": 47
        },
        "Entrega & Logística": {
          "nps": 88.3,
          "n": 60
        },
        "Loja Física": {
          "nps": 42.6,
          "n": 47
        },
        "Outros": {
          "nps": 90.9,
          "n": 44
        },
        "Promoções & Fidelidade": {
          "nps": 66.1,
          "n": 112
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 31,
        "Abastecimento": 17,
        "Loja Física": 15,
        "Entrega & Logística": 5,
        "Outros": 3,
        "Atendimento": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 81,
        "Entrega & Logística": 55,
        "Atendimento": 45,
        "Outros": 41,
        "Loja Física": 32,
        "Abastecimento": 19
      }
    },
    {
      "nome": "L5084-GUAIPA (1349)",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 71.3,
      "nps_textual": 69.3,
      "nps_hibrido": 71.9,
      "delta_hibrido": 0.7,
      "pct_pos": 77.8,
      "pct_neu": 13.8,
      "pct_neg": 8.4,
      "severidade": 24.19,
      "transacoes": 103856,
      "indice_prioridade": 39.3,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 463,
      "avaliacoes_ponderadas": 1386.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 46
        },
        {
          "cat": "Loja Física",
          "pct": 18
        },
        {
          "cat": "Abastecimento",
          "pct": 26
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 33
        },
        {
          "cat": "Outros",
          "pct": 12
        },
        {
          "cat": "Entrega & Logística",
          "pct": 19
        }
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
          "pos": 62.5,
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
          "pos": 89.8,
          "neg": 6.1
        },
        {
          "m": "2026-01",
          "pos": 92.3,
          "neg": 1.9
        },
        {
          "m": "2026-02",
          "pos": 87.5,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 19.4,
          "n": 36
        },
        "Atendimento": {
          "nps": 95.2,
          "n": 125
        },
        "Entrega & Logística": {
          "nps": 93.2,
          "n": 73
        },
        "Loja Física": {
          "nps": 60.0,
          "n": 50
        },
        "Outros": {
          "nps": 84.0,
          "n": 50
        },
        "Promoções & Fidelidade": {
          "nps": 42.6,
          "n": 129
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 56,
        "Abastecimento": 19,
        "Loja Física": 13,
        "Outros": 6,
        "Atendimento": 6,
        "Entrega & Logística": 3
      },
      "elog_counts": {
        "Atendimento": 119,
        "Promoções & Fidelidade": 73,
        "Entrega & Logística": 70,
        "Outros": 44,
        "Loja Física": 37,
        "Abastecimento": 17
      }
    },
    {
      "nome": "L5034-D. PEDRO LL (0873)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 66.4,
      "nps_textual": 60.6,
      "nps_hibrido": 65.6,
      "delta_hibrido": -0.7,
      "pct_pos": 72.7,
      "pct_neu": 15.2,
      "pct_neg": 12.1,
      "severidade": 28.28,
      "transacoes": 0,
      "indice_prioridade": 39.1,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 553,
      "avaliacoes_ponderadas": 2657.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 45
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 37
        },
        {
          "cat": "Atendimento",
          "pct": 4
        }
      ],
      "top_elogios": [
        {
          "cat": "Outros",
          "pct": 15
        },
        {
          "cat": "Atendimento",
          "pct": 20
        },
        {
          "cat": "Loja Física",
          "pct": 13
        }
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
          "neg": 15.0
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
          "pos": 82.7,
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
          "neg": 6.9
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 1.3,
          "n": 78
        },
        "Atendimento": {
          "nps": 88.4,
          "n": 86
        },
        "Entrega & Logística": {
          "nps": 96.4,
          "n": 84
        },
        "Loja Física": {
          "nps": 62.5,
          "n": 72
        },
        "Outros": {
          "nps": 82.9,
          "n": 70
        },
        "Promoções & Fidelidade": {
          "nps": 45.4,
          "n": 163
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 64,
        "Abastecimento": 47,
        "Loja Física": 20,
        "Outros": 10,
        "Atendimento": 7,
        "Entrega & Logística": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 99,
        "Entrega & Logística": 81,
        "Atendimento": 79,
        "Outros": 60,
        "Loja Física": 52,
        "Abastecimento": 31
      }
    },
    {
      "nome": "L5168-SALTO",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 74.8,
      "nps_textual": 69.9,
      "nps_hibrido": 71.4,
      "delta_hibrido": -3.4,
      "pct_pos": 77.9,
      "pct_neu": 14.1,
      "pct_neg": 8.0,
      "severidade": 24.73,
      "transacoes": 86252,
      "indice_prioridade": 39.0,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 412,
      "avaliacoes_ponderadas": 2312.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 12
        },
        {
          "cat": "Abastecimento",
          "pct": 55
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 24
        }
      ],
      "top_elogios": [
        {
          "cat": "Entrega & Logística",
          "pct": 26
        },
        {
          "cat": "Outros",
          "pct": 12
        },
        {
          "cat": "Abastecimento",
          "pct": 10
        }
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
          "pos": 87.5,
          "neg": 12.5
        },
        {
          "m": "2025-05",
          "pos": 82.8,
          "neg": 3.4
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
          "pos": 75.8,
          "neg": 3.0
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
          "neg": 0.0
        },
        {
          "m": "2026-04",
          "pos": 80.0,
          "neg": 8.0
        },
        {
          "m": "2026-05",
          "pos": 78.9,
          "neg": 10.5
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 19.4,
          "n": 67
        },
        "Atendimento": {
          "nps": 63.2,
          "n": 38
        },
        "Entrega & Logística": {
          "nps": 98.8,
          "n": 83
        },
        "Loja Física": {
          "nps": 79.2,
          "n": 53
        },
        "Outros": {
          "nps": 94.9,
          "n": 39
        },
        "Promoções & Fidelidade": {
          "nps": 68.2,
          "n": 132
        }
      },
      "prob_counts": {
        "Abastecimento": 36,
        "Promoções & Fidelidade": 34,
        "Atendimento": 10,
        "Loja Física": 9,
        "Outros": 1,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 98,
        "Entrega & Logística": 82,
        "Loja Física": 44,
        "Outros": 38,
        "Abastecimento": 31,
        "Atendimento": 28
      }
    },
    {
      "nome": "L5229-GLAUCIO GIL",
      "flag": "regular",
      "uf": "RJ",
      "regiao": "RJ",
      "nps_trad": 75.1,
      "nps_textual": 70.3,
      "nps_hibrido": 71.8,
      "delta_hibrido": -3.3,
      "pct_pos": 78.4,
      "pct_neu": 13.6,
      "pct_neg": 8.1,
      "severidade": 24.64,
      "transacoes": 107821,
      "indice_prioridade": 38.8,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 582,
      "avaliacoes_ponderadas": 2492.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 40
        },
        {
          "cat": "Atendimento",
          "pct": 6
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 30
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 25
        },
        {
          "cat": "Outros",
          "pct": 14
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 26
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 76.5,
          "neg": 13.7
        },
        {
          "m": "2025-02",
          "pos": 73.3,
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
          "pos": 81.8,
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
          "pos": 73.7,
          "neg": 10.5
        },
        {
          "m": "2025-10",
          "pos": 78.1,
          "neg": 12.5
        },
        {
          "m": "2025-11",
          "pos": 72.2,
          "neg": 0.0
        },
        {
          "m": "2025-12",
          "pos": 68.0,
          "neg": 8.0
        },
        {
          "m": "2026-01",
          "pos": 75.0,
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
          "neg": 27.3
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 17.1,
          "n": 70
        },
        "Atendimento": {
          "nps": 88.7,
          "n": 124
        },
        "Entrega & Logística": {
          "nps": 90.7,
          "n": 86
        },
        "Loja Física": {
          "nps": 62.3,
          "n": 69
        },
        "Outros": {
          "nps": 90.9,
          "n": 66
        },
        "Promoções & Fidelidade": {
          "nps": 63.5,
          "n": 167
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 47,
        "Abastecimento": 39,
        "Loja Física": 19,
        "Atendimento": 11,
        "Entrega & Logística": 6,
        "Outros": 4
      },
      "elog_counts": {
        "Promoções & Fidelidade": 120,
        "Atendimento": 113,
        "Entrega & Logística": 80,
        "Outros": 62,
        "Loja Física": 50,
        "Abastecimento": 31
      }
    },
    {
      "nome": "L5163-TAQUARI",
      "flag": "regular",
      "uf": "DF",
      "regiao": "DF",
      "nps_trad": 76.5,
      "nps_textual": 68.4,
      "nps_hibrido": 71.0,
      "delta_hibrido": -5.5,
      "pct_pos": 77.1,
      "pct_neu": 14.2,
      "pct_neg": 8.7,
      "severidade": 24.78,
      "transacoes": 72248,
      "indice_prioridade": 38.4,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 345,
      "avaliacoes_ponderadas": 1568.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 37
        },
        {
          "cat": "Abastecimento",
          "pct": 37
        },
        {
          "cat": "Loja Física",
          "pct": 17
        }
      ],
      "top_elogios": [
        {
          "cat": "Outros",
          "pct": 14
        },
        {
          "cat": "Abastecimento",
          "pct": 11
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 36
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 86.7,
          "neg": 6.7
        },
        {
          "m": "2025-02",
          "pos": 74.1,
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
          "pos": 89.5,
          "neg": 10.5
        },
        {
          "m": "2025-11",
          "pos": 66.7,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 35.3,
          "n": 51
        },
        "Atendimento": {
          "nps": 84.8,
          "n": 33
        },
        "Entrega & Logística": {
          "nps": 95.9,
          "n": 49
        },
        "Loja Física": {
          "nps": 57.9,
          "n": 38
        },
        "Outros": {
          "nps": 100.0,
          "n": 36
        },
        "Promoções & Fidelidade": {
          "nps": 61.6,
          "n": 138
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 42,
        "Abastecimento": 22,
        "Loja Física": 11,
        "Atendimento": 3,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 96,
        "Entrega & Logística": 48,
        "Outros": 36,
        "Atendimento": 30,
        "Abastecimento": 29,
        "Loja Física": 27
      }
    },
    {
      "nome": "L5216-UBATUBA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Litoral",
      "nps_trad": 73.8,
      "nps_textual": 68.9,
      "nps_hibrido": 72.3,
      "delta_hibrido": -1.5,
      "pct_pos": 77.9,
      "pct_neu": 13.0,
      "pct_neg": 9.1,
      "severidade": 24.74,
      "transacoes": 92775,
      "indice_prioridade": 38.4,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 408,
      "avaliacoes_ponderadas": 1757.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 43
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 41
        },
        {
          "cat": "Loja Física",
          "pct": 8
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 36
        },
        {
          "cat": "Loja Física",
          "pct": 15
        },
        {
          "cat": "Outros",
          "pct": 12
        }
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
          "pos": 86.7,
          "neg": 6.7
        },
        {
          "m": "2025-07",
          "pos": 82.6,
          "neg": 13.0
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
          "pos": 80.0,
          "neg": 6.7
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 21.7,
          "n": 60
        },
        "Atendimento": {
          "nps": 83.3,
          "n": 30
        },
        "Entrega & Logística": {
          "nps": 93.8,
          "n": 65
        },
        "Loja Física": {
          "nps": 80.7,
          "n": 57
        },
        "Outros": {
          "nps": 94.9,
          "n": 39
        },
        "Promoções & Fidelidade": {
          "nps": 63.1,
          "n": 157
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 43,
        "Abastecimento": 31,
        "Loja Física": 8,
        "Atendimento": 3,
        "Entrega & Logística": 3,
        "Outros": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 114,
        "Entrega & Logística": 62,
        "Loja Física": 49,
        "Outros": 37,
        "Abastecimento": 29,
        "Atendimento": 27
      }
    },
    {
      "nome": "L5172-PRESIDENTE PRUDENTE",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 80.6,
      "nps_textual": 72.4,
      "nps_hibrido": 76.2,
      "delta_hibrido": -4.4,
      "pct_pos": 81.1,
      "pct_neu": 10.2,
      "pct_neg": 8.7,
      "severidade": 23.68,
      "transacoes": 76973,
      "indice_prioridade": 38.2,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 588,
      "avaliacoes_ponderadas": 3241.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 12
        },
        {
          "cat": "Abastecimento",
          "pct": 43
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 33
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 38
        },
        {
          "cat": "Entrega & Logística",
          "pct": 25
        },
        {
          "cat": "Abastecimento",
          "pct": 9
        }
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
          "pos": 80.4,
          "neg": 9.8
        },
        {
          "m": "2025-08",
          "pos": 83.3,
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
          "neg": 13.3
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 25.6,
          "n": 78
        },
        "Atendimento": {
          "nps": 71.4,
          "n": 49
        },
        "Entrega & Logística": {
          "nps": 95.9,
          "n": 123
        },
        "Loja Física": {
          "nps": 75.0,
          "n": 68
        },
        "Outros": {
          "nps": 90.2,
          "n": 41
        },
        "Promoções & Fidelidade": {
          "nps": 72.1,
          "n": 229
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 47,
        "Abastecimento": 36,
        "Loja Física": 11,
        "Atendimento": 8,
        "Entrega & Logística": 5,
        "Outros": 4
      },
      "elog_counts": {
        "Promoções & Fidelidade": 182,
        "Entrega & Logística": 118,
        "Loja Física": 57,
        "Abastecimento": 42,
        "Atendimento": 41,
        "Outros": 37
      }
    },
    {
      "nome": "L5150-ARARAQUARA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 73.7,
      "nps_textual": 70.6,
      "nps_hibrido": 71.8,
      "delta_hibrido": -1.9,
      "pct_pos": 78.3,
      "pct_neu": 14.0,
      "pct_neg": 7.7,
      "severidade": 24.38,
      "transacoes": 89553,
      "indice_prioridade": 38.2,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 585,
      "avaliacoes_ponderadas": 3132.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 9
        },
        {
          "cat": "Abastecimento",
          "pct": 47
        },
        {
          "cat": "Loja Física",
          "pct": 22
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 39
        },
        {
          "cat": "Abastecimento",
          "pct": 11
        },
        {
          "cat": "Loja Física",
          "pct": 13
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 80.0,
          "neg": 5.0
        },
        {
          "m": "2025-02",
          "pos": 75.0,
          "neg": 6.2
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
          "pos": 84.8,
          "neg": 8.7
        },
        {
          "m": "2025-07",
          "pos": 80.0,
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
          "pos": 75.6,
          "neg": 4.9
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 31.9,
          "n": 94
        },
        "Atendimento": {
          "nps": 74.5,
          "n": 51
        },
        "Entrega & Logística": {
          "nps": 96.3,
          "n": 82
        },
        "Loja Física": {
          "nps": 62.2,
          "n": 82
        },
        "Outros": {
          "nps": 91.8,
          "n": 49
        },
        "Promoções & Fidelidade": {
          "nps": 74.9,
          "n": 227
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 48,
        "Abastecimento": 43,
        "Loja Física": 21,
        "Atendimento": 9,
        "Outros": 4,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 179,
        "Entrega & Logística": 80,
        "Loja Física": 61,
        "Abastecimento": 51,
        "Outros": 45,
        "Atendimento": 42
      }
    },
    {
      "nome": "L5117-NOVA GRANADA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 79.2,
      "nps_textual": 77.4,
      "nps_hibrido": 77.7,
      "delta_hibrido": -1.5,
      "pct_pos": 84.7,
      "pct_neu": 8.0,
      "pct_neg": 7.3,
      "severidade": 22.27,
      "transacoes": 161617,
      "indice_prioridade": 37.5,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 1094,
      "avaliacoes_ponderadas": 3306.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 9
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 42
        },
        {
          "cat": "Abastecimento",
          "pct": 40
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 29
        },
        {
          "cat": "Outros",
          "pct": 13
        },
        {
          "cat": "Entrega & Logística",
          "pct": 25
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 77.6,
          "neg": 14.3
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
          "pos": 80.4,
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
          "neg": 8.1
        },
        {
          "m": "2025-07",
          "pos": 86.1,
          "neg": 8.3
        },
        {
          "m": "2025-08",
          "pos": 83.3,
          "neg": 9.5
        },
        {
          "m": "2025-09",
          "pos": 61.0,
          "neg": 9.8
        },
        {
          "m": "2025-10",
          "pos": 80.9,
          "neg": 11.2
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
          "pos": 75.9,
          "neg": 11.1
        },
        {
          "m": "2026-03",
          "pos": 90.7,
          "neg": 5.8
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 36.8,
          "n": 125
        },
        "Atendimento": {
          "nps": 92.5,
          "n": 279
        },
        "Entrega & Logística": {
          "nps": 99.1,
          "n": 235
        },
        "Loja Física": {
          "nps": 74.7,
          "n": 95
        },
        "Outros": {
          "nps": 97.6,
          "n": 125
        },
        "Promoções & Fidelidade": {
          "nps": 49.8,
          "n": 235
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 84,
        "Abastecimento": 47,
        "Loja Física": 18,
        "Atendimento": 14,
        "Outros": 3,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Atendimento": 265,
        "Entrega & Logística": 234,
        "Promoções & Fidelidade": 151,
        "Outros": 122,
        "Abastecimento": 78,
        "Loja Física": 77
      }
    },
    {
      "nome": "L5259-ALL WAYS MALL",
      "flag": "regular",
      "uf": "RJ",
      "regiao": "RJ",
      "nps_trad": 77.3,
      "nps_textual": 72.4,
      "nps_hibrido": 76.1,
      "delta_hibrido": -1.2,
      "pct_pos": 80.2,
      "pct_neu": 12.0,
      "pct_neg": 7.8,
      "severidade": 23.7,
      "transacoes": 78219,
      "indice_prioridade": 37.3,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 677,
      "avaliacoes_ponderadas": 2059.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 23
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 36
        },
        {
          "cat": "Abastecimento",
          "pct": 32
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 24
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 29
        },
        {
          "cat": "Outros",
          "pct": 10
        }
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
          "pos": 72.4,
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
          "neg": 14.0
        },
        {
          "m": "2026-03",
          "pos": 75.6,
          "neg": 7.3
        },
        {
          "m": "2026-04",
          "pos": 74.3,
          "neg": 8.6
        },
        {
          "m": "2026-05",
          "pos": 70.4,
          "neg": 11.1
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 26.0,
          "n": 77
        },
        "Atendimento": {
          "nps": 90.6,
          "n": 139
        },
        "Entrega & Logística": {
          "nps": 96.3,
          "n": 109
        },
        "Loja Física": {
          "nps": 54.7,
          "n": 86
        },
        "Outros": {
          "nps": 89.8,
          "n": 59
        },
        "Promoções & Fidelidade": {
          "nps": 67.1,
          "n": 207
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 49,
        "Abastecimento": 40,
        "Loja Física": 27,
        "Atendimento": 11,
        "Outros": 5,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 158,
        "Atendimento": 128,
        "Entrega & Logística": 107,
        "Loja Física": 59,
        "Outros": 54,
        "Abastecimento": 37
      }
    },
    {
      "nome": "L5235-LOUVEIRA",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 74.8,
      "nps_textual": 70.2,
      "nps_hibrido": 74.4,
      "delta_hibrido": -0.4,
      "pct_pos": 81.0,
      "pct_neu": 8.3,
      "pct_neg": 10.7,
      "severidade": 23.62,
      "transacoes": 64761,
      "indice_prioridade": 37.1,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 242,
      "avaliacoes_ponderadas": 1147.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 50
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 31
        },
        {
          "cat": "Loja Física",
          "pct": 12
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 26
        },
        {
          "cat": "Outros",
          "pct": 11
        },
        {
          "cat": "Abastecimento",
          "pct": 8
        }
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
          "neg": 0.0
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 8.8,
          "n": 34
        },
        "Atendimento": {
          "nps": 96.2,
          "n": 52
        },
        "Entrega & Logística": {
          "nps": 100.0,
          "n": 37
        },
        "Loja Física": {
          "nps": 72.4,
          "n": 29
        },
        "Outros": {
          "nps": 91.3,
          "n": 23
        },
        "Promoções & Fidelidade": {
          "nps": 56.7,
          "n": 67
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 21,
        "Abastecimento": 18,
        "Loja Física": 5,
        "Outros": 1,
        "Atendimento": 1
      },
      "elog_counts": {
        "Atendimento": 51,
        "Promoções & Fidelidade": 46,
        "Entrega & Logística": 37,
        "Loja Física": 24,
        "Outros": 22,
        "Abastecimento": 16
      }
    },
    {
      "nome": "L5160-GUARATINGUETA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 79.5,
      "nps_textual": 72.4,
      "nps_hibrido": 76.9,
      "delta_hibrido": -2.6,
      "pct_pos": 79.3,
      "pct_neu": 13.7,
      "pct_neg": 7.0,
      "severidade": 23.39,
      "transacoes": 97332,
      "indice_prioridade": 35.8,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 503,
      "avaliacoes_ponderadas": 2574.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 51
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 29
        },
        {
          "cat": "Loja Física",
          "pct": 14
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 35
        },
        {
          "cat": "Loja Física",
          "pct": 16
        },
        {
          "cat": "Entrega & Logística",
          "pct": 22
        }
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
          "pos": 78.0,
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
          "pos": 90.6,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 26.2,
          "n": 65
        },
        "Atendimento": {
          "nps": 84.9,
          "n": 53
        },
        "Entrega & Logística": {
          "nps": 98.9,
          "n": 88
        },
        "Loja Física": {
          "nps": 76.3,
          "n": 76
        },
        "Outros": {
          "nps": 81.2,
          "n": 32
        },
        "Promoções & Fidelidade": {
          "nps": 69.3,
          "n": 189
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 48,
        "Abastecimento": 30,
        "Loja Física": 13,
        "Atendimento": 7,
        "Outros": 5,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 141,
        "Entrega & Logística": 87,
        "Loja Física": 63,
        "Atendimento": 46,
        "Abastecimento": 35,
        "Outros": 27
      }
    },
    {
      "nome": "L5132-CANTO DO FORTE",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Litoral",
      "nps_trad": 79.6,
      "nps_textual": 74.1,
      "nps_hibrido": 76.4,
      "delta_hibrido": -3.2,
      "pct_pos": 81.8,
      "pct_neu": 10.5,
      "pct_neg": 7.7,
      "severidade": 23.46,
      "transacoes": 129118,
      "indice_prioridade": 34.5,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 726,
      "avaliacoes_ponderadas": 2799.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 18
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 39
        },
        {
          "cat": "Abastecimento",
          "pct": 29
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 24
        },
        {
          "cat": "Entrega & Logística",
          "pct": 24
        },
        {
          "cat": "Outros",
          "pct": 9
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 84.4,
          "neg": 8.9
        },
        {
          "m": "2025-02",
          "pos": 79.4,
          "neg": 2.9
        },
        {
          "m": "2025-03",
          "pos": 85.4,
          "neg": 9.8
        },
        {
          "m": "2025-04",
          "pos": 86.8,
          "neg": 5.3
        },
        {
          "m": "2025-05",
          "pos": 75.0,
          "neg": 10.0
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
          "pos": 92.2,
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
          "pos": 68.3,
          "neg": 24.4
        },
        {
          "m": "2026-05",
          "pos": 72.7,
          "neg": 21.2
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 33.8,
          "n": 77
        },
        "Atendimento": {
          "nps": 84.8,
          "n": 158
        },
        "Entrega & Logística": {
          "nps": 98.6,
          "n": 146
        },
        "Loja Física": {
          "nps": 69.6,
          "n": 79
        },
        "Outros": {
          "nps": 90.0,
          "n": 60
        },
        "Promoções & Fidelidade": {
          "nps": 60.7,
          "n": 206
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 59,
        "Abastecimento": 35,
        "Loja Física": 17,
        "Atendimento": 14,
        "Outros": 5,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 147,
        "Entrega & Logística": 144,
        "Atendimento": 144,
        "Loja Física": 62,
        "Outros": 55,
        "Abastecimento": 42
      }
    },
    {
      "nome": "L5239-CACAPAVA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 73.2,
      "nps_textual": 72.9,
      "nps_hibrido": 73.2,
      "delta_hibrido": 0.0,
      "pct_pos": 80.2,
      "pct_neu": 12.4,
      "pct_neg": 7.4,
      "severidade": 23.1,
      "transacoes": 80544,
      "indice_prioridade": 34.1,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 339,
      "avaliacoes_ponderadas": 1883.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 40
        },
        {
          "cat": "Loja Física",
          "pct": 16
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 24
        }
      ],
      "top_elogios": [
        {
          "cat": "Loja Física",
          "pct": 17
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 35
        },
        {
          "cat": "Abastecimento",
          "pct": 10
        }
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
          "pos": 50.0,
          "neg": 33.3
        },
        {
          "m": "2025-05",
          "pos": 88.9,
          "neg": 0.0
        },
        {
          "m": "2025-06",
          "pos": 52.6,
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
          "pos": 73.1,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 39.1,
          "n": 46
        },
        "Atendimento": {
          "nps": 90.0,
          "n": 40
        },
        "Entrega & Logística": {
          "nps": 90.6,
          "n": 53
        },
        "Loja Física": {
          "nps": 70.7,
          "n": 58
        },
        "Outros": {
          "nps": 72.7,
          "n": 22
        },
        "Promoções & Fidelidade": {
          "nps": 73.3,
          "n": 120
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 26,
        "Abastecimento": 18,
        "Loja Física": 13,
        "Outros": 5,
        "Entrega & Logística": 3,
        "Atendimento": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 94,
        "Entrega & Logística": 50,
        "Loja Física": 45,
        "Atendimento": 38,
        "Abastecimento": 28,
        "Outros": 17
      }
    },
    {
      "nome": "L5118-ARACATUBA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 76.6,
      "nps_textual": 71.4,
      "nps_hibrido": 75.1,
      "delta_hibrido": -1.5,
      "pct_pos": 80.6,
      "pct_neu": 10.3,
      "pct_neg": 9.2,
      "severidade": 23.05,
      "transacoes": 54939,
      "indice_prioridade": 33.9,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 273,
      "avaliacoes_ponderadas": 1359.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 44
        },
        {
          "cat": "Abastecimento",
          "pct": 44
        },
        {
          "cat": "Loja Física",
          "pct": 12
        }
      ],
      "top_elogios": [
        {
          "cat": "Entrega & Logística",
          "pct": 30
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 28
        },
        {
          "cat": "Outros",
          "pct": 10
        }
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
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2025-06",
          "pos": 90.0,
          "neg": 10.0
        },
        {
          "m": "2025-07",
          "pos": 72.7,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 22.6,
          "n": 31
        },
        "Atendimento": {
          "nps": 94.1,
          "n": 34
        },
        "Entrega & Logística": {
          "nps": 100.0,
          "n": 65
        },
        "Loja Física": {
          "nps": 64.5,
          "n": 31
        },
        "Outros": {
          "nps": 91.3,
          "n": 23
        },
        "Promoções & Fidelidade": {
          "nps": 56.2,
          "n": 89
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 28,
        "Abastecimento": 13,
        "Loja Física": 8,
        "Outros": 2,
        "Atendimento": 2
      },
      "elog_counts": {
        "Entrega & Logística": 65,
        "Promoções & Fidelidade": 61,
        "Atendimento": 32,
        "Loja Física": 23,
        "Outros": 21,
        "Abastecimento": 18
      }
    },
    {
      "nome": "L5111-VINHEDO",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 73.0,
      "nps_textual": 72.2,
      "nps_hibrido": 74.1,
      "delta_hibrido": 1.1,
      "pct_pos": 81.0,
      "pct_neu": 10.3,
      "pct_neg": 8.8,
      "severidade": 23.02,
      "transacoes": 62786,
      "indice_prioridade": 33.6,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 263,
      "avaliacoes_ponderadas": 1222.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 22
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 39
        },
        {
          "cat": "Abastecimento",
          "pct": 30
        }
      ],
      "top_elogios": [
        {
          "cat": "Entrega & Logística",
          "pct": 26
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 34
        },
        {
          "cat": "Loja Física",
          "pct": 14
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 79.3,
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
          "pos": 75.0,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 29.0,
          "n": 31
        },
        "Atendimento": {
          "nps": 96.2,
          "n": 26
        },
        "Entrega & Logística": {
          "nps": 100.0,
          "n": 55
        },
        "Loja Física": {
          "nps": 61.5,
          "n": 39
        },
        "Outros": {
          "nps": 70.0,
          "n": 20
        },
        "Promoções & Fidelidade": {
          "nps": 68.5,
          "n": 92
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 20,
        "Abastecimento": 15,
        "Loja Física": 10,
        "Outros": 4,
        "Atendimento": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 72,
        "Entrega & Logística": 55,
        "Loja Física": 29,
        "Atendimento": 25,
        "Abastecimento": 16,
        "Outros": 16
      }
    },
    {
      "nome": "L5225-ARUJA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 74.3,
      "nps_textual": 73.6,
      "nps_hibrido": 73.2,
      "delta_hibrido": -1.1,
      "pct_pos": 81.8,
      "pct_neu": 10.0,
      "pct_neg": 8.2,
      "severidade": 22.6,
      "transacoes": 110432,
      "indice_prioridade": 33.4,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 269,
      "avaliacoes_ponderadas": 1107.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 41
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 32
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 28
        },
        {
          "cat": "Entrega & Logística",
          "pct": 24
        },
        {
          "cat": "Outros",
          "pct": 10
        }
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
          "pos": 82.6,
          "neg": 8.7
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
          "pos": 100.0,
          "neg": 0.0
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 25.0,
          "n": 36
        },
        "Atendimento": {
          "nps": 88.2,
          "n": 68
        },
        "Entrega & Logística": {
          "nps": 98.1,
          "n": 53
        },
        "Loja Física": {
          "nps": 80.8,
          "n": 26
        },
        "Outros": {
          "nps": 80.8,
          "n": 26
        },
        "Promoções & Fidelidade": {
          "nps": 58.3,
          "n": 60
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 18,
        "Abastecimento": 18,
        "Atendimento": 6,
        "Outros": 3,
        "Loja Física": 3,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Atendimento": 62,
        "Entrega & Logística": 52,
        "Promoções & Fidelidade": 42,
        "Outros": 23,
        "Loja Física": 23,
        "Abastecimento": 18
      }
    },
    {
      "nome": "L5003-LINS (0340)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 72.5,
      "nps_textual": 71.9,
      "nps_hibrido": 73.0,
      "delta_hibrido": 0.5,
      "pct_pos": 79.3,
      "pct_neu": 13.4,
      "pct_neg": 7.4,
      "severidade": 23.22,
      "transacoes": 127225,
      "indice_prioridade": 32.9,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 367,
      "avaliacoes_ponderadas": 1712.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 11
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 41
        },
        {
          "cat": "Abastecimento",
          "pct": 37
        }
      ],
      "top_elogios": [
        {
          "cat": "Entrega & Logística",
          "pct": 26
        },
        {
          "cat": "Abastecimento",
          "pct": 10
        },
        {
          "cat": "Outros",
          "pct": 11
        }
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
          "pos": 78.6,
          "neg": 14.3
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
          "pos": 86.7,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 40.0,
          "n": 45
        },
        "Atendimento": {
          "nps": 77.5,
          "n": 40
        },
        "Entrega & Logística": {
          "nps": 97.4,
          "n": 76
        },
        "Loja Física": {
          "nps": 83.7,
          "n": 43
        },
        "Outros": {
          "nps": 85.7,
          "n": 35
        },
        "Promoções & Fidelidade": {
          "nps": 58.6,
          "n": 128
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 42,
        "Abastecimento": 17,
        "Loja Física": 6,
        "Atendimento": 6,
        "Outros": 4,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 86,
        "Entrega & Logística": 75,
        "Loja Física": 37,
        "Atendimento": 34,
        "Outros": 31,
        "Abastecimento": 28
      }
    },
    {
      "nome": "L5284-25 DE AGOSTO",
      "flag": "regular",
      "uf": "RJ",
      "regiao": "RJ",
      "nps_trad": 80.4,
      "nps_textual": 73.9,
      "nps_hibrido": 77.3,
      "delta_hibrido": -3.1,
      "pct_pos": 81.2,
      "pct_neu": 11.4,
      "pct_neg": 7.3,
      "severidade": 23.26,
      "transacoes": 77278,
      "indice_prioridade": 32.9,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 708,
      "avaliacoes_ponderadas": 2943.0,
      "top_problemas": [
        {
          "cat": "Outros",
          "pct": 6
        },
        {
          "cat": "Loja Física",
          "pct": 21
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 40
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 32
        },
        {
          "cat": "Loja Física",
          "pct": 14
        },
        {
          "cat": "Entrega & Logística",
          "pct": 22
        }
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
          "pos": 83.6,
          "neg": 6.6
        },
        {
          "m": "2025-07",
          "pos": 88.1,
          "neg": 2.4
        },
        {
          "m": "2025-08",
          "pos": 81.2,
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
          "pos": 76.0,
          "neg": 8.0
        },
        {
          "m": "2026-02",
          "pos": 71.4,
          "neg": 16.7
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 45.2,
          "n": 73
        },
        "Atendimento": {
          "nps": 88.9,
          "n": 90
        },
        "Entrega & Logística": {
          "nps": 99.2,
          "n": 130
        },
        "Loja Física": {
          "nps": 66.0,
          "n": 106
        },
        "Outros": {
          "nps": 80.6,
          "n": 62
        },
        "Promoções & Fidelidade": {
          "nps": 65.2,
          "n": 247
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 65,
        "Abastecimento": 26,
        "Loja Física": 25,
        "Outros": 9,
        "Atendimento": 7,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 182,
        "Entrega & Logística": 129,
        "Atendimento": 83,
        "Loja Física": 81,
        "Outros": 53,
        "Abastecimento": 47
      }
    },
    {
      "nome": "L5278-ITAPECERICA DA SERRA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 83.2,
      "nps_textual": 78.9,
      "nps_hibrido": 82.6,
      "delta_hibrido": -0.6,
      "pct_pos": 85.5,
      "pct_neu": 7.8,
      "pct_neg": 6.7,
      "severidade": 21.65,
      "transacoes": 108034,
      "indice_prioridade": 32.6,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 781,
      "avaliacoes_ponderadas": 2890.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 10
        },
        {
          "cat": "Abastecimento",
          "pct": 35
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 33
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 26
        },
        {
          "cat": "Entrega & Logística",
          "pct": 30
        },
        {
          "cat": "Outros",
          "pct": 9
        }
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
          "pos": 79.5,
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
          "pos": 83.9,
          "neg": 4.8
        },
        {
          "m": "2026-05",
          "pos": 91.1,
          "neg": 4.4
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 23.8,
          "n": 63
        },
        "Atendimento": {
          "nps": 93.0,
          "n": 185
        },
        "Entrega & Logística": {
          "nps": 98.0,
          "n": 204
        },
        "Loja Física": {
          "nps": 76.5,
          "n": 81
        },
        "Outros": {
          "nps": 85.1,
          "n": 67
        },
        "Promoções & Fidelidade": {
          "nps": 60.6,
          "n": 180
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 54,
        "Abastecimento": 30,
        "Loja Física": 11,
        "Outros": 8,
        "Atendimento": 8,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Entrega & Logística": 202,
        "Atendimento": 177,
        "Promoções & Fidelidade": 126,
        "Loja Física": 70,
        "Outros": 59,
        "Abastecimento": 33
      }
    },
    {
      "nome": "L5195-LEME",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 81.7,
      "nps_textual": 76.8,
      "nps_hibrido": 80.4,
      "delta_hibrido": -1.3,
      "pct_pos": 85.3,
      "pct_neu": 6.2,
      "pct_neg": 8.5,
      "severidade": 21.46,
      "transacoes": 55447,
      "indice_prioridade": 32.3,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 306,
      "avaliacoes_ponderadas": 1881.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 46
        },
        {
          "cat": "Abastecimento",
          "pct": 42
        }
      ],
      "top_elogios": [
        {
          "cat": "Entrega & Logística",
          "pct": 28
        },
        {
          "cat": "Atendimento",
          "pct": 19
        },
        {
          "cat": "Abastecimento",
          "pct": 8
        }
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
          "pos": 84.6,
          "neg": 7.7
        },
        {
          "m": "2025-06",
          "pos": 82.1,
          "neg": 15.4
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 29.7,
          "n": 37
        },
        "Atendimento": {
          "nps": 94.2,
          "n": 52
        },
        "Entrega & Logística": {
          "nps": 100.0,
          "n": 73
        },
        "Loja Física": {
          "nps": 85.7,
          "n": 28
        },
        "Outros": {
          "nps": 90.5,
          "n": 21
        },
        "Promoções & Fidelidade": {
          "nps": 62.1,
          "n": 95
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 24,
        "Abastecimento": 15,
        "Atendimento": 2,
        "Loja Física": 2,
        "Outros": 2
      },
      "elog_counts": {
        "Entrega & Logística": 73,
        "Promoções & Fidelidade": 71,
        "Atendimento": 50,
        "Loja Física": 26,
        "Abastecimento": 22,
        "Outros": 19
      }
    },
    {
      "nome": "L5151-PINDAMONHANGABA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 81.7,
      "nps_textual": 73.2,
      "nps_hibrido": 77.4,
      "delta_hibrido": -4.3,
      "pct_pos": 80.2,
      "pct_neu": 12.8,
      "pct_neg": 7.0,
      "severidade": 22.94,
      "transacoes": 63503,
      "indice_prioridade": 32.3,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 328,
      "avaliacoes_ponderadas": 1610.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 48
        },
        {
          "cat": "Loja Física",
          "pct": 17
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 22
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 13
        },
        {
          "cat": "Loja Física",
          "pct": 17
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 28
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 78.3,
          "neg": 13.0
        },
        {
          "m": "2025-02",
          "pos": 75.0,
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
          "neg": 0.0
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
          "neg": 14.3
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 42.6,
          "n": 54
        },
        "Atendimento": {
          "nps": 92.7,
          "n": 41
        },
        "Entrega & Logística": {
          "nps": 96.0,
          "n": 50
        },
        "Loja Física": {
          "nps": 78.4,
          "n": 51
        },
        "Outros": {
          "nps": 75.9,
          "n": 29
        },
        "Promoções & Fidelidade": {
          "nps": 67.0,
          "n": 103
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 29,
        "Abastecimento": 20,
        "Loja Física": 7,
        "Outros": 5,
        "Atendimento": 3,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 74,
        "Entrega & Logística": 49,
        "Loja Física": 44,
        "Atendimento": 38,
        "Abastecimento": 34,
        "Outros": 24
      }
    },
    {
      "nome": "L5140-OSASCO KM 18",
      "flag": "regular",
      "uf": "SP",
      "regiao": "RMSP",
      "nps_trad": 82.2,
      "nps_textual": 78.3,
      "nps_hibrido": 80.8,
      "delta_hibrido": -1.4,
      "pct_pos": 84.5,
      "pct_neu": 9.4,
      "pct_neg": 6.1,
      "severidade": 21.67,
      "transacoes": 148066,
      "indice_prioridade": 32.2,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 766,
      "avaliacoes_ponderadas": 2344.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 49
        },
        {
          "cat": "Atendimento",
          "pct": 6
        },
        {
          "cat": "Loja Física",
          "pct": 19
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 29
        },
        {
          "cat": "Entrega & Logística",
          "pct": 31
        },
        {
          "cat": "Outros",
          "pct": 9
        }
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
          "pos": 76.7,
          "neg": 6.7
        },
        {
          "m": "2025-11",
          "pos": 84.2,
          "neg": 7.9
        },
        {
          "m": "2025-12",
          "pos": 84.3,
          "neg": 9.1
        },
        {
          "m": "2026-01",
          "pos": 78.3,
          "neg": 15.2
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 35.1,
          "n": 57
        },
        "Atendimento": {
          "nps": 92.9,
          "n": 197
        },
        "Entrega & Logística": {
          "nps": 99.0,
          "n": 201
        },
        "Loja Física": {
          "nps": 63.7,
          "n": 80
        },
        "Outros": {
          "nps": 96.5,
          "n": 57
        },
        "Promoções & Fidelidade": {
          "nps": 52.9,
          "n": 174
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 59,
        "Abastecimento": 25,
        "Loja Física": 20,
        "Atendimento": 11,
        "Outros": 2,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Entrega & Logística": 199,
        "Atendimento": 186,
        "Promoções & Fidelidade": 115,
        "Loja Física": 60,
        "Outros": 55,
        "Abastecimento": 32
      }
    },
    {
      "nome": "L5272-ILHABELA",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Litoral",
      "nps_trad": 75.0,
      "nps_textual": 71.5,
      "nps_hibrido": 72.2,
      "delta_hibrido": -2.8,
      "pct_pos": 78.8,
      "pct_neu": 13.9,
      "pct_neg": 7.3,
      "severidade": 23.31,
      "transacoes": 112011,
      "indice_prioridade": 32.2,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 288,
      "avaliacoes_ponderadas": 1364.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 43
        },
        {
          "cat": "Abastecimento",
          "pct": 33
        },
        {
          "cat": "Loja Física",
          "pct": 14
        }
      ],
      "top_elogios": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 41
        },
        {
          "cat": "Outros",
          "pct": 10
        },
        {
          "cat": "Entrega & Logística",
          "pct": 21
        }
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
          "pos": 75.0,
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
          "pos": 76.9,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 31.2,
          "n": 32
        },
        "Atendimento": {
          "nps": 90.9,
          "n": 22
        },
        "Entrega & Logística": {
          "nps": 95.9,
          "n": 49
        },
        "Loja Física": {
          "nps": 71.9,
          "n": 32
        },
        "Outros": {
          "nps": 84.6,
          "n": 26
        },
        "Promoções & Fidelidade": {
          "nps": 66.1,
          "n": 127
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 34,
        "Abastecimento": 15,
        "Loja Física": 6,
        "Outros": 3,
        "Entrega & Logística": 2,
        "Atendimento": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 93,
        "Entrega & Logística": 47,
        "Loja Física": 26,
        "Outros": 23,
        "Atendimento": 21,
        "Abastecimento": 17
      }
    },
    {
      "nome": "L5281-OLIVEIRA FREIRE",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 73.7,
      "nps_textual": 75.2,
      "nps_hibrido": 74.9,
      "delta_hibrido": 1.2,
      "pct_pos": 81.5,
      "pct_neu": 12.2,
      "pct_neg": 6.3,
      "severidade": 22.04,
      "transacoes": 96096,
      "indice_prioridade": 30.7,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 335,
      "avaliacoes_ponderadas": 1715.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 24
        },
        {
          "cat": "Abastecimento",
          "pct": 43
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 29
        }
      ],
      "top_elogios": [
        {
          "cat": "Outros",
          "pct": 14
        },
        {
          "cat": "Loja Física",
          "pct": 16
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 30
        }
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
          "pos": 73.3,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 34.8,
          "n": 46
        },
        "Atendimento": {
          "nps": 92.0,
          "n": 25
        },
        "Entrega & Logística": {
          "nps": 98.3,
          "n": 60
        },
        "Loja Física": {
          "nps": 76.5,
          "n": 51
        },
        "Outros": {
          "nps": 84.4,
          "n": 45
        },
        "Promoções & Fidelidade": {
          "nps": 71.3,
          "n": 108
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 25,
        "Abastecimento": 21,
        "Loja Física": 7,
        "Outros": 6,
        "Atendimento": 2,
        "Entrega & Logística": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 83,
        "Entrega & Logística": 59,
        "Loja Física": 44,
        "Outros": 39,
        "Abastecimento": 25,
        "Atendimento": 23
      }
    },
    {
      "nome": "L5227-CRUZEIRO",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 78.1,
      "nps_textual": 75.4,
      "nps_hibrido": 77.8,
      "delta_hibrido": -0.3,
      "pct_pos": 82.6,
      "pct_neu": 10.2,
      "pct_neg": 7.2,
      "severidade": 22.12,
      "transacoes": 82886,
      "indice_prioridade": 30.5,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 333,
      "avaliacoes_ponderadas": 1862.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 58
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 25
        }
      ],
      "top_elogios": [
        {
          "cat": "Outros",
          "pct": 12
        },
        {
          "cat": "Loja Física",
          "pct": 15
        },
        {
          "cat": "Entrega & Logística",
          "pct": 23
        }
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
          "pos": 80.0,
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
          "pos": 80.0,
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
          "pos": 81.8,
          "neg": 9.1
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 21.2,
          "n": 52
        },
        "Atendimento": {
          "nps": 90.5,
          "n": 42
        },
        "Entrega & Logística": {
          "nps": 95.4,
          "n": 65
        },
        "Loja Física": {
          "nps": 82.6,
          "n": 46
        },
        "Outros": {
          "nps": 94.3,
          "n": 35
        },
        "Promoções & Fidelidade": {
          "nps": 74.2,
          "n": 93
        }
      },
      "prob_counts": {
        "Abastecimento": 27,
        "Promoções & Fidelidade": 18,
        "Loja Física": 6,
        "Atendimento": 3,
        "Outros": 2,
        "Entrega & Logística": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 75,
        "Entrega & Logística": 63,
        "Loja Física": 40,
        "Atendimento": 39,
        "Outros": 33,
        "Abastecimento": 25
      }
    },
    {
      "nome": "L5233-MONGAGUA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Litoral",
      "nps_trad": 83.4,
      "nps_textual": 79.6,
      "nps_hibrido": 80.9,
      "delta_hibrido": -2.6,
      "pct_pos": 85.3,
      "pct_neu": 9.0,
      "pct_neg": 5.7,
      "severidade": 21.19,
      "transacoes": 128843,
      "indice_prioridade": 28.8,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 700,
      "avaliacoes_ponderadas": 2863.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 12
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 42
        },
        {
          "cat": "Abastecimento",
          "pct": 42
        }
      ],
      "top_elogios": [
        {
          "cat": "Entrega & Logística",
          "pct": 27
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 32
        },
        {
          "cat": "Abastecimento",
          "pct": 9
        }
      ],
      "temporal": [
        {
          "m": "2025-01",
          "pos": 75.0,
          "neg": 12.5
        },
        {
          "m": "2025-02",
          "pos": 79.3,
          "neg": 3.4
        },
        {
          "m": "2025-03",
          "pos": 80.5,
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
          "pos": 87.5,
          "neg": 6.2
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
          "pos": 87.8,
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
          "neg": 3.7
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 42.7,
          "n": 82
        },
        "Atendimento": {
          "nps": 82.1,
          "n": 78
        },
        "Entrega & Logística": {
          "nps": 98.1,
          "n": 162
        },
        "Loja Física": {
          "nps": 92.6,
          "n": 81
        },
        "Outros": {
          "nps": 94.2,
          "n": 52
        },
        "Promoções & Fidelidade": {
          "nps": 71.4,
          "n": 245
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 53,
        "Abastecimento": 30,
        "Atendimento": 9,
        "Loja Física": 5,
        "Entrega & Logística": 3,
        "Outros": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 192,
        "Entrega & Logística": 159,
        "Loja Física": 76,
        "Atendimento": 69,
        "Abastecimento": 52,
        "Outros": 49
      }
    },
    {
      "nome": "L5154-RIO CLARO",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 80.3,
      "nps_textual": 76.0,
      "nps_hibrido": 78.5,
      "delta_hibrido": -1.9,
      "pct_pos": 82.5,
      "pct_neu": 11.1,
      "pct_neg": 6.5,
      "severidade": 21.8,
      "transacoes": 58528,
      "indice_prioridade": 28.5,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 325,
      "avaliacoes_ponderadas": 1657.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 24
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 33
        },
        {
          "cat": "Abastecimento",
          "pct": 29
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 11
        },
        {
          "cat": "Outros",
          "pct": 12
        },
        {
          "cat": "Entrega & Logística",
          "pct": 25
        }
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
          "pos": 90.5,
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
          "pos": 77.8,
          "neg": 11.1
        },
        {
          "m": "2026-05",
          "pos": 100.0,
          "neg": 0.0
        }
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 50.0,
          "n": 48
        },
        "Atendimento": {
          "nps": 88.6,
          "n": 44
        },
        "Entrega & Logística": {
          "nps": 94.2,
          "n": 69
        },
        "Loja Física": {
          "nps": 67.6,
          "n": 34
        },
        "Outros": {
          "nps": 88.6,
          "n": 35
        },
        "Promoções & Fidelidade": {
          "nps": 68.4,
          "n": 95
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 23,
        "Abastecimento": 18,
        "Loja Física": 6,
        "Atendimento": 4,
        "Entrega & Logística": 3,
        "Outros": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 72,
        "Entrega & Logística": 66,
        "Atendimento": 40,
        "Outros": 32,
        "Abastecimento": 30,
        "Loja Física": 28
      }
    },
    {
      "nome": "L5164-ITAPETININGA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 77.7,
      "nps_textual": 76.7,
      "nps_hibrido": 77.7,
      "delta_hibrido": 0.0,
      "pct_pos": 82.3,
      "pct_neu": 12.2,
      "pct_neg": 5.6,
      "severidade": 21.84,
      "transacoes": 79756,
      "indice_prioridade": 27.8,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 485,
      "avaliacoes_ponderadas": 2604.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 56
        },
        {
          "cat": "Abastecimento",
          "pct": 30
        }
      ],
      "top_elogios": [
        {
          "cat": "Abastecimento",
          "pct": 12
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 34
        },
        {
          "cat": "Entrega & Logística",
          "pct": 24
        }
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
          "pos": 88.2,
          "neg": 2.0
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 56.7,
          "n": 67
        },
        "Atendimento": {
          "nps": 90.5,
          "n": 42
        },
        "Entrega & Logística": {
          "nps": 95.9,
          "n": 97
        },
        "Loja Física": {
          "nps": 87.5,
          "n": 64
        },
        "Outros": {
          "nps": 87.1,
          "n": 31
        },
        "Promoções & Fidelidade": {
          "nps": 65.2,
          "n": 184
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 49,
        "Abastecimento": 21,
        "Loja Física": 6,
        "Outros": 4,
        "Entrega & Logística": 3,
        "Atendimento": 3
      },
      "elog_counts": {
        "Promoções & Fidelidade": 135,
        "Entrega & Logística": 94,
        "Loja Física": 58,
        "Abastecimento": 46,
        "Atendimento": 39,
        "Outros": 27
      }
    },
    {
      "nome": "L5016-ANDRADINA (0573)",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 83.9,
      "nps_textual": 77.4,
      "nps_hibrido": 82.2,
      "delta_hibrido": -1.7,
      "pct_pos": 84.6,
      "pct_neu": 8.2,
      "pct_neg": 7.2,
      "severidade": 20.91,
      "transacoes": 69173,
      "indice_prioridade": 25.6,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 292,
      "avaliacoes_ponderadas": 1665.0,
      "top_problemas": [
        {
          "cat": "Atendimento",
          "pct": 14
        },
        {
          "cat": "Loja Física",
          "pct": 29
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 24
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 19
        },
        {
          "cat": "Entrega & Logística",
          "pct": 23
        },
        {
          "cat": "Loja Física",
          "pct": 14
        }
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
          "pos": 83.9,
          "neg": 6.5
        },
        {
          "m": "2025-07",
          "pos": 83.3,
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
          "pos": 91.3,
          "neg": 4.3
        },
        {
          "m": "2026-01",
          "pos": 62.5,
          "neg": 4.2
        },
        {
          "m": "2026-02",
          "pos": 97.1,
          "neg": 2.9
        },
        {
          "m": "2026-03",
          "pos": 77.3,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 58.3,
          "n": 24
        },
        "Atendimento": {
          "nps": 86.5,
          "n": 52
        },
        "Entrega & Logística": {
          "nps": 91.5,
          "n": 59
        },
        "Loja Física": {
          "nps": 66.7,
          "n": 42
        },
        "Outros": {
          "nps": 87.0,
          "n": 23
        },
        "Promoções & Fidelidade": {
          "nps": 70.7,
          "n": 92
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 22,
        "Loja Física": 8,
        "Abastecimento": 6,
        "Atendimento": 4,
        "Entrega & Logística": 3,
        "Outros": 2
      },
      "elog_counts": {
        "Promoções & Fidelidade": 70,
        "Entrega & Logística": 56,
        "Atendimento": 48,
        "Loja Física": 34,
        "Outros": 21,
        "Abastecimento": 18
      }
    },
    {
      "nome": "L5246-MALL MULTI GERMINARE",
      "flag": "tocadora",
      "uf": "SP",
      "regiao": "Capital",
      "nps_trad": 86.0,
      "nps_textual": 78.8,
      "nps_hibrido": 81.9,
      "delta_hibrido": -4.1,
      "pct_pos": 84.0,
      "pct_neu": 10.9,
      "pct_neg": 5.1,
      "severidade": 20.52,
      "transacoes": 215553,
      "indice_prioridade": 24.6,
      "quadrante": "alta_performance",
      "risco_oculto": false,
      "comentarios": 293,
      "avaliacoes_ponderadas": 1232.0,
      "top_problemas": [
        {
          "cat": "Loja Física",
          "pct": 33
        },
        {
          "cat": "Abastecimento",
          "pct": 40
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 27
        }
      ],
      "top_elogios": [
        {
          "cat": "Atendimento",
          "pct": 29
        },
        {
          "cat": "Entrega & Logística",
          "pct": 22
        },
        {
          "cat": "Outros",
          "pct": 10
        }
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
          "pos": 88.9,
          "neg": 0.0
        },
        {
          "m": "2025-05",
          "pos": 63.2,
          "neg": 10.5
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 20.0,
          "n": 25
        },
        "Atendimento": {
          "nps": 98.6,
          "n": 72
        },
        "Entrega & Logística": {
          "nps": 98.2,
          "n": 55
        },
        "Loja Física": {
          "nps": 61.8,
          "n": 34
        },
        "Outros": {
          "nps": 100.0,
          "n": 24
        },
        "Promoções & Fidelidade": {
          "nps": 67.5,
          "n": 83
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 23,
        "Abastecimento": 14,
        "Loja Física": 8,
        "Entrega & Logística": 1,
        "Atendimento": 1
      },
      "elog_counts": {
        "Atendimento": 71,
        "Promoções & Fidelidade": 60,
        "Entrega & Logística": 54,
        "Loja Física": 26,
        "Outros": 24,
        "Abastecimento": 11
      }
    },
    {
      "nome": "L5197-LIMEIRA",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 84.2,
      "nps_textual": 79.4,
      "nps_hibrido": 83.0,
      "delta_hibrido": -1.2,
      "pct_pos": 85.5,
      "pct_neu": 8.5,
      "pct_neg": 6.0,
      "severidade": 20.63,
      "transacoes": 68007,
      "indice_prioridade": 24.3,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 399,
      "avaliacoes_ponderadas": 1931.0,
      "top_problemas": [
        {
          "cat": "Abastecimento",
          "pct": 62
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 33
        }
      ],
      "top_elogios": [
        {
          "cat": "Entrega & Logística",
          "pct": 26
        },
        {
          "cat": "Loja Física",
          "pct": 14
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 28
        }
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 27.7,
          "n": 47
        },
        "Atendimento": {
          "nps": 98.1,
          "n": 53
        },
        "Entrega & Logística": {
          "nps": 96.7,
          "n": 91
        },
        "Loja Física": {
          "nps": 88.5,
          "n": 52
        },
        "Outros": {
          "nps": 96.8,
          "n": 31
        },
        "Promoções & Fidelidade": {
          "nps": 70.4,
          "n": 125
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 29,
        "Abastecimento": 19,
        "Loja Física": 5,
        "Entrega & Logística": 3,
        "Outros": 1,
        "Atendimento": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 96,
        "Entrega & Logística": 88,
        "Atendimento": 52,
        "Loja Física": 47,
        "Outros": 30,
        "Abastecimento": 28
      }
    },
    {
      "nome": "L5267-JAU",
      "flag": "regular",
      "uf": "SP",
      "regiao": "Interior",
      "nps_trad": 83.7,
      "nps_textual": 84.5,
      "nps_hibrido": 86.2,
      "delta_hibrido": 2.5,
      "pct_pos": 88.7,
      "pct_neu": 7.1,
      "pct_neg": 4.2,
      "severidade": 18.28,
      "transacoes": 43702,
      "indice_prioridade": 17.2,
      "quadrante": "atencao_leve",
      "risco_oculto": false,
      "comentarios": 239,
      "avaliacoes_ponderadas": 1110.0,
      "top_problemas": [
        {
          "cat": "Promoções & Fidelidade",
          "pct": 50
        },
        {
          "cat": "Abastecimento",
          "pct": 40
        }
      ],
      "top_elogios": [
        {
          "cat": "Entrega & Logística",
          "pct": 27
        },
        {
          "cat": "Abastecimento",
          "pct": 9
        },
        {
          "cat": "Promoções & Fidelidade",
          "pct": 29
        }
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
          "pos": 91.7,
          "neg": 0.0
        },
        {
          "m": "2025-04",
          "pos": 80.0,
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
          "pos": 83.3,
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
      ],
      "nps_tema": {
        "Abastecimento": {
          "nps": 57.1,
          "n": 28
        },
        "Atendimento": {
          "nps": 97.1,
          "n": 35
        },
        "Entrega & Logística": {
          "nps": 96.6,
          "n": 59
        },
        "Loja Física": {
          "nps": 86.2,
          "n": 29
        },
        "Outros": {
          "nps": 92.9,
          "n": 14
        },
        "Promoções & Fidelidade": {
          "nps": 77.0,
          "n": 74
        }
      },
      "prob_counts": {
        "Promoções & Fidelidade": 12,
        "Abastecimento": 8,
        "Loja Física": 3,
        "Entrega & Logística": 2,
        "Atendimento": 1,
        "Outros": 1
      },
      "elog_counts": {
        "Promoções & Fidelidade": 62,
        "Entrega & Logística": 57,
        "Atendimento": 34,
        "Loja Física": 26,
        "Abastecimento": 20,
        "Outros": 13
      }
    }
  ],
  "regioes": [
    {
      "nivel": "regiao",
      "valor": "Capital",
      "lojas": 91,
      "nps_trad": 62.5,
      "nps_textual": 56.5,
      "nps_hibrido": 59.9,
      "pct_neg": 14.1,
      "transacoes": 11141140
    },
    {
      "nivel": "regiao",
      "valor": "DF",
      "lojas": 7,
      "nps_trad": 67.0,
      "nps_textual": 61.2,
      "nps_hibrido": 64.3,
      "pct_neg": 11.1,
      "transacoes": 560932
    },
    {
      "nivel": "regiao",
      "valor": "GO",
      "lojas": 1,
      "nps_trad": 61.7,
      "nps_textual": 54.2,
      "nps_hibrido": 58.4,
      "pct_neg": 17.0,
      "transacoes": 66046
    },
    {
      "nivel": "regiao",
      "valor": "Interior",
      "lojas": 57,
      "nps_trad": 69.2,
      "nps_textual": 64.3,
      "nps_hibrido": 67.6,
      "pct_neg": 11.3,
      "transacoes": 5297471
    },
    {
      "nivel": "regiao",
      "valor": "Litoral",
      "lojas": 17,
      "nps_trad": 72.0,
      "nps_textual": 66.8,
      "nps_hibrido": 69.8,
      "pct_neg": 10.2,
      "transacoes": 2265418
    },
    {
      "nivel": "regiao",
      "valor": "RJ",
      "lojas": 8,
      "nps_trad": 70.5,
      "nps_textual": 63.8,
      "nps_hibrido": 67.6,
      "pct_neg": 10.5,
      "transacoes": 867891
    },
    {
      "nivel": "regiao",
      "valor": "RMSP",
      "lojas": 46,
      "nps_trad": 67.0,
      "nps_textual": 61.7,
      "nps_hibrido": 65.1,
      "pct_neg": 12.4,
      "transacoes": 5429897
    },
    {
      "nivel": "uf",
      "valor": "DF",
      "lojas": 7,
      "nps_trad": 67.0,
      "nps_textual": 61.2,
      "nps_hibrido": 64.3,
      "pct_neg": 11.1,
      "transacoes": 560932
    },
    {
      "nivel": "uf",
      "valor": "GO",
      "lojas": 1,
      "nps_trad": 61.7,
      "nps_textual": 54.2,
      "nps_hibrido": 58.4,
      "pct_neg": 17.0,
      "transacoes": 66046
    },
    {
      "nivel": "uf",
      "valor": "RJ",
      "lojas": 8,
      "nps_trad": 70.5,
      "nps_textual": 63.8,
      "nps_hibrido": 67.6,
      "pct_neg": 10.5,
      "transacoes": 867891
    },
    {
      "nivel": "uf",
      "valor": "SP",
      "lojas": 211,
      "nps_trad": 66.0,
      "nps_textual": 60.5,
      "nps_hibrido": 63.9,
      "pct_neg": 12.6,
      "transacoes": 24133926
    }
  ],
  "serie_mensal": {
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
    "pos": [
      72.0,
      70.6,
      70.6,
      72.0,
      73.6,
      75.9,
      75.4,
      75.3,
      73.3,
      72.6,
      73.4,
      76.2,
      70.9,
      72.8,
      73.3,
      72.4,
      72.4
    ],
    "neu": [
      13.7,
      15.8,
      15.3,
      14.7,
      14.4,
      13.6,
      14.0,
      13.6,
      15.1,
      15.5,
      14.5,
      12.4,
      15.7,
      14.8,
      14.1,
      14.5,
      15.2
    ],
    "neg": [
      14.3,
      13.7,
      14.1,
      13.3,
      12.0,
      10.5,
      10.7,
      11.1,
      11.6,
      11.9,
      12.1,
      11.3,
      13.5,
      12.5,
      12.7,
      13.2,
      12.5
    ],
    "nps_trad": [
      57.8,
      63.7,
      62.5,
      63.3,
      67.9,
      70.8,
      70.7,
      70.8,
      67.3,
      66.9,
      67.6,
      70.6,
      63.5,
      65.9,
      67.3,
      65.9,
      66.3
    ],
    "nps_textual": [
      57.7,
      56.9,
      56.5,
      58.6,
      61.6,
      65.3,
      64.7,
      64.2,
      61.7,
      60.7,
      61.3,
      64.9,
      57.4,
      60.3,
      60.6,
      59.2,
      59.9
    ],
    "nps_hibrido": [
      58.2,
      61.3,
      60.3,
      61.6,
      65.4,
      68.2,
      68.2,
      68.2,
      65.1,
      64.6,
      65.4,
      68.2,
      61.1,
      63.6,
      64.3,
      63.1,
      63.8
    ],
    "volume": [
      7897,
      5340,
      6273,
      6434,
      7014,
      7835,
      5900,
      6911,
      7131,
      7213,
      6327,
      8758,
      7344,
      6963,
      7580,
      7166,
      4519
    ]
  },
  "sazonalidade": {
    "meses_nome": [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez"
    ],
    "nps_medio": [
      59.6,
      62.6,
      62.5,
      62.4,
      64.7,
      68.2,
      68.2,
      68.2,
      65.1,
      64.6,
      65.4,
      68.2
    ],
    "volume": [
      15241,
      12303,
      13853,
      13600,
      11533,
      7835,
      5900,
      6911,
      7131,
      7213,
      6327,
      8758
    ]
  },
  "confianca": {
    "buckets": [
      "0–20%",
      "20–40%",
      "40–60%",
      "60–80%",
      "80–100%"
    ],
    "contagens": [
      608,
      34897,
      50485,
      25840,
      4766
    ]
  },
  "divergencias": {
    "total_pct": 13.2,
    "promotor_negativo": 2672,
    "detrator_positivo": 977,
    "divergente_parcial": 11748
  },
  "temas": {
    "global": [
      {
        "tema": "Abastecimento",
        "nps": 13.8,
        "pct_pos": 45,
        "n": 16621
      },
      {
        "tema": "Promoções & Fidelidade",
        "nps": 51.3,
        "pct_pos": 65,
        "n": 38644
      },
      {
        "tema": "Loja Física",
        "nps": 54.4,
        "pct_pos": 71,
        "n": 15874
      },
      {
        "tema": "Atendimento",
        "nps": 83.9,
        "pct_pos": 89,
        "n": 16708
      },
      {
        "tema": "Outros",
        "nps": 84.2,
        "pct_pos": 87,
        "n": 9855
      },
      {
        "tema": "Entrega & Logística",
        "nps": 94.4,
        "pct_pos": 96,
        "n": 18894
      }
    ],
    "por_gestao": {
      "regular": [
        {
          "tema": "Abastecimento",
          "nps": 15.5,
          "pct_pos": 46,
          "n": 12733
        },
        {
          "tema": "Promoções & Fidelidade",
          "nps": 53.3,
          "pct_pos": 66,
          "n": 29824
        },
        {
          "tema": "Loja Física",
          "nps": 59.4,
          "pct_pos": 74,
          "n": 12014
        },
        {
          "tema": "Atendimento",
          "nps": 84.2,
          "pct_pos": 89,
          "n": 12582
        },
        {
          "tema": "Outros",
          "nps": 85.0,
          "pct_pos": 88,
          "n": 7634
        },
        {
          "tema": "Entrega & Logística",
          "nps": 94.7,
          "pct_pos": 96,
          "n": 14846
        }
      ],
      "tocadora": [
        {
          "tema": "Abastecimento",
          "nps": 8.1,
          "pct_pos": 41,
          "n": 3888
        },
        {
          "tema": "Loja Física",
          "nps": 39.0,
          "pct_pos": 63,
          "n": 3860
        },
        {
          "tema": "Promoções & Fidelidade",
          "nps": 44.6,
          "pct_pos": 60,
          "n": 8820
        },
        {
          "tema": "Outros",
          "nps": 81.2,
          "pct_pos": 85,
          "n": 2221
        },
        {
          "tema": "Atendimento",
          "nps": 83.2,
          "pct_pos": 89,
          "n": 4126
        },
        {
          "tema": "Entrega & Logística",
          "nps": 93.2,
          "pct_pos": 95,
          "n": 4048
        }
      ]
    },
    "piores_lojas": {
      "Abastecimento": [
        {
          "loja": "L5283-ALDEIA DA SERRA",
          "nps": -32.4,
          "n": 37
        },
        {
          "loja": "L5236-JACAREI VILLA BRANCA",
          "nps": -27.3,
          "n": 22
        },
        {
          "loja": "L5200-JUVENTUS",
          "nps": -22.4,
          "n": 49
        }
      ],
      "Promoções & Fidelidade": [
        {
          "loja": "L5007-KLABIN (0496)",
          "nps": 26.0,
          "n": 154
        },
        {
          "loja": "L5145-TAMBORE",
          "nps": 26.3,
          "n": 57
        },
        {
          "loja": "L5205-GRANJA KM 26",
          "nps": 26.8,
          "n": 56
        }
      ],
      "Loja Física": [
        {
          "loja": "L5081-VILA OLIMPIA (1345)",
          "nps": -4.5,
          "n": 44
        },
        {
          "loja": "L5070-BORGES LAGOA (1323)",
          "nps": -3.2,
          "n": 93
        },
        {
          "loja": "L5082-VILA ANDRADE (1346)",
          "nps": 4.1,
          "n": 73
        }
      ],
      "Atendimento": [
        {
          "loja": "L5252-14 DE DEZEMBRO",
          "nps": 41.3,
          "n": 63
        },
        {
          "loja": "L5166-MAIRIPORA",
          "nps": 48.5,
          "n": 33
        },
        {
          "loja": "L5107-MANDAQUI (1521)",
          "nps": 50.0,
          "n": 26
        }
      ],
      "Outros": [
        {
          "loja": "L5074-VOLUNTARIOS DA PATRIA (1335)",
          "nps": 53.1,
          "n": 32
        },
        {
          "loja": "L5165-MOGI DAS CRUZES MOGILAR",
          "nps": 56.2,
          "n": 16
        },
        {
          "loja": "L5159-COTIA KM 39",
          "nps": 62.5,
          "n": 32
        }
      ],
      "Entrega & Logística": [
        {
          "loja": "L5200-JUVENTUS",
          "nps": 81.6,
          "n": 49
        },
        {
          "loja": "L5015-BARAO ITAPURA (0570)",
          "nps": 84.2,
          "n": 38
        },
        {
          "loja": "L5145-TAMBORE",
          "nps": 84.2,
          "n": 38
        }
      ]
    }
  },
  "problemas": {
    "categorias": [
      "Promoções & Fidelidade",
      "Abastecimento",
      "Loja Física",
      "Atendimento",
      "Outros",
      "Entrega & Logística"
    ],
    "contagens": [
      13692,
      9105,
      4593,
      1847,
      1243,
      791
    ]
  },
  "elogios": {
    "categorias": [
      "Promoções & Fidelidade",
      "Entrega & Logística",
      "Atendimento",
      "Loja Física",
      "Outros",
      "Abastecimento"
    ],
    "contagens": [
      24952,
      18103,
      14861,
      11281,
      8612,
      7516
    ]
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
    "Promoções & Fidelidade": [
      41.1,
      45.7,
      41.8,
      41.0,
      42.4,
      41.9,
      46.4,
      43.3,
      43.1,
      47.0,
      46.8,
      44.0,
      47.8,
      44.5,
      43.2,
      42.3,
      42.4
    ],
    "Abastecimento": [
      31.9,
      27.8,
      31.1,
      28.5,
      31.6,
      30.3,
      26.3,
      29.8,
      30.4,
      27.0,
      25.8,
      28.4,
      27.2,
      28.9,
      29.5,
      29.7,
      29.6
    ],
    "Loja Física": [
      15.4,
      14.1,
      15.5,
      17.6,
      14.1,
      15.8,
      12.8,
      14.7,
      13.1,
      13.5,
      15.2,
      15.2,
      12.9,
      14.8,
      15.5,
      14.8,
      15.0
    ],
    "Atendimento": [
      4.9,
      5.0,
      5.0,
      5.2,
      5.0,
      5.3,
      7.3,
      6.0,
      6.6,
      5.8,
      6.6,
      6.0,
      6.3,
      6.0,
      6.1,
      7.3,
      6.6
    ],
    "Outros": [
      4.4,
      4.7,
      3.5,
      4.8,
      4.5,
      4.2,
      5.0,
      3.6,
      4.5,
      3.8,
      3.4,
      3.9,
      3.3,
      3.4,
      3.4,
      3.7,
      4.0
    ]
  },
  "nuvens": {
    "regular_positivo": [
      {
        "word": "atendimento",
        "size": 5
      },
      {
        "word": "precos",
        "size": 3
      },
      {
        "word": "otimo",
        "size": 3
      },
      {
        "word": "bom",
        "size": 3
      },
      {
        "word": "promocoes",
        "size": 3
      },
      {
        "word": "parabens",
        "size": 2
      },
      {
        "word": "melhorar",
        "size": 2
      },
      {
        "word": "qualidade",
        "size": 2
      },
      {
        "word": "excelente",
        "size": 2
      },
      {
        "word": "preco",
        "size": 2
      },
      {
        "word": "pelo",
        "size": 2
      },
      {
        "word": "fui",
        "size": 2
      },
      {
        "word": "fazer",
        "size": 2
      },
      {
        "word": "estao",
        "size": 2
      },
      {
        "word": "pouco",
        "size": 2
      },
      {
        "word": "melhor",
        "size": 2
      },
      {
        "word": "perfeito",
        "size": 2
      },
      {
        "word": "super",
        "size": 2
      },
      {
        "word": "funcionarios",
        "size": 2
      },
      {
        "word": "alguns",
        "size": 2
      },
      {
        "word": "mim",
        "size": 2
      },
      {
        "word": "clientes",
        "size": 2
      },
      {
        "word": "nada",
        "size": 2
      },
      {
        "word": "pela",
        "size": 2
      },
      {
        "word": "atendente",
        "size": 2
      },
      {
        "word": "dia",
        "size": 2
      },
      {
        "word": "carne",
        "size": 2
      },
      {
        "word": "gosto",
        "size": 2
      }
    ],
    "regular_negativo": [
      {
        "word": "estava",
        "size": 5
      },
      {
        "word": "carne",
        "size": 5
      },
      {
        "word": "qualidade",
        "size": 4
      },
      {
        "word": "picanha",
        "size": 3
      },
      {
        "word": "pedido",
        "size": 3
      },
      {
        "word": "sem",
        "size": 3
      },
      {
        "word": "dura",
        "size": 3
      },
      {
        "word": "dia",
        "size": 3
      },
      {
        "word": "entrega",
        "size": 3
      },
      {
        "word": "caixa",
        "size": 3
      },
      {
        "word": "fui",
        "size": 3
      },
      {
        "word": "tive",
        "size": 3
      },
      {
        "word": "atendimento",
        "size": 3
      },
      {
        "word": "cliente",
        "size": 2
      },
      {
        "word": "mesmo",
        "size": 2
      },
      {
        "word": "preco",
        "size": 2
      },
      {
        "word": "pois",
        "size": 2
      },
      {
        "word": "file",
        "size": 2
      },
      {
        "word": "ruim",
        "size": 2
      },
      {
        "word": "carnes",
        "size": 2
      },
      {
        "word": "compro",
        "size": 2
      },
      {
        "word": "veio",
        "size": 2
      },
      {
        "word": "valor",
        "size": 2
      },
      {
        "word": "pelo",
        "size": 2
      },
      {
        "word": "falta",
        "size": 2
      },
      {
        "word": "nem",
        "size": 2
      },
      {
        "word": "atendente",
        "size": 2
      },
      {
        "word": "vezes",
        "size": 2
      }
    ],
    "tocadora_positivo": [
      {
        "word": "atendimento",
        "size": 5
      },
      {
        "word": "precos",
        "size": 3
      },
      {
        "word": "otimo",
        "size": 3
      },
      {
        "word": "bom",
        "size": 3
      },
      {
        "word": "promocoes",
        "size": 2
      },
      {
        "word": "parabens",
        "size": 2
      },
      {
        "word": "excelente",
        "size": 2
      },
      {
        "word": "melhorar",
        "size": 2
      },
      {
        "word": "qualidade",
        "size": 2
      },
      {
        "word": "fui",
        "size": 2
      },
      {
        "word": "pelo",
        "size": 2
      },
      {
        "word": "preco",
        "size": 2
      },
      {
        "word": "funcionarios",
        "size": 2
      },
      {
        "word": "atendente",
        "size": 2
      },
      {
        "word": "super",
        "size": 2
      },
      {
        "word": "estao",
        "size": 2
      },
      {
        "word": "melhor",
        "size": 2
      },
      {
        "word": "fazer",
        "size": 2
      },
      {
        "word": "pela",
        "size": 2
      },
      {
        "word": "vezes",
        "size": 2
      },
      {
        "word": "perfeito",
        "size": 2
      },
      {
        "word": "entrega",
        "size": 2
      },
      {
        "word": "alguns",
        "size": 2
      },
      {
        "word": "gosto",
        "size": 2
      },
      {
        "word": "encontrei",
        "size": 2
      },
      {
        "word": "atendentes",
        "size": 2
      },
      {
        "word": "acho",
        "size": 2
      },
      {
        "word": "pouco",
        "size": 2
      }
    ],
    "tocadora_negativo": [
      {
        "word": "estava",
        "size": 5
      },
      {
        "word": "pedido",
        "size": 5
      },
      {
        "word": "carne",
        "size": 4
      },
      {
        "word": "entrega",
        "size": 4
      },
      {
        "word": "qualidade",
        "size": 3
      },
      {
        "word": "sem",
        "size": 3
      },
      {
        "word": "dia",
        "size": 3
      },
      {
        "word": "atendimento",
        "size": 3
      },
      {
        "word": "caixa",
        "size": 3
      },
      {
        "word": "tive",
        "size": 3
      },
      {
        "word": "fui",
        "size": 3
      },
      {
        "word": "picanha",
        "size": 3
      },
      {
        "word": "pois",
        "size": 2
      },
      {
        "word": "recebi",
        "size": 2
      },
      {
        "word": "cliente",
        "size": 2
      },
      {
        "word": "preco",
        "size": 2
      },
      {
        "word": "falta",
        "size": 2
      },
      {
        "word": "mesmo",
        "size": 2
      },
      {
        "word": "valor",
        "size": 2
      },
      {
        "word": "pelo",
        "size": 2
      },
      {
        "word": "entregue",
        "size": 2
      },
      {
        "word": "nem",
        "size": 2
      },
      {
        "word": "atendente",
        "size": 2
      },
      {
        "word": "dura",
        "size": 2
      },
      {
        "word": "veio",
        "size": 2
      },
      {
        "word": "ruim",
        "size": 2
      },
      {
        "word": "fiz",
        "size": 2
      },
      {
        "word": "site",
        "size": 2
      }
    ]
  }
};
