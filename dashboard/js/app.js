// ═══════════════════════════════════════════════════════════════════
// SWIFT ANALYTICS — App Logic v4 (filtros globais afetam tudo)
// ═══════════════════════════════════════════════════════════════════

let charts = {};

// ═══ SEGURANÇA ═══
// Texto livre de cliente (comentários, exemplos) é injetado via innerHTML.
// escapeHtml() neutraliza qualquer HTML embutido no comentário antes de renderizar.
function escapeHtml(value) {
    if (value === null || value === undefined) return '';
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initSubTabs();
    initFilters();
    renderAll();
});

function renderAll() {
    renderOverview();
    renderGestao();
    renderTemas();
    renderLojas();
    renderAvancadas();
}

// ═══ FILTER STATE ═══
function getActiveFilter() {
    return {
        gerente: document.getElementById('filter-gerente').value,
        uf: document.getElementById('filter-uf').value,
        loja: document.getElementById('filter-loja').value
    };
}

function getFilteredLojas() {
    const f = getActiveFilter();
    return DATA.lojas.filter(l => {
        if (f.gerente !== 'todos' && l.flag !== f.gerente) return false;
        if (f.uf !== 'todas' && l.uf !== f.uf) return false;
        if (f.loja !== 'todas' && l.nome !== f.loja) return false;
        return true;
    });
}

// Get the right dataset based on gerente filter
function getDataForFilter() {
    const f = getActiveFilter();
    if (f.gerente !== 'todos' && DATA.breakdowns[f.gerente]) {
        return DATA.breakdowns[f.gerente];
    }
    return null; // use global
}

// ═══ NAVIGATION ═══
function initNavigation() {
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(`page-${tab.dataset.page}`).classList.add('active');
        });
    });
}

function initSubTabs() {
    document.querySelectorAll('.sub-tabs').forEach(container => {
        container.querySelectorAll('.sub-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const page = tab.closest('.page');
                page.querySelectorAll('.sub-tab').forEach(t => t.classList.remove('active'));
                page.querySelectorAll('.subtab-content').forEach(c => c.classList.remove('active'));
                tab.classList.add('active');
                document.getElementById(`subtab-${tab.dataset.subtab}`).classList.add('active');
            });
        });
    });
}

function initFilters() {
    // Populate lojas
    const selectLoja = document.getElementById('filter-loja');
    DATA.lojas.forEach(loja => {
        const opt = document.createElement('option');
        opt.value = loja.nome;
        opt.textContent = loja.nome;
        selectLoja.appendChild(opt);
    });

    // Populate UFs
    const selectUf = document.getElementById('filter-uf');
    if (DATA.ufs) {
        DATA.ufs.forEach(uf => {
            const opt = document.createElement('option');
            opt.value = uf;
            opt.textContent = uf;
            selectUf.appendChild(opt);
        });
    }

    // All filters trigger full re-render
    document.getElementById('filter-gerente').addEventListener('change', () => {
        // When gerente changes, also filter loja dropdown
        updateLojaDropdown();
        renderAll();
    });
    document.getElementById('filter-uf').addEventListener('change', () => {
        updateLojaDropdown();
        renderAll();
    });
    document.getElementById('filter-loja').addEventListener('change', () => {
        renderAll();
        // If specific loja selected, auto-show detail
        const f = getActiveFilter();
        if (f.loja !== 'todas') {
            // Switch to Lojas tab and show detail
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            document.querySelector('[data-page="lojas"]').classList.add('active');
            document.getElementById('page-lojas').classList.add('active');
            showLojaDetail(f.loja);
        }
    });
    document.getElementById('filter-alerta')?.addEventListener('change', renderLojas);
    document.getElementById('search-loja')?.addEventListener('input', renderLojas);
}

function updateLojaDropdown() {
    const f = getActiveFilter();
    const selectLoja = document.getElementById('filter-loja');
    const currentVal = selectLoja.value;
    selectLoja.innerHTML = '<option value="todas">Todas as Lojas</option>';
    
    let lojas = DATA.lojas;
    if (f.gerente !== 'todos') lojas = lojas.filter(l => l.flag === f.gerente);
    if (f.uf !== 'todas') lojas = lojas.filter(l => l.uf === f.uf);
    
    lojas.forEach(loja => {
        const opt = document.createElement('option');
        opt.value = loja.nome;
        opt.textContent = loja.nome;
        if (loja.nome === currentVal) opt.selected = true;
        selectLoja.appendChild(opt);
    });
}

// ═══ CHART HELPER ═══
function createChart(id, config) {
    if (charts[id]) { charts[id].destroy(); }
    const canvas = document.getElementById(id);
    if (!canvas) return null;
    charts[id] = new Chart(canvas, config);
    return charts[id];
}

