"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { MotionConfig, MotionGlobalConfig } from "framer-motion"

// Deterministic rendering for visual-regression captures (?capture=1)
if (
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).has("capture")
) {
  MotionGlobalConfig.skipAnimations = true
}

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </NextThemesProvider>
  )
}
