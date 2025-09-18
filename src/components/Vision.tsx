"use client";

import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.3 }} // Stagger effect for children
        className="w-full text-center"
      >
        {/* Heading Animation */}
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-bold text-[#0f2540] mb-6"
        >
          A Vision of Hope & Scaling
        </motion.h2>

        {/* Paragraph Animation */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-gray-600 text-base md:text-lg leading-relaxed"
        >
          At WT Softech, innovation isn’t just a goal—it’s our foundation. Since our inception,
          we’ve been empowering businesses with smart, tailored solutions that drive real results.
          Our journey has been defined by collaboration, expertise, and a passion for helping
          organisations thrive in an ever-evolving digital landscape. With a client–first approach
          and deep industry insights, we craft strategies that fuel growth and success.
        </motion.p>
      </motion.div>
    </section>
  );
}
