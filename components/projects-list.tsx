"use client"

import { useRef, useEffect } from "react"
import { projects } from "@/lib/projects"
import gsap from "gsap"

export function ProjectsList() {
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!listRef.current) return

    const ctx = gsap.context(() => {
      const rows = listRef.current?.querySelectorAll("article")
      if (rows && rows.length > 0) {
        gsap.fromTo(
          rows,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out", delay: 0.2 },
        )
      }
    }, listRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={listRef} className="flex flex-col">
      {projects.map((project, index) => (
        <article
          key={project.title}
          className="group relative border-b border-border/30 py-10 md:py-12 transition-colors duration-300 hover:bg-accent/[0.03]"
        >
          <div className="flex items-baseline justify-between gap-4">
            <div className="flex items-baseline gap-4 md:gap-8">
              <span className="font-mono text-xs text-muted-foreground/50 group-hover:text-accent transition-colors duration-300">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="font-[var(--font-bebas)] text-3xl md:text-5xl tracking-tight group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h2>
            </div>
            <span className="hidden md:inline font-mono text-[10px] uppercase tracking-widest text-muted-foreground shrink-0">
              {project.year}
            </span>
          </div>

          <p className="mt-4 md:ml-16 max-w-2xl font-mono text-xs md:text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          <ul className="mt-5 md:ml-16 flex flex-wrap gap-2">
            <li className="border border-accent/40 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
              {project.category}
            </li>
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="border border-border/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground group-hover:border-border transition-colors duration-300"
              >
                {tech}
              </li>
            ))}
          </ul>

          {/* Repositórios — mini-cards quando o projeto tem mais de um */}
          <div className="mt-6 md:ml-16 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-accent/40 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
              >
                {link.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}
