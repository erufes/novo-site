"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "sonner"
import { Save, Send } from "lucide-react"
import type { Post } from "@/types/database"

const CATEGORIES = [
  { value: "noticias", label: "Noticias" },
  { value: "eventos", label: "Eventos" },
  { value: "ensino", label: "Ensino" },
  { value: "projetos", label: "Projetos" },
  { value: "geral", label: "Geral" },
]

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

export default function EditPostPage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string

  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    category: "geral",
    tags: "",
    cover_image_url: "",
    content: "",
    is_published: false,
  })

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch("/api/admin/posts", { credentials: "same-origin" })
        if (!res.ok) throw new Error()
        const posts: Post[] = await res.json()
        const post = posts.find((p) => p.id === id)
        if (!post) {
          toast.error("Post não encontrado")
          router.push("/admin/blog")
          return
        }
        setForm({
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt || "",
          category: post.category || "geral",
          tags: (post.tags || []).join(", "),
          cover_image_url: post.cover_image_url || "",
          content: post.content || "",
          is_published: post.is_published,
        })
      } catch {
        toast.error("Erro ao carregar post")
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [id, router])

  function handleTitleChange(title: string) {
    setForm((prev) => ({
      ...prev,
      title,
      slug: prev.slug === generateSlug(prev.title) || prev.slug === ""
        ? generateSlug(title)
        : prev.slug,
    }))
  }

  async function handleSave(publish: boolean) {
    if (!form.title.trim()) {
      toast.error("Título é obrigatório")
      return
    }

    setSaving(true)
    try {
      const res = await fetch(`/api/admin/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({
          ...form,
          slug: form.slug || generateSlug(form.title),
          tags: form.tags
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean),
          is_published: publish,
          published_at: publish ? new Date().toISOString() : null,
        }),
      })

      if (!res.ok) throw new Error()

      toast.success(publish ? "Post publicado!" : "Rascunho salvo!")
      router.push("/admin/blog")
    } catch {
      toast.error("Erro ao salvar post")
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-64 w-full" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Editar Post</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => handleSave(false)} disabled={saving}>
            <Save className="size-4" data-icon="inline-start" />
            Salvar Rascunho
          </Button>
          <Button onClick={() => handleSave(true)} disabled={saving}>
            <Send className="size-4" data-icon="inline-start" />
            Publicar
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="title">Título</Label>
            <Input
              id="title"
              value={form.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Título do post"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="slug">Slug</Label>
            <Input
              id="slug"
              value={form.slug}
              onChange={(e) => setForm({ ...form, slug: e.target.value })}
              placeholder="titulo-do-post"
              className="font-mono text-xs"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="excerpt">Resumo</Label>
            <Textarea
              id="excerpt"
              value={form.excerpt}
              onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
              placeholder="Breve descrição do post..."
              className="min-h-20"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="content">Conteudo</Label>
            <Textarea
              id="content"
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              placeholder="Escreva o conteúdo do post aqui..."
              className="min-h-64"
            />
          </div>
        </div>

        <Card className="h-fit">
          <CardHeader>
            <CardTitle className="text-sm">Opcoes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-2">
              <Label>Categoria</Label>
              <Select
                value={form.category}
                onValueChange={(val) => val && setForm({ ...form, category: val })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="tags">Tags (separadas por virgula)</Label>
              <Input
                id="tags"
                value={form.tags}
                onChange={(e) => setForm({ ...form, tags: e.target.value })}
                placeholder="robótica, competição, ..."
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="cover">Imagem de Capa (URL)</Label>
              <Input
                id="cover"
                value={form.cover_image_url}
                onChange={(e) => setForm({ ...form, cover_image_url: e.target.value })}
                placeholder="https://..."
              />
              <Button variant="outline" size="sm" disabled className="w-full">
                Upload (em breve)
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
