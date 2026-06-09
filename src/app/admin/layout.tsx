"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { toast } from "sonner"
import {
  LayoutDashboard,
  Users,
  FileText,
  Rocket,
  Trophy,
  Newspaper,
  GraduationCap,
  Settings,
  LogOut,
  Menu,
} from "lucide-react"

const NAV_ITEMS = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/membros", label: "Membros", icon: Users },
  { href: "/admin/blog", label: "Blog", icon: FileText },
  { href: "/admin/projetos", label: "Projetos", icon: Rocket },
  { href: "/admin/conquistas", label: "Conquistas", icon: Trophy },
  { href: "/admin/reportagens", label: "Reportagens", icon: Newspaper },
  { href: "/admin/cursos", label: "Cursos", icon: GraduationCap },
  { href: "/admin/config", label: "Configuracoes", icon: Settings },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [authenticated, setAuthenticated] = useState<boolean | null>(null)

  const isLoginPage = pathname === "/admin"

  useEffect(() => {
    if (isLoginPage) {
      setAuthenticated(true)
      return
    }

    fetch("/api/auth/session", { credentials: "same-origin" })
      .then((res) => {
        if (!res.ok) {
          router.push("/admin")
        } else {
          setAuthenticated(true)
        }
      })
      .catch(() => {
        router.push("/admin")
      })
  }, [isLoginPage, router])

  async function handleLogout() {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "same-origin",
      })
      toast.success("Logout realizado")
      router.push("/admin")
    } catch {
      toast.error("Erro ao fazer logout")
    }
  }

  if (isLoginPage) {
    return <>{children}</>
  }

  if (authenticated === null) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="size-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
    return (
      <nav className="flex flex-1 flex-col gap-1">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + "/")
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="size-4 shrink-0" />
              {item.label}
            </Link>
          )
        })}
      </nav>
    )
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop sidebar */}
      <aside className="hidden w-60 shrink-0 border-r bg-card lg:flex lg:flex-col">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/admin/dashboard" className="text-base font-bold">
            ERUS Admin
          </Link>
        </div>
        <div className="flex flex-1 flex-col gap-2 p-3">
          <NavLinks />
          <Button
            variant="ghost"
            className="mt-auto justify-start gap-3 text-muted-foreground"
            onClick={handleLogout}
          >
            <LogOut className="size-4" />
            Sair
          </Button>
        </div>
      </aside>

      {/* Main area */}
      <div className="flex flex-1 flex-col">
        {/* Top bar (mobile) */}
        <header className="flex h-14 items-center gap-3 border-b px-4 lg:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger render={<Button variant="ghost" size="icon" />}>
              <Menu className="size-5" />
              <span className="sr-only">Menu</span>
            </SheetTrigger>
            <SheetContent side="left" className="w-60 p-0">
              <SheetHeader className="border-b">
                <SheetTitle>ERUS Admin</SheetTitle>
              </SheetHeader>
              <div className="flex flex-1 flex-col gap-2 p-3">
                <NavLinks onNavigate={() => setMobileOpen(false)} />
                <Button
                  variant="ghost"
                  className="mt-auto justify-start gap-3 text-muted-foreground"
                  onClick={() => {
                    setMobileOpen(false)
                    handleLogout()
                  }}
                >
                  <LogOut className="size-4" />
                  Sair
                </Button>
              </div>
            </SheetContent>
          </Sheet>
          <span className="text-sm font-bold">ERUS Admin</span>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
