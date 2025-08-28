"use client";

import Image from "next/image";

type Post = {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  avatar: string;
};

const posts: Post[] = [
  {
    title: "Future of Learning",
    excerpt: "A constant ability to learn will be one the most crucial skills",
    author: "Warren Casey",
    date: "02 May",
    image: "/images/over.png",
    avatar: "/images/Boy.png",
  },
  {
    title: "Future of Learning",
    excerpt: "A constant ability to learn will be one the most crucial skills",
    author: "Warren Casey",
    date: "02 May",
    image: "/images/over.png",
    avatar: "/images/Boy.png",
  },
  {
    title: "Future of Learning",
    excerpt: "A constant ability to learn will be one the most crucial skills",
    author: "Warren Casey",
    date: "02 May",
    image: "/images/over.png",
    avatar: "/images/Boy.png",
  },
];

export default function Cards() {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          Related Blogs
        </h2>

        {/* Scrollable Cards */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto py-2 pr-1 snap-x snap-mandatory scrollbar-hide">
          {posts.map((p, i) => (
            <article
              key={i}
              className="
                relative snap-start
                min-w-[85%] sm:min-w-[420px] md:min-w-[520px]
                max-w-[520px] h-44 sm:h-48 md:h-52
                rounded-3xl overflow-hidden
                shadow-[0_10px_30px_rgba(2,6,23,0.15)]
                hover:shadow-[0_12px_36px_rgba(2,6,23,0.22)]
                transition-transform duration-300
                hover:-translate-y-0.5
              "
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
              </div>

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-700/80 via-sky-700/65 to-blue-600/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />

              {/* Content */}
              <div className="relative h-full px-4 sm:px-6 py-3 sm:py-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-white font-semibold text-base sm:text-lg leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-white/90 text-xs sm:text-sm mt-1 line-clamp-1">
                    {p.excerpt}
                  </p>
                </div>

                {/* Author Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src={p.avatar}
                      alt={p.author}
                      width={28}
                      height={28}
                      className="rounded-full border border-white/70"
                    />
                    <div className="flex flex-col leading-tight">
                      <span className="text-white text-[12px] sm:text-[13px] font-medium">
                        {p.author}
                      </span>
                      <span className="flex items-center gap-1 text-white/85 text-[10px] sm:text-[11px]">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 20 20"
                          className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                        >
                          <circle cx="10" cy="10" r="10" fill="#22c55e" />
                          <path
                            d="M6 10.5l2.2 2.2 5-5"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Verified writer
                      </span>
                    </div>
                  </div>
                  <span className="text-white/90 text-[11px] sm:text-xs md:text-sm">
                    {p.date}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
