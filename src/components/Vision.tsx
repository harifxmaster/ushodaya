"use client";

export default function Vision() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 flex items-center justify-center">
      <div className="max-w-4xl text-center">

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
          A Vision of <span className="text-indigo-600">Hope</span> & Scaling
        </h2>

        {/* Paragraph - Always 3 lines */}
        <p
          className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-600 leading-relaxed
          max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-2xl xl:max-w-xl mx-auto line-clamp-3"
        >
          At WT Softech, innovation isn’t just a goal—it’s our foundation. Since our inception,
          we’ve been empowering businesses with smart, tailored solutions that drive real results.
          Our journey has been defined by <span className="font-medium text-gray-800">collaboration</span>,
          expertise, and a passion for helping organisations thrive in an ever-evolving digital landscape.
          With a client-first approach and deep industry insights, we craft strategies that fuel growth and success.
        </p>
      </div>
    </section>
  );
}
