"use client"

import { useState } from "react"
import Image from "next/image"

const STATS = [
  { value: "7000+", label: "incelenen hakemli çalışma" },
  { value: "80+", label: "kataloglanan sinyal molekülü" },
  { value: "%45", label: "insan proteomunun kısmen kısa peptid habercilerle düzenlendiği oran" },
  { value: "0₺", label: "her kelimeyi okuma maliyeti" },
]

const TABS = [
  {
    key: "Mekanizma",
    title: "Sinyalleşme, takviye değil",
    body: [
      "Peptidler, vücudun ana sinyalleşme sözlüğünü oluşturan kısa amino asit zincirleridir. Vitaminler ve mineraller ham maddeyi sağlarken, peptidler orkestrayı yönetir.",
      "Aeterna'nın pedagojisi reseptörde başlar: bir peptid nasıl bağlanır ve hangi kaskadı tetikler. Mekanizma her zaman ilk derstir.",
    ],
    ref: "Kaynak · Frøkjaer & Otzen — Nat. Rev. Drug Discov., 2005",
  },
  {
    key: "Kanıt",
    title: "İncelendi, sorgulandı, konumlandı",
    body: [
      "Her bileşiği kanıt seviyesine göre sınıflandırırız: klinik, mekanistik ve preklinik. Popülerlik ya da pazarlama bu ayrımı asla bulanıklaştırmaz.",
      "Klinik kanıt kademesindeki her PMID, DOI ve ClinicalTrials numarası gerçek ve doğrulanabilir kaynaklardan alınır.",
    ],
    ref: "Kanıt seviyesi sistemi · Metodoloji",
  },
  {
    key: "Uygulama",
    title: "Çalışmayı pratiğe bağlamak",
    body: [
      "Bir molekülün güçlü olması, herkes için doğru olduğu anlamına gelmez. Doz, süre, kaynak ve bireysel profil belirleyicidir.",
      "Bu yüzden protokol her zaman kişiye özel kurulur — referans bir tablodan alınmaz.",
    ],
    ref: "Süreç · Değerlendirmeden protokole",
  },
  {
    key: "Etik",
    title: "Bir ihtiyat standardı",
    body: [
      "Aeterna eğitim verir; teşhis, tedavi ya da reçete sunmaz. Güvenlik bileşene, bağlama, doza, kaynağa ve bireye bağlıdır.",
      "Üyelerimize her değişkeni tek tek değerlendirmeyi öğretiriz — kestirme bir cevap yerine bir yargılama çerçevesi.",
    ],
    ref: "Tıbbi & sağlık sorumluluk reddi",
  },
]

const GRID = [
  { src: "/images/editorial/eye-macro.webp", ratio: "aspect-[3/4]" },
  { src: "/images/editorial/sprint-dust.webp", ratio: "aspect-[3/4]" },
  { src: "/images/editorial/pool-shoulder.webp", ratio: "aspect-[3/4]" },
  { src: "/images/editorial/embrace-coast.webp", ratio: "aspect-[3/4]" },
]

export function MethodScience() {
  const [tab, setTab] = useState(TABS[0].key)
  const active = TABS.find((t) => t.key === tab)!

  return (
    <section className="border-b border-hairline px-6 py-24 sm:py-32 md:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow-label">Bilim</p>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <h2 className="font-serif text-4xl font-light leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            <span className="serif-accent">Literatürü</span> öğretiriz,
            pazarlamayı değil.
          </h2>
          <p className="max-w-md self-end text-base leading-relaxed text-muted-foreground">
            Aeterna, hakemli farmakoloji, endokrinoloji ve uzun ömür
            araştırmalarından derlenen bir müfredattır — bu alanların hak
            ettiği titizlik ve yeni başlayanların ihtiyaç duyduğu netlikle
            öğretilir.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 border-y border-hairline py-12 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.value}>
              <p className="font-serif text-5xl font-light text-foreground sm:text-6xl">
                {s.value}
              </p>
              <p className="mt-3 text-sm leading-snug text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Tabbed editorial */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[200px_1fr] lg:gap-16">
          <div className="flex flex-col">
            {TABS.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setTab(t.key)}
                className={`border-b border-hairline py-4 text-left font-serif text-xl transition-colors ${
                  tab === t.key
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.key}
              </button>
            ))}
          </div>
          <div className="rounded-lg bg-[#ece7dc] p-8 sm:p-12">
            <h3 className="font-serif text-3xl font-light text-foreground">
              {active.title}
            </h3>
            {active.body.map((para, i) => (
              <p key={i} className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {para}
              </p>
            ))}
            <p className="eyebrow-label mt-8">{active.ref}</p>
          </div>
        </div>

        {/* Editorial image grid */}
        <div className="mt-16 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {GRID.map((g, i) => (
            <div key={i} className={`relative ${g.ratio} overflow-hidden rounded-md`}>
              <Image
                src={g.src}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="editorial-photo object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
