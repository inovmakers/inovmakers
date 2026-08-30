const whatsappUrl =
  "https://wa.me/5581986535652?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%20da%20InovMakers.";

function InstagramIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.3" cy="6.8" r="1.1" fill="currentColor" /></svg>;
}

export default function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden bg-blue-700 py-20 text-white sm:py-24">
      <div aria-hidden="true" className="absolute -left-24 -top-24 h-80 w-80 rounded-full border-[70px] border-white/5" />
      <div aria-hidden="true" className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-blue-100">O próximo projeto pode começar aqui</p>
        <h2 className="mx-auto mt-5 max-w-4xl text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[1.02] tracking-[-.05em]">Vamos transformar um desafio educacional em uma experiência de impacto?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">Conte um pouco sobre sua escola, rede ou projeto. A InovMakers ajuda a construir uma solução alinhada à sua realidade.</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-13 w-full items-center justify-center rounded-full bg-white px-7 text-sm font-bold text-blue-700 shadow-xl transition hover:-translate-y-0.5 hover:bg-blue-50 sm:w-auto">Conversar pelo WhatsApp</a>
          <a href="mailto:inovmaker@gmail.com" className="inline-flex min-h-13 w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15 sm:w-auto">Enviar e-mail</a>
        </div>
      </div>

      <footer className="relative mx-auto mt-16 max-w-7xl border-t border-white/20 px-5 pt-7 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-blue-100 sm:flex-row">
          <p>InovMakers · Educação, Tecnologia e Inovação</p>
          <div className="flex items-center gap-5">
            <a href="mailto:inovmaker@gmail.com" className="transition hover:text-white">inovmaker@gmail.com</a>
            <a href="https://www.instagram.com/inovmakers" target="_blank" rel="noopener noreferrer" aria-label="Instagram da InovMakers" className="transition hover:text-white"><InstagramIcon /></a>
          </div>
        </div>
      </footer>
    </section>
  );
}
