"use client";

import Image from "next/image";

export default function ITFoundationSection() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white mb-20 py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 items-center gap-20">


        <div className="flex items-center justify-center">
          <Image
            src="/images/Three.png" // your single combined image
            alt="IT Foundation"
            width={800}
            height={600}
            className="w-150 h-auto rounded-xl object-cover shadow-2xl"
            priority
          />
        </div>

        {/* === Text Section === */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            We Create A Goal-Focused IT <br />
            Foundation & Digital Presence
          </h2>
          <p className="mt-6 text-lg text-gray-200 leading-relaxed">
            WT Softech creates an IT foundation that is almost impossible to break.
            Additionally, our digital solutions pile upon it, giving you security
            and a presence that speaks louder to your audience. The solutions we
            curate are personalised for your needs—because we listen and craft
            strategies that align with you. We make sure reliability, scalability,
            and innovativeness tangle through every step. You can stay on top of
            every advancement that is in line with the future you envision.
          </p>
        </div>
      </div>
    </section>
  );
}
