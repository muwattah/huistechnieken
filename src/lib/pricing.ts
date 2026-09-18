/**
 * Indicatieve richtprijzen (BE, 2025–2026) ter oriëntatie — géén offerte.
 * Gebaseerd op gangbare installatieprijzen in Vlaanderen; eigenaar kan bijsturen.
 */
export type Option = {
  id: string;
  label: string;
  unitPrice: number;
  unit?: string;
  maxQty?: number;
  defaultQty?: number;
};

export type ServiceConfig = {
  id: string;
  title: string;
  description: string;
  options: Option[];
};

export const SERVICE_CONFIGS: ServiceConfig[] = [
  {
    id: "elektriciteit",
    title: "Elektriciteit",
    description: "Stopcontacten, groepen, bord of volledige kamers.",
    options: [
      { id: "el-kamer", label: "Elektriciteit per kamer (renovatie, basis)", unitPrice: 1450, unit: "per kamer", maxQty: 12, defaultQty: 1 },
      { id: "el-bord", label: "Nieuw verdeelbord (incl. plaatsing)", unitPrice: 1850, unit: "per stuk", maxQty: 2, defaultQty: 0 },
      { id: "el-groep", label: "Extra groep / circuit", unitPrice: 220, unit: "per stuk", maxQty: 20, defaultQty: 0 },
      { id: "el-laadpaal", label: "Aansluiting laadpaal (zonder toestel)", unitPrice: 1250, unit: "per stuk", maxQty: 2, defaultQty: 0 },
    ],
  },
  {
    id: "airco",
    title: "Airco",
    description: "Multisplit: kies binnenunits en buitenunits apart.",
    options: [
      { id: "ac-binnen", label: "Binnenunit (wand, per kamer)", unitPrice: 750, unit: "per unit", maxQty: 8, defaultQty: 1 },
      { id: "ac-buiten", label: "Buitenunit (single / multi)", unitPrice: 1650, unit: "per unit", maxQty: 4, defaultQty: 1 },
      { id: "ac-install", label: "Plaatsing, leidingen & inregeling (per binnenunit)", unitPrice: 550, unit: "per unit", maxQty: 8, defaultQty: 1 },
    ],
  },
  {
    id: "badkamer",
    title: "Badkamerrenovatie",
    description: "Technisch pakket: leidingen, sanitair, afvoer (zonder tegelwerk).",
    options: [
      { id: "bad-deel", label: "Gedeeltelijke renovatie (techniek)", unitPrice: 6200, unit: "pakket", maxQty: 1, defaultQty: 0 },
      { id: "bad-volledig", label: "Volledige technische renovatie", unitPrice: 12500, unit: "pakket", maxQty: 1, defaultQty: 0 },
      { id: "bad-douche", label: "Inloopdouche + leidingaanpassing", unitPrice: 3400, unit: "per stuk", maxQty: 2, defaultQty: 0 },
    ],
  },
  {
    id: "sanitair",
    title: "Sanitair",
    description: "Toestellen, leidingen en warm water.",
    options: [
      { id: "san-punt", label: "Sanitair aansluitpunt (nieuw)", unitPrice: 380, unit: "per punt", maxQty: 15, defaultQty: 0 },
      { id: "san-boiler", label: "Boiler / warmwatertoestel (incl. plaatsing)", unitPrice: 1750, unit: "per stuk", maxQty: 2, defaultQty: 0 },
      { id: "san-leiding", label: "Leiding vernieuwen (zichtbaar / open)", unitPrice: 85, unit: "per meter", maxQty: 50, defaultQty: 0 },
    ],
  },
  {
    id: "verwarming",
    title: "Verwarming",
    description: "Ketel, radiatoren of vloerverwarming.",
    options: [
      { id: "vw-ketel", label: "Condensatieketel vervangen (incl. plaatsing)", unitPrice: 3200, unit: "pakket", maxQty: 1, defaultQty: 0 },
      { id: "vw-radiator", label: "Radiator plaatsen of vervangen", unitPrice: 520, unit: "per stuk", maxQty: 12, defaultQty: 0 },
      { id: "vw-vloer", label: "Vloerverwarming (nat systeem)", unitPrice: 62, unit: "per m²", maxQty: 150, defaultQty: 0 },
    ],
  },
  {
    id: "warmtepomp",
    title: "Warmtepomp",
    description: "Richtprijs all-in; sterke afhankelijkheid van woning en vermogen.",
    options: [
      { id: "wp-lucht", label: "Lucht-water warmtepomp (incl. plaatsing)", unitPrice: 14500, unit: "pakket", maxQty: 1, defaultQty: 0 },
      { id: "wp-hybride", label: "Hybride warmtepomp (richt)", unitPrice: 9800, unit: "pakket", maxQty: 1, defaultQty: 0 },
      { id: "wp-analyse", label: "Haalbaarheidsanalyse op locatie", unitPrice: 280, unit: "bezoek", maxQty: 1, defaultQty: 0 },
    ],
  },
  {
    id: "ventilatie",
    title: "Ventilatie",
    description: "Gecontroleerde ventilatie bij renovatie of nieuwbouw.",
    options: [
      { id: "vent-c", label: "Systeem C (richtprijs woning)", unitPrice: 2800, unit: "pakket", maxQty: 1, defaultQty: 0 },
      { id: "vent-d", label: "Systeem D / WTW (richtprijs)", unitPrice: 7200, unit: "pakket", maxQty: 1, defaultQty: 0 },
      { id: "vent-unit", label: "Extra afzuig- of toevoerpunt", unitPrice: 320, unit: "per punt", maxQty: 10, defaultQty: 0 },
    ],
  },
];

export function formatEuro(n: number): string {
  return new Intl.NumberFormat("nl-BE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}
