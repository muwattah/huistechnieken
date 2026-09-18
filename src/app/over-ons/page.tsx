import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Over ons",
  description: "Huistechnieken BV in Oosterzele. Technische installaties voor woningen en renovaties sinds 2020.",
  alternates: { canonical: "/over-ons/" },
};

export default function OverOnsPage() {
  return (
    <section className="pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="mx-auto max-w-content px-5 md:px-8 lg:px-12">
        <p className="section-label mb-4">Over ons</p>
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-charcoal max-w-2xl mb-8">
          Huistechnieken BV
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-6 text-mid-gray leading-relaxed">
            <p>
              Huistechnieken is gevestigd in Oosterzele en actief sinds 2020. We focussen
              op technische installaties voor woningen en renovaties: sanitair, badkamer,
              verwarming, warmtepompen, elektriciteit en ventilatie.
            </p>
            <p>
              Onze aanpak start bij luisteren en analyseren. Daarna volgt een helder voorstel
              met de technische keuzes die bij uw woning en wensen passen. Uitvoering gebeurt
              met aandacht voor netheid en correcte aansluitingen.
            </p>
            <p>
              Of het nu gaat om een gerichte renovatie of om de integratie van meerdere
              technieken in één project: we denken mee over de totale installatie.
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <dl className="space-y-6 border-l border-warm-gray pl-6">
              <div>
                <dt className="text-xs uppercase tracking-wider text-mid-gray mb-1">Adres</dt>
                <dd className="text-charcoal">
                  Reigerstraat 13<br />9860 Oosterzele
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-mid-gray mb-1">BTW</dt>
                <dd className="text-charcoal">BE 0750.622.325</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-mid-gray mb-1">Actief sinds</dt>
                <dd className="text-charcoal">2020</dd>
              </div>
            </dl>
            <Link
              href="/offerte/"
              className="mt-10 inline-flex items-center px-6 py-3 text-sm font-medium bg-accent text-white hover:bg-charcoal transition-colors"
            >
              Offerte aanvragen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
