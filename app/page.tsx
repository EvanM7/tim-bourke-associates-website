import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SectionIntro from "@/components/SectionIntro";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tim Bourke & Associates | Agricultural, Environmental & Equine Consultancy",
  description:
    "Tim Bourke & Associates provides agricultural, environmental and equine consultancy in Cashel, Co. Tipperary, with Prostep supporting the equine market.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-stone-900">
      <Navbar />

      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionIntro
          eyebrow="Services"
          title="Consultancy services across agriculture, environment and equine"
          description="Tim Bourke & Associates supports farmers, landowners and equine clients with practical, results-driven advice."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <Link
            href="/services"
            className="rounded-3xl border border-stone-200 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h3 className="text-xl font-semibold">Agricultural & Farm</h3>
            <p className="mt-3 text-stone-600">
              Farm planning, schemes, business performance and advisory support.
            </p>
          </Link>

          <Link
            href="/services"
            className="rounded-3xl border border-stone-200 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h3 className="text-xl font-semibold">Environmental</h3>
            <p className="mt-3 text-stone-600">
              Compliance, nitrates planning and environmental consultancy.
            </p>
          </Link>

          <Link
            href="/equine-services"
            className="rounded-3xl border border-stone-200 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h3 className="text-xl font-semibold">Equine Services</h3>
            <p className="mt-3 text-stone-600">
              Nutrition, feed programmes and grassland support for horses.
            </p>
          </Link>
        </div>
      </section>

      <section className="bg-[#f7f7f2]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <SectionIntro
                eyebrow="Equine Focus"
                title="Supporting stud farms and the equine industry"
                description="A key focus of the business is supporting stud farms and equine clients with specialist advice around nutrition, forage and land management."
              />

              <Link
                href="/equine-services"
                className="mt-6 inline-block rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
              >
                Explore Equine Services
              </Link>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
              <p className="font-semibold text-stone-900">
                Built for equine clients
              </p>
              <p className="mt-3 text-stone-700">
                This section ensures that stud farms and horse owners instantly
                recognise that the business is relevant to them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <SectionIntro
              eyebrow="Prostep"
              title="A dedicated supplement offering for the equine market"
              description="Prostep creates a clear pathway into the equine market and will form the foundation for future online supplement sales."
            />

            <Link
              href="/prostep"
              className="mt-6 inline-block rounded-xl border border-stone-300 px-6 py-3 font-semibold transition hover:bg-stone-100"
            >
              Learn About Prostep
            </Link>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-[#f7f7f2] p-8 shadow-sm">
            <p className="font-semibold text-stone-900">Future ecommerce ready</p>
            <p className="mt-3 text-stone-700">
              This section prepares the website to evolve into a full product
              offering with online sales.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-700">
        <div className="mx-auto max-w-6xl px-6 py-20 text-white">
          <h2 className="text-3xl font-bold">
            Speak directly with Tim Bourke & Associates
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Get in touch to discuss your requirements and find out how we can
            help.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-6 py-3 text-center font-semibold text-green-700"
            >
              Send an Enquiry
            </Link>

            <a
              href="tel:0862568114"
              className="rounded-xl border border-white px-6 py-3 text-center font-semibold"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}