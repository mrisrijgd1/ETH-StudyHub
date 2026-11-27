/* =========================================================================
   Lineare Algebra I – Lernkarten: configuration (loaded by linalg/index.html)
   Same engine as Analysis (fc/app.js); everything subject-specific is here.
   Chapters follow the lecture notes of Prof. Dr. Lorenz Halbeisen, HS 2026
   (Vorlesungsnotizen bis KW 47). Chapter 0 = the KW-38 section
   "Bekannte Beispiele alg. Strukturen". Decks: linalg/data_kapitel<N>.js.
   ========================================================================= */
window.FC_CONFIG = {
  subjectId: "linalg",           // entry in fc/subjects.js (flame colour, start page)
  storageKey: "studyhub-linalg-flashcards-v1",
  schemaVersion: 1,

  subject: "Lineare Algebra I",
  courses: [{ id: "LA1", title: "Lineare Algebra I" }],
  proofPractice: false,          // the hub's proof lessons belong to Analysis
  legacyPrefix: null,            // no older Lineare-Algebra app to migrate from
  courseProgressPrefix: "linalg-fc-k",
  exportApp: "studyhub-linalg-flashcards",
  exportFile: "linalg-lernkarten-",
  classicLink: null,
  footerNote: {
    de: "Karten nach den Vorlesungsnotizen Lineare Algebra I (Halbeisen, HS 2026) und den Musterlösungen der Serien 0–8; Beispiele ergänzt aus Stammbach, Lineare Algebra. Fehler bitte immer mit dem Skript abgleichen.",
    en: "Cards follow the Linear Algebra I lecture notes (Halbeisen, HS 2026) and the model solutions of problem sets 0–8, with extra examples from Stammbach, Lineare Algebra. Always check against the script."
  },

  /* Script chapters. Titles exactly as in the lecture notes. */
  chapters: [
    { id: 0,  title: "Bekannte Beispiele alg. Strukturen", titleEn: "Familiar examples of algebraic structures", course: "LA1", icon: "groupop" },
    { id: 1,  title: "Die Sprache der Mathematik", titleEn: "The language of mathematics", course: "LA1", icon: "quantifiers" },
    { id: 2,  title: "Einfache Beweise", titleEn: "Simple proofs", course: "LA1", icon: "axioms" },
    { id: 3,  title: "Definitionen und Beispiele", titleEn: "Definitions and examples", course: "LA1", icon: "vectors" },
    { id: 4,  title: "Basen und Dimension", titleEn: "Bases and dimension", course: "LA1", icon: "basis" },
    { id: 5,  title: "Unterräume, affine Räume, und Quotientenräume", titleEn: "Subspaces, affine spaces and quotient spaces", course: "LA1", icon: "subspace" },
    { id: 6,  title: "Der Dualraum", titleEn: "The dual space", course: "LA1", icon: "dual" },
    { id: 7,  title: "Der Vektorraum Hom(V, W)", titleEn: "The vector space Hom(V, W)", course: "LA1", icon: "matrix" },
    { id: 8,  title: "Basiswechsel", titleEn: "Change of basis", course: "LA1", icon: "basischange" },
    { id: 9,  title: "Der Bidualraum und die duale Abbildung", titleEn: "The bidual space and the dual map", course: "LA1", icon: "transpose" },
    { id: 10, title: "Kern, Bild und Rang einer linearen Abbildung", titleEn: "Kernel, image and rank of a linear map", course: "LA1", icon: "kernel" }
  ],

  /* Mastery and streak rules */
  masteredAfter: 2,          // last N ratings "got" = mastered
  weakAgainCount: 2,         // ≥ N "again" in the last 5 = weak
  historyLength: 5,          // ratings kept per card
  streakMinReviews: 1,       // reviews per day that keep the streak alive
  streakRiskHour: 18,        // Europe/Zurich: after this hour without a review the streak is "at risk"
  streakLevels: [3, 7, 30],  // flame grows at these lengths
  milestones: [7, 30, 100],  // celebrated once each
  rescueSize: 10,            // cards in "Streak retten"
  restoreSize: 10,           // the match (Streichholz): cards to practise to restore a streak after ONE missed day
  restoreCooldownDays: 7,    // a used match grows back after this many days
  timeZone: "Europe/Zurich",
  // Activity heatmap: the exam season Nov–Feb (month numbers). Outside it (Mar–Oct) the last 4 months are shown.
  heatmapFromMonth: 11,
  heatmapToMonth: 2,

  /* Hub course progress (SH.saveCourseProgress). Off until the hub owner approves the keys. */
  reportCourseProgress: false,
  courseProgressThreshold: 0.8,

  /* Comments under each card → StudyHub forum (see fc/config.js). Own topics: fc-linalg-k<N>. */
  comments: {
    enabled: true,
    topicPrefix: "fc-linalg-",
    maxLength: 2000,
    notifyUrl: "",
    forumPage: { en: "../../../community.html", de: "../../../de/community.html" },
    accountPage: { en: "../../../account.html", de: "../../../de/account.html" },
    kinds: [
      { id: "example", de: "Beispiel", en: "Example", ph: ["Ein zusätzliches Beispiel oder Gegenbeispiel zu dieser Karte …", "An extra example or counterexample for this card …"] },
      { id: "wish",    de: "Wunsch",   en: "Wish",    ph: ["Was würde dir bei dieser Karte helfen?", "What would make this card more helpful?"] },
      { id: "unclear", de: "Unklarheit", en: "Unclear", ph: ["Was ist unklar oder vielleicht falsch?", "What is unclear or maybe wrong?"] }
    ]
  },

  /* Rating buttons, in my app's kaomoji style */
  ratings: {
    again:  { kaomoji: "(´･_･`)", de: "Nochmal",  en: "Again" },
    unsure: { kaomoji: "(・_・;)", de: "Unsicher", en: "Unsure" },
    got:    { kaomoji: "｡^‿^｡",   de: "Gewusst",  en: "Got it" }
  },
  finishKaomoji: { perfect: "｡^‿^｡", mixed: "( ദ്ദി ˙ᗜ˙ )" },

  /* Greeting pool. {name} is replaced. Tags pick the context; untagged lines are always possible. */
  greetings: {
    de: [
      { t: "Hi {name}, schön, dass du wieder da bist!" },
      { t: "Hallo {name}! Bereit für ein paar Karten?" },
      { t: "Willkommen zurück, {name}. Heute ein kleines Stück weiter?" },
      { t: "Hi {name}! Fünf Minuten reichen schon für einen Unterschied." },
      { t: "Da bist du ja, {name}! Die Karten haben auf dich gewartet." },
      { t: "Hey {name}, lass uns ein paar Basen austauschen." },
      { t: "Schön dich zu sehen, {name}. ∀ Tage ∃ eine gute Karte." },
      { t: "Guten Morgen, {name}! Frischer Kopf, frische Karten.", tag: "morning" },
      { t: "Morgen, {name}! Kaffee und lineare Unabhängigkeit?", tag: "morning" },
      { t: "Guten Abend, {name}. Noch eine kurze Runde vor dem Schlafen?", tag: "evening" },
      { t: "Abendschicht, {name}? Ein paar Karten gehen immer.", tag: "evening" },
      { t: "Wow, {name}: {streak} Tage am Stück! Weiter so.", tag: "streak" },
      { t: "{streak} Tage in Folge, {name}. Die Flamme brennt!", tag: "streak" },
      { t: "{name}, deine Flamme hat Hunger: ein paar Karten, und sie lodert!", tag: "risk" },
      { t: "Noch ein Sprint heute, {name}? Deine Flamme ist bereit.", tag: "risk" },
      { t: "Frischer Start, {name}: heute zündet Tag 1!", tag: "lost" },
      { t: "{name}, ein Tag Pause? Zünd dein Streichholz, und weiter geht's!", tag: "restore" },
      { t: "Nur ein Tag Pause, {name}: zünde das Streichholz und die Flamme brennt weiter.", tag: "restore" },
      { t: "Lange nicht gesehen, {name}! Fangen wir sanft wieder an.", tag: "away" },
      { t: "Willkommen zurück nach der Pause, {name}.", tag: "away" },
      { t: "Erster Besuch heute, {name}? Starte mit deinen schwachen Karten.", tag: "firstToday" },
      { t: "{mastered} Karten sitzen schon, {name}. Stark!", tag: "milestone" }
    ],
    en: [
      { t: "Hi {name}, good to see you back!" },
      { t: "Hello {name}! Ready for a few cards?" },
      { t: "Welcome back, {name}. A little further today?" },
      { t: "Hi {name}! Five minutes already make a difference." },
      { t: "There you are, {name}! The cards were waiting for you." },
      { t: "Hey {name}, let's exchange a few bases." },
      { t: "Good to see you, {name}. ∀ days ∃ a good card." },
      { t: "Good morning, {name}! Fresh mind, fresh cards.", tag: "morning" },
      { t: "Morning, {name}! Coffee and linear independence?", tag: "morning" },
      { t: "Good evening, {name}. One short round before bed?", tag: "evening" },
      { t: "Evening shift, {name}? A few cards always fit.", tag: "evening" },
      { t: "Wow, {name}: {streak} days in a row! Keep going.", tag: "streak" },
      { t: "{streak} days straight, {name}. The flame is burning!", tag: "streak" },
      { t: "{name}, your flame is hungry: a few cards and it blazes!", tag: "risk" },
      { t: "One more sprint today, {name}? Your flame is ready.", tag: "risk" },
      { t: "Fresh start, {name}: day 1 ignites today!", tag: "lost" },
      { t: "{name}, took a day off? Strike your match and off you go!", tag: "restore" },
      { t: "Just one day off, {name}: light the match and the flame keeps burning.", tag: "restore" },
      { t: "Long time no see, {name}! Let's start gently.", tag: "away" },
      { t: "Welcome back after the break, {name}.", tag: "away" },
      { t: "First visit today, {name}? Start with your weak cards.", tag: "firstToday" },
      { t: "{mastered} cards already stick, {name}. Strong!", tag: "milestone" }
    ]
  }
};
