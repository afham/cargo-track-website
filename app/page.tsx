import dynamic from "next/dynamic";

// Standard imports for Above-The-Fold (Critical path)
import { Navbar } from "./modules/Navbar";
import { TrustStrip } from "./modules/TrustStrip";
import { HeroSection } from "./modules/HeroSection/HeroSection";
import { ClientLogos } from "./modules/ClientLogos";

const AboutSection = dynamic(() =>
  import("./modules/AboutSection").then((mod) => mod.AboutSection),
);
const ServicesSection = dynamic(() =>
  import("./modules/ServicesSection").then((mod) => mod.ServicesSection),
);
const CargoJourneySection = dynamic(
  () => import("./modules/CargoJourneySection"),
);
const WhyChooseSection = dynamic(() => import("./modules/WhyChooseSection"));
const GlobalNetworkSection = dynamic(
  () => import("./modules/GlobalNetworkSection"),
);
const GallerySection = dynamic(() =>
  import("./modules/GallerySection").then((mod) => mod.GallerySection),
);
const TestimonialsSection = dynamic(
  () => import("./modules/TestimonialsSection"),
);
const FooterSection = dynamic(() => import("./modules/FooterSection"));

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-brand-bg relative selection:bg-primary/20 selection:text-primary overflow-x-hidden">
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
