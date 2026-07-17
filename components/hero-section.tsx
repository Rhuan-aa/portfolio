"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { AnimatedNoise } from "@/components/animated-noise"
import { BitmapChevron } from "@/components/bitmap-chevron"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const COMMAND = "whoami"
const NAME = "RHUAN BONI"
// Flag em sessionStorage: a digitação roda só na entrada do site,
// não ao voltar de /projetos ou navegar entre seções.
const INTRO_KEY = "hero-intro-done"

type Phase = "cmd" | "name" | "done"

function useTerminalIntro() {
  const [cmdText, setCmdText] = useState("")
  const [nameText, setNameText] = useState("")
  const [phase, setPhase] = useState<Phase>("cmd")

  useEffect(() => {
    if (sessionStorage.getItem(INTRO_KEY)) {
      setCmdText(COMMAND)
      setNameText(NAME)
      setPhase("done")
      return
    }

    let cancelled = false
    const timeouts: ReturnType<typeof setTimeout>[] = []
    const schedule = (fn: () => void, ms: number) => {
      const id = setTimeout(() => {
        if (!cancelled) fn()
      }, ms)
      timeouts.push(id)
    }

    let delay = 400
    for (let i = 1; i <= COMMAND.length; i++) {
      schedule(() => setCmdText(COMMAND.slice(0, i)), delay)
      delay += 75
    }

    delay += 350
    schedule(() => setPhase("name"), delay)
    for (let i = 1; i <= NAME.length; i++) {
      schedule(() => setNameText(NAME.slice(0, i)), delay)
      delay += 95
    }

    delay += 250
    schedule(() => {
      setPhase("done")
      sessionStorage.setItem(INTRO_KEY, "1")
    }, delay)

    return () => {
      cancelled = true
      timeouts.forEach(clearTimeout)
    }
  }, [])

  return { cmdText, nameText, phase }
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const { cmdText, nameText, phase } = useTerminalIntro()

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center pl-6 md:pl-28 pr-6 md:pr-12">
      <AnimatedNoise opacity={0.03} />

      {/* Rótulo vertical à esquerda */}
      <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground -rotate-90 origin-left block whitespace-nowrap">
          PORTFÓLIO
        </span>
      </div>

      {/* Conteúdo principal */}
      <div ref={contentRef} className="flex-1 w-full">
        {/* Linha de comando do terminal */}
        <p className="font-mono text-xs md:text-sm text-muted-foreground">
          <span className="text-accent">rhuan@portfolio</span>
          <span>:~$ </span>
          <span className="text-foreground">{cmdText}</span>
          {phase === "cmd" && <span className="terminal-cursor" aria-hidden="true" />}
        </p>

        {/* Nome montado como escrita de terminal */}
        <h1
          aria-label={site.fullName}
          className="mt-4 font-[var(--font-bebas)] text-[clamp(3.5rem,13vw,11rem)] leading-[0.9] tracking-tight whitespace-nowrap"
        >
          {nameText}
          {phase !== "cmd" && <span className="terminal-cursor" aria-hidden="true" />}
        </h1>

        {/* O restante aparece após a digitação terminar */}
        <div
          className={cn(
            "transition-all duration-700 ease-out",
            phase === "done" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          <h2 className="font-[var(--font-bebas)] text-muted-foreground/60 text-[clamp(1rem,3vw,2rem)] mt-4 tracking-wide">
            ENGENHEIRO DE SOFTWARE — FULLSTACK, MOBILE &amp; IOT
          </h2>

          <p className="mt-12 max-w-md font-mono text-sm text-muted-foreground leading-relaxed">
            {site.bio}
          </p>

          <div className="mt-16 flex items-center gap-8">
            <Link
              href="/projetos"
              className="group inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
            >
              <ScrambleTextOnHover text="Ver Projetos" as="span" duration={0.6} />
              <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
            </Link>
            <a
              href="#contato"
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Contato
            </a>
          </div>
        </div>
      </div>

      {/* Etiqueta flutuante */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
        <div className="border border-border px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {site.location} / v.01
        </div>
      </div>
    </section>
  )
}
