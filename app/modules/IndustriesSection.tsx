"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Factory,
  FlaskConical,
  ShoppingCart,
  Car,
  Globe,
  Settings,
  Network,
} from "lucide-react";

const IndustriesSection = () => {
  return (
    <section
      id="industries"
      className="w-full py-[100px] lg:py-[140px] bg-[#F7FAFD] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-[#F7FAFD] to-[#F7FAFD] pointer-events-none z-0" />

      {/* Blueprint grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1565C0 1px, transparent 1px), linear-gradient(to bottom, #1565C0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[760px] mx-auto mb-16 lg:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-[#2E8B57]" />
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[11px] lg:text-[12px] font-bold text-primary uppercase tracking-[0.15em]"
            >
              Industries We Serve
            </motion.span>
            <span className="w-6 h-[2px] bg-[#2E8B57]" />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.15] text-navy mb-5"
          >
            Logistics Solutions <br className="hidden sm:block" />
            Built for <span className="text-primary">Every Industry.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-muted text-[16px] lg:text-[18px] leading-relaxed"
          >
            Every industry has unique logistics challenges. Seagull delivers
            specialised transportation, customs clearance, freight forwarding
            and warehousing solutions tailored to different business sectors.
          </motion.p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 mb-20 lg:mb-32">
          {/* Card 01: Manufacturing (Large, spans 2x2 on xl, 2 cols on md/lg) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 xl:row-span-2 group rounded-[28px] overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,58,102,0.04)] hover:shadow-[0_20px_40px_rgba(21,101,192,0.1)] border border-brand-text/5 hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-300 relative min-h-[400px] xl:min-h-[600px] flex flex-col"
          >
            <div className="h-[240px] xl:h-[60%] overflow-hidden relative">
              <img
                src={"/assets/industry_manufacturing.png"}
                alt="Manufacturing"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                <Factory size={16} className="text-primary" />
                <span className="text-[12px] font-bold text-navy uppercase tracking-wider">
                  Manufacturing
                </span>
              </div>
            </div>
            <div className="flex-1 p-8 xl:p-10 flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-extrabold text-[24px] lg:text-[28px] text-navy mb-4 group-hover:text-primary transition-colors">
                  Manufacturing
                </h3>
                <p className="text-brand-muted text-[15px] lg:text-[16px] leading-relaxed max-w-[400px]">
                  Reliable supply-chain support for industrial production,
                  machinery, components and raw materials.
                </p>
              </div>
              <a
                href="#contact"
                className="mt-8 flex items-center gap-2 text-primary font-bold text-[15px] group-hover:gap-4 transition-all"
              >
                Learn More <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>

          {/* Card 02: Pharmaceuticals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-1 lg:col-span-1 xl:col-span-1 group rounded-[28px] overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,58,102,0.04)] hover:shadow-[0_20px_40px_rgba(21,101,192,0.1)] border border-brand-text/5 hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-300 relative min-h-[360px] flex flex-col"
          >
            <div className="h-[180px] overflow-hidden relative">
              <img
                src={"/assets/industry_pharmaceuticals.png"}
                alt="Pharmaceuticals"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                <FlaskConical size={14} className="text-primary" />
                <span className="text-[11px] font-bold text-navy uppercase tracking-wider">
                  Healthcare
                </span>
              </div>
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-extrabold text-[20px] text-navy mb-3 group-hover:text-primary transition-colors">
                  Pharmaceuticals
                </h3>
                <p className="text-brand-muted text-[13px] lg:text-[14px] leading-relaxed">
                  Safe and compliant logistics for pharmaceutical products
                  requiring precision and reliability.
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <a
                  href="#contact"
                  className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 03: Retail & FMCG */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1 lg:col-span-1 xl:col-span-1 group rounded-[28px] overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,58,102,0.04)] hover:shadow-[0_20px_40px_rgba(21,101,192,0.1)] border border-brand-text/5 hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-300 relative min-h-[360px] flex flex-col"
          >
            <div className="h-[180px] overflow-hidden relative">
              <img
                src={"/assets/industry_retail_fmcg.png"}
                alt="Retail & FMCG"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                <ShoppingCart size={14} className="text-primary" />
                <span className="text-[11px] font-bold text-navy uppercase tracking-wider">
                  Retail
                </span>
              </div>
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-extrabold text-[20px] text-navy mb-3 group-hover:text-primary transition-colors">
                  Retail & FMCG
                </h3>
                <p className="text-brand-muted text-[13px] lg:text-[14px] leading-relaxed">
                  Fast inventory movement supporting high-volume retail and FMCG
                  operations.
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <a
                  href="#contact"
                  className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 04: Automotive (Span 2 cols on md/lg, 1 on xl) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 lg:col-span-1 xl:col-span-1 group rounded-[28px] overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,58,102,0.04)] hover:shadow-[0_20px_40px_rgba(21,101,192,0.1)] border border-brand-text/5 hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-300 relative min-h-[360px] flex flex-col"
          >
            <div className="h-[180px] overflow-hidden relative">
              <img
                src={"/assets/industry_automotive.png"}
                alt="Automotive"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                <Car size={14} className="text-primary" />
                <span className="text-[11px] font-bold text-navy uppercase tracking-wider">
                  Auto
                </span>
              </div>
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-extrabold text-[20px] text-navy mb-3 group-hover:text-primary transition-colors">
                  Automotive
                </h3>
                <p className="text-brand-muted text-[13px] lg:text-[14px] leading-relaxed">
                  Efficient transportation of vehicles, spare parts and
                  industrial components.
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <a
                  href="#contact"
                  className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 05: Import & Export (Span 2 cols on md, 2 on lg, 1 on xl) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-1 lg:col-span-2 xl:col-span-1 group rounded-[28px] overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,58,102,0.04)] hover:shadow-[0_20px_40px_rgba(21,101,192,0.1)] border border-brand-text/5 hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-300 relative min-h-[360px] flex flex-col"
          >
            <div className="h-[180px] overflow-hidden relative">
              <img
                src={"/assets/industry_import_export.png"}
                alt="Import & Export"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                <Globe size={14} className="text-primary" />
                <span className="text-[11px] font-bold text-navy uppercase tracking-wider">
                  Global
                </span>
              </div>
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-extrabold text-[20px] text-navy mb-3 group-hover:text-primary transition-colors">
                  Import & Export
                </h3>
                <p className="text-brand-muted text-[13px] lg:text-[14px] leading-relaxed">
                  International logistics connecting businesses with global
                  markets.
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <a
                  href="#contact"
                  className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 06: Custom Business Solutions (Dark Blue) */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.5 }}
            className="md:col-span-1 lg:col-span-3 xl:col-span-2 group rounded-[28px] overflow-hidden bg-navy shadow-sm hover:shadow-[0_20px_40px_rgba(11,58,102,0.2)] hover:-translate-y-1.5 transition-all duration-300 relative min-h-[360px] flex flex-col p-8 lg:p-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/40 via-navy to-navy opacity-50 pointer-events-none" />

          
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none w-[300px] h-[300px] translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700">
              <Network size={300} strokeWidth={0.5} className="text-white" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white mb-6">
                  <Settings size={24} />
                </div>
                <h3 className="font-heading font-extrabold text-[24px] lg:text-[32px] text-white mb-4 leading-tight">Need specialised logistics?</h3>
                <p className="text-white/80 text-[15px] lg:text-[16px] leading-relaxed max-w-[400px]">We create customised logistics solutions based on your operational requirements.</p>
              </div>
              <div className="mt-8">
                <button className="bg-primary text-white px-6 py-3.5 rounded-md font-semibold text-[14px] lg:text-[15px] transition-all hover:bg-brightblue hover:shadow-[0_8px_20px_rgba(21,101,192,0.3)] hover:-translate-y-0.5 inline-flex items-center gap-2 group/btn">
                  Talk to Our Team
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div> */}
        </div>

        {/* BOTTOM HIGHLIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full bg-primary rounded-[32px] p-8 sm:p-10 lg:p-14 relative overflow-hidden shadow-[0_20px_40px_rgba(21,101,192,0.15)] group"
        >
          {/* Animated Route Lines in Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
            <svg
              viewBox="0 0 1000 300"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <motion.path
                d="M -100 150 Q 250 50 500 150 T 1100 150"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="8 8"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />
              <motion.path
                d="M -100 200 Q 250 100 500 200 T 1100 200"
                fill="none"
                stroke="white"
                strokeWidth="1"
                opacity="0.5"
                strokeDasharray="4 4"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="font-heading font-extrabold text-[28px] sm:text-[32px] lg:text-[40px] text-white mb-4 leading-tight">
                Supporting Industries <br className="hidden sm:block" />
                Across India & Beyond.
              </h3>
              <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed max-w-[500px] mx-auto lg:mx-0 mb-8 lg:mb-10">
                Our integrated logistics network enables businesses across
                multiple industries to move products safely, efficiently and on
                time.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-navy px-8 py-4 rounded-md font-semibold text-[15px] transition-all hover:bg-[#F7FAFD] hover:shadow-lg hover:-translate-y-1"
                >
                  Request a Logistics Consultation
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border border-white/30 text-white px-8 py-4 rounded-md font-semibold text-[15px] transition-all hover:bg-white/10 hover:border-white/50"
                >
                  View All Services
                </a>
              </div>
            </div>

            {/* Floating Industry Icons */}
            <div className="w-full lg:w-1/2 h-[250px] lg:h-full relative flex items-center justify-center">
              <div className="w-full max-w-[400px] aspect-[2/1] relative flex items-center justify-center">
                {/* Route Connection Line */}
                <svg
                  viewBox="0 0 400 200"
                  className="absolute inset-0 w-full h-full pointer-events-none z-0"
                >
                  <motion.path
                    d="M 50 100 C 80 40, 170 40, 200 100 C 230 160, 320 160, 350 100"
                    fill="none"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M 50 100 C 80 160, 170 160, 200 100 C 230 40, 320 40, 350 100"
                    fill="none"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      delay: 0.3,
                      ease: "easeInOut",
                    }}
                  />
                </svg>

                {/* Icons */}
                <motion.div
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary shadow-[0_10px_20px_rgba(0,0,0,0.1)] z-10"
                  style={{ left: "12.5%", top: "50%" }}
                  animate={{ y: [-4, 4, -4] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Factory size={24} />
                </motion.div>

                <motion.div
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-primary shadow-[0_10px_20px_rgba(0,0,0,0.1)] z-10"
                  style={{ left: "31.25%", top: "25%" }}
                  animate={{ y: [4, -4, 4] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FlaskConical size={20} />
                </motion.div>

                <motion.div
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-[0_15px_30px_rgba(0,0,0,0.15)] z-20"
                  style={{ left: "50%", top: "50%" }}
                  animate={{ y: [-6, 6, -6] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ShoppingCart size={28} />
                </motion.div>

                <motion.div
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-primary shadow-[0_10px_20px_rgba(0,0,0,0.1)] z-10"
                  style={{ left: "68.75%", top: "25%" }}
                  animate={{ y: [5, -5, 5] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Car size={24} />
                </motion.div>

                <motion.div
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-[0_10px_20px_rgba(0,0,0,0.1)] z-10"
                  style={{ left: "87.5%", top: "50%" }}
                  animate={{ y: [-3, 3, -3] }}
                  transition={{
                    duration: 4.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Globe size={20} />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
