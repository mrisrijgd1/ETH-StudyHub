(function () {
const R = String.raw;
window.FLASHCARDS_EN_KAPITEL_9 = {
  "ph9_harmonische_naeherung": {
    title: R`Oscillating system and harmonic approximation of a potential`,
    category: R`9.2 Harmonic oscillations`,
    type: "herleitung",
    front: R`What does an <b>oscillating system</b> need? Use a Taylor expansion to show why almost every system oscillates <b>harmonically</b> near a potential minimum $r_0$, and give the angular frequency $\omega_0$ for a diatomic molecule.`,
    back: R`<b>Oscillating system:</b> a stable equilibrium position; it can absorb energy without being destroyed; the energy oscillates periodically between two forms (e.g. kinetic and potential). The energy must not exceed a threshold (otherwise the ball jumps out of the bowl, Fig. 9.1).<br><br>
<b>Taylor expansion</b> about the minimum $r_0$:
$$U(r_0+\Delta r)\approx U(r_0) + \frac{dU}{dr}\Big|_{r_0}\Delta r + \frac12\frac{d^2U}{dr^2}\Big|_{r_0}\Delta r^2\qquad(9.1)$$
With $U_0 := U(r_0)$, $k := U''(r_0)$, $x := \Delta r$ and $U'(r_0) = 0$ (9.2, 9.3):
$$U\approx U_0 + \tfrac12kx^2,\qquad F = -\frac{dU}{dx} = -kx\qquad(9.4,\,9.5)$$
Equation of motion with reduced mass $\mu$:
$$\mu\ddot x = -kx\;\Rightarrow\;\ddot x + \omega_0^2x = 0,\qquad\omega_0 := \sqrt{\frac k\mu}\qquad(9.6\text{–}9.9)$$`,
    meta: R`Script: sections 9.1–9.2.2, Eqs. (9.1)–(9.9), Figs. 9.1–9.3, pp. 223–226`,
    explanation: R`<b>Intuition:</b> Every smooth well looks like a parabola up close. The parabola means a restoring force proportional to the displacement (Hooke). That is why the harmonic oscillator is the universal model for small oscillations: molecules, pendulums, bridges, oscillating circuits, atoms in a crystal.<br><br>
<b>The decisive quantity</b> is the curvature $k = U''(r_0)$: a steep, narrow well means large $k$ and high frequency. $\omega_0\propto\sqrt{k}$ and $\propto1/\sqrt{\mu}$; light particles oscillate faster (H₂ faster than D₂, factor $\sqrt2$).<br><br>
<b>Why is the linear term missing?</b> At the minimum the force $-U'(r_0)$ vanishes; otherwise $r_0$ would not be an equilibrium position. The constant $U_0$ plays no role for the motion (only energy differences count).<br><br>
<b>Connection:</b> The method for solving the ODE is in Ch. 12.4.1. The same argument gives the mathematical pendulum ($\sin\varphi\approx\varphi$, Ch. 3) and the torsional oscillation ($M = -\kappa\varphi$).`,
    derivation: R`Curvature of the Lennard-Jones potential $U = 4\varepsilon[(\sigma/r)^{12}-(\sigma/r)^6]$:
<ol class="fc-steps">
<li>$U'(r) = 4\varepsilon\left[-12\dfrac{\sigma^{12}}{r^{13}} + 6\dfrac{\sigma^6}{r^7}\right] = 0\Rightarrow r_0 = 2^{1/6}\sigma$<em>Equilibrium distance from $U' = 0$; there $(\sigma/r_0)^6 = \tfrac12$.</em></li>
<li>$U''(r) = \dfrac{4\varepsilon}{r^2}\left[156\left(\dfrac\sigma r\right)^{12} - 42\left(\dfrac\sigma r\right)^{6}\right]$<em>Differentiate twice.</em></li>
<li>$k = U''(r_0) = \dfrac{4\varepsilon}{r_0^2}\left[\dfrac{156}{4} - \dfrac{42}{2}\right] = \dfrac{72\,\varepsilon}{r_0^2}$<em>Insert $(\sigma/r_0)^{12} = \tfrac14$; $k>0$, so stable.</em></li>
<li>$k = \dfrac{72}{2^{1/3}}\dfrac{\varepsilon}{\sigma^2}\approx57{,}1\,\dfrac{\varepsilon}{\sigma^2}$<em>Spring constant of the bond (9.2).</em></li>
<li>$\omega_0 = \sqrt{k/\mu}$<em>With the reduced mass of the pair (9.8).</em></li>
</ol>`,
    example: R`<b>Mathematical pendulum:</b> $U = mg\ell(1-\cos\varphi)\approx\tfrac12mg\ell\varphi^2$, so "$k$" $= mg\ell$, inertia $m\ell^2$: $\omega_0 = \sqrt{g/\ell}$. For $\ell = 1\,\text{m}$: $\omega_0 = 3{,}13\,\text{s}^{-1}$, $T = 2{,}01\,\text{s}$.<br>
<b>Spring:</b> $m = 0{,}5\,\text{kg}$, $k = 200\,\text{N/m}$: $\omega_0 = 20\,\text{s}^{-1}$, $T = 0{,}314\,\text{s}$, $\nu = 3{,}18\,\text{Hz}$.`,
    counterexample: R`<b>No harmonic part:</b> $U = ax^4$ has a minimum at $x = 0$, but $U''(0) = 0$. It still oscillates, but anharmonically: the period depends on the amplitude ($T\propto1/A$). Likewise the pendulum is no longer isochronous at large deflections. And for $U''(r_0)\lt0$ (maximum) there is no oscillation at all, but exponential running away.`,
    pitfalls: R`<ul><li>Expanding about a point that is not a minimum ($U'\ne0$ or $U''\lt0$).</li>
<li>Using the mass instead of the reduced mass in the two-body problem.</li>
<li>Continuing to use the harmonic approximation at large amplitudes.</li></ul>`
  },
  "ph9_loesung_harmonisch": {
    title: R`Solution of the harmonic oscillator: complex ansatz and real form`,
    category: R`9.2 Harmonic oscillations`,
    type: "herleitung",
    front: R`Solve $\ddot x + \omega_0^2x = 0$ with the exponential ansatz. How does the requirement "$x(t)$ real" lead to the form $x(t) = A\cos(\omega_0t+\delta')$, and why is $x = A\sin(\omega_0t+\delta)$ equivalent?`,
    back: R`Characteristic equation ($a_1 = 0$, $a_0 = \omega_0^2$ in $\ddot x + a_1\dot x + a_0x = 0$):
$$\lambda^2+\omega_0^2 = 0\;\Rightarrow\;\lambda_{1,2} = \pm i\omega_0,\qquad x(t) = C_1e^{i\omega_0t}+C_2e^{-i\omega_0t}\qquad(9.10\text{–}9.13)$$
<b>Reality</b> $x = x^*$ for all $t$:
$$(C_1-C_2^*)e^{i\omega_0t} + (C_2-C_1^*)e^{-i\omega_0t} = 0\;\Rightarrow\;C_1 = C_2^* =: C\qquad(9.14\text{–}9.17)$$
With $C = |C|e^{i\delta'}$ (phase factor, 9.18):
$$x(t) = |C|\left\{e^{i(\omega_0t+\delta')}+e^{-i(\omega_0t+\delta')}\right\} = \underbrace{2|C|}_{=:A}\cos(\omega_0t+\delta')\qquad(9.19\text{–}9.23)$$
With $\delta' = \delta-\pi/2$ and $e^{\pm i\pi/2} = \pm i$ (9.24–9.28):
$$x(t) = A\sin(\omega_0t+\delta)\qquad(9.29)$$
Equivalent: $x(t) = B\sin\omega t + C\cos\omega t$ with $B = A\cos\delta$, $C = A\sin\delta$ (9.34, 9.35). Always two real constants.`,
    meta: R`Script: sections 9.2.2–9.2.3, Eqs. (9.10)–(9.35), Figs. 9.4–9.6, pp. 226–230`,
    explanation: R`<b>Intuition:</b> $e^{i\omega_0t}$ is a pointer that rotates with $\omega_0$ in the complex plane. A real oscillation arises when one adds two oppositely rotating pointers with conjugate amplitudes (the imaginary part cancels out), or simply takes the real part of a single pointer.<br><br>
<b>Two constants:</b> A second-order ODE needs two initial conditions. The complex $C_1$, $C_2$ would be four real numbers; the reality condition halves this to two ($A$, $\delta$).<br><br>
<b>Frequency versus amplitude:</b> $\omega_0$ comes from the ODE (a property of the system); $A$ and $\delta$ come from the initial conditions. The period does not depend on the amplitude (isochronism) – that is exactly what linearity means.<br><br>
<b>Circle-pendulum experiment (9.2.3):</b> The projection of a uniform circular motion onto an axis is a harmonic oscillation: $y = R\sin\omega t$. The pendulum and the projected shadow move in step.`,
    derivation: R`Transition from the cosine to the sine form:
<ol class="fc-steps">
<li>$\delta' = \delta - \tfrac\pi2$<em>Rename the phase (9.24).</em></li>
<li>$x = |C|\left\{e^{i(\omega_0t+\delta)}e^{-i\pi/2} + e^{-i(\omega_0t+\delta)}e^{+i\pi/2}\right\}$<em>Insert into (9.19) (9.25).</em></li>
<li>$= |C|\left\{-ie^{i(\omega_0t+\delta)} + ie^{-i(\omega_0t+\delta)}\right\}$<em>$e^{\pm i\pi/2} = \pm i$ (9.26).</em></li>
<li>$= -i|C|\cdot2i\sin(\omega_0t+\delta)$<em>$e^{i\varphi}-e^{-i\varphi} = 2i\sin\varphi$ (9.27).</em></li>
<li>$= 2|C|\sin(\omega_0t+\delta) = A\sin(\omega_0t+\delta)$<em>$-i\cdot i = 1$ (9.28, 9.29).</em></li>
</ol>`,
    example: R`<b>Numbers:</b> $C = 0{,}025\,e^{i\pi/3}\,\text{m}$ gives $A = 0{,}05\,\text{m}$, $\delta' = 60^\circ$, so $x = 0{,}05\cos(\omega_0t+60^\circ) = 0{,}05\sin(\omega_0t+150^\circ)$.<br>
<b>Conversion:</b> $x = 3\sin\omega t + 4\cos\omega t$ (in cm): $A = \sqrt{9+16} = 5\,\text{cm}$, $\tan\delta = C/B = 4/3$, $\delta = 53{,}1^\circ$.`,
    counterexample: R`<b>Choosing $C_1$ and $C_2$ independently:</b> E.g. $C_1 = 1$, $C_2 = 0$ gives $x = e^{i\omega_0t}$, a complex solution with no physical meaning as a displacement. Only $C_2 = C_1^*$ or taking the real part turns it into a measurable oscillation.`,
    pitfalls: R`<ul><li>Forgetting that only the real part (or the combination with $C_2 = C_1^*$) is physical.</li>
<li>Setting $A = |C|$ instead of $A = 2|C|$.</li>
<li>Mixing the sine and cosine phases ($\delta$ vs. $\delta'$); they differ by $\pi/2$.</li></ul>`
  },
  "ph9_x_v_a_periode": {
    title: R`Period, frequency and phase relations of x, v and a`,
    category: R`9.2 Harmonic oscillations`,
    type: "gesetz",
    front: R`Derive $T = 2\pi/\omega$ and $\nu = 1/T$. How are displacement, velocity and acceleration of a harmonic oscillation related to each other (amplitudes, phases)? What holds at the turning points and at the zero crossing?`,
    back: R`<b>Period:</b> After one period the phase grows by $2\pi$:
$$\omega(t+T)+\delta = \omega t+\delta+2\pi\;\Rightarrow\;T = \frac{2\pi}\omega,\qquad\nu = \frac1T = \frac{\omega}{2\pi}\ \ [\text{Hz}]\qquad(9.36\text{–}9.40)$$
<b>Derivatives:</b>
$$x = A\sin(\omega t+\delta),\quad v = A\omega\cos(\omega t+\delta),\quad a = -A\omega^2\sin(\omega t+\delta)\qquad(9.41\text{–}9.46)$$
Amplitudes $A$, $A\omega$, $A\omega^2$. $v$ leads $x$ by $\pi/2$; $a$ is in antiphase to $x$ ($a = -\omega^2x$).
<ul><li><b>Turning point</b> ($x = \pm A$): $v = 0$, $a = \mp A\omega^2$ maximal (9.49).</li>
<li><b>Zero crossing</b> ($x = 0$): $v = \pm A\omega$ maximal, $a = 0$ (9.50).</li></ul>`,
    meta: R`Script: sections 9.2.4–9.2.5, Eqs. (9.36)–(9.50), Fig. 9.7, pp. 230–233`,
    explanation: R`<b>Intuition:</b> The acceleration always points back to the rest position and is strongest where the spring is most stretched (turning point). There the body briefly stands still. In the middle the spring is relaxed, no force, but maximum speed.<br><br>
<b>Dependencies:</b> At fixed amplitude $v_{\max}\propto\omega$ and $a_{\max}\propto\omega^2$ grow. That is why high-frequency vibrations are dangerous: even small amplitudes give large accelerations (e.g. ultrasonic cleaners, machine foundations).<br><br>
<b>$\omega$ vs. $\nu$:</b> $\omega$ (angular frequency, rad/s or $\text{s}^{-1}$) counts the phase; $\nu$ (Hz) counts whole oscillations. Factor $2\pi$.<br><br>
<b>Connection:</b> The relation $a = -\omega^2x$ is the ODE itself. Every motion with $a\propto-x$ is harmonic, with $\omega^2$ as the proportionality constant.`,
    derivation: R`<ol class="fc-steps">
<li>$\varphi(t+T) = \varphi(t)+2\pi$<em>The sine repeats when the phase grows by $2\pi$ (9.36).</em></li>
<li>$\omega T = 2\pi\Rightarrow T = 2\pi/\omega$<em>$\omega t$ and $\delta$ cancel (9.37–9.39).</em></li>
<li>$v = \dot x = A\omega\cos(\omega t+\delta) = A\omega\sin(\omega t+\delta+\tfrac\pi2)$<em>Chain rule; cosine = sine with phase $+\pi/2$ (9.42).</em></li>
<li>$a = \dot v = -A\omega^2\sin(\omega t+\delta) = -\omega^2x$<em>Differentiate again (9.44); phase $+\pi$ relative to $x$.</em></li>
<li>$\sin(\omega t+\delta) = \pm1\Rightarrow\cos = 0$: $v = 0$, $|a| = A\omega^2$<em>Turning point (9.49).</em></li>
</ol>`,
    example: R`Spring with $\omega = 20\,\text{s}^{-1}$ and $A = 5\,\text{cm}$: $T = 0{,}314\,\text{s}$, $v_{\max} = 1\,\text{m/s}$, $a_{\max} = 20\,\text{m/s}^2\approx2g$.<br>
<b>Loudspeaker diaphragm</b> at $1\,\text{kHz}$ with $A = 0{,}1\,\text{mm}$: $\omega = 6283\,\text{s}^{-1}$, $a_{\max} = 10^{-4}\cdot6283^2 = 3950\,\text{m/s}^2\approx400g$.`,
    counterexample: R`<b>Uniform back-and-forth motion</b> (triangular profile, constant speed, abrupt reversal) is periodic, but not harmonic: at the turning points the acceleration would be infinite, otherwise zero. Periodic does not mean sinusoidal.`,
    pitfalls: R`<ul><li>Confusing $\omega$ and $\nu$ (factor $2\pi$).</li>
<li>Assuming the acceleration is maximal where the speed is maximal.</li>
<li>Forgetting that $a$ always points opposite to the displacement.</li></ul>`
  },
  "ph9_komplexe_darstellung": {
    title: R`Complex representation: phasor and derivative as a rotation by π/2`,
    category: R`9.2 Harmonic oscillations`,
    type: "konzept",
    front: R`Why is it convenient to represent oscillations as $z(t) = Ae^{i\omega t}$? What does the derivative with respect to $\varphi = \omega t$ mean geometrically (multiplication by $i$), and how does one obtain the physical quantity from it?`,
    back: R`The projection of a circular motion gives a harmonic oscillation. That is why the representation in the complex plane is close at hand:
$$z(t) = Ae^{i\omega t} = Ae^{i\varphi}\qquad(9.51)$$
Derivatives with respect to the angle $\varphi = \omega t$ (they differ from the time derivative only by the factor $\omega$):
$$\frac{dz}{d\varphi} = iAe^{i\varphi} = iz,\qquad\frac{d^2z}{d\varphi^2} = i^2z = -z,\qquad\frac{d^3z}{d\varphi^3} = -iz\qquad(9.52\text{–}9.54)$$
Each derivative is multiplied by $i$, a <b>rotator</b> that turns the pointer by $\pi/2$ without changing its magnitude (Fig. 9.8). One calculates complex (exponential functions are simpler) and takes the real or imaginary part at the end as the physical result.`,
    meta: R`Script: section 9.2.6, Eqs. (9.51)–(9.54), Fig. 9.8, pp. 233–234`,
    explanation: R`<b>Intuition:</b> A pointer of length $A$ rotates with $\omega$; its shadow on the real axis is the oscillation. The velocity is a second pointer, $\pi/2$ ahead and $\omega$ times longer; the acceleration is $\pi$ ahead (opposite) and $\omega^2$ times longer. All three rotate rigidly together.<br><br>
<b>Why simpler?</b> Differentiation becomes multiplication ($\frac{d}{dt}\to i\omega$), differential equations become algebraic equations. Phase shifts are factors $e^{i\delta}$, superpositions are vector additions (9.5.2).<br><br>
<b>Caution with products:</b> For linear operations (addition, differentiation, multiplication by real constants) one may take the real part at the end. For nonlinear quantities such as energy or power ($x^2$, $F\dot x$) one may not: $\text{Re}(z)^2\neq\text{Re}(z^2)$.<br><br>
<b>Connection:</b> The same method is used for forced oscillations (ansatz $x_p = x_0e^{i\Omega t}$) and in electrical engineering (complex impedances).`,
    derivation: R`<ol class="fc-steps">
<li>$z = Ae^{i\varphi} = A(\cos\varphi + i\sin\varphi)$<em>Euler formula (9.20).</em></li>
<li>$\dfrac{dz}{d\varphi} = iAe^{i\varphi}$<em>Derivative of the exponential function (9.52).</em></li>
<li>$i = e^{i\pi/2}\Rightarrow\dfrac{dz}{d\varphi} = Ae^{i(\varphi+\pi/2)}$<em>Multiplication by $i$ = rotation by $\pi/2$, magnitude 1.</em></li>
<li>$\dfrac{dz}{dt} = \omega\dfrac{dz}{d\varphi} = i\omega z$<em>Chain rule with $\varphi = \omega t$.</em></li>
<li>$\dfrac{d^2z}{dt^2} = -\omega^2z\Rightarrow\ddot z+\omega^2z = 0$<em>The pointer solves the oscillation equation; the real and imaginary parts separately do too.</em></li>
</ol>`,
    example: R`$z = 0{,}05\,e^{i20t}\,\text{m}$: $\dot z = i\cdot20\cdot z$, magnitude $1\,\text{m/s}$, phase $+90^\circ$. $\ddot z = -400z$, magnitude $20\,\text{m/s}^2$, phase $180^\circ$.<br>
Physically: $x = \text{Re}\,z = 0{,}05\cos20t$, $v = -\sin20t\,\text{m/s}$, $a = -20\cos20t\,\text{m/s}^2$.`,
    counterexample: R`<b>Energy from complex quantities:</b> $\tfrac12k\,\text{Re}(z^2) = \tfrac12kA^2\cos2\omega t$ fluctuates around zero and even becomes negative – nonsense for a potential energy. Correct is $\tfrac12k(\text{Re}\,z)^2 = \tfrac12kA^2\cos^2\omega t$. For quadratic quantities take the real part first, then square (or $\tfrac12\text{Re}(z\,w^*)$ for averages).`,
    pitfalls: R`<ul><li>Calculating with complex expressions for nonlinear quantities (energy, power).</li>
<li>Forgetting the factor $\omega$ when passing from $d/d\varphi$ to $d/dt$.</li>
<li>Considering the imaginary part physically meaningless; it also solves the ODE.</li></ul>`
  },
  "ph9_anfangsbedingungen": {
    title: R`Initial conditions: amplitude A and phase δ from x₀ and v₀`,
    category: R`9.2 Harmonic oscillations`,
    type: "herleitung",
    front: R`For $x(t) = A\sin(\omega t+\delta)$ determine the amplitude $A$ and the phase $\delta$ from the initial displacement $x_0$ and the initial velocity $v_0$. Does the amplitude depend on the period?`,
    back: R`$$x(0) = A\sin\delta\equiv x_0,\qquad v(0) = A\omega\cos\delta\equiv v_0\qquad(9.55,\,9.56)$$
Division:
$$\tan\delta = \frac{x_0\,\omega}{v_0}\;\Rightarrow\;\delta = \arctan\frac{x_0\,\omega}{v_0}\qquad(9.57,\,9.58)$$
With $\cos^2\delta+\sin^2\delta = 1$:
$$\left(\frac{v_0}{A\omega}\right)^2+\left(\frac{x_0}{A}\right)^2 = 1\;\Rightarrow\;A = \sqrt{x_0^2+\frac{v_0^2}{\omega^2}}\qquad(9.59\text{–}9.61)$$
<b>Caution:</b> It looks as if $A$ depended on $T = 2\pi/\omega$. It does not: for given $A$ and $\omega$, $x_0$ and $v_0$ are not independent, but lie on an ellipse with semi-axes $A$ and $A\omega$ (Fig. 9.9).`,
    meta: R`Script: section 9.2.7, Eqs. (9.55)–(9.61), Fig. 9.9, pp. 235–236`,
    explanation: R`<b>Intuition:</b> The amplitude is the maximum displacement that the oscillator reaches with its energy. If it starts at $x_0$ with velocity $v_0$, the "swing" $v_0/\omega$ is added to the displacement, combined quadratically like two perpendicular pointers.<br><br>
<b>Energy argument:</b> $\tfrac12kA^2 = \tfrac12kx_0^2+\tfrac12mv_0^2$ gives, with $k = m\omega^2$, exactly the same formula. The amplitude is therefore an energy quantity.<br><br>
<b>Dependencies:</b> For a given kick $v_0$ (from $x_0 = 0$) we have $A = v_0/\omega$: a stiff spring (large $\omega$) is deflected less far.<br><br>
<b>Phase space:</b> The ellipse in Fig. 9.9 is the trajectory in the $(x,v)$ space. Every point of the ellipse is a possible initial state of the same oscillation, only at a different time (different phase).`,
    derivation: R`<ol class="fc-steps">
<li>$x_0 = A\sin\delta$, $v_0 = A\omega\cos\delta$<em>Solution and its derivative at $t = 0$ (9.55, 9.56).</em></li>
<li>$\dfrac{x_0}{v_0} = \dfrac{\tan\delta}{\omega}\Rightarrow\tan\delta = \dfrac{x_0\omega}{v_0}$<em>Divide; $A$ drops out (9.57).</em></li>
<li>$\sin\delta = \dfrac{x_0}{A}$, $\cos\delta = \dfrac{v_0}{A\omega}$<em>Solve for the trigonometric functions.</em></li>
<li>$\dfrac{x_0^2}{A^2}+\dfrac{v_0^2}{A^2\omega^2} = 1$<em>$\sin^2+\cos^2 = 1$; ellipse equation in $(x_0,v_0)$ (9.60).</em></li>
<li>$A = \sqrt{x_0^2+v_0^2/\omega^2}$<em>Solve for $A$ (9.61).</em></li>
<li>Quadrant of $\delta$ from the signs of $\sin\delta$ ($\text{sgn}\,x_0$) and $\cos\delta$ ($\text{sgn}\,v_0$)<em>The arctangent alone gives only values in $(-\pi/2,\pi/2)$.</em></li>
</ol>`,
    example: R`$\omega = 20\,\text{s}^{-1}$, $x_0 = 3\,\text{cm}$, $v_0 = 0{,}8\,\text{m/s}$: $A = \sqrt{0{,}03^2+0{,}04^2}\,\text{m} = 5\,\text{cm}$; $\tan\delta = 0{,}03\cdot20/0{,}8 = 0{,}75$, $\delta = 36{,}9^\circ$.<br>
With $v_0 = -0{,}8\,\text{m/s}$ (same magnitude, inward): $A$ the same, but $\delta = 180^\circ-36{,}9^\circ = 143{,}1^\circ$.`,
    counterexample: R`<b>Start from rest at a turning point</b> ($v_0 = 0$): $\tan\delta\to\infty$, so $\delta = \pi/2$ and $A = |x_0|$. The formula $\delta = \arctan(x_0\omega/v_0)$ cannot be evaluated directly here; it is better to read $\delta$ from $\sin\delta$ and $\cos\delta$.`,
    pitfalls: R`<ul><li>Using the arctangent without quadrant correction.</li>
<li>$A = x_0 + v_0/\omega$ (added linearly instead of quadratically).</li>
<li>Believing that $A$ depends on $T$ for a given energy.</li></ul>`
  },
  "ph9_energie_harmonisch": {
    title: R`Energy of the harmonic oscillator: E = ½ m ω² A² and averages`,
    category: R`9.2 Harmonic oscillations`,
    type: "herleitung",
    front: R`By multiplying the equation of motion by $m\dot x$, derive the energy conservation law of the harmonic oscillator. How large is the total energy, and how is it distributed on average over time between kinetic and potential energy?`,
    back: R`$$\ddot x+\omega^2x = 0\;\Big|\cdot m\dot x\;\Rightarrow\;\frac{d}{dt}\left(\tfrac12m\dot x^2+\tfrac12m\omega^2x^2\right) = 0\qquad(9.62\text{–}9.65)$$
$$\underbrace{\tfrac12m\dot x^2}_{E_\text{kin}}+\underbrace{\tfrac12m\omega^2x^2}_{E_\text{pot}} = \text{const} =: E_\text{tot}\qquad(9.66)$$
With $x = A\sin(\omega t+\delta)$:
$$E_\text{tot} = \tfrac12m\omega^2A^2\left[\cos^2(\omega t+\delta)+\sin^2(\omega t+\delta)\right] = \tfrac12m\omega^2A^2 = \tfrac12kA^2\qquad(9.67\text{–}9.70)$$
Time average over one period:
$$\langle E_\text{kin}\rangle = \tfrac12m\omega^2A^2\frac{\int_0^T\cos^2(\omega t+\delta)\,dt}{T} = \tfrac12E_\text{tot},\qquad\langle E_\text{kin}\rangle = \langle E_\text{pot}\rangle = \tfrac12E_\text{tot}\qquad(9.71\text{–}9.73)$$`,
    meta: R`Script: section 9.2.8, Eqs. (9.62)–(9.73), Fig. 9.10, pp. 235–237`,
    explanation: R`<b>Intuition:</b> The energy swings back and forth between spring and motion: at the turning point everything is potential, in the rest position everything is kinetic. Because sine² and cosine² are equal on average ($\tfrac12$), each form gets half on average.<br><br>
<b>Dependencies:</b> $E\propto A^2$ and $E\propto\omega^2$ (at fixed mass). Doubling the amplitude gives four times the energy. At the same energy a high-frequency oscillator has a smaller amplitude.<br><br>
<b>Graphically (Fig. 9.10):</b> In the parabola $E_\text{pot} = \tfrac12kx^2$, the horizontal cut at $E_\text{tot}$ fixes the turning points $\pm A$; at each position $x$ the distance between parabola and line is the kinetic energy.<br><br>
<b>Connection:</b> The same integration method as in Ch. 3.11.4.1. The equipartition $\langle E_\text{kin}\rangle = \langle E_\text{pot}\rangle$ is a special case of the virial theorem and reappears in the equipartition theorem of thermodynamics ($\tfrac12k_BT$ per quadratic term, Ch. 10).`,
    derivation: R`<ol class="fc-steps">
<li>$m\dot x\ddot x + m\omega^2x\dot x = 0$<em>Multiply the ODE by $m\dot x$ (9.62, 9.63).</em></li>
<li>$\dot x\ddot x = \dfrac{d}{dt}\dfrac{\dot x^2}{2}$, $x\dot x = \dfrac{d}{dt}\dfrac{x^2}{2}$<em>Chain rule backwards (9.64).</em></li>
<li>$\dfrac{d}{dt}\left(\tfrac12m\dot x^2+\tfrac12m\omega^2x^2\right) = 0$<em>The sum is a conserved quantity (9.65, 9.66).</em></li>
<li>$E_\text{tot} = \tfrac12mA^2\omega^2\cos^2(\cdot) + \tfrac12m\omega^2A^2\sin^2(\cdot) = \tfrac12m\omega^2A^2$<em>Insert the solution (9.69, 9.70).</em></li>
<li>$\dfrac1T\displaystyle\int_0^T\cos^2(\omega t+\delta)\,dt = \dfrac12$<em>$\cos^2 = \tfrac12(1+\cos2\varphi)$; the cosine part averages out over one period (9.71, 9.72).</em></li>
</ol>`,
    example: R`$k = 200\,\text{N/m}$, $A = 5\,\text{cm}$: $E = \tfrac12\cdot200\cdot0{,}0025 = 0{,}25\,\text{J}$. At $x = A/2$: $E_\text{pot} = \tfrac14E = 0{,}0625\,\text{J}$, $E_\text{kin} = 0{,}1875\,\text{J}$, so $v = \sqrt{2\cdot0{,}1875/0{,}5} = 0{,}87\,\text{m/s}$ ($= \tfrac{\sqrt3}2v_{\max}$).`,
    counterexample: R`<b>Average over position instead of time:</b> If one averages $E_\text{pot}$ uniformly over the <i>positions</i> $-A\le x\le A$, one gets $\tfrac13E_\text{tot}$, not $\tfrac12$. The oscillator lingers longer at the turning points (it is slow there); the time average weights these positions more strongly.`,
    pitfalls: R`<ul><li>$E = \tfrac12mA^2\omega$ (wrong exponent of $\omega$).</li>
<li>Averaging over a non-period and expecting $\tfrac12$.</li>
<li>Continuing to use the energy conservation law with damping (9.3.3).</li></ul>`
  },

  // ========================================================================
  // 9.3 DAMPED OSCILLATIONS
  // ========================================================================
  "ph9_gedaempft_schwach": {
    title: R`Damped oscillator: ẍ + 2ρẋ + ω₀²x = 0 and weak damping`,
    category: R`9.3 Damped oscillations`,
    type: "herleitung",
    front: R`Set up the equation of motion for a spring oscillator with friction force $F_R = -\kappa\dot x$, and define $\omega_0$ and $\rho$. Solve it for <b>weak damping</b> $\rho\lt\omega_0$. What is the frequency of the damped oscillation?`,
    back: R`$$m\ddot x = -kx-\kappa\dot x\;\Rightarrow\;\ddot x+\frac\kappa m\dot x+\frac kmx = 0\qquad(9.74,\,9.75)$$
$$\omega_0 := \sqrt{\frac km},\qquad\rho := \frac{\kappa}{2m}\qquad(9.76)$$
$$\ddot x+2\rho\dot x+\omega_0^2x = 0\qquad(9.77)$$
Characteristic equation and discriminant:
$$\lambda^2+2\rho\lambda+\omega_0^2 = 0,\qquad\Delta = 4(\rho^2-\omega_0^2)\qquad(9.78,\,9.79)$$
<b>Weak damping</b> ($\rho\lt\omega_0$, $\Delta\lt0$):
$$x(t) = (C_1\cos\omega t+C_2\sin\omega t)\,e^{-\rho t} = A\,e^{-\rho t}\sin(\omega t+\delta),\qquad\omega = \sqrt{\omega_0^2-\rho^2}\qquad(9.80\text{–}9.82)$$
with $A = \sqrt{C_1^2+C_2^2}$, $\sin\delta = C_1/A$, $\cos\delta = C_2/A$ (9.83–9.85). It holds that $\omega\lt\omega_0$; the oscillation has an exponentially decaying amplitude $\tilde A = Ae^{-\rho t}$.`,
    meta: R`Script: section 9.3.1, Eqs. (9.74)–(9.85), Fig. 9.11, pp. 238–240`,
    explanation: R`<b>Intuition:</b> Friction takes away some energy in each oscillation. The amplitude shrinks geometrically (same factor per period), hence exponentially. At the same time friction slows the motion, so each oscillation takes slightly longer: $\omega\lt\omega_0$.<br><br>
<b>Meaning of $\rho$:</b> decay rate of the <i>amplitude</i> (unit $\text{s}^{-1}$); after $1/\rho$ the amplitude has fallen to $1/e$. The energy falls twice as fast ($e^{-2\rho t}$, 9.3.3).<br><br>
<b>Dependencies:</b> $\omega = \omega_0\sqrt{1-(\rho/\omega_0)^2}\approx\omega_0\left(1-\frac{\rho^2}{2\omega_0^2}\right)$. The frequency shift is quadratic in the damping, so for weak damping it is tiny.<br><br>
<b>Connection:</b> Solution theory of linear ODEs with constant coefficients (Ch. 12.4.1); the three cases correspond to the sign of the discriminant. The logarithmic decrement $\Lambda = \ln\frac{x(t)}{x(t+T)} = \rho T$ is used in the laboratory to measure $\rho$.`,
    derivation: R`<ol class="fc-steps">
<li>$\lambda_{1,2} = -\rho\pm\sqrt{\rho^2-\omega_0^2}$<em>Solutions of the quadratic equation (9.78).</em></li>
<li>$\rho\lt\omega_0$: $\lambda_{1,2} = -\rho\pm i\omega$, $\omega = \sqrt{\omega_0^2-\rho^2}$<em>Negative discriminant, complex conjugate roots (9.81).</em></li>
<li>$x = e^{-\rho t}\left(\tilde C_1e^{i\omega t}+\tilde C_2e^{-i\omega t}\right)$<em>Superposition of both exponential solutions; common factor $e^{-\rho t}$.</em></li>
<li>$x = e^{-\rho t}(C_1\cos\omega t+C_2\sin\omega t)$<em>Real form as for the undamped oscillator (9.80).</em></li>
<li>$C_1\cos\omega t + C_2\sin\omega t = A\sin(\omega t+\delta)$<em>Addition theorem with $C_1 = A\sin\delta$, $C_2 = A\cos\delta$ (9.82–9.85).</em></li>
</ol>`,
    example: R`$m = 0{,}5\,\text{kg}$, $k = 200\,\text{N/m}$, $\kappa = 2\,\text{kg/s}$: $\omega_0 = 20\,\text{s}^{-1}$, $\rho = 2\,\text{s}^{-1}$, $\omega = \sqrt{396} = 19{,}90\,\text{s}^{-1}$ (only 0.5 % smaller). Per period ($T = 0{,}316\,\text{s}$) the amplitude falls to $e^{-\rho T} = 0{,}53$; after 5 periods to 4 %.`,
    counterexample: R`<b>Coulomb friction</b> (dry sliding friction, $F_R = -\mu mg\,\text{sgn}\,\dot x$): not proportional to the velocity. The amplitude then decreases by a <i>fixed amount</i> $2\mu mg/k$ per half period, i.e. linearly instead of exponentially, and the motion stops after a finite number of oscillations. The formulas of this section hold only for $F_R\propto-\dot x$.`,
    pitfalls: R`<ul><li>Setting $\rho = \kappa/m$ instead of $\kappa/(2m)$.</li>
<li>Assuming the damped frequency equals $\omega_0$.</li>
<li>Confusing the decay rate of the amplitude ($\rho$) with that of the energy ($2\rho$).</li></ul>`
  },
  "ph9_aperiodisch": {
    title: R`Aperiodic limiting case and creeping case (ρ = ω₀ and ρ > ω₀)`,
    category: R`9.3 Damped oscillations`,
    type: "konzept",
    front: R`What do the solutions of the damped oscillator look like for <b>critical damping</b> $\rho = \omega_0$ and <b>overcritical damping</b> $\rho\gt\omega_0$? Why can the body change direction at most once? What is the aperiodic limiting case used for?`,
    back: R`<b>Critical damping</b> ($\rho = \omega_0$, $\Delta = 0$, double root $\lambda = -\rho$):
$$x(t) = (C_1+C_2t)\,e^{-\rho t}\qquad(9.86)$$
"Asymptotic limiting case": $\omega\to0$, $T\to\infty$ (Fig. 9.12). $x\to0$; $\dot x$ becomes zero at most once.<br><br>
<b>Overcritical damping, creeping case</b> ($\rho\gt\omega_0$, $\Delta\gt0$):
$$x(t) = C_1e^{\lambda_1t}+C_2e^{\lambda_2t},\qquad\lambda_{1,2} = -\rho\pm\sqrt{\rho^2-\omega_0^2}\lt0\qquad(9.87,\,9.88)$$
$\lim_{t\to\infty}x = 0$ (9.89). Change of direction only if $\dot x = C_1\lambda_1e^{\lambda_1t}+C_2\lambda_2e^{\lambda_2t} = 0$, i.e.
$$e^{(\lambda_1-\lambda_2)t} = -\frac{\lambda_2C_2}{\lambda_1C_1}\qquad(9.90,\,9.91)$$
This equation has at most one solution: the carriage changes direction at most once and then creeps towards the zero point (Fig. 9.13).`,
    meta: R`Script: section 9.3.1, cases 2–3, Eqs. (9.86)–(9.91), Figs. 9.12–9.13, pp. 240–241`,
    explanation: R`<b>Intuition:</b> With strong friction the system "creeps like syrup" back to the rest position without overshooting. The spring can no longer throw the body beyond the rest position.<br><br>
<b>Why is the limiting case the fastest?</b> In the creeping case, for long times the slowly decaying term with $\lambda_1 = -\rho+\sqrt{\rho^2-\omega_0^2}$ dominates; its magnitude becomes <i>smaller</i> with increasing damping (for $\rho\gg\omega_0$: $\lambda_1\approx-\omega_0^2/(2\rho)$). Too much friction thus makes the system sluggish. At $\rho = \omega_0$ the decay rate reaches its maximum $\omega_0$ without overshooting.<br><br>
<b>Dependencies:</b> Critical friction constant $\kappa_c = 2m\omega_0 = 2\sqrt{km}$.<br><br>
<b>Applications:</b> Car shock absorbers (slightly under-critical, for comfort), pointer measuring instruments, door closers, control loops: one wants to come to rest quickly without oscillating.`,
    derivation: R`Why $(C_1 + C_2t)e^{-\rho t}$ solves the ODE in the limiting case:
<ol class="fc-steps">
<li>$x = te^{-\rho t}$: $\dot x = (1-\rho t)e^{-\rho t}$<em>Product rule.</em></li>
<li>$\ddot x = (-2\rho+\rho^2t)e^{-\rho t}$<em>Differentiate again.</em></li>
<li>$\ddot x+2\rho\dot x+\rho^2x = e^{-\rho t}\left[-2\rho+\rho^2t+2\rho-2\rho^2t+\rho^2t\right] = 0$<em>Insert with $\omega_0 = \rho$: everything cancels.</em></li>
<li>$x = (C_1+C_2t)e^{-\rho t}$<em>Together with $e^{-\rho t}$ two independent solutions (9.86).</em></li>
<li>$\dot x = 0\Leftrightarrow C_2 - \rho(C_1+C_2t) = 0$<em>Linear equation in $t$: at most one change of direction.</em></li>
</ol>`,
    example: R`For $m = 0{,}5\,\text{kg}$, $k = 200\,\text{N/m}$: $\kappa_c = 2\sqrt{200\cdot0{,}5} = 20\,\text{kg/s}$.<br>
Start at $x_0 = 5\,\text{cm}$ from rest, critically damped: $C_1 = x_0$, $C_2 = \rho x_0$, so $x = x_0(1+20t)e^{-20t}$. After $0{,}25\,\text{s}$: $x = 0{,}05\cdot6\cdot e^{-5}\,\text{m} = 2{,}0\,\text{mm}$; undamped, it would already have swung almost once back and forth by that time.`,
    counterexample: R`<b>A change of direction is possible:</b> "The creeping case is monotonic" is not correct. If one gives the body a strong kick from rest ($x_0 = 0$, $v_0\ne0$), it first runs away, turns around once and then creeps back. Only a <i>second</i> change of direction (i.e. a true overshoot and return) is impossible.`,
    pitfalls: R`<ul><li>In the limiting case using only $Ce^{-\rho t}$ (one constant too few).</li>
<li>Believing that more damping always brings the system to rest faster.</li>
<li>Distinguishing the cases by $\rho$ vs. $\omega$ instead of $\rho$ vs. $\omega_0$.</li></ul>`
  },
  "ph9_analogien_tab91": {
    title: R`Analogy: linear oscillation, torsional oscillation, electrical oscillating circuit (Tab. 9.1)`,
    category: R`9.3 Damped oscillations`,
    type: "konzept",
    front: R`Write down side by side the equations of motion of the damped spring oscillator, the damped <b>torsional oscillation</b> and the <b>RLC oscillating circuit</b>. Which quantities correspond to each other, and what are $\omega_0$ and $\rho$ in each case?`,
    back: R`All three lead to the same type of ODE (Tab. 9.1):
<ul><li><b>Linear:</b> $m\ddot x = F+F_R+F_\text{ext}$, $F = -kx$, $F_R = -2m\rho\dot x$:<br>$\ddot x+2\rho\dot x+\omega_0^2x = F_\text{ext}/m$, $\omega_0 = \sqrt{k/m}$</li>
<li><b>Torsional oscillation:</b> $J\ddot\varphi = M+M_R+M_\text{ext}$, $M = -\kappa\varphi$ (restoring torque $\kappa$), $M_R = -2J\rho\dot\varphi$:<br>$\ddot\varphi+2\rho\dot\varphi+\omega_0^2\varphi = M_\text{ext}/J$, $\omega_0 = \sqrt{\kappa/J}$</li>
<li><b>Oscillating circuit:</b> $U_\text{ext} = U_L+U_R+U_C$, $U_L = L\dot I$, $U_R = RI$, $U_C = Q/C$, $I = \dot Q$:<br>$\ddot Q+2\rho\dot Q+\omega_0^2Q = U_\text{ext}/L$, $\omega_0 = 1/\sqrt{LC}$, $2\rho = R/L$</li></ul>
Correspondences: $x\leftrightarrow\varphi\leftrightarrow Q$; $m\leftrightarrow J\leftrightarrow L$; $k\leftrightarrow\kappa\leftrightarrow1/C$; $2m\rho\leftrightarrow2J\rho\leftrightarrow R$; $F_\text{ext}\leftrightarrow M_\text{ext}\leftrightarrow U_\text{ext}$.`,
    meta: R`Script: section 9.3.2, Tab. 9.1, Figs. 9.14–9.16, pp. 241–243`,
    explanation: R`<b>Intuition:</b> Physically completely different systems have the same mathematics: an inertia (which resists change), a restoring element (which pulls back to the rest position) and a dissipation (which converts energy into heat). Whoever has understood one oscillator knows all of them.<br><br>
<b>Forms of energy:</b> kinetic energy $\tfrac12mv^2$ ↔ rotational energy $\tfrac12J\omega^2$ ↔ magnetic field energy $\tfrac12LI^2$; spring energy $\tfrac12kx^2$ ↔ torsional energy $\tfrac12\kappa\varphi^2$ ↔ electric field energy $\tfrac{Q^2}{2C}$; frictional heat ↔ Joule heat $RI^2$.<br><br>
<b>Dependencies:</b> More inertia lowers the frequency ($\omega_0\propto1/\sqrt{m},\,1/\sqrt{J},\,1/\sqrt{L}$); more stiffness raises it ($\sqrt{k},\,\sqrt\kappa,\,1/\sqrt{C}$). Caution: for a capacitor a <i>small</i> capacitance corresponds to a stiff spring.<br><br>
<b>Connection:</b> Torsion pendulum (Cavendish, Ch. 7) and the balance wheel in mechanical clocks are torsional oscillators; the oscillating circuit is the core of every radio receiver (resonance, 9.4).`,
    derivation: R`Oscillating circuit step by step (without external voltage):
<ol class="fc-steps">
<li>$L\dot I + RI + \dfrac QC = 0$<em>Kirchhoff loop rule: the voltages across coil, resistor and capacitor sum to zero.</em></li>
<li>$L\ddot Q + R\dot Q + \dfrac1CQ = 0$<em>Insert $I = \dot Q$.</em></li>
<li>$\ddot Q + \dfrac RL\dot Q + \dfrac1{LC}Q = 0$<em>Divide by $L$.</em></li>
<li>$2\rho = \dfrac RL$, $\omega_0^2 = \dfrac1{LC}$<em>Compare coefficients with (9.77).</em></li>
<li>Critical for $\rho = \omega_0$: $R_c = 2\sqrt{L/C}$<em>Analogous to $\kappa_c = 2\sqrt{km}$.</em></li>
</ol>`,
    example: R`<b>Oscillating circuit:</b> $L = 1\,\text{mH}$, $C = 1\,\text{nF}$: $\omega_0 = 10^6\,\text{s}^{-1}$, $\nu_0 = 159\,\text{kHz}$. With $R = 10\,\Omega$: $\rho = 5000\,\text{s}^{-1}$, $\rho/\omega_0 = 0{,}005$ (weakly damped). $R_c = 2\sqrt{10^{-3}/10^{-9}} = 2\,\text{k}\Omega$.<br>
<b>Torsion pendulum:</b> $\kappa = 10^{-3}\,\text{N m/rad}$, $J = 10^{-4}\,\text{kg m}^2$: $\omega_0 = 3{,}16\,\text{s}^{-1}$, $T = 2\,\text{s}$.`,
    counterexample: R`<b>Not every analogy holds:</b> A pendulum is a harmonic torsional oscillator only for small angles ($M = -mg\ell\sin\varphi$). An oscillating circuit with an iron-core coil (saturation, $L$ depends on $I$) is nonlinear. The analogy holds for the linearised equations.`,
    pitfalls: R`<ul><li>Assigning $C$ instead of $1/C$ to the spring constant.</li>
<li>Forgetting the factor 2 in $2\rho = R/L$.</li>
<li>Confusing the restoring torque $\kappa$ (torsion spring) with the friction constant $\kappa$ from (9.75); the script uses the same symbol.</li></ul>`
  },
  "ph9_energie_gedaempft_guete": {
    title: R`Energy balance of the damped oscillation and quality factor Q`,
    category: R`9.3 Damped oscillations`,
    type: "herleitung",
    front: R`Show that with damping $\frac{d}{dt}(E_\text{kin}+E_\text{pot}) = P_R$ holds. For weak damping derive $E(t) = E_0e^{-2\rho t}$ and the <b>quality factor</b> $Q = 2\pi\tau/T$.`,
    back: R`Multiplying (9.77) by $m\dot x$:
$$\frac{d}{dt}\left(\tfrac12m\dot x^2+\tfrac12m\omega_0^2x^2\right) = -2\rho m\dot x^2 = F_R\cdot\dot x = P_R\qquad(9.92\text{–}9.95)$$
The energy decreases with the friction power $P_R\le0$.<br><br>
<b>Weak damping</b> $\rho\ll1/T$ (9.96): over one period $e^{-\rho t}\approx$ constant, so $\langle E_\text{kin}\rangle_T = \tfrac12E_\text{tot} = \tfrac12m\langle\dot x^2\rangle_T$ (9.97):
$$\bar P_R = -2\rho m\langle\dot x^2\rangle_T = -2\rho E_\text{tot}\;\Rightarrow\;\dot E_\text{tot} = -2\rho E_\text{tot}\;\Rightarrow\;E_\text{tot} = E_0e^{-2\rho t} = E_0e^{-t/\tau},\quad\tau = \frac1{2\rho}\qquad(9.98\text{–}9.102)$$
<b>Quality factor:</b>
$$Q := 2\pi\frac{E_\text{tot}}{E_\text{tot}(t)-E_\text{tot}(t+T)} = \frac{2\pi}{1-e^{-T/\tau}}\approx2\pi\frac\tau T\qquad(9.103\text{–}9.106)$$
$Q = 2\pi\times$ (stored energy)/(energy loss per period) $= \omega\tau\approx\omega_0/(2\rho)$.`,
    meta: R`Script: section 9.3.3, Eqs. (9.92)–(9.106), pp. 243–245`,
    explanation: R`<b>Intuition:</b> $Q$ counts how many oscillations (times $2\pi$) the oscillator performs before its energy has fallen to $1/e$. A tuning fork ($Q\sim10^3$) rings on for a long time, a shock absorber ($Q\lt1$) not at all.<br><br>
<b>Dependencies:</b> $\tau = 1/(2\rho)$ is the lifetime of the <i>energy</i>; the amplitude lives twice as long ($1/\rho$). $Q\propto1/\rho$: half the damping, double the quality.<br><br>
<b>Connection with resonance:</b> The same $Q$ determines the peak height of the driven oscillator $|x_0|_\text{res}/|x_0|_{\Omega\to0}\approx Q$ and the width of the power resonance $\Delta\Omega\approx\omega_0/Q$ (9.4). High quality means sharp, high resonance, but a long settling time.<br><br>
<b>Examples of $Q$:</b> quartz clock $\sim10^4$–$10^6$, microwave resonators up to $10^{10}$, atoms (optical transitions) $\sim10^{7}$–$10^{15}$.`,
    derivation: R`<ol class="fc-steps">
<li>$m\dot x\ddot x+2\rho m\dot x^2+m\omega_0^2x\dot x = 0$<em>(9.77) times $m\dot x$ (9.92).</em></li>
<li>$\dfrac{d}{dt}E_\text{tot} = -2\rho m\dot x^2$<em>As in the undamped case; the friction term remains (9.93).</em></li>
<li>$\overline{\dot E} = -2\rho\cdot m\langle\dot x^2\rangle = -2\rho\cdot2\langle E_\text{kin}\rangle = -2\rho E_\text{tot}$<em>Average over the period with $\langle E_\text{kin}\rangle = \tfrac12E_\text{tot}$ (9.97–9.99).</em></li>
<li>$E_\text{tot}(t) = E_0e^{-2\rho t}$<em>Solution of $\dot E = -2\rho E$ (9.101).</em></li>
<li>$1-e^{-T/\tau}\approx\dfrac T\tau$<em>First-order Taylor expansion, since $\tau\gg T$ (9.105).</em></li>
<li>$Q = 2\pi\dfrac{\tau}{T} = \omega\tau = \dfrac{\omega}{2\rho}$<em>Insert (9.106).</em></li>
</ol>`,
    example: R`Spring oscillator with $\omega_0 = 20\,\text{s}^{-1}$, $\rho = 2\,\text{s}^{-1}$: $\tau = 0{,}25\,\text{s}$, $Q\approx5$. Per period $e^{-2\rho T} = 28\,\%$ of the energy remains.<br>
<b>Tuning fork</b> at $440\,\text{Hz}$, energy falls to $1/e$ in $\tau = 2\,\text{s}$: $Q = 2\pi\cdot440\cdot2\approx5500$.`,
    counterexample: R`<b>Strong damping:</b> For $\rho\to\omega_0$ the approximation $\tau\gg T$ is wrong, and the averaging over one period no longer holds. "$Q = \omega_0/(2\rho) = 0{,}5$" in the aperiodic limiting case is only a formal characteristic number, not an "energy loss per oscillation".`,
    pitfalls: R`<ul><li>Confusing $\tau = 1/\rho$ (amplitude) with $\tau = 1/(2\rho)$ (energy).</li>
<li>Defining $Q$ without the factor $2\pi$ (then $Q$ is the number of periods until $1/e$).</li>
<li>Assuming $P_R$ is positive (it is a loss power, $\le0$).</li></ul>`
  },

  // ========================================================================
  // 9.4 FORCED OSCILLATIONS, RESONANCE
  // ========================================================================
  "ph9_erzwungen_ansatz": {
    title: R`Forced oscillation: transient and steady-state solution`,
    category: R`9.4 Forced oscillations, resonance`,
    type: "konzept",
    front: R`A damped oscillator is driven by $F_\text{ext} = F_0\cos\Omega t$. How is the general solution built up, what happens to the free oscillation, and with which frequency does the oscillator swing after the <b>transient process</b>?`,
    back: R`$$\ddot x+2\rho\dot x+\omega_0^2x = \frac{F_0}m\cos\Omega t\qquad(9.107,\,9.108)$$
General solution of the inhomogeneous ODE = general homogeneous solution + one particular solution (Ch. 12.4.2):
$$x(t) = x_h(t)+x_p(t)\qquad(9.109)$$
Homogeneous part (damped free oscillation):
$$x_h(t) = A_0e^{-\rho t}\cos(\omega t+\delta)\;\xrightarrow{t\gg1/\rho}\;0\qquad(9.110\text{–}9.112)$$
After the <b>transient process</b> only $x(t)\to x_p(t)$ remains (9.113): the oscillator swings with the <b>driving frequency</b> $\Omega$, not with its natural frequency. Ansatz:
$$x_p = x_0e^{i\Omega t},\quad x_0\in\mathbb C,\qquad F_\text{ext} = \text{Re}\{F_0e^{i\Omega t}\}\qquad(9.114,\,9.116)$$
In the end one takes $\text{Re}(x_p)$.`,
    meta: R`Script: section 9.4.1, Eqs. (9.107)–(9.114), pp. 245–246`,
    explanation: R`<b>Intuition:</b> When the force is switched on, the oscillator first reacts with a mixture of free oscillation and forced motion (often a beat pattern is visible). The free oscillation dies out with the damping; what remains is what the force imposes. A child on a swing that is pushed from outside in its own rhythm ends up following that rhythm.<br><br>
<b>Why periodicity is no restriction:</b> Every force can be split into harmonic components (Fourier, 9.6). Because of linearity the oscillator responds to each component independently, and the responses add up.<br><br>
<b>Dependencies:</b> The settling time is $\sim1/\rho = 2\tau$; with high quality it takes correspondingly long until the steady state is reached.<br><br>
<b>Connection:</b> The structure "homogeneous + particular" is known from linear algebra (the solution set is an affine space, Linalg) and from Ch. 12.`,
    derivation: R`Why the particular solution suffices:
<ol class="fc-steps">
<li>$\mathcal L[x] := \ddot x+2\rho\dot x+\omega_0^2x$ is linear<em>$\mathcal L[x_h+x_p] = \mathcal L[x_h]+\mathcal L[x_p]$.</em></li>
<li>$\mathcal L[x_h] = 0$, $\mathcal L[x_p] = \dfrac{F_0}m\cos\Omega t$<em>So $x_h+x_p$ solves the full equation (9.109).</em></li>
<li>$|x_h|\le A_0e^{-\rho t}$<em>The homogeneous solution decays exponentially for $\rho\gt0$ (9.111).</em></li>
<li>$t\gg1/\rho\Rightarrow x\approx x_p$<em>Initial conditions determine only $x_h$ and are "forgotten" (9.112, 9.113).</em></li>
<li>$\mathcal L[x_0e^{i\Omega t}] = (-\Omega^2+2i\rho\Omega+\omega_0^2)x_0e^{i\Omega t}$<em>With the exponential ansatz $\mathcal L$ becomes a multiplication (9.115).</em></li>
</ol>`,
    example: R`Oscillator with $\rho = 2\,\text{s}^{-1}$: after $t = 5/\rho = 2{,}5\,\text{s}$ the free oscillation has decayed to $e^{-5} = 0{,}7\,\%$.<br>
Tuning fork as driver of a second one ($\rho\approx0{,}25\,\text{s}^{-1}$): the build-up takes about $20\,\text{s}$.`,
    counterexample: R`<b>Without damping</b> ($\rho = 0$) the free oscillation never dies out. There is no steady state in the strict sense; the motion remains a superposition of two frequencies (beat), and at $\Omega = \omega_0$ the amplitude even grows linearly with time ($x\propto t\sin\omega_0t$).`,
    pitfalls: R`<ul><li>Assuming the oscillator swings in a steady state with $\omega_0$ or $\omega$.</li>
<li>Forgetting the homogeneous solution at short times.</li>
<li>Not taking the real part at the end.</li></ul>`
  },
  "ph9_resonanzkurve": {
    title: R`Resonance: magnification function V(η, ξ), phase δ₀ and Ω_res = ω₀√(1−2ξ²)`,
    category: R`9.4 Forced oscillations, resonance`,
    type: "herleitung",
    front: R`Using $x_p = x_0e^{i\Omega t}$, calculate the complex amplitude $x_0$ of the driven oscillator. What are the modulus (magnification function) and the phase in the dimensionless variables $\eta = \Omega/\omega_0$, $\xi = \rho/\omega_0$? Where is the maximum of the amplitude?`,
    back: R`Insert into (9.108):
$$x_0\left(-\Omega^2+2i\rho\Omega+\omega_0^2\right) = \frac{F_0}m\;\Rightarrow\;x_0 = \frac{F_0/m}{(\omega_0^2-\Omega^2)+2i\rho\Omega}\qquad(9.115\text{–}9.117)$$
With $x_0 = |x_0|e^{i\delta_0}$ and $a_0 = F_0/m$ (9.118):
$$V := \frac{|x_0|}{a_0} = \frac1{\sqrt{(\omega_0^2-\Omega^2)^2+4\rho^2\Omega^2}},\qquad\delta_0 = \arctan\frac{-2\rho\Omega}{\omega_0^2-\Omega^2}\qquad(9.119)$$
$$V(\eta,\xi) = \frac{1}{\omega_0^2\sqrt{(1-\eta^2)^2+4\xi^2\eta^2}},\qquad\delta_0 = \arctan\frac{-2\xi\eta}{1-\eta^2}\qquad(9.120\text{–}9.122)$$
<b>Amplitude resonance:</b> $\partial V/\partial\eta = 0$ gives
$$\eta_\text{res} = \sqrt{1-2\xi^2},\qquad\Omega_\text{res} = \omega_0\sqrt{1-2\xi^2}\qquad(9.123\text{–}9.125)$$
always smaller than $\omega_0$. The damping limits the amplitude (Fig. 9.17).`,
    meta: R`Script: sections 9.4.2–9.4.3, Eqs. (9.115)–(9.125), Fig. 9.17, pp. 246–248`,
    explanation: R`<b>Intuition:</b> If one drives at the natural frequency, the pushes add up period after period, until friction consumes as much as is supplied. The smaller the damping, the higher and narrower the peak.<br><br>
<b>Dependencies:</b> $|x_0|\propto F_0$ (linear). The height of the resonance peak relative to the static deflection is $\approx\frac1{2\xi} = Q$. The resonance frequency shifts downwards, but only quadratically in $\xi$; for $\xi\ge1/\sqrt2$ there is no maximum at all (the curve falls monotonically).<br><br>
<b>Phase:</b> $\delta_0$ runs from $0$ (far below) through $-\pi/2$ (at $\eta = 1$, independent of $\xi$) to $-\pi$ (far above). The oscillator always lags behind the driver.<br><br>
<b>Three resonance frequencies:</b> $\omega_0$ (undamped, power resonance), $\omega = \sqrt{\omega_0^2-\rho^2}$ (free damped oscillation), $\Omega_\text{res} = \sqrt{\omega_0^2-2\rho^2}$ (amplitude maximum). For weak damping they practically coincide.`,
    derivation: R`<ol class="fc-steps">
<li>$x_0 = \dfrac{a_0\left[(\omega_0^2-\Omega^2)-2i\rho\Omega\right]}{(\omega_0^2-\Omega^2)^2+4\rho^2\Omega^2}$<em>Expand with the complex conjugate of the denominator.</em></li>
<li>$|x_0| = \dfrac{a_0}{\sqrt{(\omega_0^2-\Omega^2)^2+4\rho^2\Omega^2}}$<em>Modulus of a quotient = quotient of the moduli (9.119).</em></li>
<li>$\tan\delta_0 = \dfrac{\text{Im}\,x_0}{\text{Re}\,x_0} = \dfrac{-2\rho\Omega}{\omega_0^2-\Omega^2}$<em>Phase; $\text{Im}\,x_0\lt0$, so $-\pi\lt\delta_0\lt0$.</em></li>
<li>$V$ maximal $\Leftrightarrow g(\eta) = (1-\eta^2)^2+4\xi^2\eta^2$ minimal<em>Minimise the denominator (9.123).</em></li>
<li>$g'(\eta) = -4\eta(1-\eta^2)+8\xi^2\eta = 4\eta(\eta^2-1+2\xi^2) = 0$<em>Differentiate.</em></li>
<li>$\eta_\text{res}^2 = 1-2\xi^2$<em>Non-trivial zero; exists only for $\xi\lt1/\sqrt2$ (9.124, 9.125).</em></li>
</ol>`,
    example: R`$\xi = 0{,}1$: $\eta_\text{res} = \sqrt{0{,}98} = 0{,}990$; $\omega_0^2V_{\max} = 5{,}03$ (at $\eta = 1$: exactly $5{,}00$). The peak is thus 5 times higher than the static deflection $a_0/\omega_0^2 = F_0/k$.<br>
Phase at $\eta = 0{,}5$: $-7{,}6^\circ$; at $\eta = 1$: $-90^\circ$; at $\eta = 2$: $-172{,}4^\circ$.`,
    counterexample: R`<b>"Resonance at $\omega_0$" for the amplitude:</b> For $\xi = 0{,}5$ the amplitude maximum lies at $\eta = 0{,}71$, i.e. almost 30 % below $\omega_0$. And for $\xi\ge0{,}707$ there is no amplitude peak at all. Equating "resonance = natural frequency" holds only for the power or for weak damping.`,
    pitfalls: R`<ul><li>$\arctan$ without regard to the quadrant: for $\eta\gt1$, $\delta_0$ lies between $-\pi/2$ and $-\pi$, not positive.</li>
<li>Confusing $V$ with $|x_0|$ (factor $a_0$).</li>
<li>Assuming the resonance peak is infinite as soon as there is any damping.</li></ul>`
  },
  "ph9_resonanz_grenzfaelle": {
    title: R`Resonance: three limiting cases (spring, damping and inertia regions)`,
    category: R`9.4 Forced oscillations, resonance`,
    type: "konzept",
    front: R`Discuss amplitude and phase of the driven oscillator in the three cases $\Omega\ll\omega_0$, $\Omega\approx\omega_0$ and $\Omega\gg\omega_0$. Which physical quantity determines the amplitude in each case?`,
    back: R`<b>1) Far below resonance</b> ($\eta\to0$):
$$|x_0| = \frac{a_0}{\omega_0^2} = \frac{F_0}{k},\qquad\delta_0 = 0\qquad(9.126,\,9.127)$$
Damping plays no role; the restoring force determines the (small) amplitude; the oscillator swings <b>in phase</b> with the driver. At $\Omega = 0$: static deflection.<br><br>
<b>2) Near resonance</b> ($\eta\to1$):
$$|x_0| = \frac{a_0}{2\rho\omega_0},\qquad\delta_0 = -\frac\pi2,\qquad\text{Re}(x) = |x_0|\sin\Omega t\qquad(9.128\text{–}9.130)$$
The damping limits the amplitude. Velocity and force are in phase: energy is supplied to the oscillator at every position.<br><br>
<b>3) Far above resonance</b> ($\eta\gg1$):
$$|x_0| = \frac{a_0}{\Omega^2},\qquad\delta_0 = -\pi\qquad(9.131,\,9.132)$$
Only the inertia determines the (small) amplitude, $\to0$ for $\Omega\to\infty$; the oscillator swings <b>in antiphase</b>.`,
    meta: R`Script: section 9.4.3, Eqs. (9.126)–(9.132), Fig. 9.17, pp. 248–249`,
    explanation: R`<b>Intuition:</b> If you move a weight on a rubber band slowly up and down, it follows obediently (the spring dominates). Shaken quickly, it stays almost at rest and moves, if at all, opposite to the hand (the mass dominates). At the right rhythm it builds up (only friction limits it).<br><br>
<b>Which term dominates?</b> In the denominator $\omega_0^2-\Omega^2+2i\rho\Omega$: for small $\Omega$ the spring term $\omega_0^2$, for large $\Omega$ the inertia term $-\Omega^2$ (negative: phase $-\pi$); at $\Omega = \omega_0$ both cancel, and the purely imaginary damping term remains (phase $-\pi/2$).<br><br>
<b>Dependencies:</b> Below: $|x_0|$ independent of $\Omega$ and $m$. At resonance: $|x_0|\propto1/\rho$. Above: $|x_0|\propto1/(m\Omega^2)$.<br><br>
<b>Applications:</b> vibration isolation (machines on soft springs, $\Omega\gg\omega_0$), seismometers (a heavy mass on a soft spring stays at rest, $\Omega\gg\omega_0$), acceleration sensors (stiff spring, $\Omega\ll\omega_0$).`,
    derivation: R`<ol class="fc-steps">
<li>$x_0 = \dfrac{a_0}{\omega_0^2-\Omega^2+2i\rho\Omega}$<em>Starting point (9.117).</em></li>
<li>$\Omega\to0$: $x_0\to\dfrac{a_0}{\omega_0^2}$, real and positive<em>Phase $0$ (9.126, 9.127).</em></li>
<li>$\Omega = \omega_0$: $x_0 = \dfrac{a_0}{2i\rho\omega_0} = \dfrac{a_0}{2\rho\omega_0}e^{-i\pi/2}$<em>$1/i = -i = e^{-i\pi/2}$ (9.128, 9.129).</em></li>
<li>$\text{Re}\left(x_0e^{i\Omega t}\right) = \dfrac{a_0}{2\rho\omega_0}\cos(\Omega t-\tfrac\pi2) = |x_0|\sin\Omega t$<em>At resonance $\dot x\propto\cos\Omega t$, hence in phase with $F$ (9.130).</em></li>
<li>$\Omega\gg\omega_0$: $x_0\approx\dfrac{a_0}{-\Omega^2} = \dfrac{a_0}{\Omega^2}e^{-i\pi}$<em>Negative real: antiphase (9.131, 9.132).</em></li>
</ol>`,
    example: R`Oscillator $m = 0{,}5\,\text{kg}$, $k = 200\,\text{N/m}$, $\rho = 2\,\text{s}^{-1}$, $F_0 = 1\,\text{N}$:<br>
$\Omega\to0$: $|x_0| = F_0/k = 5\,\text{mm}$; $\Omega = \omega_0$: $\frac{2}{2\cdot2\cdot20}\,\text{m} = 2{,}5\,\text{cm}$ (5-fold); $\Omega = 100\,\text{s}^{-1}$: $\approx\frac{2}{10^4}\,\text{m} = 0{,}2\,\text{mm}$.`,
    counterexample: R`<b>"At resonance displacement and force are in phase":</b> False – at resonance the <i>velocity</i> is in phase with the force, the displacement lags by $90^\circ$. That is exactly the reason for maximum energy supply: $P = F\dot x$ is then always positive.`,
    pitfalls: R`<ul><li>Confusing the phase of the displacement with that of the velocity.</li>
<li>Believing that above resonance the motion vanishes completely (it becomes small, $\propto\Omega^{-2}$).</li>
<li>Calculating with $F_0/k$ in the damping region.</li></ul>`
  },
  "ph9_leistungsresonanz": {
    title: R`Energy balance of the forced oscillation and power resonance at Ω = ω₀`,
    category: R`9.4 Forced oscillations, resonance`,
    type: "herleitung",
    front: R`What is the power $\langle P\rangle$ supplied on average over one period in the steady state? Show that the maximum (<b>power resonance</b>) lies exactly at $\Omega = \omega_0$, in contrast to the amplitude resonance.`,
    back: R`Energy balance (ODE times $\dot x$):
$$\frac{d}{dt}\underbrace{\left(\tfrac12m\dot x^2+\tfrac12m\omega_0^2x^2\right)}_{E_\text{Osz}} = -2m\rho\dot x^2+F_\text{ext}\dot x\qquad(9.133,\,9.134)$$
Steady state: $\dot E_\text{Osz} = 0\Rightarrow F_\text{ext}\dot x = 2m\rho\dot x^2$ – supplied power is converted into friction (9.135, 9.136).<br>
Mean power with $x = |x_0|\cos(\Omega t+\delta_0)$:
$$\langle P\rangle_{T_\Omega} = \frac1{T_\Omega}\int_0^{T_\Omega}F_\text{ext}\dot x\,dt = -\tfrac12F_0\Omega|x_0|\sin\delta_0\qquad(9.137\text{–}9.140)$$
With $|x_0|\sin\delta_0 = \text{Im}\,x_0$ (9.141, 9.142):
$$\langle P\rangle_{T_\Omega} = \frac{ma_0^2}{4\rho}\cdot\frac1{1+\left(\dfrac{\omega_0^2-\Omega^2}{2\rho\Omega}\right)^2} = \frac{ma_0^2}{4\omega_0\xi}\cdot\frac1{1+\left(\dfrac{1-\eta^2}{2\xi\eta}\right)^2}\qquad(9.143,\,9.144)$$
Maximum when the bracket term vanishes: $\Omega = \omega_0$ exactly, with $\langle P\rangle_{\max} = \frac{F_0^2}{4m\rho}$.`,
    meta: R`Script: section 9.4.4, Eqs. (9.133)–(9.144), Fig. 9.18, pp. 249–250`,
    explanation: R`<b>Intuition:</b> Power is force times velocity. It is maximal when the velocity is in phase with the force, and that is exactly the case at $\Omega = \omega_0$ (phase of the displacement $-\pi/2$). The amplitude, by contrast, is maximal slightly before, because there the displacement is larger, but the velocity is not quite in phase.<br><br>
<b>Dependencies:</b> $\langle P\rangle_{\max}\propto F_0^2/(m\rho)$: less damping means more absorbed power at resonance, but a narrower band. The half-width of the power curve is (supplement) $\Delta\Omega\approx2\rho = \omega_0/Q$.<br><br>
<b>Balance:</b> In the steady state the oscillator energy does not change on average; all the work supplied becomes heat. Without damping there would be no steady state.<br><br>
<b>Connection:</b> Absorption lines in spectroscopy have exactly this shape (Lorentz curve); microwave ovens and nuclear magnetic resonance (MRI) use power resonance.`,
    derivation: R`Averaging the power:
<ol class="fc-steps">
<li>$F_\text{ext}\dot x = F_0\cos\Omega t\cdot\left(-|x_0|\Omega\sin(\Omega t+\delta_0)\right)$<em>With (9.138, 9.139).</em></li>
<li>$\sin(\Omega t+\delta_0) = \sin\Omega t\cos\delta_0+\cos\Omega t\sin\delta_0$<em>Addition theorem.</em></li>
<li>$\langle\cos\Omega t\sin\Omega t\rangle = 0$, $\langle\cos^2\Omega t\rangle = \tfrac12$<em>Period averages.</em></li>
<li>$\langle P\rangle = -\tfrac12F_0\Omega|x_0|\sin\delta_0$<em>(9.140); positive, because $\delta_0\lt0$.</em></li>
<li>$\text{Im}\,x_0 = \dfrac{-2\rho\Omega\,a_0}{(\omega_0^2-\Omega^2)^2+4\rho^2\Omega^2}$<em>From (9.117) after expanding with the conjugate denominator.</em></li>
<li>$\langle P\rangle = \dfrac{ma_0^2\rho\Omega^2}{(\omega_0^2-\Omega^2)^2+4\rho^2\Omega^2} = \dfrac{ma_0^2}{4\rho}\dfrac{1}{1+\left(\frac{\omega_0^2-\Omega^2}{2\rho\Omega}\right)^2}$<em>$F_0 = ma_0$; divide numerator and denominator by $4\rho^2\Omega^2$ (9.143).</em></li>
</ol>`,
    example: R`$F_0 = 1\,\text{N}$, $m = 0{,}5\,\text{kg}$, $\rho = 2\,\text{s}^{-1}$: $\langle P\rangle_{\max} = \frac{1}{4\cdot0{,}5\cdot2}\,\text{W} = 0{,}25\,\text{W}$. Check via friction: $2m\rho\langle\dot x^2\rangle = 2\cdot0{,}5\cdot2\cdot\tfrac12(0{,}025\cdot20)^2 = 0{,}25\,\text{W}$ ✓.`,
    counterexample: R`<b>Equating the amplitude maximum with the power maximum:</b> For $\xi = 0{,}5$ the amplitude maximum lies at $0{,}71\,\omega_0$, but the power maximum exactly at $\omega_0$. A device tuned to maximum displacement does not absorb maximum power.`,
    pitfalls: R`<ul><li>Computing the power from complex quantities without taking the real part ($\langle P\rangle\neq F_0\Omega|x_0|$).</li>
<li>Overlooking the sign of $\sin\delta_0$.</li>
<li>Assuming that without damping the steady-state power is infinite; there is then no steady state.</li></ul>`
  },

  // ========================================================================
  // 9.5 SUPERPOSITION OF OSCILLATIONS
  // ========================================================================
  "ph9_ueberlagerung_gleiche_frequenz": {
    title: R`Superposition of two oscillations of the same frequency (phasor addition)`,
    category: R`9.5 Superposition of oscillations`,
    type: "herleitung",
    front: R`Two oscillations $x_1 = A_1\cos(\omega t+\delta_1)$ and $x_2 = A_2\cos(\omega t+\delta_2)$ are added. Using complex phasors, show that again a harmonic oscillation of the same frequency results, and calculate amplitude and phase. What results for phase differences $0$, $\pi$ and $\pi/2$?`,
    back: R`Phasors $z_k = A_ke^{i\delta_k}e^{i\omega t}$, $x_k = \text{Re}\,z_k$ (9.148–9.150):
$$z = z_1+z_2 = \left(A_1e^{i\delta_1}+A_2e^{i\delta_2}\right)e^{i\omega t} =: Ae^{i\delta}e^{i\omega t}\qquad(9.151\text{–}9.155)$$
Addition corresponds to the addition of two 2D vectors (Fig. 9.19):
$$A^2 = |z|^2 = z\cdot z^* = A_1^2+A_2^2+2A_1A_2\cos(\delta_1-\delta_2)\qquad(9.156\text{–}9.160)$$
$$\tan\delta = \frac{A_1\sin\delta_1+A_2\sin\delta_2}{A_1\cos\delta_1+A_2\cos\delta_2},\qquad x = A\cos(\omega t+\delta)\qquad(9.161\text{–}9.163)$$
<b>Special cases:</b>
<ul><li>in phase $\delta_1 = \delta_2$: $A = A_1+A_2$, $\delta = \delta_1$ (9.164–9.166)</li>
<li>in antiphase $\delta_1 = \delta_2+\pi$: $A = |A_1-A_2|$ (phase of the larger one) (9.167–9.169)</li>
<li>shifted by $\pi/2$: $A = \sqrt{A_1^2+A_2^2}$ (9.170–9.172)</li></ul>`,
    meta: R`Script: section 9.5.2, Eqs. (9.145)–(9.172), Figs. 9.19–9.22, pp. 250–255`,
    explanation: R`<b>Intuition:</b> Every oscillation is a rotating arrow. If both have the same frequency, they rotate rigidly together, and their sum arrow is a third arrow rotating just as fast. Its length follows from the law of cosines.<br><br>
<b>Interference:</b> The term $2A_1A_2\cos(\delta_1-\delta_2)$ decides between reinforcement (constructive) and weakening (destructive). For equal amplitudes the range runs from $2A_1$ down to $0$ (cancellation). At $\pi/2$ the energies add ($A^2 = A_1^2+A_2^2$), without an interference term.<br><br>
<b>Dependencies:</b> The intensity (energy) is $\propto A^2$, not $\propto A_1^2 + A_2^2$: two in-phase sources deliver four times the intensity of one, not twice; averaged over all phase relations (incoherent) one obtains twice.<br><br>
<b>Connection:</b> Basis of wave optics (interference, Physics II), of AC circuit analysis (phasor diagrams) and of noise-cancelling headphones (anti-sound).`,
    derivation: R`<ol class="fc-steps">
<li>$A^2 = \left(A_1e^{i\delta_1}+A_2e^{i\delta_2}\right)\left(A_1e^{-i\delta_1}+A_2e^{-i\delta_2}\right)$<em>Squared modulus; $e^{i\omega t}$ cancels with $e^{-i\omega t}$ (9.157).</em></li>
<li>$= A_1^2+A_2^2+A_1A_2\left(e^{i(\delta_1-\delta_2)}+e^{-i(\delta_1-\delta_2)}\right)$<em>Expand (9.158).</em></li>
<li>$= A_1^2+A_2^2+2A_1A_2\cos(\delta_1-\delta_2)$<em>$e^{i\alpha}+e^{-i\alpha} = 2\cos\alpha$ (9.160).</em></li>
<li>$\tan\delta = \dfrac{\text{Im}(Ae^{i\delta})}{\text{Re}(Ae^{i\delta})}$<em>Phase of the sum phasor from its components (9.161, 9.162).</em></li>
<li>$\delta_1-\delta_2 = \pi$: $A^2 = A_1^2+A_2^2-2A_1A_2 = (A_1-A_2)^2$<em>Antiphase (9.168).</em></li>
</ol>`,
    example: R`$A_1 = 3\,\text{cm}$, $A_2 = 4\,\text{cm}$:<br>
in phase $7\,\text{cm}$; in antiphase $1\,\text{cm}$; $\Delta\delta = 90^\circ$: $5\,\text{cm}$; $\Delta\delta = 60^\circ$: $\sqrt{9+16+12} = 6{,}08\,\text{cm}$.<br>
With $\delta_1 = 0$, $\delta_2 = 90^\circ$: $\tan\delta = 4/3$, $\delta = 53{,}1^\circ$.`,
    counterexample: R`<b>Different frequencies:</b> $\cos\omega_1t+\cos\omega_2t$ with $\omega_1\neq\omega_2$ is not a harmonic oscillation with fixed amplitude; the phasors rotate relative to each other and the sum amplitude fluctuates (beat, 9.5.3). The formula $A^2 = A_1^2+A_2^2+2A_1A_2\cos\Delta\delta$ then holds only instantaneously, with $\Delta\delta(t)$.`,
    pitfalls: R`<ul><li>Simply adding amplitudes without regard to the phases.</li>
<li>Forgetting the quadrant with $\arctan$.</li>
<li>For antiphase giving a negative $A$; the amplitude is $|A_1-A_2|$, and the phase belongs to the larger partial oscillation.</li></ul>`
  },
  "ph9_schwebung": {
    title: R`Beats: two oscillations of slightly different frequency`,
    category: R`9.5 Superposition of oscillations`,
    type: "herleitung",
    front: R`Add $x_1 = A\cos\omega_1t$ and $x_2 = A\cos\omega_2t$ with $\omega_1\approx\omega_2$. Which fast and which slow frequency occur? How long is the time between two silent moments, and how are beats used when tuning an instrument?`,
    back: R`$$x = A\{\cos\omega_1t+\cos\omega_2t\} = 2A\cos\left(\frac{\omega_1-\omega_2}2t\right)\cos\left(\frac{\omega_1+\omega_2}2t\right)\qquad(9.173\text{–}9.176)$$
$$x(t) = \tilde A(t)\cos\frac{\omega_1+\omega_2}2t,\qquad\tilde A(t) = 2A\cos\frac{\omega_1-\omega_2}2t\qquad(9.177,\,9.178)$$
Fast oscillation with the mean $(\omega_1+\omega_2)/2$; the amplitude changes slowly with half the difference frequency (Figs. 9.23, 9.24).
$$\nu_S = \frac{\omega_S}{2\pi} = \frac1{2\pi}\frac{|\omega_1-\omega_2|}2,\qquad\tau := \frac T2 = \frac{2\pi}{|\omega_1-\omega_2|}\qquad(9.179,\,9.180)$$
$\tau$ is the time between two "silent moments" ($\tilde A = 0$).<br>
<b>Tuning:</b> Play the reference tone $\omega_2$ and the instrument $\omega_1$ together and change $\omega_1$ until the beat becomes slower and finally disappears.<br>
Conversely: $C\cos\tilde\omega_2t\cos\tilde\omega_1t = \frac C2\cos(\tilde\omega_1-\tilde\omega_2)t+\frac C2\cos(\tilde\omega_1+\tilde\omega_2)t$ (9.181, 9.182): the <b>amplitude spectrum</b> consists of two discrete lines (Fig. 9.25).`,
    meta: R`Script: sections 9.5.3.1–9.5.3.2, Eqs. (9.173)–(9.182), Figs. 9.23–9.25, pp. 255–257`,
    explanation: R`<b>Intuition:</b> Two arrows with slightly different rotation speeds: at times they point in the same direction (loud), at times in opposite directions (silent). How often this happens depends only on the difference of their rotation speeds.<br><br>
<b>Audible beat frequency:</b> The ear hears the loudness, i.e. $|\tilde A|$. Because $|\cos|$ has half the period of $\cos$, the tone pulsates with $|\nu_1-\nu_2|$, the full difference frequency. The $\nu_S$ defined in the script is the frequency of the envelope $\tilde A$ itself (with sign changes), hence half as large.<br><br>
<b>Dependencies:</b> The more similar the frequencies, the slower the beat; for equality it vanishes. At a silent moment the fast oscillation changes its sign (phase jump by $\pi$).<br><br>
<b>Connection:</b> Coupled pendulums show exactly this beat (9.7), as does the transient of a forced oscillation. In radio technology the difference frequency is used in the superheterodyne receiver.`,
    derivation: R`<ol class="fc-steps">
<li>$\cos\alpha+\cos\beta = 2\cos\dfrac{\alpha-\beta}2\cos\dfrac{\alpha+\beta}2$<em>Sum-to-product formula (from $\cos(u\pm v) = \cos u\cos v\mp\sin u\sin v$ with $u = \frac{\alpha+\beta}2$, $v = \frac{\alpha-\beta}2$).</em></li>
<li>$x = 2A\cos\dfrac{(\omega_1-\omega_2)t}2\cos\dfrac{(\omega_1+\omega_2)t}2$<em>With $\alpha = \omega_1t$, $\beta = \omega_2t$ (9.176).</em></li>
<li>$\tilde A = 0\Leftrightarrow\dfrac{|\omega_1-\omega_2|}2t = \dfrac\pi2+n\pi$<em>Silent moments of the envelope.</em></li>
<li>$\Delta t = \dfrac{2\pi}{|\omega_1-\omega_2|} = \dfrac1{|\nu_1-\nu_2|}$<em>Distance between two silent moments (9.180) = period of the audible pulsation.</em></li>
</ol>`,
    example: R`Tuning forks at $440\,\text{Hz}$ and $442\,\text{Hz}$: one hears a $441\text{-Hz}$ tone whose loudness swells and fades twice per second (silent moments every $0{,}5\,\text{s}$). The envelope $\tilde A$ itself has the frequency $\nu_S = 1\,\text{Hz}$.`,
    counterexample: R`<b>Strongly different frequencies</b> (e.g. $440$ and $660\,\text{Hz}$): formally the product formula still holds, but "slow envelope times fast carrier" is no longer a meaningful description; one hears two tones (a fifth), not a beat. The beat as a phenomenon presupposes $|\omega_1-\omega_2|\ll\omega_1+\omega_2$.`,
    pitfalls: R`<ul><li>Confusing the audible beat frequency $|\nu_1-\nu_2|$ with the frequency of the envelope $|\nu_1-\nu_2|/2$.</li>
<li>Mixing $\omega$ and $\nu$.</li>
<li>Assuming the carrier frequency is $\omega_1$ (it is the mean).</li></ul>`
  },
  "ph9_amplitudenmodulation": {
    title: R`Amplitude modulation and sidebands`,
    category: R`9.5 Superposition of oscillations`,
    type: "beispiel",
    front: R`In medium-wave transmission the amplitude of a carrier wave $\tilde\omega_1$ is modulated with an audio signal $\tilde\omega_2$: $x = (A_0+a\cos\tilde\omega_2t)\cos\tilde\omega_1t$. Which frequencies does the signal contain? How wide must a transmitter channel be?`,
    back: R`$$x(t) = \underbrace{(A_0+a\cos\tilde\omega_2t)}_\text{Modulation}\cdot\underbrace{\cos\tilde\omega_1t}_\text{Carrier}\qquad(9.183)$$
$$= A_0\cos\tilde\omega_1t+\frac a2\cos\{(\tilde\omega_1-\tilde\omega_2)t\}+\frac a2\cos\{(\tilde\omega_1+\tilde\omega_2)t\},\qquad a\lt A_0\qquad(9.184,\,9.185)$$
Three frequencies: the carrier $\tilde\omega_1$ and, symmetrically to it, two <b>sidebands</b> (satellites) at a distance of the modulation frequency $\tilde\omega_2$ (Figs. 9.26, 9.27).<br>
Medium wave: carrier $\nu = 300\,\text{kHz}\dots3\,\text{MHz}$, audio signal $30\,\text{Hz}\dots\text{approx. }10\,\text{kHz}$. A whole audio spectrum thus occupies $\nu_\text{carrier}\pm10\,\text{kHz}$, a bandwidth of about $20\,\text{kHz}$.`,
    meta: R`Script: section 9.5.3.3, Eqs. (9.183)–(9.185), Figs. 9.26–9.27, p. 258`,
    explanation: R`<b>Intuition:</b> Whoever changes the loudness of a tone periodically creates new frequencies. This is the same mathematics as beats, read backwards: a product of two cosines is a sum of two cosines at the sum and difference frequencies.<br><br>
<b>Why $a\lt A_0$?</b> Then the envelope $A_0+a\cos\tilde\omega_2t$ always stays positive, and a simple rectifier (diode) can recover the audio signal. For $a\gt A_0$ (overmodulation) the signal is distorted.<br><br>
<b>Dependencies:</b> The bandwidth is $2\times$ the highest modulation frequency, independent of the carrier frequency. Higher sound quality (larger $\tilde\omega_2$) costs more bandwidth, hence fewer stations per frequency band.<br><br>
<b>Connection:</b> The basic principle of Fourier analysis (9.6): every temporal change of a signal broadens its spectrum. The faster the change, the broader (cf. the bang, 9.6.2).`,
    derivation: R`<ol class="fc-steps">
<li>$x = A_0\cos\tilde\omega_1t + a\cos\tilde\omega_2t\cos\tilde\omega_1t$<em>Expand.</em></li>
<li>$\cos u\cos v = \tfrac12[\cos(u-v)+\cos(u+v)]$<em>Product-to-sum (addition of $\cos(u\pm v)$).</em></li>
<li>$a\cos\tilde\omega_2t\cos\tilde\omega_1t = \dfrac a2\cos(\tilde\omega_1-\tilde\omega_2)t+\dfrac a2\cos(\tilde\omega_1+\tilde\omega_2)t$<em>With $u = \tilde\omega_1t$, $v = \tilde\omega_2t$.</em></li>
<li>Spectrum: lines at $\tilde\omega_1$ (height $A_0$) and $\tilde\omega_1\pm\tilde\omega_2$ (height $a/2$)<em>(9.184), Fig. 9.27.</em></li>
</ol>`,
    example: R`Transmitter at $1\,\text{MHz}$, tone $1\,\text{kHz}$, $A_0 = 3$, $a = 1$: lines at $999\,\text{kHz}$ ($0{,}5$), $1000\,\text{kHz}$ ($3$), $1001\,\text{kHz}$ ($0{,}5$). For music up to $10\,\text{kHz}$ the transmitter occupies $990$–$1010\,\text{kHz}$. In the band $0{,}5$–$1{,}6\,\text{MHz}$ only about 55 stations thus fit side by side.`,
    counterexample: R`<b>Frequency modulation (FM radio):</b> Here not the amplitude but the frequency of the carrier is varied. The spectrum then has many sidebands (not just two) and needs about $200\,\text{kHz}$ bandwidth, but is less sensitive to amplitude disturbances. The simple three-line structure is a property of AM.`,
    pitfalls: R`<ul><li>Taking the bandwidth as the modulation frequency instead of twice as large.</li>
<li>Forgetting the factor $\tfrac12$ in the sidebands.</li>
<li>Believing the spectrum contains the audio frequency $\tilde\omega_2$ itself.</li></ul>`
  },
  "ph9_lissajous": {
    title: R`Orthogonal oscillations: ellipse and Lissajous figures`,
    category: R`9.5 Superposition of oscillations`,
    type: "konzept",
    front: R`A point mass oscillates simultaneously in the $x$ and $y$ directions. What path results for <b>equal frequency</b> and phase difference $\delta$? What are <b>Lissajous figures</b>, and what happens for an irrational frequency ratio?`,
    back: R`<b>Equal frequency:</b>
$$\begin{pmatrix}x\\y\end{pmatrix} = \begin{pmatrix}x_0\cos\omega t\\y_0\cos(\omega t+\delta)\end{pmatrix}\qquad(9.186)$$
is the parametric representation of an ellipse:
$$\frac{x^2}{x_0^2}-\frac{2\cos\delta}{x_0y_0}xy+\frac{y^2}{y_0^2} = \sin^2\delta\qquad(9.187)$$
$\delta = 0$ or $\pi$: straight line (diagonal); $\delta = \pm\pi/2$: ellipse with axes along $x$ and $y$ (circle for $x_0 = y_0$).<br><br>
<b>Different frequencies</b> (Lissajous figures):
$$\begin{pmatrix}x\\y\end{pmatrix} = \begin{pmatrix}x_0\cos(\omega_1t+\delta_1)\\y_0\cos(\omega_2t+\delta_2)\end{pmatrix}\qquad(9.188)$$
Rational $\omega_1/\omega_2$: closed (or open) finite curves (Fig. 9.28). Irrational ratio: the curve densely fills the rectangle $2x_0\times2y_0$.`,
    meta: R`Script: section 9.5.4, Eqs. (9.186)–(9.188), Fig. 9.28, pp. 259–260`,
    explanation: R`<b>Intuition:</b> A pendulum that is struck obliquely does not swing in one plane, but traces an ellipse. The shape reveals the phase relation of the two components: in phase a line, offset by $90^\circ$ a circle or an ellipse aligned with the axes.<br><br>
<b>Lissajous as a measuring instrument:</b> On an oscilloscope (x-y mode) a stationary figure indicates a rational frequency ratio. The number of touching points on the edge in the $x$ and $y$ directions gives the ratio $\omega_2:\omega_1$. This is how frequencies used to be compared.<br><br>
<b>Dependencies:</b> The ratio $\omega_1/\omega_2$ determines the topology of the figure, the phase its shape (Fig. 9.28: rows $0^\circ$ to $180^\circ$).<br><br>
<b>Connection:</b> Circularly and elliptically polarised light is exactly this superposition of two perpendicular oscillations of equal frequency (Physics II). The isotropic 2D oscillator has elliptical orbits, similar (but with a centre instead of a focus) to Kepler orbits.`,
    derivation: R`Derivation of the ellipse equation:
<ol class="fc-steps">
<li>$\dfrac{x}{x_0} = \cos\omega t$, $\dfrac y{y_0} = \cos\omega t\cos\delta-\sin\omega t\sin\delta$<em>Addition theorem for $y$.</em></li>
<li>$\dfrac y{y_0}-\dfrac x{x_0}\cos\delta = -\sin\omega t\sin\delta$<em>Subtract the $\cos\omega t$ part.</em></li>
<li>$\left(\dfrac y{y_0}-\dfrac x{x_0}\cos\delta\right)^2 = \left(1-\dfrac{x^2}{x_0^2}\right)\sin^2\delta$<em>Square; $\sin^2\omega t = 1-\cos^2\omega t$.</em></li>
<li>$\dfrac{y^2}{y_0^2}-\dfrac{2xy\cos\delta}{x_0y_0}+\dfrac{x^2}{x_0^2}(\cos^2\delta+\sin^2\delta) = \sin^2\delta$<em>Expand and combine the $x^2$ terms: (9.187).</em></li>
</ol>`,
    example: R`$x_0 = y_0$, $\delta = 90^\circ$: $x^2+y^2 = x_0^2$, a circle (clockwise for $\delta = +90^\circ$: $y = -x_0\sin\omega t$).<br>
$\delta = 0$: $(x/x_0-y/y_0)^2 = 0$, the line $y = \frac{y_0}{x_0}x$.<br>
$\omega_1:\omega_2 = 1:2$, $\delta = 90^\circ$: a lying figure of eight.`,
    counterexample: R`<b>Nonlinear pendulum:</b> For large deflections the spherical pendulum is no longer harmonic; the ellipse does not close, but its axis slowly rotates (precession of the apsides). The closed ellipse is a property of the linear oscillator.`,
    pitfalls: R`<ul><li>Always expecting a circle for equal frequencies (only for $x_0 = y_0$ and $\delta = \pm\pi/2$).</li>
<li>Forgetting the mixed term $xy$ in the ellipse equation.</li>
<li>Reading the frequency ratio from a Lissajous figure the wrong way round.</li></ul>`
  },
  "ph9_fourierreihe": {
    title: R`Fourier series: basis functions, coefficients as projections, complex form`,
    category: R`9.6 Fourier analysis`,
    type: "definition",
    front: R`How can a periodic function $f(t+T) = f(t)$ be written as a <b>Fourier series</b>? How does one calculate the coefficients $a_k$, $b_k$ (or $c_n$), and why is this a "projection onto basis vectors"? What holds for even and odd functions?`,
    back: R`$$f(t) = \frac{a_0}2+\sum_{n=1}^\infty\{a_n\cos(n\omega_0t)+b_n\sin(n\omega_0t)\},\qquad\omega_0 = \frac{2\pi}T\qquad(9.189\text{–}9.192,\,9.221)$$
$\omega_n = n\omega_0$: harmonics; $\omega_0$: fundamental. $\cos\omega_nt$ and $\sin\omega_nt$ form a basis of an infinite-dimensional vector space.<br><br>
<b>Coefficients</b> = projection (analogous to $a_n = \vec r\cdot\hat x_n$, 9.198):
$$a_k = \frac2T\int_0^Tf(t)\cos(\omega_kt)\,dt,\qquad b_k = \frac2T\int_0^Tf(t)\sin(\omega_kt)\,dt\qquad(9.199)$$
<b>Symmetry:</b> even $f(t) = f(-t)$: only cosine terms; odd $f(t) = -f(-t)$: only sine terms (9.193–9.197). $b_0\equiv0$.<br><br>
<b>Complex form</b> (negative frequencies needed):
$$f(t) = \sum_{n=-\infty}^\infty c_ne^{in\omega_0t},\quad c_n = \frac1T\int_0^Tf(t)e^{-in\omega_0t}dt,\quad c_0 = \frac{a_0}2,\quad c_{\pm n} = \tfrac12(a_n\mp ib_n)\qquad(9.216\text{–}9.222)$$
$f$ real $\Leftrightarrow c_n = c_{-n}^*$.`,
    meta: R`Script: sections 9.6.1.1, 9.6.1.4–9.6.1.5, Eqs. (9.189)–(9.199), (9.216)–(9.222), pp. 259–266`,
    explanation: R`<b>Intuition:</b> Every periodic signal (a violin note, an ECG heartbeat) is a chord made of the fundamental frequency and its integer multiples. The coefficients say how loud each harmonic is; that determines the timbre.<br><br>
<b>Why integrals?</b> The basis functions are orthogonal: $\frac2T\int_0^T\cos(\omega_kt)\cos(\omega_nt)dt = \delta_{kn}$ (for $k,n\ge1$). If one multiplies $f$ by a basis function and integrates, only its coefficient survives, just as with the scalar product with a unit vector.<br><br>
<b>Analysis vs. synthesis:</b> Analysis determines the amplitudes of the multiples of $\omega_0$; synthesis builds a function from oscillations (9.6.1.5).<br><br>
<b>Connection:</b> Linear algebra (orthonormal basis, projection), signal processing (MP3, JPEG), quantum mechanics (states as superpositions of eigenfunctions). Because the oscillator is linear, the response to any periodic force can be assembled from the resonance curves of the individual Fourier components.`,
    derivation: R`Why $a_k = \frac2T\int f\cos\omega_kt\,dt$:
<ol class="fc-steps">
<li>$f(t) = \dfrac{a_0}2+\sum_n(a_n\cos\omega_nt+b_n\sin\omega_nt)$<em>Ansatz.</em></li>
<li>$\displaystyle\int_0^T\cos\omega_nt\cos\omega_kt\,dt = \tfrac T2\delta_{nk}$, $\displaystyle\int_0^T\sin\omega_nt\cos\omega_kt\,dt = 0$<em>Orthogonality ($k\ge1$): product-to-sum; every full period integrates to zero.</em></li>
<li>$\displaystyle\int_0^Tf\cos\omega_kt\,dt = a_k\frac T2$<em>Only the term $n = k$ survives; the constant term also drops out.</em></li>
<li>$a_k = \dfrac2T\displaystyle\int_0^Tf\cos\omega_kt\,dt$<em>(9.199).</em></li>
<li>$k = 0$: $a_0 = \dfrac2T\displaystyle\int_0^Tf\,dt = 2\langle f\rangle$<em>That is why $a_0/2$ in the series is the mean value.</em></li>
</ol>`,
    example: R`$f(t) = 3+2\cos\omega_0t-\sin3\omega_0t$: $a_0 = 6$, $a_1 = 2$, $b_3 = -1$, all others zero.<br>
Complex: $c_0 = 3$, $c_{\pm1} = 1$, $c_{\pm3} = \pm\tfrac i2$.<br>
<b>Sawtooth</b> $f = t$ on $(-\pi,\pi)$, $\omega_0 = 1$: odd, so only $b_n = 2(-1)^{n+1}/n$.`,
    counterexample: R`<b>Non-periodic functions</b> (a single bang, $e^{-t^2}$) have no Fourier series with discrete frequencies; one needs the Fourier integral with a continuous spectrum (9.6.2). A Fourier series on an interval, on the other hand, represents the <i>periodic continuation</i>, with jumps at the edges.`,
    pitfalls: R`<ul><li>Using $a_0$ instead of $a_0/2$ as the constant term. (The script writes the sum from $n = 0$ with $a_0$ in (9.190); with the normalisation (9.199) the constant term is $a_0/2$, as in (9.221).)</li>
<li>Confusing the prefactor $2/T$ (real) with $1/T$ (complex).</li>
<li>Omitting the negative frequencies in the complex series.</li></ul>`
  },
  "ph9_maeander_gibbs": {
    title: R`Fourier series of the square wave (meander) and the Gibbs phenomenon`,
    category: R`9.6 Fourier analysis`,
    type: "beispiel",
    front: R`Calculate the Fourier coefficients of the square wave $f = +A$ for $0\le t\lt T/2$ and $f = -A$ for $T/2\le t\le T$. Which harmonics occur, how fast do they decay, and what is the <b>Gibbs phenomenon</b>?`,
    back: R`$f$ is odd (9.201), so only sine terms:
$$b_k = \frac2T\int_0^Tf\sin\omega_kt\,dt = \frac{2A}T\left\{\int_0^{T/2}\sin\omega_kt\,dt-\int_{T/2}^T\sin\omega_kt\,dt\right\}\qquad(9.202\text{–}9.204)$$
With $\int_0^{T/2}\sin\omega_kt\,dt = \frac{1-(-1)^k}{k\omega_0}$ and $\int_{T/2}^T\sin\omega_kt\,dt = \frac{(-1)^k-1}{k\omega_0}$ (9.210–9.212):
$$b_k = \frac{2A}{k\pi}\left[1-(-1)^k\right] = \begin{cases}\dfrac{4A}{k\pi},&k\text{ odd}\\0,&k\text{ even}\end{cases}\qquad(9.213,\,9.214)$$
$$f(t) = \sum_{k = 1,3,5,\dots}\frac{4A}{k\pi}\sin(k\omega_0t)\qquad(9.215)$$
Only odd harmonics, amplitudes $\propto1/k$ (Fig. 9.30).<br><br>
<b>Gibbs phenomenon:</b> At jumps overshoots arise that do not vanish even with more terms; they only become narrower (Fig. 9.29). Supplement: they amount to about 9 % of the jump height.`,
    meta: R`Script: sections 9.6.1.2–9.6.1.3, Eqs. (9.200)–(9.215), Figs. 9.29–9.30, pp. 262–265`,
    explanation: R`<b>Intuition:</b> To build a sharp edge one needs arbitrarily high frequencies. The square wave is moreover half-wave symmetric ($f(t+T/2) = -f(t)$); therefore all even harmonics cancel.<br><br>
<b>Decay $\propto1/k$:</b> Functions with jumps have coefficients $\propto1/k$; continuous functions with kinks (triangle) $\propto1/k^2$; smooth functions decay even faster. The smoother the function, the fewer harmonics one needs.<br><br>
<b>Gibbs:</b> The partial sums converge at every point (except at the jump, where they give the mean value $0$), but not uniformly: the maximum of the partial sum stays at $\approx1{,}18A$. The overshoot merely moves closer to the jump.<br><br>
<b>Connection:</b> Digital signals (square pulses) need large bandwidth; if one limits the bandwidth (filter), the edges are smoothed and overshoots ("ringing") appear – Gibbs in practice.`,
    derivation: R`<ol class="fc-steps">
<li>$\displaystyle\int_a^b\sin(k\omega_0t)dt = -\dfrac1{k\omega_0}\left[\cos k\omega_0b-\cos k\omega_0a\right]$<em>Antiderivative, derived via $e^{ik\omega_0t}$ (9.205–9.209).</em></li>
<li>$\displaystyle\int_0^{T/2}\sin\omega_kt\,dt = \dfrac{1-\cos k\pi}{k\omega_0} = \dfrac{1-(-1)^k}{k\omega_0}$<em>$k\omega_0T/2 = k\pi$ (9.210, 9.211).</em></li>
<li>$\displaystyle\int_{T/2}^T\sin\omega_kt\,dt = \dfrac{(-1)^k-1}{k\omega_0}$<em>$\cos2k\pi = 1$ (9.212).</em></li>
<li>$b_k = \dfrac{2A}{Tk\omega_0}\left\{2\left[1-(-1)^k\right]\right\} = \dfrac{2A}{k\pi}\left[1-(-1)^k\right]$<em>Difference of the two integrals; $T\omega_0 = 2\pi$ (9.213, 9.214).</em></li>
<li>$k$ odd: $1-(-1)^k = 2\Rightarrow b_k = \dfrac{4A}{k\pi}$<em>Even $k$: $b_k = 0$.</em></li>
</ol>`,
    example: R`$A = 1$: $b_1 = 1{,}273$, $b_3 = 0{,}424$, $b_5 = 0{,}255$, $b_7 = 0{,}182$.<br>
The fundamental alone is already 27 % higher than the square wave. With many terms the peak at the jump stays at $\approx1{,}179$.<br>
At $t = T/4$: $\frac4\pi(1-\frac13+\frac15-\dots) = \frac4\pi\cdot\frac\pi4 = 1$ ✓ (Leibniz series).`,
    counterexample: R`<b>Triangle wave</b> (continuous, only kinks): likewise only odd harmonics, but amplitudes $\propto1/k^2$, and no Gibbs overshoot, because there is no jump. The series converges uniformly. The Gibbs phenomenon is tied to discontinuities.`,
    pitfalls: R`<ul><li>Including even harmonics.</li>
<li>Confusing $\frac{4A}{\pi k}$ with $\frac{4A}{\pi k^2}$ (triangle).</li>
<li>Believing the overshoot disappears with enough terms.</li></ul>`
  },
  "ph9_fourierintegral_knall": {
    title: R`Fourier integral and spectrum of a bang: Δω · τ = π`,
    category: R`9.6 Fourier analysis`,
    type: "herleitung",
    front: R`How does one get from the Fourier series to the <b>Fourier integral</b>? Calculate the spectrum $A(\omega)$ of a rectangular bang ($f = f_0$ for $|t|\le\tau$, otherwise $0$) and show that the width of the spectrum is inversely proportional to the duration.`,
    back: R`$T\to\infty$: $f$ is no longer periodic, $\omega_0 = 2\pi/T\to0$, the spectral lines move together into a continuous distribution. Instead of $c_n$ an amplitude function (spectrum) $A(\omega)$:
$$f(t) = \frac1{\sqrt{2\pi}}\int_{-\infty}^\infty A(\omega)e^{i\omega t}d\omega,\qquad A(\omega) = \frac1{\sqrt{2\pi}}\int_{-\infty}^\infty f(t)e^{-i\omega t}dt\qquad(9.223,\,9.224)$$
(The prefactor can be chosen freely; $1/\sqrt{2\pi}$ makes both directions symmetric.)<br><br>
<b>Bang</b> (9.225):
$$A(\omega) = \frac{f_0}{\sqrt{2\pi}}\int_{-\tau}^{\tau}e^{-i\omega t}dt = \frac{f_0}{\sqrt{2\pi}}\frac{e^{i\omega\tau}-e^{-i\omega\tau}}{i\omega} = \frac{2f_0}{\sqrt{2\pi}}\frac{\sin\omega\tau}{\omega}\qquad(9.226\text{–}9.228)$$
Width up to the first zero: $\sin(\Delta\omega\,\tau) = 0\Rightarrow\Delta\omega = \pi/\tau$ (9.229). The width of the spectrum is inversely proportional to the duration.`,
    meta: R`Script: sections 9.6.2.1–9.6.2.3 (beginning), Eqs. (9.223)–(9.229), Fig. 9.31, pp. 266–268`,
    explanation: R`<b>Intuition:</b> A short event can only be "assembled" from very many frequencies, which cancel each other outside the event. The shorter the event, the wider the frequency band required. A long, pure tone, by contrast, has a sharp spectrum.<br><br>
<b>Dependence:</b> $\Delta\omega\cdot\tau = \pi$ (for this width measure). Half the duration gives double the width. This holds for all pulse shapes up to a factor of order 1: $\Delta\omega\,\Delta t\gtrsim1$.<br><br>
<b>Height:</b> $A(0) = \frac{2f_0\tau}{\sqrt{2\pi}}$ is proportional to the area $2f_0\tau$ of the pulse: the DC component measures the integral of the signal.<br><br>
<b>Connection:</b> In quantum mechanics this leads to Heisenberg's uncertainty relation ($\Delta E\,\Delta t\gtrsim\hbar$, $\Delta p\,\Delta x\gtrsim\hbar$). In engineering: short laser pulses (femtoseconds) have broad spectra; fast data transmission needs large bandwidth.`,
    derivation: R`<ol class="fc-steps">
<li>$A(\omega) = \dfrac{f_0}{\sqrt{2\pi}}\displaystyle\int_{-\tau}^{\tau}e^{-i\omega t}dt$<em>Outside $[-\tau,\tau]$ we have $f = 0$ (9.226).</em></li>
<li>$= \dfrac{f_0}{\sqrt{2\pi}}\left[\dfrac{e^{-i\omega t}}{-i\omega}\right]_{-\tau}^{\tau} = \dfrac{f_0}{\sqrt{2\pi}}\dfrac{e^{i\omega\tau}-e^{-i\omega\tau}}{i\omega}$<em>Antiderivative; sign when swapping the limits (9.227).</em></li>
<li>$e^{i\omega\tau}-e^{-i\omega\tau} = 2i\sin\omega\tau$<em>Euler.</em></li>
<li>$A(\omega) = \dfrac{2f_0}{\sqrt{2\pi}}\dfrac{\sin\omega\tau}\omega$<em>Real, since $f$ is even (9.228).</em></li>
<li>$\lim_{\omega\to0}A = \dfrac{2f_0\tau}{\sqrt{2\pi}}$; first zero at $\omega\tau = \pi$<em>$\sin x/x\to1$; width $\Delta\omega = \pi/\tau$ (9.229).</em></li>
</ol>`,
    example: R`Bang with duration $2\tau = 2\,\text{ms}$ ($\tau = 1\,\text{ms}$): $\Delta\omega = \pi/\tau = 3142\,\text{s}^{-1}$, so $\Delta\nu = 500\,\text{Hz}$. A click lasting $2\,\mu\text{s}$ would have $\Delta\nu = 500\,\text{kHz}$, far above the audible range – one hears it anyway, because the part below $20\,\text{kHz}$ is not zero.`,
    counterexample: R`<b>Infinitely long sine tone</b> $f = \cos\omega_1t$: it has no "broad" spectrum, but two sharp lines at $\pm\omega_1$ (formally delta functions). A real, finitely long tone signal of duration $2\tau$, on the other hand, has lines of width $\sim\pi/\tau$. Absolutely sharp frequencies exist only for infinitely long signals.`,
    pitfalls: R`<ul><li>Mixing the prefactors ($1/\sqrt{2\pi}$ or $1$ and $1/2\pi$) between forward and inverse transform.</li>
<li>Believing a short pulse has one specific "frequency".</li>
<li>Dividing by zero when taking the limit $\omega\to0$.</li></ul>`
  },
  "ph9_deltafunktion": {
    title: R`Delta function as an infinitely short bang and its spectrum`,
    category: R`9.6 Fourier analysis`,
    type: "definition",
    front: R`What is the <b>delta function</b> $\delta(x-a)$, how is it defined, and what property does it have under an integral? What does its Fourier spectrum look like, and what is the connection to the uncertainty relation?`,
    back: R`Limiting case of a bang that becomes ever shorter and higher, at constant area $f_0\cdot2\tau = 1$ (Fig. 9.32):
$$\delta(x-a) = \begin{cases}0,&x\ne a\\\infty,&x = a\end{cases},\qquad\int_{-\infty}^\infty\delta(x-a)\,dx = 1\qquad(9.230,\,9.231)$$
Not a function in the usual sense, but a <b>distribution</b>, defined via integrals. Integrals that do not contain $a$ vanish (9.232). <b>Sifting property:</b>
$$\int_{-\infty}^\infty f(x)\,\delta(x-a)\,dx = f(a)\qquad(9.233)$$
<b>Spectrum</b> of $\delta(t-t_0)$:
$$A(\omega) = \frac1{\sqrt{2\pi}}\int\delta(t-t_0)e^{-i\omega t}dt = \frac1{\sqrt{2\pi}}e^{-i\omega t_0},\quad\text{Re}\,A = \tfrac{\cos\omega t_0}{\sqrt{2\pi}},\ \text{Im}\,A = -\tfrac{\sin\omega t_0}{\sqrt{2\pi}}\qquad(9.234\text{–}9.236)$$
$|A(\omega)| = 1/\sqrt{2\pi}$ for all $\omega$: all frequencies from $-\infty$ to $\infty$ are equally strong.`,
    meta: R`Script: section 9.6.2.3, Eqs. (9.230)–(9.236), Fig. 9.32, pp. 268–269`,
    explanation: R`<b>Intuition:</b> The delta function is an idealised blow: infinitely short, but with a finite "total impulse" (area 1). In frequency space it is the opposite of a pure tone: perfectly localised in time, completely undetermined in frequency.<br><br>
<b>Sifting property:</b> Under the integral, $\delta$ "picks out" the value of the function at one point. That makes it the tool for describing point charges, point masses or short force impulses (force impulse $F(t) = \Delta p\,\delta(t-t_0)$).<br><br>
<b>Phase:</b> The position $t_0$ enters only the phase $e^{-i\omega t_0}$, not the magnitude. A shift in time is a frequency-dependent phase rotation in the spectrum.<br><br>
<b>Connection:</b> Uncertainty relation (quantum mechanics): a particle with sharp position has completely undetermined momentum. Systems theory: the response of a linear system (e.g. an oscillator) to a delta impulse is called the impulse response; its Fourier transform is the resonance curve.`,
    derivation: R`Delta function as the limit of the bang (area 1, so $f_0 = 1/(2\tau)$):
<ol class="fc-steps">
<li>$A_\tau(\omega) = \dfrac{2f_0}{\sqrt{2\pi}}\dfrac{\sin\omega\tau}\omega = \dfrac1{\sqrt{2\pi}}\dfrac{\sin\omega\tau}{\omega\tau}$<em>Bang spectrum (9.228) with $2f_0\tau = 1$.</em></li>
<li>$\tau\to0$: $\dfrac{\sin\omega\tau}{\omega\tau}\to1$ for every fixed $\omega$<em>The first zero $\pi/\tau$ moves to infinity.</em></li>
<li>$A(\omega)\to\dfrac1{\sqrt{2\pi}}$<em>Flat spectrum = delta function at $t_0 = 0$ (9.234).</em></li>
<li>$\displaystyle\int f(x)\delta_\tau(x-a)dx = \dfrac1{2\tau}\int_{a-\tau}^{a+\tau}f\,dx\to f(a)$<em>Mean over a shrinking interval: sifting property (9.233).</em></li>
</ol>`,
    example: R`$\int_{-\infty}^\infty x^2\delta(x-3)\,dx = 9$; $\int_0^\infty\cos x\,\delta(x-\pi)\,dx = -1$; $\int_{-1}^{1}e^x\delta(x-2)\,dx = 0$ (the point $2$ lies outside).<br>
<b>Hammer blow</b> on a glass: the short impact excites all frequencies; the glass "answers" with its natural frequencies (a tone).`,
    counterexample: R`<b>"$\delta(0) = \infty$, so $\int\delta = \infty$":</b> false. A function that is infinite only at one point and zero elsewhere would have integral 0 in the Riemann sense, not 1. That is why $\delta$ is not a function; its meaning lies solely in the definition via integrals (9.231, 9.233).`,
    pitfalls: R`<ul><li>Evaluating $\delta$ pointwise like an ordinary function, or squaring it.</li>
<li>Not checking the integration limits (does $a$ lie in the interval?).</li>
<li>Believing the modulus of the spectrum depends on $t_0$.</li></ul>`
  },

  // ========================================================================
  // 9.7 COUPLED OSCILLATIONS
  // ========================================================================
  "ph9_gekoppelte_pendel_normalmoden": {
    title: R`Two coupled pendulums: normal coordinates and natural modes`,
    category: R`9.7 Coupled oscillations`,
    type: "herleitung",
    front: R`Two identical pendulums (mass $m$, $\omega_0 = \sqrt{g/\ell}$) are coupled by a spring $k$. Set up the equations of motion, decouple them with <b>normal coordinates</b> and determine the two natural frequencies. What do the corresponding modes of vibration look like?`,
    back: R`For small displacements (purely horizontal):
$$\ddot x_1+\omega_0^2x_1+\frac km(x_1-x_2) = 0,\qquad\ddot x_2+\omega_0^2x_2-\frac km(x_1-x_2) = 0\qquad(9.237,\,9.238)$$
<b>Normal coordinates:</b> $z_1 := x_1-x_2$, $z_2 := x_1+x_2$ (9.239, 9.240). Sum and difference of the equations:
$$\ddot z_2+\omega_0^2z_2 = 0,\qquad\ddot z_1+\left(\omega_0^2+2\frac km\right)z_1 = 0\qquad(9.241,\,9.242)$$
Decoupled, with
$$\omega_2 = \omega_0,\qquad\omega_1 = \sqrt{\omega_0^2+2\frac km}\qquad(9.243,\,9.244)$$
Back-transformation $x_1 = \tfrac12(z_1+z_2)$, $x_2 = \tfrac12(z_2-z_1)$ (9.245, 9.246).
<ul><li><b>In phase</b> $x_1 = x_2$: $z_1\equiv0$, only $\omega_2 = \omega_0$; the spring stays relaxed (9.247, Fig. 9.34).</li>
<li><b>In antiphase</b> $x_1 = -x_2$: $z_2\equiv0$, only $\omega_1\gt\omega_0$; the spring takes part (9.248, Fig. 9.35).</li></ul>`,
    meta: R`Script: section 9.7.1 (part 1), Eqs. (9.237)–(9.248), Figs. 9.33–9.35, pp. 270–272`,
    explanation: R`<b>Intuition:</b> If both pendulums swing alike, the spring notices nothing; each swings as if alone with $\omega_0$. If they swing against each other, the spring is stretched on one side and compressed on the other, and the additional restoring force raises the frequency.<br><br>
<b>Why $2k/m$?</b> In counter-swinging the spring extension is $x_1-x_2 = 2x_1$, i.e. twice the displacement of one pendulum. Each pendulum therefore feels the effective spring constant $2k$.<br><br>
<b>Normal coordinates:</b> They are the "natural" coordinates in which every motion is a simple harmonic oscillation. Mathematically: the eigenvectors of the coupling matrix (9.7.2). Every possible motion is a superposition of the two natural oscillations.<br><br>
<b>Connection:</b> Coupled oscillators describe molecules (vibrational modes), crystal lattices (phonons), coupled oscillating circuits (band filters) and – in the limit of infinitely many – waves on a string.`,
    derivation: R`<ol class="fc-steps">
<li>$m\ddot x_1 = -\dfrac{mg}\ell x_1 - k(x_1-x_2)$<em>Restoring force of the pendulum (small angles) plus spring force; stretched by $x_1-x_2$.</em></li>
<li>$(9.237)+(9.238)$: $\ddot z_2+\omega_0^2z_2 = 0$<em>The coupling terms cancel (9.241).</em></li>
<li>$(9.237)-(9.238)$: $\ddot z_1+\omega_0^2z_1+2\dfrac km z_1 = 0$<em>The coupling terms add up (9.242).</em></li>
<li>$\omega_1^2 = \omega_0^2+2k/m$<em>Natural frequency of the counter-swinging mode (9.244).</em></li>
<li>$x_1 = x_2\Rightarrow z_1 = 0$ for all $t$<em>Only the mode $z_2$ is excited (9.247).</em></li>
</ol>`,
    example: R`$\ell = 1\,\text{m}$, $m = 0{,}5\,\text{kg}$, $k = 0{,}5\,\text{N/m}$: $\omega_0 = 3{,}132\,\text{s}^{-1}$ ($T = 2{,}006\,\text{s}$), $\omega_1 = \sqrt{9{,}81+2} = 3{,}437\,\text{s}^{-1}$ ($T = 1{,}828\,\text{s}$). Counter-swinging, the pendulums therefore swing noticeably faster.`,
    counterexample: R`<b>Unequal pendulums</b> (different lengths or masses): then $x_1\pm x_2$ are no longer normal coordinates; the modes are other linear combinations, and with weak coupling the energy is no longer transferred completely. The simple sum/difference works only because of the symmetry.`,
    pitfalls: R`<ul><li>$\omega_1 = \sqrt{\omega_0^2+k/m}$ (factor 2 forgotten).</li>
<li>Setting the signs of the coupling terms in (9.238) wrongly.</li>
<li>Believing that in the general case the pendulums swing with a single frequency.</li></ul>`
  },
  "ph9_gekoppelte_pendel_schwebung": {
    title: R`Coupled pendulums: beat and complete energy exchange`,
    category: R`9.7 Coupled oscillations`,
    type: "beispiel",
    front: R`Pendulum 1 is deflected by $A$, pendulum 2 stays at rest; both are released at $t = 0$. Determine $x_1(t)$, $x_2(t)$. With weak coupling ($k/m\ll\omega_0^2$), how long does it take until the entire energy is in pendulum 2?`,
    back: R`Initial conditions: $x_1 = A$, $x_2 = 0$, $\dot x_1 = \dot x_2 = 0$, so $z_1 = z_2 = A$, $\dot z_1 = \dot z_2 = 0$ (9.249–9.252):
$$z_1 = A\cos\omega_1t,\qquad z_2 = A\cos\omega_2t\qquad(9.253,\,9.254)$$
Both normal oscillations with equal amplitude and phase. Back into the pendulum coordinates:
$$x_1 = A\cos\frac{\omega_1+\omega_2}2t\,\cos\frac{\omega_1-\omega_2}2t,\qquad x_2 = A\sin\frac{\omega_1+\omega_2}2t\,\sin\frac{\omega_1-\omega_2}2t\qquad(9.255,\,9.256)$$
Weak coupling $k/m\ll\omega_0^2$: $\omega_1\approx\omega_2$, beat (Fig. 9.36). Period of the modulation:
$$T = \frac{4\pi}{\omega_1-\omega_2}\approx\frac{4\pi m\omega_0}k\qquad(9.257\text{–}9.261)$$
After $\Delta t = T/4$ pendulum 1 is at rest, and pendulum 2 has the entire energy; after $T/2$ it is the other way round. Coupling allows <b>complete energy transfer</b>.`,
    meta: R`Script: section 9.7.1, case 3, Eqs. (9.249)–(9.261), Fig. 9.36, pp. 272–274`,
    explanation: R`<b>Intuition:</b> With every swing, pendulum 1 pulls pendulum 2 a little via the spring, and at the right rhythm (both have almost the same frequency): pendulum 2 is excited resonantly, while pendulum 1 loses energy. Once pendulum 1 has come to rest, the game reverses.<br><br>
<b>Dependencies:</b> $T\propto m\omega_0/k$: weaker coupling means slower exchange. The time for the complete transfer $T/4 = \pi m\omega_0/k$ is inversely proportional to the coupling strength.<br><br>
<b>Phase jump:</b> When the envelope passes through zero, it changes its sign; the fast oscillation then jumps by $\pi$ (as in every beat).<br><br>
<b>Connection:</b> Exactly this way coupled atoms, spins or qubits exchange their excitation (Rabi oscillations, resonance transfer). Coupled oscillating circuits in radios use it for band filters.`,
    derivation: R`<ol class="fc-steps">
<li>$x_1 = \tfrac12(z_1+z_2) = \tfrac A2(\cos\omega_1t+\cos\omega_2t)$<em>Back-transformation (9.245).</em></li>
<li>$x_1 = A\cos\dfrac{(\omega_1+\omega_2)t}2\cos\dfrac{(\omega_1-\omega_2)t}2$<em>Sum-to-product (9.255).</em></li>
<li>$x_2 = \tfrac A2(\cos\omega_2t-\cos\omega_1t) = A\sin\dfrac{(\omega_1+\omega_2)t}2\sin\dfrac{(\omega_1-\omega_2)t}2$<em>$\cos\beta-\cos\alpha = 2\sin\frac{\alpha+\beta}2\sin\frac{\alpha-\beta}2$ (9.256).</em></li>
<li>$\omega_1 = \omega_0\sqrt{1+\dfrac{2k}{m\omega_0^2}}\approx\omega_0\left(1+\dfrac k{m\omega_0^2}\right)$<em>Taylor $\sqrt{1+\varepsilon}\approx1+\varepsilon/2$ (9.260).</em></li>
<li>$\omega_1-\omega_2\approx\dfrac{k}{m\omega_0}\Rightarrow T = \dfrac{4\pi}{\omega_1-\omega_2}\approx\dfrac{4\pi m\omega_0}k$<em>(9.261).</em></li>
<li>$x_1$ envelope $= 0$ at $\dfrac{(\omega_1-\omega_2)t}2 = \dfrac\pi2\Rightarrow t = \dfrac T4$<em>First complete energy transfer.</em></li>
</ol>`,
    example: R`Pendulums as above ($\omega_0 = 3{,}132\,\text{s}^{-1}$, $m = 0{,}5\,\text{kg}$, $k = 0{,}5\,\text{N/m}$, $k/(m\omega_0^2) = 0{,}10$): exact $T = 41{,}3\,\text{s}$, approximation $39{,}4\,\text{s}$ (5 % deviation, because the coupling is not very weak). Pendulum 1 comes to rest after $T/4 = 10{,}3\,\text{s}$.`,
    counterexample: R`<b>Only one mode excited:</b> If one starts with $x_1 = x_2 = A$ (or $x_1 = -x_2$), there is no beat and no energy exchange; both pendulums swing permanently with equal amplitude. The exchange arises only from the superposition of two modes with different frequencies.`,
    pitfalls: R`<ul><li>Confusing $T$ with the time for the energy transfer ($T/4$).</li>
<li>Using the approximation (9.261) for strong coupling.</li>
<li>Believing the coupling spring stores a large part of the energy on average (with weak coupling it is small).</li></ul>`
  },
  "ph9_drei_oszillatoren": {
    title: R`Three coupled masses: eigenvalue problem and natural oscillations`,
    category: R`9.7 Coupled oscillations`,
    type: "herleitung",
    front: R`Three equal masses $m$ are connected by two springs $k$ (no connection to a wall). Set up the equations of motion in matrix form, determine the natural frequencies and eigenvectors, and describe the three natural oscillations. What properties do natural oscillations have in common?`,
    back: R`$$m\ddot x_1 = k(x_2-x_1),\quad m\ddot x_2 = -k(x_2-x_1)+k(x_3-x_2),\quad m\ddot x_3 = -k(x_3-x_2)\qquad(9.262\text{–}9.264)$$
$$\ddot{\vec x} = -\omega_0^2M\vec x,\qquad M = \begin{pmatrix}1&-1&0\\-1&2&-1\\0&-1&1\end{pmatrix},\quad\omega_0^2 = \frac km\qquad(9.265,\,9.268)$$
Ansatz $x_k = A_ke^{i(\omega t+\delta)}$ (9.266): $(\omega_0^2M-\omega^21)\vec A = \vec 0$ (9.270). Nontrivial solution only for
$$\det(\omega_0^2M-\omega^21) = \omega_0^6\,\xi(1-\xi)(\xi-3) = 0,\qquad\xi = \frac{\omega^2}{\omega_0^2}\qquad(9.271,\,9.272)$$
$$\omega^2\in\{0,\ \omega_0^2,\ 3\omega_0^2\},\qquad\vec A^{(1)} = \begin{pmatrix}1\\1\\1\end{pmatrix},\ \vec A^{(2)} = \begin{pmatrix}1\\0\\-1\end{pmatrix},\ \vec A^{(3)} = \begin{pmatrix}1\\-2\\1\end{pmatrix}\qquad(9.273\text{–}9.281)$$
$$\vec x = (C_0+C_1t)\vec A^{(1)}+C_2\vec A^{(2)}\cos(\omega_0t+\delta_2)+C_3\vec A^{(3)}\cos(\sqrt3\,\omega_0t+\delta_3)\qquad(9.282)$$
For natural oscillations: no energy exchange between the oscillators, all with the same frequency, all passing through zero at the same time.`,
    meta: R`Script: section 9.7.2, Eqs. (9.262)–(9.282), Fig. 9.37, pp. 274–276`,
    explanation: R`<b>The three modes:</b> (1) $\omega = 0$: all three move together (rest or uniform motion) – possible because no spring is attached to a wall; for the pendulums there was no such mode. (2) $\omega_0$: the outer masses swing against each other, the middle one is at rest. (3) $\sqrt3\,\omega_0$: the outer ones swing in phase, the middle one in antiphase with double the amplitude (the centre of mass stays at rest).<br><br>
<b>Method:</b> Coupled linear oscillations are an eigenvalue problem: eigenvalues of the coupling matrix = squares of the natural frequencies, eigenvectors = modes of vibration. Because $M$ is symmetric, the eigenvectors are orthogonal (cf. Linalg: spectral theorem).<br><br>
<b>Dependencies:</b> All frequencies scale with $\sqrt{k/m}$; their ratio $0:1:\sqrt3$ is purely geometric (arrangement of the couplings).<br><br>
<b>Connection:</b> Model for linear triatomic molecules such as CO₂ (there with unequal masses: symmetric stretching $\sqrt{k/m_\text{O}}$, asymmetric $\sqrt{k/m_\text{O}}\sqrt{1+2m_\text{O}/m_\text{C}}$). For $N\to\infty$ masses lattice waves (phonons) arise.`,
    derivation: R`Determinant and eigenvector for $\xi = 3$:
<ol class="fc-steps">
<li>$\det\begin{pmatrix}1-\xi&-1&0\\-1&2-\xi&-1\\0&-1&1-\xi\end{pmatrix} = (1-\xi)\left[(2-\xi)(1-\xi)-1\right]-(1-\xi)$<em>Expansion along the first row.</em></li>
<li>$= (1-\xi)\left[\xi^2-3\xi+2-1-1\right] = (1-\xi)\,\xi(\xi-3)$<em>Factor out and simplify (9.272).</em></li>
<li>$\xi = 3$: $\begin{pmatrix}-2&-1&0\\-1&-1&-1\\0&-1&-2\end{pmatrix}\vec A = \vec 0$<em>Insert into (9.270) (divided by $\omega_0^2$).</em></li>
<li>$A_2 = -2A_1$, $A_2 = -2A_3\Rightarrow\vec A^{(3)} = (1,-2,1)^t$<em>First and third rows; the second is then automatically satisfied (9.281).</em></li>
<li>$\xi = 0$: $A_1 = A_2 = A_3$<em>Rigid displacement; the corresponding "solution" is $(C_0+C_1t)\vec A^{(1)}$ (9.275–9.279).</em></li>
</ol>`,
    example: R`$k = 100\,\text{N/m}$, $m = 1\,\text{kg}$: $\omega_0 = 10\,\text{s}^{-1}$, natural frequencies $0$, $10$ and $17{,}3\,\text{s}^{-1}$.<br>
With equal masses the frequency ratio of the two stretching modes is $\sqrt3 = 1{,}73$; for CO₂ the model gives $\sqrt{1+32/12} = 1{,}91$ (measured approx. $1{,}69$, deviation due to anharmonicity and Fermi resonance).`,
    counterexample: R`<b>Masses additionally bound to walls</b> (spring $k$ between wall and mass 1 or 3): then there is no mode with $\omega = 0$ any more, the matrix changes to $\begin{pmatrix}2&-1&0\\-1&2&-1\\0&-1&2\end{pmatrix}$, and the natural frequencies become $\omega_0\sqrt{2-\sqrt2}$, $\omega_0\sqrt2$, $\omega_0\sqrt{2+\sqrt2}$. Boundary conditions determine the spectrum.`,
    pitfalls: R`<ul><li>Dismissing the mode $\omega = 0$ as "no solution"; it describes free translation.</li>
<li>Reading eigenvectors as fixed amplitudes; they are determined only up to a factor.</li>
<li>Equating eigenvalues $\xi$ with frequencies instead of squared frequencies.</li></ul>`
  },

  // ========================================================================
  // SUPPLEMENTS: typical exam tasks and bridges to Physics II
  // ========================================================================
  "ph9_physikalisches_pendel": {
    title: R`Physical pendulum: T = 2π√(J_A/(m g s)) and reduced pendulum length`,
    category: R`9.2 Harmonic oscillations`,
    type: "herleitung",
    front: R`A rigid body (mass $m$) oscillates about a fixed axis $A$ that lies at distance $s$ from the centre of mass. Derive the period for small deflections. What is the <b>reduced pendulum length</b>? Calculate $T$ for a rod of length $\ell$ suspended at one end, and find the suspension point with minimal period.`,
    back: R`Torque of gravity about $A$ (centre of mass at distance $s$): $M = -mgs\sin\varphi$. Equation of motion (8.93):
$$J_A\ddot\varphi = -mgs\sin\varphi\;\approx\;-mgs\,\varphi\;\Rightarrow\;\ddot\varphi+\frac{mgs}{J_A}\varphi = 0$$
$$\omega_0 = \sqrt{\frac{mgs}{J_A}},\qquad T = 2\pi\sqrt{\frac{J_A}{mgs}},\qquad\ell_r = \frac{J_A}{ms}$$
The physical pendulum swings like a mathematical pendulum of length $\ell_r$. With Steiner $J_A = J_S+ms^2$:
$$\ell_r = s+\frac{J_S}{ms}\ \ge\ s$$
<b>Rod at the end:</b> $J_A = \tfrac13m\ell^2$, $s = \ell/2$: $\ell_r = \tfrac23\ell$, $T = 2\pi\sqrt{\frac{2\ell}{3g}}$.<br>
<b>Minimal period:</b> $\frac{d\ell_r}{ds} = 1-\frac{J_S}{ms^2} = 0\Rightarrow s = \sqrt{J_S/m}$ (radius of gyration), $\ell_r^\text{min} = 2\sqrt{J_S/m}$.`,
    meta: R`Supplement (typical exam task); links sections 8.5.5–8.5.8 (angular momentum theorem, Steiner) with 9.2.2 (harmonic approximation) and 12.4.3 (mathematical pendulum)`,
    explanation: R`<b>Intuition:</b> For the mathematical pendulum all the mass sits at the end; for the physical pendulum it is distributed. Mass parts near the axis contribute little to the inertia, but also little to the torque. The ratio $J_A/(ms)$ determines how "long" the pendulum effectively is.<br><br>
<b>Dependencies:</b> $T\propto\sqrt{J_A/(ms)}$; the mass cancels, the shape does not. A rod hanging at its end swings like a thread pendulum with $\tfrac23$ of its length – hence faster than a thread pendulum of the same length.<br><br>
<b>Minimum:</b> If one suspends very close to the centre of mass ($s\to0$), the torque becomes small and $T\to\infty$; far away $J_A$ becomes large. In between lies a minimum. Clockmakers use the neighbourhood of this minimum, because there small errors in $s$ barely change the period.<br><br>
<b>Connection:</b> Reversible pendulum (Kater): two suspension points with the same period lie exactly $\ell_r$ apart – this measures $g$ precisely without knowing $J_S$. Torsion pendulum (Tab. 9.1): $\omega_0 = \sqrt{\kappa/J}$.`,
    derivation: R`<ol class="fc-steps">
<li>$\vec M = \vec s\times m\vec g$, $M = -mgs\sin\varphi$<em>Gravity acts at the centre of mass (8.3.3, point 6); restoring.</em></li>
<li>$J_A\ddot\varphi = M$<em>Angular momentum theorem about the fixed axis (8.93).</em></li>
<li>$\sin\varphi\approx\varphi$<em>Small deflections (Taylor, 11.1.2).</em></li>
<li>$\ddot\varphi+\omega_0^2\varphi = 0$, $\omega_0^2 = \dfrac{mgs}{J_A}$<em>Harmonic oscillator (9.9).</em></li>
<li>Comparison with $\omega_0^2 = g/\ell$: $\ell_r = \dfrac{J_A}{ms}$<em>Reduced pendulum length.</em></li>
</ol>`,
    example: R`Rod $\ell = 1\,\text{m}$ at the end: $T = 2\pi\sqrt{2/(3\cdot9{,}81)} = 1{,}64\,\text{s}$ (thread pendulum $1\,\text{m}$: $2{,}01\,\text{s}$).<br>
Minimal period of the rod: suspension at distance $s = \ell/\sqrt{12} = 0{,}289\,\text{m}$ from the centre of mass, $T_\text{min} = 1{,}52\,\text{s}$.<br>
Ring (radius $R$) on a nail: $J_A = 2mR^2$, $s = R$, $\ell_r = 2R$.`,
    counterexample: R`<b>"Concentrate the mass in the centre of mass":</b> If one replaces the rod by a point mass at the centre of mass ($\ell = s = 0{,}5\,\text{m}$), one gets $T = 1{,}42\,\text{s}$ instead of $1{,}64\,\text{s}$. The distribution of the mass (the $J_S$) lengthens the period – the physical pendulum is not a thread pendulum of length $s$.`,
    pitfalls: R`<ul><li>Inserting $J_S$ instead of $J_A$ (without Steiner).</li>
<li>Taking for $s$ the rod length instead of the distance axis–centre of mass.</li>
<li>Forgetting to mention the small-angle approximation.</li></ul>`
  },
  "ph9_wellen_ausblick": {
    title: R`Outlook: from a chain of oscillators to the wave equation`,
    category: R`9.7 Coupled oscillations`,
    type: "konzept",
    front: R`Many equal masses $m$ at distance $a$ are connected by springs $k$ into a chain. Set up the equation of motion of the $n$-th mass and show that in the limit $a\to0$ the <b>wave equation</b> results. What is the propagation speed, and what does this mean for Physics II?`,
    back: R`Equation of motion (generalisation of 9.7.2 to $N$ masses):
$$m\ddot x_n = k(x_{n+1}-x_n)-k(x_n-x_{n-1}) = k(x_{n+1}-2x_n+x_{n-1})$$
Continuum limit: $x_n(t)\to u(z,t)$ with $z = na$; the second difference becomes the second derivative:
$$x_{n+1}-2x_n+x_{n-1}\approx a^2\frac{\partial^2u}{\partial z^2}\;\Rightarrow\;\frac{\partial^2u}{\partial t^2} = c^2\frac{\partial^2u}{\partial z^2},\qquad c = a\sqrt{\frac km}$$
Solutions: arbitrary shapes $f(z-ct)$ and $g(z+ct)$ that travel unchanged with $c$ to the right or left; harmonic: $u = A\cos(qz-\omega t)$ with $\omega = cq$.<br>
For finite $a$ (supplement): $\omega(q) = 2\sqrt{k/m}\,|\sin(qa/2)|$ – the natural frequencies of 9.7.2 are special cases of this dispersion relation.`,
    meta: R`Supplement (bridge to Physics II); generalises section 9.7 (coupled oscillators, Eqs. 9.262–9.282) and uses Taylor series (11.1.2)`,
    explanation: R`<b>Intuition:</b> A wave is a chain of coupled oscillators that pass the oscillation on to their neighbours. Each one swings only about its rest position; what propagates is the state (and the energy), not the matter.<br><br>
<b>Dependencies:</b> $c = a\sqrt{k/m}$: stiffer coupling or lighter masses give faster waves. For a string the same calculation gives $c = \sqrt{F/\mu}$ (tension divided by linear density), for sound in solids $c = \sqrt{E/\rho}$ (elastic modulus divided by density).<br><br>
<b>What to take from Physics I:</b> Normal modes (9.7), superposition and beats (9.5), Fourier decomposition (9.6: every wave is a sum of harmonic waves), energy in the oscillator (9.2.8), resonance (9.4: standing waves on a fixed string are resonances).<br><br>
<b>Connection (Physics II):</b> The same equation describes sound, strings, electromagnetic waves ($c = 1/\sqrt{\mu_0\varepsilon_0}$) and – modified as the Schrödinger equation – matter waves. Lattice vibrations (phonons) in solids are exactly this chain with finite $a$.`,
    derivation: R`Continuum limit with a Taylor series:
<ol class="fc-steps">
<li>$x_{n\pm1} = u(z\pm a)$<em>Neighbours as function values at shifted positions.</em></li>
<li>$u(z\pm a) = u\pm a\,u'+\tfrac12a^2u''\pm\dots$<em>Taylor about $z$ (11.3).</em></li>
<li>$u(z+a)-2u(z)+u(z-a) = a^2u''+O(a^4)$<em>Odd terms cancel.</em></li>
<li>$m\ddot u = ka^2u''\Rightarrow\ddot u = \dfrac{ka^2}m\,u''$<em>Insert into the equation of motion.</em></li>
<li>$f(z-ct)$: $\ddot f = c^2f''$, $f'' = f''$ ✓<em>Every shape $f(z-ct)$ solves the equation (chain rule).</em></li>
</ol>`,
    example: R`String with $F = 100\,\text{N}$, $\mu = 0{,}01\,\text{kg/m}$: $c = 100\,\text{m/s}$. Clamped over $L = 0{,}5\,\text{m}$: fundamental $\nu = c/(2L) = 100\,\text{Hz}$.<br>
Steel ($E = 2\cdot10^{11}\,\text{Pa}$, $\rho = 7800\,\text{kg/m}^3$): $c = \sqrt{E/\rho}\approx5\,\text{km/s}$.`,
    counterexample: R`<b>Short wavelengths:</b> For $qa\to\pi$ (wavelength comparable to the atomic spacing) $\omega = cq$ no longer holds; the wave becomes dispersive, and at $q = \pi/a$ it stands still (neighbouring masses swing in antiphase, group velocity zero). The wave equation is an approximation for wavelengths $\gg a$.`,
    pitfalls: R`<ul><li>Believing that in a wave matter moves along with $c$.</li>
<li>Setting the sign wrong in the second difference $x_{n+1}-2x_n+x_{n-1}$.</li>
<li>Equating phase velocity $\omega/q$ and group velocity $d\omega/dq$ outside the linear range.</li></ul>`
  }
};
})();
