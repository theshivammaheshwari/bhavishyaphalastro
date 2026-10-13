import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, User, Share2, Sparkles, MessageCircle } from "lucide-react";
import { BLOG_POSTS, SITE_CONFIG } from "@/lib/site-data";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostDetail({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-14 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-gold-300 hover:text-gold-100 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Header */}
        <div className="space-y-4 mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-wine-800 text-gold-200 text-xs font-bold uppercase tracking-wider border border-gold-500/30">
            {post.category}
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gold-100 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gold-400/80 pt-2 border-b border-gold-500/15 pb-6">
            <span className="flex items-center gap-1.5 font-medium text-gold-200">
              <User className="w-4 h-4 text-gold-400" /> By {post.author}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-gold-400" /> {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-gold-400" /> {post.readTime}
            </span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl mb-10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Body */}
        <div className="space-y-6 text-sm sm:text-base text-gold-200/90 leading-relaxed font-light">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Author Bio Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-celestial-900/80 border border-gold-500/25 backdrop-blur-xl flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="w-20 h-20 rounded-2xl overflow-hidden relative flex-shrink-0 border-2 border-gold-400 shadow-xl">
            <Image
              src="/images/WhatsApp-Image-2026-08-05-at-2.30.52-PM_33.jpeg"
              alt={SITE_CONFIG.founder}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 space-y-2">
            <span className="text-[11px] font-bold text-gold-400 uppercase tracking-widest block">
              About the Author
            </span>
            <h3 className="font-serif text-lg font-bold text-gold-100">
              {SITE_CONFIG.founder}
            </h3>
            <p className="text-xs text-gold-200/70 leading-relaxed">
              Founder of Bhavishyaphal Astrology Services, recognized as {SITE_CONFIG.founderTitle}. Specializing in Parashari Vedic Astrology, KP System, Vastu Shastra, and consecrated remedial yantras.
            </p>
          </div>

          <a
            href={SITE_CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl font-serif text-xs font-bold text-celestial-950 bg-gradient-to-r from-gold-300 to-amber-400 hover:from-gold-200 hover:to-amber-300 shadow-lg flex-shrink-0 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consult Now</span>
          </a>
        </div>
      </div>
    </article>
  );
}
