import TextPurpleRadial from "./TextPurpleRadial";
import { Avatar, AvatarImage } from "./ui/avatar";

const FormationCard = () => {
  return (
    <div className="rounded-lg border border-[#8B5CF6]/30 bg-[#0A0F28]/60 p-5">
      <TextPurpleRadial className="uppercase tracking-wider" text="Formação" />
      <div className="flex items-start -ml-2">
        <Avatar>
          <AvatarImage
            src="/icons/point.svg"
            alt="Ícone de ponto"
            width={16}
            height={16}
          />
        </Avatar>
        <div className="mt-1">
          <strong>Engenharia de Software</strong>
          <p className="text-[#62748E] text-sm">PUC Minas · 2021 – 2025</p>
          <p className="text-[#62748E] text-sm">
            Bacharelado em Engenharia de Software
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormationCard;
