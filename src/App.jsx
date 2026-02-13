// App.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function App() {
  // project data (defined before state hooks)
  const projects = [
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

  const skills = [
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "HTML & CSS",
    "JavaScript",
    "TypeScript",
    "Git",
    "GitHub",
  ];

  const [dark, setDark] = useState(true);
  const [modalProject, setModalProject] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectsState, setProjectsState] = useState(projects);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  useEffect(() => {
    // Auto-detect GitHub Pages demo for projects without demo
    projectsState.forEach(async (p, idx) => {
      if (!p.demo && p.link && p.link.includes("github.com")) {
        const repoPath = p.link
          .replace("https://github.com/", "")
          .replace(/\.git$/, "");
        const pagesUrl = `https://${repoPath.split("/")[0]}.github.io/${
          repoPath.split("/")[1]
        }`;
        try {
          const res = await fetch(pagesUrl, { method: "HEAD" });
          if (res.ok) {
            setProjectsState((prev) => {
              const copy = [...prev];
              copy[idx] = { ...copy[idx], demo: pagesUrl };
              return copy;
            });
          }
        } catch (e) {
          // ignore
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 flex flex-col items-center justify-center">
      <header className="sticky top-0 z-30 backdrop-blur bg-white/60 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-800 w-full">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold text-lg">
            Ayomide Olowooje
          </a>
          <nav className="space-x-4 hidden md:flex items-center">
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
            <button
              aria-label="toggle theme"
              onClick={() => setDark(!dark)}
              className="ml-4 px-3 py-1 rounded-full border"
            >
              {dark ? "Light" : "Dark"}
            </button>
          </nav>
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              aria-label="toggle theme"
              className="px-3 py-1 rounded border"
            >
              {dark ? "☀️" : "🌙"}
            </button>
            <button
              type="button"
              onClick={() => {
                console.log("hamburger clicked", !mobileOpen);
                setMobileOpen((s) => !s);
              }}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className="px-3 py-1 rounded border"
            >
              ☰
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-5xl w-full mx-auto px-6 py-12 flex-1">
        <section id="home" className="pt-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold leading-tight"
              >
                Hi, I'm Ayomide — Frontend Developer
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-lg"
              >
                I build high-quality, accessible, and responsive web
                experiences. I enjoy turning ideas into delightful,
                user-friendly products using modern frontend technologies.
              </motion.p>

              <div className="mt-6 flex gap-3">
                <a
                  href="#projects"
                  className="inline-block px-5 py-2 rounded-lg border font-medium"
                >
                  See my work
                </a>
                <a
                  href="#contact"
                  className="inline-block px-5 py-2 rounded-lg bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900"
                >
                  Contact me
                </a>
              </div>
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800"
            >
              <p className="text-sm opacity-80">Quick facts</p>
              <ul className="mt-4 space-y-2">
                <li>📍 Proudly building from Nigeria</li>
                <li>⚛️ React Dev focused on clean, responsive UI</li>
                <li>
                  🎨 Turning pixels into smooth interactions since day one
                </li>
                <li>🔧 Constantly debugging life one console.log at a time</li>
              </ul>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mt-20">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-semibold"
          >
            About Me
          </motion.h2>
          <div className="mt-4 md:flex gap-8 items-start">
            <div className="md:w-2/3 max-w-xl">
              <p className="mb-4">
                Hi, I’m Ayomide Olowooje, a Frontend Developer specializing in
                React, passionate about crafting pixel-perfect, responsive, and
                accessible web experiences. I prioritize clarity in design,
                performance in code, and usability for every user — whether
                they’re on a wide monitor or a budget smartphone. My goal is to
                turn ideas into intuitive, effortless interfaces.
              </p>
              <h3 className="mt-6 font-medium">Skills</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-full border text-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0">
              <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow">
                <p className="text-sm opacity-80">Availability</p>
                <p className="mt-2 font-medium">
                  Open to freelance & collaboration
                </p>
                <p className="mt-4 text-sm">
                  <a
                    href="/Olowooje Ayomide-Frontend Developer.pdf"
                    download
                    className="underline mr-2"
                  >
                    Download Resume
                  </a>
                  •
                  <a
                    href="https://www.linkedin.com/in/olowooje/"
                    className="underline ml-2"
                  >
                    Github
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-20">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-semibold"
          >
            Projects
          </motion.h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {projectsState.map((p) => (
              <motion.article
                key={p.id}
                whileHover={{ y: -6 }}
                className="p-6 rounded-xl border border-gray-200 dark:border-gray-800"
              >
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm opacity-90">{p.desc}</p>

                {/* overview moved to modal - shown only when 'View details' is clicked */}

                {/* thumbnail */}
                <img
                  src={`/${
                    p.screenshot ||
                    (p.id === 1
                      ? "Conference-ticket.png"
                      : "color-game-screenshot.png")
                  }`}
                  alt={`${p.title} screenshot`}
                  className="w-full h-40 object-cover rounded-md mt-4"
                />

                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setModalProject(p)}
                    className="text-sm underline"
                  >
                    View details
                  </button>

                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm underline"
                  >
                    View on GitHub
                  </a>

                  {p.demo ? (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm underline"
                    >
                      View live demo
                    </a>
                  ) : (
                    <span className="text-sm opacity-60">
                      Live demo coming soon
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-20 pb-12">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-semibold"
          >
            Contact
          </motion.h2>
          <div className="mt-6 grid md:grid-cols-2 gap-8">
            <div>
              <p>
                If you'd like to work together or have a question, send a
                message below or email me at{" "}
                <a
                  href="mailto:peterolowooje360@gmail.com"
                  className="underline"
                >
                  peterolowooje360@gmail.com
                </a>
                .
              </p>
              <div className="mt-6">
                <p className="text-sm opacity-80">Social</p>
                <div className="mt-2 flex gap-3">
                  <a
                    href="https://github.com/3ayomidepeter"
                    className="underline"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/olowooje/"
                    className="underline"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <form
              className="p-4 rounded-lg border border-gray-200 dark:border-gray-800"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Thanks — this is a demo form. Replace with a server endpoint or Netlify Forms.",
                );
              }}
            >
              <label className="block">
                <span className="text-sm">Name</span>
                <input
                  required
                  className="mt-1 block w-full rounded-md border px-3 py-2 bg-white dark:bg-gray-900"
                />
              </label>
              <label className="block mt-3">
                <span className="text-sm">Email</span>
                <input
                  type="email"
                  required
                  className="mt-1 block w-full rounded-md border px-3 py-2 bg-white dark:bg-gray-900"
                />
              </label>
              <label className="block mt-3">
                <span className="text-sm">Message</span>
                <textarea
                  required
                  className="mt-1 block w-full rounded-md border px-3 py-2 bg-white dark:bg-gray-900"
                ></textarea>
              </label>
              <button
                type="submit"
                className="mt-4 px-4 py-2 rounded-lg bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900"
              >
                Send message
              </button>
            </form>
          </div>
        </section>

        <footer className="mt-20 border-t pt-8 text-center text-sm opacity-80">
          © {new Date().getFullYear()} Ayomide Olowooje • Built with React +
          Tailwind + Framer Motion
        </footer>

        {/* Modal */}
        {modalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white dark:bg-gray-900 rounded-lg max-w-2xl w-full mx-4 p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold">{modalProject.title}</h3>
                <button
                  onClick={() => setModalProject(null)}
                  className="text-sm"
                >
                  Close
                </button>
              </div>
              <img
                src={`/${modalProject.screenshot || "Conference Ticket.png"}`}
                alt={`${modalProject.title} screenshot`}
                className="w-full h-56 object-cover rounded-md mt-4"
              />
              <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
                {modalProject.overview || modalProject.desc}
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href={modalProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  View on GitHub
                </a>
                {modalProject.demo ? (
                  <a
                    href={modalProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    View live demo
                  </a>
                ) : (
                  <span className="opacity-60">Live demo coming soon</span>
                )}
              </div>
            </div>
          </div>
        )}
        {/* Mobile slide-over nav */}
        {mobileOpen && (
          <div className="fixed inset-0 z-40">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-72 bg-white dark:bg-gray-900 p-6"
            >
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="absolute top-3 right-3 px-2 py-1 rounded border"
              >
                ✕
              </button>
              <nav className="flex flex-col gap-4 mt-8">
                <a
                  href="#about"
                  onClick={() => setMobileOpen(false)}
                  className="underline"
                >
                  About
                </a>
                <a
                  href="#projects"
                  onClick={() => setMobileOpen(false)}
                  className="underline"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="underline"
                >
                  Contact
                </a>
              </nav>
            </motion.aside>
          </div>
        )}
      </main>
    </div>
  );
}
