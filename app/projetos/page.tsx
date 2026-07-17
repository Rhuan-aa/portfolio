import type { Metadata } from "next"
import Link from "next/link"
import { ProjectsList } from "@/components/projects-list"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: `Projetos — ${site.name}`,
  description: "Projetos e criações de Rhuan Andrey — mobile, fullstack e IoT.",
}

export default function ProjetosPage() {
  return (
    <main className="relative min-h-screen">
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />

      <div className="relative z-10 px-6 md:px-28 py-16 md:py-24">
        {/* Voltar */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-accent transition-colors duration-200"
        >
          <span aria-hidden="true">←</span> cd ~/
        </Link>

        {/* Cabeçalho */}
        <header className="mt-12 mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            rhuan@portfolio:~$ ls ./projetos
          </span>
          <h1 className="mt-4 font-[var(--font-bebas)] text-6xl md:text-8xl tracking-tight">PROJETOS</h1>
          <p className="mt-6 max-w-md font-mono text-sm text-muted-foreground leading-relaxed">
            Algumas das minhas criações — de apps mobile offline-first a plataformas fullstack e automação IoT.
          </p>
        </header>

        <ProjectsList />

        {/* Rodapé */}
        <footer className="mt-24 pt-8 border-t border-border/20 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            © 2026 {site.fullName}
          </p>
          <Link
            href="/"
            className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors duration-200"
          >
            Voltar ao início
          </Link>
        </footer>
      </div>
    </main>
  )
}
