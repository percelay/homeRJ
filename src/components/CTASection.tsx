"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 36px)",
          }}
        />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-header text-sm font-bold uppercase tracking-[0.3em] text-accent mb-4">
            Ready to Get Started?
          </p>
          <h2 className="font-header text-4xl md:text-5xl font-black text-white mb-6">
            Let&rsquo;s Build Your Dream Home Together
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            From concept to completion, our design-build approach ensures your project is handled
            with precision and care. Contact us today for a free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-sm bg-accent px-10 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-accent/80 transition-colors"
            >
              Request an Estimate
            </Link>
            <a
              href="tel:2672825948"
              className="rounded-sm border border-white/30 px-10 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors inline-flex items-center gap-2"
            >
              <Phone size={16} />
              267.282.5948
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
