"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useAssessment } from "@/components/assessment"
import { contactEmail, whatsappLink } from "@/lib/contact"

// Primary destinations, shown in the slide-in sidebar (aeternamethod.com style).
const LINKS = [
  { href: "/#protokoller", label: "Protokoller" },
  { href: "/peptidler", label: "Monograflar" },
  { href: "/journal", label: "Derleme" },
  { href: "/longevity-skoru", label: "Longevity Skoru" },
  { href: "/biyobelirtecler", label: "Biyobelirteç Sözlüğü" },
  { href: "/metodoloji", label: "Hakkımızda" },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const { open: openAssessment } = useAssessment()

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <Link
            href="/"
            className="wordmark text-xl text-foreground transition-opacity hover:opacity-70"
          >
            Æterna <em className="serif-accent">method</em>
          </Link>

          <div className="flex items-center gap-3 sm:gap-5">
            <button
              type="button"
              onClick={() => openAssessment()}
              className="rounded-full bg-foreground px-5 py-2 text-sm text-background transition-opacity hover:opacity-85"
            >
              Başvur
            </button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="sidebar-menu"
              aria-label="Menüyü aç"
              className="flex flex-col items-end gap-[5px] py-2"
            >
              <span className="block h-px w-6 bg-foreground" />
              <span className="block h-px w-6 bg-foreground" />
              <span className="block h-px w-4 bg-foreground" />
            </button>
          </div>
        </nav>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-[#20221d]/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Sidebar drawer */}
      <aside
        id="sidebar-menu"
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-[420px] flex-col bg-[#20221d] px-8 py-6 text-[#f4f1ea] transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-10 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="wordmark text-lg">
            Æterna <em className="serif-accent">method</em>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Menüyü kapat"
            className="text-2xl text-[#f4f1ea]/70 transition-colors hover:text-[#f4f1ea]"
          >
            ✕
          </button>
        </div>

        <nav className="mt-14 flex flex-1 flex-col gap-1">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-[#f4f1ea]/12 py-4 font-serif text-3xl font-normal text-[#f4f1ea]/90 transition-colors hover:text-[#f4f1ea]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 flex flex-col gap-4">
          <button
            type="button"
            onClick={() => {
              setOpen(false)
              openAssessment()
            }}
            className="rounded-full bg-[#f4f1ea] px-6 py-3.5 text-sm text-[#20221d] transition-opacity hover:opacity-85"
          >
            Ön değerlendirmeye başla
          </button>
          <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-eyebrow text-[#f4f1ea]/60">
            <Link href="/uye" onClick={() => setOpen(false)} className="hover:text-[#f4f1ea]">
              Üye girişi
            </Link>
            <a
              href={whatsappLink("Merhaba, ÆTERNA hakkında bilgi almak istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f4f1ea]"
            >
              WhatsApp
            </a>
            <a href={`mailto:${contactEmail}`} className="hover:text-[#f4f1ea]">
              İletişim
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}
