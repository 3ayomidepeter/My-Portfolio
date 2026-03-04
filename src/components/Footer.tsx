import React from "react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 dark:border-gray-800 pt-8 pb-4 text-center">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="font-medium text-gray-700 dark:text-gray-300">
          Ayomide Olowooje
        </span>{" "}
        • Built with{" "}
        <span className="text-indigo-600 dark:text-indigo-400">React</span> +{" "}
        <span className="text-indigo-600 dark:text-indigo-400">Tailwind</span> +{" "}
        <span className="text-indigo-600 dark:text-indigo-400">Framer Motion</span>
      </p>
      <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
        Designed & developed with ❤️
      </p>
    </footer>
  );
}
