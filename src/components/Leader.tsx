"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function Leader() {
  const team = [
    {
      name: "Jane Doe",
      title: "Chief Executive Officer",
      image: "/images/5.png",
    },
    {
      name: "John Smith",
      title: "Chief Operating Officer",
      image: "/images/3.png",
    },
    {
      name: "Sarah Johnson",
      title: "Chief Financial Officer",
      image: "/images/4.png",
    },
    {
      name: "Emma Thompson",
      title: "Senior Business Consultant",
      image: "/images/1.png",
    },
  ];

  // Parent container animation
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  // Each card animation
  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut", // ✅ typed correctly
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="bg-white py-16 px-4 md:px-8 text-center"
    >
      <motion.h2
        variants={item}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
      >
        Meet Our Leadership Team
      </motion.h2>

      <motion.p
        variants={item}
        className="text-gray-600 max-w-2xl mx-auto mb-12"
      >
        Here are the leaders who&apos;d be working with you for customised,
        strategic solutions, keeping you at the peak of your business.
      </motion.p>

      {/* Team Grid */}
      <motion.div
        variants={container}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10"
      >
        {team.map((member, index) => (
          <motion.div
            key={index}
            variants={item}
            className="text-center group"
          >
            <div className="relative w-full h-80 mb-4 overflow-hidden rounded-lg">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       25vw"
              />
            </div>

            {/* Member Info */}
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-blue-700 italic">{member.title}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="border border-gray-700 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-100 transition"
      >
        Meet Our Team
      </motion.button>
    </motion.section>
  );
}
