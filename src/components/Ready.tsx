"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Variants for container and elements
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

export default function Ready() {
  return (
    <section className="relative bg-blue-900 text-white overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/images/Readypic.png"
          alt="Call to Action"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Blue Overlay */}
      <motion.div
        className="absolute inset-0 bg-blue-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Heading */}
        <motion.h2
          className="text-2xl md:text-3xl font-semibold mb-4"
          variants={fadeInUp}
        >
          Are You Ready for a Leap that Takes You to the Next Level?
        </motion.h2>

        {/* Subheading */}
        <motion.p className="text-gray-200 mb-8" variants={fadeInUp}>
          Get in touch with our team and let&apos;s generate ideas and execute
          plans for your ultimate transformation.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex justify-center flex-wrap gap-6 md:gap-8" // ✅ Ensures spacing between buttons at all widths
          variants={fadeInUp}
        >
          {/* Contact Us Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition inline-block"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Get Consultation Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-blue-900 transition inline-block"
            >
              Get Your Free Consultation
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
