"use client";

import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "What are the key stages of Generative AI product development?",
    answer:
      "Generative AI product development typically involves five stages — strategy definition, data preparation, model engineering, integration, and deployment. Each stage requires collaboration between data scientists, MLOps engineers, and business leaders to ensure alignment with enterprise goals.",
  },
  {
    question: "How long does it take to develop an enterprise-grade Generative AI product?",
    answer:
      "The timeline depends on complexity: Proof of Concept (POC) usually takes 4–8 weeks, full product development around 3–6 months, and enterprise deployment up to 9 months. Partnering with Generative AI consulting experts can significantly accelerate delivery.",
  },
  {
    question: "Should we build our own model or fine-tune an existing one?",
    answer:
      "It depends on your data sensitivity, budget, and goals. Fine-tuning pre-trained models like GPT or Llama 3 is faster and cost-effective, while building from scratch offers more control and compliance advantages for domain-specific tasks.",
  },
  {
    question: "How can we ensure data security in Generative AI projects?",
    answer:
      "Data governance is key. Implement encryption, anonymisation, and zero-trust access control. Work with providers that comply with GDPR, HIPAA, and ISO standards to maintain strong data protection.",
  },
  {
    question: "What infrastructure is needed for large-scale Generative AI systems?",
    answer:
      "You’ll need GPU or TPU clusters for training, high-throughput storage for data, low-latency networking, and automated MLOps pipelines. A hybrid cloud setup often provides the best performance-to-cost ratio.",
  },
];

export default function ProductDevelopmentBlog() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <article className="bg-white text-gray-800">
      {/* --- Banner Section --- */}
      <div className="relative w-full h-[320px] sm:h-[400px] overflow-hidden bg-slate-900">
        <Image
          src="/images/pd3.png"
          alt="Beyond ChatGPT: A CTO's Guide to Building Your Own Generative AI Product"
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
              Product Development &amp; AI
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Beyond ChatGPT: A CTO&apos;s Guide to Building Generative AI Products
            </h1>
            <p className="mt-4 text-gray-200 text-sm sm:text-base max-w-2xl mx-auto">
              03 November 2025 • 8 min read • By Priyajeet
            </p>
          </motion.div>
        </div>
      </div>

      {/* --- Main Content --- */}
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
          <span className="text-xs text-gray-500 font-medium">Category: Product Development</span>
        </div>

        {/* Lead Intro */}
        <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed border-b border-gray-100 pb-8">
          <p className="text-lg sm:text-xl font-medium text-gray-900">
            Generative AI is redefining what enterprise technology can achieve. Companies are moving beyond off-the-shelf chatbots to custom models tailored to their proprietary data, business rules, and security policies.
          </p>
          <p>
            For Chief Technology Officers, the objective is translating foundational models into resilient, production-ready software that drives measurable business ROI.
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            1. Formulating Your Enterprise AI Strategy
          </h2>
          <p className="text-gray-700">
            A successful generative AI roadmap requires clear alignment between technical architecture and core business workflows.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 text-base mb-1">High-Value Use Case Identification</h3>
              <p className="text-sm text-gray-600">Focusing on high-impact bottlenecks such as automated code generation, customer intelligence, and automated document analysis.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 text-base mb-1">Data Sovereignty &amp; Privacy</h3>
              <p className="text-sm text-gray-600">Ensuring enterprise IP and client datasets are never leaked into public foundational model training corpuses.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 text-base mb-1">Fine-Tuning vs RAG Architecture</h3>
              <p className="text-sm text-gray-600">Balancing Retrieval-Augmented Generation (RAG) for real-time data lookups with fine-tuning for domain vocabulary.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 text-base mb-1">Automated MLOps &amp; Evaluation</h3>
              <p className="text-sm text-gray-600">Implementing automated guardrails, hallucination detection, latency monitoring, and continuous fine-tuning.</p>
            </div>
          </div>
        </section>

        {/* Section 2: Image */}
        <div className="py-2 flex justify-center">
          <Image
            src="/images/pd2.png"
            alt="Generative AI Consulting Architecture"
            width={750}
            height={380}
            className="rounded-lg border border-gray-200 object-cover"
          />
        </div>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            2. Accelerating Time-to-Market with Ushodaya Services
          </h2>
          <p className="text-gray-700">
            Partnering with experienced software development teams enables CTOs to build scalable AI products rapidly without taking on prohibitive technical debt:
          </p>

          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
              <h4 className="font-bold text-gray-900 text-base mb-1">Rapid POC &amp; MVP Prototyping</h4>
              <p className="text-sm text-gray-600">Validating model feasibility, token costs, and accuracy benchmarks in 4 to 6 weeks.</p>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
              <h4 className="font-bold text-gray-900 text-base mb-1">Enterprise API &amp; ERP Integration</h4>
              <p className="text-sm text-gray-600">Connecting custom AI models seamlessly with existing databases, CRM systems, and cloud pipelines.</p>
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
            src="/images/Bigp2.png"
            alt="Priyajeet"
            width={52}
            height={52}
            className="rounded-full border border-gray-200"
          />
          <div>
            <p className="font-bold text-gray-900 text-base">Priyajeet</p>
            <p className="text-xs text-gray-500">AI Architect &amp; Product Engineering Lead | 03 November 2025</p>
          </div>
        </div>

        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-block bg-gray-900 hover:bg-black text-white font-semibold text-sm sm:text-base px-8 py-3 rounded-lg transition"
          >
            Start Your AI Product Development
          </Link>
        </div>
      </main>

      <Footer />
    </article>
  );
}
