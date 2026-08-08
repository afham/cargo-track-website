"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Globe, Zap, Users, BarChart } from "lucide-react";
import Image from "next/image";
const features = [
  {
    icon: Shield,
    title: "Uncompromising Security",
    desc: "Advanced tracking and secure packing protocols ensure your cargo and personal belongings are protected at every stage.",
  },
  {
    icon: Globe,
    title: "Global Reach, Local Expertise",
    desc: "Extensive international network paired with deep regional customs knowledge for effortless cross-border moves.",
  },
  {
    icon: Clock,
    title: "Time-Definite Delivery",
    desc: "Optimized route planning and priority freight handling to ensure precise, on-time arrivals every time.",
  },
  {
    icon: Zap,
    title: "End-to-End Visibility",
    desc: "Real-time tracking, proactive status updates, and transparent logistics management from pickup to placement.",
  },
  {
    icon: Users,
    title: "Dedicated Moving Experts",
    desc: "Tailored customer support and personalized care from dedicated account managers available whenever you need them.",
  },
  {
    icon: BarChart,
    title: "Cost & Value Efficiency",
    desc: "Transparent pricing structures and strategic consolidation solutions that maximize convenience without hidden fees.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="w-full bg-navy py-16 lg:py-16 relative overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={"/assets/photos11.webp"}
          alt={"Logistics Background"}
          fill
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-navy/85" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-white text-[11px] font-bold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Why Choose CargoTrack
          </div>
          <h2 className="font-heading font-extrabold text-[32px] sm:text-[40px] lg:text-[48px] text-white leading-tight mb-6">
            Logistics & Relocation, <br className="hidden sm:block" />
            <span className="text-primary">Engineered for Reliability.</span>
          </h2>
          <p className="text-white/70 text-[16px] lg:text-[18px] leading-relaxed">
            We go beyond moving shipments—we simplify your entire supply chain
            and relocation journey with industry-leading care, global coverage,
            and unyielding precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-[3px] border border-white/10 rounded-[24px] p-8 hover:bg-white/10 transition-colors duration-300 group"
                style={{ backdropFilter: "blur(3px)" }}
              >
                <div className="w-14 h-14 rounded-2xl bg-[#22c55e]/10 text-[#22c55e] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[inset_0_0_20px_rgba(34,197,94,0.1)]">
                  <Icon size={28} />
                </div>
                <h3 className="font-heading font-bold text-white text-[20px] mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-[15px] leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
