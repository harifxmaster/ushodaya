"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const faqs = [
  {
    question: "What industries do you develop products for?",
    answer:
      "We develop products for multiple industries including healthcare, finance, retail, and more. Our solutions are highly customizable.",
  },
  {
    question: "How long does product development take?",
    answer:
      "The timeline varies depending on project complexity, but typically ranges from 3 to 6 months for a full product.",
  },
  {
    question: "Can you help with scaling after the launch?",
    answer:
      "Absolutely! We provide ongoing support, scaling strategies, and infrastructure optimization after your product is live.",
  },
  {
    question: "Do you offer prototypes before full development?",
    answer:
      "Yes, we build clickable prototypes so you can validate the idea before investing in full development.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern technologies like React, Next.js, Node.js, NestJS, and cloud services like AWS and Supabase.",
  },
  {
    question: "What types of testing do you offer?",
    answer:
      "We conduct unit, integration, performance, and security testing to ensure top-notch quality.",
  },
];

// Animation variants
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function F() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-10 px-4">
      <motion.div
        className="max-w-4xl mx-auto rounded-lg p-6 bg-white shadow-lg"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        {/* Section Title */}
        <motion.h2
          className="text-2xl text-gray-800 font-bold mb-6 text-center"
          variants={itemVariants}
        >
          Frequently Asked Questions
        </motion.h2>

        {/* FAQ Items */}
        <motion.div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer border border-gray-200"
              variants={itemVariants}
              onClick={() => toggleFAQ(index)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-4 py-3 flex justify-between items-center">
                <span className="text-sm font-medium text-gray-900">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronRight className="text-purple-700 text-xs" />
                </motion.div>
              </div>

              {/* Expanding Answer */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="px-4 pb-3 text-sm text-gray-700 bg-white"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
