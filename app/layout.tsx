import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import "./globals.css";

// =============================================================================
// Root Layout — Wraps all pages with Navbar, Footer, and global metadata
// =============================================================================

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unovia.in"),
  alternates: {
    canonical: "./",
  },
  title: {
    default: "UNoviA Consulting — Strategic Financial & Business Advisory",
    template: "%s | UNoviA Consulting",
  },
  description:
    "Premium financial consultancy powered by expert CAs and MBAs, offering wealth management, tax planning, GST advisory, and business consulting from Kolkata, India.",
  keywords: [
    "wealth management",
    "tax consultancy",
    "GST advisory",
    "business consulting",
    "financial advisory",
    "tax planning India",
    "GST compliance",
    "virtual CFO services",
    "trademark registration India",
    "Kolkata financial advisory",
    "CA firm Kolkata",
    "Unovia Consulting",
  ],
  authors: [{ name: "UNoviA Consulting" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Unovia Consulting",
    title: "Unovia Consulting — Strategic Financial & Business Advisory",
    description:
      "Expert wealth management, tax planning, GST advisory, and business consulting by qualified CAs and MBAs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unovia Consulting — Strategic Financial & Business Advisory",
    description:
      "Expert wealth management, tax planning, GST advisory, and business consulting.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  );
}
