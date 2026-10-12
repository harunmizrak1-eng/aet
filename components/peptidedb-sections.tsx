import peptideDb from "@/lib/peptidedb.json"

interface PeptideDbEntry {
  sourceId: string
  sourceUrl: string
  overview?: string
  molecular?: Record<string, string>
  indications?: { name: string; effectiveness?: string | null; description?: string | null }[]
  dosing?: string[]
  reconstitution?: string[]
  warnings?: string[]
  sideEffects?: string[]
  interactions?: { compound: string; note: string }[]
  pubmed?: string[]
  identifiers?: { pubchem: number; formula?: string | null; cas?: string }
}

const db = peptideDb as unknown as Record<string, PeptideDbEntry>

export function hasPeptideDb(slug: string) {
  return slug in db
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 flex flex-col gap-3">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
          <span aria-hidden="true" className="mt-2 h-px w-3 flex-shrink-0 bg-gold/60" />
          {t}
        </li>
      ))}
    </ul>
  )
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="eyebrow-label">{title}</h2>
      {children}
    </section>
  )
}

/**
 * Extended monograph data from the PeptideDB catalog, translated to Turkish.
 * Numeric values (doses, durations, rates) are carried over from the source
 * unchanged; nothing is derived or recalculated here.
 */
export function PeptideDbSections({ slug }: { slug: string }) {
  const e = db[slug]
  if (!e) return null

  return (
    <div className="mt-12 border-t border-hairline pt-10">
      {e.overview && (
        <Block title="Genel Bakış">
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{e.overview}</p>
        </Block>
      )}

      {e.molecular && (
        <Block title="Moleküler Veri">
          <dl className="mt-4 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-3">
            {Object.entries(e.molecular).map(([k, v]) => (
              <div key={k} className="bg-background p-5">
                <dt className="eyebrow-label">{k}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-foreground/90">{v}</dd>
              </div>
            ))}
          </dl>
        </Block>
      )}

      {e.identifiers && (
        <Block title="Kimlik Bilgileri">
          <dl className="mt-4 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-3">
            {e.identifiers.formula && (
              <div className="bg-background p-5">
                <dt className="eyebrow-label">Molekül Formülü</dt>
                <dd className="mt-2 font-mono text-sm text-foreground/90">{e.identifiers.formula}</dd>
              </div>
            )}
            {e.identifiers.cas && (
              <div className="bg-background p-5">
                <dt className="eyebrow-label">CAS No</dt>
                <dd className="mt-2 font-mono text-sm text-foreground/90">{e.identifiers.cas}</dd>
              </div>
            )}
            <div className="bg-background p-5">
              <dt className="eyebrow-label">PubChem</dt>
              <dd className="mt-2 font-mono text-sm">
                <a
                  href={`https://pubchem.ncbi.nlm.nih.gov/compound/${e.identifiers.pubchem}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:opacity-70"
                >
                  CID {e.identifiers.pubchem} →
                </a>
              </dd>
            </div>
          </dl>
        </Block>
      )}

      {e.indications && (
        <Block title="Araştırma Alanları">
          <ul className="mt-4 flex flex-col gap-4">
            {e.indications.map((i) => (
              <li key={i.name} className="text-sm leading-relaxed">
                <p className="text-foreground/90">
                  {i.name}
                  {i.effectiveness && (
                    <span className="ml-2 font-mono text-[0.65rem] uppercase tracking-eyebrow text-gold">
                      {i.effectiveness}
                    </span>
                  )}
                </p>
                {i.description && <p className="mt-1 text-muted-foreground">{i.description}</p>}
              </li>
            ))}
          </ul>
        </Block>
      )}

      {e.dosing && (
        <Block title="Doz Protokolü">
          <div className="mt-4 flex flex-col gap-4">
            {e.dosing.map((t) => (
              <p
                key={t}
                className="whitespace-pre-line rounded-xl border border-hairline bg-surface p-5 text-sm leading-relaxed text-foreground/90"
              >
                {t}
              </p>
            ))}
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            Kaynak veri Türkçeye çevrilmiş, sayısal değerler olduğu gibi aktarılmıştır. Bilgilendirme amacıdır; tıbbi tavsiye değildir.
            Kullanım kararları bir hekim gözetiminde alınmalıdır.
          </p>
        </Block>
      )}

      {e.reconstitution && (
        <Block title="Hazırlama">
          <List items={e.reconstitution} />
        </Block>
      )}

      {e.warnings && (
        <Block title="Uyarılar">
          <List items={e.warnings} />
        </Block>
      )}

      {e.sideEffects && (
        <Block title="Yan Etkiler">
          <List items={e.sideEffects} />
        </Block>
      )}

      {e.interactions && (
        <Block title="Etkileşimler">
          <ul className="mt-4 flex flex-col gap-3">
            {e.interactions.map((i) => (
              <li key={i.compound} className="text-sm leading-relaxed text-muted-foreground">
                <span className="text-foreground/90">{i.compound}</span> · {i.note}
              </li>
            ))}
          </ul>
        </Block>
      )}

      {e.pubmed && (
        <Block title="Literatür">
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs">
            {e.pubmed.map((id) => (
              <a
                key={id}
                href={`https://pubmed.ncbi.nlm.nih.gov/${id}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:opacity-70"
              >
                PubMed: {id} →
              </a>
            ))}
          </div>
        </Block>
      )}

      <p className="mt-10 text-xs leading-relaxed text-muted-foreground">
        Ek veri kaynağı:{" "}
        <a href={e.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-gold hover:opacity-70">
          peptide-db.com
        </a>{" "}
        (Türkçeye çevrilmiştir; özgün metin İngilizcedir).
      </p>
    </div>
  )
}
