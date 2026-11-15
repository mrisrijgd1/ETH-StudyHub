/* =========================================================================
   Analysis I – Lernkarten: configuration
   Everything that is meant to be tuned lives here: chapters, icons,
   thresholds, kaomojis and the greeting pool.
   ========================================================================= */
window.FC_CONFIG = {
  storageKey: "studyhub-analysis-flashcards-v1",
  schemaVersion: 1,

  /* Script chapters. Titles exactly as in the script (00_Titel_Vorwort_Inhalt.pdf).
     A chapter becomes active as soon as window.FLASHCARDS_KAPITEL_<id> exists
     (add the data file and one <script> tag in index.html). */
  chapters: [
    { id: 1,  title: "Einführung", course: "A1", icon: "quantifiers" },
    { id: 2,  title: "Die reellen Zahlen", course: "A1", icon: "supremum" },
    { id: 3,  title: "Funktionen und die reellen Zahlen", course: "A1", icon: "mapping" },
    { id: 4,  title: "Das Riemann-Integral", course: "A1", icon: "riemann" },
    { id: 5,  title: "Metrische Räume, Folgen und Stetigkeit", course: "A1", icon: "ball" },
    { id: 6,  title: "Grenzwerte reeller Folgen und Funktionen", course: "A1", icon: "limit" },
    { id: 7,  title: "Reihen, Funktionenfolgen und Potenzreihen", course: "A1", icon: "series" },
    { id: 8,  title: "Differentialrechnung", course: "A1", icon: "tangent" },
    { id: 9,  title: "Die Ableitung und das Riemann-Integral", course: "A1", icon: "ftc" },
    { id: 10, title: "Metrische Räume", course: "A2", icon: "metric" },
    { id: 11, title: "Mehrdimensionale Differentialrechnung", course: "A2", icon: "multi" }
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
  timeZone: "Europe/Zurich",
  // Activity heatmap: the exam season Nov–Feb (month numbers). Outside it (Mar–Oct) the last 4 months are shown.
  heatmapFromMonth: 11,
  heatmapToMonth: 2,

  /* Hub course progress (SH.saveCourseProgress). Off until the hub owner approves the keys. */
  reportCourseProgress: false,
  courseProgressThreshold: 0.8,

  /* Proof practice: the hub's lesson cards. Read from these pages until a JSON export exists. */
  lessonSources: { en: "../../flashcards.html", de: "../../de/flashcards.html" },
  lessonCount: 22,

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
      { t: "Hey {name}, lass uns ein paar Beweise festnageln." },
      { t: "Schön dich zu sehen, {name}. ∀ Tage ∃ eine gute Karte." },
      { t: "Guten Morgen, {name}! Frischer Kopf, frische Karten.", tag: "morning" },
      { t: "Morgen, {name}! Kaffee und ε-δ?", tag: "morning" },
      { t: "Guten Abend, {name}. Noch eine kurze Runde vor dem Schlafen?", tag: "evening" },
      { t: "Abendschicht, {name}? Ein paar Karten gehen immer.", tag: "evening" },
      { t: "Wow, {name}: {streak} Tage am Stück! Weiter so.", tag: "streak" },
      { t: "{streak} Tage in Folge, {name}. Die Flamme brennt!", tag: "streak" },
      { t: "{name}, deine Serie wartet: eine Karte reicht, um sie zu retten.", tag: "risk" },
      { t: "Achtung {name}, die Flamme flackert! Kurz üben?", tag: "risk" },
      { t: "Neue Serie, neues Glück, {name}. Heute ist Tag 1.", tag: "lost" },
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
      { t: "Hey {name}, let's nail down a few proofs." },
      { t: "Good to see you, {name}. ∀ days ∃ a good card." },
      { t: "Good morning, {name}! Fresh mind, fresh cards.", tag: "morning" },
      { t: "Morning, {name}! Coffee and ε-δ?", tag: "morning" },
      { t: "Good evening, {name}. One short round before bed?", tag: "evening" },
      { t: "Evening shift, {name}? A few cards always fit.", tag: "evening" },
      { t: "Wow, {name}: {streak} days in a row! Keep going.", tag: "streak" },
      { t: "{streak} days straight, {name}. The flame is burning!", tag: "streak" },
      { t: "{name}, your streak is waiting: one card saves it.", tag: "risk" },
      { t: "Careful {name}, the flame is flickering! Quick practice?", tag: "risk" },
      { t: "New streak, new luck, {name}. Today is day 1.", tag: "lost" },
      { t: "Long time no see, {name}! Let's start gently.", tag: "away" },
      { t: "Welcome back after the break, {name}.", tag: "away" },
      { t: "First visit today, {name}? Start with your weak cards.", tag: "firstToday" },
      { t: "{mastered} cards already stick, {name}. Strong!", tag: "milestone" }
    ]
  }
};
