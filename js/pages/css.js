// ============================================================
//  Page Data: CSS Tutorial
// ============================================================
export const cssPage = {
    title: "CSS — The Skin",
    subtitle: `CSS (Cascading Style Sheets) transforms raw HTML into something beautiful.
        It controls <em>how</em> elements look — colors, layout, spacing, animations.`,
    sections: [
        {
            num: "01",
            title: "Three Ways to Apply CSS",
            type: "grid",
            cards: [
                {
                    title: "1. External (Best ✅)",
                    code: `<span class="hl-cmt">&lt;!-- In &lt;head&gt; --&gt;</span>
&lt;link rel="stylesheet"
      href="styles.css"&gt;

<span class="hl-cmt">/* styles.css */</span>
<span class="hl-kw">body</span> {
  <span class="hl-fn">background</span>: <span class="hl-str">#0f1117</span>;
  <span class="hl-fn">color</span>: <span class="hl-str">#e2e8f0</span>;
}

<span class="hl-cmt">/* Reusable, cacheable, clean
   separation of concerns */</span>`
                },
                {
                    title: "2. Internal (Sometimes)",
                    code: `<span class="hl-cmt">&lt;!-- In &lt;head&gt; --&gt;</span>
&lt;style&gt;
  <span class="hl-kw">h1</span> {
    <span class="hl-fn">color</span>: <span class="hl-str">royalblue</span>;
    <span class="hl-fn">font-size</span>: <span class="hl-num">2rem</span>;
  }
&lt;/style&gt;

<span class="hl-cmt">/* OK for single-page sites
   or critical-path CSS.
   Can't be cached separately. */</span>`
                },
                {
                    title: "3. Inline (Avoid ❌)",
                    code: `&lt;p <span class="hl-kw">style</span>=<span class="hl-str">"color: red;
   font-size: 1.5rem;"</span>&gt;
  Text
&lt;/p&gt;

<span class="hl-cmt">/* Highest specificity (hard to
   override), mixes style with
   content, not reusable.
   Only use for JS-driven dynamic
   styles. */</span>`
                },
            ],
        },
        {
            num: "02",
            title: "Selectors & Specificity",
            type: "annotated",
            code: `<span class="hl-cmt">/* --- Basic selectors --- */</span>
<span class="hl-kw">p</span>         { }  <span class="hl-cmt">/* type (tag) */</span>
<span class="hl-kw">.card</span>     { }  <span class="hl-cmt">/* class */</span>
<span class="hl-kw">#logo</span>     { }  <span class="hl-cmt">/* ID */</span>
<span class="hl-kw">*</span>         { }  <span class="hl-cmt">/* universal */</span>

<span class="hl-cmt">/* --- Combinators --- */</span>
<span class="hl-kw">div p</span>     { }  <span class="hl-cmt">/* descendant (any level) */</span>
<span class="hl-kw">div > p</span>   { }  <span class="hl-cmt">/* direct child */</span>
<span class="hl-kw">h2 + p</span>   { }  <span class="hl-cmt">/* adjacent sibling */</span>
<span class="hl-kw">h2 ~ p</span>   { }  <span class="hl-cmt">/* general sibling */</span>

<span class="hl-cmt">/* --- Pseudo-classes --- */</span>
<span class="hl-kw">a:hover</span>   { }  <span class="hl-cmt">/* on mouse over */</span>
<span class="hl-kw">li:first-child</span> { }
<span class="hl-kw">input:focus</span>    { }
<span class="hl-kw">li:nth-child(odd)</span> { }

<span class="hl-cmt">/* --- Pseudo-elements --- */</span>
<span class="hl-kw">p::before</span> { <span class="hl-fn">content</span>: <span class="hl-str">"→ "</span>; }
<span class="hl-kw">p::after</span>  { <span class="hl-fn">content</span>: <span class="hl-str">" ←"</span>; }
<span class="hl-kw">::selection</span> { <span class="hl-fn">background</span>: <span class="hl-str">#6c8cff</span>; }`,
            notes: [
                { id: "s1", badge: "!", text: `<strong>Specificity hierarchy:</strong> Inline style (1000) > ID (100) > Class/pseudo-class (10) > Element/pseudo-element (1). When two rules conflict, the higher specificity wins. Use <code>!important</code> sparingly — it overrides everything.` },
                { id: "s2", badge: "2", text: `<strong>Cascade order:</strong> When specificity is equal, the last-declared rule wins. External → Internal → Inline is NOT the cascade — it's about source order and specificity.` },
            ],
        },
        {
            num: "03",
            title: "The Box Model",
            type: "boxmodel",
        },
        {
            num: "04",
            title: "Colors & Typography",
            type: "grid",
            cards: [
                {
                    title: "Colors",
                    code: `<span class="hl-cmt">/* Named */</span>
<span class="hl-fn">color</span>: <span class="hl-str">tomato</span>;

<span class="hl-cmt">/* Hex: #RRGGBB or #RRGGBBAA */</span>
<span class="hl-fn">color</span>: <span class="hl-str">#6c8cff</span>;
<span class="hl-fn">color</span>: <span class="hl-str">#6c8cff80</span>; <span class="hl-cmt">/* 50% opacity */</span>

<span class="hl-cmt">/* RGB / RGBA */</span>
<span class="hl-fn">color</span>: <span class="hl-fn">rgb</span>(<span class="hl-num">108</span>, <span class="hl-num">140</span>, <span class="hl-num">255</span>);
<span class="hl-fn">color</span>: <span class="hl-fn">rgba</span>(<span class="hl-num">108</span>, <span class="hl-num">140</span>, <span class="hl-num">255</span>, <span class="hl-num">0.5</span>);

<span class="hl-cmt">/* HSL (hue, saturation, lightness) */</span>
<span class="hl-fn">color</span>: <span class="hl-fn">hsl</span>(<span class="hl-num">228</span>, <span class="hl-num">100%</span>, <span class="hl-num">71%</span>);

<span class="hl-cmt">/* CSS custom properties */</span>
<span class="hl-kw">:root</span> { <span class="hl-fn">--accent</span>: <span class="hl-str">#6c8cff</span>; }
<span class="hl-kw">.btn</span>  { <span class="hl-fn">color</span>: <span class="hl-fn">var</span>(--accent); }`
                },
                {
                    title: "Typography",
                    code: `<span class="hl-fn">font-family</span>: <span class="hl-str">'Inter'</span>, sans-serif;
<span class="hl-fn">font-size</span>: <span class="hl-num">1rem</span>;     <span class="hl-cmt">/* = 16px */</span>
<span class="hl-fn">font-weight</span>: <span class="hl-num">700</span>;     <span class="hl-cmt">/* bold */</span>
<span class="hl-fn">line-height</span>: <span class="hl-num">1.6</span>;     <span class="hl-cmt">/* unitless ratio */</span>
<span class="hl-fn">letter-spacing</span>: <span class="hl-num">0.02em</span>;
<span class="hl-fn">text-transform</span>: uppercase;
<span class="hl-fn">text-align</span>: center;

<span class="hl-cmt">/* Units:
   px - absolute (avoid)
   rem - relative to root font-size
   em - relative to parent
   vw/vh - viewport width/height
   % - relative to parent */</span>`
                },
            ],
        },
        {
            num: "05",
            title: "Display & Layout",
            type: "grid",
            cards: [
                {
                    title: "Display Values",
                    code: `<span class="hl-cmt">/* block: full width, stacks
   vertically. div, h1-h6, p */</span>
<span class="hl-fn">display</span>: block;

<span class="hl-cmt">/* inline: content width only,
   no vertical margin/padding.
   span, a, strong */</span>
<span class="hl-fn">display</span>: inline;

<span class="hl-cmt">/* inline-block: inline flow but
   respects width/height */</span>
<span class="hl-fn">display</span>: inline-block;

<span class="hl-cmt">/* none: removed from layout */</span>
<span class="hl-fn">display</span>: none;

<span class="hl-cmt">/* vs. visibility: hidden
   → still occupies space */</span>`
                },
                {
                    title: "Position",
                    code: `<span class="hl-cmt">/* static: default (normal flow) */</span>
<span class="hl-fn">position</span>: static;

<span class="hl-cmt">/* relative: offset from normal
   position, still in flow */</span>
<span class="hl-fn">position</span>: relative;
<span class="hl-fn">top</span>: <span class="hl-num">10px</span>;

<span class="hl-cmt">/* absolute: removed from flow,
   positioned relative to nearest
   positioned ancestor */</span>
<span class="hl-fn">position</span>: absolute;

<span class="hl-cmt">/* fixed: relative to viewport
   (stays on scroll) */</span>
<span class="hl-fn">position</span>: fixed;

<span class="hl-cmt">/* sticky: hybrid — relative until
   scroll threshold, then fixed */</span>
<span class="hl-fn">position</span>: sticky;
<span class="hl-fn">top</span>: <span class="hl-num">0</span>;`
                },
            ],
        },
        {
            num: "06",
            title: "Flexbox",
            type: "annotated",
            code: `<span class="hl-kw">.container</span> {
  <span class="hl-fn">display</span>: flex;
  <span class="hl-fn">flex-direction</span>: row;    <span class="hl-cmt">/* row | column */</span>
  <span class="hl-fn">justify-content</span>: center; <span class="hl-cmt">/* main axis */</span>
  <span class="hl-fn">align-items</span>: center;     <span class="hl-cmt">/* cross axis */</span>
  <span class="hl-fn">gap</span>: <span class="hl-num">1rem</span>;
  <span class="hl-fn">flex-wrap</span>: wrap;
}

<span class="hl-kw">.item</span> {
  <span class="hl-fn">flex</span>: <span class="hl-num">1</span>;        <span class="hl-cmt">/* grow to fill */</span>
  <span class="hl-fn">flex</span>: <span class="hl-num">0 0 200px</span>; <span class="hl-cmt">/* fixed 200px */</span>
  <span class="hl-fn">align-self</span>: flex-end; <span class="hl-cmt">/* override parent */</span>
  <span class="hl-fn">order</span>: <span class="hl-num">2</span>;         <span class="hl-cmt">/* visual reorder */</span>
}

<span class="hl-cmt">/* Center anything: */</span>
<span class="hl-kw">.centered</span> {
  <span class="hl-fn">display</span>: flex;
  <span class="hl-fn">justify-content</span>: center;
  <span class="hl-fn">align-items</span>: center;
}`,
            notes: [
                { id: "fx1", badge: "1", text: `<strong>Main vs Cross axis:</strong> <code>flex-direction: row</code> → main axis is horizontal, cross is vertical. <code>column</code> reverses them. <code>justify-content</code> always works on the main axis.` },
                { id: "fx2", badge: "2", text: `<strong>flex shorthand:</strong> <code>flex: 1</code> means <code>flex-grow: 1; flex-shrink: 1; flex-basis: 0%</code>. <code>flex: 0 0 200px</code> = don't grow, don't shrink, always 200px.` },
            ],
        },
        {
            num: "07",
            title: "CSS Grid",
            type: "annotated",
            code: `<span class="hl-kw">.grid</span> {
  <span class="hl-fn">display</span>: grid;
  <span class="hl-fn">grid-template-columns</span>:
    <span class="hl-fn">repeat</span>(<span class="hl-num">3</span>, <span class="hl-num">1fr</span>);
  <span class="hl-fn">grid-template-rows</span>: auto <span class="hl-num">1fr</span> auto;
  <span class="hl-fn">gap</span>: <span class="hl-num">1.5rem</span>;
}

<span class="hl-cmt">/* Responsive without media queries: */</span>
<span class="hl-kw">.auto-grid</span> {
  <span class="hl-fn">display</span>: grid;
  <span class="hl-fn">grid-template-columns</span>:
    <span class="hl-fn">repeat</span>(auto-fit, <span class="hl-fn">minmax</span>(<span class="hl-num">280px</span>, <span class="hl-num">1fr</span>));
  <span class="hl-fn">gap</span>: <span class="hl-num">1rem</span>;
}

<span class="hl-cmt">/* Place items: */</span>
<span class="hl-kw">.header</span> {
  <span class="hl-fn">grid-column</span>: <span class="hl-num">1 / -1</span>; <span class="hl-cmt">/* span all cols */</span>
}
<span class="hl-kw">.sidebar</span> {
  <span class="hl-fn">grid-row</span>: <span class="hl-num">2 / 4</span>;     <span class="hl-cmt">/* span rows 2-3 */</span>
}`,
            notes: [
                { id: "g1", badge: "1", text: `<strong>fr unit:</strong> "Fraction of available space." <code>1fr 2fr</code> = first column gets 1/3, second gets 2/3 of the remaining space after fixed columns.` },
                { id: "g2", badge: "2", text: `<strong>auto-fit + minmax:</strong> The holy grail of responsive grids. Columns automatically wrap and resize. No media queries needed for basic responsive layouts.` },
            ],
        },
        {
            num: "08",
            title: "Responsive Design",
            type: "annotated",
            code: `<span class="hl-cmt">/* Mobile-first: base styles for phone,
   then add complexity for bigger screens */</span>

<span class="hl-kw">.container</span> {
  <span class="hl-fn">padding</span>: <span class="hl-num">1rem</span>;
  <span class="hl-fn">max-width</span>: <span class="hl-num">1200px</span>;
  <span class="hl-fn">margin</span>: <span class="hl-num">0</span> auto;
}

<span class="hl-cmt">/* Tablet: 768px and up */</span>
<span class="hl-kw">@media</span> (min-width: <span class="hl-num">768px</span>) {
  <span class="hl-kw">.container</span> {
    <span class="hl-fn">padding</span>: <span class="hl-num">2rem</span>;
  }
  <span class="hl-kw">.grid</span> {
    <span class="hl-fn">grid-template-columns</span>: <span class="hl-num">1fr 1fr</span>;
  }
}

<span class="hl-cmt">/* Desktop: 1024px and up */</span>
<span class="hl-kw">@media</span> (min-width: <span class="hl-num">1024px</span>) {
  <span class="hl-kw">.grid</span> {
    <span class="hl-fn">grid-template-columns</span>:
      <span class="hl-fn">repeat</span>(<span class="hl-num">3</span>, <span class="hl-num">1fr</span>);
  }
}

<span class="hl-cmt">/* Prefer rem/em over px for text */</span>`,
            notes: [
                { id: "r1", badge: "1", text: `<strong>Mobile-first:</strong> Start with the simplest layout (mobile), then use <code>min-width</code> media queries to add complexity. This gives mobile users the smallest CSS. Desktop users load extra rules they can handle.` },
            ],
        },
        {
            num: "09",
            title: "Transitions & Animations",
            type: "grid",
            cards: [
                {
                    title: "Transitions",
                    code: `<span class="hl-kw">.btn</span> {
  <span class="hl-fn">background</span>: <span class="hl-str">#6c8cff</span>;
  <span class="hl-fn">transition</span>: all <span class="hl-num">0.3s</span> ease;
  <span class="hl-cmt">/* property duration timing-fn */</span>
}

<span class="hl-kw">.btn:hover</span> {
  <span class="hl-fn">background</span>: <span class="hl-str">#8ba3ff</span>;
  <span class="hl-fn">transform</span>: <span class="hl-fn">translateY</span>(<span class="hl-num">-2px</span>);
  <span class="hl-fn">box-shadow</span>: <span class="hl-num">0 4px 15px</span>
    <span class="hl-fn">rgba</span>(<span class="hl-num">108</span>,<span class="hl-num">140</span>,<span class="hl-num">255</span>,<span class="hl-num">0.3</span>);
}

<span class="hl-cmt">/* Timing functions:
   ease, linear, ease-in, ease-out
   cubic-bezier(0.4, 0, 0.2, 1) */</span>`
                },
                {
                    title: "Keyframe Animations",
                    code: `<span class="hl-kw">@keyframes</span> slideIn {
  <span class="hl-kw">from</span> {
    <span class="hl-fn">opacity</span>: <span class="hl-num">0</span>;
    <span class="hl-fn">transform</span>: <span class="hl-fn">translateY</span>(<span class="hl-num">20px</span>);
  }
  <span class="hl-kw">to</span> {
    <span class="hl-fn">opacity</span>: <span class="hl-num">1</span>;
    <span class="hl-fn">transform</span>: <span class="hl-fn">translateY</span>(<span class="hl-num">0</span>);
  }
}

<span class="hl-kw">.card</span> {
  <span class="hl-fn">animation</span>: slideIn <span class="hl-num">0.4s</span>
    ease-out forwards;
}

<span class="hl-cmt">/* Multi-step: */</span>
<span class="hl-kw">@keyframes</span> pulse {
  <span class="hl-num">0%</span>, <span class="hl-num">100%</span> { <span class="hl-fn">opacity</span>: <span class="hl-num">1</span>; }
  <span class="hl-num">50%</span>  { <span class="hl-fn">opacity</span>: <span class="hl-num">0.5</span>; }
}`
                },
            ],
        },
        {
            num: "10",
            title: "CSS Variables (Custom Properties)",
            type: "annotated",
            code: `<span class="hl-cmt">/* Define in :root for global scope */</span>
<span class="hl-kw">:root</span> {
  <span class="hl-fn">--bg</span>:      <span class="hl-str">#0f1117</span>;
  <span class="hl-fn">--text</span>:    <span class="hl-str">#e2e8f0</span>;
  <span class="hl-fn">--accent</span>:  <span class="hl-str">#6c8cff</span>;
  <span class="hl-fn">--radius</span>:  <span class="hl-num">12px</span>;
  <span class="hl-fn">--shadow</span>:  <span class="hl-num">0 4px 20px</span> <span class="hl-fn">rgba</span>(<span class="hl-num">0</span>,<span class="hl-num">0</span>,<span class="hl-num">0</span>,<span class="hl-num">0.3</span>);
}

<span class="hl-cmt">/* Use with var() */</span>
<span class="hl-kw">.card</span> {
  <span class="hl-fn">background</span>: <span class="hl-fn">var</span>(--bg);
  <span class="hl-fn">color</span>: <span class="hl-fn">var</span>(--text);
  <span class="hl-fn">border-radius</span>: <span class="hl-fn">var</span>(--radius);
  <span class="hl-fn">box-shadow</span>: <span class="hl-fn">var</span>(--shadow);
}

<span class="hl-cmt">/* Dark/Light theme toggle via JS: */</span>
<span class="hl-kw">[data-theme="light"]</span> {
  <span class="hl-fn">--bg</span>:   <span class="hl-str">#ffffff</span>;
  <span class="hl-fn">--text</span>: <span class="hl-str">#1a1a2e</span>;
}`,
            notes: [
                { id: "cv1", badge: "1", text: `<strong>Why variables?</strong> Change one value, every usage updates. Perfect for themes. They cascade like any CSS property — override them in a child element and everything inside uses the new value.` },
                { id: "cv2", badge: "2", text: `<strong>JS access:</strong> <code>getComputedStyle(el).getPropertyValue('--accent')</code> reads; <code>el.style.setProperty('--accent', '#ff0')</code> writes. This is how theme toggles work.` },
            ],
        },
        {
            num: "11",
            title: "Live CSS Preview",
            type: "csspreview",
        },
        {
            num: "12",
            title: "Cheatsheet",
            type: "cheatsheet",
            rows: [
                ["display: flex", "1D layout — horizontal or vertical", "Nav bars, card rows"],
                ["display: grid", "2D layout — rows AND columns", "Page layouts, galleries"],
                ["position: sticky", "Fixed after scroll threshold", "Headers, sidebars"],
                ["gap: 1rem", "Space between flex/grid items", "Everywhere (replaces margins)"],
                ["min-width / max-width", "Responsive constraints", "Fluid containers"],
                ["clamp(1rem, 2.5vw, 2rem)", "Fluid sizing min/preferred/max", "Responsive font sizes"],
                ["aspect-ratio: 16/9", "Lock width:height ratio", "Video embeds, cards"],
                ["overflow: auto", "Add scrollbar if content overflows", "Scrollable containers"],
                ["mix-blend-mode", "Photoshop-like blending", "Text over images"],
                ["backdrop-filter: blur(10px)", "Frosted glass effect", "Overlays, modals"],
            ],
        },
    ],
    quiz: [
        {
            question: "What does <code>display: flex</code> do?",
            options: [
                "Hides the element",
                "Makes children lay out in a 1D flow (row or column)",
                "Creates a 2D grid layout",
            ],
            correct: 1,
        },
        {
            question: "Which unit is relative to the root font size?",
            options: ["px", "em", "rem"],
            correct: 2,
        },
        {
            question: "How do you select an element with class <code>card</code> AND ID <code>main</code>?",
            options: [".card #main", "#main.card or .card#main", "card.main"],
            correct: 1,
        },
    ],
};
