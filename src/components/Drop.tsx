"use client";

import { motion, Transition, Variants } from "framer-motion";
import Image from "next/image";

// TypeScript-friendly transition
const transition: Transition = { duration: 0.7, ease: [0.42, 0, 0.58, 1] };

// Text animation variants
const textVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition },
};

// Image card variants
const imageVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...transition, delay: custom * 0.2 },
  }),
};

export default function Drop() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 relative flex justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start gap-10">

        {/* Text */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-snug text-gray-900">
            We <span className="underline decoration-blue-600">Recognise</span>, Realise & <br />
            Render Results That <br /> Speak Volumes
          </h2>
          <p className="text-gray-600 mt-6 leading-relaxed text-sm sm:text-base max-w-md mx-auto md:mx-0">
            Our motto is simple! We let our work speak for the worth we can add to your business.
            We are quite straightforward in our dealings – understanding your needs, conducting heavy
            discussions, offering inputs, and starting work with zeal and commitment.
            We don’t promise 6x results in 30 days. We keep it real! Things take time!
            But the results is always the sweetest deal you cannot miss.
          </p>
        </motion.div>

        {/* Images */}
        <div className="md:w-1/2 flex justify-center md:justify-end relative">
          <div className="flex flex-row sm:flex-row md:flex-row gap-4">

            {[ "/images/p1.png", "/images/p2.png", "/images/p3.png" ].map((src, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className={`w-32 sm:w-36 md:w-40 h-60 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-md
                  ${index === 1 ? '-mt-2 sm:-mt-6 md:-mt-8' : ''}
                  ${index === 2 ? 'mt-2 sm:mt-6 md:mt-8' : ''}`}
              >
                <Image
                  src={src}
                  alt={`Work Desk ${index + 1}`}
                  width={400}
                  height={800}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
