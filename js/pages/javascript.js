// ============================================================
//  Page Data: JavaScript Tutorial
// ============================================================
export const jsPage = {
    title: "JavaScript — The Brain",
    subtitle: `JavaScript is the <em>only</em> programming language browsers run natively.
        It turns static HTML into dynamic, interactive experiences.`,
    sections: [
        {
            num: "01",
            title: "Variables & Types",
            type: "annotated",
            code: `<span class="hl-cmt">// Three ways to declare variables</span>
<span class="hl-kw">const</span> PI = <span class="hl-num">3.14159</span>;      <span class="hl-cmt">// can't reassign</span>
<span class="hl-kw">let</span>   count = <span class="hl-num">0</span>;          <span class="hl-cmt">// can reassign</span>
<span class="hl-kw">var</span>   old = <span class="hl-str">"avoid this"</span>;  <span class="hl-cmt">// function-scoped (legacy)</span>

<span class="hl-cmt">// JavaScript's 8 types</span>
<span class="hl-kw">let</span> str    = <span class="hl-str">"hello"</span>;       <span class="hl-cmt">// string</span>
<span class="hl-kw">let</span> num    = <span class="hl-num">42</span>;            <span class="hl-cmt">// number (int & float)</span>
<span class="hl-kw">let</span> big    = <span class="hl-num">9007199254740993n</span>; <span class="hl-cmt">// bigint</span>
<span class="hl-kw">let</span> bool   = <span class="hl-kw">true</span>;          <span class="hl-cmt">// boolean</span>
<span class="hl-kw">let</span> empty  = <span class="hl-kw">null</span>;          <span class="hl-cmt">// intentional "no value"</span>
<span class="hl-kw">let</span> notSet;                 <span class="hl-cmt">// undefined</span>
<span class="hl-kw">let</span> sym    = <span class="hl-fn">Symbol</span>(<span class="hl-str">"id"</span>); <span class="hl-cmt">// unique identifier</span>
<span class="hl-kw">let</span> obj    = { <span class="hl-str">key</span>: <span class="hl-str">"val"</span> }; <span class="hl-cmt">// object</span>`,
            notes: [
                { id: "v1", badge: "1", text: `<strong>const vs let:</strong> Default to <code>const</code>. Use <code>let</code> only when you need reassignment. <code>const</code> for objects/arrays means the <em>reference</em> is locked — contents can still change.` },
                { id: "v2", badge: "2", text: `<strong>var is legacy:</strong> <code>var</code> is function-scoped (not block-scoped), gets hoisted, and can be redeclared. Modern JS uses <code>const</code>/<code>let</code> which are block-scoped.` },
                { id: "v3", badge: "3", text: `<strong>Dynamic typing:</strong> Variables have no fixed type. <code>let x = 5; x = "hello";</code> is valid. <code>typeof x</code> returns the current type as a string.` },
                { id: "v4", badge: "4", text: `<strong>null vs undefined:</strong> Both mean "no value" but <code>null</code> is <em>intentional</em> (you set it), <code>undefined</code> means "never assigned" (JS set it). Always use <code>===</code> to compare.` },
            ],
        },
        {
            num: "02",
            title: "Functions",
            type: "annotated",
            code: `<span class="hl-cmt">// Function declaration (hoisted)</span>
<span class="hl-kw">function</span> <span class="hl-fn">greet</span>(name) {
  <span class="hl-kw">return</span> <span class="hl-str">\`Hello, \${name}!\`</span>;
}

<span class="hl-cmt">// Arrow function (ES6+, not hoisted)</span>
<span class="hl-kw">const</span> <span class="hl-fn">add</span> = (a, b) => a + b;

<span class="hl-cmt">// Multi-line arrow</span>
<span class="hl-kw">const</span> <span class="hl-fn">process</span> = (data) => {
  <span class="hl-kw">const</span> cleaned = data.<span class="hl-fn">trim</span>();
  <span class="hl-kw">return</span> cleaned.<span class="hl-fn">toUpperCase</span>();
};

<span class="hl-cmt">// Default parameters</span>
<span class="hl-kw">function</span> <span class="hl-fn">power</span>(base, exp = <span class="hl-num">2</span>) {
  <span class="hl-kw">return</span> base ** exp;
}

<span class="hl-cmt">// Rest parameters (...)</span>
<span class="hl-kw">function</span> <span class="hl-fn">sum</span>(...nums) {
  <span class="hl-kw">return</span> nums.<span class="hl-fn">reduce</span>((a, b) => a + b, <span class="hl-num">0</span>);
}`,
            notes: [
                { id: "f1", badge: "1", text: `<strong>Hoisting:</strong> Function <em>declarations</em> are hoisted — you can call them before they appear in source code. Arrow functions assigned to <code>const</code> are NOT hoisted.` },
                { id: "f2", badge: "2", text: `<strong>Template literals:</strong> Backtick strings (<code>\`...\`</code>) support <code>\${expression}</code> interpolation and multi-line text. Single/double quotes cannot do this.` },
                { id: "f3", badge: "3", text: `<strong>Arrow vs function:</strong> Arrow functions do NOT have their own <code>this</code> — they inherit from the enclosing scope. Regular functions define their own <code>this</code> based on how they're called. Use arrows for callbacks; use <code>function</code> for methods.` },
            ],
        },
        {
            num: "03",
            title: "ES6+ Features",
            type: "grid",
            cards: [
                {
                    title: "Destructuring",
                    code: `<span class="hl-cmt">// Object destructuring</span>
<span class="hl-kw">const</span> user = { name: <span class="hl-str">"Alex"</span>, age: <span class="hl-num">25</span> };
<span class="hl-kw">const</span> { name, age } = user;

<span class="hl-cmt">// Array destructuring</span>
<span class="hl-kw">const</span> [first, ...rest] = [<span class="hl-num">1</span>, <span class="hl-num">2</span>, <span class="hl-num">3</span>];
<span class="hl-cmt">// first = 1, rest = [2, 3]</span>

<span class="hl-cmt">// Rename + default</span>
<span class="hl-kw">const</span> { name: n, role = <span class="hl-str">"user"</span> } = user;`,
                },
                {
                    title: "Spread Operator",
                    code: `<span class="hl-cmt">// Clone array</span>
<span class="hl-kw">const</span> copy = [...original];

<span class="hl-cmt">// Merge objects</span>
<span class="hl-kw">const</span> merged = { ...defaults, ...custom };

<span class="hl-cmt">// Pass array as arguments</span>
Math.<span class="hl-fn">max</span>(...numbers);`,
                },
                {
                    title: "Optional Chaining",
                    code: `<span class="hl-cmt">// Safely access nested properties</span>
<span class="hl-kw">const</span> city = user?.address?.city;
<span class="hl-cmt">// Returns undefined (not an error)
// if any link in the chain is null</span>

<span class="hl-cmt">// Works with methods too</span>
user?.getProfile?.();

<span class="hl-cmt">// Nullish coalescing</span>
<span class="hl-kw">const</span> port = config.port ?? <span class="hl-num">3000</span>;
<span class="hl-cmt">// Uses 3000 only if port is
// null or undefined (not 0!)</span>`,
                },
                {
                    title: "Modules (import/export)",
                    code: `<span class="hl-cmt">// math.js — named exports</span>
<span class="hl-kw">export</span> <span class="hl-kw">const</span> PI = <span class="hl-num">3.14</span>;
<span class="hl-kw">export function</span> <span class="hl-fn">add</span>(a, b) {
  <span class="hl-kw">return</span> a + b;
}

<span class="hl-cmt">// app.js — import</span>
<span class="hl-kw">import</span> { PI, add } <span class="hl-kw">from</span> <span class="hl-str">'./math.js'</span>;

<span class="hl-cmt">// Default export</span>
<span class="hl-kw">export default class</span> <span class="hl-fn">App</span> { }
<span class="hl-kw">import</span> App <span class="hl-kw">from</span> <span class="hl-str">'./App.js'</span>;`,
                },
            ],
        },
        {
            num: "04",
            title: "Arrays — The Workhorse",
            type: "grid",
            cards: [
                {
                    title: "Transform & Filter",
                    code: `<span class="hl-kw">const</span> nums = [<span class="hl-num">1</span>, <span class="hl-num">2</span>, <span class="hl-num">3</span>, <span class="hl-num">4</span>, <span class="hl-num">5</span>];

<span class="hl-cmt">// map: transform each item</span>
<span class="hl-kw">const</span> doubled = nums.<span class="hl-fn">map</span>(n => n * <span class="hl-num">2</span>);
<span class="hl-cmt">// [2, 4, 6, 8, 10]</span>

<span class="hl-cmt">// filter: keep items that pass test</span>
<span class="hl-kw">const</span> evens = nums.<span class="hl-fn">filter</span>(n => n % <span class="hl-num">2</span> === <span class="hl-num">0</span>);
<span class="hl-cmt">// [2, 4]</span>

<span class="hl-cmt">// find: first match (or undefined)</span>
<span class="hl-kw">const</span> found = nums.<span class="hl-fn">find</span>(n => n > <span class="hl-num">3</span>);
<span class="hl-cmt">// 4</span>

<span class="hl-cmt">// Chain them!</span>
<span class="hl-kw">const</span> result = nums
  .<span class="hl-fn">filter</span>(n => n > <span class="hl-num">2</span>)
  .<span class="hl-fn">map</span>(n => n * <span class="hl-num">10</span>);
<span class="hl-cmt">// [30, 40, 50]</span>`,
                },
                {
                    title: "Reduce & Others",
                    code: `<span class="hl-cmt">// reduce: collapse to one value</span>
<span class="hl-kw">const</span> total = nums.<span class="hl-fn">reduce</span>(
  (acc, n) => acc + n, <span class="hl-num">0</span>
);
<span class="hl-cmt">// 15</span>

<span class="hl-cmt">// some / every: boolean checks</span>
nums.<span class="hl-fn">some</span>(n => n > <span class="hl-num">4</span>);  <span class="hl-cmt">// true</span>
nums.<span class="hl-fn">every</span>(n => n > <span class="hl-num">0</span>); <span class="hl-cmt">// true</span>

<span class="hl-cmt">// forEach: side effects only</span>
nums.<span class="hl-fn">forEach</span>(n =>
  console.<span class="hl-fn">log</span>(n)
);

<span class="hl-cmt">// includes: membership test</span>
[<span class="hl-num">1</span>,<span class="hl-num">2</span>,<span class="hl-num">3</span>].<span class="hl-fn">includes</span>(<span class="hl-num">2</span>); <span class="hl-cmt">// true</span>`,
                },
            ],
        },
        {
            num: "05",
            title: "Async — Promises & await",
            type: "annotated",
            code: `<span class="hl-cmt">// A Promise = a "future value" container</span>

<span class="hl-cmt">// fetch() returns a Promise</span>
<span class="hl-fn">fetch</span>(<span class="hl-str">'https://api.example.com/data'</span>)
  .<span class="hl-fn">then</span>(response => response.<span class="hl-fn">json</span>())
  .<span class="hl-fn">then</span>(data => console.<span class="hl-fn">log</span>(data))
  .<span class="hl-fn">catch</span>(err => console.<span class="hl-fn">error</span>(err));

<span class="hl-cmt">// Same thing with async/await (cleaner)</span>
<span class="hl-kw">async function</span> <span class="hl-fn">loadData</span>() {
  <span class="hl-kw">try</span> {
    <span class="hl-kw">const</span> res = <span class="hl-kw">await</span> <span class="hl-fn">fetch</span>(<span class="hl-str">'/api/data'</span>);
    <span class="hl-kw">const</span> data = <span class="hl-kw">await</span> res.<span class="hl-fn">json</span>();
    console.<span class="hl-fn">log</span>(data);
  } <span class="hl-kw">catch</span> (err) {
    console.<span class="hl-fn">error</span>(<span class="hl-str">'Failed:'</span>, err);
  }
}

<span class="hl-cmt">// Run multiple in parallel</span>
<span class="hl-kw">const</span> [users, posts] = <span class="hl-kw">await</span> Promise.<span class="hl-fn">all</span>([
  <span class="hl-fn">fetch</span>(<span class="hl-str">'/users'</span>).<span class="hl-fn">then</span>(r => r.<span class="hl-fn">json</span>()),
  <span class="hl-fn">fetch</span>(<span class="hl-str">'/posts'</span>).<span class="hl-fn">then</span>(r => r.<span class="hl-fn">json</span>()),
]);`,
            notes: [
                { id: "a1", badge: "1", text: `<strong>Promise states:</strong> A Promise is <em>pending</em> → then either <em>fulfilled</em> (resolved with a value) or <em>rejected</em> (failed with an error). Once settled, it never changes again.` },
                { id: "a2", badge: "2", text: `<strong>async/await:</strong> Syntactic sugar over Promises. <code>await</code> pauses the function (not the thread!) until the Promise resolves. Always use <code>try/catch</code> for error handling.` },
                { id: "a3", badge: "3", text: `<strong>Promise.all:</strong> Runs multiple Promises in parallel. Returns when ALL resolve. If any reject, the whole thing rejects. Use <code>Promise.allSettled</code> if you want all results regardless.` },
            ],
        },
        {
            num: "06",
            title: "Classes & Objects",
            type: "annotated",
            code: `<span class="hl-kw">class</span> <span class="hl-fn">Animal</span> {
  <span class="hl-cmt">// Private field (ES2022)</span>
  #sound;

  <span class="hl-fn">constructor</span>(name, sound) {
    <span class="hl-kw">this</span>.name = name;   <span class="hl-cmt">// public</span>
    <span class="hl-kw">this</span>.#sound = sound; <span class="hl-cmt">// private</span>
  }

  <span class="hl-fn">speak</span>() {
    <span class="hl-kw">return</span> <span class="hl-str">\`\${this.name} says \${this.#sound}\`</span>;
  }

  <span class="hl-kw">static</span> <span class="hl-fn">create</span>(name, sound) {
    <span class="hl-kw">return new</span> <span class="hl-fn">Animal</span>(name, sound);
  }
}

<span class="hl-kw">class</span> <span class="hl-fn">Dog</span> <span class="hl-kw">extends</span> <span class="hl-fn">Animal</span> {
  <span class="hl-fn">constructor</span>(name) {
    <span class="hl-kw">super</span>(name, <span class="hl-str">"Woof"</span>);
  }

  <span class="hl-fn">fetch</span>(item) {
    <span class="hl-kw">return</span> <span class="hl-str">\`\${this.name} fetches \${item}\`</span>;
  }
}

<span class="hl-kw">const</span> rex = <span class="hl-kw">new</span> <span class="hl-fn">Dog</span>(<span class="hl-str">"Rex"</span>);
rex.<span class="hl-fn">speak</span>();  <span class="hl-cmt">// "Rex says Woof"</span>`,
            notes: [
                { id: "c1", badge: "1", text: `<strong>Prototype-based:</strong> Classes are syntactic sugar over JavaScript's prototype system. <code>typeof Dog</code> is <code>"function"</code>, not <code>"class"</code>.` },
                { id: "c2", badge: "2", text: `<strong>Private fields (#):</strong> ES2022 added real private fields with the <code>#</code> prefix. They're truly private — not just convention like <code>_name</code>. Outside access throws a SyntaxError.` },
            ],
        },
        {
            num: "07",
            title: "Error Handling",
            type: "annotated",
            code: `<span class="hl-cmt">// try/catch/finally</span>
<span class="hl-kw">try</span> {
  <span class="hl-kw">const</span> data = JSON.<span class="hl-fn">parse</span>(rawInput);
  <span class="hl-fn">processData</span>(data);
} <span class="hl-kw">catch</span> (error) {
  console.<span class="hl-fn">error</span>(<span class="hl-str">'Parse failed:'</span>, error.message);
} <span class="hl-kw">finally</span> {
  <span class="hl-cmt">// Runs no matter what</span>
  <span class="hl-fn">cleanup</span>();
}

<span class="hl-cmt">// Custom error</span>
<span class="hl-kw">class</span> <span class="hl-fn">ValidationError</span> <span class="hl-kw">extends</span> Error {
  <span class="hl-fn">constructor</span>(field, message) {
    <span class="hl-kw">super</span>(message);
    <span class="hl-kw">this</span>.field = field;
    <span class="hl-kw">this</span>.name = <span class="hl-str">'ValidationError'</span>;
  }
}

<span class="hl-kw">throw new</span> <span class="hl-fn">ValidationError</span>(
  <span class="hl-str">'email'</span>, <span class="hl-str">'Invalid email format'</span>
);`,
            notes: [
                { id: "e1", badge: "1", text: `<strong>Catch scope:</strong> The <code>error</code> parameter is only visible inside the catch block. You can inspect <code>error.message</code>, <code>error.stack</code>, and any custom properties you added.` },
                { id: "e2", badge: "2", text: `<strong>finally:</strong> Always runs — whether the try succeeds or catch fires. Use it for cleanup (closing files, hiding loaders). Even a <code>return</code> in try won't skip finally.` },
            ],
        },
    ],
    quiz: [
        {
            question: "What is the difference between <code>let</code> and <code>var</code>?",
            options: [
                "let is function-scoped, var is block-scoped",
                "let is block-scoped, var is function-scoped",
                "They are identical in modern JS",
            ],
            correct: 1,
        },
        {
            question: "What does <code>await</code> do?",
            options: [
                "Blocks the entire browser until the Promise resolves",
                "Pauses the async function until the Promise settles",
                "Creates a new thread for the Promise",
            ],
            correct: 1,
        },
        {
            question: "What does <code>[...arr]</code> create?",
            options: [
                "A reference to the same array",
                "A shallow copy of the array",
                "A deep copy of the array",
            ],
            correct: 1,
        },
    ],
};
