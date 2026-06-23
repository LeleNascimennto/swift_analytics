/* ═══════════════════════════════════════════════════════════════════
   SWIFT ANALYTICS — Page: Temas & Sentimentos
   Rankings, divergências, NPS por tema e nuvens (gestão × sentimento).
   ═══════════════════════════════════════════════════════════════════ */
window.Swift = window.Swift || {};
Swift.Pages = Swift.Pages || {};

Swift.Pages.temas = (function () {
  const U = Swift.Utils, C = Swift.Charts;
  const COR_EXT = '#2563EB', COR_GER = '#EC4899';

  function render() {
    const tc = C.getThemeColors();
    const lojas = U.getFilteredLojas();
    renderProblemas(tc, lojas);
    renderElogios(tc, lojas);
    renderNpsTema(tc, lojas);
    renderLinguagem(tc);
  }

  function renderProblemas(tc, lojas) {
    const rk = U.aggCounts(lojas, 'prob_counts');
    C.create('chart-ranking-problemas', {
      type: 'bar',
      data: { labels: rk.categorias, datasets: [{ data: rk.contagens, backgroundColor: C.PROBLEM_COLORS, borderRadius: 6, borderSkipped: false }] },
      options: { ...hbarOpts(tc), plugins: { legend: { display: false }, tooltip: { ...C.defaultOptions().plugins.tooltip, callbacks: { label: ctx => U.fmtInt(ctx.parsed.x) + ' comentários' } } } }
    });
    // Evolução temporal dos problemas (visão global do período)
    const ev = DATA.evolucao_problemas;
    const cats = Object.keys(ev).filter(k => k !== 'meses');
    C.create('chart-evolucao-problemas', {
      type: 'line',
      data: { labels: ev.meses, datasets: cats.map((c, i) => ({ label: c, data: ev[c], borderColor: C.PROBLEM_COLORS[i % C.PROBLEM_COLORS.length], tension: 0.35, pointRadius: 2, borderWidth: 2 })) },
      options: lineOpts(tc, '%')
    });
  }

  function renderElogios(tc, lojas) {
    const rk = U.aggCounts(lojas, 'elog_counts');
    C.create('chart-ranking-elogios', {
      type: 'bar',
      data: { labels: rk.categorias, datasets: [{ data: rk.contagens, backgroundColor: C.PRAISE_COLORS, borderRadius: 6, borderSkipped: false }] },
      options: { ...hbarOpts(tc), plugins: { legend: { display: false }, tooltip: { ...C.defaultOptions().plugins.tooltip, callbacks: { label: ctx => U.fmtInt(ctx.parsed.x) + ' comentários' } } } }
    });
  }

  function renderNpsTema(tc, lojas) {
    const reg = lojas.filter(l => l.flag === 'regular');
    const toc = lojas.filter(l => l.flag === 'tocadora');
    const global = U.aggTemaNeg(lojas);
    if (!global.length) return;
    const corNeg = v => v >= 25 ? '#EF4444' : v >= 12 ? '#F59E0B' : '#10B981';

    C.create('chart-nps-tema-global', {
      type: 'bar',
      data: { labels: global.map(t => t.tema), datasets: [{ data: global.map(t => t.neg), backgroundColor: global.map(t => corNeg(t.neg)), borderRadius: 6, borderSkipped: false }] },
      options: { indexAxis: 'y', responsive: true, plugins: { legend: { display: false }, tooltip: { ...C.defaultOptions().plugins.tooltip, callbacks: { label: ctx => `${U.fmt(ctx.parsed.x, 1)}% negativo` } } }, scales: { x: { min: 0, max: 100, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, callback: v => v + '%', font: { size: 11 } } }, y: { grid: { display: false }, ticks: { color: tc.tickColor, font: { size: 11, weight: '500' } } } } }
    });

    const rTema = U.aggTemaNeg(reg), tTema = U.aggTemaNeg(toc);
    const tmap = {}; tTema.forEach(t => tmap[t.tema] = t.neg);
    C.create('chart-nps-tema-gestao', {
      type: 'bar',
      data: { labels: rTema.map(t => t.tema), datasets: [
        { label: 'Externo', data: rTema.map(t => t.neg), backgroundColor: COR_EXT, borderRadius: 4, borderSkipped: false },
        { label: 'Germinare', data: rTema.map(t => tmap[t.tema] ?? null), backgroundColor: COR_GER, borderRadius: 4, borderSkipped: false }
      ] },
      options: { responsive: true, plugins: { legend: { position: 'bottom', labels: { color: tc.labelColor, font: { size: 11 } } }, tooltip: { ...C.defaultOptions().plugins.tooltip, callbacks: { label: ctx => `${ctx.dataset.label}: ${U.fmt(ctx.parsed.y, 1)}% negativo` } } }, scales: { x: { grid: { display: false }, ticks: { color: tc.tickColor, font: { size: 11 } } }, y: { min: 0, max: 100, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, callback: v => v + '%', font: { size: 11 } } } } }
    });

    // Piores lojas por tema = maior % negativo (das lojas filtradas)
    let html = '';
    global.forEach(t => {
      const piores = U.pioresPorTema(lojas, t.tema);
      if (!piores.length) return;
      html += `<div class="nps-tema-card"><h4>${U.escapeHtml(t.tema)}</h4><div class="nps-tema-list">`;
      piores.forEach((l, i) => {
        html += `<div class="nps-tema-item"><span class="rank">${i + 1}.</span><span class="loja-name">${U.escapeHtml(l.loja)}</span><span class="nps-value" style="color:${corNeg(l.neg)}">${U.fmt(l.neg, 0)}% neg</span><span class="n-count">(n=${l.n})</span></div>`;
      });
      html += '</div></div>';
    });
    setEl('nps-tema-lojas-grid', html);
  }

  function renderLinguagem(tc) {
    const tam = DATA.resumo.tamanho_por_sentimento || [];
    C.create('chart-comment-length', {
      type: 'bar',
      data: { labels: tam.map(t => t.sentimento.charAt(0).toUpperCase() + t.sentimento.slice(1)), datasets: [{ data: tam.map(t => t.media_palavras), backgroundColor: tam.map(t => t.sentimento === 'negativo' ? '#EF4444' : t.sentimento === 'neutro' ? '#F59E0B' : '#10B981'), borderRadius: 6, borderSkipped: false }] },
      options: { indexAxis: 'y', responsive: true, plugins: { legend: { display: false }, tooltip: { ...C.defaultOptions().plugins.tooltip, callbacks: { label: ctx => `Média: ${U.fmt(ctx.parsed.x, 1)} palavras` } } }, scales: { x: { beginAtZero: true, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } }, title: { display: true, text: 'Média de palavras', color: tc.labelColor, font: { size: 11 } } }, y: { grid: { display: false }, ticks: { color: tc.tickColor, font: { size: 11, weight: '600' } } } } }
    });
    const nv = DATA.nuvens || {};
    cloud('wc-regular-positivo', nv.regular_positivo);
    cloud('wc-regular-negativo', nv.regular_negativo);
    cloud('wc-tocadora-positivo', nv.tocadora_positivo);
    cloud('wc-tocadora-negativo', nv.tocadora_negativo);
  }

  function cloud(id, words) {
    const el = document.getElementById(id); if (!el) return;
    el.innerHTML = (words || []).map(w => `<span class="word size-${w.size}">${U.escapeHtml(w.word)}</span>`).join('') || '<span class="word size-1">sem dados</span>';
  }
  function hbarOpts(tc, sfx) { return { indexAxis: 'y', responsive: true, plugins: { legend: { display: false }, tooltip: C.defaultOptions().plugins.tooltip }, scales: { x: { grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, callback: v => v + (sfx || ''), font: { size: 11 } } }, y: { grid: { display: false }, ticks: { color: tc.tickColor, font: { size: 11, weight: '500' } } } } }; }
  function lineOpts(tc, sfx) { return { responsive: true, plugins: { legend: { position: 'bottom', labels: { color: tc.labelColor, font: { size: 11 } } }, tooltip: C.defaultOptions().plugins.tooltip }, scales: { x: { grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } }, y: { beginAtZero: true, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, callback: v => v + (sfx || ''), font: { size: 11 } } } } }; }
  function setEl(id, html) { const el = document.getElementById(id); if (el) el.innerHTML = html; }

  return { render };
})();
