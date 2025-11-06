"use client";

import { client } from "@/lib/client";
import { urlFor } from "@/lib/image";
import { allBlogsQuery } from "@/lib/query";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Author = {
  name: string;
  verified?: boolean;
  avatar?: { asset?: { url?: string } };
};

type Article = {
  title: string;
  excerpt?: string;
  slug: { current: string };
  coverImage?: { asset?: { url?: string } };
  publishedAt: string;
  category?: { title?: string };
  author?: Author;
};

export default function BlogListClient() {
  const [articles, setArticles] = useState<Article[]>([]);
  const searchParams = useSearchParams();
  const categoryFromURL = searchParams?.get("category") || "";
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "IT Consulting",
    "IT Services",
    "Product Development",
    "Digital Marketing",
    "Software Testing",
  ];

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await client.fetch(allBlogsQuery);
      setArticles(data);
    };
    fetchArticles();
  }, []);

  useEffect(() => {
    if (categoryFromURL) {
      const formatted = categoryFromURL
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
      setSelectedCategory(formatted);

      const section = document.getElementById("recent-articles");
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [categoryFromURL]);

  const displayedArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((article) => article.category?.title === selectedCategory);

  return (
    <section id="recent-articles" className="scroll-mt-24">
      {/* Category Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs border ${
              selectedCategory === cat
                ? "bg-blue-700 text-white"
                : "border-blue-700 text-blue-700 hover:bg-gray-200"
            } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {displayedArticles.length === 0 && (
        <p className="text-center text-gray-500 text-sm">
          No articles found in &quot;{selectedCategory}&quot; category.
        </p>
      )}

      <div className="grid md:grid-cols-3 gap-6">
        {displayedArticles.map((article, idx) => (
          <Link key={idx} href={`/blog/${article.slug.current}`}>
            <div className="rounded-xl overflow-hidden shadow-md relative cursor-pointer hover:scale-105 transition-transform duration-300">
              <Image
                src={article.coverImage?.asset?.url || "/fallback.jpg"}
                alt={article.title || "Article cover image"}
                width={500}
                height={250}
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent p-3 flex flex-col justify-end">
                <h3 className="text-white font-semibold text-base">{article.title}</h3>
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center space-x-2">
                    {article.author?.avatar?.asset?.url ? (
                      <Image
                        src={urlFor(article.author.avatar).width(28).height(28).url()}
                        alt={article.author?.name || "Author avatar"}
                        width={38}
                        height={38}
                        className="w-7 h-7 rounded-full"
                      />
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-gray-300" />
                    )}
                    <div>
                      <p className="text-white text-[16px]">{article.author?.name || "Admin"}</p>
                      {article.author?.verified && (
                        <p className="text-green-400 text-[14px]">✔ Verified writer</p>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-300 text-[12px]">
                    {new Date(article.publishedAt).toLocaleDateString("en-US", {
                      day: "2-digit",
                      month: "short",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
