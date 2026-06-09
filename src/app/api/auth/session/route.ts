import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabase } from '@/lib/supabase/server'
import { getSession } from '@/lib/admin'

export async function GET(request: NextRequest) {
  try {
    const token = getSession(request)

    if (!token) {
      return NextResponse.json({ authenticated: false })
    }

    const supabase = createServerSupabase()
    const { data, error } = await supabase.auth.getUser(token)

    if (error || !data.user) {
      return NextResponse.json({ authenticated: false })
    }

    return NextResponse.json({
      authenticated: true,
      user: {
        id: data.user.id,
        email: data.user.email,
      },
    })
  } catch {
    return NextResponse.json({ authenticated: false })
  }
}
