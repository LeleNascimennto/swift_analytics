/* ═══════════════════════════════════════════════════════════════════
   SWIFT ANALYTICS — Page: Visão Geral
   ═══════════════════════════════════════════════════════════════════ */

window.Swift = window.Swift || {};
Swift.Pages  = Swift.Pages  || {};

Swift.Pages.overview = (function () {
  const { escapeHtml, fmt, fmtPct, fmtInt, colorForNPS, getFilteredLojas, getAvgKpis, getBreakdownForFilter } = Swift.Utils;
  const C = Swift.Charts;

  function render() {
    const f = Swift.State.filters;
    const filteredLojas = getFilteredLojas();
    const bd = getBreakdownForFilter();
    const isSingleLoja = f.loja.length === 1;
    const isFiltered = f.gestao.length || f.uf.length || f.loja.length;

    let kpis;
    if (isSingleLoja) {
      const loja = DATA.lojas.find(l => l.nome === f.loja[0]);
      kpis = loja ? {
        nps_tradicional:  loja.nps_trad,
        nps_ajustado:     loja.nps_ajust,
        pct_positivo:     loja.pct_pos,
        pct_neutro:       (100 - loja.pct_pos - loja.pct_neg).toFixed(1),
        pct_negativo:     loja.pct_neg,
        lojas_alerta:     loja.alerta !== 'ESTAVEL' ? 1 : 0,
        total_comentarios:'—'
      } : DATA.kpis;
    } else if (bd && !f.uf.length) {
      kpis = bd.kpis;
    } else if (isFiltered && filteredLojas.length > 0) {
      kpis = getAvgKpis(filteredLojas);
    } else {
      kpis = DATA.kpis;
    }

    // Compute NPS Híbrido from qualitativo
    const npsHibrido = DATA.qualitativo?.resumo?.nps_hibrido;
    const npsTextual = DATA.qualitativo?.resumo?.nps_textual;

    setKPI('kpi-nps-trad',    fmt(kpis.nps_tradicional, 0));
    setKPI('kpi-nps-textual', npsTextual ? fmt(npsTextual, 0) : fmt(kpis.nps_ajustado, 0));
    setKPI('kpi-nps-hibrido', npsHibrido ? fmt(npsHibrido, 0) : '—');
    setKPI('kpi-positivo',    fmtPct(kpis.pct_positivo));
    setKPI('kpi-neutro',      fmtPct(kpis.pct_neutro));
    setKPI('kpi-negativo',    fmtPct(kpis.pct_negativo));
    setKPI('kpi-alertas',     kpis.lojas_alerta);
    setKPI('kpi-total-com',   typeof kpis.total_comentarios === 'number'
      ? fmtInt(kpis.total_comentarios) : kpis.total_comentarios || '—');

    // NPS color classes on cards
    applyNpsColor('kpi-nps-trad',    kpis.nps_tradicional);
    applyNpsColor('kpi-nps-textual', npsTextual || kpis.nps_ajustado);
    applyNpsColor('kpi-nps-hibrido', npsHibrido);

    // Executive summary
    const compilado = (bd && !f.uf.length) ? bd.compilado : DATA.compilado;
    const total = document.getElementById('total-comentarios');
    if (total) total.textContent = typeof kpis.total_comentarios === 'number'
      ? fmtInt(kpis.total_comentarios) : kpis.total_comentarios || '—';

    const fortEl = document.getElementById('fortalezas-list');
    if (fortEl && compilado?.fortalezas) {
      fortEl.innerHTML = compilado.fortalezas.map((ft, i) => `
        <div class="compilado-item">
          <div class="compilado-rank">${i + 1}</div>
          <div class="compilado-info">
            <div class="compilado-cat">${escapeHtml(ft.cat)}</div>
            <div class="compilado-pct">${ft.pct}% dos elogios</div>
            <div class="compilado-example">"${escapeHtml(ft.exemplo)}"</div>
          </div>
        </div>`).join('');
    }

    const atEl = document.getElementById('atencao-list');
    if (atEl && compilado?.atencao) {
      atEl.innerHTML = compilado.atencao.map((at, i) => `
        <div class="compilado-item">
          <div class="compilado-rank">${i + 1}</div>
          <div class="compilado-info">
            <div class="compilado-cat">${escapeHtml(at.cat)}</div>
            <div class="compilado-pct">${at.pct}% das reclamações</div>
            <div class="compilado-example">"${escapeHtml(at.exemplo)}"</div>
          </div>
        </div>`).join('');
    }

    // Regional highlights
    const regEl = document.getElementById('destaques-regiao');
    if (regEl && DATA.compilado?.regioes) {
      regEl.innerHTML = DATA.compilado.regioes.map(r => `
        <div class="region-card region-${r.tipo}">
          <div class="region-name">${escapeHtml(r.nome)}</div>
          <div class="region-stat">${escapeHtml(r.stat)}</div>
        </div>`).join('');
    }

    const insightEl = document.getElementById('insight-text');
    if (insightEl) insightEl.textContent = DATA.compilado?.insight || '';

    // Charts
    const temporal = (bd && !f.uf.length) ? bd.temporal : DATA.temporal;
    const tc = C.getThemeColors();

    C.create('chart-sentimento-temporal', {
      type: 'line',
      data: {
        labels: temporal.meses,
        datasets: [
          { label: 'Positivo', data: temporal.positivo, borderColor: '#10B981', backgroundColor: 'rgba(16,185,129,0.08)', fill: true, tension: 0.35, pointRadius: 2.5, borderWidth: 2 },
          { label: 'Neutro',   data: temporal.neutro,   borderColor: '#F59E0B', backgroundColor: 'rgba(245,158,11,0.08)',  fill: true, tension: 0.35, pointRadius: 2.5, borderWidth: 2 },
          { label: 'Negativo', data: temporal.negativo, borderColor: '#EF4444', backgroundColor: 'rgba(239,68,68,0.08)',  fill: true, tension: 0.35, pointRadius: 2.5, borderWidth: 2 }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'bottom', labels: { color: tc.labelColor, font: { size: 11 } } }, tooltip: C.defaultOptions().plugins.tooltip },
        scales: {
          x: { grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } },
          y: { beginAtZero: true, max: 100, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, callback: v => v + '%', font: { size: 11 } } }
        }
      }
    });

    C.create('chart-sentimento-dist', {
      type: 'bar',
      data: {
        labels: ['Positivo', 'Neutro', 'Negativo'],
        datasets: [{
          data: [parseFloat(kpis.pct_positivo), parseFloat(kpis.pct_neutro), parseFloat(kpis.pct_negativo)],
          backgroundColor: ['#10B981', '#F59E0B', '#EF4444'],
          borderRadius: 6,
          borderSkipped: false
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: { ...C.defaultOptions().plugins.tooltip, callbacks: { label: ctx => fmtPct(ctx.parsed.y) } }
        },
        scales: {
          x: { grid: { display: false }, ticks: { color: tc.tickColor, font: { size: 11, weight: '600' } } },
          y: { beginAtZero: true, max: 100, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, callback: v => v + '%', font: { size: 11 } } }
        }
      }
    });

    // Regional NPS bar chart
    const regioes = DATA.compilado?.regioes || [];
    if (regioes.length) {
      C.create('chart-regiao-nps', {
        type: 'bar',
        data: {
          labels: regioes.map(r => r.nome),
          datasets: [{
            data: regioes.map(r => r.nps_hibrido || (r.tipo === 'positive' ? 88 : 72)),
            backgroundColor: regioes.map(r => r.tipo === 'positive' ? 'rgba(16,185,129,0.75)' : 'rgba(239,68,68,0.75)'),
            borderRadius: 6,
            borderSkipped: false
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          plugins: {
            legend: { display: false },
            tooltip: { ...C.defaultOptions().plugins.tooltip, callbacks: { label: ctx => `NPS: ${ctx.parsed.x}` } }
          },
          scales: {
            x: { beginAtZero: true, max: 100, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } },
            y: { grid: { display: false }, ticks: { color: tc.tickColor, font: { size: 11, weight: '500' } } }
          }
        }
      });
    }
  }

  function setKPI(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  function applyNpsColor(id, nps) {
    const card = document.getElementById(id)?.closest('.kpi-card');
    if (!card) return;
    card.style.setProperty('--kpi-accent', colorForNPS(nps));
  }

  return { render };
})();
