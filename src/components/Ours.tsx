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

export default function Services() {
  return (
    <section id="services" className="py-8 px-4 sm:px-6 md:px-12 bg-gray-50">

      <div className="max-w-7xl mx-auto text-center mb-10 px-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-900">
          Services We Offer
        </h2>
        <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
          WT Softech has expertise in IT consulting, product development, software testing,
          digital marketing, staffing solutions, IT services, and more.
        </p>
      </div>


      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
          >

            <div className="relative aspect-[4/3] w-full">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 28vw"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