// ═══ OVERVIEW (3.4 — Compilado Executivo) ═══
function renderOverview() {
    const breakdown = getDataForFilter();
    const filteredLojas = getFilteredLojas();
    const f = getActiveFilter();
    const isFiltered = f.gerente !== 'todos' || f.uf !== 'todas' || f.loja !== 'todas';

    // KPIs
    let kpis;
    if (f.loja !== 'todas') {
        const loja = DATA.lojas.find(l => l.nome === f.loja);
        kpis = loja ? { nps_tradicional: loja.nps_trad, nps_ajustado: loja.nps_ajust, pct_positivo: loja.pct_pos, pct_neutro: 100 - loja.pct_pos - loja.pct_neg, pct_negativo: loja.pct_neg, lojas_alerta: loja.alerta !== 'ESTAVEL' ? 1 : 0, total_comentarios: '-' } : DATA.kpis;
    } else if (breakdown && f.uf === 'todas') {
        kpis = breakdown.kpis;
    } else if (isFiltered && filteredLojas.length > 0) {
        const avg = (arr, k) => arr.reduce((s, l) => s + (l[k] || 0), 0) / arr.length;
        kpis = { nps_tradicional: avg(filteredLojas, 'nps_trad').toFixed(1), nps_ajustado: avg(filteredLojas, 'nps_ajust').toFixed(1), pct_positivo: avg(filteredLojas, 'pct_pos').toFixed(1), pct_neutro: (100 - avg(filteredLojas, 'pct_pos') - avg(filteredLojas, 'pct_neg')).toFixed(1), pct_negativo: avg(filteredLojas, 'pct_neg').toFixed(1), lojas_alerta: filteredLojas.filter(l => l.alerta !== 'ESTAVEL').length, total_comentarios: DATA.kpis.total_comentarios };
    } else {
        kpis = DATA.kpis;
    }

    document.getElementById('kpi-nps-trad').textContent = parseFloat(kpis.nps_tradicional).toFixed(0);
    document.getElementById('kpi-nps-ajust').textContent = parseFloat(kpis.nps_ajustado).toFixed(0);
    document.getElementById('kpi-positivo').textContent = parseFloat(kpis.pct_positivo).toFixed(1) + '%';
    document.getElementById('kpi-neutro').textContent = parseFloat(kpis.pct_neutro).toFixed(1) + '%';
    document.getElementById('kpi-negativo').textContent = parseFloat(kpis.pct_negativo).toFixed(1) + '%';
    document.getElementById('kpi-alertas').textContent = kpis.lojas_alerta;
    document.getElementById('total-comentarios').textContent = (typeof kpis.total_comentarios === 'number') ? kpis.total_comentarios.toLocaleString() : kpis.total_comentarios;
    document.getElementById('insight-text').textContent = DATA.compilado.insight;

    // Compilado
    const compilado = (breakdown && f.uf === 'todas') ? breakdown.compilado : DATA.compilado;
    document.getElementById('fortalezas-list').innerHTML = compilado.fortalezas.map((ft, i) => `
        <div class="compilado-item"><span class="rank">${i+1}.</span><span class="cat-name">${escapeHtml(ft.cat)}</span><span class="cat-pct">(${ft.pct}% dos elogios)</span><div class="cat-example">${escapeHtml(ft.exemplo)}</div></div>`).join('');
    document.getElementById('atencao-list').innerHTML = compilado.atencao.map((at, i) => `
        <div class="compilado-item"><span class="rank">${i+1}.</span><span class="cat-name">${escapeHtml(at.cat)}</span><span class="cat-pct">(${at.pct}% das reclamações)</span><div class="cat-example">${escapeHtml(at.exemplo)}</div></div>`).join('');

    const regioes = DATA.compilado.regioes || [];
    document.getElementById('destaques-regiao').innerHTML = regioes.map(r => `<div class="region-card region-${r.tipo}"><div class="region-name">${r.nome}</div><div class="region-stat">${r.stat}</div></div>`).join('');

    // Temporal chart (uses breakdown if gerente filtered)
    const temporal = (breakdown && f.uf === 'todas') ? breakdown.temporal : DATA.temporal;
    createChart('chart-sentimento-temporal', {
        type: 'line',
        data: { labels: temporal.meses, datasets: [
            { label: 'Positivo', data: temporal.positivo, borderColor: '#27ae60', backgroundColor: 'rgba(39,174,96,0.08)', fill: true, tension: 0.3, pointRadius: 2 },
            { label: 'Neutro', data: temporal.neutro, borderColor: '#f39c12', backgroundColor: 'rgba(243,156,18,0.08)', fill: true, tension: 0.3, pointRadius: 2 },
            { label: 'Negativo', data: temporal.negativo, borderColor: '#c0392b', backgroundColor: 'rgba(192,57,43,0.08)', fill: true, tension: 0.3, pointRadius: 2 }
        ]},
        options: { responsive: true, scales: { y: { beginAtZero: true, max: 100, ticks: { callback: v => v + '%' } } }, plugins: { legend: { position: 'bottom' } } }
    });

    // Distribuição de sentimento (barras)
    const distVals = [parseFloat(kpis.pct_positivo), parseFloat(kpis.pct_neutro), parseFloat(kpis.pct_negativo)];
    createChart('chart-sentimento-donut', {
        type: 'bar',
        data: { labels: ['Positivo', 'Neutro', 'Negativo'], datasets: [{ data: distVals, backgroundColor: ['#27ae60', '#f39c12', '#c0392b'], borderRadius: 4 }] },
        options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, max: 100, ticks: { callback: v => v + '%' } } } }
    });
}

