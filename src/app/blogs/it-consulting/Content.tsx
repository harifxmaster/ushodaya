"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TechStackAgility() {
  return (
    <section className="bg-white text-gray-800 py-16 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">
        {/* ===================================== */}
        {/* 1️⃣ How Your Tech Stack Directly Impacts Business Agility */}
        {/* ===================================== */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-blue-700 mb-8 text-center sm:text-left"
        >
          How Your Tech Stack Directly Impacts Business Agility
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg leading-8 mb-6"
        >
          Your tech stacks dictate how quickly you can respond to market shifts,
          customer needs, or new opportunities. Agile organisations don’t just use
          technology; they align it with strategy.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg leading-8 mb-8"
        >
          Here’s how your stack influences agility:
        </motion.p>

        {/* Key Sections */}
        <div className="space-y-10">
          {[
            {
              title: "Speed of Innovation",
              text: "Modern frameworks and APIs let developers launch features fast. Legacy tools slow down releases and reduce creativity.",
            },
            {
              title: "Integration and Automation",
              text: "If your stack supports APIs and workflow automation, your teams save hours of manual effort. Poor integration adds friction and errors.",
            },
            {
              title: "Scalability",
              text: "Cloud-native systems scale instantly with demand. Outdated infrastructure often crashes under pressure.",
            },
            {
              title: "User Experience",
              text: "A responsive interface and reliable backend create seamless digital experiences that drive customer retention.",
            },
            {
              title: "Cost Efficiency and ROI",
              text: "Smart ROI technology decisions, such as consolidating platforms and automating tasks, cut unnecessary costs and improve return on investment.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-7">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg leading-8 mt-10"
        >
          If your teams complain about slow tools or disconnected systems, you need a
          strategic review, not a quick fix. That’s where IT consulting and services
          can help.
        </motion.p>

        {/* ===================================== */}
        {/* 2️⃣ Engaging the Right IT Consulting Services for Your Audit */}
        {/* ===================================== */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-blue-700 mt-16 mb-8"
        >
          Engaging the Right IT Consulting Services for Your Audit
        </motion.h2>

        <div className="space-y-6 text-gray-700 leading-8">
          <p>
            Your IT strategic plan should start with a deep understanding of your
            current stack, where it performs well and where it holds you back. An
            unbiased audit from professional IT consulting services helps uncover
            those gaps.
          </p>
          <p>
            The right consulting team identifies inefficiencies, aligns technology
            with your business model, and builds a modernisation roadmap. They don’t
            just look at tools; they assess how each component impacts productivity,
            scalability, and security.
          </p>

          {/* ✅ Added Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center my-8"
          >
            <Image
              src="/images/images1.png"
              alt="IT Consulting Audit Illustration"
              width={900}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
          </motion.div>

          <p>
            If you’re based in a fast-evolving tech market like India, partnering with
            reliable{" "}
            <span className="font-semibold text-gray-900">
              IT consulting services India
            </span>{" "}
            ensures local expertise with global standards.
          </p>
        </div>

        {/* ===================================== */}
        {/* 3️⃣ The Role of an IT Consulting Partner in Your Assessment */}
        {/* ===================================== */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-blue-700 mt-16 mb-8"
        >
          The Role of an IT Consulting Partner in Your Assessment
        </motion.h2>

        {/* Understanding Business Goals Before Technology */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4 mb-8"
        >
          <h3 className="text-2xl font-semibold text-gray-900">
            Understanding Business Goals Before Technology
          </h3>
          <p>
            A great consultant starts with your goals, not your software. They study
            your growth targets, customer journey, and operational challenges.
          </p>
          <p>
            Only then do they design an IT strategic plan that fits your business, not
            the other way around.
          </p>
        </motion.div>

        {/* Conducting a Comprehensive Tech Stack Audit */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-4 mb-8"
        >
          <h3 className="text-2xl font-semibold text-gray-900">
            Conducting a Comprehensive Tech Stack Audit
          </h3>
          <p>Your consultant reviews every layer of your stack tech setup, including:</p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>Software performance</li>
            <li>Version updates</li>
            <li>Code quality</li>
            <li>Integration flow</li>
            <li>Cloud configuration</li>
            <li>Security posture</li>
          </ul>
          <p>
            They also track how your tools affect employee productivity and user
            satisfaction.
          </p>
        </motion.div>

        {/* Evaluating Cloud Readiness */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4 mb-8"
        >
          <h3 className="text-2xl font-semibold text-gray-900">
            Evaluating Cloud Readiness and Migration Opportunities
          </h3>
          <p>
            A key step in your legacy modernization strategy involves assessing cloud
            migration. Consultants evaluate whether moving to platforms like AWS,
            Azure, or Google Cloud will improve speed, flexibility, or costs. They
            guide you through the transition with minimal disruption.
          </p>
        </motion.div>

        {/* Identifying Redundant Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-4 mb-8"
        >
          <h3 className="text-2xl font-semibold text-gray-900">
            Identifying Redundant or Overlapping Tools
          </h3>
          <p>
            Redundant tools waste time and money. Consultants pinpoint unnecessary
            overlaps, like multiple CRMs or outdated analytics systems, and recommend
            consolidation. This streamlines your stack and boosts ROI.
          </p>
        </motion.div>

        {/* Reviewing Security and Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-4 mb-8"
        >
          <h3 className="text-2xl font-semibold text-gray-900">
            Reviewing Security and Compliance Layers
          </h3>
          <p>
            Cybersecurity threats grow daily. Consultants assess your access controls,
            encryption levels, and compliance frameworks.
          </p>
          <p>
            They ensure alignment with GDPR, ISO 27001, and SOC 2 standards, helping
            you stay audit-ready and risk-free.
          </p>
        </motion.div>

        {/* Assessing Scalability */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 mb-8"
        >
          <h3 className="text-2xl font-semibold text-gray-900">
            Assessing Scalability and Future-Proofing
          </h3>
          <p>
            Your tech stack should adapt as your company expands. Consultants evaluate
            scalability gaps and recommend microservices, APIs, and containerised
            solutions. This future-proofs your operations and eliminates technical
            debt.
          </p>
        </motion.div>

        {/* Improving Data Management */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4 mb-8"
        >
          <h3 className="text-2xl font-semibold text-gray-900">
            Improving Data Management and Integration
          </h3>
          <p>
            Data drives modern decision-making. Consultants analyse your data flow,
            ensuring accurate collection, clean storage, and actionable insights.
          </p>
          <p>
            They implement centralised data warehouses and dashboards to strengthen
            analytics and business intelligence.
          </p>
        </motion.div>

        {/* Optimising Cost Efficiency */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="space-y-4 mb-8"
        >
          <h3 className="text-2xl font-semibold text-gray-900">
            Optimising Cost Efficiency and ROI
          </h3>
          <p>
            Smart spending defines long-term success. Consultants review software
            licensing, infrastructure costs, and automation potential.
          </p>
          <p>
            By optimising resource use and eliminating waste, they maximise ROI
            technology performance.
          </p>
        </motion.div>

        {/* Building a Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4 mb-8"
        >
          <h3 className="text-2xl font-semibold text-gray-900">
            Building a Roadmap for Modernisation
          </h3>
          <p>
            After the audit, consultants create a clear roadmap outlining short- and
            long-term actions. This legacy modernization strategy includes priorities,
            migration timelines, ROI projections, and upskilling plans for your teams.
          </p>
        </motion.div>

        {/* Training and Change Management */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-semibold text-gray-900">
            Training and Change Management
          </h3>
          <p>
            Modernising tech means upgrading mindsets too. Consultants train teams to
            adapt to new tools and guide leaders in managing change effectively. With
            the right approach, your people evolve alongside your technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
