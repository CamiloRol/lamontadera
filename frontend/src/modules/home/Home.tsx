export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1472437774355-71ab6752b434?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-white/70">La Montadera</p>
            <h1 className="mt-4 text-4xl font-semibold text-white md:text-6xl">
              El parque donde la experiencia es el destino
            </h1>
            <p className="mt-4 text-base text-white/80 md:text-lg">
              Disenado para que cada paso sea intuitivo, cada decision sea sencilla y cada
              momento se sienta inolvidable.
            </p>
            <p className="mt-6 text-lg font-medium text-white">
              Tu dia perfecto empieza en un solo toque.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-night-blue shadow-sm transition hover:bg-white/90">
                Planear mi visita
              </button>
              <button className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Ver experiencias
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Beneficios de disfrutar en el parque
          </h2>
          <p className="mt-3 text-base text-muted-foreground md:text-lg">
            Una experiencia cuidada de principio a fin, para que disfrutes mas y te
            preocupes menos.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-white/80 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground">Flujo sin fricciones</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Entradas, mapas y actividades en un solo lugar. Todo claro, todo simple.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white/80 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground">Momentos memorables</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Experiencias pensadas para sorprender, desde la primera atraccion hasta el
              ultimo show.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white/80 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground">Comodidad total</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Espacios de descanso, rutas accesibles y senalizacion inteligente para moverte
              con confianza.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
