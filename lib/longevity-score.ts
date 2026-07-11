export interface ScoreOption {
  label: string
  value: number
}

export interface ScoreDimension {
  id: string
  /** Short label for the results breakdown. */
  label: string
  question: string
  options: ScoreOption[]
  /** Where to send the reader to improve this dimension. */
  focus?: { href: string; label: string }
}

export const scoreDimensions: ScoreDimension[] = [
  {
    id: "sleep",
    label: "Uyku",
    focus: { href: "/journal/gunluk-longevity-protokolu-3-temel-pratik", label: "Uyku pratikleri" },
    question: "Uyku süreniz ve düzeniniz nasıl?",
    options: [
      { label: "5 saatin altında, düzensiz", value: 20 },
      { label: "5–7 saat, orta kalite", value: 55 },
      { label: "7–9 saat, düzenli", value: 90 },
    ],
  },
  {
    id: "training",
    label: "Antrenman",
    focus: { href: "/journal/yaslanma-hizini-belirleyen-dort-sinyal", label: "AMPK & egzersiz" },
    question: "Haftalık antrenman sıklığınız nedir?",
    options: [
      { label: "Hiç yapmıyorum", value: 10 },
      { label: "Haftada 1–2 kez", value: 40 },
      { label: "Haftada 3–4 kez", value: 70 },
      { label: "Haftada 5 veya daha fazla", value: 95 },
    ],
  },
  {
    id: "nutrition",
    label: "Beslenme",
    focus: { href: "/journal/mtor-hucresel-yaslanmanin-ana-duzenleyicisi", label: "mTOR & beslenme" },
    question: "Beslenme düzeninizi nasıl tanımlarsınız?",
    options: [
      { label: "Düzensiz, ağırlıklı işlenmiş gıda", value: 20 },
      { label: "Orta, karışık", value: 55 },
      { label: "Büyük ölçüde bütün gıda", value: 85 },
    ],
  },
  {
    id: "stress",
    label: "Stres",
    focus: { href: "/peptidler?kategori=Kognitif", label: "Kognitif monograflar" },
    question: "Genel stres düzeyinizi nasıl değerlendirirsiniz?",
    options: [
      { label: "Yüksek, sürekli", value: 20 },
      { label: "Orta, dalgalı", value: 55 },
      { label: "Düşük, yönetilebilir", value: 85 },
    ],
  },
  {
    id: "habits",
    label: "Alışkanlıklar",
    question: "Sigara veya alkol kullanımınız nasıl?",
    options: [
      { label: "Düzenli sigara ve/veya yüksek alkol", value: 10 },
      { label: "Ara sıra", value: 50 },
      { label: "Kullanmıyorum", value: 95 },
    ],
  },
  {
    id: "biomarkers",
    label: "Biyobelirteç",
    focus: { href: "/biyobelirtecler", label: "Biyobelirteç sözlüğü" },
    question: "Biyobelirteç veya check-up takibiniz ne zamandı?",
    options: [
      { label: "Hiç yaptırmadım", value: 20 },
      { label: "Birkaç yıl önce", value: 55 },
      { label: "Son 12 ay içinde", value: 90 },
    ],
  },
]

export interface ScoreBand {
  label: string
  note: string
}

export function scoreBand(score: number): ScoreBand {
  if (score >= 80)
    return {
      label: "Güçlü temel",
      note: "Yaşam tarzı sinyalleriniz büyük ölçüde doğru yönde. Buradan itibaren kazanç, ince ayar ve ölçümle gelir.",
    }
  if (score >= 60)
    return {
      label: "Dengeli",
      note: "Sağlam bir zemin var; birkaç boyutta yapılacak hedefli iyileştirmeler eğriyi belirgin şekilde yukarı taşır.",
    }
  if (score >= 40)
    return {
      label: "Gelişmekte",
      note: "Temeller kurulmaya başlamış. En zayıf iki boyuta odaklanmak en hızlı geri dönüşü sağlar.",
    }
  return {
    label: "Başlangıç",
    note: "En büyük fırsat da burada. Küçük ve tutarlı değişiklikler, bu aralıkta en yüksek etkiyi yaratır.",
  }
}

export function computeScore(answers: Record<string, number>) {
  const values = scoreDimensions
    .map((d) => answers[d.id])
    .filter((v): v is number => typeof v === "number")

  if (values.length === 0) return 0

  const sum = values.reduce((acc, v) => acc + v, 0)
  return Math.round(sum / values.length)
}
