"use client";

import { ArrowRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

// ServicesSection
export const ServicesSection = () => {
  const [hoveredRoute, setHoveredRoute] = useState(false);

  return (
    <section
      id="services"
      className="w-full pt-20 pb-0 lg:pt-32 lg:pb-0 bg-white relative"
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
                Our Services
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-extrabold text-[32px] sm:text-[36px] lg:text-[42px] leading-[1.15] text-navy"
            >
              Integrated logistics solutions, <br className="hidden md:block" />
              <span className="text-primary">built around your business.</span>
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
              From customs clearance and global freight forwarding to
              transportation, warehousing and final delivery, Seagull
              coordinates every stage through one dependable logistics network.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              href="#services"
              className="inline-flex items-center gap-2 text-primary font-semibold text-[14px] lg:text-[15px] group hover:text-brightblue transition-colors"
            >
              View All Services
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Customs Clearing (Featured) */}
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
              src={"/assets/service_customs.png"}
              alt="Customs clearance and port handling"
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
                  Customs Clearing
                </h3>
                <p className="text-white/85 text-[16px] lg:text-[17px] mb-6 leading-relaxed">
                  Fast, compliant and hassle-free customs processing across
                  major ports.
                </p>

                {/* Expandable Services */}
                <div className="h-0 overflow-hidden opacity-0 -translate-y-4 group-hover:h-auto group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out flex flex-col gap-2.5 mb-2">
                  {[
                    "Import & Export Documentation",
                    "DGFT & Licensing Support",
                    "Duty Assessment & Compliance",
                    "Port Handling",
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

            {/* Arrow Button */}
            {/* <div className="absolute bottom-8 right-8 lg:bottom-10 lg:right-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-primary group-hover:border-primary group-hover:scale-110 group-hover:shadow-[0_8px_20px_rgba(21,101,192,0.4)] transition-all duration-300">
              <ArrowRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div> */}
          </motion.div>

          {/* Card 2: Freight Forwarding */}
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
              src={"/assets/service_freight.png"}
              alt="Air and ocean freight forwarding"
              className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-60 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/95 to-navy/20 group-hover:from-navy/90 transition-colors" />

            <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
              <span className="absolute top-8 left-8 font-heading font-bold text-white/50 text-lg">
                02
              </span>

              <div className="pointer-events-auto">
                <h3 className="font-heading font-extrabold text-white text-2xl mb-2">
                  Freight Forwarding
                </h3>
                <p className="text-white/80 text-[14px] leading-relaxed mb-5">
                  Flexible air and ocean freight solutions tailored to your
                  timelines and cargo requirements.
                </p>

                <div className="flex gap-2">
                  <span className="px-3 py-1.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/10 text-white text-[12px] font-medium">
                    Air Freight
                  </span>
                  <span className="px-3 py-1.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/10 text-white text-[12px] font-medium">
                    Ocean Freight
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Transportation */}
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
              src={"/assets/service_transport.png"}
              alt="Nationwide transportation"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent" />

            <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
              <span className="absolute top-8 left-8 font-heading font-bold text-white/70 text-lg">
                03
              </span>

              <div className="pointer-events-auto">
                <h3 className="font-heading font-extrabold text-white text-2xl mb-2">
                  Transportation
                </h3>
                <p className="text-white/80 text-[14px] leading-relaxed mb-5">
                  Dependable nationwide road and rail movement supported by a
                  strong logistics network.
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/10 text-white text-[12px] font-medium">
                    Road
                  </span>
                  <span className="px-3 py-1.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/10 text-white text-[12px] font-medium">
                    Rail
                  </span>
                  <span className="px-3 py-1.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/10 text-white text-[12px] font-medium hidden sm:block">
                    Containerised
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Warehousing (Wide) */}
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
                src={"/assets/service_warehousing.png"}
                alt="Modern warehousing and distribution"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-8 lg:p-10 flex flex-col justify-center relative">
              <span className="font-heading font-bold text-primary/40 text-lg mb-2">
                04
              </span>
              <h3 className="font-heading font-extrabold text-navy text-2xl mb-3">
                Warehousing & Distribution
              </h3>
              <p className="text-brand-muted text-[15px] leading-relaxed mb-6">
                Secure storage, inventory coordination, packing and distribution
                for efficient fulfilment.
              </p>

              <ul className="flex flex-col gap-2.5">
                {[
                  "Modern storage facilities",
                  "Temperature-controlled storage",
                  "Inventory management",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span className="text-[13.5px] text-brand-muted font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* <div className="mt-8">
                <div className="w-10 h-10 rounded-full bg-white border border-brand-text/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors cursor-pointer shadow-sm">
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div> */}
            </div>
          </motion.div>

          {/* Card 5: End-to-End (Distinct) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative rounded-[24px] lg:rounded-[28px] overflow-hidden group shadow-[0_15px_40px_rgba(11,58,102,0.15)] bg-navy p-8 lg:p-10 flex flex-col justify-between min-h-[380px] lg:min-h-0"
            onMouseEnter={() => setHoveredRoute(true)}
            onMouseLeave={() => setHoveredRoute(false)}
          >
            {/* Subtle background route graphic */}
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
                End-to-End Logistics
              </h3>
              <p className="text-white/70 text-[15px] leading-relaxed mb-8">
                From pickup and documentation to customs, storage and final
                delivery, we coordinate the complete supply chain.
              </p>
            </div>

            <div className="relative z-10">
              {/* Interactive Route Line */}
              <div className="flex items-center gap-1.5 mb-8 text-[11px] font-bold tracking-wider uppercase text-white/60">
                <span
                  className={
                    hoveredRoute ? "text-accent transition-colors" : ""
                  }
                >
                  Pickup
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
                <span className="hidden sm:inline">Warehouse</span>
                <ArrowRight size={10} className="hidden sm:inline" />
                <span
                  className={
                    hoveredRoute
                      ? "text-accent transition-colors delay-300"
                      : ""
                  }
                >
                  Delivery
                </span>
              </div>

              <a
                href="#workflow"
                className="inline-flex items-center gap-2 text-white font-semibold text-[14px] group-hover:text-primary transition-colors bg-white/10 hover:bg-white px-5 py-2.5 rounded-full backdrop-blur-sm border border-white/20 hover:border-white"
              >
                See How It Works
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Section Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 lg:mt-24 flex flex-col sm:flex-row items-center justify-between gap-6 py-6 border-t border-brand-text/5"
        >
          <p className="font-heading font-bold text-navy text-[16px] lg:text-[18px]">
            One partner. Every stage of your logistics journey.
          </p>
          <a
            href="#services"
            className="group flex items-center justify-center gap-2 bg-white text-primary border border-primary/20 px-6 py-3 rounded-[14px] font-semibold text-[14px] transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:-translate-y-0.5"
          >
            Explore All Services
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform opacity-70 group-hover:opacity-100"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
