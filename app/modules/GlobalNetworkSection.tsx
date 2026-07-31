"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  MapPin,
  Globe,
  Building2,
  Anchor,
  Ship,
  ArrowRight,
  PlaneTakeoff,
  Navigation,
  ExternalLink,
} from "lucide-react";

const GlobalNetworkSection = () => {
  const [activeCity, setActiveCity] = useState<string | null>(null);

  const kpis = [
    { val: "25+", label: "Years Experience" },
    { val: "5+", label: "Strategic Locations" },
    { val: "Pan India", label: "Coverage" },
    { val: "International", label: "Freight Support" },
  ];

  const branches = [
    {
      id: "chennai",
      name: "Chennai",
      role: "Head Office",
      desc: "Customs Clearance • Freight Forwarding",
      icon: Building2,
    },
    {
      id: "mumbai",
      name: "Mumbai",
      role: "Western Region",
      desc: "Port Logistics • Supply Chain",
      icon: Anchor,
    },
    {
      id: "bangalore",
      name: "Bangalore",
      role: "South Operations",
      desc: "Air Freight • Distribution",
      icon: PlaneTakeoff,
    },
    {
      id: "kochi",
      name: "Kochi",
      role: "Port Logistics",
      desc: "Marine Cargo • Warehousing",
      icon: Ship,
    },
    {
      id: "tuticorin",
      name: "Tuticorin",
      role: "Marine Cargo",
      desc: "Sea Freight • Port Handling",
      icon: Navigation,
    },
  ];

  // Coordinates on a 1000x600 viewBox
  const locations = [
    {
      id: "chennai",
      name: "Chennai",
      x: 715,
      y: 310,
      role: "Head Office",
      desc: "Customs Clearance • Freight Forwarding",
    },
    {
      id: "mumbai",
      name: "Mumbai",
      x: 690,
      y: 280,
      role: "Western Region",
      desc: "Port Logistics • Supply Chain",
    },
    {
      id: "bangalore",
      name: "Bangalore",
      x: 705,
      y: 300,
      role: "South Operations",
      desc: "Air Freight • Distribution",
    },
    {
      id: "kochi",
      name: "Kochi",
      x: 695,
      y: 325,
      role: "Port Logistics",
      desc: "Marine Cargo • Warehousing",
    },
    {
      id: "tuticorin",
      name: "Tuticorin",
      x: 710,
      y: 335,
      role: "Marine Cargo",
      desc: "Sea Freight • Port Handling",
    },
  ];

  const intlRoutes = [
    { to: "Singapore", x: 770, y: 350, path: "M 715 310 Q 750 340 770 350" },
    { to: "Dubai", x: 630, y: 260, path: "M 690 280 Q 660 260 630 260" },
    { to: "Malaysia", x: 760, y: 340, path: "M 715 310 Q 740 320 760 340" },
    { to: "China", x: 770, y: 220, path: "M 715 310 Q 750 250 770 220" },
    { to: "Europe", x: 520, y: 180, path: "M 690 280 Q 600 200 520 180" },
    {
      to: "United States",
      x: 220,
      y: 220,
      path: "M 690 280 Q 450 150 220 220",
    },
  ];

  return (
    <section
      id="network"
      className="w-full py-[100px] lg:py-[140px] bg-[#F7FAFD] relative overflow-hidden"
    >
      {/* Subtle Background Elements */}
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
            Global Network
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.15] text-navy mb-5"
          >
            Connecting Businesses
            <br className="hidden sm:block" />
            <span className="text-primary"> Across India & Beyond.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-muted text-[16px] lg:text-[18px] leading-relaxed"
          >
            Seagull operates across India's major logistics hubs while
            supporting international freight movement through trusted global
            shipping and transportation partners.
          </motion.p>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-20 lg:mb-24">
          {/* LEFT: Interactive Map */}
          <div className="w-full lg:w-[60%] bg-white rounded-[32px] p-4 lg:p-8 shadow-[0_20px_50px_rgba(11,58,102,0.05)] border border-brand-text/5 relative h-[500px] lg:h-[700px] overflow-hidden flex items-center justify-center">
            {/* Aspect Ratio Container for Map, SVG, and HTML overlay */}
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

              {/* Interactive India Locations */}
              <div className="absolute inset-0 w-full h-full z-20 pointer-events-none">
                {locations.map((loc, i) => {
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
                          className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full border-2 border-white shadow-[0_0_10px_rgba(21,101,192,0.5)] transition-colors duration-300 ${isActive ? "bg-primary" : "bg-primary/80"}`}
                        />

                        {/* Hover Card */}
                        <div
                          className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 lg:mb-4 w-[180px] lg:w-[220px] bg-white rounded-xl shadow-[0_15px_35px_rgba(11,58,102,0.15)] border border-brand-text/5 p-3 lg:p-4 transition-all duration-300 pointer-events-none z-30 ${isActive ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"}`}
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
                Our Operational Reach
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
                    className={`flex items-start gap-3 p-2 lg:p-3 rounded-[16px] transition-all duration-300 border-l-[3px] cursor-pointer ${activeCity === branch.id ? "bg-[#F7FAFD] border-primary shadow-sm" : "bg-transparent border-transparent hover:bg-brand-bg/50"}`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${activeCity === branch.id ? "bg-primary text-white" : "bg-brand-bg text-primary"}`}
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

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full bg-primary rounded-[32px] p-8 lg:p-12 relative overflow-hidden shadow-[0_20px_40px_rgba(21,101,192,0.2)] flex flex-col md:flex-row items-center justify-between gap-8 text-white group"
        >
          {/* subtle background container image */}
          <div className="absolute inset-0 opacity-10 mix-blend-overlay transition-transform duration-700 group-hover:scale-105">
            <img
              src={"/assets/industry_import_export.png"}
              alt="Containers"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 max-w-[600px]">
            <h3 className="font-heading font-extrabold text-[28px] lg:text-[36px] mb-4 leading-tight">
              Your Cargo.
              <br />
              Connected Globally.
            </h3>
            <p className="text-white/80 text-[15px] lg:text-[16px] leading-relaxed">
              Our nationwide infrastructure and international freight network
              help businesses move cargo faster, safer and more efficiently.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
            <a
              href="#network"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-primary px-6 lg:px-8 py-3.5 lg:py-4 rounded-md font-semibold text-[14px] lg:text-[15px] transition-all hover:bg-[#F7FAFD] hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            >
              View All Locations
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border border-white/30 text-white px-6 lg:px-8 py-3.5 lg:py-4 rounded-md font-semibold text-[14px] lg:text-[15px] transition-all hover:bg-white/10 hover:border-white/50 cursor-pointer"
            >
              Contact Our Team
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalNetworkSection;
