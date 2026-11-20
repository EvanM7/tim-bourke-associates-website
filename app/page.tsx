import type { Metadata } from "next";
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
      "Specialist equine nutrition and tailored supplement programmes based on individual farm requirements.",
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

      {/* About: clear business introduction without generic photography */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800">About</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
              Practical advice rooted in Tipperary.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              Established in 1996, Tim Bourke &amp; Associates provides
              agricultural and nutritional consultancy for farmers, landowners
              and stud farms. Our recommendations draw on analysis and an
              understanding of the requirements of each operation.
            </p>
            <p className="mt-4 text-lg leading-8 text-stone-700">
              From farm building planning to equine feed programmes, our focus
              is clear, practical advice.
            </p>
            <Link href="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-800 px-6 py-3 font-semibold text-white transition hover:bg-emerald-900">
              More about us <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] bg-emerald-950 p-9 text-white shadow-lg sm:p-12">
            <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/15" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">Established in Cashel</p>
            <p className="relative mt-5 font-serif text-7xl font-semibold tracking-tight sm:text-8xl">1996</p>
            <p className="relative mt-6 max-w-sm text-lg leading-8 text-emerald-50">
              Advice tailored to farms, stud farms and rural businesses.
            </p>
            <div className="relative mt-10 grid gap-3 border-t border-white/20 pt-7 text-sm text-emerald-50 sm:grid-cols-2">
              <span>Farm planning</span><span>Equine nutrition</span>
              <span>Forage assessment</span><span>Practical recommendations</span>
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

      {/* Equine focus: meaningful service steps instead of repeated stock imagery */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="rounded-[2rem] border border-emerald-900/15 bg-[#f5f7f2] p-8 sm:p-11">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800">How we work</p>
              {[
                ["01", "Understand the farm", "Assess forage, land and nutritional requirements."],
                ["02", "Review the evidence", "Use relevant analysis to guide recommendations."],
                ["03", "Recommend practical steps", "Build advice around the individual operation."],
              ].map(([number, title, description]) => (
                <div key={number} className="mt-7 flex gap-5 border-t border-emerald-900/10 pt-6">
                  <span className="font-serif text-3xl text-emerald-800">{number}</span>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-stone-900">{title}</h3>
                    <p className="mt-2 leading-7 text-stone-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800">Equine focus</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
                Specialist support for stud farms and horse owners.
              </h2>
              <p className="mt-5 text-lg leading-8 text-stone-700">
                Our equine consultancy combines grassland management, forage
                assessment and feed planning with practical nutritional advice.
                Recommendations are shaped around the environment and needs of
                each farm or stud.
              </p>
              <ul className="mt-7 space-y-3 text-stone-700">
                <li>Forage and diet assessment for mares, foals and yearlings</li>
                <li>Tailored feed programmes informed by relevant analysis</li>
                <li>Grassland reseeding and pasture management advice</li>
              </ul>
              <Link href="/equine-services" className="mt-9 inline-flex items-center gap-2 rounded-full bg-emerald-800 px-6 py-3 font-semibold text-white transition hover:bg-emerald-900">
                Explore equine services <span aria-hidden="true">&rarr;</span>
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
                . Products are tailored to the nutritional needs identified for each farm.
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
              <Badge title="Farm specific" sub="Nutrition-led advice" />
              <Badge
                title="Stud farm focus"
                sub="Equine nutrition expertise"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white"><div className="mx-auto max-w-6xl px-6 py-20"><div className="grid items-center gap-10 rounded-[2rem] bg-stone-100 p-8 md:grid-cols-2 md:p-14"><div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800">Selected work</p><h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-stone-900">Planning and nutrition advice in practice.</h2><p className="mt-5 leading-8 text-stone-700">Explore examples of agricultural building planning and specialist livestock nutrition work, including a cattle facility in County Limerick planned by Tim Bourke.</p><Link href="/projects" className="mt-7 inline-flex items-center gap-2 rounded-full bg-emerald-800 px-6 py-3 font-semibold text-white hover:bg-emerald-900">View selected projects <span aria-hidden="true">&rarr;</span></Link></div><div className="grid gap-4"><div className="rounded-2xl bg-white p-7"><p className="text-xs font-semibold uppercase tracking-widest text-emerald-800">Farm buildings</p><h3 className="mt-2 font-serif text-2xl font-semibold">Limerick cattle unit</h3><p className="mt-2 leading-7 text-stone-600">Planning: Tim Bourke. Construction: Dillon Contractors.</p></div><div className="rounded-2xl bg-white p-7"><p className="text-xs font-semibold uppercase tracking-widest text-emerald-800">Livestock nutrition</p><h3 className="mt-2 font-serif text-2xl font-semibold">Tailored mineral programmes</h3><p className="mt-2 leading-7 text-stone-600">Practical advice informed by individual farm needs.</p></div></div></div></div></section>

      <ClientsSection />

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-stone-950 via-emerald-950 to-stone-950 text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white/10" />

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
      <p className="font-serif text-lg font-semibold text-white">{title}</p>
      <p className="mt-1 text-sm text-emerald-100/80">{sub}</p>
    </div>
  );
}
