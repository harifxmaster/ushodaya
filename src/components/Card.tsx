"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { JSX, useState } from "react";

const faqs = [
  {
    question: "How is Artificial Intelligence changing IT consulting in 2025?",
    answer: `AI has shifted from "experimental" to "essential" in IT consulting. In 2025, consulting firms no longer run isolated AI pilot projects — they design AI-driven strategies that integrate directly with ERP, CRM, and supply chain systems. AI is also used for predictive insights, automated code generation, and intelligent decision support.

Firms like Ushodaya Services now help clients scale AI responsibly — covering governance, bias prevention, and explainability. In short, AI is no longer an add-on; it is the core foundation of digital transformation consulting.`,
  },
  {
    question: "What makes cloud-driven IT services a top business priority in 2025?",
    answer: `Cloud computing has evolved from a hosting solution to the intelligent backbone of modern enterprises. In 2025, most organisations use multi-cloud and hybrid environments to stay agile and resilient. The rise of platform engineering, CloudOps, and AI-powered monitoring means businesses can scale, recover, and optimise automatically.

For service providers like Ushodaya Services, this evolution creates opportunities to deliver end-to-end managed cloud services — from migration to 24/7 optimisation — helping clients innovate faster while reducing costs and downtime.`,
  },
  {
    question: "Why are companies still relying on Agile product development in 2025?",
    answer: `Agile has evolved. While core principles remain the same (flexibility, iteration, customer feedback), the 2025 agile ecosystem incorporates DevOps integration, AI-assisted testing, and MVP-focused development.

Businesses apply agile across all departments — marketing, HR, and operations included — to improve adaptability. Ushodaya Services helps clients apply modern agile frameworks to deliver faster, data-backed outcomes.`,
  },
  {
    question: "How does automated software testing improve product quality and speed?",
    answer: `Automated testing has become the default expectation in continuous DevOps pipelines. Automation tools, powered by AI and ML, run thousands of test cases in minutes — detecting regressions, predicting anomalies, and self-healing failed test scripts.

This enables faster release cycles, fewer production bugs, and higher system reliability. Automated QA ensures companies launch dependable software at scale without compromising quality or security.`,
  },
  {
    question: "How can digital marketing help IT and consulting firms grow in 2025?",
    answer: `In 2025, technical innovation alone is not enough — visibility drives credibility and conversions. IT and consulting firms rely on SEO, thematic content marketing, and account-based marketing (ABM) to reach decision-makers. AI tools reshape marketing operations through predictive lead scoring, personalized messaging, and multi-touch attribution tracking.`,
  },
];

