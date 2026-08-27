import type { MetadataRoute } from "next";

const siteUrl = "https://example.com"; // TODO: домэйноо бичнэ үү

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
