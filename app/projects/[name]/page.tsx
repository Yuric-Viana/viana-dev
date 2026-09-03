"use client";

import DetailsProject from "@/components/DetailsProject";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import * as React from "react";

interface ProjectDetailsPageProps {
  params: Promise<{ name: string }>;
}

export default function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const route = useRouter();
  const { name } = React.use(params);

  return (
    <div className="p-5">
      <Button
        variant="ghost"
        className="text-[#62748E] cursor-pointer p-0"
        onClick={() => route.back()}
      >
        <ChevronLeft />
        Voltar para projetos <span className="text-[#45556C]">/ {name}</span>
      </Button>

      <div className="mt-5">
        <DetailsProject name={name} />
      </div>
    </div>
  );
}
