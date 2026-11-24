/* =========================================================================
   Lernkarten – the flame creature (shared by the subject pages and the start page)
   An original little fire spirit: a soft, flickering flame without hard edges
   (displacement noise + blur), hand-drawn eyes and mouth, burning on a small
   woodpile. The pile shows the learning state: its size the share of mastered
   cards, how far it has burnt (fresh wood → charred → glowing embers) today's
   progress towards the daily goal; asleep, the wood is cold and grey. Colours come from CSS variables (--fo… --fc1), so
   every subject gets its own flame colour (fc/subjects.js).

   Moods (classes on .fc-flame, set by the caller):
     lvl0–3   calm, grows with the streak          happy   done for today: grin, little hops
     party    today's goal reached: dances, grins, throws sparks
     risk     not yet today, late: worried, sweating
     none     no streak: grey, asleep (zz)         out     (legacy) a streak that just ended
     celebrate  a streak milestone: one burst of sparks
   Behaviour (FCFlame.attach):
     hover    leans towards the pointer, the eyes follow it, a surprised "oh!", then a grin
     poke     (click / tap / Enter, only where it is not inside a link) squishes, giggles, sparks, says something
     idle     after a while without input it thinks: a thought bubble with a concept from the subject
   prefers-reduced-motion: no dancing, leaning or eye-following; bubbles only fade.
   ========================================================================= */
