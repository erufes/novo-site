import Link from "next/link"
import Image from "next/image"
import { MapPin } from "lucide-react"
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/ui/social-icons"

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com/erusbot",
    icon: FacebookIcon,
  },
  { label: "GitHub", href: "https://github.com/erufes", icon: GithubIcon },
  {
    label: "Instagram",
    href: "https://instagram.com/erus.ufes",
    icon: InstagramIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/erus-ufes",
    icon: LinkedinIcon,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@erusteam",
    icon: YoutubeIcon,
  },
]

const navigationLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Projetos", href: "/projetos" },
  { label: "Conquistas", href: "/conquistas" },
  { label: "Membros", href: "/membros" },
  { label: "Blog", href: "/blog" },
]

const participateLinks = [
  { label: "Seja membro", href: "/seja-membro" },
  { label: "Seja parceiro", href: "/seja-parceiro" },
  { label: "Contato", href: "/contato" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink">
      {/* ES flag hairline */}
      <div
        aria-hidden
        className="h-0.5 bg-gradient-to-r from-es-blue via-white to-es-pink"
      />

      {/* Ghost wordmark */}
      <span
        aria-hidden
        className="font-display pointer-events-none absolute -bottom-10 right-0 select-none text-[26vw] font-bold leading-none tracking-tighter text-white/[0.025] lg:text-[18vw]"
      >
        ERUS
      </span>

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/robo_branco.png"
                alt=""
                width={48}
                height={48}
                className="h-11 w-auto"
              />
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                ERUS
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Equipe de robótica da Universidade Federal do Espírito Santo.
              Projetando robôs e formando engenheiros desde 2012.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center border border-white/10 text-white/50 transition-colors duration-300 hover:border-es-blue/50 hover:text-es-blue"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Navegação do rodapé">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.25em] text-white/35">
              Navegação
            </p>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="link-draw text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Participate */}
          <nav aria-label="Participe">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.25em] text-white/35">
              Participe
            </p>
            <ul className="space-y-3">
              {participateLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="link-draw text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Location */}
          <div>
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.25em] text-white/35">
              Onde estamos
            </p>
            <div className="flex items-start gap-3">
              <MapPin
                className="mt-0.5 size-4 shrink-0 text-es-blue"
                strokeWidth={1.6}
              />
              <address className="text-sm not-italic leading-relaxed text-white/60">
                CT-13, Sala 33 — Centro Tecnológico
                <br />
                Universidade Federal do Espírito Santo
                <br />
                Av. Fernando Ferrari, 514 — Goiabeiras
                <br />
                Vitória — ES
              </address>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <p className="font-mono text-[11px] tracking-wider text-white/35">
            © 2012–2026 ERUS — Equipe de Robótica da UFES
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/25">
            Vitória · Espírito Santo · Brasil
          </p>
        </div>
      </div>
    </footer>
  )
}
