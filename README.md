# Portfolio Landing Page 16 – React, Vite, TailwindCSS Frontend Project

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.1-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC)](https://tailwindcss.com/)

A **single-page portfolio** built with React, Vite, and Tailwind CSS. It showcases a full landing experience: hero with typing roles, about, skills carousel, scroll-driven project cards, experience timeline, testimonials, and a contact form powered by EmailJS. The project is intended for **learning and reuse**—clone it, customize content and styling, and deploy your own portfolio or use individual components in other apps.

**Live Demo:** [https://portfolio-ui-13.vercel.app/](https://portfolio-ui-13.vercel.app/)

---

## Table of Contents

- [Features & Functionality](#features--functionality)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables (.env)](#environment-variables-env)
- [Scripts](#scripts)
- [Components & Sections Walkthrough](#components--sections-walkthrough)
- [Reusing Components in Other Projects](#reusing-components-in-other-projects)
- [API & Backend](#api--backend)
- [Routes & Navigation](#routes--navigation)
- [Keywords](#keywords)
- [Conclusion](#conclusion)
- [License](#license)

---

## Features & Functionality

- **Intro animation:** GSAP-powered greeting sequence (multiple languages) with morphing SVG overlay, then slide-up exit.
- **Hero (Home):** Full-screen section with avatar, typing effect for roles, gradient background, CTA buttons, and social links with Framer Motion hover/tap effects.
- **Navbar:** Fixed top bar with logo, hamburger menu (opens overlay), and “Reach Out” CTA. Hides on scroll down, shows on scroll up; always visible when the hero is in view.
- **Overlay menu:** Full-screen menu with circle clip-path animation (Framer Motion). Links scroll to sections via hash (`#about`, `#skills`, etc.).
- **About:** Profile card with avatar, name, role, bio, quick stats, and “My Resume” / social links. Neon-style gradient blurs in the background.
- **Skills:** Horizontal infinite carousel of skill icons (React, Java, Tailwind, etc.). Scroll/touch and `useMotionValue` drive the animation; carousel activates when the section is in view.
- **Projects:** Scroll-linked project cards. `useScroll` + `useTransform` tie card opacity/position to scroll progress. Desktop vs mobile images via `useIsMobile` and a responsive project list.
- **Experience:** Vertical timeline with role, company, duration, description. Scroll-based animation for markers and card opacity/position (desktop: alternating left/right; mobile: single column).
- **Testimonials:** Grid of testimonial cards (avatar, name, role, quote) with Framer Motion `whileInView` animations.
- **Contact:** Form (name, email, service, budget, idea) with validation and optional **EmailJS** integration. If env vars are missing, shows “Contact form is disabled in demo mode.”
- **Footer:** Brand name, gradient underline, social links (same glow variants as Home), tagline, and copyright.
- **Custom cursor:** Optional gradient blur circle that follows the mouse (desktop).
- **Music player:** Fixed bottom-right play/pause button; double-tap or double-click shuffles to a random track. Uses public folder MP3s (optional).

---

## Technology Stack

| Category       | Technology                                                     |
| -------------- | -------------------------------------------------------------- |
| **Framework**  | React 19.x                                                     |
| **Build tool** | Vite 7.x                                                       |
| **Styling**    | Tailwind CSS 4.x (`@tailwindcss/vite`)                         |
| **Animation**  | Framer Motion 12.x, GSAP 3.x (MorphSVG for intro)              |
| **Icons**      | react-icons (Fa, Fi, Si, Di)                                   |
| **Contact**    | EmailJS (browser SDK `@emailjs/browser`) – no backend required |
| **Linting**    | ESLint 9.x with React Hooks and React Refresh                  |

There is **no custom backend**. The app is static frontend plus EmailJS for sending emails from the client.

---

## Project Structure

```bash
portfolio-ui-13/
├── index.html              # Entry HTML, SEO meta, favicon, fonts
├── vite.config.js          # Vite + React + Tailwind plugins
├── package.json
├── .env.template           # Template for EmailJS env vars (see below)
├── public/
│   └── vite.svg            # Favicon and OG image
└── src/
    ├── main.jsx            # React root, mounts <App />
    ├── App.jsx             # Layout: intro, navbar, sections, cursor, music
    ├── index.css           # Tailwind import, gradient keyframes, utilities
    ├── assets/             # Images (avatars, projects, testimonials, etc.)
    ├── components/         # Reusable UI
    │   ├── CustomCursor.jsx
    │   ├── IntroAnimation.jsx
    │   ├── MusicPlayer.jsx
    │   ├── Navbar.jsx
    │   ├── OverlayMenu.jsx
    │   └── ParticlesBackground.jsx
    └── sections/           # Page sections (one per “block”)
        ├── Home.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Experience.jsx
        ├── Testimonials.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **npm** (or yarn/pnpm)

### Install and run

```bash
# Clone the repository
git clone https://github.com/arnobt78/portfolio-ui-13.git
cd portfolio-ui-13

# Install dependencies
npm install

# Start development server (http://localhost:5173 by default)
npm run dev
```

### Build and preview production

```bash
npm run build
npm run preview
```

The built output is in `dist/`. Deploy `dist/` to any static host (e.g. Vercel, Netlify).

---

## Environment Variables (.env)

The only external integration that uses env vars is **EmailJS** (contact form). Without these, the site still runs; the form shows a “demo mode” message on submit.

### Step 1: Create a `.env` file

Copy the template and rename to `.env` in the project root:

```bash
cp .env.template .env
```

### Step 2: Get EmailJS credentials

1. Sign up at [https://www.emailjs.com/](https://www.emailjs.com/).
2. Create an **Email Service** (e.g. Gmail) and note the **Service ID**.
3. Create an **Email Template** with placeholders (e.g. `{{from_name}}`, `{{reply_to}}`, `{{message}}`) and note the **Template ID**.
4. In **Account → API Keys**, copy your **Public Key**.

### Step 3: Fill `.env`

Edit `.env` (do not commit it; it should be in `.gitignore`):

```env
VITE_SERVICE_ID=your_service_id
VITE_TEMPLATE_ID=your_template_id
VITE_PUBLIC_KEY=your_public_key
```

Vite only exposes variables prefixed with `VITE_` to the client. Restart the dev server after changing `.env`.

### Optional: Deploy (e.g. Vercel)

Add the same three variables in your host’s “Environment Variables” for the production build. No env vars are required for a demo deploy; the contact form will simply indicate demo mode.

---

## Scripts

| Command           | Description                |
| ----------------- | -------------------------- |
| `npm run dev`     | Start Vite dev server      |
| `npm run build`   | Production build → `dist/` |
| `npm run preview` | Serve `dist/` locally      |
| `npm run lint`    | Run ESLint on the project  |

---

## Components & Sections Walkthrough

### App.jsx

- Renders: `CustomCursor`, `Navbar`, `MusicPlayer`, optional `IntroAnimation`, then sections in order.
- State: `introDone` – when `true`, intro is unmounted and main content is fully visible.
- Sections are not routed; they are stacked and navigated via anchor links.

### IntroAnimation (components)

- **Role:** First-screen greeting then exit.
- **Tech:** GSAP + MorphSVG; list of greeting strings; after the last one, timeline slides the overlay up and calls `onFinish()`.
- **Reuse:** Import, wrap in a container, pass `onFinish` to hide it and show the rest of the app.

### Navbar (components)

- **Role:** Fixed bar with logo, menu button (opens `OverlayMenu`), and “Reach Out” → `#contact`.
- **Behavior:** `IntersectionObserver` on `#home`: when hero is in view, navbar is forced visible. Otherwise, hide on scroll down, show on scroll up (and hide again after 3s idle).
- **Reuse:** Replace logo/links; keep or drop scroll-hide logic.

### OverlayMenu (components)

- **Role:** Full-screen menu with circle clip-path open/close.
- **Tech:** Framer Motion `AnimatePresence` + `clipPath: circle(...)`; links are `#home`, `#about`, `#skills`, etc.
- **Reuse:** Change the list of items and `href`s to match your section IDs.

### ParticlesBackground (components)

- **Role:** Canvas-based floating particles (used in Contact; can be used elsewhere).
- **Reuse:** Import and render inside any section; ensure the parent has dimensions (e.g. full width/height).

### CustomCursor (components)

- **Role:** Gradient blur circle following the mouse.
- **Reuse:** Add once at app root; optional to disable on small screens or when `prefers-reduced-motion`.

### MusicPlayer (components)

- **Role:** Play/pause and shuffle through a playlist of MP3s from `public/`.
- **Reuse:** Point `playlist` to your own files in `public/` or replace with another audio source.

### Home (sections)

- **Role:** Hero with avatar, typing roles, CTAs, socials.
- **Tech:** `useState`/`useEffect` for typing; Framer Motion for social hover; optional `ParticleBackground`-style effects.
- **Reuse:** Replace `roles`, avatar, links, and copy.

### About, Skills, Projects, Experience, Testimonials (sections)

- **About:** Framer Motion `whileInView`; replace avatar, bio, stats, resume link.
- **Skills:** Data array of `{ icon, name }`; horizontal scroll/touch with `useMotionValue`; reuse by changing the array and icons.
- **Projects:** `useScroll` + `useTransform` on a section ref; list of `{ title, link, bgColor, image }`; optional mobile/desktop images via a small `useIsMobile` hook.
- **Experience:** Timeline data array; scroll-based transforms for markers and card position; reuse by changing the data and layout (e.g. single column).
- **Testimonials:** Data array of `{ name, role, review, image }`; reuse by replacing the array and assets.

### Contact (sections)

- **Role:** Form (name, email, service, budget, idea) with client-side validation.
- **Integration:** If `VITE_SERVICE_ID`, `VITE_TEMPLATE_ID`, and `VITE_PUBLIC_KEY` are set, submits via EmailJS; otherwise sets status to “demo”.
- **Reuse:** Keep the same env vars or point to another service (e.g. your own API) by replacing the `handleSubmit` logic.

### Footer (sections)

- **Role:** Name, gradient line, social links (same pattern as Home), quote, copyright.
- **Reuse:** Replace name, links, quote, and year logic if needed.

---

## Reusing Components in Other Projects

1. **Copy the component file** (and any assets it imports) into your project.
2. **Install the same dependencies** (e.g. `framer-motion`, `gsap`, `react-icons`) if you use that component.
3. **Adjust imports** (paths to assets or shared components).
4. **Replace content** (copy, links, images) with your own.

Example: use only the Contact form and EmailJS in a Next.js app:

```jsx
// In your Next.js page or component
import ContactForm from "@/components/ContactForm"; // adapted from Contact.jsx form part

export default function ContactPage() {
  return (
    <section>
      <h1>Get in touch</h1>
      <ContactForm />
    </section>
  );
}
```

Ensure your Next.js env has `NEXT_PUBLIC_*` equivalents for EmailJS (or use the same names and expose them via `next.config.js` if needed).

---

## API & Backend

- **No custom backend.** The app is a static SPA.
- **EmailJS:** All contact submissions go from the browser to EmailJS; no server-side API in this repo. Configure the template and service in the EmailJS dashboard.
- **Assets:** Images and audio are bundled by Vite (from `src/assets`) or served from `public/`.

---

## Routes & Navigation

- **No React Router.** The app is a single page; each “page” is a section with an `id` (`#home`, `#about`, `#skills`, `#projects`, `#experience`, `#testimonials`, `#contact`).
- **Navigation:** Navbar “Reach Out” → `#contact`. Overlay menu links → `#about`, `#skills`, etc. Scrolling is native; no route state.
- **Deep link:** Share `https://yoursite.com/#contact` to open the site and scroll to Contact.

---

## Keywords

Portfolio, landing page, React, Vite, Tailwind CSS, Framer Motion, GSAP, EmailJS, single-page application, frontend, responsive, animations, contact form, timeline, testimonials, open source, learning, demo.

---

## Conclusion

This project is a **full-featured portfolio template** with intro animation, hero, about, skills carousel, scroll-driven projects and experience, testimonials, and EmailJS contact form. Use it as a starter for your own portfolio, or copy individual components (navbar, overlay menu, contact form, timeline, etc.) into other React or Next.js apps. Customize content, env vars, and styling to match your brand.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

---

## Happy Coding! 🎉

This is an **open-source project** — feel free to use, enhance, and extend it further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊
