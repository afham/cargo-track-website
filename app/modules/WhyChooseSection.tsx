"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Globe, Zap, Users, BarChart } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const FEATURE_ICONS = [Shield, Globe, Clock, Zap, Users, BarChart];

export const WhyChooseSection = () => {
  const t = useTranslations("WhyChooseSection");

  return (
    <section className="w-full bg-navy py-16 lg:py-16 relative overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/assets/photos11.webp"
          alt={t("altBg")}
          fill
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-navy/85" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-white text-[11px] font-bold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {t("badge")}
          </div>
          <h2 className="font-heading font-extrabold text-[32px] sm:text-[40px] lg:text-[48px] text-white leading-tight mb-6">
            {t("headingPart1")} <br className="hidden sm:block" />
            <span className="text-primary">{t("headingHighlight")}</span>
          </h2>
          <p className="text-white/70 text-[16px] lg:text-[18px] leading-relaxed">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURE_ICONS.map((Icon, i) => {
            const title = t(`features.${i}.title`);
            const desc = t(`features.${i}.desc`);

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
                  {title}
                </h3>
                <p className="text-white/60 text-[15px] leading-relaxed">
                  {desc}
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
