"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HoldingPage() {
  return (
    <main className="w-full bg-white overflow-hidden">
      {/* Hero Text Section */}
      <section className="w-full bg-white pt-24 sm:pt-28 md:pt-32 pb-7 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col md:flex-row items-start gap-8 md:gap-12">

          {/* Left Heading - Slide from Left */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -80 }} // Start hidden & to the left
            whileInView={{ opacity: 1, x: 0 }} // Fade in and slide to position
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="text-3xl text-gray-900 sm:text-4xl md:text-5xl font-bold leading-snug">
              Holding The Reins To <br />
              Your Success{" "}
              <span className="text-blue-600">
                With Expertise &amp; Innovation
              </span>
            </h1>
          </motion.div>

          {/* Right Paragraph - Slide from Right */}
          <motion.div
            className="md:w-1/2 flex gap-4"
            initial={{ opacity: 0, x: 80 }} // Start hidden & to the right
            whileInView={{ opacity: 1, x: 0 }} // Fade in and slide to position
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Slight delay
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-[3px] bg-blue-600 flex-shrink-0"></div>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              WT Softech is where innovation meets technology! We’re a passionate
              team of problem-solvers, who help businesses thrive with
              cutting-edge IT solutions. From product development and software
              testing to IT consulting, staffing, and digital marketing, we craft
              solutions that drive success. Whether you’re a startup or an
              enterprise, we bring expertise, creativity, and commitment to every
              project. Let’s transform your ideas into reality, optimise your
              operations, and fuel your growth. Ready to elevate your business
              with smart technology? Let’s make it happen together!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Section */}
      <section className="w-full">
        <motion.div
          className="relative w-full h-64 sm:h-80 md:h-[500px]"
          initial={{ opacity: 0, y: 50 }} // Start hidden and below
          whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            src="/images/sean.png"
            alt="Holding Image"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </section>
    </main>
  );
}
