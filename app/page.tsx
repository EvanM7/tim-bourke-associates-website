import type { Metadata } from "next";
import Image from "next/image";
import ClientsSection from "@/components/ClientsSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SectionIntro from "@/components/SectionIntro";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Tim Bourke & Associates | Agricultural, Environmental & Equine Consultancy",
  description:
    "Tim Bourke & Associates provides agricultural, environmental and equine consultancy in Cashel, Co. Tipperary, with Prostep supporting the equine market. Established 1996.",
  alternates: {
    canonical: "/",
  },
};

const homeServices = [
  {
    href: "/equine-services",
    title: "Equine Services",
    description:
      "Nutrition, feed programmes, forage assessment and grassland support for stud farms and horse owners.",
    eyebrow: "Equine",
  },
  {
    href: "/prostep",
    title: "Prostep",
    description:
      "Bespoke supplements for the equine market, fully approved by the Department of Agriculture, Food and the Marine.",
    eyebrow: "Supplements",
  },
  {
    href: "/farm-consultancy",
    title: "Farm Consultancy",
    description:
      "Farm planning, Department schemes, building design, compliance and business analysis support.",
    eyebrow: "Farm",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-stone-900">
      <Navbar />

      <Hero />

      {/* Spacer to clear the floating stat strip from the hero */}
      <div className="h-16 bg-white" />

      {/* Heritage / about pitch */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800">
              About
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
              Three decades of agronomic and nutritional expertise.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              Tim Bourke &amp; Associates was established in 1996 to provide
              consultancy across the agricultural sector &mdash; from nutrient
              and grassland management to equine and livestock nutrition. Our
              clients work in agriculture, equine, fodder and waste, and
              include some of the world&rsquo;s most respected stud farms.
            </p>
            <p className="mt-4 text-lg leading-8 text-stone-700">
              We provide a specialised service to farmers and the bloodstock
              industry based on sound agronomic and nutritional advice.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-800 px-6 py-3 font-semibold text-white transition hover:bg-emerald-900"
              >
                More about us
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3 font-semibold text-stone-900 transition hover:bg-stone-50"
              >
                See all services
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-100 shadow-xl">
              <Image
                src="/farm-placeholder.jpg"
                alt="Tipperary farmland — Tim Bourke & Associates"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 max-w-[260px] rounded-2xl border border-stone-200 bg-white p-5 shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800">
                Founded
              </p>
              <p className="mt-1 font-serif text-2xl font-semibold text-stone-900">
                1996
              </p>
              <p className="mt-1 text-sm text-stone-600">
                Killastafford, Cashel, Co. Tipperary
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services pillars */}
      <section className="bg-[#f9f7f1]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionIntro
            eyebrow="Services"
            title="Consultancy across agriculture, environment and equine."
            description="Tim Bourke & Associates supports farmers, landowners and equine clients with practical, results-driven advice across three core practice areas."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {homeServices.map((service, i) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-emerald-800/30 hover:shadow-lg"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800">
                    {service.eyebrow}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-semibold text-stone-900">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-7 text-stone-600">
                    {service.description}
                  </p>
                </div>
                <span className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-emerald-800">
                  Explore
                  <span
                    aria-hidden="true"
                    className="transition group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 select-none font-serif text-[160px] leading-none text-emerald-800/5"
                >
                  {i + 1}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Equine focus — image left, copy right */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <div className="relative order-2 md:order-1">
              <div className="relative aspect-[5/6] overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-100 shadow-xl">
                <Image
                  src="/horses-field.jpg"
                  alt="Stud farm in Tipperary"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800">
                Equine focus
              </p>
              <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
                Trusted by leading stud farms in Ireland and abroad.
              </h2>
              <p className="mt-5 text-lg leading-8 text-stone-700">
                Tim Bourke has 25 years&rsquo; experience advising stud farms on
                grassland management and feed programmes, and has supported the
                mineral nutrition of horses associated with major racing
                operations. We perform detailed scientific analysis of soil,
                grass, animal tissue and water, and compile recommendations
                specific to each farm&rsquo;s unique environment.
              </p>

              <ul className="mt-7 space-y-3">
                {[
                  "Forage and diet assessment for mares, foals and yearlings",
                  "Tailored feed programmes built on tissue and water analysis",
                  "Grassland reseeding and pasture rejuvenation strategies",
                ].map((point) => (
                  <li key={point} className="flex gap-3 text-stone-700">
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
                    <span className="leading-7">{point}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/equine-services"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-emerald-800 px-6 py-3 font-semibold text-white transition hover:bg-emerald-900"
              >
                Explore equine services
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Prostep — premium feel */}
      <section className="relative overflow-hidden bg-emerald-950 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <div className="grid items-center gap-14 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">
                Prostep
              </p>
              <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
                A bespoke supplement programme for the equine industry.
              </h2>
              <p className="mt-5 text-lg leading-8 text-emerald-50/90">
                The Prostep process was devised by Tim Bourke after years of
                experience in equine nutrition. It identifies nutrient
                imbalances in the diet of horses and provides practical
                solutions so they grow and mature in the best possible way
                &mdash; helping potential ability come through on the race
                track. Products are tailor-made to each farm and fully approved
                by the Department of Agriculture, Food and the Marine.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/prostep"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-emerald-950 transition hover:bg-emerald-50"
                >
                  Learn about Prostep
                  <span aria-hidden="true">&rarr;</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/15"
                >
                  Enquire about supplements
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Badge title="Diet Assessment" sub="Identify nutrient imbalances" />
              <Badge
                title="Tailor-made"
                sub="Manufactured for each farm"
              />
              <Badge title="Dept of Ag approved" sub="Food &amp; the Marine" />
              <Badge
                title="Group&nbsp;1 pedigree"
                sub="Associated with classic winners"
              />
            </div>
          </div>
        </div>
      </section>

      <ClientsSection />

      {/* CTA */}
      <section className="relative overflow-hidden bg-stone-950 text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/farm-placeholder.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/85 to-stone-950/70"
          />
        </div>

        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">
              Speak with us
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
              Speak directly with Tim Bourke &amp; Associates.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-100/90">
              Discuss your requirements with our team and find out how we can
              support your farm, stud or equine operation.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-center font-semibold text-emerald-900 transition hover:bg-emerald-50"
              >
                Send an enquiry
                <span aria-hidden="true">&rarr;</span>
              </Link>

              <a
                href="tel:0862568114"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-6 py-3 text-center font-semibold backdrop-blur transition hover:bg-white/15"
              >
                Call (086) 256 8114
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Badge({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur transition hover:border-white/30 hover:bg-white/10">
      <p
        className="font-serif text-lg font-semibold text-white"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p
        className="mt-1 text-sm text-emerald-100/80"
        dangerouslySetInnerHTML={{ __html: sub }}
      />
    </div>
  );
}
