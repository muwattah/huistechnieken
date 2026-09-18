import Link from "next/link";

const serviceLinks = [
  { href: "/diensten/badkamerrenovatie/", label: "Badkamerrenovatie" },
  { href: "/diensten/sanitair/", label: "Sanitair" },
  { href: "/diensten/verwarming/", label: "Verwarming" },
  { href: "/diensten/warmtepompen/", label: "Warmtepompen" },
  { href: "/diensten/elektriciteit/", label: "Elektriciteit" },
  { href: "/diensten/ventilatie/", label: "Ventilatie" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-off-white">
      <div className="mx-auto max-w-content px-5 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="text-xl font-medium tracking-tight mb-4">Huistechnieken</p>
            <p className="text-sm text-mid-gray leading-relaxed max-w-xs">
              Technische installaties voor moderne woningen en renovaties. Gevestigd in Oosterzele.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="section-label text-mid-gray mb-4">Diensten</p>
            <ul className="space-y-2">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-off-white/90 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="section-label text-mid-gray mb-4">Navigatie</p>
            <ul className="space-y-2">
              <li>
                <Link href="/projecten/" className="text-sm text-off-white/90 hover:text-white transition-colors">
                  Projecten
                </Link>
              </li>
              <li>
                <Link href="/over-ons/" className="text-sm text-off-white/90 hover:text-white transition-colors">
                  Over ons
                </Link>
              </li>
              <li>
                <Link href="/offerte/" className="text-sm text-off-white/90 hover:text-white transition-colors">
                  Offerte aanvragen
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="text-sm text-off-white/90 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="section-label text-mid-gray mb-4">Contact</p>
            <address className="not-italic text-sm space-y-2 text-off-white/90">
              <p>Huistechnieken BV</p>
              <p>Reigerstraat 13</p>
              <p>9860 Oosterzele</p>
              <p className="pt-2">BTW BE 0750.622.325</p>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-mid-gray">
          <p>© {new Date().getFullYear()} Huistechnieken BV</p>
          <div className="flex gap-6">
            <Link href="/privacy/" className="hover:text-off-white transition-colors">
              Privacy
            </Link>
            <Link href="/cookies/" className="hover:text-off-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
