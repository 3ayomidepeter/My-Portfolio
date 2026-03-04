import React, { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "../types";
import { DEFAULT_SCREENSHOT } from "../types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!project) return;
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, handleKey]);

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full mx-auto shadow-2xl overflow-hidden"
          >
            <div className="relative">
              <img
                src={`/${project.screenshot || DEFAULT_SCREENSHOT}`}
                alt={`${project.title} screenshot`}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="absolute top-3 right-3 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors backdrop-blur-sm"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <h3 id="modal-title" className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.overview || project.desc}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-gray-300 dark:border-gray-600 text-sm font-semibold hover:border-indigo-500 hover:text-indigo-600 dark:hover:border-indigo-400 dark:hover:text-indigo-400 transition-colors"
                  aria-label={`View ${project.title} on GitHub (opens in new tab)`}
                >
                  View on GitHub ↗
                </a>
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-200"
                    aria-label={`View live demo for ${project.title} (opens in new tab)`}
                  >
                    View live demo ↗
                  </a>
                ) : (
                  <span className="px-5 py-2 rounded-full text-sm text-gray-400 border border-dashed border-gray-300 dark:border-gray-700">
                    Live demo coming soon
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
