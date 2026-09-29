"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";

const BLOGS_PER_PAGE = 6;

/* ---------------- BLOG DATA ---------------- */
export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  img: string;
  category: string;
  excerpt: string;
  readTime: string;
}

const blogs: BlogPost[] = [
  {
    slug: "future-of-work",
    title: "Top 5 IT Trends Transforming Businesses in 2025",
    author: "Sakshi",
    date: "23 October 2025",
    img: "/images/top1.jpg",
    category: "IT Services",
    excerpt: "Explore AI strategy, Cloud Engineering, Agile, and QA Automation trends shaping modern business agility.",
    readTime: "5 min read",
  },
  {
    slug: "it-consulting",
    title: "Tech Stacks Audit: Asset or Legacy Trap",
    author: "Sakshi",
    date: "28 October 2025",
    img: "/images/a2.jpg",
    category: "IT Consulting",
    excerpt: "Discover how modern tech stacks impact business performance and how to strategically modernize legacy systems.",
    readTime: "6 min read",
  },
  {
    slug: "software-testing",
    title: "Role of SaaS Software Testing in Building Secure Products",
    author: "Sai Teja",
    date: "30 October 2025",
    img: "/images/a5.jpg",
    category: "Software Testing",
    excerpt: "Continuous QA and automated testing strategies for SaaS scalability, reliability, and security compliance.",
    readTime: "7 min read",
  },
  {
    slug: "product-development",
    title: "How CTOs Can Build Powerful Generative AI Products",
    author: "Priyajeet",
    date: "03 November 2025",
    img: "/images/a4.jpg",
    category: "Product Development",
    excerpt: "A CTO's blueprint for enterprise AI strategy, infrastructure, fine-tuning LLMs, and responsible governance.",
    readTime: "8 min read",
  },
  {
    slug: "digital-marketing",
    title: "Choosing Between In-house vs Outsourced IT",
    author: "Sakshi",
    date: "18 December 2025",
    img: "/images/house.png",
    category: "Digital Marketing",
    excerpt: "An SME decision guide on cost efficiency, cybersecurity, and scaling through strategic managed IT partners.",
    readTime: "5 min read",
  },
  {
    slug: "Hello-World",
    title: "How QA and Automated Testing Reduce Costs",
    author: "Sakshi",
    date: "22 December 2025",
    img: "/images/QA.png",
    category: "Software Testing",
    excerpt: "Real case studies on how automated regression suites and shift-left QA save significant development budgets.",
    readTime: "6 min read",
  },
  {
    slug: "Hello",
    title: "Smarter Websites with Digital Marketing & Strong Security",
    author: "Sakshi",
    date: "24 December 2025",
    img: "/images/smart.png",
    category: "Digital Marketing",
    excerpt: "Why embedding SEO, high performance, and robust security from day one elevates search rankings and trust.",
    readTime: "5 min read",
  },
];

const categories = [
  "All",
  "IT Consulting",
  "IT Services",
  "Product Development",
  "Digital Marketing",
  "Software Testing",
];

