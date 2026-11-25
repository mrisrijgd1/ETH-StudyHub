(function () {
const R = String.raw;
window.FLASHCARDS_EN_KAPITEL_14 = {
  "ph14_kinetische_gastheorie": {
    title: R`Kinetic theory of gases: pressure from molecular impacts and ½m⟨v²⟩ = 3/2 kT`,
    category: R`14.1 Statistical mechanics`,
    type: "herleitung",
    front: R`Using a simple model (molecules in a cube, velocity components $\pm v_0$), derive the pressure of an ideal gas from the impacts of the molecules on the wall. What follows from comparing it with $pV = \nu RT$ for the mean kinetic energy of a molecule?`,
    back: R`Model: amount of substance $\nu$ in a cube of edge $\ell$; half of the molecules have $v_x = +v_0$ or $-v_0$ (likewise $y$, $z$), so $v = v_0\sqrt3$ (14.1).<br>
Molecules hitting the area $A$ in $dt$, and particle flux density:
$$dn_x^+ = \frac12(\nu N_A)\frac{A\,dt\,v_0}{\ell^3},\qquad j_x = \frac{dn_x^+}{A\,dt} = \frac12\frac{dn}{dV}v_0\qquad(14.2\text{–}14.5)$$
An elastic reflection transfers $\Delta k_x = 2mv_0$ (14.6). Force and pressure:
$$F_x = \frac{\nu N_AA\,v_0}{2V}\cdot2mv_0 = \nu N_A\frac{mv_0^2A}V,\qquad p = \frac{F_x}A = \nu N_A\frac{m\,v^2}{3V} = \frac13\rho v^2\qquad(14.7,\,14.8)$$
With the mean $\langle v^2\rangle$:
$$pV = \frac23\nu N_A\frac{m\langle v^2\rangle}2 = \nu RT\;\Rightarrow\;\frac12m\langle v^2\rangle = \frac32kT\qquad(14.9)$$
Temperature is a measure of the mean kinetic translational energy of the molecules; for monatomic gases $U = \tfrac32\nu RT$.`,
    meta: R`Script: sections 14.1–14.1.1, Eqs. (14.1)–(14.9), Fig. 14.1, footnotes 1–5, appendix pp. 61–63`,
    explanation: R`<b>Intuition:</b> Gas pressure is the averaged "hail" of molecular impacts on the wall. Molecules twice as fast hit twice as often <i>and</i> transfer twice as much momentum per impact: the pressure grows with $v^2$.<br><br>
<b>Dependencies:</b> $p = \tfrac13\rho\langle v^2\rangle$: proportional to the density and to the mean square velocity. At the same temperature all gases have the same mean kinetic energy $\tfrac32kT$; light molecules are therefore faster ($v\propto1/\sqrt m$).<br><br>
<b>Why elastic?</b> In thermal equilibrium the impacts must on average be elastic; otherwise the gas would warm up or cool down (footnote 4).<br><br>
<b>Connection:</b> Bridge between the micro and macro world: the ideal gas equation (10.6.1) and the equipartition law (10.6.3) receive a mechanical justification. The model with fixed $\pm v_0$ is strongly simplified; the Maxwell distribution (14.1.2) gives the same result, because only $\langle v^2\rangle$ enters.`,
    derivation: R`<ol class="fc-steps">
<li>$\Delta n = \dfrac12\cdot\dfrac{\nu N_A}V\cdot A\,v_0\,\Delta t$<em>Half the particle density (only those flying towards the wall) times the volume of the cylinder $A\cdot v_0\Delta t$ (14.2).</em></li>
<li>$\Delta K_x = \Delta n\cdot2mv_0$<em>Each molecule reverses $v_x$ (14.6).</em></li>
<li>$F_x = \dfrac{\Delta K_x}{\Delta t} = \dfrac{\nu N_A}VAmv_0^2$<em>Force = momentum transfer per time (14.7).</em></li>
<li>$v_0^2 = \tfrac13v^2\Rightarrow p = \dfrac{\nu N_Am}{3V}v^2$<em>From (14.1); pressure = force per area (14.8).</em></li>
<li>$pV = \tfrac23N\cdot\tfrac12m\langle v^2\rangle = NkT\Rightarrow\tfrac12m\langle v^2\rangle = \tfrac32kT$<em>Comparison with the equation of state (14.9).</em></li>
</ol>`,
    example: R`<b>Air</b> at $0\,^\circ\text{C}$: $\rho = 1{,}29\,\text{kg/m}^3$, $\sqrt{\langle v^2\rangle} = 487\,\text{m/s}$: $p = \tfrac13\cdot1{,}29\cdot487^2\,\text{Pa} = 1{,}02\cdot10^5\,\text{Pa}$ ✓.<br>
Mean kinetic energy at $300\,\text{K}$: $\tfrac32kT = 6{,}2\cdot10^{-21}\,\text{J}\approx0{,}039\,\text{eV}$, for every gas.`,
    counterexample: R`<b>Realistic wall impact rate:</b> The model with fixed $\pm v_0$ gives $j = \frac{n}{2}v_0 = \frac{n\,v}{2\sqrt3}\approx0{,}29\,nv$. With the Maxwell distribution the rate is exactly $j = \tfrac14n\langle v\rangle$. For the pressure the simple model is nevertheless correct, because there only $\langle v_x^2\rangle = \tfrac13\langle v^2\rangle$ enters – not every quantity is model-independent.`,
    pitfalls: R`<ul><li>Forgetting the factor $\tfrac12$ (only the molecules flying towards the wall).</li>
<li>Using momentum transfer $mv_0$ instead of $2mv_0$.</li>
<li>Using $\tfrac32kT$ as the total energy for polyatomic molecules (instead of only the translational energy).</li></ul>`
  },
  "ph14_maxwell_ansatz": {
    title: R`Maxwell distribution: factorisation ansatz and width σ² = kT/m`,
    category: R`14.1 Statistical mechanics`,
    type: "herleitung",
    front: R`Justify the ansatz $\frac{d^3\mathcal W}{d\xi\,d\eta\,d\zeta} = f(\xi)f(\eta)f(\zeta) = F(\xi^2+\eta^2+\zeta^2)$ for the velocity distribution. Why does it lead to a Gaussian distribution, and how does its width $\sigma^2 = kT/m$ follow from the equipartition law?`,
    back: R`Components $\vec v = (\xi,\eta,\zeta)$ (14.10). Sought: probability density $\frac{d^3\mathcal W}{d\xi\,d\eta\,d\zeta}$ (unit $\text{s}^3/\text{m}^3$; only a volume in velocity space gives a probability; integral over everything = 1) (14.11, 14.12).<br>
<b>Ansatz</b> (14.13): factorisation because the components are independent, same $f$ because of isotropy, and dependence only on the magnitude $v^2$ (no preferred direction). Satisfied by the Gaussian distribution:
$$f(\xi) = \frac1{\sigma\sqrt{2\pi}}e^{-\xi^2/(2\sigma^2)},\quad\int f\,d\xi = 1,\qquad\frac{d^3\mathcal W}{d\xi\,d\eta\,d\zeta} = \frac1{\sigma^3(2\pi)^{3/2}}e^{-v^2/(2\sigma^2)}\qquad(14.14\text{–}14.17)$$
<b>Width</b> from the energy per degree of freedom:
$$\langle E_\text{kin}\rangle_{f = 1} = \frac m2\int\xi^2f(\xi)\,d\xi = \frac m2\sigma^2 = \frac12kT\;\Rightarrow\;\sigma^2 = \frac{kT}m\qquad(14.19\text{–}14.23)$$
with integration by parts $\int\xi^2f\,d\xi = -\sigma^2\int\xi\,df = \sigma^2$ (14.22).`,
    meta: R`Script: section 14.1.2.1, Eqs. (14.10)–(14.23), appendix pp. 63–65`,
    explanation: R`<b>Intuition:</b> Every velocity component is the result of countless random impacts – a textbook example of a bell curve. The width of the bell grows with temperature and falls with mass: hot, light molecules are the "restless" ones.<br><br>
<b>Why exactly Gaussian?</b> $f(\xi)f(\eta)f(\zeta) = F(\xi^2+\eta^2+\zeta^2)$ requires that $\ln f$ is a function of $\xi^2$ that behaves additively under sums: $\ln f = a-b\xi^2$. This is (with normalisation) exactly the Gaussian function – the only continuous solution.<br><br>
<b>Dependencies:</b> $\sigma = \sqrt{kT/m}$: four times the temperature gives double the width; hydrogen ($m$ small) has a much broader distribution than chlorine at the same temperature.<br><br>
<b>Connection:</b> $e^{-mv^2/(2kT)} = e^{-E_\text{kin}/(kT)}$ is a Boltzmann factor. In general the probability of a state of energy $E$ is proportional to $e^{-E/(kT)}$ – the basis of statistical physics (barometric height formula, population of energy levels).`,
    derivation: R`Integration by parts for $\langle\xi^2\rangle$:
<ol class="fc-steps">
<li>$df = -\dfrac1{\sigma^2}\xi f(\xi)\,d\xi$<em>Derivative of the Gaussian function.</em></li>
<li>$\displaystyle\int\xi^2f\,d\xi = \int\xi\cdot(\xi f\,d\xi) = -\sigma^2\int\xi\,df$<em>Replace one factor $\xi f\,d\xi$ by $-\sigma^2df$ (14.22).</em></li>
<li>$= -\sigma^2\left[\xi f\right]_{-\infty}^{\infty}+\sigma^2\displaystyle\int f\,d\xi$<em>Integration by parts.</em></li>
<li>$= 0+\sigma^2\cdot1$<em>Boundary term zero (the Gaussian falls faster than $\xi$ grows), normalisation (14.15).</em></li>
<li>$\dfrac m2\sigma^2 = \dfrac12kT\Rightarrow\sigma^2 = \dfrac{kT}m$<em>Equipartition for one degree of freedom (14.20–14.23).</em></li>
</ol>`,
    example: R`N₂ at $300\,\text{K}$ ($m = 4{,}65\cdot10^{-26}\,\text{kg}$): $\sigma = \sqrt{kT/m} = 298\,\text{m/s}$ for each component. About $68\,\%$ of the molecules have $|v_x|\lt298\,\text{m/s}$, $95\,\%$ have $|v_x|\lt596\,\text{m/s}$.`,
    counterexample: R`<b>"All molecules have the same speed"</b> (model from 14.1.1) is incompatible with the ansatz: fixed components $\pm v_0$ are not isotropic (preferred directions along the cube axes) and not a continuous distribution. And a uniform distribution of the components on $[-a,a]$ would not depend only on $v^2$. Only the Gaussian distribution satisfies independence <i>and</i> isotropy.`,
    pitfalls: R`<ul><li>Confusing the density $\frac{d^3\mathcal W}{d\xi\,d\eta\,d\zeta}$ with a probability (it has a unit).</li>
<li>Setting $\sigma^2 = 3kT/m$ (that is $\langle v^2\rangle$, not the variance of one component).</li>
<li>Forgetting the normalisation of the Gaussian function.</li></ul>`
  },
  "ph14_maxwell_betrag": {
    title: R`Maxwell distribution of the speed dW/dv ∝ v² e^{−mv²/2kT}`,
    category: R`14.1 Statistical mechanics`,
    type: "herleitung",
    front: R`Derive the distribution of the <b>speed magnitude</b> $\frac{d\mathcal W}{dv}$ from the three-dimensional distribution. Where does the factor $4\pi v^2$ come from, and how does the distribution change with temperature and with molecular mass?`,
    back: R`Probability that $|\vec v|$ lies between $v$ and $v+dv$: integral over the spherical shell (K) of radius $v$ and thickness $dv$ in velocity space:
$$d\mathcal W(v) = \left(\frac m{2\pi kT}\right)^{3/2}\iiint_Ke^{-m(\xi^2+\eta^2+\zeta^2)/(2kT)}\,d\xi\,d\eta\,d\zeta\qquad(14.24)$$
Spherical coordinates: $d\xi\,d\eta\,d\zeta = v^2\,dv\,d\varphi\,d\cos\vartheta$ (14.25):
$$d\mathcal W(v) = \left(\frac m{2\pi kT}\right)^{3/2}e^{-\frac{mv^2}{2kT}}v^2dv\int_{-1}^1d\cos\vartheta\int_0^{2\pi}d\varphi = \left(\frac m{2\pi kT}\right)^{3/2}e^{-\frac{mv^2}{2kT}}v^2dv\cdot2\cdot2\pi\qquad(14.26,\,14.27)$$
$$\frac{d\mathcal W}{dv} = 4\pi v^2\left(\frac m{2\pi kT}\right)^{3/2}e^{-\frac{mv^2}{2kT}}\qquad(14.28)$$
Higher temperature: broader, maximum shifted to the right and lower (Fig. 14.2, N₂ at 100, 300, 1000 K). Lighter gases (at the same $T$): broader and faster (Fig. 14.3: Cl₂, N₂, Ne, He, H₂ at 300 K).`,
    meta: R`Script: section 14.1.2.1, Eqs. (14.24)–(14.28), Figs. 14.2–14.3, appendix pp. 65–67`,
    explanation: R`<b>Intuition:</b> The most probable <i>velocity component</i> is zero (Gaussian about 0), but the most probable <i>speed</i> is not zero: there is only one point with $\vec v = \vec 0$, but a whole spherical shell with area $4\pi v^2$ for every speed $v$. The factor $v^2$ (more possibilities) competes with the Boltzmann factor (less probable at high energy); in between lies a maximum.<br><br>
<b>Dependencies:</b> All characteristic speeds scale with $\sqrt{T/m}$. The distribution is asymmetric with a long tail towards high speeds.<br><br>
<b>Significance of the tail:</b> A few very fast molecules determine evaporation, chemical reaction rates (Arrhenius) and the escape of light gases from planetary atmospheres (H₂ and He escape from the Earth, heavier gases do not).<br><br>
<b>Connection:</b> Jacobian factor $v^2$ of spherical coordinates (11.2.8); the same idea as for densities of states in solid-state physics.`,
    derivation: R`<ol class="fc-steps">
<li>$\dfrac{d^3\mathcal W}{d\xi\,d\eta\,d\zeta} = \left(\dfrac m{2\pi kT}\right)^{3/2}e^{-mv^2/(2kT)}$<em>(14.17) with $\sigma^2 = kT/m$: $\frac1{\sigma^3(2\pi)^{3/2}} = \left(\frac m{2\pi kT}\right)^{3/2}$.</em></li>
<li>$d\xi\,d\eta\,d\zeta = v^2\,dv\,d\varphi\,d\cos\vartheta$<em>Volume element in spherical coordinates (14.25).</em></li>
<li>Integrand does not depend on $\vartheta$, $\varphi$<em>Isotropy: the angular integrals are trivial.</em></li>
<li>$\displaystyle\int_{-1}^1d\cos\vartheta\int_0^{2\pi}d\varphi = 4\pi$<em>Full solid angle (14.27).</em></li>
<li>$\dfrac{d\mathcal W}{dv} = 4\pi v^2\left(\dfrac m{2\pi kT}\right)^{3/2}e^{-mv^2/(2kT)}$<em>(14.28); normalised: $\int_0^\infty\frac{d\mathcal W}{dv}dv = 1$.</em></li>
</ol>`,
    example: R`N₂ at $300\,\text{K}$: most probable speed $422\,\text{m/s}$; at $1000\,\text{K}$: $771\,\text{m/s}$ ($\times\sqrt{10/3}$).<br>
H₂ at $300\,\text{K}$: $\sqrt{\langle v^2\rangle} = 1930\,\text{m/s}$ – only a sixth of the escape velocity ($11{,}2\,\text{km/s}$), but the tail is enough over geological times for hydrogen to escape from the upper atmosphere.`,
    counterexample: R`<b>Forgetting the factor $v^2$:</b> The speed distribution would then be a half Gaussian curve with maximum at $v = 0$ – as if most molecules were at rest. This contradicts $\tfrac12m\langle v^2\rangle = \tfrac32kT$ and the measurements (Fig. 14.4). The distribution of one component and the distribution of the magnitude are different functions.`,
    pitfalls: R`<ul><li>Confusing the component distribution and the speed distribution.</li>
<li>Forgetting the Jacobian factor $v^2$ or the solid angle $4\pi$.</li>
<li>Mixing the mass of one molecule ($m$) with the molar mass ($M$) ($k$ belongs with $m$, $R$ with $M$).</li></ul>`
  },
  "ph14_erwartungswerte": {
    title: R`Characteristic speeds: v_h, ⟨v⟩, √⟨v²⟩ and the speed of sound`,
    category: R`14.1 Statistical mechanics`,
    type: "gesetz",
    front: R`Give the <b>most probable</b> speed $v_h$, the <b>mean</b> $\langle v\rangle$ and the <b>root mean square speed</b> of the Maxwell distribution. How do they relate to each other and to the speed of sound? Why is $\langle\vec v\rangle = \vec 0$?`,
    back: R`$$v_h = \sqrt{\frac{2kT}m}\qquad(14.29)$$
(from $\frac{d}{dv}\frac{d\mathcal W}{dv} = 0$).
$$\langle\vec v\rangle = \vec 0,\quad\langle v\rangle = \int_0^\infty v\,d\mathcal W = \sqrt{\frac{8kT}{\pi m}},\quad\langle v^2\rangle = \int_0^\infty v^2d\mathcal W = \frac{3kT}m,\quad\langle\xi^2\rangle = \langle\eta^2\rangle = \langle\zeta^2\rangle = \tfrac13\langle v^2\rangle = \frac{kT}m\qquad(14.30)$$
Speed of sound (without proof):
$$v_S = \sqrt{\kappa\frac{RT}M} = \sqrt{\kappa\frac{kT}m}\qquad(14.31)$$
Air ($M\approx28{,}8\,\text{kg/kmol}$, $\kappa = 1{,}4$, $T = 273\,\text{K}$):
$$v_S = 332,\quad v_h = 397,\quad\langle v\rangle = 448,\quad\sqrt{\langle v^2\rangle} = 487\ \text{m/s}\qquad(14.32)$$
Order: $v_S\lt v_h\lt\langle v\rangle\lt\sqrt{\langle v^2\rangle}$, ratios $\sqrt\kappa:\sqrt2:\sqrt{8/\pi}:\sqrt3$.`,
    meta: R`Script: section 14.1.2.2, Eqs. (14.29)–(14.32), footnote 6, appendix pp. 66–68`,
    explanation: R`<b>Intuition:</b> Because of the long tail towards high speeds, the means lie to the right of the maximum: a few very fast molecules pull the mean up, and when squaring they are weighted even more strongly.<br><br>
<b>Vector vs. magnitude:</b> The mean velocity <i>vector</i> is zero (the gas as a whole is at rest), the mean magnitude is not.<br><br>
<b>Dependencies:</b> All $\propto\sqrt{T/m}$. Quadrupling the temperature doubles every characteristic speed; helium at the same temperature is $\sqrt{28/4} = 2{,}6$ times faster than nitrogen.<br><br>
<b>Sound:</b> Sound is transmitted by molecular motion and is therefore of the same order of magnitude, but somewhat slower than the molecules themselves ($\sqrt\kappa\lt\sqrt2$).<br><br>
<b>Connection (footnote 6):</b> The mean alone says little; only the distribution contains the full information – like income in a municipality.`,
    derivation: R`Most probable speed:
<ol class="fc-steps">
<li>$\dfrac{d\mathcal W}{dv}\propto v^2e^{-mv^2/(2kT)}$<em>Prefactors do not matter for the position of the maximum.</em></li>
<li>$\dfrac{d}{dv}\left(v^2e^{-av^2}\right) = (2v-2av^3)e^{-av^2}$, $a = \dfrac m{2kT}$<em>Product rule.</em></li>
<li>$2v(1-av^2) = 0\Rightarrow v_h^2 = \dfrac1a = \dfrac{2kT}m$<em>Non-trivial zero (14.29).</em></li>
<li>$\langle v^2\rangle = 3\langle\xi^2\rangle = 3\sigma^2 = \dfrac{3kT}m$<em>Three independent components with variance $\sigma^2$ (14.30).</em></li>
<li>$\dfrac{\sqrt{\langle v^2\rangle}}{v_h} = \sqrt{\tfrac32} = 1{,}22$, $\dfrac{\langle v\rangle}{v_h} = \dfrac2{\sqrt\pi} = 1{,}13$<em>Fixed ratios, independent of gas and temperature.</em></li>
</ol>`,
    example: R`N₂ at $300\,\text{K}$: $v_h = 422$, $\langle v\rangle = 476$, $\sqrt{\langle v^2\rangle} = 517\,\text{m/s}$.<br>
Particle density at $1\,\text{bar}$, $300\,\text{K}$: $n = p/(kT) = 2{,}4\cdot10^{25}\,\text{m}^{-3}$; wall impact rate $\tfrac14n\langle v\rangle = 2{,}9\cdot10^{27}\,\text{m}^{-2}\text{s}^{-1}$ – a surface (about $10^{19}$ sites per m²) is hit this way by a whole monolayer of molecules every few nanoseconds – which is why clean surfaces require ultra-high vacuum.`,
    counterexample: R`<b>$\langle v\rangle^2\neq\langle v^2\rangle$:</b> $\langle v\rangle^2 = \frac{8}{\pi}\frac{kT}m = 2{,}55\frac{kT}m$, but $\langle v^2\rangle = 3\frac{kT}m$. Whoever computes the kinetic energy as $\tfrac12m\langle v\rangle^2$ underestimates it by 15 %. The mean of a square is not the square of the mean.`,
    pitfalls: R`<ul><li>Confusing $v_h$, $\langle v\rangle$ and $\sqrt{\langle v^2\rangle}$.</li>
<li>Confusing $\langle\vec v\rangle = \vec 0$ with $\langle v\rangle = 0$.</li>
<li>Combining $M$ in kg/kmol with $R = 8{,}314\,\text{J/(mol K)}$ (factor 1000).</li></ul>`
  },
  "ph14_messung_maxwell": {
    title: R`Measuring the Maxwell distribution with an atomic oven and slotted wheels`,
    category: R`14.1 Statistical mechanics`,
    type: "experiment",
    front: R`How does one measure the Maxwell velocity distribution with an <b>atomic oven</b> and two rotating <b>slotted wheels</b>? Which velocities are transmitted, how does one improve the resolution, and where does the ambiguity come from?`,
    back: R`Set-up in vacuum (Fig. 14.4): gas in the oven at constant temperature; single molecules escape through a small opening. Two slotted wheels $R_1$, $R_2$ on a common axis at distance $\ell$, behind them a particle detector $D$.<br>
$R_1$ "chops" the beam and fixes the start time. Molecules with speed $v$ pass $R_2$ only if their time of flight just rotates a gap further:
$$\Delta t = \frac\ell v = N\frac\alpha\omega,\qquad N = 1,2,\dots\qquad(14.33)$$
($\alpha$: angular distance between adjacent gaps, $\omega$: angular velocity.)
<ul><li>Varying $\omega$ selects different speeds; one measures the count rate for each $v$.</li>
<li>A higher $\omega$ reduces the width of the transmitted speed range.</li>
<li>Further slotted wheels reduce or eliminate the ambiguity $N = 1,2,3,\dots$</li></ul>`,
    meta: R`Script: section 14.1.2.3, Eq. (14.33), Fig. 14.4, appendix pp. 68–69`,
    explanation: R`<b>Intuition:</b> Like a "green wave" in traffic: only someone driving at exactly the right speed reaches both traffic lights on green. The rotation speed of the wheels sets the speed of the green wave.<br><br>
<b>Ambiguity:</b> Molecules that take twice as long ($N = 2$) also reach a gap (the one after next). A third wheel with a different spacing blocks these "side waves".<br><br>
<b>Dependencies:</b> $v = \frac{\ell\omega}{N\alpha}$: transmitted speed $\propto\omega$ and $\propto\ell$. The resolution $\Delta v/v$ depends on the gap width relative to $\alpha$.<br><br>
<b>Caution in the evaluation (supplement):</b> From a small oven opening fast molecules escape more often (they hit the opening more frequently): the beam distribution is $\propto v^3e^{-mv^2/(2kT)}$, not $\propto v^2e^{\dots}$. This must be taken into account when comparing with (14.28).<br><br>
<b>Connection:</b> The same principle is used in neutron choppers and time-of-flight spectrometers; historically Stern (1920) and Miller–Kusch (1955) confirmed the Maxwell distribution this way.`,
    derivation: R`Transmitted speeds for a concrete device ($\ell = 0{,}1\,\text{m}$, 100 gaps, $50\,\text{rev/s}$):
<ol class="fc-steps">
<li>$\alpha = \dfrac{2\pi}{100}$, $\omega = 2\pi\cdot50\,\text{s}^{-1}$<em>Gap spacing and angular velocity.</em></li>
<li>$\dfrac\alpha\omega = \dfrac1{5000}\,\text{s} = 0{,}2\,\text{ms}$<em>Time until the next gap is at the same place.</em></li>
<li>$v_N = \dfrac{\ell}{N\alpha/\omega} = \dfrac{500\,\text{m/s}}N$<em>Condition (14.33) solved for $v$.</em></li>
<li>$N = 1$: $500\,\text{m/s}$, $N = 2$: $250\,\text{m/s}$, $N = 3$: $167\,\text{m/s}$<em>The ambiguity that a third wheel must remove.</em></li>
<li>Double the rotation speed: $v_1 = 1000\,\text{m/s}$<em>This is how the distribution is scanned.</em></li>
</ol>`,
    example: R`For N₂ at $300\,\text{K}$ the maximum of the distribution lies at $422\,\text{m/s}$; with the device above ($v_1 = 500\,\text{m/s}$ at $50\,\text{rev/s}$) this would correspond to about $42\,\text{rev/s}$.<br>
For potassium atoms from an oven at $500\,\text{K}$ ($m = 39\,\text{u}$): $v_h = \sqrt{2kT/m} = 460\,\text{m/s}$.`,
    counterexample: R`<b>A single slotted wheel</b> is not enough: it does chop the beam into packets, but without a second aperture (or a time-of-flight measurement) one does not know how fast the molecules were. The speed selection arises only from the combination of start time ($R_1$) and arrival window ($R_2$).`,
    pitfalls: R`<ul><li>Overlooking the ambiguity ($N\gt1$).</li>
<li>Equating the measured beam distribution directly with the volume distribution (14.28).</li>
<li>Confusing rotation frequency (rev/s) and angular velocity (rad/s).</li></ul>`
  }
};
})();
