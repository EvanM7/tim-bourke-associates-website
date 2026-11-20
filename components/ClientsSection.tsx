import Link from "next/link";

export default function ClientsSection() {
  return (
    <section className="bg-[#f9f7f1]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800">Experience</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-stone-900">Experience across farming and bloodstock.</h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">Since 1996, Tim Bourke &amp; Associates has supported agricultural and equine businesses with planning, grassland management and nutritional consultancy. Specific client references and testimonials will be added with their approval.</p>
          </div>
          <div className="rounded-3xl bg-emerald-900 p-9 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">Discuss your requirements</p>
            <h3 className="mt-3 font-serif text-3xl font-semibold">Advice suited to your farm.</h3>
            <p className="mt-4 leading-7 text-emerald-50">Whether you need farm planning or equine nutritional support, get in touch to outline your requirements.</p>
            <Link href="/contact" className="mt-7 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-emerald-900 hover:bg-emerald-50">Contact Tim <span aria-hidden="true" className="ml-2">&rarr;</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
