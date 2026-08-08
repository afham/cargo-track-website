"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, memo } from "react";

const slides = [
  {
    title: "Global Relocation Made Fast, Safe & Seamless.",
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
    title: "Shared Container Shipping To USA, EU, CA & AUS.",
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
    title: "End-to-End Supply Chain Optimized For Your Growth.",
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
    title: "Global Freight Forwarding & Customs Clearance.",
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
    title: "Direct Road Freight Lines Across The UAE Region.",
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

const INITIAL_FORM_STATE = {
  name: "",
  service: "",
  email: "",
  phone: "",
  origin: "",
  destination: "",
  message: "",
};

// ==========================================
// SUB-COMPONENT: HERO TEXT SLIDER
// ==========================================
const HeroTextSlider = memo(() => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    let slideTimer: NodeJS.Timeout;

    const startTimer = () => {
      slideTimer = setInterval(() => {
        if (!document.hidden) {
          setActiveSlide((prev) => (prev + 1) % slides.length);
        }
      }, 5000);
    };

    startTimer();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(slideTimer);
      } else {
        startTimer();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(slideTimer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="max-w-[50rem] w-full flex flex-col justify-center min-h-[calc(100dvh-120px)] lg:min-h-0 py-6">
      {/* Hidden SEO fallback ensuring search engines index all slide headlines */}
      <div className="sr-only">
        <h2>Our Logistics & Freight Solutions</h2>
        <ul>
          {slides.map((s, idx) => (
            <li key={idx}>
              {s.title} - {s.subline}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-6 lg:gap-8">
        {/* Animated Headline and Subline */}
        <div className="min-h-[200px] sm:min-h-[170px] lg:min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="will-change-transform"
            >
              {/* Primary H1 Tag kept stable for accessibility/SEO */}
              <h1 className="font-heading font-extrabold text-[32px] sm:text-[44px] lg:text-[50px] leading-[1.15] text-white tracking-tight">
                {slides[activeSlide].headline}
              </h1>

              <p className="mt-4 lg:mt-6 text-[15px] lg:text-[17px] text-slate-200 font-sans max-w-[580px] leading-relaxed">
                {slides[activeSlide].subline}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Indicator Dots */}
        <div
          className="flex items-center gap-2"
          role="tablist"
          aria-label="Hero Carousel Slides"
        >
          {slides.map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={activeSlide === index}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}: ${slides[index].title}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeSlide === index
                  ? "w-8 bg-blue-400"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 lg:gap-5"
        >
          <a
            href="#quote-form"
            className="lg:hidden group flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold text-[15px] transition-all duration-300 shadow-[0_8px_25px_rgba(21,101,192,0.4)]"
          >
            Get a Free Quote
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>

          <a
            href="#services"
            className="group flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold text-[15px] transition-all duration-300 shadow-[0_8px_25px_rgba(21,101,192,0.4)] hover:-translate-y-0.5"
          >
            Explore Services
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform opacity-80"
            />
          </a>

          <a
            href="#contact-info"
            className="group flex items-center justify-center gap-2 backdrop-blur-md bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-[15px] transition-all duration-300 hover:border-white/50 hover:bg-white/20 hover:-translate-y-0.5"
          >
            Contact Us
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform opacity-80"
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
});

HeroTextSlider.displayName = "HeroTextSlider";

// ==========================================
// SUB-COMPONENT: QUOTE FORM
// ==========================================
const QuoteForm = memo(() => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      setFormData(INITIAL_FORM_STATE);

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
    <motion.div
      id="quote-form"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      className="w-full lg:max-w-[26rem] lg:min-w-[26rem] pt-8 lg:pt-0 mb-8 lg:mb-0 scroll-mt-24"
    >
      <div className="backdrop-blur-md bg-slate-900/60 lg:bg-slate-900/40 border border-white/20 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)] text-white relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/30 rounded-full blur-2xl pointer-events-none" />

        <div className="mb-5 relative z-10">
          <h2 className="font-heading font-extrabold text-[1.5rem] tracking-tight text-white">
            Request a Quote
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Get a competitive rate for your logistics needs in minutes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="space-y-1">
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>
              <input
                id="name"
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
              <label htmlFor="service" className="sr-only">
                Select Service
              </label>
              <select
                id="service"
                required
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white outline-none focus:bg-white/20 focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all backdrop-blur-md appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnPg==')] bg-no-repeat bg-[position:calc(100%-0.8rem)_center]"
              >
                <option
                  value=""
                  disabled
                  className="bg-slate-900 text-slate-300"
                >
                  Select Service *
                </option>
                <option
                  value="Moving and relocation services"
                  className="bg-slate-900 text-white"
                >
                  Moving & Relocation
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
                <option value="Warehousing" className="bg-slate-900 text-white">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="space-y-1">
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                id="email"
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
              <label htmlFor="phone" className="sr-only">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full bg-white/10 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-300/70 outline-none focus:bg-white/20 focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all backdrop-blur-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="space-y-1">
              <label htmlFor="origin" className="sr-only">
                Origin
              </label>
              <input
                id="origin"
                type="text"
                name="origin"
                value={formData.origin}
                onChange={handleChange}
                placeholder="Origin (e.g. Mumbai)"
                className="w-full bg-white/10 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-300/70 outline-none focus:bg-white/20 focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all backdrop-blur-md"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="destination" className="sr-only">
                Destination
              </label>
              <input
                id="destination"
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="Destination (e.g. Dubai)"
                className="w-full bg-white/10 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-300/70 outline-none focus:bg-white/20 focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all backdrop-blur-md"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="sr-only">
              Additional Details
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              maxLength={500}
              rows={3}
              placeholder="Additional shipment details (weight, dimensions, cargo type)..."
              className="w-full bg-white/10 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-300/70 outline-none focus:bg-white/20 focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all resize-none backdrop-blur-md"
            />
          </div>

          {errorMessage && (
            <div
              role="alert"
              className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-lg p-2.5"
            >
              {errorMessage}
            </div>
          )}

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
  );
});

QuoteForm.displayName = "QuoteForm";

// ==========================================
// MAIN COMPONENT: HERO SECTION
// ==========================================
export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[100dvh] lg:min-h-[880px] lg:h-[85vh] flex flex-col justify-between lg:justify-center pt-24 lg:pt-0 overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          poster="/assets/banner-first-frame.webp"
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover transform-gpu"
        >
          <source src="/assets/videos/banner-full2.webm" type="video/webm" />
        </video>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/60 to-slate-950/80 lg:to-transparent z-[2] pointer-events-none" />

      <div
        className="absolute inset-0 z-[2] opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between items-center my-auto pb-16 sm:pb-20 lg:pb-0">
        <HeroTextSlider />
        <QuoteForm />
      </div>
    </section>
  );
};
