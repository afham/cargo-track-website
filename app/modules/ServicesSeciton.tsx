"use client";

import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

// ServicesSection
export const ServicesSection = () => {
  const [hoveredRoute, setHoveredRoute] = useState(false);

  return (
    <section
      id="services"
      className="w-full pt-16 pb-0 lg:pt-16 lg:pb-0 bg-white relative"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16 lg:mb-20">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-[2px] bg-primary/40 rounded-full" />
              <span className="text-[12px] font-bold text-primary uppercase tracking-[0.15em]">
                Our Core Services
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-extrabold text-[32px] sm:text-[36px] lg:text-[42px] leading-[1.15] text-navy"
            >
              End-to-end relocation & <br className="hidden md:block" />
              <span className="text-primary">
                specialized logistics solutions.
              </span>
            </motion.h2>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col items-start lg:items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-brand-muted text-[15px] lg:text-[16px] leading-relaxed lg:text-right mb-4"
            >
              From household shifting and corporate mobility to industrial
              packing, artwork care, and pilgrim baggage handling, CargoTrack
              coordinates every step with absolute safety and precision.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              href="#services"
              className="inline-flex items-center gap-2 text-primary font-semibold text-[14px] lg:text-[15px] group hover:text-brightblue transition-colors"
            >
              Explore All Solutions
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Card 1: Household Goods Relocation (Featured) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 lg:row-span-2 relative min-h-[480px] lg:min-h-[580px] rounded-[26px] lg:rounded-[30px] overflow-hidden group shadow-[0_15px_40px_rgba(11,58,102,0.06)]"
          >
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 4, ease: "easeOut" }}
              src={"/assets/photos4.webp"}
              alt="Household Goods Relocation and Packing"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-navy/10 via-navy/20 to-navy/90 group-hover:to-navy/95 transition-colors duration-500" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 lg:p-10 pointer-events-none">
              <span className="font-heading font-bold text-white/80 text-xl tracking-wider">
                01
              </span>

              <div className="pointer-events-auto w-full max-w-lg">
                <h3 className="font-heading font-extrabold text-white text-3xl lg:text-4xl mb-3 transition-colors">
                  Household Relocation
                </h3>
                <p className="text-white/85 text-[16px] lg:text-[17px] mb-6 leading-relaxed">
                  Complete, worry-free home shifting services locally and
                  internationally using modern techniques and premium packing
                  materials.
                </p>

                {/* Expandable Key Features */}
                <div className="h-0 overflow-hidden opacity-0 -translate-y-4 group-hover:h-auto group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out flex flex-col gap-2.5 mb-2">
                  {[
                    "Furniture Disassembly & Reassembly",
                    "AC & TV Unmounting & Mounting",
                    "Fragile Kitchen Supply Packaging",
                    "Local & Long-Distance Moving",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-white/90 text-sm font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Vehicle Relocation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative min-h-[320px] lg:min-h-0 rounded-[24px] lg:rounded-[28px] overflow-hidden group shadow-[0_15px_40px_rgba(11,58,102,0.06)] bg-navy"
          >
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 4, ease: "easeOut" }}
              src={"/assets/photos5.webp"}
              alt="Vehicle Relocation and Road Transport"
              className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-60 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/95 to-navy/20 group-hover:from-navy/90 transition-colors" />

            <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
              <span className="absolute top-8 left-8 font-heading font-bold text-white/50 text-lg">
                02
              </span>

              <div className="pointer-events-auto">
                <h3 className="font-heading font-extrabold text-white text-2xl mb-2">
                  Vehicle Relocation
                </h3>
                <p className="text-white/80 text-[14px] leading-relaxed mb-5">
                  Safe, affordable vehicle transport worldwide and reliable road
                  logistics across cities and borders.
                </p>

                <div className="flex gap-2">
                  <span className="px-3 py-1.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/10 text-white text-[12px] font-medium">
                    Auto Shipping
                  </span>
                  <span className="px-3 py-1.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/10 text-white text-[12px] font-medium">
                    Road Transport
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Packing & Crating */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative min-h-[320px] lg:min-h-0 rounded-[24px] lg:rounded-[28px] overflow-hidden group shadow-[0_15px_40px_rgba(11,58,102,0.06)]"
          >
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 4, ease: "easeOut" }}
              src={"/assets/photos6.webp"}
              alt="Industrial Packing and Custom Crating"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent" />

            <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
              <span className="absolute top-8 left-8 font-heading font-bold text-white/70 text-lg">
                03
              </span>

              <div className="pointer-events-auto">
                <h3 className="font-heading font-extrabold text-white text-2xl mb-2">
                  Packing & Crating
                </h3>
                <p className="text-white/80 text-[14px] leading-relaxed mb-5">
                  Heavy machinery, sensitive electronics, and delicate antiques
                  secured with custom wooden boxing.
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/10 text-white text-[12px] font-medium">
                    Heavy Machinery
                  </span>
                  <span className="px-3 py-1.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/10 text-white text-[12px] font-medium">
                    Thermocol & Boxing
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Mobility & Office Relocation (Wide) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-2 relative rounded-[24px] lg:rounded-[28px] overflow-hidden group shadow-[0_15px_40px_rgba(11,58,102,0.06)] bg-[#F8FAFC] border border-brand-text/5 flex flex-col md:flex-row min-h-[380px] lg:min-h-0"
          >
            <div className="w-full md:w-1/2 relative h-[200px] md:h-auto overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 4, ease: "easeOut" }}
                src={"/assets/photos7.webp"}
                alt="Mobility and Office Relocation Services"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-8 lg:p-10 flex flex-col justify-center relative">
              <span className="font-heading font-bold text-primary/40 text-lg mb-2">
                04
              </span>
              <h3 className="font-heading font-extrabold text-navy text-2xl mb-3">
                Mobility & Office Moves
              </h3>
              <p className="text-brand-muted text-[15px] leading-relaxed mb-6">
                Tailored commercial moves and full destination assistance across
                the Middle East and Asia.
              </p>

              <ul className="flex flex-col gap-2.5">
                {[
                  "Home & School Search Assistance",
                  "Immigration & Arrival Formalities",
                  "Detailed Office Move Scheduling",
                  "Secure Storage & Climate Control",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span className="text-[13.5px] text-brand-muted font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Card 5: Pilgrim & Specialized Logistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative rounded-[24px] lg:rounded-[28px] overflow-hidden group shadow-[0_15px_40px_rgba(11,58,102,0.15)] bg-navy p-8 lg:p-10 flex flex-col justify-between min-h-[380px] lg:min-h-0"
            onMouseEnter={() => setHoveredRoute(true)}
            onMouseLeave={() => setHoveredRoute(false)}
          >
            {/* Background Route Graphic */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="w-full h-full"
                stroke="url(#gradient)"
                strokeWidth="0.5"
                fill="none"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#256FD5" />
                    <stop offset="100%" stopColor="#2E8B57" />
                  </linearGradient>
                </defs>
                <path
                  d="M -10 50 Q 25 20, 50 50 T 110 50"
                  strokeDasharray="2 4"
                  className={
                    hoveredRoute ? "animate-[dash_10s_linear_infinite]" : ""
                  }
                />
              </svg>
            </div>

            <div className="relative z-10">
              <span className="font-heading font-bold text-white/30 text-lg mb-4 block">
                05
              </span>
              <h3 className="font-heading font-extrabold text-white text-2xl lg:text-3xl mb-3">
                Pilgrim & Specialized Logistics
              </h3>
              <p className="text-white/70 text-[15px] leading-relaxed mb-8">
                Hassle-free Umrah & Hajj baggage handling in Makkah and Madinah,
                alongside pet relocation, artwork care, and groupage shipping.
              </p>
            </div>

            <div className="relative z-10">
              {/* Pilgrim Baggage Lifecycle */}
              <div className="flex items-center gap-1.5 mb-8 text-[11px] font-bold tracking-wider uppercase text-white/60">
                <span
                  className={
                    hoveredRoute ? "text-accent transition-colors" : ""
                  }
                >
                  Pilgrim
                </span>
                <ArrowRight size={10} />
                <span
                  className={
                    hoveredRoute
                      ? "text-accent transition-colors delay-100"
                      : ""
                  }
                >
                  Customs
                </span>
                <ArrowRight size={10} />
                <span
                  className={
                    hoveredRoute
                      ? "text-accent transition-colors delay-200"
                      : ""
                  }
                >
                  Freight
                </span>
                <ArrowRight size={10} />
                <span
                  className={
                    hoveredRoute
                      ? "text-accent transition-colors delay-300"
                      : ""
                  }
                >
                  Doorstep
                </span>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-white font-semibold text-[14px] group-hover:text-primary transition-colors bg-white/10 hover:bg-white px-5 py-2.5 rounded-full backdrop-blur-sm border border-white/20 hover:border-white"
              >
                Request Custom Solution
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Section Footer */}
      </div>
    </section>
  );
};
