"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorRole: string;
  authorImage: string;
  image: string;
  readTime: string;
  featured: boolean;
  status: "published" | "draft";
  createdAt: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Topics");

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const res = await fetch("/api/blog");
        const data = await res.json();
        const published = data.filter((p: BlogPost) => p.status === "published");
        setPosts(published);
        setFilteredPosts(published);
      } catch (err) {
        console.error("Failed to load blog posts:", err);
      }
    };
    loadPosts();
  }, []);

  useEffect(() => {
    let result = posts;

    // Filter by category
    if (selectedCategory !== "All Topics") {
      result = result.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    setFilteredPosts(result);
  }, [searchQuery, selectedCategory, posts]);

  // Featured post is the first featured post, or the first post if none are marked featured
  const featuredPost = posts.find((p) => p.featured) || posts[0];
  // Filter out featured post from general listing
  const generalPosts = filteredPosts.filter((p) => p.id !== featuredPost?.id);

  const categories = [
    "All Topics",
    "AI Governance",
    "Edge Computing",
    "Case Studies",
    "Hardware",
  ];

  return (
    <>
      <main className="pt-32 pb-24">
        {/* Hero / Featured Section */}
        {featuredPost && (
          <section className="px-5 md:px-16 max-w-[1280px] mx-auto mb-20">
            <ScrollReveal>
              <div className="relative group rounded-3xl overflow-hidden glass-card">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-[300px] lg:h-[500px] overflow-hidden">
                    {featuredPost.image && (
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent lg:hidden" />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-[var(--color-secondary-container)] text-white font-semibold text-[10px] uppercase tracking-widest">
                        Featured Report
                      </span>
                      <span className="text-[var(--color-on-surface-variant)] text-xs">
                        • {featuredPost.readTime}
                      </span>
                    </div>
                    <h1 className="font-[var(--font-heading)] text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] text-white font-semibold mb-6 group-hover:text-[var(--color-primary)] transition-colors">
                      <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                    </h1>
                    <p className="text-[var(--color-on-surface-variant)] font-[var(--font-body)] text-sm leading-[22px] mb-8 max-w-xl">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4">
                      {featuredPost.authorImage && (
                        <div className="w-10 h-10 rounded-full overflow-hidden border border-[var(--color-outline)] relative">
                          <Image
                            src={featuredPost.authorImage}
                            alt={featuredPost.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <p className="text-white text-sm font-semibold">{featuredPost.author}</p>
                        <p className="text-[var(--color-on-surface-variant)] text-xs">
                          {featuredPost.authorRole}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </section>
        )}

        {/* Search and Categories */}
        <section className="px-5 md:px-16 max-w-[1280px] mx-auto mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-xl">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-on-surface-variant)]">
                search
              </span>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[var(--color-surface-container-low)] border border-[var(--color-outline-variant)] rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all outline-none text-white font-[var(--font-body)] text-sm"
                placeholder="Search insights, research, updates..."
                type="text"
              />
            </div>
            {/* Categories Chips */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full font-semibold text-xs transition-all ${
                    selectedCategory.toLowerCase() === cat.toLowerCase()
                      ? "bg-[var(--color-primary)] text-black"
                      : "bg-[var(--color-surface-container-high)] text-[var(--color-on-surface-variant)] hover:border-[var(--color-primary)]/40 border border-transparent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Bento Grid / Blog Cards */}
        <section className="px-5 md:px-16 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generalPosts.map((post, idx) => {
              // Create asymmetric styling for third or fourth elements matching code.html
              const isWide = idx === 3; // wide card for variety

              return (
                <ScrollReveal
                  key={post.id}
                  className={`${isWide ? "md:col-span-2" : "col-span-1"}`}
                >
                  <article
                    className={`glass-card rounded-2xl overflow-hidden group hover:shadow-lg transition-all duration-300 flex ${
                      isWide ? "flex-col md:flex-row h-full" : "flex-col h-full"
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden aspect-video ${
                        isWide ? "md:w-1/2 md:aspect-auto min-h-[250px]" : "w-full"
                      }`}
                    >
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#0a0f2c] to-[#050816]" />
                      )}
                    </div>
                    <div className={`p-6 flex flex-col justify-between flex-1 ${isWide ? "md:w-1/2" : ""}`}>
                      <div>
                        <div className="text-xs text-[var(--color-secondary)] font-bold mb-2 tracking-widest uppercase">
                          {post.category}
                        </div>
                        <h3 className="font-[var(--font-heading)] text-xl font-medium text-white mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p className="text-[var(--color-on-surface-variant)] font-[var(--font-body)] text-xs leading-[20px] mb-6 line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold text-xs hover:underline mt-auto"
                      >
                        Read Insight{" "}
                        <span className="material-symbols-outlined text-xs">arrow_forward</span>
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}

            {/* Newsletter CTA styled to fit bento layout */}
            <ScrollReveal>
              <div className="glass-card rounded-2xl p-8 flex flex-col justify-between border-[var(--color-primary)]/20 relative overflow-hidden h-full">
                <div className="absolute -right-4 -top-4 w-32 h-32 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-[var(--color-primary)] text-4xl mb-6 block">
                    mail
                  </span>
                  <h3 className="font-[var(--font-heading)] text-xl font-semibold text-white mb-4">
                    Intelligence Briefing
                  </h3>
                  <p className="text-[var(--color-on-surface-variant)] font-[var(--font-body)] text-xs leading-[18px] mb-6">
                    Monthly updates on intelligence engineering and enterprise architecture.
                  </p>
                </div>
                <div className="space-y-4 relative z-10 mt-auto">
                  <input
                    className="w-full bg-[var(--color-surface-container-highest)] border border-[var(--color-outline-variant)] rounded-lg px-4 py-3 text-white text-xs outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
                    placeholder="work@company.com"
                    type="email"
                  />
                  <button className="w-full glow-button py-3 rounded-lg font-bold text-white text-xs">
                    Subscribe
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Pagination Teaser */}
        <section className="mt-20 flex justify-center">
          <nav className="flex items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg glass-card text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)]">
              <span className="material-symbols-outlined text-sm">chevron_left</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--color-primary)] text-black font-semibold text-xs">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg glass-card text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)]">
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </nav>
        </section>
      </main>
    </>
  );
}
