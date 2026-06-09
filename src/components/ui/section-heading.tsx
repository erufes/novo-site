"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const ease = [0.22, 1, 0.36, 1] as const

type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: string
  description?: string
  action?: { label: string; href: string }
  dark?: boolean
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  action,
  dark = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease }}
      className="mb-12 flex flex-col gap-6 sm:mb-14 md:flex-row md:items-end md:justify-between"
    >
      <div className="max-w-2xl">
        <p
          className={`mb-3 font-mono text-[11px] uppercase tracking-[0.25em] ${
            dark ? "text-es-blue" : "text-erus"
          }`}
        >
          <span className={dark ? "text-white/30" : "text-foreground/30"}>
            /{index}
          </span>{" "}
          {eyebrow}
        </p>
        <h2
          className={`font-display text-3xl font-bold tracking-tight sm:text-4xl ${
            dark ? "text-white" : "text-erus-deep"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-4 text-base leading-relaxed ${
              dark ? "text-white/60" : "text-muted-foreground"
            }`}
          >
            {description}
          </p>
        )}
      </div>

      {action && (
        <Link
          href={action.href}
          className={`group inline-flex shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] transition-colors ${
            dark
              ? "text-white/60 hover:text-white"
              : "text-erus hover:text-erus-light"
          }`}
        >
          {action.label}
          <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      )}
    </motion.div>
  )
}
