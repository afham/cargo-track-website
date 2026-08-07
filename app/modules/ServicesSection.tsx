"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

// 12 Exact Services Data
const SERVICES_DATA = [
  {
    id: "01",
    title: "Household Goods Relocation",
    description:
      "Our household relocation service includes packing and assembling furniture and other household items, transportation, unpacking and placing your household belongings.",
    tags: ["Packing & Assembly", "Safe Transport", "Unpacking & Placement"],
    image: "/assets/photos4.webp",
  },
  {
    id: "02",
    title: "Vehicle Relocation & Road Transportation",
    description:
      "We provide highly professional and flexible road transportation services. We also provide Smooth and easy vehicle relocation worldwide at affordable prices.",
    tags: [
      "Flexible Road Transport",
      "Worldwide Vehicle Moves",
      "Affordable Shipping",
    ],
    image: "/assets/photos5.webp",
  },
  {
    id: "03",
    title: "Transportation",
    description:
      "CargoTrack provides safe and reliable transportation services across Saudi Arabia and the GCC. We handle local transport, container shipping, FTL, LTL, and smooth customs clearance for import/export cargo.",
    tags: ["Saudi & GCC Network", "FTL & LTL Transport", "Customs Clearance"],
    image: "/assets/photos6.webp",
  },
  {
    id: "04",
    title: "Artwork Packing and Handling Service",
    description:
      "We ensure expert care, secure packing and safe transport for your valuable artwork, providing peace of mind from start to finish.",
    tags: ["Expert Artwork Care", "Secure Packing", "Safe Transport"],
    image: "/assets/photos18.webp",
  },
  {
    id: "05",
    title: "Pet Relocation",
    description:
      "Pet relocation services can include pick-up and delivery of the pet, preparation of required documentation and provision of appropriate travel containers and facilities.",
    tags: [
      "Pet Pick-up & Delivery",
      "Travel Documentation",
      "Approved Containers",
    ],
    image: "/assets/photos4.webp",
  },
  {
    id: "06",
    title: "Storage Services",
    description:
      "Cargotrack offers secure and convenient storage solutions to meet your short or long-term needs, giving you peace of mind that your belongings are safe and protected.",
    tags: ["Short & Long-term", "Secure Storage", "Protected Belongings"],
    image: "/assets/photos17.webp",
  },
  {
    id: "07",
    title: "Industrial Packing",
    description:
      "Our industrial packing services offer secure solutions for transporting heavy machinery, using premium materials to ensure your equipment arrives in perfect condition.",
    tags: ["Heavy Machinery", "Premium Materials", "Equipment Protection"],
    image: "/assets/photos6.webp",
  },
  {
    id: "08",
    title: "Office Relocation",
    description:
      "Professional services aimed at assisting businesses in moving their offices from one location to another. These services typically include planning, packing, transportation, and setup of office equipment and furniture.",
    tags: ["Strategic Planning", "Equipment Setup", "Commercial Transport"],
    image: "/assets/photos7.webp",
  },
  {
    id: "09",
    title: "Freight Forwarding",
    description:
      "CargoTrack delivers complete air, sea, and land freight forwarding services across Saudi Arabia and globally. We manage everything from cargo booking and documentation to customs clearance and final delivery.",
    tags: ["Air, Sea & Land", "End-to-End Shipping", "Global Logistics"],
    image: "/assets/photos15.webp",
  },
  {
    id: "10",
    title: "Pilgrim Baggage Handling",
    description:
      "Pilgrim baggage handling services play a crucial role in ensuring a hassle-free and smooth pilgrimage experience for those visiting the holy cities of Mecca and Medina in Saudi Arabia.",
    tags: [
      "Hassle-Free Pilgrim Care",
      "Mecca & Medina Transit",
      "Doorstep Shipping",
    ],
    image: "/assets/photos14.webp",
  },
  {
    id: "11",
    title: "Mobility Services",
    description:
      "We offer comprehensive mobility services to simplify your relocation process, including immigration, settling-in and destination services.",
    tags: [
      "Immigration Assistance",
      "Settling-In Help",
      "Destination Services",
    ],
    image: "/assets/photos13.webp",
  },
  {
    id: "12",
    title: "Deep Cleaning Service",
    description:
      "We provide deep cleaning for homes, offices and facilities using eco-friendly products and equipment for spotless & hygienic results.",
    tags: ["Homes & Offices", "Eco-Friendly Products", "Spotless Results"],
    image: "/assets/photos12.webp",
  },
];

