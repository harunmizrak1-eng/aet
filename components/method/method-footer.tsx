import Link from "next/link"
import { contactEmail, instagramUrl, whatsappLink } from "@/lib/contact"

const METHOD_LINKS = [
  { href: "/metodoloji", label: "Hakkımızda" },
  { href: "/#uyelik", label: "Üye portalı" },
  { href: "/#uyelik", label: "Tam üyelik için kayıt · Ücretsiz" },
]

const LIBRARY_LINKS = [
  { href: "/journal", label: "Derleme (Journal)" },
  { href: "/peptidler", label: "Monograflar" },
  { href: "/#protokoller", label: "Protokoller" },
  { href: "/biyobelirtecler", label: "Biyobelirteç Sözlüğü" },
  { href: "/longevity-skoru", label: "Longevity Skoru" },
]

const LEGAL_LINKS = [
  { href: "/gizlilik", label: "Gizlilik & KVKK" },
  { href: "/sss", label: "Sık Sorulan Sorular" },
  { href: "/metodoloji", label: "Tıbbi & Sağlık Sorumluluk Reddi" },
]

function Column({
  heading,
  links,
}: {
  heading: string
  links: { href: string; label: string }[]
}) {
  return (
    <div>
      <p className="eyebrow-label">{heading}</p>
      <ul className="mt-5 flex flex-col gap-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function MethodFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-background px-6 py-16 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div>
            <p className="eyebrow-label">Topluluğa katıl</p>
            <p className="mt-5 max-w-[26ch] text-sm leading-relaxed text-muted-foreground">
              Vücudun dilini birlikte öğrenen bir okurlar topluluğu, sorular,
              uzman yanıtları ve müfredat, iyi bir arkadaşlıkla paylaşılır.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href={`mailto:${contactEmail}`}
                className="text-sm text-gold underline underline-offset-2"
              >
                {contactEmail}
              </a>
              <a
                href={whatsappLink(
                  "Merhaba, ÆTERNA ön değerlendirmesi hakkında bilgi almak istiyorum.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                </svg>
                Instagram
              </a>
            </div>
          </div>

          <Column heading="Yöntem" links={METHOD_LINKS} />
          <Column heading="Kütüphane" links={LIBRARY_LINKS} />
          <Column heading="Yasal" links={LEGAL_LINKS} />
        </div>

        <div className="border-t border-hairline pt-8">
          <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
            Bu sitedeki içerik yalnızca bilgilendirme amaçlıdır ve tıbbi tavsiye
            yerine geçmez. Aeterna Method eğitim verir; teşhis, tedavi ya da
            reçete sunmaz, peptid satmaz. Herhangi bir protokole başlamadan önce
            bir hekime danışın.
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-hairline pt-6 text-xs text-muted-foreground sm:flex-row">
          <p className="wordmark text-base text-foreground">
            Æterna <em className="serif-accent">method</em>
          </p>
          <p>© {year} ÆTERNA Method. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
