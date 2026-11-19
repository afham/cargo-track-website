"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { SERVICE_ITEMS } from "@/lib/services-data";

const TOTAL_SERVICES = 12;

export const ServicesSection = () => {
  const t = useTranslations("ServicesSection");
  const locale = useLocale();

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
        url: `https://cargotrack.co/${locale}/services/${SERVICE_ITEMS[idx]?.slug || ""}`,
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
      className="w-full py-12 lg:py-16 bg-slate-50/50 relative scroll-mt-24"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Compact Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 mb-8 lg:mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-6 h-[2px] bg-primary rounded-full" />
              <span className="text-[11px] font-bold text-primary uppercase tracking-[0.15em]">
                {t("badge")}
              </span>
            </div>

            <h2 className="font-heading font-extrabold text-[28px] sm:text-[34px] lg:text-[38px] leading-[1.15] text-navy">
              {t("headingPart1")}{" "}
              <span className="text-primary">{t("headingHighlight")}</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3 max-w-md">
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed lg:text-end">
              {t("introText")}
            </p>
            <Link
              href={`/${locale}/request-a-quote`}
              className="inline-flex items-center gap-1.5 text-primary font-bold text-xs sm:text-sm shrink-0 group hover:text-navy active:text-navy active:scale-[0.98] transition-all touch-manipulation"
            >
              {t("getQuote")}
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform"
              />
            </Link>
          </div>
        </div>

        {/* Compact Grid with Uniform White Cards & Blue Accent Border */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
          {Array.from({ length: TOTAL_SERVICES }).map((_, index) => {
            const serviceId = t(`services.${index}.id`);
            const title = t(`services.${index}.title`);
            const description = t(`services.${index}.description`);
            const serviceItem = SERVICE_ITEMS[index];
            const imageSrc = serviceItem?.image || "/assets/photos2.webp";
            const serviceHref = `/${locale}/services/${serviceItem?.slug || ""}`;

            return (
              <motion.div
                key={serviceId}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (index % 4) * 0.05 }}
              >
                <Link
                  href={serviceHref}
                  className="group h-full rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-200 border border-primary/25 hover:border-primary active:border-primary active:scale-[0.985] active:bg-primary/[0.04] bg-white text-navy shadow-sm hover:shadow-lg hover:shadow-primary/10 active:shadow-md active:shadow-primary/15 select-none sm:select-auto touch-manipulation"
                >
                  {/* Compact Top Thumbnail with Fade into White Body */}
                  <div className="relative h-36 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={imageSrc}
                      alt={`${title} - CargoTrack Logistics`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      quality={75}
                      className="object-cover group-hover:scale-105 group-active:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent group-active:from-primary/10 transition-colors duration-200" />
                    <span className="absolute top-2.5 end-2.5 font-mono text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-md bg-white/90 text-navy border border-primary/20 shadow-xs">
                      #{serviceId}
                    </span>
                  </div>

                  {/* Tight Card Body */}
                  <div className="p-4 flex-1 flex flex-col justify-between bg-transparent">
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <h3 className="font-heading font-bold text-base leading-snug text-navy group-hover:text-primary group-active:text-primary transition-colors">
                          {title}
                        </h3>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all group-hover:bg-primary group-hover:text-white group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 group-active:bg-primary group-active:text-white group-active:translate-x-0.5 rtl:group-active:-translate-x-0.5 bg-slate-100 text-navy">
                          <ArrowRight size={12} className="rtl:rotate-180" />
                        </div>
                      </div>

                      <p className="text-xs leading-relaxed line-clamp-2 mb-3 text-slate-600">
                        {description}
                      </p>
                    </div>

                    {/* Compact Tags */}
                    <div className="flex flex-wrap gap-1 pt-2.5 border-t border-slate-100 group-active:border-primary/15 transition-colors">
                      {[0, 1, 2].map((tagIdx) => (
                        <span
                          key={tagIdx}
                          className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 group-active:bg-primary/10 group-active:text-primary text-slate-700 transition-colors"
                        >
                          <Check size={9} className="text-primary stroke-[3]" />
                          {t(`services.${index}.tags.${tagIdx}`)}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
