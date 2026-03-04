import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Conference Ticket Generator",
    desc: "React app that generates downloadable conference tickets. Uses localStorage and canvas export.",
    overview:
      "A small React app that lets users enter attendee details, preview a ticket rendered to a canvas, save tickets to localStorage, and export tickets as image files for download. Useful for event organizers who want quick printable/exportable tickets without a backend.",
    tags: ["React", "Canvas", "Tailwind"],
    link: "https://github.com/3ayomidepeter/Conference-Ticket",
    demo: "https://conference-ticket-two.vercel.app/",
    screenshot: "Conference-ticket.png",
  },
  {
    id: 2,
    title: "Boardify Task Manager",
    desc: "A kanban-style task manager to organize work and projects.",
    overview:
      "Boardify is a responsive kanban board built with React that supports drag-and-drop, filtering, and saving board state to localStorage.",
    tags: ["React", "Drag & Drop", "LocalStorage"],
    link: "https://github.com/3ayomidepeter/Boardify-Task-Manager",
    demo: "https://boardify-task-manager.vercel.app/",
    screenshot: "boardify.png",
  },
  {
    id: 3,
    title: "Foodplug App",
    desc: "Interactive front-end food ordering/restaurant demo.",
    overview:
      "Foodplug is a small frontend demo showcasing menus, cart interaction, and simple UI flows for ordering food.",
    tags: ["HTML", "JavaScript"],
    link: "https://github.com/3ayomidepeter/foodplug",
    demo: "https://resonant-foodplug.netlify.app/",
    screenshot: "foodplug.png",
  },
  {
    id: 4,
    title: "Travel Journal App",
    desc: "A travel journal app for logging trips and memories.",
    overview:
      "Travel Journal lets users record trips, add photos, and write notes. Demonstrates persistent storage and a simple UI for browsing entries.",
    tags: ["React", "LocalStorage", "CSS"],
    link: "https://github.com/3ayomidepeter/exploration",
    demo: "https://exquisite-home.netlify.app/",
    screenshot: "Travel Journal.png",
  },
];

export const skills: string[] = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "HTML & CSS",
  "JavaScript",
  "Git",
  "GitHub",
];

export const allTags: string[] = Array.from(
  new Set(projects.flatMap((p) => p.tags))
).sort();
