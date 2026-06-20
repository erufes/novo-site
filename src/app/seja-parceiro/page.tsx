import type { Metadata } from "next"
import { Megaphone, GraduationCap, HeartHandshake, Rocket } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { PageHeader } from "@/components/ui/page-header"
import { FadeIn } from "@/components/ui/fade-in"
import { PartnerForm } from "@/components/partner/PartnerForm"

export const metadata: Metadata = {
  title: "Seja Parceiro",
  description:
    "Torne-se parceiro da ERUS - Equipe de Robótica da UFES. Apoie a formação de novos engenheiros e a robótica capixaba por meio de patrocínio, doações ou parcerias acadêmicas.",
}

const reasons = [
  {
    icon: Megaphone,
    title: "Visibilidade da marca",
    description:
      "Sua marca presente em competições nacionais, redes sociais, uniformes e nos nossos robôs, alcançando a comunidade acadêmica e de tecnologia.",
  },
  {
    icon: GraduationCap,
    title: "Acesso a talentos",
    description:
      "Conexão direta com estudantes de engenharia e computação altamente qualificados, ideais para estágios e oportunidades de carreira.",
  },
  {
    icon: HeartHandshake,
    title: "Impacto social e educacional",
    description:
      "Apoie a formação prática de futuros engenheiros e a difusão da robótica em escolas e eventos do Espírito Santo.",
  },
  {
    icon: Rocket,
    title: "Inovação conjunta",
    description:
      "Parcerias técnicas e de pesquisa que aproximam sua organização de soluções em robótica, automação e inteligência artificial.",
  },
]

const partnershipTypes = [
  "Patrocínio financeiro",
  "Doação de materiais e equipamentos",
  "Parceria acadêmica ou de pesquisa",
  "Palestras, workshops e eventos",
  "Estágios e oportunidades para membros",
]

export default function SejaParceiro() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <PageHeader
        title="Seja Parceiro"
        description="Caminhe com a ERUS na formação de engenheiros e no avanço da robótica capixaba. Empresas, laboratórios e instituições podem apoiar a equipe de diversas formas."
      />

      <section>
        <FadeIn>
          <h2 className="text-center text-2xl font-semibold text-foreground">
            Por que apoiar a ERUS?
          </h2>
        </FadeIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {reasons.map((reason, i) => (
            <FadeIn key={reason.title} delay={i * 0.08}>
              <Card className="h-full border-border/50 bg-card/50 transition-all duration-300 hover:-translate-y-0.5 hover:border-erus/40">
                <CardContent className="flex flex-col items-start gap-3 pt-6">
                  <div className="flex size-10 items-center justify-center border border-erus/15 bg-erus/[0.06]">
                    <reason.icon className="size-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{reason.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      <FadeIn>
        <section className="mt-20">
          <h2 className="text-center text-2xl font-semibold text-foreground">
            Formas de parceria
          </h2>
          <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2.5">
            {partnershipTypes.map((type) => (
              <span
                key={type}
                className="border border-border bg-white px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground"
              >
                {type}
              </span>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mt-20">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-center text-2xl font-semibold text-foreground">
              Vamos conversar?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">
              Conte-nos sobre sua organização e como imagina a parceria. Nossa
              diretoria retornará o contato pelo email informado.
            </p>
            <Card className="mt-8 border-border/50 bg-card/50">
              <CardContent className="pt-6">
                <PartnerForm />
              </CardContent>
            </Card>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}
