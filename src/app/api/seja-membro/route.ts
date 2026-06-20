import { NextRequest, NextResponse } from 'next/server'
import { isRateLimited, getClientIp } from '@/lib/rate-limit'
import { membershipApplicationSchema, parseBody } from '@/lib/validation'
import { deliverSubmission } from '@/lib/notifications'

const MAX_REQUESTS = 5
const WINDOW_MS = 60 * 1000

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request)
    if (isRateLimited(`seja-membro:${ip}`, MAX_REQUESTS, WINDOW_MS)) {
      return NextResponse.json(
        { error: 'Muitas requisições. Tente novamente em alguns minutos.' },
        { status: 429 }
      )
    }

    const parsed = await parseBody(request, membershipApplicationSchema)
    if (parsed.error) return parsed.error
    const d = parsed.data

    const ok = await deliverSubmission({
      kind: 'Pré-cadastro de membro',
      subject: `Pré-cadastro: ${d.name}`,
      replyTo: d.email,
      fields: [
        { label: 'Nome', value: d.name },
        { label: 'Email', value: d.email },
        ...(d.phone ? [{ label: 'Telefone', value: d.phone }] : []),
        { label: 'Curso', value: d.course },
        ...(d.period ? [{ label: 'Período', value: d.period }] : []),
        ...(d.interests ? [{ label: 'Áreas de interesse', value: d.interests }] : []),
        { label: 'Motivação', value: d.motivation },
      ],
    })

    if (!ok) {
      return NextResponse.json(
        { error: 'Não foi possível enviar o pré-cadastro. Tente novamente.' },
        { status: 502 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Pré-cadastro enviado com sucesso!',
    })
  } catch {
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}
