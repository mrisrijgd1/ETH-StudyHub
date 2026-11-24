/* ==========================================================================
   PHYSIK I – KAPITEL 12 (Anhang): Differentialgleichungen
   Klassifikation, lineare DGL 1. Ordnung (homogen, inhomogen, Variation
   der Konstanten), Sättigung und Zerfall mit Zufuhr, lineare DGL
   2. Ordnung (charakteristische Gleichung, drei Fälle), inhomogene DGL
   2. Ordnung (unbestimmte Koeffizienten), mathematisches Pendel
   Skript Physik I – Prof. K. Ensslin, ETH Zürich, HS 2025
   ========================================================================== */
(function () {
const R = String.raw;
window.FLASHCARDS_KAPITEL_12 = [
  {
    id: "ph12_klassifikation",
    title: "Klassifikation von Differentialgleichungen: Ordnung, linear, homogen, Koeffizienten",
    category: "12.2 Einige Definitionen",
    type: "definition",
    front: R`Nach welchen vier Kriterien klassifiziert man eine Differentialgleichung? Ordne damit $u^{(n)}+a_{n-1}(t)u^{(n-1)}+\dots+a_0(t)u = s(t)$ ein, und klassifiziere die Gleichungen des gedämpften Oszillators und des Pendels ohne Kleinwinkelnäherung.`,
    back: R`Notation: $u^{(n)} = \frac{d^nu}{dt^n}$ (12.1).
<ol><li><b>Ordnung:</b> höchste vorkommende Ableitung.</li>
<li><b>Linear:</b> $u$ und seine Ableitungen kommen nur als Linearkombination vor (keine Potenzen, nicht in anderen Funktionen); sonst nichtlinear.</li>
<li><b>Homogen/inhomogen:</b> Ein Term $s(t)$ ohne $u$ heisst Störfunktion; mit $s\ne0$ inhomogen, mit $s\equiv0$ homogen.</li>
<li><b>Koeffizienten:</b> $a_i(t)$ variabel oder konstant.</li></ol>
$$u^{(n)}+a_{n-1}(t)\,u^{(n-1)}+\dots+a_1(t)\,\dot u+a_0(t)\,u = s(t)\qquad(12.2)$$
ist eine <b>inhomogene lineare DGL $n$-ter Ordnung mit variablen Koeffizienten</b>.<br><br>
$\ddot x+2\rho\dot x+\omega_0^2x = \frac{F_0}m\cos\Omega t$: 2. Ordnung, linear, inhomogen, konstante Koeffizienten.<br>
$\ddot\varphi+\frac g\ell\sin\varphi = 0$: 2. Ordnung, <b>nichtlinear</b> (wegen $\sin\varphi$), homogen.`,
    meta: "Skript: Abschnitte 12.1–12.2, Gl. (12.1)–(12.2), Anhang S. 23–24",
    explanation: R`<b>Intuition:</b> Bevor man löst, muss man wissen, welches Werkzeug passt – wie beim Arzt die Diagnose vor der Therapie. Die vier Fragen entscheiden über die Methode.<br><br>
<b>Warum Linearität so wichtig ist:</b> Bei linearen homogenen Gleichungen gilt das <b>Superpositionsprinzip</b>: Summen und Vielfache von Lösungen sind wieder Lösungen. Daraus folgt die Struktur „allgemeine Lösung = partikuläre + homogene“. Für nichtlineare Gleichungen gibt es kein solches Rezept.<br><br>
<b>Abhängigkeiten:</b> Eine DGL $n$-ter Ordnung braucht $n$ Anfangsbedingungen; die allgemeine Lösung hat $n$ freie Konstanten (Newton: 2. Ordnung → Ort und Geschwindigkeit).<br><br>
<b>Zusammenhang:</b> Die Hauptschwierigkeit in der Physik ist oft nicht das Lösen, sondern das Aufstellen der DGL aus dem physikalischen Problem (12.1). Nichtlineare Gleichungen (grosse Pendelausschläge, Luftwiderstand $\propto v^2$) linearisiert man häufig (Taylor, 11.1.2).`,
    derivation: R`Warum $\sin\varphi$ die Linearität zerstört:
<ol class="fc-steps">
<li>$\varphi_1$, $\varphi_2$ seien Lösungen von $\ddot\varphi = -\frac g\ell\sin\varphi$<em>Annahme.</em></li>
<li>$\dfrac{d^2}{dt^2}(\varphi_1+\varphi_2) = -\dfrac g\ell(\sin\varphi_1+\sin\varphi_2)$<em>Gleichungen addiert.</em></li>
<li>$\sin\varphi_1+\sin\varphi_2\neq\sin(\varphi_1+\varphi_2)$<em>Der Sinus ist nicht additiv.</em></li>
<li>$\varphi_1+\varphi_2$ ist im Allgemeinen keine Lösung<em>Superposition verletzt: nichtlinear.</em></li>
<li>$\sin\varphi\approx\varphi$: $\ddot\varphi+\frac g\ell\varphi = 0$ ist linear<em>Linearisierung für kleine Winkel (12.91).</em></li>
</ol>`,
    example: R`$\dot u = tu$: 1. Ordnung, linear, homogen, variabler Koeffizient.<br>
$m\dot v = -kv^2+mg$: 1. Ordnung, nichtlinear ($v^2$), inhomogen (Fall mit Luftwiderstand).<br>
$L\ddot Q+R\dot Q+Q/C = U_0$: 2. Ordnung, linear, inhomogen, konstante Koeffizienten (Schwingkreis an Gleichspannung).`,
    counterexample: R`<b>„Linear“ heisst nicht „linear in $t$“:</b> $\ddot u+t^2u = e^t$ ist eine lineare DGL, obwohl $t^2$ und $e^t$ vorkommen – es kommt nur darauf an, wie $u$ und seine Ableitungen auftreten. Dagegen ist $\dot u = u^2$ nichtlinear, obwohl $t$ gar nicht vorkommt.`,
    pitfalls: R`<ul><li>Linearität an der Abhängigkeit von $t$ statt von $u$ festmachen.</li>
<li>Einen Term wie $a_0(t)u$ für eine Störfunktion halten (er enthält $u$).</li>
<li>Bei einer DGL 2. Ordnung nur eine Anfangsbedingung angeben.</li></ul>`
  },
  {
    id: "ph12_dgl1_homogen",
    title: "Lineare DGL 1. Ordnung, homogen: Trennung der Variablen",
    category: "12.3 Die lineare Differentialgleichung 1. Ordnung",
    type: "herleitung",
    front: R`Löse die homogene lineare DGL 1. Ordnung $\dot u = a(t)\,u$ durch <b>Trennung der Variablen</b>. Was ergibt sich für konstantes $a$, und wie bestimmt man die Integrationskonstante?`,
    back: R`Typen (12.3–12.6): $\dot u = a(t)u+s(t)$ bzw. $\dot u = au+s(t)$ (inhomogen), $\dot u = a(t)u$ bzw. $\dot u = au$ (zugehörige homogene Gleichungen).<br><br>
<b>Trennung der Variablen:</b>
$$\frac{du}{dt} = a(t)\,u\;\Rightarrow\;\frac{du}u = a(t)\,dt\;\Rightarrow\;\int\frac{du}u = \int a(t)\,dt\qquad(12.7\text{–}12.9)$$
$$\ln u = \int a(t)\,dt+c_1\;\Rightarrow\;u = e^{\int a(t)dt+c_1}\qquad(12.10,\,12.11)$$
Mit $c_2 = e^{c_1}$:
$$u(t) = c_2\,e^{\int a(t)\,dt}\qquad(12.12)$$
Konstantes $a$: $u = c_2e^{at}$. Die Konstante folgt aus einer Anfangsbedingung, z. B. $u(0) = u_0$. Wichtig ist die Methode, nicht das Auswendiglernen der Formel.`,
    meta: "Skript: Abschnitte 12.3–12.3.1, Gl. (12.3)–(12.12), Anhang S. 25–26",
    explanation: R`<b>Intuition:</b> „Die Änderungsrate ist proportional zur vorhandenen Menge“ ist das Gesetz des exponentiellen Wachstums oder Zerfalls: Zinseszins, radioaktiver Zerfall, Entladung eines Kondensators, Abklingen einer Amplitude.<br><br>
<b>Abhängigkeiten:</b> $a\gt0$: Wachstum, Verdopplungszeit $\ln2/a$. $a\lt0$: Zerfall, Halbwertszeit $\ln2/|a|$, Zeitkonstante $\tau = 1/|a|$ (nach $\tau$ ist $1/e\approx37\,\%$ übrig).<br><br>
<b>Vorzeichen:</b> Formal geht beim Logarithmus $\ln|u|$ ein; die Konstante $c_2$ darf auch negativ (oder null) sein, das deckt alle Vorzeichen ab.<br><br>
<b>Zusammenhang:</b> Dieselbe Methode liefert die barometrische Höhenformel, die Abkühlung nach Newton und die Energieabnahme der gedämpften Schwingung $\dot E = -2\rho E$ (9.3.3).`,
    derivation: R`Beispiel mit variablem Koeffizienten $\dot u = -t\,u$, $u(0) = u_0$:
<ol class="fc-steps">
<li>$\dfrac{du}u = -t\,dt$<em>Variablen trennen.</em></li>
<li>$\ln u = -\dfrac{t^2}2+c_1$<em>Beidseitig integrieren.</em></li>
<li>$u = c_2e^{-t^2/2}$<em>Exponieren, $c_2 = e^{c_1}$.</em></li>
<li>$u(0) = c_2 = u_0$<em>Anfangsbedingung.</em></li>
<li>$u(t) = u_0e^{-t^2/2}$<em>Gauss-förmiger Abfall: Die Rate $|a(t)| = t$ wächst mit der Zeit, deshalb fällt $u$ schneller als exponentiell.</em></li>
</ol>`,
    example: R`<b>Kondensatorentladung</b> $\dot U = -U/(RC)$: $U = U_0e^{-t/RC}$. Mit $R = 10\,\text{k}\Omega$, $C = 100\,\mu\text{F}$: $\tau = 1\,\text{s}$; nach $3\,\text{s}$ sind $5\,\%$ übrig.<br>
<b>Radioaktiver Zerfall</b> (12.43–12.47): $N = N_0e^{-\lambda t}$; Halbwertszeit $T_{1/2} = \ln2/\lambda$.`,
    counterexample: R`<b>Nichtlineare Gleichung:</b> $\dot u = u^2$ lässt sich ebenfalls trennen ($du/u^2 = dt$), liefert aber $u = \frac1{1/u_0-t}$, das bei $t = 1/u_0$ divergiert (endliche „Explosionszeit“). Trennung der Variablen funktioniert auch hier, aber die Lösung ist kein Exponentialgesetz, und Superposition gilt nicht.`,
    pitfalls: R`<ul><li>Die Integrationskonstante vergessen oder nicht aus der Anfangsbedingung bestimmen.</li>
<li>$e^{\int a\,dt+c_1}$ als $e^{\int a\,dt}+e^{c_1}$ schreiben.</li>
<li>Beim Trennen durch $u$ teilen, ohne die Lösung $u\equiv0$ zu beachten.</li></ul>`
  },
  {
    id: "ph12_dgl1_inhomogen",
    title: "Lineare DGL 1. Ordnung, inhomogen: partikulär + homogen, Variation der Konstanten",
    category: "12.3 Die lineare Differentialgleichung 1. Ordnung",
    type: "herleitung",
    front: R`Warum ist die allgemeine Lösung von $\dot u = a(t)u+s(t)$ gleich einer partikulären Lösung plus der allgemeinen Lösung der homogenen Gleichung? Leite mit der <b>Variation der Konstanten</b> eine partikuläre Lösung her. Wann nimmt man stattdessen <b>unbestimmte Koeffizienten</b>?`,
    back: R`<b>Satz:</b> allgemeine Lösung der inhomogenen Gleichung = partikuläre Lösung der inhomogenen + allgemeine Lösung der homogenen Gleichung.<br>
Begründung: Ist $u_p$ eine Lösung, so gilt für jede andere Lösung $u$:
$$\frac{d}{dt}(u-u_p) = a(t)(u-u_p)\;\Rightarrow\;u = u_p+Ce^{\int a(t)dt}\qquad(12.14\text{–}12.19)$$
<b>Variation der Konstanten:</b> Ansatz $u_p = C(t)\,e^{\int a\,dt}$ (12.20) einsetzen:
$$e^{\int a\,dt}\dot C+C\,a\,e^{\int a\,dt} = a\,C\,e^{\int a\,dt}+s\;\Rightarrow\;\dot C = s(t)\,e^{-\int a\,dt}\qquad(12.21\text{–}12.25)$$
$$C(t) = \int s(t)\,e^{-\int a(t)dt}\,dt\qquad(12.26)$$
<b>Unbestimmte Koeffizienten</b> (nur bei konstantem $a$): Ansatz in der Form der Störfunktion (Polynom, $e^{\alpha t}\times$Polynom, Sinus/Kosinus …, Tab. 12.1), Koeffizienten durch Vergleich bestimmen. Lösungsschema: Abb. 12.1.`,
    meta: "Skript: Abschnitt 12.3.2, Gl. (12.13)–(12.26), Tab. 12.1, Abb. 12.1, Anhang S. 26–30",
    explanation: R`<b>Intuition:</b> Die homogene Lösung beschreibt, wie das System von sich aus (ohne Antrieb) reagiert; die partikuläre, was der Antrieb erzwingt. Jede Lösung ist „erzwungene Antwort + ein Stück Eigenverhalten“, und wie viel Eigenverhalten, legt die Anfangsbedingung fest.<br><br>
<b>Variation der Konstanten:</b> Man macht die Konstante der homogenen Lösung zeitabhängig und lässt sie „mitwandern“, um die Störung aufzufangen. Die Methode funktioniert immer (auch mit variablen Koeffizienten), führt aber auf Integrale.<br><br>
<b>Unbestimmte Koeffizienten:</b> Schneller, wenn die Störfunktion eine typische Form hat: Die Antwort eines linearen Systems mit konstanten Koeffizienten hat dieselbe Form wie die Anregung. Sonderfall: Ist $\alpha = a$ (Störung „resonant“ mit der homogenen Lösung), braucht man einen zusätzlichen Faktor $t$ (Tab. 12.1).<br><br>
<b>Zusammenhang:</b> Dieselbe Struktur bei der erzwungenen Schwingung (9.4.1) und in der linearen Algebra (Lösungsmenge eines inhomogenen LGS = spezielle Lösung + Kern).`,
    derivation: R`$\dot u = -u+t$ mit unbestimmten Koeffizienten, $u(0) = 0$:
<ol class="fc-steps">
<li>$u_h = Ce^{-t}$<em>Homogene Lösung ($a = -1$).</em></li>
<li>Ansatz $u_p = A_0+A_1t$<em>Störfunktion ist ein Polynom 1. Grades (Tab. 12.1).</em></li>
<li>$A_1 = -A_0-A_1t+t$<em>Einsetzen.</em></li>
<li>$t$: $0 = -A_1+1\Rightarrow A_1 = 1$; konstant: $A_1 = -A_0\Rightarrow A_0 = -1$<em>Koeffizientenvergleich.</em></li>
<li>$u = t-1+Ce^{-t}$, $u(0) = 0\Rightarrow C = 1$<em>Allgemeine Lösung, dann Anfangsbedingung: $u = t-1+e^{-t}$.</em></li>
</ol>`,
    example: R`<b>Kondensator laden</b>: $\dot U = -\frac{U}{RC}+\frac{U_0}{RC}$: $U_p = U_0$, $U = U_0+Ce^{-t/RC}$, mit $U(0) = 0$: $U = U_0(1-e^{-t/RC})$. Nach $\tau = RC$: $63\,\%$.<br>
Probe der Lösung $u = t-1+e^{-t}$: $\dot u = 1-e^{-t}$, $-u+t = 1-e^{-t}$ ✓.`,
    counterexample: R`<b>Falscher Ansatz im Resonanzfall:</b> $\dot u = -u+e^{-t}$. Der Ansatz $u_p = Ae^{-t}$ ergibt $-Ae^{-t} = -Ae^{-t}+e^{-t}$, also $0 = e^{-t}$ – unmöglich. Weil $e^{-t}$ schon die homogene Lösung ist, braucht man $u_p = Ate^{-t}$; das liefert $A = 1$.`,
    pitfalls: R`<ul><li>Die homogene Lösung vergessen und nur $u_p$ angeben.</li>
<li>Die Anfangsbedingung auf $u_p$ statt auf die Gesamtlösung anwenden.</li>
<li>Im Resonanzfall ($\alpha = a$) den Faktor $t$ im Ansatz vergessen.</li></ul>`
  },
  {
    id: "ph12_saettigung_zerfall",
    title: "Beispiele 1. Ordnung: Sättigung (Lernkurve) und Zerfall mit konstanter Zufuhr",
    category: "12.3 Die lineare Differentialgleichung 1. Ordnung",
    type: "beispiel",
    front: R`Löse (1) die „Lerngleichung“ $\dot L = k(L_m-L)$ mit $L(0) = 0$ und (2) den radioaktiven Zerfall mit konstanter Zufuhr $\dot N = -\lambda N+\beta$ mit $N(0) = N_0$. Welche Gleichgewichtswerte stellen sich ein?`,
    back: R`<b>(1) Sättigung:</b> $\dot L = -kL+kL_m$ (12.27, 12.28). Homogen: $L = Ce^{-kt}$ (12.29–12.32). Variation der Konstanten $L_p = C(t)e^{-kt}$:
$$\dot Ce^{-kt} = kL_m\;\Rightarrow\;C(t) = L_me^{kt}\;\Rightarrow\;L_p = L_m\qquad(12.33\text{–}12.38)$$
$$L = L_m+Ce^{-kt},\quad L(0) = 0\Rightarrow C = -L_m,\quad L(t) = L_m\left(1-e^{-kt}\right)\qquad(12.39\text{–}12.42)$$
Die partikuläre Lösung „stand in der Gleichung“: $\dot L = 0$ genau für $L = L_m$.<br><br>
<b>(2) Zerfall mit Zufuhr</b> (12.43–12.49): ohne Zufuhr $N = N_0e^{-\lambda t}$; mit Zufuhr $\beta$:
$$N(t) = \frac\beta\lambda+\left(N_0-\frac\beta\lambda\right)e^{-\lambda t},\qquad\lim_{t\to\infty}N = \frac\beta\lambda\qquad(12.50,\,12.51)$$
Anwendung: Glukose-Infusion mit Abbaurate $\lambda$ und Zufuhr $\beta$ ergibt eine konstante Menge $\beta/\lambda$ im Blut.`,
    meta: "Skript: Abschnitt 12.3.3, Gl. (12.27)–(12.51), Anhang S. 29–32",
    explanation: R`<b>Intuition:</b> Zufluss und Abfluss: Der Abfluss wächst mit der vorhandenen Menge, der Zufluss ist konstant. Am Ende stellt sich ein Gleichgewicht ein, bei dem beide gleich gross sind: $\lambda N = \beta$. Wie eine Badewanne mit offenem Abfluss.<br><br>
<b>Abhängigkeiten:</b> Der Gleichgewichtswert $\beta/\lambda$ hängt nur von Zufuhr und Abbaurate ab, nicht vom Anfangswert. Die Zeit bis zum Gleichgewicht ist $\sim1/\lambda$ (bzw. $1/k$): nach $1/\lambda$ fehlen noch $37\,\%$, nach $3/\lambda$ noch $5\,\%$.<br><br>
<b>Methode:</b> Bei konstanter Störfunktion ist die Gleichgewichtslösung (alle Ableitungen null) immer eine partikuläre Lösung. Das spart die Variation der Konstanten.<br><br>
<b>Zusammenhang:</b> Gleiches Muster: Laden eines Kondensators, Erwärmen eines Körpers mit konstanter Heizleistung und Newton’scher Abkühlung, Endgeschwindigkeit beim Fall mit linearer Reibung, Medikamentenspiegel.`,
    derivation: R`Lösung (2) mit der Gleichgewichtsmethode:
<ol class="fc-steps">
<li>$\dot N = 0\Rightarrow N_p = \beta/\lambda$<em>Konstante partikuläre Lösung.</em></li>
<li>$N_h = Ce^{-\lambda t}$<em>Homogene Lösung.</em></li>
<li>$N = \dfrac\beta\lambda+Ce^{-\lambda t}$<em>Allgemeine Lösung.</em></li>
<li>$N(0) = N_0\Rightarrow C = N_0-\dfrac\beta\lambda$<em>Anfangsbedingung (12.50).</em></li>
<li>$N_0\lt\beta/\lambda$: $N$ wächst; $N_0\gt\beta/\lambda$: $N$ sinkt; beide gegen $\beta/\lambda$<em>Monotone Annäherung, kein Überschwingen (1. Ordnung).</em></li>
</ol>`,
    example: R`<b>Lernen</b> mit $k = 0{,}5\,\text{h}^{-1}$: nach $2\,\text{h}$ $63\,\%$ von $L_m$, die Hälfte nach $\ln2/k = 1{,}4\,\text{h}$.<br>
<b>Isotop</b> mit $T_{1/2} = 6\,\text{h}$ ($\lambda = 0{,}116\,\text{h}^{-1}$) bei Zufuhr $\beta = 10^9\,\text{h}^{-1}$: Gleichgewicht $N = 8{,}7\cdot10^9$ Atome, Aktivität im Gleichgewicht $\lambda N = \beta$.`,
    counterexample: R`<b>Logistisches Wachstum</b> $\dot L = kL(L_m-L)$: Ebenfalls Sättigung, aber die Gleichung ist nichtlinear (Produkt $L\cdot L$). Die Lösung ist S-förmig statt rein exponentiell, und mit $L(0) = 0$ bleibt $L\equiv0$. Das lineare Modell (12.27) ist nur eine einfache Variante.`,
    pitfalls: R`<ul><li>Das Gleichgewicht vom Anfangswert abhängig glauben.</li>
<li>Bei $\dot L = k(L_m-L)$ das Vorzeichen von $k$ in der homogenen Lösung falsch setzen.</li>
<li>Die Aktivität $\lambda N$ mit der Teilchenzahl $N$ verwechseln.</li></ul>`
  },
  {
    id: "ph12_dgl2_homogen",
    title: "Lineare DGL 2. Ordnung, homogen: charakteristische Gleichung und drei Fälle",
    category: "12.4 Die lineare Differentialgleichung 2. Ordnung",
    type: "herleitung",
    front: R`Löse $\ddot u+a_1\dot u+a_0u = 0$ mit dem Euler-Ansatz $u = e^{\lambda t}$. Wie lautet die charakteristische Gleichung, und welche Lösungen ergeben sich für Diskriminante $\Delta\gt0$, $\Delta = 0$ und $\Delta\lt0$?`,
    back: R`Superposition: Linearkombinationen von Lösungen sind Lösungen. Ansatz $u = e^{\lambda t}$ (12.55):
$$\lambda^2e^{\lambda t}+a_1\lambda e^{\lambda t}+a_0e^{\lambda t} = 0\;\Rightarrow\;p(\lambda) = \lambda^2+a_1\lambda+a_0 = 0\qquad(12.56\text{–}12.60)$$
$$\Delta = a_1^2-4a_0,\qquad\lambda_{1,2} = \tfrac12\left(-a_1\pm\sqrt\Delta\right)\qquad(12.61,\,12.62)$$
<ul><li><b>Fall I</b> ($\Delta\gt0$, zwei reelle Wurzeln): $u = C_1e^{\lambda_1t}+C_2e^{\lambda_2t}$ (12.63); Konstanten aus $u(t_0) = u_0$, $\dot u(t_0) = v_0$ (12.64, 12.65).</li>
<li><b>Fall II</b> ($\Delta = 0$, Doppelwurzel): $u = (C_1+C_2t)e^{\lambda_1t}$ (12.66).</li>
<li><b>Fall III</b> ($\Delta\lt0$): $\lambda_{1,2} = \alpha\pm i\beta$ mit $\alpha = -\tfrac12a_1$, $\beta = \tfrac12\sqrt{-\Delta}$ (12.67–12.69); mit Euler (12.70) und reellen $B_1$, $B_2$:
$$u = e^{\alpha t}(B_1\cos\beta t+B_2\sin\beta t)\qquad(12.71\text{–}12.74)$$</li></ul>`,
    meta: "Skript: Abschnitte 12.4–12.4.1, Gl. (12.52)–(12.74), Anhang S. 32–34",
    explanation: R`<b>Intuition:</b> Die Exponentialfunktion ist die einzige Funktion, die beim Ableiten ihre Form behält. Deshalb verwandelt der Ansatz $e^{\lambda t}$ die Differentialgleichung in eine gewöhnliche quadratische Gleichung.<br><br>
<b>Physik der drei Fälle:</b> Mit $a_1 = 2\rho$, $a_0 = \omega_0^2$ ist das genau der gedämpfte Oszillator (9.3): Fall I = Kriechfall, Fall II = aperiodischer Grenzfall, Fall III = gedämpfte Schwingung mit $\omega = \sqrt{\omega_0^2-\rho^2}$.<br><br>
<b>Warum $te^{\lambda t}$ bei Doppelwurzeln?</b> Mit nur einer Exponentialfunktion hätte man eine Konstante zu wenig; die zweite, linear unabhängige Lösung ist $te^{\lambda t}$ (Grenzfall zweier zusammenfallender Wurzeln).<br><br>
<b>Zusammenhang:</b> Dieselbe Methode für Systeme: Bei gekoppelten Oszillatoren wird die charakteristische Gleichung zur Determinantenbedingung eines Eigenwertproblems (9.7.2).`,
    derivation: R`Fall III Schritt für Schritt:
<ol class="fc-steps">
<li>$u = C_1e^{(\alpha+i\beta)t}+C_2e^{(\alpha-i\beta)t} = e^{\alpha t}\left(C_1e^{i\beta t}+C_2e^{-i\beta t}\right)$<em>Zwei komplexe Lösungen überlagert (12.71, 12.72).</em></li>
<li>$= e^{\alpha t}\{(C_1+C_2)\cos\beta t+i(C_1-C_2)\sin\beta t\}$<em>Euler-Formel (12.70, 12.73).</em></li>
<li>$B_1 := C_1+C_2$, $B_2 := i(C_1-C_2)$, beide reell<em>Wahl der Konstanten für reelles $u$ ($C_2 = C_1^*$).</em></li>
<li>$u = e^{\alpha t}(B_1\cos\beta t+B_2\sin\beta t)$<em>(12.74).</em></li>
<li>$\alpha\lt0$: abklingend; $\alpha = 0$: ungedämpft; $\alpha\gt0$: aufschaukelnd<em>Vorzeichen von $a_1$ entscheidet.</em></li>
</ol>`,
    example: R`$\ddot u+3\dot u+2u = 0$: $\lambda = -1,-2$, $u = C_1e^{-t}+C_2e^{-2t}$.<br>
$\ddot u+2\dot u+u = 0$: $\lambda = -1$ doppelt, $u = (C_1+C_2t)e^{-t}$.<br>
$\ddot u+2\dot u+5u = 0$: $\lambda = -1\pm2i$, $u = e^{-t}(B_1\cos2t+B_2\sin2t)$.`,
    counterexample: R`<b>Variable Koeffizienten:</b> Für $\ddot u+t\,u = 0$ (Airy-Gleichung) funktioniert der Ansatz $e^{\lambda t}$ nicht, weil $\lambda^2+t = 0$ nicht für alle $t$ gelten kann. Die charakteristische Gleichung ist ein Werkzeug nur für konstante Koeffizienten.`,
    pitfalls: R`<ul><li>Bei der Doppelwurzel nur eine Lösung angeben.</li>
<li>Im Fall III komplexe Konstanten stehen lassen, obwohl $u$ reell sein muss.</li>
<li>Vorzeichen in $\lambda = \tfrac12(-a_1\pm\sqrt\Delta)$ verlieren.</li></ul>`
  },
  {
    id: "ph12_dgl2_inhomogen",
    title: "Lineare DGL 2. Ordnung, inhomogen: unbestimmte Koeffizienten (y'' − y = x e^{2x})",
    category: "12.4 Die lineare Differentialgleichung 2. Ordnung",
    type: "beispiel",
    front: R`Löse $y''-y = xe^{2x}$ Schritt für Schritt: Typ bestimmen, homogene Lösung, partikuläre Lösung mit unbestimmten Koeffizienten, allgemeine Lösung. Wann muss der Ansatz einen Faktor $t^\nu$ (bzw. $x^\nu$) enthalten?`,
    back: R`Gleicher Grundsatz wie bei 1. Ordnung: allgemeine inhomogene = partikuläre + allgemeine homogene Lösung. In der Praxis meist unbestimmte Koeffizienten (Tab. 12.2).<br><br>
<b>1. Typ:</b> $u\to y$, $t\to x$; 2. Ordnung, linear, inhomogen ($s = xe^{2x}$), konstante Koeffizienten (12.75, 12.76).<br>
<b>2. Homogen:</b> $p(\lambda) = \lambda^2-1 = (\lambda+1)(\lambda-1)$, Fall I:
$$y_h = C_1e^x+C_2e^{-x}\qquad(12.77\text{–}12.79)$$
<b>3. Partikulär:</b> Typ $e^{\alpha x}\sum b_\mu x^\mu$ mit $\alpha = 2$, $b_1 = 1$; da $p(2)\neq0$:
$$y_p = (A_0+A_1x)e^{2x}\;\Rightarrow\;3A_0+4A_1+3A_1x = x\;\Rightarrow\;A_1 = \tfrac13,\ A_0 = -\tfrac49\qquad(12.80\text{–}12.85)$$
<b>4. Allgemein:</b>
$$y = \left(-\tfrac49+\tfrac13x\right)e^{2x}+C_1e^x+C_2e^{-x}\qquad(12.86)$$
<b>Faktor $t^\nu$:</b> wenn $\alpha$ (bzw. $i\omega$, $\alpha+i\omega$) eine $\nu$-fache Nullstelle des charakteristischen Polynoms ist (Resonanzfall, Tab. 12.2).`,
    meta: "Skript: Abschnitte 12.4.2–12.4.3, Gl. (12.75)–(12.86), Tab. 12.2, Anhang S. 34–37",
    explanation: R`<b>Intuition:</b> Ein lineares System mit konstanten Koeffizienten antwortet auf eine Anregung „gleicher Bauart“: auf $e^{2x}$ mit $e^{2x}$, auf ein Polynom mit einem Polynom gleichen Grades, auf $\cos\omega t$ mit einer Mischung aus $\cos$ und $\sin$. Man muss nur die Koeffizienten finden.<br><br>
<b>Alle Potenzen mitnehmen:</b> Auch wenn $b_0 = 0$ ist, braucht der Ansatz $A_0$; beim Ableiten erzeugt $A_1x\,e^{2x}$ einen konstanten Anteil, den $A_0$ ausgleichen muss.<br><br>
<b>Resonanzfall:</b> Ist die Anregung selbst eine Lösung der homogenen Gleichung, liefert der einfache Ansatz null; die Antwort wächst dann mit $t$ (z. B. ungedämpfter Oszillator, der genau bei $\omega_0$ getrieben wird: Amplitude $\propto t$).<br><br>
<b>Zusammenhang:</b> Beim getriebenen Oszillator (9.4) ist die partikuläre Lösung die stationäre Schwingung, die homogene der Einschwingvorgang.`,
    derivation: R`Einsetzen des Ansatzes $y_p = (A_0+A_1x)e^{2x}$:
<ol class="fc-steps">
<li>$y_p' = (2A_0+A_1+2A_1x)e^{2x}$<em>Produktregel.</em></li>
<li>$y_p'' = (4A_0+4A_1+4A_1x)e^{2x}$<em>Nochmals ableiten.</em></li>
<li>$y_p''-y_p = (3A_0+4A_1+3A_1x)e^{2x}$<em>Differenz bilden (12.82).</em></li>
<li>$3A_1 = 1$, $3A_0+4A_1 = 0$<em>Koeffizienten von $x$ und $x^0$ mit der rechten Seite vergleichen (12.83, 12.84).</em></li>
<li>$A_1 = \tfrac13$, $A_0 = -\tfrac49$<em>(12.85).</em></li>
</ol>`,
    example: R`<b>Resonanz:</b> $\ddot u+u = \cos t$. Da $p(i) = 0$, Ansatz $u_p = t(B\cos t+C\sin t)$; ergibt $u_p = \tfrac t2\sin t$. Probe: $\ddot u_p = \cos t-\tfrac t2\sin t$, also $\ddot u_p+u_p = \cos t$ ✓. Die Amplitude wächst linear.<br>
<b>Konstante Kraft:</b> $\ddot x+\omega_0^2x = g$: $x_p = g/\omega_0^2$ (verschobene Ruhelage einer hängenden Feder).`,
    counterexample: R`<b>Ansatz zu knapp:</b> Mit $y_p = A_1xe^{2x}$ (ohne $A_0$) ergäbe der Vergleich $4A_1 = 0$ und $3A_1 = 1$ gleichzeitig – ein Widerspruch. Die Methode scheitert nicht, der Ansatz war nur unvollständig.`,
    pitfalls: R`<ul><li>Niedrigere Potenzen im Polynomansatz weglassen.</li>
<li>Den Resonanzfall nicht erkennen ($p(\alpha) = 0$).</li>
<li>Die Konstanten $C_1$, $C_2$ vor dem Addieren von $y_p$ aus den Anfangsbedingungen bestimmen.</li></ul>`
  },
  {
    id: "ph12_mathematisches_pendel",
    title: "Mathematisches Pendel: Aufstellen und Lösen der DGL, T = 2π√(ℓ/g)",
    category: "12.4 Die lineare Differentialgleichung 2. Ordnung",
    type: "herleitung",
    front: R`Stelle für das <b>mathematische Pendel</b> (Masse $m$ an masseloser Stange der Länge $\ell$) die Bewegungsgleichung auf, linearisiere sie und löse sie für die Anfangsbedingungen $\varphi(0) = \varphi_0$, $\dot\varphi(0) = 0$. Wovon hängt die Periode ab?`,
    back: R`Nur die Tangentialkomponente der Schwerkraft beschleunigt längs der Kreisbahn; Bogenlänge $s = \ell\varphi$:
$$m\frac{d^2s}{dt^2} = -mg\sin\varphi\;\Rightarrow\;m\ell\ddot\varphi = -mg\sin\varphi\;\Rightarrow\;\ddot\varphi+\frac g\ell\sin\varphi = 0\qquad(12.87\text{–}12.90)$$
Kleine Auslenkung, $\sin\varphi\approx\varphi$:
$$\ddot\varphi+\frac g\ell\varphi = 0\qquad(12.91)$$
Die Masse kürzt sich heraus. Charakteristische Gleichung $\lambda^2+g/\ell = 0$, $\Delta = -4g/\ell\lt0$: Fall III mit $\alpha = 0$, $\omega = \sqrt{g/\ell}$ (12.92–12.94):
$$\varphi(t) = C_1\cos\omega t+C_2\sin\omega t\qquad(12.95)$$
Anfangsbedingungen: $C_1 = \varphi_0$, $C_2 = 0$ (12.96–12.98):
$$\varphi(t) = \varphi_0\cos\omega t,\qquad T = \frac{2\pi}\omega = 2\pi\sqrt{\frac\ell g}\qquad(12.99,\,12.100)$$
Unabhängig von der Masse und (für kleine $\varphi_0$) von der Amplitude.`,
    meta: "Skript: Abschnitt 12.4.3, Gl. (12.87)–(12.100), Abb. 12.2, Anhang S. 37–39",
    explanation: R`<b>Intuition:</b> Die Masse taucht doppelt auf – als Schwere (zieht) und als Trägheit (bremst die Reaktion) – und kürzt sich deshalb (Äquivalenzprinzip, Kap. 3). Was bleibt, ist das Verhältnis von Fallbeschleunigung und Länge.<br><br>
<b>Abhängigkeiten:</b> $T\propto\sqrt\ell$ (vierfache Länge, doppelte Periode) und $T\propto1/\sqrt g$ (auf dem Mond mit $g/6$ ist das Pendel $2{,}45$-mal langsamer). Unabhängig von $m$ und – in der Kleinwinkelnäherung – von $\varphi_0$ (Isochronie, Grundlage der Pendeluhr).<br><br>
<b>Grenzen:</b> Für grosse Amplituden wächst die Periode: $T\approx2\pi\sqrt{\ell/g}\left(1+\varphi_0^2/16\right)$ (Ergänzung).<br><br>
<b>Zusammenhang:</b> Lehrbeispiel für das Aufstellen einer DGL aus einem physikalischen Problem (12.1) und für Linearisierung (Taylor, 11.1.2). Das physikalische Pendel (starrer Körper) hat $T = 2\pi\sqrt{J_A/(mgs)}$ mit dem Trägheitsmoment um die Achse (Steiner, 8.5.8).`,
    derivation: R`Konstanten aus den Anfangsbedingungen:
<ol class="fc-steps">
<li>$\varphi(0) = C_1\cos0+C_2\sin0 = C_1 = \varphi_0$<em>Anfangsauslenkung (12.96).</em></li>
<li>$\dot\varphi(t) = -C_1\omega\sin\omega t+C_2\omega\cos\omega t$<em>Ableitung der allgemeinen Lösung.</em></li>
<li>$\dot\varphi(0) = C_2\omega = 0\Rightarrow C_2 = 0$<em>Losgelassen aus der Ruhe (12.97, 12.98).</em></li>
<li>$\varphi(t) = \varphi_0\cos\omega t$<em>Kosinusschwingung (12.99).</em></li>
<li>$\omega T = 2\pi\Rightarrow T = 2\pi\sqrt{\ell/g}$<em>(12.100).</em></li>
</ol>`,
    example: R`$\ell = 1\,\text{m}$: $T = 2{,}006\,\text{s}$ (fast genau eine „Sekunde pro Halbschwingung“ – das historische Sekundenpendel).<br>
$\ell = 0{,}25\,\text{m}$: $T = 1{,}003\,\text{s}$.<br>
$\varphi_0 = 30^\circ$: exakte Periode $1{,}7\,\%$ länger als die harmonische Näherung.`,
    counterexample: R`<b>Grosse Amplitude:</b> Bei $\varphi_0 = 90^\circ$ ist die Periode schon $18\,\%$ länger, bei $170^\circ$ etwa $2{,}4$-mal so lang wie $2\pi\sqrt{\ell/g}$, und bei $180^\circ$ (instabile Gleichgewichtslage oben) würde das Pendel unendlich lange verweilen. Die Lösung $\varphi_0\cos\omega t$ gilt nur für kleine Ausschläge.`,
    pitfalls: R`<ul><li>$T = 2\pi\sqrt{g/\ell}$ (Bruch verkehrt).</li>
<li>Die Masse in die Periode einbauen.</li>
<li>Die Kleinwinkelnäherung bei grossen Amplituden verwenden.</li>
<li>$\varphi$ in Grad statt Bogenmass in $\sin\varphi\approx\varphi$ einsetzen.</li></ul>`
  }
];
})();
