import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

import "./globals.css";

import Header from "@/components/navigation/site-header";
import Footer from "@/components/footer/footer";

const bodyFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sustainable Brands | CommonShare",
  description: "CommonShare is a digital platform that helps businesses source and track sustainable products. It allows businesses to choose their own tools and incentivizes data collection, all while ensuring data quality and sovereignty.",
  keywords: "sustainable brands, sustainable clothing brands, sustainable consumption and production, b corporations, organic brands, CommonShare pricing , Improve sustainability metrics with software",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-white font-sans antialiased", bodyFont.variable)}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
