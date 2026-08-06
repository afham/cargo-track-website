"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";

const heroVideos = ["/assets/videos/banner-full2.mp4"];

const slides = [
  {
    headline: (
      <>
        Global Relocation Made <br className="hidden md:block" />
        <span className="text-blue-400">Fast, Safe & Seamless.</span>
      </>
    ),
    subline:
      "Your trusted partner for local and corporate moves, delivering every shipment efficiently and strictly on schedule.",
  },
  {
    headline: (
      <>
        Shared Container Shipping <br className="hidden md:block" />
        <span className="text-blue-400">To USA, EU, CA & AUS.</span>
      </>
    ),
    subline:
      "Direct groupage service for small consignments and partial loads, offering cost-efficient routes for international moves.",
  },
  {
    headline: (
      <>
        End-to-End Supply Chain <br className="hidden md:block" />
        <span className="text-blue-400">Optimized For Your Growth.</span>
      </>
    ),
    subline:
      "Complete logistics management featuring modern warehousing, live cargo tracking, and dedicated air-sea transport lines.",
  },
  {
    headline: (
      <>
        Global Freight Forwarding <br className="hidden md:block" />
        <span className="text-blue-400">& Customs Clearance.</span>
      </>
    ),
    subline:
      "Expert air, sea, and land cargo handling with seamless brokerage clearance, preventing costly border delays worldwide.",
  },
  {
    headline: (
      <>
        Direct Road Freight Lines <br className="hidden md:block" />
        <span className="text-blue-400">Across The UAE Region.</span>
      </>
    ),
    subline:
      "Weekly overland transport for single packages or full house moves, backed by reliable schedules and expert handling.",
  },
];

