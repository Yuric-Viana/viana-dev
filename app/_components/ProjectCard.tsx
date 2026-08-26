import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  skills: string[];
  href: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  skills,
  href,
}: ProjectCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#1E293B] bg-[#080C20]">
      <div className="relative h-52 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-[#90A1B9]">
          {description}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-[#1D4ED8]/50 bg-[#0B1735] px-2.5 py-1 font-mono text-sm text-[#7DB3FF]"
            >
              {skill}
            </span>
          ))}
        </div>

        <p
          
          className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#A855F7]"
        >
          Ver projeto
          <span>↗</span>
        </p>
      </div>
    </div>
  );
}