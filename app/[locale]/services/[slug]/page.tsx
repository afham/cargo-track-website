// app/[locale]/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Shield,
  Clock,
  Globe,
} from "lucide-react";
import { SERVICE_ITEMS, getServiceBySlug } from "@/lib/services-data";
import { QuoteForm } from "@/app/modules/HeroSection/QuoteForm";

export async function generateStaticParams() {
  const locales = ["en", "ar"];
  return locales.flatMap((locale) =>
    SERVICE_ITEMS.map((service) => ({
      locale,
      slug: service.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const t = await getTranslations({ locale, namespace: "ServicesSection" });
  const title = t(`services.${service.index}.title`);
  const description = t(`services.${service.index}.description`);

  return {
    title: `${title} | Cargo Track Relocations`,
    description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "ServicesSection" });
  const isAr = locale === "ar";
  const title = t(`services.${service.index}.title`);
  const description = t(`services.${service.index}.description`);
  const serviceId = t(`services.${service.index}.id`);

  return (
    <main className="w-full min-h-screen bg-brand-bg relative overflow-hidden pt-24 lg:pt-28 pb-20">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 end-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[100px] -translate-y-1/3 translate-x-1/4 rtl:-translate-x-1/4" />
        <div className="absolute bottom-10 start-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[90px] translate-y-1/4 -translate-x-1/4 rtl:translate-x-1/4" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-sm">
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center gap-2 font-semibold text-primary hover:text-navy transition-colors group"
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
            <span>{isAr ? "العودة إلى جميع الخدمات" : "Back to Services"}</span>
          </Link>
        </div>

        {/* Content Layout: Details (Left) + Quote Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Service Details Column */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            {/* Header Badge */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-primary rounded-full" />
              <span className="text-[12px] font-bold text-primary uppercase tracking-[0.15em]">
                {t("serviceBadge")} #{serviceId}
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.15] text-navy mb-6">
              {title}
            </h1>

            {/* Featured Hero Image */}
            <div className="relative aspect-[16/9] w-full rounded-[24px] overflow-hidden bg-slate-900 mb-8 shadow-lg border border-slate-200">
              <Image
                src={service.image}
                alt={`${title} - Cargo Track`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-text/[0.06] shadow-sm mb-8">
              <h2 className="font-heading font-bold text-xl text-navy mb-3">
                {isAr ? "نظرة عامة على الخدمة" : "Service Overview"}
              </h2>
              <p className="text-brand-muted text-base leading-relaxed mb-6">
                {description}
              </p>

              {/* Service Features / Tags */}
              <h3 className="font-heading font-bold text-sm text-navy uppercase tracking-wider mb-3">
                {isAr ? "المزايا والمواصفات" : "Key Inclusions"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {[0, 1, 2].map((tagIdx) => (
                  <span
                    key={tagIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-semibold"
                  >
                    <CheckCircle2 size={14} />
                    {t(`services.${service.index}.tags.${tagIdx}`)}
                  </span>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-white border border-brand-text/[0.05] shadow-sm flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary shrink-0" />
                <span className="text-xs font-bold text-navy">
                  {isAr ? "حماية وضمان كامل" : "Full Transit Care"}
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-brand-text/[0.05] shadow-sm flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span className="text-xs font-bold text-navy">
                  {isAr ? "التزام تام بالمواعيد" : "On-Time Dispatch"}
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-brand-text/[0.05] shadow-sm flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary shrink-0" />
                <span className="text-xs font-bold text-navy">
                  {isAr ? "تغطية عالمية ومحلية" : "KSA & Worldwide"}
                </span>
              </div>
            </div>
          </div>

          {/* Sticky Right Column: Quote Form */}
          {/* <section
          id="quote-section"
          className="bg-navy rounded-[28px] p-8 sm:p-12 text-white relative overflow-hidden shadow-[0_25px_60px_rgba(11,58,102,0.25)] flex flex-col lg:flex-row items-center justify-between gap-10"
        ></section> */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end sticky top-28">
            <div className="w-fit max-w-[460px] bg-navy  rounded-[28px]">
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
