"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import { courseLabels, type Course } from "@/data/members";

type MemberCardProps = {
  name: string;
  course?: Course;
  yearJoined?: number;
  photo?: string;
  githubUsername?: string;
  isProfessor: boolean;
  index?: number;
};

export function MemberCard({
  name,
  course,
  yearJoined,
  photo,
  githubUsername,
  isProfessor,
  index = 0,
}: MemberCardProps) {
  const initials = name
    .split(" ")
    .filter((_, i, arr) => i === 0 || i === arr.length - 1)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  // Subtítulo: papel do professor ou o curso do membro.
  const subtitle = isProfessor
    ? "Professor Responsável"
    : course
      ? courseLabels[course]
      : null;

  // Foto local, com fallback opcional para o avatar do GitHub.
  const avatarSrc =
    photo ??
    (githubUsername ? `https://github.com/${githubUsername}.png` : undefined);

  const hasFooter = Boolean(yearJoined) || Boolean(githubUsername);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="group relative h-full border border-border bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-erus/40"
    >
      {githubUsername && (
        <a
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-3 top-3 inline-flex size-7 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-erus/40 hover:text-erus"
        >
          <ExternalLink className="size-3.5" />
          <span className="sr-only">GitHub de {name}</span>
        </a>
      )}

      <div className="flex items-center gap-3.5">
        <Avatar size="lg" className="rounded-sm border border-border">
          <AvatarImage src={avatarSrc} alt={name} />
          <AvatarFallback className="rounded-sm bg-erus/[0.06] font-mono text-erus">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1 pr-6">
          <p className="truncate font-medium text-foreground">{name}</p>
          {subtitle && (
            <p className="mt-0.5 truncate font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {hasFooter && (
        <div className="mt-4 flex flex-wrap items-center gap-1.5 border-t border-border pt-3.5">
          {yearJoined && (
            <span className="border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
              Desde {yearJoined}
            </span>
          )}
        </div>
      )}
    </motion.div>
  );
}
