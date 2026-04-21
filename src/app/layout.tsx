import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Providers from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.crowdpullers.in";

const siteDescription =
  "CROWDpullers is one of India's leading event management companies, specializing in corporate events, product launches, brand activations, and exhibition stall fabrication. From intimate gatherings to large-scale productions, we deliver innovative concepts, stylish execution, and complete customer satisfaction — turning your vision into a highly marketable reality.";

// ✅ JSON-LD Structured Data for Google Rich Results
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CROWDpullers",
  url: siteUrl,
  logo: `${siteUrl}/cp.png`,
  description: siteDescription,
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "West Bengal",
    addressLocality: "Kolkata",
  },
  sameAs: [
    // Add your social media URLs here, e.g.:
    // "https://www.instagram.com/crowdpullers",
  ],
  knowsAbout: [
    "Event Management",
    "Corporate Events",
    "Brand Activations",
    "Exhibition Stall Fabrication",
    "Product Launches",
    "Public Relations Events",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl), // ✅ Critical — fixes og:image and description on deployed site

  title: {
    default: "CROWDpullers | Premier Event Management Company in India",
    template: "%s | CROWDpullers",
  },

  description: siteDescription, // ✅ Rich, keyword-dense, drawn from actual business content

  keywords: [
    "Event Management Company India",
    "Corporate Event Management",
    "Corporate Events Kolkata",
    "Product Launch Management",
    "Brand Activation Agency",
    "Exhibition Stall Fabrication",
    "Marketing Events India",
    "Public Relations Events",
    "Corporate Parties Kolkata",
    "CROWDpullers",
    "Event Planning India",
    "Event Promotion Services",
  ],

  authors: [{ name: "CROWDpullers", url: siteUrl }],
  creator: "CROWDpullers",
  publisher: "CROWDpullers",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "CROWDpullers | Premier Event Management Company in India",
    description: siteDescription, // ✅ Now matches meta description — was too short before
    url: siteUrl,
    siteName: "CROWDpullers",
    images: [
      {
        url: "/og-image.png", // Place a 1200x630px image in /public
        width: 1200,
        height: 630,
        alt: "CROWDpullers – India's Leading Event Management Company",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CROWDpullers | Premier Event Management Company in India",
    description:
      "From corporate conferences to product launches — CROWDpullers delivers innovative, high-impact events across India. Complete customer satisfaction, every time.",
    images: ["/og-image.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/cp.png" type="image/png" />
        {/* ✅ JSON-LD for Google Knowledge Panel & Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
