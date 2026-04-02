import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Equine Services | Tim Bourke & Associates",
  description:
    "Equine consultancy services from Tim Bourke & Associates for stud farms, horse owners and the wider equine industry in Tipperary and beyond.",
  alternates: {
    canonical: "/equine-services",
  },
};

const equineSupport = [
  "Nutrient Recommendations",
  "Feed Programmes",
  "Forage & Diet Assessment",
  "Grassland Establishment & Maintenance",
];

const idealClients = [
  "Stud farm owners",
  "Horse owners",
  "Equine businesses",
  "Clients seeking nutrition and grassland support",
];

export default function EquineServicesPage() {
  return (
    <main className="min-h-screen bg-white text-stone-900">
      <Navbar />

      <PageHero
        eyebrow="Equine Services"
        title="Equine consultancy for stud farms, horse owners and the wider industry"
        description="Tim Bourke & Associates provides equine-focused consultancy designed to support horse health, nutrition, forage planning and grassland management. This page is built to speak directly to stud farms and the wider equine market."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              What We Help With
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Practical support across key equine nutrition and land management areas
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-stone-700">
              We help equine clients make more informed decisions around horse
              nutrition, feed planning, forage quality and the management of
              grassland used to support horse performance and wellbeing.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {equineSupport.map((service) => (
                <div
                  key={service}
                  className="rounded-2xl border border-stone-200 bg-stone-50 p-5"
                >
                  <p className="font-semibold text-stone-900">{service}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-[#f7f7f2] p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              Who This Is For
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Built for real equine decision-makers
            </h2>

            <div className="mt-6 space-y-4">
              {idealClients.map((client) => (
                <div
                  key={client}
                  className="rounded-2xl border border-stone-200 bg-white p-4"
                >
                  <p className="font-semibold text-stone-900">{client}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f2]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                Why It Matters
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Clearer positioning for the equine market
              </h2>
              <p className="mt-4 leading-7 text-stone-700">
                This section helps separate equine services from general farm
                consultancy, making it easier for stud farms and horse owners to
                understand that Tim Bourke & Associates offers relevant support
                for their needs.
              </p>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                Prostep Connection
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                A natural pathway into Prostep supplements
              </h2>
              <p className="mt-4 leading-7 text-stone-700">
                This page also creates a strong commercial bridge into Prostep,
                helping position the supplement offering within a broader equine
                consultancy service rather than as a disconnected product line.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/prostep"
              className="rounded-xl border border-stone-300 bg-white px-6 py-3 text-center font-semibold text-stone-900 transition hover:bg-stone-100"
            >
              Explore Prostep
            </Link>

            <Link
              href="/contact"
              className="rounded-xl bg-green-700 px-6 py-3 text-center font-semibold text-white transition hover:bg-green-800"
            >
              Enquire About Equine Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}