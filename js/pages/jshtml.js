// ============================================================
//  Page Data: JS × HTML Interaction Tutorial
// ============================================================
export const jsHtmlPage = {
    title: "JS × HTML — Making It Alive",
    subtitle: `JavaScript manipulates the <strong>DOM</strong> (Document Object Model) — the browser's
        live tree of every element on the page. Change the DOM, and the page updates instantly.`,
    sections: [
        {
            num: "01",
            title: "Finding Elements",
            type: "annotated",
            code: `<span class="hl-cmt">// By ID — returns ONE element (or null)</span>
<span class="hl-kw">const</span> header = document.<span class="hl-fn">getElementById</span>(<span class="hl-str">'header'</span>);

<span class="hl-cmt">// By CSS selector — first match</span>
<span class="hl-kw">const</span> btn = document.<span class="hl-fn">querySelector</span>(<span class="hl-str">'.btn-primary'</span>);

<span class="hl-cmt">// All matches — returns a NodeList</span>
<span class="hl-kw">const</span> items = document.<span class="hl-fn">querySelectorAll</span>(<span class="hl-str">'li.item'</span>);

<span class="hl-cmt">// NodeList is array-like but NOT an Array</span>
items.<span class="hl-fn">forEach</span>(el => console.<span class="hl-fn">log</span>(el));
<span class="hl-cmt">// ✅ forEach works</span>

<span class="hl-cmt">// To use .map/.filter, convert first:</span>
<span class="hl-kw">const</span> arr = [...items];
<span class="hl-cmt">// or: Array.from(items)</span>`,
            notes: [
                { id: "d1", badge: "1", text: `<strong>querySelector:</strong> Uses CSS selector syntax. <code>#id</code>, <code>.class</code>, <code>tag</code>, <code>[attr]</code>, <code>div > p</code> — anything you'd write in CSS works here.` },
                { id: "d2", badge: "2", text: `<strong>NodeList vs Array:</strong> <code>querySelectorAll</code> returns a NodeList, not an Array. It has <code>forEach</code> but lacks <code>map</code>, <code>filter</code>, <code>reduce</code>. Spread (<code>[...items]</code>) converts it.` },
                { id: "d3", badge: "3", text: `<strong>Live vs Static:</strong> <code>getElementsByClassName</code> returns a <em>live</em> collection (updates as DOM changes). <code>querySelectorAll</code> returns a <em>static</em> snapshot. Prefer <code>querySelector*</code>.` },
            ],
        },
        {
            num: "02",
            title: "Modifying Elements",
            type: "annotated",
            code: `<span class="hl-kw">const</span> el = document.<span class="hl-fn">querySelector</span>(<span class="hl-str">'#demo'</span>);

<span class="hl-cmt">// --- Text & HTML ---</span>
el.textContent = <span class="hl-str">'Safe plain text'</span>;
el.innerHTML = <span class="hl-str">'&lt;strong&gt;Bold&lt;/strong&gt;'</span>;
<span class="hl-cmt">// ⚠️ innerHTML with user input → XSS risk!</span>

<span class="hl-cmt">// --- Attributes ---</span>
el.<span class="hl-fn">setAttribute</span>(<span class="hl-str">'data-id'</span>, <span class="hl-str">'42'</span>);
el.<span class="hl-fn">getAttribute</span>(<span class="hl-str">'data-id'</span>);  <span class="hl-cmt">// "42"</span>
el.<span class="hl-fn">removeAttribute</span>(<span class="hl-str">'hidden'</span>);

<span class="hl-cmt">// --- Style (inline) ---</span>
el.style.color = <span class="hl-str">'#6c8cff'</span>;
el.style.fontSize = <span class="hl-str">'1.2rem'</span>;
<span class="hl-cmt">// CSS: font-size → JS: fontSize (camelCase)</span>

<span class="hl-cmt">// --- Classes (best practice) ---</span>
el.classList.<span class="hl-fn">add</span>(<span class="hl-str">'active'</span>);
el.classList.<span class="hl-fn">remove</span>(<span class="hl-str">'hidden'</span>);
el.classList.<span class="hl-fn">toggle</span>(<span class="hl-str">'dark-mode'</span>);
el.classList.<span class="hl-fn">contains</span>(<span class="hl-str">'active'</span>); <span class="hl-cmt">// true</span>`,
            notes: [
                { id: "m1", badge: "1", text: `<strong>textContent vs innerHTML:</strong> <code>textContent</code> is safe — it sets plain text. <code>innerHTML</code> parses HTML, so user input like <code>&lt;script&gt;alert('hacked')&lt;/script&gt;</code> will execute. Always sanitize or use <code>textContent</code>.` },
                { id: "m2", badge: "2", text: `<strong>classList:</strong> The modern way to manage CSS classes. <code>toggle</code> adds if missing, removes if present. Much cleaner than the old <code>className = className + " new"</code> string hacking.` },
            ],
        },
        {
            num: "03",
            title: "Events — Reacting to Users",
            type: "annotated",
            code: `<span class="hl-kw">const</span> btn = document.<span class="hl-fn">querySelector</span>(<span class="hl-str">'#myBtn'</span>);

<span class="hl-cmt">// addEventListener (recommended)</span>
btn.<span class="hl-fn">addEventListener</span>(<span class="hl-str">'click'</span>, (event) => {
  console.<span class="hl-fn">log</span>(<span class="hl-str">'Clicked!'</span>, event.target);
});

<span class="hl-cmt">// Common events:</span>
<span class="hl-cmt">//   click, dblclick, mouseenter, mouseleave</span>
<span class="hl-cmt">//   keydown, keyup, input, change</span>
<span class="hl-cmt">//   submit, focus, blur, scroll, resize</span>

<span class="hl-cmt">// Event delegation: listen on parent</span>
document.<span class="hl-fn">querySelector</span>(<span class="hl-str">'ul'</span>)
  .<span class="hl-fn">addEventListener</span>(<span class="hl-str">'click'</span>, (e) => {
    <span class="hl-kw">if</span> (e.target.tagName === <span class="hl-str">'LI'</span>) {
      console.<span class="hl-fn">log</span>(<span class="hl-str">'Item:'</span>, e.target.textContent);
    }
  });

<span class="hl-cmt">// Remove listener</span>
<span class="hl-kw">const</span> handler = () => console.<span class="hl-fn">log</span>(<span class="hl-str">'hi'</span>);
btn.<span class="hl-fn">addEventListener</span>(<span class="hl-str">'click'</span>, handler);
btn.<span class="hl-fn">removeEventListener</span>(<span class="hl-str">'click'</span>, handler);`,
            notes: [
                { id: "ev1", badge: "1", text: `<strong>event.target:</strong> The actual element clicked (could be a child). <code>event.currentTarget</code> is the element the listener is attached to. In delegation, <code>target</code> is the <code>&lt;li&gt;</code>; <code>currentTarget</code> is the <code>&lt;ul&gt;</code>.` },
                { id: "ev2", badge: "2", text: `<strong>Event delegation:</strong> Instead of adding a listener to each of 100 list items, add ONE listener to the parent <code>&lt;ul&gt;</code>. Events "bubble" up from child to parent. Check <code>e.target</code> to know which child was clicked.` },
                { id: "ev3", badge: "3", text: `<strong>Why not onclick=?</strong> Inline handlers (<code>&lt;button onclick="fn()"&gt;</code>) mix JS into HTML, can only have one handler, and execute in global scope. <code>addEventListener</code> supports multiple handlers and proper scoping.` },
            ],
        },
        {
            num: "04",
            title: "Creating & Removing Elements",
            type: "annotated",
            code: `<span class="hl-cmt">// Create new element</span>
<span class="hl-kw">const</span> card = document.<span class="hl-fn">createElement</span>(<span class="hl-str">'div'</span>);
card.className = <span class="hl-str">'card'</span>;
card.textContent = <span class="hl-str">'New card!'</span>;

<span class="hl-cmt">// Insert into the page</span>
document.body.<span class="hl-fn">appendChild</span>(card);

<span class="hl-cmt">// Insert at specific position</span>
parent.<span class="hl-fn">insertBefore</span>(card, referenceNode);

<span class="hl-cmt">// Modern: insertAdjacentHTML (no XSS risk
// if you control the string)</span>
container.<span class="hl-fn">insertAdjacentHTML</span>(
  <span class="hl-str">'beforeend'</span>,
  <span class="hl-str">'&lt;p class="note"&gt;Added!&lt;/p&gt;'</span>
);

<span class="hl-cmt">// Remove</span>
card.<span class="hl-fn">remove</span>();
<span class="hl-cmt">// or: parent.removeChild(card);</span>

<span class="hl-cmt">// Replace</span>
parent.<span class="hl-fn">replaceChild</span>(newEl, oldEl);`,
            notes: [
                { id: "cr1", badge: "1", text: `<strong>createElement + appendChild:</strong> The safe way to build DOM. Create the element, set properties, then attach. No HTML string parsing, no XSS vectors.` },
                { id: "cr2", badge: "2", text: `<strong>insertAdjacentHTML positions:</strong> <code>'beforebegin'</code> (before el), <code>'afterbegin'</code> (first child), <code>'beforeend'</code> (last child), <code>'afterend'</code> (after el).` },
            ],
        },
        {
            num: "05",
            title: "Timers & Web Storage",
            type: "grid",
            cards: [
                {
                    title: "Timers",
                    code: `<span class="hl-cmt">// Run once after delay</span>
<span class="hl-kw">const</span> id = <span class="hl-fn">setTimeout</span>(() => {
  console.<span class="hl-fn">log</span>(<span class="hl-str">'Delayed!'</span>);
}, <span class="hl-num">2000</span>); <span class="hl-cmt">// 2 seconds</span>

<span class="hl-fn">clearTimeout</span>(id); <span class="hl-cmt">// cancel</span>

<span class="hl-cmt">// Run repeatedly</span>
<span class="hl-kw">const</span> timer = <span class="hl-fn">setInterval</span>(() => {
  console.<span class="hl-fn">log</span>(<span class="hl-str">'Tick'</span>);
}, <span class="hl-num">1000</span>);

<span class="hl-fn">clearInterval</span>(timer); <span class="hl-cmt">// stop</span>

<span class="hl-cmt">// requestAnimationFrame: 60fps loop</span>
<span class="hl-kw">function</span> <span class="hl-fn">animate</span>() {
  <span class="hl-cmt">// update positions...</span>
  <span class="hl-fn">requestAnimationFrame</span>(animate);
}
<span class="hl-fn">animate</span>();`,
                },
                {
                    title: "Web Storage",
                    code: `<span class="hl-cmt">// localStorage: persists forever</span>
localStorage.<span class="hl-fn">setItem</span>(<span class="hl-str">'theme'</span>, <span class="hl-str">'dark'</span>);
localStorage.<span class="hl-fn">getItem</span>(<span class="hl-str">'theme'</span>); <span class="hl-cmt">// "dark"</span>
localStorage.<span class="hl-fn">removeItem</span>(<span class="hl-str">'theme'</span>);

<span class="hl-cmt">// Store objects: serialize first</span>
<span class="hl-kw">const</span> user = { name: <span class="hl-str">"A"</span>, score: <span class="hl-num">10</span> };
localStorage.<span class="hl-fn">setItem</span>(
  <span class="hl-str">'user'</span>,
  JSON.<span class="hl-fn">stringify</span>(user)
);
<span class="hl-kw">const</span> loaded = JSON.<span class="hl-fn">parse</span>(
  localStorage.<span class="hl-fn">getItem</span>(<span class="hl-str">'user'</span>)
);

<span class="hl-cmt">// sessionStorage: same API,
// cleared when tab closes</span>`,
                },
            ],
        },
        {
            num: "06",
            title: "Live Demo — Try It!",
            type: "demo",
            description: "Click the button to see JavaScript manipulate the DOM in real time.",
            demoId: "jshtml-demo",
        },
    ],
    quiz: [
        {
            question: "What does <code>querySelector</code> return if no match is found?",
            options: ["An empty string", "undefined", "null"],
            correct: 2,
        },
        {
            question: "Why is event delegation useful?",
            options: [
                "It makes events fire faster",
                "One listener on a parent handles events for many children",
                "It prevents event bubbling",
            ],
            correct: 1,
        },
        {
            question: "Which is safer for displaying user input?",
            options: ["innerHTML", "textContent", "insertAdjacentHTML"],
            correct: 1,
        },
    ],
};
