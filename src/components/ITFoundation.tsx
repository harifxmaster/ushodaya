"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">


        <div className="flex justify-center">
          <Image
            src="/images/hi.png"
            alt="Team working together"
            className="w-[500px] h-[450px] object-cover rounded-xl shadow-2xl"
          />
        </div>


        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            We Create A Goal-Focused IT Foundation & <br />
            Digital Presence
          </h2>
          <p className="mb-6 text-lg text-gray-200">
            WT Softech creates an IT foundation that is almost impossible to break.
            Additionally, our digital solutions pile upon it, giving you security and
            a presence that speaks louder to your audience. The solutions we curate
            are personalised for your needs—because we listen and craft strategies
            that align with you.
          </p>
          <p className="mb-6 text-lg text-gray-200">
            We make sure reliability, scalability, and innovativeness tangle through
            every step. You can stay on top of every advancement that is in line with
            the future you envision.
          </p>
          <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
