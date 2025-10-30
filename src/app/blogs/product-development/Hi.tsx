"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function GenerativeAIConsultingPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What are the key stages of Generative AI product development?",
      answer:
        "Generative AI product development typically involves five stages — strategy definition, data preparation, model engineering, integration, and deployment. Each stage requires collaboration between data scientists, MLOps engineers, and business leaders to ensure alignment with enterprise goals.",
    },
    {
      question:
        "How long does it take to develop an enterprise-grade Generative AI product?",
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
      question:
        "What infrastructure is needed for large-scale Generative AI systems?",
      answer:
        "You’ll need GPU or TPU clusters for training, high-throughput storage for data, low-latency networking, and automated MLOps pipelines. A hybrid cloud setup (e.g., AWS SageMaker + Azure ML) often provides the best performance-to-cost ratio.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-12 lg:px-24">
      {/* Header Section */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          How Generative AI Consulting Accelerates Time-to-Market
        </h1>
        <p className="mt-4 text-gray-800 text-sm sm:text-base">
          Specialised consulting services bring structured methodologies and
          practical frameworks for faster execution.
        </p>
      </header>

      {/* Key Sections */}
      <section className="max-w-4xl mx-auto grid gap-10 md:grid-cols-2 mb-16">
        <article>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Rapid Prototyping
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Experts develop MVPs to validate your model’s potential before
            full-scale rollout.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Model and Tool Selection
          </h2>
          <p className="text-gray-600 leading-relaxed">
            They recommend optimal model architectures, APIs, and open-source
            frameworks tailored to your goals.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Data Pipeline Design
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Consultants create efficient data workflows that streamline
            ingestion, cleaning, and labelling.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Scalability and Cost Planning
          </h2>
          <p className="text-gray-600 leading-relaxed">
            They design architectures that scale dynamically while managing
            infrastructure costs effectively.
          </p>
        </article>
      </section>

      {/* Mid Section */}
      <section className="max-w-3xl mx-auto mb-16 text-center">
        <p className="text-gray-800 text-lg leading-relaxed">
          By leveraging Generative AI Consulting, CTOs can turn vision into
          reality, moving from concept to market-ready product in record time.
        </p>
      </section>

      {/* Conclusion Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Conclusion</h3>

        <p className="text-gray-600 leading-relaxed mb-6">
          Generative AI is the next frontier in enterprise change, providing a
          chance for CTOs to drive innovation rather than follow it.
        </p>

        <p className="text-gray-600 leading-relaxed mb-6">
          Organisations may create bespoke AI systems that increase
          productivity, encourage creativity, and preserve data sovereignty by
          combining a strong CTO AI Strategy, scalable infrastructure, and the
          correct mix of LLM Development Services and Generative AI Consulting.
        </p>

        <p className="text-gray-600 leading-relaxed">
          In a world where every firm is increasingly AI-driven, those who build
          generative AI today will define tomorrow's competitive edge — one in
          which human inventiveness and machine intelligence collaborate to
          create the future.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto border-t border-gray-200 pt-10 mb-20">
        <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
          Frequently Asked Questions (FAQs)
        </h3>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="text-lg font-medium text-gray-800">
                  {faq.question}
                </span>
                <span className="text-gray-600 text-2xl font-bold">
                  {openFAQ === index ? "−" : "+"}
                </span>
              </button>

              {openFAQ === index && (
                <p className="mt-3 text-gray-600 leading-relaxed transition-all duration-200">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Fixed Author & Contact Section */}
      <section className="max-w-4xl mx-auto text-center pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <Image
            src="/images/sai.png"
            alt="Author Avatar"
            width={64}
            height={64}
            className="rounded-full object-cover shadow-md"
          />
          <div className="text-left">
            <p className="font-semibold text-gray-900 text-lg">priyajeet</p>
            <p className="text-gray-500 text-sm">
              Verified Author | 03 November 2025
            </p>
          </div>
        </motion.div>

        <motion.a
          href="/contact"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="inline-block bg-blue-600 text-white font-semibold text-lg px-8 py-3 rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
        >
          Contact Us
        </motion.a>
      </section>
    </main>
  );
}
