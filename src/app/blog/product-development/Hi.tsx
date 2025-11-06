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

      {/* ✅ Title + Image Section */}
      <section className="relative bg-transparent text-center mb-16">
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Integrating SaaS Testing Throughout the Development Lifecycle
        </motion.h1>

       {/* ✅ Responsive Image Section */}
<div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[600px]">
  <Image
    src="/images/pd2.png" // 🔁 Replace with your image path
    alt="Generative AI Consulting"
    fill
    priority
    className="object-cover rounded-xl"
    sizes="(max-width: 640px) 100vw,
           (max-width: 1024px) 90vw,
           (max-width: 1280px) 80vw,
           1200px"
  />
</div>

      </section>

      {/* ✅ Header Section */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          How Generative AI Consulting Accelerates Time-to-Market
        </h1>
        <p className="mt-4 text-gray-700 text-base sm:text-lg">
          Specialised consulting services bring structured methodologies and
          practical frameworks for faster execution.
        </p>
      </header>

      {/* ✅ Key Sections */}
      <section className="max-w-4xl mx-auto space-y-8 mb-20">
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Rapid Prototyping
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Experts develop MVPs to validate your model’s potential before
            full-scale rollout.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Model and Tool Selection
          </h2>
          <p className="text-gray-700 leading-relaxed">
            They recommend optimal model architectures, APIs, and open-source
            frameworks tailored to your goals.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Data Pipeline Design
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Consultants create efficient data workflows that streamline
            ingestion, cleaning, and labelling.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Scalability and Cost Planning
          </h2>
          <p className="text-gray-700 leading-relaxed">
            They design architectures that scale dynamically while managing
            infrastructure costs effectively.
          </p>
        </div>
      </section>

      {/* ✅ Mid Section */}
      <section className="max-w-3xl mx-auto mb-16 text-center">
        <p className="text-gray-800 text-lg leading-relaxed">
          By leveraging Generative AI Consulting, CTOs can turn vision into
          reality, moving from concept to market-ready product in record time.
        </p>
      </section>

      {/* ✅ Conclusion Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
          Conclusion
        </h3>

        <p className="text-gray-700 leading-relaxed mb-5">
          Generative AI is the next frontier in enterprise change, providing a
          chance for CTOs to drive innovation rather than follow it.
        </p>

        <p className="text-gray-700 leading-relaxed mb-5">
          Organisations may create bespoke AI systems that increase productivity,
          encourage creativity, and preserve data sovereignty by combining a
          strong CTO AI Strategy, scalable infrastructure, and the correct mix
          of LLM Development Services and Generative AI Consulting.
        </p>

        <p className="text-gray-700 leading-relaxed">
          In a world where every firm is increasingly AI-driven, those who build
          generative AI today will define tomorrow’s competitive edge — one in
          which human inventiveness and machine intelligence collaborate to
          create the future.
        </p>
      </section>

      {/* ✅ FAQ Section with + / - symbol */}
      <section className="max-w-4xl mx-auto mb-24">
        <h3 className="text-2xl font-semibold text-gray-900 mb-10 text-center">
          Frequently Asked Questions
        </h3>

        <div className="space-y-8">
          {faqs.map((faq, index) => {
            const isOpen = openFAQ === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="text-left border-b border-gray-200 pb-4"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none"
                >
                  <h4 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">
                    {faq.question}
                  </h4>
                  <span className="text-2xl font-bold text-blue-600">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-700 leading-relaxed pl-2 pt-2"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ✅ Author & Contact Section */}
      <section className="max-w-4xl mx-auto text-center pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <Image
            src="/images/Bigp2.png"
            alt="Author Avatar"
            width={64}
            height={64}
            className="rounded-full object-cover shadow-md"
          />
          <div className="text-left">
            <p className="font-semibold text-gray-900 text-lg">Priyajeet</p>
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
