import { menuItems } from "@/app/_constants/menu-items";
import Link from "next/link";
import Logo from "./Logo";

const SidebarDesktop = () => {
  return (
    <aside className="lg:flex lg:flex-col">
      <Link href="/" className="flex items-center justify-center py-5">
        <Logo />
      </Link>
      {menuItems.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.label}
            href={item.href}
            className="flex flex-col items-center gap-4 rounded-xl px-5 py-4 text-[#90A1B9] transition hover:border hover:border-[#8B5CF6]/50 hover:bg-[#8B5CF6]/10"
          >
            <Icon size={18} />

            <span className="font-medium">{item.label}</span>
          </Link>
        );
      })}
    </aside>
  );
};

export default SidebarDesktop;
