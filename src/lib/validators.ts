import { z } from 'zod'

// Validadores compartilhados pelos formulários públicos — usados tanto no
// cliente (componentes "use client") quanto no servidor (rotas /api). Mantido
// livre de imports do Next para poder ser importado dos dois lados.

/** Campo de email padrão dos formulários. */
export function emailField() {
  return z.email('Email inválido').max(320)
}

/**
 * Valida um telefone brasileiro pela contagem de dígitos, ignorando a
 * formatação. Aceita parênteses, espaços, traços e o código do país +55
 * opcional. Aceita celular e fixo:
 *
 *  - Celular: 11 dígitos — DDD + "9" + 8 dígitos.
 *  - Fixo:    10 dígitos — DDD + número começando em 2–5.
 *
 * Exemplos aceitos: "(27) 99999-9999", "27999999999", "+55 27 99999-9999",
 * "(27) 3333-4444", "2733334444".
 */
export function isBrazilianPhone(value: string): boolean {
  const digits = value.replace(/\D/g, '')
  const local =
    digits.length > 11 && digits.startsWith('55') ? digits.slice(2) : digits

  // DDD válido: 2 dígitos sem começar com 0.
  if (!/^[1-9][0-9]/.test(local)) return false

  // Celular (11 dígitos): o terceiro dígito é o "9".
  if (local.length === 11) return local[2] === '9'
  // Fixo (10 dígitos): o terceiro dígito é de 2 a 5.
  if (local.length === 10) return local[2] >= '2' && local[2] <= '5'
  return false
}

const PHONE_MESSAGE = 'Telefone inválido. Inclua o DDD, ex.: (27) 99999-9999'

/**
 * Campo de telefone (celular ou fixo). Com `required: true`, exige um número
 * válido. Com `required: false`, aceita vazio mas valida o formato quando
 * preenchido.
 */
export function phoneField({ required }: { required: boolean }) {
  if (required) {
    return z
      .string({ error: 'Telefone é obrigatório' })
      .trim()
      .min(1, 'Telefone é obrigatório')
      .max(40)
      .refine(isBrazilianPhone, PHONE_MESSAGE)
  }

  return z
    .string()
    .trim()
    .max(40)
    .refine((v) => v === '' || isBrazilianPhone(v), PHONE_MESSAGE)
    .optional()
}
