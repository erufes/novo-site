"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CircuitBoard, Handshake } from "lucide-react"
import { Corners } from "@/components/ui/corners"

const ease = [0.22, 1, 0.36, 1] as const

export default function HomeCTA() {
  return (
    <section className="bg-grid-light bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
        {/* Students */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="group relative overflow-hidden bg-ink p-9 sm:p-12"
        >
          <div aria-hidden className="bg-blueprint absolute inset-0" />
          <div
            aria-hidden
            className="absolute -right-24 -top-24 size-72 rounded-full bg-es-blue/20 blur-[100px]"
          />
          <div className="relative">
            <CircuitBoard
              className="mb-6 size-8 text-es-blue"
              strokeWidth={1.4}
            />
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-es-blue">
              Para estudantes
            </p>
            <h3 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Construa robôs.
              <br />
              Aprenda fazendo.
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              Estudantes de qualquer curso da UFES podem participar — mecânica,
              eletrônica, software ou gestão. Nenhuma experiência prévia é
              necessária.
            </p>
            <Link
              href="/seja-membro"
              className="group/btn mt-8 inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-es-blue"
            >
              Seja membro
              <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="group relative border border-border bg-white p-9 transition-colors duration-300 hover:border-erus/40 sm:p-12"
        >
          <Corners className="border-erus opacity-0 group-hover:opacity-100" />
          <Handshake className="mb-6 size-8 text-erus" strokeWidth={1.4} />
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-erus">
            Para empresas
          </p>
          <h3 className="font-display text-2xl font-bold tracking-tight text-erus-deep sm:text-3xl">
            Patrocine a próxima geração de engenheiros
          </h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Associe sua marca a uma equipe premiada nacionalmente e apoie a
            formação prática de engenheiros no Espírito Santo. Sua logo em
            nossos robôs, uniformes e competições.
          </p>
          <Link
            href="/contato"
            className="group/btn mt-8 inline-flex items-center gap-2 rounded-sm border border-erus px-6 py-3 text-sm font-semibold text-erus transition-colors duration-300 hover:bg-erus hover:text-white"
          >
            Fale conosco
            <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
