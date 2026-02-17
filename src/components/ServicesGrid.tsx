"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/services-data";

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-bg">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <p className="font-header text-sm font-bold uppercase tracking-[0.3em] text-accent mb-3">
            What We Do
          </p>
          <h2 className="font-header text-4xl md:text-5xl font-black text-primary">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group relative block h-72 overflow-hidden rounded-sm"
              >
                <Image
                  src={service.thumbnail}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-colors duration-300 group-hover:from-primary/90" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="font-header text-xl font-black text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-sm line-clamp-2 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {service.description}
                  </p>
                  <span className="mt-3 inline-flex items-center text-accent text-xs font-bold uppercase tracking-wider opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    Learn More &rarr;
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