export const ServicesSection = () => {
  // Schema.org Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: SERVICES_DATA.map((service, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
          "@type": "Organization",
          name: "CargoTrack",
        },
      },
    })),
  };

  return (
    <section
      id="services"
      className="w-full pt-16 pb-20 bg-slate-50/50 relative"
    >
      {/* JSON-LD Rich Snippet for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12 lg:mb-16">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-[2px] bg-primary rounded-full" />
              <span className="text-[12px] font-bold text-primary uppercase tracking-[0.15em]">
                Our Core Services
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading font-extrabold text-[32px] sm:text-[36px] lg:text-[42px] leading-[1.15] text-navy"
            >
              End-to-end relocation &amp; <br className="hidden md:block" />
              <span className="text-primary">
                specialized logistics solutions.
              </span>
            </motion.h2>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col items-start lg:items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-[15px] lg:text-[16px] leading-relaxed lg:text-right mb-4"
            >
              From household shifting and office relocation to artwork care, pet
              moves, and deep cleaning services, Cargotrack coordinates every
              step with precision.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-semibold text-[14px] lg:text-[15px] group hover:text-navy transition-colors"
              >
                Get a Custom Quote
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Uniform Grid with Alternating Card Patterns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const isDarkOverlayCard = index % 2 === 0;

            if (isDarkOverlayCard) {
              return (
                /* TYPE 1: Full Image with Dark Navy Gradient Overlay */
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                  className="group relative min-h-[400px] rounded-[24px] overflow-hidden bg-navy flex flex-col justify-between p-6 sm:p-7 shadow-lg shadow-navy/10 hover:shadow-xl transition-all duration-300 border border-navy/20"
                >
                  <Image
                    src={service.image}
                    alt={`${service.title} - CargoTrack Logistics`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={80}
                    className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/30 pointer-events-none" />

                  {/* Top Header Badge */}
                  <div className="relative z-10 flex justify-between items-center mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold uppercase tracking-wider">
                      <Sparkles size={12} className="text-primary" /> Cargotrack
                      Service
                    </span>
                    <span className="font-mono text-xs font-bold text-white/70">
                      #{service.id}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="relative z-10 mt-auto">
                    <h3 className="font-heading font-extrabold text-white text-xl sm:text-2xl mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/15">
                      {service.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              /* TYPE 2: Full Image with Crisp Light Gradient Overlay */
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                className="group relative min-h-[400px] rounded-[24px] overflow-hidden bg-slate-900 flex flex-col justify-between p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200"
              >
                <Image
                  src={service.image}
                  alt={`${service.title} - CargoTrack Services`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={80}
                  className="object-cover opacity-80 brightness-[0.92] group-hover:scale-105 group-hover:opacity-95 transition-all duration-500 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 via-50% to-transparent pointer-events-none" />

                {/* Top Header Badge */}
                <div className="relative z-10 flex justify-between items-center mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold uppercase tracking-wider shadow-sm">
                    <Sparkles size={12} className="text-primary" /> Cargotrack
                    Service
                  </span>
                  <span className="font-mono text-xs font-extrabold text-navy bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-md shadow-sm">
                    #{service.id}
                  </span>
                </div>

                {/* Body Content */}
                <div className="relative z-10 mt-auto">
                  <h3 className="font-heading font-extrabold text-navy text-xl sm:text-2xl mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-800 font-medium text-xs sm:text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-300/80">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-navy bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-sm px-2.5 py-1 rounded-md"
                      >
                        <Check size={10} className="text-primary stroke-[3]" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
