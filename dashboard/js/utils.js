/* ═══════════════════════════════════════════════════════════════════
   SWIFT ANALYTICS — Utilities + Aggregation
   Tudo que as páginas mostram é recalculado a partir das lojas filtradas.
   NPS é uma média por respondente, então o NPS agregado = média ponderada
   pelo nº de comentários de cada loja (exato, não aproximação).
   ═══════════════════════════════════════════════════════════════════ */
window.Swift = window.Swift || {};

Swift.Utils = (function () {

  function escapeHtml(value) {
    if (value === null || value === undefined) return '';
    return String(value)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function fmt(v, d = 1) { const n = parseFloat(v); return isNaN(n) ? '--' : n.toFixed(d); }
  function fmtInt(v) { const n = parseInt(v, 10); return isNaN(n) ? '--' : n.toLocaleString('pt-BR'); }
  function fmtPct(v, d = 1) { return fmt(v, d) + '%'; }

  function colorForNPS(nps) {
    const n = parseFloat(nps);
    if (isNaN(n)) return 'var(--tx-muted)';
    if (n >= 75) return 'var(--clr-positive)';
    if (n >= 50) return 'var(--clr-neutral)';
    return 'var(--clr-negative)';
  }
  function colorForPctNeg(pct) {
    const n = parseFloat(pct);
    if (isNaN(n)) return 'var(--tx-secondary)';
    if (n > 12) return 'var(--clr-negative)';
    if (n > 8) return 'var(--clr-neutral)';
    return 'var(--tx-secondary)';
  }
  function signedDelta(d) { const n = parseFloat(d); if (isNaN(n)) return '--'; return (n > 0 ? '+' : '') + n.toFixed(1); }
  function deltaColor(d) { const n = parseFloat(d); if (isNaN(n)) return 'var(--tx-muted)'; return n < -2 ? 'var(--clr-negative)' : n > 2 ? 'var(--clr-positive)' : 'var(--tx-secondary)'; }

  function labelForFlag(flag) { return String(flag).toLowerCase() === 'tocadora' ? 'Germinare' : 'Externo'; }
  function badgeClassForFlag(flag) { return String(flag).toLowerCase() === 'tocadora' ? 'badge-tocadora' : 'badge-regular'; }

  /* ── Filtro central ── */
  function getFilteredLojas() {
    const f = Swift.State.filters;
    return (DATA.lojas || []).filter(l => {
      if (f.gestao.length && !f.gestao.includes(l.flag)) return false;
      if (f.uf.length     && !f.uf.includes(l.uf))       return false;
      if (f.regiao.length && !f.regiao.includes(l.regiao)) return false;
      if (f.loja.length   && !f.loja.includes(l.nome))   return false;
      return true;
    });
  }
  function isFiltered() {
    const f = Swift.State.filters;
    return !!(f.gestao.length || f.uf.length || f.regiao.length || f.loja.length);
  }

  /* ── Agregações ponderadas por nº de comentários ── */
  function wmean(lojas, key) {
    let num = 0, den = 0;
    lojas.forEach(l => { const w = l.comentarios || 0, v = parseFloat(l[key]); if (!isNaN(v)) { num += v * w; den += w; } });
    return den ? num / den : NaN;
  }

  function aggKpis(lojas) {
    return {
      nps_trad:    wmean(lojas, 'nps_trad'),
      nps_textual: wmean(lojas, 'nps_textual'),
      nps_hibrido: wmean(lojas, 'nps_hibrido'),
      pct_pos:     wmean(lojas, 'pct_pos'),
      pct_neu:     wmean(lojas, 'pct_neu'),
      pct_neg:     wmean(lojas, 'pct_neg'),
      comentarios: lojas.reduce((s, l) => s + (l.comentarios || 0), 0),
      lojas:       lojas.length
    };
  }

  /* ranking de categorias (problemas/elogios) somando peso = pct_loja × nº comentários */
  function aggRanking(lojas, key, k = 6) {
    const acc = {};
    lojas.forEach(l => (l[key] || []).forEach(c => {
      acc[c.cat] = (acc[c.cat] || 0) + (c.pct || 0) * (l.comentarios || 0);
    }));
    const arr = Object.entries(acc).sort((a, b) => b[1] - a[1]).slice(0, k);
    const tot = arr.reduce((s, x) => s + x[1], 0) || 1;
    return { categorias: arr.map(x => x[0]), pcts: arr.map(x => Math.round(100 * x[1] / tot)) };
  }

  /* ranking por CONTAGENS brutas (prob_counts/elog_counts) — soma das lojas
     filtradas; quando sem filtro, igual ao total global (consistente c/ evolução) */
  function aggCounts(lojas, key, k = 6) {
    const acc = {};
    lojas.forEach(l => Object.entries(l[key] || {}).forEach(([cat, n]) => { acc[cat] = (acc[cat] || 0) + n; }));
    const arr = Object.entries(acc).sort((a, b) => b[1] - a[1]).slice(0, k);
    return { categorias: arr.map(x => x[0]), contagens: arr.map(x => x[1]) };
  }

  /* temporal médio (pos/neg %) das lojas filtradas, ponderado por comentários */
  function aggTemporal(lojas) {
    const acc = {};
    lojas.forEach(l => (l.temporal || []).forEach(t => {
      const w = l.comentarios || 1;
      (acc[t.m] = acc[t.m] || { m: t.m, pos: 0, neg: 0, w: 0 });
      acc[t.m].pos += t.pos * w; acc[t.m].neg += t.neg * w; acc[t.m].w += w;
    }));
    return Object.values(acc).sort((a, b) => a.m.localeCompare(b.m))
      .map(o => ({ m: o.m, pos: +(o.pos / o.w).toFixed(1), neg: +(o.neg / o.w).toFixed(1) }));
  }

  /* NPS por tema agregado das lojas filtradas (ponderado por n do tema) */
  function aggNpsTema(lojas) {
    const acc = {};
    lojas.forEach(l => Object.entries(l.nps_tema || {}).forEach(([tema, d]) => {
      (acc[tema] = acc[tema] || { num: 0, n: 0 });
      acc[tema].num += d.nps * d.n; acc[tema].n += d.n;
    }));
    return Object.entries(acc).map(([tema, o]) => ({ tema, nps: +(o.num / o.n).toFixed(1), n: o.n }))
      .sort((a, b) => a.nps - b.nps);
  }

  /* piores lojas por tema, dentro do conjunto filtrado */
  function pioresPorTema(lojas, tema, k = 3) {
    return lojas.filter(l => l.nps_tema && l.nps_tema[tema] && l.nps_tema[tema].n >= 15)
      .map(l => ({ loja: l.nome, nps: l.nps_tema[tema].nps, n: l.nps_tema[tema].n }))
      .sort((a, b) => a.nps - b.nps).slice(0, k);
  }

  /* agrega por região (ou uf) a partir das lojas filtradas */
  function aggPorRegiao(lojas, campo = 'regiao') {
    const grp = {};
    lojas.forEach(l => { (grp[l[campo]] = grp[l[campo]] || []).push(l); });
    return Object.entries(grp).map(([nome, arr]) => ({
      nome, lojas: arr.length,
      nps_hibrido: +wmean(arr, 'nps_hibrido').toFixed(1),
      nps_trad: +wmean(arr, 'nps_trad').toFixed(1),
      pct_neg: +wmean(arr, 'pct_neg').toFixed(1)
    })).sort((a, b) => b.nps_hibrido - a.nps_hibrido);
  }

  return {
    escapeHtml, fmt, fmtInt, fmtPct, colorForNPS, colorForPctNeg, signedDelta, deltaColor,
    labelForFlag, badgeClassForFlag,
    getFilteredLojas, isFiltered, wmean, aggKpis, aggRanking, aggCounts, aggTemporal, aggNpsTema, pioresPorTema, aggPorRegiao
  };
})();
