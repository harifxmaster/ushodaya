"use client";

import Image from "next/image";

export default function Card() {
  return (
    <section className="w-full flex justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-20 bg-white">
      <div className="relative w-full max-w-7xl h-80 sm:h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-lg">

        <Image
          src="/images/Base.png"
          alt="Future of Work"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white">
            Future of Work
          </h2>
          <p className="text-white text-sm sm:text-base mt-1">
            Majority of people will work in jobs that don’t exist today.
          </p>

          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/Avatar.png"
                alt="Author"
                width={32}
                height={32}
                className="rounded-full border border-white"
              />
              <div className="flex flex-col">
                <span className="text-white text-sm font-semibold">Lina Hicks</span>
                <span className="text-blue-300 text-xs">✔ Verified writer</span>
              </div>
            </div>

            <span className="text-white text-xs sm:text-sm">02 May</span>
          </div>
        </div>
      </div>
    </section>
  );
}
