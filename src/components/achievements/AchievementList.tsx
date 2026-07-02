"use client";

import { AchievementCard } from "@/components/achievements/AchievementCard";
import type { Achievement } from "@/data/achievements";

interface AchievementListProps {
  achievementsByYear: Record<number, Achievement[]>;
  years: number[];
}

export function AchievementList({
  achievementsByYear,
  years,
}: AchievementListProps) {
  let globalIndex = 0;

  return (
    <div className="space-y-12">
      {years.map((year) => (
        <section key={year}>
          <h2 className="mb-6 text-2xl font-bold">{year}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {achievementsByYear[year].map((achievement) => {
              const idx = globalIndex++;
              return (
                <AchievementCard
                  key={`${achievement.competition}-${achievement.category}-${achievement.year}-${achievement.position}`}
                  title={achievement.title}
                  description={achievement.description}
                  competition={achievement.competition}
                  position={achievement.position}
                  year={achievement.year}
                  category={achievement.category}
                  index={idx}
                />
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
