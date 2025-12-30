# Edufest - Igloo Style Website

A modern, immersive, and interactive website built for Edufest, featuring a unique "Igloo" aesthetic, smooth animations, and rich user interactions.

## 🚀 Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:**
  - [GSAP](https://greensock.com/gsap/) (GreenSock Animation Platform)
  - [Framer Motion](https://www.framer.com/motion/)
  - [Lenis](https://github.com/studio-freight/lenis) (Smooth Scrolling)
- **Icons:** [Lucide React](https://lucide.dev/)

## ✨ Key Features

- **Immersive Intro:** A complex orchestration of animations intro sequence.
- **Custom Cursor:** Interactive cursor with magnetic particles and physics-based effects.
- **Smooth Scrolling:** Integrated Lenis for buttery smooth scroll experiences.
- **Audio Manager:** Background ambient audio with fade-in/out capabilities and persistence.
- **Scene-based Architecture:** Modular "Scenes" (`SceneIntro`, `SceneOne`, `SceneAbout`, etc.) for organized layout management.
- **Interactive Components:**
    - Magnetic Buttons
    - Ticker Gallery
    - 3D-style interactions

## 🛠️ Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `/app`: Main application routes and layouts (Next.js App Router).
- `/components`: Reusable UI components and Scene definitions.
    - `/scenes`: Different sections of the landing page.
    - `/intro`: Intro sequence components.
    - `/ui`: Generic UI elements (Buttons, Cards, etc.).
- `/lib`: Utility functions and GSAP configuration.
- `/public`: Static assets (images, fonts, audio).

## 🎨 Design System

The project uses a custom design system defined in `tailwind.config.ts` and `globals.css`, focusing on a dark/light mode adaptable palette (currently optimized for the specific theme).

---

Build by Biezz-2
