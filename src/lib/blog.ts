// Server-only helpers for the file-based MDX blog.
// Posts live in `src/content/blog/*.mdx`. Each file exports a typed
// `metadata` object and its default export is the rendered content.
// Drop a new `.mdx` file in that folder and it shows up automatically —
// there is no registry to keep in sync.
//
// This module imports `node:fs`, so it can only be used from Server
// Components / server code — never import it into a client component.

import fs from "node:fs";
import path from "node:path";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export type PostMetadata = {
  title: string;
  description: string;
  /** ISO date string, e.g. "2026-06-15" */
  date: string;
  author: string;
  tags?: string[];
  /** Public path to a cover image, e.g. "/blog/ros2.jpg" */
  cover?: string;
  /** Hide from listings and the public route while still in the repo */
  draft?: boolean;
};

export type PostListItem = PostMetadata & { slug: string };

/** Slugs for every `.mdx` file in the content directory. */
export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

/** Read just the exported `metadata` of a single post. */
export async function getPostMetadata(slug: string): Promise<PostMetadata> {
  const mod = await import(`@/content/blog/${slug}.mdx`);
  return mod.metadata as PostMetadata;
}

/** All published posts, newest first (drafts excluded). */
export async function getAllPosts(): Promise<PostListItem[]> {
  const posts = await Promise.all(
    getPostSlugs().map(async (slug) => ({
      slug,
      ...(await getPostMetadata(slug)),
    })),
  );

  return posts
    .filter((post) => !post.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Format an ISO date as e.g. "15 de junho de 2026" (pt-BR). */
export function formatPostDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
