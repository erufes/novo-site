import { NextRequest } from 'next/server'

// In-memory sliding-window rate limiting. Resets on deploy/restart,
// which is acceptable for abuse protection on a small site.

type Bucket = { count: number; resetTime: number }

const buckets = new Map<string, Bucket>()
const MAX_TRACKED_KEYS = 5000

function pruneExpired(now: number) {
  for (const [key, bucket] of buckets) {
    if (now > bucket.resetTime) buckets.delete(key)
  }
}

/**
 * Returns true when `key` exceeded `limit` calls within `windowMs`.
 * Use a namespaced key, e.g. `login:<ip>` or `contact:<ip>`.
 */
export function isRateLimited(
  key: string,
  limit: number,
  windowMs: number
): boolean {
  const now = Date.now()

  if (buckets.size >= MAX_TRACKED_KEYS) {
    pruneExpired(now)
    // Still full after pruning: fail open rather than block everyone.
    if (buckets.size >= MAX_TRACKED_KEYS) return false
  }

  const bucket = buckets.get(key)

  if (!bucket || now > bucket.resetTime) {
    buckets.set(key, { count: 1, resetTime: now + windowMs })
    return false
  }

  bucket.count++
  return bucket.count > limit
}

export function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  return request.headers.get('x-real-ip') ?? 'unknown'
}
