/* One shared shell for every subject. Course tabs above, subject modes below. */
(function () {
  'use strict';
  const palettes = {
    green: { label: ['Grün', 'Green'], light: ['#f6f7ef','#fbfcf7','#233b2e','#687268','#d8ded2','#e8eddf','#355e42','#77965c','#ffffff'], dark: ['#141d18','#1d2a22','#e6eee7','#acbcb0','#3c5042','#2b3e30','#a7d4a5','#7fb284','#17241a'], swatches: ['#355e42','#a7d4a5'] },
    violet: { label: ['Pink / Violett', 'Pink / violet'], light: ['#fbf5fc','#fffbff','#422747','#79667d','#e7d6eb','#f1e1f4','#884c9c','#bb5f93','#ffffff'], dark: ['#211624','#2d2033','#f4e7f7','#c5accb','#573d61','#402c49','#d8ade9','#e9a2cb','#321b3b'], swatches: ['#a055b5','#e9a2cb'] },
    blue: { label: ['Blau', 'Blue'], light: ['#f2f7fc','#fbfdff','#243b54','#62758c','#d3dfed','#e2edf8','#315f98','#648fbc','#ffffff'], dark: ['#141d29','#1c2a3b','#e5edf8','#acbdd2','#3b526d','#283e57','#a2c6f4','#82a8d6','#172a42'], swatches: ['#315f98','#a2c6f4'] },
    orange: { label: ['Rot / Orange', 'Red / orange'], light: ['#fcf5ef','#fffaf6','#512e25','#846b61','#ead8ce','#f7e5d8','#a4492f','#c57842','#ffffff'], dark: ['#251a17','#34251f','#faebe0','#d2b4a4','#60463a','#493126','#f3b78f','#e4917b','#3c231b'], swatches: ['#b74c38','#edaa67'] }
  };
  const appearanceKey = 'sh-appearance';
  let appearance = { theme: 'light', palette: 'green' };
  try { const saved = JSON.parse(localStorage.getItem(appearanceKey) || '{}'); if (['light','dark'].includes(saved.theme)) appearance.theme = saved.theme; if (palettes[saved.palette]) appearance.palette = saved.palette; } catch (_) {}
  function applyAppearance(persist) {
    const values = palettes[appearance.palette][appearance.theme];
    const names = ['bg','surface','ink','muted','line','soft','accent','secondary','on-accent'];
    names.forEach((name, index) => document.documentElement.style.setProperty('--design-' + name, values[index]));
    document.documentElement.style.setProperty('--design-scheme', appearance.theme);
    document.documentElement.style.setProperty('--design-shadow', appearance.theme === 'dark' ? '#00000050' : '#233b2e1c');
    document.documentElement.dataset.appearanceTheme = appearance.theme;
    document.documentElement.dataset.appearancePalette = appearance.palette;
    document.documentElement.dataset.theme = appearance.theme;
    if (persist) {
      try { localStorage.setItem(appearanceKey, JSON.stringify(appearance)); localStorage.setItem('sh-theme', appearance.theme); } catch (_) {}
      if (window.SHDesign) window.SHDesign.save({ ...window.SHDesign.get(), theme: appearance.theme, accent: values[6], background: values[0], text: values[2], box: values[1] }).catch(() => {});
    }
  }
  applyAppearance(false);
  addEventListener('storage', event => { if (event.key === appearanceKey) { try { const next = JSON.parse(event.newValue); if (next && ['light','dark'].includes(next.theme) && palettes[next.palette]) { appearance = next; applyAppearance(false); updateDesignPanel(); } } catch (_) {} } });
  const source = document.currentScript;
  const base = new URL('../', source.src);
  const path = location.pathname.slice(base.pathname.length);
  const chemistry = path.startsWith('chemie/');
  const de = chemistry || path.startsWith('de/') || new URLSearchParams(location.search).get('lang') === 'de';
  const prefix = de ? 'de/' : '';
  const file = path.split('/').pop() || 'index.html';
  const L = (german, english) => de ? german : english;
  const sharedPages = new Set(['linalg-moves.html', 'linalg-plan.html', 'linalg-script.html', 'linalg-01.html', 'linalg-02.html', 'linalg-03.html', 'linalg-04.html', 'script.html', 'phys-script.html', 'pdf.html']);
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
  const design = document.createElement('details'); design.className = 'study-design';
  const toggle = document.createElement('summary'); toggle.textContent = 'Design'; design.append(toggle);
  const panel = document.createElement('div'); panel.className = 'study-design-panel';
  const heading = document.createElement('h2'); heading.textContent = L('Dein Design', 'Your design'); panel.append(heading);
  const themes = document.createElement('fieldset');
  const themeLegend = document.createElement('legend'); themeLegend.textContent = L('Darstellung', 'Appearance'); themes.append(themeLegend);
  const themeOptions = document.createElement('div'); themeOptions.className = 'design-theme-options';
  [['light', L('Hell', 'Light')], ['dark', L('Dunkel', 'Dark')]].forEach(([value, text]) => {
    const label = document.createElement('label'); const input = document.createElement('input'); input.type = 'radio'; input.name = 'study-design-theme'; input.value = value;
    input.addEventListener('change', () => { appearance.theme = value; applyAppearance(true); updateDesignPanel(); }); label.append(input, document.createTextNode(text)); themeOptions.append(label);
  }); themes.append(themeOptions); panel.append(themes);
  const colours = document.createElement('fieldset'); const colourLegend = document.createElement('legend'); colourLegend.textContent = L('Farbwelt', 'Colour palette'); colours.append(colourLegend);
  const colourOptions = document.createElement('div'); colourOptions.className = 'design-colours';
  Object.entries(palettes).forEach(([id, value]) => {
    const button = document.createElement('button'); button.type = 'button'; button.dataset.palette = id;
    const swatch = document.createElement('span'); swatch.className = 'design-swatch'; swatch.setAttribute('aria-hidden', 'true'); swatch.style.background = 'linear-gradient(135deg,' + value.swatches[0] + ' 50%,' + value.swatches[1] + ' 50%)';
    button.append(swatch, document.createTextNode(value.label[de ? 0 : 1])); button.addEventListener('click', () => { appearance.palette = id; applyAppearance(true); updateDesignPanel(); }); colourOptions.append(button);
  }); colours.append(colourOptions); panel.append(colours);
  const hint = document.createElement('p'); hint.className = 'design-save-hint'; hint.textContent = L('Wird für alle Fächer in diesem Browser gespeichert.', 'Saved for all subjects in this browser.'); panel.append(hint);
  design.append(panel); utilities.append(design);
  function updateDesignPanel() {
    design.querySelectorAll('input[name="study-design-theme"]').forEach(input => { input.checked = input.value === appearance.theme; });
    design.querySelectorAll('[data-palette]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.palette === appearance.palette)));
  }
  updateDesignPanel();
  document.addEventListener('pointerdown', event => { if (!design.contains(event.target)) design.open = false; });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && design.open) { design.open = false; toggle.focus(); } });
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
