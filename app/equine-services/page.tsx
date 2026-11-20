import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Equine Services | Tim Bourke & Associates",
  description:
    "Equine consultancy services including nutrient recommendations, feed programmes, forage and diet assessment, and grassland management in Tipperary.",
  alternates: {
    canonical: "/equine-services",
  },
};

const sections = [
  {
    id: "nutrient-recommendations",
    title: "Nutrient Recommendations",
    text: "We perform detailed scientific analysis of soil, grass, animal tissue and water. By monitoring nutrient levels, we can compile recommendations specific to the farm or stud’s unique environment.",
  },
  {
    id: "feed-programmes",
    title: "Feed Programmes",
    text: "We design tailored feed programmes for mares, stallions, foals and young horses, helping support healthy development, performance and long-term wellbeing.",
  },
  {
    id: "forage-diet-assessment",
    title: "Forage & Diet Assessment",
    text: "We carry out comprehensive diet analyses to identify major and minor nutrient imbalances. Forage samples are assessed to ensure horses are receiving high-quality nutrition capable of supporting growth and performance.",
  },
  {
    id: "grassland-establishment-maintenance",
    title: "Grassland Establishment & Maintenance",
    text: "We provide detailed advice on suitable grassland reseeding and rejuvenation techniques. Soil nutrient profiles are assessed using sample analysis to help ensure balanced growth and optimal grass quality. This includes sustainable pasture management, rotational grazing, stocking rate guidance and reseeding strategies tailored to your land and usage.",
  },
];

export default function EquineServicesPage() {
  return (
    <main className="min-h-screen bg-white text-stone-900">
      <Navbar />

      <PageHero
        eyebrow="Equine Services"
        title="Equine consultancy and nutrition support"
        description="We provide specialised equine consultancy services, helping horse owners and stud farms optimise nutrition, forage quality and grassland performance."
      />

      {/* Main image */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
          <div className="relative h-[280px] w-full sm:h-[360px] md:h-[440px]">
            <Image
              src="/horses-field.jpg"
              alt="Equine services overview"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
              Equine Services
            </p>
            <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              Specialist support for horse owners and stud farms
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-stone-700">
              From pasture quality and forage analysis to tailored feed programmes,
              our advice combines practical farm management with detailed
              understanding of equine nutritional needs.
            </p>
          </div>
        </div>
      </section>

      {/* Jump links */}
      <section className="mx-auto max-w-5xl px-6 py-4">
        <div className="rounded-3xl border border-stone-200 bg-stone-50 p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
            Equine Service Areas
          </p>
          <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-stone-900">
            Jump to a section
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-2xl border border-stone-200 bg-white p-5 font-semibold text-stone-900 transition hover:border-emerald-800 hover:text-emerald-800"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-sections with images */}
      <section className="mx-auto max-w-5xl space-y-8 px-6 py-12">
        {sections.map((section, index) => (
          <div
            key={section.id}
            id={section.id}
            className="grid scroll-mt-28 items-center gap-8 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm md:grid-cols-2 md:p-8"
          >
            <div className={index % 2 === 1 ? "md:order-2" : ""}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
                Equine Service
              </p>
              <h2 className="mt-3 font-serif text-2xl font-semibold text-stone-900">
                {section.title}
              </h2>
              <p className="mt-4 leading-relaxed text-stone-700">
                {section.text}
              </p>
            </div>

            <div className={index % 2 === 1 ? "md:order-1" : ""}>
              <div className="flex min-h-52 flex-col justify-between rounded-2xl bg-emerald-950 p-8 text-white">
                <span className="font-serif text-6xl text-emerald-200/60" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Area of expertise</p>
                  <p className="mt-2 font-serif text-2xl font-semibold">{section.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-[#f7f7f2]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
              Get in Touch
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-stone-900">
              Speak with Tim Bourke & Associates
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-stone-700">
              If you would like to discuss equine nutrition, feed planning,
              forage assessment or grassland management, get in touch to discuss
              your requirements.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                className="rounded-xl bg-emerald-800 px-6 py-3 text-center font-semibold text-white transition hover:bg-emerald-900"
              >
                Send an Enquiry
              </a>

              <a
                href="tel:0862568114"
                className="rounded-xl border border-stone-300 bg-white px-6 py-3 text-center font-semibold text-stone-900 transition hover:bg-stone-100"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}