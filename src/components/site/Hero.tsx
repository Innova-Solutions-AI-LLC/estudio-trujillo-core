import heroImg from "@/assets/hero-lawyer.jpg";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen w-full flex items-end text-paper overflow-hidden">
      <img
        src={heroImg}
        alt="Dr. David Trujillo en su biblioteca jurídica"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-navy/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />

      <div className="relative w-full">
        <div className="container-prose pt-40 pb-16">
          <div className="max-w-3xl">
            <p className="eyebrow mb-6">Estudio Jurídico · Buenos Aires</p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-paper">
              Excelencia Jurídica<br />
              <span className="italic text-gold-soft">al Servicio</span> de sus Derechos
            </h1>
            <p className="mt-8 text-base md:text-lg text-paper/80 max-w-2xl leading-relaxed">
              Triple matrícula activa · CABA · Provincia de Buenos Aires · Fuero Federal · Más de 1.500 causas en el Poder Judicial de la Nación.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contacto" className="bg-gold text-navy px-7 py-4 text-sm font-medium uppercase tracking-wider hover:bg-gold-soft transition-colors">
                Consultar ahora
              </a>
              <a href="#estudio" className="border border-paper/70 text-paper px-7 py-4 text-sm font-medium uppercase tracking-wider hover:bg-paper hover:text-navy transition-colors">
                Conocer el estudio
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/60">
          <div className="container-prose grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-paper/15">
            {[
              { k: "1.500+", v: "Causas" },
              { k: "Triple", v: "Matrícula" },
              { k: "Fuero", v: "Federal" },
            ].map((s) => (
              <div key={s.v} className="py-6 md:py-8 px-4 md:px-8 first:pl-0 last:pr-0 flex items-baseline gap-3">
                <span className="font-serif text-2xl md:text-3xl text-gold">{s.k}</span>
                <span className="text-sm uppercase tracking-[0.2em] text-paper/75">{s.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
