import { ShieldCheck, Scale, Clock } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Triple Matrícula Activa", body: "Habilitados para actuar en CABA, Provincia de Buenos Aires y ante el Fuero Federal en todo el país." },
  { icon: Scale, title: "Ética y Transparencia", body: "Cada caso se gestiona con honestidad absoluta. Usted siempre sabrá el estado real de su situación." },
  { icon: Clock, title: "Respuesta Ágil", body: "Combinamos tecnología y procesos modernos para dar respuestas rápidas sin perder el rigor jurídico." },
];

export function WhyUs() {
  return (
    <section className="bg-stone py-24 md:py-32">
      <div className="container-prose">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-6">Por qué elegirnos</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy leading-tight">
            El estándar que nos define
          </h2>
          <span className="gold-rule mt-8 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {items.map(({ icon: Icon, title, body }) => (
            <div key={title} className="text-center md:text-left">
              <Icon className="w-10 h-10 text-gold mx-auto md:mx-0" strokeWidth={1.3} />
              <h3 className="mt-6 font-serif text-2xl text-navy">{title}</h3>
              <p className="mt-4 text-navy/70 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
