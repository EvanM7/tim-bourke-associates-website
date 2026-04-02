import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prostep | Equine Supplements by Tim Bourke & Associates",
  description:
    "Discover Prostep, the equine supplement offering from Tim Bourke & Associates, created to support horses, stud farms and the wider equine industry.",
  alternates: {
    canonical: "/prostep",
  },
};

const prostepBenefits = [
  "Supports the wider equine market",
  "Creates a dedicated commercial arm within the business",
  "Builds a strong foundation for future online sales",
  "Connects naturally with equine consultancy services",
];

const futureOpportunities = [
  "Individual product pages",
  "Supplement categories",
  "Online ordering",
  "Stud farm and equine client enquiries",
];

export default function ProstepPage() {
  return (
    <main className="min-h-screen bg-white text-stone-900">
      <Navbar />

      <PageHero
        eyebrow="Prostep"
        title="Bespoke supplements for the equine industry"
        description="Prostep is part of Tim Bourke & Associates and is designed to help the business serve stud farms, horse owners and the wider equine market through a specialist supplement offering."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              About Prostep
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              A product brand with real growth potential
            </h2>
            <p className="mt-4 leading-7 text-stone-700">
              Prostep gives Tim Bourke & Associates a more direct route into the
              equine market. Rather than positioning the business only as a
              consultancy, Prostep creates a distinct product arm that can
              support future growth through supplement enquiries and online
              sales.
            </p>
            <p className="mt-4 leading-7 text-stone-700">
              This page should eventually showcase specific supplements, product
              benefits, client use cases and stronger calls-to-action for equine
              customers.
            </p>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-[#f7f7f2] p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              Why It Matters
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              More than just a side offering
            </h2>

            <div className="mt-6 space-y-4">
              {prostepBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-2xl border border-stone-200 bg-white p-4"
                >
                  <p className="font-semibold text-stone-900">{benefit}</p>
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
                Future Website Direction
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Ready to grow into ecommerce
              </h2>
              <p className="mt-4 leading-7 text-stone-700">
                The new Prostep page should act as the foundation for a future
                online supplement store. It gives the business a place to build
                authority now, while making it easier to add products and online
                sales later.
              </p>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                What Can Be Added Later
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Built for future expansion
              </h2>

              <div className="mt-6 space-y-4">
                {futureOpportunities.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-stone-200 bg-stone-50 p-4"
                  >
                    <p className="font-semibold text-stone-900">{item}</p>
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
              className="rounded-xl bg-green-700 px-6 py-3 text-center font-semibold text-white transition hover:bg-green-800"
            >
              Enquire About Prostep
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}