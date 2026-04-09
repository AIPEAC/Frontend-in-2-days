// ============================================================
//  Component Renderers
//  Each function returns an HTML string for a section type.
// ============================================================

/** Wrap content in a section container with number + title */
function sectionShell(num, title, innerHtml) {
    return `
    <div class="section" data-section="${num}">
        <h2 class="section-title"><span class="section-num">${num}</span>${title}</h2>
        ${innerHtml}
    </div>`;
}

/** Annotated code: left code block + right notes list */
export function renderAnnotated(sec) {
    const notesHtml = (sec.notes || []).map(n => `
        <div class="note" id="${n.id}">
            <span class="note-badge">${n.badge}</span>
            <div>${n.text}</div>
        </div>`).join('');

    const info = sec.infoAfter
        ? `<div class="info-box"><p>${sec.infoAfter}</p></div>`
        : '';

    const inner = `
        <div class="annotated-code">
            <div class="code-side">
                <div class="code-block"><pre><code>${sec.code}</code></pre></div>
            </div>
            <div class="notes-side">${notesHtml}</div>
        </div>
        ${info}`;
    return sectionShell(sec.num, sec.title, inner);
}

/** Grid of cards */
export function renderGrid(sec) {
    const cardsHtml = sec.cards.map(c => `
        <div class="card">
            <h3>${c.title}</h3>
            <div class="code-block"><pre><code>${c.code}</code></pre></div>
        </div>`).join('');

    const info = sec.infoAfter
        ? `<div class="info-box"><p>${sec.infoAfter}</p></div>`
        : '';

    const inner = `<div class="two-col-grid">${cardsHtml}</div>${info}`;
    return sectionShell(sec.num, sec.title, inner);
}

/** Box model interactive diagram */
export function renderBoxModel(sec) {
    const inner = `
        <div class="box-model-demo">
            <div class="bm-layer bm-margin">
                margin
                <div class="bm-layer bm-border">
                    border
                    <div class="bm-layer bm-padding">
                        padding
                        <div class="bm-layer bm-content">content</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="info-box">
            <p><strong>box-sizing: border-box</strong> — Makes <code>width</code> include padding + border (not just content). Without it, a 200px-wide box with 20px padding becomes 240px total. Always set <code>* { box-sizing: border-box; }</code> globally.</p>
        </div>`;
    return sectionShell(sec.num, sec.title, inner);
}

/** Cheatsheet table */
export function renderCheatsheet(sec) {
    const rowsHtml = sec.rows.map(([prop, desc, use]) => `
        <tr>
            <td><code>${prop}</code></td>
            <td>${desc}</td>
            <td>${use}</td>
        </tr>`).join('');

    const inner = `
        <div class="cheatsheet-table">
            <table>
                <thead><tr><th>Property</th><th>What It Does</th><th>Use For</th></tr></thead>
                <tbody>${rowsHtml}</tbody>
            </table>
        </div>`;
    return sectionShell(sec.num, sec.title, inner);
}

/** Live demo placeholder — JS wires interactivity later */
export function renderDemo(sec) {
    const inner = `
        <p>${sec.description}</p>
        <div class="live-demo" id="${sec.demoId}">
            <div class="demo-output" id="${sec.demoId}-output">
                <p id="${sec.demoId}-text">Click count: <strong>0</strong></p>
            </div>
            <button class="demo-btn" id="${sec.demoId}-btn">Click me!</button>
        </div>`;
    return sectionShell(sec.num, sec.title, inner);
}

/** CSS live preview pane */
export function renderCssPreview(sec) {
    const inner = `
        <div class="css-preview-container">
            <div class="css-preview-editor">
                <label for="css-live-input">Type CSS below and see it applied in real time:</label>
                <textarea id="css-live-input" class="code-block" spellcheck="false" rows="10" placeholder=".preview-box {
  background: linear-gradient(135deg, #6c8cff, #a78bfa);
  border-radius: 16px;
  padding: 2rem;
  color: white;
  font-size: 1.5rem;
  text-align: center;
  transform: rotate(2deg);
}"></textarea>
            </div>
            <div class="css-preview-result">
                <div class="preview-box" id="css-preview-target">
                    Preview Box — Style Me!
                </div>
            </div>
        </div>`;
    return sectionShell(sec.num, sec.title, inner);
}

/** Dispatch: pick the right renderer by section type */
export function renderSection(sec) {
    switch (sec.type) {
        case 'annotated':   return renderAnnotated(sec);
        case 'grid':        return renderGrid(sec);
        case 'boxmodel':    return renderBoxModel(sec);
        case 'cheatsheet':  return renderCheatsheet(sec);
        case 'demo':        return renderDemo(sec);
        case 'csspreview':  return renderCssPreview(sec);
        default:            return '';
    }
}

/** Render a full page from page data */
export function renderPage(pageData) {
    const sectionsHtml = pageData.sections.map(renderSection).join('');
    return `
        <div class="hero">
            <h1>${pageData.title}</h1>
            <p class="hero-subtitle">${pageData.subtitle}</p>
        </div>
        ${sectionsHtml}`;
}
