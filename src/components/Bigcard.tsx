"use client";

import { motion, Transition, Variants } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { JSX, useState } from "react";

// ✅ Article Type
type Article = {
  id: number;
  title: string;
  slug: string;
  image: string;
  author: string;
  avatar: string;
  date: string;
  featured?: boolean;
};

// ✅ Articles List
const ARTICLES: Article[] = [
  {
    id: 1,
    title: "IT Services",
    slug: "future-of-work",
    image: "/images/a1.jpg",
    author: "sakshi",
    avatar: "/images/Bigp1.png",
    date: "23 October",
    featured: true,
  },
  {
    id: 2,
    title: "IT Consulting",
    slug: "it-consulting",
    image: "/images/a2.jpg",
    author: "Sakshi",
    avatar: "/images/Bigp1.png",
    date: "28 October",
    featured: true,
  },
  {
    id: 3,
    title: "Digital Marketing",
    slug: "digital-marketing",
    image: "/images/a3.jpg",
    author: "Lina Hicks",
    avatar: "/images/Bigp1.png",
    date: "02 May",
  },
  {
    id: 4,
    title: "Product Development",
    slug: "product-development",
    image: "/images/a4.jpg",
    author: "Tyler Murray",
    avatar: "/images/Bigp2.png",
    date: "02 May",
  },
    {
    id: 5,
    title: "Software Testing",
    slug: "software-testing",
    image: "/images/a5.jpg",
    author: "Warren Casey",
    avatar: "/images/Bigp3.png",
    date: "02 May",
  },
];

// ✅ Animations
const transition: Transition = { duration: 0.6, ease: [0.42, 0, 0.58, 1] };

const featuredVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition },
};

const normalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { ...transition, delay: custom * 0.2 },
  }),
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition },
};

export default function ArticlesSection(): JSX.Element {
  const router = useRouter();
  const [showMessage, setShowMessage] = useState(false);

  // ✅ Handle Clicks
  const handleRedirect = (slug: string) => {
    if (slug === "future-of-work" || slug === "it-consulting") {
      router.push(`/blogs/${slug}`);
    } else {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3500);
    }
  };

  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            All Articles
          </h2>
          <p className="text-gray-500 mt-2 max-w-2xl">
            Check out the most recent trends, technological advancements,
            strategies, and much more regarding IT and digital marketing.
          </p>
        </div>

        <div className="space-y-8">
          {/* ✅ Featured Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ARTICLES.filter((a) => a.featured).map((a) => (
              <motion.article
                key={a.id}
                className="rounded-xl overflow-hidden relative shadow-md cursor-pointer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={featuredVariants}
                onClick={() => handleRedirect(a.slug)}
              >
                <div className="relative w-full h-[320px] md:h-[360px]">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />

                  <button
                    className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-emerald-700 transition"
                    aria-label="Featured Article"
                  >
                    FEATURED
                  </button>
                </div>

                <div className="absolute left-6 right-6 bottom-6 text-white">
                  <h3 className="text-xl md:text-2xl font-semibold leading-snug drop-shadow-sm">
                    {a.title}
                  </h3>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white">
                        <Image
                          src={a.avatar}
                          alt={a.author}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div className="text-sm">
                        <div className="font-medium">{a.author}</div>
                        <div className="text-blue-100 text-xs">
                          Verified writer
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-blue-100">{a.date}</div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* ✅ Normal Articles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ARTICLES.filter((a) => !a.featured).map((a, index) => (
              <motion.article
                key={a.id}
                className="relative rounded-xl overflow-hidden shadow-md cursor-pointer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
                variants={normalVariants}
                onClick={() => handleRedirect(a.slug)}
              >
                <div className="relative w-full h-[260px]">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/75 to-transparent" />
                </div>

                <div className="absolute inset-x-5 bottom-5 text-white">
                  <h4 className="text-lg font-semibold leading-snug">
                    {a.title}
                  </h4>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-white">
                        <Image
                          src={a.avatar}
                          alt={a.author}
                          width={36}
                          height={36}
                          className="object-cover"
                        />
                      </div>
                      <div className="text-sm">
                        <div className="font-medium">{a.author}</div>
                        <div className="text-blue-100 text-xs">
                          Verified writer
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-blue-100">{a.date}</div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* ✅ More Articles Button */}
        {/* <motion.div
          className="mt-10 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={buttonVariants}
        >
          <motion.button
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/blogs")}
          >
            More articles
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div> */}
      </div>

      {/* ✅ Popup Message */}
      {showMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed top-6 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg text-sm font-medium z-50"
        >
          Thank you for your patience! We’re updating this article soon. Please
          check back later. 🙏
        </motion.div>
      )}
    </section>
  );
}
