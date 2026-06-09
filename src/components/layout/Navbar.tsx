"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ArrowRight, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

const navItems = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Projetos", href: "/projetos" },
  { label: "Conquistas", href: "/conquistas" },
  { label: "Membros", href: "/membros" },
  { label: "Blog", href: "/blog" },
] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md transition-[border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-border shadow-[0_4px_24px_-12px_rgba(6,15,29,0.25)]"
          : "border-transparent"
      }`}
    >
      {/* ES flag hairline */}
      <div
        aria-hidden
        className="h-0.5 bg-gradient-to-r from-es-blue via-white to-es-pink"
      />

      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center select-none">
          <Image
            src="/so_erus.svg"
            alt="ERUS - Equipe de Robótica da UFES"
            width={140}
            height={34}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href)

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`link-draw py-1.5 text-[13px] font-medium tracking-wide transition-colors ${
                    isActive
                      ? "text-erus [background-size:100%_1.5px]"
                      : "text-foreground/65 hover:text-erus"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link
            href="/seja-membro"
            className="group hidden items-center gap-2 rounded-sm bg-erus px-5 py-2.5 text-[13px] font-semibold text-white transition-colors duration-300 hover:bg-erus-light lg:inline-flex"
          >
            Seja membro
            <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>

          {/* Mobile hamburger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="lg:hidden"
                  aria-label="Abrir menu"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>

            <SheetContent side="right" className="w-72 p-0">
              <SheetHeader className="border-b px-6 py-5">
                <SheetTitle>
                  <Image
                    src="/so_erus.svg"
                    alt="ERUS"
                    width={110}
                    height={27}
                    className="h-7 w-auto"
                  />
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-0.5 px-3 py-3">
                {navItems.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href)

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`rounded-sm px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground ${
                        isActive
                          ? "bg-erus/10 text-erus"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                })}

                <Link
                  href="/seja-membro"
                  onClick={() => setMobileOpen(false)}
                  className="mt-3 inline-flex items-center justify-center gap-2 rounded-sm bg-erus px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-erus-light"
                >
                  Seja membro
                  <ArrowRight className="size-4" />
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
