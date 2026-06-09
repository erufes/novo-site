"use client";

import { ExternalLink } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { courseLabels, type Course, type Member } from "@/data/members";

type AlumniListProps = {
  members: Member[];
};

export function AlumniList({ members }: AlumniListProps) {
  // Group by yearLeft descending
  const grouped = members.reduce<Record<number, Member[]>>((acc, member) => {
    const year = member.yearLeft!;
    if (!acc[year]) acc[year] = [];
    acc[year].push(member);
    return acc;
  }, {});

  const sortedYears = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <Accordion>
      {sortedYears.map((year) => (
        <AccordionItem key={year} value={String(year)}>
          <AccordionTrigger className="px-2">
            <span className="flex items-center gap-2">
              <span className="font-semibold">{year}</span>
              <span className="text-muted-foreground text-xs">
                ({grouped[year].length}{" "}
                {grouped[year].length === 1 ? "membro" : "membros"})
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-2">
            <ul className="space-y-2">
              {grouped[year].map((member) => (
                <li
                  key={member.githubUsername}
                  className="flex items-center justify-between gap-2 rounded-md px-3 py-2 transition-colors hover:bg-muted/50"
                >
                  <span className="flex items-center gap-3 text-sm">
                    <span>{member.name}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                      {courseLabels[member.course as Course]}
                    </span>
                  </span>
                  <a
                    href={`https://github.com/${member.githubUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ExternalLink className="size-3.5" />
                    <span className="sr-only">GitHub de {member.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
