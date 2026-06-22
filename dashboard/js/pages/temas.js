/* ═══════════════════════════════════════════════════════════════════
   SWIFT ANALYTICS — Page: Temas & Sentimentos
   ═══════════════════════════════════════════════════════════════════ */

window.Swift = window.Swift || {};
Swift.Pages  = Swift.Pages  || {};

Swift.Pages.temas = (function () {
  const { escapeHtml, fmt } = Swift.Utils;
  const C = Swift.Charts;

  function render() {
    const tc  = C.getThemeColors();
    const f   = Swift.State.filters;
    const bd  = Swift.Utils.getBreakdownForFilter();
    const noFilters = !f.gestao.length && !f.uf.length && !f.loja.length;

    const problemas = (bd && noFilters) ? bd.problemas : DATA.problemas;
    const elogios   = (bd && noFilters) ? bd.elogios   : DATA.elogios;
    const evolucao  = (bd && noFilters) ? bd.evolucao  : DATA.evolucao_problemas;

    renderProblemas(tc, problemas, evolucao);
    renderElogios(tc, elogios);
    renderDivergencias();
    renderNpsTema(tc);
    renderLinguagem(tc);
  }

  function renderProblemas(tc, problemas, evolucao) {
    C.create('chart-ranking-problemas', {
      type: 'bar',
      data: {
        labels: problemas.categorias,
        datasets: [{ data: problemas.contagens, backgroundColor: C.PROBLEM_COLORS, borderRadius: 6, borderSkipped: false }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: { legend: { display: false }, tooltip: C.defaultOptions().plugins.tooltip },
        scales: {
          x: { grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } },
          y: { grid: { display: false }, ticks: { color: tc.tickColor, font: { size: 11, weight: '500' } } }
        }
      }
    });

    const meses   = evolucao.meses;
    const catKeys = Object.keys(evolucao).filter(k => k !== 'meses');
    C.create('chart-evolucao-problemas', {
      type: 'line',
      data: {
        labels: meses,
        datasets: catKeys.map((cat, i) => ({
          label: cat.replace(/\b\w/g, c => c.toUpperCase()),
          data: evolucao[cat],
          borderColor: C.PROBLEM_COLORS[i % C.PROBLEM_COLORS.length],
          tension: 0.35, pointRadius: 2.5, borderWidth: 2
        }))
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'bottom', labels: { color: tc.labelColor, font: { size: 11 } } }, tooltip: C.defaultOptions().plugins.tooltip },
        scales: {
          x: { grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } },
          y: { beginAtZero: true, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } }
        }
      }
    });

    renderExamples('exemplos-problemas', problemas.exemplos);
  }

  function renderElogios(tc, elogios) {
    C.create('chart-ranking-elogios', {
      type: 'bar',
      data: {
        labels: elogios.categorias,
        datasets: [{ data: elogios.contagens, backgroundColor: C.PRAISE_COLORS, borderRadius: 6, borderSkipped: false }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: { legend: { display: false }, tooltip: C.defaultOptions().plugins.tooltip },
        scales: {
          x: { grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } },
          y: { grid: { display: false }, ticks: { color: tc.tickColor, font: { size: 11, weight: '500' } } }
        }
      }
    });

    renderExamples('exemplos-elogios', elogios.exemplos);
  }

  function renderDivergencias() {
    const d = DATA.divergencias;
    if (!d) return;

    setEl('kpi-divergentes', d.total_pct + '%');
    setEl('kpi-prom-neg',    d.promotor_negativo?.toLocaleString());
    setEl('kpi-det-pos',     d.detrator_positivo?.toLocaleString());

    let divHtml = '';
    for (const [tipo, exemplos] of Object.entries(d.exemplos || {})) {
      divHtml += `<div class="example-category"><h4>${escapeHtml(tipo)}</h4>`;
      exemplos.forEach(ex => { divHtml += `<div class="example-item"><strong>${escapeHtml(ex.nota)}:</strong> ${escapeHtml(ex.texto)}</div>`; });
      divHtml += '</div>';
    }
    setEl('exemplos-divergencias', divHtml);
  }

  function renderNpsTema(tc) {
    if (!DATA.nps_temas) return;
    const temas = DATA.nps_temas;
    const global = temas.global;

    C.create('chart-nps-tema-global', {
      type: 'bar',
      data: {
        labels: global.map(t => t.tema),
        datasets: [{
          data: global.map(t => t.nps),
          backgroundColor: global.map(t => t.nps < 60 ? '#EF4444' : t.nps < 80 ? '#F59E0B' : '#10B981'),
          borderRadius: 6, borderSkipped: false
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: { legend: { display: false }, tooltip: { ...C.defaultOptions().plugins.tooltip, callbacks: { label: ctx => `NPS: ${fmt(ctx.parsed.x)}` } } },
        scales: {
          x: { min: 0, max: 100, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } },
          y: { grid: { display: false }, ticks: { color: tc.tickColor, font: { size: 11, weight: '500' } } }
        }
      }
    });

    const regTemas = temas.por_gestao.regular;
    const tocTemas = temas.por_gestao.tocadora;

    C.create('chart-nps-tema-gestao', {
      type: 'bar',
      data: {
        labels: regTemas.map(t => t.tema),
        datasets: [
          { label: 'Externo',   data: regTemas.map(t => t.nps), backgroundColor: 'rgba(59,130,246,0.75)',  borderRadius: 4, borderSkipped: false },
          { label: 'Germinare', data: tocTemas.map(t => t.nps), backgroundColor: 'rgba(139,92,246,0.75)', borderRadius: 4, borderSkipped: false }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'bottom', labels: { color: tc.labelColor, font: { size: 11 } } }, tooltip: C.defaultOptions().plugins.tooltip },
        scales: {
          x: { grid: { display: false }, ticks: { color: tc.tickColor, font: { size: 11 } } },
          y: { min: 0, max: 100, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } }
        }
      }
    });

    const worst    = global[0];
    const bestDiff = regTemas.reduce((max, t, i) => {
      const diff = t.nps - tocTemas[i].nps;
      return diff > max.diff ? { tema: t.tema, diff } : max;
    }, { tema: '', diff: 0 });
    setEl('nps-tema-insight', `
      <strong>${escapeHtml(worst.tema)}</strong> é o tema mais crítico (NPS ${worst.nps}) — apenas ${worst.pct_pos}% dos comentários são positivos.
      A maior diferença entre gestões está em <strong>${escapeHtml(bestDiff.tema)}</strong>: Externo supera Germinare em ${bestDiff.diff.toFixed(1)} pontos.`);

    let html = '';
    for (const [tema, dados] of Object.entries(temas.por_loja)) {
      html += `<div class="nps-tema-card"><h4>${escapeHtml(tema)}</h4><div class="nps-tema-list">`;
      dados.piores.slice(0, 3).forEach((l, i) => {
        const color = l.nps < 50 ? 'var(--clr-negative)' : l.nps < 70 ? 'var(--clr-neutral)' : 'var(--clr-positive)';
        html += `<div class="nps-tema-item"><span class="rank">${i + 1}.</span><span class="loja-name">${escapeHtml(l.loja)}</span><span class="nps-value" style="color:${color}">NPS ${l.nps}</span><span class="n-count">(n=${l.n})</span></div>`;
      });
      html += '</div></div>';
    }
    setEl('nps-tema-lojas-grid', html);
  }

  function renderLinguagem(tc) {
    // Comment length vs sentiment chart
    const tam = DATA.qualitativo?.resumo?.tamanho_comentario_por_sentimento;
    if (tam) {
      const labels = Object.keys(tam).map(k => k.charAt(0).toUpperCase() + k.slice(1));
      const avgChars = Object.values(tam).map(v => v.media_chars || v);

      C.create('chart-comment-length', {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            data: avgChars,
            backgroundColor: ['#EF4444', '#F59E0B', '#10B981'],
            borderRadius: 6, borderSkipped: false
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          plugins: {
            legend: { display: false },
            tooltip: { ...C.defaultOptions().plugins.tooltip, callbacks: { label: ctx => `Média: ${Math.round(ctx.parsed.x)} chars` } }
          },
          scales: {
            x: { beginAtZero: true, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } }, title: { display: true, text: 'Média de caracteres', color: tc.labelColor, font: { size: 11 } } },
            y: { grid: { display: false }, ticks: { color: tc.tickColor, font: { size: 11, weight: '600' } } }
          }
        }
      });
    }

    // Word clouds
    const bd = DATA.breakdowns;
    if (bd?.regular?.wordcloud)  renderWordCloud('wordcloud-regular',  bd.regular.wordcloud);
    if (bd?.tocadora?.wordcloud) renderWordCloud('wordcloud-tocadora', bd.tocadora.wordcloud);

    // Language insight
    const langEl = document.getElementById('linguagem-insight');
    if (langEl && bd?.regular?.wordcloud && bd?.tocadora?.wordcloud) {
      const top = (wc) => wc.slice().sort((a, b) => b.size - a.size).slice(0, 5).map(w => escapeHtml(w.word));
      langEl.innerHTML = `Termos mais frequentes — <strong>Externo:</strong> ${top(bd.regular.wordcloud).join(', ')}. <strong>Germinare:</strong> ${top(bd.tocadora.wordcloud).join(', ')}.`;
    }
  }

  function renderExamples(containerId, data) {
    let html = '';
    for (const [cat, exemplos] of Object.entries(data)) {
      html += `<div class="example-category"><h4>${escapeHtml(cat)}</h4>`;
      exemplos.forEach(ex => { html += `<div class="example-item">${escapeHtml(ex)}</div>`; });
      html += '</div>';
    }
    setEl(containerId, html);
  }

  function renderWordCloud(id, words) {
    const el = document.getElementById(id);
    if (!el || !words) return;
    el.innerHTML = words.map(w => `<span class="word size-${w.size}">${escapeHtml(w.word)}</span>`).join('');
  }

  function setEl(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  return { render };
})();
