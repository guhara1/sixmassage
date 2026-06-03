type PageHeroProps = {
  title: string;
  description: string;
  eyebrow?: string;
};

export function PageHero({ title, description, eyebrow }: PageHeroProps) {
  return (
    <section className="bg-[linear-gradient(120deg,#050705_0%,#10180f_58%,#0b1209_100%)] py-16 md:py-20">
      <div className="container">
        {eyebrow ? <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-gold">{eyebrow}</p> : null}
        <h1 className="max-w-3xl text-4xl font-black leading-tight text-ink md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72">{description}</p>
      </div>
    </section>
  );
}
