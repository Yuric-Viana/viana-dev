type TechnologyColor = "cyan" | "blue" | "green" | "indigo" | "white";

type Project = {
  title: string;
  skills: string[];
  image: string;
  isLatest: boolean;
  colorBadge: string;
  colorDot: string;
  problem: string;
  solution: string;

  features: {
    title: string;
    description: string;
    icon: string;
  }[];

  technologies: {
    name: string;
    description: string;
    icon: string;
    color: TechnologyColor;
  }[];
};

export const projects = [
  {
    title: "help-desk",

    skills: ["Next.js", "TypeScript", "Prisma", "React", "Node.js"],

    image: "/projects/HelpDesk.png",

    isLatest: true,

    colorBadge:
      "bg-[#3B82F6]/12 border border-[#3B82F6]/30 text-[#93C5FD]",

    colorDot: "text-[#51A2FF] fill-[#51A2FF]",

    problem:
      "Equipes de suporte precisam de uma ferramenta centralizada para registrar, distribuir e acompanhar chamados sem perder o histórico e gestores precisam de visibilidade sobre custos e desempenho. Ferramentas genéricas não atendem a esses requisitos com a granularidade necessária.",

    solution:
      "Plataforma Full Stack com Next.js e Prisma/PostgreSQL, oferecendo três perfis de acesso distintos, catálogo de serviços, cálculo automático de custos por chamado e dashboards analíticos com métricas de SLA, volume e distribuição por categoria.",

    features: [
      {
        title: "Controle de acesso",
        description:
          "Três perfis distintos — Admin, Técnico e Cliente — com permissões granulares por módulo e ação.",
        icon: "LockKeyhole",
      },
      {
        title: "Sistema de tickets",
        description:
          "Criação, triagem e acompanhamento de chamados com prioridade, status e histórico completo.",
        icon: "FileText",
      },
      {
        title: "Catálogo de serviços",
        description:
          "Biblioteca de serviços pré-configurados com SLA, custo e técnicos responsáveis associados.",
        icon: "LayoutGrid",
      },
      {
        title: "Cálculo de custos",
        description:
          "Apuração automática de custos por chamado, técnico e período com exportação de relatórios.",
        icon: "DollarSign",
      },
      {
        title: "Dashboards analíticos",
        description:
          "Painéis com gráficos de volume, resolução, tempo médio e distribuição por categoria.",
        icon: "Activity",
      },
      {
        title: "Distribuição inteligente",
        description:
          "Atribuição automática de chamados baseada em carga de trabalho, especialidade e disponibilidade.",
        icon: "Sparkles",
      },
    ],
    technologies: [
      {
        name: "Next.js",
        description: "SSR & full-stack framework",
        icon: "NextJs",
        color: "white",
      },
      {
        name: "TypeScript",
        description: "Type safety & DX",
        icon: "TypeScript",
        color: "blue",
      },
      {
        name: "Prisma",
        description: "ORM & database toolkit",
        icon: "Prisma",
        color: "indigo",
      },
      {
        name: "PostgreSQL",
        description: "Banco de dados relacional",
        icon: "PostgreSQL",
        color: "blue",
      },
    ],
  },

  {
    title: "moovie-app",

    skills: ["React", "Node.js", "SQLite", "TypeScript"],

    image: "/projects/MoovieApp.png",

    isLatest: false,

    colorBadge:
      "bg-[#8B5CF6]/12 border border-[#8B5CF6]/30 text-[#C4B5FD]",

    colorDot: "text-[#C27AFF] fill-[#C27AFF]",

    problem:
      "Amantes de cinema precisam de uma plataforma centralizada para descobrir filmes, manter suas listas pessoais e registrar avaliações — sem depender de múltiplos serviços diferentes. O Movie App resolve isso com uma experiência unificada e intuitiva.",

    solution:
      "Interface clean com busca em tempo real via TMDB API, sistema de favoritos persistente, avaliações com histórico e layout totalmente responsivo. Backend em Node.js com banco SQL para garantir desempenho e escalabilidade.",

    features: [
      {
        title: "Busca de filmes",
        description:
          "Pesquisa em tempo real com integração à API TMDB, com filtros por gênero, ano e avaliação.",
        icon: "Search",
      },
      {
        title: "Favoritos",
        description:
          "Sistema de lista pessoal com persistência local e sincronização com backend.",
        icon: "Heart",
      },
      {
        title: "Avaliações",
        description:
          "Sistema de notas e reviews com média ponderada e histórico de avaliações do usuário.",
        icon: "Star",
      },
      {
        title: "Histórico",
        description:
          "Registro de filmes assistidos com data, nota e comentário pessoal.",
        icon: "History",
      },
      {
        title: "Interface responsiva",
        description:
          "Layout adaptado para desktop, tablet e mobile com experiência otimizada em cada tela.",
        icon: "Smartphone",
      },
      {
        title: "Integração com API",
        description:
          "Consumo da TMDB API para dados atualizados de filmes, séries, trailers e elenco.",
        icon: "ChartNoAxesColumn",
      },
    ],

    technologies: [
      {
        name: "React",
        description: "UI components & SPA",
        icon: "React",
        color: "cyan",
      },
      {
        name: "TypeScript",
        description: "Type safety & DX",
        icon: "TypeScript",
        color: "blue",
      },
      {
        name: "Node.js",
        description: "Backend & API REST",
        icon: "NodeJs",
        color: "green",
      },
      {
        name: "SQL",
        description: "Banco de dados relacional",
        icon: "Database",
        color: "blue",
      },
    ],
  },
] satisfies Project[];