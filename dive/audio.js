// Exam Dive: 8-bit blips with Web Audio. Muted by default; the choice is remembered by main.js.
let ctx = null;
let muted = true;

function ac() {
  if (muted) return null;
  try {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  } catch {
    return null;
  }
}

function tone(freq, dur, { type = 'square', vol = 0.04, at = 0, slide = 0 } = {}) {
  const a = ac();
  if (!a) return;
  const t0 = a.currentTime + at;
  const o = a.createOscillator();
  const g = a.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t0);
  if (slide) o.frequency.linearRampToValueAtTime(freq + slide, t0 + dur);
  g.gain.setValueAtTime(vol, t0);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(g).connect(a.destination);
  o.start(t0);
  o.stop(t0 + dur + 0.02);
}

export function setMuted(m) {
  muted = !!m;
  if (!muted) ac(); // unlock inside the click handler
}
export const isMuted = () => muted;

export const sfx = {
  click() { tone(660, 0.05, { vol: 0.025 }); },
  start() { [392, 523, 659].forEach((f, i) => tone(f, 0.09, { at: i * 0.08 })); },
  correct() { [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.08, { at: i * 0.06 })); },
  wrong() { tone(220, 0.35, { type: 'sawtooth', slide: -120, vol: 0.035 }); tone(110, 0.4, { at: 0.12, vol: 0.03 }); },
  tick() { tone(1200, 0.03, { vol: 0.02, type: 'triangle' }); },
  zone() { [330, 494, 659, 988].forEach((f, i) => tone(f, 0.12, { at: i * 0.1, type: 'triangle', vol: 0.05 })); },
  perfect() { [523, 659, 784, 1047, 1319, 1568].forEach((f, i) => tone(f, 0.12, { at: i * 0.09 })); },
};
