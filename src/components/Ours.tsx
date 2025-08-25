"use client";

import Image from "next/image";

const services = [
  { title: "Product Development", img: "/images/product.png" },
  { title: "Software Testing", img: "/images/test.png" },
  { title: "IT Consulting", img: "/images/consult.png" },
  { title: "IT Services", img: "/images/say.png" },
  { title: "Staffing Solutions", img: "/images/staff.png" },
  { title: "Digital Marketing", img: "/images/hello.png" },
];

export default function Ours() {
  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Services We Offer</h2>
        <p className="text-gray-600 mt-2">
          We offer multiple services including product development, IT consulting, digital marketing and more.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-xl shadow hover:shadow-lg transition">
            <Image src={service.img} alt={service.title} className="rounded-t-xl w-full h-100 object-cover" />
            <div className="p-4">
              {/* <h3 className="text-lg font-semibold">{service.title}</h3> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
