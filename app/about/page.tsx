import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About | Tim Bourke & Associates",
  description:
    "Learn more about Tim Bourke & Associates, based in Cashel, Co. Tipperary, providing agricultural, environmental, equine and farm consultancy services.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-stone-900">
      <Navbar />

      <PageHero
        eyebrow="About"
        title="About Tim Bourke & Associates"
        description="Tim Bourke & Associates is based in Cashel, Co. Tipperary and provides agricultural, environmental, equine and farm consultancy services. The business also includes Prostep, a bespoke supplement offering for the equine industry."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Who we work with</h2>
            <p className="mt-4 leading-7 text-stone-700">
              We support farmers, landowners, rural businesses, stud farms, and
              clients in the wider equine industry who need practical,
              dependable advice.
            </p>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">What we do</h2>
            <p className="mt-4 leading-7 text-stone-700">
              Our services cover agricultural advisory, environmental
              consultancy, equine support, farm consultancy, and Prostep
              supplements for horses.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}