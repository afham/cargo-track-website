"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, HeartHandshake, TrendingUp, Users } from "lucide-react";

const LeadershipSection = () => {
  return (
    <section className="w-full relative overflow-hidden bg-white">
      {/* --- TOP PROFILE AREA --- */}
      <div className="relative w-full lg:min-h-[600px] flex flex-col lg:flex-row">
        {/* Subtle Map/Dot pattern on the left */}
        <div className="absolute inset-0 w-full lg:w-[60%] pointer-events-none opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />

        {/* LEFT COLUMN: Text Content */}
        <div className="w-full lg:w-[55%] relative z-10 px-6 lg:pl-12 lg:pr-24 pt-12 pb-4 lg:py-24 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#D32F2F] text-[12px] lg:text-[13px] font-bold tracking-[0.1em] uppercase mb-4 block">
              Leadership That Drives Excellence
            </span>
            <h2 className="font-heading font-extrabold text-[36px] lg:text-[46px] leading-[1.1] text-navy mb-2">
              Mr. Radhakrishnan Rajagopal,
            </h2>
            <h3 className="font-heading font-bold text-[24px] lg:text-[32px] leading-[1.2] text-navy/80 mb-6">
              Chairman & Managing Director
            </h3>
            <div className="w-12 h-1 bg-[#D32F2F] mb-8" />

            <p className="text-gray-600 text-[15px] lg:text-[16px] leading-relaxed mb-6">
              The journey of Seagull group is deeply inspired by the vision and
              leadership of Mr. Radhakrishnan Rajagopal, Chairman & Managing
              Director. With foresight, determination and an unwavering
              commitment to excellence, he laid the foundation of an
              organization built on trust, integrity and customer success. Under
              his guidance, Seagull has grown from a customs clearing &
              forwarding agency into a fully integrated logistics solutions
              provider with a strong presence across India and global reach.
            </p>
            <p className="text-gray-600 text-[15px] lg:text-[16px] leading-relaxed">
              His hands-on approach, deep industry expertise and passion for
              innovation continue to empower our teams and drive the company
              towards greater heights. His belief is simple yet powerful –{" "}
              <strong>
                "Deliver Excellence. Build Relationships. Create Value."
              </strong>
            </p>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Image & Blue Gradient Background */}
        <div className="w-full lg:w-[45%] relative min-h-[400px] lg:min-h-full flex items-end justify-center lg:justify-end overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-500 via-navy to-[#0a192f] z-0" />

          {/* Curved Swoosh Divider (SVG) - absolutely positioned to overlay the divide */}
          <svg
            className="absolute top-0 left-0 h-full w-auto text-white z-10 hidden lg:block -ml-[2px]"
            viewBox="0 0 100 800"
            preserveAspectRatio="none"
          >
            {/* Red accent curve */}
            <path
              d="M 0 0 C 100 200, 100 600, 0 800 L 20 800 C 120 600, 120 200, 20 0 Z"
              fill="#D32F2F"
            />
            {/* White main curve */}
            <path
              d="M 0 0 C 100 200, 100 600, 0 800 L 0 0"
              fill="currentColor"
            />
          </svg>

          {/* Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-20 w-[100%] max-w-[650px] lg:max-w-none lg:w-full h-full pt-0 flex items-end"
          >
            <img
              src={"/assets/chairman.png"}
              alt="Mr. Radhakrishnan Rajagopal - Chairman & Managing Director"
              className="w-full h-full object-cover object-bottom"
            />

            {/* Floating Name Badge */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-12 lg:translate-x-0 bg-navy/95 backdrop-blur-sm border-l-4 border-[#D32F2F] rounded-r-xl px-6 py-4 shadow-2xl min-w-[280px]">
              <h4 className="font-heading font-bold text-white text-[18px] mb-1">
                Mr. Radhakrishnan Rajagopal
              </h4>
              <p className="text-white/70 text-[13px]">
                Chairman & Managing Director
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- BOTTOM FEATURE BANNER --- */}
      <div className="w-full bg-[#0a192f] border-t border-white/10 relative z-30">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex gap-5 pt-8 pb-8 lg:pt-0 lg:pb-0 md:pt-0 md:px-6 lg:px-8 first:pt-0 first:pl-0"
            >
              <div className="w-14 h-14 shrink-0 rounded-full bg-white flex items-center justify-center text-navy">
                <Target size={28} strokeWidth={2} />
              </div>
              <div>
                <h5 className="font-heading font-bold text-white text-[14px] leading-tight mb-3">
                  VISIONARY
                  <br />
                  LEADERSHIP
                </h5>
                <p className="text-white/60 text-[13px] leading-relaxed">
                  A clear vision that transformed challenges into opportunities
                  and shaped Seagull's remarkable growth.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-5 pt-0 pb-8 lg:pt-0 lg:pb-0 md:pt-0 md:px-6 lg:px-8"
            >
              <div className="w-14 h-14 shrink-0 rounded-full bg-white flex items-center justify-center text-navy">
                <HeartHandshake size={28} strokeWidth={2} />
              </div>
              <div>
                <h5 className="font-heading font-bold text-white text-[14px] leading-tight mb-3">
                  CUSTOMER
                  <br />
                  CENTRIC APPROACH
                </h5>
                <p className="text-white/60 text-[13px] leading-relaxed">
                  Building lasting relationships through reliability,
                  transparency and consistent value delivery.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-5 pt-0 pb-8 lg:pt-0 lg:pb-0 md:pt-0 md:px-6 lg:px-8"
            >
              <div className="w-14 h-14 shrink-0 rounded-full bg-white flex items-center justify-center text-navy">
                <TrendingUp size={28} strokeWidth={2} />
              </div>
              <div>
                <h5 className="font-heading font-bold text-white text-[14px] leading-tight mb-3">
                  STRATEGIC
                  <br />
                  GROWTH
                </h5>
                <p className="text-white/60 text-[13px] leading-relaxed">
                  Expanding capabilities, strengthening networks and embracing
                  innovation to stay ahead.
                </p>
              </div>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-5 pt-0 pb-0 lg:pt-0 lg:pb-0 md:pt-0 md:pl-6 lg:pl-8"
            >
              <div className="w-14 h-14 shrink-0 rounded-full bg-white flex items-center justify-center text-navy">
                <Users size={28} strokeWidth={2} />
              </div>
              <div>
                <h5 className="font-heading font-bold text-white text-[14px] leading-tight mb-3">
                  PEOPLE &<br />
                  CULTURE
                </h5>
                <p className="text-white/60 text-[13px] leading-relaxed">
                  Empowering a culture of integrity, teamwork and ownership that
                  drives excellence every day.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
