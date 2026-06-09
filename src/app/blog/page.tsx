import type { Metadata } from "next"
import { PenLine, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/ui/page-header"
import { FadeIn } from "@/components/ui/fade-in"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Blog da ERUS - Equipe de Robótica da UFES. Artigos sobre robótica, tutoriais, novidades e atualizações da equipe.",
}

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <PageHeader
        title="Blog"
        description="Novidades, tutoriais e atualizações da ERUS - Equipe de Robótica da UFES."
      />

      <FadeIn>
        <div className="flex flex-col items-center text-center">
          <div className="flex size-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20">
            <PenLine className="size-10 text-primary" />
          </div>

          <h2 className="mt-8 text-2xl font-semibold text-foreground">
            Em breve
          </h2>

          <p className="mt-4 max-w-lg text-muted-foreground">
            Estamos preparando conteúdos incríveis para você. Em breve, nosso blog
            estará repleto de artigos sobre robótica, tutoriais e novidades da
            equipe.
          </p>

          <div className="mt-8">
            <Button
              nativeButton={false}
              render={
                <a
                  href="https://instagram.com/erus.ufes"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <ExternalLink className="mr-2 size-4" />
              Siga-nos no Instagram
            </Button>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Acompanhe nossas redes sociais para ficar por dentro das novidades!
          </p>
        </div>
      </FadeIn>
    </div>
  )
}
