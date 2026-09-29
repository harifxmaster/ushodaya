"use client";

import { motion, Transition, Variants } from "framer-motion";
import Image from "next/image";

// TypeScript-friendly transition
const transition: Transition = { duration: 0.8, ease: [0.42, 0, 0.58, 1] };

// Variants for text and image
const textVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition },
};

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image with motion */}
        <motion.div
          className="flex justify-center"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="/images/hi.png"
            alt="Team working together"
            className="w-[500px] h-[450px] object-cover rounded-xl shadow-2xl"
          />
        </motion.div>

        {/* Text with motion */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug !text-white">
            We Create A Goal-Focused IT Foundation & <br />
            Digital Presence
          </h2>
          <p className="mb-6 text-lg text-blue-100 leading-relaxed">
            Ushodaya Services creates an IT foundation that is built for resilience, scalability, and security.
            Additionally, our digital solutions empower your brand with high performance and commanding presence.
            Every solution is tailored to your strategic needs through dedicated craftsmanship.
          </p>
          <p className="mb-6 text-lg text-blue-100 leading-relaxed">
            We make sure reliability, scalability, and innovation guide every step so you stay at the forefront of modern technology.
          </p>
          <motion.button
            className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
