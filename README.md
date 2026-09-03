# 🌌 Yuri Viana — Portfólio Pessoal

**Desenvolvedor Full Stack | Bacharel em Engenharia de Software (PUC Minas)**

🔗 **Site publicado:** [https://viana-dev-navy.vercel.app/](https://viana-dev-navy.vercel.app/)

[Sobre](#-sobre-o-projeto) • [Arquitetura](#-diferenciais-e-arquitetura) • [Tecnologias](#️-tecnologias-utilizadas) • [Dependências](#-dependências-e-bibliotecas) • [Estrutura de Diretórios](#-estrutura-de-diretórios) • [Seções](#️-seções-do-site) • [Projetos](#-projetos-em-destaque) • [Como Executar](#-como-executar) • [Contato](#-contato)

[![Seção Home](https://github.com/Yuric-Viana/viana-dev/raw/main/public/figma/home.png)](/Yuric-Viana/viana-dev/blob/main/public/figma/home.png)

---

## 📌 Sobre o Projeto

Este repositório contém o código-fonte do meu **Portfólio Pessoal**, uma aplicação web desenvolvida para apresentar minha trajetória profissional, competências técnicas, formação acadêmica e projetos de software.

O projeto foi concebido com uma estética *Dark/Space Theme*, focando em **experiência do usuário (UX)**, **alta performance**, **acessibilidade** e **layout responsivo** para todos os tamanhos de tela.

> Projeto desenvolvido para a disciplina de **Projeto de Software** — Curso de Engenharia de Software, PUC Minas (Laboratório 1, Segundo Semestre/2026).

---

## ✨ Diferenciais e Arquitetura

- **Design System consistente:** Desenvolvido do zero no Figma antes da implementação.
- **Internacionalização (i18n):** Suporte a apresentações em Português (PT-BR) e Inglês (EN).
- **Navegação Fluida:** Transições suaves entre as seções da página e páginas de detalhes.
- **Tipagem Estática Total:** Construído com TypeScript para garantir manutenibilidade e segurança no código.
- **Modularização de Componentes:** Componentes reaproveitáveis e desacoplados para facilidade de expansão.

---

## 🛠️ Tecnologias Utilizadas

**Front-end & UI/UX**
- **Next.js / React** — Framework para renderização otimizada e gerenciamento de rotas.
- **TypeScript** — Tipagem estática aplicável a toda a base de código.
- **Tailwind CSS** — Framework CSS utilitário para estilização ágil e responsiva.
- **Figma** — Prototipagem de alta fidelidade da interface.

**Back-end & Banco de Dados**
- **Node.js** — Runtime para construção de APIs e regras de negócio.
- **Prisma ORM** — Mapeamento objeto-relacional para integração simples com o banco.
- **PostgreSQL / SQLite** — Persistência de dados relacional.

**DevOps & Ferramentas**
- **Docker** — Conteinerização para padronização de ambiente de desenvolvimento.
- **Git & GitHub** — Controle de versão e gerenciamento de código.
- **Vercel** — Hospedagem e deploy contínuo do front-end.

---

## 📦 Dependências e Bibliotecas

Principais dependências do projeto (ver detalhes completos em `package.json`):

| Categoria | Pacote | Finalidade |
|---|---|---|
| Framework | `next` | Framework React fullstack (SSR/SSG, API routes) |
| UI | `react`, `react-dom` | Biblioteca base de construção de interface |
| Tipagem | `typescript`, `@types/react`, `@types/node` | Tipagem estática do projeto |
| Estilização | `tailwindcss`, `postcss`, `autoprefixer` | Estilização utilitária e responsiva |
| Componentes | `shadcn/ui`, `class-variance-authority`, `clsx` | Componentes de UI reutilizáveis |
| ORM / Banco | `prisma`, `@prisma/client` | Modelagem e acesso ao banco de dados |
| Qualidade | `eslint`, `eslint-config-next` | Padronização e qualidade de código |

> ⚠️ Ajuste esta tabela conforme as dependências reais listadas no seu `package.json`, incluindo as versões utilizadas.

---

## 📂 Estrutura de Diretórios

```
viana-dev/
├── app/                 # Rotas e páginas da aplicação (App Router do Next.js)
├── components/          # Componentes de UI reutilizáveis (header, footer, cards, etc.)
├── lib/                 # Funções utilitárias, configurações e integrações (ex: Prisma client)
├── public/              # Arquivos estáticos (imagens, ícones, prints do Figma)
│   └── figma/           # Prints das telas usadas neste README
├── .gitignore
├── AGENTS.md            # Diretrizes para agentes/assistentes de IA no projeto
├── CLAUDE.md            # Instruções específicas para uso do Claude no projeto
├── components.json      # Configuração dos componentes shadcn/ui
├── eslint.config.mjs    # Configuração do ESLint
├── next.config.ts       # Configuração do Next.js
├── package.json         # Dependências e scripts do projeto
├── postcss.config.mjs   # Configuração do PostCSS (Tailwind)
├── tsconfig.json        # Configuração do TypeScript
└── README.md
```

---

## 🖥️ Seções do Site

### 🏠 Home (Início)
Apresentação inicial com introdução, navegação rápida para projetos, resumo sobre mim e destaque para as tecnologias principais da stack.

[![Seção Home](https://github.com/Yuric-Viana/viana-dev/raw/main/public/figma/home.png)](/Yuric-Viana/viana-dev/blob/main/public/figma/home.png)

---

### 👤 Sobre Mim
Apresenta o meu perfil profissional, bio em duas línguas (PT-BR e EN), estatísticas de aprendizado e atalho para download do currículo.

[![Seção Sobre Mim](https://github.com/Yuric-Viana/viana-dev/raw/main/public/figma/About.png)](/Yuric-Viana/viana-dev/blob/main/public/figma/About.png)

---

### ⚡ Habilidades Tecnológicas
Organização visual do domínio técnico por área (Front-end, Back-end, Banco de Dados e DevOps) acompanhado da lista completa das ferramentas dominadas.

[![Seção Habilidades](https://github.com/Yuric-Viana/viana-dev/raw/main/public/figma/My%20Abilities.png)](/Yuric-Viana/viana-dev/blob/main/public/figma/My%20Abilities.png)

---

### 💼 Minha Jornada
Linha do tempo interativa relatando minhas experiências profissionais prévias e os projetos acadêmicos desenvolvidos na PUC Minas.

[![Seção Jornada](https://github.com/Yuric-Viana/viana-dev/raw/main/public/figma/My%20Journey.png)](/Yuric-Viana/viana-dev/blob/main/public/figma/My%20Journey.png)

---

## 📂 Projetos em Destaque

Navegação pelos projetos de forma cronológica, permitindo acessar páginas com o detalhamento completo de cada solução desenvolvida.

| Visão Geral dos Projetos | Detalhes do Projeto (Ex: Movie App) |
|---|---|
| [![Lista de Projetos](https://github.com/Yuric-Viana/viana-dev/raw/main/public/figma/Projects.png)](/Yuric-Viana/viana-dev/blob/main/public/figma/Projects.png) | [![Detalhes do Movie App](https://github.com/Yuric-Viana/viana-dev/raw/main/public/figma/Moovie%20App%20-%20details.png)](/Yuric-Viana/viana-dev/blob/main/public/figma/Moovie%20App%20-%20details.png) |

#### Principais aplicações registradas:
- **Help Desk:** Plataforma para gestão de chamados, controle de acesso, cálculo de custos e relatórios (Next.js, Prisma, PostgreSQL).
- **Movie App:** Aplicação para busca, gerenciamento de favoritos e avaliação de filmes consumindo a API do TMDB (React, Node.js, SQLite).

---

## ▶️ Como Executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Git](https://git-scm.com/)
- Banco de dados PostgreSQL ou SQLite configurado (conforme `.env`)

### Passo a passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Yuric-Viana/viana-dev.git
   cd viana-dev
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**

   Crie um arquivo `.env` na raiz do projeto com as variáveis necessárias, por exemplo:
   ```env
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/viana_dev"
   ```

4. **Execute as migrações do Prisma** (se aplicável)
   ```bash
   npx prisma migrate dev
   ```

5. **Rode o projeto em ambiente de desenvolvimento**
   ```bash
   npm run dev
   ```

6. **Acesse no navegador**
   ```
   http://localhost:3000
   ```

### Build de produção

```bash
npm run build
npm start
```

> ⚠️ Ajuste os comandos e variáveis acima conforme os scripts reais definidos no seu `package.json` e a configuração do Prisma/banco utilizada.

---

## ☁️ Deploy

O projeto está hospedado gratuitamente na **Vercel**, com deploy contínuo a partir da branch `main`.

🔗 **Acesse o site em produção:** [https://viana-dev-navy.vercel.app/](https://viana-dev-navy.vercel.app/)

---

## 📬 Contato

Área para conexão direta via formulário de e-mail e links para redes profissionais.

[![Seção de Contato](https://github.com/Yuric-Viana/viana-dev/raw/main/public/figma/Contact.png)](/Yuric-Viana/viana-dev/blob/main/public/figma/Contact.png)

- 📧 E-mail: *(adicione seu e-mail de contato)*
- 💼 LinkedIn: *(adicione o link do seu LinkedIn)*
- 📱 WhatsApp: *(adicione o link/número, se desejar disponibilizar)*
- 🐙 GitHub: [github.com/Yuric-Viana](https://github.com/Yuric-Viana)

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos na disciplina de Projeto de Software (PUC Minas). Sinta-se à vontade para utilizá-lo como referência.
