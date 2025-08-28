"use client";

import Image from "next/image";
import Link from "next/link";

export default function Wave() {
  return (
    <main>

      <section className="relative flex flex-col items-center text-center py-20 sm:py-28 md:py-40 px-4">

        <div className="absolute left-4 top-16 sm:left-10 sm:top-28 md:left-20 md:top-40">
          <Image
            src="/images/wave.png"
            alt="wave"
            width={80}
            height={50}
            className="opacity-70"
          />
        </div>


        <div className="absolute right-4 top-16 sm:right-10 sm:top-28 md:right-20 md:top-40">
          <Image
            src="/images/wave.png"
            alt="wave"
            width={80}
            height={50}
            className="opacity-70"
          />
        </div>


        <h2 className="text-sm sm:text-base md:text-lg text-blue-900 font-medium flex flex-wrap gap-1">
          <Link href="/" className="hover:underline hover:text-blue-600">
            Home
          </Link>
          <span>/</span>
          <span>Services</span>
        </h2>


        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-3">
          Services
        </h1>


        <p className="text-gray-500 max-w-md sm:max-w-xl mt-6 text-sm sm:text-base leading-relaxed">
          We will help a client&apos;s problems to develop the products they
          have with high quality. Change the appearance.
        </p>
      </section>
    </main>
  );
}
