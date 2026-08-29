"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const SERVICE_IMAGES = [
  "/assets/photos4.webp", // 01
  "/assets/photos5.webp", // 02
  "/assets/photos6.webp", // 03
  "/assets/photos18.webp", // 04
  "/assets/photos4.webp", // 05
  "/assets/photos17.webp", // 06
  "/assets/photos6.webp", // 07
  "/assets/photos7.webp", // 08
  "/assets/photos15.webp", // 09
  "/assets/photos14.webp", // 10
  "/assets/photos13.webp", // 11
  "/assets/photos12.webp", // 12
];

const TOTAL_SERVICES = 12;

export const ServicesSection = () => {
  const t = useTranslations("ServicesSection");

  // Schema.org Structured Data for SEO with localized values
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: Array.from({ length: TOTAL_SERVICES }).map((_, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Service",
        name: t(`services.${idx}.title`),
        description: t(`services.${idx}.description`),
        provider: {
          "@type": "Organization",
          name: "CargoTrack",
        },
      },
    })),
  };

  return (
    <section
      id="services"
      className="w-full pt-16 pb-20 bg-slate-50/50 relative"
    >
      {/* JSON-LD Rich Snippet for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12 lg:mb-16">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-[2px] bg-primary rounded-full" />
              <span className="text-[12px] font-bold text-primary uppercase tracking-[0.15em]">
                {t("badge")}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading font-extrabold text-[32px] sm:text-[36px] lg:text-[42px] leading-[1.15] text-navy"
            >
              {t("headingPart1")} <br className="hidden md:block" />
              <span className="text-primary">{t("headingHighlight")}</span>
            </motion.h2>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col items-start lg:items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-[15px] lg:text-[16px] leading-relaxed lg:text-end mb-4"
            >
              {t("introText")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-semibold text-[14px] lg:text-[15px] group hover:text-navy transition-colors"
              >
                {t("getQuote")}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform"
                />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Uniform Grid with Alternating Card Patterns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {Array.from({ length: TOTAL_SERVICES }).map((_, index) => {
            const isDarkOverlayCard = index % 2 === 0;
            const serviceId = t(`services.${index}.id`);
            const title = t(`services.${index}.title`);
            const description = t(`services.${index}.description`);
            const imageSrc = SERVICE_IMAGES[index];

            if (isDarkOverlayCard) {
              return (
                /* TYPE 1: Full Image with Dark Navy Gradient Overlay */
                <motion.div
                  key={serviceId}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                  className="group relative min-h-[400px] rounded-[24px] overflow-hidden bg-navy flex flex-col justify-between p-6 sm:p-7 shadow-lg shadow-navy/10 hover:shadow-xl transition-all duration-300 border border-navy/20"
                >
                  <Image
                    src={imageSrc}
                    alt={`${title} - CargoTrack Logistics`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={80}
                    className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/30 pointer-events-none" />

                  {/* Top Header Badge */}
                  <div className="relative z-10 flex justify-between items-center mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold uppercase tracking-wider">
                      <Sparkles size={12} className="text-primary" />{" "}
                      {t("serviceBadge")}
                    </span>
                    <span className="font-mono text-xs font-bold text-white/70">
                      #{serviceId}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="relative z-10 mt-auto">
                    <h3 className="font-heading font-extrabold text-white text-xl sm:text-2xl mb-2 group-hover:text-primary transition-colors">
                      {title}
                    </h3>
                    <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-4">
                      {description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/15">
                      {[0, 1, 2].map((tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium"
                        >
                          {t(`services.${index}.tags.${tagIdx}`)}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              /* TYPE 2: Full Image with Crisp Light Gradient Overlay */
              <motion.div
                key={serviceId}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                className="group relative min-h-[400px] rounded-[24px] overflow-hidden bg-slate-900 flex flex-col justify-between p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200"
              >
                <Image
                  src={imageSrc}
                  alt={`${title} - CargoTrack Services`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={80}
                  className="object-cover opacity-80 brightness-[0.92] group-hover:scale-105 group-hover:opacity-95 transition-all duration-500 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 via-50% to-transparent pointer-events-none" />

                {/* Top Header Badge */}
                <div className="relative z-10 flex justify-between items-center mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold uppercase tracking-wider shadow-sm">
                    <Sparkles size={12} className="text-primary" />{" "}
                    {t("serviceBadge")}
                  </span>
                  <span className="font-mono text-xs font-extrabold text-navy bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-md shadow-sm">
                    #{serviceId}
                  </span>
                </div>

                {/* Body Content */}
                <div className="relative z-10 mt-auto">
                  <h3 className="font-heading font-extrabold text-navy text-xl sm:text-2xl mb-2 group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                  <p className="text-slate-800 font-medium text-[12px] sm:text-[12px] leading-relaxed mb-4">
                    {description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-300/80">
                    {[0, 1, 2].map((tagIdx) => (
                      <span
                        key={tagIdx}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-navy bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-sm px-2.5 py-1 rounded-md"
                      >
                        <Check size={10} className="text-primary stroke-[3]" />
                        {t(`services.${index}.tags.${tagIdx}`)}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
