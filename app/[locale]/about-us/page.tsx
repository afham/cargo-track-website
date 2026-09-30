import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Award,
  Users2,
  Truck,
} from "lucide-react";
import { AboutSection } from "@/app/modules/AboutSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    title: isAr
      ? "من نحن | كارغو تراك لنقل الأثاث والخدمات اللوجستية بالرياض"
      : "About Us | Cargo Track Relocations & Logistics Riyadh",
    description: isAr
      ? "تعرف على كارغو تراك، الشركة الرائدة في خدمات نقل العفش والشحن الدولي والتخليص الجمركي في الرياض والمملكة العربية السعودية."
      : "Learn more about Cargo Track Relocations. Trusted international moving, customs clearance, and global freight solutions based in Riyadh, Saudi Arabia.",
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return (
    <main className="w-full min-h-screen bg-brand-bg relative overflow-hidden pt-24 lg:pt-28 pb-16">
      {/* Hero / Page Headline */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-4">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <span
              className="w-8 h-[2px] bg-primary/40 rounded-full"
              aria-hidden="true"
            />
            <span className="text-[12px] font-bold text-primary uppercase tracking-[0.15em]">
              {isAr ? "من نحن" : "Company Profile"}
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.15] text-navy mb-4">
            {isAr
              ? "شريكك الموثوق للنقل والشحن حول العالم"
              : "Connecting Riyadh to the World with Integrity & Care"}
          </h1>
        </div>
      </section>

      {/* Your Existing AboutSection Visual Component */}
      <AboutSection />

      {/* Standalone Page Enhancements: Key Operational Stats */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 my-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          <div className="bg-white rounded-2xl p-6 border border-brand-text/[0.05] shadow-[0_4px_20px_rgba(11,58,102,0.03)] text-center">
            <Award className="w-6 h-6 text-primary mx-auto mb-2" />
            <div className="font-heading font-extrabold text-2xl lg:text-3xl text-navy">
              15+
            </div>
            <p className="text-xs lg:text-sm text-brand-muted mt-1">
              {isAr ? "سنوات خبرة لوجستية" : "Years Industry Experience"}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-brand-text/[0.05] shadow-[0_4px_20px_rgba(11,58,102,0.03)] text-center">
            <Truck className="w-6 h-6 text-primary mx-auto mb-2" />
            <div className="font-heading font-extrabold text-2xl lg:text-3xl text-navy">
              5,000+
            </div>
            <p className="text-xs lg:text-sm text-brand-muted mt-1">
              {isAr ? "عملية نقل ناجحة" : "Moves Completed"}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-brand-text/[0.05] shadow-[0_4px_20px_rgba(11,58,102,0.03)] text-center">
            <ShieldCheck className="w-6 h-6 text-primary mx-auto mb-2" />
            <div className="font-heading font-extrabold text-2xl lg:text-3xl text-navy">
              100%
            </div>
            <p className="text-xs lg:text-sm text-brand-muted mt-1">
              {isAr ? "تخليص جمركي معتمد" : "Licensed Customs Partner"}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-brand-text/[0.05] shadow-[0_4px_20px_rgba(11,58,102,0.03)] text-center">
            <Users2 className="w-6 h-6 text-primary mx-auto mb-2" />
            <div className="font-heading font-extrabold text-2xl lg:text-3xl text-navy">
              120+
            </div>
            <p className="text-xs lg:text-sm text-brand-muted mt-1">
              {isAr ? "وجهة دولية مغطاة" : "Global Partner Ports"}
            </p>
          </div>
        </div>
      </section>

      {/* Standalone Page Bottom CTA Banner */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-12">
        <div className="bg-navy rounded-[28px] p-8 lg:p-14 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative z-10 max-w-xl">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-snug mb-3">
              {isAr
                ? "جاهز لتجربة انتقال مريحة وخالية من التوتر؟"
                : "Ready to Plan a Seamless Move with Cargo Track?"}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              {isAr
                ? "تواصل مع خبرائنا في الرياض اليوم واحصل على خطة نقل مخصصة وعرض أسعار فوري."
                : "Talk to our relocation specialists in Riyadh today and get an upfront, comprehensive quotation."}
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link
              href={`/${locale}/request-a-quote`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold text-sm lg:text-base shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5"
            >
              <span>{isAr ? "احصل على عرض سعر" : "Request Free Quote"}</span>
              {isAr ? (
                <ArrowLeft size={18} className="rtl:rotate-0" />
              ) : (
                <ArrowRight size={18} />
              )}
            </Link>
          </div>

          {/* Decorative Glow */}
          <div className="absolute -end-16 -top-16 w-64 h-64 bg-primary/30 rounded-full blur-3xl pointer-events-none" />
        </div>
      </section>
    </main>
  );
}
