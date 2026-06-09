import type { MetadataRoute } from "next"

const BASE_URL = process.env.SITE_URL || "https://erus.ufes.br"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
