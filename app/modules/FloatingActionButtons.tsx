"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, FileText } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { sendGAEvent } from "@next/third-parties/google";

const CONTACT_INFO = {
  phone: "+966 55 365 9763",
  cleanPhone: "966553659763",
  defaultMessage:
    "Hi CargoTrack team, I would like to get a free quote for a move.",
};

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.18-1.238-6.167-3.484-8.413" />
  </svg>
);

export const FloatingActionButtons = () => {
  const t = useTranslations("FooterSection");
  const locale = useLocale();
  const isAr = locale === "ar";
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

  const trackWhatsApp = useCallback(() => {
    sendGAEvent("event", "click_whatsapp", {
      method: "whatsapp",
      button_location: "floating_action_bar",
      phone_number: CONTACT_INFO.cleanPhone,
      locale,
    });
  }, [locale]);

  const trackQuoteClick = useCallback(() => {
    sendGAEvent("event", "click_free_quote", {
      button_location: "floating_action_bar",
      locale,
    });
  }, [locale]);

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.cleanPhone}?text=${encodeURIComponent(CONTACT_INFO.defaultMessage)}`;
  const quoteLabel = isAr ? "اطلب عرض سعر مجاني" : "Request Free Quote";
  const whatsappLabel = isAr ? "واتساب" : "WhatsApp";

  return (
    <div className="fixed bottom-5 end-5 sm:bottom-6 sm:end-7 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.7, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 12 }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 20px rgba(21,101,192,0.45)",
            }}
            whileTap={{ scale: 0.92 }}
            onClick={scrollToTop}
            aria-label={t("scrollToTop")}
            title={t("scrollToTop")}
            className="pointer-events-auto w-11 h-11 mr-1  rounded-full bg-navy text-white border border-white/15 flex items-center justify-center shadow-lg hover:bg-primary transition-colors focus:outline-none focus:ring-4 focus:ring-primary/30"
          >
            <ChevronUp size={26} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Request Free Quote + WhatsApp Row/Stack */}
      <div className="pointer-events-auto flex items-center gap-2.5 sm:gap-3">
        <Link
          href={`/${locale}/request-a-quote`}
          onClick={trackQuoteClick}
          className="inline-flex items-center gap-2 h-11 sm:h-12 px-4 sm:px-5 rounded-full bg-primary text-white font-heading font-bold text-xs sm:text-sm shadow-lg shadow-primary/25 hover:bg-navy hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/30"
        >
          <FileText size={16} className="shrink-0" />
          <span>{quoteLabel}</span>
        </Link>

        <a
          href={whatsappUrl}
          onClick={trackWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={whatsappLabel}
          title={whatsappLabel}
          className="relative inline-flex items-center justify-center w-14 h-14 sm:w-14 sm:h-14 rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-600/25 hover:bg-emerald-600 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
        >
          <span
            className="absolute inset-0 rounded-full bg-emerald-500/50 animate-[ping_1.8s_cubic-bezier(0,0,0.2,1)_infinite] pointer-events-none"
            aria-hidden="true"
          />
          <WhatsAppIcon className="w-8 h-8 relative z-10" />
        </a>
      </div>
    </div>
  );
};

export default FloatingActionButtons;
