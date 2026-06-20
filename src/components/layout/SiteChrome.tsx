"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

// Wraps every page with the public chrome (navbar/footer) and forces the
// light theme. Navbar and footer arrive as slots so they stay
// server-rendered; this component only exists to provide the client-side
// ThemeProvider/Toaster without forcing request APIs into the root layout.
export function SiteChrome({
  navbar,
  footer,
  children,
}: {
  navbar: React.ReactNode
  footer: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <ThemeProvider forcedTheme="light">
      {navbar}
      <main className="flex-1">{children}</main>
      {footer}
      <Toaster />
    </ThemeProvider>
  )
}
