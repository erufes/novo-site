"use client";

import { motion } from "framer-motion";

type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};

const events: TimelineEvent[] = [
  {
    year: "2008",
    title: "UFES Ultrabots",
    description:
      "Surge o grupo Ultrabots na UFES, pioneiro em robótica competitiva na universidade.",
  },
  {
    year: "2012",
    title: "Fundação da ERUS",
    description:
      "Ex-membros do Ultrabots fundam a ERUS - Equipe de Robótica da UFES, com foco em ensino, pesquisa e extensão.",
  },
  {
    year: "2013",
    title: "Primeiro TRUFES",
    description:
      "Realização da primeira edição do Torneio de Robótica da UFES, levando robótica para a comunidade acadêmica.",
  },
  {
    year: "2015",
    title: "Primeiras conquistas em competições",
    description:
      "A equipe alcança suas primeiras vitórias expressivas em competições regionais e nacionais de robótica.",
  },
  {
    year: "2019",
    title: "Programa oficial de extensão",
    description:
      "A ERUS se torna programa oficial de extensão vinculado ao Centro Tecnológico da UFES.",
  },
  {
    year: "2022",
    title: "Projeto Duckietown",
    description:
      "Início do projeto Duckietown, explorando veículos autônomos em escala reduzida com ROS e visão computacional.",
  },
  {
    year: "Presente",
    title: "Múltiplas frentes de atuação",
    description:
      "Com 13 membros ativos, a equipe atua em diversas frentes: robótica móvel, visão computacional, IA e educação.",
  },
];

export function Timeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-px" />

      <div className="space-y-8 md:space-y-12">
        {events.map((event, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-start gap-6 pl-12 md:pl-0"
            >
              {/* Dot */}
              <div className="absolute left-4 top-1.5 z-10 size-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:left-1/2" />

              {/* Content - alternating sides on md+ */}
              <div
                className={`w-full md:w-[calc(50%-2rem)] ${
                  isLeft
                    ? "md:mr-auto md:text-right"
                    : "md:ml-auto md:text-left"
                }`}
              >
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {event.year}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  {event.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {event.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
