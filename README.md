# Professional Portfolio Website - Phase 1

This repository represents the initial foundation (Phase 1) of a clean, responsive, and modern portfolio website. It establishes a production-ready, modular project structure following industry best practices for vanilla web projects without using external frameworks, bundlers, or CSS processors.

---

## Project Overview

- **Stack:** HTML5, CSS3, Vanilla JavaScript (ES6+ Modules)
- **Architecture:** Mobile-first, component-based, modular structure
- **Dependencies:** None (No build tools, external CSS libraries, or JS frameworks)
- **Features:** semantic page foundations, global design token definitions, empty JS modules, and prepared responsive breakpoints.

---

## Folder Structure

The project directory is structured as follows:

```text
portfolio/
├── index.html            # Main home page
├── about.html            # About page
├── projects.html         # Projects page
├── contact.html          # Contact page
│
├── css/
│   ├── variables.css     # CSS Custom Properties / Design Tokens
│   ├── utilities.css     # Generic helper and utility classes
│   ├── animations.css    # Keyframe animations (not applied yet)
│   ├── responsive.css    # Media query breakpoint definitions
│   └── style.css         # Global stylesheet & CSS resets (imports sub-sheets)
│
├── js/
│   ├── main.js           # App bootstrapper (DOM ready, imports submodules)
│   ├── navigation.js     # Hamburger menu, smooth scroll module
│   ├── animations.js     # Scroll animation triggers
│   ├── projects.js       # Dynamic portfolio filter logic
│   └── contact.js        # Contact form validation and submission handling
│
└── assets/
    ├── images/           # Showcase graphics, photographs
    ├── icons/            # SVG vector icons
    ├── logos/            # Brand marks, favicon files
    ├── fonts/            # Custom self-hosted fonts
    └── pdf/              # CVs, resumes, downloads
```

---

## Coding Conventions

### 1. HTML5
- Use strictly semantic HTML elements (e.g., `<header>`, `<main>`, `<footer>`, `<article>`, `<section>`).
- Maintain consistent 4-space indentation.
- Document sections using comments (`<!-- Section Comment -->`).
- Do not write inline styles or inline JavaScript scripts.

### 2. CSS3
- Write CSS rules starting with a mobile-first mobile view, layering overrides inside min-width media queries in `responsive.css`.
- Rely heavily on CSS variables declared in `variables.css` for styling values to ensure styling uniformity.
- Do not mix component/element styling with generic utility classes.

### 3. JavaScript (ES6)
- Keep all files modular and scope variables with `'use strict';`.
- Standardize exports using ES Modules (`export`/`import` syntax).
- Document each module with a JSDoc block.
- Keep business logic isolated within their designated files.

---

## Color System Placeholder

*The color palette is specified as CSS variables inside [variables.css](css/variables.css).*

| Token | CSS Variable | Default Hex / Description |
| :--- | :--- | :--- |
| **Primary** | `--color-primary` | `#2563eb` (Interactive accents) |
| **Primary Hover** | `--color-primary-hover` | `#1d4ed8` (Button/Link hover states) |
| **Secondary** | `--color-secondary` | `#0f766e` (Subtle branding elements) |
| **Background** | `--color-background` | `#ffffff` (Global document canvas) |
| **Surface** | `--color-surface` | `#f8fafc` (Card background & secondary panels) |
| **Text** | `--color-text` | `#0f172a` (Primary body color) |
| **Text Muted** | `--color-text-muted` | `#475569` (Sub-text, captions, and secondary label styling) |
| **Border** | `--color-border` | `#e2e8f0` (Separator lines, inputs) |

---

## Typography Placeholder

*Typography definitions are maintained in [variables.css](css/variables.css) and global presets in [style.css](css/style.css).*

- **Primary Font Family:** `Inter`, system-ui, -apple-system, sans-serif
- **Monospace Font Family:** `Fira Code`, Consolas, monospace
- **Scale:**
  - `xs` (12px) - Minor labels
  - `sm` (14px) - Captions / secondary copy
  - `base` (16px) - General paragraph text
  - `md` (18px) - Large paragraphs / callouts
  - `lg` (20px) - Subheadings
  - `xl` (24px) - Small titles / Card headings
  - `2xl` (30px) - Page titles / Section headings
  - `3xl` (36px) - Showcase titles
  - `4xl` (48px) - Hero display headers

---

## Future Phases

- **Phase 2 - UI & Component Implementation:** Build semantic markup inside pages, create layout structures, design navigational headers, card grids, dynamic hero spaces, and write static footer layouts.
- **Phase 3 - Navigation & Dynamic Components:** Hook up navigation hamburger toggle, implement scroll-to-section mechanics, build dynamic projects display using JS templates, and plug in contact form submission rules.
- **Phase 4 - Animations & Fine-Tuning:** Bind scroll triggers for fade-in/slide-in behaviors using Intersection Observer API, add CSS interactive keyframe states, optimize image sizes, test responsiveness, and deploy.

---

## How to Run Locally

Since this codebase contains native ES6 Javascript modules (`type="module"`), loading the files directly via the browser's `file://` protocol will cause CORS policy restrictions. You need to serve the site using a local HTTP development server.

### Option 1: VS Code Live Server
1. Install the **Live Server** extension in VS Code.
2. Click the **Go Live** button in the status bar at the bottom right.

### Option 2: Node.js (npx)
If you have Node.js installed, run:
```bash
npx serve portfolio
```
Or:
```bash
npx http-server portfolio
```

### Option 3: Python
If you have Python installed:
```bash
# Python 3
python -m http.server --directory portfolio 8000
```
Then open `http://localhost:8000` in your web browser.
