export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-stone-900">
              Tim Bourke & Associates
            </h3>
            <p className="mt-3 max-w-sm leading-7 text-stone-600">
              Agricultural, environmental and equine consultancy based in
              Cashel, Co. Tipperary, with Prostep supporting the equine market.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-900">Quick Links</h3>
            <div className="mt-3 flex flex-col gap-3 text-stone-600">
              <a href="/about" className="transition hover:text-green-700">
                About
              </a>
              <a href="/services" className="transition hover:text-green-700">
                Services
              </a>
              <a
                href="/equine-services"
                className="transition hover:text-green-700"
              >
                Equine Services
              </a>
              <a href="/prostep" className="transition hover:text-green-700">
                Prostep
              </a>
              <a href="/contact" className="transition hover:text-green-700">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-stone-900">Contact</h3>
            <div className="mt-3 flex flex-col gap-3 text-stone-600">
              <p>Cashel, Co. Tipperary</p>
              <a href="mailto:tim@prostep.ie" className="transition hover:text-green-700">
                tim@prostep.ie
              </a>
              <a href="tel:06263122" className="transition hover:text-green-700">
                Office: (062) 63122
              </a>
              <a href="tel:0862568114" className="transition hover:text-green-700">
                Mobile: (086) 2568114
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-stone-200 pt-6 text-sm text-stone-500">
          © 2026 Tim Bourke & Associates. All rights reserved.
        </div>
      </div>
    </footer>
  );
}