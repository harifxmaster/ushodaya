"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { JSX, useState } from "react";

export default function Blogpic(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Select Category");
  const router = useRouter();

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();

    const query = searchQuery.trim().toLowerCase();
    const category = selectedCategory.toLowerCase();

    // ✅ IT Consulting
    if (query === "it consulting" || category === "it consulting") {
      router.push("/blogs/it-consulting");

      // ✅ IT Services
    } else if (query === "it services" || category === "it services") {
      router.push("/blogs/it-services");

      // ✅ Software Testing — added navigation
    } else if (query === "software testing" || category === "software testing") {
      router.push("/blogs/software-testing");

      // ✅ Remaining categories under update alert
    } else if (
      query === "digital marketing" ||
      query === "product development" ||
      category === "digital marketing" ||
      category === "product development"
    ) {
      alert("Stay tuned! We’re updating the blogs for " + (query || category));

      // ❌ Invalid input
    } else {
      alert("Please enter or select a valid blog category.");
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCategory(value);
    setSearchQuery(value); // when you pick from dropdown, sync it to search input
  };

  return (
    <section className="bg-white overflow-visible">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 relative text-center">
        {/* ====================== */}
        {/* Heading Section */}
        {/* ====================== */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-16 sm:pt-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug text-gray-900">
            Insights, News &amp; Articles by{" "}
            <span className="font-serif text-blue-800">WT Softech</span>
          </h1>

          {/* Explore More Button */}
          <Link href="/contact">
            <button
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-900 to-blue-600 text-white font-semibold shadow-lg ring-2 ring-white hover:scale-105 transition-transform"
              aria-label="Explore more"
            >
              EXPLORE MORE
            </button>
          </Link>
        </div>

        {/* ====================== */}
        {/* Search + Dropdown */}
        {/* ====================== */}
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-2xl">
            <form
              onSubmit={handleSearch}
              className="flex flex-col sm:flex-row items-center gap-3"
            >
              {/* Search Input */}
              <input
                type="search"
                placeholder="Search article"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 text-base sm:text-lg rounded-full border border-gray-300 bg-gray-100 py-3 sm:py-4 pl-5 pr-4 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm"
              />

              {/* Dropdown beside input */}
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="text-base sm:text-lg rounded-full border border-gray-300 bg-white px-4 py-3 sm:py-4 text-gray-800 cursor-pointer focus:ring-2 focus:ring-blue-200 shadow-sm"
              >
                <option disabled>Select Category</option>
                <option value="IT Consulting">IT Consulting</option>
                <option value="IT Services">IT Services</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Product Development">Product Development</option>
                <option value="Software Testing">Software Testing</option>
              </select>

              {/* Search Button */}
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 sm:py-4 rounded-full bg-blue-700 text-white text-base sm:text-lg font-semibold shadow-md hover:bg-blue-800 ring-2 ring-white transition-all"
                aria-label="Search"
              >
                Search
              </button>
            </form>
          </div>
        </div>

        {/* ====================== */}
        {/* Hero Image Section */}
        {/* ====================== */}
        <div className="mt-12 relative overflow-visible">
          <div className="w-full h-60 sm:h-72 md:h-80 lg:h-96 relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/Deloite.png"
              alt="City buildings background"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-900/90 to-transparent pointer-events-none" />
          </div>

          {/* Girl Image */}
          <div
            className="absolute right-0 bottom-0 z-50 pointer-events-none translate-x-4 sm:translate-x-10 lg:translate-x-20"
            aria-hidden
          >
            <div className="w-36 sm:w-48 md:w-56 lg:w-72">
              <Image
                src="/images/girls.png"
                alt="Girl pointing illustration"
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
