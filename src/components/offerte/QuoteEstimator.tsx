"use client";

import { useEffect, useMemo, useState } from "react";
import { SERVICE_CONFIGS, formatEuro, type ServiceConfig } from "@/lib/pricing";

type QtyMap = Record<string, number>;

export type EstimateResult = {
  lines: { label: string; qty: number; unitPrice: number; total: number }[];
  totalMin: number;
  totalMax: number;
  servicesSelected: string[];
};

type Props = {
  onEstimateChange?: (result: EstimateResult) => void;
};

export function QuoteEstimator({ onEstimateChange }: Props) {
  const [active, setActive] = useState<string[]>([]);
  const [qty, setQty] = useState<QtyMap>({});

  function toggleService(id: string) {
    setActive((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  function setOptionQty(optionId: string, value: number, max: number) {
    const v = Math.max(0, Math.min(max, value));
    setQty((q) => ({ ...q, [optionId]: v }));
  }

  const result = useMemo(() => {
    const lines: EstimateResult["lines"] = [];
    for (const svc of SERVICE_CONFIGS) {
      if (!active.includes(svc.id)) continue;
      for (const opt of svc.options) {
        const q = qty[opt.id] ?? 0;
        if (q <= 0) continue;
        lines.push({
          label: `${svc.title}: ${opt.label}`,
          qty: q,
          unitPrice: opt.unitPrice,
          total: q * opt.unitPrice,
        });
      }
    }
    const subtotal = lines.reduce((s, l) => s + l.total, 0);
    const totalMin = Math.round(subtotal * 0.85);
    const totalMax = Math.round(subtotal * 1.15);
    const servicesSelected = SERVICE_CONFIGS.filter((s) => active.includes(s.id)).map(
      (s) => s.title
    );
    return { lines, totalMin, totalMax, servicesSelected, subtotal };
  }, [active, qty]);

  useEffect(() => {
    onEstimateChange?.({
      lines: result.lines,
      totalMin: result.totalMin,
      totalMax: result.totalMax,
      servicesSelected: result.servicesSelected,
    });
  }, [result, onEstimateChange]);

  return (
    <div className="space-y-10">
      <div className="border border-warm-gray bg-warm-gray/30 px-4 py-3 text-sm text-mid-gray leading-relaxed">
        <strong className="text-charcoal font-medium">Indicatieve schatting.</strong>{" "}
        Bedragen zijn richtprijzen ter oriëntatie, geen offerte. De echte prijs hangt af van
        plaatsbezoek, materialen en situatie ter plaatse.
      </div>

      <div>
        <h2 className="text-lg font-medium text-charcoal mb-4">Kies diensten</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SERVICE_CONFIGS.map((svc) => {
            const on = active.includes(svc.id);
            return (
              <button
                key={svc.id}
                type="button"
                onClick={() => toggleService(svc.id)}
                className={`text-left p-4 border transition-colors ${
                  on ? "border-accent bg-accent/5" : "border-warm-gray hover:border-charcoal/30"
                }`}
              >
                <span className="block text-sm font-medium text-charcoal">{svc.title}</span>
                <span className="block text-xs text-mid-gray mt-1">{svc.description}</span>
              </button>
            );
          })}
        </div>
      </div>

      {active.map((id) => {
        const svc = SERVICE_CONFIGS.find((s) => s.id === id) as ServiceConfig;
        return (
          <div key={svc.id} className="border border-warm-gray p-5 md:p-6">
            <h3 className="text-base font-medium text-charcoal mb-4">{svc.title}</h3>
            <div className="space-y-4">
              {svc.options.map((opt) => {
                const q = qty[opt.id] ?? 0;
                const max = opt.maxQty ?? 10;
                return (
                  <div
                    key={opt.id}
                    className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 border-t border-warm-gray pt-4 first:border-0 first:pt-0"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-charcoal">{opt.label}</p>
                      <p className="text-xs text-mid-gray mt-0.5">
                        {formatEuro(opt.unitPrice)}
                        {opt.unit ? ` · ${opt.unit}` : ""}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        aria-label="Minder"
                        onClick={() => setOptionQty(opt.id, q - 1, max)}
                        className="w-9 h-9 border border-warm-gray text-charcoal hover:border-charcoal transition-colors"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        min={0}
                        max={max}
                        value={q}
                        onChange={(e) => setOptionQty(opt.id, Number(e.target.value) || 0, max)}
                        className="w-14 h-9 border border-warm-gray text-center text-sm text-charcoal focus:border-accent focus:outline-none"
                      />
                      <button
                        type="button"
                        aria-label="Meer"
                        onClick={() => setOptionQty(opt.id, q + 1, max)}
                        className="w-9 h-9 border border-warm-gray text-charcoal hover:border-charcoal transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <div className="sm:w-24 text-right text-sm font-medium text-charcoal tabular-nums">
                      {q > 0 ? formatEuro(q * opt.unitPrice) : "\u2014"}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {result.lines.length > 0 && (
        <div className="border border-charcoal bg-white p-5 md:p-6">
          <p className="section-label mb-3">Uw selectie</p>
          <ul className="space-y-2 mb-6">
            {result.lines.map((l, i) => (
              <li key={i} className="flex justify-between gap-4 text-sm">
                <span className="text-mid-gray">
                  {l.label}
                  {l.qty > 1 ? ` × ${l.qty}` : ""}
                </span>
                <span className="text-charcoal tabular-nums shrink-0">{formatEuro(l.total)}</span>
              </li>
            ))}
          </ul>
          <div className="border-t border-warm-gray pt-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <div>
              <p className="text-xs uppercase tracking-wider text-mid-gray mb-1">
                Indicatieve bandbreedte
              </p>
              <p className="text-xl md:text-2xl font-medium text-charcoal tabular-nums">
                {formatEuro(result.totalMin)} – {formatEuro(result.totalMax)}
              </p>
            </div>
            <p className="text-xs text-mid-gray max-w-xs sm:text-right">
              Geen bindende prijs. Na plaatsbezoek volgt een concrete offerte.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
