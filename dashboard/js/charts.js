/* ═══════════════════════════════════════════════════════════════════
   SWIFT ANALYTICS — Chart Factory
   Wraps Chart.js with theme-aware defaults and instance registry.
   ═══════════════════════════════════════════════════════════════════ */

window.Swift = window.Swift || {};

Swift.Charts = (function () {
  const registry = {};

  /* Brand + data palette — 6 categories */
  const PALETTE = {
    brand:    '#E30613',
    positive: '#10B981',
    neutral:  '#F59E0B',
    negative: '#EF4444',
    info:     '#3B82F6',
    purple:   '#8B5CF6',
    teal:     '#14B8A6',
    orange:   '#F97316',
    regular:  '#3B82F6',
    tocadora: '#8B5CF6'
  };

  const DATA_COLORS = [
    '#E30613', '#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#F97316',
    '#14B8A6', '#EC4899', '#6366F1', '#84CC16'
  ];

  const PROBLEM_COLORS = ['#EF4444', '#F97316', '#F59E0B', '#EC4899', '#8B5CF6', '#E30613'];
  const PRAISE_COLORS  = ['#10B981', '#14B8A6', '#6366F1', '#3B82F6', '#84CC16', '#2ECC71'];
  const TREND_COLORS   = ['#EF4444', '#F97316', '#F59E0B', '#EC4899'];
  const IMPROVE_COLORS = ['#10B981', '#14B8A6', '#6366F1'];

  function getThemeColors() {
    const s = getComputedStyle(document.documentElement);
    const get = (v) => s.getPropertyValue(v).trim();
    return {
      gridColor:    get('--bd-color') || '#E2E8F0',
      tickColor:    get('--tx-muted') || '#94A3B8',
      labelColor:   get('--tx-secondary') || '#475569',
      cardBg:       get('--bg-card') || '#FFFFFF',
      textPrimary:  get('--tx-primary') || '#0F172A'
    };
  }

  function defaultOptions(extra = {}) {
    const tc = getThemeColors();
    return {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: tc.labelColor,
            font: { family: "'Inter', sans-serif", size: 11 },
            boxWidth: 10,
            padding: 14
          }
        },
        tooltip: {
          backgroundColor: 'rgba(15,17,23,0.92)',
          titleColor: '#F0F6FC',
          bodyColor: '#CDD9E5',
          borderColor: 'rgba(255,255,255,0.1)',
          borderWidth: 1,
          padding: 10,
          cornerRadius: 8,
          titleFont: { family: "'Inter', sans-serif", weight: '600', size: 12 },
          bodyFont: { family: "'Inter', sans-serif", size: 12 }
        }
      },
      scales: {
        x: {
          grid:  { color: tc.gridColor, drawBorder: false },
          ticks: { color: tc.tickColor, font: { family: "'Inter', sans-serif", size: 11 } }
        },
        y: {
          grid:  { color: tc.gridColor, drawBorder: false },
          ticks: { color: tc.tickColor, font: { family: "'Inter', sans-serif", size: 11 } }
        }
      },
      ...extra
    };
  }

  function create(id, config) {
    if (registry[id]) {
      try { registry[id].destroy(); } catch (e) {}
      delete registry[id];
    }
    const canvas = document.getElementById(id);
    if (!canvas) return null;

    const tc = getThemeColors();
    if (config.options?.scales?.x) {
      config.options.scales.x.grid  = config.options.scales.x.grid  || { color: tc.gridColor, drawBorder: false };
      config.options.scales.x.ticks = config.options.scales.x.ticks || { color: tc.tickColor, font: { family: "'Inter', sans-serif", size: 11 } };
    }
    if (config.options?.scales?.y) {
      config.options.scales.y.grid  = config.options.scales.y.grid  || { color: tc.gridColor, drawBorder: false };
      config.options.scales.y.ticks = config.options.scales.y.ticks || { color: tc.tickColor, font: { family: "'Inter', sans-serif", size: 11 } };
    }
    if (config.options?.plugins?.legend?.labels) {
      config.options.plugins.legend.labels.color = config.options.plugins.legend.labels.color || tc.labelColor;
    }
    if (config.options?.plugins?.legend) {
      config.options.plugins.legend.labels = config.options.plugins.legend.labels || {};
      config.options.plugins.legend.labels.color = tc.labelColor;
    }

    const chart = new Chart(canvas, config);
    registry[id] = chart;
    return chart;
  }

  function destroyAll() {
    Object.keys(registry).forEach(id => {
      try { registry[id].destroy(); } catch (e) {}
      delete registry[id];
    });
  }

  function destroyPage(ids) {
    ids.forEach(id => {
      if (registry[id]) {
        try { registry[id].destroy(); } catch (e) {}
        delete registry[id];
      }
    });
  }

  return {
    create,
    destroyAll,
    destroyPage,
    defaultOptions,
    getThemeColors,
    PALETTE,
    DATA_COLORS,
    PROBLEM_COLORS,
    PRAISE_COLORS,
    TREND_COLORS,
    IMPROVE_COLORS
  };
})();
