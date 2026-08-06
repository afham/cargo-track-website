"use client";

import { Mail, Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";

const NAV_ITEMS = [
  "Home",
  "About Us",
  "Services",
  "Workflow",
  "Network",
  "Gallery",
  "Contact",
];

const CONTACT_INFO = {
  email: " enquiry@cargotrack.co",
  phone: "+966 55 365 9763",
  cleanPhone: "966553659763",
};

// WhatsApp Brand Icon SVG
const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.18-1.238-6.167-3.484-8.413" />
  </svg>
);

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) =>
        item.toLowerCase().replace(/\s+/g, "-"),
      );

      let currentSection = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3.5 border-b border-slate-100"
          : "bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-2 sm:gap-4">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 shrink-0 scale-125 translate-x-3"
        >
          <Image
            src={
              !scrolled
                ? "/assets/cargo-track-logo-white.svg"
                : "/assets/cargo-track-logo.svg"
            }
            alt="CargoTrack Logo"
            width={160}
            height={40}
            className="h-8 sm:h-9 xl:h-10 w-auto object-contain transition-all duration-300"
            priority
          />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.toLowerCase().replace(/\s+/g, "-");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item}
                href={`#${sectionId}`}
                className={`font-sans text-sm font-semibold relative py-1 transition-colors duration-300 ${
                  scrolled
                    ? isActive
                      ? "text-primary font-bold"
                      : "text-slate-700 hover:text-primary"
                    : isActive
                      ? "text-primary font-bold"
                      : "text-slate-200 hover:text-white"
                }`}
              >
                {item}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className={`absolute bottom-0 left-0 w-full h-[2.5px] rounded-full ${
                      scrolled ? "bg-primary" : "bg-blue-400"
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop Contacts Bar - Single Column Layout */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-5 shrink-0">
          <div className="flex flex-col items-start gap-1">
            {/* Call Us */}
            <a
              href={`tel:${CONTACT_INFO.cleanPhone}`}
              className={`flex items-center gap-2 transition-colors duration-200 ${
                scrolled
                  ? "text-slate-800 hover:text-primary"
                  : "text-white hover:text-blue-300"
              }`}
            >
              <Phone size={14} className="text-blue-500 shrink-0" />
              <span className="font-semibold text-xs leading-none">
                {CONTACT_INFO.phone}
              </span>
            </a>

            {/* Email Us */}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className={`flex items-center gap-2 transition-colors duration-200 ${
                scrolled
                  ? "text-slate-800 hover:text-primary"
                  : "text-white hover:text-blue-300"
              }`}
            >
              <Mail size={14} className="text-blue-400 shrink-0" />
              <span className="font-semibold text-xs leading-none">
                {CONTACT_INFO.email}
              </span>
            </a>
          </div>

          {/* WhatsApp Button with Quicker Scaling Animation */}
          <a
            href={`https://wa.me/${CONTACT_INFO.cleanPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            className="relative flex items-center justify-center p-2.5 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-transform duration-300 hover:scale-105 active:scale-95 group"
            aria-label="WhatsApp"
          >
            <span className="absolute inset-0 rounded-full bg-emerald-500/60 animate-[ping_1.4s_cubic-bezier(0,0,0.2,1)_infinite] scale-90 pointer-events-none" />
            <span className="absolute -inset-0.5 rounded-full bg-emerald-400/20 animate-pulse pointer-events-none" />
            <WhatsAppIcon className="w-4 h-4 relative z-10" />
          </a>
        </div>

        {/* Mobile Header Actions */}
        <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
          {/* Phone */}
          <a
            href={`tel:${CONTACT_INFO.cleanPhone}`}
            className={`p-2 rounded-xl transition-colors ${
              scrolled
                ? "text-slate-700 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Call Us"
          >
            <Phone size={18} className="text-blue-500" />
          </a>

          {/* WhatsApp Mobile Button with Quicker Scaling Animation */}
          <a
            href={`https://wa.me/${CONTACT_INFO.cleanPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center p-2 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-transform duration-300"
            aria-label="WhatsApp"
          >
            <span className="absolute inset-0 rounded-full bg-emerald-500/60 animate-[ping_1.4s_cubic-bezier(0,0,0.2,1)_infinite] scale-90 pointer-events-none" />
            <WhatsAppIcon className="w-4 h-4 relative z-10" />
          </a>

          {/* Email */}
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className={`p-2 rounded-xl transition-colors ${
              scrolled
                ? "text-slate-700 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Email Us"
          >
            <Mail size={18} className="text-blue-400" />
          </a>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            className={`p-2 rounded-xl transition-colors ml-1 ${
              scrolled
                ? "text-slate-900 hover:bg-slate-100"
                : "text-white hover:bg-white/10 backdrop-blur-sm"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden absolute top-full left-0 w-full px-4 pt-2 pb-6"
          >
            <div className="backdrop-blur-xl bg-slate-900/95 border border-white/15 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-white space-y-2 relative overflow-hidden">
              <div className="flex flex-col space-y-1 relative z-10">
                {NAV_ITEMS.map((item) => {
                  const sectionId = item.toLowerCase().replace(/\s+/g, "-");
                  const isActive = activeSection === sectionId;
                  return (
                    <a
                      key={item}
                      href={`#${sectionId}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`font-sans text-[15px] font-medium transition-all px-4 py-2.5 rounded-xl flex items-center justify-between ${
                        isActive
                          ? "bg-white/15 text-blue-400 font-bold border border-white/10"
                          : "text-slate-200 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {item}
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
