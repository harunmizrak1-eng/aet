import type { Metadata } from "next"
import { Nav } from "@/components/nav"
import { MethodFooter } from "@/components/method/method-footer"
import { ReconstitutionCalculator } from "@/components/reconstitution-calculator"

const description =
  "Flakondaki toz miktarı ve eklenen çözücü hacminden konsantrasyonu, girdiğiniz dozdan çekilecek hacmi hesaplayan birim çevirici. Doz önermez."

export const metadata: Metadata = {
  title: "Sulandırma Hesaplayıcısı",
  description,
  alternates: { canonical: "/sulandirma-hesaplayici" },
  openGraph: {
    title: "Sulandırma Hesaplayıcısı",
    description,
    url: "/sulandirma-hesaplayici",
  },
}

export default function ReconstitutionPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="bg-background pt-32">
        <section className="px-6 pb-16 md:px-10">
          <div className="mx-auto max-w-2xl">
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-10 bg-gold/70" />
              <p className="text-[0.65rem] uppercase tracking-eyebrow text-gold">
                Araç
              </p>
            </div>
            <h1 className="mt-10 text-balance font-serif text-4xl font-normal leading-tight tracking-wide text-foreground sm:text-5xl">
              Sulandırma hesaplayıcısı
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Üç değer girin: flakondaki toz, eklenen çözücü ve kendi dozunuz.
              Araç konsantrasyonu ve çekilecek hacmi hesaplar. Yalnızca
              aritmetiktir; bir doz önerisi değildir.
            </p>
          </div>
        </section>
        <section className="px-6 pb-28 sm:pb-36 md:px-10">
          <div className="mx-auto max-w-2xl">
            <ReconstitutionCalculator />
          </div>
        </section>
      </main>
      <MethodFooter />
    </>
  )
}
