import { Link } from "react-router-dom";

type AttractionDetailTemplateProps = {
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  audience: string;
  recommendation: string;
  image: string;
};

export default function AttractionDetailTemplate({
  title,
  subtitle,
  description,
  duration,
  audience,
  recommendation,
  image,
}: AttractionDetailTemplateProps) {
  return (
    <main className="bg-background pb-20 text-foreground md:pb-24">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 md:pb-24 md:pt-36">
          <p className="text-sm uppercase tracking-[0.2em] text-white/70">Atraccion</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold text-white md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">{subtitle}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pt-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{description}</p>
          <div className="mt-6 space-y-2 text-sm">
            <p>
              <span className="font-semibold">Duracion sugerida:</span> {duration}
            </p>
            <p>
              <span className="font-semibold">Ideal para:</span> {audience}
            </p>
            <p>
              <span className="font-semibold">Recomendacion:</span> {recommendation}
            </p>
          </div>
          <Link
            to="/atracciones"
            className="cta-hover mt-8 inline-flex rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition hover:bg-muted"
          >
            Volver a atracciones
          </Link>
        </div>

        <figure className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
          <img src={image} alt={title} className="h-[420px] w-full object-cover" loading="lazy" />
        </figure>
      </section>
    </main>
  );
}
