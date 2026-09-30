"use client";

import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "Is outsourced IT suitable for very small businesses?",
    answer:
      "Yes. Outsourced IT is ideal for small businesses because it provides access to expert support, security, and monitoring without the cost of hiring a full-time team.",
  },
  {
    question: "Can SMEs combine in-house and outsourced IT?",
    answer:
      "Absolutely. Many SMEs adopt a hybrid IT model where internal staff handle core operations while outsourced partners manage cloud, security, and support.",
  },
  {
    question: "Is outsourced IT secure?",
    answer:
      "Yes. Professional IT service providers use enterprise-grade security tools, proactive monitoring, and compliance frameworks that often exceed in-house capabilities.",
  },
  {
    question: "How quickly can outsourced IT scale?",
    answer:
      "Outsourced IT services can scale instantly based on business needs, unlike in-house teams that require hiring and training.",
  },
  {
    question: "When should an SME choose in-house IT?",
    answer:
      "In-house IT makes sense when businesses require deep system knowledge, strict data control, or immediate on-site support.",
  },
];

export default function DigitalMarketingPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <article className="bg-white text-gray-800">
      {/* ================= HERO BANNER ================= */}
      <div className="relative w-full h-[320px] sm:h-[400px] overflow-hidden bg-slate-900">
        <Image
          src="/images/house.png"
          alt="When to Choose In-house vs Outsourced IT"
          fill
          priority
          className="object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-slate-900/40" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-16 sm:pt-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium mb-4">
              Managed IT &amp; Consulting
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Choosing Between In-house vs Outsourced IT: A Guide for SMEs
            </h1>
            <p className="mt-4 text-gray-200 text-sm sm:text-base max-w-2xl mx-auto">
              18 December 2025 • 5 min read • By Sakshi
            </p>
          </motion.div>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <main className="max-w-4xl mx-auto px-5 sm:px-8 py-10 sm:py-14 space-y-8 text-gray-800 leading-relaxed">
        
        {/* Back Link */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-gray-600 transition"
          >
            <span>&larr;</span>
            <span>Back to all insights</span>
          </Link>
          <span className="text-xs text-gray-500 font-medium">Category: Digital Marketing &amp; Strategy</span>
        </div>

        {/* Intro */}
        <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed border-b border-gray-100 pb-8">
          <p className="text-lg sm:text-xl font-medium text-gray-900">
            A critical decision for small and medium-sized businesses (SMEs) is choosing between in-house vs outsourced IT to deliver scalable support and security.
          </p>
          <p>
            Your choice directly impacts overhead costs, operational continuity, disaster recovery posture, and your capability to deploy new digital services over time.
          </p>
        </div>

        {/* Section 1: Challenges for SMEs */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Why the IT Model Matters for Growing Businesses
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 text-base mb-1">Financial Constraints</h3>
              <p className="text-sm text-gray-600">Hiring full-time engineers and cloud architects can strain SME payrolls.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 text-base mb-1">Talent Shortages</h3>
              <p className="text-sm text-gray-600">Recruiting and retaining cybersecurity and DevOps specialists is highly competitive.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 text-base mb-1">Cybersecurity Risks</h3>
              <p className="text-sm text-gray-600">Threats evolve daily, demanding 24/7 monitoring, patch management, and threat prevention.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 text-base mb-1">Focus on Core Strategy</h3>
              <p className="text-sm text-gray-600">Managing daily IT tickets distracts founders from product development and revenue growth.</p>
            </div>
          </div>
        </section>

        {/* Section 2: Comparison Infographic */}
        <div className="py-2 flex justify-center">
          <Image
            src="/images/info.png"
            alt="In-house vs Outsourced IT Infographic"
            width={750}
            height={380}
            className="rounded-lg border border-gray-200 object-cover"
          />
        </div>

        {/* Section 3: In-House vs Outsourced Breakdown */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Evaluating Both Operating Models
          </h2>

          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
              <h4 className="font-bold text-gray-900 text-base mb-1">When to Build In-House</h4>
              <p className="text-sm text-gray-600">Best when your business relies on heavily customized proprietary hardware, on-premise physical servers, or strictly offline workflows.</p>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
              <h4 className="font-bold text-gray-900 text-base mb-1">When to Leverage Outsourced IT Partners</h4>
              <p className="text-sm text-gray-600">Ideal for scalable cloud management, 24/7 security monitoring, predictable monthly budgeting, and immediate access to specialized senior engineers.</p>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
              <h4 className="font-bold text-gray-900 text-base mb-1">The Hybrid Approach</h4>
              <p className="text-sm text-gray-600">Combining a small in-house IT liaison with an external managed services partner for specialized security, cloud, and overflow support.</p>
            </div>
          </div>
        </section>

        {/* --- FAQ Section --- */}
        <section className="space-y-4 pt-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-5 py-4 text-left font-semibold text-gray-900 flex justify-between items-center hover:bg-gray-50 transition cursor-pointer"
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <span className="text-gray-500 text-lg font-bold ml-4">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-5 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-gray-100 pt-3"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* --- Author & CTA --- */}
        <div className="border-t border-gray-200 pt-6 flex items-center gap-4">
          <Image
            src="/images/Bigp1.png"
            alt="Sakshi"
            width={52}
            height={52}
            className="rounded-full border border-gray-200"
          />
          <div>
            <p className="font-bold text-gray-900 text-base">Sakshi</p>
            <p className="text-xs text-gray-500">Technology Strategy Advisor | 18 December 2025</p>
          </div>
        </div>

        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-block bg-gray-900 hover:bg-black text-white font-semibold text-sm sm:text-base px-8 py-3 rounded-lg transition"
          >
            Explore Managed IT Solutions
          </Link>
        </div>
      </main>

      <Footer />
    </article>
  );
}
