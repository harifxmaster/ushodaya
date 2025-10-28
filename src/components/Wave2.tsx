"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Floating wave motion
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

// Fade-in + slide-up animation
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

export default function Wave2() {
  return (
    <motion.div
      className="min-w-full flex flex-col items-center justify-start text-center bg-white relative px-4 pt-20 pb-10 overflow-hidden"
      initial="hidden"
      animate="show"
      variants={fadeInUp}
    >
      {/* Back link */}
      <motion.div variants={fadeInUp} transition={{ delay: 0.2 }}>
        <Link
          href="/services"
          className="text-sm text-blue-700 font-semibold mb-4 hover:underline inline-block"
        >
          &lt; BACK
        </Link>
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="text-3xl text-gray-600 font-extrabold mb-3"
        variants={fadeInUp}
        transition={{ delay: 0.4 }}
      >
        Service Details
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-gray-500 text-sm max-w-md"
        variants={fadeInUp}
        transition={{ delay: 0.6 }}
      >
        We will help a client’s problems to develop the products they have with
        high quality. Change the appearance.
      </motion.p>

      {/* Left floating wave */}
      <motion.div
        className="absolute left-3 top-2/4 transform -translate-y-1/2 bg-transparent"
        variants={floatingWave}
        initial="initial"
        animate="animate"
      >
        <Image
          src="/images/wave.png"
          alt="left squiggle"
          width={80}
          height={40}
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Right floating wave */}
      <motion.div
        className="absolute right-0.5 top-2/4 transform -translate-y-1/2 bg-transparent"
        variants={floatingWave}
        initial="initial"
        animate="animate"
      >
        <Image
          src="/images/wave.png"
          alt="right squiggle"
          width={80}
          height={40}
          className="object-contain"
          priority
        />
      </motion.div>
    </motion.div>
  );
}
