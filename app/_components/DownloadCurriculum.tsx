import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DownloadCurriculum() {
  return (
    <Button
      className="h-auto rounded-2xl bg-linear-to-r from-[#6D4AFF] to-[#5046C9] px-7 py-4"
      nativeButton={false}
      render={
        <a href="/Currículo Yuri Viana.pdf" download="Currículo Yuri Viana.pdf">
          <Download className="size-5" />
          Baixar currículo
        </a>
      }
    />
  );
}
