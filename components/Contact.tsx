export default function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
            Contact
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            Get in touch with Tim Bourke & Associates
          </h2>
          <p className="mt-4 text-lg leading-8 text-stone-700">
            Use this section to drive enquiries for consultancy work, equine
            services, and Prostep supplement enquiries.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-stone-200 bg-stone-50 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-stone-900">
              Contact Details
            </h3>
            <div className="mt-6 space-y-3 text-stone-700">
              <p>Cashel, Co. Tipperary</p>
              <p>
                Office:{" "}
                <a href="tel:06263122" className="hover:text-emerald-800">
                  (062) 63122
                </a>
              </p>
              <p>
                Mobile:{" "}
                <a href="tel:0862568114" className="hover:text-emerald-800">
                  (086) 2568114
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:tim@prostep.ie"
                  className="hover:text-emerald-800"
                >
                  tim@prostep.ie
                </a>
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-stone-50 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-stone-900">
              Ready to talk?
            </h3>
            <p className="mt-4 leading-7 text-stone-600">
              Get in touch to discuss agricultural consultancy, environmental
              advice, equine services, or Prostep supplement enquiries.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:tim@prostep.ie"
                className="inline-block rounded-xl bg-emerald-800 px-6 py-3 text-center font-semibold text-white transition hover:bg-emerald-900"
              >
                Email Now
              </a>

              <a
                href="tel:0862568114"
                className="inline-block rounded-xl border border-stone-300 bg-white px-6 py-3 text-center font-semibold text-stone-900 transition hover:bg-stone-100"
              >
                Call Mobile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}