"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";

// FAQ Data
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

// Animation Variants
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Title Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3 border border-blue-100">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061047] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Find quick answers to common questions about our development process and services.
          </p>
        </div>

        {/* FAQ List */}
        <motion.div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-blue-500 bg-blue-50/40 shadow-sm"
                    : "border-gray-200 bg-white hover:border-blue-300 hover:shadow-xs"
                }`}
                variants={itemVariants}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex justify-between items-center text-left gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#061047]">
                    {faq.question}
                  </span>

                  {/* Plus / Minus Indicator Badge */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold transition-all duration-300 ${
                      isOpen
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                        : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                    }`}
                  >
                    {isOpen ? (
                      <span className="text-xl leading-none font-bold select-none">−</span>
                    ) : (
                      <span className="text-xl leading-none font-bold select-none">+</span>
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-blue-100/60 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
