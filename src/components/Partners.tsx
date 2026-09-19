"use client";

import { motion, Transition, Variants } from "framer-motion";
import Image from "next/image";

const partners = [
  // "/images/memss.png",
  "/images/fX.png",
  "/images/seo.png",
  "/images/best.png",
  "/images/pixel.png",
  "/images/ush.png",
];

// Define transition separately to satisfy TS
const transition: Transition = {
  duration: 0.5,
  ease: [0.42, 0, 0.58, 1], // cubic-bezier equivalent
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Partners() {
  return (
    <section id="partners" className="w-full bg-[var(--background)] pt-16 pb-8 sm:pt-24 sm:pb-12 px-6 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto">
        {/* Simple, clean heading */}
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--primary)] uppercase tracking-wide">
            Our Trusted Tech Partners & Toolkits
          </h2>
          <div className="w-16 h-1 bg-[var(--brand)] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Minimalist Logo Grid without cards or shadows */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-12 sm:gap-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {partners.map((logo, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center justify-center transition-all duration-300 hover:scale-105 opacity-80 hover:opacity-100"
            >
              <Image
                src={logo}
                alt={`Partner ${index + 1}`}
                width={150}
                height={75}
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
