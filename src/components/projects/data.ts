export interface Project {
  slug: string;
  name: string;
  tagline: string;
  cardStack: string[];
  stack: string[];
  github: string;
  context: string;
  architecture: string[];
  challenge: {
    title: string;
    problem: string;
    solution: string;
  };
  screenshots: number;
}

export const projects: Project[] = [
  {
    slug: "livo",
    name: "Livo",
    tagline:
      "SaaS multi-tenant de agendamento e gestão financeira para barbearias.",
    cardStack: ["Next.js", "PostgreSQL", "Prisma"],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Auth.js",
      "JWT",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Asaas",
      "Resend",
      "Web Push",
      "Vitest",
      "Playwright",
      "Sentry",
      "PostHog",
      "Vercel",
    ],
    github: "https://github.com/degasdegani/livo",
    context:
      "Barbearias que gerenciam agendamentos por WhatsApp ou caderno perdem tempo, cometem erros de horário e têm dificuldade para controlar comissões de profissionais. O Livo resolve isso com agendamento online 24h, dashboard em tempo real, notificações automáticas via WhatsApp e cobrança integrada — tudo dentro de um único SaaS multi-tenant, atendendo várias barbearias na mesma base.",
    architecture: [
      "43 modelos de dados no domínio, cobrindo agendamento, financeiro, usuários e permissões.",
      "Isolamento multi-tenant por linha (row-level), validado tanto em operações de leitura quanto de escrita.",
      "RBAC com 3 perfis de acesso distintos (dono, profissional, recepção).",
      "Motor financeiro que modela comissões como contas a pagar, conciliadas somente na confirmação efetiva do pagamento.",
      "Strings decimais exatas no pipeline de preços, evitando erros de arredondamento de ponto flutuante em valores monetários.",
      "Notificações push em tempo real sem custo adicional de infraestrutura.",
      "Vulnerabilidade de controle de acesso identificada e corrigida em revisão própria de código.",
      "Testes automatizados com Vitest (unitário) e Playwright (e2e).",
      "Observabilidade em produção com Sentry (erros) e PostHog (analytics).",
    ],
    challenge: {
      title: "Push em tempo real sem inflar o custo de infraestrutura",
      problem:
        "Agendamentos, confirmações e lembretes precisam chegar em tempo real para dono e profissional, mas manter um serviço de mensageria dedicado ou um provedor de push pago não fazia sentido para o estágio do produto.",
      solution:
        "As notificações em tempo real foram arquitetadas sobre os canais já existentes na aplicação, sem contratar um serviço de push adicional — o mesmo comportamento de tempo real, sem custo incremental por mensagem nem nova peça de infraestrutura para operar.",
    },
    screenshots: 2,
  },
  {
    slug: "livo-beauty",
    name: "Livo Beauty",
    tagline:
      "Segunda vertical do ecossistema Livo, para salões de beleza e estúdios de estética.",
    cardStack: ["Next.js", "PostgreSQL", "PWA"],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Auth.js",
      "JWT",
      "PostgreSQL",
      "Prisma",
      "Web Push",
      "PWA",
      "Vercel",
    ],
    github: "https://github.com/degasdegani/livo-beauty",
    context:
      "Salões de beleza e estúdios de estética têm a mesma dor de agendamento e comissionamento das barbearias, mas com particularidades próprias de liquidação financeira entre profissionais e estabelecimento. O Livo Beauty é a segunda vertical do ecossistema Livo, reaproveitando a arquitetura base já validada em produção e adaptando o motor financeiro para esse segmento.",
    architecture: [
      "Reaproveitamento da arquitetura base validada no Livo, em vez de um novo projeto do zero.",
      "Isolamento multi-tenant por linha (row-level), mesmo modelo do Livo.",
      "Dois modos de liquidação financeira, com conciliação automática entre eles.",
      "PWA com push em tempo real, instalável como app sem depender de loja de aplicativos.",
    ],
    challenge: {
      title: "Dois modos de liquidação sobre a mesma base financeira",
      problem:
        "O segmento de estética opera com dois arranjos financeiros distintos entre profissional e estabelecimento, e duplicar a lógica de conciliação para cada um geraria dois fluxos divergentes de manter.",
      solution:
        "A conciliação automática foi desenhada para tratar os dois modos de liquidação sobre a mesma base financeira herdada do Livo, mantendo um único fluxo de conciliação em vez de dois códigos paralelos.",
    },
    screenshots: 2,
  },
  {
    slug: "orderflow",
    name: "OrderFlow",
    tagline: "API RESTful de gestão comercial em Clean Architecture.",
    cardStack: [".NET", "Clean Architecture", "Docker"],
    stack: [
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "JWT",
      "Docker",
      "Clean Architecture",
      "REST API",
    ],
    github: "https://github.com/degasdegani/OrderFlow",
    context:
      "Sistemas de gestão comercial tendem a acoplar regra de negócio a banco de dados e framework, o que dificulta testar e evoluir o domínio isoladamente. O OrderFlow é uma API RESTful de gestão comercial pensada para ser consumida por outros sistemas (front-ends, integrações, parceiros), com o domínio protegido de detalhes de infraestrutura.",
    architecture: [
      "Clean Architecture, com separação estrita entre domínio, aplicação e infraestrutura.",
      "Autenticação via JWT.",
      "Persistência com Entity Framework Core sobre SQL Server.",
      "Execução containerizada com Docker.",
    ],
    challenge: {
      title: "Domínio isolado de infraestrutura e framework",
      problem:
        "Manter as regras de negócio livres de dependências de banco de dados, ORM ou detalhes de deploy, para que o domínio possa ser testado e evoluído sem acoplamento a essas camadas.",
      solution:
        "Separação estrita entre domínio, aplicação e infraestrutura na Clean Architecture, com Entity Framework Core e SQL Server isolados na camada de infraestrutura e execução containerizada via Docker, sem vazar detalhes de persistência para o domínio.",
    },
    screenshots: 2,
  },
  {
    slug: "invoicepro",
    name: "InvoicePro",
    tagline:
      "Gestão do ciclo de orçamento, aprovação, faturamento e recebimento para freelancers.",
    cardStack: ["ASP.NET Core 8", "MVC", "EF Core"],
    stack: ["C#", "ASP.NET Core 8", "MVC", "Entity Framework Core", "SQL Server"],
    github: "https://github.com/degasdegani/InvoicePro",
    context:
      "Freelancers costumam controlar orçamento, aprovação, faturamento e recebimento em planilhas soltas ou ferramentas desconectadas entre si. O InvoicePro é uma aplicação web que estrutura esse ciclo completo em um único lugar, do orçamento inicial ao recebimento.",
    architecture: [
      "Aplicação web em ASP.NET Core 8 MVC.",
      "Persistência com Entity Framework Core.",
      "Ciclo de orçamento, aprovação, faturamento e recebimento modelado como fluxo dentro do mesmo domínio.",
    ],
    challenge: {
      title: "Um ciclo de cobrança coerente do orçamento ao recebimento",
      problem:
        "Orçamento, aprovação, faturamento e recebimento costumam viver em ferramentas separadas, o que abre espaço para inconsistência entre etapas (ex: um faturamento sem aprovação registrada).",
      solution:
        "O ciclo completo foi modelado como um fluxo de estados dentro do mesmo domínio MVC, com cada etapa (orçamento → aprovação → faturamento → recebimento) dependendo do estado anterior, em vez de telas independentes sem relação entre si.",
    },
    screenshots: 2,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
