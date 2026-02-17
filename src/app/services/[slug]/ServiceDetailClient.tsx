"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import type { ServiceData } from "@/lib/services-data";

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/60 hover:text-white z-10"
      >
        <X size={32} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 md:left-8 text-white/60 hover:text-white z-10"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 md:right-8 text-white/60 hover:text-white z-10"
      >
        <ChevronRight size={40} />
      </button>
      <div
        className="relative w-[90vw] h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[index]}
          alt={`Project photo ${index + 1}`}
          fill
          className="object-contain"
          sizes="90vw"
          quality={90}
        />
      </div>
      <p className="absolute bottom-6 text-white/40 text-sm">
        {index + 1} / {images.length}
      </p>
    </motion.div>
  );
}

export default function ServiceDetailClient({ service }: { service: ServiceData }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/services"
                className="text-accent text-sm font-bold uppercase tracking-wider hover:text-accent/80 transition-colors mb-4 inline-block"
              >
                &larr; All Services
              </Link>
              <h1 className="font-header text-4xl md:text-6xl font-black text-white">
                {service.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-bg">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-lg text-text-main/80 leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="space-y-4 text-text-main/70 leading-relaxed">
                  {service.details.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar — features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-surface p-8 rounded-sm h-fit"
            >
              <h3 className="font-header text-lg font-black text-primary mb-6">What We Offer</h3>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-main/70">
                    <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-primary/10">
                <Link
                  href="/contact"
                  className="block w-full rounded-sm bg-accent px-6 py-3 text-center text-sm font-bold uppercase tracking-wider text-white hover:bg-accent/80 transition-colors"
                >
                  Get a Free Estimate
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-header text-3xl font-black text-primary mb-10">Project Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {service.images.map((img, i) => (
              <motion.button
                key={img}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setLightboxIndex(i)}
                className="relative aspect-square overflow-hidden rounded-sm group cursor-pointer"
              >
                <Image
                  src={img}
                  alt={`${service.title} project ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-header text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Start Your {service.shortTitle} Project?
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Contact us today for a free consultation and estimate. We&rsquo;ll work with you to
            bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-sm bg-accent px-10 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-accent/80 transition-colors"
          >
            Request an Estimate
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={service.images}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onPrev={() =>
              setLightboxIndex((prev) =>
                prev !== null ? (prev - 1 + service.images.length) % service.images.length : 0
              )
            }
            onNext={() =>
              setLightboxIndex((prev) =>
                prev !== null ? (prev + 1) % service.images.length : 0
              )
            }
          />
        )}
      </AnimatePresence>
    </>
  );
}
