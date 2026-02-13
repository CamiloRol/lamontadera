import { Link } from "react-router-dom";

const attractions = [
  {
    title: "Tirolesa",
    description: "Recorrido en altura con vista panoramica y protocolos de seguridad.",
    href: "/atracciones/tirolesa",
  },
  {
    title: "Carros RC",
    description: "Circuito de velocidad para competencias en grupo.",
    href: "/atracciones/carros-rc",
  },
  {
    title: "Tobogan Arcoiris",
    description: "Deslizamiento de colores con salida amplia y segura.",
    href: "/atracciones/tobogan-arcoiris",
  },
  {
    title: "Trampolin niños",
    description: "Zona infantil controlada para saltar y jugar con confianza.",
    href: "/atracciones/trampolin-ninos",
  },
];

export default function AtraccionesPage() {
  return (
    <main className="bg-background pb-20 text-foreground md:pb-24">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://picsum.photos/id/1059/1920/1100')",
          }}
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 md:pb-24 md:pt-36">
          <p className="text-sm uppercase tracking-[0.2em] text-white/70">Atracciones</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold text-white md:text-5xl">
            Experiencias principales del parque
          </h1>
          <p className="mt-4 max-w-2xl text-white/85 md:text-lg">
            Explora la oferta completa y entra al detalle de cada atraccion.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-10 grid max-w-6xl gap-6 px-6 md:grid-cols-2">
        {attractions.map((attraction) => (
          <article key={attraction.title} className="rounded-2xl border border-border bg-white/90 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{attraction.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{attraction.description}</p>
            <Link
              to={attraction.href}
              className="cta-hover mt-6 inline-flex rounded-full bg-[hsl(var(--night-blue))] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Ver detalle
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
