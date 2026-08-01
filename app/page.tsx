import Image from "next/image";
import { Navbar } from "./modules/Navbar";
import { TrustStrip } from "./modules/TrustStrip";
import { ClientLogos } from "./modules/ClientLogos";
import { AboutSection } from "./modules/AboutSection";
import { ServicesSection } from "./modules/ServicesSeciton";
import { HeroSection } from "./modules/HeroSection";
import Preloader from "./modules/Preloader";
import LeadershipSection from "./modules/LeadershipSection";
import CargoJourneySection from "./modules/CargoJourneySection";
import WhyChooseSection from "./modules/WhyChooseSection";
import GlobalNetworkSection from "./modules/GlobalNetworkSection";
import InfrastructureSection from "./modules/InfrastructureSection";
import IndustriesSection from "./modules/IndustriesSection";
import TestimonialsSection from "./modules/TestimonialsSection";
import FAQSection from "./modules/FAQSection";
import ContactSection from "./modules/ContactSection";
import FooterSection from "./modules/FooterSection";
import { GallerySection } from "./modules/GallerySection";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-brand-bg relative selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      <Preloader />
      <Navbar />
      <HeroSection />
      <TrustStrip />
      <ClientLogos />
      <AboutSection />
      {/* <LeadershipSection /> */}
      <ServicesSection />
      <CargoJourneySection />
      <WhyChooseSection />
      <GlobalNetworkSection />
      <GallerySection />
      {/* <InfrastructureSection />
      <IndustriesSection /> */}
      <TestimonialsSection />
      {/* <FAQSection />
      <ContactSection /> */}
      <FooterSection />
    </main>
  );
}
