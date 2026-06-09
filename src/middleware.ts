import { NextRequest, NextResponse } from 'next/server'

const ALLOWED_ORIGINS = [
  process.env.SITE_URL,
  'http://localhost:3000',
].filter(Boolean) as string[]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Protect /admin/* routes (except /admin itself, which is the login page)
  if (pathname.startsWith('/admin/')) {
    const session = request.cookies.get('admin-session')

    if (!session?.value) {
      const loginUrl = new URL('/admin', request.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  // Protect /api/admin/* routes: check origin header
  if (pathname.startsWith('/api/admin/')) {
    const origin = request.headers.get('origin')
    const referer = request.headers.get('referer')

    const isAllowed = ALLOWED_ORIGINS.some(
      (allowed) => origin === allowed || referer?.startsWith(allowed)
    )

    if (!isAllowed) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
  }

  // Set pathname header for root layout to detect admin routes
  const response = NextResponse.next()
  response.headers.set('x-next-pathname', pathname)
  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
