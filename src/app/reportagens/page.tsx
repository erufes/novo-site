import type { Metadata } from "next"
import { ExternalLink } from "lucide-react"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { reports } from "@/data/reports"
import { PageHeader } from "@/components/ui/page-header"
import { FadeIn } from "@/components/ui/fade-in"

export const metadata: Metadata = {
  title: "Reportagens",
  description:
    "Confira a cobertura da mídia sobre a ERUS - Equipe de Robótica da UFES e nossos projetos.",
}

export default function ReportagensPage() {
  const reportsByYear = reports.reduce<Record<number, typeof reports>>(
    (acc, report) => {
      if (!acc[report.year]) {
        acc[report.year] = []
      }
      acc[report.year].push(report)
      return acc
    },
    {}
  )

  const sortedYears = Object.keys(reportsByYear)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <PageHeader
        title="Reportagens"
        description="Confira a cobertura da mídia sobre a ERUS e nossos projetos."
      />

      <div className="space-y-12">
        {sortedYears.map((year, yi) => (
          <FadeIn key={year} delay={yi * 0.1}>
            <section>
              <h2 className="mb-6 text-2xl font-semibold text-foreground">
                {year}
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {reportsByYear[year].map((report) => (
                  <Card key={report.url} className="border-border/50 bg-card/50 transition-all duration-300 hover:border-erus/40">
                    <CardHeader>
                      <CardTitle>
                        <a
                          href={report.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-start gap-2 transition-colors hover:text-primary"
                        >
                          <span className="flex-1">{report.title}</span>
                          <ExternalLink className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                        </a>
                      </CardTitle>
                      <CardDescription>{report.source}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
