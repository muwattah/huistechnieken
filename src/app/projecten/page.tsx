import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projecten",
  description:
    "Realisaties van Huistechnieken in Oosterzele en omgeving: badkamer, sanitair, verwarming, elektriciteit en ventilatie.",
  alternates: { canonical: "/projecten/" },
};

/** Foto's overgenomen van https://www.huistechnieken.be/projecten */
const projects = [
  {
    src: "https://static.wixstatic.com/media/ae0042_09413560aa6a4c61b1bc712dc1180640~mv2.jpeg/v1/fill/w_1400,h_1050,al_c,q_85/p.jpg",
    alt: "Realisatie Huistechnieken",
  },
  {
    src: "https://static.wixstatic.com/media/ae0042_11dcd0ee5d5847e4b9f57493f491c75d~mv2.jpeg/v1/fill/w_1400,h_1050,al_c,q_85/p.jpg",
    alt: "Realisatie Huistechnieken",
  },
  {
    src: "https://static.wixstatic.com/media/ae0042_12a67eca0d444d30838fb46419780103~mv2.jpeg/v1/fill/w_1400,h_1050,al_c,q_85/p.jpg",
    alt: "Realisatie Huistechnieken",
  },
  {
    src: "https://static.wixstatic.com/media/ae0042_2d9aef738dc94247b7d4b424332d50e4~mv2.jpeg/v1/fill/w_1400,h_1050,al_c,q_85/p.jpg",
    alt: "Realisatie Huistechnieken",
  },
  {
    src: "https://static.wixstatic.com/media/ae0042_3d8d8c0673924e7f9545e3d9b5f49621~mv2.jpeg/v1/fill/w_1400,h_1050,al_c,q_85/p.jpg",
    alt: "Realisatie Huistechnieken",
  },
  {
    src: "https://static.wixstatic.com/media/ae0042_4498bcaf738049c7b56b6b56bde305bc~mv2.jpeg/v1/fill/w_1400,h_1050,al_c,q_85/p.jpg",
    alt: "Realisatie Huistechnieken",
  },
  {
    src: "https://static.wixstatic.com/media/ae0042_4c65aabc524e4ce0969bba324d9faa3f~mv2.jpeg/v1/fill/w_1400,h_1050,al_c,q_85/p.jpg",
    alt: "Realisatie Huistechnieken",
  },
  {
    src: "https://static.wixstatic.com/media/ae0042_4d1a0de649f64bf19bfdb283ac51a52f~mv2.jpeg/v1/fill/w_1400,h_1050,al_c,q_85/p.jpg",
    alt: "Realisatie Huistechnieken",
  },
  {
    src: "https://static.wixstatic.com/media/ae0042_99392411e32847d5a7231dc52f65233a~mv2.jpeg/v1/fill/w_1400,h_1050,al_c,q_85/p.jpg",
    alt: "Realisatie Huistechnieken",
  },
  {
    src: "https://static.wixstatic.com/media/ae0042_bd30d8bb95d741e0ab901f0cbbb10f90~mv2.jpeg/v1/fill/w_1400,h_1050,al_c,q_85/p.jpg",
    alt: "Realisatie Huistechnieken",
  },
  {
    src: "https://static.wixstatic.com/media/ae0042_d12722e56bfb4ef897193dd2b34d361f~mv2.jpeg/v1/fill/w_1400,h_1050,al_c,q_85/p.jpg",
    alt: "Realisatie Huistechnieken",
  },
  {
    src: "https://static.wixstatic.com/media/ae0042_d17f7a96cac040c29b0acea80f9c1d6a~mv2.webp",
    alt: "Realisatie Huistechnieken",
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
          Een selectie uit onze realisaties in Oosterzele en omgeving —
          sanitair, verwarming, elektriciteit en ventilatie.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
          {projects.map((p, i) => (
            <div
              key={i}
              className="aspect-[4/3] bg-warm-gray overflow-hidden border border-warm-gray"
            >
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-full object-cover"
                loading={i < 3 ? "eager" : "lazy"}
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
                  Stel een indicatieve schatting samen of vraag een plaatsbezoek aan.
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
