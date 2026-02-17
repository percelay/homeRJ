"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/hero/home-remodel.jpg"
        alt="Stunning kitchen remodel with walnut cabinetry and marble countertops by RJE"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      <div className="relative z-10 flex h-full items-end">
        <div className="mx-auto w-full max-w-7xl px-6 pb-24 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="font-header text-sm md:text-base font-bold uppercase tracking-[0.3em] text-accent mb-4">
              Design & Build General Contractor
            </p>
            <h1 className="font-header text-4xl md:text-6xl lg:text-8xl font-black text-white leading-[0.95] mb-6 max-w-4xl">
              Design Your Dream Home.
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8">
              Transforming homes across Bucks, Montgomery, Chester & Delaware Counties since 1997.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-sm bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-accent/80 transition-colors duration-200"
              >
                Start Your Project
              </Link>
              <Link
                href="/portfolio"
                className="rounded-sm border border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors duration-200"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
