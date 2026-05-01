import { useEffect, useState } from "react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#estudio", label: "El Estudio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#trujillo", label: "El Dr. Trujillo" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-navy text-paper border-b border-paper/10">
      <div className="container-prose flex items-center justify-between h-20">
        <a href="#inicio" className="flex items-baseline gap-3 group">
          <span className="font-serif text-lg md:text-xl tracking-tight">Dr. David Trujillo</span>
          <span className="hidden sm:inline-block w-6 h-px bg-gold" />
          <span className="hidden sm:inline text-[11px] uppercase tracking-[0.22em] text-paper/70">Abogado</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-paper/85 hover:text-paper relative py-2 transition-colors after:absolute after:left-0 after:right-0 after:bottom-0 after:h-px after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-gold text-navy px-5 py-3 text-sm font-medium tracking-wide uppercase hover:bg-gold-soft transition-colors"
          >
            Consulta Gratuita
          </a>
        </nav>

        <button
          aria-label="Abrir menú"
          className="lg:hidden text-paper p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-6 h-px bg-paper mb-1.5" />
          <span className="block w-6 h-px bg-paper mb-1.5" />
          <span className="block w-6 h-px bg-paper" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-navy border-t border-paper/10">
          <div className="container-prose py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-paper/85 hover:text-gold border-b border-paper/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-3 bg-gold text-navy px-5 py-3 text-sm font-medium tracking-wide uppercase text-center"
            >
              Consulta Gratuita
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
