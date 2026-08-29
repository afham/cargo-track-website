"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star, User } from "lucide-react";
import { useTranslations } from "next-intl";

const TOTAL_TESTIMONIALS = 7;

const StarRating = ({ count = 5 }: { count?: number }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

export const TestimonialsSection = () => {
  const t = useTranslations("TestimonialsSection");

  const rawTestimonials = useMemo(
    () =>
      Array.from({ length: TOTAL_TESTIMONIALS }).map((_, i) => ({
        id: i + 1,
        company: t(`items.${i}.company`),
        industry: t(`items.${i}.industry`),
        quote: t(`items.${i}.quote`),
        rating: 5,
        icon: User,
      })),
    [t],
  );

  const testimonials = useMemo(
    () => [...rawTestimonials, ...rawTestimonials, ...rawTestimonials],
    [rawTestimonials],
  );

  const [currentIndex, setCurrentIndex] = useState(TOTAL_TESTIMONIALS);
  const [cardsToShow, setCardsToShow] = useState(3);
  const x = useMotionValue(0);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  useEffect(() => {
    const cardPercentage = 100 / cardsToShow;
    const targetX = -currentIndex * cardPercentage;

    const controls = animate(x, targetX, {
      type: "spring",
      stiffness: 250,
      damping: 30,
    });

    return () => controls.stop();
  }, [currentIndex, cardsToShow, x]);

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1;
      if (nextIndex >= testimonials.length - cardsToShow) {
        return rawTestimonials.length;
      }
      return nextIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - 1;
      if (prevIndex < 0) {
        return rawTestimonials.length - 1;
      }
      return prevIndex;
    });
  };

  const activeDotIndex = currentIndex % rawTestimonials.length;

  return (
    <section
      id="testimonials"
      className="relative bg-white py-16 md:py-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] opacity-50" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#1e3a8a 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[760px] mx-auto mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-[#2E8B57] rounded-full" />
            <span className="text-sm font-bold tracking-widest text-primary uppercase">
              {t("badge")}
            </span>
            <div className="w-2 h-2 bg-[#2E8B57] rounded-full" />
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight leading-[1.1] mb-6">
            {t("headingPart1")} <br className="hidden sm:inline" />
            <span className="text-primary">{t("headingHighlight")}</span>
          </h2>

          <p className="text-base md:text-lg text-brand-muted font-medium">
            {t("description")}
          </p>
        </div>

        {/* Carousel Slider Window (dir="ltr" keeps coordinate arithmetic uniform across locales) */}
        <div
          dir="ltr"
          className="relative max-w-[1280px] mx-auto overflow-hidden px-2"
        >
          <motion.div
            style={{ x: useMotionValue(0) && `${x.get()}%` }}
            className="flex transition-transform ease-out"
          >
            {testimonials.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.id}-${idx}`}
                  style={{ flex: `0 0 ${100 / cardsToShow}%` }}
                  className="px-3 shrink-0"
                >
                  <div className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative overflow-hidden text-start">
                    <div className="absolute top-0 end-0 w-[160px] h-[160px] bg-primary/5 rounded-full blur-[50px] pointer-events-none" />

                    <div className="flex items-center justify-between mb-5 relative z-10">
                      <Quote className="w-10 h-10 text-slate-200 group-hover:text-primary/20 transition-colors rtl:scale-x-[-1]" />
                      <StarRating count={item.rating} />
                    </div>

                    <p className="text-[15px] text-brand-muted leading-relaxed mb-8 grow relative z-10">
                      "{item.quote}"
                    </p>

                    <div className="flex items-center gap-3.5 mt-auto pt-6 border-t border-slate-100 relative z-10">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-105 transition-transform border border-primary/10">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-bold text-navy text-[15px] leading-tight">
                          {item.company}
                        </h5>
                        {item.industry && (
                          <p className="text-[12px] text-primary font-semibold mt-0.5">
                            {item.industry}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Centered Navigation Controls */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mt-12">
          {/* Previous Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label={t("navigation.prev")}
            className="p-3 rounded-full bg-white border border-slate-200 text-navy hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
          </button>

          {/* Pagination Indicators */}
          <div className="flex items-center gap-2">
            {rawTestimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(rawTestimonials.length + index)}
                aria-label={`${t("navigation.goToSlide")} ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeDotIndex
                    ? "w-8 bg-primary"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label={t("navigation.next")}
            className="p-3 rounded-full bg-white border border-slate-200 text-navy hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <ChevronRight className="w-5 h-5 rtl:rotate-180" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
