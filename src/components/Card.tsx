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
          className="border border-gray-200 rounded-2xl overflow-hidden transition-all bg-white hover:border-blue-200 shadow-sm"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-900 hover:bg-blue-50/50 transition cursor-pointer"
            aria-expanded={openIndex === index}
            aria-controls={`faq-panel-${index}`}
          >
            <span className="text-base sm:text-lg text-gray-900 pr-4">{faq.question}</span>
            <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg shrink-0">
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
      <section className="relative w-full h-[360px] sm:h-[420px] md:h-[480px] overflow-hidden bg-slate-900">
        <Image
          src="/images/top1.jpg"
          alt="Top 5 IT Trends Transforming Businesses in 2025"
          fill
          priority
          className="object-cover object-center brightness-75"
        />
        {/* Gradients to blend smoothly with transparent header */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-slate-900/50" />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-16 sm:pt-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-blue-200 text-xs sm:text-sm font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              IT Services & Industry Insights
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-md">
              Top 5 IT Trends Transforming Businesses in 2025
            </h1>
            <p className="mt-4 text-blue-100/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              How AI, Cloud Engineering, Agile, and QA Automation are redefining modern enterprise competitive advantage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN BLOG CONTENT ================= */}
      <main className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16 text-gray-800 leading-relaxed">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-base sm:text-lg text-gray-700 leading-relaxed border-b border-gray-100 pb-8"
        >
          <p>
            In a frantically fast-paced digital economy, knowing about IT trends is
            not a question of choice but imperative for being ahead of the pack.
            Companies that procrastinate in applying new technologies or treat them
            as a cost element in the back room rather than an opportunity for
            innovation may find that competitors of greater agility surpass them.
          </p>

          <p>
            As we enter the year 2025, the tempo of change in technology products
            is becoming intensified. Changes in technology mean new products, new
            ways of offering services, and higher expectations from buyers and
            employees alike.
          </p>

          <p>
            For a forward-thinking organisation like <strong>Ushodaya Services</strong>, operating across
            IT services, consulting, and software development, understanding the forces
            influencing the future is at once an obligation and an enormous opportunity.
          </p>
        </motion.div>

        {/* Section 1: Why Staying Ahead Matters */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Why Staying Ahead of IT Trends Matters
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
              <h3 className="font-semibold text-blue-700 text-base mb-1.5">🚀 Competitive Advantage</h3>
              <p className="text-sm text-gray-600">Companies adopting new technologies early achieve higher productivity, faster response times, and new revenue channels.</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
              <h3 className="font-semibold text-blue-700 text-base mb-1.5">💰 Cost Optimisation</h3>
              <p className="text-sm text-gray-600">Modern automated platforms reduce manual overhead, cloud waste, and recurring technical debt.</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
              <h3 className="font-semibold text-blue-700 text-base mb-1.5">👥 Talent Attraction & Retention</h3>
              <p className="text-sm text-gray-600">Top-tier engineers want to work with modern architectures rather than maintaining legacy systems.</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
              <h3 className="font-semibold text-blue-700 text-base mb-1.5">🛡️ Risk & Governance Management</h3>
              <p className="text-sm text-gray-600">Proactive knowledge of security, compliance, and cloud governance protects against modern vulnerabilities.</p>
            </div>
          </div>

          <p className="text-gray-700">
            Below, we examine the five core areas of technology interest and importance currently shaping enterprise strategies in 2025.
          </p>
        </section>

        {/* Section 2: AI in IT Consulting */}
        <section className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4">
            1. AI in IT Consulting: From Pilots to Core Integration
          </h2>

          <p className="mb-4 text-gray-700">
            Artificial Intelligence (AI) continues to dominate the technology agenda. In 2025, it has moved from experimental to integral. According to leading industry analysts, AI is now embedded in the very foundation of IT architecture and enterprise workflows.
          </p>

          <p className="mb-6 text-gray-700">
            The focus has transitioned from isolated chatbots to strategic human-machine collaboration, automated operations, and responsible governance.
          </p>

          <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-6 mb-6">
            <h3 className="font-bold text-gray-900 text-lg mb-3">Key Shifts in Enterprise AI:</h3>
            <ul className="space-y-2.5 text-gray-700">
              <li className="flex items-start gap-2.5">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Strategic System Integration:</strong> AI models embedded directly into ERP, CRM, and supply chain applications.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Agentic AI & Autonomous Workflows:</strong> Multi-agent systems performing complex orchestration and decision support.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Responsible Governance:</strong> Strict compliance frameworks addressing data privacy, bias prevention, and explainability.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: Cloud-Driven IT Services */}
        <section className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4">
            2. Cloud-Driven IT Services: The Intelligent Backbone
          </h2>

          <p className="mb-6 text-gray-700">
            Cloud computing is no longer merely remote hosting; it is the intelligent infrastructure backbone powering modern agility, resilience, and global scale.
          </p>

          {/* Cloud Showcase Image */}
          <div className="my-8 flex justify-center">
            <Image
              src="/images/cloud.png"
              alt="Cloud-Driven IT Services"
              width={750}
              height={400}
              className="rounded-2xl shadow-lg border border-gray-100 object-cover"
            />
          </div>

          <div className="space-y-4 text-gray-700">
            <p>
              Managed IT support in the cloud era encompasses <strong>CloudOps</strong>, automated infrastructure-as-code (IaC), zero-trust security architectures, and proactive cost optimization.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Multi-Cloud & Hybrid Flexibility:</strong> Avoiding vendor lock-in with containerized workloads across AWS, Azure, and GCP.</li>
              <li><strong>Self-Healing Infrastructure:</strong> Automated monitoring and instant auto-remediation reducing downtime to near zero.</li>
              <li><strong>Platform Engineering:</strong> Developer self-service portals that accelerate release frequency.</li>
            </ul>
          </div>
        </section>

        {/* Section 4: Agile Product Development */}
        <section className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4">
            3. Modern Agile Product Development
          </h2>

          <p className="mb-4 text-gray-700">
            Agile in 2025 is synonymous with continuous value delivery. It connects product strategy with DevOps pipelines and telemetry feedback loops.
          </p>

          <ul className="list-disc pl-6 space-y-2.5 text-gray-700 mb-6">
            <li><strong>Lean MVP Execution:</strong> Rapid prototyping and validated learning cycles.</li>
            <li><strong>Continuous Feedback Loops:</strong> Telemetry and product analytics shaping feature iteration in real time.</li>
            <li><strong>Cross-Functional Alignment:</strong> Tighter collaboration across engineering, product design, and business leadership.</li>
          </ul>
        </section>

        {/* Section 5: Automated Software Testing */}
        <section className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4">
            4. Automated Software Testing & Continuous QA
          </h2>

          <p className="mb-4 text-gray-700">
            Manual testing alone cannot keep pace with daily and weekly continuous deployment cycles. AI-powered automated QA testing delivers speed, consistency, and scalable security.
          </p>

          <p className="mb-6 text-gray-700">
            With shift-left testing, teams catch defects at the code-commit stage, saving up to 70% in downstream rework and maintaining rock-solid customer trust.
          </p>
        </section>

        {/* Section 6: Digital Marketing for Tech Firms */}
        <section className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4">
            5. Data-Driven Digital Marketing for Tech Firms
          </h2>

          <p className="mb-4 text-gray-700">
            Technological prowess must be paired with strategic visibility. IT consulting and software providers rely on organic search authority, account-based marketing (ABM), and educational thought leadership to build high-trust client relationships.
          </p>
        </section>

        {/* Section 7: Summary */}
        <section className="mt-14 bg-gradient-to-r from-blue-50 to-indigo-50/60 p-6 sm:p-8 rounded-3xl border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Summary & Outlook
          </h2>
          <p className="text-gray-700 leading-relaxed">
            In 2025, business agility is inextricably linked to technological maturity. From AI integration and cloud scalability to agile product engineering and automated QA, embracing these trends enables enterprises to operate with speed, security, and certainty.
          </p>
        </section>

        {/* ================= FAQ SECTION ================= */}
        <section className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <ClientFAQ />
        </section>

        {/* ================= AUTHOR CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-gray-200 pt-8 flex items-center gap-4"
        >
          <Image
            src="/images/Bigp1.png"
            alt="Sakshi"
            width={60}
            height={60}
            className="rounded-full border border-gray-200"
          />
          <div>
            <p className="font-semibold text-gray-900 text-lg">Sakshi</p>
            <p className="text-gray-500 text-sm">
              Verified Author | 23 October 2025
            </p>
          </div>
        </motion.div>

        {/* ================= CTA BUTTON ================= */}
        <div className="mt-10 text-center sm:text-left">
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            Get in Touch with Our IT Experts
          </Link>
        </div>
      </main>
    </article>
  );
}
