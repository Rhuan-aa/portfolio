export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  title: string
  category: string
  description: string
  tech: string[]
  year: string
  /** Links para repositórios/demos — mais de um vira mini-cards no card do projeto */
  links: ProjectLink[]
  /** Aparece na home (seção Projetos) */
  featured?: boolean
  /** Tamanho do card na grade da home (classes de grid) */
  span?: string
}

/**
 * Adicione novos projetos aqui — a home mostra os `featured`
 * e a página /projetos lista todos.
 */
export const projects: Project[] = [
  {
    title: "CTruco",
    category: "Fullstack / Educacional",
    description:
      "Plataforma educacional para ensino de programação através de um jogo de Truco. Multiplayer assíncrono via WebSockets, validação rigorosa de cadastros (MX Records, Regex), coleta de dataset para IA e deploy com Docker.",
    tech: ["Java", "Spring Boot", "React", "WebSockets", "Docker"],
    year: "2025",
    links: [
      { label: "Backend", url: "https://github.com/lucas-ifsp/CTruco" },
      { label: "Frontend", url: "https://github.com/lucas-ifsp/CTruco-front" },
    ],
    featured: true,
    span: "col-span-2 row-span-2",
  },
  {
    title: "Tatakai Manager",
    category: "Fullstack / Web",
    description:
      "Sistema colaborativo para gerenciar NPCs em campanhas de RPG de mesa: fichas completas, agendamento de interações em slots de tempo, progressão do tempo narrativo e logs — tudo sincronizado em tempo real via WebSocket, com autenticação JWT e deploy em Oracle Cloud.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "React", "Docker"],
    year: "2025",
    links: [{ label: "GitHub", url: "https://github.com/Rhuan-aa/TatakaiManager" }],
    featured: true,
    span: "col-span-1 row-span-2",
  },
  {
    title: "QR Love Album",
    category: "Web / Front-end",
    description:
      "Álbum gamificado de cartas de amor: cada mensagem fica bloqueada até o destinatário escanear um QR Code, revelando a carta com animação de flip 3D. Painel administrativo, geração automática de QR codes e design mobile-first com estética de scrapbook.",
    tech: ["TypeScript", "React", "TanStack Start", "Tailwind CSS"],
    year: "2025",
    links: [{ label: "GitHub", url: "https://github.com/Rhuan-aa/qr-love-album" }],
    featured: true,
    span: "col-span-1 row-span-2",
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
