import { Button } from "@/components/ui/button";
import Image from "next/image";
import Technologies from "./_components/Technologies";
import TextPurpleRadial from "./_components/TextPurpleRadial";
import ProjectCard from "./_components/ProjectCard";
import Link from "next/link";

const projects = [
  {
    title: "Help Desk",
    description: "Plataforma de gestão de chamados com controle de acesso, cálculo de custos e relatórios.",
    skills: ["Next.js", "TypeScript", "Prisma", "React", "Node.js"],
    href: "",
    image: "/projects/HelpDesk.png"
  },
  {
    title: "Moovie App",
    description: "Aplicação para busca, favoritos e avaliações de filmes com interface moderna.",
    skills: ["React", "Node.js", "SQLite", "TypeScript"],
    href: "",
    image: "/projects/MoovieApp.png"
  }
]

export default function Home() {
  return (  
    <div className="bg-[#050714] min-h-screen ">
      <div className="relative h-150 w-full overflow-visible">
        <Image
          src="/bg-mobilee-home.png"
          alt="Tela de fundo da página inicial"
          fill
          className="object-cover object-[20%_80%]"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#050714] via-[#050714]/20 to-[#050714]" />
        <div className="absolute top-10 z-10 w-full px-5">
          <p className="text-[#90A1B9]">Olá, eu sou o</p>
          <h1 className="mt-2 mb-3 text-4xl font-bold text-white">
            Yuri{" "}
            <TextPurpleRadial text="Viana" />
          </h1>
          <h2 className="text-lg text-white">Desenvolvedor Full Stack</h2>
          <p className="mt-3 text-white ">
            Transformo ideias em <br />
            <TextPurpleRadial className="font-semibold" text="experiências digitais" />
          </p>
          <div className="mt-7.5 flex items-center gap-2">
            <Button className="bg-linear-to-l border-2 border-[#7C3AED] from-[#7C3AED] to-[#4F46E5] px-5 py-[20px]">
              Ver meus projetos
            </Button>
            <Button className="border-2 border-[#8B5CF6] bg-transparent px-5 py-[20px]">
              Sobre mim
            </Button>
          </div>
          <div className="mt-40">
            <Technologies />
          </div>
        </div>
      </div>

      <h3 className="text-[#E2E8F0] px-5 font-bold text-3xl mt-10">
        Alguns dos meus {" "} <br />
        <TextPurpleRadial text="trabalhos" />
      </h3>

      <div className="px-5 mt-10 space-y-6">
        {
          projects.map((project) => (
            <Link href={project.href} key={project.title} className="inline-flex">
              <ProjectCard description={project.description} href={project.href} image={project.image} skills={project.skills} title={project.title} />
            </Link>
          ))
        }
      </div>
    </div>
  );
}
