import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/Header";

export const metadata: Metadata = {
  title: "InovMakers | Educação, Tecnologia e Inovação",
  description:
    "Consultoria em educação, tecnologia e inovação, com atuação em educação digital, cultura maker, pensamento computacional, inteligência artificial, inclusão e projetos STEAM.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-slate-900">
        <Header />

        {children}

        <footer
          id="contato"
          className="border-t border-slate-800 bg-slate-950 py-16 text-white"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
            <div>
              <img
                src="/logo.png"
                alt="InovMakers"
                className="h-16 w-auto brightness-0 invert"
              />

              <p className="mt-6 max-w-sm leading-7 text-slate-300">
                Educação, tecnologia e inovação para transformar práticas,
                ampliar possibilidades e construir novas experiências de
                aprendizagem.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Áreas de atuação
              </h3>

              <ul className="mt-5 space-y-3 text-slate-300">
                <li>Educação Digital</li>
                <li>Pensamento Computacional</li>
                <li>Cultura Maker e STEAM</li>
                <li>Inteligência Artificial</li>
                <li>Educação Inclusiva e PEI</li>
                <li>Relações Étnico-Raciais</li>
                <li>Formação e Consultoria Educacional</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Fale conosco
              </h3>

              <div className="mt-5 space-y-3 text-slate-300">
                <p>
                  <strong className="text-white">E-mail:</strong>{" "}
                  contato.inovmakers@gmail.com
                </p>

                <p>
                  <strong className="text-white">Telefone:</strong>{" "}
                  (81) 98653-5652
                </p>

                <p>
                  <strong className="text-white">Telefone:</strong>{" "}
                  (81) 98738-8104
                </p>

                <p>
                  <strong className="text-white">Localização:</strong>{" "}
                  Paulista – Pernambuco
                </p>
              </div>

              <a
                href="https://www.instagram.com/inovmakers/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full border border-slate-700 px-5 py-3 font-semibold text-white transition hover:border-blue-500 hover:bg-blue-600"
              >
                Instagram @inovmakers
              </a>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-7xl border-t border-slate-800 px-6 pt-8 text-center text-sm text-slate-500">
            © 2026 InovMakers — Educação, Tecnologia e Inovação.
            Todos os direitos reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}