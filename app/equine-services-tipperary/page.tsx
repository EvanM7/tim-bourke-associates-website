import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import SectionIntro from "@/components/SectionIntro";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Equine Services Tipperary | Tim Bourke & Associates",
  description:
    "Looking for equine services in Tipperary? Tim Bourke & Associates supports stud farms, horse owners and the wider equine industry with practical nutrition, forage and grassland advice.",
  alternates: {
    canonical: "/equine-services-tipperary",
  },
};

const equineServices = [
  "Nutrient Recommendations",
  "Feed Programmes",
  "Forage & Diet Assessment",
  "Grassland Establishment & Maintenance",
];

const idealClients = [
  "Stud farm owners in Tipperary",
  "Horse owners seeking nutrition support",
  "Equine businesses",
  "Clients looking for forage and grassland advice",
];

export default function EquineServicesTipperaryPage() {
  return (
    <main className="min-h-screen bg-white text-stone-900">
      <Navbar />

      <PageHero
        eyebrow="Equine Services Tipperary"
        title="Equine consultancy and support in Tipperary"
        description="Tim Bourke & Associates provides practical equine services for stud farms, horse owners and equine businesses in Tipperary and surrounding areas."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <SectionIntro
              eyebrow="What We Help With"
              title="Equine nutrition, forage and land management support"
              description="We support equine clients with practical advice around horse nutrition, feed planning, forage quality and grassland management, helping clients make more informed decisions."
            />

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {equineServices.map((service) => (
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
            <SectionIntro
              eyebrow="Who This Is For"
              title="Built for real equine clients in Tipperary"
              description="Support for stud farms, horse owners and equine businesses seeking practical nutritional and grassland advice."
            />

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
              <SectionIntro
                eyebrow="Why Choose Us"
                title="Relevant support for stud farms and equine businesses"
                description="Tim Bourke & Associates combines consultancy expertise with a clear focus on practical equine support, making the business more relevant to stud farms and horse-focused clients."
              />
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
              <SectionIntro
                eyebrow="Prostep"
                title="A natural route into Prostep supplements"
                description="For tailored equine nutritional programmes and specialist supplements, explore the Prostep offering or contact us to discuss your requirements."
              />

              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/prostep"
                  className="rounded-xl border border-stone-300 bg-white px-6 py-3 text-center font-semibold text-stone-900 transition hover:bg-stone-100"
                >
                  Explore Prostep
                </Link>

                <Link
                  href="/contact"
                  className="rounded-xl bg-emerald-800 px-6 py-3 text-center font-semibold text-white transition hover:bg-emerald-900"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}