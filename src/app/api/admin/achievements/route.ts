import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabase } from '@/lib/supabase/server'
import { validateSession } from '@/lib/admin'

export async function GET(request: NextRequest) {
  try {
    const session = await validateSession(request)
    if ('error' in session) return session.error

    const supabase = createServerSupabase()

    const { data, error } = await supabase
      .from('achievements')
      .select('*')
      .order('year', { ascending: false })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await validateSession(request)
    if ('error' in session) return session.error

    const body = await request.json()
    const supabase = createServerSupabase()

    const { data, error } = await supabase
      .from('achievements')
      .insert(body)
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json(data, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}
