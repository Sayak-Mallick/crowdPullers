import type { Metadata, Viewport } from "next";
import "./globals.css";
import ReduxProvider from "@/components/providers/ReduxProvider";
import LenisProvider from "@/components/providers/LenisProvider";

export const metadata: Metadata = {
  title: "CrowdPullers — Exceptional Events, Delivered",
  description:
    "CrowdPullers is the ultimate event management and audience engagement platform. We turn your events into magnets — attract, engage, and grow your audience with ease.",
  keywords: ["event management", "corporate events", "cultural events", "government events", "India"],
  authors: [{ name: "CrowdPullers" }],
  openGraph: {
    title: "CrowdPullers — Exceptional Events, Delivered",
    description: "Turn your events into magnets. Attract, engage, and grow your audience with ease.",
    url: "https://www.crowdpullers.in",
    siteName: "CrowdPullers",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Inter from Google Fonts — async load for production */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <ReduxProvider>
          <LenisProvider>
            {children}
          </LenisProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}