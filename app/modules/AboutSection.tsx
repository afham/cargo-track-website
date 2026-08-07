"use client";

import Image from "next/image";
import { ArrowRight, Check, Globe, Target } from "lucide-react";
import { motion } from "framer-motion";

// 1. Move static items out of render scope
const STRENGTHS = [
  "Dedicated supervisors & carpenters",
  "Jeddah, Riyadh & Dammam hubs",
  "IAM & IATA global networks",
  "Comprehensive insurance coverage",
] as const;

export const AboutSection = () => {
  return (
    <section
      id="about-us"
      aria-labelledby="about-heading"
      className="w-full py-16 lg:py-16 bg-brand-bg relative overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTEsIDU4LCAxMDIsIDAuMDMpIi8+PC9zdmc+')] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-40 mix-blend-multiply" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Left Column - Visual Story */}
          <div className="w-full lg:w-[54%] relative mb-6 lg:mb-0">
            {/* Main Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full lg:w-[85%] aspect-[4/3] lg:aspect-[4/5] rounded-[24px] lg:rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(11,58,102,0.08)] group"
            >
              <Image
                src="/assets/photos1.webp"
                alt="Cargo Track professional relocation crew handling safe packing"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy/5 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>

            {/* Secondary Overlapping Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="absolute -bottom-4 lg:-bottom-8 right-2 lg:-right-4 w-[55%] lg:w-[50%] aspect-square rounded-[20px] lg:rounded-[24px] border-[8px] lg:border-[12px] border-brand-bg overflow-hidden shadow-[0_25px_50px_rgba(11,58,102,0.12)] z-10 group"
            >
              <Image
                src="/assets/photos2.webp"
                alt="Cargo Track secure warehouse and international logistics packing facility"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </motion.div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="absolute top-6 lg:top-10 -left-2 lg:-left-8 bg-white px-5 lg:px-6 py-3 lg:py-4 rounded-[16px] lg:rounded-[20px] shadow-[0_15px_35px_rgba(11,58,102,0.1)] border border-brand-text/5 flex flex-col z-20"
            >
              <div className="flex items-center gap-2 mb-0.5 lg:mb-1">
                <span
                  className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-accent animate-pulse"
                  aria-hidden="true"
                />
                <strong className="font-heading font-extrabold text-navy text-xl lg:text-2xl">
                  10+ Years
                </strong>
              </div>
              <span className="text-[12px] lg:text-[13px] font-sans font-medium text-brand-muted">
                Trusted Relocation Leaders
              </span>
            </motion.div>

            {/* Decorative Map Ring */}
            <div
              className="absolute -top-12 -right-12 w-48 h-48 border border-primary/10 rounded-full border-dashed animate-[spin_30s_linear_infinite] pointer-events-none -z-10 hidden lg:block"
              aria-hidden="true"
            />
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-[46%] flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <span
                className="w-8 h-[2px] bg-primary/40 rounded-full"
                aria-hidden="true"
              />
              <span className="text-[12px] font-bold text-primary uppercase tracking-[0.15em]">
                Who We Are
              </span>
            </motion.div>

            <motion.h2
              id="about-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-extrabold text-[32px] sm:text-[36px] lg:text-[42px] leading-[1.15] text-navy mb-5 lg:mb-6"
            >
              Your trusted partner for <br className="hidden lg:block" />
              <span className="text-primary">seamless global mobility.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-brand-muted text-[16px] lg:text-[17px] leading-relaxed max-w-[600px] mb-8 lg:mb-10"
            >
              For over a decade, Cargo Track Relocations has delivered premier
              relocation, freight, and logistics solutions across Saudi Arabia
              and worldwide. With major branches in Jeddah, Riyadh, and Dammam,
              we simplify international moves, corporate mobility, and storage
              through an end-to-end, stress-free approach.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-4 lg:gap-5 mb-8 lg:mb-10">
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-[18px] p-5 lg:p-6 border border-brand-text/[0.04] shadow-[0_4px_20px_rgba(11,58,102,0.02)] hover:shadow-[0_12px_30px_rgba(11,58,102,0.06)] hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors relative">
                  <Target size={20} aria-hidden="true" />
                  <span
                    className="absolute top-0 right-0 w-2 h-2 rounded-full bg-accent border-2 border-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-heading font-bold text-navy text-[16px] lg:text-[17px] mb-2">
                  Our Mission
                </h3>
                <p className="text-brand-muted text-[13.5px] leading-relaxed">
                  To provide secure, tailored, and hassle-free relocation
                  solutions backed by expert craftsmanship and global standards.
                </p>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-[18px] p-5 lg:p-6 border border-brand-text/[0.04] shadow-[0_4px_20px_rgba(11,58,102,0.02)] hover:shadow-[0_12px_30px_rgba(11,58,102,0.06)] hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors relative">
                  <Globe size={20} aria-hidden="true" />
                  <span
                    className="absolute top-0 right-0 w-2 h-2 rounded-full bg-accent border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-heading font-bold text-navy text-[16px] lg:text-[17px] mb-2">
                  Our Vision
                </h3>
                <p className="text-brand-muted text-[13.5px] leading-relaxed">
                  To be the regional leader in mobility, recognized for total
                  reliability, safety, and worldwide logistics alliances.
                </p>
              </motion.div>
            </div>

            {/* Operational Strengths */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8 lg:mb-10"
            >
              <h3 className="font-heading font-bold text-navy text-[15px] lg:text-[16px] mb-4">
                Built for complete peace of mind
              </h3>
              <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6 list-none p-0 m-0">
                {STRENGTHS.map((strength) => (
                  <li key={strength} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-[2px] lg:mt-[1px]">
                      <Check
                        size={12}
                        className="text-primary"
                        strokeWidth={3}
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-[14px] lg:text-[15px] font-sans text-brand-muted font-medium">
                      {strength}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-primary font-semibold text-[14px] lg:text-[15px] group"
              >
                Explore Our Relocation Services
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
