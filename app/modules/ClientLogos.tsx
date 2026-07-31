"use client";

import { Activity, Award, Building, Globe } from "lucide-react";
import { motion } from "motion/react";

// ClientLogos
export const ClientLogos = () => {
  const row1Logos = [
    "/assets/cl-logo-1.png",
    "/assets/cl-logo-2.png",
    "/assets/cl-logo-3.png",
    "/assets/cl-logo-4.png",
    "/assets/cl-logo-5.png",
    "/assets/cl-logo-6.png",
    "/assets/cl-logo-7.png",
    "/assets/cl-logo-8.png",
    "/assets/cl-logo-9.png",
    "/assets/cl-logo-10.png",
    "/assets/cl-logo-11.png",
    "/assets/cl-logo-12.png",
    "/assets/cl-logo-13.png",
  ];

  const row2Logos = [
    "/assets/cl-logo-14.png",
    "/assets/cl-logo-15.png",
    "/assets/cl-logo-16.png",
    "/assets/cl-logo-17.png",
    "/assets/cl-logo-18.png",
    "/assets/cl-logo-19.png",
    "/assets/cl-logo-20.png",
    "/assets/cl-logo-21.png",
    "/assets/cl-logo-22.png",
    "/assets/cl-logo-23.png",
    "/assets/cl-logo-24.png",
    "/assets/cl-logo-25.png",
    "/assets/cl-logo-26.png",
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
          Trusted by 200+ Clients Worldwide
        </span>
        <span className="h-px w-6 sm:w-10 bg-brand-muted/30 shrink-0" />
      </div>

      {/* Two-Row Carousels */}
      <div className="flex flex-col gap-6 lg:gap-8 relative w-full overflow-hidden mb-12 lg:mb-16">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none" />

        {/* Row 1: Left Carousel */}
        <div className="flex relative w-full overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 35, ease: "linear", repeat: Infinity }}
            className="flex whitespace-nowrap gap-12 lg:gap-20 px-6 items-center hover:[animation-play-state:paused]"
          >
            {[...row1Logos, ...row1Logos].map((logo, i) => (
              <div
                key={`r1-${i}`}
                className="transition-transform duration-300 cursor-default select-none shrink-0 flex items-center justify-center h-12 lg:h-16 hover:scale-105"
              >
                <img
                  src={logo}
                  alt={`Client logo ${i + 1}`}
                  className="h-full w-auto object-contain max-w-[160px]"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right Carousel */}
        <div className="flex relative w-full overflow-hidden">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 35, ease: "linear", repeat: Infinity }}
            className="flex whitespace-nowrap gap-12 lg:gap-20 px-6 items-center hover:[animation-play-state:paused]"
          >
            {[...row2Logos, ...row2Logos].map((logo, i) => (
              <div
                key={`r2-${i}`}
                className="transition-transform duration-300 cursor-default select-none shrink-0 flex items-center justify-center h-12 lg:h-16 hover:scale-105"
              >
                <img
                  src={logo}
                  alt={`Client logo ${i + 14}`}
                  className="h-full w-auto object-contain max-w-[160px]"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Metrics Card */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[24px] lg:rounded-[28px] shadow-[0_15px_35px_rgba(11,58,102,0.05)] border border-slate-100 p-6 lg:p-8 grid grid-cols-2 lg:grid-cols-4 gap-0 lg:divide-x divide-slate-100"
        >
          {metrics.map((m, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center px-3 sm:px-6 py-4 lg:py-0 ${
                i % 2 === 0 ? "border-r border-slate-100 lg:border-r-0" : ""
              } ${i < 2 ? "border-b border-slate-100 pb-6 lg:border-b-0 lg:pb-0" : "pt-6 lg:pt-0"}`}
            >
              {/* Icon */}
              <div
                className={`w-11 h-11 ${m.bg} ${m.color} rounded-xl flex items-center justify-center mb-3 shadow-sm shrink-0`}
              >
                <m.icon size={22} strokeWidth={2} />
              </div>

              {/* Value with fixed height container */}
              <div className="h-12 flex items-center justify-center mb-1 w-full">
                <span
                  className={`font-heading font-extrabold text-navy tracking-tight text-center leading-tight ${
                    m.value.length > 8
                      ? "text-lg sm:text-xl lg:text-2xl"
                      : "text-2xl sm:text-3xl"
                  }`}
                >
                  {m.value}
                </span>
              </div>

              {/* Label with min height container */}
              <div className="min-h-[32px] flex items-center justify-center w-full">
                <span className="font-sans text-[11px] sm:text-[12px] font-bold text-brand-muted uppercase tracking-wider text-center leading-snug">
                  {m.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
