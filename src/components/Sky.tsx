"use client";
import Image from "next/image";

export default function Sky() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        {/* parent flex: columns stack on small screens, sit side-by-side on md+ */}
        <div className="flex flex-col md:flex-row items-stretch gap-10">

          {/* LEFT: image (wider than text on desktop) */}
          <div className="w-full md:w-7/12">
            <div className="relative w-full h-64 md:h-[420px] lg:h-[480px] rounded-md overflow-hidden shadow-lg">
              <Image
                src="/images/Build.png"
                alt="Skyscrapers"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* RIGHT: heading + vertical bar + paragraph */}
          <div className="w-full md:w-5/12 flex items-center">
            <div className="flex items-start">
              {/* vertical blue bar (hidden on small screens). Adjust h-[220px] to match the paragraph height */}
              <div className="hidden md:block w-[3px] bg-[#3b82f6] rounded-sm mr-6 mt-3 h-[220px]" />

              {/* text content */}
              <div className="max-w-[360px]">
                <h3 className="text-2xl md:text-[26px] font-semibold text-[#0f2540] mb-4">
                  Our Vision
                </h3>

                <p className="text-gray-500 text-xl md:text-[15px] leading-7">
                  Our vision is to be a global leader in technology-driven transformation. The way businesses operate and grow needs a radical transformation, which we power. We aim to create a future where innovation, collaboration, and smart solutions drive sustainable success.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
