"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState, memo } from "react";
import { useTranslations } from "next-intl";

const TOTAL_SLIDES = 5;

export const HeroTextSlider = memo(() => {
  const t = useTranslations("HeroSlider");
  const [activeSlide, setActiveSlide] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const changeSlide = (nextIndex: number) => {
    setIsFading(true);
    setTimeout(() => {
      setActiveSlide(nextIndex);
      setIsFading(false);
    }, 200);
  };

  useEffect(() => {
    let slideTimer: NodeJS.Timeout;
    let initialTimer: NodeJS.Timeout;

    const startRegularInterval = () => {
      slideTimer = setInterval(() => {
        if (!document.hidden) {
          setIsFading(true);
          setTimeout(() => {
            setActiveSlide((prev) => (prev + 1) % TOTAL_SLIDES);
            setIsFading(false);
          }, 300);
        }
      }, 4000);
    };

    initialTimer = setTimeout(() => {
      if (!document.hidden) {
        setIsFading(true);
        setTimeout(() => {
          setActiveSlide(1);
          setIsFading(false);
          startRegularInterval();
        }, 300);
      } else {
        startRegularInterval();
      }
    }, 2500);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearTimeout(initialTimer);
        clearInterval(slideTimer);
      } else {
        startRegularInterval();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(slideTimer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="max-w-[50rem] w-full flex flex-col justify-center min-h-[calc(100dvh-120px)] lg:min-h-0 py-6">
      <div className="sr-only">
        <h2>{t("srTitle")}</h2>
        <ul>
          {Array.from({ length: TOTAL_SLIDES }).map((_, idx) => (
            <li key={idx}>
              {t(`slides.${idx}.title`)} - {t(`slides.${idx}.subline`)}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-6 lg:gap-8">
        <div className="min-h-[200px] sm:min-h-[170px] lg:min-h-[180px]">
          <div
            className={`transition-all duration-300 ease-out transform ${
              isFading ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
            }`}
          >
            <h1 className="font-heading font-extrabold text-[32px] sm:text-[44px] lg:text-[50px] leading-[1.15] text-white tracking-tight">
              {t(`slides.${activeSlide}.headlinePart1`)}{" "}
              <br className="hidden md:block" />
              <span className="text-blue-400">
                {t(`slides.${activeSlide}.headlineHighlight`)}
              </span>
            </h1>

            <p className="mt-4 lg:mt-6 text-[15px] lg:text-[17px] text-slate-200 font-sans max-w-[580px] leading-relaxed">
              {t(`slides.${activeSlide}.subline`)}
            </p>
          </div>
        </div>

        {/* Slide Indicator Dots */}
        <div
          className="flex items-center gap-2"
          role="tablist"
          aria-label="Hero Carousel Slides"
        >
          {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={activeSlide === index}
              onClick={() => changeSlide(index)}
              aria-label={`Go to slide ${index + 1}: ${t(`slides.${index}.title`)}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeSlide === index
                  ? "w-8 bg-blue-400"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-5">
          <a
            href="#quote-form"
            className="lg:hidden group flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold text-[15px] transition-all duration-300 shadow-[0_8px_25px_rgba(21,101,192,0.4)]"
          >
            {t("buttons.getQuote")}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform"
            />
          </a>

          <a
            href="#services"
            className="group flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold text-[15px] transition-all duration-300 shadow-[0_8px_25px_rgba(21,101,192,0.4)] hover:-translate-y-0.5"
          >
            {t("buttons.exploreServices")}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform opacity-80"
            />
          </a>

          <a
            href="#contact-info"
            className="group flex items-center justify-center gap-2 backdrop-blur-md bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-[15px] transition-all duration-300 hover:border-white/50 hover:bg-white/20 hover:-translate-y-0.5"
          >
            {t("buttons.contactUs")}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform opacity-80"
            />
          </a>
        </div>
      </div>
    </div>
  );
});
