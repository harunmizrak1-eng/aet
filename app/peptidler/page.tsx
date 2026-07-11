import type { Metadata } from "next"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { MethodFooter } from "@/components/method/method-footer"
import { MonographLibrary } from "@/components/method/monograph-library"
import { monographs } from "@/lib/monographs"

export const metadata: Metadata = {
  title: "Monograflar",
  description:
    "Sinyal moleküllerinden oluşan seçilmiş bir sözlük. Her kayıt molekülü sade bir dille sunar: sınıflandırma, dizilim, yarı ömür ve uygulama yolu.",
  alternates: { canonical: "/peptidler" },
  openGraph: {
    title: "Monograflar",
    description:
      "Sinyal moleküllerinden oluşan seçilmiş bir sözlük. Her kayıt molekülü sade bir dille sunar.",
    url: "/peptidler",
  },
}

export default function MonographsPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="bg-background pt-32">
        <section className="px-6 pb-16 md:px-10">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow-label">Kütüphane</p>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl font-normal leading-[1.05] tracking-tight text-foreground sm:text-7xl">
              Sinyal moleküllerinden oluşan seçilmiş bir{" "}
              <span className="serif-accent">sözlük</span>.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              {monographs.length} monograf. Her kayıt molekülü sade bir dille
              sunar: nedir, nasıl sınıflandırılır, dizilimi, yarı ömrü ve
              uygulama yolu. Hiçbir şey vaat etmeyiz; ama her şeyi anlamanız için
              çeviririz. ÆTERNA peptid satmaz.
            </p>
          </div>
        </section>

        <MonographLibrary />

        <section className="px-6 pb-28 text-center sm:pb-36">
          <p className="mx-auto max-w-lg text-pretty font-serif text-2xl font-normal italic leading-relaxed text-foreground/90 sm:text-3xl">
            Hangi bileşiğin sizin için doğru olduğunu birlikte belirleriz.
          </p>
          <Link
            href="/#danismanlik"
            className="mt-10 inline-block rounded-full border border-gold/60 px-9 py-3.5 text-sm text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            Danışmanlığı incele
          </Link>
        </section>
      </main>
      <MethodFooter />
    </>
  )
}
