export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  title: string
  category: string
  description: string
  categoryEn?: string
  descriptionEn?: string
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
    title: "Atlas",
    category: "IA / Assistente de Voz",
    categoryEn: "AI / Voice Assistant",
    description:
      "Assistente de voz local para Linux que construí do zero: wake word (\"hey jarvis\" via openWakeWord), transcrição com faster-whisper em pt-BR e síntese de fala com Piper rodando 100% no dispositivo, sem áudio saindo para a nuvem. Desenhei um roteador que resolve comandos fixos localmente (abrir apps, controlar música por MPRIS, enviar mensagens no Telegram, busca na web, mover arquivos para a lixeira com confirmação por voz) e delega o resto — perguntas abertas e ações reais na máquina, como criar e organizar arquivos ou tarefas de múltiplos passos — a um agente com fluxo de aprovação obrigatório para comandos perigosos e fallback em cadeia (provedor na nuvem → modelo local Ollama qwen2.5:7b) para continuar funcionando quando a rede cai. Também construí um quadro colaborativo em tempo real sobre WebSocket dedicado, com objetos de texto, imagem, áudio e modelos 3D, conectores curvos, undo pelo padrão Memento, geração de mídia por IA (imagens com FLUX.1-dev e 3D com TRELLIS via NVIDIA NIM) e um modo Build que transforma um pedido em linguagem natural em um grafo de nós estruturado. Fecha com controle por gestos da câmera usando MediaPipe, processado inteiramente no navegador, e hooks de git que impõem Conventional Commits e bloqueiam vazamento de segredos a cada commit.",
    descriptionEn:
      "Local voice assistant for Linux that I built from scratch: wake word (\"hey jarvis\" via openWakeWord), speech-to-text with faster-whisper in pt-BR and speech synthesis with Piper, all running 100% on-device with no audio leaving the machine. I designed a router that handles fixed commands locally (launching apps, music control over MPRIS, Telegram messages, web search, moving files to trash with voice confirmation) and delegates everything else — open-ended questions and real actions on the machine, like creating and organizing files or multi-step tasks — to an agent with a mandatory approval flow for dangerous commands and a fallback chain (cloud provider → local Ollama qwen2.5:7b) so it keeps working when the network drops. I also built a real-time collaborative board over a dedicated WebSocket, with text, image, audio and 3D-model objects, curved connectors, undo via the Memento pattern, AI media generation (images with FLUX.1-dev and 3D with TRELLIS through NVIDIA NIM) and a Build mode that turns a natural-language request into a structured node graph. Rounded off with camera hand-gesture control using MediaPipe, processed entirely in the browser, and git hooks that enforce Conventional Commits and block secret leakage on every commit.",
    tech: ["Python", "LLM & Agentes", "Ollama", "WebSockets", "faster-whisper", "MediaPipe"],
    year: "2026",
    links: [{ label: "GitHub", url: "https://github.com/Rhuan-aa/atlas" }],
    featured: true,
    span: "col-span-2 md:col-span-4 row-span-1",
  },
  {
    title: "CTruco",
    category: "Fullstack / Educacional",
    categoryEn: "Fullstack / Educational",
    description:
      "Plataforma educacional para ensino de programação orientada a objetos através de um jogo de Truco. Onde minha responsabilidade fora o desenvolvimento do módulo Multiplayer assíncrono via WebSockets, validação rigorosa de cadastros para novos jogadores (MX Records, Regex), coleta de dataset para futuro aprendizado de maquina e conteinarização para deploy com Docker, por fim tendo responsabilidade de adicionar os testes automatizados restantes.",
    descriptionEn:
      "Educational platform for teaching object-oriented programming through a card game (Truco). My responsibility was the asynchronous Multiplayer module over WebSockets, strict validation for new player registrations (MX Records, Regex), dataset collection for future machine learning, and containerization for deployment with Docker — finishing with the addition of the remaining automated tests.",
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
    descriptionEn:
      "Full-stack web system for managing NPCs in tabletop RPG campaigns, with real-time sync between Game Master and players. The project solves a practical problem at RPG tables: organizing which players interact with which NPCs over the course of play. The Game Master creates campaigns, builds a reusable NPC roster with full character sheets (attributes, traits, knowledge and portrait), and controls what's visible to players. Play time is organized into 'TimeSkips' with daily interaction slots, where players schedule actions with NPCs or solo actions (training, studying, or custom activities created by the GM), with cost rules where longer actions occupy multiple consecutive slots. The entire schedule grid syncs in real time via WebSocket — what one player schedules appears instantly for the others — and a narrative log feed records the campaign's story.",
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
    descriptionEn:
      "Gamified album of love letters: each message stays locked until the recipient scans a QR code, revealing the letter with a 3D flip animation. Includes an admin panel, automatic QR code generation, and a mobile-first design with a scrapbook aesthetic.",
    tech: ["TypeScript", "React", "TanStack Start", "Tailwind CSS"],
    year: "2026",
    links: [{ label: "GitHub", url: "https://github.com/Rhuan-aa/qr-love-album" }],
    featured: true,
    span: "col-span-1 row-span-2",
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
