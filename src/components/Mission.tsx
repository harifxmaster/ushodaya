"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Mission() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center overflow-hidden">

      {/* Text Content - Slides from Right */}
      <motion.div
        initial={{ opacity: 0, x: 100 }} // start from right
        whileInView={{ opacity: 1, x: 0 }} // move to original position
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-600 mb-6">
          Our Mission
        </h2>
        <div className="flex items-start">
          <div className="w-[3px] bg-blue-600 mr-4 mt-1"></div>

          <p className="text-gray-700 leading-6 sm:leading-8 text-base sm:text-lg">
            At WT Softech, our mission is to empower businesses with
            cutting-edge technology and innovative solutions. We are always
            working to bridge the gap between ideas and execution. Our aim is to
            deliver excellence through cut-fit strategies, expert consulting,
            and seamless integration. We strive intending to drive growth,
            efficiency, and success for our clients in an ever-evolving digital
            world.
          </p>
        </div>
      </motion.div>

      {/* Image - Slides from Left */}
      <motion.div
        className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] rounded-xl overflow-hidden bg-white"
        initial={{ opacity: 0, x: -100 }} // start from left
        whileInView={{ opacity: 1, x: 0 }} // move to original position
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Image
          src="/images/Meet.png"
          alt="Mission Image"
          fill
          className="object-cover object-center rounded-xl"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </motion.div>
    </section>
  );
}
