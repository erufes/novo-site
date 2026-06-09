"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Users, FileText, Rocket, Plus } from "lucide-react"

interface Stats {
  totalMembers: number
  activeMembers: number
  publishedPosts: number
  activeProjects: number
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const [membersRes, postsRes, projectsRes] = await Promise.all([
          fetch("/api/admin/members", { credentials: "same-origin" }),
          fetch("/api/admin/posts", { credentials: "same-origin" }),
          fetch("/api/admin/projects", { credentials: "same-origin" }),
        ])

        const members = membersRes.ok ? await membersRes.json() : []
        const posts = postsRes.ok ? await postsRes.json() : []
        const projects = projectsRes.ok ? await projectsRes.json() : []

        setStats({
          totalMembers: members.length,
          activeMembers: members.filter((m: { is_active: boolean }) => m.is_active).length,
          publishedPosts: posts.filter((p: { is_published: boolean }) => p.is_published).length,
          activeProjects: projects.filter((p: { is_active: boolean }) => p.is_active).length,
        })
      } catch {
        setStats({ totalMembers: 0, activeMembers: 0, publishedPosts: 0, activeProjects: 0 })
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  const statCards = [
    { label: "Total Membros", value: stats?.totalMembers, icon: Users, color: "text-blue-500" },
    { label: "Membros Ativos", value: stats?.activeMembers, icon: Users, color: "text-green-500" },
    { label: "Posts Publicados", value: stats?.publishedPosts, icon: FileText, color: "text-purple-500" },
    { label: "Projetos Ativos", value: stats?.activeProjects, icon: Rocket, color: "text-orange-500" },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((card) => {
          const Icon = card.icon
          return (
            <Card key={card.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {card.label}
                </CardTitle>
                <Icon className={`size-4 ${card.color}`} />
              </CardHeader>
              <CardContent>
                {loading ? (
                  <Skeleton className="h-8 w-16" />
                ) : (
                  <p className="text-2xl font-bold">{card.value}</p>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold">Ações Rápidas</h2>
        <div className="flex flex-wrap gap-3">
          <Button nativeButton={false} render={<Link href="/admin/blog/novo" />}>
            <Plus className="size-4" data-icon="inline-start" />
            Novo Post
          </Button>
          <Button variant="outline" nativeButton={false} render={<Link href="/admin/membros" />}>
            <Plus className="size-4" data-icon="inline-start" />
            Novo Membro
          </Button>
          <Button variant="outline" nativeButton={false} render={<Link href="/admin/projetos" />}>
            <Plus className="size-4" data-icon="inline-start" />
            Novo Projeto
          </Button>
        </div>
      </div>
    </div>
  )
}
