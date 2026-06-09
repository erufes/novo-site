"use client"

import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

type PageHeaderProps = {
  title: string
  description?: string
  eyebrow?: string
}

export function PageHeader({
  title,
  description,
  eyebrow = "ERUS — Equipe de Robótica da UFES",
}: PageHeaderProps) {
  return (
    <motion.div
      className="mb-14 border-b border-border pb-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease }}
    >
      <p className="mb-4 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.25em] text-erus">
        <span className="animate-blink inline-block size-1.5 rounded-full bg-erus" />
        {eyebrow}
      </p>
      <h1 className="font-display text-4xl font-bold tracking-tight text-erus-deep sm:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </motion.div>
  )
}
