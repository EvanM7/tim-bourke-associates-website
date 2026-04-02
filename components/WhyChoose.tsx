const points = [
  "Clear service pathways for farm, environmental, and equine clients",
  "Built to generate more enquiries through stronger calls-to-action",
  "Structured to support better Google rankings for local searches",
  "Designed to create a stronger platform for Prostep supplement sales",
];

export default function WhyChoose() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
          Website Goals
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          Built around the outcomes the business wants
        </h2>
        <p className="mt-4 text-lg leading-8 text-stone-700">
          The new site is not just about appearance. It needs to improve enquiry
          generation, speak clearly to both agricultural and equine audiences,
          and create a stronger commercial platform for Prostep.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {points.map((point) => (
          <div
            key={point}
            className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm"
          >
            <p className="text-lg font-semibold text-stone-900">{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
}