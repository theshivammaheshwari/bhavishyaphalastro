"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, BookOpen, Clock, Calendar, ArrowRight, Sparkles, ArrowLeft } from "lucide-react";
import { BLOG_POSTS, BlogArticle } from "@/lib/site-data";

function BlogListPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const categories = ["all", "Marriage Astrology", "Career Astrology", "Sacred Yantras", "Vastu Shastra"];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchCat = category === "all" || post.category === category;
    const matchSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-gold-300 hover:text-gold-100 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-gold-400" />
            <span>Bhavishyaphal Astrology Journal</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-gold-100 leading-tight">
            Astrology Insights, Guidance & Practical Wisdom
          </h1>

          <p className="text-xs sm:text-base text-gold-200/80 font-light leading-relaxed">
            Explore scholarly articles on Vedic principles, Sade Sati mitigation, Mangal Dosha truths, career transitions, and spatial Vastu secrets.
          </p>

          {/* Search & Category Filter Bar */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-gold-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search astrology articles..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-gold-500/20 text-xs text-gold-100 placeholder:text-gold-200/40 focus:border-gold-400 focus:outline-none"
              />
            </div>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-celestial-900 border border-gold-500/20 text-xs text-gold-100 focus:border-gold-400 focus:outline-none"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c === "all" ? "All Categories" : c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="rounded-3xl overflow-hidden bg-gradient-to-b from-white/10 to-white/5 border border-gold-500/20 hover:border-gold-400/50 shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-56 overflow-hidden bg-celestial-950">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-celestial-950 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-wine-800 text-gold-200 font-bold text-[10px] uppercase tracking-wider border border-gold-500/30">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-[11px] text-gold-400/80 mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>

                <h2 className="font-serif font-bold text-lg text-gold-200 group-hover:text-gold-300 transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-xs text-gold-200/70 mt-3 line-clamp-3 leading-relaxed flex-1">
                  {post.excerpt}
                </p>

                <div className="mt-6 pt-4 border-t border-gold-500/15 flex items-center justify-between">
                  <span className="text-[11px] text-gold-300/70 font-medium">
                    By {post.author}
                  </span>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-gold-300 hover:text-gold-100 flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  return <BlogListPage />;
}
