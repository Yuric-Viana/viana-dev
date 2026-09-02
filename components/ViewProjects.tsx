import { MoveUpRight } from "lucide-react";
import Link from "next/link";

const ViewProjects = () => {
  return (
    <div>
      <Link
        href="/projects"
        className="w-full text-white rounded-sm lg:rounded-2xl px-5 bg-transparent border border-[#8B5CF6]/40 inline-flex py-2 justify-center items-center gap-2 md:py-3 md:text-lg transition hover:opacity-90"
      >
        Ver todos os meus projetos
        <MoveUpRight className="size-4" />
      </Link>
    </div>
  );
};

export default ViewProjects;
