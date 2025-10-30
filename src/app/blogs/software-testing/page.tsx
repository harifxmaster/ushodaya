"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
    question: "Why partner with WT Softech for QA testing?",
    answer:
      "WT Softech combines automation, manual testing, and process improvement expertise to deliver reliable, scalable SaaS quality.",
  },
];

export default function SaaSTestingPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 bg-white">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Integrating SaaS Testing Throughout the Development Lifecycle
      </motion.h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        {/* --- Section 1 --- */}
        <p>
          Effective SaaS testing isn’t a final step; it’s a continuous loop
          across your development lifecycle.
        </p>

        <h2 className="font-semibold text-xl text-gray-900">
          Embedding QA in the Requirement and Design Phases
        </h2>
        <p>
          Include test engineers in requirement discussions. This ensures early
          detection of flaws before coding begins.
        </p>

        <h2 className="font-semibold text-xl text-gray-900">
          Automating Tests During Continuous Integration
        </h2>
        <p>
          Use CI/CD pipelines with software QA testing services to run automated
          unit, integration, and API tests at every code commit.
        </p>

        <h2 className="font-semibold text-xl text-gray-900">
          Using Staging Environments for Real-World Simulation
        </h2>
        <p>
          Mirror production environments to conduct performance, security, and
          stress tests before deployment.
        </p>

        <h2 className="font-semibold text-xl text-gray-900">
          Maintaining Regression Suites for Every Release
        </h2>
        <p>
          Automate high-impact workflows to prevent “old bugs” from returning in
          new releases.
        </p>

        <h2 className="font-semibold text-xl text-gray-900">
          Continuous Monitoring and Feedback Loops Post-Launch
        </h2>
        <p>
          Post-release monitoring helps identify defects early, ensuring ongoing
          SaaS reliability.
        </p>

        {/* --- Section 2 --- */}
        <h2 className="text-3xl font-bold text-gray-900 mt-10">
          Choosing the Right Software Testing Services for Your Needs
        </h2>
        <p>
          Finding the right software testing services partner or structure
          defines how efficiently and confidently you can scale your SaaS
          product.
        </p>

        <p>
          WT Softech recommends a flexible testing ecosystem that balances
          manual software testing services and automation-driven QA testing for
          maximum efficiency.
        </p>

        <h3 className="font-semibold text-xl text-gray-900">
          When to Leverage Manual Software Testing Services
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Manual testing brings creativity, empathy, and context that scripts
            often miss.
          </li>
          <li>Ideal for exploratory and usability testing.</li>
          <li>Valuable for UI/UX consistency checks.</li>
          <li>
            Detects real-world scenarios automation might overlook or miss.
          </li>
          <li>
            Critical for first-time user experience validation and early
            development or MVP stages.
          </li>
        </ul>

        {/* --- Section 3 --- */}
        <h2 className="text-3xl font-bold text-gray-900 mt-10">
          The Power of Automation in Software QA Testing Services
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Ensures faster regression coverage during rapid deployments.</li>
          <li>Enables seamless CI/CD verification before code goes live.</li>
          <li>
            Supports scalable cross-browser and device testing using cloud
            platforms.
          </li>
          <li>Improves test accuracy, repeatability, and reliability.</li>
          <li>
            Frees QA teams to focus on innovation and process improvement.
          </li>
        </ul>

        <h3 className="font-semibold text-xl text-gray-900 mt-6">
          Building a Hybrid Testing Model for Maximum Coverage
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Combine manual insight with automation speed.</li>
          <li>Integrate external QA partners for flexibility.</li>
          <li>
            Automate repetitive flows; manually validate emotional and UX
            aspects.
          </li>
          <li>Include security and performance tests in every release.</li>
          <li>Review and refine your testing mix regularly.</li>
        </ul>

        {/* --- Section 4 --- */}
        <h2 className="text-3xl font-bold text-gray-900 mt-10">
          How to Improve QA Process for Unshakeable Software Quality
        </h2>
        <p>
          A good QA process evolves continuously, adapting to feedback and
          growth. Tracking the right metrics helps drive improvement.
        </p>

        <h3 className="font-semibold text-xl text-gray-900 mt-6">
          Key Metrics for QA Process Improvement
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Track defect escape rate for early bug detection.</li>
          <li>Measure mean time to detect (MTTD) and resolve (MTTR).</li>
          <li>Monitor regression and release stability over time.</li>
          <li>Evaluate test coverage vs. business impact.</li>
          <li>
            Correlate user-reported bugs with QA team performance for insights.
          </li>
        </ul>

        <h3 className="font-semibold text-xl text-gray-900 mt-6">
          Practical QA Process Improvement Ideas
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Adopt shift-left testing early in the sprint.</li>
          <li>Implement quality gates in CI/CD pipelines.</li>
          <li>Schedule routine exploratory testing cycles.</li>
          <li>Prioritize bugs by impact on user trust.</li>
          <li>Encourage continuous QA–dev feedback loops.</li>
        </ul>

        {/* --- Section 5 --- */}
        <h2 className="text-3xl font-bold text-gray-900 mt-10">
          Implementing Actionable QA Process Improvement Suggestions
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Start with a comprehensive QA audit.</li>
          <li>Define measurable quality gates and enforce them.</li>
          <li>Automate critical user journeys first.</li>
          <li>Integrate load and security testing regularly.</li>
          <li>Review QA metrics after every release cycle.</li>
        </ul>

        {/* --- IMAGE AFTER SECTION 5 --- */}
        <div className="my-10 flex justify-center">
          <Image
            src="/images/soft.png"
            alt="QA Process Improvement Illustration"
            width={800}
            height={450}
            className="rounded-2xl shadow-md"
          />
        </div>

        {/* --- Section 6 --- */}
        <h2 className="text-3xl font-bold text-gray-900 mt-10">
          A Proactive Approach to Bug Prevention in Software Testing
        </h2>
        <h3 className="font-semibold text-xl text-gray-900">
          Shifting Left: Integrating Bug Prevention Early
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Design features with testability in mind.</li>
          <li>Include QA in code reviews and early planning.</li>
          <li>Automate unit and API testing during development.</li>
          <li>Use feature flags and incremental rollouts.</li>
          <li>Integrate static code analysis into CI pipelines.</li>
        </ul>

        <h3 className="font-semibold text-xl text-gray-900 mt-6">
          Tools and Techniques for Effective Bug Prevention
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Leverage CI/CD tools for automated testing.</li>
          <li>
            Use cloud-based device/browser testing for global consistency.
          </li>
          <li>Implement load and performance simulation tools.</li>
          <li>Schedule regular security audits and penetration testing.</li>
          <li>
            Apply real-user monitoring for post-release performance tracking.
          </li>
        </ul>

        {/* --- Section 7 --- */}
        <h2 className="text-3xl font-bold text-gray-900 mt-10">
          Bringing It All Together: The WT Softech Perspective
        </h2>
        <p>
          At WT Softech, SaaS testing isn’t just about finding bugs—it’s about
          building confidence. Our QA testing services help businesses prevent
          defects, streamline delivery, and strengthen customer trust.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Continuous automation for faster deployment.</li>
          <li>Manual testing for user-centric validation.</li>
          <li>Security and performance audits for risk mitigation.</li>
          <li>
            Proven QA process improvement frameworks for sustained excellence.
          </li>
        </ul>

        <p>
          We help SaaS providers build products that are functional, dependable,
          and scalable.
        </p>

        <h3 className="font-semibold text-xl text-gray-900 mt-8">
          Final Thoughts
        </h3>
        <p>
          While bugs may seem small, they can erode user trust. Proactive QA
          builds reliability—because excellence isn’t just about features, it’s
          about flawless performance.
        </p>

        <p>
          Partner with WT Softech, where testing becomes the engine of your
          growth. Our manual and automation QA services ensure your SaaS thrives
          with trust, speed, and user satisfaction.
        </p>

        {/* --- FAQ Section --- */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-2xl p-5 shadow-sm cursor-pointer bg-white hover:shadow-md transition-all"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <p className="font-semibold text-gray-900">{faq.question}</p>
                {openIndex === index && (
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* --- Author and CTA Section --- */}
        <motion.div
          className="mt-16 flex items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/sai.png"
            alt="Author Avatar"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div className="text-left">
            <p className="font-semibold text-gray-900 text-lg">Sai Teja</p>
            <p className="text-gray-500 text-sm">
              Verified Author | 30 October 2025
            </p>
          </div>
        </motion.div>

        <motion.a
          href="/contact"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="inline-block mt-10 bg-blue-600 text-white font-semibold text-lg px-8 py-3 rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
        >
          Contact Us
        </motion.a>
      </div>
    </div>
  );
}
