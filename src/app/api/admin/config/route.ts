import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabase } from '@/lib/supabase/server'
import { validateSession } from '@/lib/admin'

export async function GET(request: NextRequest) {
  try {
    const session = await validateSession(request)
    if ('error' in session) return session.error

    const supabase = createServerSupabase()

    const { data, error } = await supabase
      .from('site_config')
      .select('*')

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await validateSession(request)
    if ('error' in session) return session.error

    const { key, value } = await request.json()

    if (!key || value === undefined) {
      return NextResponse.json(
        { error: 'Campos key e value são obrigatórios' },
        { status: 400 }
      )
    }

    const supabase = createServerSupabase()

    const { data, error } = await supabase
      .from('site_config')
      .upsert(
        { key, value, updated_at: new Date().toISOString() } as never,
        { onConflict: 'key' }
      )
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}
