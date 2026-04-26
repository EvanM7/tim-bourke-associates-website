import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import SectionIntro from "@/components/SectionIntro";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agricultural Advisor Tipperary | Tim Bourke & Associates",
  description:
    "Looking for an agricultural advisor in Tipperary? Tim Bourke & Associates provides practical farm consultancy, planning and agricultural advisory services from Cashel, Co. Tipperary.",
  alternates: {
    canonical: "/agricultural-advisor-tipperary",
  },
};

const services = [
  "Department Schemes",
  "Farm Planning Support",
  "Accounts Analysis & Profit Monitoring",
  "Analytical Advice",
  "Farm Building Design",
  "Cross Compliance & Records",
  "Nitrates & Fertiliser Plans",
];

export default function AgriculturalAdvisorTipperaryPage() {
  return (
    <main className="min-h-screen bg-white text-stone-900">
      <Navbar />

      <PageHero
        eyebrow="Agricultural Advisor Tipperary"
        title="Agricultural advisory services in Tipperary"
        description="Tim Bourke & Associates provides practical agricultural consultancy and farm planning support for farmers, landowners and rural businesses in Tipperary and surrounding areas."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <SectionIntro
              eyebrow="How We Help"
              title="Straightforward support for real farm decisions"
              description="We work with clients who need practical guidance across farm planning, schemes, compliance, business performance and day-to-day agricultural decision-making."
            />

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {services.map((service) => (
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
              eyebrow="Based in Cashel"
              title="Local support in Co. Tipperary"
              description="Being based in Cashel gives Tim Bourke & Associates a strong local position for serving clients across Tipperary while also supporting surrounding counties."
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f2]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
              <SectionIntro
                eyebrow="Why Choose Us"
                title="A clearer, more practical approach"
                description="The business is built around clear advice, practical planning support and helping clients make informed decisions without unnecessary complexity."
              />
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
              <SectionIntro
                eyebrow="Get in Touch"
                title="Speak with Tim Bourke & Associates"
                description="If you are looking for an agricultural advisor in Tipperary, get in touch to discuss your requirements."
              />

              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-xl bg-emerald-800 px-6 py-3 text-center font-semibold text-white transition hover:bg-emerald-900"
                >
                  Send an Enquiry
                </Link>

                <a
                  href="tel:0862568114"
                  className="rounded-xl border border-stone-300 bg-white px-6 py-3 text-center font-semibold text-stone-900 transition hover:bg-stone-100"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}