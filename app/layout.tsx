import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// Keep the replacement prototype out of search results until the client approves the domain cutover.
// Set NEXT_PUBLIC_SITE_LIVE=true only when the finished website is live on prostep.ie.
const siteLive = process.env.NEXT_PUBLIC_SITE_LIVE === "true";

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Tim Bourke & Associates",
  alternateName: "Prostep",
  url: "https://prostep.ie",
  email: "tim@prostep.ie",
  telephone: "+353-62-63122",
  foundingDate: "1996",
  areaServed: ["Tipperary", "Ireland"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Killastafford",
    addressLocality: "Cashel",
    addressRegion: "Co. Tipperary",
    addressCountry: "IE",
  },
  sameAs: [],
  description:
    "Tim Bourke & Associates provides agricultural, environmental, equine and farm consultancy services in Cashel, Co. Tipperary, including Prostep supplements for the equine market. Established in 1996.",
  knowsAbout: [
    "Agricultural Consultancy",
    "Environmental Consultancy",
    "Farm Consultancy",
    "Equine Services",
    "Horse Nutrition",
    "Supplements",
    "Stud Farm Support",
    "Bloodstock Nutrition",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://prostep.ie"),
  robots: { index: siteLive, follow: siteLive },
  title:
    "Tim Bourke & Associates | Agricultural, Environmental & Equine Consultancy",
  description:
    "Tim Bourke & Associates provides agricultural, environmental, equine and farm consultancy services in Cashel, Co. Tipperary, including Prostep supplements.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Tim Bourke & Associates | Agricultural, Environmental & Equine Consultancy",
    description:
      "Agricultural, environmental and equine consultancy in Cashel, Co. Tipperary, with Prostep supporting the equine market.",
    url: "https://prostep.ie",
    siteName: "Tim Bourke & Associates",
    locale: "en_IE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}