import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.huistechnieken.be"),
  title: {
    default: "Huistechnieken | Sanitair, verwarming, elektriciteit & ventilatie in Oosterzele",
    template: "%s | Huistechnieken",
  },
  description:
    "Professionele installaties voor badkamer, verwarming, warmtepompen, elektriciteit en ventilatie. Huistechnieken BV in Oosterzele.",
  openGraph: {
    type: "website",
    locale: "nl_BE",
    siteName: "Huistechnieken",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Huistechnieken BV",
  url: "https://www.huistechnieken.be",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Reigerstraat 13",
    addressLocality: "Oosterzele",
    postalCode: "9860",
    addressCountry: "BE",
  },
  vatID: "BE0750622325",
  foundingDate: "2020",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Oost-Vlaanderen",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl-BE" className={instrumentSans.variable}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-charcoal"
        >
          Ga naar inhoud
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
