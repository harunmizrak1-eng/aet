"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useAssessment } from "@/components/assessment"

const LINKS = [
  { href: "/#danismanlik", label: "Protokoller" },
  { href: "/peptidler", label: "Monograflar" },
  { href: "/journal", label: "Journal" },
  { href: "/metodoloji", label: "Hakkımızda" },
  { href: "/longevity-skoru", label: "Longevity Skoru" },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const { open: openAssessment } = useAssessment()

  useEffect(() => {
    if (!open) return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
          className="flex items-baseline gap-1.5 font-serif text-xl text-foreground transition-opacity hover:opacity-70"
          onClick={() => setOpen(false)}
        >
          Æterna
          <em className="font-serif text-xl italic text-gold">method</em>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm text-muted-foreground transition-colors hover:text-foreground ${
                link.label === "Longevity Skoru" ? "hidden xl:inline" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => openAssessment()}
            className="hidden rounded-full border border-hairline px-5 py-2 text-sm text-foreground transition-colors hover:border-gold/50 hover:text-gold sm:inline-block"
          >
            Başvur
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground lg:hidden"
          >
            {open ? "Kapat" : "Menü"}
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav-panel"
        className={`overflow-hidden border-t border-hairline transition-[max-height] duration-300 ease-in-out lg:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-2">
          {LINKS.map((link) => (
            <li key={link.label} className="border-b border-hairline last:border-b-0">
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] items-center text-[0.7rem] uppercase tracking-eyebrow text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
