"use client";

import Image from "next/image";
import { type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Affiliation {
  src: string;
  name: string;
}

interface MetricItem {
  icon: LucideIcon;
  value: string;
  label: string;
  bg: string;
  color: string;
}

// 1. Move static data outside component scope to avoid re-creation on re-render
const AFFILIATIONS: Affiliation[] = [
  {
    src: "/assets/affiliations-1.webp",
    name: "IAM - International Association of Movers",
  },
  {
    src: "/assets/affiliations-2.webp",
    name: "IATA Cargo Member Certification",
  },
  {
    src: "/assets/affiliations-3.webp",
    name: "FIDI Global Alliance Certification",
  },
  {
    src: "/assets/affiliations-4.webp",
    name: "ISO 9001 Quality Management Certified",
  },
  {
    src: "/assets/affiliations-5.webp",
    name: "FIATA Logistics Federation Member",
  },
  {
    src: "/assets/affiliations-6.webp",
    name: "Customs-Trade Partnership Against Terrorism",
  },
];

export const ClientLogos = () => {
  return (
    <section
      aria-labelledby="affiliations-heading"
      className="w-full bg-brand-bg pt-12 pb-16 overflow-hidden relative z-10 border-b border-brand-text/5"
    >
      {/* Header Label */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-8 flex items-center justify-center gap-3 text-center">
        <span
          aria-hidden="true"
          className="h-px w-6 sm:w-10 bg-brand-muted/30 shrink-0"
        />
        <h2
          id="affiliations-heading"
          className="text-[12px] sm:text-[13px] font-bold text-brand-muted uppercase tracking-[0.15em] text-center"
        >
          Our Memberships & Affiliations
        </h2>
        <span
          aria-hidden="true"
          className="h-px w-6 sm:w-10 bg-brand-muted/30 shrink-0"
        />
      </div>

      {/* Infinite Logo Marquee */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Left & Right Fade Gradients */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none"
        />

        {/* Continuous Loop Track with Framer Motion */}
        <div className="flex w-max">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex items-center gap-12 lg:gap-20 pr-12 lg:pr-20 shrink-0"
          >
            {/* 2. Primary Track: Rendered once for search engine indexing & screen readers */}
            {AFFILIATIONS.map((logo, i) => (
              <div
                key={`primary-${i}`}
                className="transition-transform duration-300 cursor-default select-none shrink-0 flex items-center justify-center h-12 lg:h-20 hover:scale-105"
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} membership logo`}
                  width={160}
                  height={80}
                  className="h-full w-auto object-contain max-w-[140px] lg:max-w-[160px]"
                />
              </div>
            ))}

            {/* 3. Duplicate Track: Visual filler for infinite scroll, hidden from screen readers */}
            {AFFILIATIONS.map((logo, i) => (
              <div
                key={`duplicate-${i}`}
                aria-hidden="true"
                className="transition-transform duration-300 cursor-default select-none shrink-0 flex items-center justify-center h-12 lg:h-20 hover:scale-105"
              >
                <Image
                  src={logo.src}
                  alt=""
                  width={160}
                  height={80}
                  className="h-full w-auto object-contain max-w-[140px] lg:max-w-[160px]"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
