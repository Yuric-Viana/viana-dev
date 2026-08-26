import { StarsBackground } from "@/components/StarsBackground";
import { projects } from "../_constants/project";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "../_components/ProjectCard";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden p-5">
      {/* <StarsBackground /> */}

      <h1 className="text-3xl font-bold">Projetos</h1>

      <p className="text-[#90A1B9]">Evolução cronológica do meu portfólio</p>

      <div className="space-y-12 mt-5">
        {projects.map((item) => (
          <div key={item.title} className="space-y-4">
            <div className="flex items-center gap-4">
              <Badge className="h-auto bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#C4B5FD] py-1 px-3">
                {item.date}
              </Badge>

              {item.isLatest && (
                <span className="font-mono text-xl font-semibold text-[#34D399]">
                  ● mais recente
                </span>
              )}
            </div>
            <Link href={item.href}>
              <ProjectCard
                description={item.description}
                href={item.href}
                image={item.image}
                skills={item.skills}
                title={item.title}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
