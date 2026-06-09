import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { validateSession } from '@/lib/admin'

const pathMap: Record<string, string[]> = {
  members: ['/membros', '/sobre', '/'],
  posts: ['/blog', '/noticias', '/'],
  projects: ['/projetos', '/'],
  achievements: ['/conquistas', '/'],
  reports: ['/reportagens', '/'],
  courses: ['/seja-membro', '/'],
  config: ['/'],
  all: ['/', '/membros', '/sobre', '/blog', '/noticias', '/projetos', '/conquistas', '/reportagens', '/seja-membro', '/contato'],
}

export async function POST(request: NextRequest) {
  try {
    const session = await validateSession(request)
    if ('error' in session) return session.error

    const { path, type } = await request.json()

    // If a specific path is provided, revalidate it directly
    if (path) {
      revalidatePath(path)
      return NextResponse.json({ revalidated: true, path })
    }

    // If a type is provided, revalidate all associated paths
    if (type && pathMap[type]) {
      const paths = pathMap[type]
      for (const p of paths) {
        revalidatePath(p)
      }
      return NextResponse.json({ revalidated: true, paths })
    }

    return NextResponse.json(
      { error: 'Informe path ou type para revalidação' },
      { status: 400 }
    )
  } catch {
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}
