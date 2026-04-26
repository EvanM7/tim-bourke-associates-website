import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Useful Links | Tim Bourke & Associates",
  description:
    "Useful equine and agricultural links recommended by Tim Bourke & Associates, including Goffs and the Department of Agriculture, Food and the Marine.",
  alternates: {
    canonical: "/useful-links",
  },
};

const links = [
  {
    title: "Goffs",
    description:
      "Visit Goffs for information related to the bloodstock and equine industry.",
    href: "https://www.goffs.com/",
    buttonText: "Visit Goffs",
  },
  {
    title: "Farm Schemes & Payments",
    description:
      "Access the Department of Agriculture, Food and the Marine for information on farm schemes, payments and related supports.",
    href: "https://www.gov.ie/en/department-of-agriculture-food-and-the-marine/?referer=https://www.agriculture.gov.ie/farmerschemespayments/",
    buttonText: "View Farm Schemes & Payments",
  },
];

export default function UsefulLinksPage() {
  return (
    <main className="min-h-screen bg-white text-stone-900">
      <Navbar />

      <PageHero
        eyebrow="Useful Links"
        title="Helpful external resources"
        description="Below are a small number of useful external links related to the equine industry and farm schemes. These resources are included to make it easier for visitors to find relevant information quickly."
      />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {links.map((link) => (
            <div
              key={link.title}
              className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
                External Resource
              </p>
              <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-stone-900">
                {link.title}
              </h2>
              <p className="mt-4 leading-7 text-stone-700">
                {link.description}
              </p>

              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-xl bg-emerald-800 px-6 py-3 font-semibold text-white transition hover:bg-emerald-900"
              >
                {link.buttonText}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f7f7f2]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
              Need Advice?
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-stone-900">
              Speak with Tim Bourke & Associates
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-stone-700">
              If you would like support with farm consultancy, equine services
              or Prostep-related enquiries, get in touch directly.
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