/* =========================================================================
   Lernkarten – the subjects (shared by the start page and every subject page)
   A new subject = one entry here + its folder (index.html, config, decks).
   Each subject gets its own flame colour: the flame colour of a chemical
   element in the flame test. `flame.outer` / `flame.inner` tint the streak
   card, the match and the thermometer liquid on the start page; `palette`
   colours the flame creature (fc/flame.js: glow, outer layer top/mid/base,
   middle layer, inner core); `thoughts` is what the creature thinks about.
   Unused colours for future subjects are listed below.
   ========================================================================= */
window.FC_SUBJECTS = [
  {
    id: "analysis",
    title: "Analysis I",
    path: "analysis/",
    storageKey: "studyhub-analysis-flashcards-v1",
    element: { de: "Calcium", en: "calcium" },
    flame: { outer: "#e2571e", inner: "#ffb877" },
    palette: { fg: "#ff9a5a", fo: "#c63c12", fo2: "#e2571e", fo3: "#a9300c", fm: "#f2782e", fm2: "#ec6824",
               fi: "#ffb877", fi2: "#ff9d55", fc0: "#fff8ef", fc1: "#ffdcb5" },
    dailyGoal: 20,
    /* what the creature thinks about when left alone (short; plain Unicode, no MathJax) */
    thoughts: {
      de: ["∀ε > 0 ∃δ > 0 …", "e = lim (1 + 1/n)ⁿ", "|x + y| ≤ |x| + |y|", "√2 ∉ ℚ", "Σ 1/n divergiert!", "Σ 1/n² = π²/6",
           "exp(x + y) = exp(x)·exp(y)", "sin² x + cos² x = 1", "monoton + beschränkt ⇒ konvergent", "Bolzano–Weierstrass!",
           "sup oder max?", "Cauchy-Folge …", "f′(x) = lim (f(x+h) − f(x))/h", "∫ₐᵇ f′(x) dx = f(b) − f(a)", "e^(iπ) + 1 = 0"],
      en: ["∀ε > 0 ∃δ > 0 …", "e = lim (1 + 1/n)ⁿ", "|x + y| ≤ |x| + |y|", "√2 ∉ ℚ", "Σ 1/n diverges!", "Σ 1/n² = π²/6",
           "exp(x + y) = exp(x)·exp(y)", "sin² x + cos² x = 1", "monotone + bounded ⇒ convergent", "Bolzano–Weierstrass!",
           "sup or max?", "a Cauchy sequence …", "f′(x) = lim (f(x+h) − f(x))/h", "∫ₐᵇ f′(x) dx = f(b) − f(a)", "e^(iπ) + 1 = 0"]
    }
  },
  {
    id: "linalg",
    title: "Lineare Algebra I",
    path: "linalg/",
    storageKey: "studyhub-linalg-flashcards-v1",
    element: { de: "Kalium", en: "potassium" },
    flame: { outer: "#8a52dc", inner: "#d9bdff" },
    palette: { fg: "#c49bff", fo: "#6a36bf", fo2: "#8a52dc", fo3: "#56289f", fm: "#a274ee", fm2: "#9463e6",
               fi: "#d9bdff", fi2: "#c4a0fb", fc0: "#fdfaff", fc1: "#efe3ff" },
    dailyGoal: 20,
    /* notation as in the script: Rang(φ), Ker(φ), A^t, B_V, x_i^*, δ_i^j, V**, M_{m×n}(K) */
    thoughts: {
      de: ["Rang(φ) + dim(Ker(φ)) = dim(V)", "Rang(φ*) = Rang(φ)", "xᵢ*(xⱼ) = δᵢʲ", "Ã_φ = B_W · A_φ · B_V⁻¹", "V ≅ V** (dim(V) < ∞)",
           "Basis = linear unabhängig + erzeugend", "Steinitz!", "1 + 1 = 0 in 𝔽₂", "⟨M⟩: der kleinste Unterraum ⊇ M", "(AB)ᵗ = Bᵗ Aᵗ",
           "Hom(V, W) ≅ M_{m×n}(K)", "V/U …", "Ker(φ) = {0} ⇔ φ injektiv", "0 · v = 0", "Ist das ein Unterraum?"],
      en: ["Rang(φ) + dim(Ker(φ)) = dim(V)", "Rang(φ*) = Rang(φ)", "xᵢ*(xⱼ) = δᵢʲ", "Ã_φ = B_W · A_φ · B_V⁻¹", "V ≅ V** (dim(V) < ∞)",
           "basis = linearly independent + spanning", "Steinitz!", "1 + 1 = 0 in 𝔽₂", "⟨M⟩: the smallest subspace ⊇ M", "(AB)ᵗ = Bᵗ Aᵗ",
           "Hom(V, W) ≅ M_{m×n}(K)", "V/U …", "Ker(φ) = {0} ⇔ φ injective", "0 · v = 0", "Is that a subspace?"]
    }
  },
  {
    id: "physik",
    title: "Physik I",
    path: "physik/",
    storageKey: "studyhub-physik-flashcards-v1",
    element: { de: "Kupfer", en: "copper" },
    flame: { outer: "#0f9f6e", inner: "#8ff0c4" },
    palette: { fg: "#5fdcaa", fo: "#0b7a55", fo2: "#0f9f6e", fo3: "#08603f", fm: "#2bb884", fm2: "#1fab78",
               fi: "#8ff0c4", fi2: "#6ee3b0", fc0: "#f4fffa", fc1: "#d4f9e8" },
    dailyGoal: 20,
    /* notation as in the script (Ensslin, Physik I): p = mv, F = dp/dt, ω₀, Q, pV = NkT */
    thoughts: {
      de: ["F = dp/dt", "actio = reactio", "E = ½mv² + V(r)", "L = r × p", "ω₀ = √(k/m)", "T² ∝ a³", "I = I_S + m d²",
           "a_Z = v²/r", "F_C = −2m ω × v'", "pV = N k T", "η = 1 − T₂/T₁", "dS ≥ δQ/T", "⟨E_kin⟩ = 3/2 kT", "F = −∇V", "Resonanz!"],
      en: ["F = dp/dt", "actio = reactio", "E = ½mv² + V(r)", "L = r × p", "ω₀ = √(k/m)", "T² ∝ a³", "I = I_S + m d²",
           "a_c = v²/r", "F_C = −2m ω × v'", "pV = N k T", "η = 1 − T₂/T₁", "dS ≥ δQ/T", "⟨E_kin⟩ = 3/2 kT", "F = −∇V", "Resonance!"]
    }
  }
];

/* CSS custom properties for a subject's flame (used inline by the start page and fc/app.js) */
window.FC_FLAME_STYLE = function (s) {
  const v = ["--fc-flame-outer:" + s.flame.outer, "--fc-flame-inner:" + s.flame.inner];
  Object.keys(s.palette || {}).forEach(k => v.push("--sf-" + k + ":" + s.palette[k]));
  return v.join(";");
};

/* Free flame colours for further subjects (flame test), outer / inner:
   Strontium rot        #e0243a / #ffb0a3
   Cäsium/Indium blau   #3d63f2 / #b9ccff
   Natrium gelb         #f0b400 / #fff1a1
   Lithium karmin       #c0144f / #f7b6cf
   Barium hellgrün      #7fbf12 / #e2f7b4 */
