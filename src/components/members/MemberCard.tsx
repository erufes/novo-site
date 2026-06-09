"use client";

import { motion } from "framer-motion";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import { courseLabels, type Course } from "@/data/members";

type MemberCardProps = {
  name: string;
  course: Course;
  yearJoined: number;
  githubUsername: string;
  isProfessor: boolean;
  index?: number;
};

export function MemberCard({
  name,
  course,
  yearJoined,
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="group relative h-full border border-border bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-erus/40"
    >
      <div className="flex items-center gap-3.5">
        <Avatar size="lg" className="rounded-sm border border-border">
          <AvatarImage
            src={`https://github.com/${githubUsername}.png`}
            alt={name}
          />
          <AvatarFallback className="rounded-sm bg-erus/[0.06] font-mono text-erus">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <p className="truncate font-medium text-foreground">{name}</p>
          <p className="mt-0.5 truncate font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
            {courseLabels[course]}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-1.5 border-t border-border pt-3.5">
        <span className="border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
          Desde {yearJoined}
        </span>
        {isProfessor && (
          <span className="border border-erus/40 bg-erus/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-erus">
            Professor
          </span>
        )}
      </div>
    </motion.div>
  );
}
