export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  sections: { title: string; content: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "badkamerrenovatie",
    title: "Badkamerrenovatie",
    shortTitle: "Badkamerrenovatie",
    description:
      "Complete of gedeeltelijke badkamerrenovatie in Oosterzele en omgeving. Van leidingwerk tot afwerking.",
    intro:
      "Een badkamerrenovatie vraagt om meer dan nieuwe tegels. Leidingen, afvoeren, elektriciteit en ventilatie moeten kloppen voordat de afwerking begint. Huistechnieken begeleidt het technische deel van uw badkamerproject, van voorbereiding tot oplevering.",
    sections: [
      {
        title: "Wat een renovatie inhoudt",
        content:
          "Afhankelijk van de staat van uw badkamer kan het gaan om het vernieuwen van sanitair en leidingen, het aanpassen van de indeling, of een volledige strip-en-rebuild. We bekijken de bestaande situatie op locatie en bepalen samen de juiste aanpak.",
      },
      {
        title: "Technische aandachtspunten",
        content:
          "Waterdichtheid, correcte hellingen van afvoeren, veilige elektrische zones en voldoende ventilatie bepalen of een badkamer jarenlang probleemloos functioneert. Deze aspecten nemen we mee in het voorstel.",
      },
      {
        title: "Werkwijze",
        content:
          "Na een plaatsbezoek ontvangt u een duidelijk voorstel. Bij akkoord plannen we de werken, stemmen we materialen en timing af en voeren we de installatie uit met aandacht voor netheid in de woning.",
      },
    ],
    faqs: [
      {
        q: "Hoe lang duurt een badkamerrenovatie?",
        a: "Dat hangt af van de omvang: een gedeeltelijke vernieuwing kan sneller, een volledige renovatie met leidingaanpassingen vraagt meer tijd. Tijdens het plaatsbezoek geven we een realistische inschatting.",
      },
      {
        q: "Kunnen jullie ook de tegels en meubels verzorgen?",
        a: "Het technische installatiedeel (leidingen, sanitair, aansluitingen) valt onder onze kernactiviteit. Voor afwerkingen werken we waar nodig samen of stemmen we af met andere vakmensen die u zelf inschakelt.",
      },
    ],
  },
  {
    slug: "sanitair",
    title: "Sanitair",
    shortTitle: "Sanitair",
    description:
      "Sanitaire installaties, waterleidingen en warmwateroplossingen voor nieuwbouw en renovatie.",
    intro:
      "Goede sanitaire installaties zorgen voor comfort en betrouwbaarheid. We ontwerpen en plaatsen leidingwerk, kranen, toiletten en warmwateroplossingen afgestemd op uw woning en gebruik.",
    sections: [
      {
        title: "Leidingwerk en sanitair",
        content:
          "Van nieuwe waterleidingen tot de aansluiting van sanitaire toestellen. We werken netjes en met aandacht voor bereikbaarheid en onderhoud.",
      },
      {
        title: "Warm water",
        content:
          "Boiler, doorstromer of combinatie met de verwarmingsinstallatie: we bekijken wat past bij uw verbruik en de rest van de technische installatie.",
      },
      {
        title: "Renovatie en uitbreiding",
        content:
          "Bij renovatie houden we rekening met bestaande leidingen en de mogelijkheden van de constructie. Uitbreidingen plannen we zodat later onderhoud eenvoudig blijft.",
      },
    ],
    faqs: [
      {
        q: "Vervangen jullie ook oude leidingen?",
        a: "Ja, waar nodig vernieuwen we leidingen. Tijdens het plaatsbezoek beoordelen we de staat en adviseren we over wat zinvol is binnen uw project.",
      },
    ],
  },
  {
    slug: "verwarming",
    title: "Verwarming",
    shortTitle: "Verwarming",
    description:
      "Centrale verwarming, vervanging en energiezuinige warmteverdeling in uw woning.",
    intro:
      "Een goed afgestemd verwarmingssysteem bepaalt comfort en energiekosten. We adviseren over ketel, radiatoren of vloerverwarming en zorgen voor een correcte uitvoering.",
    sections: [
      {
        title: "Analyse van de woning",
        content:
          "Warmteverlies, bestaande leidingen en uw comfortwensen bepalen de juiste aanpak. We starten bij voorkeur met een plaatsbezoek.",
      },
      {
        title: "Systemen en componenten",
        content:
          "Van klassieke radiatoren tot vloerverwarming of een combinatie. We stemmen de warmtebron en de afgifte op elkaar af.",
      },
      {
        title: "Vervanging en optimalisatie",
        content:
          "Bij vervanging van een ketel of radiatoren kijken we naar rendement, regeling en de mogelijkheid om later een warmtepomp te integreren.",
      },
    ],
    faqs: [
      {
        q: "Is vloerverwarming altijd beter?",
        a: "Niet per se. Het hangt af van de vloeropbouw, isolatie en hoe u de ruimtes gebruikt. We leggen de voor- en nadelen per situatie uit.",
      },
    ],
  },
  {
    slug: "warmtepompen",
    title: "Warmtepompen",
    shortTitle: "Warmtepompen",
    description:
      "Analyse, dimensionering en plaatsing van warmtepompsystemen afgestemd op uw woning.",
    intro:
      "Een warmtepomp vraagt een doordachte dimensionering en vaak aanpassingen aan de warmteafgifte. We begeleiden het traject van haalbaarheid tot plaatsing.",
    sections: [
      {
        title: "Haalbaarheid",
        content:
          "Isolatie, warmteverlies en de bestaande installatie bepalen of een warmtepomp zinvol is en welk type past. We maken dit concreet op basis van uw woning.",
      },
      {
        title: "Dimensionering en integratie",
        content:
          "Een te grote of te kleine unit werkt inefficiënt. We stemmen vermogen, regeling en eventuele bijverwarming af op het werkelijke verbruik.",
      },
      {
        title: "Uitvoering",
        content:
          "Plaatsing, leidingen, elektriciteit en inregeling horen bij een correcte oplevering. We zorgen dat het systeem begrijpelijk is voor de gebruiker.",
      },
    ],
    faqs: [
      {
        q: "Komen jullie ook de premies in orde?",
        a: "We kunnen u wijzen op relevante steunmaatregelen en de technische voorwaarden. De aanvraag zelf loopt via de bevoegde instanties; we helpen met de nodige technische gegevens.",
      },
    ],
  },
  {
    slug: "elektriciteit",
    title: "Elektriciteit",
    shortTitle: "Elektriciteit",
    description:
      "Nieuwe installaties, renovatie, verdeelborden, verlichting en slimme sturingen.",
    intro:
      "Een veilige en overzichtelijke elektrische installatie is de basis van elke woning. We verzorgen nieuwe installaties, renovaties en uitbreidingen.",
    sections: [
      {
        title: "Nieuwe installaties en renovatie",
        content:
          "Van kabeltrajecten tot stopcontacten en schakelaars. Bij renovatie respecteren we waar mogelijk de bestaande indeling en brengen we de installatie op peil.",
      },
      {
        title: "Verdeelborden",
        content:
          "We vernieuwen of breiden bestaande borden uit wanneer de woning of het verbruik dat vraagt.",
      },
      {
        title: "Verlichting en sturing",
        content:
          "Van klassieke schakelaars tot meer geavanceerde sturingen. Domotica en slimme toepassingen kunnen we meenemen wanneer dat bij het project past.",
      },
      {
        title: "Laadpaal en uitbreiding",
        content:
          "Een laadpaal of extra groepen vragen vaak een beoordeling van het bestaande bord en de aansluiting. We bekijken de mogelijkheden binnen uw installatie.",
      },
    ],
    faqs: [
      {
        q: "Verzorgen jullie ook de keuring?",
        a: "De installatie wordt uitgevoerd met het oog op conformiteit. De wettelijke keuring gebeurt door een erkend keuringsorganisme. We kunnen u hierin begeleiden.",
      },
    ],
  },
  {
    slug: "ventilatie",
    title: "Ventilatie",
    shortTitle: "Ventilatie",
    description:
      "Gecontroleerde ventilatie voor een gezond binnenklimaat bij renovatie en nieuwbouw.",
    intro:
      "Goede ventilatie voorkomt vochtproblemen en zorgt voor frisse lucht zonder onnodig energieverlies. We adviseren en installeren ventilatiesystemen afgestemd op de woning en het type project.",
    sections: [
      {
        title: "Waarom gecontroleerde ventilatie",
        content:
          "In goed geïsoleerde of gerenoveerde woningen is natuurlijke infiltratie vaak onvoldoende. Een doordacht systeem voert vochtige lucht af en brengt verse lucht binnen op een gecontroleerde manier.",
      },
      {
        title: "Systemen op maat van de woning",
        content:
          "Afhankelijk van nieuwbouw of renovatie, en van de gewenste energieprestatie, komen verschillende systeembenaderingen in aanmerking. We leggen de opties uit in begrijpelijke taal.",
      },
      {
        title: "Integratie met andere technieken",
        content:
          "Ventilatiekanalen vragen ruimte en planning. Door dit vroeg te bekijken in combinatie met sanitair, verwarming of elektriciteit, vermijden we latere conflicten.",
      },
    ],
    faqs: [
      {
        q: "Is ventilatie verplicht bij renovatie?",
        a: "Bij nieuwbouw en bepaalde ingrijpende renovaties gelden ventilatie-eisen in het kader van de energieprestatieregelgeving. Voor gewone renovaties is het vaak een sterke aanbeveling. We adviseren per project.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
