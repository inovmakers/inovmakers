export default function Services() {
  const services = [
    {
      title: "Educação Digital",
      description:
        "Formação e estratégias para o desenvolvimento de competências digitais, cidadania digital, segurança e uso consciente das tecnologias.",
    },
    {
      title: "Pensamento Computacional",
      description:
        "Desenvolvimento do raciocínio lógico, criatividade, resolução de problemas e competências computacionais para diferentes etapas da educação.",
    },
    {
      title: "Cultura Maker e STEAM",
      description:
        "Projetos práticos e interdisciplinares que integram ciência, tecnologia, engenharia, artes e matemática por meio da aprendizagem criativa.",
    },
    {
      title: "Inteligência Artificial na Educação",
      description:
        "Formação e orientação para o uso crítico, ético, responsável e pedagógico da inteligência artificial nos processos educacionais.",
    },
    {
      title: "Educação Inclusiva e PEI",
      description:
        "Estratégias para práticas pedagógicas inclusivas, acessibilidade, diferenciação pedagógica e construção de Planos Educacionais Individualizados.",
    },
    {
      title: "Relações Étnico-Raciais",
      description:
        "Formações e práticas pedagógicas voltadas à valorização da diversidade, identidade, cultura e educação para as relações étnico-raciais.",
    },
    {
      title: "Formação Continuada",
      description:
        "Formação de professores, gestores e equipes pedagógicas para os desafios contemporâneos da educação e da transformação digital.",
    },
    {
      title: "Consultoria Educacional",
      description:
        "Planejamento, implementação e acompanhamento de projetos de inovação educacional de acordo com as necessidades de cada escola ou rede.",
    },
    {
      title: "Projetos de Inovação",
      description:
        "Criação e implementação de projetos educacionais personalizados envolvendo tecnologia, sustentabilidade, criatividade e aprendizagem baseada em projetos.",
    },
  ];

  return (
    <section id="servicos" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Nossos serviços
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
            Soluções para transformar a educação
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Desenvolvemos formações, consultorias e projetos personalizados
            para escolas, professores, gestores e redes de ensino.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:bg-white hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-sm font-bold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-slate-950 p-8 text-center text-white lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            Soluções personalizadas
          </p>

          <h3 className="mt-4 text-2xl font-bold lg:text-3xl">
            Projetos personalizados para cada realidade educacional.
          </h3>

          <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-300">
            A InovMakers trabalha em parceria com escolas e redes de ensino
            para compreender seus desafios e construir soluções alinhadas aos
            seus objetivos, contexto e necessidades.
          </p>

          <a
            href="#contato"
            className="mt-8 inline-flex rounded-full bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Conheça nossas soluções
          </a>
        </div>
      </div>
    </section>
  );
}