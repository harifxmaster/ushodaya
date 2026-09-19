"use client";

import { motion, Transition } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Product Development",
    img: "/images/product.png",
  },
  {
    title: "Software Testing",
    img: "/images/St.png",
  },
  {
    title: "IT Consulting",
    img: "/images/ITC.png",
  },
  {
    title: "IT Services",
    img: "/images/ITS.png",
  },
  {
    title: "Staffing Solutions",
    img: "/images/ss.png",
  },
  {
    title: "Digital Marketing",
    img: "/images/Digital.png",
  },
];

// TypeScript-friendly transition
const transition: Transition = { duration: 0.6, ease: [0.42, 0, 0.58, 1] };

// Different directions for motion
const directions = [
  { x: -50, y: 0 }, // slide from left
  { x: 50, y: 0 },  // slide from right
  { x: 0, y: -50 }, // slide from top
  { x: 0, y: 50 },  // slide from bottom
  { x: -50, y: -50 },
  { x: 50, y: 50 },
];

export default function Services() {
  return (
    <section id="services" className="py-10 px-4 sm:px-6 md:px-12 bg-white">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-10 px-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-900">
          Services We Offer
        </h2>
        <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-3xl mx-auto">
          Ushodaya Services has expertise in IT consulting, product development, software testing,
          digital marketing, staffing solutions, IT services, and more.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{
              opacity: 0,
              x: directions[index % directions.length].x,
              y: directions[index % directions.length].y,
              scale: 0.9,
            }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            transition={transition}
            viewport={{ once: true, amount: 0.3 }}
            className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:scale-105"
          >
            {/* Image Only */}
            <div className="relative aspect-square w-full">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index === 0}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
