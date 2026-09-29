"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function JobSearchHero() {
  const [selectedJobTitle, setSelectedJobTitle] = useState("Sales Executive");
  const [experience, setExperience] = useState("All Experience Level");
  const [location, setLocation] = useState("All Location");
  const [category, setCategory] = useState("All Categories");
  const [showLocation, setShowLocation] = useState(false);

  // Location Component (with animation + gradient background)
  const Location = ({
    job,
    experience,
    location,
    category,
    onBack,
  }: {
    job: string;
    experience: string;
    location: string;
    category: string;
    onBack: () => void;
  }) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="p-6 rounded-lg shadow-2xl mt-10 bg-white border-2 border-gray-200"
      >
        {/* Back button */}
        <button
          onClick={onBack}
          className="mb-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-all duration-300 shadow-md"
        >
          Back
        </button>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Available Jobs for {job}
        </h2>

        <div className="bg-gray-50 p-4 rounded-lg shadow-sm space-y-2 border border-gray-300">
          <p className="text-gray-900">
            <strong className="text-gray-900">Experience Level:</strong> {experience}
          </p>
          <p className="text-gray-900">
            <strong className="text-gray-900">Location:</strong> {location}
          </p>
          <p className="text-gray-900">
            <strong className="text-gray-900">Category:</strong> {category}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-6"
        >
          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            Job Listings
          </h3>
          <ul className="space-y-3">
            <motion.li
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 p-4 rounded-md shadow-sm border border-gray-200 transition-transform"
            >
              <p className="font-semibold text-gray-900">Senior {job}</p>
              <p className="text-gray-700 text-sm">Location: {location}</p>
              <p className="text-gray-700 text-sm">Category: {category}</p>
            </motion.li>

            <motion.li
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 p-4 rounded-md shadow-sm border border-gray-200 transition-transform"
            >
              <p className="font-semibold text-gray-900">Junior {job}</p>
              <p className="text-gray-700 text-sm">Location: {location}</p>
              <p className="text-gray-700 text-sm">Category: {category}</p>
            </motion.li>
          </ul>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section className="relative bg-gray-50 text-gray-900 pt-28 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {!showLocation ? (
          <>
            {/* Hero Row */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              <motion.div
                className="flex-1 text-center lg:text-left"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                  Carve the Path <br /> to a <span className="text-blue-600">Brighter</span> <br /> Future with Us
                </h2>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                className="flex justify-end w-full lg:w-[50%] relative"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="w-[650px] h-[450px] bg-blue-100/60 rounded-l-[300px] overflow-hidden flex-shrink-0 relative shadow-xl border border-blue-100">
                  <Image
                    src="/images/career-hero-team.jpg"
                    alt="Careers Team Collaboration"
                    width={650}
                    height={450}
                    className="object-cover w-full h-full object-center"
                    priority
                  />
                </div>
              </motion.div>
            </div>

            {/* Job Search Box */}
            <motion.div
              className="bg-white shadow-xl rounded-2xl p-6 md:p-8 mt-12 w-full max-w-6xl mx-auto border border-gray-200/80"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
                {/* Job Selection */}
                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-1">
                    Select Job
                  </label>
                  <select
                    value={selectedJobTitle}
                    onChange={(e) => setSelectedJobTitle(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700"
                  >
                    <option>Sales Executive</option>
                    <option>Front End Developer</option>
                    <option>Technical SEO Manager</option>
                    <option>Senior QA Manager</option>
                  </select>
                </div>

                {/* Experience */}
                <div>
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
                </div>

                {/* Location */}
                <div>
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
                    <option>Hyderabad</option>
                    <option>Bangalore</option>
                  </select>
                </div>

                {/* Category */}
                <div>
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
                </div>

                {/* View Jobs Button */}
                <div className="flex items-end col-span-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowLocation(true)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md px-6 py-2 text-center transition-all duration-300"
                  >
                    View Jobs
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        ) : (
          <Location
            job={selectedJobTitle}
            experience={experience}
            location={location}
            category={category}
            onBack={() => setShowLocation(false)}
          />
        )}
      </div>
    </section>
  );
}
