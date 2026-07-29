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
  decisions?: {
    title: string;
    problem: string;
    solution: string;
    tradeoff?: string;
  }[];
  modules?: string[];
  patterns?: string[];
  screenshots: number | string[];
}

export const projects: Project[] = [
  {
    slug: "livo",
    name: "Livo Barber",
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
    decisions: [
      {
        title: "Isolamento multi-tenant por linha, validado nos dois sentidos",
        problem:
          "Todo registro carrega o identificador do estabelecimento, e o filtro precisa ser aplicado tanto na leitura quanto na escrita — filtrar apenas a consulta protege contra vazamento, mas não impede que uma requisição forjada altere o registro de outro tenant.",
        solution:
          "Durante uma revisão do próprio código, foi identificada uma rota de escrita sem o filtro de escopo, e corrigida. Isso levou a padronizar a validação nos dois sentidos.",
        tradeoff:
          "Alternativa descartada: banco de dados isolado por tenant. Resolveria o isolamento por construção, mas multiplicaria o custo de infraestrutura e migração por cliente — inviável para um produto vendido a partir de R$ 59,90/mês.",
      },
      {
        title: "Comissão modelada como conta a pagar, não como saída de caixa",
        problem:
          "O primeiro modelo tratava a comissão do profissional como despesa lançada no atendimento, produzindo um relatório financeiro errado: o caixa aparecia reduzido por um valor que ainda não tinha saído.",
        solution:
          "A comissão passou a ser um passivo — gerada no atendimento, mas só afeta o caixa quando o pagamento ao profissional é efetivamente confirmado. O sistema suporta dois modos de liquidação, parcial e total, com conciliação automática.",
        tradeoff:
          "Aprendizado: modelar o domínio financeiro exige entender contabilidade básica antes de escrever a primeira migration — refatorar depois custa caro porque dados históricos já foram gravados no formato errado.",
      },
      {
        title: "Precisão decimal exata em todo o pipeline monetário",
        problem:
          "Valores monetários em ponto flutuante acumulam erro de arredondamento que, num fechamento mensal, aparece como centavos que ninguém consegue explicar.",
        solution:
          "Valores monetários trafegam como string decimal e são convertidos apenas nas fronteiras do sistema.",
      },
      {
        title: "Notificações push sem custo adicional de infraestrutura",
        problem:
          "Profissionais precisam saber de um novo agendamento em tempo real, mas WebSocket ou um serviço gerenciado de push adicionam custo fixo mensal a um produto ainda validando receita.",
        solution:
          "Implementado com Web Push nativo, contornando o limite de execução de cron do plano de hospedagem através de um disparador externo com intervalo curto.",
        tradeoff:
          "Trade-off assumido: latência de até alguns minutos em vez de instantânea — aceitável para o estágio atual do produto, e revisável quando a receita justificar a troca.",
      },
    ],
    modules: [
      "Agenda",
      "Comanda",
      "Clientes",
      "Profissionais",
      "Produtos e Estoque",
      "Financeiro",
      "Assinaturas",
      "Relatórios",
    ],
    patterns: [
      "Row-level multi-tenancy",
      "RBAC por papel",
      "Server Actions + Route Handlers",
    ],
    screenshots: [
      "/images/projects/livo-barber-dashboard.png",
      "/images/projects/livo-barber-agenda.png",
      "/images/projects/livo-barber-relatorios.png",
    ],
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
    decisions: [
      {
        title: "O repasse ao profissional é um passivo, não uma despesa de caixa",
        problem:
          "Quando um atendimento é fechado, tratar a comissão da profissional como saída imediata faz o relatório mostrar o salão com menos dinheiro do que realmente tem em caixa.",
        solution:
          "A comissão passa a existir como conta a pagar, afetando o caixa só quando o repasse é efetivamente confirmado. O sistema suporta dois modos de liquidação — parcial e total — com conciliação automática.",
      },
      {
        title: "Isolamento multi-tenant por linha, validado em leitura e escrita",
        problem:
          "Filtrar apenas a leitura protege contra vazamento, mas deixa passar escrita forjada em registro de outro tenant.",
        solution:
          "Durante revisão do próprio código foi encontrado exatamente esse caso — uma rota de escrita sem filtro de escopo — e a correção virou padrão: nenhuma operação chega ao ORM sem passar por sessão, papel e tenant.",
      },
      {
        title: "Reaproveitamento real da arquitetura entre verticais",
        problem:
          "Duplicar a base inteira para um segundo produto multiplicaria o esforço de manutenção.",
        solution:
          "O Livo Beauty não é um fork do Livo Barber: as regras de domínio que mudam entre os segmentos (modelo de comissão, tipos de serviço, fluxo de atendimento) foram isoladas da fundação comum de autenticação, tenant, agenda e financeiro.",
      },
      {
        title: "Notificação em tempo real sem custo adicional de infraestrutura",
        problem:
          "A profissional precisa saber do agendamento no momento em que ele acontece, mas WebSocket ou serviço gerenciado de push adicionam custo fixo mensal.",
        solution:
          "Implementado com Web Push nativo em PWA instalável, contornando o limite de cron do plano de hospedagem via disparador externo.",
        tradeoff:
          "Trade-off assumido: latência de poucos minutos em vez de instantânea — aceitável para agendamento, revisável quando a receita justificar.",
      },
    ],
    modules: [
      "Fundação e Autenticação",
      "Profissionais e Serviços",
      "Agenda",
      "Clientes",
      "Produtos e Estoque",
      "Financeiro",
      "Relatórios",
    ],
    patterns: ["Row-level multi-tenancy", "RBAC de 3 papéis", "PWA instalável"],
    screenshots: ["/images/projects/livo-beauty-dashboard.png"],
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
    modules: [
      "Autenticação JWT com perfis (Admin, Manager, Seller)",
      "Clientes",
      "Fornecedores",
      "Categorias",
      "Produtos com SKU e alerta de estoque mínimo",
      "Pedidos com baixa automática de estoque",
      "Pagamentos com confirmação automática",
      "Movimentação de estoque com histórico",
      "Dashboard gerencial",
    ],
    patterns: [
      "Repository Pattern",
      "Unit of Work",
      "DTO Pattern",
      "Global Exception Middleware",
      "Soft Delete",
      "Fluent API",
    ],
    screenshots: [
      "https://github.com/degasdegani/OrderFlow/raw/main/docs/screenshots/13-dashboard.png",
      "https://github.com/degasdegani/OrderFlow/raw/main/docs/screenshots/01-auth.png",
      "https://github.com/degasdegani/OrderFlow/raw/main/docs/screenshots/09-order-create.png",
      "https://github.com/degasdegani/OrderFlow/raw/main/docs/screenshots/07-products-list.png",
      "https://github.com/degasdegani/OrderFlow/raw/main/docs/screenshots/08-customers-list.png",
      "https://github.com/degasdegani/OrderFlow/raw/main/docs/screenshots/12-stock-movement.png",
    ],
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
    modules: [
      "Autenticação com ASP.NET Core Identity",
      "Dashboard financeiro",
      "Clientes",
      "Produtos e Serviços",
      "Orçamentos com cálculo automático",
      "Faturas com controle de status",
      "Conversão de orçamento aprovado em fatura",
    ],
    patterns: ["Multi-usuário com escopo por usuário", "Repository via EF Core"],
    screenshots: [
      "https://github.com/degasdegani/InvoicePro/raw/main/docs/images/01-dashboard.png",
      "https://github.com/degasdegani/InvoicePro/raw/main/docs/images/03-orcamentos.png",
      "https://github.com/degasdegani/InvoicePro/raw/main/docs/images/05-faturas.png",
      "https://github.com/degasdegani/InvoicePro/raw/main/docs/images/06-detalhes-fatura.png",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
