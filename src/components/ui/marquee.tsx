"use client"

import { useEffect, useRef, useState } from "react"

type MarqueeProps = {
  items: string[]
  /** Scroll speed in pixels per second (constant at any resolution). */
  speed?: number
  className?: string
}

/**
 * Seamless, gapless infinite marquee.
 *
 * The list is rendered as N identical "sets" forming one period that is always
 * at least as wide as the container, then that period is duplicated once. The
 * track animates by exactly -50% (one period), so set K+period lands precisely
 * where set K was — no seam, no blank gap, on any screen width. The repeat
 * count and duration are recomputed on resize so spacing and speed stay even.
 */
export function Marquee({ items, speed = 45, className }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  // `sets` is always even: the first half and second half are identical.
  const [sets, setSets] = useState(4)
  const [duration, setDuration] = useState(24)

  useEffect(() => {
    const container = containerRef.current
    const track = trackRef.current
    if (!container || !track) return

    const recompute = () => {
      const setWidth = track.scrollWidth / sets
      if (!setWidth || !Number.isFinite(setWidth)) return

      const containerWidth = container.clientWidth || setWidth
      // Sets needed for one period to fully cover the container (+1 safety set).
      const periodSets = Math.max(1, Math.ceil(containerWidth / setWidth) + 1)
      const total = periodSets * 2
      const periodPx = periodSets * setWidth
      const nextDuration = Math.max(8, periodPx / speed)

      if (total !== sets) setSets(total)
      setDuration((prev) =>
        Math.abs(prev - nextDuration) > 0.5 ? nextDuration : prev,
      )
    }

    recompute()
    const observer = new ResizeObserver(recompute)
    observer.observe(container)
    window.addEventListener("resize", recompute)
    return () => {
      observer.disconnect()
      window.removeEventListener("resize", recompute)
    }
  }, [sets, items, speed])

  return (
    <div
      ref={containerRef}
      className={`marquee-mask overflow-hidden ${className ?? ""}`}
    >
      <div
        ref={trackRef}
        className="animate-marquee flex w-max"
        style={{ animationDuration: `${duration}s` }}
      >
        {Array.from({ length: sets }).flatMap((_, setIndex) =>
          items.map((name, itemIndex) => (
            <span
              key={`${setIndex}-${itemIndex}-${name}`}
              aria-hidden={setIndex > 0}
              className="mr-16 inline-flex shrink-0 items-center gap-8 font-mono text-xs uppercase tracking-[0.3em] text-white/30"
            >
              {name}
              <span className="text-es-blue/40">/</span>
            </span>
          )),
        )}
      </div>
    </div>
  )
}
