import type { Metadata } from "next"
import { Mail, MapPin, ExternalLink } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/contact/ContactForm"
import { PageHeader } from "@/components/ui/page-header"
import { FadeIn } from "@/components/ui/fade-in"

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a ERUS - Equipe de Robótica da UFES. Envie sua mensagem, dúvida ou sugestão.",
}

const socialLinks = [
  { label: "Instagram", handle: "@erus.ufes", href: "https://instagram.com/erus.ufes" },
  { label: "Facebook", handle: "ERUS", href: "https://facebook.com/erusbot" },
  { label: "GitHub", handle: "erufes", href: "https://github.com/erufes" },
  { label: "LinkedIn", handle: "erus-ufes", href: "https://linkedin.com/company/erus-ufes" },
  { label: "YouTube", handle: "erusteam", href: "https://youtube.com/@erusteam" },
]

export default function ContatoPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <PageHeader
        title="Contato"
        description="Tem alguma dúvida, sugestão ou quer saber mais sobre a ERUS? Entre em contato conosco!"
      />

      <div className="grid gap-10 lg:grid-cols-2">
        <FadeIn>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center border border-erus/15 bg-erus/[0.06]">
                <Mail className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <a
                  href="mailto:erus@inf.ufes.br"
                  className="mt-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  erus@inf.ufes.br
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center border border-erus/15 bg-erus/[0.06]">
                <MapPin className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Localização</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  UFES - CT 13 - Sala 33 (3º andar)
                </p>
                <p className="text-sm text-muted-foreground">
                  Av. Fernando Ferrari, 514 - Goiabeiras, Vitória - ES
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground">Redes sociais</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-md border border-border/50 px-3 py-2 text-sm text-muted-foreground transition-all duration-300 hover:border-erus/40 hover:text-primary"
                  >
                    <ExternalLink className="size-3.5" />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <Card className="border-border/50 bg-card/50">
            <CardHeader>
              <CardTitle className="text-lg">Envie uma mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </div>
  )
}
