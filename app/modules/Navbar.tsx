"use client";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

// Navbar
export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = [
        "home",
        "about-us",
        "services",
        "infrastructure",
        "network",
        "industries",
        "contact",
      ];
      let currentSection = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is somewhat in the top half of the viewport
          if (rect.top <= 250) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] py-4" : "py-6"}`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={"/assets/cargo-track-logo.png"}
            alt="Seagull Logo"
            className="h-10 w-auto object-contain"
          />
          {/* <span className="font-heading font-extrabold text-2.5xl tracking-tight text-navy">SEAGULL</span> */}
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {[
            "Home",
            "About Us",
            "Services",
            "Infrastructure",
            "Network",
            "Industries",
            "Contact",
          ].map((item) => {
            const sectionId = item.toLowerCase().replace(" ", "-");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item}
                href={`#${sectionId}`}
                className={`text-brand-text hover:text-primary font-sans text-sm font-semibold relative group transition-colors ${isActive ? "text-primary" : ""}`}
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                ></span>
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          className="hidden lg:flex items-center gap-2 px-7 py-3 rounded-md bg-primary text-white font-semibold text-sm hover:bg-navy  hover:-translate-y-0.5 transition-all duration-300 group"
        >
          Request a Quote
          <ArrowRight
            size={16}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </a>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-navy p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-0 left-0 w-full bg-white shadow-[0_20px_40px_rgb(0,0,0,0.1)] overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-brand-bg/50">
              <img
                src={"/assets/cargo-track-logo.png"}
                alt="Seagull Logo"
                className="h-10 w-auto object-contain"
              />
              <button
                className="text-navy p-2 -mr-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="flex flex-col px-6 py-6 space-y-5">
              {[
                "Home",
                "About Us",
                "Services",
                "Infrastructure",
                "Network",
                "Industries",
                "Contact",
              ].map((item) => {
                const sectionId = item.toLowerCase().replace(" ", "-");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item}
                    href={`#${sectionId}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-sans text-[16px] font-semibold transition-colors ${isActive ? "text-primary" : "text-brand-text hover:text-primary"}`}
                  >
                    {item}
                  </a>
                );
              })}
              <div className="pt-4 mt-2 border-t border-brand-bg/80">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#25D366] hover:bg-[#20b858] transition-colors text-white font-semibold text-[15px]"
                >
                  Request a Quote
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
