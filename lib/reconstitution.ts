// Pure unit arithmetic for the reconstitution calculator. Nothing here
// recommends or suggests a dose: the caller supplies every input and the
// functions only convert between units.

export type DoseUnit = "mcg" | "mg"

/** powder (mg) dissolved in water (mL) -> concentration (mg/mL) */
export function concentrationMgPerMl(powderMg: number, waterMl: number) {
  if (!(powderMg > 0) || !(waterMl > 0)) return null
  return powderMg / waterMl
}

/** dose + concentration -> volume to draw (mL) */
export function drawVolumeMl(
  dose: number,
  unit: DoseUnit,
  concMgPerMl: number | null,
) {
  if (!(dose > 0) || !concMgPerMl) return null
  const doseMg = unit === "mcg" ? dose / 1000 : dose
  return doseMg / concMgPerMl
}

/** U-100 insulin syringe: 100 units = 1 mL */
export function mlToU100Units(ml: number) {
  return ml * 100
}

export function formatNumber(n: number, digits = 3) {
  return new Intl.NumberFormat("tr-TR", {
    maximumFractionDigits: digits,
  }).format(n)
}
