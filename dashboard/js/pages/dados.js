/* ═══════════════════════════════════════════════════════════════════
   SWIFT ANALYTICS — Page: Tendências
   Lojas com tendência de deterioração / melhora do % negativo no tempo.
   ═══════════════════════════════════════════════════════════════════ */
window.Swift = window.Swift || {};
Swift.Pages = Swift.Pages || {};

Swift.Pages.dados = (function () {
  const U = Swift.Utils, C = Swift.Charts;

  function render() {
    const tc = C.getThemeColors();
    const lojas = U.getFilteredLojas();

    // tendência = variação do % negativo (média dos 3 últimos meses − 3 primeiros) por loja
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

  function avg(a) { return a.reduce((s, v) => s + v, 0) / (a.length || 1); }

  return { render };
})();
