import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import SectionIntro from "@/components/SectionIntro";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Farm Consultant Tipperary | Tim Bourke & Associates",
  description:
    "Looking for a farm consultant in Tipperary? Tim Bourke & Associates provides practical farm consultancy, planning support and advisory services from Cashel, Co. Tipperary.",
  alternates: {
    canonical: "/farm-consultant-tipperary",
  },
};

const consultancyAreas = [
  "Farm Planning Support",
  "Department Schemes",
  "Farm Building Design",
  "Accounts Analysis & Profit Monitoring",
  "Analytical Advice",
  "Farm Compliance & Records",
  "Nitrates & Fertiliser Plans",
];

const reasonsToChoose = [
  "Based in Cashel, Co. Tipperary",
  "Practical support for real farm decisions",
  "Clear advice across planning, performance and compliance",
  "Direct contact with the consultancy",
];

export default function FarmConsultantTipperaryPage() {
  return (
    <main className="min-h-screen bg-white text-stone-900">
      <Navbar />

      <PageHero
        eyebrow="Farm Consultant Tipperary"
        title="Farm consultancy and planning support in Tipperary"
        description="Tim Bourke & Associates provides practical farm consultancy services for farmers, landowners and rural businesses in Tipperary and surrounding areas."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <SectionIntro
              eyebrow="How We Help"
              title="Support across key farm consultancy needs"
              description="We work with farm clients who need clear support across planning, schemes, business decisions, records and performance."
            />

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {consultancyAreas.map((service) => (
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
              eyebrow="Why Choose Us"
              title="Local, practical and straightforward"
              description="Tim Bourke & Associates is well positioned to support farm clients in Tipperary with clear advice and dependable planning support."
            />

            <div className="mt-6 space-y-4">
              {reasonsToChoose.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-stone-200 bg-white p-4"
                >
                  <p className="font-semibold text-stone-900">{item}</p>
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
                eyebrow="Local Presence"
                title="Based in Cashel, serving farm clients across Tipperary"
                description="Based in Cashel, the consultancy works with farmers and landowners across Tipperary."
              />
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
              <SectionIntro
                eyebrow="Get in Touch"
                title="Speak with Tim Bourke & Associates"
                description="If you are looking for a farm consultant in Tipperary, get in touch to discuss your requirements."
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