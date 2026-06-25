import { NextResponse } from 'next/server'
import { z } from 'zod'
import { emailField, phoneField } from '@/lib/validators'

// Zod schemas for the public form endpoints. Unknown keys are stripped
// (zod object default), so only the expected fields reach the handlers.

export const contactSchema = z.object({
  name: z.string().trim().min(1, 'Nome é obrigatório').max(200),
  email: emailField(),
  subject: z.string().trim().min(1, 'Assunto é obrigatório').max(300),
  message: z.string().trim().min(1, 'Mensagem é obrigatória').max(5000),
})

// Pré-cadastro de membro: NÃO é uma inscrição em processo seletivo, apenas
// um registro de interesse para a equipe avisar quando as vagas abrirem.
export const membershipApplicationSchema = z.object({
  name: z.string().trim().min(2, 'Nome é obrigatório').max(200),
  email: emailField(),
  phone: phoneField({ required: true }),
  course: z.string().trim().min(1, 'Curso é obrigatório').max(120),
  period: z.string().trim().max(40).optional(),
  interests: z.string().trim().max(400).optional(),
  motivation: z
    .string()
    .trim()
    .min(10, 'Conte um pouco mais (mínimo 10 caracteres)')
    .max(3000),
})

// Proposta de parceria (empresas, laboratórios, patrocinadores).
export const partnerInquirySchema = z.object({
  contactName: z.string().trim().min(2, 'Nome é obrigatório').max(200),
  email: emailField(),
  phone: phoneField({ required: true }),
  organization: z.string().trim().min(2, 'Organização é obrigatória').max(200),
  website: z.string().trim().max(300).optional(),
  partnershipType: z.string().trim().min(1, 'Selecione o tipo de parceria').max(80),
  message: z
    .string()
    .trim()
    .min(10, 'Descreva a proposta (mínimo 10 caracteres)')
    .max(5000),
})

/**
 * Parses and validates the JSON body of a request. Returns either the
 * typed data or a ready-to-return 400 response with a PT-BR message.
 */
export async function parseBody<S extends z.ZodType>(
  request: Request,
  schema: S
): Promise<{ data: z.output<S>; error?: never } | { data?: never; error: NextResponse }> {
  let raw: unknown
  try {
    raw = await request.json()
  } catch {
    return {
      error: NextResponse.json({ error: 'Corpo da requisição inválido' }, { status: 400 }),
    }
  }

  const result = schema.safeParse(raw)
  if (!result.success) {
    const issue = result.error.issues[0]
    const field = issue?.path.join('.')
    const message = issue
      ? field
        ? `${field}: ${issue.message}`
        : issue.message
      : 'Dados inválidos'
    return { error: NextResponse.json({ error: message }, { status: 400 }) }
  }

  return { data: result.data }
}
