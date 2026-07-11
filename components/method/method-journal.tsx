import Link from "next/link"
import { articles } from "@/lib/articles"

export function MethodJournal() {
  const featured = articles.slice(0, 3)

  return (
    <section className="border-b border-hairline bg-[#ece7dc] px-6 py-24 sm:py-32 md:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Pullquote */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <p className="eyebrow-label">Journal</p>
          <div>
            <blockquote className="font-serif text-3xl font-light leading-[1.25] text-foreground sm:text-4xl">
              İnsanların kendi biyolojileri hakkında bir sözlükleri olmadan
              hayati kararlar vermelerini izlemekten yorulduğum için
              buradayım.{" "}
              <span className="serif-accent">
                Amacımız vücudun dilini öğretilebilir kılmak.
              </span>
            </blockquote>
            <p className="eyebrow-label mt-8">E. Hartfield · Kurucu editör</p>
          </div>
        </div>

        {/* Featured articles */}
        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-3">
          {featured.map((a) => (
            <Link
              key={a.slug}
              href={`/journal/${a.slug}`}
              className="group flex flex-col bg-background p-8 transition-colors hover:bg-surface"
            >
              <p className="eyebrow-label">{a.category}</p>
              <h3 className="mt-6 flex-1 font-serif text-2xl font-light leading-tight text-foreground">
                {a.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {a.excerpt}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-eyebrow text-foreground transition-colors group-hover:text-gold">
                {a.readMinutes} dk okuma <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/25 px-6 py-3 text-sm text-foreground transition-colors hover:border-foreground/70"
          >
            Tüm journal'ı gör <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
