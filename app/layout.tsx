import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Tim Bourke & Associates",
  alternateName: "Prostep",
  url: "https://prostep.ie",
  email: "tim@prostep.ie",
  telephone: "(062) 63122",
  areaServed: ["Tipperary", "Ireland"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cashel",
    addressRegion: "Co. Tipperary",
    addressCountry: "IE",
  },
  sameAs: [],
  description:
    "Tim Bourke & Associates provides agricultural, environmental, equine and farm consultancy services in Cashel, Co. Tipperary, including Prostep supplements for the equine market.",
  knowsAbout: [
    "Agricultural Consultancy",
    "Environmental Consultancy",
    "Farm Consultancy",
    "Equine Services",
    "Horse Nutrition",
    "Supplements",
    "Stud Farm Support",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://prostep.ie"),
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
      <body className={inter.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}