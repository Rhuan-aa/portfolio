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
          "Aplicativo móvel offline-first com Clean Architecture, comunicação Bluetooth (GATT/BLE e Serial com Arduino), pareamento via QR Code, autenticação offline, geolocalização em tempo real e mapas vetorizados com Planetiler.",
        tech: ["Flutter", "Dart", "BLE", "Clean Architecture"],
      },
      {
        title: "Dashboard IoT",
        description:
          "Dashboard de monitoramento offline-first em rede interna, com transmissão de dados e imagens em tempo real via MQTT e controle bidirecional de hardware (acionamento de catracas físicas pelo painel).",
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
