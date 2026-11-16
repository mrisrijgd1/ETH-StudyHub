// Exam Dive: the low-res pixel sea (canvas ~320x180 logical px, scaled with image-rendering: pixelated).
// World coordinates: y = 0 is the waterline, positive y is down. Each correct answer moves the
// diver STEP_PX world pixels down, so every zone gets screen space in proportion to its answers.
import { ZONES, MAX_DEPTH, FLOOR, FPS, STEP_PX } from './config.js';
import { sprites, BAYER4 } from './sprites.js';
import { drawText, measureText } from './pixelfont.js';
import { seededRng } from './game.js';

/** World y of a depth in metres (piecewise linear per zone). */
export function depthToWorldY(depth, zones = ZONES, stepPx = STEP_PX) {
  let y = 0;
  for (const z of zones) {
    const d = Math.min(Math.max(depth - z.from, 0), z.to - z.from);
    y += (d / z.step) * stepPx;
  }
  return y;
}

const FLOOR_Y = depthToWorldY(MAX_DEPTH);
const BELOW_FLOOR = 90;
const DIVER_OFFSET = 14; // diver hangs this far below the depth line

const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
const lerp = (a, b, t) => a + (b - a) * t;
const wrap = (v, m) => ((v % m) + m) % m;

function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = Math.max(1, w); c.height = Math.max(1, h);
  return c;
}

/** Pixel scale so that the logical canvas is about 320x180 on desktop and taller on phones. */
export function pixelScale(vw, vh) {
  return Math.max(1, Math.min(Math.floor(vw / 160), Math.floor(vh / 180)));
}

