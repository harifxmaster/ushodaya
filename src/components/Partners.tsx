"use client";

import Image from "next/image";

const partners = [
  "/images/memss.png",
  "/images/fxlogo.png",
  "/images/sant.png",
  "/images/will.png",
  "/images/pixel.png",
  "/images/usho.png",
];

export default function Partners() {
  return (
    <section id="partners" className="w-full">
      {/* Blue title bar */}
      <div className="w-full bg-gradient-to-r from-blue-900 to-blue-600 py-12 px-6 text-center text-white">
        <h2 className="text-3xl font-bold">
          Our Trusted Tech Partners & Toolkits
        </h2>
      </div>


      <div className="w-full bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {partners.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`Partner ${index + 1}`}
              className="w-48 h-28 object-contain bg-white p-4 rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
