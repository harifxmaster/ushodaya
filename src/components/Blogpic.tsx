// app/components/ArticlesHero.tsx
"use client";

import Image from "next/image";
import { JSX } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Blogpic(): JSX.Element {
  return (
    <section className="bg-white overflow-visible">
      <div className="w-full mx-auto px-6 md:px-8 relative text-center">
        {/* Header + Explore button (centered on one line) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-20">
          <h1 className="text-2xl md:text-4xl font-extrabold leading-tight">
            Insights, News &amp; Articles by{" "}
            <span className="font-serif">WT Softech</span>
          </h1>

          <button
            className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold shadow-2xl ring-2 ring-white"
            aria-label="Explore more"
          >
            EXPLORE MORE
          </button>
        </div>

        {/* Search / Category / Share (centered) */}
        <div className="mt-8 md:mt-10 flex justify-center">
          <div className="w-full max-w-2xl">
            {/* Search input */}
            <div className="relative">
              <input
                type="search"
                placeholder="Search article"
                className="w-full rounded-full border border-gray-200 bg-gray-100 py-3 pl-4 pr-28 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
              <button
                className="absolute right-1 top-1/2 -translate-y-1/2 inline-flex items-center px-5 py-2 rounded-full bg-blue-600 text-white font-medium ring-4 ring-white shadow"
                aria-label="Search"
              >
                Search
              </button>
            </div>

            {/* Category + Share */}
            <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-8">
              <select className="w-full sm:w-60 rounded-md border border-gray-200 px-4 py-2 bg-white">
                <option>Search any category</option>
                <option>Technology</option>
                <option>Business</option>
                <option>Design</option>
              </select>

              <div className="mt-3 sm:mt-0 flex items-center justify-center gap-3 text-sm text-gray-600">
                <span className="hidden sm:inline">Share:</span>
                <button className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-blue-600">
                  <FaFacebookF />
                </button>
                <button className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-red-600">
                  <FaYoutube />
                </button>
                <button className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-pink-500">
                  <FaInstagram />
                </button>
                <button className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-black">
                  <FaXTwitter />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Banner (buildings) + girl image */}
        <div className="mt-10 relative overflow-visible">
          {/* Buildings background */}
          <div className="w-full h-64 md:h-80 lg:h-96 relative overflow-hidden">
            <Image
              src="/images/Deloite.png"
              alt="city buildings"
              fill
              className="object-cover object-center"
              priority
            />

            {/* blue fade bottom */}
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-blue-800/90 to-transparent pointer-events-none" />
          </div>

          {/* Girl image */}
          <div
            className="absolute right-90 bottom-0 z-50 pointer-events-none
                       translate-x-4 md:translate-x-10 lg:translate-x-20"
            aria-hidden
          >
            <div className="w-40 md:w-56 lg:w-110 drop-shadow-2xl">
              <Image
                src="/images/girls.png"
                alt="girl pointing"
                width={700}
                height={900}
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
