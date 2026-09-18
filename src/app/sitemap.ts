import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.huistechnieken.be";
  const routes = [
    "",
    "/diensten/",
    "/diensten/badkamerrenovatie/",
    "/diensten/sanitair/",
    "/diensten/verwarming/",
    "/diensten/warmtepompen/",
    "/diensten/elektriciteit/",
    "/diensten/ventilatie/",
    "/projecten/",
    "/over-ons/",
    "/offerte/",
    "/contact/",
    "/privacy/",
    "/cookies/",
  ];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date("2026-09-18"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
