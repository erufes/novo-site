import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google"
import { headers } from "next/headers"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
})

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
})

const siteUrl = "https://www.erus.ufes.br"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ERUS - Equipe de Robótica da UFES",
    template: "%s | ERUS",
  },
  description:
    "Equipe de robótica da Universidade Federal do Espírito Santo. Desenvolvemos robôs autônomos, competimos nas maiores competições da América Latina e formamos engenheiros desde 2012.",
  keywords: [
    "robótica",
    "UFES",
    "ERUS",
    "equipe de robótica",
    "Espírito Santo",
    "Vitória",
    "competição de robótica",
    "engenharia",
    "VSSS",
    "seguidor de linha",
    "CBR",
    "LARC",
  ],
  authors: [{ name: "ERUS - Equipe de Robótica da UFES" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "ERUS - Equipe de Robótica da UFES",
    title: "ERUS - Equipe de Robótica da UFES",
    description:
      "Robôs autônomos, competições internacionais e formação de engenheiros na Universidade Federal do Espírito Santo, desde 2012.",
    images: [
      {
        url: "/logo_fundo_branco.png",
        width: 600,
        height: 600,
        alt: "Logo da ERUS - Equipe de Robótica da UFES",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "ERUS - Equipe de Robótica da UFES",
    description:
      "Robôs autônomos, competições internacionais e formação de engenheiros na UFES desde 2012.",
    images: ["/logo_fundo_branco.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ERUS - Equipe de Robótica da UFES",
  alternateName: "ERUS",
  url: siteUrl,
  logo: `${siteUrl}/logo_fundo_branco.png`,
  foundingDate: "2012",
  description:
    "Equipe de robótica da Universidade Federal do Espírito Santo. Desenvolve robôs autônomos para competições nacionais e internacionais e promove ensino de robótica para a comunidade.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Fernando Ferrari, 514 - Goiabeiras, CT-13, Sala 33",
    addressLocality: "Vitória",
    addressRegion: "ES",
    addressCountry: "BR",
  },
  parentOrganization: {
    "@type": "CollegeOrUniversity",
    name: "Universidade Federal do Espírito Santo",
    url: "https://www.ufes.br",
  },
  sameAs: [
    "https://facebook.com/erusbot",
    "https://github.com/erufes",
    "https://instagram.com/erus.ufes",
    "https://linkedin.com/company/erus-ufes",
    "https://youtube.com/@erusteam",
  ],
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const headersList = await headers()
  const pathname = headersList.get("x-next-pathname") ?? ""
  const isAdmin = pathname.startsWith("/admin")

  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <ThemeProvider forcedTheme={isAdmin ? undefined : "light"}>
          {!isAdmin && <Navbar />}
          <main className="flex-1">{children}</main>
          {!isAdmin && <Footer />}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
