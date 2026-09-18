import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projecten",
  description:
    "Realisaties van Huistechnieken in Oosterzele en omgeving: badkamer, sanitair, verwarming, elektriciteit en ventilatie.",
  alternates: { canonical: "/projecten/" },
};

export default function ProjectenPage() {
  return (
    <section className="pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="mx-auto max-w-content px-5 md:px-8 lg:px-12">
        <p className="section-label mb-4">Projecten</p>
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-charcoal mb-6 max-w-2xl">
          Uitgevoerde installaties
        </h1>
        <p className="text-lg text-mid-gray max-w-2xl mb-6 leading-relaxed">
          Hier verzamelen we projecten die de combinatie tonen van technische keuzes,
          netjes uitgevoerd leidingwerk en een oplevering die de woning verder brengt.
        </p>
        <p className="text-base text-mid-gray max-w-2xl mb-16 leading-relaxed">
          De fotogalerij wordt aangevuld met gedocumenteerde realisaties. Tot die tijd
          vindt u hier de opbouw: ruimte voor cases, context over het type werk, en
          een directe route naar een offerte.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          <div className="aspect-[4/3] bg-warm-gray/50 border border-warm-gray flex flex-col items-center justify-center p-8">
            <p className="section-label mb-3">In voorbereiding</p>
            <p className="text-sm text-mid-gray text-center max-w-xs">
              Projectfotografie en korte casebeschrijvingen worden hier geplaatst
              zodra de documentatie beschikbaar is.
            </p>
          </div>
          <div className="aspect-[4/3] bg-warm-gray/30 border border-warm-gray flex flex-col items-center justify-center p-8">
            <p className="section-label mb-3">Structuur klaar</p>
            <p className="text-sm text-mid-gray text-center max-w-xs">
              Elke realisatie krijgt titel, type techniek, korte toelichting en
              eventueel een reeks foto’s van voor, tijdens en na.
            </p>
          </div>
        </div>

        <div className="border-t border-warm-gray pt-12 md:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-7">
              <h2 className="text-xl md:text-2xl font-medium text-charcoal mb-4">
                Wat u hier later ziet
              </h2>
              <ul className="space-y-3 text-mid-gray text-sm md:text-base leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-accent shrink-0">—</span>
                  Badkamerrenovaties met aandacht voor leidingen, afvoeren en afwerking
                </li>
                <li className="flex gap-3">
                  <span className="text-accent shrink-0">—</span>
                  Verwarmings- en warmtepompsystemen afgestemd op de woning
                </li>
                <li className="flex gap-3">
                  <span className="text-accent shrink-0">—</span>
                  Elektrische installaties, borden en uitbreidingen
                </li>
                <li className="flex gap-3">
                  <span className="text-accent shrink-0">—</span>
                  Ventilatie en gecombineerde technieken in renovatie of nieuwbouw
                </li>
              </ul>
            </div>
            <div className="md:col-span-5">
              <div className="border border-warm-gray bg-white p-6 md:p-8">
                <p className="section-label mb-3">Uw project</p>
                <p className="text-charcoal font-medium mb-3">
                  Heeft u een installatie of renovatie in gedachten?
                </p>
                <p className="text-sm text-mid-gray mb-6 leading-relaxed">
                  Beschrijf het kort. We bekijken de mogelijkheden en plannen bij voorkeur een plaatsbezoek.
                </p>
                <Link
                  href="/offerte/"
                  className="inline-flex w-full justify-center items-center px-5 py-3 text-sm font-medium bg-accent text-white hover:bg-charcoal transition-colors"
                >
                  Offerte aanvragen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
