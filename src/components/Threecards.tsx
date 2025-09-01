"use client";

import Image from "next/image";
import Link from "next/link";

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
    img: "/images/c3.png",
    avatar: "/images/Bigp3.png",
  },
];

export default function Threecards() {
  return (
    <section className="w-full bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#1A3C8C]">
              All Articles
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Check out the most recent trends, strategies, and insights.
            </p>
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`} // 👈 Navigates to detail page
              className="relative rounded-xl overflow-hidden shadow hover:shadow-lg transition group h-80"
            >

              <Image
                src={blog.img}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />


              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />


              <div className="absolute bottom-0 p-5 text-white">
                <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                <p className="text-sm mb-4 opacity-90">{blog.description}</p>


                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <Image
                      src={blog.avatar}
                      alt={blog.author}
                      width={28}
                      height={28}
                      className="rounded-xl"
                    />
                    <div className="ml-2">
                      <p className="font-medium">{blog.author}</p>
                      <p className="text-xs opacity-75">{blog.role}</p>
                    </div>
                  </div>
                  <span>{blog.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
