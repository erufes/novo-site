"use client"

import { useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { toast } from "sonner"
import { Plus, Pencil, Trash2 } from "lucide-react"
import type { Member } from "@/types/database"

const COURSES = [
  "Engenharia de Computacao",
  "Engenharia Eletrica",
  "Engenharia Mecanica",
  "Ciencia da Computacao",
  "Engenharia de Producao",
  "Outro",
]

const EMPTY_FORM = {
  name: "",
  course: "",
  github_username: "",
  year_joined: new Date().getFullYear(),
  year_left: null as number | null,
  is_professor: false,
}

export default function MembrosPage() {
  const [members, setMembers] = useState<Member[]>([])
  const [loading, setLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState(EMPTY_FORM)
  const [saving, setSaving] = useState(false)

  const fetchMembers = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/members", { credentials: "same-origin" })
      if (res.ok) {
        setMembers(await res.json())
      }
    } catch {
      toast.error("Erro ao carregar membros")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchMembers()
  }, [fetchMembers])

  function openCreate() {
    setEditingId(null)
    setForm(EMPTY_FORM)
    setDialogOpen(true)
  }

  function openEdit(member: Member) {
    setEditingId(member.id)
    setForm({
      name: member.name,
      course: member.course,
      github_username: member.github_username,
      year_joined: member.year_joined,
      year_left: member.year_left,
      is_professor: member.is_professor,
    })
    setDialogOpen(true)
  }

  async function handleSave() {
    if (!form.name.trim()) {
      toast.error("Nome é obrigatório")
      return
    }

    setSaving(true)
    try {
      const url = editingId
        ? `/api/admin/members/${editingId}`
        : "/api/admin/members"
      const method = editingId ? "PUT" : "POST"

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error()

      toast.success(editingId ? "Membro atualizado!" : "Membro criado!")
      setDialogOpen(false)
      fetchMembers()
    } catch {
      toast.error("Erro ao salvar membro")
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Tem certeza que deseja excluir este membro?")) return

    try {
      const res = await fetch(`/api/admin/members/${id}`, {
        method: "DELETE",
        credentials: "same-origin",
      })
      if (!res.ok) throw new Error()
      toast.success("Membro excluido!")
      fetchMembers()
    } catch {
      toast.error("Erro ao excluir membro")
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Membros</h1>
        <Button onClick={openCreate}>
          <Plus className="size-4" data-icon="inline-start" />
          Novo Membro
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
                <th className="px-4 py-3 font-medium">Nome</th>
                <th className="px-4 py-3 font-medium">Curso</th>
                <th className="hidden px-4 py-3 font-medium sm:table-cell">Ano Ingresso</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id} className="border-b last:border-0">
                  <td className="px-4 py-3 font-medium">{member.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{member.course}</td>
                  <td className="hidden px-4 py-3 text-muted-foreground sm:table-cell">
                    {member.year_joined}
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant={member.is_active ? "default" : "secondary"}>
                      {member.is_active ? "Ativo" : "Egresso"}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button variant="ghost" size="icon-sm" onClick={() => openEdit(member)}>
                        <Pencil className="size-3.5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        className="text-destructive"
                        onClick={() => handleDelete(member.id)}
                      >
                        <Trash2 className="size-3.5" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
              {members.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                    Nenhum membro cadastrado.
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
            <DialogTitle>{editingId ? "Editar Membro" : "Novo Membro"}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Curso</Label>
              <Select value={form.course} onValueChange={(val) => val && setForm({ ...form, course: val })}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione o curso" />
                </SelectTrigger>
                <SelectContent>
                  {COURSES.map((course) => (
                    <SelectItem key={course} value={course}>
                      {course}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="github">GitHub Username</Label>
              <Input
                id="github"
                value={form.github_username}
                onChange={(e) => setForm({ ...form, github_username: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="year_joined">Ano Ingresso</Label>
                <Input
                  id="year_joined"
                  type="number"
                  value={form.year_joined}
                  onChange={(e) => setForm({ ...form, year_joined: Number(e.target.value) })}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="year_left">Ano Saida</Label>
                <Input
                  id="year_left"
                  type="number"
                  placeholder="Ainda ativo"
                  value={form.year_left ?? ""}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      year_left: e.target.value ? Number(e.target.value) : null,
                    })
                  }
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Switch
                checked={form.is_professor}
                onCheckedChange={(checked) => setForm({ ...form, is_professor: !!checked })}
              />
              <Label>Professor</Label>
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
