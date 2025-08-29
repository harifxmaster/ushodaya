// app/components/ArticlesHero.tsx
"use client";

import Image from "next/image";
import { JSX } from "react";

export default function Blogpic(): JSX.Element {
  return (
    <section className="bg-white overflow-visible">
      <div className="w-full mx-auto px-6 md:px-8 relative">
        {/* Header + Explore (single line, close together) */}
        <div className="flex items-center gap-4 pt-20">
          <h1 className="text-2xl md:text-4xl font-extrabold leading-tight">
            Insights, News &amp; Articles by <span className="font-serif">WT Softech</span>
          </h1>

          <button
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold shadow-2xl ring-2 ring-white"
            aria-label="Explore more"
          >
            EXPLORE MORE
          </button>
        </div>

        {/* LEFT: search / category / share — occupies about half the width */}
        <div className="mt-8 md:mt-6">
          <div className="md:w-1/2">
            <div className="max-w-xl">
              {/* Search input with pill button */}
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search article"
                  className="w-full rounded-full border border-gray-200 bg-gray-100 py-3 pl-4 pr-28 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
                <button
                  className="absolute right-1 top-1/2 -translate-y-1/2 inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-white font-medium ring-4 ring-white shadow"
                  aria-label="Search"
                >
                  Search
                </button>
              </div>

              {/* category + share */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:gap-6">
                <select className="w-full sm:w-60 rounded-md border border-gray-200 px-4 py-2 bg-white">
                  <option>Search any category</option>
                  <option>Technology</option>
                  <option>Business</option>
                  <option>Design</option>
                </select>

                <div className="mt-3 sm:mt-0 flex items-center gap-3 text-sm text-gray-600">
                  <span className="hidden sm:inline">Share:</span>
                  <button className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center">F</button>
                  <button className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center">Y</button>
                  <button className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center">I</button>
                  <button className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center">X</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Banner (buildings) + overlapping girl */}
        <div className="mt-10 relative overflow-visible">
          {/* Buildings background (full width inside container) */}
          <div className="w-full h-26 md:h-50 lg:h-96 relative overflow-hidden">
            <Image
              src="/images/Deloite.png"
              alt="city buildings"
              fill
              className="object-cover object-center"
              priority
            />

            {/* blue fade at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-blue-800/90 to-transparent pointer-events-none" />
          </div>

          {/* Girl image: absolute, aligned bottom-right, translated to overflow right side */}
          <div
            className="absolute right-0 bottom-0 z-50 pointer-events-none
                       translate-x-10 md:translate-x-20 lg:translate-x-32"
            aria-hidden
          >
            <div className="w-40 md:w-56 right-2 lg:w-72 drop-shadow-2xl">
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
