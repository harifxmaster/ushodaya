"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function ITDecisionGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  return (
    <main className="w-full bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* PAGE TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          How to Decide What’s Right for Your SME
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-gray-700">
          Use this checklist to guide your decision.
        </p>

        {/* CHECKLIST */}
        <div className="mt-10 space-y-8">
          {[
            {
              title: "Assess Your IT Complexity",
              desc: "If your systems are highly customised and require constant internal coordination, in-house IT may work better. Standard IT needs are ideal for outsourcing.",
            },
            {
              title: "Analyse Your Budget",
              desc: "SMEs with lean budgets benefit greatly from outsourced IT services due to predictable and lower operational costs.",
            },
            {
              title: "Consider the Skills You Need",
              desc: "Outsourcing provides cybersecurity experts, cloud architects, and helpdesk support at the cost of one employee.",
            },
            {
              title: "Evaluate Downtime Risks",
              desc: "Managed IT services offer higher reliability, proactive monitoring, and reduced downtime.",
            },
            {
              title: "Determine Your Growth Plans",
              desc: "Scaling through a managed partner is faster and more seamless than hiring internally.",
            },
          ].map((item, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold text-gray-900">
                {item.title}
              </h2>
              <p className="mt-3 text-lg text-gray-700 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* HYBRID IT */}
        <h2 className="mt-16 text-2xl font-semibold text-gray-900">
          Hybrid IT: The Best of Both Worlds
        </h2>

        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Many SMEs choose a hybrid IT management model:
        </p>

        <ul className="mt-6 list-disc list-inside space-y-2 text-lg text-gray-700">
          <li>Internal team handles core operations</li>
          <li>IT partner manages cloud, security, and support</li>
        </ul>

        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          This approach balances control with advanced expertise.
        </p>

        {/* FAQ SECTION */}
        <h2 className="mt-20 text-2xl font-semibold text-gray-900 text-center">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition"
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                <span className="text-xl font-bold">
                  {openFaq === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 text-lg text-gray-700 bg-white"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* AUTHOR (CENTERED) */}
        <motion.div
          className="mt-20 flex flex-col items-center text-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/Bigp1.png"
            alt="Author Avatar"
            width={70}
            height={70}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold text-gray-900 text-lg">Sakshi</p>
            <p className="text-gray-500 text-sm">
              Verified Author | 18 December 2025
            </p>
          </div>
        </motion.div>

        {/* CTA (CENTERED) */}
        <motion.a
          href="/contact"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="block w-fit mx-auto mt-10 bg-blue-600 text-white font-semibold text-lg px-10 py-3 rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
        >
          Contact Us
        </motion.a>

      </div>
    </main>
  );
}
