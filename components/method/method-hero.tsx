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
      {/* Dark cinematic overlay so the editorial type reads white, as on
          aeternamethod.com's own hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#20221d]/55 via-[#20221d]/45 to-[#20221d]/75" />
      <div className="absolute inset-0 bg-[#20221d]/25" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start px-6 text-left md:px-10">
        <h1 className="max-w-3xl font-serif text-6xl font-normal leading-[0.98] tracking-tight text-[#f4f1ea] sm:text-7xl md:text-8xl">
          Daha uzun bir yaşamın{" "}
          <span className="serif-accent italic">mimarisi</span>.
        </h1>
        <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-[#f4f1ea]/85 sm:text-lg">
          Aeterna Method, peptid bilimini uzun ömür, toparlanma ve hücresel
          canlılık için tutarlı bir sisteme dönüştüren eğitim odaklı bir
          pratiktir; tek bir şişe bile satmadan.
        </p>

        <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => open()}
            className="rounded-full bg-[#f4f1ea] px-8 py-3.5 text-sm text-[#20221d] transition-opacity hover:opacity-85"
          >
            Ön değerlendirmeye başla
          </button>
          <a
            href="#kutuphane"
            className="rounded-full border border-[#f4f1ea]/40 px-8 py-3.5 text-center text-sm text-[#f4f1ea] transition-colors hover:border-[#f4f1ea]"
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
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-[#f4f1ea]/70">
          Kaydır
        </span>
        <span className="h-8 w-px bg-[#f4f1ea]/40" />
      </div>
    </section>
  )
}
