import Image from "next/image";

const team = [
  {
    name: "Prof. Dr. Sebastião da Silva Vieira",
    role: "Fundador e Diretor de Educação e Inovação",
    image: "/sebastiao.jpg",
    alt: "Prof. Dr. Sebastião da Silva Vieira",
    position: "50% 22%",
    bio: "Doutor em Educação Matemática e Tecnológica e Mestre em Educação Tecnológica pela Universidade Federal de Pernambuco (UFPE). Atua na interseção entre educação, tecnologia e inovação, com experiência em formação de professores, Educação Digital, Inteligência Artificial, Pensamento Computacional, Cultura Maker, STEAM e Aprendizagem Criativa.",
    highlights: ["Prêmio Porvir de Educação — 1º lugar nacional (2025)", "Educador Transformador — reconhecimento estadual (2024 e 2026)", "Semifinalista do Prêmio LED — Luz na Educação", "Destaque nacional na Liga STEAM"],
  },
  {
    name: "Profa. Dra. Virginia Renata Vilar da Silva",
    role: "Co-fundadora e Diretora de Educação e Inovação",
    image: "/virginia.jpg",
    alt: "Profa. Dra. Virginia Renata Vilar da Silva",
    position: "50% 18%",
    bio: "Doutora e mestre em Educação pela UFPE, com formação multidisciplinar e atuação nas áreas de formação docente, tecnologias digitais, inteligência artificial e educação inclusiva.",
    highlights: ["Pesquisadora vinculada ao Centro Paulo Freire — UFPE", "Integrante do GEPIFHRI/UFPE/CNPq", "Pesquisadora do LIPEL/Multiverso/UFPE", "Autora de publicações científicas"],
  },
  {
    name: "Ivison Cordeiro",
    role: "Gestão Educacional, Indústria 4.0 e Inovação Pedagógica",
    image: "/ivison-cordeiro-pro.jpg",
    alt: "Ivison Cordeiro",
    position: "50% 50%",
    bio: "Mestre em Gestão Empresarial pela Devry Brasil, com mais de 15 anos de atuação no SENAI-PE em Educação Profissional e Tecnológica. É pós-graduado em Docência na Educação Profissional e Tecnológica pelo SENAI CETIQT.",
    highlights: ["Palestrante sobre Indústria 4.0 e o profissional do futuro", "Experiência em Educação Profissional e Tecnológica", "Missão internacional em São Tomé e Príncipe — cooperação técnica ONU/ABC"],
  },
  {
    name: "Tânia Lima",
    role: "Psicologia Escolar, Educação Especial e Saúde Mental Infantil",
    image: "/tania-lima-pro.jpg",
    alt: "Tânia Lima",
    position: "50% 50%",
    bio: "Psicóloga Clínica — CRP 02/33355, com atuação em Psicologia Escolar e Educacional e experiência em Educação Especial na AADEE/Prefeitura do Recife.",
    highlights: ["Pós-graduanda em Psicologia Infantil, AEE e Psicomotricidade", "Formação em Terapia Cognitivo-Comportamental", "Atuação em Psicologia Escolar e Educacional"],
  },
  {
    name: "Kéthully Silva",
    role: "Relações Étnico-Raciais, Antirracismo e Direitos Humanos",
    image: "/kethully-silva-pro.jpg",
    alt: "Kéthully Silva",
    position: "50% 50%",
    bio: "Mestre em Educação pela UFPE, com estudos sobre representações sociais das relações étnico-raciais. É Assistente Social, Pedagoga e Sanitarista, docente da UNINASSAU e autora de livros publicados.",
    highlights: ["Conselheira de Igualdade Racial e de Alimentação Escolar", "Homenageada pelo SIMPERE por combate ao racismo em sala de aula", "Atuação em relações étnico-raciais e direitos humanos"],
  },
  {
    name: "Omar Cortás",
    role: "STEAM, Robótica e Tecnologias Educacionais",
    image: "/omar-cortas-pro.jpg",
    alt: "Omar Cortás",
    position: "50% 50%",
    bio: "Coordenador do projeto Horizonte 5.0 — Robótica, Automação e Drones. Possui especialização em Docência na Educação Profissional e Tecnológica pelo IFRJ e especialização em Matemática e Tecnologias pela UFPI, com pesquisa em Inteligência Artificial na Educação.",
    highlights: ["Criador dos projetos ETEPLAY e Alencar Tech — gamificação na educação", "Pesquisa em Inteligência Artificial na Educação", "Prêmio Naíde Teodósio de Estudos de Gênero (2024)"],
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

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {team.map((member) => (
            <article key={member.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  sizes="(min-width: 1280px) 352px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: member.position }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">{member.name}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-blue-700">{member.role}</p>
                <p className="mt-5 text-sm leading-7 text-slate-600">{member.bio}</p>
                <h4 className="mt-6 text-sm font-semibold text-slate-900">Atuação e destaques</h4>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                  {member.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
