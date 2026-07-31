"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

// WhatsApp Button
export const WhatsAppButton = () => {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      href="#whatsapp-placeholder"
      className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 flex items-center gap-3 group"
    >
      <div className="bg-white px-4 py-2 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:block">
        <span className="text-sm font-semibold text-brand-text">
          Chat with us
        </span>
      </div>
      <div className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_12px_30px_rgba(37,211,102,0.5)] transition-all duration-300">
        <MessageCircle size={28} />
      </div>
    </motion.a>
  );
};
