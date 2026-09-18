import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/offerte/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op met Huistechnieken BV in Oosterzele voor vragen of een offerte.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <section className="pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="mx-auto max-w-content px-5 md:px-8 lg:px-12">
        <p className="section-label mb-4">Contact</p>
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-charcoal mb-8">
          Neem contact op
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-sm font-medium text-charcoal mb-2">Adres</h2>
              <address className="not-italic text-mid-gray leading-relaxed">
                Huistechnieken BV
                <br />
                Reigerstraat 13
                <br />
                9860 Oosterzele
                <br />
                België
              </address>
            </div>
            <div>
              <h2 className="text-sm font-medium text-charcoal mb-2">Bedrijfsgegevens</h2>
              <p className="text-mid-gray">BTW BE 0750.622.325</p>
            </div>
            <div className="border border-warm-gray p-5">
              <p className="text-sm font-medium text-charcoal mb-2">Liever meteen een schatting?</p>
              <p className="text-sm text-mid-gray mb-4 leading-relaxed">
                Stel een indicatieve prijsschatting samen voor elektriciteit, airco, badkamer,
                verwarming en meer — daarna stuurt u uw aanvraag door.
              </p>
              <Link
                href="/offerte/"
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium bg-accent text-white hover:bg-charcoal transition-colors"
              >
                Offerte met schatting
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
