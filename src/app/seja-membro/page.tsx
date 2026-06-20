import type { Metadata } from "next"
import {
  GraduationCap,
  Trophy,
  Users,
  Briefcase,
  Wrench,
  Info,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { PageHeader } from "@/components/ui/page-header"
import { FadeIn } from "@/components/ui/fade-in"
import { MembershipForm } from "@/components/membership/MembershipForm"

export const metadata: Metadata = {
  title: "Seja Membro",
  description:
    "Faça parte da ERUS - Equipe de Robótica da UFES. Saiba como participar do processo seletivo e os benefícios de ser membro.",
}

const benefits = [
  {
    icon: GraduationCap,
    title: "Aprendizado prático",
    description:
      "Aplique na prática os conhecimentos adquiridos em sala de aula, trabalhando com eletrônica, programação e mecânica.",
  },
  {
    icon: Trophy,
    title: "Participação em competições",
    description:
      "Represente a UFES em competições nacionais e internacionais de robótica.",
  },
  {
    icon: Users,
    title: "Networking",
    description:
      "Conheça pessoas apaixonadas por tecnologia e construa uma rede de contatos valiosa.",
  },
  {
    icon: Briefcase,
    title: "Desenvolvimento profissional",
    description:
      "Desenvolva habilidades de trabalho em equipe, gestão de projetos e resolução de problemas.",
  },
  {
    icon: Wrench,
    title: "Acesso a equipamentos",
    description:
      "Utilize impressoras 3D, ferramentas de eletrônica, componentes e softwares profissionais.",
  },
]

export default function SejaMembro() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <PageHeader
        title="Seja Membro"
        description="Faça parte da equipe de robótica da UFES! Na ERUS você terá a oportunidade de aprender, criar e competir ao lado de pessoas apaixonadas por tecnologia."
      />

      <section>
        <FadeIn>
          <h2 className="text-center text-2xl font-semibold text-foreground">
            Por que fazer parte da ERUS?
          </h2>
        </FadeIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <FadeIn key={benefit.title} delay={i * 0.08}>
              <Card className="h-full border-border/50 bg-card/50 transition-all duration-300 hover:-translate-y-0.5 hover:border-erus/40">
                <CardContent className="flex flex-col items-start gap-3 pt-6">
                  <div className="flex size-10 items-center justify-center border border-erus/15 bg-erus/[0.06]">
                    <benefit.icon className="size-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {benefit.description}
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
            Como funciona o processo seletivo
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-muted-foreground">
            <p>
              A ERUS realiza processos seletivos periódicos, geralmente no início
              de cada semestre letivo. O processo é aberto a todos os estudantes da
              UFES, independentemente do curso.
            </p>
            <p>
              As inscrições e informações sobre o processo seletivo são divulgadas
              em nossas redes sociais. Fique atento para não perder a próxima
              oportunidade!
            </p>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="mt-20">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-center text-2xl font-semibold text-foreground">
              Faça seu pré-cadastro
            </h2>

            <div className="mt-6 flex items-start gap-3 border border-erus/20 bg-erus/[0.05] p-4">
              <Info className="mt-0.5 size-5 shrink-0 text-erus" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong className="font-semibold text-foreground">
                  Isto é um pré-cadastro, não uma inscrição no processo seletivo.
                </strong>{" "}
                O processo seletivo não está aberto no momento. Ao deixar seus
                dados aqui, você entra na nossa lista de interesse e{" "}
                <strong className="font-medium text-foreground">
                  avisaremos você assim que as próximas vagas abrirem
                </strong>{" "}
                — a inscrição oficial acontece depois, durante o processo seletivo.
              </p>
            </div>

            <Card className="mt-6 border-border/50 bg-card/50">
              <CardContent className="pt-6">
                <MembershipForm />
              </CardContent>
            </Card>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}
