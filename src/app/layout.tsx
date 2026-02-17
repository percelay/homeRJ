import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-header",
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RJE Home Remodeling Company | Design & Build General Contractor",
  description:
    "RJE Home Remodeling is a design & build general contractor serving Bucks, Montgomery, Chester & Delaware Counties, PA. Kitchens, baths, basements, additions & more since 1997.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${lato.variable}`}>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
