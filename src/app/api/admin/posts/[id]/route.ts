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

    // If publishing, set published_at
    if (body.is_published === true && !body.published_at) {
      body.published_at = new Date().toISOString()
    }

    const { data, error } = await supabase
      .from('posts')
      .update({ ...body, updated_at: new Date().toISOString() } as never)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    if (!data) {
      return NextResponse.json({ error: 'Post não encontrado' }, { status: 404 })
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

    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', id)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}
