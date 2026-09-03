"use client";

import Image from "next/image";
import TextPurpleRadial from "../../components/TextPurpleRadial";
import { socialLinksData } from "../_constants/social-links";
import Link from "next/link";
import { MoveUpRight, Send } from "lucide-react";

import { useState, FormEvent } from "react";
import { StarsBackground } from "@/components/StarsBackground";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      setSuccess("Mensagem enviada com sucesso!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao enviar a mensagem.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="p-5">

      <div className="pointer-events-none absolute inset-0 -z-10 hidden lg:block">
        <Image
          src="/bg-contact.png"
          alt=""
          fill
          priority
          className="object-cover object-top"
        />

        <div className="absolute inset-0 bg-[#050817]/10" />
      </div>

      <h1 className="font-bold text-3xl">
        Entre em <TextPurpleRadial text="contato" />
      </h1>

      <p className="text-[#62748E] text-base">
        Vamos construir algo <TextPurpleRadial text="incrível juntos" />
      </p>

      <div className="lg:max-w-200">
        <div className="md:grid md:grid-cols-2 md:gap-4">
          <div className="mt-12">
            <span className="text-[#A855F7] uppercase tracking-wide">
              Conecte-se comigo
            </span>
            <div className="mt-4 space-y-3">
              {socialLinksData.map((item) => (
                <Link
                  href={item.href}
                  key={item.id}
                  target="_blank"
                  className="flex items-center justify-between rounded-sm border border-[#8B5CF6]/12 bg-[#0A0F28]/60 p-4 transition hover:border-[#8B5CF6]/40"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`${item.bg} ${item.border} w-max rounded-sm border p-2.5`}
                    >
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={20}
                        height={20}
                      />
                    </div>
                    <div>
                      <span className="text-[#62748E]">{item.name}</span>
                      <p>{item.label}</p>
                    </div>
                  </div>
                  <MoveUpRight className="size-4" />
                </Link>
              ))}
            </div>

            <div className="mt-5 hidden md:flex items-center gap-2 text-[11px] text-[#34D399]">
              <span className="h-4 w-4 rounded-full bg-[#34D399] shadow-[0_0_8px_#34D399]" />
              <span className="text-lg">Disponível para oportunidades</span>
            </div>
          </div>

          <div className="mt-12">
            <span className="uppercase tracking-wide text-[#A855F7]">
              Envie uma mensagem
            </span>
            <form
              onSubmit={handleSubmit}
              className="mt-4 space-y-4 rounded-lg border border-[#8B5CF6]/12 bg-[#0A0F28]/60 p-5"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-[#94A3B8]">
                  Seu nome
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Digite seu nome"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      name: event.target.value,
                    })
                  }
                  className="w-full rounded-sm border border-[#8B5CF6]/20 bg-[#050817] px-4 py-3 text-sm outline-none placeholder:text-[#475569] focus:border-[#8B5CF6]"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-[#94A3B8]">
                  Seu e-mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="seuemail@email.com"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      email: event.target.value,
                    })
                  }
                  className="w-full rounded-sm border border-[#8B5CF6]/20 bg-[#050817] px-4 py-3 text-sm outline-none placeholder:text-[#475569] focus:border-[#8B5CF6]"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-[#94A3B8]">
                  Assunto
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Sobre o que gostaria de conversar?"
                  value={formData.subject}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      subject: event.target.value,
                    })
                  }
                  className="w-full rounded-sm border border-[#8B5CF6]/20 bg-[#050817] px-4 py-3 text-sm outline-none placeholder:text-[#475569] focus:border-[#8B5CF6]"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-[#94A3B8]">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Digite sua mensagem..."
                  value={formData.message}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      message: event.target.value,
                    })
                  }
                  className="w-full resize-none rounded-sm border border-[#8B5CF6]/20 bg-[#050817] px-4 py-3 text-sm outline-none placeholder:text-[#475569] focus:border-[#8B5CF6]"
                />
              </div>
              {success && <p className="text-sm text-green-500">{success}</p>}
              {error && <p className="text-sm text-red-500">{error}</p>}
              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full items-center justify-center gap-2 rounded-sm bg-[#8B5CF6] py-3 font-medium transition hover:bg-[#7C3AED] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isLoading ? "Enviando..." : "Enviar mensagem"}
                {!isLoading && <Send className="size-4" />}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-5 md:hidden flex items-center gap-2 text-[11px] text-[#34D399]">
        <span className="h-4 w-4 rounded-full bg-[#34D399] shadow-[0_0_8px_#34D399]" />
        <span className="text-lg">Disponível para oportunidades</span>
      </div>
    </div>
  );
}
