import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabase } from '@/lib/supabase/server'

/**
 * Extracts the admin session token from the request cookies.
 */
export function getSession(request: NextRequest): string | null {
  return request.cookies.get('admin-session')?.value ?? null
}

/**
 * Validates the admin session by checking the token with Supabase auth.
 * Returns the user if valid, or a 401 NextResponse if not.
 */
export async function validateSession(request: NextRequest) {
  const token = getSession(request)

  if (!token) {
    return { error: NextResponse.json({ error: 'Não autenticado' }, { status: 401 }) }
  }

  const supabase = createServerSupabase()
  const { data, error } = await supabase.auth.getUser(token)

  if (error || !data.user) {
    return { error: NextResponse.json({ error: 'Sessão inválida' }, { status: 401 }) }
  }

  return { user: data.user }
}

/**
 * Generates a URL-friendly slug from a string.
 * Lowercases, removes accents, replaces spaces with hyphens, strips special chars.
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // remove accents
    .replace(/[^a-z0-9\s-]/g, '')   // remove special chars
    .replace(/\s+/g, '-')           // spaces to hyphens
    .replace(/-+/g, '-')            // collapse multiple hyphens
    .replace(/^-|-$/g, '')          // trim leading/trailing hyphens
}
