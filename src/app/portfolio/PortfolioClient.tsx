"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface PortfolioImage {
  src: string;
  category: string;
  alt: string;
}

const categories = ["All", "Kitchen", "Bath", "Basement", "Exterior", "Roofing", "Additions", "Insurance"];

function buildPortfolioImages(): PortfolioImage[] {
  const items: PortfolioImage[] = [];
  const dirs: { dir: string; category: string; count: number; ext?: Record<number, string> }[] = [
    { dir: "kitchen", category: "Kitchen", count: 8 },
    { dir: "bath", category: "Bath", count: 8 },
    { dir: "basement", category: "Basement", count: 8 },
    { dir: "exterior", category: "Exterior", count: 8 },
    { dir: "roofing", category: "Roofing", count: 6 },
    { dir: "additions", category: "Additions", count: 7 },
    { dir: "insurance", category: "Insurance", count: 8 },
  ];

  for (const { dir, category, count } of dirs) {
    for (let i = 1; i <= count; i++) {
      const name = dir === "additions" ? "addition" : dir === "insurance" ? "insurance" : dir;
      items.push({
        src: `/images/${dir}/${name}-${i}.jpg`,
        category,
        alt: `${category} remodel project ${i}`,
      });
    }
  }

  // Special extensions
  items.push({
    src: "/images/additions/addition-8.jpeg",
    category: "Additions",
    alt: "Addition remodel project 8",
  });
  items.push({
    src: "/images/roofing/roofing-7.jpeg",
    category: "Roofing",
    alt: "Roofing project 7",
  });
  items.push({
    src: "/images/roofing/roofing-8.png",
    category: "Roofing",
    alt: "Roofing project 8",
  });

  return items;
}

const allImages = buildPortfolioImages();

export default function PortfolioClient() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? allImages
        : allImages.filter((img) => img.category === activeFilter),
    [activeFilter]
  );

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-header text-sm font-bold uppercase tracking-[0.3em] text-accent mb-3">
            Our Work
          </p>
          <h1 className="font-header text-4xl md:text-6xl font-black text-white">Portfolio</h1>
          <p className="mt-4 text-white/60 text-lg max-w-2xl">
            Browse our completed projects to see the quality and craftsmanship we bring to every
            home remodeling project.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="py-8 bg-surface sticky top-20 z-30 border-b border-primary/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-sm px-5 py-2 text-sm font-bold uppercase tracking-wider transition-colors ${
                  activeFilter === cat
                    ? "bg-primary text-white"
                    : "bg-bg text-primary/60 hover:text-primary hover:bg-bg/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-16 bg-bg">
        <div className="mx-auto max-w-7xl px-6">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {filtered.map((img, i) => (
              <motion.button
                key={img.src}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxIndex(i)}
                className="relative w-full overflow-hidden rounded-sm group cursor-pointer break-inside-avoid"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400 + (i % 3) * 100}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                  <span className="p-3 text-white text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    {img.category}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white/60 hover:text-white z-10"
            >
              <X size={32} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) =>
                  prev !== null ? (prev - 1 + filtered.length) % filtered.length : 0
                );
              }}
              className="absolute left-4 md:left-8 text-white/60 hover:text-white z-10"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) =>
                  prev !== null ? (prev + 1) % filtered.length : 0
                );
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
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
                quality={90}
              />
            </div>
            <p className="absolute bottom-6 text-white/40 text-sm">
              {lightboxIndex + 1} / {filtered.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
