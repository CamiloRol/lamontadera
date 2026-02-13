export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <section id="inicio" className="relative overflow-hidden scroll-mt-28">
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
              <button className="cta-hover rounded-full bg-white px-6 py-3 text-sm font-semibold text-night-blue shadow-sm transition hover:bg-white/90">
                Planear mi visita
              </button>
              <a
                href="#atracciones"
                className="cta-hover rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Ver experiencias
              </a>
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

      <section id="conocenos" className="mx-auto max-w-6xl px-6 py-12 md:py-20 scroll-mt-28">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Conocenos</p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground md:text-3xl">
              Una experiencia simple, pensada para todos
            </h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Somos un parque tematico que prioriza la claridad y el confort. Cada espacio,
              ruta y momento esta disenado para que te enfoques en disfrutar.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="cta-hover rounded-full border border-border px-4 py-2">Guias claras</span>
              <span className="cta-hover rounded-full border border-border px-4 py-2">Zonas de calma</span>
              <span className="cta-hover rounded-full border border-border px-4 py-2">Atencion rapida</span>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-gradient-sunset p-8 text-white shadow-lg">
            <p className="text-sm uppercase tracking-[0.2em] text-white/70">Promesa</p>
            <h3 className="mt-3 text-2xl font-semibold">Cada visita se siente fluida</h3>
            <p className="mt-4 text-sm text-white/80">
              Reducimos tiempos de espera y simplificamos decisiones para que vivas el
              parque con tranquilidad.
            </p>
          </div>
        </div>
      </section>

      <section id="atracciones" className="mx-auto max-w-6xl px-6 py-12 md:py-20 scroll-mt-28">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Atracciones</p>
          <h2 className="mt-3 text-2xl font-semibold text-foreground md:text-3xl">
            Diversion para cada ritmo
          </h2>
          <p className="mt-3 text-base text-muted-foreground md:text-lg">
            Rutas guiadas y experiencias seguras para que elijas sin complicaciones.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Tirolesa",
              copy: "Vistas abiertas y una dosis perfecta de adrenalina con seguridad total.",
            },
            {
              title: "Carros RC",
              copy: "Competencias rapidas y divertidas para todas las edades.",
            },
            {
              title: "Tobogan Arcoiris",
              copy: "Color, velocidad y una llegada suave para repetir una y otra vez.",
            },
            {
              title: "Trampolin ninos",
              copy: "Zona segura para saltar, jugar y recargar energia.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-white/90 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="tickets" className="mx-auto max-w-6xl px-6 py-12 md:py-20 scroll-mt-28">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Tickets</p>
          <h2 className="mt-3 text-2xl font-semibold text-foreground md:text-3xl">
            Elige la clase de ticket ideal
          </h2>
          <p className="mt-3 text-base text-muted-foreground md:text-lg">
            Planes simples para que decidas rapido y disfrutes mas.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Pase Dia",
              copy: "Acceso a todas las areas principales y shows del dia.",
            },
            {
              title: "Pase Full",
              copy: "Incluye acceso prioritario y experiencias especiales.",
            },
            {
              title: "Pase Familia",
              copy: "Entrada para grupos con beneficios en comidas y lockers.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-white/90 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{item.copy}</p>
              <button className="cta-hover mt-6 w-full rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-muted">
                Ver detalles
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-6xl px-6 py-12 md:py-20 scroll-mt-28">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Contactanos</p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground md:text-3xl">
              Estamos listos para ayudarte
            </h2>
            <p className="mt-3 text-base text-muted-foreground md:text-lg">
              Resolvemos dudas sobre horarios, entradas y accesibilidad en menos de 24 horas.
            </p>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <p>Correo: hola@lamontadera.com</p>
              <p>Telefono: +57 300 123 4567</p>
              <p>Horario: 9:00 a.m. - 7:00 p.m.</p>
            </div>
          </div>
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
                placeholder="Cuentanos en que podemos ayudar"
                className="min-h-[120px] w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <button className="cta-hover mt-6 w-full rounded-full bg-night-blue px-4 py-3 text-sm font-semibold text-black transition hover:bg-night-blue/90">
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
