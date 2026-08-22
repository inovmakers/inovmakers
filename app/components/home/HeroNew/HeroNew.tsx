export default function HeroNew() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">

        <div>
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
            EducaÃ§Ã£o - Tecnologia - InovaÃ§Ã£o
          </span>

          <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-6xl lg:text-[3.75rem]">
            Transformamos desafios educacionais em{" "}
            <span className="text-blue-700">
              experiÃªncias inovadoras.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-xl">
            Desenvolvemos projetos, formaÃ§Ãµes e soluÃ§Ãµes que conectam tecnologia,
            cultura maker, pensamento computacional, STEAM e inteligÃªncia artificial
            para transformar prÃ¡ticas educacionais.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#quem-somos"
              className="rounded-full bg-blue-700 px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg transition hover:bg-blue-800"
            >
              ConheÃ§a a InovMakers
            </a>

            <a
              href="#servicos"
              className="rounded-full border border-slate-200 px-7 py-3.5 text-center text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              Nossas soluÃ§Ãµes
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
                Tecnologia com propÃ³sito
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
                EducaÃ§Ã£o que conecta.
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
                    Conhecimento para orientar a prÃ¡tica.
                  </p>
                </div>

                <div className="rounded-2xl bg-blue-600 p-5">
                  <p className="text-3xl font-semibold text-white">
                    02
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">
                    InovaÃ§Ã£o
                  </p>
                  <p className="mt-1 text-xs leading-5 text-blue-100">
                    Tecnologia com propÃ³sito educacional.
                  </p>
                </div>

                <div className="col-span-2 rounded-2xl border border-white/10 bg-white/10 p-5">
                  <p className="font-semibold text-white">
                    Pesquisa + Tecnologia + Pessoas
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    SoluÃ§Ãµes pensadas para transformar contextos reais.
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


