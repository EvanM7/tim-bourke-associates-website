import Link from "next/link";

const services = [
  {
    title: "Agricultural Advisory",
    description:
      "Practical support for farmers seeking clear guidance on planning, operations, schemes, and long-term performance.",
    href: "/services",
  },
  {
    title: "Environmental Consultancy",
    description:
      "Advice on environmental requirements, land use considerations, compliance, and sustainable decision-making.",
    href: "/services",
  },
  {
    title: "Equine Services",
    description:
      "Specialist support for stud farm owners and the wider equine industry, backed by Tim Bourke & Associates' experience.",
    href: "/equine-services",
  },
  {
    title: "Farm Consultancy",
    description:
      "Dependable consultancy to help rural businesses and landowners make informed decisions with confidence.",
    href: "/services",
  },
  {
    title: "Prostep Supplements",
    description:
      "A bespoke supplement offering designed to support horses and open up online sales opportunities for the business.",
    href: "/prostep",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
          Services
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          Consultancy services and equine-focused support
        </h2>
        <p className="mt-4 text-lg leading-8 text-stone-700">
          The new website should clearly show that Tim Bourke & Associates
          serves both agricultural clients and the equine industry, while also
          promoting Prostep as a specialist product offering.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-5 h-12 w-12 rounded-2xl bg-green-100" />
            <h3 className="text-xl font-semibold text-stone-900">
              {service.title}
            </h3>
            <p className="mt-4 leading-7 text-stone-600">
              {service.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}