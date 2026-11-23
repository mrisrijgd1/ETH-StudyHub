/* ==========================================================================
   FLASHCARDS KAPITEL 8: Differentialrechnung
   Analysis I - Prof. Dr. Manfred Einsiedler
   ========================================================================== */

window.FLASHCARDS_KAPITEL_8 = [
  // ========================================================================
  // 8.1 DIE ABLEITUNG
  // ========================================================================
  {
    id: "k8_def_8_1",
    title: "Definition 8.1: Differenzierbarkeit",
    category: "8.1 Die Ableitung",
    type: "definition",
    front: "Wann heisst $f: D \\to \\mathbb{R}$ bei $a$ <b>differenzierbar</b> (Definition 8.1), und wie lautet die äquivalente <b>Landau-Formulierung</b>?",
    back: "Sei $a \\in D$ ein Häufungspunkt von $D$. $f$ ist <b>bei $a$ differenzierbar</b>, falls der Grenzwert<br>$$f'(a) = \\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a} = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$$<br>existiert (<b>Ableitung</b> von $f$ bei $a$; Leibniz-Notation $\\frac{\\mathrm{d}f}{\\mathrm{d}x}(a)$). Einseitige Ableitungen $f'_+(a), f'_-(a)$ definiert man über $x \\searrow a$ bzw. $x \\nearrow a$.<br><br><b>Landau-Form (8.2):</b> Äquivalent gilt für $x \\to a$:<br>$$f(x) = f(a) + f'(a)(x-a) + o(x-a)$$<br>Die Gerade $x \\mapsto f(a) + f'(a)(x-a)$ ist die <b>Tangente</b> (lineare Approximation) von $f$ bei $a$.<br><br><b>Insbesondere:</b> Differenzierbar bei $a$ $\\Rightarrow$ stetig bei $a$.",
    meta: "Skript: Definition 8.1 & Gleichung (8.2), Abschnitt 8.1.1",
    explanation: "Geometrisch: Die Sekante durch $(a, f(a))$ und $(x, f(x))$ hat den Differenzenquotienten als Steigung und wird für $x \\to a$ zur Tangente. Die Landau-Form sagt präziser: $f$ ist nahe $a$ <i>bis auf einen schneller als linear abfallenden Fehler</i> affin - genau diese Sichtweise verallgemeinert sich auf mehrere Dimensionen. Die Ableitung ist eine <b>lokale</b> Operation: Stimmen $f$ und $g$ in einer Umgebung von $a$ überein, so ist $f'(a) = g'(a)$. Für komplexwertige Funktionen definiert man alles analog (Real- und Imaginärteil).",
    example: "$f(x) = x^2$ bei $a$: $\\frac{x^2 - a^2}{x - a} = x + a \\to 2a$, also $f'(a) = 2a$ - ganz ohne Regeln, direkt aus der Definition.",
    counterexample: "<b>1.</b> $f(x) = |x|$ ist bei $0$ stetig, aber NICHT differenzierbar: $f'_+(0) = 1 \\neq -1 = f'_-(0)$ - die einseitigen Ableitungen existieren, stimmen aber nicht überein (Knick).<br><b>2.</b> Die Umkehrung von 'differenzierbar $\\Rightarrow$ stetig' ist falsch - $|x|$ ist das Standardbeispiel; es gibt sogar überall stetige, nirgends differenzierbare Funktionen."
  },
  {
    id: "k8_bsp_8_3",
    title: "Beispiel 8.3 & Übung 8.4: Erste Ableitungen",
    category: "8.1 Die Ableitung",
    type: "beispiel",
    front: "Bestimme die Ableitungen der Grundfunktionen: Konstanten, Identität, $\\exp(\\alpha x)$, $\\sin$, $\\cos$ (Beispiel 8.3, Übung 8.4).",
    back: "&bull; Konstante Funktionen: Ableitung $= 0$; Identität $x \\mapsto x$: Ableitung $= 1$.<br>&bull; $f(x) = \\exp(\\alpha x)$ (auch $\\alpha \\in \\mathbb{C}$): $f'(a) = \\alpha\\exp(\\alpha a)$; insbesondere $\\exp' = \\exp$.<br>&bull; Mit den Grenzwerten $\\lim_{h\\to 0}\\frac{\\sin h}{h} = 1$ und $\\lim_{h\\to 0}\\frac{\\cos h - 1}{h} = 0$ und den Additionstheoremen:<br>$$\\sin'(x) = \\cos(x), \\qquad \\cos'(x) = -\\sin(x)$$",
    meta: "Skript: Beispiel 8.3 & Wichtige Übung 8.4",
    explanation: "Für $\\exp$ rechnet das Skript mit der Potenzreihe: $\\frac{\\exp(\\alpha h) - 1}{h} = \\sum_{\\ell \\ge 0} \\frac{\\alpha^{\\ell+1}}{(\\ell+1)!}h^\\ell \\to \\alpha$, da Potenzreihen stetig sind (Satz 7.56). Die Formel $\\exp' = \\exp$ macht die Exponentialfunktion zur wichtigsten Funktion der Differentialrechnung - sie ist (bis auf Vielfache) die einzige Funktion mit $y' = y$ (Lemma 8.60).",
    example: "$(e^{3x})' = 3e^{3x}$; $(\\sin x)'' = -\\sin x$ - Sinus und Kosinus lösen die Differentialgleichung $y'' + y = 0$ (Beispiel 8.65).",
    counterexample: "<b>1.</b> $(\\exp(x^2))' \\neq \\exp(x^2)$: Die innere Funktion erfordert die Kettenregel ($= 2x\\exp(x^2)$) - '$\\exp' = \\exp$' gilt nur für die reine Exponentialfunktion.<br><b>2.</b> Aus $\\sin' = \\cos$ folgt nicht $\\sin'(2x) = \\cos(2x)$ als Ableitung von $\\sin(2x)$: Richtig ist $(\\sin(2x))' = 2\\cos(2x)$ - Notation $f'(g(x))$ vs. $(f \\circ g)'(x)$ sorgfältig trennen!"
  },
  {
    id: "k8_prop_8_5",
    title: "Proposition 8.5 & Korollar 8.6: Summen-, Produktregel, Polynome",
    category: "8.1 Die Ableitung",
    type: "proposition",
    front: "Wie lauten <b>Summen- und Produktregel</b> (Proposition 8.5), und was folgt für <b>Polynome</b> (Korollar 8.6)?",
    back: "Seien $f, g: D \\to \\mathbb{R}$ bei $a$ differenzierbar. Dann sind $f + g$ und $f \\cdot g$ bei $a$ differenzierbar mit<br>$$(f+g)'(a) = f'(a) + g'(a)$$<br>$$(fg)'(a) = f'(a)g(a) + f(a)g'(a) \\quad \\text{(Produktregel)}$$<br>sowie $(\\alpha f)'(a) = \\alpha f'(a)$. Die bei $a$ differenzierbaren Funktionen bilden also einen Unterraum von $\\mathcal{F}(D)$, und die Ableitung ist linear.<br><br><b>Korollar 8.6:</b> Polynome sind auf ganz $\\mathbb{R}$ differenzierbar mit<br>$$(x^n)' = nx^{n-1} \\quad (n \\in \\mathbb{N})$$<br>- die Ableitung eines Polynoms ist wieder ein Polynom.",
    meta: "Skript: Proposition 8.5 & Korollar 8.6",
    explanation: "<b>Beweis der Produktregel</b> durch den Misch-Trick $f(x)g(x) - f(a)g(a) = (f(x)-f(a))g(x) + f(a)(g(x)-g(a))$ und die Stetigkeit von $g$ bei $a$ - dasselbe Muster wie bei den Grenzwertsätzen (Prop. 5.30). $(x^n)' = nx^{n-1}$ folgt dann per Induktion aus $x^{n+1} = x \\cdot x^n$.",
    example: "$(x^3 e^x)' = 3x^2 e^x + x^3 e^x$; $(5x^4 - 2x + 7)' = 20x^3 - 2$.",
    counterexample: "<b>1.</b> $(fg)' \\neq f'g'$: Für $f = g = x$ wäre sonst $(x^2)' = 1$, richtig ist $2x$ - der Klassiker unter den Rechenfehlern.<br><b>2.</b> Die Umkehrung der Summenregel ist falsch: $f + g$ kann differenzierbar sein, ohne dass $f, g$ es sind - z.B. $f(x) = |x|$ und $g(x) = -|x|$ mit $f + g = 0$."
  },
  {
    id: "k8_satz_8_8",
    title: "Satz 8.8: Die Kettenregel",
    category: "8.1 Die Ableitung",
    type: "satz",
    front: "Wie lautet die <b>Kettenregel</b> (Satz 8.8), und warum darf man im Beweis nicht einfach mit $f(x) - f(x_0)$ erweitern?",
    back: "Sei $f: D \\to E$ bei $x_0$ differenzierbar (mit $y_0 = f(x_0)$ Häufungspunkt von $E$) und $g: E \\to \\mathbb{R}$ bei $y_0$ differenzierbar. Dann ist $g \\circ f$ bei $x_0$ differenzierbar und<br>$$(g \\circ f)'(x_0) = g'(f(x_0)) \\cdot f'(x_0)$$<br>('äussere Ableitung mal innere Ableitung').",
    meta: "Skript: Satz 8.8 & Beispiel 8.12",
    explanation: "<b>Beweis-Feinheit:</b> Das naive Erweitern des Differenzenquotienten mit $f(x) - f(x_0)$ ist nicht erlaubt, da $f(x) = f(x_0)$ für $x$ beliebig nahe an $x_0$ vorkommen kann (Division durch 0!). Das Skript nutzt stattdessen die Landau-Form $f(x) = f(x_0) + f'(x_0)(x - x_0) + o(x - x_0)$ und setzt sie in die von $g$ ein - robust und verallgemeinerungsfähig. Bei verschachtelten Funktionen arbeitet man 'stur von aussen nach innen' (Beispiel 8.12).",
    example: "$\\big(\\exp(\\sin(x^2))\\big)' = \\exp(\\sin(x^2)) \\cdot \\cos(x^2) \\cdot 2x$ - dreifache Kette, drei Faktoren.",
    counterexample: "<b>1.</b> $(g \\circ f)' \\neq g' \\circ f'$: Für $g(y) = y^2$, $f(x) = x + 1$ ist $(g \\circ f)'(x) = 2(x+1)$, aber $g'(f'(x)) = g'(1) = 2$ - die innere Ableitung wird <i>multipliziert</i>, nicht eingesetzt.<br><b>2.</b> $g'$ ist an der Stelle $f(x_0)$ auszuwerten, nicht bei $x_0$: $(\\sin(2x))' = 2\\cos(2x)$, nicht $2\\cos(x)$."
  },
  {
    id: "k8_kor_8_11",
    title: "Beispiel 8.9 & Korollar 8.11: Kehrwert und Quotientenregel",
    category: "8.1 Die Ableitung",
    type: "satz",
    front: "Wie lautet die <b>Quotientenregel</b> (Korollar 8.11), und wie leitet man sie aus Kettenregel und Produktregel her?",
    back: "<b>Beispiel 8.9:</b> $\\big(\\tfrac1x\\big)' = -\\tfrac{1}{x^2}$ auf $\\mathbb{R}\\setminus\\{0\\}$.<br><br><b>Korollar 8.11:</b> Sind $f, g$ bei $a$ differenzierbar und $g(a) \\neq 0$, so ist $\\tfrac{f}{g}$ bei $a$ differenzierbar mit<br>$$\\left(\\frac{f}{g}\\right)'(a) = \\frac{f'(a)g(a) - f(a)g'(a)}{g(a)^2}$$<br><b>Herleitung:</b> $\\tfrac1g = \\psi \\circ g$ mit $\\psi(y) = \\tfrac1y$ gibt per Kettenregel $\\big(\\tfrac1g\\big)'(a) = -\\tfrac{g'(a)}{g(a)^2}$; dann Produktregel auf $f \\cdot \\tfrac1g$.",
    meta: "Skript: Beispiel 8.9, Übung 8.10, Korollar 8.11",
    explanation: "Da $g$ bei $a$ stetig und $g(a) \\neq 0$ ist, gilt $g \\neq 0$ in einer ganzen Umgebung - der natürliche Definitionsbereich $\\{x \\mid g(x) \\neq 0\\}$ hat $a$ als Häufungspunkt, die Aussage ist also wohlformuliert. <b>Konsequenz:</b> Rationale Funktionen sind überall differenzierbar, wo sie definiert sind. Allgemein: $(x^{-n})' = -nx^{-n-1}$ (Übung 8.10) - die Potenzregel gilt auch für negative Exponenten.",
    example: "$\\tan'(x) = \\big(\\tfrac{\\sin}{\\cos}\\big)'(x) = \\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\frac{1}{\\cos^2 x}$ - die wichtigste Anwendung der Quotientenregel (Abschnitt 8.3.4).",
    counterexample: "<b>1.</b> Das Vorzeichen im Zähler ist asymmetrisch: $\\big(\\tfrac{f}{g}\\big)' \\neq \\frac{f'g + fg'}{g^2}$ - Merkregel 'NAZ minus ZAN über N²' bzw. die Herleitung erinnern.<br><b>2.</b> Bei $g(a) = 0$ ist die Regel sinnlos - selbst wenn $\\tfrac{f}{g}$ dort stetig fortsetzbar ist (z.B. $\\tfrac{x^2}{x}$ bei $0$), muss man die Fortsetzung direkt untersuchen."
  },
  {
    id: "k8_satz_8_14",
    title: "Satz 8.14: Ableitung der Umkehrfunktion",
    category: "8.1 Die Ableitung",
    type: "satz",
    front: "Wie lautet der Satz über die <b>Differenzierbarkeit der inversen Funktion</b> (Satz 8.14), und was ergibt sich für $\\log$ und $x^s$ (Beispiel 8.15)?",
    back: "Sei $f: D \\to E$ stetig und bijektiv mit stetiger Umkehrabbildung $f^{-1}: E \\to D$. Ist $f$ im Häufungspunkt $x_0$ differenzierbar mit $f'(x_0) \\neq 0$, so ist $f^{-1}$ in $y_0 = f(x_0)$ differenzierbar mit<br>$$(f^{-1})'(y_0) = \\frac{1}{f'(x_0)} = \\frac{1}{f'(f^{-1}(y_0))}$$<br><b>Beispiel 8.15:</b><br>&bull; $\\log'(y) = \\frac{1}{\\exp(\\log y)} = \\frac{1}{y}$; allgemeiner $(\\log|y|)' = \\tfrac1y$ auf $\\mathbb{R}\\setminus\\{0\\}$.<br>&bull; $(x^s)' = s x^{s-1}$ für beliebiges $s \\in \\mathbb{C}$ und $x > 0$ (via $x^s = \\exp(s\\log x)$ und Kettenregel).",
    meta: "Skript: Satz 8.14 & Beispiel 8.15",
    explanation: "Geometrisch: Der Graph von $f^{-1}$ ist die Spiegelung des Graphen von $f$ an der Diagonalen $y = x$; eine Gerade mit Steigung $m$ wird dabei zu einer mit Steigung $\\tfrac1m$. Der Beweis arbeitet mit Folgen (Lemma 6.40): $\\frac{f^{-1}(y_n) - f^{-1}(y_0)}{y_n - y_0} = \\Big(\\frac{f(x_n) - f(x_0)}{x_n - x_0}\\Big)^{-1}$, wobei die Stetigkeit von $f^{-1}$ die Konvergenz $x_n \\to x_0$ sichert.",
    example: "Alle Arkus- und Areafunktionen entstehen so: $\\arcsin'(s) = \\frac{1}{\\cos(\\arcsin s)} = \\frac{1}{\\sqrt{1-s^2}}$, $\\operatorname{arsinh}'(s) = \\frac{1}{\\sqrt{1+s^2}}$ (Abschnitte 8.3/8.4).",
    counterexample: "<b>1.</b> Bei $f'(x_0) = 0$ scheitert die Differenzierbarkeit der Inversen: $f(x) = x^3$ ist bijektiv mit $f'(0) = 0$; die Umkehrung $y \\mapsto y^{1/3}$ ist bei $0$ NICHT differenzierbar (senkrechte Tangente).<br><b>2.</b> $(f^{-1})'(y_0)$ ist nicht $\\frac{1}{f'(y_0)}$: Die Ableitung von $f$ ist an der Stelle $x_0 = f^{-1}(y_0)$ auszuwerten - bei $\\log'(y) = \\tfrac1y$ steckt diese Auswertung bereits drin."
  },
  {
    id: "k8_def_8_16",
    title: "Definition 8.16 - Korollar 8.18: Lokale Extrema",
    category: "8.1 Die Ableitung",
    type: "proposition",
    front: "Was ist ein <b>lokales Extremum</b> (Definition 8.16), was besagt die <b>notwendige Bedingung</b> (Proposition 8.17), und welche drei Fälle lässt Korollar 8.18 zu?",
    back: "<b>Definition 8.16:</b> $f$ nimmt in $x_0$ ein <b>lokales Maximum</b> an, falls ein $\\delta > 0$ existiert mit $f(x) \\le f(x_0)$ für alle $x \\in D \\cap (x_0 - \\delta, x_0 + \\delta)$; <b>isoliert</b>, falls sogar $f(x) < f(x_0)$ für $x \\neq x_0$. (Minimum analog.)<br><br><b>Proposition 8.17:</b> Nimmt $f$ in $x_0$ ein lokales Extremum an, ist $f$ bei $x_0$ differenzierbar und ist $x_0$ links- UND rechtsseitiger Häufungspunkt, dann gilt $$f'(x_0) = 0.$$<br><b>Korollar 8.18:</b> Nimmt $f: I \\to \\mathbb{R}$ in $x_0$ ein lokales Extremum an, so ist $x_0$ (i) ein Endpunkt von $I$, oder (ii) $f$ ist bei $x_0$ nicht differenzierbar, oder (iii) $f'(x_0) = 0$.",
    meta: "Skript: Definition 8.16, Proposition 8.17, Korollar 8.18",
    explanation: "<b>Beweis von 8.17:</b> Beim Maximum ist der rechtsseitige Differenzenquotient $\\le 0$ und der linksseitige $\\ge 0$; Differenzierbarkeit zwingt beide auf denselben Wert $0$. Das Korollar liefert die praktische Checkliste der 'Kandidaten' für Extrema: Endpunkte, Knickstellen, kritische Punkte - alle drei Fälle kommen wirklich vor (Übung 8.19).",
    example: "$f(x) = |x|$ auf $[-3, 3]$: Minimum bei $0$ (Fall ii, nicht differenzierbar), Maxima bei $\\pm 3$ (Fall i, Endpunkte) - kein einziger kritischer Punkt mit $f' = 0$!",
    counterexample: "<b>1.</b> Die Umkehrung von 8.17 ist falsch: $f(x) = x^3$ hat $f'(0) = 0$, aber KEIN Extremum bei $0$ (Sattelpunkt) - '$f' = 0$' ist notwendig, nie hinreichend.<br><b>2.</b> Ohne die beidseitige Häufungspunkt-Bedingung scheitert 8.17: $f(x) = x$ auf $[0, 1]$ hat in $0$ ein Minimum mit $f'(0) = 1 \\neq 0$ - am Rand gilt die Bedingung nicht."
  },
  {
    id: "k8_bsp_8_20",
    title: "8.1.4 & Beispiel 8.20: Stetige Differenzierbarkeit",
    category: "8.1 Die Ableitung",
    type: "beispiel",
    front: "Wann heisst $f$ <b>stetig differenzierbar</b>, und was zeigt das Beispiel $f_p(x) = |x|^p \\sin(\\tfrac1x)$?",
    back: "Ist $f: D \\to \\mathbb{R}$ (überall) differenzierbar und die Ableitungsfunktion $f': x \\mapsto f'(x)$ <b>stetig</b>, so heisst $f$ <b>stetig differenzierbar</b>.<br><br><b>Beispiel 8.20:</b> $f_p(x) = |x|^p\\sin(\\tfrac1x)$ für $x \\neq 0$, $f_p(0) = 0$ ($p > 0$):<br>&bull; $p \\le 1$: $f_p$ bei $0$ <b>nicht differenzierbar</b>.<br>&bull; $1 < p < 2$: differenzierbar, aber $f_p'$ bei $0$ unbeschränkt - <b>nicht stetig differenzierbar</b>.<br>&bull; $p = 2$: differenzierbar, $f_p'$ beschränkt, aber unstetig bei $0$ ($\\lim_{x\\to0}\\cos\\tfrac1x$ existiert nicht).<br>&bull; $p > 2$: stetig differenzierbar (aber $f_p'$ erst für $p > 3$ wieder differenzierbar).",
    meta: "Skript: Abschnitt 8.1.4 & Beispiel 8.20",
    explanation: "'Differenzierbar' und 'stetig differenzierbar' sind echt verschiedene Klassen! Bei $0$ berechnet man die Ableitung direkt aus dem Differenzenquotienten (Sandwich: $|x^{p-1}\\sin\\tfrac1x| \\le |x|^{p-1} \\to 0$ für $p > 1$), während die Regel-Formel $f_p'(x) = p|x|^{p-1}\\operatorname{sgn}(x)\\sin\\tfrac1x - |x|^{p-2}\\cos\\tfrac1x$ nur für $x \\neq 0$ gilt - der zweite Term oszilliert bzw. explodiert nahe $0$.",
    example: "$f_2(x) = x^2\\sin(\\tfrac1x)$ ist DER Standardzeuge für 'differenzierbar, aber nicht $C^1$': $f_2'(0) = 0$, aber $f_2'(x) = 2x\\sin\\tfrac1x - \\cos\\tfrac1x$ oszilliert bei $0$ ohne Grenzwert.",
    counterexample: "<b>1.</b> 'Ableitung existiert überall' impliziert NICHT 'Ableitung stetig' - genau das zeigt $p = 2$.<br><b>2.</b> Es kann sogar schlimmer kommen: Mit fraktalen Konstruktionen existieren differenzierbare Funktionen auf $[0,1]$, deren Ableitung überabzählbar viele Unstetigkeitsstellen hat (auf der Cantor-Menge, Abschnitt 8.6.2)."
  },
  {
    id: "k8_hoehere",
    title: "8.1.5: Höhere Ableitungen, Cⁿ und glatte Funktionen",
    category: "8.1 Die Ableitung",
    type: "definition",
    front: "Definiere <b>$n$-malige (stetige) Differenzierbarkeit</b>, $C^n(D)$, <b>glatt</b>/$C^\\infty(D)$ und nenne die <b>Leibniz-Regel</b> (Korollar 8.25).",
    back: "Rekursiv: $f^{(0)} = f$, $f^{(n+1)} = (f^{(n)})'$. Existiert $f^{(n)}$ auf ganz $D$, heisst $f$ <b>$n$-mal differenzierbar</b>; ist $f^{(n)}$ zusätzlich stetig, <b>$n$-mal stetig differenzierbar</b> ($f \\in C^n(D)$). $f$ heisst <b>glatt</b> ($f \\in C^\\infty(D)$), falls $f$ für jedes $n$ $n$-mal differenzierbar ist.<br><br><b>Leibniz-Regel (Korollar 8.25):</b> Für $n$-mal differenzierbare $f, g$:<br>$$(fg)^{(n)} = \\sum_{k=0}^n \\binom{n}{k} f^{(k)} g^{(n-k)}$$<br>Auch Verknüpfungen $n$-mal differenzierbarer Funktionen sind $n$-mal differenzierbar (Korollar 8.26).",
    meta: "Skript: Abschnitt 8.1.5, Beispiele 8.22/8.23, Korollare 8.25/8.26",
    explanation: "Glatt sind z.B. Polynome, exp, sin, cos, sinh, cosh und der Logarithmus: $\\log^{(n)}(x) = (-1)^{n-1}(n-1)!\\,x^{-n}$ (Beispiel 8.22, Induktion). <b>Überraschend glatt (Beispiel 8.23):</b> $\\psi(x) = \\exp(-\\tfrac1x)$ für $x > 0$, $\\psi(x) = 0$ für $x \\le 0$ ist auf ganz $\\mathbb{R}$ glatt - alle Ableitungen verschwinden bei $0$! Solche 'glatten Abklingfunktionen' sind der Grundstein für Abschneidefunktionen der späteren Analysis.",
    example: "$(x^2 e^x)^{(10)} = \\sum_k \\binom{10}{k}(x^2)^{(k)}(e^x)^{(10-k)} = e^x(x^2 + 20x + 90)$ - nur drei Terme, da $(x^2)^{(k)} = 0$ für $k \\ge 3$.",
    counterexample: "<b>1.</b> Für jedes $n$ gibt es Funktionen in $C^n \\setminus C^{n+1}$: $x \\mapsto x^n|x|$ ist $n$-mal stetig differenzierbar, aber nicht $(n+1)$-mal differenzierbar (Übung 8.21) - die Hierarchie ist strikt.<br><b>2.</b> Zweimal differenzierbar heisst $(f')'$ existiert - nicht '$f''$ als Grenzwert zweiter Differenzenquotienten': Für $f(x) = x^2\\sin(\\tfrac1x)$-artige Beispiele kann $\\lim_h \\frac{f(h) - 2f(0) + f(-h)}{h^2}$ existieren, ohne dass $f''(0)$ existiert."
  },

  // ========================================================================
  // 8.2 ZENTRALE SÄTZE DER DIFFERENTIALRECHNUNG
  // ========================================================================
  {
    id: "k8_satz_8_28",
    title: "Satz 8.28: Der Satz von Rolle",
    category: "8.2 Zentrale Sätze der Differentialrechnung",
    type: "satz",
    front: "Was besagt der <b>Satz von Rolle</b> (Satz 8.28), und wie beweist man ihn?",
    back: "Sei $[a,b]$ kompakt mit $a < b$ und $f: [a,b] \\to \\mathbb{R}$ <b>stetig</b> auf $[a,b]$ und <b>differenzierbar</b> auf $(a,b)$. Falls<br>$$f(a) = f(b),$$<br>dann existiert ein $\\xi \\in (a,b)$ mit $f'(\\xi) = 0$.",
    meta: "Skript: Satz 8.28, Abschnitt 8.2.1",
    explanation: "<b>Beweis:</b> Nach dem Extremwertsatz (Korollar 3.69) nimmt $f$ Maximum und Minimum auf $[a,b]$ an. Liegt eines davon im Inneren $(a,b)$, liefert Proposition 8.17 dort $f' = 0$. Liegen beide am Rand, so ist wegen $f(a) = f(b)$ die Funktion konstant - und $f' \\equiv 0$. Beachte die asymmetrischen Voraussetzungen: Stetigkeit bis zum Rand, Differenzierbarkeit nur im Inneren - so deckt der Satz z.B. auch $\\sqrt{1 - x^2}$ auf $[-1,1]$ ab.",
    example: "$f(x) = x^2 - x$ auf $[0, 1]$: $f(0) = f(1) = 0$, und tatsächlich ist $f'(\\tfrac12) = 0$. Nützliche Konsequenz: Zwischen zwei Nullstellen einer differenzierbaren Funktion liegt stets eine Nullstelle der Ableitung.",
    counterexample: "<b>1.</b> Ohne Differenzierbarkeit im Inneren falsch: $f(x) = |x|$ auf $[-1, 1]$ hat $f(-1) = f(1)$, aber nirgends $f' = 0$ - der Knick bei $0$ 'verschluckt' den kritischen Punkt.<br><b>2.</b> Für komplexwertige Funktionen falsch (Beispiel 8.32): $\\gamma(t) = e^{it}$ auf $[0, 2\\pi]$ hat $\\gamma(0) = \\gamma(2\\pi) = 1$, aber $|\\gamma'(t)| = 1$ überall - $\\gamma'$ wird nie Null."
  },
  {
    id: "k8_theorem_8_29",
    title: "Theorem 8.29: Der Mittelwertsatz",
    category: "8.2 Zentrale Sätze der Differentialrechnung",
    type: "satz",
    front: "Wie lautet der <b>Mittelwertsatz</b> (Theorem 8.29), und wie führt man ihn auf Rolle zurück?",
    back: "Sei $[a,b]$ kompakt mit $a < b$ und $f: [a,b] \\to \\mathbb{R}$ stetig auf $[a,b]$, differenzierbar auf $(a,b)$. Dann gibt es ein $\\xi \\in (a,b)$ mit<br>$$f'(\\xi) = \\frac{f(b) - f(a)}{b - a}$$<br>- irgendwo stimmt die Momentansteigung mit der durchschnittlichen Steigung (Sekantensteigung) überein.<br><br><b>Beweis:</b> Wende Rolle auf $F(x) = f(x) - \\frac{f(b)-f(a)}{b-a}(x-a)$ an ('die Sekante herausziehen'): $F(a) = F(b) = f(a)$.",
    meta: "Skript: Theorem 8.29, Übungen 8.30/8.31, Beispiel 8.32",
    explanation: "DER zentrale Satz des Kapitels - fast alle folgenden Korollare (Konstanz, Monotonie, Konvexität, l'Hôpital, später Taylor) sind Anwendungen des Musters: <i>zwei Punkte $x_1 < x_2$ wählen, MWS auf $[x_1, x_2]$ anwenden, Information über $f'$ in Information über $f$ übersetzen</i>. Übung 8.31: Für $f \\in C^1([a,b])$ folgt Lipschitz-Stetigkeit (mit $L = \\max|f'|$).",
    example: "Ein Auto, das in 2 Stunden 200 km fährt, hatte irgendwann exakt Tempo 100 km/h. Abschätzungen wie $|\\sin b - \\sin a| \\le |b - a|$ folgen direkt (da $|\\cos| \\le 1$).",
    counterexample: "<b>1.</b> Für komplexwertige Funktionen falsch (Beispiel 8.32, Kreisparametrisierung $\\gamma(t) = e^{it}$) - der MWS ist ein genuin reelles Resultat.<br><b>2.</b> Der Definitionsbereich muss ein Intervall sein (Übung 8.30): $f(x) = \\tfrac{1}{x}$ auf $[-1, 0) \\cup (0, 1]$ hat $\\frac{f(1) - f(-1)}{2} = 1 > 0$, aber $f'(x) = -x^{-2} < 0$ überall - über die Lücke hinweg gilt nichts."
  },
  {
    id: "k8_kor_8_33_8_35",
    title: "Korollare 8.33 & 8.35: Konstanz- und Monotoniekriterium",
    category: "8.2 Zentrale Sätze der Differentialrechnung",
    type: "satz",
    front: "Wie charakterisiert die Ableitung <b>Konstanz</b> (Korollar 8.33) und <b>Monotonie</b> (Korollar 8.35) auf einem Intervall?",
    back: "<b>Korollar 8.33:</b> $f: I \\to \\mathbb{R}$ ist genau dann konstant, wenn $f$ differenzierbar ist mit $f'(x) = 0$ für alle $x \\in I$.<br><br><b>Korollar 8.35:</b> Für differenzierbares $f: I \\to \\mathbb{R}$:<br>$$f' \\ge 0 \\implies f \\text{ monoton wachsend}, \\qquad f' > 0 \\implies f \\text{ STRENG monoton wachsend}$$<br>(analog $\\le 0$ / $< 0$ fallend).<br><br><b>Wichtige Übung 8.36:</b> Nur die nicht-strikten Versionen sind Äquivalenzen: $f' \\ge 0 \\iff f$ monoton wachsend.",
    meta: "Skript: Korollare 8.33 & 8.35, Wichtige Übung 8.36",
    explanation: "Beide folgen aus dem MWS-Muster: $f(x_2) - f(x_1) = f'(\\xi)(x_2 - x_1)$ - das Vorzeichen von $f'$ kontrolliert das Vorzeichen der Differenz. Korollar 8.33 ist auch der Schlüssel zur Eindeutigkeit von Stammfunktionen (Lemma 8.59) und Lösungen von Differentialgleichungen. Das Intervall ist wesentlich: Nur dort verbindet der MWS je zwei Punkte.",
    example: "$\\exp' = \\exp > 0$ $\\Rightarrow$ exp streng monoton wachsend - ein neuer, müheloser Beweis verglichen mit Abschnitt 6.3.6.",
    counterexample: "<b>1.</b> '$f$ streng monoton wachsend $\\Rightarrow f' > 0$' ist FALSCH: $f(x) = x^3$ ist streng monoton wachsend mit $f'(0) = 0$ (Übung 8.36) - strenge Monotonie erlaubt isolierte Nullstellen der Ableitung.<br><b>2.</b> Ohne Intervall scheitert 8.33: $f = \\mathbb{1}_{(0,1)} - \\mathbb{1}_{(2,3)}$-artig, d.h. lokal konstante Funktionen auf $(0,1) \\cup (2,3)$ mit verschiedenen Werten, haben $f' = 0$ überall, sind aber nicht konstant."
  },
  {
    id: "k8_kor_8_37",
    title: "Korollar 8.37: Hinreichende Kriterien für lokale Extrema",
    category: "8.2 Zentrale Sätze der Differentialrechnung",
    type: "satz",
    front: "Nenne die <b>hinreichenden Kriterien</b> für lokale Extrema in einem inneren Punkt $x_0$ (Korollar 8.37): Vorzeichenwechsel von $f'$ und das $f''$-Kriterium.",
    back: "Sei $f: I \\to \\mathbb{R}$ stetig, auf $I \\setminus \\{x_0\\}$ stetig differenzierbar, $x_0$ innerer Punkt. Dann:<br>&bull; $f' > 0$ auf $(x_0 - \\delta, x_0)$ und $f' < 0$ auf $(x_0, x_0 + \\delta)$ $\\implies$ <b>isoliertes lokales Maximum</b> in $x_0$ (umgekehrter Wechsel: Minimum).<br>&bull; $f' > 0$ (oder $f' < 0$) auf $(x_0 - \\delta, x_0 + \\delta)\\setminus\\{x_0\\}$ $\\implies$ <b>kein</b> Extremum.<br>&bull; Ist $f \\in C^2(I)$ mit $f'(x_0) = 0$ und $f''(x_0) < 0$ $\\implies$ isoliertes lokales <b>Maximum</b>; $f''(x_0) > 0$ $\\implies$ isoliertes lokales <b>Minimum</b>.<br>&bull; An Endpunkten: $f'(a) > 0$ $\\Rightarrow$ isoliertes Minimum in $a$; $f'(b) > 0$ $\\Rightarrow$ isoliertes Maximum in $b$ (Vorzeichen gedreht analog).",
    meta: "Skript: Korollar 8.37, Abschnitt 8.2.2",
    explanation: "Alles MWS: Links von $x_0$ wächst $f$ (wenn $f' > 0$), rechts fällt es - also Maximum. Das $f''$-Kriterium ist der Spezialfall: $f'' (x_0)< 0$ macht $f'$ nahe $x_0$ streng fallend (Korollar 8.35), mit $f'(x_0) = 0$ ergibt das den Vorzeichenwechsel $+/-$. Das Skript rät ausdrücklich: <i>verstehen statt auswendig lernen</i> - mit dem Bild des Vorzeichenwechsels rekonstruiert man alle Fälle.",
    example: "$f(x) = x^3 - x$: $f'(x) = 3x^2 - 1 = 0$ bei $x = \\pm\\tfrac{1}{\\sqrt3}$; $f''(x) = 6x$ gibt Maximum bei $-\\tfrac{1}{\\sqrt3}$ ($f'' < 0$) und Minimum bei $+\\tfrac{1}{\\sqrt3}$ ($f'' > 0$).",
    counterexample: "<b>1.</b> Bei $f'(x_0) = 0$ UND $f''(x_0) = 0$ ist nichts entschieden: $x^3$ (kein Extremum), $x^4$ (Minimum) und $-x^4$ (Maximum) erfüllen alle beide Gleichungen.<br><b>2.</b> Das $f''$-Kriterium ist hinreichend, nicht notwendig: $f(x) = x^4$ hat ein isoliertes Minimum bei $0$, obwohl $f''(0) = 0$ - hier entscheidet der Vorzeichenwechsel von $f'$."
  },
  {
    id: "k8_def_8_38",
    title: "Definition 8.38 & Lemma 8.39: Konvexität",
    category: "8.2 Zentrale Sätze der Differentialrechnung",
    type: "definition",
    front: "Wann heisst $f: I \\to \\mathbb{R}$ <b>konvex</b> bzw. <b>streng konvex</b> (Definition 8.38), und wie charakterisiert man das über <b>Sekantensteigungen</b> (Lemma 8.39)?",
    back: "<b>Definition 8.38:</b> $f$ ist <b>konvex</b>, falls für alle $x_0, x_1 \\in I$, $t \\in [0,1]$:<br>$$f\\big((1-t)x_0 + tx_1\\big) \\le (1-t)f(x_0) + tf(x_1)$$<br>(<b>streng konvex</b>: strikte Ungleichung für $x_0 \\neq x_1$, $t \\in (0,1)$; $g$ (streng) <b>konkav</b> $:\\iff -g$ (streng) konvex).<br><br><b>Lemma 8.39:</b> $f$ ist genau dann konvex, wenn für alle $x_0 < x < x_1$ in $I$:<br>$$\\frac{f(x) - f(x_0)}{x - x_0} \\le \\frac{f(x_1) - f(x)}{x_1 - x}$$<br>- die Sekantensteigungen wachsen von links nach rechts.",
    meta: "Skript: Definition 8.38 & Lemma 8.39, Abschnitt 8.2.3",
    explanation: "Anschaulich: Der Graph bleibt unterhalb jeder Sehne zwischen zwei Graphenpunkten ('aufwärts gekrümmt'). Der Punkt $(1-t)x_0 + tx_1$ durchläuft für $t \\in [0,1]$ genau die Strecke von $x_0$ nach $x_1$; rechts steht die Sehne. Das Lemma übersetzt die Definition per Umformung in die Steigungs-Monotonie - die Brücke zur Ableitungscharakterisierung (Prop. 8.40).",
    example: "$x \\mapsto x^2$, $\\exp$, $x \\mapsto |x|$ sind konvex (letzteres NICHT streng und ganz ohne Differenzierbarkeit!); $\\log$ ist konkav, $x\\log x$ streng konvex (Beispiel 8.43).",
    counterexample: "<b>1.</b> Konvexität verlangt ein Intervall als Definitionsbereich: Auf $(-1,0) \\cup (0,1)$ ist $x \\mapsto -\\tfrac{1}{|x|}$... die Verbindungsstrecke verlässt den Definitionsbereich - der Begriff wird sinnlos.<br><b>2.</b> 'Konvex' ist nicht 'wachsend': $x^2$ ist konvex und auf $(-\\infty, 0)$ fallend - Krümmung und Monotonie sind unabhängige Eigenschaften."
  },
  {
    id: "k8_prop_8_40",
    title: "Proposition 8.40 & Korollar 8.42: Konvexität und Ableitungen",
    category: "8.2 Zentrale Sätze der Differentialrechnung",
    type: "proposition",
    front: "Wie charakterisiert man Konvexität differenzierbarer Funktionen über $f'$ (Proposition 8.40) und über $f''$ (Korollar 8.42)?",
    back: "<b>Proposition 8.40:</b> Eine differenzierbare Funktion $f: I \\to \\mathbb{R}$ ist genau dann (streng) konvex, wenn $f'$ (streng) <b>monoton wachsend</b> ist.<br><br><b>Korollar 8.42:</b> Ist $f$ zweimal differenzierbar, so gilt:<br>$$f'' \\ge 0 \\text{ auf } I \\implies f \\text{ konvex}, \\qquad f'' > 0 \\text{ auf } I \\implies f \\text{ streng konvex.}$$",
    meta: "Skript: Proposition 8.40, Korollar 8.42, Beispiel 8.43",
    explanation: "<b>Beweis von 8.40 ($\\Leftarrow$):</b> Für $x_0 < x < x_1$ liefert der MWS Punkte $\\xi_1 \\in (x_0, x)$, $\\xi_2 \\in (x, x_1)$ mit den beiden Sekantensteigungen als Werten von $f'$; Monotonie von $f'$ ordnet sie richtig - Lemma 8.39 schliesst. Praktisch prüft man fast immer $f''$: Beispiel 8.43 zeigt $x\\log x$ streng konvex via $f''(x) = \\tfrac1x > 0$.",
    example: "$\\exp'' = \\exp > 0$: exp ist streng konvex, insbesondere $e^x \\ge 1 + x$ (Tangente bei $0$ bleibt unterhalb). $\\log''(x) = -\\tfrac{1}{x^2} < 0$: log ist streng konkav.",
    counterexample: "<b>1.</b> Die Umkehrung von Korollar 8.42 ist für 'streng' falsch: $f(x) = x^4$ ist streng konvex, aber $f''(0) = 0$ - '$f'' > 0$' ist hinreichend, nicht notwendig.<br><b>2.</b> Konvexität erzwingt keine zweimalige (nicht einmal einmalige) Differenzierbarkeit: $|x|$ ist konvex mit Knick - die Ableitungskriterien sind Spezialisierungen, nicht die Definition."
  },
  {
    id: "k8_lemma_8_44",
    title: "Lemma 8.44: Die Jensensche Ungleichung",
    category: "8.2 Zentrale Sätze der Differentialrechnung",
    type: "lemma",
    front: "Wie lautet die <b>Jensensche Ungleichung</b> (Lemma 8.44) für konvexe Funktionen?",
    back: "Sei $f: I \\to \\mathbb{R}$ konvex, $x_1, \\dots, x_n \\in I$ und $t_1, \\dots, t_n \\in [0,1]$ mit $\\sum_{k=1}^n t_k = 1$. Dann gilt<br>$$f\\Big(\\sum_{k=1}^n t_k x_k\\Big) \\le \\sum_{k=1}^n t_k f(x_k).$$<br>- der Funktionswert des gewichteten Mittels ist höchstens das gewichtete Mittel der Funktionswerte.",
    meta: "Skript: Lemma 8.44, Abschnitt 8.2.3",
    explanation: "Beweis per Induktion über $n$: $n = 2$ ist die Konvexitätsdefinition selbst; im Schritt fasst man die ersten $n$ Gewichte zu einem Punkt zusammen. Jensen ist eine Ungleichungs-Maschine: Mit konkavem $\\log$ folgt z.B. die AM-GM-Ungleichung $\\sqrt[n]{x_1 \\cdots x_n} \\le \\frac{x_1 + \\dots + x_n}{n}$ (log auf beide Seiten, Gewichte $t_k = \\tfrac1n$).",
    example: "$f = \\exp$, $t_k = \\tfrac1n$: $\\exp\\big(\\tfrac{1}{n}\\sum x_k\\big) \\le \\tfrac1n \\sum e^{x_k}$. Für konkaves $f$ dreht sich die Ungleichung um: $\\log\\big(\\tfrac1n\\sum x_k\\big) \\ge \\tfrac1n \\sum \\log x_k$.",
    counterexample: "<b>1.</b> Ohne $\\sum t_k = 1$ falsch: $f(x) = x^2$, $t_1 = t_2 = 1$, $x_1 = x_2 = 1$ gäbe $f(2) = 4 \\le 2$ - die Gewichte müssen eine Konvexkombination bilden.<br><b>2.</b> Für nicht-konvexe Funktionen gilt keine der beiden Richtungen: $f(x) = x^3$ auf $\\mathbb{R}$ verletzt je nach Punktwahl mal '$\\le$', mal '$\\ge$'."
  },
  {
    id: "k8_satz_8_48",
    title: "Satz 8.48: Der erweiterte Mittelwertsatz (Cauchy)",
    category: "8.2 Zentrale Sätze der Differentialrechnung",
    type: "satz",
    front: "Wie lautet der <b>erweiterte Mittelwertsatz nach Cauchy</b> (Satz 8.48)?",
    back: "Seien $f, g$ stetig auf $[a,b]$ ($a < b$) und differenzierbar auf $(a,b)$. Dann existiert ein $\\xi \\in (a,b)$ mit<br>$$g'(\\xi)\\big(f(b) - f(a)\\big) = f'(\\xi)\\big(g(b) - g(a)\\big).$$<br>Gilt zusätzlich $g'(x) \\neq 0$ für alle $x \\in (a,b)$, so ist $g(a) \\neq g(b)$ und<br>$$\\frac{f'(\\xi)}{g'(\\xi)} = \\frac{f(b) - f(a)}{g(b) - g(a)}.$$",
    meta: "Skript: Satz 8.48, Abschnitt 8.2.4",
    explanation: "<b>Beweis:</b> Rolle auf $F(x) = g(x)(f(b) - f(a)) - f(x)(g(b) - g(a))$ anwenden - $F(a) = F(b)$ rechnet man direkt nach. Der gewöhnliche MWS ist der Spezialfall $g(x) = x$. <b>Geometrisch:</b> Die ebene Kurve $t \\mapsto (f(t), g(t))$ besitzt eine Tangente parallel zur Verbindungsgerade ihrer Endpunkte. Hauptanwendung: die Regel von de l'Hôpital.",
    example: "Mit $f(x) = \\sin x$, $g(x) = x^2$ auf $[0, \\tfrac\\pi2]$ existiert $\\xi$ mit $\\frac{\\cos\\xi}{2\\xi} = \\frac{1}{(\\pi/2)^2}$ - zwei 'Durchschnittsraten' werden durch EINEN gemeinsamen Punkt $\\xi$ verglichen.",
    counterexample: "<b>1.</b> Der naive 'Beweis' - MWS separat auf $f$ und $g$ anwenden und Quotienten bilden - scheitert: Man erhielte ZWEI verschiedene Zwischenstellen $\\xi_f \\neq \\xi_g$; Cauchys Kunstgriff erzwingt dieselbe Stelle.<br><b>2.</b> Ohne $g' \\neq 0$ kann $g(a) = g(b)$ eintreten und die Quotientenform sinnlos werden - die erste (produktförmige) Aussage gilt dann immer noch."
  },
  {
    id: "k8_satz_8_49",
    title: "Satz 8.49: Die Regel von de l'Hôpital",
    category: "8.2 Zentrale Sätze der Differentialrechnung",
    type: "satz",
    front: "Wie lautet die <b>Regel von de l'Hôpital</b> (Satz 8.49), und welche Voraussetzungen braucht sie?",
    back: "Seien $f, g: (a,b) \\to \\mathbb{R}$ differenzierbar mit $g(x) \\neq 0$ und $g'(x) \\neq 0$ auf $(a,b)$. <b>Angenommen:</b><br>&bull; der Grenzwert $\\lim_{x \\searrow a} \\frac{f'(x)}{g'(x)}$ existiert in $\\overline{\\mathbb{R}}$, und<br>&bull; es liegt eine <b>unbestimmte Form</b> vor: entweder '$\\tfrac00$' ($\\lim_{x\\searrow a} f(x) = \\lim_{x\\searrow a} g(x) = 0$) oder '$\\tfrac{\\infty}{\\infty}$' ($\\lim_{x \\searrow a} g(x) = \\pm\\infty$).<br><br>Dann existiert auch $\\lim_{x\\searrow a}\\frac{f(x)}{g(x)}$ und<br>$$\\lim_{x \\searrow a} \\frac{f(x)}{g(x)} = \\lim_{x \\searrow a} \\frac{f'(x)}{g'(x)}.$$<br>Analog für $x \\nearrow b$ und $x \\to x_0 \\in (a,b)$.",
    meta: "Skript: Satz 8.49 & Wichtige Übung 8.50, Abschnitt 8.2.5",
    explanation: "Die Regel ist ein Korollar des erweiterten MWS: $\\frac{f(x) - f(y)}{g(x) - g(y)} = \\frac{f'(\\xi)}{g'(\\xi)}$ für ein $\\xi$ dazwischen; im Grenzübergang verschwindet der Einfluss von $y$. Oft iteriert man die Regel mehrfach. Vergleiche: $\\lim_{x\\to 0}\\frac{\\sin x}{x} \\overset{\\text{l'H}}{=} \\lim \\frac{\\cos x}{1} = 1$ - deutlich schneller als die Reihenargumente aus Kapitel 7.",
    example: "$\\lim_{x\\to\\infty}\\frac{\\log x}{x} \\overset{\\infty/\\infty}{=} \\lim_{x\\to\\infty}\\frac{1/x}{1} = 0$; $\\lim_{x\\to 0}\\frac{e^x - 1 - x}{x^2} \\overset{0/0}{=} \\lim\\frac{e^x - 1}{2x} \\overset{0/0}{=} \\lim\\frac{e^x}{2} = \\tfrac12$ (zweimal angewandt).",
    counterexample: "<b>1.</b> Ohne unbestimmte Form liefert die Regel Unsinn: $\\lim_{x\\to 0}\\frac{x + 1}{x + 2} = \\tfrac12$, aber blindes Ableiten gäbe $\\frac{1}{1} = 1$.<br><b>2.</b> Existiert $\\lim \\frac{f'}{g'}$ nicht, ist NICHTS gefolgert: $\\lim_{x\\to\\infty}\\frac{x + \\sin x}{x} = 1$ existiert, obwohl $\\frac{1 + \\cos x}{1}$ keinen Grenzwert hat - die Regel ist eine Einbahnstrasse."
  },

  // ========================================================================
  // 8.3 / 8.4 TRIGONOMETRISCHE UND HYPERBOLISCHE FUNKTIONEN
  // ========================================================================
  {
    id: "k8_trig_umkehr",
    title: "8.3: Arkusfunktionen und ihre Ableitungen",
    category: "8.3 Trigonometrische Funktionen",
    type: "satz",
    front: "Auf welchen Intervallen kehrt man sin und tan um, und wie lauten die Ableitungen von <b>arcsin</b> und <b>arctan</b>?",
    back: "&bull; $\\sin|_{[-\\pi/2,\\, \\pi/2]}: [-\\tfrac\\pi2, \\tfrac\\pi2] \\to [-1,1]$ ist streng monoton wachsend und bijektiv; die Umkehrung ist $\\arcsin: [-1,1] \\to [-\\tfrac\\pi2, \\tfrac\\pi2]$ mit<br>$$\\arcsin'(s) = \\frac{1}{\\sqrt{1 - s^2}} \\qquad (s \\in (-1,1)).$$<br>&bull; $\\tan = \\tfrac{\\sin}{\\cos}$ hat $\\tan'(x) = \\tfrac{1}{\\cos^2 x} = 1 + \\tan^2 x$; $\\tan|_{(-\\pi/2,\\,\\pi/2)}: (-\\tfrac\\pi2, \\tfrac\\pi2) \\to \\mathbb{R}$ ist bijektiv mit Umkehrung $\\arctan: \\mathbb{R} \\to (-\\tfrac\\pi2, \\tfrac\\pi2)$ und<br>$$\\arctan'(s) = \\frac{1}{1 + s^2}.$$",
    meta: "Skript: Abschnitte 8.3.1-8.3.4",
    explanation: "Das Programm ist immer dasselbe: Monotonie-Intervall via $\\sin' = \\cos > 0$ auf $(-\\tfrac\\pi2, \\tfrac\\pi2)$ (Korollar 8.35) finden, Bijektivität mit dem Zwischenwertsatz, dann Satz 8.14 für die Ableitung der Umkehrung. Bei arcsin: $\\arcsin'(s) = \\frac{1}{\\cos(\\arcsin s)}$ und $\\cos x = \\sqrt{1 - \\sin^2 x} > 0$ auf dem offenen Intervall. Bei arctan: $1 + \\tan^2 x = \\frac{1}{\\cos^2 x}$ eliminiert die Rücksubstitution. Analog: arccos auf $[0, \\pi]$ mit $\\arccos'(s) = -\\frac{1}{\\sqrt{1-s^2}}$.",
    example: "$\\arctan'(1) = \\tfrac12$; die Formel $\\arctan'(s) = \\frac{1}{1+s^2}$ wird in Kapitel 9 zur Reihe $\\arctan s = s - \\tfrac{s^3}{3} + \\tfrac{s^5}{5} - \\dots$ und damit zu $\\tfrac\\pi4 = 1 - \\tfrac13 + \\tfrac15 - \\dots$ führen.",
    counterexample: "<b>1.</b> An den Rändern $s = \\pm1$ ist arcsin NICHT differenzierbar: Dort ist $\\cos(\\arcsin s) = 0$ (senkrechte Tangente) - Satz 8.14 braucht $f'(x_0) \\neq 0$.<br><b>2.</b> $\\arcsin$ ist nur die Umkehrung der EINSCHRÄNKUNG: $\\arcsin(\\sin(\\pi)) = 0 \\neq \\pi$ - ausserhalb von $[-\\tfrac\\pi2, \\tfrac\\pi2]$ gilt $\\arcsin \\circ \\sin \\neq \\operatorname{id}$."
  },
  {
    id: "k8_hyperbolisch",
    title: "8.4: Hyperbolische Funktionen und Areafunktionen",
    category: "8.4 Hyperbolische Funktionen",
    type: "satz",
    front: "Definiere sinh, cosh, tanh, nenne ihre Ableitungen und die Formel für den <b>Areasinus Hyperbolicus</b>.",
    back: "$$\\sinh x = \\frac{e^x - e^{-x}}{2}, \\qquad \\cosh x = \\frac{e^x + e^{-x}}{2}, \\qquad \\tanh x = \\frac{\\sinh x}{\\cosh x}$$<br>mit $\\sinh' = \\cosh$, $\\cosh' = \\sinh$ und $\\cosh^2 - \\sinh^2 = 1$.<br><br>$\\sinh: \\mathbb{R} \\to \\mathbb{R}$ ist streng monoton wachsend und bijektiv ($\\sinh' = \\cosh > 0$); die Umkehrung $\\operatorname{arsinh}: \\mathbb{R} \\to \\mathbb{R}$ erfüllt<br>$$\\operatorname{arsinh}'(s) = \\frac{1}{\\sqrt{1 + s^2}} \\qquad \\text{und} \\qquad \\operatorname{arsinh}(s) = \\log\\big(s + \\sqrt{1 + s^2}\\big).$$",
    meta: "Skript: Abschnitt 8.4 (8.4.1-8.4.3)",
    explanation: "Die hyperbolischen Funktionen sind die 'exponentiellen Geschwister' von sin/cos (formal: $\\cosh x = \\cos(ix)$, $\\sinh x = -i\\sin(ix)$). Die Area-Umkehrfunktionen haben - anders als die Arkusfunktionen! - geschlossene Logarithmus-Formeln, da sich $y = \\tfrac{e^x - e^{-x}}{2}$ als quadratische Gleichung in $e^x$ auflösen lässt. Die Ableitung folgt mit Satz 8.14: $\\operatorname{arsinh}'(s) = \\frac{1}{\\cosh(\\operatorname{arsinh} s)} = \\frac{1}{\\sqrt{1 + s^2}}$.",
    example: "$\\operatorname{arsinh}(0) = \\log(1) = 0$; die Ableitungsformeln $\\frac{1}{\\sqrt{1+s^2}}$ und $\\frac{1}{\\sqrt{s^2 - 1}}$ (arcosh) werden in Kapitel 9 wichtige Stammfunktionen liefern.",
    counterexample: "<b>1.</b> $\\cosh^2 - \\sinh^2 = 1$ (Minus!), nicht $\\cosh^2 + \\sinh^2 = 1$ - die Punktepaare $(\\cosh t, \\sinh t)$ liegen auf der <i>Hyperbel</i> $x^2 - y^2 = 1$, nicht auf dem Kreis.<br><b>2.</b> cosh ist NICHT bijektiv auf $\\mathbb{R}$ (gerade Funktion, Minimum $\\cosh 0 = 1$): arcosh definiert man nur auf $[1, \\infty)$ als Umkehrung von $\\cosh|_{[0,\\infty)}$ - anders als bei sinh braucht es eine Einschränkung."
  },

  // ========================================================================
  // 8.5 ERSTE DIFFERENTIALGLEICHUNGEN
  // ========================================================================
  {
    id: "k8_stammfunktionen",
    title: "8.5.2 & Lemma 8.59: Stammfunktionen",
    category: "8.5 Erste Differentialgleichungen",
    type: "definition",
    front: "Was ist eine <b>Stammfunktion</b>, und was besagt das Lemma über die <b>Integrationskonstante</b> (Lemma 8.59)?",
    back: "Eine <b>Stammfunktion</b> von $f: I \\to \\mathbb{R}$ ist eine differenzierbare Funktion $F: I \\to \\mathbb{R}$ mit $F' = f$ (eine Lösung der einfachsten Differentialgleichung $y' = f(x)$). Man schreibt das <b>unbestimmte Integral</b><br>$$\\int f(x)\\,\\mathrm{d}x = F(x) + C.$$<br><b>Lemma 8.59:</b> Sind $F, F_1$ Stammfunktionen von $f$ auf einem <b>Intervall</b> $I$, so gibt es eine Konstante $C \\in \\mathbb{R}$ mit $F_1 = F + C$ - die Lösungsmenge von $y' = f$ ist genau $\\{F + C \\mid C \\in \\mathbb{R}\\}$.",
    meta: "Skript: Abschnitt 8.5.2 & Lemma 8.59",
    explanation: "<b>Beweis:</b> $(F_1 - F)' = 0$, und auf einem Intervall sind das genau die Konstanten (Korollar 8.33 - wieder der MWS!). Jede Ableitungsregel wird rückwärts zur Integrationsregel, z.B. $\\int x^s\\,\\mathrm{d}x = \\frac{x^{s+1}}{s+1} + C$ für $s \\neq -1$ und $\\int \\frac{1}{x}\\,\\mathrm{d}x = \\log|x| + C$. Der Zusammenhang mit dem Riemann-Integral wird erst der Fundamentalsatz in Kapitel 9 klären.",
    example: "$\\int \\cos x\\,\\mathrm{d}x = \\sin x + C$; $\\int e^{3x}\\,\\mathrm{d}x = \\tfrac13 e^{3x} + C$; $\\int \\frac{1}{1+x^2}\\,\\mathrm{d}x = \\arctan x + C$.",
    counterexample: "<b>1.</b> Auf NICHT-Intervallen ist die Konstante nicht eindeutig: Auf $\\mathbb{R}\\setminus\\{0\\}$ ist $F(x) = \\log|x| + \\operatorname{sgn}(x)$ ebenfalls eine Stammfunktion von $\\tfrac1x$ - auf jeder Komponente darf die Konstante anders sein.<br><b>2.</b> Nicht jede Funktion hat eine Stammfunktion: Die Signum-Funktion hat keine (eine solche müsste bei $0$ differenzierbar sein und wäre links/rechts $\\pm x + C$ - der Knick verhindert $F'(0)$); Integrierbarkeit und Stammfunktions-Existenz sind verschiedene Fragen."
  },
  {
    id: "k8_lemma_8_60_61",
    title: "Lemmata 8.60 & 8.61: Lineare Differentialgleichungen 1. Ordnung",
    category: "8.5 Erste Differentialgleichungen",
    type: "lemma",
    front: "Wie löst man die <b>homogene</b> ($y' + f(x)y = 0$) und die <b>inhomogene</b> lineare Differentialgleichung erster Ordnung (Lemmata 8.60/8.61)?",
    back: "<b>Lemma 8.60 (homogen):</b> Ist $F$ eine Stammfunktion von $f$ auf $I$, so sind die Lösungen von $y' + f(x)y = 0$ <b>genau</b> die Vielfachen<br>$$y(x) = A\\exp(-F(x)), \\qquad A \\in \\mathbb{R}.$$<br><b>Lemma 8.61 (inhomogen):</b> Ist $y_{\\text{part}}$ EINE Lösung von $y' + f(x)y = g(x)$, so ist die allgemeine Lösung<br>$$y_{\\text{inhom}} = y_{\\text{part}} + y_{\\text{hom}}$$<br>mit $y_{\\text{hom}}$ der allgemeinen homogenen Lösung. Eine partikuläre Lösung findet die <b>Variation der Konstanten</b>: Ansatz $y(x) = A(x)\\exp(-F(x))$ führt auf $A'(x) = g(x)\\exp(F(x))$.",
    meta: "Skript: Lemmata 8.60 & 8.61, Abschnitt 8.5.3",
    explanation: "<b>Eindeutigkeits-Trick (8.60):</b> Für jede Lösung $y$ ist $\\tilde y = \\exp(F)y$ konstant (Produktregel + Korollar 8.33) - exp 'absorbiert' die Gleichung. Lemma 8.61 ist exakt die Struktur linearer Gleichungssysteme aus der linearen Algebra: Lösungsmenge = partikuläre Lösung + Kern (Übung 8.62). Die Störfunktion $g$ heisst so, weil sie das homogene System 'stört'.",
    example: "$y' = \\lambda y$ (also $f = -\\lambda$): Lösungen $y = Ae^{\\lambda x}$ - exponentielles Wachstum/Zerfall. $y' + \\tfrac{1}{x} y = 0$ auf $(0,\\infty)$: $F = \\log x$, Lösungen $y = \\tfrac{A}{x}$.",
    counterexample: "<b>1.</b> Die Lösungsgesamtheit der inhomogenen Gleichung ist KEIN Vektorraum: Die Summe zweier Lösungen von $y' + fy = g$ löst $y' + fy = 2g$ - nur die homogenen Lösungen bilden einen Raum (den 'Kern').<br><b>2.</b> Beim Ansatz der Variation der Konstanten darf man $A$ nicht als konstant behandeln und trotzdem $g \\neq 0$ erwarten: Konstantes $A$ liefert exakt die homogene Lösung - die 'Variation' ist der ganze Witz."
  },
  {
    id: "k8_zweite_ordnung",
    title: "8.5.4 & Beispiel 8.65: Gleichungen zweiter Ordnung",
    category: "8.5 Erste Differentialgleichungen",
    type: "beispiel",
    front: "Welche Lösungen haben die homogenen Gleichungen zweiter Ordnung $y'' = 0$, $y'' - y' = 0$ und $y'' + y = 0$ (Beispiel 8.65)?",
    back: "(a) $y'' = 0$: $\\quad y(x) = C_1 + C_2 x$<br>(b) $y'' - y' = 0$: $\\quad y(x) = C_1 + C_2 e^{x}$<br>(c) $y'' + y = 0$: $\\quad y(x) = C_1 \\sin x + C_2 \\cos x$, äquivalent $y(x) = D_1 e^{ix} + D_2 e^{-ix}$<br><br>jeweils mit beliebigen Konstanten $C_1, C_2$ (bzw. $D_1, D_2$) in $\\mathbb{C}$. Hinter den Lösungen steht das <b>charakteristische Polynom</b>: Der Ansatz $y = e^{\\lambda x}$ in $y'' + ay' + by = 0$ führt auf $\\lambda^2 + a\\lambda + b = 0$ - die Nullstellen $\\lambda$ liefern die Basislösungen $e^{\\lambda x}$.",
    meta: "Skript: Abschnitt 8.5.4, Beispiel 8.65, Wichtige Übung 8.66, Beispiel 8.67",
    explanation: "In (a) hat $T^2 = 0$ die Doppelnullstelle $0$ (Lösungen $1$ und $x$), in (b) hat $T^2 - T = 0$ die Nullstellen $0, 1$, in (c) hat $T^2 + 1 = 0$ die Nullstellen $\\pm i$ - und $e^{\\pm ix} = \\cos x \\pm i\\sin x$ übersetzt die komplexen Basislösungen in die reellen sin/cos. Physikalische Bedeutung (Beispiel 8.67): $y'' + ay' + by = 0$ beschreibt die <b>gedämpfte Schwingung</b> einer Feder - Dämpfungsterm $ay'$, Rückstellkraft $by$.",
    example: "Anfangswerte legen die Konstanten fest: $y'' + y = 0$ mit $y(0) = 0$, $y'(0) = 1$ hat die eindeutige Lösung $y = \\sin x$.",
    counterexample: "<b>1.</b> Zwei Konstanten sind nötig und nicht reduzierbar: $y = \\sin x$ allein ist nicht die allgemeine Lösung von $y'' + y = 0$ - der Lösungsraum einer linearen Gleichung 2. Ordnung ist zweidimensional (zwei Anfangswerte $y(0), y'(0)$).<br><b>2.</b> Der Exponentialansatz allein greift bei Doppelnullstellen zu kurz: Für $y'' = 0$ liefert $e^{0 \\cdot x} = 1$ nur EINE Lösung - die zweite ($y = x$) hat die Form $xe^{\\lambda x}$; Nullstellen-Vielfachheiten erfordern Zusatzlösungen."
  }
];
