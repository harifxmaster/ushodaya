"use client";

import Image from "next/image";

export default function QAAutomationBlogPage() {
  return (
    <main className="w-full bg-white">

      {/* ================= SEO (App Router handled by metadata normally) ================= */}
      {/* Meta Title: How QA and Automated Testing Reduce Costs | Ushodaya Services */}
      {/* Meta Description: Discover how QA and Automated Testing help companies cut development costs... */}

      {/* ================= HERO BANNER ================= */}
      <section className="relative w-full h-[420px] md:h-[480px]">
        <Image
          src="/images/QA.png" // 🔁 replace with your banner image
          alt="QA and Automated Testing"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1180px] mx-auto px-4 text-white">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
              How QA & Automated Testing Saves Costs
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl text-gray-200">
              Real Case Studies from Product Development
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-[1180px] mx-auto px-4 py-16">

        {/* INTRO */}
        <p className="text-lg leading-relaxed text-gray-700">
          Today, speed is very important to product development; however,
          reliability is even more important than speed. Companies that rush
          to market without a well-established quality process often face
          massive rework, outages, and customer loss—leading to increased costs.
        </p>

        <p className="mt-6 text-lg leading-relaxed text-gray-700">
          At <strong>Ushodaya Services</strong>, we see measurable long-term cost
          reductions through early testing, automation strategy, and structured
          QA solutions. This article explores how QA saves money using real
          business case studies.
        </p>

        {/* ================= SECTION ================= */}
        <h2 className="mt-14 text-2xl md:text-3xl font-semibold text-gray-900">
          The Hidden Cost of Poor Quality in Software Products
        </h2>

        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Industry research, including NIST reports, shows that fixing a bug
          after release can cost up to <strong>30× more</strong> than fixing it
          during development.
        </p>

        <ul className="mt-6 space-y-4 text-gray-700 text-lg list-disc pl-6">
          <li>
            <strong>High Rework and Redevelopment Costs:</strong> Teams spend
            sprints fixing old issues instead of building new features.
          </li>
          <li>
            <strong>Production Outages and Instability:</strong> Crashes,
            downtime, and revenue loss.
          </li>
          <li>
            <strong>Delayed Product Launches:</strong> Untested integrations
            disrupt timelines.
          </li>
          <li>
            <strong>Customer Dissatisfaction and Churn:</strong> Poor UX leads
            to user drop-off and higher support costs.
          </li>
        </ul>

        {/* ================= SECTION ================= */}
        <h2 className="mt-16 text-2xl md:text-3xl font-semibold text-gray-900">
          How Automated Testing Unlocks Long-Term Cost Savings
        </h2>

        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Automation is not just about speed—it directly impacts profitability.
          Companies adopting automation testing frameworks consistently achieve:
        </p>

        <ul className="mt-6 space-y-4 text-gray-700 text-lg list-disc pl-6">
          <li><strong>Reduced Manual Effort:</strong> Less repetitive testing.</li>
          <li><strong>Lower Human Error:</strong> Consistent, accurate testing.</li>
          <li><strong>CI/CD Faster Releases:</strong> Multiple safe releases per week.</li>
          <li><strong>Instant Regression Coverage:</strong> Full test runs in minutes.</li>
          <li>
            <strong>Long-Term Cost Reduction:</strong> 40–70% QA cost savings
            within 12–24 months.
          </li>
        </ul>

        {/* ================= CASE STUDY ================= */}
        <h2 className="mt-16 text-2xl md:text-3xl font-semibold text-gray-900">
          Case Study: SaaS Platform Cuts Bug Fix Costs by 65%
        </h2>

        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          A mid-sized SaaS platform serving 150k+ users struggled with production
          bugs after every release.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-gray-900">
          Core Problems Identified
        </h3>

        <ul className="mt-4 space-y-3 text-gray-700 text-lg list-disc pl-6">
          <li>QA not aligned with development</li>
          <li>No structured regression coverage</li>
          <li>Manual testing bottlenecks</li>
          <li>No CI/CD automation</li>
        </ul>

        <h3 className="mt-10 text-xl font-semibold text-gray-900">
          Ushodaya Services’s Shift-Left QA Strategy
        </h3>

        <ul className="mt-4 space-y-4 text-gray-700 text-lg list-disc pl-6">
          <li>
            <strong>Requirement-Level QA:</strong> Acceptance criteria defined
            early with developers.
          </li>
          <li>
            <strong>Automated Smoke & Regression:</strong> Critical workflows
            fully covered.
          </li>
          <li>
            <strong>Continuous Testing:</strong> Automated regression on every
            pull request.
          </li>
        </ul>

        <h3 className="mt-10 text-xl font-semibold text-gray-900">
          Results Achieved
        </h3>

        <ul className="mt-4 space-y-3 text-gray-700 text-lg list-disc pl-6">
          <li>Production bugs reduced by <strong>65%</strong></li>
          <li>Regression time reduced from 14 hrs to 1.5 hrs</li>
          <li>Developers gained 2 extra days per sprint</li>
          <li>Support tickets reduced by 45%</li>
          <li><strong>Annual savings: £25,000–£30,000</strong></li>
        </ul>

        <p className="mt-10 text-lg text-gray-700 leading-relaxed">
          This case clearly shows how early QA and automated testing deliver
          measurable business value and long-term cost efficiency.
        </p>

      </section>

      {/* ================= BOTTOM SPACING ================= */}
      <div className="h-24" />
    </main>
  );
}
