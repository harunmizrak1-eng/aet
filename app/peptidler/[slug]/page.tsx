import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Nav } from "@/components/nav"
import { MethodFooter } from "@/components/method/method-footer"
import { PeptideCta } from "@/components/peptide-cta"
import { peptides, tierLabel, tierColorVar, tierDots, categoryGoalMap } from "@/lib/peptides"
import { monographs, getMonograph } from "@/lib/monographs"
import { peptideImage } from "@/lib/peptide-images"
import { getArticle } from "@/lib/articles"
import { citations } from "@/lib/citations"
import { contactEmail, whatsappLink } from "@/lib/contact"

export function generateStaticParams() {
  const params: { slug: string }[] = []
  for (const m of monographs) {
    params.push({ slug: m.slug })
    for (const a of m.aliases ?? []) params.push({ slug: a })
  }
  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const m = getMonograph(slug)
  if (!m) return { title: "Monograflar" }
  return {
    title: `${m.name} — Monograf`,
    description: m.summary,
    alternates: { canonical: `/peptidler/${m.slug}` },
    openGraph: { title: m.name, description: m.summary, url: `/peptidler/${m.slug}` },
  }
}

function findPeptide(slug: string, mono: { slug: string; aliases?: string[] }) {
  const keys = new Set([slug, mono.slug, ...(mono.aliases ?? [])])
  return peptides.find((p) => keys.has(p.slug))
}

