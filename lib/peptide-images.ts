// Branded ÆTERNA vial photography (imported from aeternamethod.com's monograph
// image set), mapped to each peptide slug. Not every compound has a photo yet;
// callers should treat a missing entry as "no image" and fall back gracefully.

const PEPTIDE_IMAGES: Record<string, string> = {
  "5-amino-1mq": "/images/peptides/5-amino-1mq.webp",
  "aod-9604": "/images/peptides/aod-9604.webp",
  "bpc-157": "/images/peptides/bpc-157.webp",
  cagrilintide: "/images/peptides/cagrilintide.webp",
  cerebrolysin: "/images/peptides/cerebrolysin.webp",
  "cjc-1295-ipamorelin": "/images/peptides/cjc-1295-ipamorelin.webp",
  dihexa: "/images/peptides/dihexa.webp",
  dsip: "/images/peptides/dsip.webp",
  epithalon: "/images/peptides/epithalon.webp",
  "ghk-cu": "/images/peptides/ghk-cu.webp",
  "ghrp-2": "/images/peptides/ghrp-2.webp",
  hexarelin: "/images/peptides/hexarelin.webp",
  humanin: "/images/peptides/humanin.webp",
  ipamorelin: "/images/peptides/ipamorelin.webp",
  "mots-c": "/images/peptides/mots-c.webp",
  "nad-nmn": "/images/peptides/nad-nmn.webp",
  "pt-141": "/images/peptides/pt-141.webp",
  retatrutide: "/images/peptides/retatrutide.webp",
  selank: "/images/peptides/selank.webp",
  semaglutide: "/images/peptides/semaglutide.webp",
  semax: "/images/peptides/semax.webp",
  sermorelin: "/images/peptides/sermorelin.webp",
  "ss-31-elamipretide": "/images/peptides/ss-31-elamipretide.webp",
  "tb-500": "/images/peptides/tb-500.webp",
  tesamorelin: "/images/peptides/tesamorelin.webp",
  thymalin: "/images/peptides/thymalin.webp",
  "thymosin-alpha-1": "/images/peptides/thymosin-alpha-1.webp",
  "thymosin-beta-4": "/images/peptides/thymosin-beta-4.webp",
  tirzepatide: "/images/peptides/tirzepatide.webp",
}

export function peptideImage(slug: string): string | undefined {
  return PEPTIDE_IMAGES[slug]
}
