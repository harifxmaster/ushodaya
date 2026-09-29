"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const BLOGS_PER_PAGE = 3;

/* ---------------- BLOG DATA ---------------- */
const blogs = [
  {
    slug: "future-of-work",
    title: "Top 5 IT Trends Transforming Businesses in 2025.",
    author: "Sakshi",
    date: "23 October",
    img: "/images/top1.jpg",
    category: "IT Services",
  },
  {
    slug: "it-consulting",
    title: "Tech Stacks Audit: Asset or Legacy Trap",
    author: "Sakshi",
    date: "28 October",
    img: "/images/a2.jpg",
    category: "IT Consulting",
  },
  {
    slug: "software-testing",
    title: "Role of SaaS Software Testing in Building Secure Products",
    author: "Sai Teja",
    date: "30 October",
    img: "/images/a5.jpg",
    category: "Software Testing",
  },
  {
    slug: "product-development",
    title: "How CTOs Can Build Powerful Generative AI Products",
    author: "Priyajeet",
    date: "03 November",
    img: "/images/a4.jpg",
    category: "Product Development",
  },
  {
    slug: "digital-marketing",
    title: "Choosing Between In-house vs Outsourced IT",
    author: "Sakshi",
    date: "18 December",
    img: "/images/house.png",
    category: "Digital Marketing",
  },
  {
    slug: "Hello-World",
    title: " How QA and Automated Testing Reduce Costs",
    author: "Sakshi",
    date: "22 December",
    img: "/images/QA.png",
    category: "Product Development",
  },
  {
    slug: "Hello",
    title: "Smarter Websites with Digital Marketing & Strong Security ",
    author: "Sakshi",
    date: "24 December",
    img: "/images/smart.png",
    category: "Digital Marketing",
  },
];

/* ---------------- CATEGORIES ---------------- */
const categories = [
  "All",
  "IT Consulting",
  "IT Services",
  "Product Development",
  "Digital Marketing",
  "Software Testing",
];

export default function BlogTabsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  /* Reset page when category changes */
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  /* Filter blogs by category */
  const filteredBlogs = useMemo(() => {
    if (activeCategory === "All") return blogs;
    return blogs.filter(
      (blog) =>
        blog.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [activeCategory]);

  /* Pagination logic */
  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);

  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * BLOGS_PER_PAGE,
    currentPage * BLOGS_PER_PAGE
  );

  return (
    <main className="w-full bg-white pt-10 pb-24">
      <div className="max-w-[1180px] mx-auto px-4">

        {/* ---------------- CATEGORY TABS ---------------- */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ---------------- BLOG GRID ---------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedBlogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="relative h-[320px] rounded-xl overflow-hidden shadow-lg group"
            >
              <Image
                src={blog.img}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <div className="absolute inset-0 bg-black/50" />

              <div className="absolute bottom-0 p-4 text-white text-center">
                <h3 className="font-semibold leading-snug">
                  {blog.title}
                </h3>
                <p className="text-sm mt-1">
                  {blog.author} • {blog.date}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* ---------------- PAGINATION ---------------- */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">

            {/* Prev */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 text-sm rounded-md border border-gray-300
                         text-gray-500 hover:bg-gray-100 disabled:opacity-40"
            >
              «
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 text-sm rounded-md border transition
                    ${
                      currentPage === page
                        ? "bg-[#1A73E8] text-white border-[#1A73E8]"
                        : "border-gray-300 text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  {page}
                </button>
              );
            })}

            {/* Next */}
            <button
              onClick={() =>
                setCurrentPage((p) => Math.min(p + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-2 text-sm rounded-md border border-gray-300
                         text-gray-500 hover:bg-gray-100 disabled:opacity-40"
            >
              »
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
