/* =========================================================================
   Lernkarten – the subjects (shared by the start page and every subject page)
   A new subject = one entry here + its folder (index.html, config, decks).
   Each subject gets its own flame colour: the flame colour of a chemical
   element in the flame test. `flame.outer` / `flame.inner` tint the streak
   card, the match and the thermometer liquid on the start page; `palette`
   colours the flame creature (the ten gradient stops of fc/app.js flameSvg:
   glow, outer tongues top/mid/base, middle layer, inner layer, core).
   Unused colours for future subjects are listed below.
   ========================================================================= */
window.FC_SUBJECTS = [
  {
    id: "analysis",
    title: "Analysis I",
    path: "analysis/",
    storageKey: "studyhub-analysis-flashcards-v1",
    element: { de: "Kupfer", en: "copper" },
    flame: { outer: "#0f9f6e", inner: "#8ff0c4" },
    palette: { fg: "#5be3b0", fo: "#0b7a55", fo2: "#0f9f6e", fo3: "#08694a", fm: "#22c48a", fm2: "#13b07a",
               fi: "#8ff0c4", fi2: "#5fe0a8", fc0: "#f4fff9", fc1: "#c8fbe3" },
    dailyGoal: 20
  },
  {
    id: "linalg",
    title: "Lineare Algebra I",
    path: "linalg/",
    storageKey: "studyhub-linalg-flashcards-v1",
    element: { de: "Strontium", en: "strontium" },
    flame: { outer: "#e0243a", inner: "#ffb0a3" },
    palette: { fg: "#ff7a7a", fo: "#b5121f", fo2: "#e0243a", fo3: "#a10f1b", fm: "#f2464f", fm2: "#e8323f",
               fi: "#ff9d8f", fi2: "#ff7b6e", fc0: "#fff6f3", fc1: "#ffd3c9" },
    dailyGoal: 20
  }
];

/* CSS custom properties for a subject's flame (used inline by the start page and fc/app.js) */
window.FC_FLAME_STYLE = function (s) {
  const v = ["--fc-flame-outer:" + s.flame.outer, "--fc-flame-inner:" + s.flame.inner];
  Object.keys(s.palette || {}).forEach(k => v.push("--sf-" + k + ":" + s.palette[k]));
  return v.join(";");
};

/* Free flame colours for further subjects (flame test), outer / inner:
   Cäsium/Indium blau   #3d63f2 / #b9ccff
   Kalium lila          #9b4ef0 / #e6d2ff
   Natrium gelb         #f0b400 / #fff1a1
   Calcium orange       #f2701c / #ffd0a6
   Lithium karmin       #c0144f / #f7b6cf
   Barium hellgrün      #7fbf12 / #e2f7b4 */
