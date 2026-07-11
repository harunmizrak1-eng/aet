import { Nav } from "@/components/nav"
import { MethodHero } from "@/components/method/method-hero"
import { MethodMarquee } from "@/components/method/method-marquee"
import { MethodManifesto } from "@/components/method/method-manifesto"
import { MethodPillars } from "@/components/method/method-pillars"
import { MethodLibrary } from "@/components/method/method-library"
import { MethodScience } from "@/components/method/method-science"
import { Process } from "@/components/process"
import { MethodProtocols } from "@/components/method/method-protocols"
import { CaseStudies } from "@/components/case-studies"
import { MethodJournal } from "@/components/method/method-journal"
import { MethodAccess } from "@/components/method/method-access"
import { MethodFaq } from "@/components/method/method-faq"
import { MethodEnroll } from "@/components/method/method-enroll"
import { MethodFooter } from "@/components/method/method-footer"
import { Reveal } from "@/components/reveal"

export default function Page() {
  return (
    <main id="main-content" className="bg-background">
      <Nav />
      <MethodHero />
      <MethodMarquee />
      <Reveal>
        <MethodManifesto />
      </Reveal>
      <Reveal>
        <MethodPillars />
      </Reveal>
      <MethodLibrary />
      <Reveal>
        <MethodScience />
      </Reveal>
      <Reveal>
        <Process />
      </Reveal>
      <Reveal>
        <MethodProtocols />
      </Reveal>
      <Reveal>
        <CaseStudies />
      </Reveal>
      <Reveal>
        <MethodJournal />
      </Reveal>
      <MethodAccess />
      <MethodFaq />
      <MethodEnroll />
      <MethodFooter />
    </main>
  )
}
