import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { useState, type FormEvent } from "react";

const areas = [
  "Derecho Sucesorio y Planificación Patrimonial",
  "Derecho Laboral y de la Seguridad Social",
  "Derechos Reales y Propiedad Horizontal",
  "Derecho Empresarial",
  "Derecho del Entretenimiento e Industria Musical",
  "Asesoramiento a Profesionales",
];

type Status = "idle" | "loading" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Error");
      setStatus("sent");
      e.currentTarget.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contacto" className="bg-navy text-paper py-24 md:py-32">
      <div className="container-prose grid lg:grid-cols-2 gap-16">
        <div>
          <p className="eyebrow mb-6">Contacto</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-paper leading-tight">
            Consúltenos sin compromiso
          </h2>
          <span className="gold-rule mt-8" />
          <p className="mt-8 text-paper/80 leading-relaxed max-w-md">
            Atendemos en Capital Federal, Provincia de Buenos Aires y Fuero Federal. Nuestro equipo responde en menos de 24 horas.
          </p>

          <ul className="mt-10 space-y-5">
            {[
              { icon: Mail, label: "estudiotrujilloabogados@gmail.com", href: "mailto:estudiotrujilloabogados@gmail.com" },
              { icon: Phone, label: "+54 9 11 3246-3854", href: "tel:+5491132463854" },
              { icon: MapPin, label: "Acoyte 1459, Buenos Aires" },
              { icon: Instagram, label: "@davidtrujillo", href: "https://instagram.com/davidtrujillo" },
            ].map(({ icon: Icon, label, href }) => (
              <li key={label} className="flex items-center gap-4 text-paper/85">
                <Icon className="w-5 h-5 text-gold shrink-0" strokeWidth={1.5} />
                {href ? (
                  <a href={href} className="hover:text-gold transition-colors">{label}</a>
                ) : (
                  <span>{label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={onSubmit} className="bg-paper text-navy p-8 md:p-10 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Nombre"><input required name="name" className="field" /></Field>
            <Field label="Email"><input required type="email" name="email" className="field" /></Field>
          </div>
          <Field label="Teléfono"><input name="phone" className="field" /></Field>
          <Field label="Área de consulta">
            <select required name="area" className="field bg-paper" defaultValue="">
              <option value="" disabled>Seleccione un área</option>
              {areas.map((a) => <option key={a}>{a}</option>)}
            </select>
          </Field>
          <Field label="Mensaje">
            <textarea required name="message" rows={5} className="field resize-none" />
          </Field>
          <button
            type="submit"
            disabled={status === "loading" || status === "sent"}
            className="w-full bg-gold text-navy py-4 text-sm font-medium uppercase tracking-wider hover:bg-gold-soft transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Enviando…" : status === "sent" ? "¡Consulta enviada!" : "Enviar consulta"}
          </button>
          {status === "error" && (
            <p className="text-center text-sm text-red-600 mt-2">
              Hubo un error al enviar. Por favor intente nuevamente.
            </p>
          )}
        </form>
      </div>

      <style>{`
        .field {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid var(--muted-line);
          padding: 0.75rem 0;
          color: var(--navy);
          font-size: 0.95rem;
          outline: none;
          transition: border-color .2s;
        }
        .field:focus { border-color: var(--gold); }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.2em] text-navy/60 mb-1">{label}</span>
      {children}
    </label>
  );
}
