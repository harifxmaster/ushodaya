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
    img: "/images/vrcamera.png",
    avatar: "/images/Bigp3.png",
  },
];

export default function RecentArticles() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      {/* container width tuned to match screenshot */}
      <div className="mx-auto w-full max-w-[1180px] px-4 md:px-6">
        {/* header row */}
        <div className="mb-8 md:mb-10 flex items-start justify-between">
          <div>
            <h2 className="text-[20px] md:text-[24px] font-bold leading-tight text-[#1A3C8C]">
              Recent Articles
            </h2>
            <p className="mt-1 text-[13px] md:text-[14px] text-slate-500">
              Stay updated on the valuable resources we share frequently.
            </p>
          </div>

          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300/80 px-3.5 py-2 text-[13px] font-medium text-slate-700 shadow-sm hover:bg-slate-50"
          >
            View all <span aria-hidden>→</span>
          </Link>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className={[
                // fixed heights to replicate screenshot precisely
                "group relative isolate overflow-hidden",
                "rounded-2xl shadow-[0_10px_30px_-8px_rgba(16,24,40,.2)]",
                "h-[300px] sm:h-[330px] lg:h-[360px]",
                "ring-1 ring-black/5",
                "transition will-change-transform hover:shadow-[0_14px_36px_-6px_rgba(16,24,40,.28)]",
              ].join(" ")}
            >
              <Image
                src={blog.img}
                alt={blog.title}
                fill
                priority={false}
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />

              {/* bottom gradient (for legible text) */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

              {/* subtle color bloom in top-right like the reference */}
              <div className="pointer-events-none absolute inset-0 mix-blend-screen [background:radial-gradient(120%_90%_at_95%_10%,rgba(109,40,217,0.35),transparent_60%)]" />

              {/* content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white">
                <h3 className="mb-1.5 text-[18px] md:text-[20px] font-semibold leading-snug">
                  {blog.title}
                </h3>
                <p className="mb-4 line-clamp-2 text-[13px] md:text-[14px] text-white/90">
                  {blog.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src={blog.avatar}
                      alt={blog.author}
                      width={28}
                      height={28}
                      className="rounded-full"
                    />
                    <div className="ml-2 leading-tight">
                      <p className="text-[13px] font-medium">{blog.author}</p>
                      <p className="text-[12px] text-white/80">{blog.role}</p>
                    </div>
                  </div>
                  <span className="text-[13px] md:text-[14px] text-white/95">
                    {blog.date}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
