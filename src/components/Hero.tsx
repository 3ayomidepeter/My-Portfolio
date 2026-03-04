import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="pt-8 pb-4">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 mb-4">
              Available for work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Ayomide
            </span>{" "}
            — Frontend Developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            I build high-quality, accessible, and responsive web experiences. I
            enjoy turning ideas into delightful, user-friendly products using
            modern frontend technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 font-semibold hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 transition-all duration-200"
            >
              See my work →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-200"
            >
              Contact me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/50 shadow-xl shadow-gray-200/50 dark:shadow-none backdrop-blur-sm"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5" />
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Quick facts
          </p>
          <ul className="mt-4 space-y-3">
            {[
              "📍 Proudly building from Nigeria",
              "⚛️ React Dev focused on clean, responsive UI",
              "🎨 Turning pixels into smooth interactions since day one",
              "🔧 Constantly debugging life one console.log at a time",
            ].map((fact) => (
              <li
                key={fact}
                className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
              >
                {fact}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