// ═══ GESTÃO (3.1) ═══
function renderGestao() {
    const g = DATA.gestao;
    const f = getActiveFilter();
    
    // If filtered by specific UF or loja, recalculate from loja_stats
    const filteredLojas = getFilteredLojas();
    let regularData, tocadoraData;
    
    if (f.uf !== 'todas' || f.loja !== 'todas') {
        const regLojas = filteredLojas.filter(l => l.flag === 'regular');
        const tocLojas = filteredLojas.filter(l => l.flag === 'tocadora');
        const avg = (arr, k) => arr.length ? arr.reduce((s, l) => s + (l[k] || 0), 0) / arr.length : 0;
        
        regularData = {
            nps_tradicional: avg(regLojas, 'nps_trad').toFixed(1),
            nps_ajustado: avg(regLojas, 'nps_ajust').toFixed(1),
            pct_positivo: avg(regLojas, 'pct_pos').toFixed(1),
            pct_neutro: (100 - avg(regLojas, 'pct_pos') - avg(regLojas, 'pct_neg')).toFixed(1),
            pct_negativo: avg(regLojas, 'pct_neg').toFixed(1),
            total_lojas: regLojas.length,
            top_problemas: g.regular.top_problemas,
            top_problemas_pct: g.regular.top_problemas_pct
        };
        tocadoraData = {
            nps_tradicional: avg(tocLojas, 'nps_trad').toFixed(1),
            nps_ajustado: avg(tocLojas, 'nps_ajust').toFixed(1),
            pct_positivo: avg(tocLojas, 'pct_pos').toFixed(1),
            pct_neutro: (100 - avg(tocLojas, 'pct_pos') - avg(tocLojas, 'pct_neg')).toFixed(1),
            pct_negativo: avg(tocLojas, 'pct_neg').toFixed(1),
            total_lojas: tocLojas.length,
            top_problemas: g.tocadora.top_problemas,
            top_problemas_pct: g.tocadora.top_problemas_pct
        };
    } else {
        regularData = g.regular;
        tocadoraData = g.tocadora;
    }
    
    document.getElementById('n-lojas-regular').textContent = regularData.total_lojas + ' lojas';
    document.getElementById('n-lojas-tocadora').textContent = tocadoraData.total_lojas + ' lojas';

    const renderMetrics = (id, data) => {
        document.getElementById(id).innerHTML = `
            <div class="gestao-metric-item"><div class="value">${data.nps_tradicional}</div><div class="label">NPS Trad</div></div>
            <div class="gestao-metric-item"><div class="value">${data.nps_ajustado}</div><div class="label">NPS Ajust</div></div>
            <div class="gestao-metric-item"><div class="value" style="color:#27ae60">${data.pct_positivo}%</div><div class="label">Positivo</div></div>
            <div class="gestao-metric-item"><div class="value">${data.pct_neutro}%</div><div class="label">Neutro</div></div>
            <div class="gestao-metric-item"><div class="value" style="color:#c0392b">${data.pct_negativo}%</div><div class="label">Negativo</div></div>
            <div class="gestao-metric-item"><div class="value">${data.total_lojas}</div><div class="label">Lojas</div></div>`;
    };
    renderMetrics('metrics-regular', regularData);
    renderMetrics('metrics-tocadora', tocadoraData);

    createChart('chart-gestao-sentimento', {
        type: 'bar',
        data: { labels: ['Externo (Regular)', 'Germinare (Tocadora)'], datasets: [
            { label: 'Positivo', data: [parseFloat(regularData.pct_positivo), parseFloat(tocadoraData.pct_positivo)], backgroundColor: '#27ae60' },
            { label: 'Neutro', data: [parseFloat(regularData.pct_neutro), parseFloat(tocadoraData.pct_neutro)], backgroundColor: '#f39c12' },
            { label: 'Negativo', data: [parseFloat(regularData.pct_negativo), parseFloat(tocadoraData.pct_negativo)], backgroundColor: '#c0392b' }
        ]},
        options: { responsive: true, scales: { x: { stacked: true }, y: { stacked: true, max: 100 } }, plugins: { legend: { position: 'bottom' } } }
    });

    // Problemas por gestão
    const labels = g.regular.top_problemas.slice(0, 5);
    createChart('chart-gestao-problemas', {
        type: 'bar',
        data: { labels, datasets: [
            { label: 'Externo', data: g.regular.top_problemas_pct.slice(0, 5), backgroundColor: 'rgba(52,152,219,0.7)', borderRadius: 4 },
            { label: 'Germinare', data: g.tocadora.top_problemas_pct.slice(0, 5), backgroundColor: 'rgba(155,89,182,0.7)', borderRadius: 4 }
        ]},
        options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
    });

    const diffNps = parseFloat(tocadoraData.nps_tradicional) - parseFloat(regularData.nps_tradicional);
    const diffNeg = parseFloat(tocadoraData.pct_negativo) - parseFloat(regularData.pct_negativo);
    const melhorNps = diffNps > 0 ? 'Germinare' : 'Externo';
    const melhorSent = diffNeg < 0 ? 'Germinare' : 'Externo';
    document.getElementById('gestao-conclusao').innerHTML = `
        <h4>Conclusão — Existe diferença significativa?</h4>
        <p><strong>${g.significativo ? 'Sim' : 'Não'}.</strong> Mann-Whitney p=${g.p_value}. ${g.significativo ? 'A diferença entre os dois tipos de gestão é estatisticamente significativa.' : 'Diferença não significativa.'}</p>
        <p style="margin-top:8px"><strong>${melhorNps}</strong> tem NPS ${Math.abs(diffNps).toFixed(1)} pontos maior.
        <strong>${melhorSent}</strong> tem menor % de sentimento negativo (diferença de ${Math.abs(diffNeg).toFixed(1)}pp).</p>
        <p style="margin-top:8px">Principais reclamações — <strong>Externo:</strong> ${g.regular.top_problemas.slice(0, 3).map(escapeHtml).join(', ')}.
        <strong>Germinare:</strong> ${g.tocadora.top_problemas.slice(0, 3).map(escapeHtml).join(', ')}.</p>`;
}

