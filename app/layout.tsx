import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, CONTACT } from "@/lib/constants";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsappButton from "@/components/shared/WhatsappButton";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800"],
});

const openSans = Open_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Adaptacije i Renoviranje`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "adaptacije stanova Niš",
    "renoviranje kupatila Niš",
    "adaptacija stana Niš",
    "renoviranje stana Niš",
    "keramičarski radovi Niš",
    "vodoinstalacije Niš",
    "elektroinstalacije Niš",
    "molerski radovi Niš",
    "gipsarski radovi Niš",
    "sistem ključ u ruke Niš",
    "rušenje i razbijanje Niš",
    "majstor Niš",
    "adaptacije stanova",
    "renoviranje kupatila",
    "keramika",
    "vodoinstalateri Niš",
    "suva gradnja Niš",
    "spušteni plafoni Niš",
  ],
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/logo.webp`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/logo.webp`],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Adaptacije Stanova Niš",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Niš",
    addressRegion: "Nišavski okrug",
    addressCountry: "RS",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.3209,
    longitude: 21.8954,
  },
  areaServed: {
    "@type": "City",
    name: "Niš",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "16:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Usluge adaptacije stanova",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Keramičarski radovi" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Voda i kanalizacija" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Elektroinstalacije" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Molerski i gipsarski radovi" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rušenje i razbijanje" } },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
