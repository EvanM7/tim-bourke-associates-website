export default function About() {
  return (
    <section id="about" className="bg-stone-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
            About
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            A modern website for Tim Bourke & Associates
          </h2>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-lg leading-8 text-stone-700">
            Tim Bourke & Associates is based in Cashel, Co. Tipperary, and
            provides agricultural, environmental, equine, and farm consultancy
            services. The redesigned website will make the business easier to
            understand, improve trust with potential clients, and support both
            service enquiries and future online supplement sales through Prostep.
          </p>
        </div>
      </div>
    </section>
  );
}