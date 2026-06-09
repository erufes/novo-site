import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Nossos Projetos",
  description:
    "Conheça os projetos da ERUS: robôs competitivos, pesquisa em robótica, iniciativas educacionais e eventos da equipe.",
};

export default function ProjetosPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <PageHeader
        title="Nossos Projetos"
        description="Desenvolvemos projetos em diversas áreas da robótica, desde competições nacionais até pesquisa de ponta e formação de novos membros."
      />

      <ProjectFilter projects={projects} />
    </main>
  );
}
