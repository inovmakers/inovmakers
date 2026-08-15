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
                Educação • Tecnologia • Inovação
              </span>
              <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-slate-900 lg:text-7xl">
                Transformamos ideias em
                <span className="text-blue-600">
                  {" "}
                  inovação educacional.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                A InovMakers desenvolve projetos, formações e soluções
                educacionais que conectam tecnologia, criatividade e práticas
                inovadoras para transformar a aprendizagem.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#quem-somos"
                  className="rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700"
                >
                  Conheça a InovMakers
                </a>
                <a
                  href="#servicos"
                  className="rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50"
                >
                  Conheça nossos serviços
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
                    Educação e tecnologia
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    Inovação
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Transformação educacional
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[3rem] bg-blue-100/60 blur-3xl" />
              <div className="relative rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl lg:p-12">
                <img
                  src="/logo.png"
                  alt="InovMakers • Educação, Tecnologia e Inovação"
                  className="mx-auto h-auto w-full max-w-lg"
                />
                <div className="mt-8 rounded-2xl bg-slate-50 p-6 text-center">
                  <p className="text-lg font-semibold text-slate-900">
                    Educação que conecta
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
              Experiência e conhecimento a serviço da inovação educacional.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              A InovMakers reúne experiência acadêmica, pesquisa e prática
              educacional para desenvolver soluções inovadoras.
            </p>
          </div>
          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="md:grid md:grid-cols-[240px_1fr]">
                <div className="bg-slate-100 p-6">
                  <img
                    src="/sebastiao.jpg"
                    alt="Prof. Dr. Sebastião da Silva Vieira"
                    className="h-64 w-full rounded-2xl object-cover object-top"
                  />
                </div>
                <div className="p-8"><h3 className="text-2xl font-bold text-slate-900">Prof. Dr. Sebastião da Silva Vieira</h3><p className="mt-2 font-semibold text-blue-600">Fundador e Diretor de Educação e Inovação</p><p className="mt-5 leading-7 text-slate-600">Doutor em Educação Matemática e Tecnológica e Mestre em Educação Tecnológica pela Universidade Federal de Pernambuco (UFPE). Atua na interseção entre educação, tecnologia e inovação, com experiência em formação de professores, Educação Digital, Inteligência Artificial, Pensamento Computacional, Cultura Maker, STEAM e Aprendizagem Criativa.</p><h4 className="mt-6 font-semibold text-slate-900">Reconhecimentos</h4><ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600"><li>• Prêmio Porvir de Educação - 1º lugar nacional (2025)</li><li>• Educador Transformador - reconhecimento estadual (2024 e 2026)</li><li>• Semifinalista do Prêmio LED - Luz na Educação</li><li>• Destaque nacional na Liga STEAM</li></ul></div>
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
                  <p className="mt-2 font-semibold text-blue-600">Co-Fundadora e Diretora de Educação e Inovação</p>
                  <p className="mt-5 leading-7 text-slate-600">
                    Doutora e mestre em Educação pela UFPE, com formação
                    multidisciplinar e atuação nas áreas de formação docente,
                    tecnologias digitais, inteligência artificial e educação
                    inclusiva.
                  </p>
                  <h4 className="mt-6 font-semibold text-slate-900">
                    Atuação e reconhecimentos
                  </h4>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                    <li>
                      • Pesquisadora vinculada ao Centro Paulo Freire  UFPE
                    </li>
                    <li>• Integrante do GEPIFHRI/UFPE/CNPq</li>
                    <li>• Pesquisadora do LIPEL/Multiverso/UFPE</li>
                    <li>• Autora de publicações científicas</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <Services />
      <Steam />
      <Awards /><section id="contato" className="bg-slate-950 py-3 text-white"><div className="mx-auto flex max-w-5xl items-center justify-center gap-4 px-4"><span className="text-sm font-semibold">Vamos transformar a educação juntos?</span><a href="mailto:inovmaker@gmail.com" className="rounded-md bg-blue-600 px-2.5 py-1.5 text-[11px] font-semibold">inovmaker@gmail.com</a><a href="https://www.instagram.com/inovmakers" target="_blank" rel="noopener noreferrer" className="rounded-md border border-slate-700 px-2.5 py-1.5 text-[11px] font-semibold">@inovmakers</a></div></section>
</>
  );
}
