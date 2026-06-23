/* ═══════════════════════════════════════════════════════════════════
   SWIFT ANALYTICS — Page: Gestão (Externo vs Germinare)
   Cores: Externo = azul (#2563EB), Germinare = pink (#EC4899).
   ═══════════════════════════════════════════════════════════════════ */
window.Swift = window.Swift || {};
Swift.Pages = Swift.Pages || {};

Swift.Pages.gestao = (function () {
  const U = Swift.Utils, C = Swift.Charts;
  const COR_EXT = '#2563EB', COR_GER = '#EC4899';

  function render() {
    const tc = C.getThemeColors();
    const lojas = U.getFilteredLojas();
    const reg = lojas.filter(l => l.flag === 'regular');
    const toc = lojas.filter(l => l.flag === 'tocadora');
    const kReg = U.aggKpis(reg), kToc = U.aggKpis(toc);

    setEl('n-lojas-regular', `${reg.length} lojas`);
    setEl('n-lojas-tocadora', `${toc.length} lojas`);
    setEl('metrics-regular', metricsHtml(kReg));
    setEl('metrics-tocadora', metricsHtml(kToc));

    // Sentimento por gestão (empilhado)
    C.create('chart-gestao-sentimento', {
      type: 'bar',
      data: {
        labels: ['Externo (Regular)', 'Germinare (Tocadora)'],
        datasets: [
          { label: 'Positivo', data: [kReg.pct_pos, kToc.pct_pos], backgroundColor: '#10B981' },
          { label: 'Neutro', data: [kReg.pct_neu, kToc.pct_neu], backgroundColor: '#F59E0B' },
          { label: 'Negativo', data: [kReg.pct_neg, kToc.pct_neg], backgroundColor: '#EF4444' }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'bottom', labels: { color: tc.labelColor, font: { size: 11 } } }, tooltip: { ...C.defaultOptions().plugins.tooltip, callbacks: { label: ctx => `${ctx.dataset.label}: ${U.fmt(ctx.parsed.y, 1)}%` } } },
        scales: { x: { stacked: true, grid: { display: false }, ticks: { color: tc.tickColor, font: { size: 11, weight: '500' } } }, y: { stacked: true, max: 100, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, callback: v => v + '%', font: { size: 11 } } } }
      }
    });

    // Top 5 problemas por gestão — share (%) dos comentários de problema de cada gestão
    // (comparável entre Externo e Germinare apesar dos volumes diferentes)
    const rkReg = U.aggCounts(reg, 'prob_counts', 8), rkToc = U.aggCounts(toc, 'prob_counts', 8);
    const totReg = rkReg.contagens.reduce((s, v) => s + v, 0) || 1;
    const totToc = rkToc.contagens.reduce((s, v) => s + v, 0) || 1;
    const mapReg = {}; rkReg.categorias.forEach((c, i) => mapReg[c] = Math.round(100 * rkReg.contagens[i] / totReg));
    const mapToc = {}; rkToc.categorias.forEach((c, i) => mapToc[c] = Math.round(100 * rkToc.contagens[i] / totToc));
    const cats = [...new Set([...rkReg.categorias.slice(0, 5), ...rkToc.categorias.slice(0, 5)])].slice(0, 6);
    C.create('chart-gestao-problemas', {
      type: 'bar',
      data: {
        labels: cats,
        datasets: [
          { label: 'Externo', data: cats.map(c => mapReg[c] || 0), backgroundColor: COR_EXT, borderRadius: 4, borderSkipped: false },
          { label: 'Germinare', data: cats.map(c => mapToc[c] || 0), backgroundColor: COR_GER, borderRadius: 4, borderSkipped: false }
        ]
      },
      options: {
        indexAxis: 'y', responsive: true,
        plugins: { legend: { position: 'bottom', labels: { color: tc.labelColor, font: { size: 11 } } }, tooltip: { ...C.defaultOptions().plugins.tooltip, callbacks: { label: ctx => `${ctx.dataset.label}: ${ctx.parsed.x}%` } } },
        scales: { x: { grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } }, y: { grid: { display: false }, ticks: { color: tc.tickColor, font: { size: 11 } } } }
      }
    });

    // Scatter NPS híbrido × % negativo por loja
    C.create('chart-gestao-scatter', {
      type: 'scatter',
      data: {
        datasets: [
          { label: 'Externo (Regular)', data: reg.map(l => ({ x: l.nps_hibrido, y: l.pct_neg, loja: l.nome })), backgroundColor: COR_EXT + '99', pointRadius: 5 },
          { label: 'Germinare (Tocadora)', data: toc.map(l => ({ x: l.nps_hibrido, y: l.pct_neg, loja: l.nome })), backgroundColor: COR_GER + '99', pointRadius: 5 }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'bottom', labels: { color: tc.labelColor, font: { size: 11 } } }, tooltip: { ...C.defaultOptions().plugins.tooltip, callbacks: { label: ctx => `${ctx.raw.loja}: NPS Híb ${U.fmt(ctx.raw.x, 1)}, ${U.fmt(ctx.raw.y, 1)}% neg` } } },
        scales: {
          x: { min: 0, max: 100, title: { display: true, text: 'NPS Híbrido', color: tc.labelColor, font: { size: 11 } }, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } },
          y: { title: { display: true, text: '% Negativo', color: tc.labelColor, font: { size: 11 } }, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, callback: v => v + '%', font: { size: 11 } } }
        }
      }
    });
  }

  function metricsHtml(k) {
    const cN = v => U.colorForNPS(v);
    return `
      <div class="gestao-metric-item"><div class="value" style="color:${cN(k.nps_trad)}">${U.fmt(k.nps_trad, 1)}</div><div class="label">NPS Trad</div></div>
      <div class="gestao-metric-item"><div class="value" style="color:${cN(k.nps_textual)}">${U.fmt(k.nps_textual, 1)}</div><div class="label">NPS Textual</div></div>
      <div class="gestao-metric-item"><div class="value" style="color:${cN(k.nps_hibrido)}">${U.fmt(k.nps_hibrido, 1)}</div><div class="label">NPS Híbrido</div></div>
      <div class="gestao-metric-item"><div class="value" style="color:var(--clr-positive)">${U.fmt(k.pct_pos, 1)}%</div><div class="label">Positivo</div></div>
      <div class="gestao-metric-item"><div class="value" style="color:var(--clr-negative)">${U.fmt(k.pct_neg, 1)}%</div><div class="label">Negativo</div></div>
      <div class="gestao-metric-item"><div class="value">${k.lojas}</div><div class="label">Lojas</div></div>`;
  }
  function setEl(id, html) { const el = document.getElementById(id); if (el) el.innerHTML = html; }

  return { render };
})();
