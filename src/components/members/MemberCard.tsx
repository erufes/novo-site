"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { MemberPhoto } from "@/components/members/MemberPhoto";
import { courseLabels, type Course } from "@/data/members";

type MemberCardProps = {
  name: string;
  course?: Course;
  yearJoined?: number;
  photo?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  isProfessor: boolean;
  index?: number;
};

export function MemberCard({
  name,
  course,
  yearJoined,
  photo,
  githubUsername,
  linkedinUsername,
  isProfessor,
  index = 0,
}: MemberCardProps) {
  // Subtítulo: papel do professor ou o curso do membro.
  const subtitle = isProfessor
    ? "Professor Responsável"
    : course
      ? courseLabels[course]
      : null;

  const hasLinks = Boolean(githubUsername) || Boolean(linkedinUsername);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="group relative flex h-full flex-col items-center border border-border bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-erus/40 hover:shadow-[0_14px_34px_-20px_rgba(6,15,29,0.5)]"
    >
      {/* Foto */}
      <div className="relative size-28 shrink-0 overflow-hidden rounded-sm border border-border bg-erus/[0.04]">
        <MemberPhoto
          name={name}
          photo={photo}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          fallbackClassName="flex size-full items-center justify-center"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-sm ring-1 ring-inset ring-erus/0 transition-colors duration-300 group-hover:ring-erus/25"
        />
      </div>

      {/* Conteúdo */}
      <p className="mt-4 font-medium leading-snug text-foreground">{name}</p>
      {subtitle && (
        <p className="mt-1 font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-muted-foreground">
          {subtitle}
        </p>
      )}

      {(hasLinks || yearJoined) && (
        <div className="mt-auto flex items-center justify-center gap-2 pt-4">
            {githubUsername && (
              <a
                href={`https://github.com/${githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub de ${name}`}
                title="GitHub"
                className="inline-flex size-8 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-erus/40 hover:bg-erus/[0.06] hover:text-erus"
              >
                <GithubIcon className="size-4" />
              </a>
            )}
            {linkedinUsername && (
              <a
                href={`https://www.linkedin.com/in/${linkedinUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn de ${name}`}
                title="LinkedIn"
                className="inline-flex size-8 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-[#0a66c2]/50 hover:bg-[#0a66c2]/[0.08] hover:text-[#0a66c2]"
              >
                <LinkedinIcon className="size-4" />
              </a>
            )}
            {yearJoined && (
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                Desde {yearJoined}
              </span>
            )}
          </div>
        )}
    </motion.div>
  );
}
