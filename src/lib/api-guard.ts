import { NextRequest, NextResponse } from 'next/server'

const ALLOWED_ORIGINS = [
  process.env.SITE_URL,
  'http://localhost:3000',
].filter(Boolean) as string[]

export function validateInternalRequest(request: NextRequest): NextResponse | null {
  const origin = request.headers.get('origin')
  const referer = request.headers.get('referer')

  const isAllowed = ALLOWED_ORIGINS.some(
    (allowed) => origin === allowed || referer?.startsWith(allowed)
  )

  if (!isAllowed) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  return null
}

export function validateSession(request: NextRequest): string | null {
  const session = request.cookies.get('admin-session')
  return session?.value ?? null
}
