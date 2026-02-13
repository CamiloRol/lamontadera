export default function ContactanosPage() {
  return (
    <main className="bg-background pb-20 text-foreground md:pb-24">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://picsum.photos/id/1039/1920/1100')",
          }}
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 md:pb-24 md:pt-36">
          <p className="text-sm uppercase tracking-[0.2em] text-white/70">Contactanos</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold text-white md:text-5xl">
            Hablemos de tu visita
          </h1>
          <p className="mt-4 max-w-2xl text-white/85 md:text-lg">
            Resolvemos dudas sobre horarios, atracciones, accesibilidad y compras de tickets.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-10 grid max-w-6xl gap-8 px-6 md:grid-cols-2">
        <article className="rounded-2xl border border-border bg-white/90 p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Canales de contacto</h2>
          <div className="mt-4 space-y-3 text-sm text-muted-foreground">
            <p>Correo: hola@lamontadera.com</p>
            <p>Telefono: +57 300 123 4567</p>
            <p>Horario: Lunes a Domingo, 9:00 a.m. - 7:00 p.m.</p>
          </div>
        </article>

        <form className="rounded-2xl border border-border bg-white/90 p-6 shadow-sm">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <input
              type="email"
              placeholder="Correo"
              className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <textarea
              placeholder="Cuentanos en que podemos ayudarte"
              className="min-h-[140px] w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <button className="cta-hover mt-6 w-full rounded-full bg-[hsl(var(--night-blue))] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90">
            Enviar mensaje
          </button>
        </form>
      </section>
    </main>
  );
}
