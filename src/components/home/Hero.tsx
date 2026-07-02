"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, Trophy, Users } from "lucide-react"
import { CountUp } from "@/components/ui/count-up"
import { achievements } from "@/data/achievements"

const ease = [0.22, 1, 0.36, 1] as const

type Slide = {
  id: string
  eyebrow: string
  title: React.ReactNode
  description: string
  cta: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  visual: React.ReactNode
}

function LogoVisual() {
  return (
    <div className="relative">
      {/* Crosshair marks */}
      <span className="absolute -left-6 -top-6 font-mono text-sm text-white/30 select-none">
        +
      </span>
      <span className="absolute -right-6 -top-6 font-mono text-sm text-white/30 select-none">
        +
      </span>
      <span className="absolute -bottom-6 -left-6 font-mono text-sm text-white/30 select-none">
        +
      </span>
      <span className="absolute -bottom-6 -right-6 font-mono text-sm text-white/30 select-none">
        +
      </span>

      {/* Dashed orbit ring */}
      <div
        aria-hidden
        className="absolute inset-0 -m-8 rounded-full border border-dashed border-white/10"
      />

      <div className="animate-float-slow">
        <Image
          src="/logo_fundo_branco.png"
          alt="Logo da ERUS - Equipe de Robótica da UFES"
          width={420}
          height={420}
          className="h-auto w-[230px] drop-shadow-[0_0_45px_rgba(76,171,217,0.25)] sm:w-[280px] lg:w-[330px]"
          priority
        />
      </div>

      <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.25em] text-white/35 select-none">
        ERUS-01 // CT-13 · UFES
      </span>
    </div>
  )
}

function IconVisual({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <div className="relative flex items-center justify-center">
      <div
        aria-hidden
        className="absolute inset-0 -m-10 rounded-full border border-dashed border-white/10"
      />
      <div className="flex size-44 items-center justify-center rounded-full border border-white/10 bg-white/5 sm:size-56 lg:size-64">
        <Icon className="size-20 text-es-blue sm:size-24" strokeWidth={1.2} />
      </div>
      <span className="absolute -left-6 -top-6 font-mono text-sm text-white/30 select-none">
        +
      </span>
      <span className="absolute -bottom-6 -right-6 font-mono text-sm text-white/30 select-none">
        +
      </span>
    </div>
  )
}

const slides: Slide[] = [
  {
    id: "equipe",
    eyebrow: "EQUIPE DE ROBÓTICA DA UFES — DESDE 2012",
    title: (
      <>
        Projetamos, construímos e programamos{" "}
        <span className="text-es-blue">robôs de competição</span>
      </>
    ),
    description:
      "Somos a ERUS, equipe de robótica da Universidade Federal do Espírito Santo. Representamos o ES nas maiores competições de robótica da América Latina.",
    cta: { label: "Conheça os projetos", href: "/projetos" },
    visual: <LogoVisual />,
  },
  {
    id: "conquistas",
    eyebrow: "COMPETIÇÕES NACIONAIS E INTERNACIONAIS",
    title: (
      <>
        Pódios na CBR, LARC e{" "}
        <span className="text-es-blue">além</span>
      </>
    ),
    description:
      "De seguidores de linha a futebol de robôs autônomo: mais de uma década acumulando títulos nas principais arenas de robótica do continente.",
    cta: { label: "Veja as conquistas", href: "/conquistas" },
    visual: <IconVisual icon={Trophy} />,
  },
  {
    id: "membros",
    eyebrow: "PROCESSO SELETIVO — TODOS OS CURSOS",
    title: (
      <>
        Quer construir robôs{" "}
        <span className="text-es-blue">com a gente?</span>
      </>
    ),
    description:
      "Mecânica, eletrônica, software e gestão: há espaço para todo perfil de estudante. Nenhuma experiência prévia é necessária.",
    cta: { label: "Seja membro", href: "/seja-membro" },
    visual: <IconVisual icon={Users} />,
  },
]

const stats = [
  { value: 14, pad: 0, suffix: " anos", label: "de história" },
  { value: achievements.length, pad: 0, suffix: "", label: "pódios conquistados" },
  { value: 7, pad: 2, suffix: "", label: "projetos ativos" },
  { value: 8, pad: 2, suffix: "", label: "torneios organizados" },
]

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 28 },
    reduceMotion
      ? []
      : [
          Autoplay({
            delay: 7000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ],
  )
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  )

  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        {/* Blueprint grid + glow */}
        <div aria-hidden className="bg-blueprint absolute inset-0" />
        <div
          aria-hidden
          className="absolute -right-40 -top-40 size-[560px] rounded-full bg-erus/40 blur-[140px]"
        />
        <div
          aria-hidden
          className="absolute -bottom-64 -left-40 size-[480px] rounded-full bg-es-blue/15 blur-[140px]"
        />

        <div className="relative">
          {/* Carousel viewport */}
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {slides.map((slide, slideIndex) => (
                <div
                  key={slide.id}
                  className="min-w-0 flex-[0_0_100%]"
                  aria-hidden={slideIndex !== selectedIndex}
                >
                  <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-6 pb-16 pt-12 sm:px-8 md:flex-row md:gap-8 md:pb-20 md:pt-16 lg:px-12">
                    {/* Text */}
                    <div className="flex-1 text-center md:text-left">
                      <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease }}
                        className="mb-5 inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.25em] text-es-blue"
                      >
                        <span className="animate-blink inline-block size-1.5 rounded-full bg-es-blue" />
                        {slide.eyebrow}
                      </motion.p>

                      <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.08, ease }}
                        className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.16, ease }}
                        className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg md:mx-0"
                      >
                        {slide.description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.24, ease }}
                        className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
                      >
                        <Link
                          href={slide.cta.href}
                          className="group inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-es-blue"
                        >
                          {slide.cta.label}
                          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                        {slide.ctaSecondary && (
                          <Link
                            href={slide.ctaSecondary.href}
                            className="inline-flex items-center gap-2 rounded-sm border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-white hover:bg-white/5"
                          >
                            {slide.ctaSecondary.label}
                          </Link>
                        )}
                      </motion.div>
                    </div>

                    {/* Visual */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.1, ease }}
                      className="flex flex-shrink-0 items-center justify-center pb-8 md:justify-end md:pb-0 md:pr-10"
                    >
                      {slide.visual}
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide controls */}
          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-4 md:left-auto md:right-12 md:translate-x-0">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                onClick={() => scrollTo(i)}
                aria-label={`Ir para o slide ${i + 1}`}
                className={`group flex items-center gap-2 font-mono text-[11px] tracking-widest transition-colors ${
                  i === selectedIndex
                    ? "text-white"
                    : "text-white/35 hover:text-white/70"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
                <span
                  className={`block h-px transition-all duration-500 ${
                    i === selectedIndex
                      ? "w-8 bg-es-blue"
                      : "w-4 bg-white/25 group-hover:bg-white/50"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative border-t border-white/10">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 px-0 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                className={`px-6 py-5 sm:px-8 lg:px-12 ${i >= 2 ? "border-t border-white/10 md:border-t-0" : ""}`}
              >
                <p className="font-mono text-2xl font-medium tabular-nums text-white sm:text-3xl">
                  <CountUp value={stat.value} padStart={stat.pad} />
                  <span className="text-es-blue">{stat.suffix}</span>
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ES flag stripes */}
      <div aria-hidden>
        <div className="h-1.5 bg-es-blue" />
        <div className="h-1 bg-white" />
        <div className="h-1.5 bg-es-pink" />
      </div>
    </>
  )
}
