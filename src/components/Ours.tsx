"use client";

import Image from "next/image";

const services = [
  { title: "Product Development", img: "/images/product.png" },
  { title: "Software Testing", img: "/images/St.png" },
  { title: "IT Consulting", img: "/images/ITC.png" },
  { title: "IT Services", img: "/images/ITS.png" },
  { title: "Staffing Solutions", img: "/images/ss.png" },
  { title: "Digital Marketing", img: "/images/Digital.png" },
];

export default function Ours() {
  return (
    <section id="services" className="py-10 px-4 sm:px-6 md:px-12 bg-white">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-10 px-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-900">
          Services we Offer
        </h2>
        <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-3xl mx-auto">
          WT Softech has expertise in IT consulting, product development, software testing,
          digital marketing, staffing solutions, IT services, and more.
        </p>
      </div>

      {/* Cards - Only images */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <div className="relative aspect-square w-full">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
