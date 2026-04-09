/* ============================================================
   Frontend in 2 Days — Navigation & Interactivity
   ============================================================ */

(function () {
    "use strict";

    // ---- Page Navigation ----
    const pages = document.querySelectorAll(".page");
    const tabs = document.querySelectorAll(".tab-btn");

    function showPage(index) {
        pages.forEach((p, i) => {
            p.classList.toggle("active", i === index);
        });
        tabs.forEach((t, i) => {
            t.classList.toggle("active", i === index);
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Tab clicks
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const idx = parseInt(tab.dataset.page, 10);
            showPage(idx);
        });
    });

    // Prev / Next buttons
    document.querySelectorAll(".nav-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            const target = parseInt(btn.dataset.target, 10);
            showPage(target);
        });
    });

    // ---- Marker ↔ Note highlighting ----
    document.querySelectorAll(".marker[data-note]").forEach((marker) => {
        const noteId = marker.dataset.note;
        if (!noteId) return;
        const note = document.querySelector(`.note[data-note="${noteId}"]`);
        if (!note) return;

        marker.addEventListener("mouseenter", () => {
            marker.classList.add("highlight");
            note.style.borderLeftColor = "var(--accent2)";
            note.style.background = "var(--bg-surface)";
            note.style.color = "var(--text)";
        });

        marker.addEventListener("mouseleave", () => {
            marker.classList.remove("highlight");
            note.style.borderLeftColor = "";
            note.style.background = "";
            note.style.color = "";
        });

        note.addEventListener("mouseenter", () => {
            marker.classList.add("highlight");
        });

        note.addEventListener("mouseleave", () => {
            marker.classList.remove("highlight");
        });
    });

    // ---- Live Demo (Page 3: JS × HTML) ----
    const demoBtn = document.getElementById("demo-btn");
    const demoTitle = document.getElementById("demo-title");
    const demoList = document.getElementById("demo-list");

    if (demoBtn && demoTitle && demoList) {
        let count = 0;

        demoBtn.addEventListener("click", () => {
            count++;
            demoTitle.innerText = `Clicked ${count} time${count > 1 ? "s" : ""}`;
            demoTitle.style.color = count % 2 ? "#e74c3c" : "#2ecc71";

            const li = document.createElement("li");
            li.innerText = `Item #${count}`;
            demoList.appendChild(li);

            // Keep the list from getting too long
            if (demoList.children.length > 8) {
                demoList.removeChild(demoList.firstChild);
            }
        });
    }

    // ---- Keyboard navigation ----
    document.addEventListener("keydown", (e) => {
        // Find current active page index
        let current = -1;
        pages.forEach((p, i) => {
            if (p.classList.contains("active")) current = i;
        });

        if (e.key === "ArrowRight" && current < pages.length - 1) {
            showPage(current + 1);
        } else if (e.key === "ArrowLeft" && current > 0) {
            showPage(current - 1);
        }
    });
})();
