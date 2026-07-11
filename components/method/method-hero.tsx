"use client"

import { useAssessment } from "@/components/assessment"

export function MethodHero() {
  const { open } = useAssessment()

  return (
    <section className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        playsInline
        loop
        poster="/images/editorial/eye-macro.webp"
        aria-hidden="true"
      >
        <source src="/videos/aeterna-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/85" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <p className="wordmark text-3xl text-foreground sm:text-4xl">
          Æterna <em className="serif-accent">method</em>
        </p>
        <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-foreground/80 sm:text-lg">
          Aeterna Method, peptid bilimini uzun ömür, toparlanma ve dayanıklılık
          için tutarlı bir sisteme dönüştüren eğitim odaklı bir pratiktir.
          Reçete yazmayız, okumayı öğretiriz.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => open()}
            className="rounded-full bg-foreground px-8 py-3.5 text-sm text-background transition-opacity hover:opacity-85"
          >
            Ön değerlendirmeye başla
          </button>
          <a
            href="#kutuphane"
            className="rounded-full border border-foreground/30 px-8 py-3.5 text-sm text-foreground transition-colors hover:border-foreground/70"
          >
            Kütüphaneyi keşfet
          </a>
        </div>
      </div>

      {/* scroll cue */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="eyebrow-label">Kaydır</span>
        <span className="h-8 w-px bg-foreground/30" />
      </div>
    </section>
  )
}
