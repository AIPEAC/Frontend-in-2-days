/* ============================================================
   Frontend in 2 Days — Main Orchestrator
   Handles: page loading, navigation, all interactive features.
   ============================================================ */
import { initQuiz }  from './features/quiz.js';

// ---- Constants ----
const PAGE_FILES = ['pages/html.html', 'pages/javascript.html', 'pages/jshtml.html', 'pages/css.html'];
const PAGE_LABELS = ['HTML', 'JavaScript', 'JS × HTML', 'CSS'];
const QUIZ_DATA = {
    0: [
        { question: 'How many <code>&lt;body&gt;</code> tags can a valid HTML document have?', options: ['Zero', 'Exactly one', 'As many as needed'], correct: 1 },
        { question: 'Where should you place <code>&lt;script&gt;</code> for best performance?', options: ['In &lt;head&gt; without defer', 'Right after &lt;!DOCTYPE&gt;', 'At the bottom of &lt;body&gt;'], correct: 2 },
        { question: 'What does <code>&lt;!DOCTYPE html&gt;</code> do?', options: ['Creates the root element', 'Tells the browser to use HTML5 Standards Mode', 'Imports a DTD schema file'], correct: 1 },
    ],
    1: [
        { question: 'What is the difference between <code>let</code> and <code>var</code>?', options: ['let is function-scoped, var is block-scoped', 'let is block-scoped, var is function-scoped', 'They are identical in modern JS'], correct: 1 },
        { question: 'What does <code>await</code> do?', options: ['Blocks the entire browser', 'Pauses the async function until the Promise settles', 'Creates a new thread'], correct: 1 },
        { question: 'What does <code>[...arr]</code> create?', options: ['A reference to the same array', 'A shallow copy of the array', 'A deep copy of the array'], correct: 1 },
    ],
    2: [
        { question: 'What does <code>querySelector</code> return if no match is found?', options: ['An empty string', 'undefined', 'null'], correct: 2 },
        { question: 'Why is event delegation useful?', options: ['It makes events fire faster', 'One listener on a parent handles events for many children', 'It prevents event bubbling'], correct: 1 },
        { question: 'Which is safer for displaying user input?', options: ['innerHTML', 'textContent', 'insertAdjacentHTML'], correct: 1 },
    ],
    3: [
        { question: 'What does <code>display: flex</code> do?', options: ['Hides the element', 'Makes children lay out in a 1D flow (row or column)', 'Creates a 2D grid layout'], correct: 1 },
        { question: 'Which unit is relative to the root font size?', options: ['px', 'em', 'rem'], correct: 2 },
        { question: 'How do you select class <code>card</code> AND ID <code>main</code>?', options: ['.card #main', '#main.card or .card#main', 'card.main'], correct: 1 },
    ],
};

// ---- State ----
let currentPage = 0;
const pageCache = new Map();

// ---- DOM Setup ----
const app = document.getElementById('app');
app.innerHTML = buildShell();

const topbar       = document.querySelector('.topbar');
const pageContainer = document.getElementById('page-container');
const progressBar  = document.getElementById('progress-bar');
const themeBtn     = document.getElementById('theme-toggle');
const tocPanel     = document.getElementById('toc-panel');
const tocList      = document.getElementById('toc-list');
const tocToggle    = document.getElementById('toc-toggle');

// ---- Build the app shell ----
function buildShell() {
    const tabsHtml = PAGE_LABELS.map((label, i) =>
        `<button class="tab-btn${i === 0 ? ' active' : ''}" data-page="${i}">${label}</button>`
    ).join('');

    return `
    <div class="topbar">
        <span class="topbar-brand">⚡ Frontend in 2 Days</span>
        <div class="topbar-tabs">${tabsHtml}</div>
        <div class="topbar-actions">
            <button id="toc-toggle" class="topbar-icon-btn" title="Table of Contents">☰</button>
            <button id="theme-toggle" class="topbar-icon-btn" title="Toggle theme">◐</button>
        </div>
    </div>
    <div id="progress-bar" class="progress-bar"><div class="progress-fill"></div></div>
    <aside id="toc-panel" class="toc-panel hidden">
        <h3 class="toc-title">Contents</h3>
        <ul id="toc-list"></ul>
    </aside>
    <main id="page-container" class="page active"></main>
    <footer class="footer"><p>Built with ♡ and zero frameworks.</p></footer>`;
}

