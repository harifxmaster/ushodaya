"use client";

import { motion, Transition, Variants } from "framer-motion";
import Image from "next/image";

interface Product {
  name: string;
  category: string;
  logo: string;
  bio: string;
}

const products: Product[] = [
  {
    name: "FX Master",
    category: "FinTech",
    logo: "/images/fX.png",
    bio: "FX Master is a global financial infrastructure platform enabling businesses and individuals to manage cross-border payments, foreign exchange and multi-currency transactions through payment orchestration, corporate payments, multi-currency wallets, dedicated IBANs, automated compliance, real-time tracking and API-driven payment solutions.",
  },
  {
    name: "BharatCover",
    category: "HealthTech",
    logo: "/images/BharatCover_logo_NewTagline_updated.webp",
    bio: "Affordable healthcare, wellness and protection memberships designed for individuals and families across India.",
  },
  {
    name: "SEO Stack",
    category: "MarTech / SaaS",
    logo: "/images/seostack.png",
    bio: "AI-powered SEO, analytics and AI visibility platform helping businesses improve search performance and digital growth.",
  },
  {
    name: "Best Transfer",
    category: "FinTech",
    logo: "/images/best-transfer.svg",
    bio: "Secure global money transfer and digital asset conversion platform built around speed, transparency and convenience.",
  },
  {
    name: "PixelsHR",
    category: "HRTech / SaaS",
    logo: "/images/pixel.png",
    bio: "All-in-one HR and compliance platform simplifying employee management, workforce operations and business compliance.",
  },
  {
    name: "Tools Warehouse",
    category: "E-commerce",
    logo: "/images/WITH_BG_old_backup.webp",
    bio: "Online marketplace for professional power tools, hand tools, hardware and workshop equipment across India.",
  },
];

const transition: Transition = {
  duration: 0.5,
  ease: [0.42, 0, 0.58, 1],
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Partners() {
  return (
    <section id="products" className="w-full bg-[var(--background)] py-16 sm:py-24 px-6 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <span className="inline-block text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/60 mb-3">
            Portfolio & Ventures
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--primary)] tracking-tight">
            Ushodaya In-House Products
          </h2>
          <div className="w-20 h-1 bg-[var(--brand)] mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="text-gray-600 sm:text-lg leading-relaxed font-normal">
            At Ushodaya Services, we build, own and operate a growing portfolio of technology-driven products across FinTech, HealthTech, SaaS, HRTech, Digital Commerce and Business Solutions. Our in-house products are designed to address real-world business and consumer needs through scalable technology, efficient digital infrastructure and practical solutions built for global markets.
          </p>
        </div>

        {/* Product Grid - Equal Height Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 hover:border-blue-500/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Top Section */}
              <div className="flex-1 flex flex-col">
                {/* Logo & Category Header */}
                <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-100 min-h-[58px]">
                  <div className="h-11 w-36 flex items-center justify-start">
                    <Image
                      src={product.logo}
                      alt={`${product.name} Logo`}
                      width={150}
                      height={48}
                      className="max-h-10 sm:max-h-11 w-auto max-w-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <span className="inline-flex items-center text-xs font-bold tracking-wider uppercase px-3.5 py-1 rounded-full text-blue-700 bg-blue-50/90 border border-blue-200/70 shrink-0">
                    {product.category}
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>

                {/* Product Bio */}
                <p className="text-[15px] sm:text-base text-gray-600 leading-relaxed font-normal">
                  {product.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
