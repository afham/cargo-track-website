"use client";

import { Activity, Award, Building, Globe } from "lucide-react";
import { motion } from "framer-motion";

export const ClientLogos = () => {
  const row1Logos = [
    "/assets/affiliations-1.png",
    "/assets/affiliations-2.png",
    "/assets/affiliations-3.png",
    "/assets/affiliations-4.png",
    "/assets/affiliations-5.png",
    "/assets/affiliations-6.png",
  ];

  // Quadruple the list so it covers large screens seamlessly
  const duplicatedLogos = [
    ...row1Logos,
    ...row1Logos,
    ...row1Logos,
    ...row1Logos,
  ];

  const metrics = [
    {
      icon: Building,
      value: "200+",
      label: "CLIENTS WORLDWIDE",
      bg: "bg-blue-50/80",
      color: "text-primary",
    },
    {
      icon: Award,
      value: "25+",
      label: "YEARS OF EXPERIENCE",
      bg: "bg-amber-50/80",
      color: "text-amber-500",
    },
    {
      icon: Activity,
      value: "50,000+",
      label: "PROJECTS DELIVERED",
      bg: "bg-emerald-50/80",
      color: "text-emerald-600",
    },
    {
      icon: Globe,
      value: "GLOBAL REACH",
      label: "MULTIPLE INDUSTRIES",
      bg: "bg-indigo-50/80",
      color: "text-indigo-600",
    },
  ];

  return (
    <div className="w-full bg-brand-bg pt-12 pb-16 overflow-hidden relative z-10 border-b border-brand-text/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-8 flex items-center justify-center gap-3 text-center">
        <span className="h-px w-6 sm:w-10 bg-brand-muted/30 shrink-0" />
        <span className="text-[12px] sm:text-[13px] font-bold text-brand-muted uppercase tracking-[0.15em] text-center">
          Our Memberships & Affiliations
        </span>
        <span className="h-px w-6 sm:w-10 bg-brand-muted/30 shrink-0" />
      </div>

      <div className="relative w-full overflow-hidden  py-2">
        {/* Left & Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none" />

        {/* Continuous Loop Track */}
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
            {duplicatedLogos.map((logo, i) => (
              <div
                key={`r1-${i}`}
                className="transition-transform duration-300 cursor-default select-none shrink-0 flex items-center justify-center h-12 lg:h-32 hover:scale-105"
              >
                <img
                  src={logo}
                  alt={`Affiliation logo ${(i % row1Logos.length) + 1}`}
                  className="h-full w-auto object-contain max-w-[160px]"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
