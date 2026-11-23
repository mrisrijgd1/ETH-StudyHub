/* ==========================================================================
   FLASHCARDS KAPITEL 7: Reihen, Funktionenfolgen und Potenzreihen
   Analysis I - Prof. Dr. Manfred Einsiedler
   ========================================================================== */

window.FLASHCARDS_KAPITEL_7 = [
  // ========================================================================
  // 7.1 REIHEN
  // ========================================================================
  {
    id: "k7_def_7_1",
    title: "Definition 7.1 & Proposition 7.2: Reihen und Nullfolgen",
    category: "7.1 Reihen",
    type: "definition",
    front: "Wann heisst eine <b>Reihe</b> $\\sum_{k=1}^\\infty a_k$ konvergent (Definition 7.1), und was besagt <b>Proposition 7.2</b> über die Glieder?",
    back: "Für eine Folge $(a_k)_k$ in $\\mathbb{R}$ oder $\\mathbb{C}$ ist $s_n = \\sum_{k=1}^n a_k$ die $n$-te <b>Partialsumme</b>. Die Reihe $\\sum_{k=1}^\\infty a_k$ heisst <b>konvergent</b>, falls der Grenzwert<br>$$\\sum_{k=1}^\\infty a_k = \\lim_{n\\to\\infty} s_n$$<br>existiert (dieser heisst dann <b>Wert</b> der Reihe); sonst <b>divergent</b>.<br><br><b>Proposition 7.2:</b> Konvergiert $\\sum_{k=1}^\\infty a_k$, so ist $(a_n)_n$ eine <b>Nullfolge</b>: $\\lim_{n\\to\\infty} a_n = 0$.",
    meta: "Skript: Definition 7.1 & Proposition 7.2",
    explanation: "Eine Reihe IST die Folge ihrer Partialsummen - vor dem Konvergenznachweis ist $\\sum_{k=1}^\\infty a_k$ nur ein formales Objekt, keine Zahl. <b>Beweis von Prop. 7.2:</b> $a_n = s_n - s_{n-1} \\to S - S = 0$. Als Kontraposition ist das der schnellste Divergenztest: Glieder keine Nullfolge $\\Rightarrow$ Reihe divergent.",
    example: "$\\sum_{k=1}^\\infty \\frac{1}{k(k+1)} = \\sum_k \\big(\\tfrac1k - \\tfrac{1}{k+1}\\big)$ hat die Teleskop-Partialsummen $s_n = 1 - \\tfrac{1}{n+1} \\to 1$ - konvergent mit Wert $1$.",
    counterexample: "<b>1.</b> $\\sum_{n=1}^\\infty (-1)^n$ divergiert, denn $((-1)^n)_n$ ist keine Nullfolge (die Partialsummen springen zwischen $-1$ und $0$).<br><b>2.</b> Die <b>Umkehrung von Prop. 7.2 ist falsch</b>: Die harmonische Reihe $\\sum \\tfrac1n$ hat Nullfolgen-Glieder und divergiert trotzdem (Beispiel 7.4) - 'Glieder gegen 0' ist notwendig, nie hinreichend!"
  },
  {
    id: "k7_bsp_7_3_7_4",
    title: "Beispiele 7.3 & 7.4: Geometrische und harmonische Reihe",
    category: "7.1 Reihen",
    type: "beispiel",
    front: "Für welche $q$ konvergiert die <b>geometrische Reihe</b>, und warum divergiert die <b>harmonische Reihe</b>?",
    back: "<b>Geometrische Reihe (Beispiel 7.3):</b> $\\sum_{n=0}^\\infty q^n$ konvergiert für $q \\in \\mathbb{C}$ <b>genau dann, wenn $|q| < 1$</b>, und dann gilt<br>$$\\sum_{k=0}^\\infty q^k = \\frac{1}{1-q}$$<br>(geometrische Summenformel $s_n = \\frac{1 - q^{n+1}}{1-q}$ plus $q^{n+1} \\to 0$; für $|q| \\ge 1$ sind die Glieder keine Nullfolge).<br><br><b>Harmonische Reihe (Beispiel 7.4):</b> $\\sum_{k=1}^\\infty \\tfrac1k$ ist divergent: Für $n = 2^\\ell$ gilt durch Blockbildung<br>$$\\sum_{k=1}^{2^\\ell} \\frac1k \\ge 1 + \\frac{\\ell}{2}$$<br>(jeder Block $\\tfrac{1}{2^{j}+1} + \\dots + \\tfrac{1}{2^{j+1}}$ trägt mindestens $\\tfrac12$ bei) - die Partialsummen sind unbeschränkt, $\\sum_{n=1}^\\infty \\tfrac1n = \\infty$.",
    meta: "Skript: Beispiele 7.3 & 7.4 (und 7.5: harmonischer Springturm)",
    explanation: "Diese zwei Reihen sind die Eichmasse der ganzen Theorie: Die geometrische Reihe ist die Standard-Majorante (Wurzel-/Quotientenkriterium vergleichen heimlich mit ihr), die harmonische die Standard-Minorante für Divergenz. Beispiel 7.5: Weil $\\sum \\tfrac1k$ divergiert, kann man mit überkragenden Klötzen einen beliebig weit ausladenden 'Springturm' bauen.",
    example: "$\\sum_{k=0}^\\infty \\tfrac{1}{2^k} = \\frac{1}{1 - 1/2} = 2$; $\\sum_{k=0}^\\infty \\big(\\tfrac{i}{2}\\big)^k = \\frac{1}{1 - i/2} = \\frac{4 + 2i}{5}$ - auch komplexe $q$ sind erlaubt.",
    counterexample: "<b>1.</b> Bei $|q| = 1$ divergiert die geometrische Reihe immer - auch für $q = i$ oder $q = -1$ (Glieder keine Nullfolge); die Formel $\\frac{1}{1-q}$ wäre für $q = -1$ zwar definiert ($\\tfrac12$), gilt aber NICHT.<br><b>2.</b> 'Die Glieder werden doch winzig' rettet die harmonische Reihe nicht - sie wächst wie $\\log n$ langsam, aber unbeschränkt über jede Schranke."
  },
  {
    id: "k7_lemma_7_6_7_9",
    title: "Lemmata 7.6-7.9: Rechenregeln für Reihen",
    category: "7.1 Reihen",
    type: "lemma",
    front: "Welche Rechenregeln gelten für konvergente Reihen: <b>Linearität</b> (7.6), <b>Indexverschiebung</b> (7.8), <b>Zusammenfassen von Gliedern</b> (7.9)?",
    back: "&bull; <b>Linearität (Lemma 7.6):</b> Sind $\\sum a_k, \\sum b_k$ konvergent und $\\alpha \\in \\mathbb{C}$, so auch $\\sum(a_k + b_k)$ und $\\sum(\\alpha a_k)$ mit den erwarteten Werten - konvergente Reihen bilden einen Vektorraum, der Wert ist linear.<br>&bull; <b>Indexverschiebung (Lemma 7.8):</b> $\\sum_{k=N}^\\infty a_k$ konvergiert genau dann, wenn $\\sum_{k=1}^\\infty a_k$ konvergiert, mit $\\sum_{k=1}^\\infty a_k = \\sum_{k=1}^{N-1} a_k + \\sum_{k=N}^\\infty a_k$. <i>Endlich viele Glieder ändern das Konvergenzverhalten nie.</i><br>&bull; <b>Zusammenfassen (Lemma 7.9):</b> In einer konvergenten Reihe darf man benachbarte Glieder beliebig klammern ($A_k = a_{n_{k-1}+1} + \\dots + a_{n_k}$): $\\sum_k A_k = \\sum_n a_n$.",
    meta: "Skript: Lemmata 7.6, 7.8, 7.9 & Beispiel 7.10",
    explanation: "Alles folgt direkt aus den Grenzwertsätzen für die Partialsummenfolge; beim Klammern bilden die Partialsummen von $\\sum A_k$ eine <i>Teilfolge</i> der Partialsummen von $\\sum a_n$ (Lemma 5.39). Wichtig fürs Arbeiten: Konvergenz 'am Anfang kaputt machen' geht nicht - nur der Reihenschwanz zählt.",
    example: "$\\sum_{k=1}^\\infty \\big(\\tfrac{1}{2^k} + \\tfrac{3}{k(k+1)}\\big) = 1 + 3 \\cdot 1 = 4$ per Linearität.",
    counterexample: "<b>1.</b> Die Umkehrung von Lemma 7.9 ist falsch (Beispiel 7.10): $\\sum_n (-1)^n$ divergiert, aber geklammert $((-1) + 1) + ((-1) + 1) + \\dots = 0 + 0 + \\dots$ konvergiert - <b>Klammern darf man setzen, aber nicht weglassen!</b><br><b>2.</b> Linearität braucht Konvergenz BEIDER Reihen: $\\sum ((-1)^n + (-1)^{n+1}) = \\sum 0$ konvergiert, obwohl beide Summanden-Reihen divergieren - daraus lässt sich nichts über die Einzelreihen folgern."
  },
  {
    id: "k7_prop_7_11_kor_7_12",
    title: "Proposition 7.11 & Korollar 7.12: Nicht-negative Glieder & Vergleichssatz",
    category: "7.1 Reihen",
    type: "satz",
    front: "Was gilt für Reihen mit <b>nicht-negativen Gliedern</b> (Proposition 7.11), und wie lautet der <b>Vergleichssatz</b> (Korollar 7.12)?",
    back: "<b>Proposition 7.11:</b> Für $a_k \\ge 0$ sind die Partialsummen monoton wachsend. Sind sie beschränkt, konvergiert die Reihe; sonst schreibt man $\\sum_{k=1}^\\infty a_k = \\infty$. <i>(Für nicht-negative Reihen gibt es nur: konvergent oder $= \\infty$.)</i><br><br><b>Korollar 7.12 (Vergleichssatz):</b> Gilt $0 \\le a_k \\le b_k$ (für alle, oder alle hinreichend grossen $k$), so gilt $\\sum a_k \\le \\sum b_k$ und:<br>$$\\sum b_k \\text{ konvergent} \\implies \\sum a_k \\text{ konvergent}, \\qquad \\sum a_k \\text{ divergent} \\implies \\sum b_k \\text{ divergent}.$$<br>$\\sum b_k$ heisst <b>Majorante</b>, $\\sum a_k$ <b>Minorante</b>.",
    meta: "Skript: Proposition 7.11, Korollar 7.12, Beispiele 7.14/7.15",
    explanation: "Das ist Satz 6.5 (monotone Folgen) in Reihengestalt - der direkte Draht zur Vollständigkeit. In der Praxis kombiniert man den Vergleichssatz mit Asymptotik (Beispiel 7.15): Verhält sich $a_n$ wie $O(\\tfrac{1}{n^2})$, etwa $a_n = \\frac{2n-10}{n^3 - 10n + 100}$, so konvergiert $\\sum a_n$ per Vergleich mit $\\sum \\tfrac{M}{n^2}$. Beispiel 7.14: $\\sum \\tfrac{1}{k^2}$ konvergiert (z.B. via $\\tfrac{1}{k^2} \\le \\tfrac{1}{k(k-1)}$, Teleskop).",
    example: "$\\sum_{n=1}^\\infty \\frac{1}{n^2 + 3n} \\le \\sum \\frac{1}{n^2} < \\infty$ - konvergent per Majorante. $\\sum \\frac{1}{\\sqrt{n}} \\ge \\sum \\frac{1}{n} = \\infty$ - divergent per Minorante.",
    counterexample: "<b>1.</b> Ohne Nicht-Negativität ist der Vergleichssatz falsch (Übung 7.13): $a_k = -\\tfrac1k \\le b_k = 0$; $\\sum b_k = 0$ konvergiert, aber $\\sum a_k = -\\infty$ divergiert.<br><b>2.</b> Die Vergleichsrichtungen sind nicht umkehrbar: Aus '$\\sum a_k$ konvergent' folgt nichts über die grössere Reihe $\\sum b_k$ - Majorisieren hilft nur 'nach unten'."
  },
  {
    id: "k7_prop_7_16",
    title: "Proposition 7.16 & Beispiel 7.17: Verdichtung und p-Test",
    category: "7.1 Reihen",
    type: "proposition",
    front: "Was besagt das <b>Verdichtungskriterium</b> (Proposition 7.16), und wann konvergiert $\\sum \\frac{1}{n^p}$ (p-Test)?",
    back: "<b>Verdichtung:</b> Für eine Reihe $\\sum_{k=1}^\\infty a_k$ mit <i>nicht-negativen, monoton abnehmenden</i> Gliedern $a_1 \\ge a_2 \\ge \\dots \\ge 0$ gilt:<br>$$\\sum_{k=1}^\\infty a_k \\text{ konvergiert} \\iff \\sum_{k=1}^\\infty 2^k a_{2^k} \\text{ konvergiert.}$$<br><b>p-Test (Beispiel 7.17):</b> Für $p \\in \\mathbb{R}$:<br>$$\\sum_{n=1}^\\infty \\frac{1}{n^p} \\text{ konvergiert} \\iff p > 1.$$",
    meta: "Skript: Proposition 7.16 & Beispiel 7.17",
    explanation: "<b>Beweisidee:</b> Blockweise Abschätzung $2^n a_{2^{n+1}} \\le a_{2^n + 1} + \\dots + a_{2^{n+1}} \\le 2^n a_{2^n}$ - dieselbe Idee wie beim Divergenzbeweis der harmonischen Reihe, nun als allgemeines Kriterium. Für den p-Test: $\\sum 2^k \\cdot \\frac{1}{2^{kp}} = \\sum (2^{1-p})^k$ ist eine geometrische Reihe, konvergent genau für $2^{1-p} < 1$, also $p > 1$.",
    example: "$\\sum \\frac{1}{n^2}$ konvergiert ($p = 2$), $\\sum \\frac{1}{\\sqrt{n}}$ divergiert ($p = \\tfrac12$), die harmonische Reihe ist der Grenzfall $p = 1$ (divergent). Auch $\\sum \\frac{1}{n \\log n}$ behandelt man mit Verdichtung: $\\sum 2^k \\frac{1}{2^k \\cdot k\\log 2} = \\frac{1}{\\log 2}\\sum\\frac1k$ divergiert.",
    counterexample: "<b>1.</b> Ohne Monotonie ist die Verdichtung falsch: Setzt man $a_n = \\tfrac1n$ für Zweierpotenzen $n$ und $a_n = \\tfrac{1}{n^2}$ sonst, so 'sieht' $\\sum 2^k a_{2^k} = \\sum 1$ nur die schlechten Glieder - der Rückschluss scheitert, weil die Blöcke nicht mehr kontrolliert sind.<br><b>2.</b> $p = 1$ gehört NICHT zur Konvergenzseite - ein notorischer Fehler; auch $p$ knapp über 1 (z.B. $1{,}001$) konvergiert dagegen, nur sehr langsam."
  },
  {
    id: "k7_bedingt_7_20",
    title: "7.1.2 & Beispiel 7.20: Absolute vs. bedingte Konvergenz",
    category: "7.1 Reihen",
    type: "definition",
    front: "Wann heisst eine Reihe <b>absolut konvergent</b> bzw. <b>bedingt konvergent</b>? Zeige, dass die <b>alternierende harmonische Reihe</b> bedingt konvergiert.",
    back: "&bull; $\\sum_{n=1}^\\infty a_n$ heisst <b>absolut konvergent</b>, falls $\\sum_{n=1}^\\infty |a_n|$ konvergiert.<br>&bull; Sie heisst <b>bedingt konvergent</b>, falls sie konvergiert, aber nicht absolut konvergiert.<br><br><b>Beispiel 7.20:</b> Die alternierende harmonische Reihe $\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n} = 1 - \\tfrac12 + \\tfrac13 - \\dots$ konvergiert bedingt:<br>&bull; Nicht absolut, denn $\\sum |a_n| = \\sum \\tfrac1n = \\infty$.<br>&bull; Konvergent: $s_{2n} = \\sum_{k=1}^n \\frac{1}{2k(2k-1)} \\le \\sum \\tfrac{1}{k^2}$ ist monoton wachsend und beschränkt, und $s_{2n-1} = s_{2n} + \\tfrac{1}{2n}$ hat denselben Limes.",
    meta: "Skript: Abschnitt 7.1.2 & Beispiel 7.20",
    explanation: "Die Paarbildungs-Technik (gerade/ungerade Partialsummen gegeneinander ausspielen) ist der Kern des Leibniz-Kriteriums. Absolut konvergente Reihen sind 'robust' (Umordnen, Produkte erlaubt - Abschnitt 7.2), bedingt konvergente 'zerbrechlich' (Riemannscher Umordnungssatz!). Der Wert der alternierenden harmonischen Reihe ist übrigens $\\log 2$ (via Abelschem Grenzwertsatz, Beispiel 7.66).",
    example: "$\\sum \\frac{(-1)^n}{n^2}$ ist sogar absolut konvergent ($\\sum \\tfrac{1}{n^2} < \\infty$) - absolut konvergent $\\Rightarrow$ konvergent (Prop. 7.28), die Begriffe sind gestaffelt.",
    counterexample: "<b>1.</b> 'Konvergent' impliziert nicht 'absolut konvergent' - genau das zeigt $\\sum \\frac{(-1)^{n+1}}{n}$.<br><b>2.</b> Bei bedingt konvergenten Reihen darf man nicht asymptotisch nähern wie bei positiven Gliedern: $\\frac{(-1)^n}{\\sqrt{n}}$ und $\\frac{(-1)^n}{\\sqrt{n} + (-1)^n}$ 'verhalten sich gleich', aber die erste Reihe konvergiert und die zweite divergiert - Vorzeichenstruktur ist alles."
  },
  {
    id: "k7_satz_7_21",
    title: "Satz 7.21: Riemannscher Umordnungssatz",
    category: "7.1 Reihen",
    type: "satz",
    front: "Was besagt der <b>Riemannsche Umordnungssatz</b> über bedingt konvergente Reihen?",
    back: "Sei $\\sum_{n=1}^\\infty a_n$ eine <b>bedingt konvergente</b> Reihe mit reellen Gliedern. Dann gibt es zu <b>jedem</b> $A \\in \\mathbb{R}$ eine Umordnung (Bijektion) $\\varphi: \\mathbb{N} \\to \\mathbb{N}$, so dass<br>$$\\sum_{n=1}^\\infty a_{\\varphi(n)} = A$$<br>(bedingt konvergent). Weiter gibt es auch eine Umordnung, die <b>divergiert</b>.",
    meta: "Skript: Satz 7.21 & Beispiel 7.22",
    explanation: "<b>Warum das geht:</b> Bei bedingter Konvergenz divergieren die Teilreihen der positiven und der negativen Glieder beide (gegen $\\pm\\infty$), während die Glieder gegen 0 gehen. Man schöpft also abwechselnd: positive Glieder bis knapp über $A$, negative bis knapp unter $A$, usw. - jedes Ziel ist erreichbar. Beispiel 7.22: Ordnet man die alternierende harmonische Reihe als $1 - \\tfrac12 - \\tfrac14 + \\tfrac13 - \\tfrac16 - \\tfrac18 + \\dots$ um, erhält man genau den <i>halben</i> Wert.",
    example: "Kontrast: Für <b>absolut</b> konvergente Reihen ist jede Umordnung erlaubt und wertgleich (Satz 7.35) - die Kommutativität der Addition 'überlebt' den Grenzübergang nur bei absoluter Konvergenz.",
    counterexample: "<b>1.</b> Unendliche Summen sind NICHT automatisch kommutativ - die Intuition aus endlichen Summen bricht bei bedingter Konvergenz vollständig zusammen.<br><b>2.</b> Der Satz gilt nicht für absolut konvergente Reihen: $\\sum \\frac{(-1)^n}{2^n}$ lässt sich nicht auf einen anderen Wert umordnen - 'bedingt' ist eine wesentliche Voraussetzung."
  },
  {
    id: "k7_prop_7_25",
    title: "Proposition 7.25: Das Leibniz-Kriterium",
    category: "7.1 Reihen",
    type: "proposition",
    front: "Wie lautet das <b>Leibniz-Kriterium</b> für alternierende Reihen, inklusive <b>Fehlerabschätzung</b>?",
    back: "Sei $(a_n)_n$ eine <b>monoton fallende Folge positiver Zahlen mit $a_n \\to 0$</b>. Dann konvergiert die alternierende Reihe $\\sum_{k=1}^\\infty (-1)^{k+1} a_k$, und für alle $\\ell \\in \\mathbb{N}$ gilt die <b>Fehlerabschätzung</b><br>$$\\left|\\sum_{k=1}^{\\ell} (-1)^{k+1} a_k - \\sum_{k=1}^{\\infty} (-1)^{k+1} a_k\\right| \\le a_{\\ell+1}.$$<br>Zudem schachteln die Partialsummen den Wert ein: $s_{2n} \\le \\sum_{k=1}^\\infty (-1)^{k+1}a_k \\le s_{2n-1}$.",
    meta: "Skript: Proposition 7.25, Abschnitt 7.1.3",
    explanation: "<b>Beweisidee:</b> $(s_{2n})_n$ wächst, $(s_{2n-1})_n$ fällt, beide bleiben ineinander geschachtelt ('gegengerichtete Folgen', Übung 6.7) und ihr Abstand $a_{2n} \\to 0$. Die Fehlerschranke 'der Fehler ist höchstens das erste weggelassene Glied' macht das Kriterium auch numerisch wertvoll - und wird im Beweis von Satz 7.74 (Pi) zur Abschätzung von sin und cos benutzt.",
    example: "$\\sum \\frac{(-1)^{k+1}}{k}$ (alternierende harmonische Reihe) und $\\sum \\frac{(-1)^{k+1}}{\\sqrt{k}}$ konvergieren per Leibniz. Nach 100 Gliedern der ersten ist der Fehler $\\le \\frac{1}{101}$.",
    counterexample: "<b>1.</b> Ohne Monotonie scheitert das Kriterium: $a_{2k} = \\tfrac{1}{k}$, $a_{2k+1} = \\tfrac{1}{2^k}$ ist eine positive Nullfolge, aber die alternierende Reihe divergiert (die $\\tfrac1k$-Anteile akkumulieren sich wie die halbe harmonische Reihe).<br><b>2.</b> $a_n \\to 0$ ist unverzichtbar: $\\sum (-1)^{k+1} \\cdot 1$ divergiert - Monotonie allein ($1 \\ge 1 \\ge \\dots$) genügt nicht."
  },
  {
    id: "k7_satz_7_26",
    title: "Satz 7.26: Cauchy-Kriterium für Reihen",
    category: "7.1 Reihen",
    type: "satz",
    front: "Wie lautet das <b>Cauchy-Kriterium für Reihen</b> (Satz 7.26)?",
    back: "Die Reihe $\\sum_{k=1}^\\infty a_k$ konvergiert <b>genau dann</b>, wenn es zu jedem $\\varepsilon > 0$ ein $N \\in \\mathbb{N}$ gibt, so dass für alle $n \\ge m \\ge N$<br>$$\\left|\\sum_{k=m}^{n} a_k\\right| < \\varepsilon.$$<br><b>Beweis:</b> Das ist das Cauchy-Kriterium für Folgen (Satz 6.26), angewandt auf die Partialsummen: $s_n - s_{m-1} = \\sum_{k=m}^n a_k$.",
    meta: "Skript: Satz 7.26 & Beispiel 7.27, Abschnitt 7.1.4",
    explanation: "Alle 'Blöcke' später Glieder müssen klein werden - gleichgültig wie lang sie sind. Das Kriterium ist das Arbeitspferd des Kapitels: Es beweist Prop. 7.28 (absolut $\\Rightarrow$ konvergent), den Umordnungssatz 7.35 und steckt in jedem Konvergenzkriterium. Für $m = n$ enthält es Prop. 7.2 (Nullfolgen) als Spezialfall.",
    example: "Beispiel 7.27: Divergenz der harmonischen Reihe via Cauchy: Für $\\varepsilon = \\tfrac12$ und jedes $N$ ist $\\sum_{k=N+1}^{2N} \\tfrac1k \\ge N \\cdot \\tfrac{1}{2N} = \\tfrac12 \\not< \\varepsilon$ - das Kriterium scheitert.",
    counterexample: "<b>1.</b> Nur Blöcke fester Länge zu prüfen genügt NICHT: Bei $\\sum \\tfrac1k$ wird jeder Einzelblock $|a_m| = \\tfrac1m$ klein, lange Blöcke aber nicht - exakt der Fehler aus Beispiel 6.27 in Reihenform.<br><b>2.</b> In $\\mathbb{Q}$ wäre das Kriterium falsch (es beruht auf der Vollständigkeit von $\\mathbb{R}$) - z.B. konvergiert $\\sum \\tfrac{1}{k!}$ nach Cauchy in $\\mathbb{R}$ gegen $e - 1 \\notin \\mathbb{Q}$."
  },

  // ========================================================================
  // 7.2 ABSOLUTE KONVERGENZ
  // ========================================================================
  {
    id: "k7_prop_7_28",
    title: "Proposition 7.28: Absolute Konvergenz impliziert Konvergenz",
    category: "7.2 Absolute Konvergenz",
    type: "proposition",
    front: "Warum ist jede <b>absolut konvergente</b> Reihe konvergent, und welche Ungleichung gilt für ihren Wert?",
    back: "Eine absolut konvergente Reihe $\\sum_{n=1}^\\infty a_n$ ist konvergent, und es gilt die <b>verallgemeinerte Dreiecksungleichung</b><br>$$\\left|\\sum_{n=1}^\\infty a_n\\right| \\le \\sum_{n=1}^\\infty |a_n|.$$<br><b>Beweis:</b> Zweimal Cauchy-Kriterium: $\\big|\\sum_{k=m}^n a_k\\big| \\le \\sum_{k=m}^n |a_k| < \\varepsilon$; die Ungleichung folgt aus $|\\sum_{k=1}^n a_k| \\le \\sum_{k=1}^n |a_k|$ im Grenzübergang.",
    meta: "Skript: Proposition 7.28, Abschnitt 7.2",
    explanation: "Die endliche Dreiecksungleichung (Übung 3.4) überlebt den Grenzübergang. Strategisch wichtig: Konvergenzfragen für beliebige (auch komplexe) Reihen lassen sich damit auf Reihen mit <i>nicht-negativen</i> Gliedern zurückspielen, wo die komfortable Theorie aus 7.1.1 (Vergleich, Verdichtung) gilt.",
    example: "$\\sum \\frac{(-1)^n}{n^2}$ und $\\sum \\frac{i^n}{2^n}$ konvergieren absolut, also konvergent - ohne jede Vorzeichen- oder Phasendiskussion.",
    counterexample: "<b>1.</b> Die Umkehrung ist falsch: $\\sum \\frac{(-1)^{n+1}}{n}$ konvergiert, aber nicht absolut.<br><b>2.</b> Gleichheit in der Dreiecksungleichung ist selten: $\\big|\\sum \\frac{(-1)^{n+1}}{n^2}\\big| < \\sum \\frac{1}{n^2}$ strikt - Auslöschung macht den Wert kleiner als die 'Masse' der Reihe."
  },
  {
    id: "k7_kor_7_29",
    title: "Korollar 7.29: Majorantenkriterium von Weierstrass",
    category: "7.2 Absolute Konvergenz",
    type: "satz",
    front: "Wie lautet das <b>Majorantenkriterium von Weierstrass</b> (Korollar 7.29)?",
    back: "Sei $(a_n)_n$ eine komplexe und $(b_n)_n$ eine reelle Folge mit<br>$$|a_n| \\le b_n \\quad \\text{für alle hinreichend grossen } n.$$<br>Falls $\\sum_{n=1}^\\infty b_n$ konvergiert, dann ist $\\sum_{n=1}^\\infty a_n$ <b>absolut konvergent</b> (und daher konvergent).",
    meta: "Skript: Korollar 7.29",
    explanation: "Die komplexe Fassung des Vergleichssatzes: Beträge abschätzen, Korollar 7.12 anwenden, Prop. 7.28 nachschalten. Das Standardrezept lautet: Finde eine konvergente Vergleichsreihe (meist geometrisch oder $\\sum n^{-p}$, $p>1$) über den Gliedern. Wurzel- und Quotientenkriterium sind nur systematisierte Majorantenvergleiche mit der geometrischen Reihe.",
    example: "$\\sum_{n=1}^\\infty \\frac{e^{in\\theta}}{n^2}$: Wegen $\\big|\\frac{e^{in\\theta}}{n^2}\\big| = \\frac{1}{n^2}$ absolut konvergent für jedes $\\theta \\in \\mathbb{R}$ - die Grundlage für gleichmässig konvergente Funktionenreihen.",
    counterexample: "<b>1.</b> Eine <i>divergente</i> Majorante beweist nichts: $|a_n| \\le \\tfrac1n$ lässt beides zu ($a_n = \\tfrac1n$ divergent, $a_n = \\tfrac{1}{n^2}$ konvergent).<br><b>2.</b> Die Schranke muss die <i>Beträge</i> kontrollieren: $a_n \\le b_n$ allein (ohne Betrag) genügt nicht - $a_n = -1 \\le b_n = \\tfrac{1}{n^2}$, aber $\\sum a_n$ divergiert."
  },
  {
    id: "k7_kor_7_30",
    title: "Korollar 7.30: Das Wurzelkriterium",
    category: "7.2 Absolute Konvergenz",
    type: "satz",
    front: "Wie lautet das <b>Cauchy-Wurzelkriterium</b> (Korollar 7.30), und was gilt im Fall $\\alpha = 1$?",
    back: "Sei $(a_n)_n$ eine Folge komplexer Zahlen und<br>$$\\alpha = \\limsup_{n\\to\\infty} \\sqrt[n]{|a_n|} \\in \\mathbb{R} \\cup \\{\\infty\\}.$$<br>Dann gilt:<br>$$\\alpha < 1 \\implies \\sum_{n=1}^\\infty a_n \\text{ ist absolut konvergent}$$<br>$$\\alpha > 1 \\implies \\sum_{n=1}^\\infty a_n \\text{ ist divergent (Glieder keine Nullfolge).}$$<br><b>$\\alpha = 1$: keine Aussage möglich</b> (Beispiel 7.31).",
    meta: "Skript: Korollar 7.30 & Beispiel 7.31",
    explanation: "<b>Beweis:</b> Für $\\alpha < 1$ ist $|a_k| < q^k$ mit $q = \\frac{1+\\alpha}{2} < 1$ für grosse $k$ - geometrische Majorante. Für $\\alpha > 1$ liefert Satz 6.15 eine Teilfolge mit $|a_{n_k}| > 1$. Das limsup macht das Kriterium <i>immer</i> anwendbar (es existiert stets) - deshalb ist es auch das Werkzeug für den Konvergenzradius von Potenzreihen (Def. 7.55).",
    example: "$\\sum_{n=1}^\\infty \\frac{n^5}{3^n}$: $\\sqrt[n]{|a_n|} = \\frac{(\\sqrt[n]{n})^5}{3} \\to \\tfrac13 < 1$ - absolut konvergent.",
    counterexample: "<b>1.</b> $\\alpha = 1$ entscheidet nichts (Beispiel 7.31): $\\sum \\tfrac1n$ (divergent) und $\\sum \\tfrac{1}{n^2}$ (konvergent) haben beide $\\sqrt[n]{|a_n|} \\to 1$.<br><b>2.</b> $\\alpha > 1$ heisst nicht 'langsame Divergenz': Die Glieder selbst bleiben weg von 0 ($|a_{n_k}| > 1$ für unendlich viele $k$) - eine Reihe mit Nullfolgen-Gliedern hat automatisch $\\alpha \\le 1$."
  },
  {
    id: "k7_kor_7_32",
    title: "Korollar 7.32: Das Quotientenkriterium",
    category: "7.2 Absolute Konvergenz",
    type: "satz",
    front: "Wie lautet <b>d'Alemberts Quotientenkriterium</b> (Korollar 7.32)?",
    back: "Sei $(a_n)_n$ eine Folge komplexer Zahlen mit $a_n \\neq 0$ für alle $n$, so dass<br>$$\\alpha = \\lim_{n\\to\\infty} \\frac{|a_{n+1}|}{|a_n|}$$<br><b>existiert</b>. Dann gilt:<br>$$\\alpha < 1 \\implies \\sum a_n \\text{ absolut konvergent}, \\qquad \\alpha > 1 \\implies \\sum a_n \\text{ divergent}$$<br>(im zweiten Fall konvergieren die Glieder nicht gegen Null). Für $\\alpha = 1$: keine Aussage.",
    meta: "Skript: Korollar 7.32, Wichtige Übung 7.33, Übung 7.34",
    explanation: "Beweisidee wie beim Wurzelkriterium: Ab einem $N$ ist $|a_{n+1}| \\le q|a_n|$ mit $q < 1$, also $|a_n| \\le q^{n-N}|a_N|$ - geometrische Majorante. <b>Achtung (Übung 7.34):</b> Anders als beim Wurzelkriterium darf man hier NICHT einfach den limsup nehmen: Bei oszillierenden Quotienten (abwechselnd gross/klein) kann $\\limsup \\frac{|a_{n+1}|}{|a_n|} > 1$ sein, obwohl die Reihe konvergiert. Das Wurzelkriterium ist das stärkere der beiden.",
    example: "$\\sum \\frac{z^n}{n!}$: $\\frac{|a_{n+1}|}{|a_n|} = \\frac{|z|}{n+1} \\to 0 < 1$ für jedes $z \\in \\mathbb{C}$ - die Exponentialreihe konvergiert absolut auf ganz $\\mathbb{C}$.",
    counterexample: "<b>1.</b> $\\alpha = 1$ ist unentscheidbar: wieder $\\sum \\tfrac1n$ vs. $\\sum \\tfrac{1}{n^2}$ (Quotienten $\\to 1$ in beiden Fällen).<br><b>2.</b> Existiert der Limes der Quotienten nicht, ist das Kriterium stumm, die Reihe kann trotzdem bestens konvergieren: $a_n = 2^{-n + (-1)^n}$ hat Quotienten, die zwischen $\\tfrac18$ und $2$ springen, aber $\\sum a_n$ konvergiert (Wurzelkriterium: $\\sqrt[n]{a_n} \\to \\tfrac12$)."
  },
  {
    id: "k7_satz_7_35",
    title: "Satz 7.35: Umordnen absolut konvergenter Reihen",
    category: "7.2 Absolute Konvergenz",
    type: "satz",
    front: "Was besagt <b>Satz 7.35</b> über Umordnungen absolut konvergenter Reihen?",
    back: "Sei $\\sum_{n=1}^\\infty a_n$ eine absolut konvergente Reihe mit komplexen Gliedern und $\\varphi: \\mathbb{N} \\to \\mathbb{N}$ eine Bijektion (Umordnung). Dann ist auch $\\sum_{n=1}^\\infty a_{\\varphi(n)}$ absolut konvergent und<br>$$\\sum_{n=1}^\\infty a_n = \\sum_{n=1}^\\infty a_{\\varphi(n)}.$$",
    meta: "Skript: Satz 7.35, Abschnitt 7.2.2",
    explanation: "Der 'positive' Umordnungssatz - das Gegenstück zum Riemannschen Umordnungssatz 7.21. Beweisidee: Nach Cauchy ist die 'Restmasse' $\\sum_{k \\ge N}|a_k| < \\varepsilon$; wählt man $M$ so gross, dass $\\varphi(\\{1,\\dots,M\\})$ alle Indizes $1, \\dots, N$ enthält, unterscheiden sich die Partialsummen nur noch um Glieder aus der Restmasse. Absolut konvergente Reihen verhalten sich also wie 'unendliche Summen ohne Reihenfolge'.",
    example: "$\\sum \\frac{(-1)^n}{2^n}$ darf beliebig umsortiert werden (erst alle geraden, dann alle ungeraden Indizes usw.) - der Wert $\\tfrac{1}{1+1/2}-1 = -\\tfrac13$... bleibt stets derselbe.",
    counterexample: "<b>1.</b> Für bedingt konvergente Reihen ist die Aussage falsch (Satz 7.21): Die alternierende harmonische Reihe lässt sich auf jeden Wert umordnen.<br><b>2.</b> $\\varphi$ muss bijektiv sein: Glieder <i>weglassen</i> oder <i>doppelt zählen</i> ändert den Wert selbstverständlich auch bei absoluter Konvergenz ($\\sum 2^{-n}$ ohne die geraden Indizes ist eine andere Reihe)."
  },
  {
    id: "k7_satz_7_36_37",
    title: "Satz 7.36 & Korollar 7.37: Produktsatz und Cauchy-Produkt",
    category: "7.2 Absolute Konvergenz",
    type: "satz",
    front: "Wie darf man absolut konvergente Reihen <b>multiplizieren</b> (Produktsatz 7.36, Cauchy-Produkt 7.37)?",
    back: "<b>Satz 7.36:</b> Sind $\\sum a_n$, $\\sum b_n$ absolut konvergent und $\\varphi: \\mathbb{N} \\to \\mathbb{N} \\times \\mathbb{N}$ bijektiv, so ist $\\sum_n a_{\\varphi(n)_1} b_{\\varphi(n)_2}$ absolut konvergent mit Wert $\\big(\\sum a_n\\big)\\big(\\sum b_n\\big)$ - alle Produkte $a_i b_j$ dürfen in <i>beliebiger</i> Reihenfolge aufsummiert werden.<br><br><b>Korollar 7.37 (Cauchy-Produkt):</b> Für absolut konvergente $\\sum_{n=0}^\\infty a_n$, $\\sum_{n=0}^\\infty b_n$ gilt mit Diagonal-Anordnung:<br>$$\\sum_{n=0}^\\infty \\Big(\\sum_{k=0}^n a_{n-k} b_k\\Big) = \\Big(\\sum_{n=0}^\\infty a_n\\Big)\\Big(\\sum_{n=0}^\\infty b_n\\Big),$$<br>wobei die linke Reihe absolut konvergiert.",
    meta: "Skript: Satz 7.36 & Korollar 7.37, Beispiel 7.38",
    explanation: "Das Cauchy-Produkt sammelt die Produkte entlang der Diagonalen $i + j = n$ - genau die richtige Anordnung für Potenzreihen, wo $a_{n-k}z^{n-k} \\cdot b_k z^k$ alle den Faktor $z^n$ tragen. Die Additionsformel $\\exp(z+w) = \\exp(z)\\exp(w)$ ist DIE Anwendung (Abschnitt 7.5.3): Cauchy-Produkt der Exponentialreihen + binomischer Lehrsatz.",
    example: "Beispiel 7.38: $\\big(\\sum_{n=0}^\\infty q^n\\big)^2 = \\sum_{n=0}^\\infty (n+1)q^n = \\frac{1}{(1-q)^2}$ für $|q| < 1$ (auf der Diagonale $n$ stehen $n+1$ Produkte $q^{n-k}q^k = q^n$).",
    counterexample: "<b>1.</b> Für bloss bedingt konvergente Reihen kann das Cauchy-Produkt divergieren: Das klassische Beispiel $a_n = b_n = \\frac{(-1)^n}{\\sqrt{n+1}}$ (Leibniz-konvergent) hat Cauchy-Produkt-Glieder vom Betrag $\\ge 1$ - keine Nullfolge.<br><b>2.</b> Gliedweises Multiplizieren $\\sum a_n b_n$ ist NICHT das Produkt der Reihen: $\\big(\\sum 2^{-n}\\big)\\big(\\sum 3^{-n}\\big) = 3 \\neq \\sum 6^{-n} = \\tfrac65$."
  },

  // ========================================================================
  // 7.3 KONVERGENZ VON FUNKTIONENFOLGEN
  // ========================================================================
  {
    id: "k7_def_7_40",
    title: "Definition 7.40: Punktweise Konvergenz und ihre Schwächen",
    category: "7.3 Konvergenz von Funktionenfolgen",
    type: "definition",
    front: "Wann konvergiert eine Funktionenfolge $(f_n)_n$ <b>punktweise</b>, und welche drei Schwächen zeigen die Beispiele 7.42-7.44?",
    back: "$(f_n)_n$ auf $X$ konvergiert <b>punktweise</b> gegen $f: X \\to \\mathbb{C}$, falls $f_n(x) \\to f(x)$ für jedes $x \\in X$:<br>$$\\forall x \\in X\\ \\forall \\varepsilon > 0\\ \\exists N\\ \\forall n \\ge N: |f_n(x) - f(x)| < \\varepsilon$$<br>($N$ darf von $x$ abhängen!).<br><br><b>Schwächen:</b><br>&bull; <b>Beispiel 7.42:</b> $f_n(x) = x^n$ auf $[0,1]$: stetige $f_n$, aber Grenzfunktion $\\mathbb{1}_{\\{1\\}}$ unstetig.<br>&bull; <b>Beispiel 7.43:</b> wandernde Dreieckszacken ($f_n$ stetig, $f_n \\to 0$ punktweise), aber $\\int_0^1 f_n\\,\\mathrm{d}x = \\tfrac14 \\not\\to 0 = \\int_0^1 f\\,\\mathrm{d}x$.<br>&bull; <b>Beispiel 7.44:</b> $f_n = \\mathbb{1}_{\\{q_1,\\dots,q_n\\}}$ (erste $n$ rationale Zahlen): R-integrierbare $f_n$, Grenzfunktion $\\mathbb{1}_{\\mathbb{Q}\\cap[0,1]}$ <b>nicht</b> R-integrierbar.",
    meta: "Skript: Definition 7.40 & Beispiele 7.42-7.44",
    explanation: "Punktweise Konvergenz erhält also weder Stetigkeit noch Integrierbarkeit noch Integralwerte - sie ist für die Analysis zu schwach. Die Position des Quantors '$\\forall x$' VOR '$\\exists N$' ist der ganze Unterschied zur gleichmässigen Konvergenz. (Die exp-Definition $\\exp(x) = \\lim (1 + \\tfrac{x}{n})^n$ war unser erstes Beispiel punktweiser Konvergenz.)",
    example: "$f_n(x) = x^n$ auf $[0, 1]$: Für $x = 0{,}99$ braucht es $N \\approx 460$, für $x = 0{,}999$ schon $N \\approx 4600$, bis $f_n(x) < \\tfrac{1}{100}$ - das $N$ explodiert nahe $1$: genau daran scheitert die Gleichmässigkeit.",
    counterexample: "<b>1.</b> Beispiel 7.43 zeigt: $\\lim \\int f_n \\neq \\int \\lim f_n$ ist möglich, obwohl ALLE beteiligten Funktionen (auch die Grenzfunktion!) stetig sind.<br><b>2.</b> Beispiel 7.44: Sogar die blosse Integrierbarkeit der Grenzfunktion kann verloren gehen - punktweise Limiten führen aus $\\mathcal{R}([0,1])$ heraus."
  },
  {
    id: "k7_def_7_45",
    title: "Definition 7.45: Gleichmässige Konvergenz",
    category: "7.3 Konvergenz von Funktionenfolgen",
    type: "definition",
    front: "Wann konvergiert eine Funktionenfolge <b>gleichmässig</b> (Definition 7.45), und worin liegt der Unterschied zur punktweisen Konvergenz?",
    back: "$(f_n)_n$ auf $X$ strebt <b>gleichmässig</b> gegen $f$, falls es zu jedem $\\varepsilon > 0$ ein $N \\in \\mathbb{N}$ gibt, so dass für <b>alle $n \\ge N$ und alle $x \\in X$</b><br>$$|f_n(x) - f(x)| < \\varepsilon.$$<br>In Prädikatenlogik:<br>$$\\forall \\varepsilon > 0\\ \\exists N \\in \\mathbb{N}\\ \\forall n \\ge N\\ \\big(\\forall x \\in X: |f_n(x) - f(x)| < \\varepsilon\\big)$$<br>Der Unterschied zur punktweisen Konvergenz: <b>$N$ hängt nicht von $x$ ab</b> - der Quantor $\\forall x$ ist hinter $\\exists N$ gerückt.",
    meta: "Skript: Definition 7.45, Abschnitt 7.3.2",
    explanation: "Anschaulich: Ab $N$ liegt der GANZE Graph von $f_n$ im $\\varepsilon$-Schlauch um $f$. 'Gleichmässig' meint wie bei der gleichmässigen Stetigkeit die Unabhängigkeit einer Grösse ($N$ bzw. $\\delta$) vom Punkt. Äquivalent: $\\sup_{x \\in X} |f_n(x) - f(x)| \\to 0$ - das ist Konvergenz bezüglich der Supremumsnorm $\\|\\cdot\\|_\\infty$ (vgl. Übung 5.47).",
    example: "$f_n(x) = \\tfrac{x}{n}$ auf $[0, 1]$: $\\sup_{x}|f_n(x)| = \\tfrac1n \\to 0$ - gleichmässig gegen $0$. Auch $f_n(x) = x^n$ auf $[0, S]$ mit $S < 1$: $\\sup |f_n| = S^n \\to 0$.",
    counterexample: "<b>1.</b> $f_n(x) = x^n$ auf $[0, 1]$ konvergiert punktweise, aber NICHT gleichmässig: $\\sup_{x \\in [0,1]}|f_n(x) - f(x)| \\geq f_n(2^{-1/n}) = \\tfrac12$ für jedes $n$.<br><b>2.</b> Gleichmässige Konvergenz hängt vom Definitionsbereich ab: dieselbe Folge $x^n$ ist auf jedem $[0, S]$, $S<1$, gleichmässig konvergent - 'gleichmässig' ist immer 'gleichmässig auf $X$'."
  },
  {
    id: "k7_satz_7_48_49",
    title: "Sätze 7.48 & 7.49: Vererbung von Stetigkeit und Integral",
    category: "7.3 Konvergenz von Funktionenfolgen",
    type: "satz",
    front: "Was vererbt sich unter <b>gleichmässiger</b> Konvergenz: Stetigkeit (Satz 7.48) und Riemann-Integral (Satz 7.49)?",
    back: "<b>Satz 7.48:</b> Konvergiert eine Folge <b>stetiger</b> Funktionen $f_n: D \\to \\mathbb{C}$ gleichmässig gegen $f$, so ist $f$ <b>stetig</b>.<br><br><b>Satz 7.49:</b> Konvergiert eine Folge <b>Riemann-integrierbarer</b> Funktionen $f_n: [a,b] \\to \\mathbb{R}$ gleichmässig gegen $f$, so ist $f$ Riemann-integrierbar und<br>$$\\lim_{n\\to\\infty} \\int_a^b f_n\\,\\mathrm{d}x = \\int_a^b \\lim_{n\\to\\infty} f_n\\,\\mathrm{d}x = \\int_a^b f\\,\\mathrm{d}x$$<br>- <b>Integration und Grenzwert dürfen vertauscht werden</b>.",
    meta: "Skript: Sätze 7.48 & 7.49",
    explanation: "<b>Beweis von 7.48 ('$3\\varepsilon$-Argument'):</b> $|f(x) - f(x_0)| \\le |f(x) - f_n(x)| + |f_n(x) - f_n(x_0)| + |f_n(x_0) - f(x_0)| < 3\\varepsilon$ - der mittlere Term über die Stetigkeit von $f_n$, die äusseren über die Gleichmässigkeit. Für 7.49 verschiebt man die Treppenfunktionen von $f_n$ um $\\pm\\varepsilon$: $u - \\varepsilon \\le f \\le o + \\varepsilon$. Beide Sätze machen gleichmässige Konvergenz zum 'richtigen' Begriff für Potenzreihen.",
    example: "Da $\\sum_{k=0}^n \\frac{x^k}{k!}$ auf jedem $[-S, S]$ gleichmässig gegen $\\exp$ konvergiert, ist exp stetig und darf gliedweise integriert werden (Satz 7.85, Korollar 7.86).",
    counterexample: "<b>1.</b> Punktweise genügt nicht: $x^n$ auf $[0,1]$ (stetig $\\to$ unstetig, Beispiel 7.42) und die Dreieckszacken (Integrale $\\tfrac14 \\not\\to 0$, Beispiel 7.43).<br><b>2.</b> Die Umkehrung von 7.48 gilt nicht: Aus 'alle $f_n$ und $f$ stetig, $f_n \\to f$ punktweise' folgt keine gleichmässige Konvergenz - die Zacken-Folge aus 7.43 ist das Gegenbeispiel (alles stetig, Konvergenz nicht gleichmässig)."
  },

  // ========================================================================
  // 7.4 POTENZREIHEN
  // ========================================================================
  {
    id: "k7_def_7_54_55",
    title: "Definitionen 7.54 & 7.55: Potenzreihe und Konvergenzradius",
    category: "7.4 Potenzreihen",
    type: "definition",
    front: "Was ist eine <b>Potenzreihe</b>, und wie ist ihr <b>Konvergenzradius</b> definiert (Cauchy-Hadamard)?",
    back: "<b>Definition 7.54:</b> Für Koeffizienten $a_n \\in \\mathbb{C}$ ($n \\in \\mathbb{N}_0$) ist der formale Ausdruck<br>$$\\sum_{n=0}^\\infty a_n z^n$$<br>eine <b>Potenzreihe</b> in der Variablen $z$.<br><br><b>Definition 7.55 (Konvergenzradius):</b><br>$$R = \\frac{1}{\\limsup_{n\\to\\infty} \\sqrt[n]{|a_n|}}$$<br>mit den Konventionen $\\tfrac{1}{+\\infty} = 0$ und (nur hier) $\\tfrac10 = +\\infty$.",
    meta: "Skript: Definitionen 7.54 & 7.55 und Lemma 7.60",
    explanation: "Eine Potenzreihe ist zunächst - wie ein Polynom in Def. 3.13, aber mit unendlich vielen Gliedern - ein <i>formales</i> Objekt; erst Satz 7.56 sagt, wo man einsetzen darf. <b>Lemma 7.60:</b> Falls der Grenzwert existiert, gilt auch die oft bequemere Quotientenformel $R = \\lim_{n\\to\\infty} \\frac{|a_n|}{|a_{n+1}|}$. Bei $z = 0$ konvergiert jede Potenzreihe (Wert $a_0$).",
    example: "$\\sum z^n$: $R = 1$. $\\sum \\frac{z^n}{n!}$: $R = \\lim \\frac{(n+1)!}{n!} = \\infty$ (exp). $\\sum n! z^n$: $R = 0$ - konvergiert nur bei $z = 0$.",
    counterexample: "<b>1.</b> Die Quotientenformel braucht die Existenz des Limes: Für $a_n = 2^{(-1)^n n}$ springen die Quotienten, nur Cauchy-Hadamard (limsup) funktioniert immer.<br><b>2.</b> $R$ sagt nichts über den <i>Rand</i> $|z| = R$: $\\sum z^n$, $\\sum \\tfrac{z^n}{n}$ und $\\sum \\tfrac{z^n}{n^2}$ haben alle $R = 1$, verhalten sich bei $|z| = 1$ aber völlig verschieden (nirgends / teilweise / überall konvergent)."
  },
  {
    id: "k7_satz_7_56",
    title: "Satz 7.56: Über den Konvergenzradius",
    category: "7.4 Potenzreihen",
    type: "satz",
    front: "Was besagt <b>Satz 7.56</b> über das Konvergenzverhalten einer Potenzreihe innerhalb, ausserhalb und auf Kreisscheiben?",
    back: "Sei $\\sum_{n=0}^\\infty a_n z^n$ eine Potenzreihe mit Konvergenzradius $R$. Dann:<br>&bull; <b>$|z| < R$:</b> absolute Konvergenz;<br>&bull; <b>$|z| > R$:</b> Divergenz;<br>&bull; auf jeder Kreisscheibe $B_S(0)$ mit $S \\in (0, R)$ konvergieren die Partialsummen $\\sum_{n=0}^N a_n z^n$ <b>gleichmässig</b>.<br><br><b>Insbesondere</b> definiert die Potenzreihe die <b>stetige</b> Abbildung $z \\in B_R(0) \\mapsto \\sum_{n=0}^\\infty a_n z^n \\in \\mathbb{C}$.",
    meta: "Skript: Satz 7.56 & Beispiel 7.57",
    explanation: "<b>Beweis:</b> Wurzelkriterium: $\\limsup \\sqrt[n]{|a_n z^n|} = \\frac{|z|}{R}$. Gleichmässigkeit auf $B_S(0)$ via Weierstrass-Majorante $\\sum |a_n| S^n < \\infty$; Stetigkeit dann aus Satz 7.48. <b>Feinheit (Beispiel 7.57):</b> Auf der <i>vollen offenen</i> Scheibe $B_R(0)$ muss die Konvergenz nicht gleichmässig sein (z.B. $\\sum z^n$) - nur auf jeder kleineren Scheibe $B_S(0)$, $S < R$; für die Stetigkeit in jedem Punkt genügt das.",
    example: "Die geometrische Reihe: $\\sum z^n = \\frac{1}{1-z}$, stetig auf $B_1(0)$; exp, sin, cos haben $R = \\infty$ und sind daher auf ganz $\\mathbb{C}$ definierte, stetige Funktionen.",
    counterexample: "<b>1.</b> Über das Verhalten bei $|z| = R$ sagt der Satz nichts - dafür braucht es Zusatzargumente (z.B. Leibniz bei $z = -1$ für $\\sum \\tfrac{z^n}{n}$, oder den Abelschen Grenzwertsatz).<br><b>2.</b> Gleichmässige Konvergenz auf ganz $B_R(0)$ ist i.A. falsch: Bei $\\sum z^n$ ist $\\sup_{|z|<1}\\big|\\sum_{k>n} z^k\\big| = \\infty$ für jedes $n$ - die Restsummen explodieren am Rand."
  },
  {
    id: "k7_prop_7_62_satz_7_65",
    title: "Proposition 7.62 & Satz 7.65: Rechnen mit Potenzreihen & Abel",
    category: "7.4 Potenzreihen",
    type: "satz",
    front: "Wie <b>addiert und multipliziert</b> man Potenzreihen (Proposition 7.62), und was besagt der <b>Abelsche Grenzwertsatz</b> (Satz 7.65)?",
    back: "<b>Proposition 7.62:</b> Haben $\\sum a_n z^n$, $\\sum b_n z^n$ Konvergenzradien $R_a, R_b$, so gilt für $|z| < \\min\\{R_a, R_b\\}$:<br>$$\\sum a_n z^n + \\sum b_n z^n = \\sum (a_n + b_n)z^n$$<br>$$\\Big(\\sum a_n z^n\\Big)\\Big(\\sum b_n z^n\\Big) = \\sum_{n=0}^\\infty \\Big(\\sum_{k=0}^n a_{n-k}b_k\\Big) z^n \\quad \\text{(Cauchy-Produkt)}$$<br>mit Konvergenzradius $\\ge \\min\\{R_a, R_b\\}$ rechts.<br><br><b>Satz 7.65 (Abel):</b> Hat $\\sum a_n x^n$ Konvergenzradius $\\ge R$ und konvergiert $\\sum a_n R^n$, so ist die Funktion auch im Randpunkt stetig:<br>$$\\sum_{n=0}^\\infty a_n R^n = \\lim_{x \\nearrow R} \\sum_{n=0}^\\infty a_n x^n.$$",
    meta: "Skript: Proposition 7.62, Satz 7.65, Beispiel 7.66",
    explanation: "Potenzreihen bilden also einen Rechenbereich, in dem man wie mit 'unendlichen Polynomen' umgeht. Der Abelsche Grenzwertsatz schlägt die Brücke vom Inneren zum Rand: Konvergiert die Reihe am Randpunkt überhaupt, dann passt ihr Wert stetig zum Grenzwert von innen - das Werkzeug, um Reihenwerte wie $\\log 2$ und $\\tfrac{\\pi}{4}$ zu berechnen (Beispiel 7.66 mit den Reihen von $\\log(1+x)$ und $\\arctan x$, sobald diese in Kapitel 8 zur Verfügung stehen).",
    example: "Beispiel 7.66: $\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n}$ konvergiert (Leibniz) und die zugehörige Potenzreihe hat $R = 1$ - per Abel ist ihr Wert $\\lim_{x\\nearrow 1} \\sum \\frac{(-1)^{n+1}}{n}x^n = \\log 2$.",
    counterexample: "<b>1.</b> Die Umkehrung von Abel ist falsch: $\\lim_{x \\nearrow 1} \\sum (-1)^n x^n = \\lim \\frac{1}{1+x} = \\tfrac12$ existiert, aber $\\sum (-1)^n$ divergiert - aus dem Grenzwert von innen folgt keine Randkonvergenz.<br><b>2.</b> Der Konvergenzradius des Produkts kann ECHT grösser sein als $\\min\\{R_a, R_b\\}$: $(1-z)\\cdot\\frac{1}{1-z}$ ($R = \\infty$ bzw. $1$) hat als Produkt die konstante $1$ mit $R = \\infty$ - '$\\ge$' ist keine Gleichheit."
  },

  // ========================================================================
  // 7.5 / 7.6 EXPONENTIALABBILDUNG UND TRIGONOMETRIE
  // ========================================================================
  {
    id: "k7_satz_7_68",
    title: "Satz 7.68: Die komplexe Exponentialabbildung",
    category: "7.5 Die (komplexe) Exponentialabbildung",
    type: "satz",
    front: "Wie ist die <b>komplexe Exponentialabbildung</b> definiert, und welche Formeln gelten (Satz 7.68)?",
    back: "Für $z \\in \\mathbb{C}$ definiert man<br>$$\\exp(z) = \\sum_{k=0}^\\infty \\frac{1}{k!} z^k$$<br>(Konvergenzradius $\\infty$) - eine <b>stetige Erweiterung</b> der reellen Exponentialabbildung auf $\\mathbb{C}$. Es gelten:<br>&bull; <b>Additionsformel:</b> $\\exp(z + w) = \\exp(z)\\exp(w)$ für alle $z, w \\in \\mathbb{C}$<br>&bull; <b>Absolutbetrag:</b> $|\\exp(z)| = \\exp(\\operatorname{Re}(z))$; insbesondere $|\\exp(iy)| = 1$ für alle $y \\in \\mathbb{R}$.<br><br>Für $a > 0$ und $z \\in \\mathbb{C}$ setzt man $a^z = \\exp(z \\log a)$; insbesondere $e^z = \\exp(z)$.",
    meta: "Skript: Satz 7.68 & Übung 7.69, Abschnitte 7.5.1-7.5.4",
    explanation: "<b>Beweis-Highlights:</b> Die Additionsformel ist das Cauchy-Produkt der beiden Exponentialreihen plus binomischer Lehrsatz: $\\sum_k \\frac{z^k}{k!}\\frac{w^{n-k}}{(n-k)!} = \\frac{(z+w)^n}{n!}$. Für den Betrag: $\\overline{\\exp(z)} = \\exp(\\bar z)$ (Stetigkeit der Konjugation), also $|\\exp(z)|^2 = \\exp(z + \\bar z) = \\exp(2\\operatorname{Re} z)$. Auch die Grenzwertformel $\\exp(z) = \\lim (1 + \\tfrac{z}{n})^n$ gilt auf ganz $\\mathbb{C}$ (Übung 7.69).",
    example: "$|e^{i\\theta}| = 1$: Die Abbildung $\\theta \\mapsto e^{i\\theta}$ läuft auf dem Einheitskreis - die Grundlage der Polarkoordinaten. $e^{2+i\\pi} = e^2 \\cdot e^{i\\pi} = -e^2$.",
    counterexample: "<b>1.</b> Die komplexe exp ist NICHT injektiv (anders als die reelle!): $\\exp(z + 2\\pi i) = \\exp(z)$ - sie ist $2\\pi i$-periodisch; ein 'Logarithmus' auf $\\mathbb{C}$ erfordert Entscheidungen (Abschnitt 7.6.5).<br><b>2.</b> $\\exp(z) \\neq 0$ für ALLE $z \\in \\mathbb{C}$ (wegen $\\exp(z)\\exp(-z) = 1$) - aber anders als im Reellen ist $\\exp(z)$ nicht immer positiv oder auch nur reell: $e^{i\\pi} = -1$."
  },
  {
    id: "k7_satz_7_72",
    title: "Satz 7.72: Sinus und Kosinus als Potenzreihen",
    category: "7.6 Trigonometrische Funktionen",
    type: "satz",
    front: "Wie sind <b>Sinus und Kosinus</b> über Potenzreihen definiert, und wie hängen sie mit $\\exp$ zusammen (Satz 7.72)?",
    back: "$$\\sin(z) = z - \\frac{z^3}{3!} + \\frac{z^5}{5!} - \\dots, \\qquad \\cos(z) = 1 - \\frac{z^2}{2!} + \\frac{z^4}{4!} - \\dots$$<br>definieren die <b>ungerade</b> stetige Sinus- und die <b>gerade</b> stetige Kosinusfunktion auf ganz $\\mathbb{C}$ (Konvergenzradius $\\infty$), reellwertig auf $\\mathbb{R}$. Beziehungen:<br>$$\\exp(iz) = \\cos(z) + i\\sin(z) \\quad \\text{(Euler)}, \\qquad \\sin(z) = \\frac{e^{iz} - e^{-iz}}{2i}, \\qquad \\cos(z) = \\frac{e^{iz} + e^{-iz}}{2}$$<br><b>Additionsformeln:</b><br>$$\\sin(z+w) = \\sin z \\cos w + \\cos z \\sin w, \\qquad \\cos(z+w) = \\cos z \\cos w - \\sin z \\sin w$$",
    meta: "Skript: Satz 7.72, Abschnitt 7.6",
    explanation: "Die Eulersche Formel entsteht durch simples Sortieren der Exponentialreihe von $e^{iz}$ nach geraden ($\\to \\cos$) und ungeraden ($\\to \\sin$) Potenzen - erlaubt dank absoluter Konvergenz. Die Additionsformeln folgen dann aus der Additionsformel von exp durch Vergleich von Real- und Imaginärteil. Aus $|e^{ix}| = 1$ folgt sofort der 'trigonometrische Pythagoras' $\\sin^2(x) + \\cos^2(x) = 1$ für $x \\in \\mathbb{R}$.",
    example: "$\\cos(2z) = \\cos^2 z - \\sin^2 z$ und $\\sin(2z) = 2\\sin z\\cos z$ - Spezialfälle $w = z$ der Additionsformeln.",
    counterexample: "<b>1.</b> Auf $\\mathbb{C}$ sind sin und cos NICHT beschränkt: $\\cos(iy) = \\frac{e^{-y} + e^{y}}{2} \\to \\infty$ für $y \\to \\infty$ - die Schranke $|\\sin|, |\\cos| \\le 1$ gilt nur auf $\\mathbb{R}$!<br><b>2.</b> $\\sin(z + w) \\neq \\sin z + \\sin w$: Sinus ist nicht additiv ($\\sin(\\pi) = 0 \\neq 2\\sin(\\tfrac\\pi2) = 2$) - additiv ist nur das Argument in der Euler-Exponentialform."
  },
  {
    id: "k7_satz_7_74",
    title: "Satz 7.74 & Korollar 7.75: Die Kreiszahl Pi und Periodizität",
    category: "7.6 Trigonometrische Funktionen",
    type: "satz",
    front: "Wie wird $\\pi$ im Skript <b>definiert</b> (Satz 7.74), und welche <b>Periodizitätsformeln</b> folgen (Korollar 7.75)?",
    back: "<b>Satz 7.74:</b> Es gibt <b>genau eine</b> Zahl $\\pi \\in (0, 4)$ mit $\\sin(\\pi) = 0$. Für diese gilt:<br>$$e^{2\\pi i} = 1, \\quad e^{\\pi i} = -1, \\quad e^{\\frac{\\pi}{2} i} = i, \\quad e^{\\frac{3\\pi}{2}i} = -i, \\quad e^{\\frac{\\pi}{4}i} = \\tfrac{1}{\\sqrt2} + \\tfrac{i}{\\sqrt2}$$<br><b>Korollar 7.75 (Periodizität):</b> Für alle $z \\in \\mathbb{C}$:<br>$$\\sin(z + \\pi) = -\\sin z, \\quad \\cos(z + \\pi) = -\\cos z, \\quad \\sin(z + 2\\pi) = \\sin z, \\quad \\cos(z + 2\\pi) = \\cos z$$<br>und $\\cos(z) = \\sin(z + \\tfrac{\\pi}{2})$.<br><br><b>Übung 7.76:</b> Die Nullstellen von sin sind genau $\\pi\\mathbb{Z}$, die von cos genau $\\pi\\mathbb{Z} + \\tfrac{\\pi}{2}$.",
    meta: "Skript: Satz 7.74, Korollar 7.75, Wichtige Übung 7.76",
    explanation: "$\\pi$ wird hier rein analytisch als kleinste positive Nullstelle des Sinus definiert - keine Geometrie nötig! Der Existenzbeweis nutzt die Leibniz-Fehlerabschätzung für die alternierenden Reihen: $\\sin(x) \\ge x - \\tfrac{x^3}{6} > 0$ auf $(0, 1]$ und einen Vorzeichenwechsel vor $4$, dann den Zwischenwertsatz. Alle Werte der Tabelle folgen aus $e^{\\pi i} = -1$ durch Wurzelziehen mit den Additionsformeln.",
    example: "Wegen der Periodizität genügen die Werte auf $[0, \\tfrac{\\pi}{2}]$, um sin und cos überall auf $\\mathbb{R}$ zu kennen. $\\sin(100\\pi) = 0$, $\\cos(\\tfrac{7\\pi}{2}) = \\cos(\\tfrac{3\\pi}{2}) = 0$.",
    counterexample: "<b>1.</b> '$\\sin(\\pi) = 0$' allein definiert $\\pi$ nicht - auch $0$ und $2\\pi$ sind Nullstellen; erst die Einschränkung auf $(0, 4)$ (kleinste positive Nullstelle) macht $\\pi$ eindeutig.<br><b>2.</b> $e^{2\\pi i} = 1$ zeigt erneut: exp ist auf $\\mathbb{C}$ nicht injektiv - aus $e^z = e^w$ folgt nur $z - w \\in 2\\pi i \\mathbb{Z}$, nicht $z = w$."
  },
  {
    id: "k7_lemma_7_81",
    title: "Lemma 7.81: Polarkoordinaten",
    category: "7.6 Trigonometrische Funktionen",
    type: "lemma",
    front: "Was besagt das Lemma über die <b>Existenz von Polarkoordinaten</b> in $\\mathbb{C}$ (Lemma 7.81)?",
    back: "Für alle $z \\in \\mathbb{C}$ existieren ein eindeutig bestimmtes $r \\ge 0$ und ein Winkel $\\theta \\in [0, 2\\pi)$ mit<br>$$z = r e^{i\\theta} = r(\\cos\\theta + i \\sin\\theta).$$<br>Dabei ist $r = |z|$, und der Winkel $\\theta$ ist <b>eindeutig bestimmt, falls $z \\neq 0$</b>.",
    meta: "Skript: Lemma 7.81, Abschnitt 7.6.4",
    explanation: "<b>Beweisidee:</b> Normiere auf $|z| = 1$; für $\\operatorname{Im}(z) \\ge 0$ liefert der Zwischenwertsatz (cos läuft von $1$ nach $-1$ auf $[0, \\pi]$) ein $\\theta$ mit $\\cos\\theta = \\operatorname{Re}(z)$, und $\\sin\\theta = \\sqrt{1 - \\cos^2\\theta} = \\operatorname{Im}(z)$ passt automatisch. <b>Geometrische Frucht:</b> Multiplikation in $\\mathbb{C}$ wird durchschaubar: $r_1 e^{i\\theta_1} \\cdot r_2 e^{i\\theta_2} = r_1 r_2 e^{i(\\theta_1 + \\theta_2)}$ - Beträge multiplizieren, Winkel addieren.",
    example: "$z = 1 + i = \\sqrt{2}\\, e^{i\\pi/4}$; $z^2 = 2 e^{i\\pi/2} = 2i$ - Potenzieren wird zum Winkel-Vervielfachen (de Moivre). Die $n$-ten Einheitswurzeln sind $e^{2\\pi i k/n}$, $k = 0, \\dots, n-1$.",
    counterexample: "<b>1.</b> Für $z = 0$ ist der Winkel NICHT eindeutig: $0 = 0 \\cdot e^{i\\theta}$ für jedes $\\theta$ - deshalb die Ausnahme im Lemma.<br><b>2.</b> Die Winkeladdition gilt nur modulo $2\\pi$: $e^{i \\cdot \\frac{3\\pi}{2}} \\cdot e^{i\\pi}$ hat den Winkel $\\tfrac{5\\pi}{2} \\equiv \\tfrac{\\pi}{2} \\pmod{2\\pi}$, nicht $\\tfrac{5\\pi}{2} \\in [0, 2\\pi)$ - 'Winkel addieren' heisst immer 'in $\\mathbb{R}/2\\pi\\mathbb{Z}$ addieren'."
  },

  // ========================================================================
  // 7.7 INTEGRATION VON POTENZREIHEN
  // ========================================================================
  {
    id: "k7_satz_7_85",
    title: "Satz 7.85 & Korollar 7.86: Integration von Potenzreihen",
    category: "7.7 Integration von Potenzreihen",
    type: "satz",
    front: "Wie integriert man eine <b>Potenzreihe</b> (Satz 7.85), und welche Integrationsformeln ergeben sich für exp, sin, cos (Korollar 7.86)?",
    back: "<b>Satz 7.85 (gliedweise Integration):</b> Sei $f(x) = \\sum_{n=0}^\\infty c_n x^n$ mit Konvergenzradius $R$. Dann hat<br>$$F(x) = \\sum_{n=0}^\\infty \\frac{c_n}{n+1}\\, x^{n+1}$$<br><b>denselben</b> Konvergenzradius $R$, und für alle $a, b \\in (-R, R)$ gilt<br>$$\\int_a^b f(x)\\,\\mathrm{d}x = F(b) - F(a).$$<br><b>Korollar 7.86:</b><br>$$\\int_a^b \\exp(x)\\,\\mathrm{d}x = \\exp(b) - \\exp(a), \\quad \\int_a^b \\sin x\\,\\mathrm{d}x = -\\cos b + \\cos a, \\quad \\int_a^b \\cos x\\,\\mathrm{d}x = \\sin b - \\sin a$$",
    meta: "Skript: Satz 7.85 & Korollar 7.86, Abschnitt 7.7",
    explanation: "Jeder Summand $c_n x^n$ wird einzeln integriert ($\\int x^n = \\frac{x^{n+1}}{n+1}$, Satz 4.37) - erlaubt dank der gleichmässigen Konvergenz auf $[a,b] \\subseteq (-R, R)$ und Satz 7.49 (Vertauschen von Limes und Integral). Das Teilen durch $n+1$ ändert den Konvergenzradius nicht ($\\sqrt[n]{n+1} \\to 1$). Dies ist der Vorgeschmack auf den Fundamentalsatz (Kapitel 9): $F$ ist eine Stammfunktion von $f$.",
    example: "Gliedweise Integration der geometrischen Reihe $\\frac{1}{1+x} = \\sum (-1)^n x^n$ liefert die Logarithmus-Reihe $\\sum \\frac{(-1)^n}{n+1}x^{n+1}$ - zusammen mit dem Abelschen Grenzwertsatz ergibt sich daraus $1 - \\tfrac12 + \\tfrac13 - \\dots = \\log 2$. Auch die hyperbolischen Funktionen $\\sinh, \\cosh$ (7.7.1) behandelt man identisch.",
    counterexample: "<b>1.</b> Die Formel gilt nur für $a, b$ INNERHALB $(-R, R)$: $\\int_0^1$ über die geometrische Reihe ($R = 1$) ist nicht direkt zulässig - Randpunkte erfordern den Abelschen Grenzwertsatz als Zusatzargument.<br><b>2.</b> Für allgemeine (nicht gleichmässig konvergente) Funktionenreihen ist gliedweises Integrieren falsch - die Dreieckszacken-Folge (Beispiel 7.43) zeigt, wie Grenzwert und Integral sonst auseinanderlaufen; die Potenzreihenstruktur ist wesentlich."
  }
];
