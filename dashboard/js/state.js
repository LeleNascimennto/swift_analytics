/* ═══════════════════════════════════════════════════════════════════
   SWIFT ANALYTICS — State Module
   Single source of truth for filter state, theme, and routing.
   ═══════════════════════════════════════════════════════════════════ */

window.Swift = window.Swift || {};

Swift.State = (function () {
  const STORAGE_KEY = 'sa_theme';
  const DEFAULT_THEME = 'light';

  const state = {
    theme: localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME,

    filters: {
      gestao:      [],   // [] = all; ['regular'] or ['tocadora'] or both
      uf:          [],
      regiao:      [],
      loja:        [],
      faixaNps:    [],
      alertaStatus:[]
    },

    page:   'overview',
    subtab: {
      temas:    'problemas',
      nps:      'evolucao',
      lojas:    'tabela',
      dados:    'qualidade'
    }
  };

  function setTheme(theme) {
    state.theme = theme;
    localStorage.setItem(STORAGE_KEY, theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

  function setFilter(key, values) {
    if (!Array.isArray(values)) values = [values];
    state.filters[key] = values;
  }

  function clearFilter(key) {
    state.filters[key] = [];
  }

  function clearAllFilters() {
    Object.keys(state.filters).forEach(k => { state.filters[k] = []; });
  }

  function hasActiveFilters() {
    return Object.values(state.filters).some(arr => arr.length > 0);
  }

  function setPage(page) {
    state.page = page;
  }

  function setSubtab(page, tab) {
    state.subtab[page] = tab;
  }

  return {
    get theme()   { return state.theme; },
    get filters() { return state.filters; },
    get page()    { return state.page; },
    get subtab()  { return state.subtab; },
    setTheme,
    setFilter,
    clearFilter,
    clearAllFilters,
    hasActiveFilters,
    setPage,
    setSubtab
  };
})();
