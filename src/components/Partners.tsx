"use client";

import { motion, Transition, Variants } from "framer-motion";
import Image from "next/image";

const partners = [
  "/images/memss.png",
  "/images/fX.png",
  "/images/san.png",
  "/images/will.png",
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
    <section id="partners" className="w-full">
      <div className="w-full bg-gradient-to-r from-blue-900 to-blue-600 py-12 px-6 text-center text-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Our Trusted Tech Partners & Toolkits
        </h2>
      </div>

      <div className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 sm:gap-8 place-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {partners.map((logo, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transform transition-transform hover:-translate-y-2 hover:scale-105"
            >
              <Image
                src={logo}
                alt={`Partner ${index + 1}`}
                width={160}
                height={80}
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
