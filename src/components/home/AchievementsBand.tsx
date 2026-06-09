"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Trophy } from "lucide-react"
import { achievements } from "@/data/achievements"

const ease = [0.22, 1, 0.36, 1] as const

const competitions = [
  "CBR",
  "LARC",
  "OBR",
  "IRON CUP",
  "WINTER CHALLENGE",
  "ROBOCUP",
  "TRUFES",
]

export default function AchievementsBand() {
  const recent = [...achievements]
    .sort((a, b) => b.year - a.year)
    .slice(0, 4)

  return (
    <section className="relative overflow-hidden bg-erus-deep">
      <div aria-hidden className="bg-blueprint absolute inset-0" />
      <div
        aria-hidden
        className="absolute -left-40 top-0 size-[480px] rounded-full bg-erus/50 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          {/* Left: big number */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-es-blue">
              <span className="text-white/30">/03</span> Conquistas
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Resultado em forma de pódio
            </h2>

            <div className="mt-8 flex items-end gap-4">
              <p className="font-display text-7xl font-bold leading-none text-white sm:text-8xl">
                15<span className="text-es-blue">+</span>
              </p>
              <div className="mb-2">
                <Trophy className="mb-1 size-5 text-es-blue" strokeWidth={1.5} />
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                  pódios desde 2014
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
              Títulos estaduais, nacionais e latino-americanos em seguidor de
              linha, futebol de robôs, sumô e veículos autônomos.
            </p>

            <Link
              href="/conquistas"
              className="group mt-8 inline-flex items-center gap-2 border border-white/25 px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:border-es-blue hover:text-es-blue"
            >
              Todas as conquistas
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right: recent achievements list */}
          <div className="flex flex-col justify-center">
            {recent.map((achievement, i) => (
              <motion.div
                key={`${achievement.year}-${achievement.title}`}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease }}
                className="group flex items-center gap-5 border-b border-white/10 py-5 first:border-t sm:gap-8"
              >
                <span className="font-mono text-sm text-white/40 transition-colors duration-300 group-hover:text-es-blue">
                  {achievement.year}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium text-white">
                    {achievement.title}
                  </p>
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-white/40">
                    {achievement.competition}
                  </p>
                </div>
                <span
                  className={`shrink-0 border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest ${
                    achievement.position.startsWith("1º")
                      ? "border-es-blue/40 text-es-blue"
                      : "border-white/20 text-white/60"
                  }`}
                >
                  {achievement.position}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Competition marquee */}
      <div className="relative border-t border-white/10 py-5">
        <div className="marquee-mask overflow-hidden">
          <div className="animate-marquee flex w-max">
            {[0, 1].map((copy) => (
              <div key={copy} aria-hidden={copy === 1} className="flex">
                {competitions.map((name) => (
                  <span
                    key={`${copy}-${name}`}
                    className="mx-8 flex items-center gap-8 font-mono text-xs uppercase tracking-[0.3em] text-white/30"
                  >
                    {name}
                    <span className="text-es-blue/40">/</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
