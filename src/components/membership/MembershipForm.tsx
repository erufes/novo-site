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

const schema = z.object({
  name: z.string().min(2, "Informe seu nome completo"),
  email: emailField(),
  phone: phoneField({ required: true }),
  course: z.string().min(2, "Informe seu curso"),
  period: z.string().optional(),
  interests: z.string().optional(),
  motivation: z
    .string()
    .min(10, "Conte um pouco mais (mínimo 10 caracteres)"),
})

type FormData = z.infer<typeof schema>

export function MembershipForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormData) {
    try {
      const res = await fetch("/api/seja-membro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => null)
        toast.error(body?.error ?? "Erro ao enviar. Tente novamente.")
        return
      }

      toast.success("Pré-cadastro enviado!", {
        description: `Obrigado, ${data.name}. Avisaremos você quando o próximo processo seletivo abrir.`,
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
          <Label htmlFor="name">Nome completo</Label>
          <Input id="name" placeholder="Seu nome" {...register("name")} />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="course">Curso</Label>
          <Input
            id="course"
            placeholder="Ex.: Engenharia de Computação"
            {...register("course")}
          />
          {errors.course && (
            <p className="text-sm text-destructive">{errors.course.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="period">
            Período{" "}
            <span className="font-normal text-muted-foreground">(opcional)</span>
          </Label>
          <Input id="period" placeholder="Ex.: 3º período" {...register("period")} />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="phone">Telefone / WhatsApp</Label>
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
          <Label htmlFor="interests">
            Áreas de interesse{" "}
            <span className="font-normal text-muted-foreground">(opcional)</span>
          </Label>
          <Input
            id="interests"
            placeholder="Ex.: programação, eletrônica, mecânica, visão computacional..."
            {...register("interests")}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="motivation">Por que você quer entrar na ERUS?</Label>
        <Textarea
          id="motivation"
          rows={4}
          placeholder="Conte um pouco sobre você e o que te motiva..."
          {...register("motivation")}
        />
        {errors.motivation && (
          <p className="text-sm text-destructive">{errors.motivation.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />}
        Enviar pré-cadastro
      </Button>
    </form>
  )
}
