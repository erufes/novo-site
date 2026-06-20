"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Corners } from "@/components/ui/corners";
import { getProjectIcon } from "@/lib/project-icons";
import { ProjectImage } from "@/components/projects/ProjectImage";
import type { ProjectType } from "@/data/projects";

const typeLabels: Record<ProjectType, string> = {
  competitivo: "Competitivo",
  pesquisa: "Pesquisa",
  educacional: "Educacional",
  evento: "Evento",
};

interface ProjectCardProps {
  name: string;
  slug: string;
  description: string;
  tags: string[];
  type: ProjectType;
  photo?: string;
  index?: number;
}

export function ProjectCard({
  name,
  slug,
  description,
  tags,
  type,
  photo,
  index = 0,
}: ProjectCardProps) {
  const Icon = getProjectIcon(slug);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      layout
    >
      <Link
        href={`/projetos/${slug}`}
        className="group relative flex h-full flex-col border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-erus/40 hover:shadow-[0_12px_40px_-12px_rgba(22,69,122,0.25)]"
      >
        <Corners className="border-erus opacity-0 group-hover:opacity-100" />

        <ProjectImage
          slug={slug}
          photo={photo}
          alt={`Foto do projeto ${name}`}
          className="-mx-6 -mt-6 mb-5 h-40 w-[calc(100%+3rem)] border-b border-border"
        />

        <div className="flex items-start justify-between">
          <div className="flex size-11 items-center justify-center border border-erus/15 bg-erus/[0.06] transition-colors duration-300 group-hover:border-erus/30 group-hover:bg-erus/10">
            <Icon className="size-5 text-erus" strokeWidth={1.5} />
          </div>
          <span className="border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            {typeLabels[type]}
          </span>
        </div>

        <h3 className="font-display mt-5 text-lg font-semibold text-erus-deep">
          {name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-foreground/40">
          {tags.slice(0, 3).join(" · ")}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-3.5">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-erus">
            Ver projeto
          </span>
          <ArrowUpRight className="size-4 text-erus transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </Link>
    </motion.div>
  );
}
