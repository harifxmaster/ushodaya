import Image from "next/image";

export default function InHouseVsOutsourcedIT() {
  return (
    <main className="w-full bg-white text-gray-800">

      {/* ================= BANNER IMAGE ================= */}
      <section className="relative w-full h-[280px] md:h-[380px] lg:h-[450px]">
        <Image
          src="/images/house.png"
          alt="In-house vs Outsourced IT for SMEs"
          fill
          priority
          className="object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* BANNER CONTENT */}
        <div className="absolute inset-0 flex items-center pt-16 sm:pt-20">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              When to Choose In-house vs Outsourced IT
            </h1>
            <p className="mt-3 text-lg md:text-xl text-gray-200 max-w-3xl">
              A Decision Guide for SMEs
            </p>
          </div>
        </div>
      </section>
      {/* ================= END BANNER ================= */}

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* INTRO */}
        <p className="text-lg leading-relaxed text-gray-700">
          A major decision for small and medium-sized businesses (SMEs) is choosing
          between in-house vs outsourced IT to provide support and resources.
          Whatever decision you make will ultimately impact your overall operating
          costs, the company’s ability to continue operations during an emergency,
          the cost of protecting confidential information, and the ability of an
          organisation to develop new products and services over time.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          Some SMEs will derive great benefit from developing an in-house development
          function, while others may realise much greater value from leveraging
          outsourced IT services for their operations.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          The SME IT Decision Guide from <strong>Ushodaya Services</strong> can assist SMEs
          in their decision-making process by educating them on when to use each type
          of service, how to evaluate the strengths and weaknesses of both
          alternatives, and how to make sure their IT system supports their growth
          plans.
        </p>

        {/* WHY IT MODEL MATTERS */}
        <h2 className="mt-14 text-2xl font-semibold text-gray-900">
          Why the IT Model You Choose Matters for SMEs
        </h2>

        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          Technology now sits at the centre of almost every business, whether you’re
          running an e-commerce platform, a manufacturing unit, a healthcare outlet,
          or a logistics service. With increasing digital dependency comes the need
          for reliable IT infrastructure, strong security systems, and round-the-clock
          monitoring.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          However, SMEs often struggle with:
        </p>

        {/* CHALLENGES */}
        <div className="mt-8 space-y-6">

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Limited Budgets
            </h3>
            <p className="mt-2 text-lg leading-relaxed text-gray-700">
              Small and medium businesses usually operate with tight financial
              constraints, making it difficult to hire full-time IT specialists,
              invest in costly tools, or maintain advanced security infrastructure.
              Every technology decision must deliver maximum value at minimal cost.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Shortage of Skilled IT Professionals
            </h3>
            <p className="mt-2 text-lg leading-relaxed text-gray-700">
              The demand for qualified IT experts is high, and SMEs often lose talent
              to larger companies that offer higher salaries and broader growth
              opportunities. This makes recruitment slow, costly, and competitive.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Continuous Upgrades and Security Demands
            </h3>
            <p className="mt-2 text-lg leading-relaxed text-gray-700">
              Technology evolves rapidly, and so do cybersecurity threats. SMEs must
              constantly update systems, patch vulnerabilities, and adopt new tools,
              yet many lack the internal capacity to stay ahead of these demands.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Balancing Daily IT Operations with Long-term Strategy
            </h3>
            <p className="mt-2 text-lg leading-relaxed text-gray-700">
              Most small businesses juggle routine issues like troubleshooting,
              backups, and software maintenance. In the process, strategic planning
              such as digital transformation, cloud adoption, or process automation
              takes a back seat, limiting growth potential.
            </p>
          </div>

        </div>

        {/* IN-HOUSE IT */}
        <h2 className="mt-16 text-2xl font-semibold text-gray-900">
          What Is In-house IT Management?
        </h2>

        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          An in-house IT team consists of full-time employees who handle your
          company’s technology needs from troubleshooting and network maintenance to
          cybersecurity and strategic planning. They work exclusively for your
          organisation and are fully aligned with your internal processes.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          Common roles in an in-house IT team include:
        </p>

        <ul className="mt-6 space-y-4 list-disc list-inside text-lg text-gray-700">
          <li><strong>IT Manager:</strong> Oversees technology strategy and operations.</li>
          <li><strong>System / Network Administrator:</strong> Manages servers and networks.</li>
          <li><strong>Helpdesk Technician:</strong> Handles day-to-day employee support.</li>
          <li><strong>Cybersecurity Expert:</strong> Protects systems and data.</li>
          <li><strong>Cloud Specialist:</strong> Manages cloud platforms and scalability.</li>
        </ul>

        <p className="mt-8 text-lg leading-relaxed text-gray-700">
          Building such a team gives SMEs direct control and instant response, but it
          comes with higher costs and recruitment challenges.
        </p>

      </div>
      {/* ================= END CONTENT ================= */}
    </main>
  );
}
