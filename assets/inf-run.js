/* StudyHub Informatik: editable, runnable C++ blocks with automatic tests.
   Code is compiled and run by Compiler Explorer (godbolt.org). To move to our own
   server later, change RUN.endpoint (and RUN.compiler) below, nothing else. */
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

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function lines(arr) { return (arr || []).map(function (x) { return x.text; }).join('\n'); }
  function norm(s) { return String(s).replace(/\r/g, '').split('\n').map(function (l) { return l.replace(/\s+$/, ''); }).join('\n').replace(/\n+$/, ''); }

  function compileRun(source, stdin) {
    var ctrl = window.AbortController ? new AbortController() : null;
    var timer = ctrl ? setTimeout(function () { ctrl.abort(); }, RUN.timeoutMs) : null;
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

  function showResult(box, r) {
    box.innerHTML = '';
    if (!r.built) {
      box.appendChild(el('p', 'run-bad', 'The compiler (the gatekeeper) refused it. Read the first message only, at the line it names:'));
      box.appendChild(el('pre', 'run-err', r.buildErr.split('\n').slice(0, 14).join('\n')));
      return;
    }
    var out = el('pre', 'out');
    out.textContent = r.stdout === '' ? '(no output)' : r.stdout;
    box.appendChild(out);
    var ex = exitText(r);
    if (r.stderr) box.appendChild(el('pre', 'run-err', r.stderr.split('\n').slice(0, 8).join('\n')));
    if (ex) box.appendChild(el('p', 'run-bad', ex));
    if (r.buildErr && /warning/.test(r.buildErr)) {
      var d = el('details', 'run-warn'); d.appendChild(el('summary', null, 'Compiler warnings'));
      d.appendChild(el('pre', 'run-err', r.buildErr.split('\n').slice(0, 14).join('\n'))); box.appendChild(d);
    }
  }

  function failMsg(box, e) {
    box.innerHTML = '';
    box.appendChild(el('p', 'run-bad', 'Could not reach the compiler service (' + (e && e.message || 'network') + '). Check your connection and try again, or paste the code into Code Expert.'));
  }

  var FITS = [];
  document.addEventListener('toggle', function () { FITS.forEach(function (f) { f(); }); }, true);

  var noteShown = false;
  function note(container) {
    if (noteShown) return;
    noteShown = true;
    container.appendChild(el('p', 'small run-note', 'Code runs on Compiler Explorer (godbolt.org), a free public service. Don’t type personal data into it.'));
  }

  function makeEditor(code) {
    var ta = el('textarea', 'ide-edit');
    ta.value = code;
    ta.spellcheck = false;
    ta.setAttribute('autocapitalize', 'off');
    ta.setAttribute('autocomplete', 'off');
    ta.setAttribute('aria-label', 'C++ code, editable');
    function fit() { ta.style.height = 'auto'; ta.style.height = (ta.scrollHeight + 4) + 'px'; }
    ta.addEventListener('input', fit);
    ta.addEventListener('keydown', function (ev) {
      if (ev.key === 'Tab' && !ev.shiftKey) {
        ev.preventDefault();
        var s = ta.selectionStart, e = ta.selectionEnd;
        ta.value = ta.value.slice(0, s) + '  ' + ta.value.slice(e);
        ta.selectionStart = ta.selectionEnd = s + 2;
        fit();
      }
    });
    ta.addEventListener('focus', fit);
    FITS.push(fit);
    setTimeout(fit, 0);
    return { ta: ta, fit: fit };
  }

  function bar() { return el('div', 'ide-bar'); }
  function btn(label, cls) { var b = el('button', 'ide-btn' + (cls ? ' ' + cls : ''), label); b.type = 'button'; return b; }

  // ```cpp run blocks: read-only highlighted code with Run, Edit, Reset
  function setupRunBlock(pre) {
    var original = pre.querySelector('code').textContent;
    var stdin = pre.getAttribute('data-stdin') || '';
    var wrap = el('div', 'ide');
    pre.parentNode.insertBefore(wrap, pre);
    wrap.appendChild(pre);
    var b = bar(), run = btn('▶ Run'), edit = btn('Edit'), reset = btn('Reset', 'ide-quiet');
    reset.hidden = true;
    var inLabel = el('label', 'ide-in'), inBox = el('input');
    inLabel.textContent = 'Input: '; inBox.value = stdin; inBox.spellcheck = false; inLabel.appendChild(inBox);
    if (!stdin) inLabel.hidden = true;
    b.appendChild(run); b.appendChild(edit); b.appendChild(reset); b.appendChild(inLabel);
    wrap.appendChild(b);
    var result = el('div', 'ide-result'); wrap.appendChild(result);
    var ed = null;
    edit.addEventListener('click', function () {
      if (ed) return;
      ed = makeEditor(original);
      pre.hidden = true;
      wrap.insertBefore(ed.ta, pre);
      ed.ta.focus();
      edit.hidden = true; reset.hidden = false; inLabel.hidden = false;
    });
    reset.addEventListener('click', function () { if (ed) { ed.ta.value = original; ed.fit(); } inBox.value = stdin; result.innerHTML = ''; });
    run.addEventListener('click', function () {
      run.disabled = true; result.innerHTML = ''; result.appendChild(el('p', 'small', 'Compiling and running…'));
      compileRun(ed ? ed.ta.value : original, inBox.value.replace(/\\n/g, '\n')).then(function (r) { showResult(result, r); note(result); }, function (e) { failMsg(result, e); })
        .then(function () { run.disabled = false; });
    });
  }

  // ```cpp task blocks: an editable starter with Run and Check (hidden tests)
  function setupTask(pre) {
    var original = pre.querySelector('code').textContent;
    var tests = [];
    try { tests = JSON.parse(pre.getAttribute('data-tests') || '[]'); } catch (e) { tests = []; }
    var wrap = el('div', 'ide ide-task');
    pre.parentNode.insertBefore(wrap, pre);
    pre.remove();
    var ed = makeEditor(original);
    wrap.appendChild(ed.ta);
    var b = bar(), check = btn('✓ Check (' + tests.length + ' tests)', 'ide-main'), run = btn('▶ Run'), reset = btn('Reset', 'ide-quiet');
    var inLabel = el('label', 'ide-in'), inBox = el('input');
    inLabel.textContent = 'Input: '; inBox.value = tests.length ? tests[0]['in'] : ''; inBox.spellcheck = false; inLabel.appendChild(inBox);
    b.appendChild(check); b.appendChild(run); b.appendChild(reset); b.appendChild(inLabel);
    wrap.appendChild(b);
    var result = el('div', 'ide-result'); wrap.appendChild(result);
    reset.addEventListener('click', function () { ed.ta.value = original; ed.fit(); result.innerHTML = ''; });
    run.addEventListener('click', function () {
      run.disabled = true; result.innerHTML = ''; result.appendChild(el('p', 'small', 'Compiling and running…'));
      compileRun(ed.ta.value, inBox.value.replace(/\\n/g, '\n')).then(function (r) { showResult(result, r); note(result); }, function (e) { failMsg(result, e); })
        .then(function () { run.disabled = false; });
    });
    check.addEventListener('click', function () {
      check.disabled = true; result.innerHTML = '';
      var list = el('ol', 'ide-tests'); result.appendChild(list);
      var passed = 0, i = 0, stop = false;
      function next() {
        if (i >= tests.length || stop) {
          var sum = el('p', passed === tests.length ? 'run-good' : 'run-bad',
            passed === tests.length ? 'All ' + tests.length + ' tests passed. Now check that you can say why each line is right.'
              : passed + ' of ' + tests.length + ' tests passed. Take the smallest failing input and trace it by hand.');
          result.appendChild(sum); note(result); check.disabled = false; return;
        }
        var t = tests[i], li = el('li', null, 'Test ' + (i + 1) + ': running…'); list.appendChild(li);
        compileRun(ed.ta.value, t['in']).then(function (r) {
          if (!r.built) { li.remove(); list.remove(); showResult(result, r); stop = true; check.disabled = false; return; }
          var ok = r.code === 0 && norm(r.stdout) === norm(t.out);
          if (ok) passed++;
          li.className = ok ? 'run-good' : 'run-bad';
          li.textContent = (ok ? '✓ ' : '✗ ') + 'Test ' + (i + 1) + (t.name ? ' (' + t.name + ')' : '') + ': input ' + JSON.stringify(t['in']);
          if (!ok) {
            var det = el('div', 'ide-diff');
            det.appendChild(el('span', 'small', 'expected')); det.appendChild(el('pre', 'out', t.out));
            det.appendChild(el('span', 'small', 'your program')); det.appendChild(el('pre', 'out', r.stdout === '' ? '(no output)' : r.stdout));
            var ex = exitText(r); if (ex) det.appendChild(el('p', 'run-bad', ex));
            li.appendChild(det);
          }
          i++; next();
        }, function (e) { failMsg(result, e); stop = true; check.disabled = false; });
      }
      next();
    });
  }

  function init() {
    Array.prototype.forEach.call(document.querySelectorAll('pre.code[data-run]'), setupRunBlock);
    Array.prototype.forEach.call(document.querySelectorAll('pre.code[data-tests]'), setupTask);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
