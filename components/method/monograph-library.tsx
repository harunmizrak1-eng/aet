"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { monographs, monographCategories } from "@/lib/monographs"
import { peptideImage } from "@/lib/peptide-images"

export function MonographLibrary() {
  const [category, setCategory] = useState<string>("Tümü")

  const filtered = useMemo(
    () => monographs.filter((m) => category === "Tümü" || m.category === category),
    [category],
  )

  const filters = ["Tümü", ...monographCategories]

  return (
    <>
      <section className="px-6 pb-10 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-2">
          {filters.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={`rounded-full border px-4 py-2 text-[0.65rem] uppercase tracking-eyebrow transition-colors ${
                category === c
                  ? "border-gold/60 text-gold"
                  : "border-hairline text-muted-foreground hover:border-gold/40 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 pb-28 sm:pb-36 md:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((m) => {
            const img = peptideImage(m.slug)
            return (
              <Link
                key={m.slug}
                href={`/peptidler/${m.slug}`}
                className="group flex flex-col overflow-hidden rounded-lg border border-hairline bg-surface transition-colors duration-500 hover:border-gold/60"
              >
                {img && (
                  <div className="relative aspect-[3/2] w-full overflow-hidden border-b border-hairline">
                    <Image
                      src={img}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 90vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-7">
                  <p className="eyebrow-label">№ {m.number}</p>
                  <h2 className="mt-3 font-serif text-2xl font-normal tracking-wide text-foreground">
                    {m.name}
                  </h2>
                  <p className="mt-1 text-[0.62rem] uppercase tracking-[0.12em] text-gold">
                    {m.classification}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {m.summary}
                  </p>
                  <span className="mt-6 text-[0.65rem] uppercase tracking-eyebrow text-foreground/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Monografı incele →
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </>
  )
}
