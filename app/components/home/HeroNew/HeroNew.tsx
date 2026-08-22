import Image from "next/image";

export default function HeroNew() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
            Educação · Tecnologia · Inovação
          </span>

          <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-6xl lg:text-[3.75rem]">
            Transformamos desafios educacionais em{" "}
            <span className="text-blue-700">experiências inovadoras.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-xl">
            Desenvolvemos projetos, formações e soluções que conectam tecnologia,
            cultura maker, pensamento computacional, STEAM e inteligência artificial
            para transformar práticas educacionais.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#quem-somos"
              className="rounded-full bg-blue-700 px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg transition hover:bg-blue-800"
            >
              Conheça a InovMakers
            </a>
            <a
              href="#servicos"
              className="rounded-full border border-slate-200 px-7 py-3.5 text-center text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              Nossas soluções
            </a>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-slate-200 pt-7">
            <div>
              <p className="text-2xl font-semibold text-slate-950">STEAM</p>
              <p className="mt-1 text-xs text-slate-500">Aprendizagem criativa</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-slate-950">Maker</p>
              <p className="mt-1 text-xs text-slate-500">Aprender fazendo</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-slate-950">IA</p>
              <p className="mt-1 text-xs text-slate-500">Tecnologia com propósito</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-blue-100 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-sky-100 blur-3xl"
          />

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-2 shadow-2xl sm:p-3">
            <Image
              src="/desafio-inovmakers.jpg"
              alt="Estudante em atividade de robótica da InovMakers"
              width={1080}
              height={1350}
              priority
              sizes="(min-width: 1024px) 46vw, 90vw"
              className="h-auto w-full rounded-[1.5rem] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
