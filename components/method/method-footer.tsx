import Link from "next/link"
import { contactEmail, instagramUrl } from "@/lib/contact"

const METHOD_LINKS = [
  { href: "/metodoloji", label: "Hakkımızda" },
  { href: "/#uyelik", label: "Üye portalı" },
  { href: "/#uyelik", label: "Tam üyelik için kayıt — Ücretsiz" },
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
              Vücudun dilini birlikte öğrenen bir okurlar topluluğu — sorular,
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
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
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