export default async function MonographPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const mono = getMonograph(slug)
  if (!mono) notFound()

  const image = peptideImage(mono.slug)
  const peptide = findPeptide(slug, mono)
  const citation = peptide ? citations[peptide.slug] : undefined
  const relatedArticle = peptide?.relatedArticleSlug ? getArticle(peptide.relatedArticleSlug) : undefined
  const goal = peptide ? categoryGoalMap[peptide.category] : undefined

  return (
    <>
      <Nav />
      <main id="main-content" className="bg-background pt-24">
        <article className="px-6 pb-28 sm:pb-36 md:px-10">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3 text-[0.62rem] uppercase tracking-eyebrow text-muted-foreground">
              <Link href="/peptidler" className="transition-colors hover:text-foreground">
                Monograflar
              </Link>
              <span aria-hidden="true">/</span>
              <span>{mono.name}</span>
            </div>

            {/* Header */}
            <p className="eyebrow-label mt-10">Monograf № {mono.number}</p>
            <p className="mt-4 text-sm uppercase tracking-[0.14em] text-gold">
              {mono.classification}
            </p>
            <h1 className="mt-4 font-serif text-5xl font-normal leading-[1.05] tracking-tight text-foreground sm:text-7xl">
              {mono.name}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/85">
              {mono.summary}
            </p>

            {image && (
              <figure className="mt-12 overflow-hidden rounded-xl border border-hairline bg-surface">
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src={image}
                    alt={`${mono.name} · ÆTERNA referans görseli`}
                    fill
                    sizes="(min-width: 768px) 48rem, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </figure>
            )}

            {/* Metadata row (Sequence / Half-life / Route) */}
            <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-3">
              {[
                { k: "Dizilim", v: mono.sequence },
                { k: "Yarı Ömür", v: mono.halfLife },
                { k: "Uygulama Yolu", v: mono.route },
              ].map((row) => (
                <div key={row.k} className="bg-background p-6">
                  <dt className="eyebrow-label">{row.k}</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-foreground/90">{row.v}</dd>
                </div>
              ))}
            </dl>

            {/* Vendor note */}
            <div className="mt-6 rounded-xl border border-hairline bg-surface p-6">
              <p className="eyebrow-label">Onaylı bir tedarikçiden edinin</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                ÆTERNA peptid satmaz. Tedarik yönlendirmesi bağımsız olarak
                doğrulanır; edinim ve kullanım kararları bir hekim gözetiminde
                alınmalıdır.
              </p>
              <a
                href={whatsappLink(`Merhaba, ${mono.name} monografı ve tedarik hakkında bilgi almak istiyorum.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-eyebrow text-gold transition-opacity hover:opacity-70"
              >
                WhatsApp'tan yönlendirme al →
              </a>
            </div>

            {/* Peptide evidence extras, when available */}
            {peptide && (
              <>
                <div className="mt-12 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-hairline pt-10 text-[0.65rem] uppercase tracking-eyebrow">
                  <span className={`font-mono ${tierColorVar[peptide.tier]}`} aria-hidden="true">
                    {tierDots[peptide.tier]}
                  </span>
                  <span className={tierColorVar[peptide.tier]}>{tierLabel[peptide.tier]}</span>
                  <span className="text-muted-foreground">· {peptide.clinicalStatus}</span>
                </div>
                <div className="mt-8">
                  <h2 className="eyebrow-label">Mekanizma</h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{peptide.mechanism}</p>
                </div>
                <div className="mt-10">
                  <h2 className="eyebrow-label">Birincil Sonuç Göstergeleri</h2>
                  <ul className="mt-4 flex flex-col gap-3">
                    {peptide.primaryOutcomes.map((o) => (
                      <li key={o} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span aria-hidden="true" className="mt-2 h-px w-3 flex-shrink-0 bg-gold/60" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
                {citation && (
                  <div className="mt-10 rounded-xl border border-hairline bg-surface p-6">
                    <p className="eyebrow-label">Kaynak</p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                      {citation.authors}, <em className="font-serif italic">{citation.journal}</em>, {citation.year}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs">
                      <a href={`https://pubmed.ncbi.nlm.nih.gov/${citation.pmid}/`} target="_blank" rel="noopener noreferrer" className="text-gold hover:opacity-70">
                        PubMed: {citation.pmid} →
                      </a>
                      <a href={`https://doi.org/${citation.doi}`} target="_blank" rel="noopener noreferrer" className="text-gold hover:opacity-70">
                        DOI: {citation.doi} →
                      </a>
                    </div>
                  </div>
                )}
                {relatedArticle && (
                  <div className="mt-10">
                    <h2 className="eyebrow-label">İlgili Journal Yazısı</h2>
                    <Link href={`/journal/${relatedArticle.slug}`} className="mt-4 inline-block font-serif text-lg italic text-foreground/90 transition-colors hover:text-gold">
                      {relatedArticle.title} →
                    </Link>
                  </div>
                )}
              </>
            )}

            {/* Member gate */}
            <div className="mt-12 rounded-2xl bg-[#20221d] p-8 text-[#f4f1ea] sm:p-10">
              <p className="eyebrow-label">Üye erişimi</p>
              <p className="mt-4 font-serif text-2xl font-normal leading-snug">
                Tam monograf yalnızca <span className="serif-accent">üyelere</span> açıktır.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#f4f1ea]/70">
                Eksiksiz dozaj rehberleri, titrasyon takvimleri, tedarik listeleri
                ve klinik izlem protokolleri yalnızca doğrulanmış ÆTERNA üyelerine
                sunulur. Okuma üyeliği herkese ücretsizdir.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/uye" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f4f1ea] px-6 py-3 text-sm text-[#20221d] transition-opacity hover:opacity-85">
                  Ücretsiz üye ol
                </Link>
                <a href={`mailto:${contactEmail}`} className="inline-flex items-center justify-center rounded-full border border-[#f4f1ea]/30 px-6 py-3 text-sm text-[#f4f1ea] transition-colors hover:border-[#f4f1ea]/70">
                  İletişim
                </a>
              </div>
            </div>

            {peptide && (
              <div className="mt-12 border-t border-hairline pt-10">
                <PeptideCta goal={goal} />
              </div>
            )}
          </div>
        </article>
      </main>
      <MethodFooter />
    </>
  )
}
