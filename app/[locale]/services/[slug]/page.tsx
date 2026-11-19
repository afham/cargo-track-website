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
  ChevronDown,
} from "lucide-react";
import { SERVICE_ITEMS, getServiceBySlug } from "@/lib/services-data";
import { FidiAffiliationsCard } from "@/app/components/FidiAffiliationsCard";
import { GoogleReviewCard } from "@/app/components/GoogleReviewCard";
import { GallerySection } from "@/app/modules/GallerySection";
import { QuoteForm } from "@/app/modules/HeroSection/QuoteForm";
interface ServiceStep {
  title: string;
  detail: string;
}

interface ServiceHighlight {
  label: string;
  detail: string;
}

interface ServiceFaq {
  q: string;
  a: string;
}

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
  const serviceBadge = t.has("serviceBadge")
    ? t("serviceBadge")
    : isAr
      ? "الخدمة"
      : "Service";

  const steps: ServiceStep[] = t.has(`services.${service.index}.steps`)
    ? ((t.raw(`services.${service.index}.steps`) as ServiceStep[]) ?? [])
    : [];

  const highlights: ServiceHighlight[] = t.has(
    `services.${service.index}.highlights`,
  )
    ? ((t.raw(`services.${service.index}.highlights`) as ServiceHighlight[]) ??
      [])
    : [];

  const faqs: ServiceFaq[] = t.has(`services.${service.index}.faqs`)
    ? ((t.raw(`services.${service.index}.faqs`) as ServiceFaq[]) ?? [])
    : [];

  return (
    <main className="w-full min-h-screen bg-brand-bg relative overflow-hidden pt-24 lg:pt-28 pb-28 lg:pb-24">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 end-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[100px] -translate-y-1/3 translate-x-1/4 rtl:-translate-x-1/4" />
        <div className="absolute bottom-10 start-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[90px] translate-y-1/4 -translate-x-1/4 rtl:translate-x-1/4" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-sm">
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

        {/* Header Badge & Title */}
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-[2px] bg-primary rounded-full" />
          <span className="text-[12px] font-bold text-primary uppercase tracking-[0.15em]">
            {serviceBadge} #{serviceId}
          </span>
        </div>

        <h1 className="font-heading font-extrabold text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.15] text-navy mb-5">
          {title}
        </h1>

        {/* Featured Hero Image */}
        <div className="relative aspect-[16/9] w-full rounded-[24px] overflow-hidden bg-slate-900 mb-5 shadow-lg border border-slate-200">
          <Image
            src={service.image}
            alt={`${title} - Cargo Track`}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 896px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Google Review & FIDI Affiliations in Dark Navy Wrapper */}
        <div className="flex w-full justify-center items-center gap-4 bg-navy p-4 sm:p-5 rounded-2xl shadow-md mb-6">
          <GoogleReviewCard
            reviewUrl="https://share.google/YwXo78vg3b4wYjBGE"
            isAr={isAr}
          />
          <FidiAffiliationsCard
            reviewUrl="https://www.fidi.org/find-fidi-affiliate/cargo-track-relocations"
            isAr={isAr}
          />
        </div>

        {/* Service Overview & Key Inclusions */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-brand-text/[0.06] shadow-sm mb-6">
          <h2 className="font-heading font-bold text-lg sm:text-xl text-navy mb-2.5">
            {isAr ? "نظرة عامة على الخدمة" : "Service Overview"}
          </h2>
          <p className="text-brand-muted text-sm sm:text-base leading-relaxed mb-5">
            {description}
          </p>

          <h3 className="font-heading font-bold text-xs text-navy uppercase tracking-wider mb-2.5">
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

        {/* How It Works */}
        {steps.length > 0 && (
          <section className="bg-white rounded-2xl p-5 sm:p-6 border border-brand-text/[0.06] shadow-sm mb-6">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-navy mb-3.5">
              {isAr ? "كيف ننفذ الخدمة" : "How It Works"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-brand-bg/70 border border-brand-text/[0.06]"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-6 h-6 rounded-full bg-primary/15 text-primary text-xs font-extrabold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <h3 className="font-heading font-bold text-sm text-navy">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* What You Can Expect */}
        {highlights.length > 0 && (
          <section className="bg-white rounded-2xl p-5 sm:p-6 border border-brand-text/[0.06] shadow-sm mb-6">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-navy mb-3.5">
              {isAr ? "أبرز ما نقدمه" : "What You Can Expect"}
            </h2>
            <div className="divide-y divide-slate-100">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3 first:pt-0 last:pb-0 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-bold text-sm text-navy">
                      {item.label}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-0.5">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Sliding Image Carousel Directly (Not Inside a Card) */}
        <div className="mb-6">
          <GallerySection />
        </div>

        {/* Inline Quote Form Block */}
        <section className="mb-6 flex flex-col items-center">
          <div className="w-full max-w-[480px] flex justify-center py-4 bg-navy rounded-[28px] shadow-md">
            <QuoteForm />
          </div>
        </section>

        {/* Quick Answers / FAQs */}
        {faqs.length > 0 && (
          <section className="bg-white rounded-2xl p-5 sm:p-6 border border-brand-text/[0.06] shadow-sm mb-6">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-navy mb-3.5">
              {isAr ? "أسئلة شائعة" : "Quick Answers"}
            </h2>
            <div className="space-y-2.5">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group rounded-xl border border-slate-200/80 bg-brand-bg/40 open:bg-white transition-colors"
                >
                  <summary className="list-none cursor-pointer p-3.5 flex items-center justify-between gap-3 font-heading font-bold text-sm text-navy">
                    <span>{faq.q}</span>
                    <ChevronDown className="w-4 h-4 text-primary shrink-0 transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <p className="px-3.5 pb-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <div className="p-3.5 rounded-xl bg-white border border-brand-text/[0.05] shadow-sm flex items-center gap-3">
            <Shield className="w-5 h-5 text-primary shrink-0" />
            <span className="text-xs font-bold text-navy">
              {isAr ? "حماية وضمان كامل" : "Full Transit Care"}
            </span>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-brand-text/[0.05] shadow-sm flex items-center gap-3">
            <Clock className="w-5 h-5 text-primary shrink-0" />
            <span className="text-xs font-bold text-navy">
              {isAr ? "التزام تام بالمواعيد" : "On-Time Dispatch"}
            </span>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-brand-text/[0.05] shadow-sm flex items-center gap-3">
            <Globe className="w-5 h-5 text-primary shrink-0" />
            <span className="text-xs font-bold text-navy">
              {isAr ? "تغطية عالمية ومحلية" : "KSA & Worldwide"}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
