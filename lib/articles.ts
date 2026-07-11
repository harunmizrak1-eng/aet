export interface Article {
  slug: string
  title: string
  category: string
  excerpt: string
  readMinutes: number
  date: string
  /** paragraphs, kept simple, no CMS yet */
  body: string[]
  relatedLinks?: { href: string; label: string }[]
}

export const articles: Article[] = [
  {
    slug: "retatrutide-nedir",
    title: "Retatrutide neden farklı bir nesil?",
    category: "Metabolik",
    excerpt:
      "Üçlü reseptör mekanizması, kilo kaybının ötesinde ne anlama geliyor ve neden önceki GLP-1 moleküllerinden ayrışıyor.",
    readMinutes: 4,
    date: "2026-06-20",
    body: [
      "Retatrutide, tek bir molekülle üç ayrı reseptöre etki eden ilk metabolik bileşiklerden biri. GLP-1, GIP ve glukagon yollarını aynı anda hedefliyor. Bu, iştah kontrolünün ötesinde bir şey anlamına geliyor.",
      "Önceki nesil moleküller tek ya da çift reseptör üzerinden çalışıyordu. Glukagon yolunun devreye girmesi, yağ metabolizmasını ve enerji harcamasını doğrudan etkiliyor. Faz 3 çalışmalarında görülen sonuçların yüksekliği buradan geliyor.",
      "Ancak bir molekülün güçlü olması, herkes için doğru olduğu anlamına gelmez. Doz, süre ve bireysel metabolik profil belirleyici. Bu yüzden protokol her zaman kişiye özel kurulur, referans bir tablodan alınmaz.",
      "Kanıt seviyesi net: retatrutide klinik veriyle desteklenen bir molekül. Bu, kütüphanemizde onu spekülatif bileşiklerden ayıran şey.",
    ],
  },
  {
    slug: "kanit-seviyesi-neden-onemli",
    title: "Kanıt seviyesi neden her şeyin merkezinde?",
    category: "Yaklaşım",
    excerpt:
      "Bir peptidin popüler olması, işe yaradığı anlamına gelmez. Kanıtlanmış, teorik ve preklinik ayrımı neden bu kadar önemli.",
    readMinutes: 3,
    date: "2026-06-12",
    body: [
      "Peptid dünyasının en büyük sorunu, popülerlik ile kanıtın karıştırılması. Bir bileşik sosyal medyada ne kadar konuşulursa konuşulsun, arkasındaki veri seviyesi değişmez.",
      "Üç kademe kullanıyoruz. Klinik kanıt: insan çalışmalarıyla desteklenen moleküller. Mekanistik: mekanizması iyi tanımlı ama geniş insan verisi olmayan bileşikler. Preklinik: kanıtı büyük ölçüde hayvan çalışmalarına dayanan, deneysel seviyedekiler.",
      "Bu ayrımı asla bulandırmayız. Preklinik bir bileşiği klinik kanıtlıymış gibi sunmak, en yaygın ve en tehlikeli yanıltma. Bizim işimiz tam tersini yapmak.",
      "Şeffaflık burada bir pazarlama sözü değil. Hangi bileşiğin nerede durduğunu bilmek, doğru kararın ilk şartı.",
    ],
  },
  {
    slug: "healthspan-vs-lifespan",
    title: "Uzun yaşamak mı, iyi yaşamak mı?",
    category: "Longevity",
    excerpt:
      "Longevity'nin asıl ölçüsü ömür değil healthspan. Sağlıklı ve fonksiyonel geçen yılların neden daha önemli olduğu.",
    readMinutes: 3,
    date: "2026-06-04",
    body: [
      "Longevity denince akla uzun yaşamak geliyor. Oysa asıl mesele bu değil. Ortalama insan, ömrünün son yıllarının önemli bir kısmını düşük sağlıkla geçiriyor.",
      "Healthspan, kişinin güçlü, fonksiyonel ve bağımsız kaldığı süre. Amaç, toplam yaşı büyütmek değil, bu sağlıklı pencereyi olabildiğince uzatmak.",
      "Bu bakış her şeyi değiştirir. Hedef 90 yaşına ulaşmak değil, o yaşa dinç ulaşmak. Protokoller de bu mantıkla kurulur: bugünü değil, on yıl sonrasını düşünerek.",
    ],
  },
  {
    slug: "doku-onarimi-bpc157-tb500",
    title: "Doku onarımında iki peptidin birlikte çalışması",
    category: "Doku Onarımı",
    excerpt:
      "BPC-157 ve TB-500 farklı mekanizmalarla aynı hedefe gidiyor: doku rejenerasyonu. İkisini birlikte kullanmanın mantığı nedir?",
    readMinutes: 4,
    date: "2026-07-01",
    body: [
      "BPC-157 anjiyogenezi, yani yeni damar oluşumunu desteklediği düşünülen bir molekül. TB-500 ise hücre göçünü kolaylaştırarak dokunun kendini onarma hızını artırdığı öne sürülen bir fragman.",
      "İki molekülün farklı mekanizmalarla aynı sürece katkı sağlaması, birlikte kullanımın arkasındaki mantık. Biri damarlanmayı, diğeri hücresel göçü destekliyor. Teorik olarak tamamlayıcı bir çift.",
      "Ancak burada dürüst olmak gerekiyor: bu kombinasyonun insan verisi büyük ölçüde anekdotal. Mekanizma güçlü, kontrollü klinik çalışma yok. Kütüphanemizde bu ikili 'Mekanistik / Teorik' kademesinde sınıflandırılıyor, 'Klinik Kanıt' değil.",
      "Bu ayrımı bulanıklaştırmadan sunmak, sporcu ve aktif bireylerle çalışırken en çok önem verdiğimiz nokta. Doğru beklenti, doğru sonucun ilk şartı.",
    ],
  },
  {
    slug: "kognitif-protokoller-semax-selank",
    title: "Kognitif protokollerde Rusya kaynaklı iki molekül",
    category: "Kognitif",
    excerpt:
      "Semax ve Selank, Rusya'da onlarca yıldır klinik kullanımda ama batı literatüründe hâlâ az tanınıyor. Aradaki fark neden önemli?",
    readMinutes: 3,
    date: "2026-06-25",
    body: [
      "Semax ve Selank, ACTH ve tuftsin türevi iki nöropeptid. İkisi de Rusya'da resmi klinik kullanımda; batıda ise büyük ölçüde araştırma aşamasında kalmış moleküller.",
      "Semax'ın BDNF ve dopaminerjik sinyali desteklediği, Selank'ın ise sedasyon yaratmadan anksiyolitik etki gösterdiği düşünülüyor. Mekanizmaları makul ve tutarlı, ancak kontrollü randomize çalışmaların çoğu Rusça literatürde ve batı standartlarında tekrarlanmamış.",
      "Bu, molekülleri geçersiz kılmaz. Yalnızca kanıt seviyelerini 'Mekanistik / Teorik' kademesinde tutar. Kognitif protokollerde bu şeffaflık, özellikle yüksek performans beklentisi olan bireyler için kritik: beklenti gerçek kanıt seviyesiyle uyumlu olmalı.",
    ],
  },
  {
    slug: "yag-kaybi-protokol-mantigi",
    title: "Yağ kaybı protokolünün mantığı",
    category: "Metabolik",
    excerpt:
      "Tek bir molekül değil, birbirini tamamlayan bir sistem: iştah, enerji harcaması ve karaciğer yağlanması neden birlikte ele alınmalı.",
    readMinutes: 4,
    date: "2026-05-15",
    body: [
      "Yağ kaybı protokolleri genellikle tek bir molekülün etrafında kurulur. Oysa metabolik direnç, tek bir yolun değil, birkaç sistemin birlikte bozulmasının sonucu.",
      "GLP-1, GIP ve glukagon reseptörlerini hedef alan yeni nesil moleküller, iştah baskılanmasının ötesinde enerji harcamasını ve karaciğer yağlanmasını da etkiliyor. Bu, neden bazı protokollerin daha kalıcı sonuç verdiğini açıklıyor.",
      "Ancak molekül seçimi işin yarısı. Doz titrasyonu, biyobelirteç takibi ve bireysel metabolik profil, sonucu molekül kadar belirliyor.",
      "Bu yüzden bir protokolü 'iyi' yapan şey, hangi molekülü kullandığı değil, o molekülün doğru kişide doğru şekilde uygulanıp uygulanmadığıdır.",
    ],
  },
  {
    slug: "cilt-icin-icten-yaklasim",
    title: "Cilt için içten yaklaşım",
    category: "Anti-Aging",
    excerpt:
      "Topikal ürünlerin sınırı cildin yüzeyinde biter. GHK-Cu gibi moleküller, yenilenmeyi hücresel düzeyde tetiklemeyi hedefliyor.",
    readMinutes: 3,
    date: "2026-05-02",
    body: [
      "Cilt bakımının çoğu, yüzeyde kalan bir müdahale. Nemlendirme, koruma, düzeltme. Hepsi gerekli ama hücresel yenilenme hızını değiştirmiyor.",
      "GHK-Cu gibi bakır bağlı peptidler, kolajen ve elastin sentezini doğrudan uyararak farklı bir katmanda çalışıyor. RCT'lerle desteklenen az sayıda estetik molekülden biri olması, onu kütüphanemizde 'Klinik Kanıt' kademesine taşıyor.",
      "Ancak tek başına bir molekül, bir protokol değildir. Doz, uygulama şekli (topikal veya enjekte edilebilir) ve bireyin başlangıç noktası, sonucu belirleyen asıl değişkenler.",
      "Anti-aging'i bir ürün seçimi değil, sürdürülebilir bir sistem olarak kurmak. Yaklaşımımızın temel farkı burada.",
    ],
  },
  {
    slug: "performans-toparlanma-penceresi",
    title: "Toparlanma, performansın görünmeyen yarısı",
    category: "Performans",
    excerpt:
      "Antrenman adaptasyonunun çoğu, antrenman sırasında değil toparlanma penceresinde gerçekleşir. Protokoller bu pencereyi nasıl hedefler?",
    readMinutes: 3,
    date: "2026-04-18",
    body: [
      "Performans konuşulduğunda akla genelde antrenman şiddeti gelir. Oysa adaptasyonun büyük kısmı, antrenman sonrası toparlanma penceresinde gerçekleşir.",
      "CJC-1295 ve Ipamorelin gibi kombinasyonlar, büyüme hormonu salınımını fizyolojik atım paternine yakın bir şekilde uyararak bu pencereyi desteklediği düşünülüyor. Mekanizma iyi tanımlı, ama uzun dönem randomize veri sınırlı. Bu yüzden 'Mekanistik / Teorik' kademesinde yer alıyor.",
      "Toparlanma odaklı bir protokol kurarken asıl soru molekül değil: uyku kalitesi, yük yönetimi ve biyobelirteç takibi olmadan hiçbir molekül tek başına yeterli değil.",
      "Performans protokollerimiz bu yüzden her zaman çok boyutlu kurulur, tek değişkenli değil.",
    ],
  },
  {
    slug: "hucresel-saglik-uzun-vade",
    title: "Hücresel sağlık, uzun vadeli bir proje",
    category: "Longevity",
    excerpt:
      "Longevity molekülleri hızlı sonuç vaat etmiyor. Mitokondriyal fonksiyon ve hücresel enerji üzerine kurulu, sabır isteyen bir yaklaşım.",
    readMinutes: 4,
    date: "2026-04-05",
    body: [
      "Longevity alanındaki moleküllerin çoğu, hızlı ve görünür bir etki vaat etmiyor. Hedef aldıkları şey, yani mitokondriyal fonksiyon ve hücresel enerji metabolizması, yıllar içinde birikimli olarak fark yaratan bir katman.",
      "SS-31 gibi mitokondri koruyucu moleküller klinik olarak test edilirken, NAD+ öncülleri ve MOTS-c gibi bileşikler hâlâ insan verisinin olgunlaştığı bir aşamada. Kanıt seviyesi bu yüzden molekülden moleküle büyük farklılık gösteriyor.",
      "Bu alanda en büyük risk, sabırsızlık. Preklinik bir bileşiği klinik kanıtlıymış gibi sunmak, longevity pazarlamasının en yaygın hatası. Biz bu ayrımı hiç bulandırmıyoruz.",
      "Uzun vadeli bir stratejide, bugünün küçük ve doğrulanabilir kazanımları, yarının büyük iddialarından daha değerlidir.",
    ],
  },
  {
    slug: "kaynak-politikamiz-neden-onemli",
    title: "Neden bazı bileşiklerin kaynağı var, bazılarının yok?",
    category: "Yaklaşım",
    excerpt:
      "Kütüphanemizdeki her PMID gerçek ve doğrulanabilir. Bir bileşiğin kaynağı yoksa, bu, aramadığımız değil, bulamadığımız anlamına gelir.",
    readMinutes: 3,
    date: "2026-07-08",
    body: [
      "Kısa süre önce GHK-Cu'yu kütüphanemizde 'Klinik Kanıt' kademesinden 'Mekanistik / Teorik' kademesine indirdik. Neden? Çünkü bağımsız bir insan RCT'si aradık ve bulamadık. Mekanizma hücre kültürü ve hayvan modellerinde iyi tanımlı ama bu, klinik kanıtla aynı şey değil.",
      "Kaynak eklerken PMID ve DOI numaralarını gerçek veritabanlarından çekiyoruz. Bir bileşik için doğrulanabilir bir kaynak yoksa, sayfasında kaynak bölümü hiç görünmez. Uydurma bir referans eklenmez.",
      "Bu bazı okuyucular için garip görünebilir: neden Retatrutide'nin sayfasında PMID ve DOI var da BPC-157'de yok? Cevap basit: biri randomize kontrollü bir insan çalışmasıyla test edildi, diğeri henüz edilmedi. İkisi de değerli olabilir; ama ikisi aynı cümleyle anlatılamaz.",
      "Bu sürecin tamamını metodoloji sayfamızda açıkladık. Amacımız güven telkin etmek değil, güvenin nereden geldiğini göstermek.",
    ],
    relatedLinks: [
      { href: "/metodoloji", label: "Metodoloji: Kanıtı nasıl değerlendiriyoruz" },
      { href: "/peptidler/ghk-cu", label: "GHK-Cu bileşik sayfası" },
    ],
  },
  {
    slug: "apob-ldl-den-neden-daha-iyi",
    title: "ApoB, LDL-kolesterolden neden daha iyi bir gösterge?",
    category: "Biyobelirteç",
    excerpt:
      "Standart lipit paneli aterojenik parçacık sayısını kaçırabilir. ApoB'nin metabolik protokollerde neden ayrı bir belirteç olarak izlendiği.",
    readMinutes: 3,
    date: "2026-07-01",
    body: [
      "LDL-kolesterol, aslında kandaki LDL parçacıklarının içindeki kolesterol miktarını ölçer, parçacık sayısını değil. Bazı bireylerde LDL-kolesterol normal görünürken parçacık sayısı yüksek olabilir; bu duruma bazen 'gizli risk' deniyor.",
      "ApoB, her aterojenik parçacığın yüzeyinde tam olarak bir kopya bulunan bir protein olduğu için, parçacık sayısını doğrudan verir. Bu yüzden kardiyovasküler risk değerlendirmesinde LDL-kolesterole göre daha isabetli kabul ediliyor.",
      "Metabolik protokollerimizde ApoB'yi bu yüzden ayrı bir belirteç olarak izliyoruz; özellikle Retatrutide, Semaglutide ve Tirzepatide gibi molekülleri kullanan danışanlarda, kilo kaybının ötesinde kardiyometabolik riskin nasıl değiştiğini görmek için.",
      "Biyobelirteç sözlüğümüzde ApoB'yi bu bağlamda detaylandırdık.",
    ],
    relatedLinks: [
      { href: "/biyobelirtecler/apob", label: "Biyobelirteç: ApoB" },
      { href: "/peptidler/retatrutide", label: "Retatrutide bileşik sayfası" },
    ],
  },
  {
    slug: "tesamorelin-viseral-yag-meta-analiz",
    title: "Tesamorelin: viseral yağ için en çok kanıtlanan büyüme hormonu analoğu",
    category: "Büyüme / GH",
    excerpt:
      "Beş randomize kontrollü çalışmanın meta-analizi, tesamorelinin vücut kompozisyonu üzerindeki etkilerini net şekilde ortaya koyuyor.",
    readMinutes: 3,
    date: "2026-06-15",
    body: [
      "HIV ilişkili lipodistrofi endikasyonunda FDA onaylı olan tesamorelin, büyüme hormonu ekseni içindeki en sağlam insan verisine sahip moleküllerden biri.",
      "Yakın zamanda yayınlanan bir meta-analiz, beş randomize kontrollü çalışmayı bir araya getirerek viseral yağ dokusu, karaciğer yağ oranı ve yağsız vücut kütlesi üzerindeki etkileri özetliyor.",
      "Sonuçlar tutarlı: viseral yağ dokusunda ve karaciğer yağ oranında anlamlı azalma, yağsız kütlede artış, üstelik glikoz metabolizmasını bozmadan.",
      "Bu, kütüphanemizde tesamorelini 'Klinik Kanıt' kademesine yerleştirmemizin nedeni. Sonuç bazlı kanıt matrisini bileşik sayfasında görebilirsiniz.",
    ],
    relatedLinks: [
      { href: "/peptidler/tesamorelin", label: "Tesamorelin bileşik sayfası" },
    ],
  },
  {
    slug: "gh-salgilaticilar-ipamorelin-sermorelin",
    title: "Büyüme hormonu salgılatıcıları: Ipamorelin ve Sermorelin farkı",
    category: "Büyüme / GH",
    excerpt:
      "İkisi de doğal büyüme hormonu salınımını uyarır ama farklı reseptörler üzerinden. Aradaki mekanik fark neden önemli?",
    readMinutes: 3,
    date: "2026-07-15",
    body: [
      "Büyüme hormonu ekseniyle çalışan iki farklı yaklaşım var: GHRH analogları ve ghrelin reseptör agonistleri. Sermorelin birincisine, Ipamorelin ikincisine örnek.",
      "Sermorelin, GHRH'nin aktif fragmanı olarak hipofizin kendi salınım ritmini korur. Ipamorelin ise ghrelin reseptörü üzerinden çalışır ve seçiciliğiyle öne çıkar. Kortizol ve prolaktini belirgin etkilemeden büyüme hormonu salınımını uyardığı öne sürülür.",
      "Bu iki yol tamamlayıcı olduğu için, pratikte bir GHRH analoğu ile bir ghrelin agonistinin birlikte kullanımı sık görülür (ör. CJC-1295 + Ipamorelin). Amaç, iki farklı sinyali aynı anda vererek daha fizyolojik bir salınım paterni oluşturmak.",
      "Her ikisi de kütüphanemizde 'Mekanistik / Teorik' kademesinde: mekanizma iyi tanımlı, ancak uzun dönem geniş kontrollü insan verisi sınırlı. Bu ayrımı, beklentiyi doğru kurmak için net tutuyoruz.",
    ],
    relatedLinks: [
      { href: "/peptidler/ipamorelin", label: "Ipamorelin bileşik sayfası" },
      { href: "/peptidler/sermorelin", label: "Sermorelin bileşik sayfası" },
      { href: "/biyobelirtecler/igf-1", label: "Biyobelirteç: IGF-1" },
    ],
  },
  {
    slug: "preklinik-ne-anlama-gelir",
    title: "'Preklinik' bir bileşik ne anlama gelir, ne anlama gelmez?",
    category: "Yaklaşım",
    excerpt:
      "Thymosin Beta-4 gibi moleküller hayvan modellerinde umut verici. Ama 'preklinik' etiketi, tam olarak neyi söyler ve neyi söylemez?",
    readMinutes: 3,
    date: "2026-07-22",
    body: [
      "Bir bileşiği 'preklinik' olarak etiketlediğimizde, kanıtın büyük ölçüde hücre kültürü ve hayvan çalışmalarına dayandığını, kontrollü insan verisinin ya hiç olmadığını ya da neredeyse hiç olmadığını kastediyoruz.",
      "Bu, molekülün 'işe yaramadığı' anlamına gelmez. Thymosin Beta-4'ün hayvan modellerinde doku onarımı üzerindeki etkileri gerçek ve tekrarlanabilir. Ama hayvan modelinden insana geçiş, biyolojinin en zorlu adımlarından biridir. Birçok umut verici molekül bu geçişte beklentiyi karşılayamaz.",
      "Bu yüzden preklinik bileşikleri, klinik kanıtlı olanlarla aynı cümlede sunmayız. İkisi de değerli olabilir; ama biri 'insanda gösterildi', diğeri 'henüz gösterilmedi' der. Bu farkı bulanıklaştırmak, sektörün en yaygın yanıltmasıdır.",
      "Kütüphanemizdeki her etiketin arkasındaki mantığı metodoloji sayfamızda ayrıntılandırdık.",
    ],
    relatedLinks: [
      { href: "/metodoloji", label: "Metodoloji: Kanıtı nasıl değerlendiriyoruz" },
      { href: "/peptidler/thymosin-beta-4", label: "Thymosin Beta-4 bileşik sayfası" },
    ],
  },
  {
    slug: "uyku-mimarisi-ve-toparlanma",
    title: "Uyku mimarisi: toparlanmanın görünmeyen altyapısı",
    category: "Longevity",
    excerpt:
      "Derin uyku ve REM oranları, toparlanmanın ham süreden daha belirleyici bileşenleri. Neden uyku 'süresi' tek başına yeterli bir ölçüt değil?",
    readMinutes: 3,
    date: "2026-07-29",
    body: [
      "Uyku çoğu zaman tek bir sayıyla konuşulur: kaç saat. Oysa toparlanma açısından asıl belirleyici olan, o saatlerin nasıl dağıldığı: derin (yavaş dalga) uyku ve REM oranları.",
      "Derin uyku, fiziksel toparlanma ve hormonal düzenlenmeyle; REM ise bilişsel konsolidasyon ve duygusal işlemlemeyle ilişkilendirilir. İkisinin de baskılandığı bir gece, süre olarak 'yeterli' görünse bile fonksiyonel olarak yetersiz olabilir.",
      "Bu yüzden takip ettiğimiz belirteçler arasında toplam süre kadar uyku mimarisi ve HRV gibi otonom toparlanma sinyalleri de yer alır. DSIP gibi uykuyla ilişkilendirilen bileşiklerse hâlâ erken araştırma aşamasında. Mekanizma ilgi çekici ama insan verisi sınırlı ve tutarsız.",
      "Toparlanmayı bir sayıya değil, bir yapıya bakarak değerlendirmek. Yaklaşımımızın temel farklarından biri bu.",
    ],
    relatedLinks: [
      { href: "/biyobelirtecler/hrv", label: "Biyobelirteç: HRV" },
      { href: "/peptidler/dsip", label: "DSIP bileşik sayfası" },
    ],
  },
  {
    slug: "yaslanma-hizini-belirleyen-dort-sinyal",
    title: "Yaşlanma hızınızı belirleyen dört sinyal",
    category: "Derleme",
    excerpt:
      "Yaşlanma, vücudunuzun zaten konuştuğu dört kadim sinyal yolu tarafından yönetilir: mTOR, AMPK, sirtuinler ve IGF-1. Onları anlamak, bu konuşmaya katılmanın ilk adımı.",
    readMinutes: 12,
    date: "2026-07-05",
    body: [
      "Çoğu uzun ömür tavsiyesi sizden moleküllerin peşinden koşmanızı ister. Daha akıllı hamle, hücrelerinizin zaten sürdürdüğü konuşmayı anlamaktır. Dört kadim sinyal yolu, yaşlanma hızınızı her gün müzakere eder. İşte ne söyledikleri, nasıl söyledikleri ve sinyalin neden takviyeden daha önemli olduğu.",
      "Uzun ömür alanında biraz vakit geçirdiyseniz isimleri duymuşsunuzdur: mTOR, AMPK, sirtuinler, IGF-1. Herkes anlamını biliyormuş gibi podcast girişlerinde ve takviye etiketlerinde savrulurlar. İlk sorun bu, çünkü çoğu kişi bilmez. İkinci sorun daha da kötü: yaygın çerçeve her yolu, doğru molekülle açıp kapatabileceğiniz bağımsız bir düğme gibi ele alır. Bu, insanları birbirini iptal eden müdahalelere sürükleyecek kadar derin bir yanlış anlamadır.",
      "Bu dört yol, hücrelerinizin içinde yaklaşık iki milyar yıldır süren tek bir müzakere oluşturur.",
      "Onları dört kadim komiteli bir hücresel meclis gibi düşünün. Bir komite besin mevcudiyetini izler. Bir diğeri enerji durumunu takip eder. Üçüncüsü stres sinyallerini okuyup neyin onarılacağına karar verir. Dördüncüsü büyüme ve onarım bütçesini yönetir. Her komitenin bir oyu vardır ve süregelen müzakerelerinin sonucu, kelimenin tam anlamıyla, ne kadar hızlı yaşlandığınızdır.",
      "Bu bir takviye rehberi değil, konuşmanın haritasıdır.",
      "## I · mTOR — Besin nöbetçisi",
      "mTOR, 'mechanistic target of rapamycin' ifadesinin kısaltmasıdır. İsim tarihsel bir kazadır; rapamisinin proteine olan ilgisinden doğar. Ama işlevi kadim ve kasıtlıdır. mTOR hücrenizin başlıca besin sensörüdür ve bu işi hayvanlar var olmadan önce de yapıyordu. Mantarlar kullanır, bitkiler kullanır; Dünya'daki her ökaryot bu yolun bir versiyonunu koşulların büyüme için uygun olup olmadığına karar vermek için kullanır.",
      "mTOR kompleks 1 (mTORC1) aktifken hücreniz inşa modundadır. Ribozomlar birleşir, proteinler üretilir, lipitler sentezlenir. Hasarlı proteinleri ve yıpranmış mitokondrileri temizleyen hücresel geri dönüşüm programı olan otofaji baskılanır; çünkü fabrika tam kapasite çalışırken onu yıkmazsınız.",
      "Yirmi yaşında ve antrenman sonrası kas inşa ederken bu tamamen yerindedir. Sorun, mTORC1'in onlarca yıl aktif kalmasıdır. Sürekli besin mevcudiyeti ve hareketsiz yaşamla sürüklenen kronik mTOR aktivasyonu; senesan hücrelerin birikimini, düşük dereceli inflamasyonu ve yaşa bağlı hastalıkların çoğunun altında yatan metabolik katılığı besler.",
      "mTOR'un yaşlanmadaki rolüne dair en çarpıcı kanıt, uzun ömür araştırmasını rahatsız eden laboratuvara özgü yapaylıkları elemek için tasarlanmış çok merkezli bir NIH çalışması olan Interventions Testing Program'dan (ITP) gelir. 2009'da ITP, bir mTORC1 inhibitörü olan rapamisinin, 600 günlükken başlatıldığında genetik olarak heterojen farelerde ortanca yaşam süresini erkeklerde %9, dişilerde %13 uzattığını bildirdi. Bu başlangıç yaşı kabaca 60 insan yılına karşılık gelir. Müdahale geç orta yaşta başladı ve yine de işe yaradı.",
      "## Sürekli beslenme neden bir mTOR sorunudur",
      "mTORC1, amino asitler (özellikle lösin) ve insülin ile IGF-1 gibi büyüme faktörleri tarafından aktive edilir. Protein içeren her öğün, dokularınıza bir mTOR aktivasyon darbesi gönderir. Bu normal ve gereklidir. Normal olmayan, modern örüntüdür: günde üç ila beş protein içeren öğün, aralarda atıştırmalıklar ve sabah 7'den gece 10'a uzanan bir beslenme penceresi.",
      "Lösin, mTORC1'in en güçlü amino asit aktivatörüdür. Tek bir 30 gramlık whey protein porsiyonu kabaca 3 gram lösin sağlar; kayda değer bir mTOR darbesini tetiklemeye yeter. Bu, direnç antrenmanından sonra faydalıdır. Onlarca yıl boyunca, her gün, günde üç kez faydalı olmayabilir.",
      "Evrimsel bağlam burada önemlidir. İnsanlık tarihinin çoğunda bolluk ve kıtlık birbirini izledi. mTOR'un açılıp kapanması gerekiyordu. Besin kıtlığının mTOR aktivitesini düşürdüğü kapalı dönemler, otofajinin devreye girip hücresel bakımın yapıldığı zamanlardı. Sürekli beslenme bu kapalı dönemi ortadan kaldırır ve o olmadan, temizlik ekibi hiç çağrılmadığı için hasarlı bileşenler birikir.",
      "## Aslında ne fark yaratır",
      "Protein kısıtlaması ve zaman kısıtlı beslenme, kronik mTOR aktivasyonunu azaltmaya dair en güçlü kanıta sahip iki davranışsal müdahaledir. Hiçbiri reçete gerektirmez. İkisi de varsayılan modern beslenme örüntüsünden bir kopuş gerektirir; ücretsiz olmalarına rağmen az kullanılmalarının nedeni tam olarak budur.",
      "Rapamisin ve analogları (rapaloglar) farmakolojik yoldur ve memeli farmakolojisinde en sağlam şekilde doğrulanmış uzun ömür müdahalesidir. ITP, rapamisinin yaşam süresi uzatımını artık birden çok kohortta ve doz programında tekrarladı. Etki gerçek ve doza bağlıdır. Ancak rapamisin, transplant tıbbında kullanılan dozlarda bir immünosupresandır ve sağlıklı insanlarda düşük doz, aralıklı rapamisinin uzun vadeli güvenlik profili hâlâ açık bir sorudur, çözülmüş bir konu değil.",
      "## II · AMPK — Enerji muhasebecisi",
      "mTOR gaz pedalıysa AMPK yakıt göstergesidir. AMP ile aktive olan protein kinaz, hücre içindeki AMP/ATP oranını algılar. Enerji düştüğünde ve AMP yükseldiğinde AMPK aktive olur ve hücresel metabolizmayı korumaya ve verime doğru yeniden şekillendirir.",
      "AMPK aktivasyonu, yaşlanma için önemli üç sonuç doğurur: mTOR'u inhibe eder (enerji kıtken büyümeye fren yapar), otofaji makinesini aktive eder ve mitokondriyal biyogenezi — yeni mitokondrilerin oluşumunu — uyarır. AMPK'si aktif bir hücre, zayıf dönemi atlatırken hem evini temizleyen hem de daha iyi enerji altyapısı kuran bir hücredir.",
      "AMPK'nin en güçlü fizyolojik aktivatörü egzersizdir. Her kas kasılması ATP tüketir ve bu AMP/ATP oranını yükseltir. Egzersizin farmakolojik olarak kopyalanması zor metabolik etkiler üretmesinin nedeni budur: önemli olan dokularda, tam da evrimin yüz milyonlarca yıl boyunca optimize ettiği bir mekanizma aracılığıyla AMPK'yi aktive eder.",
      "## Metformin ve farmasötik kestirme",
      "Dünyada en çok reçete edilen diyabet ilacı olan metformin, mitokondriyal inhibisyon yoluyla AMPK'yi dolaylı olarak aktive eder. Uzun ömür müdahalesi olarak önerilmiş en çok çalışılan bileşiktir ve kanıtlar gerçekten karışıktır. Kemirgen çalışmaları bazı modellerde yaşam süresi uzatımı gösterir, bazılarında göstermez. TAME çalışması (Targeting Aging with Metformin) devam ediyor ve metforminin geroprotektif etkilerine dair ilk insan verisini sağlayabilir.",
      "Metformin konusunda akıllı okuma temkinlidir. Hedef popülasyonu için (metabolik sendromlu kişiler) iyi çalışır, ama sağlıklı bireylerde egzersizin adaptif faydalarını köreltebilir; çünkü hem egzersiz hem metformin AMPK'yi, üst üste binmeyebilecek farklı mekanizmalarla aktive eder. Zaten egzersiz yapıyorsanız metformin gereksiz olabilir. Yapmıyorsanız, onun yerine geçmez.",
      "## III · Sirtuinler — Onarım ustabaşı",
      "Sirtuinler, metabolizma ile gen ifadesinin kesişiminde duran yedi proteinlik (SIRT1'den SIRT7'ye) bir ailedir. NAD+ bağımlı deasetilazlardır; yani proteinlerden asetil gruplarını çıkarırlar. Ama önemli olan işlevsel tanım daha basittir: sirtuinler hücresel meclisinizin onarım ustabaşılarıdır.",
      "mTOR bolluk, AMPK kıtlık sinyali verirken sirtuinler, metabolik stresin bir göstergesi işlevi gören NAD+ düzeyini okur. Yüksek NAD+ sirtuinleri aktive eder, düşük NAD+ onları susturur. NAD+ düzeyleri yaşla doğal olarak düştüğü için — 20 ile 60 yaş arasında kabaca %50 — sirtuin aktivitesi orta-geç yaşamda uçurumdan düşer.",
      "En çok çalışılan üye olan SIRT1, DNA onarımı, mitokondriyal işlev ve inflamasyon kontrolünde yer alan proteinleri deasetile eder. Mitokondriyal biyogenezin baş düzenleyicisi PGC-1alfa'yı aktive eder. NF-kB'yi baskılayarak inflamatuar sinyalleşmeyi azaltır. Ve TSC1/TSC2 kompleksi aracılığıyla mTOR aktivitesini dolaylı olarak inhibe eder.",
      "## NAD+ öncül sorunu",
      "Takviye endüstrisi NAD+ bağlantısına sıkıca sarıldı. En popüler iki NAD+ öncülü olan NMN ve NR, piyasadaki en çok satan uzun ömür takviyeleri arasında. Mantık baştan çıkarıcı: NAD+ düşer → sirtuinler aktivite kaybeder → öncüllerle NAD+ yükseltilir → sirtuin işlevi geri gelir.",
      "İnsan verisi henüz ikna edici değil. Oral NMN ve NR kandaki NAD+ düzeylerini yükseltir, ama doku NAD+'ı üzerindeki etki tutarsızdır. 2023'te yapılan bir NR randomize çalışması (12 hafta boyunca günde 1 gram), yaşlı yetişkinlerde kas NAD+ düzeylerinde, mitokondriyal işlevde veya egzersiz kapasitesinde iyileşme bulmadı. Moleküller kana ulaşıyor. Sirtuin aktivitesini etkileyecek miktarda dokuya ulaşıp ulaşmadıkları ise yanıtlanmamış soru.",
      "## IV · IGF-1 — Büyüme düzenleyicisi",
      "İnsülin benzeri büyüme faktörü 1 (IGF-1), hücrelerinize büyümelerini, bölünmelerini ve hayatta kalmalarını söyleyen sinyal molekülüdür. Büyüme hormonunun etkilerinin başlıca aracısıdır ve sinyal yolu bilinen en çok korunmuş uzun ömür yoludur.",
      "Azalmış IGF-1 sinyalleşmesi, test edilen her model organizmada yaşam süresini uzatır: maya, solucan, sinek ve fare. IGF-1 düzeylerini azaltan bir mutasyona sahip Ames cüce faresi, yabanıl tip farelerden %50 daha uzun yaşar ve ileri yaşa kadar bilişsel ve fiziksel olarak sağlıklı kalır. Etki incelikli değildir; yaşlanma biyolojisinin en sağlam bulgularından biridir.",
      "İnsan verisi doğal bir deneyden gelir. Büyüme hormonu reseptör mutasyonları nedeniyle derin IGF-1 eksikliğine yol açan Laron sendromlu bireyler, normalde başka nedenlerden artmış mortaliteyle ilişkili bir durumla yaşamalarına rağmen çarpıcı ölçüde azalmış kanser ve diyabet oranları gösterir. Gelişmiş ülkelerde çoğu insanı öldüren iki hastalığa karşı korunurlar.",
      "## Protein, mTOR ve IGF-1 ödünleşmesi",
      "IGF-1 sinyalleşmesi, çoğunlukla uyku sırasında darbeler hâlinde salgılanan büyüme hormonu tarafından doğrudan aktive edilir. Ama IGF-1 aynı zamanda mTOR yolu üzerinden protein alımıyla da modüle edilir. Yüksek protein alımı IGF-1 düzeylerini yükseltir; düşük protein alımı düşürür. Bu gerçek bir ödünleşme yaratır: protein kas kütlesini ve gücü destekler, ama aynı zamanda diğer dokularda yaşlanmayı sürükleyen IGF-1 sinyalleşmesini de aktive eder.",
      "## V · Müzakere — Neden bağlam her şeydir",
      "Çerçevenin herhangi bir tek yoldan daha önemli olmasının nedeni, bu dört sinyalin bağımsız olmamasıdır. Belirli çapraz konuşma düğümlerine sahip bir ağ oluştururlar ve birini diğerlerini anlamadan devreye almak, insanların birbirine karşı çalışan takviyeler almasına yol açar.",
      "AMPK aktivasyonu mTOR'u inhibe eder. Sirtuinler AMPK'yi aktive eder. IGF-1 mTOR'u aktive eder. Sirtuinleri güçlendirmek için NAD+ yükselten bir takviye (iyi), dolaylı olarak IGF-1 sinyalleşmesini de düşürebilir (yine iyi); ama kas büyümesi için mTOR'u yükseltmek üzere aynı anda lösin veya HMB de alıyorsanız, hücresel meclisinize çelişkili talimatlar gönderiyorsunuz demektir. Yollar sizin niyetlerinizle müzakere etmez.",
      "Egzersiz, aktivite sırasında AMPK'yi aktive eder ve mTOR'u baskılar. Egzersizden sonra mTOR geri sıçrar ve kas protein sentezini sürükler. Net sonuç her iki dünyanın da en iyisidir: egzersiz sırasında bir otofaji darbesi, ardından egzersiz sonrası bir büyüme darbesi. Bu zamansal örüntü — dönüşümlü aktivasyon ve baskılanma — yolların başa çıkmak için evrimleştiği şeydir.",
      "Hormesis kavramı burada geçerlidir: darbeler hâlinde faydalı olan aynı sinyal, kronik olarak yükseldiğinde zararlı hâle gelir. mTOR, AMPK, sirtuinler ve IGF-1 hepsi bu örüntüyü izler. Soru bir yolun 'iyi' mi 'kötü' mü olduğu değildir. Soru, aktivasyon örüntüsünün evrimin onun için tasarladığıyla eşleşip eşleşmediğidir.",
      "Ritmik olarak açılıp kapanan bir yol sağlık üretir. Tek bir konumda kilitli bir yol hastalık üretir. Dikkate değer her uzun ömür müdahalesi, özünde, ritmi geri kazandırmaya yönelik bir stratejidir.",
      "Dört sinyal çerçevesi bir takviye protokolü değildir. Bazı müdahalelerin neden işe yaradığını, diğerlerinin neden birbirini iptal ettiğini ve sahip olduğunuz en güçlü aracın — egzersizin — dört yolun üçünü tam da doğru zamansal örüntüde, ücretsiz ve ağrıyan kaslar dışında yan etkisiz olarak nasıl aktive ettiğini anlamak için bir mercektir.",
    ],
    relatedLinks: [
      { href: "/journal/mtor-hucresel-yaslanmanin-ana-duzenleyicisi", label: "mTOR: Hücresel yaşlanmanın ana düzenleyicisi" },
      { href: "/peptidler/mots-c", label: "MOTS-c monografı (AMPK)" },
      { href: "/peptidler/epithalon", label: "Epithalon monografı" },
    ],
  },
  {
    slug: "mtor-hucresel-yaslanmanin-ana-duzenleyicisi",
    title: "mTOR: Hücresel yaşlanmanın ana düzenleyicisi",
    category: "Derleme",
    excerpt:
      "Yaşlanma biyolojisinin en önemli ama en az takdir edilen yollarından biri mTOR. Büyümeyle uzun ömür arasındaki dengenin döndüğü mesnet.",
    readMinutes: 5,
    date: "2026-07-03",
    body: [
      "Yaşlanma biyolojisinin en önemli ama en az takdir edilen yollarından biri mTOR'dur — mechanistic Target of Rapamycin. Bu protein kinaz, hücresel bir besin sensörü olarak görev yapar; amino asit ve enerji mevcudiyetine yanıt olarak büyümeyi, metabolizmayı ve strese direnci koordine eder.",
      "## mTOR nedir?",
      "mTOR iki kompleks hâlinde bulunur: mTORC1 ve mTORC2. mTORC1 başlıca besin sensörüdür; kaynaklar bolken protein sentezini ve hücre büyümesini uyarır, kaynaklar kıtken otofajiyi (hücresel temizlik) baskılar. Bu onu, büyüme ile uzun ömrün kesişimindeki bir ana anahtar hâline getirir.",
      "## Uzun ömür paradoksu",
      "mTOR'u aktive etmek gençlikte büyüme ve onarımı destekler, bu faydalıdır. Ama yetişkinlikte kronik mTOR aşırı aktivasyonu; otofajiyi baskılayarak, hücresel senesansı teşvik ederek ve inflamasyonu sürükleyerek yaşlanmayı hızlandırır. Uzun ömür paradoksu: yaşamın ilerleyen döneminde mTOR sinyalleşmesini azaltmak, test edilen neredeyse her model organizmada yaşam ve sağlık süresini uzatır.",
      "## mTOR doğal olarak nasıl modüle edilir",
      "Protein kısıtlaması, özellikle lösini (hayvansal proteinde bol) sınırlamak, mTORC1 aktivitesini azaltır. Aralıklı oruç ve zaman kısıtlı beslenme, otofajiyi tetikleyen periyodik mTOR baskılama pencereleri oluşturur. Direnç egzersizi, sezgiye aykırı biçimde, kas dokusunda mTOR'u akut olarak aktive eder — ama bu pulsatil aktivasyon, kronik aşırı aktivasyondan farklıdır.",
      "## Farmakolojik modülasyon",
      "Orijinal mTOR inhibitörü rapamisin, bugüne kadar test edilen her türde yaşam süresini uzatır. Yeni araştırmalar, yan etkileri en aza indirirken uzun ömür faydalarını koruyan aralıklı rapamisin dozlaması ve yeni nesil rapaloglara odaklanıyor.",
      "mTOR'u anlamak, yaşlanma biyolojisini ciddiye alan herkes için elzemdir. Büyüme ile uzun ömür arasındaki dengenin döndüğü mesnettir.",
    ],
    relatedLinks: [
      { href: "/journal/yaslanma-hizini-belirleyen-dort-sinyal", label: "Yaşlanma hızınızı belirleyen dört sinyal" },
    ],
  },
  {
    slug: "gunluk-longevity-protokolu-3-temel-pratik",
    title: "Günlük longevity protokolü: 3 temel pratik",
    category: "Derleme",
    excerpt:
      "Uzun ömür bir günde inşa edilmez. Yıllar boyunca yapılan küçük, tutarlı eylemlerin birikimli etkisidir. Temel yaşlanma yollarını hedefleyen üç kanıta dayalı pratik.",
    readMinutes: 4,
    date: "2026-07-01",
    body: [
      "Uzun ömür bir günde inşa edilmez. Yıllar boyunca yapılan küçük, tutarlı eylemlerin birikimli etkisidir. İşte temel yaşlanma yollarını hedefleyen, kanıta dayalı üç pratik.",
      "## 1. Zaman kısıtlı beslenme",
      "Tutarlı bir 8-10 saatlik pencerede yemek, otofajiyi — hücrelerinizin iç temizlik sürecini — tetikler. Oruç döneminde hücreler hasarlı bileşenleri geri dönüştürür, yanlış katlanmış proteinleri temizler ve mitokondriyal işlevi iyileştirir. 12 saatlik bir gece orucuyla başlayın ve kademeli olarak 10 saate indirin. Tutarlılık, şiddetten daha önemlidir.",
      "## 2. Direnç antrenmanı",
      "30 yaşından sonra kas kütlesi on yılda %3-8 azalır. Bu yalnızca güçle ilgili değildir — kas, vücudun en büyük metabolik organı ve glukoz homeostazının kilit düzenleyicisidir. Haftada iki ila üç direnç seansı, bileşik hareketlere (squat, deadlift, press) odaklanarak mitokondriyal yoğunluğu korur ve metabolik sağlığı sürdürür.",
      "## 3. Soğuğa maruz kalma",
      "Kısa soğuk maruziyeti (10-15°C, 2-5 dakika) soğuk şok proteinlerini ve kahverengi yağ dokusunu aktive ederek metabolik hızı iyileştirir ve inflamasyonu azaltır. 30 saniyelik soğuk duşlarla başlayın ve kademeli olarak artırın. Soğuğun yarattığı hormetik stres, hücresel dayanıklılık yollarını güçlendirir.",
      "## Protokol yığını",
      "Bu pratikler sinerjik çalışır. Zaman kısıtlı beslenme otofaji için metabolik ortamı oluşturur. Direnç antrenmanı kas bakımını sinyalize eder. Soğuğa maruz kalma stres yanıt yollarını aktive eder. Birlikte, yaşlanmanın birden çok göstergesini aynı anda ele alan günlük bir yığın oluştururlar.",
      "Küçük başlayın. Bir pratik seçin ve iki hafta tutarlı biçimde uygulayın. Sonra bir sonrakini ekleyin. Uzun ömür bir reçete değil, bir pratiktir.",
    ],
    relatedLinks: [
      { href: "/journal/yaslanma-hizini-belirleyen-dort-sinyal", label: "Yaşlanma hızınızı belirleyen dört sinyal" },
      { href: "/longevity-skoru", label: "Longevity Skorunuzu görün" },
    ],
  },
]

export const getArticle = (slug: string) =>
  articles.find((a) => a.slug === slug)
