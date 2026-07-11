import Link from "next/link"
import {
  AmpkPathway,
  Neurogenesis,
  Angiogenesis,
  CollagenHelix,
  CircadianRhythm,
  PulsatileSecretion,
} from "@/components/method/diagrams"
import type { ComponentType } from "react"

interface Pillar {
  index: string
  overline: string
  underline: string
  title: string
  line: string
  cta: string
  href: string
  Diagram: ComponentType<{ className?: string }>
}

const PILLARS: Pillar[] = [
  {
    index: "01 — Sütun",
    overline: "AMPK Yolağı",
    underline: "ATP · İnsülin duyarlılığı",
    title: "Enerji & metabolik yavaşlama",
    line: "Öğleden sonra çöküşü, inatçı kilo ve motorunuzun eskisinden yavaş döndüğü hissi. İnsülin duyarlılığı, mitokondriyal verim ve altındaki metabolik zemin.",
    cta: "Metabolik yolu keşfet",
    href: "/peptidler?kategori=Metabolik",
    Diagram: AmpkPathway,
  },
  {
    index: "02 — Sütun",
    overline: "BDNF · Sinaptik plastisite",
    underline: "Nörogenez",
    title: "Beyin sisi & bilişsel gerileme",
    line: "Dilinizin ucundaki kelimeler, öğlene doğru dağılan odak. Sinaptik plastisite, nörogenez ve netlik ile kalıcı hafıza için çalışılan moleküller.",
    cta: "Bilişsel yolu keşfet",
    href: "/peptidler?kategori=Kognitif",
    Diagram: Neurogenesis,
  },
  {
    index: "03 — Sütun",
    overline: "Doku onarım kaskadı",
    underline: "Anjiyogenez",
    title: "Kas kaybı & yavaş toparlanma",
    line: "Sönümlenen güç, her yıl daha uzun süren sakatlıklar. Doku onarımı, inflamasyon modülasyonu ve vücudun kendi toparlanma kaskadı.",
    cta: "Toparlanma yolunu keşfet",
    href: "/peptidler?kategori=Doku%20Onarımı",
    Diagram: Angiogenesis,
  },
  {
    index: "04 — Sütun",
    overline: "Üçlü sarmal · Kolajen sentezi",
    underline: "Bağ dokusu bütünlüğü",
    title: "İnflamasyon & eklem sağlığı",
    line: "Sessiz inflamasyon ve yıllar içinde katılaşan eklemler. Bağ dokusunun bütünlüğü ve onu yeniden inşa eden sinyaller.",
    cta: "Doku & onarım yolunu keşfet",
    href: "/peptidler?kategori=Estetik%20/%20Onarım",
    Diagram: CollagenHelix,
  },
  {
    index: "05 — Sütun",
    overline: "Sirkadiyen ritim · Melatonin",
    underline: "Pineal aks",
    title: "Uyku bozukluğu",
    line: "Gece 3'te uyanmak, artık dinlendirmeyen uyku. Sirkadiyen sinyalleşme, pineal aks ve dürüst bir müfredatın öğrettiği ilk protokol.",
    cta: "Uyku & sirkadiyen yolu keşfet",
    href: "/peptidler?kategori=Longevity",
    Diagram: CircadianRhythm,
  },
  {
    index: "06 — Sütun",
    overline: "Pulsatil salınım",
    underline: "GHRH / GH aksı",
    title: "Hormonal değişimler (E/K)",
    line: "On yıllar boyunca kayan dürtü, ruh hâli ve dayanıklılık. Hipotalamus–hipofiz aksı ve onun ritmini biçimlendiren peptidler.",
    cta: "Hormonal yolu keşfet",
    href: "/peptidler?kategori=Büyüme%20/%20GH",
    Diagram: PulsatileSecretion,
  },
]

export function MethodPillars() {
  return (
    <section id="odak" className="border-b border-hairline px-6 py-24 sm:py-32 md:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow-label">Odak Alanları</p>
        <h2 className="mt-6 max-w-3xl font-serif text-4xl font-light leading-[1.1] tracking-tight text-foreground sm:text-5xl">
          Hissettiğiniz <span className="serif-accent">şeyle</span> başlayın.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Bir semptomdan başlayın. Her yol ilgili monograflara, derleme
          yazılarına ve bir okuma müfredatına açılır. Serbestçe göz atın;
          kayıt olduğunuzda derinlik açılır.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p) => (
            <article
              key={p.index}
              className="flex flex-col bg-background p-8 sm:p-10"
            >
              <p className="eyebrow-label">{p.index}</p>
              <p className="eyebrow-label mt-8 text-center">{p.overline}</p>
              <div className="my-4 flex justify-center text-foreground/70">
                <p.Diagram className="h-auto w-full max-w-[220px]" />
              </div>
              <p className="eyebrow-label mb-8 text-center">{p.underline}</p>

              <h3 className="font-serif text-2xl font-light leading-tight text-foreground">
                {p.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.line}
              </p>
              <Link
                href={p.href}
                className="mt-8 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-eyebrow text-foreground transition-colors hover:text-gold"
              >
                {p.cta} <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
