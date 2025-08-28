"use client";

import Image from "next/image";

const partners = [
  "/images/memss.png",
  "/images/fX.png",
  "/images/san.png",
  "/images/will.png",
  "/images/pixel.png",
  "/images/ush.png",
];

export default function Partners() {
  return (
    <section id="partners" className="w-full">
      {/* Header Section */}
      <div className="w-full bg-gradient-to-r from-blue-900 to-blue-600 py-12 px-6 text-center text-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Our Trusted Tech Partners & Toolkits
        </h2>
      </div>

      {/* Logos Section */}
      <div className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 sm:gap-8 place-items-center">
          {partners.map((logo, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
            >
              <Image
                src={logo}
                alt={`Partner ${index + 1}`}
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
