"use client"

import { useState } from "react"
import { faqItems } from "@/lib/faq"
import { contactEmail } from "@/lib/contact"

export function MethodFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section className="border-b border-hairline px-6 py-24 sm:py-32 md:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div>
          <p className="eyebrow-label">SSS</p>
          <h2 className="mt-6 font-serif text-4xl font-light leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            Sorularınız, <span className="serif-accent">sabırla</span> yanıtlandı.
          </h2>
          <p className="mt-8 max-w-sm text-base leading-relaxed text-muted-foreground">
            Eğitim odaklı bir platformuz ve bu sorumluluğu ciddiye alıyoruz.
            Sorunuz burada yoksa bize yazın:{" "}
            <a href={`mailto:${contactEmail}`} className="text-gold underline underline-offset-2">
              {contactEmail}
            </a>
          </p>
        </div>

        <ul className="border-t border-hairline">
          {faqItems.map((item, i) => {
            const isOpen = openIdx === i
            return (
              <li key={item.question} className="border-b border-hairline">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-serif text-xl font-light text-foreground sm:text-2xl">
                    {item.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 text-2xl text-gold transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
