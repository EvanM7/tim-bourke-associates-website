import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Farm Consultancy | Tim Bourke & Associates",
  description:
    "Farm consultancy services including Department Schemes, Analytical Advice, Farm Building Design, Cross Compliance, Nitrates & Fertiliser Plans and more in Tipperary.",
  alternates: {
    canonical: "/farm-consultancy",
  },
};

const sections = [
  {
    id: "department-schemes",
    title: "Department Schemes",
    text: "Advice on agricultural support schemes and application preparation. The specific schemes available and eligibility requirements change over time; contact us to discuss your situation.",
    image: "/farm-placeholder.jpg",
  },
  {
    id: "analytical-advice",
    title: "Analytical Advice",
    text: "Scientific analysis of a number of aspects of your farm and stock can help improve growth, performance and margins.",
    image: "/farm-placeholder.jpg",
  },
  {
    id: "farm-building-design",
    title: "Farm Building Design",
    text: "We design farm buildings and help ensure that they meet Department of Agriculture specifications for pollution control, slurry storage requirements and practical farm use.",
    image: "/farm-placeholder.jpg",
  },
  {
    id: "cross-compliance-records",
    title: "Farm Compliance & Records",
    text: "Farmers must meet applicable environmental, animal-welfare and land-management obligations. We help clients organise records and understand relevant requirements.",
    image: "/farm-placeholder.jpg",
  },
  {
    id: "accounts-analysis-profit-monitoring",
    title: "Accounts Analysis & Profit Monitoring",
    text: "This involves assessing farmers’ accounts and records so that they can be compared to other farmers of similar enterprises, helping identify opportunities to improve performance and profitability.",
    image: "/farm-placeholder.jpg",
  },
  {
    id: "nitrates-fertiliser-plans",
    title: "Nitrates & Fertiliser Plans",
    text: "Intensive farms must ensure that they meet nitrates regulations laid down by the Department of Agriculture. We provide support with fertiliser planning and nutrient management.",
    image: "/farm-placeholder.jpg",
  },
  {
    id: "safety-statements",
    title: "Safety Statements",
    text: "We help farm businesses prepare and organise the key safety documentation needed to support safer working practices and clearer compliance.",
    image: "/farm-placeholder.jpg",
  },
];

export default function FarmConsultancyPage() {
  return (
    <main className="min-h-screen bg-white text-stone-900">
      <Navbar />

      <PageHero
        eyebrow="Farm Consultancy"
        title="Practical farm consultancy and planning support"
        description="We provide farm consultancy services that help farmers and rural businesses with planning, compliance, analysis, schemes and day-to-day decision-making."
      />

      {/* Main image */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
          <div className="relative h-[280px] w-full sm:h-[360px] md:h-[440px]">
            <Image
              src="/farm-placeholder.jpg"
              alt="Farm consultancy overview"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
              Farm Consultancy
            </p>
            <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              Clear support across key farm business areas
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-stone-700">
              From planning an agricultural building to managing farm records and nutrient requirements, we provide practical advice tailored to individual operations.
            </p>
          </div>
        </div>
      </section>

      {/* Jump links */}
      <section className="mx-auto max-w-5xl px-6 py-4">
        <div className="rounded-3xl border border-stone-200 bg-stone-50 p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
            Farm Consultancy Areas
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
      <section className="mx-auto max-w-5xl space-y-16 px-6 py-12">
        {sections.map((section, index) => (
          <div
            key={section.id}
            id={section.id}
            className="grid scroll-mt-28 items-center gap-8 rounded-3xl border border-stone-200 bg-white p-8 shadow-sm md:grid-cols-2"
          >
            <div className={index % 2 === 1 ? "md:order-2" : ""}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
                Farm Consultancy Service
              </p>
              <h2 className="mt-3 font-serif text-2xl font-semibold text-stone-900">
                {section.title}
              </h2>
              <p className="mt-4 leading-relaxed text-stone-700">
                {section.text}
              </p>
            </div>

            <div className={index % 2 === 1 ? "md:order-1" : ""}>
              <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-stone-200 bg-stone-100">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
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
              If you would like to discuss farm planning, schemes, compliance,
              building design or business analysis, get in touch to discuss your
              requirements.
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