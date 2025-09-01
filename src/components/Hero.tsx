"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-blue-50 to-white mb-10">

      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/Girl.png"
          alt="Business Woman"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white/90  to-transparent"></div>
      </div>


      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="z-10 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Holistic Growth <br className="hidden md:block" /> for Your Business
          </h1>
          <p className="mt-4 text-gray-700 text-base md:text-lg">
            We are the leading full-service digital marketing and IT solutions
            company in the market. From small-scale to large-scale firms, we’re
            adept at helping you grow.
          </p>


          <div className="mt-6 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition">
              Get Quote Now
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg shadow-md transition">
              Learn More
            </button>
          </div>
        </div>
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mt-10 md:mt-[-100px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        <div className="bg-gradient-to-br from-blue-100 to-blue-50 shadow-lg rounded-xl p-6 text-center md:text-left hover:shadow-xl transition">
          <div className="text-blue-600 mb-4 flex justify-center md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 7.5V6a1.5 1.5 0 011.5-1.5h4.5A1.5 1.5 0 0115.75 6v1.5m-9 0h10.5m-12 0A2.25 2.25 0 004.5 9.75v7.5A2.25 2.25 0 006.75 19.5h10.5a2.25 2.25 0 002.25-2.25v-7.5A2.25 2.25 0 0017.25 7.5m-12 0V6a3 3 0 013-3h4.5a3 3 0 013 3v1.5"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Data-Backed Growth
          </h3>
          <p className="text-gray-700">
            Our experts analyse data and use real numbers to boost yours.
          </p>
        </div>


        <div className="bg-gradient-to-br from-purple-100 to-purple-50 shadow-lg rounded-xl p-6 text-center md:text-left hover:shadow-xl transition">
          <div className="text-purple-600 mb-4 flex justify-center md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3v18h18M9 17V9m4 8V5m4 12v-6"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Real Results at a Realistic Pace
          </h3>
          <p className="text-gray-700">
            We don’t provide any timeline for results. We focus on our work and
            results just follow!
          </p>
        </div>


        <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-xl p-6 text-center md:text-left hover:shadow-xl transition">
          <div className="mb-4 flex justify-center md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v6m-3-3h6M4.5 6.75V21h9.75m-6-6.75H15M15 6h.008v.008H15V6z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Strength & Security</h3>
          <p>
            Our IT solutions solidify your foundation and offer unparalleled
            security for sensitive information.
          </p>
        </div>
      </div>
    </section>
  );
}
