// app/[locale]/workflow/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  PackageCheck,
  Truck,
  Sparkles,
  ClipboardList,
} from "lucide-react";
import CargoJourneySection from "@/app/modules/CargoJourneySection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    title: isAr
      ? "مراحل وخطوات نقل وشحن الأثاث | كارغو تراك"
      : "Our Moving & Relocation Workflow | Cargo Track",
    description: isAr
      ? "تعرف على خطوات ومراحل نقل الأثاث والشحن الدولي لدى كارغو تراك: من المعاينة والتغليف الاحترافي إلى التخليص الجمركي والتسليم النهائي."
      : "Discover Cargo Track's systematic 6-step relocation workflow: from pre-move survey and export-grade packing to customs clearance and final doorstep delivery.",
  };
}

export default async function WorkflowPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return (
    <main className="w-full min-h-screen bg-brand-bg relative overflow-hidden pt-24 lg:pt-28 pb-20">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 end-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[110px] -translate-y-1/3 translate-x-1/4 rtl:-translate-x-1/4" />
        <div className="absolute bottom-10 start-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[90px] translate-y-1/4 -translate-x-1/4 rtl:translate-x-1/4" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Page Hero Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span
              className="w-8 h-[2px] bg-primary/40 rounded-full"
              aria-hidden="true"
            />
            <span className="text-[12px] font-bold text-primary uppercase tracking-[0.15em]">
              {isAr ? "منهجية العمل المتكاملة" : "Operational Standards"}
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.15] text-navy mb-4">
            {isAr
              ? "رحلة شحنتك خطوة بخطوة من الباب إلى الباب"
              : "A Seamless, End-to-End Moving Experience"}
          </h1>

          <p className="text-brand-muted text-[16px] lg:text-[18px] leading-relaxed">
            {isAr
              ? "نعتمد نظاماً تشغيلياً دقيقاً يضمن سلامة مقتنياتك وأثاثك في كل مرحلة، مع توفير متابعة مستمرة وتنسيق جمركي مباشر."
              : "Our structured relocation process eliminates uncertainty. We handle inspection, export packing, Saudi customs clearance, multimodal transit, and white-glove setup."}
          </p>
        </div>
      </div>

      {/* Interactive Cargo Journey Section */}
      <CargoJourneySection />

      {/* Operational Assurance Cards */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-heading font-extrabold text-2xl lg:text-3xl text-navy mb-3">
            {isAr
              ? "ضمانات الجودة خلال كل مرحلة"
              : "Quality Assurance at Every Milestone"}
          </h2>
          <p className="text-sm lg:text-base text-brand-muted">
            {isAr
              ? "إجراءات قياسية معتمدة من الاتحادات الدولية لضمان نقل آمن بدون أي مفاجآت."
              : "Certified logistics protocols complying with FIDI and IAM standards for peace of mind."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-brand-text/[0.06] shadow-sm flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <ClipboardList className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-navy text-lg mb-2">
              {isAr ? "1. المعاينة وقائمة الجرد" : "1. Pre-Move Survey"}
            </h3>
            <p className="text-xs lg:text-sm text-brand-muted leading-relaxed">
              {isAr
                ? "حساب دقيق للحجم والأوزان مع توثيق القطع الحساسة ووضع خطة زمنية واضحة."
                : "Precise cubic meter assessment, inventory itemization, and transit timeline planning."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-brand-text/[0.06] shadow-sm flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <PackageCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-navy text-lg mb-2">
              {isAr ? "2. التغليف والترميز" : "2. Barcoded Packing"}
            </h3>
            <p className="text-xs lg:text-sm text-brand-muted leading-relaxed">
              {isAr
                ? "تغليف متعدد الطبقات مع ترقيم وصناديق مخصصة للزجاج والتحف والإلكترونيات."
                : "Multi-layered export wrapping and custom wooden crating with itemized labeling."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-brand-text/[0.06] shadow-sm flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-navy text-lg mb-2">
              {isAr ? "3. التخليص والمتابعة" : "3. Clearance & Tracking"}
            </h3>
            <p className="text-xs lg:text-sm text-brand-muted leading-relaxed">
              {isAr
                ? "تخليص سريع عبر الموانئ والمطارات وتحديث دوري بموقع الشحنة حتى الوصول."
                : "Expedited Saudi customs clearance with real-time status and milestone tracking."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-brand-text/[0.06] shadow-sm flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-navy text-lg mb-2">
              {isAr ? "4. التسليم والتركيب" : "4. Delivery & Assembly"}
            </h3>
            <p className="text-xs lg:text-sm text-brand-muted leading-relaxed">
              {isAr
                ? "فك التغليف، إعادة تركيب الأثاث، وترتيب الأغراض في مكانها وإزالة المخلفات."
                : "Unpacking, furniture reassembly, room-by-room placement, and debris removal."}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-16">
        <div className="bg-navy rounded-[28px] p-8 lg:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative z-10 max-w-xl">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3">
              {isAr
                ? "جاهز لبدء خطة نقلك معنا؟"
                : "Ready to Schedule Your Move Workflow?"}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              {isAr
                ? "اطلب معاينة مجانية وسيقوم فريقنا بالتنسيق المباشر لترتيب خطة النقل خطوة بخطوة."
                : "Book a free pre-move survey and let our logistics specialists coordinate your journey."}
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
