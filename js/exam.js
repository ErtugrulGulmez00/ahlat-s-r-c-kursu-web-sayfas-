// =============================================
// SINAV MOTORU - Öz Ahlat Sürücü Kursu
// =============================================

const ExamApp = (() => {
  let state = {
    mode: null,          // 'mock' | 'practice'
    category: 'all',
    pool: [],
    current: 0,
    answers: [],
    timer: null,
    timeLeft: 0,
    totalTime: 0,
    started: false,
    practiceShowAnswer: false
  };

  const MOCK_TOTAL = 45;
  const MOCK_TIME  = 40 * 60; // 40 dakika

  // ---------- DOM yardımcıları ----------
  const $ = id => document.getElementById(id);
  const show = id => { const el = $(id); if(el) el.style.display = ''; };
  const hide = id => { const el = $(id); if(el) el.style.display = 'none'; };

  function getPool() {
    const cat = state.category;
    if (cat === 'all') return [...questions];
    return questions.filter(q => q.category === cat);
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ---------- Başlatma ----------
  function startMock() {
    state.mode = 'mock';
    state.category = 'all';
    state.pool = shuffle(questions).slice(0, MOCK_TOTAL);
    state.current = 0;
    state.answers = new Array(state.pool.length).fill(null);
    state.timeLeft = MOCK_TIME;
    state.totalTime = MOCK_TIME;
    showQuiz();
    startTimer();
  }

  function startPractice(category) {
    state.mode = 'practice';
    state.category = category;
    const filtered = category === 'all' ? questions : questions.filter(q => q.category === category);
    state.pool = shuffle(filtered);
    state.current = 0;
    state.answers = new Array(state.pool.length).fill(null);
    state.timeLeft = 0;
    state.practiceShowAnswer = false;
    clearTimer();
    showQuiz();
  }

  // ---------- Timer ----------
  function startTimer() {
    clearTimer();
    state.timer = setInterval(() => {
      state.timeLeft--;
      renderTimer();
      if (state.timeLeft <= 0) {
        clearTimer();
        finishExam();
      }
    }, 1000);
  }

  function clearTimer() {
    if (state.timer) { clearInterval(state.timer); state.timer = null; }
  }

  function renderTimer() {
    const el = $('exam-timer');
    if (!el) return;
    const m = String(Math.floor(state.timeLeft / 60)).padStart(2, '0');
    const s = String(state.timeLeft % 60).padStart(2, '0');
    el.textContent = `${m}:${s}`;
    el.className = 'exam-timer' + (state.timeLeft < 120 ? ' danger' : state.timeLeft < 300 ? ' warning' : '');
  }

  // ---------- Soru Göster ----------
  function showQuiz() {
    hide('exam-home');
    hide('exam-results');
    show('exam-quiz');
    renderQuestion();
    renderProgress();
  }

  function renderQuestion() {
    const q = state.pool[state.current];
    if (!q) return;

    $('exam-question-num').textContent = `Soru ${state.current + 1} / ${state.pool.length}`;
    $('exam-category-tag').textContent = q.categoryName;
    $('exam-question-text').textContent = q.question;

    const optsContainer = $('exam-options');
    optsContainer.innerHTML = '';

    const selected = state.answers[state.current];
    const showAnswer = state.mode === 'practice' && state.practiceShowAnswer && selected !== null;

    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'exam-option';
      btn.innerHTML = `<span class="opt-letter">${['A','B','C','D'][i]}</span><span class="opt-text">${opt}</span>`;

      if (selected === i) btn.classList.add('selected');
      if (showAnswer) {
        if (i === q.correct) btn.classList.add('correct');
        else if (selected === i) btn.classList.add('wrong');
        btn.disabled = true;
      }

      btn.addEventListener('click', () => selectAnswer(i));
      optsContainer.appendChild(btn);
    });

    if (showAnswer) {
      const expBox = $('exam-explanation');
      if (expBox) {
        expBox.textContent = q.explanation;
        expBox.style.display = '';
      }
    } else {
      const expBox = $('exam-explanation');
      if (expBox) expBox.style.display = 'none';
    }

    $('btn-prev').disabled = state.current === 0;
    const isLast = state.current === state.pool.length - 1;
    $('btn-next').textContent = isLast ? (state.mode === 'mock' ? 'Sınavı Bitir' : 'Sonuçları Gör') : 'Sonraki ›';
    $('btn-next').classList.toggle('finish-btn', isLast);

    const timerRow = $('timer-row');
    if (timerRow) timerRow.style.display = state.mode === 'mock' ? 'flex' : 'none';
  }

  function renderProgress() {
    const bar = $('exam-progress-bar');
    if (!bar) return;
    const pct = ((state.current + 1) / state.pool.length) * 100;
    bar.style.width = pct + '%';
  }

  function selectAnswer(index) {
    if (state.mode === 'practice' && state.practiceShowAnswer) return;
    state.answers[state.current] = index;

    if (state.mode === 'practice') {
      state.practiceShowAnswer = true;
    }
    renderQuestion();
  }

  function prevQuestion() {
    if (state.current > 0) {
      state.current--;
      state.practiceShowAnswer = state.answers[state.current] !== null;
      renderQuestion();
      renderProgress();
    }
  }

  function nextQuestion() {
    const isLast = state.current === state.pool.length - 1;
    if (isLast) {
      finishExam();
    } else {
      state.current++;
      state.practiceShowAnswer = (state.mode === 'practice' && state.answers[state.current] !== null);
      renderQuestion();
      renderProgress();
    }
  }

  // ---------- Sonuçlar ----------
  function finishExam() {
    clearTimer();
    hide('exam-quiz');
    show('exam-results');

    const total = state.pool.length;
    let correct = 0;
    const byCategory = {};

    state.pool.forEach((q, i) => {
      const cat = q.categoryName;
      if (!byCategory[cat]) byCategory[cat] = { correct: 0, total: 0 };
      byCategory[cat].total++;
      if (state.answers[i] === q.correct) {
        correct++;
        byCategory[cat].correct++;
      }
    });

    const pct = Math.round((correct / total) * 100);
    const passed = pct >= 70;

    $('result-score').textContent = `${correct}/${total}`;
    $('result-pct').textContent = `%${pct}`;
    const badge = $('result-badge');
    badge.textContent = passed ? '✓ GEÇTİNİZ' : '✗ KALDI';
    badge.className = 'result-badge ' + (passed ? 'pass' : 'fail');

    const circle = $('score-circle');
    if (circle) {
      circle.style.setProperty('--pct', pct);
      circle.style.setProperty('--color', passed ? '#22c55e' : '#ef4444');
    }

    const catList = $('result-categories');
    catList.innerHTML = '';
    Object.entries(byCategory).forEach(([name, data]) => {
      const catPct = Math.round((data.correct / data.total) * 100);
      const div = document.createElement('div');
      div.className = 'result-cat-item';
      div.innerHTML = `
        <div class="result-cat-name">${name}</div>
        <div class="result-cat-bar-wrap">
          <div class="result-cat-bar" style="width:${catPct}%;background:${catPct>=70?'#22c55e':'#ef4444'}"></div>
        </div>
        <div class="result-cat-score">${data.correct}/${data.total} (${catPct}%)</div>`;
      catList.appendChild(div);
    });

    const timeUsed = state.mode === 'mock'
      ? `${Math.floor((state.totalTime - state.timeLeft) / 60)} dakika ${(state.totalTime - state.timeLeft) % 60} saniye`
      : '-';
    const timeEl = $('result-time');
    if (timeEl) timeEl.textContent = state.mode === 'mock' ? timeUsed : 'Pratik Mod';

    animateScore(pct);
  }

  function animateScore(target) {
    const el = $('result-pct');
    let current = 0;
    const step = target / 50;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = `%${Math.round(current)}`;
      if (current >= target) clearInterval(timer);
    }, 30);
  }

  // ---------- Menüye Dön ----------
  function backToMenu() {
    clearTimer();
    hide('exam-quiz');
    hide('exam-results');
    show('exam-home');
    state = { mode:null, category:'all', pool:[], current:0, answers:[], timer:null,
               timeLeft:0, totalTime:0, started:false, practiceShowAnswer:false };
  }

  // ---------- Event Listeners ----------
  function init() {
    // Konu bazlı pratik butonları
    document.querySelectorAll('[data-start-practice]').forEach(btn => {
      btn.addEventListener('click', () => startPractice(btn.dataset.startPractice));
    });

    // Deneme sınavı butonu
    const mockBtn = $('btn-start-mock');
    if (mockBtn) mockBtn.addEventListener('click', startMock);

    // Önceki / Sonraki
    const prevBtn = $('btn-prev');
    const nextBtn = $('btn-next');
    if (prevBtn) prevBtn.addEventListener('click', prevQuestion);
    if (nextBtn) nextBtn.addEventListener('click', nextQuestion);

    // Sınavı iptal et
    const cancelBtn = $('btn-cancel-exam');
    if (cancelBtn) cancelBtn.addEventListener('click', () => {
      if (confirm('Sınavı iptal etmek istediğinize emin misiniz?')) backToMenu();
    });

    // Sonuç sayfası butonları
    const retryBtn = $('btn-retry');
    const menuBtn  = $('btn-back-menu');
    if (retryBtn) retryBtn.addEventListener('click', () => {
      if (state.mode === 'mock') startMock();
      else startPractice(state.category);
    });
    if (menuBtn) menuBtn.addEventListener('click', backToMenu);
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', ExamApp.init);
