---
title: "Fizyka"
html:
    embed_svg: false
---

<script src="geocities.js"></script>

# Mechanika

$S = vt \Leftrightarrow \vec{V} = \frac{d\vec{r}}{dt}$

$\int_{t_0}^{t_1} v(t)\ dt$ _(droga to pole pod wykresem prędkości od czasu)_

# Dynamika

$T=\mu \cdot N=\mu \cdot R$

$F_b = m \cdot a$ *(tylko w układzie nieinercjalnym)*

<details>
<summary>taki śmieszny algorytm</summary>

```mermaid
flowchart TD

A(Przyspiesza?)
A -->|tak| B(bryła?)

B --> |tak| C(tylko bryła?)
C --> |tak| D(może się toczyć?)
D --> |tak| E(a=F/m oraz ε=M/I)
C --> |nie| F(ε=E/M)
B --> |nie| G(jedna nie-bryła?)
G --> |tak| H(może się toczyć?)
H --> |tak| I(a=F/m, ε=M/I \n a=F/m)
H --> |nie| J(ε=M/I \n a=F/m)
G --> |nie| K(może się toczyć?)
K --> |tak| L("a=F/m, ε=M/I \n a=F/m · ilość ciał")
K --> |nie| M("ε=M/I \n a=F/m · ilość ciał")
B --> |nie| N(jedno ciało?)
N --> |tak| O(a=F/m)
N --> |nie| P("a=F/m · ilość ciał")

A --> |nie| a(bryła?)
a --> |tak| b(tylko bryła?)
b --> |tak| c(może się toczyć?)
c --> |tak| d(Fw=0 Mw=0)
c --> |nie| e(Mw=0)
b --> |nie| f(jedna nie-bryła?)
f --> |tak| g(może się toczyć?)
g --> |tak| h(Fw=0, Mw=0 \n Fw=0)
g --> |nie| i(Mw=0 \n Fw=0)
f --> |nie| j(może się toczyć?)
j --> |tak| k("Fw=0, Mw=0 \n Fw=0 · ilość ciał")
j --> |nie| l("Mw =0 \n Fw=0 · ilość ciał")
a --> |nie| m(jedno ciało?)
m --> |tak| n(Fw=0)
m --> |nie| o("Fw=0 · ilość ciał")
```

</details>

# Ruch obrotowy
$\omega = \frac{d\alpha}{dt}$

$\omega = \frac{2\pi}{T}$

$V=\omega \cdot R$

$f = \frac{1}{T} = \frac{n}{t}$

Przyczyną przyśpieszenia dośrodkowego jest zmiana kierunku wektora $\vec{V}$

$a_d = \frac{V^2}{R}$

# Praca, Moc, Energia
$E_{kin} = \frac{mV^2}{2}$

$E_{pot} = mgh$

$E_{pot} = - \frac{GMm}{R}$

$E_{pot} = \pm \frac{kQq}{R}$, gdzie $k=\frac{1}{4 \pi \varepsilon_0 \varepsilon_r}$
$\varepsilon_r \approx 1$ dla powietrza

$E_{pot} = \frac{k}{x^2}{2}$

$W=Fr\cdot\cos{\angle(\vec{F}; \vec{r})} \Leftrightarrow W=\vec{F} \circ \vec{r}$

## Zasada zachowania energii

$F_{napedu} + F_{oporu} = 0 \Rightarrow można\ zastosować\ ZZE$

# Bryła sztywna
$M = \vec{r} \times \vec{F} = F \cdot r \cdot \sin{\angle(\vec{r}; \vec{F})}$

$I_A=I_o + m \cdot d^2$, gdzie $I_o$ jest środkiem ciężkości
<img src="assets/fiz/moment_obrotowy.svg" width="200px">

# Siła Lorenza

$F_l = q\vec{V} \cdot \vec{B} = qVB\sin{\angle(\vec{V}; \vec{B})}$

# Orbita
<img src="assets/fiz/orbita.svg" width="250px">

$r$ - promień wodzący
$B$ - perycentrum
$A$ - abcentrum

# Prąd przemienny
- Zwykły układ: $U_{sk}=\frac{U_m}{\sqrt{2}}$
- Zwykły układ: $U = U_m \cdot \sin{\omega t}$
- Podłączony do diody: $U = \frac{U_m}{2}$
- Podłączony do mostka Gretza: $U=U_m$

# Potencjał

$V_a = \frac{E_{pot}}{q} = \pm \frac{kQ}{R}$

Suma ładunków przed połączeniem $=$ Sumie ładunków po połączeniu

$I = \frac{\Delta q}{\Delta t}$

# Opór

$R=\frac{\rho \cdot l}{S}$

$\Delta R = \Delta T \cdot R$

# Praca i moc prądu
$W = UIt = \frac{U^2}{R} t = I^2 R t$

$F_L = qVB\sin{\angle (\vec{V}; \vec{B})} \Leftrightarrow F_L=q(\vec{V} \circ \vec{B})$
$F_L = IBL\sin{\angle (\vec{B}; \vec{L})} \Leftrightarrow F_{ED}=I(\vec{B} \circ \vec{l})$

# Strumień pola

$\Phi = B S \cos{\angle (\vec{B}; \vec{S})} \Leftrightarrow \Phi = \vec{B} \times \vec{S}$

Wektor powierzchni $\vec{S}$ jest prostopadły do płaszczyzny $S$

$[\Phi] = 1\ T \cdot m^2 = 1\ Wb$

# Zjawisko indukcji elektromagnetycznej

$\varepsilon_{ind} = \frac{\Delta \Phi}{\Delta t}$

$\varepsilon = BlV$

## Reguła Lenza

Kierunek prądu indukcyjnego przeciwdziała zmianom, które go wywołały

# Transformator

$k = \frac{U_1}{U_2} = \frac{n_1}{n_2}$

gdzie $k$ przekładnia transformatora