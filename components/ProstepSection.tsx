export default function ProstepSection() {
  return (
    <section id="prostep" className="bg-[#f7f7f2]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
            Prostep
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            Bespoke supplements for the equine industry
          </h2>
          <p className="mt-4 text-lg leading-8 text-stone-700">
            Prostep is part of Tim Bourke & Associates and gives the business a
            distinct opportunity to reach stud farm owners and the wider equine
            market. This section can later evolve into a full product page or
            online shop.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/contact"
              className="rounded-xl bg-emerald-800 px-6 py-3 text-center font-semibold text-white transition hover:bg-emerald-900"
            >
              Enquire About Prostep
            </a>
            <a
              href="/services"
              className="rounded-xl border border-stone-300 bg-white px-6 py-3 text-center font-semibold text-stone-900 transition hover:bg-stone-100"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-stone-900">
            Why this matters
          </h3>
          <div className="mt-6 space-y-4 text-stone-700">
            <p>Reach stud farms and equine decision-makers more clearly.</p>
            <p>Separate the Prostep offer from general consultancy confusion.</p>
            <p>Create a future-ready base for product pages and online sales.</p>
          </div>
        </div>
      </div>
    </section>
  );
}