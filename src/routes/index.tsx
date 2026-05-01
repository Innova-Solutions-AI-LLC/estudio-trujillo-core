import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Founder } from "@/components/site/Founder";
import { WhyUs } from "@/components/site/WhyUs";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Estudio Trujillo Abogados — Dr. David Trujillo" },
      {
        name: "description",
        content:
          "Estudio jurídico con alcance nacional dirigido por el Dr. David Trujillo. Triple matrícula CABA, Provincia de Buenos Aires y Fuero Federal. Más de 1.500 causas.",
      },
      { property: "og:title", content: "Estudio Trujillo Abogados — Dr. David Trujillo" },
      { property: "og:description", content: "Excelencia jurídica con alcance nacional. Triple matrícula activa." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-paper">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Founder />
      <WhyUs />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
