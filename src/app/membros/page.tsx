import type { Metadata } from "next";
import { activeMembers, alumniMembers } from "@/data/members";
import { MemberCard } from "@/components/members/MemberCard";
import { AlumniList } from "@/components/members/AlumniList";
import { PageHeader } from "@/components/ui/page-header";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Nossa Equipe",
  description:
    "Conheça os membros ativos, professores coordenadores e egressos da ERUS.",
};

export default function MembrosPage() {
  const professors = activeMembers.filter((m) => m.isProfessor);
  const regularMembers = activeMembers.filter((m) => !m.isProfessor);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <PageHeader
        title="Nossa Equipe"
        description="Pessoas apaixonadas por robótica, tecnologia e aprendizado."
      />

      {professors.length > 0 && (
        <FadeIn>
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold text-foreground">
              Professores Coordenadores
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {professors.map((member, index) => (
                <MemberCard
                  key={member.githubUsername}
                  name={member.name}
                  course={member.course}
                  yearJoined={member.yearJoined}
                  githubUsername={member.githubUsername}
                  isProfessor={member.isProfessor}
                  index={index}
                />
              ))}
            </div>
          </section>
        </FadeIn>
      )}

      <FadeIn delay={0.1}>
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-foreground">
            Membros Ativos
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {regularMembers.map((member, index) => (
              <MemberCard
                key={member.githubUsername}
                name={member.name}
                course={member.course}
                yearJoined={member.yearJoined}
                githubUsername={member.githubUsername}
                isProfessor={member.isProfessor}
                index={index}
              />
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.2}>
        <section>
          <h2 className="mb-6 text-2xl font-bold text-foreground">
            Membros Egressos
          </h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Agradecemos a todos que contribuíram para a história da ERUS.
          </p>
          <div className="border border-border bg-white p-4">
            <AlumniList members={alumniMembers} />
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
