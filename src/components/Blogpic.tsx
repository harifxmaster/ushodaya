"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { JSX, useState } from "react";

export default function Blogpic(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const router = useRouter();

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();

    // Trim and lowercase the search term for comparison
    const query = searchQuery.trim().toLowerCase();

    // Directly navigate to the "Future of Work" blog page
    if (query === "future of work") {
      router.push("/blogs/future-of-work");
      return;
    }

    // Optional: You can match category too
    if (selectedCategory.toLowerCase() === "future of work") {
      router.push("/blogs/future-of-work");
      return;
    }

    // If nothing matches
    alert("No blogs present for: " + searchQuery);
  };

  return (
    <section className="bg-white overflow-visible">
      <div className="w-full mx-auto px-6 md:px-8 relative text-center">
        {/* Heading */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-20">
          <h1
            className="text-2xl md:text-4xl font-extrabold leading-tight"
            style={{ color: "#121416" }}
          >
            Insights, News &amp; Articles by{" "}
            <span className="font-serif">WT Softech</span>
          </h1>

          {/* Explore More Button */}
          <Link href="/contact">
            <button
              className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold shadow-2xl ring-2 ring-white"
              aria-label="Explore more"
            >
              EXPLORE MORE
            </button>
          </Link>
        </div>

        {/* Search Section */}
        <div className="mt-8 md:mt-10 flex justify-center">
          <div className="w-full max-w-2xl">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="search"
                placeholder="Search article"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-gray-200 bg-gray-100 py-3 pl-4 pr-28 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 inline-flex items-center px-5 py-2 rounded-full bg-blue-600 text-white font-medium ring-4 ring-white shadow"
                aria-label="Search"
              >
                Search
              </button>
            </form>

            {/* Category Dropdown */}
            <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-8">
              <label htmlFor="category-select" className="sr-only">
                Select blog category
              </label>
              <select
                id="category-select"
                className="w-full sm:w-60 rounded-md border border-gray-200 px-4 py-2 bg-white"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                aria-label="Select blog category"
              >
                <option value="Future of Work">Future of Work</option>
              </select>
            </div>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="mt-10 relative overflow-visible">
          <div className="w-full h-64 md:h-80 lg:h-96 relative overflow-hidden">
            <Image
              src="/images/Deloite.png"
              alt="city buildings"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-blue-800/90 to-transparent pointer-events-none" />
          </div>

          {/* Girl Image */}
          <div
            className="absolute right-0 bottom-0 z-50 pointer-events-none translate-x-4 md:translate-x-10 lg:translate-x-20"
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
