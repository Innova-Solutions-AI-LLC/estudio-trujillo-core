import { MapPin, UserRound, Cpu } from "lucide-react";
import aboutImg from "@/assets/about-trujillo.jpg";

export function About() {
  return (
    <section id="estudio" className="bg-navy text-paper py-24 md:py-32">
      <div className="container-prose grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <p className="eyebrow mb-6">Nuestro Estudio</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-paper">
            Un estudio fundado en ética, compromiso y excelencia jurídica
          </h2>
          <span className="gold-rule mt-8" />
          <p className="mt-8 text-paper/80 leading-relaxed text-base md:text-lg">
            Trujillo Abogados es un estudio jurídico con alcance nacional, fundado por el Dr. David Fernando Trujillo Ospina. Brindamos asesoramiento integral a particulares, empresas y profesionales de distintos sectores, abordando cada caso con una mirada personalizada que combina experiencia, tecnología y atención cercana.
          </p>

          <div className="mt-12 grid sm:grid-cols-3 gap-8 border-t border-paper/15 pt-10">
            {[
              { icon: MapPin, label: "Presencia Nacional" },
              { icon: UserRound, label: "Atención Personalizada" },
              { icon: Cpu, label: "Tecnología Aplicada al Derecho" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col gap-3">
                <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                <p className="text-sm md:text-base text-paper font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src={aboutImg}
            alt="Dr. David Trujillo en su despacho"
            width={1024}
            height={1280}
            loading="lazy"
            className="w-full h-[520px] md:h-[640px] object-cover"
          />
          <span className="absolute -bottom-3 -left-3 w-24 h-px bg-gold" />
          <span className="absolute -top-3 -right-3 w-px h-24 bg-gold" />
        </div>
      </div>
    </section>
  );
}
