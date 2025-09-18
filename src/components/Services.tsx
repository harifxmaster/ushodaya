"use client";

import Image from "next/image";

const services = [
  {
    title: "Product Development",
    img: "/images/product.png",
    description: "Building cutting-edge products tailored to your business needs.",
  },
  {
    title: "Software Testing",
    img: "/images/St.png",
    description: "Ensuring quality and reliability through robust testing processes.",
  },
  {
    title: "IT Consulting",
    img: "/images/ITC.png",
    description: "Strategic IT guidance to optimize business operations.",
  },
  {
    title: "IT Services",
    img: "/images/ITS.png",
    description: "Comprehensive IT services for seamless digital transformation.",
  },
  {
    title: "Staffing Solutions",
    img: "/images/ss.png",
    description: "Connecting businesses with the right talent for success.",
  },
  {
    title: "Digital Marketing",
    img: "/images/Digital.png",
    description: "Boost your brand visibility with data-driven marketing strategies.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-10 px-4 sm:px-6 md:px-12 bg-white">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-10 px-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-900">
          Services We Offer
        </h2>
        <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-3xl mx-auto">
          WT Softech has expertise in IT consulting, product development, software testing,
          digital marketing, staffing solutions, IT services, and more.
        </p>
      </div>

      {/* Cards with Hover Effect */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="relative aspect-square w-full">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index === 0}
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center px-4">
                  <h3 className="text-white text-lg md:text-xl font-semibold mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-sm md:text-base translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
