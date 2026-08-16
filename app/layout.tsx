import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/Header";
import WhatsappButton from "./components/layout/WhatsappButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://inovmakers.com.br"),
  title: "InovMakers | Educação, Tecnologia e Inovação",
  description: "Educação tecnológica, formação de professores e soluções educacionais em educação digital, cultura maker, pensamento computacional, inteligência artificial e STEAM.",
  alternates: { canonical: "/" },
  openGraph: { title: "InovMakers | Educação, Tecnologia e Inovação", description: "Projetos, formações e soluções para educação digital, cultura maker, pensamento computacional, inteligência artificial e STEAM.", url: "/", siteName: "InovMakers", locale: "pt_BR", type: "website" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><Header />{children}<WhatsappButton /></body></html>;
}
