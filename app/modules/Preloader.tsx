"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Check if user has already visited in this session
    const hasVisited = sessionStorage.getItem("seagull_hasVisited");
    if (hasVisited) {
      setIsVisible(false);
      return;
    }

    // Lock body scroll while preloader is active
    document.body.style.overflow = "hidden";

    // Sequence timing (total ~2.8s)
    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("seagull_hasVisited", "true");
      document.body.style.overflow = "";
    }, 2800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
        >
          {/* Subtle blue radial glow behind the logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            className="absolute w-[300px] h-[300px] bg-primary/5 rounded-full blur-[60px] pointer-events-none"
          />

          {/* Logo container */}
          <motion.div
            initial={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: shouldReduceMotion ? 0 : [0, -8, 0], // Gentle float
            }}
            transition={{
              opacity: { duration: 0.8, ease: "easeOut" },
              scale: { duration: 1.2, ease: "easeOut" },
              y: {
                duration: 2,
                delay: 0.4,
                ease: "easeInOut",
                times: [0, 0.5, 1],
              },
            }}
            exit={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.96,
            }}
            className="relative z-10"
          >
            <video
              src={"assets/videos/preloader-animation.mp4"}
              autoPlay
              muted
              playsInline
              className="h-16 md:h-20 w-auto object-contain mix-blend-multiply"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
