// app/page.tsx
"use client";

import Head from "next/head";
import Image from "next/image";
import { JSX, useState } from "react";

/**
 * Single-file page (client component) that:
 * - sets meta tags via next/head
 * - renders the full article content
 * - includes an interactive FAQ implemented locally
 * - now includes a top banner image with overlaid title text
 *
 * Drop this file into `app/page.tsx`.
 */

const faqs = [
  {
    question: "How is Artificial Intelligence changing IT consulting in 2025?",
    answer: `AI has shifted from “experimental” to “essential” in IT consulting. In 2025, consulting firms no longer run isolated AI pilot projects - they design AI-driven strategies that integrate directly with ERP, CRM, and supply chain systems. AI is also used for predictive insights, automated code generation, and intelligent decision support.

Firms like WT Softech now help clients scale AI responsibly—covering governance, bias prevention, and explainability. In short, AI is no longer an add-on; it’s the core foundation of digital transformation consulting.`,
  },
  {
    question: "What makes cloud-driven IT services a top business priority in 2025?",
    answer: `Cloud computing has evolved from a hosting solution to the intelligent backbone of modern enterprises.
In 2025, most organisations use multi-cloud and hybrid environments to stay agile and resilient. The rise of platform engineering, CloudOps, and AI-powered monitoring means businesses can scale, recover, and optimise automatically.

For service providers like WT Softech, this evolution creates opportunities to deliver end-to-end managed cloud services - from migration to 24/7 optimisation—helping clients innovate faster while reducing costs and downtime.`,
  },
  {
    question:
      "Why are companies still relying on Agile product development in 2025? Isn’t it old news?",
    answer: `Agile isn’t old—it’s evolved. While the core principles remain the same (flexibility, iteration, customer feedback), 2025’s agile ecosystem now includes DevOps integration, AI-assisted testing, and MVP-focused development.

Businesses use agile not just in software, but across entire organisations - marketing, HR, and operations included—to improve adaptability. WT Softech helps clients apply agile frameworks like SAFe and Spotify Model to deliver faster, data-driven outcomes. Agile remains the operating DNA of digital enterprises.`,
  },
  {
    question: "How does automated software testing improve product quality and speed?",
    answer: `Automated testing has become the default expectation in 2025’s fast-paced DevOps pipelines. Manual testing can’t keep up with continuous deployment cycles. Automation tools, powered by AI and ML, run thousands of test cases in minutes - detecting bugs, predicting anomalies, and even self-healing failed test scripts.

This means faster releases, fewer defects, and stronger performance. For IT firms like WT Softech, automated QA ensures that clients launch reliable software at scale - without compromising quality or security.`,
  },
  {
    question: "How can digital marketing help IT and consulting firms grow in 2025?",
    answer: `In 2025, innovation alone isn’t enough - visibility drives credibility. IT and consulting firms rely heavily on SEO, content marketing, and account-based marketing (ABM) to reach decision-makers in niche industries. AI tools are reshaping how campaigns are run—enabling predictive lead scoring, personalised content, and smart attribution tracking.

WT Softech and similar firms leverage these digital strategies to turn technical expertise into measurable business impact - building thought leadership and driving qualified leads in a competitive tech marketplace.`,
  },
];

