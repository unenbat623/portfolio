import type { MetadataRoute } from "next";

const siteUrl = "https://portfolio-pied-six-dry6wymwrj.vercel.app"; // өөрийн домэйн авбал энд солино

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
