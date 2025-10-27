"use client";

import { motion, Transition, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const transition: Transition = { duration: 0.7, ease: [0.42, 0, 0.58, 1] };

const textVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ...transition, delay: 0.3 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition },
};

// ✅ Define type for cards
interface Card {
  color: string;
  title: string;
  text: string;
  iconColor: string;
  iconImage?: string;
  svgPath?: string; // <-- optional property added
}

export default function Hero() {
  const cards: Card[] = [
    {
      color: "from-blue-100 to-blue-50",
      title: "Data-Backed Growth",
      text: "Our experts analyse data and use real numbers to boost yours.",
      iconColor: "text-blue-600",
      iconImage: "/icons/data.png",
    },
    {
      color: "from-purple-100 to-purple-50",
      title: "Real Results at a Realistic Pace",
      text: "We don’t provide any timeline for results. We focus on our work and results just follow!",
      iconColor: "text-purple-600",
      iconImage: "/icons/real.png",
    },
    {
      color: "from-blue-700 to-blue-500 text-white",
      title: "Strength & Security",
      text: "Our IT solutions solidify your foundation and offer unparalleled security for sensitive information.",
      iconColor: "text-white",
      iconImage: "/icons/strength.png",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-blue-50 to-white mb-10">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/Girl.png"
          alt="Business Woman"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-transparent"></div>
      </div>

      {/* Hero Text & Buttons */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="flex flex-col justify-center text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#252B42] leading-tight">
            Holistic Growth <br className="hidden md:block" /> for Your Business
          </h1>
          <p className="mt-4 text-gray-700 text-base sm:text-lg md:text-lg">
            We are the leading full-service digital marketing and IT solutions company. From small-scale to large-scale firms, we help you grow.
          </p>

          <motion.div
            className="mt-6 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4"
            variants={buttonVariants}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
              >
                Get Quote Now
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/about"
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg shadow-md transition"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Feature Cards */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mt-10 md:mt-[-100px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={`bg-gradient-to-br ${card.color} shadow-lg rounded-xl p-6 text-center md:text-left hover:shadow-xl transition`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ ...transition, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div
              className={`mb-4 flex justify-center md:justify-start ${card.iconColor}`}
            >
              {card.iconImage ? (
                <Image
                  src={card.iconImage}
                  alt={card.title}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              ) : (
                card.svgPath && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={card.svgPath}
                    />
                  </svg>
                )
              )}
            </div>

            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p
              className={
                card.color.includes("text-white")
                  ? "text-white"
                  : "text-gray-700"
              }
            >
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
