"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const testimonials = [
  {
    quote: "You made it so simple. Our new platform is so much faster, scalable, and easier to work with.",
    name: "Priya Sharma",
    avatar: "/images/toolg.png",
  },
  {
    quote: "Outstanding engineering support. The team delivered our project seamlessly with exceptional quality.",
    name: "Rahul Verma",
    avatar: "/images/Boy.png",
  },
  {
    quote: "From concept to deployment, their IT solutions boosted our business operations significantly.",
    name: "Ananya Iyer",
    avatar: "/images/Avatar2.png",
  },
];

export default function Scards() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
          <div className="border rounded-xl p-5 shadow-xs bg-gray-50 border-gray-200">
            <h3 className="font-bold text-[#061047] mb-3 border-b border-gray-200 pb-2 text-lg">
              Category
            </h3>
            <ul className="text-sm sm:text-base space-y-2">
              {[
                { name: "Product Development", href: "/blog/how-ctos-can-build-powerful-generative-ai-products" },
                { name: "Software Testing", href: "/blog/role-of-saas-software-testing-in-building-secure-products" },
                { name: "IT Consulting", href: "/blog/tech-stacks-audit-asset-or-legacy-trap" },
                { name: "IT Services", href: "/blog/top-5-it-trends-transforming-businesses-in-2025" },
                { name: "Staffing Solutions", href: "/blog/choosing-between-in-house-vs-outsourced-it" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="flex justify-between items-center px-4 py-2.5 rounded-lg bg-white text-gray-800 border border-gray-200 cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-200 group shadow-xs font-medium"
                  >
                    <span>{item.name}</span>
                    <span className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all">»</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonial Section with 3 Indian Client Profiles */}
          <div className="border rounded-xl p-5 shadow-sm text-center border-blue-500 bg-white transition-all">
            <p className="italic text-gray-700 text-sm sm:text-base mb-4 min-h-[48px] flex items-center justify-center">
              &quot;{testimonials[currentTestimonial].quote}&quot;
            </p>
            <div className="flex items-center justify-center gap-2 mb-3">
              <Image
                src={testimonials[currentTestimonial].avatar}
                alt={testimonials[currentTestimonial].name}
                width={36}
                height={36}
                className="rounded-full object-cover"
              />
              <span className="text-sm sm:text-base font-semibold text-gray-900">
                {testimonials[currentTestimonial].name}
              </span>
            </div>
            
            {/* Interactive pagination dots */}
            <div className="flex justify-center space-x-2 pt-1">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentTestimonial(idx)}
                  aria-label={`Show testimonial ${idx + 1}`}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    currentTestimonial === idx
                      ? "w-6 h-2.5 bg-blue-700"
                      : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
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
