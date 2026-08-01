"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Building2,
  Anchor,
  PlaneTakeoff,
  ArrowRight,
  Truck,
  ShieldCheck,
  PackageCheck,
} from "lucide-react";

const GlobalNetworkSection = () => {
  const [activeCity, setActiveCity] = useState<string | null>(null);

  const kpis = [
    { val: "10+", label: "Years Experience" },
    { val: "3", label: "Saudi Hubs (HQ Jeddah)" },
    { val: "Middle East", label: "Core Coverage" },
    { val: "7+", label: "Global Affiliations" },
  ];

  const branches = [
    {
      id: "jeddah",
      name: "Jeddah",
      role: "Headquarters",
      desc: "Mobility • Pilgrim Baggage • Storage • Customs",
      icon: Building2,
    },
    {
      id: "riyadh",
      name: "Riyadh",
      role: "Central Region",
      desc: "Office Relocation • Household Goods • Packing",
      icon: Truck,
    },
    {
      id: "dammam",
      name: "Dammam",
      role: "Eastern Region",
      desc: "Industrial Packing • Heavy Machinery • Freight",
      icon: Anchor,
    },
  ];

  // Coordinates on a 1000x600 viewBox centered around Saudi Arabia / Middle East
  const locations = [
    {
      id: "jeddah",
      name: "Jeddah (HQ)",
      x: 605,
      y: 285,
      role: "Headquarters",
      desc: "Pilgrim Baggage • Mobility • Air & Sea Freight",
    },
    {
      id: "riyadh",
      name: "Riyadh",
      x: 630,
      y: 270,
      role: "Central Hub",
      desc: "Corporate Moving • Household Goods • Storage",
    },
    {
      id: "dammam",
      name: "Dammam",
      x: 645,
      y: 265,
      role: "Eastern Hub",
      desc: "Industrial Packing • Port Logistics • Machinery",
    },
  ];

  const intlRoutes = [
    { to: "Europe", x: 520, y: 180, path: "M 605 285 Q 550 210 520 180" },
    { to: "USA & Canada", x: 220, y: 220, path: "M 605 285 Q 400 150 220 220" },
    { to: "India", x: 710, y: 300, path: "M 605 285 Q 660 300 710 300" },
    { to: "Singapore", x: 770, y: 350, path: "M 605 285 Q 700 330 770 350" },
    { to: "Malaysia", x: 760, y: 340, path: "M 605 285 Q 690 320 760 340" },
    {
      to: "Makkah & Madinah",
      x: 595,
      y: 295,
      path: "M 605 285 Q 600 290 595 295",
    },
  ];

  const affiliations = [
    "IATA",
    "IAM",
    "IMA",
    "IAMX",
    "GEM Network",
    "FIDI",
    "Asian Relocation Assoc.",
  ];

  return (
    <section
      id="network"
      className="w-full py-16 lg:py-16 bg-[#F7FAFD] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-[#F7FAFD] to-[#F7FAFD] pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3 z-0" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-[760px] mx-auto mb-16 lg:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-[11px] lg:text-[12px] font-bold text-primary uppercase tracking-[0.15em] mb-4 block"
          >
            Global Mobility & Relocation Network
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.15] text-navy mb-5"
          >
            Trusted Moving & Storage Solutions
            <br className="hidden sm:block" />
            <span className="text-primary">
              {" "}
              Across Saudi Arabia & Worldwide
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-muted text-[16px] lg:text-[18px] leading-relaxed"
          >
            Headquartered in Jeddah with branches in Riyadh and Dammam,
            CargoTrack provides end-to-end household moves, corporate
            relocations, industrial packing, and pilgrim baggage handling across
            the Middle East, Asia, Europe, and the Americas.
          </motion.p>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16 lg:mb-20">
          {/* LEFT: Interactive Map */}
          <div className="w-full lg:w-[60%] bg-white rounded-[32px] p-4 lg:p-8 shadow-[0_20px_50px_rgba(11,58,102,0.05)] border border-brand-text/5 relative h-[400px] lg:h-[580px] overflow-hidden flex items-center justify-center">
            {/* Aspect Ratio Container for Map */}
            <div className="w-full h-auto aspect-[700/600] max-h-full relative flex items-center justify-center">
              {/* World Map Vector Mask */}
              <div
                className="absolute inset-0 bg-[#E2E8F0] opacity-60 pointer-events-none"
                style={{
                  maskImage:
                    "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')",
                  WebkitMaskImage:
                    "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                }}
              />

              {/* SVG Overlay for Routes and Connections */}
              <svg
                viewBox="0 0 1000 600"
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
              >
                {/* International Routes */}
                {intlRoutes.map((route, i) => (
                  <g key={i}>
                    <motion.path
                      d={route.path}
                      fill="none"
                      stroke="#1565C0"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      className="opacity-30"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{
                        duration: 1.5,
                        delay: 0.5 + i * 0.1,
                        ease: "easeOut",
                      }}
                    />
                    {/* Route particle animation */}
                    <motion.circle
                      r="2.5"
                      fill="#1565C0"
                      initial={{ offsetDistance: "0%" } as any}
                      animate={{ offsetDistance: "100%" } as any}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 2,
                      }}
                      style={{ offsetPath: `path('${route.path}')` } as any}
                    />
                    {/* International Destination Dot */}
                    <motion.circle
                      cx={route.x}
                      cy={route.y}
                      r="3"
                      fill="#94A3B8"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 + i * 0.1 }}
                    />
                    <motion.text
                      x={route.x}
                      y={route.y - 8}
                      fill="#64748B"
                      fontSize="10"
                      fontWeight="600"
                      textAnchor="middle"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.2 + i * 0.1 }}
                    >
                      {route.to}
                    </motion.text>
                  </g>
                ))}
              </svg>

              {/* Interactive Saudi Hubs */}
              <div className="absolute inset-0 w-full h-full z-20 pointer-events-none">
                {locations.map((loc) => {
                  const leftPct = (loc.x / 1000) * 100;
                  const topPct = (loc.y / 600) * 100;
                  const isActive = activeCity === loc.id;

                  return (
                    <div
                      key={loc.id}
                      className="absolute pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                      style={{ left: `${leftPct}%`, top: `${topPct}%` }}
                      onMouseEnter={() => setActiveCity(loc.id)}
                      onMouseLeave={() => setActiveCity(null)}
                    >
                      <div className="relative">
                        {/* Pulse effect */}
                        <div className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
                        <div
                          className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full border-2 border-white shadow-[0_0_10px_rgba(21,101,192,0.5)] transition-colors duration-300 ${
                            isActive ? "bg-primary" : "bg-primary/80"
                          }`}
                        />

                        {/* Hover Card */}
                        <div
                          className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 lg:mb-4 w-[180px] lg:w-[220px] bg-white rounded-xl shadow-[0_15px_35px_rgba(11,58,102,0.15)] border border-brand-text/5 p-3 lg:p-4 transition-all duration-300 pointer-events-none z-30 ${
                            isActive
                              ? "opacity-100 translate-y-0 scale-100"
                              : "opacity-0 translate-y-4 scale-95"
                          }`}
                        >
                          <div className="font-heading font-bold text-navy text-[14px] lg:text-[15px] mb-1">
                            {loc.name}
                          </div>
                          <div className="text-primary text-[11px] lg:text-[12px] font-semibold mb-2">
                            {loc.role}
                          </div>
                          <div className="text-brand-muted text-[11px] lg:text-[12px] leading-relaxed">
                            {loc.desc}
                          </div>
                          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: Info Panel */}
          <div className="w-full lg:w-[40%] flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[24px] p-6 lg:p-8 shadow-[0_15px_40px_rgba(11,58,102,0.05)] border border-brand-text/5 lg:h-full flex flex-col justify-between"
            >
              <h3 className="font-heading font-extrabold text-[20px] lg:text-[24px] text-navy mb-6">
                Operational Reach & Strategic Hubs
              </h3>

              {/* KPI Grid */}
              <div className="grid grid-cols-2 gap-4 lg:gap-6 mb-8">
                {kpis.map((kpi, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex flex-col group cursor-default"
                  >
                    <div className="font-heading font-extrabold text-[22px] lg:text-[24px] text-primary mb-1 group-hover:scale-105 transition-transform origin-left">
                      {kpi.val}
                    </div>
                    <div className="text-brand-muted text-[13px] lg:text-[14px] font-medium leading-tight">
                      {kpi.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="h-[1px] w-full bg-brand-text/5 mb-6" />

              {/* Branch List */}
              <div className="flex flex-col gap-3">
                {branches.map((branch, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
                    onMouseEnter={() => setActiveCity(branch.id)}
                    onMouseLeave={() => setActiveCity(null)}
                    className={`flex items-start gap-3 p-2 lg:p-3 rounded-[16px] transition-all duration-300 border-l-[3px] cursor-pointer ${
                      activeCity === branch.id
                        ? "bg-[#F7FAFD] border-primary shadow-sm"
                        : "bg-transparent border-transparent hover:bg-brand-bg/50"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        activeCity === branch.id
                          ? "bg-primary text-white"
                          : "bg-brand-bg text-primary"
                      }`}
                    >
                      <branch.icon size={18} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-heading font-bold text-navy text-[15px]">
                          {branch.name}
                        </span>
                        <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">
                          {branch.role}
                        </span>
                      </div>
                      <p className="text-brand-muted text-[12px]">
                        {branch.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetworkSection;
