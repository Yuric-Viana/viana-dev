import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { StarsBackground } from "@/components/StarsBackground";
import SidebarDesktop from "@/components/SidebarDesktop";

const oxanium = Oxanium({
  variable: "--font-oxanium",
});

export const metadata: Metadata = {
  title: "Viana Dev",
  description: "Portfólio do Yuri Viana, desenvolvedor Full Stack e entusiasta de tecnologia.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${oxanium.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col [&::-webkit-scrollbar]:hidden bg-[#050714] overflow-x-hidden">
        <StarsBackground />
        <div className="lg:grid lg:grid-cols-[8%_auto]">
          <div className="border-r border-[#8B5CF6]/10 hidden lg:block">
            <SidebarDesktop />
          </div>
          <div>
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}