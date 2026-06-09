"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { Corners } from "@/components/ui/corners";

interface AchievementCardProps {
  title: string;
  description: string;
  competition: string;
  position: string;
  year: number;
  category: string;
  index?: number;
}

export function AchievementCard({
  title,
  description,
  competition,
  position,
  year,
  category,
  index = 0,
}: AchievementCardProps) {
  const isFirstPlace = position.startsWith("1");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="group relative flex h-full flex-col border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-erus/40 hover:shadow-[0_12px_40px_-12px_rgba(22,69,122,0.25)]"
    >
      <Corners className="border-erus opacity-0 group-hover:opacity-100" />

      <div className="flex items-start justify-between">
        <div
          className={`flex size-11 items-center justify-center border transition-colors duration-300 ${
            isFirstPlace
              ? "border-erus/30 bg-erus/10"
              : "border-erus/15 bg-erus/[0.06]"
          }`}
        >
          <Trophy
            className={`size-5 ${isFirstPlace ? "text-erus" : "text-erus/60"}`}
            strokeWidth={1.5}
          />
        </div>
        <span className="font-mono text-sm tabular-nums text-foreground/35">
          {year}
        </span>
      </div>

      <h3 className="font-display mt-5 text-lg font-semibold leading-snug text-erus-deep">
        {title}
      </h3>
      <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        {competition}
      </p>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      <div className="mt-5 flex items-center gap-2 border-t border-border pt-4">
        <span
          className={`border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] ${
            isFirstPlace
              ? "border-erus/40 bg-erus/5 text-erus"
              : "border-border text-muted-foreground"
          }`}
        >
          {position}
        </span>
        <span className="border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
          {category}
        </span>
      </div>
    </motion.div>
  );
}
