import Image from "next/image";
import { useTranslations } from "next-intl";

const AFFILIATION_IMAGES = [
  "/assets/affiliations-1.webp",
  "/assets/affiliations-2.webp",
  "/assets/affiliations-3.webp",
  "/assets/affiliations-4.webp",
  "/assets/affiliations-5.webp",
  "/assets/affiliations-6.webp",
];

export const ClientLogos = () => {
  const t = useTranslations("ClientLogos");

  return (
    <section
      aria-labelledby="affiliations-heading"
      className="w-full bg-brand-bg pt-12 pb-16 overflow-hidden relative z-10 border-b border-brand-text/5"
    >
      {/* Header Label */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-8 flex items-center justify-center gap-3 text-center">
        <span
          aria-hidden="true"
          className="h-px w-6 sm:w-10 bg-brand-muted/30 shrink-0"
        />
        <h2
          id="affiliations-heading"
          className="text-[12px] sm:text-[13px] font-bold text-brand-muted uppercase tracking-[0.15em] text-center"
        >
          {t("heading")}
        </h2>
        <span
          aria-hidden="true"
          className="h-px w-6 sm:w-10 bg-brand-muted/30 shrink-0"
        />
      </div>

      {/* Infinite Logo Marquee */}
      {/* Force dir="ltr" on the scrolling container to keep X-transform calculations identical in RTL */}
      <div className="relative w-full overflow-hidden py-2" dir="ltr">
        {/* Left & Right Fade Gradients */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none"
        />

        {/* Continuous Loop Track via Pure CSS */}
        <div className="flex w-max">
          <div className="flex items-center gap-12 lg:gap-20 pr-12 lg:pr-20 shrink-0 animate-marquee">
            {/* Primary Track */}
            {AFFILIATION_IMAGES.map((src, i) => (
              <div
                key={`primary-${i}`}
                className="transition-transform duration-300 cursor-default select-none shrink-0 flex items-center justify-center h-12 lg:h-20 hover:scale-105"
              >
                <Image
                  src={src}
                  alt={`${t(`affiliations.${i}.name`)} ${t("altSuffix")}`}
                  width={160}
                  height={80}
                  className="h-full w-auto object-contain max-w-[140px] lg:max-w-[160px]"
                />
              </div>
            ))}

            {/* Duplicate Track for Seamless Loop */}
            {AFFILIATION_IMAGES.map((src, i) => (
              <div
                key={`duplicate-${i}`}
                aria-hidden="true"
                className="transition-transform duration-300 cursor-default select-none shrink-0 flex items-center justify-center h-12 lg:h-20 hover:scale-105"
              >
                <Image
                  src={src}
                  alt=""
                  width={160}
                  height={80}
                  className="h-full w-auto object-contain max-w-[140px] lg:max-w-[160px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
