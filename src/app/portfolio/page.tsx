import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio | RJE Home Remodeling",
  description:
    "Browse our portfolio of kitchen, bath, basement, exterior, and addition remodeling projects across Bucks and Montgomery Counties.",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
