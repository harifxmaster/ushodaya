"use client";

import Image from "next/image";

export default function Jobs() {
  return (
    <section className="relative bg-blue-900 text-white overflow-hidden">

      <div className="max-w-[1300px] mx-auto px-6 md:px-10 relative">
        <div className="flex flex-col lg:flex-row items-center lg:items-center min-h-[500px]">


          <div className="flex-1 flex flex-col justify-center py-12 lg:py-20 z-10">
            <h1 className="text-[36px] sm:text-[44px] md:text-[52px] font-extrabold leading-snug max-w-[550px]">
              Carve the Path
              <br />to a Brighter
              <br />Future with Us
            </h1>
          </div>


          <div className="flex justify-end w-full lg:w-[50%] relative">
            <div className="w-[650px] h-[450px] bg-blue-900 rounded-l-[300px] overflow-hidden flex-shrink-0 relative">
              <Image
                src="/images/class.png"
                alt="Hero"
                width={650}
                height={450}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>


      <div className="relative z-20 -mt-16 w-full px-4">
        <div className="max-w-[1100px] mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">

          <div className="relative mb-6 w-full flex justify-center">
            <input
              type="text"
              placeholder="Search for jobs..."
              className="w-full sm:w-[60%] rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 pr-12 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-[#3155ff]"
            />
            <svg
              className="absolute right-8 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="M21 21l-4.3-4.3"></path>
            </svg>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">

            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2">
                Experience Level
              </label>
              <select className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-700">
                <option>All Experience Level</option>
                <option>Fresher</option>
                <option>Junior</option>
                <option>Mid</option>
                <option>Senior</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2">
                Location
              </label>
              <select className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-700">
                <option>All Location</option>
                <option>Remote</option>
                <option>Bangalore</option>
                <option>Hyderabad</option>
                <option>Pune</option>
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2">
                Categories
              </label>
              <select className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-700">
                <option>All Categories</option>
                <option>Engineering</option>
                <option>Design</option>
                <option>Marketing</option>
              </select>
            </div>

            {/* Button */}
            <div className="flex items-end">
              <button className="w-full bg-[#3155ff] text-white font-semibold rounded-lg px-6 py-3 hover:bg-[#2647f7]">
                View Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
