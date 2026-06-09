import { NextRequest } from 'next/server'

const SEVEN_DAYS_IN_SECONDS = 7 * 24 * 60 * 60

export function createSessionCookie(token: string): string {
  return `admin-session=${token}; HttpOnly; Secure; SameSite=Strict; Path=/admin; Max-Age=${SEVEN_DAYS_IN_SECONDS}`
}

export function parseSessionCookie(request: NextRequest): string | null {
  const session = request.cookies.get('admin-session')
  return session?.value ?? null
}

export function clearSessionCookie(): string {
  return 'admin-session=; HttpOnly; Secure; SameSite=Strict; Path=/admin; Max-Age=0'
}
