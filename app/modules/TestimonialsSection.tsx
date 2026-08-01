"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Quote,
  ArrowRight,
  Building,
  Star,
  Package,
  Compass,
  Plane,
} from "lucide-react";

const StarRating = ({ count = 5 }: { count?: number }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

const featuredTestimonial = {
  company: "Al-Safwa Executive Services",
  industry: "Corporate & Hospitality Mobility",
  quote:
    "CargoTrack handled our complete office relocation across Jeddah and Riyadh with exceptional professionalism. From disassembling complex IT setups and unmounting equipment to fragile crating and reassembling furniture at our new headquarters, their team managed every phase seamlessly. Over a decade of operational excellence truly shows in their execution.",
};

const supportingTestimonials = [
  {
    company: "Holy Cities Pilgrim Services",
    industry: "Pilgrim & Travel Logistics",
    rating: 5,
    icon: Compass,
    quote:
      "CargoTrack's pilgrim baggage handling service is exceptional. Managing customs at Jeddah and arranging direct, hassle-free door-to-door delivery back to Asia for our Umrah and Hajj groups allowed our pilgrims to focus entirely on their religious journey.",
  },
  {
    company: "Heritage & Fine Arts Gallery",
    industry: "Artwork & Fine Arts Logistics",
    rating: 5,
    icon: Package,
    quote:
      "Transporting valuable artwork and delicate antiques requires specialized care. CargoTrack's team crafted custom wooden boxing and thermocol protection, ensuring total safety from initial pickup to final gallery placement.",
  },
  {
    company: "Global Horizon Mobility",
    industry: "International Relocation & Groupage",
    rating: 5,
    icon: Plane,
    quote:
      "Whether managing household goods transfers to Europe or combining small shipments via their cost-effective groupage services, CargoTrack consistently delivers on time with complete documentation and customs clarity.",
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="relative bg-white py-16 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] opacity-50" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#1e3a8a 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[760px] mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-2 h-2 bg-[#2E8B57] rounded-full" />
            <span className="text-sm font-bold tracking-widest text-primary uppercase">
              Client & Partner Trust
            </span>
            <div className="w-2 h-2 bg-[#2E8B57] rounded-full" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-extrabold text-navy tracking-tight leading-[1.1] mb-6"
          >
            Trusted Relocations Across <br />
            <span className="text-primary">Saudi Arabia & Worldwide.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-brand-muted font-medium"
          >
            Operating from Jeddah, Riyadh, and Dammam with IATA, IAM, and FIDI
            affiliations to deliver seamless relocation, packing, and mobility
            services.
          </motion.p>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col gap-8 mb-24">
          {/* Featured Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[32px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] border border-slate-100 p-8 md:p-12 lg:p-16 relative overflow-hidden group"
          >
            {/* Subtle background gradient */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center relative z-10">
              {/* Left: Company Info */}
              <div className="w-full lg:w-1/3 flex flex-col gap-6 shrink-0">
                <Quote className="w-14 h-14 text-primary/15" />
                <StarRating />
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center text-primary shrink-0 border border-primary/10 shadow-sm">
                    <Building className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy leading-snug">
                      {featuredTestimonial.company}
                    </h4>
                    <span className="inline-block mt-2 px-3 py-1 bg-primary/8 text-primary text-[12px] font-bold rounded-full tracking-wide">
                      {featuredTestimonial.industry}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Quote */}
              <div className="w-full lg:w-2/3">
                <p className="text-[16px] md:text-[18px] font-medium text-navy/80 leading-relaxed">
                  "{featuredTestimonial.quote}"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Supporting Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportingTestimonials.map((t, index) => {
              const Icon = t.icon;
              return (
                <motion.div
                  key={t.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 hover:border-primary/20 flex flex-col relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-[160px] h-[160px] bg-primary/3 rounded-full blur-[50px] pointer-events-none" />
                  <div className="flex items-center justify-between mb-5 relative z-10">
                    <Quote className="w-10 h-10 text-slate-200 group-hover:text-primary/20 transition-colors" />
                    <StarRating count={t.rating} />
                  </div>
                  <p className="text-[16px] text-brand-muted leading-relaxed mb-8 grow relative z-10">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-3.5 mt-auto pt-6 border-t border-slate-100 relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-105 transition-transform border border-primary/10">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-bold text-navy text-[15px] leading-tight">
                        {t.company}
                      </h5>
                      <p className="text-[12px] text-primary font-semibold mt-0.5">
                        {t.industry}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
