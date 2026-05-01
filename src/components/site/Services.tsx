import { Scroll, Briefcase, Building2, Landmark, Music2, UserCheck } from "lucide-react";

const services = [
  { icon: Scroll, title: "Derecho Sucesorio y Planificación Patrimonial", body: "Asesoramiento integral en sucesiones, testamentos y planificación del patrimonio familiar." },
  { icon: Briefcase, title: "Derecho Laboral y de la Seguridad Social", body: "Representación de trabajadores y empresas en conflictos laborales y previsionales." },
  { icon: Building2, title: "Derechos Reales y Propiedad Horizontal", body: "Gestión de consorcios, conflictos de propiedad y derechos sobre inmuebles." },
  { icon: Landmark, title: "Derecho Empresarial", body: "Constitución de sociedades, contratos comerciales y asesoramiento corporativo." },
  { icon: Music2, title: "Derecho del Entretenimiento e Industria Musical", body: "Contratos artísticos, derechos de autor, propiedad intelectual y representación legal en la industria musical." },
  { icon: UserCheck, title: "Asesoramiento a Profesionales", body: "Ejecución de honorarios y protección de los derechos de profesionales independientes." },
];

export function Services() {
  return (
    <section id="servicios" className="bg-stone py-24 md:py-32">
      <div className="container-prose">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-6">Servicios</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy leading-tight">
            Nuestras Áreas de Práctica
          </h2>
          <span className="gold-rule mt-8" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-muted-line border border-muted-line">
          {services.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="group bg-stone hover:bg-paper p-8 md:p-10 transition-colors relative border-transparent"
            >
              <span className="absolute inset-0 border border-transparent group-hover:border-gold pointer-events-none transition-colors" />
              <Icon className="w-8 h-8 text-gold mb-6" strokeWidth={1.4} />
              <h3 className="font-serif text-xl md:text-2xl text-navy leading-snug mb-4">{title}</h3>
              <p className="text-sm md:text-base text-navy/70 leading-relaxed">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
