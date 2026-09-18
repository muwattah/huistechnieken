import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  alternates: { canonical: "/privacy/" },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <section className="pt-28 md:pt-36 pb-20">
      <div className="mx-auto max-w-content px-5 md:px-8 lg:px-12 max-w-3xl">
        <h1 className="text-3xl font-medium text-charcoal mb-8">Privacy</h1>
        <div className="prose prose-sm text-mid-gray space-y-4 leading-relaxed">
          <p>
            Huistechnieken BV, Reigerstraat 13, 9860 Oosterzele (BTW BE 0750.622.325)
            verwerkt persoonsgegevens die u via deze website verstrekt, uitsluitend om
            uw aanvraag of vraag te behandelen.
          </p>
          <p>
            Gegevens die via het offerteformulier of contactformulier worden ingediend
            (naam, e-mail, telefoon, projectbeschrijving, locatie) worden gebruikt voor
            het opmaken van een voorstel en de opvolging daarvan. We bewaren deze gegevens
            niet langer dan nodig voor dat doel.
          </p>
          <p>
            U heeft het recht om inzage, verbetering of wissing van uw gegevens te vragen.
            Neem daarvoor contact met ons op via de gegevens op de contactpagina.
          </p>
          <p className="text-xs text-mid-gray/80 pt-4">
            Dit is een beknopte toelichting. Een volledige privacyverklaring kan later
            worden aangevuld na juridische review.
          </p>
        </div>
      </div>
    </section>
  );
}
