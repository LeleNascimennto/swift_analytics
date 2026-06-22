/* ═══════════════════════════════════════════════════════════════════
   SWIFT ANALYTICS — Page: Gestão (Regular vs Tocadora)
   ═══════════════════════════════════════════════════════════════════ */

window.Swift = window.Swift || {};
Swift.Pages  = Swift.Pages  || {};

Swift.Pages.gestao = (function () {
  const { fmt, fmtPct, escapeHtml, getFilteredLojas } = Swift.Utils;
  const C = Swift.Charts;

  function render() {
    const tc = C.getThemeColors();
    const g  = DATA.gestao;
    const f  = Swift.State.filters;
    const filteredLojas = getFilteredLojas();

    let regularData, tocadoraData;

    if (f.uf.length || f.loja.length) {
      const regLojas = filteredLojas.filter(l => l.flag === 'regular');
      const tocLojas = filteredLojas.filter(l => l.flag === 'tocadora');
      const avg = (arr, k) => arr.length ? arr.reduce((s, l) => s + (parseFloat(l[k]) || 0), 0) / arr.length : 0;
      regularData = {
        nps_tradicional:  avg(regLojas, 'nps_trad').toFixed(1),
        nps_ajustado:     avg(regLojas, 'nps_ajust').toFixed(1),
        pct_positivo:     avg(regLojas, 'pct_pos').toFixed(1),
        pct_neutro:       (100 - avg(regLojas, 'pct_pos') - avg(regLojas, 'pct_neg')).toFixed(1),
        pct_negativo:     avg(regLojas, 'pct_neg').toFixed(1),
        total_lojas:      regLojas.length,
        top_problemas:    g.regular.top_problemas,
        top_problemas_pct:g.regular.top_problemas_pct
      };
      tocadoraData = {
        nps_tradicional:  avg(tocLojas, 'nps_trad').toFixed(1),
        nps_ajustado:     avg(tocLojas, 'nps_ajust').toFixed(1),
        pct_positivo:     avg(tocLojas, 'pct_pos').toFixed(1),
        pct_neutro:       (100 - avg(tocLojas, 'pct_pos') - avg(tocLojas, 'pct_neg')).toFixed(1),
        pct_negativo:     avg(tocLojas, 'pct_neg').toFixed(1),
        total_lojas:      tocLojas.length,
        top_problemas:    g.tocadora.top_problemas,
        top_problemas_pct:g.tocadora.top_problemas_pct
      };
    } else {
      regularData  = g.regular;
      tocadoraData = g.tocadora;
    }

    setEl('n-lojas-regular',  `${regularData.total_lojas} lojas`);
    setEl('n-lojas-tocadora', `${tocadoraData.total_lojas} lojas`);

    setEl('metrics-regular',  metricsHtml(regularData));
    setEl('metrics-tocadora', metricsHtml(tocadoraData));

    // Chart: Sentiment stacked bar
    C.create('chart-gestao-sentimento', {
      type: 'bar',
      data: {
        labels: ['Externo (Regular)', 'Germinare (Tocadora)'],
        datasets: [
          { label: 'Positivo', data: [parseFloat(regularData.pct_positivo), parseFloat(tocadoraData.pct_positivo)], backgroundColor: '#10B981', borderRadius: 0 },
          { label: 'Neutro',   data: [parseFloat(regularData.pct_neutro),   parseFloat(tocadoraData.pct_neutro)],   backgroundColor: '#F59E0B' },
          { label: 'Negativo', data: [parseFloat(regularData.pct_negativo), parseFloat(tocadoraData.pct_negativo)], backgroundColor: '#EF4444', borderRadius: 0 }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'bottom', labels: { color: tc.labelColor, font: { size: 11 } } }, tooltip: C.defaultOptions().plugins.tooltip },
        scales: {
          x: { stacked: true, grid: { display: false }, ticks: { color: tc.tickColor, font: { size: 11, weight: '500' } } },
          y: { stacked: true, max: 100, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, callback: v => v + '%', font: { size: 11 } } }
        }
      }
    });

    // Chart: Top problems grouped horizontal bar
    const labels = g.regular.top_problemas.slice(0, 5);
    C.create('chart-gestao-problemas', {
      type: 'bar',
      data: {
        labels,
        datasets: [
          { label: 'Externo',   data: g.regular.top_problemas_pct.slice(0, 5),  backgroundColor: 'rgba(59,130,246,0.75)',  borderRadius: 4, borderSkipped: false },
          { label: 'Germinare', data: g.tocadora.top_problemas_pct.slice(0, 5), backgroundColor: 'rgba(139,92,246,0.75)', borderRadius: 4, borderSkipped: false }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: { legend: { position: 'bottom', labels: { color: tc.labelColor, font: { size: 11 } } }, tooltip: C.defaultOptions().plugins.tooltip },
        scales: {
          x: { grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } },
          y: { grid: { display: false }, ticks: { color: tc.tickColor, font: { size: 11 } } }
        }
      }
    });

    // Chart: Scatter NPS Híbrido × % Negativo
    const pontos = DATA.qualitativo?.scatter_transacoes || [];
    if (pontos.length) {
      C.create('chart-gestao-scatter', {
        type: 'scatter',
        data: {
          datasets: [
            {
              label: 'Externo (Regular)',
              data: pontos.filter(p => p.flag === 'REGULAR').map(p => ({ x: p.nps_hibrido, y: p.pct_negativo, loja: p.centro_nv2 })),
              backgroundColor: 'rgba(59,130,246,0.55)',
              pointRadius: 5
            },
            {
              label: 'Germinare (Tocadora)',
              data: pontos.filter(p => p.flag === 'TOCADORA').map(p => ({ x: p.nps_hibrido, y: p.pct_negativo, loja: p.centro_nv2 })),
              backgroundColor: 'rgba(139,92,246,0.55)',
              pointRadius: 5
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: 'bottom', labels: { color: tc.labelColor, font: { size: 11 } } },
            tooltip: { ...C.defaultOptions().plugins.tooltip, callbacks: { label: ctx => `${ctx.raw.loja}: NPS Híb ${fmt(ctx.raw.x)}, % Neg ${ctx.raw.y}%` } }
          },
          scales: {
            x: { min: 0, max: 100, title: { display: true, text: 'NPS Híbrido', color: tc.labelColor, font: { size: 11 } }, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } },
            y: { title: { display: true, text: '% Negativo', color: tc.labelColor, font: { size: 11 } }, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, callback: v => v + '%', font: { size: 11 } } }
          }
        }
      });
    }

    // Conclusion
    const diffNps = parseFloat(tocadoraData.nps_tradicional) - parseFloat(regularData.nps_tradicional);
    const diffNeg = parseFloat(tocadoraData.pct_negativo)    - parseFloat(regularData.pct_negativo);
    const melhorNps  = diffNps > 0 ? 'Germinare' : 'Externo';
    const melhorSent = diffNeg < 0 ? 'Germinare' : 'Externo';

    const conclusEl = document.getElementById('gestao-conclusao');
    if (conclusEl) conclusEl.innerHTML = `
      <h4>Conclusão — Existe diferença significativa?</h4>
      <p><strong>${g.significativo ? 'Sim' : 'Não'}.</strong> Mann-Whitney p=${g.p_value}.
      ${g.significativo ? 'A diferença entre os dois tipos de gestão é estatisticamente significativa.' : 'Diferença não significativa.'}</p>
      <p><strong>${melhorNps}</strong> tem NPS ${Math.abs(diffNps).toFixed(1)} pontos maior.
      <strong>${melhorSent}</strong> tem menor % negativo (diferença de ${Math.abs(diffNeg).toFixed(1)}pp).</p>
      <p>Principais reclamações — <strong>Externo:</strong> ${g.regular.top_problemas.slice(0, 3).map(escapeHtml).join(', ')}.
      <strong>Germinare:</strong> ${g.tocadora.top_problemas.slice(0, 3).map(escapeHtml).join(', ')}.</p>`;
  }

  function metricsHtml(data) {
    const npsColor = v => parseFloat(v) >= 80 ? 'var(--clr-positive)' : parseFloat(v) >= 60 ? 'var(--clr-neutral)' : 'var(--clr-negative)';
    return `
      <div class="gestao-metric-item"><div class="value" style="color:${npsColor(data.nps_tradicional)}">${data.nps_tradicional}</div><div class="label">NPS Trad</div></div>
      <div class="gestao-metric-item"><div class="value" style="color:${npsColor(data.nps_ajustado)}">${data.nps_ajustado}</div><div class="label">NPS Ajust</div></div>
      <div class="gestao-metric-item"><div class="value" style="color:var(--clr-positive)">${data.pct_positivo}%</div><div class="label">Positivo</div></div>
      <div class="gestao-metric-item"><div class="value" style="color:var(--clr-neutral)">${data.pct_neutro}%</div><div class="label">Neutro</div></div>
      <div class="gestao-metric-item"><div class="value" style="color:var(--clr-negative)">${data.pct_negativo}%</div><div class="label">Negativo</div></div>
      <div class="gestao-metric-item"><div class="value">${data.total_lojas}</div><div class="label">Lojas</div></div>`;
  }

  function setEl(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  return { render };
})();
