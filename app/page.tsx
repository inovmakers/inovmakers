import About from "./components/home/About";
import Services from "./components/home/Services";
import Steam from "./components/home/Steam";
import Awards from "./components/home/Awards";

export default function Home() {
  return (
    <>
      <main>
        <section
          id="inicio"
          className="relative overflow-hidden bg-white py-20 lg:py-28"
        >
          <div className="absolute left-0 top-0 -z-0 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
          <div className="absolute bottom-0 right-0 -z-0 h-96 w-96 rounded-full bg-slate-100 blur-3xl" />

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                EducaÃ§Ã£o â€¢ Tecnologia â€¢ InovaÃ§Ã£o
              </span>

              <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-slate-900 lg:text-7xl">
                Transformamos ideias em
                <span className="text-blue-600">
                  {" "}
                  inovaÃ§Ã£o educacional.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                A InovMakers desenvolve projetos, formaÃ§Ãµes e soluÃ§Ãµes
                educacionais que conectam tecnologia, criatividade e prÃ¡ticas
                inovadoras para transformar a aprendizagem.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#quem-somos"
                  className="rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700"
                >
                  ConheÃ§a a InovMakers
                </a>

                <a
                  href="#servicos"
                  className="rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50"
                >
                  ConheÃ§a nossos serviÃ§os
                </a>
              </div>

              <div className="mt-12 grid max-w-xl grid-cols-3 border-t border-slate-200 pt-8">
                <div>
                  <p className="text-2xl font-bold text-slate-900">STEAM</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Aprendizagem criativa
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    Digital
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    EducaÃ§Ã£o e tecnologia
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    InovaÃ§Ã£o
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    TransformaÃ§Ã£o educacional
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[3rem] bg-blue-100/60 blur-3xl" />

              <div className="relative rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl lg:p-12">
                <img
                  src="/logo.png"
                  alt="InovMakers â€” EducaÃ§Ã£o, Tecnologia e InovaÃ§Ã£o"
                  className="mx-auto h-auto w-full max-w-lg"
                />

                <div className="mt-8 rounded-2xl bg-slate-50 p-6 text-center">
                  <p className="text-lg font-semibold text-slate-900">
                    EducaÃ§Ã£o que conecta
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Pessoas, conhecimento, criatividade e tecnologia para
                    construir novas possibilidades de aprendizagem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section id="inovmakers-em-acao" className="bg-white py-24 lg:py-32"><div className="mx-auto max-w-7xl px-6"><div className="mx-auto max-w-3xl text-center"><span className="text-sm font-semibold uppercase tracking-wider text-blue-600">InovMakers em ação</span><h2 className="mt-3 text-4xl font-bold text-slate-900 lg:text-5xl">Educação que transforma</h2><p className="mt-5 text-lg leading-8 text-slate-600">Ciência, prática, criatividade e inovação para transformar desafios educacionais em novas possibilidades.</p></div><div className="mt-12 grid gap-8 md:grid-cols-2"><div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg"><img src="/inovmakers-desafio.jpg" alt="O desafio é real. A oportunidade, também." className="h-auto w-full" /></div><div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg"><img src="/inovmakers-ciencia-pratica-inovacao.jpg" alt="Transformamos a educação com ciência, prática e inovação." className="h-auto w-full" /></div></div></div></section><About />

      <section id="equipe" className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Nossa equipe
            </span>

            <h2 className="mt-3 text-4xl font-bold text-slate-900 lg:text-5xl">
              ExperiÃªncia e conhecimento a serviÃ§o da inovaÃ§Ã£o educacional.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              A InovMakers reÃºne experiÃªncia acadÃªmica, pesquisa e prÃ¡tica
              educacional para desenvolver soluÃ§Ãµes inovadoras.
            </p>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="md:grid md:grid-cols-[240px_1fr]">
                <div className="bg-slate-100 p-6">
                  <img
                    src="/sebastiao.jpg"
                    alt="Prof. Dr. SebastiÃ£o da Silva Vieira"
                    className="h-64 w-full rounded-2xl object-cover object-top"
                  />
                </div>

                <div className="p-8"><h3 className="text-2xl font-bold text-slate-900">Prof. Dr. SebastiÃ£o da Silva Vieira</h3><p className="mt-2 font-semibold text-blue-600">Fundador e Diretor de EducaÃ§Ã£o e InovaÃ§Ã£o</p><p className="mt-5 leading-7 text-slate-600">Doutor em EducaÃ§Ã£o MatemÃ¡tica e TecnolÃ³gica e Mestre em EducaÃ§Ã£o TecnolÃ³gica pela Universidade Federal de Pernambuco (UFPE). Atua na interseÃ§Ã£o entre educaÃ§Ã£o, tecnologia e inovaÃ§Ã£o, com experiÃªncia em formaÃ§Ã£o de professores, EducaÃ§Ã£o Digital, InteligÃªncia Artificial, Pensamento Computacional, Cultura Maker, STEAM e Aprendizagem Criativa.</p><h4 className="mt-6 font-semibold text-slate-900">Reconhecimentos</h4><ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600"><li>â€¢ PrÃªmio Porvir de EducaÃ§Ã£o - 1Âº lugar nacional (2025)</li><li>â€¢ Educador Transformador - reconhecimento estadual (2024 e 2026)</li><li>â€¢ Semifinalista do PrÃªmio LED - Luz na EducaÃ§Ã£o</li><li>â€¢ Destaque nacional na Liga STEAM</li></ul></div>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="md:grid md:grid-cols-[240px_1fr]">
                <div className="bg-slate-100 p-6">
                  <img
                    src="/virginia.jpg"
                    alt="Profa. Dra. Virginia Renata Vilar da Silva"
                    className="h-64 w-full rounded-2xl object-cover object-top"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Profa. Dra. Virginia Renata Vilar da Silva
                  </h3>

                  <p className="mt-2 font-semibold text-blue-600">Co-Fundadora e Diretora de EducaÃ§Ã£o e InovaÃ§Ã£o</p>

                  <p className="mt-5 leading-7 text-slate-600">
                    Doutora e mestre em EducaÃ§Ã£o pela UFPE, com formaÃ§Ã£o
                    multidisciplinar e atuaÃ§Ã£o nas Ã¡reas de formaÃ§Ã£o docente,
                    tecnologias digitais, inteligÃªncia artificial e educaÃ§Ã£o
                    inclusiva.
                  </p>

                  <h4 className="mt-6 font-semibold text-slate-900">
                    AtuaÃ§Ã£o e reconhecimentos
                  </h4>

                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                    <li>
                      â€¢ Pesquisadora vinculada ao Centro Paulo Freire â€” UFPE
                    </li>
                    <li>â€¢ Integrante do GEPIFHRI/UFPE/CNPq</li>
                    <li>â€¢ Pesquisadora do LIPEL/Multiverso/UFPE</li>
                    <li>â€¢ Autora de publicaÃ§Ãµes cientÃ­ficas</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Services />

      <Steam />

      <Awards />
    </>
  );
}