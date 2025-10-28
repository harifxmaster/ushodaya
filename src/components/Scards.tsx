"use client";

import Image from "next/image";
import Link from "next/link";

export default function Scards() {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-10 py-10 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">

        {/* Left Section */}
        <div className="flex-1 space-y-6">
          <Image
            src="/images/lap.png"
            alt="Main Workspace"
            width={800}
            height={500}
            className="rounded-lg w-full object-cover"
            priority
          />

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-snug">
            1. Design functional website fast?
          </h2>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Got a groundbreaking idea? We turn napkin sketches into fully functional,
            market-ready products. From concept to code, our team builds sleek, scalable,
            and future–proof solutions—without the drama. Whether it’s a next-gen app or
            an AI-powered platform, we bring your vision to life. You dream it, we develop it.
            Simple as that.
          </p>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Image
              src="/images/t1.png"
              alt="Design 1"
              width={200}
              height={150}
              className="rounded-md w-full object-cover"
            />
            <Image
              src="/images/t2.png"
              alt="Design 2"
              width={200}
              height={150}
              className="rounded-md w-full object-cover"
            />
            <Image
              src="/images/t3.png"
              alt="Design 3"
              width={200}
              height={150}
              className="rounded-md w-full object-cover"
            />
          </div>

          <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
            People probably wouldn&apos;t click. Create elements that are functional and
            enhance the user experience on your site.
          </p>
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-1/3 space-y-6">

          {/* Category Section */}
          <div className="border rounded-lg p-5 shadow-sm bg-gray-50">
            <h3 className="font-bold text-gray-800 mb-3 border-b pb-2 text-lg">
              Category
            </h3>
            <ul className="text-sm sm:text-base space-y-2">
              {[
                "Product Development",
                "Software Testing",
                "IT Consulting",
                "IT Services",
                "Staffing Solutions",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center px-3 py-2 rounded-md bg-white text-gray-800 border border-gray-200 cursor-pointer hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-400 hover:text-white transition duration-300 ease-in-out"
                >
                  {item}
                  <span className="text-xs">{'»'}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonial Section */}
          <div className="border rounded-lg p-5 shadow-sm text-center border-blue-500 bg-white">
            <p className="italic text-gray-700 text-sm sm:text-base mb-4">
              &quot;You made it so simple. My new site is so much faster & easier to work&quot;
            </p>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Image
                src="/images/toolg.png"
                alt="Arianna Craig"
                width={36}
                height={36}
                className="rounded-full"
              />
              <span className="text-sm sm:text-base font-semibold text-gray-900">
                Arianna Craigg
              </span>
            </div>
            <div className="flex justify-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-blue-700" />
              <div className="w-3 h-3 rounded-full bg-gray-300" />
              <div className="w-3 h-3 rounded-full bg-gray-300" />
            </div>
          </div>

          {/* Consulting Section */}
          <div className="relative rounded-lg overflow-hidden shadow-md text-white text-center p-6 h-52 sm:h-48">
            <Image
              src="/images/Hell.png"
              alt="Consulting Background"
              fill
              className="object-cover absolute inset-0 opacity-50"
            />
            <div className="relative z-10 space-y-4 flex flex-col items-center justify-center h-full">
              <p className="font-semibold text-base sm:text-lg">
                Do You Need Any Consulting Service?
              </p>
              <Link
                href="/contact"
                className="bg-white text-blue-900 font-semibold px-5 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                Contact us
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
