"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useAssessment } from "@/components/assessment"
import { contactEmail } from "@/lib/contact"

const EXPLORE = [
  { href: "/#odak", label: "Odak Alanları" },
  { href: "/peptidler", label: "Peptid Kütüphanesi" },
  { href: "/biyobelirtecler", label: "Biyobelirteç Sözlüğü" },
  { href: "/journal", label: "Journal" },
  { href: "/longevity-skoru", label: "Longevity Skoru" },
]

const PRIMARY = [
  { href: "/#protokoller", label: "Protokoller" },
  { href: "/#uyelik", label: "Danışmanlık" },
  { href: `mailto:${contactEmail}`, label: "İletişim" },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [explore, setExplore] = useState(false)
  const { open: openAssessment } = useAssessment()
  const exploreRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false)
        setExplore(false)
      }
    }
    function onClick(e: MouseEvent) {
      if (exploreRef.current && !exploreRef.current.contains(e.target as Node)) {
        setExplore(false)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("mousedown", onClick)
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("mousedown", onClick)
    }
  }, [])

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

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <div className="relative" ref={exploreRef}>
            <button
              type="button"
              onClick={() => setExplore((v) => !v)}
              aria-expanded={explore}
              className="flex items-center gap-1.5 text-sm text-foreground transition-colors hover:text-gold"
            >
              Keşfet
              <span
                aria-hidden="true"
                className={`text-xs transition-transform ${explore ? "rotate-180" : ""}`}
              >
                ▾
              </span>
            </button>
            {explore && (
              <div className="absolute left-0 top-full mt-3 w-60 rounded-lg border border-hairline bg-surface p-2 shadow-lg shadow-foreground/5">
                {EXPLORE.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    onClick={() => setExplore(false)}
                    className="block rounded-md px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-[#ece7dc] hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {PRIMARY.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm text-foreground transition-colors hover:text-gold"
            >
              {l.label}
            </Link>
          ))}

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
          open ? "max-h-[32rem]" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-3">
          {[...EXPLORE, ...PRIMARY].map((l) => (
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
