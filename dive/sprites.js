// Exam Dive: pixel sprites. Each creature is a maths/physics glyph drawn as a small bitmap
// and rendered once to an offscreen canvas. '.' = transparent, other characters = palette.

const BITMAPS = {
  diver: {
    rows: [
      '..yyyyy..',
      '.yyyyyyy.',
      'yyywwwyyy',
      'yywcccwyy',
      'yywcgcwyy',
      '.yywwwyy.',
      '..sssss..',
      '.sssssss.',
      'ss.sss.ss',
      'h..sss..h',
      '..ss.ss..',
      '..dd.dd..',
    ],
    pal: { y: '#d9a441', w: '#f2e3b3', c: '#22304a', g: '#7fd3ff', s: '#f08a4b', h: '#f2e3b3', d: '#3a2f2f' },
  },
  boat: {
    rows: [
      '..........f.........',
      '..........ff........',
      '..........fff.......',
      '..........f.........',
      '....ccccccc.........',
      '....cwcwcwc.........',
      'hhhhhhhhhhhhhhhhhhhh',
      '.hhhhhhhhhhhhhhhhhh.',
      '..rrrrrrrrrrrrrrrr..',
    ],
    pal: { f: '#ffcf56', c: '#8fb3c9', w: '#22304a', h: '#f4f1e8', r: '#d64545' },
  },
  bubble: { // ∅
    rows: ['..ooo..', '.o...oo', 'o...o.o', 'o..o..o', 'o.o...o', 'oo...o.', '..ooo..'],
    pal: { o: '#bfefff' },
  },
  fish: { // ε
    rows: ['..eee', '.e...', 'ke.e.', '.e...', '..eee'],
    pal: { e: '#ffe08a', k: '#ffe08a' },
  },
  seahorse: { // δ
    rows: ['.dddd', '.d...', '..d..', '.ddd.', 'd.k.d', 'd...d', '.ddd.', '...d.', '..d..'],
    pal: { d: '#ff9f6b', k: '#2b1d1d' },
  },
  eel: { // ∫
    rows: ['...ii', '..i.k', '..i..', '..i..', '..i..', '..i..', '..i..', '..i..', 'ii...'],
    pal: { i: '#7dd87d', k: '#e9ffe9' },
  },
  jelly: { // Σ
    rows: ['sssssss', '.s.....', '..s....', '...s...', '..s....', '.s.....', 'sssssss'],
    pal: { s: '#ff8fd0' },
  },
  jellySquash: {
    rows: ['sssssss', '.s.....', '..ss...', '.s.....', 'sssssss'],
    pal: { s: '#ff8fd0' },
  },
  crab: { // π
    rows: ['c..e.e..c', 'cc.....cc', '.ppppppp.', '..p...p..', '..p...p..', '.pp...pp.'],
    pal: { c: '#ffa07a', e: '#ffffff', p: '#ff6b5a' },
  },
  manta: { // ∇
    rows: [
      'mmmmmmmmmmmmm',
      '.mm.......mm.',
      '..mm.....mm..',
      '...mm...mm...',
      '....mm.mm....',
      '.....mmm.....',
      '......m......',
    ],
    pal: { m: '#9fb7ff' },
  },
  mantaUp: {
    rows: [
      'm...........m',
      '.mmmmmmmmmmm.',
      '..mm.....mm..',
      '...mm...mm...',
      '....mm.mm....',
      '.....mmm.....',
      '......m......',
    ],
    pal: { m: '#9fb7ff' },
  },
  snake: { // ∞
    rows: ['.nn...nn.', 'n..n.n..n', 'n...n...n', 'n..n.n..n', '.nn...nn.'],
    pal: { n: '#c9a0ff' },
  },
  angler: { // Ω
    rows: [
      '...OOOOO...',
      '..ObbbbbO..',
      '.ObbebbbbO.',
      '.ObbbbbbbO.',
      '.ObbbbbbbO.',
      '..ObtbtbO..',
      '...Ob.bO...',
      '.OOOb.bOOO.',
    ],
    pal: { O: '#8a9bd1', b: '#2d3756', e: '#fff6c2', t: '#e6e6e6' },
  },
  squid: { // ∂
    rows: ['.ppp.', 'p...p', '....p', '.pppp', 'p.k.p', 'p...p', '.ppp.'],
    pal: { p: '#ff7aa8', k: '#ffffff' },
  },
  cloud: {
    rows: [
      '.....wwww.......',
      '...wwwwwwww.....',
      '..wwwwwwwwwwww..',
      'wwwwwwwwwwwwwwww',
      '.ssssssssssssss.',
    ],
    pal: { w: '#ffffff', s: '#efe3f7' },
  },
  cloudSmall: {
    rows: ['...www....', '.wwwwwww..', 'wwwwwwwwww', '.ssssssss.'],
    pal: { w: '#ffffff', s: '#efe3f7' },
  },
};

function makeCanvas(w, h) {
  if (typeof OffscreenCanvas !== 'undefined') return new OffscreenCanvas(w, h);
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}

function render({ rows, pal }, flip = false) {
  const h = rows.length, w = rows[0].length;
  const c = makeCanvas(w, h);
  const g = c.getContext('2d');
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const ch = rows[y][flip ? w - 1 - x : x];
      if (ch === '.' || !pal[ch]) continue;
      g.fillStyle = pal[ch];
      g.fillRect(x, y, 1, 1);
    }
  }
  return c;
}

const BAYER4 = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];

/** Dithered round glow (alpha falls off with radius). */
function renderGlow(r, color) {
  const size = r * 2 + 1;
  const c = makeCanvas(size, size);
  const g = c.getContext('2d');
  g.fillStyle = color;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const d = Math.hypot(x - r, y - r) / r;
      if (d > 1) continue;
      const density = (1 - d) * (1 - d) * 16;
      if (density > BAYER4[(y % 4) * 4 + (x % 4)]) g.fillRect(x, y, 1, 1);
    }
  }
  return c;
}

let cache = null;

/** All sprites, built once on first use (needs a canvas implementation). */
export function sprites() {
  if (cache) return cache;
  cache = {};
  for (const [name, bm] of Object.entries(BITMAPS)) {
    cache[name] = render(bm);
    cache[name + 'L'] = render(bm, true);
  }
  cache.glowLure = renderGlow(6, '#fff2a8');
  cache.glowLureBig = renderGlow(9, '#fff2a8');
  cache.glowCyan = renderGlow(4, '#7ff6ff');
  cache.glowPink = renderGlow(5, '#ff9ad5');
  cache.sun = (() => {
    const r = 10, size = 2 * r + 1, c = makeCanvas(size, size), g = c.getContext('2d');
    for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
      const d = Math.hypot(x - r, y - r);
      if (d <= r - 1.5) { g.fillStyle = '#fff4c4'; g.fillRect(x, y, 1, 1); }
      else if (d <= r) { g.fillStyle = '#ffd98a'; g.fillRect(x, y, 1, 1); }
    }
    return c;
  })();
  return cache;
}

export { BAYER4 };
