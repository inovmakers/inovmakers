import Image from "next/image";

export default function Steam() {
  return (
    <section id="steam" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Clube STEAM
          </span>

          <h2 className="section-title mt-4">
            Aprendizagem criativa para transformar ideias em experiências.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            O Clube STEAM integra ciência, tecnologia, engenharia, artes e
            matemática em experiências práticas, criativas e interdisciplinares.
          </p>

          <p className="mt-4 leading-7 text-slate-600">
            As experiências envolvem cultura maker, pensamento computacional,
            sustentabilidade, robótica, educação digital e inteligência
            artificial, valorizando a autoria, a colaboração e a resolução de
            problemas.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="overflow-hidden">
              <Image
                src="/steam-1.png"
                alt="Experiência de cultura maker no Clube STEAM"
                width={500}
                height={600}
                className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-8">
              <span className="text-sm font-semibold text-blue-600">01</span>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Cultura Maker
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Aprender fazendo, criando, experimentando e colaborando na
                construção de soluções para desafios reais.
              </p>
            </div>
          </article>

          <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="overflow-hidden">
              <Image
                src="/steam-2.png"
                alt="Atividade de pensamento computacional no Clube STEAM"
                width={500}
                height={600}
                className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-8">
              <span className="text-sm font-semibold text-blue-600">02</span>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Pensamento Computacional
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Desafios e experiências que estimulam lógica, criatividade,
                decomposição de problemas, colaboração e pensamento crítico.
              </p>
            </div>
          </article>

          <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="overflow-hidden">
              <Image
                src="/steam-3.png"
                alt="Experiência de educação digital no Clube STEAM"
                width={500}
                height={600}
                className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-8">
              <span className="text-sm font-semibold text-blue-600">03</span>

              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                Educação Digital
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Uso criativo, crítico, ético e responsável das tecnologias
                digitais para ampliar as possibilidades de aprendizagem.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-16 rounded-3xl bg-blue-600 p-8 text-center text-white lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">
            Aprendizagem criativa
          </p>

          <h3 className="mt-4 text-2xl font-bold lg:text-3xl">
            Aprender, criar, experimentar e transformar.
          </h3>

          <p className="mx-auto mt-4 max-w-3xl leading-7 text-blue-100">
            O Clube STEAM representa a nossa visão de uma educação em que os
            estudantes são protagonistas, desenvolvem competências e
            transformam conhecimentos em soluções.
          </p>
        </div>
      </div>
    </section>
  );
}
