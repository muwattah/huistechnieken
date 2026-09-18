"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const services = [
  { href: "/diensten/badkamerrenovatie/", label: "Badkamerrenovatie" },
  { href: "/diensten/sanitair/", label: "Sanitair" },
  { href: "/diensten/verwarming/", label: "Verwarming" },
  { href: "/diensten/warmtepompen/", label: "Warmtepompen" },
  { href: "/diensten/elektriciteit/", label: "Elektriciteit" },
  { href: "/diensten/ventilatie/", label: "Ventilatie" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-off-white/95 backdrop-blur-sm border-b border-warm-gray"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-content px-5 md:px-8 lg:px-12">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link
            href="/"
            className="text-lg md:text-xl font-medium tracking-tight text-charcoal"
            onClick={() => setOpen(false)}
          >
            Huistechnieken
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Hoofdnavigatie">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="text-sm text-charcoal hover:text-accent transition-colors flex items-center gap-1"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setServicesOpen((v) => !v)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setServicesOpen(false);
                }}
              >
                Diensten
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div
                    className="bg-white border border-warm-gray shadow-sm py-2"
                    role="menu"
                    onKeyDown={(e) => {
                      if (e.key === "Escape") setServicesOpen(false);
                    }}
                  >
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        role="menuitem"
                        className="block px-4 py-2.5 text-sm text-charcoal hover:bg-off-white hover:text-accent transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/projecten/" className="text-sm text-charcoal hover:text-accent transition-colors">
              Projecten
            </Link>
            <Link href="/over-ons/" className="text-sm text-charcoal hover:text-accent transition-colors">
              Over ons
            </Link>
            <Link href="/contact/" className="text-sm text-charcoal hover:text-accent transition-colors">
              Contact
            </Link>
            <Link
              href="/offerte/"
              className="ml-2 inline-flex items-center px-5 py-2.5 text-sm font-medium bg-accent text-white hover:bg-charcoal transition-colors"
            >
              Offerte aanvragen
            </Link>
          </nav>

          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href="/offerte/"
              className="text-sm font-medium text-accent"
              onClick={() => setOpen(false)}
            >
              Offerte
            </Link>
            <button
              type="button"
              className="p-2 text-charcoal"
              aria-label={open ? "Menu sluiten" : "Menu openen"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 top-16 bg-off-white z-40 overflow-y-auto">
          <nav className="px-5 py-8 space-y-1" aria-label="Mobiele navigatie">
            <p className="section-label mb-4">Diensten</p>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block py-3 text-lg text-charcoal border-b border-warm-gray"
                onClick={() => setOpen(false)}
              >
                {s.label}
              </Link>
            ))}
            <div className="pt-6 space-y-3">
              <Link
                href="/projecten/"
                className="block py-3 text-lg text-charcoal"
                onClick={() => setOpen(false)}
              >
                Projecten
              </Link>
              <Link
                href="/over-ons/"
                className="block py-3 text-lg text-charcoal"
                onClick={() => setOpen(false)}
              >
                Over ons
              </Link>
              <Link
                href="/contact/"
                className="block py-3 text-lg text-charcoal"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/offerte/"
                className="mt-4 inline-flex w-full justify-center items-center px-6 py-4 text-base font-medium bg-accent text-white"
                onClick={() => setOpen(false)}
              >
                Offerte aanvragen
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
