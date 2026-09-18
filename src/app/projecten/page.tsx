import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projecten",
  description:
    "Realisaties van Huistechnieken in Oosterzele en omgeving: badkamer, sanitair, verwarming, elektriciteit en ventilatie.",
  alternates: { canonical: "/projecten/" },
};

const projects = [
  {
    src: "https://static.wixstatic.com/media/11062b_1268cd6edbb644babb3f2ce2cf8b59e0~mv2.jpeg/v1/fill/w_1400,h_900,al_c,q_85/p1.jpg",
    alt: "Technische installatie \u2014 realisatie Huistechnieken",
  },
  {
    src: "https://static.wixstatic.com/media/11062b_7628ba8d231c4ed99b2b423640e85254~mv2.jpeg/v1/fill/w_1400,h_900,al_c,q_85/p2.jpg",
    alt: "Installatiewerken \u2014 realisatie Huistechnieken",
  },
  {
    src: "https://static.wixstatic.com/media/11062b_ab6dadb3cf5a4361b9bba13647bd322e~mv2.jpg/v1/fill/w_1400,h_900,al_c,q_85/p3.jpg",
    alt: "Sanitair en leidingwerk \u2014 realisatie Huistechnieken",
  },
  {
    src: "https://static.wixstatic.com/media/11062b_d22ebfb88cb7430fa4d90d79bac5f765~mv2.jpeg/v1/fill/w_1400,h_900,al_c,q_85/p4.jpg",
    alt: "Verwarming en technieken \u2014 realisatie Huistechnieken",
  },
  {
    src: "https://static.wixstatic.com/media/8dd634f7fe6f453cb59df5b5ebd90a97.jpg/v1/fill/w_1400,h_900,al_c,q_85/p5.jpg",
    alt: "Afwerking installatie \u2014 realisatie Huistechnieken",
  },
  {
    src: "https://static.wixstatic.com/media/ae0042_1e1f90367976405b92005f737d386619~mv2.webp",
    alt: "Technische installatie in woning",
  },
];

export default function ProjectenPage() {
  return (
    <section className="pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="mx-auto max-w-content px-5 md:px-8 lg:px-12">
        <p className="section-label mb-4">Projecten</p>
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-charcoal mb-6 max-w-2xl">
          Uitgevoerde installaties
        </h1>
        <p className="text-lg text-mid-gray max-w-2xl mb-16 leading-relaxed">
          Een selectie uit onze realisaties. Elke foto toont de combinatie van
          technische keuzes, nette uitvoering en oplevering in de woning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {projects.map((p, i) => (
            <div
              key={i}
              className="aspect-[4/3] bg-warm-gray overflow-hidden border border-warm-gray"
            >
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-full object-cover"
                loading={i < 2 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

        <div className="border-t border-warm-gray pt-12 md:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-7">
              <h2 className="text-xl md:text-2xl font-medium text-charcoal mb-4">
                Van badkamer tot energie
              </h2>
              <ul className="space-y-3 text-mid-gray text-sm md:text-base leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-accent shrink-0">\u2014</span>
                  Badkamerrenovaties met aandacht voor leidingen, afvoeren en afwerking
                </li>
                <li className="flex gap-3">
                  <span className="text-accent shrink-0">\u2014</span>
                  Verwarmings- en warmtepompsystemen afgestemd op de woning
                </li>
                <li className="flex gap-3">
                  <span className="text-accent shrink-0">\u2014</span>
                  Elektrische installaties, borden en uitbreidingen
                </li>
                <li className="flex gap-3">
                  <span className="text-accent shrink-0">\u2014</span>
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