function ClientFAQ(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className="border border-gray-200 rounded-xl overflow-hidden bg-white"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition cursor-pointer"
            aria-expanded={openIndex === index}
            aria-controls={`faq-panel-${index}`}
          >
            <span className="text-base sm:text-lg text-gray-900 pr-4">{faq.question}</span>
            <span className="text-gray-400 font-bold text-xl shrink-0">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                id={`faq-panel-${index}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="px-6 pb-5 text-gray-600 leading-relaxed text-base whitespace-pre-line border-t border-gray-100 pt-3"
              >
                {faq.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function Card(): JSX.Element {
  return (
    <article className="w-full bg-white text-gray-800">
      {/* ================= HERO BANNER SECTION ================= */}
      <section className="relative w-full h-[320px] sm:h-[400px] overflow-hidden bg-slate-900">
        <Image
          src="/images/top1.jpg"
          alt="Top 5 IT Trends Transforming Businesses in 2025"
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
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium mb-4">
              IT Services &amp; Industry Insights
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Top 5 IT Trends Transforming Businesses in 2025
            </h1>
            <p className="mt-4 text-gray-200 text-sm sm:text-base max-w-2xl mx-auto">
              23 October 2025 • 5 min read • By Sakshi
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN BLOG CONTENT ================= */}
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
          <span className="text-xs text-gray-500 font-medium">Category: IT Services</span>
        </div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed border-b border-gray-100 pb-8"
        >
          <p>
            In a fast-paced digital economy, knowing about IT trends is imperative for staying competitive. Companies that delay applying new technologies may find agile competitors surpassing them.
          </p>
          <p>
            As we navigate 2025, technology changes mean new ways of offering services and higher expectations from buyers and employees alike.
          </p>
          <p>
            For an organization like <strong>Ushodaya Services</strong>, operating across IT services, consulting, and software development, understanding these forces is central to delivering sustained business outcomes.
          </p>
        </motion.div>

        {/* Section 1: Why Staying Ahead Matters */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Why Staying Ahead of IT Trends Matters
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 text-base mb-1">Competitive Advantage</h3>
              <p className="text-sm text-gray-600">Early adopters achieve higher productivity, faster response times, and new revenue channels.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 text-base mb-1">Cost Optimization</h3>
              <p className="text-sm text-gray-600">Modern automated platforms reduce manual overhead, cloud waste, and recurring technical debt.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 text-base mb-1">Talent Attraction &amp; Retention</h3>
              <p className="text-sm text-gray-600">Engineers perform best when working with modern architectures rather than maintaining legacy bottlenecks.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 text-base mb-1">Risk &amp; Governance Management</h3>
              <p className="text-sm text-gray-600">Proactive knowledge of security, compliance, and cloud governance prevents critical vulnerabilities.</p>
            </div>
          </div>
        </section>

        {/* Section 2: AI in IT Consulting */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            1. AI in IT Consulting: From Pilots to Core Integration
          </h2>

          <p className="text-gray-700">
            Artificial Intelligence (AI) continues to dominate the technology agenda. In 2025, it has moved from experimental to integral. Leading analysts report that AI is now embedded in the very foundation of IT architecture and enterprise workflows.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 text-base mb-3">Key Shifts in Enterprise AI:</h3>
            <ul className="space-y-2 text-sm sm:text-base text-gray-700">
              <li>• <strong>Strategic System Integration:</strong> AI models embedded directly into ERP, CRM, and supply chain applications.</li>
              <li>• <strong>Agentic AI &amp; Autonomous Workflows:</strong> Multi-agent systems performing orchestration and decision support.</li>
              <li>• <strong>Responsible Governance:</strong> Strict compliance frameworks addressing data privacy, bias prevention, and explainability.</li>
            </ul>
          </div>
        </section>

        {/* Section 3: Cloud-Driven IT Services */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            2. Cloud-Driven IT Services: The Intelligent Backbone
          </h2>

          <p className="text-gray-700">
            Cloud computing is no longer merely remote hosting; it is the intelligent infrastructure backbone powering modern agility, resilience, and global scale.
          </p>

          <div className="py-2 flex justify-center">
            <Image
              src="/images/cloud.png"
              alt="Cloud-Driven IT Services"
              width={750}
              height={380}
              className="rounded-lg border border-gray-200 object-cover"
            />
          </div>

          <p className="text-gray-700">
            Managed IT support in the cloud era encompasses CloudOps, automated infrastructure-as-code (IaC), zero-trust security architectures, and proactive cost optimization.
          </p>
        </section>

        {/* Section 4: Agile Product Development */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            3. Modern Agile Product Development
          </h2>

          <p className="text-gray-700">
            Agile in 2025 is synonymous with continuous value delivery. It connects product strategy with DevOps pipelines and telemetry feedback loops.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 space-y-2 text-sm sm:text-base text-gray-700">
            <p>• <strong>Lean MVP Execution:</strong> Rapid prototyping and validated learning cycles.</p>
            <p>• <strong>Continuous Feedback Loops:</strong> Telemetry and product analytics shaping feature iteration in real time.</p>
            <p>• <strong>Cross-Functional Alignment:</strong> Tighter collaboration across engineering, product design, and business leadership.</p>
          </div>
        </section>

        {/* Section 5: Automated Software Testing */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            4. Automated Software Testing &amp; Continuous QA
          </h2>

          <p className="text-gray-700">
            Manual testing alone cannot keep pace with daily and weekly continuous deployment cycles. Automated QA testing delivers speed, consistency, and scalable security. With shift-left testing, teams catch defects at the code-commit stage, saving significant downstream rework.
          </p>
        </section>

        {/* Section 6: Digital Marketing for Tech Firms */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            5. Data-Driven Digital Marketing for Tech Firms
          </h2>

          <p className="text-gray-700">
            Technological prowess must be paired with strategic visibility. IT consulting and software providers rely on organic search authority, account-based marketing (ABM), and educational thought leadership to build high-trust client relationships.
          </p>
        </section>

        {/* ================= FAQ SECTION ================= */}
        <section className="space-y-4 pt-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <ClientFAQ />
        </section>

        {/* ================= AUTHOR CARD ================= */}
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
            <p className="text-xs text-gray-500">Verified Author | 23 October 2025</p>
          </div>
        </div>

        {/* ================= CTA BUTTON ================= */}
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-block bg-gray-900 hover:bg-black text-white font-semibold text-sm sm:text-base px-8 py-3 rounded-lg transition"
          >
            Get in Touch with Our IT Experts
          </Link>
        </div>
      </main>
    </article>
  );
}
