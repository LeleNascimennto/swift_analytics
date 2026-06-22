/* ═══════════════════════════════════════════════════════════════════
   SWIFT ANALYTICS — Utility Functions
   ═══════════════════════════════════════════════════════════════════ */

window.Swift = window.Swift || {};

Swift.Utils = (function () {

  function escapeHtml(value) {
    if (value === null || value === undefined) return '';
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function fmt(value, decimals = 1) {
    const n = parseFloat(value);
    if (isNaN(n)) return '--';
    return n.toFixed(decimals);
  }

  function fmtInt(value) {
    const n = parseInt(value, 10);
    if (isNaN(n)) return '--';
    return n.toLocaleString('pt-BR');
  }

  function fmtPct(value, decimals = 1) {
    return fmt(value, decimals) + '%';
  }

  function colorForNPS(nps) {
    const n = parseFloat(nps);
    if (isNaN(n)) return 'var(--tx-muted)';
    if (n >= 80) return 'var(--clr-positive)';
    if (n >= 60) return 'var(--clr-neutral)';
    return 'var(--clr-negative)';
  }

  function colorForPctNeg(pct) {
    const n = parseFloat(pct);
    if (isNaN(n)) return 'var(--tx-secondary)';
    if (n > 12) return 'var(--clr-negative)';
    if (n > 8)  return 'var(--clr-neutral)';
    return 'var(--tx-secondary)';
  }

  function signedDelta(delta) {
    const n = parseFloat(delta);
    if (isNaN(n)) return '';
    const prefix = n > 0 ? '+' : '';
    return prefix + n.toFixed(1);
  }

  function deltaColor(delta) {
    const n = parseFloat(delta);
    if (isNaN(n)) return 'var(--tx-muted)';
    if (n < -3) return 'var(--clr-negative)';
    if (n > 3)  return 'var(--clr-positive)';
    return 'var(--tx-secondary)';
  }

  function getFilteredLojas() {
    const f = Swift.State.filters;
    return (DATA.lojas || []).filter(l => {
      if (f.gestao.length > 0 && !f.gestao.includes(l.flag))     return false;
      if (f.uf.length > 0    && !f.uf.includes(l.uf))             return false;
      if (f.regiao.length > 0 && !f.regiao.includes(l.regiao))   return false;
      if (f.loja.length > 0  && !f.loja.includes(l.nome))         return false;
      if (f.faixaNps.length > 0) {
        const nps = parseFloat(l.nps_trad);
        const inRange = f.faixaNps.some(range => {
          if (range === 'excelente') return nps >= 80;
          if (range === 'bom')       return nps >= 60 && nps < 80;
          if (range === 'regular')   return nps >= 40 && nps < 60;
          if (range === 'critico')   return nps < 40;
          return true;
        });
        if (!inRange) return false;
      }
      if (f.alertaStatus.length > 0 && !f.alertaStatus.includes(l.alerta)) return false;
      return true;
    });
  }

  function getAvgKpis(lojas) {
    if (!lojas.length) return DATA.kpis;
    const avg = (k) => lojas.reduce((s, l) => s + (parseFloat(l[k]) || 0), 0) / lojas.length;
    return {
      nps_tradicional:  avg('nps_trad').toFixed(1),
      nps_ajustado:     avg('nps_ajust').toFixed(1),
      pct_positivo:     avg('pct_pos').toFixed(1),
      pct_neutro:       (100 - avg('pct_pos') - avg('pct_neg')).toFixed(1),
      pct_negativo:     avg('pct_neg').toFixed(1),
      lojas_alerta:     lojas.filter(l => l.alerta !== 'ESTAVEL').length,
      total_comentarios: DATA.kpis.total_comentarios
    };
  }

  function getBreakdownForFilter() {
    const f = Swift.State.filters;
    if (f.gestao.length === 1 && f.uf.length === 0 && DATA.breakdowns?.[f.gestao[0]]) {
      return DATA.breakdowns[f.gestao[0]];
    }
    return null;
  }

  function labelForFlag(flag) {
    if (!flag) return '';
    return flag.toLowerCase() === 'tocadora' || flag === 'TOCADORA' ? 'Germinare' : 'Externo';
  }

  function badgeClassForFlag(flag) {
    const f = (flag || '').toLowerCase();
    return f === 'tocadora' ? 'badge-tocadora' : 'badge-regular';
  }

  function badgeClassForAlerta(alerta) {
    if (alerta === 'ALERTA_QUEDA')   return 'badge-queda';
    if (alerta === 'ALERTA_MELHORA') return 'badge-melhora';
    return 'badge-estavel';
  }

  function labelForAlerta(alerta) {
    if (alerta === 'ALERTA_QUEDA')   return '▼ Queda';
    if (alerta === 'ALERTA_MELHORA') return '▲ Melhora';
    return 'Estável';
  }

  return {
    escapeHtml,
    fmt,
    fmtInt,
    fmtPct,
    colorForNPS,
    colorForPctNeg,
    signedDelta,
    deltaColor,
    getFilteredLojas,
    getAvgKpis,
    getBreakdownForFilter,
    labelForFlag,
    badgeClassForFlag,
    badgeClassForAlerta,
    labelForAlerta
  };
})();
