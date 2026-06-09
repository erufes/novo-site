import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import { getProjectIcon } from "@/lib/project-icons";
import { TechBadge } from "@/components/projects/TechBadge";

const typeLabels: Record<string, string> = {
  competitivo: "Competitivo",
  pesquisa: "Pesquisa",
  educacional: "Educacional",
  evento: "Evento",
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Projeto não encontrado" };
  }

  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjetoPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const Icon = getProjectIcon(project.slug);

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:px-8">
      <Link
        href="/projetos"
        className="group mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-erus"
      >
        <ArrowLeft className="size-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
        Voltar para projetos
      </Link>

      <div className="border-b border-border pb-10">
        <div className="flex items-center gap-5">
          <div className="flex size-16 shrink-0 items-center justify-center border border-erus/15 bg-erus/[0.06]">
            <Icon className="size-8 text-erus" strokeWidth={1.5} />
          </div>
          <div>
            <span className="border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {typeLabels[project.type]}
            </span>
            <h1 className="font-display mt-2 text-4xl font-bold tracking-tight text-erus-deep">
              {project.name}
            </h1>
          </div>
        </div>
      </div>

      <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
        {project.longDescription}
      </p>

      <div className="mt-10">
        <h2 className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-erus">
          Tecnologias
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <TechBadge key={tag} name={tag} />
          ))}
        </div>
      </div>
    </main>
  );
}
