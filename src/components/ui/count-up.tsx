"use client"

import { useEffect, useRef, useState } from "react"
import { MotionGlobalConfig, useInView, useReducedMotion } from "framer-motion"

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
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const reduceMotion = useReducedMotion()
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
