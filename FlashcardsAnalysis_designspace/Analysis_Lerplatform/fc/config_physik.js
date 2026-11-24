/* =========================================================================
   Physik I – Lernkarten: configuration (loaded by physik/index.html)
   Same engine as Analysis and Lineare Algebra (fc/app.js).
   Chapters follow the script "Physik I" (Prof. K. Ensslin, ETH Zürich, HS 2025;
   original script by Prof. W. Fetscher). Kapitel 11–14 are the script's appendices.
   Decks: physik/data_kapitel<N>.js. Extra card fields used here: derivation
   (commented steps, <ol class="fc-steps">) and pitfalls (typical mistakes).
   ========================================================================= */
window.FC_CONFIG = {
  subjectId: "physik",           // entry in fc/subjects.js (flame colour, start page)
  storageKey: "studyhub-physik-flashcards-v1",
  schemaVersion: 1,

  subject: "Physik I",
  courses: [{ id: "P1", title: "Physik I" }, { id: "P1A", title: "Anhänge und Zusatzabschnitte" }],
  proofPractice: false,          // the hub's proof lessons belong to Analysis
  legacyPrefix: null,
  courseProgressPrefix: "physik-fc-k",
  exportApp: "studyhub-physik-flashcards",
  exportFile: "physik-lernkarten-",
  classicLink: null,
  leftBack: true,                // answers with equations and lists read better left-aligned
  chronoFileOrder: true,         // "chronologisch" = section, then file order (the decks follow the script)
  footerNote: {
    de: "Karten nach dem Skript Physik I (Ensslin, ETH Zürich, HS 2025; Originalskript Fetscher). Typische Prüfungsaufgaben und Ausblicke auf Physik II sind als „Ergänzung“ gekennzeichnet. Fehler bitte immer mit dem Skript abgleichen.",
    en: "Cards follow the Physik I script (Ensslin, ETH Zurich, HS 2025; original script by Fetscher). Typical exam problems and outlooks on Physik II are marked „Ergänzung“ (supplement). Always check against the script."
  },

  /* Script chapters. Titles exactly as in the script. */
  chapters: [
    { id: 1,  title: "Einleitung", course: "P1", icon: "units" },
    { id: 2,  title: "Kinematik des Massenpunktes", course: "P1", icon: "trajectory" },
    { id: 3,  title: "Dynamik des Massenpunktes", course: "P1", icon: "newton" },
    { id: 4,  title: "Arbeit und Energie", course: "P1", icon: "energy" },
    { id: 5,  title: "Drehbewegungen", course: "P1", icon: "rotation" },
    { id: 6,  title: "Vielteilchensysteme", course: "P1", icon: "manybody" },
    { id: 7,  title: "Gravitationstheorie", course: "P1", icon: "orbit" },
    { id: 8,  title: "Dynamik des starren Körpers", course: "P1", icon: "rigidbody" },
    { id: 9,  title: "Schwingungen", course: "P1", icon: "oscillation" },
    { id: 10, title: "Wärmelehre und Thermodynamik", course: "P1", icon: "thermo" },
    { id: 11, title: "Anhang: Differential- und Integralrechnung, Vektoren", course: "P1A", icon: "vectorcalc" },
    { id: 12, title: "Anhang: Differentialgleichungen", course: "P1A", icon: "ode" },
    { id: 13, title: "Zusatzabschnitt: Kreiselbewegung", course: "P1A", icon: "gyro" },
    { id: 14, title: "Zusatzabschnitt: Statistische Mechanik", course: "P1A", icon: "maxwell" }
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

  /* Comments under each card → StudyHub forum. Own topics: fc-physik-k<N>. */
  comments: {
    enabled: true,
    topicPrefix: "fc-physik-",
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
      { t: "Hey {name}, F = dp/dt – lass uns ein bisschen Schwung holen." },
      { t: "Schön dich zu sehen, {name}. ∀ Tage ∃ eine gute Karte." },
      { t: "Guten Morgen, {name}! Frischer Kopf, frische Karten.", tag: "morning" },
      { t: "Morgen, {name}! Kaffee, Energieerhaltung und los.", tag: "morning" },
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
      { t: "Hey {name}, F = dp/dt – let's build some momentum." },
      { t: "Good to see you, {name}. ∀ days ∃ a good card." },
      { t: "Good morning, {name}! Fresh mind, fresh cards.", tag: "morning" },
      { t: "Morning, {name}! Coffee, energy conservation and off we go.", tag: "morning" },
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
