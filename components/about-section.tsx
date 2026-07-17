"use client"

import { useRef, useEffect } from "react"
import { site } from "@/lib/site"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      const blocks = contentRef.current?.querySelectorAll(":scope > div")
      if (blocks && blocks.length > 0) {
        gsap.fromTo(
          blocks,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="sobre" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">01 / Sobre</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">QUEM SOU</h2>
      </div>

      <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <div>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed max-w-lg">{site.bio}</p>
          <p className="mt-6 font-mono text-sm text-muted-foreground leading-relaxed max-w-lg">
            Atualmente curso Engenharia de Software no IFSP — Campus São Carlos e trabalho como Engenheiro de
            Software na Newgesti, com foco em desenvolvimento mobile (Flutter/Dart) e soluções fullstack &amp; IoT.
          </p>
        </div>

        <div>
          <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Stack &amp; Competências
          </h3>
          <ul className="flex flex-wrap gap-3">
            {site.skills.map((skill) => (
              <li
                key={skill}
                className="border border-border/60 px-4 py-2 font-mono text-xs text-foreground/80 hover:border-accent hover:text-accent transition-colors duration-200 cursor-default"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
