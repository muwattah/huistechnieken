/**
 * Indicatieve richtprijzen ter oriëntatie — géén offerte.
 * Eigenaar kan later echte bedragen invullen.
 */
export type Option = {
  id: string;
  label: string;
  /** unit price in EUR, indicative */
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
      { id: "el-kamer", label: "Elektriciteit per kamer (basis)", unitPrice: 850, unit: "per kamer", maxQty: 12, defaultQty: 1 },
      { id: "el-bord", label: "Nieuw of uitgebreid verdeelbord", unitPrice: 1200, unit: "per stuk", maxQty: 2, defaultQty: 0 },
      { id: "el-groep", label: "Extra groep / circuit", unitPrice: 180, unit: "per stuk", maxQty: 20, defaultQty: 0 },
      { id: "el-laadpaal", label: "Voorbereiding / aansluiting laadpaal", unitPrice: 950, unit: "per stuk", maxQty: 2, defaultQty: 0 },
    ],
  },
  {
    id: "airco",
    title: "Airco",
    description: "Binnenunits en buitenunits — kies aantal kamers en toestellen.",
    options: [
      { id: "ac-binnen", label: "Binnenunit (per kamer)", unitPrice: 400, unit: "per unit", maxQty: 8, defaultQty: 1 },
      { id: "ac-buiten", label: "Buitenunit", unitPrice: 1100, unit: "per unit", maxQty: 4, defaultQty: 1 },
      { id: "ac-install", label: "Plaatsing & leidingwerk (per binnenunit)", unitPrice: 350, unit: "per unit", maxQty: 8, defaultQty: 1 },
    ],
  },
  {
    id: "badkamer",
    title: "Badkamerrenovatie",
    description: "Technisch pakket — sanitair, leidingen, afvoer.",
    options: [
      { id: "bad-deel", label: "Gedeeltelijke renovatie (techniek)", unitPrice: 4500, unit: "pakket", maxQty: 1, defaultQty: 0 },
      { id: "bad-volledig", label: "Volledige technische renovatie", unitPrice: 9500, unit: "pakket", maxQty: 1, defaultQty: 0 },
      { id: "bad-douche", label: "Inloopdouche + leidingaanpassing", unitPrice: 2800, unit: "per stuk", maxQty: 2, defaultQty: 0 },
    ],
  },
  {
    id: "sanitair",
    title: "Sanitair",
    description: "Toestellen, leidingen en warm water.",
    options: [
      { id: "san-punt", label: "Sanitair aansluitpunt", unitPrice: 320, unit: "per punt", maxQty: 15, defaultQty: 0 },
      { id: "san-boiler", label: "Boiler / warmwatertoestel (plaatsing)", unitPrice: 1400, unit: "per stuk", maxQty: 2, defaultQty: 0 },
      { id: "san-leiding", label: "Leidingtraject vernieuwen (l.open)", unitPrice: 95, unit: "per meter (richt)", maxQty: 40, defaultQty: 0 },
    ],
  },
  {
    id: "verwarming",
    title: "Verwarming",
    description: "Ketel, radiatoren of vloerverwarming.",
    options: [
      { id: "vw-ketel", label: "Ketelvervanging (richtprijs installatie)", unitPrice: 2800, unit: "pakket", maxQty: 1, defaultQty: 0 },
      { id: "vw-radiator", label: "Radiator plaatsen/vervangen", unitPrice: 450, unit: "per stuk", maxQty: 12, defaultQty: 0 },
      { id: "vw-vloer", label: "Vloerverwarming (per m², richt)", unitPrice: 55, unit: "per m²", maxQty: 120, defaultQty: 0 },
    ],
  },
  {
    id: "warmtepomp",
    title: "Warmtepomp",
    description: "Dimensionering en plaatsing — sterk afhankelijk van de woning.",
    options: [
      { id: "wp-lucht", label: "Lucht-water warmtepomp (richt installatie)", unitPrice: 12000, unit: "pakket", maxQty: 1, defaultQty: 0 },
      { id: "wp-hybride", label: "Hybride opstelling (richt)", unitPrice: 8500, unit: "pakket", maxQty: 1, defaultQty: 0 },
      { id: "wp-analyse", label: "Haalbaarheidsanalyse op locatie", unitPrice: 250, unit: "bezoek", maxQty: 1, defaultQty: 0 },
    ],
  },
  {
    id: "ventilatie",
    title: "Ventilatie",
    description: "Gecontroleerde ventilatie bij renovatie of nieuwbouw.",
    options: [
      { id: "vent-c", label: "Systeem C (richtprijs woning)", unitPrice: 2200, unit: "pakket", maxQty: 1, defaultQty: 0 },
      { id: "vent-d", label: "Systeem D / WTW (richtprijs)", unitPrice: 5500, unit: "pakket", maxQty: 1, defaultQty: 0 },
      { id: "vent-unit", label: "Extra afzuigpunt", unitPrice: 280, unit: "per punt", maxQty: 10, defaultQty: 0 },
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
