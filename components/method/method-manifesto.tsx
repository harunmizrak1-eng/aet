import { ReceptorDiagram } from "@/components/method/diagrams"

const PRINCIPLES = [
  {
    numeral: "I.",
    title: "Bilgi, reçeteden önce gelir",
    line: "Önce mekanizmayı öğretiriz. Kendi vücudunuz hakkındaki kararlar, onun nasıl çalıştığını anlamanın ardından gelir.",
  },
  {
    numeral: "II.",
    title: "Peptidler bir sözlüktür",
    line: "Sinyal molekülleri vücudun ana dilidir. Biz onu okumanıza yardım ederiz; ne yazılacağına hekiminiz karar verir.",
  },
  {
    numeral: "III.",
    title: "Uzun ömür bir disiplindir",
    line: "Uyku, antrenman, beslenme ve sinyalleşme, her biri katkıda bulunur. Bunları tek bir bağlı sistem olarak ele alırız, asla ayrı ayrı değil.",
  },
]

export function MethodManifesto() {
  return (
    <section id="yontem" className="border-b border-hairline px-6 py-24 sm:py-32 md:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow-label">Yöntem</p>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-serif text-4xl font-normal leading-[1.1] tracking-tight text-foreground sm:text-5xl">
              Vücudunuzun zaten konuştuğu dilde bir{" "}
              <span className="serif-accent">eğitim</span>.
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              Aeterna Method bir klinik değil, bir müfredattır. Reçete yazmaz,
              ürün satmaz. Aydınlatır.
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Hücreleriniz durmadan iletişim kurar.{" "}
              <span className="serif-accent">Peptidler bu dilin kelimeleridir.</span>{" "}
              Bizim işimiz bu konuşmayı okunur kılmak, böylece siz ve
              hekiminiz vücudunuzun ne söylediğini nihayet duyabilirsiniz.
            </p>
          </div>

          <div className="flex items-center justify-center text-foreground/75">
            <figure className="w-full max-w-md">
              <figcaption className="eyebrow-label mb-4">
                Hücre dışı → Membran → Hücre içi
              </figcaption>
              <ReceptorDiagram className="h-auto w-full" />
              <figcaption className="eyebrow-label mt-4 text-right">
                Ligand · Reseptör · Sinyal
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-x-12 gap-y-14 sm:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <div key={p.numeral}>
              <p className="eyebrow-label">{p.numeral}</p>
              <h3 className="mt-4 font-serif text-2xl font-normal leading-tight text-foreground">
                {p.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {p.line}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
