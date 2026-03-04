import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/projects";

export default function About() {
  return (
    <section id="about" className="mt-20 scroll-mt-20">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-bold"
      >
        About Me
      </motion.h2>
      <div className="mt-6 md:flex gap-10 items-start">
        <div className="md:w-2/3 max-w-xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            Hi, I'm Ayomide Olowooje, a Frontend Developer specializing in
            React, passionate about crafting pixel-perfect, responsive, and
            accessible web experiences. I prioritize clarity in design,
            performance in code, and usability for every user — whether
            they're on a wide monitor or a budget smartphone. My goal is to
            turn ideas into intuitive, effortless interfaces.
          </motion.p>
          <h3 className="mt-8 font-semibold text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Skills & Technologies
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((s) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 text-sm font-medium transition-colors"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:w-1/3 mt-8 md:mt-0"
        >
          <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/50 shadow-lg">
            <div className="w-3 h-3 rounded-full bg-green-500 mb-3" aria-hidden="true" />
            <p className="text-sm text-gray-500 dark:text-gray-400">Availability</p>
            <p className="mt-1 font-semibold text-gray-900 dark:text-gray-100">
              Open to freelance & collaboration
            </p>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-sm space-y-2">
              <a
                href="/Olowooje%20Ayomide-Frontend%20Developer.pdf"
                download
                className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                aria-label="Download resume as PDF"
              >
                📄 Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/olowooje/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                aria-label="Visit LinkedIn profile (opens in new tab)"
              >
                🔗 LinkedIn Profile
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
