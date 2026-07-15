"use client"

import { useState } from "react"
import Link from "next/link"
import {
  monographCategories,
  monographsByCategory,
} from "@/lib/monographs"

// Short blurb per monograph category for the dark library rail.
const BLURB: Record<string, string> = {
  "Metabolik & Kilo":
    "İştah, insülin duyarlılığı ve yağ metabolizması için çalışılan bileşikler. Ana akım tıpla en çok örtüşen ve en hızlı değişen kategori.",
  "İyileşme & Onarım":
    "Tendon, eklem ve kas dokusunun onarımı, inflamasyon modülasyonu ve toparlanma kaskadı üzerine çalışan peptidler.",
  "Beyin & Nootropikler":
    "Odak, hafıza ve zihinsel netlik için incelenen nöropeptidler. Sinaptik plastisite ve nörogenez temelli yaklaşım.",
  "Hormonal & Üreme":
    "Hipotalamus–hipofiz–gonad ekseni ve üreme sinyalleşmesi üzerine çalışan bileşikler.",
  "Uzun Ömür & GH Desteği":
    "GHRH / GH aksı, mitokondriyal işlev ve hücresel uzun ömür üzerine çalışan moleküller.",
  "Cilt & Estetik":
    "Kolajen sentezi, pigmentasyon ve cilt kalitesi üzerine çalışan estetik odaklı bileşikler.",
  "Genel Sağlık":
    "Bağışıklık, redoks dengesi, uyku ve temel metabolik işlev için çalışılan endojen sinyaller.",
}

export function MethodLibrary() {
  const [active, setActive] = useState<string>(monographCategories[0])
  const list = monographsByCategory(active)

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
            78 monograf. Her kayıt molekülü sade bir dille sunar: nedir, nasıl
            sınıflandırılır ve ne belirsiz kalıyor. Hiçbir şey vaat etmeyiz, ama
            her şeyi anlamanız için çeviririz.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
          {/* Category rail */}
          <div className="flex flex-col">
            {monographCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`border-b border-[#f4f1ea]/15 py-4 text-left font-serif text-xl italic transition-colors ${
                  active === c
                    ? "text-[#f4f1ea]"
                    : "text-[#f4f1ea]/40 hover:text-[#f4f1ea]/70"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Monograph table */}
          <div>
            <h3 className="font-serif text-3xl font-normal">{active}</h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#f4f1ea]/60">
              {BLURB[active]}
            </p>

            <ul className="mt-8">
              {list.map((m) => (
                <li key={m.slug} className="border-t border-[#f4f1ea]/15 last:border-b">
                  <Link
                    href={`/peptidler/${m.slug}`}
                    className="group grid grid-cols-[2.5rem_1fr] items-baseline gap-4 py-5 sm:grid-cols-[3rem_12rem_1fr]"
                  >
                    <span className="font-mono text-xs text-[#f4f1ea]/40">
                      {m.number}
                    </span>
                    <span className="font-serif text-xl underline decoration-[#f4f1ea]/25 underline-offset-4 transition-colors group-hover:decoration-[#f4f1ea]">
                      {m.name}
                    </span>
                    <span className="col-span-2 text-sm text-[#f4f1ea]/55 sm:col-span-1">
                      {m.classification}
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
