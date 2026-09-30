import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Box,
  Headphones,
  Truck,
} from "lucide-react";
import { ServicesSection } from "@/app/modules/ServicesSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    title: isAr
      ? "خدمات نقل الأثاث والشحن والتخليص الجمركي بالرياض | كارغو تراك"
      : "Packing, Moving & Global Freight Services in Riyadh | Cargo Track",
    description: isAr
      ? "خدمات متكاملة لنقل العفش، الشحن الدولي، التغليف المخصص، التخزين الآمن، والتخليص الجمركي في الرياض وجميع أنحاء المملكة."
      : "Explore complete moving & cargo solutions: international relocations, residential packing, freight forwarding, warehousing, and Saudi customs clearance.",
  };
}

export default async function ServicesPage({
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
        <div className="absolute top-0 end-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[100px] -translate-y-1/3 translate-x-1/4 rtl:-translate-x-1/4" />
        <div className="absolute bottom-10 start-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[90px] translate-y-1/4 -translate-x-1/4 rtl:translate-x-1/4" />
      </div>

      {/* Existing Client Interactive Component */}
      <ServicesSection />

      {/* SEO Value Blocks: Why Choose Our Services */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-heading font-extrabold text-2xl lg:text-3xl text-navy mb-3">
            {isAr
              ? "معايير الجودة في كل خطوة"
              : "Our Service Quality Standards"}
          </h2>
          <p className="text-sm lg:text-base text-brand-muted">
            {isAr
              ? "نعتمد بروتوكولات صارمة تضمن وصول شحناتك بأمان وفي الموعد المحدد."
              : "Strict handling protocols tailored for international expats, local families, and corporate enterprises."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-brand-text/[0.06] shadow-sm flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Box className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-navy text-lg mb-2">
              {isAr ? "تغليف بمواصفات عالمية" : "Export-Grade Packing"}
            </h3>
            <p className="text-xs lg:text-sm text-brand-muted leading-relaxed">
              {isAr
                ? "صناديق خشبية مخصصة، ورق تغليف فقاعي متعدد الطبقات، وعوازل حماية للقطع الثمينة والزجاجية."
                : "Reinforced wooden crates, heavy-duty cartons, and multi-layer shock absorbers for fragile goods."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-brand-text/[0.06] shadow-sm flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-navy text-lg mb-2">
              {isAr ? "أسطول نقل حديث ومغطى" : "Enclosed Modern Fleet"}
            </h3>
            <p className="text-xs lg:text-sm text-brand-muted leading-relaxed">
              {isAr
                ? "شاحنات مجهزة ومغلقة لحماية الأثاث من حرارة وغبار الطريق في جميع مناطق المملكة."
                : "Weatherproof, air-ride suspension trucks protecting furniture against Riyadh's extreme temperatures and dust."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-brand-text/[0.06] shadow-sm flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-navy text-lg mb-2">
              {isAr ? "تخليص جمركي مباشر" : "Fast Customs Clearance"}
            </h3>
            <p className="text-xs lg:text-sm text-brand-muted leading-relaxed">
              {isAr
                ? "إجراءات جمركية سريعة في موانئ جدة والدمام ومطار الملك خالد بالرياض دون تأخير."
                : "Direct clearance protocols via King Khalid Airport, Jeddah Islamic Port, and King Abdulaziz Port in Dammam."}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-brand-text/[0.06] shadow-sm flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-navy text-lg mb-2">
              {isAr ? "منسق نقل مخصص" : "Single Point of Contact"}
            </h3>
            <p className="text-xs lg:text-sm text-brand-muted leading-relaxed">
              {isAr
                ? "متابعة مستمرة وتحديثات حية لموقع شحنتك من يوم الاستلام حتى التسليم النهائي."
                : "A dedicated move coordinator providing live tracking and constant updates throughout transit."}
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
                ? "هل تحتاج إلى استشارة أو خدمة مخصصة؟"
                : "Need a Custom Relocation or Freight Package?"}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              {isAr
                ? "احصل على تسعيرة دقيقة ومفصلة بدون أي رسوم خفية مع فريق كارغو تراك."
                : "Request a detailed estimate and free volume assessment tailored to your schedule."}
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link
              href={`/${locale}/request-a-quote`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold text-sm lg:text-base shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5"
            >
              <span>{isAr ? "اطلب عرض سعر الآن" : "Request a Quote"}</span>
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
