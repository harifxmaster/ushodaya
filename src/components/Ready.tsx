import Image from "next/image";

export default function Ready() {
  return (
    <section className="relative bg-blue-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta-bg.jpg" // Replace with your image path
          alt="Call to Action"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Are You Ready for a Leap that Takes You to the Next Level?
        </h2>
        <p className="text-gray-200 mb-8">
          Get in touch with our team and let&apos;s generate ideas and execute plans
          for your ultimate transformation.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition">
            Contact Us
          </button>
          <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-blue-900 transition">
            Get Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
