import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

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
      <body className="min-h-full flex flex-col [&::-webkit-scrollbar]:hidden bg-[#050714]">
        <Header />
        {children}
      </body>
    </html>
  );
}