// ---- Page fetching & rendering ----
async function loadPage(index) {
    if (pageCache.has(index)) return pageCache.get(index);
    const resp = await fetch(PAGE_FILES[index]);
    const html = await resp.text();
    pageCache.set(index, html);
    return html;
}

async function showPage(index) {
    currentPage = index;
    const html = await loadPage(index);

    // Build quiz HTML for this page
    const quizHtml = buildQuizHtml(QUIZ_DATA[index]);

    // Build bottom nav
    const navHtml = buildBottomNav(index);

    pageContainer.innerHTML = html + quizHtml + navHtml;
    pageContainer.className = 'page active';

    // Update tabs
    document.querySelectorAll('.tab-btn').forEach((t, i) => t.classList.toggle('active', i === index));

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Re-init interactive features for this page
    initPageFeatures(index);
    updateProgress();
    buildToc();
}

// ---- Bottom navigation between pages ----
function buildBottomNav(index) {
    const prev = index > 0
        ? `<button class="nav-btn" data-target="${index - 1}">← ${PAGE_LABELS[index - 1]}</button>`
        : '<span></span>';
    const next = index < PAGE_FILES.length - 1
        ? `<button class="nav-btn next-btn" data-target="${index + 1}">${PAGE_LABELS[index + 1]} →</button>`
        : '<span></span>';
    return `<div class="nav-bottom">${prev}${next}</div>`;
}

// ---- Quiz builder ----
function buildQuizHtml(questions) {
    if (!questions || questions.length === 0) return '';
    const qHtml = questions.map((q, i) => {
        const opts = q.options.map((opt, oi) =>
            `<label class="quiz-option" data-q="${i}" data-o="${oi}">
                <input type="radio" name="quiz-q${i}" value="${oi}"><span>${opt}</span>
            </label>`).join('');
        return `<div class="quiz-question" data-index="${i}">
            <p class="quiz-prompt">${i + 1}. ${q.question}</p>
            <div class="quiz-options">${opts}</div>
            <p class="quiz-feedback" id="quiz-fb-${i}"></p>
        </div>`;
    }).join('');

    return `
    <div class="section quiz-section">
        <h2 class="section-title"><span class="section-num">?</span>Quick Quiz</h2>
        <div class="quiz-container">${qHtml}
            <button class="quiz-submit-btn" id="quiz-submit">Check Answers</button>
            <p class="quiz-score" id="quiz-score"></p>
        </div>
    </div>`;
}

// ---- Per-page feature initialization ----
function initPageFeatures(pageIndex) {
    initMarkerHighlighting();
    initCopyButtons();
    initScrollAnimations();
    initQuiz(QUIZ_DATA[pageIndex]);

    // Bottom nav buttons
    pageContainer.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => showPage(parseInt(btn.dataset.target, 10)));
    });

    // Page-specific features
    if (pageIndex === 2) initLiveDemo();
    if (pageIndex === 3) initCssPreview();
}

// ---- Feature: Marker ↔ Note highlighting ----
function initMarkerHighlighting() {
    pageContainer.querySelectorAll('.marker[data-note]').forEach(marker => {
        const noteId = marker.dataset.note;
        const note = pageContainer.querySelector(`.note[data-note="${noteId}"]`);
        if (!note) return;

        marker.addEventListener('mouseenter', () => {
            marker.classList.add('highlight');
            note.style.borderLeftColor = 'var(--accent2)';
            note.style.background = 'var(--bg-surface)';
            note.style.color = 'var(--text)';
        });
        marker.addEventListener('mouseleave', () => {
            marker.classList.remove('highlight');
            note.style.borderLeftColor = '';
            note.style.background = '';
            note.style.color = '';
        });
        note.addEventListener('mouseenter', () => marker.classList.add('highlight'));
        note.addEventListener('mouseleave', () => marker.classList.remove('highlight'));
    });
}

