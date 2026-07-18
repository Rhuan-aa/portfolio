export interface ExperienceItem {
  title: string
  description: string
  tech: string[]
}

export interface Experience {
  role: string
  company: string
  period: string
  items: ExperienceItem[]
}

/**
 * Experiência profissional — trabalhos sem repositório público
 * ficam aqui em vez da lista de projetos.
 */
export const experiences: Experience[] = [
  {
    role: "Engenheiro de Software",
    company: "Newgesti",
    period: "Ago 2025 — Presente",
    items: [
      {
        title: "App Offline-First",
        description:
          "Aplicativo móvel offline-first com Clean Architecture, projetado para operar totalmente sem internet. A arquitetura nasceu de uma restrição de hardware: os Arduinos em campo armazenam apenas pequenas quantidades de dados, atuando como buffer temporário durante o curto período de transição entre dispositivos — cabe ao app coletar essas leituras via Bluetooth (GATT/BLE e Serial) e persisti-las localmente antes que sejam sobrescritas. Conta ainda com pareamento via QR Code, autenticação offline, geolocalização em tempo real e mapas vetorizados com Planetiler.",
        tech: ["Flutter", "Dart", "BLE", "Clean Architecture"],
      },
      {
        title: "Dashboard IoT",
        description:
          "Dashboard de monitoramento offline-first construído em Node-RED com FlowFuse Dashboard 2.0, projetado para alta disponibilidade e operando de forma isolada na rede interna do local. A transmissão de dados e imagens em tempo real é estruturada sobre MQTT, garantindo atualização contínua e instantânea das métricas na interface. Fluxos lógicos de automação viabilizam o controle bidirecional de hardware, permitindo gerenciar e acionar catracas físicas em tempo real diretamente pelo painel.",
        tech: ["Node-RED", "MQTT", "IoT"],
      },
    ],
  },
  {
    role: "Pesquisador de Iniciação Científica",
    company: "IFSP — Campus São Carlos",
    period: "Jun 2025 — Jul 2026",
    items: [
      {
        title: "CTruco — Plataforma Educacional",
        description:
          "Arquitetura fullstack (Java/Spring Boot e ReactJS) de um projeto educacional para ensino de programação por meio de um jogo de Truco gamificado, com testes automatizados (JUnit e AssertJ) e infraestrutura conteinerizada com Docker.",
        tech: ["Java", "Spring Boot", "React", "JUnit", "Docker"],
      },
    ],
  },
]
