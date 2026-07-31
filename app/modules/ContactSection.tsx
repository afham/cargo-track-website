"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Award,
  Globe,
  Ship,
  Map,
  MessageCircle,
  ShieldCheck,
  Send,
} from "lucide-react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="w-full pt-[100px] lg:pt-[160px] lg:pb-0 bg-gradient-to-br from-[#0B3A66] to-[#1565C0] relative overflow-hidden text-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Route lines */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <svg
          viewBox="0 0 1000 500"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full opacity-[0.06]"
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
        {/* Soft Particles - Animated via CSS/Framer optionally, keeping static here for simplicity */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4ade80] rounded-full blur-[120px] opacity-[0.05] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#60a5fa] rounded-full blur-[150px] opacity-[0.08] animate-pulse delay-1000" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[760px] mx-auto mb-16 lg:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-[#4ade80]" />
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[12px] font-bold text-white uppercase tracking-[0.2em]"
            >
              Contact Seagull
            </motion.span>
            <span className="w-8 h-[2px] bg-[#4ade80]" />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.1] mb-6"
          >
            Let's Move Your <br className="hidden sm:block" />
            <span className="text-[#4ade80]">Business Forward.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-[18px] lg:text-[20px] leading-relaxed font-medium"
          >
            Whether you require customs clearance, freight forwarding,
            transportation, warehousing or complete logistics support, our team
            is ready to help.
          </motion.p>
        </div>

        {/* Main Layout (Two Column) */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* LEFT: Information Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[45%] xl:w-[50%] flex flex-col gap-10"
          >
            {/* Image Placeholder */}
            <div className="w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] rounded-[32px] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-navy/50 border border-white/10 group">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-1000"
                style={{
                  backgroundImage: `url(${"/assets/infra_facility.png"})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3A66] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm font-semibold mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
                  Headquarters
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Global Logistics Hub
                </h3>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <Phone size={24} />,
                  title: "Phone",
                  value: "044-25249086 / 044-25264505",
                },
                {
                  icon: <Mail size={24} />,
                  title: "Email",
                  value:
                    "seagullcfa@seagullclearing.net radhakrishnan@seagullclearing.net",
                },
                {
                  icon: <MapPin size={24} />,
                  title: "Head Office",
                  value:
                    "No.20, Beach House, Second Lane Beach, Chennai - 600 001",
                },
                {
                  icon: <Clock size={24} />,
                  title: "Working Hours",
                  value: "Mon-Sat: 9:00 AM - 6:00 PM",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-[24px] hover:bg-white/10 transition-all hover:-translate-y-1 hover:shadow-lg group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center mb-4 group-hover:bg-[#4ade80] group-hover:text-navy transition-colors">
                    {item.icon}
                  </div>
                  <div className="text-white/60 text-sm font-bold uppercase tracking-wider mb-1">
                    {item.title}
                  </div>
                  <div className="font-heading font-semibold text-[15px]">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Business Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Award size={20} />, label: "25+ Years Experience" },
                {
                  icon: <CheckCircle2 size={20} />,
                  label: "Professional Customs Clearance",
                },
                { icon: <Map size={20} />, label: "Pan India Operations" },
                {
                  icon: <Ship size={20} />,
                  label: "International Freight Support",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-[16px] border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="text-[#4ade80]">{item.icon}</div>
                  <span className="text-sm font-semibold leading-snug">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Map Preview */}
            {/* <div className="relative rounded-[24px] overflow-hidden bg-white/5 border border-white/10 p-2 group">
              <div className="absolute inset-0 bg-[#0B3A66]/50 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center text-center p-6 opacity-100 group-hover:bg-[#0B3A66]/70 transition-all">
                <MapPin className="w-10 h-10 text-[#4ade80] mb-3" />
                <p className="font-medium text-white/90 mb-4 max-w-[250px]">Interactive Google Map will be integrated here.</p>
                <button className="px-6 py-2 bg-white text-navy font-bold rounded-full text-sm hover:bg-[#4ade80] transition-colors">
                  Open in Google Maps
                </button>
              </div>
             
              <div className="w-full h-[200px] bg-slate-800 rounded-[16px] opacity-30 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Chennai,India&zoom=11&size=600x300&style=feature:all|element:labels|visibility:off&style=feature:water|element:geometry|color:0x1565C0')] bg-cover bg-center" />
            </div> */}
          </motion.div>

          {/* RIGHT: Quote Request Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[55%] xl:w-[50%]"
          >
            <div className="lg:sticky lg:top-[110px]">
              <div className="bg-white rounded-[32px] p-8 sm:p-10 lg:p-[48px] shadow-[0_30px_60px_rgba(0,0,0,0.15)] text-navy">
                <div className="mb-8">
                  <h3 className="font-heading font-extrabold text-[28px] sm:text-[32px] mb-3">
                    Request a Quote
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    Complete the form below and our logistics specialists will
                    get in touch with you shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2 relative group">
                      <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wide">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-[#F7FAFD] border border-slate-200 rounded-[16px] px-5 py-4 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                      />
                    </div>
                    {/* Company Name */}
                    <div className="space-y-2 relative group">
                      <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wide">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Logistics Ltd"
                        className="w-full bg-[#F7FAFD] border border-slate-200 rounded-[16px] px-5 py-4 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-2 relative group">
                      <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wide">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-[#F7FAFD] border border-slate-200 rounded-[16px] px-5 py-4 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                      />
                    </div>
                    {/* Phone */}
                    <div className="space-y-2 relative group">
                      <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wide">
                        Phone Number *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 00000 00000"
                        className="w-full bg-[#F7FAFD] border border-slate-200 rounded-[16px] px-5 py-4 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Service Required */}
                    <div className="space-y-2 relative group">
                      <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wide">
                        Service Required *
                      </label>
                      <select
                        required
                        defaultValue={""}
                        className="w-full bg-[#F7FAFD] border border-slate-200 rounded-[16px] px-5 py-4 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-slate-700 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiM5NDkzYjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSIvPjwvc3ZnPg==')] bg-no-repeat bg-[position:calc(100%-1.25rem)_center]"
                      >
                        <option value="" disabled selected>
                          Select a Service
                        </option>
                        <option value="customs">Customs Clearance</option>
                        <option value="freight">Freight Forwarding</option>
                        <option value="transport">Transportation</option>
                        <option value="warehousing">Warehousing</option>
                        <option value="import-export">Import & Export</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    {/* Shipment Type */}
                    <div className="space-y-2 relative group">
                      <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wide">
                        Shipment Type
                      </label>
                      <select
                        defaultValue={""}
                        className="w-full bg-[#F7FAFD] border border-slate-200 rounded-[16px] px-5 py-4 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-slate-700 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiM5NDkzYjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSIvPjwvc3ZnPg==')] bg-no-repeat bg-[position:calc(100%-1.25rem)_center]"
                      >
                        <option value="" disabled selected>
                          Select Type
                        </option>
                        <option value="import">Import</option>
                        <option value="export">Export</option>
                        <option value="domestic">Domestic</option>
                        <option value="international">International</option>
                      </select>
                    </div>
                  </div>

                  {/* Cargo Type */}
                  <div className="space-y-2 relative group">
                    <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wide">
                      Cargo Type / Details
                    </label>
                    <input
                      type="text"
                      placeholder="E.g., Pharmaceuticals, Machinery, General Goods"
                      className="w-full bg-[#F7FAFD] border border-slate-200 rounded-[16px] px-5 py-4 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2 relative group">
                    <div className="flex justify-between">
                      <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wide">
                        Message *
                      </label>
                      <span className="text-[12px] font-medium text-slate-400">
                        Max 500 chars
                      </span>
                    </div>
                    <textarea
                      required
                      maxLength={500}
                      rows={4}
                      placeholder="Please provide any additional details about your requirements..."
                      className="w-full bg-[#F7FAFD] border border-slate-200 rounded-[16px] px-5 py-4 outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    disabled={isSubmitting || isSuccess}
                    type="submit"
                    className={`group w-full py-5 rounded-[16px] font-bold text-[16px] flex items-center justify-center gap-3 transition-all duration-300 ${
                      isSuccess
                        ? "bg-[#4ade80] text-navy shadow-[0_10px_20px_rgba(74,222,128,0.2)]"
                        : "bg-primary text-white hover:bg-brightblue hover:shadow-[0_15px_30px_rgba(21,101,192,0.25)] hover:-translate-y-1"
                    } ${isSubmitting ? "opacity-80 cursor-wait" : ""}`}
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : isSuccess ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        Quote Request Sent
                      </>
                    ) : (
                      <>
                        Request Free Quote
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>

                {/* Alternative Contact */}
                <div className="mt-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-[1px] bg-slate-100 flex-1" />
                    <span className="text-[13px] font-bold text-slate-400 uppercase tracking-widest">
                      OR
                    </span>
                    <div className="h-[1px] bg-slate-100 flex-1" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <a
                      href="https://wa.me/914425249086"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-4 px-2 rounded-xl border-2 border-slate-100 font-bold text-slate-700 hover:border-[#25D366] hover:text-[#25D366] hover:bg-[#25D366]/5 transition-all"
                    >
                      <MessageCircle size={18} />
                      WhatsApp
                    </a>
                    <a
                      href="tel:04425249086"
                      className="flex items-center justify-center gap-2 py-4 px-2 rounded-xl border-2 border-slate-100 font-bold text-slate-700 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
                    >
                      <Phone size={18} />
                      Call Now
                    </a>
                    <a
                      href="mailto:seagullcfa@seagullclearing.net"
                      className="flex items-center justify-center gap-2 py-4 px-2 rounded-xl border-2 border-slate-100 font-bold text-slate-700 hover:border-slate-800 hover:text-slate-800 hover:bg-slate-50 transition-all"
                    >
                      <Send size={18} />
                      Email Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Trust Strip */}
      <div className="mt-20 lg:mt-32 border-t border-white/10 relative z-10 bg-white/5 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-8">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-6 lg:gap-8">
            {[
              {
                icon: <ShieldCheck size={24} />,
                text: "ISO 9001:2015 Certified",
              },
              { icon: <Award size={24} />, text: "AEO Certified Operator" },
              { icon: <Clock size={24} />, text: "25+ Years Experience" },
              {
                icon: <Globe size={24} />,
                text: "Professional Logistics Solutions",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 text-white/80 group"
              >
                <div className="text-[#4ade80] opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.icon}
                </div>
                <span className="font-semibold text-sm tracking-wide">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
