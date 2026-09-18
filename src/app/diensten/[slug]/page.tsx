import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getService } from "@/lib/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    return { title: "Dienst niet gevonden" };
  }
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/diensten/${service.slug}/` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="mx-auto max-w-content px-5 md:px-8 lg:px-12">
          <nav className="mb-8 text-sm text-mid-gray" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/diensten/" className="hover:text-accent transition-colors">
                  Diensten
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-charcoal">{service.title}</li>
            </ol>
          </nav>

          <p className="section-label mb-4">Dienst</p>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-charcoal mb-6 max-w-2xl">
            {service.title}
          </h1>
          <p className="text-lg text-mid-gray max-w-2xl leading-relaxed">
            {service.intro}
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-content px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-8 space-y-12">
              {service.sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-xl md:text-2xl font-medium text-charcoal mb-4">
                    {section.title}
                  </h2>
                  <p className="text-base text-mid-gray leading-relaxed max-w-prose">
                    {section.content}
                  </p>
                </div>
              ))}

              {service.faqs.length > 0 && (
                <div className="pt-4">
                  <h2 className="text-xl md:text-2xl font-medium text-charcoal mb-8">
                    Veelgestelde vragen
                  </h2>
                  <div className="space-y-0 border-t border-warm-gray">
                    {service.faqs.map((faq) => (
                      <details
                        key={faq.q}
                        className="group border-b border-warm-gray py-5"
                      >
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left font-medium text-charcoal hover:text-accent transition-colors">
                          <span>{faq.q}</span>
                          <span className="mt-0.5 shrink-0 text-mid-gray group-open:rotate-45 transition-transform">
                            +
                          </span>
                        </summary>
                        <p className="mt-3 text-sm text-mid-gray leading-relaxed max-w-prose pr-8">
                          {faq.a}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-8">
                <div className="border border-warm-gray p-6 md:p-8 bg-white">
                  <p className="section-label mb-3">Volgende stap</p>
                  <h2 className="text-lg font-medium text-charcoal mb-3">
                    Offerte of plaatsbezoek
                  </h2>
                  <p className="text-sm text-mid-gray mb-6 leading-relaxed">
                    Beschrijf uw project. We bekijken de mogelijkheden en plannen bij voorkeur een plaatsbezoek.
                  </p>
                  <Link
                    href="/offerte/"
                    className="inline-flex w-full justify-center items-center px-5 py-3 text-sm font-medium bg-accent text-white hover:bg-charcoal transition-colors"
                  >
                    Offerte aanvragen
                  </Link>
                  <Link
                    href="/contact/"
                    className="mt-3 inline-flex w-full justify-center items-center px-5 py-3 text-sm font-medium border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </div>

                <div>
                  <p className="section-label mb-4">Andere diensten</p>
                  <ul className="space-y-2">
                    {otherServices.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/diensten/${s.slug}/`}
                          className="text-sm text-charcoal hover:text-accent transition-colors"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
