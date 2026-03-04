# Ayomide Olowooje — Frontend Developer Portfolio

A modern, accessible, and performant portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Dark/Light mode** — System-aware with manual toggle
- **Responsive** — Mobile-first design, works on all screen sizes
- **Accessible** — ARIA labels, keyboard navigation, skip-to-content link
- **Animated** — Smooth transitions powered by Framer Motion
- **Project filtering** — Search and filter projects by tag
- **Project modals** — Detailed project view with screenshots
- **Contact form** — Client-side validated contact form
- **SEO optimized** — Meta tags, Open Graph, Twitter Card, structured data (JSON-LD)

## 🚀 Tech Stack

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v3](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite](https://vitejs.dev/)

## 🛠️ Getting Started

### Prerequisites

- Node.js >= 20

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## 📁 Project Structure

```
src/
  components/       # React components
    Header.tsx
    Hero.tsx
    About.tsx
    Projects.tsx
    ProjectCard.tsx
    ProjectModal.tsx
    Contact.tsx
    Footer.tsx
    MobileNav.tsx
  data/
    projects.ts     # Project data and skills
  types/
    index.ts        # TypeScript interfaces
  App.tsx           # Root component
  main.jsx          # Entry point
  index.css         # Tailwind imports
```

## 🌐 Deployment

This project is deployed on [Vercel](https://vercel.com/). The `vercel.json` handles SPA routing.

## 📄 License

MIT
