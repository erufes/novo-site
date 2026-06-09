"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { projects } from "@/data/projects"
import { getProjectIcon } from "@/lib/project-icons"
import { Corners } from "@/components/ui/corners"
import { SectionHeading } from "@/components/ui/section-heading"

const ease = [0.22, 1, 0.36, 1] as const

const featuredSlugs = ["vsss", "seguidor-de-linhas", "duckietown"]

const typeLabels: Record<string, string> = {
  competitivo: "Competitivo",
  pesquisa: "Pesquisa",
  educacional: "Educacional",
  evento: "Evento",
}

export default function FeaturedProjects() {
  const featured = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))

  return (
    <section className="bg-secondary px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="02"
          eyebrow="Projetos em destaque"
          title="Robôs em desenvolvimento agora"
          description="Sete frentes ativas de competição e pesquisa — estas são algumas delas."
          action={{ label: "Todos os projetos", href: "/projetos" }}
        />

        <div className="grid gap-5 md:grid-cols-3">
          {featured.map((project, i) => {
            const Icon = getProjectIcon(project.slug)
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease }}
              >
                <Link
                  href={`/projetos/${project.slug}`}
                  className="group relative flex h-full flex-col border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-erus/40 hover:shadow-[0_12px_40px_-12px_rgba(22,69,122,0.25)]"
                >
                  <Corners className="border-erus opacity-0 group-hover:opacity-100" />

                  <div className="flex items-start justify-between">
                    <div className="flex size-12 items-center justify-center border border-erus/15 bg-erus/[0.06] transition-colors duration-300 group-hover:border-erus/30 group-hover:bg-erus/10">
                      <Icon className="size-6 text-erus" strokeWidth={1.5} />
                    </div>
                    <span className="border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {typeLabels[project.type]}
                    </span>
                  </div>

                  <h3 className="font-display mt-6 text-xl font-semibold text-erus-deep">
                    {project.name}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <p className="mt-5 font-mono text-[11px] uppercase tracking-wider text-foreground/40">
                    {project.tags.slice(0, 3).join(" · ")}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-erus">
                      Ver projeto
                    </span>
                    <ArrowUpRight className="size-4 text-erus transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
