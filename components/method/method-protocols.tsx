import Link from "next/link"
import { protocols } from "@/lib/protocols"
import { tierLabel } from "@/lib/peptides"

export function MethodProtocols() {
  return (
    <section id="protokoller" className="border-b border-hairline px-6 py-24 sm:py-32 md:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow-label">Protokoller</p>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <h2 className="font-serif text-4xl font-light leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            Sözlükten <span className="serif-accent">sisteme</span>.
          </h2>
          <p className="max-w-md self-end text-base leading-relaxed text-muted-foreground">
            Protokoller ürün olarak satılmaz. Ön değerlendirmeden çıkan
            biyolojik profile göre kişiselleştirilen yapılandırılmış
            sistemlerdir. Aşağıdakiler yalnızca başlangıç çerçeveleridir.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {protocols.map((p) => (
            <Link
              key={p.slug}
              href={`/protokoller/${p.slug}`}
              className="group flex flex-col rounded-xl border border-hairline bg-surface p-8 transition-colors hover:border-gold/50"
            >
              <p className="eyebrow-label">{tierLabel[p.tier]}</p>
              <h3 className="mt-6 font-serif text-2xl font-light text-foreground">
                {p.name}
              </h3>
              <p className="mt-2 font-serif text-lg italic text-muted-foreground">
                {p.tagline}
              </p>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.summary}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-eyebrow text-foreground transition-colors group-hover:text-gold">
                Protokolü incele <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
