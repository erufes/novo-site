import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, User } from "lucide-react";

import {
  getPostSlugs,
  getPostMetadata,
  formatPostDate,
  type PostMetadata,
} from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

// Prerender every post at build time; unknown slugs 404 instead of
// attempting a runtime import.
export const dynamicParams = false;

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const meta = await getPostMetadata(slug);
    return {
      title: `${meta.title} — Blog`,
      description: meta.description,
    };
  } catch {
    return { title: "Post não encontrado — Blog" };
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let Post: React.ComponentType;
  let meta: PostMetadata;
  try {
    const mod = await import(`@/content/blog/${slug}.mdx`);
    Post = mod.default;
    meta = mod.metadata as PostMetadata;
  } catch {
    notFound();
  }

  if (meta.draft) notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-erus"
      >
        <ArrowLeft className="size-3.5" />
        Voltar ao blog
      </Link>

      <header className="mt-8 border-b border-border pb-8">
        {meta.tags?.[0] && (
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-erus">
            {meta.tags.join(" · ")}
          </p>
        )}
        <h1 className="font-display text-3xl font-bold tracking-tight text-erus-deep sm:text-4xl">
          {meta.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {meta.description}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <User className="size-3.5" />
            {meta.author}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-3.5" />
            <time dateTime={meta.date}>{formatPostDate(meta.date)}</time>
          </span>
        </div>
      </header>

      <article className="mt-8">
        <Post />
      </article>
    </main>
  );
}
