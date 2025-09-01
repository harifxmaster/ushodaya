"use client";

import Image from "next/image";
import Link from "next/link";

export default function Wave2() {
  return (
    <div className="min-w-full flex flex-col items-center justify-start text-center bg-gradient-to-b from-white to-gray-100 relative px-4 pt-20 pb-10">


      <Link
        href="/services"
        className="text-sm text-blue-700 font-semibold mb-4 hover:underline"
      >
        &lt; BACK
      </Link>


      <h1 className="text-3xl font-extrabold mb-3">Service Details</h1>


      <p className="text-gray-500 text-sm max-w-md">
        We will help a client’s problems to develop the products they have with
        high quality. Change the appearance.
      </p>


      <div className="absolute left-4 top-2/4 transform -translate-y-1/2">
        <Image src="/images/wave.png" alt="left squiggle" width={80} height={40} />
      </div>


      <div className="absolute right-4 top-2/4 transform -translate-y-1/2">
        <Image src="/images/wave.png" alt="right squiggle" width={80} height={40} />
      </div>
    </div>
  );
}
