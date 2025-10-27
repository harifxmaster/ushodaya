"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Sky() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="flex flex-col md:flex-row items-stretch gap-10">

          {/* Left Side - Image Animation */}
          <motion.div
            className="w-full md:w-7/12"
            initial={{ opacity: 0, x: -80 }} // start hidden and shifted left
            whileInView={{ opacity: 1, x: 0 }} // fade in and slide to normal position
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative w-full h-64 md:h-[420px] lg:h-[480px] rounded-md overflow-hidden shadow-lg">
              <Image
                src="/images/Build.png"
                alt="Skyscrapers"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Right Side - Text Animation */}
          <motion.div
            className="w-full md:w-5/12 flex items-center"
            initial={{ opacity: 0, x: 80 }} // start hidden and shifted right
            whileInView={{ opacity: 1, x: 0 }} // fade in and slide to normal position
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // slight delay for stagger effect
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-start">
              {/* Blue Vertical Line */}
              <motion.div
                className="hidden md:block w-[3px] bg-[#3b82f6] rounded-sm mr-6 mt-3 h-[220px]"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              />

              {/* Text Content */}
              <div className="max-w-[360px]">
                <h3 className="text-2xl md:text-[26px] font-semibold text-[#0f2540] mb-4">
                  Our Vision
                </h3>

                <p className="text-gray-800 text-[18px] md:text-[18px] leading-7">
                  Our vision is to be a global leader in technology-driven transformation.
                  The way businesses operate and grow needs a radical transformation, which we power.
                  We aim to create a future where innovation, collaboration, and smart solutions
                  drive sustainable success.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
