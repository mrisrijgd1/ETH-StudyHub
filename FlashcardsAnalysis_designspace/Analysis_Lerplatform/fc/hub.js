/* =========================================================================
   Lernkarten – start page (all subjects)
   One tile per subject (fc/subjects.js): the flame creature in the subject's
   flame colour, today's progress as a horizontal thermometer filled with the
   same colour, and a short message. A click opens the subject's home screen.
   Reads each subject's own storage (same user logic as fc/app.js); the
   number of cards still to review comes from the summary that fc/app.js
   writes whenever a subject page is opened or a card is rated.
   ========================================================================= */
(function () {
  "use strict";
  /* Old links (…/Analysis_Lerplatform/#/kapitel-3) belonged to Analysis: forward them */
  if (/^#\//.test(location.hash)) { location.replace("analysis/" + location.search + location.hash); return; }

  const SUBJECTS = window.FC_SUBJECTS || [];
  const TZ = "Europe/Zurich", RISK_HOUR = 18, MIN_REVIEWS = 1;
  const $ = s => document.querySelector(s);
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const dayFmt = new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit" });
  const hourFmt = new Intl.DateTimeFormat("en-GB", { timeZone: TZ, hour: "2-digit", hour12: false });
  const dayKey = ts => dayFmt.format(new Date(ts));
  const addDays = (key, n) => { const d = new Date(key + "T12:00:00Z"); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); };
  const NOW = () => (window.__fcNow ? window.__fcNow() : Date.now());   // test hook, as in app.js

  const readStore = key => { try { return JSON.parse(localStorage.getItem(key)) || null; } catch (e) { return null; } };
  const uid = () => (window.SH && window.SH.user && window.SH.user.id) || "guest";

  /* Language: ?lang, else the language saved in a subject, else the hub's /de/ pages, else the browser */
  function lang() {
    const p = new URLSearchParams(location.search).get("lang");
    if (p === "de" || p === "en") return p;
    for (const s of SUBJECTS) { const st = readStore(s.storageKey); const u = st && st.users && st.users[uid()]; if (u && u.prefs && u.prefs.lang) return u.prefs.lang; }
    if (/\/de\//.test(document.referrer)) return "de";
    return /^de/i.test(navigator.language || "") ? "de" : "en";
  }
  let LANG = "de"; const L = (de, en) => (LANG === "de" ? de : en);

  /* Today, streak and goal for one subject */
  function info(subj) {
    const st = readStore(subj.storageKey), u = st && st.users && st.users[uid()];
    const now = NOW(), today = dayKey(now), counts = {};
    (u && u.log || []).forEach(e => { const k = dayKey(e[0]); counts[k] = (counts[k] || 0) + 1; });
    const ok = k => (counts[k] || 0) >= MIN_REVIEWS;
    let streak = 0, k = ok(today) ? today : addDays(today, -1);
    while (ok(k)) { streak++; k = addDays(k, -1); }
    const count = counts[today] || 0;
    const sum = u && u.summary;
    const todo = sum ? Math.max(0, sum.total - sum.mastered) : null;           // cards not yet mastered
    const goal = todo === null ? subj.dailyGoal : Math.min(subj.dailyGoal, todo + Math.min(count, subj.dailyGoal));
    const risk = streak > 0 && !ok(today) && parseInt(hourFmt.format(new Date(now)), 10) % 24 >= RISK_HOUR;
    const level = [3, 7, 30].filter(x => streak >= x).length;
    const show = !(u && u.prefs && u.prefs.streak === false);   // "Show streak" setting of fc/app.js
    return { started: !!(u && (u.log.length || Object.keys(u.cards || {}).length)), count, streak, todo, goal, risk, level, done: ok(today), total: sum && sum.total, show };
  }

  function message(i) {
    if (!i.started) return { t: L("Noch nicht gestartet – leg los!", "Not started yet – go!"), cls: "" };
    if (i.todo === 0) return { t: L("Alles sitzt – nur noch auffrischen.", "Everything sticks – just refresh."), cls: "good" };
    if (i.count >= i.goal) return { t: L(`Tagesziel geschafft – stark!`, `Daily goal done – great!`), cls: "good" };
    if (i.count > 0) return { t: L(`Wow, ${i.count} heute – weiter so!`, `Wow, ${i.count} today – keep going!`), cls: "" };
    if (i.show && i.risk) return { t: L(`Tag ${i.streak + 1} wartet – los geht's!`, `Day ${i.streak + 1} is waiting – let's go!`), cls: "risk" };
    if (i.show && i.streak > 0) return { t: L(`Auf zu Tag ${i.streak + 1}!`, `On to day ${i.streak + 1}!`), cls: "" };
    return { t: L("Bereit für ein paar Karten?", "Ready for a few cards?"), cls: "" };
  }

  /* The flame creature: copied from fc/app.js flameSvg (keep in sync); ids get a per-tile suffix,
     because the gradients read the tile's colours and must not be shared between tiles */
  const reducedMotion = () => !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);
  function flame(cls, u) {
    const T = {   // tongues, drawn from the base (60,132) upwards
      body: "M60 133 C33 133 21 115 23 96 C25 78 40 66 60 64 C80 66 95 78 97 96 C99 115 87 133 60 133 Z",
      c: "M40 96 C36 72 50 52 54 30 C55 22 54 15 57 6 C63 22 72 36 76 54 C80 70 80 84 78 96 Z",
      l: "M26 104 C19 88 22 72 28 58 C30 52 30 46 29 40 C37 50 45 62 48 80 C49 88 48 96 46 104 Z",
      r: "M72 102 C72 86 78 72 86 62 C90 56 92 50 92 42 C99 56 102 72 98 88 C96 96 94 102 90 106 Z",
      ll: "M30 118 C22 112 18 102 19 92 C20 86 19 80 17 74 C25 82 31 92 34 104 Z",
      rr: "M88 118 C94 110 98 100 98 90 C98 84 100 80 103 76 C106 90 104 104 96 116 Z"
    };
    const layer = (n, s) => `<g class="ly ly${n}" transform="translate(60 133) scale(${s}) translate(-60 -133)" fill="url(#fcf-g${n})">` +
      `<path class="tg body-t" d="${T.body}"/><path class="tg t-ll" d="${T.ll}"/><path class="tg t-rr" d="${T.rr}"/><path class="tg t-l" d="${T.l}"/><path class="tg t-r" d="${T.r}"/><path class="tg t-c" d="${T.c}"/></g>`;
    const anim = reducedMotion() ? "" : `<animate attributeName="baseFrequency" dur="2.6s" values="0.018 0.055;0.024 0.075;0.016 0.065;0.018 0.055" repeatCount="indefinite"/>`;
    return (`<svg class="fc-ui fc-flame ${cls}" viewBox="0 0 120 142" aria-hidden="true">
      <defs>
        <radialGradient id="fcf-glow" cx="50%" cy="62%" r="50%"><stop offset="0" style="stop-color:var(--fg)" stop-opacity=".55"/><stop offset=".55" style="stop-color:var(--fg)" stop-opacity=".18"/><stop offset="1" style="stop-color:var(--fg)" stop-opacity="0"/></radialGradient>
        <linearGradient id="fcf-g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--fo)" stop-opacity="0"/><stop offset=".16" style="stop-color:var(--fo)" stop-opacity=".8"/><stop offset=".55" style="stop-color:var(--fo2)"/><stop offset="1" style="stop-color:var(--fo3)"/></linearGradient>
        <linearGradient id="fcf-g2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--fm)" stop-opacity="0"/><stop offset=".22" style="stop-color:var(--fm)" stop-opacity=".9"/><stop offset="1" style="stop-color:var(--fm2)"/></linearGradient>
        <linearGradient id="fcf-g3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--fi)" stop-opacity="0"/><stop offset=".3" style="stop-color:var(--fi)"/><stop offset="1" style="stop-color:var(--fi2)"/></linearGradient>
        <radialGradient id="fcf-g4" cx="50%" cy="70%" r="55%"><stop offset="0" style="stop-color:var(--fc0)"/><stop offset=".6" style="stop-color:var(--fc1)"/><stop offset="1" style="stop-color:var(--fi)" stop-opacity="0"/></radialGradient>
        <filter id="fcf-wobble" x="-20%" y="-20%" width="140%" height="140%"><feTurbulence type="fractalNoise" baseFrequency="0.018 0.055" numOctaves="1" seed="4" result="n">${anim}</feTurbulence><feDisplacementMap in="SourceGraphic" in2="n" scale="7" xChannelSelector="R" yChannelSelector="G"/></filter>
      </defs>
      <ellipse class="glow" cx="60" cy="98" rx="58" ry="48" fill="url(#fcf-glow)"/>
      <g class="creature">
        <g class="fire">${layer(1, 1)}${layer(2, .8)}${layer(3, .6)}<ellipse class="core" cx="60" cy="112" rx="22" ry="20" fill="url(#fcf-g4)"/></g>
        <g class="face">
          <ellipse class="cheek" cx="40" cy="108" rx="5.5" ry="3.2"/><ellipse class="cheek" cx="80" cy="108" rx="5.5" ry="3.2"/>
          <g class="eyes"><g class="eye"><ellipse class="white" cx="48" cy="96" rx="8" ry="9.5"/><g class="pupil"><ellipse cx="49" cy="98" rx="4" ry="4.6"/><circle class="hl" cx="50.6" cy="96" r="1.5"/></g></g>
            <g class="eye"><ellipse class="white" cx="72" cy="96" rx="8" ry="9.5"/><g class="pupil"><ellipse cx="71" cy="98" rx="4" ry="4.6"/><circle class="hl" cx="72.6" cy="96" r="1.5"/></g></g></g>
          <g class="lids"><path d="M41 97 Q48 102 55 97"/><path d="M65 97 Q72 102 79 97"/></g>
          <g class="brows"><path d="M41 87 Q47 83 54 83"/><path d="M79 87 Q73 83 66 83"/></g>
          <path class="mouth m-calm" d="M54 110 Q60 115 66 110"/>
          <path class="mouth m-happy" d="M51.5 108.5 Q60 121 68.5 108.5 Q60 112 51.5 108.5 Z"/>
          <path class="mouth m-worry" d="M53 113 Q56.5 109.5 60 112.5 Q63.5 115.5 67 112"/>
          <path class="mouth m-sleep" d="M57 112 Q60 114 63 112"/>
          <path class="drop" d="M85 84 C83 88 82 90 82 92 A3 3 0 0 0 88 92 C88 90 87 88 85 84 Z"/>
        </g>
      </g>
      <g class="embers"><circle cx="44" cy="70" r="1.6"/><circle cx="74" cy="64" r="1.3"/><circle cx="60" cy="40" r="1.1"/><circle cx="86" cy="80" r="1.2"/><circle cx="34" cy="84" r="1"/></g>
      <g class="zz"><text x="84" y="70">z</text><text x="92" y="58">z</text></g>
      <g class="smoke"><path d="M58 70 C52 60 64 54 58 44 C54 36 62 30 60 22"/><path d="M66 74 C72 64 62 58 68 48"/></g>
      <g class="sparks"><circle cx="20" cy="50" r="3"/><circle cx="100" cy="40" r="2.6"/><circle cx="84" cy="16" r="2.2"/><circle cx="32" cy="22" r="2"/></g>
    </svg>`).replace(/fcf-(g\d|glow|wobble)/g, "fcf" + u + "-$1");
  }

  function tile(s) {
    const i = info(s), m = message(i);
    const pct = i.goal > 0 ? Math.min(100, Math.round(100 * i.count / i.goal)) : (i.started ? 100 : 0);
    const fcls = !i.started || (!i.streak && !i.done) ? "none" : (i.risk ? "risk " : i.done ? "happy " : "") + "lvl" + i.level;
    const goalTxt = i.todo === 0 ? L("alles gemeistert", "all mastered") : `${i.count} / ${i.goal} ${L("heute", "today")}`;
    const streakTxt = !i.show ? "" : i.streak ? `${i.streak} ${i.streak === 1 ? L("Tag", "day") : L("Tage", "days")} ${L("am Stück", "in a row")} · ` : L("Neuer Start", "Fresh start") + " · ";
    return `<a class="fc-subj" href="${esc(s.path)}" data-flame="${esc(s.id)}" style="${esc(window.FC_FLAME_STYLE(s))}">
      <div class="fc-subj-head${i.show ? "" : " no-flame"}">${i.show ? flame(fcls, s.id) : ""}
        <div><span class="fc-subj-title">${esc(s.title)}</span>
          <span class="fc-subj-sub">${esc(streakTxt)}${L("Flamme", "flame")}: ${esc(L(s.element.de, s.element.en))}</span></div>
        <span class="fc-subj-go" aria-hidden="true">›</span></div>
      <div class="fc-thermo" role="meter" aria-valuemin="0" aria-valuemax="${i.goal}" aria-valuenow="${Math.min(i.count, i.goal)}" aria-label="${esc(s.title)}: ${esc(goalTxt)}">
        <span class="bulb"></span><span class="tube"><span class="liq" style="width:${pct}%"></span></span></div>
      <div class="fc-thermo-lbl"><b>${esc(goalTxt)}</b><span class="msg ${m.cls}">${esc(m.t)}</span></div></a>`;
  }

  function render() {
    LANG = lang(); document.documentElement.lang = LANG;
    $("#fc-hub").innerHTML = `
      <header class="fc-hub-head"><span class="fc-eyebrow">StudyHub · ${L("Lernkarten", "Flashcards")}</span>
        <h1>${L("Welches Fach repetierst du heute?", "Which subject are you reviewing today?")}</h1></header>
      <nav class="fc-subjects" aria-label="${L("Fächer", "Subjects")}">${SUBJECTS.map(tile).join("")}</nav>
      <p class="fc-hub-note">${L(`Das Thermometer zeigt die heute bewerteten Karten im Verhältnis zum Tagesziel (höchstens ${SUBJECTS[0] ? SUBJECTS[0].dailyGoal : 20} Karten, nie mehr als noch nicht sitzen). Jedes Fach hat seine eigene Serie und seine eigene Flammenfarbe.`,
        `The thermometer shows today's rated cards against the daily goal (at most ${SUBJECTS[0] ? SUBJECTS[0].dailyGoal : 20} cards, never more than are still not mastered). Each subject has its own streak and flame colour.`)}</p>`;
  }

  render();
  document.addEventListener("sh-auth", render);
  window.addEventListener("storage", render);
  window.addEventListener("pageshow", e => { if (e.persisted) render(); });   // back from a subject page
  setInterval(render, 60e3);   // the 18:00 risk switch and midnight
  window.__fcHub = { info, render };
})();
