// app/[locale]/network/[city]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  PhoneCall,
  Mail,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Globe2,
  Building2,
  Truck,
  Anchor,
} from "lucide-react";

import { BRANCHES_DATA } from "@/lib/branches-data";
import { QuoteForm } from "@/app/modules/HeroSection/QuoteForm";

export async function generateStaticParams() {
  const locales = ["en", "ar"];
  const cities = ["jeddah", "riyadh", "dammam"];

  return locales.flatMap((locale) =>
    cities.map((city) => ({
      locale,
      city,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}): Promise<Metadata> {
  const { locale, city } = await params;
  const branch = BRANCHES_DATA[city];
  if (!branch) return {};

  const isAr = locale === "ar";
  const cityName = isAr ? branch.nameAr : branch.nameEn;

  return {
    title: isAr
      ? `كارغو تراك ${cityName} | نقل عفش، شحن دولي وتخليص جمركي`
      : `Cargo Track ${cityName} | Moving, Freight & Logistics`,
    description: isAr
      ? `فرع كارغو تراك في ${cityName}: ${branch.addressAr}. خدمات نقل أثاث دولي ومحلي، شحن بحري وجوي، وتخليص جمركي معتمد.`
      : `Cargo Track branch in ${cityName}: ${branch.addressEn}. Full-service international moving, customs clearance, freight forwarding, and packing.`,
  };
}

export default async function CityBranchPage({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}) {
  const { locale, city } = await params;
  const branch = BRANCHES_DATA[city];

  if (!branch) {
    notFound();
  }

  const isAr = locale === "ar";
  const name = isAr ? branch.nameAr : branch.nameEn;
  const role = isAr ? branch.roleAr : branch.roleEn;
  const badge = isAr ? branch.badgeAr : branch.badgeEn;
  const building = isAr ? branch.buildingAr : branch.buildingEn;
  const address = isAr ? branch.addressAr : branch.addressEn;
  const coverage = isAr ? branch.coverageAr : branch.coverageEn;
  const features = isAr ? branch.featuresAr : branch.featuresEn;

  const BranchIcon =
    branch.id === "jeddah"
      ? Building2
      : branch.id === "riyadh"
        ? Truck
        : Anchor;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: `CargoTrack Relocations - ${name}`,
    telephone: branch.telephones[0],
    email: branch.emails[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressCountry: "SA",
    },
    url: `https://cargotrack.co/${locale}/network/${branch.slug}`,
  };

  return (
    <main className="w-full min-h-screen bg-brand-bg relative overflow-hidden pt-24 lg:pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 end-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[110px] -translate-y-1/3 translate-x-1/4 rtl:-translate-x-1/4" />
        <div className="absolute bottom-10 start-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[90px] translate-y-1/4 -translate-x-1/4 rtl:translate-x-1/4" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2">
          <Link
            href={`/${locale}/network`}
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-primary hover:text-navy transition-colors group"
          >
            {isAr ? (
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            ) : (
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
            )}
            <span>{isAr ? "العودة إلى شبكة الفروع" : "Back to Network"}</span>
          </Link>
        </div>

        {/* Two-Column Grid: Details Left, Quote Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 flex flex-col justify-start">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-primary rounded-full" />
              <span className="text-[12px] font-bold text-primary uppercase tracking-[0.15em]">
                {badge}
              </span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <BranchIcon className="w-6 h-6" />
              </div>
              <h1 className="font-heading font-extrabold text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.15] text-navy">
                {name}
              </h1>
            </div>

            <p className="text-primary font-bold text-base lg:text-lg mb-6">
              {role}
            </p>

            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-white border border-brand-text/[0.06] shadow-sm mb-6">
              <div className="flex items-start gap-3.5 mb-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <strong className="text-navy text-base block">
                    {building}
                  </strong>
                  <p className="text-sm text-brand-muted mt-1 leading-relaxed">
                    {address}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-600">
                <Globe2 className="w-4 h-4 text-primary shrink-0" />
                <span>
                  <strong>
                    {isAr ? "نطاق التغطية: " : "Service Territory: "}
                  </strong>
                  {coverage}
                </span>
              </div>
            </div>

            {/* Direct Lines & Operational Contacts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-5 rounded-2xl bg-white border border-brand-text/[0.06] shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-navy font-bold text-sm">
                  <PhoneCall className="w-4 h-4 text-primary rtl:scale-x-[-1]" />
                  <span>
                    {isAr ? "هواتف الفرع المباشرة" : "Direct Telephone Lines"}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5" dir="ltr">
                  {branch.telephones.map((tel, idx) => (
                    <a
                      key={idx}
                      href={`tel:${tel}`}
                      className="text-xs font-semibold text-primary hover:text-navy transition-colors w-fit"
                    >
                      {tel}
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-brand-text/[0.06] shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-navy font-bold text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>
                    {isAr ? "البريد الإلكتروني للفرع" : "Direct Emails"}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5" dir="ltr">
                  {branch.emails.map((email, idx) => (
                    <a
                      key={idx}
                      href={`mailto:${email}`}
                      className="text-xs font-semibold text-primary hover:text-navy transition-colors break-all w-fit"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Operational Features */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-brand-text/[0.06] shadow-sm mb-6">
              <h2 className="font-heading font-bold text-lg text-navy mb-4">
                {isAr
                  ? `إمكانيات وخدمات فرع ${name}`
                  : `Capabilities & Specializations in ${name}`}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hours & Verification */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-900 text-white text-xs">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>
                  {isAr
                    ? "السبت – الخميس: 8:00 صباحاً – 6:00 مساءً"
                    : "Sat – Thu: 8:00 AM – 6:00 PM"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {isAr
                    ? "مرخص ومعتمد رسمياً في المملكة"
                    : "Fully Licensed KSA Transport"}
                </span>
              </div>
            </div>
          </div>

          {/* Sticky Right Column: Quote Form */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end sticky top-28">
            <div className="w-fit bg-navy rounded-[28px] max-w-[460px]">
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
