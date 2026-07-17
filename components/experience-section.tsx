"use client"

import { useRef, useEffect } from "react"
import { experiences } from "@/lib/experience"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !listRef.current) return

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

      const blocks = listRef.current?.querySelectorAll("article")
      if (blocks && blocks.length > 0) {
        gsap.fromTo(
          blocks,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: listRef.current,
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
    <section
      ref={sectionRef}
      id="experiencia"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">02 / Experiência</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">
          EXPERIÊNCIA PROFISSIONAL
        </h2>
      </div>

      <div ref={listRef} className="flex flex-col gap-16">
        {experiences.map((experience) => (
          <div key={`${experience.company}-${experience.role}`}>
            {/* Cabeçalho da experiência */}
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-8 border-l-2 border-accent pl-4">
              <div>
                <h3 className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight">{experience.role}</h3>
                <p className="font-mono text-xs text-muted-foreground mt-1">{experience.company}</p>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {experience.period}
              </span>
            </div>

            {/* Entregas / frentes de trabalho */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 md:ml-4">
              {experience.items.map((item) => (
                <article
                  key={item.title}
                  className="group border border-border/40 p-6 hover:border-accent/60 transition-colors duration-500"
                >
                  <h4 className="font-[var(--font-bebas)] text-xl md:text-2xl tracking-tight group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="mt-3 font-mono text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <li
                        key={tech}
                        className="border border-border/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
