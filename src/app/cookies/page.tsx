import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies",
  alternates: { canonical: "/cookies/" },
  robots: { index: false },
};

export default function CookiesPage() {
  return (
    <section className="pt-28 md:pt-36 pb-20">
      <div className="mx-auto max-w-content px-5 md:px-8 lg:px-12 max-w-3xl">
        <h1 className="text-3xl font-medium text-charcoal mb-8">Cookies</h1>
        <div className="text-mid-gray space-y-4 leading-relaxed text-sm">
          <p>
            Deze website maakt in de basisversie geen gebruik van trackingcookies of
            marketingcookies. Essentiële technische cookies die nodig zijn voor het
            functioneren van de site kunnen worden geplaatst.
          </p>
          <p>
            Indien in een latere fase analytics of andere cookies worden toegevoegd,
            wordt hier een bijgewerkte toelichting en — indien wettelijk vereist —
            een toestemmingskeuze voorzien.
          </p>
        </div>
      </div>
    </section>
  );
}
