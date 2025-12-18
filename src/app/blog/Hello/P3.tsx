"use client";

import Image from "next/image";
import { useState } from "react";

export const metadata = {
  title: "Smarter Websites with Digital Marketing & Strong Security",
  description:
    "Discover why combining digital marketing with web development and security from day one helps your website rank higher, perform faster, and stay protected.",
};

export default function SmarterWebsitesPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  return (
    <main className="w-full bg-white text-gray-800">

      {/* ================= MAIN CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">

        {/* ================= MARKETING CHANNELS ================= */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            A High-Performing Website Supports All Digital Marketing Channels
          </h2>

          <p className="text-lg leading-relaxed">
            Your website is the destination for every digital marketing effort.
            If it’s slow, insecure, or poorly optimised, every campaign
            underperforms.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">SEO Rankings Improve</h3>
          <p className="text-lg leading-relaxed">
            A technically sound website ranks faster and higher on search engines.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Paid Ads Perform Better</h3>

          <p className="text-lg leading-relaxed">
            Google Ads and Meta Ads reward:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Fast-loading websites</li>
            <li>Low bounce rates</li>
            <li>Well-structured landing pages</li>
          </ul>

          <p className="text-lg leading-relaxed">
            This results in lower cost per click and higher ROI.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Social Media Traffic Increases Retention
          </h3>
          <p className="text-lg leading-relaxed">
            A fast, visually strong website keeps users engaged longer and
            improves social traffic retention.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Email Marketing Becomes More Effective
          </h3>

          <p className="text-lg leading-relaxed">
            Campaigns convert better when they lead to:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Fast-loading pages</li>
            <li>Secure forms</li>
            <li>Easy checkout flow</li>
          </ul>

          <p className="text-lg leading-relaxed">
            Your website is the backbone of all marketing campaigns.
          </p>
        </div>

        {/* ================= WHAT GOES WRONG ================= */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            What Happens When You Build a Website Without SEO & Security?
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Slow website performance</li>
            <li>Poor indexing on Google</li>
            <li>Low search visibility</li>
            <li>High bounce rates</li>
            <li>Security vulnerabilities</li>
            <li>Costly redesigns</li>
            <li>Poor brand credibility</li>
            <li>Lower conversion rates</li>
          </ul>

          <p className="text-lg leading-relaxed">
            Fixing these issues later costs <strong>5–10 times more</strong> than
            building them correctly from the start.
          </p>
        </div>

        {/* ================= WT SOFTECH APPROACH ================= */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold">
            How WT Softech Combines Digital Marketing & Web Development
          </h2>

          <p className="text-lg leading-relaxed">
            WT Softech follows a holistic framework where developers and digital
            marketers collaborate from day one to build high-performing,
            SEO-ready, secure websites.
          </p>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">SEO-Driven Architecture</h3>
            <p className="text-lg">
              Clean URLs, schema markup, optimised sitemaps, and mobile-first
              design.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">In-Built Security Framework</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>SSL</li>
              <li>Firewalls</li>
              <li>Encrypted forms</li>
              <li>Anti-malware tools</li>
              <li>Regular backups</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">
              Ultra-Fast Performance Optimisation
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Compressed media</li>
              <li>Optimised code</li>
              <li>Next-gen hosting</li>
              <li>Caching & CDN</li>
              <li>Lazy loading</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Marketing-Ready Setup</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Google Analytics</li>
              <li>Search Console</li>
              <li>Facebook Pixel</li>
              <li>Ad tracking</li>
              <li>Lead capture tools</li>
            </ul>
          </div>
        </div>

        {/* ================= FUTURE ================= */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            The Future: Websites Built Around Marketing Intelligence
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>AI-based SEO optimisation</li>
            <li>Predictive CRO</li>
            <li>Auto-security patching</li>
            <li>Real-time threat detection</li>
            <li>Personalisation engines</li>
            <li>Automated marketing triggers</li>
          </ul>

          <p className="text-lg leading-relaxed">
            Websites will become intelligent growth engines—constantly learning,
            adapting, and optimising.
          </p>
        </div>

        {/* ================= FAQ ================= */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Frequently Asked Questions
          </h2>

          {[
            ["Why is SEO needed during website development?",
              "SEO must be embedded during development to ensure clean structure, fast performance, and proper indexing from launch."],
            ["Is website security really necessary for small businesses?",
              "Yes. Small businesses are often targeted due to weaker security setups."],
            ["Does website speed affect conversions?",
              "Absolutely. Faster websites improve engagement, rankings, and sales."],
            ["Can SEO and security be added later?",
              "They can, but fixing them later costs significantly more."],
            ["What makes WT Softech different?",
              "We integrate SEO, security, performance, and CRO from day one."]
          ].map(([q, a], i) => (
            <div key={i} className="border rounded-lg p-5">
              <h3
                className="font-semibold text-lg cursor-pointer hover:text-blue-600 flex items-center"
                onClick={() => toggleFAQ(i)}
              >
                <span className="mr-2 text-xl">{openFAQ === i ? '-' : '+'}</span>
                {q}
              </h3>
              {openFAQ === i && (
                <p className="mt-2 text-gray-700">{a}</p>
              )}
            </div>
          ))}
        </div>

        {/* ================= CTA ================= */}
        <div className="bg-gray-900 text-white rounded-2xl p-10 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to Build a High-Performing Website?
          </h2>
          <p className="text-lg text-gray-300">
            Let WT Softech build a secure, SEO-ready, conversion-focused website
            that scales with your business.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold">
            Get Started Today
          </button>
        </div>

        {/* ================= AUTHOR ================= */}
        <div className="flex items-center gap-6 border-t pt-10">
          <Image
            src="/images/Bigp1.png"
            alt="Author"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold text-gray-900 text-lg">Sakshi</p>
            <p className="text-gray-500 text-sm">
              Verified Author | 24 december 2025
            </p>
          </div>
          <div>
            <p className="font-semibold text-lg">WT Softech Team</p>
            <p className="text-gray-600">
              Experts in SEO-driven web development, digital marketing, and
              enterprise-grade website security.
            </p>
          </div>
        </div>

      </section>
    </main>
  );
}
