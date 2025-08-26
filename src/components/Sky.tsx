"use client";

import Image from "next/image";

export default function Sky() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 px-6 py-20 max-w-7xl mx-auto">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <Image
          src="/sky.png"
          alt="Skyscrapers"
          width={600}   // ✅ Required for Next.js <Image>
          height={400}  // ✅ Keeps aspect ratio
          className="w-full h-auto rounded-md object-cover shadow-lg"
        />
      </div>

      {/* Text Section with Left Blue Line */}
      <div className="w-full md:w-1/2">
        <div className="flex">
          {/* Vertical Blue Line */}
          <div className="w-1 bg-blue-600 mr-4 rounded-sm"></div>

          {/* Text Block */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-7 text-base">
              Our vision is to be a global leader in technology-driven transformation. <br />
              The way businesses operate and grow needs <br />
              a radical transformation, which we power. <br />
              We aim to create a future where <br />
              innovation, collaboration, and smart solutions <br />
              drive sustainable success. <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
