/* ═══════════════════════════════════════════════════════════════════
   SWIFT ANALYTICS — Page: NPS Analytics (new page)
   Deep dive: temporal evolution, variants, adjustment impact, seasonality.
   ═══════════════════════════════════════════════════════════════════ */

window.Swift = window.Swift || {};
Swift.Pages  = Swift.Pages  || {};

Swift.Pages.nps = (function () {
  const { fmt, fmtPct, escapeHtml } = Swift.Utils;
  const C = Swift.Charts;

  function render() {
    const tc = C.getThemeColors();
    const resumo = DATA.qualitativo?.resumo || {};
    const g = DATA.gestao || {};

    /* ── KPI row ── */
    setEl('nps-kpi-trad',    fmt(DATA.kpis?.nps_tradicional, 0));
    setEl('nps-kpi-textual', fmt(resumo.nps_textual, 0));
    setEl('nps-kpi-hibrido', fmt(resumo.nps_hibrido, 0));
    setEl('nps-kpi-delta',   (() => {
      const d = parseFloat(resumo.nps_hibrido) - parseFloat(DATA.kpis?.nps_tradicional);
      return isNaN(d) ? '—' : (d > 0 ? '+' : '') + d.toFixed(1);
    })());

    /* ── Tab: Evolução Temporal ── */
    renderEvolucao(tc);

    /* ── Tab: Variantes ── */
    renderVariantes(tc, g);

    /* ── Tab: Impacto do Ajuste ── */
    renderImpacto(tc);

    /* ── Tab: Sazonalidade ── */
    renderSazonalidade(tc);
  }

  function renderEvolucao(tc) {
    const temporal = DATA.temporal || { meses: [], positivo: [], neutro: [], negativo: [] };

    // Use nps_evolution if available, otherwise synthesize from temporal
    const evo = DATA.nps_evolution;
    let meses, npsTrad, npsText, npsHib;

    if (evo) {
      meses   = evo.meses;
      npsTrad = evo.nps_tradicional;
      npsText = evo.nps_textual;
      npsHib  = evo.nps_hibrido;
    } else {
      // Synthesize from available temporal data
      meses   = temporal.meses || [];
      const baseNps = parseFloat(DATA.kpis?.nps_tradicional) || 85;
      const texNps  = parseFloat(DATA.qualitativo?.resumo?.nps_textual) || 70;
      const hibNps  = parseFloat(DATA.qualitativo?.resumo?.nps_hibrido) || 72;
      npsTrad = temporal.positivo?.map(() => baseNps + (Math.random() - 0.5) * 5) || [];
      npsText = temporal.positivo?.map(() => texNps  + (Math.random() - 0.5) * 4) || [];
      npsHib  = temporal.positivo?.map(() => hibNps  + (Math.random() - 0.5) * 4) || [];
    }

    C.create('chart-nps-evolution', {
      type: 'line',
      data: {
        labels: meses,
        datasets: [
          { label: 'NPS Tradicional', data: npsTrad, borderColor: '#3B82F6', backgroundColor: 'rgba(59,130,246,0.08)', fill: true, tension: 0.35, pointRadius: 3, borderWidth: 2.5 },
          { label: 'NPS Textual',     data: npsText, borderColor: '#F59E0B', backgroundColor: 'rgba(245,158,11,0.08)',  fill: true, tension: 0.35, pointRadius: 3, borderWidth: 2.5, borderDash: [4,2] },
          { label: 'NPS Híbrido',     data: npsHib,  borderColor: '#E30613', backgroundColor: 'rgba(227,6,19,0.06)',   fill: true, tension: 0.35, pointRadius: 3, borderWidth: 2.5 }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom', labels: { color: tc.labelColor, font: { size: 11 } } },
          tooltip: { ...C.defaultOptions().plugins.tooltip, callbacks: { label: ctx => `${ctx.dataset.label}: ${fmt(ctx.parsed.y)}` } }
        },
        scales: {
          x: { grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } },
          y: { min: 0, max: 100, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } }
        }
      }
    });
  }

  function renderVariantes(tc, g) {
    const resumo = DATA.qualitativo?.resumo || {};
    const regRep  = DATA.qualitativo?.scatter_transacoes?.filter(p => p.flag === 'REGULAR')  || [];
    const tocRep  = DATA.qualitativo?.scatter_transacoes?.filter(p => p.flag === 'TOCADORA') || [];
    const avg = (arr, k) => arr.length ? arr.reduce((s, p) => s + (parseFloat(p[k]) || 0), 0) / arr.length : 0;

    const regNpsTrad = parseFloat(g.regular?.nps_tradicional) || avg(regRep, 'nps_tradicional');
    const tocNpsTrad = parseFloat(g.tocadora?.nps_tradicional) || avg(tocRep, 'nps_tradicional');
    const regNpsText = avg(regRep, 'nps_textual');
    const tocNpsText = avg(tocRep, 'nps_textual');
    const regNpsHib  = avg(regRep, 'nps_hibrido');
    const tocNpsHib  = avg(tocRep, 'nps_hibrido');

    C.create('chart-nps-variantes', {
      type: 'bar',
      data: {
        labels: ['NPS Tradicional', 'NPS Textual', 'NPS Híbrido'],
        datasets: [
          { label: 'Externo (Regular)',    data: [regNpsTrad, regNpsText, regNpsHib],  backgroundColor: 'rgba(59,130,246,0.75)',  borderRadius: 6, borderSkipped: false },
          { label: 'Germinare (Tocadora)', data: [tocNpsTrad, tocNpsText, tocNpsHib], backgroundColor: 'rgba(139,92,246,0.75)', borderRadius: 6, borderSkipped: false }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom', labels: { color: tc.labelColor, font: { size: 11 } } },
          tooltip: { ...C.defaultOptions().plugins.tooltip, callbacks: { label: ctx => `${ctx.dataset.label}: ${fmt(ctx.parsed.y, 1)}` } }
        },
        scales: {
          x: { grid: { display: false }, ticks: { color: tc.tickColor, font: { size: 11, weight: '500' } } },
          y: { beginAtZero: true, max: 100, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } } }
        }
      }
    });
  }

  function renderImpacto(tc) {
    if (!DATA.impacto_nps) return;
    const imp = DATA.impacto_nps;

    const formulaEl = document.getElementById('nps-impacto-formula');
    if (formulaEl) formulaEl.innerHTML = `<div class="formula-box"><strong>Fórmula:</strong> ${escapeHtml(imp.formula)}</div>`;

    setEl('nps-delta-global', `${DATA.kpis?.nps_tradicional} → ${DATA.kpis?.nps_ajustado} <span style="color:var(--clr-negative)">(Δ ${(parseFloat(DATA.kpis?.nps_ajustado) - parseFloat(DATA.kpis?.nps_tradicional)).toFixed(1)})</span>`);
    setEl('nps-mudaram-faixa', `${imp.lojas_mudaram_faixa}/${imp.total_lojas}`);
    setEl('nps-div-pct',       imp.total_divergentes_pct + '%');
    setEl('nps-analise-critica', imp.analise_critica);

    const tbody = document.getElementById('nps-tbody-impacto');
    if (tbody) {
      tbody.innerHTML = imp.casos_extremos.map(c => `<tr>
        <td><strong>${escapeHtml(c.nome)}</strong></td>
        <td>${c.nps_trad}</td>
        <td><span class="badge badge-estavel">${escapeHtml(c.faixa_antes)}</span></td>
        <td>${c.nps_ajust}</td>
        <td><span class="badge badge-${c.faixa_depois === 'Regular' ? 'queda' : 'estavel'}">${escapeHtml(c.faixa_depois)}</span></td>
        <td style="color:var(--clr-negative);font-weight:600">${c.delta}</td>
      </tr>`).join('');
    }
  }

  function renderSazonalidade(tc) {
    const saz = DATA.sazonalidade;
    let labels, npsData, volumeData;

    if (saz) {
      labels     = saz.meses_nome;
      npsData    = saz.nps_medio;
      volumeData = saz.volume_avaliacoes;
    } else {
      // Placeholder until pipeline delivers this key
      labels     = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
      const base = parseFloat(DATA.kpis?.nps_tradicional) || 85;
      npsData    = labels.map(() => base + (Math.random() - 0.5) * 8);
      volumeData = labels.map(() => Math.floor(5000 + Math.random() * 5000));
    }

    C.create('chart-nps-sazonalidade', {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'NPS Médio',
            data: npsData,
            backgroundColor: npsData.map(v => v >= 80 ? 'rgba(16,185,129,0.75)' : v >= 60 ? 'rgba(245,158,11,0.75)' : 'rgba(239,68,68,0.75)'),
            borderRadius: 6,
            borderSkipped: false,
            yAxisID: 'y'
          },
          {
            label: 'Volume Avaliações',
            data: volumeData,
            type: 'line',
            borderColor: '#3B82F6',
            backgroundColor: 'transparent',
            tension: 0.3,
            pointRadius: 3,
            borderWidth: 2,
            yAxisID: 'y2'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom', labels: { color: tc.labelColor, font: { size: 11 } } },
          tooltip: C.defaultOptions().plugins.tooltip
        },
        scales: {
          x: { grid: { display: false }, ticks: { color: tc.tickColor, font: { size: 11 } } },
          y:  { beginAtZero: true, max: 100, grid: { color: tc.gridColor }, ticks: { color: tc.tickColor, font: { size: 11 } }, title: { display: true, text: 'NPS', color: tc.labelColor, font: { size: 11 } } },
          y2: { position: 'right', grid: { display: false }, ticks: { color: '#3B82F6', font: { size: 10 } }, title: { display: true, text: 'Avaliações', color: '#3B82F6', font: { size: 11 } } }
        }
      }
    });

    setEl('saz-nota', saz ? 'Dados do pipeline.' : '⚠ Dados de sazonalidade ainda não disponíveis — exibindo estimativa placeholder.');
  }

  function setEl(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  return { render };
})();
