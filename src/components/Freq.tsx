"use client";

import { FaChevronRight } from "react-icons/fa";

const faqs = [
  "What industries do you develop products for?",
  "How long does product development take?",
  "Can you help with scaling after the launch?",
  "Do you offer prototypes before full development?",
  "What technologies do you use?",
  "What types of testing do you offer?",
];

export default function F() {
  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto border border-blue-500 p-6">
        <h2 className="text-2xl text-gray-800 font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-3">
          {faqs.map((question, index) => (
            <div
              key={index}
              className="bg-white px-4 py-3 flex justify-between items-center shadow-sm hover:bg-gray-50 cursor-pointer"
            >
              <span className="text-sm font-medium text-gray-900">{question}</span>
              <FaChevronRight className="text-purple-700 text-xs" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
