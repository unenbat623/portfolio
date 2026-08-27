import type { MetadataRoute } from "next";

const siteUrl = "https://portfolio-pied-six-dry6wymwrj.vercel.app"; // өөрийн домэйн авбал энд солино

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
