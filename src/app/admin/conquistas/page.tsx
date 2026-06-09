"use client"

import { useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { toast } from "sonner"
import { Plus, Pencil, Trash2 } from "lucide-react"
import type { Achievement } from "@/types/database"

const EMPTY_FORM = {
  title: "",
  description: "",
  competition: "",
  position: "",
  year: new Date().getFullYear(),
  category: "",
}

export default function ConquistasPage() {
  const [achievements, setAchievements] = useState<Achievement[]>([])
  const [loading, setLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState(EMPTY_FORM)
  const [saving, setSaving] = useState(false)

  const fetchAchievements = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/achievements", { credentials: "same-origin" })
      if (res.ok) setAchievements(await res.json())
    } catch {
      toast.error("Erro ao carregar conquistas")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchAchievements()
  }, [fetchAchievements])

  function openCreate() {
    setEditingId(null)
    setForm(EMPTY_FORM)
    setDialogOpen(true)
  }

  function openEdit(item: Achievement) {
    setEditingId(item.id)
    setForm({
      title: item.title,
      description: item.description || "",
      competition: item.competition || "",
      position: item.position || "",
      year: item.year,
      category: item.category || "",
    })
    setDialogOpen(true)
  }

  async function handleSave() {
    if (!form.title.trim()) {
      toast.error("Título é obrigatório")
      return
    }

    setSaving(true)
    try {
      const url = editingId
        ? `/api/admin/achievements/${editingId}`
        : "/api/admin/achievements"
      const method = editingId ? "PUT" : "POST"

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error()
      toast.success(editingId ? "Conquista atualizada!" : "Conquista criada!")
      setDialogOpen(false)
      fetchAchievements()
    } catch {
      toast.error("Erro ao salvar conquista")
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Tem certeza que deseja excluir esta conquista?")) return

    try {
      const res = await fetch(`/api/admin/achievements/${id}`, {
        method: "DELETE",
        credentials: "same-origin",
      })
      if (!res.ok) throw new Error()
      toast.success("Conquista excluida!")
      fetchAchievements()
    } catch {
      toast.error("Erro ao excluir conquista")
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Conquistas</h1>
        <Button onClick={openCreate}>
          <Plus className="size-4" data-icon="inline-start" />
          Nova Conquista
        </Button>
      </div>

      {loading ? (
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-12 w-full" />
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50 text-left">
                <th className="px-4 py-3 font-medium">Título</th>
                <th className="hidden px-4 py-3 font-medium sm:table-cell">Competicao</th>
                <th className="hidden px-4 py-3 font-medium md:table-cell">Posicao</th>
                <th className="px-4 py-3 font-medium">Ano</th>
                <th className="px-4 py-3 font-medium text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {achievements.map((item) => (
                <tr key={item.id} className="border-b last:border-0">
                  <td className="px-4 py-3 font-medium">{item.title}</td>
                  <td className="hidden px-4 py-3 text-muted-foreground sm:table-cell">
                    {item.competition || "-"}
                  </td>
                  <td className="hidden px-4 py-3 text-muted-foreground md:table-cell">
                    {item.position || "-"}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{item.year}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button variant="ghost" size="icon-sm" onClick={() => openEdit(item)}>
                        <Pencil className="size-3.5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        className="text-destructive"
                        onClick={() => handleDelete(item.id)}
                      >
                        <Trash2 className="size-3.5" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
              {achievements.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                    Nenhuma conquista cadastrada.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{editingId ? "Editar Conquista" : "Nova Conquista"}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Título</Label>
              <Input
                id="title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="description">Descricao</Label>
              <Input
                id="description"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="competition">Competicao</Label>
              <Input
                id="competition"
                value={form.competition}
                onChange={(e) => setForm({ ...form, competition: e.target.value })}
                placeholder="Ex: CBR, LARC, ..."
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="position">Posicao</Label>
                <Input
                  id="position"
                  value={form.position}
                  onChange={(e) => setForm({ ...form, position: e.target.value })}
                  placeholder="1o lugar"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="year">Ano</Label>
                <Input
                  id="year"
                  type="number"
                  value={form.year}
                  onChange={(e) => setForm({ ...form, year: Number(e.target.value) })}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="category">Categoria</Label>
              <Input
                id="category"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                placeholder="Ex: Futebol de Robos, Seguidor de Linha, ..."
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSave} disabled={saving}>
              {saving ? "Salvando..." : "Salvar"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
