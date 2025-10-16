"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Floating wave animation
const floatingWave: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Fade + slide-up animation
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

export default function Wave() {
  return (
    <main className="bg-white">
      <section className="relative flex flex-col items-center text-center py-20 sm:py-28 md:py-40 px-4 overflow-hidden bg-white">
        {/* Left Floating Wave */}
        <motion.div
          className="absolute left-4 top-16 sm:left-10 sm:top-28 md:left-20 md:top-40"
          variants={floatingWave}
          initial="initial"
          animate="animate"
        >
          <Image
            src="/images/wave.png"
            alt="wave"
            width={80}
            height={50}
            className="opacity-70"
          />
        </motion.div>

        {/* Right Floating Wave */}
        <motion.div
          className="absolute right-4 top-16 sm:right-10 sm:top-28 md:right-20 md:top-40"
          variants={floatingWave}
          initial="initial"
          animate="animate"
        >
          <Image
            src="/images/wave.png"
            alt="wave"
            width={80}
            height={50}
            className="opacity-70"
          />
        </motion.div>

        {/* Breadcrumb */}
        <motion.h2
          className="text-sm sm:text-base md:text-lg text-blue-600 font-medium flex flex-wrap gap-1"
          variants={fadeInUp}
          initial="hidden"
          animate="show"
        >
          <Link
            href="/"
            className="hover:underline hover:text-blue-800 transition-colors"
          >
            Home
          </Link>
          <span>/</span>
          <Link
            href="/services/service2"
            className="underline text-blue-600 hover:text-blue-800 transition-colors"
          >
            Services
          </Link>
        </motion.h2>

        {/* Main Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-600 mt-3"
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
        >
          Services
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-gray-600 max-w-md sm:max-w-xl mt-6 text-sm sm:text-base leading-relaxed"
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.4 }}
        >
          We will help a client&apos;s problems to develop the products they
          have with high quality. Change the appearance.
        </motion.p>
      </section>
    </main>
  );
}
