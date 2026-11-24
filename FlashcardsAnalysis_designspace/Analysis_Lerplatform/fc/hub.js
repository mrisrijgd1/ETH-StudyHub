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
  /* StudyHub's switch My StudyHub → Your design → Hide → "Flashcards streak" (localStorage "sh-design"), as in fc/app.js */
  const designHidesStreak = () => { const d = readStore("sh-design"); return !!(d && Array.isArray(d.hide) && d.hide.indexOf("streak") >= 0); };

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
    const show = !designHidesStreak() && !(u && u.prefs && u.prefs.streak === false);   // "Show streak" (fc/app.js) and StudyHub's own switch
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

  /* The flame creature: fc/flame.js (shared with the subject pages); one per tile, ids made unique by the subject id */
  const flame = (cls, u, label, pile) => window.FCFlame ? window.FCFlame.box(cls, u, { label, pile }) : "";

  function tile(s) {
    const i = info(s), m = message(i);
    const pct = i.goal > 0 ? Math.min(100, Math.round(100 * i.count / i.goal)) : (i.started ? 100 : 0);
    const fcls = !i.started || (!i.streak && !i.done) ? "none" : (i.risk ? "risk " : i.done ? (i.count >= i.goal ? "happy party " : "happy ") : "") + "lvl" + i.level;
    const goalTxt = i.todo === 0 ? L("alles gemeistert", "all mastered") : `${i.count} / ${i.goal} ${L("heute", "today")}`;
    const streakTxt = !i.show ? "" : i.streak ? `${i.streak} ${i.streak === 1 ? L("Tag", "day") : L("Tage", "days")} ${L("am Stück", "in a row")} · ` : L("Neuer Start", "Fresh start") + " · ";
    return `<a class="fc-subj" href="${esc(s.path)}" data-flame="${esc(s.id)}" style="${esc(window.FC_FLAME_STYLE(s))}">
      <div class="fc-subj-head${i.show ? "" : " no-flame"}">${i.show ? flame(fcls, s.id, L(`Flamme von ${s.title}`, `${s.title} flame`), { size: i.total ? (i.total - i.todo) / i.total : 0, burn: i.goal ? i.count / i.goal : 0 }) : ""}
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
    wireFlames();
  }

  /* the creatures react to the pointer and, left alone, think about their subject (fc/flame.js) */
  function wireFlames() {
    if (!window.FCFlame) return;
    SUBJECTS.forEach(s => {
      const tileEl = document.querySelector(`.fc-subj[data-flame="${s.id}"]`);
      if (tileEl) window.FCFlame.attach(tileEl, { thoughts: s.thoughts ? (s.thoughts[LANG] || s.thoughts.de || []) : [] });
    });
  }
  render();
  document.addEventListener("sh-auth", render);
  window.addEventListener("storage", render);
  window.addEventListener("pageshow", e => { if (e.persisted) render(); });   // back from a subject page
  setInterval(render, 60e3);   // the 18:00 risk switch and midnight
  window.__fcHub = { info, render };
})();