// ═══ TEMAS (3.2) ═══
function renderTemas() {
    const breakdown = getDataForFilter();
    const f = getActiveFilter();
    const problemas = (breakdown && f.uf === 'todas' && f.loja === 'todas') ? breakdown.problemas : DATA.problemas;
    const elogios = (breakdown && f.uf === 'todas' && f.loja === 'todas') ? breakdown.elogios : DATA.elogios;
    const evolucao = (breakdown && f.uf === 'todas' && f.loja === 'todas') ? breakdown.evolucao : DATA.evolucao_problemas;

    createChart('chart-ranking-problemas', {
        type: 'bar',
        data: { labels: problemas.categorias, datasets: [{ data: problemas.contagens, backgroundColor: ['#c0392b', '#e74c3c', '#ff6b6b', '#ff8787', '#ffa3a3', '#ffbdbd'], borderRadius: 4 }] },
        options: { indexAxis: 'y', responsive: true, plugins: { legend: { display: false } } }
    });

    // Evolução
    const meses = evolucao.meses;
    const catKeys = Object.keys(evolucao).filter(k => k !== 'meses');
    const colors = ['#c0392b', '#e67e22', '#8e44ad', '#2980b9', '#16a085'];
    createChart('chart-evolucao-problemas', {
        type: 'line',
        data: { labels: meses, datasets: catKeys.map((cat, i) => ({
            label: cat.replace(/\b\w/g, c => c.toUpperCase()), data: evolucao[cat],
            borderColor: colors[i % colors.length], tension: 0.3, pointRadius: 2
        }))},
        options: { responsive: true, plugins: { legend: { position: 'bottom' } }, scales: { y: { beginAtZero: true } } }
    });

    createChart('chart-ranking-elogios', {
        type: 'bar',
        data: { labels: elogios.categorias, datasets: [{ data: elogios.contagens, backgroundColor: ['#27ae60', '#2ecc71', '#58d68d', '#82e0aa', '#abebc6', '#d5f5e3'], borderRadius: 4 }] },
        options: { indexAxis: 'y', responsive: true, plugins: { legend: { display: false } } }
    });

    renderExamples('exemplos-problemas', problemas.exemplos);
    renderExamples('exemplos-elogios', elogios.exemplos);

    // Divergências
    const d = DATA.divergencias;
    document.getElementById('kpi-divergentes').textContent = d.total_pct + '%';
    document.getElementById('kpi-prom-neg').textContent = d.promotor_negativo.toLocaleString();
    document.getElementById('kpi-det-pos').textContent = d.detrator_positivo.toLocaleString();
    let divHtml = '';
    for (const [tipo, exemplos] of Object.entries(d.exemplos)) {
        divHtml += `<div class="example-category"><h4>${tipo}</h4>`;
        exemplos.forEach(ex => { divHtml += `<div class="example-item"><strong>${escapeHtml(ex.nota)}:</strong> ${escapeHtml(ex.texto)}</div>`; });
        divHtml += '</div>';
    }
    document.getElementById('exemplos-divergencias').innerHTML = divHtml;

    // Impacto NPS Ajustado
    if (DATA.impacto_nps) {
        const imp = DATA.impacto_nps;
        document.getElementById('impacto-formula').innerHTML = `
            <div class="formula-box"><strong>Fórmula:</strong> ${imp.formula}</div>`;
        document.getElementById('kpi-nps-delta-global').innerHTML = `${DATA.kpis.nps_tradicional} → ${DATA.kpis.nps_ajustado} <span style="color:var(--negative);font-size:14px">(Δ ${(DATA.kpis.nps_ajustado - DATA.kpis.nps_tradicional).toFixed(1)})</span>`;
        document.getElementById('kpi-mudaram-faixa').textContent = `${imp.lojas_mudaram_faixa}/${imp.total_lojas}`;
        document.getElementById('kpi-div-pct').textContent = imp.total_divergentes_pct + '%';
        document.getElementById('analise-critica-text').textContent = imp.analise_critica;

        const tbody = document.getElementById('tbody-impacto');
        tbody.innerHTML = imp.casos_extremos.map(c => `<tr>
            <td><strong>${c.nome}</strong></td>
            <td>${c.nps_trad}</td>
            <td><span class="badge badge-${c.faixa_antes === 'Excelente' ? 'melhora' : 'estavel'}">${c.faixa_antes}</span></td>
            <td>${c.nps_ajust}</td>
            <td><span class="badge badge-${c.faixa_depois === 'Regular' ? 'queda' : 'estavel'}">${c.faixa_depois}</span></td>
            <td style="color:var(--negative);font-weight:600">${c.delta}</td>
        </tr>`).join('');
    }
}