(function () {
  "use strict";
  const reducedMotion = () => !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);

  /* Shapes, viewBox 0 0 120 142. The creature burns on a small woodpile (y 112–140). */
  const BODY = "M60 137 C35 137 25 118 26 96 C26.5 84 31 76 36 70 C34 62 35 54 40 47 C42 55 45 59 49 61 C48 50 52 39 59 30 C60 40 62 47 65 51 C67 43 72 37 79 34 C77 42 78 49 80 55 C84 52 88 48 90 43 C93 53 92 62 88 70 C92 77 94.5 86 94 96 C95 118 85 137 60 137 Z";
  const TONGUES = ["M50 52 C45 42 47 31 53 22 C53 32 56 39 59 46 Z", "M60 42 C56 29 59 16 66 5 C66 18 69 28 68 40 Z",
                   "M70 48 C72 37 77 29 85 25 C81 34 79 42 78 50 Z", "M38 64 C33 58 32 50 35 43 C37 50 40 55 44 58 Z", "M84 64 C89 58 90 51 88 44 C85 51 82 55 78 58 Z"];
  /* organic, hand-drawn eyes and mouths (no highlights, no cheeks) */
  const EYE_L = "M39.6 80.6 C39.2 74.6 42.9 71 47.6 71.3 C52.7 71.6 55.6 75.7 55.1 80.9 C54.6 85.7 51.2 88.7 46.7 88.4 C42.3 88.1 40 85.1 39.6 80.6 Z";
  const EYE_R = "M64.9 80 C65.3 74.8 68.9 71.5 73.5 71.9 C78.3 72.2 81.1 76 80.7 80.7 C80.3 85.5 76.9 88.7 72.4 88.3 C67.9 87.9 64.6 84.5 64.9 80 Z";

  /* The woodpile. pile.size (0–1, share of mastered cards) → 2–6 logs; pile.burn (0–1, today's cards / daily goal) →
     burn0 fresh wood with bark, burn1 lightly charred, burn2 charred with glowing cracks, burn3 glowing embers.
     Slots are added in this order: the classic cross first, then the pile grows outwards and upwards. */
  const SLOTS = [[44, 126, 37, -17], [76, 126, 37, 17], [60, 133.5, 58, 0], [31, 132.5, 28, 9], [89, 132.5, 28, -9], [60, 118.5, 34, 0]];
  function pileLevel(pile) {
    pile = pile || {};
    const size = Math.max(0, Math.min(1, +pile.size || 0)), burn = Math.max(0, Math.min(1, +pile.burn || 0));
    return { n: 2 + Math.round(size * 4), b: burn >= 1 ? 3 : burn >= .5 ? 2 : burn > 0 ? 1 : 0 };
  }
  function pileSvg(pile, id) {
    const lv = pileLevel(pile);
    const order = [2, 3, 4, 0, 1, 5].filter(i => i < lv.n).sort((x, y) => SLOTS[x][1] - SLOTS[y][1] || x - y);   // back (higher) logs first
    const log = i => {
      const [cx, cy, len, rot] = SLOTS[i], h = (len > 40 ? 12.5 : 10.8) * (lv.b === 3 ? .84 : 1), r = h / 2, e = len / 2 - 2.4;   // embers: burnt thinner
      return `<g class="wlog" transform="translate(${cx} ${cy}) rotate(${rot})">
        <rect class="wood" x="${-len / 2}" y="${-r}" width="${len}" height="${h}" rx="${r}"/>
        <path class="bark" d="M${-len / 2 + 5} ${-r + 3} C${-len / 6} ${-r + 1.6} ${len / 6} ${-r + 4} ${len / 2 - 8} ${-r + 2.6} M${-len / 2 + 9} ${r - 2.4} C${-len / 8} ${r - 3.6} ${len / 5} ${r - 1.6} ${len / 2 - 10} ${r - 3}"/>
        <path class="crack" d="M${-len / 2 + 6} ${-.6} l4 -1.8 l3 2.4 l4 -2 l3.4 2 M${len / 8} ${1.4} l3.6 -2.2 l3 2 l3.4 -1.6"/>
        <ellipse class="grain" cx="${e}" cy="0" rx="${(r * .62).toFixed(2)}" ry="${(r - .6).toFixed(2)}"/>
        <path class="ring" d="M${e} ${-r * .45} C${e - 1.6} ${-r * .3} ${e - 1.6} ${r * .35} ${e} ${r * .48} C${e + 1.4} ${r * .3} ${e + 1.4} ${-r * .3} ${e} ${-r * .45} Z"/></g>`;
    };
    return `<g class="pile pile${lv.n} burn${lv.b}">
        <ellipse class="ash" cx="60" cy="139.5" rx="${24 + lv.n * 3.5}" ry="3"/>
        <ellipse class="emberbed" cx="60" cy="121" rx="${22 + lv.n * 3}" ry="7" filter="url(#${id("haze")})"/>
        ${order.map(log).join("")}
      </g>`;
  }

  /* the SVG; u makes the gradient ids unique when several creatures share a page; pile = { size, burn } */
  function svg(cls, u, pile) {
    u = String(u || "x").replace(/[^\w-]/g, "");
    const id = n => "fcf" + u + "-" + n;
    const still = reducedMotion();
    const anim = still ? "" : `<animate attributeName="baseFrequency" dur="1.9s" values="0.022 0.07;0.03 0.1;0.018 0.085;0.022 0.07" repeatCount="indefinite"/>`;
    const sparks = Array.from({ length: 9 }, (_, i) => `<circle class="sp sp${i}" cx="60" cy="60" r="${(2.4 - (i % 3) * .5).toFixed(1)}"/>`).join("");
    const lvl = pileLevel(pile);   // the flame grows, sparks more and is livelier the further the pile has burnt today
    return `<svg class="fc-ui fc-flame ${cls} b${lvl.b}" viewBox="0 0 120 142" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="${id("glow")}" cx="50%" cy="60%" r="50%"><stop offset="0" style="stop-color:var(--fg)" stop-opacity=".65"/><stop offset=".5" style="stop-color:var(--fg)" stop-opacity=".22"/><stop offset="1" style="stop-color:var(--fg)" stop-opacity="0"/></radialGradient>
        <linearGradient id="${id("g1")}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--fo)" stop-opacity="0"/><stop offset=".22" style="stop-color:var(--fo)" stop-opacity=".85"/><stop offset=".6" style="stop-color:var(--fo2)"/><stop offset="1" style="stop-color:var(--fo3)"/></linearGradient>
        <linearGradient id="${id("g2")}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--fm)" stop-opacity="0"/><stop offset=".3" style="stop-color:var(--fm)" stop-opacity=".9"/><stop offset="1" style="stop-color:var(--fm2)"/></linearGradient>
        <linearGradient id="${id("g4")}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--fi)" stop-opacity="0"/><stop offset=".3" style="stop-color:var(--fi)"/><stop offset="1" style="stop-color:var(--fi2)"/></linearGradient>
        <radialGradient id="${id("g3")}" cx="50%" cy="56%" r="55%"><stop offset="0" style="stop-color:var(--fc0)"/><stop offset=".4" style="stop-color:var(--fc1)"/><stop offset=".75" style="stop-color:var(--fi)"/><stop offset="1" style="stop-color:var(--fi2)" stop-opacity="0"/></radialGradient>
        <radialGradient id="${id("mouth")}" cx="50%" cy="62%" r="62%"><stop offset="0" style="stop-color:var(--fi)"/><stop offset=".5" style="stop-color:var(--fm2)"/><stop offset="1" style="stop-color:var(--fo3)"/></radialGradient>
        <filter id="${id("fire")}" x="-25%" y="-25%" width="150%" height="150%"><feTurbulence type="fractalNoise" baseFrequency="0.022 0.07" numOctaves="2" seed="11" result="n">${anim}</feTurbulence><feDisplacementMap in="SourceGraphic" in2="n" scale="7" xChannelSelector="R" yChannelSelector="G" result="d"/><feGaussianBlur in="d" stdDeviation=".85"/></filter>
        <filter id="${id("spark")}" x="-200%" y="-200%" width="500%" height="500%"><feGaussianBlur stdDeviation="1.1" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="${id("fade")}" gradientUnits="userSpaceOnUse" x1="0" y1="104" x2="0" y2="140"><stop offset="0" stop-color="#fff"/><stop offset=".45" stop-color="#d6d6d6"/><stop offset="1" stop-color="#555"/></linearGradient>
        <mask id="${id("fadem")}" maskUnits="userSpaceOnUse" x="-30" y="-30" width="180" height="200"><rect x="-30" y="-30" width="180" height="200" fill="url(#${id("fade")})"/></mask>
        <filter id="${id("soft")}" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="3.2"/></filter>
        <filter id="${id("haze")}" x="-40%" y="-60%" width="180%" height="220%"><feGaussianBlur stdDeviation="2.4"/></filter>
      </defs>
      <ellipse class="glow" cx="60" cy="90" rx="60" ry="52" fill="url(#${id("glow")})"/>
      <!-- the woodpile, behind the fire: the flame burns in front of it and fades over it; it stays put while the flame moves -->
      ${pileSvg(pile, id)}
      <g class="creature">
        <g class="fire" mask="url(#${id("fadem")})"><g filter="url(#${id("fire")})">
          ${TONGUES.map((d, i) => `<path class="tongue t${i}" d="${d}" fill="url(#${id("g1")})"/>`).join("")}
          <path class="ly ly1" d="${BODY}" fill="url(#${id("g1")})"/>
          <g transform="translate(60 137) scale(.8 .8) translate(-60 -137)"><path class="ly ly2" d="${BODY}" fill="url(#${id("g2")})"/></g>
          <g transform="translate(60 137) scale(.6 .62) translate(-60 -137)"><path class="ly ly3" d="${BODY}" fill="url(#${id("g4")})"/></g>
        </g></g>
        <ellipse class="core" cx="60" cy="104" rx="23" ry="22" fill="url(#${id("g3")})" filter="url(#${id("soft")})"/>
        <g class="face"><g transform="translate(0 9)">   <!-- the face sits in the middle of the flame -->
          <g class="eyes"><g class="eye"><path class="white" d="${EYE_L}"/><g class="pupil"><ellipse class="iris" cx="48.3" cy="80.6" rx="2.9" ry="3.2"/></g></g>
            <g class="eye"><path class="white" d="${EYE_R}"/><g class="pupil"><ellipse class="iris" cx="72.4" cy="80.2" rx="2.9" ry="3.2"/></g></g></g>
          <g class="lids"><path d="M40 82 C43 85.5 50 86.2 55 82.6"/><path d="M65 82.2 C69 86 76 85.6 80.6 82"/></g>
          <g class="joy"><path d="M40 83 C42 76.5 51 75.5 55 82.4"/><path d="M65 82.2 C68.5 75.8 77.5 76.2 80.6 83"/></g>
          <g class="brows"><path d="M39.5 68.5 C43 66.2 48.5 65.6 54 67.6"/><path d="M80.6 68.2 C77 65.8 71.5 65.4 66 67.2"/></g>
          <path class="mouth m-calm" d="M50.5 97.2 C53.5 95.9 56.5 96.7 60.2 96.2 C64 95.7 67.2 96.5 70.2 95.4 C69.4 97.6 66.2 98.6 60.4 98.8 C55.2 99 52.2 98.7 50.5 97.2 Z"/>
          <path class="mouth-in m-grin" d="M43.5 91.6 C49.6 93.4 55.6 92.6 60 93.1 C66 93.6 72 92.3 77.2 90.8 C76.4 99.4 70.8 106.4 60.6 106.8 C50.2 107.2 44.6 100.2 43.5 91.6 Z" fill="url(#${id("mouth")})"/>
          <path class="mouth-in m-oh" d="M53.8 97.4 C53.6 92.8 56.7 90.5 60.4 90.7 C64.6 90.9 67 93.8 66.6 98.2 C66.2 102.6 63.4 104.8 59.8 104.6 C56.2 104.4 54 101.8 53.8 97.4 Z" fill="url(#${id("mouth")})"/>
          <path class="mouth m-worry" d="M48.6 99.4 C51.8 96.2 55 97.9 58.1 96.9 C61.2 95.9 64.2 97.9 67.3 96.6 C69.3 95.8 70.9 96.2 71.9 97.5 C68.3 100.7 64.3 99.9 60.7 100.7 C56.1 101.5 52.3 101.2 48.6 99.4 Z"/>
          <path class="mouth m-sleep" d="M55.5 98 C58 99.4 61.5 99.5 64.5 97.8"/>
          <path class="drop" d="M88 64 C86 68 85 70.5 85 72.5 A3 3 0 0 0 91 72.5 C91 70.5 90 68 88 64 Z"/>
        </g>        </g>
      </g>
      <g class="embers" filter="url(#${id("spark")})"><circle cx="52" cy="30" r="2"/><circle cx="66" cy="14" r="1.6"/><circle cx="80" cy="34" r="1.9"/><circle cx="40" cy="50" r="1.5"/><circle cx="86" cy="52" r="1.6"/><circle cx="60" cy="24" r="1.3"/><circle cx="72" cy="40" r="1.8"/><circle cx="46" cy="40" r="1.7"/></g>
      <g class="zz"><text x="86" y="60">z</text><text x="95" y="47">z</text></g>
      <g class="smoke"><path d="M58 58 C52 48 64 42 58 32 C54 24 62 18 60 10"/><path d="M66 62 C72 52 62 46 68 36"/></g>
      <g class="sparks">${sparks}</g>
    </svg>`;
  }

  /* The creature with its thought bubble: what the pages insert */
  function box(cls, u, opts) {
    opts = opts || {};
    const label = opts.label ? ` role="img" aria-label="${String(opts.label).replace(/"/g, "&quot;")}"` : "";
    const poke = opts.poke ? ` data-poke tabindex="0"` : "";
    return `<span class="fc-flamebox"${label}${poke}>${svg(cls, u, opts.pile)}<span class="fc-thought" aria-live="polite" hidden></span></span>`;
  }

  /* ---------------- behaviour ---------------- */
  const IDLE_FIRST = 9000, IDLE_NEXT = 16000, SHOW = 5600;
  let idleTimer = null, lastThought = "", wired = false;
  const live = new Set();   // creatures on the page: { el, opts }

  function say(c, text, ms) {
    const b = c.el.querySelector(".fc-thought"); if (!b) return;
    b.textContent = text; b.hidden = false; b.classList.remove("out");
    clearTimeout(c.sayT); clearTimeout(c.hideT);
    c.sayT = setTimeout(() => { b.classList.add("out"); c.hideT = setTimeout(() => { b.hidden = true; b.classList.remove("out"); }, 400); }, ms || SHOW);
  }
  function pick(list, avoid) {
    if (!list || !list.length) return "";
    let t = list[Math.floor(Math.random() * list.length)];
    if (list.length > 1 && t === avoid) t = list[(list.indexOf(t) + 1) % list.length];
    return t;
  }
  function think() {
    const all = [...live].filter(c => c.el.isConnected && (c.opts.thoughts || []).length);
    if (!all.length || document.hidden) return schedule(IDLE_NEXT);
    const c = all[Math.floor(Math.random() * all.length)];
    const sleeping = c.el.querySelector(".fc-flame.none, .fc-flame.out");
    const t = pick(c.opts.thoughts, lastThought); lastThought = t;
    c.el.classList.add("thinking"); setTimeout(() => c.el.classList.remove("thinking"), SHOW);
    say(c, sleeping ? "z… " + t : t);
    schedule(IDLE_NEXT);
  }
  function schedule(ms) { clearTimeout(idleTimer); idleTimer = setTimeout(think, ms); }
  function activity() { schedule(IDLE_FIRST); }

  function wire(c) {
    const el = c.el, flame = el.querySelector(".fc-flame");
    if (!flame) return;
    const set = (k, v) => el.style.setProperty(k, v);
    let surpriseT = null;
    el.addEventListener("pointerenter", () => {
      if (el.classList.contains("hover")) return;
      el.classList.add("hover", "surprised");
      clearTimeout(surpriseT); surpriseT = setTimeout(() => el.classList.remove("surprised"), 650);
    });
    el.addEventListener("pointermove", e => {
      if (reducedMotion()) return;
      const r = flame.getBoundingClientRect();
      const dx = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (r.width / 2)));
      const dy = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height * .66)) / (r.height / 2)));
      set("--lean", (dx * 9).toFixed(1) + "deg"); set("--px", (dx * 3.2).toFixed(2) + "px"); set("--py", (dy * 2.4).toFixed(2) + "px");
    });
    el.addEventListener("pointerleave", () => {
      el.classList.remove("hover", "surprised"); set("--lean", "0deg"); set("--px", "0px"); set("--py", "0px");
    });
    if (el.hasAttribute("data-poke")) {
      const poke = e => {
        if (e && e.type === "keydown" && e.key !== "Enter" && e.key !== " ") return;
        if (e) e.preventDefault();
        el.classList.remove("poked"); void el.offsetWidth; el.classList.add("poked");
        clearTimeout(c.pokeT); c.pokeT = setTimeout(() => el.classList.remove("poked"), 1100);
        if ((c.opts.reactions || []).length) { const r = pick(c.opts.reactions, c.lastReact); c.lastReact = r; say(c, r, 2200); }
      };
      el.addEventListener("click", poke); el.addEventListener("keydown", poke);
    }
  }

  /* attach(root, { thoughts: [...], reactions: [...] }): wire every new creature inside root */
  function attach(root, opts) {
    (root || document).querySelectorAll(".fc-flamebox:not([data-wired])").forEach(el => {
      el.setAttribute("data-wired", "");
      const c = { el, opts: opts || {} };
      live.add(c); wire(c);
    });
    live.forEach(c => { if (!c.el.isConnected) live.delete(c); });
    if (!wired) {
      wired = true;
      ["pointermove", "keydown", "scroll", "touchstart"].forEach(ev => addEventListener(ev, activity, { passive: true }));
      document.addEventListener("visibilitychange", () => { if (!document.hidden) activity(); });
    }
    activity();
  }

  window.FCFlame = { svg, box, attach, pileLevel };
})();
