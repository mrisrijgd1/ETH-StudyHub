/* One shared shell for every subject. Course tabs above, subject modes below. */
(function () {
  'use strict';
  const palettes = {
    skymint: { label: ['Sky & Mint', 'Sky & mint'], swatches: ['#1865f2', '#14bf96'], tints: ['#1865f2', '#14bf96', '#9059ff', '#ffb100', '#ff6b5b', '#00a8d6'],
      light: { 'bg': '#f7f8fa', 'surface': '#ffffff', 'raised': '#ffffff', 'ink': '#21242c', 'muted': '#5b616e', 'line': '#e1e5ec', 'border': '#8a909c', 'soft': '#eef3fd', 'accent': '#1865f2', 'on-accent': '#ffffff', 'accent-text': '#1865f2', 'accent-bright': '#1865f2', 'accent-soft': '#e5eefe', 'secondary': '#0a7558', 'highlight': '#14bf96', 'on-highlight': '#0b2a22', 'highlight-soft': '#ddf7ef', 'story': '#fff6e0', 'story-edge': '#c98700', 'exam': '#f1ebff', 'exam-edge': '#7a4ff0', 'success': '#1a7f37', 'warning': '#9a5b00', 'danger': '#c62828', 'focus': '#4255ff' },
      dark: { 'bg': '#121826', 'surface': '#1a2234', 'raised': '#222c42', 'ink': '#eef2f8', 'muted': '#b0b8c8', 'line': '#2e3a52', 'border': '#74809a', 'soft': '#1d2740', 'accent': '#6fa2ff', 'on-accent': '#0b1a36', 'accent-text': '#6fa2ff', 'accent-bright': '#6fa2ff', 'accent-soft': '#1f3561', 'secondary': '#3ddbb4', 'highlight': '#3ddbb4', 'on-highlight': '#0b2a22', 'highlight-soft': '#143a33', 'story': '#2f2918', 'story-edge': '#ffc44d', 'exam': '#28224a', 'exam-edge': '#b39dff', 'success': '#5fd38d', 'warning': '#ffc95c', 'danger': '#ff8a80', 'focus': '#9aa6ff' } },
    periwinkle: { label: ['Periwinkle', 'Periwinkle'], swatches: ['#4255ff', '#ffcc00'], tints: ['#4255ff', '#ffcc00', '#ff725b', '#18ae79', '#b14dff', '#00a8d6'],
      light: { 'bg': '#f6f7fb', 'surface': '#ffffff', 'raised': '#ffffff', 'ink': '#282d49', 'muted': '#5a6075', 'line': '#e1e3ee', 'border': '#8b90a8', 'soft': '#eef0fb', 'accent': '#4255ff', 'on-accent': '#ffffff', 'accent-text': '#4255ff', 'accent-bright': '#4255ff', 'accent-soft': '#e8ebff', 'secondary': '#8a5f00', 'highlight': '#ffcc00', 'on-highlight': '#282d49', 'highlight-soft': '#fff7d6', 'story': '#fff8eb', 'story-edge': '#d98a00', 'exam': '#e6fafa', 'exam-edge': '#14a3a3', 'success': '#1a7f37', 'warning': '#9a5b00', 'danger': '#c62828', 'focus': '#4255ff' },
      dark: { 'bg': '#161a33', 'surface': '#1e2342', 'raised': '#262c52', 'ink': '#eef0ff', 'muted': '#b3b8d6', 'line': '#343a63', 'border': '#7a80a8', 'soft': '#232849', 'accent': '#8c98ff', 'on-accent': '#121530', 'accent-text': '#8c98ff', 'accent-bright': '#8c98ff', 'accent-soft': '#2c3470', 'secondary': '#ffd84d', 'highlight': '#ffd84d', 'on-highlight': '#282d49', 'highlight-soft': '#3d3518', 'story': '#2e2a1c', 'story-edge': '#ffc14d', 'exam': '#173336', 'exam-edge': '#4fd6d6', 'success': '#5fd38d', 'warning': '#ffc95c', 'danger': '#ff8a80', 'focus': '#9aa6ff' } },
    bubblegum: { label: ['Bubblegum', 'Bubblegum'], swatches: ['#7c4dff', '#ff7eb6'], tints: ['#7c4dff', '#ff7eb6', '#ffb100', '#14bf96', '#4d8dff', '#ff7a59'],
      light: { 'bg': '#faf7ff', 'surface': '#ffffff', 'raised': '#ffffff', 'ink': '#2b2240', 'muted': '#62597a', 'line': '#e9e2f5', 'border': '#9188a8', 'soft': '#f3edff', 'accent': '#6a3df0', 'on-accent': '#ffffff', 'accent-text': '#6a3df0', 'accent-bright': '#7c4dff', 'accent-soft': '#efe8ff', 'secondary': '#b02a68', 'highlight': '#ff7eb6', 'on-highlight': '#2b2240', 'highlight-soft': '#ffe6f1', 'story': '#fff4e8', 'story-edge': '#d97a1e', 'exam': '#e6f6ff', 'exam-edge': '#1f8fd1', 'success': '#1a7f37', 'warning': '#9a5b00', 'danger': '#c62828', 'focus': '#7c4dff' },
      dark: { 'bg': '#1a1530', 'surface': '#231c3e', 'raised': '#2c244d', 'ink': '#f3eeff', 'muted': '#bfb4dc', 'line': '#3a3060', 'border': '#8278a8', 'soft': '#261f44', 'accent': '#a98bff', 'on-accent': '#1a1033', 'accent-text': '#a98bff', 'accent-bright': '#a98bff', 'accent-soft': '#3a2c70', 'secondary': '#ff9cc8', 'highlight': '#ff9cc8', 'on-highlight': '#2b2240', 'highlight-soft': '#45213a', 'story': '#33261c', 'story-edge': '#ffb366', 'exam': '#152f42', 'exam-edge': '#6cc4ff', 'success': '#5fd38d', 'warning': '#ffc95c', 'danger': '#ff8a80', 'focus': '#c2adff' } },
    sunshine: { label: ['Sunshine', 'Sunshine'], swatches: ['#f26430', '#38bdf8'], tints: ['#f26430', '#38bdf8', '#ffc61a', '#2bb673', '#e84d8a', '#8b5cf6'],
      light: { 'bg': '#fffaf3', 'surface': '#ffffff', 'raised': '#ffffff', 'ink': '#2d2620', 'muted': '#6b5f55', 'line': '#f0e5d8', 'border': '#9e9184', 'soft': '#fff1e3', 'accent': '#b23f0c', 'on-accent': '#ffffff', 'accent-text': '#b23f0c', 'accent-bright': '#f26430', 'accent-soft': '#ffeadf', 'secondary': '#0e6a94', 'highlight': '#38bdf8', 'on-highlight': '#0c2a3a', 'highlight-soft': '#e0f5fe', 'story': '#fff7d6', 'story-edge': '#c99400', 'exam': '#e9f9ef', 'exam-edge': '#1f9d55', 'success': '#1a7f37', 'warning': '#9a5b00', 'danger': '#c62828', 'focus': '#1f6fd1' },
      dark: { 'bg': '#1c1714', 'surface': '#26201b', 'raised': '#302822', 'ink': '#fbf3ea', 'muted': '#cdbfb2', 'line': '#40362e', 'border': '#8f8276', 'soft': '#2c241e', 'accent': '#ff9a6e', 'on-accent': '#2d1408', 'accent-text': '#ff9a6e', 'accent-bright': '#ff9a6e', 'accent-soft': '#4a2a1c', 'secondary': '#6dd0ff', 'highlight': '#6dd0ff', 'on-highlight': '#0c2a3a', 'highlight-soft': '#16323f', 'story': '#33301a', 'story-edge': '#ffd24d', 'exam': '#15332a', 'exam-edge': '#5fd38d', 'success': '#5fd38d', 'warning': '#ffc95c', 'danger': '#ff8a80', 'focus': '#8fb7ff' } }
  };
  const appearanceKey = 'sh-appearance';
  const defaultPalette = 'skymint';
  // Palettes before Nov 2026 (green, violet, blue, orange) map to their nearest new palette.
  const legacyPalettes = { green: 'skymint', blue: 'skymint', violet: 'bubblegum', orange: 'sunshine' };
  const knownPalette = id => palettes[id] ? id : (legacyPalettes[id] || defaultPalette);
  let appearance = { theme: 'light', palette: defaultPalette };
  try { const saved = JSON.parse(localStorage.getItem(appearanceKey) || '{}'); if (['light','dark'].includes(saved.theme)) appearance.theme = saved.theme; if (saved.palette) appearance.palette = knownPalette(saved.palette); } catch (_) {}
  function applyAppearance(persist) {
    const values = palettes[appearance.palette][appearance.theme];
    Object.entries(values).forEach(([name, value]) => document.documentElement.style.setProperty('--design-' + name, value));
    palettes[appearance.palette].tints.forEach((value, i) => document.documentElement.style.setProperty('--design-tint-' + (i + 1), value));
    document.documentElement.style.setProperty('--design-scheme', appearance.theme);
    document.documentElement.style.setProperty('--design-shadow', appearance.theme === 'dark' ? '#00000050' : '#21242c1a');
    const dark = appearance.theme === 'dark';
    document.documentElement.style.setProperty('--design-shadow-card', dark ? '0 0 0 1px rgb(255 255 255 / .04), 0 2px 4px rgb(0 0 0 / .35), 0 8px 22px rgb(0 0 0 / .32)' : '0 1px 2px rgb(33 36 44 / .07), 0 4px 14px rgb(33 36 44 / .08)');
    document.documentElement.style.setProperty('--design-shadow-lift', dark ? '0 0 0 1px rgb(255 255 255 / .06), 0 6px 12px rgb(0 0 0 / .4), 0 16px 34px rgb(0 0 0 / .38)' : '0 2px 4px rgb(33 36 44 / .08), 0 12px 28px rgb(33 36 44 / .13)');
    document.documentElement.style.setProperty('--design-shadow-button', dark ? '0 1px 2px rgb(0 0 0 / .4)' : '0 1px 2px rgb(33 36 44 / .12), 0 4px 10px color-mix(in srgb, ' + values.accent + ' 28%, transparent)');
    document.documentElement.dataset.appearanceTheme = appearance.theme;
    document.documentElement.dataset.appearancePalette = appearance.palette;
    document.documentElement.dataset.theme = appearance.theme;
    if (persist) {
      try { localStorage.setItem(appearanceKey, JSON.stringify(appearance)); localStorage.setItem('sh-theme', appearance.theme); } catch (_) {}
      if (window.SHDesign) window.SHDesign.save({ ...window.SHDesign.get(), theme: appearance.theme, accent: values.accent, background: values.bg, text: values.ink, box: values.surface }).catch(() => {});
    }
  }
  applyAppearance(false);
  addEventListener('storage', event => { if (event.key === appearanceKey) { try { const next = JSON.parse(event.newValue); if (next && ['light','dark'].includes(next.theme)) { appearance = { theme: next.theme, palette: knownPalette(next.palette) }; applyAppearance(false); updateDesignPanel(); } } catch (_) {} } });
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
