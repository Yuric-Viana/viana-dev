import Image from "next/image";
import Technologies from "../components/Technologies";
import TextPurpleRadial from "../components/TextPurpleRadial";
import ProjectCard from "../components/ProjectCard";
import Link from "next/link";
import { projects } from "./_constants/project";
import { fetchRepositoryData } from "@/app/_data/fetchRepositoryData";
import ViewProjects from "@/components/ViewProjects";

export default function Home() {
  return (  
    <div className="min-h-screen pb-5">
      <div className="relative h-150 w-full overflow-visible md:h-[700px] lg:h-[800px]">
        <Image
          src="/bg-home-desktop.svg"
          alt="Tela de fundo da página inicial"
          fill
          className="object-cover object-[70%_30%] -z-[99999999] md:object-[50%_50%] lg:object-center max-[475px]:translate-y-12"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#050714] via-[#050714]/20 to-[#050714]" />
        <div className="absolute top-10 z-10 w-full px-5 md:top-16 md:px-10 md:max-w-3xl lg:px-20 lg:max-w-4xl">
          <p className="text-[#90A1B9] md:text-lg">Olá, eu sou o</p>
          <h1 className="mt-2 mb-3 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
            Yuri{" "}
            <TextPurpleRadial text="Viana" />
          </h1>
          <h2 className="text-lg text-white md:text-2xl lg:text-3xl">Desenvolvedor Full Stack</h2>
          <p className="mt-3 text-white md:mt-5 md:text-xl lg:text-2xl">
            Transformo ideias em <br />
            <TextPurpleRadial className="font-semibold" text="experiências digitais" />
          </p>
          <div className="mt-7.5 flex items-center gap-2 md:mt-10 md:gap-4">
            <Link href="/projects" className="text-white rounded-lg bg-linear-to-l border-2 border-[#7C3AED] from-[#7C3AED] to-[#4F46E5] px-5 py-3 md:px-7 md:py-4 md:text-lg transition hover:opacity-90">
              Ver meus projetos
            </Link>
            <Link href="/about" className="text-white rounded-lg border-2 border-[#8B5CF6]-[#8B5CF6] bg-transparent px-5 py-3 md:px-7 md:py-4 md:text-lg transition hover:bg-white/5">
              Sobre mim
            </Link>
          </div>
          <div className="mt-40 md:mt-24 lg:mt-28">
            <Technologies />
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-between px-5 md:px-10 lg:px-16">
        <h3 className="text-[#E2E8F0] font-bold text-3xl max-[670px]:mt-30 md:text-4xl lg:text-5xl">
          Alguns dos meus {" "} <br className="md:hidden" />
          <TextPurpleRadial text="trabalhos" />
        </h3>

        <div className="hidden lg:block">
          <ViewProjects />
        </div>
      </div>

      <div className="px-5 mt-10 space-y-6 md:px-16 md:mt-10 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 ">
        {
          projects.map(async (project) => {
            const data = await fetchRepositoryData(project.title);

            return (
            <Link href={`/projects/${project.title}`} key={project.title} className="inline-flex md:w-full">
              <ProjectCard description={data.repository.description} image={project.image} skills={project.skills} title={data.nameFormatted} />
            </Link>
          )
          })
        }
      </div>

      <div className="px-5 mt-4 md:px-16 md:mt-8 lg:hidden">
        <ViewProjects />
      </div>
    </div>
  );
}