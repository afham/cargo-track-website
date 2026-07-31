"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  Search,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  MessageCircle,
  Info,
} from "lucide-react";

const faqs = [
  {
    question: "Do you provide customs clearance services?",
    answer:
      "Yes. Seagull provides professional customs clearance support to help businesses efficiently process import and export shipments while complying with applicable regulations.",
  },
  {
    question: "Which ports and cities do you operate from?",
    answer:
      "Seagull operates from major logistics hubs across India and supports domestic as well as international freight movement through trusted logistics partners.",
  },
  {
    question: "Do you handle international freight forwarding?",
    answer:
      "Yes. We support international freight forwarding through reliable global shipping and transportation networks.",
  },
  {
    question: "Can you provide warehousing services?",
    answer:
      "Yes. We provide organised warehousing and cargo handling solutions to support inventory storage and distribution requirements.",
  },
  {
    question: "Can I request a customised logistics solution?",
    answer:
      "Absolutely. Our logistics specialists work closely with customers to develop transportation and supply chain solutions based on individual business requirements.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "You can contact our team through the enquiry form, phone, email or WhatsApp, and our logistics specialists will respond promptly.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full py-[100px] lg:py-[140px] bg-[#F7FAFD] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-[#F7FAFD] to-[#F7FAFD] pointer-events-none z-0" />

      {/* Blueprint grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1565C0 1px, transparent 1px), linear-gradient(to bottom, #1565C0 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Faint route line graphics */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none overflow-hidden z-0">
        <svg
          viewBox="0 0 1000 500"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M 0 250 Q 250 50 500 250 T 1000 250"
            fill="none"
            stroke="#1565C0"
            strokeWidth="2"
            strokeDasharray="10 10"
          />
          <path
            d="M 0 400 Q 250 200 500 400 T 1000 400"
            fill="none"
            stroke="#1565C0"
            strokeWidth="1"
            strokeDasharray="5 5"
          />
        </svg>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[760px] mx-auto mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-[#2E8B57]" />
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[11px] lg:text-[12px] font-bold text-primary uppercase tracking-[0.15em]"
            >
              Frequently Asked Questions
            </motion.span>
            <span className="w-6 h-[2px] bg-[#2E8B57]" />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.15] text-navy mb-5"
          >
            Answers to Your <br className="hidden sm:block" />
            <span className="text-primary">Logistics Questions.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-muted text-[16px] lg:text-[18px] leading-relaxed"
          >
            Find answers to some of the most common questions about our
            logistics, customs clearance, freight forwarding and transportation
            services.
          </motion.p>
        </div>

        {/* Main Layout (Two Column) */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-20 lg:mb-24">
          {/* LEFT: FAQ Accordion */}
          <div className="w-full lg:w-[60%] flex flex-col gap-8">
            {/* Search Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-brand-muted" />
              </div>
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 lg:py-5 bg-white border border-brand-text/10 rounded-[20px] shadow-sm text-[15px] lg:text-[16px] text-navy placeholder:text-brand-muted/70 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
              />
            </motion.div>

            {/* Accordion List */}
            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-white rounded-[20px] overflow-hidden border transition-all duration-300 ${isOpen ? "border-primary shadow-[0_15px_30px_rgba(21,101,192,0.1)]" : "border-brand-text/5 shadow-sm hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5"}`}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between p-6 lg:p-7 text-left focus:outline-none"
                    >
                      <span
                        className={`font-heading font-extrabold text-[16px] lg:text-[18px] pr-8 transition-colors duration-300 ${isOpen ? "text-primary" : "text-navy"}`}
                      >
                        {faq.question}
                      </span>
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? "bg-primary text-white rotate-180" : "bg-[#F7FAFD] text-primary"}`}
                      >
                        <ChevronDown size={20} />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 lg:px-7 pb-6 lg:pb-7 pt-0 text-brand-muted text-[15px] lg:text-[16px] leading-relaxed">
                            <div className="w-full h-[1px] bg-brand-text/5 mb-5" />
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Information Panel & Quick Contact */}
          <div className="w-full lg:w-[40%] flex flex-col gap-6 lg:gap-8">
            {/* Information Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[28px] p-8 lg:p-10 shadow-[0_20px_40px_rgba(11,58,102,0.06)] border border-brand-text/5 relative overflow-hidden flex flex-col"
            >
              {/* Subtle background graphic */}
              <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                <Info size={120} />
              </div>

              <div className="w-14 h-14 bg-[#F7FAFD] rounded-2xl flex items-center justify-center text-primary mb-6 relative z-10 shadow-sm border border-brand-text/5">
                <MessageCircle size={28} />
              </div>

              <h3 className="font-heading font-extrabold text-[24px] lg:text-[28px] text-navy mb-4 relative z-10">
                Need More Information?
              </h3>
              <p className="text-brand-muted text-[15px] lg:text-[16px] leading-relaxed mb-8 relative z-10">
                Our logistics experts are available to discuss your shipping,
                customs clearance and freight forwarding requirements.
              </p>

              <div className="flex flex-col gap-3 relative z-10 mt-auto">
                <a
                  href="tel:04425264513"
                  className="w-full bg-primary text-white px-6 py-4 rounded-xl font-semibold text-[15px] transition-all hover:bg-brightblue hover:shadow-[0_10px_20px_rgba(21,101,192,0.2)] hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 group cursor-pointer"
                >
                  Talk to an Expert
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href="#contact"
                  className="w-full bg-transparent border-2 border-brand-text/10 text-navy px-6 py-4 rounded-xl font-semibold text-[15px] transition-all hover:border-primary/30 hover:bg-[#F7FAFD] inline-flex items-center justify-center gap-2"
                >
                  Request a Quote
                </a>
              </div>
            </motion.div>

            {/* Quick Contact Block */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              <motion.a
                href="tel:04425264513"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-5 rounded-[20px] shadow-sm border border-brand-text/5 flex items-center gap-4 hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full bg-[#F7FAFD] text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-[12px] font-bold text-brand-muted uppercase tracking-wider mb-0.5">
                    Phone Support
                  </div>
                  <div className="font-heading font-bold text-navy text-[15px]">
                    044-25249086 / 044-25264505
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="mailto:seagullcfa@seagullclearing.net"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-5 rounded-[20px] shadow-sm border border-brand-text/5 flex items-center gap-4 hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full bg-[#F7FAFD] text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[12px] font-bold text-brand-muted uppercase tracking-wider mb-0.5">
                    Email Enquiry
                  </div>
                  <div className="font-heading font-bold text-navy text-[15px]">
                    seagullcfa@seagullclearing.net <br />
                    radhakrishnan@seagullclearing.net
                  </div>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white p-5 rounded-[20px] shadow-sm border border-brand-text/5 flex items-center gap-4 hover:-translate-y-1 hover:shadow-md transition-all cursor-default group"
              >
                <div className="w-12 h-12 rounded-full bg-[#F7FAFD] text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-[12px] font-bold text-brand-muted uppercase tracking-wider mb-0.5">
                    Head Office
                  </div>
                  <div className="font-heading font-bold text-navy text-[15px]">
                    Chennai, India
                  </div>
                </div>
              </motion.div>
            </div>
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
          <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none transition-transform duration-1000 group-hover:scale-105">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle at center, white 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
          </div>

          <div className="relative z-10 max-w-[650px] text-center lg:text-left">
            <h3 className="font-heading font-extrabold text-[28px] sm:text-[36px] lg:text-[44px] mb-4 lg:mb-6 leading-tight text-white">
              Still Have Questions?
            </h3>
            <p className="text-white/80 text-[16px] lg:text-[18px] leading-relaxed">
              Our logistics team is ready to provide expert guidance and
              personalised logistics solutions for your business.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold text-[15px] transition-all hover:bg-[#F7FAFD] hover:shadow-lg hover:-translate-y-1"
            >
              Contact Us
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-[15px] transition-all hover:bg-white/10 hover:border-white/50"
            >
              Request a Free Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
