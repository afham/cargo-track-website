"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // 1. Check session storage immediately
    // const hasVisited = sessionStorage.getItem("hasVisited");
    // if (hasVisited) {
    //   return;
    // }

    // 2. Show preloader only for new sessions
    setIsVisible(true);
    document.body.style.overflow = "hidden";

    // Reduced duration (1.8s) for faster First Meaningful Render
    const timer = setTimeout(() => {
      setIsVisible(false);
      // sessionStorage.setItem("hasVisited", "true");
      document.body.style.overflow = "";
    }, 1800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white pointer-events-auto"
        >
          {/* Subtle blue radial glow behind logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="absolute w-[300px] h-[300px] bg-primary/5 rounded-full blur-[60px] pointer-events-none"
          />

          {/* Animated Logo Container */}
          <motion.div
            initial={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: shouldReduceMotion ? 0 : [0, -8, 0],
            }}
            transition={{
              opacity: { duration: 0.5, ease: "easeOut" },
              scale: { duration: 0.8, ease: "easeOut" },
              y: {
                duration: 1.6,
                delay: 0.2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            exit={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.96,
            }}
            className="relative z-10"
          >
            <Image
              src="/assets/loader.svg"
              width={160}
              height={160}
              alt="CargoTrack Loading"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
