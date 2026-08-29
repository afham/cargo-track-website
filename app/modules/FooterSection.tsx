"use client";

import Image from "next/image";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ShieldCheck,
  Award,
  ChevronUp,
  Globe,
  PhoneCallIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";

const BRANCH_CONTACT_DETAILS = [
  {
    telephones: ["+966596929917", "+966590967593"],
    emails: ["info@cargotrack.co", "wafa.kamil@cargotrack.co"],
  },
  {
    telephones: ["+966583180756", "+966580593809", "+966591545934"],
    emails: [
      "rashif@cargotrack.co",
      "operation@cargotrack.co",
      "Pricing@cargotrack.co",
    ],
  },
  {
    telephones: ["+966599380132", "+966597480313"],
    emails: ["Shiba@cargotrack.co", "Dmm@cargotrack.co"],
  },
];

const QUICK_LINK_KEYS = [
  { key: "home", id: "home", href: "#home" },
  { key: "aboutUs", id: "about-us", href: "#about-us" },
  { key: "services", id: "services", href: "#services" },
  { key: "workflow", id: "workflow", href: "#workflow" },
  { key: "network", id: "network", href: "#network" },
  { key: "gallery", id: "gallery", href: "#gallery" },
  { key: "contact", id: "contact", href: "#contact" },
] as const;

const SOCIAL_LINKS = [
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/cargotrackmovers/",
  },
  {
    icon: Facebook,
    name: "Facebook",
    href: "https://www.facebook.com/cargotrackco/",
  },
  {
    icon: Instagram,
    name: "Instagram",
    href: "https://www.instagram.com/cargotrack.sa/",
  },
  {
    icon: Youtube,
    name: "YouTube",
    href: "https://www.youtube.com/@CARGOTRACKRELOCATIONS",
  },
];

const TOTAL_SERVICES = 12;

