import { projects } from "../_constants/project";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "../../components/ProjectCard";
import Link from "next/link";
import { fetchRepositoryData } from "@/app/_data/fetchRepositoryData";

export default function ProjectPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden p-5">
      <h1 className="text-3xl font-bold">Projetos</h1>

      <p className="text-[#90A1B9]">
        Evolução cronológica do meu portfólio
      </p>

      <div className="relative mt-8 md:ml-10">
        <div className="absolute left-0 top-4 bottom-4 hidden w-px bg-[#8B5CF6]/30 md:block" />

        <div className="space-y-12">
          {projects.map(async (item) => {
            const data = await fetchRepositoryData(item.title);

            return (
              <div
                key={data.repository.id}
                className="relative md:pl-7"
              >
                <span
                  className="
                    absolute
                    left-[-4px]
                    top-3
                    hidden
                    h-2
                    w-2
                    rounded-full
                    bg-[#8B5CF6]
                    shadow-[0_0_10px_#8B5CF6]
                    md:block
                  "
                />

                <div className="mb-3 flex items-center gap-2">
                  <Badge
                    className="
                      h-auto                     
                      border
                      border-[#8B5CF6]/30
                      bg-[#8B5CF6]/15
                      px-3
                      py-1
                      lg:px-6
                      lg:py-2
                      text-[#C4B5FD]
                      lg:text-lg
                    "
                  >
                    {data.date}
                  </Badge>

                  {item.isLatest && (
                    <span className="font-mono text-xs font-semibold text-[#34D399] md:text-sm">
                      ● mais recente
                    </span>
                  )}
                </div>

                <Link href={`/projects/${data.repository.name}`}>
                  <ProjectCard
                    description={data.repository.description}
                    image={item.image}
                    skills={item.skills}
                    title={data.nameFormatted}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}