import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...["menu", "domicilios", "grupos", "reservas", "conoce-mangia"].map((path) => ({ url: `${siteConfig.url}/${path}`, changeFrequency: "weekly" as const, priority: 0.8 })),
    {
      url: siteConfig.url,
      lastModified: new Date("2026-05-28"),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${siteConfig.url}/images/hero/hero-main.jpg`,
        `${siteConfig.url}/images/gallery/gallery-1.jpg`,
        `${siteConfig.url}/images/burgers/premier-burger.jpg`,
      ],
    },
  ];
}
