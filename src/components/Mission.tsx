import Image from "next/image";

export default function Mission() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Content */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          Our Mission
        </h2>
        <div className="flex items-start">
          {/* Blue Line */}
          <div className="w-[3px] bg-blue-600 mr-4 mt-1"></div>

          {/* Paragraph */}
          <p className="text-black leading-6 sm:leading-8 text-base sm:text-lg">
            At WT Softech, our mission is to empower businesses with
            cutting-edge technology and innovative solutions. We are always
            working to bridge the gap between ideas and execution. Our aim is to
            deliver excellence through cut-fit strategies, expert consulting,
            and seamless integration. We strive intending to drive growth,
            efficiency, and success for our clients in an ever-evolving digital
            world.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] rounded-lg overflow-hidden">
        <Image
          src="/Meet.png"
          alt="Mission Image"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>
    </section>
  );
}
