// Comprehensive peptide monograph library, cloned from aeternamethod.com's
// own monograph set (78 entries) and translated to natural Turkish. Each entry
// mirrors the public monograph: number, classification, a rich summary, and the
// Sequence / Half-life / Route metadata. Deep clinical content (dosing,
// titration, supply, monitoring) remains member-gated, exactly as on Method.

export interface Monograph {
  slug: string
  number: string
  name: string
  category: string
  classification: string
  summary: string
  sequence: string
  halfLife: string
  route: string
  /** Alternate slugs (e.g. Protocol's internal ids) that resolve here too. */
  aliases?: string[]
}

export const monographCategories = [
  "Metabolik & Kilo",
  "İyileşme & Onarım",
  "Beyin & Nootropikler",
  "Hormonal & Üreme",
  "Uzun Ömür & GH Desteği",
  "Cilt & Estetik",
  "Genel Sağlık",
] as const

const N: Record<string, undefined> = {}
void N

const rawMonographs: Monograph[] = [
  // ——— Metabolik & Kilo ———
  {
    slug: "retatrutide",
    number: "014",
    name: "Retatrutide",
    category: "Metabolik & Kilo",
    classification: "Üçlü Agonist · GLP-1 / GIP / Glukagon",
    summary:
      "Vücudun en belirleyici üç metabolik dilini aynı anda konuşan tek bir molekül. Üçlü inkretin mimarisi, iştah kontrolünün ötesinde enerji harcamasını da doğrudan etkiler.",
    sequence: "39 amino asit",
    halfLife: "~6 gün",
    route: "Subkütan enjeksiyon, haftada bir",
  },
  {
    slug: "semaglutide",
    number: "009",
    name: "Semaglutide",
    category: "Metabolik & Kilo",
    classification: "Tekli Agonist · GLP-1",
    summary:
      "GLP-1 reseptör agonizmini hem glisemik hem de kilo tıbbının köşe taşı hâline getiren molekül. İştah ve kan şekerini tek bir mekanizma üzerinden düzenler.",
    sequence: "31 amino asit",
    halfLife: "~168 saat (7 gün)",
    route: "Subkütan enjeksiyon · Oral (tablet)",
  },
  {
    slug: "tirzepatide",
    number: "013",
    name: "Tirzepatide",
    category: "Metabolik & Kilo",
    classification: "İkili Agonist · GLP-1 / GIP",
    summary:
      "Vücudun en önemli iki inkretin sinyalini tek ve ölçülü bir metabolik müdahalede birleştiren ikili reseptör mimarisi.",
    sequence: "39 amino asit",
    halfLife: "~5 gün",
    route: "Subkütan enjeksiyon",
  },
  {
    slug: "cagrilintide",
    number: "015",
    name: "Cagrilintide",
    category: "Metabolik & Kilo",
    classification: "Uzun Etkili Amilin Analoğu · CALCR / RAMP Agonisti",
    summary:
      "Haftalık doz için tasarlanmış bir amilin analoğu; tokluğu geçici bir öğün sonrası olay olmaktan çıkarıp sürekli bir hormonal sinyale dönüştürür.",
    sequence: "37 amino asit",
    halfLife: "~7 gün (subkütan)",
    route: "Subkütan enjeksiyon",
  },
  {
    slug: "mazdutide",
    number: "015",
    name: "Mazdutide",
    category: "Metabolik & Kilo",
    classification: "İkili Agonist · GLP-1 / Glukagon",
    summary:
      "İştah baskılamasını ölçülebilir bir enerji harcaması artışıyla birleştirerek vücudun en belirleyici iki metabolik yolunu aynı anda devreye alan tek bir molekül.",
    sequence: "31 amino asit",
    halfLife: "~168 saat (haftada bir doz)",
    route: "Subkütan enjeksiyon",
  },
  {
    slug: "survodutide",
    number: "015",
    name: "Survodutide",
    category: "Metabolik & Kilo",
    classification: "İkili Agonist · GLP-1 / Glukagon",
    summary:
      "İnkretin sistemiyle enerji harcama aksını aynı anda devreye alan, özellikle karaciğerin yenilenme kapasitesine odaklanan tek bir molekül.",
    sequence: "29 amino asit",
    halfLife: "~168 saat (tahmini)",
    route: "Subkütan",
  },
  {
    slug: "aod-9604",
    number: "009",
    name: "AOD-9604",
    category: "Metabolik & Kilo",
    classification: "GH Fragmanı · hGH 176–191",
    summary:
      "Büyüme hormonunun lipolitik sinyalini koruyup geri kalan her şeyi eleyen bir fragman. Yağ metabolizmasını, büyümeyi tetiklemeden hedef alır.",
    sequence: "16 amino asit",
    halfLife: "~30 dakika (IV); tahmini 2–4 saat (SC)",
    route: "Subkütan enjeksiyon · Oral (araştırma aşamasında)",
  },
  {
    slug: "hgh-fragment-176-191",
    number: "017",
    name: "HGH Fragment 176-191",
    category: "Metabolik & Kilo",
    classification: "GH Fragmanı · Lipolitik Peptid",
    summary:
      "Büyüme hormonunun son on yedi kalıntısı; araştırmacılar tarafından tam molekülün mitojenik ve diyabetojenik etkileri olmadan lipolitik sinyalini yakalamak için izole edilmiştir.",
    sequence: "16 amino asit",
    halfLife: "~30 dakika (IV); ~2–3 saat (SC)",
    route: "Subkütan enjeksiyon",
  },
  {
    slug: "5-amino-1mq",
    number: "021",
    name: "5-Amino-1MQ",
    category: "Metabolik & Kilo",
    classification: "NNMT İnhibitörü · Küçük Molekül",
    summary:
      "NAD⁺ havuzunu boşaltan enzimi susturarak bu havuzu genişleten küçük bir molekül. Yağ metabolizmasını hücresel enerji dengesi üzerinden etkiler.",
    sequence: "Küçük molekül",
    halfLife: "~4–6 saat (tahmini, kemirgen verisi)",
    route: "Oral · Subkütan (araştırma)",
  },
  {
    slug: "slu-pp-332",
    number: "021",
    name: "SLU-PP-332",
    category: "Metabolik & Kilo",
    classification: "Pan-ERR Agonisti · ERRα / ERRβ / ERRγ",
    summary:
      "Mitokondriye ne için var olduğunu hatırlatan bir molekül; hareket olmadan egzersizin sinyalini iletir.",
    sequence: "Küçük molekül",
    halfLife: "~2–4 saat (kemirgen verisi)",
    route: "Subkütan · Oral (araştırma aşamasında)",
  },
  {
    slug: "l-carnitine",
    number: "021",
    name: "L-Carnitine",
    category: "Metabolik & Kilo",
    classification: "Koşullu Esansiyel Besin · Yağ Asidi Taşıyıcı Faktör",
    summary:
      "Mitokondrinizin tek başına geçemediği membranın ötesine yakıtı taşıyan molekül. Yağ asitlerinin oksidasyonunda temel bir kavşaktır.",
    sequence: "Amino asit türevi",
    halfLife: "~17 saat (oral); ~4 saat (IV bolus)",
    route: "Oral · IV · IM",
  },
  {
    slug: "lipo-c-no-b12",
    number: "021",
    name: "Lipo-C (B12 Yok)",
    category: "Metabolik & Kilo",
    classification: "Lipotropik Bileşik · Metiyonin / İnositol / Kolin / L-Karnitin",
    summary:
      "Karaciğerin yağ metabolizmasının her lehçesine hâkim tek bir bileşik; dört substrat dilini tek bir kesintisiz konuşmada bir araya getirir.",
    sequence: "Metabolik lipotropik karışım",
    halfLife: "Bileşene göre değişir (saatler–günler)",
    route: "İntramusküler veya subkütan enjeksiyon",
  },
  {
    slug: "lipo-c-with-b12",
    number: "021",
    name: "Lipo-C (B12 ile)",
    category: "Metabolik & Kilo",
    classification: "Lipotropik Bileşik · Metiyonin / İnositol / Kolin / B-Kompleks / B12",
    summary:
      "Klasik lipotropik formül, hepatik metil verici kimyası merceğinden yeniden ele alınıyor. B12 eklenerek metilasyon yolu desteklenir.",
    sequence: "Lipotropik karışım + B12",
    halfLife: "Bileşene göre değişir (saatler–günler)",
    route: "İntramusküler · Subkütan",
  },
  {
    slug: "adipotide-fttp",
    number: "021",
    name: "Adipotide/FTTP",
    category: "Metabolik & Kilo",
    classification: "Proapoptotik Peptid · Prohibitin Hedefli / Vasküler Bozucu",
    summary:
      "Yağ dokusuna iştahı baskılayarak değil, onu besleyen kan akışını keserek yaklaşan bir peptid. Preklinik bir araştırma molekülüdür.",
    sequence: "22 amino asit",
    halfLife: "~2–4 saat (preklinik tahmini)",
    route: "Subkütan",
  },
  {
    slug: "lemon-bottle",
    number: "031",
    name: "Lemon Bottle",
    category: "Metabolik & Kilo",
    classification: "Çok Bileşenli Enjektabl Karışım · Lipolitik / Deoksikolik / Enzim",
    summary:
      "Bölgesel yağ eritme için konumlandırılmış Kore formülasyonlu bir enjektabl karışım; bileşenleri bilinse de birleşik profili hâlâ karakterize edilmektedir.",
    sequence: "Lipolitik enjeksiyon karışımı",
    halfLife: "Bileşene bağlı; deoksikolik asit 24–48 saatte böbrekten atılır",
    route: "Subkütan / İntradermal (mezoterapi tekniği)",
  },

  // ——— İyileşme & Onarım ———
  {
    slug: "bpc-157",
    number: "009",
    name: "BPC-157",
    category: "İyileşme & Onarım",
    classification: "Sitoprotektif · Anjiyojenik / Nitrik Oksit Modülatörü",
    summary:
      "Vücudun kendi gastrik kimyasından türetilen bir pentadekapeptid; doku, damar sistemi ve bağırsak-beyin ekseninde onarım sinyallerini aynı anda koordine etme kapasitesiyle incelenmiştir.",
    sequence: "15 amino asit",
    halfLife: "~4 saat (tahmini, kemirgen verisi)",
    route: "Subkütan · Oral · İntragastrik",
  },
  {
    slug: "tb-500",
    number: "017",
    name: "TB-500",
    category: "İyileşme & Onarım",
    classification: "Aktin Bağlayıcı Peptid · Timosin β4 Fragmanı",
    summary:
      "Timosin β4'ün sentetik bir fragmanı; aktin dinamiği, vasküler yeniden şekillenme ve inflamasyonun çözülmesi süreçlerinde vücudun kendi onarım mimarisini aynı anda devreye alır.",
    sequence: "7 amino asit",
    halfLife: "~4–6 gün (tahmini)",
    route: "Subkütan · İntramusküler",
    aliases: ["thymosin-beta-4"],
  },
  {
    slug: "bpc-157-tb-500",
    number: "021",
    name: "BPC-157 + TB-500",
    category: "İyileşme & Onarım",
    classification: "İkili Rejeneratif · Gastrik Pentadekapeptid / Aktin Bağlayıcı Fragman",
    summary:
      "Onarım konuşmasına tamamen farklı moleküler kapılardan giren iki peptid; birlikte, doku hasarını hiçbirinin tek başına ulaşamayacağı bir derinlikte ele alır.",
    sequence: "22 amino asit (kombine)",
    halfLife: "~4 saat (BPC-157) · ~6–8 gün (TB-500)",
    route: "Subkütan · İntramusküler enjeksiyon",
  },
  {
    slug: "ara-290",
    number: "021",
    name: "ARA-290",
    category: "İyileşme & Onarım",
    classification: "İnnate Onarım Reseptörü Agonisti · EPO Türevli · Non-hematopoetik",
    summary:
      "Eritropoietinin daha sessiz sinyali; kırmızı kan hücresi gürültüsü olmadan doku onarımını destekler.",
    sequence: "11 amino asit",
    halfLife: "Yaklaşık 2–4 saat (subkütan)",
    route: "Subkütan enjeksiyon",
  },
  {
    slug: "ll-37",
    number: "021",
    name: "LL-37",
    category: "İyileşme & Onarım",
    classification: "Konak Savunma Peptidi · Katelisidin",
    summary:
      "İnsanın kendi endojen peptidi; antimikrobiyal savunmayı ve doku onarımını koordine etmeye yardımcı olur.",
    sequence: "37 amino asit",
    halfLife: "~2–3 saat (plazma)",
    route: "Subkütan · Topikal · İntranazal",
  },
  {
    slug: "kpv",
    number: "021",
    name: "KPV",
    category: "İyileşme & Onarım",
    classification: "MSH Fragmanı · MC1R / MC3R Agonisti",
    summary:
      "Melanokortin sinyalinden türetilen bir tripeptid; bağırsak ve sistemik inflamasyonu immünosupresyon olmadan yatıştırma kapasitesiyle incelenmiştir.",
    sequence: "3 amino asit",
    halfLife: "~2–4 saat (in vitro)",
    route: "Subkütan · Oral (deneysel) · Topikal",
  },
  {
    slug: "vesugen",
    number: "021",
    name: "Vesugen",
    category: "İyileşme & Onarım",
    classification: "Peptid Biyoregülatör · Vasküler / Bağ Dokusu",
    summary:
      "Vasküler genoma doğrudan seslenen bir tripeptid; endotel hücre sağkalımını ve bağ dokusu bütünlüğünü yöneten transkripsiyon makinesini modüle eder.",
    sequence: "3 amino asit",
    halfLife: "~2–4 saat (tahmini, in vitro)",
    route: "Subkütan · Sublingual (araştırma aşamasında)",
  },
  {
    slug: "cardiogen",
    number: "021",
    name: "Cardiogen",
    category: "İyileşme & Onarım",
    classification: "Epigenetik Düzenleyici · Telomer İlişkili Tetrapeptid",
    summary:
      "Kalp dokusundan türetilen bir tetrapeptid; gen ifadesi, kardiyomiyosit sağkalımı ve miyokardiyal yaşlanmanın yavaş biyolojisi üzerindeki etkisiyle incelenmiştir.",
    sequence: "4 amino asit",
    halfLife: "Yaklaşık 2–4 saat (in vitro)",
    route: "Subkütan · Sublingual (araştırma aşamasında)",
  },
  {
    slug: "glow",
    number: "015",
    name: "GLOW",
    category: "İyileşme & Onarım",
    classification: "Tripeptid Kompleksi · Bakır / Epithalon / GHK-Cu",
    summary:
      "Kolajen yenilenmesine, hücresel uzun ömüre ve cildin zamana direnen sessiz mimarisine aynı anda seslenen tek bir peptid formülasyonu.",
    sequence: "Çok bileşenli (GHK-Cu + TB-500)",
    halfLife: "GHK-Cu ~24–48 saat; Epithalon ~saatler",
    route: "Topikal · Subkütan · İntradermal",
  },
  {
    slug: "klow",
    number: "015",
    name: "KLOW",
    category: "İyileşme & Onarım",
    classification: "Çok Bileşenli Kompleks · Cu-GHK / Timosin β4 / BPC-157",
    summary:
      "Tek bir formülasyon vücudun en temel dört onarım yolunu aynı anda devreye alır; doku, damar ve bağ dokusu onarımını tek bir karışımda birleştirir.",
    sequence: "Çok bileşenli peptid karışımı",
    halfLife: "Bileşene göre değişir · 0.5–24 saat (tahmini)",
    route: "Subkütan · İntranazal (bileşene bağlı)",
  },

  // ——— Beyin & Nootropikler ———
  {
    slug: "semax",
    number: "009",
    name: "Semax",
    category: "Beyin & Nootropikler",
    classification: "Nöropeptid · ACTH(4–7) Analoğu / BDNF İndükleyici",
    summary:
      "Stres yanıt aksının sentetik bir fragmanı; kalıcı bilişsel mimari için bir araç olarak yeniden tasarlanmıştır. BDNF üzerinden odak ve hafızayı destekler.",
    sequence: "7 amino asit",
    halfLife: "~20 dakika (plazma); MSS etkileri 20–24 saat sürer",
    route: "İntranazal · Subkütan",
  },
  {
    slug: "selank",
    number: "009",
    name: "Selank",
    category: "Beyin & Nootropikler",
    classification: "Anksiyolitik Peptid · Tuftsin Analoğu / BDNF Modülatörü",
    summary:
      "Bilişi susturmadan kaygıyı yatıştıran sentetik bir heptapeptid. Sakinliği zihinsel netlik pahasına sağlamaz.",
    sequence: "7 amino asit",
    halfLife: "~2 dakika (plazma); MSS etkileri 4–6 saat sürer",
    route: "İntranazal · Subkütan",
  },
  {
    slug: "cerebrolysin",
    number: "021",
    name: "Cerebrolysin",
    category: "Beyin & Nootropikler",
    classification: "Nörotrofik Peptid Karışımı · BDNF / NGF Taklitçisi",
    summary:
      "Kırk yıllık kontrollü sinirbilim araştırması, endojen nörotrofinlerin dilini konuşan bir peptid preparatında yoğunlaşmıştır.",
    sequence: "Nöropeptid karışımı (<10 kDa)",
    halfLife: "~15–30 dakika (aktif fraksiyonlar); etkiler klerensin ötesinde sürer",
    route: "İntravenöz (IV) veya İntramusküler (IM)",
  },
  {
    slug: "dihexa",
    number: "021",
    name: "Dihexa",
    category: "Beyin & Nootropikler",
    classification: "Hepatosit Büyüme Faktörü Güçlendiricisi · HGF / MET Yolu",
    summary:
      "Hepatosit büyüme faktörü sinyalini kendi doğal temel düzeyinin çok ötesinde güçlendirmek için tasarlanmış küçük bir peptid taklitçisi. Sinaptogenez üzerinde incelenir.",
    sequence: "6 amino asit (peptidomimetik)",
    halfLife: "~12–24 saat (tahmini, oral)",
    route: "Oral · İntranazal · Subkütan",
  },
  {
    slug: "dsip",
    number: "021",
    name: "DSIP",
    category: "Beyin & Nootropikler",
    classification: "Nöropeptid · Uyku Düzenleyici · Stres Azaltıcı",
    summary:
      "Dokuz kalıntı uzunluğunda ve uykunun derinliklerinde keşfedilen bu peptid, gecenin metabolizma üzerindeki sessiz çalışmasına dair her varsayımı yeniden yazdı.",
    sequence: "9 amino asit",
    halfLife: "~30–60 dakika (endojen); taşıyıcıyla uzar",
    route: "Subkütan · İntravenöz (araştırma)",
  },
  {
    slug: "pinealon",
    number: "021",
    name: "Pinealon",
    category: "Beyin & Nootropikler",
    classification: "Pineal Peptid · Epigenetik Düzenleyici",
    summary:
      "Pineal bezden gelen bir tripeptid; nöronal gen ifadesi ve bilişsel yaşlanmanın biyolojisi üzerindeki etkisiyle incelenmiştir.",
    sequence: "3 amino asit",
    halfLife: "~2–4 saat (tahmini, in vitro)",
    route: "İntranazal · Subkütan",
  },
  {
    slug: "cortagen",
    number: "021",
    name: "Cortagen",
    category: "Beyin & Nootropikler",
    classification: "Kortikal Tetrapeptid · Epigenetik Düzenleyici",
    summary:
      "Reseptör yüzeyinde değil, çekirdeğin içinde çalışıyor gibi görünen bir tetrapeptid; yaşlanan kortikal dokunun gen ifadesi peyzajını yeniden ayarlar.",
    sequence: "4 amino asit",
    halfLife: "Yaklaşık 2–4 saat (tahmini, in vitro)",
    route: "Subkütan · İntranazal (araştırma aşamasında)",
  },
  {
    slug: "crystagen",
    number: "021",
    name: "Crystagen",
    category: "Beyin & Nootropikler",
    classification: "Glikopeptid Analoğu · Kolajen Sentez Modülatörü",
    summary:
      "Bağ dokusu onarımının hücresel makinesini iskele düzeyinde yeniden devreye alan sentetik bir kolajen motifi. İmmün ve bağ dokusu sinyalleşmesinde incelenir.",
    sequence: "Tripeptid analoğu",
    halfLife: "Yaklaşık 4–6 saat (in vitro fibroblast modelleri)",
    route: "Subkütan · Topikal (araştırma)",
  },
  {
    slug: "p21-p021",
    number: "021",
    name: "P21 (P021)",
    category: "Beyin & Nootropikler",
    classification: "CNTF Türevli Peptid · TrkB / STAT3 Modülatörü",
    summary:
      "CNTF türevli asetillenmiş bir peptid; sinaptik mimariyi sürdürme, tau patolojisini azaltma ve erişkin nörogenezini destekleme kapasitesiyle incelenmiştir.",
    sequence: "6 amino asit",
    halfLife: "~2–4 saat (in vitro); kemirgen modellerinde MSS geçişi bildirildi",
    route: "İntranazal · Subkütan (araştırma)",
  },
  {
    slug: "pe-22-28",
    number: "021",
    name: "PE-22-28",
    category: "Beyin & Nootropikler",
    classification: "Spadin Analoğu · TREK-1 İnhibitörü",
    summary:
      "Sortilin propeptidinin bir fragmanı; bir arka plan potasyum kanalını susturur ve böylece ruh haliyle ilgili nöronların ateşleme eşiğini kaydırır.",
    sequence: "7 amino asit",
    halfLife: "~2–4 saat (tahmini, kemirgen modelleri)",
    route: "İntranazal · Subkütan (araştırma)",
  },
  {
    slug: "adamax",
    number: "031",
    name: "Adamax",
    category: "Beyin & Nootropikler",
    classification: "Vazopressin Analoğu · V1a / V1b Modülatörü",
    summary:
      "Hafızanın oluştuğu yerde Adamax vazopressinin dilini konuşur; her sinyali keskinleştirir, her izi güçlendirir ve geçici deneyimi kalıcı bilgiye dönüştürür.",
    sequence: "7 amino asit (siklik)",
    halfLife: "~2–4 saat",
    route: "İntranazal · Subkütan",
  },

  // ——— Hormonal & Üreme ———
  {
    slug: "pt-141",
    number: "009",
    name: "PT-141",
    category: "Hormonal & Üreme",
    classification: "Melanokortin Agonisti · MC3R / MC4R",
    summary:
      "Çevresel sistemi tamamen atlayan ve arzuyu nörolojik kökeninde ele alan merkezi bir sinyal.",
    sequence: "7 amino asit (siklik)",
    halfLife: "~2.7 saat (plazma)",
    route: "Subkütan · İntranazal (araştırma aşamasında)",
  },
  {
    slug: "gonadorelin-acetate",
    number: "021",
    name: "Gonadorelin Acetate",
    category: "Hormonal & Üreme",
    classification: "GnRH Agonisti · Hipotalamik Dekapeptid",
    summary:
      "Tüm bir endokrin kaskadını yöneten hipotalamik sinyal; onu aktive mi yoksa baskılar mı belirleyen tek değişken üzerinden geri getirilir: ritim.",
    sequence: "10 amino asit",
    halfLife: "2–10 dakika (IV); ~30 dakika (SC)",
    route: "IV · SC · İntranazal",
  },
  {
    slug: "hcg",
    number: "009",
    name: "HCG",
    category: "Hormonal & Üreme",
    classification: "Gonadotropin · LH Analoğu",
    summary:
      "Testislerin zaten anladığı dili konuşan bir molekül; dışarıdan verilen testosteronun basitçe yerine geçeceği hormonal konuşmayı korur.",
    sequence: "237 aa + 145 aa alt birim",
    halfLife: "~36 saat (terminal)",
    route: "Subkütan · İntramusküler",
  },
  {
    slug: "hmg",
    number: "021",
    name: "HMG",
    category: "Hormonal & Üreme",
    classification: "Gonadotropin · FSH / LH Aktivitesi",
    summary:
      "Vücudun en temel iki üreme sinyalini aynı anda taşıyan saflaştırılmış bir ekstre; hipofiz ile gonad arasındaki konuşmayı yeniden kurar.",
    sequence: "Protein karışımı (FSH + LH)",
    halfLife: "FSH ~36 saat · LH ~24 saat",
    route: "Subkütan · İntramusküler",
  },
  {
    slug: "kisspeptin-10",
    number: "021",
    name: "KissPeptin-10",
    category: "Hormonal & Üreme",
    classification: "KISS1R Agonisti · GnRH Pulse Başlatıcı",
    summary:
      "Vücudun bildiği her üreme ve metabolik hormon konuşmasının en üst basamağında yer alan hipotalamik sinyal.",
    sequence: "10 amino asit",
    halfLife: "~28 dakika (IV); ~45 dakika (SC)",
    route: "Subkütan · İntravenöz (araştırma)",
  },
  {
    slug: "oxytocin-acetate",
    number: "015",
    name: "Oxytocin Acetate",
    category: "Hormonal & Üreme",
    classification: "Nöropeptid Hormon · OXT Reseptör Agonisti",
    summary:
      "Sosyal sinyalleşmeyi ve çevresel fizyolojiyi, sinir sisteminin en korunmuş peptid yollarından biri üzerinden koordine eder.",
    sequence: "9 amino asit",
    halfLife: "1–6 dakika (plazma) · 20–30 dakika (MSS)",
    route: "İntranazal · Subkütan · IV (klinik)",
  },

  // ——— Uzun Ömür & GH Desteği ———
  {
    slug: "ss-31",
    number: "021",
    name: "SS-31",
    category: "Uzun Ömür & GH Desteği",
    classification: "Mitokondri Hedefli Antioksidan · Kardiyolipin Stabilizatörü",
    summary:
      "Enerjinin ya üretildiği ya da kaybedildiği iç mitokondriyal membranla konuşan bir tetrapeptid. Hücresel enerji verimini korumaya odaklanır.",
    sequence: "4 amino asit",
    halfLife: "~2–3 saat (plazma)",
    route: "Subkütan · İntravenöz (araştırma aşamasında)",
    aliases: ["ss-31-elamipretide"],
  },
  {
    slug: "mots-c",
    number: "015",
    name: "MOTS-c",
    category: "Uzun Ömür & GH Desteği",
    classification: "Mitokondri Kaynaklı Peptid · AMPK Aktivatörü",
    summary:
      "Mitokondriyal genomun içine kodlanmış bir peptid; hücrenin enerji algılama makinesine doğrudan seslenir.",
    sequence: "16 amino asit",
    halfLife: "~1–2 saat (kemirgen); insan verisi sınırlı",
    route: "Subkütan · İntraperitoneal (araştırma)",
  },
  {
    slug: "tesamorelin",
    number: "009",
    name: "Tesamorelin",
    category: "Uzun Ömür & GH Desteği",
    classification: "GHRH Analoğu · Büyüme Hormonu Salgılatıcısı",
    summary:
      "Faz III çalışmalarını tamamlayıp FDA onayı alan tek büyüme hormonu salgılatıcısı; HIV ilişkili lipodistrofide visseral yağ üzerinde incelenmiştir.",
    sequence: "44 amino asit",
    halfLife: "~26 dakika (plazma); pulsatil GH salımıyla etki sürer",
    route: "Subkütan enjeksiyon",
  },
  {
    slug: "sermorelin",
    number: "009",
    name: "Sermorelin",
    category: "Uzun Ömür & GH Desteği",
    classification: "GHRH Analoğu · Somatotrof Salgılatıcı",
    summary:
      "Sermorelin, hipofizin zaten duymayı ve yanıtlamayı bildiği bir sinyali geri getirir. Fizyolojik, pulsatil bir GH salımını destekler.",
    sequence: "44 amino asit",
    halfLife: "10–20 dakika (plazma); biyolojik etki 90–120 dakika",
    route: "Subkütan enjeksiyon",
  },
  {
    slug: "ipamorelin",
    number: "009",
    name: "Ipamorelin",
    category: "Uzun Ömür & GH Desteği",
    classification: "Seçici GH Salgılatıcısı · GHSR Agonisti",
    summary:
      "Gürültü olmadan büyüme hormonu salımı için hassas bir sinyal. Seçiciliğiyle kortizol ve prolaktini etkilemeden çalışır.",
    sequence: "5 amino asit",
    halfLife: "~2 saat",
    route: "Subkütan · İntravenöz",
  },
  {
    slug: "cjc-1295-no-dac-ipamorelin",
    number: "009",
    name: "CJC-1295 (DAC yok) + Ipamorelin",
    category: "Uzun Ömür & GH Desteği",
    classification: "GHRH Analoğu + Ghrelin Taklitçisi · İkili GH Salgılatıcı",
    summary:
      "Büyüme hormonunu vücudun her zaman amaçladığı şekilde geri getiren eşleşmiş bir sinyal: pulsatil, fizyolojik ve endojen geri bildirimin ritmine tam zamanlı.",
    sequence: "44 + 5 amino asit (kombinasyon)",
    halfLife: "CJC-1295 (DAC yok): ~30 dk · Ipamorelin: ~2 saat",
    route: "Subkütan enjeksiyon",
    aliases: ["cjc-1295-ipamorelin"],
  },
  {
    slug: "cjc-1295-no-dac",
    number: "009",
    name: "CJC-1295 (DAC yok)",
    category: "Uzun Ömür & GH Desteği",
    classification: "GHRH Analoğu · GH Salgılatıcısı",
    summary:
      "Bağ olmadan açılan, kısa ve fizyolojik bir büyüme hormonu sinyali darbesi.",
    sequence: "44 amino asit",
    halfLife: "~30 dakika (plazma)",
    route: "Subkütan enjeksiyon",
  },
  {
    slug: "cjc-1295-with-dac",
    number: "009",
    name: "CJC-1295 (DAC ile)",
    category: "Uzun Ömür & GH Desteği",
    classification: "GHRH Analoğu · DAC Konjuge",
    summary:
      "Hipofizle saatlerle değil, haftalarla ölçülen sürekli bir konuşma. DAC konjugasyonu etki süresini uzatır.",
    sequence: "44 amino asit (DAC ile)",
    halfLife: "6–8 gün",
    route: "Subkütan enjeksiyon",
  },
  {
    slug: "ghrp-2-acetate",
    number: "009",
    name: "GHRP-2 Acetate",
    category: "Uzun Ömür & GH Desteği",
    classification: "GH Salgılatıcısı · GHSR-1a Agonisti",
    summary:
      "Sinyalleşme katmanını yukarıdan devreye alarak hipofizin kendi büyüme hormonu çıktısını artıran sentetik bir heksapeptid; endojen ritmi korur, her darbenin genliğini yükseltir.",
    sequence: "6 amino asit",
    halfLife: "~30 dakika",
    route: "Subkütan · İntranazal",
    aliases: ["ghrp-2"],
  },
  {
    slug: "ghrp-6-acetate",
    number: "009",
    name: "GHRP-6 Acetate",
    category: "Uzun Ömür & GH Desteği",
    classification: "Heksapeptid · GHSR-1a Agonisti / Ghrelin Taklitçisi",
    summary:
      "Vücudun kendi salgılatıcı sinyalini taklit eden altı kalıntılı bir heksapeptid; alanın kırk yıldır okumayı öğrendiği hipofiz aksını devreye alır.",
    sequence: "6 amino asit",
    halfLife: "15–60 dakika (bifazik)",
    route: "Subkütan · İntranazal",
    aliases: ["ghrp-6"],
  },
  {
    slug: "hexarelin-acetate",
    number: "009",
    name: "Hexarelin Acetate",
    category: "Uzun Ömür & GH Desteği",
    classification: "GHS-R Agonisti · GHSR-1a / CD36",
    summary:
      "Hipofizi ve kalbi iki ayrı reseptör popülasyonu üzerinden devreye alan sentetik bir heksapeptid; anabolik ve kardiyoprotektif etkileri tamamen ayrı kaskadlarla üretir.",
    sequence: "6 amino asit",
    halfLife: "~30–60 dakika (plazma)",
    route: "Subkütan · İntravenöz (araştırma)",
    aliases: ["hexarelin"],
  },
  {
    slug: "igf-1lr3",
    number: "009",
    name: "IGF-1LR3",
    category: "Uzun Ömür & GH Desteği",
    classification: "IGF-1 Analoğu · Long R3 Varyantı",
    summary:
      "Doğal sinyalin çoktan susturulmuş olacağı bir noktadan çok sonra bile anabolik konuşmayı açık tutmak için tasarlanmış sentetik bir analog.",
    sequence: "83 amino asit",
    halfLife: "20–30 saat",
    route: "Subkütan · İntramusküler",
  },
  {
    slug: "mgf",
    number: "021",
    name: "MGF",
    category: "Uzun Ömür & GH Desteği",
    classification: "IGF-1 Splays Varyantı · Yerel Doku Onarım Sinyali",
    summary:
      "IGF-1 geninin bir splays varyantı; mekanik hasarın tam yerinde ve anında vücudun kendi onarım makinesini aktive eder.",
    sequence: "24 amino asit (E-domain)",
    halfLife: "Dakikalar (doğal); saatler (PEGile analog)",
    route: "İntramusküler · Subkütan",
  },
  {
    slug: "peg-mgf",
    number: "021",
    name: "PEG MGF",
    category: "Uzun Ömür & GH Desteği",
    classification: "IGF-1 Splays Varyantı · PEGile Mekano-Büyüme Faktörü",
    summary:
      "IGF-1'in PEGile bir splays varyantı; vücudun egzersiz sonrası onarım sinyalini, satellit hücrelerin alıp harekete geçmesine yetecek kadar uzatır.",
    sequence: "24 amino asit (PEGile)",
    halfLife: "~72–96 saat (PEGilasyonla uzatılmış)",
    route: "Subkütan",
  },
  {
    slug: "ace-031",
    number: "021",
    name: "ACE-031",
    category: "Uzun Ömür & GH Desteği",
    classification: "Miyostatin İnhibitörü · ActRIIB Yem Reseptörü",
    summary:
      "Kasa büyümeyi durdurmasını söyleyen sinyalleri susturan bir füzyon proteini.",
    sequence: "Füzyon proteini (~110 kDa)",
    halfLife: "~14–21 gün",
    route: "Subkütan enjeksiyon",
  },
  {
    slug: "fst-344",
    number: "015",
    name: "FST-344",
    category: "Uzun Ömür & GH Desteği",
    classification: "Miyostatin İnhibitörü · Follistatin İzoformu",
    summary:
      "Vücudun kas büyümesi üzerindeki kendi freni hedef hâline geldiğinde, FST-344 kısıtlama ile bolluk arasındaki hassas moleküler eşiği araştırır.",
    sequence: "344 amino asit",
    halfLife: "~24–36 saat (tahmini, kemirgen modelleri)",
    route: "Subkütan · İntramusküler (araştırma)",
  },
  {
    slug: "gdf-8-myostatin",
    number: "021",
    name: "GDF-8 (Myostatin)",
    category: "Uzun Ömür & GH Desteği",
    classification: "Miyokin İnhibitörü · TGF-β Süper Ailesi",
    summary:
      "İskelet kası üzerinde vücudun yapısal freni olarak işlev gören tek bir endojen protein; bu fren dikkatle inhibe edildiğinde literatürün ortaya koyduğu şey.",
    sequence: "375 aa (olgun dimer)",
    halfLife: "~3–4 gün (endojen dolaşan form)",
    route: "Endojen; inhibitörler SC veya IV",
  },
  {
    slug: "foxo4-dri",
    number: "021",
    name: "FOXO4-DRI",
    category: "Uzun Ömür & GH Desteği",
    classification: "D-Retro İnverso Peptid · FOXO4–p53 Ekseni Bozucusu",
    summary:
      "Hangi hücrelerin kalması, hangilerinin amacını doldurduğu ayrımını yapan hassas bir moleküler hakem. Senesan hücre biyolojisinde incelenir.",
    sequence: "18 amino asit (D-retro inverso)",
    halfLife: "~4–6 saat (in vivo, kemirgen modelleri)",
    route: "İntraperitoneal (preklinik); Subkütan (araştırma)",
  },

  // ——— Cilt & Estetik ———
  {
    slug: "ghk-cu",
    number: "009",
    name: "GHK-Cu",
    category: "Cilt & Estetik",
    classification: "Bakır Peptid · Doku Yenileme / Antioksidan / Gen Düzenleme",
    summary:
      "Canlı dokuda ilk yara sıvısı biriktiğinden beri bakırı genoma taşıyan bir tripeptid. Kolajen sentezi ve doku yenilenmesinde temel bir aktördür.",
    sequence: "3 amino asit + Cu²⁺",
    halfLife: "~0.5–1 saat (serbest tripeptid); dokuda daha uzun",
    route: "Subkütan · Topikal",
  },
  {
    slug: "ahk-cu",
    number: "021",
    name: "AHK-Cu",
    category: "Cilt & Estetik",
    classification: "Bakır Bağlayıcı Tripeptid · Doku Yenileme / Anjiyogenez",
    summary:
      "AHK-Cu, vücudun zaten tanıdığı bakır şelatlı bir tripeptid fragmanı; onarımın çekirdek süreçlerini yönlendiriyor gibi görünür.",
    sequence: "3 amino asit + Cu²⁺",
    halfLife: "~8–12 saat (tahmini, in vitro)",
    route: "Topikal · Subkütan",
  },
  {
    slug: "melanotan-ii",
    number: "009",
    name: "Melanotan II",
    category: "Cilt & Estetik",
    classification: "Melanokortin Agonisti · MC1R / MC3R / MC4R / MC5R",
    summary:
      "Melanokortin sistemini, endojen ligandın hiçbir zaman eşleşmek için tasarlanmadığı bir genişlik ve güçle devreye alan siklik bir heptapeptid.",
    sequence: "7 amino asit (siklik)",
    halfLife: "~1–2 saat (plazma); pigment etkileri günler-haftalar sürer",
    route: "Subkütan enjeksiyon",
  },
  {
    slug: "melanotan-i",
    number: "011",
    name: "Melanotan I",
    category: "Cilt & Estetik",
    classification: "MC1R Agonisti · α-MSH Analoğu",
    summary:
      "Vücudun kendi pigmentasyon hormonunun yapısal bir analoğu; uzatılmış reseptör kalışı için tasarlanmış ve melanogenezi artırma, fotokorumayı güçlendirme kapasitesiyle incelenmiştir.",
    sequence: "13 amino asit",
    halfLife: "~1.5–2 saat (terminal)",
    route: "Subkütan enjeksiyon",
  },
  {
    slug: "snap-8",
    number: "021",
    name: "Snap-8",
    category: "Cilt & Estetik",
    classification: "SNARE Kompleksi Modülatörü · Asetilkolin Salım İnhibitörü",
    summary:
      "Snap-8, nöromusküler konuşmayı kaynağında yatıştırır. Topikal olarak mimik kırışıklıkların görünümünü azaltmak için incelenir.",
    sequence: "8 amino asit",
    halfLife: "~12–16 saat (topikal depo tahmini)",
    route: "Topikal · Krem veya Serum",
  },

  // ——— Genel Sağlık ———
  {
    slug: "thymosin-alpha-1",
    number: "015",
    name: "Thymosin Alpha-1",
    category: "Genel Sağlık",
    classification: "Timik Peptid · Doğal & Adaptif İmmün Modülatör",
    summary:
      "Baskılanmış bir bağışıklık sisteminin kaybetmeye başladığı sinyalleşme dilbilgisini geri getiren 28 amino asitlik bir peptid.",
    sequence: "28 amino asit",
    halfLife: "~2 saat (terminal); etkiler 24–48 saat sürer",
    route: "Subkütan enjeksiyon",
  },
  {
    slug: "thymalin",
    number: "021",
    name: "Thymalin",
    category: "Genel Sağlık",
    classification: "Timik Peptid · İmmünomodülatör / Nöroendokrin Düzenleyici",
    summary:
      "Thymalin, timik sinyalleşmeyi yaşa bağlı düşüş boyunca immün mimariyi desteklemeyi amaçlayan bir peptid fraksiyonuna indirger.",
    sequence: "Polipeptid kompleksi (1–6 kDa)",
    halfLife: "Yaklaşık 30–60 dakika (aktif pencere birkaç saat uzar)",
    route: "Subkütan veya intramusküler enjeksiyon",
  },
  {
    slug: "epithalon",
    number: "009",
    name: "Epithalon",
    category: "Genel Sağlık",
    classification: "Epigenetik Düzenleyici · Telomeraz Aktivatörü",
    summary:
      "Epigenetik, nöroendokrin ve redoks sinyallerini, geroscience literatürünün hücresel yaşın moleküler bir sıfırlaması olarak tanımladığı şeyde birleştiren bir tetrapeptid dizisi.",
    sequence: "4 amino asit",
    halfLife: "~60–80 dakika (IV); hayvan modellerinde uzun doku tutulumu",
    route: "Subkütan · İntravenöz · İntranazal (araştırma)",
  },
  {
    slug: "humanin",
    number: "021",
    name: "Humanin",
    category: "Genel Sağlık",
    classification: "Mitokondriyal Sitoprotektif · FPRL1 / CNTFR Agonisti",
    summary:
      "Mitokondriyal genomun içine yazılmış bir peptid; hücrenin yaşlanma, apoptoz ve metabolik düşüşe karşı devreye aldığı bir sağkalım sinyalini kodlar.",
    sequence: "24 amino asit",
    halfLife: "~2–4 saat (sistemik); S14G analoğuyla daha uzun",
    route: "Subkütan · İntraserebroventriküler (araştırma)",
  },
  {
    slug: "nad",
    number: "021",
    name: "NAD+",
    category: "Genel Sağlık",
    classification: "Redoks Koenzimi · Sirtuin Aktivatörü / PARP Substratı",
    summary:
      "Her hücrenin ilk harcadığı molekül ve yaşlanmanın her şeyden önce tükettiği şey. Hücresel enerji ve onarımın merkezinde durur.",
    sequence: "Dinükleotid koenzim",
    halfLife: "~1–2 dakika (serbest plazma); doku havuzları değişir",
    route: "IV · Oral · Subkütan (öncül formlar)",
    aliases: ["nad-nmn"],
  },
  {
    slug: "glutathione",
    number: "021",
    name: "Glutathione",
    category: "Genel Sağlık",
    classification: "Endojen Tripeptid · GSH / Redoks Düzenleyici",
    summary:
      "Glutatyon, hücresel savunmanın oksidatif dilinde akıcı kalan kadim bir tripeptiddir. Antioksidan savunmanın merkezinde yer alır.",
    sequence: "3 amino asit",
    halfLife: "~10 dakika (serbest plazma); hücre içinde saatler",
    route: "İntravenöz · Nebülize · Oral (lipozomal) · Subkütan",
  },
  {
    slug: "b12-methylcobalamin",
    number: "021",
    name: "B12 (Methylcobalamin)",
    category: "Genel Sağlık",
    classification: "Kobalamin · Metil Verici / Nörolojik Kofaktör",
    summary:
      "Metilkobalamin, metilasyon, miyelin bakımı ve nörolojik işlevin merkezinde yer alır. Enerji ve sinir sağlığında temel bir kofaktördür.",
    sequence: "Kobalamin koenzimi",
    halfLife: "~6 saat (plazma); doku tutulumu uzun",
    route: "İntramusküler · Subkütan · Oral (yüksek doz)",
    aliases: ["b12"],
  },
  {
    slug: "melatonin",
    number: "021",
    name: "Melatonin",
    category: "Genel Sağlık",
    classification: "Endojen Nörohormon · MT1 / MT2 Agonisti",
    summary:
      "Melatonin, vücudun biyolojik gecenin başlıca sinyalidir; sirkadiyen zamanlamayı koordine ederken birçok dokuda antioksidan ve metabolik etkiler gösterir.",
    sequence: "Küçük molekül",
    halfLife: "20–50 dakika (hızlı salım)",
    route: "Oral · Sublingual · Transdermal",
  },
  {
    slug: "orexin-a",
    number: "021",
    name: "Orexin A",
    category: "Genel Sağlık",
    classification: "Nöropeptid · OX1R / OX2R İkili Agonisti",
    summary:
      "Uyanıklığı, iştahı ve ödülü tek bir konuşmada tutan hipotalamik sinyal.",
    sequence: "33 amino asit",
    halfLife: "~20 dakika (merkezi); çevresel tahminler daha uzun",
    route: "İntranazal · ICV (araştırma) · IV (araştırma)",
  },
  {
    slug: "orexin-b",
    number: "015",
    name: "Orexin B",
    category: "Genel Sağlık",
    classification: "Nöropeptid · Oreksin Reseptör Agonisti (OX1R / OX2R)",
    summary:
      "Uyanıklığı, iştahı ve otonom tonusu tek bir konuşmada tutan hipotalamik sinyal.",
    sequence: "28 amino asit",
    halfLife: "~4–6 dakika (plazma, kemirgen modelleri)",
    route: "İntraserebroventriküler · İntranazal (araştırma)",
  },
  {
    slug: "vip",
    number: "021",
    name: "VIP",
    category: "Genel Sağlık",
    classification: "Vazoaktif İntestinal Peptid · VPAC1 / VPAC2 Agonisti",
    summary:
      "Vücudun kendi anti-inflamatuar sevkiyatı: dokuyu yatıştıran, damarları genişleten ve bağışıklık sistemiyle akıcı konuşan 28 amino asitlik bir sinyal.",
    sequence: "28 amino asit",
    halfLife: "~2 dakika (plazma); taşıyıcı formülasyonlarla uzar",
    route: "IV · İntranazal · Subkütan (araştırma)",
  },
  {
    slug: "bac-water",
    number: "001",
    name: "Bakteriyostatik Su",
    category: "Genel Sağlık",
    classification: "Sulandırma Çözücüsü · Bakteriyostatik",
    summary:
      "Her sulandırılmış peptidi mümkün kılan evrensel taşıyıcı; iyi anlaşılmış tek bir antimikrobiyal mekanizmayla çok sayıda çekişte sterilliği korur.",
    sequence: "Peptid değil",
    halfLife: "Geçerli değil",
    route: "Subkütan / İntramusküler / İntranazal",
  },
  {
    slug: "sterile-water",
    number: "001",
    name: "Steril Su",
    category: "Genel Sağlık",
    classification: "Çözücü · Sulandırma Ortamı",
    summary:
      "Her sulandırılmış peptid protokolünün moleküler temel durumu. Tasarım gereği inert, gereklilik gereği vazgeçilmez ve yalnızca onu tutan eller kadar hassas.",
    sequence: "Peptid değil",
    halfLife: "Geçerli değil",
    route: "Sulandırma / Enjeksiyon",
  },
]

// The scraped source numbers were not unique per entry, so we assign each
// monograph a stable sequential catalogue number in curated display order,
// mirroring Method's numbered lexicon (No 001 to No 078).
export const monographs: Monograph[] = rawMonographs.map((m, i) => ({
  ...m,
  number: String(i + 1).padStart(3, "0"),
}))

export function getMonograph(slug: string): Monograph | undefined {
  return monographs.find(
    (m) => m.slug === slug || (m.aliases && m.aliases.includes(slug)),
  )
}

export function monographsByCategory(category: string): Monograph[] {
  return monographs.filter((m) => m.category === category)
}
