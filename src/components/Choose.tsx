"use client";

import Image from "next/image";
import { useState } from "react";

export default function Choose() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    {
      title: "Innovative Excellence",
      content: "We bring cutting-edge solutions that drive business success."
    },
    {
      title: "Unparalleled Expertise",
      content: "Our team consists of top professionals with years of experience."
    },
    {
      title: "Client-Centric Approach",
      content: "We prioritize your needs to deliver customized strategies."
    },
    {
      title: "Proven Track Record",
      content: "Our portfolio showcases successful projects and happy clients."
    },
    {
      title: "Future-Ready Solutions",
      content: "We prepare your business for upcoming challenges and growth."
    }
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 mb-6">
            The value and expertise we bring cannot be found anywhere. For the
            ultimate digital impression and IT growth, you need to contact us.
          </p>
          <div className="w-full h-64 relative">
            <Image
              src="/Build.png" // Replace with your image path
              alt="Why Choose Us"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right Accordion */}
        <div>
          {items.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-200 py-4"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between text-left text-gray-700 font-medium"
              >
                {item.title}
                <span
                  className={`text-gray-500 text-xl transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
