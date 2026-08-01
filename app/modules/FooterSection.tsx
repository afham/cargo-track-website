"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ShieldCheck,
  Award,
  ChevronUp,
  Send,
  Globe,
  PhoneCallIcon,
} from "lucide-react";

const FooterSection = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const affiliations = [
    "IATA",
    "IAM",
    "IMA",
    "IAMX",
    "GEM Network",
    "FIDI",
    "Asian Relocation Association",
  ];

  const services = [
    "Household Goods Relocation",
    "Vehicle Relocation & Transport",
    "Packing & Crating Services",
    "Artwork Packing & Handling",
    "Pet Relocation",
    "Storage & Warehousing",
    "Industrial Packing",
    "Office Relocation",
    "Groupage Services",
    "Pilgrim Baggage Handling",
    "Mobility & Destination Services",
    "Deep Cleaning Service",
  ];

  return (
    <footer
      id="contact"
      className="w-full bg-[#071F3D] relative overflow-hidden text-white pt-16 pb-16 border-t border-white/10 mt-auto"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          viewBox="0 0 1000 500"
          preserveAspectRatio="none"
          className="w-full h-full opacity-[0.03]"
        >
          <path
            d="M 0 450 Q 250 150 500 350 T 1000 150"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="10 10"
          />
          <path
            d="M 0 200 Q 250 400 500 200 T 1000 300"
            fill="none"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="5 5"
          />
          <circle cx="500" cy="350" r="4" fill="white" />
          <circle cx="250" cy="275" r="4" fill="white" />
          <circle cx="750" cy="250" r="4" fill="white" />
        </svg>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-6">
              <Image
                src={"/assets/cargo-track-logo-white.svg"}
                alt="CargoTrack Logo"
                className="h-9 w-auto object-contain brightness"
                width={100}
                height={36}
              />
            </div>
            <p className="text-white/70 text-[14px] leading-relaxed mb-6">
              Based in Jeddah with branches in Riyadh and Dammam, CargoTrack
              delivers trusted relocation, storage, mobility, and logistics
              solutions locally and internationally.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-lg text-[12px] font-semibold text-white/80 w-fit">
                <Award size={14} className="text-[#4ade80]" /> FIDI & IATA
                Accredited
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-lg text-[12px] font-semibold text-white/80 w-fit">
                <ShieldCheck size={14} className="text-[#4ade80]" /> IAM & GEM
                Member
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-lg text-[12px] font-semibold text-white/80 w-fit">
                <Clock size={14} className="text-[#4ade80]" /> 10+ Years
                Experience
              </div>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-[15px] font-bold text-white uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                "Home",
                "About Us",
                "Services",
                "Memberships",
                "Global Network",
                "Pilgrim Baggage",
                "FAQ",
                "Contact",
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() =>
                      scrollToSection(item.toLowerCase().replace(" ", "-"))
                    }
                    className="text-white/70 text-[14px] hover:text-white transition-colors relative group w-fit text-left"
                  >
                    {item}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-[15px] font-bold text-white uppercase tracking-wider mb-6">
              Our Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((item, idx) => (
                <li key={idx}>
                  <button className="text-white/70 text-[13px] hover:text-white transition-colors relative group w-fit text-left">
                    {item}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact & Hubs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-[15px] font-bold text-white uppercase tracking-wider mb-6">
              Headquarters & Hubs
            </h4>
            <ul className="flex flex-col gap-5">
              <li className="flex gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-white/70 text-[14px] leading-relaxed">
                  <strong className="text-white">Jeddah (Head Office)</strong>
                  <br />
                  Saudi Arabia
                  <br />
                  <span className="text-[12px] text-white/50">
                    Branches: Riyadh | Dammam
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={18} className="text-primary shrink-0" />
                <span className="text-white/70 text-[14px]">
                  Coverage: Middle East, Asia & Worldwide
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span className="text-white/70 text-[14px]">
                  info@cargotrack.com.sa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneCallIcon size={18} className="text-primary shrink-0" />
                <span className="text-white/70 text-[14px]">
                  +966 59 096 7593
                </span>
              </li>
              <li className="flex gap-3">
                <Clock size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-white/70 text-[14px] leading-relaxed">
                  Working Hours
                  <br />
                  Sun - Thu: 8:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Column 5: Follow Us & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-[15px] font-bold text-white uppercase tracking-wider mb-6">
              Follow Us
            </h4>
            <div className="flex items-center gap-3 mb-8">
              {[Linkedin, Facebook, Instagram, Twitter, Youtube].map(
                (Icon, idx) => (
                  <button
                    key={idx}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(21,101,192,0.5)] transition-all duration-300 group"
                  >
                    <Icon
                      size={18}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </button>
                ),
              )}
            </div>

            {/* <h4 className="text-[15px] font-bold text-white uppercase tracking-wider mb-4">
              Stay Updated
            </h4>
            <form
              className="relative flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 rounded-[12px] px-4 py-3 outline-none focus:bg-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-white placeholder:text-white/40 text-[14px]"
              />
              <button className="w-full bg-primary text-white rounded-[12px] px-4 py-3 font-semibold text-[14px] hover:bg-brightblue transition-all flex items-center justify-center gap-2 group">
                <Send size={16} />
                Subscribe
              </button>
            </form> */}
          </motion.div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-white/50 text-[13px] font-medium border-t border-white/10 pt-8">
          <div>
            © {new Date().getFullYear()} CargoTrack Relocations. All Rights
            Reserved.
          </div>
        </div>
      </div>

      {/* BACK TO TOP BUTTON */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(21,101,192,0.6)",
            }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-22 right-8 z-50 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-brightblue transition-colors focus:outline-none focus:ring-4 focus:ring-primary/30"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default FooterSection;
