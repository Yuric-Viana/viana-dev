import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import { MobileMenu } from "./MobileMenu";
import { Button } from "@/components/ui/button";

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
]

const Header = () => {
    return ( 
        <header className="bg-[#050714] py-3.5 px-5 flex items-center justify-between border-b border-[#8B5CF6]/12">
            <Link href="/" className="lg:hidden shrink-0">
                <Logo />
            </Link>
            <div className="flex items-center gap-3 ml-auto">
                {
                    socialLinks.map((social) => (
                        <Link className="bg-[#8B5CF6]/10 p-2 lg:p-3 rounded-sm border border-[#8B5CF6]/15" key={social.id} href={social.href} target="_blank">
                            <Image src={social.icon} height={16} width={16} alt={social.alt} />
                        </Link>
                    ))
                }
                <MobileMenu>
                    <Button className="bg-[#8B5CF6]/10 py-3.5 px-2 rounded-sm border-2 border-[#8B5CF6]/15 lg:hidden">
                        <Image src="/icons/Menu.svg" height={16} width={16} alt="Ícone de menu" />
                    </Button>
                </MobileMenu>
            </div>
        </header>
     );
}
 
export default Header;