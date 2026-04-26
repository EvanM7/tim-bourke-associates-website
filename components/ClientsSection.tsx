import Image from "next/image";
import Link from "next/link";

const clients = [
  {
    name: "Coolmore",
    logo: "/clients/coolmore-placeholder.png",
    href: "#",
    real: true,
  },
  {
    name: "Bansha House Stables",
    logo: "/clients/bansha-placeholder.png",
    href: "#",
    real: true,
  },
  {
    name: "Stud Farm Client",
    logo: "/clients/stud-farm-placeholder.svg",
    href: "#",
    real: false,
  },
  {
    name: "Equine Partner",
    logo: "/clients/equine-partner-placeholder.svg",
    href: "#",
    real: false,
  },
];

export default function ClientsSection() {
  return (
    <section className="relative bg-[#f9f7f1]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-800">
            Clients
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
            Trusted across stud farms and the wider equine industry
          </h2>
          <p className="mt-5 text-lg leading-8 text-stone-700">
            Tim Bourke & Associates has advised some of the most respected names
            in Irish and international bloodstock, alongside farms across the
            agricultural sector. Logos shown below are a small sample &mdash; new
            client marks are added as they are confirmed.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((client) => {
            const card = (
              <div className="group relative flex min-h-[160px] items-center justify-center overflow-hidden rounded-2xl border border-stone-200/80 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:border-emerald-800/30 hover:shadow-lg">
                <div className="relative h-28 w-full">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-contain transition duration-500 group-hover:scale-105"
                  />
                </div>
                {!client.real && (
                  <span className="absolute bottom-3 right-3 rounded-full bg-stone-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-stone-500">
                    Placeholder
                  </span>
                )}
              </div>
            );

            return client.href !== "#" ? (
              <a
                key={client.name}
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {card}
              </a>
            ) : (
              <div key={client.name}>{card}</div>
            );
          })}
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <figure className="relative overflow-hidden rounded-3xl border border-stone-200 bg-white p-10 shadow-sm">
            <span
              aria-hidden="true"
              className="absolute -top-6 left-8 select-none font-serif text-[140px] leading-none text-emerald-800/10"
            >
              &ldquo;
            </span>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-800">
              Bloodstock track record
            </p>
            <blockquote className="mt-3 font-serif text-2xl leading-snug text-stone-900">
              25 years advising stud farms on grassland management, feed
              programmes and the mineral nutrition behind horses that have gone
              on to win Group&nbsp;1 and classic races.
            </blockquote>
            <figcaption className="mt-6 text-sm text-stone-600">
              Tim Bourke &mdash; founder, Tim Bourke &amp; Associates
            </figcaption>
          </figure>

          <div className="flex flex-col justify-between rounded-3xl border border-stone-200 bg-emerald-900 p-10 text-white shadow-sm">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">
                Work with us
              </p>
              <h3 className="mt-3 font-serif text-3xl font-semibold tracking-tight">
                Looking for practical advice?
              </h3>
              <p className="mt-4 leading-7 text-emerald-50/90">
                We support farm and equine clients with consultancy, planning
                and nutrition-focused services rooted in 30 years of
                on-the-ground experience.
              </p>
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-emerald-900 transition hover:bg-emerald-50"
            >
              Get in touch
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}