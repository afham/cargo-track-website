import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    title: isAr
      ? "سياسة الخصوصية وحماية البيانات | كارجو تراك"
      : "Privacy Policy | Cargo Track Relocations",
    description: isAr
      ? "سياسة الخصوصية وحماية البيانات الشخصية وفقاً للأنظمة واللوائح المعتمدة في المملكة العربية السعودية (نظام حماية البيانات الشخصية PDPL)."
      : "Privacy Policy outlining how Cargo Track Relocations collects, processes, and protects personal data in compliance with Saudi PDPL.",
    alternates: {
      canonical: `https://www.cargotrack.co/${locale}/privacy-policy`,
      languages: {
        en: "https://www.cargotrack.co/en/privacy-policy",
        ar: "https://www.cargotrack.co/ar/privacy-policy",
      },
    },
  };
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      className="min-h-screen bg-slate-50 pt-28 sm:pt-32 pb-20 text-slate-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm">
          {/* Header */}
          <div className="border-b border-slate-100 pb-6">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {isAr ? "سياسة الخصوصية وحماية البيانات" : "Privacy Policy"}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
              {isAr
                ? "تاريخ آخر تحديث: ٣ أكتوبر ٢٠٢٦"
                : "Last updated: October 3, 2026"}
            </p>
          </div>

          {/* Content Body */}
          <div className="mt-8 space-y-8 text-sm sm:text-base leading-relaxed text-slate-700">
            {/* Introduction */}
            <section className="bg-slate-50/80 p-4 rounded-xl border border-slate-100 text-slate-600">
              <p>
                {isAr
                  ? "تلتزم شركة كارجو تراك لنقل العفش والشحن بحماية خصوصيتك وبياناتك الشخصية. توضح هذه السياسة الإجراءات المتبعة في جمع واستخدام وحماية البيانات الشخصية وفقاً لأحكام نظام حماية البيانات الشخصية (PDPL) المعمول به في المملكة العربية السعودية ومعايير الإعلان المعتمدة من Google."
                  : "Cargo Track Relocations is committed to protecting your privacy and personal data. This policy outlines our collection, processing, and protection practices in compliance with the Saudi Personal Data Protection Law (PDPL) and international standards."}
              </p>
            </section>

            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="text-primary font-mono text-sm sm:text-base">
                  01.
                </span>
                {isAr ? "البيانات التي نقوم بجمعها" : "Information We Collect"}
              </h2>

              <p className="font-semibold text-slate-800">
                {isAr
                  ? "أ. البيانات الشخصية المباشرة:"
                  : "A. Direct Personal Information:"}
              </p>
              <p>
                {isAr
                  ? "عند طلب عرض سعر لنقل الأثاث أو حجز معاينة أو التواصل عبر الموقع أو الواتساب، قد نقوم بجمع البيانات التالية:"
                  : "When requesting a moving quote, scheduling a physical/virtual survey, or submitting inquiries:"}
              </p>
              <ul className="list-disc ps-5 space-y-1.5 text-slate-600">
                <li>{isAr ? "الاسم الأول واسم العائلة" : "Full name"}</li>
                <li>
                  {isAr
                    ? "رقم الهاتف والتواصل عبر الواتساب"
                    : "Mobile phone & WhatsApp contact number"}
                </li>
                <li>{isAr ? "عنوان البريد الإلكتروني" : "Email address"}</li>
                <li>
                  {isAr
                    ? "موقع الانطلاق وموقع الوصول (المدينة، الحي، تفاصيل العقار)"
                    : "Origin and destination addresses (City, neighborhood, building type)"}
                </li>
                <li>
                  {isAr
                    ? "تفاصيل الشحنة أو المنقولات وحجم الأثاث التقريبي"
                    : "Relocation requirements, estimated inventory volume, and scheduling preferences"}
                </li>
              </ul>

              <p className="font-semibold text-slate-800 pt-2">
                {isAr
                  ? "ب. بيانات الاستخدام وملفات تعريف الارتباط (Cookies):"
                  : "B. Usage Data & Cookies:"}
              </p>
              <p>
                {isAr
                  ? "نقوم بجمع بيانات تحليلية أوتوماتيكياً تشمل عنوان بروتوكول الإنترنت (IP)، نوع المتصفح، نظام التشغيل، والصفحات التي تمت زيارتها عبر خدمات مثل Google Analytics 4 للمساعدة في تحسين تجربة التصفح وسرعة الموقع وقياس كفاءة الحملات الإعلانية."
                  : "We automatically collect diagnostic data such as IP address, browser type, device information, and pages visited using Google Analytics 4 and core cookies to monitor site performance, responsiveness, and ad campaign attribution."}
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="text-primary font-mono text-sm sm:text-base">
                  02.
                </span>
                {isAr
                  ? "أغراض معالجة البيانات واستخدامها"
                  : "How We Use Your Data"}
              </h2>
              <ul className="list-disc ps-5 space-y-2 text-slate-600">
                <li>
                  {isAr
                    ? "إعداد عروض الأسعار الدقيقة وجدولة مواعيد المعاينة المجانية."
                    : "Preparing accurate moving estimates and scheduling on-site or virtual surveys."}
                </li>
                <li>
                  {isAr
                    ? "تنسيق وتنفيذ أعمال الفك والتركيب والتغليف والشحن والتخليص الجمركي والتخزين."
                    : "Coordinating dismantle, export packing, transit, customs clearance, and delivery operations."}
                </li>
                <li>
                  {isAr
                    ? "التواصل المباشر عبر الهاتف أو الواتساب لمتابعة خط سير الشحنة وخدمات الدعم."
                    : "Direct customer communication via phone, WhatsApp, or email regarding move status and support."}
                </li>
                <li>
                  {isAr
                    ? "الامتثال للمتطلبات النظامية والتنظيمية لهيئة النقل والجمارك السعودية وهيئة الزكاة والضريبة والجمارك (ZATCA)."
                    : "Fulfilling regulatory, transport permit, and tax invoice documentation under Saudi authorities."}
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="text-primary font-mono text-sm sm:text-base">
                  03.
                </span>
                {isAr
                  ? "مشاركة البيانات والأطراف الثالثة"
                  : "Data Sharing & Third Parties"}
              </h2>
              <p>
                {isAr
                  ? "نحن لا نقوم ببيع أو تأجير بياناتك الشخصية لأي جهة تجارية إطلاقاً. لا تتم مشاركة البيانات إلا في الحالات التشغيلية المحدودة التالية:"
                  : "We do not sell, trade, or rent personal information to external commercial brokers. Data is shared strictly under operational necessity:"}
              </p>
              <ul className="list-disc ps-5 space-y-1.5 text-slate-600">
                <li>
                  {isAr
                    ? "فرق العمل الميدانية والمخلصين الجمركيين المعتمدين لتنفيذ عقد النقل والشحن فقط."
                    : "Assigned moving crew supervisors, freight shipping lines, and licensed customs clearance brokers solely to fulfill logistics agreements."}
                </li>
                <li>
                  {isAr
                    ? "منصات القياس والتحليل (مثل Google Analytics و Google Ads) لمتابعة فاعلية الإعلانات."
                    : "Analytics platforms (Google Analytics and Google Ads) for traffic measurement and conversion verification."}
                </li>
                <li>
                  {isAr
                    ? "الجهات الحكومية والقضائية في المملكة عندما يكون ذلك مطلوباً بموجب الأنظمة السارية."
                    : "Competent regulatory and legal authorities within the Kingdom of Saudi Arabia when mandated by law."}
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="text-primary font-mono text-sm sm:text-base">
                  04.
                </span>
                {isAr
                  ? "حقوقك بموجب نظام حماية البيانات الشخصية (PDPL)"
                  : "Your Rights Under Saudi PDPL"}
              </h2>
              <p>
                {isAr
                  ? "بموجب نظام حماية البيانات الشخصية في المملكة العربية السعودية، يتمتع العميل بالحقوق التالية:"
                  : "Under the Saudi Personal Data Protection Law (PDPL), you have the right to:"}
              </p>
              <ul className="list-disc ps-5 space-y-1.5 text-slate-600">
                <li>
                  {isAr
                    ? "الحق في العلم ومعرفة المسوغ النظامي لجمع بياناتك."
                    : "Be informed about the legal justification and method of data collection."}
                </li>
                <li>
                  {isAr
                    ? "الحق في طلب الوصول إلى بياناتك الشخصية والحصول على نسخة منها."
                    : "Request access to and obtain an electronic copy of your personal data."}
                </li>
                <li>
                  {isAr
                    ? "الحق في طلب تصحيح أو تحديث أي بيانات غير دقيقة أو ناقصة."
                    : "Request rectification or updating of inaccurate or outdated information."}
                </li>
                <li>
                  {isAr
                    ? "الحق في طلب إتلاف البيانات عند انتهاء الغرض من جمعها ما لم تنص الأنظمة على الاحتفاظ بها."
                    : "Request destruction of personal data when no longer needed for commercial fulfillment, subject to statutory retention laws."}
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="text-primary font-mono text-sm sm:text-base">
                  05.
                </span>
                {isAr
                  ? "أمان البيانات والاحتفاظ بها"
                  : "Data Security & Retention"}
              </h2>
              <p>
                {isAr
                  ? "نطبق بروتوكولات حماية تقنية وتنظيمية متقدمة تشمل التشفير (SSL/TLS)، وتقييد صلاحيات الوصول لضمان حماية بياناتك من الوصول غير المصرح به. كما نحتفظ بالبيانات فقط للمدة اللازمة لتحقيق الأغراض التشغيلية أو تلبية الالتزامات الضريبية والقانونية في المملكة."
                  : "We apply industry-standard technical measures including SSL/TLS encryption and strict administrative access controls to safeguard your data. Records are retained strictly as needed to complete services and satisfy legal or tax regulations."}
              </p>
            </section>

            {/* Section 6: Contact */}
            <section className="space-y-3 pt-6 border-t border-slate-200">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                {isAr
                  ? "مسؤول حماية البيانات والتواصل"
                  : "Contact & Privacy Officer"}
              </h2>
              <p className="text-slate-600">
                {isAr
                  ? "لممارسة أي من حقوقك أو طرح استفسارات تتعلق بسياسة الخصوصية، يرجى التواصل معنا عبر:"
                  : "To exercise your data protection rights or query our policy, reach out to our team:"}
              </p>
              <div className="bg-slate-50 p-4 rounded-xl space-y-1 text-sm text-slate-700">
                <p>
                  <strong>{isAr ? "البريد الإلكتروني:" : "Email:"}</strong>{" "}
                  <a
                    href="mailto:enquiry@cargotrack.co"
                    className="text-primary hover:underline"
                  >
                    enquiry@cargotrack.co
                  </a>
                </p>
                <p>
                  <strong>
                    {isAr ? "الهاتف / واتساب:" : "Phone / WhatsApp:"}
                  </strong>{" "}
                  <a
                    href="tel:+966553659763"
                    dir="ltr"
                    className="text-primary hover:underline inline-block"
                  >
                    +966 55 365 9763
                  </a>
                </p>
                <p>
                  <strong>{isAr ? "العنوان:" : "Address:"}</strong>{" "}
                  {isAr
                    ? "الرياض، المملكة العربية السعودية"
                    : "Riyadh, Kingdom of Saudi Arabia"}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
