const experiences = [
  {
    id: 1,
    role: "Vendedor",
    company: "Rei dos consórcios",
    period: "2024 - 2025",
    description:
      "Atendimento, prospecção de clientes, negociação e vendas de consórcios.",
    skills: ["Atendimento ao cliente", "Prospecção", "Negociação", "Vendas"],
  },
  {
    id: 2,
    role: "Aprendiz administrativo",
    company: "Rede cidadã",
    period: "2021 - 2022",
    description:
      "Apoio administrativo, organização de documentos e suporte aos setores da empresa.",
    skills: ["Excel", "Organização", "Rotinas administrativas", "Comunicação"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="px-5 pb-20 pt-5">
      <section>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#E2E8F0]">
          Minha jornada
        </h1>

        <p className="mt-2 text-base text-[#94A3B8]">
          Experiência que <span className="text-[#A855F7]">constrói</span>
        </p>
      </section>

      <section className="relative mt-16">
        <div className="absolute left-[19px] top-0 h-full w-px bg-[#8B5CF6]/40" />

        <div className="space-y-14">
          {experiences.map((experience) => (
            <div key={experience.id} className="relative pl-16">
              <div className="absolute left-[13px] top-7 flex size-3 items-center justify-center">
                <span className="absolute size-6 rounded-full bg-[#6366F1]/10" />

                <span className="relative size-3 rounded-full bg-[#8B5CF6] shadow-[0_0_12px_#8B5CF6]" />
              </div>

              <div className="rounded-2xl border border-[#8B5CF6]/15 bg-[#0A0F28]/60 p-6">
                <h2 className="text-lg font-bold text-[#E2E8F0]">
                  {experience.role}
                </h2>

                <p className="mt-1 text-sm font-medium text-[#A855F7]">
                  {experience.company}
                </p>

                <div className="mt-10">
                  <span className="rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-3 py-1.5 font-mono text-xs text-[#A78BFA]">
                    {experience.period}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-[#94A3B8]">
                  {experience.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded border border-[#3B82F6]/30 bg-[#3B82F6]/5 px-2 py-1 font-mono text-[11px] text-[#93C5FD]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="relative pl-16">
            <div className="absolute left-[14px] top-7 size-3 rounded-full border border-dashed border-[#A855F7]/70 bg-[#080B1C]" />

            <div className="rounded-2xl border border-dashed border-[#8B5CF6]/15 bg-[#0A0F28]/20 p-6 text-center">
              <p className="font-mono text-xs text-[#334155]">
                // próxima experiência
              </p>

              <p className="mt-1 font-mono text-xs text-[#334155]">
                aguardando...
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
