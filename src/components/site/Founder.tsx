import portrait from "@/assets/portrait-trujillo.jpg";

export function Founder() {
  return (
    <section id="trujillo" className="grid lg:grid-cols-2 min-h-[700px]">
      <div className="bg-navy flex items-center justify-center p-8 md:p-16">
        <div className="relative w-full max-w-md">
          <img
            src={portrait}
            alt="Retrato del Dr. David Trujillo"
            width={1024}
            height={1024}
            loading="lazy"
            className="w-full aspect-[4/5] object-contain bg-navy"
          />
          <span className="absolute -top-3 -left-3 w-24 h-px bg-gold" />
          <span className="absolute -bottom-3 -right-3 w-px h-24 bg-gold" />
        </div>
      </div>

      <div className="bg-paper flex items-center p-8 md:p-16 lg:p-20">
        <div className="max-w-xl">
          <p className="eyebrow mb-6">Dr. David Fernando Trujillo Ospina</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy leading-tight">
            Trayectoria, prestigio y compromiso con la justicia
          </h2>
          <span className="gold-rule mt-8" />
          <p className="mt-8 text-navy/75 leading-relaxed">
            Abogado de triple nacionalidad —Argentina, Colombiana e Italiana— graduado de la Universidad de Lomas de Zamora con formación complementaria en la Universidad de Buenos Aires. Titular de tres matrículas activas con alcance en CABA, Provincia de Buenos Aires y Fuero Federal. A lo largo de su carrera participó en más de 1.500 causas en el Poder Judicial de la Nación.
          </p>
          <span className="gold-rule mt-8" />
          <p className="mt-8 text-navy/75 leading-relaxed">
            En los últimos años, el Dr. Trujillo ha expandido su práctica hacia la industria del entretenimiento y la música, asesorando a artistas, productores y managers de renombre internacional.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-muted-line pt-8">
            <div>
              <div className="font-serif text-3xl md:text-4xl text-gold">1.500+</div>
              <div className="text-sm text-navy/65 mt-1">Causas</div>
            </div>
            <div>
              <div className="font-serif text-3xl md:text-4xl text-gold">200+</div>
              <div className="text-sm text-navy/65 mt-1">Causas en la Provincia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
