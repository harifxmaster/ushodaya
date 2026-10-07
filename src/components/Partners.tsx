"use client";

import { motion, Transition, Variants } from "framer-motion";
import Image from "next/image";

interface Product {
  name: string;
  category: string;
  categoryColor: string;
  logo: string;
  bio: string;
  tags: string[];
  url: string;
}

const products: Product[] = [
  {
    name: "FX Master",
    category: "FinTech",
    categoryColor: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    logo: "/images/fX.png",
    bio: "Global financial infrastructure and payment orchestration platform enabling seamless cross-border transfers, multi-currency corporate wallets, dedicated IBANs, and automated compliance.",
    tags: ["Cross-Border Payments", "Multi-Currency Wallets", "Compliance API"],
    url: "https://fxmaster.co.uk/",
  },
  {
    name: "BharatCover",
    category: "HealthTech",
    categoryColor: "bg-teal-50 text-teal-700 border-teal-200/80",
    logo: "/images/BharatCover_logo_NewTagline_updated.webp",
    bio: "Comprehensive digital healthcare and protection membership platform offering cashless OPD, instant doctor teleconsultations, and affordable family wellness plans across India.",
    tags: ["Digital Health Plans", "Doctor Teleconsults", "OPD & Wellness"],
    url: "https://bharatcover.net/",
  },
  {
    name: "SEO Stack",
    category: "MarTech / SaaS",
    categoryColor: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
    logo: "/images/seostack.png",
    bio: "Next-generation AI-driven SEO analytics and visibility suite engineered to accelerate organic traffic growth, automated technical audits, and real-time search ranking intelligence.",
    tags: ["AI Search Analytics", "Automated Audits", "Keyword Intelligence"],
    url: "https://www.seo-stack.io/",
  },
  {
    name: "Best Transfer",
    category: "FinTech",
    categoryColor: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    logo: "/images/best-transfer.svg",
    bio: "Fast and secure global remittance and digital asset exchange ecosystem built to deliver transparent exchange rates, competitive fees, and instant cross-border settlement.",
    tags: ["Global Remittance", "Real-Time Rates", "Instant Settlement"],
    url: "https://www.besttransfer.com/",
  },
  {
    name: "PixelsHR",
    category: "HRTech / SaaS",
    categoryColor: "bg-amber-50 text-amber-700 border-amber-200/80",
    logo: "/images/pixel.png",
    bio: "All-in-one cloud HRMS and payroll platform designed to streamline end-to-end workforce operations, biometric attendance, performance appraisals, and statutory compliance.",
    tags: ["Automated Payroll", "Attendance & Leave", "Statutory Compliance"],
    url: "#",
  },
  {
    name: "Tools Warehouse",
    category: "E-Commerce",
    categoryColor: "bg-orange-50 text-orange-700 border-orange-200/80",
    logo: "/images/WITH_BG_old_backup.webp",
    bio: "Leading online B2B & B2C marketplace delivering industrial power tools, hand tools, precision machinery, and workshop hardware with pan-India distribution.",
    tags: ["Industrial Hardware", "Power & Hand Tools", "Pan-India Delivery"],
    url: "https://toolswarehouse.in/",
  },
];

const transition: Transition = {
  duration: 0.45,
  ease: [0.25, 0.1, 0.25, 1],
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Partners() {
  return (
    <section id="products" className="w-full bg-slate-50/70 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs sm:text-sm font-semibold border border-blue-200/80 mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Portfolio & Ventures
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061047] tracking-tight">
            Ushodaya In-House Products
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 mb-5 rounded-full" />
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
            We build, own, and operate scalable, technology-driven products across FinTech, HealthTech, SaaS, HRTech, and Digital Commerce engineered for global growth and real-world impact.
          </p>
        </div>

        {/* Product Grid - Equal Height & Balanced Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {products.map((product, index) => {
            const isExternal = product.url !== "#";
            return (
              <motion.a
                key={index}
                href={product.url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                variants={itemVariants}
                className="group bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/90 hover:border-blue-500/50 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full cursor-pointer no-underline"
              >
                {/* Card Header & Body */}
                <div>
                  {/* Logo & Category Badge Header */}
                  <div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-gray-100 min-h-[52px]">
                    <div className="h-10 w-36 flex items-center justify-start">
                      <Image
                        src={product.logo}
                        alt={`${product.name} Logo`}
                        width={140}
                        height={42}
                        className="max-h-9 sm:max-h-10 w-auto max-w-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <span
                      className={`inline-flex items-center text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full border shrink-0 ${product.categoryColor}`}
                    >
                      {product.category}
                    </span>
                  </div>

                  {/* Product Name */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>

                  {/* Product Bio - Balanced Typography */}
                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {product.bio}
                  </p>
                </div>

                {/* Card Bottom Section: Feature Chips & Live Venture Indicator */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  {/* Highlight Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {product.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium text-gray-600 bg-gray-50 border border-gray-200/80 px-2.5 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Venture Status */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
                    <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 font-medium text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Live Product
                    </span>
                    <span className="text-blue-600 font-semibold text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View Platform →
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
