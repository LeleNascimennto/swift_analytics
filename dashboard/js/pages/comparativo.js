/* ═══════════════════════════════════════════════════════════════════
   SWIFT ANALYTICS — Page: Comparativo (duas lojas ou duas regiões)
   Seleção independente dos filtros globais.
   ═══════════════════════════════════════════════════════════════════ */
window.Swift = window.Swift || {};
Swift.Pages = Swift.Pages || {};

Swift.Pages.comparativo = (function () {
  const U = Swift.Utils, C = Swift.Charts;
  const COR_A = '#2563EB', COR_B = '#EC4899';
  let mode = 'lojas', a = null, b = null, wired = false;

  function entities() {
    if (mode === 'regioes') return [...new Set(DATA.lojas.map(l => l.regiao))].filter(Boolean).sort().map(r => ({ id: r, label: r }));
    return DATA.lojas.map(l => ({ id: l.nome, label: l.nome })).sort((x, y) => x.label.localeCompare(y.label));
  }
  function lojasOf(id) { return mode === 'regioes' ? DATA.lojas.filter(l => l.regiao === id) : DATA.lojas.filter(l => l.nome === id); }

  function metrics(id) {
    const ls = lojasOf(id);
    const k = U.aggKpis(ls);
    return {
      id, nome: id, lojas: ls.length,
      nps_trad: k.nps_trad, nps_textual: k.nps_textual, nps_hibrido: k.nps_hibrido,
      pct_pos: k.pct_pos, pct_neu: k.pct_neu, pct_neg: k.pct_neg,
      comentarios: k.comentarios,
      severidade: U.wmean(ls, 'severidade'),
      transacoes: ls.reduce((s, l) => s + (l.transacoes || 0), 0),
      flag: mode === 'lojas' ? (ls[0] && ls[0].flag) : null,
      problemas: U.aggRanking(ls, 'top_problemas', 5),
      elogios: U.aggRanking(ls, 'top_elogios', 5),
      temporal: U.aggTemporal(ls)
    };
  }

  function render() {
    if (!wired) wire();
    const ents = entities();
    if (!ents.find(e => e.id === a)) a = ents[0] && ents[0].id;
    if (!ents.find(e => e.id === b)) b = (ents[1] && ents[1].id) || (ents[0] && ents[0].id);
    populate('cmp-a', ents, a); populate('cmp-b', ents, b);
    compare();
  }

  function wire() {
    document.querySelectorAll('.cmp-mode-btn').forEach(btn => btn.addEventListener('click', () => {
      document.querySelectorAll('.cmp-mode-btn').forEach(x => { x.classList.remove('active'); x.setAttribute('aria-pressed', 'false'); });
      btn.classList.add('active'); btn.setAttribute('aria-pressed', 'true');
      mode = btn.dataset.mode; a = null; b = null; render();
    }));
    document.getElementById('cmp-a').addEventListener('change', e => { a = e.target.value; compare(); });
    document.getElementById('cmp-b').addEventListener('change', e => { b = e.target.value; compare(); });
    wired = true;
  }

  function populate(id, ents, sel) {
    const el = document.getElementById(id); if (!el) return;
    el.innerHTML = ents.map(e => `<option value="${U.escapeHtml(e.id)}" ${e.id === sel ? 'selected' : ''}>${U.escapeHtml(e.label)}</option>`).join('');
  }

  function compare() {
    if (!a || !b) return;
    const A = metrics(a), B = metrics(b), tc = C.getThemeColors();
    const tag = m => mode === 'lojas'
      ? `<span class="badge ${U.badgeClassForFlag(m.flag)}">${U.labelForFlag(m.flag)}</span>`
      : `<span class="badge badge-regular">Região · ${m.lojas} lojas</span>`;

    setEl('cmp-headers', `
      <div class="cmp-head-card" style="border-top:3px solid ${COR_A}"><div class="cmp-head-name">${U.escapeHtml(A.nome)}</div><div class="cmp-head-meta">${tag(A)} · ${U.fmtInt(A.comentarios)} comentários</div></div>
      <div class="cmp-head-card" style="border-top:3px solid ${COR_B}"><div class="cmp-head-name">${U.escapeHtml(B.nome)}</div><div class="cmp-head-meta">${tag(B)} · ${U.fmtInt(B.comentarios)} comentários</div></div>`);

    document.getElementById('cmp-th-a').textContent = A.nome;
    document.getElementById('cmp-th-b').textContent = B.nome;

    // higher-is-better? +1 melhor maior, -1 melhor menor
    const linhas = [
      ['NPS Tradicional', A.nps_trad, B.nps_trad, 1, 1],
      ['NPS Textual', A.nps_textual, B.nps_textual, 1, 1],
      ['NPS Híbrido', A.nps_hibrido, B.nps_hibrido, 1, 1],
      ['% Positivo', A.pct_pos, B.pct_pos, 1, 1],
      ['% Negativo', A.pct_neg, B.pct_neg, -1, 1],
      ['Severidade média', A.severidade, B.severidade, -1, 2],
      ['Transações', A.transacoes, B.transacoes, 0, 0],
      ['Nº comentários', A.comentarios, B.comentarios, 0, 0]
    ];
    setEl('cmp-tbody', linhas.map(([label, va, vb, dir, dec]) => {
      const diff = va - vb;
      const fmtV = v => dec === 0 ? U.fmtInt(v) : U.fmt(v, dec);
      let color = 'var(--tx-secondary)';
      if (dir !== 0 && Math.abs(diff) > (dec === 0 ? 0 : 0.05)) color = (diff * dir > 0) ? 'var(--clr-positive)' : 'var(--clr-negative)';
      const sign = diff > 0 ? '+' : '';
      return `<tr><td><strong>${label}</strong></td><td>${fmtV(va)}</td><td>${fmtV(vb)}</td><td style="color:${color};font-weight:600">${sign}${fmtV(diff)}</td></tr>`;
    }).join(''));

    // NPS grouped
    C.create('chart-cmp-nps', {
      type: 'bar',
      data: { labels: ['Tradicional', 'Textual', 'Híbrido'], datasets: [
        { label: A.nome, data: [A.nps_trad, A.nps_textual, A.nps_hibrido], backgroundColor: COR_A, borderRadius: 6, borderSkipped: false },
        { label: B.nome, data: [B.nps_trad, B.nps_textual, B.nps_hibrido], backgroundColor: COR_B, borderRadius: 6, borderSkipped: false }
      ] },
      options: grouped(tc, 100)
    });
    // Sentimento grouped
    C.create('chart-cmp-sent', {
      type: 'bar',
      data: { labels: ['Positivo', 'Neutro', 'Negativo'], datasets: [
        { label: A.nome, data: [A.pct_pos, A.pct_neu, A.pct_neg], backgroundColor: COR_A, borderRadius: 6, borderSkipped: false },
        { label: B.nome, data: [B.pct_pos, B.pct_neu, B.pct_neg], backgroundColor: COR_B, borderRadius: 6, borderSkipped: false }
      ] },
      options: grouped(tc, 100, '%')
    });
    // Temporal neg overlay
    const mA = {}; A.temporal.forEach(t => mA[t.m] = t.neg);
    const mB = {}; B.temporal.forEach(t => mB[t.m] = t.neg);
    const meses = [...new Set([...A.temporal.map(t => t.m), ...B.temporal.map(t => t.m)])].sort();
    C.create('chart-cmp-temporal', {
      type: 'line',
      data: { labels: meses, datasets: [
        { label: A.nome, data: meses.map(m => mA[m] ?? null), borderColor: COR_A, backgroundColor: 'transparent', tension: 0.3, pointRadius: 2, borderWidth: 2, spanGaps: true },
        { label: B.nome, data: meses.map(m => mB[m] ?? null), borderColor: COR_B, backgroundColor: 'transparent', tension: 0.3, pointRadius: 2, borderWidth: 2, spanGaps: true }
      ] },
      options: { responsive: true, plugins: { legend: { position: 'bottom', labels: { color: tc.labelColor, font: { size: 11 } } }, tooltip: C.defaultOptions().plugins.tooltip }, scales: { x: { grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } }, y: { beginAtZero: true, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, callback: v => v + '%', font: { size: 11 } }, title: { display: true, text: '% Negativo', color: tc.labelColor, font: { size: 11 } } } } }
    });
    // Categorias
    setEl('cmp-problemas', catCols(A.problemas, B.problemas, A.nome, B.nome));
    setEl('cmp-elogios', catCols(A.elogios, B.elogios, A.nome, B.nome));
  }

  function catCols(rkA, rkB, nA, nB) {
    const list = rk => rk.categorias.map((c, i) => `<div class="cmp-cat-item"><span>${U.escapeHtml(c)}</span><span class="cmp-cat-pct">${rk.pcts[i]}%</span></div>`).join('') || '<div class="cmp-cat-item">Sem dados</div>';
    return `<div class="cmp-cat-col"><div class="cmp-cat-head" style="color:${COR_A}">${U.escapeHtml(nA)}</div>${list(rkA)}</div>
            <div class="cmp-cat-col"><div class="cmp-cat-head" style="color:${COR_B}">${U.escapeHtml(nB)}</div>${list(rkB)}</div>`;
  }

  function grouped(tc, max, sfx) {
    return { responsive: true, plugins: { legend: { position: 'bottom', labels: { color: tc.labelColor, font: { size: 11 } } }, tooltip: { ...C.defaultOptions().plugins.tooltip, callbacks: { label: ctx => `${ctx.dataset.label}: ${U.fmt(ctx.parsed.y, 1)}${sfx || ''}` } } }, scales: { x: { grid: { display: false }, ticks: { color: tc.tickColor, font: { size: 11, weight: '500' } } }, y: { beginAtZero: true, max, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, callback: v => v + (sfx || ''), font: { size: 11 } } } } };
  }
  function setEl(id, html) { const el = document.getElementById(id); if (el) el.innerHTML = html; }

  return { render };
})();
