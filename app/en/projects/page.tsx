import type { Metadata } from "next"
import Link from "next/link"
import { ProjectsList } from "@/components/projects-list"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Rhuan_aab.dev",
  description: "Projects and builds by Rhuan Andrey — mobile, fullstack and IoT.",
}

export default function ProjectsPage() {
  return (
    <main lang="en" className="relative min-h-screen">
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />

      <div className="relative z-10 px-6 md:px-28 py-16 md:py-24">
        {/* Back */}
        <Link
          href="/en"
          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-accent transition-colors duration-200"
        >
          <span aria-hidden="true">←</span> cd ~/
        </Link>

        {/* Header */}
        <header className="mt-12 mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            rhuan@portfolio:~$ ls ./projects
          </span>
          <h1 className="mt-4 font-[var(--font-bebas)] text-6xl md:text-8xl tracking-tight">PROJECTS</h1>
          <p className="mt-6 max-w-md font-mono text-sm text-muted-foreground leading-relaxed">
            Some of the things I&apos;ve built — from offline-first mobile apps to fullstack platforms and IoT
            automation.
          </p>
        </header>

        <ProjectsList lang="en" />

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-border/20 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            © 2026 {site.fullName}
          </p>
          <Link
            href="/en"
            className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors duration-200"
          >
            Back to home
          </Link>
        </footer>
      </div>
    </main>
  )
}
