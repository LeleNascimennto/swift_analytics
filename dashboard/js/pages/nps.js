/* ═══════════════════════════════════════════════════════════════════
   SWIFT ANALYTICS — Page: NPS Analytics
   Evolução temporal (real), variantes por gestão, sazonalidade (real).
   ═══════════════════════════════════════════════════════════════════ */
window.Swift = window.Swift || {};
Swift.Pages = Swift.Pages || {};

Swift.Pages.nps = (function () {
  const U = Swift.Utils, C = Swift.Charts;
  const COR_EXT = '#2563EB', COR_GER = '#EC4899';

  function render() {
    const tc = C.getThemeColors();
    const lojas = U.getFilteredLojas();
    const k = U.aggKpis(lojas);

    setEl('nps-kpi-trad', U.fmt(k.nps_trad, 0));
    setEl('nps-kpi-textual', U.fmt(k.nps_textual, 0));
    setEl('nps-kpi-hibrido', U.fmt(k.nps_hibrido, 0));
    const d = k.nps_hibrido - k.nps_trad;
    setEl('nps-kpi-delta', (d > 0 ? '+' : '') + d.toFixed(1));

    // Evolução temporal real (série mensal global do período)
    const s = DATA.serie_mensal;
    C.create('chart-nps-evolution', {
      type: 'line',
      data: { labels: s.meses, datasets: [
        { label: 'NPS Tradicional', data: s.nps_trad, borderColor: '#3B82F6', backgroundColor: 'rgba(59,130,246,0.06)', fill: true, tension: 0.35, pointRadius: 2.5, borderWidth: 2.5 },
        { label: 'NPS Textual', data: s.nps_textual, borderColor: '#F59E0B', tension: 0.35, pointRadius: 2.5, borderWidth: 2.5, borderDash: [4, 2] },
        { label: 'NPS Híbrido', data: s.nps_hibrido, borderColor: '#E30613', backgroundColor: 'rgba(227,6,19,0.05)', fill: true, tension: 0.35, pointRadius: 2.5, borderWidth: 2.5 }
      ] },
      options: lineOpts(tc, '', true)
    });

    // Variantes por gestão (das lojas filtradas)
    const reg = U.aggKpis(lojas.filter(l => l.flag === 'regular'));
    const toc = U.aggKpis(lojas.filter(l => l.flag === 'tocadora'));
    C.create('chart-nps-variantes', {
      type: 'bar',
      data: { labels: ['NPS Tradicional', 'NPS Textual', 'NPS Híbrido'], datasets: [
        { label: 'Externo', data: [reg.nps_trad, reg.nps_textual, reg.nps_hibrido], backgroundColor: COR_EXT, borderRadius: 6, borderSkipped: false },
        { label: 'Germinare', data: [toc.nps_trad, toc.nps_textual, toc.nps_hibrido], backgroundColor: COR_GER, borderRadius: 6, borderSkipped: false }
      ] },
      options: { responsive: true, plugins: { legend: { position: 'bottom', labels: { color: tc.labelColor, font: { size: 11 } } }, tooltip: { ...C.defaultOptions().plugins.tooltip, callbacks: { label: ctx => `${ctx.dataset.label}: ${U.fmt(ctx.parsed.y, 1)}` } } }, scales: { x: { grid: { display: false }, ticks: { color: tc.tickColor, font: { size: 11, weight: '500' } } }, y: { beginAtZero: true, max: 100, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } } } }
    });

    // Sazonalidade real (NPS híbrido médio por mês do calendário + volume)
    const sz = DATA.sazonalidade;
    C.create('chart-nps-sazonalidade', {
      type: 'bar',
      data: { labels: sz.meses_nome, datasets: [
        { label: 'NPS Híbrido médio', data: sz.nps_medio, backgroundColor: sz.nps_medio.map(v => v >= 75 ? 'rgba(16,185,129,0.75)' : v >= 50 ? 'rgba(245,158,11,0.75)' : 'rgba(239,68,68,0.75)'), borderRadius: 6, borderSkipped: false, yAxisID: 'y' },
        { label: 'Volume de avaliações', data: sz.volume, type: 'line', borderColor: '#3B82F6', backgroundColor: 'transparent', tension: 0.3, pointRadius: 3, borderWidth: 2, yAxisID: 'y2' }
      ] },
      options: { responsive: true, plugins: { legend: { position: 'bottom', labels: { color: tc.labelColor, font: { size: 11 } } }, tooltip: C.defaultOptions().plugins.tooltip }, scales: {
        x: { grid: { display: false }, ticks: { color: tc.tickColor, font: { size: 11 } } },
        y: { beginAtZero: true, max: 100, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } }, title: { display: true, text: 'NPS', color: tc.labelColor, font: { size: 11 } } },
        y2: { position: 'right', grid: { display: false }, ticks: { color: '#3B82F6', font: { size: 10 } }, title: { display: true, text: 'Avaliações', color: '#3B82F6', font: { size: 11 } } }
      } }
    });
  }

  function lineOpts(tc, sfx, npsScale) {
    return { responsive: true, plugins: { legend: { position: 'bottom', labels: { color: tc.labelColor, font: { size: 11 } } }, tooltip: { ...C.defaultOptions().plugins.tooltip, callbacks: { label: ctx => `${ctx.dataset.label}: ${U.fmt(ctx.parsed.y, 1)}` } } }, scales: { x: { grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } }, y: { min: npsScale ? 0 : undefined, max: npsScale ? 100 : undefined, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, callback: v => v + (sfx || ''), font: { size: 11 } } } } };
  }
  function setEl(id, v) { const el = document.getElementById(id); if (el) el.textContent = v; }

  return { render };
})();
