"use client"

import { useAssessment } from "@/components/assessment"

const GUEST = [
  "Halka açık peptid sözlüğü (60+ kayıt)",
  "Temel biyobelirteç sözlüğü",
  "Journal'a giriş düzeyinde erişim",
  "Kanıt seviyesi sistemine genel bakış",
]

const MEMBER = [
  "Halka açık peptid sözlüğü (60+ kayıt)",
  "Temel biyobelirteç sözlüğü",
  "Tüm protokoller ve süreç haritası",
  "Açıklamalı birincil literatür",
  "Üyelere özel seçilmiş içerik",
  "Partner indirimleri",
]

function Item({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm">
      <span aria-hidden="true" className="mt-0.5 text-gold">
        +
      </span>
      <span>{children}</span>
    </li>
  )
}

export function MethodAccess() {
  const { open } = useAssessment()

  return (
    <section id="uyelik" className="border-b border-hairline px-6 py-24 sm:py-32 md:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow-label">Erişim</p>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <h2 className="font-serif text-4xl font-normal leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            İki <span className="serif-accent">eşik</span> hâlinde erişim.
          </h2>
          <p className="max-w-md self-end text-base leading-relaxed text-muted-foreground">
            Her kademe eğitimdir. Hiçbiri tıbbi bakım değildir.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Guest, light card */}
          <article className="flex flex-col rounded-xl border border-hairline bg-surface p-8 sm:p-12">
            <h3 className="font-serif text-3xl font-normal text-foreground">
              Misafir <span className="serif-accent">okur</span>
            </h3>
            <p className="mt-3 font-serif text-lg italic text-muted-foreground">
              Ücretsiz sınırlı erişim
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Temel journal'a ve halka açık sözlüğe sınırlı erişim. Yöntem'e
              sakin bir giriş.
            </p>
            <ul className="mt-8 flex flex-1 flex-col gap-4 text-foreground/90">
              {GUEST.map((f) => (
                <Item key={f}>{f}</Item>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => open()}
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-full border border-foreground/30 px-6 py-3.5 text-sm text-foreground transition-colors hover:border-foreground/70"
            >
              Okumaya başla <span aria-hidden="true">→</span>
            </button>
          </article>

          {/* Full member, dark card */}
          <article className="flex flex-col rounded-xl bg-[#20221d] p-8 text-[#f4f1ea] sm:p-12">
            <h3 className="font-serif text-3xl font-normal">
              Tam <span className="serif-accent">üye</span>
            </h3>
            <p className="mt-3 font-serif text-lg italic text-[#f4f1ea]/70">
              Ücretsiz TAM erişim
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#f4f1ea]/70">
              Tüm müfredat. On iki modül, Aeterna ekibiyle aylık seminerler ve
              açıklamalı birincil literatürden oluşan özel bir kütüphane.
            </p>
            <ul className="mt-8 flex flex-1 flex-col gap-4 text-[#f4f1ea]/90">
              {MEMBER.map((f) => (
                <Item key={f}>{f}</Item>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => open()}
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-[#f4f1ea] px-6 py-3.5 text-sm text-[#20221d] transition-opacity hover:opacity-85"
            >
              Üye ol <span aria-hidden="true">→</span>
            </button>
          </article>
        </div>
      </div>
    </section>
  )
}
