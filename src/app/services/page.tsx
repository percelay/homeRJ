import type { Metadata } from "next";
import ServicesGrid from "@/components/ServicesGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Our Services | RJE Home Remodeling",
  description:
    "Explore our full range of home remodeling services including kitchen, bath, basement, outdoor living, roofing, additions, and insurance claim services.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-header text-sm font-bold uppercase tracking-[0.3em] text-accent mb-3">
            What We Do
          </p>
          <h1 className="font-header text-4xl md:text-6xl font-black text-white">Our Services</h1>
          <p className="mt-4 text-white/60 text-lg max-w-2xl">
            From kitchens and bathrooms to complete home additions, we bring your vision to life with
            expert craftsmanship and a design-build approach.
          </p>
        </div>
      </section>
      <ServicesGrid />
      <CTASection />
    </>
  );
}
