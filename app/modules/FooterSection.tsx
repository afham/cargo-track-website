"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
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
  Globe,
  Briefcase,
  ChevronUp,
  Send,
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

  return (
    <footer className="w-full bg-[#071F3D] relative overflow-hidden text-white pt-[100px] pb-10 border-t border-white/10 mt-auto">
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
        {/* TOP CTA STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full bg-gradient-to-r from-primary to-[#1E88E5] rounded-[32px] p-8 md:p-10 mb-20 shadow-[0_20px_50px_rgba(21,101,192,0.2)] flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden group"
        >
          {/* Decorative CTA Background */}
          <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path d="M 0 100 L 100 0 L 100 100 Z" fill="white" />
            </svg>
          </div>

          <div className="relative z-10 text-center lg:text-left max-w-2xl">
            <h3 className="font-heading font-extrabold text-[28px] sm:text-[32px] text-white mb-3">
              Ready to Simplify Your Logistics?
            </h3>
            <p className="text-white/90 text-[15px] sm:text-[16px]">
              Partner with Seagull for reliable customs clearance, freight
              forwarding, transportation and warehousing solutions.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-white text-primary px-8 py-4 rounded-[12px] font-bold text-[15px] hover:bg-slate-50 hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group/btn"
            >
              Request a Quote
              <ArrowRight
                size={18}
                className="group-hover/btn:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-[12px] font-bold text-[15px] hover:bg-white/10 hover:border-white/50 transition-all"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          {/* Column 1: Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-6">
              <img
                src={"/assets/cargo-track-logo.png"}
                alt="Seagull Logo"
                className="h-9 w-auto object-contain brightness"
              />
              {/* <span className="font-heading font-extrabold text-[24px] text-white tracking-tight">SEAGULL</span> */}
            </div>
            <p className="text-white/70 text-[14px] leading-relaxed mb-8">
              Seagull delivers reliable customs clearance, freight forwarding,
              transportation and logistics solutions with decades of industry
              expertise.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-lg text-[12px] font-semibold text-white/80 w-fit">
                <ShieldCheck size={14} className="text-[#4ade80]" /> ISO
                Certified
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-lg text-[12px] font-semibold text-white/80 w-fit">
                <Award size={14} className="text-[#4ade80]" /> AEO Certified
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-lg text-[12px] font-semibold text-white/80 w-fit">
                <Clock size={14} className="text-[#4ade80]" /> 25+ Years
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
                "Industries",
                "Global Network",
                "Infrastructure",
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
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                "Customs Clearance",
                "Freight Forwarding",
                "Transportation",
                "Warehousing",
                "Import & Export",
                "Supply Chain Support",
              ].map((item, idx) => (
                <li key={idx}>
                  <button className="text-white/70 text-[14px] hover:text-white transition-colors relative group w-fit text-left">
                    {item}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-[15px] font-bold text-white uppercase tracking-wider mb-6">
              Contact
            </h4>
            <ul className="flex flex-col gap-5">
              <li className="flex gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-white/70 text-[14px] leading-relaxed">
                  No.20, Beach House, Room No. 3, 2nd Floor, Second Lane Beach,
                  Chennai - 600 001, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span className="text-white/70 text-[14px]">
                  044-25249086 / 044-25264505
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span className="text-white/70 text-[14px]">
                  seagullcfa@seagullclearing.net
                  <br />
                  radhakrishnan@seagullclearing.net
                </span>
              </li>
              <li className="flex gap-3">
                <Clock size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-white/70 text-[14px] leading-relaxed">
                  Business Hours
                  <br />
                  Mon-Sat: 9AM - 6PM
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
            <div className="flex items-center gap-3 mb-10">
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

            <h4 className="text-[15px] font-bold text-white uppercase tracking-wider mb-4">
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
            </form>
          </motion.div>
        </div>

        {/* CERTIFICATION STRIP */}
        {/* <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="border-t border-b border-white/10 py-8 mb-10"
        >
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 lg:gap-8">
            {[
              { icon: <ShieldCheck size={20} />, label: "ISO Certified" },
              { icon: <Award size={20} />, label: "AEO Certified" },
              { icon: <Briefcase size={20} />, label: "Professional Logistics" },
              { icon: <Globe size={20} />, label: "Trusted Operations" }
            ].map((cert, idx) => (
              <div key={idx} className="flex items-center gap-3 text-white/60 bg-white/5 px-5 py-3 rounded-xl border border-white/5 hover:bg-white/10 hover:text-white transition-all">
                <span className="text-primary">{cert.icon}</span>
                <span className="text-[14px] font-semibold tracking-wide">{cert.label}</span>
              </div>
            ))}
          </div>
        </motion.div> */}

        {/* BOTTOM BAR */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-white/50 text-[13px] font-medium border-t border-white/10 pt-8">
          <div>
            © {new Date().getFullYear()} SEAGULL, Clearing & Forwarding Agencies
            Pvt. Ltd. All Rights Reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {[
              "Privacy Policy",
              "Terms & Conditions",
              "Disclaimer",
              "Cookies Policy",
            ].map((item, idx) => (
              <button key={idx} className="hover:text-white transition-colors">
                {item}
              </button>
            ))}
          </div>
          {/* <div className="text-center lg:text-right">
            Designed with <span className="text-red-500">❤️</span> for Global Logistics Excellence
          </div> */}
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
