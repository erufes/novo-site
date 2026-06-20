import { NextRequest, NextResponse } from 'next/server'
import { isRateLimited, getClientIp } from '@/lib/rate-limit'
import { partnerInquirySchema, parseBody } from '@/lib/validation'
import { deliverSubmission } from '@/lib/notifications'

const MAX_REQUESTS = 5
const WINDOW_MS = 60 * 1000

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request)
    if (isRateLimited(`seja-parceiro:${ip}`, MAX_REQUESTS, WINDOW_MS)) {
      return NextResponse.json(
        { error: 'Muitas requisições. Tente novamente em alguns minutos.' },
        { status: 429 }
      )
    }

    const parsed = await parseBody(request, partnerInquirySchema)
    if (parsed.error) return parsed.error
    const d = parsed.data

    const ok = await deliverSubmission({
      kind: 'Proposta de parceria',
      subject: `Parceria: ${d.organization}`,
      replyTo: d.email,
      fields: [
        { label: 'Organização', value: d.organization },
        { label: 'Contato', value: d.contactName },
        { label: 'Email', value: d.email },
        ...(d.phone ? [{ label: 'Telefone', value: d.phone }] : []),
        ...(d.website ? [{ label: 'Site', value: d.website }] : []),
        { label: 'Tipo de parceria', value: d.partnershipType },
        { label: 'Proposta', value: d.message },
      ],
    })

    if (!ok) {
      return NextResponse.json(
        { error: 'Não foi possível enviar a proposta. Tente novamente.' },
        { status: 502 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Proposta enviada com sucesso!',
    })
  } catch {
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}
