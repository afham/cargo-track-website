import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Globe2,
  Building2,
  Plane,
  Ship,
  Truck,
  CheckCircle2,
} from "lucide-react";
import GlobalNetworkSection from "@/app/modules/GlobalNetworkSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    title: isAr
      ? "شبكة فروعنا اللوجستية | الرياض، جدة، والدمام | كارغو تراك"
      : "Our Logistics & Branch Network | Riyadh, Jeddah & Dammam | Cargo Track",
    description: isAr
      ? "اكتشف شبكة مكاتب ومحطات كارغو تراك في المملكة العربية السعودية ومسارات الشحن الدولي التي تربط السعودية بأكثر من 120 دولة."
      : "Explore Cargo Track's nationwide Saudi branch network across Riyadh, Jeddah, and Dammam, connecting the Kingdom with global multimodal freight routes.",
  };
}

export default async function NetworkPage({
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
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span
              className="w-8 h-[2px] bg-primary/40 rounded-full"
              aria-hidden="true"
            />
            <span className="text-[12px] font-bold text-primary uppercase tracking-[0.15em]">
              {isAr ? "الانتشار والتغطية" : "Worldwide Reach"}
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.15] text-navy mb-4">
            {isAr
              ? "شبكة متكاملة تربط مدن المملكة بجميع قارات العالم"
              : "Connecting Saudi Arabia to Worldwide Destinations"}
          </h1>

          <p className="text-brand-muted text-[16px] lg:text-[18px] leading-relaxed">
            {isAr
              ? "من خلال مقراتنا اللوجستية في الرياض، جدة، والدمام، وشراكاتنا الدولية المعتمدة، نؤمن نقل أثاثك وشحناتك بأمان واحترافية وبدون أي تعقيد."
              : "Leveraging our regional operations across Riyadh, Jeddah, and Dammam, we provide complete air, sea, and land cargo corridors spanning over 120 countries."}
          </p>
        </div>
      </div>

      {/* Interactive Network Map & Branch Cards */}
      <GlobalNetworkSection />

      {/* Multimodal Transport Pillars */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-heading font-extrabold text-2xl lg:text-3xl text-navy mb-3">
            {isAr
              ? "وسائط النقل والشحن المتكاملة"
              : "Multimodal Logistics Infrastructure"}
          </h2>
          <p className="text-sm lg:text-base text-brand-muted">
            {isAr
              ? "مسارات منتظمة توفر لك المرونة التامة لاختيار طريقة النقل الأنسب لميزانيتك والجدول الزمني المحدد."
              : "Flexible transport options customized for domestic family moves, expat relocation, or heavy industrial freight."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-brand-text/[0.06] shadow-sm flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Ship className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-navy text-lg mb-2">
              {isAr ? "الشحن البحري الدولي" : "Ocean & Sea Freight"}
            </h3>
            <p className="text-xs lg:text-sm text-brand-muted leading-relaxed mb-4">
              {isAr
                ? "حاويات كاملة (FCL) وحاويات مجزأة (LCL) عبر ميناء جدة الإسلامي وميناء الملك عبد العزيز بالدمام."
                : "Full Container Load (FCL) & Less than Container Load (LCL) consolidation via Jeddah and Dammam ports."}
            </p>
            <div className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-primary">
              <CheckCircle2 size={14} />
              <span>
                {isAr
                  ? "حلول اقتصادية للكميات الكبيرة"
                  : "Cost-effective for high volumes"}
              </span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-brand-text/[0.06] shadow-sm flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Plane className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-navy text-lg mb-2">
              {isAr ? "الشحن الجوي السريع" : "Air Express Cargo"}
            </h3>
            <p className="text-xs lg:text-sm text-brand-muted leading-relaxed mb-4">
              {isAr
                ? "شحن سريع ومجدول للحقائب والأمتعة الشخصية والشحنات العاجلة عبر مطار الملك خالد ومطار الملك عبد العزيز."
                : "Fast-track transit via King Khalid International (Riyadh) and King Abdulaziz International (Jeddah) airports."}
            </p>
            <div className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-primary">
              <CheckCircle2 size={14} />
              <span>
                {isAr
                  ? "تسليم سريع خلال أيام معدودة"
                  : "Expedited door delivery"}
              </span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-brand-text/[0.06] shadow-sm flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-navy text-lg mb-2">
              {isAr ? "النقل البري والحدودي" : "Cross-Border Road Freight"}
            </h3>
            <p className="text-xs lg:text-sm text-brand-muted leading-relaxed mb-4">
              {isAr
                ? "أسطول شاحنات مجهزة ومغلقة يربط جميع مدن المملكة ودول الخليج المجاورة (البحرين، الإمارات، الكويت)."
                : "Weatherproof container trucks serving all Saudi cities with seamless border customs to UAE, Bahrain, and Kuwait."}
            </p>
            <div className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-primary">
              <CheckCircle2 size={14} />
              <span>
                {isAr
                  ? "خدمة من الباب إلى الباب"
                  : "Direct Door-to-Door Service"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-16">
        <div className="bg-navy rounded-[28px] p-8 lg:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative z-10 max-w-xl">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3">
              {isAr
                ? "هل تخطط لنقل شحنتك عبر إحدى وجهاتنا؟"
                : "Looking to Book a Route in Our Network?"}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              {isAr
                ? "تواصل مع مكتب الفرع الأقرب إليك أو اطلب تسعيرة شحن فورية ومجانية."
                : "Connect with our dispatch coordinators in Riyadh, Jeddah, or Dammam for custom freight schedules."}
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
