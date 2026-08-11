"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";

export interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
}

interface GallerySectionProps {
  images?: GalleryImage[];
}

const DEFAULT_IMAGES: GalleryImage[] = [
  {
    src: "/assets/photos1.webp",
    alt: "CargoTrack transportation fleet lined up in Saudi Arabia",
  },
  {
    src: "/assets/photos2.webp",
    alt: "CargoTrack logistics warehouse inventory operations",
  },
  {
    src: "/assets/photos3.webp",
    alt: "Customs clearance process for air freight shipment",
  },
  {
    src: "/assets/photos4.webp",
    alt: "Heavy cargo truck distribution in transit",
  },
  {
    src: "/assets/photos5.webp",
    alt: "Doorstep delivery crew unloading freight",
  },
  {
    src: "/assets/photos6.webp",
    alt: "Climate-controlled warehousing facilities",
  },
  {
    src: "/assets/photos7.webp",
    alt: "Global logistics container loading at port",
  },
  {
    src: "/assets/photos8.webp",
    alt: "Relocation packing and inventory management",
  },
  {
    src: "/assets/photos9.webp",
    alt: "Air freight dispatch for international delivery",
  },
  { src: "/assets/photos10.webp", alt: "Sea freight container ship loading" },
  {
    src: "/assets/photos11.webp",
    alt: "Logistics tracking operations dashboard",
  },
  {
    src: "/assets/photos12.webp",
    alt: "Warehouse management system in operation",
  },
  {
    src: "/assets/photos13.webp",
    alt: "Truck fleet ready for long haul distribution",
  },
  { src: "/assets/photos14.webp", alt: "Doorstep delivery service packaging" },
  {
    src: "/assets/photos15.webp",
    alt: "Customs documentation inspection stage",
  },
  { src: "/assets/photos17.webp", alt: "Commercial relocation logistics team" },
  {
    src: "/assets/photos18.webp",
    alt: "Container freight station cargo inspection",
  },
  {
    src: "/assets/photos19.webp",
    alt: "Global logistics network transport route",
  },
  { src: "/assets/photos20.webp", alt: "Secure climate storage facility" },
  {
    src: "/assets/photos21.webp",
    alt: "Destination unpack and assembly service",
  },
];

export const GallerySection = ({
  images = DEFAULT_IMAGES,
}: GallerySectionProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Duplicate the array to create a seamless infinite loop effect
  const carouselImages = useMemo(() => [...images, ...images], [images]);

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  }, [selectedIndex, images.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  }, [selectedIndex, images.length]);

  // Accessibility: Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  return (
    <section
      id="gallery"
      className="pb-16 sm:pb-16 bg-brand-bg relative overflow-hidden"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-[760px] mx-auto mb-16 sm:mb-20">
        {/* Eyebrow Badge */}
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <span className="w-6 h-[2px] bg-[#4ade80]" />
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[12px] font-bold text-primary uppercase tracking-[0.2em]"
          >
            Media & Fleet
          </motion.span>
          <span className="w-6 h-[2px] bg-[#4ade80]" />
        </div>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-extrabold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.1] mb-4 text-navy"
        >
          CargoTrack <span className="text-primary">in Action</span>
        </motion.h2>

        {/* Subline Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 text-base sm:text-lg max-w-[580px]"
        >
          A look inside our fleet, facilities, and daily operations across Saudi
          Arabia.
        </motion.p>
      </div>

      {/* Auto-moving Infinite Carousel Track */}
      <div className="w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <motion.div
          className="flex gap-4 sm:gap-6 shrink-0 py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: Math.max(images.length * 6, 24), // Minimum 24s for 4 images, scale with more images
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }}
          style={{ willChange: "transform" }}
        >
          {carouselImages.map((item, index) => {
            const actualIndex = index % images.length;
            const src = typeof item === "string" ? item : item.src;
            const alt =
              typeof item === "string"
                ? `CargoTrack logistics gallery photo ${actualIndex + 1}`
                : item.alt;

            return (
              <button
                key={`${src}-${index}`}
                type="button"
                onClick={() => setSelectedIndex(actualIndex)}
                aria-label={`View enlarged view of ${alt}`}
                className="group relative w-60 sm:w-72 lg:w-80 aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-white/10 cursor-pointer shrink-0 text-left focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 288px, 320px"
                  loading={index < 4 ? "eager" : "lazy"}
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Hover Overlay with Expand Icon */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-slate-900/80 text-white backdrop-blur-md border border-white/20 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Expand size={18} />
                  </div>
                </div>
              </button>
            );
          })}
        </motion.div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && images[selectedIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Image Lightbox Modal"
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-xl p-4 sm:p-8"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Navigation Previous */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-transform active:scale-95"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Main Preview Image */}
            <div
              className="relative max-w-6xl w-full h-[80vh] overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={
                  typeof images[selectedIndex] === "string"
                    ? (images[selectedIndex] as unknown as string)
                    : images[selectedIndex].src
                }
                alt={
                  typeof images[selectedIndex] === "string"
                    ? `CargoTrack logistics gallery photo ${selectedIndex + 1}`
                    : images[selectedIndex].alt
                }
                fill
                sizes="100vw"
                quality={90}
                priority
                className="object-contain"
              />
            </div>

            {/* Navigation Next */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-transform active:scale-95"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image Counter Badge */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-slate-400 bg-slate-900/80 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
