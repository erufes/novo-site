"use client"

import { useEffect, useRef, useState } from "react"
import { MotionGlobalConfig, useReducedMotion } from "framer-motion"

type CountUpProps = {
  value: number
  duration?: number
  padStart?: number
  className?: string
}

/** Counts from 0 to `value` once when scrolled into view. */
export function CountUp({
  value,
  duration = 1.4,
  padStart = 0,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const reduceMotion = useReducedMotion()
  const [inView, setInView] = useState(false)

  // Fire once when the element is (or becomes) visible. We check the
  // current position synchronously on mount so an element already in the
  // viewport starts counting right away — a scroll-only trigger leaves the
  // number stuck at 0 when the stats sit at/above the fold on load — and
  // fall back to an IntersectionObserver for the scroll-into-view case.
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const isVisible = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      return rect.top < vh - 40 && rect.bottom > 0
    }

    if (isVisible()) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: "0px 0px -40px 0px" },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduceMotion || MotionGlobalConfig.skipAnimations) {
      setDisplay(value)
      return
    }
    let frame: number
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, duration, reduceMotion])

  return (
    <span ref={ref} className={className}>
      {String(display).padStart(padStart, "0")}
    </span>
  )
}
