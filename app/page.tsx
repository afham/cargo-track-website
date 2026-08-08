import dynamic from "next/dynamic";

// Standard imports for Above-The-Fold (Critical path)
import { Navbar } from "./modules/Navbar";
import { HeroSection } from "./modules/HeroSection";
import { TrustStrip } from "./modules/TrustStrip";
import Preloader from "./modules/Preloader";
import { ClientLogos } from "./modules/ClientLogos";
import { AboutSection } from "./modules/AboutSection";
import { ServicesSection } from "./modules/ServicesSection";
import CargoJourneySection from "./modules/CargoJourneySection";
import WhyChooseSection from "./modules/WhyChooseSection";
import GlobalNetworkSection from "./modules/GlobalNetworkSection";
import { GallerySection } from "./modules/GallerySection";
import TestimonialsSection from "./modules/TestimonialsSection";
import FooterSection from "./modules/FooterSection";

// Dynamic imports for Below-The-Fold sections
// const ClientLogos = dynamic(() =>
//   import("./modules/ClientLogos").then((mod) => mod.ClientLogos),
// );
// const AboutSection = dynamic(() =>
//   import("./modules/AboutSection").then((mod) => mod.AboutSection),
// );
// const ServicesSection = dynamic(() =>
//   import("./modules/ServicesSection").then((mod) => mod.ServicesSection),
// );
// const CargoJourneySection = dynamic(
//   () => import("./modules/CargoJourneySection"),
// );
// const WhyChooseSection = dynamic(() => import("./modules/WhyChooseSection"));
// const GlobalNetworkSection = dynamic(
//   () => import("./modules/GlobalNetworkSection"),
// );
// const GallerySection = dynamic(() =>
//   import("./modules/GallerySection").then((mod) => mod.GallerySection),
// );
// const TestimonialsSection = dynamic(
//   () => import("./modules/TestimonialsSection"),
// );
// const FooterSection = dynamic(() => import("./modules/FooterSection"));

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-brand-bg relative selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      {/* <Preloader /> */}
      <Navbar />
      <HeroSection />
      <TrustStrip />
      <ClientLogos />
      <AboutSection />
      <ServicesSection />
      <CargoJourneySection />
      <WhyChooseSection />
      <GlobalNetworkSection />
      <GallerySection />
      <TestimonialsSection />
      <FooterSection />
    </main>
  );
}