export function createSea(canvas, { reducedMotion = false, lang = () => 'de' } = {}) {
  const ctx = canvas.getContext('2d');
  const S = sprites();
  let W = 320, H = 180, scale = 4;
  let bg = null, sky = null;
  let creatures = [];
  let rocks = [];

  const st = {
    mode: 'surface',     // surface | dive | over
    detail: true,        // creatures animate (false during reveal)
    t: 0,                // creature clock (seconds), frozen when !detail
    clock: 0,            // global clock for effects
    camY: 0,
    diverY: 4, from: 4, to: 4, tween: 1, tweenDur: 1, tweenDelay: 0,
    flash: 0, jerk: 0,
    particles: [],
    nextBubble: 0,
  };

  // ---------- static layers ----------

  function seaColorAt(y) {
    let top = 0;
    for (let i = 0; i < ZONES.length; i++) {
      const z = ZONES[i];
      const h = depthToWorldY(z.to) - depthToWorldY(z.from);
      if (y < top + h || i === ZONES.length - 1) {
        const next = ZONES[i + 1] ? ZONES[i + 1].color : FLOOR.color;
        const t = Math.min(1, Math.max(0, (y - top) / h));
        return z.color.map((c, k) => lerp(c, next[k], t));
      }
      top += h;
    }
    return FLOOR.color;
  }

  function ditherRows(g, w, h, colorAt, step = 6) {
    const img = g.createImageData(w, h);
    const d = img.data;
    for (let y = 0; y < h; y++) {
      const c = colorAt(y);
      for (let x = 0; x < w; x++) {
        const th = BAYER4[(y & 3) * 4 + (x & 3)] / 16;
        const i = (y * w + x) * 4;
        for (let k = 0; k < 3; k++) d[i + k] = Math.min(255, Math.floor(c[k] / step + th) * step);
        d[i + 3] = 255;
      }
    }
    g.putImageData(img, 0, 0);
  }

  function buildBackground() {
    const h = Math.ceil(FLOOR_Y + BELOW_FLOOR);
    bg = makeCanvas(W, h);
    const g = bg.getContext('2d');
    ditherRows(g, W, h, seaColorAt);
    const rng = seededRng(42);

    // trench walls in the hadal zone, narrowing towards the floor
    const hadalTop = depthToWorldY(6000);
    g.fillStyle = '#03050c';
    for (let y = Math.floor(hadalTop); y < h; y++) {
      const t = (y - hadalTop) / (FLOOR_Y - hadalTop);
      const wall = Math.floor(Math.min(1, t) * W * 0.22 + 2 + (rng() < 0.3 ? 1 : 0));
      g.fillRect(0, y, wall, 1);
      g.fillRect(W - wall, y, wall, 1);
    }
    // floor
    for (let x = 0; x < W; x++) {
      const bump = Math.round(Math.sin(x * 0.17) * 2 + Math.sin(x * 0.05 + 1) * 3);
      g.fillStyle = '#060912';
      g.fillRect(x, FLOOR_Y + 6 + bump, 1, h);
      g.fillStyle = '#141a2c';
      g.fillRect(x, FLOOR_Y + 6 + bump, 1, 1);
    }

    // rocks for the π crabs (midnight zone)
    rocks = [];
    const midTop = depthToWorldY(1000), midBot = depthToWorldY(4000);
    for (let i = 0; i < 4; i++) {
      const left = i % 2 === 0;
      const rw = 22 + Math.floor(rng() * 16);
      const ry = Math.floor(lerp(midTop + 30, midBot - 20, (i + 0.5) / 4));
      const rx = left ? 0 : W - rw;
      rocks.push({ x: rx, y: ry, w: rw, left });
      for (let yy = 0; yy < 14; yy++) {
        const shrink = Math.floor((yy < 4 ? (4 - yy) * 2 : 0) + rng() * 2);
        g.fillStyle = yy === 0 ? '#2b3550' : '#161c30';
        if (left) g.fillRect(rx, ry + yy, rw - shrink, 1);
        else g.fillRect(rx + shrink, ry + yy, rw - shrink, 1);
      }
    }

    drawMarkers(g);
  }

  function drawMarkers(g) {
    const L = lang();
    const marks = ZONES.slice(1).map(z => ({ depth: z.from, caption: z.caption && z.caption[L] }));
    marks.push({ depth: MAX_DEPTH, caption: FLOOR.caption[L] });
    for (const m of marks) {
      const y = Math.round(depthToWorldY(m.depth));
      g.fillStyle = 'rgba(170, 205, 255, 0.35)';
      for (let x = 0; x < W; x += 3) g.fillRect(x, y, 2, 1);
      const label = `${m.depth} M`;
      g.globalAlpha = 0.75;
      drawText(g, label, 3, y + 3, { color: '#bcd6ff' });
      if (m.caption) {
        const cap = m.caption; // the font maps Latin letters to upper case itself, ε/δ stay Greek
        const wcap = measureText(cap);
        const x = Math.max(measureText(label) + 10, W - wcap - 3);
        if (x + wcap <= W) drawText(g, cap, x, y - 9, { color: '#e3ecff' });
        else drawText(g, cap, 3, y - 9, { color: '#e3ecff' });
      }
      g.globalAlpha = 1;
    }
    // ticks for every answer step
    g.fillStyle = 'rgba(170, 205, 255, 0.25)';
    let d = 0;
    while (d < MAX_DEPTH) {
      const z = ZONES.find(zz => d >= zz.from && d < zz.to);
      d += z.step;
      g.fillRect(W - 4, Math.round(depthToWorldY(d)), 3, 1);
    }
  }

  function buildSky() {
    sky = makeCanvas(W, H);
    const g = sky.getContext('2d');
    const stops = [[178, 190, 255], [255, 205, 226], [255, 233, 199]];
    ditherRows(g, W, H, (y) => {
      const t = y / H;
      return t < 0.6 ? stops[0].map((c, k) => lerp(c, stops[1][k], t / 0.6))
        : stops[1].map((c, k) => lerp(c, stops[2][k], (t - 0.6) / 0.4));
    }, 5);
  }

  function buildCreatures() {
    const rng = seededRng(7);
    creatures = [];
    const counts = { bubble: 5, shoal: 1, seahorse: 2, eel: 2, jelly: 3, crab: 0, manta: 2, snake: 2, angler: 2, squid: 2, plankton: 16 };
    ZONES.forEach((z) => {
      const y0 = depthToWorldY(z.from) + 14, y1 = depthToWorldY(z.to) - 8;
      for (const type of z.creatures) {
        if (type === 'crab') {
          for (const r of rocks) creatures.push({ type, rock: r, p: rng() * 6 });
          continue;
        }
        const n = Math.max(1, Math.round(counts[type] * (y1 - y0) / 120));
        for (let i = 0; i < n; i++) {
          creatures.push({
            type, fx: rng(), y: lerp(y0, y1, rng()), y0, y1,
            v: (rng() < 0.5 ? -1 : 1) * (4 + rng() * 6), p: rng() * 10,
          });
        }
      }
    });
  }

  // ---------- creatures ----------

  function drawCreature(c, camY, t) {
    const sy = (y) => Math.round(y - camY);
    const visible = (y) => y - camY > -30 && y - camY < H + 30;
    switch (c.type) {
      case 'bubble': {
        const span = c.y1 - c.y0;
        const y = c.y1 - wrap(c.y - c.y0 + t * 6, span);
        if (!visible(y)) return;
        const x = c.fx * W + Math.sin(t * 1.3 + c.p) * 2;
        ctx.drawImage(S.bubble, Math.round(x), sy(y));
        return;
      }
      case 'shoal': {
        if (!visible(c.y)) return;
        const dir = c.v > 0 ? 1 : -1;
        const cx = wrap(c.fx * W + t * c.v * 1.5, W + 60) - 30;
        const spr = dir > 0 ? S.fish : S.fishL;
        for (let i = 0; i < 7; i++) {
          const ox = (i % 4) * 8 - 12 + Math.sin(t * 2 + i) * 1.5;
          const oy = Math.floor(i / 4) * 7 + (i % 2) * 3 + Math.sin(t * 3 + i * 1.7);
          ctx.drawImage(spr, Math.round(cx + ox * dir), sy(c.y + oy));
        }
        return;
      }
      case 'seahorse': {
        const y = c.y + Math.sin(t * 1.6 + c.p) * 3;
        if (!visible(y)) return;
        ctx.drawImage(c.v > 0 ? S.seahorse : S.seahorseL, Math.round(c.fx * (W - 10) + 5), sy(y));
        return;
      }
      case 'eel': {
        if (!visible(c.y)) return;
        const span = W + 60;
        const head = wrap(c.fx * W + t * c.v * 2, span) - 30;
        const dir = c.v > 0 ? 1 : -1;
        ctx.fillStyle = '#5fbf6a';
        for (let k = 1; k <= 14; k++) {
          const x = head - dir * k * 2;
          ctx.fillRect(Math.round(x), sy(c.y + 4 + Math.sin(x * 0.12 + c.p) * 4), 1 + (k < 8 ? 1 : 0), 1);
        }
        ctx.drawImage(S.eel, Math.round(head) - 2, sy(c.y + Math.sin(head * 0.12 + c.p) * 4));
        return;
      }
      case 'jelly': {
        const y = c.y - wrap(t * 2 + c.p * 10, 40) + 20;
        if (!visible(y)) return;
        const x = Math.round(c.fx * (W - 12) + 4);
        const squash = Math.sin(t * 2.4 + c.p) > 0.4;
        ctx.drawImage(S.glowPink, x - 2, sy(y) - 2);
        ctx.drawImage(squash ? S.jellySquash : S.jelly, x, sy(y) + (squash ? 1 : 0));
        ctx.fillStyle = '#ff8fd0';
        const len = squash ? 5 : 8;
        for (let k = 0; k < 3; k++) {
          for (let j = 0; j < len; j++) {
            ctx.fillRect(x + 1 + k * 2 + Math.round(Math.sin(t * 3 + j * 0.8 + k) * 0.8), sy(y) + 7 + j, 1, 1);
          }
        }
        return;
      }
      case 'crab': {
        const r = c.rock;
        if (!visible(r.y)) return;
        const x = r.x + 2 + (Math.sin(t * 0.7 + c.p) * 0.5 + 0.5) * Math.max(0, r.w - 13);
        ctx.drawImage(S.crab, Math.round(x), sy(r.y - 6));
        return;
      }
      case 'manta': {
        const span = W + 60;
        const x = wrap(c.fx * W + t * c.v * 1.6, span) - 30;
        const y = c.y + Math.sin(t * 0.4 + c.p) * 10;
        if (!visible(y)) return;
        const up = Math.sin(t * 2 + c.p) > 0.3;
        ctx.drawImage(up ? S.mantaUp : S.manta, Math.round(x), sy(y));
        return;
      }
      case 'snake': {
        const s = t * 0.6 + c.p;
        const a = 34, den = 1 + Math.sin(s) ** 2;
        const cx = c.fx * (W - 80) + 40;
        const x = cx + (a * Math.cos(s)) / den;
        const y = c.y + (a * Math.sin(s) * Math.cos(s)) / den;
        if (!visible(y)) return;
        ctx.drawImage(S.snake, Math.round(x) - 4, sy(y) - 2);
        return;
      }
      case 'angler': {
        const x = c.fx * (W - 30) + 8 + Math.sin(t * 0.25 + c.p) * 12;
        const y = c.y + Math.sin(t * 0.5 + c.p) * 2;
        if (!visible(y)) return;
        const dir = Math.cos(t * 0.25 + c.p) >= 0 ? 1 : -1;
        const spr = dir > 0 ? S.angler : S.anglerL;
        const X = Math.round(x), Y = sy(y);
        ctx.drawImage(spr, X, Y);
        // lure: stalk from the head forward and up, glowing bulb
        const sx = dir > 0 ? X + 6 : X + 4;
        ctx.fillStyle = '#8a9bd1';
        for (let k = 0; k < 6; k++) ctx.fillRect(sx + dir * Math.round(k * 0.8), Y - k, 1, 1);
        const bx = sx + dir * 5, by = Y - 7;
        const pulse = 0.55 + 0.45 * Math.sin(st.clock * 3 + c.p);
        ctx.globalAlpha = pulse;
        ctx.drawImage(S.glowLureBig, bx - 9, by - 9);
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#fffbe0';
        ctx.fillRect(bx, by, 1, 1);
        return;
      }
      case 'squid': {
        const per = 3.2, ph = wrap(t + c.p, per);
        const f = ph < 0.35 ? ease(ph / 0.35) : 1 - (ph - 0.35) / (per - 0.35);
        const y = c.y - f * 16;
        const x = c.fx * (W - 16) + 6 + f * 6 * (c.v > 0 ? 1 : -1);
        if (!visible(y)) return;
        const X = Math.round(x), Y = sy(y);
        ctx.drawImage(S.squid, X, Y);
        ctx.fillStyle = '#ff7aa8';
        const len = ph < 0.35 ? 4 : 7;
        for (let k = 0; k < 3; k++) for (let j = 0; j < len; j++) {
          ctx.fillRect(X + k * 2, Y + 7 + j, 1, 1);
        }
        return;
      }
      case 'plankton': {
        const x = wrap(c.fx * W + Math.sin(t * 0.3 + c.p) * 10 + t * c.v * 0.3, W);
        const y = c.y + Math.cos(t * 0.4 + c.p) * 6;
        if (!visible(y)) return;
        const ang = t * 0.5 + c.p;
        const dx = Math.cos(ang), dy = Math.sin(ang);
        const X = Math.round(x), Y = sy(y);
        ctx.globalAlpha = 0.5 + 0.5 * Math.sin(st.clock * 2 + c.p * 3);
        ctx.drawImage(S.glowCyan, X - 4 + Math.round(dx * 3), Y - 4 + Math.round(dy * 3));
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#9ffcff';
        for (let k = -3; k <= 3; k++) ctx.fillRect(X + Math.round(dx * k), Y + Math.round(dy * k), 1, 1);
        // arrow head
        const hx = X + Math.round(dx * 3), hy = Y + Math.round(dy * 3);
        ctx.fillRect(hx - Math.round(dx + dy), hy - Math.round(dy - dx), 1, 1);
        ctx.fillRect(hx - Math.round(dx - dy), hy - Math.round(dy + dx), 1, 1);
        return;
      }
      default:
    }
  }

  // ---------- frame ----------

  function diverTargetCam() {
    if (st.mode === 'surface') return -Math.round(H * 0.45);
    return Math.round(st.diverY - H * 0.3);
  }

  function update(dt) {
    st.clock += dt;
    if (st.detail && !reducedMotion) st.t += dt;
    if (st.tween < 1) {
      if (st.tweenDelay > 0) st.tweenDelay -= dt;
      else st.tween = Math.min(1, st.tween + dt / st.tweenDur);
      st.diverY = lerp(st.from, st.to, ease(st.tween));
    }
    const target = diverTargetCam();
    st.camY = reducedMotion ? target : st.camY + (target - st.camY) * Math.min(1, dt * 4);
    if (Math.abs(target - st.camY) < 0.3) st.camY = target;
    st.flash = Math.max(0, st.flash - dt);
    st.jerk = Math.max(0, st.jerk - dt);
    for (const p of st.particles) {
      p.life -= dt;
      p.x += p.vx * dt; p.y += p.vy * dt; p.vy -= 10 * dt;
    }
    st.particles = st.particles.filter(p => p.life > 0);
    if (!reducedMotion && st.mode === 'dive' && st.detail && st.clock > st.nextBubble) {
      st.nextBubble = st.clock + 1.2;
      st.particles.push({ x: anchorX() + 1, y: st.diverY - 1, vx: 0, vy: -8, life: 1.6, size: 1 });
    }
  }

  const anchorX = () => Math.floor(W / 2);

  function draw() {
    const camY = Math.round(st.camY);
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, W, H);

    // sky
    if (camY < 0) {
      const skyTop = -H - camY;
      ctx.drawImage(sky, 0, skyTop);
      ctx.drawImage(S.sun, W - 48, skyTop + Math.round(H * 0.25));
      const drift = reducedMotion ? 0 : st.t * 3;
      ctx.drawImage(S.cloud, Math.round(wrap(W * 0.12 + drift, W + 40) - 20), skyTop + Math.round(H * 0.18));
      ctx.drawImage(S.cloudSmall, Math.round(wrap(W * 0.62 + drift * 0.6, W + 40) - 20), skyTop + Math.round(H * 0.36));
      ctx.drawImage(S.cloud, Math.round(wrap(W * 0.85 + drift * 0.8, W + 40) - 20), skyTop + Math.round(H * 0.6));
    }
    // sea
    ctx.drawImage(bg, 0, -camY);

    // light rays in the sunlight zone
    const rayBottom = depthToWorldY(400) - camY;
    if (rayBottom > 0) {
      ctx.globalAlpha = 0.07;
      ctx.fillStyle = '#e9fbff';
      for (let i = 0; i < 4; i++) {
        const x0 = ((i * 97 + st.t * 4) % (W + 60)) - 30;
        ctx.beginPath();
        ctx.moveTo(x0, -camY); ctx.lineTo(x0 + 10, -camY);
        ctx.lineTo(x0 + 34, rayBottom); ctx.lineTo(x0 + 18, rayBottom);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    // creatures
    for (const c of creatures) drawCreature(c, camY, st.t);

    // waterline
    const wy = -camY;
    if (wy > -4 && wy < H + 4) {
      for (let x = 0; x < W; x++) {
        const o = Math.round(Math.sin(x * 0.35 + st.t * 2) * 0.8);
        ctx.fillStyle = '#d6f4ff';
        ctx.fillRect(x, wy + o, 1, 1);
        if ((x + Math.floor(st.t * 4)) % 9 === 0) { ctx.fillStyle = '#ffffff'; ctx.fillRect(x, wy + o - 1, 2, 1); }
      }
      const bob = Math.round(Math.sin(st.t * 1.5));
      ctx.drawImage(S.boat, anchorX() - 14, wy - 7 + bob);
    }

    // line + diver
    const ax = anchorX(), ay = wy - 1;
    const dyS = Math.round(st.diverY - camY);
    const jerkAmp = st.jerk > 0 && !reducedMotion ? 4 * st.jerk : 0;
    ctx.fillStyle = '#e9dcc0';
    for (let y = Math.max(ay, -1); y < dyS && y < H + 1; y++) {
      const s = (y - ay) / Math.max(1, dyS - ay);
      const off = jerkAmp * Math.sin(s * Math.PI) * Math.sin(st.clock * 45);
      ctx.fillRect(ax + Math.round(off), y, 1, 1);
    }
    const sway = reducedMotion ? 0 : Math.round(Math.sin(st.clock * 1.2) * 0.6);
    ctx.drawImage(S.diver, ax - 4 + sway, dyS);

    // particles
    for (const p of st.particles) {
      ctx.fillStyle = p.color || '#cfefff';
      ctx.globalAlpha = Math.min(1, p.life * 1.5);
      const px = Math.round(p.x), py = Math.round(p.y - camY);
      if (p.size > 1) {
        ctx.fillRect(px - 1, py, 1, 1); ctx.fillRect(px + 1, py, 1, 1);
        ctx.fillRect(px, py - 1, 1, 1); ctx.fillRect(px, py + 1, 1, 1);
      } else ctx.fillRect(px, py, 1, 1);
    }
    ctx.globalAlpha = 1;

    // red flash
    if (st.flash > 0) {
      ctx.globalAlpha = Math.min(0.45, st.flash * 0.8);
      ctx.fillStyle = '#ff2a3d';
      ctx.fillRect(0, 0, W, H);
      ctx.globalAlpha = 1;
    }
  }

  // ---------- loop (capped at FPS, idles when nothing moves) ----------

  let raf = 0, last = 0, running = false;
  const frameMs = 1000 / FPS;

  function busy() {
    if (document.hidden) return false;
    if (st.tween < 1 || st.flash > 0 || st.jerk > 0 || st.particles.length) return true;
    if (Math.abs(diverTargetCam() - st.camY) > 0.3) return true;
    return !reducedMotion && st.detail;
  }

  function frame(now) {
    raf = 0;
    if (!last) last = now;
    const elapsed = now - last;
    if (elapsed >= frameMs - 1) {
      update(Math.min(0.1, elapsed / 1000));
      draw();
      last = now;
    }
    if (busy()) raf = requestAnimationFrame(frame);
    else running = false;
  }

  function kick() {
    if (raf) return;
    if (!running) last = 0;
    running = true;
    raf = requestAnimationFrame(frame);
  }

  document.addEventListener('visibilitychange', () => { if (!document.hidden) kick(); });

  function resize() {
    const vw = window.innerWidth, vh = window.innerHeight;
    scale = pixelScale(vw, vh);
    W = Math.ceil(vw / scale);
    H = Math.ceil(vh / scale);
    canvas.width = W; canvas.height = H;
    canvas.style.width = `${W * scale}px`;
    canvas.style.height = `${H * scale}px`;
    buildSky();
    buildBackground();
    buildCreatures();
    st.camY = diverTargetCam();
    update(0); draw();
    kick();
  }

  function moveDiverTo(y, dur, delay = 0) {
    if (reducedMotion) { st.diverY = st.from = st.to = y; st.tween = 1; return; }
    st.from = st.diverY; st.to = y; st.tween = 0; st.tweenDur = dur; st.tweenDelay = delay;
  }

  function burst(color = '#cfefff', n = 16) {
    if (reducedMotion) return;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      st.particles.push({ x: anchorX() + Math.cos(a) * 4, y: st.diverY + 5 + Math.sin(a) * 4,
        vx: Math.cos(a) * 14, vy: Math.sin(a) * 10 - 14, life: 0.9 + (i % 3) * 0.2, size: i % 3 === 0 ? 2 : 1, color });
    }
  }

  window.addEventListener('resize', resize);
  resize();

  return {
    get scale() { return scale; },
    get size() { return { W, H }; },
    setLang() { buildBackground(); draw(); kick(); },
    /** surface: start screen; dive: questions; over: after the dive */
    setMode(mode) { st.mode = mode; st.detail = true; kick(); },
    /** false during the reveal: creatures freeze, the loop idles once effects finish */
    setDetail(on) { st.detail = !!on; kick(); },
    startDive() {
      st.mode = 'dive'; st.detail = true;
      st.diverY = 4;
      moveDiverTo(depthToWorldY(0) + DIVER_OFFSET, 1.0);
      kick();
    },
    correct(depth) {
      burst();
      moveDiverTo(depthToWorldY(depth) + DIVER_OFFSET, 1.4, 0.15);
      kick();
    },
    wrong() {
      st.flash = 0.6; st.jerk = 0.9;
      burst('#ff8a8a', 10);
      kick();
    },
    ascend(delay = 0.6) {
      st.mode = 'over';
      moveDiverTo(4, 2.6, delay);
      kick();
    },
    jumpTo(depth) {
      st.diverY = st.from = st.to = depthToWorldY(depth) + DIVER_OFFSET; st.tween = 1; kick();
    },
  };
}
