/* ==========================================================================
   FLASHCARDS KAPITEL 9: Die Ableitung und das Riemann-Integral
   Analysis I - Prof. Dr. Manfred Einsiedler
   ========================================================================== */

window.FLASHCARDS_KAPITEL_9 = [
  // ========================================================================
  // 9.1 DER FUNDAMENTALSATZ
  // ========================================================================
  {
    id: "k9_theorem_9_2",
    title: "Theorem 9.2 & Korollar 9.3: Ableitung des Integrals",
    category: "9.1 Der Fundamentalsatz",
    type: "satz",
    front: "Was besagt <b>Theorem 9.2</b> über die Ableitung des partikulären Integrals $F(x) = \\int_a^x f(t)\\,\\mathrm{d}t$, und was folgt für stetige $f$ (Korollar 9.3)?",
    back: "<b>Theorem 9.2:</b> Sei $f \\in \\mathcal{R}([a,b])$ Riemann-integrierbar. Ist $f$ bei $x_0 \\in [a,b]$ <b>stetig</b>, so ist $F: x \\mapsto \\int_a^x f(t)\\,\\mathrm{d}t$ bei $x_0$ differenzierbar mit<br>$$F'(x_0) = f(x_0).$$<br><b>Korollar 9.3:</b> Für stetiges $f \\in C([a,b])$ ist $x \\mapsto \\int_a^x f(t)\\,\\mathrm{d}t$ eine <b>Stammfunktion</b> von $f$, und jede Stammfunktion $F$ hat die Form<br>$$F(x) = \\int_a^x f(t)\\,\\mathrm{d}t + C.$$<br>Insbesondere besitzt jede stetige Funktion auf einem kompakten Intervall eine Stammfunktion.",
    meta: "Skript: Definition 9.1, Theorem 9.2, Korollar 9.3",
    explanation: "<b>Beweisidee:</b> $\\frac{F(x) - F(x_0)}{x - x_0} - f(x_0) = \\frac{1}{x - x_0}\\int_{x_0}^x (f(t) - f(x_0))\\,\\mathrm{d}t$; Stetigkeit bei $x_0$ drückt den Integranden unter $\\varepsilon$, die Dreiecksungleichung des Integrals (Satz 4.24) und Intervalladditivität (Satz 4.26) erledigen den Rest. Anschaulich: $F(x) - F(x_0) \\approx f(x_0)(x - x_0)$ plus ein Fehlerstreifen der Fläche $\\le \\varepsilon(x - x_0)$. Hier verschmelzen die beiden Stränge des Semesters: Integral (Kap. 4) und Ableitung (Kap. 8).",
    example: "$F(x) = \\int_0^x e^{-t^2}\\mathrm{d}t$ ist differenzierbar mit $F'(x) = e^{-x^2}$ - obwohl sich $F$ nicht durch elementare Funktionen ausdrücken lässt! So entstehen 'neue' Funktionen (Integralsinus Si, Fehlerfunktion, Abschnitt 9.2.8).",
    counterexample: "<b>1.</b> Ohne Stetigkeit bei $x_0$ kann $F'(x_0) \\neq f(x_0)$ sein oder nicht existieren: Für $f = \\operatorname{sgn}$ ist $F(x) = |x|$ - bei der Sprungstelle $0$ nicht differenzierbar.<br><b>2.</b> Riemann-Integrierbarkeit allein liefert keine Stammfunktion: Unstetige integrierbare $f$ (Treppenfunktionen!) haben i.A. gar keine Stammfunktion - 'Integral mit variabler Grenze' und 'Stammfunktion' fallen nur bei stetigem $f$ zusammen."
  },
  {
    id: "k9_kor_9_4_9_5",
    title: "Korollare 9.4 & 9.5: Der Fundamentalsatz in Rechenform",
    category: "9.1 Der Fundamentalsatz",
    type: "satz",
    front: "Wie berechnet man Integrale mit Stammfunktionen (Korollar 9.4), und wie rekonstruiert man $F$ aus $F'$ (Korollar 9.5)?",
    back: "<b>Korollar 9.4 (Berechnung des Integrals):</b> Ist $f \\in C([a,b])$ stetig und $F$ eine Stammfunktion von $f$, dann gilt<br>$$\\int_a^b f(t)\\,\\mathrm{d}t = F(b) - F(a) = \\big[F(x)\\big]_a^b.$$<br><b>Korollar 9.5 (Integral der Ableitung):</b> Ist $F \\in C^1([a,b])$ stetig differenzierbar, so gilt für alle $x \\in [a,b]$<br>$$F(x) = F(a) + \\int_a^x F'(t)\\,\\mathrm{d}t.$$<br>Diese Resultate heissen zusammen der <b>Fundamentalsatz der Integral- und Differentialrechnung</b> (Leibniz, Newton, Barrow).",
    meta: "Skript: Korollare 9.4 & 9.5",
    explanation: "Differenzieren und Integrieren sind zueinander inverse Operationen - in beide Richtungen: 9.4 macht aus jeder Ableitungsregel eine Integralformel (so wurden die Formeln aus Korollar 7.86 erst richtig verständlich), 9.5 sagt: Eine $C^1$-Funktion ist durch Startwert und Ableitung vollständig bestimmt. Die Stetigkeitsannahmen lassen sich abschwächen (Übung 9.6: endlich viele Unstetigkeitsstellen).",
    example: "$\\int_0^1 x^2\\,\\mathrm{d}x = \\big[\\tfrac{x^3}{3}\\big]_0^1 = \\tfrac13$ - der in Kapitel 1 und 4 mühsam per Ober-/Untersummen berechnete Wert in einer Zeile.",
    counterexample: "<b>1.</b> In Korollar 9.5 ist $C^1$ wesentlich: Für $F(x) = x^2\\sin(\\tfrac{1}{x^2})$-artige Funktionen (differenzierbar, $F'$ unbeschränkt) ist $F'$ nicht einmal Riemann-integrierbar - die Formel bricht zusammen.<br><b>2.</b> Korollar 9.4 blind über Definitionslücken anzuwenden ist falsch: $\\int_{-1}^1 \\tfrac{1}{x^2}\\mathrm{d}x \\neq \\big[-\\tfrac1x\\big]_{-1}^1 = -2$ (negativ für einen positiven Integranden!) - der Integrand ist auf $[-1,1]$ gar nicht (Riemann-)integrierbar."
  },
  {
    id: "k9_kor_9_11",
    title: "Korollar 9.11: Differentiation von Potenzreihen",
    category: "9.1 Der Fundamentalsatz",
    type: "satz",
    front: "Darf man Potenzreihen <b>gliedweise differenzieren</b> (Korollar 9.11)?",
    back: "Ja: Ist $f(x) = \\sum_{n=0}^\\infty c_n x^n$ eine Potenzreihe mit Konvergenzradius $R > 0$, dann ist $f: (-R, R) \\to \\mathbb{R}$ differenzierbar mit<br>$$f'(x) = \\sum_{n=1}^\\infty n c_n x^{n-1},$$<br>wobei die abgeleitete Potenzreihe <b>denselben Konvergenzradius $R$</b> hat.<br><br><b>Folgerung (Übung 9.12):</b> Potenzreihen sind auf $(-R,R)$ <b>glatt</b>, und es gilt $c_n = \\frac{f^{(n)}(0)}{n!}$ - die Koeffizienten sind durch die Funktion eindeutig bestimmt (Koeffizientenvergleich, Übung 9.13).",
    meta: "Skript: Korollar 9.11, Übungen 9.12/9.13",
    explanation: "<b>Eleganter Beweis über das Integrieren:</b> Die Kandidatenreihe $g(x) = \\sum n c_n x^{n-1}$ darf nach Satz 7.85 gliedweise integriert werden und ergibt (bis auf $c_0$) wieder $f$; nach Korollar 9.3 ist $f$ dann Stammfunktion von $g$, also $f' = g$. So wird die schwierige Vertauschung 'Ableitung vs. Grenzwert' auf die bereits bewiesene Vertauschung 'Integral vs. Grenzwert' (gleichmässige Konvergenz!) zurückgespielt.",
    example: "$\\exp' = \\exp$ neu bewiesen: $\\big(\\sum \\tfrac{x^n}{n!}\\big)' = \\sum \\tfrac{n x^{n-1}}{n!} = \\sum \\tfrac{x^{n-1}}{(n-1)!} = \\exp(x)$. Ebenso $\\sin' = \\cos$ direkt aus den Reihen.",
    counterexample: "<b>1.</b> Für allgemeine Funktionenfolgen ist gliedweises Differenzieren FALSCH, selbst bei gleichmässiger Konvergenz: $f_n(x) = \\tfrac{\\sin(nx)}{n} \\to 0$ gleichmässig, aber $f_n'(x) = \\cos(nx) \\not\\to 0$ - die Potenzreihenstruktur ist wesentlich.<br><b>2.</b> Am Rand $|x| = R$ gilt das Korollar nicht: $\\sum \\tfrac{x^n}{n^2}$ konvergiert bei $x = 1$, die abgeleitete Reihe $\\sum \\tfrac{x^{n-1}}{n}$ divergiert dort - Randpunkte brauchen eigene Argumente."
  },
  {
    id: "k9_log2_leibniz",
    title: "9.1.2 & 9.1.3: log 2 und die Leibniz-Reihe",
    category: "9.1 Der Fundamentalsatz",
    type: "beispiel",
    front: "Berechne die Werte der <b>alternierenden harmonischen Reihe</b> und der <b>Leibniz-Reihe</b> mit dem Fundamentalsatz.",
    back: "$$\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n} = \\log 2, \\qquad \\sum_{n=0}^\\infty \\frac{(-1)^n}{2n+1} = \\frac{\\pi}{4}$$<br><b>Methode (je drei Schritte):</b><br>1. Geometrische Reihe für die Ableitung: $\\log(1+x)' = \\frac{1}{1+x} = \\sum (-1)^n x^n$ bzw. $\\arctan'(x) = \\frac{1}{1+x^2} = \\sum (-1)^n x^{2n}$ auf $(-1,1)$.<br>2. Gliedweise integrieren (Korollar 9.5 + Satz 7.85): $\\log(1+x) = \\sum_{k=1}^\\infty \\frac{(-1)^{k+1}}{k}x^k$, $\\arctan x = \\sum_{n=0}^\\infty \\frac{(-1)^n}{2n+1}x^{2n+1}$.<br>3. Randpunkt $x = 1$ mit dem <b>Abelschen Grenzwertsatz</b> (Satz 7.65): Die Reihen konvergieren bei $1$ (Leibniz-Kriterium), also stimmen die Werte mit $\\log 2$ bzw. $\\arctan 1 = \\tfrac\\pi4$ überein.",
    meta: "Skript: Abschnitte 9.1.2 & 9.1.3",
    explanation: "Kapitel 7 konnte nur die Konvergenz dieser Reihen zeigen - erst der Fundamentalsatz liefert die Werte. Das Dreier-Muster 'Ableitung als geometrische Reihe erkennen, integrieren, Abel am Rand' ist eine wiederverwendbare Maschine zur Reihenauswertung.",
    example: "Dieselbe Methode gibt $\\log(1+x)$- und $\\arctan$-Reihen für ALLE $x \\in (-1, 1]$ - z.B. $\\log\\tfrac32 = \\tfrac12 - \\tfrac{1}{2\\cdot4} + \\tfrac{1}{3\\cdot 8} - \\dots$",
    counterexample: "<b>1.</b> Ohne den Abel-Schritt ist das Argument bei $x = 1$ unvollständig: Die Potenzreihenentwicklung gilt a priori nur auf $(-1,1)$ - Konvergenz am Rand plus Stetigkeit müssen separat begründet werden.<br><b>2.</b> Die Leibniz-Reihe konvergiert quälend langsam (Fehler $\\sim \\tfrac{1}{2n}$): Nach 1000 Gliedern hat man erst 3 korrekte Dezimalen von $\\pi$ - zur numerischen Berechnung von $\\pi$ ist sie ungeeignet, so schön sie ist."
  },

  // ========================================================================
  // 9.2 INTEGRATIONSMETHODEN
  // ========================================================================
  {
    id: "k9_partielle",
    title: "9.2.1: Partielle Integration",
    category: "9.2 Integrationsmethoden",
    type: "satz",
    front: "Wie lautet die <b>partielle Integration</b> (unbestimmt und bestimmt), und aus welcher Ableitungsregel stammt sie?",
    back: "Aus der <b>Produktregel</b> $(uv)' = u'v + uv'$ folgt<br>$$\\int u v'\\,\\mathrm{d}x = uv - \\int u'v\\,\\mathrm{d}x + C \\qquad \\Big(\\text{kurz } \\int u\\,\\mathrm{d}v = uv - \\int v\\,\\mathrm{d}u + C\\Big)$$<br>und für stetig differenzierbare $u, v$ auf $[a,b]$ in bestimmter Form:<br>$$\\int_a^b u v'\\,\\mathrm{d}x = \\big[uv\\big]_a^b - \\int_a^b u'v\\,\\mathrm{d}x.$$",
    meta: "Skript: Abschnitt 9.2.1, Beispiel 9.15, Abschnitt 9.2.6",
    explanation: "Die Hoffnung: Das neue Integral $\\int u'v$ ist einfacher als das alte. Typische Strategien: Polynome als $u$ wählen (sie werden beim Ableiten kleiner - so fällt bei $\\int x^n e^x\\,\\mathrm{d}x$ der Grad pro Schritt um 1), oder 'Phönix-Integrale' wie $\\int e^x\\sin x\\,\\mathrm{d}x$, bei denen nach zwei Schritten das Ausgangsintegral wieder erscheint und algebraisch aufgelöst wird. Auch der Taylor-Satz (Theorem 9.46) entsteht durch iterierte partielle Integration!",
    example: "Beispiel 9.15: $\\int x e^x\\,\\mathrm{d}x = xe^x - \\int e^x\\,\\mathrm{d}x = (x-1)e^x + C$. Trickreich: $\\int \\log x\\,\\mathrm{d}x = \\int 1 \\cdot \\log x\\,\\mathrm{d}x = x\\log x - \\int 1\\,\\mathrm{d}x = x\\log x - x + C$ (mit $v' = 1$!).",
    counterexample: "<b>1.</b> Die falsche Rollenwahl verschlimmert alles: Bei $\\int xe^x\\,\\mathrm{d}x$ mit $u = e^x$, $v' = x$ entsteht $\\int \\tfrac{x^2}{2}e^x\\,\\mathrm{d}x$ - der Grad wächst.<br><b>2.</b> $\\int uv\\,\\mathrm{d}x \\neq \\big(\\int u\\big)\\big(\\int v\\big)$: Es gibt keine 'Produktregel des Integrierens' - genau deshalb braucht es die partielle Integration als Ersatz."
  },
  {
    id: "k9_substitution",
    title: "9.2.2 & 9.2.4: Substitution (vorwärts und rückwärts)",
    category: "9.2 Integrationsmethoden",
    type: "satz",
    front: "Wie lautet die <b>Substitutionsregel</b>, und was ist der Unterschied zwischen Vorwärts-Substitution $u = f(x)$ und trigonometrischer (Rückwärts-)Substitution $x = r\\sin\\theta$?",
    back: "Aus der <b>Kettenregel</b>: Hat $g$ die Stammfunktion $G$ und ist $f$ stetig differenzierbar, so gilt<br>$$\\int g(f(x))\\,f'(x)\\,\\mathrm{d}x = G(f(x)) + C \\qquad \\Big(\\text{mit } u = f(x),\\ \\mathrm{d}u = f'(x)\\,\\mathrm{d}x: \\int g(u)\\,\\mathrm{d}u\\Big)$$<br>Beim bestimmten Integral substituieren die <b>Grenzen mit</b>: $\\int_a^b g(f(x))f'(x)\\,\\mathrm{d}x = \\int_{f(a)}^{f(b)} g(u)\\,\\mathrm{d}u$.<br><br><b>Rückwärts (9.2.4):</b> Man setzt $x = f(\\theta)$ mit <i>bijektivem</i> $f$ und drückt am Ende $\\theta = f^{-1}(x)$ zurück - z.B. $x = r\\sin\\theta$ verwandelt $\\sqrt{r^2 - x^2}$ in $r\\cos\\theta$ (Beispiel 9.21, Kreisfläche).",
    meta: "Skript: Abschnitte 9.2.2, 9.2.4, 9.2.6; Beispiele 9.17, 9.21",
    explanation: "Vorwärts braucht den Blick dafür, dass ein Faktor die innere Ableitung $f'$ ist (Beispiel 9.17: $\\int \\frac{x}{1+x^2}\\mathrm{d}x = \\tfrac12\\log(1+x^2) + C$ mit $u = 1 + x^2$). Rückwärts substituiert man 'auf Verdacht' nach Funktionstyp: $\\sqrt{r^2 - x^2} \\to x = r\\sin\\theta$, $\\sqrt{1 + x^2} \\to x = \\sinh\\theta$. So ergibt sich $\\int\\sqrt{r^2 - x^2}\\,\\mathrm{d}x = \\tfrac{r^2}{2}\\big(\\arcsin\\tfrac{x}{r} + \\tfrac{x}{r}\\sqrt{1 - \\tfrac{x^2}{r^2}}\\big) + C$ und daraus die Kreisfläche $\\pi r^2$ (Beispiel 9.64).",
    example: "$\\int_0^1 2x\\,e^{x^2}\\mathrm{d}x = \\int_0^1 e^u\\,\\mathrm{d}u = e - 1$ ($u = x^2$; Grenzen $0 \\mapsto 0$, $1 \\mapsto 1$ mitsubstituiert - kein Rückeinsetzen nötig).",
    counterexample: "<b>1.</b> Grenzen vergessen ist DER Klassiker: $\\int_0^2 2x e^{x^2}\\mathrm{d}x = \\int_0^4 e^u\\mathrm{d}u = e^4 - 1$, NICHT $\\int_0^2 e^u\\mathrm{d}u$.<br><b>2.</b> Rückwärts-Substitution braucht Bijektivität: $x = \\sin\\theta$ ist nur auf $[-\\tfrac\\pi2, \\tfrac\\pi2]$ umkehrbar - wer das ignoriert, erhält z.B. falsche Vorzeichen bei $\\sqrt{\\cos^2\\theta} = |\\cos\\theta|$."
  },
  {
    id: "k9_partialbruch",
    title: "9.2.3: Integration rationaler Funktionen (Partialbruchzerlegung)",
    category: "9.2 Integrationsmethoden",
    type: "satz",
    front: "Nach welchem <b>Verfahren</b> integriert man eine rationale Funktion $\\frac{p(x)}{q(x)}$?",
    back: "1. <b>Polynomdivision</b> (Übung 3.17): Spalte ein Polynom ab, bis $\\deg p < \\deg q$.<br>2. <b>Partialbruchzerlegung:</b> Zerlege gemäss der Faktorisierung von $q$ in Summanden der Form $\\frac{A}{(x-a)^n}$ (reelle Nullstellen) und $\\frac{Bx + C}{(x^2 + bx + c)^n}$ (komplexe Nullstellenpaare); die Konstanten per Koeffizientenvergleich.<br>3. <b>Elementare Integrale</b> (Beispiel 9.18):<br>$$\\int \\frac{\\mathrm{d}x}{x-a} = \\log|x-a| + C, \\qquad \\int \\frac{\\mathrm{d}x}{(x-a)^n} = \\frac{(x-a)^{1-n}}{1-n} + C \\ (n \\ge 2),$$<br>und quadratische Nenner führen auf $\\log$- und $\\arctan$-Terme.",
    meta: "Skript: Abschnitt 9.2.3, Beispiele 9.18/9.19",
    explanation: "Beispiel 9.19 führt es vor: $\\frac{x^4+1}{x^2(x+1)}$ wird per Division zu $x - 1 + \\frac{x^2+1}{x^2(x+1)}$, dann der Ansatz $\\frac{x^2+1}{x^2(x+1)} = \\frac{A}{x^2} + \\frac{B}{x} + \\frac{C}{x+1}$. Bemerkenswert: Rationale Funktionen lassen sich damit IMMER elementar integrieren (durch rationale Funktionen, log und arctan) - eine der wenigen Funktionenklassen mit vollständigem Algorithmus.",
    example: "$\\int \\frac{\\mathrm{d}x}{x^2 - 1} = \\tfrac12\\int\\big(\\frac{1}{x-1} - \\frac{1}{x+1}\\big)\\mathrm{d}x = \\tfrac12\\log\\left|\\frac{x-1}{x+1}\\right| + C$.",
    counterexample: "<b>1.</b> Ohne vorherige Polynomdivision ist der Partialbruch-Ansatz falsch: $\\frac{x^2}{x-1}$ lässt sich nicht als $\\frac{A}{x-1}$ schreiben - der Ansatz setzt $\\deg p < \\deg q$ voraus.<br><b>2.</b> Mehrfache Nullstellen brauchen ALLE Potenzen: $\\frac{1}{x^2(x+1)} = \\frac{A}{x^2} + \\frac{C}{x+1}$ (ohne $\\frac{B}{x}$) ist unlösbar - pro $k$-facher Nullstelle $a$ gehören $\\frac{A_1}{x-a}, \\dots, \\frac{A_k}{(x-a)^k}$ in den Ansatz."
  },

  // ========================================================================
  // 9.3 DAS UNEIGENTLICHE INTEGRAL
  // ========================================================================
  {
    id: "k9_uneigentlich",
    title: "9.3.1: Uneigentliche Integrationsgrenzen",
    category: "9.3 Das uneigentliche Integral",
    type: "definition",
    front: "Wie ist das <b>uneigentliche Integral</b> $\\int_a^\\infty f(x)\\,\\mathrm{d}x$ definiert, und wann konvergiert $\\int_1^\\infty x^{-\\alpha}\\,\\mathrm{d}x$?",
    back: "Für $f: [a, \\infty) \\to \\mathbb{C}$ mit $f|_{[a,b]} \\in \\mathcal{R}([a,b])$ für alle $b > a$:<br>$$\\int_a^\\infty f(x)\\,\\mathrm{d}x = \\lim_{b \\to \\infty} \\int_a^b f(x)\\,\\mathrm{d}x,$$<br>falls der Grenzwert existiert (<b>konvergent</b>, sonst <b>divergent</b>). $\\int_{-\\infty}^\\infty$ definiert man durch <b>getrennte</b> Grenzübergänge $\\int_{-\\infty}^0 + \\int_0^\\infty$.<br><br><b>Beispiel 9.30 ($\\alpha$-Test):</b><br>$$\\int_1^\\infty x^{-\\alpha}\\,\\mathrm{d}x = \\begin{cases} \\frac{1}{\\alpha - 1} & \\text{falls } \\alpha > 1 \\\\ +\\infty & \\text{falls } \\alpha \\le 1 \\end{cases}$$<br><b>Lemma 9.33:</b> Für $f \\ge 0$ gilt stets $\\int_a^\\infty f\\,\\mathrm{d}x = \\sup_b \\int_a^b f\\,\\mathrm{d}x$ - konvergent oder $= \\infty$.",
    meta: "Skript: Abschnitt 9.3.1, Beispiele 9.29/9.30/9.32/9.34, Lemma 9.33",
    explanation: "Beispiel 9.29: $\\int_0^\\infty \\frac{\\mathrm{d}x}{1+x^2} = \\lim_b \\arctan b = \\tfrac\\pi2$. Für $f \\ge 0$ funktioniert ein Majorantenprinzip wie bei Reihen: Die <b>Gausssche Glockenkurve</b> $\\int_{-\\infty}^\\infty e^{-x^2}\\mathrm{d}x$ konvergiert, da $e^{-x^2} \\le e^{-x}$ für $x \\ge 1$ (Beispiel 9.34; der Wert $\\sqrt{\\pi}$ kommt erst im 2. Semester).",
    example: "$\\int_1^\\infty \\frac{\\mathrm{d}x}{x^2} = 1$ (konvergent, $\\alpha = 2$), $\\int_1^\\infty \\frac{\\mathrm{d}x}{x} = \\infty$ (harmonischer Grenzfall $\\alpha = 1$).",
    counterexample: "<b>1.</b> Beispiel 9.32: $\\int_{-\\infty}^\\infty x\\,\\mathrm{d}x$ existiert NICHT, obwohl der symmetrische Grenzwert $\\lim_c \\int_{-c}^c x\\,\\mathrm{d}x = 0$ existiert - die unsymmetrische Variante $\\int_{-c}^{c+1}$ liefert $\\infty$; deshalb verlangt die Definition getrennte Grenzübergänge.<br><b>2.</b> Konvergenz des Integrals erzwingt NICHT $f(x) \\to 0$: Eine Funktion mit immer schmaleren Spitzen der Höhe 1 bei den ganzen Zahlen hat konvergentes Integral, aber $f(n) = 1$ - anders als bei Reihen (Prop. 7.2) gibt es kein 'Nullfolgen-Kriterium'."
  },
  {
    id: "k9_satz_9_35",
    title: "Satz 9.35: Der Integraltest für Reihen",
    category: "9.3 Das uneigentliche Integral",
    type: "satz",
    front: "Was besagt der <b>Integraltest</b> (Satz 9.35), und wie beweist man ihn?",
    back: "Sei $f: [1, \\infty) \\to \\mathbb{R}_{\\ge 0}$ <b>monoton fallend</b>. Dann gilt<br>$$\\sum_{n=2}^\\infty f(n) \\;\\le\\; \\int_1^\\infty f(x)\\,\\mathrm{d}x \\;\\le\\; \\sum_{n=1}^\\infty f(n).$$<br><b>Insbesondere:</b> Die Reihe $\\sum_{n=1}^\\infty f(n)$ konvergiert <b>genau dann</b>, wenn das uneigentliche Integral $\\int_1^\\infty f(x)\\,\\mathrm{d}x$ konvergiert.",
    meta: "Skript: Satz 9.35 & Übung 9.36",
    explanation: "<b>Beweis:</b> Auf $[n, n+1]$ gilt per Monotonie $f(n+1) \\le \\int_n^{n+1} f(x)\\,\\mathrm{d}x \\le f(n)$ - die Reihe ist eine Unter-/Obersumme des Integrals mit Maschenweite 1; dann summieren und Satz 6.5/Lemma 9.33 anwenden. Der Test übersetzt Reihenkonvergenz in die oft viel leichter berechenbare Integralkonvergenz - und liefert nebenbei quantitative Schranken.",
    example: "Der p-Test neu (Übung 9.36): $\\sum \\frac{1}{n^p}$ konvergiert $\\iff \\int_1^\\infty x^{-p}\\mathrm{d}x$ konvergiert $\\iff p > 1$. Verfeinert: $\\sum_{n=1}^N \\tfrac1n = \\log N + O(1)$ - die Divergenzrate der harmonischen Reihe.",
    counterexample: "<b>1.</b> Ohne Monotonie ist der Test falsch: $f$ mit schmalen Spitzen bei den ganzen Zahlen ($f(n) = 1$, dazwischen fast 0) hat konvergentes Integral, aber $\\sum f(n) = \\infty$.<br><b>2.</b> Der Test vergleicht Konvergenz, nicht Werte: $\\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{\\pi^2}{6} \\neq 1 = \\int_1^\\infty \\frac{\\mathrm{d}x}{x^2}$ - aus dem Integral darf man nie den Reihenwert ablesen."
  },
  {
    id: "k9_unbeschraenkt",
    title: "9.3.2: Integrale über unbeschränkte Funktionen",
    category: "9.3 Das uneigentliche Integral",
    type: "definition",
    front: "Wie definiert man $\\int_a^B f(x)\\,\\mathrm{d}x$ für bei $B$ <b>unbeschränktes</b> $f$, und was ergeben $\\int_0^1 \\log x\\,\\mathrm{d}x$ und $\\int_{-1}^1 \\tfrac1x\\,\\mathrm{d}x$?",
    back: "Für $f: [a, B) \\to \\mathbb{C}$ mit $f|_{[a,b]} \\in \\mathcal{R}([a,b])$ für alle $b \\in (a, B)$:<br>$$\\int_a^B f(x)\\,\\mathrm{d}x = \\lim_{b \\nearrow B} \\int_a^b f(x)\\,\\mathrm{d}x$$<br>(analog $\\lim_{a \\searrow A}$ an der unteren Grenze); innere Singularitäten zerlegt man per Intervalladditivität in getrennte uneigentliche Integrale.<br><br><b>Beispiel 9.39:</b> $\\int_0^1 \\log x\\,\\mathrm{d}x = \\lim_{a \\searrow 0}\\big[x\\log x - x\\big]_a^1 = -1$ (da $a\\log a \\to 0$).<br><b>Beispiel 9.40:</b> $\\int_{-1}^1 \\tfrac1x\\,\\mathrm{d}x$ <b>existiert nicht</b>: Beide Teilintegrale $\\int_{-1}^0$ und $\\int_0^1$ divergieren ($-\\infty$ bzw. $+\\infty$) - und man weist dem Integral auch keinen Wert zu.",
    meta: "Skript: Abschnitt 9.3.2, Übung 9.38, Beispiele 9.39-9.41",
    explanation: "Spiegelbildlich zum $\\alpha$-Test bei $\\infty$: $\\int_0^1 x^{-\\alpha}\\mathrm{d}x$ konvergiert genau für $\\alpha < 1$ (Rollen vertauscht!). Für beschränktes $f$ ist das uneigentliche Integral mit dem gewöhnlichen Riemann-Integral kompatibel (Übung 9.38). Die Gamma-Funktion kombiniert beide Typen: $\\Gamma(s) = \\int_0^\\infty x^{s-1}e^{-x}\\mathrm{d}x$ ist bei $0$ UND bei $\\infty$ uneigentlich - mit partieller Integration folgt $\\Gamma(s+1) = s\\Gamma(s)$ und $\\Gamma(n+1) = n!$ - die Fakultät wird zu einer Funktion auf $(0, \\infty)$ interpoliert ($\\Gamma(\\tfrac12) = \\sqrt\\pi$ im 2. Semester).",
    example: "$\\int_0^1 \\frac{\\mathrm{d}x}{\\sqrt{x}} = \\lim_{a\\searrow 0}\\big[2\\sqrt{x}\\big]_a^1 = 2$ - unbeschränkter Integrand, endliche Fläche.",
    counterexample: "<b>1.</b> Wer die Singularität von $\\tfrac1x$ bei $0$ übersieht und naiv $[\\log|x|]_{-1}^1 = 0$ rechnet, 'beweist' einen Wert für ein nicht existierendes Integral - innere Singularitäten IMMER zuerst aufspalten.<br><b>2.</b> $\\int_0^1 \\frac{\\mathrm{d}x}{x}$ divergiert ($\\alpha = 1$ ist auch hier der Grenzfall) - 'der Integrand ist nur bei einem Punkt unendlich' genügt nicht für Konvergenz."
  },

  // ========================================================================
  // 9.4 TAYLOR APPROXIMATION
  // ========================================================================
  {
    id: "k9_theorem_9_46",
    title: "Theorem 9.46: Taylor-Approximation mit Integral-Restglied",
    category: "9.4 Taylor Approximation",
    type: "satz",
    front: "Definiere die <b>$n$-te Taylor-Approximation</b> und formuliere <b>Theorem 9.46</b> mit dem Integral-Restglied (sowie die Varianten nach Lagrange und Cauchy).",
    back: "Für $n$-mal differenzierbares $f$ und $x_0 \\in (a,b)$:<br>$$P_{x_0,n}^f(x) = \\sum_{k=0}^n \\frac{f^{(k)}(x_0)}{k!}(x - x_0)^k$$<br>(das eindeutige Polynom mit denselben Ableitungen $\\le n$ bei $x_0$).<br><br><b>Theorem 9.46:</b> Ist $f$ $(n+1)$-mal <i>stetig</i> differenzierbar, so gilt $f(x) = P^f_{x_0,n}(x) + R^f_{x_0,n}(x)$ mit dem <b>Integral-Restglied</b><br>$$R^f_{x_0,n}(x) = \\int_{x_0}^x f^{(n+1)}(t)\\,\\frac{(x-t)^n}{n!}\\,\\mathrm{d}t.$$<br><b>Varianten (Übung 9.48):</b> Es gibt $\\xi_L$ bzw. $\\xi_C$ zwischen $x_0$ und $x$ mit<br>$$R^f_{x_0,n}(x) = \\frac{f^{(n+1)}(\\xi_L)}{(n+1)!}(x - x_0)^{n+1} \\ \\text{(Lagrange)}, \\qquad R^f_{x_0,n}(x) = \\frac{f^{(n+1)}(\\xi_C)}{n!}(x - \\xi_C)^n(x - x_0) \\ \\text{(Cauchy)}.$$",
    meta: "Skript: Theorem 9.46 & Übung 9.48, Abschnitt 9.4",
    explanation: "<b>Beweis:</b> Induktion mit partieller Integration - der Fall $n = 0$ IST der Fundamentalsatz ($f(x) = f(x_0) + \\int_{x_0}^x f'$), jeder weitere Schritt wälzt per partieller Integration eine Ableitung vom Restglied ins Polynom. Taylor verallgemeinert also die Tangente ($n = 1$) zu Approximationen beliebiger Ordnung; die Lagrange-Form verallgemeinert den Mittelwertsatz.",
    example: "$e^x = 1 + x + \\tfrac{x^2}{2} + R_2(x)$ mit $|R_2(x)| \\le \\frac{e^{|x|}}{6}|x|^3$; bei $x = 0{,}1$: Fehler $< 2\\cdot 10^{-4}$ - drei Terme genügen für 3 Dezimalen.",
    counterexample: "<b>1.</b> Das Taylor-Polynom ist i.A. KEINE gute globale Approximation: Für $\\log(1+x)$ um $0$ divergieren die Polynome für $x > 1$ völlig - die Güte gilt lokal bei $x_0$.<br><b>2.</b> Für die Integral-Form braucht es stetige $(n+1)$-te Ableitung; Lagrange/Cauchy kommen mit blosser Existenz aus - die Voraussetzungen der drei Formen sind nicht identisch."
  },
  {
    id: "k9_kor_9_47",
    title: "Korollar 9.47 & Beispiel 9.49: Taylor-Abschätzung und Extremwerte",
    category: "9.4 Taylor Approximation",
    type: "satz",
    front: "Wie lautet die <b>Taylor-Abschätzung</b> (Korollar 9.47), und wie verfeinert sie das Extremwert-Kriterium (Beispiel 9.49)?",
    back: "<b>Korollar 9.47:</b> Mit $M_{n+1} = \\max\\{|f^{(n+1)}(t)| : t \\text{ zwischen } x_0 \\text{ und } x\\}$ gilt<br>$$\\big|f(x) - P^f_{x_0,n}(x)\\big| \\le \\frac{M_{n+1}\\,|x - x_0|^{n+1}}{(n+1)!},$$<br>insbesondere $f(x) = P^f_{x_0,n}(x) + O\\big((x-x_0)^{n+1}\\big)$ für $x \\to x_0$.<br><br><b>Beispiel 9.49 (Extremwerte):</b> Gilt $f'(x_0) = \\dots = f^{(n-1)}(x_0) = 0$ und $f^{(n)}(x_0) \\neq 0$, so hat $f$ in $x_0$:<br>&bull; $n$ gerade, $f^{(n)}(x_0) > 0$: lokales <b>Minimum</b>; $f^{(n)}(x_0) < 0$: lokales <b>Maximum</b>;<br>&bull; $n$ ungerade: <b>kein</b> Extremum.",
    meta: "Skript: Korollar 9.47 & Beispiel 9.49",
    explanation: "Die Fakultät im Nenner macht Taylor so stark: Bei beschränkten Ableitungen (exp, sin, cos) schlägt $(n+1)!$ jedes $|x - x_0|^{n+1}$ - die Taylorreihe konvergiert auf ganz $\\mathbb{R}$ gegen die Funktion. Das Extremwert-Kriterium klärt die bei $f''(x_0) = 0$ offenen Fälle: Die erste nichtverschwindende Ableitung dominiert lokal das Verhalten ($f(x) \\approx f(x_0) + \\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n$).",
    example: "$f(x) = x^4$: $f' = f'' = f''' = 0$ bei $0$, $f^{(4)}(0) = 24 > 0$, $n = 4$ gerade $\\Rightarrow$ Minimum. $f(x) = x^3$: $n = 3$ ungerade $\\Rightarrow$ Sattelpunkt - endlich sauber begründet.",
    counterexample: "<b>1.</b> Verschwinden ALLE Ableitungen (wie bei $\\psi$ aus Beispiel 9.45), sagt das Kriterium nichts: $\\psi$ hat bei $0$ ein Minimum, $\\psi(x) - \\psi(-x)$-artige Varianten nicht - jenseits aller endlichen Ordnungen entscheidet kein Taylor-Argument.<br><b>2.</b> $M_{n+1}$ muss wirklich das Maximum ÜBER DAS INTERVALL sein, nicht $|f^{(n+1)}(x_0)|$: Bei schnell wachsender hoher Ableitung (z.B. $\\log$ nahe $0$) unterschätzt man den Fehler sonst drastisch."
  },
  {
    id: "k9_taylorreihe",
    title: "9.4 & 9.4.1: Taylorreihen und analytische Funktionen",
    category: "9.4 Taylor Approximation",
    type: "definition",
    front: "Was ist die <b>Taylorreihe</b> einer glatten Funktion, und warum ist sie <b>nicht immer</b> gleich der Funktion (Beispiel 9.45)?",
    back: "Für glattes $f$ ist die <b>Taylorreihe</b> um $x_0$ die Potenzreihe<br>$$T_{x_0}^f(x) = \\sum_{k=0}^\\infty \\frac{f^{(k)}(x_0)}{k!}(x - x_0)^k.$$<br>$f$ heisst (reell) <b>analytisch</b>, wenn es lokal um jeden Punkt durch seine Taylorreihe dargestellt wird.<br><br><b>Beispiel 9.45 (verschwindende Taylorreihe):</b> Die glatte Funktion $\\psi(x) = e^{-1/x}$ für $x > 0$, $\\psi(x) = 0$ für $x \\le 0$ (Beispiel 8.23) hat $\\psi^{(n)}(0) = 0$ für ALLE $n$ - ihre Taylorreihe um $0$ ist die Nullreihe, obwohl $\\psi(x) > 0$ für $x > 0$. $\\psi$ ist <b>glatt, aber nicht analytisch</b>.",
    meta: "Skript: Abschnitte 9.4 & 9.4.1, Beispiel 9.45",
    explanation: "Die Taylorreihe hat immer dieselben Ableitungen wie $f$ bei $x_0$ - aber das legt die Funktion nur fest, wenn das Restglied $R_{x_0,n}(x) \\to 0$ für $n \\to \\infty$ (Korollar 9.47 prüft genau das). Potenzreihen sind umgekehrt stets analytisch (Korollar 9.11): Die Welt teilt sich in $C^\\infty \\supsetneq$ analytisch. In der komplexen Analysis (Funktionentheorie) verschwindet dieser Unterschied - komplex differenzierbar heisst automatisch analytisch.",
    example: "exp, sin, cos sind analytisch auf $\\mathbb{R}$: Das Lagrange-Restglied $\\frac{M_{n+1}|x|^{n+1}}{(n+1)!} \\to 0$, da die Ableitungen gleichmässig beschränkt sind (bzw. $M_{n+1} = e^{|x|}$ fest) - ihre Potenzreihendarstellungen aus Kapitel 7 sind genau ihre Taylorreihen.",
    counterexample: "<b>1.</b> 'Taylorreihe konvergiert' $\\neq$ 'Taylorreihe konvergiert gegen $f$': Bei $\\psi$ konvergiert die Nullreihe bestens - nur eben gegen die falsche Funktion.<br><b>2.</b> Glattheit liefert keinen positiven Konvergenzradius der Taylorreihe im nützlichen Sinn: Mit $\\psi$-Bausteinen existieren glatte Funktionen, deren Taylorreihe um $0$ NUR bei $x = 0$ konvergiert."
  },

  // ========================================================================
  // 9.5 NUMERISCHE INTEGRATION
  // ========================================================================
  {
    id: "k9_satz_9_56",
    title: "Satz 9.56: Rechtecks- und Trapezregel",
    category: "9.5 Numerische Integration",
    type: "satz",
    front: "Wie approximieren <b>Rechtecksregel</b> und <b>Sehnentrapezregel</b> das Integral, und wie schnell fallen die Fehler (Satz 9.56)?",
    back: "Mit Schrittweite $h = \\frac{b-a}{n}$ und Stützstellen $x_\\ell = a + \\ell h$:<br><br>(a) <b>Rechtecksregel</b> ($f \\in C^1$):<br>$$\\int_a^b f(x)\\,\\mathrm{d}x = h\\big(f(x_0) + \\dots + f(x_{n-1})\\big) + F_1, \\qquad |F_1| \\le \\frac{(b-a)^2}{2n}\\max|f'|$$<br>(b) <b>Sehnentrapezregel</b> ($f \\in C^2$):<br>$$\\int_a^b f(x)\\,\\mathrm{d}x = \\frac{h}{2}\\big(f(x_0) + 2f(x_1) + \\dots + 2f(x_{n-1}) + f(x_n)\\big) + F_2, \\qquad |F_2| \\le \\frac{(b-a)^3}{6n^2}\\max|f''|$$",
    meta: "Skript: Satz 9.56, Abschnitt 9.5",
    explanation: "Der Fehler fällt wie $\\tfrac1n$ (Rechtecke) bzw. $\\tfrac{1}{n^2}$ (Trapeze): Die Trapezregel ersetzt $f$ stückweise durch Sehnen statt Konstanten - eine Approximationsordnung mehr. Die Beweise laufen über Taylor-Abschätzungen (Korollar 9.47) auf jedem Teilintervall; glattere Integranden erlauben bessere Verfahren (Simpson: $\\tfrac{1}{n^4}$). Wichtig für Funktionen ohne elementare Stammfunktion ($e^{-x^2}$, $\\tfrac{\\sin x}{x}$, ...).",
    example: "$\\int_0^1 e^{-x^2}\\mathrm{d}x$ mit Trapezregel, $n = 10$: Fehler $\\le \\frac{1}{600}\\max|f''| \\approx 0{,}003$ - zwei sichere Dezimalstellen mit 11 Funktionswerten.",
    counterexample: "<b>1.</b> Die Fehlerschranken brauchen die Glattheit: Für bloss stetiges, stark oszillierendes $f$ kann die Rechteckssumme beliebig schlecht sein - die Schranke enthält $\\max|f'|$ und wird sonst wertlos.<br><b>2.</b> Verdoppeln von $n$ halbiert den Trapez-Fehler NICHT - es viertelt ihn ($\\tfrac{1}{n^2}$!); wer Fehlerordnungen verwechselt, investiert Rechenaufwand falsch."
  },

  // ========================================================================
  // 9.6 DREI ASYMPTOTISCHE FORMELN
  // ========================================================================
  {
    id: "k9_asymptotik",
    title: "9.6: Wallis, Stirling und die Euler-Mascheroni-Konstante",
    category: "9.6 Drei asymptotische Formeln",
    type: "satz",
    front: "Nenne die drei asymptotischen Formeln aus Abschnitt 9.6: <b>Wallissches Produkt</b>, <b>Stirling-Formel</b> und die <b>Asymptotik der harmonischen Reihe</b>.",
    back: "&bull; <b>Wallissches Produkt (9.17):</b><br>$$\\pi = \\lim_{n\\to\\infty} \\frac{1}{n}\\,\\frac{(2^n n!)^4}{((2n)!)^2}$$<br>&bull; <b>Stirling-Formel (9.19):</b><br>$$\\lim_{n\\to\\infty} \\frac{n!}{\\sqrt{2\\pi n}\\,\\left(\\frac{n}{e}\\right)^n} = 1, \\qquad \\text{kurz } n! \\approx \\sqrt{2\\pi n}\\left(\\frac{n}{e}\\right)^n$$<br>&bull; <b>Harmonische Reihe (9.21):</b><br>$$\\sum_{k=1}^n \\frac{1}{k} = \\log n + \\gamma + \\frac{1}{2n} + O\\big(\\tfrac{1}{n^2}\\big)$$<br>mit der <b>Euler-Mascheroni-Konstante</b> $\\gamma = \\int_1^\\infty\\big(\\tfrac{1}{\\lfloor x\\rfloor} - \\tfrac1x\\big)\\mathrm{d}x = 0{,}5772\\dots$",
    meta: "Skript: Abschnitte 9.6.1-9.6.3",
    explanation: "<b>Methoden-Trilogie:</b> Wallis folgt aus der Rekursion für $I_k = \\int_0^\\pi \\sin^k x\\,\\mathrm{d}x$ (partielle Integration!). Stirling vergleicht $\\log(n!) = \\sum \\log k$ mit $\\int \\log x\\,\\mathrm{d}x$ via Taylor-Abschätzungen - Wallis liefert dabei die Konstante $\\sqrt{2\\pi}$. Die harmonische Asymptotik verfeinert den Integraltest. Gemeinsames Muster: <i>Summen durch Integrale ersetzen und den Fehler mit Taylor kontrollieren.</i>",
    example: "Stirling praktisch: $100! \\approx \\sqrt{200\\pi}\\,(100/e)^{100} \\approx 9{,}32 \\cdot 10^{157}$ (wahrer Wert $9{,}33\\cdot10^{157}$ - relativer Fehler unter $0{,}1\\%$). Harmonisch: $\\sum_{k=1}^{10^6} \\tfrac1k \\approx 13{,}816 + 0{,}577 = 14{,}393$.",
    counterexample: "<b>1.</b> Stirling ist eine <i>relative</i>, keine absolute Asymptotik: Die Differenz $n! - \\sqrt{2\\pi n}(n/e)^n$ divergiert gegen $\\infty$ - nur der Quotient geht gegen 1.<br><b>2.</b> $\\sum_{k=1}^n \\tfrac1k - \\log n$ konvergiert (gegen $\\gamma$), aber $\\sum \\tfrac1k$ selbst divergiert - 'wächst wie $\\log n$' darf nicht mit 'beschränkt' verwechselt werden."
  },

  // ========================================================================
  // 9.7 ANWENDUNGEN
  // ========================================================================
  {
    id: "k9_bogenlaenge",
    title: "9.7.2: Bogenlänge von Wegen",
    category: "9.7 Anwendungen",
    type: "definition",
    front: "Wie ist die <b>Bogenlänge</b> eines stetig differenzierbaren Weges $\\gamma: [a,b] \\to \\mathbb{R}^d$ definiert, und warum ist das die 'einzig vernünftige' Definition?",
    back: "$$L(\\gamma) = \\int_a^b \\|\\dot\\gamma(t)\\|_2\\,\\mathrm{d}t = \\int_a^b \\sqrt{\\dot\\gamma_1(t)^2 + \\dots + \\dot\\gamma_d(t)^2}\\,\\mathrm{d}t$$<br>- das Integral der <b>Geschwindigkeit</b> $\\|\\dot\\gamma(t)\\|_2$ über die Zeit.<br><br><b>Begründung via Proposition 4.30:</b> Die zurückgelegte Strecke ist eine <i>additive Intervallfunktion</i>, eingeklemmt zwischen $(\\beta - \\alpha)\\cdot$min- und max-Geschwindigkeit - nach 4.30 bleibt nur das Integral der Geschwindigkeit. Die Bogenlänge ist invariant unter <b>Reparametrisierung</b> (Lemma 9.67).<br><br><b>Beispiel 9.66:</b> $\\gamma(t) = re^{it} = (r\\cos t, r\\sin t)$, $t \\in [0, 2\\pi]$: $\\|\\dot\\gamma(t)\\| = r$, also Umfang $= 2\\pi r$.",
    meta: "Skript: Abschnitt 9.7.2, Beispiel 9.66, Lemma 9.67",
    explanation: "Für Funktionsgraphen $\\gamma(t) = (t, f(t))$ ergibt sich die Formel $L = \\int_a^b \\sqrt{1 + f'(t)^2}\\,\\mathrm{d}t$. Dass der Kreisumfang $2\\pi r$ herauskommt, schliesst endlich den Kreis zur analytischen Definition von $\\pi$ aus Satz 7.74 - die 'Kreiszahl' verdient ihren Namen. Flächen-Pendant (9.7.1): Kreisfläche $\\pi r^2$ via $4\\int_0^r \\sqrt{r^2 - x^2}\\,\\mathrm{d}x$ (Beispiel 9.64).",
    example: "Parabel $f(t) = \\tfrac{t^2}{2}$ auf $[0, 1]$: $L = \\int_0^1 \\sqrt{1 + t^2}\\,\\mathrm{d}t = \\tfrac12\\big(\\sqrt2 + \\operatorname{arsinh} 1\\big)$ - hier zahlt sich die arsinh-Stammfunktion aus Kapitel 8 aus.",
    counterexample: "<b>1.</b> Die Bogenlänge ist NICHT $\\|\\gamma(b) - \\gamma(a)\\|$: Der Kreisweg hat Länge $2\\pi r$, aber Endpunktabstand 0 - gemessen wird der Weg, nicht die Verschiebung.<br><b>2.</b> Für nur stetige (nicht $C^1$) Wege kann die Länge unendlich sein: Fraktale Kurven wie die Koch-Kurve haben zwischen je zwei Punkten unendliche Bogenlänge - die Formel braucht die stetige Differenzierbarkeit."
  },
  {
    id: "k9_rotation",
    title: "9.7.4/9.7.5: Rotationskörper (Volumen und Oberfläche)",
    category: "9.7 Anwendungen",
    type: "satz",
    front: "Wie berechnet man <b>Volumen</b> und <b>Mantelfläche</b> eines Rotationskörpers, und was ergibt sich für die Kugel?",
    back: "Rotiert der Graph von $f: [a,b] \\to \\mathbb{R}_{\\ge 0}$ um die $x$-Achse:<br>&bull; <b>Volumen:</b> $\\displaystyle V = \\pi\\int_a^b f(x)^2\\,\\mathrm{d}x$ (Scheiben vom Radius $f(x)$)<br>&bull; <b>Mantelfläche:</b> $\\displaystyle O = 2\\pi \\int_a^b f(x)\\sqrt{1 + f'(x)^2}\\,\\mathrm{d}x$<br><br><b>Kugel vom Radius $r$</b> (Rotation von $f(x) = \\sqrt{r^2 - x^2}$ über $[-r, r]$):<br>$$V = \\pi\\int_{-r}^r (r^2 - x^2)\\,\\mathrm{d}x = \\frac{4}{3}\\pi r^3 \\quad \\text{(Beispiel 9.72)}, \\qquad O = 2\\pi\\int_{-r}^r r\\,\\mathrm{d}x = 4\\pi r^2 \\quad \\text{(Beispiel 9.74)}$$",
    meta: "Skript: Abschnitte 9.7.4/9.7.5, Beispiele 9.72/9.74",
    explanation: "Beide Formeln sind Anwendungen von Proposition 4.30: Volumen und Oberfläche sind additive Intervallfunktionen, lokal eingeklemmt durch Zylinder- bzw. Kegelstumpf-Schranken. Hübsches Kugel-Detail: Bei der Oberfläche kürzt sich $f(x)\\sqrt{1 + f'(x)^2} = \\sqrt{r^2 - x^2}\\cdot\\frac{r}{\\sqrt{r^2 - x^2}} = r$ - jede 'Scheibe' gleicher Breite trägt gleich viel Fläche bei (Archimedes' Satz).",
    example: "Kegel (Rotation von $f(x) = \\tfrac{r}{h}x$ über $[0,h]$): $V = \\pi\\tfrac{r^2}{h^2}\\int_0^h x^2\\,\\mathrm{d}x = \\tfrac13\\pi r^2 h$ - die Schulformel aus einer Zeile Analysis.",
    counterexample: "<b>1.</b> Für die Oberfläche darf man NICHT naiv $2\\pi\\int f\\,\\mathrm{d}x$ rechnen (Umfang mal Breite ohne Schrägenfaktor): Beim Kegel fehlte dann der Faktor $\\sqrt{1 + f'^2}$ - anders als beim Volumen ist der Fehler der 'horizontalen Näherung' hier NICHT vernachlässigbar (vgl. das Treppen-Paradoxon zur Bogenlänge).<br><b>2.</b> Gabriels Horn ($f(x) = \\tfrac1x$ auf $[1, \\infty)$): endliches Volumen $\\pi$, aber unendliche Oberfläche - Volumen- und Flächenkonvergenz sind unabhängig."
  }
];
