import type { MetadataRoute } from "next"
import { projects } from "@/data/projects"

const BASE_URL = process.env.SITE_URL || "https://erus.ufes.br"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/sobre`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/membros`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/projetos`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/conquistas`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/noticias`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/reportagens`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/seja-membro`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contato`, changeFrequency: "yearly", priority: 0.5 },
  ]

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/projetos/${project.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticPages, ...projectPages]
}
