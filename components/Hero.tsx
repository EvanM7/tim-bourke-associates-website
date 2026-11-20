import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-stone-950">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/horses-field.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/65 to-stone-950/30"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent"
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-24 pb-32 md:pt-32 md:pb-40">
        <div className="max-w-3xl text-white">
          <p className="tba-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
            Established 1996 &middot; Killastafford, Cashel, Co. Tipperary
          </p>

          <h1 className="tba-fade-up-delay-1 mt-6 font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[64px]">
            Practical advice for farms, stud farms and the equine industry.
          </h1>

          <p className="tba-fade-up-delay-2 mt-7 max-w-2xl text-lg leading-8 text-stone-100/90 md:text-xl md:leading-9">
            Tim Bourke &amp; Associates supports farmers, landowners and stud
            farm owners with results-driven consultancy &mdash; backed by 30
            years of agronomic and nutritional expertise. Prostep extends that
            work into bespoke supplements for the equine market.
          </p>

          <div className="tba-fade-up-delay-3 mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-center font-semibold text-emerald-900 shadow-lg shadow-black/20 transition hover:bg-emerald-50"
            >
              Request a Consultation
              <span aria-hidden="true">&rarr;</span>
            </Link>

            <a
              href="tel:0862568114"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-center font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              Call (086) 256 8114
            </a>
          </div>
        </div>
      </div>

      {/* Stats / trust strip */}
      <div className="relative">
        <div className="mx-auto max-w-6xl px-6">
          <div className="-mb-12 grid divide-x divide-stone-200 overflow-hidden rounded-2xl border border-stone-200 bg-white/95 shadow-xl backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
            <Stat label="Established" value="1996" sub="Based in Cashel" />
            <Stat
              label="Sectors served"
              value="Farm &amp; Equine"
              sub="Across Ireland"
            />
            <Stat
              label="Bloodstock pedigree"
              value="Stud farms"
              sub="Equine consultancy"
            />
            <Stat
              label="Prostep products"
              value="Prostep"
              sub="Tailored nutrition"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="px-6 py-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-800">
        {label}
      </p>
      <p className="mt-2 font-serif text-2xl font-semibold tracking-tight text-stone-900">
        {value.replaceAll("&amp;", "&").replaceAll("&nbsp;", " ")}
      </p>
      <p className="mt-1 text-sm text-stone-500">{sub}</p>
    </div>
  );
}