export const HeroSection = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    email: "",
    phone: "",
    origin: "",
    destination: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Auto-advance video background if multiple
  useEffect(() => {
    if (heroVideos.length <= 1) return;
    const timer = setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % heroVideos.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // Auto-advance text slide every 5 seconds
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideTimer);
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setIsSuccess(true);
      setFormData({
        name: "",
        service: "",
        email: "",
        phone: "",
        origin: "",
        destination: "",
        message: "",
      });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[100vh] lg:min-h-[880px] lg:h-[85vh] flex items-center pt-24 lg:pt-0 overflow-hidden"
    >
      {/* Video Background Slides */}
      {heroVideos.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 w-full h-full z-0 transition-opacity duration-[1200ms] ease-in-out"
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

      {/* Subtle Dark/Light Gradient Overlay for Video Contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/50 to-transparent z-[2] pointer-events-none" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full flex flex-col lg:flex-row gap-8 justify-between items-center pb-20 lg:pb-20">
        <div className="max-w-[50rem] w-full">
          {/* Fixed-height container to lock vertical height */}
          <div className="h-[210px] sm:h-[190px] lg:h-[210px] flex flex-col justify-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <h1 className="font-heading font-extrabold text-[38px] sm:text-[44px] lg:text-[50px] leading-[1.15] text-white tracking-tight min-h-[2.3em]">
                  {slides[activeSlide].headline}
                </h1>

                <p className="mt-4 lg:mt-6 text-[15px] lg:text-[17px] text-slate-200 font-sans max-w-[580px] leading-relaxed">
                  {slides[activeSlide].subline}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2 mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === index
                    ? "w-8 bg-blue-400"
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 lg:gap-5 mt-8 lg:mt-10"
          >
            <a
              href="#services"
              className="group flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold text-[15px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(21,101,192,0.5)] hover:bg-blue-600"
            >
              Explore Services
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <a
              href="#contact"
              className="group flex items-center justify-center gap-2 backdrop-blur-md bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-[15px] transition-all duration-300 hover:border-white/50 hover:bg-white/20 hover:-translate-y-1"
            >
              Contact Us
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform opacity-70 group-hover:opacity-100"
              />
            </a>
          </motion.div>
        </div>

        {/* RIGHT: Frosted Glass Quote Request Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:max-w-[26rem] lg:min-w-[26rem]"
        >
          {/* Frosted Glass Box */}
          <div className="backdrop-blur-sm bg-slate-900/40 border border-white/20 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-white relative overflow-hidden">
            {/* Ambient inner glow ring */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/30 rounded-full blur-2xl pointer-events-none" />

            <div className="mb-5 relative z-10">
              <h3 className="font-heading font-extrabold text-[1.5rem] tracking-tight text-white">
                Request a Quote
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Get a competitive rate for your logistics needs in minutes.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 relative z-10">
              {/* Row 1: Name (Required) & Service (Required) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    className="w-full bg-white/10 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-300/70 outline-none focus:bg-white/20 focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all backdrop-blur-md"
                  />
                </div>
                <div className="space-y-1">
                  <select
                    required
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white outline-none focus:bg-white/20 focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all backdrop-blur-md appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSIvPjwvc3ZnPg==')] bg-no-repeat bg-[position:calc(100%-0.8rem)_center]"
                  >
                    <option
                      value=""
                      disabled
                      className="bg-slate-900 text-slate-300"
                    >
                      Select Service *
                    </option>
                    <option
                      value="Customs Clearance"
                      className="bg-slate-900 text-white"
                    >
                      Customs Clearance
                    </option>
                    <option
                      value="Freight Forwarding"
                      className="bg-slate-900 text-white"
                    >
                      Freight Forwarding
                    </option>
                    <option
                      value="Transportation"
                      className="bg-slate-900 text-white"
                    >
                      Transportation
                    </option>
                    <option
                      value="Warehousing"
                      className="bg-slate-900 text-white"
                    >
                      Warehousing
                    </option>
                    <option
                      value="Import & Export"
                      className="bg-slate-900 text-white"
                    >
                      Import & Export
                    </option>
                    <option value="Other" className="bg-slate-900 text-white">
                      Other
                    </option>
                  </select>
                </div>
              </div>

              {/* Row 2: Email (Required & Validated) & Phone (Optional) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    className="w-full bg-white/10 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-300/70 outline-none focus:bg-white/20 focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all backdrop-blur-md"
                  />
                </div>
                <div className="space-y-1">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full bg-white/10 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-300/70 outline-none focus:bg-white/20 focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all backdrop-blur-md"
                  />
                </div>
              </div>

              {/* Row 3: Origin & Destination (Optional) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <input
                    type="text"
                    name="origin"
                    value={formData.origin}
                    onChange={handleChange}
                    placeholder="Origin (e.g. Mumbai)"
                    className="w-full bg-white/10 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-300/70 outline-none focus:bg-white/20 focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all backdrop-blur-md"
                  />
                </div>
                <div className="space-y-1">
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="Destination (e.g. Dubai)"
                    className="w-full bg-white/10 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-300/70 outline-none focus:bg-white/20 focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all backdrop-blur-md"
                  />
                </div>
              </div>

              {/* Message (Optional) */}
              <div className="space-y-1">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={500}
                  rows={3}
                  placeholder="Additional shipment details (weight, dimensions, cargo type)..."
                  className="w-full bg-white/10 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-300/70 outline-none focus:bg-white/20 focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all resize-none backdrop-blur-md"
                />
              </div>

              {/* Error Alert */}
              {errorMessage && (
                <div className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-lg p-2.5">
                  {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                disabled={isSubmitting || isSuccess}
                type="submit"
                className={`group w-full py-3 rounded-xl font-bold text-[15px] flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${
                  isSuccess
                    ? "bg-emerald-500 text-white shadow-emerald-500/30"
                    : "bg-primary text-white hover:bg-blue-600 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0"
                } ${isSubmitting ? "opacity-80 cursor-wait" : ""}`}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Quote Request Sent!
                  </>
                ) : (
                  <>
                    Request Free Quote
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
