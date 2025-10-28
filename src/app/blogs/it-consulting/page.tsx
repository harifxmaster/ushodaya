"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Conclusion from "./Conclusion";
import Conpect from "./Conpect";
import Content from "./Content";

export default function ItConsultingBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ✅ Meta Tags for SEO */}
      <Head>
        <title>Tech Stacks Audit: Asset or Legacy Trap | WT Softech</title>
        <meta
          name="description"
          content="Discover how modern tech stacks impact business performance. Learn to audit, modernise, and optimise your technology with expert IT consulting services."
        />
      </Head>

      <section className="bg-white text-gray-800">
        {/* ✅ Hero Section */}
        <div className="relative w-full h-[280px] sm:h-[400px] overflow-hidden">
          <Image
            src="/images/a2.jpg"
            alt="Tech Stack Audit"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-3xl sm:text-5xl font-bold text-center px-4"
            >
              Tech Stacks Audit: Asset or Legacy Trap
            </motion.h1>
          </div>
        </div>

        {/* ✅ Blog Content */}
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-12 sm:py-20">
          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-lg sm:text-xl text-gray-700 mb-8"
          >
            Discover how modern tech stacks impact business performance. Learn to
            audit, modernise, and optimise your technology with expert IT consulting
            services.
          </motion.p>

          {/* Section 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-4">
              Is Your Tech Stack a Strategic Asset or a Legacy Liability?
            </h2>
            <p className="text-gray-700 leading-8 mb-4">
              In 2025, technology is what will determine whether your business can
              grow or stagnate. The technology you choose — that is, your tech stack —
              determines how quickly you can innovate, how efficiently your teams can
              work, and how well you can serve customers.
            </p>
            <p className="text-gray-700 leading-8 mb-4">
              When your tech stacks are aligned with your goals, it is a strategic
              asset. When not kept up to date or properly managed, it becomes a legacy
              liability that slows growth, eats into budgets, and frustrates teams.
            </p>
            <p className="text-gray-700 leading-8 mb-6">
              How can you tell if your tech stack is conducive to your success or
              hindering it? This blog by WT Softech discusses what a tech stack really
              is, how it affects your agility in business, and how the best IT
              consulting services can transform your entire digital foundation.
            </p>
          </motion.div>

          {/* ✅ NEW SECTION: How Your Tech Stack Directly Impacts Business Agility */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-6">
              How Your Tech Stack Directly Impacts Business Agility
            </h2>

            <p className="text-gray-700 leading-8 mb-6">
              Your tech stacks dictate how quickly you can respond to market shifts,
              customer needs, or new opportunities. Agile organisations don’t just use
              technology; they align it with strategy.
            </p>

            <p className="text-gray-700 leading-8 mb-6">
              Here’s how your stack influences agility:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Speed of Innovation
                </h3>
                <p className="text-gray-700 leading-7">
                  Modern frameworks and APIs let developers launch features fast.
                  Legacy tools slow down releases and reduce creativity.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Integration and Automation
                </h3>
                <p className="text-gray-700 leading-7">
                  If your stack supports APIs and workflow automation, your teams save
                  hours of manual effort. Poor integration adds friction and errors.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Scalability
                </h3>
                <p className="text-gray-700 leading-7">
                  Cloud-native systems scale instantly with demand. Outdated
                  infrastructure often crashes under pressure.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  User Experience
                </h3>
                <p className="text-gray-700 leading-7">
                  A responsive interface and reliable backend create seamless digital
                  experiences that drive customer retention.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Cost Efficiency and ROI
                </h3>
                <p className="text-gray-700 leading-7">
                  Smart ROI technology decisions, such as consolidating platforms and
                  automating tasks, cut unnecessary costs and improve return on
                  investment.
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-8 mt-6">
              If your teams complain about slow tools or disconnected systems, you
              need a strategic review, not a quick fix. That’s where IT consulting and
              services can help.
            </p>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-4">
              What is a Tech Stack? The Foundation of Your Digital Operations
            </h2>
            <p className="text-gray-700 leading-8 mb-4">
              All companies, from the smallest startup to the largest multinational
              corporation, rely on technology that powers their daily business
              functions. Such technology is known as a tech stack or, in some
              instances, stack tech.
            </p>
            <p className="text-gray-700 leading-8 mb-4">
              Technology stacks are the compilation of hardware and software products,
              programming languages, and cloud infrastructures that support the
              company’s digital products and processes. To put it simply, your tech
              stack is your company’s technological DNA.
            </p>
            <p className="text-gray-700 leading-8 mb-4">
              A modern tech stack consists of marketing automation, CRM systems,
              application environments, analytics, and security technologies. The
              more effectively the tech stack functions, the greater the speed,
              visibility, and control your business enjoys.
            </p>
            <p className="text-gray-700 leading-8 mb-6">
              The goal is to turn the tech stack into a long-term enabler through
              appropriate planning and regular auditing processes.
            </p>
          </motion.div>

          {/* Section 3: Breaking Down the Layers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-6">
              Breaking Down the Layers of a Modern Tech Stack
            </h2>

            <p className="text-gray-700 leading-8 mb-6">
              A strong stack relies on well-coordinated layers, each serving a
              specific function in your digital ecosystem.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Frontend (User Interface Layer)
                </h3>
                <p className="text-gray-700 leading-7">
                  This is what users see and interact with, from websites to mobile
                  apps. Frameworks like React, Vue.js, or Angular help create smooth
                  and dynamic interfaces that enhance the user experience.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Backend (Server-Side Logic)
                </h3>
                <p className="text-gray-700 leading-7">
                  The backend powers everything behind the scenes: authentication,
                  data processing, and business logic. Common technologies include
                  Node.js, Django, and Spring Boot.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Database Layer
                </h3>
                <p className="text-gray-700 leading-7">
                  Here, all your business data lives. MySQL, PostgreSQL, and MongoDB
                  are popular database solutions that offer flexibility and
                  scalability.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Infrastructure and Cloud Layer
                </h3>
                <p className="text-gray-700 leading-7">
                  This layer defines where your apps live. Cloud providers like AWS,
                  Microsoft Azure, and Google Cloud enable scalable hosting with
                  global availability.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  DevOps Tools and Automation
                </h3>
                <p className="text-gray-700 leading-7">
                  Automation tools like Docker, Kubernetes, and Jenkins streamline
                  development and deployment. They improve collaboration and ensure
                  rapid software delivery.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Security and Compliance Layer
                </h3>
                <p className="text-gray-700 leading-7">
                  Security forms the foundation of trust. Encryption, firewalls, and
                  identity management tools keep your systems safe and compliant.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Analytics and Monitoring Tools
                </h3>
                <p className="text-gray-700 leading-7">
                  Data-driven companies rely on tools like Datadog, Power BI, or
                  Google Analytics for visibility and performance insights. These
                  tools help calculate the ROI of technology investments by tracking
                  how each component contributes to outcomes.
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-8 mt-6">
              Together, these layers create a digital framework that defines your
              operational strength. If one layer fails or falls behind, the entire
              system’s efficiency drops.
            </p>
          </motion.div>

          {/* ✅ Common Examples Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-6">
              Common Examples of Tech Stacks in Action
            </h2>
            <p className="text-gray-700 leading-8 mb-8">
              Different industries use different tech stacks depending on goals and
              complexity.
            </p>

            {/* Example 1 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                E-commerce Business
              </h3>
              <ul className="text-gray-700 space-y-1 leading-7">
                <li><strong>Frontend:</strong> React.js</li>
                <li><strong>Backend:</strong> Node.js</li>
                <li><strong>Database:</strong> MongoDB</li>
                <li><strong>Hosting:</strong> AWS</li>
                <li><strong>Payment Gateway:</strong> Stripe</li>
                <li><strong>Analytics:</strong> Google Analytics</li>
              </ul>
              <p className="text-gray-700 mt-2">
                This setup supports high-volume transactions and personalisation.
              </p>
            </div>

            {/* Example 2 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                SaaS Product
              </h3>
              <ul className="text-gray-700 space-y-1 leading-7">
                <li><strong>Frontend:</strong> Angular</li>
                <li><strong>Backend:</strong> Python (Django)</li>
                <li><strong>Database:</strong> PostgreSQL</li>
                <li><strong>DevOps:</strong> Docker, Kubernetes</li>
                <li><strong>Monitoring:</strong> Datadog</li>
              </ul>
              <p className="text-gray-700 mt-2">
                Ideal for scalability and rapid updates.
              </p>
            </div>

            {/* Example 3 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Small Business Website
              </h3>
              <ul className="text-gray-700 space-y-1 leading-7">
                <li><strong>Frontend:</strong> WordPress</li>
                <li><strong>Backend:</strong> PHP</li>
                <li><strong>Database:</strong> MySQL</li>
                <li><strong>Hosting:</strong> SiteGround or DigitalOcean</li>
              </ul>
              <p className="text-gray-700 mt-2">
                Cost-effective, easy to manage, and perfect for startups.
              </p>
            </div>

            <p className="text-gray-700 leading-8 mt-8">
              Your stack should evolve as your business does. If your systems can’t
              integrate new tools or scale with demand, your legacy modernization
              strategy becomes critical.
            </p>
          </motion.div>


          {/* Footer Author Info */}
          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 border-t border-gray-200 pt-8 flex items-center gap-4"
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
                Verified Author | 28 October 2025
              </p>
            </div>
          </motion.div> */}
          <Content />
          <Conpect />
          <Conclusion />

        </div>
      </section>
    </>
  );
}
