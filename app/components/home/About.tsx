export default function About() {
  return (
    <section id="quem-somos" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Quem somos
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Transformando a educação por meio da tecnologia e da inovação.
            </h2>

            <p className="mt-8 leading-8 text-slate-600">
              A InovMakers desenvolve projetos, formações e soluções
              educacionais que unem tecnologia, criatividade, cultura maker,
              pensamento computacional e inteligência artificial.
            </p>

            <p className="mt-6 leading-8 text-slate-600">
              Nossa proposta é fortalecer escolas, professores e redes de
              ensino por meio de experiências inovadoras, inclusivas e
              socialmente responsáveis, alinhadas às diretrizes da BNCC.
            </p>

            <p className="mt-6 leading-8 text-slate-600">
              Também atuamos com Educação Inclusiva, Plano Educacional
              Individualizado (PEI) e educação para as relações étnico-raciais,
              promovendo práticas pedagógicas que valorizam a diversidade,
              a equidade e o direito de todos à aprendizagem.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm">
                <h3 className="text-2xl font-bold text-blue-600">+150</h3>
                <p className="text-sm text-slate-500">
                  Projetos desenvolvidos
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm">
                <h3 className="text-2xl font-bold text-blue-600">+1.000</h3>
                <p className="text-sm text-slate-500">
                  Professores impactados
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900">
              Áreas de atuação
            </h3>

            <ul className="mt-8 space-y-5 text-slate-600">
              <li>✓ Educação digital</li>
              <li>✓ Pensamento computacional</li>
              <li>✓ Cultura maker e STEAM</li>
              <li>✓ Inteligência artificial na educação</li>
              <li>✓ Formação continuada de professores</li>
              <li>✓ Educação Inclusiva e PEI</li>
              <li>✓ Educação para as relações étnico-raciais</li>
              <li>✓ Consultoria educacional</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}