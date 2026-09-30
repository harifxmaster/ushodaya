"use client";

import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function ItConsultingBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <article className="bg-white text-gray-800">
        {/* ================= HERO BANNER ================= */}
        <div className="relative w-full h-[320px] sm:h-[400px] overflow-hidden bg-slate-900">
          <Image
            src="/images/a3.jpg"
            alt="Tech Stack Audit"
            fill
            priority
            className="object-cover object-center brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-slate-900/40" />
          <div className="absolute inset-0 bg-black/20" />

          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-16 sm:pt-20 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium mb-4">
                IT Consulting &amp; Strategy
              </span>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-md">
                Tech Stacks Audit: Asset or Legacy Trap
              </h1>
              <div className="mt-4 flex items-center justify-center gap-3 text-xs sm:text-sm text-gray-200 font-medium">
                <span>28 October 2025</span>
                <span>•</span>
                <span>6 min read</span>
                <span>•</span>
                <span>By Sakshi</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ================= MAIN BLOG BODY ================= */}
        <main className="max-w-4xl mx-auto px-5 sm:px-8 py-10 sm:py-14 space-y-10 text-gray-800 leading-relaxed">
          
          {/* Back link */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-gray-600 transition"
            >
              <span>&larr;</span>
              <span>Back to all insights</span>
            </Link>
            <span className="text-xs text-gray-500 font-medium">Category: IT Consulting</span>
          </div>

          {/* Lead Intro */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed border-b border-gray-100 pb-8"
          >
            <p className="text-lg sm:text-xl font-medium text-gray-900 leading-relaxed">
              Discover how modern tech stacks impact business performance. Learn to audit, modernise, and optimise your technology with expert IT consulting services.
            </p>
            <p>
              In 2025, technology is what will determine whether your business can grow or stagnate. The technology you choose — that is, your tech stack — determines how quickly you can innovate, how efficiently your teams can work, and how well you can serve customers.
            </p>
            <p>
              When your tech stacks are aligned with your goals, it is a strategic asset. When not kept up to date or properly managed, it becomes a legacy liability that slows growth, eats into budgets, and frustrates teams.
            </p>
          </motion.div>

          {/* Section 1: Strategic Asset vs Legacy Liability */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Is Your Tech Stack a Strategic Asset or a Legacy Liability?
            </h2>
            <p className="text-gray-700">
              How can you tell if your tech stack is conducive to your success or hindering it? This guide by <strong>Ushodaya Services</strong> breaks down what a tech stack really is, how it affects agility, and how proactive IT consulting can transform your digital foundation.
            </p>
          </section>

          {/* Section 2: Direct Impact on Business Agility */}
          <section className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              How Your Tech Stack Directly Impacts Business Agility
            </h2>
            <p className="text-gray-700">
              Your tech stack dictates how quickly you can respond to market shifts, customer needs, or new opportunities. Agile organisations don&apos;t just use technology; they align it directly with corporate strategy.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 text-base mb-1.5">Speed of Innovation</h3>
                <p className="text-sm text-gray-600">Modern frameworks and microservices let engineers deploy features rapidly. Legacy tools delay releases and hinder team velocity.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 text-base mb-1.5">Integration &amp; Automation</h3>
                <p className="text-sm text-gray-600">Unified APIs and automated CI/CD pipelines save thousands of engineering hours, eliminating error-prone manual workflows.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 text-base mb-1.5">Elastic Scalability</h3>
                <p className="text-sm text-gray-600">Cloud-native architectures automatically handle sudden traffic spikes without expensive downtime or crashing.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 text-base mb-1.5">User Experience</h3>
                <p className="text-sm text-gray-600">Sub-second response times and high availability boost customer retention and conversion rates across all devices.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 sm:col-span-2">
                <h3 className="font-bold text-gray-900 text-base mb-1.5">Cost Efficiency &amp; ROI</h3>
                <p className="text-sm text-gray-600">Retiring redundant SaaS tools and migrating off legacy systems directly reduces overhead and technical debt.</p>
              </div>
            </div>
          </section>

          {/* Section 3: What is a Tech Stack */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              What is a Tech Stack? The Foundation of Your Digital Operations
            </h2>
            <p className="text-gray-700">
              Technology stacks are the compilation of programming languages, frameworks, databases, front-end and back-end tools, and cloud infrastructures that power digital products and operations. In simple terms, your tech stack is your company&apos;s technological DNA.
            </p>
            <p className="text-gray-700">
              The goal of modern IT consulting is to turn this stack from an unmanageable cost center into a long-term strategic enabler.
            </p>
          </section>

          {/* Section 4: Layers of a Modern Tech Stack */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Breaking Down the Layers of a Modern Tech Stack
            </h2>
            <p className="text-gray-700">
              A resilient stack coordinates multiple specialised layers:
            </p>

            <div className="space-y-3">
              {[
                { title: "Frontend (UI / UX Layer)", desc: "React, Next.js, Vue, Angular — delivering reactive, accessible interfaces." },
                { title: "Backend (Server & Business Logic)", desc: "Node.js, Python, Java, Go, Spring Boot — handling authentication, workflows, and core business rules." },
                { title: "Database & Storage Layer", desc: "PostgreSQL, MongoDB, Redis, MySQL — structured, performant, and reliable data persistence." },
                { title: "Cloud & Infrastructure Layer", desc: "AWS, Google Cloud, Azure — enabling global distribution, serverless scaling, and automated backups." },
                { title: "DevOps & Automation Pipeline", desc: "Docker, Kubernetes, GitHub Actions, Terraform — continuous delivery with zero downtime." },
                { title: "Security & Compliance Layer", desc: "End-to-end encryption, OAuth2, Web Application Firewalls (WAF), and compliance tools." },
                { title: "Observability & Telemetry", desc: "Datadog, OpenTelemetry, Prometheus, Sentry — real-time monitoring and proactive error tracking." },
              ].map((layer, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-gray-50 border border-gray-200 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                  <span className="font-bold text-gray-900 text-sm sm:text-base min-w-[240px]">{layer.title}:</span>
                  <span className="text-sm text-gray-600">{layer.desc}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Common Examples */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Common Architecture Examples in Action
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-lg border border-gray-200 bg-white">
                <h3 className="font-bold text-gray-900 text-base mb-2">E-Commerce Platform</h3>
                <ul className="text-xs text-gray-600 space-y-1.5">
                  <li>• <strong>Frontend:</strong> Next.js &amp; Tailwind</li>
                  <li>• <strong>Backend:</strong> Node.js Microservices</li>
                  <li>• <strong>Database:</strong> PostgreSQL &amp; Redis</li>
                  <li>• <strong>Payments:</strong> Stripe / Razorpay</li>
                  <li>• <strong>Hosting:</strong> AWS Cloud</li>
                </ul>
              </div>
              <div className="p-5 rounded-lg border border-gray-200 bg-white">
                <h3 className="font-bold text-gray-900 text-base mb-2">High-Growth SaaS</h3>
                <ul className="text-xs text-gray-600 space-y-1.5">
                  <li>• <strong>Frontend:</strong> React &amp; TypeScript</li>
                  <li>• <strong>Backend:</strong> Python FastApi / Go</li>
                  <li>• <strong>Data:</strong> DynamoDB &amp; Snowflake</li>
                  <li>• <strong>Infra:</strong> Kubernetes &amp; Docker</li>
                  <li>• <strong>Telemetry:</strong> Datadog</li>
                </ul>
              </div>
              <div className="p-5 rounded-lg border border-gray-200 bg-white">
                <h3 className="font-bold text-gray-900 text-base mb-2">Enterprise Web App</h3>
                <ul className="text-xs text-gray-600 space-y-1.5">
                  <li>• <strong>Frontend:</strong> Modern Web UI</li>
                  <li>• <strong>Backend:</strong> Java Spring / .NET</li>
                  <li>• <strong>Database:</strong> MS SQL / Postgres</li>
                  <li>• <strong>Security:</strong> Okta SSO &amp; WAF</li>
                  <li>• <strong>Cloud:</strong> Microsoft Azure</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6: Audit Checklist Table */}
          <section className="space-y-4 pt-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              IT Consulting Audit: Asset vs Liability Checklist
            </h2>
            <p className="text-gray-700">
              Use this strategic checklist to benchmark your architecture:
            </p>

            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-left text-sm text-gray-700 border-collapse">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="p-3.5 font-semibold">Evaluation Area</th>
                    <th className="p-3.5 font-semibold">Diagnostic Question</th>
                    <th className="p-3.5 font-semibold">Strategic Asset</th>
                    <th className="p-3.5 font-semibold">Legacy Liability</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {[
                    { area: "Scalability", q: "Can your stack grow with demand?", asset: "Auto-scales on cloud effortlessly", liability: "Crashes or slows under peak load" },
                    { area: "Integration", q: "Do internal tools connect automatically?", asset: "Unified APIs & automated flows", liability: "Siloed data & manual copy-pasting" },
                    { area: "Security", q: "Are systems proactively secured?", asset: "Continuous compliance & zero-trust", liability: "Unpatched dependencies & risks" },
                    { area: "Performance", q: "Do users experience instant loading?", asset: "Sub-second, high-availability uptime", liability: "High latency & recurring glitches" },
                    { area: "Deployment Speed", q: "How fast can you ship new features?", asset: "Daily CI/CD automated releases", liability: "Weeks of manual QA & deployments" },
                    { area: "Cost & ROI", q: "Are software budgets well-optimised?", asset: "Lean, high-utility cloud spend", liability: "Paying for unused legacy licenses" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition">
                      <td className="p-3.5 font-semibold text-gray-900 whitespace-nowrap">{row.area}</td>
                      <td className="p-3.5 text-gray-600">{row.q}</td>
                      <td className="p-3.5 text-gray-800 font-medium">{row.asset}</td>
                      <td className="p-3.5 text-gray-500 font-medium">{row.liability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 7: Conclusion & CTA */}
          <section className="bg-gray-900 text-white p-8 sm:p-10 rounded-xl space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to Modernise Your Architecture?
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Your tech stack either accelerates your growth or anchors you to past inefficiencies. Partner with <strong>Ushodaya Services</strong> to conduct a full architectural audit and build a future-ready technology foundation.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-7 py-3 rounded-lg text-sm sm:text-base transition"
              >
                Schedule an IT Assessment
              </Link>
              <Link
                href="/services"
                className="border border-gray-700 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-lg text-sm sm:text-base transition"
              >
                Explore Consulting Services
              </Link>
            </div>
          </section>

          {/* Author Box */}
          <div className="border-t border-gray-200 pt-6 flex items-center gap-4">
            <Image
              src="/images/Bigp1.png"
              alt="Author Avatar"
              width={52}
              height={52}
              className="rounded-full border border-gray-200"
            />
            <div>
              <p className="font-bold text-gray-900 text-base">Sakshi</p>
              <p className="text-xs text-gray-500">Technology Consultant &amp; Writer at Ushodaya Services</p>
            </div>
          </div>

        </main>
      </article>

      <Footer />
    </>
  );
}

