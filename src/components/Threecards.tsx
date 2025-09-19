"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const blogs = [
  {
    slug: "future-of-work",
    title: "Future of Work",
    description: "Majority of people will work in jobs that don’t exist today.",
    author: "Lina Hicks",
    role: "Verified Author",
    date: "02 May",
    img: "/images/c3.png",
    avatar: "/images/Bigp1.png",
  },
  {
    slug: "future-of-data",
    title: "Future of Data",
    description:
      "Thanks to never-ending piles of data & the amount of insight.",
    author: "Tyler Murray",
    role: "Verified Author",
    date: "02 May",
    img: "/images/c2.png",
    avatar: "/images/Bigp2.png",
  },
  {
    slug: "future-of-learning",
    title: "Future of Learning",
    description:
      "A constant ability to learn will be one the most crucial skills.",
    author: "Warren Casey",
    role: "Verified Author",
    date: "02 May",
    img: "/images/vrcamera.png",
    avatar: "/images/Bigp3.png",
  },
];

export default function ThreeCards() {
  const searchParams = useSearchParams();
  const [filteredBlogs, setFilteredBlogs] = useState<typeof blogs>([]);

  useEffect(() => {
    const search = searchParams.get("search")?.toLowerCase() || "";
    const category = searchParams.get("category")?.toLowerCase() || "";

    const results = blogs.filter((blog) => {
      const titleMatch = blog.title.toLowerCase().includes(search);
      const categoryMatch = !category || blog.title.toLowerCase().includes(category);
      return titleMatch && categoryMatch;
    });

    setFilteredBlogs(results);
  }, [searchParams]);

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-6">
        <h2 className="text-[24px] font-bold text-[#1A3C8C] mb-6">
          Search Results
        </h2>

        {filteredBlogs.length === 0 ? (
          <p className="text-gray-500 text-center text-lg">No blogs present</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {filteredBlogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blogs/${blog.slug}`}
                className="group relative isolate overflow-hidden rounded-2xl shadow-lg h-[360px] ring-1 ring-black/5 transition hover:shadow-xl"
              >
                <Image
                  src={blog.img}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="text-xl font-semibold">{blog.title}</h3>
                  <p className="text-sm text-white/90 mb-3">{blog.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Image
                        src={blog.avatar}
                        alt={blog.author}
                        width={28}
                        height={28}
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
    </section>
  );
}
