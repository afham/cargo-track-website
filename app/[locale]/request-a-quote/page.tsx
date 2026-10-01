import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Clock,
  Globe2,
  FileCheck,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { QuoteForm } from "@/app/modules/HeroSection/QuoteForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    title: isAr
      ? "طلب عرض سعر مجاني لنقل الأثاث والشحن | كارغو تراك"
      : "Request a Free Moving & Relocation Quote | Cargo Track",
    description: isAr
      ? "احصل على تسعيرة دقيقة وفورية لخدمات نقل العفش والشحن الدولي والتخليص الجمركي في الرياض وجميع أنحاء العالم."
      : "Get an accurate, no-obligation moving quote for international relocations, domestic moving, and freight forwarding from Riyadh to worldwide destinations.",
  };
}

export default async function RequestQuotePage({
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
        <div className="absolute top-0 end-0 w-[650px] h-[650px] bg-primary/[0.04] rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 rtl:-translate-x-1/4" />
        <div className="absolute bottom-10 start-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[90px] translate-y-1/4 -translate-x-1/4 rtl:translate-x-1/4" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTEsIDU4LCAxMDIsIDAuMDMpIi8+PC9zdmc+')] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-40 mix-blend-multiply" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Two-Column Grid: Value Prop & Trust on Left, Quote Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context, Trust Signals, and Next Steps */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-8 h-[2px] bg-primary/40 rounded-full"
                aria-hidden="true"
              />
              <span className="text-[12px] font-bold text-primary uppercase tracking-[0.15em]">
                {isAr ? "تسعيرة فورية ومجانية" : "Free & Instant Estimate"}
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.15] text-navy mb-5">
              {isAr
                ? "احصل على تسعيرة نقل مخصصة لاحتياجاتك"
                : "Plan Your Move with a Tailored, Accurate Quote"}
            </h1>

            <p className="text-brand-muted text-[16px] lg:text-[18px] leading-relaxed mb-8">
              {isAr
                ? "سواء كنت تخطط لنقل شقة أو فيلا، أو ترحيل أثاث دولي، أو شحن بضائع تجارية، يقدم لك فريق كارغو تراك خطة نقل مرنة وتكلفة شفافة بدون رسوم خفية."
                : "Whether relocating your family across continents or moving offices locally within Saudi Arabia, our logistics specialists provide competitive, transparent estimates with zero obligation."}
            </p>

            {/* Core Trust Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-brand-text/[0.06] shadow-sm">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-[15px] font-bold text-navy">
                    {isAr ? "استجابة سريعة" : "Rapid Turnaround"}
                  </h2>
                  <p className="text-[13px] text-brand-muted mt-0.5">
                    {isAr
                      ? "تسليم عروض الأسعار خلال 24 ساعة كحد أقصى"
                      : "Itemized estimates delivered within 24 business hours."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-brand-text/[0.06] shadow-sm">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-[15px] font-bold text-navy">
                    {isAr
                      ? "تأمين شامل للبضائع"
                      : "Comprehensive Transit Cover"}
                  </h2>
                  <p className="text-[13px] text-brand-muted mt-0.5">
                    {isAr
                      ? "حماية كاملة ضد أي ضرر أثناء النقل والشحن"
                      : "Optional full-value protection policies available."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-brand-text/[0.06] shadow-sm">
                <Globe2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-[15px] font-bold text-navy">
                    {isAr ? "شبكة عالمية ومحلية" : "Door-to-Door Worldwide"}
                  </h2>
                  <p className="text-[13px] text-brand-muted mt-0.5">
                    {isAr
                      ? "تغطية كاملة تشمل الموانئ والتخليص الجمركي"
                      : "Seamless customs clearance and delivery in 120+ nations."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-brand-text/[0.06] shadow-sm">
                <FileCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-[15px] font-bold text-navy">
                    {isAr ? "معاينة مجانية بالموقع" : "Free Pre-Move Survey"}
                  </h2>
                  <p className="text-[13px] text-brand-muted mt-0.5">
                    {isAr
                      ? "معاينة افتراضية أو ميدانية بدون أي التزام"
                      : "Virtual or in-person volume assessment in Riyadh."}
                  </p>
                </div>
              </div>
            </div>

            {/* How It Works Steps */}
            <div className="bg-slate-50/80 border border-brand-text/[0.06] rounded-2xl p-6 mb-8">
              <h2 className="font-heading font-bold text-[17px] text-navy mb-4">
                {isAr ? "ماذا يحدث بعد إرسال الطلب؟" : "What happens next?"}
              </h2>
              <ol className="space-y-3.5">
                <li className="flex items-start gap-3 text-sm text-brand-muted">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0 text-xs">
                    1
                  </span>
                  <span>
                    <strong className="text-navy font-semibold">
                      {isAr
                        ? "مراجعة تفاصيل الشحنة: "
                        : "Volume & Scope Review: "}
                    </strong>
                    {isAr
                      ? "يقوم أخصائي النقل بدراسة مسار النقل والمتطلبات الخاصة."
                      : "A dedicated relocation coordinator assesses your origin and destinations."}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-brand-muted">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0 text-xs">
                    2
                  </span>
                  <span>
                    <strong className="text-navy font-semibold">
                      {isAr
                        ? "المعاينة وحساب التكلفة: "
                        : "Survey & Estimate: "}
                    </strong>
                    {isAr
                      ? "نحدد موعد معاينة افتراضية أو نرسل لك تسعيرة أولية مفصلة."
                      : "We provide an itemized quote or schedule a quick virtual survey."}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-brand-muted">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0 text-xs">
                    3
                  </span>
                  <span>
                    <strong className="text-navy font-semibold">
                      {isAr ? "جدولة التنفيذ: " : "Booking & Execution: "}
                    </strong>
                    {isAr
                      ? "اختيار موعد التغليف والاستلام بما يناسب جدولك الزمني."
                      : "Confirm your packing date, customs documentation, and delivery plan."}
                  </span>
                </li>
              </ol>
            </div>
          </div>

          {/* Right Column: QuoteForm Card Container */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end sticky top-28">
            <div className="w-fit bg-navy max-w-[460px] rounded-[28px]">
              {/* Form Component */}
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
