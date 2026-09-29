"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Blogpic() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Select Category");
  const router = useRouter();

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();

    const query = (searchQuery || (selectedCategory !== "Select Category" ? selectedCategory : "")).toLowerCase().trim();

    const categories = [
      "it consulting",
      "it services",
      "software testing",
      "digital marketing",
      "product development"
    ];

    if (categories.includes(query)) {
      const formatted = query.replace(/\s+/g, "-");
      router.push(`/blog?category=${formatted}#recent-articles`);
    } else {
      alert("Please select or enter a valid category (e.g. IT Consulting, IT Services, Software Testing, Digital Marketing, Product Development).");
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCategory(value);
    setSearchQuery(value);
  };

  return (
    <section className="relative bg-gradient-to-b from-blue-50/50 via-white to-white pt-28 sm:pt-36 pb-12 overflow-hidden">
      {/* Background Ambient Glow */}
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

          <div className="mt-6 flex justify-center">
            <Link href="/contact">
              <button
                type="button"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>EXPLORE MORE</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Search Bar Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 max-w-3xl mx-auto"
        >
          <form
            onSubmit={handleSearch}
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
                placeholder="Search articles, topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-gray-50/80 hover:bg-gray-50 focus:bg-white text-sm sm:text-base rounded-xl sm:rounded-full border border-gray-200/80 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-gray-800 placeholder-gray-400"
              />
            </div>

            {/* Category Select */}
            <div className="w-full sm:w-52 relative">
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="w-full px-4 py-3 bg-gray-50/80 hover:bg-gray-50 focus:bg-white text-sm sm:text-base rounded-xl sm:rounded-full border border-gray-200/80 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-gray-700 cursor-pointer appearance-none pr-9"
              >
                <option value="Select Category">All Categories</option>
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

      {/* Full Width Left-to-Right Hero Showcase Banner */}
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
          {/* Gradient Overlays for Depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-900/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/30 to-transparent" />

          {/* Left Content inside Banner aligned with max-w-7xl container */}
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

          {/* Overlapping Character Illustration anchored to right */}
          <div className="absolute right-2 sm:right-8 md:right-16 lg:right-24 xl:right-32 bottom-0 z-20 pointer-events-none">
            <div className="w-44 sm:w-60 md:w-72 lg:w-88 xl:w-96 h-auto">
              <Image
                src="/images/girls.png"
                alt="Highlight character illustration"
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
  );
}