export const FooterSection = () => {
  const t = useTranslations("FooterSection");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const schemaData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "MovingCompany",
      name: "CargoTrack Relocations",
      url: "https://cargotrack.co",
      logo: "https://cargotrack.co/assets/cargo-track-logo-white.svg",
      email: "enquiry@cargotrack.co",
      telephone: "+966553659763",
      address: {
        "@type": "PostalAddress",
        streetAddress: "KHALID BIN ALWALEED STREET, Door Number 213B",
        addressLocality: "Jeddah",
        postalCode: "22234",
        addressCountry: "SA",
      },
      sameAs: SOCIAL_LINKS.map((s) => s.href),
    }),
    [],
  );

  return (
    <footer
      id="contact"
      className="w-full bg-[#071F3D] relative overflow-hidden text-white pt-16 pb-16 border-t border-white/10 mt-auto"
    >
      {/* Local SEO Schema Script Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Background Graphic Elements */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
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
                src="/assets/cargo-track-logo-white.svg"
                alt="CargoTrack Relocations Logo"
                className="h-9 w-auto object-contain"
                width={100}
                height={36}
              />
            </div>
            <p className="text-white/70 text-[14px] leading-relaxed mb-6">
              {t("company.description")}
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-lg text-[12px] font-semibold text-white/80 w-fit">
                <Award size={14} className="text-[#4ade80]" />
                {t("company.fidi")}
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-lg text-[12px] font-semibold text-white/80 w-fit">
                <ShieldCheck size={14} className="text-[#4ade80]" />
                {t("company.iam")}
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-lg text-[12px] font-semibold text-white/80 w-fit">
                <Clock size={14} className="text-[#4ade80]" />
                {t("company.experience")}
              </div>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h3 className="text-[15px] font-bold text-white uppercase tracking-wider mb-6">
              {t("titles.quickLinks")}
            </h3>
            <ul className="flex flex-col gap-3">
              {QUICK_LINK_KEYS.map(({ key, id, href }) => (
                <li key={id}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(id);
                    }}
                    className="text-white/70 text-[14px] hover:text-white transition-colors relative group w-fit text-start inline-block focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    {t(`nav.${key}`)}
                    <span className="absolute -bottom-0.5 start-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
                  </a>
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
            className="lg:col-span-1"
          >
            <h3 className="text-[15px] font-bold text-white uppercase tracking-wider mb-6">
              {t("titles.services")}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {Array.from({ length: TOTAL_SERVICES }).map((_, idx) => {
                const name = t(`servicesList.${idx}.name`);
                const slug = t(`servicesList.${idx}.slug`);
                return (
                  <li key={slug}>
                    <a
                      href={`#${slug}`}
                      className="text-white/70 text-[13px] hover:text-white transition-colors relative group w-fit text-start inline-block"
                    >
                      {name}
                      <span className="absolute -bottom-0.5 start-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Column 4: Contact & Hubs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
            id="contact-info"
          >
            <h3 className="text-[15px] font-bold text-white uppercase tracking-wider mb-6">
              {t("titles.branches")}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[0, 1, 2].map((idx) => {
                const name = t(`branches.${idx}.name`);
                const address = t(`branches.${idx}.address`);
                const contacts = BRANCH_CONTACT_DETAILS[idx];

                return (
                  <li key={idx} className="flex gap-3">
                    <MapPin
                      size={18}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    <div className="text-white/70 text-[13px] leading-relaxed w-full">
                      <strong className="text-white text-[14px] block mb-0.5">
                        {name}
                      </strong>
                      <address className="not-italic text-white/60 text-[12px] mb-2">
                        {address}
                      </address>

                      {/* Telephones */}
                      {contacts.telephones.length > 0 && (
                        <div className="flex items-start gap-1.5 text-[12px] text-white/80 mt-1.5">
                          <PhoneCallIcon
                            size={13}
                            className="text-primary shrink-0 mt-0.5 rtl:scale-x-[-1]"
                          />
                          <div
                            dir="ltr"
                            className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-start [unicode-bidi:isolate]"
                          >
                            {contacts.telephones.map((tel, telIdx) => (
                              <span
                                key={telIdx}
                                className="inline-flex items-center"
                              >
                                <a
                                  href={`tel:${tel}`}
                                  dir="ltr"
                                  className="hover:text-white transition-colors [unicode-bidi:isolate]"
                                >
                                  {tel}
                                </a>
                                {telIdx < contacts.telephones.length - 1 && (
                                  <span className="text-white/40 ms-1 me-0.5">
                                    ,
                                  </span>
                                )}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Emails */}
                      {contacts.emails.length > 0 && (
                        <div className="flex items-start gap-1.5 text-[12px] text-white/80 mt-1.5">
                          <Mail
                            size={13}
                            className="text-primary shrink-0 mt-0.5"
                          />
                          <div
                            dir="ltr"
                            className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-start [unicode-bidi:isolate]"
                          >
                            {contacts.emails.map((email, emailIdx) => (
                              <span
                                key={emailIdx}
                                className="inline-flex items-center"
                              >
                                <a
                                  href={`mailto:${email}`}
                                  dir="ltr"
                                  className="hover:text-white transition-colors break-all [unicode-bidi:isolate]"
                                >
                                  {email}
                                </a>
                                {emailIdx < contacts.emails.length - 1 && (
                                  <span className="text-white/40 ms-1 me-0.5">
                                    ,
                                  </span>
                                )}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}

              <li className="flex items-center gap-3 pt-2 border-t border-white/10 sm:col-span-2">
                <Globe size={18} className="text-primary shrink-0" />
                <span className="text-white/70 text-[14px]">
                  {t("coverage")}
                </span>
              </li>

              <li className="flex gap-3 sm:col-span-2">
                <Clock size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-white/70 text-[14px] leading-relaxed">
                  {t("workingHours.title")} <br />
                  {t("workingHours.time")}
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Column 5: Follow Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <h3 className="text-[15px] font-bold text-white uppercase tracking-wider mb-6">
              {t("titles.followUs")}
            </h3>
            <div className="flex items-center gap-3 mb-8">
              {SOCIAL_LINKS.map(({ icon: Icon, name, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t("socialAria")} ${name}`}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(21,101,192,0.5)] transition-all duration-300 group"
                >
                  <Icon
                    size={18}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-white/50 text-[13px] font-medium border-t border-white/10 pt-8">
          <div>
            {t("copyright", { year: new Date().getFullYear().toString() })}
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
            className="fixed bottom-8 end-8 z-50 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-brightblue transition-colors focus:outline-none focus:ring-4 focus:ring-primary/30"
            aria-label={t("scrollToTop")}
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default FooterSection;
