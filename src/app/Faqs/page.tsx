"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiX, FiPlus, FiMinus, FiArrowRight } from "react-icons/fi";
import Footer from "@/components/Footer";

interface FAQItem {
  question: string;
  answer: string;
  keywords?: string[];
}

interface CategoryGroup {
  id: string;
  title: string;
  shortTitle: string;
  description?: string;
  faqs: FAQItem[];
}

const FAQ_CATEGORIES: CategoryGroup[] = [
  {
    id: "product-development",
    title: "Product Development",
    shortTitle: "Product Development",
    description:
      "From initial discovery and MVP prototypes to enterprise-grade web, mobile, and AI-driven platforms.",
    faqs: [
      {
        question: "What industries do you develop products for?",
        answer:
          "If it has a market, we build for it—including Fintech, Healthcare, E-Commerce, Logistics, SaaS, Retail, and Real Estate. Our engineering and domain expertise are tailored to create scalable and compliant software suited to your specific vertical.",
        keywords: ["industry", "fintech", "healthcare", "domains", "market", "saas"],
      },
      {
        question: "How long does custom product development take?",
        answer:
          "Development timelines depend on the project scope and complexity. Typically, an MVP (Minimum Viable Product) can be designed, built, and launched in 4 to 8 weeks. Comprehensive enterprise software suites generally take between 3 to 6 months using agile, two-week sprint cycles.",
        keywords: ["timeline", "duration", "mvp", "weeks", "months", "speed", "agile"],
      },
      {
        question: "Can you help with scaling and maintenance after launch?",
        answer:
          "Absolutely! We don’t just launch and walk away. We offer comprehensive post-launch SLA support, DevOps orchestration, database optimization, CI/CD automation, and cloud autoscaling to ensure uninterrupted performance as your user base expands.",
        keywords: ["scale", "maintenance", "post-launch", "support", "devops", "growth"],
      },
      {
        question: "Do you offer interactive prototypes before full development?",
        answer:
          "Yes! We build high-fidelity, clickable wireframes and prototypes in Figma. This allows stakeholders to test user flows, validate usability, and refine product specifications before committing full engineering resources.",
        keywords: ["prototype", "figma", "wireframe", "ui/ux", "validation", "design"],
      },
      {
        question: "What technologies and modern tech stacks do you use?",
        answer:
          "We leverage cutting-edge, battle-tested modern stacks: Next.js, React, TypeScript, Node.js, Python, FastAPI, Go, PostgreSQL, MongoDB, Redis, AWS, Google Cloud, Docker, Kubernetes, and state-of-the-art AI/ML toolchains.",
        keywords: ["tech stack", "react", "nextjs", "python", "node", "aws", "cloud", "database"],
      },
    ],
  },
  {
    id: "software-testing",
    title: "Software Testing & QA",
    shortTitle: "Software Testing",
    description:
      "Comprehensive end-to-end quality assurance, test automation, performance stress-testing, and vulnerability analysis.",
    faqs: [
      {
        question: "What types of software testing do you offer?",
        answer:
          "We provide automated testing, manual functional testing, regression testing, API & integration testing, performance & load testing (JMeter/k6), cross-browser/cross-platform testing, and security vulnerability audits.",
        keywords: ["testing types", "automation", "manual", "security", "performance", "api"],
      },
      {
        question: "Do you provide automated QA testing suites?",
        answer:
          "Yes! We build automated test suites using industry-leading frameworks like Playwright, Cypress, Selenium, and Appium. These tests are seamlessly integrated into your CI/CD pipelines to catch regressions instantly.",
        keywords: ["automated", "automation", "playwright", "cypress", "selenium", "ci/cd"],
      },
      {
        question: "How do you ensure cross-device and cross-browser compatibility?",
        answer:
          "We test across real physical devices, operating systems (iOS, Android, macOS, Windows, Linux), and browser engines (Chromium, WebKit, Gecko) using automated test farms and physical test labs.",
        keywords: ["devices", "browsers", "mobile", "compatibility", "responsive", "cross-platform"],
      },
      {
        question: "Can you audit and test an existing legacy application?",
        answer:
          "Definitely. We conduct full QA health checks, detect legacy performance bottlenecks, identify security vulnerabilities, and provide prioritized remediation blueprints along with test coverage reports.",
        keywords: ["existing app", "legacy", "audit", "health check", "refactor"],
      },
      {
        question: "What is the cost structure of software QA testing?",
        answer:
          "We offer flexible engagement models: project-based QA packages, dedicated QA engineers on monthly retainers, or on-demand hourly audits. Contact us for a transparent, customized estimate based on your test coverage goals.",
        keywords: ["cost", "pricing", "packages", "quote", "hourly", "retainer"],
      },
    ],
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    shortTitle: "IT Consulting",
    description:
      "Strategic digital roadmaps, architecture reviews, legacy modernization, cloud migration, and IT cost optimization.",
    faqs: [
      {
        question: "What industries do you consult for?",
        answer:
          "We consult for enterprises, mid-market companies, and venture-backed startups across technology, healthcare, manufacturing, BFSI, education, logistics, and retail.",
        keywords: ["industries", "consulting", "enterprises", "startups", "domains"],
      },
      {
        question: "Can you help optimize and reduce our IT infrastructure costs?",
        answer:
          "Yes. We conduct thorough cloud and infrastructure cost audits (AWS/Azure/GCP), identifying unutilized compute, over-provisioned databases, and redundant third-party SaaS subscriptions to achieve significant monthly cost reductions without sacrificing performance.",
        keywords: ["cost optimization", "cloud bill", "reduce expense", "infrastructure", "aws cost"],
      },
      {
        question: "Do you offer cybersecurity and compliance consulting?",
        answer:
          "Yes. Our security consultants assist with vulnerability scanning, penetration testing, compliance readiness (SOC 2, ISO 27001, GDPR, HIPAA), identity management (IAM), and robust zero-trust architecture implementations.",
        keywords: ["cybersecurity", "compliance", "soc 2", "gdpr", "hipaa", "security audit"],
      },
      {
        question: "How does IT consulting improve our core business operations?",
        answer:
          "By eliminating technological debt, automating manual workflows, integrating modern cloud native tools, and aligning your technical roadmap directly with your revenue and business milestones.",
        keywords: ["business growth", "tech roadmap", "efficiency", "automation", "modernization"],
      },
      {
        question: "Do you provide ongoing fractional CTO & architectural support?",
        answer:
          "Yes! We act as long-term strategic technology partners, offering Fractional CTO guidance, regular architectural steering, quarterly tech audits, and executive advisory.",
        keywords: ["ongoing support", "fractional cto", "long term", "advisory", "partnership"],
      },
    ],
  },
  {
    id: "it-services",
    title: "IT Services & Cloud",
    shortTitle: "IT Services",
    description:
      "High-availability cloud engineering, managed IT services, network security, and enterprise infrastructure management.",
    faqs: [
      {
        question: "Do you offer 24/7/365 managed IT support and monitoring?",
        answer:
          "Yes, we provide 24/7 Network Operations Center (NOC) and Security Operations (SOC) monitoring with guaranteed SLAs, fast response times, and automated incident alerting.",
        keywords: ["24/7", "support", "noc", "soc", "sla", "monitoring", "uptime"],
      },
      {
        question: "Can you migrate our on-premise infrastructure to the cloud?",
        answer:
          "Yes. We specialize in zero-downtime cloud migration to AWS, Microsoft Azure, and Google Cloud, following proven multi-phase migration frameworks with full data integrity verification.",
        keywords: ["cloud migration", "aws", "azure", "gcp", "zero downtime", "transfer"],
      },
      {
        question: "What cybersecurity and network defense measures do you deploy?",
        answer:
          "We implement next-generation firewalls, Web Application Firewalls (WAF), end-to-end encryption at rest & in transit, DDoS mitigation (Cloudflare/CloudFront), multi-factor authentication (MFA), and continuous vulnerability monitoring.",
        keywords: ["firewall", "encryption", "ddos", "cloudflare", "mfa", "protection"],
      },
      {
        question: "Do you cater to startups and small businesses as well as enterprises?",
        answer:
          "Yes! Our managed services scale dynamically with your organizational size, ensuring lean startups receive enterprise-grade security and reliability on cost-effective tiers.",
        keywords: ["small business", "startups", "enterprises", "tiers", "scaling"],
      },
      {
        question: "How do you handle critical IT emergencies and disaster recovery?",
        answer:
          "We implement robust Disaster Recovery (DR) and Business Continuity Plans (BCP) with multi-region failovers, automated snapshots, and RTO/RPO targets measured in minutes.",
        keywords: ["emergency", "disaster recovery", "backup", "failover", "bcp"],
      },
    ],
  },
  {
    id: "staffing-solutions",
    title: "Staffing Solutions",
    shortTitle: "Staffing",
    description:
      "Vetted full-stack developers, DevOps engineers, QA specialists, and IT leaders available for contract, contract-to-hire, and full-time placement.",
    faqs: [
      {
        question: "What tech roles and skills do you staff for?",
        answer:
          "We supply vetted software engineers (Frontend, Backend, Fullstack), Mobile developers (React Native, Flutter, Swift, Kotlin), Cloud & DevOps architects, Data Engineers, AI/ML developers, QA testers, and Scrum Masters.",
        keywords: ["roles", "talent", "developers", "engineers", "devops", "fullstack"],
      },
      {
        question: "Can you support remote and distributed team hiring?",
        answer:
          "Yes! We have global talent pipelines with pre-vetted professionals ready to work in your timezone with seamless remote collaboration tools and workflows.",
        keywords: ["remote", "offshore", "timezone", "distributed", "hire"],
      },
      {
        question: "What does your candidate screening and vetting process look like?",
        answer:
          "Our multi-tier vetting includes technical coding assessments, live architecture design interviews, soft-skills evaluations, and comprehensive background & reference verification. Only the top 3% of candidates make it to client interviews.",
        keywords: ["vetting", "screening", "interviews", "quality", "background check"],
      },
      {
        question: "Do you offer contract, contract-to-hire, and permanent staffing?",
        answer:
          "Yes, we provide flexible engagement terms: project-based contract augmentation, direct permanent placement, or contract-to-hire arrangements tailored to your hiring strategy.",
        keywords: ["contract", "full-time", "permanent", "contract to hire", "flexibility"],
      },
      {
        question: "How quickly can we interview and onboard a qualified candidate?",
        answer:
          "For standard tech stacks, we can provide curated, pre-screened candidate profiles within 48 to 72 hours, enabling rapid hiring and onboarding within 1 to 2 weeks.",
        keywords: ["speed", "turnaround", "time to hire", "48 hours", "onboarding"],
      },
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Digital Marketing",
    description:
      "Data-backed SEO campaigns, PPC advertising, content marketing, brand positioning, and social media growth strategies.",
    faqs: [
      {
        question: "What digital marketing channels and services do you manage?",
        answer:
          "We offer comprehensive 360-degree digital marketing: Technical & Content SEO, Google Ads (SEM), Meta/LinkedIn paid campaigns, Social Media Management, Email Marketing, CRO (Conversion Rate Optimization), and Performance Analytics.",
        keywords: ["channels", "seo", "ppc", "google ads", "social media", "content"],
      },
      {
        question: "How do you increase qualified organic website traffic and rankings?",
        answer:
          "Through deep keyword research, on-page optimization, technical site speed audits, high-intent editorial content creation, high-authority backlink outreach, and structured data schema implementation.",
        keywords: ["organic traffic", "ranking", "seo strategy", "backlinks", "speed"],
      },
      {
        question: "How do you manage paid ads (PPC) and ensure positive ROI?",
        answer:
          "We build precision audience targeting funnels, perform continuous A/B testing on ad copy and creative assets, optimize negative keywords, and implement server-side tracking (CAPI) to maximize Return on Ad Spend (ROAS).",
        keywords: ["ppc", "roi", "roas", "google ads", "facebook ads", "conversion"],
      },
      {
        question: "Do you create and execute end-to-end B2B social media campaigns?",
        answer:
          "Yes! We handle strategy, graphic design, copywriting, video editing, community engagement, and thought leadership campaigns across LinkedIn, Twitter/X, Instagram, and YouTube.",
        keywords: ["social media", "b2b", "linkedin", "branding", "copywriting"],
      },
      {
        question: "How do we measure campaign progress and performance metrics?",
        answer:
          "You receive real-time interactive Looker Studio / GA4 dashboards, bi-weekly performance reviews, and transparent monthly ROI reports highlighting traffic, leads, conversion rates, and revenue impact.",
        keywords: ["metrics", "reporting", "dashboard", "ga4", "analytics", "roi"],
      },
    ],
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "product-development-0": true,
  });

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Filter categories and questions based on active category & search query
  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return FAQ_CATEGORIES.map((cat) => {
      if (activeCategory !== "all" && cat.id !== activeCategory) {
        return null;
      }

      if (!query) {
        return cat;
      }

      const matchingFaqs = cat.faqs.filter((faq) => {
        const inQuestion = faq.question.toLowerCase().includes(query);
        const inAnswer = faq.answer.toLowerCase().includes(query);
        const inKeywords = faq.keywords?.some((k) => k.toLowerCase().includes(query));
        const inCatTitle = cat.title.toLowerCase().includes(query);
        return inQuestion || inAnswer || inKeywords || inCatTitle;
      });

      if (matchingFaqs.length === 0) {
        return null;
      }

      return {
        ...cat,
        faqs: matchingFaqs,
      };
    }).filter(Boolean) as CategoryGroup[];
  }, [activeCategory, searchQuery]);

  const totalMatchingFaqs = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.faqs.length, 0);
  }, [filteredCategories]);

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    if (val.trim()) {
      setActiveCategory("all");
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ================= GRAY TOP HEADER & CATEGORY SECTION ================= */}
      <section className="w-full bg-gray-100 border-b border-gray-300 pt-24 pb-8 sm:pt-28 sm:pb-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-1.5 text-sm font-medium text-blue-600 mb-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700">FAQs</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#061047] tracking-tight">
            Frequently Asked Questions
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Find quick answers to common questions about our services, process, and support.
          </p>

          {/* Simple Clean Search Bar */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative flex items-center bg-white rounded-xl border border-gray-300 shadow-xs focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
              <div className="pl-4 pr-2 text-gray-400">
                <FiSearch className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search questions or keywords..."
                className="w-full bg-transparent py-3 pr-4 text-sm sm:text-base outline-none text-gray-800 placeholder-gray-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="p-2 text-gray-400 hover:text-gray-700 transition mr-2 cursor-pointer"
                  aria-label="Clear search"
                >
                  <FiX className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Category Pills Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition cursor-pointer ${
                activeCategory === "all"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-white text-gray-800 hover:bg-gray-50 border border-gray-300 shadow-2xs"
              }`}
            >
              All FAQs
            </button>

            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-white text-gray-800 hover:bg-gray-50 border border-gray-300 shadow-2xs"
                }`}
              >
                {cat.shortTitle}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* Search Feedback */}
        {searchQuery && (
          <div className="mb-8 flex items-center justify-between p-3.5 rounded-lg bg-blue-50 text-sm text-blue-900">
            <span>
              Showing results for &ldquo;<strong>{searchQuery}</strong>&rdquo; ({totalMatchingFaqs} question{totalMatchingFaqs === 1 ? "" : "s"} found)
            </span>
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="text-xs font-bold text-blue-700 hover:underline"
            >
              Reset
            </button>
          </div>
        )}

        {/* FAQ Category Sections */}
        {filteredCategories.length > 0 ? (
          <div className="space-y-12">
            {filteredCategories.map((category) => (
              <section key={category.id} id={category.id}>
                {/* Category Title */}
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-[#061047]">
                    {category.title}
                  </h2>
                  {category.description && (
                    <p className="text-gray-600 text-sm mt-1">
                      {category.description}
                    </p>
                  )}
                </div>

                {/* FAQ Accordion List */}
                <div className="space-y-3 mt-4">
                  {category.faqs.map((faq, idx) => {
                    const itemKey = `${category.id}-${idx}`;
                    const isOpen = searchQuery.trim()
                      ? openItems[itemKey] !== false
                      : !!openItems[itemKey];

                    return (
                      <div
                        key={idx}
                        className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                          isOpen
                            ? "border-blue-500 bg-blue-50/30"
                            : "border-gray-200 bg-white hover:border-gray-300"
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => toggleItem(itemKey)}
                          className="w-full px-5 py-4 flex justify-between items-center text-left gap-4 cursor-pointer focus:outline-none"
                          aria-expanded={isOpen}
                        >
                          <span className="text-base sm:text-lg font-semibold text-gray-900">
                            {faq.question}
                          </span>

                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                              isOpen
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {isOpen ? (
                              <FiMinus className="w-3.5 h-3.5 stroke-[2.5]" />
                            ) : (
                              <FiPlus className="w-3.5 h-3.5 stroke-[2.5]" />
                            )}
                          </div>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              key="content"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2, ease: "easeInOut" }}
                            >
                              <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 mt-1">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-12 px-4 bg-gray-50 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900">
              No matching questions found
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              We couldn&apos;t find any FAQs matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Simple Contact Box */}
        <div className="mt-16 p-8 rounded-2xl bg-gray-50 border border-gray-200 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Still have questions?
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Can&apos;t find the answer you&apos;re looking for? Reach out to our support team.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition flex items-center gap-2 flex-shrink-0"
          >
            Contact Us <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}
