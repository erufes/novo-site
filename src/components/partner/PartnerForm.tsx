"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { emailField, phoneField } from "@/lib/validators"

const partnershipTypes = [
  "Patrocínio / apoio financeiro",
  "Doação de materiais ou equipamentos",
  "Parceria acadêmica / pesquisa",
  "Palestra, workshop ou evento",
  "Estágio / oportunidades para membros",
  "Outro",
] as const

const schema = z.object({
  organization: z.string().min(2, "Informe o nome da organização"),
  contactName: z.string().min(2, "Informe o nome do responsável"),
  email: emailField(),
  phone: phoneField({ required: true }),
  website: z.string().optional(),
  partnershipType: z.string().min(1, "Selecione o tipo de parceria"),
  message: z.string().min(10, "Descreva a proposta (mínimo 10 caracteres)"),
})

type FormData = z.infer<typeof schema>

export function PartnerForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormData) {
    try {
      const res = await fetch("/api/seja-parceiro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => null)
        toast.error(body?.error ?? "Erro ao enviar. Tente novamente.")
        return
      }

      toast.success("Proposta enviada!", {
        description: `Obrigado, ${data.contactName}. Nossa diretoria entrará em contato em breve.`,
      })
      reset()
    } catch {
      toast.error("Erro ao enviar. Verifique sua conexão.")
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="organization">Organização / empresa</Label>
          <Input
            id="organization"
            placeholder="Nome da organização"
            {...register("organization")}
          />
          {errors.organization && (
            <p className="text-sm text-destructive">
              {errors.organization.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contactName">Responsável</Label>
          <Input
            id="contactName"
            placeholder="Seu nome"
            {...register("contactName")}
          />
          {errors.contactName && (
            <p className="text-sm text-destructive">
              {errors.contactName.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="contato@empresa.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Telefone</Label>
          <Input
            id="phone"
            type="tel"
            inputMode="tel"
            placeholder="(27) 99999-9999"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="website">
            Site{" "}
            <span className="font-normal text-muted-foreground">(opcional)</span>
          </Label>
          <Input
            id="website"
            placeholder="https://..."
            {...register("website")}
          />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="partnershipType">Tipo de parceria</Label>
          <select
            id="partnershipType"
            defaultValue=""
            className="h-9 w-full rounded-lg border border-input bg-transparent px-2.5 py-1 text-sm transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive"
            {...register("partnershipType")}
          >
            <option value="" disabled>
              Selecione...
            </option>
            {partnershipTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.partnershipType && (
            <p className="text-sm text-destructive">
              {errors.partnershipType.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Proposta</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Conte como você imagina a parceria com a ERUS..."
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />}
        Enviar proposta de parceria
      </Button>
    </form>
  )
}
