const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#estudio", label: "El Estudio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#trujillo", label: "El Dr. Trujillo" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-paper border-t border-gold/70">
      <div className="container-prose py-14 grid md:grid-cols-3 gap-10 items-start">
        <div>
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-lg">Dr. David Trujillo</span>
            <span className="w-6 h-px bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-paper/70">Abogado</span>
          </div>
          <p className="mt-4 text-sm text-paper/65 max-w-xs">Excelencia jurídica con alcance nacional.</p>
        </div>

        <nav className="flex flex-wrap md:justify-center gap-x-6 gap-y-2">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-paper/75 hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-paper/55 md:text-right">
          © 2026 Estudio Trujillo Abogados.<br />Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
