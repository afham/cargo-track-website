"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import {
  Box,
  Truck,
  ShieldCheck,
  CheckCircle2,
  Warehouse,
  ArrowRight,
  PackageOpen,
  ClipboardCheck,
  Navigation,
} from "lucide-react";

const Counter = ({
  value,
  suffix = "",
  duration = 2,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min(
          (timestamp - startTime) / (duration * 1000),
          1,
        );
        const ease = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(ease * value));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(value);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const InfrastructureSection = () => {
  return (
    <section
      id="infrastructure"
      className="w-full py-[100px] lg:py-[140px] bg-white relative overflow-hidden"
    >
      {/* Very subtle blue radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-white to-white pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 translate-y-1/3 z-0" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header & Video */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 mb-16 lg:mb-20">
          <div className="max-w-[700px] flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[2px] bg-[#2E8B57]" />
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-[11px] lg:text-[12px] font-bold text-primary uppercase tracking-[0.15em]"
              >
                Infrastructure & Capabilities
              </motion.span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-extrabold text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.15] text-navy mb-5"
            >
              Built to Handle <br className="hidden sm:block" />
              <span className="text-primary">Logistics at Scale.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-brand-muted text-[16px] lg:text-[18px] leading-relaxed"
            >
              Our modern logistics infrastructure, experienced workforce and
              coordinated transportation network allow us to move cargo
              efficiently, safely and reliably across India and international
              markets.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[100%] max-w-[600px] lg:absolute lg:-right-10 lg-left-0 lg:top-[0px] lg:z-[-20] pointer-events-none"
          >
            <video
              src={"/assets/videos/preloader-animation.mp4"}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-contain mix-blend-multiply -scale-x-100"
            />
          </motion.div>
        </div>

        {/* TOP VISUAL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full h-[400px] sm:h-[520px] lg:h-[620px] rounded-[32px] overflow-hidden relative mb-20 lg:mb-24 shadow-[0_20px_50px_rgba(11,58,102,0.1)] group"
        >
          <motion.img
            initial={{ scale: 1 }}
            whileInView={{ scale: 1.04 }}
            transition={{ duration: 15, ease: "linear" }}
            src={"/assets/infra_facility.png"}
            alt="Modern automated logistics facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/10 to-transparent pointer-events-none" />

          {/* Floating Info Cards */}
          <div className="absolute inset-x-0 bottom-6 lg:bottom-10 px-6 lg:px-10 flex flex-col md:flex-row items-end justify-start gap-4">
            {/* Card 01 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/95 backdrop-blur-md p-4 lg:p-5 rounded-[20px] shadow-[0_15px_30px_rgba(0,0,0,0.1)] flex items-center gap-4 w-full md:w-auto hover:-translate-y-1 transition-transform cursor-default"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Box size={24} />
              </div>
              <div>
                <div className="font-heading font-extrabold text-[20px] lg:text-[24px] text-navy leading-none mb-1">
                  200+
                </div>
                <div className="text-[12px] lg:text-[13px] font-semibold text-brand-muted leading-tight">
                  Consignments
                  <br />
                  Handled Daily
                </div>
              </div>
            </motion.div>

            {/* Card 02 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/95 backdrop-blur-md p-4 lg:p-5 rounded-[20px] shadow-[0_15px_30px_rgba(0,0,0,0.1)] flex items-center gap-4 w-full md:w-auto hover:-translate-y-1 transition-transform cursor-default"
            >
              <div className="w-12 h-12 rounded-full bg-[#2E8B57]/10 text-[#2E8B57] flex items-center justify-center shrink-0">
                <Warehouse size={24} />
              </div>
              <div>
                <div className="font-heading font-bold text-[15px] lg:text-[16px] text-navy mb-0.5">
                  Modern Warehouse
                </div>
                <div className="text-[12px] lg:text-[13px] text-brand-muted">
                  Infrastructure
                </div>
              </div>
            </motion.div>

            {/* Card 03 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/95 backdrop-blur-md p-4 lg:p-5 rounded-[20px] shadow-[0_15px_30px_rgba(0,0,0,0.1)] flex items-center gap-4 w-full md:w-auto hover:-translate-y-1 transition-transform cursor-default"
            >
              <div className="w-12 h-12 rounded-full bg-brand-bg text-primary flex items-center justify-center shrink-0">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <div className="font-heading font-bold text-[15px] lg:text-[16px] text-navy mb-0.5">
                  Skilled Operations Team
                </div>
                <div className="text-[12px] lg:text-[13px] text-brand-muted">
                  Nationwide Support
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* SECTION TWO: Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20 lg:mb-24">
          {/* Card 01: Fleet Network (Spans 2 columns on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 group rounded-[24px] overflow-hidden bg-brand-bg border border-brand-text/5 shadow-sm hover:shadow-[0_20px_40px_rgba(11,58,102,0.08)] hover:-translate-y-1.5 transition-all duration-300 relative min-h-[320px] lg:min-h-[400px] flex flex-col justify-end"
          >
            <img
              src={"/assets/service_transport.png"}
              alt="Modern logistics trucks"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent pointer-events-none" />

            <div className="relative z-10 p-6 lg:p-10 w-full md:w-3/4 lg:w-2/3">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <Truck size={24} />
              </div>
              <h3 className="font-heading font-extrabold text-[22px] lg:text-[28px] text-white mb-3 group-hover:text-[#F7FAFD]">
                Nationwide Transportation
              </h3>
              <p className="text-white/80 text-[14px] lg:text-[16px] leading-relaxed">
                Reliable road transportation supported by an extensive logistics
                fleet covering all major routes across India.
              </p>
            </div>
          </motion.div>

          {/* Card 02: Warehousing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group rounded-[24px] overflow-hidden bg-brand-bg border border-brand-text/5 shadow-sm hover:shadow-[0_20px_40px_rgba(11,58,102,0.08)] hover:-translate-y-1.5 transition-all duration-300 relative min-h-[320px] lg:min-h-[400px] flex flex-col justify-end"
          >
            <img
              src={"/assets/about_warehouse.png"}
              alt="Secure Warehouse"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent pointer-events-none" />

            <div className="relative z-10 p-6 lg:p-8">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <Warehouse size={20} />
              </div>
              <h3 className="font-heading font-extrabold text-[20px] lg:text-[24px] text-white mb-2">
                Secure Storage
              </h3>
              <p className="text-white/80 text-[13px] lg:text-[15px] leading-relaxed">
                Safe inventory management with organised warehousing facilities.
              </p>
            </div>
          </motion.div>

          {/* Card 03: Cargo Handling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group rounded-[24px] overflow-hidden bg-white border border-brand-text/5 shadow-sm hover:shadow-[0_20px_40px_rgba(11,58,102,0.08)] hover:-translate-y-1.5 hover:border-primary/30 transition-all duration-300 relative min-h-[320px] flex flex-col p-6 lg:p-8"
          >
            <div className="w-12 h-12 rounded-full bg-brand-bg text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <PackageOpen size={24} />
            </div>
            <h3 className="font-heading font-extrabold text-[20px] lg:text-[24px] text-navy mb-3 group-hover:text-primary transition-colors">
              Efficient Cargo Handling
            </h3>
            <p className="text-brand-muted text-[14px] lg:text-[15px] leading-relaxed mb-6">
              Professional cargo handling with experienced logistics personnel
              ensuring minimal risk and zero delays.
            </p>
            <div className="mt-auto overflow-hidden rounded-xl h-32 relative">
              <img
                src={"/assets/service_warehousing.png"}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Forklift operation"
              />
            </div>
          </motion.div>

          {/* Card 04: Technology */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group rounded-[24px] overflow-hidden bg-navy shadow-sm hover:shadow-[0_20px_40px_rgba(11,58,102,0.15)] hover:-translate-y-1.5 transition-all duration-300 relative min-h-[320px] flex flex-col p-6 lg:p-8"
          >
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10">
              <h3 className="font-heading font-extrabold text-[20px] lg:text-[24px] text-white mb-6">
                Coordinated Logistics
              </h3>
              <ul className="flex flex-col gap-4 text-white/80 text-[14px] lg:text-[15px] font-medium">
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-primary" /> Shipment
                  Monitoring
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-primary" /> Digital
                  Documentation
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-primary" />{" "}
                  Operational Visibility
                </li>
              </ul>
            </div>

            {/* Animated Route Graphic */}
            <div className="mt-auto pt-8 relative z-10 w-full">
              <div className="h-[2px] w-full bg-white/10 relative rounded-full">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-primary rounded-full shadow-[0_0_10px_rgba(21,101,192,0.8)]"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                />
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-primary shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                  initial={{ left: "0%" }}
                  whileInView={{ left: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                />
              </div>
              <div className="flex justify-between mt-2 text-[11px] text-white/50 uppercase tracking-wider font-bold">
                <span>Origin</span>
                <span>Destination</span>
              </div>
            </div>
          </motion.div>

          {/* Card 05: Safety & Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group rounded-[24px] overflow-hidden bg-white border border-brand-text/5 shadow-sm hover:shadow-[0_20px_40px_rgba(11,58,102,0.08)] hover:-translate-y-1.5 hover:border-primary/30 transition-all duration-300 relative min-h-[320px] flex flex-col p-6 lg:p-8"
          >
            <div className="w-12 h-12 rounded-full bg-brand-bg text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-heading font-extrabold text-[20px] lg:text-[24px] text-navy mb-5 group-hover:text-primary transition-colors">
              Safety & Compliance
            </h3>
            <ul className="flex flex-col gap-4 text-brand-muted text-[14px] lg:text-[15px]">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> ISO
                Standards
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />{" "}
                Operational Compliance
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Secure
                Handling
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />{" "}
                Professional Documentation
              </li>
            </ul>
          </motion.div>
        </div>

        {/* INTERACTIVE KPI STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[28px] shadow-[0_15px_40px_rgba(11,58,102,0.06)] border border-brand-text/5 p-6 lg:p-10 mb-20 lg:mb-24"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 relative">
            {/* Dividers for Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-1/4 w-[1px] h-12 bg-brand-text/10 -translate-y-1/2" />
            <div className="hidden lg:block absolute top-1/2 left-2/4 w-[1px] h-12 bg-brand-text/10 -translate-y-1/2" />
            <div className="hidden lg:block absolute top-1/2 left-3/4 w-[1px] h-12 bg-brand-text/10 -translate-y-1/2" />

            <div className="flex flex-col items-center text-center px-4">
              <div className="font-heading font-extrabold text-[36px] lg:text-[44px] text-primary mb-1 leading-none">
                <Counter value={200} suffix="+" />
              </div>
              <div className="text-brand-muted text-[13px] lg:text-[15px] font-medium">
                Daily Consignments
              </div>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <div className="font-heading font-extrabold text-[36px] lg:text-[44px] text-primary mb-1 leading-none">
                <Counter value={25} suffix="+" />
              </div>
              <div className="text-brand-muted text-[13px] lg:text-[15px] font-medium">
                Years Experience
              </div>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <div className="font-heading font-extrabold text-[36px] lg:text-[44px] text-primary mb-1 leading-none">
                <Counter value={5} suffix="+" />
              </div>
              <div className="text-brand-muted text-[13px] lg:text-[15px] font-medium">
                Strategic Locations
              </div>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <div className="font-heading font-extrabold text-[36px] lg:text-[44px] text-primary mb-1 leading-none">
                <Counter value={100} suffix="%" />
              </div>
              <div className="text-brand-muted text-[13px] lg:text-[15px] font-medium">
                Operational Commitment
              </div>
            </div>
          </div>
        </motion.div>

        {/* PROCESS VISUAL */}
        <div className="w-full max-w-[1000px] mx-auto mb-20 lg:mb-32">
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 px-4">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-12 left-16 right-16 h-[2px] bg-brand-bg -z-10">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
              />
            </div>

            {[
              { icon: Warehouse, label: "Warehouse" },
              { icon: ClipboardCheck, label: "Inventory" },
              { icon: Truck, label: "Transport" },
              { icon: PackageOpen, label: "Delivery" },
              { icon: Navigation, label: "Customer" },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="flex flex-col items-center text-center group bg-white md:bg-transparent p-4 md:p-0 rounded-2xl md:rounded-none shadow-sm md:shadow-none w-full md:w-auto border md:border-none border-brand-text/5"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border border-brand-text/10 shadow-[0_10px_20px_rgba(11,58,102,0.05)] flex items-center justify-center text-primary mb-4 relative z-10 group-hover:border-primary/50 group-hover:scale-105 transition-all duration-300">
                  <step.icon size={32} strokeWidth={1.5} />
                  <div className="absolute inset-0 rounded-full bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300" />
                </div>
                <div className="font-heading font-bold text-navy text-[15px] lg:text-[17px]">
                  {step.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full bg-gradient-to-br from-primary to-navy rounded-[32px] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-[0_20px_40px_rgba(21,101,192,0.2)] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 group"
        >
          {/* Subtle background pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none transition-transform duration-1000 group-hover:scale-105"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: "30px 30px",
            }}
          />

          <div className="relative z-10 max-w-[650px] text-center lg:text-left">
            <h3 className="font-heading font-extrabold text-[28px] sm:text-[36px] lg:text-[44px] mb-4 lg:mb-6 leading-tight text-white">
              Infrastructure Built for <br className="hidden sm:block" />
              Reliable Logistics.
            </h3>
            <p className="text-white/80 text-[16px] lg:text-[18px] leading-relaxed">
              Our integrated infrastructure allows businesses to move cargo
              confidently through every stage of the supply chain.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-md font-semibold text-[15px] transition-all hover:bg-[#F7FAFD] hover:shadow-lg hover:-translate-y-1"
            >
              Request a Quote
              <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border border-white/30 text-white px-8 py-4 rounded-md font-semibold text-[15px] transition-all hover:bg-white/10 hover:border-white/50"
            >
              View Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
