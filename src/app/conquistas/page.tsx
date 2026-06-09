import type { Metadata } from "next";
import { achievements } from "@/data/achievements";
import { AchievementList } from "@/components/achievements/AchievementList";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Conquistas",
  description:
    "Veja as conquistas e premiações da ERUS em competições de robótica nacionais e internacionais.",
};

export default function ConquistasPage() {
  const achievementsByYear = achievements.reduce<
    Record<number, (typeof achievements)[number][]>
  >((acc, achievement) => {
    if (!acc[achievement.year]) {
      acc[achievement.year] = [];
    }
    acc[achievement.year].push(achievement);
    return acc;
  }, {});

  const years = Object.keys(achievementsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <PageHeader
        title="Conquistas"
        description="Nosso histórico de premiações e conquistas em competições de robótica regionais, nacionais e internacionais."
      />

      <AchievementList achievementsByYear={achievementsByYear} years={years} />
    </main>
  );
}
