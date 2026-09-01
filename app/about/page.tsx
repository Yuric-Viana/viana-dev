import Image from "next/image";
import { DownloadCurriculum } from "../_components/DownloadCurriculum";
import TextPurpleRadial from "../_components/TextPurpleRadial";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { statsData } from "../_constants/stats-data";

export default function AboutPage() {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">Sobre mim</h1>
      <strong className="text-2xl">
        Mais que código, <TextPurpleRadial text="propósito." />
      </strong>

      <div className="bg-[#0A0F28]/60 rounded-lg border border-[#8B5CF6]/12 p-6 mt-16">
        <strong className="uppercase text-[#DAB2FF]">Pt-br</strong>
        <p className="mt-4">
          Estudante de Engenharia de Software na PUC Minas, com foco no
          desenvolvimento de soluções completas e escaláveis. Apaixonado por
          criar experiências que conectam pessoas e resolvem problemas reais.
        </p>
      </div>

      <div className="bg-[#0A0F28]/60 rounded-lg border border-[#8B5CF6]/12 p-6 mt-6">
        <strong className="uppercase text-[#8EC5FF]">En</strong>
        <p className="mt-4">
          Software Engineering student at PUC Minas, focused on building
          complete and scalable solutions. Passionate about creating experiences
          that connect people and solve real problems.
        </p>
      </div>

      <div className="mt-6">
        <DownloadCurriculum />
      </div>

      <div className="relative w-full h-60 mt-12 rounded-lg border border-[#8B5CF6]/30 overflow-hidden">
        <Image
          src="/DeveloperSetup.svg"
          fill
          alt="Developer setup"
          className="object-cover"
        />

        <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-[#8B5CF6]/30 bg-[#0A0F28]/60 px-4 py-3 text-center">
          <p className="text-[#90A1B9]">
            {" < Disponível para oportunidades /> "}
          </p>
          <span className="font-mono text-xl font-semibold text-[#34D399]">
            ● online
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-6">
        {
          statsData.map((data) => (
            <div key={data.number} className="rounded-lg border border-[#8B5CF6]/30 text-center p-4">
              <TextPurpleRadial className="font-bold text-3xl" text={data.number} />
              <p className="text-[#62748E]">{data.description}</p>
            </div>
          ))
        }
      </div>

      <div className="rounded-lg border border-[#8B5CF6]/30 bg-[#0A0F28]/60 mt-6 p-5">
        <TextPurpleRadial className="uppercase tracking-wider" text="Formação" />

        <div className="flex items-start -ml-2">
          <Avatar>
            <AvatarImage src="/icons/point.svg" alt="Ícone de ponto" width={16} height={16} />
          </Avatar>

          <div className="mt-1">
            <strong>Engenharia de Software</strong>
            <p className="text-[#62748E] text-sm">PUC Minas · 2021 – 2025</p>
            <p className="text-[#62748E] text-sm">Bacharelado em Engenharia de Software</p>
          </div>
        </div>
      </div>
    </div>
  );
}
