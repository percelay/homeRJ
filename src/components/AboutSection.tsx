"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-header text-sm font-bold uppercase tracking-[0.3em] text-accent mb-3">
              About RJE
            </p>
            <h2 className="font-header text-4xl md:text-5xl font-black text-primary mb-8">
              Building Dreams
              <br />
              Since 1997
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
                every project.
              </p>
              <p>
                Kitchens, bathrooms, basements, additions and more — let RJE begin the process of
                helping you achieve your dream goal.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="rounded-sm bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-primary/80 transition-colors"
              >
                Our Story
              </Link>
              <Link
                href="/contact"
                className="rounded-sm border border-primary/30 px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary hover:bg-primary hover:text-white transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-sm overflow-hidden">
                <Image
                  src="/images/hero/project-1.jpg"
                  alt="RJE project"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <div className="relative h-64 rounded-sm overflow-hidden mt-8">
                <Image
                  src="/images/hero/project-2.jpg"
                  alt="RJE project"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <div className="relative h-64 rounded-sm overflow-hidden">
                <Image
                  src="/images/hero/project-3.jpg"
                  alt="RJE project"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <div className="relative h-64 rounded-sm overflow-hidden mt-8 bg-accent flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <p className="font-header text-5xl font-black">25+</p>
                  <p className="text-sm font-bold uppercase tracking-wider mt-2">Years of Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
