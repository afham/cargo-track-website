import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blogs";
import { QuoteForm } from "@/app/modules/HeroSection/QuoteForm";
import { Calendar, Clock, ArrowLeft, ArrowRight, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const locales = ["en", "ar"];
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    const posts = getAllPosts(locale);
    for (const post of posts) {
      params.push({ locale, slug: post.slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await getPostBySlug(slug, locale);

  if (!post) return {};

  return {
    title: `${post.title} | Cargo Track Relocations`,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const isAr = locale === "ar";
  const post = await getPostBySlug(slug, locale);

  if (!post) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen bg-brand-bg relative overflow-hidden pt-22 lg:pt-26 pb-24">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 end-0 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 rtl:-translate-x-1/3" />
        <div className="absolute bottom-0 start-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 rtl:translate-x-1/4" />
      </div>

      <div className="max-w-[1000px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-blue-700 transition-colors"
          >
            {isAr ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
            <span>{isAr ? "العودة إلى المقالات" : "Back to all guides"}</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-medium text-brand-muted mb-4">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-primary" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-primary" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <User size={14} className="text-primary" />
              {post.author}
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.2] text-navy mb-6">
            {post.title}
          </h1>

          <p className="text-brand-muted text-[16px] sm:text-[18px] leading-relaxed">
            {post.description}
          </p>
        </header>

        {/* Featured Banner Image */}
        <div className="relative aspect-[16/9] w-full rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(11,58,102,0.08)] mb-12 bg-slate-100">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1000px"
            className="object-cover"
          />
        </div>

        {/* Article Content Rendered with Direct Tailwind Components */}
        <div className="bg-white rounded-[24px] p-8 sm:p-12 lg:p-14 border border-brand-text/[0.05] shadow-[0_10px_35px_rgba(11,58,102,0.03)] mb-16">
          <ReactMarkdown
            components={{
              h2: ({ node, ...props }) => (
                <h2
                  className="font-heading font-extrabold text-[24px] sm:text-[28px] text-navy mt-10 mb-4 pb-2 border-b border-brand-text/10"
                  {...props}
                />
              ),
              h3: ({ node, ...props }) => (
                <h3
                  className="font-heading font-bold text-[18px] sm:text-[22px] text-navy mt-6 mb-3"
                  {...props}
                />
              ),
              p: ({ node, ...props }) => (
                <p
                  className="text-brand-muted text-[16px] leading-[1.85] mb-5 font-sans"
                  {...props}
                />
              ),
              ul: ({ node, ...props }) => (
                <ul
                  className="list-disc list-outside space-y-2 mb-6 ms-6 text-brand-muted text-[16px]"
                  {...props}
                />
              ),
              ol: ({ node, ...props }) => (
                <ol
                  className="list-decimal list-outside space-y-2 mb-6 ms-6 text-brand-muted text-[16px]"
                  {...props}
                />
              ),
              li: ({ node, ...props }) => (
                <li className="leading-[1.75]" {...props} />
              ),
              strong: ({ node, ...props }) => (
                <strong className="text-navy font-bold" {...props} />
              ),
              hr: ({ node, ...props }) => (
                <hr className="my-8 border-brand-text/10" {...props} />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote
                  className="border-s-4 border-primary ps-4 py-2 my-6 italic text-brand-muted bg-primary/5 rounded-e-lg"
                  {...props}
                />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Embedded Lead Capture Section */}
        <section
          id="quote-section"
          className="bg-navy rounded-[28px] p-8 sm:p-12 text-white relative overflow-hidden shadow-[0_25px_60px_rgba(11,58,102,0.25)] flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          <div className="absolute top-0 end-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

          <div className="w-full lg:w-1/2 relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-2 block">
              {isAr ? "احصل على استشارة مجانية" : "Fast & Transparent Pricing"}
            </span>
            <h2 className="text-[26px] sm:text-[32px] font-extrabold font-heading leading-tight mb-4 text-white">
              {isAr
                ? "هل تخطط للانتقال قريباً؟ دعنا نساعدك في البداية"
                : "Planning a Move Soon? Get a Guaranteed Quote Today"}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {isAr
                ? "احصل على تسعير فوري ومخصص لاحتياجاتك سواء كنت تنتقل داخل الرياض أو جدة أو إلى خارج المملكة."
                : "Whether moving within Riyadh, relocating across Saudi Arabia, or shipping internationally, our logistics specialists are ready to help."}
            </p>
          </div>

          <div className="w-full lg:w-auto relative z-10 flex justify-center">
            <QuoteForm />
          </div>
        </section>
      </div>
    </main>
  );
}
