// ============================================================
//  Feature: Quiz Engine
//  Renders mini-quizzes at the bottom of each page and scores them.
// ============================================================

export function renderQuiz(questions) {
    if (!questions || questions.length === 0) return '';

    const questionsHtml = questions.map((q, i) => {
        const optionsHtml = q.options.map((opt, oi) => `
            <label class="quiz-option" data-q="${i}" data-o="${oi}">
                <input type="radio" name="quiz-q${i}" value="${oi}">
                <span>${opt}</span>
            </label>`).join('');

        return `
            <div class="quiz-question" data-index="${i}">
                <p class="quiz-prompt">${(i + 1)}. ${q.question}</p>
                <div class="quiz-options">${optionsHtml}</div>
                <p class="quiz-feedback" id="quiz-fb-${i}"></p>
            </div>`;
    }).join('');

    return `
        <div class="section quiz-section">
            <h2 class="section-title"><span class="section-num">?</span>Quick Quiz</h2>
            <div class="quiz-container">
                ${questionsHtml}
                <button class="quiz-submit-btn" id="quiz-submit">Check Answers</button>
                <p class="quiz-score" id="quiz-score"></p>
            </div>
        </div>`;
}

export function initQuiz(questions) {
    const btn = document.getElementById('quiz-submit');
    if (!btn || !questions) return;

    btn.addEventListener('click', () => {
        let correct = 0;
        questions.forEach((q, i) => {
            const selected = document.querySelector(`input[name="quiz-q${i}"]:checked`);
            const fb = document.getElementById(`quiz-fb-${i}`);
            const opts = document.querySelectorAll(`.quiz-option[data-q="${i}"]`);

            opts.forEach(o => {
                o.classList.remove('quiz-correct', 'quiz-wrong');
                const oi = parseInt(o.dataset.o, 10);
                if (oi === q.correct) o.classList.add('quiz-correct');
            });

            if (selected) {
                const val = parseInt(selected.value, 10);
                const parent = selected.closest('.quiz-option');
                if (val === q.correct) {
                    correct++;
                    fb.textContent = 'Correct!';
                    fb.className = 'quiz-feedback quiz-fb-correct';
                } else {
                    parent.classList.add('quiz-wrong');
                    fb.textContent = `Wrong — the answer is: ${q.options[q.correct]}`;
                    fb.className = 'quiz-feedback quiz-fb-wrong';
                }
            } else {
                fb.textContent = 'No answer selected';
                fb.className = 'quiz-feedback quiz-fb-wrong';
            }
        });

        const score = document.getElementById('quiz-score');
        score.textContent = `Score: ${correct} / ${questions.length}`;
        score.className = `quiz-score ${correct === questions.length ? 'quiz-perfect' : ''}`;
    });
}
