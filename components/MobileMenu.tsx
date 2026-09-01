"use client";

import Link from "next/link";
import {
  Mail,
  X,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";
import { menuItems } from "../app/_constants/menu-items";
import { ReactElement } from "react";

export function MobileMenu({ children }: { children: ReactElement }) {
  return (
    <Sheet>
      <SheetTrigger nativeButton render={children} />

      <SheetContent
        side="right"
        className="min-w-screen bg-[#050714] border-[#8B5CF6]/15 p-0"
      >
        <div className="flex min-h-screen flex-col">
          <header className="flex items-center justify-between px-5 py-4 border-b border-[#8B5CF6]/12">
            <span className="font-bold text-xl text-[#A78BFA]">YV</span>

            <SheetClose
              nativeButton
              render={
                <button className="bg-[#8B5CF6]/10 p-2 rounded-sm border border-[#8B5CF6]/15">
                  <X className="text-[#90A1B9]" size={18} />
                </button>
              }
            />
          </header>

          <main className="flex-1 px-6 pt-24">
            <nav className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;

                return (
                  <SheetClose
                    key={item.label}
                    nativeButton={false}
                    render={
                      <Link
                        href={item.href}
                        className="flex items-center gap-4 rounded-xl bg-[#0A0D1E] px-5 py-4 text-[#90A1B9] transition hover:border hover:border-[#8B5CF6]/50 hover:bg-[#8B5CF6]/10"
                      >
                        <Icon size={18} />

                        <span className="font-medium">{item.label}</span>
                      </Link>
                    }
                  />
                );
              })}
            </nav>
          </main>

          <footer className="border-t border-[#8B5CF6]/12 px-6 py-6">
            <div className="grid grid-cols-3 gap-2">
              <Link
                href="https://github.com/Yuric-Viana"
                target="_blank"
                className="flex items-center justify-center gap-2 rounded-xl border border-[#8B5CF6]/20 bg-[#8B5CF6]/5 px-3 py-4 text-sm text-[#90A1B9]"
              >
                <Image
                  src="/icons/GitHub.svg"
                  alt="Ícone do GitHub"
                  width={16}
                  height={16}
                />
                GitHub
              </Link>

              <Link
                href="https://www.linkedin.com/in/dev-yuri-viana/"
                target="_blank"
                className="flex items-center justify-center gap-2 rounded-xl border border-[#8B5CF6]/20 bg-[#8B5CF6]/5 px-3 py-4 text-sm text-[#90A1B9]"
              >
                <Image
                  src="/icons/LinkedIn.svg"
                  alt="Ícone do LinkedIn"
                  width={16}
                  height={16}
                />
                LinkedIn
              </Link>

              <a
                href="mailto:ycviana@sga.pucminas.br"
                className="flex items-center justify-center gap-2 rounded-xl border border-[#8B5CF6]/20 bg-[#8B5CF6]/5 px-3 py-4 text-sm text-[#90A1B9]"
              >
                <Mail size={16} />
                E-mail
              </a>
            </div>
          </footer>
        </div>
      </SheetContent>
    </Sheet>
  );
}
