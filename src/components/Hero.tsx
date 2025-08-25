"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 md:px-12 py-30">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Holistic Growth <br /> for Your Business
          </h1>
          <p className="text-gray-600 max-w-lg">
            We are the leading full-service digital marketing and IT solutions
            company in the market. From small–scale to large–scale firms, we&apos;re
            adept at helping you grow.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition">
              Get Quote Now
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image - Full Fit */}
        <div className="w-full h-full relative">
          <Image
            src="/Girl.png" // replace with your image path
            alt="Business Growth"
            fill
            className="object-cover rounded-md"
            priority
          />
        </div>
      </div>

      {/* 3 Cards Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-12 pb-16">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-xl p-6 space-y-3 hover:shadow-lg transition">
          <div className="text-blue-600 text-3xl">📊</div>
          <h3 className="text-xl font-semibold text-gray-900">
            Data-Backed Growth
          </h3>
          <p className="text-gray-600 text-sm">
            Our experts analyse data and use real numbers to boost yours.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-xl p-6 space-y-3 hover:shadow-lg transition">
          <div className="text-blue-600 text-3xl">📈</div>
          <h3 className="text-xl font-semibold text-gray-900">
            Real Results at a Realistic Pace
          </h3>
          <p className="text-gray-600 text-sm">
            We don’t provide any timeline for results. We focus on our work and
            results just follow!
          </p>
        </div>

        {/* Card 3 - Blue Background */}
        <div className="bg-blue-600 text-white shadow-md rounded-xl p-6 space-y-3 hover:shadow-lg transition">
          <div className="text-white text-3xl">🔒</div>
          <h3 className="text-xl font-semibold">Strength & Security</h3>
          <p className="text-sm">
            Our IT solutions solidify your foundation and offer unparalleled
            security for sensitive information.
          </p>
        </div>
      </div>
    </section>
  );
}
