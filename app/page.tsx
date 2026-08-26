import { Button } from "@/components/ui/button";
import Image from "next/image";
import Technologies from "./_components/Technologies";
import TextPurpleRadial from "./_components/TextPurpleRadial";
import ProjectCard from "./_components/ProjectCard";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { projects } from "./_constants/project";

export default function Home() {
  return (  
    <div className="min-h-screen pb-5">
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
            <Link href="/projects" className="text-white rounded-lg bg-linear-to-l border-2 border-[#7C3AED] from-[#7C3AED] to-[#4F46E5] px-5 py-3">
              Ver meus projetos
            </Link>
            <Link href="/about" className="text-white rounded-lg border-2 border-[#8B5CF6]-[#8B5CF6] bg-transparent px-5 py-3">
              Sobre mim
            </Link>
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

      <div className="px-5 mt-4">
        <Link href="/projects" className="w-full text-white rounded-sm bg-[#8B5CF6] inline-flex py-2 justify-center items-center gap-2">
          Ver todos os meus projetos
          <MoveUpRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}
