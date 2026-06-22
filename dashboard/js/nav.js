/* ═══════════════════════════════════════════════════════════════════
   SWIFT ANALYTICS — Navigation Module
   Sidebar page routing and sub-tab switching.
   ═══════════════════════════════════════════════════════════════════ */

window.Swift = window.Swift || {};

Swift.Nav = (function () {
  function init() {
    document.querySelectorAll('.nav-item[data-page]').forEach(item => {
      item.addEventListener('click', () => navigateTo(item.dataset.page));
    });

    document.querySelectorAll('.sub-tabs').forEach(container => {
      container.querySelectorAll('.sub-tab').forEach(tab => {
        tab.addEventListener('click', () => {
          const page = tab.closest('.page');
          if (!page) return;
          const pageId = page.id.replace('page-', '');
          page.querySelectorAll('.sub-tab').forEach(t => t.classList.remove('active'));
          page.querySelectorAll('.subtab-content').forEach(c => c.classList.remove('active'));
          tab.classList.add('active');
          const content = document.getElementById(`subtab-${tab.dataset.subtab}`);
          if (content) content.classList.add('active');
          Swift.State.setSubtab(pageId, tab.dataset.subtab);
        });
      });
    });

    const themBtn = document.getElementById('btn-theme');
    if (themBtn) {
      themBtn.addEventListener('click', () => {
        const next = Swift.State.theme === 'dark' ? 'light' : 'dark';
        Swift.State.setTheme(next);
        updateThemeIcon(next);
        Swift.Charts.destroyAll();
        renderCurrentPage();
      });
    }
    updateThemeIcon(Swift.State.theme);
  }

  function navigateTo(page) {
    document.querySelectorAll('.nav-item[data-page]').forEach(i => i.classList.remove('active'));
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    const navItem = document.querySelector(`.nav-item[data-page="${page}"]`);
    const pageEl  = document.getElementById(`page-${page}`);

    if (navItem) navItem.classList.add('active');
    if (pageEl)  pageEl.classList.add('active');

    Swift.State.setPage(page);
    renderCurrentPage();
    window.scrollTo(0, 0);
  }

  function renderCurrentPage() {
    const page = Swift.State.page;
    const pages = Swift.Pages;
    if (pages && pages[page] && typeof pages[page].render === 'function') {
      pages[page].render(Swift.State.filters);
    }
  }

  function updateThemeIcon(theme) {
    const btn = document.getElementById('btn-theme');
    if (!btn) return;
    btn.setAttribute('aria-label', theme === 'dark' ? 'Mudar para modo claro' : 'Mudar para modo escuro');
    btn.innerHTML = theme === 'dark'
      ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg><span>Modo Claro</span>'
      : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg><span>Modo Escuro</span>';
  }

  return { init, navigateTo, renderCurrentPage };
})();
