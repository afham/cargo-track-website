import {
  Award,
  Building2,
  CalendarCheck,
  Globe2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { memo } from "react";

interface TrustItem {
  icon: LucideIcon;
  title: string;
  sub: string;
  highlightIcon?: boolean;
}

const TRUST_ITEMS: TrustItem[] = [
  {
    icon: CalendarCheck,
    title: "10+ Years",
    sub: "Trusted Industry Experience",
  },
  {
    icon: Building2,
    title: "KSA Network",
    sub: "Jeddah, Riyadh & Dammam",
    highlightIcon: true,
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
    highlightIcon: true,
  },
  {
    icon: ShieldCheck,
    title: "Specialized Care",
    sub: "Secure Packing & Storage",
  },
];

export const TrustStrip = memo(() => {
  return (
    <section
      aria-label="Trust Signals and Certifications"
      className="relative z-20 max-w-[1440px] mx-auto px-6 lg:px-12 -mt-16 lg:-mt-24 mb-2"
    >
      <ul className="bg-white rounded-[24px] lg:rounded-[28px] shadow-[0_20px_40px_rgba(11,58,102,0.06)] border border-brand-bg/50 p-6 lg:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-4 list-none m-0">
        {TRUST_ITEMS.map((item, i) => {
          const IconComponent = item.icon;

          return (
            <li
              key={item.title}
              className="flex items-center gap-4 group flex-1 w-full lg:w-auto"
            >
              <div className="w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center shrink-0">
                <IconComponent
                  size={22}
                  className={
                    item.highlightIcon ? "text-accent" : "text-primary"
                  }
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-col">
                <strong className="font-heading font-bold text-navy text-[15px] leading-snug">
                  {item.title}
                </strong>
                <span className="font-sans text-[13px] text-brand-muted mt-0.5 leading-tight">
                  {item.sub}
                </span>
              </div>
              {i !== TRUST_ITEMS.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden lg:block w-px h-10 bg-brand-bg ml-auto mr-4"
                />
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
});

TrustStrip.displayName = "TrustStrip";
