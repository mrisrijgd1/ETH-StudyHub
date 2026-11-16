// Exam Dive: MathJax 3.2.2 (tex-svg-full) loaded at runtime. If it cannot be loaded
// (offline, blocked CDN) the TeX source stays visible as plain text.
import { MATHJAX_URL } from './config.js';

let loading = null;

export function loadMathJax(timeoutMs = 15000) {
  if (loading) return loading;
  loading = new Promise((resolve) => {
    if (window.MathJax && window.MathJax.typesetPromise) { resolve(true); return; }
    window.MathJax = {
      tex: { inlineMath: [['$', '$'], ['\\(', '\\)']], displayMath: [['$$', '$$'], ['\\[', '\\]']] },
      svg: { fontCache: 'global' },
      options: { enableMenu: false },
      startup: {
        ready() {
          window.MathJax.startup.defaultReady();
          window.MathJax.startup.promise.then(() => resolve(true), () => resolve(false));
        },
      },
    };
    const s = document.createElement('script');
    s.src = MATHJAX_URL;
    s.async = true;
    s.onerror = () => resolve(false);
    document.head.appendChild(s);
    setTimeout(() => resolve(false), timeoutMs);
  });
  return loading;
}

export const mathReady = () => !!(window.MathJax && window.MathJax.typesetPromise);

/** Typeset the TeX inside `el` (no-op without MathJax). */
export async function typeset(el) {
  const ok = await loadMathJax();
  if (!ok || !el || !el.isConnected) return false;
  try {
    await window.MathJax.typesetPromise([el]);
    return true;
  } catch {
    return false;
  }
}

/** Forget typeset math before replacing content (keeps MathJax's internal list small). */
export function clearMath(el) {
  try { if (mathReady() && window.MathJax.typesetClear) window.MathJax.typesetClear([el]); } catch { /* ignore */ }
}

/**
 * Put question text into `el` without innerHTML: blank lines become paragraphs, single
 * newlines line breaks (outside $$ ... $$). MathJax later reads the text nodes.
 */
export function setRichText(el, text, tag = 'p') {
  el.textContent = '';
  const paras = String(text || '').split(/\n\s*\n/);
  for (const para of paras) {
    const p = document.createElement(tag);
    const parts = para.split(/(\$\$[\s\S]*?\$\$)/);
    for (const part of parts) {
      if (part.startsWith('$$')) { p.appendChild(document.createTextNode(part)); continue; }
      const lines = part.split('\n');
      lines.forEach((ln, i) => {
        if (i > 0) p.appendChild(document.createElement('br'));
        p.appendChild(document.createTextNode(ln));
      });
    }
    el.appendChild(p);
  }
  return el;
}