// ---- Feature: Copy button on every code block ----
function initCopyButtons() {
    pageContainer.querySelectorAll('pre').forEach(pre => {
        if (pre.querySelector('.copy-btn')) return;
        const btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.textContent = 'Copy';
        btn.addEventListener('click', () => {
            const code = pre.querySelector('code');
            const text = (code || pre).textContent;
            navigator.clipboard.writeText(text).then(() => {
                btn.textContent = 'Copied!';
                btn.classList.add('copied');
                setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 1500);
            });
        });
        pre.style.position = 'relative';
        pre.appendChild(btn);
    });
}

// ---- Feature: Scroll animations (Intersection Observer) ----
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    pageContainer.querySelectorAll('.section, .card, .note').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// ---- Feature: Live demo (JS × HTML page) ----
function initLiveDemo() {
    const demoBtn = document.getElementById('demo-btn');
    const demoTitle = document.getElementById('demo-title');
    const demoList = document.getElementById('demo-list');
    if (!demoBtn || !demoTitle || !demoList) return;

    let count = 0;
    demoBtn.addEventListener('click', () => {
        count++;
        demoTitle.innerText = `Clicked ${count} time${count > 1 ? 's' : ''}`;
        demoTitle.style.color = count % 2 ? '#e74c3c' : '#2ecc71';
        const li = document.createElement('li');
        li.innerText = `Item #${count}`;
        demoList.appendChild(li);
        if (demoList.children.length > 8) demoList.removeChild(demoList.firstChild);
    });
}

// ---- Feature: Live CSS Preview (CSS page) ----
function initCssPreview() {
    const input = document.getElementById('css-live-input');
    const target = document.getElementById('css-preview-target');
    if (!input || !target) return;

    let styleEl = document.getElementById('css-live-style');
    if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = 'css-live-style';
        document.head.appendChild(styleEl);
    }

    input.addEventListener('input', () => {
        // Scope user CSS to #css-preview-target only
        const raw = input.value;
        const scoped = raw.replace(/\.preview-box/g, '#css-preview-target');
        styleEl.textContent = scoped;
    });
}

// ---- Feature: Progress bar ----
function updateProgress() {
    const fill = progressBar.querySelector('.progress-fill');
    const pct = ((currentPage + 1) / PAGE_FILES.length) * 100;
    fill.style.width = pct + '%';
}

// ---- Feature: Table of Contents sidebar ----
function buildToc() {
    const sections = pageContainer.querySelectorAll('.section-title');
    tocList.innerHTML = '';
    sections.forEach(title => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = title.textContent.trim();
        a.href = '#';
        a.addEventListener('click', (e) => {
            e.preventDefault();
            title.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (window.innerWidth < 768) tocPanel.classList.add('hidden');
        });
        li.appendChild(a);
        tocList.appendChild(li);
    });
}

// ---- Feature: Theme toggle (dark/light) ----
function initThemeToggle() {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') document.documentElement.setAttribute('data-theme', 'light');

    themeBtn.addEventListener('click', () => {
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        if (isLight) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
}

// ---- Feature: TOC toggle ----
function initTocToggle() {
    tocToggle.addEventListener('click', () => {
        tocPanel.classList.toggle('hidden');
    });
}

// ---- Keyboard navigation ----
function initKeyboardNav() {
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;
        if (e.key === 'ArrowRight' && currentPage < PAGE_FILES.length - 1) showPage(currentPage + 1);
        else if (e.key === 'ArrowLeft' && currentPage > 0) showPage(currentPage - 1);
    });
}

// ---- Tab clicks ----
function initTabs() {
    document.querySelectorAll('.tab-btn').forEach(tab => {
        tab.addEventListener('click', () => showPage(parseInt(tab.dataset.page, 10)));
    });
}

// ---- Swipe navigation (touch) ----
function initSwipeNav() {
    let startX = 0;
    pageContainer.addEventListener('touchstart', e => { startX = e.changedTouches[0].clientX; }, { passive: true });
    pageContainer.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) < 60) return;
        if (dx < 0 && currentPage < PAGE_FILES.length - 1) showPage(currentPage + 1);
        else if (dx > 0 && currentPage > 0) showPage(currentPage - 1);
    }, { passive: true });
}

// ---- Boot ----
initTabs();
initThemeToggle();
initTocToggle();
initKeyboardNav();
initSwipeNav();
showPage(0);
