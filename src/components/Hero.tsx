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
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="65"
          height="55"
          viewBox="0 0 65 55"
          fill="none"
        >
          <g clipPath="url(#clip0_1_1317)">
            <g clipPath="url(#paint0_diamond_1_1317_clip_path)">
              <g transform="matrix(-0.00929277 0.0534832 -0.0639619 -0.0461503 36.4979 1.2428)">
                <rect
                  x="0"
                  y="0"
                  width="1325.97"
                  height="514.654"
                  fill="url(#paint0_diamond_1_1317)"
                  opacity="1"
                  shapeRendering="crispEdges"
                />
                <rect
                  x="0"
                  y="0"
                  width="1325.97"
                  height="514.654"
                  transform="scale(1 -1)"
                  fill="url(#paint0_diamond_1_1317)"
                  opacity="1"
                  shapeRendering="crispEdges"
                />
                <rect
                  x="0"
                  y="0"
                  width="1325.97"
                  height="514.654"
                  transform="scale(-1 1)"
                  fill="url(#paint0_diamond_1_1317)"
                  opacity="1"
                  shapeRendering="crispEdges"
                />
                <rect
                  x="0"
                  y="0"
                  width="1325.97"
                  height="514.654"
                  transform="scale(-1)"
                  fill="url(#paint0_diamond_1_1317)"
                  opacity="1"
                  shapeRendering="crispEdges"
                />
              </g>
            </g>
          </g>
          <defs>
            <clipPath id="paint0_diamond_1_1317_clip_path">
              <path d="M57.1179 11.9324H50.3584V5.17296C50.3584 3.9778 49.8836 2.8316 49.0385 1.9865C48.1934 1.1414 47.0472 0.666626 45.852 0.666626H18.8141C17.6189 0.666626 16.4727 1.1414 15.6276 1.9865C14.7825 2.8316 14.3077 3.9778 14.3077 5.17296V11.9324H7.54824C5.75551 11.9324 4.0362 12.6446 2.76855 13.9123C1.5009 15.1799 0.788742 16.8992 0.788742 18.6919V50.2362C0.788742 51.4314 1.26351 52.5776 2.10862 53.4227C2.95372 54.2678 4.09992 54.7426 5.29507 54.7426H59.371C60.5662 54.7426 61.7124 54.2678 62.5575 53.4227C63.4026 52.5776 63.8773 51.4314 63.8773 50.2362V18.6919C63.8773 16.8992 63.1652 15.1799 61.8975 13.9123C60.6299 12.6446 58.9106 11.9324 57.1179 11.9324ZM18.8141 5.17296H45.852V11.9324H18.8141V5.17296ZM59.371 50.2362H5.29507V29.9578H23.3204V41.2236H41.3457V29.9578H59.371V50.2362ZM27.8267 29.9578H36.8394V36.7173H27.8267V29.9578ZM5.29507 25.4514V18.6919C5.29507 18.0944 5.53246 17.5213 5.95501 17.0987C6.37756 16.6762 6.95066 16.4388 7.54824 16.4388H57.1179C57.7154 16.4388 58.2885 16.6762 58.7111 17.0987C59.1336 17.5213 59.371 18.0944 59.371 18.6919V25.4514H5.29507Z"/>
            </clipPath>
            <linearGradient id="paint0_diamond_1_1317" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
              <stop stopColor="#000080"/>
              <stop offset="0.510611" stopColor="#002BFF"/>
              <stop offset="1" stopColor="#11119B"/>
            </linearGradient>
            <clipPath id="clip0_1_1317">
              <rect width="64" height="54.2785" fill="white" transform="translate(0.333008 0.666626)"/>
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      color: "from-purple-100 to-purple-50",
      title: "Real Results at a Realistic Pace",
      text: "We don’t provide any timeline for results. We focus on our work and results just follow!",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-purple-600"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path stroke="currentColor" strokeWidth="2" d="M3 3v18h18M9 17V9m4 8V5m4 12v-6"/>
        </svg>
      ),
    },
    {
      color: "from-blue-700 to-blue-500 text-white",
      title: "Strength & Security",
      text: "Our IT solutions solidify your foundation and offer unparalleled security for sensitive information.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="51" viewBox="0 0 64 51" fill="none">
          <g clipPath="url(#clip0_1_1332)">
            <path d="M38.8557 11.4989H54.8529V16.0927H38.8557V11.4989Z" fill="white"/>
            <path d="M38.8557 22.9833H54.8529V27.577H38.8557V22.9833Z" fill="white"/>
            <path d="M38.8557 34.4675H54.8529V39.0613H38.8557V34.4675Z" fill="white"/>
            <path d="M59.4237 2.33325H4.57635C3.36452 2.33447 2.20267 2.81884 1.34578 3.68008C0.488881 4.54131 0.00694732 5.70904 0.0057373 6.92701V48.2708C0.00694732 49.4888 0.488881 50.6565 1.34578 51.5178C2.20267 52.379 3.36452 52.8634 4.57635 52.8646H59.4237C60.6354 52.8628 61.7969 52.3782 62.6536 51.5171C63.5104 50.656 63.9925 49.4886 63.9943 48.2708V6.92701C63.9931 5.70904 63.5112 4.54131 62.6543 3.68008C61.7974 2.81884 60.6355 2.33447 59.4237 2.33325ZM4.57635 6.92701H29.7147V48.2708H4.57635V6.92701ZM34.2853 48.2708V6.92701H59.4237L59.4283 48.2708H34.2853Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_1_1332">
              <rect width="64" height="50.56" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      ),
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
            <div className="mb-4 flex justify-center md:justify-start">
              {card.icon}
            </div>
            <h3 className="text-lg sm:text-xl md:text-xl font-bold mb-2 text-[#252B42]">
              {card.title}
            </h3>
            <p className={card.color.includes("text-white") ? "text-white" : "text-gray-700"}>
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
