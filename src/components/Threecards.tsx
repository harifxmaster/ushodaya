"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const blogs = [
  {
    slug: "future-of-work",
    title: "Top 5 IT Trends Transforming Businesses in 2025.",
    author: "Sakshi",
    role: "Verified Author",
    date: "23 October",
    img: "/images/top1.jpg",
    avatar: "/images/Bigp1.png",
    category: "IT Services",
  },
  {
    slug: "it-consulting",
    title: "Tech Stacks Audit: Asset or Legacy Trap",
    description:
      "Audit, modernise, and optimise your tech stack to boost performance with expert IT consulting services.",
    author: "Sakshi",
    role: "Verified Author",
    date: "28 October",
    img: "/images/a2.jpg",
    avatar: "/images/Bigp1.png",
    category: "IT Consulting",
  },
  {
    slug: "software-testing",
    title: "Role of SaaS Software Testing in Building Secure Products",
    description:
      "Discover how WT Softech’s expert software testing ensures SaaS reliability and why regular testing is essential",
    author: "Sai Teja",
    role: "Verified Author",
    date: "30 October",
    img: "/images/a5.jpg",
    avatar: "/images/sai.png",
    category: "Software Testing",
  },
  {
    slug: "product-development",
    title: "How CTOs Can Build Powerful Generative AI Products",
    description:
      "Discover how CTOs can build innovative Generative AI products beyond ChatGPT with strategic AI consulting for scalable, future-ready solutions.",
    author: "Priyajeet",
    role: "Verified Author",
    date: "03 November",
    img: "/images/a4.jpg",
    avatar: "/images/sai.png",
    category: "Product Development",
  },
];

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

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter(
          (blog) =>
            blog.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <main className="bg-white w-full pt-10 md:pt-14">
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-6">
        {/* ✅ Category Tabs */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300
                ${
                  activeCategory === category
                    ? "bg-[#1A3C8C] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ✅ Section Title */}
        <h2 className="text-[24px] font-bold text-[#1A3C8C] mb-6">
          {activeCategory === "All" ? "All Blogs" : `${activeCategory} Blogs`}
        </h2>

        {/* ✅ Blog Cards */}
        {filteredBlogs.length === 0 ? (
          <p className="text-gray-500 text-center text-lg mb-0 pb-0">
            Thank you for your patience! We’re updating this article soon — check back later. 🙏
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 mb-0 pb-0">
            {filteredBlogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blogs/${blog.slug}`}
                className="group relative isolate overflow-hidden rounded-2xl shadow-lg h-[320px] ring-1 ring-black/5 transition hover:shadow-xl"
              >
                <Image
                  src={blog.img}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-semibold leading-snug">
                    {blog.title}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center">
                      <Image
                        src={blog.avatar}
                        alt={blog.author}
                        width={26}
                        height={26}
                        className="rounded-full"
                      />
                      <div className="ml-2">
                        <p className="text-sm font-medium">{blog.author}</p>
                        <p className="text-xs text-white/80">{blog.role}</p>
                      </div>
                    </div>
                    <span className="text-sm">{blog.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
