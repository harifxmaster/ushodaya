"use client";

import { motion, Transition, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const transition: Transition = { duration: 0.7, ease: [0.42, 0, 0.58, 1] };

const textVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ...transition, delay: 0.3 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition },
};

// ✅ Define type for cards
interface Card {
  color: string;
  title: string;
  text: string;
  iconColor: string;
  iconImage?: string;
  svgPath?: string; // <-- optional property added
}

export default function Hero() {
  const cards: Card[] = [
    {
      color: "from-blue-100 to-blue-50",
      title: "Data-Backed Growth",
      text: "Our experts analyse data and use real numbers to boost yours.",
      iconColor: "text-blue-600",
      iconImage: "/icons/data.png",
    },
    {
      // ✅ Changed to match 1st box background
      color: "from-blue-100 to-blue-50",
      title: "Real Results at a Realistic Pace",
      text: "We don’t provide any timeline for results. We focus on our work and results just follow!",
      iconColor: "text-blue-600",
      iconImage: "/icons/real.png",
    },
    {
      color: "from-blue-700 to-blue-500 text-white",
      title: "Strength & Security",
      text: "Our IT solutions solidify your foundation and offer unparalleled security for sensitive information.",
      iconColor: "text-white",
      iconImage: "/icons/strength.png",
    },
  ];

  return (
    <section className="relative w-full bg-[var(--background)] mb-10 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hero-wave-bg.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/20 via-transparent to-white/90" />
      </div>

      {/* Hero Text & Buttons */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-32 flex flex-col items-center justify-center text-center">
        <motion.div
          className="flex flex-col items-center justify-center w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--primary)] leading-tight tracking-tight">
            Holistic Growth <br className="hidden xl:block" /> for Your Business
          </h1>
          <p className="mt-6 text-[var(--foreground)] text-base sm:text-lg max-w-2xl mx-auto">
            We are the leading full-service digital marketing and IT solutions
            company. From small-scale to large-scale firms, we help you grow to heights you
            never imagined.
          </p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto"
            variants={buttonVariants}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[var(--brand)] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all hover:shadow-lg w-full sm:w-auto"
                style={{ backgroundColor: 'var(--brand)', color: '#fff', border: 'none' }}
              >
                Get Quote Now
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/about"
                className="inline-flex items-center justify-center bg-white text-[var(--brand)] font-semibold px-8 py-3 rounded-lg shadow-sm border border-[var(--border)] transition-all hover:bg-gray-50 w-full sm:w-auto"
                style={{ backgroundColor: '#fff', color: 'var(--brand)', borderColor: 'var(--border)' }}
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Feature Cards */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 mt-10 md:mt-[-80px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-12">
        {cards.map((card, index) => {
          // Card 3 is brand blue, Card 1 & 2 are ice white
          const isBrandCard = index === 2;
          const cardBg = isBrandCard ? "bg-[var(--brand)]" : "bg-[var(--background)] border border-[var(--border)]";
          const titleColor = isBrandCard ? "text-white" : "text-[var(--primary)]";
          const textColor = isBrandCard ? "text-white/90" : "text-[var(--foreground)]";

          return (
            <motion.div
              key={index}
              className={`${cardBg} shadow-sm rounded-xl p-8 text-left hover:shadow-md transition-all`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ ...transition, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              style={isBrandCard ? { backgroundColor: 'var(--brand)' } : { backgroundColor: 'var(--background)' }}
            >
              <div className={`mb-6 flex justify-start`}>
                {card.iconImage ? (
                  <div className={`relative w-12 h-12 flex items-center justify-center`}>
                    <Image
                      src={card.iconImage}
                      alt={card.title}
                      width={48}
                      height={48}
                      className={`w-10 h-10 object-contain ${isBrandCard ? 'brightness-0 invert' : ''}`}
                    />
                  </div>
                ) : (
                  card.svgPath && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`w-10 h-10 ${isBrandCard ? 'text-white' : 'text-[var(--brand)]'}`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={card.svgPath}
                      />
                    </svg>
                  )
                )}
              </div>

              <h3 className={`text-xl font-bold mb-3 ${titleColor}`} style={isBrandCard ? { color: '#fff' } : { color: 'var(--primary)' }}>
                {card.title}
              </h3>
              <p className={`text-sm leading-relaxed ${textColor}`} style={isBrandCard ? { color: 'rgba(255,255,255,0.9)' } : { color: 'var(--foreground)' }}>
                {card.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
