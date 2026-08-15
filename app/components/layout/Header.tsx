"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#inicio", label: "In\u00EDcio" },
    { href: "#quem-somos", label: "Quem somos" },
    { href: "#equipe", label: "Nossa equipe" },
    { href: "#servicos", label: "Servi\u00E7os" },
    { href: "#steam", label: "Clube STEAM" },
    { href: "#premiacoes", label: "Premia\u00E7\u00F5es" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-8">

        <a href="#inicio" className="flex items-center">
          <img
            src="/logo.png"
            alt="InovMakers"
            className="h-12 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">

          <a
            href="https://wa.me/5581986535652"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md sm:inline-flex"
          >
            Fale conosco
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 lg:hidden"
          >
            <span className="text-2xl leading-none">
              {menuOpen ? "\u00D7" : "\u2630"}
            </span>
          </button>

        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col">

            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-slate-100 py-4 text-base font-medium text-slate-700 transition hover:text-blue-600"
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://wa.me/5581986535652"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 rounded-full bg-blue-600 px-5 py-3 text-center font-semibold text-white"
            >
              Fale conosco
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}