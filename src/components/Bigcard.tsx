// app/components/ArticlesSection.tsx
"use client";

import Image from "next/image";
import { JSX } from "react";

type Article = {
  id: number;
  title: string;
  image: string;         // path under /public/images/
  author: string;
  avatar: string;        // path under /public/images/
  date: string;
  featured?: boolean;
};

const ARTICLES: Article[] = [
  {
    id: 1,
    title: "How to prevent and protect your family from Carbon monoxide",
    image: "/images/bcard1.png",
    author: "Viola Marisa",
    avatar: "/images/Avatar.png",
    date: "02 May",
    featured: true,
  },
  {
    id: 2,
    title: "Motherhood is the hardest and the best job ever",
    image: "/images/bcard2.png",
    author: "Joshua William",
    avatar: "/images/Avatar2.png",
    date: "02 May",
    featured: true,
  },
  {
    id: 3,
    title: "Future of Work",
    image: "/images/article-3.jpg",
    author: "Lina Hicks",
    avatar: "/images/author-3.jpg",
    date: "02 May",
  },
  {
    id: 4,
    title: "Future of Data",
    image: "/images/article-4.jpg",
    author: "Tyler Murray",
    avatar: "/images/author-4.jpg",
    date: "02 May",
  },
  {
    id: 5,
    title: "Future of Learning",
    image: "/images/article-5.jpg",
    author: "Warren Casey",
    avatar: "/images/author-5.jpg",
    date: "02 May",
  },
];

export default function Bigcard(): JSX.Element {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            All Articles
          </h2>
          <p className="text-gray-500 mt-2 max-w-2xl">
            Check out the most recent trends, technological advancements, strategies,
            and much more regarding IT and digital marketing.
          </p>
        </div>

        {/* Grid: first row - two big cards; second row - three small cards */}
        <div className="grid grid-cols-12 gap-6">
          {/* Large featured cards (take 6 columns each on md+) */}
          {ARTICLES.filter(a => a.featured).map((a) => (
            <article
              key={a.id}
              className="col-span-12 md:col-span-6 rounded-xl overflow-hidden relative shadow-lg"
            >
              {/* background image */}
              <div className="relative w-full h-80 md:h-96">
                <Image src={a.image} alt={a.title} fill className="object-cover" />
                {/* bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-800/85 to-transparent" />
              </div>

              {/* content overlay (placed at bottom) */}
              <div className="absolute left-6 right-6 bottom-6 text-white">
                {/* badge */}
                <div className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-medium mb-3">
                  FEATURED
                </div>

                <h3 className="text-lg md:text-2xl font-semibold leading-snug drop-shadow-sm">
                  {a.title}
                </h3>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden ring-2 ring-white">
                      <Image src={a.avatar} alt={a.author} width={40} height={40} className="object-cover"/>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-white">{a.author}</div>
                      <div className="text-blue-100 text-xs">Verified writer</div>
                    </div>
                  </div>

                  <div className="text-sm text-blue-100">{a.date}</div>
                </div>
              </div>
            </article>
          ))}

          {/* Small cards (3 cards - each col-span-12 on small, col-span-4 on md+) */}
          {ARTICLES.filter(a => !a.featured).map((a) => (
            <article
              key={a.id}
              className="col-span-12 md:col-span-4 rounded-lg overflow-hidden relative shadow"
            >
              <div className="relative w-full h-56">
                <Image src={a.image} alt={a.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-800/75 to-transparent" />
              </div>

              <div className="p-4 text-white">
                <h4 className="text-md font-semibold">{a.title}</h4>

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-white">
                      <Image src={a.avatar} alt={a.author} width={32} height={32} className="object-cover" />
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-white">{a.author}</div>
                      <div className="text-blue-100 text-xs">Verified writer</div>
                    </div>
                  </div>

                  <div className="text-sm text-blue-100">{a.date}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* More articles button centered */}
        <div className="mt-8 flex justify-center">
          <button
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
            aria-label="More articles"
          >
            More articles
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
