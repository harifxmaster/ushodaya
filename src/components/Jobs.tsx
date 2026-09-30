"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function JobSearchHero() {
  const [selectedJobTitle, setSelectedJobTitle] = useState("Sales Executive");
  const [experience, setExperience] = useState("All Experience Level");
  const [location, setLocation] = useState("All Location");
  const [category, setCategory] = useState("All Categories");

  const handleScrollToJobs = () => {
    const section = document.getElementById("open-positions");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-200 via-gray-200 to-slate-200 text-gray-900 pt-32 sm:pt-36 pb-8 sm:pb-10 overflow-hidden border-b border-gray-300">
      {/* Background Depth Orbs */}
      <div className="absolute -top-24 right-0 w-[550px] h-[550px] bg-slate-300/60 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-[450px] h-[450px] bg-gray-300/70 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main Hero Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Column */}
          <motion.div
            className="lg:col-span-6 text-center lg:text-left space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-blue-700 text-xs sm:text-sm font-semibold border border-blue-200/80 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              We&apos;re Hiring Top Talent
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#061047] tracking-tight leading-[1.15]">
              Carve the Path to a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
                Brighter Future
              </span>{" "}
              with Us
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Join a high-impact team of engineers, problem solvers, and digital specialists creating transformative technology solutions for businesses globally.
            </p>

            {/* Feature Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2 text-xs sm:text-sm text-gray-700 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold">✓</div>
                <span>Fast-Paced Growth</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">✓</div>
                <span>Modern Tech Stack</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold">✓</div>
                <span>Inclusive Culture</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div
            className="lg:col-span-6 relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-lg lg:max-w-none aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border-4 border-white">
              <Image
                src="/images/career-hero-team.jpg"
                alt="Ushodaya IT Services Career Team"
                fill
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Filter / Search Bar */}
        <motion.div
          className="bg-white/95 backdrop-blur-md shadow-xl shadow-blue-950/5 rounded-2xl p-5 sm:p-6 lg:p-7 mt-12 sm:mt-16 w-full border border-gray-200/80"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            {/* Job Selection */}
            <div>
              <label className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-1.5">
                Select Role
              </label>
              <select
                value={selectedJobTitle}
                onChange={(e) => setSelectedJobTitle(e.target.value)}
                className="w-full bg-gray-50/90 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 font-medium focus:bg-white focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all cursor-pointer"
              >
                <option>Sales Executive</option>
                <option>Front End Developer</option>
                <option>Technical SEO Manager</option>
                <option>Senior QA Manager</option>
              </select>
            </div>

            {/* Experience */}
            <div>
              <label className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-1.5">
                Experience Level
              </label>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full bg-gray-50/90 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 font-medium focus:bg-white focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all cursor-pointer"
              >
                <option>All Experience Level</option>
                <option>Fresher</option>
                <option>Junior (1-3 Yrs)</option>
                <option>Mid (3-5 Yrs)</option>
                <option>Senior (5+ Yrs)</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-1.5">
                Location
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-gray-50/90 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 font-medium focus:bg-white focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all cursor-pointer"
              >
                <option>All Locations</option>
                <option>Hyderabad</option>
                <option>Bangalore</option>
                <option>Chennai</option>
                <option>Remote</option>
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-1.5">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-gray-50/90 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 font-medium focus:bg-white focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all cursor-pointer"
              >
                <option>All Categories</option>
                <option>Engineering</option>
                <option>Marketing & SEO</option>
                <option>Sales & Business</option>
                <option>Quality Assurance</option>
              </select>
            </div>

            {/* View Jobs Button */}
            <div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleScrollToJobs}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-5 py-2.5 text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-600/25 transition-all duration-200 h-[42px]"
              >
                <span>View Jobs</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
