import { StarsBackground } from "@/components/StarsBackground";
import { Database, Server, Sparkles, Wrench } from "lucide-react";

const skillAreas = [
  {
    name: "Frontend",
    description: "React, Next.js, TypeScript, Tailwind CSS",
    percentage: 95,
    color: "purple",
  },
  {
    name: "Backend",
    description: "Node.js, Prisma, REST APIs",
    percentage: 90,
    color: "blue",
  },
  {
    name: "Banco de Dados",
    description: "PostgreSQL, MySQL, SQLite",
    percentage: 85,
    color: "indigo",
  },
  {
    name: "DevOps & Tools",
    description: "Docker, Git, GitHub, Figma",
    percentage: 80,
    color: "purple",
  },
];

const categories = [
  {
    id: 1,
    title: "Front-end",
    color: "purple",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    id: 2,
    title: "Back-end",
    color: "blue",
    skills: ["Node.js", "APIs REST", "Prisma"],
  },
  {
    id: 3,
    title: "Banco de Dados",
    color: "indigo",
    skills: ["PostgreSQL", "MySQL", "SQLite"],
  },
  {
    id: 4,
    title: "DevOps & Ferramentas",
    color: "purple",
    skills: ["Docker", "Git", "GitHub", "Figma"],
  },
];

const completeStack = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Prisma",
  "PostgreSQL",
  "MySQL",
  "SQLite",
  "Docker",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Figma",
  "REST APIs",
  "Linux",
];

const colorClasses = {
  purple: {
    text: "text-[#A855F7]",
    bar: "bg-[#A855F7]",
    border: "border-[#A855F7]/25",
    background: "bg-[#A855F7]/5",
  },
  blue: {
    text: "text-[#3B82F6]",
    bar: "bg-[#3B82F6]",
    border: "border-[#3B82F6]/25",
    background: "bg-[#3B82F6]/5",
  },
  indigo: {
    text: "text-[#6366F1]",
    bar: "bg-[#6366F1]",
    border: "border-[#6366F1]/25",
    background: "bg-[#6366F1]/5",
  },
};

export default function SkillsPage() {
  return (
    <div className="px-5 pb-20 pt-16">
      <StarsBackground />
      <section>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#E2E8F0]">
          Minhas habilidades
        </h1>

        <p className="mt-2 text-base text-[#94A3B8]">
          Tecnologias <span className="text-[#A855F7]">&amp;</span> Ferramentas
        </p>
      </section>

      <section className="mt-16 rounded-2xl border border-[#8B5CF6]/15 bg-[#0A0F28]/60 p-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#A855F7]">
          DOMÍNIO POR ÁREA
        </span>

        <div className="mt-8 space-y-7">
          {skillAreas.map((skill) => {
            const colors =
              colorClasses[skill.color as keyof typeof colorClasses];

            return (
              <div key={skill.name}>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h2 className="text-sm font-semibold text-[#E2E8F0]">
                      {skill.name}
                    </h2>

                    <p className="mt-1 text-xs text-[#64748B]">
                      {skill.description}
                    </p>
                  </div>

                  <span
                    className={`font-mono text-sm font-semibold ${colors.text}`}
                  >
                    {skill.percentage}%
                  </span>
                </div>

                <div className="mt-2 h-1 overflow-hidden rounded-full bg-[#171B2F]">
                  <div
                    className={`h-full rounded-full ${colors.bar}`}
                    style={{
                      width: `${skill.percentage}%`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-6 space-y-4">
        {categories.map((category) => {
          const colors =
            colorClasses[category.color as keyof typeof colorClasses];

          return (
            <div
              key={category.id}
              className="rounded-2xl border border-[#8B5CF6]/15 bg-[#0A0F28]/60 p-5"
            >
              <div className="mb-4 flex items-center gap-2">
                <span
                  className={`size-2 rounded-full ${colors.bar} shadow-[0_0_8px_currentColor]`}
                />

                <h2
                  className={`font-mono text-sm font-semibold ${colors.text}`}
                >
                  {category.title}
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full border px-3 py-1 font-mono text-[11px] ${colors.border} ${colors.background} ${colors.text}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className="mt-12 rounded-2xl border border-[#8B5CF6]/15 bg-[#0A0F28]/60 p-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#A855F7]">
          STACK COMPLETA
        </span>

        <div
          className="mt-7 grid gap-2"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))",
          }}
        >
          {completeStack.map((skill) => (
            <span
              key={skill}
              className="flex w-full items-center justify-center whitespace-nowrap rounded-full border border-[#6366F1]/15 bg-[#6366F1]/5 px-3 py-1.5 font-mono text-[11px] text-[#94A3B8]"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
