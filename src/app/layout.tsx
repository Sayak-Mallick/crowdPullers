import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Optimized SEO Metadata
export const metadata: Metadata = {
  title: {
    default: "CrowdPullers | Premier Event Management & Brand Activations",
    template: "%s | CrowdPullers",
  },
  description:
    "CrowdPullers is India's leading event management agency specializing in exhibition stall fabrication, corporate conferences, and high-impact brand activations.",
  keywords: [
    "Event Management",
    "Exhibition Stalls",
    "CrowdPullers",
    "Corporate Events",
    "Brand Activations",
    "Kolkata Events",
  ],
  authors: [{ name: "CrowdPullers" }],
  creator: "CrowdPullers",
  metadataBase: new URL("https://www.crowdpullers.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CrowdPullers - Premier Event Management Solutions",
    description:
      "Tailored event solutions to make your brand stand out. From concept to execution.",
    url: "https://www.crowdpullers.in",
    siteName: "CrowdPullers",
    images: [
      {
        url: "/og-image.png", // Recommended: Place a 1200x630px image in your /public folder
        width: 1200,
        height: 630,
        alt: "CrowdPullers Event Management",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CrowdPullers | Event Management",
    description: "Premier event management solutions tailored to your brand.",
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
        {/* Favicon is handled by Next.js metadata, but keeping this for legacy support */}
        <link rel="icon" href="/cp.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
