import React from "react";
import { motion } from "framer-motion";
import type { Project } from "../types";
import { DEFAULT_SCREENSHOT } from "../types";

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
      transition={{ duration: 0.2 }}
      className="group relative flex flex-col p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-md hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-200"
      aria-label={`Project: ${project.title}`}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-300" />

      <div className="relative">
        <div className="overflow-hidden rounded-lg">
          <img
            src={`/${project.screenshot || DEFAULT_SCREENSHOT}`}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="w-full h-44 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <h3 className="mt-4 font-semibold text-gray-900 dark:text-gray-100 text-lg">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {project.desc}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button
            onClick={() => onViewDetails(project)}
            className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors underline-offset-2 hover:underline"
            aria-label={`View details for ${project.title}`}
          >
            View details
          </button>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors underline-offset-2 hover:underline"
            aria-label={`View ${project.title} on GitHub (opens in new tab)`}
          >
            GitHub ↗
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="ml-auto inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-500/25"
              aria-label={`View live demo for ${project.title} (opens in new tab)`}
            >
              Live demo ↗
            </a>
          ) : (
            <span className="ml-auto text-sm text-gray-400 italic">
              Demo coming soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
