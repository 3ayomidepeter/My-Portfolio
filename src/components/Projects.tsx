import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { projects as allProjects, allTags } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import type { Project } from "../types";

export default function Projects() {
  const [activeTag, setActiveTag] = useState<string>("All");
  const [search, setSearch] = useState<string>("");
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    return allProjects.filter((p) => {
      const matchesTag = activeTag === "All" || p.tags.includes(activeTag);
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesTag && matchesSearch;
    });
  }, [activeTag, search]);

  return (
    <section id="projects" className="mt-20 scroll-mt-20">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-bold"
      >
        Projects
      </motion.h2>

      <div className="mt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        {/* Search */}
        <div className="relative flex-1 max-w-xs">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true">
            🔍
          </span>
          <input
            type="search"
            placeholder="Search projects…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search projects"
            className="w-full pl-9 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Tag filters */}
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by tag">
          <button
            onClick={() => setActiveTag("All")}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              activeTag === "All"
                ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/25"
                : "border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400"
            }`}
            aria-pressed={activeTag === "All"}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                activeTag === tag
                  ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/25"
                  : "border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              }`}
              aria-pressed={activeTag === tag}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-12 text-center text-gray-500 dark:text-gray-400"
        >
          No projects match your search.{" "}
          <button
            onClick={() => { setActiveTag("All"); setSearch(""); }}
            className="text-indigo-600 dark:text-indigo-400 underline"
          >
            Clear filters
          </button>
        </motion.p>
      ) : (
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} onViewDetails={setModalProject} />
          ))}
        </div>
      )}

      <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
    </section>
  );
}
