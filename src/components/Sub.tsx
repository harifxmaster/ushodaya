"use client";

import Image from "next/image";

export default function Sub() {
  return (
    <section className="relative w-full h-[350px] md:h-[450px] lg:h-[500px]">

      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/Subgirl.png"
          alt="Newsletter background"
          fill
          className="object-cover object-[center_top_30%]" // shifted down
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 -z-5 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 md:px-6">
        <div className="w-full max-w-[700px] text-center">
          <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-3">
            Sign Up for Our Newsletters
          </h2>

          <p className="text-gray-200 text-xs md:text-sm max-w-xl mx-auto mb-5">
            Get notified of the best deals on our WordPress themes.
          </p>

          {/* Form */}
          <form className="flex items-center w-full max-w-[500px] mx-auto bg-white rounded-md overflow-hidden shadow-md mb-3">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-3 py-2 text-gray-700 placeholder-gray-400 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gray-800 text-white px-5 py-2 text-sm font-medium hover:bg-gray-700 transition"
            >
              Subscribe
            </button>
          </form>

          {/* Terms */}
          <label className="flex items-start justify-center gap-2 text-gray-200 text-[10px] leading-snug max-w-[500px] mx-auto">
            <input
              type="checkbox"
              className="mt-1 w-3 h-3 accent-gray-200"
              aria-label="Agree to terms"
            />
            <span>
              By checking this box, you confirm that you have read and are
              agreeing to our{" "}
              <a className="underline" href="/terms">
                terms of use
              </a>{" "}
              regarding the storage of the data submitted through this form.
            </span>
          </label>
        </div>
      </div>
    </section>
  );
}
