"use client"

import { motion } from "framer-motion"
import { Swords, FlaskConical, GraduationCap, Megaphone } from "lucide-react"
import { Corners } from "@/components/ui/corners"
import { SectionHeading } from "@/components/ui/section-heading"

const ease = [0.22, 1, 0.36, 1] as const

const items = [
  {
    icon: Swords,
    number: "01",
    title: "Competição",
    description:
      "Robôs autônomos para as principais arenas da América Latina: seguidor de linha, sumô, futebol de robôs e veículos autônomos.",
  },
  {
    icon: FlaskConical,
    number: "02",
    title: "Pesquisa & Desenvolvimento",
    description:
      "Visão computacional, inteligência artificial e sistemas embarcados aplicados a problemas reais, em parceria com laboratórios da UFES.",
  },
  {
    icon: GraduationCap,
    number: "03",
    title: "Ensino",
    description:
      "Dezenas de minicursos e oficinas de robótica já realizados para estudantes universitários e de ensino médio.",
  },
  {
    icon: Megaphone,
    number: "04",
    title: "Extensão",
    description:
      "Organizamos o TRUFES, torneio aberto ao público que aproxima a robótica da comunidade capixaba — já são 8 edições.",
  },
]

export default function WhatWeDo() {
  return (
    <section className="bg-grid-light relative bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="01"
          eyebrow="O que fazemos"
          title="Engenharia completa, da bancada à arena"
          description="Cada robô que sai da sala 33 do CT-13 passa por projeto mecânico, eletrônica e software — tudo feito por estudantes."
        />

        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease }}
              className="group relative bg-white p-7 transition-colors duration-300 hover:bg-[#f7fafd]"
            >
              <Corners className="border-erus opacity-0 group-hover:opacity-100" />

              <div className="flex items-start justify-between">
                <div className="flex size-11 items-center justify-center border border-erus/15 bg-erus/[0.06] transition-colors duration-300 group-hover:border-erus/30 group-hover:bg-erus/10">
                  <item.icon
                    className="size-5 text-erus"
                    strokeWidth={1.6}
                  />
                </div>
                <span className="font-mono text-xs tracking-widest text-foreground/25 transition-colors duration-300 group-hover:text-erus/60">
                  /{item.number}
                </span>
              </div>

              <h3 className="font-display mt-6 text-lg font-semibold text-erus-deep">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
