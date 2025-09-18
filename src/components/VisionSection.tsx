"use client";

import { motion } from "framer-motion";

export default function VisionSection() {
  const stats = [
    { value: "20+", label: "Years of Experience" },
    { value: "100+", label: "Successful Projects" },
    { value: "80%", label: "Client Retention Rate" },
    { value: "50+", label: "Industries Served" },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-12 rounded-lg px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 80 }} // Start hidden and shifted to the right
            whileInView={{ opacity: 1, x: 0 }} // Fade in and slide to final position
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: index * 0.2, // staggered animation
            }}
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% visible
            className="relative"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">{stat.value}</h2>
            <p className="mt-2 text-sm sm:text-base font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
