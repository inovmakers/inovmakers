"use client";

import { useState } from "react";

const links = [
  { href: "#quem-somos", label: "Quem somos" },
  { href: "#servicos", label: "Soluções" },
  { href: "#steam", label: "Clube STEAM" },
  { href: "#equipe", label: "Equipe" },
  { href: "#premiacoes", label: "Reconhecimentos" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#inicio" onClick={closeMenu} className="shrink-0" aria-label="InovMakers — início">
          <img src="/logo.png" alt="InovMakers" className="h-10 w-auto sm:h-11" />
        </a>
        <nav aria-label="Navegação principal" className="hidden items-center gap-5 xl:flex">
          {links.map((link) => <a key={link.href} href={link.href} className="text-sm font-medium text-slate-600 transition hover:text-blue-700">{link.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contato" className="hidden min-h-10 items-center rounded-full bg-blue-700 px-4 text-sm font-semibold text-white transition hover:bg-blue-800 sm:inline-flex">Fale conosco</a>
          <button type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} aria-controls="menu-mobile" onClick={() => setMenuOpen((open) => !open)} className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 xl:hidden">
            <span aria-hidden="true" className="text-2xl leading-none">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </div>
      {menuOpen && <div id="menu-mobile" className="border-t border-slate-200 bg-white px-5 py-3 xl:hidden"><nav aria-label="Navegação móvel" className="mx-auto flex max-w-6xl flex-col">{links.map((link) => <a key={link.href} href={link.href} onClick={closeMenu} className="min-h-12 border-b border-slate-100 py-3 text-base font-medium text-slate-700">{link.label}</a>)}<a href="#contato" onClick={closeMenu} className="mt-4 rounded-full bg-blue-700 px-5 py-3 text-center font-semibold text-white">Fale conosco</a></nav></div>}
    </header>
  );
}
