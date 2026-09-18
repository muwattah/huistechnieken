import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Huistechnieken | Sanitair, verwarming, elektriciteit & ventilatie in Oosterzele",
  description:
    "Professionele installaties voor badkamer, verwarming, warmtepompen, elektriciteit en ventilatie. Huistechnieken BV in Oosterzele.",
  alternates: { canonical: "/" },
};

const services = [
  {
    number: "01",
    title: "Badkamerrenovatie",
    description:
      "Van leidingwerk tot afwerking. Een doordachte renovatie die comfort en techniek combineert.",
    href: "/diensten/badkamerrenovatie/",
  },
  {
    number: "02",
    title: "Sanitair",
    description:
      "Sanitaire installaties, waterleidingen en warmwateroplossingen voor nieuwbouw en renovatie.",
    href: "/diensten/sanitair/",
  },
  {
    number: "03",
    title: "Verwarming",
    description:
      "Centrale verwarming, vervanging en energiezuinige warmteverdeling in uw woning.",
    href: "/diensten/verwarming/",
  },
  {
    number: "04",
    title: "Warmtepompen",
    description:
      "Analyse, dimensionering en plaatsing van warmtepompsystemen afgestemd op uw woning.",
    href: "/diensten/warmtepompen/",
  },
  {
    number: "05",
    title: "Elektriciteit",
    description:
      "Nieuwe installaties, renovatie, verdeelborden, verlichting en slimme sturingen.",
    href: "/diensten/elektriciteit/",
  },
  {
    number: "06",
    title: "Ventilatie",
    description:
      "Gecontroleerde ventilatie voor een gezond binnenklimaat bij renovatie en nieuwbouw.",
    href: "/diensten/ventilatie/",
  },
];

const steps = [
  {
    title: "Analyse",
    text: "We bekijken uw woning, wensen en de technische mogelijkheden op locatie.",
  },
  {
    title: "Voorstel",
    text: "U ontvangt een duidelijk voorstel met aanpak, materialen en planning.",
  },
  {
    title: "Uitvoering",
    text: "Vakkundige plaatsing met aandacht voor netheid en correcte aansluitingen.",
  },
  {
    title: "Oplevering",
    text: "We lichten de installatie toe en blijven bereikbaar voor nazorg.",
  },
];

