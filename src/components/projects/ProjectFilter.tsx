"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project, ProjectType } from "@/data/projects";

const filterOptions: { label: string; value: ProjectType | "todos" }[] = [
  { label: "Todos", value: "todos" },
  { label: "Competitivo", value: "competitivo" },
  { label: "Pesquisa", value: "pesquisa" },
  { label: "Educacional", value: "educacional" },
  { label: "Evento", value: "evento" },
];

interface ProjectFilterProps {
  projects: Project[];
}

export function ProjectFilter({ projects }: ProjectFilterProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectType | "todos">(
    "todos"
  );

  const filtered =
    activeFilter === "todos"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => setActiveFilter(option.value)}
            className={`border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] transition-all duration-300 ${
              activeFilter === option.value
                ? "border-erus bg-erus text-white"
                : "border-border text-muted-foreground hover:border-erus/40 hover:text-erus"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.slug}
              name={project.name}
              slug={project.slug}
              description={project.description}
              tags={project.tags}
              type={project.type}
              photo={project.photo}
              index={i}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-muted-foreground">
          Nenhum projeto encontrado nesta categoria.
        </p>
      )}
    </div>
  );
}
