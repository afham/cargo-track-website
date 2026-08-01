"use client";

import {
  Award,
  Building2,
  CalendarCheck,
  Globe2,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion"; // adjust import according to your package ("motion/react" or "framer-motion")

// Define an interface for the items array
interface TrustItem {
  icon: LucideIcon;
  title: string;
  sub: string;
}

// TrustStrip
export const TrustStrip = () => {
  const items: TrustItem[] = [
    {
      icon: CalendarCheck,
      title: "10+ Years",
      sub: "Trusted Industry Experience",
    },
    {
      icon: Building2,
      title: "KSA Network",
      sub: "Jeddah, Riyadh & Dammam",
    },
    {
      icon: Award,
      title: "IAM & IATA Member",
      sub: "Global Mobility Affiliations",
    },
    {
      icon: Globe2,
      title: "Worldwide Reach",
      sub: "End-to-End Relocations",
    },
    {
      icon: ShieldCheck,
      title: "Specialized Care",
      sub: "Secure Packing & Storage",
    },
  ];

  return (
    <div className="relative z-20 max-w-[1440px] mx-auto px-6 lg:px-12 -mt-16 lg:-mt-24 mb-2">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-white rounded-[24px] lg:rounded-[28px] shadow-[0_20px_40px_rgba(11,58,102,0.06)] border border-brand-bg/50 p-6 lg:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-4"
      >
        {items.map((item, i) => {
          const IconComponent = item.icon;

          return (
            <div key={i} className="flex items-center gap-4 group flex-1">
              <div className="w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center shrink-0">
                <IconComponent
                  size={22}
                  className={
                    i === 1 || i === 3 ? "text-accent" : "text-primary"
                  }
                />
              </div>
              <div>
                <div className="font-heading font-bold text-navy text-[15px]">
                  {item.title}
                </div>
                <div className="font-sans text-[13px] text-brand-muted mt-0.5 leading-tight">
                  {item.sub}
                </div>
              </div>
              {i !== items.length - 1 && (
                <div className="hidden lg:block w-px h-10 bg-brand-bg ml-auto mr-4" />
              )}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};
