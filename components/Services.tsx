import Link from "next/link";

type ServiceIcon = "agriculture" | "environment" | "equine" | "consultancy" | "supplement";

const services: {
  title: string;
  description: string;
  href: string;
  icon: ServiceIcon;
}[] = [
  {
    title: "Agricultural Advisory",
    description:
      "Practical support for farmers seeking clear guidance on planning, operations, schemes, and long-term performance.",
    href: "/services",
    icon: "agriculture",
  },
  {
    title: "Environmental Consultancy",
    description:
      "Advice on environmental requirements, land use considerations, compliance, and sustainable decision-making.",
    href: "/services",
    icon: "environment",
  },
  {
    title: "Equine Services",
    description:
      "Specialist support for stud farm owners and the wider equine industry, backed by Tim Bourke & Associates' experience.",
    href: "/equine-services",
    icon: "equine",
  },
  {
    title: "Farm Consultancy",
    description:
      "Dependable consultancy to help rural businesses and landowners make informed decisions with confidence.",
    href: "/farm-consultancy",
    icon: "consultancy",
  },
  {
    title: "Prostep Supplements",
    description:
      "Bespoke supplements for horses, fully approved by the Department of Agriculture, Food and the Marine.",
    href: "/prostep",
    icon: "supplement",
  },
];

function Icon({ name }: { name: ServiceIcon }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "agriculture":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M12 3v18" />
          <path d="M12 8c-3 0-5 2-5 5" />
          <path d="M12 8c3 0 5 2 5 5" />
          <path d="M12 13c-2.5 0-4 1-4 3" />
          <path d="M12 13c2.5 0 4 1 4 3" />
          <path d="M5 21h14" />
        </svg>
      );
    case "environment":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M21 13c-3 4-7 6-11 6s-6-2-6-2c0-4 2-8 6-10s9-2 11 6z" />
          <path d="M9 17c1-3 3-5 6-7" />
        </svg>
      );
    case "equine":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M5 5c2 0 3 1 4 2l2 1 4-1c2-1 4 0 4 2 0 1-1 2-2 2l-1 1v3c0 2-1 4-3 5h-2v-4l-3-2c-1-1-3-2-3-4V5z" />
          <circle cx="15" cy="8" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      );
    case "consultancy":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M4 6h16" />
          <path d="M5 6v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6" />
          <path d="M8 10h8" />
          <path d="M8 14h5" />
          <path d="M9 6V4h6v2" />
        </svg>
      );
    case "supplement":
      return (
        <svg {...common} aria-hidden="true">
          <rect x="6" y="3" width="12" height="18" rx="6" />
          <path d="M6 12h12" />
        </svg>
      );
  }
}

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800">
          Services
        </p>
        <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
          Consultancy services and equine-focused support
        </h2>
        <p className="mt-5 text-lg leading-8 text-stone-700">
          Tim Bourke &amp; Associates serves both agricultural and equine
          clients, while Prostep delivers bespoke supplements tailored to the
          individual requirements of each farm.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="group relative flex flex-col rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-emerald-800/30 hover:shadow-lg"
          >
            <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800 transition group-hover:bg-emerald-100">
              <Icon name={service.icon} />
            </span>
            <h3 className="font-serif text-2xl font-semibold text-stone-900">
              {service.title}
            </h3>
            <p className="mt-3 leading-7 text-stone-600">
              {service.description}
            </p>
            <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-emerald-800">
              Learn more
              <span
                aria-hidden="true"
                className="transition group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
