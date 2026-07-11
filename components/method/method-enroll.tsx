"use client"

import Image from "next/image"
import { useAssessment } from "@/components/assessment"
import { whatsappLink } from "@/lib/contact"

export function MethodEnroll() {
  const { open } = useAssessment()

  return (
    <>
      {/* Premium clinic CTA over an editorial background photograph */}
      <section className="relative overflow-hidden px-6 py-28 text-center text-[#f4f1ea] sm:py-40 md:px-10">
        <Image
          src="/images/editorial/embrace-coast.webp"
          alt=""
          fill
          sizes="100vw"
          className="editorial-photo object-cover object-[50%_35%]"
        />
        <div className="absolute inset-0 bg-[#20221d]/80" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="eyebrow-label">Seçili bireyler için · Kabul sınırlı</p>
          <h2 className="mt-8 font-serif text-5xl font-normal leading-[1.05] tracking-tight sm:text-7xl">
            Daha iyi bir biyoloji <span className="serif-accent">tesadüfe</span>{" "}
            bırakılmaz.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-[#f4f1ea]/75">
            Aeterna, kanıta dayalı çalışan özel bir longevity kliniğidir. Süreç
            bir ön değerlendirmeyle başlar; kabul edilen profiller için kişiye
            özel protokol, tedarik yönlendirmesi ve birebir takip sağlanır.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => open()}
              className="inline-flex items-center gap-2 rounded-full bg-[#f4f1ea] px-9 py-4 text-sm text-[#20221d] transition-opacity hover:opacity-85"
            >
              Ön değerlendirmeye başla <span aria-hidden="true">→</span>
            </button>
            <a
              href={whatsappLink(
                "Merhaba, ÆTERNA protokolleri ve süreç hakkında bilgi almak istiyorum.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#f4f1ea]/40 px-9 py-4 text-sm text-[#f4f1ea] transition-colors hover:border-[#f4f1ea]"
            >
              WhatsApp'tan bilgi al
            </a>
          </div>
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
