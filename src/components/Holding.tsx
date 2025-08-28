import Image from "next/image";

export default function HoldingPage() {
  return (
    <main className="w-full bg-white">

      <section className="w-full bg-white py-7 sm:py-26 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col md:flex-row items-start gap-8 md:gap-12">


          <div className="md:w-1/2">
            <h1 className="text-3xl sm:text-2xl md:text-4xl font-bold leading-snug">
              Holding The Reins To <br />
              Your Success{" "}
              <span className="text-blue-600">
                With Expertise &amp; Innovation
              </span>
            </h1>
          </div>


          <div className="md:w-1/2 flex gap-4">

            <div className="w-[3px] bg-blue-600 flex-shrink-0"></div>


            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              WT Softech is where innovation meets technology! We’re a passionate
              team of problem-solvers, who help businesses thrive with
              cutting-edge IT solutions. From product development and software
              testing to IT consulting, staffing, and digital marketing, we craft
              solutions that drive success. Whether you’re a startup or an
              enterprise, we bring expertise, creativity, and commitment to every
              project. Let’s transform your ideas into reality, optimise your
              operations, and fuel your growth. Ready to elevate your business
              with smart technology? Let’s make it happen together!
            </p>
          </div>

        </div>
      </section>


      <section className="w-full">
        <div className="relative w-full h-64 sm:h-80 md:h-[500px]">
          <Image
            src="/images/sean.png"
            alt="Holding Image"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>
    </main>
  );
}
