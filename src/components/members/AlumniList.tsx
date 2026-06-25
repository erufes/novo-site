"use client";

import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { MemberPhoto } from "@/components/members/MemberPhoto";
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
            <ul className="divide-y divide-border">
              {grouped[year].map((member) => {
                return (
                  <li
                    key={member.name}
                    className="flex items-center gap-3 px-1 py-2.5"
                  >
                    {/* Foto */}
                    <div className="relative size-11 shrink-0 overflow-hidden border border-border bg-erus/[0.04]">
                      <MemberPhoto
                        name={member.name}
                        photo={member.photo}
                        className="size-full object-cover"
                        fallbackClassName="flex size-full items-center justify-center"
                      />
                    </div>

                    {/* Nome + curso */}
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-foreground">
                        {member.name}
                      </p>
                      {member.course && (
                        <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                          {courseLabels[member.course as Course]}
                        </p>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex shrink-0 items-center gap-1.5">
                      {member.githubUsername && (
                        <a
                          href={`https://github.com/${member.githubUsername}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub de ${member.name}`}
                          title="GitHub"
                          className="inline-flex size-8 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-erus/40 hover:bg-erus/[0.06] hover:text-erus"
                        >
                          <GithubIcon className="size-4" />
                        </a>
                      )}
                      {member.linkedinUsername && (
                        <a
                          href={`https://www.linkedin.com/in/${member.linkedinUsername}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`LinkedIn de ${member.name}`}
                          title="LinkedIn"
                          className="inline-flex size-8 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-[#0a66c2]/50 hover:bg-[#0a66c2]/[0.08] hover:text-[#0a66c2]"
                        >
                          <LinkedinIcon className="size-4" />
                        </a>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
