
// @ts-ignore: allow side-effect CSS import without type declarations
import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "foundation Nigeria",
    "community development",
    "education empowerment",
    "healthcare Nigeria",
    "micro grants",
    "non-profit Nigeria",
    "N'Uwakaobiri",
    "youth empowerment",
    "social impact",
    "philanthropy Nigeria",
    "grassroots development",
    "Nuwakobiri Foundation",
    "Nuwakobiri Youth Foundation",
    "Nuwakobiri Community Development",
    "Nuwakobiri Philanthropy",
    "Nuwakobiri Social Impact",
    "Nuwakobiri Non-Profit",
    "Nuwakobiri Education",
    "Nuwakobiri Healthcare",
    "Nuwakobiri Micro Grants",
    "Nuwakobiri Empowerment",
    "Nuwakobiri Nigeria",
    "Nuwakobiri Youth", 
    "Nuwakobiri Community",
    "Nuwakobiri Development",
    "Nuwakobiri Philanthropy",
    "Nuwakobiri Social Impact",
    "Nuwakobiri Non-Profit",
    "Nuwakobiri Education",
    "Nuwakobiri Healthcare",
    "Nuwakobiri Micro Grants",
    "Nuwakobiri Empowerment",
    "Nuwakobiri Nigeria",
    "Nuwakobiri Youth",
    "Nuwakobiri Community",
    "Nuwakobiri Development",
    "Nuwakobiri Philanthropy",
    "Nuwakobiri Social Impact",
    "Nuwakobiri Non-Profit",
    "Nuwakobiri Education",
    "Nuwakobiri Healthcare",
    "Nuwakobiri Micro Grants",
    "Nuwakobiri Empowerment",
    "Nuwakobiri Nigeria",
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    locale: "en_NG",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body antialiased bg-white text-gray-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
