import React from "react";

interface HeaderProps {
  dark: boolean;
  onToggleDark: () => void;
  onOpenMobile: () => void;
  mobileOpen: boolean;
}

export default function Header({ dark, onToggleDark, onOpenMobile, mobileOpen }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur-md bg-white/70 dark:bg-gray-950/70 border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <a
          href="#home"
          className="font-bold text-lg bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          Ayomide Olowooje
        </a>

        {/* Skip to main content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-md"
        >
          Skip to main content
        </a>

        <nav className="space-x-6 hidden md:flex items-center" aria-label="Main navigation">
          {[
            { label: "About", href: "#about" },
            { label: "Projects", href: "#projects" },
            { label: "Contact", href: "#contact" },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {label}
            </a>
          ))}
          <button
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={onToggleDark}
            className="ml-2 px-4 py-1.5 rounded-full border border-gray-300 dark:border-gray-600 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onToggleDark}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {dark ? "☀️" : "🌙"}
          </button>
          <button
            type="button"
            onClick={onOpenMobile}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
