const foundations = [
  {
    number: "01",
    title: "Formação com aplicação",
    description:
      "Conhecimento transformado em experiências que professores podem levar para a prática educacional.",
  },
  {
    number: "02",
    title: "Soluções contextualizadas",
    description:
      "Projetos e formações pensados a partir dos desafios, objetivos e possibilidades de cada realidade.",
  },
  {
    number: "03",
    title: "Equipe multidisciplinar",
    description:
      "Educação, tecnologia, inclusão, gestão e inovação reunidas em uma mesma visão de transformação.",
  },
];

const audiences = [
  {
    title: "Escolas",
    description: "Projetos, oficinas e experiências para estudantes e equipes pedagógicas.",
  },
  {
    title: "Redes de ensino",
    description: "Formações continuadas e soluções alinhadas às prioridades de cada rede.",
  },
  {
    title: "Educadores",
    description: "Percursos formativos para ampliar repertório, autoria e prática pedagógica.",
  },
];

export default function Credibility() {
  return (
    <section id="impacto" className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-32">
      <div aria-hidden="true" className="absolute -left-48 top-24 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.88fr_1.12fr] lg:gap-20">
          <div>
            <p className="eyebrow">Trajetória e impacto</p>
            <h2 className="section-title mt-5">Credibilidade construída na prática educacional.</h2>
            <p className="section-copy mt-7">
              Nossa experiência nasce da formação de professores, dos projetos já
              desenvolvidos e de uma equipe que aproxima pesquisa, tecnologia e
              realidade escolar.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-blue-700 p-5 text-white shadow-lg shadow-blue-900/10 sm:p-6">
                <p className="text-4xl font-extrabold tracking-[-.04em]">+1.000</p>
                <p className="mt-2 text-sm font-medium text-blue-100">professores impactados</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <p className="text-4xl font-extrabold tracking-[-.04em] text-slate-950">+150</p>
                <p className="mt-2 text-sm font-medium text-slate-600">projetos desenvolvidos</p>
              </div>
            </div>

            <a href="#premiacoes" className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-blue-700 transition hover:gap-3">
              Conheça nossos reconhecimentos
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="space-y-4">
            {foundations.map((foundation) => (
              <article key={foundation.number} className="group grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg sm:grid-cols-[auto_1fr] sm:items-start sm:p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xs font-extrabold text-blue-700 ring-1 ring-blue-100 transition group-hover:bg-blue-700 group-hover:text-white">
                  {foundation.number}
                </div>
                <div>
                  <h3 className="text-lg font-extrabold tracking-tight text-slate-950">{foundation.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{foundation.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-10">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Para quem criamos</p>
              <h3 className="mt-3 max-w-2xl text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">Soluções que começam pela escuta de cada contexto.</h3>
            </div>
            <a href="#contato" className="inline-flex min-h-11 items-center justify-center self-start rounded-full bg-slate-950 px-6 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 md:self-auto">Leve a InovMakers para sua escola</a>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {audiences.map((audience) => (
              <article key={audience.title} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <h4 className="text-lg font-extrabold text-slate-950">{audience.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">{audience.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
