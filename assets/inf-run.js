/* StudyHub Informatik: a small code editor for every C++ block, plus fill-in trace tables.
   - ```cpp run blocks: editable example with Run, Stop, Reset, full screen; Output and Input beside the code.
   - ```cpp task blocks: starter code with Check (automatic tests), Run, Stop, Reset; Output, Input, Tests.
   - table.trace[data-fill] inside an answer: a blank copy to fill in, with Check and Show answers.
   Code is compiled and run by Compiler Explorer (godbolt.org). To move to our own server later,
   change RUN.endpoint (and RUN.compiler) below, nothing else. Highlighting: CodeMirror 5 (MIT),
   assets/codemirror/. Without it the editor falls back to a plain text box. */
(function () {
  'use strict';
  var RUN = {
    endpoint: 'https://godbolt.org/api/compiler/',
    compiler: 'g142',                       // GCC 14.2
    args: '-std=c++20 -O1 -Wall',
    timeoutMs: 20000
  };
  if (window.STUDYHUB_RUN) for (var k in window.STUDYHUB_RUN) RUN[k] = window.STUDYHUB_RUN[k];

  var SIGNALS = {
    6: 'an assert failed (SIGABRT)', 8: 'integer division by zero (SIGFPE)',
    9: 'killed: an endless loop, or too much memory (SIGKILL)', 11: 'memory you may not touch, or endless recursion (SIGSEGV)'
  };
  var ICONS = {
    run: '<path d="M7 4.5v15l12-7.5z"/>',
    stop: '<rect x="6" y="6" width="12" height="12" rx="1.5"/>',
    check: '<path d="M4 12.5l5 5L20 6.5"/>',
    reset: '<path d="M4 12a8 8 0 1 0 2.4-5.7"/><path d="M4 4v4.5h4.5"/>',
    full: '<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/>',
    exit: '<path d="M9 4v5H4M20 9h-5V4M15 20v-5h5M4 15h5v5"/>'
  };

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function svg(name) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + ICONS[name] + '</svg>'; }
  function lines(arr) { return (arr || []).map(function (x) { return x.text; }).join('\n'); }
  function norm(s) { return String(s).replace(/\r/g, '').split('\n').map(function (l) { return l.replace(/\s+$/, ''); }).join('\n').replace(/\n+$/, ''); }

  function compileRun(source, stdin, signal) {
    var ctrl = window.AbortController ? new AbortController() : null;
    var timer = ctrl ? setTimeout(function () { ctrl.abort(); }, RUN.timeoutMs) : null;
    if (ctrl && signal) signal.addEventListener('abort', function () { ctrl.abort(); });
    return fetch(RUN.endpoint + RUN.compiler + '/compile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      signal: ctrl ? ctrl.signal : undefined,
      body: JSON.stringify({
        source: source,
        options: {
          userArguments: RUN.args,
          executeParameters: { args: [], stdin: stdin || '' },
          compilerOptions: { executorRequest: true },
          filters: { execute: true },
          tools: [], libraries: []
        },
        lang: 'c++', allowStoreCodeDebug: false
      })
    }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    }).then(function (j) {
      if (timer) clearTimeout(timer);
      // executorRequest answers with the execution result; older answers nest it in execResult
      var x = j.execResult || j;
      var build = x.buildResult || j;
      var built = build.code === 0 || build.code === undefined && x.didExecute;
      return {
        built: built && x.didExecute !== false,
        buildErr: lines(build.stderr) || lines(j.stderr),
        stdout: lines(x.stdout),
        stderr: lines(x.stderr),
        code: x.code,
        timedOut: !!x.timedOut
      };
    }, function (e) {
      if (timer) clearTimeout(timer);
      throw e;
    });
  }

  function exitText(r) {
    if (r.timedOut) return 'Stopped: the program ran too long (an endless loop?).';
    if (r.code === 0 || r.code == null) return '';
    var c = r.code, sig = c > 128 ? c - 128 : (c < 0 ? -c : 0);
    return 'Exit code ' + c + (SIGNALS[sig] ? ': ' + SIGNALS[sig] + '.' : '.');
  }

  var noteShown = false;
  function note(box) {
    if (noteShown) return;
    noteShown = true;
    box.appendChild(el('p', 'ide-note', 'Code runs on Compiler Explorer (godbolt.org), a free public service. Don’t type personal data into it.'));
  }

  function compileError(box, r) {
    box.appendChild(el('p', 'bad', 'The compiler (the gatekeeper) refused it. Read the first message only, at the line it names:'));
    box.appendChild(el('pre', 'err', r.buildErr.split('\n').slice(0, 14).join('\n')));
  }

  function showRun(box, r) {
    box.innerHTML = '';
    if (!r.built) { compileError(box, r); return; }
    box.appendChild(el('pre', null, r.stdout === '' ? '(no output)' : r.stdout));
    if (r.stderr) box.appendChild(el('pre', 'err', r.stderr.split('\n').slice(0, 8).join('\n')));
    var ex = exitText(r);
    box.appendChild(el('p', ex ? 'bad' : 'hint', ex || 'Program finished (exit code 0).'));
    if (r.buildErr && /warning/.test(r.buildErr)) {
      var d = el('details'); d.appendChild(el('summary', null, 'Compiler warnings'));
      d.appendChild(el('pre', 'warnc', r.buildErr.split('\n').slice(0, 14).join('\n'))); box.appendChild(d);
    }
  }

  function failMsg(box, e) {
    box.innerHTML = '';
    if (e && e.name === 'AbortError') { box.appendChild(el('p', 'hint', 'Stopped.')); return; }
    box.appendChild(el('p', 'bad', 'Could not reach the compiler service (' + (e && e.message || 'network') + '). Check your connection and try again, or paste the code into Code Expert.'));
  }

  // ---------- the code area: CodeMirror when it is there, a plain text box otherwise ----------
  var EDITORS = [];
  function makeCode(host, code, onRun) {
    var api = { value: code, cm: null, ta: null };
    var wait = el('pre', 'ide-wait', code);
    host.appendChild(wait);
    function build() {
      if (api.cm || api.ta) return;
      host.removeChild(wait);
      if (window.CodeMirror) {
        api.cm = window.CodeMirror(host, {
          value: api.value, mode: 'text/x-c++src', lineNumbers: true, indentUnit: 2, tabSize: 2,
          matchBrackets: true, autoCloseBrackets: true, viewportMargin: Infinity, lineWrapping: false,
          extraKeys: {
            Tab: function (cm) { if (cm.somethingSelected()) cm.indentSelection('add'); else cm.replaceSelection('  ', 'end'); },
            'Shift-Tab': function (cm) { cm.indentSelection('subtract'); },
            'Ctrl-Enter': onRun, 'Cmd-Enter': onRun,
            Esc: function (cm) { cm.getInputField().blur(); }
          }
        });
        api.cm.getWrapperElement().setAttribute('aria-label', 'C++ code, editable');
      } else {
        var ta = api.ta = el('textarea', 'ide-plain'); ta.value = api.value; ta.spellcheck = false;
        ta.setAttribute('aria-label', 'C++ code, editable');
        ta.style.cssText = 'width:100%;box-sizing:border-box;min-height:8rem;background:#1e1f22;color:#d4d4d4;border:0;padding:.6rem .8rem;font:.84rem/1.55 ui-monospace,Menlo,Consolas,monospace;resize:vertical';
        ta.rows = Math.min(30, code.split('\n').length + 1);
        host.appendChild(ta);
      }
    }
    api.build = build;
    api.get = function () { return api.cm ? api.cm.getValue() : api.ta ? api.ta.value : api.value; };
    api.set = function (v) { api.value = v; if (api.cm) api.cm.setValue(v); else if (api.ta) api.ta.value = v; else wait.textContent = v; };
    api.refresh = function () { if (api.cm) api.cm.refresh(); };
    api.host = host;
    EDITORS.push(api);
    return api;
  }
  // Build editors when they come near the screen (a page has up to ~15 of them).
  var io = window.IntersectionObserver ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { io.unobserve(e.target); e.target.__ide && e.target.__ide.build(); } });
  }, { rootMargin: '600px 0px' }) : null;
  function watch(api) { api.host.__ide = api; if (io) io.observe(api.host); else api.build(); }
  document.addEventListener('toggle', function () { EDITORS.forEach(function (a) { a.refresh(); }); }, true);

  // ---------- the editor frame shared by run and task blocks ----------
  function frame(pre, opts) {
    var original = pre.querySelector('code').textContent;
    var wrap = el('div', 'ide' + (opts.task ? ' ide-task' : ''));
    pre.parentNode.insertBefore(wrap, pre);

    var top = el('div', 'ide-top'); top.setAttribute('role', 'toolbar'); top.setAttribute('aria-label', 'Code tools');
    top.appendChild(el('span', 'ide-name', opts.task ? 'Your code · C++' : 'Example · C++ (you can change it)'));
    function iconBtn(name, cls, label, text) {
      var b = el('button', 'ide-ico ' + cls); b.type = 'button'; b.title = label; b.setAttribute('aria-label', label);
      b.innerHTML = svg(name) + (text ? '<span class="lbl">' + text + '</span>' : '');
      top.appendChild(b); return b;
    }
    var check = opts.task ? iconBtn('check', 'check primary', 'Check: run the tests', 'Check (' + opts.tests.length + ')') : null;
    var run = iconBtn('run', 'run', 'Run (Ctrl+Enter)', 'Run');
    var stop = iconBtn('stop', 'stop', 'Stop'); stop.disabled = true;
    var reset = iconBtn('reset', 'reset', 'Reset to the original code');
    var full = iconBtn('full', 'fullbtn', 'Full screen');
    wrap.appendChild(top);

    var body = el('div', 'ide-body'); wrap.appendChild(body);
    var codeHost = el('div', 'ide-code'); body.appendChild(codeHost);
    var side = el('div', 'ide-side'); body.appendChild(side);
    var tabs = el('div', 'ide-tabs'); tabs.setAttribute('role', 'tablist'); side.appendChild(tabs);
    var panels = {};
    function tab(id, label) {
      var t = el('button', 'ide-tab', label); t.type = 'button'; t.setAttribute('role', 'tab');
      var p = el('div', 'ide-panel'); p.setAttribute('role', 'tabpanel'); p.hidden = true;
      t.addEventListener('click', function () { show(id); });
      tabs.appendChild(t); side.appendChild(p); panels[id] = { t: t, p: p };
      return p;
    }
    function show(id) { for (var k in panels) { var on = k === id; panels[k].t.setAttribute('aria-selected', on ? 'true' : 'false'); panels[k].p.hidden = !on; } }
    var out = tab('out', 'Output');
    out.appendChild(el('p', 'hint', opts.task ? 'Press Check to run the tests, or Run to try your own input.' : 'Press ▷ Run to see the output here.'));
    var inP = tab('in', 'Input');
    var inLab = el('label', null, 'What the program reads (std::cin):'); var inBox = el('textarea'); inBox.spellcheck = false;
    inBox.value = opts.stdin; inLab.appendChild(inBox); inP.appendChild(inLab);
    var testsP = opts.task ? tab('tests', 'Tests') : null;
    if (testsP) {
      var ul = el('ul', 'ide-tests');
      opts.tests.forEach(function (t, i) {
        var li = el('li'); li.appendChild(el('span', null, 'Test ' + (i + 1) + (t.name ? ' (' + t.name + ')' : '')));
        var g = el('div', 'io'); g.appendChild(el('span', null, 'input')); g.appendChild(el('pre', null, t['in'] || '(none)'));
        g.appendChild(el('span', null, 'expected')); g.appendChild(el('pre', null, t.out)); li.appendChild(g); ul.appendChild(li);
      });
      testsP.appendChild(el('p', 'hint', 'These are the tests Check runs.')); testsP.appendChild(ul);
    }
    show('out');

    // print version: the code, plus the input and output written out
    pre.classList.add('ide-print'); wrap.appendChild(pre);
    var pio = el('div', 'ide-print-io');
    if (opts.task && opts.tests.length) {
      var tb = el('table'); var hr = el('tr'); ['Test', 'Input', 'Expected output'].forEach(function (h) { hr.appendChild(el('th', null, h)); }); tb.appendChild(hr);
      opts.tests.forEach(function (t, i) { var tr = el('tr'); tr.appendChild(el('td', null, String(i + 1))); tr.appendChild(el('td', null, t['in'])); tr.appendChild(el('td', null, t.out)); tb.appendChild(tr); });
      pio.appendChild(el('p', null, 'Tests:')); pio.appendChild(tb); wrap.appendChild(pio);
    } else if (opts.stdin) {
      pio.appendChild(el('p', null, 'Input: ' + opts.stdin.replace(/\n/g, ' ⏎ '))); wrap.appendChild(pio);
    }

    var running = null;
    function busy(on) {
      run.disabled = on; if (check) check.disabled = on; stop.disabled = !on;
    }
    function doRun() {
      if (running) return;
      show('out'); out.innerHTML = ''; out.appendChild(el('p', 'hint', 'Compiling and running…'));
      running = window.AbortController ? new AbortController() : { abort: function () {}, signal: null };
      busy(true);
      compileRun(ed.get(), inBox.value, running.signal).then(function (r) { showRun(out, r); note(out); }, function (e) { failMsg(out, e); })
        .then(function () { running = null; busy(false); });
    }
    var ed = makeCode(codeHost, original, doRun);
    watch(ed);
    run.addEventListener('click', doRun);
    stop.addEventListener('click', function () { if (running) running.abort(); });
    var armed = 0;
    reset.addEventListener('click', function () {
      if (ed.get() !== original && Date.now() - armed > 4000) {
        armed = Date.now(); show('out'); out.innerHTML = '';
        out.appendChild(el('p', 'warnc', 'Press ↺ again to throw away your changes and get the original code back.'));
        return;
      }
      armed = 0; ed.set(original); inBox.value = opts.stdin; out.innerHTML = ''; out.appendChild(el('p', 'hint', 'Back to the original code.')); show('out');
    });

    // full screen (CSS, so it also works on phones); side by side when there is room
    function layout() { wrap.classList.toggle('wide', wrap.classList.contains('full') ? innerWidth > 760 : wrap.clientWidth >= 880); ed.refresh(); }
    function setFull(on) {
      wrap.classList.toggle('full', on); document.documentElement.classList.toggle('ide-lock', on);
      full.innerHTML = svg(on ? 'exit' : 'full'); full.title = on ? 'Leave full screen (Esc)' : 'Full screen'; full.setAttribute('aria-label', full.title);
      ed.build(); layout(); if (ed.cm) ed.cm.focus();
    }
    full.addEventListener('click', function () { setFull(!wrap.classList.contains('full')); });
    wrap.addEventListener('keydown', function (e) { if (e.key === 'Escape' && wrap.classList.contains('full')) setFull(false); });
    addEventListener('resize', layout);
    setTimeout(layout, 0);

    if (opts.task) {
      check.addEventListener('click', function () {
        if (running) return;
        show('tests'); testsP.innerHTML = '';
        var sum = el('p', 'ide-sum hint', 'Running ' + opts.tests.length + ' tests…'); testsP.appendChild(sum);
        var list = el('ul', 'ide-tests'); testsP.appendChild(list);
        running = window.AbortController ? new AbortController() : { abort: function () {}, signal: null };
        busy(true);
        var src = ed.get(), passed = 0, i = 0;
        function done(text, good) {
          sum.className = 'ide-sum ' + (good ? 'ok' : 'bad'); sum.textContent = text;
          var dot = el('span', 'dot'); dot.style.background = good ? '#3fb950' : '#f85149';
          var old = panels.tests.t.querySelector('.dot'); if (old) old.remove(); panels.tests.t.appendChild(dot);
          note(testsP); running = null; busy(false);
        }
        function next() {
          if (i >= opts.tests.length) {
            return done(passed === opts.tests.length ? 'All ' + passed + ' tests passed. Now check that you can say why each line is right.'
              : passed + ' of ' + opts.tests.length + ' tests passed. Take the smallest failing input and trace it by hand.', passed === opts.tests.length);
          }
          var t = opts.tests[i], li = el('li', null, 'Test ' + (i + 1) + ': running…'); list.appendChild(li);
          compileRun(src, t['in'], running.signal).then(function (r) {
            if (!r.built) { list.remove(); sum.remove(); compileError(testsP, r); running = null; busy(false); return; }
            var ok = r.code === 0 && norm(r.stdout) === norm(t.out);
            if (ok) passed++;
            li.className = ok ? 'ok' : 'bad'; li.textContent = '';
            li.appendChild(el('span', ok ? 'ok' : 'bad', (ok ? '✓ ' : '✗ ') + 'Test ' + (i + 1) + (t.name ? ' (' + t.name + ')' : '')));
            var g = el('div', 'io'); g.appendChild(el('span', null, 'input')); g.appendChild(el('pre', null, t['in'] || '(none)'));
            if (!ok) {
              g.appendChild(el('span', null, 'expected')); g.appendChild(el('pre', null, t.out));
              g.appendChild(el('span', null, 'yours')); g.appendChild(el('pre', null, r.stdout === '' ? '(no output)' : r.stdout));
              var ex = exitText(r); if (ex) { g.appendChild(el('span')); g.appendChild(el('p', 'bad', ex)); }
            }
            li.appendChild(g);
            i++; next();
          }, function (e) { failMsg(testsP, e); running = null; busy(false); });
        }
        next();
      });
    }
    return wrap;
  }

  function setupRunBlock(pre) { frame(pre, { task: false, stdin: (pre.getAttribute('data-stdin') || '').replace(/\\n/g, '\n'), tests: [] }); }
  function setupTask(pre) {
    var tests = [];
    try { tests = JSON.parse(pre.getAttribute('data-tests') || '[]'); } catch (e) { tests = []; }
    frame(pre, { task: true, stdin: tests.length ? tests[0]['in'] : '', tests: tests });
  }

  // ---------- fill-in trace tables ----------
  function cellText(td) { return td.textContent.replace(/\s+/g, ' ').trim(); }
  function same(a, b) {
    function k(s) { return s.toLowerCase().replace(/[−–]/g, '-').replace(/["'“”‘’`]/g, '').replace(/\s+/g, '').replace(/^\((.*)\)$/, '$1'); }
    return k(a) === k(b);
  }
  function setupFill(table) {
    var given = +table.getAttribute('data-fill') || 0;
    var det = table.closest('details'); if (!det) return;
    var anchor = det;
    var box = el('div', 'fill-wrap');
    box.appendChild(el('p', null, 'Fill in the table yourself, then press Check. Leave a cell empty where the answer has nothing.'));
    var tw = el('div', 'table-wrap'); var t = table.cloneNode(true); t.classList.add('fill'); t.removeAttribute('id');
    var cells = [];
    Array.prototype.forEach.call(t.querySelectorAll('tbody tr, tr'), function (tr) {
      if (tr.querySelector('th') && !tr.querySelector('td')) return;
      Array.prototype.forEach.call(tr.children, function (td, j) {
        if (td.tagName !== 'TD' || j < given || td.classList.contains('note')) return;
        var ans = cellText(td); td.textContent = '';
        var inp = el('input'); inp.type = 'text'; inp.autocomplete = 'off'; inp.spellcheck = false; inp.setAttribute('autocapitalize', 'off');
        var head = t.querySelectorAll('th')[j]; inp.setAttribute('aria-label', (head ? head.textContent + ', ' : '') + 'row ' + (tr.rowIndex));
        td.appendChild(inp); cells.push({ td: td, inp: inp, ans: ans });
      });
    });
    if (!cells.length) return;
    tw.appendChild(t); box.appendChild(tw);
    var bar = el('div', 'fill-bar'); var chk = el('button', 'primary', 'Check'); chk.type = 'button';
    var showA = el('button', null, 'Show answers'); showA.type = 'button'; var clr = el('button', null, 'Clear'); clr.type = 'button';
    var msg = el('span', 'fill-msg'); msg.setAttribute('role', 'status');
    bar.appendChild(chk); bar.appendChild(showA); bar.appendChild(clr); bar.appendChild(msg); box.appendChild(bar);
    chk.addEventListener('click', function () {
      var right = 0;
      cells.forEach(function (c) { var ok = same(c.inp.value, c.ans); if (ok) right++; c.td.classList.toggle('ok', ok); c.td.classList.toggle('bad', !ok); });
      msg.textContent = right === cells.length ? 'All ' + right + ' cells right.' : right + ' of ' + cells.length + ' cells right. Red cells: trace that step again, one line at a time.';
    });
    showA.addEventListener('click', function () { cells.forEach(function (c) { c.inp.value = c.ans; c.td.classList.remove('bad'); c.td.classList.add('ok'); }); msg.textContent = 'Answers filled in. Compare them with yours above.'; });
    clr.addEventListener('click', function () { cells.forEach(function (c) { c.inp.value = ''; c.td.classList.remove('ok', 'bad'); }); msg.textContent = ''; });
    anchor.parentNode.insertBefore(box, anchor);
  }

  function init() {
    Array.prototype.forEach.call(document.querySelectorAll('pre.code[data-run]'), setupRunBlock);
    Array.prototype.forEach.call(document.querySelectorAll('pre.code[data-tests]'), setupTask);
    Array.prototype.forEach.call(document.querySelectorAll('table.trace[data-fill]'), setupFill);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
