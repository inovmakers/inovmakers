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
                EducaÃƒÂ§ÃƒÂ£o Ã¢â‚¬Â¢ Tecnologia Ã¢â‚¬Â¢ InovaÃƒÂ§ÃƒÂ£o
              </span>
              <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-slate-900 lg:text-7xl">
                Transformamos ideias em
                <span className="text-blue-600">
                  {" "}
                  inovaÃƒÂ§ÃƒÂ£o educacional.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                A InovMakers desenvolve projetos, formaÃƒÂ§ÃƒÂµes e soluÃƒÂ§ÃƒÂµes
                educacionais que conectam tecnologia, criatividade e prÃƒÂ¡ticas
                inovadoras para transformar a aprendizagem.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#quem-somos"
                  className="rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700"
                >
                  ConheÃƒÂ§a a InovMakers
                </a>
                <a
                  href="#servicos"
                  className="rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50"
                >
                  ConheÃƒÂ§a nossos serviÃƒÂ§os
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
                    EducaÃƒÂ§ÃƒÂ£o e tecnologia
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    InovaÃƒÂ§ÃƒÂ£o
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    TransformaÃƒÂ§ÃƒÂ£o educacional
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[3rem] bg-blue-100/60 blur-3xl" />
              <div className="relative rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl lg:p-12">
                <img
                  src="/logo.png"
                  alt="InovMakers Ã¢â‚¬â€ EducaÃƒÂ§ÃƒÂ£o, Tecnologia e InovaÃƒÂ§ÃƒÂ£o"
                  className="mx-auto h-auto w-full max-w-lg"
                />
                <div className="mt-8 rounded-2xl bg-slate-50 p-6 text-center">
                  <p className="text-lg font-semibold text-slate-900">
                    EducaÃƒÂ§ÃƒÂ£o que conecta
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Pessoas, conhecimento, criatividade e tecnologia para
                    construir novas possibilidades de aprendizagem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section></main>
      <About />
      <section id="equipe" className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Nossa equipe
            </span>
            <h2 className="mt-3 text-4xl font-bold text-slate-900 lg:text-5xl">
              ExperiÃƒÂªncia e conhecimento a serviÃƒÂ§o da inovaÃƒÂ§ÃƒÂ£o educacional.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              A InovMakers reÃƒÂºne experiÃƒÂªncia acadÃƒÂªmica, pesquisa e prÃƒÂ¡tica
              educacional para desenvolver soluÃƒÂ§ÃƒÂµes inovadoras.
            </p>
          </div>
          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="md:grid md:grid-cols-[240px_1fr]">
                <div className="bg-slate-100 p-6">
                  <img
                    src="/sebastiao.jpg"
                    alt="Prof. Dr. SebastiÃƒÂ£o da Silva Vieira"
                    className="h-64 w-full rounded-2xl object-cover object-top"
                  />
                </div>
                <div className="p-8"><h3 className="text-2xl font-bold text-slate-900">Prof. Dr. SebastiÃƒÂ£o da Silva Vieira</h3><p className="mt-2 font-semibold text-blue-600">Fundador e Diretor de EducaÃƒÂ§ÃƒÂ£o e InovaÃƒÂ§ÃƒÂ£o</p><p className="mt-5 leading-7 text-slate-600">Doutor em EducaÃƒÂ§ÃƒÂ£o MatemÃƒÂ¡tica e TecnolÃƒÂ³gica e Mestre em EducaÃƒÂ§ÃƒÂ£o TecnolÃƒÂ³gica pela Universidade Federal de Pernambuco (UFPE). Atua na interseÃƒÂ§ÃƒÂ£o entre educaÃƒÂ§ÃƒÂ£o, tecnologia e inovaÃƒÂ§ÃƒÂ£o, com experiÃƒÂªncia em formaÃƒÂ§ÃƒÂ£o de professores, EducaÃƒÂ§ÃƒÂ£o Digital, InteligÃƒÂªncia Artificial, Pensamento Computacional, Cultura Maker, STEAM e Aprendizagem Criativa.</p><h4 className="mt-6 font-semibold text-slate-900">Reconhecimentos</h4><ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600"><li>Ã¢â‚¬Â¢ PrÃƒÂªmio Porvir de EducaÃƒÂ§ÃƒÂ£o - 1Ã‚Âº lugar nacional (2025)</li><li>Ã¢â‚¬Â¢ Educador Transformador - reconhecimento estadual (2024 e 2026)</li><li>Ã¢â‚¬Â¢ Semifinalista do PrÃƒÂªmio LED - Luz na EducaÃƒÂ§ÃƒÂ£o</li><li>Ã¢â‚¬Â¢ Destaque nacional na Liga STEAM</li></ul></div>
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
                  <p className="mt-2 font-semibold text-blue-600">Co-Fundadora e Diretora de EducaÃƒÂ§ÃƒÂ£o e InovaÃƒÂ§ÃƒÂ£o</p>
                  <p className="mt-5 leading-7 text-slate-600">
                    Doutora e mestre em EducaÃƒÂ§ÃƒÂ£o pela UFPE, com formaÃƒÂ§ÃƒÂ£o
                    multidisciplinar e atuaÃƒÂ§ÃƒÂ£o nas ÃƒÂ¡reas de formaÃƒÂ§ÃƒÂ£o docente,
                    tecnologias digitais, inteligÃƒÂªncia artificial e educaÃƒÂ§ÃƒÂ£o
                    inclusiva.
                  </p>
                  <h4 className="mt-6 font-semibold text-slate-900">
                    AtuaÃƒÂ§ÃƒÂ£o e reconhecimentos
                  </h4>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                    <li>
                      Ã¢â‚¬Â¢ Pesquisadora vinculada ao Centro Paulo Freire Ã¢â‚¬â€ UFPE
                    </li>
                    <li>Ã¢â‚¬Â¢ Integrante do GEPIFHRI/UFPE/CNPq</li>
                    <li>Ã¢â‚¬Â¢ Pesquisadora do LIPEL/Multiverso/UFPE</li>
                    <li>Ã¢â‚¬Â¢ Autora de publicaÃƒÂ§ÃƒÂµes cientÃƒÂ­ficas</li>
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

      <section id="contato" className="bg-slate-950 py-20 text-white"><div className="mx-auto max-w-7xl px-6 text-center"><span className="text-sm font-semibold uppercase tracking-wider text-blue-400">Entre em contato</span><h2 className="mt-3 text-4xl font-bold lg:text-5xl">Vamos transformar a educaÃƒÂ§ÃƒÂ£o juntos?</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Fale com a InovMakers para conhecer nossos projetos, formaÃƒÂ§ÃƒÂµes e soluÃƒÂ§ÃƒÂµes em educaÃƒÂ§ÃƒÂ£o, tecnologia e inovaÃƒÂ§ÃƒÂ£o.</p><div className="mt-8 flex flex-wrap justify-center gap-4"><a href="mailto:contato@inovmakers.com.br" className="rounded-full bg-white px-7 py-3 font-semibold text-slate-900 transition hover:bg-blue-50">contato@inovmakers.com.br</a><a href="https://www.instagram.com/inovmakers" target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-600 px-7 py-3 font-semibold text-white transition hover:border-blue-400 hover:text-blue-400">Instagram</a></div></div></section>
</>
  );
}
