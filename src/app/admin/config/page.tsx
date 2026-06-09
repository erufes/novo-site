"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { toast } from "sonner"
import { Save } from "lucide-react"

interface ConfigValues {
  tagline: string
  about_text: string
  recruitment_open: string
  recruitment_url: string
}

const DEFAULT_CONFIG: ConfigValues = {
  tagline: "",
  about_text: "",
  recruitment_open: "false",
  recruitment_url: "",
}

export default function ConfigPage() {
  const [config, setConfig] = useState<ConfigValues>(DEFAULT_CONFIG)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    async function fetchConfig() {
      try {
        const res = await fetch("/api/admin/config", { credentials: "same-origin" })
        if (res.ok) {
          const items: { key: string; value: string }[] = await res.json()
          const values = { ...DEFAULT_CONFIG }
          for (const item of items) {
            if (item.key in values) {
              values[item.key as keyof ConfigValues] = item.value
            }
          }
          setConfig(values)
        }
      } catch {
        toast.error("Erro ao carregar configurações")
      } finally {
        setLoading(false)
      }
    }

    fetchConfig()
  }, [])

  async function handleSave() {
    setSaving(true)
    try {
      const entries = Object.entries(config)
      await Promise.all(
        entries.map(([key, value]) =>
          fetch("/api/admin/config", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            credentials: "same-origin",
            body: JSON.stringify({ key, value }),
          })
        )
      )
      toast.success("Configuracoes salvas!")
    } catch {
      toast.error("Erro ao salvar configurações")
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-64 w-full" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Configuracoes</h1>
        <Button onClick={handleSave} disabled={saving}>
          <Save className="size-4" data-icon="inline-start" />
          {saving ? "Salvando..." : "Salvar"}
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Geral</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="tagline">Tagline</Label>
              <Input
                id="tagline"
                value={config.tagline}
                onChange={(e) => setConfig({ ...config, tagline: e.target.value })}
                placeholder="Frase de destaque do site"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="about_text">Texto Sobre</Label>
              <Textarea
                id="about_text"
                value={config.about_text}
                onChange={(e) => setConfig({ ...config, about_text: e.target.value })}
                placeholder="Texto descritivo sobre a ERUS..."
                className="min-h-32"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Processo Seletivo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Switch
                checked={config.recruitment_open === "true"}
                onCheckedChange={(checked) =>
                  setConfig({ ...config, recruitment_open: checked ? "true" : "false" })
                }
              />
              <Label>Processo seletivo aberto</Label>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="recruitment_url">URL do Formulario</Label>
              <Input
                id="recruitment_url"
                value={config.recruitment_url}
                onChange={(e) => setConfig({ ...config, recruitment_url: e.target.value })}
                placeholder="https://forms.google.com/..."
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
