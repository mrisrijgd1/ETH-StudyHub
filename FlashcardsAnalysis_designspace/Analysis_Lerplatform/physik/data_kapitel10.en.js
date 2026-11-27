(function () {
const R = String.raw;
window.FLASHCARDS_EN_KAPITEL_10 = {
  "ph10_druck_gay_lussac": {
    title: R`Thermometric properties, pressure and Gay-Lussac's law`,
    category: R`10.1 Temperature and the gas thermometer`,
    type: "gesetz",
    front: R`What is a <b>thermometric property</b>? How is <b>pressure</b> defined, and which units are common? What do <b>Gay-Lussac's laws</b> say about a gas at constant pressure and at constant volume?`,
    back: R`<b>Thermometric property:</b> a measurable quantity that changes with temperature and, after calibration, yields the temperature: thermal expansion (mercury), electrical resistance of metals, volume of a gas at constant pressure, pressure of a gas at constant volume.<br><br>
<b>Pressure</b> (gas thermometer, Fig. 10.1: mercury column with $F = mg = \rho A\ell g$, 10.1):
$$p = \frac FA,\qquad[p] = 1\,\text{Pa} = 1\,\text{N/m}^2\qquad(10.2,\,10.3)$$
$F$: normal component of the force. $1\,\text{atm} = 1{,}01325\cdot10^5\,\text{Pa}$, $1\,\text{bar} = 10^5\,\text{Pa}$ (10.4, 10.5).<br><br>
<b>Gay-Lussac</b> (for all gases at low density, independent of their composition):
$$V = C_1T\quad(p = \text{const.}),\qquad p = C_2T\quad(V = \text{const.})\qquad(10.6,\,10.7)$$`,
    meta: R`Script: sections 10.1–10.1.2, Eqs. (10.1)–(10.7), Figs. 10.1–10.2, pp. 279–281`,
    explanation: R`<b>Intuition:</b> Temperature itself cannot be seen directly; one measures something else that changes reliably with it. Gases are ideal for this, because all gases at low density behave alike, whatever their chemistry.<br><br>
<b>Microscopically:</b> The pressure of a gas arises from molecules striking the wall. Warmer means faster molecules, so more and harder impacts: higher pressure (at fixed volume) or larger volume (at fixed pressure).<br><br>
<b>Dependencies:</b> $V\propto T$ and $p\propto T$ hold only with the <i>absolute</i> temperature $T$ (kelvin). In Celsius they would be affine relations with an intercept.<br><br>
<b>Connection:</b> Together with Boyle-Mariotte ($pV = $ const. at fixed $T$) the Gay-Lussac laws give the ideal gas equation $pV = NkT$ (10.6.1). Demonstration: a balloon immersed in liquid nitrogen shrinks strongly (Fig. 10.2).`,
    derivation: R`Pressure of a liquid column (principle of the gas thermometer at constant pressure):
<ol class="fc-steps">
<li>$F = mg = \rho V_\text{Hg}g = \rho A\ell g$<em>Weight of the mercury column of length $\ell$ and cross-section $A$ (10.1).</em></li>
<li>$p_\text{Hg} = \dfrac FA = \rho g\ell$<em>Pressure = force per area (10.2); independent of the cross-section.</em></li>
<li>$p_\text{Gas} = p_\text{Hg}$ (vacuum above the column)<em>Equilibrium at the mercury plug: the gas is at constant pressure.</em></li>
<li>$V = Ah = C_1T\Rightarrow h\propto T$<em>Gay-Lussac: the height $h$ of the gas column indicates the temperature.</em></li>
</ol>`,
    example: R`<b>Mercury column</b> $\ell = 76\,\text{cm}$: $p = 13\,600\cdot9{,}81\cdot0{,}76\,\text{Pa} = 1{,}01\cdot10^5\,\text{Pa}$, exactly $1\,\text{atm}$ (hence "760 mm Hg").<br>
<b>Balloon</b> from $20\,^\circ\text{C}$ ($293\,\text{K}$) into liquid nitrogen ($77\,\text{K}$) at constant pressure: $V_2/V_1 = 77/293 = 0{,}26$, so it shrinks to about a quarter (in reality even more, because parts of the air condense).`,
    counterexample: R`<b>Mercury thermometer and gas thermometer do not agree everywhere:</b> If both are calibrated at $0$ and $100\,^\circ\text{C}$, they show slightly different values in between, because the expansion of mercury is not exactly linear in $T$. Only the gas thermometer (at low density) gives a substance-independent scale.`,
    pitfalls: R`<ul><li>Using Celsius temperatures in Gay-Lussac's law.</li>
<li>Applying the laws at high density or near liquefaction.</li>
<li>Equating bar and atm (difference 1.3 %).</li></ul>`
  },
  "ph10_kelvin_skala": {
    title: R`Absolute zero and the Kelvin scale (triple point 273.16 K)`,
    category: R`10.2 Absolute temperature and the Kelvin scale`,
    type: "definition",
    front: R`How does the gas thermometer reveal the existence of an <b>absolute zero</b>? How is the <b>Kelvin scale</b> defined via the triple point of water, and how does one measure a temperature with it?`,
    back: R`<b>Celsius via fixed points</b> (constant pressure, $T\propto h$, 10.8, 10.9):
$$T(h) = \frac{h-h_0}{h_{100}-h_0}\cdot100^\circ\qquad(10.10)$$
<b>Absolute zero:</b> If one measures $p(T)$ of a gas at constant volume (ice water, boiling water, liquid nitrogen $77\,\text{K}$) and extrapolates, $p = 0$ at $-273\,^\circ\text{C}$ (Fig. 10.3). Below that the pressure would be negative: there is a minimum temperature.<br><br>
<b>Kelvin scale:</b> the fixed point is the <b>triple point of water</b> (vapour, water and ice in equilibrium; unique pressure $610{,}7\,\text{Pa}$):
$$T_3 = 273{,}16\,\text{K} = 0{,}01\,^\circ\text{C}\qquad(10.11)$$
Zero point of the scale = absolute zero; $T\lt0\,\text{K}$ is impossible. Measurement with the gas thermometer at constant volume:
$$T = \frac{273{,}16\,\text{K}}{p_3}\,p\qquad(10.12)$$
At low density independent of the type of gas.`,
    meta: R`Script: sections 10.2–10.2.1, Eqs. (10.8)–(10.12), Fig. 10.3, pp. 282–284`,
    explanation: R`<b>Intuition:</b> If gas pressure is proportional to the thermal motion of the molecules, then "zero pressure" is the state in which the molecules (classically) are at rest. Colder is impossible.<br><br>
<b>Why the triple point?</b> The freezing point depends on pressure; the triple point does not: it exists only at exactly one pressure and one temperature. That is why it is a reproducible fixed point (a sealed triple-point cell).<br><br>
<b>Dependencies:</b> A kelvin step is as large as a Celsius step: $T/\text{K} = \vartheta/^\circ\text{C}+273{,}15$. Temperature differences are the same on both scales.<br><br>
<b>Note:</b> Since 2019 the kelvin in the SI has been defined via a fixed value of the Boltzmann constant $k = 1{,}380649\cdot10^{-23}\,\text{J/K}$; the triple point then lies only very precisely (not by definition) at $273{,}16\,\text{K}$.<br><br>
<b>Connection:</b> Thermodynamically the absolute temperature is also defined via the Carnot efficiency $\eta = 1-T_k/T_w$ (10.7.2) – independent of any substance.`,
    derivation: R`Extrapolation to absolute zero:
<ol class="fc-steps">
<li>$p(\vartheta) = p_0\left(1+\beta\vartheta\right)$<em>Measurement at constant volume: linear in the Celsius temperature $\vartheta$.</em></li>
<li>$\beta\approx\dfrac1{273{,}15\,^\circ\text{C}}$<em>Slope from the measured points; the same for all dilute gases.</em></li>
<li>$p = 0\Leftrightarrow\vartheta = -\dfrac1\beta = -273{,}15\,^\circ\text{C}$<em>Intercept with the temperature axis (Fig. 10.3).</em></li>
<li>$T := \vartheta+273{,}15\Rightarrow p = p_0\beta T\propto T$<em>With the shifted zero the relation becomes proportional (10.7).</em></li>
<li>$\dfrac{T}{T_3} = \dfrac{p}{p_3}$<em>One fixed point is enough; from this (10.12).</em></li>
</ol>`,
    example: R`Gas thermometer: $p_3 = 50{,}0\,\text{kPa}$ at the triple point, in boiling water $p = 68{,}3\,\text{kPa}$: $T = 273{,}16\cdot68{,}3/50{,}0\,\text{K} = 373{,}1\,\text{K}$.<br>
Liquid nitrogen: $77\,\text{K} = -196\,^\circ\text{C}$; room temperature $20\,^\circ\text{C} = 293{,}15\,\text{K}$.`,
    counterexample: R`<b>"Twice as warm" in Celsius:</b> $20\,^\circ\text{C}$ is not twice as warm as $10\,^\circ\text{C}$; the ratio of the absolute temperatures is $293/283 = 1{,}035$. Ratios of temperatures (gas laws, efficiencies) make sense only in kelvin.`,
    pitfalls: R`<ul><li>Confusing the triple point ($0{,}01\,^\circ\text{C}$) with the freezing point at normal pressure ($0\,^\circ\text{C}$).</li>
<li>Inserting Celsius values into formulas with $T$.</li>
<li>Confusing $273{,}16$ and $273{,}15$ (triple point vs. shift of the zero point).</li></ul>`
  },
  "ph10_waermekapazitaet": {
    title: R`Heat as energy, heat capacity, specific and molar heat`,
    category: R`10.3 Heat energy and heat capacity`,
    type: "definition",
    front: R`How was it recognised that heat is a form of <b>energy</b>? Define the heat capacity $C$, the specific heat capacity $c_m$ and the molar heat capacity $c_M$. How does one calculate the heat when $C$ depends on temperature?`,
    back: R`Formerly: "caloric fluid" (caloricum). Thompson (late 18th century): heat is energy; Mayer measured the mechanical heat equivalent (warming water by shaking it) and was the first to formulate energy conservation. The <b>calorie</b> (heat that warms $1\,\text{g}$ of water from $287{,}65$ to $288{,}65\,\text{K}$):
$$1\,\text{cal} = 4{,}1868\,\text{J}\qquad(10.13)$$
<b>Definitions:</b>
$$C = \frac{\Delta Q}{\Delta T}\ [\text{J/K}],\qquad c_m = \frac1m\frac{\Delta Q}{\Delta T}\ [\text{J/(kg K)}],\qquad c_M = \frac1\nu\frac{\Delta Q}{\Delta T}\ [\text{J/(mol K)}]\qquad(10.14\text{–}10.16)$$
$C$ belongs to an object, $c$ to a substance. In general, with temperature-dependent $C$:
$$Q^\swarrow = \int\delta Q^\swarrow = \int_{T_a}^{T_e}C(T)\,dT\;\approx\;C\,(T_e-T_a)\qquad(10.17,\,10.18)$$
($\swarrow$: supplied to the body.)`,
    meta: R`Script: sections 10.3–10.3.1, Eqs. (10.13)–(10.18), pp. 284–285`,
    explanation: R`<b>Intuition:</b> The heat capacity says how much energy one must "put in" to raise the temperature by one kelvin. A body with large $C$ is a thermal heavyweight: it warms up slowly and stores a lot of energy.<br><br>
<b>Dependencies:</b> $C = mc_m = \nu c_M$, so proportional to the amount of substance. Water has an exceptionally high specific heat ($4182\,\text{J/(kg K)}$), about ten times that of copper; that is why the oceans moderate the climate.<br><br>
<b>The symbol $\delta$:</b> Heat is not a state variable. A body does not "have" heat, it has internal energy. That is why one writes $\delta Q$ for a small amount of heat instead of $dQ$ (10.5).<br><br>
<b>Connection:</b> For gases the heat capacity depends on whether the volume or the pressure is kept constant ($C_V$ vs. $C_p$, 10.6.2). At phase transitions $C$ is formally infinite (heat supplied without a change in temperature, latent heat, 10.8.2.2).`,
    derivation: R`Mixing temperature of two bodies without losses:
<ol class="fc-steps">
<li>$Q^\nearrow_1 = C_1(T_1-T_m)$<em>Heat that the hot body releases on cooling to $T_m$.</em></li>
<li>$Q^\swarrow_2 = C_2(T_m-T_2)$<em>Heat that the cold body absorbs.</em></li>
<li>$C_1(T_1-T_m) = C_2(T_m-T_2)$<em>Energy conservation, no losses to the surroundings.</em></li>
<li>$T_m = \dfrac{C_1T_1+C_2T_2}{C_1+C_2}$<em>Heat-capacity-weighted mean (cf. 10.21).</em></li>
</ol>`,
    example: R`$1\,\text{kg}$ of water from $20$ to $100\,^\circ\text{C}$: $Q = 4182\cdot80\,\text{J} = 335\,\text{kJ}$; a $2\,\text{kW}$ kettle needs $2{,}8\,\text{min}$ for this.<br>
$200\,\text{g}$ of copper ($c = 386\,\text{J/(kg K)}$, $C = 77\,\text{J/K}$) at $100\,^\circ\text{C}$ in $500\,\text{g}$ of water ($C = 2091\,\text{J/K}$) at $20\,^\circ\text{C}$: $T_m = 22{,}8\,^\circ\text{C}$.`,
    counterexample: R`<b>Heat is not stored in a body:</b> A glass of warm water may have been warmed by heat supply or by stirring (work); one cannot see from the glass which part was "heat". Only the internal energy $U$ is stored. "Heat content" is therefore a misleading phrase.`,
    pitfalls: R`<ul><li>Confusing $C$, $c_m$ and $c_M$ (recognisable from the unit).</li>
<li>Assuming $C$ is constant over large temperature differences.</li>
<li>Using $Q = C\Delta T$ at phase transitions.</li></ul>`
  },
  "ph10_dulong_petit": {
    title: R`Heat capacity of solids: the Dulong-Petit rule (≈ 3R)`,
    category: R`10.3 Heat energy and heat capacity`,
    type: "gesetz",
    front: R`Why do the specific heat capacities of solids differ strongly, but the molar ones hardly at all? What is the <b>Dulong-Petit rule</b>, how is it explained, and which exceptions are there? Describe the demonstration experiment with Al and Pb.`,
    back: R`Tab. 10.1: $c_m$ of Al $900$, Cu $386$, Pb $128\,\text{J/(kg K)}$ – very different. Per mole: Al $24{,}4$, Cu $24{,}5$, Pb $26{,}5\,\text{J/(mol K)}$ – almost equal.<br>
<b>Dulong-Petit:</b>
$$c_M\approx25\,\frac{\text{J}}{\text{mol K}}\qquad(10.19)$$
<b>Explanation:</b> The atoms oscillate about their rest positions; at constant volume the supplied energy goes only into these oscillations. Per mole one always compares the same number of atoms; the energy per atom and kelvin is substance-independent ($6\times\tfrac12k$, equipartition: $c_M = 3R = 24{,}9\,\text{J/(mol K)}$).<br>
<b>Exceptions ("anomalous"):</b> Be ($11$), B ($13$), diamond ($6\,\text{J/(mol K)}$).<br><br>
<b>Demo:</b> $14\,\text{mol}$ Pb ($2{,}9\,\text{kg}$) and Al ($380\,\text{g}$) each, both $\nu c\approx350\,\text{J/K}$, at $\approx100\,^\circ\text{C}$ in $500\,\text{g}$ of water each ($C^W = 2090\,\text{J/K}$, $20\,^\circ\text{C}$):
$$C^W(T_e-T_a^W) = \nu c(T_a-T_e)\;\Rightarrow\;T_e = \frac{\nu cT_a+C^WT_a^W}{C^W+\nu c}\approx304\,\text{K}\qquad(10.20,\,10.21)$$
Both containers reach the same final temperature ($\approx30\,^\circ\text{C}$).`,
    meta: R`Script: section 10.3.2, Eqs. (10.19)–(10.21), Tab. 10.1, pp. 285–287`,
    explanation: R`<b>Intuition:</b> Heat is distributed over atoms, not over kilograms. A kilogram of lead contains only a seventh as many atoms as a kilogram of aluminium; therefore it needs about a seventh of the energy for the same warming.<br><br>
<b>Dependencies:</b> $c_m\approx\dfrac{3R}{M}$: the specific heat is inversely proportional to the molar mass. Heavy atoms, small specific heat.<br><br>
<b>Why exceptions?</b> For light, strongly bound atoms (high vibration frequencies) the oscillations are partly "frozen" at room temperature: the quantum energy $h\nu$ is larger than $kT$. At low temperatures $c_M$ falls to zero for all solids (Einstein and Debye models, quantum physics).<br><br>
<b>Connection:</b> Water, with $75{,}4\,\text{J/(mol K)}$, has a clearly higher molar heat (hydrogen bonds, many degrees of freedom per molecule). Ice at $-10\,^\circ\text{C}$ has about half of that.`,
    derivation: R`Why $3R$ (preview of the equipartition law, 10.6.3):
<ol class="fc-steps">
<li>Each atom: 3 kinetic + 3 potential quadratic degrees of freedom<em>Harmonic oscillator in 3 spatial directions: $\tfrac12mv_i^2$ and $\tfrac12kx_i^2$.</em></li>
<li>$\bar E = 6\cdot\tfrac12kT = 3kT$ per atom<em>Each quadratic degree of freedom contributes on average $\tfrac12kT$ (cf. $\langle E_\text{kin}\rangle = \langle E_\text{pot}\rangle$, 9.2.8).</em></li>
<li>$U = 3N_AkT\cdot\nu = 3\nu RT$<em>For $\nu$ moles.</em></li>
<li>$c_M = \dfrac1\nu\dfrac{dU}{dT} = 3R = 24{,}9\,\dfrac{\text{J}}{\text{mol K}}$<em>Dulong-Petit (10.19, Tab. 10.2).</em></li>
</ol>`,
    example: R`Demo worked through: $T_e = \frac{350\cdot373+2090\cdot293}{2440}\,\text{K} = 304\,\text{K}\approx31\,^\circ\text{C}$ (the script rounds to $300\,\text{K}$).<br>
Copper: $c_m\approx3R/M = 24{,}9/0{,}0635 = 393\,\text{J/(kg K)}$; measured $386$.`,
    counterexample: R`<b>Diamond</b> at room temperature: $c_M\approx6\,\text{J/(mol K)}$, only a quarter of $3R$. The classical explanation fails here; only the quantisation of the lattice vibrations explains it. Dulong-Petit is a high-temperature limit.`,
    pitfalls: R`<ul><li>Applying Dulong-Petit to the specific (mass-related) heat.</li>
<li>Using the rule at low temperatures or for light, hard materials.</li>
<li>Forgetting the heat capacity of the vessel in mixing calculations.</li></ul>`
  },
  "ph10_nullter_hauptsatz_innere_energie": {
    title: R`Zeroth law, thermal equilibrium and internal energy as a state function`,
    category: R`10.4 The zeroth law of thermodynamics`,
    type: "konzept",
    front: R`What does the <b>zeroth law</b> state? What is the <b>internal energy</b> $U$, and what does it mean that it is a <b>state function</b>, whereas heat and work are not?`,
    back: R`<b>Zeroth law:</b> If two bodies are brought into contact, after some time they reach the same temperature everywhere: <b>thermal equilibrium</b>. Macroscopically the temperature is the quantity that systems in contact finally share; microscopically a measure of the thermal motion of the atoms. (Central statement: the temperature exists.)<br><br>
<b>Internal energy:</b> energy of the (disordered) motion and interaction of all particles. State function:
$$U = U(p,V,T,\dots),\qquad\Delta U = U_E-U_A\qquad(10.22\text{–}10.24)$$
it depends only on the initial and final state, not on the path.<br><br>
<b>Heat $Q$:</b> energy exchanged solely because of a temperature difference. Heat and work are <b>path-dependent</b> (process quantities); that is why one writes $\delta Q$, $\delta W$, but $dU$.`,
    meta: R`Script: sections 10.4–10.5.1, Eqs. (10.22)–(10.24), footnotes 7–9, pp. 287–289`,
    explanation: R`<b>Intuition:</b> The internal energy is like an account balance: it depends only on how much is in the account, not on whether the money came as cash (work) or by transfer (heat). Heat and work are the postings, not the balance.<br><br>
<b>Transitivity:</b> The usual formulation of the zeroth law: if A and C are in equilibrium and B and C are in equilibrium, then A and B are too. This is exactly what makes a thermometer (C) useful.<br><br>
<b>State function mathematically:</b> $dU$ is a total differential; $\oint dU = 0$ for every cycle. For $\delta Q$ and $\delta W$ this does not hold: a cycle can deliver net work (heat engine), although $U$ is the same at the end.<br><br>
<b>Connection:</b> Analogous to the conservative force field in mechanics (Ch. 4): the potential energy is a state function, the work of a non-conservative force (friction) is path-dependent.`,
    derivation: R`Why heat is not a state function (example ideal gas, path from $(V_1,T)$ to $(V_2,T)$):
<ol class="fc-steps">
<li>Path 1: isothermal, reversible: $Q_1^\swarrow = \nu RT\ln\dfrac{V_2}{V_1}$<em>The gas does work, and the same amount of heat flows in (10.49).</em></li>
<li>Path 2: free expansion into a vacuum: $Q_2^\swarrow = 0$, $W_2 = 0$<em>No work, no heat, $T$ stays (10.7.4, Fig. 10.26).</em></li>
<li>$\Delta U_1 = \Delta U_2 = 0$<em>Same initial and final state: same change of the state function.</em></li>
<li>$Q_1\neq Q_2$<em>The heat depends on the path, so there is no function "$Q$ of the state".</em></li>
</ol>`,
    example: R`<b>Thermometer</b> in hot tea: it shows the right temperature only once it is in equilibrium with the tea. If it has a large heat capacity, it noticeably cools the tea in the process.<br>
<b>Cycle:</b> a car engine runs through a loop per revolution: $\Delta U = 0$, but net $W^\nearrow\gt0$ and $Q^\swarrow_\text{net}\gt0$.`,
    counterexample: R`<b>"Feeling equally warm" is not equilibrium in the physical sense:</b> Metal and wood at the same temperature feel differently warm, because metal conducts the heat of the hand away faster. The sense of touch measures heat flows, not temperatures.`,
    pitfalls: R`<ul><li>Speaking of "the heat in a body".</li>
<li>Assuming $\oint\delta Q = 0$ for a cycle.</li>
<li>Confusing temperature (state variable, intensive) and heat (transferred energy, process quantity).</li></ul>`
  },
  "ph10_erster_hauptsatz": {
    title: R`First law: dU = δW↙ + δQ↙`,
    category: R`10.5 The first law of thermodynamics`,
    type: "gesetz",
    front: R`State the <b>first law</b> of thermodynamics with the sign convention of the script ($\swarrow$ supplied, $\nearrow$ released). What holds for an isolated system? Which demonstration experiments show the conversion of work into internal energy?`,
    back: R`The internal energy of a system can be changed by supplied work <i>and</i> by supplied heat:
$$dU = \delta W^\swarrow+\delta Q^\swarrow\qquad(10.25)$$
For volume work on the gas: $\delta W^\swarrow = -p\,dV$ (compression, $dV\lt0$, brings work in). In an isolated system: $dU = 0$.<br><br>
The first law is the <b>energy conservation law</b> with heat as an additional form of energy. Consequence: there is no perpetual motion machine of the first kind (a machine that produces work from nothing).<br><br>
<b>Demonstrations:</b> A lead rod is hammered, and its temperature rises drastically (Fig. 10.4). A falling ball hits a body and warms it (Fig. 10.5): mechanical energy becomes internal energy and is then passed on as heat to the thermometer.`,
    meta: R`Script: section 10.5.1, Eq. (10.25), Figs. 10.4–10.5, footnotes 7–9, pp. 288–290`,
    explanation: R`<b>Intuition:</b> There are two doors through which energy enters a system: an ordered one (work: pushing a piston, stirring, hammering) and a disordered one (heat: contact with something hotter). What comes in through both doors is the change in the energy content.<br><br>
<b>Sign:</b> With $\swarrow$ everything that goes in counts positively. Other books (engineering) write $dU = \delta Q-\delta W$ with $W$ = work done by the system. Physically identical, only different bookkeeping. Always check which convention applies!<br><br>
<b>Dependencies:</b> For the ideal gas $U$ depends only on $T$ ($U = \tfrac f2\nu RT$). Therefore in isothermal processes $Q^\swarrow = -W^\swarrow$, and in adiabatic ones $dU = \delta W^\swarrow$ (10.6.4).<br><br>
<b>Connection:</b> An extension of the mechanical energy law (Ch. 4): friction does not "destroy" energy, it converts it into internal energy. What the first law does not say: in which direction processes run. The second law governs that.`,
    derivation: R`Volume work on the gas (sign):
<ol class="fc-steps">
<li>$\delta W^\nearrow = F\,dx = pA\,dx = p\,dV$<em>The expanding gas pushes the piston by $dx$ (10.38, Fig. 10.9).</em></li>
<li>$\delta W^\swarrow = -\delta W^\nearrow = -p\,dV$<em>Work done on the gas: negative on expansion, positive on compression (10.44).</em></li>
<li>$dU = \delta Q^\swarrow - p\,dV$<em>First law for a gas with pure volume work.</em></li>
<li>Isolated: $\delta Q^\swarrow = 0$, $\delta W^\swarrow = 0\Rightarrow dU = 0$<em>Energy conservation.</em></li>
</ol>`,
    example: R`<b>Lead hammer:</b> $20$ blows of $30\,\text{J}$ each on $200\,\text{g}$ of lead ($c = 128\,\text{J/(kg K)}$, $C = 25{,}6\,\text{J/K}$): $\Delta T = 600/25{,}6 = 23\,\text{K}$, provided no heat flows away.<br>
<b>Bicycle pump:</b> Pumping quickly (compression, nearly adiabatic) noticeably warms the pump: $\delta W^\swarrow\gt0$, $\delta Q\approx0$, so $dU\gt0$.`,
    counterexample: R`<b>The first law permits more than nature allows:</b> That a warm plate spontaneously cools down and lifts a weight (heat completely converted into work, from a single reservoir) does not violate energy conservation. It still never happens – forbidden by the second law (perpetual motion machine of the second kind).`,
    pitfalls: R`<ul><li>Mixing the sign conventions of different books.</li>
<li>Writing $\delta W^\swarrow = +p\,dV$ (wrong sign).</li>
<li>Believing isothermal means "no heat" (for the ideal gas it means $dU = 0$, not $\delta Q = 0$).</li></ul>`
  },
  "ph10_ideale_gasgleichung": {
    title: R`Ideal gas and equation of state pV = NkT = νRT`,
    category: R`10.6 Ideal gases`,
    type: "gesetz",
    front: R`What is an <b>ideal gas</b>? How do Boyle-Mariotte and Gay-Lussac lead to the equation of state? Give $k$, $N_A$ and $R$ with units, and calculate the molar volume and the density of a gas.`,
    back: R`<b>Ideal gas:</b> very many neutral atoms or molecules, whose mutual interaction and whose own volume are neglected. It cannot be liquefied.<br><br>
Boyle-Mariotte ($pV = $ const. at $T = $ const.), Gay-Lussac ($V\propto T$, $p\propto T$) and $pV\propto$ amount of gas give:
$$pV = NkT\qquad(10.26)$$
$$k = 1{,}381\cdot10^{-23}\,\frac{\text{J}}K\qquad(10.27,\,10.28)$$
$kT$ is an energy: $T = 300\,\text{K}\Rightarrow kT = 4{,}1\cdot10^{-21}\,\text{J}$ (10.29). Per amount of substance, $N = \nu N_A$:
$$pV = \nu RT,\qquad N_A = 6{,}022\cdot10^{23}\,\text{mol}^{-1},\qquad R = N_Ak = 8{,}314\,\frac{\text{J}}{\text{mol K}}\qquad(10.30\text{–}10.32)$$
Molar volume at $0\,^\circ\text{C}$: $V_M = RT/p$; density:
$$\rho = \frac{M}{V_M} = \frac{Mp}{RT}\qquad(10.33)$$`,
    meta: R`Script: sections 10.6–10.6.1, Eqs. (10.26)–(10.33), Fig. 10.6, pp. 289–293`,
    explanation: R`<b>Intuition:</b> At low density the molecules hardly "see" each other. Then only counts how many particles fly against the wall how fast. The type of gas does not matter: one mole of helium and one mole of xenon occupy the same volume at the same $p$ and $T$ (Avogadro).<br><br>
<b>Dependencies:</b> $p\propto N$, $p\propto T$, $p\propto1/V$. The density is $\propto M$ (a heavy gas sinks: CO₂ collects in hollows) and $\propto p/T$ (warm air rises: hot-air balloon).<br><br>
<b>$kT$ as energy scale:</b> At room temperature $kT\approx\frac1{40}\,\text{eV}$. Processes with energies $\gg kT$ (chemical bonds, $\sim\text{eV}$) hardly run thermally; those with $\ll kT$ are fully excited.<br><br>
<b>Connection:</b> Microscopic derivation via impacts on the wall: $pV = \tfrac23N\langle E_\text{kin}\rangle$; compared with $pV = NkT$ it follows that $\langle E_\text{kin}\rangle = \tfrac32kT$ (equipartition, 10.6.3; Ch. 14).`,
    derivation: R`Combining the individual laws:
<ol class="fc-steps">
<li>$pV = f(T)$ at fixed amount of gas<em>Boyle-Mariotte: at constant $T$, $pV$ is constant.</em></li>
<li>$V\propto T$ at fixed $p$ $\Rightarrow f(T)\propto T$<em>Gay-Lussac (10.6).</em></li>
<li>$pV\propto N$ at fixed $p$, $T$<em>Two equal vessels joined: double the volume at the same $p$, $T$.</em></li>
<li>$pV = NkT$<em>The proportionality constant $k$ is experimentally the same for all gases (10.26).</em></li>
<li>$pV = \nu N_AkT = \nu RT$<em>Per mole: $R = N_Ak$ (10.31, 10.32).</em></li>
</ol>`,
    example: R`<b>Molar volume</b> at $273{,}15\,\text{K}$: at $1\,\text{atm}$ $22{,}4\,\text{L/mol}$, at $1\,\text{bar}$ $22{,}7\,\text{L/mol}$. (The script gives $22{,}4\,\text{m}^3/\text{kmol}$ at $1\,\text{bar}$; this value belongs to $1\,\text{atm}$.)<br>
<b>Air density</b> ($M = 29\,\text{g/mol}$) at $1\,\text{bar}$: $0\,^\circ\text{C}$: $1{,}28\,\text{kg/m}^3$; $20\,^\circ\text{C}$: $1{,}19\,\text{kg/m}^3$.<br>
<b>Number of particles</b> in $1\,\text{cm}^3$ of air: $N = pV/(kT) = 2{,}5\cdot10^{19}$.`,
    counterexample: R`<b>CO₂ at 6 MPa and 290 K:</b> The molar volume lies far below the ideal value, and on further compression the gas liquefies (Fig. 10.28). An ideal gas cannot condense. For high densities or low temperatures one needs the van der Waals equation (10.8.1).`,
    pitfalls: R`<ul><li>Inserting $T$ in Celsius or $p$ in bar without converting.</li>
<li>Confusing $N$ (number of particles) and $\nu$ (amount of substance), or $k$ and $R$.</li>
<li>Inserting $M$ in g/mol instead of kg/mol in $\rho = Mp/(RT)$.</li></ul>`
  },
  "ph10_cp_minus_cv": {
    title: R`Molar heats C_V and C_p of the ideal gas: C_p − C_V = R`,
    category: R`10.6 Ideal gases`,
    type: "herleitung",
    front: R`Why does one need more heat to warm a gas by $\Delta T$ at <b>constant pressure</b> than at <b>constant volume</b>? Derive $C_p = C_V+R$ with the first law.`,
    back: R`$$\Delta Q_1 = \nu C_V\Delta T\ (V = \text{const.}),\qquad\Delta Q_2 = \nu C_p\Delta T\ (p = \text{const.})\qquad(10.34,\,10.35)$$
At constant pressure the gas expands and lifts the weight on the piston (Fig. 10.8): part of the heat becomes work.<br><br>
<b>Constant volume</b> (no work):
$$C_V = \frac1\nu\left(\frac{\delta Q^\swarrow}{\delta T}\right)_V = \frac1\nu\left\{\frac{dU}{dT}-\frac{\delta W^\swarrow}{\delta T}\right\}_V = \frac1\nu\frac{dU}{dT}\qquad(10.37)$$
<b>Constant pressure:</b> $\delta W^\nearrow = p\,dV$ (10.38), and from $pV = \nu RT$: $p\,dV = \nu R\,dT$ (10.39, 10.40):
$$C_p = \frac1\nu\left\{\frac{dU}{dT}+\frac{\delta W^\nearrow}{\delta T}\right\}_p = C_V+R\qquad(10.36,\,10.41)$$`,
    meta: R`Script: section 10.6.2, Eqs. (10.34)–(10.41), Figs. 10.7–10.9, pp. 293–295`,
    explanation: R`<b>Intuition:</b> At constant volume all heat goes into the motion of the molecules. At constant pressure the gas must additionally "make room", i.e. do work against the external pressure; this energy is missing from the temperature increase.<br><br>
<b>Why exactly $R$?</b> For the ideal gas $U$ depends only on $T$ (no interactions), so $dU/dT$ is the same in both cases. The difference is only the expansion work $p\,dV = \nu R\,dT$, per mole and kelvin exactly $R$, for every ideal gas.<br><br>
<b>Dependencies:</b> $\kappa = C_p/C_V\gt1$ depends on the number of degrees of freedom (10.6.3): $\kappa = 1 + \frac2f$. The more degrees of freedom, the smaller the relative difference.<br><br>
<b>Connection:</b> For solids and liquids the expansion is small, so $C_p\approx C_V$ (Tab. 10.2: solids $3R$, no $\kappa$). $C_p$ is the derivative of the enthalpy (10.105).`,
    derivation: R`<ol class="fc-steps">
<li>$\delta Q^\swarrow = dU-\delta W^\swarrow = dU+p\,dV$<em>First law with $\delta W^\swarrow = -p\,dV$.</em></li>
<li>$V = $ const.: $\delta Q^\swarrow = dU\Rightarrow\nu C_V = dU/dT$<em>No volume work (10.37); $dT = \delta T$, since $T$ is a state variable.</em></li>
<li>$p = $ const.: $p\,dV = d(pV) = \nu R\,dT$<em>Ideal gas equation differentiated at fixed $p$ (10.39).</em></li>
<li>$\delta Q^\swarrow = dU+\nu R\,dT$<em>$dU$ is the same as at $V = $ const., since $U = U(T)$ for the ideal gas.</em></li>
<li>$\nu C_p = \nu C_V+\nu R\Rightarrow C_p = C_V+R$<em>Divide by $\nu\,dT$ (10.41).</em></li>
</ol>`,
    example: R`Air (diatomic, $C_V = \tfrac52R = 20{,}8$, $C_p = \tfrac72R = 29{,}1\,\text{J/(mol K)}$): warming $1\,\text{mol}$ by $10\,\text{K}$: isochoric $208\,\text{J}$, isobaric $291\,\text{J}$. The difference $83\,\text{J} = \nu R\Delta T$ is the expansion work.`,
    counterexample: R`<b>Water at 4 °C:</b> It does not expand on warming there at all (density maximum), so $C_p = C_V$ holds exactly there. And for real gases near condensation $C_p-C_V\neq R$, because $U$ also depends on the volume (interaction energy, 10.9.2).`,
    pitfalls: R`<ul><li>Assuming $C_p\lt C_V$.</li>
<li>Using $C_p-C_V = R$ for solids or real gases.</li>
<li>Calculating isobaric processes with $C_V$.</li>
<li>Confusing molar $C_V$ and $C_p$ with specific values per kg; $R$ applies only molarly.</li></ul>`
  },
  "ph10_aequipartition": {
    title: R`Equipartition law: ½kT per degree of freedom, C_V = fR/2, κ = (f+2)/f`,
    category: R`10.6 Ideal gases`,
    type: "gesetz",
    front: R`What does the <b>equipartition law</b> state? Use it to calculate $U$, $C_V$, $C_p$ and $\kappa = C_p/C_V$ for mono-, di- and triatomic gases as well as for solids. Why does the heat capacity of H₂ depend on temperature?`,
    back: R`Mean energy of a molecule with $f$ degrees of freedom:
$$\bar E = \frac f2kT\qquad(10.42)$$
Internal energy of the ideal gas (only kinetic energy, no interaction):
$$U = \frac f2\nu N_AkT = \frac f2\nu RT,\qquad C_V = \frac f2R,\qquad C_p = \frac{f+2}2R,\qquad\kappa = \frac{f+2}f\qquad(10.43)$$
<b>Tab. 10.2:</b>
<ul><li>monatomic: 3 transl. → $C_V = \tfrac32R$, $C_p = \tfrac52R$, $\kappa = \tfrac53$</li>
<li>diatomic: 3 transl. + 2 rot. → $\tfrac52R$, $\tfrac72R$, $\kappa = \tfrac75$</li>
<li>triatomic (angular): 3 + 3 → $3R$, $4R$, $\kappa = \tfrac43$</li>
<li>solids: 3 kin. + 3 pot. → $C_V = 3R$</li></ul>
<b>Freezing out:</b> At low temperatures some degrees of freedom cannot be excited. H₂: below $\sim100\,\text{K}$ only translation ($\tfrac32R$), then rotation ($\tfrac52R$), and only above $\sim1000\,\text{K}$ vibration ($\tfrac72R$) (Fig. 10.10). The explanation requires the quantisation of energy.`,
    meta: R`Script: section 10.6.3, Eqs. (10.42)–(10.43), Tab. 10.2, Fig. 10.10, pp. 296–297`,
    explanation: R`<b>Intuition:</b> In collisions energy is shuffled back and forth at random. In equilibrium every "storage possibility" (every quadratic term in the energy) holds on average the same amount: $\tfrac12kT$. More storage possibilities means: more energy needed for the same temperature increase, hence a larger heat capacity.<br><br>
<b>Counting degrees of freedom:</b> translation 3. Rotation: linear molecule 2 (rotation about the bond axis has a vanishing moment of inertia), angular 3. Vibration: 2 per mode (kinetic + potential). Solids: 3 kinetic + 3 potential.<br><br>
<b>Dependencies:</b> $\kappa = 1+\frac2f$ decreases with $f$. Measuring $\kappa$ (speed of sound, Rüchardt) therefore reveals the molecular structure.<br><br>
<b>Connection:</b> Brownian motion: even a visible particle in a liquid has $\tfrac32kT$ of kinetic energy and therefore visibly jitters. The statistical justification follows in Ch. 14 (Boltzmann distribution).`,
    derivation: R`<ol class="fc-steps">
<li>$U = N\cdot\dfrac f2kT = \nu N_A\dfrac f2kT = \dfrac f2\nu RT$<em>Sum over all molecules (10.43).</em></li>
<li>$C_V = \dfrac1\nu\dfrac{dU}{dT} = \dfrac f2R$<em>Definition (10.37).</em></li>
<li>$C_p = C_V+R = \dfrac{f+2}2R$<em>With (10.41).</em></li>
<li>$\kappa = \dfrac{C_p}{C_V} = \dfrac{f+2}f$<em>Adiabatic exponent.</em></li>
<li>$f = 5$: $\kappa = 1{,}4$; $f = 3$: $\kappa = 1{,}67$<em>Values for air and noble gases, respectively.</em></li>
</ol>`,
    example: R`$1\,\text{mol}$ of helium at $300\,\text{K}$: $U = \tfrac32\cdot8{,}314\cdot300\,\text{J} = 3{,}7\,\text{kJ}$; nitrogen: $\tfrac52\nu RT = 6{,}2\,\text{kJ}$.<br>
Measured: Ar $\kappa = 1{,}67$, N₂ $1{,}40$, CO₂ $1{,}29$ (linear, with partly excited bending vibrations; lying between $\tfrac75$ and $\tfrac43$).`,
    counterexample: R`<b>CO₂ as a "triatomic gas" with $f = 6$:</b> CO₂ is linear, so it has only 2 rotational degrees of freedom; simple counting would give $f = 5$. Measured $\kappa = 1{,}29$, because the soft bending vibrations are already partly excited at room temperature. The table values apply to angular molecules (H₂O) and without vibrations.`,
    pitfalls: R`<ul><li>Counting 3 rotational degrees of freedom for a diatomic molecule.</li>
<li>Counting a vibration as one degree of freedom (instead of kinetic + potential).</li>
<li>Applying the law at low temperatures, where degrees of freedom are frozen.</li></ul>`
  },
  "ph10_isobar_isochor": {
    title: R`Volume work and isobaric/isochoric changes of state in the pV diagram`,
    category: R`10.6 Ideal gases`,
    type: "konzept",
    front: R`How is the <b>volume work</b> done on a gas calculated, and how is it read off in the <b>pV diagram</b>? Determine work, heat and $\Delta U$ for an <b>isobaric</b> and an <b>isochoric</b> change of state of an ideal gas.`,
    back: R`Work done on the gas:
$$W^\swarrow = \int_{V_a}^{V_e}\delta W^\swarrow = -\int_{V_a}^{V_e}p\,dV\qquad(10.44)$$
In the pV diagram every point is an equilibrium state; the <b>magnitude of the work is the area under the curve</b> (10.50). For a cycle the net work is the enclosed area.<br><br>
<b>Isobaric</b> ($p = $ const.):
$$W^\swarrow = -p(V_e-V_a)\qquad(10.45)$$
$Q^\swarrow = \nu C_p\Delta T$, $\Delta U = \nu C_V\Delta T$.<br><br>
<b>Isochoric</b> ($V = $ const.): $W^\swarrow = 0$, so $Q^\swarrow = \Delta U = \nu C_V\Delta T$ (cf. 10.34, 10.51); the pressure rises with $T$.`,
    meta: R`Script: section 10.6.4.1, Eqs. (10.44)–(10.45), (10.50); section 10.6.2, pp. 297–299`,
    explanation: R`<b>Intuition:</b> Work done on the gas is "pushing the piston in against the gas pressure". The higher the pressure and the further one pushes, the more work; in the diagram this is exactly the area $p\times\Delta V$.<br><br>
<b>Sign:</b> Expansion ($dV\gt0$): the gas does work, $W^\swarrow\lt0$. Compression: $W^\swarrow\gt0$. In a cycle run clockwise in the pV diagram the gas delivers net work (heat engine); anticlockwise, work is put in (heat pump).<br><br>
<b>Path dependence made visible:</b> Between two states there are many paths with different areas, hence different work (and heat), but the same change $\Delta U$.<br><br>
<b>Connection:</b> The four standard processes (isochoric, isobaric, isothermal, adiabatic) are the building blocks of all cycles (Otto, Diesel, Carnot, Stirling; 10.7.2).`,
    derivation: R`Energy balance for the isobaric process, ideal gas:
<ol class="fc-steps">
<li>$W^\swarrow = -p\Delta V = -\nu R\Delta T$<em>$p\Delta V = \Delta(pV) = \nu R\Delta T$ at constant $p$.</em></li>
<li>$\Delta U = \nu C_V\Delta T$<em>$U$ depends only on $T$.</em></li>
<li>$Q^\swarrow = \Delta U-W^\swarrow = \nu(C_V+R)\Delta T = \nu C_p\Delta T$<em>First law.</em></li>
<li>Fraction of the heat that becomes work: $\dfrac{|W|}{Q} = \dfrac R{C_p} = \dfrac2{f+2}$<em>For air $\tfrac27$, for noble gases $\tfrac25$.</em></li>
</ol>`,
    example: R`$1\,\text{mol}$ of air at $1\,\text{bar}$ heated isobarically from $300$ to $400\,\text{K}$: $\Delta V = \nu R\Delta T/p = 8{,}3\,\text{L}$, $W^\swarrow = -831\,\text{J}$, $\Delta U = 2079\,\text{J}$, $Q^\swarrow = 2910\,\text{J}$.<br>
Isochorically the same $\Delta T$: $Q^\swarrow = \Delta U = 2079\,\text{J}$, pressure rises to $1{,}33\,\text{bar}$.`,
    counterexample: R`<b>Fast (non-quasistatic) expansion:</b> A gas flowing into a vacuum has no well-defined pressure during the process, and $-\int p\,dV$ does not apply; in fact it does no work ($p_\text{aussen} = 0$). The area rule holds only for paths through equilibrium states.`,
    pitfalls: R`<ul><li>Confusing the sign of work (on the gas vs. by the gas).</li>
<li>Setting $Q = \nu C_V\Delta T$ for isobaric processes.</li>
<li>Evaluating $-\int p\,dV$ for irreversible processes with the gas pressure instead of the external pressure.</li></ul>`
  },
  "ph10_isotherm": {
    title: R`Isothermal expansion: Q = W = νRT ln(V₂/V₁)`,
    category: R`10.6 Ideal gases`,
    type: "herleitung",
    front: R`An ideal gas expands isothermally from $V_1$ to $V_2$. Why must heat be supplied, and why is this heat <b>completely converted into work</b>? Calculate the work. Does this contradict the second law?`,
    back: R`At $T = $ const. we have $pV = $ const. For a small expansion the gas does
$$\delta W^\nearrow = p\,dV = \frac{\nu RT}V\,dV\qquad(10.46)$$
Without heat supply this energy would come from $U$, and the gas would cool. For the ideal gas $U = U(T)$:
$$T = \text{const.}\Rightarrow dU = 0\Rightarrow\delta Q^\swarrow = -\delta W^\swarrow\qquad(10.47,\,10.48)$$
All the supplied heat is converted into work:
$$Q^\swarrow = W^\nearrow = \int_{V_1}^{V_2}p\,dV = \nu RT\int_{V_1}^{V_2}\frac{dV}V = \nu RT\ln\frac{V_2}{V_1}\qquad(10.49)$$
In the pV diagram: hyperbola $pV = $ const.; the area below it is the work (Fig. 10.12).`,
    meta: R`Script: section 10.6.4.2, Eqs. (10.46)–(10.50), Figs. 10.11–10.12, footnote 13, pp. 298–300`,
    explanation: R`<b>Intuition:</b> The gas is a flow-through heater for energy: what it receives as heat from the reservoir it passes on immediately as work to the piston, and its own energy content stays the same.<br><br>
<b>No contradiction with the second law:</b> The second law forbids complete conversion in a <i>periodic</i> process without lasting change. Here a change remains: the gas has expanded. To compress it again one must spend work, and part of it leaves as heat.<br><br>
<b>Dependencies:</b> $W\propto T$ and $\propto\ln(V_2/V_1)$: every doubling of the volume gives the same work $\nu RT\ln2$. The work depends on the volume <i>ratio</i>, not on the difference.<br><br>
<b>Connection:</b> First step of the Carnot process (10.7.2); with $\Delta S = Q/T = \nu R\ln(V_2/V_1)$ also the standard example for entropy (10.7.4).`,
    derivation: R`<ol class="fc-steps">
<li>$p = \dfrac{\nu RT}V$<em>Equation of state at fixed $T$.</em></li>
<li>$W^\nearrow = \displaystyle\int_{V_1}^{V_2}\frac{\nu RT}V\,dV$<em>$T$ is constant and comes out of the integral.</em></li>
<li>$= \nu RT\left[\ln V\right]_{V_1}^{V_2} = \nu RT\ln\dfrac{V_2}{V_1}$<em>Antiderivative of $1/V$.</em></li>
<li>$\Delta U = 0\Rightarrow Q^\swarrow = W^\nearrow$<em>First law; $U$ depends only on $T$ (footnote 13).</em></li>
<li>$= \nu RT\ln\dfrac{p_1}{p_2}$<em>Equivalent via the pressure ratio, since $p_1V_1 = p_2V_2$.</em></li>
</ol>`,
    example: R`$1\,\text{mol}$ at $300\,\text{K}$, volume doubled: $W^\nearrow = Q^\swarrow = 8{,}314\cdot300\cdot\ln2\,\text{J} = 1{,}73\,\text{kJ}$.<br>
Tenfold volume: $5{,}74\,\text{kJ}$. The pressure falls from $1\,\text{bar}$ to $0{,}1\,\text{bar}$.`,
    counterexample: R`<b>Isothermal does not mean "without heat":</b> In an isothermal expansion a lot of heat flows ($Q = W$). Without heat (adiabatic) the gas would cool (10.6.4.3). Conversely, for real gases $\Delta U\neq0$ even at constant $T$, because $U$ depends on the volume.`,
    pitfalls: R`<ul><li>Confusing "isothermal" with "adiabatic".</li>
<li>Using $W = p\Delta V$ although $p$ changes.</li>
<li>Writing $\ln(V_1/V_2)$ instead of $\ln(V_2/V_1)$ (sign).</li>
<li>Applying the formula without a heat reservoir.</li></ul>`
  },
  "ph10_adiabatisch": {
    title: R`Adiabatic change of state: Poisson equations pV^κ = const.`,
    category: R`10.6 Ideal gases`,
    type: "herleitung",
    front: R`Derive the <b>Poisson equations</b> for an <b>adiabatic</b> change of state of an ideal gas. Why is the adiabat steeper than the isotherm in the pV diagram? How do pressure and temperature change when air is compressed adiabatically to $1/10$ of its volume?`,
    back: R`Adiabatic: no heat exchange ($\delta Q^\swarrow = 0$), e.g. with thermal insulation or very fast processes.
$$dU = \nu C_V\,dT\quad(10.51),\qquad dU = \delta W^\swarrow = -p\,dV = -\frac{\nu RT}V\,dV\quad(10.52)$$
$$\frac{dT}T = -\frac R{C_V}\frac{dV}V,\qquad\frac R{C_V} = \frac{C_p-C_V}{C_V} = \kappa-1\qquad(10.53)$$
$$\ln T = -(\kappa-1)\ln V+\text{const.}\qquad(10.54)$$
<b>Poisson equations:</b>
$$TV^{\kappa-1} = \text{const.},\qquad pV^\kappa = \text{const.},\qquad T^\kappa p^{1-\kappa} = \text{const.}\qquad(10.55)$$
<b>Example</b> ($p_a = 1\,\text{bar}$, $T_a = 300\,\text{K}$, $\kappa = 1{,}4$, $V_e = V_a/10$):
$$p_e = p_a\left(\frac{V_a}{V_e}\right)^\kappa = 25{,}1\,\text{bar},\qquad T_e = T_a\left(\frac{V_a}{V_e}\right)^{\kappa-1} = 753\,\text{K} = 480\,^\circ\text{C}\qquad(10.56)$$
The equation of state still holds: $\frac{T_e}{T_a} = \frac{p_eV_e}{p_aV_a}$ (10.57).`,
    meta: R`Script: section 10.6.4.3, Eqs. (10.51)–(10.57), Figs. 10.13–10.14, pp. 300–302`,
    explanation: R`<b>Intuition:</b> Without heat supply the gas pays for the expansion work out of its own internal energy and cools. On compression the work put in stays in the gas and heats it. That is why the pressure falls more steeply in an adiabatic expansion than in an isothermal one: it drops because of the larger volume <i>and</i> because of the lower temperature.<br><br>
<b>Slope:</b> Isotherm $\frac{dp}{dV} = -\frac pV$; adiabat $\frac{dp}{dV} = -\kappa\frac pV$, so steeper by the factor $\kappa$ (Fig. 10.14).<br><br>
<b>Dependencies:</b> $T\propto V^{-(\kappa-1)}$: for air ($\kappa-1 = 0{,}4$) compression by a factor 10 raises the temperature by a factor $10^{0{,}4} = 2{,}5$.<br><br>
<b>Applications:</b> Diesel engine (self-ignition from compression heat), foehn wind (descending air warms adiabatically), cloud formation (rising air cools), sound waves (adiabatic: speed of sound $\sqrt{\kappa p/\rho}$).`,
    derivation: R`<ol class="fc-steps">
<li>$\nu C_V\,dT = -\dfrac{\nu RT}V\,dV$<em>Equate the two expressions for $dU$ (10.51, 10.52).</em></li>
<li>$\dfrac{dT}T = -(\kappa-1)\dfrac{dV}V$<em>Separation of variables; $R/C_V = \kappa-1$ (10.53).</em></li>
<li>$\ln T+(\kappa-1)\ln V = \text{const.}\Rightarrow TV^{\kappa-1} = \text{const.}$<em>Integration at constant $\kappa$ (10.54).</em></li>
<li>$T = \dfrac{pV}{\nu R}\Rightarrow pV\cdot V^{\kappa-1} = pV^\kappa = \text{const.}$<em>Insert the equation of state (10.55).</em></li>
<li>$V = \dfrac{\nu RT}p\Rightarrow T\left(\dfrac Tp\right)^{\kappa-1}\propto T^\kappa p^{1-\kappa} = \text{const.}$<em>Third form (10.55).</em></li>
</ol>`,
    example: R`<b>Diesel engine</b> (compression $1:20$, air $300\,\text{K}$): $T_e = 300\cdot20^{0{,}4} = 994\,\text{K}$ – enough to ignite diesel.<br>
<b>Adiabatic expansion</b> of $1\,\text{mol}$ of air to twice its volume at $300\,\text{K}$: $T_e = 300\cdot2^{-0{,}4} = 227\,\text{K}$, work done $\tfrac52R\cdot73\,\text{K} = 1{,}51\,\text{kJ}$ (isothermal would be $1{,}73\,\text{kJ}$).`,
    counterexample: R`<b>Adiabatic ≠ isothermal, even though $Q = 0$ sounds "nice":</b> The free expansion into a vacuum is also adiabatic ($Q = 0$), but the temperature of the ideal gas stays constant, because no work is done. The Poisson equations hold only for <i>reversible</i> (quasistatic) adiabatic processes.`,
    pitfalls: R`<ul><li>Confusing $pV^\kappa$ with $TV^\kappa$ (correct: $TV^{\kappa-1}$).</li>
<li>Using the Poisson equations for irreversible processes.</li>
<li>Believing the equation of state no longer holds in adiabatic processes.</li></ul>`
  },
  "ph10_ruechardt": {
    title: R`Measuring κ = C_p/C_V (after Rüchardt): dT/T = −(2/f) dV/V`,
    category: R`10.6 Ideal gases`,
    type: "experiment",
    front: R`How can one determine the adiabatic exponent $\kappa$, or the number of degrees of freedom $f$ of a gas, by periodic adiabatic compression and expansion? Which relation between $dT/T$ and $dV/V$ is used, and how is the temperature change measured?`,
    back: R`From the adiabatic equation (10.53):
$$C_V\,dT = -RT\frac{dV}V\;\Rightarrow\;\frac{dT}T = -\frac R{C_V}\frac{dV}V = -\frac{R}{Rf/2}\frac{dV}V\qquad(10.58,\,10.59)$$
$$\frac{dT}T = -\frac2f\frac{dV}V\qquad(10.60)$$
The relative temperature change under a small, fast (adiabatic) volume change depends only on $f$, and $\kappa = 1+\frac2f$.<br><br>
<b>Measurement:</b> with a fine copper wire whose electrical resistance depends on temperature, and which is so thin that its heat capacity is negligible (it follows the gas temperature quickly).`,
    meta: R`Script: section 10.6.4.4, Eqs. (10.58)–(10.60), pp. 302–303`,
    explanation: R`<b>Intuition:</b> Compressing a gas quickly by 1 % warms it by $\frac2f$ percent. Monatomic gases ($f = 3$) warm more than diatomic ones ($f = 5$), because the compression work is shared among fewer degrees of freedom.<br><br>
<b>Why fast?</b> So that no heat flows to the walls during compression (adiabatic). On the other hand slow enough that the gas stays in equilibrium. Periodic pumping at a few Hz satisfies both.<br><br>
<b>Classical Rüchardt method (supplement):</b> A ball oscillates in a tube on a gas cushion. The restoring force comes from the adiabatic pressure change $dp = -\kappa p\,dV/V$; from the oscillation period $T = 2\pi\sqrt{mV/(\kappa pA^2)}$ one obtains $\kappa$.<br><br>
<b>Connection:</b> Sound waves are also adiabatic; the speed of sound $c = \sqrt{\kappa RT/M}$ gives $\kappa$. Newton calculated isothermally and was 15 % off; Laplace corrected with $\kappa$.`,
    derivation: R`Classical Rüchardt oscillation (supplement; ball of mass $m$ in a tube with cross-section $A$ on a gas volume $V$):
<ol class="fc-steps">
<li>$pV^\kappa = \text{const.}\Rightarrow dp = -\kappa p\dfrac{dV}V$<em>Differentiated adiabatically.</em></li>
<li>$dV = Ax$, $F = A\,dp = -\dfrac{\kappa pA^2}Vx$<em>Displacement $x$ of the ball changes the volume; pressure change times area.</em></li>
<li>$m\ddot x = -\dfrac{\kappa pA^2}Vx$<em>Harmonic oscillator with "spring constant" $\kappa pA^2/V$.</em></li>
<li>$\omega^2 = \dfrac{\kappa pA^2}{mV}\Rightarrow\kappa = \dfrac{4\pi^2mV}{pA^2T^2}$<em>From the measured period $T$.</em></li>
</ol>`,
    example: R`Volume reduced by $1\,\%$, $T = 300\,\text{K}$: argon ($f = 3$): $\Delta T = \frac23\cdot0{,}01\cdot300 = 2{,}0\,\text{K}$; air ($f = 5$): $1{,}2\,\text{K}$.<br>
Sound in air at $20\,^\circ\text{C}$: $c = \sqrt{1{,}4\cdot8{,}314\cdot293/0{,}029} = 343\,\text{m/s}$.`,
    counterexample: R`<b>Slow compression:</b> If one pumps so slowly that the walls exchange heat, the process becomes isothermal, and $dT\to0$ – one would wrongly measure $f\to\infty$ or $\kappa\to1$. The method requires adiabatic conditions.`,
    pitfalls: R`<ul><li>Neglecting the mass of the measuring probe, although it is sluggish.</li>
<li>Writing the relation with the exponent $\kappa$ instead of $\kappa-1$.</li>
<li>Using the isothermal formula $\sqrt{p/\rho}$ for the speed of sound.</li></ul>`
  },
  "ph10_zweiter_hauptsatz": {
    title: R`Second law: formulations by Thomson (Kelvin) and Clausius`,
    category: R`10.7 The second law of thermodynamics`,
    type: "gesetz",
    front: R`State the <b>second law</b> according to <b>Thomson</b> and according to <b>Clausius</b>. What is forbidden and what is allowed in each case? Why is this not a contradiction with the first law?`,
    back: R`The second law takes into account that forms of energy cannot be converted into one another at will.
<ul><li><b>Thomson (Kelvin):</b> There is no periodically operating machine that extracts heat $\delta Q$ from a heat reservoir and converts it completely into work, without any changes remaining in the system or the surroundings. The complete conversion of work into heat, by contrast, is possible without any problem (Fig. 10.15).</li>
<li><b>Clausius:</b> There is no periodically operating machine that transports heat from a colder reservoir ($T_K$) to a warmer one ($T_W\gt T_K$) without work being done or energy otherwise being supplied from outside. Conversely, heat flows "by itself" from the warmer to the colder (Fig. 10.16).</li></ul>
Both formulations are equivalent: a machine violating one could be combined with one that violates the other (cf. the super-Carnot argument, 10.7.2).`,
    meta: R`Script: section 10.7.1, Figs. 10.15–10.16, pp. 303–304`,
    explanation: R`<b>Intuition:</b> Energy is conserved, but not equally valuable. Ordered energy (work) can be completely "smeared out" (friction), but disordered energy (heat) cannot be completely "ordered" again. As with mixing coffee and milk: easy to mix, impossible to unmix.<br><br>
<b>Key word "periodic":</b> Once, heat can fully turn into work (isothermal expansion, 10.6.4.2), but then a change remains (the gas has expanded). A machine that returns to its initial state again and again must give off part of the heat to a colder reservoir.<br><br>
<b>No contradiction with the first law:</b> The first law says what is allowed energetically; the second says which direction processes take. A perpetual motion machine of the second kind (ship that extracts heat from the sea and sails on it) does not violate the first, but it violates the second.<br><br>
<b>Connection:</b> Quantitatively the second law is expressed via entropy: $\Delta S\ge0$ in an isolated system (10.7.3, 10.7.4). Refrigerators and heat pumps do not violate Clausius: they need work.`,
    derivation: R`Thomson violated $\Rightarrow$ Clausius violated:
<ol class="fc-steps">
<li>Assumption: machine M takes heat $Q$ from $T_W$ and delivers $W = Q$<em>Violation of the Thomson formulation.</em></li>
<li>$W$ drives a heat pump P: it takes $Q_K$ from $T_K$ and gives $Q_K+W$ to $T_W$<em>Allowed by the first law; requires work $W$.</em></li>
<li>Balance for $T_W$: $-Q+(Q_K+Q) = +Q_K$<em>The warm reservoir gains net $Q_K$.</em></li>
<li>Balance for $T_K$: $-Q_K$; no work from outside<em>The combination M+P transports heat from cold to warm without work: violation of Clausius.</em></li>
</ol>`,
    example: R`<b>Allowed:</b> braking of a car ($W\to Q$ completely), heat conduction from the hot hotplate into the pot, refrigerator with a power connection.<br>
<b>Forbidden:</b> an ocean liner that takes heat from seawater ($15\,^\circ\text{C}$) and moves on it, without using a colder reservoir; a refrigerator without a power connection.`,
    counterexample: R`<b>Local order does arise:</b> Water freezes into ordered crystals, living beings build complex structures. This does not contradict the second law, because these systems are not isolated: they give off heat (and thus entropy) to the surroundings, whose entropy increases more strongly.`,
    pitfalls: R`<ul><li>Leaving out the word "periodic" and considering isothermal expansion a violation.</li>
<li>Believing a refrigerator violates Clausius.</li>
<li>Regarding the second law as a consequence of the first.</li></ul>`
  },
  "ph10_kreisprozesse_motoren": {
    title: R`Cycles in the pV diagram: Otto engine, Diesel engine, Stirling engine`,
    category: R`10.7 The second law of thermodynamics`,
    type: "konzept",
    front: R`Describe the steps of the <b>Otto</b>, the <b>Diesel</b> and the <b>Stirling</b> cycle in the pV diagram. What is the net work done by the gas, and what determines the sense of circulation?`,
    back: R`Net work of a cycle = enclosed area in the pV diagram.<br><br>
<b>Otto engine</b> (Fig. 10.17): A ($0\to1$) intake at constant pressure; B ($1\to2$) adiabatic compression; C ($2\to3$) heat supply by the explosion (isochoric); D ($3\to4$) working stroke (adiabatic expansion); E ($4\to1$) exhaust of the hot gases (isochoric pressure drop); F ($1\to0$) piston is emptied.<br><br>
<b>Diesel engine</b> (Fig. 10.18): similar, but the fuel is injected only at C, so that the pressure stays approximately constant during combustion (isobaric). Higher compression possible, better efficiency.<br><br>
<b>Stirling engine</b> (hot-air engine without valves, Figs. 10.23, 10.24): A isothermal expansion at $T_1$ (work output); B isochoric cooling (displacer piston pushes the gas into the cold space); C isothermal compression at $T_3$; D isochoric heating. Displacer and working piston are phase-shifted by $90^\circ$.`,
    meta: R`Script: section 10.7.2, Figs. 10.17–10.18, 10.23–10.24, pp. 305–313`,
    explanation: R`<b>Intuition:</b> Every heat engine expands a hot gas (high pressure, lots of work) and compresses it cold (low pressure, little work). The difference is the gain. In the diagram the expansion runs along the top, the compression along the bottom: clockwise circulation = the machine delivers work.<br><br>
<b>Reversibility:</b> If the Stirling engine runs the other way (flywheel turned by hand), it becomes a heat pump or refrigerator. In the lecture demonstration: started clockwise it runs freely, anticlockwise it does not; with liquid nitrogen instead of a flame it runs in reverse.<br><br>
<b>Dependencies (supplement):</b> The ideal Otto efficiency depends only on the compression ratio $\varepsilon = V_1/V_2$: $\eta = 1-\varepsilon^{1-\kappa}$. Diesel reaches higher $\varepsilon$, because only air is compressed (no premature knocking).<br><br>
<b>Connection:</b> None of these processes exceeds the Carnot efficiency between its extreme temperatures (10.7.2).`,
    derivation: R`Ideal Otto efficiency (supplement; air as ideal gas, compression $\varepsilon = V_1/V_2$):
<ol class="fc-steps">
<li>$Q^\swarrow_{23} = \nu C_V(T_3-T_2)$, $Q^\nearrow_{41} = \nu C_V(T_4-T_1)$<em>Heat flows only during the isochoric steps.</em></li>
<li>$T_2 = T_1\varepsilon^{\kappa-1}$, $T_3 = T_4\varepsilon^{\kappa-1}$<em>Poisson (10.55) for the two adiabats.</em></li>
<li>$T_3-T_2 = (T_4-T_1)\varepsilon^{\kappa-1}$<em>Difference of the two equations.</em></li>
<li>$\eta = 1-\dfrac{Q^\nearrow_{41}}{Q^\swarrow_{23}} = 1-\varepsilon^{1-\kappa}$<em>Net work / supplied heat.</em></li>
</ol>`,
    example: R`Otto with $\varepsilon = 10$, $\kappa = 1{,}4$: $\eta_\text{ideal} = 1-10^{-0{,}4} = 60\,\%$; real petrol engines reach about $25$–$35\,\%$, diesel engines up to over $40\,\%$.<br>
Stirling in the lecture hall: hot space $\approx400\,^\circ\text{C}$, cooling water $20\,^\circ\text{C}$: Carnot limit $1-293/673 = 56\,\%$.`,
    counterexample: R`<b>Area ≠ efficiency:</b> A cycle with a large area (much work per cycle) can still have a poor efficiency if it needs a very large amount of heat for it. The efficiency is the ratio area/supplied heat, not the area alone.`,
    pitfalls: R`<ul><li>Taking the area under a single curve instead of the enclosed area.</li>
<li>Ignoring the sense of circulation (engine vs. heat pump).</li>
<li>Counting intake and exhaust (A, F) as contributions to net work; they cancel.</li></ul>`
  },
  "ph10_carnot_prozess": {
    title: R`Carnot process and Carnot efficiency η_C = 1 − T_k/T_w`,
    category: R`10.7 The second law of thermodynamics`,
    type: "herleitung",
    front: R`Describe the four steps of the <b>Carnot process</b> with an ideal gas and calculate work and heat for each step. Derive the closing condition $V_1V_3 = V_2V_4$ and the <b>Carnot efficiency</b>.`,
    back: R`Between $T_w\equiv T_1$ and $T_k\equiv T_3$ (Figs. 10.19, 10.20, Tab. 10.3):
<ul><li><b>A</b> ($1\to2$) isothermal expansion at $T_w$: $W_1^\nearrow = Q_1^\swarrow = \nu RT_w\ln\frac{V_2}{V_1}$ (10.61)</li>
<li><b>B</b> ($2\to3$) adiabatic expansion $T_w\to T_k$: $W_2^\nearrow = \nu C_V(T_w-T_k)$, $Q = 0$ (10.62)</li>
<li><b>C</b> ($3\to4$) isothermal compression at $T_k$: $W_3^\swarrow = Q_2^\nearrow = \nu RT_k\ln\frac{V_3}{V_4}$</li>
<li><b>D</b> ($4\to1$) adiabatic compression $T_k\to T_w$: $W_4^\swarrow = \nu C_V(T_w-T_k)$, $Q = 0$</li></ul>
Adiabats (10.55): $T_wV_2^{\kappa-1} = T_kV_3^{\kappa-1}$, $T_wV_1^{\kappa-1} = T_kV_4^{\kappa-1}$; division:
$$V_1V_3 = V_2V_4\;\Leftrightarrow\;\frac{V_2}{V_1} = \frac{V_3}{V_4}\qquad(10.63\text{–}10.65)$$
$$\eta_C = \frac{W_1^\nearrow+W_2^\nearrow-W_3^\swarrow-W_4^\swarrow}{Q_1^\swarrow} = \frac{T_w-T_k}{T_w}\lt1\qquad(10.66)$$`,
    meta: R`Script: section 10.7.2, Eqs. (10.61)–(10.66), Tabs. 10.3–10.4, Figs. 10.19–10.20, pp. 306–309`,
    explanation: R`<b>Intuition:</b> Heat is exchanged only at the two extreme temperatures, and without any temperature difference between gas and reservoir (reversible). The adiabats bring the gas from one temperature to the other without heat exchange. This is the most loss-free path imaginable.<br><br>
<b>Dependencies:</b> $\eta_C$ depends only on the two temperatures, not on the working gas, not on the volumes. The hotter the source and the colder the sink, the better. $\eta_C\to1$ only for $T_k\to0$ (unreachable) or $T_w\to\infty$.<br><br>
<b>Why do the adiabats cancel?</b> $W_2^\nearrow = W_4^\swarrow$: both bridge the same temperature difference, and for the ideal gas $\Delta U$ depends only on $\Delta T$. The net work is therefore $Q_1-Q_2 = \nu R(T_w-T_k)\ln\frac{V_2}{V_1}$.<br><br>
<b>Connection:</b> From $\frac{Q_2}{Q_1} = \frac{T_k}{T_w}$ follows $\frac{Q_1}{T_w} = \frac{Q_2}{T_k}$: the quantity $Q/T$ is conserved – the origin of the concept of entropy (10.7.4).`,
    derivation: R`<ol class="fc-steps">
<li>$\dfrac{T_wV_2^{\kappa-1}}{T_wV_1^{\kappa-1}} = \dfrac{T_kV_3^{\kappa-1}}{T_kV_4^{\kappa-1}}\Rightarrow\dfrac{V_2}{V_1} = \dfrac{V_3}{V_4}$<em>Division of the adiabat equations (10.63)/(10.64), taking the root (10.65).</em></li>
<li>$W_\text{net} = \nu RT_w\ln\dfrac{V_2}{V_1}-\nu RT_k\ln\dfrac{V_3}{V_4}+\underbrace{\nu C_V(T_w-T_k)-\nu C_V(T_w-T_k)}_{=0}$<em>Sum of all work with signs; the adiabatic contributions cancel.</em></li>
<li>$W_\text{net} = \nu R(T_w-T_k)\ln\dfrac{V_2}{V_1}$<em>Using (10.65).</em></li>
<li>$\eta_C = \dfrac{W_\text{net}}{Q_1^\swarrow} = \dfrac{\nu R(T_w-T_k)\ln(V_2/V_1)}{\nu RT_w\ln(V_2/V_1)} = \dfrac{T_w-T_k}{T_w}$<em>Only the heat at $T_w$ is "paid for" (10.66).</em></li>
</ol>`,
    example: R`Fig. 10.20: $T_w = 1200\,\text{K}$, $T_k = 800\,\text{K}$: $\eta_C = \tfrac13$.<br>
Steam power plant ($550\,^\circ\text{C}$ live steam, $27\,^\circ\text{C}$ cooling water): $\eta_C = 1-300/823 = 64\,\%$; in practice about $45\,\%$ is reached.<br>
With $1\,\text{mol}$, $V_2/V_1 = 2$: $Q_1 = 6{,}9\,\text{kJ}$, $W_\text{net} = 2{,}3\,\text{kJ}$.`,
    counterexample: R`<b>Inserting Celsius temperatures:</b> The same reservoirs in °C ($927$ and $527\,^\circ\text{C}$) would give $(927-527)/927 = 43\,\%$ instead of the correct $(1200-800)/1200 = 33\,\%$. And a machine between $100\,^\circ\text{C}$ and $0\,^\circ\text{C}$ would have "$100\,\%$" – absurd. The Carnot efficiency requires absolute temperatures.`,
    pitfalls: R`<ul><li>Inserting temperatures in °C.</li>
<li>Relating the efficiency to the total heat instead of only the heat supplied at $T_w$.</li>
<li>Assuming a different working gas gives a different Carnot efficiency.</li></ul>`
  },
  "ph10_carnot_optimal_waermepumpe": {
    title: R`Carnot is optimal; heat pump and refrigerator`,
    category: R`10.7 The second law of thermodynamics`,
    type: "herleitung",
    front: R`Show that no heat engine between $T_w$ and $T_k$ can have a greater efficiency than $\eta_C$ (super-Carnot argument). How large are the coefficients of performance of an ideal <b>heat pump</b> and an ideal <b>refrigerator</b>?`,
    back: R`Every real machine: $\eta_\text{real}\lt\eta_C = \dfrac{T_w-T_k}{T_w}$ (10.67).<br><br>
<b>Carnot machine run in reverse:</b>
$$\eta_W = \frac{\delta Q_1^\nearrow}{\delta W^\swarrow} = \frac{T_w}{T_w-T_k} = \frac1{\eta_C}\gt1\quad\text{(heat pump)},\qquad\eta_K = \frac{\delta Q_2^\swarrow}{\delta W^\swarrow} = \frac{T_k}{T_w-T_k}\quad\text{(refrigerator)}\qquad(10.68,\,10.69)$$
$\eta_K\to0$ for $T_k\to0$: the colder it already is, the harder further cooling becomes.<br><br>
<b>Proof</b> (Fig. 10.22): Suppose there were a super-machine S with $\eta_S\gt\eta_C$. It takes $\delta Q_1$ and delivers $\delta W = \eta_S\delta Q_1$ (10.70). With this one drives a Carnot heat pump C, which pumps back into the warm reservoir
$$\delta Q_1' = \eta_W\delta W = \frac{\eta_S}{\eta_C}\delta Q_1\gt\delta Q_1\qquad(10.71)$$
Net, heat flows from cold to warm without work (Clausius violated), or one could extract work and cool only one reservoir (Thomson violated). Contradiction.`,
    meta: R`Script: section 10.7.2, Eqs. (10.67)–(10.71), Figs. 10.21–10.22, pp. 309–311`,
    explanation: R`<b>Intuition:</b> A heat pump "shifts" heat uphill instead of generating it. That is why it can bring more heat into the house than the electrical work it consumes: the ambient heat is free, only the pumping up costs.<br><br>
<b>Dependencies:</b> $\eta_W = \frac{T_w}{T_w-T_k}$ is the larger, the smaller the temperature lift. That is why heat pumps with underfloor heating (low flow temperature) work better than with radiators, and ground probes (constant $\sim10\,^\circ\text{C}$) better than air in winter.<br><br>
<b>Cooling at low temperatures:</b> $\eta_K = \frac{T_k}{T_w-T_k}$: to remove one joule at $T_k = 1\,\text{K}$ with $T_w = 300\,\text{K}$ one needs at least $299\,\text{J}$ of work. This is the thermodynamic reason for the effort of low-temperature physics (10.9) and a preview of the third law.<br><br>
<b>Connection:</b> The argument also shows that all reversible machines between the same temperatures have the same efficiency, independent of the working medium. This allows the absolute temperature to be defined independently of any substance.`,
    derivation: R`Coefficient of performance of the heat pump:
<ol class="fc-steps">
<li>$\dfrac{Q_2}{Q_1} = \dfrac{T_k}{T_w}$<em>From the Carnot process: $Q_1 = \nu RT_w\ln\frac{V_2}{V_1}$, $Q_2 = \nu RT_k\ln\frac{V_3}{V_4}$ and $\frac{V_2}{V_1} = \frac{V_3}{V_4}$.</em></li>
<li>$W^\swarrow = Q_1^\nearrow-Q_2^\swarrow$<em>Energy balance of the machine run in reverse.</em></li>
<li>$\eta_W = \dfrac{Q_1}{Q_1-Q_2} = \dfrac{1}{1-T_k/T_w} = \dfrac{T_w}{T_w-T_k}$<em>(10.68).</em></li>
<li>$\eta_K = \dfrac{Q_2}{Q_1-Q_2} = \dfrac{T_k}{T_w-T_k} = \eta_W-1$<em>(10.69).</em></li>
</ol>`,
    example: R`<b>Heat pump</b> (outside air $0\,^\circ\text{C}$, heating water $35\,^\circ\text{C}$): $\eta_W = 308/35 = 8{,}8$; real units reach about 3–4. With $1\,\text{kWh}$ of electricity one therefore gets $3$–$4\,\text{kWh}$ of heat.<br>
<b>Refrigerator</b> ($5\,^\circ\text{C}$ inside, $25\,^\circ\text{C}$ kitchen): $\eta_K = 278/20 = 13{,}9$ ideal.`,
    counterexample: R`<b>Electric heating</b> turns $1\,\text{kWh}$ of electricity into exactly $1\,\text{kWh}$ of heat ($\eta = 1$). This is "lossless" in terms of energy, but thermodynamically wasteful: a heat pump would deliver several times more from the same electricity. An efficiency of 100 % is not the optimum here.`,
    pitfalls: R`<ul><li>Taking coefficients of performance $\gt1$ as a violation of energy conservation.</li>
<li>Confusing $\eta_W$ and $\eta_K$ ($\eta_W = \eta_K+1$).</li>
<li>Considering the Carnot efficiency attainable.</li></ul>`
  },
  "ph10_entropie_statistisch": {
    title: R`Entropy and probability: S = k ln W`,
    category: R`10.7 The second law of thermodynamics`,
    type: "konzept",
    front: R`What does Boltzmann's formula $S = k\ln W$ mean? Calculate the probability that all molecules of an ideal gas are by chance in the partial volume $V_1$ of a container $V_0$, and the corresponding change of entropy. Why does an isolated system tend towards the most probable state?`,
    back: R`$$S = k\ln W\qquad(10.72)$$
$k = R/N_A$: Boltzmann constant; $W$: probability (or number of possible realisations) of the state (10.73).<br><br>
<b>Example</b> (Fig. 10.25): For one molecule $w = V_1/V_0$ (10.74); for $N_A\nu$ independent molecules:
$$W = w^{N_A\nu} = \left(\frac{V_1}{V_0}\right)^{N_A\nu}\qquad(10.75)$$
$$\Delta S = k\ln W = -kN_A\nu\ln\frac{V_0}{V_1} = -R\nu\ln\frac{V_0}{V_1}\qquad(10.76)$$
The smaller $V_1$, the less probable and the smaller the entropy. Since such extremely improbable states are never observed:
$$\Delta S\ge0\qquad(10.77)$$
Every isolated system tends towards its most probable (most disordered) state (apart from small fluctuations).`,
    meta: R`Script: section 10.7.3, Eqs. (10.72)–(10.77), Fig. 10.25, pp. 314–315`,
    explanation: R`<b>Intuition:</b> There are unimaginably more ways to distribute $10^{23}$ molecules evenly in space than to pack them all into one corner. A system that jumps at random between its possibilities will practically always be found in the huge majority of "disordered" states. The second law is therefore a statistical law – but with $10^{23}$ particles absolutely reliable.<br><br>
<b>Why the logarithm?</b> Probabilities of independent subsystems multiply; the logarithm turns this into a sum. So entropy becomes additive (extensive), like energy or mass.<br><br>
<b>Dependencies:</b> $\Delta S\propto\nu$ (double the amount of gas, double the entropy change) and $\propto\ln(V_0/V_1)$.<br><br>
<b>Connection:</b> The purely thermodynamic calculation with $dS = \delta Q_\text{rev}/T$ gives exactly the same result (10.79). Ch. 14 deepens the statistical justification (Boltzmann distribution).`,
    derivation: R`Why we never observe it (small and large $N$):
<ol class="fc-steps">
<li>$W = (1/2)^N$ for $V_1 = V_0/2$<em>Each molecule independently with probability $\tfrac12$ on the left.</em></li>
<li>$N = 4$: $W = 1/16$<em>With few particles this happens often (fluctuation).</em></li>
<li>$N = 100$: $W = 7{,}9\cdot10^{-31}$<em>Practically never.</em></li>
<li>$N = 6\cdot10^{23}$: $\ln W = -4{,}2\cdot10^{23}$<em>Unimaginably small; $W\approx10^{-1{,}8\cdot10^{23}}$.</em></li>
<li>$\Delta S = k\ln W = -kN\ln2 = -R\ln2 = -5{,}76\,\text{J/K}$ (for 1 mol)<em>Finite, well measurable entropy change (10.76).</em></li>
</ol>`,
    example: R`<b>Deck of cards:</b> There are $52!\approx8\cdot10^{67}$ orders, but only one "sorted" one. Shuffling practically never brings back order.<br>
$1\,\text{mol}$ of gas confined to a tenth of the container: $\Delta S = -R\ln10 = -19{,}1\,\text{J/K}$.`,
    counterexample: R`<b>Small systems:</b> With 4 molecules one finds all of them in the left half in $\tfrac1{16}$ of the time; the entropy then "decreases" briefly. The second law holds for macroscopic systems; in the nanoworld such fluctuations are measurable (fluctuation theorems).`,
    pitfalls: R`<ul><li>Confusing $W$ as "probability $\le1$" with "number of microstates": they differ by a constant factor, which cancels in entropy <i>differences</i>.</li>
<li>Equating entropy with disorder in the everyday sense (untidiness).</li>
<li>Applying the second law to open systems.</li></ul>`
  },
  "ph10_entropie_thermodynamisch": {
    title: R`Thermodynamic entropy dS = δQ_rev/T, reversible and irreversible processes`,
    category: R`10.7 The second law of thermodynamics`,
    type: "herleitung",
    front: R`How is entropy defined thermodynamically? What is a <b>reversible</b> process, and which processes are irreversible? Calculate $\Delta S$ for the reversible isothermal compression of an ideal gas from $V_0$ to $V_1$ and compare it with the statistical calculation. State the second law using $S$.`,
    back: R`<b>Reversible:</b> chain of equilibrium states (infinitely slow, quasistatic); the entire process can be reversed such that no changes remain in the system or in the surroundings. <b>Irreversible:</b> heat conduction, mixing of gases, friction, outflow into a vacuum (Fig. 10.26).<br><br>
<b>Entropy</b> (state variable; for pure substances $S(T = 0) = 0$):
$$dS = \frac{\delta Q^\swarrow_\text{rev}}T\qquad(10.78)$$
<b>Isothermal compression</b> (Fig. 10.27): $dU = 0\Rightarrow\delta Q^\swarrow_\text{rev} = -\delta W^\swarrow = p\,dV$:
$$\Delta S = \int\frac{p\,dV}T = R\nu\int_{V_0}^{V_1}\frac{dV}V = -R\nu\ln\frac{V_0}{V_1}\qquad(10.79)$$
Same as the statistical result (10.76). <b>Second law:</b>
$$\Delta S\ge0\ \text{(isolated system)},\qquad\oint dS = \oint\frac{\delta Q^\swarrow_\text{rev}}T = 0\ \text{(reversible cycle)}\qquad(10.80,\,10.81)$$
In real (irreversible) processes $S$ increases; this defines a direction of time.`,
    meta: R`Script: section 10.7.4, Eqs. (10.78)–(10.81), Figs. 10.26–10.27, pp. 315–317`,
    explanation: R`<b>Intuition:</b> $Q/T$ measures how much "disorder" is transferred with a quantity of heat. The same heat at low temperature means a much larger gain in disorder (a cold, ordered system is strongly shaken up) than at high temperature.<br><br>
<b>Important: "rev".</b> The formula holds only for reversible heat supply. For an irreversible process one computes $\Delta S$ by choosing an <i>arbitrary</i> reversible substitute path between the same states; since $S$ is a state variable, the result is the same.<br><br>
<b>Dependencies:</b> $dS\propto1/T$. Heat flowing from hot ($T_1$) to cold ($T_2$): $\Delta S = Q\left(\frac1{T_2}-\frac1{T_1}\right)\gt0$. Heat therefore flows only in this direction (Clausius).<br><br>
<b>Connection:</b> $\oint\delta Q_\text{rev}/T = 0$ is the generalisation of $Q_1/T_w = Q_2/T_k$ in the Carnot process. With $dU = T\,dS-p\,dV$ (fundamental equation) entropy connects the first and second laws.`,
    derivation: R`Free expansion (irreversible, $Q = 0$, $W = 0$) from $V_1$ to $V_2$:
<ol class="fc-steps">
<li>$\Delta U = 0$, $T_\text{end} = T_\text{start}$<em>Ideal gas: no work, no heat, hence same temperature (Fig. 10.26).</em></li>
<li>$\displaystyle\int\frac{\delta Q}T = 0$ along the actual path<em>Must not be used for $\Delta S$: the process is irreversible.</em></li>
<li>Substitute path: reversible isothermal expansion between the same states<em>$S$ is a state variable; every path gives the same $\Delta S$.</em></li>
<li>$\Delta S = \nu R\ln\dfrac{V_2}{V_1}\gt0$<em>With (10.79) in the reverse direction.</em></li>
<li>Isolated system: $\Delta S_\text{total}\gt0$<em>Entropy was produced; the process does not run back by itself.</em></li>
</ol>`,
    example: R`$1\,\text{mol}$ freely expanded to twice the volume: $\Delta S = R\ln2 = +5{,}76\,\text{J/K}$, although $Q = 0$.<br>
$1000\,\text{J}$ flow from a body at $400\,\text{K}$ to one at $300\,\text{K}$: $\Delta S = \frac{1000}{300}-\frac{1000}{400} = +0{,}83\,\text{J/K}$.<br>
$1\,\text{kg}$ of ice melts at $273\,\text{K}$: $\Delta S = 333\,\text{kJ}/273\,\text{K} = 1{,}22\,\text{kJ/K}$.`,
    counterexample: R`<b>"Adiabatic, therefore $\Delta S = 0$":</b> holds only for reversible adiabatic processes (isentropic). The free expansion is adiabatic ($Q = 0$), but $\Delta S\gt0$. Likewise, friction in a thermally insulated vessel produces entropy.`,
    pitfalls: R`<ul><li>Calculating $\Delta S = \int\delta Q/T$ along an irreversible path.</li>
<li>Applying $\Delta S\ge0$ to a subsystem (it can decrease if the surroundings increase by more).</li>
<li>Calculating $\Delta S = Q/T$ when the temperature varies, instead of $\int\delta Q/T$.</li></ul>`
  },
  "ph10_wirkungsgrad_entropie": {
    title: R`Efficiency from the entropy law: η ≤ 1 − T_k/T_w`,
    category: R`10.7 The second law of thermodynamics`,
    type: "herleitung",
    front: R`Derive the maximum efficiency of a heat engine solely from $\Delta S\ge0$ and the first law, without knowing the inner mechanism of the machine.`,
    back: R`The machine takes the heat $\delta Q_1$ from the reservoir $T_w$ and gives $\delta Q_2$ to the reservoir $T_k$. After one cycle the working medium is in its initial state ($\Delta S_\text{machine} = 0$); the entropy change of the reservoirs:
$$\Delta S = \frac{\delta Q_2}{T_k}-\frac{\delta Q_1}{T_w}\ge0\;\Rightarrow\;\frac{\delta Q_2}{\delta Q_1}\ge\frac{T_k}{T_w}\qquad(10.82,\,10.83)$$
With the first law $\delta Q_1 = \delta W+\delta Q_2$:
$$\eta = \frac{\delta W}{\delta Q_1} = \frac{\delta Q_1-\delta Q_2}{\delta Q_1} = 1-\frac{\delta Q_2}{\delta Q_1}\le1-\frac{T_k}{T_w} = \frac{T_w-T_k}{T_w}\qquad(10.84)$$
Equality holds exactly in the reversible case (Carnot). The same result as in 10.7.2, but without any assumption about the working medium.`,
    meta: R`Script: section 10.7.5.1, Eqs. (10.82)–(10.84), footnote 20, pp. 317–318`,
    explanation: R`<b>Intuition:</b> Heat leaving the hot reservoir carries entropy $Q_1/T_w$ with it. Work carries no entropy. For the total entropy not to fall, at least the entropy $Q_1/T_w$ must be given off somewhere again – as heat $Q_2$ to the cold reservoir, and because $1/T_k\gt1/T_w$ a part of the heat is already enough for this. The rest can become work.<br><br>
<b>Dependencies:</b> The minimum waste heat is $Q_2^\text{min} = Q_1\frac{T_k}{T_w}$. The colder the sink, the less waste heat is needed.<br><br>
<b>Strength of the argument:</b> It holds for every machine (steam turbine, thermocouple, living organisms…) as long as it works cyclically between two temperatures. Only the two laws are needed.<br><br>
<b>Connection:</b> Irreversibilities (friction, heat conduction across finite temperature differences) produce additional entropy, which forces additional waste heat: $\eta_\text{real}\lt\eta_C$.`,
    derivation: R`<ol class="fc-steps">
<li>$\Delta S_\text{hot} = -\dfrac{\delta Q_1}{T_w}$, $\Delta S_\text{cold} = +\dfrac{\delta Q_2}{T_k}$<em>Reservoirs stay at constant temperature; heat exchange is reversible from their point of view.</em></li>
<li>$\Delta S_\text{machine} = 0$<em>Cyclic process: the state variable returns to its initial value.</em></li>
<li>$\dfrac{\delta Q_2}{T_k}-\dfrac{\delta Q_1}{T_w}\ge0$<em>Second law for the isolated total system (10.82).</em></li>
<li>$\dfrac{\delta Q_2}{\delta Q_1}\ge\dfrac{T_k}{T_w}$<em>Rearranged (10.83).</em></li>
<li>$\eta = 1-\dfrac{\delta Q_2}{\delta Q_1}\le1-\dfrac{T_k}{T_w}$<em>Insert the first law (10.84).</em></li>
</ol>`,
    example: R`A machine between $600\,\text{K}$ and $300\,\text{K}$ takes $Q_1 = 1000\,\text{J}$. At least $Q_2 = 500\,\text{J}$ waste heat, at most $W = 500\,\text{J}$.<br>
If it gives off $700\,\text{J}$ ($\eta = 30\,\%$): entropy produced $\frac{700}{300}-\frac{1000}{600} = 0{,}67\,\text{J/K}$ per cycle.`,
    counterexample: R`<b>Claimed machine</b> with $Q_1 = 1000\,\text{J}$ at $600\,\text{K}$, $W = 600\,\text{J}$, $Q_2 = 400\,\text{J}$ at $300\,\text{K}$: energy balances (1st law), but $\Delta S = \frac{400}{300}-\frac{1000}{600} = -0{,}33\,\text{J/K}\lt0$. Forbidden by the second law – a typical "inventor check".`,
    pitfalls: R`<ul><li>Not setting the entropy change of the machine itself to zero over a cycle.</li>
<li>Swapping the signs of the reservoir entropies.</li>
<li>Believing work carries entropy.</li></ul>`
  },
  "ph10_van_der_waals": {
    title: R`Van der Waals equation: internal pressure and co-volume`,
    category: R`10.8 Real gases and liquids`,
    type: "gesetz",
    front: R`What is the <b>van der Waals equation</b>, and which physical effects do the two corrections $a$ and $b$ describe? What do the isotherms of CO₂ look like in the $pV_M$ diagram, and what happens in the coexistence region?`,
    back: R`$$\left(p+\frac{a\nu^2}{V^2}\right)(V-\nu b) = \nu RT,\qquad\left(p+\frac a{V_M^2}\right)(V_M-b) = RT\qquad(10.85,\,10.86)$$
<ul><li><b>Internal pressure</b> $p_i = a/V_M^2$: the mutual attraction of the molecules reduces the momentum transfer to the wall; the "effective" pressure is larger than the measured one.</li>
<li><b>Co-volume</b> $b\approx4N_A\Omega$ ($\Omega$: own volume of a molecule): the freely available volume is smaller than $V$.</li></ul>
<b>CO₂ isotherms</b> (Fig. 10.28): For $T\gtrsim340\,\text{K}$ almost ideal. Below the critical temperature ($304\,\text{K}$): as $V_M$ is reduced, $p$ rises until the liquid/gas coexistence region is reached; then a growing part liquefies at <b>constant pressure</b> (horizontal line instead of the theoretical curve, 0 % → 100 % liquid). Afterwards $p$ rises steeply (liquid hardly compressible). Above $T_K$ the gas cannot be liquefied even at the highest pressure.`,
    meta: R`Script: section 10.8.1, Eqs. (10.85)–(10.86), Fig. 10.28, pp. 318–320`,
    explanation: R`<b>Intuition:</b> Real molecules are small, "sticky" spheres. Because they take up space, less volume is available ($b$); because they attract each other, molecules at the wall are pulled back by the others and push less hard ($a$).<br><br>
<b>Why $a/V_M^2$?</b> The attraction on a wall molecule is $\propto$ density, and the number of wall impacts is also $\propto$ density; together $\propto(1/V_M)^2$.<br><br>
<b>Dependencies:</b> For large $V_M$ (low density) both corrections become small, and one recovers the ideal gas. At high temperatures the $b$ term dominates (pressure larger than ideal), at low temperatures the $a$ term (pressure smaller than ideal).<br><br>
<b>Connection:</b> Only the interaction ($a\ne0$) makes liquefaction possible; the ideal gas never condenses. The Maxwell construction (equal areas) fixes the height of the coexistence line. $a$ also determines the Joule-Thomson effect (10.9.2).`,
    derivation: R`Comparison with the ideal gas (CO₂, $a = 3{,}66\cdot10^5\,\text{Pa m}^6/\text{kmol}^2$, $b = 0{,}0442\,\text{m}^3/\text{kmol}$, $T = 300\,\text{K}$):
<ol class="fc-steps">
<li>$p = \dfrac{RT}{V_M-b}-\dfrac a{V_M^2}$<em>Van der Waals solved for $p$ (10.87).</em></li>
<li>$V_M = 0{,}5\,\text{m}^3/\text{kmol}$: $p_\text{id} = 4{,}99\,\text{MPa}$, $p_\text{vdW} = 5{,}47-1{,}46 = 4{,}01\,\text{MPa}$<em>Attraction lowers the pressure by 20 %.</em></li>
<li>$V_M = 0{,}2\,\text{m}^3/\text{kmol}$: $p_\text{id} = 12{,}5\,\text{MPa}$, $p_\text{vdW} = 6{,}9\,\text{MPa}$<em>Formal; in reality this state lies in the coexistence region at constant vapour pressure ($\approx6{,}7\,\text{MPa}$).</em></li>
<li>$V_M\to\infty$: $p\to RT/V_M$<em>Ideal gas limit.</em></li>
</ol>`,
    example: R`Tab. 10.5: He: $a = 3450$, $10^3b = 24{,}8$; N₂: $140\,800$, $39{,}8$; CO₂: $365\,600\,\text{Pa m}^6/\text{kmol}^2$, $44{,}2\,\text{m}^3/\text{kmol}$.<br>
Co-volume CO₂: $b/(4N_A) = 1{,}8\cdot10^{-29}\,\text{m}^3$ per molecule, so a radius $\approx0{,}16\,\text{nm}$ – the right order of magnitude.`,
    counterexample: R`<b>Van der Waals is only qualitative:</b> The critical ratio $\frac{p_KV_{MK}}{RT_K}$ is $\frac38 = 0{,}375$ according to van der Waals, measured for CO₂ about $0{,}27$ (for most gases $0{,}27$–$0{,}29$). In the coexistence region the equation even gives ranges with $\partial p/\partial V\gt0$ (mechanically unstable), which do not occur in reality.`,
    pitfalls: R`<ul><li>Taking the van der Waals loop in the coexistence region for the real isotherm.</li>
<li>Using $a/V^2$ instead of $a\nu^2/V^2$ with total volume.</li>
<li>Mixing units of $a$ and $b$ (per kmol vs. per mol).</li></ul>`
  },
  "ph10_kritischer_punkt": {
    title: R`Critical point: V_MK = 3b, T_K = 8a/(27bR), p_K = a/(27b²)`,
    category: R`10.8 Real gases and liquids`,
    type: "herleitung",
    front: R`At the <b>critical point</b> the isotherm has a horizontal inflection tangent. Determine $V_{MK}$, $T_K$ and $p_K$ from the van der Waals equation, and calculate the ratio $\frac{p_KV_{MK}}{RT_K}$. What happens above $T_K$?`,
    back: R`$$p = \frac{RT}{V_M-b}-\frac a{V_M^2}\qquad(10.87)$$
Horizontal tangent:
$$\frac{\partial p}{\partial V_M} = -\frac{RT}{(V_M-b)^2}+\frac{2a}{V_M^3} = 0\;\Rightarrow\;RTV_M^3 = 2a(V_M-b)^2\qquad(10.88,\,10.89)$$
Inflection point:
$$\frac{\partial^2p}{\partial V_M^2} = \frac{2RT}{(V_M-b)^3}-\frac{6a}{V_M^4} = 0\;\Rightarrow\;2RTV_M^4 = 6a(V_M-b)^3\qquad(10.90,\,10.91)$$
Division (10.91)/(10.89) and substitution:
$$V_{MK} = 3b,\qquad T_K = \frac8{27}\frac a{bR},\qquad p_K = \frac1{27}\frac a{b^2},\qquad\frac{p_KV_{MK}}{RT_K} = \frac38\qquad(10.92,\,10.93)$$
Above $T_K$ there is no longer a liquid/gas phase transition: no liquefaction by pressure alone.`,
    meta: R`Script: section 10.8.1, Eqs. (10.87)–(10.93), Tab. 10.5, pp. 320–321`,
    explanation: R`<b>Intuition:</b> The hotter it is, the shorter the horizontal coexistence section of the isotherm becomes; at the critical point it shrinks to a single point. Liquid and gas then have the same density and can no longer be told apart. Above it there is only a "supercritical fluid".<br><br>
<b>Dependencies:</b> $T_K\propto a/b$: strong attraction (large $a$) raises the critical temperature (CO₂ $304\,\text{K}$, water $647\,\text{K}$); weak attraction gives a low $T_K$ (He $5{,}2\,\text{K}$). That is why helium is so hard to liquefy.<br><br>
<b>Inversion:</b> From measured $T_K$ and $p_K$ one determines $a = \frac{27R^2T_K^2}{64p_K}$ and $b = \frac{RT_K}{8p_K}$.<br><br>
<b>Connection:</b> Supercritical CO₂ (above $31\,^\circ\text{C}$, $7{,}4\,\text{MPa}$) serves as a solvent (decaffeination). At the critical point critical opalescence appears (strong density fluctuations scatter light).`,
    derivation: R`<ol class="fc-steps">
<li>$\dfrac{2RTV_M^4}{RTV_M^3} = \dfrac{6a(V_M-b)^3}{2a(V_M-b)^2}\Rightarrow2V_M = 3(V_M-b)$<em>Divide (10.91) by (10.89).</em></li>
<li>$V_{MK} = 3b$<em>Solved (10.92).</em></li>
<li>$RT_K\cdot27b^3 = 2a\cdot4b^2\Rightarrow T_K = \dfrac{8a}{27bR}$<em>Insert into (10.89): $V_M-b = 2b$.</em></li>
<li>$p_K = \dfrac{RT_K}{2b}-\dfrac a{9b^2} = \dfrac{4a}{27b^2}-\dfrac{3a}{27b^2} = \dfrac{a}{27b^2}$<em>Insert into (10.87).</em></li>
<li>$\dfrac{p_KV_{MK}}{RT_K} = \dfrac{a}{27b^2}\cdot3b\cdot\dfrac{27b}{8a} = \dfrac38$<em>Universal for all van der Waals gases (10.93).</em></li>
</ol>`,
    example: R`N₂ from Tab. 10.5 ($a = 140\,800$, $b = 0{,}0398$, $R = 8314\,\text{J/(kmol K)}$): $T_K = \frac{8\cdot140800}{27\cdot0{,}0398\cdot8314} = 126\,\text{K}$ ✓, $p_K = \frac{140800}{27\cdot0{,}0398^2} = 3{,}29\,\text{MPa}$ ✓, $V_{MK} = 0{,}119\,\text{m}^3/\text{kmol}$ ✓.<br>
For CO₂ the formula gives $295\,\text{K}$ instead of the measured $304\,\text{K}$.`,
    counterexample: R`<b>Critical point ≠ triple point:</b> At the triple point three phases (solid, liquid, gas) coexist; at the critical point the vapour-pressure curve ends, and liquid and gas become identical. For water: triple point $0{,}01\,^\circ\text{C}$/$612\,\text{Pa}$, critical point $374\,^\circ\text{C}$/$22{,}1\,\text{MPa}$ (Tab. 10.7).`,
    pitfalls: R`<ul><li>Setting only the first derivative to zero (then one has some extremum, not the critical point).</li>
<li>Algebra errors with $V_M-b = 2b$.</li>
<li>Assuming that enough pressure can liquefy a gas above $T_K$.</li></ul>`
  },
  "ph10_dampfdruck_latente_waerme": {
    title: R`Vapour-pressure curve, phase diagram and latent heat`,
    category: R`10.8 Real gases and liquids`,
    type: "konzept",
    front: R`What is the <b>vapour-pressure curve</b>, and where does it begin and end? What is <b>latent heat</b>? How much energy is needed to turn $1\,\text{kg}$ of ice at $0\,^\circ\text{C}$ into steam at $100\,^\circ\text{C}$, and which step dominates?`,
    back: R`In the coexistence region the pressure depends only on $T$, not on the volume:
$$p = p(V,T)\;\to\;p_d = p_d(T)\qquad(10.94,\,10.95)$$
<b>Vapour-pressure curve:</b> the pressure at which gas and liquid are in equilibrium; bounded by the <b>triple point</b> (solid, liquid, gas coexist) and the <b>critical point</b>. Together with the melting and sublimation curves it forms the <b>phase diagram</b> (Fig. 10.30).<br><br>
<b>Latent heat:</b> In a phase transition supplying heat does not raise the temperature. For the whole mass $m$:
$$Q = mL_m\qquad(10.96)$$
Tab. 10.6 (at $100\,\text{kPa}$): water $L_\text{melting} = 333\,\text{kJ/kg}$, $L_\text{evap} = 2260\,\text{kJ/kg}$; nitrogen $26$ / $200\,\text{kJ/kg}$ (boiling point $77{,}35\,\text{K}$); helium $L_\text{evap} = 20\,\text{kJ/kg}$ ($4{,}2\,\text{K}$).`,
    meta: R`Script: sections 10.8.2.1–10.8.2.2, Eqs. (10.94)–(10.96), Tabs. 10.6–10.7, Fig. 10.30, pp. 321–325`,
    explanation: R`<b>Intuition:</b> When melting and evaporating, the supplied energy goes not into faster motion (temperature), but into breaking the bonds between molecules. Only when everything has been converted does the temperature rise again.<br><br>
<b>Dependencies:</b> Evaporating costs much more than melting (water: factor 7), because evaporation breaks all bonds, while melting breaks only some. $L_\text{evap}$ depends somewhat on $T$ and vanishes at the critical point (water: $2503\,\text{kJ/kg}$ at $0\,^\circ\text{C}$, $2256$ at $100\,^\circ\text{C}$).<br><br>
<b>Boiling point:</b> A liquid boils when its vapour pressure reaches the ambient pressure. At altitude (lower air pressure) water boils earlier; in a pressure cooker (higher pressure) later.<br><br>
<b>Connection:</b> The slope of the vapour-pressure curve follows from the latent heat (Clausius-Clapeyron, 10.8.2.3). Sweating cools via the heat of evaporation (hygrometry, 10.8.2.4).`,
    derivation: R`Ice at $0\,^\circ\text{C}$ to steam at $100\,^\circ\text{C}$ (per kg):
<ol class="fc-steps">
<li>$Q_1 = mL_\text{melting} = 333\,\text{kJ}$<em>Melting at a constant $0\,^\circ\text{C}$.</em></li>
<li>$Q_2 = mc\Delta T = 4{,}182\cdot100\,\text{kJ} = 418\,\text{kJ}$<em>Warming water from $0$ to $100\,^\circ\text{C}$.</em></li>
<li>$Q_3 = mL_\text{evap} = 2260\,\text{kJ}$<em>Evaporating at a constant $100\,^\circ\text{C}$.</em></li>
<li>$Q = 3011\,\text{kJ}$; evaporation $75\,\%$<em>The liquid→gas transition dominates.</em></li>
</ol>`,
    example: R`<b>Liquid nitrogen:</b> $1\,\text{L}$ ($0{,}81\,\text{kg}$) evaporates with $0{,}81\cdot200 = 162\,\text{kJ}$. A heat input of $10\,\text{W}$ evaporates it in $4{,}5\,\text{h}$.<br>
<b>Helium</b>: only $20\,\text{kJ/kg}$; $1\,\text{L}$ ($0{,}125\,\text{kg}$) needs $2{,}5\,\text{kJ}$ – which is why helium cryostats must be extremely well insulated.`,
    counterexample: R`<b>Superheating and supercooling:</b> Very pure water can be heated above $100\,^\circ\text{C}$ without nuclei (bumping in the microwave) or stay liquid below $0\,^\circ\text{C}$. The phase boundaries give the equilibrium; whether it is reached depends on nucleation.`,
    pitfalls: R`<ul><li>Using $Q = mc\Delta T$ during a phase transition.</li>
<li>Confusing melting heat and heat of evaporation.</li>
<li>Believing the triple point is the end point of the vapour-pressure curve at high temperatures.</li></ul>`
  },
  "ph10_clausius_clapeyron": {
    title: R`Clausius-Clapeyron equation and the melting curve of water`,
    category: R`10.8 Real gases and liquids`,
    type: "herleitung",
    front: R`Derive the <b>Clausius-Clapeyron equation</b> for the slope of the vapour-pressure curve using a small Carnot cycle in the coexistence region. What follows for the melting curve of water, and at what temperature does water boil at $890\,\text{hPa}$?`,
    back: R`Reversible cycle in the coexistence region between $T_1$ and $T_2 = T_1-\Delta T$ (Fig. 10.29): evaporate at $T_1$ (heat $L$), condense at $T_2$. Net work = area $\Delta p\,(V_d-V_\text{fl})$:
$$\eta_C = \frac{T_1-T_2}{T_1} = \frac{\Delta T}{T_1} = \frac{\delta W}{\delta Q_1} = \frac{\Delta p\,(V_d-V_\text{fl})}{L(T_1)}\qquad(10.97)$$
$$\frac{dp_d}{dT} = \frac{L_m}{T\,(V_{m,d}-V_{m,\text{fl}})},\qquad\frac{dp_d}{dT} = \frac{L_M}{T\,(V_{M,d}-V_{M,\text{fl}})}\qquad(10.98,\,10.99)$$
($V_m = 1/\rho$ specific volume, $V_M$ molar.) Likewise for the melting curve:
$$\frac{dp_s}{dT} = \frac{L_{m,\text{solid}\to\text{liq}}}{T\,(V_{m,\text{liq}}-V_{m,\text{solid}})}\qquad(10.102)$$
For water $V_{m,\text{liq}}\lt V_{m,\text{solid}}$ (ice floats), so $\frac{dp_s}{dT}\lt0$: <b>ice melts under increased pressure</b>.<br>
Exercise: at $890\,\text{hPa}$ water boils at $\approx96\,^\circ\text{C}$.`,
    meta: R`Script: sections 10.8.2.3, 10.8.3, Eqs. (10.97)–(10.99), (10.102), Figs. 10.29–10.30, footnotes 21–23, pp. 322–324`,
    explanation: R`<b>Intuition:</b> The larger the heat of evaporation, the more strongly the vapour pressure reacts to temperature. And the larger the volume increase on evaporation, the less the pressure must rise to keep equilibrium.<br><br>
<b>Elegance of the derivation:</b> One needs neither a molecular model nor an equation of state – only the Carnot efficiency, that is the second law.<br><br>
<b>Dependencies (integrated form, supplement):</b> With $V_d\gg V_\text{fl}$ and ideal vapour $V_{M,d} = RT/p$: $\frac{d\ln p}{dT} = \frac{L_M}{RT^2}$, so $p_d\propto e^{-L_M/(RT)}$. The vapour pressure grows exponentially with temperature.<br><br>
<b>Ice skating:</b> The script names pressure melting as the reason. Quantitatively, however, it is not enough: the melting curve has $\frac{dp}{dT}\approx-13{,}4\,\text{MPa/K}$; even $2$–$7\,\text{MPa}$ under the blade lower the melting point by only a few tenths of a kelvin. At $-10\,^\circ\text{C}$ frictional heat and a thin, quasi-liquid surface layer of the ice decide.`,
    derivation: R`Boiling point at $890\,\text{hPa}$ (integrated form, $L_M = 2256\,\text{kJ/kg}\cdot18{,}0\,\text{g/mol} = 40{,}6\,\text{kJ/mol}$):
<ol class="fc-steps">
<li>$\dfrac{dp}{dT}\approx\dfrac{L_Mp}{RT^2}$<em>(10.99) with $V_{M,d}\gg V_{M,\text{fl}}$ and $V_{M,d} = RT/p$.</em></li>
<li>$\ln\dfrac{p}{p_0} = -\dfrac{L_M}R\left(\dfrac1T-\dfrac1{T_0}\right)$<em>Separation of variables, $L_M$ taken as constant.</em></li>
<li>$\dfrac1T = \dfrac1{373{,}15\,\text{K}}-\dfrac{8{,}314}{40\,640}\ln\dfrac{890}{1013}$<em>Reference: $100\,^\circ\text{C}$ at $1013\,\text{hPa}$.</em></li>
<li>$T = 369{,}5\,\text{K} = 96{,}3\,^\circ\text{C}$<em>About $3{,}6\,\text{kPa}$ per kelvin near $100\,^\circ\text{C}$.</em></li>
</ol>`,
    example: R`Mount Everest ($p\approx337\,\text{hPa}$): boiling point $\approx71\,^\circ\text{C}$ – pasta barely cooks.<br>
Pressure cooker ($2\,\text{bar}$): boiling point $\approx120\,^\circ\text{C}$.<br>
Ice: a pressure increase of $10\,\text{MPa}$ ($100\,\text{bar}$) lowers the melting point by only $0{,}74\,\text{K}$.`,
    counterexample: R`<b>Most substances behave differently from water:</b> For almost all substances the solid is denser than the liquid; then $\frac{dp_s}{dT}\gt0$, and pressure <i>raises</i> the melting point. The negative slope is an anomaly of water (and of a few other substances such as bismuth and silicon).`,
    pitfalls: R`<ul><li>Mixing specific and molar quantities in (10.98)/(10.99).</li>
<li>Overlooking the sign of $V_\text{liq}-V_\text{solid}$ for the melting curve.</li>
<li>Using the integrated form with constant $L$ over large temperature ranges.</li></ul>`
  },
  "ph10_hygrometrie": {
    title: R`Relative humidity and dew point`,
    category: R`10.8 Real gases and liquids`,
    type: "beispiel",
    front: R`How is the <b>relative humidity</b> $\varphi$ defined? Cold air at $0\,^\circ\text{C}$ and $\varphi = 100\,\%$ is heated to $20\,^\circ\text{C}$ without adding water. What is $\varphi$ afterwards? Why does a pair of glasses fog up, and why is it hard to sweat in the tropics?`,
    back: R`Directly above a liquid the partial pressure of the vapour equals the vapour pressure $p_d$; in free air there is an effective partial pressure $p_\text{eff}$ (diffusion is slow):
$$\varphi\,[\%] = 100\,\frac{p_\text{eff}}{p_d(T)}\qquad(10.100)$$
$\varphi\gt100\,\%$: supersaturated, mist; $\varphi = 100\,\%$: saturated; $\varphi\lt100\,\%$: more or less dry.<br><br>
<b>Heating:</b> $p_\text{eff}$ stays, but $p_d$ rises ($p_d(0\,^\circ\text{C}) = 6{,}0\,\text{hPa}$, $p_d(20\,^\circ\text{C}) = 23{,}4\,\text{hPa}$):
$$\varphi(\text{warm}) = \varphi(\text{cold})\frac{p_d(\text{cold})}{p_d(\text{warm})} = \frac{6{,}0}{23{,}4}\cdot100\,\% = 26\,\%\qquad(10.101)$$
At $\varphi\approx100\,\%$ (tropics) no sweat evaporates, so there is no cooling. Conversely, water condenses on objects that are colder than the <b>dew point</b> (glasses, cooling water pipes).`,
    meta: R`Script: section 10.8.2.4, Eqs. (10.100)–(10.101), p. 323`,
    explanation: R`<b>Intuition:</b> Air "holds" more water vapour the warmer it is, because the saturation vapour pressure rises exponentially with $T$ (Clausius-Clapeyron). The relative humidity says how full this "barrel" is. When air is heated, the barrel gets larger but the content stays: $\varphi$ falls. When it is cooled, the barrel overflows: dew, fog, clouds.<br><br>
<b>Dew point:</b> the temperature at which $p_d(T_\text{dew}) = p_\text{eff}$. A cold pair of glasses that comes into a warm room is below the dew point of the room air and fogs up.<br><br>
<b>Dependencies:</b> $p_d$ doubles roughly every $10$–$11\,\text{K}$ near room temperature. That is why heated winter air is so dry.<br><br>
<b>Connection:</b> Evaporative cooling uses the heat of evaporation (10.8.2.2): sweating, cooling towers, clay water jugs.`,
    derivation: R`Dew point for room air at $20\,^\circ\text{C}$ and $\varphi = 50\,\%$:
<ol class="fc-steps">
<li>$p_\text{eff} = 0{,}5\cdot p_d(20\,^\circ\text{C}) = 11{,}7\,\text{hPa}$<em>Definition (10.100).</em></li>
<li>$p_d(T_\text{dew}) = 11{,}7\,\text{hPa}$<em>On cooling $p_\text{eff}$ stays; saturation is reached when $p_d$ has fallen to it.</em></li>
<li>$T_\text{dew}\approx9\,^\circ\text{C}$<em>From a vapour-pressure table or the Clausius-Clapeyron/Magnus formula.</em></li>
<li>Window pane below $9\,^\circ\text{C}$: condensation<em>Typical for single glazing in winter.</em></li>
</ol>`,
    example: R`Winter: outside air $0\,^\circ\text{C}$, $100\,\%$, heated to $20\,^\circ\text{C}$: $26\,\%$ – unpleasantly dry (script).<br>
Summer evening: air $25\,^\circ\text{C}$, $60\,\%$ ($p_\text{eff}\approx19\,\text{hPa}$) cools at night to $15\,^\circ\text{C}$ ($p_d = 17\,\text{hPa}$): supersaturated, dew and fog.`,
    counterexample: R`<b>Absolute vs. relative humidity:</b> Desert air at $40\,^\circ\text{C}$ and $20\,\%$ contains more water per m³ ($p_\text{eff}\approx15\,\text{hPa}$) than foggy winter air at $0\,^\circ\text{C}$ and $100\,\%$ ($6\,\text{hPa}$). "Dry" and "humid" refer to saturation, not to the water content.`,
    pitfalls: R`<ul><li>Assuming $\varphi$ stays constant when air is heated.</li>
<li>Confusing relative and absolute humidity.</li>
<li>Assuming the vapour pressure is linear rather than exponential in $T$.</li></ul>`
  },
  "ph10_enthalpie": {
    title: R`Enthalpy H = U + pV`,
    category: R`10.9 Low temperatures and the third law`,
    type: "definition",
    front: R`How is the <b>enthalpy</b> defined, and why is it the natural energy quantity for processes at <b>constant pressure</b>? How are $H$ and $C_p$ related?`,
    back: R`$$H = U+pV\qquad(10.103)$$
(holds when only volume work is relevant; to be extended for magnetic systems etc.). $H$ is a state function.<br><br>
<b>Isobaric</b> ($dp = 0$):
$$dH = \delta Q^\swarrow\qquad(p = \text{const.})\qquad(10.104)$$
This is why melting and evaporation <b>enthalpies</b> $\Delta H_M$ (usually kJ/mol) and reaction enthalpies are tabulated – chemistry mostly runs at atmospheric pressure.
$$C_p = \frac1\nu\left(\frac{\partial H}{\partial T}\right)_p\qquad(10.105)$$`,
    meta: R`Script: section 10.9.1, Eqs. (10.103)–(10.105), p. 325`,
    explanation: R`<b>Intuition:</b> At constant pressure a system that expands must additionally "make room" (work $p\,dV$ against the atmosphere). The enthalpy books this displacement work in as well. That is why the heat supplied at constant pressure is exactly the change in enthalpy – without having to account for the work separately.<br><br>
<b>Analogy:</b> $U$ is for isochoric processes what $H$ is for isobaric ones: $dU = \delta Q$ at $V = $ const., $dH = \delta Q$ at $p = $ const. Accordingly $C_V = \frac1\nu\partial U/\partial T$ and $C_p = \frac1\nu\partial H/\partial T$.<br><br>
<b>Ideal gas:</b> $H = U+\nu RT = \frac{f+2}2\nu RT$, depends only on $T$, like $U$.<br><br>
<b>Connection:</b> In the Joule-Thomson process the enthalpy stays constant (10.9.2). Further thermodynamic potentials (free energy, free enthalpy) follow the same pattern (physics II, thermodynamics lectures).`,
    derivation: R`<ol class="fc-steps">
<li>$dH = dU+p\,dV+V\,dp$<em>Product rule applied to $H = U+pV$.</em></li>
<li>$dU = \delta Q^\swarrow-p\,dV$<em>First law with pure volume work.</em></li>
<li>$dH = \delta Q^\swarrow+V\,dp$<em>The $p\,dV$ terms cancel.</em></li>
<li>$dp = 0\Rightarrow dH = \delta Q^\swarrow$<em>(10.104).</em></li>
<li>$\nu C_p\,dT = \delta Q^\swarrow_p = dH\Rightarrow C_p = \dfrac1\nu\left(\dfrac{\partial H}{\partial T}\right)_p$<em>(10.105).</em></li>
</ol>`,
    example: R`Enthalpy of vaporisation of water at $100\,^\circ\text{C}$: $\Delta H_M = 2256\,\text{kJ/kg}\cdot0{,}018\,\text{kg/mol} = 40{,}6\,\text{kJ/mol}$. Of this, $p\Delta V\approx RT = 3{,}1\,\text{kJ/mol}$ is displacement work against the atmosphere; the rest ($37{,}5\,\text{kJ/mol}$) raises the internal energy.`,
    counterexample: R`<b>Isochoric processes:</b> In a closed, rigid vessel (bomb calorimeter) one measures $\Delta U$, not $\Delta H$. For reactions involving gases the two differ by $\Delta(pV) = \Delta\nu_\text{gas}RT$. $dH = \delta Q$ holds only at constant pressure.`,
    pitfalls: R`<ul><li>Using $dH = \delta Q$ when the pressure is not constant.</li>
<li>Treating $H$ and $U$ as the same.</li>
<li>Overrating the (small) difference between $\Delta H$ and $\Delta U$ for solids and liquids.</li></ul>`
  },
  "ph10_joule_thomson": {
    title: R`Joule-Thomson effect and inversion temperature T_inv = 2a/(Rb)`,
    category: R`10.9 Low temperatures and the third law`,
    type: "herleitung",
    front: R`A gas flows slowly through a porous wall (cotton wool) from $p_1$ to $p_2\lt p_1$, without heat or work supplied from outside. Show that the <b>enthalpy stays constant</b>. Why does the temperature of an ideal gas not change, but that of a van der Waals gas does? When does it cool down?`,
    back: R`<b>Energy balance</b> (Fig. 10.31): the left piston pushes $V_1$ in with the work $p_1V_1$; on the right the gas does $p_2V_2$:
$$p_1V_1-p_2V_2 = U_2-U_1\;\Rightarrow\;U_1+p_1V_1 = U_2+p_2V_2,\quad H = \text{const.}\qquad(10.106)$$
<b>Internal energy</b> of the van der Waals gas (work against the internal pressure):
$$U = \frac f2\nu RT-\frac{\nu^2a}V\qquad(10.107,\,10.108)$$
$$H = U+pV = \nu RT\left(\frac f2+\frac V{V-\nu b}\right)-\frac{2\nu^2a}V\qquad(10.109)$$
From $dH = \frac{\partial H}{\partial V}dV+\frac{\partial H}{\partial T}dT = 0$ (10.110, 10.111) for $V\gg\nu b$:
$$dT\approx\nu\frac{dV}{V^2}\cdot\frac{bRT-2a}{C_p}\qquad(10.112)$$
Ideal gas ($a = b = 0$): $dT = 0$. On expansion ($dV\gt0$) <b>cooling</b> below the inversion temperature:
$$T_\text{Inv} = \frac{2a}{Rb} = \frac{27}4T_\text{krit}\qquad(10.113)$$
above it, warming.`,
    meta: R`Script: section 10.9.2, Eqs. (10.106)–(10.113), Fig. 10.31, footnotes 24–25, pp. 326–328`,
    explanation: R`<b>Intuition:</b> On expansion the molecules move apart. Against their mutual attraction ($a$) they must do work, which comes from the kinetic energy: the gas cools. The co-volume effect ($b$) acts the other way (repulsive forces release energy). Which one wins depends on $T$: at low temperatures the attraction.<br><br>
<b>Dependencies:</b> Joule-Thomson coefficient (for $V\gg\nu b$) $\mu_{JT} = \left(\frac{\partial T}{\partial p}\right)_H\approx\frac{2a/(RT)-b}{C_p}$: for air at $300\,\text{K}$ about $0{,}25\,\text{K/bar}$, so $\approx50\,\text{K}$ cooling for a pressure drop of $200\,\text{bar}$ (script, footnote 25).<br><br>
<b>Hydrogen and helium:</b> very small $a$, hence low inversion temperatures (H₂ about $200\,\text{K}$, He about $40\,\text{K}$). At room temperature they warm up on expansion – with H₂ there is a risk of explosion when opening the cylinder (footnote 24).<br><br>
<b>Connection:</b> Linde process for liquefying air with counterflow precooling; after precooling below $T_\text{Inv}$ also H₂ ($20\,\text{K}$) and He ($4{,}2\,\text{K}$).`,
    derivation: R`Approximation (10.112) in detail:
<ol class="fc-steps">
<li>$\dfrac{\partial H}{\partial T} = \nu R\left(\dfrac f2+\dfrac V{V-\nu b}\right)\approx\nu R\left(\dfrac f2+1\right) = \nu C_p$<em>For $V\gg\nu b$ (denominator in 10.111).</em></li>
<li>$\dfrac{\partial H}{\partial V} = -\dfrac{\nu^2RTb}{(V-\nu b)^2}+\dfrac{2\nu^2a}{V^2}\approx\dfrac{\nu^2}{V^2}(2a-bRT)$<em>Derivative of (10.109) with respect to $V$, then $V\gg\nu b$.</em></li>
<li>$dT = -\dfrac{\partial H/\partial V}{\partial H/\partial T}dV = \nu\dfrac{dV}{V^2}\dfrac{bRT-2a}{C_p}$<em>From $dH = 0$ (10.110–10.112).</em></li>
<li>$dV\gt0$, $bRT\lt2a\Rightarrow dT\lt0$<em>Cooling on expansion.</em></li>
<li>$T_\text{Inv} = \dfrac{2a}{Rb} = \dfrac{27}4\cdot\dfrac{8a}{27Rb} = \dfrac{27}4T_\text{krit}$<em>Sign change (10.113).</em></li>
</ol>`,
    example: R`Van der Waals estimate $T_\text{Inv} = 2a/(Rb)$: N₂ $\approx850\,\text{K}$ (measured about $620\,\text{K}$), H₂ $\approx220\,\text{K}$ (measured about $200\,\text{K}$), He $\approx35\,\text{K}$ (measured about $40\,\text{K}$).<br>
Air, $\Delta p = 20\,\text{MPa}$: $\Delta T\approx-50\,\text{K}$ (script).`,
    counterexample: R`<b>Free expansion ≠ Joule-Thomson:</b> In the free expansion into a vacuum $U$ stays constant (not $H$); there, too, a real gas cools slightly because of $a$, but differently. And for an ideal gas both processes give no temperature change – the cooling is a pure effect of the interaction.`,
    pitfalls: R`<ul><li>Assuming every gas expansion cools (above $T_\text{Inv}$ it warms).</li>
<li>Confusing Joule-Thomson with adiabatic expansion against a piston (there the gas does work and cools even as an ideal gas).</li>
<li>Using $U$ instead of $H$ as the conserved quantity.</li></ul>`
  },
  "ph10_dritter_hauptsatz": {
    title: R`Ways to low temperatures and the third law (Nernst)`,
    category: R`10.9 Low temperatures and the third law`,
    type: "konzept",
    front: R`Which methods reach low temperatures (down to about $10^{-3}\,\text{K}$)? What is the <b>third law</b> according to Nernst, and what is its connection to the coefficient of performance of the refrigerator and to the normalisation of entropy?`,
    back: R`<b>Methods</b> (script):
<ul><li>Heat pump/refrigerator (10.7.2)</li>
<li>Joule-Thomson expansion with counterflow precooling (Linde): liquid air; after precooling also H₂ ($T_s = 20\,\text{K}$) and He ($4{,}2\,\text{K}$)</li>
<li>Pumping off (removal of the heat of evaporation): with ³He down to $0{,}3\,\text{K}$</li>
<li>Adiabatic demagnetisation: down to $10^{-3}\,\text{K}$</li></ul>
The closer one gets to absolute zero, the more elaborate the processes become.<br><br>
<b>Third law</b> (Nernst):<br>It is impossible to reach absolute zero in a finite number of steps.<br><br>
Related: the entropy of pure substances is normalised to zero at $T = 0$ (10.7.4), and the coefficient of performance of an ideal refrigerator $\eta_K = \frac{T_k}{T_w-T_k}\to0$ for $T_k\to0$ (10.69).`,
    meta: R`Script: section 10.9.2 (end), Eq. (10.69); section 10.7.4, pp. 310, 315, 328`,
    explanation: R`<b>Intuition:</b> Every cooling step removes a fraction of the remaining heat. As with Zeno's paradox, one gets ever closer to the goal without ever reaching it. Moreover, at low temperatures all heat capacities drop towards zero; there are therefore ever fewer "levers" on which a cooling method can act.<br><br>
<b>Thermodynamic price:</b> To remove a heat $Q$ at $T_k$ and release it at $T_w$ one needs at least $W = Q\frac{T_w-T_k}{T_k}$. At $T_k = 1\,\text{mK}$ and $T_w = 300\,\text{K}$ this is $3\cdot10^5$ times the heat removed.<br><br>
<b>Adiabatic demagnetisation:</b> A paramagnetic salt is magnetised isothermally in a magnetic field (spins aligned, entropy given off), then thermally isolated and the field is switched off slowly: the spins take up entropy from the lattice vibrations, and the temperature falls.<br><br>
<b>Connection:</b> Low temperatures make quantum effects visible: superconductivity, superfluidity of helium, quantum computers (millikelvin cryostats).`,
    derivation: R`Minimum work for cooling (refrigerator as a Carnot machine run in reverse):
<ol class="fc-steps">
<li>$\eta_K = \dfrac{Q_k}{W} = \dfrac{T_k}{T_w-T_k}$<em>Ideal refrigerator (10.69).</em></li>
<li>$W_\text{min} = Q_k\dfrac{T_w-T_k}{T_k}$<em>Work per heat removed.</em></li>
<li>$T_k = 4\,\text{K}$, $T_w = 300\,\text{K}$: $W_\text{min} = 74\,Q_k$<em>For liquid helium.</em></li>
<li>$T_k\to0$: $W_\text{min}\to\infty$<em>The effort per joule removed grows without limit: a preview of the unreachability.</em></li>
</ol>`,
    example: R`<b>Helium liquefier:</b> $1\,\text{W}$ of cooling power at $4{,}2\,\text{K}$ costs ideally $70\,\text{W}$, in reality more like $500$–$1000\,\text{W}$ of compressor power.<br>
<b>Record temperatures</b> (supplement): nuclear spin demagnetisation reaches micro- to nanokelvin, but never $0\,\text{K}$.`,
    counterexample: R`<b>"Negative absolute temperatures"</b> in spin systems (laboratory experiments) do not contradict the third law: one does not get there by cooling past $0\,\text{K}$, but by population inversion; formally such systems are "hotter than infinitely hot". The statement "$T\lt0$ impossible" (10.2.1) refers to ordinary systems with an unbounded energy spectrum.`,
    pitfalls: R`<ul><li>Misreading the third law as "$T = 0$ is forbidden, but arbitrarily close is possible": both hold, but the effort grows without limit.</li>
<li>Trying Joule-Thomson cooling above the inversion temperature.</li>
<li>Believing the heat capacities stay constant as $T\to0$.</li></ul>`
  },
  "ph10_prozesstabelle": {
    title: R`Overview: ΔU, W, Q and ΔS for the four standard processes of the ideal gas`,
    category: R`10.6 Ideal gases`,
    type: "konzept",
    front: R`For an ideal gas ($\nu$ mol, $C_V$, $C_p$, $\kappa$), list together the change of internal energy, the work done by the gas, the heat supplied and the entropy change for the <b>isochoric</b>, <b>isobaric</b>, <b>isothermal</b> and <b>adiabatic</b> (reversible) change of state.`,
    back: R`Always: $\Delta U = \nu C_V\Delta T$ (only $T$ counts), $Q^\swarrow = \Delta U+W^\nearrow$, $W^\nearrow = \int p\,dV$.
<ul><li><b>Isochoric</b> ($V$ = const.): $W^\nearrow = 0$, $Q^\swarrow = \nu C_V\Delta T$, $\Delta S = \nu C_V\ln\frac{T_2}{T_1}$.</li>
<li><b>Isobaric</b> ($p$ = const.): $W^\nearrow = p\Delta V = \nu R\Delta T$, $Q^\swarrow = \nu C_p\Delta T$, $\Delta S = \nu C_p\ln\frac{T_2}{T_1}$.</li>
<li><b>Isothermal</b> ($T$ = const.): $\Delta U = 0$, $W^\nearrow = Q^\swarrow = \nu RT\ln\frac{V_2}{V_1}$, $\Delta S = \nu R\ln\frac{V_2}{V_1}$.</li>
<li><b>Adiabatic</b> ($Q = 0$, $pV^\kappa$ = const.): $W^\nearrow = -\Delta U = \nu C_V(T_1-T_2) = \frac{p_1V_1-p_2V_2}{\kappa-1}$, $\Delta S = 0$.</li></ul>
<b>General</b> (state variable, path-independent):
$$\Delta S = \nu C_V\ln\frac{T_2}{T_1}+\nu R\ln\frac{V_2}{V_1}$$`,
    meta: R`Supplement (exam overview); summarises sections 10.6.2 (Eqs. 10.34–10.41), 10.6.4 (Eqs. 10.44–10.57) and 10.7.4 (Eqs. 10.78–10.79)`,
    explanation: R`<b>Intuition:</b> The internal energy of the ideal gas is a pure "temperature account". The work is the area under the curve in the pV diagram. The heat always follows from the first law as the remainder. With these three rules one can derive every row of the table oneself – rote learning is unnecessary.<br><br>
<b>Entropy as a check:</b> $\Delta S$ depends only on the initial and final state. For a cycle the sum of the $\Delta S$ over all steps must be zero – a quick test for arithmetic errors.<br><br>
<b>Dependencies:</b> Isobaric needs more heat per kelvin than isochoric ($C_p\gt C_V$). For the same doubling of volume, the isobaric expansion does the most work, the adiabatic the least (pressure falls most steeply).<br><br>
<b>Connection:</b> Polytropic processes $pV^n$ = const. include all four as special cases: $n = 0$ (isobaric), $n = 1$ (isothermal), $n = \kappa$ (adiabatic), $n\to\infty$ (isochoric). Cycles (10.7.2) are chains of these building blocks.`,
    derivation: R`General entropy formula via a substitute path (isochoric, then isothermal):
<ol class="fc-steps">
<li>$dS = \dfrac{\delta Q_\text{rev}^\swarrow}T = \dfrac{dU+p\,dV}T$<em>Definition (10.78) and first law.</em></li>
<li>$= \nu C_V\dfrac{dT}T+\nu R\dfrac{dV}V$<em>$dU = \nu C_VdT$, $p/T = \nu R/V$.</em></li>
<li>$\Delta S = \nu C_V\ln\dfrac{T_2}{T_1}+\nu R\ln\dfrac{V_2}{V_1}$<em>Integrate; each term on its own.</em></li>
<li>Isobaric: $\dfrac{V_2}{V_1} = \dfrac{T_2}{T_1}\Rightarrow\Delta S = \nu(C_V+R)\ln\dfrac{T_2}{T_1} = \nu C_p\ln\dfrac{T_2}{T_1}$<em>Consistency with the table row.</em></li>
<li>Adiabatic: $TV^{\kappa-1}$ = const. $\Rightarrow C_V\ln\dfrac{T_2}{T_1} = -R\ln\dfrac{V_2}{V_1}\Rightarrow\Delta S = 0$<em>Reversible adiabatic = isentropic.</em></li>
</ol>`,
    example: R`$1\,\text{mol}$ monatomic gas ($C_V = \tfrac32R$), $300\,\text{K}$, volume doubled:<br>
isobaric: $T_2 = 600\,\text{K}$, $W = 2494\,\text{J}$, $\Delta U = 3741\,\text{J}$, $Q = 6236\,\text{J}$, $\Delta S = 14{,}4\,\text{J/K}$;<br>
isothermal: $W = Q = 1729\,\text{J}$, $\Delta S = 5{,}76\,\text{J/K}$;<br>
adiabatic: $T_2 = 189\,\text{K}$, $W = 1384\,\text{J}$, $Q = 0$, $\Delta S = 0$.`,
    counterexample: R`<b>Irreversible processes:</b> For the free expansion into a vacuum none of the rows for $W$ and $Q$ applies ($W = Q = 0$), but the general formula for $\Delta S$ still holds ($\Delta S = \nu R\ln2\gt0$ for a doubling), because $S$ is a state variable. The table for $W$ and $Q$ presupposes reversible processes.`,
    pitfalls: R`<ul><li>Writing $\Delta U = \nu C_p\Delta T$ for isobaric processes ($\Delta U$ is always $\nu C_V\Delta T$).</li>
<li>Assuming $Q = 0$ for "isothermal".</li>
<li>Mixing sign conventions (done by the gas vs. done on the gas).</li></ul>`
  },
  "ph10_entropie_erwaermen_mischen": {
    title: R`Entropy change on heating and mixing: ΔS = mc ln(T₂/T₁)`,
    category: R`10.7 The second law of thermodynamics`,
    type: "beispiel",
    front: R`Calculate the entropy change when (a) $1\,\text{kg}$ of water is heated from $20\,^\circ\text{C}$ to $80\,^\circ\text{C}$, and (b) $1\,\text{kg}$ of water at $80\,^\circ\text{C}$ is mixed with $1\,\text{kg}$ of water at $20\,^\circ\text{C}$ in an insulated vessel. Why is the result in (b) positive, although no heat is supplied from outside?`,
    back: R`When the temperature varies one must integrate $dS = \delta Q_\text{rev}/T$ (not $Q/T$):
$$\Delta S = \int_{T_1}^{T_2}\frac{mc\,dT}T = mc\ln\frac{T_2}{T_1}$$
<b>(a)</b> $\Delta S = 4182\cdot\ln\frac{353{,}15}{293{,}15}\,\frac{\text J}{\text K} = 779\,\frac{\text J}{\text K}$.<br><br>
<b>(b)</b> Mixing temperature $50\,^\circ\text{C}$ (equal masses, 10.3). Each portion individually:
$$\Delta S = mc\left[\ln\frac{323{,}15}{353{,}15}+\ln\frac{323{,}15}{293{,}15}\right] = 4182\,(-0{,}0888+0{,}0974)\,\frac{\text J}{\text K} = +36\,\frac{\text J}{\text K}$$
The hot water loses entropy, the cold water gains more, because the same heat at lower temperature makes a larger contribution $\delta Q/T$. The equalisation is irreversible: $\Delta S_\text{total}\gt0$.`,
    meta: R`Supplement (typical exam question); builds on sections 10.3 (heat capacity, mixing), 10.7.4 (Eqs. 10.78, 10.80)`,
    explanation: R`<b>Intuition:</b> A heat flow from hot to cold always produces entropy, because $\frac1{T_\text{kalt}}\gt\frac1{T_\text{heiss}}$. Mixing is nothing other than a heat flow between two portions until the temperatures equalise – hence irreversible, and it never runs backwards by itself (the water does not separate into hot and cold again).<br><br>
<b>Why $\ln$?</b> Each small heat packet $mc\,dT$ is divided by the instantaneous temperature. At high temperatures the same warming contributes less entropy: $\Delta S$ grows logarithmically.<br><br>
<b>Dependencies:</b> For small temperature changes $\ln\frac{T_2}{T_1}\approx\frac{\Delta T}{T}$, so $\Delta S\approx\frac{Q}{T}$ with the mean temperature – the simple formula is a limiting case.<br><br>
<b>Connection:</b> The same argument shows that heat conduction across a finite temperature difference reduces the efficiency of a machine below the Carnot value (10.7.5). For ideal gases: $\Delta S = \nu C_V\ln\frac{T_2}{T_1}+\nu R\ln\frac{V_2}{V_1}$ (process table).`,
    derivation: R`<ol class="fc-steps">
<li>$\delta Q^\swarrow = mc\,dT$<em>Warming by $dT$ (constant specific heat).</em></li>
<li>Reversible substitute path: contact with a sequence of reservoirs, each only $dT$ warmer<em>The real process may be irreversible; $S$ is a state variable.</em></li>
<li>$\Delta S = \displaystyle\int_{T_1}^{T_2}\frac{mc}T\,dT = mc\ln\frac{T_2}{T_1}$<em>Integration.</em></li>
<li>Mixing: $T_m = \dfrac{T_1+T_2}2$ (equal masses)<em>Energy conservation (10.21).</em></li>
<li>$\Delta S = mc\ln\dfrac{T_m^2}{T_1T_2}\ge0$<em>Because the arithmetic mean is $\ge$ the geometric mean: $T_m\ge\sqrt{T_1T_2}$.</em></li>
</ol>`,
    example: R`(a) $779\,\text{J/K}$; approximation $Q/T_\text{mean} = 250{,}9\,\text{kJ}/323\,\text{K} = 777\,\text{J/K}$ – good, because $\Delta T/T$ is small.<br>
<b>Ice melting in water:</b> melting at a constant $273\,\text{K}$: $\Delta S = mL/T = 1{,}22\,\text{kJ/K}$ per kg; the cooling of the water yields less negative entropy – overall positive.`,
    counterexample: R`<b>$\Delta S = Q/T$ with a single temperature:</b> For (a) one would get $Q/T_1 = 250{,}9\,\text{kJ}/293\,\text{K} = 856\,\text{J/K}$ and $Q/T_2 = 711\,\text{J/K}$ – both wrong. The formula $Q/T$ holds only at constant temperature (reservoir, phase transition).`,
    pitfalls: R`<ul><li>Inserting Celsius temperatures into the logarithm ($\ln(80/20)$ is meaningless).</li>
<li>Computing only the entropy of one portion when mixing.</li>
<li>Believing an isolated process without heat supply has $\Delta S = 0$.</li></ul>`
  },
  "ph10_kreisprozess_beispiel": {
    title: R`Working through a cycle: rectangle in the pV diagram (two isobars, two isochores)`,
    category: R`10.7 The second law of thermodynamics`,
    type: "beispiel",
    front: R`A monatomic ideal gas runs clockwise through the rectangle A $(p_1,V_1)$ → B $(p_1,V_2)$ → C $(p_2,V_2)$ → D $(p_2,V_1)$ → A with $p_1 = 2\,\text{bar}$, $p_2 = 1\,\text{bar}$, $V_1 = 10\,\text{L}$, $V_2 = 20\,\text{L}$. Calculate the net work, the supplied heat and the efficiency, and compare with a Carnot machine between the highest and the lowest temperature.`,
    back: R`<b>Net work</b> = enclosed area:
$$W_\text{net} = (p_1-p_2)(V_2-V_1) = 10^5\,\text{Pa}\cdot0{,}01\,\text{m}^3 = 1000\,\text{J}$$
<b>Heat</b> (with $\nu C_V\Delta T = \tfrac32\Delta(pV)$, $\nu C_p\Delta T = \tfrac52\Delta(pV)$):
<ul><li>A→B isobaric, expansion: $Q = \tfrac52p_1(V_2-V_1) = 5000\,\text{J}$ supplied</li>
<li>B→C isochoric, pressure falls: $Q = \tfrac32V_2(p_2-p_1) = -3000\,\text{J}$ given off</li>
<li>C→D isobaric, compression: $Q = \tfrac52p_2(V_1-V_2) = -2500\,\text{J}$ given off</li>
<li>D→A isochoric, pressure rises: $Q = \tfrac32V_1(p_1-p_2) = 1500\,\text{J}$ supplied</li></ul>
Check: $5000-3000-2500+1500 = 1000\,\text{J} = W_\text{net}$ ✓.
$$\eta = \frac{W_\text{net}}{Q_\text{in}} = \frac{1000}{6500} = 15{,}4\,\%$$
Temperatures $\propto pV$: highest in B ($pV = 40$), lowest in D ($pV = 10$, in $\text{bar}\cdot\text{L}$): $T_B/T_D = 4$, so $\eta_C = 1-\tfrac14 = 75\,\%$.`,
    meta: R`Supplement (typical exam question); builds on sections 10.6.2, 10.6.4, 10.7.2 (Eq. 10.66) and 10.7.5`,
    explanation: R`<b>Intuition:</b> For each step ask: does $T$ change (then $\Delta U$)? Does $V$ change (then $W$)? The rest is heat. Heat flows in where the temperature rises or where the gas expands at high pressure.<br><br>
<b>Why so much worse than Carnot?</b> Here heat is exchanged at many different temperatures, including low ones (D→A starts at $T_D$). Carnot exchanges heat only at the two extreme temperatures. Every heat intake below $T_\text{max}$ (and release above $T_\text{min}$) costs efficiency.<br><br>
<b>Dependencies:</b> The efficiency here depends only on the ratios $p_1/p_2$ and $V_2/V_1$, not on the amount of gas. With a diatomic gas ($\tfrac52$, $\tfrac72$ instead of $\tfrac32$, $\tfrac52$) it becomes even smaller, because more heat is needed for the same work.<br><br>
<b>Connection:</b> Process table (supplementary card), Stirling process (two isotherms, two isochores, 10.7.2), Carnot as the upper limit (10.7.5).`,
    derivation: R`Heat in step A→B, step by step:
<ol class="fc-steps">
<li>$\Delta U_{AB} = \tfrac32\nu R(T_B-T_A) = \tfrac32p_1(V_2-V_1) = 3000\,\text{J}$<em>$\nu RT = pV$; monatomic $C_V = \tfrac32R$.</em></li>
<li>$W^\nearrow_{AB} = p_1(V_2-V_1) = 2000\,\text{J}$<em>Isobaric: area under the curve.</em></li>
<li>$Q^\swarrow_{AB} = \Delta U+W^\nearrow = 5000\,\text{J}$<em>First law; $= \tfrac52p_1\Delta V$.</em></li>
<li>$Q_\text{in} = Q_{AB}+Q_{DA} = 6500\,\text{J}$<em>Only positive heats count for the efficiency.</em></li>
<li>$\Delta S$: $\nu C_p\ln2-\nu C_V\ln2-\nu C_p\ln2+\nu C_V\ln2 = 0$<em>Check: temperature ratios $T_B/T_A = 2$, $T_C/T_B = \tfrac12$, $T_D/T_C = \tfrac12$, $T_A/T_D = 2$; the entropy returns to its initial value.</em></li>
</ol>`,
    example: R`Temperatures for $\nu = 0{,}4\,\text{mol}$ (chosen): $T_A = \frac{2000}{0{,}4\cdot8{,}314} = 601\,\text{K}$, $T_B = 1203\,\text{K}$, $T_C = 601\,\text{K}$, $T_D = 301\,\text{K}$.<br>
Power at $20$ cycles per second: $20\,\text{kW}$; supplied heat power $130\,\text{kW}$.`,
    counterexample: R`<b>Efficiency with the net heat:</b> $\eta = W/(Q_\text{in}-Q_\text{out}) = 1000/1000 = 100\,\%$ is obviously nonsense: the denominator must contain only the <i>supplied</i> heat. And whoever calculates the cycle anticlockwise obtains a heat pump with negative net work of the gas.`,
    pitfalls: R`<ul><li>Putting the heat given off into the denominator of the efficiency.</li>
<li>Setting up work for isochoric steps.</li>
<li>Confusing the monatomic ($\tfrac32R$) and diatomic ($\tfrac52R$) heat capacities.</li></ul>`
  }
};
})();