function renderExamples(containerId, data) {
    let html = '';
    for (const [cat, exemplos] of Object.entries(data)) {
        html += `<div class="example-category"><h4>${escapeHtml(cat)}</h4>`;
        exemplos.forEach(ex => { html += `<div class="example-item">${escapeHtml(ex)}</div>`; });
        html += '</div>';
    }
    document.getElementById(containerId).innerHTML = html;
}

// ═══ LOJAS (3.3) ═══
function renderLojas() {
    const f = getActiveFilter();
    const alertaFilter = document.getElementById('filter-alerta')?.value || 'todos';
    const searchTerm = (document.getElementById('search-loja')?.value || '').toLowerCase();

    let lojas = getFilteredLojas().filter(l => {
        if (alertaFilter !== 'todos' && l.alerta !== alertaFilter) return false;
        if (searchTerm && !l.nome.toLowerCase().includes(searchTerm)) return false;
        return true;
    });

    const tbody = document.getElementById('tbody-lojas');
    tbody.innerHTML = lojas.map(l => {
        const deltaColor = l.delta < -3 ? '#c0392b' : l.delta > 3 ? '#27ae60' : '#666';
        const negColor = l.pct_neg > 12 ? '#c0392b' : l.pct_neg > 8 ? '#e67e22' : '#666';
        const alertaBadge = l.alerta === 'ALERTA_QUEDA' ? 'queda' : l.alerta === 'ALERTA_MELHORA' ? 'melhora' : 'estavel';
        const alertaLabel = l.alerta === 'ALERTA_QUEDA' ? '▼ Queda' : l.alerta === 'ALERTA_MELHORA' ? '▲ Melhora' : 'Estável';
        return `<tr data-loja="${l.nome}" tabindex="0" role="button" aria-label="Ver detalhes da loja ${l.nome}">
            <td><strong>${l.nome}</strong></td>
            <td><span class="badge badge-${l.flag}">${l.flag === 'tocadora' ? 'Germinare' : 'Externo'}</span></td>
            <td>${l.nps_trad}</td>
            <td>${l.nps_ajust}</td>
            <td style="color:${deltaColor};font-weight:600">${l.delta > 0 ? '+' : ''}${l.delta}</td>
            <td>${l.sent_medio}</td>
            <td>${l.pct_pos}%</td>
            <td style="color:${negColor};font-weight:${l.pct_neg > 10 ? '600' : '400'}">${l.pct_neg}%</td>
            <td><div class="cat-pills">${l.top3_problemas.map(c => `<span class="cat-pill">${c}</span>`).join('')}</div></td>
            <td><div class="cat-pills">${l.top3_elogios.map(c => `<span class="cat-pill">${c}</span>`).join('')}</div></td>
            <td><span class="badge badge-${alertaBadge}">${alertaLabel}</span></td>
        </tr>`;
    }).join('');

    tbody.querySelectorAll('tr').forEach(row => {
        row.addEventListener('click', () => showLojaDetail(row.dataset.loja));
        row.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); showLojaDetail(row.dataset.loja); }
        });
    });
}

