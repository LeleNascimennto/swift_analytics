/* ═══════════════════════════════════════════════════════════════════
   SWIFT ANALYTICS — Page: Dados e Modelo (new page)
   Data quality, AI transparency, co-occurrence, hypotheses.
   Absorbs the former Análises Avançadas content.
   ═══════════════════════════════════════════════════════════════════ */

window.Swift = window.Swift || {};
Swift.Pages  = Swift.Pages  || {};

Swift.Pages.dados = (function () {
  const { escapeHtml, fmt, fmtInt } = Swift.Utils;
  const C = Swift.Charts;

  function render() {
    const tc = C.getThemeColors();
    renderQualidade(tc);
    renderQualitativo(tc);
    renderDiagnosticos(tc);
    renderTendencias(tc);
    renderCoocorrencia(tc);
    renderHipoteses(tc);
  }

  function renderQualidade(tc) {
    const dq = DATA.data_qualidade || {
      total_registros:        450000,
      registros_com_comentario: 116605,
      comentarios_validos:    112300,
      classificados_modelo:   116605,
      pct_baixa_confianca:    42.29,
      periodo_inicio:         '2025-01',
      periodo_fim:            '2026-05',
      total_lojas:            227,
      ufs_cobertas:           4
    };

    const cards = [
      { label: 'Total Registros',       value: fmtInt(dq.total_registros),          color: 'var(--clr-info)' },
      { label: 'Com Comentário',         value: fmtInt(dq.registros_com_comentario), color: 'var(--clr-positive)' },
      { label: 'Comentários Válidos',    value: fmtInt(dq.comentarios_validos),      color: 'var(--clr-positive)' },
      { label: 'Classificados pelo Modelo', value: fmtInt(dq.classificados_modelo), color: 'var(--clr-brand)' },
      { label: '% Baixa Confiança',      value: fmt(dq.pct_baixa_confianca) + '%',  color: 'var(--clr-neutral)' },
      { label: 'Total Lojas',            value: dq.total_lojas,                       color: 'var(--tx-secondary)' },
      { label: 'UFs Cobertas',           value: dq.ufs_cobertas,                      color: 'var(--tx-secondary)' },
      { label: 'Período',                value: `${dq.periodo_inicio} → ${dq.periodo_fim}`, color: 'var(--tx-secondary)' }
    ];

    const grid = document.getElementById('qualidade-grid');
    if (grid) {
      grid.innerHTML = cards.map(c => `
        <div class="kpi-card" style="--kpi-accent:${c.color}">
          <span class="kpi-label">${escapeHtml(c.label)}</span>
          <span class="kpi-value" style="color:${c.color}">${escapeHtml(String(c.value))}</span>
        </div>`).join('');
    }

    // Confidence distribution bar chart
    const conf = DATA.confianca_distribuicao || {
      buckets: ['0–20%', '20–40%', '40–60%', '60–80%', '80–100%'],
      contagens: [1200, 8400, 22000, 51000, 34000]
    };

    C.create('chart-confianca-dist', {
      type: 'bar',
      data: {
        labels: conf.buckets,
        datasets: [{
          data: conf.contagens,
          backgroundColor: ['#EF4444', '#F97316', '#F59E0B', '#10B981', '#059669'],
          borderRadius: 6, borderSkipped: false
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: { ...C.defaultOptions().plugins.tooltip, callbacks: { label: ctx => fmtInt(ctx.parsed.y) + ' comentários' } }
        },
        scales: {
          x: { grid: { display: false }, ticks: { color: tc.tickColor, font: { size: 11 } }, title: { display: true, text: 'Faixa de Confiança', color: tc.labelColor, font: { size: 11 } } },
          y: { beginAtZero: true, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } }
        }
      }
    });
  }

  function renderQualitativo(tc) {
    if (!DATA.qualitativo) return;
    const q = DATA.qualitativo;
    const resumo = q.resumo || {};

    const setEl = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    setEl('qual-nps-trad',    fmt(resumo.nps_tradicional_comentarios, 0));
    setEl('qual-nps-textual', fmt(resumo.nps_textual, 0));
    setEl('qual-nps-hibrido', fmt(resumo.nps_hibrido, 0));

    const metEl = document.getElementById('qual-metodologia');
    if (metEl) {
      const corr = resumo.correlacao_transacoes || {};
      metEl.innerHTML = `O <strong>NPS tradicional</strong> preserva a nota original. O <strong>NPS textual</strong> vem do sentimento do comentário.
        O <strong>NPS híbrido</strong> só altera a leitura quando a confiança do modelo é suficiente.
        Correlação transações × NPS híbrido: <strong>${corr.nps_hibrido || '—'}</strong>.`;
    }

    // Bubble chart: NPS Híbrido × Transações
    const pontos   = q.scatter_transacoes || [];
    const regular  = pontos.filter(p => p.flag === 'REGULAR');
    const tocadora = pontos.filter(p => p.flag === 'TOCADORA');
    const toBubble = p => ({
      x: p.transacoes, y: p.nps_hibrido,
      r: Math.max(4, Math.min(14, Math.sqrt(p.avaliacoes_ponderadas || 1) / 4)),
      loja: p.centro_nv2, prioridade: p.indice_prioridade, pctNeg: p.pct_negativo
    });

    C.create('chart-nps-transacoes', {
      type: 'bubble',
      data: {
        datasets: [
          { label: 'REGULAR',  data: regular.map(toBubble),  backgroundColor: 'rgba(59,130,246,0.55)' },
          { label: 'TOCADORA', data: tocadora.map(toBubble), backgroundColor: 'rgba(139,92,246,0.58)' }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom', labels: { color: tc.labelColor, font: { size: 11 } } },
          tooltip: { ...C.defaultOptions().plugins.tooltip, callbacks: {
            label: ctx => `${ctx.raw.loja}: NPS híbrido ${ctx.raw.y}, transações ${Math.round(ctx.raw.x).toLocaleString('pt-BR')}, negativo ${ctx.raw.pctNeg}%`
          }}
        },
        scales: {
          x: { title: { display: true, text: 'Transações', color: tc.labelColor, font: { size: 11 } }, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } },
          y: { title: { display: true, text: 'NPS Híbrido', color: tc.labelColor, font: { size: 11 } }, min: 0, max: 100, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } }
        }
      }
    });

    // Priority & hidden risk tables
    const renderRows = (id, rows, cols) => {
      const tbody = document.getElementById(id);
      if (!tbody) return;
      tbody.innerHTML = rows.length
        ? rows.map(row => `<tr>${cols.map(col => `<td>${escapeHtml(col(row))}</td>`).join('')}</tr>`).join('')
        : '<tr><td colspan="4">Sem lojas</td></tr>';
    };

    renderRows('qual-top-prioridade', q.top_prioridade || [], [
      r => r.centro_nv2,
      r => fmt(r.indice_prioridade, 1),
      r => fmt(r.nps_hibrido, 1),
      r => fmt(r.pct_negativo, 1) + '%'
    ]);
    renderRows('qual-risco-oculto', q.risco_oculto || [], [
      r => r.centro_nv2,
      r => fmt(r.nps_tradicional, 1),
      r => fmt(r.pct_negativo, 1) + '%',
      r => fmt(r.severidade_media, 2)
    ]);
  }

  function renderDiagnosticos(tc) {
    const diag = DATA.qualitativo?.resumo?.diagnosticos;
    if (!diag) return;

    const labels = Object.keys(diag).map(k => k.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()));
    const values = Object.values(diag);

    C.create('chart-diagnosticos', {
      type: 'bar',
      data: {
        labels,
        datasets: [{ data: values, backgroundColor: C.DATA_COLORS.slice(0, labels.length), borderRadius: 4, borderSkipped: false }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: { legend: { display: false }, tooltip: C.defaultOptions().plugins.tooltip },
        scales: {
          x: { beginAtZero: true, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } },
          y: { grid: { display: false }, ticks: { color: tc.tickColor, font: { size: 10 } } }
        }
      }
    });
  }

  function renderTendencias(tc) {
    const av = DATA.avancadas;
    if (!av) return;

    if (av.deterioracao?.lojas?.length > 0) {
      C.create('chart-deterioracao', {
        type: 'line',
        data: {
          labels: av.deterioracao.meses,
          datasets: av.deterioracao.lojas.map((loja, i) => ({
            label: loja, data: av.deterioracao.valores[loja],
            borderColor: C.TREND_COLORS[i % C.TREND_COLORS.length], tension: 0.3, pointRadius: 3, borderWidth: 2
          }))
        },
        options: {
          responsive: true,
          plugins: { legend: { position: 'bottom', labels: { color: tc.labelColor, font: { size: 11 } } }, tooltip: C.defaultOptions().plugins.tooltip },
          scales: {
            x: { grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } },
            y: { grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } }, title: { display: true, text: '% Negativo', color: tc.labelColor, font: { size: 11 } } }
          }
        }
      });
    }

    if (av.melhora?.lojas?.length > 0) {
      C.create('chart-melhora', {
        type: 'line',
        data: {
          labels: av.melhora.meses,
          datasets: av.melhora.lojas.map((loja, i) => ({
            label: loja, data: av.melhora.valores[loja],
            borderColor: C.IMPROVE_COLORS[i % C.IMPROVE_COLORS.length], tension: 0.3, pointRadius: 3, borderWidth: 2
          }))
        },
        options: {
          responsive: true,
          plugins: { legend: { position: 'bottom', labels: { color: tc.labelColor, font: { size: 11 } } }, tooltip: C.defaultOptions().plugins.tooltip },
          scales: {
            x: { grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } },
            y: { grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } }, title: { display: true, text: '% Negativo', color: tc.labelColor, font: { size: 11 } } }
          }
        }
      });
    }

    const predEl = document.getElementById('predicao-risco');
    if (predEl && av.deterioracao) {
      const n = av.deterioracao.lojas.length;
      predEl.textContent = n > 0
        ? `${n} loja(s) com tendência de aumento no % negativo: ${av.deterioracao.lojas.join(', ')}.`
        : 'Nenhuma loja apresentou tendência consistente de deterioração no período.';
    }
  }

  function renderCoocorrencia(tc) {
    const av = DATA.avancadas;
    if (!av?.coocorrencia?.length) return;

    C.create('chart-coocorrencia', {
      type: 'bar',
      data: {
        labels: av.coocorrencia.map(c => c.par),
        datasets: [{ data: av.coocorrencia.map(c => c.freq), backgroundColor: C.DATA_COLORS.slice(0, av.coocorrencia.length), borderRadius: 4 }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: { legend: { display: false }, tooltip: C.defaultOptions().plugins.tooltip },
        scales: {
          x: { grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } }, title: { display: true, text: 'Frequência', color: tc.labelColor, font: { size: 11 } } },
          y: { grid: { display: false }, ticks: { color: tc.tickColor, font: { size: 11 } } }
        }
      }
    });

    const coocInsights = document.getElementById('coocorrencia-insights');
    if (coocInsights) {
      coocInsights.innerHTML = av.coocorrencia.map(c =>
        `<div class="cooc-card"><div class="pair">${escapeHtml(c.par)} (${c.freq}×)</div><div class="desc">${escapeHtml(c.desc)}</div></div>`
      ).join('');
    }
  }

  function renderHipoteses(tc) {
    const hipEl = document.getElementById('hipoteses-grid');
    if (!hipEl) return;

    const hip = DATA.qualitativo?.hipoteses || [
      { titulo: 'Comentários longos são mais negativos?', resultado: 'Sim. Comentários negativos têm média de caracteres maior que os positivos.', icon: '📏' },
      { titulo: 'Volume de vendas explica o NPS?', resultado: 'Não. Correlação fraca entre transações e NPS híbrido.', icon: '📊' },
      { titulo: 'Sazonalidade afeta sentimento?', resultado: 'Requer mais meses de dados para conclusão estatística.', icon: '📅' },
      { titulo: 'Modelo AI altera o NPS significativamente?', resultado: `${DATA.impacto_nps?.total_divergentes_pct || '~42'}% dos comentários divergem da nota NPS original.`, icon: '🤖' },
      { titulo: 'Promotores podem esconder insatisfação?', resultado: `${DATA.divergencias?.promotor_negativo?.toLocaleString() || '—'} promotores (nota 9-10) emitiram comentários negativos.`, icon: '⚠️' },
      { titulo: 'Regular vs Tocadora é estatisticamente diferente?', resultado: `Mann-Whitney p=${DATA.gestao?.p_value || '—'}. ${DATA.gestao?.significativo ? 'Diferença significativa.' : 'Diferença não significativa.'}`, icon: '🔬' }
    ];

    hipEl.innerHTML = hip.map(h => `
      <div class="hipotese-card">
        <div class="hip-icon">${h.icon || '❓'}</div>
        <div class="hip-title">${escapeHtml(h.titulo)}</div>
        <div class="hip-resultado">${escapeHtml(h.resultado)}</div>
      </div>`).join('');
  }

  return { render };
})();
