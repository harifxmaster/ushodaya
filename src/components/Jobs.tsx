"use client";

import Image from "next/image";

export default function Jobs() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-900 to-blue-700 px-6 py-30 flex flex-col items-center">
      {/* Top Section (Heading + Image) */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text */}
        <div>
          <h1 className="text-white text-5xl md:text-6xl font-bold leading-snug">
            Carve the Path <br />
            to a Brighter <br />
            Future with Us
          </h1>
        </div>

        {/* Right Side - Image with Arc Background */}
        <div className="relative flex justify-center items-end">
          {/* Arc Background */}
          <div className="w-[400px] h-[200px] bg-gradient-to-r from-blue-800 to-blue-600 rounded-t-full absolute bottom-0"></div>

          {/* Image inside arc */}
          <div className="relative w-[400px] h-[200px] z-10">
            <Image
              src="/images/Study.png"
              alt="Hero"
              fill
              className="object-cover rounded-t-full shadow-xl border-4 border-white"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            />
          </div>
        </div>
      </div>

      {/* Search Filters Section */}
      <div className="bg-white shadow-lg rounded-xl mt-10 p-6 w-full max-w-6xl">
        <form className="flex flex-col gap-6">
          {/* Search Input */}
          <div className="relative w-full">
            <label htmlFor="job-search" className="sr-only">
              Search Jobs
            </label>
            <input
              id="job-search"
              type="text"
              placeholder="Search for jobs..."
              className="w-full border rounded-lg px-4 py-2 pl-10 focus:outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-3 top-2.5 w-5 h-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="7" strokeWidth="2" />
              <line
                x1="16.65"
                y1="16.65"
                x2="21"
                y2="21"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Dropdown Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            {/* Experience */}
            <div>
              <label
                htmlFor="experience"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Experience Level
              </label>
              <select
                id="experience"
                className="w-full border rounded-lg px-4 py-2"
              >
                <option>All Experience Level</option>
                <option>Fresher</option>
                <option>Mid Level</option>
                <option>Senior</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Location
              </label>
              <select
                id="location"
                className="w-full border rounded-lg px-4 py-2"
              >
                <option>All Location</option>
                <option>Hyderabad</option>
                <option>Bangalore</option>
                <option>Delhi</option>
              </select>
            </div>

            {/* Categories */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Categories
              </label>
              <select
                id="category"
                className="w-full border rounded-lg px-4 py-2"
              >
                <option>All Categories</option>
                <option>Development</option>
                <option>Design</option>
                <option>Marketing</option>
              </select>
            </div>

            {/* View Jobs Button */}
            <div className="flex justify-center md:justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                View Jobs
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
