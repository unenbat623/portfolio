import type { MetadataRoute } from "next";

const siteUrl = "https://example.com"; // TODO: домэйноо бичнэ үү

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