function showLojaDetail(nomeLoja) {
    const loja = DATA.lojas.find(l => l.nome === nomeLoja);
    if (!loja) return;

    const panel = document.getElementById('loja-detail');
    panel.style.display = 'block';

    const deltaArrow = loja.delta > 0 ? '▲' : loja.delta < 0 ? '▼' : '→';
    const deltaColor = loja.delta < -3 ? '#c0392b' : loja.delta > 3 ? '#27ae60' : '#666';
    document.getElementById('loja-detail-nome').innerHTML = `${loja.nome} <span class="badge badge-${loja.flag}" style="margin-left:8px">${loja.flag === 'tocadora' ? 'Germinare' : 'Externo'}</span>`;

    document.getElementById('loja-detail-kpis').innerHTML = `
        <div class="gestao-metric-item"><div class="value">${loja.nps_trad}</div><div class="label">NPS Trad</div></div>
        <div class="gestao-metric-item"><div class="value">${loja.nps_ajust} <span style="color:${deltaColor};font-size:14px">${deltaArrow}</span></div><div class="label">NPS Ajust</div></div>
        <div class="gestao-metric-item"><div class="value">${loja.sent_medio}</div><div class="label">Sent Médio</div></div>
        <div class="gestao-metric-item"><div class="value" style="color:#27ae60">${loja.pct_pos}%</div><div class="label">Positivo</div></div>
        <div class="gestao-metric-item"><div class="value" style="color:#c0392b">${loja.pct_neg}%</div><div class="label">Negativo</div></div>`;

    document.getElementById('loja-detail-problemas').innerHTML = loja.top3_problemas.map((c, i) => `<div class="cat-item">${i+1}. ${c}</div>`).join('') || '<div class="cat-item">Sem dados</div>';
    document.getElementById('loja-detail-elogios').innerHTML = loja.top3_elogios.map((c, i) => `<div class="cat-item">${i+1}. ${c}</div>`).join('') || '<div class="cat-item">Sem dados</div>';
    document.getElementById('loja-detail-comentarios').innerHTML = (loja.comentarios || []).map(c => `<div class="example-item">${escapeHtml(c)}</div>`).join('') || '<div class="example-item">Sem comentários</div>';

    // Evolução mensal da loja (se disponível)
    if (loja.temporal && loja.temporal.length > 3) {
        // Create/find canvas for loja temporal
        let canvasContainer = document.getElementById('loja-detail-temporal');
        if (!canvasContainer) {
            const div = document.createElement('div');
            div.className = 'loja-detail-card';
            div.innerHTML = '<h4>Evolução Mensal do Sentimento</h4><canvas id="chart-loja-temporal"></canvas>';
            div.id = 'loja-detail-temporal';
            panel.querySelector('.loja-detail-body').appendChild(div);
        }
        createChart('chart-loja-temporal', {
            type: 'line',
            data: { labels: loja.temporal.map(t => t.m), datasets: [
                { label: '% Positivo', data: loja.temporal.map(t => t.pos), borderColor: '#27ae60', tension: 0.3, pointRadius: 3 },
                { label: '% Negativo', data: loja.temporal.map(t => t.neg), borderColor: '#c0392b', tension: 0.3, pointRadius: 3 }
            ]},
            options: { responsive: true, scales: { y: { beginAtZero: true, max: 100 } }, plugins: { legend: { position: 'bottom' } } }
        });
    }

    document.getElementById('btn-close-detail').onclick = () => { panel.style.display = 'none'; };
    panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ═══ ANÁLISES AVANÇADAS ═══
function renderAvancadas() {
    renderQualitativo();
    renderNpsTema();
    const av = DATA.avancadas;

    if (av.deterioracao.lojas.length > 0) {
        createChart('chart-deterioracao', {
            type: 'line',
            data: { labels: av.deterioracao.meses, datasets: av.deterioracao.lojas.map((loja, i) => ({
                label: loja, data: av.deterioracao.valores[loja],
                borderColor: ['#c0392b', '#e74c3c', '#ff6b6b', '#ff8787'][i % 4], tension: 0.3, pointRadius: 4, borderWidth: 2
            }))},
            options: { responsive: true, scales: { y: { title: { display: true, text: '% Negativo' } } }, plugins: { legend: { position: 'bottom' } } }
        });
    }

    if (av.melhora.lojas.length > 0) {
        createChart('chart-melhora', {
            type: 'line',
            data: { labels: av.melhora.meses, datasets: av.melhora.lojas.map((loja, i) => ({
                label: loja, data: av.melhora.valores[loja],
                borderColor: ['#27ae60', '#2ecc71', '#58d68d'][i % 3], tension: 0.3, pointRadius: 4, borderWidth: 2
            }))},
            options: { responsive: true, scales: { y: { title: { display: true, text: '% Negativo' } } }, plugins: { legend: { position: 'bottom' } } }
        });
    }

    if (av.coocorrencia.length > 0) {
        createChart('chart-coocorrencia', {
            type: 'bar',
            data: { labels: av.coocorrencia.map(c => c.par), datasets: [{ data: av.coocorrencia.map(c => c.freq), backgroundColor: ['#e67e22', '#f39c12', '#f1c40f', '#d4ac0d', '#b7950b'], borderRadius: 4 }] },
            options: { indexAxis: 'y', responsive: true, plugins: { legend: { display: false } }, scales: { x: { title: { display: true, text: 'Frequência' } } } }
        });
        document.getElementById('coocorrencia-insights').innerHTML = av.coocorrencia.map(c => `<div class="cooc-card"><div class="pair">${c.par} (${c.freq}x)</div><div class="desc">${c.desc}</div></div>`).join('');
    }

    // Predição de risco — descritivo, derivado dos dados (sem estatística fabricada)
    const predEl = document.getElementById('predicao-risco');
    if (predEl) {
        const nDet = av.deterioracao.lojas.length;
        predEl.textContent = nDet > 0
            ? `${nDet} loja(s) apresentam tendência consistente de aumento no % de sentimento negativo nos últimos meses (${av.deterioracao.lojas.join(', ')}). São candidatas naturais a monitoramento prioritário — o histórico recente sugere risco de queda no NPS, mas não há modelo preditivo treinado para quantificar essa probabilidade.`
            : 'Nenhuma loja apresentou tendência consistente de deterioração no período analisado.';
    }

    // Wordclouds from breakdowns
    const bd = DATA.breakdowns;
    if (bd.regular?.wordcloud) renderWordCloud('wordcloud-regular', bd.regular.wordcloud);
    if (bd.tocadora?.wordcloud) renderWordCloud('wordcloud-tocadora', bd.tocadora.wordcloud);

    // Diferenças de linguagem — derivado dos termos reais de cada wordcloud (descritivo)
    const langEl = document.getElementById('linguagem-insight');
    if (langEl && bd.regular?.wordcloud && bd.tocadora?.wordcloud) {
        const topWords = (wc) => wc.slice().sort((a, b) => b.size - a.size).slice(0, 5).map(w => w.word);
        const reg = topWords(bd.regular.wordcloud);
        const toc = topWords(bd.tocadora.wordcloud);
        langEl.innerHTML = `Termos mais frequentes — <strong>Externo:</strong> ${reg.map(escapeHtml).join(', ')}. `
            + `<strong>Germinare:</strong> ${toc.map(escapeHtml).join(', ')}. `
            + `A comparação é descritiva (frequência de palavras), não uma medida de causa: indica sobre o que cada grupo de clientes mais comenta, não que um modelo de gestão resolva melhor que o outro.`;
    }
}

function renderQualitativo() {
    if (!DATA.qualitativo) return;

    const q = DATA.qualitativo;
    const resumo = q.resumo;

    const setText = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    };

    setText('qual-nps-trad', Number(resumo.nps_tradicional_comentarios).toFixed(0));
    setText('qual-nps-textual', Number(resumo.nps_textual).toFixed(0));
    setText('qual-nps-hibrido', Number(resumo.nps_hibrido).toFixed(0));

    const metodo = document.getElementById('qual-metodologia');
    if (metodo) {
        const corr = resumo.correlacao_transacoes;
        metodo.innerHTML = `
            O <strong>NPS tradicional</strong> preserva a nota original. O <strong>NPS textual</strong> vem do sentimento do comentário.
            O <strong>NPS híbrido</strong> só altera a leitura quando a confiança do modelo é suficiente; previsões de baixa confiança mantêm a classificação pela nota.
            A correlação entre transações e NPS híbrido é <strong>${corr.nps_hibrido}</strong>, indicando que volume operacional sozinho não explica satisfação.
        `;
    }

    const pontos = q.scatter_transacoes || [];
    const regular = pontos.filter(p => p.flag === 'REGULAR');
    const tocadora = pontos.filter(p => p.flag === 'TOCADORA');
    const toBubble = p => ({
        x: p.transacoes,
        y: p.nps_hibrido,
        r: Math.max(4, Math.min(14, Math.sqrt(p.avaliacoes_ponderadas || 1) / 4)),
        loja: p.centro_nv2,
        prioridade: p.indice_prioridade,
        pctNeg: p.pct_negativo
    });

    createChart('chart-nps-transacoes', {
        type: 'bubble',
        data: {
            datasets: [
                { label: 'REGULAR', data: regular.map(toBubble), backgroundColor: 'rgba(0,133,230,0.55)' },
                { label: 'TOCADORA', data: tocadora.map(toBubble), backgroundColor: 'rgba(233,90,26,0.58)' }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' },
                tooltip: {
                    callbacks: {
                        label: ctx => {
                            const p = ctx.raw;
                            return `${p.loja}: NPS híbrido ${p.y}, transações ${Math.round(p.x).toLocaleString('pt-BR')}, negativo ${p.pctNeg}%`;
                        }
                    }
                }
            },
            scales: {
                x: { title: { display: true, text: 'Transações' } },
                y: { title: { display: true, text: 'NPS híbrido' }, min: 0, max: 100 }
            }
        }
    });

    const quadrantes = ['alta_performance', 'atencao_leve', 'risco_oculto', 'critico'];
    const cores = {
        alta_performance: 'rgba(39,174,96,0.55)',
        atencao_leve: 'rgba(243,156,18,0.55)',
        risco_oculto: 'rgba(142,68,173,0.55)',
        critico: 'rgba(192,57,43,0.55)'
    };
    createChart('chart-matriz-risco', {
        type: 'scatter',
        data: {
            datasets: quadrantes.map(qd => ({
                label: qd.replaceAll('_', ' '),
                data: pontos.filter(p => p.quadrante_risco === qd).map(p => ({
                    x: p.nps_tradicional,
                    y: p.pct_negativo,
                    loja: p.centro_nv2,
                    sev: p.severidade_media
                })),
                backgroundColor: cores[qd],
                pointRadius: 5
            }))
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' },
                tooltip: {
                    callbacks: {
                        label: ctx => {
                            const p = ctx.raw;
                            return `${p.loja}: NPS ${p.x}, negativo ${p.y}%, severidade ${p.sev}`;
                        }
                    }
                }
            },
            scales: {
                x: { title: { display: true, text: 'NPS tradicional' }, min: 0, max: 100 },
                y: { title: { display: true, text: '% negativo' }, min: 0 }
            }
        }
    });

    const renderRows = (id, rows, cols) => {
        const tbody = document.getElementById(id);
        if (!tbody) return;
        tbody.innerHTML = rows.length
            ? rows.map(row => `<tr>${cols.map(col => `<td>${escapeHtml(col(row))}</td>`).join('')}</tr>`).join('')
            : '<tr><td colspan="4">Sem lojas neste critério</td></tr>';
    };

    renderRows('qual-top-prioridade', q.top_prioridade || [], [
        row => row.centro_nv2,
        row => Number(row.indice_prioridade).toFixed(1),
        row => Number(row.nps_hibrido).toFixed(1),
        row => `${Number(row.pct_negativo).toFixed(1)}%`
    ]);

    renderRows('qual-risco-oculto', q.risco_oculto || [], [
        row => row.centro_nv2,
        row => Number(row.nps_tradicional).toFixed(1),
        row => `${Number(row.pct_negativo).toFixed(1)}%`,
        row => Number(row.severidade_media).toFixed(1)
    ]);
}

