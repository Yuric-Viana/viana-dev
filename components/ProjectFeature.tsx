import { LucideIcon } from "lucide-react";

interface ProjectFeatureProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ProjectFeature = ({
  title,
  description,
  icon: Icon,
}: ProjectFeatureProps) => {
  return (
    <div className="flex gap-4 rounded-lg border border-[#8B5CF6]/12 bg-[#0A0F28]/60 p-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#3B82F6]/20 bg-[#3B82F6]/10">
        <Icon className="size-5 text-[#51A2FF]" />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-5 text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectFeature;