import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, PenLine, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { FadeIn } from "@/components/ui/fade-in";
import { getAllPosts, formatPostDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Blog da ERUS - Equipe de Robótica da UFES. Artigos sobre robótica, tutoriais, novidades e atualizações da equipe.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <PageHeader
        title="Blog"
        description="Novidades, tutoriais e atualizações da ERUS - Equipe de Robótica da UFES."
      />

      {posts.length === 0 ? (
        <FadeIn>
          <div className="flex flex-col items-center text-center">
            <div className="flex size-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20">
              <PenLine className="size-10 text-primary" />
            </div>
            <h2 className="mt-8 text-2xl font-semibold text-foreground">
              Em breve
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Estamos preparando conteúdos incríveis para você. Em breve, nosso
              blog estará repleto de artigos sobre robótica, tutoriais e
              novidades da equipe.
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
          </div>
        </FadeIn>
      ) : (
        <div className="space-y-4">
          {posts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.05}>
              <article className="group border border-border bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-erus/40">
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex flex-col gap-3 p-6 sm:p-7"
                >
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    <CalendarDays className="size-3.5" />
                    <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                    {post.tags?.[0] && (
                      <>
                        <span className="text-border">/</span>
                        <span className="text-erus">{post.tags[0]}</span>
                      </>
                    )}
                  </div>

                  <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {post.title}
                  </h2>

                  <p className="leading-relaxed text-muted-foreground">
                    {post.description}
                  </p>

                  <span className="mt-1 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.12em] text-erus">
                    Ler post
                    <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      )}
    </main>
  );
}