const faqs = [
  {
    q: "In welke regio is Huistechnieken actief?",
    a: "Huistechnieken is gevestigd in Oosterzele (Oost-Vlaanderen) en werkt in de ruimere regio. Neem contact op om te bevestigen of we uw projectlocatie kunnen bedienen.",
  },
  {
    q: "Kan ik meerdere technieken in één project combineren?",
    a: "Ja. Badkamer, sanitair, verwarming, elektriciteit en ventilatie kunnen in samenhang worden bekeken, zodat leidingen, aansluitingen en planning op elkaar afgestemd zijn.",
  },
  {
    q: "Hoe verloopt een offerteaanvraag?",
    a: "Via het offerteformulier of telefonisch. We plannen bij voorkeur een plaatsbezoek zodat het voorstel aansluit bij de reële situatie van uw woning.",
  },
  {
    q: "Werken jullie voor nieuwbouw en renovatie?",
    a: "Beide. De aanpak verschilt per project: bij renovatie houden we rekening met bestaande leidingen en constructie; bij nieuwbouw starten we vanaf het installatieplan.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
        <div className="mx-auto max-w-content px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <p className="section-label mb-6">Huistechnieken · Oosterzele</p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-medium tracking-tight leading-[1.1] text-charcoal mb-6">
                Technieken voor uw woning, van badkamer tot energie
              </h1>
              <p className="text-lg text-mid-gray leading-relaxed max-w-xl mb-10">
                Sanitair, verwarming, warmtepompen, elektriciteit en ventilatie —
                doordacht ontworpen en professioneel uitgevoerd.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/offerte/"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium bg-accent text-white hover:bg-charcoal transition-colors"
                >
                  Offerte aanvragen
                </Link>
                <Link
                  href="/diensten/"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors"
                >
                  Bekijk diensten
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] bg-warm-gray relative overflow-hidden">
                <img
                  src="https://static.wixstatic.com/media/11062b_aef3b79b6fa24e0185f4fd2725eb0e55~mv2.jpg/v1/fill/w_1200,h_1500,al_c,q_85,usm_0.66_1.00_0.01/hero.jpg"
                  alt="Huistechnieken \u2014 technische installaties"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-warm-gray">
        <div className="mx-auto max-w-content px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <p className="section-label mb-4">Aanpak</p>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-charcoal">
                Technieken die samenwerken in uw woning
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base md:text-lg text-mid-gray leading-relaxed mb-6">
                Bij renovatie of nieuwbouw bepalen leidingen, elektriciteit, verwarming
                en ventilatie in grote mate het comfort en de energieprestatie van uw woning.
                Huistechnieken begeleidt particuliere projecten van advies tot oplevering,
                met aandacht voor een nette uitvoering en correcte technische keuzes.
              </p>
              <p className="text-base text-mid-gray leading-relaxed">
                Gevestigd in Oosterzele, actief sinds 2020. We werken met een persoonlijke
                aanpak: eerst begrijpen wat de woning nodig heeft, daarna een helder voorstel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-warm-gray/40">
        <div className="mx-auto max-w-content px-5 md:px-8 lg:px-12">
          <div className="mb-14 md:mb-16">
            <p className="section-label mb-4">Diensten</p>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-charcoal max-w-lg">
              Wat we voor u kunnen realiseren
            </h2>
          </div>

          <div className="space-y-0">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-t border-warm-gray hover:bg-off-white/60 transition-colors -mx-5 px-5 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12"
              >
                <div className="col-span-2 md:col-span-1">
                  <span className="text-sm text-mid-gray font-medium tabular-nums">{s.number}</span>
                </div>
                <div className="col-span-10 md:col-span-4">
                  <h3 className="text-lg md:text-xl font-medium text-charcoal group-hover:text-accent transition-colors">
                    {s.title}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-5 md:col-start-7">
                  <p className="text-sm md:text-base text-mid-gray leading-relaxed">{s.description}</p>
                </div>
                <div className="hidden md:flex col-span-1 items-center justify-end">
                  <svg
                    className="w-5 h-5 text-mid-gray group-hover:text-accent group-hover:translate-x-1 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
            <div className="border-t border-warm-gray" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-content px-5 md:px-8 lg:px-12">
          <div className="mb-14">
            <p className="section-label mb-4">Werkwijze</p>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-charcoal">
              Van eerste gesprek tot oplevering
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="relative">
                <span className="text-xs text-mid-gray font-medium tabular-nums mb-3 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-medium text-charcoal mb-2">{step.title}</h3>
                <p className="text-sm text-mid-gray leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-charcoal text-off-white">
        <div className="mx-auto max-w-content px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="section-label text-mid-gray mb-4">Integratie</p>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
                Één aanspreekpunt voor meerdere technieken
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <p className="text-off-white/80 leading-relaxed">
                In veel woningen lopen sanitair, verwarming, elektriciteit en ventilatie
                door dezelfde ruimtes. Door deze technieken in samenhang te bekijken,
                vermijden we conflicten in leidingtracés, houden we de planning overzichtelijk
                en blijft de afwerking netjes.
              </p>
              <p className="text-off-white/80 leading-relaxed">
                Of het nu gaat om een badkamerrenovatie met nieuwe leidingen en verlichting,
                of om een combinatie van warmtepomp en aangepaste elektriciteit: we denken
                mee over de totale installatie.
              </p>
              <Link
                href="/offerte/"
                className="inline-flex items-center gap-2 text-sm font-medium text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors"
              >
                Bespreek uw project
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-content px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="section-label mb-4">Over ons</p>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-charcoal mb-6">
                Huistechnieken BV
              </h2>
              <p className="text-mid-gray leading-relaxed mb-6">
                Gevestigd in Oosterzele, actief sinds 2020. We focussen op technische
                installaties voor woningen en renovaties: van sanitair en badkamer tot
                verwarming, elektriciteit en ventilatie.
              </p>
              <Link
                href="/over-ons/"
                className="text-sm font-medium text-accent hover:text-charcoal transition-colors"
              >
                Meer over Huistechnieken →
              </Link>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <dl className="space-y-6 border-l border-warm-gray pl-8">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-mid-gray mb-1">Vestiging</dt>
                  <dd className="text-charcoal">Reigerstraat 13, 9860 Oosterzele</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-mid-gray mb-1">Ondernemingsnummer</dt>
                  <dd className="text-charcoal">BE 0750.622.325</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-mid-gray mb-1">Actief sinds</dt>
                  <dd className="text-charcoal">2020</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-warm-gray/40">
        <div className="mx-auto max-w-content px-5 md:px-8 lg:px-12">
          <div className="mb-12">
            <p className="section-label mb-4">Veelgestelde vragen</p>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-charcoal">
              Antwoorden op veelgestelde vragen
            </h2>
          </div>
          <div className="max-w-3xl space-y-0">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group border-t border-warm-gray py-5 open:pb-6"
              >
                <summary className="flex justify-between items-start cursor-pointer list-none text-left">
                  <span className="text-base font-medium text-charcoal pr-8">{faq.q}</span>
                  <span className="text-mid-gray group-open:rotate-45 transition-transform text-xl leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-mid-gray leading-relaxed pr-12">{faq.a}</p>
              </details>
            ))}
            <div className="border-t border-warm-gray" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-content px-5 md:px-8 lg:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-charcoal mb-4">
            Klaar om uw project te bespreken?
          </h2>
          <p className="text-mid-gray max-w-lg mx-auto mb-8">
            Vertel ons kort waarmee we u kunnen helpen. We nemen contact op voor een
            vrijblijvend gesprek of plaatsbezoek.
          </p>
          <Link
            href="/offerte/"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium bg-accent text-white hover:bg-charcoal transition-colors"
          >
            Offerte aanvragen
          </Link>
        </div>
      </section>
    </>
  );
}
