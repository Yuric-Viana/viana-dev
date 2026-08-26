import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
    {
        id: 1,
        href: "https://github.com/Yuric-Viana",
        icon: "/icons/GitHub.svg",
        alt: "Ícone do GitHub"
    },
    {
        id: 2,
        href: "https://www.linkedin.com/in/dev-yuri-viana/",
        icon: "/icons/LinkedIn.svg",
        alt: "Ícone do LinkedIn"
    },
    {
        id: 3,
        href: "ycviana@sga.pucminas.br",
        icon: "/icons/Email.svg",
        alt: "Ícone de e-mail"
    },
    {
        id: 4,
        href: "",
        icon: "/icons/Menu.svg",
        alt: "Ícone de menu"
    }
]

const Header = () => {
    return ( 
        <header className="bg-[#050714] py-3.5 px-5 flex items-center justify-between border-b border-[#8B5CF6]/12">
            <Logo />
            <div className="flex items-center gap-3">
                {
                    socialLinks.map((social) => (
                        <Link className="bg-[#8B5CF6]/10 p-2 rounded-sm border border-[#8B5CF6]/15" key={social.id} href={social.href} target="_blank">
                            <Image src={social.icon} height={16} width={16} alt={social.alt} />
                        </Link>
                    ))
                }
            </div>
        </header>
     );
}
 
export default Header;