// app/[locale]/gallery/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  ShieldCheck,
  PackageCheck,
  Truck,
  CheckCircle2,
} from "lucide-react";
import { GallerySection } from "@/app/modules/GallerySection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    title: isAr
      ? "معرض صور عمليات النقل والتغليف والشحن | كارغو تراك"
      : "Our Work & Operations Gallery | Cargo Track Relocations",
    description: isAr
      ? "استعرض صوراً حقيقية لعمليات نقل العفش والتغليف الاحترافي وشحن الحاويات وأسطول الشاحنات لدى كارغو تراك في الرياض والمملكة."
      : "Explore real photographs of our packing materials, residential moves, heavy vehicle fleet, and international container loading across Saudi Arabia.",
  };
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return (
    <main className="w-full min-h-screen bg-brand-bg relative overflow-hidden pt-24 lg:pt-28 pb-20">
      {/* Background Ambience Elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 end-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[110px] -translate-y-1/3 translate-x-1/4 rtl:-translate-x-1/4" />
        <div className="absolute bottom-10 start-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[90px] translate-y-1/4 -translate-x-1/4 rtl:translate-x-1/4" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Page Hero Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span
              className="w-8 h-[2px] bg-primary/40 rounded-full"
              aria-hidden="true"
            />
            <span className="text-[12px] font-bold text-primary uppercase tracking-[0.15em]">
              {isAr ? "معرض أعمالنا الميدانية" : "Operations in Action"}
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.15] text-navy mb-4">
            {isAr
              ? "شاهد جودة التغليف والتنفيذ بأعين خبرائنا"
              : "Real Operations, Uncompromising Packing Standards"}
          </h1>

          <p className="text-brand-muted text-[16px] lg:text-[18px] leading-relaxed">
            {isAr
              ? "نلتقط صوراً حقيقية من مواقع العمل في الرياض وجدة والدمام توثق الصناديق الخشبية المصممة خصيصاً، تغليف الأثاث الحساس، وتحميل الحاويات البحرية والجوية."
              : "Explore genuine behind-the-scenes documentation of our field specialists: multi-layered furniture protection, heavy-duty wooden crating, and seaport container dispatch."}
          </p>
        </div>
      </div>

      {/* Interactive Gallery Component */}
      <GallerySection />

      {/* Operational Proof Highlights */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-brand-text/[0.06] shadow-sm flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <PackageCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-navy text-lg mb-2">
              {isAr ? "تغليف بمواد فاخرة" : "Export-Grade Materials"}
            </h3>
            <p className="text-xs lg:text-sm text-brand-muted leading-relaxed">
              {isAr
                ? "كراتين مضلعة مزدوجة، ورق حماية سميك، وصناديق خشبية معالجة حرارياً ضد الرطوبة."
                : "Heavy-duty corrugated cartons, bubble wrap, and ISPM-15 heat-treated wood crates."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-brand-text/[0.06] shadow-sm flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-navy text-lg mb-2">
              {isAr ? "أسطول شاحنات مجهز" : "Dedicated Fleet"}
            </h3>
            <p className="text-xs lg:text-sm text-brand-muted leading-relaxed">
              {isAr
                ? "شاحنات حديثة مغلقة ومبطنة داخلياً لامتصاص اهتزازات الطرق وحماية العفش تماماً."
                : "Padded, climate-controlled container trucks built for highway long-hauls across KSA."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-brand-text/[0.06] shadow-sm flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Camera className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-navy text-lg mb-2">
              {isAr ? "توثيق مصور للشحنة" : "Photo Inventory"}
            </h3>
            <p className="text-xs lg:text-sm text-brand-muted leading-relaxed">
              {isAr
                ? "تصوير القطع الثمينة والأجهزة قبل التغليف لضمان تسليمها بنفس الحالة بدقة."
                : "Visual condition documentation before and after crating for complete accountability."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-brand-text/[0.06] shadow-sm flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-navy text-lg mb-2">
              {isAr ? "معايير السلامة المهنية" : "Zero Damage Protocol"}
            </h3>
            <p className="text-xs lg:text-sm text-brand-muted leading-relaxed">
              {isAr
                ? "عمالة نظامية مدربة على حمل وتفكيك وتركيب الأثاث المعقد بدون أي خدوش."
                : "Trained in-house crews specialized in delicate piano, marble, and artwork moves."}
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-16">
        <div className="bg-navy rounded-[28px] p-8 lg:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative z-10 max-w-xl">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3">
              {isAr
                ? "تريد نفس الجودة والاهتمام لمنزلك أو مكتبك؟"
                : "Want the Same Care & Precision for Your Move?"}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              {isAr
                ? "تواصل معنا اليوم لحجز موعد معاينة مجانية وحساب التكلفة بدقة."
                : "Request a custom survey and let our packing teams take care of your valuables."}
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link
              href={`/${locale}/request-a-quote`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold text-sm lg:text-base shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5"
            >
              <span>{isAr ? "طلب عرض سعر" : "Request Free Quote"}</span>
              {isAr ? (
                <ArrowLeft size={18} className="rtl:rotate-0" />
              ) : (
                <ArrowRight size={18} />
              )}
            </Link>
          </div>

          <div className="absolute -end-16 -top-16 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        </div>
      </section>
    </main>
  );
}
