import type { Metadata } from "next"
import { Newspaper, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Notícias",
  description:
    "Notícias da ERUS - Equipe de Robótica da UFES. Fique por dentro dos acontecimentos e novidades da equipe.",
}

export default function NoticiasPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Notícias
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Fique por dentro dos acontecimentos e novidades da ERUS.
        </p>
      </div>

      {/* Coming soon state */}
      <div className="mt-16 flex flex-col items-center text-center">
        <div className="flex size-20 items-center justify-center rounded-2xl bg-primary/10">
          <Newspaper className="size-10 text-primary" />
        </div>

        <h2 className="mt-8 text-2xl font-semibold text-foreground">
          Em breve
        </h2>

        <p className="mt-4 max-w-lg text-muted-foreground">
          Em breve você poderá acompanhar todas as novidades e acontecimentos da
          ERUS por aqui.
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
    </div>
  )
}
