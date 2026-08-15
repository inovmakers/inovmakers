import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/layout/Header";
import WhatsappButton from "./components/layout/WhatsappButton";

export const metadata: Metadata = {
  title: "InovMakers | Educação, Tecnologia e Inovação",
  description:
    "Consultoria em educação, tecnologia e inovação, com atuação em educação digital, cultura maker, pensamento computacional, inteligência artificial, inclusão e projetos STEAM.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />

        {children}

        <WhatsappButton />
      </body>
    </html>
  );
}