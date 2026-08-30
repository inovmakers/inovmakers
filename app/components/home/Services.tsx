const pillars = [
  {
    number: "01",
    eyebrow: "Tecnologia e criação",
    title: "Aprender fazendo, investigando e criando.",
    description: "Experiências que desenvolvem autonomia, criatividade e competências digitais com propósito pedagógico.",
    items: ["Educação Digital", "Pensamento Computacional", "Cultura Maker e STEAM"],
  },
  {
    number: "02",
    eyebrow: "Formação e inclusão",
    title: "Práticas que acolhem diferentes formas de aprender.",
    description: "Formação crítica e estratégias inclusivas para os desafios contemporâneos da educação.",
    items: ["Inteligência Artificial na Educação", "Educação Inclusiva e PEI", "Relações Étnico-Raciais"],
  },
  {
    number: "03",
    eyebrow: "Estratégia e impacto",
    title: "Soluções construídas para cada realidade.",
    description: "Planejamento, implementação e acompanhamento para transformar boas ideias em resultados consistentes.",
    items: ["Formação Continuada", "Consultoria Educacional", "Projetos de Inovação"],
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-slate-950 py-20 text-white sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-sky-300">Nossas soluções</p>
            <h2 className="mt-5 text-[clamp(2.2rem,5vw,3.75rem)] font-bold leading-[1.02] tracking-[-.045em]">Da ideia à prática, com intenção e método.</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-300 lg:justify-self-end lg:text-lg">
            Organizamos nossas soluções em três frentes complementares para atender
            escolas, professores, gestores e redes de ensino com mais clareza.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.number} className="group flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-white/[.055] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[.08] sm:p-8">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-sky-300">{pillar.number}</span>
                <span aria-hidden="true" className="h-px w-16 bg-gradient-to-r from-blue-500 to-transparent" />
              </div>
              <p className="mt-8 text-xs font-bold uppercase tracking-[.15em] text-blue-300">{pillar.eyebrow}</p>
              <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-white">{pillar.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{pillar.description}</p>
              <ul className="mt-8 space-y-3 border-t border-white/10 pt-6">
                {pillar.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-200">
                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-[1.75rem] bg-blue-600 p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.16em] text-blue-100">Solução personalizada</p>
            <h3 className="mt-2 text-xl font-bold sm:text-2xl">Conte seu desafio. Nós desenhamos o caminho com você.</h3>
          </div>
          <a href="#contato" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50">Solicitar uma conversa</a>
        </div>
      </div>
    </section>
  );
}
