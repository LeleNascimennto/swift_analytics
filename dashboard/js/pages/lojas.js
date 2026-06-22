/* ═══════════════════════════════════════════════════════════════════
   SWIFT ANALYTICS — Page: Lojas
   Tabela + Matriz de Risco + drawer. Tudo respeita os filtros globais.
   ═══════════════════════════════════════════════════════════════════ */
window.Swift = window.Swift || {};
Swift.Pages = Swift.Pages || {};

Swift.Pages.lojas = (function () {
  const U = Swift.Utils, C = Swift.Charts;
  let sortCol = 'nps_hibrido', sortAsc = false, viewMode = 'tabela', wired = false;

  const QUAD = {
    alta_performance: { c: 'rgba(16,185,129,0.6)', l: 'Alta Performance' },
    atencao_leve:     { c: 'rgba(245,158,11,0.6)', l: 'Atenção Leve' },
    risco_oculto:     { c: 'rgba(139,92,246,0.6)', l: 'Risco Oculto' },
    critico:          { c: 'rgba(239,68,68,0.6)',  l: 'Crítico' }
  };

  function render() {
    if (!wired) wire();
    renderCurrent();
  }

  function wire() {
    document.querySelectorAll('.view-toggle-btn').forEach(btn => btn.addEventListener('click', () => {
      document.querySelectorAll('.view-toggle-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
      btn.classList.add('active'); btn.setAttribute('aria-pressed', 'true');
      viewMode = btn.dataset.view;
      document.getElementById('lojas-table-view').style.display = viewMode === 'tabela' ? '' : 'none';
      document.getElementById('lojas-map-view').style.display = viewMode === 'mapa' ? '' : 'none';
      renderCurrent();
    }));
    const s = document.getElementById('search-loja');
    if (s) s.addEventListener('input', renderCurrent);
    document.querySelectorAll('#tabela-lojas th[data-sort]').forEach(th => th.addEventListener('click', () => {
      const col = th.dataset.sort;
      if (sortCol === col) sortAsc = !sortAsc; else { sortCol = col; sortAsc = false; }
      document.querySelectorAll('#tabela-lojas th[data-sort]').forEach(h => h.classList.remove('sort-asc', 'sort-desc'));
      th.classList.add(sortAsc ? 'sort-asc' : 'sort-desc');
      renderTable(getRows());
    }));
    wired = true;
  }

  function getRows() {
    const term = (document.getElementById('search-loja')?.value || '').toLowerCase().trim();
    return U.getFilteredLojas().filter(l => !term || l.nome.toLowerCase().includes(term)).sort((a, b) => {
      let va = a[sortCol], vb = b[sortCol];
      if (typeof va === 'string') va = va.toLowerCase(); if (typeof vb === 'string') vb = vb.toLowerCase();
      if (va < vb) return sortAsc ? -1 : 1; if (va > vb) return sortAsc ? 1 : -1; return 0;
    });
  }

  function renderCurrent() {
    const rows = getRows();
    if (viewMode === 'tabela') renderTable(rows); else renderMatrix(rows);
  }

  function renderTable(rows) {
    const tbody = document.getElementById('tbody-lojas'); if (!tbody) return;
    tbody.innerHTML = rows.map(l => `<tr data-loja="${U.escapeHtml(l.nome)}" tabindex="0" role="button" aria-label="Ver detalhes da loja ${U.escapeHtml(l.nome)}">
      <td><strong>${U.escapeHtml(l.nome)}</strong></td>
      <td><span class="badge ${U.badgeClassForFlag(l.flag)}">${U.labelForFlag(l.flag)}</span></td>
      <td>${l.uf}</td>
      <td>${U.escapeHtml(l.regiao)}</td>
      <td style="color:${U.colorForNPS(l.nps_trad)};font-weight:600">${U.fmt(l.nps_trad, 1)}</td>
      <td style="color:${U.colorForNPS(l.nps_textual)};font-weight:600">${U.fmt(l.nps_textual, 1)}</td>
      <td style="color:${U.colorForNPS(l.nps_hibrido)};font-weight:600">${U.fmt(l.nps_hibrido, 1)}</td>
      <td style="color:${U.deltaColor(l.delta_hibrido)};font-weight:600">${U.signedDelta(l.delta_hibrido)}</td>
      <td style="color:var(--clr-positive);font-weight:500">${U.fmt(l.pct_pos, 1)}%</td>
      <td style="color:${U.colorForPctNeg(l.pct_neg)};font-weight:${l.pct_neg > 10 ? '600' : '400'}">${U.fmt(l.pct_neg, 1)}%</td>
      <td><div class="cat-pills">${(l.top_problemas || []).map(c => `<span class="cat-pill">${U.escapeHtml(c.cat)}</span>`).join('')}</div></td>
    </tr>`).join('') || '<tr><td colspan="11">Nenhuma loja para o filtro atual.</td></tr>';
    tbody.querySelectorAll('tr[data-loja]').forEach(r => {
      r.addEventListener('click', () => drawer(r.dataset.loja));
      r.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); drawer(r.dataset.loja); } });
    });
  }

  function renderMatrix(rows) {
    const tc = C.getThemeColors();
    C.create('chart-risk-matrix', {
      type: 'scatter',
      data: { datasets: Object.keys(QUAD).map(q => ({
        label: QUAD[q].l,
        data: rows.filter(l => l.quadrante === q).map(l => ({ x: l.nps_trad, y: l.pct_neg, loja: l.nome, sev: l.severidade })),
        backgroundColor: QUAD[q].c, pointRadius: 6
      })) },
      options: {
        responsive: true,
        plugins: { legend: { position: 'bottom', labels: { color: tc.labelColor, font: { size: 11 } } }, tooltip: { ...C.defaultOptions().plugins.tooltip, callbacks: { label: ctx => [`${ctx.raw.loja}`, `NPS ${U.fmt(ctx.raw.x, 1)} · ${U.fmt(ctx.raw.y, 1)}% neg`, `Severidade ${U.fmt(ctx.raw.sev, 2)}`] } } },
        scales: {
          x: { min: 0, max: 100, title: { display: true, text: 'NPS Tradicional', color: tc.labelColor, font: { size: 11 } }, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } },
          y: { title: { display: true, text: '% Comentários Negativos', color: tc.labelColor, font: { size: 11 } }, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, callback: v => v + '%', font: { size: 11 } } }
        }
      }
    });
  }

  function drawer(nome) {
    const l = DATA.lojas.find(x => x.nome === nome); if (!l) return;
    const d = document.getElementById('loja-drawer'); if (!d) return;
    d.classList.add('open');
    setEl('drawer-loja-nome', `${U.escapeHtml(l.nome)} <span class="badge ${U.badgeClassForFlag(l.flag)}">${U.labelForFlag(l.flag)}</span>`);
    setEl('drawer-kpis', `
      <div class="drawer-kpi"><div class="dk-value" style="color:${U.colorForNPS(l.nps_trad)}">${U.fmt(l.nps_trad, 1)}</div><div class="dk-label">NPS Trad</div></div>
      <div class="drawer-kpi"><div class="dk-value" style="color:${U.colorForNPS(l.nps_textual)}">${U.fmt(l.nps_textual, 1)}</div><div class="dk-label">NPS Textual</div></div>
      <div class="drawer-kpi"><div class="dk-value" style="color:${U.colorForNPS(l.nps_hibrido)}">${U.fmt(l.nps_hibrido, 1)}</div><div class="dk-label">NPS Híbrido</div></div>
      <div class="drawer-kpi"><div class="dk-value" style="color:var(--clr-positive)">${U.fmt(l.pct_pos, 1)}%</div><div class="dk-label">Positivo</div></div>
      <div class="drawer-kpi"><div class="dk-value" style="color:${U.colorForPctNeg(l.pct_neg)}">${U.fmt(l.pct_neg, 1)}%</div><div class="dk-label">Negativo</div></div>
      <div class="drawer-kpi"><div class="dk-value" style="color:var(--clr-brand)">${U.fmt(l.indice_prioridade, 1)}</div><div class="dk-label">Índice Prior.</div></div>`);
    setEl('drawer-problemas', (l.top_problemas || []).map((c, i) => `<div class="drawer-cat-item"><span class="rank-num">${i + 1}</span>${U.escapeHtml(c.cat)} <span style="color:var(--tx-muted)">(${c.pct}%)</span></div>`).join('') || '<div class="drawer-cat-item">Sem dados</div>');
    setEl('drawer-elogios', (l.top_elogios || []).map((c, i) => `<div class="drawer-cat-item"><span class="rank-num">${i + 1}</span>${U.escapeHtml(c.cat)} <span style="color:var(--tx-muted)">(${c.pct}%)</span></div>`).join('') || '<div class="drawer-cat-item">Sem dados</div>');
    setEl('drawer-model-info', `Quadrante: <span class="badge badge-${l.quadrante === 'critico' ? 'tocadora' : 'regular'}">${U.escapeHtml((l.quadrante || '').replace(/_/g, ' '))}</span> · Severidade média ${U.fmt(l.severidade, 2)} · ${U.fmtInt(l.transacoes)} transações`);

    if (l.temporal && l.temporal.length > 3) {
      const tc = C.getThemeColors();
      C.create('chart-drawer-temporal', {
        type: 'line',
        data: { labels: l.temporal.map(t => t.m), datasets: [
          { label: '% Positivo', data: l.temporal.map(t => t.pos), borderColor: '#10B981', tension: 0.3, pointRadius: 2, borderWidth: 2 },
          { label: '% Negativo', data: l.temporal.map(t => t.neg), borderColor: '#EF4444', tension: 0.3, pointRadius: 2, borderWidth: 2 }
        ] },
        options: { responsive: true, plugins: { legend: { position: 'bottom', labels: { color: tc.labelColor, font: { size: 10 } } }, tooltip: C.defaultOptions().plugins.tooltip }, scales: { x: { grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 10 } } }, y: { beginAtZero: true, max: 100, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, callback: v => v + '%', font: { size: 10 } } } } }
      });
    }
    document.getElementById('btn-close-drawer').onclick = close;
    document.getElementById('drawer-overlay').onclick = close;
  }
  function close() { document.getElementById('loja-drawer').classList.remove('open'); C.destroyPage(['chart-drawer-temporal']); }
  function setEl(id, html) { const el = document.getElementById(id); if (el) el.innerHTML = html; }

  return { render };
})();
