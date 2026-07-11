import type { Metadata } from "next"
import { Nav } from "@/components/nav"
import { MethodFooter } from "@/components/method/method-footer"
import { MemberPortal } from "@/components/method/member-portal"

export const metadata: Metadata = {
  title: "Üye Girişi",
  description:
    "Peptid araştırması için sessiz okuma odası. Ücretsiz üyelikle monograflara, derleme yazılarına ve biyobelirteç sözlüğüne erişin.",
  alternates: { canonical: "/uye" },
}

export default function UyePage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="bg-background pt-32">
        <section className="px-6 pb-28 sm:pb-36 md:px-10">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow-label">Üye portalı</p>
              <h1 className="mt-6 font-serif text-4xl font-normal leading-[1.1] tracking-tight text-foreground sm:text-6xl">
                Peptid araştırması için{" "}
                <span className="serif-accent">sessiz</span> okuma odası.
              </h1>
              <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
                Nereden tedarik edileceğini ve neyin okumaya değer olduğunu tek
                bir yerde öğrenin. Mağaza yok, abartı yok, istemediğiniz bülten
                yok. Üyelik herkese ücretsizdir.
              </p>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                ÆTERNA peptid satmaz. Bağımsız, okur destekli ve herkese açık.
                Kişiye özel protokol ve klinik takip, ayrı bir ön değerlendirme
                sürecinden ilerler.
              </p>
            </div>

            <MemberPortal />
          </div>
        </section>
      </main>
      <MethodFooter />
    </>
  )
}
