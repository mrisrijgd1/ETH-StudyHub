/* One shared shell for every subject. Course tabs above, subject modes below. */
(function () {
  'use strict';
  const source = document.currentScript;
  const base = new URL('../', source.src);
  const path = location.pathname.slice(base.pathname.length);
  const chemistry = path.startsWith('chemie/');
  const de = chemistry || path.startsWith('de/') || new URLSearchParams(location.search).get('lang') === 'de';
  const prefix = de ? 'de/' : '';
  const file = path.split('/').pop() || 'index.html';
  const L = (german, english) => de ? german : english;
  const sharedPages = new Set(['linalg-moves.html', 'linalg-plan.html', 'linalg-script.html', 'linalg-01.html', 'linalg-02.html', 'linalg-03.html', 'script.html', 'phys-script.html', 'pdf.html']);
  const url = value => { const target = new URL(value, base); if (de && sharedPages.has(value)) target.searchParams.set('lang', 'de'); return target.href; };
  const subjects = [
    { id: 'analysis', label: 'Analysis I', href: prefix + 'analysis.html' },
    { id: 'physics', label: L('Physik I', 'Physics I'), href: prefix + 'physics.html' },
    { id: 'chemie', label: 'Chemie I (PC)', href: 'chemie/' },
    { id: 'linalg', label: L('Lineare Algebra I', 'Linear Algebra I'), href: prefix + 'linalg.html' }
  ];
  const subject = chemistry ? 'chemie' : /^linalg(?:-|\.)/.test(file) ? 'linalg' : /^(physics\.html|phys-|serie-p)/.test(file) ? 'physics' : /^(analysis\.html|lesson-|refresher-|serie-a|practice\.html|mock\.html|flashcards\.html|moves\.html|tree\.html|exam-map\.html|skipped\.html|script\.html|docs\.html)$/.test(file) || /^(lesson-|refresher-|serie-a)/.test(file) ? 'analysis' : null;
  document.body.classList.add('studyhub-app', 'sh-unified');
  if (subject) document.body.dataset.subject = subject;
  const modes = {
    analysis: [
      ['lessons', L('Lektionen', 'Lessons'), prefix + 'analysis.html#lessons'],
      ['revision', L('Repetition', 'Revision'), prefix + 'analysis.html#refresher'],
      ['practice', L('Üben', 'Practice'), prefix + 'practice.html'],
      ['cards', L('Lernkarten', 'Flashcards'), prefix + 'flashcards.html'],
      ['plan', L('Prüfungsplan', 'Exam plan'), prefix + 'exam-map.html'],
      ['script', L('Skript', 'Script'), 'script.html'],
      ['exams', L('Prüfungen', 'Exams'), prefix + 'docs.html']
    ],
    physics: [
      ['lessons', L('Lektionen', 'Lessons'), prefix + 'physics.html#lessons'],
      ['practice', L('Üben & Werkzeuge', 'Practice & tools'), prefix + 'physics.html#tools'],
      ['plan', L('Prüfungsplan', 'Exam plan'), prefix + 'phys-plan.html'],
      ['script', L('Skript', 'Script'), 'phys-script.html'],
      ['board', L('Tafel & Skript', 'Board & script'), prefix + 'phys-board.html'],
      ['exams', L('Prüfungen', 'Exams'), prefix + 'phys-docs.html']
    ],
    linalg: [
      ['lessons', L('Lektionen', 'Lessons'), prefix + 'linalg.html#lessons'],
      ['practice', L('Beweistechnik', 'Proof techniques'), 'linalg-moves.html'],
      ['plan', L('Prüfungsplan', 'Exam plan'), 'linalg-plan.html'],
      ['script', L('Skript', 'Script'), 'linalg-script.html']
    ],
    chemie: [
      ['lessons', 'Lektionen', 'chemie/#home'],
      ['review', 'Wiederholen', 'chemie/#review'],
      ['exams', 'Üben & Prüfungen', 'chemie/#exams'],
      ['library', 'Materialien', 'chemie/#library']
    ]
  };
  function activeMode() {
    if (subject === 'chemie') {
      const route = location.hash.slice(1).split('/')[0];
      return ({ review: 'review', exams: 'exams', training: 'exams', library: 'library', sources: 'library' })[route] || 'lessons';
    }
    if (location.hash === '#tools' && subject === 'physics') return 'practice';
    if (location.hash === '#refresher' || /^refresher-/.test(file)) return 'revision';
    if (/script\.html$/.test(file)) return 'script';
    if (/docs\.html$/.test(file)) return 'exams';
    if (/plan\.html$|exam-map\.html$/.test(file)) return 'plan';
    if (/board\.html$/.test(file)) return 'board';
    if (/flashcards\.html$/.test(file)) return 'cards';
    if (/practice\.html$|mock\.html$|moves\.html$|tree\.html$|^serie-/.test(file)) return 'practice';
    return 'lessons';
  }
  function link(text, href, className) {
    const a = document.createElement('a');
    a.textContent = text; a.href = url(href); if (className) a.className = className;
    return a;
  }
  const shell = document.createElement('header'); shell.className = 'study-shell';
  const upper = document.createElement('div'); upper.className = 'study-upper';
  const brand = link('StudyHub', prefix + 'index.html', 'study-brand');
  const star = document.createElement('span'); star.textContent = ' ✦'; star.setAttribute('aria-hidden', 'true'); brand.append(star);
  upper.append(brand);
  const courses = document.createElement('nav'); courses.className = 'study-subjects'; courses.setAttribute('aria-label', L('Fächer', 'Subjects'));
  subjects.forEach(item => { const a = link(item.label, item.href); if (subject === item.id) a.setAttribute('aria-current', 'page'); courses.append(a); });
  upper.append(courses);
  const utilities = document.createElement('nav'); utilities.className = 'study-utilities'; utilities.setAttribute('aria-label', L('Persönlicher Bereich', 'Personal area'));
  utilities.append(link(L('Fortschritt', 'Progress'), prefix + 'account.html'));
  utilities.append(link(L('Mehr', 'More'), prefix + 'more.html'));
  const languageTarget = chemistry ? null : sharedPages.has(file) ? file + (de ? '?lang=en' : '?lang=de') : (de ? file : 'de/' + file);
  if (languageTarget) utilities.append(link(de ? 'EN' : 'DE', languageTarget));
  upper.append(utilities); shell.append(upper);
  if (subject) {
    const lower = document.createElement('nav'); lower.className = 'study-modes'; lower.setAttribute('aria-label', L('Bereiche im Fach', 'Subject modes'));
    modes[subject].forEach(([id, label, href]) => { const a = link(label, href); a.dataset.mode = id; lower.append(a); });
    shell.append(lower);
  }
  document.body.prepend(shell);
  function updateMode() { shell.querySelectorAll('[data-mode]').forEach(a => { if (a.dataset.mode === activeMode()) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); }); }
  updateMode(); addEventListener('hashchange', updateMode);
  // Keep the original account link live for authenticated users.
  document.addEventListener('sh-auth', () => { const account = shell.querySelector('.study-utilities a'); if (account && window.SH?.user) account.textContent = L('Mein Fortschritt', 'My progress'); });
  let progress = {}; try { progress = JSON.parse(localStorage.getItem('studyhub-chemie-v1') || '{}'); } catch (_) {}
  document.querySelectorAll('[data-chemie-progress]').forEach(el => { el.textContent = (progress.done || []).length + ' / 27 ' + L('Lektionen abgeschlossen', 'lessons completed'); });
})();
