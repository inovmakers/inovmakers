import Image from "next/image";

const team = [
  {
    name: "Prof. Dr. Sebastião da Silva Vieira",
    role: "Fundador e Diretor de Educação e Inovação",
    image: "/sebastiao.jpg",
    alt: "Prof. Dr. Sebastião da Silva Vieira",
    bio: "Doutor em Educação Matemática e Tecnológica e Mestre em Educação Tecnológica pela Universidade Federal de Pernambuco (UFPE). Atua na interseção entre educação, tecnologia e inovação, com experiência em formação de professores, Educação Digital, Inteligência Artificial, Pensamento Computacional, Cultura Maker, STEAM e Aprendizagem Criativa.",
    highlights: ["Prêmio Porvir de Educação — 1º lugar nacional (2025)", "Educador Transformador — reconhecimento estadual (2024 e 2026)", "Semifinalista do Prêmio LED — Luz na Educação", "Destaque nacional na Liga STEAM"],
  },
  {
    name: "Profa. Dra. Virginia Renata Vilar da Silva",
    role: "Co-fundadora e Diretora de Educação e Inovação",
    image: "/virginia.jpg",
    alt: "Profa. Dra. Virginia Renata Vilar da Silva",
    bio: "Doutora e mestre em Educação pela UFPE, com formação multidisciplinar e atuação nas áreas de formação docente, tecnologias digitais, inteligência artificial e educação inclusiva.",
    highlights: ["Pesquisadora vinculada ao Centro Paulo Freire — UFPE", "Integrante do GEPIFHRI/UFPE/CNPq", "Pesquisadora do LIPEL/Multiverso/UFPE", "Autora de publicações científicas"],
  },
];

export default function Team() {
  return (
    <section id="equipe" className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Nossa equipe</p>
          <h2 className="section-title mt-4">Experiência e conhecimento a serviço da inovação educacional.</h2>
          <p className="section-copy mt-5">A InovMakers reúne experiência acadêmica, pesquisa e prática educacional para desenvolver soluções inovadoras.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {team.map((member) => (
            <article key={member.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="grid sm:grid-cols-[14rem_1fr]">
                <div className="bg-slate-100 p-4 sm:p-5">
                  <Image src={member.image} alt={member.alt} width={352} height={448} className="h-80 w-full rounded-xl object-cover object-top sm:h-full" />
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">{member.name}</h3>
                  <p className="mt-2 text-sm font-semibold text-blue-700">{member.role}</p>
                  <p className="mt-5 text-sm leading-7 text-slate-600">{member.bio}</p>
                  <h4 className="mt-6 text-sm font-semibold text-slate-900">Atuação e reconhecimentos</h4>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                    {member.highlights.map((highlight) => <li key={highlight} className="flex gap-2"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" /><span>{highlight}</span></li>)}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
