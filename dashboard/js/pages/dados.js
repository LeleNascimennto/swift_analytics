/* ═══════════════════════════════════════════════════════════════════
   SWIFT ANALYTICS — Page: Dados e Modelo
   Qualidade, transparência do modelo (confiança) e tendências.
   ═══════════════════════════════════════════════════════════════════ */
window.Swift = window.Swift || {};
Swift.Pages = Swift.Pages || {};

Swift.Pages.dados = (function () {
  const U = Swift.Utils, C = Swift.Charts;
  const COR_EXT = '#2563EB', COR_GER = '#EC4899';
  const DIAG_LABEL = {
    consistente_positivo: 'Consistente Positivo', consistente_neutro: 'Consistente Neutro',
    consistente_negativo: 'Consistente Negativo', baixa_confianca_mantem_nota: 'Baixa Confiança (mantém nota)',
    promotor_com_ressalva: 'Promotor com Ressalva', neutro_positivo: 'Neutro → Positivo',
    promotor_em_risco: 'Promotor em Risco', neutro_negativo: 'Neutro → Negativo',
    detrator_recuperavel: 'Detrator Recuperável', detrator_em_observacao: 'Detrator em Observação'
  };

  function render() {
    const tc = C.getThemeColors();
    const lojas = U.getFilteredLojas();
    const k = U.aggKpis(lojas);
    renderQualidade(tc, lojas, k);
    renderModelo(tc, lojas, k);
    renderTendencias(tc, lojas);
  }

  function renderQualidade(tc, lojas, k) {
    const r = DATA.resumo, m = DATA.meta;
    const cards = [
      { label: 'Comentários (filtro)', value: U.fmtInt(k.comentarios), color: 'var(--clr-info)' },
      { label: 'Lojas (filtro)', value: k.lojas, color: 'var(--clr-positive)' },
      { label: 'Comentários (base)', value: U.fmtInt(m.comentarios), color: 'var(--tx-secondary)' },
      { label: 'Confiança média do modelo', value: U.fmt(r.confianca_media * 100, 1) + '%', color: 'var(--clr-brand)' },
      { label: '% Baixa Confiança', value: U.fmt(r.pct_baixa_confianca, 1) + '%', color: 'var(--clr-neutral)' },
      { label: 'Período', value: m.periodo, color: 'var(--tx-secondary)' },
      { label: 'UFs', value: m.ufs.length, color: 'var(--tx-secondary)' },
      { label: 'Regiões', value: m.regioes.length, color: 'var(--tx-secondary)' }
    ];
    const grid = document.getElementById('qualidade-grid');
    if (grid) grid.innerHTML = cards.map(c => `<div class="kpi-card" style="--kpi-accent:${c.color}"><span class="kpi-label">${U.escapeHtml(c.label)}</span><span class="kpi-value" style="color:${c.color}">${U.escapeHtml(String(c.value))}</span></div>`).join('');

    C.create('chart-confianca-dist', {
      type: 'bar',
      data: { labels: DATA.confianca.buckets, datasets: [{ data: DATA.confianca.contagens, backgroundColor: ['#EF4444', '#F97316', '#F59E0B', '#10B981', '#059669'], borderRadius: 6, borderSkipped: false }] },
      options: { responsive: true, plugins: { legend: { display: false }, tooltip: { ...C.defaultOptions().plugins.tooltip, callbacks: { label: ctx => U.fmtInt(ctx.parsed.y) + ' comentários' } } }, scales: { x: { grid: { display: false }, ticks: { color: tc.tickColor, font: { size: 11 } }, title: { display: true, text: 'Faixa de confiança do modelo (probabilidade da classe prevista)', color: tc.labelColor, font: { size: 11 } } }, y: { beginAtZero: true, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } } } }
    });
  }

  function renderModelo(tc, lojas, k) {
    setEl('qual-nps-trad', U.fmt(k.nps_trad, 0));
    setEl('qual-nps-textual', U.fmt(k.nps_textual, 0));
    setEl('qual-nps-hibrido', U.fmt(k.nps_hibrido, 0));
    const corr = DATA.resumo.correlacao_transacoes || {};
    const met = document.getElementById('qual-metodologia');
    if (met) met.innerHTML = `O <strong>NPS tradicional</strong> usa só a nota. O <strong>NPS textual</strong> usa só o sentimento do comentário. O <strong>NPS híbrido</strong> usa o comentário apenas quando a confiança do modelo é alta — previsões de baixa confiança (${U.fmt(DATA.resumo.pct_baixa_confianca, 1)}% da base) mantêm a nota. Correlação transações × NPS híbrido: <strong>${corr.nps_hibrido}</strong> (volume não explica satisfação).`;

    C.create('chart-nps-transacoes', {
      type: 'bubble',
      data: { datasets: [
        { label: 'Externo', data: lojas.filter(l => l.flag === 'regular').map(toBubble), backgroundColor: COR_EXT + '8c' },
        { label: 'Germinare', data: lojas.filter(l => l.flag === 'tocadora').map(toBubble), backgroundColor: COR_GER + '8c' }
      ] },
      options: { responsive: true, plugins: { legend: { position: 'bottom', labels: { color: tc.labelColor, font: { size: 11 } } }, tooltip: { ...C.defaultOptions().plugins.tooltip, callbacks: { label: ctx => `${ctx.raw.loja}: NPS Híb ${U.fmt(ctx.raw.y, 1)}, ${U.fmtInt(ctx.raw.x)} transações` } } }, scales: { x: { title: { display: true, text: 'Transações', color: tc.labelColor, font: { size: 11 } }, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } }, y: { min: 0, max: 100, title: { display: true, text: 'NPS Híbrido', color: tc.labelColor, font: { size: 11 } }, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } } } }
    });

    const diag = DATA.resumo.diagnosticos || {};
    const entries = Object.entries(diag).sort((a, b) => b[1] - a[1]);
    C.create('chart-diagnosticos', {
      type: 'bar',
      data: { labels: entries.map(e => DIAG_LABEL[e[0]] || e[0]), datasets: [{ data: entries.map(e => e[1]), backgroundColor: C.DATA_COLORS.slice(0, entries.length), borderRadius: 4, borderSkipped: false }] },
      options: { indexAxis: 'y', responsive: true, plugins: { legend: { display: false }, tooltip: { ...C.defaultOptions().plugins.tooltip, callbacks: { label: ctx => U.fmtInt(ctx.parsed.x) + ' comentários' } } }, scales: { x: { beginAtZero: true, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } }, y: { grid: { display: false }, ticks: { color: tc.tickColor, font: { size: 10 } } } } }
    });

    const prio = [...lojas].sort((a, b) => b.indice_prioridade - a.indice_prioridade).slice(0, 8);
    rows('qual-top-prioridade', prio, [l => l.nome, l => U.fmt(l.indice_prioridade, 1), l => U.fmt(l.nps_hibrido, 1), l => U.fmt(l.pct_neg, 1) + '%']);
    const risco = lojas.filter(l => l.risco_oculto).sort((a, b) => b.severidade - a.severidade).slice(0, 8);
    rows('qual-risco-oculto', risco, [l => l.nome, l => U.fmt(l.nps_trad, 1), l => U.fmt(l.pct_neg, 1) + '%', l => U.fmt(l.severidade, 2)]);
  }

  function renderTendencias(tc, lojas) {
    // tendência = variação do % negativo (últimos 3 meses vs 3 primeiros) por loja
    const withTrend = lojas.filter(l => (l.temporal || []).length >= 6).map(l => {
      const t = l.temporal, n = t.length;
      const ini = avg(t.slice(0, 3).map(x => x.neg)), fim = avg(t.slice(n - 3).map(x => x.neg));
      return { loja: l, slope: fim - ini };
    });
    const piores = withTrend.filter(x => x.slope > 0).sort((a, b) => b.slope - a.slope).slice(0, 4);
    const melhores = withTrend.filter(x => x.slope < 0).sort((a, b) => a.slope - b.slope).slice(0, 4);

    trendChart('chart-deterioracao', piores, tc, C.TREND_COLORS);
    trendChart('chart-melhora', melhores, tc, C.IMPROVE_COLORS);

    const pred = document.getElementById('predicao-risco');
    if (pred) pred.textContent = piores.length
      ? `${piores.length} loja(s) com aumento consistente do % de comentários negativos nos últimos meses: ${piores.map(p => p.loja.nome).join(', ')}. São candidatas a monitoramento prioritário — sinal descritivo de tendência, não previsão estatística.`
      : 'Nenhuma loja com tendência consistente de deterioração no conjunto filtrado.';
  }

  function trendChart(id, arr, tc, colors) {
    C.create(id, {
      type: 'line',
      data: { labels: (arr[0]?.loja.temporal || []).map(t => t.m), datasets: arr.map((x, i) => ({ label: x.loja.nome, data: x.loja.temporal.map(t => t.neg), borderColor: colors[i % colors.length], tension: 0.3, pointRadius: 2, borderWidth: 2 })) },
      options: { responsive: true, plugins: { legend: { position: 'bottom', labels: { color: tc.labelColor, font: { size: 10 } } }, tooltip: C.defaultOptions().plugins.tooltip }, scales: { x: { grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 10 } } }, y: { beginAtZero: true, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, callback: v => v + '%', font: { size: 10 } }, title: { display: true, text: '% Comentários Negativos', color: tc.labelColor, font: { size: 11 } } } } }
    });
  }

  function toBubble(l) { return { x: l.transacoes, y: l.nps_hibrido, r: Math.max(4, Math.min(16, Math.sqrt(l.avaliacoes_ponderadas || 1) / 4)), loja: l.nome }; }
  function avg(a) { return a.reduce((s, v) => s + v, 0) / (a.length || 1); }
  function rows(id, data, cols) { const tb = document.getElementById(id); if (!tb) return; tb.innerHTML = data.length ? data.map(d => `<tr>${cols.map(c => `<td>${Swift.Utils.escapeHtml(c(d))}</td>`).join('')}</tr>`).join('') : '<tr><td colspan="4">Sem lojas no filtro atual</td></tr>'; }
  function setEl(id, html) { const el = document.getElementById(id); if (el) el.innerHTML = html; }

  return { render };
})();
