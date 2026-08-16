function InstagramIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.3" cy="6.8" r="1.1" fill="currentColor" /></svg>;
}

export default function Contact() {
  return (
    <section id="contato" className="bg-slate-950 py-14 text-white sm:py-16">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">Vamos conversar</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Vamos transformar a educação juntos?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">Entre em contato para conhecer as soluções da InovMakers.</p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="mailto:inovmaker@gmail.com" className="inline-flex min-h-11 items-center justify-center rounded-full bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Enviar e-mail</a>
          <a href="https://www.instagram.com/inovmakers" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-600 px-5 text-sm font-semibold text-white transition hover:border-pink-400 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><InstagramIcon />Visitar Instagram</a>
        </div>
        <a href="mailto:inovmaker@gmail.com" className="mt-6 inline-block text-sm text-blue-200 underline decoration-blue-300/60 underline-offset-4 transition hover:text-white">inovmaker@gmail.com</a>
      </div>
    </section>
  );
}
