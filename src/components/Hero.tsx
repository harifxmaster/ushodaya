"use client";

import { motion, Transition, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// TypeScript-friendly transition
const transition: Transition = { duration: 0.7, ease: [0.42, 0, 0.58, 1] };

// Variants for text and cards
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

export default function Hero() {
  const cards = [
    {
      color: "from-blue-100 to-blue-50",
      title: "Data-Backed Growth",
      text: "Our experts analyse data and use real numbers to boost yours.",
      iconColor: "text-blue-600",
      svgPath:
        "M8.25 7.5V6a1.5 1.5 0 011.5-1.5h4.5A1.5 1.5 0 0115.75 6v1.5m-9 0h10.5",
    },
    {
      color: "from-purple-100 to-purple-50",
      title: "Real Results at a Realistic Pace",
      text: "We don’t provide any timeline for results. We focus on our work and results just follow!",
      iconColor: "text-purple-600",
      svgPath: "M3 3v18h18M9 17V9m4 8V5m4 12v-6",
    },
    {
      color: "from-blue-700 to-blue-500 text-white",
      title: "Strength & Security",
      text: "Our IT solutions solidify your foundation and offer unparalleled security for sensitive information.",
      iconColor: "text-white",
      svgPath: "M19.5 14.25v6m-3-3h6M4.5 6.75V21h9.75m-6-6.75H15M15 6h.008v.008H15V6z",
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
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent"></div>
      </div>

      {/* Hero Text & Buttons */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="z-10 flex flex-col justify-center text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Holistic Growth <br className="hidden md:block" /> for Your Business
          </h1>
          <p className="mt-4 text-gray-700 text-base md:text-lg">
            We are the leading full-service digital marketing and IT solutions
            company in the market. From small-scale to large-scale firms, we’re
            adept at helping you grow.
          </p>

          <motion.div
            className="mt-6 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4"
            variants={buttonVariants}
          >
            {/* Get Quote button -> Contact page */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition inline-block text-center"
              >
                Get Quote Now
              </Link>
            </motion.div>

            {/* Learn More button -> About Us page */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/about"
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg shadow-md transition inline-block text-center"
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
            <div className={`mb-4 flex justify-center md:justify-start ${card.iconColor}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={card.svgPath} />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className={card.color.includes("text-white") ? "text-white" : "text-gray-700"}>
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
