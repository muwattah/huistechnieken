import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Overzicht van onze diensten: badkamerrenovatie, sanitair, verwarming, warmtepompen, elektriciteit en ventilatie.",
  alternates: { canonical: "/diensten/" },
};

export default function DienstenPage() {
  return (
    <section className="pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="mx-auto max-w-content px-5 md:px-8 lg:px-12">
        <p className="section-label mb-4">Diensten</p>
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-charcoal mb-6 max-w-xl">
          Technische installaties voor uw woning
        </h1>
        <p className="text-lg text-mid-gray max-w-2xl mb-16">
          Van badkamer en sanitair tot verwarming, warmtepompen, elektriciteit en ventilatie.
        </p>

        <div className="space-y-0">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/diensten/${s.slug}/`}
              className="group grid grid-cols-12 gap-4 md:gap-8 py-8 border-t border-warm-gray hover:bg-warm-gray/30 transition-colors -mx-5 px-5 md:-mx-8 md:px-8"
            >
              <span className="col-span-2 md:col-span-1 text-sm text-mid-gray tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="col-span-10 md:col-span-4 text-lg font-medium text-charcoal group-hover:text-accent transition-colors">
                {s.title}
              </span>
              <span className="col-span-12 md:col-span-6 text-sm text-mid-gray">
                {s.description}
              </span>
            </Link>
          ))}
          <div className="border-t border-warm-gray" />
        </div>
      </div>
    </section>
  );
}
