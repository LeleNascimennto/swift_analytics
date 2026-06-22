/* ═══════════════════════════════════════════════════════════════════
   SWIFT ANALYTICS — Page: Lojas (Store Intelligence)
   Table view + Risk Matrix scatter + slide-in detail drawer.
   ═══════════════════════════════════════════════════════════════════ */

window.Swift = window.Swift || {};
Swift.Pages  = Swift.Pages  || {};

Swift.Pages.lojas = (function () {
  const { escapeHtml, fmt, fmtPct, colorForNPS, colorForPctNeg, signedDelta, deltaColor, getFilteredLojas, labelForFlag, badgeClassForFlag, badgeClassForAlerta, labelForAlerta } = Swift.Utils;
  const C = Swift.Charts;

  let sortCol  = 'nps_trad';
  let sortAsc  = false;
  let viewMode = 'tabela'; // 'tabela' | 'mapa'

  const qualMap = {};

  function buildQualMap() {
    const pts = DATA.qualitativo?.scatter_transacoes || [];
    pts.forEach(p => { qualMap[p.centro_nv2] = p; });
  }

  function render() {
    buildQualMap();
    initViewToggle();
    initLocalFilters();
    renderCurrent();
    initSorting();
  }

  function initViewToggle() {
    document.querySelectorAll('.view-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.view-toggle-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        viewMode = btn.dataset.view;
        document.getElementById('lojas-table-view').style.display = viewMode === 'tabela' ? '' : 'none';
        document.getElementById('lojas-map-view').style.display   = viewMode === 'mapa'   ? '' : 'none';
        renderCurrent();
      });
    });
  }

  function initLocalFilters() {
    const searchEl = document.getElementById('search-loja');
    const alertaEl = document.getElementById('filter-alerta');
    if (searchEl) searchEl.addEventListener('input', renderCurrent);
    if (alertaEl) alertaEl.addEventListener('change', renderCurrent);
  }

  function initSorting() {
    document.querySelectorAll('#tabela-lojas th[data-sort]').forEach(th => {
      th.addEventListener('click', () => {
        const col = th.dataset.sort;
        if (sortCol === col) { sortAsc = !sortAsc; }
        else { sortCol = col; sortAsc = false; }
        document.querySelectorAll('#tabela-lojas th[data-sort]').forEach(h => h.classList.remove('sort-asc', 'sort-desc'));
        th.classList.add(sortAsc ? 'sort-asc' : 'sort-desc');
        renderTable(applyLocalFilters(getFilteredLojas()));
      });
    });
  }

  function renderCurrent() {
    const lojas = applyLocalFilters(getFilteredLojas());
    if (viewMode === 'tabela') renderTable(lojas);
    else renderRiskMatrix(lojas);
  }

  function applyLocalFilters(lojas) {
    const alertaFilter = document.getElementById('filter-alerta')?.value || 'todos';
    const searchTerm   = (document.getElementById('search-loja')?.value || '').toLowerCase().trim();
    return lojas.filter(l => {
      if (alertaFilter !== 'todos' && l.alerta !== alertaFilter) return false;
      if (searchTerm && !l.nome.toLowerCase().includes(searchTerm)) return false;
      return true;
    }).sort((a, b) => {
      let va = a[sortCol], vb = b[sortCol];
      if (typeof va === 'string') va = va.toLowerCase();
      if (typeof vb === 'string') vb = vb.toLowerCase();
      if (va < vb) return sortAsc ? -1 : 1;
      if (va > vb) return sortAsc ? 1 : -1;
      return 0;
    });
  }

  function renderTable(lojas) {
    const tbody = document.getElementById('tbody-lojas');
    if (!tbody) return;

    tbody.innerHTML = lojas.map(l => {
      const q = qualMap[l.nome] || {};
      return `<tr data-loja="${escapeHtml(l.nome)}" tabindex="0" role="button" aria-label="Ver detalhes da loja ${escapeHtml(l.nome)}">
        <td><strong>${escapeHtml(l.nome)}</strong></td>
        <td><span class="badge ${badgeClassForFlag(l.flag)}">${labelForFlag(l.flag)}</span></td>
        <td>${l.uf || '—'}</td>
        <td style="color:${colorForNPS(l.nps_trad)};font-weight:600">${l.nps_trad}</td>
        <td style="color:${colorForNPS(l.nps_ajust)};font-weight:600">${l.nps_ajust}</td>
        <td style="color:${colorForNPS(q.nps_hibrido)};font-weight:600">${q.nps_hibrido ? fmt(q.nps_hibrido, 0) : '—'}</td>
        <td style="color:${deltaColor(l.delta)};font-weight:600">${signedDelta(l.delta)}</td>
        <td style="color:var(--clr-positive);font-weight:500">${l.pct_pos}%</td>
        <td style="color:${colorForPctNeg(l.pct_neg)};font-weight:${parseFloat(l.pct_neg) > 10 ? '600' : '400'}">${l.pct_neg}%</td>
        <td><div class="cat-pills">${(l.top3_problemas || []).map(c => `<span class="cat-pill">${escapeHtml(c)}</span>`).join('')}</div></td>
        <td><span class="badge ${badgeClassForAlerta(l.alerta)}">${labelForAlerta(l.alerta)}</span></td>
      </tr>`;
    }).join('');

    tbody.querySelectorAll('tr').forEach(row => {
      row.addEventListener('click', () => showDrawer(row.dataset.loja));
      row.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); showDrawer(row.dataset.loja); }
      });
    });
  }

  function renderRiskMatrix(lojas) {
    const tc = C.getThemeColors();
    const pontos = DATA.qualitativo?.scatter_transacoes || [];
    const lojaNames = new Set(lojas.map(l => l.nome));
    const filtered = pontos.filter(p => lojaNames.has(p.centro_nv2));

    const quadrantColors = {
      alta_performance: 'rgba(16,185,129,0.60)',
      atencao_leve:     'rgba(245,158,11,0.60)',
      risco_oculto:     'rgba(139,92,246,0.60)',
      critico:          'rgba(239,68,68,0.60)'
    };
    const quadrantLabels = {
      alta_performance: 'Alta Performance',
      atencao_leve:     'Atenção Leve',
      risco_oculto:     'Risco Oculto',
      critico:          'Crítico'
    };
    const quadrantes = Object.keys(quadrantColors);

    C.create('chart-risk-matrix', {
      type: 'scatter',
      data: {
        datasets: quadrantes.map(qd => ({
          label: quadrantLabels[qd],
          data: filtered.filter(p => p.quadrante_risco === qd).map(p => ({
            x: p.nps_tradicional, y: p.pct_negativo,
            loja: p.centro_nv2, sev: p.severidade_media, prioridade: p.indice_prioridade
          })),
          backgroundColor: quadrantColors[qd],
          pointRadius: 6
        }))
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom', labels: { color: tc.labelColor, font: { size: 11 } } },
          tooltip: {
            ...C.defaultOptions().plugins.tooltip,
            callbacks: {
              label: ctx => {
                const p = ctx.raw;
                return [`${p.loja}`, `NPS: ${p.x} | % Neg: ${p.y}%`, `Severidade: ${fmt(p.sev, 2)}`];
              }
            }
          }
        },
        scales: {
          x: {
            min: 0, max: 100,
            title: { display: true, text: 'NPS Tradicional', color: tc.labelColor, font: { size: 11 } },
            grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } }
          },
          y: {
            title: { display: true, text: '% Comentários Negativos', color: tc.labelColor, font: { size: 11 } },
            grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, callback: v => v + '%', font: { size: 11 } }
          }
        }
      }
    });
  }

  function showDrawer(nomeLoja) {
    const loja = DATA.lojas.find(l => l.nome === nomeLoja);
    if (!loja) return;
    const q = qualMap[nomeLoja] || {};

    const drawer = document.getElementById('loja-drawer');
    if (!drawer) return;

    drawer.classList.add('open');

    const deltaArrow = loja.delta > 0 ? '▲' : loja.delta < 0 ? '▼' : '→';

    setEl('drawer-loja-nome', `${escapeHtml(loja.nome)} <span class="badge ${badgeClassForFlag(loja.flag)}">${labelForFlag(loja.flag)}</span>`);

    setEl('drawer-kpis', `
      <div class="drawer-kpi"><div class="dk-value" style="color:${colorForNPS(loja.nps_trad)}">${loja.nps_trad}</div><div class="dk-label">NPS Trad</div></div>
      <div class="drawer-kpi"><div class="dk-value" style="color:${colorForNPS(loja.nps_ajust)}">${loja.nps_ajust} <span style="font-size:12px;color:${deltaColor(loja.delta)}">${deltaArrow}</span></div><div class="dk-label">NPS Ajust</div></div>
      <div class="drawer-kpi"><div class="dk-value" style="color:${colorForNPS(q.nps_hibrido)}">${q.nps_hibrido ? fmt(q.nps_hibrido, 0) : '—'}</div><div class="dk-label">NPS Híbrido</div></div>
      <div class="drawer-kpi"><div class="dk-value" style="color:var(--clr-positive)">${loja.pct_pos}%</div><div class="dk-label">Positivo</div></div>
      <div class="drawer-kpi"><div class="dk-value" style="color:${colorForPctNeg(loja.pct_neg)}">${loja.pct_neg}%</div><div class="dk-label">Negativo</div></div>
      ${q.indice_prioridade ? `<div class="drawer-kpi"><div class="dk-value" style="color:var(--clr-brand)">${fmt(q.indice_prioridade, 1)}</div><div class="dk-label">Índice Prior.</div></div>` : ''}`
    );

    setEl('drawer-problemas', loja.top3_problemas?.map((c, i) => `<div class="drawer-cat-item"><span class="rank-num">${i + 1}</span>${escapeHtml(c)}</div>`).join('') || '<div class="drawer-cat-item">Sem dados</div>');
    setEl('drawer-elogios',   loja.top3_elogios?.map((c, i) =>   `<div class="drawer-cat-item"><span class="rank-num">${i + 1}</span>${escapeHtml(c)}</div>`).join('') || '<div class="drawer-cat-item">Sem dados</div>');
    setEl('drawer-comentarios', (loja.comentarios || []).map(c => `<div class="drawer-comment">"${escapeHtml(c)}"</div>`).join('') || '<div class="drawer-comment">Sem comentários</div>');

    if (q.indice_prioridade) {
      const badge = q.quadrante_risco ? `<span class="badge badge-${q.quadrante_risco === 'critico' ? 'queda' : q.quadrante_risco === 'alta_performance' ? 'melhora' : 'estavel'}">${escapeHtml(q.quadrante_risco?.replace(/_/g, ' '))}</span>` : '';
      setEl('drawer-model-info', `Quadrante: ${badge} · Severidade Média: ${fmt(q.severidade_media, 2)}`);
    }

    // Temporal chart
    if (loja.temporal && loja.temporal.length > 3) {
      const tc = C.getThemeColors();
      C.create('chart-drawer-temporal', {
        type: 'line',
        data: {
          labels: loja.temporal.map(t => t.m),
          datasets: [
            { label: '% Positivo', data: loja.temporal.map(t => t.pos), borderColor: '#10B981', tension: 0.3, pointRadius: 2.5, borderWidth: 2 },
            { label: '% Negativo', data: loja.temporal.map(t => t.neg), borderColor: '#EF4444', tension: 0.3, pointRadius: 2.5, borderWidth: 2 }
          ]
        },
        options: {
          responsive: true,
          plugins: { legend: { position: 'bottom', labels: { color: tc.labelColor, font: { size: 10 } } }, tooltip: C.defaultOptions().plugins.tooltip },
          scales: {
            x: { grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 10 } } },
            y: { beginAtZero: true, max: 100, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, callback: v => v + '%', font: { size: 10 } } }
          }
        }
      });
    }

    const closeBtn = document.getElementById('btn-close-drawer');
    if (closeBtn) closeBtn.onclick = closeDrawer;

    const overlay = document.getElementById('drawer-overlay');
    if (overlay) overlay.onclick = closeDrawer;
  }

  function closeDrawer() {
    const drawer = document.getElementById('loja-drawer');
    if (drawer) drawer.classList.remove('open');
    C.destroyPage(['chart-drawer-temporal']);
  }

  function setEl(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  return { render, showDrawer, closeDrawer };
})();
