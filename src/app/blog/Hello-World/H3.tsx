"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function QAFinalSections() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is automated testing expensive to implement?",
      a: "Initial setup has a cost, but most companies recover it within 12–24 months through reduced rework, faster releases, and fewer production issues."
    },
    {
      q: "When should automation testing be introduced?",
      a: "Automation is most effective when introduced early using a shift-left strategy alongside manual testing."
    },
    {
      q: "Can startups benefit from QA automation?",
      a: "Yes. Automation helps startups avoid costly failures and scale predictably as their user base grows."
    },
    {
      q: "Does automation replace manual testing?",
      a: "No. Automation complements manual testing. Exploratory, usability, and edge-case testing still require human insight."
    },
    {
      q: "Which industries benefit the most from QA automation?",
      a: "FinTech, HealthTech, SaaS, E-commerce, and enterprise platforms benefit significantly due to high reliability and compliance needs."
    }
  ];

  return (
    <main className="w-full bg-white">
      <section className="max-w-[1180px] mx-auto px-4 py-0">

        {/* ================= ROI SECTION ================= */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Why Automated Testing Guarantees Long-Term ROI
        </h2>

        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Automation is not a cost—it is a long-term investment in product
          stability, scalability, and predictable growth.
        </p>

        <ul className="mt-6 space-y-4 text-lg text-gray-700 list-disc pl-6">
          <li><strong>Reduced Development Costs:</strong> Reusable test suites replace repetitive manual cycles.</li>
          <li><strong>Accelerated Time-to-Market:</strong> Faster, safer feature releases.</li>
          <li><strong>Fewer Post-Release Defects:</strong> Regressions caught before users see them.</li>
          <li><strong>Lower Support Costs:</strong> Stable systems reduce emergency fixes.</li>
          <li><strong>Predictable Scaling:</strong> Automation grows with your roadmap.</li>
        </ul>

        {/* ================= FAQs ================= */}
        <h2 className="mt-20 text-2xl md:text-3xl font-semibold text-gray-900">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-5 cursor-pointer"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-lg text-gray-900">
                  {faq.q}
                </h4>
                <span className="text-xl font-bold text-gray-500">
                  {openFaq === index ? "−" : "+"}
                </span>
              </div>

              {openFaq === index && (
                <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* ================= CTA ================= */}
        <div className="mt-20 bg-[#1A3C8C] rounded-2xl p-10 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Build Software That Performs Flawlessly
          </h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-200">
            Reduce costs, prevent failures, and accelerate growth with
            enterprise-grade QA and automation solutions from WT Softech.
          </p>
          <button className="mt-6 px-8 py-3 bg-white text-[#1A3C8C] font-semibold rounded-lg hover:bg-gray-100 transition">
            Contact Our QA Experts
          </button>
        </div>

        {/* ================= AUTHOR ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-gray-200 pt-8 flex items-center gap-4"
        >
          <Image
            src="/images/Bigp1.png"
            alt="Author Avatar"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold text-gray-900 text-lg">Sakshi</p>
            <p className="text-gray-500 text-sm">
              Verified Author | 22 december 2025
            </p>
          </div>
        </motion.div>
      </section>

      {/* Bottom spacing */}
      <div className="h-24" />
    </main>
  );
}
