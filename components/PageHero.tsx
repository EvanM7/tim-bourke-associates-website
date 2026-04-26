type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#f9f7f1]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-emerald-800/5 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-stone-900 sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700 md:text-xl md:leading-9">
          {description}
        </p>
      </div>
    </section>
  );
}
