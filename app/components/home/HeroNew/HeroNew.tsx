import Image from "next/image";

const whatsappUrl =
  "https://wa.me/5581986535652?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20as%20solu%C3%A7%C3%B5es%20da%20InovMakers.";

export default function HeroNew() {
  return (
    <section id="inicio" className="surface-grid relative isolate overflow-hidden bg-slate-950 text-white">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(37,99,235,.34),transparent_38%),radial-gradient(circle_at_10%_80%,rgba(14,165,233,.18),transparent_34%)]" />

      <div className="relative mx-auto grid min-h-[calc(100svh-72px)] max-w-7xl items-center gap-12 px-5 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-blue-100 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            Educação · Tecnologia · Inovação
          </div>

          <h1 className="mt-7 text-[clamp(2.65rem,7vw,5.25rem)] font-bold leading-[.96] tracking-[-.055em] text-white">
            Ideias que transformam a educação em
            <span className="block bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">experiências reais.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Projetos, formações e consultorias que conectam STEAM, cultura maker,
            pensamento computacional e inteligência artificial às necessidades de
            escolas, educadores e redes de ensino.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-13 items-center justify-center rounded-full bg-blue-600 px-7 text-sm font-bold text-white shadow-[0_18px_50px_rgba(37,99,235,.35)] transition hover:-translate-y-0.5 hover:bg-blue-500">
              Conversar sobre um projeto
            </a>
            <a href="#servicos" className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 text-sm font-bold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10">
              Explorar soluções
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
            {[['+150', 'projetos'], ['+1.000', 'professores'], ['STEAM', 'na prática'], ['IA', 'com propósito']].map(([value, label]) => (
              <div key={value} className="bg-slate-950/70 px-4 py-4 backdrop-blur">
                <p className="text-lg font-bold text-white">{value}</p>
                <p className="mt-1 text-xs text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div aria-hidden="true" className="absolute -inset-4 rotate-3 rounded-[2.5rem] border border-blue-400/20 bg-blue-500/10" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-2 shadow-2xl backdrop-blur sm:p-3">
            <Image src="/desafio-inovmakers.jpg" alt="Estudante em atividade de robótica da InovMakers" width={1080} height={1350} priority sizes="(min-width: 1024px) 44vw, 92vw" className="aspect-[4/5] w-full rounded-[1.5rem] object-cover" />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-slate-950/80 p-4 backdrop-blur-md sm:inset-x-6 sm:bottom-6">
              <p className="text-xs font-bold uppercase tracking-[.16em] text-sky-300">Aprendizagem criativa</p>
              <p className="mt-1 text-sm font-semibold text-white sm:text-base">Tecnologia aplicada a desafios reais de aprendizagem.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
