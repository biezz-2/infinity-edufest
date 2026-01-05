# 🌌 INFINITY - Edufest 2025

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss)
![GSAP](https://img.shields.io/badge/GSAP-3.14.2-88CE02?style=for-the-badge&logo=greensock)

**The 8th Annual Fithrah Insani Education Festival 2025**

*"Amazing Intelligence, Delightful Entertain and Humanity"*

🔗 **[Kunjungi Website](https://infinity.biezz.my.id)**

</div>

---

## 🎯 Table of Contents

| Section | Description |
|---------|-------------|
| [✨ Key Features](#-key-features) | Teknologi dan fitur utama yang digunakan |
| [🛠 Tech Stack](#-tech-stack) | Detail framework dan library |
| [📁 Project Structure](#-project-structure) | Arsitektur folder proyek |
| [🚀 Getting Started](#-getting-started) | Panduan instalasi dan pengembangan |
| [🎨 Design System](#-design-system) | Palet warna dan tipografi |
| [📄 Pages Overview](#-pages-overview) | Penjelasan setiap halaman |
| [📊 Stats](#-stats) | Metrik proyek |

---

## ✨ Key Features

### 🔳 Intro Orchestrator (3 Stages)

Sistem intro tiga tahap yang menciptakan pengalaman pengguna yang memukau:

| Stage | Fungsi |
|-------|--------|
| `LoaderStage` | Loading screen dengan progress indicator |
| `WireframeStage` | Preview struktur halaman |
| `RevealStage` | Animasi reveal logo dengan efek dramatis |

### 🖱️ Cursor Particles

Sistem partikel kursor berbasis Canvas dengan algoritma **Poisson Disk Sampling**:

- ✦ 6 warna yang harmonis
- ✦ Physics-based movement
- ✦ Efek gravitasi dan interaksi
- ✦ Performant dengan requestAnimationFrame

### 🎵 Audio Manager

Sistem manajemen audio dengan:

- 🔊 Ambient background music
- ⏩ Fade-in/out transitions
- 🔇 Mute/unmute control
- 🎶 Seamless looping

### 🫧 Liquid Glass Navigation

Navigasi dengan efek glassmorphism modern:

- 🌫️ Backdrop blur 24px
- 💧 Mouse tracking liquid reflection
- ✨ Transparent overlay dengan noise texture
- 🎯 Smooth hover transitions

### 📜 Smooth Scrolling

Implementasi Lenis scroll dengan konfigurasi premium:

```typescript
duration: 1.2s,
easing: 'exponential',
smooth: true,
gestureDirection: 'vertical'
```

### 🌐 Globe Visualization

Visualisasi interaktif menggunakan **D3.js**:

- 🌍 Auto-rotation globe
- 👆 Interactive hover effects
- 🎨 TopoJSON data rendering
- ✨ Smooth animations

### 📅 Timeline Page

Halaman timeline perjalanan event dari 2017-2026:

- 📆 Chronological event display
- 🎭 Beautiful illustrations
- 📱 Responsive design
- 🔗 Historical links

### 👥 Committee Page

Struktur organisasi dengan 70+ anggota di 11 divisi:

| Division | Description |
|----------|-------------|
| Kepala Sekolah | Leadership |
| Koordinator | Management |
| Sie. Acara | Events |
| Sie. Dana | Finance |
| Sie. Publikasi | Public Relations |
| Sie. Dokumentasi | Documentation |
| Sie. Desain | Design |
| Sie. PDD | Infrastructure |
| Sie. Keamanan | Security |
| Sie. Kreatif | Creative |
| Sie. HC | Human Capital |

---

## 🛠 Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| **Framework** | [Next.js](https://nextjs.org/) | 16 (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | 5.x |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | v4 |
| **Animations** | [GSAP](https://greensock.com/gsap/) | 3.14.2 |
| | [Framer Motion](https://www.framer.com/motion/) | 12.23.26 |
| | [Lenis](https://lenis.studio/) | 1.3.16 |
| **Data Viz** | [D3.js](https://d3js.org/) | 7.9.0 |
| | [TopoJSON Client](https://github.com/topojson/topojson-client) | 3.1.0 |
| **Icons** | [Lucide React](https://lucide.dev/) | 0.562.0 |
| **Fonts** | Inter, Audiowide, Poppins | - |

---

## 📁 Project Structure

```
igloo-style-website/
├── app/                    # Main application routes and layouts
│   ├── page.tsx           # Home page with 5 scenes
│   ├── timeline/          # Timeline history page
│   ├── panitia/           # Committee structure page
│   └── location/          # Location with globe visualization
├── components/            # Reusable UI components
│   ├── scenes/            # Landing page scene components
│   ├── intro/             # Intro sequence components
│   ├── ui/                # Generic UI elements
│   ├── timeline/          # Timeline components
│   └── globe/             # Globe visualization
├── lib/                   # Utility functions and configurations
├── public/                # Static assets
│   ├── images/            # Image files
│   └── sounds/            # Audio files
└── styles/                # CSS Module styles
```

### 📂 Detailed Component Structure

```
components/
├── scenes/
│   ├── HeroScene.tsx
│   ├── AboutScene.tsx
│   ├── FeaturesScene.tsx
│   ├── GalleryScene.tsx
│   └── ContactScene.tsx
├── intro/
│   ├── LoaderStage.tsx
│   ├── WireframeStage.tsx
│   └── RevealStage.tsx
├── ui/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Modal.tsx
│   └── LiquidGlassNav.tsx
├── timeline/
│   ├── TimelineItem.tsx
│   └── TimelineHeader.tsx
└── globe/
    ├── Globe.tsx
    └── GlobeControls.tsx
```

---

## 🚀 Getting Started

### Prerequisites

| Requirement | Minimum Version |
|-------------|-----------------|
| Node.js | 18.0.0+ |
| npm | 9.0.0+ |
| git | 2.0.0+ |

### Installation

```bash
# Clone repository
git clone https://github.com/your-repo/igloo-style-website.git

# Navigate to project directory
cd igloo-style-website

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# Visit http://localhost:3000
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🎨 Design System

### Color Palette

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Primary | `#0a0a0a` | Background |
| Secondary | `#1a1a2e` | Surface |
| Accent | `#6366f1` | Primary action |
| Highlight | `#a855f7` | Secondary action |
| Success | `#22c55e` | Success states |
| Warning | `#f59e0b` | Warning states |
| Error | `#ef4444` | Error states |

### Typography

| Font | Weight | Usage |
|------|--------|-------|
| **Inter** | 400, 500, 600, 700 | Body text, UI elements |
| **Audiowide** | 400 | Display headings, logos |
| **Poppins** | 400, 500, 600 | Section headings, titles |

### Glassmorphism Effects

```css
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
```

---

## 📄 Pages Overview

### 🏠 Home Page (`/`)

Halaman utama dengan 5 scene interaktif:

| Scene | Content |
|-------|---------|
| **Hero** | Logo, tagline, event info |
| **About** | Event description, theme explanation |
| **Features** | Key highlights, sponsors |
| **Gallery** | Ticker gallery, media showcase |
| **Contact** | Location, contact info |

### 📅 Timeline Page (`/timeline`)

Halaman perjalanan event dengan navigasi tahun:

- ✦ 2017: First Edition
- ✦ 2018: Growth
- ✦ 2019: Expansion
- ✦ 2020-2021: Virtual Edition
- ✦ 2022: Return
- ✦ 2023: Innovation
- ✦ 2024: Excellence
- ✦ 2025: **Current - INFINITY**

### 👥 Committee Page (`/panitia`)

Halaman struktur organisasi dengan:

- 🌳 Tree view visualization
- 📋 Division cards
- 👤 Member profiles
- 🔍 Search functionality

### 🌍 Location Page (`/location`)

Halaman lokasi dengan globe interaktif:

- 🌍 3D globe visualization
- 📍 Location markers
- 🎯 Zoom controls
- 🌐 Auto-rotation

---

## 📊 Stats

<div align="center">

| Metric | Value |
|--------|-------|
| 🗓️ Years of History | **8** |
| 👥 Committee Members | **70+** |
| 🎬 Scenes | **5** |
| 📂 Divisions | **11** |
| 📄 Pages | **4** |

---

## 🤝 Contributing

Kami terbuka untuk kontribusi! Silakan:

1. Fork repository ini
2. Buat feature branch (`git checkout -b feature/amazing-feature`)
3. Commit perubahan (`git commit -m 'Add amazing feature'`)
4. Push ke branch (`git push origin feature/amazing-feature`)
5. Buat Pull Request

---

## 📝 License

MIT License - lihat file [LICENSE](LICENSE) untuk detail.

---

<div align="center">

**Made with ❤️ by Fithrah Insani IT Team**

*"Amazing Intelligence, Delightful Entertain and Humanity"*

</div>
