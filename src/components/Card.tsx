"use client";

import Image from "next/image";

export default function Card() {
  return (
    <section className="w-full flex justify-center px-24 py-38 bg-white">
      <div className="relative w-full max-w-3xl h-72 rounded-2xl overflow-hidden shadow-lg">
        {/* Background Image */}
        <Image
          src="/images/future-work.jpg" // <-- replace with your image
          alt="Future of Work"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <h2 className="text-2xl font-extrabold text-white">
            Future of Work
          </h2>
          <p className="text-white text-base mt-1">
            Majority of people will work in jobs that don’t exist today.
          </p>

          {/* Footer Row */}
          <div className="flex justify-between items-center mt-4">
            {/* Author */}
            <div className="flex items-center space-x-2">
              <Image
                src="/images/author.jpg" // <-- replace with author avatar
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

            {/* Date */}
            <span className="text-white text-sm">02 May</span>
          </div>
        </div>
      </div>
    </section>
  );
}
