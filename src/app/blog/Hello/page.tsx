"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function SmartWebsitesBlogPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Why is SEO needed during initial website development?",
      a: "SEO must be embedded during development to ensure search-friendly URL structures, fast rendering performance, proper schema markup, and clean site indexing from day one."
    },
    {
      q: "Is website security necessary for small businesses and startups?",
      a: "Yes. Small and growing businesses are frequent targets of automated bot attacks, phishing, and credential stuffing due to often overlooked basic security safeguards."
    },
    {
      q: "How directly does website speed affect conversion rates?",
      a: "Every second of load time delay can decrease user conversions by up to 20%. Speed optimization directly improves bounce rates and search rankings."
    },
    {
      q: "Can SEO and security be retrofitted after a website launch?",
      a: "While possible, retrofitting requires extensive code refactoring, database migrations, and structural rework that can cost 5 to 10 times more than building them correctly from the start."
    },
    {
      q: "What makes Ushodaya Services's web development approach unique?",
      a: "We integrate technical SEO, hardened security frameworks, responsive design, and conversion optimization directly into the initial development architecture."
    }
  ];

  return (
    <div className="min-w-full bg-white">
      {/* Banner */}
      <section className="relative w-full h-[320px] sm:h-[400px]">
        <Image
          src="/images/smart.png"
          alt="Digital Marketing and Website Security"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 text-white w-full">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-white transition mb-4"
            >
              ← Back to all insights
            </Link>
            <h1 className="text-2xl sm:text-4xl font-bold leading-tight">
              Combining Digital Marketing & Web Development
            </h1>
            <p className="mt-3 text-base sm:text-lg text-gray-200">
              Why Your Website Needs Search Engine Optimization & Robust Security from Day One
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="w-full bg-white">
        <article className="max-w-4xl mx-auto px-5 sm:px-8 py-10 sm:py-14 space-y-8 text-gray-800 text-base sm:text-lg leading-relaxed">
          {/* Introduction */}
          <section className="space-y-4">
            <p>
              A website is no longer just an informational brochure. In today&apos;s digital economy, it is the primary engine for brand reputation, customer acquisition, and business revenue.
            </p>
            <p>
              Two foundational elements are essential from the very first line of code: <strong>Search Engine Optimization (SEO)</strong> and <strong>enterprise-grade security</strong>. Treating either as an afterthought leads to poor rankings, security vulnerabilities, and expensive rebuilds.
            </p>
          </section>

          {/* Section: Why Marketing & Development Must Align */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Why Marketing and Development Must Work Together
            </h2>
            <p>
              Historically, organizations built a website first and brought in marketing teams afterward. Today, website architecture, page speed, code semantics, and mobile responsiveness dictate marketing outcomes:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-3">
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Search-Friendly Architecture:</strong> Clean URL hierarchies and automated XML sitemaps.</li>
                <li><strong>Core Web Vitals Performance:</strong> Optimized assets and minified code that satisfy Google ranking standards.</li>
                <li><strong>Built-In Threat Defense:</strong> Protection against SQL injection, DDoS, and cross-site scripting (XSS).</li>
                <li><strong>Conversion-Focused Layouts:</strong> Intuitive navigation designed to minimize bounce rates and guide user journeys.</li>
              </ul>
            </div>
          </section>

          {/* Section: SEO Begins at Development */}
          <section className="space-y-4 border-t border-gray-100 pt-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Technical SEO Begins in the Development Phase
            </h2>
            <p>
              SEO success requires technical excellence embedded directly into the software codebase:
            </p>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-lg font-bold text-gray-900">1. Site Architecture & Crawlability</h3>
                <p>Logical site hierarchy and structured breadcrumb pathways allow search engine crawlers to index deep pages efficiently.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">2. Performance & Speed Optimization</h3>
                <p>Modern asset compression, CDN caching, and lazy loading ensure instantaneous page load across global networks.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">3. Mobile-First Responsiveness</h3>
                <p>Fluid layouts and touch-optimized controls designed for Google&apos;s mobile-first indexing standards.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">4. Structured Data & Schema Markup</h3>
                <p>Semantic JSON-LD metadata that empowers search engines to display rich snippets and enhanced search cards.</p>
              </div>
            </div>
          </section>

          {/* Section: Website Security as a Necessity */}
          <section className="space-y-4 border-t border-gray-100 pt-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Security Is a Business Necessity, Not an Optional Add-On
            </h2>
            <p>
              Websites face continuous threats including malware injection, brute force attempts, and credential theft. Launching without comprehensive security puts customer data and business continuity at severe risk:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-3">
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Mandatory HTTPS & SSL:</strong> Encrypts sensitive traffic and avoids browser security warnings.</li>
                <li><strong>Web Application Firewalls (WAF):</strong> Filters malicious traffic, bad bots, and exploit attempts in real time.</li>
                <li><strong>Secure Code Standards:</strong> Sanitized input handlers preventing SQL injection and vulnerability exploits.</li>
                <li><strong>Automated Backup Systems:</strong> Continuous data snapshots ensuring rapid disaster recovery.</li>
              </ul>
            </div>
          </section>

          {/* Section: Impact Across Channels */}
          <section className="space-y-4 border-t border-gray-100 pt-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              How Technical Quality Multiplies Marketing ROI
            </h2>
            <p>
              Every marketing dollar spent directs users back to your primary digital properties. A secure, ultra-fast website multiplies campaign effectiveness:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Higher Paid Ad Quality Scores:</strong> Fast landing pages reduce cost per click (CPC) on Google and Meta Ads.</li>
              <li><strong>Increased Social Engagement:</strong> Responsive, frictionless pages reduce immediate bounce rates from social referrals.</li>
              <li><strong>Higher Email Campaign Conversions:</strong> Secure checkout and lightweight forms improve lead capture rates.</li>
            </ul>
          </section>

          {/* FAQs */}
          <section className="space-y-4 border-t border-gray-100 pt-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3 pt-2">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-5 cursor-pointer bg-white"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex justify-between items-center gap-4">
                    <h4 className="font-semibold text-base sm:text-lg text-gray-900">
                      {faq.q}
                    </h4>
                    <span className="text-xl font-bold text-gray-400 shrink-0">
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </div>
                  {openFaq === index && (
                    <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100 pt-3">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* CTA Box */}
          <section className="pt-4">
            <div className="bg-gray-900 text-white rounded-2xl p-8 sm:p-10 text-center space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Ready to Build a Fast, Secure, High-Performing Website?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
                Let Ushodaya Services architect a modern digital presence engineered for search visibility, uncompromising security, and high conversions.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-block px-7 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition"
                >
                  Consult Our Web & SEO Engineers
                </Link>
              </div>
            </div>
          </section>

          {/* Author */}
          <div className="border-t border-gray-200 pt-8 flex items-center gap-4">
            <Image
              src="/images/Bigp1.png"
              alt="Author Avatar"
              width={56}
              height={56}
              className="rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-900">Sakshi</p>
              <p className="text-gray-500 text-xs sm:text-sm">Verified Author | December 2025</p>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
