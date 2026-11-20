import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2 text-stone-900">
              <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 p-1 ring-1 ring-emerald-900/15">
                <Image src="/logo-mark.svg" alt="" width={32} height={32} className="h-8 w-8 object-contain" />
              </span>
              <span className="font-serif text-lg font-semibold tracking-tight">
                Tim Bourke &amp; Associates
              </span>
            </Link>
            <p className="mt-5 max-w-sm leading-7 text-stone-600">
              Agricultural, environmental and equine consultancy based in
              Cashel, Co. Tipperary &mdash; supporting farmers, landowners and
              stud farms across Ireland since 1996. Prostep delivers bespoke
              supplements for the equine market.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800">
              Explore
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-stone-600">
              <Link href="/about" className="transition hover:text-emerald-800">
                About
              </Link>
              <Link
                href="/services"
                className="transition hover:text-emerald-800"
              >
                Services
              </Link>
              <Link
                href="/equine-services"
                className="transition hover:text-emerald-800"
              >
                Equine Services
              </Link>
              <Link
                href="/farm-consultancy"
                className="transition hover:text-emerald-800"
              >
                Farm Consultancy
              </Link>
              <Link
                href="/prostep"
                className="transition hover:text-emerald-800"
              >
                Prostep
              </Link>
              <Link href="/projects" className="transition hover:text-emerald-800">Selected Projects</Link>
              <Link href="/useful-links" className="transition hover:text-emerald-800">Useful Links</Link>
              <Link
                href="/contact"
                className="transition hover:text-emerald-800"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800">
              Contact
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-stone-600">
              <p className="leading-6">
                Killastafford,
                <br />
                Cashel, Co. Tipperary,
                <br />
                Ireland
              </p>
              <a
                href="mailto:tim@prostep.ie"
                className="transition hover:text-emerald-800"
              >
                tim@prostep.ie
              </a>
              <a
                href="tel:06263122"
                className="transition hover:text-emerald-800"
              >
                Office: (062) 63122
              </a>
              <a
                href="tel:0862568114"
                className="transition hover:text-emerald-800"
              >
                Mobile: (086) 256 8114
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-stone-200 pt-6 text-sm text-stone-500 sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} Tim Bourke &amp; Associates. All
            rights reserved.
          </p>
          <p className="text-stone-400">
            Established 1996 &middot; Killastafford, Cashel, Co. Tipperary
          </p>
        </div>
      </div>
    </footer>
  );
}
