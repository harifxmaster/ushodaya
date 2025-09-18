"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function JobSearchHero() {
  const [experience, setExperience] = useState("All Experience Level");
  const [location, setLocation] = useState("All Location");
  const [category, setCategory] = useState("All Categories");

  return (
    <section className="relative bg-[#113D8F] text-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Hero Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Heading */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
              Carve the Path <br /> to a Brighter <br /> Future with Us
            </h2>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="flex justify-end w-full lg:w-[50%] relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="w-[650px] h-[450px] bg-blue-900 rounded-l-[300px] overflow-hidden flex-shrink-0 relative shadow-lg">
              <Image
                src="/images/class.png"
                alt="Hero"
                width={650}
                height={450}
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Job Search Box */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 mt-12 w-full max-w-6xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            {/* Search Input with Inline SVG Icon */}
            <motion.div
              className="md:col-span-2 relative"
              whileHover={{ scale: 1.02 }}
            >
              <label className="block text-gray-600 text-sm font-medium mb-1">
                Search
              </label>
              <input
                type="text"
                placeholder="Search for jobs..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 text-gray-700"
              />
              <svg
                className="absolute right-3 top-9 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </motion.div>

            {/* Experience Level */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-gray-600 text-sm font-medium mb-1">
                Experience Level
              </label>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700"
              >
                <option>All Experience Level</option>
                <option>Fresher</option>
                <option>Junior</option>
                <option>Mid</option>
                <option>Senior</option>
              </select>
            </motion.div>

            {/* Location */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-gray-600 text-sm font-medium mb-1">
                Location
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700"
              >
                <option>All Location</option>
                <option>Chennai</option>
                <option>Madurai</option>
                <option>Bangalore</option>
              </select>
            </motion.div>

            {/* Categories */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-gray-600 text-sm font-medium mb-1">
                Categories
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700"
              >
                <option>All Categories</option>
                <option>Engineering</option>
                <option>Design</option>
                <option>Marketing</option>
              </select>
            </motion.div>

            {/* Button */}
            <motion.div
              className="flex items-end"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/jobs"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md px-6 py-2 text-center"
              >
                View Jobs
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
