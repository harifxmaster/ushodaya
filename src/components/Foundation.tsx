"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

// Image stack data
const stackCards = [
  {
    src: "/images/hi.png",
    alt: "Collaborative Team Discussion",
    title: "Agile Engineering",
    desc: "Cross-functional teams driving rapid digital transformation",
  },
  {
    src: "/images/Subgirl.png",
    alt: "Digital Strategy & Execution",
    title: "Cloud & Security",
    desc: "Zero-trust architecture with 99.9% guaranteed reliability",
  },
  {
    src: "/images/Meet.png",
    alt: "Enterprise IT Innovation",
    title: "Custom Solutions",
    desc: "Tailored IT stacks designed to scale without bottlenecks",
  },
];

// Animation Variants
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

export default function ITFoundationSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-cycle stacked cards one after another
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stackCards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % stackCards.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + stackCards.length) % stackCards.length);
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 text-white mb-20 py-20 px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto grid lg:grid-cols-12 items-center gap-12 lg:gap-14 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Animated Stacked Cards Section */}
        <motion.div
          variants={fadeInUp}
          className="lg:col-span-6 flex flex-col items-center justify-center relative select-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* 3D Stack Container */}
          <div className="relative w-full max-w-[480px] h-[360px] sm:h-[420px] flex items-center justify-center">
            {stackCards.map((card, index) => {
              // Calculate relative position in stack: 0 = front, 1 = back, 2 = middle
              const offset = (index - activeIndex + stackCards.length) % stackCards.length;

              // Compute transforms for 3D card deck effect
              let zIndex = 30;
              let scale = 1;
              let x = 0;
              let y = 0;
              let rotate = 0;
              let opacity = 1;
              let brightness = "brightness(1)";

              if (offset === 0) {
                // Front active card
                zIndex = 30;
                scale = 1;
                x = 0;
                y = 0;
                rotate = 0;
                opacity = 1;
                brightness = "brightness(1)";
              } else if (offset === 1) {
                // Deepest/Back card
                zIndex = 10;
                scale = 0.88;
                x = -36;
                y = -30;
                rotate = -6;
                opacity = 0.55;
                brightness = "brightness(0.75)";
              } else if (offset === 2) {
                // Middle card
                zIndex = 20;
                scale = 0.94;
                x = -18;
                y = -15;
                rotate = -3;
                opacity = 0.82;
                brightness = "brightness(0.88)";
              }

              return (
                <motion.div
                  key={card.src}
                  animate={{
                    x,
                    y,
                    scale,
                    rotate,
                    opacity,
                    zIndex,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 240,
                    damping: 24,
                    mass: 0.8,
                  }}
                  onClick={() => setActiveIndex(index)}
                  className={`absolute inset-0 m-auto w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden cursor-pointer transition-shadow duration-300 ${
                    offset === 0
                      ? "shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] border-2 border-white/40 ring-1 ring-white/20"
                      : "shadow-xl border border-white/20 hover:opacity-90"
                  }`}
                  style={{
                    filter: brightness,
                  }}
                >
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover object-center"
                    priority={index === 0}
                  />

                  {/* Gradient Overlay & Tag for Front Card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Dynamic Caption on Front Card */}
                  {offset === 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15, duration: 0.4 }}
                      className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 pointer-events-none"
                    >
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-1.5 shadow-md">
                        {card.title}
                      </span>
                      <p className="text-white text-xs sm:text-sm font-medium drop-shadow-sm line-clamp-1">
                        {card.desc}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Interactive Stack Indicators & Controls */}
          <div className="flex items-center justify-between w-full max-w-[480px] mt-6 px-2">
            <div className="flex items-center gap-2">
              {stackCards.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`View card ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx
                      ? "w-8 bg-cyan-400 shadow-sm shadow-cyan-400/50"
                      : "w-2.5 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous card"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next card"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div variants={fadeInUp} className="lg:col-span-6 flex flex-col">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-5 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Enterprise IT Solutions
          </div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold !text-white leading-[1.2] tracking-tight mb-6"
            variants={fadeInUp}
          >
            We Create A Goal-Focused{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-white">
              IT Foundation
            </span>{" "}
            & Digital Presence
          </motion.h2>

          <motion.div className="space-y-4 text-blue-100/95 text-base sm:text-lg leading-relaxed font-normal" variants={fadeInUp}>
            <p>
              Ushodaya Services creates an IT foundation that is built for resilience, scalability, and long-term security. Our tailored digital solutions empower your business with a commanding market presence and seamless operational efficiency.
            </p>
            <p>
              Every strategy is curated around your unique vision—combining robust architecture, enterprise-grade cloud systems, and modern digital engineering to keep you ahead of technological disruption.
            </p>
          </motion.div>

          {/* Quick Feature Pillars */}
          <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-3 sm:gap-4 mt-8 pt-6 border-t border-white/15">
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold !text-white">99.9%</span>
              <span className="text-xs sm:text-sm text-blue-200 font-medium">Reliability</span>
            </div>
            <div className="flex flex-col border-x border-white/15 px-3 sm:px-4">
              <span className="text-xl sm:text-2xl font-bold !text-white">Custom</span>
              <span className="text-xs sm:text-sm text-blue-200 font-medium">Architecture</span>
            </div>
            <div className="flex flex-col pl-1 sm:pl-2">
              <span className="text-xl sm:text-2xl font-bold !text-white">24/7</span>
              <span className="text-xs sm:text-sm text-blue-200 font-medium">Strategic Support</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
