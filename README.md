# ⚡ AARUVI BUILDS

### 🟣 Expanding Circle Menu — Series 04

**A menu that starts small and expands into an entire navigation world.**
**One interaction. One transformation. A completely different navigation experience.**

<p align="center">
  <a href="https://aaruvibuilds.github.io/aaruvi-builds-menu-series-04/">
    <img src="https://img.shields.io/badge/🚀%20LIVE%20DEMO-7B5CFF?style=for-the-badge&logoColor=white" alt="Live Demo">
  </a>
  <a href="https://github.com/aaruvibuilds/aaruvi-builds-menu-series-04">
    <img src="https://img.shields.io/badge/💻%20SOURCE%20CODE-17151B?style=for-the-badge&logo=github&logoColor=white" alt="Source Code">
  </a>
</p>

---

## 🟣 The Build

A compact circular menu button transforms into a large immersive navigation surface.

Instead of opening a conventional dropdown or side panel, the entire interaction grows outward from the exact center of the button.

The result is a navigation experience built around **scale, space, timing, and transformation.**

---

## 🎬 The Experience

### Closed State

A minimal circular surface sits at the center of the screen.

Inside it:

* `MENU` label
* Minimal two-line menu icon
* Subtle atmospheric glow
* Dark cinematic background

### Open State

The circle dramatically expands into a large circular navigation surface.

The interface transforms from:

**Compact → Expansive**

**Simple → Immersive**

**Button → Navigation Space**

The menu icon simultaneously morphs into a close symbol while the navigation items appear around the expanded surface.

---

## ✨ Interaction System

### 01 — Circle Expansion

The circular surface expands directly from the menu button.

The transformation uses a long easing curve to create a smooth cinematic reveal rather than a simple scale animation.

### 02 — Center-Preserved Control

The menu control remains at the center of the interaction.

This creates a strong visual anchor while the navigation expands around it.

### 03 — Staggered Navigation

Navigation items do not appear simultaneously.

They reveal sequentially:

```text
HOME
   ↓
WORK
   ↓
ABOUT
   ↓
CONTACT
```

This creates rhythm and hierarchy within the opening animation.

### 04 — Menu Icon Morph

The two-line menu icon transforms into an `X`.

At the same time, the `MENU` label fades away.

The control therefore communicates:

```text
MENU → CLOSE
```

without introducing another button.

---

## 🧠 State System

The interaction uses a simple state-driven system:

```text
CLOSED
   ↓
OPEN
   ↓
ACTIVE NAVIGATION
   ↓
CLOSED
```

The JavaScript maintains the menu state and synchronizes:

* Visual expansion
* Navigation visibility
* Active navigation item
* ARIA state
* Menu accessibility label

---

## 🎨 Motion Details

### Circle

The primary transformation uses:

* 900ms duration
* Custom cubic-bezier easing
* Circular expansion
* Shadow expansion
* Atmospheric purple glow

### Navigation

Each navigation item uses:

* Fade-in
* Vertical movement
* Individual delay
* Hover underline
* Subtle directional nudge

### Hover

Navigation hover introduces a small movement:

```text
translateY(-2px)
translateX(3px)
```

This keeps the interaction expressive without making the navigation feel noisy.

---

## 🌌 Visual Direction

The build follows a minimal cinematic visual language.

### Background

Deep near-black:

```text
#09080B
```

### Navigation Surface

Warm cream:

```text
#F2EEE7
```

### Typography

**Manrope**

Used for the primary interface typography.

### Technical / Label Typography

**DM Mono**

Used for:

* Menu label
* Navigation numbers
* Brand mark
* Small interface details

The combination creates a contrast between modern editorial typography and technical interface details.

---

## 📐 Navigation Layout

The expanded navigation uses four primary destinations:

```text
01  HOME              02  WORK


03  ABOUT             04  CONTACT
```

The layout uses opposing corners of the circular surface to create balance and maintain the center as the interaction focus.

---

## 📱 Responsive

The circular experience adapts across screen sizes.

### Desktop

* Large circular navigation surface
* Spacious four-corner navigation
* Larger typography
* Centered interaction

### Tablet

* Increased circular scale
* Reduced navigation offsets
* Responsive typography

### Mobile

* Larger-than-viewport circular expansion
* Tighter navigation positioning
* Smaller typography
* Optimized spacing for touch interaction

---

## ♿ Accessibility

The menu uses semantic HTML and accessible interaction states.

Included:

* Semantic `<nav>`
* Accessible button element
* `aria-expanded`
* Dynamic `aria-label`
* Keyboard Escape support
* Visible interactive navigation
* Pointer interaction support

---

## ♿ Reduced Motion

The experience respects:

```css
@media (prefers-reduced-motion: reduce)
```

Animations and transitions are reduced for users who request reduced motion.

The interaction remains functional without depending on animation.

---

## 📂 Project Structure

```text
aaruvi-builds-menu-series-04/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🛠️ Built With

* HTML5
* CSS3
* JavaScript
* CSS Transitions
* CSS Keyframes
* Web Animations API
* Responsive Design
* Accessibility APIs

No frameworks.

No animation libraries.

Just carefully designed frontend interaction.

---

## 🚀 Run Locally

Clone the repository:

```bash
git clone https://github.com/aaruvibuilds/aaruvi-builds-menu-series-04.git
```

Open the project:

```text
index.html
```

Or launch it through a local development server.

---

## 🌐 Live Demo

**Coming soon**

The live demo will be available through GitHub Pages.

---

## 💻 Source Code

**Coming soon**

The complete source code will be available in this repository.

---

## 🎯 The Idea

A navigation menu does not have to behave like a navigation menu.

It can become the visual centerpiece of the interface.

This build explores how a simple circular control can transform into an entire navigation environment through:

**Scale.**

**Motion.**

**Timing.**

**Spatial composition.**

**Interaction.**

The goal was not to add more elements.

The goal was to make **one interaction feel memorable.**

---

# ⚡ AARUVI BUILDS

**Frontend • UI • Motion**

Instagram: **@aaruvi_builds**
YouTube: **@AaruviBuilds**
GitHub: **@aaruvibuilds**

### BUILD. EXPERIMENT. CREATE.

*Series 04 / Expanding Circle Menu*
