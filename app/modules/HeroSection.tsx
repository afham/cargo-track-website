"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// HeroSection with Video Slider
const heroVideos = [
  "/assets/videos/hero-vid-1.mp4",
  "/assets/videos/hero-vid-2.mp4",
  "/assets/videos/hero-vid-3.mp4",
  "/assets/videos/hero-vid-4.mp4",
];

export const HeroSection = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Auto-advance slider
  useEffect(() => {
    if (heroVideos.length <= 1) return;
    const timer = setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % heroVideos.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // Play the active video, pause others
  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      if (i === activeVideo) {
        vid.currentTime = 0;
        vid.play().catch(() => {});
      } else {
        vid.pause();
      }
    });
  }, [activeVideo]);

  return (
    <section
      id="home"
      className="relative w-full min-h-[100vh] lg:min-h-[880px] lg:h-[85vh] flex items-center pt-24 lg:pt-0 overflow-hidden"
    >
      {/* Video Background Slides */}
      {heroVideos.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 w-full h-full z-0 transition-opacity duration-[1200ms] ease-in-out "
          style={{ opacity: i === activeVideo ? 1 : 0 }}
        >
          <video
            ref={(el) => {
              videoRefs.current[i] = el;
            }}
            src={src}
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ))}

      {/* White gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-white/90 via-white/80 to-white/40 sm:from-white/85 sm:via-white/15 sm:to-transparent z-[2] pointer-events-none" />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full flex flex-col justify-center pb-20 lg:pb-20">
        <div className="max-w-2xl w-full">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/40 border border-white/60 backdrop-blur-sm mb-6 lg:mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-accent" />
            <span className="text-[11px] font-bold text-navy tracking-widest uppercase">
              Global Logistics Solutions
            </span>
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-heading font-extrabold text-[44px] sm:text-5xl lg:text-[56px] leading-[1.1] text-brand-dark tracking-tight"
          >
            Delivering Global Logistics with <br className="hidden md:block" />
            <span className="text-primary">Precision, Speed & Trust.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="mt-6 lg:mt-8 text-[14px] lg:text-[17px] text-brand-muted font-sans max-w-[580px] leading-relaxed"
          >
            Seagull Clearing & Forwarding Agencies Pvt. Ltd. provides integrated
            customs clearance, freight forwarding, transportation, and
            warehousing solutions across India and international markets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 lg:gap-5 mt-10 lg:mt-12"
          >
            <a
              href="#services"
              className="group flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-md font-semibold text-[15px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(21,101,192,0.4)] hover:bg-navy"
            >
              Explore Services
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <a
              href="#contact"
              className="group flex items-center justify-center gap-2 backdrop-blur-md bg-white/30 text-primary border-2 border-primary/20 px-8 py-4 rounded-md font-semibold text-[15px] transition-all duration-300 hover:border-primary hover:bg-white/50 hover:-translate-y-1"
            >
              Contact Us
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform opacity-70 group-hover:opacity-100"
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Slider Navigation Dots */}
      {heroVideos.length > 1 && (
        <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 z-20 flex items-center gap-3">
          {heroVideos.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveVideo(i)}
              className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                i === activeVideo
                  ? "bg-white scale-110 shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                  : "bg-white/40 hover:bg-white/70"
              }`}
            >
              {/* Progress ring for active dot */}
              {i === activeVideo && (
                <svg
                  className="absolute -inset-1.5 w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="2"
                  />
                  <motion.circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 10}
                    initial={{ strokeDashoffset: 2 * Math.PI * 10 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 8, ease: "linear" }}
                    key={activeVideo}
                    style={{
                      transform: "rotate(-90deg)",
                      transformOrigin: "center",
                    }}
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};
