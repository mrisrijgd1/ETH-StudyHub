/* =========================================================================
   Analysis I – Lernkarten (StudyHub)
   Overview with streak, stats, heatmap and radar charts; script-chapter
   decks; Proof practice (the hub's lesson cards); Weak cards.
   Vanilla JS, no build step. Configuration: fc/config.js.
   ========================================================================= */
(function () {
  "use strict";
  const C = window.FC_CONFIG;
  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const pad = (n, w) => String(n).padStart(w || 2, "0");

  /* ------------------------------------------------------------------ */
  /* Language                                                            */
  /* ------------------------------------------------------------------ */
  const params = new URLSearchParams(location.search);
  let LANG = "de";
  function initLang() {
    const p = params.get("lang");
    const saved = (store && prefs().lang) || null;
    if (p === "de" || p === "en") LANG = p;
    else if (saved) LANG = saved;
    else if (/\/de\//.test(document.referrer)) LANG = "de";
    else LANG = /^de/i.test(navigator.language || "") ? "de" : "en";
    document.documentElement.lang = LANG;
  }
  const L = (de, en) => (LANG === "de" ? de : en);

  const TYPE_LABEL = {
    definition: ["Definition", "Definition"], satz: ["Satz", "Theorem"], lemma: ["Lemma", "Lemma"],
    proposition: ["Proposition", "Proposition"], beweis: ["Beweis", "Proof"], beispiel: ["Beispiel", "Example"],
    def: ["Definition", "Definition"], thm: ["Satz", "Theorem"], move: ["Kniff", "Move"], recipe: ["Rezept", "Recipe"]
  };
  const typeLabel = t => (TYPE_LABEL[t] ? L(TYPE_LABEL[t][0], TYPE_LABEL[t][1]) : t || "");

  /* ------------------------------------------------------------------ */
  /* Dates (Europe/Zurich)                                               */
  /* ------------------------------------------------------------------ */
  const dayFmt = new Intl.DateTimeFormat("en-CA", { timeZone: C.timeZone, year: "numeric", month: "2-digit", day: "2-digit" });
  const hourFmt = new Intl.DateTimeFormat("en-GB", { timeZone: C.timeZone, hour: "2-digit", hour12: false });
  const dayKey = ts => dayFmt.format(new Date(ts));
  const zHour = ts => parseInt(hourFmt.format(new Date(ts)), 10) % 24;
  function addDays(key, n) {
    const d = new Date(key + "T12:00:00Z"); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10);
  }
  function msToZurichMidnight(now) {
    const today = dayKey(now), tomorrow = addDays(today, 1);
    let lo = now, hi = now + 26 * 3600e3;            // find the first ms whose Zurich day is "tomorrow"
    while (hi - lo > 1000) { const mid = (lo + hi) / 2; if (dayKey(mid) >= tomorrow) hi = mid; else lo = mid; }
    return hi - now;
  }
  const NOW = () => (window.__fcNow ? window.__fcNow() : Date.now());   // test hook

  /* ------------------------------------------------------------------ */
  /* Data                                                                */
  /* ------------------------------------------------------------------ */
  const chapters = C.chapters.map(ch => {
    const raw = window["FLASHCARDS_KAPITEL_" + ch.id] || null;
    const cards = raw ? raw.map((c, i) => ({
      id: c.id || ("k" + ch.id + ":" + (c.title || i)), src: "script", deck: "k" + ch.id, chapter: ch.id,
      category: c.category || "", type: c.type || "", title: c.title || "", front: c.front || "", back: c.back || "",
      meta: c.meta || "", explanation: c.explanation || "", example: c.example || "", counterexample: c.counterexample || ""
    })) : null;
    const cats = cards ? [...new Set(cards.map(c => c.category).filter(Boolean))].sort((a, b) => a.localeCompare(b, "de", { numeric: true })) : [];
    return Object.assign({}, ch, { cards, cats });
  });
  const scriptCards = chapters.flatMap(ch => ch.cards || []);
  const byId = new Map(scriptCards.map(c => [c.id, c]));

  /* Proof practice: the hub's lesson cards, read from its flashcards pages */
  const lesson = { en: null, de: null, state: { en: "idle", de: "idle" } };
  function loadLessons(lang) {
    if (lesson.state[lang] !== "idle") return lesson.state[lang] === "ok" ? Promise.resolve(lesson[lang]) : lesson["p_" + lang];
    lesson.state[lang] = "loading";
    lesson["p_" + lang] = fetch(C.lessonSources[lang], { credentials: "same-origin" })
      .then(r => { if (!r.ok) throw new Error(r.status); return r.text(); })
      .then(html => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        const counters = {}, out = [];
        $$("div.fc", doc).forEach(el => {
          if (el.getAttribute("data-s") === "p") return;          // Physics stays on the hub
          const l = parseInt(el.getAttribute("data-l"), 10); const t = el.getAttribute("data-t") || "thm";
          const q = $(".q", el), a = $(".a", el);
          if (!l || !q || !a) return;
          const k = l + "-" + t; counters[k] = (counters[k] || 0) + 1;
          out.push({ id: "L" + pad(l) + "-" + t + "-" + pad(counters[k]) + "-" + lang, src: "lesson", deck: "proof", lesson: l,
            type: t, title: L("Lektion ", "Lesson ") + l, front: q.innerHTML, back: a.innerHTML, meta: "", lang });
        });
        lesson[lang] = out; lesson.state[lang] = "ok"; out.forEach(c => byId.set(c.id, c)); return out;
      })
      .catch(() => { lesson.state[lang] = "error"; lesson[lang] = []; return []; });
    return lesson["p_" + lang];
  }
  const lessonCards = () => [].concat(lesson.en || [], lesson.de || []);

  /* ------------------------------------------------------------------ */
  /* Store (localStorage, separate per account)                          */
  /* ------------------------------------------------------------------ */
  let store = null, uid = "guest";
  function loadStore() {
    try { store = JSON.parse(localStorage.getItem(C.storageKey)) || null; } catch (e) { store = null; }
    if (!store || typeof store !== "object") store = { v: C.schemaVersion, users: {} };
    store.v = C.schemaVersion; store.users = store.users || {};
  }
  function U() {
    if (!store.users[uid]) store.users[uid] = { cards: {}, log: [], prefs: {}, flags: { milestones: [] }, name: "" };
    return store.users[uid];
  }
  const prefs = () => U().prefs;
  let saveT = null;
  function save() {
    clearTimeout(saveT);
    saveT = setTimeout(() => { try { localStorage.setItem(C.storageKey, JSON.stringify(store)); } catch (e) { toast(L("Speichern im Browser nicht möglich – nutze den Export.", "Cannot save in this browser – use the export.")); } }, 150);
  }

  /* Migration of the original app's ratings (analysis1-flashcards-k<N>) */
  function migrateLegacy() {
    if (store.legacyMigrated) return;
    const u = U(); let n = 0;
    chapters.forEach(ch => {
      if (!ch.cards) return;
      let raw = null; try { raw = JSON.parse(localStorage.getItem("analysis1-flashcards-k" + ch.id)); } catch (e) {}
      if (!raw || !raw.ratings) return;
      if (raw.shuffled) u.prefs.shuffle = true;
      Object.keys(raw.ratings).forEach(key => {
        let card = byId.get(key);
        if (!card) { const t = key.replace(/^\d+:/, ""); card = ch.cards.find(c => c.title === t); }   // old Kapitel 2 keys
        if (!card) return;
        const r = raw.ratings[key] === "gotit" ? "g" : raw.ratings[key] === "repeat" ? "a" : null;
        if (!r) return;
        const s = cs(card.id); if (s.h.length) return;
        s.h.push(r); s.n = 1; if (r === "a") s.wrong = 1; s.migrated = true; n++;
      });
    });
    store.legacyMigrated = true; save();
    if (n) setTimeout(() => toast(L(n + " Bewertungen aus der alten Version übernommen.", n + " ratings carried over from the old version.")), 600);
  }

  /* ------------------------------------------------------------------ */
  /* Card state and mastery                                              */
  /* ------------------------------------------------------------------ */
  function cs(id) { const u = U(); return u.cards[id] || (u.cards[id] = { h: [], n: 0, wrong: 0, unsure: 0, last: 0 }); }
  const peek = id => U().cards[id] || null;
  function isMastered(id) { const s = peek(id); if (!s) return false; const k = C.masteredAfter; return s.h.length >= k && s.h.slice(-k).every(r => r === "g"); }
  function isUnsure(id) { const s = peek(id); return !!s && s.h[s.h.length - 1] === "u"; }
  function isWeak(id) {
    const s = peek(id); if (!s || !s.h.length) return false;
    if (isMastered(id)) return false;
    const lastR = s.h[s.h.length - 1];
    return lastR === "a" || lastR === "u" || s.h.slice(-C.historyLength).filter(r => r === "a").length >= C.weakAgainCount;
  }
  function weakness(id) { const s = peek(id); if (!s) return 0; return s.h.slice(-C.historyLength).reduce((t, r) => t + (r === "a" ? 2 : r === "u" ? 1 : -1), 0); }
  function stats(cards) {
    let mastered = 0, unsure = 0, weak = 0, fresh = 0;
    cards.forEach(c => { const s = peek(c.id); if (!s || !s.h.length) fresh++; if (isMastered(c.id)) mastered++; else if (isUnsure(c.id)) unsure++; if (isWeak(c.id)) weak++; });
    return { total: cards.length, mastered, unsure, weak, fresh };
  }
  function rate(card, r) {
    const s = cs(card.id), now = NOW();
    s.h.push(r); if (s.h.length > C.historyLength) s.h = s.h.slice(-C.historyLength);
    s.n++; if (r === "a") s.wrong++; if (r === "u") s.unsure++; s.last = now; delete s.migrated;
    const u = U(); u.log.push([now, card.id, r]); if (u.log.length > 50000) u.log = u.log.slice(-40000);
    save(); reportCourse(card);
  }

  /* ------------------------------------------------------------------ */
  /* Streak                                                              */
  /* ------------------------------------------------------------------ */
  function dayCounts() { const m = {}; U().log.forEach(e => { const k = dayKey(e[0]); m[k] = (m[k] || 0) + 1; }); return m; }
  function streakInfo() {
    const counts = dayCounts(), now = NOW(), today = dayKey(now);
    const ok = k => (counts[k] || 0) >= C.streakMinReviews;
    let cur = 0, k = ok(today) ? today : addDays(today, -1);
    while (ok(k)) { cur++; k = addDays(k, -1); }
    const days = Object.keys(counts).filter(ok).sort();
    let longest = 0, run = 0, prev = null;
    days.forEach(d => { run = prev && addDays(prev, 1) === d ? run + 1 : 1; longest = Math.max(longest, run); prev = d; });
    const doneToday = ok(today);
    const lastDay = days[days.length - 1] || null;
    // lost: the most recent streak (≥ 2 days) ended before yesterday
    let lostLen = 0;
    if (!cur && lastDay) { let j = lastDay; while (ok(j)) { lostLen++; j = addDays(j, -1); } if (lostLen < 2) lostLen = 0; }
    const risk = cur > 0 && !doneToday && zHour(now) >= C.streakRiskHour;
    const level = C.streakLevels.filter(x => cur >= x).length;
    return { cur, longest, doneToday, risk, level, lostLen, lastDay, today: counts[today] || 0, counts };
  }

  /* ------------------------------------------------------------------ */
  /* Accounts (StudyHub window.SH)                                       */
  /* ------------------------------------------------------------------ */
  let profileName = "";
  function hookAccount() {
    const apply = () => {
      const SH = window.SH; const user = SH && SH.user;
      const next = user && user.id ? user.id : "guest";
      if (next !== uid) {
        const wasGuest = uid === "guest"; const guest = store.users.guest;
        uid = next; U();
        if (wasGuest && next !== "guest" && guest && guest.log.length && !U().log.length && !store.offered) {
          store.offered = true;
          if (confirm(L("Deinen Fortschritt als Gast in dein Konto übernehmen?", "Carry your guest progress over to your account?"))) {
            store.users[next] = JSON.parse(JSON.stringify(guest));
          }
        }
        save();
      }
      if (user) {
        const md = user.user_metadata || {};
        profileName = ((md.full_name || md.name || "").split(/\s+/)[0]) || "";
        try {
          SH.sb && SH.sb.from("profiles").select("nickname").eq("id", user.id).maybeSingle()
            .then(r => { if (r && r.data && r.data.nickname) { profileName = r.data.nickname; render(); } });
        } catch (e) {}
      } else profileName = "";
      render();
    };
    document.addEventListener("sh-auth", apply);
    if (window.SH) apply();
  }
  const displayName = () => profileName || U().name || "";

  function reportCourse(card) {
    if (!C.reportCourseProgress || card.src !== "script" || !window.SH || !window.SH.saveCourseProgress) return;
    const ch = chapters.find(c => c.id === card.chapter); if (!ch || !ch.cards) return;
    const st = stats(ch.cards);
    try { window.SH.saveCourseProgress({ ["analysis-fc-k" + ch.id]: { done: st.mastered / st.total >= C.courseProgressThreshold } }); } catch (e) {}
  }

  /* ------------------------------------------------------------------ */
  /* Small UI helpers                                                    */
  /* ------------------------------------------------------------------ */
  function toast(msg) { const t = $("#fc-toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("show"), 2600); }
  function announce(msg) { $("#fc-live").textContent = msg; }
  function typeset(el) {
    const mj = window.MathJax;
    if (mj && typeof mj.typesetPromise === "function") { try { mj.typesetClear && mj.typesetClear([el]); mj.typesetPromise([el]).catch(() => {}); } catch (e) {} }
    else setTimeout(() => typeset(el), 300);
  }
  function bar(st, extra) {
    const g = st.total ? (100 * st.mastered / st.total) : 0, u = st.total ? (100 * st.unsure / st.total) : 0;
    const lab = L(st.mastered + " gewusst, " + st.unsure + " unsicher, " + (st.total - st.mastered - st.unsure) + " offen von " + st.total,
                  st.mastered + " mastered, " + st.unsure + " unsure, " + (st.total - st.mastered - st.unsure) + " open of " + st.total);
    return `<div class="fc-meter" title="${esc(lab)}"><div class="fc-bar" role="img" aria-label="${esc(lab)}"><span class="g" style="width:${g}%"></span><span class="u" style="width:${u}%"></span></div><span>${Math.round(g)} %${extra || ""}</span></div>`;
  }
  const chTitle = ch => (LANG === "de" ? "Kapitel " : "Chapter ") + ch.id + " – " + ch.title;
  function strip(html) { const d = document.createElement("div"); d.innerHTML = html; $$("svg,script,style", d).forEach(n => n.remove()); return (d.textContent || "").replace(/\s+/g, " ").trim(); }

  /* Icons: currentColor line drawings, one per chapter */
  const ICONS = {
    quantifiers: '<text x="6" y="31" font-size="22" font-family="Georgia,serif" fill="currentColor">∀</text><text x="22" y="31" font-size="22" font-family="Georgia,serif" fill="currentColor">∃</text>',
    supremum: '<line x1="3" y1="27" x2="37" y2="27" stroke="currentColor" stroke-width="2"/><path d="M8 22 V32 M8 22 H11 M8 32 H11" stroke="currentColor" stroke-width="2" fill="none"/><path d="M26 22 V32 M26 22 H23 M26 32 H23" stroke="currentColor" stroke-width="2" fill="none"/><line x1="11" y1="27" x2="23" y2="27" stroke="currentColor" stroke-width="4"/><text x="18" y="15" font-size="10" font-family="Georgia,serif" fill="currentColor">sup</text><line x1="26" y1="17" x2="26" y2="21" stroke="currentColor" stroke-width="1.6"/>',
    mapping: '<text x="2" y="27" font-size="15" font-family="Georgia,serif" font-style="italic" fill="currentColor">X</text><text x="28" y="27" font-size="15" font-family="Georgia,serif" font-style="italic" fill="currentColor">Y</text><path d="M13 22 H27 M23 18 L27 22 L23 26" stroke="currentColor" stroke-width="2" fill="none"/><text x="17" y="15" font-size="10" font-family="Georgia,serif" font-style="italic" fill="currentColor">f</text>',
    riemann: '<path d="M4 32 H36" stroke="currentColor" stroke-width="2"/><rect x="7" y="24" width="6" height="8" fill="currentColor" opacity=".35"/><rect x="13" y="18" width="6" height="14" fill="currentColor" opacity=".35"/><rect x="19" y="13" width="6" height="19" fill="currentColor" opacity=".35"/><rect x="25" y="10" width="6" height="22" fill="currentColor" opacity=".35"/><path d="M5 30 Q18 16 34 6" fill="none" stroke="currentColor" stroke-width="2"/>',
    ball: '<circle cx="20" cy="20" r="13" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/><circle cx="20" cy="20" r="2.5" fill="currentColor"/><line x1="20" y1="20" x2="31" y2="13" stroke="currentColor" stroke-width="1.6"/><text x="22" y="30" font-size="9" font-family="Georgia,serif" fill="currentColor">ε</text>',
    limit: '<line x1="4" y1="14" x2="36" y2="14" stroke="currentColor" stroke-width="1.6" stroke-dasharray="3 3"/><circle cx="7" cy="32" r="2" fill="currentColor"/><circle cx="13" cy="7" r="2" fill="currentColor"/><circle cx="19" cy="22" r="2" fill="currentColor"/><circle cx="25" cy="11" r="2" fill="currentColor"/><circle cx="30" cy="16" r="2" fill="currentColor"/><circle cx="34" cy="13.5" r="2" fill="currentColor"/>',
    series: '<text x="7" y="31" font-size="26" font-family="Georgia,serif" fill="currentColor">Σ</text><path d="M27 30 L30 24 L33 21 L36 20" fill="none" stroke="currentColor" stroke-width="2"/>',
    tangent: '<path d="M4 32 Q16 4 36 22" fill="none" stroke="currentColor" stroke-width="2"/><line x1="6" y1="12" x2="34" y2="15" stroke="currentColor" stroke-width="2"/><circle cx="19" cy="13.5" r="2.5" fill="currentColor"/>',
    ftc: '<text x="4" y="32" font-size="26" font-family="Georgia,serif" fill="currentColor">∫</text><text x="17" y="24" font-size="11" font-family="Georgia,serif" fill="currentColor">d/dx</text>',
    metric: '<circle cx="9" cy="28" r="3" fill="currentColor"/><circle cx="31" cy="12" r="3" fill="currentColor"/><line x1="11" y1="26" x2="29" y2="14" stroke="currentColor" stroke-width="2"/><text x="12" y="14" font-size="9" font-family="Georgia,serif" fill="currentColor">d(x,y)</text>',
    multi: '<path d="M5 33 L5 6 M5 33 L35 33 M5 33 L22 20" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M12 25 Q22 8 33 18" fill="none" stroke="currentColor" stroke-width="2"/>'
  };
  const icon = k => `<svg class="fc-ui" viewBox="0 0 40 40" aria-hidden="true">${ICONS[k] || ""}</svg>`;

  /* ------------------------------------------------------------------ */
  /* Router                                                              */
  /* ------------------------------------------------------------------ */
  function route() {
    const h = (location.hash || "#/").slice(1);
    const [path, qs] = h.split("?");
    const parts = path.split("/").filter(Boolean);
    return { parts, q: new URLSearchParams(qs || "") };
  }
  const go = h => { location.hash = h; };
  window.addEventListener("hashchange", () => { closeFinish(); render(true); });

  function renderNav(active) {
    const weakN = scriptCards.concat(lessonCards()).filter(c => isWeak(c.id)).length;
    const link = (h, key, label, badge) => `<a href="${h}"${active === key ? ' aria-current="page"' : ""}>${label}${badge ? `<span class="fc-badge" aria-label="${badge} ${L("schwache Karten", "weak cards")}">${badge}</span>` : ""}</a>`;
    $("#fc-nav").innerHTML =
      link("#/", "home", L("Übersicht", "Overview")) +
      link("#/kapitel", "chapters", L("Kapitel", "Chapters")) +
      link("#/proof-practice", "proof", L("Beweistraining", "Proof practice")) +
      link("#/weak", "weak", L("Schwache Karten", "Weak cards"), weakN || "") +
      `<span class="fc-lang" role="group" aria-label="Sprache / Language"><button data-lang="de" aria-pressed="${LANG === "de"}">DE</button><button data-lang="en" aria-pressed="${LANG === "en"}">EN</button></span>`;
    $$("#fc-nav [data-lang]").forEach(b => b.onclick = () => { LANG = b.dataset.lang; prefs().lang = LANG; document.documentElement.lang = LANG; save(); render(); });
  }
  function crumbs(items) {
    return `<nav class="fc-crumbs" aria-label="${L("Pfad", "Breadcrumb")}">` + items.map((it, i) => i < items.length - 1 ? `<a href="${it[1]}">${esc(it[0])}</a> › ` : `<span aria-current="page">${esc(it[0])}</span>`).join("") + `</nav>`;
  }

  let lastRouteKey = "";
  function render(fromHash) {
    if (!store) return;
    const r = route(), view = $("#fc-view");
    const key = location.hash;
    const p = r.parts;
    if (p[0] === "session" || (p.length >= 2 && p[p.length - 1] === "session")) { renderSession(r); }
    else if (p[0] && /^kapitel-\d+$/.test(p[0])) { renderNav("chapters"); renderChapter(parseInt(p[0].split("-")[1], 10)); }
    else if (p[0] === "kapitel") { renderNav("chapters"); renderChapterList(); }
    else if (p[0] === "proof-practice") { renderNav("proof"); renderProof(); }
    else if (p[0] === "weak") { renderNav("weak"); renderWeak(); }
    else { renderNav("home"); renderHome(); }
    if (fromHash && key !== lastRouteKey) { window.scrollTo(0, 0); view.focus({ preventScroll: true }); }
    lastRouteKey = key;
  }

  /* ------------------------------------------------------------------ */
  /* Home                                                                */
  /* ------------------------------------------------------------------ */
  function pickGreeting(si, st) {
    const name = displayName();
    const fill = t => name ? t.replace("{name}", name) : t.replace(/^\{name\}, (.)/, (m, c) => c.toUpperCase()).replace(/,? \{name\}/, "");
    const h = zHour(NOW()); const tags = [];
    if (h >= 5 && h < 11) tags.push("morning"); if (h >= 18 || h < 2) tags.push("evening");
    if (si.risk) tags.push("risk"); else if (si.cur >= 2) tags.push("streak");
    if (si.lostLen) tags.push("lost");
    if (si.lastDay && addDays(si.lastDay, 3) < dayKey(NOW())) tags.push("away");
    if (si.lastDay && !si.doneToday) tags.push("firstToday");
    if (st.mastered >= 25) tags.push("milestone");
    const pool = C.greetings[LANG].map((g, i) => Object.assign({ i }, g)).filter(g => !g.tag || tags.includes(g.tag));
    const tagged = pool.filter(g => g.tag), plain = pool.filter(g => !g.tag);
    const flags = U().flags; const lastI = flags.lastGreet;
    let cand = (tagged.length && Math.random() < .65 ? tagged : plain).filter(g => g.i !== lastI);
    if (!cand.length) cand = pool.filter(g => g.i !== lastI);
    const g = cand[Math.floor(Math.random() * cand.length)] || pool[0];
    flags.lastGreet = g.i; save();
    return esc(fill(g.t).replace("{streak}", si.cur).replace("{mastered}", st.mastered));
  }
  let greetCache = null;
  function flameSvg(cls) {
    return `<svg class="fc-ui fc-flame ${cls}" viewBox="0 0 76 92" aria-hidden="true"><g class="body"><path class="outer" d="M38 4 C46 22 64 30 64 56 C64 74 52 88 38 88 C24 88 12 74 12 56 C12 40 22 32 26 20 C30 30 34 34 36 34 C36 22 34 14 38 4 Z"/><path class="inner" d="M38 40 C44 50 52 56 52 66 C52 76 46 84 38 84 C30 84 24 76 24 66 C24 58 30 54 33 48 C35 54 37 56 38 56 C38 50 36 46 38 40 Z"/></g><circle class="spark" cx="18" cy="30" r="3"/><circle class="spark" cx="60" cy="24" r="2.5"/><circle class="spark" cx="50" cy="12" r="2"/></svg>`;
  }
  function streakPanel(si) {
    const flags = U().flags;
    let cls = "lvl" + si.level, msg = "", extra = "";
    if (!si.cur && !si.lastDay) { cls = "none"; msg = L("Bewerte heute eine Karte und starte deine Serie.", "Rate one card today to start your streak."); }
    else if (!si.cur && si.lostLen) {
      const lostKey = si.lastDay;
      cls = flags.lostSeen === lostKey ? "none" : "out";
      flags.lostSeen = lostKey; save();
      msg = L(`Deine Serie von ${si.lostLen} Tagen ist vorbei – kein Problem, heute beginnt eine neue.`, `Your ${si.lostLen}-day streak ended – no worries, a new one starts today.`);
    } else if (!si.cur) { cls = "none"; msg = L("Heute üben startet eine neue Serie.", "Practising today starts a new streak."); }
    else if (si.risk) {
      cls = "risk lvl" + si.level;
      const ms = msToZurichMidnight(NOW()); const hh = Math.floor(ms / 3600e3), mm = Math.floor(ms % 3600e3 / 60e3);
      msg = L(`Heute noch nicht geübt – noch ${hh} h ${mm} min bis Mitternacht.`, `Not practised today – ${hh} h ${mm} min left until midnight.`);
      extra = `<a class="fc-btn primary" href="#/session/rescue" style="margin-top:10px">${L("Streak retten", "Save your streak")} (${C.rescueSize})</a>`;
    } else if (si.doneToday) msg = L("Heute erledigt. Die Flamme brennt weiter!", "Done for today. The flame keeps burning!");
    else msg = L("Übe heute, um die Serie zu verlängern.", "Practise today to extend the streak.");
    const ms = C.milestones.filter(m => si.cur >= m && !(flags.milestones || []).includes(m));
    if (ms.length) { cls += " celebrate"; flags.milestones = (flags.milestones || []).concat(ms); save(); setTimeout(() => toast(L(`${ms[ms.length - 1]} Tage am Stück! ｡^‿^｡`, `${ms[ms.length - 1]} days in a row! ｡^‿^｡`)), 400); }
    return `<div class="fc-panel fc-streak" aria-label="${L("Serie", "Streak")}">${flameSvg(cls)}<div><strong>${si.cur} ${si.cur === 1 ? L("Tag", "day") : L("Tage", "days")}</strong>
      <div class="fc-streak-sub">${L("Längste Serie", "Longest streak")}: ${si.longest} · ${L("heute", "today")}: ${si.today} ${L("Karten", "cards")}</div>
      <div class="${si.risk ? "fc-risk" : "fc-streak-sub"}" role="${si.risk ? "alert" : "status"}">${msg}</div>${extra}</div></div>`;
  }
  const MONTHS = () => LANG === "de" ? ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"] : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  // Range of the heatmap: Nov 1 – end of Feb of the current exam season; Mar–Oct: the last 4 months.
  function heatRange(today) {
    const y = +today.slice(0, 4), m = +today.slice(5, 7), from = C.heatmapFromMonth || 11, to = C.heatmapToMonth || 2;
    const pad = n => String(n).padStart(2, "0");
    const lastDay = (yy, mm) => addDays(`${mm === 12 ? yy + 1 : yy}-${pad(mm === 12 ? 1 : mm + 1)}-01`, -1);
    const inSeason = from > to ? (m >= from || m <= to) : (m >= from && m <= to);
    if (inSeason) { const sy = from > to && m <= to ? y - 1 : y; return { start: `${sy}-${pad(from)}-01`, end: lastDay(from > to ? sy + 1 : sy, to) }; }
    const sm = m - 3 > 0 ? m - 3 : m + 9, sy = m - 3 > 0 ? y : y - 1;
    return { start: `${sy}-${pad(sm)}-01`, end: lastDay(y, m) };
  }
  function heatmap(si) {
    const cell = 14, gap = 3, today = dayKey(NOW()), { start: first, end } = heatRange(today);
    const dow = k => (new Date(k + "T12:00:00Z").getUTCDay() + 6) % 7;      // Monday = 0
    const start = addDays(first, -dow(first));
    const weeks = Math.ceil((dow(first) + (Date.parse(end) - Date.parse(first)) / 864e5 + 1) / 7);
    const max = Math.max(1, ...Object.values(si.counts));
    let cells = "", months = "", lastM = "";
    for (let w = 0; w < weeks; w++) for (let d = 0; d < 7; d++) {
      const k = addDays(start, w * 7 + d); if (k < first || k > end) continue;
      const x = 30 + w * (cell + gap), y = 18 + d * (cell + gap);
      if (k > today) { cells += `<rect class="fut" x="${x + .5}" y="${y + .5}" width="${cell - 1}" height="${cell - 1}" rx="3"/>`; }
      else {
        const n = si.counts[k] || 0; const lvl = n === 0 ? 0 : Math.min(4, 1 + Math.floor(3 * n / max));
        cells += `<rect class="d${lvl}${k === today ? " today" : ""}" x="${x}" y="${y}" width="${cell}" height="${cell}" rx="3"><title>${k}: ${n} ${L("Karten", "cards")}</title></rect>`;
      }
      const m = k.slice(5, 7); if (m !== lastM && (d === 0 || k === first)) { lastM = m; months += `<text x="${x}" y="11">${MONTHS()[parseInt(m, 10) - 1]}</text>`; }
    }
    const dn = LANG === "de" ? ["Mo", "", "Mi", "", "Fr", "", "So"] : ["Mon", "", "Wed", "", "Fri", "", "Sun"];
    const labels = dn.map((t, i) => t ? `<text x="0" y="${18 + i * (cell + gap) + 11}">${t}</text>` : "").join("");
    const W = 30 + weeks * (cell + gap), H = 18 + 7 * (cell + gap);
    const label = `${MONTHS()[+first.slice(5, 7) - 1]} ${first.slice(0, 4)} – ${MONTHS()[+end.slice(5, 7) - 1]} ${end.slice(0, 4)}`;
    return `<div class="fc-heatbox"><div class="fc-act-h">${label}</div><div class="fc-heat"><svg class="fc-ui" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${L("Aktivität", "Activity")} ${label}">${months}${labels}${cells}</svg></div>
      <div class="fc-legend">${L("weniger", "less")} <i style="background:var(--fc-heat-0)"></i><i style="background:var(--fc-heat-1)"></i><i style="background:var(--fc-heat-2)"></i><i style="background:var(--fc-heat-3)"></i><i style="background:var(--fc-heat-4)"></i> ${L("mehr", "more")}</div></div>`;
  }
  // Week view: cards per day Mon–Sun, stacked by rating; arrows browse earlier weeks.
  let weekOffset = 0;
  function weekView() {
    const today = dayKey(NOW()), dow = (new Date(today + "T12:00:00Z").getUTCDay() + 6) % 7;
    const mon = addDays(today, -dow - 7 * weekOffset), days = [...Array(7)].map((_, i) => addDays(mon, i));
    const per = {}; days.forEach(k => per[k] = { g: 0, u: 0, a: 0 });
    const prevMon = addDays(mon, -7); let prevTotal = 0;
    U().log.forEach(([t, , r]) => { const k = dayKey(t); if (per[k]) per[k][r] = (per[k][r] || 0) + 1; else if (k >= prevMon && k < mon) prevTotal++; });
    const tot = k => per[k].g + per[k].u + per[k].a, total = days.reduce((s, k) => s + tot(k), 0), active = days.filter(k => tot(k) > 0).length;
    const max = Math.max(5, ...days.map(tot));
    const W = 300, H = 170, base = 140, bw = 26, step = W / 7;
    let g = `<line class="base" x1="0" y1="${base}" x2="${W}" y2="${base}"/>`;
    const dn = LANG === "de" ? ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"] : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    days.forEach((k, i) => {
      const x = i * step + (step - bw) / 2; let y = base; const p = per[k];
      [["g", p.g], ["u", p.u], ["a", p.a]].forEach(([c, n]) => { if (!n) return; const h = (base - 18) * n / max; y -= h; g += `<rect class="${c}" x="${x}" y="${y}" width="${bw}" height="${h}" rx="3"><title>${dn[i]} ${k}: ${n} ${c === "g" ? L("gewusst", "got it") : c === "u" ? L("unsicher", "unsure") : L("nochmal", "again")}</title></rect>`; });
      if (k > today) g += `<rect class="fut" x="${x + .5}" y="${base - 6.5}" width="${bw - 1}" height="6" rx="3"/>`;
      if (tot(k)) g += `<text class="n" x="${x + bw / 2}" y="${y - 4}" text-anchor="middle">${tot(k)}</text>`;
      g += `<text class="${k === today ? "dl today" : "dl"}" x="${x + bw / 2}" y="${base + 16}" text-anchor="middle">${dn[i]}</text>`;
    });
    const range = `${+mon.slice(8)}.${+mon.slice(5, 7)}. – ${+days[6].slice(8)}.${+days[6].slice(5, 7)}.`;
    const title = weekOffset === 0 ? L("Diese Woche", "This week") : weekOffset === 1 ? L("Letzte Woche", "Last week") : L(`Vor ${weekOffset} Wochen`, `${weekOffset} weeks ago`);
    const diff = total - prevTotal, trend = prevTotal === 0 && total === 0 ? "" : `<span class="${diff >= 0 ? "up" : "down"}">${diff >= 0 ? "▲" : "▼"} ${Math.abs(diff)} ${L("zur Vorwoche", "vs. week before")}</span>`;
    return `<div class="fc-week"><div class="fc-week-head"><div><div class="fc-act-h">${title} · ${range}</div><div class="fc-week-sum"><strong>${total}</strong> ${L("Karten", "cards")} · ${active}/7 ${L("Tage aktiv", "days active")} ${trend}</div></div>
      <div class="fc-week-nav"><button type="button" class="fc-btn" data-week="1" aria-label="${L("Vorherige Woche", "Previous week")}">‹</button><button type="button" class="fc-btn" data-week="-1" aria-label="${L("Nächste Woche", "Next week")}" ${weekOffset === 0 ? "disabled" : ""}>›</button></div></div>
      <svg class="fc-ui" viewBox="0 0 ${W} ${H}" role="img" aria-label="${title}: ${total} ${L("Karten", "cards")}">${g}</svg>
      <div class="fc-legend"><i class="g"></i>${L("gewusst", "got it")} <i class="u"></i>${L("unsicher", "unsure")} <i class="a"></i>${L("nochmal", "again")}</div></div>`;
  }
  function wireWeek() {
    $$(".fc-week-nav button").forEach(b => b.onclick = () => { weekOffset = Math.max(0, weekOffset + (+b.dataset.week)); const box = $(".fc-week"); if (box) { box.outerHTML = weekView(); wireWeek(); } });
  }
  function radar(ch) {
    const data = ch.cats.map(cat => { const cards = ch.cards.filter(c => c.category === cat); const s = stats(cards); return { cat, v: s.total ? s.mastered / s.total : 0, n: s.total, m: s.mastered }; });
    const short = s => s.length > 30 ? s.slice(0, 29) + "…" : s;
    if (data.length < 3) {
      return `<div class="fc-subs">` + data.map(d => `<div><div class="fc-muted" style="font-size:13px;margin-bottom:4px">${esc(d.cat)}</div>${bar({ total: d.n, mastered: d.m, unsure: 0 })}</div>`).join("") + `</div>`;
    }
    const W = 640, H = 380, cx = W / 2, cy = H / 2 + 6, R = 130, n = data.length;
    const pt = (i, r) => [cx + r * Math.sin(2 * Math.PI * i / n), cy - r * Math.cos(2 * Math.PI * i / n)];
    let g = "";
    [.25, .5, .75, 1].forEach(f => { g += `<polygon class="grid" points="${data.map((_, i) => pt(i, R * f).join(",")).join(" ")}"/>`; });
    data.forEach((_, i) => { const [x, y] = pt(i, R); g += `<line class="axis" x1="${cx}" y1="${cy}" x2="${x}" y2="${y}"/>`; });
    g += `<polygon class="area" points="${data.map((d, i) => pt(i, R * Math.max(.02, d.v)).join(",")).join(" ")}"/>`;
    data.forEach((d, i) => {
      const [x, y] = pt(i, R * Math.max(.02, d.v)); g += `<circle class="dot" cx="${x}" cy="${y}" r="3.5"><title>${esc(d.cat)}: ${Math.round(100 * d.v)} % (${d.m}/${d.n})</title></circle>`;
      const [lx, ly] = pt(i, R + 18); const anchor = Math.abs(lx - cx) < 8 ? "middle" : lx > cx ? "start" : "end";
      g += `<text x="${lx}" y="${ly}" text-anchor="${anchor}">${esc(short(d.cat))}</text><text class="pct" x="${lx}" y="${ly + 13}" text-anchor="${anchor}">${Math.round(100 * d.v)} % · ${d.m}/${d.n}</text>`;
    });
    return `<svg class="fc-ui" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(chTitle(ch))}: ${L("Beherrschung pro Abschnitt", "mastery per section")}">${g}</svg>`;
  }
  function chapterBox(ch) {
    if (!ch.cards) return `<div class="fc-chapter disabled fc-t${(ch.id - 1) % 6 + 1}" aria-disabled="true"><div class="fc-icon course-icon">${icon(ch.icon)}</div><div class="fc-label">${esc(chTitle(ch))}</div><div class="fc-sub">${L("Noch keine Karten", "No cards yet")}</div></div>`;
    const st = stats(ch.cards);
    return `<a class="fc-chapter subject-card fc-t${(ch.id - 1) % 6 + 1}" href="#/kapitel-${ch.id}"><div class="fc-icon course-icon">${icon(ch.icon)}</div>${bar(st)}<div class="fc-label">${esc(chTitle(ch))}</div><div class="fc-sub">${st.total} ${L("Karten", "cards")}${st.weak ? " · " + st.weak + " " + L("schwach", "weak") : ""}</div></a>`;
  }
  function proofBox() {
    const cards = proofDeckAll(); const st = stats(cards);
    const lang = proofLang(); const state = lesson.state[lang];
    const counts = {}; cards.forEach(c => counts[c.type] = (counts[c.type] || 0) + 1);
    const lessons = new Set(cards.map(c => c.lesson)).size;
    const chips = ["def", "thm", "move", "recipe"].filter(t => counts[t]).map(t => `<span class="fc-chip">${typeLabel(t)} ${counts[t]}</span>`).join("");
    const sub = state === "ok" ? `${cards.length} ${L("Karten", "cards")} · ${lessons} ${L("Lektionen", "lessons")}` : state === "error" ? L("Nur im StudyHub verfügbar", "Only available inside StudyHub") : L("Wird geladen …", "Loading …");
    return `<a class="fc-chapter fc-proof subject-card fc-t3" href="#/proof-practice"><div class="fc-icon course-icon"><svg class="fc-ui" viewBox="0 0 40 40" aria-hidden="true"><rect x="11" y="11" width="18" height="18" rx="2" fill="currentColor"/></svg></div>
      <div><div class="fc-label">${L("Beweistraining", "Proof practice")}</div><div class="fc-sub">${L("Definitionen, Sätze, Kniffe und Rezepte aus den 22 Lektionen", "Definitions, theorems, moves and recipes from the 22 lessons")}</div><div class="fc-types">${chips}</div></div>
      <div style="min-width:200px">${bar(st)}<div class="fc-sub" style="margin-top:6px">${sub}</div></div></a>`;
  }
  function renderHome() {
    const si = streakInfo(), all = scriptCards.concat(lessonCards()), st = stats(all);
    const name = displayName();
    const greet = (greetCache && greetCache.uid === uid && greetCache.lang === LANG && greetCache.name === name) ? greetCache.html : (greetCache = { uid, lang: LANG, name, html: pickGreeting(si, st) }).html;
    const askName = !name && !(window.SH && window.SH.user);
    const lastS = U().lastSession;
    const top = all.filter(c => peek(c.id) && (peek(c.id).wrong + peek(c.id).unsure) > 0)
      .sort((a, b) => (peek(b.id).wrong * 2 + peek(b.id).unsure) - (peek(a.id).wrong * 2 + peek(a.id).unsure)).slice(0, 10);
    const a1 = chapters.filter(c => c.course === "A1"), a2 = chapters.filter(c => c.course === "A2");
    const withCards = chapters.filter(c => c.cards && c.cards.length);
    const tab = Math.max(0, withCards.findIndex(c => c.id === (prefs().radarTab || (withCards[0] || {}).id)));
    const rch = withCards[tab];
    const everReviewed = U().log.length > 0 || Object.keys(U().cards).length > 0;
    $("#fc-view").innerHTML = `
      <section class="fc-hero">
        <div class="fc-greet"><span class="fc-eyebrow">Analysis I · ${L("Lernkarten", "Flashcards")}</span><h1>${greet}</h1>
          ${askName ? `<form class="fc-namebox" id="fc-nameform"><label for="fc-name">${L("Wie heisst du?", "What's your name?")}</label><input id="fc-name" maxlength="30" autocomplete="given-name"><button class="fc-btn" type="submit">OK</button></form>`
                    : (!(window.SH && window.SH.user) ? `<a href="#/" role="button" class="fc-linkbtn" id="fc-rename">${L("Name ändern", "Change name")}</a>` : "")}
          <div class="fc-row">${lastS ? `<a class="fc-btn primary" href="${esc(lastS.hash)}">${L("Weiter, wo du aufgehört hast", "Continue where you left off")}</a>` : `<a class="fc-btn primary" href="#/kapitel-${(withCards[0] || {}).id || 1}">${L("Loslegen", "Start learning")}</a>`}
          <a class="fc-btn" href="#/weak">${L("Schwache Karten", "Weak cards")} (${st.weak})</a></div>
        </div>
        ${streakPanel(si)}
      </section>
      <section class="fc-section"><h2 class="fc-sr">${L("Statistik", "Stats")}</h2>
        <div class="fc-kpis stats-grid">
          <div class="stat k-total"><span>${L("Karten gesamt", "Total cards")}</span><strong>${st.total}</strong></div>
          <div class="stat k-good"><span>${L("Gewusst", "Mastered")}</span><strong>${st.mastered}</strong></div>
          <div class="stat k-unsure"><span>${L("Unsicher", "Unsure")}</span><strong>${st.unsure}</strong></div>
          <div class="stat k-weak"><span>${L("Schwach", "Weak")}</span><strong>${st.weak}</strong></div>
          <div class="stat k-today"><span>${L("Heute geübt", "Reviewed today")}</span><strong>${si.today}</strong></div>
        </div></section>
      <section class="fc-section"><h2>${L("Aktivität", "Activity")}</h2><div class="fc-panel">${everReviewed ? `<div class="fc-activity">${heatmap(si)}${weekView()}</div>` : `<div class="fc-empty"><span class="kao">(・ω・)ノ</span>${L("Hier erscheint deine Lern-Aktivität, sobald du die erste Karte bewertet hast.", "Your activity appears here once you rate your first card.")}</div>`}</div></section>
      <section class="fc-section"><h2>${L("Stärken pro Abschnitt", "Strength per section")}</h2><div class="fc-panel fc-radar">
        ${everReviewed && rch ? `<div class="fc-tabs" role="tablist">${withCards.map((c, i) => `<button role="tab" data-rt="${c.id}" aria-selected="${i === tab}">${L("Kap.", "Ch.")} ${c.id}</button>`).join("")}</div>${radar(rch)}`
          : `<div class="fc-empty"><span class="kao">(｀・ω・´)</span>${L("Die Netzdiagramme füllen sich, sobald du Karten bewertest.", "The radar charts fill up as you rate cards.")}</div>`}</div></section>
      <section class="fc-section"><h2>${L("Häufige Fehler & Unsicherheiten", "Repeated mistakes & doubts")}</h2>
        ${top.length ? `<ul class="fc-list">${top.map(c => { const s = peek(c.id); return `<li><a href="#/session/card/${encodeURIComponent(c.id)}"><span class="q">${esc(strip(c.front))}</span><span class="n">${s.wrong}× ${C.ratings.again.kaomoji} · ${s.unsure}× ${C.ratings.unsure.kaomoji}</span><span class="m">${esc(c.src === "script" ? "Kap. " + c.chapter + (c.category ? " · " + c.category : "") : L("Beweistraining · Lektion ", "Proof practice · Lesson ") + c.lesson)}</span></a></li>`; }).join("")}</ul>`
          : `<div class="fc-panel fc-empty"><span class="kao">｡^‿^｡</span>${L("Noch keine Fehler – oder du hast noch nicht angefangen.", "No mistakes yet – or you haven't started.")}</div>`}
      </section>
      <section class="fc-section"><h2>${L("Kapitel", "Chapters")} · Analysis I</h2><div class="fc-grid course-grid">${a1.map(chapterBox).join("")}${proofBox()}</div></section>
      ${a2.length ? `<section class="fc-section"><h2>Analysis II</h2><div class="fc-grid course-grid">${a2.map(chapterBox).join("")}</div></section>` : ""}
      ${footer()}`;
    $$("[data-rt]").forEach(b => b.onclick = () => { prefs().radarTab = parseInt(b.dataset.rt, 10); save(); render(); });
    const nf = $("#fc-nameform"); if (nf) nf.onsubmit = e => { e.preventDefault(); const v = $("#fc-name").value.trim(); if (v) { U().name = v; save(); greetCache = null; render(); } };
    const rn = $("#fc-rename"); if (rn) rn.onclick = e => { e.preventDefault(); const v = prompt(L("Dein Name:", "Your name:"), U().name || ""); if (v != null) { U().name = v.trim(); save(); greetCache = null; render(); } };
    wireFooter(); wireWeek();
    $$(".fc-list").forEach(typeset);
    if (lesson.state[proofLang()] === "idle") loadLessons(proofLang()).then(() => { if (route().parts.length === 0) render(); });
  }
  function footer() {
    return `<div class="fc-foot"><button class="fc-btn" id="fc-export">${L("Fortschritt exportieren", "Export progress")}</button>
      <label class="fc-btn" for="fc-import">${L("Importieren", "Import")}</label><input type="file" id="fc-import" accept="application/json" hidden>
      <span>${L("Karten von Kapitel 1–5 nach dem Skript von Einsiedler–Wieser; Fehler bitte immer mit dem Skript abgleichen.", "Chapter 1–5 cards follow the Einsiedler–Wieser script; always check against the script.")}</span>
      <a href="classic.html">${L("Alte Ansicht", "Classic view")}</a></div>`;
  }
  function wireFooter() {
    const ex = $("#fc-export"); if (ex) ex.onclick = () => {
      const blob = new Blob([JSON.stringify({ app: "studyhub-analysis-flashcards", v: C.schemaVersion, exported: new Date().toISOString(), data: U() }, null, 1)], { type: "application/json" });
      const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "analysis-lernkarten-" + dayKey(NOW()) + ".json"; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    };
    const im = $("#fc-import"); if (im) im.onchange = () => {
      const f = im.files[0]; if (!f) return; const rd = new FileReader();
      rd.onload = () => { try {
        const d = JSON.parse(rd.result).data; if (!d || !d.cards || !Array.isArray(d.log)) throw new Error("format");
        const u = U(); const seen = new Set(u.log.map(e => e.join("|")));
        d.log.forEach(e => { if (!seen.has(e.join("|"))) u.log.push(e); }); u.log.sort((a, b) => a[0] - b[0]);
        Object.keys(d.cards).forEach(id => { const a = u.cards[id], b = d.cards[id]; if (!a || (b.last || 0) > (a.last || 0)) u.cards[id] = b; });
        save(); toast(L("Import erfolgreich.", "Import complete.")); render();
      } catch (e) { toast(L("Diese Datei kann nicht importiert werden.", "This file cannot be imported.")); } };
      rd.readAsText(f);
    };
  }

  /* ------------------------------------------------------------------ */
  /* Chapter list and chapter page                                       */
  /* ------------------------------------------------------------------ */
  function renderChapterList() {
    const a1 = chapters.filter(c => c.course === "A1"), a2 = chapters.filter(c => c.course === "A2");
    $("#fc-view").innerHTML = crumbs([[L("Lernkarten", "Flashcards"), "#/"], [L("Kapitel", "Chapters"), ""]]) +
      `<h1>${L("Kapitel", "Chapters")}</h1><section class="fc-section"><div class="fc-grid course-grid">${a1.map(chapterBox).join("")}${proofBox()}</div></section>` +
      (a2.length ? `<section class="fc-section"><h2>Analysis II</h2><div class="fc-grid course-grid">${a2.map(chapterBox).join("")}</div></section>` : "");
    if (lesson.state[proofLang()] === "idle") loadLessons(proofLang()).then(() => { if (route().parts[0] === "kapitel") render(); });
  }
  function renderChapter(id) {
    const ch = chapters.find(c => c.id === id);
    if (!ch || !ch.cards) { $("#fc-view").innerHTML = crumbs([[L("Lernkarten", "Flashcards"), "#/"], [L("Kapitel", "Chapter") + " " + id, ""]]) + `<div class="fc-panel fc-empty"><span class="kao">(´･_･\`)</span>${L("Für dieses Kapitel gibt es noch keine Karten.", "There are no cards for this chapter yet.")}</div>`; return; }
    const st = stats(ch.cards);
    $("#fc-view").innerHTML = crumbs([[L("Lernkarten", "Flashcards"), "#/"], [L("Kapitel", "Chapter") + " " + ch.id, ""]]) +
      `<div class="fc-row" style="justify-content:space-between;align-items:flex-end"><div><span class="fc-muted">${L("Kapitel", "Chapter")} ${ch.id}</span><h1>${esc(ch.title)}</h1></div>
        <a class="fc-btn primary" href="#/kapitel-${ch.id}/session">${L("Ganzes Kapitel üben", "Practise whole chapter")} (${st.total})</a></div>
      <div class="fc-panel" style="margin-top:18px">${bar(st)}<p class="fc-muted" style="margin-top:8px">${st.mastered} ${L("gewusst", "mastered")} · ${st.unsure} ${L("unsicher", "unsure")} · ${st.weak} ${L("schwach", "weak")} · ${st.fresh} ${L("neu", "new")}</p></div>
      <section class="fc-section"><h2>${L("Abschnitte", "Sections")}</h2><div class="fc-subs">` +
      ch.cats.map((cat, i) => { const cards = ch.cards.filter(c => c.category === cat); const s = stats(cards);
        return `<div class="fc-sub-row"><h3>${esc(cat)}</h3>${bar(s)}<a class="fc-btn" href="#/kapitel-${ch.id}/${i + 1}/session">${L("Üben", "Practise")} (${s.total})</a></div>`; }).join("") +
      `</div></section>`;
  }

  /* ------------------------------------------------------------------ */
  /* Proof practice                                                      */
  /* ------------------------------------------------------------------ */
  function proofLang() { return (prefs().proof && prefs().proof.lang) || LANG; }
  function proofPrefs() {
    const p = prefs().proof || (prefs().proof = {});
    if (!p.from) { let r = null; try { r = JSON.parse(localStorage.getItem("fc-range")); } catch (e) {} p.from = (r && r.a) || 1; p.to = (r && r.b) || C.lessonCount; }
    if (!p.types) p.types = ["def", "thm", "move", "recipe"];
    return p;
  }
  function proofDeckAll() { return lesson[proofLang()] || []; }
  function proofDeck() { const p = proofPrefs(); return proofDeckAll().filter(c => c.lesson >= p.from && c.lesson <= p.to && p.types.includes(c.type)); }
  function renderProof() {
    const lang = proofLang(), p = proofPrefs();
    const head = crumbs([[L("Lernkarten", "Flashcards"), "#/"], [L("Beweistraining", "Proof practice"), ""]]) +
      `<h1>${L("Beweistraining", "Proof practice")}</h1><p class="fc-muted" style="margin:6px 0 18px">${L("Definitionen, Sätze, Kniffe und Rezepte aus den 22 Lektionen – in deiner Kartenumgebung.", "Definitions, theorems, moves and recipes from the 22 lessons – in your card environment.")}</p>`;
    if (lesson.state[lang] !== "ok") {
      $("#fc-view").innerHTML = head + `<div class="fc-panel fc-empty">${lesson.state[lang] === "error" ? `<span class="kao">(´･_･\`)</span>${L("Die Lektionskarten werden aus dem StudyHub geladen und sind nur dort verfügbar.", "The lesson cards are loaded from StudyHub and are only available there.")}` : L("Karten werden geladen …", "Loading cards …")}</div>`;
      if (lesson.state[lang] === "idle" || lesson.state[lang] === "loading") loadLessons(lang).then(() => { if (route().parts[0] === "proof-practice") render(); });
      return;
    }
    const deck = proofDeck(), st = stats(deck);
    const opts = Array.from({ length: C.lessonCount }, (_, i) => i + 1);
    $("#fc-view").innerHTML = head + `<div class="fc-panel fc-filters">
      <fieldset><legend>${L("Lektionen", "Lessons")}</legend>
        <label>${L("von", "from")} <select id="pp-from">${opts.map(i => `<option${i === p.from ? " selected" : ""}>${i}</option>`).join("")}</select></label>
        <label>${L("bis", "to")} <select id="pp-to">${opts.map(i => `<option${i === p.to ? " selected" : ""}>${i}</option>`).join("")}</select></label></fieldset>
      <fieldset><legend>${L("Kartentypen", "Card types")}</legend>${["def", "thm", "move", "recipe"].map(t => `<label><input type="checkbox" data-pt="${t}"${p.types.includes(t) ? " checked" : ""}> ${typeLabel(t)} (${proofDeckAll().filter(c => c.type === t && c.lesson >= p.from && c.lesson <= p.to).length})</label>`).join("")}</fieldset>
      <fieldset><legend>${L("Sprache der Karten", "Card language")}</legend>
        <label><input type="radio" name="pp-lang" value="en"${lang === "en" ? " checked" : ""}> English</label>
        <label><input type="radio" name="pp-lang" value="de"${lang === "de" ? " checked" : ""}> Deutsch</label></fieldset>
      <div>${bar(st)}</div>
      <div class="fc-row"><a class="fc-btn primary${deck.length ? "" : " disabled"}" href="#/proof-practice/session"${deck.length ? "" : ' aria-disabled="true"'}>${L("Starten", "Start")} (${deck.length} ${L("Karten", "cards")})</a></div>
      </div><p class="fc-muted" style="margin-top:14px;font-size:13px">${L("Die Karten stammen aus den StudyHub-Lektionen.", "These cards come from the StudyHub lessons.")}</p>`;
    $("#pp-from").onchange = e => { p.from = +e.target.value; if (p.to < p.from) p.to = p.from; save(); render(); };
    $("#pp-to").onchange = e => { p.to = +e.target.value; if (p.from > p.to) p.from = p.to; save(); render(); };
    $$("[data-pt]").forEach(cb => cb.onchange = () => { p.types = $$("[data-pt]").filter(x => x.checked).map(x => x.dataset.pt); save(); render(); });
    $$('[name="pp-lang"]').forEach(r => r.onchange = () => { p.lang = r.value; save(); render(); });
  }

  /* ------------------------------------------------------------------ */
  /* Weak cards                                                          */
  /* ------------------------------------------------------------------ */
  function weakPrefs() { return prefs().weak || (prefs().weak = { deck: "", type: "" }); }
  function weakDeck() {
    const w = weakPrefs();
    return scriptCards.concat(lessonCards()).filter(c => isWeak(c.id))
      .filter(c => !w.deck || c.deck === w.deck).filter(c => !w.type || c.type === w.type)
      .sort((a, b) => weakness(b.id) - weakness(a.id));
  }
  function renderWeak() {
    if (lesson.state[proofLang()] === "idle") loadLessons(proofLang()).then(() => { if (route().parts[0] === "weak") render(); });
    const w = weakPrefs(), deck = weakDeck();
    const decks = [["", L("Alle Decks", "All decks")]].concat(chapters.filter(c => c.cards).map(c => ["k" + c.id, L("Kapitel ", "Chapter ") + c.id]), [["proof", L("Beweistraining", "Proof practice")]]);
    const types = [["", L("Alle Typen", "All types")]].concat(Object.keys(TYPE_LABEL).map(t => [t, typeLabel(t)]));
    $("#fc-view").innerHTML = crumbs([[L("Lernkarten", "Flashcards"), "#/"], [L("Schwache Karten", "Weak cards"), ""]]) +
      `<h1>${L("Schwache Karten", "Weak cards")}</h1><p class="fc-muted" style="margin:6px 0 18px">${L(`Karten, die zuletzt „Nochmal“ oder „Unsicher“ waren oder in den letzten ${C.historyLength} Runden mindestens ${C.weakAgainCount}× „Nochmal“. Nach ${C.masteredAfter}× „Gewusst“ in Folge verschwinden sie.`, `Cards last rated "Again" or "Unsure", or "Again" at least ${C.weakAgainCount}× in the last ${C.historyLength} reviews. They leave after ${C.masteredAfter}× "Got it" in a row.`)}</p>
      <div class="fc-panel fc-filters"><div class="fc-row">
        <label>${L("Deck", "Deck")} <select id="wk-deck">${decks.map(d => `<option value="${d[0]}"${d[0] === w.deck ? " selected" : ""}>${esc(d[1])}</option>`).join("")}</select></label>
        <label>${L("Typ", "Type")} <select id="wk-type">${types.map(d => `<option value="${d[0]}"${d[0] === w.type ? " selected" : ""}>${esc(d[1])}</option>`).join("")}</select></label>
        <a class="fc-btn primary" href="#/weak/session"${deck.length ? "" : ' aria-disabled="true"'}>${L("Üben", "Practise")} (${deck.length})</a></div></div>
      ${deck.length ? `<ul class="fc-list" style="margin-top:16px">${deck.slice(0, 40).map(c => `<li><a href="#/session/card/${encodeURIComponent(c.id)}"><span class="q">${esc(strip(c.front))}</span><span class="n">${(peek(c.id).h || []).map(r => r === "g" ? "✓" : r === "u" ? "?" : "✗").join(" ")}</span><span class="m">${esc(c.src === "script" ? "Kap. " + c.chapter + (c.category ? " · " + c.category : "") : L("Beweistraining · Lektion ", "Proof practice · Lesson ") + c.lesson)} · ${typeLabel(c.type)}</span></a></li>`).join("")}</ul>`
        : `<div class="fc-panel fc-empty" style="margin-top:16px"><span class="kao">｡^‿^｡</span>${L("Keine schwachen Karten – stark!", "No weak cards – well done!")}</div>`}`;
    $$(".fc-list").forEach(typeset);
    $("#wk-deck").onchange = e => { w.deck = e.target.value; save(); render(); };
    $("#wk-type").onchange = e => { w.type = e.target.value; save(); render(); };
  }

  /* ------------------------------------------------------------------ */
  /* Session: the card environment                                       */
  /* ------------------------------------------------------------------ */
  let S = null;   // { key, title, crumbs, cards, idx, flipped, run: {id: r}, back }
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function sessionSpec(r) {
    const p = r.parts;
    const home = [L("Lernkarten", "Flashcards"), "#/"];
    if (p[0] && /^kapitel-\d+$/.test(p[0])) {
      const ch = chapters.find(c => c.id === parseInt(p[0].split("-")[1], 10)); if (!ch || !ch.cards) return null;
      const sec = p.length === 3 ? parseInt(p[1], 10) : 0; const cat = sec ? ch.cats[sec - 1] : null;
      return { cards: ch.cards.filter(c => !cat || c.category === cat), back: "#/kapitel-" + ch.id, order: true,
        crumbs: [home, [L("Kapitel ", "Chapter ") + ch.id, "#/kapitel-" + ch.id]].concat(cat ? [[cat, "#/kapitel-" + ch.id]] : []).concat([[L("Üben", "Practice"), ""]]),
        title: cat || chTitle(ch) };
    }
    if (p[0] === "proof-practice") return { cards: proofDeck(), back: "#/proof-practice", order: true, needsLessons: true,
      crumbs: [home, [L("Beweistraining", "Proof practice"), "#/proof-practice"], [L("Üben", "Practice"), ""]], title: L("Beweistraining", "Proof practice") };
    if (p[0] === "weak") return { cards: interleave(weakDeck()), back: "#/weak", order: false, needsLessons: true,
      crumbs: [home, [L("Schwache Karten", "Weak cards"), "#/weak"], [L("Üben", "Practice"), ""]], title: L("Schwache Karten", "Weak cards") };
    if (p[0] === "session" && p[1] === "rescue") {
      const due = scriptCards.concat(lessonCards()).filter(c => isWeak(c.id)).sort((a, b) => weakness(b.id) - weakness(a.id));
      const fresh = shuffle(scriptCards.filter(c => !peek(c.id)));
      return { cards: due.concat(fresh).slice(0, C.rescueSize), back: "#/", order: false,
        crumbs: [home, [L("Streak retten", "Save your streak"), ""]], title: L("Streak retten", "Save your streak") };
    }
    if (p[0] === "session" && p[1] === "card") {
      const id = decodeURIComponent(p.slice(2).join("/")); const c = byId.get(id);
      if (!c) return { cards: [], back: "#/", needsLessons: true, crumbs: [home, ["…", ""]], title: "" };
      return { cards: [c], back: "#/", order: true, crumbs: [home, [L("Einzelne Karte", "Single card"), ""]], title: c.title || "" };
    }
    return null;
  }
  function interleave(cards) {   // weakest first, but mixed across decks
    const groups = {}; cards.forEach(c => (groups[c.deck] = groups[c.deck] || []).push(c));
    const lists = Object.values(groups); const out = [];
    while (lists.some(l => l.length)) lists.forEach(l => { if (l.length) out.push(l.shift()); });
    return out;
  }
  const navKey = r => r.parts[0] === "weak" ? "weak" : r.parts[0] === "proof-practice" ? "proof" : r.parts[0] === "session" ? "home" : "chapters";
  function renderSession(r) {
    renderNav(navKey(r));
    const key = location.hash;
    if (!S || S.key !== key) {
      const spec = sessionSpec(r);
      if (spec && spec.needsLessons && lesson.state[proofLang()] !== "ok" && lesson.state[proofLang()] !== "error") {
        $("#fc-view").innerHTML = `<div class="fc-panel fc-empty">${L("Karten werden geladen …", "Loading cards …")}</div>`;
        loadLessons(proofLang()).then(() => { S = null; if (location.hash === key) render(); });
        if (r.parts[1] === "card") loadLessons(proofLang() === "en" ? "de" : "en");
        return;
      }
      if (!spec) { go("#/"); return; }
      const cards = spec.order && prefs().shuffle ? shuffle(spec.cards) : spec.cards.slice();
      S = Object.assign({ key, idx: 0, flipped: false, run: {} }, spec, { cards });
      U().lastSession = { hash: key, at: NOW() }; save();
    }
    const v = $("#fc-view");
    if (!S.cards.length) {
      v.innerHTML = crumbs(S.crumbs) + `<div class="fc-panel fc-empty"><span class="kao">｡^‿^｡</span>${L("Hier gibt es gerade keine Karten.", "There are no cards here right now.")}<div style="margin-top:14px"><a class="fc-btn" href="${S.back}">${L("Zurück", "Back")}</a></div></div>`;
      return;
    }
    v.innerHTML = crumbs(S.crumbs) + `<div class="fc-session">
      <div class="fc-toolbar">
        <button class="fc-btn${prefs().shuffle ? " on" : ""}" id="s-shuffle" aria-pressed="${!!prefs().shuffle}" title="${L("Reihenfolge mischen", "Shuffle order")}">🔀 ${L("Mischen", "Shuffle")}</button>
        <a class="fc-btn" href="${S.back}">${L("Beenden", "Finish")}</a>
      </div>
      <div class="fc-progress"><div class="lbl"><span>${L("Karte", "Card")} <b id="s-i"></b> ${L("von", "of")} ${S.cards.length}</span><span id="s-counts"></span></div><div class="fc-bar" id="s-bar"><span class="g"></span><span class="u"></span><span class="a"></span></div></div>
      <div class="fc-card-wrap"><div class="fc-card" id="s-card">
        <div class="fc-face front" id="s-front" role="button" tabindex="0" aria-label="${L("Karte umdrehen", "Flip card")}"><div class="fc-badges" id="s-bf"></div><div class="fc-ctitle" id="s-tf"></div><div class="fc-content" id="s-cf"></div><div class="fc-hint">${L("Klicken oder Leertaste zum Umdrehen", "Click or press space to flip")}</div><div class="fc-cmeta" id="s-mf"></div></div>
        <div class="fc-face back" id="s-back"><div class="fc-badges" id="s-bb"></div><div class="fc-ctitle" id="s-tb"></div><div class="fc-content" id="s-cb"></div>
          <button class="fc-explain-toggle" id="s-xt">💡 ${L("Erklärung & Beispiele (E)", "Explanation & examples (E)")}</button><div class="fc-explain" id="s-x"></div><div class="fc-cmeta" id="s-mb"></div></div>
      </div></div>
      <div class="fc-controls" id="s-cfront"><button class="fc-act prev" id="s-prev">← ${L("Zurück", "Back")}</button><button class="fc-act flip" id="s-flip">${L("Umdrehen", "Flip")}<small>${L("Leertaste", "Space")}</small></button></div>
      <div class="fc-controls" id="s-cback" hidden>
        <button class="fc-act again" data-r="a">${C.ratings.again.kaomoji} ${L(C.ratings.again.de, C.ratings.again.en)}<small>1 · ←</small></button>
        <button class="fc-act unsure" data-r="u">${C.ratings.unsure.kaomoji} ${L(C.ratings.unsure.de, C.ratings.unsure.en)}<small>2 · ↓</small></button>
        <button class="fc-act got" data-r="g">${C.ratings.got.kaomoji} ${L(C.ratings.got.de, C.ratings.got.en)}<small>3 · →</small></button></div>
      <p class="fc-kbd">${L("Tastatur: Leertaste umdrehen · 1/2/3 oder ←/↓/→ bewerten · E Erklärung · Esc beenden", "Keyboard: space flip · 1/2/3 or ←/↓/→ rate · E explanation · Esc finish")}</p></div>`;
    $("#s-shuffle").onclick = () => { prefs().shuffle = !prefs().shuffle; save(); const cur = S.cards[S.idx]; S.cards = prefs().shuffle ? shuffle(S.cards) : (sessionSpec(route()) || S).cards.slice(); S.idx = Math.max(0, S.cards.indexOf(cur)); render(); };
    $("#s-front").onclick = flip; $("#s-front").onkeydown = e => { if (e.key === "Enter") flip(); };
    $("#s-back").onclick = e => { if (e.target.closest("#s-xt,#s-x,a,button")) return; flip(); };
    $("#s-flip").onclick = flip; $("#s-prev").onclick = () => show(S.idx - 1);
    $("#s-xt").onclick = toggleExplain;
    $$("#s-cback [data-r]").forEach(b => b.onclick = () => doRate(b.dataset.r));
    show(S.idx);
  }
  function badges(c) {
    const t = c.type ? `<span class="fc-tag t-${esc(c.type)}">${esc(typeLabel(c.type))}</span>` : "";
    const where = c.src === "script" ? (c.category ? `<span class="fc-tag">${esc(c.category)}</span>` : "") : `<span class="fc-tag">${L("Lektion ", "Lesson ")}${c.lesson}</span>`;
    return t + where;
  }
  function show(i) {
    if (!S) return; S.idx = Math.max(0, Math.min(i, S.cards.length - 1)); S.flipped = false;
    const c = S.cards[S.idx];
    $("#s-card").classList.remove("flipped");
    $("#s-bf").innerHTML = badges(c) + `<span class="fc-tag side">${L("Frage", "Question")}</span>`;
    $("#s-bb").innerHTML = badges(c) + `<span class="fc-tag side">${L("Antwort", "Answer")}</span>`;
    const ttl = c.src === "script" ? c.title : "";
    $("#s-tf").innerHTML = ttl; $("#s-tb").innerHTML = ttl;
    $("#s-cf").innerHTML = c.front; $("#s-cb").innerHTML = c.back;
    $("#s-cb").classList.toggle("left", c.src === "lesson");
    $("#s-mf").innerHTML = c.meta || ""; $("#s-mb").innerHTML = c.meta || "";
    let x = "";
    if (c.explanation) x += `<div class="fc-xblock"><b>${L("Erklärung", "Explanation")}:</b><br>${c.explanation}</div>`;
    if (c.example) x += `<div class="fc-xblock ex"><b>${L("Beispiel", "Example")}:</b><br>${c.example}</div>`;
    if (c.counterexample) x += `<div class="fc-xblock cex"><b>${L("Gegenbeispiele", "Counterexamples")}:</b><br>${c.counterexample}</div>`;
    $("#s-x").innerHTML = x; $("#s-x").classList.remove("open"); $("#s-xt").hidden = !x;
    $("#s-i").textContent = S.idx + 1; $("#s-prev").disabled = S.idx === 0;
    $("#s-cfront").hidden = false; $("#s-cback").hidden = true;
    progress(); typeset($("#s-front")); typeset($("#s-back"));
  }
  function progress() {
    const v = Object.values(S.run), n = S.cards.length || 1;
    const g = v.filter(r => r === "g").length, u = v.filter(r => r === "u").length, a = v.filter(r => r === "a").length;
    $("#s-counts").innerHTML = `<span title="${L("gewusst", "got it")}">${C.ratings.got.kaomoji} ${g}</span> · <span title="${L("unsicher", "unsure")}">${C.ratings.unsure.kaomoji} ${u}</span> · <span title="${L("nochmal", "again")}">${C.ratings.again.kaomoji} ${a}</span>`;
    const b = $("#s-bar"); b.children[0].style.width = 100 * g / n + "%"; b.children[1].style.width = 100 * u / n + "%"; b.children[2].style.width = 100 * a / n + "%";
  }
  function flip() {
    if (!S) return; S.flipped = !S.flipped;
    $("#s-card").classList.toggle("flipped", S.flipped);
    $("#s-cfront").hidden = S.flipped; $("#s-cback").hidden = !S.flipped;
    announce(S.flipped ? L("Antwort", "Answer") : L("Frage", "Question"));
    if (S.flipped) $("#s-cback .got").focus({ preventScroll: true });
  }
  function toggleExplain() { if (!S || !S.flipped || $("#s-xt").hidden) return; $("#s-x").classList.toggle("open"); typeset($("#s-x")); }
  function doRate(r) {
    if (!S || !S.flipped) return;
    const c = S.cards[S.idx]; rate(c, r); S.run[c.id] = r;
    announce(L({ a: "Nochmal", u: "Unsicher", g: "Gewusst" }[r], { a: "Again", u: "Unsure", g: "Got it" }[r]));
    renderNav(navKey(route()));
    if (S.idx < S.cards.length - 1) show(S.idx + 1); else { progress(); finish(); }
  }
  function finish() {
    const v = Object.values(S.run); const g = v.filter(r => r === "g").length, u = v.filter(r => r === "u").length, a = v.filter(r => r === "a").length;
    const perfect = !a && !u;
    $("#fc-finish-h").textContent = perfect ? L("Perfekt!", "Perfect!") : L("Durchgang beendet!", "Round complete!");
    $("#fc-finish-kao").textContent = perfect ? C.finishKaomoji.perfect : C.finishKaomoji.mixed;
    $("#fc-finish-stats").innerHTML = `<div class="g"><b>${g}</b>${L("gewusst", "got it")}</div><div class="u"><b>${u}</b>${L("unsicher", "unsure")}</div><div class="a"><b>${a}</b>${L("nochmal", "again")}</div>`;
    $("#fc-finish-text").innerHTML = perfect ? L("Alle Karten sitzen! ｡^‿^｡", "Every card sticks! ｡^‿^｡") : L(`<b>${a + u}</b> Karte(n) möchten nochmal geübt werden.`, `<b>${a + u}</b> card(s) want another round.`);
    const btns = $("#fc-finish-btns"); btns.innerHTML = "";
    if (!perfect) { const b = document.createElement("button"); b.className = "fc-btn primary"; b.textContent = L("Falsche Karten wiederholen", "Repeat the missed cards"); b.onclick = () => { const miss = S.cards.filter(c => S.run[c.id] && S.run[c.id] !== "g"); S.cards = prefs().shuffle ? shuffle(miss) : miss; S.run = {}; S.idx = 0; closeFinish(); render(); }; btns.appendChild(b); }
    const again = document.createElement("button"); again.className = "fc-btn"; again.textContent = L("Deck neu starten", "Restart deck"); again.onclick = () => { S = null; closeFinish(); render(); }; btns.appendChild(again);
    const back = document.createElement("a"); back.className = "fc-btn"; back.href = S.back; back.textContent = L("Zur Übersicht", "Back to overview"); back.onclick = () => closeFinish(); btns.appendChild(back);
    $("#fc-finish").classList.add("open"); (btns.firstChild || back).focus();
  }
  function closeFinish() { $("#fc-finish").classList.remove("open"); }

  document.addEventListener("keydown", e => {
    if (e.target.matches && e.target.matches("input,select,textarea")) return;
    if ($("#fc-finish").classList.contains("open")) { if (e.key === "Escape") closeFinish(); return; }
    if (!S || !$("#s-card")) return;
    if (e.key === "Escape") { go(S.back); return; }
    if (e.code === "Space") { if (e.target.tagName === "BUTTON" && e.target.id !== "s-flip") return; e.preventDefault(); flip(); return; }
    if (e.key === "e" || e.key === "E") { toggleExplain(); return; }
    if (!S.flipped) { if (e.key === "ArrowLeft") show(S.idx - 1); return; }
    const m = { "1": "a", ArrowLeft: "a", "2": "u", ArrowDown: "u", "3": "g", ArrowRight: "g" }[e.key];
    if (m) { e.preventDefault(); doRate(m); }
  });

  /* ------------------------------------------------------------------ */
  /* Start                                                               */
  /* ------------------------------------------------------------------ */
  function start() {
    loadStore(); U(); initLang(); migrateLegacy(); hookAccount(); render(true);
    window.addEventListener("storage", e => { if (e.key === C.storageKey) { loadStore(); render(); } });
  }
  window.__fc = { stats, isWeak, isMastered, streakInfo, rate: (id, r) => rate(byId.get(id), r), store: () => store, chapters, lesson, loadLessons, render };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", start) : start();
})();
