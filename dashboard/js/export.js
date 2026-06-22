/* ═══════════════════════════════════════════════════════════════════
   SWIFT ANALYTICS — Exportar PDF
   Renderiza TODAS as telas no estado atual (com filtros/seleções),
   monta um cabeçalho de relatório e chama a impressão (Salvar como PDF, A4).
   ═══════════════════════════════════════════════════════════════════ */
window.Swift = window.Swift || {};

Swift.Export = (function () {
  const PAGES = ['overview', 'nps', 'gestao', 'temas', 'lojas', 'comparativo', 'dados'];
  const TITULOS = {
    overview: 'Visão Geral', nps: 'NPS Analytics', gestao: 'Gestão',
    temas: 'Temas & Sentimentos', lojas: 'Lojas', comparativo: 'Comparativo', dados: 'Dados e Modelo'
  };
  let busy = false;

  function init() {
    const btn = document.getElementById('btn-export-pdf');
    if (btn) btn.addEventListener('click', run);
    window.addEventListener('afterprint', cleanup);
  }

  function filtrosTexto() {
    const f = Swift.State.filters;
    const partes = [];
    const lbl = { gestao: 'Gestão', uf: 'UF', regiao: 'Região', loja: 'Loja' };
    ['gestao', 'uf', 'regiao', 'loja'].forEach(k => {
      if (f[k] && f[k].length) {
        const vals = f[k].map(v => k === 'gestao' ? Swift.Utils.labelForFlag(v) : v);
        partes.push(`${lbl[k]}: ${vals.join(', ')}`);
      }
    });
    return partes.length ? partes.join('  ·  ') : 'Sem filtros (base completa)';
  }

  function injectHeader() {
    let h = document.getElementById('print-report-header');
    if (!h) {
      h = document.createElement('div');
      h.id = 'print-report-header';
      const pc = document.querySelector('.page-content');
      pc.insertBefore(h, pc.firstChild);
    }
    const now = new Date().toLocaleString('pt-BR');
    h.innerHTML = `
      <div class="prh-top"><span class="prh-logo">Swift Analytics</span><span class="prh-date">Gerado em ${now}</span></div>
      <h1 class="prh-title">Relatório de NPS &amp; Sentimento</h1>
      <div class="prh-filtros"><strong>Filtros aplicados:</strong> ${Swift.Utils.escapeHtml(filtrosTexto())}</div>
      <div class="prh-base">Base: ${DATA.meta.comentarios.toLocaleString('pt-BR')} comentários · ${DATA.meta.lojas} lojas · ${DATA.meta.periodo}</div>`;
  }

  function run() {
    if (busy) return;
    busy = true;
    document.documentElement.setAttribute('data-theme', 'light'); // relatório sempre claro
    injectHeader();
    document.body.classList.add('report-mode');
    // títulos de página para o relatório + render de todas as telas
    PAGES.forEach(p => {
      const sec = document.getElementById('page-' + p);
      if (sec && !sec.querySelector('.print-page-title')) {
        const t = document.createElement('div');
        t.className = 'print-page-title';
        t.textContent = TITULOS[p] || p;
        sec.insertBefore(t, sec.firstChild);
      }
      try { Swift.Pages[p] && Swift.Pages[p].render(); } catch (e) { console.warn('render', p, e); }
    });
    // espera o layout/charts assentarem e imprime
    setTimeout(() => { window.print(); }, 450);
  }

  function cleanup() {
    if (!busy) return;
    busy = false;
    document.body.classList.remove('report-mode');
    document.querySelectorAll('.print-page-title').forEach(el => el.remove());
    const h = document.getElementById('print-report-header'); if (h) h.remove();
    document.documentElement.setAttribute('data-theme', Swift.State.theme); // restaura tema
    Swift.Charts.destroyAll();
    Swift.Nav.renderCurrentPage();
  }

  return { init, run };
})();
