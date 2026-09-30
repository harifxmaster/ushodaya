"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function QAAutomationBlogPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is automated testing expensive to implement?",
      a: "Initial setup requires investment, but most companies achieve full ROI within 12 to 24 months through reduced rework, faster delivery cycles, and eliminated production outages."
    },
    {
      q: "When should automation testing be introduced?",
      a: "Automation is most effective when introduced early using a shift-left strategy alongside development."
    },
    {
      q: "Can early-stage startups benefit from QA automation?",
      a: "Yes. Automation allows small engineering teams to scale predictably without drowning in manual test overhead as user bases grow."
    },
    {
      q: "Does automation replace manual testing?",
      a: "No. Automation handles regression and repetitive checks, freeing QA engineers to focus on exploratory, usability, and complex edge-case evaluations."
    },
    {
      q: "Which industries benefit most from QA automation?",
      a: "FinTech, HealthTech, SaaS, and E-commerce benefit significantly due to strict reliability, compliance, and zero-downtime requirements."
    }
  ];

  return (
    <div className="min-w-full bg-white">
      {/* Banner */}
      <section className="relative w-full h-[320px] sm:h-[400px]">
        <Image
          src="/images/QA.png"
          alt="QA and Automated Testing Cost Savings"
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
              How QA & Automated Testing Saves Costs
            </h1>
            <p className="mt-3 text-base sm:text-lg text-gray-200">
              Real Case Studies and Cost-Reduction Strategies from Product Development
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
              In modern product development, speed to market is critical—but software reliability is what preserves revenue and reputation. Companies that rush releases without structured quality processes face spiraling technical debt, emergency bug fixes, and customer churn.
            </p>
            <p>
              At Ushodaya Services, we implement shift-left testing and automated regression frameworks that systematically lower QA overhead while accelerating deployment velocity.
            </p>
          </section>

          {/* Section: Hidden Costs */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              The Hidden Cost of Poor Quality in Software Products
            </h2>
            <p>
              Industry research consistently demonstrates that resolving a bug post-release costs up to 30 times more than addressing it during initial requirements or build phases.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-3">
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>High Rework Costs:</strong> Engineering sprints consumed by patching legacy bugs instead of delivering revenue-generating features.</li>
                <li><strong>Production Outages:</strong> Unplanned downtime directly impacting transaction volume and brand reputation.</li>
                <li><strong>Delayed Roadmaps:</strong> Unverified integration bottlenecks stalling entire product releases.</li>
                <li><strong>Customer Churn:</strong> Friction in critical workflows driving users to competitors.</li>
              </ul>
            </div>
          </section>

          {/* Section: Long-Term Savings */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              How Automated Testing Unlocks Long-Term Cost Savings
            </h2>
            <p>
              Automated testing provides deterministic validation across the entire application lifecycle, creating compounding efficiency over time:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Reduced Manual Burden:</strong> Eliminates repetitive verification cycles for routine code changes.</li>
              <li><strong>Zero Human Regression Drift:</strong> Guarantees consistent validation across hundreds of user paths.</li>
              <li><strong>CI/CD Acceleration:</strong> Enables safe, continuous deployments multiple times per week.</li>
              <li><strong>Rapid Feedback Loops:</strong> Identifies defects within minutes of pull request submission.</li>
              <li><strong>Direct Cost Reductions:</strong> Delivers 40% to 70% QA expenditure reduction over 12 to 24 months.</li>
            </ul>
          </section>

          {/* Case Study 1 */}
          <section className="space-y-4 border-t border-gray-100 pt-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Case Study 1: SaaS Platform Cuts Bug Fix Costs by 65%
            </h2>
            <p>
              A mid-sized B2B SaaS platform serving over 150,000 active users struggled with critical defects slipping into production after each fortnightly release.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-3">
              <h3 className="font-bold text-gray-900">Strategy & Execution</h3>
              <p className="text-gray-700">
                We established automated smoke tests and continuous regression suites running directly inside the GitHub Actions CI/CD pipeline, coupled with shift-left acceptance criteria review.
              </p>
              <h3 className="font-bold text-gray-900 pt-2">Measurable Impact</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Production defects reduced by 65% in the first quarter</li>
                <li>Full regression testing duration dropped from 14 hours to 1.5 hours</li>
                <li>Engineering team recovered 2 full development days per two-week sprint</li>
                <li>Annual direct savings of £25,000 to £30,000</li>
              </ul>
            </div>
          </section>

          {/* Case Study 2 */}
          <section className="space-y-4 border-t border-gray-100 pt-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Case Study 2: UK FinTech Saves £40,000+ Annually with Automated Regression
            </h2>
            <p>
              A UK financial services provider managing complex KYC and payment verification pipelines experienced release cycles taking 5 full business days for manual testing.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-3">
              <h3 className="font-bold text-gray-900">Strategy & Execution</h3>
              <p className="text-gray-700">
                Architected a custom end-to-end automated framework covering payment gateway scenarios, identity verification checks, settlement calculations, and security layers.
              </p>
              <h3 className="font-bold text-gray-900 pt-2">Measurable Impact</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Regression turnaround compressed from 5 days to 6 hours</li>
                <li>Production defect leakage cut by 70%</li>
                <li>Annualized operational savings exceeded £40,000</li>
              </ul>
            </div>
          </section>

          {/* Case Study 3 */}
          <section className="space-y-4 border-t border-gray-100 pt-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Case Study 3: Preventing Launch-Day Failure with Load & Stress Testing
            </h2>
            <p>
              A fast-growing UK platform anticipated high initial traffic spikes during a national marketing campaign, requiring guaranteed database stability under load.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-3">
              <h3 className="font-bold text-gray-900">Strategy & Execution</h3>
              <p className="text-gray-700">
                Conducted distributed load testing simulating peak concurrent sessions, pinpointing slow database queries and authentication lockouts prior to public launch.
              </p>
              <h3 className="font-bold text-gray-900 pt-2">Measurable Impact</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Database query throughput improved by 3x</li>
                <li>Zero downtime or service degradation throughout launch week</li>
                <li>Protected estimated £20,000+ in launch-day revenue</li>
              </ul>
            </div>
          </section>

          {/* Case Study 4 & 5 */}
          <section className="space-y-4 border-t border-gray-100 pt-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Case Study 4: E-Commerce Brand Cuts Support Tickets by 55%
            </h2>
            <p>
              A digital commerce company experienced cart abandonment and customer complaints due to checkout validation glitches across diverse mobile browsers.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-3">
              <p className="text-gray-700">
                Through cross-browser automated testing and checkout funnel validation, checkout errors dropped by 70%, basket abandonment decreased by 18%, and support ticket volume fell by 55%.
              </p>
            </div>
          </section>

          {/* Section: Long-Term ROI */}
          <section className="space-y-4 border-t border-gray-100 pt-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Why Quality Assurance Is a Strategic Growth Driver
            </h2>
            <p>
              Automated testing is not an overhead expense—it is an investment in product velocity, predictability, and user retention. Teams with robust QA infrastructure release faster, debug less, and scale confidently.
            </p>
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
                Build Software That Performs Flawlessly
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
                Reduce testing cycles, prevent critical failures, and accelerate your engineering roadmap with automated QA frameworks from Ushodaya Services.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-block px-7 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition"
                >
                  Contact Our QA Team
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
