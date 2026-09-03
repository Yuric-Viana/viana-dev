import Image from "next/image";

interface ProjectTechnologyProps {
  name: string;
  description: string;
  icon: string;
  color?: "cyan" | "blue" | "green" | "indigo" | "white";
}

const ProjectTechnology = ({
  name,
  description,
  icon,
  color = "blue",
}: ProjectTechnologyProps) => {
  const colors = {
    white: {
      container: "border-white/15 bg-white/5",
      icon: "border-white/15 bg-white/5",
      name: "text-white",
    },
    blue: {
      container: "border-[#3B82F6]/15 bg-[#0A0F28]/60",
      icon: "border-[#3B82F6]/20 bg-[#3B82F6]/10",
      name: "text-[#51A2FF]",
    },
    indigo: {
      container: "border-[#6366F1]/15 bg-[#0A0F28]/60",
      icon: "border-[#6366F1]/20 bg-[#6366F1]/10",
      name: "text-[#6366F1]",
    },
    cyan: {
      container: "border-[#22D3EE]/15 bg-[#0A0F28]/60",
      icon: "border-[#22D3EE]/20 bg-[#22D3EE]/10",
      name: "text-[#22D3EE]",
    },

    green: {
      container: "border-[#84CC16]/15 bg-[#0A0F28]/60",
      icon: "border-[#84CC16]/20 bg-[#84CC16]/10",
      name: "text-[#84CC16]",
    },
  };

  const currentColor = colors[color];

  return (
    <div className={`rounded-2xl border p-8 ${currentColor.container}`}>
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-xl border ${currentColor.icon}`}
      >
        <Image src={`/icons/${icon}.svg`} alt={name} width={40} height={40} />
      </div>

      <h3 className={`mt-6 text-xl font-bold ${currentColor.name}`}>{name}</h3>

      <p className="mt-2 text-lg text-slate-400">{description}</p>
    </div>
  );
};

export default ProjectTechnology;
