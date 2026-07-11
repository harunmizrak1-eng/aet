"use client"

import { useState } from "react"
import Link from "next/link"
import { peptides, tierLabel } from "@/lib/peptides"

// Method's "library" categories, mapped onto Protocol's real peptide taxonomy.
const CATEGORIES: { key: string; label: string; blurb: string }[] = [
  {
    key: "Metabolik",
    label: "Metabolik & kilo",
    blurb:
      "İştah, insülin duyarlılığı ve yağ metabolizması için çalışılan peptidler. Ana akım tıpla en çok örtüşen ve en hızlı değişen kategori.",
  },
  {
    key: "Doku Onarımı",
    label: "İyileşme & onarım",
    blurb:
      "Tendon, eklem ve kas dokusunun onarımı, inflamasyon modülasyonu ve toparlanma kaskadı üzerine çalışan bileşikler.",
  },
  {
    key: "Kognitif",
    label: "Beyin & nootropikler",
    blurb:
      "Odak, hafıza ve zihinsel netlik için incelenen nöropeptidler. Sinaptik plastisite ve nörogenez temelli yaklaşım.",
  },
  {
    key: "Longevity",
    label: "Uzun ömür & hücresel",
    blurb:
      "Hücresel sağlık, sirkadiyen ritim ve sağlıklı yaşlanma için uzun vadeli sinyalleşmeye odaklanan moleküller.",
  },
  {
    key: "Büyüme / GH",
    label: "Uzun ömür & GH desteği",
    blurb:
      "GHRH / GH aksı ve pulsatil salınım üzerinden çalışan büyüme hormonu destekleyici peptidler.",
  },
  {
    key: "Estetik / Onarım",
    label: "Cilt & estetik",
    blurb:
      "Kolajen sentezi, cilt kalitesi ve doku onarımı üzerine çalışan estetik odaklı bileşikler.",
  },
  {
    key: "Performans",
    label: "Performans & enerji",
    blurb:
      "Antrenman adaptasyonu, toparlanma süresi ve günlük enerji kapasitesi için hazırlanan peptidler.",
  },
]

export function MethodLibrary() {
  const [active, setActive] = useState(CATEGORIES[0].key)
  const activeCat = CATEGORIES.find((c) => c.key === active)!
  const list = peptides.filter((p) => p.category === active)

  return (
    <section id="kutuphane" className="bg-[#20221d] px-6 py-24 text-[#f4f1ea] sm:py-32 md:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow-label">Kütüphane</p>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <h2 className="font-serif text-4xl font-normal leading-[1.1] tracking-tight sm:text-5xl">
            Sinyal moleküllerinden oluşan seçilmiş bir{" "}
            <span className="serif-accent">sözlük</span>.
          </h2>
          <p className="max-w-md self-end text-base leading-relaxed text-[#f4f1ea]/70">
            Her kayıt molekülü sade bir dille sunar: nedir, nerede keşfedildi,
            ne çalışıldı ve ne belirsiz kalıyor. Hiçbir şey vaat etmeyiz — ama
            her şeyi anlamanız için çeviririz.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">
          {/* Category rail */}
          <div className="flex flex-col">
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => setActive(c.key)}
                className={`border-b border-[#f4f1ea]/15 py-4 text-left font-serif text-xl italic transition-colors ${
                  active === c.key
                    ? "text-[#f4f1ea]"
                    : "text-[#f4f1ea]/40 hover:text-[#f4f1ea]/70"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Peptide table */}
          <div>
            <h3 className="font-serif text-3xl font-normal">{activeCat.label}</h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#f4f1ea]/60">
              {activeCat.blurb}
            </p>

            <ul className="mt-8">
              {list.map((p, i) => (
                <li key={p.slug} className="border-t border-[#f4f1ea]/15 last:border-b">
                  <Link
                    href={`/peptidler/${p.slug}`}
                    className="group grid grid-cols-[2rem_1fr] items-baseline gap-4 py-5 sm:grid-cols-[2.5rem_11rem_1fr]"
                  >
                    <span className="font-mono text-xs text-[#f4f1ea]/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-xl underline decoration-[#f4f1ea]/25 underline-offset-4 transition-colors group-hover:decoration-[#f4f1ea]">
                      {p.name}
                    </span>
                    <span className="col-span-2 text-sm text-[#f4f1ea]/60 sm:col-span-1">
                      {tierLabel[p.tier]}
                      <span className="text-[#f4f1ea]/30"> · </span>
                      {p.category}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/peptidler"
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#f4f1ea]/25 px-6 py-3 text-sm text-[#f4f1ea] transition-colors hover:border-[#f4f1ea]/70"
            >
              Tüm kütüphaneyi gör <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
