"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

// Fade-in + slide-up animation
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Wave2() {
  return (
    <motion.div
      className="w-full flex flex-col items-center justify-start text-center bg-gradient-to-b from-blue-50/50 via-white to-white relative px-4 pt-32 sm:pt-36 pb-8 overflow-hidden"
      initial="hidden"
      animate="show"
      variants={fadeInUp}
    >
      {/* Background Soft Ambient Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-blue-400/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Back button */}
      <motion.div variants={fadeInUp} transition={{ delay: 0.1 }}>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-xs sm:text-sm transition-all duration-200 border border-blue-200/80 shadow-xs mb-4 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 transform group-hover:-translate-x-0.5 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Services
        </Link>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#061047] tracking-tight mb-3"
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
      >
        Service Details
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-gray-600 text-base sm:text-lg max-w-xl leading-relaxed"
        variants={fadeInUp}
        transition={{ delay: 0.3 }}
      >
        We build high-performance, future-proof digital solutions tailored to solve your unique business challenges.
      </motion.p>
    </motion.div>
  );
}
