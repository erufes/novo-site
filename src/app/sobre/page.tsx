import type { Metadata } from "next";
import { MapPin, Target, Heart, Users, BookOpen } from "lucide-react";
import { Timeline } from "@/components/about/Timeline";
import { PageHeader } from "@/components/ui/page-header";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Sobre a ERUS",
  description:
    "Conheça a história, missão e valores da ERUS - Equipe de Robótica da Universidade Federal do Espírito Santo.",
};

const values = [
  {
    icon: Heart,
    title: "Colaboração",
    text: "Trabalhamos juntos, compartilhando conhecimento entre diferentes cursos e níveis de experiência.",
  },
  {
    icon: BookOpen,
    title: "Aprendizado contínuo",
    text: "Incentivamos a curiosidade e a busca constante por novas tecnologias e abordagens.",
  },
  {
    icon: Users,
    title: "Inclusão",
    text: "Acolhemos estudantes de todos os cursos e níveis, valorizando a diversidade de perspectivas.",
  },
  {
    icon: Target,
    title: "Excelência técnica",
    text: "Buscamos qualidade em nossos projetos, desde o planejamento até a competição.",
  },
];

export default function SobrePage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <PageHeader
        title="Sobre a ERUS"
        description="Somos a Equipe de Robótica da Universidade Federal do Espírito Santo. Desde 2012, unimos ensino, pesquisa e extensão para formar pessoas e transformar ideias em robôs."
      />

      <FadeIn>
        <section className="mb-20">
          <h2 className="mb-8 text-2xl font-bold text-foreground">
            Nossa História
          </h2>
          <Timeline />
        </section>
      </FadeIn>

      <section className="mb-20">
        <FadeIn>
          <h2 className="mb-8 text-2xl font-bold text-foreground">
            Missão e Valores
          </h2>

          <div className="mb-8 border border-border bg-white p-6">
            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center border border-erus/15 bg-erus/[0.06]">
                <Target className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Nossa Missão</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Promover o desenvolvimento de habilidades em robótica,
                  eletrônica, programação e trabalho em equipe entre estudantes da
                  UFES, formando profissionais capazes de resolver problemas reais
                  por meio da tecnologia.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((value, i) => (
            <FadeIn key={value.title} delay={i * 0.1}>
              <div className="border border-border bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-erus/40">
                <div className="flex items-center gap-2">
                  <div className="flex size-8 items-center justify-center border border-erus/15 bg-erus/[0.06]">
                    <value.icon className="size-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{value.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <FadeIn>
          <h2 className="mb-8 text-2xl font-bold text-foreground">
            Iniciativas
          </h2>
        </FadeIn>

        <div className="space-y-6">
          <FadeIn delay={0.1}>
            <div className="border border-border bg-white p-6 transition-all duration-300 hover:border-erus/40">
              <h3 className="text-lg font-semibold text-foreground">TRUFES</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                O Torneio de Robótica da UFES é nossa principal iniciativa de
                extensão. Realizado anualmente, o TRUFES promove competições de
                robótica abertas a estudantes de ensino médio e graduação,
                aproximando a universidade da comunidade e despertando o interesse
                pela engenharia e tecnologia.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="border border-border bg-white p-6 transition-all duration-300 hover:border-erus/40">
              <h3 className="text-lg font-semibold text-foreground">
                Educação e Comunidade
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Além das competições, realizamos oficinas, minicursos e palestras
                em escolas e eventos da UFES. Acreditamos que a robótica é uma
                ferramenta poderosa de ensino, capaz de tornar conceitos de física,
                matemática e programação mais acessíveis e motivadores.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <section className="mb-8">
          <h2 className="mb-8 text-2xl font-bold text-foreground">
            Localização
          </h2>

          <div className="border border-border bg-white p-6">
            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center border border-erus/15 bg-erus/[0.06]">
                <MapPin className="size-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  UFES - CT 13 - Sala 33 (3º andar)
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Centro Tecnológico, Universidade Federal do Espírito Santo
                </p>
                <p className="text-sm text-muted-foreground">
                  Av. Fernando Ferrari, 514 - Goiabeiras, Vitória - ES
                </p>
              </div>
            </div>

            <div className="mt-6 h-64 overflow-hidden rounded-lg border border-border">
              <iframe
                title="Localização da ERUS - UFES, Centro Tecnológico"
                src="https://www.google.com/maps?q=Universidade+Federal+do+Esp%C3%ADrito+Santo+Centro+Tecnol%C3%B3gico+Av.+Fernando+Ferrari+514+Goiabeiras+Vit%C3%B3ria+ES&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
