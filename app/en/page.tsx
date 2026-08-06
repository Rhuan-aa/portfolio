import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { WorkSection } from "@/components/work-section"
import { ContactSection } from "@/components/contact-section"
import { SideNav } from "@/components/side-nav"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Rhuan_aab.dev",
  description: site.bioEn,
}

export default function Page() {
  return (
    <main lang="en" className="relative min-h-screen">
      <SideNav lang="en" />
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />

      <div className="relative z-10">
        <HeroSection lang="en" />
        <AboutSection lang="en" />
        <ExperienceSection lang="en" />
        <WorkSection lang="en" />
        <ContactSection lang="en" />
      </div>
    </main>
  )
}
