import type { Metadata } from "next"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params

  return {
    title: `${slug} — Blog`,
    description: "Post do blog da ERUS - Equipe de Robótica da UFES.",
  }
}

export default async function BlogPostPage({ params }: Props) {
  // For now, no posts exist — always return not found
  await params
  notFound()
}
