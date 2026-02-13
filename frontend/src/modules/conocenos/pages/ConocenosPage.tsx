const galleryItems = [
  {
    src: "https://picsum.photos/id/1036/1200/1600",
    alt: "Rueda panoramica al atardecer",
    imageClassName: "aspect-[4/5]",
    cardClassName: "",
  },
  {
    src: "https://picsum.photos/id/1040/1200/1800",
    alt: "Zona de atracciones con luces",
    imageClassName: "aspect-[3/5]",
    cardClassName: "lg:mt-10",
  },
  {
    src: "https://picsum.photos/id/1056/1200/1500",
    alt: "Camino principal del parque",
    imageClassName: "aspect-[4/5]",
    cardClassName: "lg:mt-4",
  },
  {
    src: "https://picsum.photos/id/1069/1200/1300",
    alt: "Familias disfrutando del parque",
    imageClassName: "aspect-square",
    cardClassName: "lg:-mt-6",
  },
  {
    src: "https://picsum.photos/id/1074/1200/1700",
    alt: "Panoramica del parque",
    imageClassName: "aspect-[3/5]",
    cardClassName: "lg:mt-8",
  },
  {
    src: "https://picsum.photos/id/1084/1200/1400",
    alt: "Zona de descanso del parque",
    imageClassName: "aspect-[4/5]",
    cardClassName: "",
  },
];

export default function ConocenosPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative overflow-hidden" id="conocenos-banner">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-white/70">Conocenos</p>
            <h1 className="mt-4 text-4xl font-semibold text-white md:text-6xl">
              Cada detalle del parque tiene una razon
            </h1>
            <p className="mt-5 text-base text-white md:text-lg">
              Creamos espacios intuitivos para que moverte, elegir y disfrutar sea natural
              desde el primer minuto.
            </p>
            <a
              href="#historia"
              className="cta-hover mt-8 inline-flex rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Ingresar al contenido
            </a>
          </div>
        </div>
      </section>

      <section id="historia" className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Quienes somos</p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Diseno centrado en experiencia real
            </h2>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p>
              La Montadera nace para simplificar la visita al parque: recorridos claros,
              tiempos mejor distribuidos y experiencias para ninos, jovenes y familias.
            </p>
            <p>
              Nuestro enfoque combina entretenimiento, seguridad y accesibilidad para que
              cada visita se sienta comoda, fluida y memorable.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-24" id="galeria">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Galeria</p>
          <h3 className="mt-3 text-2xl font-semibold md:text-3xl">Muro de momentos</h3>
          <p className="mt-3 text-muted-foreground">
            Un recorrido visual con composicion escalonada para transmitir movimiento y energia.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:items-start">
          {galleryItems.map((item) => (
            <figure
              key={item.src}
              className={`overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg ${item.cardClassName}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className={`w-full object-cover ${item.imageClassName}`}
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
