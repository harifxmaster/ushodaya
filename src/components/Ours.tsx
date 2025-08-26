"use client";

import Image from "next/image";

const services = [
  { title: "Product Development", img: "/product.png" },
  { title: "Software Testing", img: "/test.png" },
  { title: "IT Consulting", img: "/consult.png" },
  { title: "IT Services", img: "/say.png" },
  { title: "Staffing Solutions", img: "/staff.png" },
  { title: "Digital Marketing", img: "/hello.png" },
];

export default function Services() {
  return (
    <section id="services" className="py-16 px-4 sm:px-6 md:px-12 bg-gray-50">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-10 px-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Services We Offer
        </h2>
        <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
          We provide product development, IT consulting, digital marketing, and more.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="group cursor-pointer">
            {/* Image */}
            <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index === 0}
              />
            </div>

            {/* Title below image */}
            <div className="mt-3 text-center">
              <h3 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
