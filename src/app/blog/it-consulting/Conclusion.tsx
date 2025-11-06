"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ConclusionSection() {
  return (
    <section className="bg-white text-gray-800 py-16 px-5 sm:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-blue-700 mb-8"
        >
          Conclusion
        </motion.h2>

        {/* Paragraph 1 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg leading-8 mb-6"
        >
          Your tech stack either accelerates growth or anchors you to the past. When
          you treat technology as part of your strategic business plan, you unlock
          efficiency, agility, and innovation.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg leading-8 mb-6"
        >
          Partnering with experienced IT consulting and services providers helps you
          assess your current landscape, eliminate inefficiencies, and craft a
          future-ready digital ecosystem. They help you align tools with strategy,
          improve ROI, and ensure long-term scalability.
        </motion.p>

        {/* Paragraph 3 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg leading-8 mb-10"
        >
          Ready to evaluate your tech stack? Contact us today to schedule a
          comprehensive IT consulting assessment and discover how to turn your tech
          stack into a true strategic asset.
        </motion.p>

        {/* Author Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-gray-200 pt-8 flex justify-center items-center gap-4"
        >
          <Image
            src="/images/Bigp1.png"
            alt="Author Avatar"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div className="text-left">
            <p className="font-semibold text-gray-900 text-lg">Sakshi</p>
            <p className="text-gray-500 text-sm">
              Verified Author | 28 October 2025
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="/contact"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="inline-block mt-10 bg-blue-600 text-white font-semibold text-lg px-8 py-3 rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
        >
          Contact Us
        </motion.a>
      </div>
    </section>
  );
}
