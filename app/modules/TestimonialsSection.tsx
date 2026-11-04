"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  Star,
  User,
  ExternalLink,
  Play,
  Pause,
} from "lucide-react";
import { useTranslations } from "next-intl";

const TOTAL_TESTIMONIALS = 7;
const TOTAL_VIDEOS = 3;

// Vertical video clips of happy customers
const RAW_VIDEO_CLIPS = [
  {
    id: 1,
    name: "",
    location: "USA to Saudi Arabia",
    videoUrl: "/assets/videos/testimonial1.mp4",
    posterUrl: "/assets/testimonial1poster.webp",
    rating: 5,
  },
  {
    id: 2,
    name: "",
    location: "Saudi Arabia to Germany",
    videoUrl: "/assets/videos/testimonial2.mp4",
    posterUrl: "/assets/testimonial2poster.webp",
    rating: 5,
  },
  {
    id: 3,
    name: "",
    location: "Jeddah to Riyadh",
    videoUrl: "/assets/videos/testimonial3.mp4",
    posterUrl: "/assets/testimonial3poster.webp",
    rating: 5,
  },
];

const StarRating = ({ count = 5 }: { count?: number }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

// Vertical Video Clip Card Sub-component
const VerticalVideoCard = ({ item }: { item: (typeof RAW_VIDEO_CLIPS)[0] }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative aspect-[9/16] w-full rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group bg-slate-900 border border-slate-100">
      <video
        ref={videoRef}
        src={item.videoUrl}
        poster={item.posterUrl}
        playsInline
        preload="none"
        className="w-full h-full object-cover"
        onEnded={() => setIsPlaying(false)}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/30 pointer-events-none" />

      {/* Play/Pause Button */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label="Play testimonial video"
        className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors"
      >
        <div className="w-12 h-12 rounded-full bg-white/90 text-navy flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
          {isPlaying ? (
            <Pause className="w-5 h-5 fill-current" />
          ) : (
            <Play className="w-5 h-5 fill-current ml-0.5" />
          )}
        </div>
      </button>

      {/* Customer Info Overlay */}
      <div className="absolute bottom-0 inset-x-0 p-6 text-white z-10 pointer-events-none">
        <StarRating count={item.rating} />
        <h5 className="font-bold text-white text-[15px] leading-tight mt-2">
          {item.name}
        </h5>
        <p className="text-[12px] text-slate-300 font-medium mt-0.5">
          {item.location}
        </p>
      </div>
    </div>
  );
};

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
        reviewUrl: t.has(`items.${i}.reviewUrl`)
          ? t(`items.${i}.reviewUrl`)
          : "https://share.google/YwXo78vg3b4wYjBGE",
      })),
    [t],
  );

  const testimonials = useMemo(
    () => [...rawTestimonials, ...rawTestimonials, ...rawTestimonials],
    [rawTestimonials],
  );

  const videoClips = useMemo(
    () => [...RAW_VIDEO_CLIPS, ...RAW_VIDEO_CLIPS, ...RAW_VIDEO_CLIPS],
    [],
  );

  // Independent Slider 1 States & Transforms
  const [currentIndex, setCurrentIndex] = useState(TOTAL_TESTIMONIALS);
  const x = useMotionValue(0);
  const xTransform = useTransform(x, (val) => `${val}%`);

  // Independent Slider 2 States & Transforms
  const [videoIndex, setVideoIndex] = useState(TOTAL_VIDEOS);
  const videoX = useMotionValue(0);
  const videoXTransform = useTransform(videoX, (val) => `${val}%`);

  // Shared responsive calculation for cards to show
  const [cardsToShow, setCardsToShow] = useState(3);

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

  // Independent Spring Animation for Review Slider
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

  // Independent Spring Animation for Video Slider
  useEffect(() => {
    const cardPercentage = 100 / cardsToShow;
    const targetX = -videoIndex * cardPercentage;

    const controls = animate(videoX, targetX, {
      type: "spring",
      stiffness: 250,
      damping: 30,
    });

    return () => controls.stop();
  }, [videoIndex, cardsToShow, videoX]);

  // Review Slider Manual Navigation Handlers
  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - 1;
      if (prevIndex < 0) {
        return rawTestimonials.length - 1;
      }
      return prevIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1;
      if (nextIndex >= testimonials.length - cardsToShow) {
        return rawTestimonials.length;
      }
      return nextIndex;
    });
  };

  // Video Slider Manual Navigation Handlers
  const handleVideoPrev = () => {
    setVideoIndex((prev) => {
      const prevIndex = prev - 1;
      if (prevIndex < 0) {
        return TOTAL_VIDEOS - 1;
      }
      return prevIndex;
    });
  };

  const handleVideoNext = () => {
    setVideoIndex((prev) => {
      const nextIndex = prev + 1;
      if (nextIndex >= videoClips.length - cardsToShow) {
        return TOTAL_VIDEOS;
      }
      return nextIndex;
    });
  };

  const activeDotIndex = currentIndex % rawTestimonials.length;
  const activeVideoDotIndex = videoIndex % TOTAL_VIDEOS;

  return (
    <section
      id="reviews"
      className="relative bg-white py-16 md:py-16 overflow-hidden"
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

        {/* --- SLIDER 1: GOOGLE TEXT REVIEWS --- */}
        <div
          dir="ltr"
          className="relative max-w-[1280px] mx-auto overflow-hidden px-2 mb-8"
        >
          <motion.div
            style={{ x: xTransform }}
            className="flex transition-transform ease-out"
          >
            {testimonials.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={`review-${item.id}-${idx}`}
                  style={{ flex: `0 0 ${100 / cardsToShow}%` }}
                  className="px-3 shrink-0"
                >
                  <a
                    href={item.reviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative overflow-hidden text-start block cursor-pointer"
                  >
                    <div className="absolute top-0 end-0 w-[160px] h-[160px] bg-primary/5 rounded-full blur-[50px] pointer-events-none" />

                    <div className="flex items-center justify-between mb-5 relative z-10">
                      {/* Official Google G Logo Badge */}
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="#4285F4"
                              d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                            />
                            <path
                              fill="#34A853"
                              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.19v3.15C3.17 21.36 7.24 24 12 24z"
                            />
                            <path
                              fill="#FBBC05"
                              d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.19C.43 8.12 0 9.87 0 11.75s.43 3.63 1.19 5.17l4.09-2.65z"
                            />
                            <path
                              fill="#EA4335"
                              d="M12 4.75c1.76 0 3.34.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.24 0 3.17 2.64 1.19 6.58l4.09 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                            />
                          </svg>
                        </div>
                        <span className="text-[11px] font-semibold text-slate-400">
                          Google Review
                        </span>
                      </div>
                      <StarRating count={item.rating} />
                    </div>

                    <p className="text-[15px] text-brand-muted leading-relaxed mb-8 grow relative z-10">
                      "{item.quote}"
                    </p>

                    <div className="flex items-center justify-between gap-3.5 mt-auto pt-6 border-t border-slate-100 relative z-10">
                      <div className="flex items-center gap-3.5">
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

                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors shrink-0" />
                    </div>
                  </a>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Navigation Controls for Review Slider */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-20">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous review"
            className="p-3 rounded-full bg-white border border-slate-200 text-navy hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
          </button>

          <div className="flex items-center gap-2">
            {rawTestimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(rawTestimonials.length + index)}
                aria-label={`Go to review slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeDotIndex
                    ? "w-8 bg-primary"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next review"
            className="p-3 rounded-full bg-white border border-slate-200 text-navy hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <ChevronRight className="w-5 h-5 rtl:rotate-180" />
          </button>
        </div>

        {/* --- SLIDER 2: VERTICAL CUSTOMER VIDEO CLIPS --- */}
        <div
          dir="ltr"
          className="relative max-w-[1280px] mx-auto overflow-hidden px-2 mb-8"
        >
          <motion.div
            style={{ x: videoXTransform }}
            className="flex transition-transform ease-out"
          >
            {videoClips.map((clip, idx) => (
              <div
                key={`video-${clip.id}-${idx}`}
                style={{ flex: `0 0 ${100 / cardsToShow}%` }}
                className="px-3 shrink-0"
              >
                <VerticalVideoCard item={clip} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Controls for Video Slider */}
        <div className="flex items-center justify-center gap-4 md:gap-6">
          <button
            type="button"
            onClick={handleVideoPrev}
            aria-label="Previous video"
            className="p-3 rounded-full bg-white border border-slate-200 text-navy hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
          </button>

          <div className="flex items-center gap-2">
            {RAW_VIDEO_CLIPS.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setVideoIndex(TOTAL_VIDEOS + index)}
                aria-label={`Go to video slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeVideoDotIndex
                    ? "w-8 bg-primary"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleVideoNext}
            aria-label="Next video"
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
