import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  skills: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  skills,
}: ProjectCardProps) {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-[#1E293B]
        bg-[#080C20]
        transition-all
        duration-300
        hover:border-[#8B5CF6]/40

        md:flex
        md:min-h-[220px]
        md:h-[220px]
      "
    >
      {/* Imagem */}
      <div
        className="
          relative
          h-52
          w-full
          shrink-0
          overflow-hidden

          md:h-full
          md:w-[34%]
        "
      >
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* Overlay sutil */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#080C20]/20 md:to-[#080C20]/40" />
      </div>

      {/* Conteúdo */}
      <div
        className="
          flex
          min-w-0
          flex-1
          flex-col
          justify-center
          p-5

          md:px-7
          md:py-5
        "
      >
        <h3 className="text-xl font-bold text-white">
          {title}
        </h3>

        <p
          className="
            mt-2
            line-clamp-3
            text-sm
            leading-6
            text-[#90A1B9]

            md:max-w-3xl
          "
        >
          {description}
        </p>

        {/* Tecnologias */}
        <div className="mt-3 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="
                rounded-md
                border
                border-[#1D4ED8]/50
                bg-[#0B1735]
                px-2.5
                py-1
                font-mono
                text-xs
                text-[#7DB3FF]

                md:text-sm
              "
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Link */}
        <p
          className="
            mt-3
            inline-flex
            w-fit
            items-center
            gap-1
            text-sm
            font-semibold
            text-[#A855F7]
            transition-colors
            group-hover:text-[#C084FC]
          "
        >
          Ver projeto
          <span>↗</span>
        </p>
      </div>

      <div
        className="
          hidden
          items-center
          pr-6
          text-4xl
          text-[#A855F7]
          transition-transform
          duration-300

          md:flex
          md:group-hover:translate-x-1
        "
      >
        ›
      </div>
    </div>
  );
}