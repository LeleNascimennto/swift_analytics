/* ═══════════════════════════════════════════════════════════════════
   SWIFT ANALYTICS — Filter System
   Multi-select dropdowns with checkbox panels, filter pills,
   and cascading logic (gestao → uf → regiao → loja).
   ═══════════════════════════════════════════════════════════════════ */

window.Swift = window.Swift || {};

Swift.Filter = (function () {

  const FILTER_DEFS = [
    {
      key:         'gestao',
      label:       'Gestão',
      placeholder: 'Todos os Tipos',
      staticOptions: [
        { value: 'regular',  label: 'Externo (Regular)' },
        { value: 'tocadora', label: 'Germinare (Tocadora)' }
      ]
    },
    {
      key:         'uf',
      label:       'UF',
      placeholder: 'Todas as UFs',
      dynamic:     true
    },
    {
      key:         'loja',
      label:       'Loja',
      placeholder: 'Todas as Lojas',
      dynamic:     true
    }
  ];

  let openDropdown = null;

  function init() {
    const container = document.getElementById('sidebar-filters');
    if (!container) return;

    FILTER_DEFS.forEach(def => {
      const wrap = buildMultiSelect(def);
      container.appendChild(wrap);
    });

    document.addEventListener('click', handleOutsideClick);

    const clearBtn = document.getElementById('btn-clear-filters');
    if (clearBtn) clearBtn.addEventListener('click', clearAll);

    refreshDynamicOptions();
  }

  function buildMultiSelect(def) {
    const wrap = document.createElement('div');
    wrap.className = 'filter-wrap';
    wrap.dataset.filterKey = def.key;

    const label = document.createElement('label');
    label.className = 'filter-label';
    label.textContent = def.label;
    wrap.appendChild(label);

    const ms = document.createElement('div');
    ms.className = 'multiselect';
    ms.id = `ms-${def.key}`;

    const trigger = document.createElement('button');
    trigger.className = 'multiselect-trigger';
    trigger.setAttribute('aria-haspopup', 'listbox');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-label', `Filtrar por ${def.label}`);
    trigger.innerHTML = `<span class="ms-label">${def.placeholder}</span><svg class="ms-caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>`;

    const panel = document.createElement('div');
    panel.className = 'multiselect-panel';
    panel.setAttribute('role', 'listbox');
    panel.setAttribute('aria-multiselectable', 'true');
    panel.style.display = 'none';

    const actions = document.createElement('div');
    actions.className = 'ms-actions';
    actions.innerHTML = '<button class="ms-action-btn" data-action="all">Todos</button><button class="ms-action-btn" data-action="clear">Limpar</button>';
    panel.appendChild(actions);

    const list = document.createElement('div');
    list.className = 'ms-options';
    list.id = `ms-options-${def.key}`;
    panel.appendChild(list);

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = panel.style.display !== 'none';
      closeAll();
      if (!isOpen) {
        panel.style.display = 'block';
        trigger.setAttribute('aria-expanded', 'true');
        openDropdown = ms;
      }
    });

    actions.addEventListener('click', (e) => {
      const action = e.target.dataset.action;
      if (action === 'clear') {
        Swift.State.clearFilter(def.key);
        refreshOptions(def.key);
        updateTriggerLabel(def.key, def.placeholder);
        apply();
      } else if (action === 'all') {
        Swift.State.clearFilter(def.key);
        refreshOptions(def.key);
        updateTriggerLabel(def.key, def.placeholder);
        apply();
      }
    });

    ms.appendChild(trigger);
    ms.appendChild(panel);
    wrap.appendChild(ms);

    if (def.staticOptions) {
      populateOptions(def.key, def.staticOptions, def.placeholder);
    }

    return wrap;
  }

  function populateOptions(key, options, placeholder) {
    const list = document.getElementById(`ms-options-${key}`);
    if (!list) return;
    const current = Swift.State.filters[key];
    list.innerHTML = options.map(opt => `
      <label class="ms-option" role="option" aria-selected="${current.includes(opt.value)}">
        <input type="checkbox" value="${Swift.Utils.escapeHtml(opt.value)}" ${current.includes(opt.value) ? 'checked' : ''}>
        <span>${Swift.Utils.escapeHtml(opt.label)}</span>
      </label>`).join('');

    list.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      cb.addEventListener('change', () => {
        const checked = Array.from(list.querySelectorAll('input:checked')).map(i => i.value);
        Swift.State.setFilter(key, checked);
        updateTriggerLabel(key, placeholder);
        cascadeBelow(key);
        apply();
      });
    });
  }

  function refreshOptions(key) {
    const def = FILTER_DEFS.find(d => d.key === key);
    if (!def) return;
    if (def.staticOptions) {
      populateOptions(key, def.staticOptions, def.placeholder);
    } else {
      refreshDynamicOptions();
    }
  }

  function refreshDynamicOptions() {
    const f = Swift.State.filters;
    let lojas = DATA.lojas || [];
    if (f.gestao.length) lojas = lojas.filter(l => f.gestao.includes(l.flag));

    const ufs    = [...new Set(lojas.map(l => l.uf).filter(Boolean))].sort();
    if (f.uf.length) lojas = lojas.filter(l => f.uf.includes(l.uf));
    const lojaNames = [...new Set(lojas.map(l => l.nome).filter(Boolean))].sort();

    populateOptions('uf',   ufs.map(u => ({ value: u, label: u })),           'Todas as UFs');
    populateOptions('loja', lojaNames.map(n => ({ value: n, label: n })),     'Todas as Lojas');
  }

  function cascadeBelow(changedKey) {
    if (changedKey === 'gestao') {
      Swift.State.clearFilter('uf');
      Swift.State.clearFilter('regiao');
      Swift.State.clearFilter('loja');
      refreshDynamicOptions();
    } else if (changedKey === 'uf') {
      Swift.State.clearFilter('regiao');
      Swift.State.clearFilter('loja');
      refreshDynamicOptions();
    }
  }

  function updateTriggerLabel(key, placeholder) {
    const ms = document.getElementById(`ms-${key}`);
    if (!ms) return;
    const current = Swift.State.filters[key];
    const label = ms.querySelector('.ms-label');
    if (!label) return;
    label.textContent = current.length === 0 ? placeholder : `${current.length} selecionado${current.length > 1 ? 's' : ''}`;
  }

  function apply() {
    renderPills();
    Swift.Nav.renderCurrentPage();
  }

  function renderPills() {
    const bar = document.getElementById('filter-pills');
    if (!bar) return;

    const pills = [];
    const f = Swift.State.filters;

    const def = FILTER_DEFS;
    def.forEach(d => {
      f[d.key].forEach(v => {
        const optLabel = d.staticOptions?.find(o => o.value === v)?.label || v;
        pills.push({ key: d.key, value: v, label: `${d.label}: ${optLabel}` });
      });
    });

    const clearAll = document.getElementById('pills-clear-all');

    if (!pills.length) {
      bar.innerHTML = '';
      if (clearAll) clearAll.style.display = 'none';
      return;
    }

    bar.innerHTML = pills.map(p =>
      `<span class="filter-pill" role="button" tabindex="0" aria-label="Remover filtro ${Swift.Utils.escapeHtml(p.label)}" data-key="${p.key}" data-value="${Swift.Utils.escapeHtml(p.value)}">${Swift.Utils.escapeHtml(p.label)} <span class="pill-remove" aria-hidden="true">×</span></span>`
    ).join('');

    bar.querySelectorAll('.filter-pill').forEach(pill => {
      const remove = () => {
        const key = pill.dataset.key;
        const val = pill.dataset.value;
        const current = Swift.State.filters[key].filter(v => v !== val);
        Swift.State.setFilter(key, current);
        cascadeBelow(key);
        updateTriggerLabel(key, FILTER_DEFS.find(d => d.key === key)?.placeholder || 'Todos');
        refreshOptions(key);
        apply();
      };
      pill.addEventListener('click', remove);
      pill.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); remove(); } });
    });

    if (clearAll) clearAll.style.display = 'inline-flex';
  }

  function clearAll() {
    Swift.State.clearAllFilters();
    FILTER_DEFS.forEach(d => updateTriggerLabel(d.key, d.placeholder));
    refreshDynamicOptions();
    apply();
  }

  function closeAll() {
    document.querySelectorAll('.multiselect-panel').forEach(p => { p.style.display = 'none'; });
    document.querySelectorAll('.multiselect-trigger').forEach(t => t.setAttribute('aria-expanded', 'false'));
    openDropdown = null;
  }

  function handleOutsideClick(e) {
    if (openDropdown && !openDropdown.contains(e.target)) closeAll();
  }

  return { init, apply, renderPills, clearAll };
})();
