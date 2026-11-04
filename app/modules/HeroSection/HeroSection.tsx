import { GoogleReviewCard } from "@/app/components/GoogleReviewCard";
import { HeroTextSlider } from "./HeroTextSlider";
import { QuoteForm } from "./QuoteForm";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-between lg:justify-center overflow-hidden"
    >
      <div className="relative lg:absolute lg:inset-0 w-full min-h-[100dvh] lg:min-h-full flex items-center pt-16 lg:pt-0 px-6 lg:px-12 z-0">
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
            <source src="/assets/videos/banner-full2.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r rtl:lg:bg-gradient-to-l from-slate-950/85 via-slate-900/60 to-slate-950/85 lg:to-transparent z-[2] pointer-events-none" />

        <div
          className="absolute inset-0 z-[2] opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Hero Text Slider displays inside the video on mobile */}
        <div className="relative z-10 max-w-[1440px] mx-auto w-full block lg:hidden my-auto">
          <HeroTextSlider />
        </div>
      </div>
      <div className="relative z-10 max-w-[1440px] mx-auto px-0 lg:px-12 w-full flex flex-col lg:flex-row gap-8 lg:gap-8 justify-between items-center my-auto pb-16 lg:pb-0">
        {/* Desktop Text Slider */}
        <div className="hidden lg:block w-full lg:w-auto flex-1">
          <HeroTextSlider />
        </div>

        {/* Quote Form */}
        <div className="w-full lg:w-auto px-4 lg:px-0 flex justify-center lg:justify-end  lg:mt-0 relative z-20">
          <div className="w-full ">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
};
