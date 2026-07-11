"use client"

import { useAssessment } from "@/components/assessment"

export function MethodEnroll() {
  const { open } = useAssessment()

  return (
    <>
      <section className="bg-[#20221d] px-6 py-28 text-center text-[#f4f1ea] sm:py-40 md:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow-label">Şimdi kayıt alınıyor · 2026 Bahar dönemi</p>
          <h2 className="mt-8 font-serif text-5xl font-normal leading-[1.05] tracking-tight sm:text-7xl">
            Vücudunuzun size <span className="serif-accent">söylediği</span> dili
            öğrenin.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-[#f4f1ea]/70">
            Aeterna Method, 2026 Bahar müfredatı için üye kabul ediyor. Okuma
            materyalleri katılımınızla başlar.
          </p>
          <button
            type="button"
            onClick={() => open()}
            className="mt-12 inline-flex items-center gap-2 rounded-full bg-[#f4f1ea] px-9 py-4 text-sm text-[#20221d] transition-opacity hover:opacity-85"
          >
            Eğitiminize başlayın <span aria-hidden="true">→</span>
          </button>
        </div>
      </section>

      {/* Oversized closing wordmark */}
      <section className="border-b border-hairline bg-[#ece7dc] px-6 py-20 md:px-10">
        <p className="mx-auto max-w-6xl wordmark text-6xl leading-none text-foreground sm:text-8xl md:text-9xl">
          Æterna <em className="serif-accent">Method</em>.
        </p>
      </section>
    </>
  )
}
