import { z } from 'zod'

// Validadores compartilhados pelos formulários públicos — usados tanto no
// cliente (componentes "use client") quanto no servidor (rotas /api). Mantido
// livre de imports do Next para poder ser importado dos dois lados.

/** Campo de email padrão dos formulários. */
export function emailField() {
  return z.email('Email inválido').max(320)
}

/**
 * Valida um celular brasileiro pela contagem de dígitos, ignorando a
 * formatação. Aceita parênteses, espaços, traços e o código do país +55
 * opcional. Regra: 11 dígitos no formato local (DDD + 9 + 8 dígitos), com o
 * "9" inicial obrigatório do celular.
 *
 * Exemplos aceitos: "(27) 99999-9999", "27999999999", "+55 27 99999-9999".
 */
export function isBrazilianMobile(value: string): boolean {
  const digits = value.replace(/\D/g, '')
  const local =
    digits.length > 11 && digits.startsWith('55') ? digits.slice(2) : digits
  return local.length === 11 && local[2] === '9'
}

const MOBILE_MESSAGE = 'Celular inválido. Use o formato (DD) 9XXXX-XXXX'

/**
 * Campo de celular. Com `required: true`, exige um número válido. Com
 * `required: false`, aceita vazio mas valida o formato quando preenchido.
 */
export function phoneField({ required }: { required: boolean }) {
  if (required) {
    return z
      .string({ error: 'Celular é obrigatório' })
      .trim()
      .min(1, 'Celular é obrigatório')
      .max(40)
      .refine(isBrazilianMobile, MOBILE_MESSAGE)
  }

  return z
    .string()
    .trim()
    .max(40)
    .refine((v) => v === '' || isBrazilianMobile(v), MOBILE_MESSAGE)
    .optional()
}
