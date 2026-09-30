"use client";

import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "Why is continuous SaaS testing important?",
    answer:
      "Because it ensures every update is reliable, secure, and performs well in real-world conditions—preventing post-launch failures.",
  },
  {
    question: "What’s the difference between manual and automated QA testing?",
    answer:
      "Manual testing focuses on user experience and creative validation, while automated testing ensures speed, consistency, and scalability.",
  },
  {
    question: "How can teams improve their QA process?",
    answer:
      "By tracking meaningful metrics like defect escape rate, automating critical workflows, and conducting regular QA audits.",
  },
  {
    question: "What tools help with proactive bug prevention?",
    answer:
      "CI/CD pipelines, static code analysis, real-user monitoring, and automated regression suites all play key roles.",
  },
  {
    question: "Why partner with Ushodaya Services for QA testing?",
    answer:
      "Ushodaya Services combines automation, manual testing, and process improvement expertise to deliver reliable, scalable SaaS quality.",
  },
];

export default function SaaSTestingPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <article className="bg-white text-gray-800">
      {/* --- Banner Section --- */}
      <div className="relative w-full h-[320px] sm:h-[400px] overflow-hidden bg-slate-900">
        <Image
          src="/images/st4.png"
          alt="Role of SaaS Software Testing in Building Secure Products"
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
              Software Testing &amp; QA
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Role of SaaS Software Testing in Building Secure Products
            </h1>
            <p className="mt-4 text-gray-200 text-sm sm:text-base max-w-2xl mx-auto">
              30 October 2025 • 7 min read • By Sai Teja
            </p>
          </motion.div>
        </div>
      </div>

      {/* --- Page Content --- */}
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
          <span className="text-xs text-gray-500 font-medium">Category: Software Testing</span>
        </div>

        {/* Intro */}
        <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed border-b border-gray-100 pb-8">
          <p className="text-lg sm:text-xl font-medium text-gray-900">
            Effective SaaS testing isn’t a final step; it’s a continuous loop across your entire software development lifecycle.
          </p>
          <p>
            Building secure, resilient software requires continuous quality validation from the first architectural draft to daily cloud deployments. Discover how modern teams integrate QA to eliminate regressions and protect user trust.
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            1. Embedding QA Across the Lifecycle
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 text-base mb-1">Requirement &amp; Design Phase</h3>
              <p className="text-sm text-gray-600">Involving QA engineers in early architecture discussions catches edge cases before a single line of code is written.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 text-base mb-1">CI/CD Pipeline Automation</h3>
              <p className="text-sm text-gray-600">Running automated unit and integration tests on every commit guarantees immediate feedback and zero regressions.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 text-base mb-1">Staging Environment Parity</h3>
              <p className="text-sm text-gray-600">Mirroring production architectures allows realistic load simulation, stress tests, and vulnerability scanning.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 text-base mb-1">Post-Launch Telemetry</h3>
              <p className="text-sm text-gray-600">Real-time error monitoring and observability loops ensure defects are isolated within minutes.</p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            2. The Hybrid Testing Model: Automation &amp; Manual Empathy
          </h2>
          <p className="text-gray-700">
            Ushodaya Services advocates for a balanced testing ecosystem that pairs machine precision with human exploratory insight:
          </p>

          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
              <h4 className="font-bold text-gray-900 text-base mb-1">Automated QA Services</h4>
              <p className="text-sm text-gray-600">High-speed regression suites, API contract testing, load testing, and cross-browser matrices running 24/7.</p>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
              <h4 className="font-bold text-gray-900 text-base mb-1">Manual Exploratory Validation</h4>
              <p className="text-sm text-gray-600">Contextual usability testing, UX friction analysis, edge-case discovery, and visual polish evaluation.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Image */}
        <div className="py-2 flex justify-center">
          <Image
            src="/images/soft.png"
            alt="QA Process Improvement"
            width={750}
            height={380}
            className="rounded-lg border border-gray-200 object-cover"
          />
        </div>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            3. Key Metrics for QA Process Improvement
          </h2>
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 space-y-2 text-sm sm:text-base text-gray-700">
            <p>• <strong>Defect Escape Rate:</strong> Percentage of bugs identified in production vs QA staging.</p>
            <p>• <strong>Mean Time to Detect (MTTD) &amp; Resolve (MTTR):</strong> Velocity of diagnosing and fixing regressions.</p>
            <p>• <strong>Automated Test Coverage:</strong> Percentage of mission-critical user journeys covered by CI suites.</p>
            <p>• <strong>Regression Stability:</strong> Frequency of release rollbacks and hotfixes over quarterly cycles.</p>
          </div>
        </section>

        {/* Section 5: Summary */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            4. The Ushodaya Services Approach
          </h2>
          <p className="text-gray-700">
            At Ushodaya Services, testing is not an afterthought—it is the foundation of customer trust. We partner with product teams to build resilient automated testing pipelines that protect revenue, improve developer velocity, and maintain flawless uptime.
          </p>
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
            src="/images/saiteja.png"
            alt="Sai Teja"
            width={52}
            height={52}
            className="rounded-full border border-gray-200"
          />
          <div>
            <p className="font-bold text-gray-900 text-base">Sai Teja</p>
            <p className="text-xs text-gray-500">QA Lead &amp; Software Testing Specialist | 30 October 2025</p>
          </div>
        </div>

        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-block bg-gray-900 hover:bg-black text-white font-semibold text-sm sm:text-base px-8 py-3 rounded-lg transition"
          >
            Consult Our QA Engineers
          </Link>
        </div>
      </main>

      <Footer />
    </article>
  );
}

