import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blogs";
import { Calendar, Clock, ArrowRight, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
// import { Navbar } from "@/app/modules/Navbar";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    title: isAr
      ? "دليل ومقالات الشحن ونقل الأثاث | كارغو تراك"
      : "Relocation & Moving Guides | Cargo Track Relocations",
    description: isAr
      ? "اكتشف نصائح الخبراء حول نقل الأثاث والتخليص الجمركي في الرياض وجدة والمملكة العربية السعودية."
      : "Expert insights, moving checklists, and customs clearance guides for relocations in Riyadh, Jeddah, and across Saudi Arabia.",
  };
}

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  const posts = getAllPosts(locale);

  return (
    <main className="w-full min-h-screen bg-brand-bg relative overflow-hidden pt-22 lg:pt-26 pb-20">
      {/* Subtle Background Elements matching AboutSection */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 end-0 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 rtl:-translate-x-1/3" />
        <div className="absolute bottom-0 start-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 rtl:translate-x-1/4" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTEsIDU4LCAxMDIsIDAuMDMpIi8+PC9zdmc+')] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-40 mix-blend-multiply" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Back to Home Button */}
        <div className="mb-8">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-primary hover:text-navy transition-colors group"
          >
            {isAr ? (
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            ) : (
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
            )}
            <span>{isAr ? "العودة إلى الرئيسية" : "Back to Home"}</span>
          </Link>
        </div>

        {/* Header Section */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="w-8 h-[2px] bg-primary/40 rounded-full"
              aria-hidden="true"
            />
            <span className="text-[12px] font-bold text-primary uppercase tracking-[0.15em]">
              {isAr ? "مدونة كارغو تراك" : "Cargo Track Insights"}
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-[32px] sm:text-[38px] lg:text-[46px] leading-[1.15] text-navy mb-5">
            {isAr
              ? "دليل الشحن والانتقال في السعودية"
              : "Moving & Relocation Resources"}
          </h1>

          <p className="text-brand-muted text-[16px] lg:text-[17px] leading-relaxed">
            {isAr
              ? "نصائح وإرشادات شاملة من خبراء النقل والتخليص الجمركي لمساعدتك في التخطيط لانتقال منظم وسلس داخل وخارج المملكة."
              : "Practical guides, customs regulations, and packing tips designed to make your relocation in Riyadh and Jeddah completely stress-free."}
          </p>
        </div>

        {/* Posts Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-[24px] border border-brand-text/[0.06] shadow-[0_4px_20px_rgba(11,58,102,0.02)]">
            <p className="text-brand-muted text-[15px]">
              {isAr
                ? "لا توجد مقالات منشورة حالياً."
                : "No articles found yet."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col bg-white rounded-[22px] border border-brand-text/[0.05] overflow-hidden shadow-[0_10px_30px_rgba(11,58,102,0.04)] hover:shadow-[0_20px_45px_rgba(11,58,102,0.08)] hover:-translate-y-1.5 hover:border-primary/20 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 start-4">
                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-navy shadow-sm border border-brand-text/5">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 lg:p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-[12px] font-medium text-brand-muted mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      {post.readTime}
                    </span>
                  </div>

                  <Link
                    href={`/${locale}/blog/${post.slug}`}
                    className="font-heading font-bold text-navy text-[18px] lg:text-[20px] leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2"
                  >
                    {post.title}
                  </Link>

                  <p className="text-brand-muted text-[14px] leading-relaxed mb-6 line-clamp-3 flex-1">
                    {post.description}
                  </p>

                  <Link
                    href={`/${locale}/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-primary group-hover:gap-3 transition-all mt-auto"
                  >
                    <span>
                      {isAr ? "اقرأ الدليل كاملاً" : "Read Full Guide"}
                    </span>
                    {isAr ? (
                      <ArrowLeft size={16} className="transition-transform" />
                    ) : (
                      <ArrowRight size={16} className="transition-transform" />
                    )}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
