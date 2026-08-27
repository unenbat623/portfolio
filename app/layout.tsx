import type { Metadata } from "next";
import { Gabarito, Inter, JetBrains_Mono } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import { profile } from "@/lib/content";
import "./globals.css";

const gabarito = Gabarito({
  subsets: ["latin"],
  variable: "--font-gabarito",
  display: "swap",
});

// Gabarito has no Cyrillic — Inter picks up Mongolian glyphs as a per-glyph fallback
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jb",
  display: "swap",
});

const siteUrl = "https://portfolio-pied-six-dry6wymwrj.vercel.app"; // өөрийн домэйн авбал энд солино

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name.en} — ${profile.role.en}`,
  description: `${profile.role.en} building web products end to end. ${profile.location.en}.`,
  keywords: [
    "fullstack developer",
    "web developer",
    "Next.js",
    "TypeScript",
    "React",
    "Mongolia",
    profile.name.en,
  ],
  authors: [{ name: profile.name.en, url: siteUrl }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name.en} — ${profile.role.en}`,
    description: `${profile.role.en} building web products end to end.`,
    siteName: profile.name.en,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name.en} — ${profile.role.en}`,
    description: `${profile.role.en} building web products end to end.`,
  },
  robots: { index: true, follow: true },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name.en,
  jobTitle: profile.role.en,
  email: `mailto:${profile.email}`,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ulaanbaatar",
    addressCountry: "MN",
  },
  sameAs: Object.values(profile.socials).filter(Boolean),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${gabarito.variable} ${inter.variable} ${jetbrains.variable} grain antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
