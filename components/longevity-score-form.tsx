"use client"

import { useState } from "react"
import Link from "next/link"
import { scoreDimensions, computeScore, scoreBand } from "@/lib/longevity-score"
import { useAssessment } from "@/components/assessment"

export function LongevityScoreForm() {
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [submitted, setSubmitted] = useState(false)
  const { open } = useAssessment()

  const allAnswered = scoreDimensions.every((d) => answers[d.id] !== undefined)
  const answeredCount = scoreDimensions.filter(
    (d) => answers[d.id] !== undefined,
  ).length
  const score = computeScore(answers)

  return (
    <div>
      <p className="text-[0.65rem] uppercase tracking-eyebrow text-muted-foreground">
        {answeredCount} / {scoreDimensions.length}
      </p>

      <div className="mt-6 flex flex-col gap-10">
        {scoreDimensions.map((d) => (
          <div key={d.id}>
            <h2 className="font-serif text-xl font-normal tracking-wide text-foreground">
              {d.question}
            </h2>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {d.options.map((opt) => {
                const selected = answers[d.id] === opt.value
                return (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setAnswers((a) => ({ ...a, [d.id]: opt.value }))
                    }}
                    aria-pressed={selected}
                    className={`rounded-sm border px-6 py-3 text-left text-sm leading-relaxed transition-colors duration-300 sm:text-center ${
                      selected
                        ? "border-gold bg-gold/10 text-foreground"
                        : "border-hairline text-foreground/80 hover:border-gold/40"
                    }`}
                  >
                    {opt.label}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        disabled={!allAnswered}
        onClick={() => setSubmitted(true)}
        className="mt-14 rounded-sm border border-gold/60 px-10 py-4 text-xs uppercase tracking-eyebrow font-medium text-gold transition-colors duration-300 hover:bg-gold hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gold"
      >
        Skoru Hesapla
      </button>

      {submitted && (() => {
        const band = scoreBand(score)
        const weakest = [...scoreDimensions]
          .filter((d) => answers[d.id] !== undefined)
          .sort((a, b) => answers[a.id] - answers[b.id])[0]
        return (
          <div className="mt-16 border-t border-hairline pt-14">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow-label">Longevity Skorunuz</p>
                <p className="mt-4 font-mono text-7xl text-foreground sm:text-8xl">
                  {score}
                  <span className="text-2xl text-muted-foreground sm:text-3xl">
                    {" "}
                    / 100
                  </span>
                </p>
              </div>
              <div className="sm:text-right">
                <p className="font-serif text-3xl font-normal text-foreground">
                  {band.label}
                </p>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground sm:ml-auto">
                  {band.note}
                </p>
              </div>
            </div>

            {/* Per-dimension breakdown */}
            <div className="mt-12 flex flex-col gap-4">
              {scoreDimensions.map((d) => {
                const v = answers[d.id] ?? 0
                return (
                  <div key={d.id} className="flex items-center gap-4">
                    <span className="w-28 shrink-0 text-[0.7rem] uppercase tracking-eyebrow text-muted-foreground">
                      {d.label}
                    </span>
                    <span className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-hairline">
                      <span
                        className="absolute inset-y-0 left-0 rounded-full bg-gold transition-[width] duration-700"
                        style={{ width: `${v}%` }}
                      />
                    </span>
                    <span className="w-8 shrink-0 text-right font-mono text-xs text-foreground/70">
                      {v}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Weakest-area recommendation */}
            {weakest?.focus && (
              <div className="mt-10 rounded-xl border border-hairline bg-surface p-6">
                <p className="eyebrow-label">Öncelikli alan · {weakest.label}</p>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  En düşük puanı bu boyutta aldınız. En hızlı kazanç burada
                  başlar.
                </p>
                <Link
                  href={weakest.focus.href}
                  className="mt-4 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-eyebrow text-gold transition-opacity hover:opacity-70"
                >
                  {weakest.focus.label} →
                </Link>
              </div>
            )}

            <p className="mt-8 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Bu skor, altı yaşam tarzı boyutunun eşit ağırlıklı ortalamasıdır.
              Gizli bir algoritma veya klinik model kullanılmaz.
            </p>
            <p className="mt-4 max-w-lg text-balance font-serif text-lg font-normal italic leading-relaxed text-foreground/90">
              Bu bir tahmindir; tıbbi teşhis veya öngörü değildir.
            </p>

            <button
              type="button"
              onClick={() => open()}
              className="mt-10 rounded-full bg-foreground px-8 py-3.5 text-sm text-background transition-opacity hover:opacity-85"
            >
              Sonucu bir uzmanla değerlendir
            </button>
          </div>
        )
      })()}
    </div>
  )
}
