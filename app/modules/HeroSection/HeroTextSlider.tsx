"use client";

import { ArrowRight } from "lucide-react";
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

export const HeroTextSlider = memo(() => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Helper function to change slide with a smooth fade effect
  const changeSlide = (nextIndex: number) => {
    setIsFading(true);
    setTimeout(() => {
      setActiveSlide(nextIndex);
      setIsFading(false);
    }, 200); // Brief 200ms fade-out before swapping text
  };
  useEffect(() => {
    let slideTimer: NodeJS.Timeout;
    let initialTimer: NodeJS.Timeout;

    const startRegularInterval = () => {
      slideTimer = setInterval(() => {
        if (!document.hidden) {
          setIsFading(true);
          setTimeout(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
            setIsFading(false);
          }, 300);
        }
      }, 4000); // Subsequent slide changes every 4 seconds
    };

    // First slide change happens after 2.5 seconds
    initialTimer = setTimeout(() => {
      if (!document.hidden) {
        setIsFading(true);
        setTimeout(() => {
          setActiveSlide(1);
          setIsFading(false);
          startRegularInterval(); // Start 4s loop after first change
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
        <div className="min-h-[200px] sm:min-h-[170px] lg:min-h-[180px]">
          {/* Smooth CSS transition that triggers whenever isFading updates */}
          <div
            className={`transition-all duration-300 ease-out transform ${
              isFading ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
            }`}
          >
            <h1 className="font-heading font-extrabold text-[32px] sm:text-[44px] lg:text-[50px] leading-[1.15] text-white tracking-tight">
              {slides[activeSlide].headline}
            </h1>

            <p className="mt-4 lg:mt-6 text-[15px] lg:text-[17px] text-slate-200 font-sans max-w-[580px] leading-relaxed">
              {slides[activeSlide].subline}
            </p>
          </div>
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
              onClick={() => changeSlide(index)}
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
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-5">
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
        </div>
      </div>
    </div>
  );
});
