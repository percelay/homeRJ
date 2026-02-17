import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, Shield, Users, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "About | RJE Home Remodeling",
  description:
    "Learn about RJE Home Remodeling Company — a trusted design & build general contractor serving southeastern Pennsylvania since 1997.",
};

const values = [
  {
    icon: Award,
    title: "Quality Craftsmanship",
    text: "Every project is built to the highest standards using premium materials and proven techniques. We take pride in work that stands the test of time.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    text: "Fully licensed in Pennsylvania (#PA015029) and New Jersey (#13VH08652400) with comprehensive insurance coverage for your peace of mind.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    text: "Your vision drives every decision. We listen, plan, and execute with transparency and open communication from start to finish.",
  },
  {
    icon: Clock,
    title: "25+ Years Experience",
    text: "Since 1997, we've transformed thousands of homes across Bucks, Montgomery, Chester, and Delaware Counties.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-header text-sm font-bold uppercase tracking-[0.3em] text-accent mb-3">
            Who We Are
          </p>
          <h1 className="font-header text-4xl md:text-6xl font-black text-white">About RJE</h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-bg">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-header text-3xl md:text-4xl font-black text-primary mb-8">
                Design & Build General Contractor
              </h2>
              <div className="space-y-4 text-text-main/70 leading-relaxed">
                <p>
                  We are your General Contractor for &ldquo;design & build&rdquo; kitchens, baths,
                  decks & exterior remodels and more! We all want that perfect dream home to settle
                  into. Let RJE help you live in a home that matches your unique personality.
                </p>
                <p>
                  Whether it&rsquo;s cooking up the perfect meal in your updated kitchen or
                  entertaining friends in a tastefully designed recreation room, you can have it all
                  and more. Our team brings decades of expertise and a passion for craftsmanship to
                  every project we undertake.
                </p>
                <p>
                  We manage every aspect of your project from initial design consultation through
                  final walkthrough, ensuring seamless coordination, on-time delivery, and results
                  that exceed your expectations.
                </p>
                <p>
                  Kitchens, bathrooms, basements, additions and more — let RJE begin the process of
                  helping you achieve your dream goal.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-sm overflow-hidden">
              <Image
                src="/images/hero/project-1.jpg"
                alt="RJE Home Remodeling project"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="font-header text-sm font-bold uppercase tracking-[0.3em] text-accent mb-3">
              How We Work
            </p>
            <h2 className="font-header text-3xl md:text-4xl font-black text-primary">
              Our Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We meet to discuss your vision, needs, and budget. We'll walk through your space together and explore possibilities." },
              { step: "02", title: "Design", desc: "Our team creates detailed plans and 3D renderings so you can see your project before construction begins." },
              { step: "03", title: "Build", desc: "Our skilled craftsmen bring the design to life with precision, quality materials, and attention to every detail." },
              { step: "04", title: "Delivery", desc: "We walk through the finished project together, ensuring every element meets your expectations and our high standards." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="font-header text-5xl font-black text-accent/30">
                  {item.step}
                </span>
                <h3 className="font-header text-xl font-black text-primary mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-text-main/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-bg">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="font-header text-sm font-bold uppercase tracking-[0.3em] text-accent mb-3">
              What Sets Us Apart
            </p>
            <h2 className="font-header text-3xl md:text-4xl font-black text-primary">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex gap-6 p-8 bg-surface rounded-sm border border-primary/5"
              >
                <v.icon size={32} className="text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-header text-lg font-black text-primary mb-2">{v.title}</h3>
                  <p className="text-sm text-text-main/60 leading-relaxed">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-header text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Transform Your Home?
          </h2>
          <p className="text-white/60 mb-8">
            Get in touch today to schedule a free consultation with our team.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-sm bg-accent px-10 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-accent/80 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
