import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import SectionIntro from "@/components/SectionIntro";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Tim Bourke & Associates",
  description:
    "Explore agricultural consultancy, environmental advice, farm planning, equine services and Prostep supplements from Tim Bourke & Associates in Cashel, Co. Tipperary.",
  alternates: {
    canonical: "/services",
  },
};

const agriculturalServices = [
  "Department Schemes",
  "Analytical Advice",
  "Farm Building Design",
  "Accounts Analysis & Profit Monitoring",
];

const environmentalServices = [
  "Farm Compliance & Records",
  "Nitrates & Fertiliser Plans",
  "Environmental Consultancy",
  "Farm Planning Support",
];

const equineServices = [
  "Nutrient Recommendations",
  "Grassland Establishment & Maintenance",
  "Forage & Diet Assessment",
  "Feed Programmes",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-stone-900">
      <Navbar />

      <PageHero
        eyebrow="Services"
        title="Practical agricultural, environmental and equine consultancy services"
        description="Tim Bourke & Associates provides a broad range of consultancy services for farmers, landowners, rural businesses, stud farms and clients in the wider equine industry. Contact us to discuss the type of support your business requires."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10">
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <SectionIntro
              eyebrow="Agricultural & Farm Consultancy"
              title="Support for farm performance, planning and business decisions"
              description="We support farmers and rural businesses with practical consultancy across farm operations, scheme applications, business analysis and development planning."
            />

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {agriculturalServices.map((service) => (
                <div
                  key={service}
                  className="rounded-2xl border border-stone-200 bg-stone-50 p-5"
                >
                  <p className="font-semibold text-stone-900">{service}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <SectionIntro
              eyebrow="Environmental & Compliance"
              title="Clear advice on records, regulation and sustainable farm planning"
              description="Tim Bourke & Associates helps clients manage environmental requirements, compliance obligations and planning considerations with straightforward, dependable advice."
            />

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {environmentalServices.map((service) => (
                <div
                  key={service}
                  className="rounded-2xl border border-stone-200 bg-stone-50 p-5"
                >
                  <p className="font-semibold text-stone-900">{service}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <SectionIntro
              eyebrow="Equine Services"
              title="Specialist support for stud farms and the equine industry"
              description="The business also provides equine-focused consultancy services, supporting horses and stud farms through nutritional guidance, feed planning and grassland management advice."
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
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/equine-services"
            className="rounded-xl border border-stone-300 bg-white px-6 py-3 text-center font-semibold text-stone-900 transition hover:bg-stone-100"
          >
            View Equine Services
          </Link>

          <Link
            href="/contact"
            className="rounded-xl bg-emerald-800 px-6 py-3 text-center font-semibold text-white transition hover:bg-emerald-900"
          >
            Enquire About Services
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}