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

const contactSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email invalido"),
  assunto: z.string().min(3, "Assunto deve ter pelo menos 3 caracteres"),
  mensagem: z
    .string()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres"),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(data: ContactFormData) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.nome,
          email: data.email,
          subject: data.assunto,
          message: data.mensagem,
        }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => null)
        toast.error(body?.error ?? "Erro ao enviar mensagem. Tente novamente.")
        return
      }

      toast.success("Mensagem enviada com sucesso!", {
        description: `Obrigado pelo contato, ${data.nome}. Responderemos em breve.`,
      })

      reset()
    } catch {
      toast.error("Erro ao enviar mensagem. Verifique sua conexão.")
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="nome">Nome</Label>
        <Input
          id="nome"
          placeholder="Seu nome"
          {...register("nome")}
        />
        {errors.nome && (
          <p className="text-sm text-destructive">{errors.nome.message}</p>
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
        <Label htmlFor="assunto">Assunto</Label>
        <Input
          id="assunto"
          placeholder="Assunto da mensagem"
          {...register("assunto")}
        />
        {errors.assunto && (
          <p className="text-sm text-destructive">{errors.assunto.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="mensagem">Mensagem</Label>
        <Textarea
          id="mensagem"
          placeholder="Escreva sua mensagem..."
          rows={5}
          {...register("mensagem")}
        />
        {errors.mensagem && (
          <p className="text-sm text-destructive">{errors.mensagem.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />}
        Enviar mensagem
      </Button>
    </form>
  )
}
