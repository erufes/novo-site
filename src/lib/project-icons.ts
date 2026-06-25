import {
  Bot,
  Box,
  Car,
  FlaskConical,
  Gauge,
  Goal,
  Lightbulb,
  Monitor,
  Shield,
  type LucideIcon,
} from "lucide-react"

/** Lucide icon for each project slug (replaces the old emoji field). */
export const projectIcons: Record<string, LucideIcon> = {
  "seguidor-de-linhas": Gauge,
  vsss: Goal,
  "simulacao-2d": Monitor,
  sumo: Shield,
  open: Lightbulb,
  duckietown: Car,
  pdr: FlaskConical,
  cuberus: Box,
}

export const defaultProjectIcon: LucideIcon = Bot

export function getProjectIcon(slug: string): LucideIcon {
  return projectIcons[slug] ?? defaultProjectIcon
}
