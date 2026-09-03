"use client";

import { fetchRepositoryData } from "@/app/_data/fetchRepositoryData";
import { Badge } from "./ui/badge";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { projects } from "@/app/_constants/project";

import {
  Activity,
  ChartNoAxesColumn,
  Circle,
  CircleAlert,
  CircleCheck,
  DollarSign,
  FileText,
  Heart,
  History,
  LayoutGrid,
  LockKeyhole,
  Search,
  Smartphone,
  Sparkles,
  Star,
} from "lucide-react";

import SectionHeading from "./SectionHeading";
import InfoCard from "./InfoCard";
import ProjectFeature from "./ProjectFeature";
import ProjectTechnology from "./ProjectTechnology";

interface DetailsProjectProps {
  name: string;
}

const DetailsProject = ({ name }: DetailsProjectProps) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchRepositoryData(name);
      setData(data);
    };

    fetchData();
  }, [name]);

  if (!data?.repository) return null;

  const project = projects.find((project) => project.title === name);

  if (!project) return null;

  const icons = {
    Activity,
    ChartNoAxesColumn,
    DollarSign,
    FileText,
    Heart,
    History,
    LayoutGrid,
    LockKeyhole,
    Search,
    Smartphone,
    Sparkles,
    Star,
  };

  return (
    <div>
      <div className="flex items-center gap-3">
        <Badge className={`${project.colorBadge} h-auto px-3 py-1`}>
          <Circle className={`${project.colorDot} size-8`} />

          <p className="text-base">Projeto em destaque</p>
        </Badge>

        <span className="text-[#314158]">
          {format(data.repository.created_at, "MM/yyyy")}
        </span>
      </div>

      <h1 className="mt-4 text-4xl font-bold">{data.nameFormatted}</h1>

      <p className="mt-4 text-[#90A1B9]">{data.repository.description}</p>

      <div className="mt-16">
        <SectionHeading label="Sobre o projeto" />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <InfoCard
          icon={CircleAlert}
          title="O problema"
          description={project.problem}
          color="purple"
        />

        <InfoCard
          icon={CircleCheck}
          title="A solução"
          description={project.solution}
          color="blue"
        />
      </div>

      <div className="mt-16">
        <SectionHeading label="Principais funcionalidades" />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {project.features.map((feature) => {
          const Icon = icons[feature.icon as keyof typeof icons];

          return (
            <ProjectFeature
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={Icon}
            />
          );
        })}
      </div>

      <div className="mt-16">
        <SectionHeading label="Tecnologias utilizadas" />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
  {project.technologies.map((technology) => (
    <ProjectTechnology
      key={technology.name}
      name={technology.name}
      description={technology.description}
      icon={technology.icon}
      color={technology.color}
    />
  ))}
</div>
    </div>
  );
};

export default DetailsProject;
