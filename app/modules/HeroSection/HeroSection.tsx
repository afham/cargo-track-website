import { HeroTextSlider } from "./HeroTextSlider";
import { QuoteForm } from "./QuoteForm";
import Image from "next/image";
export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[100dvh] lg:min-h-[880px] lg:h-[85vh] flex flex-col justify-between lg:justify-center pt-24 lg:pt-0 overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full z-0">
        {/* 1. Static Fallback Image for Mobile (Fast LCP) */}
        <Image
          priority
          src="/assets/photos1.webp"
          alt="Cargo Track Banner"
          fetchPriority="high"
          className="sm:hidden absolute inset-0 w-full h-full object-cover"
          fill
        />

        {/* 2. Video Element ONLY loaded on Desktop screens (hidden on mobile) */}
        <video
          poster="/assets/banner-first-frame.webp"
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          className="hidden sm:block absolute inset-0 w-full h-full object-cover transform-gpu"
        >
          <source
            src="/assets/videos/banner-full2.webm"
            type="video/webm"
            media="(min-width: 640px)"
          />
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
