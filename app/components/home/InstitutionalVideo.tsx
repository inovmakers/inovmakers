export default function InstitutionalVideo() {
  return (
    <section
      id="video-institucional"
      className="bg-slate-950 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
            Conheça a InovMakers
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Educação, tecnologia e inovação em movimento.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Em 1 minuto, conheça um pouco da nossa visão, das nossas experiências e
            do trabalho desenvolvido pela InovMakers.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl sm:rounded-3xl">
          <video
            controls
            playsInline
            preload="metadata"
            className="aspect-video w-full bg-black object-contain"
            aria-label="Vídeo institucional da InovMakers"
          >
            <source
              src="/inovmakers-video-institucional-narrado-60s.mp4"
              type="video/mp4"
            />
            Seu navegador não suporta a reprodução deste vídeo.
          </video>
        </div>
      </div>
    </section>
  );
}
