"use client";

import {
  Atom,
  Container,
  Database,
  GitBranch,
  Layers,
  Text,
  Triangle,
} from "lucide-react";

const technologies = [
  {
    name: "TS",
    icon: <span className="font-bold text-blue-500">TS</span>,
  },
  {
    name: "Docker",
    icon: <Container className="size-4 text-cyan-400" />,
  },
  {
    name: "Git",
    icon: <GitBranch className="size-4 text-orange-500" />,
  },
  {
    name: "Figma",
    icon: <Text className="size-4 text-orange-500" />,
  },
  {
    name: "Tailwind",
    icon: <span className="text-cyan-400">≋</span>,
  },
  {
    name: "Next.js",
    icon: <Triangle className="size-4 fill-white text-white" />,
  },
  {
    name: "React",
    icon: <Atom className="size-4 text-purple-400" />,
  },
  {
    name: "Prisma",
    icon: <Layers className="size-4 text-slate-400" />,
  },
  {
    name: "PostgreSQL",
    icon: <Database className="size-4 text-slate-300" />,
  },
  {
    name: "Tailwind",
    icon: <span className="text-cyan-400">≋</span>,
  },
];

export default function Technologies() {
  return (
    <section className="flex w-full justify-center">
      <div className="flex max-w-3xl flex-wrap justify-start gap-3">
        {technologies.map((technology, index) => (
          <div
            key={`${technology.name}-${index}`}
            className="flex items-center gap-2 rounded-lg border border-[#171B3A] bg-[#080B24] px-3 py-2"
          >
            {technology.icon}

            <span className="font-mono text-sm text-slate-400">
              {technology.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}