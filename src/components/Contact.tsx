"use client";

import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Let’s Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            Contact us and let us know how we can add value to your business.
          </p>

          <form className="flex flex-col gap-6">
            <div>
              <label className="block mb-2 text-gray-700">Name</label>
              <input
                type="text"
                className="w-full border-2 border-blue-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700">Email</label>
              <input
                type="email"
                className="w-full border-2 border-blue-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700">Message</label>
              <textarea
                className="w-full border-2 border-blue-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-blue-900 to-blue-600 text-white font-semibold px-10 py-3 rounded-xl hover:opacity-90"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Side (Image + Contact Info) */}
        <div className="flex flex-col items-center md:items-start">
          {/* ✅ Fixed Image with width & height */}
          <Image
            src="/images/imagee.png"
            alt="Contact"
            width={500}
            height={400}
            className="rounded-lg shadow-lg w-full max-w-md h-auto"
          />

          <div className="mt-8 space-y-4 text-gray-700">
            <p className="flex items-start gap-3">
              <span className="text-blue-600 text-lg">📍</span>
              Plot No.172, First Floor, Kavuri Hills (Phase II), Madhapur, Hyderabad, 500081
            </p>
            <p className="flex items-center gap-3">
              <span className="text-blue-600 text-lg">📞</span>
              +20-34 4040 3030
            </p>
            <p className="flex items-center gap-3">
              <span className="text-blue-600 text-lg">✉️</span>
              hr@wtsoftech.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
