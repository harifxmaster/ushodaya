"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

// Animation Variants
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
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
      ease: [0.42, 0, 0.58, 1], // cubic bezier for smooth easing
    },
  },
};

const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

export default function ITFoundationSection() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white mb-20 py-16 px-6 md:px-20">
      <motion.div
        className="grid md:grid-cols-2 items-center gap-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Image Section */}
        <motion.div variants={slideFromLeft} className="flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/Three.png"
              alt="IT Foundation"
              width={800}
              height={600}
              className="w-150 h-auto object-cover"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div variants={fadeInUp}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold leading-snug"
            variants={fadeInUp}
          >
            We Create A Goal-Focused IT <br />
            Foundation & Digital Presence
          </motion.h2>

          <motion.p
            className="mt-6 text-lg text-gray-200 leading-relaxed"
            variants={fadeInUp}
          >
            WT Softech creates an IT foundation that is almost impossible to break.
            Additionally, our digital solutions pile upon it, giving you security
            and a presence that speaks louder to your audience. The solutions we
            curate are personalised for your needs—because we listen and craft
            strategies that align with you. We make sure reliability, scalability,
            and innovativeness tangle through every step. You can stay on top of
            every advancement that is in line with the future you envision.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
