export interface ExperienceItem {
  title: string
  description: string
  titleEn?: string
  descriptionEn?: string
  tech: string[]
}

export interface Experience {
  role: string
  company: string
  period: string
  roleEn?: string
  periodEn?: string
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
    roleEn: "Software Engineer",
    periodEn: "Aug 2025 — Present",
    items: [
      {
        title: "App Offline-First",
        titleEn: "Offline-First App",
        description:
          "Aplicativo móvel offline-first com Clean Architecture, projetado para operar totalmente sem internet. A arquitetura nasceu de uma restrição de hardware: os Arduinos em campo armazenam apenas pequenas quantidades de dados, atuando como buffer temporário durante o curto período de transição entre dispositivos — cabe ao app coletar essas leituras via Bluetooth (GATT/BLE e Serial) e persisti-las localmente antes que sejam sobrescritas. Conta ainda com pareamento via QR Code, autenticação offline, geolocalização em tempo real e mapas vetorizados com Planetiler.",
        descriptionEn:
          "Offline-first mobile app built with Clean Architecture, designed to run entirely without internet access. The architecture grew out of a hardware constraint: the field Arduinos only store small amounts of data, acting as a temporary buffer during the short transition window between devices — the app has to collect those readings over Bluetooth (GATT/BLE and Serial) and persist them locally before they get overwritten. It also handles QR-code pairing, offline authentication, real-time geolocation, and vector maps rendered with Planetiler.",
        tech: ["Flutter", "Dart", "BLE", "Clean Architecture"],
      },
      {
        title: "Dashboard IoT",
        titleEn: "IoT Dashboard",
        description:
          "Dashboard de monitoramento offline-first construído em Node-RED com FlowFuse Dashboard 2.0, projetado para alta disponibilidade e operando de forma isolada na rede interna do local. A transmissão de dados e imagens em tempo real é estruturada sobre MQTT, garantindo atualização contínua e instantânea das métricas na interface. Fluxos lógicos de automação viabilizam o controle bidirecional de hardware, permitindo gerenciar e acionar catracas físicas em tempo real diretamente pelo painel.",
        descriptionEn:
          "Offline-first monitoring dashboard built in Node-RED with FlowFuse Dashboard 2.0, designed for high availability and running isolated on the site's internal network. Real-time data and image transmission is structured over MQTT, keeping the interface's metrics continuously and instantly updated. Automation flows enable bidirectional hardware control, letting the panel manage and trigger physical turnstiles in real time.",
        tech: ["Node-RED", "MQTT", "IoT"],
      },
    ],
  },
  {
    role: "Pesquisador de Iniciação Científica",
    company: "IFSP — Campus São Carlos",
    period: "Jun 2025 — Jul 2026",
    roleEn: "Undergraduate Research Fellow",
    items: [
      {
        title: "CTruco — Plataforma Educacional",
        titleEn: "CTruco — Educational Platform",
        description:
          "Arquitetura fullstack (Java/Spring Boot e ReactJS) de um projeto educacional para ensino de programação por meio de um jogo de Truco gamificado, com testes automatizados (JUnit e AssertJ) e infraestrutura conteinerizada com Docker.",
        descriptionEn:
          "Fullstack architecture (Java/Spring Boot and ReactJS) for an educational project teaching programming through a gamified card game (Truco), with automated tests (JUnit and AssertJ) and containerized infrastructure with Docker.",
        tech: ["Java", "Spring Boot", "React", "JUnit", "Docker"],
      },
    ],
  },
]
