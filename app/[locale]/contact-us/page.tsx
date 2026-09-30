import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Clock,
  PhoneCall,
  Globe2,
  ShieldCheck,
  Award,
  ArrowLeft,
  ArrowRight,
  MessageSquare,
  Building2,
} from "lucide-react";
import { QuoteForm } from "@/app/modules/HeroSection/QuoteForm";

const BRANCH_HUBS = [
  {
    cityEn: "Jeddah (Head Office)",
    cityAr: "جدة (المكتب الرئيسي)",
    addressEn: "KHALID BIN ALWALEED STREET, Door Number 213B, Jeddah 22234",
    addressAr: "شارع خالد بن الوليد، مبنى رقم 213B، جدة 22234",
    telephones: ["+966596929917", "+966590967593"],
    emails: ["info@cargotrack.co", "wafa.kamil@cargotrack.co"],
  },
  {
    cityEn: "Riyadh Branch & Operations",
    cityAr: "فرع وعمليات الرياض",
    addressEn: "Logistics Hub & Relocation Services, Riyadh, Saudi Arabia",
    addressAr:
      "مركز العمليات اللوجستية ونقل الأثاث، الرياض، المملكة العربية السعودية",
    telephones: ["+966583180756", "+966580593809", "+966591545934"],
    emails: [
      "rashif@cargotrack.co",
      "operation@cargotrack.co",
      "Pricing@cargotrack.co",
    ],
  },
  {
    cityEn: "Dammam / Eastern Province",
    cityAr: "الدمام / المنطقة الشرقية",
    addressEn: "Cargo Terminal & Freight Clearing, Dammam, Saudi Arabia",
    addressAr: "محطة الشحن والتخليص الجمركي، الدمام، المملكة العربية السعودية",
    telephones: ["+966599380132", "+966597480313"],
    emails: ["Shiba@cargotrack.co", "Dmm@cargotrack.co"],
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    title: isAr
      ? "اتصل بنا | كارغو تراك لنقل العفش والشحن الدولي بالرياض وجدة"
      : "Contact Us | Cargo Track Relocations Riyadh & Jeddah",
    description: isAr
      ? "تواصل مع فروع كارغو تراك في الرياض، جدة، والدمام. احصل على أرقام الهاتف، البريد الإلكتروني، وساعات العمل لخدمات نقل الأثاث والشحن الدولي."
      : "Get in touch with Cargo Track offices in Riyadh, Jeddah, and Dammam. Direct telephone lines, emails, support hours, and free relocation surveys.",
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";

  // Structured Data Schema for Search Engines
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "MovingCompany",
      name: "CargoTrack Relocations",
      url: "https://cargotrack.co",
      logo: "https://cargotrack.co/assets/cargo-track-logo-white.svg",
      telephone: "+966553659763",
      email: "enquiry@cargotrack.co",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+966583180756",
          contactType: "customer service",
          areaServed: "SA",
          availableLanguage: ["Arabic", "English"],
        },
      ],
    },
  };

  return (
    <main className="w-full min-h-screen bg-brand-bg relative overflow-hidden pt-24 lg:pt-28 pb-20">
      {/* Local Schema for Contact Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* Background Decorative Rings */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 end-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[110px] -translate-y-1/3 translate-x-1/4 rtl:-translate-x-1/4" />
        <div className="absolute bottom-10 start-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[90px] translate-y-1/4 -translate-x-1/4 rtl:translate-x-1/4" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Hero Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span
              className="w-8 h-[2px] bg-primary/40 rounded-full"
              aria-hidden="true"
            />
            <span className="text-[12px] font-bold text-primary uppercase tracking-[0.15em]">
              {isAr
                ? "خدمة العملاء والدعم اللوجستي"
                : "Customer Support & Dispatch"}
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.15] text-navy mb-4">
            {isAr
              ? "نحن هنا لمساعدتك في كل خطوة من رحلتك"
              : "Let's Connect — We Move Your World with Precision"}
          </h1>

          <p className="text-brand-muted text-[16px] lg:text-[18px] leading-relaxed">
            {isAr
              ? "سواء كنت بحاجة لمعاينة مجانية بالموقع، أو متابعة شحنة جارية، أو استشارة جمركية خاصة، فريقنا في الرياض وجدة والدمام متاح لخدمتك."
              : "Reach out to our dedicated team across Saudi Arabia for move surveys, live container tracking, customs advice, or general freight inquiries."}
          </p>
        </div>

        {/* Fast Action Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: Direct Hotline */}
          <div className="bg-white rounded-2xl p-6 border border-brand-text/[0.06] shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <PhoneCall className="w-6 h-6 rtl:scale-x-[-1]" />
            </div>
            <div>
              <h2 className="text-[16px] font-bold text-navy">
                {isAr ? "الخط المباشر الموحد" : "Main Customer Care"}
              </h2>
              <p className="text-xs text-brand-muted mt-0.5 mb-2">
                {isAr
                  ? "اتصال فوري أو عبر الواتساب"
                  : "Call directly or WhatsApp"}
              </p>
              <a
                href="tel:+966553659763"
                dir="ltr"
                className="text-sm font-bold text-primary hover:text-navy transition-colors inline-block"
              >
                +966 55 365 9763
              </a>
            </div>
          </div>

          {/* Card 2: Central Email */}
          <div className="bg-white rounded-2xl p-6 border border-brand-text/[0.06] shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-[16px] font-bold text-navy">
                {isAr ? "البريد الإلكتروني للطلبات" : "Email & Quotations"}
              </h2>
              <p className="text-xs text-brand-muted mt-0.5 mb-2">
                {isAr
                  ? "الرد خلال 24 ساعة كحد أقصى"
                  : "Response within 24 business hours"}
              </p>
              <a
                href="mailto:enquiry@cargotrack.co"
                className="text-sm font-bold text-primary hover:text-navy transition-colors break-all"
              >
                enquiry@cargotrack.co
              </a>
            </div>
          </div>

          {/* Card 3: Working Hours */}
          <div className="bg-white rounded-2xl p-6 border border-brand-text/[0.06] shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-[16px] font-bold text-navy">
                {isAr ? "ساعات الدوام الرسمية" : "Operating Hours"}
              </h2>
              <p className="text-xs text-brand-muted mt-0.5">
                {isAr ? "السبت إلى الخميس:" : "Saturday – Thursday:"}
              </p>
              <span className="text-sm font-bold text-navy block mt-0.5">
                {isAr ? "8:00 صباحاً – 6:00 مساءً" : "8:00 AM – 6:00 PM"}
              </span>
            </div>
          </div>
        </div>

        {/* Two-Column Layout: Branch Details on Left, Interactive Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Branch Locations & Accreditations */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5 text-primary" />
                <h2 className="font-heading font-extrabold text-2xl text-navy">
                  {isAr
                    ? "فروعنا ومكاتب العمليات"
                    : "Our Regional Hubs in Saudi Arabia"}
                </h2>
              </div>
              <p className="text-sm text-brand-muted mb-6">
                {isAr
                  ? "فرقنا اللوجستية منتشرة في المدن الرئيسية بالمملكة لتأمين سرعة التغليف والتوصيل والتخليص."
                  : "On-the-ground relocation and freight clearance personnel ready across major Saudi cities."}
              </p>

              <div className="space-y-6">
                {BRANCH_HUBS.map((branch, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-brand-text/[0.06] shadow-sm"
                  >
                    <div className="flex items-start gap-3.5 mb-4">
                      <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-heading font-bold text-lg text-navy">
                          {isAr ? branch.cityAr : branch.cityEn}
                        </h3>
                        <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                          {isAr ? branch.addressAr : branch.addressEn}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      {/* Branch Telephones */}
                      <div>
                        <span className="font-semibold text-slate-500 block mb-1.5">
                          {isAr ? "أرقام التواصل:" : "Phone Lines:"}
                        </span>
                        <div className="flex flex-col gap-1" dir="ltr">
                          {branch.telephones.map((tel, tIdx) => (
                            <a
                              key={tIdx}
                              href={`tel:${tel}`}
                              className="text-primary hover:text-navy font-semibold transition-colors w-fit"
                            >
                              {tel}
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Branch Emails */}
                      <div>
                        <span className="font-semibold text-slate-500 block mb-1.5">
                          {isAr ? "البريد المباشر:" : "Direct Emails:"}
                        </span>
                        <div className="flex flex-col gap-1" dir="ltr">
                          {branch.emails.map((mail, mIdx) => (
                            <a
                              key={mIdx}
                              href={`mailto:${mail}`}
                              className="text-primary hover:text-navy transition-colors break-all w-fit"
                            >
                              {mail}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications and Global Coverage Pill */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <Globe2 className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold text-sm">
                    {isAr
                      ? "شحن وتوصيل لأكثر من 120 دولة"
                      : "Worldwide Door-to-Door Delivery"}
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {isAr
                      ? "شبكة شركاء موثوقة في جميع الموانئ والمطارات الرئيسية"
                      : "Accredited partner agents across Europe, Asia, Americas & GCC"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-xs font-semibold">
                  <Award size={14} className="text-emerald-400" />
                  <span>FIDI</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-xs font-semibold">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  <span>IAM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: QuoteForm Sticky Container */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end sticky top-28">
            <div className="w-full max-w-[460px]">
              <div className="mb-3 flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                <MessageSquare className="w-4 h-4" />
                <span>
                  {isAr ? "إرسال استفسار فوري" : "Quick Message & Quote"}
                </span>
              </div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
