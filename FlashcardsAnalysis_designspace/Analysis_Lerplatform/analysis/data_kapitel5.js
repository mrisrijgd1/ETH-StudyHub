/* ==========================================================================
   FLASHCARDS KAPITEL 5: Metrische Räume, Folgen und Stetigkeit
   Analysis I - Prof. Dr. Manfred Einsiedler (Skript S. 225-252)
   Vollständig verifiziert gegen das offizielle Skript (Abschnitte 5.1-5.5)
   ========================================================================== */

window.FLASHCARDS_KAPITEL_5 = [
  // ========================================================================
  // 5.1 NORMIERTE VEKTORRÄUME
  // ========================================================================
  {
    id: "k5_def_5_1",
    title: "Definition 5.1: Normen",
    category: "5.1 Normierte Vektorräume",
    type: "definition",
    front: "Wie lautet die präzise Definition einer <b>Norm</b> $\\|\\cdot\\|$ auf einem Vektorraum $V$ über $\\mathbb{K} = \\mathbb{R}$ (oder $\\mathbb{K} = \\mathbb{C}$)?",
    back: "Eine <b>Norm</b> auf $V$ ist eine Abbildung $\\|\\cdot\\|: v \\in V \\mapsto \\|v\\| \\in \\mathbb{R}_{\\ge 0}$ mit folgenden drei Eigenschaften:<br><br>1. <b>Definitheit:</b> Für alle $v \\in V$ gilt<br>$$\\|v\\| = 0 \\iff v = 0$$<br>2. <b>Homogenität:</b> Für alle $v \\in V$ und $\\alpha \\in \\mathbb{K}$ gilt<br>$$\\|\\alpha v\\| = |\\alpha| \\cdot \\|v\\|$$<br>3. <b>Dreiecksungleichung:</b> Für alle $v_1, v_2 \\in V$ gilt<br>$$\\|v_1 + v_2\\| \\le \\|v_1\\| + \\|v_2\\|$$<br><br>$V$ gemeinsam mit $\\|\\cdot\\|$ heisst <b>normierter Vektorraum</b>.",
    meta: "Skript: Definition 5.1, S. 225",
    explanation: "<b>Intuition der Axiome:</b><br>&bull; <i>Definitheit:</i> Nur der Nullvektor hat Länge $0$; jeder andere Vektor hat strikt positive Länge.<br>&bull; <i>Homogenität:</i> Skaliert man einen Vektor um $\\alpha$, skaliert seine Länge um $|\\alpha|$.<br>&bull; <i>Dreiecksungleichung:</i> Der direkte Weg ($v_1 + v_2$) ist nie länger als der Umweg über die Einzelschritte.<br><br><svg width='100%' height='130' viewBox='0 0 320 130' style='max-width:100%; height:auto; background:#f8fafc; border-radius:8px; margin-top:8px;'><line x1='30' y1='100' x2='150' y2='30' stroke='#1f407a' stroke-width='2.5'/><line x1='150' y1='30' x2='270' y2='100' stroke='#10b981' stroke-width='2.5'/><line x1='30' y1='100' x2='270' y2='100' stroke='#ef4444' stroke-dasharray='4 4' stroke-width='2.5'/><text x='80' y='55' fill='#1f407a' font-weight='bold' font-size='12'>||v&#8321;||</text><text x='220' y='55' fill='#10b981' font-weight='bold' font-size='12'>||v&#8322;||</text><text x='130' y='120' fill='#ef4444' font-weight='bold' font-size='12'>||v&#8321;+v&#8322;|| &#8804; ||v&#8321;||+||v&#8322;||</text></svg>",
    example: "Das einfachste Beispiel: $\\mathbb{R}$ (als 1-dimensionaler Vektorraum über $\\mathbb{R}$) mit dem Absolutbetrag $|\\cdot|$ ist ein normierter Vektorraum. Genauso $\\mathbb{C}$ mit dem Absolutbetrag (als Vektorraum über $\\mathbb{R}$ oder $\\mathbb{C}$).",
    counterexample: "<b>1.</b> $f(x) = x^2$ auf $\\mathbb{R}$ ist <b>keine</b> Norm: Die Homogenität scheitert, denn $f(2x) = 4x^2 \\neq 2f(x) = |2| \\cdot f(x)$.<br><b>2.</b> $f(v) = |v_1|$ auf $\\mathbb{R}^2$ ist keine Norm: Die Definitheit scheitert, denn $f((0,1)^t) = 0$, obwohl $(0,1)^t \\neq 0$ (so etwas nennt man nur eine <i>Halbnorm</i>)."
  },
  {
    id: "k5_bsp_5_2",
    title: "Beispiel 5.2: Maximumsnorm und Einsnorm",
    category: "5.1 Normierte Vektorräume",
    type: "beispiel",
    front: "Wie sind die <b>Maximumsnorm $\\|v\\|_\\infty$</b> und die <b>1-Norm $\\|v\\|_1$</b> auf $\\mathbb{C}^d$ bzw. $\\mathbb{R}^d$ definiert?",
    back: "Für $j \\in \\{1,\\dots,d\\}$ sei $\\pi_j: v = (v_1,\\dots,v_d)^t \\in \\mathbb{C}^d \\mapsto v_j \\in \\mathbb{C}$ die <b>Projektion</b> auf die $j$-te Komponente. Dann:<br><br>&bull; <b>Maximumsnorm (Unendlichnorm):</b><br>$$\\|v\\|_\\infty = \\max_{j=1,\\dots,d} |\\pi_j(v)|$$<br>&bull; <b>1-Norm (Einsnorm):</b><br>$$\\|v\\|_1 = \\sum_{j=1}^d |\\pi_j(v)|$$<br><br>Auf $\\mathbb{R}^d$ sind beide durch dieselben Formeln definiert.",
    meta: "Skript: Beispiel 5.2, S. 226",
    explanation: "<b>Geometrischer Vergleich der Einheitsbälle in $\\mathbb{R}^2$:</b><br>&bull; <i>Maximumsnorm:</i> misst nur die betragsgrösste Komponente &rarr; Einheitsball ist ein achsenparalleles Quadrat.<br>&bull; <i>1-Norm:</i> summiert alle Komponentenbeträge &rarr; Einheitsball ist eine auf die Spitze gestellte Raute.<br><br><svg width='100%' height='150' viewBox='0 0 320 150' style='max-width:100%; height:auto; background:#f8fafc; border-radius:8px; margin-top:8px;'><rect x='30' y='25' width='90' height='90' fill='none' stroke='#ef4444' stroke-width='2'/><polygon points='230,25 275,70 230,115 185,70' fill='none' stroke='#10b981' stroke-width='2'/><circle cx='75' cy='70' r='45' fill='none' stroke='#1f407a' stroke-dasharray='3 3' stroke-width='1.5'/><circle cx='230' cy='70' r='45' fill='none' stroke='#1f407a' stroke-dasharray='3 3' stroke-width='1.5'/><text x='75' y='135' text-anchor='middle' font-size='11' fill='#444'>||v||&#8734; (Quadrat)</text><text x='230' y='135' text-anchor='middle' font-size='11' fill='#444'>||v||&#8321; (Raute)</text></svg>",
    example: "Für $v = (3, -4)^t \\in \\mathbb{R}^2$:<br>$$\\|v\\|_\\infty = \\max(|3|, |-4|) = 4, \\qquad \\|v\\|_1 = |3| + |-4| = 7, \\qquad \\|v\\|_2 = \\sqrt{9+16} = 5.$$",
    counterexample: "<b>1.</b> Im Allgemeinen gilt $\\|v\\|_1 \\neq \\|v\\|_\\infty$ &ndash; nur für $d = 1$ stimmen alle drei Normen überein (dann sind sie der Absolutbetrag).<br><b>2.</b> $v \\mapsto \\min_j |\\pi_j(v)|$ ist <i>keine</i> Norm auf $\\mathbb{R}^d$ ($d \\ge 2$): $(1, 0)^t$ hätte &bdquo;Länge&ldquo; $0$ &ndash; die Definitheit scheitert."
  },
  {
    id: "k5_euklid_skalarprodukt",
    title: "5.1.1 Das Euklidische innere Produkt",
    category: "5.1 Normierte Vektorräume",
    type: "definition",
    front: "Wie ist das <b>Euklidische innere Produkt (Skalarprodukt)</b> auf $\\mathbb{C}^d$ definiert und welche drei Eigenschaften erfüllt es?",
    back: "Für $v = (v_1,\\dots,v_d)^t,\\ w = (w_1,\\dots,w_d)^t \\in \\mathbb{C}^d$:<br>$$\\langle v, w \\rangle = \\sum_{k=1}^d v_k \\overline{w_k}$$<br><b>Eigenschaften:</b><br>1. <b>Sesquilinearität:</b> linear im 1. Argument, &bdquo;halblinear&ldquo; (konjugiert-linear) im 2. Argument: $\\langle v, \\alpha_1 w_1 + \\alpha_2 w_2 \\rangle = \\overline{\\alpha_1}\\langle v, w_1\\rangle + \\overline{\\alpha_2}\\langle v, w_2\\rangle$.<br>2. <b>Symmetrie:</b> $\\langle v, w \\rangle = \\overline{\\langle w, v \\rangle}$<br>3. <b>Definitheit:</b> $\\langle v, v \\rangle \\ge 0$, und $\\langle v, v \\rangle = 0$ genau dann, wenn $v = 0$.<br><br>Das <b>reelle innere Produkt</b> auf $\\mathbb{R}^d$ ist durch dieselbe Formel definiert und ist <b>bilinear</b> (linear in beiden Argumenten).",
    meta: "Skript: Abschnitt 5.1.1, S. 226-227",
    explanation: "<b>Warum die komplexe Konjugation $\\overline{w_k}$ nötig ist:</b> Ohne sie wäre $\\langle (i,0)^t, (i,0)^t \\rangle = i \\cdot i = -1 < 0$ &ndash; die Definitheit bräche zusammen. Mit Konjugation gilt dagegen $\\langle v, v \\rangle = \\sum_k |v_k|^2 \\ge 0$, und $\\sum_k |v_k|^2 = 0$ erzwingt $v_k = 0$ für alle $k$.<br><br>&bdquo;Sesqui&ldquo; steht für <i>eineinhalb</i>: einmal linear plus &bdquo;halb&ldquo; linear.",
    example: "In $\\mathbb{C}^2$: Für $v = (1, i)^t$ und $w = (2, 1-i)^t$:<br>$$\\langle v, w \\rangle = 1 \\cdot \\overline{2} + i \\cdot \\overline{(1-i)} = 2 + i(1+i) = 2 + i - 1 = 1 + i.$$",
    counterexample: "<b>1.</b> Die Formel $\\sum_k v_k w_k$ (ohne Konjugation) ist auf $\\mathbb{C}^d$ <i>kein</i> inneres Produkt: $\\langle (i,0)^t, (i,0)^t \\rangle = -1$ verletzt die Definitheit.<br><b>2.</b> Das innere Produkt ist im 2. Argument <i>nicht</i> linear: $\\langle v, i w \\rangle = \\overline{i}\\langle v, w\\rangle = -i\\langle v, w\\rangle \\neq i \\langle v, w \\rangle$ (ausser $\\langle v,w\\rangle = 0$)."
  },
  {
    id: "k5_prop_5_3",
    title: "Proposition 5.3: Cauchy-Schwarz-Ungleichung",
    category: "5.1 Normierte Vektorräume",
    type: "satz",
    front: "Wie lautet die <b>Cauchy-Schwarz-Ungleichung</b> auf $\\mathbb{C}^d$ (bzw. $\\mathbb{R}^d$), und wann gilt Gleichheit?",
    back: "Für alle $v, w \\in \\mathbb{C}^d$ gilt:<br>$$|\\langle v, w \\rangle| \\le \\|v\\| \\, \\|w\\|$$<br>Gleichheit gilt <b>genau dann</b>, wenn $v$ und $w$ <b>linear abhängig</b> sind (d.h. es existiert ein $\\alpha \\in \\mathbb{C}$ mit $\\alpha v = w$ oder $v = \\alpha w$).",
    meta: "Skript: Proposition 5.3, S. 227-228",
    explanation: "<b>Bedeutung:</b> Das innere Produkt zweier Vektoren lässt sich durch ihre Längen kontrollieren. Im Reellen erlaubt das die Definition des Zwischenwinkels $\\theta$ über $\\cos(\\theta) = \\frac{\\langle v, w \\rangle}{\\|v\\|_2 \\|w\\|_2} \\in [-1,1]$.<br><br><b>Bemerkung aus dem Skript:</b> Der Beweis verwendet <i>nur</i> die drei Axiome des inneren Produkts (Sesquilinearität, Symmetrie, Definitheit), nicht die konkrete Formel &ndash; die Ungleichung gilt also in jedem Vektorraum mit innerem Produkt.",
    example: "Für $v = (1, 2)^t$, $w = (2, 4)^t = 2v$ (linear abhängig): $|\\langle v, w \\rangle| = |2 + 8| = 10 = \\sqrt{5} \\cdot \\sqrt{20} = \\|v\\|\\|w\\|$ &ndash; Gleichheit.",
    counterexample: "<b>1.</b> Für linear unabhängige Vektoren ist die Ungleichung <i>strikt</i>: $v = (1,0)^t$, $w = (1,1)^t$ ergibt $|\\langle v, w\\rangle| = 1 < \\sqrt{2} = \\|v\\|\\|w\\|$.<br><b>2.</b> Ohne Betrag links wäre die Aussage schwächer bzw. falsch herum nutzlos: Im Reellen kann $\\langle v, w \\rangle$ negativ sein (z.B. $v = (1,0)^t$, $w = (-1,0)^t$: $\\langle v,w\\rangle = -1$), die Schranke gilt für den <i>Betrag</i>."
  },
  {
    id: "k5_beweis_5_3",
    title: "Beweis: Cauchy-Schwarz-Ungleichung",
    category: "5.1 Normierte Vektorräume",
    type: "beweis",
    front: "Skizziere den Beweis der <b>Cauchy-Schwarz-Ungleichung</b> (Proposition 5.3).",
    back: "<b>Ansatz (Orthogonalprojektion):</b> Für $v = 0$ oder $w = 0$ sind beide Seiten $0$. Sei also $w \\neq 0$ und $\\alpha = \\frac{\\langle v, w \\rangle}{\\|w\\|^2}$.<br><br>1. Ausmultiplizieren mit Sesquilinearität:<br>$$0 \\le \\|v - \\alpha w\\|^2 = \\|v\\|^2 - \\overline{\\alpha}\\langle v, w \\rangle - \\alpha\\overline{\\langle v, w \\rangle} + |\\alpha|^2 \\|w\\|^2$$<br>2. Einsetzen von $\\alpha$:<br>$$= \\|v\\|^2 - 2\\frac{|\\langle v,w \\rangle|^2}{\\|w\\|^2} + \\frac{|\\langle v,w \\rangle|^2}{\\|w\\|^2} = \\|v\\|^2 - \\frac{|\\langle v,w \\rangle|^2}{\\|w\\|^2}$$<br>3. Also $|\\langle v, w \\rangle|^2 \\le \\|v\\|^2 \\|w\\|^2$, Wurzelziehen liefert die Behauptung.<br><br><b>Gleichheitsfall:</b> Gleichheit gilt genau für $\\|v - \\alpha w\\| = 0$, also $v = \\alpha w$. $\\square$",
    meta: "Skript: Beweis von Proposition 5.3, S. 228",
    explanation: "<b>Geometrische Intuition:</b> $\\alpha w$ ist die Orthogonalprojektion von $v$ auf die von $w$ aufgespannte Gerade; $v - \\alpha w$ ist das &bdquo;Lot&ldquo;. Dass dessen Längenquadrat $\\ge 0$ ist, <i>ist</i> bereits die Ungleichung.<br><br><svg width='100%' height='130' viewBox='0 0 320 130' style='max-width:100%; height:auto; background:#f8fafc; border-radius:8px; margin-top:8px;'><line x1='30' y1='105' x2='280' y2='105' stroke='#94a3b8' stroke-width='2'/><line x1='30' y1='105' x2='230' y2='30' stroke='#1f407a' stroke-width='2.5'/><line x1='30' y1='105' x2='180' y2='105' stroke='#10b981' stroke-width='3'/><line x1='230' y1='30' x2='180' y2='105' stroke='#ef4444' stroke-dasharray='4 4' stroke-width='2'/><text x='115' y='60' fill='#1f407a' font-weight='bold' font-size='12'>v</text><text x='105' y='122' fill='#10b981' font-weight='bold' font-size='12'>&#945;w</text><text x='215' y='75' fill='#ef4444' font-weight='bold' font-size='12'>v &#8722; &#945;w</text></svg>",
    example: "Alternative (Übung 5.4): Die Cauchy-Ungleichung mit $\\varepsilon$ liefert einen zweiten Beweis, indem man $\\varepsilon$ optimal wählt.",
    counterexample: "<b>1.</b> Der Trick $\\|v - \\alpha w\\|^2 \\ge 0$ funktioniert nur mit der <i>optimalen</i> Projektion $\\alpha = \\frac{\\langle v,w\\rangle}{\\|w\\|^2}$ &ndash; mit z.B. $\\alpha = 1$ erhält man nur die (schwächere) Aussage $2\\operatorname{Re}\\langle v,w\\rangle \\le \\|v\\|^2 + \\|w\\|^2$.<br><b>2.</b> Für $w = 0$ darf man nicht durch $\\|w\\|^2$ teilen &ndash; dieser Fall muss (trivial) separat behandelt werden; ein häufiger Beweisfehler."
  },
  {
    id: "k5_uebung_5_4",
    title: "Übung 5.4: Cauchy-Ungleichung mit einem Epsilon",
    category: "5.1 Normierte Vektorräume",
    type: "lemma",
    front: "Wie lautet die <b>Cauchy-Ungleichung mit $\\varepsilon$</b> für $v, w \\in \\mathbb{R}^d$ und $\\varepsilon > 0$?",
    back: "Für jedes $\\varepsilon > 0$ und alle $v, w \\in \\mathbb{R}^d$ gilt:<br>$$|\\langle v, w \\rangle| \\le \\frac{\\varepsilon^2}{2} \\|v\\|^2 + \\frac{1}{2\\varepsilon^2} \\|w\\|^2$$<br>Daraus lässt sich die Cauchy-Schwarz-Ungleichung (5.1) folgern.",
    meta: "Skript: Übung 5.4, S. 228",
    explanation: "<b>Beweis-Trick:</b> Positivität der Norm für den Ausdruck $\\left\\|\\varepsilon v \\mp \\tfrac{1}{\\varepsilon} w\\right\\|^2 \\ge 0$; Ausmultiplizieren ergibt<br>$$\\varepsilon^2 \\|v\\|^2 \\mp 2\\langle v, w \\rangle + \\tfrac{1}{\\varepsilon^2}\\|w\\|^2 \\ge 0.$$<br><b>Rückweg zu Cauchy-Schwarz:</b> Für $v, w \\neq 0$ minimiere die rechte Seite über $\\varepsilon$: Mit $\\varepsilon^2 = \\frac{\\|w\\|}{\\|v\\|}$ wird sie exakt $\\|v\\|\\|w\\|$. Diese &bdquo;$\\varepsilon$-Form&ldquo; einer Ungleichung ist ein in der Analysis allgegenwärtiges Muster (Young-Ungleichung).",
    example: "Mit $\\varepsilon = 1$: $|\\langle v, w \\rangle| \\le \\tfrac12\\|v\\|^2 + \\tfrac12\\|w\\|^2$ &ndash; das arithmetische Mittel der Normquadrate; Spezialfall $ab \\le \\tfrac{a^2+b^2}{2}$ für reelle Zahlen.",
    counterexample: "<b>1.</b> Die Schranke ist für festes $\\varepsilon$ i.A. <i>nicht</i> scharf: Für $v = w = (1,0)^t$ und $\\varepsilon^2 = 2$ liefert sie $1 \\le 1 + \\tfrac14 = 1.25$.<br><b>2.</b> Ohne den Gegenterm $\\frac{1}{2\\varepsilon^2}\\|w\\|^2$ wäre die Aussage falsch: $|\\langle v,w\\rangle| \\le \\frac{\\varepsilon^2}{2}\\|v\\|^2$ scheitert für kleines $\\varepsilon$ (nimm $v = w \\neq 0$). Die beiden Terme balancieren sich."
  },
  {
    id: "k5_korollar_5_5",
    title: "Korollar 5.5: Die Euklidische Norm ist eine Norm",
    category: "5.1 Normierte Vektorräume",
    type: "satz",
    front: "Wie ist die <b>Euklidische Norm (2-Norm)</b> auf $\\mathbb{C}^d$ definiert, und wie beweist man ihre Dreiecksungleichung?",
    back: "$$\\|v\\| = \\|v\\|_2 = \\sqrt{\\langle v, v \\rangle} = \\sqrt{\\sum_{k=1}^d |v_k|^2}$$<br><b>Korollar 5.5:</b> Sie definiert eine Norm auf $\\mathbb{C}^d$.<br><br><b>Beweis der Dreiecksungleichung:</b><br>$$\\|v+w\\|^2 = \\langle v+w, v+w \\rangle = \\|v\\|^2 + 2\\operatorname{Re}(\\langle v,w \\rangle) + \\|w\\|^2$$<br>Mit $\\operatorname{Re}(\\langle v,w\\rangle) \\le |\\langle v,w \\rangle| \\le \\|v\\|\\|w\\|$ (Cauchy-Schwarz):<br>$$\\|v+w\\|^2 \\le \\|v\\|^2 + 2\\|v\\|\\|w\\| + \\|w\\|^2 = (\\|v\\| + \\|w\\|)^2,$$<br>Wurzelziehen liefert die Behauptung. $\\square$",
    meta: "Skript: Korollar 5.5, S. 228",
    explanation: "Definitheit und Homogenität folgen direkt aus den Eigenschaften des inneren Produkts ($\\langle \\alpha v, \\alpha v \\rangle = |\\alpha|^2 \\langle v,v\\rangle$). Die Dreiecksungleichung ist der nicht-triviale Teil &ndash; sie steht und fällt mit Cauchy-Schwarz. Durch Einschränkung auf $\\mathbb{R}^d \\subseteq \\mathbb{C}^d$ erhält man das Euklidische innere Produkt und die Euklidische Norm auf $\\mathbb{R}^d$; alle Aussagen gelten dort analog.",
    example: "$v = (3,4)^t \\in \\mathbb{R}^2$: $\\|v\\|_2 = \\sqrt{9 + 16} = 5$ &ndash; der klassische Satz des Pythagoras als Spezialfall.",
    counterexample: "<b>1.</b> Ohne den Umweg über $\\|v+w\\|^2$ geht es schief: Punktweises Wurzelziehen aus $\\sum|v_k + w_k|^2$ lässt sich nicht direkt abschätzen &ndash; der quadratische Trick mit $\\operatorname{Re}$ ist wesentlich.<br><b>2.</b> $\\sqrt{\\sum_k v_k^2}$ (ohne Beträge) ist auf $\\mathbb{C}^d$ keine Norm: Für $v = (i, 0)^t$ wäre $\\sum v_k^2 = -1$ und die Wurzel nicht einmal reell."
  },
  {
    id: "k5_raum_stetiger_fkt",
    title: "5.1.2 Normen auf dem Funktionenraum C([a,b])",
    category: "5.1 Normierte Vektorräume",
    type: "definition",
    front: "Wie sind die <b>Supremumsnorm $\\|f\\|_\\infty$</b> und die <b>1-Norm $\\|f\\|_1$</b> auf dem Vektorraum $C([a,b])$ der stetigen Funktionen definiert?",
    back: "Sei $K = [a,b]$ mit $a < b$ kompakt und $V = C([a,b])$ der Vektorraum der stetigen reellwertigen Funktionen auf $[a,b]$.<br><br>&bull; <b>Supremumsnorm (Beispiel 5.7):</b><br>$$\\|f\\|_\\infty = \\sup_{x \\in [a,b]} |f(x)| = \\max_{x \\in [a,b]} |f(x)|$$<br>(das Maximum wird nach Satz 3.67 angenommen)<br><br>&bull; <b>1-Norm (Beispiel 5.8):</b><br>$$\\|f\\|_1 = \\int_a^b |f(x)|\\,\\mathrm{d}x$$<br>(wohldefiniert, da $|f|$ stetig ist (Prop. 3.52) und stetige Funktionen Riemann-integrierbar sind (Satz 4.42))",
    meta: "Skript: Übung 5.6, Beispiele 5.7 & 5.8, Übung 5.9, S. 229",
    explanation: "<b>Warum Funktionenräume?</b> $C([a,b])$ ist <i>unendlich-dimensional</i> (Übung 5.6) &ndash; die Analysis braucht Normen auch jenseits von $\\mathbb{R}^d$, etwa für Differentialgleichungen.<br><b>Gegenüberstellung:</b> $\\|f\\|_\\infty$ kontrolliert den maximalen Ausschlag (&rarr; gleichmässige Konvergenz), $\\|f\\|_1$ die Fläche unter $|f|$ (&rarr; Konvergenz im Mittel).<br><br><svg width='100%' height='130' viewBox='0 0 320 130' style='max-width:100%; height:auto; background:#f8fafc; border-radius:8px; margin-top:8px;'><path d='M30,100 Q100,10 160,80 T290,100' fill='none' stroke='#1f407a' stroke-width='2.5'/><line x1='30' y1='100' x2='290' y2='100' stroke='#94a3b8' stroke-width='1.5'/><line x1='105' y1='32' x2='105' y2='100' stroke='#ef4444' stroke-dasharray='3 3' stroke-width='2'/><text x='112' y='45' fill='#ef4444' font-size='11' font-weight='bold'>||f||&#8734; (Peak)</text><path d='M30,100 Q100,10 160,80 T290,100 Z' fill='#10b981' fill-opacity='0.2'/><text x='200' y='85' fill='#10b981' font-size='11' font-weight='bold'>||f||&#8321; (Fläche)</text></svg>",
    example: "Für $f(x) = x$ auf $[0,1]$: $\\|f\\|_\\infty = 1$ und $\\|f\\|_1 = \\int_0^1 x\\,\\mathrm{d}x = \\tfrac12$. Dreiecksungleichung für $\\|\\cdot\\|_\\infty$: $\\max|f_1 + f_2| \\le \\max(|f_1| + |f_2|) \\le \\max|f_1| + \\max|f_2|$.",
    counterexample: "<b>1.</b> Auf dem grösseren Raum aller <i>Riemann-integrierbaren</i> Funktionen ist $\\|f\\|_1 = \\int_a^b |f|\\,\\mathrm{d}x$ keine Norm mehr: Die Funktion $f = \\mathbb{1}_{\\{a\\}}$ (Wert 1 nur am Punkt $a$) erfüllt $\\|f\\|_1 = 0$, ist aber nicht die Nullfunktion &ndash; die Definitheit braucht die Stetigkeit!<br><b>2.</b> Die beiden Normen sind wesentlich verschieden: Es gibt Folgen $(f_n)_n$ mit $\\|f_n\\|_1 \\to 0$, aber $\\|f_n\\|_\\infty = 1$ für alle $n$ (schmale, hohe Dreiecks-Zacken; Übung 5.47)."
  },

  // ========================================================================
  // 5.2 METRISCHE RÄUME
  // ========================================================================
  {
    id: "k5_def_5_10",
    title: "Definition 5.10: Metrik und metrischer Raum",
    category: "5.2 Metrische Räume",
    type: "definition",
    front: "Wie sind ein <b>metrischer Raum $(X, \\mathrm{d})$</b> und eine <b>Metrik</b> formal definiert?",
    back: "Ein <b>metrischer Raum</b> $(X, \\mathrm{d})$ ist eine Menge $X$ gemeinsam mit einer Abbildung $\\mathrm{d}: X \\times X \\to \\mathbb{R}_{\\ge 0}$ (der <b>Metrik</b>), die für alle $x_1, x_2, x_3 \\in X$ erfüllt:<br><br>1. <b>Definitheit:</b> $\\mathrm{d}(x_1, x_2) = 0 \\iff x_1 = x_2$<br>2. <b>Symmetrie:</b> $\\mathrm{d}(x_1, x_2) = \\mathrm{d}(x_2, x_1)$<br>3. <b>Dreiecksungleichung:</b> $\\mathrm{d}(x_1, x_3) \\le \\mathrm{d}(x_1, x_2) + \\mathrm{d}(x_2, x_3)$",
    meta: "Skript: Definition 5.10, S. 230",
    explanation: "Eine Metrik weist je zwei Punkten ihre <b>Distanz</b> zu &ndash; ganz ohne Vektorraumstruktur. Deshalb kann man auf beliebigen Mengen (Graphen, Funktionenräumen, Wörtern, ...) Abstände messen. Die Dreiecksungleichung sagt: Der kürzeste Weg von $x_1$ nach $x_3$ ist höchstens so lang wie der Umweg über $x_2$.<br><br>Für eine Teilmenge $Y \\subseteq X$ ist die Einschränkung $\\mathrm{d}|_{Y \\times Y}$ eine Metrik auf $Y$: $Y$ heisst dann <b>Teilraum</b> mit der <b>induzierten Metrik</b>.",
    example: "$X = \\mathbb{R}$ mit $\\mathrm{d}(x,y) = |x-y|$; $X = \\mathbb{C}$ mit $\\mathrm{d}(z_1,z_2) = |z_1 - z_2|$; $X = \\mathbb{C}^d$ mit $\\mathrm{d}_1, \\mathrm{d}_2$ oder $\\mathrm{d}_\\infty$ (von den Normen $\\|\\cdot\\|_1, \\|\\cdot\\|_2, \\|\\cdot\\|_\\infty$ induziert).",
    counterexample: "<b>1.</b> $\\mathrm{d}(x,y) = (x-y)^2$ auf $\\mathbb{R}$ ist <b>keine</b> Metrik: Die Dreiecksungleichung scheitert, denn $\\mathrm{d}(0,2) = 4 > \\mathrm{d}(0,1) + \\mathrm{d}(1,2) = 1 + 1 = 2$.<br><b>2.</b> $\\mathrm{d}(x,y) = |x^2 - y^2|$ auf $\\mathbb{R}$ ist keine Metrik: $\\mathrm{d}(1,-1) = 0$, obwohl $1 \\neq -1$ &ndash; die Definitheit scheitert."
  },
  {
    id: "k5_lemma_5_11",
    title: "Lemma 5.11: Eine Norm definiert eine Metrik",
    category: "5.2 Metrische Räume",
    type: "lemma",
    front: "Wie <b>induziert</b> eine Norm $\\|\\cdot\\|$ auf einem Vektorraum $V$ eine Metrik, und wie beweist man die Metrik-Axiome?",
    back: "Durch $$\\mathrm{d}_{\\|\\cdot\\|}(v_1, v_2) = \\|v_1 - v_2\\|$$ wird eine Metrik auf $V$ definiert, die <b>von der Norm induzierte Metrik</b>.<br><br><b>Beweis:</b><br>1. <i>Definitheit:</i> $\\|v_1 - v_2\\| = 0 \\iff v_1 - v_2 = 0 \\iff v_1 = v_2$ (Definitheit der Norm).<br>2. <i>Symmetrie:</i> $\\|v_1 - v_2\\| = \\|(-1)(v_2 - v_1)\\| = |-1|\\,\\|v_2 - v_1\\|$ (Homogenität mit $\\alpha = -1$).<br>3. <i>Dreiecksungleichung:</i> $\\|v_1 - v_3\\| = \\|(v_1 - v_2) + (v_2 - v_3)\\| \\le \\|v_1 - v_2\\| + \\|v_2 - v_3\\|$. $\\square$",
    meta: "Skript: Lemma 5.11, S. 231",
    explanation: "Jeder normierte Vektorraum ist automatisch ein metrischer Raum: Abstand = Länge des Differenzvektors. Damit vererben sich alle kommenden Begriffe (Bälle, Konvergenz, Stetigkeit) sofort auf $\\mathbb{R}^d$, $\\mathbb{C}^d$ und $C([a,b])$.<br><br><b>Hierarchie des Kapitels:</b> $(\\mathbb{C}^d, \\mathbb{R}^d \\text{ mit Normen}) \\subsetneq$ normierte Vektorräume $\\subsetneq$ metrische Räume.",
    example: "Die Euklidische Norm induziert die Euklidische Metrik $\\mathrm{d}_2(x,y) = \\sqrt{\\sum_i (x_i - y_i)^2}$ auf $\\mathbb{R}^d$.",
    counterexample: "<b>1.</b> Die Umkehrung gilt nicht: Die <i>diskrete Metrik</i> auf $\\mathbb{R}^d$ stammt von keiner Norm, denn eine Norm mit $\\|v_2 - v_1\\| = \\mathrm{d}_{\\text{diskret}}(v_1,v_2)$ würde die Homogenität verletzen ($\\mathrm{d}(0, 2v) = 1 \\neq 2 = 2\\,\\mathrm{d}(0,v)$ für $v \\neq 0$).<br><b>2.</b> Metriken existieren auch, wo gar kein Vektorraum ist (Graphen, SNCF-Metrik auf Halbgeraden) &ndash; dort ist &bdquo;induziert von einer Norm&ldquo; nicht einmal sinnvoll fragbar."
  },
  {
    id: "k5_bsp_5_12_metriken",
    title: "Beispiel 5.12: Diskrete, Manhattan- und SNCF-Metrik",
    category: "5.2 Metrische Räume",
    type: "beispiel",
    front: "Beschreibe die <b>diskrete Metrik</b>, die <b>Manhattanmetrik</b> und die <b>SNCF-Metrik</b> (Metrik der französischen Eisenbahn).",
    back: "&bull; <b>Diskrete Metrik</b> (auf einer beliebigen Menge $X$):<br>$$\\mathrm{d}_{\\text{diskret}}(x_1, x_2) = \\begin{cases} 1 & \\text{falls } x_1 \\neq x_2 \\\\ 0 & \\text{falls } x_1 = x_2 \\end{cases}$$<br>&bull; <b>Manhattanmetrik</b> auf $X = [0,1]^2$:<br>$$\\mathrm{d}_{\\text{NY}}((x_1,y_1),(x_2,y_2)) = |x_1-x_2| + |y_1-y_2|$$<br>(= Einschränkung der Einsmetrik $\\mathrm{d}_1$ von $\\mathbb{R}^2$)<br>&bull; <b>SNCF-Metrik</b> auf $X = \\mathbb{C}$:<br>$$\\mathrm{d}_{\\text{SNCF}}(z_1, z_2) = \\begin{cases} |z_1 - z_2| & \\text{falls } z_1, z_2 \\text{ linear abhängig über } \\mathbb{R} \\\\ |z_1| + |z_2| & \\text{falls linear unabhängig} \\end{cases}$$",
    meta: "Skript: Beispiel 5.12 & Übung 5.13, S. 231-233",
    explanation: "<b>Anschauung:</b> Manhattan: In einem Schachbrett-Strassennetz läuft man erst entlang der einen, dann der anderen Koordinate. SNCF: Jede Bahnreise von $z_1$ nach $z_2$ führt über den Ursprung (&bdquo;Paris&ldquo;), ausser beide liegen auf derselben von Paris ausgehenden Strecke &ndash; $\\mathbb{C}$ zerfällt in unendlich viele Halbgeraden, die sich nur in $0$ treffen.<br><br><svg width='100%' height='140' viewBox='0 0 320 140' style='max-width:100%; height:auto; background:#f8fafc; border-radius:8px;'><line x1='30' y1='110' x2='120' y2='110' stroke='#10b981' stroke-width='3'/><line x1='120' y1='110' x2='120' y2='30' stroke='#10b981' stroke-width='3'/><circle cx='30' cy='110' r='4' fill='#10b981'/><circle cx='120' cy='30' r='4' fill='#10b981'/><text x='75' y='130' text-anchor='middle' font-size='10' fill='#444'>Manhattan (Gitter)</text><line x1='180' y1='40' x2='230' y2='90' stroke='#ef4444' stroke-width='2'/><line x1='230' y1='90' x2='280' y2='30' stroke='#ef4444' stroke-width='2'/><circle cx='230' cy='90' r='5' fill='#1f407a'/><text x='230' y='105' text-anchor='middle' font-size='9' font-weight='bold' fill='#1f407a'>Paris (0)</text><text x='230' y='130' text-anchor='middle' font-size='10' fill='#444'>SNCF (über Paris)</text></svg><br>Auch <b>Graphen</b> (Beispiel 5.12 (iv)) tragen Metriken: Distanz zweier Ecken = minimale Kantenzahl eines Verbindungsweges (benötigt Zusammenhang des Graphen).",
    example: "SNCF: $z_1 = 3i$, $z_2 = 4i$ liegen auf derselben Ursprungsgeraden &rarr; $\\mathrm{d}(z_1,z_2) = |3i - 4i| = 1$. Dagegen $z_1 = 3$, $z_2 = 4i$ (linear unabhängig) &rarr; $\\mathrm{d}(z_1,z_2) = 3 + 4 = 7$. Diskret: $\\mathrm{d}(0{,}00001, 0) = 1$, egal wie nahe die Punkte liegen.",
    counterexample: "<b>1.</b> Die diskrete Metrik auf $\\mathbb{R}^d$ ist <i>nicht</i> von einer Norm induziert (Homogenität scheitert) &ndash; metrische Räume sind echt allgemeiner als normierte Vektorräume.<br><b>2.</b> Manhattan- und SNCF-Metrik auf $[0,1]^2 \\subseteq \\mathbb{C}$ sind wirklich verschieden: Es gibt Folgen, die bezüglich $\\mathrm{d}_{\\text{NY}}$ konvergieren, aber bezüglich $\\mathrm{d}_{\\text{SNCF}}$ divergieren (Übung 5.43)."
  },
  {
    id: "k5_uebung_5_14",
    title: "Wichtige Übung 5.14: Umgekehrte Dreiecksungleichung",
    category: "5.2 Metrische Räume",
    type: "lemma",
    front: "Wie lautet die <b>umgekehrte Dreiecksungleichung</b> in einem metrischen Raum $(X, \\mathrm{d})$, und wie beweist man sie?",
    back: "Für alle $x_1, x_2, y \\in X$ gilt:<br>$$|\\mathrm{d}(x_1, y) - \\mathrm{d}(x_2, y)| \\le \\mathrm{d}(x_1, x_2)$$<br><br><b>Beweis:</b><br>1. Dreiecksungleichung: $\\mathrm{d}(x_1, y) \\le \\mathrm{d}(x_1, x_2) + \\mathrm{d}(x_2, y)$, also $\\mathrm{d}(x_1,y) - \\mathrm{d}(x_2,y) \\le \\mathrm{d}(x_1,x_2)$.<br>2. Rollentausch $x_1 \\leftrightarrow x_2$: $\\mathrm{d}(x_2,y) - \\mathrm{d}(x_1,y) \\le \\mathrm{d}(x_1,x_2)$.<br>3. $A \\le C$ und $-A \\le C$ ergeben $|A| \\le C$. $\\square$",
    meta: "Skript: Wichtige Übung 5.14, S. 233",
    explanation: "<b>Bedeutung:</b> Die Abstandsfunktion $x \\mapsto \\mathrm{d}(x, y)$ zu einem festen Punkt $y$ ist 1-Lipschitz-stetig: Bewegt man den Messpunkt um $\\mathrm{d}(x_1,x_2)$, ändert sich der gemessene Abstand höchstens um ebendiese Grösse. Das ist das metrische Analogon zu $||a| - |b|| \\le |a - b|$ in $\\mathbb{R}$ (Satz 2.46).",
    example: "In $\\mathbb{R}$: $|\\,|x_1 - y| - |x_2 - y|\\,| \\le |x_1 - x_2|$. Konkret $x_1 = 5, x_2 = 3, y = 0$: $|5 - 3| = 2 \\le 2$. Allgemeiner ist $x \\mapsto \\mathrm{d}(x, A)$ für Teilmengen $A$ ebenfalls 1-Lipschitz (Wichtige Übung 5.54).",
    counterexample: "<b>1.</b> Die Schranke lässt sich nicht verbessern: Für $y$ auf der Strecke &bdquo;hinter&ldquo; $x_2$ (in $\\mathbb{R}$: $x_1 = 0, x_2 = 1, y = 2$) gilt Gleichheit $|2 - 1| = 1 = \\mathrm{d}(x_1,x_2)$.<br><b>2.</b> Ohne Betrag ist die Aussage $\\mathrm{d}(x_1,y) - \\mathrm{d}(x_2,y) \\le \\mathrm{d}(x_1,x_2)$ zwar richtig, aber schwächer &ndash; erst beide Richtungen zusammen kontrollieren die Differenz vollständig."
  },
  {
    id: "k5_uebung_5_15",
    title: "Übung 5.15: Deformation der Metrik",
    category: "5.2 Metrische Räume",
    type: "lemma",
    front: "Zeige: Für einen metrischen Raum $(X, \\mathrm{d})$ sind auch $\\mathrm{d}_{1/2}(x,y) = \\sqrt{\\mathrm{d}(x,y)}$ und $\\tilde{\\mathrm{d}}(x,y) = \\frac{\\mathrm{d}(x,y)}{1 + \\mathrm{d}(x,y)}$ Metriken auf $X$.",
    back: "<b>1. Wurzelmetrik $\\mathrm{d}_{1/2}$:</b> Definitheit und Symmetrie vererben sich direkt. Dreiecksungleichung: Aus $\\mathrm{d}(x,z) \\le \\mathrm{d}(x,y) + \\mathrm{d}(y,z)$ und $\\sqrt{a+b} \\le \\sqrt{a} + \\sqrt{b}$ (für $a, b \\ge 0$) folgt<br>$$\\sqrt{\\mathrm{d}(x,z)} \\le \\sqrt{\\mathrm{d}(x,y)} + \\sqrt{\\mathrm{d}(y,z)}.$$<br><b>2. Gestauchte Metrik $\\tilde{\\mathrm{d}}$:</b> Die Hilfsfunktion $f(t) = \\frac{t}{1+t} = 1 - \\frac{1}{1+t}$ ist monoton wachsend und subadditiv ($f(a+b) \\le f(a) + f(b)$), also<br>$$\\tilde{\\mathrm{d}}(x,z) = f(\\mathrm{d}(x,z)) \\le f(\\mathrm{d}(x,y) + \\mathrm{d}(y,z)) \\le \\tilde{\\mathrm{d}}(x,y) + \\tilde{\\mathrm{d}}(y,z). \\quad \\square$$",
    meta: "Skript: Übung 5.15, S. 233",
    explanation: "<b>Anwendung:</b> $\\tilde{\\mathrm{d}}$ staucht jede (auch unbeschränkte) Metrik in das Intervall $[0, 1)$, ohne den Konvergenzbegriff zu ändern &ndash; nützlich, wenn man beschränkte Abstände braucht. Beide Konstruktionen zeigen: Aus einer Metrik lassen sich viele weitere bauen, indem man eine konkave, monotone Funktion $f$ mit $f(0)=0$ nachschaltet.",
    example: "Für $\\mathrm{d}(x,y) = 999$: $\\tilde{\\mathrm{d}}(x,y) = \\frac{999}{1000} = 0{,}999 < 1$. Für $\\mathrm{d}(x,y) = \\tfrac14$: $\\mathrm{d}_{1/2}(x,y) = \\tfrac12$ &ndash; kleine Abstände werden von der Wurzel <i>vergrössert</i>.",
    counterexample: "<b>1.</b> Die Konstruktion funktioniert nicht mit konvexen Funktionen: $\\mathrm{d}(x,y)^2$ ist i.A. <i>keine</i> Metrik (auf $\\mathbb{R}$: $\\mathrm{d}(0,2)^2 = 4 > 1 + 1$) &ndash; Quadrieren zerstört die Dreiecksungleichung, Wurzelziehen bewahrt sie.<br><b>2.</b> $\\tilde{\\mathrm{d}}$ und $\\mathrm{d}$ sind i.A. <i>nicht</i> $C$-äquivalent (siehe Übung zu äquivalenten Metriken): $\\tilde{\\mathrm{d}} < 1$ ist beschränkt, $\\mathrm{d}$ auf $\\mathbb{R}$ nicht &ndash; gleiche Konvergenz trotz fehlender $C$-Äquivalenz."
  },
  {
    id: "k5_def_5_16",
    title: "Definition 5.16: Offene Bälle und offene Mengen",
    category: "5.2 Metrische Räume",
    type: "definition",
    front: "Wie sind ein <b>offener Ball $B_r(x_0)$</b> und eine <b>offene Teilmenge $O \\subseteq X$</b> in einem metrischen Raum $(X, \\mathrm{d})$ definiert?",
    back: "&bull; Für $r > 0$ und $x_0 \\in X$ heisst<br>$$B_r(x_0) = \\{x \\in X \\mid \\mathrm{d}(x, x_0) < r\\}$$<br>der <b>offene Ball</b> mit Radius $r$ um $x_0$.<br><br>&bull; Eine Teilmenge $O \\subseteq X$ ist <b>offen</b>, falls es zu jedem $x_0 \\in O$ ein $r > 0$ gibt mit<br>$$B_r(x_0) \\subseteq O.$$",
    meta: "Skript: Definition 5.16, S. 234 (vgl. Definition 2.52)",
    explanation: "Eine Menge ist offen, wenn jeder ihrer Punkte ein <i>innerer</i> Punkt ist: Um jeden Punkt passt noch ein kleiner Sicherheitsball, der ganz in der Menge liegt. Beachte die <i>strikte</i> Ungleichung $\\mathrm{d}(x,x_0) < r$ in der Ball-Definition.<br><br><svg width='100%' height='130' viewBox='0 0 320 130' style='max-width:100%; height:auto; background:#f8fafc; border-radius:8px; margin-top:6px;'><path d='M40,30 Q160,10 280,40 Q300,100 240,110 Q100,120 30,80 Z' fill='#10b981' fill-opacity='0.15' stroke='#10b981' stroke-width='2'/><circle cx='140' cy='70' r='30' fill='none' stroke='#1f407a' stroke-dasharray='3 3' stroke-width='1.5'/><circle cx='140' cy='70' r='3' fill='#1f407a'/><text x='140' y='63' font-size='10' text-anchor='middle' font-weight='bold' fill='#1f407a'>x&#8320;</text><text x='175' y='73' font-size='9' fill='#1f407a'>B&#7523;(x&#8320;) &#8838; O</text><text x='250' y='80' font-size='12' font-weight='bold' fill='#10b981'>O</text></svg>",
    example: "Jedes offene Intervall $(a,b) \\subseteq \\mathbb{R}$ ist offen bezüglich der Standardmetrik: Um $x_0 \\in (a,b)$ wähle $r = \\min\\{x_0 - a, b - x_0\\} > 0$. Auch jeder offene Ball selbst ist offen (das zeigt der Beweis von Lemma 5.17).",
    counterexample: "<b>1.</b> $[a,b]$ ist <i>nicht</i> offen in $\\mathbb{R}$: Jeder Ball $B_r(a) = (a-r, a+r)$ um den Randpunkt $a$ enthält Punkte ausserhalb von $[a,b]$.<br><b>2.</b> Offenheit hängt vom umgebenden Raum ab: $[0, 1)$ ist nicht offen in $\\mathbb{R}$, aber <i>offen im Teilraum</i> $X = [0, \\infty)$ mit induzierter Metrik, denn dort ist $B_1(0) = [0,1)$ &ndash; &bdquo;offen&ldquo; ist keine absolute Eigenschaft der Menge allein."
  },
  {
    id: "k5_lemma_5_17",
    title: "Lemma 5.17: Schnitte offener Bälle",
    category: "5.2 Metrische Räume",
    type: "lemma",
    front: "Was besagt <b>Lemma 5.17</b> über den Schnitt zweier offener Bälle, und wie beweist man es?",
    back: "Seien $x_1, x_2 \\in X$ und $r_1, r_2 > 0$. Dann ist $B_{r_1}(x_1) \\cap B_{r_2}(x_2)$ <b>offen</b>: Für jedes $x$ im Schnitt existiert ein $r > 0$ mit $B_r(x) \\subseteq B_{r_1}(x_1) \\cap B_{r_2}(x_2)$.<br><br><b>Beweis:</b><br>1. Setze $r = \\min\\{r_1 - \\mathrm{d}(x, x_1),\\ r_2 - \\mathrm{d}(x, x_2)\\}$; es gilt $r > 0$, da $\\mathrm{d}(x,x_i) < r_i$.<br>2. Für $y \\in B_r(x)$ liefert die Dreiecksungleichung:<br>$$\\mathrm{d}(y, x_1) \\le \\mathrm{d}(y, x) + \\mathrm{d}(x, x_1) < \\big(r_1 - \\mathrm{d}(x,x_1)\\big) + \\mathrm{d}(x,x_1) = r_1$$<br>3. Genauso $\\mathrm{d}(y, x_2) < r_2$, also $B_r(x) \\subseteq B_{r_1}(x_1) \\cap B_{r_2}(x_2)$. $\\square$",
    meta: "Skript: Lemma 5.17, S. 234-235",
    explanation: "<b>Idee:</b> $r$ ist der kleinere der beiden &bdquo;Restabstände zum Rand&ldquo;. So bleibt der neue Ball ganz im Schnittgebiet.<br><br><svg width='100%' height='135' viewBox='0 0 320 135' style='max-width:100%; height:auto; background:#f8fafc; border-radius:8px; margin-top:6px;'><circle cx='110' cy='68' r='55' fill='none' stroke='#1f407a' stroke-width='2'/><circle cx='190' cy='68' r='55' fill='none' stroke='#10b981' stroke-width='2'/><circle cx='150' cy='68' r='18' fill='#ef4444' fill-opacity='0.25' stroke='#ef4444' stroke-width='1.5'/><circle cx='150' cy='68' r='2.5' fill='#ef4444'/><text x='150' y='61' text-anchor='middle' font-size='9' font-weight='bold' fill='#ef4444'>x</text><text x='70' y='68' font-size='10' fill='#1f407a'>B&#7523;&#8321;(x&#8321;)</text><text x='205' y='68' font-size='10' fill='#10b981'>B&#7523;&#8322;(x&#8322;)</text></svg>",
    example: "In $\\mathbb{R}$: $B_2(0) \\cap B_2(3) = (-2,2) \\cap (1,5) = (1,2)$ &ndash; wieder offen. Für $x = 1{,}5$: $r = \\min\\{2 - 1{,}5,\\ 2 - 1{,}5\\} = 0{,}5$ und tatsächlich $(1, 2) \\supseteq B_{0{,}5}(1{,}5)$.",
    counterexample: "<b>1.</b> Für <i>unendliche</i> Schnitte wird die Aussage falsch: $\\bigcap_{n \\in \\mathbb{N}} B_{1/n}(0) = \\{0\\}$ in $\\mathbb{R}$ ist nicht offen &ndash; die Radien $r$ schrumpfen gegen $0$ weg.<br><b>2.</b> Der naive Radius $r = \\min\\{r_1, r_2\\}$ (statt der Restabstände) funktioniert nicht: Für $x$ nahe am Rand von $B_{r_1}(x_1)$ ragt $B_r(x)$ sonst über den Ball hinaus."
  },
  {
    id: "k5_uebung_5_18_baelle",
    title: "Wichtige Übung 5.18: Wie sehen offene Bälle aus?",
    category: "5.2 Metrische Räume",
    type: "beispiel",
    front: "Beschreibe die offenen Bälle $B_r(x_0)$ in folgenden metrischen Räumen:<br>1. diskrete Metrik, 2. Manhattanmetrik auf $[0,1]^2$, 3. Metrik $\\mathrm{d}_\\infty$ auf $\\mathbb{R}^2$, 4. SNCF-Metrik auf $\\mathbb{C}$, 5. $C([0,1])$ mit $\\|\\cdot\\|_\\infty$.",
    back: "1. <b>Diskret:</b> $B_r(x_0) = \\{x_0\\}$ für $r \\le 1$ und $B_r(x_0) = X$ für $r > 1$.<br>2. <b>Manhattan:</b> auf die Spitze gestellte Quadrate (Rauten) $\\{|x - x_0| + |y - y_0| < r\\}$, geschnitten mit $[0,1]^2$.<br>3. <b>$\\mathrm{d}_\\infty$:</b> achsenparallele offene Quadrate mit Seitenlänge $2r$ um $x_0$.<br>4. <b>SNCF:</b> Für $r \\le |x_0|$: ein offenes Segment auf der Ursprungsgeraden durch $x_0$ (Paris wird nicht erreicht). Für $r > |x_0|$: dieses Segment <i>plus</i> ein Stern aus Segmenten der Länge $r - |x_0|$ auf <i>allen</i> Halbgeraden ab dem Ursprung.<br>5. <b>$C([0,1])$, $\\|\\cdot\\|_\\infty$:</b> alle stetigen Funktionen, deren Graph im offenen &bdquo;$\\varepsilon$-Schlauch&ldquo; der Breite $2r$ um den Graphen von $x_0 = f$ verläuft.",
    meta: "Skript: Wichtige Übung 5.18 & Applet 5.19, S. 235",
    explanation: "<b>Fazit:</b> Die Anschauung vom &bdquo;runden Ball&ldquo; täuscht! Je nach Metrik sind Bälle Quadrate, Rauten, Einpunktmengen, Sterne aus Strecken oder Funktionenschläuche. Die <i>Form</i> der Bälle kodiert die Geometrie der Metrik &ndash; ihre Rolle für Konvergenz und Offenheit ist aber immer dieselbe.",
    example: "Diskrete Metrik mit $r = \\tfrac12$: $B_{1/2}(x_0) = \\{x_0\\}$ &ndash; jede Einpunktmenge ist offen, also ist <i>jede</i> Teilmenge offen (Vereinigung von Einpunktmengen).",
    counterexample: "<b>1.</b> Bälle müssen nicht &bdquo;zusammenhängend aussehen wie Kreise&ldquo;: Der SNCF-Ball mit $r > |x_0|$ ist ein Stern aus unendlich vielen Strecken.<br><b>2.</b> Bälle müssen nicht einmal unendlich sein: In der diskreten Metrik ist $B_1(x_0) = \\{x_0\\}$ endlich &ndash; die Intuition &bdquo;Ball = Umgebung mit vielen Punkten&ldquo; ist metrikabhängig."
  },

  // ========================================================================
  // 5.3 FOLGEN UND KONVERGENZ
  // ========================================================================
  {
    id: "k5_def_5_20",
    title: "Definition 5.20: Folgen",
    category: "5.3 Folgen und Konvergenz",
    type: "definition",
    front: "Was ist formal eine <b>Folge</b> in einer Menge $X$, und wann heisst sie <b>konstant</b> bzw. <b>schliesslich konstant</b>?",
    back: "Eine <b>Folge</b> in $X$ ist eine Abbildung $a: \\mathbb{N} \\to X$. Man schreibt $a_n = a(n)$ (das $n$-te <b>Folgenglied</b>) und notiert die Folge als $(a_1, a_2, \\dots)$, $(a_n)_{n \\in \\mathbb{N}}$, $(a_n)_{n=1}^\\infty$ oder kurz $(a_n)_n$. Die Menge aller Folgen in $X$ ist $X^{\\mathbb{N}}$.<br><br>&bull; <b>konstant:</b> $a_n = a_m$ für alle $m, n \\in \\mathbb{N}$<br>&bull; <b>schliesslich konstant:</b> es existiert $N \\in \\mathbb{N}$ mit $a_n = a_m$ für alle $m, n \\ge N$",
    meta: "Skript: Definition 5.20, S. 236",
    explanation: "Eine Folge ist eine unendliche, geordnete Liste. &bdquo;Schliesslich konstant&ldquo; heisst: ab einem Index erstarrt sie zu einem festen Wert &ndash; das ist das einfachste Konvergenzverhalten und der Ausgangspunkt für die allgemeine Konvergenzdefinition.<br><br>Ist $X = V$ ein Vektorraum, so bilden die Folgen mit $(a_n)_n + (b_n)_n = (a_n + b_n)_n$ und $\\alpha (a_n)_n = (\\alpha a_n)_n$ selbst einen Vektorraum.",
    example: "$a_n = 5$ für $n \\ge 10$ und $a_n = n$ für $n < 10$ ist schliesslich konstant (ab $N = 10$). Die Folge $(\\tfrac1n)_n = (1, \\tfrac12, \\tfrac13, \\dots)$ ist weder konstant noch schliesslich konstant &ndash; aber konvergent.",
    counterexample: "<b>1.</b> $a_n = (-1)^n$ ist nicht schliesslich konstant: Sie wechselt unendlich oft zwischen $-1$ und $1$.<br><b>2.</b> Eine Folge ist mehr als ihre Wertemenge: $(1, 2, 1, 2, \\dots)$ und $(1, 1, 2, 2, 1, 1, \\dots)$ haben dieselbe Wertemenge $\\{1,2\\}$, sind aber verschiedene Folgen &ndash; die Abbildung $n \\mapsto a_n$ zählt, nicht nur das Bild."
  },
  {
    id: "k5_def_5_21",
    title: "Definition 5.21: Konvergenz in metrischen Räumen",
    category: "5.3 Folgen und Konvergenz",
    type: "definition",
    front: "Wie ist die <b>Konvergenz</b> einer Folge $(a_n)_n$ in einem metrischen Raum $(X, \\mathrm{d})$ definiert? Was bedeuten <b>konvergent</b> und <b>divergent</b>?",
    back: "$(a_n)_n$ <b>konvergiert</b> (oder <b>strebt</b>) gegen $A \\in X$, falls es für jedes $\\varepsilon > 0$ ein $N \\in \\mathbb{N}$ gibt, so dass $\\mathrm{d}(a_n, A) < \\varepsilon$ für alle $n \\ge N$. In Prädikatenlogik:<br>$$\\forall \\varepsilon > 0\\ \\exists N \\in \\mathbb{N}\\ \\forall n \\ge N: \\mathrm{d}(a_n, A) < \\varepsilon$$<br>$A$ heisst dann <b>Grenzwert</b>, geschrieben $\\lim_{n \\to \\infty} a_n = A$.<br><br>Eine Folge heisst <b>konvergent</b>, falls sie einen Grenzwert besitzt, und <b>divergent</b>, falls nicht.<br><br><i>Äquivalent:</i> $(a_n)_n \\to A$ in $X$ $\\iff$ die reelle Folge $(\\mathrm{d}(a_n, A))_n$ konvergiert gegen $0$.",
    meta: "Skript: Definition 5.21, S. 236-237",
    explanation: "<b>$\\varepsilon$-Ball-Intuition:</b> Egal wie klein der Ball $B_\\varepsilon(A)$ gewählt wird &ndash; ab einem Index $N$ liegen <i>alle weiteren</i> Folgenglieder darin. Es reicht sogar, die Bedingung für alle kleinen $\\varepsilon \\in (0, \\varepsilon_0)$ zu prüfen (Übung 5.23).<br><br><svg width='100%' height='130' viewBox='0 0 320 130' style='max-width:100%; height:auto; background:#f8fafc; border-radius:8px;'><circle cx='210' cy='65' r='45' fill='#10b981' fill-opacity='0.15' stroke='#10b981' stroke-dasharray='3 3' stroke-width='2'/><circle cx='210' cy='65' r='3' fill='#1f407a'/><text x='210' y='55' text-anchor='middle' font-weight='bold' fill='#1f407a'>A</text><circle cx='30' cy='100' r='3' fill='#ef4444'/><circle cx='75' cy='30' r='3' fill='#ef4444'/><circle cx='130' cy='90' r='3' fill='#ef4444'/><circle cx='185' cy='75' r='3' fill='#10b981'/><circle cx='220' cy='60' r='3' fill='#10b981'/><circle cx='205' cy='68' r='3' fill='#10b981'/><text x='30' y='115' font-size='9' fill='#666'>a&#8321;</text><text x='185' y='90' font-size='9' font-weight='bold' fill='#10b981'>a&#8342;</text></svg>",
    example: "In $(\\mathbb{R}, |\\cdot|)$: $\\lim_{n\\to\\infty} \\tfrac1n = 0$, denn zu $\\varepsilon > 0$ existiert nach dem Archimedischen Prinzip (Satz 2.68) ein $N$ mit $\\tfrac1N < \\varepsilon$, und für $n \\ge N$ gilt $|\\tfrac1n - 0| \\le \\tfrac1N < \\varepsilon$ (Beispiel 5.28).",
    counterexample: "<b>1.</b> $a_n = (-1)^n$ ist divergent: Für jedes $A$ liegt unendlich oft ein Folgenglied im Abstand $\\ge 1$ von $A$ (Beispiel 5.28).<br><b>2.</b> Konvergenz hängt von der Metrik ab: $a_n = \\tfrac1n$ konvergiert in $(\\mathbb{R}, |\\cdot|)$ gegen $0$, aber bezüglich der <i>diskreten</i> Metrik divergiert dieselbe Folge, denn $\\mathrm{d}_{\\text{diskret}}(a_n, 0) = 1$ für alle $n$."
  },
  {
    id: "k5_lemma_5_22",
    title: "Lemma 5.22: Eindeutigkeit des Grenzwerts",
    category: "5.3 Folgen und Konvergenz",
    type: "lemma",
    front: "Zeige: Jede konvergente Folge in einem metrischen Raum besitzt einen <b>eindeutigen</b> Grenzwert.",
    back: "<b>Beweis (Widerspruch):</b><br>1. Angenommen $A_1 \\neq A_2$ sind zwei Grenzwerte von $(a_n)_n$. Dann ist $\\varepsilon = \\frac{\\mathrm{d}(A_1, A_2)}{2} > 0$.<br>2. Konvergenz gegen $A_1$: $\\exists N_1$ mit $\\mathrm{d}(a_n, A_1) < \\varepsilon$ für $n \\ge N_1$; gegen $A_2$: $\\exists N_2$ analog.<br>3. Für $N = \\max\\{N_1, N_2\\}$ liefert die Dreiecksungleichung:<br>$$\\mathrm{d}(A_1, A_2) \\le \\mathrm{d}(A_1, a_N) + \\mathrm{d}(a_N, A_2) < 2\\varepsilon = \\mathrm{d}(A_1, A_2),$$<br>ein Widerspruch. $\\square$<br><br>Deshalb spricht man von <b>dem</b> Grenzwert $\\lim_{n\\to\\infty} a_n$.",
    meta: "Skript: Lemma 5.22 & Übung 5.23, S. 237",
    explanation: "<b>Idee:</b> Zwei Punkte mit positivem Abstand lassen sich durch disjunkte $\\varepsilon$-Bälle trennen &ndash; eine Folge kann sich aber nicht gleichzeitig schliesslich in beiden Bällen aufhalten.<br><br><svg width='100%' height='110' viewBox='0 0 320 110' style='max-width:100%; height:auto; background:#f8fafc; border-radius:8px;'><circle cx='90' cy='55' r='35' fill='none' stroke='#1f407a' stroke-width='2'/><circle cx='230' cy='55' r='35' fill='none' stroke='#ef4444' stroke-width='2'/><circle cx='90' cy='55' r='3' fill='#1f407a'/><circle cx='230' cy='55' r='3' fill='#ef4444'/><text x='90' y='50' text-anchor='middle' font-size='10' font-weight='bold' fill='#1f407a'>A&#8321;</text><text x='230' y='50' text-anchor='middle' font-size='10' font-weight='bold' fill='#ef4444'>A&#8322;</text><line x1='90' y1='55' x2='230' y2='55' stroke='#666' stroke-dasharray='2 2'/><text x='160' y='45' text-anchor='middle' font-size='9' fill='#666'>d(A&#8321;, A&#8322;)</text></svg>",
    example: "Die Wahl $\\varepsilon = \\frac{\\mathrm{d}(A_1,A_2)}{2}$ ist der Standard-Trick: Halber Abstand garantiert disjunkte Bälle $B_\\varepsilon(A_1) \\cap B_\\varepsilon(A_2) = \\emptyset$.",
    counterexample: "<b>1.</b> Die Eindeutigkeit benutzt die <i>Definitheit</i> der Metrik: Mit einer &bdquo;Pseudometrik&ldquo; wie $\\mathrm{d}(x,y) = |x^2 - y^2|$ auf $\\mathbb{R}$ hätte die konstante Folge $a_n = 1$ die beiden &bdquo;Grenzwerte&ldquo; $1$ und $-1$.<br><b>2.</b> <i>Häufungspunkte</i> sind nicht eindeutig: $(-1)^n$ hat die beiden Häufungspunkte $\\pm 1$ &ndash; Eindeutigkeit ist eine Besonderheit des Grenzwerts, nicht jeder &bdquo;Annäherungsbegriff&ldquo; hat sie."
  },
  {
    id: "k5_def_5_24",
    title: "Definition 5.24: Umgebungen & Lemma 5.25: Indexverschiebung",
    category: "5.3 Folgen und Konvergenz",
    type: "definition",
    front: "Was ist eine <b>Umgebung</b> von $x_0 \\in X$? Wie charakterisiert man Konvergenz über Umgebungen, und was besagt die <b>Indexverschiebung</b> (Lemma 5.25)?",
    back: "&bull; <b>Umgebung (Def. 5.24):</b> Eine Teilmenge $U \\subseteq X$ heisst Umgebung von $x_0$, falls sie eine $\\varepsilon$-Umgebung $B_\\varepsilon(x_0)$ für ein $\\varepsilon > 0$ enthält.<br><br>&bull; <b>Umgebungs-Charakterisierung:</b> $(x_n)_n \\to x_0$ genau dann, wenn für <i>jede</i> Umgebung $U$ von $x_0$ <b>fast alle</b> (= alle bis auf endlich viele) Folgenglieder in $U$ liegen.<br><br>&bull; <b>Lemma 5.25 (Indexverschiebung):</b> Für $\\ell \\in \\mathbb{N}_0$ ist $(a_n)_n$ genau dann konvergent, wenn $(a_{n+\\ell})_n$ konvergent ist; in diesem Fall gilt $\\lim_{n\\to\\infty} a_n = \\lim_{n\\to\\infty} a_{n+\\ell}$.",
    meta: "Skript: Definition 5.24, Lemma 5.25, Übung 5.26, S. 238",
    explanation: "Die Umgebungsformulierung macht Konvergenz unabhängig von konkreten $\\varepsilon$-Werten und ebnet den Weg zur Topologie (2. Semester). &bdquo;Fast alle&ldquo; ist der Schlüsselbegriff: endlich viele Ausreisser am Anfang sind immer erlaubt &ndash; genau das formalisiert die Indexverschiebung: Konvergenz ist eine Eigenschaft des &bdquo;Folgenendes&ldquo;.",
    example: "$[0, 2]$ ist eine Umgebung von $1$ in $\\mathbb{R}$ (sie enthält $B_{1/2}(1)$), obwohl $[0,2]$ nicht offen ist. Indexverschiebung: $\\lim_n \\frac{1}{n+5} = \\lim_n \\frac1n = 0$.",
    counterexample: "<b>1.</b> $[1, 2]$ ist <i>keine</i> Umgebung von $1$: Kein Ball $B_\\varepsilon(1) = (1-\\varepsilon, 1+\\varepsilon)$ passt hinein.<br><b>2.</b> &bdquo;Unendlich viele Folgenglieder in jeder Umgebung&ldquo; genügt <i>nicht</i> für Konvergenz: $(-1)^n$ hat unendlich viele Glieder in jeder Umgebung von $1$, konvergiert aber nicht &ndash; es braucht <i>fast alle</i> (das ist der Unterschied zwischen Häufungspunkt und Grenzwert)."
  },
  {
    id: "k5_lemma_5_27",
    title: "Lemma 5.27: Konvergente Folgen sind beschränkt",
    category: "5.3 Folgen und Konvergenz",
    type: "lemma",
    front: "Wann heisst eine Folge in einem normierten Vektorraum <b>beschränkt</b>, und warum ist jede konvergente Folge beschränkt (Lemma 5.27)?",
    back: "Eine Folge $(a_n)_n$ in $(V, \\|\\cdot\\|)$ heisst <b>beschränkt</b>, falls es ein $M > 0$ gibt mit $\\|a_n\\| \\le M$ für alle $n \\in \\mathbb{N}$.<br><br><b>Lemma 5.27:</b> Jede konvergente Folge in $V$ ist beschränkt.<br><br><b>Beweis:</b><br>1. Sei $A = \\lim a_n$. Zu $\\varepsilon = 1$ existiert $N$ mit $\\|a_n - A\\| < 1$ für $n \\ge N$.<br>2. Dreiecksungleichung: $\\|a_n\\| = \\|a_n - A + A\\| \\le \\|a_n - A\\| + \\|A\\| < 1 + \\|A\\|$ für $n \\ge N$.<br>3. Insgesamt: $\\|a_n\\| \\le \\max\\{\\|a_1\\|, \\dots, \\|a_{N-1}\\|,\\ 1 + \\|A\\|\\}$ für alle $n$. $\\square$",
    meta: "Skript: Lemma 5.27, S. 238 (Verallgemeinerung: Übung in 5.5.2)",
    explanation: "<b>Prinzip:</b> Ab Index $N$ sitzen alle Glieder im Ball $B_1(A)$ &ndash; der ist beschränkt. Die endlich vielen Glieder davor können die Schranke nur um ein Maximum endlich vieler Werte vergrössern. &bdquo;Endlich viele Ausnahmen schaden der Beschränktheit nie.&ldquo; Die Kontraposition ist ein wichtiges Divergenzkriterium: <b>unbeschränkt $\\Rightarrow$ divergent</b>.",
    example: "$a_n = \\tfrac1n$: konvergent gegen $0$ und beschränkt durch $M = 1$. Kontraposition angewandt: $q^n$ mit $|q| > 1$ ist unbeschränkt (Bernoulli-Ungleichung), also divergent (Beispiel 5.34 (iv)).",
    counterexample: "<b>1.</b> Die Umkehrung ist falsch: $a_n = (-1)^n$ ist beschränkt ($M = 1$), aber divergent.<br><b>2.</b> $\\varepsilon = 1$ fest zu wählen ist hier erlaubt, weil Beschränktheit nur <i>irgendeine</i> Schranke braucht &ndash; aber Vorsicht: Für einen <i>Konvergenz</i>beweis darf man $\\varepsilon$ nie fest wählen, dort muss die Bedingung für <i>alle</i> $\\varepsilon > 0$ gelten."
  },
  {
    id: "k5_bsp_5_28",
    title: "Beispiel 5.28 & Übung 5.29: Erste konvergente und divergente Folgen",
    category: "5.3 Folgen und Konvergenz",
    type: "beispiel",
    front: "Diskutiere die Grundbeispiele aus dem Skript: konstante Folgen, $\\left(\\tfrac1n\\right)_n$ und $\\left((-1)^n\\right)_n$. Was besagt die <b>Wichtige Übung 5.29</b>?",
    back: "&bull; <b>Konstante Folge</b> $a_n = A$: konvergiert gegen $A$; ebenso konvergieren schliesslich konstante Folgen gegen ihren Endwert.<br><br>&bull; $\\lim_{n\\to\\infty} \\tfrac1n = 0$: Zu $\\varepsilon > 0$ liefert das <b>Archimedische Prinzip</b> (Satz 2.68) ein $N$ mit $\\tfrac1N < \\varepsilon$; für $n \\ge N$ folgt $0 \\le \\tfrac1n \\le \\tfrac1N < \\varepsilon$.<br><br>&bull; $a_n = (-1)^n$ ist <b>divergent</b>: Für $A \\neq 1$ setze $\\varepsilon = |A - 1| > 0$; es gibt beliebig späte gerade $n$ mit $|a_n - A| = |1 - A| = \\varepsilon \\not< \\varepsilon$. Für $A = 1$ liefern die ungeraden $n$ den Abstand $|1 - (-1)| = 2$.<br><br>&bull; <b>Wichtige Übung 5.29:</b> Ist $(a_n)_n$ eine konvergente Folge in $\\mathbb{C}$ mit $a_n \\in \\mathbb{R}$ für alle $n$, so ist auch $\\lim_{n\\to\\infty} a_n$ reell.",
    meta: "Skript: Beispiel 5.28, Wichtige Übung 5.29, S. 239",
    explanation: "Diese drei Beispiele sind die Prototypen: <i>stillstehend</i>, <i>gegen einen Punkt fallend</i>, <i>ewig oszillierend</i>. Der Beweis für $\\tfrac1n$ zeigt das typische Muster jedes $\\varepsilon$-$N$-Beweises: $\\varepsilon$ gegeben, $N$ konstruieren, Abschätzung für alle $n \\ge N$. Die Divergenz von $(-1)^n$ zeigt das Muster eines Negativ-Beweises: <i>jeden</i> Kandidaten $A$ ausschliessen.<br><br>Eine konvergente Folge mit Grenzwert $0$ heisst <b>Nullfolge</b>.",
    example: "Mit den Rechenregeln (Prop. 5.30) folgt sofort mehr: $\\frac{7n^4 + 15}{3n^4 + n^3 + n - 1} \\to \\frac73$ (kürze durch $n^4$; Übung 5.32).",
    counterexample: "<b>1.</b> $(-1)^n$: beschränkt, aber divergent &ndash; Beschränktheit genügt nicht für Konvergenz.<br><b>2.</b> Übung 5.33: Ist $(a_n)_n$ komplexwertig mit $a_n \\neq 0$ und $(a_n^{-1})_n \\to 0$, so ist $(a_n)_n$ <i>divergent</i> (sie ist unbeschränkt) &ndash; &bdquo;der Kehrwert wird klein&ldquo; bedeutet gerade nicht Konvergenz der Folge selbst."
  },
  {
    id: "k5_prop_5_30",
    title: "Proposition 5.30: Rechenregeln für Grenzwerte",
    category: "5.3 Folgen und Konvergenz",
    type: "proposition",
    front: "Welche <b>additiven und multiplikativen Eigenschaften</b> hat der Grenzwert konvergenter Folgen $(a_n)_n, (b_n)_n$ in $\\mathbb{C}$ (Proposition 5.30)?",
    back: "Seien $\\lim a_n = A$ und $\\lim b_n = B$. Dann gilt:<br><br>(i) <b>Summe:</b> $(a_n + b_n)_n$ konvergiert mit $\\lim (a_n + b_n) = A + B$.<br>(ii) <b>Produkt:</b> $(a_n b_n)_n$ konvergiert mit $\\lim (a_n b_n) = A \\cdot B$; insbesondere $\\lim (\\alpha a_n) = \\alpha A$ für $\\alpha \\in \\mathbb{C}$.<br>(iii) <b>Kehrwert:</b> Falls $a_n \\neq 0$ für alle $n$ und $A \\neq 0$, konvergiert $\\left(\\tfrac{1}{a_n}\\right)_n$ mit $\\lim \\tfrac{1}{a_n} = \\tfrac{1}{A}$.<br><br><i>Folgerung:</i> Die konvergenten Folgen bilden einen Unterraum von $\\mathbb{C}^{\\mathbb{N}}$, und $\\lim$ ist eine lineare Abbildung nach $\\mathbb{C}$.",
    meta: "Skript: Proposition 5.30, S. 239-241",
    explanation: "<b>Beweis-Kniffe:</b> Für die Summe: $|(a_n + b_n) - (A+B)| \\le |a_n - A| + |b_n - B| < \\tfrac\\varepsilon2 + \\tfrac\\varepsilon2$. Für das Produkt die <b>Mischterm-Zerlegung</b>:<br>$$|a_nb_n - AB| \\le |a_n - A||b_n| + |A||b_n - B|,$$<br>wobei $|b_n| \\le 1 + |B|$ für grosse $n$ (Beschränktheit, Lemma 5.27). Für den Kehrwert verhindert die umgekehrte Dreiecksungleichung, dass $a_n$ zu klein wird: $|a_n| > \\tfrac{|A|}{2}$ für grosse $n$.",
    example: "$$\\lim_{n \\to \\infty} \\frac{3n + 1}{2n - 5} = \\lim_{n \\to \\infty} \\frac{3 + \\tfrac1n}{2 - \\tfrac5n} = \\frac{3 + 0}{2 - 0} = \\frac{3}{2}$$ &ndash; Zähler und Nenner durch $n$ teilen und (i)&ndash;(iii) anwenden (vgl. Übung 5.32).",
    counterexample: "<b>1.</b> Die Umkehrung von (i) ist falsch: $a_n = (-1)^n$ und $b_n = (-1)^{n+1}$ divergieren beide, ihre Summe $a_n + b_n = 0$ konvergiert.<br><b>2.</b> In (iii) ist $A \\neq 0$ wesentlich: Für $a_n = \\tfrac1n \\to 0$ divergiert $\\tfrac{1}{a_n} = n$ (unbeschränkt). Auch $a_n \\neq 0$ für alle $n$ ist nötig, damit die Kehrwertfolge überhaupt definiert ist."
  },
  {
    id: "k5_bsp_5_34",
    title: "Beispiel 5.34: Geometrische Folgen",
    category: "5.3 Folgen und Konvergenz",
    type: "beispiel",
    front: "Untersuche das Konvergenzverhalten der <b>geometrischen Folge</b> $(q^n)_n$ für $q \\in \\mathbb{C}$ in allen Fällen.",
    back: "&bull; <b>$q = 1$:</b> $q^n = 1 \\to 1$.<br>&bull; <b>$|q| < 1$:</b> $\\lim_{n\\to\\infty} q^n = 0$ (Nullfolge).<br>&bull; <b>$|q| > 1$:</b> $(q^n)_n$ ist unbeschränkt und daher divergent.<br>&bull; <b>$|q| = 1$, $q \\neq 1$:</b> beschränkt, aber divergent (z.B. $q = -1$).",
    meta: "Skript: Beispiel 5.34 & Übung 5.35, S. 241-242",
    explanation: "<b>Beweis-Ideen aus dem Skript:</b><br>&bull; $|q| > 1$: Schreibe $|q| = 1 + x$ mit $x > 0$. Bernoulli (Lemma 3.5) + Archimedes: $|q|^N \\ge 1 + Nx > M$ &ndash; unbeschränkt, mit Lemma 5.27 divergent.<br>&bull; $|q| < 1$, $q \\neq 0$: $|q^{-1}| > 1$, also existiert $N$ mit $|q|^{-N} > \\tfrac1\\varepsilon$, d.h. $|q^n| \\le |q|^N < \\varepsilon$ für $n \\ge N$.<br>&bull; $|q| = 1$, $q \\neq 1$ (elegant!): Wäre $\\lim q^n = A$, so $A = \\lim q^{n+1} = q \\lim q^n = qA$ (Prop. 5.30 + Indexverschiebung Lemma 5.25), also $(q-1)A = 0$ und $A = 0$ &ndash; im Widerspruch zu $|q^n| = 1$ für alle $n$.",
    example: "$q = 0{,}5$: $\\lim (0{,}5)^n = 0$. Sogar $nq^n \\to 0$ für $|q| < 1$ (Übung 5.35) &ndash; die geometrische Abnahme schlägt das lineare Wachstum.",
    counterexample: "<b>1.</b> $q = -1$: Die Folge $(-1, 1, -1, \\dots)$ ist beschränkt, hat aber keinen Grenzwert.<br><b>2.</b> $q = i$ (mit $|q| = 1$): $(i, -1, -i, 1, i, \\dots)$ läuft periodisch über vier Werte auf dem Einheitskreis &ndash; beschränkt, divergent; der Fall $|q| = 1, q \\neq 1$ ist also auch mit komplexen $q$ echt divergent."
  },
  {
    id: "k5_uebung_5_36",
    title: "Übung 5.36: Cesàro-Mittel",
    category: "5.3 Folgen und Konvergenz",
    type: "lemma",
    front: "Was besagt Übung 5.36 über die <b>Cesàro-Mittel</b> (arithmetische Mittel) $b_n = \\frac{1}{n}\\sum_{k=1}^n a_k$ einer konvergenten Folge?",
    back: "Sei $(a_n)_n$ eine konvergente Folge in $\\mathbb{C}$. Dann konvergiert auch die Folge der <b>Cesàro-Mittel</b> (auch <b>arithmetische Mittel</b> oder <b>Cauchy-Mittel</b>)<br>$$b_n = \\frac{1}{n} \\sum_{k=1}^n a_k$$<br>und hat <b>denselben Grenzwert</b> wie $(a_n)_n$.<br><br><b>Die Umkehrung gilt nicht:</b> Konvergenz der Cesàro-Mittel impliziert nicht die Konvergenz der Folge selbst.",
    meta: "Skript: Übung 5.36, S. 242",
    explanation: "<b>Beweisidee:</b> Teile die Summe in einen &bdquo;frühen&ldquo; Teil (endlich viele Glieder, deren Beitrag $\\tfrac{1}{n}\\sum_{k \\le N}|a_k - A|$ mit wachsendem $n$ verschwindet) und einen &bdquo;späten&ldquo; Teil, in dem alle $a_k$ bereits $\\varepsilon$-nahe an $A$ liegen. Mitteln <i>glättet</i> also: Es erhält Grenzwerte, bügelt aber Oszillationen weg &ndash; der Einstieg in die Theorie der Summierbarkeit divergenter Folgen.",
    example: "$a_n = \\tfrac1n \\to 0$: Auch $b_n = \\tfrac1n\\left(1 + \\tfrac12 + \\dots + \\tfrac1n\\right) \\to 0$ (die harmonischen Partialsummen wachsen langsamer als $n$).",
    counterexample: "<b>1.</b> $a_n = (-1)^n$ divergiert, aber die Cesàro-Mittel $b_n \\in \\{0, -\\tfrac1n\\}$ konvergieren gegen $0$ &ndash; Cesàro-Konvergenz ist echt schwächer als Konvergenz.<br><b>2.</b> Cesàro rettet nicht alles: Für die unbeschränkte Folge $a_n = n$ divergieren auch die Mittel $b_n = \\frac{n+1}{2}$ &ndash; Mitteln hilft nur gegen Oszillation, nicht gegen Wachstum."
  },
  {
    id: "k5_def_5_38",
    title: "Definition 5.38 & Lemma 5.39: Teilfolgen",
    category: "5.3 Folgen und Konvergenz",
    type: "definition",
    front: "Was ist eine <b>Teilfolge</b>, und was besagt <b>Lemma 5.39</b> über Teilfolgen konvergenter Folgen?",
    back: "&bull; <b>Definition 5.38:</b> Ist $(a_n)_n$ eine Folge in $X$ und $(n_k)_k: k \\in \\mathbb{N} \\mapsto n_k \\in \\mathbb{N}$ eine <i>streng monoton wachsende</i> Folge, dann heisst $(a_{n_k})_k$ eine <b>Teilfolge</b> von $(a_n)_n$.<br><br>&bull; <b>Lemma 5.39:</b> Ist $(a_n)_n$ konvergent in einem metrischen Raum $(X,\\mathrm{d})$, so konvergiert <i>jede</i> Teilfolge $(a_{n_k})_k$ und hat denselben Grenzwert: $\\lim_{k\\to\\infty} a_{n_k} = \\lim_{n\\to\\infty} a_n$ (Beweis: Wichtige Übung 5.40).",
    meta: "Skript: Definition 5.38, Lemma 5.39, Übungen 5.40/5.41, S. 242-243",
    explanation: "<b>Beweis-Grundlage:</b> Aus strenger Monotonie folgt $n_k \\ge k$ &ndash; die Teilfolge eilt der Hauptfolge voraus und erbt jede $\\varepsilon$-$N$-Bedingung.<br><br><b>Divergenz-Werkzeug:</b> Zwei Teilfolgen mit <i>verschiedenen</i> Grenzwerten $\\Rightarrow$ Hauptfolge divergiert (eleganter Kurzbeweis für $(-1)^n$!).<br><br><b>Übung 5.41:</b> Umgekehrt konvergiert $(a_n)_n$ genau dann gegen $A$, wenn <i>jede</i> Teilfolge eine gegen $A$ konvergente Teil-Teilfolge besitzt.",
    example: "$a_n = \\tfrac1n$: Die Teilfolge der geraden Indizes $a_{2k} = \\tfrac{1}{2k}$ konvergiert ebenfalls gegen $0$. Streng monoton muss $(n_k)_k$ sein: $n_k = 2k$ ist erlaubt.",
    counterexample: "<b>1.</b> $a_n = (-1)^n$: $a_{2k} = 1 \\to 1$ und $a_{2k+1} = -1 \\to -1$ &ndash; zwei Teilfolgen-Grenzwerte, also divergiert die Hauptfolge.<br><b>2.</b> Konvergente Teilfolgen allein genügen nicht: $(0, 1, 0, 2, 0, 3, \\dots)$ hat die konvergente Teilfolge $(0,0,0,\\dots)$, ist aber divergent (sogar unbeschränkt)."
  },
  {
    id: "k5_prop_5_42",
    title: "Proposition 5.42: Häufungspunkte einer Folge",
    category: "5.3 Folgen und Konvergenz",
    type: "proposition",
    front: "Wie ist ein <b>Häufungspunkt</b> einer Folge definiert, und welche zwei Bedingungen sind äquivalent (Proposition 5.42)?",
    back: "Sei $(a_n)_n$ eine Folge im metrischen Raum $(X, \\mathrm{d})$. Ein Punkt $A \\in X$ heisst <b>Häufungspunkt</b> von $(a_n)_n$, falls die folgenden <i>äquivalenten</i> Bedingungen gelten:<br><br>(a) Es gibt eine Teilfolge $(a_{n_k})_k$ mit $\\lim_{k \\to \\infty} a_{n_k} = A$.<br><br>(b) Für alle $\\varepsilon > 0$ und alle $N \\in \\mathbb{N}$ gibt es ein $n \\ge N$ mit $\\mathrm{d}(a_n, A) < \\varepsilon$<br>(d.h. in jedem $\\varepsilon$-Ball um $A$ liegen unendlich viele Folgenglieder).",
    meta: "Skript: Proposition 5.42, S. 243-244",
    explanation: "<b>Grenzwert vs. Häufungspunkt:</b><br>&bull; <i>Grenzwert:</i> <b>fast alle</b> Glieder in jedem $\\varepsilon$-Ball.<br>&bull; <i>Häufungspunkt:</i> <b>unendlich viele</b> Glieder in jedem $\\varepsilon$-Ball (&bdquo;immer wieder Besuch&ldquo;).<br><br><b>Beweis (b) $\\Rightarrow$ (a):</b> Rekursiv wählt man $n_1 < n_2 < \\dots$ mit $\\mathrm{d}(a_{n_k}, A) < \\tfrac1k$. Das Skript merkt an, dass hier eine (schwache) Form des <b>Auswahlaxioms</b> eingeht &ndash; vermeidbar, indem man stets das minimale $n_{k+1}$ wählt.",
    example: "$a_n = (-1)^n$ hat genau die Häufungspunkte $1$ und $-1$. Konvergente Folgen haben genau einen Häufungspunkt: ihren Grenzwert.",
    counterexample: "<b>1.</b> Ein einziger Häufungspunkt garantiert keine Konvergenz: $(0, 1, 0, 2, 0, 3, \\dots)$ hat nur den Häufungspunkt $0$, divergiert aber (unbeschränkt).<br><b>2.</b> Verwechsle Häufungspunkte einer <i>Folge</i> nicht mit Häufungspunkten einer <i>Menge</i> (Def. 2.73): Die konstante Folge $(5, 5, 5, \\dots)$ hat den Folgen-Häufungspunkt $5$, aber ihre Wertemenge $\\{5\\}$ hat keinen Mengen-Häufungspunkt &ndash; dafür bräuchte es andere Punkte beliebig nahe."
  },
  {
    id: "k5_prop_5_44",
    title: "Proposition 5.44: Konvergenz in Cᵈ und Rᵈ",
    category: "5.3 Folgen und Konvergenz",
    type: "satz",
    front: "Was besagt <b>Proposition 5.44</b> über Konvergenz bezüglich $\\|\\cdot\\|_\\infty$, $\\|\\cdot\\|_1$, $\\|\\cdot\\|_2$ und komponentenweise Konvergenz in $\\mathbb{C}^d$?",
    back: "Für eine Folge $(v_n)_n$ in $\\mathbb{C}^d$ und $v \\in \\mathbb{C}^d$ sind äquivalent:<br><br>(i) $(v_n)_n \\to v$ bezüglich $\\|\\cdot\\|_\\infty$<br>(ii) $(v_n)_n \\to v$ bezüglich $\\|\\cdot\\|_1$<br>(iii) $(v_n)_n \\to v$ bezüglich $\\|\\cdot\\|_2$<br>(iv) Für alle $j = 1,\\dots,d$ konvergiert $(\\pi_j(v_n))_n$ gegen $\\pi_j(v)$ (<b>komponentenweise Konvergenz</b>).<br><br>Dasselbe gilt für Folgen in $\\mathbb{R}^d$.<br><br><b>Beweisbasis</b> sind die Normvergleiche (5.2), (5.3):<br>$$\\|w\\|_\\infty \\le \\|w\\|_1 \\le d\\,\\|w\\|_\\infty, \\qquad \\|w\\|_\\infty \\le \\|w\\|_2 \\le \\sqrt{d}\\,\\|w\\|_\\infty$$",
    meta: "Skript: Proposition 5.44, S. 244-245",
    explanation: "In endlich-dimensionalen Räumen hängt der Konvergenzbegriff <i>nicht</i> von der Wahl dieser Normen ab (später sogar: von gar keiner Norm) &ndash; deshalb spricht man einfach von &bdquo;Konvergenz in $\\mathbb{C}^d$&ldquo;. Konvergenz in $d$ Dimensionen = $d$ separate Konvergenzen in $\\mathbb{C}$.<br><br>Die Ungleichungen sind leicht einzusehen: Das Maximum der Beträge ist höchstens die Summe, und die Summe höchstens $d$-mal das Maximum.",
    example: "In $\\mathbb{R}^2$: $v_n = \\left(\\tfrac1n,\\ 2 + \\tfrac{1}{n^2}\\right)^t \\to (0, 2)^t$, da beide Komponenten konvergieren. <b>Korollar 5.45:</b> Eine komplexe Folge konvergiert genau dann, wenn Real- und Imaginärteil konvergieren (identifiziere $\\mathbb{C} \\cong \\mathbb{R}^2$).",
    counterexample: "<b>1.</b> Auf <i>allgemeinen</i> Mengen ist die Metrik-Unabhängigkeit falsch: Auf $[0,1]^2$ gibt es Folgen, die bezüglich der Manhattanmetrik konvergieren, bezüglich der SNCF-Metrik aber nicht (Übung 5.43) &ndash; z.B. Punkte, die sich dem Ziel von einer anderen Ursprungsgeraden her nähern.<br><b>2.</b> In <i>unendlich-dimensionalen</i> Räumen scheitert die Äquivalenz ebenfalls: In $C([a,b])$ definieren $\\|\\cdot\\|_\\infty$ und $\\|\\cdot\\|_1$ verschiedene Konvergenzbegriffe (Übung 5.47)."
  },
  {
    id: "k5_kor_5_45",
    title: "Korollar 5.45 & Übung 5.46: Reduktion auf Real- und Imaginärteil",
    category: "5.3 Folgen und Konvergenz",
    type: "satz",
    front: "Was besagt <b>Korollar 5.45 (Reduktion)</b> für komplexe Folgen, und was gilt für die Beträge $(|a_n|)_n$ (Übung 5.46)?",
    back: "<b>Korollar 5.45:</b> Eine komplexwertige Folge $(a_n)_n$ ist genau dann konvergent (mit Grenzwert $a \\in \\mathbb{C}$), wenn die beiden reellwertigen Folgen $(\\operatorname{Re}(a_n))_n$ und $(\\operatorname{Im}(a_n))_n$ konvergieren (mit Grenzwerten $\\operatorname{Re}(a)$ bzw. $\\operatorname{Im}(a)$).<br><br><b>Beweis:</b> Identifiziere $\\mathbb{C}$ mit $\\mathbb{R}^2$ via $\\phi: x \\mapsto (\\operatorname{Re}(x), \\operatorname{Im}(x))^t$; dann ist $|x - y| = \\|\\phi(x) - \\phi(y)\\|_2$, und die Aussage folgt aus Proposition 5.44 (iv). $\\square$<br><br><b>Übung 5.46:</b> Konvergiert $(a_n)_n$ in $\\mathbb{C}$ gegen $a$, so konvergiert $(|a_n|)_n$ gegen $|a|$.",
    meta: "Skript: Korollar 5.45 & Übung 5.46, S. 245-246",
    explanation: "Komplexe Konvergenz ist also nichts Neues: zwei reelle Konvergenzen gleichzeitig. Für die Betragsaussage sorgt die umgekehrte Dreiecksungleichung: $||a_n| - |a|| \\le |a_n - a|$ &ndash; der Betrag ist 1-Lipschitz und damit &bdquo;konvergenzerhaltend&ldquo;.",
    example: "$a_n = \\tfrac1n + i\\left(2 - \\tfrac1{n^2}\\right)$: $\\operatorname{Re}(a_n) \\to 0$, $\\operatorname{Im}(a_n) \\to 2$, also $a_n \\to 2i$ und $|a_n| \\to |2i| = 2$.",
    counterexample: "<b>1.</b> Die Umkehrung von Übung 5.46 ist falsch: $(|a_n|)_n$ kann konvergieren, ohne dass $(a_n)_n$ konvergiert &ndash; $a_n = (-1)^n$ liefert $|a_n| = 1 \\to 1$, aber $(a_n)_n$ divergiert.<br><b>2.</b> Nur ein konvergenter Teil genügt nicht: $a_n = (-1)^n + \\tfrac{i}{n}$ hat konvergenten Imaginärteil, divergenten Realteil &ndash; die Folge divergiert; es braucht wirklich <i>beide</i> Komponenten."
  },
  {
    id: "k5_uebung_5_47",
    title: "Übung 5.47: Gleichmässige Konvergenz vs. Konvergenz im Mittel",
    category: "5.3 Folgen und Konvergenz",
    type: "beispiel",
    front: "Vergleiche auf $V = C([a,b])$ die Konvergenz bezüglich $\\|\\cdot\\|_\\infty$ und bezüglich $\\|\\cdot\\|_1$ (Übung 5.47). Welche Implikation gilt, welche nicht?",
    back: "(i) <b>$\\|\\cdot\\|_\\infty$-Konvergenz $\\Rightarrow$ $\\|\\cdot\\|_1$-Konvergenz:</b> Aus $f_n \\to f$ bezüglich $\\|\\cdot\\|_\\infty$ folgt $f_n \\to f$ bezüglich $\\|\\cdot\\|_1$, denn<br>$$\\|f_n - f\\|_1 = \\int_a^b |f_n - f|\\,\\mathrm{d}x \\le (b-a)\\,\\|f_n - f\\|_\\infty.$$<br>(ii) <b>Die Umkehrung ist falsch:</b> Es gibt Folgen $(f_n)_n$ in $V$ mit $\\|f_n\\|_1 \\to 0$, aber $\\|f_n\\|_\\infty = 1$ für alle $n$.<br><br><b>Sprechweise:</b> $\\|\\cdot\\|_\\infty$-Konvergenz heisst <b>gleichmässige Konvergenz</b>, $\\|\\cdot\\|_1$-Konvergenz heisst <b>Konvergenz im Mittel</b> &ndash; zwei echt verschiedene Begriffe.",
    meta: "Skript: Übung 5.47, S. 246",
    explanation: "<b>Warum (ii) geht:</b> Baue immer schmalere &bdquo;Zacken&ldquo;: $f_n$ sei ein Dreieck der Höhe $1$ über einem Intervall der Breite $\\tfrac2n$ (sonst $0$). Dann ist $\\|f_n\\|_\\infty = 1$ konstant, aber die Fläche $\\|f_n\\|_1 = \\tfrac1n \\to 0$. Der maximale Ausschlag bleibt, die Fläche verschwindet. Das zeigt den fundamentalen Unterschied endlich- vs. unendlich-dimensional: In $\\mathbb{C}^d$ wäre so etwas unmöglich (Prop. 5.44).",
    example: "Positive Richtung konkret: $f_n(x) = \\tfrac1n \\sin(nx)$ auf $[0, 2\\pi]$ konvergiert gleichmässig gegen $0$ ($\\|f_n\\|_\\infty = \\tfrac1n$), also auch im Mittel.",
    counterexample: "<b>1.</b> Die Zacken-Folge: $\\|f_n\\|_1 = \\tfrac1n \\to 0$, aber $\\|f_n\\|_\\infty = 1$ &ndash; Konvergenz im Mittel ohne gleichmässige Konvergenz.<br><b>2.</b> Erst recht gilt punktweise $\\not\\Rightarrow$ gleichmässig: $f_n$ wie oben mit wandernder Zacke konvergiert für jedes feste $x$ gegen $0$, aber nicht gleichmässig &ndash; ein Vorgeschmack auf die Konvergenzbegriffe für Funktionenfolgen im weiteren Verlauf der Vorlesung."
  },

  // ========================================================================
  // 5.4 STETIGKEIT
  // ========================================================================
  {
    id: "k5_def_5_48",
    title: "Definition 5.48: ε-δ-Stetigkeit und Folgenstetigkeit",
    category: "5.4 Stetigkeit",
    type: "definition",
    front: "Definiere <b>$\\varepsilon$-$\\delta$-Stetigkeit</b> und <b>Folgenstetigkeit</b> einer Funktion $f: X \\to Y$ zwischen metrischen Räumen bei einem Punkt $x_0 \\in X$.",
    back: "Seien $(X, \\mathrm{d}_X)$, $(Y, \\mathrm{d}_Y)$ metrische Räume und $f: X \\to Y$.<br><br>&bull; $f$ ist <b>bei $x_0 \\in X$ $\\varepsilon$-$\\delta$-stetig</b>, falls für alle $\\varepsilon > 0$ ein $\\delta > 0$ existiert, so dass für alle $x \\in B_\\delta(x_0)$ auch $f(x) \\in B_\\varepsilon(f(x_0))$ gilt.<br><br>&bull; $f$ ist <b>bei $x_0$ folgenstetig</b>, falls für jede konvergente Folge $(x_n)_n$ in $X$ mit $\\lim_{n\\to\\infty} x_n = x_0$ die Bildfolge $(f(x_n))_n$ konvergiert mit $\\lim_{n\\to\\infty} f(x_n) = f(x_0)$.",
    meta: "Skript: Definition 5.48, S. 247",
    explanation: "<b>Kernaussage der Folgenstetigkeit:</b> Grenzwert und Funktion dürfen vertauscht werden: $\\lim f(x_n) = f(\\lim x_n)$. Die $\\varepsilon$-$\\delta$-Version verallgemeinert Definition 3.45 wortwörtlich von $\\mathbb{R}$ auf metrische Räume &ndash; Beträge werden zu Metriken, Intervalle zu Bällen.<br><br><svg width='100%' height='130' viewBox='0 0 320 130' style='max-width:100%; height:auto; background:#f8fafc; border-radius:8px;'><line x1='30' y1='100' x2='130' y2='100' stroke='#94a3b8' stroke-width='1.5'/><circle cx='80' cy='100' r='3' fill='#1f407a'/><line x1='50' y1='100' x2='110' y2='100' stroke='#10b981' stroke-width='4'/><text x='80' y='118' text-anchor='middle' font-size='10' font-weight='bold' fill='#1f407a'>x&#8320; (&#177;&#948;)</text><path d='M130,70 Q165,40 195,60' stroke='#94a3b8' stroke-width='1.5' fill='none'/><line x1='230' y1='100' x2='230' y2='20' stroke='#94a3b8' stroke-width='1.5'/><circle cx='230' cy='60' r='3' fill='#1f407a'/><line x1='230' y1='40' x2='230' y2='80' stroke='#ef4444' stroke-width='4'/><text x='268' y='64' text-anchor='middle' font-size='10' font-weight='bold' fill='#ef4444'>f(x&#8320;) (&#177;&#949;)</text></svg>",
    example: "Die Distanzfunktion $x \\mapsto \\mathrm{d}(x, y_0)$ zu einem festen Punkt $y_0$ ist in jedem $x_0$ stetig: Zu $\\varepsilon > 0$ wähle $\\delta = \\varepsilon$, dann folgt die Behauptung aus der umgekehrten Dreiecksungleichung (Übung 5.14).",
    counterexample: "<b>1.</b> $\\operatorname{sgn}: \\mathbb{R} \\to \\mathbb{R}$ ist bei $x_0 = 0$ nicht folgenstetig: $x_n = \\tfrac1n \\to 0$, aber $\\operatorname{sgn}(x_n) = 1 \\not\\to \\operatorname{sgn}(0) = 0$.<br><b>2.</b> Jede Funktion <i>aus</i> einem diskreten metrischen Raum ist stetig (wähle $\\delta = \\tfrac12$, dann ist $B_\\delta(x_0) = \\{x_0\\}$) &ndash; Stetigkeit hängt also wesentlich von den Metriken auf $X$ <i>und</i> $Y$ ab, nicht nur von der Abbildungsvorschrift."
  },
  {
    id: "k5_lemma_5_49",
    title: "Lemma 5.49: Äquivalenz der Stetigkeitsbegriffe",
    category: "5.4 Stetigkeit",
    type: "lemma",
    front: "Zeige, dass $\\varepsilon$-$\\delta$-Stetigkeit und Folgenstetigkeit bei einem Punkt $x_0$ <b>äquivalent</b> sind (Lemma 5.49).",
    back: "<b>($\\Rightarrow$):</b> Sei $f$ bei $x_0$ $\\varepsilon$-$\\delta$-stetig und $x_n \\to x_0$. Zu $\\varepsilon > 0$ wähle $\\delta > 0$ mit $f(B_\\delta(x_0)) \\subseteq B_\\varepsilon(f(x_0))$, und dazu $N$ mit $x_n \\in B_\\delta(x_0)$ für $n \\ge N$. Dann ist $f(x_n) \\in B_\\varepsilon(f(x_0))$ für $n \\ge N$, also $f(x_n) \\to f(x_0)$.<br><br><b>($\\Leftarrow$, Kontraposition):</b> Ist $f$ bei $x_0$ <i>nicht</i> $\\varepsilon$-$\\delta$-stetig, so existiert ein $\\varepsilon > 0$, zu dem <i>jedes</i> $\\delta$ versagt. Wähle für $\\delta = \\tfrac1n$ jeweils ein $x_n \\in B_{1/n}(x_0)$ mit $f(x_n) \\notin B_\\varepsilon(f(x_0))$. Dann gilt $x_n \\to x_0$, aber $(f(x_n))_n \\not\\to f(x_0)$ &ndash; $f$ ist nicht folgenstetig. $\\square$<br><br>Man sagt kurz: $f$ ist <b>bei $x_0$ stetig</b>; $f$ heisst <b>stetig</b>, wenn es bei jedem Punkt von $X$ stetig ist.",
    meta: "Skript: Lemma 5.49, S. 247",
    explanation: "<b>Nutzen:</b> Zwei Werkzeuge für denselben Begriff. Das $\\varepsilon$-$\\delta$-Spiel eignet sich für <i>positive</i> Stetigkeitsbeweise; die Folgencharakterisierung glänzt beim <i>Widerlegen</i>: Eine einzige Folge $x_n \\to x_0$ mit $f(x_n) \\not\\to f(x_0)$ genügt. Die &bdquo;Fallen-Folge&ldquo; mit $\\delta_n = \\tfrac1n$ ist das Standardrezept dafür.",
    example: "Nicht-Stetigkeit der Dirichlet-Funktion bei jedem $x_0$: Wähle rationale $x_n \\to x_0$ und irrationale $y_n \\to x_0$ &ndash; die Bildfolgen konvergieren gegen $1$ bzw. $0$, also kann $f$ bei $x_0$ nicht stetig sein.",
    counterexample: "<b>1.</b> Es genügt nicht, nur <i>spezielle</i> Folgen zu testen: Für $f(x,y) = \\frac{xy}{x^2+y^2}$ (mit $f(0,0) = 0$) konvergiert $f$ entlang beider Achsen gegen $0$, aber entlang der Diagonale $x_n = y_n = \\tfrac1n$ gegen $\\tfrac12$ &ndash; <i>jede</i> Folge zählt.<br><b>2.</b> In der Kontraposition muss das $\\varepsilon$ fest bleiben, während $\\delta = \\tfrac1n$ schrumpft &ndash; wer beide gleichzeitig schrumpfen lässt, beweist nichts."
  },
  {
    id: "k5_prop_5_50",
    title: "Proposition 5.50: Charakterisierungen der Stetigkeit",
    category: "5.4 Stetigkeit",
    type: "proposition",
    front: "Welche vier äquivalenten Charakterisierungen der (globalen) <b>Stetigkeit</b> einer Funktion $f: X \\to Y$ gibt Proposition 5.50?",
    back: "Für metrische Räume $X, Y$ und $f: X \\to Y$ sind äquivalent:<br><br>(i) $f$ ist stetig.<br>(ii) Für jedes $x \\in X$ ist $f$ bei $x$ $\\varepsilon$-$\\delta$-stetig.<br>(iii) Für jedes $x \\in X$ ist $f$ bei $x$ folgenstetig.<br>(iv) <b>Umgebungs-Charakterisierung:</b> Für jedes $x \\in X$ und jede Umgebung $U \\subseteq Y$ von $f(x)$ ist das Urbild $f^{-1}(U)$ eine Umgebung von $x$.",
    meta: "Skript: Proposition 5.50 & Übung 5.51, S. 247-248",
    explanation: "<b>Beweisskizze (i) $\\Leftrightarrow$ (iv):</b> Ist $U$ Umgebung von $f(x)$, so enthält sie ein $B_\\varepsilon(f(x))$; Stetigkeit liefert $\\delta$ mit $f(B_\\delta(x)) \\subseteq B_\\varepsilon(f(x)) \\subseteq U$, also $B_\\delta(x) \\subseteq f^{-1}(U)$. Umgekehrt wende (iv) auf $U = B_\\varepsilon(f(x_0))$ an.<br><br>(iv) ist die &bdquo;topologische&ldquo; Formulierung: Sie kommt ganz ohne Metrik-Werte aus und wird im 2. Semester zu &bdquo;Urbilder offener Mengen sind offen&ldquo; verallgemeinert.",
    example: "Mit (iii) folgt blitzschnell: Komposition stetiger Funktionen ist stetig &ndash; $\\lim g(f(x_n)) = g(f(\\lim x_n))$ durch zweifaches Anwenden (Beweis von Prop. 5.53 (i)).",
    counterexample: "<b>1.</b> Die <i>Bild</i>-Richtung wäre falsch: Stetige Funktionen müssen offene Mengen nicht auf Umgebungen abbilden &ndash; die konstante Funktion $f(x) = 0$ bildet jede Umgebung auf $\\{0\\}$ ab, das keine Umgebung in $\\mathbb{R}$ ist. Entscheidend ist das <i>Urbild</i>.<br><b>2.</b> Übung 5.51: Aus &bdquo;$(f(a_n))_n$ konvergiert&ldquo; folgt <i>nicht</i>, dass $(a_n)_n$ konvergiert: $f(x) = x^2$ und $a_n = (-1)^n$ geben $f(a_n) = 1 \\to 1$, aber $(a_n)_n$ divergiert &ndash; Stetigkeit transportiert Konvergenz nur <i>vorwärts</i>."
  },
  {
    id: "k5_def_5_52",
    title: "Definition 5.52: Gleichmässige und Lipschitz-Stetigkeit",
    category: "5.4 Stetigkeit",
    type: "definition",
    front: "Definiere <b>gleichmässige Stetigkeit</b> und <b>Lipschitz-Stetigkeit</b> für $f: X \\to Y$ zwischen metrischen Räumen. Wie hängen die Begriffe zusammen?",
    back: "&bull; $f$ heisst <b>gleichmässig stetig</b>, falls es zu jedem $\\varepsilon > 0$ ein $\\delta > 0$ gibt, so dass für <i>alle</i> $x_1, x_2 \\in X$ gilt:<br>$$\\mathrm{d}_X(x_1, x_2) < \\delta \\implies \\mathrm{d}_Y(f(x_1), f(x_2)) < \\varepsilon$$<br>&bull; $f$ heisst <b>Lipschitz-stetig</b>, falls es eine <b>Lipschitz-Konstante</b> $L \\ge 0$ gibt mit<br>$$\\mathrm{d}_Y(f(x_1), f(x_2)) \\le L \\cdot \\mathrm{d}_X(x_1, x_2) \\quad \\forall x_1, x_2 \\in X$$<br><br><b>Hierarchie:</b> Lipschitz-stetig $\\implies$ gleichmässig stetig $\\implies$ stetig (beide Umkehrungen sind falsch).",
    meta: "Skript: Definition 5.52, S. 248",
    explanation: "<b>Der entscheidende Quantorentausch:</b> Bei gewöhnlicher Stetigkeit darf $\\delta = \\delta(\\varepsilon, x_0)$ vom Punkt abhängen; bei gleichmässiger Stetigkeit muss <i>ein</i> $\\delta(\\varepsilon)$ überall funktionieren. Lipschitz ist noch stärker: $\\delta = \\tfrac{\\varepsilon}{L}$ leistet das explizit (für $L > 0$). Auf kompakten Intervallen ist jede stetige Funktion automatisch gleichmässig stetig (Satz 3.75, verallgemeinert im 2. Semester).",
    example: "$f(x) = 3x$ ist Lipschitz-stetig mit $L = 3$. Die Distanzfunktion $x \\mapsto \\mathrm{d}(x, A)$ ist 1-Lipschitz (Übung 5.54). $\\sqrt{x}$ auf $[0,1]$ ist gleichmässig stetig (kompaktes Intervall!), aber <i>nicht</i> Lipschitz (unendliche Steigung bei $0$).",
    counterexample: "<b>1.</b> $f(x) = x^2$ auf ganz $\\mathbb{R}$ ist stetig, aber <i>nicht</i> gleichmässig stetig: $|f(x + \\tfrac1x) - f(x)| = 2 + \\tfrac{1}{x^2} > 2$, obwohl der Eingabeabstand $\\tfrac1x \\to 0$ &ndash; für $\\varepsilon = 2$ überlebt kein festes $\\delta$.<br><b>2.</b> $\\sqrt{x}$ auf $[0,1]$: gleichmässig stetig, aber nicht Lipschitz &ndash; $\\frac{\\sqrt{x} - 0}{x - 0} = \\tfrac{1}{\\sqrt{x}} \\to \\infty$ sprengt jede Konstante $L$. Beide Inklusionen der Hierarchie sind also echt."
  },
  {
    id: "k5_prop_5_53",
    title: "Proposition 5.53: Konstruktion stetiger Funktionen",
    category: "5.4 Stetigkeit",
    type: "proposition",
    front: "Welche fünf Aussagen über die <b>Konstruktion stetiger Funktionen</b> macht Proposition 5.53?",
    back: "Seien $X, Y, Z$ metrische Räume.<br><br>(i) <b>Komposition:</b> Sind $f: X \\to Y$ und $g: Y \\to Z$ stetig, so ist $g \\circ f: X \\to Z$ stetig.<br>(ii) <b>Komponenten:</b> $f: X \\to \\mathbb{C}^d$ ist genau dann stetig, wenn alle Komponenten $f_j = \\pi_j \\circ f : X \\to \\mathbb{C}$ stetig sind.<br>(iii) Die <b>Addition</b> $+: \\mathbb{C}^2 \\to \\mathbb{C}$ ist stetig.<br>(iv) Die <b>Multiplikation</b> $\\cdot: \\mathbb{C}^2 \\to \\mathbb{C}$ ist stetig.<br>(v) Die <b>Kehrwertfunktion</b> $(\\cdot)^{-1}: z \\in \\mathbb{C}^\\times \\mapsto z^{-1} \\in \\mathbb{C}$ ist stetig.",
    meta: "Skript: Proposition 5.53, S. 249-250",
    explanation: "<b>Beweis-Highlights:</b> (i) via Folgenstetigkeit: $g(f(x_n)) \\to g(f(x_0))$ durch zweifaches Anwenden. (ii): Die Projektionen $\\pi_j$ sind 1-Lipschitz ($|\\pi_j(v - w)| \\le \\|v - w\\|_\\infty$); umgekehrt kombiniert man komponentenweise Konvergenz mit Prop. 5.44. (iii): Addition ist Lipschitz mit Konstante 2. (iv)/(v): $\\varepsilon$-$\\delta$ mit den Tricks aus Prop. 5.30 (Mischterm, &bdquo;$|z| \\ge |z_0| - |z - z_0| > \\tfrac{|z_0|}{2}$&ldquo;).<br><br><b>Konsequenz:</b> Zusammen mit (i), (ii) folgt: Summen, Produkte und Quotienten (bei nichtverschwindendem Nenner) stetiger $\\mathbb{C}$-wertiger Funktionen sind stetig.",
    example: "Polynome $p: \\mathbb{C} \\to \\mathbb{C}$ sind stetig (aufgebaut aus Addition, Multiplikation, Konstanten, Identität). Rationale Funktionen sind stetig auf $\\{z \\mid q(z) \\neq 0\\}$ &ndash; via (v) und (i).",
    counterexample: "<b>1.</b> In (v) ist die Einschränkung auf $\\mathbb{C}^\\times = \\mathbb{C}\\setminus\\{0\\}$ wesentlich: Bei $0$ ist der Kehrwert weder definiert noch stetig fortsetzbar ($\\tfrac{1}{1/n} = n$ explodiert).<br><b>2.</b> Die Umkehrung von (i) ist falsch: Aus der Stetigkeit von $g \\circ f$ folgt nichts über $f$ oder $g$ einzeln &ndash; z.B. ist $g \\circ f$ konstant (also stetig), wenn $g$ konstant ist, egal wie unstetig $f$ ist."
  },
  {
    id: "k5_uebung_5_54",
    title: "Wichtige Übung 5.54: Distanzfunktionen",
    category: "5.4 Stetigkeit",
    type: "lemma",
    front: "Sei $(X,\\mathrm{d})$ ein metrischer Raum und $A \\subseteq X$ nicht-leer. Zeige, dass $x \\mapsto \\mathrm{d}(x, A) = \\inf_{a \\in A} \\mathrm{d}(x, a)$ <b>Lipschitz-stetig mit Konstante 1</b> ist.",
    back: "<b>Beweis:</b><br>1. Für beliebige $x_1, x_2 \\in X$ und jedes $a \\in A$ gilt per Dreiecksungleichung:<br>$$\\mathrm{d}(x_1, a) \\le \\mathrm{d}(x_1, x_2) + \\mathrm{d}(x_2, a)$$<br>2. Links zum Infimum über $a$ übergehen (die rechte Seite ist je eine obere Schranke der Infima):<br>$$\\mathrm{d}(x_1, A) \\le \\mathrm{d}(x_1, x_2) + \\mathrm{d}(x_2, a) \\quad \\forall a \\implies \\mathrm{d}(x_1, A) \\le \\mathrm{d}(x_1, x_2) + \\mathrm{d}(x_2, A)$$<br>3. Also $\\mathrm{d}(x_1, A) - \\mathrm{d}(x_2, A) \\le \\mathrm{d}(x_1, x_2)$; Rollentausch liefert die Gegenrichtung und somit<br>$$|\\mathrm{d}(x_1, A) - \\mathrm{d}(x_2, A)| \\le \\mathrm{d}(x_1, x_2). \\quad \\square$$",
    meta: "Skript: Wichtige Übung 5.54, S. 250",
    explanation: "Der Abstand zu einer festen Menge kann sich höchstens so schnell ändern, wie man sich selbst bewegt &ndash; die direkte Verallgemeinerung der umgekehrten Dreiecksungleichung ($A = \\{y\\}$, Übung 5.14). Distanzfunktionen sind eine wichtige Quelle stetiger Funktionen auf beliebigen metrischen Räumen (z.B. für Trennungsargumente).",
    example: "$X = \\mathbb{R}$, $A = [0,1]$: $\\mathrm{d}(x, A) = 0$ für $x \\in [0,1]$, sonst $= |x|$ bzw. $|x - 1|$ &ndash; die &bdquo;Abstandsrampe&ldquo;, offensichtlich 1-Lipschitz (Steigung $\\pm 1$).",
    counterexample: "<b>1.</b> $\\mathrm{d}(x, A) = 0$ impliziert <i>nicht</i> $x \\in A$: Für $A = (0,1)$ und $x = 0$ ist $\\inf_{a \\in A} |x - a| = 0$, aber $0 \\notin A$ &ndash; das Infimum muss nicht angenommen werden.<br><b>2.</b> Die Konstante 1 ist optimal, besser geht es nicht: Für $A = \\{0\\}$ in $\\mathbb{R}$ ist $|\\mathrm{d}(x_1, A) - \\mathrm{d}(x_2, A)| = ||x_1| - |x_2||$, was für $x_1, x_2 > 0$ exakt $= |x_1 - x_2|$ ist &ndash; keine Konstante $L < 1$ funktioniert."
  },

  // ========================================================================
  // 5.5 WEITERE LERNMATERIALIEN
  // ========================================================================
  {
    id: "k5_uebung_ultrametrik",
    title: "Übung (5.5.2): Ultrametriken und p-adische Metrik",
    category: "5.5 Weitere Lernmaterialien",
    type: "lemma",
    front: "Was ist eine <b>Ultrametrik</b>, was ist die <b>$p$-adische Metrik</b> auf $\\mathbb{Z}$, und was ist das verblüffende Prinzip für Bälle in Ultrametriken?",
    back: "&bull; <b>Ultrametrik:</b> wie eine Metrik, aber mit der schärferen Ungleichung<br>$$\\mathrm{d}(x_1, x_3) \\le \\max\\{\\mathrm{d}(x_1, x_2),\\ \\mathrm{d}(x_2, x_3)\\}$$<br>Jede Ultrametrik ist insbesondere eine Metrik ($\\max \\le$ Summe).<br><br>&bull; <b>$p$-adische Metrik:</b> Für eine Primzahl $p$ und $\\nu_p(x) = \\max\\{k \\mid p^k \\text{ teilt } x\\}$:<br>$$\\mathrm{d}_p(x,y) = \\begin{cases} p^{-\\nu_p(x-y)} & x \\neq y \\\\ 0 & x = y \\end{cases}$$<br>Zwei Zahlen sind sich &bdquo;nahe&ldquo;, wenn ihre Differenz durch eine hohe $p$-Potenz teilbar ist.<br><br>&bull; <b>Ball-Prinzip:</b> In einer Ultrametrik ist <i>jeder Punkt eines Balls dessen Zentrum</i>: $x \\in B_r(x_0) \\implies B_r(x) = B_r(x_0)$.",
    meta: "Skript: Übung (Ultrametriken), Abschnitt 5.5.2, S. 252",
    explanation: "<b>Folgen des Prinzips:</b> Alle &bdquo;Dreiecke&ldquo; sind gleichschenklig (die zwei längsten Seiten gleich lang), und zwei Bälle sind entweder disjunkt oder ineinander enthalten &ndash; eine völlig andere Geometrie als in $\\mathbb{R}^d$. Die $p$-adische Welt ist die Grundlage grosser Teile der modernen Zahlentheorie.",
    example: "$p = 2$: $\\mathrm{d}_2(0, 8) = 2^{-3} = \\tfrac18$ (denn $8 = 2^3$), aber $\\mathrm{d}_2(0, 3) = 2^0 = 1$. Die Folge $a_n = 2^n$ konvergiert $2$-adisch gegen $0$!",
    counterexample: "<b>1.</b> Die Standardmetrik auf $\\mathbb{R}$ ist <i>keine</i> Ultrametrik: $\\mathrm{d}(0,2) = 2 > \\max\\{\\mathrm{d}(0,1), \\mathrm{d}(1,2)\\} = 1$.<br><b>2.</b> Intuitionen aus $\\mathbb{R}$ versagen: $2$-adisch ist $2^{10}$ &bdquo;winzig&ldquo; ($\\mathrm{d}_2(0, 2^{10}) = 2^{-10}$), während die nach Absolutbetrag kleine Zahl $1$ den $2$-adischen Abstand $1$ von $0$ hat &ndash; Grösse und $p$-adische Nähe sind völlig entkoppelt."
  },
  {
    id: "k5_uebung_rangmetrik",
    title: "Übung (5.5.2): Rangmetrik auf Matrizen",
    category: "5.5 Weitere Lernmaterialien",
    type: "lemma",
    front: "Wie ist die <b>Rangmetrik</b> auf der Menge $X$ der $m \\times n$-Matrizen über einem Körper $\\mathbb{K}$ definiert, und wie beweist man die Dreiecksungleichung?",
    back: "$$\\mathrm{d}(A, B) = \\operatorname{rang}(A - B)$$<br><b>Nachweis der Axiome:</b><br>&bull; <i>Definitheit:</i> $\\operatorname{rang}(A - B) = 0 \\iff A - B = 0 \\iff A = B$.<br>&bull; <i>Symmetrie:</i> $\\operatorname{rang}(B - A) = \\operatorname{rang}(-(A-B)) = \\operatorname{rang}(A - B)$.<br>&bull; <i>Dreiecksungleichung:</i> Mit $A - C = (A - B) + (B - C)$ und der Rang-Subadditivität $\\operatorname{rang}(X + Y) \\le \\operatorname{rang}(X) + \\operatorname{rang}(Y)$ aus der Linearen Algebra:<br>$$\\mathrm{d}(A,C) \\le \\mathrm{d}(A,B) + \\mathrm{d}(B,C). \\quad \\square$$",
    meta: "Skript: Übung (Rangmetrik), Abschnitt 5.5.2, S. 252",
    explanation: "Ein schönes Beispiel dafür, wie Resultate der Linearen Algebra (Subadditivität des Rangs: das Bild von $X + Y$ liegt im Summenraum der Bilder) direkt eine Metrik liefern. Die Rangmetrik nimmt nur die ganzzahligen Werte $0, 1, \\dots, \\min\\{m,n\\}$ an und wird u.a. in der Codierungstheorie verwendet.",
    example: "$A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$, $B = \\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}$: $\\mathrm{d}(A,B) = \\operatorname{rang}\\begin{pmatrix} 0 & 0 \\\\ 0 & 1 \\end{pmatrix} = 1$.",
    counterexample: "<b>1.</b> $\\mathrm{d}(A,B) = |\\operatorname{rang}(A) - \\operatorname{rang}(B)|$ wäre <i>keine</i> Metrik: Zwei verschiedene Matrizen gleichen Rangs hätten Abstand $0$ (Definitheit verletzt).<br><b>2.</b> Konvergenz in der Rangmetrik ist drastisch: Da alle Abstände ganzzahlig sind, gilt wie bei der diskreten Metrik: Eine Folge konvergiert genau dann, wenn sie schliesslich konstant ist &ndash; &bdquo;immer näher kommen&ldquo; gibt es hier nicht."
  },
  {
    id: "k5_uebung_aequivalente_metriken",
    title: "Übung (5.5.2): Äquivalente Metriken",
    category: "5.5 Weitere Lernmaterialien",
    type: "lemma",
    front: "Wann heissen zwei Metriken $\\mathrm{d}_1, \\mathrm{d}_2$ auf $X$ (mit Konstante $C$) <b>äquivalent</b>, und was folgt daraus für die Konvergenz?",
    back: "&bull; <b>Definition (Gl. 5.4):</b> Es gibt eine Konstante $C > 0$ mit<br>$$\\frac{1}{C}\\, \\mathrm{d}_1(x, y) \\le \\mathrm{d}_2(x, y) \\le C\\, \\mathrm{d}_1(x, y) \\qquad \\forall x, y \\in X$$<br>&bull; <b>Konsequenz:</b> Eine Folge konvergiert genau dann bezüglich $\\mathrm{d}_1$, wenn sie bezüglich $\\mathrm{d}_2$ konvergiert &ndash; mit demselben Grenzwert. (Denn $\\mathrm{d}_2(x_n, x_0) \\le C\\,\\mathrm{d}_1(x_n, x_0) \\to 0$ und umgekehrt.)",
    meta: "Skript: Übung (5.4), Abschnitt 5.5.2, S. 252",
    explanation: "$C$-äquivalente Metriken verzerren Abstände nur um einen beschränkten Faktor &ndash; Konvergenz, Stetigkeit und Offenheit bleiben identisch. Prototyp: $\\mathrm{d}_\\infty, \\mathrm{d}_1, \\mathrm{d}_2$ auf $\\mathbb{R}^d$ sind paarweise äquivalent mit $C = d$ bzw. $C = \\sqrt{d}$ (Ungleichungen (5.2)/(5.3)) &ndash; genau das steckt hinter Proposition 5.44.",
    example: "$\\|w\\|_\\infty \\le \\|w\\|_1 \\le d\\,\\|w\\|_\\infty$: Die von $\\|\\cdot\\|_1$ und $\\|\\cdot\\|_\\infty$ induzierten Metriken sind $d$-äquivalent auf $\\mathbb{R}^d$.",
    counterexample: "<b>1.</b> Gleicher Konvergenzbegriff erzwingt <i>keine</i> $C$-Äquivalenz: $\\mathrm{d}_1(x,y) = |x-y|$ und $\\mathrm{d}_2(x,y) = \\frac{|x-y|}{1+|x-y|}$ auf $\\mathbb{R}$ haben dieselben konvergenten Folgen, aber $\\mathrm{d}_2 < 1$ ist beschränkt, $\\mathrm{d}_1$ nicht &ndash; kein $C$ leistet $\\mathrm{d}_1 \\le C\\,\\mathrm{d}_2$.<br><b>2.</b> Nicht-äquivalente Metriken mit verschiedener Konvergenz: Standardmetrik vs. diskrete Metrik auf $\\mathbb{R}$ &ndash; $\\tfrac1n \\to 0$ gilt nur für die erste."
  }
];
