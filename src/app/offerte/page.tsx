"use client";

import { useState } from "react";
import Link from "next/link";

const serviceOptions = [
  "Badkamerrenovatie",
  "Sanitair",
  "Verwarming",
  "Warmtepomp",
  "Elektriciteit",
  "Ventilatie",
  "Andere",
];

type FormData = {
  services: string[];
  description: string;
  postcode: string;
  gemeente: string;
  name: string;
  email: string;
  phone: string;
};

const initial: FormData = {
  services: [],
  description: "",
  postcode: "",
  gemeente: "",
  name: "",
  email: "",
  phone: "",
};

export default function OffertePage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const totalSteps = 5;

  function toggleService(s: string) {
    setData((d) => ({
      ...d,
      services: d.services.includes(s)
        ? d.services.filter((x) => x !== s)
        : [...d.services, s],
    }));
  }

  function validateStep(): boolean {
    const e: Record<string, string> = {};
    if (step === 1 && data.services.length === 0) {
      e.services = "Selecteer minstens één optie.";
    }
    if (step === 2 && data.description.trim().length < 10) {
      e.description = "Beschrijf uw project kort (minstens enkele zinnen).";
    }
    if (step === 3) {
      if (!data.postcode.trim()) e.postcode = "Postcode is verplicht.";
      if (!data.gemeente.trim()) e.gemeente = "Gemeente is verplicht.";
    }
    if (step === 4) {
      if (!data.name.trim()) e.name = "Naam is verplicht.";
      if (!data.email.trim() || !/[^\s@]+@[^\s@]+\.[^\s@]+/.test(data.email)) {
        e.email = "Geldig e-mailadres is verplicht.";
      }
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function next() {
    if (validateStep()) setStep((s) => Math.min(s + 1, totalSteps));
  }

  function back() {
    setErrors({});
    setStep((s) => Math.max(s - 1, 1));
  }

  async function submit() {
    if (honeypot) return;
    if (!validateStep()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
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
          <h1 className="text-2xl font-medium text-charcoal mb-3">Aanvraag geregistreerd (demo)</h1>
          <p className="text-mid-gray mb-4">
            Dit is een preview van de offerteflow. Er is nog geen live backend aangesloten; uw gegevens zijn niet verzonden.
          </p>
          <p className="text-sm text-mid-gray mb-8">
            Zodra de site live gaat, wordt hier een echte bevestiging en opvolging gekoppeld.
          </p>
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
        <div className="max-w-xl mx-auto">
          <p className="section-label mb-4">Offerte</p>
          <h1 className="text-3xl font-medium tracking-tight text-charcoal mb-2">
            Offerte aanvragen
          </h1>
          <p className="text-mid-gray mb-10">
            Stap {step} van {totalSteps}
          </p>

          <div className="flex gap-1 mb-12" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={totalSteps}>
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={`h-0.5 flex-1 transition-colors ${i < step ? "bg-accent" : "bg-warm-gray"}`}
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
            <div>
              <h2 className="text-lg font-medium text-charcoal mb-6">Waarmee kunnen we helpen?</h2>
              <div className="space-y-3">
                {serviceOptions.map((s) => (
                  <label
                    key={s}
                    className={`flex items-center gap-3 p-4 border cursor-pointer transition-colors ${
                      data.services.includes(s)
                        ? "border-accent bg-accent/5"
                        : "border-warm-gray hover:border-charcoal/30"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={data.services.includes(s)}
                      onChange={() => toggleService(s)}
                      className="sr-only"
                    />
                    <span
                      className={`w-5 h-5 border flex items-center justify-center shrink-0 ${
                        data.services.includes(s) ? "border-accent bg-accent" : "border-warm-gray"
                      }`}
                    >
                      {data.services.includes(s) && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    <span className="text-sm text-charcoal">{s}</span>
                  </label>
                ))}
              </div>
              {errors.services && <p className="mt-3 text-sm text-error">{errors.services}</p>}
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-lg font-medium text-charcoal mb-6">Beschrijf uw project</h2>
              <textarea
                value={data.description}
                onChange={(e) => setData((d) => ({ ...d, description: e.target.value }))}
                rows={6}
                className="w-full border border-warm-gray px-4 py-3 text-sm text-charcoal bg-white focus:border-accent focus:outline-none resize-y"
                placeholder="Bijv. renovatie badkamer, nieuwe warmtepomp, uitbreiding elektriciteit…"
              />
              {errors.description && <p className="mt-3 text-sm text-error">{errors.description}</p>}
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-lg font-medium text-charcoal mb-6">Locatie van het project</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-mid-gray mb-1.5">Postcode</label>
                  <input
                    type="text"
                    value={data.postcode}
                    onChange={(e) => setData((d) => ({ ...d, postcode: e.target.value }))}
                    className="w-full border border-warm-gray px-4 py-3 text-sm text-charcoal bg-white focus:border-accent focus:outline-none"
                    placeholder="9860"
                  />
                  {errors.postcode && <p className="mt-1.5 text-sm text-error">{errors.postcode}</p>}
                </div>
                <div>
                  <label className="block text-sm text-mid-gray mb-1.5">Gemeente</label>
                  <input
                    type="text"
                    value={data.gemeente}
                    onChange={(e) => setData((d) => ({ ...d, gemeente: e.target.value }))}
                    className="w-full border border-warm-gray px-4 py-3 text-sm text-charcoal bg-white focus:border-accent focus:outline-none"
                    placeholder="Oosterzele"
                  />
                  {errors.gemeente && <p className="mt-1.5 text-sm text-error">{errors.gemeente}</p>}
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-lg font-medium text-charcoal mb-6">Uw gegevens</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-mid-gray mb-1.5">Naam</label>
                  <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))}
                    className="w-full border border-warm-gray px-4 py-3 text-sm text-charcoal bg-white focus:border-accent focus:outline-none"
                  />
                  {errors.name && <p className="mt-1.5 text-sm text-error">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm text-mid-gray mb-1.5">E-mail</label>
                  <input
                    type="email"
                    value={data.email}
                    onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
                    className="w-full border border-warm-gray px-4 py-3 text-sm text-charcoal bg-white focus:border-accent focus:outline-none"
                  />
                  {errors.email && <p className="mt-1.5 text-sm text-error">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm text-mid-gray mb-1.5">Telefoon (optioneel)</label>
                  <input
                    type="tel"
                    value={data.phone}
                    onChange={(e) => setData((d) => ({ ...d, phone: e.target.value }))}
                    className="w-full border border-warm-gray px-4 py-3 text-sm text-charcoal bg-white focus:border-accent focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <h2 className="text-lg font-medium text-charcoal mb-6">Controleer uw aanvraag</h2>
              <dl className="space-y-4 text-sm border border-warm-gray p-5 bg-white">
                <div>
                  <dt className="text-mid-gray mb-1">Diensten</dt>
                  <dd className="text-charcoal">{data.services.join(", ") || "—"}</dd>
                </div>
                <div>
                  <dt className="text-mid-gray mb-1">Beschrijving</dt>
                  <dd className="text-charcoal whitespace-pre-wrap">{data.description || "—"}</dd>
                </div>
                <div>
                  <dt className="text-mid-gray mb-1">Locatie</dt>
                  <dd className="text-charcoal">{data.postcode} {data.gemeente}</dd>
                </div>
                <div>
                  <dt className="text-mid-gray mb-1">Contact</dt>
                  <dd className="text-charcoal">{data.name}<br />{data.email}{data.phone ? <><br />{data.phone}</> : null}</dd>
                </div>
              </dl>
              <p className="mt-4 text-xs text-mid-gray">
                Door te verzenden gaat u akkoord met de verwerking van uw gegevens voor deze aanvraag (zie privacy).
              </p>
            </div>
          )}

          <div className="mt-10 flex gap-3">
            {step > 1 && (
              <button
                type="button"
                onClick={back}
                className="px-6 py-3 text-sm font-medium border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors"
              >
                Terug
              </button>
            )}
            {step < totalSteps ? (
              <button
                type="button"
                onClick={next}
                className="flex-1 px-6 py-3 text-sm font-medium bg-accent text-white hover:bg-charcoal transition-colors"
              >
                Volgende
              </button>
            ) : (
              <button
                type="button"
                onClick={submit}
                disabled={loading}
                className="flex-1 px-6 py-3 text-sm font-medium bg-accent text-white hover:bg-charcoal transition-colors disabled:opacity-60"
              >
                {loading ? "Even geduld…" : "Aanvraag verzenden"}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
