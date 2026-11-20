"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/farm-consultancy", label: "Farm Consultancy" },
  { href: "/equine-services", label: "Equine Services" },
  { href: "/prostep", label: "Prostep" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50">
      {/* Slim contact strip */}
      <div className="hidden bg-emerald-900 text-emerald-50 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 text-xs">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <svg
                aria-hidden="true"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Killastafford, Cashel, Co. Tipperary
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="tel:06263122"
              className="transition hover:text-white"
            >
              Office: (062) 63122
            </a>
            <a
              href="tel:0862568114"
              className="transition hover:text-white"
            >
              Mobile: (086) 256 8114
            </a>
            <a
              href="mailto:tim@prostep.ie"
              className="transition hover:text-white"
            >
              tim@prostep.ie
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-stone-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-stone-900"
            onClick={() => setIsOpen(false)}
          >
            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-900 font-serif text-base font-semibold text-white"
            >
              T
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-serif text-base font-semibold tracking-tight sm:text-lg">
                Tim Bourke &amp; Associates
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-stone-500">
                Est. 1996 &middot; Cashel
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${
                  isActive(item.href)
                    ? "text-emerald-800"
                    : "text-stone-700 hover:text-emerald-800"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="hidden rounded-full bg-emerald-800 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-900 lg:inline-block"
          >
            Enquire Now
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-stone-900 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-stone-200 bg-white lg:hidden">
            <div className="flex flex-col space-y-5 px-6 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium ${
                    isActive(item.href)
                      ? "text-emerald-800"
                      : "text-stone-800"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-emerald-800 px-4 py-3 text-center font-semibold text-white"
              >
                Enquire Now
              </Link>

              <div className="border-t border-stone-200 pt-4 text-sm text-stone-600">
                <a href="tel:0862568114" className="block py-1">
                  Mobile: (086) 256 8114
                </a>
                <a href="tel:06263122" className="block py-1">
                  Office: (062) 63122
                </a>
                <a href="mailto:tim@prostep.ie" className="block py-1">
                  tim@prostep.ie
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
