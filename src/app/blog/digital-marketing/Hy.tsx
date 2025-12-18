import Image from "next/image";

export default function OutsourcedITServices() {
  return (
    <main className="w-full bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* PAGE TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          What Are Outsourced IT Services?
        </h1>

        {/* INTRO */}
        <p className="mt-6 text-lg leading-relaxed text-gray-700">
          Outsourced IT services involve hiring a third-party technology partner to
          manage some or all of your IT operations. This could include support,
          security, network monitoring, cloud management, software deployment, or
          strategy planning.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          Many SMEs choose managed IT services for small businesses because it offers:
        </p>

        {/* BENEFITS LIST */}
        <ul className="mt-6 space-y-3 list-disc list-inside text-lg text-gray-700">
          <li>Expertise on demand</li>
          <li>Predictable monthly costs</li>
          <li>Access to advanced tools and specialists</li>
          <li>24/7 monitoring and issue resolution</li>
        </ul>

        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          Your business gets a dedicated IT partner without the overhead of full-time
          employees.
        </p>

        {/* SECTION: IN-HOUSE WHEN IT MAKES SENSE */}
        <h2 className="mt-16 text-2xl font-semibold text-gray-900">
          In-house IT: When It Makes Sense for SMEs
        </h2>

        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          While outsourcing is popular among SMEs for its cost and convenience
          benefits, there are specific situations where opting for an in-house IT team
          is the smarter decision.
        </p>

        {/* INFOGRAPHIC IMAGE */}
       <div className="mt-10 w-full max-w-3xl mx-auto">
  <Image
    src="/images/info.png"
    alt="In-house vs Outsourced IT infographic for SMEs"
    width={1200}
    height={200}
    className="rounded-xl shadow-md w-full h-auto object-contain"
  />
</div>


        {/* IN-HOUSE REASONS */}
        <div className="mt-12 space-y-6">

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              You Require Deep Process Knowledge
            </h3>
            <p className="mt-2 text-lg leading-relaxed text-gray-700">
              If your business operations are highly customised or rely on proprietary
              software, an internal team may better understand your systems. For
              industries like manufacturing, finance, or healthcare, technical
              processes are often integrated with daily operations, making internal
              expertise valuable.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Security and Data Control Are Top Priorities
            </h3>
            <p className="mt-2 text-lg leading-relaxed text-gray-700">
              Some SMEs manage highly sensitive data and may prefer to keep all IT
              operations internal. In industries where compliance is strict or client
              information is confidential, internal control can provide a sense of
              security.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              You Need Immediate On-site Support
            </h3>
            <p className="mt-2 text-lg leading-relaxed text-gray-700">
              If your operations depend heavily on physical hardware like servers,
              production machines, or POS systems, an in-house team can deliver
              instant troubleshooting.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              You Are Growing Fast and Want Dedicated IT Alignment
            </h3>
            <p className="mt-2 text-lg leading-relaxed text-gray-700">
              A rapidly expanding SME may want its IT team deeply involved in strategy
              development, training, and internal innovation. Internal teams can adapt
              faster to organisational changes than external partners.
            </p>
          </div>

        </div>

        {/* SECTION: OUTSOURCED IT WHEN BETTER */}
        <h2 className="mt-16 text-2xl font-semibold text-gray-900">
          Outsourced IT: When It’s the Better Choice for SMEs
        </h2>

        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          Most small businesses today lean towards outsourced IT services, especially
          when flexibility and cost savings matter. Here’s when outsourcing is ideal:
        </p>

        {/* OUTSOURCED REASONS */}
        <div className="mt-8 space-y-6">

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              You Want to Reduce Costs Without Sacrificing Quality
            </h3>
            <p className="mt-2 text-lg leading-relaxed text-gray-700">
              A full-time IT staff is expensive; salaries, benefits, tools, training,
              and upskilling add up quickly. Outsourcing drastically lowers operational
              costs while giving you access to top-tier experts.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              You Don’t Have Core IT Expertise
            </h3>
            <p className="mt-2 text-lg leading-relaxed text-gray-700">
              Many SMEs struggle to find and retain skilled IT professionals.
              Outsourcing eliminates this challenge by giving access to a ready team
              with specialised knowledge in networking, cloud services, cybersecurity,
              and more.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              You Need Round-the-Clock Monitoring
            </h3>
            <p className="mt-2 text-lg leading-relaxed text-gray-700">
              IT downtime can lead to financial losses and unhappy customers.
              Outsourced teams offer 24/7 monitoring, faster issue resolution, and
              proactive maintenance.
            </p>
          </div>

        </div>

        {/* CLOSING */}
        <p className="mt-12 text-lg leading-relaxed text-gray-700">
          The right model depends on what your SME needs today and what it aims for
          tomorrow.
        </p>

      </div>
    </main>
  );
}
