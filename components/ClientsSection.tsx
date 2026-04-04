import Image from "next/image";
import Link from "next/link";

const clients = [
  {
    name: "Coolmore",
    logo: "/clients/coolmore-placeholder.png",
    href: "#",
  },
  {
    name: "Bansha House Stables",
    logo: "/clients/bansha-placeholder.png",
    href: "#",
  },
  {
    name: "Client Name",
    logo: "/clients/Chelsea_FC.png",
    href: "#",
  },
  {
    name: "Client Name",
    logo: "/clients/Chelsea_FC.png",
    href: "#",
  },
];

export default function ClientsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
          Clients
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          Trusted by clients across farm and equine sectors
        </h2>
        <p className="mt-4 text-lg leading-8 text-stone-700">
          Tim Bourke & Associates works with clients across agriculture, stud
          farms and the wider equine industry. This section can be expanded as
          more client names, logos and testimonials are confirmed.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {clients.map((client) => {
          const card = (
            <div className="flex min-h-[140px] items-center justify-center rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="relative h-32 w-full">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain scale-110"
                />
              </div>
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

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-stone-200 bg-stone-50 p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
            Testimonials
          </p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-stone-900">
            Client feedback will be added here
          </h3>
          <p className="mt-4 leading-7 text-stone-700">
            The next stage is to add testimonials from current and previous
            clients, helping strengthen trust and credibility across the site.
          </p>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
            Work with us
          </p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-stone-900">
            Looking for practical advice?
          </h3>
          <p className="mt-4 leading-7 text-stone-700">
            We support farm and equine clients with practical consultancy,
            planning and nutrition-focused services.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-block rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}