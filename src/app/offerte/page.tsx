"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { QuoteEstimator, type EstimateResult } from "@/components/offerte/QuoteEstimator";
import { formatEuro } from "@/lib/pricing";

type ContactData = {
  name: string;
  email: string;
  phone: string;
  postcode: string;
  gemeente: string;
  message: string;
};

const emptyContact: ContactData = {
  name: "",
  email: "",
  phone: "",
  postcode: "",
  gemeente: "",
  message: "",
};

export default function OffertePage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [estimate, setEstimate] = useState<EstimateResult | null>(null);
  const [contact, setContact] = useState<ContactData>(emptyContact);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const onEstimateChange = useCallback((r: EstimateResult) => {
    setEstimate(r);
  }, []);

  function validateContact(): boolean {
    const e: Record<string, string> = {};
    if (!contact.name.trim()) e.name = "Naam is verplicht.";
    if (!contact.email.trim() || !/[^\s@]+@[^\s@]+\.[^\s@]+/.test(contact.email)) {
      e.email = "Geldig e-mailadres is verplicht.";
    }
    if (!contact.postcode.trim()) e.postcode = "Postcode is verplicht.";
    if (!contact.gemeente.trim()) e.gemeente = "Gemeente is verplicht.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function submit() {
    if (honeypot) return;
    if (!validateContact()) return;
    setLoading(true);
    try {
      const payload = {
        type: "offerte",
        contact,
        estimate: estimate
          ? {
              services: estimate.servicesSelected,
              lines: estimate.lines,
              totalMin: estimate.totalMin,
              totalMax: estimate.totalMax,
            }
          : null,
        createdAt: new Date().toISOString(),
      };
      await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => null);
      await new Promise((r) => setTimeout(r, 600));
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <section className="pt-28 md:pt-36 pb-20">
        <div className="mx-auto max-w-content px-5 md:px-8 lg:px-12 max-w-lg text-center">
          <div className="w-12 h-12 mx-auto mb-6 border-2 border-success rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-medium text-charcoal mb-3">Aanvraag ontvangen (demo)</h1>
          <p className="text-mid-gray mb-4">
            Uw selectie en gegevens zijn verwerkt voor deze preview. Bij go-live worden aanvragen
            doorgestuurd naar Huistechnieken.
          </p>
          {estimate && estimate.lines.length > 0 && (
            <p className="text-sm text-charcoal mb-6">
              Indicatieve bandbreedte:{" "}
              <strong>
                {formatEuro(estimate.totalMin)} – {formatEuro(estimate.totalMax)}
              </strong>
            </p>
          )}
          <Link href="/" className="text-sm font-medium text-accent hover:text-charcoal">
            Terug naar home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="mx-auto max-w-content px-5 md:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <p className="section-label mb-4">Offerte</p>
          <h1 className="text-3xl font-medium tracking-tight text-charcoal mb-2">
            Offerte aanvragen
          </h1>
          <p className="text-mid-gray mb-8">
            Stel eerst een indicatieve schatting samen, daarna uw gegevens.
          </p>

          <div className="flex gap-1 mb-10" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={3}>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`h-0.5 flex-1 transition-colors ${i <= step ? "bg-accent" : "bg-warm-gray"}`}
              />
            ))}
          </div>

          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label>
              Website
              <input type="text" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} />
            </label>
          </div>

          {step === 1 && (
            <>
              <QuoteEstimator onEstimateChange={onEstimateChange} />
              <div className="mt-10 flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 px-6 py-3 text-sm font-medium bg-accent text-white hover:bg-charcoal transition-colors"
                >
                  Verder met gegevens
                </button>
              </div>
              <p className="mt-3 text-xs text-mid-gray text-center">
                U mag ook zonder selectie doorgaan en alles in tekst beschrijven.
              </p>
            </>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-lg font-medium text-charcoal mb-6">Uw gegevens</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-mid-gray mb-1.5">Naam *</label>
                  <input
                    type="text"
                    value={contact.name}
                    onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                    className="w-full border border-warm-gray px-4 py-3 text-sm text-charcoal bg-white focus:border-accent focus:outline-none"
                  />
                  {errors.name && <p className="mt-1.5 text-sm text-error">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm text-mid-gray mb-1.5">E-mail *</label>
                  <input
                    type="email"
                    value={contact.email}
                    onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                    className="w-full border border-warm-gray px-4 py-3 text-sm text-charcoal bg-white focus:border-accent focus:outline-none"
                  />
                  {errors.email && <p className="mt-1.5 text-sm text-error">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm text-mid-gray mb-1.5">Telefoon</label>
                  <input
                    type="tel"
                    value={contact.phone}
                    onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                    className="w-full border border-warm-gray px-4 py-3 text-sm text-charcoal bg-white focus:border-accent focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-mid-gray mb-1.5">Postcode *</label>
                    <input
                      type="text"
                      value={contact.postcode}
                      onChange={(e) => setContact((c) => ({ ...c, postcode: e.target.value }))}
                      className="w-full border border-warm-gray px-4 py-3 text-sm text-charcoal bg-white focus:border-accent focus:outline-none"
                      placeholder="9860"
                    />
                    {errors.postcode && <p className="mt-1.5 text-sm text-error">{errors.postcode}</p>}
                  </div>
                  <div>
                    <label className="block text-sm text-mid-gray mb-1.5">Gemeente *</label>
                    <input
                      type="text"
                      value={contact.gemeente}
                      onChange={(e) => setContact((c) => ({ ...c, gemeente: e.target.value }))}
                      className="w-full border border-warm-gray px-4 py-3 text-sm text-charcoal bg-white focus:border-accent focus:outline-none"
                      placeholder="Oosterzele"
                    />
                    {errors.gemeente && <p className="mt-1.5 text-sm text-error">{errors.gemeente}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-mid-gray mb-1.5">Extra toelichting</label>
                  <textarea
                    value={contact.message}
                    onChange={(e) => setContact((c) => ({ ...c, message: e.target.value }))}
                    rows={4}
                    className="w-full border border-warm-gray px-4 py-3 text-sm text-charcoal bg-white focus:border-accent focus:outline-none resize-y"
                    placeholder="Bijv. timing, bestaande installatie, bijzonderheden…"
                  />
                </div>
              </div>
              <div className="mt-10 flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-3 text-sm font-medium border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors"
                >
                  Terug
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (validateContact()) setStep(3);
                  }}
                  className="flex-1 px-6 py-3 text-sm font-medium bg-accent text-white hover:bg-charcoal transition-colors"
                >
                  Overzicht
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-lg font-medium text-charcoal mb-6">Controleer uw aanvraag</h2>
              <dl className="space-y-4 text-sm border border-warm-gray p-5 bg-white mb-6">
                <div>
                  <dt className="text-mid-gray mb-1">Contact</dt>
                  <dd className="text-charcoal">
                    {contact.name}
                    <br />
                    {contact.email}
                    {contact.phone ? (
                      <>
                        <br />
                        {contact.phone}
                      </>
                    ) : null}
                    <br />
                    {contact.postcode} {contact.gemeente}
                  </dd>
                </div>
                {estimate && estimate.lines.length > 0 && (
                  <div>
                    <dt className="text-mid-gray mb-1">Selectie & indicatieve schatting</dt>
                    <dd className="text-charcoal space-y-1">
                      {estimate.lines.map((l, i) => (
                        <div key={i} className="flex justify-between gap-4">
                          <span>
                            {l.label}
                            {l.qty > 1 ? ` × ${l.qty}` : ""}
                          </span>
                          <span className="tabular-nums">{formatEuro(l.total)}</span>
                        </div>
                      ))}
                      <div className="pt-2 mt-2 border-t border-warm-gray font-medium flex justify-between">
                        <span>Bandbreedte</span>
                        <span className="tabular-nums">
                          {formatEuro(estimate.totalMin)} – {formatEuro(estimate.totalMax)}
                        </span>
                      </div>
                    </dd>
                  </div>
                )}
                {contact.message && (
                  <div>
                    <dt className="text-mid-gray mb-1">Toelichting</dt>
                    <dd className="text-charcoal whitespace-pre-wrap">{contact.message}</dd>
                  </div>
                )}
              </dl>
              <p className="text-xs text-mid-gray mb-6">
                De schatting is niet bindend. Door te verzenden gaat u akkoord met de verwerking
                van uw gegevens voor deze aanvraag (zie privacy).
              </p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 text-sm font-medium border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors"
                >
                  Terug
                </button>
                <button
                  type="button"
                  onClick={submit}
                  disabled={loading}
                  className="flex-1 px-6 py-3 text-sm font-medium bg-accent text-white hover:bg-charcoal transition-colors disabled:opacity-60"
                >
                  {loading ? "Even geduld…" : "Aanvraag verzenden"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
