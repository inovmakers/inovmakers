export default function Awards() {
  const awards = [
    {
      number: "01",
      title: "Prêmio Porvir de Educação",
      highlight: "1º lugar nacional",
      description:
        "Reconhecimento nacional na categoria Anos Iniciais por uma prática educacional inovadora e de impacto.",
    },
    {
      number: "02",
      title: "Prêmio LED",
      highlight: "Semifinalista nacional",
      description:
        "Reconhecimento entre iniciativas de inovação e transformação na educação.",
    },
    {
      number: "03",
      title: "Sebrae Educador Transformador",
      highlight: "Destaque estadual e etapa nacional",
      description:
        "Reconhecimento pela criação e desenvolvimento de práticas pedagógicas inovadoras.",
    },
    {
      number: "04",
      title: "Liga STEAM",
      highlight: "Destaque nacional",
      description:
        "Reconhecimento por projetos interdisciplinares baseados em criatividade, tecnologia e aprendizagem prática.",
    },
    {
      number: "05",
      title: "Mapa Brasileiro da Educação Midiática",
      highlight: "Clube STEAM",
      description:
        "O projeto Clube STEAM foi reconhecido e integrado ao Mapa Brasileiro da Educação Midiática.",
    },
    {
      number: "06",
      title: "Reconhecimentos e homenagens",
      highlight: "Trajetória educacional",
      description:
        "Menções honrosas, homenagens e reconhecimentos relacionados à inovação, ciência e educação.",
    },
  ];

  return (
    <section id="premiacoes" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Reconhecimento
          </span>

          <h2 className="section-title mt-4">
            Premiações e reconhecimentos
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Uma trajetória construída por meio de projetos, pesquisa e
            práticas comprometidas com a inovação e a transformação da
            educação.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((award) => (
            <article
              key={award.title}
              className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:bg-white hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-sm font-bold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                {award.number}
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-blue-600">
                {award.highlight}
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-900">
                {award.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {award.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-slate-950 p-8 text-center text-white lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            Inovação que gera reconhecimento
          </p>

          <h3 className="mt-4 text-2xl font-bold lg:text-3xl">
            Reconhecimento é consequência de uma prática comprometida com a
            transformação.
          </h3>

          <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-300">
            Na InovMakers, pesquisa, experiência e prática educacional se
            encontram para criar projetos com propósito, inovação e impacto.
          </p>
        </div>
      </div>
    </section>
  );
}
