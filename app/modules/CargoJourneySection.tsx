"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Truck,
  FileText,
  ShieldCheck,
  Plane,
  Package,
  MapPin,
  CheckCircle,
  Ship,
  ArrowRight,
  ArrowRightCircle,
} from "lucide-react";

const stations = [
  {
    id: 1,
    title: "Documentation",
    icon: FileText,
    desc: "Verified paperwork & compliance.",
  },
  {
    id: 2,
    title: "Customs Clearance",
    icon: ShieldCheck,
    desc: "Regulated border crossing.",
  },
  {
    id: 3,
    title: "Freight Forwarding",
    icon: Ship,
    desc: "Global transport coordination.",
  },
  {
    id: 4,
    title: "Transportation",
    icon: Truck,
    desc: "Secure transit network.",
  },
  {
    id: 5,
    title: "Warehousing",
    icon: Package,
    desc: "Storage and distribution.",
  },
  {
    id: 6,
    title: "Final Delivery",
    icon: MapPin,
    desc: "Delivered to destination.",
  },
];

const CargoJourneySection = () => {
  const [hoveredStation, setHoveredStation] = useState<number | null>(null);

  return (
    <section
      id="workflow"
      className="w-full bg-white relative pt-12 pb-24 lg:pt-16 lg:pb-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#1565C0 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#4ade80]/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[760px] mx-auto mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-[2px] bg-[#4ade80]" />
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[12px] font-bold text-primary uppercase tracking-[0.2em]"
            >
              How We Move Cargo
            </motion.span>
            <span className="w-6 h-[2px] bg-[#4ade80]" />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.1] mb-6 text-navy"
          >
            Every Shipment, <br className="hidden sm:block" />
            <span className="text-primary">Handled with Precision.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-[18px] lg:text-[20px] leading-relaxed font-medium"
          >
            From documentation and customs clearance to transportation and final
            delivery, Seagull manages every stage with precision, transparency
            and reliability.
          </motion.p>
        </div>

        {/* Main Experience: Interactive Route */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full bg-white rounded-[32px] shadow-[0_20px_60px_rgba(11,58,102,0.08)] border border-slate-100 p-8 lg:p-12 mb-12 relative h-auto lg:h-[650px] flex flex-col lg:flex-row gap-8 lg:gap-0 overflow-hidden"
        >
          {/* Globe Background */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] lg:w-[850px] lg:h-[850px] opacity-[0.06] text-primary pointer-events-none z-0 overflow-hidden">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.6"
              style={{
                animation: "spin 120s linear infinite",
                transformOrigin: "center",
              }}
            >
              <g>
                {/* Latitudes & Longitudes */}
                <circle cx="100" cy="100" r="90" />
                <circle cx="100" cy="100" r="90" strokeDasharray="3 3" />
                <ellipse cx="100" cy="100" rx="90" ry="30" />
                <ellipse cx="100" cy="100" rx="90" ry="60" />
                <ellipse cx="100" cy="100" rx="30" ry="90" />
                <ellipse cx="100" cy="100" rx="60" ry="90" />
                <line x1="10" y1="100" x2="190" y2="100" />
                <line
                  x1="100"
                  y1="10"
                  x2="100"
                  y2="190"
                  strokeDasharray="2 2"
                />

                {/* Nodes / Dots representing hubs */}
                <circle cx="130" cy="70" r="2" fill="#4ade80" />
                <circle cx="70" cy="130" r="2" fill="#1565C0" />
                <circle cx="150" cy="110" r="2.5" fill="#4ade80" />
                <circle cx="100" cy="40" r="1.5" fill="#1565C0" />
                <circle cx="60" cy="80" r="1.5" fill="#4ade80" />
              </g>
            </svg>
          </div>

          {/* LEFT: Start Point */}
          <div className="w-full lg:w-[250px] shrink-0 flex flex-col z-20">
            <div className="bg-[#F7FAFD] rounded-[24px] overflow-hidden border border-slate-100 h-full flex flex-col shadow-sm group">
              <div
                className="h-[150px] w-full bg-cover bg-center opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                style={{
                  backgroundImage: `url(${"/assets/cargo_pickup.png"})`,
                }}
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white text-primary flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                    <Truck size={24} />
                  </div>
                  <h4 className="font-heading font-extrabold text-[22px] text-navy mb-2">
                    Cargo Pickup
                  </h4>
                  <p className="text-slate-500 text-[14px] font-medium leading-relaxed mb-4">
                    Cargo is collected from origin.
                  </p>
                </div>
                <ul className="space-y-3 mt-2">
                  <li className="flex items-center gap-2 text-[13px] font-semibold text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />{" "}
                    Scheduling
                  </li>
                  <li className="flex items-center gap-2 text-[13px] font-semibold text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />{" "}
                    Documentation Ready
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CENTER: Animated Route & Stations */}
          <div className="flex-1 relative min-h-[300px] lg:min-h-0 lg:h-full flex items-center justify-center z-10 mx-0 lg:mx-8">
            {/* 2:1 Aspect Ratio Wrapper to prevent SVG and moving circle stretch */}
            <div className="w-full h-full lg:h-auto lg:aspect-[2/1] lg:max-w-[800px] lg:max-h-full relative flex flex-col lg:block justify-between py-8 lg:py-0">
              {/* SVG Path Background */}
              <div className="absolute inset-0 pointer-events-none hidden lg:block">
                <svg viewBox="0 0 800 400" className="w-full h-full">
                  <path
                    id="logisticsRoute"
                    d="M 0,200 C 150,200 200,100 300,100 C 400,100 450,300 550,300 C 650,300 700,200 800,200"
                    fill="none"
                    stroke="#E2E8F0"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="8 8"
                  />
                  <motion.path
                    d="M 0,200 C 150,200 200,100 300,100 C 400,100 450,300 550,300 C 650,300 700,200 800,200"
                    fill="none"
                    stroke="#1565C0"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                  />

                  {/* Traveling Cargo Dot */}
                  <circle
                    r="6"
                    fill="#4ade80"
                    className="hidden lg:block shadow-lg"
                  >
                    <animateMotion
                      dur="6s"
                      repeatCount="indefinite"
                      path="M 0,200 C 150,200 200,100 300,100 C 400,100 450,300 550,300 C 650,300 700,200 800,200"
                    />
                  </circle>
                </svg>
              </div>

              {/* Mobile Vertical Line */}
              <div className="absolute top-0 bottom-0 left-[35px] w-1 bg-slate-100 lg:hidden" />
              <motion.div
                className="absolute top-0 bottom-0 left-[35px] w-1 bg-primary lg:hidden origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />

              {/* Stations */}
              {stations.map((station, index) => {
                const Icon = station.icon;

                // Approximate positions along the SVG path for desktop
                const desktopPositions = [
                  { x: "12%", y: "45%" }, // Doc
                  { x: "28%", y: "20%" }, // Customs
                  { x: "46%", y: "45%" }, // Freight
                  { x: "62%", y: "75%" }, // Transport
                  { x: "80%", y: "65%" }, // Warehousing
                  { x: "92%", y: "45%" }, // Delivery
                ];

                return (
                  <motion.div
                    key={station.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    onMouseEnter={() => setHoveredStation(station.id)}
                    onMouseLeave={() => setHoveredStation(null)}
                    className="relative lg:absolute flex items-center lg:block lg:-translate-x-1/2 lg:-translate-y-1/2 group z-20 cursor-pointer ml-4 lg:ml-0 lg:left-[var(--lg-x)] lg:top-[var(--lg-y)]"
                    style={
                      {
                        "--lg-x": desktopPositions[index].x,
                        "--lg-y": desktopPositions[index].y,
                      } as React.CSSProperties
                    }
                  >
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm flex items-center justify-center text-primary group-hover:scale-110 group-hover:shadow-lg group-hover:bg-primary group-hover:text-white transition-all duration-300 relative z-10">
                      <Icon size={24} />
                    </div>

                    {/* Tooltip / Label */}
                    <div className="mb-5 ml-6 lg:ml-0 lg:absolute lg:top-full lg:left-1/2 lg:-translate-x-1/2 lg:mt-4 bg-white p-3 lg:p-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-slate-100 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:pointer-events-none transition-all duration-300 w-[200px] lg:w-[180px] lg:-translate-y-2 lg:group-hover:translate-y-0 text-left lg:text-center">
                      <h5 className="font-bold text-[14px] text-navy mb-1">
                        {station.title}
                      </h5>
                      <p className="text-[12px] text-slate-500 font-medium leading-tight">
                        {station.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Destination Card */}
          <div className="w-full lg:w-[300px] shrink-0 z-20 h-full flex flex-col justify-end">
            <div className="bg-[#0B3A66] rounded-[24px] overflow-hidden shadow-lg border border-[#1565C0] h-full flex flex-col text-white group">
              <div
                className="h-[180px] w-full bg-cover bg-center opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                style={{
                  backgroundImage: `url(${"/assets/industry_import_export.png"})`,
                }}
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#4ade80]/20 text-[#4ade80] rounded-full text-[12px] font-bold tracking-wider uppercase mb-4">
                    <CheckCircle size={14} /> Delivered
                  </div>
                  <h4 className="font-heading font-extrabold text-[22px] leading-tight mb-3">
                    Shipment Delivered Successfully
                  </h4>
                </div>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start gap-2 text-[13px] text-white/70">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary" />{" "}
                    Professional logistics support
                  </li>
                  <li className="flex items-start gap-2 text-[13px] text-white/70">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary" />{" "}
                    Safe cargo handling
                  </li>
                  <li className="flex items-start gap-2 text-[13px] text-white/70">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary" />{" "}
                    Real-time coordination
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM: Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20"
        >
          <div className="bg-white rounded-[20px] p-6 shadow-sm border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all group">
            <div className="text-[12px] font-bold text-slate-400 uppercase tracking-widest mb-1">
              Current Stage
            </div>
            <div className="font-heading font-bold text-primary text-[18px] group-hover:text-brightblue">
              Documentation Complete
            </div>
          </div>
          <div className="bg-white rounded-[20px] p-6 shadow-sm border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all group">
            <div className="text-[12px] font-bold text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />{" "}
              Shipment Status
            </div>
            <div className="font-heading font-bold text-navy text-[18px]">
              In Transit
            </div>
          </div>
          <div className="bg-white rounded-[20px] p-6 shadow-sm border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all group">
            <div className="text-[12px] font-bold text-slate-400 uppercase tracking-widest mb-1">
              Coverage
            </div>
            <div className="font-heading font-bold text-navy text-[18px]">
              India + International
            </div>
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full bg-gradient-to-br from-[#0B3A66] to-[#1565C0] rounded-[32px] p-10 md:p-14 lg:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 shadow-xl group"
        >
          <div className="absolute inset-0 opacity-20 mix-blend-overlay transition-transform duration-700 group-hover:scale-105">
            <Image
              src={"/assets/industry_import_export.png"}
              alt="Cargo Background"
              className="w-full h-full object-cover"
              fill
            />
          </div>
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, white 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />

          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h3 className="font-heading font-extrabold text-[32px] md:text-[40px] text-white mb-4 leading-tight">
              Your Cargo. <br className="hidden sm:block" />
              Our Responsibility.
            </h3>
            <p className="text-white/80 font-medium text-[16px] md:text-[18px]">
              Experience seamless logistics from pickup to delivery with a
              trusted partner focused on reliability and operational excellence.
            </p>
          </div>

          <div className="relative z-10 flex flex-col w-full md:w-auto gap-4 shrink-0">
            {/* <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-[16px] hover:bg-slate-50 transition-all shadow-lg hover:-translate-y-1 inline-flex justify-center items-center gap-2">
              Track Your Shipment
              <ArrowRightCircle size={20} />
            </button> */}
            <a
              href="#contact"
              className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-[16px] hover:bg-white/10 transition-all flex justify-center items-center"
            >
              Request a Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CargoJourneySection;
