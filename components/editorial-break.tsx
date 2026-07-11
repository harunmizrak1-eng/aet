import Image from "next/image"

interface EditorialBreakProps {
  src: string
  line: string
  kicker?: string
  align?: "left" | "center" | "right"
  /** Crop focus for the image, e.g. "50% 30%". */
  focus?: string
}

const ALIGN_CLASSES: Record<NonNullable<EditorialBreakProps["align"]>, string> = {
  left: "items-start text-left",
  center: "items-center text-center",
  right: "items-end text-right",
}

/**
 * Full-bleed photographic pause between content sections, the site's one
 * concession to pure feeling. No cards, no data, just a portrait and a
 * single line. Used sparingly (per AGENTS.md motion/visual restraint rules).
 */
export function EditorialBreak({
  src,
  line,
  kicker,
  align = "center",
  focus = "50% 40%",
}: EditorialBreakProps) {
  return (
    <section className="relative h-[70vh] min-h-[420px] w-full overflow-hidden sm:h-[80vh]">
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        className="editorial-photo object-cover"
        style={{ objectPosition: focus }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-background/40" />
      <div
        className={`relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 sm:pb-20 md:px-16 ${ALIGN_CLASSES[align]}`}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col" style={{ alignItems: "inherit" }}>
          {kicker && (
            <p className="text-[0.65rem] uppercase tracking-eyebrow text-gold">
              {kicker}
            </p>
          )}
          <p className="mt-4 max-w-xl text-balance font-serif text-3xl font-normal leading-[1.2] tracking-wide text-foreground sm:text-4xl md:text-5xl">
            {line}
          </p>
        </div>
      </div>
    </section>
  )
}
