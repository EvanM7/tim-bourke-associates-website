"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/equine-services", label: "Equine Services" },
  { href: "/prostep", label: "Prostep" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-stone-900 sm:text-xl"
          onClick={() => setIsOpen(false)}
        >
          Tim Bourke & Associates
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${
                isActive(item.href)
                  ? "text-green-700"
                  : "text-stone-700 hover:text-green-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-xl bg-green-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-800 md:inline-block"
        >
          Enquire Now
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-stone-900 md:hidden"
          aria-label="Toggle menu"
        >
          <span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-stone-200 bg-white md:hidden">
          <div className="flex flex-col space-y-5 px-6 py-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium ${
                  isActive(item.href) ? "text-green-700" : "text-stone-800"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="rounded-xl bg-green-700 px-4 py-3 text-center font-semibold text-white"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}