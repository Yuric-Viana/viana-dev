import Image from "next/image";
import { DownloadCurriculum } from "../../components/DownloadCurriculum";
import TextPurpleRadial from "../../components/TextPurpleRadial";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { statsData } from "../_constants/stats-data";
import FormationCard from "@/components/FormationCard";

export default function AboutPage() {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">Sobre mim</h1>
      <strong className="text-2xl">
        Mais que código, <TextPurpleRadial text="propósito." />
      </strong>

      <div className="lg:grid lg:grid-cols-[1fr_1fr] lg:gap-10 lg:items-start pt-8">
        <div>
          <div className="bg-[#0A0F28]/60 rounded-lg border border-[#8B5CF6]/12 p-6 mt-16 lg:mt-0">
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
          <div className="mt-6 hidden lg:block">
            <FormationCard />
          </div>
          <div className="mt-6">
            <DownloadCurriculum />
          </div>
        </div>

        <div>
          <div className="relative w-full h-60 mt-12 lg:mt-0 rounded-lg border border-[#8B5CF6]/30 overflow-hidden">
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
                <div key={data.number} className="rounded-lg border border-[#8B5CF6]/30 bg-[#0A0F28]/60 text-center p-4">
                  <TextPurpleRadial className="font-bold text-3xl" text={data.number} />
                  <p className="text-[#62748E]">{data.description}</p>
                </div>
              ))
            }
          </div>
          <div className="mt-6 lg:hidden">
            <FormationCard />
          </div>
        </div>
      </div>
    </div>
  );
}
