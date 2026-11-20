import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prostep | Equine Supplements by Tim Bourke & Associates",
  description:
    "Prostep provides tailored equine nutritional assessment and bespoke supplement formulations for stud farms and horse owners.",
  alternates: {
    canonical: "/prostep",
  },
};

const pillars = [
  {
    title: "Diet Assessment",
    text: "Comprehensive analysis of forage, soil, water and tissue to identify major and minor nutrient imbalances in your horses' diet.",
    href: "#diet-assessment",
  },
  {
    title: "Product Formulations",
    text: "Tailor-made supplements manufactured to a very high specification for the individual requirements of each farm.",
    href: "#product-formulations",
  },
  {
    title: "Farm-specific Approach",
    text: "Supplement recommendations are informed by each farm’s forage, water and other nutritional requirements.",
    href: "#product-formulations",
  },
  {
    title: "Group 1 Track Record",
    text: "Specialist experience with Irish and international stud farm nutrition.",
    href: "#track-record",
  },
];

export default function ProstepPage() {
  return (
    <main className="min-h-screen bg-white text-stone-900">
      <Navbar />

      <PageHero
        eyebrow="Prostep"
        title="Bespoke supplements for the equine industry."
        description="The Prostep process was devised by Tim Bourke after years of experience in equine nutrition. It identifies nutrient imbalances in horses' diets and provides practical solutions so they grow and mature in the best possible way — helping potential ability come through on the race track."
      />

      {/* Pillars */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar) => (
            <a
              key={pillar.title}
              href={pillar.href}
              className="group flex flex-col rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-emerald-800/30 hover:shadow-lg"
            >
              <h3 className="font-serif text-xl font-semibold text-stone-900">
                {pillar.title}
              </h3>
              <p className="mt-3 leading-7 text-stone-600">{pillar.text}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-emerald-800">
                Read more
                <span
                  aria-hidden="true"
                  className="transition group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Diet Assessment */}
      <section id="diet-assessment" className="bg-[#f9f7f1]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800">
                Step 01 &middot; Diet Assessment
              </p>
              <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
                Find the imbalances in the diet first.
              </h2>
              <p className="mt-5 text-lg leading-8 text-stone-700">
                Prostep starts with comprehensive diet analyses for the
                identification of major and minor nutrient imbalances. Forage
                samples are assessed alongside soil, tissue and water analysis
                so we can build a complete picture of the nutrition each horse
                is receiving on each farm.
              </p>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
              <ul className="space-y-4">
                {[
                  "Forage and feed sampling",
                  "Soil and water analysis",
                  "Tissue and biochemistry tests",
                  "Mares, stallions, foals and yearlings",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-stone-800">
                    <span
                      aria-hidden="true"
                      className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-800"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Formulations */}
      <section id="product-formulations" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <div className="order-2 rounded-3xl border border-stone-200 bg-[#f9f7f1] p-8 shadow-sm md:order-1">
              <ul className="space-y-4">
                {[
                  "Manufactured to a very high specification",
                  "Tailor-made to each farm's individual requirements",
                  "Formulated following nutritional assessment",
                  "Tried, tested and proven on stud farm operations",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-stone-800">
                    <span
                      aria-hidden="true"
                      className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-800"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-1 md:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800">
                Step 02 &middot; Product Formulations
              </p>
              <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
                Bespoke supplements, made for each farm.
              </h2>
              <p className="mt-5 text-lg leading-8 text-stone-700">
                Following diet assessment, products are formulated and
                manufactured specifically for the requirements of the farm.
                This is not an off-the-shelf supplement &mdash; each Prostep
                product is built around the analysis carried out, the horses
                being fed, and the conditions of the land they graze.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Track record */}
      <section
        id="track-record"
        className="relative overflow-hidden bg-emerald-950 text-white"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">
              Track record
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
              Tried, tested &mdash; and associated with classic winners.
            </h2>
            <p className="mt-5 text-lg leading-8 text-emerald-50/90">
              The Prostep process has been associated with many horses that
              went on to win Group&nbsp;1 and classic races. Tim Bourke has
              worked with stud farms on grassland management and feed
              programmes for over 25 years, advising the mineral nutrition of
              horses at major racing operations.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-emerald-950 transition hover:bg-emerald-50"
            >
              Enquire about Prostep
              <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              href="/equine-services"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              View equine services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
