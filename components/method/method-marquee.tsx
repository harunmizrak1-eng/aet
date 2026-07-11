const CONCERNS = [
  "Uyku Mimarisi",
  "İnflamasyon",
  "Uzun Ömür",
  "Hücresel Onarım",
  "Bilişsel Keskinlik",
  "Toparlanma",
  "Metabolik Sağlık",
  "Doku Bütünlüğü",
  "Hormonal Denge",
]

export function MethodMarquee() {
  // duplicate the list so the -50% keyframe loops seamlessly
  const items = [...CONCERNS, ...CONCERNS]

  return (
    <div className="overflow-hidden border-y border-hairline bg-background py-6">
      <div className="marquee flex w-max flex-nowrap items-center">
        {items.map((c, i) => (
          <div key={i} className="flex flex-none items-center">
            <span className="whitespace-nowrap px-8 font-serif text-2xl italic text-foreground/80 sm:text-3xl">
              {c}
            </span>
            <span aria-hidden="true" className="text-gold">
              +
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
