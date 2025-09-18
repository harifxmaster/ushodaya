"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Choose() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    {
      title: "Innovative Excellence",
      content: "We bring cutting-edge solutions that drive business success.",
    },
    {
      title: "Unparalleled Expertise",
      content: "Our team consists of top professionals with years of experience.",
    },
    {
      title: "Client-Centric Approach",
      content: "We prioritize your needs to deliver customized strategies.",
    },
    {
      title: "Proven Track Record",
      content: "Our portfolio showcases successful projects and happy clients.",
    },
    {
      title: "Future-Ready Solutions",
      content: "We prepare your business for upcoming challenges and growth.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* Left Side with Zoom-In Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 mb-6">
            The value and expertise we bring cannot be found anywhere. For the
            ultimate digital impression and IT growth, you need to contact us.
          </p>
          <div className="w-full h-64 relative">
            <Image
              src="/images/Build.png"
              alt="Why Choose Us"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </motion.div>

        {/* Right Side with Accordion and Staggered Animations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.2,
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="border-b border-gray-200 py-4"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between text-left text-gray-700 font-medium focus:outline-none"
              >
                {item.title}
                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-500 text-xl"
                >
                  +
                </motion.span>
              </button>

              {/* Animated Accordion Content */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="mt-2 overflow-hidden"
                  >
                    <p className="text-gray-600 text-sm">{item.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
