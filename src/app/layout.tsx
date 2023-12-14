import type { Metadata } from "next";
import {
  Inter,
  Josefin_Sans,
  Montserrat,
  Merriweather,
  Yrsa,
} from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const yrsa = Yrsa({
  variable: "--font-yrsa",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: {
    template: "%s | Luiard Press",
    default: "Luiard Press", // a default is required when creating a template
  },
  description:
    "A publisher involved in promoting acceptance of solitude and slow thinking.",
  keywords: [
    "publishing",
    "slow thinking",
    "creativity",
    "solitude",
    "neurodiversity",
  ],
  generator: "Next.js",
  applicationName: "luiardpress.com",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Luiard Press", url: "https://luiardpress.com" }],
  creator: "Cliff Cunnington",
  owner: "Luiard Press | A Cliff Cunnington Enterprise",
  publisher: "Cliff Cunnington Enterprise",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light  min-h-[5000px] font-sans antialiased">
      <body
        className={cn(
          "grainy bg-white text-foreground",
          inter.variable,
          josefin.variable,
          merriweather.className,
          yrsa.variable,
        )}
      >
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
