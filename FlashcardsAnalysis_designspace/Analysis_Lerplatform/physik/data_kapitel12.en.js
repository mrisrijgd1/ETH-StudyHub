(function () {
const R = String.raw;
window.FLASHCARDS_EN_KAPITEL_12 = {
  "ph12_klassifikation": {
    title: R`Classifying differential equations: order, linear, homogeneous, coefficients`,
    category: R`12.2 Some definitions`,
    type: "definition",
    front: R`By which four criteria is a differential equation classified? Use them to classify $u^{(n)}+a_{n-1}(t)u^{(n-1)}+\dots+a_0(t)u = s(t)$, and classify the equations of the damped oscillator and of the pendulum without the small-angle approximation.`,
    back: R`Notation: $u^{(n)} = \frac{d^nu}{dt^n}$ (12.1).
<ol><li><b>Order:</b> highest derivative that occurs.</li>
<li><b>Linear:</b> $u$ and its derivatives occur only as a linear combination (no powers, not inside other functions); otherwise nonlinear.</li>
<li><b>Homogeneous/inhomogeneous:</b> A term $s(t)$ without $u$ is called the forcing function; with $s\ne0$ inhomogeneous, with $s\equiv0$ homogeneous.</li>
<li><b>Coefficients:</b> $a_i(t)$ variable or constant.</li></ol>
$$u^{(n)}+a_{n-1}(t)\,u^{(n-1)}+\dots+a_1(t)\,\dot u+a_0(t)\,u = s(t)\qquad(12.2)$$
is an <b>inhomogeneous linear ODE of order $n$ with variable coefficients</b>.<br><br>
$\ddot x+2\rho\dot x+\omega_0^2x = \frac{F_0}m\cos\Omega t$: 2nd order, linear, inhomogeneous, constant coefficients.<br>
$\ddot\varphi+\frac g\ell\sin\varphi = 0$: 2nd order, <b>nonlinear</b> (because of $\sin\varphi$), homogeneous.`,
    meta: R`Script: sections 12.1–12.2, Eqs. (12.1)–(12.2), appendix pp. 23–24`,
    explanation: R`<b>Intuition:</b> Before solving, one must know which tool fits – as a doctor makes the diagnosis before the therapy. The four questions decide the method.<br><br>
<b>Why linearity matters:</b> For linear homogeneous equations the <b>superposition principle</b> holds: sums and multiples of solutions are again solutions. From this follows the structure "general solution = particular + homogeneous". For nonlinear equations there is no such recipe.<br><br>
<b>Dependencies:</b> An ODE of order $n$ needs $n$ initial conditions; the general solution has $n$ free constants (Newton: 2nd order → position and velocity).<br><br>
<b>Connection:</b> The main difficulty in physics is often not solving, but setting up the ODE from the physical problem (12.1). Nonlinear equations (large pendulum swings, air resistance $\propto v^2$) are often linearised (Taylor, 11.1.2).`,
    derivation: R`Why $\sin\varphi$ destroys linearity:
<ol class="fc-steps">
<li>Let $\varphi_1$, $\varphi_2$ be solutions of $\ddot\varphi = -\frac g\ell\sin\varphi$<em>Assumption.</em></li>
<li>$\dfrac{d^2}{dt^2}(\varphi_1+\varphi_2) = -\dfrac g\ell(\sin\varphi_1+\sin\varphi_2)$<em>Equations added.</em></li>
<li>$\sin\varphi_1+\sin\varphi_2\neq\sin(\varphi_1+\varphi_2)$<em>The sine is not additive.</em></li>
<li>$\varphi_1+\varphi_2$ is in general not a solution<em>Superposition violated: nonlinear.</em></li>
<li>$\sin\varphi\approx\varphi$: $\ddot\varphi+\frac g\ell\varphi = 0$ is linear<em>Linearisation for small angles (12.91).</em></li>
</ol>`,
    example: R`$\dot u = tu$: 1st order, linear, homogeneous, variable coefficient.<br>
$m\dot v = -kv^2+mg$: 1st order, nonlinear ($v^2$), inhomogeneous (fall with air resistance).<br>
$L\ddot Q+R\dot Q+Q/C = U_0$: 2nd order, linear, inhomogeneous, constant coefficients (resonant circuit on DC voltage).`,
    counterexample: R`<b>"Linear" does not mean "linear in $t$":</b> $\ddot u+t^2u = e^t$ is a linear ODE, although $t^2$ and $e^t$ occur – only the way $u$ and its derivatives appear matters. By contrast $\dot u = u^2$ is nonlinear, although $t$ does not occur at all.`,
    pitfalls: R`<ul><li>Judging linearity by the dependence on $t$ instead of on $u$.</li>
<li>Treating a term like $a_0(t)u$ as a forcing function (it contains $u$).</li>
<li>Giving only one initial condition for a 2nd-order ODE.</li></ul>`
  },
  "ph12_dgl1_homogen": {
    title: R`Linear ODE of first order, homogeneous: separation of variables`,
    category: R`12.3 The linear differential equation of first order`,
    type: "herleitung",
    front: R`Solve the homogeneous linear first-order ODE $\dot u = a(t)\,u$ by <b>separation of variables</b>. What results for constant $a$, and how is the integration constant determined?`,
    back: R`Types (12.3–12.6): $\dot u = a(t)u+s(t)$ or $\dot u = au+s(t)$ (inhomogeneous), $\dot u = a(t)u$ or $\dot u = au$ (associated homogeneous equations).<br><br>
<b>Separation of variables:</b>
$$\frac{du}{dt} = a(t)\,u\;\Rightarrow\;\frac{du}u = a(t)\,dt\;\Rightarrow\;\int\frac{du}u = \int a(t)\,dt\qquad(12.7\text{–}12.9)$$
$$\ln u = \int a(t)\,dt+c_1\;\Rightarrow\;u = e^{\int a(t)dt+c_1}\qquad(12.10,\,12.11)$$
With $c_2 = e^{c_1}$:
$$u(t) = c_2\,e^{\int a(t)\,dt}\qquad(12.12)$$
Constant $a$: $u = c_2e^{at}$. The constant follows from an initial condition, e.g. $u(0) = u_0$. What matters is the method, not memorising the formula.`,
    meta: R`Script: sections 12.3–12.3.1, Eqs. (12.3)–(12.12), appendix pp. 25–26`,
    explanation: R`<b>Intuition:</b> "The rate of change is proportional to the amount present" is the law of exponential growth or decay: compound interest, radioactive decay, discharge of a capacitor, decay of an amplitude.<br><br>
<b>Dependencies:</b> $a\gt0$: growth, doubling time $\ln2/a$. $a\lt0$: decay, half-life $\ln2/|a|$, time constant $\tau = 1/|a|$ (after $\tau$, $1/e\approx37\,\%$ remains).<br><br>
<b>Signs:</b> Formally the logarithm gives $\ln|u|$; the constant $c_2$ may also be negative (or zero), which covers all signs.<br><br>
<b>Connection:</b> The same method gives the barometric height formula, Newton's cooling law and the energy decrease of the damped oscillation $\dot E = -2\rho E$ (9.3.3).`,
    derivation: R`Example with variable coefficient $\dot u = -t\,u$, $u(0) = u_0$:
<ol class="fc-steps">
<li>$\dfrac{du}u = -t\,dt$<em>Separate the variables.</em></li>
<li>$\ln u = -\dfrac{t^2}2+c_1$<em>Integrate both sides.</em></li>
<li>$u = c_2e^{-t^2/2}$<em>Exponentiate, $c_2 = e^{c_1}$.</em></li>
<li>$u(0) = c_2 = u_0$<em>Initial condition.</em></li>
<li>$u(t) = u_0e^{-t^2/2}$<em>Gaussian-shaped decay: the rate $|a(t)| = t$ grows with time, so $u$ falls faster than exponentially.</em></li>
</ol>`,
    example: R`<b>Capacitor discharge</b> $\dot U = -U/(RC)$: $U = U_0e^{-t/RC}$. With $R = 10\,\text{k}\Omega$, $C = 100\,\mu\text{F}$: $\tau = 1\,\text{s}$; after $3\,\text{s}$, $5\,\%$ remains.<br>
<b>Radioactive decay</b> (12.43–12.47): $N = N_0e^{-\lambda t}$; half-life $T_{1/2} = \ln2/\lambda$.`,
    counterexample: R`<b>Nonlinear equation:</b> $\dot u = u^2$ can also be separated ($du/u^2 = dt$), but gives $u = \frac1{1/u_0-t}$, which diverges at $t = 1/u_0$ (finite "blow-up time"). Separation of variables works here too, but the solution is not an exponential law, and superposition does not hold.`,
    pitfalls: R`<ul><li>Forgetting the integration constant or not determining it from the initial condition.</li>
<li>Writing $e^{\int a\,dt+c_1}$ as $e^{\int a\,dt}+e^{c_1}$.</li>
<li>Dividing by $u$ when separating, without considering the solution $u\equiv0$.</li></ul>`
  },
  "ph12_dgl1_inhomogen": {
    title: R`Linear ODE of first order, inhomogeneous: particular + homogeneous, variation of constants`,
    category: R`12.3 The linear differential equation of first order`,
    type: "herleitung",
    front: R`Why is the general solution of $\dot u = a(t)u+s(t)$ equal to a particular solution plus the general solution of the homogeneous equation? Use the <b>variation of constants</b> to derive a particular solution. When does one instead use <b>undetermined coefficients</b>?`,
    back: R`<b>Theorem:</b> general solution of the inhomogeneous equation = particular solution of the inhomogeneous + general solution of the homogeneous equation.<br>
Reason: if $u_p$ is a solution, then for every other solution $u$:
$$\frac{d}{dt}(u-u_p) = a(t)(u-u_p)\;\Rightarrow\;u = u_p+Ce^{\int a(t)dt}\qquad(12.14\text{–}12.19)$$
<b>Variation of constants:</b> insert the ansatz $u_p = C(t)\,e^{\int a\,dt}$ (12.20):
$$e^{\int a\,dt}\dot C+C\,a\,e^{\int a\,dt} = a\,C\,e^{\int a\,dt}+s\;\Rightarrow\;\dot C = s(t)\,e^{-\int a\,dt}\qquad(12.21\text{–}12.25)$$
$$C(t) = \int s(t)\,e^{-\int a(t)dt}\,dt\qquad(12.26)$$
<b>Undetermined coefficients</b> (only for constant $a$): ansatz in the form of the forcing function (polynomial, $e^{\alpha t}\times$polynomial, sine/cosine …, Tab. 12.1), coefficients by comparison. Solution scheme: Fig. 12.1.`,
    meta: R`Script: section 12.3.2, Eqs. (12.13)–(12.26), Tab. 12.1, Fig. 12.1, appendix pp. 26–30`,
    explanation: R`<b>Intuition:</b> The homogeneous solution describes how the system reacts on its own (without drive); the particular one, what the drive enforces. Every solution is "forced response + a piece of own behaviour", and the initial condition fixes how much own behaviour there is.<br><br>
<b>Variation of constants:</b> One makes the constant of the homogeneous solution time-dependent and lets it "move along" to absorb the disturbance. The method always works (even with variable coefficients), but leads to integrals.<br><br>
<b>Undetermined coefficients:</b> Faster when the forcing function has a typical form: the response of a linear system with constant coefficients has the same form as the excitation. Special case: if $\alpha = a$ (the forcing is "resonant" with the homogeneous solution), one needs an extra factor $t$ (Tab. 12.1).<br><br>
<b>Connection:</b> The same structure appears in forced oscillation (9.4.1) and in linear algebra (solution set of an inhomogeneous linear system = particular solution + kernel).`,
    derivation: R`$\dot u = -u+t$ with undetermined coefficients, $u(0) = 0$:
<ol class="fc-steps">
<li>$u_h = Ce^{-t}$<em>Homogeneous solution ($a = -1$).</em></li>
<li>Ansatz $u_p = A_0+A_1t$<em>Forcing function is a polynomial of degree 1 (Tab. 12.1).</em></li>
<li>$A_1 = -A_0-A_1t+t$<em>Insert.</em></li>
<li>$t$: $0 = -A_1+1\Rightarrow A_1 = 1$; constant: $A_1 = -A_0\Rightarrow A_0 = -1$<em>Coefficient comparison.</em></li>
<li>$u = t-1+Ce^{-t}$, $u(0) = 0\Rightarrow C = 1$<em>General solution, then the initial condition: $u = t-1+e^{-t}$.</em></li>
</ol>`,
    example: R`<b>Charging a capacitor</b>: $\dot U = -\frac{U}{RC}+\frac{U_0}{RC}$: $U_p = U_0$, $U = U_0+Ce^{-t/RC}$, with $U(0) = 0$: $U = U_0(1-e^{-t/RC})$. After $\tau = RC$: $63\,\%$.<br>
Check of the solution $u = t-1+e^{-t}$: $\dot u = 1-e^{-t}$, $-u+t = 1-e^{-t}$ ✓.`,
    counterexample: R`<b>Wrong ansatz in the resonant case:</b> $\dot u = -u+e^{-t}$. The ansatz $u_p = Ae^{-t}$ gives $-Ae^{-t} = -Ae^{-t}+e^{-t}$, so $0 = e^{-t}$ – impossible. Because $e^{-t}$ is already the homogeneous solution, one needs $u_p = Ate^{-t}$; this gives $A = 1$.`,
    pitfalls: R`<ul><li>Forgetting the homogeneous solution and giving only $u_p$.</li>
<li>Applying the initial condition to $u_p$ instead of the total solution.</li>
<li>In the resonant case ($\alpha = a$) forgetting the factor $t$ in the ansatz.</li></ul>`
  },
  "ph12_saettigung_zerfall": {
    title: R`First-order examples: saturation (learning curve) and decay with constant supply`,
    category: R`12.3 The linear differential equation of first order`,
    type: "beispiel",
    front: R`Solve (1) the "learning equation" $\dot L = k(L_m-L)$ with $L(0) = 0$, and (2) radioactive decay with constant supply $\dot N = -\lambda N+\beta$ with $N(0) = N_0$. Which equilibrium values arise?`,
    back: R`<b>(1) Saturation:</b> $\dot L = -kL+kL_m$ (12.27, 12.28). Homogeneous: $L = Ce^{-kt}$ (12.29–12.32). Variation of constants $L_p = C(t)e^{-kt}$:
$$\dot Ce^{-kt} = kL_m\;\Rightarrow\;C(t) = L_me^{kt}\;\Rightarrow\;L_p = L_m\qquad(12.33\text{–}12.38)$$
$$L = L_m+Ce^{-kt},\quad L(0) = 0\Rightarrow C = -L_m,\quad L(t) = L_m\left(1-e^{-kt}\right)\qquad(12.39\text{–}12.42)$$
The particular solution "was already in the equation": $\dot L = 0$ exactly for $L = L_m$.<br><br>
<b>(2) Decay with supply</b> (12.43–12.49): without supply $N = N_0e^{-\lambda t}$; with supply $\beta$:
$$N(t) = \frac\beta\lambda+\left(N_0-\frac\beta\lambda\right)e^{-\lambda t},\qquad\lim_{t\to\infty}N = \frac\beta\lambda\qquad(12.50,\,12.51)$$
Application: glucose infusion with degradation rate $\lambda$ and supply $\beta$ gives a constant amount $\beta/\lambda$ in the blood.`,
    meta: R`Script: section 12.3.3, Eqs. (12.27)–(12.51), appendix pp. 29–32`,
    explanation: R`<b>Intuition:</b> Inflow and outflow: the outflow grows with the amount present, the inflow is constant. In the end an equilibrium is reached in which both are equal: $\lambda N = \beta$. Like a bathtub with an open drain.<br><br>
<b>Dependencies:</b> The equilibrium value $\beta/\lambda$ depends only on supply and degradation rate, not on the initial value. The time to equilibrium is $\sim1/\lambda$ (or $1/k$): after $1/\lambda$, $37\,\%$ is still missing; after $3/\lambda$, $5\,\%$.<br><br>
<b>Method:</b> For a constant forcing function, the equilibrium solution (all derivatives zero) is always a particular solution. This saves the variation of constants.<br><br>
<b>Connection:</b> Same pattern: charging a capacitor, heating a body with constant heating power and Newtonian cooling, terminal velocity in a fall with linear friction, drug level.`,
    derivation: R`Solution (2) with the equilibrium method:
<ol class="fc-steps">
<li>$\dot N = 0\Rightarrow N_p = \beta/\lambda$<em>Constant particular solution.</em></li>
<li>$N_h = Ce^{-\lambda t}$<em>Homogeneous solution.</em></li>
<li>$N = \dfrac\beta\lambda+Ce^{-\lambda t}$<em>General solution.</em></li>
<li>$N(0) = N_0\Rightarrow C = N_0-\dfrac\beta\lambda$<em>Initial condition (12.50).</em></li>
<li>$N_0\lt\beta/\lambda$: $N$ grows; $N_0\gt\beta/\lambda$: $N$ falls; both approach $\beta/\lambda$<em>Monotone approach, no overshoot (1st order).</em></li>
</ol>`,
    example: R`<b>Learning</b> with $k = 0{,}5\,\text{h}^{-1}$: after $2\,\text{h}$, $63\,\%$ of $L_m$; half of it after $\ln2/k = 1{,}4\,\text{h}$.<br>
<b>Isotope</b> with $T_{1/2} = 6\,\text{h}$ ($\lambda = 0{,}116\,\text{h}^{-1}$) with supply $\beta = 10^9\,\text{h}^{-1}$: equilibrium $N = 8{,}7\cdot10^9$ atoms, activity at equilibrium $\lambda N = \beta$.`,
    counterexample: R`<b>Logistic growth</b> $\dot L = kL(L_m-L)$: also saturation, but the equation is nonlinear (product $L\cdot L$). The solution is S-shaped instead of purely exponential, and with $L(0) = 0$ it stays $L\equiv0$. The linear model (12.27) is only a simple variant.`,
    pitfalls: R`<ul><li>Believing the equilibrium depends on the initial value.</li>
<li>Setting the sign of $k$ wrongly in the homogeneous solution for $\dot L = k(L_m-L)$.</li>
<li>Confusing the activity $\lambda N$ with the particle number $N$.</li></ul>`
  },
  "ph12_dgl2_homogen": {
    title: R`Linear ODE of second order, homogeneous: characteristic equation and three cases`,
    category: R`12.4 The linear differential equation of second order`,
    type: "herleitung",
    front: R`Solve $\ddot u+a_1\dot u+a_0u = 0$ with the Euler ansatz $u = e^{\lambda t}$. What is the characteristic equation, and which solutions arise for discriminant $\Delta\gt0$, $\Delta = 0$ and $\Delta\lt0$?`,
    back: R`Superposition: linear combinations of solutions are solutions. Ansatz $u = e^{\lambda t}$ (12.55):
$$\lambda^2e^{\lambda t}+a_1\lambda e^{\lambda t}+a_0e^{\lambda t} = 0\;\Rightarrow\;p(\lambda) = \lambda^2+a_1\lambda+a_0 = 0\qquad(12.56\text{–}12.60)$$
$$\Delta = a_1^2-4a_0,\qquad\lambda_{1,2} = \tfrac12\left(-a_1\pm\sqrt\Delta\right)\qquad(12.61,\,12.62)$$
<ul><li><b>Case I</b> ($\Delta\gt0$, two real roots): $u = C_1e^{\lambda_1t}+C_2e^{\lambda_2t}$ (12.63); constants from $u(t_0) = u_0$, $\dot u(t_0) = v_0$ (12.64, 12.65).</li>
<li><b>Case II</b> ($\Delta = 0$, double root): $u = (C_1+C_2t)e^{\lambda_1t}$ (12.66).</li>
<li><b>Case III</b> ($\Delta\lt0$): $\lambda_{1,2} = \alpha\pm i\beta$ with $\alpha = -\tfrac12a_1$, $\beta = \tfrac12\sqrt{-\Delta}$ (12.67–12.69); with Euler (12.70) and real $B_1$, $B_2$:
$$u = e^{\alpha t}(B_1\cos\beta t+B_2\sin\beta t)\qquad(12.71\text{–}12.74)$$</li></ul>`,
    meta: R`Script: sections 12.4–12.4.1, Eqs. (12.52)–(12.74), appendix pp. 32–34`,
    explanation: R`<b>Intuition:</b> The exponential function is the only function that keeps its form when differentiated. That is why the ansatz $e^{\lambda t}$ turns the differential equation into an ordinary quadratic equation.<br><br>
<b>Physics of the three cases:</b> With $a_1 = 2\rho$, $a_0 = \omega_0^2$ this is exactly the damped oscillator (9.3): case I = overdamped, case II = aperiodic limiting case, case III = damped oscillation with $\omega = \sqrt{\omega_0^2-\rho^2}$.<br><br>
<b>Why $te^{\lambda t}$ for double roots?</b> With only one exponential one would be a constant short; the second, linearly independent solution is $te^{\lambda t}$ (limit of two coinciding roots).<br><br>
<b>Connection:</b> The same method for systems: for coupled oscillators the characteristic equation becomes the determinant condition of an eigenvalue problem (9.7.2).`,
    derivation: R`Case III step by step:
<ol class="fc-steps">
<li>$u = C_1e^{(\alpha+i\beta)t}+C_2e^{(\alpha-i\beta)t} = e^{\alpha t}\left(C_1e^{i\beta t}+C_2e^{-i\beta t}\right)$<em>Two complex solutions superposed (12.71, 12.72).</em></li>
<li>$= e^{\alpha t}\{(C_1+C_2)\cos\beta t+i(C_1-C_2)\sin\beta t\}$<em>Euler formula (12.70, 12.73).</em></li>
<li>$B_1 := C_1+C_2$, $B_2 := i(C_1-C_2)$, both real<em>Choice of constants for real $u$ ($C_2 = C_1^*$).</em></li>
<li>$u = e^{\alpha t}(B_1\cos\beta t+B_2\sin\beta t)$<em>(12.74).</em></li>
<li>$\alpha\lt0$: decaying; $\alpha = 0$: undamped; $\alpha\gt0$: growing<em>The sign of $a_1$ decides.</em></li>
</ol>`,
    example: R`$\ddot u+3\dot u+2u = 0$: $\lambda = -1,-2$, $u = C_1e^{-t}+C_2e^{-2t}$.<br>
$\ddot u+2\dot u+u = 0$: $\lambda = -1$ double, $u = (C_1+C_2t)e^{-t}$.<br>
$\ddot u+2\dot u+5u = 0$: $\lambda = -1\pm2i$, $u = e^{-t}(B_1\cos2t+B_2\sin2t)$.`,
    counterexample: R`<b>Variable coefficients:</b> For $\ddot u+t\,u = 0$ (Airy equation) the ansatz $e^{\lambda t}$ does not work, because $\lambda^2+t = 0$ cannot hold for all $t$. The characteristic equation is a tool only for constant coefficients.`,
    pitfalls: R`<ul><li>Giving only one solution for the double root.</li>
<li>Leaving complex constants in case III, although $u$ must be real.</li>
<li>Losing the sign in $\lambda = \tfrac12(-a_1\pm\sqrt\Delta)$.</li></ul>`
  },
  "ph12_dgl2_inhomogen": {
    title: R`Linear ODE of second order, inhomogeneous: undetermined coefficients (y'' − y = x e^{2x})`,
    category: R`12.4 The linear differential equation of second order`,
    type: "beispiel",
    front: R`Solve $y''-y = xe^{2x}$ step by step: determine the type, the homogeneous solution, a particular solution by undetermined coefficients, and the general solution. When must the ansatz contain a factor $t^\nu$ (or $x^\nu$)?`,
    back: R`Same principle as for first order: general inhomogeneous = particular + general homogeneous solution. In practice usually undetermined coefficients (Tab. 12.2).<br><br>
<b>1. Type:</b> $u\to y$, $t\to x$; 2nd order, linear, inhomogeneous ($s = xe^{2x}$), constant coefficients (12.75, 12.76).<br>
<b>2. Homogeneous:</b> $p(\lambda) = \lambda^2-1 = (\lambda+1)(\lambda-1)$, case I:
$$y_h = C_1e^x+C_2e^{-x}\qquad(12.77\text{–}12.79)$$
<b>3. Particular:</b> type $e^{\alpha x}\sum b_\mu x^\mu$ with $\alpha = 2$, $b_1 = 1$; since $p(2)\neq0$:
$$y_p = (A_0+A_1x)e^{2x}\;\Rightarrow\;3A_0+4A_1+3A_1x = x\;\Rightarrow\;A_1 = \tfrac13,\ A_0 = -\tfrac49\qquad(12.80\text{–}12.85)$$
<b>4. General:</b>
$$y = \left(-\tfrac49+\tfrac13x\right)e^{2x}+C_1e^x+C_2e^{-x}\qquad(12.86)$$
<b>Factor $t^\nu$:</b> when $\alpha$ (or $i\omega$, $\alpha+i\omega$) is a $\nu$-fold root of the characteristic polynomial (resonant case, Tab. 12.2).`,
    meta: R`Script: sections 12.4.2–12.4.3, Eqs. (12.75)–(12.86), Tab. 12.2, appendix pp. 34–37`,
    explanation: R`<b>Intuition:</b> A linear system with constant coefficients responds to an excitation "of the same kind": to $e^{2x}$ with $e^{2x}$, to a polynomial with a polynomial of the same degree, to $\cos\omega t$ with a mixture of $\cos$ and $\sin$. One only has to find the coefficients.<br><br>
<b>Include all powers:</b> Even if $b_0 = 0$, the ansatz needs $A_0$; when differentiating, $A_1x\,e^{2x}$ produces a constant part that $A_0$ must balance.<br><br>
<b>Resonant case:</b> If the excitation itself is a solution of the homogeneous equation, the simple ansatz gives zero; the response then grows with $t$ (e.g. undamped oscillator driven exactly at $\omega_0$: amplitude $\propto t$).<br><br>
<b>Connection:</b> For the driven oscillator (9.4) the particular solution is the steady oscillation, the homogeneous one the transient.`,
    derivation: R`Insert the ansatz $y_p = (A_0+A_1x)e^{2x}$:
<ol class="fc-steps">
<li>$y_p' = (2A_0+A_1+2A_1x)e^{2x}$<em>Product rule.</em></li>
<li>$y_p'' = (4A_0+4A_1+4A_1x)e^{2x}$<em>Differentiate once more.</em></li>
<li>$y_p''-y_p = (3A_0+4A_1+3A_1x)e^{2x}$<em>Form the difference (12.82).</em></li>
<li>$3A_1 = 1$, $3A_0+4A_1 = 0$<em>Compare coefficients of $x$ and $x^0$ with the right-hand side (12.83, 12.84).</em></li>
<li>$A_1 = \tfrac13$, $A_0 = -\tfrac49$<em>(12.85).</em></li>
</ol>`,
    example: R`<b>Resonance:</b> $\ddot u+u = \cos t$. Since $p(i) = 0$, ansatz $u_p = t(B\cos t+C\sin t)$; gives $u_p = \tfrac t2\sin t$. Check: $\ddot u_p = \cos t-\tfrac t2\sin t$, so $\ddot u_p+u_p = \cos t$ ✓. The amplitude grows linearly.<br>
<b>Constant force:</b> $\ddot x+\omega_0^2x = g$: $x_p = g/\omega_0^2$ (shifted rest position of a hanging spring).`,
    counterexample: R`<b>Ansatz too small:</b> With $y_p = A_1xe^{2x}$ (without $A_0$) the comparison would require $4A_1 = 0$ and $3A_1 = 1$ at the same time – a contradiction. The method does not fail; the ansatz was simply incomplete.`,
    pitfalls: R`<ul><li>Omitting lower powers in the polynomial ansatz.</li>
<li>Not recognising the resonant case ($p(\alpha) = 0$).</li>
<li>Determining $C_1$, $C_2$ from the initial conditions before adding $y_p$.</li></ul>`
  },
  "ph12_mathematisches_pendel": {
    title: R`Mathematical pendulum: setting up and solving the ODE, T = 2π√(ℓ/g)`,
    category: R`12.4 The linear differential equation of second order`,
    type: "herleitung",
    front: R`For the <b>mathematical pendulum</b> (mass $m$ on a massless rod of length $\ell$), set up the equation of motion, linearise it, and solve it for the initial conditions $\varphi(0) = \varphi_0$, $\dot\varphi(0) = 0$. On what does the period depend?`,
    back: R`Only the tangential component of gravity accelerates along the circular path; arc length $s = \ell\varphi$:
$$m\frac{d^2s}{dt^2} = -mg\sin\varphi\;\Rightarrow\;m\ell\ddot\varphi = -mg\sin\varphi\;\Rightarrow\;\ddot\varphi+\frac g\ell\sin\varphi = 0\qquad(12.87\text{–}12.90)$$
Small deflection, $\sin\varphi\approx\varphi$:
$$\ddot\varphi+\frac g\ell\varphi = 0\qquad(12.91)$$
The mass cancels out. Characteristic equation $\lambda^2+g/\ell = 0$, $\Delta = -4g/\ell\lt0$: case III with $\alpha = 0$, $\omega = \sqrt{g/\ell}$ (12.92–12.94):
$$\varphi(t) = C_1\cos\omega t+C_2\sin\omega t\qquad(12.95)$$
Initial conditions: $C_1 = \varphi_0$, $C_2 = 0$ (12.96–12.98):
$$\varphi(t) = \varphi_0\cos\omega t,\qquad T = \frac{2\pi}\omega = 2\pi\sqrt{\frac\ell g}\qquad(12.99,\,12.100)$$
Independent of the mass and (for small $\varphi_0$) of the amplitude.`,
    meta: R`Script: section 12.4.3, Eqs. (12.87)–(12.100), Fig. 12.2, appendix pp. 37–39`,
    explanation: R`<b>Intuition:</b> The mass appears twice – as weight (pulls) and as inertia (resists the reaction) – and therefore cancels (equivalence principle, Ch. 3). What remains is the ratio of gravitational acceleration and length.<br><br>
<b>Dependencies:</b> $T\propto\sqrt\ell$ (four times the length, double the period) and $T\propto1/\sqrt g$ (on the Moon with $g/6$ the pendulum is $2{,}45$ times slower). Independent of $m$ and – in the small-angle approximation – of $\varphi_0$ (isochronism, basis of the pendulum clock).<br><br>
<b>Limits:</b> For large amplitudes the period grows: $T\approx2\pi\sqrt{\ell/g}\left(1+\varphi_0^2/16\right)$ (supplement).<br><br>
<b>Connection:</b> Textbook example for setting up an ODE from a physical problem (12.1) and for linearisation (Taylor, 11.1.2). The physical pendulum (rigid body) has $T = 2\pi\sqrt{J_A/(mgs)}$ with the moment of inertia about the axis (Steiner, 8.5.8).`,
    derivation: R`Constants from the initial conditions:
<ol class="fc-steps">
<li>$\varphi(0) = C_1\cos0+C_2\sin0 = C_1 = \varphi_0$<em>Initial deflection (12.96).</em></li>
<li>$\dot\varphi(t) = -C_1\omega\sin\omega t+C_2\omega\cos\omega t$<em>Derivative of the general solution.</em></li>
<li>$\dot\varphi(0) = C_2\omega = 0\Rightarrow C_2 = 0$<em>Released from rest (12.97, 12.98).</em></li>
<li>$\varphi(t) = \varphi_0\cos\omega t$<em>Cosine oscillation (12.99).</em></li>
<li>$\omega T = 2\pi\Rightarrow T = 2\pi\sqrt{\ell/g}$<em>(12.100).</em></li>
</ol>`,
    example: R`$\ell = 1\,\text{m}$: $T = 2{,}006\,\text{s}$ (almost exactly "one second per half-swing" – the historical seconds pendulum).<br>
$\ell = 0{,}25\,\text{m}$: $T = 1{,}003\,\text{s}$.<br>
$\varphi_0 = 30^\circ$: exact period $1{,}7\,\%$ longer than the harmonic approximation.`,
    counterexample: R`<b>Large amplitude:</b> At $\varphi_0 = 90^\circ$ the period is already $18\,\%$ longer; at $170^\circ$ about $2{,}4$ times $2\pi\sqrt{\ell/g}$; and at $180^\circ$ (unstable equilibrium at the top) the pendulum would linger forever. The solution $\varphi_0\cos\omega t$ holds only for small swings.`,
    pitfalls: R`<ul><li>$T = 2\pi\sqrt{g/\ell}$ (fraction inverted).</li>
<li>Putting the mass into the period.</li>
<li>Using the small-angle approximation for large amplitudes.</li>
<li>Inserting $\varphi$ in degrees instead of radians into $\sin\varphi\approx\varphi$.</li></ul>`
  }
};
})();
