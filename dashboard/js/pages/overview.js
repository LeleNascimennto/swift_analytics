/* ═══════════════════════════════════════════════════════════════════
   SWIFT ANALYTICS — Page: Visão Geral
   Tudo recalculado a partir das lojas filtradas.
   ═══════════════════════════════════════════════════════════════════ */
window.Swift = window.Swift || {};
Swift.Pages = Swift.Pages || {};

Swift.Pages.overview = (function () {
  const U = Swift.Utils, C = Swift.Charts;

  function render() {
    const lojas = U.getFilteredLojas();
    const k = U.aggKpis(lojas);
    const tc = C.getThemeColors();

    setKpi('kpi-nps-trad', U.fmt(k.nps_trad, 0));
    setKpi('kpi-nps-textual', U.fmt(k.nps_textual, 0));
    setKpi('kpi-nps-hibrido', U.fmt(k.nps_hibrido, 0));
    setKpi('kpi-positivo', U.fmtPct(k.pct_pos));
    setKpi('kpi-neutro', U.fmtPct(k.pct_neu));
    setKpi('kpi-negativo', U.fmtPct(k.pct_neg));
    setKpi('kpi-total-com', U.fmtInt(k.comentarios));
    accent('kpi-nps-trad', k.nps_trad); accent('kpi-nps-textual', k.nps_textual); accent('kpi-nps-hibrido', k.nps_hibrido);

    // Destaques por região (das lojas filtradas)
    const regs = U.aggPorRegiao(lojas, 'regiao');
    const regEl = document.getElementById('destaques-regiao');
    if (regEl) {
      regEl.innerHTML = regs.map(r => {
        const tipo = r.nps_hibrido >= 75 ? 'positive' : r.nps_hibrido >= 50 ? 'neutral' : 'negative';
        return `<div class="region-card region-${tipo}">
          <div class="region-name">${U.escapeHtml(r.nome)}</div>
          <div class="region-stat">NPS Híb ${U.fmt(r.nps_hibrido, 1)} · ${r.lojas} loja(s) · ${U.fmt(r.pct_neg, 1)}% neg</div>
        </div>`;
      }).join('') || '<div class="region-card">Sem dados para o filtro atual</div>';
    }

    // Sentimento ao longo do tempo
    const temporal = U.aggTemporal(lojas);
    C.create('chart-sentimento-temporal', {
      type: 'line',
      data: {
        labels: temporal.map(t => t.m),
        datasets: [
          { label: 'Positivo', data: temporal.map(t => t.pos), borderColor: '#10B981', backgroundColor: 'rgba(16,185,129,0.08)', fill: true, tension: 0.35, pointRadius: 2, borderWidth: 2 },
          { label: 'Negativo', data: temporal.map(t => t.neg), borderColor: '#EF4444', backgroundColor: 'rgba(239,68,68,0.08)', fill: true, tension: 0.35, pointRadius: 2, borderWidth: 2 }
        ]
      },
      options: lineOpts(tc, '%')
    });

    // Distribuição de sentimento
    C.create('chart-sentimento-dist', {
      type: 'bar',
      data: { labels: ['Positivo', 'Neutro', 'Negativo'], datasets: [{ data: [k.pct_pos, k.pct_neu, k.pct_neg], backgroundColor: ['#10B981', '#F59E0B', '#EF4444'], borderRadius: 6, borderSkipped: false }] },
      options: {
        responsive: true,
        plugins: { legend: { display: false }, tooltip: { ...C.defaultOptions().plugins.tooltip, callbacks: { label: ctx => U.fmtPct(ctx.parsed.y) } } },
        scales: { x: { grid: { display: false }, ticks: { color: tc.tickColor, font: { size: 11, weight: '600' } } }, y: { beginAtZero: true, max: 100, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, callback: v => v + '%', font: { size: 11 } } } }
      }
    });

    // NPS por região (híbrido)
    C.create('chart-regiao-nps', {
      type: 'bar',
      data: {
        labels: regs.map(r => r.nome),
        datasets: [{ data: regs.map(r => r.nps_hibrido), backgroundColor: regs.map(r => U.colorForNPS(r.nps_hibrido).includes('positive') ? 'rgba(16,185,129,0.75)' : U.colorForNPS(r.nps_hibrido).includes('neutral') ? 'rgba(245,158,11,0.75)' : 'rgba(239,68,68,0.75)'), borderRadius: 6, borderSkipped: false }]
      },
      options: {
        indexAxis: 'y', responsive: true,
        plugins: { legend: { display: false }, tooltip: { ...C.defaultOptions().plugins.tooltip, callbacks: { label: ctx => `NPS Híbrido: ${U.fmt(ctx.parsed.x, 1)}` } } },
        scales: { x: { beginAtZero: true, max: 100, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } }, y: { grid: { display: false }, ticks: { color: tc.tickColor, font: { size: 11, weight: '500' } } } }
      }
    });
  }

  function lineOpts(tc, suffix) {
    return {
      responsive: true,
      plugins: { legend: { position: 'bottom', labels: { color: tc.labelColor, font: { size: 11 } } }, tooltip: Swift.Charts.defaultOptions().plugins.tooltip },
      scales: { x: { grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } }, y: { beginAtZero: true, max: 100, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, callback: v => v + (suffix || ''), font: { size: 11 } } } }
    };
  }
  function setKpi(id, v) { const el = document.getElementById(id); if (el) el.textContent = v; }
  function accent(id, nps) { const card = document.getElementById(id)?.closest('.kpi-card'); if (card) card.style.setProperty('--kpi-accent', Swift.Utils.colorForNPS(nps)); }

  return { render };
})();
