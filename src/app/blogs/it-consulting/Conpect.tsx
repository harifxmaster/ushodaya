"use client";

import { motion } from "framer-motion";

export default function ItConsultingChecklist() {
  return (
    <section className="bg-transparent text-gray-800 py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6"
        >
          An IT Consulting Checklist: Is Your Tech Stack an Asset or Liability?
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg leading-8 max-w-3xl mx-auto mb-10"
        >
          Here’s a simple checklist to evaluate your current situation. Use it to spot
          red flags and plan improvements strategically.
        </motion.p>

        {/* Responsive Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full border border-gray-300 rounded-lg shadow-md bg-white mx-auto text-left text-gray-700 border-collapse">
            <thead className="bg-blue-600 text-white border-b border-gray-300">
              <tr>
                <th className="border border-gray-300 px-6 py-4 text-lg font-semibold text-center">
                  Evaluation Area
                </th>
                <th className="border border-gray-300 px-6 py-4 text-lg font-semibold text-center">
                  Questions to Ask
                </th>
                <th className="border border-gray-300 px-6 py-4 text-lg font-semibold text-center">
                  Asset
                </th>
                <th className="border border-gray-300 px-6 py-4 text-lg font-semibold text-center">
                  Liability
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-300">
              {/* Scalability */}
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-6 py-4 font-semibold text-center">
                  Scalability
                </td>
                <td className="border border-gray-300 px-6 py-4 text-center">
                  Can your stack grow with demand?
                </td>
                <td className="border border-gray-300 px-6 py-4 text-green-600 font-medium text-center">
                  Auto-scales easily
                </td>
                <td className="border border-gray-300 px-6 py-4 text-red-600 font-medium text-center">
                  Slows or fails under load
                </td>
              </tr>

              {/* Integration */}
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-6 py-4 font-semibold text-center">
                  Integration
                </td>
                <td className="border border-gray-300 px-6 py-4 text-center">
                  Do your tools connect efficiently?
                </td>
                <td className="border border-gray-300 px-6 py-4 text-green-600 font-medium text-center">
                  Unified workflows
                </td>
                <td className="border border-gray-300 px-6 py-4 text-red-600 font-medium text-center">
                  Manual data handling
                </td>
              </tr>

              {/* Security */}
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-6 py-4 font-semibold text-center">
                  Security
                </td>
                <td className="border border-gray-300 px-6 py-4 text-center">
                  Are systems fully protected?
                </td>
                <td className="border border-gray-300 px-6 py-4 text-green-600 font-medium text-center">
                  Regular audits &amp; compliance
                </td>
                <td className="border border-gray-300 px-6 py-4 text-red-600 font-medium text-center">
                  Outdated protection
                </td>
              </tr>

              {/* Performance */}
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-6 py-4 font-semibold text-center">
                  Performance
                </td>
                <td className="border border-gray-300 px-6 py-4 text-center">
                  Do users enjoy fast response times?
                </td>
                <td className="border border-gray-300 px-6 py-4 text-green-600 font-medium text-center">
                  Stable and reliable
                </td>
                <td className="border border-gray-300 px-6 py-4 text-red-600 font-medium text-center">
                  Frequent lag or crashes
                </td>
              </tr>

              {/* Innovation Speed */}
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-6 py-4 font-semibold text-center">
                  Innovation Speed
                </td>
                <td className="border border-gray-300 px-6 py-4 text-center">
                  Can you release updates quickly?
                </td>
                <td className="border border-gray-300 px-6 py-4 text-green-600 font-medium text-center">
                  Agile CI/CD process
                </td>
                <td className="border border-gray-300 px-6 py-4 text-red-600 font-medium text-center">
                  Long deployment cycles
                </td>
              </tr>

              {/* Cost Efficiency */}
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-6 py-4 font-semibold text-center">
                  Cost Efficiency
                </td>
                <td className="border border-gray-300 px-6 py-4 text-center">
                  Are you maximising ROI?
                </td>
                <td className="border border-gray-300 px-6 py-4 text-green-600 font-medium text-center">
                  Lean and optimised
                </td>
                <td className="border border-gray-300 px-6 py-4 text-red-600 font-medium text-center">
                  Paying for unused tools
                </td>
              </tr>

              {/* Data Insights */}
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-6 py-4 font-semibold text-center">
                  Data Insights
                </td>
                <td className="border border-gray-300 px-6 py-4 text-center">
                  Do you get clear business metrics?
                </td>
                <td className="border border-gray-300 px-6 py-4 text-green-600 font-medium text-center">
                  Centralised reporting
                </td>
                <td className="border border-gray-300 px-6 py-4 text-red-600 font-medium text-center">
                  Scattered or missing data
                </td>
              </tr>

              {/* Employee Productivity */}
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-6 py-4 font-semibold text-center">
                  Employee Productivity
                </td>
                <td className="border border-gray-300 px-6 py-4 text-center">
                  Do tools empower teams?
                </td>
                <td className="border border-gray-300 px-6 py-4 text-green-600 font-medium text-center">
                  Seamless collaboration
                </td>
                <td className="border border-gray-300 px-6 py-4 text-red-600 font-medium text-center">
                  Constant workarounds
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Closing paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg leading-8 mt-10 max-w-3xl mx-auto"
        >
          If multiple warning signs appear, your tech stack likely needs urgent
          attention and a structured IT strategic plan to fix it.
        </motion.p>
      </div>
    </section>
  );
}
