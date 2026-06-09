import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabase } from '@/lib/supabase/server'
import { validateSession } from '@/lib/admin'

type RouteParams = { params: Promise<{ id: string }> }

export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await validateSession(request)
    if ('error' in session) return session.error

    const { id } = await params
    const body = await request.json()
    const supabase = createServerSupabase()

    const { data, error } = await supabase
      .from('members')
      .update({ ...body, updated_at: new Date().toISOString() } as never)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    if (!data) {
      return NextResponse.json({ error: 'Membro não encontrado' }, { status: 404 })
    }

    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await validateSession(request)
    if ('error' in session) return session.error

    const { id } = await params
    const supabase = createServerSupabase()

    // Soft delete: set is_active to false
    const { data, error } = await supabase
      .from('members')
      .update({ is_active: false, updated_at: new Date().toISOString() } as never)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    if (!data) {
      return NextResponse.json({ error: 'Membro não encontrado' }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}
