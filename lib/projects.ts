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
      "Sistema web full-stack para gerenciamento de NPCs em campanhas de RPG de mesa, com sincronização em tempo real entre Mestre e jogadores. O projeto resolve um problema prático das mesas de RPG: organizar quais jogadores interagem com quais NPCs ao longo do tempo de jogo. O Mestre cria campanhas, monta um acervo reutilizável de NPCs com ficha completa (atributos, traços, conhecimentos e retrato) e controla o que fica visível para os jogadores. O tempo de jogo é organizado em 'TimeSkips' com slots diários de interação, onde os jogadores agendam ações com NPCs ou ações solo (treino, estudo ou atividades customizadas criadas pelo Mestre), com regras de custo em que ações mais longas ocupam múltiplos slots consecutivos. Toda a grade de agendamento é sincronizada em tempo real via WebSocket — o que um jogador agenda aparece instantaneamente para os demais — e um feed de logs narrativos registra a história da campanha.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "MongoDB", "React", "Docker"],
    year: "2026",
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
    year: "2026",
    links: [{ label: "GitHub", url: "https://github.com/Rhuan-aa/qr-love-album" }],
    featured: true,
    span: "col-span-1 row-span-2",
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
