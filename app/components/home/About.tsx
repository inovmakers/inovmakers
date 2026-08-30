const areas = [
  "Educação digital",
  "Pensamento computacional",
  "Cultura maker e STEAM",
  "Inteligência artificial na educação",
  "Formação continuada de professores",
  "Educação Inclusiva e PEI",
  "Relações étnico-raciais",
  "Consultoria educacional",
];

export default function About() {
  return (
    <section id="quem-somos" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div aria-hidden="true" className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[.92fr_1.08fr] lg:gap-20">
          <div>
            <p className="eyebrow">Quem somos</p>
            <h2 className="section-title mt-5">Conhecimento acadêmico com aplicação no mundo real.</h2>
            <p className="section-copy mt-7">
              A InovMakers transforma pesquisa, experiência educacional e tecnologia
              em soluções que fazem sentido para cada contexto de aprendizagem.
            </p>
            <div className="mt-9 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-3xl font-bold tracking-tight text-blue-700">+150</p>
                <p className="mt-1 text-sm text-slate-600">Projetos desenvolvidos</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-3xl font-bold tracking-tight text-blue-700">+1.000</p>
                <p className="mt-1 text-sm text-slate-600">Professores impactados</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-[0_24px_70px_rgba(15,23,42,.08)] sm:p-8 lg:p-10">
            <p className="text-lg font-bold text-slate-950">Soluções integradas para uma educação mais criativa, inclusiva e conectada.</p>
            <p className="mt-4 leading-7 text-slate-600">
              Fortalecemos escolas, professores e redes de ensino com experiências
              alinhadas à BNCC, à diversidade e ao direito de todos à aprendizagem.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {areas.map((area) => (
                <div key={area} className="flex items-start gap-3 rounded-xl bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200/80">
                  <span aria-hidden="true" className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">✓</span>
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
