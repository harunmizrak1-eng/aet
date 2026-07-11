"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useAssessment } from "@/components/assessment"

// Mirrors aeternamethod.com's own menu: a simple, flat editorial nav.
const LINKS = [
  { href: "/#protokoller", label: "Protokoller" },
  { href: "/peptidler", label: "Monograflar" },
  { href: "/journal", label: "Derleme" },
  { href: "/longevity-skoru", label: "Longevity Skoru" },
  { href: "/metodoloji", label: "Hakkımızda" },
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="wordmark text-xl text-foreground transition-opacity hover:opacity-70"
          onClick={() => setOpen(false)}
        >
          Æterna <em className="serif-accent">method</em>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm text-foreground transition-colors hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
          <span aria-hidden="true" className="h-4 w-px bg-hairline" />
          <Link
            href="/uye"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Giriş
          </Link>
          <button
            type="button"
            onClick={() => openAssessment()}
            className="rounded-full bg-foreground px-5 py-2 text-sm text-background transition-opacity hover:opacity-85"
          >
            Başvur
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          className="text-sm text-foreground transition-colors hover:text-gold lg:hidden"
        >
          {open ? "Kapat" : "Menü"}
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        id="mobile-nav-panel"
        className={`overflow-hidden border-t border-hairline transition-[max-height] duration-300 ease-in-out lg:hidden ${
          open ? "max-h-[34rem]" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-3">
          {[...LINKS, { href: "/uye", label: "Giriş / Üye ol" }].map((l) => (
            <li key={l.label} className="border-b border-hairline last:border-b-0">
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[46px] items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <button
              type="button"
              onClick={() => {
                setOpen(false)
                openAssessment()
              }}
              className="w-full rounded-full bg-foreground px-5 py-3 text-sm text-background"
            >
              Başvur
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}