function renderNpsTema() {
    if (!DATA.nps_temas) return;
    const temas = DATA.nps_temas;

    // Chart: NPS por Tema Global (horizontal bar)
    const global = temas.global;
    const colors = global.map(t => t.nps < 60 ? '#c0392b' : t.nps < 80 ? '#f39c12' : '#27ae60');
    createChart('chart-nps-tema-global', {
        type: 'bar',
        data: { labels: global.map(t => t.tema), datasets: [{
            data: global.map(t => t.nps),
            backgroundColor: colors,
            borderRadius: 4
        }]},
        options: { indexAxis: 'y', responsive: true, plugins: { legend: { display: false } },
            scales: { x: { min: 0, max: 100, ticks: { callback: v => v + '' } } } }
    });

    // Chart: NPS por Tema × Gestão (grouped bar)
    const regTemas = temas.por_gestao.regular;
    const tocTemas = temas.por_gestao.tocadora;
    createChart('chart-nps-tema-gestao', {
        type: 'bar',
        data: { labels: regTemas.map(t => t.tema), datasets: [
            { label: 'Externo', data: regTemas.map(t => t.nps), backgroundColor: 'rgba(52,152,219,0.7)', borderRadius: 4 },
            { label: 'Germinare', data: tocTemas.map(t => t.nps), backgroundColor: 'rgba(155,89,182,0.7)', borderRadius: 4 }
        ]},
        options: { responsive: true, plugins: { legend: { position: 'bottom' } },
            scales: { y: { min: 0, max: 100 } } }
    });

    // Insight
    const worst = global[0];
    const bestDiff = regTemas.reduce((max, t, i) => {
        const diff = t.nps - tocTemas[i].nps;
        return diff > max.diff ? { tema: t.tema, diff } : max;
    }, { tema: '', diff: 0 });
    document.getElementById('nps-tema-insight').innerHTML = `
        <strong>${worst.tema}</strong> é o tema mais crítico (NPS ${worst.nps}) — apenas ${worst.pct_pos}% dos comentários nessa categoria são positivos.
        A maior diferença entre gestões está em <strong>${bestDiff.tema}</strong>: Externo supera Germinare em ${bestDiff.diff.toFixed(1)} pontos de NPS textual.
        Isso indica que a experiência do cliente em ${worst.tema.toLowerCase()} é o principal ponto de melhoria da rede.`;

    // Piores lojas por tema (cards)
    const lojaGrid = document.getElementById('nps-tema-lojas-grid');
    let html = '';
    for (const [tema, dados] of Object.entries(temas.por_loja)) {
        html += `<div class="nps-tema-card"><h4>${tema}</h4><div class="nps-tema-list">`;
        dados.piores.slice(0, 3).forEach((l, i) => {
            const color = l.nps < 50 ? 'var(--negative)' : l.nps < 70 ? 'var(--neutral)' : 'var(--positive)';
            html += `<div class="nps-tema-item"><span class="rank">${i+1}.</span><span class="loja-name">${l.loja}</span><span class="nps-value" style="color:${color}">NPS ${l.nps}</span><span class="n-count">(n=${l.n})</span></div>`;
        });
        html += '</div></div>';
    }
    lojaGrid.innerHTML = html;
}

function renderWordCloud(containerId, words) {
    const el = document.getElementById(containerId);
    if (!el || !words) return;
    el.innerHTML = words.map(w => `<span class="word size-${w.size}">${w.word}</span>`).join('');
}
