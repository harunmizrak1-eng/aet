import { Hero } from "@/components/hero"
import { Nav } from "@/components/nav"
import { ResearchMetrics } from "@/components/research-metrics"
import { WhyAeterna } from "@/components/why-aeterna"
import { Categories } from "@/components/categories"
import { Idea } from "@/components/idea"
import { Process } from "@/components/process"
import { Offerings } from "@/components/offerings"
import { Trust } from "@/components/trust"
import { CaseStudies } from "@/components/case-studies"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { EditorialBreak } from "@/components/editorial-break"

export default function Page() {
  return (
    <main id="main-content" className="bg-background">
      <Nav />
      <Hero />
      <ResearchMetrics />
      <Reveal>
        <WhyAeterna />
      </Reveal>
      <Reveal>
        <Categories />
      </Reveal>
      <Reveal>
        <Idea />
      </Reveal>
      <EditorialBreak
        src="/images/editorial/eye-macro.webp"
        focus="60% 40%"
        kicker="Felsefe"
        line="Bilgi, reçeteden önce gelir."
      />
      <Reveal>
        <Process />
      </Reveal>
      <Reveal>
        <Offerings />
      </Reveal>
      <EditorialBreak
        src="/images/editorial/sprint-dust.webp"
        focus="50% 35%"
        align="left"
        kicker="Vaka Analizlerinden Önce"
        line="Her protokolün arkasında, gerçek bir biyoloji vardır."
      />
      <Reveal>
        <Trust />
      </Reveal>
      <Reveal>
        <CaseStudies />
      </Reveal>
      <Reveal>
        <FinalCta />
      </Reveal>
      <Footer />
    </main>
  )
}
