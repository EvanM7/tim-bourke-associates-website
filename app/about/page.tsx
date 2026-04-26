import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About | Tim Bourke & Associates",
  description:
    "Tim Bourke & Associates was established in 1996 to provide consultancy across the agricultural sector. Based in Killastafford, Cashel, Co. Tipperary, we work with farms and stud farms in Ireland and abroad.",
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
        title="Three decades supporting Irish farms and stud farms."
        description="Tim Bourke & Associates Ltd was first established in 1996 to provide consultancy to the agricultural sector — covering nutrient and grassland management, equine and livestock nutrition. Based in Killastafford, Cashel, Co. Tipperary, we work with clients across agriculture, equine, fodder and waste."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-100 shadow-xl">
              <Image
                src="/farm-placeholder.jpg"
                alt="Tipperary farmland"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 max-w-[260px] rounded-2xl border border-stone-200 bg-white p-5 shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800">
                Established
              </p>
              <p className="mt-1 font-serif text-2xl font-semibold text-stone-900">
                1996
              </p>
              <p className="mt-1 text-sm text-stone-600">
                Killastafford, Cashel, Co. Tipperary
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800">
              Our story
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
              Practical, science-led advice rooted in Tipperary.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              We provide a specialised service to farmers and the bloodstock
              industries based on sound agronomic and nutritional advice. Our
              work begins with detailed scientific analysis of soil, grass,
              animal tissue and water, and is backed up by recommendations
              tailored to the unique environment of every farm or stud.
            </p>
            <p className="mt-4 text-lg leading-8 text-stone-700">
              Tim Bourke has 25 years&rsquo; experience working with stud farms
              on grassland management and feed programmes, and has advised the
              mineral nutrition of many horses at major racing operations
              &mdash; with the Prostep process associated with horses that have
              gone on to win Group&nbsp;1 and classic races.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-800 px-6 py-3 font-semibold text-white transition hover:bg-emerald-900"
              >
                See all services
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3 font-semibold text-stone-900 transition hover:bg-stone-50"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f9f7f1]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Who we work with",
                text: "Farmers, landowners, rural businesses, stud farms and clients in the wider equine industry — both in Ireland and abroad.",
              },
              {
                title: "What we do",
                text: "Agricultural advisory, environmental consultancy, equine support, farm consultancy, and Prostep supplements for horses.",
              },
              {
                title: "How we work",
                text: "Detailed scientific analysis of soil, grass, water and tissue — combined with practical, results-driven recommendations.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm"
              >
                <h3 className="font-serif text-xl font-semibold text-stone-900">
                  {card.title}
                </h3>
                <p className="mt-3 leading-7 text-stone-600">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
