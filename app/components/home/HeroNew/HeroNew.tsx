export default function HeroNew() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white">
      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8">

        <div>
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
            Educação - Tecnologia - Inovação
          </span>

          <h1 className="mt-7 max-w-4xl text-[3.2rem] font-semibold leading-tight tracking-tight text-slate-950 sm:text-6xl lg:text-[4.5rem]">
            Transformamos desafios educacionais em{" "}
            <span className="text-blue-700">
              experiências inovadoras.
            </span>
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
              <p className="text-2xl font-semibold text-slate-950">
                STEAM
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Aprendizagem criativa
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-slate-950">
                Maker
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Aprender fazendo
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-slate-950">
                IA
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Tecnologia com propósito
              </p>
            </div>

          </div>
        </div>

        <div className="relative">

          <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-blue-100 blur-2xl" />

          <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-sky-100 blur-3xl" />

          <div className="relative rounded-[2rem] border border-slate-200 bg-slate-950 p-5 shadow-2xl">

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-7">

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-300">
                InovMakers
              </p>

              <p className="mt-2 text-2xl font-semibold text-white">
                Educação que conecta.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-3">

                <div className="rounded-2xl bg-white p-5">
                  <p className="text-3xl font-semibold text-slate-950">
                    01
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-700">
                    Pesquisa
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Conhecimento para orientar a prática.
                  </p>
                </div>

                <div className="rounded-2xl bg-blue-600 p-5">
                  <p className="text-3xl font-semibold text-white">
                    02
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">
                    Inovação
                  </p>
                  <p className="mt-1 text-xs leading-5 text-blue-100">
                    Tecnologia com propósito educacional.
                  </p>
                </div>

                <div className="col-span-2 rounded-2xl border border-white/10 bg-white/10 p-5">
                  <p className="font-semibold text-white">
                    Pesquisa + Tecnologia + Pessoas
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Soluções pensadas para transformar contextos reais.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}