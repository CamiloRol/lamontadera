const tickets = [
  {
    title: "Pase Dia",
    description: "Acceso general durante todo el dia y entrada a shows principales.",
    includes: "Incluye mapa digital y acceso a zonas familiares.",
  },
  {
    title: "Pase Full",
    description: "Acceso prioritario en atracciones seleccionadas y experiencias premium.",
    includes: "Incluye fila rapida y beneficios en restaurantes aliados.",
  },
  {
    title: "Pase Familia",
    description: "Paquete para grupos con beneficios en taquilla y descanso.",
    includes: "Incluye descuento en lockers y zona exclusiva de descanso.",
  },
];

export default function TicketsPage() {
  return (
    <main className="bg-background pb-20 text-foreground md:pb-24">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://picsum.photos/id/1043/1920/1100')",
          }}
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 md:pb-24 md:pt-36">
          <p className="text-sm uppercase tracking-[0.2em] text-white/70">Tickets</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold text-white md:text-5xl">
            Clases de tickets para cada tipo de visita
          </h1>
          <p className="mt-4 max-w-2xl text-white/85 md:text-lg">
            Elige el pase que mejor se ajuste a tu plan. Compra simple, acceso claro y
            experiencia sin friccion desde el inicio.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-10 grid max-w-6xl gap-6 px-6 md:grid-cols-3">
        {tickets.map((ticket) => (
          <article key={ticket.title} className="rounded-2xl border border-border bg-white/90 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{ticket.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{ticket.description}</p>
            <p className="mt-4 text-sm text-foreground">{ticket.includes}</p>
            <button className="cta-hover mt-6 w-full rounded-full bg-[hsl(var(--night-blue))] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90">
              Comprar
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}
