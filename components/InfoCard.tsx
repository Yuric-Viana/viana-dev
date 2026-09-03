import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: "purple" | "blue";
}

export default function InfoCard({
  icon: Icon,
  title,
  description,
  color = "purple",
}: InfoCardProps) {
  const colors = {
    purple: {
      container: "border-[#8B5CF6]/20",
      iconBackground: "bg-[#8B5CF6]/10",
      iconBorder: "border-[#8B5CF6]/30",
      icon: "text-[#A855F7]",
    },
    blue: {
      container: "border-[#3B82F6]/20",
      iconBackground: "bg-[#3B82F6]/10",
      iconBorder: "border-[#3B82F6]/30",
      icon: "text-[#3B82F6]",
    },
  };

  const currentColor = colors[color];

  return (
    <div
      className={`rounded-2xl border ${currentColor.container} bg-[#080B20]/80 p-7`}
    >
      <div
        className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl border ${currentColor.iconBorder} ${currentColor.iconBackground}`}
      >
        <Icon
          size={20}
          strokeWidth={2}
          className={currentColor.icon}
        />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="text-base leading-6 text-slate-400">
        {description}
      </p>
    </div>
  );
}