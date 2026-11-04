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
import TestimonialSection from "@/app/modules/TestimonialsSection";
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
    <main className="w-full min-h-screen bg-brand-bg relative overflow-hidden pt-12 lg:pt-14 pb-10">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 end-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[110px] -translate-y-1/3 translate-x-1/4 rtl:-translate-x-1/4" />
        <div className="absolute bottom-10 start-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[90px] translate-y-1/4 -translate-x-1/4 rtl:translate-x-1/4" />
      </div>

      {/* Interactive Cargo Journey Section */}
      <TestimonialSection />

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
