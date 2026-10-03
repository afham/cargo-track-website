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
      ? "الشروط والأحكام | كارجو تراك لنقل العفش والشحن"
      : "Terms and Conditions | Cargo Track Relocations",
    description: isAr
      ? "الشروط والأحكام التي تحكم خدمات ونقل العفش والشحن المقدمة من كارجو تراك في المملكة العربية السعودية."
      : "Terms and Conditions governing the relocation, cargo, and freight services of Cargo Track Relocations in Saudi Arabia.",
    alternates: {
      canonical: `https://www.cargotrack.co/${locale}/terms`,
      languages: {
        en: "https://www.cargotrack.co/en/terms",
        ar: "https://www.cargotrack.co/ar/terms",
      },
    },
  };
}

export default async function TermsPage({
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
              {isAr ? "الشروط والأحكام" : "Terms and Conditions"}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
              {isAr
                ? "تاريخ آخر تحديث: ٣ أكتوبر ٢٠٢٦"
                : "Last updated: October 3, 2026"}
            </p>
          </div>

          {/* Content Body */}
          <div className="mt-8 space-y-8 text-sm sm:text-base leading-relaxed text-slate-700">
            {/* Intro */}
            <section className="bg-slate-50/80 p-4 rounded-xl border border-slate-100 text-slate-600">
              <p>
                {isAr
                  ? "يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام موقعنا الإلكتروني أو طلب أي من خدمات نقل الأثاث والشحن والتخزين والتخليص الجمركي."
                  : "Please read these Terms and Conditions carefully before using our website or requesting any relocation, freight, storage, or customs clearance services."}
              </p>
            </section>

            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="text-primary font-mono text-sm sm:text-base">
                  01.
                </span>
                {isAr ? "التعريفات والتفسير" : "Definitions & Interpretation"}
              </h2>
              <div className="space-y-2 text-slate-600 ps-4 border-s-2 border-slate-100">
                <p>
                  <strong>{isAr ? "الشركة:" : "The Company:"}</strong>{" "}
                  {isAr
                    ? 'يشار إليها بـ ("كارجو تراك" أو "نحن" أو "لنا")، ومقرها الإداري والتشغيلي في الرياض، المملكة العربية السعودية.'
                    : 'Refers to Cargo Track Relocations ("the Company", "We", "Us", or "Our"), operating out of Riyadh, Kingdom of Saudi Arabia.'}
                </p>
                <p>
                  <strong>{isAr ? "الدولة:" : "Country:"}</strong>{" "}
                  {isAr
                    ? "المملكة العربية السعودية."
                    : "Kingdom of Saudi Arabia."}
                </p>
                <p>
                  <strong>
                    {isAr ? "الخدمة / الموقع:" : "The Service / Website:"}
                  </strong>{" "}
                  {isAr
                    ? "الموقع الإلكتروني الرسمي لكارجو تراك المتاح عبر الرابط: "
                    : "The official Cargo Track Relocations website accessible at: "}
                  <Link
                    href={`/${locale}`}
                    className="text-primary hover:underline font-medium"
                  >
                    https://www.cargotrack.co
                  </Link>
                  {isAr
                    ? " وكافة قنوات التواصل الرقمية والاستفسارات التابعة له."
                    : " and associated digital communication and quote inquiry channels."}
                </p>
                <p>
                  <strong>
                    {isAr ? "العميل / المستخدم:" : "You / Customer:"}
                  </strong>{" "}
                  {isAr
                    ? "أي فرد أو شركة أو كيان قانوني يقوم بزيارة الموقع، أو حجز معاينة، أو التعاقد على خدمات النقل والشحن معنا."
                    : "The individual accessing the Service, or the commercial corporate entity on behalf of which such individual is accessing services."}
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="text-primary font-mono text-sm sm:text-base">
                  02.
                </span>
                {isAr ? "الموافقة والأهلية" : "Acknowledgment & Eligibility"}
              </h2>
              <p>
                {isAr
                  ? "يمثل دخولك للموقع واستخدامك لأي من قنوات طلب الأسعار موافقة تامة على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي بند منها، فيرجى التوقف عن استخدام الخدمة."
                  : "Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part, you may not access the Service."}
              </p>
              <p>
                {isAr
                  ? "يجب ألا يقل عمر المستخدم عن 18 عاماً لتقديم طلبات عروض الأسعار والتعاقد الرسمي على الخدمات."
                  : "You represent that you are at least 18 years of age. The Company does not permit individuals under 18 to submit commercial quote requests."}
              </p>
              <p>
                {isAr ? (
                  <>
                    يخضع استخدامك للموقع أيضاً لـ{" "}
                    <Link
                      href={`/${locale}/privacy-policy`}
                      className="text-primary font-semibold underline underline-offset-4"
                    >
                      سياسة الخصوصية
                    </Link>{" "}
                    الخاصة بنا المتوافقة مع نظام حماية البيانات الشخصية السعودي
                    (PDPL).
                  </>
                ) : (
                  <>
                    Your access to the Service is also subject to our{" "}
                    <Link
                      href={`/${locale}/privacy-policy`}
                      className="text-primary font-semibold underline underline-offset-4"
                    >
                      Privacy Policy
                    </Link>
                    , aligned with the Saudi Personal Data Protection Law
                    (PDPL).
                  </>
                )}
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="text-primary font-mono text-sm sm:text-base">
                  03.
                </span>
                {isAr
                  ? "عروض الأسعار والتعاقد"
                  : "Quotations, Estimates & Bookings"}
              </h2>
              <ul className="list-disc ps-5 space-y-2 text-slate-600">
                <li>
                  {isAr
                    ? "تعتبر كافة عروض الأسعار التقديرية الممنوحة عبر الموقع أو واتساب أو الهاتف عروضاً مبدئية غير ملزمة حتى يتم تأكيدها عبر المعاينة الميدانية أو الافتراضية واعتماد عقد نقل أو بوليصة شحن رسمية."
                    : "All pricing estimates requested via the Website, WhatsApp, or phone are non-binding operational estimates until verified by a physical/virtual survey and finalized in a formal service contract or bill of lading."}
                </li>
                <li>
                  {isAr
                    ? "تخضع الأسعار النهائية للحجم الفعلي للأثاث أو البضائع (CBM)، صعوبة الوصول للموقع، الطوابق والرافعات، مواد التغليف المتخصصة، رسوم التخليص الجمركي ورسوم الموانئ، بالإضافة إلى ضريبة القيمة المضافة (VAT) المقررة في المملكة."
                    : "Final rates depend on actual volumetric survey (CBM), origin/destination floor access, packing material specifications, port/customs clearance disbursements, and applicable Saudi Value Added Tax (VAT)."}
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
                  ? "حدود المسؤولية والتأمين"
                  : "Limitation of Liability & Cargo Coverage"}
              </h2>
              <p>
                {isAr
                  ? "تخضع مسؤولية نقل العفش والشحن البري والبحري والجوي لأحكام وثيقة الشحن الرسمية، وقوانين النقل والجمارك في المملكة، وبنود وثائق التأمين المعتمدة للشحنة عند الحجز."
                  : "Transit liability, cargo handling, and freight indemnity are strictly governed by the signed bill of lading, applicable Saudi Transport General Authority regulations, and goods-in-transit cargo insurance terms selected during booking."}
              </p>
              <p>
                {isAr
                  ? "إلى الحد الأقصى المسموح به بموجب الأنظمة السعودية، لا تتحمل الشركة أي مسؤولية عن أي أضرار غير مباشرة أو عارضة قد تنشأ عن استخدام هذا الموقع الإلكتروني أو تأخيرات ناتجة عن القوة القاهرة أو التفتيش الجمركي الإلزامي."
                  : "To the maximum extent permitted by applicable laws of Saudi Arabia, the Company shall not be liable for incidental, indirect, or consequential damages resulting from website downtime, port force majeure, or statutory customs inspection delays."}
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="text-primary font-mono text-sm sm:text-base">
                  05.
                </span>
                {isAr
                  ? "الروابط وخدمات الأطراف الثالثة"
                  : "Third-Party Links & Services"}
              </h2>
              <p>
                {isAr
                  ? "قد يحتوي الموقع على روابط إلى تطبيقات أو مواقع خارجية (مثل واتساب وتطبيقات الخرائط وبوابات الدفع). لا تملك الشركة أي سيطرة على ممارسات أو سياسات تلك المواقع وتخلي مسؤوليتها عن أي تعاملات خارجية."
                  : "Our Service may incorporate links or shortcuts to third-party services (such as WhatsApp, maps, and external payment portals). The Company assumes no responsibility for third-party practices, cookies, or external content."}
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="text-primary font-mono text-sm sm:text-base">
                  06.
                </span>
                {isAr
                  ? "القانون الواجب التطبيق وتسوية النزاعات"
                  : "Governing Law & Disputes"}
              </h2>
              <p>
                {isAr
                  ? "تخضع هذه الشروط والأحكام وتفسر وفقاً للأنظمة واللوائح المعمول بها في المملكة العربية السعودية. في حال حدوث أي نزاع، يتم السعي لحله ودياً أولاً، وفي حال تعذر ذلك، تختص المحاكم المختصة في مدينة الرياض حصرياً بالفصل فيه."
                  : "These Terms shall be governed and interpreted in accordance with the laws of the Kingdom of Saudi Arabia. Parties agree to attempt informal amicable resolution first; unresolved claims are subject to the exclusive jurisdiction of the competent courts in Riyadh."}
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="text-primary font-mono text-sm sm:text-base">
                  07.
                </span>
                {isAr ? "التعديلات على الشروط" : "Modifications to Terms"}
              </h2>
              <p>
                {isAr
                  ? "نحتفظ بالحق في تعديل هذه الشروط في أي وقت. ويتم نشر النسخة المحدثة مع تعديل تاريخ آخر تحديث على هذه الصفحة، ويعتبر استمرارك في استخدام الخدمة بعد التعديل قبولاً بالشروط الجديدة."
                  : "We reserve the right to amend these Terms at our discretion. Updated terms take effect immediately upon being posted with the refreshed date. Continued usage of the Service signifies acceptance."}
              </p>
            </section>

            {/* Section 8: Contact */}
            <section className="space-y-3 pt-6 border-t border-slate-200">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                {isAr ? "التواصل معنا" : "Contact Information"}
              </h2>
              <p className="text-slate-600">
                {isAr
                  ? "إذا كان لديك أي استفسار بخصوص هذه الشروط والأحكام، يرجى التواصل معنا عبر:"
                  : "If you have questions regarding these Terms and Conditions, reach our operations team:"}
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
