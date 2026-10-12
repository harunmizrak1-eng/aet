"use client"

import { useState } from "react"
import {
  concentrationMgPerMl,
  drawVolumeMl,
  mlToU100Units,
  formatNumber,
  type DoseUnit,
} from "@/lib/reconstitution"

const inputClass =
  "mt-3 w-full rounded-sm border border-hairline bg-transparent px-4 py-3 font-mono text-base text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none"

function toNumber(v: string) {
  const n = Number(v.replace(",", "."))
  return Number.isFinite(n) ? n : NaN
}

export function ReconstitutionCalculator() {
  const [powder, setPowder] = useState("")
  const [water, setWater] = useState("")
  const [dose, setDose] = useState("")
  const [unit, setUnit] = useState<DoseUnit>("mcg")

  const conc = concentrationMgPerMl(toNumber(powder), toNumber(water))
  const volume = drawVolumeMl(toNumber(dose), unit, conc)

  return (
    <div>
      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow-label">Flakondaki toz miktarı (mg)</span>
          <input
            inputMode="decimal"
            value={powder}
            onChange={(e) => setPowder(e.target.value)}
            placeholder="örn. 5"
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="eyebrow-label">Eklenen çözücü hacmi (mL)</span>
          <input
            inputMode="decimal"
            value={water}
            onChange={(e) => setWater(e.target.value)}
            placeholder="örn. 2"
            className={inputClass}
          />
        </label>
      </div>

      <div className="mt-8">
        <span className="eyebrow-label">Kendi dozunuz</span>
        <div className="mt-3 flex gap-3">
          <input
            inputMode="decimal"
            value={dose}
            onChange={(e) => setDose(e.target.value)}
            aria-label="Doz"
            placeholder="Hekiminizin belirlediği doz"
            className="w-full rounded-sm border border-hairline bg-transparent px-4 py-3 font-mono text-base text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none"
          />
          <div role="group" aria-label="Doz birimi" className="flex shrink-0">
            {(["mcg", "mg"] as const).map((u) => (
              <button
                key={u}
                type="button"
                aria-pressed={unit === u}
                onClick={() => setUnit(u)}
                className={`border px-5 py-3 font-mono text-sm transition-colors duration-300 first:rounded-l-sm last:rounded-r-sm ${
                  unit === u
                    ? "border-gold bg-gold/10 text-foreground"
                    : "border-hairline text-foreground/70 hover:border-gold/40"
                }`}
              >
                {u}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        aria-live="polite"
        className="mt-14 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-3"
      >
        <div className="bg-background p-6">
          <p className="eyebrow-label">Konsantrasyon</p>
          <p className="mt-3 font-mono text-2xl text-foreground">
            {conc ? `${formatNumber(conc)} mg/mL` : "—"}
          </p>
          {conc && (
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              {formatNumber(conc * 1000, 1)} mcg/mL
            </p>
          )}
        </div>
        <div className="bg-background p-6">
          <p className="eyebrow-label">Çekilecek hacim</p>
          <p className="mt-3 font-mono text-2xl text-foreground">
            {volume ? `${formatNumber(volume)} mL` : "—"}
          </p>
        </div>
        <div className="bg-background p-6">
          <p className="eyebrow-label">U-100 şırınga</p>
          <p className="mt-3 font-mono text-2xl text-foreground">
            {volume ? `${formatNumber(mlToU100Units(volume), 1)} ünite` : "—"}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">100 ünite = 1 mL</p>
        </div>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
        Hesaplayıcı yalnızca girdiğiniz değerleri birimler arasında çevirir;
        doz önermez ve tavsiye vermez. Dozu kendiniz girersiniz. Sonucu
        kullanmadan önce bir hekim veya eczacıyla doğrulayın.
      </p>
    </div>
  )
}