export default function BlogPageClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const scrollToArticles = () => {
    const el = document.getElementById("articles-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSearchSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    setCurrentPage(1);
    scrollToArticles();
  };

  const handleCategoryDropdown = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setSelectedCategory(val);
    setCurrentPage(1);
  };

  const handleTabClick = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setCurrentPage(1);
  };

  // Filter blogs based on category and search query
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory =
        selectedCategory === "All" ||
        blog.category.toLowerCase() === selectedCategory.toLowerCase();

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        blog.title.toLowerCase().includes(query) ||
        blog.excerpt.toLowerCase().includes(query) ||
        blog.category.toLowerCase().includes(query) ||
        blog.author.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * BLOGS_PER_PAGE,
    currentPage * BLOGS_PER_PAGE
  );

  const paginationRange = useMemo(() => {
    const delta = 1;
    const range: (number | string)[] = [];
    const rangeWithDots: (number | string)[] = [];
    let l: number | undefined;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      }
    }

    for (const i of range) {
      if (l) {
        if ((i as number) - l === 2) {
          rangeWithDots.push(l + 1);
        } else if ((i as number) - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i as number;
    }

    return rangeWithDots;
  }, [totalPages, currentPage]);

  return (
    <div className="w-full bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-b from-blue-50/50 via-white to-white pt-28 sm:pt-36 pb-12 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-400/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              Ushodaya Knowledge Hub
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.15]">
              Insights, News & Articles by{" "}
              <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                Ushodaya Services
              </span>
            </h1>

            <p className="mt-5 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Explore expert perspectives, industry trends, and technical guides designed to accelerate your digital growth.
            </p>

            {/* Explore More Button - Smooth Scroll to Articles */}
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={scrollToArticles}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>EXPLORE MORE</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Interactive Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 max-w-3xl mx-auto"
          >
            <form
              onSubmit={handleSearchSubmit}
              className="bg-white p-2.5 sm:p-3 rounded-2xl sm:rounded-full shadow-xl shadow-blue-900/5 border border-gray-200/90 flex flex-col sm:flex-row items-center gap-2.5 backdrop-blur-md"
            >
              {/* Search Input */}
              <div className="relative flex-1 w-full">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="search"
                  placeholder="Search articles, topics (e.g. AI, QA, Cloud, SEO)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50/80 hover:bg-gray-50 focus:bg-white text-sm sm:text-base rounded-xl sm:rounded-full border border-gray-200/80 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-gray-800 placeholder-gray-400"
                />
              </div>

              {/* Category Select */}
              <div className="w-full sm:w-52 relative">
                <select
                  value={selectedCategory}
                  onChange={handleCategoryDropdown}
                  className="w-full px-4 py-3 bg-gray-50/80 hover:bg-gray-50 focus:bg-white text-sm sm:text-base rounded-xl sm:rounded-full border border-gray-200/80 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-gray-700 cursor-pointer appearance-none pr-9 font-medium"
                >
                  <option value="All">All Categories</option>
                  <option value="IT Consulting">IT Consulting</option>
                  <option value="IT Services">IT Services</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Product Development">Product Development</option>
                  <option value="Software Testing">Software Testing</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl sm:rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Search</span>
              </button>
            </form>
          </motion.div>
        </div>

        {/* Featured Showcase Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-14 w-full relative"
        >
          <div className="relative w-full h-[300px] sm:h-[360px] md:h-[420px] lg:h-[460px] overflow-hidden shadow-xl bg-slate-900">
            <Image
              src="/images/Deloite.png"
              alt="City skyline"
              fill
              priority
              className="object-cover object-center opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-900/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/30 to-transparent" />

            <div className="max-w-7xl mx-auto h-full px-6 sm:px-8 lg:px-12 flex flex-col justify-end pb-8 sm:pb-12 md:pb-14 relative z-10">
              <div className="max-w-md sm:max-w-lg md:max-w-xl text-left">
                <span className="px-3.5 py-1 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-blue-200 text-xs font-semibold w-fit mb-3 inline-block">
                  Featured Insight
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Transforming Enterprises with Next-Gen Tech & Strategy
                </h2>
                <p className="mt-2.5 text-blue-100/85 text-xs sm:text-sm md:text-base hidden sm:block leading-relaxed">
                  Stay updated with the latest trends in cloud engineering, AI solutions, and full-stack innovation.
                </p>
              </div>
            </div>

            <div className="absolute right-2 sm:right-8 md:right-16 lg:right-24 xl:right-32 bottom-0 z-20 pointer-events-none">
              <div className="w-44 sm:w-60 md:w-72 lg:w-88 xl:w-96 h-auto">
                <Image
                  src="/images/girls.png"
                  alt="Character illustration"
                  width={700}
                  height={900}
                  priority
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= ARTICLES SECTION ================= */}
      <section id="articles-section" className="w-full bg-white pt-10 pb-24 scroll-mt-24">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category Tabs & Active Filter Status */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 border-b border-gray-100 pb-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleTabClick(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-blue-600 text-white shadow-sm"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Results count & Clear button */}
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span>Showing <strong>{filteredBlogs.length}</strong> {filteredBlogs.length === 1 ? 'article' : 'articles'}</span>
              {(searchQuery || selectedCategory !== "All") && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-blue-600 hover:text-blue-800 font-semibold underline cursor-pointer"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {/* Active Search/Category Notice */}
          {searchQuery && (
            <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-800 text-sm">
              <span>Matching search: <strong>&ldquo;{searchQuery}&rdquo;</strong></span>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="hover:text-red-500 font-bold ml-1 cursor-pointer"
                title="Clear search"
              >
                ✕
              </button>
            </div>
          )}

          {/* Blog Cards Grid */}
          <AnimatePresence mode="wait">
            {paginatedBlogs.length > 0 ? (
              <motion.div
                key={`${selectedCategory}-${searchQuery}-${currentPage}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {paginatedBlogs.map((blog) => (
                  <Link
                    key={blog.slug}
                    href={`/blog/${blog.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col"
                  >
                    {/* Image Container */}
                    <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900">
                      <Image
                        src={blog.img}
                        alt={blog.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-blue-700 shadow-sm">
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex flex-col flex-1 justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2.5">
                          <span>{blog.date}</span>
                          <span>•</span>
                          <span>{blog.readTime}</span>
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                          {blog.title}
                        </h3>
                        <p className="mt-2.5 text-sm text-gray-600 line-clamp-2 leading-relaxed">
                          {blog.excerpt}
                        </p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-sm">
                        <span className="text-gray-700">
                          By <strong className="text-gray-900 font-semibold">{blog.author}</strong>
                        </span>
                        <span className="inline-flex items-center gap-1 font-semibold text-blue-600 group-hover:text-blue-700 group-hover:translate-x-1 transition-all">
                          <span>Read More</span>
                          <span>&rarr;</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-16 text-center bg-slate-50 rounded-2xl border border-slate-200"
              >
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Articles Found</h3>
                <p className="text-gray-600 max-w-md mx-auto mb-6">
                  We couldn&apos;t find any articles matching your search criteria. Try searching with different keywords or reset your filters.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-full shadow-md transition-all cursor-pointer"
                >
                  View All Articles
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ================= PAGINATION ================= */}
          {totalPages > 1 && (
            <div className="mt-14 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-gray-500 font-medium order-2 sm:order-1">
                Showing <span className="font-semibold text-gray-900">{(currentPage - 1) * BLOGS_PER_PAGE + 1}</span> to{" "}
                <span className="font-semibold text-gray-900">{Math.min(currentPage * BLOGS_PER_PAGE, filteredBlogs.length)}</span> of{" "}
                <span className="font-semibold text-gray-900">{filteredBlogs.length}</span> articles
              </p>

              <nav aria-label="Pagination" className="inline-flex items-center gap-1 sm:gap-1.5 p-1.5 bg-white border border-gray-200 rounded-2xl shadow-sm order-1 sm:order-2">
                {/* Previous Button */}
                <button
                  type="button"
                  onClick={() => {
                    if (currentPage > 1) {
                      setCurrentPage((p) => p - 1);
                      scrollToArticles();
                    }
                  }}
                  disabled={currentPage === 1}
                  aria-label="Previous Page"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50/80 disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-gray-400 disabled:cursor-not-allowed transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                  <span className="hidden sm:inline">Prev</span>
                </button>

                {/* Page Number Buttons */}
                <div className="flex items-center gap-1">
                  {paginationRange.map((pageNumber, idx) => {
                    if (pageNumber === "...") {
                      return (
                        <span
                          key={`ellipsis-${idx}`}
                          className="px-2 py-1 text-gray-400 font-bold select-none text-xs"
                        >
                          •••
                        </span>
                      );
                    }

                    const page = pageNumber as number;
                    const isActive = currentPage === page;

                    return (
                      <button
                        key={page}
                        type="button"
                        onClick={() => {
                          setCurrentPage(page);
                          scrollToArticles();
                        }}
                        aria-current={isActive ? "page" : undefined}
                        className={`min-w-[38px] h-[38px] px-2.5 flex items-center justify-center text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                          isActive
                            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 scale-100"
                            : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/70"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}
                </div>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={() => {
                    if (currentPage < totalPages) {
                      setCurrentPage((p) => p + 1);
                      scrollToArticles();
                    }
                  }}
                  disabled={currentPage === totalPages}
                  aria-label="Next Page"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50/80 disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-gray-400 disabled:cursor-not-allowed transition-all cursor-pointer"
                >
                  <span className="hidden sm:inline">Next</span>
                  <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </nav>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
