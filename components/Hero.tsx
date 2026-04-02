import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f2]">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
            Tim Bourke & Associates · Cashel, Co. Tipperary
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl md:text-6xl md:leading-[1.05]">
            Agricultural, Environmental & Equine Consultancy
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
            Supporting farmers, landowners and stud farm owners with practical,
            results-driven advice. Prostep also provides bespoke supplements for
            the equine industry.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-green-700 px-6 py-3 text-center font-semibold text-white transition hover:bg-green-800"
            >
              Request a Consultation
            </Link>

            <a
              href="tel:0862568114"
              className="rounded-xl border border-stone-300 bg-white px-6 py-3 text-center font-semibold text-stone-900 transition hover:bg-stone-100"
            >
              Call Now
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-medium text-stone-500">Location</p>
              <p className="mt-1 font-semibold text-stone-900">Cashel</p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-medium text-stone-500">Clients</p>
              <p className="mt-1 font-semibold text-stone-900">Farm & Equine</p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-medium text-stone-500">Prostep</p>
              <p className="mt-1 font-semibold text-stone-900">Supplements</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-xl">
            <Image
              src="/farm-placeholder.jpg"
              alt="Agricultural and equine consultancy"
              width={1200}
              height={900}
              className="h-[420px] w-full object-cover"
              priority
            />
          </div>

          <div className="absolute -bottom-6 left-6 max-w-xs rounded-2xl border border-stone-200 bg-white p-5 shadow-lg">
            <p className="text-sm font-medium text-stone-500">
              Consultancy + Prostep
            </p>
            <p className="mt-1 text-lg font-semibold text-stone-900">
              Advice and products under one brand
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}