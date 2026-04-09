// ============================================================
//  Page Data: HTML Tutorial
// ============================================================
export const htmlPage = {
    title: "HTML — The Skeleton",
    subtitle: `Every webpage is built from a single <code>.html</code> file.
        HTML isn't a programming language — it's a <em>markup</em> language
        that tells the browser <strong>what</strong> to display.`,
    sections: [
        {
            num: "01",
            title: "The Document Structure",
            type: "annotated",
            code: `<span class="hl-cmt">&lt;!-- This is a complete HTML document --&gt;</span>
<span class="marker" data-note="n1">&lt;!DOCTYPE html&gt;</span>
<span class="marker" data-note="n2">&lt;html lang="en"&gt;</span>

  <span class="marker" data-note="n3">&lt;head&gt;</span>
    <span class="marker" data-note="n4">&lt;meta charset="UTF-8"&gt;</span>
    <span class="marker" data-note="n5">&lt;meta name="viewport"
          content="width=device-width,
                   initial-scale=1.0"&gt;</span>
    <span class="marker" data-note="n6">&lt;title&gt;My Page&lt;/title&gt;</span>
    <span class="marker" data-note="n7">&lt;link rel="stylesheet"
          href="styles.css"&gt;</span>
  &lt;/head&gt;

  <span class="marker" data-note="n8">&lt;body&gt;</span>
    &lt;h1&gt;Hello&lt;/h1&gt;
    <span class="marker" data-note="n9">&lt;script src="app.js"&gt;&lt;/script&gt;</span>
  &lt;/body&gt;

&lt;/html&gt;`,
            notes: [
                { id: "n1", badge: "1", text: `<strong>&lt;!DOCTYPE html&gt;</strong> — A <em>declaration</em>, not a tag. Tells the browser: "I'm HTML5, render me in Standards Mode." Without it, browsers fall back to "Quirks Mode" (1990s rendering). Always line 1.` },
                { id: "n2", badge: "2", text: `<strong>&lt;html&gt;</strong> — The <em>root element</em>. Every file has exactly <strong>one</strong>. The <code>lang</code> attribute helps search engines and screen readers.` },
                { id: "n3", badge: "3", text: `<strong>&lt;head&gt;</strong> — The "brain." Nothing here is visible on the page. It holds metadata, styles, scripts, and external links. Exactly <strong>one</strong> per document.` },
                { id: "n4", badge: "4", text: `<strong>&lt;meta charset&gt;</strong> — Sets the character encoding. <code>UTF-8</code> supports all languages (CJK, emoji, accents). Without it, non-ASCII text may appear garbled.` },
                { id: "n5", badge: "5", text: `<strong>viewport meta</strong> — Tells mobile browsers "page width = device width, don't zoom out." Without it, phones render a tiny desktop page.` },
                { id: "n6", badge: "6", text: `<strong>&lt;title&gt;</strong> — The text on the browser tab. <em>Required.</em> Also used by search engines as the clickable headline.` },
                { id: "n7", badge: "7", text: `<strong>&lt;link&gt;</strong> — Connects external resources. <code>rel="stylesheet"</code> loads CSS. Also used for favicons. It's a void element (no closing tag). Loads <strong>in parallel</strong> — unlike <code>@import</code> in CSS which loads sequentially.` },
                { id: "n8", badge: "8", text: `<strong>&lt;body&gt;</strong> — The "body." Everything the user <em>sees</em> goes here: text, images, buttons, canvas. Exactly <strong>one</strong> per document.` },
                { id: "n9", badge: "9", text: `<strong>&lt;script&gt;</strong> — Loads JavaScript. Placed at the bottom of &lt;body&gt; so the browser renders HTML first, then runs JS. If placed in &lt;head&gt;, use the <code>defer</code> attribute. <code>async</code> downloads in parallel but executes immediately — order not guaranteed.` },
            ],
            infoAfter: `<strong>The Rule of One:</strong> One <code>&lt;html&gt;</code>, one <code>&lt;head&gt;</code>, one <code>&lt;body&gt;</code>. If you accidentally write two, the browser will merge them silently — but styles and scripts may break.`,
        },
        {
            num: "02",
            title: "Common Body Elements",
            type: "grid",
            cards: [
                {
                    title: "Text & Headings",
                    code: `&lt;h1&gt;Main Heading&lt;/h1&gt;
&lt;h2&gt;Sub-heading&lt;/h2&gt;
<span class="hl-cmt">&lt;!-- h1 to h6, one h1 per page --&gt;</span>

&lt;p&gt;A paragraph of text.&lt;/p&gt;

&lt;p&gt;Line one&lt;br&gt;Line two&lt;/p&gt;
<span class="hl-cmt">&lt;!-- &lt;br&gt; forces a line break.
     HTML5: &lt;br&gt;  (recommended)
     XHTML: &lt;br /&gt; (required)
     Both work; pick one, be consistent --&gt;</span>

&lt;strong&gt;Bold&lt;/strong&gt;
&lt;em&gt;Italic&lt;/em&gt;
&lt;span&gt;Inline wrapper&lt;/span&gt;`
                },
                {
                    title: "Links & Images",
                    code: `<span class="hl-cmt">&lt;!-- Hyperlink --&gt;</span>
&lt;a href="https://example.com"
   target="_blank"&gt;Click me&lt;/a&gt;

<span class="hl-cmt">&lt;!-- Image (void element, no closing tag) --&gt;</span>
&lt;img src="photo.jpg"
     alt="A cat sleeping"
     width="300"&gt;

<span class="hl-cmt">&lt;!-- alt: text shown if image fails
         to load; also read by screen
         readers for accessibility --&gt;</span>`
                },
                {
                    title: "Lists",
                    code: `<span class="hl-cmt">&lt;!-- Unordered (bullet points) --&gt;</span>
&lt;ul&gt;
  &lt;li&gt;Apples&lt;/li&gt;
  &lt;li&gt;Bananas&lt;/li&gt;
&lt;/ul&gt;

<span class="hl-cmt">&lt;!-- Ordered (numbered) --&gt;</span>
&lt;ol&gt;
  &lt;li&gt;First step&lt;/li&gt;
  &lt;li&gt;Second step&lt;/li&gt;
&lt;/ol&gt;`
                },
                {
                    title: "Forms & Inputs",
                    code: `&lt;form action="/submit" method="POST"&gt;
  &lt;label for="name"&gt;Name:&lt;/label&gt;
  &lt;input type="text" id="name"
         placeholder="Enter name"&gt;

  &lt;input type="email"
         placeholder="you@mail.com"&gt;

  &lt;textarea rows="4"&gt;&lt;/textarea&gt;

  &lt;button type="submit"&gt;Send&lt;/button&gt;
&lt;/form&gt;

<span class="hl-cmt">&lt;!-- input is a void element --&gt;</span>`
                },
                {
                    title: "Tables",
                    code: `&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Name&lt;/th&gt;
      &lt;th&gt;Age&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Alice&lt;/td&gt;
      &lt;td&gt;30&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;`
                },
                {
                    title: "&lt;div&gt; vs Semantic Tags",
                    code: `<span class="hl-cmt">&lt;!-- div: generic container. No default
     style. For grouping, layout, JS hooks --&gt;</span>
&lt;div class="card"&gt;...&lt;/div&gt;

<span class="hl-cmt">&lt;!-- Semantic: same as div but meaningful
     to SEO &amp; screen readers --&gt;</span>
&lt;header&gt;Site banner&lt;/header&gt;
&lt;nav&gt;Navigation links&lt;/nav&gt;
&lt;main&gt;Primary content&lt;/main&gt;
&lt;section&gt;Grouped content&lt;/section&gt;
&lt;article&gt;Self-contained post&lt;/article&gt;
&lt;footer&gt;Copyright info&lt;/footer&gt;`
                },
            ],
        },
        {
            num: "03",
            title: "Special Elements",
            type: "grid",
            cards: [
                {
                    title: "&lt;canvas&gt; — The Blank Paper",
                    code: `&lt;canvas id="sky" width="400"
        height="300"&gt;
  Fallback text if unsupported
&lt;/canvas&gt;

<span class="hl-cmt">&lt;!-- Canvas itself displays nothing.
     JavaScript draws on it pixel by pixel
     via the 2D/WebGL API.

     Think of Python's Turtle: moveTo,
     lineTo, fillRect... but at 60fps.

     Libraries: PixiJS (2D),
     Three.js (3D/WebGL),
     Chart.js (charts). --&gt;</span>`
                },
                {
                    title: "&lt;ruby&gt; — Text Annotations",
                    code: `<span class="hl-cmt">&lt;!-- NOT the Ruby language!
     Named after a small font size
     used in East Asian printing. --&gt;</span>

&lt;ruby&gt;
  漢 &lt;rt&gt;hàn&lt;/rt&gt;
  語 &lt;rt&gt;yǔ&lt;/rt&gt;
&lt;/ruby&gt;

<span class="hl-cmt">&lt;!-- Creative uses:
     &lt;ruby&gt;I'm fine
       &lt;rt&gt;I'm not&lt;/rt&gt;
     &lt;/ruby&gt; --&gt;</span>`
                },
                {
                    title: "Void (Self-closing) Elements",
                    code: `<span class="hl-cmt">&lt;!-- These have NO closing tag: --&gt;</span>
&lt;br&gt;        <span class="hl-cmt">&lt;!-- line break --&gt;</span>
&lt;hr&gt;        <span class="hl-cmt">&lt;!-- horizontal rule --&gt;</span>
&lt;img&gt;       <span class="hl-cmt">&lt;!-- image --&gt;</span>
&lt;input&gt;     <span class="hl-cmt">&lt;!-- form input --&gt;</span>
&lt;meta&gt;      <span class="hl-cmt">&lt;!-- metadata --&gt;</span>
&lt;link&gt;      <span class="hl-cmt">&lt;!-- external resource --&gt;</span>

<span class="hl-cmt">&lt;!-- HTML5: &lt;br&gt;  (recommended)
     React/JSX: &lt;br /&gt; (required)
     NEVER: &lt;div /&gt; — swallows all
     content after it --&gt;</span>`
                },
                {
                    title: "PWA Manifest",
                    code: `<span class="hl-cmt">&lt;!-- In &lt;head&gt;, link a JSON file that
     turns your site into an installable
     "app": --&gt;</span>

&lt;link rel="manifest"
      href="manifest.json"&gt;

<span class="hl-cmt">// manifest.json:</span>
{
  "name": "My App",
  "short_name": "App",
  "start_url": "/",
  "display": "standalone",
  "icons": [{ "src": "icon.png",
              "sizes": "192x192" }]
}`
                },
            ],
            infoAfter: `<strong>Attributes:</strong> Tags carry data via attributes: <code>id</code> (unique identifier), <code>class</code> (reusable styling hook), <code>src</code> (resource URL), <code>href</code> (link destination), <code>style</code> (inline CSS). IDs must be unique across the page; classes can repeat.`,
        },
    ],
    quiz: [
        {
            question: "How many <code>&lt;body&gt;</code> tags can a valid HTML document have?",
            options: ["Zero", "Exactly one", "As many as needed"],
            correct: 1,
        },
        {
            question: "Where should you place <code>&lt;script&gt;</code> for best performance?",
            options: ["In &lt;head&gt; without defer", "Right after &lt;!DOCTYPE&gt;", "At the bottom of &lt;body&gt;"],
            correct: 2,
        },
        {
            question: "What does <code>&lt;!DOCTYPE html&gt;</code> do?",
            options: ["Creates the root element", "Tells the browser to use HTML5 Standards Mode", "Imports a DTD schema file"],
            correct: 1,
        },
    ],
};