function ClientFAQ(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-200 rounded-xl shadow-sm">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-900 hover:bg-gray-100 transition"
            aria-expanded={openIndex === index}
            aria-controls={`faq-panel-${index}`}
          >
            <span>{faq.question}</span>
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </button>

          {openIndex === index && (
            <div
              id={`faq-panel-${index}`}
              className="px-4 pb-4 text-gray-700 whitespace-pre-line"
            >
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Card(): JSX.Element {
  return (
    <>
      <Head>
        <title>Top IT Innovations Transforming Business 2025 | WT Softech</title>
        <meta
          name="description"
          content="Explore the top 5 IT trends transforming businesses in 2025, from AI IT strategy to agile software development. Stay ahead with WT Softech’s expert insights."
        />
      </Head>

      {/* Global Styles */}
      <style jsx global>{`
        html,
        body,
        #__next {
          background: #ffffff !important;
          color: #111827 !important;
          height: 100%;
        }
      `}</style>

      {/* Banner Section */}
      <section className="relative w-full h-[400px] sm:h-[450px] md:h-[500px]">
        <Image
          src="/images/a2.jpg" // 👈 replace with your banner image path
          alt="Top IT Trends 2025 Banner"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg leading-tight max-w-3xl">
            Top 5 IT Trends Transforming Businesses in 2025
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="min-h-screen max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-12 text-gray-800 bg-white">
        {/* Introduction */}
        <p className="mb-6 text-gray-700 leading-relaxed sm:leading-relaxed">
          In a frantically fast-paced digital economy, knowing about IT trends is
          not a question of choice but imperative for being ahead of the pack.
          Companies that procrastinate in applying new technologies or treat them
          as a cost element in the back room rather than an opportunity for
          innovation may find that competitors of greater agility surpass them.
        </p>

        <p className="mb-6 text-gray-700 leading-relaxed sm:leading-relaxed">
          As we enter the year 2025, the tempo of change in technology products
          is becoming intensified. Changes in technology mean new products, new
          ways of offering products, new expectations from buyers and from
          employees alike.
        </p>

        <p className="mb-6 text-gray-700 leading-relaxed sm:leading-relaxed">
          For a company like WT Softech, in the IT services, consulting and
          software development business, knowing the forces which are influencing
          the future is at once an obligation and an opportunity.
        </p>

        {/* Why Staying Ahead */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-10 mb-4">
          Why Staying Ahead of IT Trends Matters
        </h2>

        <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-6 text-gray-700 leading-relaxed">
          <li>
            <strong>Competitive Advantage:</strong> Companies that are first in
            using the new technologies identified have stronger productivity,
            improved customer service, and new revenue possibilities.
          </li>
          <li>
            <strong>Cost Optimisation:</strong> At maturity, all technology
            products become cheaper, more automated and of more economic
            consequence if they are taken advantage of at the right time.
          </li>
          <li>
            <strong>Talented Manpower Attraction and Retention:</strong> Developers,
            engineers and consultants want to work at the leading edge of platform
            technology and do not want to spend their time in mere legacy program
            maintenance.
          </li>
          <li>
            <strong>Risk Management:</strong> New technology products bring new
            security, compliance and governance risk. Advanced knowledge equips
            a company to anticipate and mitigate problems.
          </li>
          <li>
            <strong>Client Corroboration of Trust:</strong> If WT Softech can
            counsel its clients in the acquisition of leads that are desirable,
            it finds itself buried in the ranks of those who are forward-thinking
            or at least not one who merely fulfils orders.
          </li>
        </ul>

        <p className="mb-6 text-gray-700 leading-relaxed">
          The sections that follow will examine five areas of IT interest and
          importance at this time, already influencing their business in the
          year 2025.
        </p>

        {/* === AI in IT Consulting === */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-10 mb-4">
          AI in IT Consulting
        </h2>

        <p className="mb-4 text-gray-700 leading-relaxed">
          Artificial Intelligence (AI) continues to dominate the technology
          agenda, and in 2025, it has moved from experimental to integral.
          According to Deloitte and McKinsey, AI is becoming woven into the
          very foundation of IT architecture and business models.
        </p>

        <p className="mb-4 text-gray-700 leading-relaxed">
          Among the most significant IT consulting trends, the integration of AI
          stands out as a game-changer, reshaping how consulting firms design
          strategies, optimise processes, and deliver value to clients across
          industries.
        </p>

        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-6 mb-2">
          The Shift in AI Maturity
        </h3>

        <p className="mb-4 text-gray-700 leading-relaxed">
          In prior years, many organisations were “experimenting with AI.” By
          2025, the pattern has changed: AI is being scaled, embedded, and
          governed. For instance, IBM found that 46% of executives expect to
          scale AI in core operations, and 44% view it as a source of innovation.
          AI is no longer a bolt-on; it’s a baseline expectation.
        </p>

        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-6 mb-2">
          Key Implications for IT Consulting
        </h3>
        <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-6 text-gray-700 leading-relaxed">
          <li>
            <strong>Strategic Alignment over Pilot Projects:</strong> Integrate AI
            into core systems, ERP, CRM, and supply chain.
          </li>
          <li>
            <strong>Human + Machine Collaboration:</strong> AI augments humans
            with workflows, collaboration models, upskilling, and change
            management.
          </li>
          <li>
            <strong>Responsible AI, Governance, Risk & Compliance:</strong>
            Ethics, transparency, bias mitigation, explainability, privacy, and
            regulatory compliance.
          </li>
          <li>
            <strong>Agentic AI & Autonomous Systems:</strong> Advisory on tasks
            for autonomous systems, monitoring and risk mitigation.
          </li>
        </ul>

        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-6 mb-2">
          Use Cases & Business Impact
        </h3>
        <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-6 text-gray-700 leading-relaxed">
          <li>Predictive Operations: Forecasting demand, downtime, or bottlenecks.</li>
          <li>Generative Assistance: AI-generated code, content, or design proposals.</li>
          <li>Intelligent Agents: Bots or virtual assistants that take action.</li>
          <li>Decision Support: Insights and recommendations for leadership.</li>
        </ul>

        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-6 mb-2">
          How WT Softech Can Leverage AI
        </h3>
        <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-6 text-gray-700 leading-relaxed">
          <li>
            Develop AI-powered consulting packages: assessments, roadmaps, pilots,
            scaling.
          </li>
          <li>
            Build vertical domain expertise (finance, manufacturing, retail,
            healthcare).
          </li>
          <li>
            Offer governance and compliance modules: audits, bias assessments,
            explainability.
          </li>
          <li>
            Combine AI with cloud, agile, automation for integrated offerings.
          </li>
        </ul>

        {/* === Cloud-Driven IT Services === */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-10 mb-4">
          Cloud-Driven IT Services
        </h2>

        <div className="my-8 flex justify-center">
          <Image
            src="/images/cloud.png"
            alt="Top IT Trends 2025"
            width={800}
            height={450}
            className="rounded-2xl shadow-md object-cover"
          />
        </div>

        <p className="mb-4 text-gray-700 leading-relaxed">
          Cloud computing has been a mainstay for years, but in 2025, its role is
          evolving: the cloud is no longer just infrastructure but part of the
          intelligent backbone of businesses.
        </p>

        <p className="mb-4 text-gray-700 leading-relaxed">
          Managed IT support has become essential for maintaining these complex
          cloud environments, ensuring security, optimisation, and reliability as
          businesses increasingly depend on cloud-based ecosystems.
        </p>

        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-6 mb-2">
          The Evolution of Cloud Services
        </h3>

        <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-6 text-gray-700 leading-relaxed">
          <li>Cloud-Native Architecture Adoption: Microservices, serverless, containers.</li>
          <li>Hybrid and Multi-Cloud Dominance: Avoid vendor lock-in, resilience, best-of-breed.</li>
          <li>Edge and Distributed Cloud: Reduce latency and capacity constraints.</li>
          <li>Cloud Automation & IaC: Declarative, self-healing infrastructure.</li>
          <li>Managed Cloud Services/Platform Engineering: Full-stack support, monitoring, optimisation.</li>
        </ul>

        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-6 mb-2">
          Why Cloud-Driven Services Matter
        </h3>

        <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-6 text-gray-700 leading-relaxed">
          <li>Scalability & Agility: Expand or contract quickly based on demand.</li>
          <li>Operational Efficiency: Less manual overhead, more optimisation.</li>
          <li>Innovation Speed: Leverage built-in cloud services instead of building from scratch.</li>
          <li>Resilience & Business Continuity: Geographic redundancy, predictable uptime.</li>
          <li>Cost Model Shift: From CapEx to OpEx, pay-as-you-go pricing.</li>
        </ul>

        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-6 mb-2">
          Managed IT Support in the Cloud Era
        </h3>

        <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-6 text-gray-700 leading-relaxed">
          <li>CloudOps: Monitoring, incident response, optimisation across cloud stacks.</li>
          <li>Platform Engineering Teams: Internal platforms for developer productivity.</li>
          <li>DevSecOps: Continuous security integration.</li>
          <li>AI/ML-Powered Monitoring & Auto-Remediation.</li>
        </ul>

        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-6 mb-2">
          WT Softech Approach
        </h3>

        <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-6 text-gray-700 leading-relaxed">
          <li>Cloud transformation packages: assessment, migration, modernisation, optimisation.</li>
          <li>Cloud competency centres: AWS, Azure, GCP, Kubernetes.</li>
          <li>Managed cloud service plans: monitoring, backup, security, compliance, cost governance.</li>
          <li>Internal platform innovation: reusable microservices, shared components.</li>
          <li>Combine with AI services: cloud-based AI inference, automated ML pipelines.</li>
        </ul>

        {/* === Agile Product Development === */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-10 mb-4">
          Agile Product Development
        </h2>

        <p className="mb-4 text-gray-700 leading-relaxed">
          In 2025, agile software development continues to define how modern teams
          create, test, and scale digital products efficiently. Businesses
          prioritise flexibility, collaboration, and speed.
        </p>

        <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-6 text-gray-700 leading-relaxed">
          <li>Scaled Agility / Business Agility: Entire business adopts agile mindset.</li>
          <li>Lean Startup + MVP Thinking: Incremental release across internal and external products.</li>
          <li>Continuous Delivery & DevOps Integration: CI/CD, automated testing, infrastructure as code.</li>
          <li>Product-Centric Mindset: Long-lived product teams guided by value metrics and feedback.</li>
          <li>Experimentation, A/B testing, Data Feedback Loops: Analytics and telemetry drive iterations.</li>
        </ul>

        {/* === Automated Software Testing === */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-10 mb-4">
          Automated Software Testing
        </h2>

        <p className="mb-4 text-gray-700 leading-relaxed">
          Manual testing is fading in 2025, replaced by automated, AI-assisted,
          continuous testing to detect bugs, validate stability, and deliver
          high-performing applications at scale.
        </p>

        <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-6 text-gray-700 leading-relaxed">
          <li>Speed: Continuous delivery demands fast testing cycles.</li>
          <li>AI & ML: Smarter test generation, prioritisation, anomaly detection, self-healing suites.</li>
          <li>Industry Adoption: Automation is now the default in IT operations.</li>
        </ul>

        {/* === Digital Marketing === */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-10 mb-4">
          Digital Marketing for Tech Firms
        </h2>

        <p className="mb-4 text-gray-700 leading-relaxed">
          Visibility and engagement are crucial. A well-defined digital marketing
          strategy helps tech companies reach the right audience, generate
          qualified leads, and build lasting credibility.
        </p>

        <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-6 text-gray-700 leading-relaxed">
          <li>Complex Buyer Journeys: Multiple stakeholders, longer cycles, technical evaluation.</li>
          <li>Content & Thought Leadership: Whitepapers, tutorials, webinars, case studies, blogs.</li>
          <li>SEO Challenges for IT: Domain specialisation, thematic authority, semantic SEO.</li>
          <li>Account-based Marketing (ABM): Focus campaigns on high-value accounts with personalised messaging.</li>
          <li>Performance Marketing: Precise measurement, multi-touch attribution, ROI metrics.</li>
          <li>AI in Marketing: Tools for content generation, predictive analytics, chatbots, lead scoring.</li>
        </ul>

        {/* === Summary === */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-10 mb-4">
          Summary
        </h2>

        <p className="mb-6 text-gray-700 leading-relaxed">
          In 2025, technology is reshaping how businesses operate, innovate, and
          compete. From AI integration to cloud scalability, agile MVP
          development, QA automation, and smart digital marketing, each trend
          empowers companies to stay future-ready. For WT Softech, mastering these
          trends means leading clients confidently through the next era of
          digital transformation.
        </p>

        {/* === FAQ Section === */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-900">
            Frequently Asked Questions
          </h2>
          <ClientFAQ />
        </section>
      </main>
    </>
  );
}
